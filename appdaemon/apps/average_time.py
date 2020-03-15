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
from functools import partial

from dateutil import tz
from dateutil.parser import isoparse, parse

import hassapi as hass

DEFAULT_TO_WATCH = "media_player.sleep_mode"
DEFAULT_FROM_TIME = "19:00"
DEFAULT_TO_TIME = "02:00"
DEFAULT_RESULT_SENSOR = "sensor.average_sleep_time"

DEFAULTS = {
    "to_watch": DEFAULT_TO_WATCH,
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
        self.from_time = parse(self.args.get("from_time", DEFAULT_TO_WATCH)).time()
        self.to_time = parse(self.args.get("to_time", DEFAULT_TO_WATCH)).time()
        self.result_sensor = self.args.get("result_sensor", DEFAULT_RESULT_SENSOR)
        self.tz = tz.gettz("Europe/Amsterdam")

        # Update every time the sensor is updated
        self.listen_state(self.start_cb, self.to_watch, new="on")
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

    def start(self, **kwargs):
        self.maybe_defaults(kwargs)

        hist = self.get_history(self.to_watch)
        hist_filtered = [entry for entry in hist[0] if entry["state"] == "on"]
        times = [
            isoparse(entry["last_changed"]).astimezone(self.tz).time()
            for entry in hist_filtered
        ]
        average_time = mean_time(
            [t for t in times if in_between(t, self.from_time, self.to_time)]
        )
        self.set_state(self.result_sensor, state=average_time)
