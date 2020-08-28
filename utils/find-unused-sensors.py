# XXX: use 'hass-cli -o yaml entity list'
# and set
# export HASS_SERVER=http://homeassistant.local:8123
# export HASS_TOKEN=eyJ0eXAiO-----------------------ed8mj0NP8


from pathlib import Path

import yaml


def concat(loader, node):
    return node.value


yaml.FullLoader.add_constructor("!secret", concat)


def get_sensors(fname, prepend):
    with open(fname) as f:
        sensors_yaml = yaml.load(f, Loader=yaml.FullLoader)
        template_sensors = next(e for e in sensors_yaml if e["platform"] == "template")
        return [prepend + x for x in template_sensors["sensors"].keys()]


sensors = get_sensors("/config/includes/sensors.yaml", "sensor.")
binary_sensors = get_sensors("/config/includes/binary_sensors.yaml", "binary_sensor.")
all_sensors = sensors + binary_sensors

paths = list(Path("/config/automations/").rglob("*.yaml"))
paths += list(Path("/config/includes/").rglob("*.yaml"))
paths.append(Path("/config/lovelace-ui.yaml"))

lines = {}
for p in paths:
    with p.open() as f:
        lines[f.name] = "".join(f.readlines())


not_used = []
for sensor in all_sensors:
    is_used = False
    for path, txt in lines.items():
        if sensor in txt:
            is_used = True
    if not is_used:
        not_used.append(sensor)

print(f"Searching for {all_sensors}.")
print()
print(f"Not used: {not_used}")
