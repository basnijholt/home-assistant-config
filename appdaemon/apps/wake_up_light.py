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

import copy

import hassapi as hass

DEFAULT_LAMP = "light.ceiling"
DEFAULT_TOTAL_TIME = 900
DEFAULT_INPUT_BOOLEAN = "input_boolean.wake_up_light"

DEFAULTS = {
    "lamp": DEFAULT_LAMP,
    "total_time": DEFAULT_TOTAL_TIME,
    "input_boolean": DEFAULT_INPUT_BOOLEAN,
}

SEQUENCE = [
    dict(rgb_color=[255, 0, 0], brightness=1, relative_delay=0),
    dict(rgb_color=[255, 0, 0], brightness=43, relative_delay=1),
    dict(rgb_color=[255, 63, 0], brightness=90, relative_delay=1),
    dict(rgb_color=[255, 120, 0], brightness=180, relative_delay=1),
    dict(rgb_color=[255, 187, 131], brightness=255, relative_delay=1),
    dict(rgb_color=[255, 205, 166], brightness=255, relative_delay=1),
]


def normalize_sequence(total_time):
    sequence = copy.deepcopy(SEQUENCE)
    extra_wait = 0.1  # to be sure the previous transition is done
    norm = sum(d["relative_delay"] for d in sequence)
    delay = 0
    for settings in sequence:
        relative_delay = settings.pop("relative_delay")
        settings["transition"] = total_time * relative_delay / norm
        delay += settings["transition"] + extra_wait
        settings["delay"] = delay
    return sequence


class WakeUpLight(hass.Hass):
    def initialize(self):
        self.input_boolean = self.args.get("input_boolean", DEFAULT_INPUT_BOOLEAN)
        self.listen_state(self.start_cb, self.input_boolean, new="on")
        self.listen_event(self.start, "start_wake_up_light")

    def maybe_default(self, key, kwargs):
        default_value = self.args.get(key, DEFAULTS[key])
        if kwargs is None:
            return default_value
        return kwargs.get(key, default_value)

    def start_cb(self, entity, attribute, old, new, kwargs):
        self.set_state(self.input_boolean, state="off")
        self.start()

    def start(self, event_name=None, data=None, kwargs=None):
        total_time = self.maybe_default("total_time", data)
        lamp = self.maybe_default("lamp", data)
        for settings in normalize_sequence(total_time):
            settings["entity_id"] = lamp
            settings["total_time"] = total_time
            self.run_in(self.set_state_cb, **settings)

    def set_state_cb(self, kwargs):
        self.call_service(
            "light/turn_on",
            entity_id=kwargs["entity_id"],
            rgb_color=kwargs["rgb_color"],
            brightness=kwargs["brightness"],
            transition=kwargs["transition"],
        )
        self.fire_event("start_wake_up_light_done", **kwargs)
        self.log("start_wake_up_light_done")
