#!/usr/bin/env python3

#                           _                  _        _     _
#        _ __ ___  __ _  __| |_ __ ___   ___  | |_ __ _| |__ | | ___  ___
#       | '__/ _ \/ _` |/ _` | '_ ` _ \ / _ \ | __/ _` | '_ \| |/ _ \/ __|
#       | | |  __/ (_| | (_| | | | | | |  __/ | || (_| | |_) | |  __/\__ \
#   ____|_|  \___|\__,_|\__,_|_| |_| |_|\___|  \__\__,_|_.__/|_|\___||___/
#  |_____|
#
# - from github.com/basnijholt/home-assistant-config

# This script generates the HTML table in my README.md.
# It is used in `update-readme.py`.

from jinja2 import Template

tables = {
    "Switches 🎚": [
        ["TP-Link HS110", 3, 70.84],
        ["Xiaomi Aqara Magic Cube", 1, 11.08],
        ["Xiaomi Aqara Single Button", 4, 57.38],
        ["Philips Hue Dimmer switch", 2, 33.22],
    ],
    "Sensors 🌡": [
        ["Xiaomi Aqara Door Sensor", 4, 32.71],
        ["Xiaomi Aqara Temperature Sensor", 5, 45.74],
        ["Xiaomi Aqara Motion Sensor", 6, 61.13],
        ["Xiaomi Aqara Vibration Sensor", 1, 11.59],
        ["Xiaomi Mi Flora", 3, 46.63],
    ],
    "Vacuum 🧹": [["Xiaomi Mi Roborock S5", 1, 294.31]],
    "Media player 📺🔈": [
        ["KEF LS50 Wireless speakers", 1, "nan"],
        ["KEF LSX speakers", 1, "nan"],
        ["LG OLED 55 C9", 1, "nan"],
    ],
    "Lights 💡": [
        ["Philips Hue E27 White and Color", 12, 266.70],
        ["Philips Hue E14 White and Color", 2, 69.77],
        ["Philips Hue GU10 Ambient White", 5, 92.70],
        ["Philips Hue Go", 1, 57.05],
        ["Philips Hue LED strip 2m", 2, 86.39],
        ["Philips Hue LED strip 1m", 1, 13.84],
    ],
    "Hubs 🌎": [["ConBee II", 1, 39.95]],
    "Server 🖥": [
        ["Intel NUC Kit NUC8i3BEH", 1, 278.30],
        ["8 GB Crucial CT8G4SFS824A DDR4", 2, 51.04],
        ["Samsung 970 EVO M.2 500GB", 1, 94.99],
        [
            "Raspberry Pi 4, 4GB RAM (connected to power/gas meter and connected over MQTT to main HA instance)",
            1,
            70.90,
        ],
        ["Raspberry Pi 4 FLIRC Case", 1, 25.85],
        ["SanDisk Ultra microSDHC Memory Card 32GB", 1, 6.99],
    ],
    "Device tracker 🔍": [["iPhone X with the new iOS app", 2, "nan"]],
    "Other": [
        ["PlayStation Eye Webcam and Microphone array", 1, 14.95],
        ["DSMR - Slimme Meter kabel", 1, 19.95],
        ["Nodo-Shop – OpenTherm Gateway (OTGW) with NodeMCU", 1, 48.81],
    ],
}


def add_unit_price(lst):
    return [
        (
            name,
            units,
            round(tot_price / units, 2) if isinstance(tot_price, float) else "nan",
            tot_price,
        )
        for name, units, tot_price in lst
    ]


tables = {title: add_unit_price(lst) for title, lst in tables.items()}

table_template = """
<table>
    {%- for k, v in dicts.items() %}
    <thead>
        <tr>
            <th>{{ k }}</th>
            <th>Units (#)</th>
            <th>Price per unit (€)</th>
            <th>Price (€)</th>
        </tr>
    </thead>
    <tbody>
    {%- for name, units, unit_price, tot_price in v %}
        <tr>
            <td>{{ name }}</td>
            <td>{{ units }}</td>
            <td>{{ unit_price }}</td>
            <td>{{ tot_price }}</td>
        </tr>
    {%- endfor %}
        <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
        </tr>
    </tbody>
    {%- endfor %}
    <thead>
        <tr>
            <th>Total</th>
            <th></th>
            <th></th>
            <th>€{{ total }}</th>
        </tr>
    </thead>
</table>"""


template = Template(table_template)
total_cost = sum(
    cost for lst in tables.values() for _, _, _, cost in lst if isinstance(cost, float)
)
html_table = template.render(dicts=tables, total=total_cost)

if __name__ == "__main__":
    print(html_table)
