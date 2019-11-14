"""Turns on speakers and plays Spotify while slowly ramping the volume.

# Example `apps.yaml` config:
```
wake_up_with_spotify:
  module: wake_up_with_spotify
  class: WakeUpWithSpotify
  speaker: media_player.kef
  speaker_name: "KEF LS50 Wireless"
  playlist: "spotify:playlist:6rPTm9dYftKcFAfwyRqmDZ"
  total_time: 900
  final_volume: 0.3
  input_boolean: input_boolean.wake_up_with_spotify
```
# Example `configuration.yaml`:
```
input_boolean:
  wake_up_with_spotify:
    name: Start wake up with Spotify
    initial: off
    icon: mdi:music
```
"""

import math
from functools import partial

import appdaemon.plugins.hass.hassapi as hass


DEFAULT_SPEAKER = "media_player.kef"
DEFAULT_SPEAKER_NAME = "KEF LS50 Wireless"
DEFAULT_PLAYLIST = "6rPTm9dYftKcFAfwyRqmDZ"
DEFAULT_TOTAL_TIME = 300
DEFAULT_FINAL_VOLUME = 0.3
DEFAULT_INPUT_BOOLEAN = "input_boolean.wake_up_with_spotify"


def time_step(total_time, final_volume, step):
    return total_time / math.floor(final_volume / step)


class WakeUpWithSpotify(hass.Hass):
    def initialize(self):
        self.speaker = self.args.get("speaker", DEFAULT_SPEAKER)
        self.speaker_name = self.args.get("speaker_name", DEFAULT_SPEAKER_NAME)
        self.playlist = self.args.get("playlist", DEFAULT_PLAYLIST)
        self.total_time = self.args.get("total_time", DEFAULT_TOTAL_TIME)
        self.final_volume = self.args.get("final_volume", DEFAULT_FINAL_VOLUME)
        self.input_boolean = self.args.get("input_boolean", DEFAULT_INPUT_BOOLEAN)

        self.call_spotify = partial(self.call_service, entity_id="media_player.spotify")
        self.call_speaker = partial(self.call_service, entity_id=self.speaker)

        self.volume = 0
        self.min_volume_step = 0.01
        self.dt = time_step(self.total_time, self.final_volume, self.min_volume_step)

        self.listen_state(self.start_speaker_cb, self.input_boolean, new="on")

    def start_speaker_cb(self, entity, attribute, old, new, kwargs):
        # Copied from `start_spotify.py`, in AD 4 call `self.start_app` instead.
        self.set_state(self.input_boolean, state="off")
        self.turn_on(self.speaker)
        self.call_speaker("media_player/select_source", source="Wifi")
        if self.get_state(self.speaker) == "on":
            self.start_spotify()
        else:
            # In AD 4, this can use the `immediate` kwarg and leave out
            # the if-clause.
            self.listen_state(self.start_spotify_cb, self.speaker, new="on")

    def start_spotify_cb(self, entity, attribute, old, new, kwargs):
        # Copied from `start_spotify.py`, in AD 4 call `self.start_app` instead.
        self.start_spotify()

    def start_spotify(self, kwargs=None):
        # Copied from `start_spotify.py`, in AD 4 call `self.start_app` instead.
        source_list = self.get_state("media_player.spotify", attribute="source_list")
        if source_list is None or self.speaker_name not in source_list:
            self.call_spotify("homeassistant/update_entity")
            self.run_in(self.start_spotify, 1)
        else:
            self.call_spotify("media_player/select_source", source=self.speaker_name)
            self.start_playlist()

    def start_playlist(self):
        # Copied from `start_spotify.py`, in AD 4 call `self.start_app` instead.
        self.call_speaker("media_player/volume_set", volume_level=self.volume)
        self.call_service(
            "spotify/play_playlist", media_content_id=self.playlist, random_song=True,
        )
        self.call_spotify("media_player/media_play")

        self.volume_ramp_cb()  # Only added this.

    def set_volume(self, volume):
        self.call_speaker("media_player/volume_set", volume_level=volume)

    def volume_ramp_cb(self, kwargs=None):
        self.volume += self.min_volume_step
        if self.volume >= self.final_volume:
            return
        self.log(f"Setting volume: {self.volume}")
        self.log(f"Timestep of {self.dt}.")
        self.set_volume(volume=self.volume)
        self.run_in(self.volume_ramp_cb, self.dt)
