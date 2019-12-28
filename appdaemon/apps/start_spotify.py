"""Turns on speakers and plays Spotify on a playlist.

# Example `apps.yaml` config:
```
start_spotify:
  module: start_spotify
  class: StartSpotify
  speaker: media_player.kef
  speaker_name: "LS50 Wireless 00C437"
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
DEFAULT_SPEAKER_NAME = "LS50 Wireless 00C437"
DEFAULT_PLAYLIST = "spotify:playlist:6rPTm9dYftKcFAfwyRqmDZ"
DEFAULT_VOLUME = 0.3
DEFAULT_INPUT_BOOLEAN = "input_boolean.start_spotify"

MAX_TRIES = 20

DEFAULTS = {
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
        self.listen_state(self.start_cb, self.input_boolean, new="on")
        self.tries = 0

    def maybe_defaults(self, kwargs):
        for key in set(DEFAULTS) | set(self.args):
            if key in kwargs:
                continue
            elif key in self.args:
                kwargs[key] = self.args[key]
            else:
                kwargs[key] = DEFAULTS[key]

    @property
    def done_signal(self):
        return f"{self.input_boolean}.done"

    def start_cb(self, entity, attribute, old, new, kwargs):
        self.set_state(self.input_boolean, state="off")
        self.start()

    def start(self, **kwargs):
        self.maybe_defaults(kwargs)
        app = self.get_app("start_speakers")
        self.listen_event(self.select_source, app.done_signal, timeout=30, oneshot=True)
        app.start(**kwargs)

    def source_available(self, speaker_name):
        return speaker_name in self.get_state(
            "media_player.spotify", attribute="source_list", default=[]
        )

    def select_source(self, event=None, data=None, kwargs=None):
        self.log("Starting `select_source`")
        speaker_name = data["speaker_name"]
        if not self.source_available(speaker_name):
            self.log("Source not available")
            self.call_spotify("homeassistant/update_entity")
            self.run_in(self.try_again, 1, **data)
        else:
            self.tries = 0
            self.log("Source is available")
            self.call_spotify("media_player/select_source", source=speaker_name)
            self.start_playlist(**data)

    def try_again(self, kwargs):
        self.tries += 1
        if self.tries > MAX_TRIES:
            # XXX: usually when this happens it means that the speakers do not
            # show up in spotify anymore. I have written KEF about this but no
            # response yet. A solution is to turn off and on the actual power
            # using a smart switch.
            self.tries = 0
            return
        self.log(f"Starting `try_again`, data: {kwargs}, tries: {self.tries}")
        return self.select_source(data=kwargs)

    def start_playlist(self, **kwargs):
        self.call_service(
            "spotify/play_playlist",
            media_content_id=kwargs["playlist"],
            random_song=True,
        )
        self.call_spotify("media_player/media_play")
        self.fire_event(self.done_signal, **kwargs)
        self.log(self.done_signal + f" {kwargs}")
