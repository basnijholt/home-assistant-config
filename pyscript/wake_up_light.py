"""Emulates a Philips Wake-up Light / sunrise.

This cycles through a sequence of RGB tuples and then
linearily interpolates them in HSV color space as time
proceeds.

The routine can be triggered a service `pyscript.wake_up_light`.

The sequence is canceled by turning the light on and off.
"""
import sys
sys.path.append("/config/pyscript")

from python_modules.wake_up_light import rgb_and_brightness

DEFAULT_LAMP = "light.corner_living_room"
DEFAULT_TOTAL_TIME = 900

DEFAULTS = {
    "lamp": DEFAULT_LAMP,
    "total_time": DEFAULT_TOTAL_TIME,
}

RGB_SEQUENCE = [
    (255, 0, 0),
    (255, 0, 0),
    (255, 63, 0),
    (255, 120, 0),
    (255, 187, 131),
    (255, 205, 166),
]

MIN_TIME_STEP = 2  # time between settings

@service
def wake_up_light(
    lamp=DEFAULT_LAMP,
    total_time=DEFAULT_TOTAL_TIME,
):

    rgb, brightness = rgb_and_brightness(total_time, RGB_SEQUENCE)
    steps = min(total_time // MIN_TIME_STEP, 255) + 1
    transition = total_time / (steps - 1)
    t = 0
    for _ in range(steps):
        service.call(
            "light",
            "turn_on",
            entity_id=lamp,
            rgb_color=rgb(t),
            brightness=brightness(t),
            transition=transition,
        )
        task.sleep(transition)
        t += transition
