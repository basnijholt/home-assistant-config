
# Bas Nijholt's Home Assistant config files

![Yaml Lint](https://github.com/basnijholt/home-assistant-config/workflows/Yaml%20Lint/badge.svg)

![Lovelace UI](http://files.nijho.lt/ha-ui.gif)

Using my [iOS Light and Dark Mode Themes](https://github.com/basnijholt/lovelace-ios-themes).

## My cool AppDaemon apps
* [Sunrise emulator app](appdaemon/apps/wake_up_light.py) 🌅
* [Wake up with Spotify app](appdaemon/apps/wake_up_with_spotify.py) that slowly ramps the volume 📢
* [Low Battery level notifications 🔋](appdaemon/apps/battery_monitor.py) 

## Noteworthy (useful) automations
See *all* my automations and its dependencies [below](#automations---table-of-content)!

* [Alarm clock](automations/alarm_clock.yaml) that uses the AppDaemon volume ramp and sunrise app ⏰
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
* [Security notifications when the front door 🚪 has been open for too long or motion is detected when no one is home](#security-)

See also [my guide for my girlfriend ❤️](guide.md).

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
            <th>Price (€)</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>TP-Link HS110</td>
            <td>3</td>
            <td>70.84</td>
        </tr>
        <tr>
            <td>Xiaomi Aqara Magic Cube</td>
            <td>1</td>
            <td>11.08</td>
        </tr>
        <tr>
            <td>Xiaomi Aqara Single Button</td>
            <td>4</td>
            <td>57.38</td>
        </tr>
        <tr>
            <td>Philips Hue Dimmer switch</td>
            <td>2</td>
            <td>33.22</td>
        </tr>
        <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
        </tr>
    </tbody>
    <thead>
        <tr>
            <th>Sensors 🌡</th>
            <th>Units (#)</th>
            <th>Price (€)</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Xiaomi Aqara Door Sensor</td>
            <td>4</td>
            <td>32.71</td>
        </tr>
        <tr>
            <td>Xiaomi Aqara Temperature Sensor</td>
            <td>5</td>
            <td>45.74</td>
        </tr>
        <tr>
            <td>Xiaomi Aqara Motion Sensor</td>
            <td>6</td>
            <td>61.13</td>
        </tr>
        <tr>
            <td>Xiaomi Aqara Vibration Sensor</td>
            <td>1</td>
            <td>11.59</td>
        </tr>
        <tr>
            <td>Xiaomi Mi Flora</td>
            <td>3</td>
            <td>46.63</td>
        </tr>
        <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
        </tr>
    </tbody>
    <thead>
        <tr>
            <th>Vacuum 🧹</th>
            <th>Units (#)</th>
            <th>Price (€)</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Xiaomi Mi Roborock S5</td>
            <td>1</td>
            <td>294.31</td>
        </tr>
        <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
        </tr>
    </tbody>
    <thead>
        <tr>
            <th>Media player 📺🔈</th>
            <th>Units (#)</th>
            <th>Price (€)</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>KEF LS50 Wireless speakers</td>
            <td>1</td>
            <td>nan</td>
        </tr>
        <tr>
            <td>KEF LSX speakers</td>
            <td>1</td>
            <td>nan</td>
        </tr>
        <tr>
            <td>LG OLED 55 C9</td>
            <td>1</td>
            <td>nan</td>
        </tr>
        <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
        </tr>
    </tbody>
    <thead>
        <tr>
            <th>Lights 💡</th>
            <th>Units (#)</th>
            <th>Price (€)</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Philips Hue E27 White and Color</td>
            <td>12</td>
            <td>266.7</td>
        </tr>
        <tr>
            <td>Philips Hue E14 White and Color</td>
            <td>2</td>
            <td>69.77</td>
        </tr>
        <tr>
            <td>Philips Hue GU10 Ambient White</td>
            <td>5</td>
            <td>(92.70)</td>
        </tr>
        <tr>
            <td>Philips Hue Go</td>
            <td>1</td>
            <td>57.05</td>
        </tr>
        <tr>
            <td>Philips Hue LED strip 2m</td>
            <td>2</td>
            <td>86.39</td>
        </tr>
        <tr>
            <td>Philips Hue LED strip 1m</td>
            <td>1</td>
            <td>13.84</td>
        </tr>
        <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
        </tr>
    </tbody>
    <thead>
        <tr>
            <th>Hubs 🌎</th>
            <th>Units (#)</th>
            <th>Price (€)</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>ConBee II</td>
            <td>1</td>
            <td>39.95</td>
        </tr>
        <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
        </tr>
    </tbody>
    <thead>
        <tr>
            <th>Server 🖥</th>
            <th>Units (#)</th>
            <th>Price (€)</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Raspberry Pi 4, 4GB RAM, with Supervised Home Assistant</td>
            <td>1</td>
            <td>70.9</td>
        </tr>
        <tr>
            <td>Raspberry Pi 4 FLIRC Case</td>
            <td>1</td>
            <td>25.85</td>
        </tr>
        <tr>
            <td>SanDisk Ultra microSDHC Memory Card 32GB</td>
            <td>1</td>
            <td>6.99</td>
        </tr>
        <tr>
            <td>Raspberry Pi 3 Model B (connected to power/gas meter and connected over MQTT to main HA instance)</td>
            <td>1</td>
            <td>40.4</td>
        </tr>
        <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
        </tr>
    </tbody>
    <thead>
        <tr>
            <th>Device tracker 🔍</th>
            <th>Units (#)</th>
            <th>Price (€)</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>iPhone X with the new iOS app</td>
            <td>2</td>
            <td>nan</td>
        </tr>
        <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
        </tr>
    </tbody>
    <thead>
        <tr>
            <th>Other</th>
            <th>Units (#)</th>
            <th>Price (€)</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>PlayStation Eye Webcam and Microphone array</td>
            <td>1</td>
            <td>14.95</td>
        </tr>
        <tr>
            <td>DSMR - Slimme Meter kabel</td>
            <td>1</td>
            <td>19.95</td>
        </tr>
        <tr>
            <td>Nodo-Shop – OpenTherm Gateway (OTGW) with NodeMCU</td>
            <td>1</td>
            <td>48.81</td>
        </tr>
        <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
        </tr>
    </tbody>
    <thead>
        <tr>
            <th>Total</th>
            <th>€1426.18</th>
            <th></th>
        </tr>
    </thead>
</table>
<!-- end-table -->

<!-- start-automations -->
# Automations - Table of Content
1. [Alarm clock ⏰](#alarm-clock-) (1 automations)
1. [Arriving 👞](#arriving-) (1 automations)
1. [Climate 🔥🥶](#climate-) (5 automations)
1. [Control switches 🎛](#control-switches-) (6 automations)
1. [Cube ∛](#cube-) (2 automations)
1. [Doorbell 🚪🔔](#doorbell-) (1 automations)
1. [Frontend 👨‍💻](#frontend-) (3 automations)
1. [KEF DSP 🔈🎛](#kef-dsp-) (12 automations)
1. [Leaving 👞](#leaving-) (3 automations)
1. [Light 💡](#light-) (18 automations)
1. [Lovelace 👨‍💻](#lovelace-) (1 automations)
1. [LSX 🔈](#lsx-) (2 automations)
1. [Media player 🔈📺](#media-player-) (5 automations)
1. [Music 🎵](#music-) (2 automations)
1. [Night mode 🌕🌑](#night-mode-) (3 automations)
1. [Plant ☘️](#plant-) (3 automations)
1. [Rhasspy 🤖](#rhasspy-) (12 automations)
1. [Security 👮‍♂️🚨](#security-) (3 automations)
1. [System 🖥](#system-) (4 automations)
1. [Utilities 🧺👚🍽](#utilities-) (4 automations)
1. [Vacation mode 🏝](#vacation-mode-) (2 automations)
1. [Vacuum 🧹](#vacuum-) (6 automations)
1. [Work 💼](#work-) (3 automations)


⚠️ Total number of automations: **102** ⚠️

## [Alarm clock ⏰](https://github.com/basnijholt/home-assistant-config/blob/e247eb5e9327631293f3c4dff711e825fcb6b107/automations/alarm_clock.yaml)
### [Wake up with Spotify and light](https://github.com/basnijholt/home-assistant-config/blob/e247eb5e9327631293f3c4dff711e825fcb6b107/automations/alarm_clock.yaml#L11)

  *which uses:*
  - [input_boolean.alarm_clock](https://github.com/basnijholt/home-assistant-config/blob/b8c88b2b0cbb45093573d24cce5c8d3b07e7683e/includes/input_booleans.yaml#L46)
  - [input_boolean.sleep_mode](https://github.com/basnijholt/home-assistant-config/blob/b8c88b2b0cbb45093573d24cce5c8d3b07e7683e/includes/input_booleans.yaml#L25)
  - [input_boolean.wake_up_light](https://github.com/basnijholt/home-assistant-config/blob/b8c88b2b0cbb45093573d24cce5c8d3b07e7683e/includes/input_booleans.yaml#L63)
  - [input_boolean.wake_up_with_spotify](https://github.com/basnijholt/home-assistant-config/blob/b8c88b2b0cbb45093573d24cce5c8d3b07e7683e/includes/input_booleans.yaml#L87)
  - [sensor.ten_minutes_before_alarm](https://github.com/basnijholt/home-assistant-config/blob/9be72f4f3b5f056b44f984e016b629a5dba9c774/includes/sensors.yaml#L249)

[^ toc](#automations---table-of-content)


## [Arriving 👞](https://github.com/basnijholt/home-assistant-config/blob/36422189e5710faf2324cd19fee36fefe6921178/automations/arriving.yaml)
### [Switch music from iPhone to speakers if no one is home](https://github.com/basnijholt/home-assistant-config/blob/36422189e5710faf2324cd19fee36fefe6921178/automations/arriving.yaml#L12)

  *which uses:*
  - [input_boolean.guest_mode](https://github.com/basnijholt/home-assistant-config/blob/b8c88b2b0cbb45093573d24cce5c8d3b07e7683e/includes/input_booleans.yaml#L22)

[^ toc](#automations---table-of-content)


## [Climate 🔥🥶](https://github.com/basnijholt/home-assistant-config/blob/3de974f8930a982f49b398294bf06a3836607d4f/automations/climate.yaml)
### [Turn on the heating 30 min before waking up](https://github.com/basnijholt/home-assistant-config/blob/3de974f8930a982f49b398294bf06a3836607d4f/automations/climate.yaml#L12)

  *which uses:*
  - [input_boolean.alarm_clock](https://github.com/basnijholt/home-assistant-config/blob/b8c88b2b0cbb45093573d24cce5c8d3b07e7683e/includes/input_booleans.yaml#L46)
  - [input_boolean.automatic_temperature](https://github.com/basnijholt/home-assistant-config/blob/b8c88b2b0cbb45093573d24cce5c8d3b07e7683e/includes/input_booleans.yaml#L40)
  - [script.set_high_temperature](https://github.com/basnijholt/home-assistant-config/blob/38cabc2537aa3e8e15dd8b9941d5b1abf74e8c9b/scripts.yaml#L282)
  - [sensor.half_hour_before_alarm](https://github.com/basnijholt/home-assistant-config/blob/9be72f4f3b5f056b44f984e016b629a5dba9c774/includes/sensors.yaml#L241)

### [Turn on the heating when going home](https://github.com/basnijholt/home-assistant-config/blob/3de974f8930a982f49b398294bf06a3836607d4f/automations/climate.yaml#L26)

  *which uses:*
  - [input_boolean.automatic_temperature](https://github.com/basnijholt/home-assistant-config/blob/b8c88b2b0cbb45093573d24cce5c8d3b07e7683e/includes/input_booleans.yaml#L40)
  - [input_number.temperature_high](https://github.com/basnijholt/home-assistant-config/blob/b8c88b2b0cbb45093573d24cce5c8d3b07e7683e/includes/input_numbers.yaml#L20)
  - [script.set_high_temperature](https://github.com/basnijholt/home-assistant-config/blob/38cabc2537aa3e8e15dd8b9941d5b1abf74e8c9b/scripts.yaml#L282)
  - [binary_sensor.no_one_home](https://github.com/basnijholt/home-assistant-config/blob/092f77267f82ef7a66b60c65b26f634bc167dadf/includes/binary_sensors.yaml#L127)

### [Turn off the heating at 22:00](https://github.com/basnijholt/home-assistant-config/blob/3de974f8930a982f49b398294bf06a3836607d4f/automations/climate.yaml#L55)

  *which uses:*
  - [input_boolean.automatic_temperature](https://github.com/basnijholt/home-assistant-config/blob/b8c88b2b0cbb45093573d24cce5c8d3b07e7683e/includes/input_booleans.yaml#L40)
  - [input_number.temperature_low](https://github.com/basnijholt/home-assistant-config/blob/b8c88b2b0cbb45093573d24cce5c8d3b07e7683e/includes/input_numbers.yaml#L12)
  - [script.set_low_temperature](https://github.com/basnijholt/home-assistant-config/blob/38cabc2537aa3e8e15dd8b9941d5b1abf74e8c9b/scripts.yaml#L273)
  - [binary_sensor.no_one_home](https://github.com/basnijholt/home-assistant-config/blob/092f77267f82ef7a66b60c65b26f634bc167dadf/includes/binary_sensors.yaml#L127)

### [Turn on heating again after notification](https://github.com/basnijholt/home-assistant-config/blob/3de974f8930a982f49b398294bf06a3836607d4f/automations/climate.yaml#L78)

  *which uses:*
  - [script.set_high_temperature](https://github.com/basnijholt/home-assistant-config/blob/38cabc2537aa3e8e15dd8b9941d5b1abf74e8c9b/scripts.yaml#L282)

### [Set outside temperature every hour](https://github.com/basnijholt/home-assistant-config/blob/3de974f8930a982f49b398294bf06a3836607d4f/automations/climate.yaml#L87)


[^ toc](#automations---table-of-content)


## [Control switches 🎛](https://github.com/basnijholt/home-assistant-config/blob/7a0d42e6be1e3723c8cfaa5e127f0b1bb7eb8961/automations/control_switches.yaml)
### [Living room Hue dimmer switch](https://github.com/basnijholt/home-assistant-config/blob/7a0d42e6be1e3723c8cfaa5e127f0b1bb7eb8961/automations/control_switches.yaml#L12)

  *which uses:*
  - [input_select.last_script_living_room](https://github.com/basnijholt/home-assistant-config/blob/2862f016799c09513e5af5f5030c243be1047f62/includes/input_selects.yaml#L18)
  - [script.increase_brightness](https://github.com/basnijholt/home-assistant-config/blob/38cabc2537aa3e8e15dd8b9941d5b1abf74e8c9b/scripts.yaml#L199)
  - [script.next_colors](https://github.com/basnijholt/home-assistant-config/blob/38cabc2537aa3e8e15dd8b9941d5b1abf74e8c9b/scripts.yaml#L251)
  - [script.white_lights_living_room](https://github.com/basnijholt/home-assistant-config/blob/38cabc2537aa3e8e15dd8b9941d5b1abf74e8c9b/scripts.yaml#L173)

### [Bedroom Hue dimmer switch](https://github.com/basnijholt/home-assistant-config/blob/7a0d42e6be1e3723c8cfaa5e127f0b1bb7eb8961/automations/control_switches.yaml#L49)

  *which uses:*
  - [input_select.last_script_bedroom](https://github.com/basnijholt/home-assistant-config/blob/2862f016799c09513e5af5f5030c243be1047f62/includes/input_selects.yaml#L24)
  - [script.increase_brightness](https://github.com/basnijholt/home-assistant-config/blob/38cabc2537aa3e8e15dd8b9941d5b1abf74e8c9b/scripts.yaml#L199)
  - [script.next_colors](https://github.com/basnijholt/home-assistant-config/blob/38cabc2537aa3e8e15dd8b9941d5b1abf74e8c9b/scripts.yaml#L251)
  - [script.white_lights_bedroom](https://github.com/basnijholt/home-assistant-config/blob/38cabc2537aa3e8e15dd8b9941d5b1abf74e8c9b/scripts.yaml#L186)

### [Living room smart switch](https://github.com/basnijholt/home-assistant-config/blob/7a0d42e6be1e3723c8cfaa5e127f0b1bb7eb8961/automations/control_switches.yaml#L86)

  *which uses:*
  - [input_select.last_script_living_room](https://github.com/basnijholt/home-assistant-config/blob/2862f016799c09513e5af5f5030c243be1047f62/includes/input_selects.yaml#L18)
  - [script.increase_brightness](https://github.com/basnijholt/home-assistant-config/blob/38cabc2537aa3e8e15dd8b9941d5b1abf74e8c9b/scripts.yaml#L199)
  - [script.next_colors](https://github.com/basnijholt/home-assistant-config/blob/38cabc2537aa3e8e15dd8b9941d5b1abf74e8c9b/scripts.yaml#L251)

### [Bedroom smart switch](https://github.com/basnijholt/home-assistant-config/blob/7a0d42e6be1e3723c8cfaa5e127f0b1bb7eb8961/automations/control_switches.yaml#L130)

  *which uses:*
  - [input_boolean.sleep_mode](https://github.com/basnijholt/home-assistant-config/blob/b8c88b2b0cbb45093573d24cce5c8d3b07e7683e/includes/input_booleans.yaml#L25)
  - [input_select.last_script_bedroom](https://github.com/basnijholt/home-assistant-config/blob/2862f016799c09513e5af5f5030c243be1047f62/includes/input_selects.yaml#L24)
  - [script.going_to_sleep](https://github.com/basnijholt/home-assistant-config/blob/38cabc2537aa3e8e15dd8b9941d5b1abf74e8c9b/scripts.yaml#L244)
  - [script.increase_brightness](https://github.com/basnijholt/home-assistant-config/blob/38cabc2537aa3e8e15dd8b9941d5b1abf74e8c9b/scripts.yaml#L199)
  - [script.next_colors](https://github.com/basnijholt/home-assistant-config/blob/38cabc2537aa3e8e15dd8b9941d5b1abf74e8c9b/scripts.yaml#L251)
  - [script.turn_off_everything](https://github.com/basnijholt/home-assistant-config/blob/38cabc2537aa3e8e15dd8b9941d5b1abf74e8c9b/scripts.yaml#L237)
  - [sensor.ten_minutes_before_alarm](https://github.com/basnijholt/home-assistant-config/blob/9be72f4f3b5f056b44f984e016b629a5dba9c774/includes/sensors.yaml#L249)

### [Bathroom smart switch](https://github.com/basnijholt/home-assistant-config/blob/7a0d42e6be1e3723c8cfaa5e127f0b1bb7eb8961/automations/control_switches.yaml#L183)

  *which uses:*
  - [input_select.bathroom_color](https://github.com/basnijholt/home-assistant-config/blob/2862f016799c09513e5af5f5030c243be1047f62/includes/input_selects.yaml#L30)
  - [script.increase_brightness](https://github.com/basnijholt/home-assistant-config/blob/38cabc2537aa3e8e15dd8b9941d5b1abf74e8c9b/scripts.yaml#L199)

### [Downstairs smart switch](https://github.com/basnijholt/home-assistant-config/blob/7a0d42e6be1e3723c8cfaa5e127f0b1bb7eb8961/automations/control_switches.yaml#L221)

  *which uses:*
  - [script.arriving](https://github.com/basnijholt/home-assistant-config/blob/38cabc2537aa3e8e15dd8b9941d5b1abf74e8c9b/scripts.yaml#L297)
  - [script.set_low_temperature](https://github.com/basnijholt/home-assistant-config/blob/38cabc2537aa3e8e15dd8b9941d5b1abf74e8c9b/scripts.yaml#L273)
  - [script.start_spotify](https://github.com/basnijholt/home-assistant-config/blob/38cabc2537aa3e8e15dd8b9941d5b1abf74e8c9b/scripts.yaml#L30)
  - [script.turn_off_everything_non_automatic](https://github.com/basnijholt/home-assistant-config/blob/38cabc2537aa3e8e15dd8b9941d5b1abf74e8c9b/scripts.yaml#L221)
  - [sensor.favorite_playlist_of_nearest_person](https://github.com/basnijholt/home-assistant-config/blob/9be72f4f3b5f056b44f984e016b629a5dba9c774/includes/sensors.yaml#L93)

[^ toc](#automations---table-of-content)


## [Cube ∛](https://github.com/basnijholt/home-assistant-config/blob/9be72f4f3b5f056b44f984e016b629a5dba9c774/automations/cube.yaml)
### [Perform operation](https://github.com/basnijholt/home-assistant-config/blob/9be72f4f3b5f056b44f984e016b629a5dba9c774/automations/cube.yaml#L12)

  *which uses:*
  - [input_boolean.start_the_music](https://github.com/basnijholt/home-assistant-config/blob/b8c88b2b0cbb45093573d24cce5c8d3b07e7683e/includes/input_booleans.yaml#L12)
  - [input_select.cube_mode](https://github.com/basnijholt/home-assistant-config/blob/2862f016799c09513e5af5f5030c243be1047f62/includes/input_selects.yaml#L11)

### [Rotate the cube](https://github.com/basnijholt/home-assistant-config/blob/9be72f4f3b5f056b44f984e016b629a5dba9c774/automations/cube.yaml#L76)

  *which uses:*
  - [input_select.cube_mode](https://github.com/basnijholt/home-assistant-config/blob/2862f016799c09513e5af5f5030c243be1047f62/includes/input_selects.yaml#L11)

[^ toc](#automations---table-of-content)


## [Doorbell 🚪🔔](https://github.com/basnijholt/home-assistant-config/blob/9be72f4f3b5f056b44f984e016b629a5dba9c774/automations/doorbell.yaml)
### [Click the button](https://github.com/basnijholt/home-assistant-config/blob/9be72f4f3b5f056b44f984e016b629a5dba9c774/automations/doorbell.yaml#L11)


[^ toc](#automations---table-of-content)


## [Frontend 👨‍💻](https://github.com/basnijholt/home-assistant-config/blob/ff33da69af7479b1bab67d353d517a24a656bbbb/automations/frontend.yaml)
### [Turn on dark mode](https://github.com/basnijholt/home-assistant-config/blob/ff33da69af7479b1bab67d353d517a24a656bbbb/automations/frontend.yaml#L11)

  *which uses:*
  - [input_boolean.dark_mode](https://github.com/basnijholt/home-assistant-config/blob/b8c88b2b0cbb45093573d24cce5c8d3b07e7683e/includes/input_booleans.yaml#L32)

### [Turn on light mode](https://github.com/basnijholt/home-assistant-config/blob/ff33da69af7479b1bab67d353d517a24a656bbbb/automations/frontend.yaml#L19)

  *which uses:*
  - [input_boolean.dark_mode](https://github.com/basnijholt/home-assistant-config/blob/b8c88b2b0cbb45093573d24cce5c8d3b07e7683e/includes/input_booleans.yaml#L32)

### [Change theme](https://github.com/basnijholt/home-assistant-config/blob/ff33da69af7479b1bab67d353d517a24a656bbbb/automations/frontend.yaml#L27)

  *which uses:*
  - [input_boolean.dark_mode](https://github.com/basnijholt/home-assistant-config/blob/b8c88b2b0cbb45093573d24cce5c8d3b07e7683e/includes/input_booleans.yaml#L32)
  - [input_boolean.theme_alternative](https://github.com/basnijholt/home-assistant-config/blob/b8c88b2b0cbb45093573d24cce5c8d3b07e7683e/includes/input_booleans.yaml#L35)
  - [input_select.theme](https://github.com/basnijholt/home-assistant-config/blob/2862f016799c09513e5af5f5030c243be1047f62/includes/input_selects.yaml#L39)

[^ toc](#automations---table-of-content)


## [KEF DSP 🔈🎛](https://github.com/basnijholt/home-assistant-config/blob/1a20311ecf589545386521b9040d7b0de0045672/automations/kef_dsp.yaml)
### [Sync desk_db](https://github.com/basnijholt/home-assistant-config/blob/1a20311ecf589545386521b9040d7b0de0045672/automations/kef_dsp.yaml#L19)

  *which uses:*
  - [input_number.kef_ls50_desk_db](https://github.com/basnijholt/home-assistant-config/blob/b8c88b2b0cbb45093573d24cce5c8d3b07e7683e/includes/input_numbers.yaml#L28)
  - [script.sync_kef_dsp](https://github.com/basnijholt/home-assistant-config/blob/38cabc2537aa3e8e15dd8b9941d5b1abf74e8c9b/scripts.yaml#L312)

### [Sync wall_db](https://github.com/basnijholt/home-assistant-config/blob/1a20311ecf589545386521b9040d7b0de0045672/automations/kef_dsp.yaml#L35)

  *which uses:*
  - [input_number.kef_ls50_wall_db](https://github.com/basnijholt/home-assistant-config/blob/b8c88b2b0cbb45093573d24cce5c8d3b07e7683e/includes/input_numbers.yaml#L35)
  - [script.sync_kef_dsp](https://github.com/basnijholt/home-assistant-config/blob/38cabc2537aa3e8e15dd8b9941d5b1abf74e8c9b/scripts.yaml#L312)

### [Sync treble_db](https://github.com/basnijholt/home-assistant-config/blob/1a20311ecf589545386521b9040d7b0de0045672/automations/kef_dsp.yaml#L51)

  *which uses:*
  - [input_number.kef_ls50_treble_db](https://github.com/basnijholt/home-assistant-config/blob/b8c88b2b0cbb45093573d24cce5c8d3b07e7683e/includes/input_numbers.yaml#L42)
  - [script.sync_kef_dsp](https://github.com/basnijholt/home-assistant-config/blob/38cabc2537aa3e8e15dd8b9941d5b1abf74e8c9b/scripts.yaml#L312)

### [Sync high_hz](https://github.com/basnijholt/home-assistant-config/blob/1a20311ecf589545386521b9040d7b0de0045672/automations/kef_dsp.yaml#L67)

  *which uses:*
  - [input_number.kef_ls50_high_hz](https://github.com/basnijholt/home-assistant-config/blob/b8c88b2b0cbb45093573d24cce5c8d3b07e7683e/includes/input_numbers.yaml#L49)
  - [script.sync_kef_dsp](https://github.com/basnijholt/home-assistant-config/blob/38cabc2537aa3e8e15dd8b9941d5b1abf74e8c9b/scripts.yaml#L312)

### [Sync low_hz](https://github.com/basnijholt/home-assistant-config/blob/1a20311ecf589545386521b9040d7b0de0045672/automations/kef_dsp.yaml#L83)

  *which uses:*
  - [input_number.kef_ls50_low_hz](https://github.com/basnijholt/home-assistant-config/blob/b8c88b2b0cbb45093573d24cce5c8d3b07e7683e/includes/input_numbers.yaml#L56)
  - [script.sync_kef_dsp](https://github.com/basnijholt/home-assistant-config/blob/38cabc2537aa3e8e15dd8b9941d5b1abf74e8c9b/scripts.yaml#L312)

### [Sync sub_db](https://github.com/basnijholt/home-assistant-config/blob/1a20311ecf589545386521b9040d7b0de0045672/automations/kef_dsp.yaml#L99)

  *which uses:*
  - [input_number.kef_ls50_sub_db](https://github.com/basnijholt/home-assistant-config/blob/b8c88b2b0cbb45093573d24cce5c8d3b07e7683e/includes/input_numbers.yaml#L63)
  - [script.sync_kef_dsp](https://github.com/basnijholt/home-assistant-config/blob/38cabc2537aa3e8e15dd8b9941d5b1abf74e8c9b/scripts.yaml#L312)

### [Sync sub_polarity](https://github.com/basnijholt/home-assistant-config/blob/1a20311ecf589545386521b9040d7b0de0045672/automations/kef_dsp.yaml#L122)

  *which uses:*
  - [input_select.kef_ls50_sub_polarity](https://github.com/basnijholt/home-assistant-config/blob/2862f016799c09513e5af5f5030c243be1047f62/includes/input_selects.yaml#L83)
  - [script.sync_kef_dsp](https://github.com/basnijholt/home-assistant-config/blob/38cabc2537aa3e8e15dd8b9941d5b1abf74e8c9b/scripts.yaml#L312)

### [Sync bass_extension](https://github.com/basnijholt/home-assistant-config/blob/1a20311ecf589545386521b9040d7b0de0045672/automations/kef_dsp.yaml#L137)

  *which uses:*
  - [input_select.kef_ls50_bass_extension](https://github.com/basnijholt/home-assistant-config/blob/2862f016799c09513e5af5f5030c243be1047f62/includes/input_selects.yaml#L90)
  - [script.sync_kef_dsp](https://github.com/basnijholt/home-assistant-config/blob/38cabc2537aa3e8e15dd8b9941d5b1abf74e8c9b/scripts.yaml#L312)

### [Sync desk_mode](https://github.com/basnijholt/home-assistant-config/blob/1a20311ecf589545386521b9040d7b0de0045672/automations/kef_dsp.yaml#L159)

  *which uses:*
  - [input_boolean.kef_ls50_desk_mode](https://github.com/basnijholt/home-assistant-config/blob/b8c88b2b0cbb45093573d24cce5c8d3b07e7683e/includes/input_booleans.yaml#L49)
  - [script.sync_kef_dsp](https://github.com/basnijholt/home-assistant-config/blob/38cabc2537aa3e8e15dd8b9941d5b1abf74e8c9b/scripts.yaml#L312)

### [Sync wall_mode](https://github.com/basnijholt/home-assistant-config/blob/1a20311ecf589545386521b9040d7b0de0045672/automations/kef_dsp.yaml#L174)

  *which uses:*
  - [input_boolean.kef_ls50_wall_mode](https://github.com/basnijholt/home-assistant-config/blob/b8c88b2b0cbb45093573d24cce5c8d3b07e7683e/includes/input_booleans.yaml#L52)
  - [script.sync_kef_dsp](https://github.com/basnijholt/home-assistant-config/blob/38cabc2537aa3e8e15dd8b9941d5b1abf74e8c9b/scripts.yaml#L312)

### [Sync phase_correction](https://github.com/basnijholt/home-assistant-config/blob/1a20311ecf589545386521b9040d7b0de0045672/automations/kef_dsp.yaml#L189)

  *which uses:*
  - [input_boolean.kef_ls50_phase_correction](https://github.com/basnijholt/home-assistant-config/blob/b8c88b2b0cbb45093573d24cce5c8d3b07e7683e/includes/input_booleans.yaml#L55)
  - [script.sync_kef_dsp](https://github.com/basnijholt/home-assistant-config/blob/38cabc2537aa3e8e15dd8b9941d5b1abf74e8c9b/scripts.yaml#L312)

### [Sync high_pass](https://github.com/basnijholt/home-assistant-config/blob/1a20311ecf589545386521b9040d7b0de0045672/automations/kef_dsp.yaml#L204)

  *which uses:*
  - [input_boolean.kef_ls50_high_pass](https://github.com/basnijholt/home-assistant-config/blob/b8c88b2b0cbb45093573d24cce5c8d3b07e7683e/includes/input_booleans.yaml#L58)
  - [script.sync_kef_dsp](https://github.com/basnijholt/home-assistant-config/blob/38cabc2537aa3e8e15dd8b9941d5b1abf74e8c9b/scripts.yaml#L312)

[^ toc](#automations---table-of-content)


## [Leaving 👞](https://github.com/basnijholt/home-assistant-config/blob/984fe7088df103f783f937837889ab654c3f6d63/automations/leaving.yaml)
### [Automatically turn off everything](https://github.com/basnijholt/home-assistant-config/blob/984fe7088df103f783f937837889ab654c3f6d63/automations/leaving.yaml#L12)

  *which uses:*
  - [input_boolean.guest_mode](https://github.com/basnijholt/home-assistant-config/blob/b8c88b2b0cbb45093573d24cce5c8d3b07e7683e/includes/input_booleans.yaml#L22)
  - [script.leaving](https://github.com/basnijholt/home-assistant-config/blob/38cabc2537aa3e8e15dd8b9941d5b1abf74e8c9b/scripts.yaml#L291)
  - [binary_sensor.anything_on](https://github.com/basnijholt/home-assistant-config/blob/092f77267f82ef7a66b60c65b26f634bc167dadf/includes/binary_sensors.yaml#L112)
  - [binary_sensor.no_one_home](https://github.com/basnijholt/home-assistant-config/blob/092f77267f82ef7a66b60c65b26f634bc167dadf/includes/binary_sensors.yaml#L127)
  - [binary_sensor.someone_in_the_house_in_last_hour](https://github.com/basnijholt/home-assistant-config/blob/092f77267f82ef7a66b60c65b26f634bc167dadf/includes/binary_sensors.yaml#L34)

### [Ask to turn off everything](https://github.com/basnijholt/home-assistant-config/blob/984fe7088df103f783f937837889ab654c3f6d63/automations/leaving.yaml#L39)

  *which uses:*
  - [input_boolean.guest_mode](https://github.com/basnijholt/home-assistant-config/blob/b8c88b2b0cbb45093573d24cce5c8d3b07e7683e/includes/input_booleans.yaml#L22)
  - [binary_sensor.anything_on](https://github.com/basnijholt/home-assistant-config/blob/092f77267f82ef7a66b60c65b26f634bc167dadf/includes/binary_sensors.yaml#L112)
  - [binary_sensor.no_one_home](https://github.com/basnijholt/home-assistant-config/blob/092f77267f82ef7a66b60c65b26f634bc167dadf/includes/binary_sensors.yaml#L127)

### [Turn off everything after notification](https://github.com/basnijholt/home-assistant-config/blob/984fe7088df103f783f937837889ab654c3f6d63/automations/leaving.yaml#L69)

  *which uses:*
  - [script.leaving](https://github.com/basnijholt/home-assistant-config/blob/38cabc2537aa3e8e15dd8b9941d5b1abf74e8c9b/scripts.yaml#L291)

[^ toc](#automations---table-of-content)


## [Light 💡](https://github.com/basnijholt/home-assistant-config/blob/ac2b0930a9404075fcf6e2f3bda75a3e451319e0/automations/light.yaml)
### [Toggle kitchen ceiling](https://github.com/basnijholt/home-assistant-config/blob/ac2b0930a9404075fcf6e2f3bda75a3e451319e0/automations/light.yaml#L34)

  *which uses:*
  - [binary_sensor.activity_in_kitchen](https://github.com/basnijholt/home-assistant-config/blob/092f77267f82ef7a66b60c65b26f634bc167dadf/includes/binary_sensors.yaml#L53)

### [Turn on kitchen counter if sleep mode is off](https://github.com/basnijholt/home-assistant-config/blob/ac2b0930a9404075fcf6e2f3bda75a3e451319e0/automations/light.yaml#L44)

  *which uses:*
  - [input_boolean.sleep_mode](https://github.com/basnijholt/home-assistant-config/blob/b8c88b2b0cbb45093573d24cce5c8d3b07e7683e/includes/input_booleans.yaml#L25)
  - [binary_sensor.activity_in_kitchen](https://github.com/basnijholt/home-assistant-config/blob/092f77267f82ef7a66b60c65b26f634bc167dadf/includes/binary_sensors.yaml#L53)

### [Turn off kitchen counter](https://github.com/basnijholt/home-assistant-config/blob/ac2b0930a9404075fcf6e2f3bda75a3e451319e0/automations/light.yaml#L57)

  *which uses:*
  - [binary_sensor.activity_in_kitchen](https://github.com/basnijholt/home-assistant-config/blob/092f77267f82ef7a66b60c65b26f634bc167dadf/includes/binary_sensors.yaml#L53)

### [Turn on bathroom](https://github.com/basnijholt/home-assistant-config/blob/ac2b0930a9404075fcf6e2f3bda75a3e451319e0/automations/light.yaml#L73)

  *which uses:*
  - [binary_sensor.activity_in_bathroom](https://github.com/basnijholt/home-assistant-config/blob/092f77267f82ef7a66b60c65b26f634bc167dadf/includes/binary_sensors.yaml#L40)

### [Turn bathroom to sleep mode](https://github.com/basnijholt/home-assistant-config/blob/ac2b0930a9404075fcf6e2f3bda75a3e451319e0/automations/light.yaml#L89)

  *which uses:*
  - [input_boolean.sleep_mode](https://github.com/basnijholt/home-assistant-config/blob/b8c88b2b0cbb45093573d24cce5c8d3b07e7683e/includes/input_booleans.yaml#L25)

### [Turn off bathroom](https://github.com/basnijholt/home-assistant-config/blob/ac2b0930a9404075fcf6e2f3bda75a3e451319e0/automations/light.yaml#L108)

  *which uses:*
  - [binary_sensor.activity_in_bathroom](https://github.com/basnijholt/home-assistant-config/blob/092f77267f82ef7a66b60c65b26f634bc167dadf/includes/binary_sensors.yaml#L40)

### [Toggle toilet](https://github.com/basnijholt/home-assistant-config/blob/ac2b0930a9404075fcf6e2f3bda75a3e451319e0/automations/light.yaml#L125)

  *which uses:*
  - [binary_sensor.activity_in_toilet](https://github.com/basnijholt/home-assistant-config/blob/092f77267f82ef7a66b60c65b26f634bc167dadf/includes/binary_sensors.yaml#L47)

### [Turn on hall](https://github.com/basnijholt/home-assistant-config/blob/ac2b0930a9404075fcf6e2f3bda75a3e451319e0/automations/light.yaml#L141)

  *which uses:*
  - [binary_sensor.activity_in_hall](https://github.com/basnijholt/home-assistant-config/blob/092f77267f82ef7a66b60c65b26f634bc167dadf/includes/binary_sensors.yaml#L59)

### [Turn off hall](https://github.com/basnijholt/home-assistant-config/blob/ac2b0930a9404075fcf6e2f3bda75a3e451319e0/automations/light.yaml#L159)

  *which uses:*
  - [binary_sensor.activity_in_hall](https://github.com/basnijholt/home-assistant-config/blob/092f77267f82ef7a66b60c65b26f634bc167dadf/includes/binary_sensors.yaml#L59)

### [Automatically turn on the bedroom](https://github.com/basnijholt/home-assistant-config/blob/ac2b0930a9404075fcf6e2f3bda75a3e451319e0/automations/light.yaml#L179)

  *which uses:*
  - [input_boolean.automatic_bedroom_lights](https://github.com/basnijholt/home-assistant-config/blob/b8c88b2b0cbb45093573d24cce5c8d3b07e7683e/includes/input_booleans.yaml#L37)
  - [input_boolean.bedroom_lights_automatically_turned_on](https://github.com/basnijholt/home-assistant-config/blob/b8c88b2b0cbb45093573d24cce5c8d3b07e7683e/includes/input_booleans.yaml#L28)
  - [input_boolean.sleep_mode](https://github.com/basnijholt/home-assistant-config/blob/b8c88b2b0cbb45093573d24cce5c8d3b07e7683e/includes/input_booleans.yaml#L25)
  - [binary_sensor.activity_in_bedroom](https://github.com/basnijholt/home-assistant-config/blob/092f77267f82ef7a66b60c65b26f634bc167dadf/includes/binary_sensors.yaml#L66)

### [Automatically turn off the bedroom](https://github.com/basnijholt/home-assistant-config/blob/ac2b0930a9404075fcf6e2f3bda75a3e451319e0/automations/light.yaml#L205)

  *which uses:*
  - [input_boolean.automatic_bedroom_lights](https://github.com/basnijholt/home-assistant-config/blob/b8c88b2b0cbb45093573d24cce5c8d3b07e7683e/includes/input_booleans.yaml#L37)
  - [input_boolean.bedroom_lights_automatically_turned_on](https://github.com/basnijholt/home-assistant-config/blob/b8c88b2b0cbb45093573d24cce5c8d3b07e7683e/includes/input_booleans.yaml#L28)
  - [binary_sensor.activity_in_bedroom](https://github.com/basnijholt/home-assistant-config/blob/092f77267f82ef7a66b60c65b26f634bc167dadf/includes/binary_sensors.yaml#L66)

### [Turn off bedroom lights auto switch](https://github.com/basnijholt/home-assistant-config/blob/ac2b0930a9404075fcf6e2f3bda75a3e451319e0/automations/light.yaml#L228)

  *which uses:*
  - [input_boolean.bedroom_lights_automatically_turned_on](https://github.com/basnijholt/home-assistant-config/blob/b8c88b2b0cbb45093573d24cce5c8d3b07e7683e/includes/input_booleans.yaml#L28)

### [Turn on automatic_bedroom_lights switch](https://github.com/basnijholt/home-assistant-config/blob/ac2b0930a9404075fcf6e2f3bda75a3e451319e0/automations/light.yaml#L253)

  *which uses:*
  - [input_boolean.automatic_bedroom_lights](https://github.com/basnijholt/home-assistant-config/blob/b8c88b2b0cbb45093573d24cce5c8d3b07e7683e/includes/input_booleans.yaml#L37)

### [Turn off toilet (extra check)](https://github.com/basnijholt/home-assistant-config/blob/ac2b0930a9404075fcf6e2f3bda75a3e451319e0/automations/light.yaml#L267)

  In case the other automation failed

  *which uses:*
  - [binary_sensor.activity_in_toilet](https://github.com/basnijholt/home-assistant-config/blob/092f77267f82ef7a66b60c65b26f634bc167dadf/includes/binary_sensors.yaml#L47)

### [Turn off bathroom (extra check)](https://github.com/basnijholt/home-assistant-config/blob/ac2b0930a9404075fcf6e2f3bda75a3e451319e0/automations/light.yaml#L283)

  In case the other automation failed

  *which uses:*
  - [binary_sensor.activity_in_bathroom](https://github.com/basnijholt/home-assistant-config/blob/092f77267f82ef7a66b60c65b26f634bc167dadf/includes/binary_sensors.yaml#L40)

### [Turn off kitchen (extra check)](https://github.com/basnijholt/home-assistant-config/blob/ac2b0930a9404075fcf6e2f3bda75a3e451319e0/automations/light.yaml#L299)

  In case the other automation failed

  *which uses:*
  - [binary_sensor.activity_in_kitchen](https://github.com/basnijholt/home-assistant-config/blob/092f77267f82ef7a66b60c65b26f634bc167dadf/includes/binary_sensors.yaml#L53)

### [Turn off hall (extra check)](https://github.com/basnijholt/home-assistant-config/blob/ac2b0930a9404075fcf6e2f3bda75a3e451319e0/automations/light.yaml#L315)

  In case the other automation failed

  *which uses:*
  - [binary_sensor.activity_in_hall](https://github.com/basnijholt/home-assistant-config/blob/092f77267f82ef7a66b60c65b26f634bc167dadf/includes/binary_sensors.yaml#L59)

### [Turn off bedroom (extra check)](https://github.com/basnijholt/home-assistant-config/blob/ac2b0930a9404075fcf6e2f3bda75a3e451319e0/automations/light.yaml#L338)

  In case the other automation failed

  *which uses:*
  - [input_boolean.automatic_bedroom_lights](https://github.com/basnijholt/home-assistant-config/blob/b8c88b2b0cbb45093573d24cce5c8d3b07e7683e/includes/input_booleans.yaml#L37)
  - [input_boolean.bedroom_lights_automatically_turned_on](https://github.com/basnijholt/home-assistant-config/blob/b8c88b2b0cbb45093573d24cce5c8d3b07e7683e/includes/input_booleans.yaml#L28)
  - [binary_sensor.activity_in_bedroom](https://github.com/basnijholt/home-assistant-config/blob/092f77267f82ef7a66b60c65b26f634bc167dadf/includes/binary_sensors.yaml#L66)

[^ toc](#automations---table-of-content)


## [Lovelace 👨‍💻](https://github.com/basnijholt/home-assistant-config/blob/3d2e9bf4eb93f78662fe4f247ad3c73d41ce68fb/automations/lovelace.yaml)
### [Convert lovelace.json to lovelace-ui.yaml](https://github.com/basnijholt/home-assistant-config/blob/3d2e9bf4eb93f78662fe4f247ad3c73d41ce68fb/automations/lovelace.yaml#L11)

  *which uses:*
  - [shell_command.convert_lovelace](https://github.com/basnijholt/home-assistant-config/blob/64a874ed6bb84af4b65537819b03c6cae14f93f1/includes/shell_commands.yaml#L11)

[^ toc](#automations---table-of-content)


## [LSX 🔈](https://github.com/basnijholt/home-assistant-config/blob/9be72f4f3b5f056b44f984e016b629a5dba9c774/automations/lsx-control.yaml)
### [Sync volume](https://github.com/basnijholt/home-assistant-config/blob/9be72f4f3b5f056b44f984e016b629a5dba9c774/automations/lsx-control.yaml#L12)

  *which uses:*
  - [input_select.lsx_volume](https://github.com/basnijholt/home-assistant-config/blob/2862f016799c09513e5af5f5030c243be1047f62/includes/input_selects.yaml#L51)

### [Sync source](https://github.com/basnijholt/home-assistant-config/blob/9be72f4f3b5f056b44f984e016b629a5dba9c774/automations/lsx-control.yaml#L44)

  *which uses:*
  - [input_select.lsx_source](https://github.com/basnijholt/home-assistant-config/blob/2862f016799c09513e5af5f5030c243be1047f62/includes/input_selects.yaml#L75)

[^ toc](#automations---table-of-content)


## [Media player 🔈📺](https://github.com/basnijholt/home-assistant-config/blob/56ef77032f4da7d889911310c8ee0adf2f4557df/automations/media_player.yaml)
### [Turn on Opt when TV is on and Spotify is not playing and not Usb](https://github.com/basnijholt/home-assistant-config/blob/56ef77032f4da7d889911310c8ee0adf2f4557df/automations/media_player.yaml#L12)

  The speaker is connected via an optical cable to the TV. Whenever the speakers
aren't playing Spotify (via WiFi) directly, switch the source of the speakers
to "Opt".



### [Turn off speakers when turning off TV](https://github.com/basnijholt/home-assistant-config/blob/56ef77032f4da7d889911310c8ee0adf2f4557df/automations/media_player.yaml#L47)


### [If speakers off and TV on, turn on the speaker on TV state change](https://github.com/basnijholt/home-assistant-config/blob/56ef77032f4da7d889911310c8ee0adf2f4557df/automations/media_player.yaml#L65)


### [Update Spotify entity when TV is on every 5 seconds](https://github.com/basnijholt/home-assistant-config/blob/56ef77032f4da7d889911310c8ee0adf2f4557df/automations/media_player.yaml#L84)


### [Sync KEF LS50 and TV volume](https://github.com/basnijholt/home-assistant-config/blob/56ef77032f4da7d889911310c8ee0adf2f4557df/automations/media_player.yaml#L99)


[^ toc](#automations---table-of-content)


## [Music 🎵](https://github.com/basnijholt/home-assistant-config/blob/74f965e3aab85bf0737893ad826850fc5c8a0033/automations/music.yaml)
### [Start playlist](https://github.com/basnijholt/home-assistant-config/blob/74f965e3aab85bf0737893ad826850fc5c8a0033/automations/music.yaml#L11)

  *which uses:*
  - [input_boolean.start_the_music](https://github.com/basnijholt/home-assistant-config/blob/b8c88b2b0cbb45093573d24cce5c8d3b07e7683e/includes/input_booleans.yaml#L12)
  - [script.start_spotify_playlist_of_nearest_person](https://github.com/basnijholt/home-assistant-config/blob/38cabc2537aa3e8e15dd8b9941d5b1abf74e8c9b/scripts.yaml#L62)

### [Switch music from iPhone to speakers if coming home](https://github.com/basnijholt/home-assistant-config/blob/74f965e3aab85bf0737893ad826850fc5c8a0033/automations/music.yaml#L25)

  *which uses:*
  - [input_boolean.guest_mode](https://github.com/basnijholt/home-assistant-config/blob/b8c88b2b0cbb45093573d24cce5c8d3b07e7683e/includes/input_booleans.yaml#L22)

[^ toc](#automations---table-of-content)


## [Night mode 🌕🌑](https://github.com/basnijholt/home-assistant-config/blob/1e64e0e1752fcdc5d71354f993e1d7156c1981dc/automations/night_mode.yaml)
### [Automatically turn off when alarm turns off or at 6AM](https://github.com/basnijholt/home-assistant-config/blob/1e64e0e1752fcdc5d71354f993e1d7156c1981dc/automations/night_mode.yaml#L12)

  *which uses:*
  - [input_boolean.alarm_clock](https://github.com/basnijholt/home-assistant-config/blob/b8c88b2b0cbb45093573d24cce5c8d3b07e7683e/includes/input_booleans.yaml#L46)
  - [input_boolean.sleep_mode](https://github.com/basnijholt/home-assistant-config/blob/b8c88b2b0cbb45093573d24cce5c8d3b07e7683e/includes/input_booleans.yaml#L25)

### [Turn off automatic bedroom lights](https://github.com/basnijholt/home-assistant-config/blob/1e64e0e1752fcdc5d71354f993e1d7156c1981dc/automations/night_mode.yaml#L28)

  *which uses:*
  - [input_boolean.automatic_bedroom_lights](https://github.com/basnijholt/home-assistant-config/blob/b8c88b2b0cbb45093573d24cce5c8d3b07e7683e/includes/input_booleans.yaml#L37)
  - [input_boolean.sleep_mode](https://github.com/basnijholt/home-assistant-config/blob/b8c88b2b0cbb45093573d24cce5c8d3b07e7683e/includes/input_booleans.yaml#L25)

### [Set low temperature when sleep mode turns on](https://github.com/basnijholt/home-assistant-config/blob/1e64e0e1752fcdc5d71354f993e1d7156c1981dc/automations/night_mode.yaml#L38)

  *which uses:*
  - [input_boolean.sleep_mode](https://github.com/basnijholt/home-assistant-config/blob/b8c88b2b0cbb45093573d24cce5c8d3b07e7683e/includes/input_booleans.yaml#L25)
  - [script.set_low_temperature](https://github.com/basnijholt/home-assistant-config/blob/38cabc2537aa3e8e15dd8b9941d5b1abf74e8c9b/scripts.yaml#L273)

[^ toc](#automations---table-of-content)


## [Plant ☘️](https://github.com/basnijholt/home-assistant-config/blob/5709ae3c7802fc787517c8aa7ab7763548cc63ad/automations/plant.yaml)
### [Problem with Ficus microcarpa Ginseng](https://github.com/basnijholt/home-assistant-config/blob/5709ae3c7802fc787517c8aa7ab7763548cc63ad/automations/plant.yaml#L11)

  *which uses:*
  - [plant.ficus_microcarpa_ginseng](https://github.com/basnijholt/home-assistant-config/blob/9be72f4f3b5f056b44f984e016b629a5dba9c774/includes/plant.yaml#L35)

### [Problem with Kentia Palm](https://github.com/basnijholt/home-assistant-config/blob/5709ae3c7802fc787517c8aa7ab7763548cc63ad/automations/plant.yaml#L29)

  *which uses:*
  - [plant.kentia_palm](https://github.com/basnijholt/home-assistant-config/blob/9be72f4f3b5f056b44f984e016b629a5dba9c774/includes/plant.yaml#L51)

### [Problem with Yucca Elephantipes](https://github.com/basnijholt/home-assistant-config/blob/5709ae3c7802fc787517c8aa7ab7763548cc63ad/automations/plant.yaml#L47)

  *which uses:*
  - [plant.yucca_elephantipes](https://github.com/basnijholt/home-assistant-config/blob/9be72f4f3b5f056b44f984e016b629a5dba9c774/includes/plant.yaml#L67)

[^ toc](#automations---table-of-content)


## [Rhasspy 🤖](https://github.com/basnijholt/home-assistant-config/blob/2b1c68839a514a0f495ab1b6b101f25be3e7012b/automations/rhasspy.yaml)
### [Light states](https://github.com/basnijholt/home-assistant-config/blob/2b1c68839a514a0f495ab1b6b101f25be3e7012b/automations/rhasspy.yaml#L15)


### [Living room light states](https://github.com/basnijholt/home-assistant-config/blob/2b1c68839a514a0f495ab1b6b101f25be3e7012b/automations/rhasspy.yaml#L24)


### [Light colors](https://github.com/basnijholt/home-assistant-config/blob/2b1c68839a514a0f495ab1b6b101f25be3e7012b/automations/rhasspy.yaml#L32)


### [Living room light colors](https://github.com/basnijholt/home-assistant-config/blob/2b1c68839a514a0f495ab1b6b101f25be3e7012b/automations/rhasspy.yaml#L42)


### [Living room light brightness](https://github.com/basnijholt/home-assistant-config/blob/2b1c68839a514a0f495ab1b6b101f25be3e7012b/automations/rhasspy.yaml#L52)


### [Media player states](https://github.com/basnijholt/home-assistant-config/blob/2b1c68839a514a0f495ab1b6b101f25be3e7012b/automations/rhasspy.yaml#L62)


### [Play/pause media player](https://github.com/basnijholt/home-assistant-config/blob/2b1c68839a514a0f495ab1b6b101f25be3e7012b/automations/rhasspy.yaml#L71)


### [Increase/decrease the volume](https://github.com/basnijholt/home-assistant-config/blob/2b1c68839a514a0f495ab1b6b101f25be3e7012b/automations/rhasspy.yaml#L80)


### [Set the volume](https://github.com/basnijholt/home-assistant-config/blob/2b1c68839a514a0f495ab1b6b101f25be3e7012b/automations/rhasspy.yaml#L91)


### [Cozy/white lights in the living room](https://github.com/basnijholt/home-assistant-config/blob/2b1c68839a514a0f495ab1b6b101f25be3e7012b/automations/rhasspy.yaml#L102)


### [Start the music](https://github.com/basnijholt/home-assistant-config/blob/2b1c68839a514a0f495ab1b6b101f25be3e7012b/automations/rhasspy.yaml#L109)

  *which uses:*
  - [input_boolean.start_the_music](https://github.com/basnijholt/home-assistant-config/blob/b8c88b2b0cbb45093573d24cce5c8d3b07e7683e/includes/input_booleans.yaml#L12)

### [Sleeping mode](https://github.com/basnijholt/home-assistant-config/blob/2b1c68839a514a0f495ab1b6b101f25be3e7012b/automations/rhasspy.yaml#L117)

  *which uses:*
  - [input_boolean.sleep_mode](https://github.com/basnijholt/home-assistant-config/blob/b8c88b2b0cbb45093573d24cce5c8d3b07e7683e/includes/input_booleans.yaml#L25)

[^ toc](#automations---table-of-content)


## [Security 👮‍♂️🚨](https://github.com/basnijholt/home-assistant-config/blob/585f51eecf4aef718381047225b29f960fd2751b/automations/security.yaml)
### [Motion detected but we are not home](https://github.com/basnijholt/home-assistant-config/blob/585f51eecf4aef718381047225b29f960fd2751b/automations/security.yaml#L11)

  *which uses:*
  - [binary_sensor.motion_detected](https://github.com/basnijholt/home-assistant-config/blob/092f77267f82ef7a66b60c65b26f634bc167dadf/includes/binary_sensors.yaml#L19)
  - [group.persons](https://github.com/basnijholt/home-assistant-config/blob/49f5b605823ba615432fe4ad3e65895f6fa73936/includes/groups.yaml#L11)

### [Sound alarm after notification](https://github.com/basnijholt/home-assistant-config/blob/585f51eecf4aef718381047225b29f960fd2751b/automations/security.yaml#L32)


### [Door has been open for more than 5 minutes](https://github.com/basnijholt/home-assistant-config/blob/585f51eecf4aef718381047225b29f960fd2751b/automations/security.yaml#L45)

  *which uses:*
  - [input_boolean.guest_mode](https://github.com/basnijholt/home-assistant-config/blob/b8c88b2b0cbb45093573d24cce5c8d3b07e7683e/includes/input_booleans.yaml#L22)

[^ toc](#automations---table-of-content)


## [System 🖥](https://github.com/basnijholt/home-assistant-config/blob/9be72f4f3b5f056b44f984e016b629a5dba9c774/automations/system.yaml)
### [Warning about high CPU usage](https://github.com/basnijholt/home-assistant-config/blob/9be72f4f3b5f056b44f984e016b629a5dba9c774/automations/system.yaml#L11)


### [Warning about high CPU temperature](https://github.com/basnijholt/home-assistant-config/blob/9be72f4f3b5f056b44f984e016b629a5dba9c774/automations/system.yaml#L24)


### [Warning about high Xbox temperature](https://github.com/basnijholt/home-assistant-config/blob/9be72f4f3b5f056b44f984e016b629a5dba9c774/automations/system.yaml#L37)


### [Update DNS](https://github.com/basnijholt/home-assistant-config/blob/9be72f4f3b5f056b44f984e016b629a5dba9c774/automations/system.yaml#L56)

  Update the DNS at Gandi

  *which uses:*
  - [script.update_dns](https://github.com/basnijholt/home-assistant-config/blob/38cabc2537aa3e8e15dd8b9941d5b1abf74e8c9b/scripts.yaml#L303)

[^ toc](#automations---table-of-content)


## [Utilities 🧺👚🍽](https://github.com/basnijholt/home-assistant-config/blob/a5b8517fb727e44beba9de5c536babf81915cbd7/automations/utilities.yaml)
### [Washing machine has started](https://github.com/basnijholt/home-assistant-config/blob/a5b8517fb727e44beba9de5c536babf81915cbd7/automations/utilities.yaml#L12)

  *which uses:*
  - [input_datetime.washing_machine_started](https://github.com/basnijholt/home-assistant-config/blob/ede0e0905544de83bf8d98348458dbdd99ae2ab5/includes/input_datetimes.yaml#L16)
  - [binary_sensor.washing_machine](https://github.com/basnijholt/home-assistant-config/blob/092f77267f82ef7a66b60c65b26f634bc167dadf/includes/binary_sensors.yaml#L74)

### [Washing machine is done](https://github.com/basnijholt/home-assistant-config/blob/a5b8517fb727e44beba9de5c536babf81915cbd7/automations/utilities.yaml#L24)

  *which uses:*
  - [input_datetime.washing_machine_done](https://github.com/basnijholt/home-assistant-config/blob/ede0e0905544de83bf8d98348458dbdd99ae2ab5/includes/input_datetimes.yaml#L21)
  - [sensor.nearest_iphone_notify](https://github.com/basnijholt/home-assistant-config/blob/9be72f4f3b5f056b44f984e016b629a5dba9c774/includes/sensors.yaml#L230)
  - [binary_sensor.washing_machine](https://github.com/basnijholt/home-assistant-config/blob/092f77267f82ef7a66b60c65b26f634bc167dadf/includes/binary_sensors.yaml#L74)

### [Dishwasher is done](https://github.com/basnijholt/home-assistant-config/blob/a5b8517fb727e44beba9de5c536babf81915cbd7/automations/utilities.yaml#L41)

  *which uses:*
  - [input_datetime.dishwasher_done](https://github.com/basnijholt/home-assistant-config/blob/ede0e0905544de83bf8d98348458dbdd99ae2ab5/includes/input_datetimes.yaml#L31)
  - [sensor.nearest_iphone_notify](https://github.com/basnijholt/home-assistant-config/blob/9be72f4f3b5f056b44f984e016b629a5dba9c774/includes/sensors.yaml#L230)
  - [binary_sensor.dishwasher](https://github.com/basnijholt/home-assistant-config/blob/092f77267f82ef7a66b60c65b26f634bc167dadf/includes/binary_sensors.yaml#L86)

### [Dishwasher has started](https://github.com/basnijholt/home-assistant-config/blob/a5b8517fb727e44beba9de5c536babf81915cbd7/automations/utilities.yaml#L58)

  *which uses:*
  - [input_datetime.dishwasher_started](https://github.com/basnijholt/home-assistant-config/blob/ede0e0905544de83bf8d98348458dbdd99ae2ab5/includes/input_datetimes.yaml#L26)
  - [binary_sensor.dishwasher](https://github.com/basnijholt/home-assistant-config/blob/092f77267f82ef7a66b60c65b26f634bc167dadf/includes/binary_sensors.yaml#L86)

[^ toc](#automations---table-of-content)


## [Vacation mode 🏝](https://github.com/basnijholt/home-assistant-config/blob/585f51eecf4aef718381047225b29f960fd2751b/automations/vacation_mode.yaml)
### [Auto turn on](https://github.com/basnijholt/home-assistant-config/blob/585f51eecf4aef718381047225b29f960fd2751b/automations/vacation_mode.yaml#L11)

  *which uses:*
  - [input_boolean.guest_mode](https://github.com/basnijholt/home-assistant-config/blob/b8c88b2b0cbb45093573d24cce5c8d3b07e7683e/includes/input_booleans.yaml#L22)
  - [input_boolean.vacation_mode](https://github.com/basnijholt/home-assistant-config/blob/b8c88b2b0cbb45093573d24cce5c8d3b07e7683e/includes/input_booleans.yaml#L19)
  - [group.persons](https://github.com/basnijholt/home-assistant-config/blob/49f5b605823ba615432fe4ad3e65895f6fa73936/includes/groups.yaml#L11)

### [Auto turn off](https://github.com/basnijholt/home-assistant-config/blob/585f51eecf4aef718381047225b29f960fd2751b/automations/vacation_mode.yaml#L31)

  *which uses:*
  - [input_boolean.guest_mode](https://github.com/basnijholt/home-assistant-config/blob/b8c88b2b0cbb45093573d24cce5c8d3b07e7683e/includes/input_booleans.yaml#L22)
  - [input_boolean.vacation_mode](https://github.com/basnijholt/home-assistant-config/blob/b8c88b2b0cbb45093573d24cce5c8d3b07e7683e/includes/input_booleans.yaml#L19)
  - [group.persons](https://github.com/basnijholt/home-assistant-config/blob/49f5b605823ba615432fe4ad3e65895f6fa73936/includes/groups.yaml#L11)

[^ toc](#automations---table-of-content)


## [Vacuum 🧹](https://github.com/basnijholt/home-assistant-config/blob/c38dd957697a5c73b03f59419618f99362645234/automations/vacuum.yaml)
### [Started cleaning](https://github.com/basnijholt/home-assistant-config/blob/c38dd957697a5c73b03f59419618f99362645234/automations/vacuum.yaml#L11)


### [Stopped cleaning](https://github.com/basnijholt/home-assistant-config/blob/c38dd957697a5c73b03f59419618f99362645234/automations/vacuum.yaml#L23)

  *which uses:*
  - [input_boolean.cleaned_today](https://github.com/basnijholt/home-assistant-config/blob/b8c88b2b0cbb45093573d24cce5c8d3b07e7683e/includes/input_booleans.yaml#L16)

### [Reminder notification](https://github.com/basnijholt/home-assistant-config/blob/c38dd957697a5c73b03f59419618f99362645234/automations/vacuum.yaml#L37)

  *which uses:*
  - [binary_sensor.vacuum_day](https://github.com/basnijholt/home-assistant-config/blob/092f77267f82ef7a66b60c65b26f634bc167dadf/includes/binary_sensors.yaml#L121)

### [Cleanup if nobody is home](https://github.com/basnijholt/home-assistant-config/blob/c38dd957697a5c73b03f59419618f99362645234/automations/vacuum.yaml#L51)

  *which uses:*
  - [input_boolean.cleaned_today](https://github.com/basnijholt/home-assistant-config/blob/b8c88b2b0cbb45093573d24cce5c8d3b07e7683e/includes/input_booleans.yaml#L16)
  - [input_boolean.guest_mode](https://github.com/basnijholt/home-assistant-config/blob/b8c88b2b0cbb45093573d24cce5c8d3b07e7683e/includes/input_booleans.yaml#L22)
  - [input_boolean.vacation_mode](https://github.com/basnijholt/home-assistant-config/blob/b8c88b2b0cbb45093573d24cce5c8d3b07e7683e/includes/input_booleans.yaml#L19)
  - [binary_sensor.vacuum_day](https://github.com/basnijholt/home-assistant-config/blob/092f77267f82ef7a66b60c65b26f634bc167dadf/includes/binary_sensors.yaml#L121)
  - [group.persons](https://github.com/basnijholt/home-assistant-config/blob/49f5b605823ba615432fe4ad3e65895f6fa73936/includes/groups.yaml#L11)

### [Reset cleaned today](https://github.com/basnijholt/home-assistant-config/blob/c38dd957697a5c73b03f59419618f99362645234/automations/vacuum.yaml#L89)

  *which uses:*
  - [input_boolean.cleaned_today](https://github.com/basnijholt/home-assistant-config/blob/b8c88b2b0cbb45093573d24cce5c8d3b07e7683e/includes/input_booleans.yaml#L16)

### [Reset to standard mode](https://github.com/basnijholt/home-assistant-config/blob/c38dd957697a5c73b03f59419618f99362645234/automations/vacuum.yaml#L98)


[^ toc](#automations---table-of-content)


## [Work 💼](https://github.com/basnijholt/home-assistant-config/blob/33f7f51622d8542228e98201ec6cd6e04eeebd03/automations/work.yaml)
### [Go home notification](https://github.com/basnijholt/home-assistant-config/blob/33f7f51622d8542228e98201ec6cd6e04eeebd03/automations/work.yaml#L11)

  *which uses:*
  - [input_boolean.work_hour_notification_sent](https://github.com/basnijholt/home-assistant-config/blob/b8c88b2b0cbb45093573d24cce5c8d3b07e7683e/includes/input_booleans.yaml#L43)
  - [binary_sensor.worked_enough_today](https://github.com/basnijholt/home-assistant-config/blob/092f77267f82ef7a66b60c65b26f634bc167dadf/includes/binary_sensors.yaml#L98)

### [Reset input_boolean at midnight](https://github.com/basnijholt/home-assistant-config/blob/33f7f51622d8542228e98201ec6cd6e04eeebd03/automations/work.yaml#L32)

  *which uses:*
  - [input_boolean.work_hour_notification_sent](https://github.com/basnijholt/home-assistant-config/blob/b8c88b2b0cbb45093573d24cce5c8d3b07e7683e/includes/input_booleans.yaml#L43)

### [Bas left work notification for Marcella](https://github.com/basnijholt/home-assistant-config/blob/33f7f51622d8542228e98201ec6cd6e04eeebd03/automations/work.yaml#L44)


[^ toc](#automations---table-of-content)


<!-- end-automations -->
