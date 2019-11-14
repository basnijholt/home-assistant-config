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

import hassapi as hass


DEFAULT_SPEAKER = "media_player.kef"
DEFAULT_SPEAKER_NAME = "KEF LS50 Wireless"
DEFAULT_PLAYLIST = "6rPTm9dYftKcFAfwyRqmDZ"
DEFAULT_TOTAL_TIME = 300
DEFAULT_FINAL_VOLUME = 0.3
DEFAULT_INPUT_BOOLEAN = "input_boolean.wake_up_with_spotify"


mapping = {
    "speaker": DEFAULT_SPEAKER,
    "speaker_name": DEFAULT_SPEAKER_NAME,
    "playlist": DEFAULT_PLAYLIST,
    "total_time": DEFAULT_TOTAL_TIME,
    "final_volume": DEFAULT_FINAL_VOLUME,
    "input_boolean": DEFAULT_INPUT_BOOLEAN,
}


def time_step(total_time, final_volume, step):
    return total_time / math.floor(final_volume / step)


class WakeUpWithSpotify(hass.Hass):
    def initialize(self):
        self.volume = 0
        self.min_volume_step = 0.01
        self.input_boolean = self.args.get("input_boolean", DEFAULT_INPUT_BOOLEAN)
        self.listen_state(self.start_spotify_cb, self.input_boolean, new="on")
        self.listen_event(self.start_spotify, "start_spotify_ramp")

    def maybe_default(self, key, kwargs):
        default_value = self.args.get(key, mapping[key])
        if kwargs is None:
            return default_value
        return kwargs.get(key, default_value)

    def start_spotify_cb(self, entity, attribute, old, new, kwargs):
        self.set_state(self.input_boolean, state="off")
        self.start_spotify()

    def start_spotify(self, event_name=None, data=None, kwargs=None):
        security = self.fire_event("start_spotify", volume=0, **(data or {}))
        self.listen_event(self.start_volume_ramp_cb, "start_spotify_done")

    def set_volume(self, speaker, volume):
        self.call_service(
            "media_player/volume_set", entity_id=speaker, volume_level=volume
        )

    def start_volume_ramp_cb(self, event_name=None, data=None, kwargs=None):
        self.run_in(self.volume_up, 0, data=data)

    def volume_up(self, kwargs=None):
        final_volume = self.maybe_default("final_volume", kwargs)
        total_time = self.maybe_default("total_time", kwargs)
        speaker = self.maybe_default("speaker", kwargs)
        self.volume += self.min_volume_step
        if self.volume >= final_volume:
            return
        dt = time_step(total_time, final_volume, self.min_volume_step)
        self.log(f"Setting volume: {self.volume}")
        self.log(f"Timestep of {dt}.")
        self.set_volume(speaker, self.volume)
        self.run_in(self.volume_up, dt)
