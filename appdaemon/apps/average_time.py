"""Calculates the average time of when a sensors turned on.

For example, to track your average bed time.

# Example `apps.yaml` config:
```
average_bed_time:
  module: average_time
  class: AverageTime
  to_watch: input_boolean.sleep_mode
  result_senor: sensor.average_sleep_time
  from: "13:00"
  to: "02:00"
```
"""

import cmath
import datetime
import math

from dateutil import tz
from dateutil.parser import isoparse, parse

import hassapi as hass

DEFAULT_TO_WATCH = "input_boolean.sleep_mode"
DEFAULT_TO_WATCH_STATE = "on"
DEFAULT_FROM_TIME = "19:00"
DEFAULT_TO_TIME = "02:00"
DEFAULT_RESULT_SENSOR = "sensor.average_sleep_time"

DEFAULTS = {
    "to_watch": DEFAULT_TO_WATCH,
    "to_watch_state": DEFAULT_TO_WATCH_STATE,
    "from_time": DEFAULT_FROM_TIME,
    "to_time": DEFAULT_TO_TIME,
    "result_senor": DEFAULT_RESULT_SENSOR,
}


def in_between(now, start, end):
    if start <= end:
        return start <= now < end
    else:  # over midnight e.g., 23:30-04:15
        return start <= now or now < end


def mean_angle(deg):
    deg_imag = sum(cmath.rect(1, math.radians(d)) for d in deg) / len(deg)
    argument = cmath.phase(deg_imag)
    return math.degrees(argument)


def mean_time(times):
    seconds = (t.second + t.minute * 60 + t.hour * 3600 for t in times)
    day = 24 * 60 * 60
    to_angles = [s * 360 / day for s in seconds]
    mean_as_angle = mean_angle(to_angles)
    mean_seconds = mean_as_angle * day / 360
    if mean_seconds < 0:
        mean_seconds += day
    h, m = divmod(mean_seconds, 3600)
    m, s = divmod(m, 60)
    return f"{int(h):02d}:{int(m):02d}:{int(s):02d}"


class AverageTime(hass.Hass):
    def initialize(self):
        self.to_watch = self.args.get("to_watch", DEFAULT_TO_WATCH)
        self.to_watch_state = self.args.get("to_watch_state", DEFAULT_TO_WATCH_STATE)
        self.from_time = parse(self.args.get("from_time", DEFAULT_TO_WATCH)).time()
        self.to_time = parse(self.args.get("to_time", DEFAULT_TO_WATCH)).time()
        self.result_sensor = self.args.get("result_sensor", DEFAULT_RESULT_SENSOR)
        self.tz = tz.gettz("Europe/Amsterdam")

        # Update every time the sensor is updated
        self.listen_state(self.start_cb, self.to_watch, new=self.to_watch_state)
        # And update once this app is started
        self.start()

    def maybe_defaults(self, kwargs):
        for key in set(DEFAULTS) | set(self.args):
            if key in kwargs:
                continue
            elif key in self.args:
                kwargs[key] = self.args[key]
            else:
                kwargs[key] = DEFAULTS[key]

    def start_cb(self, entity, attribute, old, new, kwargs):
        self.start()

    def _times_on_day(self, days_ago):
        start_of_today = datetime.datetime.now().replace(hour=0, minute=0, second=0)
        start = start_of_today - datetime.timedelta(days=days_ago)
        hist = self.get_history(entity_id=self.to_watch, start_time=start)
        if len(hist) == 0:
            return []
        hist_filtered = [entry for entry in hist[0] if entry["state"] == self.to_watch_state]
        times = [
            isoparse(entry["last_changed"]).astimezone(self.tz).time()
            for entry in hist_filtered
        ]
        times_between = [
            t for t in times if in_between(t, self.from_time, self.to_time)
        ]
        return times_between

    def start(self, **kwargs):
        self.maybe_defaults(kwargs)
        times = []
        for days_ago in range(14):
            times.extend(self._times_on_day(days_ago))
        if not times:
            return
        average_time = mean_time(times)
        self.set_state(self.result_sensor, state=average_time)
