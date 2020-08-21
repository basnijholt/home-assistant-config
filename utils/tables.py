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
        ["Philips Hue GU10 Ambient White", 5, "(92.70)"],
        ["Philips Hue Go", 1, 57.05],
        ["Philips Hue LED strip 2m", 2, 86.39],
        ["Philips Hue LED strip 1m", 1, 13.84],
    ],
    "Hubs 🌎": [["ConBee II", 1, 39.95]],
    "Server 🖥": [
        ["Raspberry Pi 4, 4GB RAM, with Supervised Home Assistant", 1, 70.90,],
        ["Raspberry Pi 4 FLIRC Case", 1, 25.85],
        ["SanDisk Ultra microSDHC Memory Card 32GB", 1, 6.99],
        [
            "Raspberry Pi 3 Model B (connected to power/gas meter and connected over MQTT to main HA instance)",
            1,
            40.40,
        ],
    ],
    "Device tracker 🔍": [["iPhone X with the new iOS app", 2, "nan"]],
    "Other": [
        ["PlayStation Eye Webcam and Microphone array", 1, 14.95],
        ["DSMR - Slimme Meter kabel", 1, 19.95],
        ["Nodo-Shop – OpenTherm Gateway (OTGW) with NodeMCU", 1, 48.81],
    ],
}


table_template = """
<table>
    {%- for k, v in dicts.items() %}
    <thead>
        <tr>
            <th>{{ k }}</th>
            <th>Units (#)</th>
            <th>Price (€)</th>
        </tr>
    </thead>
    <tbody>
    {%- for row in v %}
        <tr>
            <td>{{ row[0] }}</td>
            <td>{{ row[1] }}</td>
            <td>{{ row[2] }}</td>
        </tr>
    {%- endfor %}
        <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
        </tr>
    </tbody>
    {%- endfor %}
    <thead>
        <tr>
            <th>Total</th>
            <th>€{{ total }}</th>
            <th></th>
        </tr>
    </thead>
</table>"""


template = Template(table_template)
total_cost = sum(
    cost for lst in tables.values() for _, _, cost in lst if isinstance(cost, float)
)
html_table = template.render(dicts=tables, total=total_cost)