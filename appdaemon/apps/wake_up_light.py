import appdaemon.plugins.hass.hassapi as hass

## Example `appdaemon.yaml` config:
# wake_up_light:
#   module: wake_up_light
#   class: WakeUpLight
#   total_time: 900
#   lamp: "light.ceiling"
#   input_boolean: "input_boolean.wake_up_light"
## Example `input_boolean.yaml`:
# wake_up_light:
#   name: Start wake up light
#   initial: off
#   icon: mdi:weather-sunset-up


DEFAULT_LAMP = "light.ceiling"
DEFAULT_TOTAL_TIME = 900
DEFAULT_INPUT_BOOLEAN = "input_boolean.wake_up_light"


class WakeUpLight(hass.Hass):
    def initialize(self):
        self.lamp = self.args.get("lamp", DEFAULT_LAMP)
        self.total_time = self.args.get("total_time", DEFAULT_TOTAL_TIME)
        self.input_boolean = self.args.get("input_boolean", DEFAULT_INPUT_BOOLEAN)
        self.sequence = [
            dict(xy_color=[0.67, 0.39], brightness=1, relative_delay=0),
            dict(xy_color=[0.65, 0.41], brightness=85, relative_delay=1),
            dict(xy_color=[0.60, 0.40], brightness=170, relative_delay=1),
            dict(xy_color=[0.48, 0.40], brightness=255, relative_delay=1),
        ]
        self._normalize_delays()
        self.listen_state(self.start_cb, self.input_boolean, new="on")

    def _normalize_delays(self):
        bridging_period = 0.1  # to be sure the previous transition is done
        norm = sum(d["relative_delay"] for d in self.sequence)
        delay = 0
        for settings in self.sequence:
            relative_delay = settings.pop("relative_delay")
            settings["transition"] = self.total_time * relative_delay / norm
            delay += settings["transition"] + bridging_period
            settings["seconds"] = delay
        self.log(f"normalized the delays: {self.sequence}.")

    def start_cb(self, entity, attribute, old, new, kwargs):
        for settings in self.sequence:
            self.run_in(self.set_state_cb, **settings)
        self.set_state(self.input_boolean, state="off")

    def set_state_cb(self, kwargs):
        self.turn_on(self.lamp, **kwargs)
        self.log(f"lamp: {self.lamp}, kwargs: {kwargs}")
