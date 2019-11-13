"""Automatically convert `.storage/lovelace` to a yaml file on a sensor trigger.

# Example `apps.yaml`:
```
lovelace_json_to_yaml:
  module: convert_json_to_yaml
  class: ConvertJSONToYAML
  json: /config/.storage/lovelace
  yaml: /config/lovelace-ui.yaml
  sensor: sensor.lovelace
```
# Add a filesize sensor in `configuration.yaml`:
```
sensor:
  - platform: filesize
    file_paths:
      - /config/.storage/lovelace
```
"""
import json
import yaml

import appdaemon.plugins.hass.hassapi as hass


DEFAULT_JSON = "/config/.storage/lovelace"
DEFAULT_YAML = "/config/lovelace-ui.yaml"
DEFAULT_SENSOR = "sensor.lovelace"


class ConvertJSONToYAML(hass.Hass):
    def initialize(self):
        self.json = self.args.get("json_in", DEFAULT_JSON)
        self.yaml = self.args.get("yaml_out", DEFAULT_YAML)
        self.listen_state(self.change_state, self.args.get("sensor", DEFAULT_SENSOR))
  
    def change_state(self, entity, attribute, old, new, kwargs):
        self.convert()
    
    def convert(self):
        self.log(f"converting {self.json} to {self.yaml}.")
        with open(self.json) as f:
            info = json.load(f)

        with open(self.yaml, 'w') as f:
            yaml.dump(info, f, allow_unicode=True)
