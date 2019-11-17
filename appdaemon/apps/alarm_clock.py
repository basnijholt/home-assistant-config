"""Alarm clock that can be toggled on and off..

# Example `apps.yaml` config:
```
alarm_clock:
  module: alarm_clock
  class: AlarmClock
  alarm_toggle: input_boolean.alarm_clock
  input_datetime: input_datetime.alarm_clock
  light_offset: -120
  music_offset: 0
  final_volume: 0.25
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

import datetime

import hassapi as hass


def to_time(time, timedelta):
    start = datetime.datetime(
        2000, 1, 1, hour=time.hour, minute=time.minute, second=time.second
    )
    end = start + timedelta
    return end.time()


class AlarmClock(hass.Hass):
    def initialize(self):
        self.input_datetime = self.args["input_datetime"]
        self.alarm_toggle = self.args["alarm_toggle"]

        self.listen_state(self.start, self.input_datetime)
        self.listen_state(self.start, self.alarm_toggle)

    def start(self, entity, attribute, old, new, kwargs):
        self.log("State changed.")
        time = self.parse_time(self.get_state(self.input_datetime))
        light_offset = self.args["light_offset"]
        music_offset = self.args["music_offset"]
        light_time = to_time(time, datetime.timedelta(seconds=light_offset))
        music_time = to_time(time, datetime.timedelta(seconds=music_offset))
        self.log(f"Run at {light_time}, {light_time}")
        self.run_daily(self.start_light_cb, light_time)
        self.run_daily(self.start_music_cb, music_time)

    @property
    def is_on(self):
        return self.get_state(self.alarm_toggle) == "on"

    def start_light_cb(self, kwargs):
        if self.is_on:
            self.fire_event("start_wake_up_light",)
            self.fire_event(
                "start_spotify_ramp", final_volume=self.args["final_volume"]
            )

    def start_music_cb(self, kwargs):
        if self.is_on:
            self.set_state(self.alarm_toggle, state="off")
            self.fire_event(
                "start_spotify_ramp", final_volume=self.args["final_volume"]
            )
