"""Turns on speakers and plays Spotify while slowly ramping the volume.

# Example `apps.yaml` config:
```
start_spotify:
  module: start_spotify
  class: StartSpotify
  volume: 0.3
  speaker: media_player.kef
  playlist: "6rPTm9dYftKcFAfwyRqmDZ"
  input_boolean: input_boolean.start_spotify
```
# Example `configuration.yaml`:
```
input_boolean:
  start_spotify:
    name: Start on speakers
    initial: off
    icon: mdi:music
```
"""

import math

import appdaemon.plugins.hass.hassapi as hass

DEFAULT_VOLUME = 0.3
DEFAULT_SPEAKER = "media_player.kef"
DEFAULT_SPEAKER_NAME = "KEF LS50 Wireless"
DEFAULT_PLAYLIST = "6rPTm9dYftKcFAfwyRqmDZ"
DEFAULT_INPUT_BOOLEAN = "input_boolean.start_spotify"


class StartSpotify(hass.Hass):
    def initialize(self):
        self.volume = self.args.get("volume", DEFAULT_VOLUME)
        self.speaker = self.args.get("speaker", DEFAULT_SPEAKER)
        self.speaker_name = self.args.get("speaker_name", DEFAULT_SPEAKER_NAME)
        self.playlist = self.args.get("playlist", DEFAULT_PLAYLIST)
        self.input_boolean = self.args.get("input_boolean", DEFAULT_INPUT_BOOLEAN)
        self.set_state(self.input_boolean, state="on")
        self.listen_state(self.start_speaker_cb, self.input_boolean, new="on")

    def start_speaker_cb(self, entity, attribute, old, new, kwargs):
        self.log(f"Calling start_speaker_cb.")
        self.set_state(self.input_boolean, state="off")
        self.turn_on(self.speaker)
        self.call_service(
            "media_player/select_source", entity_id=self.speaker, source="Wifi"
        )
        self.log("Going to listen for speaker is on.")
        self.listen_state(self.start_spotify_cb, self.speaker, new="on", immediate=True)

    def start_spotify_cb(self, entity, attribute, old, new, kwargs):
        self.log(f"Calling start_spotify_cb.")
        source_list = self.get_state("media_player.spotify", attribute="source_list")
        if source_list is None or self.speaker_name not in source_list:
            self.call_service(
                "homeassistant/update_entity", entity_id="media_player.spotify"
            )
            self.run_in(self.start_spotify_cb, 1)
        else:
            self.call_service("media_player/select_source", source=self.speaker_name)
            self.start_playlist()

    def start_playlist(self):
        self.log(f"Calling start_playlist.")
        self.call_service(
            "media_player/volume_set", entity_id="media_player.spotify", volume=self.volume
        )
        self.call_service(
            "media_player/play_playlist",
            entity_id="media_player.spotify",
            media_content_id=self.playlist,
            random_song=True,
        )
        self.call_service(
            "media_player/media_play", entity_id="media_player.spotify",
        )
        self.run_in()
