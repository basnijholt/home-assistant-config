"""Turns on speakers and plays Spotify while slowly ramping the volume.

# Example `apps.yaml` config:
```
start_spotify:
  module: start_spotify
  class: StartSpotify
  speaker: media_player.kef
  speaker_name: "KEF LS50 Wireless"
  playlist: "spotify:playlist:6rPTm9dYftKcFAfwyRqmDZ"
  volume: 0.3
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

from functools import partial

import hassapi as hass

DEFAULT_SPEAKER = "media_player.kef"
DEFAULT_SPEAKER_NAME = "KEF LS50 Wireless"
DEFAULT_PLAYLIST = "spotify:playlist:6rPTm9dYftKcFAfwyRqmDZ"
DEFAULT_VOLUME = 0.3
DEFAULT_INPUT_BOOLEAN = "input_boolean.start_spotify"


class StartSpotify(hass.Hass):
    def initialize(self):
        self.speaker = self.args.get("speaker", DEFAULT_SPEAKER)
        self.speaker_name = self.args.get("speaker_name", DEFAULT_SPEAKER_NAME)
        self.playlist = self.args.get("playlist", DEFAULT_PLAYLIST)
        self.volume = self.args.get("volume", DEFAULT_VOLUME)
        self.input_boolean = self.args.get("input_boolean", DEFAULT_INPUT_BOOLEAN)

        self.call_spotify = partial(self.call_service, entity_id="media_player.spotify")
        self.call_speaker = partial(self.call_service, entity_id=self.speaker)

        self.listen_state(self.start_speaker_cb, self.input_boolean, new="on")

    def start_speaker_cb(self, entity, attribute, old, new, kwargs):
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
        self.start_spotify()

    def start_spotify(self, kwargs=None):
        source_list = self.get_state("media_player.spotify", attribute="source_list")
        if source_list is None or self.speaker_name not in source_list:
            self.call_spotify("homeassistant/update_entity")
            self.run_in(self.start_spotify, 1)
        else:
            self.call_spotify("media_player/select_source", source=self.speaker_name)
            self.start_playlist()

    def start_playlist(self):
        self.call_speaker("media_player/volume_set", volume_level=self.volume)
        self.call_service(
            "spotify/play_playlist", media_content_id=self.playlist, random_song=True,
        )
        self.call_spotify("media_player/media_play")
