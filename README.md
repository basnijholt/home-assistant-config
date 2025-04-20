# Bas Nijholt's Home Assistant config files

[![GitHub stars](https://img.shields.io/github/stars/basnijholt/home-assistant-config.svg?style=plasticr)](https://github.com/basnijholt/home-assistant-config/stargazers)
[![GitHub last commit](https://img.shields.io/github/last-commit/basnijholt/home-assistant-config.svg?style=plasticr)](https://github.com/basnijholt/home-assistant-config/commits/master)
[![HA Version](https://img.shields.io/badge/Running%20Home%20Asssistant-2025.4.3%20-darkblue)](https://github.com/home-assistant/core/releases/tag/2025.4.3)
[![HA Community](https://img.shields.io/badge/HA%20community-forum-orange)](https://community.home-assistant.io/u/basnijholt/summary)
[![Yaml Lint](https://github.com/basnijholt/home-assistant-config/workflows/Yaml%20Lint/badge.svg)](https://github.com/basnijholt/home-assistant-config/actions?query=workflow%3A%22Yaml+Lint%22)


![Lovelace UI](http://files.nijho.lt/ha-ui.gif)
<img src="https://github.com/basnijholt/home-assistant-macbook-touch-bar/raw/master/example-real-life.jpg?s=400" width="700" alt="MacBook touchbar">

Using my [iOS Light and Dark Mode Themes](https://github.com/basnijholt/lovelace-ios-themes).

See also [my guide for my girlfriend ❤️](guide.md).

## Table of content

- [My devices](#my-devices)
- [Supervisor add-ons](#supervisor-add-ons)
- [All my automations](#automations---table-of-content)

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
* [Security notifications when the front door 🚪 has been open for too long or motion is detected when no one is home](#security-)

## My cool AppDaemon apps
* [Sunrise emulator app](appdaemon/apps/wake_up_light.py) 🌅
* [Wake up with Spotify app](appdaemon/apps/wake_up_with_spotify.py) that slowly ramps the volume 📢
* [Low Battery level notifications 🔋](appdaemon/apps/battery_monitor.py)

## Popular Reddit posts of features in this config
(Sorted from new to old)
- [Advanced control from my Apple Watch using single automations: setting lights, vacuum, temperature, sleep mode, and more!](https://www.reddit.com/r/homeassistant/comments/jdcal1/advanced_control_from_my_apple_watch_using_single/)
- [HA has it before Apple has even finished it, I present: Adaptive_lighting! flux/circadian_lighting fans (haters?) please try the new UI configurable component that stops automatically adjusting your lights when you make a manual change 🎉 (and many more new useful features!)](https://www.reddit.com/r/homeassistant/comments/jabhso/ha_has_it_before_apple_has_even_finished_it_i/)
- [Creating useful notifications using the new 'variables' and 'wait_for_trigger' features](https://www.reddit.com/r/homeassistant/comments/ixnr5z/creating_useful_notifications_using_the_new/)
- [Copying YAML from GitHub is easier than ever: my config's README now automatically lists all automations (and entities it uses) with links to the relevant parts in the YAML](https://www.reddit.com/r/homeassistant/comments/if2n1h/copying_yaml_from_github_is_easier_than_ever_my/)
- [Beautiful iOS dark and light mode inspired themes with easy background switch (that now also change the top header color!) [OC]](https://www.reddit.com/r/homeassistant/comments/h9ckpt/beautiful_ios_dark_and_light_mode_inspired_themes/)
- [Finally a good use for the touch bar on my Macbook Pro!](https://www.reddit.com/r/homeassistant/comments/gyd5wd/finally_a_good_use_for_the_touch_bar_on_my/)
- [100% control over my high fi speakers: a bidirectional synchronized equalizer](https://www.reddit.com/r/homeassistant/comments/gkjbfh/100_control_over_my_high_fi_speakers_a/)
- [COVID-19 forcing me to stay inside? Check out my "quarantine-o-meter" that displays how much time (in %) we've been inside.](https://www.reddit.com/r/homeassistant/comments/fqudzw/covid19_forcing_me_to_stay_inside_check_out_my/)
- [After a lot of love, a much-requested feature (+more!) for my iOS Dark Theme [OC]](https://www.reddit.com/r/homeassistant/comments/ex7mve/after_a_lot_of_love_a_muchrequested_feature_more/)
- [I can now sync the speaker volume using the menu bar of my iMac! [OC]](https://www.reddit.com/r/homeassistant/comments/eri64c/i_can_now_sync_the_speaker_volume_using_the_menu/)
- [I keep seeing my own theme on Reddit, so now it's my turn! [OC]](https://www.reddit.com/r/homeassistant/comments/enpeik/i_keep_seeing_my_own_theme_on_reddit_so_now_its/)

## Ideas?
* Notify us when the window is open and it is raining.
* Add budget keeper using the Bunq API

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
            <td>1</td>
            <td>35.84</td>
            <td>35.84</td>
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
            <td>137.52</td>
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
            <td>10</td>
            <td>9.79</td>
            <td>97.85</td>
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
            <td>234.52</td>
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
            <th>€1904.53</th>
        </tr>
    </thead>
</table>
<!-- end-table -->


# Supervisor add-ons

I run a [Supervised install](https://www.home-assistant.io/getting-started/) with the following add-ons:

<!-- start-addons -->
- [Home Assistant Stream Deck](https://github.com/basnijholt/home-assistant-streamdeck-yaml-addon) version 2024.7.5 by @basnijholt
- [Frigate](https://github.com/blakeblackshear/frigate) version 0.14.1 by @blakeblackshear
- [Advanced SSH & Web Terminal](https://github.com/hassio-addons/addon-ssh) version 19.0.0 by @hassio-addons
- [AppDaemon](https://github.com/hassio-addons/addon-appdaemon) version 0.16.7 by @hassio-addons
- [Glances](https://github.com/hassio-addons/addon-glances) version 0.21.1 by @hassio-addons
- [Grafana](https://github.com/hassio-addons/addon-grafana) version 10.1.2 by @hassio-addons
- [InfluxDB](https://github.com/hassio-addons/addon-influxdb) version 5.0.1 by @hassio-addons
- [Log Viewer](https://github.com/hassio-addons/addon-log-viewer) version 0.17.1 by @hassio-addons
- [Studio Code Server](https://github.com/hassio-addons/addon-vscode) version 5.17.2 by @hassio-addons
- [phpMyAdmin](https://github.com/hassio-addons/addon-phpmyadmin) version 0.10.0 by @hassio-addons
- [Duck DNS](https://github.com/home-assistant/addons/tree/master/duckdns) version 1.18.0 by @home-assistant
- [File editor](https://github.com/home-assistant/addons/tree/master/configurator) version 5.8.0 by @home-assistant
- [Let's Encrypt](https://github.com/home-assistant/addons/tree/master/letsencrypt) version 5.2.2 by @home-assistant
- [MariaDB](https://github.com/home-assistant/addons/tree/master/mariadb) version 2.7.1 by @home-assistant
- [Mosquitto broker](https://github.com/home-assistant/addons/tree/master/mosquitto) version 6.4.1 by @home-assistant
- [Samba share](https://github.com/home-assistant/addons/tree/master/samba) version 12.3.2 by @home-assistant
- [VLC](https://github.com/home-assistant/addons/tree/master/vlc) version 0.3.0 by @home-assistant
- [Traefik](https://alxx.nl/home-assistant-addons/tree/master/traefik) version 4.2.2 by @home-assistant.io
- [Home Assistant Google Drive Backup](https://github.com/sabeechen/hassio-google-drive-backup) version 0.112.1 by @sabeechen
- [Govee to MQTT Bridge](https://github.com/wez/govee2mqtt) version 2024.07.13-82ddc6e9 by @wez
- [Zigbee2MQTT](https://github.com/zigbee2mqtt/hassio-zigbee2mqtt/tree/master/zigbee2mqtt) version 1.40.2-1 by @zigbee2mqtt
<!-- end-addons -->


<!-- start-automations -->
# Automations - Table of Content
1. [Adaptive lighting 🌄🌇](#adaptive-lighting-) (3 automations)
1. [Alarm clock ⏰](#alarm-clock-) (1 automations)
1. [Apple Watch ⌚](#apple-watch-) (12 automations)
1. [Arriving 👞](#arriving-) (1 automations)
1. [Bike 🚲](#bike-) (2 automations)
1. [Climate 🔥🥶](#climate-) (7 automations)
1. [Control switches 🎛](#control-switches-) (12 automations)
1. [Cube ∛](#cube-) (2 automations)
1. [Doorbell 🚪🔔](#doorbell-) (1 automations)
1. [Frontend 👨‍💻](#frontend-) (3 automations)
1. [Leaving 👞](#leaving-) (4 automations)
1. [Light 💡](#light-) (34 automations)
1. [Lovelace 👨‍💻](#lovelace-) (1 automations)
1. [Mailbox 📫📣](#mailbox-) (1 automations)
1. [Media player 🔈📺](#media-player-) (7 automations)
1. [Music 🎵](#music-) (2 automations)
1. [Notifications 🔔](#notifications-) (3 automations)
1. [Plant 🌱](#plant-) (3 automations)
1. [Security 👮🚨](#security-) (7 automations)
1. [Night mode 🌕🌑](#night-mode-) (5 automations)
1. [System 🖥](#system-) (7 automations)
1. [Test 🧪](#test-) (5 automations)
1. [Utilities 🧺👚🍽](#utilities-) (3 automations)
1. [Vacation mode 🏝](#vacation-mode-) (2 automations)
1. [Vacuum 🧹](#vacuum-) (6 automations)
1. [Work 💼](#work-) (3 automations)


⚠️ Total number of automations: **137** ⚠️

## [Adaptive lighting 🌄🌇](https://github.com/basnijholt/home-assistant-config/blob/896d09e1d72d5a2de280d9b091e72f717846000d/automations/adaptive_lighting.yaml)
### [Turn on and off switches](https://github.com/basnijholt/home-assistant-config/blob/896d09e1d72d5a2de280d9b091e72f717846000d/automations/adaptive_lighting.yaml#L11)

  *which uses:*
  - [input_select.sleep_mode](https://github.com/basnijholt/home-assistant-config/blob/07c0fdd72fdd676ab1b95db36f7baef313f7cff6/includes/input_selects.yaml#L11)

### [Reset manual_control after 1 hour](https://github.com/basnijholt/home-assistant-config/blob/896d09e1d72d5a2de280d9b091e72f717846000d/automations/adaptive_lighting.yaml#L52)


### [Notify manual_control](https://github.com/basnijholt/home-assistant-config/blob/896d09e1d72d5a2de280d9b091e72f717846000d/automations/adaptive_lighting.yaml#L76)


[^ toc](#automations---table-of-content)


## [Alarm clock ⏰](https://github.com/basnijholt/home-assistant-config/blob/f7bfc4913cf6e02bc5293357ea6dd41a806b28bb/automations/alarm_clock.yaml)
### [Wake up with Spotify and light](https://github.com/basnijholt/home-assistant-config/blob/f7bfc4913cf6e02bc5293357ea6dd41a806b28bb/automations/alarm_clock.yaml#L11)

  *which uses:*
  - [input_boolean.alarm_clock](https://github.com/basnijholt/home-assistant-config/blob/3edc9d32263e8f60edc030c5f3ab8a089c469ea1/includes/input_booleans.yaml#L55)
  - [input_boolean.wake_up_light](https://github.com/basnijholt/home-assistant-config/blob/3edc9d32263e8f60edc030c5f3ab8a089c469ea1/includes/input_booleans.yaml#L75)
  - [input_boolean.wake_up_with_spotify](https://github.com/basnijholt/home-assistant-config/blob/3edc9d32263e8f60edc030c5f3ab8a089c469ea1/includes/input_booleans.yaml#L99)
  - [input_select.sleep_mode](https://github.com/basnijholt/home-assistant-config/blob/07c0fdd72fdd676ab1b95db36f7baef313f7cff6/includes/input_selects.yaml#L11)
  - [sensor.ten_minutes_before_alarm](https://github.com/basnijholt/home-assistant-config/blob/567dbfe1c515c3d63e743ab30b44f0d18d6792c4/includes/sensors.yaml#L241)

[^ toc](#automations---table-of-content)


## [Apple Watch ⌚](https://github.com/basnijholt/home-assistant-config/blob/e1ac0ba31e87fbe4e7fc9ddafc20681919bfe70e/automations/apple_watch.yaml)
### [Play or Pause the TV](https://github.com/basnijholt/home-assistant-config/blob/e1ac0ba31e87fbe4e7fc9ddafc20681919bfe70e/automations/apple_watch.yaml#L11)


### [Minimal lights bedroom](https://github.com/basnijholt/home-assistant-config/blob/e1ac0ba31e87fbe4e7fc9ddafc20681919bfe70e/automations/apple_watch.yaml#L27)


### [Fix TV sound](https://github.com/basnijholt/home-assistant-config/blob/e1ac0ba31e87fbe4e7fc9ddafc20681919bfe70e/automations/apple_watch.yaml#L42)

  *which uses:*
  - [script.fix_sound](https://github.com/basnijholt/home-assistant-config/blob/84e08bdddccf8642e6caaa29621ccc60f778f6d1/scripts.yaml#L449)

### [Set sleep mode](https://github.com/basnijholt/home-assistant-config/blob/e1ac0ba31e87fbe4e7fc9ddafc20681919bfe70e/automations/apple_watch.yaml#L51)

  *which uses:*
  - [input_select.sleep_mode](https://github.com/basnijholt/home-assistant-config/blob/07c0fdd72fdd676ab1b95db36f7baef313f7cff6/includes/input_selects.yaml#L11)

### [Set lights](https://github.com/basnijholt/home-assistant-config/blob/e1ac0ba31e87fbe4e7fc9ddafc20681919bfe70e/automations/apple_watch.yaml#L94)

  *which uses:*
  - [script.cozy_lights_bedroom](https://github.com/basnijholt/home-assistant-config/blob/84e08bdddccf8642e6caaa29621ccc60f778f6d1/scripts.yaml#L158)
  - [script.cozy_lights_living_room](https://github.com/basnijholt/home-assistant-config/blob/84e08bdddccf8642e6caaa29621ccc60f778f6d1/scripts.yaml#L101)
  - [script.turn_on_lights](https://github.com/basnijholt/home-assistant-config/blob/84e08bdddccf8642e6caaa29621ccc60f778f6d1/scripts.yaml#L622)
  - [script.white_lights_living_room](https://github.com/basnijholt/home-assistant-config/blob/84e08bdddccf8642e6caaa29621ccc60f778f6d1/scripts.yaml#L212)

### [Temperature report](https://github.com/basnijholt/home-assistant-config/blob/e1ac0ba31e87fbe4e7fc9ddafc20681919bfe70e/automations/apple_watch.yaml#L259)


### [Portfolio value](https://github.com/basnijholt/home-assistant-config/blob/e1ac0ba31e87fbe4e7fc9ddafc20681919bfe70e/automations/apple_watch.yaml#L279)


### [Send vacuum cleaner](https://github.com/basnijholt/home-assistant-config/blob/e1ac0ba31e87fbe4e7fc9ddafc20681919bfe70e/automations/apple_watch.yaml#L295)

  *which uses:*
  - [script.vacuum_command](https://github.com/basnijholt/home-assistant-config/blob/84e08bdddccf8642e6caaa29621ccc60f778f6d1/scripts.yaml#L562)

### [Movie time](https://github.com/basnijholt/home-assistant-config/blob/e1ac0ba31e87fbe4e7fc9ddafc20681919bfe70e/automations/apple_watch.yaml#L361)


### [Reset adaptive lighting](https://github.com/basnijholt/home-assistant-config/blob/e1ac0ba31e87fbe4e7fc9ddafc20681919bfe70e/automations/apple_watch.yaml#L384)

  *which uses:*
  - [script.reset_adaptive_lighting](https://github.com/basnijholt/home-assistant-config/blob/84e08bdddccf8642e6caaa29621ccc60f778f6d1/scripts.yaml#L648)

### [Set temperature](https://github.com/basnijholt/home-assistant-config/blob/e1ac0ba31e87fbe4e7fc9ddafc20681919bfe70e/automations/apple_watch.yaml#L393)


### [Where is other person?](https://github.com/basnijholt/home-assistant-config/blob/e1ac0ba31e87fbe4e7fc9ddafc20681919bfe70e/automations/apple_watch.yaml#L460)


[^ toc](#automations---table-of-content)


## [Arriving 👞](https://github.com/basnijholt/home-assistant-config/blob/896d09e1d72d5a2de280d9b091e72f717846000d/automations/arriving.yaml)
### [Switch music from iPhone to speakers if no one is home](https://github.com/basnijholt/home-assistant-config/blob/896d09e1d72d5a2de280d9b091e72f717846000d/automations/arriving.yaml#L13)

  *which uses:*
  - [input_boolean.guest_mode](https://github.com/basnijholt/home-assistant-config/blob/3edc9d32263e8f60edc030c5f3ab8a089c469ea1/includes/input_booleans.yaml#L22)

[^ toc](#automations---table-of-content)


## [Bike 🚲](https://github.com/basnijholt/home-assistant-config/blob/00b2d218b87c75bd83ab5bd86e50ef952a3de921/automations/bike.yaml)
### [Started charging](https://github.com/basnijholt/home-assistant-config/blob/00b2d218b87c75bd83ab5bd86e50ef952a3de921/automations/bike.yaml#L14)

  *which uses:*
  - [input_datetime.bike_charger_off](https://github.com/basnijholt/home-assistant-config/blob/07e1a85beb7396dd12290030ba48064f386899a8/includes/input_datetimes.yaml#L51)
  - [input_datetime.bike_charger_on](https://github.com/basnijholt/home-assistant-config/blob/07e1a85beb7396dd12290030ba48064f386899a8/includes/input_datetimes.yaml#L46)

### [Stop charging](https://github.com/basnijholt/home-assistant-config/blob/00b2d218b87c75bd83ab5bd86e50ef952a3de921/automations/bike.yaml#L30)

  *which uses:*
  - [input_datetime.bike_charger_off](https://github.com/basnijholt/home-assistant-config/blob/07e1a85beb7396dd12290030ba48064f386899a8/includes/input_datetimes.yaml#L51)

[^ toc](#automations---table-of-content)


## [Climate 🔥🥶](https://github.com/basnijholt/home-assistant-config/blob/567dbfe1c515c3d63e743ab30b44f0d18d6792c4/automations/climate.yaml)
### [Turn on the heating 30 min before waking up](https://github.com/basnijholt/home-assistant-config/blob/567dbfe1c515c3d63e743ab30b44f0d18d6792c4/automations/climate.yaml#L12)

  *which uses:*
  - [input_boolean.alarm_clock](https://github.com/basnijholt/home-assistant-config/blob/3edc9d32263e8f60edc030c5f3ab8a089c469ea1/includes/input_booleans.yaml#L55)
  - [input_boolean.automatic_temperature](https://github.com/basnijholt/home-assistant-config/blob/3edc9d32263e8f60edc030c5f3ab8a089c469ea1/includes/input_booleans.yaml#L49)
  - [script.set_high_temperature](https://github.com/basnijholt/home-assistant-config/blob/84e08bdddccf8642e6caaa29621ccc60f778f6d1/scripts.yaml#L410)
  - [sensor.half_hour_before_alarm](https://github.com/basnijholt/home-assistant-config/blob/567dbfe1c515c3d63e743ab30b44f0d18d6792c4/includes/sensors.yaml#L233)

### [Turn on the heating when going home](https://github.com/basnijholt/home-assistant-config/blob/567dbfe1c515c3d63e743ab30b44f0d18d6792c4/automations/climate.yaml#L26)

  *which uses:*
  - [input_boolean.automatic_temperature](https://github.com/basnijholt/home-assistant-config/blob/3edc9d32263e8f60edc030c5f3ab8a089c469ea1/includes/input_booleans.yaml#L49)
  - [input_number.temperature_high](https://github.com/basnijholt/home-assistant-config/blob/364858031f698404bdff4dc6acc7a72c2c70961b/includes/input_numbers.yaml#L20)
  - [script.set_high_temperature](https://github.com/basnijholt/home-assistant-config/blob/84e08bdddccf8642e6caaa29621ccc60f778f6d1/scripts.yaml#L410)
  - [binary_sensor.no_one_home](https://github.com/basnijholt/home-assistant-config/blob/7dfb2eb585fcf0287ea163eebc4d3f1d2a5cb515/includes/binary_sensors.yaml#L204)

### [Turn off the heating at 22:00](https://github.com/basnijholt/home-assistant-config/blob/567dbfe1c515c3d63e743ab30b44f0d18d6792c4/automations/climate.yaml#L51)

  *which uses:*
  - [input_boolean.automatic_temperature](https://github.com/basnijholt/home-assistant-config/blob/3edc9d32263e8f60edc030c5f3ab8a089c469ea1/includes/input_booleans.yaml#L49)
  - [input_number.temperature_low](https://github.com/basnijholt/home-assistant-config/blob/364858031f698404bdff4dc6acc7a72c2c70961b/includes/input_numbers.yaml#L12)
  - [script.set_high_temperature](https://github.com/basnijholt/home-assistant-config/blob/84e08bdddccf8642e6caaa29621ccc60f778f6d1/scripts.yaml#L410)
  - [script.set_low_temperature](https://github.com/basnijholt/home-assistant-config/blob/84e08bdddccf8642e6caaa29621ccc60f778f6d1/scripts.yaml#L401)
  - [binary_sensor.no_one_home](https://github.com/basnijholt/home-assistant-config/blob/7dfb2eb585fcf0287ea163eebc4d3f1d2a5cb515/includes/binary_sensors.yaml#L204)

### [Set outside temperature every hour](https://github.com/basnijholt/home-assistant-config/blob/567dbfe1c515c3d63e743ab30b44f0d18d6792c4/automations/climate.yaml#L84)


### [Warning when heating on and living room door open](https://github.com/basnijholt/home-assistant-config/blob/567dbfe1c515c3d63e743ab30b44f0d18d6792c4/automations/climate.yaml#L95)

  *which uses:*
  - [input_number.temperature_low](https://github.com/basnijholt/home-assistant-config/blob/364858031f698404bdff4dc6acc7a72c2c70961b/includes/input_numbers.yaml#L12)

### [Set temperature setpoint to 50 °C](https://github.com/basnijholt/home-assistant-config/blob/567dbfe1c515c3d63e743ab30b44f0d18d6792c4/automations/climate.yaml#L129)


### [Automatically turn off spaceheater when no-one is in the guest room](https://github.com/basnijholt/home-assistant-config/blob/567dbfe1c515c3d63e743ab30b44f0d18d6792c4/automations/climate.yaml#L139)

  *which uses:*
  - [binary_sensor.activity_in_guest_room](https://github.com/basnijholt/home-assistant-config/blob/7dfb2eb585fcf0287ea163eebc4d3f1d2a5cb515/includes/binary_sensors.yaml#L106)

[^ toc](#automations---table-of-content)


## [Control switches 🎛](https://github.com/basnijholt/home-assistant-config/blob/e1ac0ba31e87fbe4e7fc9ddafc20681919bfe70e/automations/control_switches.yaml)
### [Living room Philips Hue dimmer switch](https://github.com/basnijholt/home-assistant-config/blob/e1ac0ba31e87fbe4e7fc9ddafc20681919bfe70e/automations/control_switches.yaml#L12)

  *which uses:*
  - [input_select.last_script_living_room](https://github.com/basnijholt/home-assistant-config/blob/07c0fdd72fdd676ab1b95db36f7baef313f7cff6/includes/input_selects.yaml#L25)
  - [script.increase_brightness](https://github.com/basnijholt/home-assistant-config/blob/84e08bdddccf8642e6caaa29621ccc60f778f6d1/scripts.yaml#L240)
  - [script.next_colors](https://github.com/basnijholt/home-assistant-config/blob/84e08bdddccf8642e6caaa29621ccc60f778f6d1/scripts.yaml#L296)
  - [script.reset_adaptive_lighting](https://github.com/basnijholt/home-assistant-config/blob/84e08bdddccf8642e6caaa29621ccc60f778f6d1/scripts.yaml#L648)
  - [script.white_lights_living_room](https://github.com/basnijholt/home-assistant-config/blob/84e08bdddccf8642e6caaa29621ccc60f778f6d1/scripts.yaml#L212)

### [Bedroom Philips Hue dimmer switch](https://github.com/basnijholt/home-assistant-config/blob/e1ac0ba31e87fbe4e7fc9ddafc20681919bfe70e/automations/control_switches.yaml#L75)

  *which uses:*
  - [input_select.last_script_bedroom](https://github.com/basnijholt/home-assistant-config/blob/07c0fdd72fdd676ab1b95db36f7baef313f7cff6/includes/input_selects.yaml#L31)
  - [script.increase_brightness](https://github.com/basnijholt/home-assistant-config/blob/84e08bdddccf8642e6caaa29621ccc60f778f6d1/scripts.yaml#L240)
  - [script.next_colors](https://github.com/basnijholt/home-assistant-config/blob/84e08bdddccf8642e6caaa29621ccc60f778f6d1/scripts.yaml#L296)
  - [script.reset_adaptive_lighting](https://github.com/basnijholt/home-assistant-config/blob/84e08bdddccf8642e6caaa29621ccc60f778f6d1/scripts.yaml#L648)
  - [script.white_lights_bedroom](https://github.com/basnijholt/home-assistant-config/blob/84e08bdddccf8642e6caaa29621ccc60f778f6d1/scripts.yaml#L226)

### [Bedroom IKEA dimmer switch](https://github.com/basnijholt/home-assistant-config/blob/e1ac0ba31e87fbe4e7fc9ddafc20681919bfe70e/automations/control_switches.yaml#L148)

  *which uses:*
  - [input_boolean.guest_mode](https://github.com/basnijholt/home-assistant-config/blob/3edc9d32263e8f60edc030c5f3ab8a089c469ea1/includes/input_booleans.yaml#L22)
  - [input_select.last_script_bedroom](https://github.com/basnijholt/home-assistant-config/blob/07c0fdd72fdd676ab1b95db36f7baef313f7cff6/includes/input_selects.yaml#L31)
  - [input_select.sleep_mode](https://github.com/basnijholt/home-assistant-config/blob/07c0fdd72fdd676ab1b95db36f7baef313f7cff6/includes/input_selects.yaml#L11)
  - [script.increase_brightness](https://github.com/basnijholt/home-assistant-config/blob/84e08bdddccf8642e6caaa29621ccc60f778f6d1/scripts.yaml#L240)
  - [script.next_colors](https://github.com/basnijholt/home-assistant-config/blob/84e08bdddccf8642e6caaa29621ccc60f778f6d1/scripts.yaml#L296)
  - [script.turn_off_everything](https://github.com/basnijholt/home-assistant-config/blob/84e08bdddccf8642e6caaa29621ccc60f778f6d1/scripts.yaml#L278)
  - [script.white_lights_bedroom](https://github.com/basnijholt/home-assistant-config/blob/84e08bdddccf8642e6caaa29621ccc60f778f6d1/scripts.yaml#L226)

### [Living room Aqara Wireless Mini Switch](https://github.com/basnijholt/home-assistant-config/blob/e1ac0ba31e87fbe4e7fc9ddafc20681919bfe70e/automations/control_switches.yaml#L259)

  *which uses:*
  - [input_select.last_script_living_room](https://github.com/basnijholt/home-assistant-config/blob/07c0fdd72fdd676ab1b95db36f7baef313f7cff6/includes/input_selects.yaml#L25)
  - [script.fix_sound](https://github.com/basnijholt/home-assistant-config/blob/84e08bdddccf8642e6caaa29621ccc60f778f6d1/scripts.yaml#L449)
  - [script.increase_brightness](https://github.com/basnijholt/home-assistant-config/blob/84e08bdddccf8642e6caaa29621ccc60f778f6d1/scripts.yaml#L240)
  - [script.next_colors](https://github.com/basnijholt/home-assistant-config/blob/84e08bdddccf8642e6caaa29621ccc60f778f6d1/scripts.yaml#L296)

### [Bedroom Aqara Wireless Mini Switch](https://github.com/basnijholt/home-assistant-config/blob/e1ac0ba31e87fbe4e7fc9ddafc20681919bfe70e/automations/control_switches.yaml#L309)

  *which uses:*
  - [input_select.last_script_bedroom](https://github.com/basnijholt/home-assistant-config/blob/07c0fdd72fdd676ab1b95db36f7baef313f7cff6/includes/input_selects.yaml#L31)
  - [input_select.sleep_mode](https://github.com/basnijholt/home-assistant-config/blob/07c0fdd72fdd676ab1b95db36f7baef313f7cff6/includes/input_selects.yaml#L11)
  - [script.increase_brightness](https://github.com/basnijholt/home-assistant-config/blob/84e08bdddccf8642e6caaa29621ccc60f778f6d1/scripts.yaml#L240)
  - [script.next_colors](https://github.com/basnijholt/home-assistant-config/blob/84e08bdddccf8642e6caaa29621ccc60f778f6d1/scripts.yaml#L296)
  - [script.turn_off_everything](https://github.com/basnijholt/home-assistant-config/blob/84e08bdddccf8642e6caaa29621ccc60f778f6d1/scripts.yaml#L278)
  - [sensor.ten_minutes_before_alarm](https://github.com/basnijholt/home-assistant-config/blob/567dbfe1c515c3d63e743ab30b44f0d18d6792c4/includes/sensors.yaml#L241)

### [Bathroom Aqara Wireless Mini Switch](https://github.com/basnijholt/home-assistant-config/blob/e1ac0ba31e87fbe4e7fc9ddafc20681919bfe70e/automations/control_switches.yaml#L395)


### [Door Aqara Wireless Mini Switch](https://github.com/basnijholt/home-assistant-config/blob/e1ac0ba31e87fbe4e7fc9ddafc20681919bfe70e/automations/control_switches.yaml#L418)

  *which uses:*
  - [script.arriving](https://github.com/basnijholt/home-assistant-config/blob/84e08bdddccf8642e6caaa29621ccc60f778f6d1/scripts.yaml#L434)
  - [script.set_low_temperature](https://github.com/basnijholt/home-assistant-config/blob/84e08bdddccf8642e6caaa29621ccc60f778f6d1/scripts.yaml#L401)
  - [script.start_spotify](https://github.com/basnijholt/home-assistant-config/blob/84e08bdddccf8642e6caaa29621ccc60f778f6d1/scripts.yaml#L38)
  - [script.turn_off_everything_non_automatic](https://github.com/basnijholt/home-assistant-config/blob/84e08bdddccf8642e6caaa29621ccc60f778f6d1/scripts.yaml#L263)
  - [sensor.favorite_playlist_of_nearest_person](https://github.com/basnijholt/home-assistant-config/blob/567dbfe1c515c3d63e743ab30b44f0d18d6792c4/includes/sensors.yaml#L75)

### [Guest room IKEA Switch](https://github.com/basnijholt/home-assistant-config/blob/e1ac0ba31e87fbe4e7fc9ddafc20681919bfe70e/automations/control_switches.yaml#L458)


### [Guest Room Light](https://github.com/basnijholt/home-assistant-config/blob/e1ac0ba31e87fbe4e7fc9ddafc20681919bfe70e/automations/control_switches.yaml#L479)


### [Guest Room Space heater](https://github.com/basnijholt/home-assistant-config/blob/e1ac0ba31e87fbe4e7fc9ddafc20681919bfe70e/automations/control_switches.yaml#L501)


### [Baby Room Light](https://github.com/basnijholt/home-assistant-config/blob/e1ac0ba31e87fbe4e7fc9ddafc20681919bfe70e/automations/control_switches.yaml#L517)


### [Mid Room Changing Table Light](https://github.com/basnijholt/home-assistant-config/blob/e1ac0ba31e87fbe4e7fc9ddafc20681919bfe70e/automations/control_switches.yaml#L540)

  *which uses:*
  - [input_select.last_script_living_room](https://github.com/basnijholt/home-assistant-config/blob/07c0fdd72fdd676ab1b95db36f7baef313f7cff6/includes/input_selects.yaml#L25)
  - [script.increase_brightness](https://github.com/basnijholt/home-assistant-config/blob/84e08bdddccf8642e6caaa29621ccc60f778f6d1/scripts.yaml#L240)
  - [script.next_colors](https://github.com/basnijholt/home-assistant-config/blob/84e08bdddccf8642e6caaa29621ccc60f778f6d1/scripts.yaml#L296)

[^ toc](#automations---table-of-content)


## [Cube ∛](https://github.com/basnijholt/home-assistant-config/blob/f7bfc4913cf6e02bc5293357ea6dd41a806b28bb/automations/cube.yaml)
### [Perform operation](https://github.com/basnijholt/home-assistant-config/blob/f7bfc4913cf6e02bc5293357ea6dd41a806b28bb/automations/cube.yaml#L12)

  *which uses:*
  - [input_select.cube_mode](https://github.com/basnijholt/home-assistant-config/blob/07c0fdd72fdd676ab1b95db36f7baef313f7cff6/includes/input_selects.yaml#L18)
  - [script.start_spotify_playlist_of_nearest_person](https://github.com/basnijholt/home-assistant-config/blob/84e08bdddccf8642e6caaa29621ccc60f778f6d1/scripts.yaml#L78)

### [Rotate the cube](https://github.com/basnijholt/home-assistant-config/blob/f7bfc4913cf6e02bc5293357ea6dd41a806b28bb/automations/cube.yaml#L74)

  *which uses:*
  - [input_select.cube_mode](https://github.com/basnijholt/home-assistant-config/blob/07c0fdd72fdd676ab1b95db36f7baef313f7cff6/includes/input_selects.yaml#L18)

[^ toc](#automations---table-of-content)


## [Doorbell 🚪🔔](https://github.com/basnijholt/home-assistant-config/blob/f7bfc4913cf6e02bc5293357ea6dd41a806b28bb/automations/doorbell.yaml)
### [Click the button](https://github.com/basnijholt/home-assistant-config/blob/f7bfc4913cf6e02bc5293357ea6dd41a806b28bb/automations/doorbell.yaml#L11)


[^ toc](#automations---table-of-content)


## [Frontend 👨‍💻](https://github.com/basnijholt/home-assistant-config/blob/896d09e1d72d5a2de280d9b091e72f717846000d/automations/frontend.yaml)
### [Turn on dark mode](https://github.com/basnijholt/home-assistant-config/blob/896d09e1d72d5a2de280d9b091e72f717846000d/automations/frontend.yaml#L11)

  *which uses:*
  - [input_boolean.dark_mode](https://github.com/basnijholt/home-assistant-config/blob/3edc9d32263e8f60edc030c5f3ab8a089c469ea1/includes/input_booleans.yaml#L38)

### [Turn on light mode](https://github.com/basnijholt/home-assistant-config/blob/896d09e1d72d5a2de280d9b091e72f717846000d/automations/frontend.yaml#L22)

  *which uses:*
  - [input_boolean.dark_mode](https://github.com/basnijholt/home-assistant-config/blob/3edc9d32263e8f60edc030c5f3ab8a089c469ea1/includes/input_booleans.yaml#L38)

### [Change theme](https://github.com/basnijholt/home-assistant-config/blob/896d09e1d72d5a2de280d9b091e72f717846000d/automations/frontend.yaml#L33)

  *which uses:*
  - [input_boolean.dark_mode](https://github.com/basnijholt/home-assistant-config/blob/3edc9d32263e8f60edc030c5f3ab8a089c469ea1/includes/input_booleans.yaml#L38)
  - [input_boolean.theme_alternative](https://github.com/basnijholt/home-assistant-config/blob/3edc9d32263e8f60edc030c5f3ab8a089c469ea1/includes/input_booleans.yaml#L41)
  - [input_select.theme](https://github.com/basnijholt/home-assistant-config/blob/07c0fdd72fdd676ab1b95db36f7baef313f7cff6/includes/input_selects.yaml#L46)

[^ toc](#automations---table-of-content)


## [Leaving 👞](https://github.com/basnijholt/home-assistant-config/blob/e1ac0ba31e87fbe4e7fc9ddafc20681919bfe70e/automations/leaving.yaml)
### [Automatically turn off everything](https://github.com/basnijholt/home-assistant-config/blob/e1ac0ba31e87fbe4e7fc9ddafc20681919bfe70e/automations/leaving.yaml#L12)

  *which uses:*
  - [input_boolean.guest_mode](https://github.com/basnijholt/home-assistant-config/blob/3edc9d32263e8f60edc030c5f3ab8a089c469ea1/includes/input_booleans.yaml#L22)
  - [script.leaving](https://github.com/basnijholt/home-assistant-config/blob/84e08bdddccf8642e6caaa29621ccc60f778f6d1/scripts.yaml#L428)
  - [binary_sensor.anything_on](https://github.com/basnijholt/home-assistant-config/blob/7dfb2eb585fcf0287ea163eebc4d3f1d2a5cb515/includes/binary_sensors.yaml#L189)
  - [binary_sensor.no_one_home](https://github.com/basnijholt/home-assistant-config/blob/7dfb2eb585fcf0287ea163eebc4d3f1d2a5cb515/includes/binary_sensors.yaml#L204)
  - [binary_sensor.someone_in_the_house_in_last_hour](https://github.com/basnijholt/home-assistant-config/blob/7dfb2eb585fcf0287ea163eebc4d3f1d2a5cb515/includes/binary_sensors.yaml#L40)

### [Ask to turn off everything](https://github.com/basnijholt/home-assistant-config/blob/e1ac0ba31e87fbe4e7fc9ddafc20681919bfe70e/automations/leaving.yaml#L40)

  *which uses:*
  - [input_boolean.guest_mode](https://github.com/basnijholt/home-assistant-config/blob/3edc9d32263e8f60edc030c5f3ab8a089c469ea1/includes/input_booleans.yaml#L22)
  - [binary_sensor.anything_on](https://github.com/basnijholt/home-assistant-config/blob/7dfb2eb585fcf0287ea163eebc4d3f1d2a5cb515/includes/binary_sensors.yaml#L189)
  - [binary_sensor.no_one_home](https://github.com/basnijholt/home-assistant-config/blob/7dfb2eb585fcf0287ea163eebc4d3f1d2a5cb515/includes/binary_sensors.yaml#L204)

### [Turn off everything after notification](https://github.com/basnijholt/home-assistant-config/blob/e1ac0ba31e87fbe4e7fc9ddafc20681919bfe70e/automations/leaving.yaml#L74)

  *which uses:*
  - [script.leaving](https://github.com/basnijholt/home-assistant-config/blob/84e08bdddccf8642e6caaa29621ccc60f778f6d1/scripts.yaml#L428)

### [Downstairs Aqara Wireless Mini Switch](https://github.com/basnijholt/home-assistant-config/blob/e1ac0ba31e87fbe4e7fc9ddafc20681919bfe70e/automations/leaving.yaml#L84)

  *which uses:*
  - [script.turn_off_everything](https://github.com/basnijholt/home-assistant-config/blob/84e08bdddccf8642e6caaa29621ccc60f778f6d1/scripts.yaml#L278)

[^ toc](#automations---table-of-content)


## [Light 💡](https://github.com/basnijholt/home-assistant-config/blob/683492d3a553269a37fab77f95fe732a27ff9603/automations/light.yaml)
### [Turn on living room](https://github.com/basnijholt/home-assistant-config/blob/683492d3a553269a37fab77f95fe732a27ff9603/automations/light.yaml#L26)

  *which uses:*
  - [input_boolean.guest_mode](https://github.com/basnijholt/home-assistant-config/blob/3edc9d32263e8f60edc030c5f3ab8a089c469ea1/includes/input_booleans.yaml#L22)
  - [binary_sensor.activity_in_living_room](https://github.com/basnijholt/home-assistant-config/blob/7dfb2eb585fcf0287ea163eebc4d3f1d2a5cb515/includes/binary_sensors.yaml#L60)

### [Turn off living room](https://github.com/basnijholt/home-assistant-config/blob/683492d3a553269a37fab77f95fe732a27ff9603/automations/light.yaml#L39)

  *which uses:*
  - [input_boolean.guest_mode](https://github.com/basnijholt/home-assistant-config/blob/3edc9d32263e8f60edc030c5f3ab8a089c469ea1/includes/input_booleans.yaml#L22)
  - [input_select.sleep_mode](https://github.com/basnijholt/home-assistant-config/blob/07c0fdd72fdd676ab1b95db36f7baef313f7cff6/includes/input_selects.yaml#L11)
  - [binary_sensor.activity_in_living_room](https://github.com/basnijholt/home-assistant-config/blob/7dfb2eb585fcf0287ea163eebc4d3f1d2a5cb515/includes/binary_sensors.yaml#L60)

### [Turn on Chrismas tree](https://github.com/basnijholt/home-assistant-config/blob/683492d3a553269a37fab77f95fe732a27ff9603/automations/light.yaml#L55)

  *which uses:*
  - [input_select.sleep_mode](https://github.com/basnijholt/home-assistant-config/blob/07c0fdd72fdd676ab1b95db36f7baef313f7cff6/includes/input_selects.yaml#L11)
  - [binary_sensor.someone_in_the_house_in_last_hour](https://github.com/basnijholt/home-assistant-config/blob/7dfb2eb585fcf0287ea163eebc4d3f1d2a5cb515/includes/binary_sensors.yaml#L40)

### [Turn off Chrismas tree](https://github.com/basnijholt/home-assistant-config/blob/683492d3a553269a37fab77f95fe732a27ff9603/automations/light.yaml#L73)

  *which uses:*
  - [input_select.sleep_mode](https://github.com/basnijholt/home-assistant-config/blob/07c0fdd72fdd676ab1b95db36f7baef313f7cff6/includes/input_selects.yaml#L11)
  - [binary_sensor.someone_in_the_house_in_last_hour](https://github.com/basnijholt/home-assistant-config/blob/7dfb2eb585fcf0287ea163eebc4d3f1d2a5cb515/includes/binary_sensors.yaml#L40)

### [Toggle dinner area lights](https://github.com/basnijholt/home-assistant-config/blob/683492d3a553269a37fab77f95fe732a27ff9603/automations/light.yaml#L92)

  *which uses:*
  - [input_boolean.automatic_dinner_area_light](https://github.com/basnijholt/home-assistant-config/blob/3edc9d32263e8f60edc030c5f3ab8a089c469ea1/includes/input_booleans.yaml#L46)
  - [input_boolean.guest_mode](https://github.com/basnijholt/home-assistant-config/blob/3edc9d32263e8f60edc030c5f3ab8a089c469ea1/includes/input_booleans.yaml#L22)
  - [input_select.sleep_mode](https://github.com/basnijholt/home-assistant-config/blob/07c0fdd72fdd676ab1b95db36f7baef313f7cff6/includes/input_selects.yaml#L11)
  - [binary_sensor.activity_in_dinner_area](https://github.com/basnijholt/home-assistant-config/blob/7dfb2eb585fcf0287ea163eebc4d3f1d2a5cb515/includes/binary_sensors.yaml#L54)

### [Turn off automatic dinner area lights when turning off lights after 18:00](https://github.com/basnijholt/home-assistant-config/blob/683492d3a553269a37fab77f95fe732a27ff9603/automations/light.yaml#L111)

  *which uses:*
  - [input_boolean.automatic_dinner_area_light](https://github.com/basnijholt/home-assistant-config/blob/3edc9d32263e8f60edc030c5f3ab8a089c469ea1/includes/input_booleans.yaml#L46)

### [Reset automatic dinner area lights at 06:00](https://github.com/basnijholt/home-assistant-config/blob/683492d3a553269a37fab77f95fe732a27ff9603/automations/light.yaml#L126)

  *which uses:*
  - [input_boolean.automatic_dinner_area_light](https://github.com/basnijholt/home-assistant-config/blob/3edc9d32263e8f60edc030c5f3ab8a089c469ea1/includes/input_booleans.yaml#L46)

### [Turn on kitchen counter if sleep mode is off](https://github.com/basnijholt/home-assistant-config/blob/683492d3a553269a37fab77f95fe732a27ff9603/automations/light.yaml#L134)

  *which uses:*
  - [input_select.sleep_mode](https://github.com/basnijholt/home-assistant-config/blob/07c0fdd72fdd676ab1b95db36f7baef313f7cff6/includes/input_selects.yaml#L11)
  - [binary_sensor.activity_in_kitchen](https://github.com/basnijholt/home-assistant-config/blob/7dfb2eb585fcf0287ea163eebc4d3f1d2a5cb515/includes/binary_sensors.yaml#L71)

### [Turn off kitchen counter](https://github.com/basnijholt/home-assistant-config/blob/683492d3a553269a37fab77f95fe732a27ff9603/automations/light.yaml#L149)

  *which uses:*
  - [binary_sensor.activity_in_kitchen](https://github.com/basnijholt/home-assistant-config/blob/7dfb2eb585fcf0287ea163eebc4d3f1d2a5cb515/includes/binary_sensors.yaml#L71)

### [Reboot kitchen ceiling Shelly](https://github.com/basnijholt/home-assistant-config/blob/683492d3a553269a37fab77f95fe732a27ff9603/automations/light.yaml#L158)

  *which uses:*
  - [shell_command.reboot_kitchen_ceiling](https://github.com/basnijholt/home-assistant-config/blob/0a49b1ab897f8dbc068b042f4e6c2ba0e4cb3d8f/includes/shell_commands.yaml#L14)

### [Turn on bathroom](https://github.com/basnijholt/home-assistant-config/blob/683492d3a553269a37fab77f95fe732a27ff9603/automations/light.yaml#L172)

  *which uses:*
  - [input_select.sleep_mode](https://github.com/basnijholt/home-assistant-config/blob/07c0fdd72fdd676ab1b95db36f7baef313f7cff6/includes/input_selects.yaml#L11)
  - [binary_sensor.activity_in_bathroom](https://github.com/basnijholt/home-assistant-config/blob/7dfb2eb585fcf0287ea163eebc4d3f1d2a5cb515/includes/binary_sensors.yaml#L46)

### [Turn off bathroom](https://github.com/basnijholt/home-assistant-config/blob/683492d3a553269a37fab77f95fe732a27ff9603/automations/light.yaml#L184)

  *which uses:*
  - [binary_sensor.activity_in_bathroom](https://github.com/basnijholt/home-assistant-config/blob/7dfb2eb585fcf0287ea163eebc4d3f1d2a5cb515/includes/binary_sensors.yaml#L46)

### [Turn on hall](https://github.com/basnijholt/home-assistant-config/blob/683492d3a553269a37fab77f95fe732a27ff9603/automations/light.yaml#L201)

  *which uses:*
  - [input_select.sleep_mode](https://github.com/basnijholt/home-assistant-config/blob/07c0fdd72fdd676ab1b95db36f7baef313f7cff6/includes/input_selects.yaml#L11)
  - [script.turn_on_lights](https://github.com/basnijholt/home-assistant-config/blob/84e08bdddccf8642e6caaa29621ccc60f778f6d1/scripts.yaml#L622)
  - [binary_sensor.activity_in_hall](https://github.com/basnijholt/home-assistant-config/blob/7dfb2eb585fcf0287ea163eebc4d3f1d2a5cb515/includes/binary_sensors.yaml#L85)

### [Turn off hall](https://github.com/basnijholt/home-assistant-config/blob/683492d3a553269a37fab77f95fe732a27ff9603/automations/light.yaml#L231)

  *which uses:*
  - [binary_sensor.activity_in_hall](https://github.com/basnijholt/home-assistant-config/blob/7dfb2eb585fcf0287ea163eebc4d3f1d2a5cb515/includes/binary_sensors.yaml#L85)

### [Automatically turn on the bedroom](https://github.com/basnijholt/home-assistant-config/blob/683492d3a553269a37fab77f95fe732a27ff9603/automations/light.yaml#L251)

  *which uses:*
  - [input_boolean.automatic_bedroom_lights](https://github.com/basnijholt/home-assistant-config/blob/3edc9d32263e8f60edc030c5f3ab8a089c469ea1/includes/input_booleans.yaml#L43)
  - [input_boolean.bedroom_lights_automatically_turned_on](https://github.com/basnijholt/home-assistant-config/blob/3edc9d32263e8f60edc030c5f3ab8a089c469ea1/includes/input_booleans.yaml#L34)
  - [input_select.sleep_mode](https://github.com/basnijholt/home-assistant-config/blob/07c0fdd72fdd676ab1b95db36f7baef313f7cff6/includes/input_selects.yaml#L11)
  - [script.turn_on_lights](https://github.com/basnijholt/home-assistant-config/blob/84e08bdddccf8642e6caaa29621ccc60f778f6d1/scripts.yaml#L622)
  - [binary_sensor.activity_in_master_bedroom](https://github.com/basnijholt/home-assistant-config/blob/7dfb2eb585fcf0287ea163eebc4d3f1d2a5cb515/includes/binary_sensors.yaml#L92)

### [Automatically turn off the bedroom](https://github.com/basnijholt/home-assistant-config/blob/683492d3a553269a37fab77f95fe732a27ff9603/automations/light.yaml#L281)

  *which uses:*
  - [input_boolean.automatic_bedroom_lights](https://github.com/basnijholt/home-assistant-config/blob/3edc9d32263e8f60edc030c5f3ab8a089c469ea1/includes/input_booleans.yaml#L43)
  - [input_boolean.bedroom_lights_automatically_turned_on](https://github.com/basnijholt/home-assistant-config/blob/3edc9d32263e8f60edc030c5f3ab8a089c469ea1/includes/input_booleans.yaml#L34)
  - [binary_sensor.activity_in_master_bedroom](https://github.com/basnijholt/home-assistant-config/blob/7dfb2eb585fcf0287ea163eebc4d3f1d2a5cb515/includes/binary_sensors.yaml#L92)

### [Turn off bedroom lights auto switch](https://github.com/basnijholt/home-assistant-config/blob/683492d3a553269a37fab77f95fe732a27ff9603/automations/light.yaml#L304)

  *which uses:*
  - [input_boolean.bedroom_lights_automatically_turned_on](https://github.com/basnijholt/home-assistant-config/blob/3edc9d32263e8f60edc030c5f3ab8a089c469ea1/includes/input_booleans.yaml#L34)

### [Turn on automatic_bedroom_lights switch](https://github.com/basnijholt/home-assistant-config/blob/683492d3a553269a37fab77f95fe732a27ff9603/automations/light.yaml#L330)

  *which uses:*
  - [input_boolean.automatic_bedroom_lights](https://github.com/basnijholt/home-assistant-config/blob/3edc9d32263e8f60edc030c5f3ab8a089c469ea1/includes/input_booleans.yaml#L43)

### [Turn off bedroom after 2 hours of inactivity](https://github.com/basnijholt/home-assistant-config/blob/683492d3a553269a37fab77f95fe732a27ff9603/automations/light.yaml#L338)

  *which uses:*
  - [binary_sensor.activity_in_master_bedroom](https://github.com/basnijholt/home-assistant-config/blob/7dfb2eb585fcf0287ea163eebc4d3f1d2a5cb515/includes/binary_sensors.yaml#L92)

### [Reboot bedroom ceiling Shelly](https://github.com/basnijholt/home-assistant-config/blob/683492d3a553269a37fab77f95fe732a27ff9603/automations/light.yaml#L351)

  *which uses:*
  - [shell_command.reboot_bedroom_ceiling](https://github.com/basnijholt/home-assistant-config/blob/0a49b1ab897f8dbc068b042f4e6c2ba0e4cb3d8f/includes/shell_commands.yaml#L15)

### [Update input_select when bedroom lights turned off](https://github.com/basnijholt/home-assistant-config/blob/683492d3a553269a37fab77f95fe732a27ff9603/automations/light.yaml#L358)

  Set the input_select.last_script_bedroom such that colored lights will be chosen

  *which uses:*
  - [input_select.last_script_bedroom](https://github.com/basnijholt/home-assistant-config/blob/07c0fdd72fdd676ab1b95db36f7baef313f7cff6/includes/input_selects.yaml#L31)
  - [script.white_lights_bedroom](https://github.com/basnijholt/home-assistant-config/blob/84e08bdddccf8642e6caaa29621ccc60f778f6d1/scripts.yaml#L226)

### [Turn on utility room / garage outside](https://github.com/basnijholt/home-assistant-config/blob/683492d3a553269a37fab77f95fe732a27ff9603/automations/light.yaml#L384)

  *which uses:*
  - [binary_sensor.activity_in_utility_room](https://github.com/basnijholt/home-assistant-config/blob/7dfb2eb585fcf0287ea163eebc4d3f1d2a5cb515/includes/binary_sensors.yaml#L77)
  - [binary_sensor.activity_outside_front_door](https://github.com/basnijholt/home-assistant-config/blob/7dfb2eb585fcf0287ea163eebc4d3f1d2a5cb515/includes/binary_sensors.yaml#L114)
  - [binary_sensor.activity_outside_garage](https://github.com/basnijholt/home-assistant-config/blob/7dfb2eb585fcf0287ea163eebc4d3f1d2a5cb515/includes/binary_sensors.yaml#L121)

### [Turn off utility room / garage outside](https://github.com/basnijholt/home-assistant-config/blob/683492d3a553269a37fab77f95fe732a27ff9603/automations/light.yaml#L413)

  *which uses:*
  - [binary_sensor.activity_in_utility_room](https://github.com/basnijholt/home-assistant-config/blob/7dfb2eb585fcf0287ea163eebc4d3f1d2a5cb515/includes/binary_sensors.yaml#L77)
  - [binary_sensor.activity_outside_front_door](https://github.com/basnijholt/home-assistant-config/blob/7dfb2eb585fcf0287ea163eebc4d3f1d2a5cb515/includes/binary_sensors.yaml#L114)
  - [binary_sensor.activity_outside_garage](https://github.com/basnijholt/home-assistant-config/blob/7dfb2eb585fcf0287ea163eebc4d3f1d2a5cb515/includes/binary_sensors.yaml#L121)
  - [binary_sensor.activity_outside_house](https://github.com/basnijholt/home-assistant-config/blob/7dfb2eb585fcf0287ea163eebc4d3f1d2a5cb515/includes/binary_sensors.yaml#L128)

### [Turn on the outside front light](https://github.com/basnijholt/home-assistant-config/blob/683492d3a553269a37fab77f95fe732a27ff9603/automations/light.yaml#L440)


### [Turn off the outside front light](https://github.com/basnijholt/home-assistant-config/blob/683492d3a553269a37fab77f95fe732a27ff9603/automations/light.yaml#L452)


### [Toggle guest room](https://github.com/basnijholt/home-assistant-config/blob/683492d3a553269a37fab77f95fe732a27ff9603/automations/light.yaml#L470)

  *which uses:*
  - [input_boolean.guest_mode](https://github.com/basnijholt/home-assistant-config/blob/3edc9d32263e8f60edc030c5f3ab8a089c469ea1/includes/input_booleans.yaml#L22)
  - [binary_sensor.activity_in_guest_room](https://github.com/basnijholt/home-assistant-config/blob/7dfb2eb585fcf0287ea163eebc4d3f1d2a5cb515/includes/binary_sensors.yaml#L106)

### [Toggle baby room](https://github.com/basnijholt/home-assistant-config/blob/683492d3a553269a37fab77f95fe732a27ff9603/automations/light.yaml#L491)

  *which uses:*
  - [binary_sensor.activity_in_baby_room](https://github.com/basnijholt/home-assistant-config/blob/7dfb2eb585fcf0287ea163eebc4d3f1d2a5cb515/includes/binary_sensors.yaml#L99)

### [Turn off living room (extra check)](https://github.com/basnijholt/home-assistant-config/blob/683492d3a553269a37fab77f95fe732a27ff9603/automations/light.yaml#L509)

  In case the other automation failed

  *which uses:*
  - [binary_sensor.activity_in_living_room](https://github.com/basnijholt/home-assistant-config/blob/7dfb2eb585fcf0287ea163eebc4d3f1d2a5cb515/includes/binary_sensors.yaml#L60)

### [Turn off guest room (extra check)](https://github.com/basnijholt/home-assistant-config/blob/683492d3a553269a37fab77f95fe732a27ff9603/automations/light.yaml#L525)

  In case the other automation failed

  *which uses:*
  - [binary_sensor.activity_in_guest_room](https://github.com/basnijholt/home-assistant-config/blob/7dfb2eb585fcf0287ea163eebc4d3f1d2a5cb515/includes/binary_sensors.yaml#L106)

### [Turn off baby room (extra check)](https://github.com/basnijholt/home-assistant-config/blob/683492d3a553269a37fab77f95fe732a27ff9603/automations/light.yaml#L541)

  In case the other automation failed

  *which uses:*
  - [binary_sensor.activity_in_baby_room](https://github.com/basnijholt/home-assistant-config/blob/7dfb2eb585fcf0287ea163eebc4d3f1d2a5cb515/includes/binary_sensors.yaml#L99)

### [Turn off bedroom (extra check)](https://github.com/basnijholt/home-assistant-config/blob/683492d3a553269a37fab77f95fe732a27ff9603/automations/light.yaml#L563)

  In case the other automation failed

  *which uses:*
  - [input_boolean.automatic_bedroom_lights](https://github.com/basnijholt/home-assistant-config/blob/3edc9d32263e8f60edc030c5f3ab8a089c469ea1/includes/input_booleans.yaml#L43)
  - [input_boolean.bedroom_lights_automatically_turned_on](https://github.com/basnijholt/home-assistant-config/blob/3edc9d32263e8f60edc030c5f3ab8a089c469ea1/includes/input_booleans.yaml#L34)
  - [binary_sensor.activity_in_master_bedroom](https://github.com/basnijholt/home-assistant-config/blob/7dfb2eb585fcf0287ea163eebc4d3f1d2a5cb515/includes/binary_sensors.yaml#L92)

### [Turn off utility room / garage (extra check)](https://github.com/basnijholt/home-assistant-config/blob/683492d3a553269a37fab77f95fe732a27ff9603/automations/light.yaml#L584)

  In case the other automation failed

  *which uses:*
  - [binary_sensor.activity_in_utility_room](https://github.com/basnijholt/home-assistant-config/blob/7dfb2eb585fcf0287ea163eebc4d3f1d2a5cb515/includes/binary_sensors.yaml#L77)
  - [binary_sensor.activity_outside_front_door](https://github.com/basnijholt/home-assistant-config/blob/7dfb2eb585fcf0287ea163eebc4d3f1d2a5cb515/includes/binary_sensors.yaml#L114)
  - [binary_sensor.activity_outside_garage](https://github.com/basnijholt/home-assistant-config/blob/7dfb2eb585fcf0287ea163eebc4d3f1d2a5cb515/includes/binary_sensors.yaml#L121)

### [Update Zigbee2MQTT lights input_select options](https://github.com/basnijholt/home-assistant-config/blob/683492d3a553269a37fab77f95fe732a27ff9603/automations/light.yaml#L617)

  *which uses:*
  - [input_select.z2m_lights](https://github.com/basnijholt/home-assistant-config/blob/07c0fdd72fdd676ab1b95db36f7baef313f7cff6/includes/input_selects.yaml#L57)

### [Update Zigbee2MQTT Lights State](https://github.com/basnijholt/home-assistant-config/blob/683492d3a553269a37fab77f95fe732a27ff9603/automations/light.yaml#L644)

  Refresh the state of all Zigbee2MQTT lights

  *which uses:*
  - [script.sync_z2m_to_ha_lights](https://github.com/basnijholt/home-assistant-config/blob/84e08bdddccf8642e6caaa29621ccc60f778f6d1/scripts.yaml#L661)

[^ toc](#automations---table-of-content)


## [Lovelace 👨‍💻](https://github.com/basnijholt/home-assistant-config/blob/896d09e1d72d5a2de280d9b091e72f717846000d/automations/lovelace.yaml)
### [Convert lovelace.json to lovelace-ui.yaml](https://github.com/basnijholt/home-assistant-config/blob/896d09e1d72d5a2de280d9b091e72f717846000d/automations/lovelace.yaml#L11)

  *which uses:*
  - [shell_command.chores](https://github.com/basnijholt/home-assistant-config/blob/0a49b1ab897f8dbc068b042f4e6c2ba0e4cb3d8f/includes/shell_commands.yaml#L13)
  - [shell_command.convert_lovelace](https://github.com/basnijholt/home-assistant-config/blob/0a49b1ab897f8dbc068b042f4e6c2ba0e4cb3d8f/includes/shell_commands.yaml#L11)

[^ toc](#automations---table-of-content)


## [Mailbox 📫📣](https://github.com/basnijholt/home-assistant-config/blob/896d09e1d72d5a2de280d9b091e72f717846000d/automations/mailbox.yaml)
### [The mailbox was opened](https://github.com/basnijholt/home-assistant-config/blob/896d09e1d72d5a2de280d9b091e72f717846000d/automations/mailbox.yaml#L11)

  In the UI show the `input_boolean.mailbox_full`. It needs to
be manually switched off after getting the mail."


  *which uses:*
  - [input_boolean.mailbox_full](https://github.com/basnijholt/home-assistant-config/blob/3edc9d32263e8f60edc030c5f3ab8a089c469ea1/includes/input_booleans.yaml#L70)

[^ toc](#automations---table-of-content)


## [Media player 🔈📺](https://github.com/basnijholt/home-assistant-config/blob/f7bfc4913cf6e02bc5293357ea6dd41a806b28bb/automations/media_player.yaml)
### [Turn on Opt when TV is on and Spotify is not playing and not Usb](https://github.com/basnijholt/home-assistant-config/blob/f7bfc4913cf6e02bc5293357ea6dd41a806b28bb/automations/media_player.yaml#L12)

  The speaker is connected via an optical cable to the TV. Whenever the speakers
aren't playing Spotify (via WiFi) directly, switch the source of the speakers
to "Opt".



### [Turn off speakers when turning off TV](https://github.com/basnijholt/home-assistant-config/blob/f7bfc4913cf6e02bc5293357ea6dd41a806b28bb/automations/media_player.yaml#L42)


### [If speakers off and TV on, turn on the speaker on TV state change](https://github.com/basnijholt/home-assistant-config/blob/f7bfc4913cf6e02bc5293357ea6dd41a806b28bb/automations/media_player.yaml#L61)


### [Update Spotify entity when TV is on every 5 seconds](https://github.com/basnijholt/home-assistant-config/blob/f7bfc4913cf6e02bc5293357ea6dd41a806b28bb/automations/media_player.yaml#L85)


### [Sync KEF LS50 and TV volume](https://github.com/basnijholt/home-assistant-config/blob/f7bfc4913cf6e02bc5293357ea6dd41a806b28bb/automations/media_player.yaml#L100)


### [Automatically turn off TV and Xbox after two hours of inactivity](https://github.com/basnijholt/home-assistant-config/blob/f7bfc4913cf6e02bc5293357ea6dd41a806b28bb/automations/media_player.yaml#L129)


### [Turn On Living Room TV with WakeOnLan](https://github.com/basnijholt/home-assistant-config/blob/f7bfc4913cf6e02bc5293357ea6dd41a806b28bb/automations/media_player.yaml#L141)


[^ toc](#automations---table-of-content)


## [Music 🎵](https://github.com/basnijholt/home-assistant-config/blob/567dbfe1c515c3d63e743ab30b44f0d18d6792c4/automations/music.yaml)
### [Start playlist](https://github.com/basnijholt/home-assistant-config/blob/567dbfe1c515c3d63e743ab30b44f0d18d6792c4/automations/music.yaml#L11)

  *which uses:*
  - [input_boolean.start_the_music](https://github.com/basnijholt/home-assistant-config/blob/3edc9d32263e8f60edc030c5f3ab8a089c469ea1/includes/input_booleans.yaml#L12)
  - [script.start_spotify_playlist_of_nearest_person](https://github.com/basnijholt/home-assistant-config/blob/84e08bdddccf8642e6caaa29621ccc60f778f6d1/scripts.yaml#L78)

### [Switch music from iPhone to speakers if coming home](https://github.com/basnijholt/home-assistant-config/blob/567dbfe1c515c3d63e743ab30b44f0d18d6792c4/automations/music.yaml#L26)

  *which uses:*
  - [input_boolean.guest_mode](https://github.com/basnijholt/home-assistant-config/blob/3edc9d32263e8f60edc030c5f3ab8a089c469ea1/includes/input_booleans.yaml#L22)

[^ toc](#automations---table-of-content)


## [Notifications 🔔](https://github.com/basnijholt/home-assistant-config/blob/e1ac0ba31e87fbe4e7fc9ddafc20681919bfe70e/automations/notifications.yaml)
### [Marcella leaving work](https://github.com/basnijholt/home-assistant-config/blob/e1ac0ba31e87fbe4e7fc9ddafc20681919bfe70e/automations/notifications.yaml#L12)


### [Front door has opened](https://github.com/basnijholt/home-assistant-config/blob/e1ac0ba31e87fbe4e7fc9ddafc20681919bfe70e/automations/notifications.yaml#L23)

  *which uses:*
  - [input_boolean.front_door_open_warning](https://github.com/basnijholt/home-assistant-config/blob/3edc9d32263e8f60edc030c5f3ab8a089c469ea1/includes/input_booleans.yaml#L28)

### [Daily New Word Notification](https://github.com/basnijholt/home-assistant-config/blob/e1ac0ba31e87fbe4e7fc9ddafc20681919bfe70e/automations/notifications.yaml#L44)


[^ toc](#automations---table-of-content)


## [Plant 🌱](https://github.com/basnijholt/home-assistant-config/blob/f7bfc4913cf6e02bc5293357ea6dd41a806b28bb/automations/plant.yaml)
### [Problem with Calathea](https://github.com/basnijholt/home-assistant-config/blob/f7bfc4913cf6e02bc5293357ea6dd41a806b28bb/automations/plant.yaml#L11)

  *which uses:*
  - [plant.calathea](https://github.com/basnijholt/home-assistant-config/blob/1666298c45087e81b26e8517f03c61c5e1c92ed9/includes/plant.yaml#L57)

### [Problem with Monstera](https://github.com/basnijholt/home-assistant-config/blob/f7bfc4913cf6e02bc5293357ea6dd41a806b28bb/automations/plant.yaml#L29)

  *which uses:*
  - [plant.monstera](https://github.com/basnijholt/home-assistant-config/blob/1666298c45087e81b26e8517f03c61c5e1c92ed9/includes/plant.yaml#L40)

### [Problem with Peace lily](https://github.com/basnijholt/home-assistant-config/blob/f7bfc4913cf6e02bc5293357ea6dd41a806b28bb/automations/plant.yaml#L47)

  *which uses:*
  - [plant.peace_lily](https://github.com/basnijholt/home-assistant-config/blob/1666298c45087e81b26e8517f03c61c5e1c92ed9/includes/plant.yaml#L73)

[^ toc](#automations---table-of-content)


## [Security 👮🚨](https://github.com/basnijholt/home-assistant-config/blob/e1ac0ba31e87fbe4e7fc9ddafc20681919bfe70e/automations/security.yaml)
### [Motion detected but we are not home](https://github.com/basnijholt/home-assistant-config/blob/e1ac0ba31e87fbe4e7fc9ddafc20681919bfe70e/automations/security.yaml#L11)

  *which uses:*
  - [binary_sensor.motion_detected](https://github.com/basnijholt/home-assistant-config/blob/7dfb2eb585fcf0287ea163eebc4d3f1d2a5cb515/includes/binary_sensors.yaml#L22)
  - [group.persons](https://github.com/basnijholt/home-assistant-config/blob/6bab64cd641699f47bb147f03af01022699eeecb/includes/groups.yaml#L11)

### [Front door has been open for more than 5 minutes](https://github.com/basnijholt/home-assistant-config/blob/e1ac0ba31e87fbe4e7fc9ddafc20681919bfe70e/automations/security.yaml#L48)


### [Utility room door has been open for more than 5 minutes](https://github.com/basnijholt/home-assistant-config/blob/e1ac0ba31e87fbe4e7fc9ddafc20681919bfe70e/automations/security.yaml#L61)


### [No one is home but high power usage](https://github.com/basnijholt/home-assistant-config/blob/e1ac0ba31e87fbe4e7fc9ddafc20681919bfe70e/automations/security.yaml#L74)

  *which uses:*
  - [binary_sensor.no_one_home](https://github.com/basnijholt/home-assistant-config/blob/7dfb2eb585fcf0287ea163eebc4d3f1d2a5cb515/includes/binary_sensors.yaml#L204)

### [Bathroom door has opened](https://github.com/basnijholt/home-assistant-config/blob/e1ac0ba31e87fbe4e7fc9ddafc20681919bfe70e/automations/security.yaml#L96)

  *which uses:*
  - [input_boolean.bathroom_door_open_warning](https://github.com/basnijholt/home-assistant-config/blob/3edc9d32263e8f60edc030c5f3ab8a089c469ea1/includes/input_booleans.yaml#L25)

### [Activity in master bedroom](https://github.com/basnijholt/home-assistant-config/blob/e1ac0ba31e87fbe4e7fc9ddafc20681919bfe70e/automations/security.yaml#L123)

  *which uses:*
  - [input_boolean.bedroom_activity_warning](https://github.com/basnijholt/home-assistant-config/blob/3edc9d32263e8f60edc030c5f3ab8a089c469ea1/includes/input_booleans.yaml#L31)
  - [binary_sensor.activity_in_master_bedroom](https://github.com/basnijholt/home-assistant-config/blob/7dfb2eb585fcf0287ea163eebc4d3f1d2a5cb515/includes/binary_sensors.yaml#L92)

### [Door to outside open](https://github.com/basnijholt/home-assistant-config/blob/e1ac0ba31e87fbe4e7fc9ddafc20681919bfe70e/automations/security.yaml#L148)

  

  *which uses:*
  - [binary_sensor.door_to_outside_open](https://github.com/basnijholt/home-assistant-config/blob/7dfb2eb585fcf0287ea163eebc4d3f1d2a5cb515/includes/binary_sensors.yaml#L145)

[^ toc](#automations---table-of-content)


## [Night mode 🌕🌑](https://github.com/basnijholt/home-assistant-config/blob/f7bfc4913cf6e02bc5293357ea6dd41a806b28bb/automations/sleep_mode.yaml)
### [Automatically turn off when alarm turns off or at 7AM](https://github.com/basnijholt/home-assistant-config/blob/f7bfc4913cf6e02bc5293357ea6dd41a806b28bb/automations/sleep_mode.yaml#L12)

  *which uses:*
  - [input_boolean.alarm_clock](https://github.com/basnijholt/home-assistant-config/blob/3edc9d32263e8f60edc030c5f3ab8a089c469ea1/includes/input_booleans.yaml#L55)
  - [input_select.sleep_mode](https://github.com/basnijholt/home-assistant-config/blob/07c0fdd72fdd676ab1b95db36f7baef313f7cff6/includes/input_selects.yaml#L11)

### [Turn off automatic bedroom lights](https://github.com/basnijholt/home-assistant-config/blob/f7bfc4913cf6e02bc5293357ea6dd41a806b28bb/automations/sleep_mode.yaml#L30)

  *which uses:*
  - [input_boolean.automatic_bedroom_lights](https://github.com/basnijholt/home-assistant-config/blob/3edc9d32263e8f60edc030c5f3ab8a089c469ea1/includes/input_booleans.yaml#L43)
  - [input_select.sleep_mode](https://github.com/basnijholt/home-assistant-config/blob/07c0fdd72fdd676ab1b95db36f7baef313f7cff6/includes/input_selects.yaml#L11)

### [Set low temperature when sleep mode turns on](https://github.com/basnijholt/home-assistant-config/blob/f7bfc4913cf6e02bc5293357ea6dd41a806b28bb/automations/sleep_mode.yaml#L39)

  *which uses:*
  - [input_select.sleep_mode](https://github.com/basnijholt/home-assistant-config/blob/07c0fdd72fdd676ab1b95db36f7baef313f7cff6/includes/input_selects.yaml#L11)
  - [script.set_low_temperature](https://github.com/basnijholt/home-assistant-config/blob/84e08bdddccf8642e6caaa29621ccc60f778f6d1/scripts.yaml#L401)

### [Go from half to total sleeping mode](https://github.com/basnijholt/home-assistant-config/blob/f7bfc4913cf6e02bc5293357ea6dd41a806b28bb/automations/sleep_mode.yaml#L47)

  When it is half sleeping mode and there is no activity in the house for more than an hour go to total sleeping mode.


  *which uses:*
  - [input_select.sleep_mode](https://github.com/basnijholt/home-assistant-config/blob/07c0fdd72fdd676ab1b95db36f7baef313f7cff6/includes/input_selects.yaml#L11)
  - [binary_sensor.activity_outside_bedroom](https://github.com/basnijholt/home-assistant-config/blob/7dfb2eb585fcf0287ea163eebc4d3f1d2a5cb515/includes/binary_sensors.yaml#L135)

### [Set sleeping mode in the living room](https://github.com/basnijholt/home-assistant-config/blob/f7bfc4913cf6e02bc5293357ea6dd41a806b28bb/automations/sleep_mode.yaml#L70)

  Set the living room lights to sleep mode only when no-one is there anymore.


  *which uses:*
  - [input_select.sleep_mode](https://github.com/basnijholt/home-assistant-config/blob/07c0fdd72fdd676ab1b95db36f7baef313f7cff6/includes/input_selects.yaml#L11)
  - [binary_sensor.activity_in_living_room](https://github.com/basnijholt/home-assistant-config/blob/7dfb2eb585fcf0287ea163eebc4d3f1d2a5cb515/includes/binary_sensors.yaml#L60)

[^ toc](#automations---table-of-content)


## [System 🖥](https://github.com/basnijholt/home-assistant-config/blob/896d09e1d72d5a2de280d9b091e72f717846000d/automations/system.yaml)
### [Warning about high CPU usage](https://github.com/basnijholt/home-assistant-config/blob/896d09e1d72d5a2de280d9b091e72f717846000d/automations/system.yaml#L11)


### [Warning about high CPU temperature](https://github.com/basnijholt/home-assistant-config/blob/896d09e1d72d5a2de280d9b091e72f717846000d/automations/system.yaml#L24)


### [Warning about high Xbox temperature](https://github.com/basnijholt/home-assistant-config/blob/896d09e1d72d5a2de280d9b091e72f717846000d/automations/system.yaml#L37)


### [Update DNS](https://github.com/basnijholt/home-assistant-config/blob/896d09e1d72d5a2de280d9b091e72f717846000d/automations/system.yaml#L56)

  Update the DNS at Gandi to point my domain to my Home Assistant instance.

  *which uses:*
  - [script.update_dns](https://github.com/basnijholt/home-assistant-config/blob/84e08bdddccf8642e6caaa29621ccc60f778f6d1/scripts.yaml#L440)

### [Run chores](https://github.com/basnijholt/home-assistant-config/blob/896d09e1d72d5a2de280d9b091e72f717846000d/automations/system.yaml#L64)

  Run shell and Python scripts in utils folder.

  *which uses:*
  - [shell_command.chores](https://github.com/basnijholt/home-assistant-config/blob/0a49b1ab897f8dbc068b042f4e6c2ba0e4cb3d8f/includes/shell_commands.yaml#L13)

### [MQTT sensors are not updating](https://github.com/basnijholt/home-assistant-config/blob/896d09e1d72d5a2de280d9b091e72f717846000d/automations/system.yaml#L72)

  Check whether we are receiving messages over MQTT from my other HA instance.


### [Battery level low](https://github.com/basnijholt/home-assistant-config/blob/896d09e1d72d5a2de280d9b091e72f717846000d/automations/system.yaml#L85)


[^ toc](#automations---table-of-content)


## [Test 🧪](https://github.com/basnijholt/home-assistant-config/blob/896d09e1d72d5a2de280d9b091e72f717846000d/automations/test.yaml)
### [Listen to Adaptive Lighting events](https://github.com/basnijholt/home-assistant-config/blob/896d09e1d72d5a2de280d9b091e72f717846000d/automations/test.yaml#L11)


### [Time](https://github.com/basnijholt/home-assistant-config/blob/896d09e1d72d5a2de280d9b091e72f717846000d/automations/test.yaml#L30)


### [Flash lights](https://github.com/basnijholt/home-assistant-config/blob/896d09e1d72d5a2de280d9b091e72f717846000d/automations/test.yaml#L43)


### [Call update_entity after light.turn_on/turn_off](https://github.com/basnijholt/home-assistant-config/blob/896d09e1d72d5a2de280d9b091e72f717846000d/automations/test.yaml#L64)


### [Light Baby Room Loop](https://github.com/basnijholt/home-assistant-config/blob/896d09e1d72d5a2de280d9b091e72f717846000d/automations/test.yaml#L84)


[^ toc](#automations---table-of-content)


## [Utilities 🧺👚🍽](https://github.com/basnijholt/home-assistant-config/blob/896d09e1d72d5a2de280d9b091e72f717846000d/automations/utilities.yaml)
### [Washing machine or dishwasher started or finished](https://github.com/basnijholt/home-assistant-config/blob/896d09e1d72d5a2de280d9b091e72f717846000d/automations/utilities.yaml#L12)

  *which uses:*
  - [binary_sensor.dishwasher](https://github.com/basnijholt/home-assistant-config/blob/7dfb2eb585fcf0287ea163eebc4d3f1d2a5cb515/includes/binary_sensors.yaml#L163)
  - [binary_sensor.washing_machine](https://github.com/basnijholt/home-assistant-config/blob/7dfb2eb585fcf0287ea163eebc4d3f1d2a5cb515/includes/binary_sensors.yaml#L151)

### [Washing machine notification](https://github.com/basnijholt/home-assistant-config/blob/896d09e1d72d5a2de280d9b091e72f717846000d/automations/utilities.yaml#L29)

  *which uses:*
  - [script.utility_notification](https://github.com/basnijholt/home-assistant-config/blob/84e08bdddccf8642e6caaa29621ccc60f778f6d1/scripts.yaml#L523)
  - [binary_sensor.washing_machine](https://github.com/basnijholt/home-assistant-config/blob/7dfb2eb585fcf0287ea163eebc4d3f1d2a5cb515/includes/binary_sensors.yaml#L151)

### [Dishwasher notification](https://github.com/basnijholt/home-assistant-config/blob/896d09e1d72d5a2de280d9b091e72f717846000d/automations/utilities.yaml#L41)

  *which uses:*
  - [script.utility_notification](https://github.com/basnijholt/home-assistant-config/blob/84e08bdddccf8642e6caaa29621ccc60f778f6d1/scripts.yaml#L523)
  - [binary_sensor.dishwasher](https://github.com/basnijholt/home-assistant-config/blob/7dfb2eb585fcf0287ea163eebc4d3f1d2a5cb515/includes/binary_sensors.yaml#L163)

[^ toc](#automations---table-of-content)


## [Vacation mode 🏝](https://github.com/basnijholt/home-assistant-config/blob/896d09e1d72d5a2de280d9b091e72f717846000d/automations/vacation_mode.yaml)
### [Auto turn on](https://github.com/basnijholt/home-assistant-config/blob/896d09e1d72d5a2de280d9b091e72f717846000d/automations/vacation_mode.yaml#L11)

  *which uses:*
  - [input_boolean.guest_mode](https://github.com/basnijholt/home-assistant-config/blob/3edc9d32263e8f60edc030c5f3ab8a089c469ea1/includes/input_booleans.yaml#L22)
  - [input_boolean.vacation_mode](https://github.com/basnijholt/home-assistant-config/blob/3edc9d32263e8f60edc030c5f3ab8a089c469ea1/includes/input_booleans.yaml#L19)
  - [group.persons](https://github.com/basnijholt/home-assistant-config/blob/6bab64cd641699f47bb147f03af01022699eeecb/includes/groups.yaml#L11)

### [Auto turn off](https://github.com/basnijholt/home-assistant-config/blob/896d09e1d72d5a2de280d9b091e72f717846000d/automations/vacation_mode.yaml#L31)

  *which uses:*
  - [input_boolean.guest_mode](https://github.com/basnijholt/home-assistant-config/blob/3edc9d32263e8f60edc030c5f3ab8a089c469ea1/includes/input_booleans.yaml#L22)
  - [input_boolean.vacation_mode](https://github.com/basnijholt/home-assistant-config/blob/3edc9d32263e8f60edc030c5f3ab8a089c469ea1/includes/input_booleans.yaml#L19)
  - [group.persons](https://github.com/basnijholt/home-assistant-config/blob/6bab64cd641699f47bb147f03af01022699eeecb/includes/groups.yaml#L11)

[^ toc](#automations---table-of-content)


## [Vacuum 🧹](https://github.com/basnijholt/home-assistant-config/blob/f7bfc4913cf6e02bc5293357ea6dd41a806b28bb/automations/vacuum.yaml)
### [Started cleaning](https://github.com/basnijholt/home-assistant-config/blob/f7bfc4913cf6e02bc5293357ea6dd41a806b28bb/automations/vacuum.yaml#L11)

  *which uses:*
  - [input_datetime.vacuum_on](https://github.com/basnijholt/home-assistant-config/blob/07e1a85beb7396dd12290030ba48064f386899a8/includes/input_datetimes.yaml#L36)

### [Stopped cleaning](https://github.com/basnijholt/home-assistant-config/blob/f7bfc4913cf6e02bc5293357ea6dd41a806b28bb/automations/vacuum.yaml#L27)

  *which uses:*
  - [input_boolean.cleaned_today](https://github.com/basnijholt/home-assistant-config/blob/3edc9d32263e8f60edc030c5f3ab8a089c469ea1/includes/input_booleans.yaml#L16)
  - [input_datetime.vacuum_off](https://github.com/basnijholt/home-assistant-config/blob/07e1a85beb7396dd12290030ba48064f386899a8/includes/input_datetimes.yaml#L41)
  - [sensor.robot_vacuum_last_clean_duration](https://github.com/basnijholt/home-assistant-config/blob/567dbfe1c515c3d63e743ab30b44f0d18d6792c4/includes/sensors.yaml#L319)

### [Reminder notification](https://github.com/basnijholt/home-assistant-config/blob/f7bfc4913cf6e02bc5293357ea6dd41a806b28bb/automations/vacuum.yaml#L45)

  *which uses:*
  - [binary_sensor.vacuum_day](https://github.com/basnijholt/home-assistant-config/blob/7dfb2eb585fcf0287ea163eebc4d3f1d2a5cb515/includes/binary_sensors.yaml#L198)

### [Cleanup if nobody is home](https://github.com/basnijholt/home-assistant-config/blob/f7bfc4913cf6e02bc5293357ea6dd41a806b28bb/automations/vacuum.yaml#L59)

  *which uses:*
  - [input_boolean.cleaned_today](https://github.com/basnijholt/home-assistant-config/blob/3edc9d32263e8f60edc030c5f3ab8a089c469ea1/includes/input_booleans.yaml#L16)
  - [input_boolean.guest_mode](https://github.com/basnijholt/home-assistant-config/blob/3edc9d32263e8f60edc030c5f3ab8a089c469ea1/includes/input_booleans.yaml#L22)
  - [input_boolean.vacation_mode](https://github.com/basnijholt/home-assistant-config/blob/3edc9d32263e8f60edc030c5f3ab8a089c469ea1/includes/input_booleans.yaml#L19)
  - [binary_sensor.vacuum_day](https://github.com/basnijholt/home-assistant-config/blob/7dfb2eb585fcf0287ea163eebc4d3f1d2a5cb515/includes/binary_sensors.yaml#L198)
  - [group.persons](https://github.com/basnijholt/home-assistant-config/blob/6bab64cd641699f47bb147f03af01022699eeecb/includes/groups.yaml#L11)

### [Reset cleaned today](https://github.com/basnijholt/home-assistant-config/blob/f7bfc4913cf6e02bc5293357ea6dd41a806b28bb/automations/vacuum.yaml#L90)

  *which uses:*
  - [input_boolean.cleaned_today](https://github.com/basnijholt/home-assistant-config/blob/3edc9d32263e8f60edc030c5f3ab8a089c469ea1/includes/input_booleans.yaml#L16)

### [Reset to standard mode](https://github.com/basnijholt/home-assistant-config/blob/f7bfc4913cf6e02bc5293357ea6dd41a806b28bb/automations/vacuum.yaml#L99)


[^ toc](#automations---table-of-content)


## [Work 💼](https://github.com/basnijholt/home-assistant-config/blob/f7bfc4913cf6e02bc5293357ea6dd41a806b28bb/automations/work.yaml)
### [Go home notification](https://github.com/basnijholt/home-assistant-config/blob/f7bfc4913cf6e02bc5293357ea6dd41a806b28bb/automations/work.yaml#L11)

  *which uses:*
  - [input_boolean.work_hour_notification_sent](https://github.com/basnijholt/home-assistant-config/blob/3edc9d32263e8f60edc030c5f3ab8a089c469ea1/includes/input_booleans.yaml#L52)
  - [binary_sensor.worked_enough_today](https://github.com/basnijholt/home-assistant-config/blob/7dfb2eb585fcf0287ea163eebc4d3f1d2a5cb515/includes/binary_sensors.yaml#L175)

### [Reset input_boolean at midnight](https://github.com/basnijholt/home-assistant-config/blob/f7bfc4913cf6e02bc5293357ea6dd41a806b28bb/automations/work.yaml#L32)

  *which uses:*
  - [input_boolean.work_hour_notification_sent](https://github.com/basnijholt/home-assistant-config/blob/3edc9d32263e8f60edc030c5f3ab8a089c469ea1/includes/input_booleans.yaml#L52)

### [Bas left work notification for Marcella](https://github.com/basnijholt/home-assistant-config/blob/f7bfc4913cf6e02bc5293357ea6dd41a806b28bb/automations/work.yaml#L44)


[^ toc](#automations---table-of-content)


<!-- end-automations -->
