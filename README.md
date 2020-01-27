
# Bas Nijholt's Home Assistant config files
![Lovelace UI](http://files.nijho.lt/ha-ui.gif)

Using my [iOS Dark Mode Theme](https://github.com/basnijholt/lovelace-ios-dark-mode-theme) and [iOS Light Mode Theme](https://github.com/basnijholt/lovelace-ios-light-mode-theme).

## My cool AppDaemon apps
* [Sunrise emulator app](appdaemon/apps/wake_up_light.py) 🌅
* [Wake up with Spotify app](appdaemon/apps/wake_up_with_spotify.py) that slowly ramps the volume 📢
* [Low Battery level notifications 🔋](appdaemon/apps/battery_monitor.py) 

## Noteworthy (useful) automations
* [Alarm clock](automations/alarm_clock.yaml) that uses the AppDaemon volume ramp and sunrise app ⏰
* [Automatic `lovelace.json` to `lovelace-ui.yaml` converter](automations/lovelace.yaml) for version control 🤖
* [Controlling music using the Xiaomi Aqara Magic Cube](automations/cube.yaml) ∛
* [Controlling the lights (hue and brightness) using the Xiaomi Aqara Magic Cube](automations/lights.yaml) ∛
* Guest mode that turns off automations
* [Vacation mode](automations/vacation_mode.yaml)
* [Presence detection in different rooms based on various binary template sensors](includes/binary_sensors.yaml)
* [Robot vacuum automations](automations/vacuum.yaml)
* [Arriving and leaving automations](automations/leaving_and_arriving.yaml)
* [Notifications when the dishwasher or washing machine is done](automations/utilities.yaml)
* [Time at work 📈 tracking and notifications to go home](includes/sensors.yaml)
* Using [HA-Menu](https://github.com/codechimp-org/ha-menu) to control [my speakers on my iMac](automations/lsx-control.yaml)
* [Automatically switch Lovelace's theme between backgrounds and light/dark mode](automations/frontend.yaml)
* [Sync volume TV ⇄ speakers 🔊](automations/media_player.yaml)
* [Security notifications when the front door 🚪 has been open for too long or motion is detected when no one is home](automations/security.yaml)

See also [my guide for my girlfriend ❤️](guide.md).

## My devices

### Switches
* TP-Link HS110 (3x) (€70.84)
* Xiaomi Aqara Magic Cube (€11.08)
* Xiaomi Aqara Single Button (4x) (€37.05)
* Philips Hue Dimmer switch (2x) (€33.22)
* IKEA TRÅDFRI SYMFONISK Remote (€15.00)

### Sensors
* Xiaomi Aqara Door Sensor (4x) (€32.71)
* Xiaomi Aqara Temperature Sensor (4x) (€34.40)
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
* Philips Hue E27 White and Color (12x) (€266.7)
* Philips Hue GU10 Ambient White (6x) (€102.70)
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
* Nodo-Shop – OpenTherm Gateway (OTGW) (€48.81)

### Total cost
*€1442.44* without my TV, phones, and speakers, **yes**, this is shocking to me too 😅
I bought many things on Aliexpress and with discount or used on Amazon.

## Automation plans
* Notify us when the window is open and it is raining.
* Add budget keeper using the Bunq API
