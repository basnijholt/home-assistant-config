from enum import Enum

import appdaemon.plugins.hass.hassapi as hass

DECONZ_IDS = ("switch_7", "switch_8", "switch_9")
SENSOR_ID = "sensor.aqara_cube"
EVENT_ID = "xiaomi_aqara.cube_action"


def from_side(event):
    return int(str(event)[-1])


def to_side(event):
    return int(str(event)[0])


actions = {
    "move": [1000, 2000, 3000, 4000, 5000, 6000],
    "tap_twice": [1001, 2002, 3003, 4004, 5005, 6006],
    "flip180": [1006, 2005, 3004, 4003, 5002, 6001],
    "flip90": [
        1002,
        1003,
        1004,
        1005,
        2001,
        2003,
        2004,
        2006,
        3001,
        3002,
        3005,
        3006,
        4001,
        4002,
        4005,
        4006,
        5001,
        5003,
        5004,
        5006,
        6002,
        6003,
        6004,
        6005,
    ],
    "shake_air": [7007],
    "free_fall": [7008],
    "alert": [7000],
    "swing": [],  # XXX: don't know how to implement
}

ints = {i: action for action, responses in actions.items() for i in responses}


class CubeControl(hass.Hass):
    """
    Recreating xiaomi aqara binary sensor platform for cube
    https://www.home-assistant.io/components/binary_sensor.xiaomi_aqara/
    """

    def initialize(self):
        self.listen_event(self.handle_event, "deconz_event")

    def handle_event(self, event_name, data, kwargs):
        if data["id"] in DECONZ_IDS:
            event = data["event"]
            action = ints.get(event)
            event_kwargs = dict(entity_id=SENSOR_ID, action_type=action)
            self.log(f"YOOO: {event_kwargs}")
            if action in ("move", "tap_twice"):
                self.set_state(SENSOR_ID, state=to_side(event))
            elif action in ("flip90", "flip180"):
                self.set_state(
                    SENSOR_ID,
                    state=to_side(event),
                    attributes={"from_side": from_side(event)},
                )
            elif action is None:
                degrees = event / 100
                event_kwargs["action_value"] = degrees
            self.fire_event(EVENT_ID, **event_kwargs)
