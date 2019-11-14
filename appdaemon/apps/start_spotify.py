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

mapping = {
    "speaker": DEFAULT_SPEAKER,
    "speaker_name": DEFAULT_SPEAKER_NAME,
    "playlist": DEFAULT_PLAYLIST,
    "volume": DEFAULT_VOLUME,
    "input_boolean": DEFAULT_INPUT_BOOLEAN,
}


class StartSpotify(hass.Hass):
    def initialize(self):
        self.input_boolean = self.args.get("input_boolean", DEFAULT_INPUT_BOOLEAN)
        self.call_spotify = partial(self.call_service, entity_id="media_player.spotify")
        self.listen_state(
            self.start_speakers_cb, self.input_boolean, new="on", immediate=True
        )
        self.listen_event(self.start_speakers, "start_spotify")

    def maybe_default(self, key, kwargs):
        default_value = self.args.get(key, mapping[key])
        if kwargs is None:
            return default_value
        return kwargs.get(key, default_value)

    def start_speakers_cb(self, entity, attribute, old, new, kwargs):
        self.set_state(self.input_boolean, state="off")
        self.start_speakers()

    def start_speakers(self, event_name=None, data=None, kwargs=None):
        volume = self.maybe_default("volume", data)
        speaker = self.maybe_default("speaker", data)
        self.fire_event("start_speakers", **(data or {}))
        self.listen_event(self.select_source, "start_speakers_done")

    def source_available(self, speaker_name):
        source_list = self.get_state("media_player.spotify", attribute="source_list")
        not_available = source_list is None or speaker_name not in source_list
        return not not_available

    def select_source(self, event=None, data=None, kwargs=None):
        speaker_name = self.maybe_default("speaker_name", data)
        if not self.source_available(speaker_name):
            self.call_spotify("homeassistant/update_entity")
            self.run_in(self.try_again, 1, data=data)
        else:
            self.call_spotify("media_player/select_source", source=speaker_name)
            self.start_playlist()

    def try_again(self, kwargs):
        return self.select_source(data=kwargs["data"])

    def start_playlist(self, event=None, data=None, kwargs=None):
        playlist = self.maybe_default("playlist", kwargs)
        self.call_service(
            "spotify/play_playlist", media_content_id=playlist, random_song=True,
        )
        self.call_spotify("media_player/media_play")
        self.fire_event("start_spotify_done", **(data or {}))
