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

    def start_cb(self, entity, attribute, old, new, kwargs):
        self.set_state(self.input_boolean, state="off")
        self.start()

    def maybe_defaults(self, kwargs):
        for k, v in DEFAULTS.items():
            if k not in kwargs:
                default_value = self.args.get(k, v)
                kwargs[k] = default_value

    @property
    def done_signal(self):
        return f"{self.input_boolean}.done"

    def start(self, **kwargs):
        self.maybe_defaults(kwargs)
        call_speaker = partial(self.call_service, entity_id=kwargs["speaker"])
        self.turn_on(kwargs["speaker"])
        call_speaker("media_player/select_source", source=kwargs["source"])
        call_speaker("media_player/volume_set", volume_level=kwargs["volume"])
        self.fire_event(self.done_signal, **kwargs)
        self.log(self.done_signal + f" {kwargs}")
