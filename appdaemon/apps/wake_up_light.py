"""Emulates a Philips Wake-up Light.

# Example `apps.yaml` config:
```
wake_up_light:
  module: wake_up_light
  class: WakeUpLight
  total_time: 900
  lamp: "light.ceiling"
  input_boolean: "input_boolean.wake_up_light"
```
# Example `configuration.yaml`:
```
input_boolean:
  wake_up_light:
    name: Start wake up light
    initial: off
    icon: mdi:weather-sunset-up
```
"""

import appdaemon.plugins.hass.hassapi as hass

DEFAULT_LAMP = "light.ceiling"
DEFAULT_TOTAL_TIME = 900
DEFAULT_INPUT_BOOLEAN = "input_boolean.wake_up_light"


class WakeUpLight(hass.Hass):
    def initialize(self):
        self.lamp = self.args.get("lamp", DEFAULT_LAMP)
        self.total_time = self.args.get("total_time", DEFAULT_TOTAL_TIME)
        self.input_boolean = self.args.get("input_boolean", DEFAULT_INPUT_BOOLEAN)
        self.sequence = [
            dict(rgb_color=[255,0,0], brightness=1, relative_delay=0),
            dict(rgb_color=[255,0,0], brightness=43, relative_delay=1),
            dict(rgb_color=[255,63,0], brightness=90, relative_delay=1),
            dict(rgb_color=[255,120,0], brightness=180, relative_delay=1),
            dict(rgb_color=[255,187,131], brightness=255, relative_delay=1),
            dict(rgb_color=[255,205,166], brightness=255, relative_delay=1),
        ]
        self._normalize_delays()
        self.listen_state(self.start_cb, self.input_boolean, new="on")

    def _normalize_delays(self):
        extra_wait = 0.1  # to be sure the previous transition is done
        norm = sum(d["relative_delay"] for d in self.sequence)
        delay = 0
        for settings in self.sequence:
            relative_delay = settings.pop("relative_delay")
            settings["transition"] = self.total_time * relative_delay / norm
            delay += settings["transition"] + extra_wait
            settings["seconds"] = delay
        self.log(f"normalized the delays: {self.sequence}.")

    def start_cb(self, entity, attribute, old, new, kwargs):
        for settings in self.sequence:
            self.run_in(self.set_state_cb, **settings)
        self.set_state(self.input_boolean, state="off")

    def set_state_cb(self, kwargs):
        self.turn_on(self.lamp, **kwargs)
        self.log(f"lamp: {self.lamp}, kwargs: {kwargs}")
