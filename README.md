
# Bas Nijholt's Home Assistant config files

![Yaml Lint](https://github.com/basnijholt/home-assistant-config/workflows/Yaml%20Lint/badge.svg)

![Lovelace UI](http://files.nijho.lt/ha-ui.gif)

Using my [iOS Light and Dark Mode Themes](https://github.com/basnijholt/lovelace-ios-themes).

See also [my guide for my girlfriend ❤️](guide.md).

## Noteworthy (useful) automations
See *all* my automations and its dependencies [down the page](#automations---table-of-content)!

* [Alarm clock](#alarm-clock-) that uses the AppDaemon volume ramp and sunrise app ⏰
* [Automatic `lovelace.json` to `lovelace-ui.yaml` converter](#lovelace-) for version control 🤖
* [Controlling music and lights (hue and brightness) using the Xiaomi Aqara Magic Cube](#cube-) ∛
* [Controlling the lights using *Phillips Hue Dimmers* the *Xiaomi Aqara Smart Switches*](#control-switches-) 🎛
* [Automated lights](#light-) 💡
* [Presence detection in different rooms based on various binary template sensors](includes/binary_sensors.yaml)
* [Robot vacuum automations](#vacuum-) 🧹
* [Arriving](#arriving-) and [leaving](#leaving-) automations
* [Notifications when the dishwasher  or washing machine is done](#utilities-)
* [Time at work 📈 tracking and notifications to go home](#work-)
* Using [HA-Menu](https://github.com/codechimp-org/ha-menu) to control [my speakers on my iMac](#lsx-)
* Using [home-assistant-macbook-touch-bar](https://github.com/basnijholt/home-assistant-macbook-touch-bar) to control HA on my MacBook Pro's Touch Bar 💻
* [Automatically switch Lovelace's theme between backgrounds and light/dark mode](#frontend-)
* [Sync volume TV ⇄ speakers 🔊](#media-player-)
* [Security notifications when the front door 🚪 has been open for too long or motion is detected when no one is home](#security-%EF%B8%8F)

## My cool AppDaemon apps
* [Sunrise emulator app](appdaemon/apps/wake_up_light.py) 🌅
* [Wake up with Spotify app](appdaemon/apps/wake_up_with_spotify.py) that slowly ramps the volume 📢
* [Low Battery level notifications 🔋](appdaemon/apps/battery_monitor.py)

## Ideas?
* Notify us when the window is open and it is raining.
* Add budget keeper using the Bunq API
* Use Siri Shortcuts to control the TV from my Apple Watch

## My devices

<!-- start-table -->

<table>
    <thead>
        <tr>
            <th>Switches 🎚</th>
            <th>Units (#)</th>
            <th>Price per unit (€)</th>
            <th>Price (€)</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>TP-Link HS110</td>
            <td>3</td>
            <td>23.61</td>
            <td>70.84</td>
        </tr>
        <tr>
            <td>Xiaomi Aqara Magic Cube</td>
            <td>1</td>
            <td>11.08</td>
            <td>11.08</td>
        </tr>
        <tr>
            <td>Xiaomi Aqara Single Button</td>
            <td>4</td>
            <td>14.35</td>
            <td>57.38</td>
        </tr>
        <tr>
            <td>Philips Hue Dimmer switch</td>
            <td>2</td>
            <td>16.61</td>
            <td>33.22</td>
        </tr>
        <tr>
            <td><i><b>Total</b></i></td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>172.52</td>
        </tr>
        <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
        </tr>
    </tbody>
    <thead>
        <tr>
            <th>Sensors 🌡</th>
            <th>Units (#)</th>
            <th>Price per unit (€)</th>
            <th>Price (€)</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Xiaomi Aqara Door Sensor</td>
            <td>4</td>
            <td>8.18</td>
            <td>32.71</td>
        </tr>
        <tr>
            <td>Xiaomi Aqara Temperature Sensor</td>
            <td>5</td>
            <td>9.15</td>
            <td>45.74</td>
        </tr>
        <tr>
            <td>Xiaomi Aqara Motion Sensor</td>
            <td>6</td>
            <td>10.19</td>
            <td>61.13</td>
        </tr>
        <tr>
            <td>Xiaomi Aqara Vibration Sensor</td>
            <td>1</td>
            <td>11.59</td>
            <td>11.59</td>
        </tr>
        <tr>
            <td>Xiaomi Mi Flora</td>
            <td>3</td>
            <td>15.54</td>
            <td>46.63</td>
        </tr>
        <tr>
            <td><i><b>Total</b></i></td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>197.8</td>
        </tr>
        <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
        </tr>
    </tbody>
    <thead>
        <tr>
            <th>Vacuum 🧹</th>
            <th>Units (#)</th>
            <th>Price per unit (€)</th>
            <th>Price (€)</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Xiaomi Mi Roborock S5</td>
            <td>1</td>
            <td>294.31</td>
            <td>294.31</td>
        </tr>
        <tr>
            <td><i><b>Total</b></i></td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>294.31</td>
        </tr>
        <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
        </tr>
    </tbody>
    <thead>
        <tr>
            <th>Media player 📺🔈</th>
            <th>Units (#)</th>
            <th>Price per unit (€)</th>
            <th>Price (€)</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>KEF LS50 Wireless speakers</td>
            <td>1</td>
            <td>nan</td>
            <td>nan</td>
        </tr>
        <tr>
            <td>KEF LSX speakers</td>
            <td>1</td>
            <td>nan</td>
            <td>nan</td>
        </tr>
        <tr>
            <td>LG OLED 55 C9</td>
            <td>1</td>
            <td>nan</td>
            <td>nan</td>
        </tr>
        <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
        </tr>
    </tbody>
    <thead>
        <tr>
            <th>Lights 💡</th>
            <th>Units (#)</th>
            <th>Price per unit (€)</th>
            <th>Price (€)</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Philips Hue E27 White and Color</td>
            <td>12</td>
            <td>22.22</td>
            <td>266.7</td>
        </tr>
        <tr>
            <td>Philips Hue E14 White and Color</td>
            <td>2</td>
            <td>34.88</td>
            <td>69.77</td>
        </tr>
        <tr>
            <td>Philips Hue GU10 Ambient White</td>
            <td>5</td>
            <td>18.54</td>
            <td>92.7</td>
        </tr>
        <tr>
            <td>Philips Hue Go</td>
            <td>1</td>
            <td>57.05</td>
            <td>57.05</td>
        </tr>
        <tr>
            <td>Philips Hue LED strip 2m</td>
            <td>2</td>
            <td>43.2</td>
            <td>86.39</td>
        </tr>
        <tr>
            <td>Philips Hue LED strip 1m</td>
            <td>1</td>
            <td>13.84</td>
            <td>13.84</td>
        </tr>
        <tr>
            <td><i><b>Total</b></i></td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>586.45</td>
        </tr>
        <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
        </tr>
    </tbody>
    <thead>
        <tr>
            <th>Hubs 🌎</th>
            <th>Units (#)</th>
            <th>Price per unit (€)</th>
            <th>Price (€)</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>ConBee II</td>
            <td>1</td>
            <td>39.95</td>
            <td>39.95</td>
        </tr>
        <tr>
            <td><i><b>Total</b></i></td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>39.95</td>
        </tr>
        <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
        </tr>
    </tbody>
    <thead>
        <tr>
            <th>Server 🖥</th>
            <th>Units (#)</th>
            <th>Price per unit (€)</th>
            <th>Price (€)</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Intel NUC Kit NUC8i3BEH</td>
            <td>1</td>
            <td>278.3</td>
            <td>278.3</td>
        </tr>
        <tr>
            <td>8 GB Crucial CT8G4SFS824A DDR4</td>
            <td>2</td>
            <td>25.52</td>
            <td>51.04</td>
        </tr>
        <tr>
            <td>Samsung 970 EVO M.2 500GB</td>
            <td>1</td>
            <td>94.99</td>
            <td>94.99</td>
        </tr>
        <tr>
            <td>Raspberry Pi 4, 4GB RAM (connected to power/gas meter and connected over MQTT to main HA instance)</td>
            <td>1</td>
            <td>70.9</td>
            <td>70.9</td>
        </tr>
        <tr>
            <td>Raspberry Pi 4 FLIRC Case</td>
            <td>1</td>
            <td>25.85</td>
            <td>25.85</td>
        </tr>
        <tr>
            <td>SanDisk Ultra microSDHC Memory Card 32GB</td>
            <td>1</td>
            <td>6.99</td>
            <td>6.99</td>
        </tr>
        <tr>
            <td><i><b>Total</b></i></td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>528.07</td>
        </tr>
        <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
        </tr>
    </tbody>
    <thead>
        <tr>
            <th>Device tracker 🔍</th>
            <th>Units (#)</th>
            <th>Price per unit (€)</th>
            <th>Price (€)</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>iPhone X with the iOS app</td>
            <td>1</td>
            <td>nan</td>
            <td>nan</td>
        </tr>
        <tr>
            <td>iPhone SE2 with the iOS app</td>
            <td>1</td>
            <td>nan</td>
            <td>nan</td>
        </tr>
        <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
        </tr>
    </tbody>
    <thead>
        <tr>
            <th>Other</th>
            <th>Units (#)</th>
            <th>Price per unit (€)</th>
            <th>Price (€)</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>PlayStation Eye Webcam and Microphone array</td>
            <td>1</td>
            <td>14.95</td>
            <td>14.95</td>
        </tr>
        <tr>
            <td>DSMR - Slimme Meter kabel</td>
            <td>1</td>
            <td>19.95</td>
            <td>19.95</td>
        </tr>
        <tr>
            <td>Nodo-Shop – OpenTherm Gateway (OTGW) with NodeMCU</td>
            <td>1</td>
            <td>48.81</td>
            <td>48.81</td>
        </tr>
        <tr>
            <td><i><b>Total</b></i></td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>83.71</td>
        </tr>
        <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
        </tr>
    </tbody>
    <thead>
        <tr>
            <th>Total</th>
            <th></th>
            <th></th>
            <th>€1902.81</th>
        </tr>
    </thead>
</table>
<!-- end-table -->

<!-- start-automations -->
# Automations - Table of Content
1. [Alarm clock ⏰](#alarm-clock-) (1 automations)
1. [Apple Watch ⌚️](#apple-watch-) (1 automations)
1. [Arriving 👞](#arriving-) (1 automations)
1. [Climate 🔥🥶](#climate-) (5 automations)
1. [Control switches 🎛](#control-switches-) (6 automations)
1. [Cube ∛](#cube-) (2 automations)
1. [Doorbell 🚪🔔](#doorbell-) (1 automations)
1. [Frontend 👨‍💻](#frontend-) (3 automations)
1. [KEF DSP 🔈🎛](#kef-dsp-) (12 automations)
1. [Leaving 👞](#leaving-) (3 automations)
1. [Light 💡](#light-) (16 automations)
1. [Lovelace 👨‍💻](#lovelace-) (1 automations)
1. [LSX 🔈](#lsx-) (2 automations)
1. [Media player 🔈📺](#media-player-) (5 automations)
1. [Music 🎵](#music-) (2 automations)
1. [Plant ☘️](#plant-) (3 automations)
1. [Security 👮‍♂️🚨](#security-) (4 automations)
1. [Night mode 🌕🌑](#night-mode-) (4 automations)
1. [System 🖥](#system-) (7 automations)
1. [Utilities 🧺👚🍽](#utilities-) (4 automations)
1. [Vacation mode 🏝](#vacation-mode-) (2 automations)
1. [Vacuum 🧹](#vacuum-) (6 automations)
1. [Work 💼](#work-) (3 automations)


⚠️ Total number of automations: **94** ⚠️

## [Alarm clock ⏰](https://github.com/basnijholt/home-assistant-config/blob/6ed0cd6c2c3675e9c4a3d9d8771348c148545a3d/automations/alarm_clock.yaml)
### [Wake up with Spotify and light](https://github.com/basnijholt/home-assistant-config/blob/6ed0cd6c2c3675e9c4a3d9d8771348c148545a3d/automations/alarm_clock.yaml#L11)

  *which uses:*
  - [input_boolean.alarm_clock](https://github.com/basnijholt/home-assistant-config/blob/6ed0cd6c2c3675e9c4a3d9d8771348c148545a3d/includes/input_booleans.yaml#L43)
  - [input_boolean.wake_up_light](https://github.com/basnijholt/home-assistant-config/blob/6ed0cd6c2c3675e9c4a3d9d8771348c148545a3d/includes/input_booleans.yaml#L60)
  - [input_boolean.wake_up_with_spotify](https://github.com/basnijholt/home-assistant-config/blob/6ed0cd6c2c3675e9c4a3d9d8771348c148545a3d/includes/input_booleans.yaml#L84)
  - [input_select.sleep_mode](https://github.com/basnijholt/home-assistant-config/blob/c24d6e6c9aded06456477a0c3874d014884d37a6/includes/input_selects.yaml#L11)
  - [sensor.ten_minutes_before_alarm](https://github.com/basnijholt/home-assistant-config/blob/9a7165d45736509c2908091b14cae2e489c8b5f0/includes/sensors.yaml#L235)

[^ toc](#automations---table-of-content)


## [Apple Watch ⌚️](https://github.com/basnijholt/home-assistant-config/blob/154195bcc713d2b4156be798ead120cc6fbc5aa6/automations/apple_watch.yaml)
### [Play or Pause the TV](https://github.com/basnijholt/home-assistant-config/blob/154195bcc713d2b4156be798ead120cc6fbc5aa6/automations/apple_watch.yaml#L11)


[^ toc](#automations---table-of-content)


## [Arriving 👞](https://github.com/basnijholt/home-assistant-config/blob/b7890ef2b9fb512af2df0b213f0c39cc0391b244/automations/arriving.yaml)
### [Switch music from iPhone to speakers if no one is home](https://github.com/basnijholt/home-assistant-config/blob/b7890ef2b9fb512af2df0b213f0c39cc0391b244/automations/arriving.yaml#L13)

  *which uses:*
  - [input_boolean.guest_mode](https://github.com/basnijholt/home-assistant-config/blob/6ed0cd6c2c3675e9c4a3d9d8771348c148545a3d/includes/input_booleans.yaml#L22)

[^ toc](#automations---table-of-content)


## [Climate 🔥🥶](https://github.com/basnijholt/home-assistant-config/blob/45d4169bf6fc34b1776feb0ab731558024ce8df6/automations/climate.yaml)
### [Turn on the heating 30 min before waking up](https://github.com/basnijholt/home-assistant-config/blob/45d4169bf6fc34b1776feb0ab731558024ce8df6/automations/climate.yaml#L12)

  *which uses:*
  - [input_boolean.alarm_clock](https://github.com/basnijholt/home-assistant-config/blob/6ed0cd6c2c3675e9c4a3d9d8771348c148545a3d/includes/input_booleans.yaml#L43)
  - [input_boolean.automatic_temperature](https://github.com/basnijholt/home-assistant-config/blob/6ed0cd6c2c3675e9c4a3d9d8771348c148545a3d/includes/input_booleans.yaml#L37)
  - [script.set_high_temperature](https://github.com/basnijholt/home-assistant-config/blob/423402f7fb675b4856a77ca82a411cbd4bd6dd1a/scripts.yaml#L293)
  - [sensor.half_hour_before_alarm](https://github.com/basnijholt/home-assistant-config/blob/9a7165d45736509c2908091b14cae2e489c8b5f0/includes/sensors.yaml#L227)

### [Turn on the heating when going home](https://github.com/basnijholt/home-assistant-config/blob/45d4169bf6fc34b1776feb0ab731558024ce8df6/automations/climate.yaml#L26)

  *which uses:*
  - [input_boolean.automatic_temperature](https://github.com/basnijholt/home-assistant-config/blob/6ed0cd6c2c3675e9c4a3d9d8771348c148545a3d/includes/input_booleans.yaml#L37)
  - [input_number.temperature_high](https://github.com/basnijholt/home-assistant-config/blob/b8c88b2b0cbb45093573d24cce5c8d3b07e7683e/includes/input_numbers.yaml#L20)
  - [script.set_high_temperature](https://github.com/basnijholt/home-assistant-config/blob/423402f7fb675b4856a77ca82a411cbd4bd6dd1a/scripts.yaml#L293)
  - [binary_sensor.no_one_home](https://github.com/basnijholt/home-assistant-config/blob/afdcbd11dc789c6fa6a07e948304fcc65326ef6e/includes/binary_sensors.yaml#L137)

### [Turn off the heating at 22:00](https://github.com/basnijholt/home-assistant-config/blob/45d4169bf6fc34b1776feb0ab731558024ce8df6/automations/climate.yaml#L51)

  *which uses:*
  - [input_boolean.automatic_temperature](https://github.com/basnijholt/home-assistant-config/blob/6ed0cd6c2c3675e9c4a3d9d8771348c148545a3d/includes/input_booleans.yaml#L37)
  - [input_number.temperature_low](https://github.com/basnijholt/home-assistant-config/blob/b8c88b2b0cbb45093573d24cce5c8d3b07e7683e/includes/input_numbers.yaml#L12)
  - [script.set_low_temperature](https://github.com/basnijholt/home-assistant-config/blob/423402f7fb675b4856a77ca82a411cbd4bd6dd1a/scripts.yaml#L284)
  - [binary_sensor.no_one_home](https://github.com/basnijholt/home-assistant-config/blob/afdcbd11dc789c6fa6a07e948304fcc65326ef6e/includes/binary_sensors.yaml#L137)

### [Turn on heating again after notification](https://github.com/basnijholt/home-assistant-config/blob/45d4169bf6fc34b1776feb0ab731558024ce8df6/automations/climate.yaml#L72)

  *which uses:*
  - [script.set_high_temperature](https://github.com/basnijholt/home-assistant-config/blob/423402f7fb675b4856a77ca82a411cbd4bd6dd1a/scripts.yaml#L293)

### [Set outside temperature every hour](https://github.com/basnijholt/home-assistant-config/blob/45d4169bf6fc34b1776feb0ab731558024ce8df6/automations/climate.yaml#L81)


[^ toc](#automations---table-of-content)


## [Control switches 🎛](https://github.com/basnijholt/home-assistant-config/blob/916f3fe2186a43a38a88cb9d27482b3d86d4eb5d/automations/control_switches.yaml)
### [Living room Philips Hue dimmer switch](https://github.com/basnijholt/home-assistant-config/blob/916f3fe2186a43a38a88cb9d27482b3d86d4eb5d/automations/control_switches.yaml#L12)

  *which uses:*
  - [input_select.last_script_living_room](https://github.com/basnijholt/home-assistant-config/blob/c24d6e6c9aded06456477a0c3874d014884d37a6/includes/input_selects.yaml#L25)
  - [script.increase_brightness](https://github.com/basnijholt/home-assistant-config/blob/423402f7fb675b4856a77ca82a411cbd4bd6dd1a/scripts.yaml#L208)
  - [script.next_colors](https://github.com/basnijholt/home-assistant-config/blob/423402f7fb675b4856a77ca82a411cbd4bd6dd1a/scripts.yaml#L262)
  - [script.white_lights_living_room](https://github.com/basnijholt/home-assistant-config/blob/423402f7fb675b4856a77ca82a411cbd4bd6dd1a/scripts.yaml#L182)

### [Bedroom Philips Hue dimmer switch](https://github.com/basnijholt/home-assistant-config/blob/916f3fe2186a43a38a88cb9d27482b3d86d4eb5d/automations/control_switches.yaml#L47)

  *which uses:*
  - [input_select.last_script_bedroom](https://github.com/basnijholt/home-assistant-config/blob/c24d6e6c9aded06456477a0c3874d014884d37a6/includes/input_selects.yaml#L31)
  - [script.increase_brightness](https://github.com/basnijholt/home-assistant-config/blob/423402f7fb675b4856a77ca82a411cbd4bd6dd1a/scripts.yaml#L208)
  - [script.next_colors](https://github.com/basnijholt/home-assistant-config/blob/423402f7fb675b4856a77ca82a411cbd4bd6dd1a/scripts.yaml#L262)
  - [script.white_lights_bedroom](https://github.com/basnijholt/home-assistant-config/blob/423402f7fb675b4856a77ca82a411cbd4bd6dd1a/scripts.yaml#L195)

### [Living room Aqara Wireless Mini Switch](https://github.com/basnijholt/home-assistant-config/blob/916f3fe2186a43a38a88cb9d27482b3d86d4eb5d/automations/control_switches.yaml#L82)

  *which uses:*
  - [input_select.last_script_living_room](https://github.com/basnijholt/home-assistant-config/blob/c24d6e6c9aded06456477a0c3874d014884d37a6/includes/input_selects.yaml#L25)
  - [script.fix_sound](https://github.com/basnijholt/home-assistant-config/blob/423402f7fb675b4856a77ca82a411cbd4bd6dd1a/scripts.yaml#L323)
  - [script.increase_brightness](https://github.com/basnijholt/home-assistant-config/blob/423402f7fb675b4856a77ca82a411cbd4bd6dd1a/scripts.yaml#L208)
  - [script.next_colors](https://github.com/basnijholt/home-assistant-config/blob/423402f7fb675b4856a77ca82a411cbd4bd6dd1a/scripts.yaml#L262)

### [Bedroom Aqara Wireless Mini Switch](https://github.com/basnijholt/home-assistant-config/blob/916f3fe2186a43a38a88cb9d27482b3d86d4eb5d/automations/control_switches.yaml#L129)

  *which uses:*
  - [input_select.last_script_bedroom](https://github.com/basnijholt/home-assistant-config/blob/c24d6e6c9aded06456477a0c3874d014884d37a6/includes/input_selects.yaml#L31)
  - [input_select.sleep_mode](https://github.com/basnijholt/home-assistant-config/blob/c24d6e6c9aded06456477a0c3874d014884d37a6/includes/input_selects.yaml#L11)
  - [script.going_to_sleep](https://github.com/basnijholt/home-assistant-config/blob/423402f7fb675b4856a77ca82a411cbd4bd6dd1a/scripts.yaml#L253)
  - [script.increase_brightness](https://github.com/basnijholt/home-assistant-config/blob/423402f7fb675b4856a77ca82a411cbd4bd6dd1a/scripts.yaml#L208)
  - [script.next_colors](https://github.com/basnijholt/home-assistant-config/blob/423402f7fb675b4856a77ca82a411cbd4bd6dd1a/scripts.yaml#L262)
  - [script.turn_off_everything](https://github.com/basnijholt/home-assistant-config/blob/423402f7fb675b4856a77ca82a411cbd4bd6dd1a/scripts.yaml#L246)
  - [sensor.ten_minutes_before_alarm](https://github.com/basnijholt/home-assistant-config/blob/9a7165d45736509c2908091b14cae2e489c8b5f0/includes/sensors.yaml#L235)

### [Bathroom Aqara Wireless Mini Switch](https://github.com/basnijholt/home-assistant-config/blob/916f3fe2186a43a38a88cb9d27482b3d86d4eb5d/automations/control_switches.yaml#L177)

  *which uses:*
  - [input_select.bathroom_color](https://github.com/basnijholt/home-assistant-config/blob/c24d6e6c9aded06456477a0c3874d014884d37a6/includes/input_selects.yaml#L37)
  - [script.increase_brightness](https://github.com/basnijholt/home-assistant-config/blob/423402f7fb675b4856a77ca82a411cbd4bd6dd1a/scripts.yaml#L208)

### [Downstairs Aqara Wireless Mini Switch](https://github.com/basnijholt/home-assistant-config/blob/916f3fe2186a43a38a88cb9d27482b3d86d4eb5d/automations/control_switches.yaml#L213)

  *which uses:*
  - [script.arriving](https://github.com/basnijholt/home-assistant-config/blob/423402f7fb675b4856a77ca82a411cbd4bd6dd1a/scripts.yaml#L308)
  - [script.set_low_temperature](https://github.com/basnijholt/home-assistant-config/blob/423402f7fb675b4856a77ca82a411cbd4bd6dd1a/scripts.yaml#L284)
  - [script.start_spotify](https://github.com/basnijholt/home-assistant-config/blob/423402f7fb675b4856a77ca82a411cbd4bd6dd1a/scripts.yaml#L39)
  - [script.turn_off_everything_non_automatic](https://github.com/basnijholt/home-assistant-config/blob/423402f7fb675b4856a77ca82a411cbd4bd6dd1a/scripts.yaml#L230)
  - [sensor.favorite_playlist_of_nearest_person](https://github.com/basnijholt/home-assistant-config/blob/9a7165d45736509c2908091b14cae2e489c8b5f0/includes/sensors.yaml#L81)

[^ toc](#automations---table-of-content)


## [Cube ∛](https://github.com/basnijholt/home-assistant-config/blob/91abbd6a76cee4081e9e991fc613caea070fe727/automations/cube.yaml)
### [Perform operation](https://github.com/basnijholt/home-assistant-config/blob/91abbd6a76cee4081e9e991fc613caea070fe727/automations/cube.yaml#L12)

  *which uses:*
  - [input_select.cube_mode](https://github.com/basnijholt/home-assistant-config/blob/c24d6e6c9aded06456477a0c3874d014884d37a6/includes/input_selects.yaml#L18)
  - [script.start_spotify_playlist_of_nearest_person](https://github.com/basnijholt/home-assistant-config/blob/423402f7fb675b4856a77ca82a411cbd4bd6dd1a/scripts.yaml#L71)

### [Rotate the cube](https://github.com/basnijholt/home-assistant-config/blob/91abbd6a76cee4081e9e991fc613caea070fe727/automations/cube.yaml#L70)

  *which uses:*
  - [input_select.cube_mode](https://github.com/basnijholt/home-assistant-config/blob/c24d6e6c9aded06456477a0c3874d014884d37a6/includes/input_selects.yaml#L18)

[^ toc](#automations---table-of-content)


## [Doorbell 🚪🔔](https://github.com/basnijholt/home-assistant-config/blob/9be72f4f3b5f056b44f984e016b629a5dba9c774/automations/doorbell.yaml)
### [Click the button](https://github.com/basnijholt/home-assistant-config/blob/9be72f4f3b5f056b44f984e016b629a5dba9c774/automations/doorbell.yaml#L11)


[^ toc](#automations---table-of-content)


## [Frontend 👨‍💻](https://github.com/basnijholt/home-assistant-config/blob/734719c63de4b8f99a849719702e042913ec7832/automations/frontend.yaml)
### [Turn on dark mode](https://github.com/basnijholt/home-assistant-config/blob/734719c63de4b8f99a849719702e042913ec7832/automations/frontend.yaml#L11)

  *which uses:*
  - [input_boolean.dark_mode](https://github.com/basnijholt/home-assistant-config/blob/6ed0cd6c2c3675e9c4a3d9d8771348c148545a3d/includes/input_booleans.yaml#L29)

### [Turn on light mode](https://github.com/basnijholt/home-assistant-config/blob/734719c63de4b8f99a849719702e042913ec7832/automations/frontend.yaml#L19)

  *which uses:*
  - [input_boolean.dark_mode](https://github.com/basnijholt/home-assistant-config/blob/6ed0cd6c2c3675e9c4a3d9d8771348c148545a3d/includes/input_booleans.yaml#L29)

### [Change theme](https://github.com/basnijholt/home-assistant-config/blob/734719c63de4b8f99a849719702e042913ec7832/automations/frontend.yaml#L27)

  *which uses:*
  - [input_boolean.dark_mode](https://github.com/basnijholt/home-assistant-config/blob/6ed0cd6c2c3675e9c4a3d9d8771348c148545a3d/includes/input_booleans.yaml#L29)
  - [input_boolean.theme_alternative](https://github.com/basnijholt/home-assistant-config/blob/6ed0cd6c2c3675e9c4a3d9d8771348c148545a3d/includes/input_booleans.yaml#L32)
  - [input_select.theme](https://github.com/basnijholt/home-assistant-config/blob/c24d6e6c9aded06456477a0c3874d014884d37a6/includes/input_selects.yaml#L46)

[^ toc](#automations---table-of-content)


## [KEF DSP 🔈🎛](https://github.com/basnijholt/home-assistant-config/blob/734719c63de4b8f99a849719702e042913ec7832/automations/kef_dsp.yaml)
### [Sync desk_db](https://github.com/basnijholt/home-assistant-config/blob/734719c63de4b8f99a849719702e042913ec7832/automations/kef_dsp.yaml#L19)

  *which uses:*
  - [input_number.kef_ls50_desk_db](https://github.com/basnijholt/home-assistant-config/blob/b8c88b2b0cbb45093573d24cce5c8d3b07e7683e/includes/input_numbers.yaml#L28)
  - [script.sync_kef_dsp](https://github.com/basnijholt/home-assistant-config/blob/423402f7fb675b4856a77ca82a411cbd4bd6dd1a/scripts.yaml#L397)

### [Sync wall_db](https://github.com/basnijholt/home-assistant-config/blob/734719c63de4b8f99a849719702e042913ec7832/automations/kef_dsp.yaml#L35)

  *which uses:*
  - [input_number.kef_ls50_wall_db](https://github.com/basnijholt/home-assistant-config/blob/b8c88b2b0cbb45093573d24cce5c8d3b07e7683e/includes/input_numbers.yaml#L35)
  - [script.sync_kef_dsp](https://github.com/basnijholt/home-assistant-config/blob/423402f7fb675b4856a77ca82a411cbd4bd6dd1a/scripts.yaml#L397)

### [Sync treble_db](https://github.com/basnijholt/home-assistant-config/blob/734719c63de4b8f99a849719702e042913ec7832/automations/kef_dsp.yaml#L51)

  *which uses:*
  - [input_number.kef_ls50_treble_db](https://github.com/basnijholt/home-assistant-config/blob/b8c88b2b0cbb45093573d24cce5c8d3b07e7683e/includes/input_numbers.yaml#L42)
  - [script.sync_kef_dsp](https://github.com/basnijholt/home-assistant-config/blob/423402f7fb675b4856a77ca82a411cbd4bd6dd1a/scripts.yaml#L397)

### [Sync high_hz](https://github.com/basnijholt/home-assistant-config/blob/734719c63de4b8f99a849719702e042913ec7832/automations/kef_dsp.yaml#L67)

  *which uses:*
  - [input_number.kef_ls50_high_hz](https://github.com/basnijholt/home-assistant-config/blob/b8c88b2b0cbb45093573d24cce5c8d3b07e7683e/includes/input_numbers.yaml#L49)
  - [script.sync_kef_dsp](https://github.com/basnijholt/home-assistant-config/blob/423402f7fb675b4856a77ca82a411cbd4bd6dd1a/scripts.yaml#L397)

### [Sync low_hz](https://github.com/basnijholt/home-assistant-config/blob/734719c63de4b8f99a849719702e042913ec7832/automations/kef_dsp.yaml#L83)

  *which uses:*
  - [input_number.kef_ls50_low_hz](https://github.com/basnijholt/home-assistant-config/blob/b8c88b2b0cbb45093573d24cce5c8d3b07e7683e/includes/input_numbers.yaml#L56)
  - [script.sync_kef_dsp](https://github.com/basnijholt/home-assistant-config/blob/423402f7fb675b4856a77ca82a411cbd4bd6dd1a/scripts.yaml#L397)

### [Sync sub_db](https://github.com/basnijholt/home-assistant-config/blob/734719c63de4b8f99a849719702e042913ec7832/automations/kef_dsp.yaml#L99)

  *which uses:*
  - [input_number.kef_ls50_sub_db](https://github.com/basnijholt/home-assistant-config/blob/b8c88b2b0cbb45093573d24cce5c8d3b07e7683e/includes/input_numbers.yaml#L63)
  - [script.sync_kef_dsp](https://github.com/basnijholt/home-assistant-config/blob/423402f7fb675b4856a77ca82a411cbd4bd6dd1a/scripts.yaml#L397)

### [Sync sub_polarity](https://github.com/basnijholt/home-assistant-config/blob/734719c63de4b8f99a849719702e042913ec7832/automations/kef_dsp.yaml#L122)

  *which uses:*
  - [input_select.kef_ls50_sub_polarity](https://github.com/basnijholt/home-assistant-config/blob/c24d6e6c9aded06456477a0c3874d014884d37a6/includes/input_selects.yaml#L90)
  - [script.sync_kef_dsp](https://github.com/basnijholt/home-assistant-config/blob/423402f7fb675b4856a77ca82a411cbd4bd6dd1a/scripts.yaml#L397)

### [Sync bass_extension](https://github.com/basnijholt/home-assistant-config/blob/734719c63de4b8f99a849719702e042913ec7832/automations/kef_dsp.yaml#L137)

  *which uses:*
  - [input_select.kef_ls50_bass_extension](https://github.com/basnijholt/home-assistant-config/blob/c24d6e6c9aded06456477a0c3874d014884d37a6/includes/input_selects.yaml#L97)
  - [script.sync_kef_dsp](https://github.com/basnijholt/home-assistant-config/blob/423402f7fb675b4856a77ca82a411cbd4bd6dd1a/scripts.yaml#L397)

### [Sync desk_mode](https://github.com/basnijholt/home-assistant-config/blob/734719c63de4b8f99a849719702e042913ec7832/automations/kef_dsp.yaml#L159)

  *which uses:*
  - [input_boolean.kef_ls50_desk_mode](https://github.com/basnijholt/home-assistant-config/blob/6ed0cd6c2c3675e9c4a3d9d8771348c148545a3d/includes/input_booleans.yaml#L46)
  - [script.sync_kef_dsp](https://github.com/basnijholt/home-assistant-config/blob/423402f7fb675b4856a77ca82a411cbd4bd6dd1a/scripts.yaml#L397)

### [Sync wall_mode](https://github.com/basnijholt/home-assistant-config/blob/734719c63de4b8f99a849719702e042913ec7832/automations/kef_dsp.yaml#L174)

  *which uses:*
  - [input_boolean.kef_ls50_wall_mode](https://github.com/basnijholt/home-assistant-config/blob/6ed0cd6c2c3675e9c4a3d9d8771348c148545a3d/includes/input_booleans.yaml#L49)
  - [script.sync_kef_dsp](https://github.com/basnijholt/home-assistant-config/blob/423402f7fb675b4856a77ca82a411cbd4bd6dd1a/scripts.yaml#L397)

### [Sync phase_correction](https://github.com/basnijholt/home-assistant-config/blob/734719c63de4b8f99a849719702e042913ec7832/automations/kef_dsp.yaml#L189)

  *which uses:*
  - [input_boolean.kef_ls50_phase_correction](https://github.com/basnijholt/home-assistant-config/blob/6ed0cd6c2c3675e9c4a3d9d8771348c148545a3d/includes/input_booleans.yaml#L52)
  - [script.sync_kef_dsp](https://github.com/basnijholt/home-assistant-config/blob/423402f7fb675b4856a77ca82a411cbd4bd6dd1a/scripts.yaml#L397)

### [Sync high_pass](https://github.com/basnijholt/home-assistant-config/blob/734719c63de4b8f99a849719702e042913ec7832/automations/kef_dsp.yaml#L204)

  *which uses:*
  - [input_boolean.kef_ls50_high_pass](https://github.com/basnijholt/home-assistant-config/blob/6ed0cd6c2c3675e9c4a3d9d8771348c148545a3d/includes/input_booleans.yaml#L55)
  - [script.sync_kef_dsp](https://github.com/basnijholt/home-assistant-config/blob/423402f7fb675b4856a77ca82a411cbd4bd6dd1a/scripts.yaml#L397)

[^ toc](#automations---table-of-content)


## [Leaving 👞](https://github.com/basnijholt/home-assistant-config/blob/77845b0b0a3c5b804c2f370266809505b8bca464/automations/leaving.yaml)
### [Automatically turn off everything](https://github.com/basnijholt/home-assistant-config/blob/77845b0b0a3c5b804c2f370266809505b8bca464/automations/leaving.yaml#L12)

  *which uses:*
  - [input_boolean.guest_mode](https://github.com/basnijholt/home-assistant-config/blob/6ed0cd6c2c3675e9c4a3d9d8771348c148545a3d/includes/input_booleans.yaml#L22)
  - [script.leaving](https://github.com/basnijholt/home-assistant-config/blob/423402f7fb675b4856a77ca82a411cbd4bd6dd1a/scripts.yaml#L302)
  - [binary_sensor.anything_on](https://github.com/basnijholt/home-assistant-config/blob/afdcbd11dc789c6fa6a07e948304fcc65326ef6e/includes/binary_sensors.yaml#L122)
  - [binary_sensor.no_one_home](https://github.com/basnijholt/home-assistant-config/blob/afdcbd11dc789c6fa6a07e948304fcc65326ef6e/includes/binary_sensors.yaml#L137)
  - [binary_sensor.someone_in_the_house_in_last_hour](https://github.com/basnijholt/home-assistant-config/blob/afdcbd11dc789c6fa6a07e948304fcc65326ef6e/includes/binary_sensors.yaml#L34)

### [Ask to turn off everything](https://github.com/basnijholt/home-assistant-config/blob/77845b0b0a3c5b804c2f370266809505b8bca464/automations/leaving.yaml#L40)

  *which uses:*
  - [input_boolean.guest_mode](https://github.com/basnijholt/home-assistant-config/blob/6ed0cd6c2c3675e9c4a3d9d8771348c148545a3d/includes/input_booleans.yaml#L22)
  - [binary_sensor.anything_on](https://github.com/basnijholt/home-assistant-config/blob/afdcbd11dc789c6fa6a07e948304fcc65326ef6e/includes/binary_sensors.yaml#L122)
  - [binary_sensor.no_one_home](https://github.com/basnijholt/home-assistant-config/blob/afdcbd11dc789c6fa6a07e948304fcc65326ef6e/includes/binary_sensors.yaml#L137)

### [Turn off everything after notification](https://github.com/basnijholt/home-assistant-config/blob/77845b0b0a3c5b804c2f370266809505b8bca464/automations/leaving.yaml#L70)

  *which uses:*
  - [script.leaving](https://github.com/basnijholt/home-assistant-config/blob/423402f7fb675b4856a77ca82a411cbd4bd6dd1a/scripts.yaml#L302)

[^ toc](#automations---table-of-content)


## [Light 💡](https://github.com/basnijholt/home-assistant-config/blob/454d1703ff31b23cf88255124602673cf9921e59/automations/light.yaml)
### [Toggle kitchen ceiling](https://github.com/basnijholt/home-assistant-config/blob/454d1703ff31b23cf88255124602673cf9921e59/automations/light.yaml#L34)

  *which uses:*
  - [binary_sensor.activity_in_kitchen](https://github.com/basnijholt/home-assistant-config/blob/afdcbd11dc789c6fa6a07e948304fcc65326ef6e/includes/binary_sensors.yaml#L53)

### [Turn on kitchen counter if sleep mode is off](https://github.com/basnijholt/home-assistant-config/blob/454d1703ff31b23cf88255124602673cf9921e59/automations/light.yaml#L44)

  *which uses:*
  - [input_select.sleep_mode](https://github.com/basnijholt/home-assistant-config/blob/c24d6e6c9aded06456477a0c3874d014884d37a6/includes/input_selects.yaml#L11)
  - [binary_sensor.activity_in_kitchen](https://github.com/basnijholt/home-assistant-config/blob/afdcbd11dc789c6fa6a07e948304fcc65326ef6e/includes/binary_sensors.yaml#L53)

### [Turn off kitchen counter](https://github.com/basnijholt/home-assistant-config/blob/454d1703ff31b23cf88255124602673cf9921e59/automations/light.yaml#L59)

  *which uses:*
  - [binary_sensor.activity_in_kitchen](https://github.com/basnijholt/home-assistant-config/blob/afdcbd11dc789c6fa6a07e948304fcc65326ef6e/includes/binary_sensors.yaml#L53)

### [Toggle bathroom](https://github.com/basnijholt/home-assistant-config/blob/454d1703ff31b23cf88255124602673cf9921e59/automations/light.yaml#L75)

  *which uses:*
  - [binary_sensor.activity_in_bathroom](https://github.com/basnijholt/home-assistant-config/blob/afdcbd11dc789c6fa6a07e948304fcc65326ef6e/includes/binary_sensors.yaml#L40)

### [Toggle toilet](https://github.com/basnijholt/home-assistant-config/blob/454d1703ff31b23cf88255124602673cf9921e59/automations/light.yaml#L91)

  *which uses:*
  - [binary_sensor.activity_in_toilet](https://github.com/basnijholt/home-assistant-config/blob/afdcbd11dc789c6fa6a07e948304fcc65326ef6e/includes/binary_sensors.yaml#L47)

### [Turn on hall](https://github.com/basnijholt/home-assistant-config/blob/454d1703ff31b23cf88255124602673cf9921e59/automations/light.yaml#L107)

  *which uses:*
  - [input_select.sleep_mode](https://github.com/basnijholt/home-assistant-config/blob/c24d6e6c9aded06456477a0c3874d014884d37a6/includes/input_selects.yaml#L11)
  - [binary_sensor.activity_in_hall](https://github.com/basnijholt/home-assistant-config/blob/afdcbd11dc789c6fa6a07e948304fcc65326ef6e/includes/binary_sensors.yaml#L59)

### [Turn off hall](https://github.com/basnijholt/home-assistant-config/blob/454d1703ff31b23cf88255124602673cf9921e59/automations/light.yaml#L125)

  *which uses:*
  - [binary_sensor.activity_in_hall](https://github.com/basnijholt/home-assistant-config/blob/afdcbd11dc789c6fa6a07e948304fcc65326ef6e/includes/binary_sensors.yaml#L59)

### [Automatically turn on the bedroom](https://github.com/basnijholt/home-assistant-config/blob/454d1703ff31b23cf88255124602673cf9921e59/automations/light.yaml#L145)

  *which uses:*
  - [input_boolean.automatic_bedroom_lights](https://github.com/basnijholt/home-assistant-config/blob/6ed0cd6c2c3675e9c4a3d9d8771348c148545a3d/includes/input_booleans.yaml#L34)
  - [input_boolean.bedroom_lights_automatically_turned_on](https://github.com/basnijholt/home-assistant-config/blob/6ed0cd6c2c3675e9c4a3d9d8771348c148545a3d/includes/input_booleans.yaml#L25)
  - [input_select.sleep_mode](https://github.com/basnijholt/home-assistant-config/blob/c24d6e6c9aded06456477a0c3874d014884d37a6/includes/input_selects.yaml#L11)
  - [binary_sensor.activity_in_bedroom](https://github.com/basnijholt/home-assistant-config/blob/afdcbd11dc789c6fa6a07e948304fcc65326ef6e/includes/binary_sensors.yaml#L66)

### [Automatically turn off the bedroom](https://github.com/basnijholt/home-assistant-config/blob/454d1703ff31b23cf88255124602673cf9921e59/automations/light.yaml#L166)

  *which uses:*
  - [input_boolean.automatic_bedroom_lights](https://github.com/basnijholt/home-assistant-config/blob/6ed0cd6c2c3675e9c4a3d9d8771348c148545a3d/includes/input_booleans.yaml#L34)
  - [input_boolean.bedroom_lights_automatically_turned_on](https://github.com/basnijholt/home-assistant-config/blob/6ed0cd6c2c3675e9c4a3d9d8771348c148545a3d/includes/input_booleans.yaml#L25)
  - [binary_sensor.activity_in_bedroom](https://github.com/basnijholt/home-assistant-config/blob/afdcbd11dc789c6fa6a07e948304fcc65326ef6e/includes/binary_sensors.yaml#L66)

### [Turn off bedroom lights auto switch](https://github.com/basnijholt/home-assistant-config/blob/454d1703ff31b23cf88255124602673cf9921e59/automations/light.yaml#L189)

  *which uses:*
  - [input_boolean.bedroom_lights_automatically_turned_on](https://github.com/basnijholt/home-assistant-config/blob/6ed0cd6c2c3675e9c4a3d9d8771348c148545a3d/includes/input_booleans.yaml#L25)

### [Turn on automatic_bedroom_lights switch](https://github.com/basnijholt/home-assistant-config/blob/454d1703ff31b23cf88255124602673cf9921e59/automations/light.yaml#L214)

  *which uses:*
  - [input_boolean.automatic_bedroom_lights](https://github.com/basnijholt/home-assistant-config/blob/6ed0cd6c2c3675e9c4a3d9d8771348c148545a3d/includes/input_booleans.yaml#L34)

### [Turn off toilet (extra check)](https://github.com/basnijholt/home-assistant-config/blob/454d1703ff31b23cf88255124602673cf9921e59/automations/light.yaml#L228)

  In case the other automation failed

  *which uses:*
  - [binary_sensor.activity_in_toilet](https://github.com/basnijholt/home-assistant-config/blob/afdcbd11dc789c6fa6a07e948304fcc65326ef6e/includes/binary_sensors.yaml#L47)

### [Turn off bathroom (extra check)](https://github.com/basnijholt/home-assistant-config/blob/454d1703ff31b23cf88255124602673cf9921e59/automations/light.yaml#L244)

  In case the other automation failed

  *which uses:*
  - [binary_sensor.activity_in_bathroom](https://github.com/basnijholt/home-assistant-config/blob/afdcbd11dc789c6fa6a07e948304fcc65326ef6e/includes/binary_sensors.yaml#L40)

### [Turn off kitchen (extra check)](https://github.com/basnijholt/home-assistant-config/blob/454d1703ff31b23cf88255124602673cf9921e59/automations/light.yaml#L260)

  In case the other automation failed

  *which uses:*
  - [binary_sensor.activity_in_kitchen](https://github.com/basnijholt/home-assistant-config/blob/afdcbd11dc789c6fa6a07e948304fcc65326ef6e/includes/binary_sensors.yaml#L53)

### [Turn off hall (extra check)](https://github.com/basnijholt/home-assistant-config/blob/454d1703ff31b23cf88255124602673cf9921e59/automations/light.yaml#L276)

  In case the other automation failed

  *which uses:*
  - [binary_sensor.activity_in_hall](https://github.com/basnijholt/home-assistant-config/blob/afdcbd11dc789c6fa6a07e948304fcc65326ef6e/includes/binary_sensors.yaml#L59)

### [Turn off bedroom (extra check)](https://github.com/basnijholt/home-assistant-config/blob/454d1703ff31b23cf88255124602673cf9921e59/automations/light.yaml#L299)

  In case the other automation failed

  *which uses:*
  - [input_boolean.automatic_bedroom_lights](https://github.com/basnijholt/home-assistant-config/blob/6ed0cd6c2c3675e9c4a3d9d8771348c148545a3d/includes/input_booleans.yaml#L34)
  - [input_boolean.bedroom_lights_automatically_turned_on](https://github.com/basnijholt/home-assistant-config/blob/6ed0cd6c2c3675e9c4a3d9d8771348c148545a3d/includes/input_booleans.yaml#L25)
  - [binary_sensor.activity_in_bedroom](https://github.com/basnijholt/home-assistant-config/blob/afdcbd11dc789c6fa6a07e948304fcc65326ef6e/includes/binary_sensors.yaml#L66)

[^ toc](#automations---table-of-content)


## [Lovelace 👨‍💻](https://github.com/basnijholt/home-assistant-config/blob/dc715e0185302b39caf58117fcfeb03d71d99de4/automations/lovelace.yaml)
### [Convert lovelace.json to lovelace-ui.yaml](https://github.com/basnijholt/home-assistant-config/blob/dc715e0185302b39caf58117fcfeb03d71d99de4/automations/lovelace.yaml#L11)

  *which uses:*
  - [shell_command.chores](https://github.com/basnijholt/home-assistant-config/blob/160ad08e4015f9a698a27dcadbd43ba630a82662/includes/shell_commands.yaml#L13)
  - [shell_command.convert_lovelace](https://github.com/basnijholt/home-assistant-config/blob/160ad08e4015f9a698a27dcadbd43ba630a82662/includes/shell_commands.yaml#L11)

[^ toc](#automations---table-of-content)


## [LSX 🔈](https://github.com/basnijholt/home-assistant-config/blob/8530f88be45d191834c249305f9a8df163144537/automations/lsx-control.yaml)
### [Sync volume](https://github.com/basnijholt/home-assistant-config/blob/8530f88be45d191834c249305f9a8df163144537/automations/lsx-control.yaml#L12)

  *which uses:*
  - [input_select.lsx_volume](https://github.com/basnijholt/home-assistant-config/blob/c24d6e6c9aded06456477a0c3874d014884d37a6/includes/input_selects.yaml#L58)

### [Sync source](https://github.com/basnijholt/home-assistant-config/blob/8530f88be45d191834c249305f9a8df163144537/automations/lsx-control.yaml#L41)

  *which uses:*
  - [input_select.lsx_source](https://github.com/basnijholt/home-assistant-config/blob/c24d6e6c9aded06456477a0c3874d014884d37a6/includes/input_selects.yaml#L82)

[^ toc](#automations---table-of-content)


## [Media player 🔈📺](https://github.com/basnijholt/home-assistant-config/blob/8530f88be45d191834c249305f9a8df163144537/automations/media_player.yaml)
### [Turn on Opt when TV is on and Spotify is not playing and not Usb](https://github.com/basnijholt/home-assistant-config/blob/8530f88be45d191834c249305f9a8df163144537/automations/media_player.yaml#L12)

  The speaker is connected via an optical cable to the TV. Whenever the speakers
aren't playing Spotify (via WiFi) directly, switch the source of the speakers
to "Opt".



### [Turn off speakers when turning off TV](https://github.com/basnijholt/home-assistant-config/blob/8530f88be45d191834c249305f9a8df163144537/automations/media_player.yaml#L41)


### [If speakers off and TV on, turn on the speaker on TV state change](https://github.com/basnijholt/home-assistant-config/blob/8530f88be45d191834c249305f9a8df163144537/automations/media_player.yaml#L59)


### [Update Spotify entity when TV is on every 5 seconds](https://github.com/basnijholt/home-assistant-config/blob/8530f88be45d191834c249305f9a8df163144537/automations/media_player.yaml#L78)


### [Sync KEF LS50 and TV volume](https://github.com/basnijholt/home-assistant-config/blob/8530f88be45d191834c249305f9a8df163144537/automations/media_player.yaml#L93)


[^ toc](#automations---table-of-content)


## [Music 🎵](https://github.com/basnijholt/home-assistant-config/blob/86c96d427d1781d1bf8db06b97185d7dcaaa1cc0/automations/music.yaml)
### [Start playlist](https://github.com/basnijholt/home-assistant-config/blob/86c96d427d1781d1bf8db06b97185d7dcaaa1cc0/automations/music.yaml#L11)

  *which uses:*
  - [input_boolean.start_the_music](https://github.com/basnijholt/home-assistant-config/blob/6ed0cd6c2c3675e9c4a3d9d8771348c148545a3d/includes/input_booleans.yaml#L12)
  - [script.start_spotify_playlist_of_nearest_person](https://github.com/basnijholt/home-assistant-config/blob/423402f7fb675b4856a77ca82a411cbd4bd6dd1a/scripts.yaml#L71)

### [Switch music from iPhone to speakers if coming home](https://github.com/basnijholt/home-assistant-config/blob/86c96d427d1781d1bf8db06b97185d7dcaaa1cc0/automations/music.yaml#L26)

  *which uses:*
  - [input_boolean.guest_mode](https://github.com/basnijholt/home-assistant-config/blob/6ed0cd6c2c3675e9c4a3d9d8771348c148545a3d/includes/input_booleans.yaml#L22)

[^ toc](#automations---table-of-content)


## [Plant ☘️](https://github.com/basnijholt/home-assistant-config/blob/734719c63de4b8f99a849719702e042913ec7832/automations/plant.yaml)
### [Problem with Ficus microcarpa Ginseng](https://github.com/basnijholt/home-assistant-config/blob/734719c63de4b8f99a849719702e042913ec7832/automations/plant.yaml#L11)

  *which uses:*
  - [plant.ficus_microcarpa_ginseng](https://github.com/basnijholt/home-assistant-config/blob/48d69dcca0180bde84b32553225cd38e2bf10a99/includes/plant.yaml#L35)

### [Problem with Kentia Palm](https://github.com/basnijholt/home-assistant-config/blob/734719c63de4b8f99a849719702e042913ec7832/automations/plant.yaml#L29)

  *which uses:*
  - [plant.kentia_palm](https://github.com/basnijholt/home-assistant-config/blob/48d69dcca0180bde84b32553225cd38e2bf10a99/includes/plant.yaml#L67)

### [Problem with Yucca Elephantipes](https://github.com/basnijholt/home-assistant-config/blob/734719c63de4b8f99a849719702e042913ec7832/automations/plant.yaml#L47)

  *which uses:*
  - [plant.yucca_elephantipes](https://github.com/basnijholt/home-assistant-config/blob/48d69dcca0180bde84b32553225cd38e2bf10a99/includes/plant.yaml#L51)

[^ toc](#automations---table-of-content)


## [Security 👮‍♂️🚨](https://github.com/basnijholt/home-assistant-config/blob/734719c63de4b8f99a849719702e042913ec7832/automations/security.yaml)
### [Motion detected but we are not home](https://github.com/basnijholt/home-assistant-config/blob/734719c63de4b8f99a849719702e042913ec7832/automations/security.yaml#L11)

  *which uses:*
  - [binary_sensor.motion_detected](https://github.com/basnijholt/home-assistant-config/blob/afdcbd11dc789c6fa6a07e948304fcc65326ef6e/includes/binary_sensors.yaml#L19)
  - [group.persons](https://github.com/basnijholt/home-assistant-config/blob/2a719a3aacdb94f8de015aa4a9ec9efbcb9510b5/includes/groups.yaml#L11)

### [Sound alarm after notification](https://github.com/basnijholt/home-assistant-config/blob/734719c63de4b8f99a849719702e042913ec7832/automations/security.yaml#L32)


### [Door has been open for more than 5 minutes](https://github.com/basnijholt/home-assistant-config/blob/734719c63de4b8f99a849719702e042913ec7832/automations/security.yaml#L45)

  *which uses:*
  - [input_boolean.guest_mode](https://github.com/basnijholt/home-assistant-config/blob/6ed0cd6c2c3675e9c4a3d9d8771348c148545a3d/includes/input_booleans.yaml#L22)

### [No one is home but high power usage](https://github.com/basnijholt/home-assistant-config/blob/734719c63de4b8f99a849719702e042913ec7832/automations/security.yaml#L62)

  *which uses:*
  - [binary_sensor.no_one_home](https://github.com/basnijholt/home-assistant-config/blob/afdcbd11dc789c6fa6a07e948304fcc65326ef6e/includes/binary_sensors.yaml#L137)

[^ toc](#automations---table-of-content)


## [Night mode 🌕🌑](https://github.com/basnijholt/home-assistant-config/blob//automations/sleep_mode.yaml)
### [Automatically turn off when alarm turns off or at 7AM](https://github.com/basnijholt/home-assistant-config/blob//automations/sleep_mode.yaml#L12)

  *which uses:*
  - [input_boolean.alarm_clock](https://github.com/basnijholt/home-assistant-config/blob/6ed0cd6c2c3675e9c4a3d9d8771348c148545a3d/includes/input_booleans.yaml#L43)
  - [input_select.sleep_mode](https://github.com/basnijholt/home-assistant-config/blob/c24d6e6c9aded06456477a0c3874d014884d37a6/includes/input_selects.yaml#L11)

### [Turn off automatic bedroom lights](https://github.com/basnijholt/home-assistant-config/blob//automations/sleep_mode.yaml#L30)

  *which uses:*
  - [input_boolean.automatic_bedroom_lights](https://github.com/basnijholt/home-assistant-config/blob/6ed0cd6c2c3675e9c4a3d9d8771348c148545a3d/includes/input_booleans.yaml#L34)
  - [input_select.sleep_mode](https://github.com/basnijholt/home-assistant-config/blob/c24d6e6c9aded06456477a0c3874d014884d37a6/includes/input_selects.yaml#L11)

### [Set low temperature when sleep mode turns on](https://github.com/basnijholt/home-assistant-config/blob//automations/sleep_mode.yaml#L39)

  *which uses:*
  - [input_select.sleep_mode](https://github.com/basnijholt/home-assistant-config/blob/c24d6e6c9aded06456477a0c3874d014884d37a6/includes/input_selects.yaml#L11)
  - [script.set_low_temperature](https://github.com/basnijholt/home-assistant-config/blob/423402f7fb675b4856a77ca82a411cbd4bd6dd1a/scripts.yaml#L284)

### [Go from half to total sleeping mode](https://github.com/basnijholt/home-assistant-config/blob//automations/sleep_mode.yaml#L47)

  When it is half sleeping mode and there is no activity in the house for more than an hour go to total sleeping mode.


  *which uses:*
  - [input_select.sleep_mode](https://github.com/basnijholt/home-assistant-config/blob/c24d6e6c9aded06456477a0c3874d014884d37a6/includes/input_selects.yaml#L11)
  - [binary_sensor.activity_outside_bedroom](https://github.com/basnijholt/home-assistant-config/blob/afdcbd11dc789c6fa6a07e948304fcc65326ef6e/includes/binary_sensors.yaml#L74)

[^ toc](#automations---table-of-content)


## [System 🖥](https://github.com/basnijholt/home-assistant-config/blob/57eca351a63ab6b0a160b964f2fe463a5eeb5677/automations/system.yaml)
### [Warning about high CPU usage](https://github.com/basnijholt/home-assistant-config/blob/57eca351a63ab6b0a160b964f2fe463a5eeb5677/automations/system.yaml#L11)


### [Warning about high CPU temperature](https://github.com/basnijholt/home-assistant-config/blob/57eca351a63ab6b0a160b964f2fe463a5eeb5677/automations/system.yaml#L24)


### [Warning about high Xbox temperature](https://github.com/basnijholt/home-assistant-config/blob/57eca351a63ab6b0a160b964f2fe463a5eeb5677/automations/system.yaml#L37)


### [Update DNS](https://github.com/basnijholt/home-assistant-config/blob/57eca351a63ab6b0a160b964f2fe463a5eeb5677/automations/system.yaml#L56)

  Update the DNS at Gandi to point my domain to my Home Assistant instance.

  *which uses:*
  - [script.update_dns](https://github.com/basnijholt/home-assistant-config/blob/423402f7fb675b4856a77ca82a411cbd4bd6dd1a/scripts.yaml#L314)

### [Run chores](https://github.com/basnijholt/home-assistant-config/blob/57eca351a63ab6b0a160b964f2fe463a5eeb5677/automations/system.yaml#L64)

  Run shell and Python scripts in utils folder.

  *which uses:*
  - [shell_command.chores](https://github.com/basnijholt/home-assistant-config/blob/160ad08e4015f9a698a27dcadbd43ba630a82662/includes/shell_commands.yaml#L13)

### [MQTT sensors are not updating](https://github.com/basnijholt/home-assistant-config/blob/57eca351a63ab6b0a160b964f2fe463a5eeb5677/automations/system.yaml#L72)

  Check whether we are receiving messages over MQTT from my other HA instance.


### [Battery level low](https://github.com/basnijholt/home-assistant-config/blob/57eca351a63ab6b0a160b964f2fe463a5eeb5677/automations/system.yaml#L83)


[^ toc](#automations---table-of-content)


## [Utilities 🧺👚🍽](https://github.com/basnijholt/home-assistant-config/blob/423402f7fb675b4856a77ca82a411cbd4bd6dd1a/automations/utilities.yaml)
### [Washing machine has started](https://github.com/basnijholt/home-assistant-config/blob/423402f7fb675b4856a77ca82a411cbd4bd6dd1a/automations/utilities.yaml#L12)

  *which uses:*
  - [input_datetime.washing_machine_started](https://github.com/basnijholt/home-assistant-config/blob/ede0e0905544de83bf8d98348458dbdd99ae2ab5/includes/input_datetimes.yaml#L16)
  - [binary_sensor.washing_machine](https://github.com/basnijholt/home-assistant-config/blob/afdcbd11dc789c6fa6a07e948304fcc65326ef6e/includes/binary_sensors.yaml#L84)

### [Washing machine is done](https://github.com/basnijholt/home-assistant-config/blob/423402f7fb675b4856a77ca82a411cbd4bd6dd1a/automations/utilities.yaml#L24)

  *which uses:*
  - [input_datetime.washing_machine_done](https://github.com/basnijholt/home-assistant-config/blob/ede0e0905544de83bf8d98348458dbdd99ae2ab5/includes/input_datetimes.yaml#L21)
  - [sensor.nearest_iphone_notify](https://github.com/basnijholt/home-assistant-config/blob/9a7165d45736509c2908091b14cae2e489c8b5f0/includes/sensors.yaml#L216)
  - [binary_sensor.washing_machine](https://github.com/basnijholt/home-assistant-config/blob/afdcbd11dc789c6fa6a07e948304fcc65326ef6e/includes/binary_sensors.yaml#L84)

### [Dishwasher is done](https://github.com/basnijholt/home-assistant-config/blob/423402f7fb675b4856a77ca82a411cbd4bd6dd1a/automations/utilities.yaml#L41)

  *which uses:*
  - [input_datetime.dishwasher_done](https://github.com/basnijholt/home-assistant-config/blob/ede0e0905544de83bf8d98348458dbdd99ae2ab5/includes/input_datetimes.yaml#L31)
  - [sensor.nearest_iphone_notify](https://github.com/basnijholt/home-assistant-config/blob/9a7165d45736509c2908091b14cae2e489c8b5f0/includes/sensors.yaml#L216)
  - [binary_sensor.dishwasher](https://github.com/basnijholt/home-assistant-config/blob/afdcbd11dc789c6fa6a07e948304fcc65326ef6e/includes/binary_sensors.yaml#L96)

### [Dishwasher has started](https://github.com/basnijholt/home-assistant-config/blob/423402f7fb675b4856a77ca82a411cbd4bd6dd1a/automations/utilities.yaml#L58)

  *which uses:*
  - [input_datetime.dishwasher_started](https://github.com/basnijholt/home-assistant-config/blob/ede0e0905544de83bf8d98348458dbdd99ae2ab5/includes/input_datetimes.yaml#L26)
  - [binary_sensor.dishwasher](https://github.com/basnijholt/home-assistant-config/blob/afdcbd11dc789c6fa6a07e948304fcc65326ef6e/includes/binary_sensors.yaml#L96)

[^ toc](#automations---table-of-content)


## [Vacation mode 🏝](https://github.com/basnijholt/home-assistant-config/blob/585f51eecf4aef718381047225b29f960fd2751b/automations/vacation_mode.yaml)
### [Auto turn on](https://github.com/basnijholt/home-assistant-config/blob/585f51eecf4aef718381047225b29f960fd2751b/automations/vacation_mode.yaml#L11)

  *which uses:*
  - [input_boolean.guest_mode](https://github.com/basnijholt/home-assistant-config/blob/6ed0cd6c2c3675e9c4a3d9d8771348c148545a3d/includes/input_booleans.yaml#L22)
  - [input_boolean.vacation_mode](https://github.com/basnijholt/home-assistant-config/blob/6ed0cd6c2c3675e9c4a3d9d8771348c148545a3d/includes/input_booleans.yaml#L19)
  - [group.persons](https://github.com/basnijholt/home-assistant-config/blob/2a719a3aacdb94f8de015aa4a9ec9efbcb9510b5/includes/groups.yaml#L11)

### [Auto turn off](https://github.com/basnijholt/home-assistant-config/blob/585f51eecf4aef718381047225b29f960fd2751b/automations/vacation_mode.yaml#L31)

  *which uses:*
  - [input_boolean.guest_mode](https://github.com/basnijholt/home-assistant-config/blob/6ed0cd6c2c3675e9c4a3d9d8771348c148545a3d/includes/input_booleans.yaml#L22)
  - [input_boolean.vacation_mode](https://github.com/basnijholt/home-assistant-config/blob/6ed0cd6c2c3675e9c4a3d9d8771348c148545a3d/includes/input_booleans.yaml#L19)
  - [group.persons](https://github.com/basnijholt/home-assistant-config/blob/2a719a3aacdb94f8de015aa4a9ec9efbcb9510b5/includes/groups.yaml#L11)

[^ toc](#automations---table-of-content)


## [Vacuum 🧹](https://github.com/basnijholt/home-assistant-config/blob/734719c63de4b8f99a849719702e042913ec7832/automations/vacuum.yaml)
### [Started cleaning](https://github.com/basnijholt/home-assistant-config/blob/734719c63de4b8f99a849719702e042913ec7832/automations/vacuum.yaml#L11)


### [Stopped cleaning](https://github.com/basnijholt/home-assistant-config/blob/734719c63de4b8f99a849719702e042913ec7832/automations/vacuum.yaml#L23)

  *which uses:*
  - [input_boolean.cleaned_today](https://github.com/basnijholt/home-assistant-config/blob/6ed0cd6c2c3675e9c4a3d9d8771348c148545a3d/includes/input_booleans.yaml#L16)

### [Reminder notification](https://github.com/basnijholt/home-assistant-config/blob/734719c63de4b8f99a849719702e042913ec7832/automations/vacuum.yaml#L37)

  *which uses:*
  - [binary_sensor.vacuum_day](https://github.com/basnijholt/home-assistant-config/blob/afdcbd11dc789c6fa6a07e948304fcc65326ef6e/includes/binary_sensors.yaml#L131)

### [Cleanup if nobody is home](https://github.com/basnijholt/home-assistant-config/blob/734719c63de4b8f99a849719702e042913ec7832/automations/vacuum.yaml#L51)

  *which uses:*
  - [input_boolean.cleaned_today](https://github.com/basnijholt/home-assistant-config/blob/6ed0cd6c2c3675e9c4a3d9d8771348c148545a3d/includes/input_booleans.yaml#L16)
  - [input_boolean.guest_mode](https://github.com/basnijholt/home-assistant-config/blob/6ed0cd6c2c3675e9c4a3d9d8771348c148545a3d/includes/input_booleans.yaml#L22)
  - [input_boolean.vacation_mode](https://github.com/basnijholt/home-assistant-config/blob/6ed0cd6c2c3675e9c4a3d9d8771348c148545a3d/includes/input_booleans.yaml#L19)
  - [binary_sensor.vacuum_day](https://github.com/basnijholt/home-assistant-config/blob/afdcbd11dc789c6fa6a07e948304fcc65326ef6e/includes/binary_sensors.yaml#L131)
  - [group.persons](https://github.com/basnijholt/home-assistant-config/blob/2a719a3aacdb94f8de015aa4a9ec9efbcb9510b5/includes/groups.yaml#L11)

### [Reset cleaned today](https://github.com/basnijholt/home-assistant-config/blob/734719c63de4b8f99a849719702e042913ec7832/automations/vacuum.yaml#L89)

  *which uses:*
  - [input_boolean.cleaned_today](https://github.com/basnijholt/home-assistant-config/blob/6ed0cd6c2c3675e9c4a3d9d8771348c148545a3d/includes/input_booleans.yaml#L16)

### [Reset to standard mode](https://github.com/basnijholt/home-assistant-config/blob/734719c63de4b8f99a849719702e042913ec7832/automations/vacuum.yaml#L98)


[^ toc](#automations---table-of-content)


## [Work 💼](https://github.com/basnijholt/home-assistant-config/blob/33f7f51622d8542228e98201ec6cd6e04eeebd03/automations/work.yaml)
### [Go home notification](https://github.com/basnijholt/home-assistant-config/blob/33f7f51622d8542228e98201ec6cd6e04eeebd03/automations/work.yaml#L11)

  *which uses:*
  - [input_boolean.work_hour_notification_sent](https://github.com/basnijholt/home-assistant-config/blob/6ed0cd6c2c3675e9c4a3d9d8771348c148545a3d/includes/input_booleans.yaml#L40)
  - [binary_sensor.worked_enough_today](https://github.com/basnijholt/home-assistant-config/blob/afdcbd11dc789c6fa6a07e948304fcc65326ef6e/includes/binary_sensors.yaml#L108)

### [Reset input_boolean at midnight](https://github.com/basnijholt/home-assistant-config/blob/33f7f51622d8542228e98201ec6cd6e04eeebd03/automations/work.yaml#L32)

  *which uses:*
  - [input_boolean.work_hour_notification_sent](https://github.com/basnijholt/home-assistant-config/blob/6ed0cd6c2c3675e9c4a3d9d8771348c148545a3d/includes/input_booleans.yaml#L40)

### [Bas left work notification for Marcella](https://github.com/basnijholt/home-assistant-config/blob/33f7f51622d8542228e98201ec6cd6e04eeebd03/automations/work.yaml#L44)


[^ toc](#automations---table-of-content)


<!-- end-automations -->
