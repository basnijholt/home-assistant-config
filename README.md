
# Bas Nijholt's Home Assistant config files
![Lovelace UI](https://user-images.githubusercontent.com/6897215/70158623-d82ee680-16b7-11ea-9287-0d4f1ebe64e8.png)
Using my own [iOS Dark Mode Theme](https://github.com/basnijholt/lovelace-ios-dark-mode-theme).

## My cool AppDaemon apps
* [Sunrise emulator app](appdaemon/apps/wake_up_light.py) 🌅
* [Wake up with Spotify app](appdaemon/apps/wake_up_with_spotify.py) that slowly ramps the volume 📢
* [Alarm clock](appdaemon/apps/alarm_clock.py) that uses the volume ramp and sunrise app ⏰

## Noteworthy (useful) automations
* [Automatic `lovelace.json` to `lovelace-ui.yaml` converter](automations/lovelace.yaml) for version control 🤖
* [Controlling music using the Xiaomi Aqara Magic Cube](automations/music.yaml) ∛

## My devices

### Switches
* TP-Link HS110 (2x)
* Xiaomi Aqara Magic Cube
* Xiaomi Aqara Single Button (4x)
* Philips Hue Dimmer switch

### Sensors
* Xiaomi Aqara Door Sensors (4x)
* Xiaomi Aqara Temperature Sensors (4x)
* Xiaomi Aqara Motion Sensors (4x)

### Vacuum
* Xiaomi Mi Roborock S5

### Media player
* KEF LS50 Wireless speakers

### Lights
* Philips Hue E27 White and Color (10x)

### Hubs
* ConBee II

### Server
* Raspberry Pi 4, 4GB RAM, 16GB SD-card, running [*Hass.io*](https://www.home-assistant.io/hassio/)

### Device tracker
* iPhone X with the new iOS app


## Notes
* I use AppDaemon 4 beta, see the installation instructions [here](appdaemon/hassio_appdaemon4_beta_installation_instructions.md).

## Automation plans
* Turn on lights upon entry after dark.
* Notify us when the window is open and it is raining.
* Implement scenes: 'movie time', 'dinner time', 'cozy time', 'bed time', and 'party time'.
* Introduce the concept of "sleep mode" which automatically triggers if we're home and there is no motion in the house *except* the bedroom. Then if you go out in the middle of the night (e.g., to the bathroom) then lights will turn a non-bright red. Manually triggering the switch will turn on the normal lights.
* Use [this cheap Wifi enabled dimmer](https://nl.aliexpress.com/item/33010332202.html) and flash it with Tasmota to make some dumb lights, smart. [[1](https://gathering.tweakers.net/forum/list_message/60373132#60373132)]
