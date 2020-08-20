
# Bas Nijholt's Home Assistant config files

![Yaml Lint](https://github.com/basnijholt/home-assistant-config/workflows/Yaml%20Lint/badge.svg)

![Lovelace UI](http://files.nijho.lt/ha-ui.gif)

Using my [iOS Light and Dark Mode Themes](https://github.com/basnijholt/lovelace-ios-themes).

## My cool AppDaemon apps
* [Sunrise emulator app](appdaemon/apps/wake_up_light.py) 🌅
* [Wake up with Spotify app](appdaemon/apps/wake_up_with_spotify.py) that slowly ramps the volume 📢
* [Low Battery level notifications 🔋](appdaemon/apps/battery_monitor.py) 

## Noteworthy (useful) automations
* [Alarm clock](automations/alarm_clock.yaml) that uses the AppDaemon volume ramp and sunrise app ⏰
* [Automatic `lovelace.json` to `lovelace-ui.yaml` converter](automations/lovelace.yaml) for version control 🤖
* [Controlling music and lights (hue and brightness) using the Xiaomi Aqara Magic Cube](automations/cube.yaml) ∛
* [Controlling the lights using *Phillips Hue Dimmers* the *Xiaomi Aqara Smart Switches*](automations/control_switches.yaml) 🎛
* [Automated lights](automations/lights.yaml) 💡
* Guest mode that turns off automations
* [Vacation mode](automations/vacation_mode.yaml)
* [Presence detection in different rooms based on various binary template sensors](includes/binary_sensors.yaml)
* [Robot vacuum automations](automations/vacuum.yaml) 🧹
* [Arriving and leaving automations](automations/leaving_and_arriving.yaml)
* [Notifications when the dishwasher  or washing machine is done](automations/utilities.yaml)
* [Time at work 📈 tracking and notifications to go home](includes/sensors.yaml)
* Using [HA-Menu](https://github.com/codechimp-org/ha-menu) to control [my speakers on my iMac](automations/lsx-control.yaml)
* Using [home-assistant-macbook-touch-bar](https://github.com/basnijholt/home-assistant-macbook-touch-bar) to control HA on my MacBook Pro's Touch Bar 💻
* [Automatically switch Lovelace's theme between backgrounds and light/dark mode](automations/frontend.yaml)
* [Sync volume TV ⇄ speakers 🔊](automations/media_player.yaml)
* [Security notifications when the front door 🚪 has been open for too long or motion is detected when no one is home](automations/security.yaml)

See also [my guide for my girlfriend ❤️](guide.md).

## My devices

### Switches
* TP-Link HS110 (3x) (€70.84)
* Xiaomi Aqara Magic Cube (€11.08)
* Xiaomi Aqara Single Button (4x) (€57.38)
* Philips Hue Dimmer switch (2x) (€33.22)

### Sensors
* Xiaomi Aqara Door Sensor (4x) (€32.71)
* Xiaomi Aqara Temperature Sensor (5x) (€45.74)
* Xiaomi Aqara Motion Sensor (6x) (€61.13)
* Xiaomi Aqara Vibration Sensor (€11.59)
* Xiaomi Mi Flora (3x) (€46.63)

### Vacuum
* Xiaomi Mi Roborock S5 (€294.31)

### Media player
* KEF LS50 Wireless speakers
* KEF LSX speakers
* LG OLED 55 C9

### Lights
* Philips Hue E27 White and Color (12x) (€266.70)
* Philips Hue E14 White and Color (2x) (€69.77)
* Philips Hue GU10 Ambient White (5x) (92.70)
* Philips Hue Go (€57.05)
* Philips Hue LED strip 2m (2x) (€86.39)
* Philips Hue LED strip 1m (€13.84)

### Hubs
* ConBee II (€39.95)

### Server
* Raspberry Pi 4, 4GB RAM, running [*Hass.io*](https://www.home-assistant.io/hassio/) (€70.90)
* Raspberry Pi 4 FLIRC Case (€25.85)
* SanDisk Ultra microSDHC Memory Card 32GB (€6.99)
* Raspberry Pi 3 Model B (connected to power/gas meter and connected over MQTT to main HA instance) (€40.40)

### Device tracker
* iPhone X with the new iOS app (2x)

### Other
* PlayStation Eye Webcam and Microphone array (€14.95)
* DSMR - Slimme Meter kabel (€19.95)
* Nodo-Shop – OpenTherm Gateway (OTGW) with NodeMCU (€48.81)

### Total cost
*€1426.18* without my TV, phones, and speakers, **yes**, this is shocking to me too 😅
I bought many things on Aliexpress and with discount or used on Amazon.

## Automation plans
* Notify us when the window is open and it is raining.
* Add budget keeper using the Bunq API

<!-- start-automations -->
# Automations - Table of Content
1. [Alarm clock](#alarm-clock) (1 automations)
1. [Arriving](#arriving) (1 automations)
1. [Climate](#climate) (5 automations)
1. [Control switches](#control-switches) (6 automations)
1. [Cube](#cube) (2 automations)
1. [Doorbell](#doorbell) (1 automations)
1. [Frontend](#frontend) (3 automations)
1. [KEF DSP](#kef-dsp) (12 automations)
1. [Leaving](#leaving) (3 automations)
1. [Light](#light) (18 automations)
1. [Lovelace](#lovelace) (1 automations)
1. [LSX](#lsx) (2 automations)
1. [Media player](#media-player) (5 automations)
1. [Music](#music) (2 automations)
1. [Night mode](#night-mode) (3 automations)
1. [Plant](#plant) (3 automations)
1. [Rhasspy](#rhasspy) (12 automations)
1. [Security](#security) (3 automations)
1. [System](#system) (4 automations)
1. [Utilities](#utilities) (4 automations)
1. [Vacation mode](#vacation-mode) (2 automations)
1. [Vacuum](#vacuum) (6 automations)
1. [Work](#work) (3 automations)


## [Alarm clock](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/automations/alarm_clock.yaml)
### [Wake up with Spotify and light](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/automations/alarm_clock.yaml#L11)

  *which uses:*
  - [input_boolean.alarm_clock](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/includes/input_booleans.yaml#L46)
  - [input_boolean.sleep_mode](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/includes/input_booleans.yaml#L25)
  - [input_boolean.wake_up_light](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/includes/input_booleans.yaml#L63)
  - [input_boolean.wake_up_with_spotify](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/includes/input_booleans.yaml#L87)
  - [sensor.time](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/includes/sensors.yaml#L610)
  - [sensor.ten_minutes_before_alarm](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/includes/sensors.yaml#L249)

[^ toc](#automations---table-of-content)


## [Arriving](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/automations/arriving.yaml)
### [Switch music from iPhone to speakers if no one is home](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/automations/arriving.yaml#L12)

  *which uses:*
  - [input_boolean.guest_mode](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/includes/input_booleans.yaml#L22)

[^ toc](#automations---table-of-content)


## [Climate](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/automations/climate.yaml)
### [Turn on the heating 30 min before waking up](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/automations/climate.yaml#L12)

  *which uses:*
  - [input_boolean.automatic_temperature](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/includes/input_booleans.yaml#L40)
  - [input_boolean.alarm_clock](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/includes/input_booleans.yaml#L46)
  - [script.set_high_temperature](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/scripts.yaml#L282)
  - [sensor.time](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/includes/sensors.yaml#L610)
  - [sensor.half_hour_before_alarm](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/includes/sensors.yaml#L241)

### [Turn on the heating when going home](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/automations/climate.yaml#L26)

  *which uses:*
  - [input_boolean.automatic_temperature](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/includes/input_booleans.yaml#L40)
  - [input_number.temperature_high](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/includes/input_numbers.yaml#L20)
  - [script.set_high_temperature](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/scripts.yaml#L282)
  - [binary_sensor.no_one_home](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/includes/binary_sensors.yaml#L127)

### [Turn off the heating at 22:00](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/automations/climate.yaml#L55)

  *which uses:*
  - [input_number.temperature_low](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/includes/input_numbers.yaml#L12)
  - [input_boolean.automatic_temperature](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/includes/input_booleans.yaml#L40)
  - [script.set_low_temperature](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/scripts.yaml#L273)
  - [binary_sensor.no_one_home](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/includes/binary_sensors.yaml#L127)

### [Turn on heating again after notification](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/automations/climate.yaml#L78)

  *which uses:*
  - [script.set_high_temperature](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/scripts.yaml#L282)

### [Set outside temperature every hour](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/automations/climate.yaml#L87)


[^ toc](#automations---table-of-content)


## [Control switches](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/automations/control_switches.yaml)
### [Living room Hue dimmer switch](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/automations/control_switches.yaml#L12)

  *which uses:*
  - [input_select.last_script_living_room](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/includes/input_selects.yaml#L18)
  - [script.increase_brightness](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/scripts.yaml#L199)
  - [script.white_lights_living_room](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/scripts.yaml#L173)
  - [script.next_colors](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/scripts.yaml#L251)

### [Bedroom Hue dimmer switch](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/automations/control_switches.yaml#L49)

  *which uses:*
  - [input_select.last_script_bedroom](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/includes/input_selects.yaml#L24)
  - [script.white_lights_bedroom](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/scripts.yaml#L186)
  - [script.increase_brightness](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/scripts.yaml#L199)
  - [script.next_colors](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/scripts.yaml#L251)

### [Living room smart switch](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/automations/control_switches.yaml#L86)

  *which uses:*
  - [input_select.last_script_living_room](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/includes/input_selects.yaml#L18)
  - [script.increase_brightness](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/scripts.yaml#L199)
  - [script.next_colors](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/scripts.yaml#L251)

### [Bedroom smart switch](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/automations/control_switches.yaml#L130)

  *which uses:*
  - [input_select.last_script_bedroom](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/includes/input_selects.yaml#L24)
  - [input_boolean.sleep_mode](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/includes/input_booleans.yaml#L25)
  - [script.turn_off_everything](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/scripts.yaml#L237)
  - [script.increase_brightness](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/scripts.yaml#L199)
  - [script.going_to_sleep](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/scripts.yaml#L244)
  - [script.next_colors](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/scripts.yaml#L251)
  - [sensor.ten_minutes_before_alarm](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/includes/sensors.yaml#L249)

### [Bathroom smart switch](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/automations/control_switches.yaml#L183)

  *which uses:*
  - [input_select.bathroom_color](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/includes/input_selects.yaml#L30)
  - [script.increase_brightness](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/scripts.yaml#L199)

### [Downstairs smart switch](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/automations/control_switches.yaml#L221)

  *which uses:*
  - [script.turn_off_everything_non_automatic](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/scripts.yaml#L221)
  - [script.arriving](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/scripts.yaml#L297)
  - [script.set_low_temperature](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/scripts.yaml#L273)
  - [script.start_spotify](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/scripts.yaml#L30)
  - [sensor.favorite_playlist_of_nearest_person](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/includes/sensors.yaml#L93)

[^ toc](#automations---table-of-content)


## [Cube](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/automations/cube.yaml)
### [Perform operation](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/automations/cube.yaml#L12)

  *which uses:*
  - [input_select.cube_mode](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/includes/input_selects.yaml#L11)
  - [input_boolean.start_the_music](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/includes/input_booleans.yaml#L12)

### [Rotate the cube](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/automations/cube.yaml#L76)

  *which uses:*
  - [input_select.cube_mode](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/includes/input_selects.yaml#L11)

[^ toc](#automations---table-of-content)


## [Doorbell](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/automations/doorbell.yaml)
### [Click the button](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/automations/doorbell.yaml#L11)


[^ toc](#automations---table-of-content)


## [Frontend](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/automations/frontend.yaml)
### [Turn on dark mode](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/automations/frontend.yaml#L11)

  *which uses:*
  - [input_boolean.dark_mode](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/includes/input_booleans.yaml#L32)

### [Turn on light mode](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/automations/frontend.yaml#L19)

  *which uses:*
  - [input_boolean.dark_mode](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/includes/input_booleans.yaml#L32)

### [Change theme](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/automations/frontend.yaml#L27)

  *which uses:*
  - [input_boolean.dark_mode](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/includes/input_booleans.yaml#L32)
  - [input_boolean.theme_alternative](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/includes/input_booleans.yaml#L35)
  - [input_select.theme](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/includes/input_selects.yaml#L39)

[^ toc](#automations---table-of-content)


## [KEF DSP](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/automations/kef_dsp.yaml)
### [Sync desk_db](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/automations/kef_dsp.yaml#L19)

  *which uses:*
  - [input_number.kef_ls50_desk_db](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/includes/input_numbers.yaml#L28)
  - [script.sync_kef_dsp](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/scripts.yaml#L312)

### [Sync wall_db](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/automations/kef_dsp.yaml#L35)

  *which uses:*
  - [input_number.kef_ls50_wall_db](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/includes/input_numbers.yaml#L35)
  - [script.sync_kef_dsp](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/scripts.yaml#L312)

### [Sync treble_db](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/automations/kef_dsp.yaml#L51)

  *which uses:*
  - [input_number.kef_ls50_treble_db](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/includes/input_numbers.yaml#L42)
  - [script.sync_kef_dsp](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/scripts.yaml#L312)

### [Sync high_hz](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/automations/kef_dsp.yaml#L67)

  *which uses:*
  - [input_number.kef_ls50_high_hz](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/includes/input_numbers.yaml#L49)
  - [script.sync_kef_dsp](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/scripts.yaml#L312)

### [Sync low_hz](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/automations/kef_dsp.yaml#L83)

  *which uses:*
  - [input_number.kef_ls50_low_hz](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/includes/input_numbers.yaml#L56)
  - [script.sync_kef_dsp](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/scripts.yaml#L312)

### [Sync sub_db](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/automations/kef_dsp.yaml#L99)

  *which uses:*
  - [input_number.kef_ls50_sub_db](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/includes/input_numbers.yaml#L63)
  - [script.sync_kef_dsp](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/scripts.yaml#L312)

### [Sync sub_polarity](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/automations/kef_dsp.yaml#L122)

  *which uses:*
  - [input_select.kef_ls50_sub_polarity](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/includes/input_selects.yaml#L83)
  - [script.sync_kef_dsp](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/scripts.yaml#L312)

### [Sync bass_extension](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/automations/kef_dsp.yaml#L137)

  *which uses:*
  - [input_select.kef_ls50_bass_extension](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/includes/input_selects.yaml#L90)
  - [script.sync_kef_dsp](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/scripts.yaml#L312)

### [Sync desk_mode](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/automations/kef_dsp.yaml#L159)

  *which uses:*
  - [input_boolean.kef_ls50_desk_mode](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/includes/input_booleans.yaml#L49)
  - [script.sync_kef_dsp](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/scripts.yaml#L312)

### [Sync wall_mode](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/automations/kef_dsp.yaml#L174)

  *which uses:*
  - [input_boolean.kef_ls50_wall_mode](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/includes/input_booleans.yaml#L52)
  - [script.sync_kef_dsp](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/scripts.yaml#L312)

### [Sync phase_correction](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/automations/kef_dsp.yaml#L189)

  *which uses:*
  - [input_boolean.kef_ls50_phase_correction](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/includes/input_booleans.yaml#L55)
  - [script.sync_kef_dsp](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/scripts.yaml#L312)

### [Sync high_pass](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/automations/kef_dsp.yaml#L204)

  *which uses:*
  - [input_boolean.kef_ls50_high_pass](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/includes/input_booleans.yaml#L58)
  - [script.sync_kef_dsp](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/scripts.yaml#L312)

[^ toc](#automations---table-of-content)


## [Leaving](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/automations/leaving.yaml)
### [Automatically turn off everything](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/automations/leaving.yaml#L12)

  *which uses:*
  - [input_boolean.guest_mode](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/includes/input_booleans.yaml#L22)
  - [script.leaving](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/scripts.yaml#L291)
  - [binary_sensor.someone_in_the_house_in_last_hour](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/includes/binary_sensors.yaml#L34)
  - [binary_sensor.anything_on](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/includes/binary_sensors.yaml#L112)
  - [binary_sensor.no_one_home](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/includes/binary_sensors.yaml#L127)

### [Ask to turn off everything](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/automations/leaving.yaml#L39)

  *which uses:*
  - [input_boolean.guest_mode](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/includes/input_booleans.yaml#L22)
  - [binary_sensor.anything_on](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/includes/binary_sensors.yaml#L112)
  - [binary_sensor.no_one_home](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/includes/binary_sensors.yaml#L127)

### [Turn off everything after notification](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/automations/leaving.yaml#L69)

  *which uses:*
  - [script.leaving](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/scripts.yaml#L291)

[^ toc](#automations---table-of-content)


## [Light](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/automations/light.yaml)
### [Toggle kitchen ceiling](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/automations/light.yaml#L34)

  *which uses:*
  - [binary_sensor.activity_in_kitchen](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/includes/binary_sensors.yaml#L53)

### [Turn on kitchen counter if sleep mode is off](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/automations/light.yaml#L44)

  *which uses:*
  - [input_boolean.sleep_mode](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/includes/input_booleans.yaml#L25)
  - [binary_sensor.activity_in_kitchen](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/includes/binary_sensors.yaml#L53)

### [Turn off kitchen counter](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/automations/light.yaml#L57)

  *which uses:*
  - [binary_sensor.activity_in_kitchen](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/includes/binary_sensors.yaml#L53)

### [Turn on bathroom](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/automations/light.yaml#L73)

  *which uses:*
  - [binary_sensor.activity_in_bathroom](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/includes/binary_sensors.yaml#L40)

### [Turn bathroom to sleep mode](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/automations/light.yaml#L89)

  *which uses:*
  - [input_boolean.sleep_mode](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/includes/input_booleans.yaml#L25)

### [Turn off bathroom](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/automations/light.yaml#L108)

  *which uses:*
  - [binary_sensor.activity_in_bathroom](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/includes/binary_sensors.yaml#L40)

### [Toggle toilet](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/automations/light.yaml#L125)

  *which uses:*
  - [binary_sensor.activity_in_toilet](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/includes/binary_sensors.yaml#L47)

### [Turn on hall](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/automations/light.yaml#L141)

  *which uses:*
  - [binary_sensor.activity_in_hall](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/includes/binary_sensors.yaml#L59)

### [Turn off hall](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/automations/light.yaml#L159)

  *which uses:*
  - [binary_sensor.activity_in_hall](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/includes/binary_sensors.yaml#L59)

### [Automatically turn on the bedroom](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/automations/light.yaml#L179)

  *which uses:*
  - [input_boolean.sleep_mode](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/includes/input_booleans.yaml#L25)
  - [input_boolean.automatic_bedroom_lights](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/includes/input_booleans.yaml#L37)
  - [input_boolean.bedroom_lights_automatically_turned_on](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/includes/input_booleans.yaml#L28)
  - [binary_sensor.activity_in_bedroom](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/includes/binary_sensors.yaml#L66)

### [Automatically turn off the bedroom](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/automations/light.yaml#L205)

  *which uses:*
  - [input_boolean.bedroom_lights_automatically_turned_on](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/includes/input_booleans.yaml#L28)
  - [input_boolean.automatic_bedroom_lights](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/includes/input_booleans.yaml#L37)
  - [binary_sensor.activity_in_bedroom](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/includes/binary_sensors.yaml#L66)

### [Turn off bedroom lights auto switch](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/automations/light.yaml#L228)

  *which uses:*
  - [input_boolean.bedroom_lights_automatically_turned_on](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/includes/input_booleans.yaml#L28)

### [Turn on automatic_bedroom_lights switch](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/automations/light.yaml#L253)

  *which uses:*
  - [input_boolean.automatic_bedroom_lights](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/includes/input_booleans.yaml#L37)

### [Turn off toilet (extra check)](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/automations/light.yaml#L267)

  In case the other automation failed

  *which uses:*
  - [binary_sensor.activity_in_toilet](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/includes/binary_sensors.yaml#L47)

### [Turn off bathroom (extra check)](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/automations/light.yaml#L283)

  In case the other automation failed

  *which uses:*
  - [binary_sensor.activity_in_bathroom](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/includes/binary_sensors.yaml#L40)

### [Turn off kitchen (extra check)](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/automations/light.yaml#L299)

  In case the other automation failed

  *which uses:*
  - [binary_sensor.activity_in_kitchen](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/includes/binary_sensors.yaml#L53)

### [Turn off hall (extra check)](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/automations/light.yaml#L315)

  In case the other automation failed

  *which uses:*
  - [binary_sensor.activity_in_hall](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/includes/binary_sensors.yaml#L59)

### [Turn off bedroom (extra check)](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/automations/light.yaml#L338)

  In case the other automation failed

  *which uses:*
  - [input_boolean.bedroom_lights_automatically_turned_on](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/includes/input_booleans.yaml#L28)
  - [input_boolean.automatic_bedroom_lights](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/includes/input_booleans.yaml#L37)
  - [binary_sensor.activity_in_bedroom](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/includes/binary_sensors.yaml#L66)

[^ toc](#automations---table-of-content)


## [Lovelace](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/automations/lovelace.yaml)
### [Convert lovelace.json to lovelace-ui.yaml](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/automations/lovelace.yaml#L11)


[^ toc](#automations---table-of-content)


## [LSX](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/automations/lsx-control.yaml)
### [Sync volume](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/automations/lsx-control.yaml#L12)

  *which uses:*
  - [input_select.lsx_volume](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/includes/input_selects.yaml#L51)

### [Sync source](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/automations/lsx-control.yaml#L44)

  *which uses:*
  - [input_select.lsx_source](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/includes/input_selects.yaml#L75)

[^ toc](#automations---table-of-content)


## [Media player](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/automations/media_player.yaml)
### [Turn on Opt when TV is on and Spotify is not playing and not Usb](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/automations/media_player.yaml#L12)


### [Turn off speakers when turning off TV](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/automations/media_player.yaml#L43)


### [If speakers off and TV on, turn on the speaker on TV state change](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/automations/media_player.yaml#L61)


### [Update Spotify entity when TV is on every 5 seconds](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/automations/media_player.yaml#L80)


### [Sync KEF LS50 and TV volume](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/automations/media_player.yaml#L95)


[^ toc](#automations---table-of-content)


## [Music](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/automations/music.yaml)
### [Start playlist](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/automations/music.yaml#L11)

  *which uses:*
  - [input_boolean.start_the_music](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/includes/input_booleans.yaml#L12)
  - [script.start_spotify_playlist_of_nearest_person](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/scripts.yaml#L62)

### [Switch music from iPhone to speakers if coming home](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/automations/music.yaml#L25)

  *which uses:*
  - [input_boolean.guest_mode](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/includes/input_booleans.yaml#L22)

[^ toc](#automations---table-of-content)


## [Night mode](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/automations/night_mode.yaml)
### [Automatically turn off when alarm turns off or at 6AM](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/automations/night_mode.yaml#L12)

  *which uses:*
  - [input_boolean.sleep_mode](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/includes/input_booleans.yaml#L25)
  - [input_boolean.alarm_clock](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/includes/input_booleans.yaml#L46)

### [Turn off automatic bedroom lights](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/automations/night_mode.yaml#L28)

  *which uses:*
  - [input_boolean.sleep_mode](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/includes/input_booleans.yaml#L25)
  - [input_boolean.automatic_bedroom_lights](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/includes/input_booleans.yaml#L37)

### [Set low temperature when sleep mode turns on](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/automations/night_mode.yaml#L38)

  *which uses:*
  - [input_boolean.sleep_mode](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/includes/input_booleans.yaml#L25)
  - [script.set_low_temperature](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/scripts.yaml#L273)

[^ toc](#automations---table-of-content)


## [Plant](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/automations/plant.yaml)
### [Problem with Ficus microcarpa Ginseng](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/automations/plant.yaml#L11)


### [Problem with Kentia Palm](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/automations/plant.yaml#L29)


### [Problem with Yucca Elephantipes](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/automations/plant.yaml#L47)


[^ toc](#automations---table-of-content)


## [Rhasspy](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/automations/rhasspy.yaml)
### [Light states](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/automations/rhasspy.yaml#L15)


### [Living room light states](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/automations/rhasspy.yaml#L24)


### [Light colors](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/automations/rhasspy.yaml#L32)


### [Living room light colors](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/automations/rhasspy.yaml#L42)


### [Living room light brightness](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/automations/rhasspy.yaml#L52)


### [Media player states](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/automations/rhasspy.yaml#L62)


### [Play/pause media player](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/automations/rhasspy.yaml#L71)


### [Increase/decrease the volume](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/automations/rhasspy.yaml#L80)


### [Set the volume](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/automations/rhasspy.yaml#L91)


### [Cozy/white lights in the living room](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/automations/rhasspy.yaml#L102)


### [Start the music](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/automations/rhasspy.yaml#L109)

  *which uses:*
  - [input_boolean.start_the_music](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/includes/input_booleans.yaml#L12)

### [Sleeping mode](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/automations/rhasspy.yaml#L117)

  *which uses:*
  - [input_boolean.sleep_mode](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/includes/input_booleans.yaml#L25)

[^ toc](#automations---table-of-content)


## [Security](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/automations/security.yaml)
### [Motion detected but we are not home](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/automations/security.yaml#L11)

  *which uses:*
  - [binary_sensor.motion_detected](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/includes/binary_sensors.yaml#L19)

### [Sound alarm after notification](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/automations/security.yaml#L32)


### [Door has been open for more than 5 minutes](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/automations/security.yaml#L45)

  *which uses:*
  - [input_boolean.guest_mode](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/includes/input_booleans.yaml#L22)

[^ toc](#automations---table-of-content)


## [System](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/automations/system.yaml)
### [Warning about high CPU usage](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/automations/system.yaml#L11)


### [Warning about high CPU temperature](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/automations/system.yaml#L24)


### [Warning about high Xbox temperature](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/automations/system.yaml#L37)


### [Update DNS](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/automations/system.yaml#L56)

  Update the DNS at Gandi

  *which uses:*
  - [script.update_dns](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/scripts.yaml#L303)

[^ toc](#automations---table-of-content)


## [Utilities](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/automations/utilities.yaml)
### [Washing machine has started](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/automations/utilities.yaml#L12)

  *which uses:*
  - [input_datetime.washing_machine_started](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/includes/input_datetimes.yaml#L16)
  - [binary_sensor.washing_machine](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/includes/binary_sensors.yaml#L74)

### [Washing machine is done](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/automations/utilities.yaml#L24)

  *which uses:*
  - [input_datetime.washing_machine_done](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/includes/input_datetimes.yaml#L21)
  - [sensor.nearest_iphone_notify](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/includes/sensors.yaml#L230)
  - [binary_sensor.washing_machine](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/includes/binary_sensors.yaml#L74)

### [Dishwasher is done](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/automations/utilities.yaml#L41)

  *which uses:*
  - [input_datetime.dishwasher_done](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/includes/input_datetimes.yaml#L31)
  - [sensor.nearest_iphone_notify](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/includes/sensors.yaml#L230)
  - [binary_sensor.dishwasher](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/includes/binary_sensors.yaml#L86)

### [Dishwasher has started](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/automations/utilities.yaml#L58)

  *which uses:*
  - [input_datetime.dishwasher_started](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/includes/input_datetimes.yaml#L26)
  - [binary_sensor.dishwasher](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/includes/binary_sensors.yaml#L86)

[^ toc](#automations---table-of-content)


## [Vacation mode](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/automations/vacation_mode.yaml)
### [Auto turn on](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/automations/vacation_mode.yaml#L11)

  *which uses:*
  - [input_boolean.vacation_mode](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/includes/input_booleans.yaml#L19)
  - [input_boolean.guest_mode](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/includes/input_booleans.yaml#L22)

### [Auto turn off](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/automations/vacation_mode.yaml#L31)

  *which uses:*
  - [input_boolean.guest_mode](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/includes/input_booleans.yaml#L22)
  - [input_boolean.vacation_mode](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/includes/input_booleans.yaml#L19)

[^ toc](#automations---table-of-content)


## [Vacuum](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/automations/vacuum.yaml)
### [Started cleaning](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/automations/vacuum.yaml#L11)


### [Stopped cleaning](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/automations/vacuum.yaml#L23)

  *which uses:*
  - [input_boolean.cleaned_today](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/includes/input_booleans.yaml#L16)

### [Reminder notification](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/automations/vacuum.yaml#L37)

  *which uses:*
  - [binary_sensor.vacuum_day](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/includes/binary_sensors.yaml#L121)

### [Cleanup if nobody is home](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/automations/vacuum.yaml#L51)

  *which uses:*
  - [input_boolean.guest_mode](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/includes/input_booleans.yaml#L22)
  - [input_boolean.vacation_mode](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/includes/input_booleans.yaml#L19)
  - [input_boolean.cleaned_today](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/includes/input_booleans.yaml#L16)
  - [binary_sensor.vacuum_day](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/includes/binary_sensors.yaml#L121)

### [Reset cleaned today](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/automations/vacuum.yaml#L89)

  *which uses:*
  - [input_boolean.cleaned_today](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/includes/input_booleans.yaml#L16)

### [Reset to standard mode](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/automations/vacuum.yaml#L98)


[^ toc](#automations---table-of-content)


## [Work](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/automations/work.yaml)
### [Go home notification](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/automations/work.yaml#L11)

  *which uses:*
  - [input_boolean.work_hour_notification_sent](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/includes/input_booleans.yaml#L43)
  - [binary_sensor.worked_enough_today](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/includes/binary_sensors.yaml#L98)

### [Reset input_boolean at midnight](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/automations/work.yaml#L32)

  *which uses:*
  - [input_boolean.work_hour_notification_sent](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/includes/input_booleans.yaml#L43)

### [Bas left work notification for Marcella](https://github.com/basnijholt/home-assistant-config/blob/3a3fd4f499a08a529c98ad97f0420c1265a5f5e9/automations/work.yaml#L44)


[^ toc](#automations---table-of-content)


<!-- end-automations -->
