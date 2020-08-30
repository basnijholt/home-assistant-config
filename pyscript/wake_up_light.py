"""Emulates a Philips Wake-up Light / sunrise.

This cycles through a sequence of RGB tuples and then
linearily interpolates them in HSV color space as time
proceeds.

The routine can be triggered by toggling an input_boolean.

The sequence is canceled by turning the light on and off.

# Example `configuration.yaml`:
```
input_boolean:
  wake_up_light:
    name: Start wake up light
    initial: off
    icon: mdi:weather-sunset-up
```
"""

import sys
sys.path.append("/config/pyscript_modules")

from wake_up_light import rgb_and_brightness

DEFAULT_LAMP = "light.ceiling_living_room"
DEFAULT_TOTAL_TIME = 900
DEFAULT_INPUT_BOOLEAN = "input_boolean.wake_up_light"

DEFAULTS = {
    "lamp": DEFAULT_LAMP,
    "total_time": DEFAULT_TOTAL_TIME,
    "input_boolean": DEFAULT_INPUT_BOOLEAN,
}



@service
def wake_up_light(
    lamp=DEFAULT_LAMP,
    total_time=DEFAULT_TOTAL_TIME,
    input_boolean=DEFAULT_INPUT_BOOLEAN,
):
    RGB_SEQUENCE = [
        (255, 0, 0),
        (255, 0, 0),
        (255, 63, 0),
        (255, 120, 0),
        (255, 187, 131),
        (255, 205, 166),
    ]

    MIN_TIME_STEP = 2  # time between settings

    service.call("input_boolean", "turn_off", entity_id=input_boolean)
    rgb, brightness = rgb_and_brightness(total_time, RGB_SEQUENCE)
    steps = min(total_time // MIN_TIME_STEP, 255) + 1
    transition = total_time / (steps - 1)
    t = 0
    for i in range(steps):
        service.call(
            *lamp.split("."),
            entity_id=lamp,
            rgb_color=rgb(t),
            brightness=brightness(t),
            transition=transition,
        )
        task.sleep(transition)
        t += transition
