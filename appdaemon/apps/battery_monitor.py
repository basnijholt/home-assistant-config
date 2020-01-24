"""Turns on speakers on a source and volume.

# Example `apps.yaml` config:
```
battery_monitor:
  module: battery_monitor
  class: BatteryMonitor
  service: mobile_app_basnijholt_iphone
  low_level: 20
  hour: 14
  minute: 0
```
"""

import datetime
from functools import partial

import hassapi as hass

DEFAULT_LOW_LEVEL = 15
DEFAULT_SERVICE = "mobile_app_basnijholt_iphone"
DEFAULT_HOUR = 14
DEFAULT_MINUTE = 0


class BatteryMonitor(hass.Hass):
    def initialize(self):
        self.low_level = self.args.get("low_level", DEFAULT_LOW_LEVEL)
        self.service = self.args.get("mobile_app_basnijholt_iphone", DEFAULT_SERVICE)
        h = self.args.get("hour", DEFAULT_HOUR)
        m = self.args.get("minute", DEFAULT_MINUTE)
        self.run_daily(self.start_cb, datetime.time(h, m, 30))

    def start_cb(self, kwargs):
        self.low_battery_level = {
            entity_id: info
            for entity_id, info in self.get_state("sensor").items()
            if "battery_level" in entity_id
            and int(info["state"]) < self.low_level
            and "ipad" not in entity_id
            and "iphone" not in entity_id
        }

        for entity_id, info in self.low_battery_level.items():
            level = info["state"]
            self.call_service(
                f"notify/{self.service}",
                title="Warning! ⚠️🔋☠️",
                message=f"Battery level of {entity_id} is {level}%!",
            )
