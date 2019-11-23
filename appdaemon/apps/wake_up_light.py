"""Emulates a Philips Wake-up Light / sunrise.

This cycles through a sequence of RGB tuples and then
linearily interpolates them in HSV color space as time
proceeds.

The routine can be triggered by toggling an input_boolean
or by firing the "start_wake_up_light" event, optionally
including the variables that this app uses.

The sequence is canceled by turning the light on and off.

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

import bisect
import colorsys
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

RGB_SEQUENCE = [
    (255, 0, 0),
    (255, 0, 0),
    (255, 63, 0),
    (255, 120, 0),
    (255, 187, 131),
    (255, 205, 166),
]

TIME_STEP = 4  # time between settings


class Interpolate:
    def __init__(self, xs, ys):
        if any(y - x <= 0 for x, y in zip(xs, xs[1:])):
            raise ValueError("xs must be in strictly ascending order!")
        assert len(xs) == len(ys)
        self.xs = xs
        self.ys = ys
        intervals = zip(xs, xs[1:], ys, ys[1:])
        self.slopes = [(y2 - y1) / (x2 - x1) for x1, x2, y1, y2 in intervals]

    def __call__(self, x):
        if not (self.xs[0] <= x <= self.xs[-1]):
            raise ValueError("x out of bounds!")
        if x == self.xs[-1]:
            return self.ys[-1]
        i = bisect.bisect_right(self.xs, x) - 1
        return self.ys[i] + self.slopes[i] * (x - self.xs[i])


def linspace(a, b, n=100):
    if n < 2:
        return b
    diff = (float(b) - a) / (n - 1)
    return [diff * i + a for i in range(n)]


def rgb_and_brightness(total_time, rgb_sequence):
    """Return interpolator objects for `rgb` and `brightness`.

    This interpolates in the HSV domain and converts it back to RGB.

    Parameters
    ----------
    total_time : int
        Total time.
    rgb_sequence : list of (r, g, b) tuples
        List with tuples of RGB values, where the values are integers.

    Returns
    -------
    rgb : callable
        Interpolation object that returns RGB values as function of time.
    brightness : callable
        Interpolation object that returns brightness values as function of time.
    """
    xs = linspace(0, total_time, len(rgb_sequence))
    hsvs = zip(*[colorsys.rgb_to_hsv(*rgb) for rgb in rgb_sequence])
    hue, saturation, value = [Interpolate(xs, ys) for ys in hsvs]
    _brightness = Interpolate([0, total_time], [1, 255])

    def rgb(t):
        rgb = colorsys.hsv_to_rgb(hue(t), saturation(t), value(t))
        return tuple(round(x) for x in rgb)

    def brightness(t):
        return round(_brightness(t))

    return rgb, brightness


class WakeUpLight(hass.Hass):
    def initialize(self):
        self.input_boolean = self.args.get("input_boolean", DEFAULT_INPUT_BOOLEAN)
        self.listen_state(self.start_cb, self.input_boolean, new="on")
        self.listen_event(self.start, "start_wake_up_light")
        self.todos = []
        self.cancel_handle = None

    def maybe_default(self, key, kwargs):
        default_value = self.args.get(key, DEFAULTS[key])
        if kwargs is None:
            return default_value
        return kwargs.get(key, default_value)

    def start_cb(self, entity, attribute, old, new, kwargs):
        self.log(f"start_cb, kwargs: {kwargs}")
        self.set_state(self.input_boolean, state="off")
        self.start()

    def start(self, event_name=None, data=None, kwargs=None):
        lamp = self.maybe_default("lamp", data)
        total_time = self.maybe_default("total_time", data)
        rgb, brightness = rgb_and_brightness(total_time, RGB_SEQUENCE)
        for t in range(0, total_time + TIME_STEP, TIME_STEP):
            t = min(t, total_time)
            data = {
                "entity_id": lamp,
                "rgb_color": rgb(t),
                "brightness": brightness(t),
                "transition": TIME_STEP,
            }
            is_done = t == total_time
            todo = self.run_in(self.set_state_cb, t, data=data, is_done=is_done)
            self.todos.append(todo)

        # Cancel when turning the light off.
        self.cancel_handle = self.listen_state(
            self.cancel_cb, lamp, oneshot=True, state="off", timeout=total_time
        )

    def set_state_cb(self, kwargs):
        self.log(f"Setting light: {kwargs}")
        self.call_service("light/turn_on", **kwargs["data"])
        if kwargs["is_done"]:
            self.fire_event("start_wake_up_light_done", **kwargs["data"])
            self.log("start_wake_up_light_done")

    def cancel_cb(self, entity, attribute, old, new, kwargs):
        self.log(f"Canceling sequence")
        while self.todos:
            self.cancel_timer(self.todos.pop())
