"""Turns on speakers on a source and volume.

# Example `apps.yaml` config:
```
start_speakers:
  module: start_speakers
  class: StartSpeakers
  speaker: media_player.kef
  source: Wifi
  volume: 0.3
  input_boolean: input_boolean.start_speakers
```
# Example `configuration.yaml`:
```
input_boolean:
  start_speakers:
    name: Start speakers
    initial: off
    icon: mdi:music
```
"""

from functools import partial

import hassapi as hass

DEFAULT_SPEAKER = "media_player.kef"
DEFAULT_SOURCE = "Wifi"
DEFAULT_VOLUME = 0.3
DEFAULT_INPUT_BOOLEAN = "input_boolean.start_speakers"

DEFAULTS = {
    "speaker": DEFAULT_SPEAKER,
    "source": DEFAULT_SOURCE,
    "volume": DEFAULT_VOLUME,
    "input_boolean": DEFAULT_INPUT_BOOLEAN,
}


class StartSpeakers(hass.Hass):
    def initialize(self):
        self.input_boolean = self.args.get("input_boolean", DEFAULT_INPUT_BOOLEAN)
        self.listen_state(self.start_cb, self.input_boolean, new="on", immediate=True)
        self.listen_event(self.start, "start_speakers")

    def start_cb(self, entity, attribute, old, new, kwargs):
        self.set_state(self.input_boolean, state="off")
        self.start()

    def maybe_default(self, key, kwargs):
        default_value = self.args.get(key, DEFAULTS[key])
        if kwargs is None:
            return default_value
        return kwargs.get(key, default_value)

    def start(self, event_name=None, data=None, kwargs=None):
        data = data or {}
        maybe_default = partial(self.maybe_default, kwargs=data)
        call_speaker = partial(self.call_service, entity_id=maybe_default("speaker"))
        self.turn_on(maybe_default("speaker"))
        call_speaker("media_player/select_source", source=maybe_default("source"))
        call_speaker("media_player/volume_set", volume_level=maybe_default("volume"))
        self.fire_event("start_speakers_done", **data)
