"""Alarm clock that can be toggled on and off..

# Example `apps.yaml` config:
```
alarm_clock:
  module: alarm_clock
  class: AlarmClock
  alarm_toggle: input_boolean.alarm_clock
  input_datetime: input_datetime.alarm_clock
  to_trigger:
    - input_boolean.wake_up_light
    - input_boolean.start_the_music
```
# Example `configuration.yaml`:
```
input_datetime:
  alarm_clock:
    name: Alarm clock
    has_date: false
    has_time: true

input_boolean:
  alarm_clock:
    name: Alarm clock is on
    initial: off
    icon: mdi:alarm
```
"""

import hassapi as hass


class AlarmClock(hass.Hass):
    def initialize(self):
        self.input_datetime = self.args["input_datetime"]
        self.alarm_toggle = self.args["alarm_toggle"]
        self.to_trigger = self.args["to_trigger"]

        self.listen_state(self.start, self.input_datetime)
        self.listen_state(self.start, self.alarm_toggle)

    def start(self, entity, attribute, old, new, kwargs):
        self.log("State changed.")
        time = self.parse_time(self.get_state(self.input_datetime))
        self.run_daily(self.start_cb, time)

    @property
    def is_on(self):
        return self.get_state(self.alarm_toggle) == "on"

    def start_cb(self, kwargs):
        if self.is_on:
            for service in self.to_trigger:
                self.log(f"Starting {service}")
                self.turn_on(service)
        self.set_state(self.alarm_toggle, state="off")
