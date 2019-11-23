from enum import Enum
from itertools import product

import appdaemon.plugins.hass.hassapi as hass

DECONZ_ID_ROTATE = "mi_magic_cube"
DECONZ_ID_SWITCH = "switch_11"
SENSOR_ID = "sensor.aqara_cube"
EVENT_ID = "xiaomi_aqara.cube_action"


def from_side(event):
    return int(str(event)[-1])


def to_side(event):
    return int(str(event)[0])


actions = {
    "move": {1000, 2000, 3000, 4000, 5000, 6000},
    "tap_twice": {1001, 2002, 3003, 4004, 5005, 6006},
    "flip180": {1006, 2005, 3004, 4003, 5002, 6001},
    "shake_air": {7007},
    "free_fall": {7008},
    "alert": {7000},
    "swing": set(),  # XXX: don't know how to implement
}
all_rotations = {int(f"{i}00{j}") for i, j in product(range(1, 7), repeat=2) if i != j}
actions["flip90"] = all_rotations - actions["flip180"]


mapping = {i: action for action, numbers in actions.items() for i in numbers}


class CubeControl(hass.Hass):
    """
    Emulating the Xiaomi Aqara Binary Sensor platform for the magic cube
    https://www.home-assistant.io/components/binary_sensor.xiaomi_aqara/
    """

    def initialize(self):
        self.listen_event(self.handle_rotate_event, "deconz_event", id=DECONZ_ID_ROTATE)
        self.listen_event(self.handle_switch_event, "deconz_event", id=DECONZ_ID_SWITCH)

    def handle_rotate_event(self, event_name, data, kwargs):
        degrees = data["event"] / 100
        self.fire_event(EVENT_ID, entity_id=SENSOR_ID, action_value=degrees)
        self.log(f"Degrees: {degrees}")

    def handle_switch_event(self, event_name, data, kwargs):
        event = data["event"]
        action = mapping.get(event)
        if action in ("move", "tap_twice"):
            self.set_state(SENSOR_ID, state=to_side(event))
        elif action in ("flip90", "flip180"):
            self.set_state(
                SENSOR_ID,
                state=to_side(event),
                attributes={"from_side": from_side(event)},
            )
        self.fire_event(EVENT_ID, entity_id=SENSOR_ID, action_type=action)
        self.log(f"Other event: {SENSOR_ID, action}")
