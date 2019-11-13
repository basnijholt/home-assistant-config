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
    - script.start_the_music
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

import appdaemon.plugins.hass.hassapi as hass


class AlarmClock(hass.Hass):
    def initialize(self):
        self.input_datetime = self.args["input_datetime"]
        self.run_at(self.start_cb, self.input_datetime)

    @property
    def is_on(self):
        return self.get_state(self.args["alarm_toggle"]) == "on"

    def start_cb(self, kwargs):
        if self.is_on:
            to_trigger = self.args["to_trigger"]
            for service in to_trigger:
                self.turn_on(service)
        self.set_state(self.input_boolean, state="off")
