# Bas Nijholt's Home Assistant config files

[![GitHub stars](https://img.shields.io/github/stars/basnijholt/home-assistant-config.svg?style=plasticr)](https://github.com/basnijholt/home-assistant-config/stargazers)
[![GitHub last commit](https://img.shields.io/github/last-commit/basnijholt/home-assistant-config.svg?style=plasticr)](https://github.com/basnijholt/home-assistant-config/commits/master)
[![HA Version](https://img.shields.io/badge/Running%20Home%20Asssistant-2023.4.6%20-darkblue)](https://github.com/home-assistant/core/releases/tag/2023.4.6)
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
- [AppDaemon](https://github.com/hassio-addons/addon-appdaemon) version 0.11.0 by @hassio-addons
- [Glances](https://github.com/hassio-addons/addon-glances) version 0.18.0 by @hassio-addons
- [Grafana](https://github.com/hassio-addons/addon-grafana) version 8.2.0 by @hassio-addons
- [InfluxDB](https://github.com/hassio-addons/addon-influxdb) version 4.5.0 by @hassio-addons
- [Log Viewer](https://github.com/hassio-addons/addon-log-viewer) version 0.14.0 by @hassio-addons
- [SSH & Web Terminal](https://github.com/hassio-addons/addon-ssh) version 13.0.3 by @hassio-addons
- [Studio Code Server](https://github.com/hassio-addons/addon-vscode) version 5.5.4 by @hassio-addons
- [motionEye](https://github.com/hassio-addons/addon-motioneye) version 0.18.0 by @hassio-addons
- [phpMyAdmin](https://github.com/hassio-addons/addon-phpmyadmin) version 0.8.4 by @hassio-addons
- [Let's Encrypt](https://github.com/home-assistant/hassio-addons/tree/master/letsencrypt) version 4.12.8 by @home-assistant
- [MariaDB](https://github.com/home-assistant/hassio-addons/tree/master/mariadb) version 2.5.2 by @home-assistant
- [Mosquitto broker](https://github.com/home-assistant/hassio-addons/tree/master/mosquitto) version 6.1.3 by @home-assistant
- [Samba share](https://github.com/home-assistant/hassio-addons/tree/master/samba) version 10.0.0 by @home-assistant
- [VLC](https://github.com/home-assistant/hassio-addons/tree/master/vlc) version 0.1.3 by @home-assistant
- [deCONZ](https://github.com/home-assistant/hassio-addons/tree/master/deconz) version 6.18.0 by @home-assistant
- [Rhasspy Assistant](https://github.com/rhasspy/hassio-addons) version 2.5.11 by @rhasspy
- [Home Assistant Google Drive Backup](https://github.com/sabeechen/hassio-google-drive-backup) version 0.110.3 by @sabeechen
- [Zigbee2MQTT](https://github.com/zigbee2mqtt/hassio-zigbee2mqtt/tree/master/zigbee2mqtt) version 1.30.2-1 by @zigbee2mqtt
<!-- end-addons -->


<!-- start-automations -->
# Automations - Table of Content
1. [Adaptive lighting 🌄🌇](#adaptive-lighting-) (3 automations)
1. [Alarm clock ⏰](#alarm-clock-) (1 automations)
1. [Apple Watch ⌚](#apple-watch-) (12 automations)
1. [Arriving 👞](#arriving-) (1 automations)
1. [Bike 🚲](#bike-) (2 automations)
1. [Climate 🔥🥶](#climate-) (7 automations)
1. [Control switches 🎛](#control-switches-) (7 automations)
1. [Cube ∛](#cube-) (2 automations)
1. [Doorbell 🚪🔔](#doorbell-) (1 automations)
1. [Frontend 👨‍💻](#frontend-) (3 automations)
1. [Leaving 👞](#leaving-) (4 automations)
1. [Light 💡](#light-) (29 automations)
1. [Lovelace 👨‍💻](#lovelace-) (1 automations)
1. [Mailbox 📫📣](#mailbox-) (1 automations)
1. [Media player 🔈📺](#media-player-) (7 automations)
1. [Music 🎵](#music-) (2 automations)
1. [Notifications 🔔](#notifications-) (2 automations)
1. [Plant 🌱](#plant-) (3 automations)
1. [Security 👮🚨](#security-) (4 automations)
1. [Night mode 🌕🌑](#night-mode-) (5 automations)
1. [System 🖥](#system-) (7 automations)
1. [Test 🧪](#test-) (4 automations)
1. [Utilities 🧺👚🍽](#utilities-) (3 automations)
1. [Vacation mode 🏝](#vacation-mode-) (2 automations)
1. [Vacuum 🧹](#vacuum-) (6 automations)
1. [Work 💼](#work-) (3 automations)


⚠️ Total number of automations: **122** ⚠️

## [Adaptive lighting 🌄🌇](https://github.com/basnijholt/home-assistant-config/blob/e1349158a171d10d28689dc258c60a73a15679f7/automations/adaptive_lighting.yaml)
### [Turn on and off switches](https://github.com/basnijholt/home-assistant-config/blob/e1349158a171d10d28689dc258c60a73a15679f7/automations/adaptive_lighting.yaml#L11)

  *which uses:*
  - [input_select.sleep_mode](https://github.com/basnijholt/home-assistant-config/blob/07c0fdd72fdd676ab1b95db36f7baef313f7cff6/includes/input_selects.yaml#L11)

### [Reset manual_control after 1 hour](https://github.com/basnijholt/home-assistant-config/blob/e1349158a171d10d28689dc258c60a73a15679f7/automations/adaptive_lighting.yaml#L49)


### [Notify manual_control](https://github.com/basnijholt/home-assistant-config/blob/e1349158a171d10d28689dc258c60a73a15679f7/automations/adaptive_lighting.yaml#L73)


[^ toc](#automations---table-of-content)


## [Alarm clock ⏰](https://github.com/basnijholt/home-assistant-config/blob/6ed0cd6c2c3675e9c4a3d9d8771348c148545a3d/automations/alarm_clock.yaml)
### [Wake up with Spotify and light](https://github.com/basnijholt/home-assistant-config/blob/6ed0cd6c2c3675e9c4a3d9d8771348c148545a3d/automations/alarm_clock.yaml#L11)

  *which uses:*
  - [input_boolean.alarm_clock](https://github.com/basnijholt/home-assistant-config/blob/97b67b70bdf7e712c28a13523ff804c143df26be/includes/input_booleans.yaml#L52)
  - [input_boolean.wake_up_light](https://github.com/basnijholt/home-assistant-config/blob/97b67b70bdf7e712c28a13523ff804c143df26be/includes/input_booleans.yaml#L72)
  - [input_boolean.wake_up_with_spotify](https://github.com/basnijholt/home-assistant-config/blob/97b67b70bdf7e712c28a13523ff804c143df26be/includes/input_booleans.yaml#L96)
  - [input_select.sleep_mode](https://github.com/basnijholt/home-assistant-config/blob/07c0fdd72fdd676ab1b95db36f7baef313f7cff6/includes/input_selects.yaml#L11)
  - [sensor.ten_minutes_before_alarm](https://github.com/basnijholt/home-assistant-config/blob/0a49b1ab897f8dbc068b042f4e6c2ba0e4cb3d8f/includes/sensors.yaml#L241)

[^ toc](#automations---table-of-content)


## [Apple Watch ⌚](https://github.com/basnijholt/home-assistant-config/blob/1ae82ea753961c844b24fc080c4dbe0b55b5af39/automations/apple_watch.yaml)
### [Play or Pause the TV](https://github.com/basnijholt/home-assistant-config/blob/1ae82ea753961c844b24fc080c4dbe0b55b5af39/automations/apple_watch.yaml#L11)


### [Minimal lights bedroom](https://github.com/basnijholt/home-assistant-config/blob/1ae82ea753961c844b24fc080c4dbe0b55b5af39/automations/apple_watch.yaml#L27)


### [Fix TV sound](https://github.com/basnijholt/home-assistant-config/blob/1ae82ea753961c844b24fc080c4dbe0b55b5af39/automations/apple_watch.yaml#L42)

  *which uses:*
  - [script.fix_sound](https://github.com/basnijholt/home-assistant-config/blob/0a49b1ab897f8dbc068b042f4e6c2ba0e4cb3d8f/scripts.yaml#L437)

### [Set sleep mode](https://github.com/basnijholt/home-assistant-config/blob/1ae82ea753961c844b24fc080c4dbe0b55b5af39/automations/apple_watch.yaml#L51)

  *which uses:*
  - [input_select.sleep_mode](https://github.com/basnijholt/home-assistant-config/blob/07c0fdd72fdd676ab1b95db36f7baef313f7cff6/includes/input_selects.yaml#L11)

### [Set lights](https://github.com/basnijholt/home-assistant-config/blob/1ae82ea753961c844b24fc080c4dbe0b55b5af39/automations/apple_watch.yaml#L94)

  *which uses:*
  - [script.cozy_lights_bedroom](https://github.com/basnijholt/home-assistant-config/blob/0a49b1ab897f8dbc068b042f4e6c2ba0e4cb3d8f/scripts.yaml#L158)
  - [script.cozy_lights_living_room](https://github.com/basnijholt/home-assistant-config/blob/0a49b1ab897f8dbc068b042f4e6c2ba0e4cb3d8f/scripts.yaml#L101)
  - [script.turn_on_lights](https://github.com/basnijholt/home-assistant-config/blob/0a49b1ab897f8dbc068b042f4e6c2ba0e4cb3d8f/scripts.yaml#L610)
  - [script.white_lights_living_room](https://github.com/basnijholt/home-assistant-config/blob/0a49b1ab897f8dbc068b042f4e6c2ba0e4cb3d8f/scripts.yaml#L209)

### [Temperature report](https://github.com/basnijholt/home-assistant-config/blob/1ae82ea753961c844b24fc080c4dbe0b55b5af39/automations/apple_watch.yaml#L259)


### [Portfolio value](https://github.com/basnijholt/home-assistant-config/blob/1ae82ea753961c844b24fc080c4dbe0b55b5af39/automations/apple_watch.yaml#L279)


### [Send vacuum cleaner](https://github.com/basnijholt/home-assistant-config/blob/1ae82ea753961c844b24fc080c4dbe0b55b5af39/automations/apple_watch.yaml#L295)

  *which uses:*
  - [script.vacuum_command](https://github.com/basnijholt/home-assistant-config/blob/0a49b1ab897f8dbc068b042f4e6c2ba0e4cb3d8f/scripts.yaml#L550)

### [Movie time](https://github.com/basnijholt/home-assistant-config/blob/1ae82ea753961c844b24fc080c4dbe0b55b5af39/automations/apple_watch.yaml#L361)


### [Reset adaptive lighting](https://github.com/basnijholt/home-assistant-config/blob/1ae82ea753961c844b24fc080c4dbe0b55b5af39/automations/apple_watch.yaml#L384)

  *which uses:*
  - [script.reset_adaptive_lighting](https://github.com/basnijholt/home-assistant-config/blob/0a49b1ab897f8dbc068b042f4e6c2ba0e4cb3d8f/scripts.yaml#L636)

### [Set temperature](https://github.com/basnijholt/home-assistant-config/blob/1ae82ea753961c844b24fc080c4dbe0b55b5af39/automations/apple_watch.yaml#L393)


### [Where is other person?](https://github.com/basnijholt/home-assistant-config/blob/1ae82ea753961c844b24fc080c4dbe0b55b5af39/automations/apple_watch.yaml#L460)


[^ toc](#automations---table-of-content)


## [Arriving 👞](https://github.com/basnijholt/home-assistant-config/blob/55c982f96c77b5e15b9334abee8785ecdf4edcc9/automations/arriving.yaml)
### [Switch music from iPhone to speakers if no one is home](https://github.com/basnijholt/home-assistant-config/blob/55c982f96c77b5e15b9334abee8785ecdf4edcc9/automations/arriving.yaml#L13)

  *which uses:*
  - [input_boolean.guest_mode](https://github.com/basnijholt/home-assistant-config/blob/97b67b70bdf7e712c28a13523ff804c143df26be/includes/input_booleans.yaml#L22)

[^ toc](#automations---table-of-content)


## [Bike 🚲](https://github.com/basnijholt/home-assistant-config/blob/e861aa204e7987faac9043264c2d61173816e115/automations/bike.yaml)
### [Started charging](https://github.com/basnijholt/home-assistant-config/blob/e861aa204e7987faac9043264c2d61173816e115/automations/bike.yaml#L14)

  *which uses:*
  - [input_datetime.bike_charger_off](https://github.com/basnijholt/home-assistant-config/blob/07c0fdd72fdd676ab1b95db36f7baef313f7cff6/includes/input_datetimes.yaml#L41)
  - [input_datetime.bike_charger_on](https://github.com/basnijholt/home-assistant-config/blob/07c0fdd72fdd676ab1b95db36f7baef313f7cff6/includes/input_datetimes.yaml#L36)

### [Stop charging](https://github.com/basnijholt/home-assistant-config/blob/e861aa204e7987faac9043264c2d61173816e115/automations/bike.yaml#L30)

  *which uses:*
  - [input_datetime.bike_charger_off](https://github.com/basnijholt/home-assistant-config/blob/07c0fdd72fdd676ab1b95db36f7baef313f7cff6/includes/input_datetimes.yaml#L41)

[^ toc](#automations---table-of-content)


## [Climate 🔥🥶](https://github.com/basnijholt/home-assistant-config/blob/e861aa204e7987faac9043264c2d61173816e115/automations/climate.yaml)
### [Turn on the heating 30 min before waking up](https://github.com/basnijholt/home-assistant-config/blob/e861aa204e7987faac9043264c2d61173816e115/automations/climate.yaml#L12)

  *which uses:*
  - [input_boolean.alarm_clock](https://github.com/basnijholt/home-assistant-config/blob/97b67b70bdf7e712c28a13523ff804c143df26be/includes/input_booleans.yaml#L52)
  - [input_boolean.automatic_temperature](https://github.com/basnijholt/home-assistant-config/blob/97b67b70bdf7e712c28a13523ff804c143df26be/includes/input_booleans.yaml#L46)
  - [script.set_high_temperature](https://github.com/basnijholt/home-assistant-config/blob/0a49b1ab897f8dbc068b042f4e6c2ba0e4cb3d8f/scripts.yaml#L407)
  - [sensor.half_hour_before_alarm](https://github.com/basnijholt/home-assistant-config/blob/0a49b1ab897f8dbc068b042f4e6c2ba0e4cb3d8f/includes/sensors.yaml#L233)

### [Turn on the heating when going home](https://github.com/basnijholt/home-assistant-config/blob/e861aa204e7987faac9043264c2d61173816e115/automations/climate.yaml#L26)

  *which uses:*
  - [input_boolean.automatic_temperature](https://github.com/basnijholt/home-assistant-config/blob/97b67b70bdf7e712c28a13523ff804c143df26be/includes/input_booleans.yaml#L46)
  - [input_number.temperature_high](https://github.com/basnijholt/home-assistant-config/blob/0a49b1ab897f8dbc068b042f4e6c2ba0e4cb3d8f/includes/input_numbers.yaml#L20)
  - [script.set_high_temperature](https://github.com/basnijholt/home-assistant-config/blob/0a49b1ab897f8dbc068b042f4e6c2ba0e4cb3d8f/scripts.yaml#L407)
  - [binary_sensor.no_one_home](https://github.com/basnijholt/home-assistant-config/blob/5381dd8577848e8c74067fb623d6de62ee557552/includes/binary_sensors.yaml#L189)

### [Turn off the heating at 22:00](https://github.com/basnijholt/home-assistant-config/blob/e861aa204e7987faac9043264c2d61173816e115/automations/climate.yaml#L51)

  *which uses:*
  - [input_boolean.automatic_temperature](https://github.com/basnijholt/home-assistant-config/blob/97b67b70bdf7e712c28a13523ff804c143df26be/includes/input_booleans.yaml#L46)
  - [input_number.temperature_low](https://github.com/basnijholt/home-assistant-config/blob/0a49b1ab897f8dbc068b042f4e6c2ba0e4cb3d8f/includes/input_numbers.yaml#L12)
  - [script.set_high_temperature](https://github.com/basnijholt/home-assistant-config/blob/0a49b1ab897f8dbc068b042f4e6c2ba0e4cb3d8f/scripts.yaml#L407)
  - [script.set_low_temperature](https://github.com/basnijholt/home-assistant-config/blob/0a49b1ab897f8dbc068b042f4e6c2ba0e4cb3d8f/scripts.yaml#L398)
  - [binary_sensor.no_one_home](https://github.com/basnijholt/home-assistant-config/blob/5381dd8577848e8c74067fb623d6de62ee557552/includes/binary_sensors.yaml#L189)

### [Set outside temperature every hour](https://github.com/basnijholt/home-assistant-config/blob/e861aa204e7987faac9043264c2d61173816e115/automations/climate.yaml#L84)


### [Warning when heating on and living room door open](https://github.com/basnijholt/home-assistant-config/blob/e861aa204e7987faac9043264c2d61173816e115/automations/climate.yaml#L95)

  *which uses:*
  - [input_number.temperature_low](https://github.com/basnijholt/home-assistant-config/blob/0a49b1ab897f8dbc068b042f4e6c2ba0e4cb3d8f/includes/input_numbers.yaml#L12)

### [Set temperature setpoint to 50 °C](https://github.com/basnijholt/home-assistant-config/blob/e861aa204e7987faac9043264c2d61173816e115/automations/climate.yaml#L129)


### [Automatically turn off spaceheater when no-one is in the guest room](https://github.com/basnijholt/home-assistant-config/blob/e861aa204e7987faac9043264c2d61173816e115/automations/climate.yaml#L139)

  *which uses:*
  - [binary_sensor.activity_in_guest_room](https://github.com/basnijholt/home-assistant-config/blob/5381dd8577848e8c74067fb623d6de62ee557552/includes/binary_sensors.yaml#L99)

[^ toc](#automations---table-of-content)


## [Control switches 🎛](https://github.com/basnijholt/home-assistant-config/blob/ad0458bdf8ef8772282fbd2cb35225709186dd21/automations/control_switches.yaml)
### [Living room Philips Hue dimmer switch](https://github.com/basnijholt/home-assistant-config/blob/ad0458bdf8ef8772282fbd2cb35225709186dd21/automations/control_switches.yaml#L12)

  *which uses:*
  - [input_select.last_script_living_room](https://github.com/basnijholt/home-assistant-config/blob/07c0fdd72fdd676ab1b95db36f7baef313f7cff6/includes/input_selects.yaml#L25)
  - [script.increase_brightness](https://github.com/basnijholt/home-assistant-config/blob/0a49b1ab897f8dbc068b042f4e6c2ba0e4cb3d8f/scripts.yaml#L237)
  - [script.next_colors](https://github.com/basnijholt/home-assistant-config/blob/0a49b1ab897f8dbc068b042f4e6c2ba0e4cb3d8f/scripts.yaml#L293)
  - [script.reset_adaptive_lighting](https://github.com/basnijholt/home-assistant-config/blob/0a49b1ab897f8dbc068b042f4e6c2ba0e4cb3d8f/scripts.yaml#L636)
  - [script.white_lights_living_room](https://github.com/basnijholt/home-assistant-config/blob/0a49b1ab897f8dbc068b042f4e6c2ba0e4cb3d8f/scripts.yaml#L209)

### [Bedroom Philips Hue dimmer switch](https://github.com/basnijholt/home-assistant-config/blob/ad0458bdf8ef8772282fbd2cb35225709186dd21/automations/control_switches.yaml#L75)

  *which uses:*
  - [input_select.last_script_bedroom](https://github.com/basnijholt/home-assistant-config/blob/07c0fdd72fdd676ab1b95db36f7baef313f7cff6/includes/input_selects.yaml#L31)
  - [script.increase_brightness](https://github.com/basnijholt/home-assistant-config/blob/0a49b1ab897f8dbc068b042f4e6c2ba0e4cb3d8f/scripts.yaml#L237)
  - [script.next_colors](https://github.com/basnijholt/home-assistant-config/blob/0a49b1ab897f8dbc068b042f4e6c2ba0e4cb3d8f/scripts.yaml#L293)
  - [script.reset_adaptive_lighting](https://github.com/basnijholt/home-assistant-config/blob/0a49b1ab897f8dbc068b042f4e6c2ba0e4cb3d8f/scripts.yaml#L636)
  - [script.white_lights_bedroom](https://github.com/basnijholt/home-assistant-config/blob/0a49b1ab897f8dbc068b042f4e6c2ba0e4cb3d8f/scripts.yaml#L223)

### [Bedroom IKEA dimmer switch](https://github.com/basnijholt/home-assistant-config/blob/ad0458bdf8ef8772282fbd2cb35225709186dd21/automations/control_switches.yaml#L138)

  *which uses:*
  - [input_select.last_script_bedroom](https://github.com/basnijholt/home-assistant-config/blob/07c0fdd72fdd676ab1b95db36f7baef313f7cff6/includes/input_selects.yaml#L31)
  - [script.increase_brightness](https://github.com/basnijholt/home-assistant-config/blob/0a49b1ab897f8dbc068b042f4e6c2ba0e4cb3d8f/scripts.yaml#L237)
  - [script.next_colors](https://github.com/basnijholt/home-assistant-config/blob/0a49b1ab897f8dbc068b042f4e6c2ba0e4cb3d8f/scripts.yaml#L293)
  - [script.reset_adaptive_lighting](https://github.com/basnijholt/home-assistant-config/blob/0a49b1ab897f8dbc068b042f4e6c2ba0e4cb3d8f/scripts.yaml#L636)
  - [script.white_lights_bedroom](https://github.com/basnijholt/home-assistant-config/blob/0a49b1ab897f8dbc068b042f4e6c2ba0e4cb3d8f/scripts.yaml#L223)

### [Living room Aqara Wireless Mini Switch](https://github.com/basnijholt/home-assistant-config/blob/ad0458bdf8ef8772282fbd2cb35225709186dd21/automations/control_switches.yaml#L202)

  *which uses:*
  - [input_select.last_script_living_room](https://github.com/basnijholt/home-assistant-config/blob/07c0fdd72fdd676ab1b95db36f7baef313f7cff6/includes/input_selects.yaml#L25)
  - [script.fix_sound](https://github.com/basnijholt/home-assistant-config/blob/0a49b1ab897f8dbc068b042f4e6c2ba0e4cb3d8f/scripts.yaml#L437)
  - [script.increase_brightness](https://github.com/basnijholt/home-assistant-config/blob/0a49b1ab897f8dbc068b042f4e6c2ba0e4cb3d8f/scripts.yaml#L237)
  - [script.next_colors](https://github.com/basnijholt/home-assistant-config/blob/0a49b1ab897f8dbc068b042f4e6c2ba0e4cb3d8f/scripts.yaml#L293)

### [Bedroom Aqara Wireless Mini Switch](https://github.com/basnijholt/home-assistant-config/blob/ad0458bdf8ef8772282fbd2cb35225709186dd21/automations/control_switches.yaml#L252)

  *which uses:*
  - [input_select.last_script_bedroom](https://github.com/basnijholt/home-assistant-config/blob/07c0fdd72fdd676ab1b95db36f7baef313f7cff6/includes/input_selects.yaml#L31)
  - [input_select.sleep_mode](https://github.com/basnijholt/home-assistant-config/blob/07c0fdd72fdd676ab1b95db36f7baef313f7cff6/includes/input_selects.yaml#L11)
  - [script.increase_brightness](https://github.com/basnijholt/home-assistant-config/blob/0a49b1ab897f8dbc068b042f4e6c2ba0e4cb3d8f/scripts.yaml#L237)
  - [script.next_colors](https://github.com/basnijholt/home-assistant-config/blob/0a49b1ab897f8dbc068b042f4e6c2ba0e4cb3d8f/scripts.yaml#L293)
  - [script.turn_off_everything](https://github.com/basnijholt/home-assistant-config/blob/0a49b1ab897f8dbc068b042f4e6c2ba0e4cb3d8f/scripts.yaml#L275)
  - [sensor.ten_minutes_before_alarm](https://github.com/basnijholt/home-assistant-config/blob/0a49b1ab897f8dbc068b042f4e6c2ba0e4cb3d8f/includes/sensors.yaml#L241)

### [Bathroom Aqara Wireless Mini Switch](https://github.com/basnijholt/home-assistant-config/blob/ad0458bdf8ef8772282fbd2cb35225709186dd21/automations/control_switches.yaml#L338)


### [Door Aqara Wireless Mini Switch](https://github.com/basnijholt/home-assistant-config/blob/ad0458bdf8ef8772282fbd2cb35225709186dd21/automations/control_switches.yaml#L361)

  *which uses:*
  - [script.arriving](https://github.com/basnijholt/home-assistant-config/blob/0a49b1ab897f8dbc068b042f4e6c2ba0e4cb3d8f/scripts.yaml#L422)
  - [script.set_low_temperature](https://github.com/basnijholt/home-assistant-config/blob/0a49b1ab897f8dbc068b042f4e6c2ba0e4cb3d8f/scripts.yaml#L398)
  - [script.start_spotify](https://github.com/basnijholt/home-assistant-config/blob/0a49b1ab897f8dbc068b042f4e6c2ba0e4cb3d8f/scripts.yaml#L38)
  - [script.turn_off_everything_non_automatic](https://github.com/basnijholt/home-assistant-config/blob/0a49b1ab897f8dbc068b042f4e6c2ba0e4cb3d8f/scripts.yaml#L260)
  - [sensor.favorite_playlist_of_nearest_person](https://github.com/basnijholt/home-assistant-config/blob/0a49b1ab897f8dbc068b042f4e6c2ba0e4cb3d8f/includes/sensors.yaml#L75)

[^ toc](#automations---table-of-content)


## [Cube ∛](https://github.com/basnijholt/home-assistant-config/blob/55c982f96c77b5e15b9334abee8785ecdf4edcc9/automations/cube.yaml)
### [Perform operation](https://github.com/basnijholt/home-assistant-config/blob/55c982f96c77b5e15b9334abee8785ecdf4edcc9/automations/cube.yaml#L12)

  *which uses:*
  - [input_select.cube_mode](https://github.com/basnijholt/home-assistant-config/blob/07c0fdd72fdd676ab1b95db36f7baef313f7cff6/includes/input_selects.yaml#L18)
  - [script.start_spotify_playlist_of_nearest_person](https://github.com/basnijholt/home-assistant-config/blob/0a49b1ab897f8dbc068b042f4e6c2ba0e4cb3d8f/scripts.yaml#L78)

### [Rotate the cube](https://github.com/basnijholt/home-assistant-config/blob/55c982f96c77b5e15b9334abee8785ecdf4edcc9/automations/cube.yaml#L74)

  *which uses:*
  - [input_select.cube_mode](https://github.com/basnijholt/home-assistant-config/blob/07c0fdd72fdd676ab1b95db36f7baef313f7cff6/includes/input_selects.yaml#L18)

[^ toc](#automations---table-of-content)


## [Doorbell 🚪🔔](https://github.com/basnijholt/home-assistant-config/blob/7fed19ad132833e0ab1b4405356a9f084e1f0004/automations/doorbell.yaml)
### [Click the button](https://github.com/basnijholt/home-assistant-config/blob/7fed19ad132833e0ab1b4405356a9f084e1f0004/automations/doorbell.yaml#L11)


[^ toc](#automations---table-of-content)


## [Frontend 👨‍💻](https://github.com/basnijholt/home-assistant-config/blob/c181b1c1e65b59f3176207bf828ee1f17174165b/automations/frontend.yaml)
### [Turn on dark mode](https://github.com/basnijholt/home-assistant-config/blob/c181b1c1e65b59f3176207bf828ee1f17174165b/automations/frontend.yaml#L11)

  *which uses:*
  - [input_boolean.dark_mode](https://github.com/basnijholt/home-assistant-config/blob/97b67b70bdf7e712c28a13523ff804c143df26be/includes/input_booleans.yaml#L35)

### [Turn on light mode](https://github.com/basnijholt/home-assistant-config/blob/c181b1c1e65b59f3176207bf828ee1f17174165b/automations/frontend.yaml#L22)

  *which uses:*
  - [input_boolean.dark_mode](https://github.com/basnijholt/home-assistant-config/blob/97b67b70bdf7e712c28a13523ff804c143df26be/includes/input_booleans.yaml#L35)

### [Change theme](https://github.com/basnijholt/home-assistant-config/blob/c181b1c1e65b59f3176207bf828ee1f17174165b/automations/frontend.yaml#L33)

  *which uses:*
  - [input_boolean.dark_mode](https://github.com/basnijholt/home-assistant-config/blob/97b67b70bdf7e712c28a13523ff804c143df26be/includes/input_booleans.yaml#L35)
  - [input_boolean.theme_alternative](https://github.com/basnijholt/home-assistant-config/blob/97b67b70bdf7e712c28a13523ff804c143df26be/includes/input_booleans.yaml#L38)
  - [input_select.theme](https://github.com/basnijholt/home-assistant-config/blob/07c0fdd72fdd676ab1b95db36f7baef313f7cff6/includes/input_selects.yaml#L46)

[^ toc](#automations---table-of-content)


## [Leaving 👞](https://github.com/basnijholt/home-assistant-config/blob/55c982f96c77b5e15b9334abee8785ecdf4edcc9/automations/leaving.yaml)
### [Automatically turn off everything](https://github.com/basnijholt/home-assistant-config/blob/55c982f96c77b5e15b9334abee8785ecdf4edcc9/automations/leaving.yaml#L12)

  *which uses:*
  - [input_boolean.guest_mode](https://github.com/basnijholt/home-assistant-config/blob/97b67b70bdf7e712c28a13523ff804c143df26be/includes/input_booleans.yaml#L22)
  - [script.leaving](https://github.com/basnijholt/home-assistant-config/blob/0a49b1ab897f8dbc068b042f4e6c2ba0e4cb3d8f/scripts.yaml#L416)
  - [binary_sensor.anything_on](https://github.com/basnijholt/home-assistant-config/blob/5381dd8577848e8c74067fb623d6de62ee557552/includes/binary_sensors.yaml#L174)
  - [binary_sensor.no_one_home](https://github.com/basnijholt/home-assistant-config/blob/5381dd8577848e8c74067fb623d6de62ee557552/includes/binary_sensors.yaml#L189)
  - [binary_sensor.someone_in_the_house_in_last_hour](https://github.com/basnijholt/home-assistant-config/blob/5381dd8577848e8c74067fb623d6de62ee557552/includes/binary_sensors.yaml#L38)

### [Ask to turn off everything](https://github.com/basnijholt/home-assistant-config/blob/55c982f96c77b5e15b9334abee8785ecdf4edcc9/automations/leaving.yaml#L40)

  *which uses:*
  - [input_boolean.guest_mode](https://github.com/basnijholt/home-assistant-config/blob/97b67b70bdf7e712c28a13523ff804c143df26be/includes/input_booleans.yaml#L22)
  - [binary_sensor.anything_on](https://github.com/basnijholt/home-assistant-config/blob/5381dd8577848e8c74067fb623d6de62ee557552/includes/binary_sensors.yaml#L174)
  - [binary_sensor.no_one_home](https://github.com/basnijholt/home-assistant-config/blob/5381dd8577848e8c74067fb623d6de62ee557552/includes/binary_sensors.yaml#L189)

### [Turn off everything after notification](https://github.com/basnijholt/home-assistant-config/blob/55c982f96c77b5e15b9334abee8785ecdf4edcc9/automations/leaving.yaml#L74)

  *which uses:*
  - [script.leaving](https://github.com/basnijholt/home-assistant-config/blob/0a49b1ab897f8dbc068b042f4e6c2ba0e4cb3d8f/scripts.yaml#L416)

### [Downstairs Aqara Wireless Mini Switch](https://github.com/basnijholt/home-assistant-config/blob/55c982f96c77b5e15b9334abee8785ecdf4edcc9/automations/leaving.yaml#L84)

  *which uses:*
  - [script.turn_off_everything](https://github.com/basnijholt/home-assistant-config/blob/0a49b1ab897f8dbc068b042f4e6c2ba0e4cb3d8f/scripts.yaml#L275)

[^ toc](#automations---table-of-content)


## [Light 💡](https://github.com/basnijholt/home-assistant-config/blob/07c0fdd72fdd676ab1b95db36f7baef313f7cff6/automations/light.yaml)
### [Turn on living room](https://github.com/basnijholt/home-assistant-config/blob/07c0fdd72fdd676ab1b95db36f7baef313f7cff6/automations/light.yaml#L26)

  *which uses:*
  - [input_boolean.guest_mode](https://github.com/basnijholt/home-assistant-config/blob/97b67b70bdf7e712c28a13523ff804c143df26be/includes/input_booleans.yaml#L22)
  - [binary_sensor.activity_in_living_room](https://github.com/basnijholt/home-assistant-config/blob/5381dd8577848e8c74067fb623d6de62ee557552/includes/binary_sensors.yaml#L58)

### [Turn off living room](https://github.com/basnijholt/home-assistant-config/blob/07c0fdd72fdd676ab1b95db36f7baef313f7cff6/automations/light.yaml#L39)

  *which uses:*
  - [input_boolean.guest_mode](https://github.com/basnijholt/home-assistant-config/blob/97b67b70bdf7e712c28a13523ff804c143df26be/includes/input_booleans.yaml#L22)
  - [binary_sensor.activity_in_living_room](https://github.com/basnijholt/home-assistant-config/blob/5381dd8577848e8c74067fb623d6de62ee557552/includes/binary_sensors.yaml#L58)

### [Toggle dinner area lights](https://github.com/basnijholt/home-assistant-config/blob/07c0fdd72fdd676ab1b95db36f7baef313f7cff6/automations/light.yaml#L58)

  *which uses:*
  - [input_boolean.automatic_dinner_area_light](https://github.com/basnijholt/home-assistant-config/blob/97b67b70bdf7e712c28a13523ff804c143df26be/includes/input_booleans.yaml#L43)
  - [input_boolean.guest_mode](https://github.com/basnijholt/home-assistant-config/blob/97b67b70bdf7e712c28a13523ff804c143df26be/includes/input_booleans.yaml#L22)
  - [input_select.sleep_mode](https://github.com/basnijholt/home-assistant-config/blob/07c0fdd72fdd676ab1b95db36f7baef313f7cff6/includes/input_selects.yaml#L11)
  - [binary_sensor.activity_in_dinner_area](https://github.com/basnijholt/home-assistant-config/blob/5381dd8577848e8c74067fb623d6de62ee557552/includes/binary_sensors.yaml#L52)

### [Turn off automatic dinner area lights when turning off lights after 18:00](https://github.com/basnijholt/home-assistant-config/blob/07c0fdd72fdd676ab1b95db36f7baef313f7cff6/automations/light.yaml#L77)

  *which uses:*
  - [input_boolean.automatic_dinner_area_light](https://github.com/basnijholt/home-assistant-config/blob/97b67b70bdf7e712c28a13523ff804c143df26be/includes/input_booleans.yaml#L43)

### [Reset automatic dinner area lights at 06:00](https://github.com/basnijholt/home-assistant-config/blob/07c0fdd72fdd676ab1b95db36f7baef313f7cff6/automations/light.yaml#L92)

  *which uses:*
  - [input_boolean.automatic_dinner_area_light](https://github.com/basnijholt/home-assistant-config/blob/97b67b70bdf7e712c28a13523ff804c143df26be/includes/input_booleans.yaml#L43)

### [Turn on kitchen counter if sleep mode is off](https://github.com/basnijholt/home-assistant-config/blob/07c0fdd72fdd676ab1b95db36f7baef313f7cff6/automations/light.yaml#L100)

  *which uses:*
  - [input_select.sleep_mode](https://github.com/basnijholt/home-assistant-config/blob/07c0fdd72fdd676ab1b95db36f7baef313f7cff6/includes/input_selects.yaml#L11)
  - [binary_sensor.activity_in_kitchen](https://github.com/basnijholt/home-assistant-config/blob/5381dd8577848e8c74067fb623d6de62ee557552/includes/binary_sensors.yaml#L67)

### [Turn off kitchen counter](https://github.com/basnijholt/home-assistant-config/blob/07c0fdd72fdd676ab1b95db36f7baef313f7cff6/automations/light.yaml#L115)

  *which uses:*
  - [binary_sensor.activity_in_kitchen](https://github.com/basnijholt/home-assistant-config/blob/5381dd8577848e8c74067fb623d6de62ee557552/includes/binary_sensors.yaml#L67)

### [Reboot kitchen ceiling Shelly](https://github.com/basnijholt/home-assistant-config/blob/07c0fdd72fdd676ab1b95db36f7baef313f7cff6/automations/light.yaml#L124)

  *which uses:*
  - [shell_command.reboot_kitchen_ceiling](https://github.com/basnijholt/home-assistant-config/blob/0a49b1ab897f8dbc068b042f4e6c2ba0e4cb3d8f/includes/shell_commands.yaml#L14)

### [Turn on bathroom](https://github.com/basnijholt/home-assistant-config/blob/07c0fdd72fdd676ab1b95db36f7baef313f7cff6/automations/light.yaml#L138)

  *which uses:*
  - [input_select.sleep_mode](https://github.com/basnijholt/home-assistant-config/blob/07c0fdd72fdd676ab1b95db36f7baef313f7cff6/includes/input_selects.yaml#L11)
  - [binary_sensor.activity_in_bathroom](https://github.com/basnijholt/home-assistant-config/blob/5381dd8577848e8c74067fb623d6de62ee557552/includes/binary_sensors.yaml#L44)

### [Turn off bathroom](https://github.com/basnijholt/home-assistant-config/blob/07c0fdd72fdd676ab1b95db36f7baef313f7cff6/automations/light.yaml#L150)

  *which uses:*
  - [binary_sensor.activity_in_bathroom](https://github.com/basnijholt/home-assistant-config/blob/5381dd8577848e8c74067fb623d6de62ee557552/includes/binary_sensors.yaml#L44)

### [Turn on hall](https://github.com/basnijholt/home-assistant-config/blob/07c0fdd72fdd676ab1b95db36f7baef313f7cff6/automations/light.yaml#L167)

  *which uses:*
  - [input_select.sleep_mode](https://github.com/basnijholt/home-assistant-config/blob/07c0fdd72fdd676ab1b95db36f7baef313f7cff6/includes/input_selects.yaml#L11)
  - [script.turn_on_lights](https://github.com/basnijholt/home-assistant-config/blob/0a49b1ab897f8dbc068b042f4e6c2ba0e4cb3d8f/scripts.yaml#L610)
  - [binary_sensor.activity_in_hall](https://github.com/basnijholt/home-assistant-config/blob/5381dd8577848e8c74067fb623d6de62ee557552/includes/binary_sensors.yaml#L79)

### [Turn off hall](https://github.com/basnijholt/home-assistant-config/blob/07c0fdd72fdd676ab1b95db36f7baef313f7cff6/automations/light.yaml#L197)

  *which uses:*
  - [binary_sensor.activity_in_hall](https://github.com/basnijholt/home-assistant-config/blob/5381dd8577848e8c74067fb623d6de62ee557552/includes/binary_sensors.yaml#L79)

### [Automatically turn on the bedroom](https://github.com/basnijholt/home-assistant-config/blob/07c0fdd72fdd676ab1b95db36f7baef313f7cff6/automations/light.yaml#L217)

  *which uses:*
  - [input_boolean.automatic_bedroom_lights](https://github.com/basnijholt/home-assistant-config/blob/97b67b70bdf7e712c28a13523ff804c143df26be/includes/input_booleans.yaml#L40)
  - [input_boolean.bedroom_lights_automatically_turned_on](https://github.com/basnijholt/home-assistant-config/blob/97b67b70bdf7e712c28a13523ff804c143df26be/includes/input_booleans.yaml#L31)
  - [input_select.sleep_mode](https://github.com/basnijholt/home-assistant-config/blob/07c0fdd72fdd676ab1b95db36f7baef313f7cff6/includes/input_selects.yaml#L11)
  - [script.turn_on_lights](https://github.com/basnijholt/home-assistant-config/blob/0a49b1ab897f8dbc068b042f4e6c2ba0e4cb3d8f/scripts.yaml#L610)
  - [binary_sensor.activity_in_master_bedroom](https://github.com/basnijholt/home-assistant-config/blob/5381dd8577848e8c74067fb623d6de62ee557552/includes/binary_sensors.yaml#L86)

### [Automatically turn off the bedroom](https://github.com/basnijholt/home-assistant-config/blob/07c0fdd72fdd676ab1b95db36f7baef313f7cff6/automations/light.yaml#L247)

  *which uses:*
  - [input_boolean.automatic_bedroom_lights](https://github.com/basnijholt/home-assistant-config/blob/97b67b70bdf7e712c28a13523ff804c143df26be/includes/input_booleans.yaml#L40)
  - [input_boolean.bedroom_lights_automatically_turned_on](https://github.com/basnijholt/home-assistant-config/blob/97b67b70bdf7e712c28a13523ff804c143df26be/includes/input_booleans.yaml#L31)
  - [binary_sensor.activity_in_master_bedroom](https://github.com/basnijholt/home-assistant-config/blob/5381dd8577848e8c74067fb623d6de62ee557552/includes/binary_sensors.yaml#L86)

### [Turn off bedroom lights auto switch](https://github.com/basnijholt/home-assistant-config/blob/07c0fdd72fdd676ab1b95db36f7baef313f7cff6/automations/light.yaml#L270)

  *which uses:*
  - [input_boolean.bedroom_lights_automatically_turned_on](https://github.com/basnijholt/home-assistant-config/blob/97b67b70bdf7e712c28a13523ff804c143df26be/includes/input_booleans.yaml#L31)

### [Turn on automatic_bedroom_lights switch](https://github.com/basnijholt/home-assistant-config/blob/07c0fdd72fdd676ab1b95db36f7baef313f7cff6/automations/light.yaml#L296)

  *which uses:*
  - [input_boolean.automatic_bedroom_lights](https://github.com/basnijholt/home-assistant-config/blob/97b67b70bdf7e712c28a13523ff804c143df26be/includes/input_booleans.yaml#L40)

### [Turn off bedroom after 2 hours of inactivity](https://github.com/basnijholt/home-assistant-config/blob/07c0fdd72fdd676ab1b95db36f7baef313f7cff6/automations/light.yaml#L304)

  *which uses:*
  - [binary_sensor.activity_in_master_bedroom](https://github.com/basnijholt/home-assistant-config/blob/5381dd8577848e8c74067fb623d6de62ee557552/includes/binary_sensors.yaml#L86)

### [Reboot bedroom ceiling Shelly](https://github.com/basnijholt/home-assistant-config/blob/07c0fdd72fdd676ab1b95db36f7baef313f7cff6/automations/light.yaml#L317)

  *which uses:*
  - [shell_command.reboot_bedroom_ceiling](https://github.com/basnijholt/home-assistant-config/blob/0a49b1ab897f8dbc068b042f4e6c2ba0e4cb3d8f/includes/shell_commands.yaml#L15)

### [Turn on utility room / garage outside](https://github.com/basnijholt/home-assistant-config/blob/07c0fdd72fdd676ab1b95db36f7baef313f7cff6/automations/light.yaml#L338)

  *which uses:*
  - [binary_sensor.activity_in_utility_room](https://github.com/basnijholt/home-assistant-config/blob/5381dd8577848e8c74067fb623d6de62ee557552/includes/binary_sensors.yaml#L73)
  - [binary_sensor.activity_outside_front_door](https://github.com/basnijholt/home-assistant-config/blob/5381dd8577848e8c74067fb623d6de62ee557552/includes/binary_sensors.yaml#L107)
  - [binary_sensor.activity_outside_garage](https://github.com/basnijholt/home-assistant-config/blob/5381dd8577848e8c74067fb623d6de62ee557552/includes/binary_sensors.yaml#L113)

### [Turn off utility room / garage outside](https://github.com/basnijholt/home-assistant-config/blob/07c0fdd72fdd676ab1b95db36f7baef313f7cff6/automations/light.yaml#L358)

  *which uses:*
  - [binary_sensor.activity_in_utility_room](https://github.com/basnijholt/home-assistant-config/blob/5381dd8577848e8c74067fb623d6de62ee557552/includes/binary_sensors.yaml#L73)
  - [binary_sensor.activity_outside_front_door](https://github.com/basnijholt/home-assistant-config/blob/5381dd8577848e8c74067fb623d6de62ee557552/includes/binary_sensors.yaml#L107)
  - [binary_sensor.activity_outside_garage](https://github.com/basnijholt/home-assistant-config/blob/5381dd8577848e8c74067fb623d6de62ee557552/includes/binary_sensors.yaml#L113)
  - [binary_sensor.activity_outside_house](https://github.com/basnijholt/home-assistant-config/blob/5381dd8577848e8c74067fb623d6de62ee557552/includes/binary_sensors.yaml#L119)

### [Toggle guest room](https://github.com/basnijholt/home-assistant-config/blob/07c0fdd72fdd676ab1b95db36f7baef313f7cff6/automations/light.yaml#L390)

  *which uses:*
  - [input_boolean.guest_mode](https://github.com/basnijholt/home-assistant-config/blob/97b67b70bdf7e712c28a13523ff804c143df26be/includes/input_booleans.yaml#L22)
  - [binary_sensor.activity_in_guest_room](https://github.com/basnijholt/home-assistant-config/blob/5381dd8577848e8c74067fb623d6de62ee557552/includes/binary_sensors.yaml#L99)

### [Toggle baby room](https://github.com/basnijholt/home-assistant-config/blob/07c0fdd72fdd676ab1b95db36f7baef313f7cff6/automations/light.yaml#L415)

  *which uses:*
  - [binary_sensor.activity_in_baby_room](https://github.com/basnijholt/home-assistant-config/blob/5381dd8577848e8c74067fb623d6de62ee557552/includes/binary_sensors.yaml#L93)

### [Turn off guest room (extra check)](https://github.com/basnijholt/home-assistant-config/blob/07c0fdd72fdd676ab1b95db36f7baef313f7cff6/automations/light.yaml#L430)

  In case the other automation failed

  *which uses:*
  - [binary_sensor.activity_in_guest_room](https://github.com/basnijholt/home-assistant-config/blob/5381dd8577848e8c74067fb623d6de62ee557552/includes/binary_sensors.yaml#L99)

### [Turn off baby room (extra check)](https://github.com/basnijholt/home-assistant-config/blob/07c0fdd72fdd676ab1b95db36f7baef313f7cff6/automations/light.yaml#L446)

  In case the other automation failed

  *which uses:*
  - [binary_sensor.activity_in_baby_room](https://github.com/basnijholt/home-assistant-config/blob/5381dd8577848e8c74067fb623d6de62ee557552/includes/binary_sensors.yaml#L93)

### [Turn off hall (extra check)](https://github.com/basnijholt/home-assistant-config/blob/07c0fdd72fdd676ab1b95db36f7baef313f7cff6/automations/light.yaml#L462)

  In case the other automation failed

  *which uses:*
  - [binary_sensor.activity_in_hall](https://github.com/basnijholt/home-assistant-config/blob/5381dd8577848e8c74067fb623d6de62ee557552/includes/binary_sensors.yaml#L79)

### [Turn off bedroom (extra check)](https://github.com/basnijholt/home-assistant-config/blob/07c0fdd72fdd676ab1b95db36f7baef313f7cff6/automations/light.yaml#L481)

  In case the other automation failed

  *which uses:*
  - [input_boolean.automatic_bedroom_lights](https://github.com/basnijholt/home-assistant-config/blob/97b67b70bdf7e712c28a13523ff804c143df26be/includes/input_booleans.yaml#L40)
  - [input_boolean.bedroom_lights_automatically_turned_on](https://github.com/basnijholt/home-assistant-config/blob/97b67b70bdf7e712c28a13523ff804c143df26be/includes/input_booleans.yaml#L31)
  - [binary_sensor.activity_in_master_bedroom](https://github.com/basnijholt/home-assistant-config/blob/5381dd8577848e8c74067fb623d6de62ee557552/includes/binary_sensors.yaml#L86)

### [Turn off utility room / garage (extra check)](https://github.com/basnijholt/home-assistant-config/blob/07c0fdd72fdd676ab1b95db36f7baef313f7cff6/automations/light.yaml#L502)

  In case the other automation failed

  *which uses:*
  - [binary_sensor.activity_in_utility_room](https://github.com/basnijholt/home-assistant-config/blob/5381dd8577848e8c74067fb623d6de62ee557552/includes/binary_sensors.yaml#L73)
  - [binary_sensor.activity_outside_front_door](https://github.com/basnijholt/home-assistant-config/blob/5381dd8577848e8c74067fb623d6de62ee557552/includes/binary_sensors.yaml#L107)
  - [binary_sensor.activity_outside_garage](https://github.com/basnijholt/home-assistant-config/blob/5381dd8577848e8c74067fb623d6de62ee557552/includes/binary_sensors.yaml#L113)

### [Update Zigbee2MQTT lights input_select options](https://github.com/basnijholt/home-assistant-config/blob/07c0fdd72fdd676ab1b95db36f7baef313f7cff6/automations/light.yaml#L535)

  *which uses:*
  - [input_select.z2m_lights](https://github.com/basnijholt/home-assistant-config/blob/07c0fdd72fdd676ab1b95db36f7baef313f7cff6/includes/input_selects.yaml#L57)

### [Update Zigbee2MQTT Lights State](https://github.com/basnijholt/home-assistant-config/blob/07c0fdd72fdd676ab1b95db36f7baef313f7cff6/automations/light.yaml#L562)

  Refresh the state of all Zigbee2MQTT lights

  *which uses:*
  - [script.sync_z2m_to_ha_lights](https://github.com/basnijholt/home-assistant-config/blob/0a49b1ab897f8dbc068b042f4e6c2ba0e4cb3d8f/scripts.yaml#L649)

[^ toc](#automations---table-of-content)


## [Lovelace 👨‍💻](https://github.com/basnijholt/home-assistant-config/blob/dc715e0185302b39caf58117fcfeb03d71d99de4/automations/lovelace.yaml)
### [Convert lovelace.json to lovelace-ui.yaml](https://github.com/basnijholt/home-assistant-config/blob/dc715e0185302b39caf58117fcfeb03d71d99de4/automations/lovelace.yaml#L11)

  *which uses:*
  - [shell_command.chores](https://github.com/basnijholt/home-assistant-config/blob/0a49b1ab897f8dbc068b042f4e6c2ba0e4cb3d8f/includes/shell_commands.yaml#L13)
  - [shell_command.convert_lovelace](https://github.com/basnijholt/home-assistant-config/blob/0a49b1ab897f8dbc068b042f4e6c2ba0e4cb3d8f/includes/shell_commands.yaml#L11)

[^ toc](#automations---table-of-content)


## [Mailbox 📫📣](https://github.com/basnijholt/home-assistant-config/blob/86402affcf50b4959f40964f7c83988dec165aec/automations/mailbox.yaml)
### [The mailbox was opened](https://github.com/basnijholt/home-assistant-config/blob/86402affcf50b4959f40964f7c83988dec165aec/automations/mailbox.yaml#L11)

  In the UI show the `input_boolean.mailbox_full`. It needs to
be manually switched off after getting the mail."


  *which uses:*
  - [input_boolean.mailbox_full](https://github.com/basnijholt/home-assistant-config/blob/97b67b70bdf7e712c28a13523ff804c143df26be/includes/input_booleans.yaml#L67)

[^ toc](#automations---table-of-content)


## [Media player 🔈📺](https://github.com/basnijholt/home-assistant-config/blob/c5ad25d8fc438b719fead13616c3e82a4e47b270/automations/media_player.yaml)
### [Turn on Opt when TV is on and Spotify is not playing and not Usb](https://github.com/basnijholt/home-assistant-config/blob/c5ad25d8fc438b719fead13616c3e82a4e47b270/automations/media_player.yaml#L12)

  The speaker is connected via an optical cable to the TV. Whenever the speakers
aren't playing Spotify (via WiFi) directly, switch the source of the speakers
to "Opt".



### [Turn off speakers when turning off TV](https://github.com/basnijholt/home-assistant-config/blob/c5ad25d8fc438b719fead13616c3e82a4e47b270/automations/media_player.yaml#L42)


### [If speakers off and TV on, turn on the speaker on TV state change](https://github.com/basnijholt/home-assistant-config/blob/c5ad25d8fc438b719fead13616c3e82a4e47b270/automations/media_player.yaml#L61)


### [Update Spotify entity when TV is on every 5 seconds](https://github.com/basnijholt/home-assistant-config/blob/c5ad25d8fc438b719fead13616c3e82a4e47b270/automations/media_player.yaml#L85)


### [Sync KEF LS50 and TV volume](https://github.com/basnijholt/home-assistant-config/blob/c5ad25d8fc438b719fead13616c3e82a4e47b270/automations/media_player.yaml#L100)


### [Automatically turn off TV and Xbox after two hours of inactivity](https://github.com/basnijholt/home-assistant-config/blob/c5ad25d8fc438b719fead13616c3e82a4e47b270/automations/media_player.yaml#L129)


### [Turn On Living Room TV with WakeOnLan](https://github.com/basnijholt/home-assistant-config/blob/c5ad25d8fc438b719fead13616c3e82a4e47b270/automations/media_player.yaml#L141)


[^ toc](#automations---table-of-content)


## [Music 🎵](https://github.com/basnijholt/home-assistant-config/blob/55c982f96c77b5e15b9334abee8785ecdf4edcc9/automations/music.yaml)
### [Start playlist](https://github.com/basnijholt/home-assistant-config/blob/55c982f96c77b5e15b9334abee8785ecdf4edcc9/automations/music.yaml#L11)

  *which uses:*
  - [input_boolean.start_the_music](https://github.com/basnijholt/home-assistant-config/blob/97b67b70bdf7e712c28a13523ff804c143df26be/includes/input_booleans.yaml#L12)
  - [script.start_spotify_playlist_of_nearest_person](https://github.com/basnijholt/home-assistant-config/blob/0a49b1ab897f8dbc068b042f4e6c2ba0e4cb3d8f/scripts.yaml#L78)

### [Switch music from iPhone to speakers if coming home](https://github.com/basnijholt/home-assistant-config/blob/55c982f96c77b5e15b9334abee8785ecdf4edcc9/automations/music.yaml#L26)

  *which uses:*
  - [input_boolean.guest_mode](https://github.com/basnijholt/home-assistant-config/blob/97b67b70bdf7e712c28a13523ff804c143df26be/includes/input_booleans.yaml#L22)

[^ toc](#automations---table-of-content)


## [Notifications 🔔](https://github.com/basnijholt/home-assistant-config/blob/0ed6ab4d151359cd26a7d26adcd422634e459cbd/automations/notifications.yaml)
### [Marcella arrived at Rotterdam Centraal](https://github.com/basnijholt/home-assistant-config/blob/0ed6ab4d151359cd26a7d26adcd422634e459cbd/automations/notifications.yaml#L12)


### [Front door has opened](https://github.com/basnijholt/home-assistant-config/blob/0ed6ab4d151359cd26a7d26adcd422634e459cbd/automations/notifications.yaml#L24)

  *which uses:*
  - [input_boolean.front_door_open_warning](https://github.com/basnijholt/home-assistant-config/blob/97b67b70bdf7e712c28a13523ff804c143df26be/includes/input_booleans.yaml#L28)

[^ toc](#automations---table-of-content)


## [Plant 🌱](https://github.com/basnijholt/home-assistant-config/blob/b0a74eea9b02f5a337ff8547537b60b3a3ff2af4/automations/plant.yaml)
### [Problem with Calathea](https://github.com/basnijholt/home-assistant-config/blob/b0a74eea9b02f5a337ff8547537b60b3a3ff2af4/automations/plant.yaml#L11)

  *which uses:*
  - [plant.calathea](https://github.com/basnijholt/home-assistant-config/blob/1666298c45087e81b26e8517f03c61c5e1c92ed9/includes/plant.yaml#L57)

### [Problem with Monstera](https://github.com/basnijholt/home-assistant-config/blob/b0a74eea9b02f5a337ff8547537b60b3a3ff2af4/automations/plant.yaml#L29)

  *which uses:*
  - [plant.monstera](https://github.com/basnijholt/home-assistant-config/blob/1666298c45087e81b26e8517f03c61c5e1c92ed9/includes/plant.yaml#L40)

### [Problem with Peace lily](https://github.com/basnijholt/home-assistant-config/blob/b0a74eea9b02f5a337ff8547537b60b3a3ff2af4/automations/plant.yaml#L47)

  *which uses:*
  - [plant.peace_lily](https://github.com/basnijholt/home-assistant-config/blob/1666298c45087e81b26e8517f03c61c5e1c92ed9/includes/plant.yaml#L73)

[^ toc](#automations---table-of-content)


## [Security 👮🚨](https://github.com/basnijholt/home-assistant-config/blob/da5ee3de9701c846c4e274fced15d92c033826d9/automations/security.yaml)
### [Motion detected but we are not home](https://github.com/basnijholt/home-assistant-config/blob/da5ee3de9701c846c4e274fced15d92c033826d9/automations/security.yaml#L11)

  *which uses:*
  - [binary_sensor.motion_detected](https://github.com/basnijholt/home-assistant-config/blob/5381dd8577848e8c74067fb623d6de62ee557552/includes/binary_sensors.yaml#L22)
  - [group.persons](https://github.com/basnijholt/home-assistant-config/blob/6bab64cd641699f47bb147f03af01022699eeecb/includes/groups.yaml#L11)

### [Door has been open for more than 5 minutes](https://github.com/basnijholt/home-assistant-config/blob/da5ee3de9701c846c4e274fced15d92c033826d9/automations/security.yaml#L48)

  *which uses:*
  - [input_boolean.guest_mode](https://github.com/basnijholt/home-assistant-config/blob/97b67b70bdf7e712c28a13523ff804c143df26be/includes/input_booleans.yaml#L22)

### [No one is home but high power usage](https://github.com/basnijholt/home-assistant-config/blob/da5ee3de9701c846c4e274fced15d92c033826d9/automations/security.yaml#L65)

  *which uses:*
  - [binary_sensor.no_one_home](https://github.com/basnijholt/home-assistant-config/blob/5381dd8577848e8c74067fb623d6de62ee557552/includes/binary_sensors.yaml#L189)

### [Bathroom door has opened](https://github.com/basnijholt/home-assistant-config/blob/da5ee3de9701c846c4e274fced15d92c033826d9/automations/security.yaml#L87)

  *which uses:*
  - [input_boolean.bathroom_door_open_warning](https://github.com/basnijholt/home-assistant-config/blob/97b67b70bdf7e712c28a13523ff804c143df26be/includes/input_booleans.yaml#L25)

[^ toc](#automations---table-of-content)


## [Night mode 🌕🌑](https://github.com/basnijholt/home-assistant-config/blob/fb91cf80f7559983ee6c873cae3c3cbce304b3ac/automations/sleep_mode.yaml)
### [Automatically turn off when alarm turns off or at 7AM](https://github.com/basnijholt/home-assistant-config/blob/fb91cf80f7559983ee6c873cae3c3cbce304b3ac/automations/sleep_mode.yaml#L12)

  *which uses:*
  - [input_boolean.alarm_clock](https://github.com/basnijholt/home-assistant-config/blob/97b67b70bdf7e712c28a13523ff804c143df26be/includes/input_booleans.yaml#L52)
  - [input_select.sleep_mode](https://github.com/basnijholt/home-assistant-config/blob/07c0fdd72fdd676ab1b95db36f7baef313f7cff6/includes/input_selects.yaml#L11)

### [Turn off automatic bedroom lights](https://github.com/basnijholt/home-assistant-config/blob/fb91cf80f7559983ee6c873cae3c3cbce304b3ac/automations/sleep_mode.yaml#L30)

  *which uses:*
  - [input_boolean.automatic_bedroom_lights](https://github.com/basnijholt/home-assistant-config/blob/97b67b70bdf7e712c28a13523ff804c143df26be/includes/input_booleans.yaml#L40)
  - [input_select.sleep_mode](https://github.com/basnijholt/home-assistant-config/blob/07c0fdd72fdd676ab1b95db36f7baef313f7cff6/includes/input_selects.yaml#L11)

### [Set low temperature when sleep mode turns on](https://github.com/basnijholt/home-assistant-config/blob/fb91cf80f7559983ee6c873cae3c3cbce304b3ac/automations/sleep_mode.yaml#L39)

  *which uses:*
  - [input_select.sleep_mode](https://github.com/basnijholt/home-assistant-config/blob/07c0fdd72fdd676ab1b95db36f7baef313f7cff6/includes/input_selects.yaml#L11)
  - [script.set_low_temperature](https://github.com/basnijholt/home-assistant-config/blob/0a49b1ab897f8dbc068b042f4e6c2ba0e4cb3d8f/scripts.yaml#L398)

### [Go from half to total sleeping mode](https://github.com/basnijholt/home-assistant-config/blob/fb91cf80f7559983ee6c873cae3c3cbce304b3ac/automations/sleep_mode.yaml#L47)

  When it is half sleeping mode and there is no activity in the house for more than an hour go to total sleeping mode.


  *which uses:*
  - [input_select.sleep_mode](https://github.com/basnijholt/home-assistant-config/blob/07c0fdd72fdd676ab1b95db36f7baef313f7cff6/includes/input_selects.yaml#L11)
  - [binary_sensor.activity_outside_bedroom](https://github.com/basnijholt/home-assistant-config/blob/5381dd8577848e8c74067fb623d6de62ee557552/includes/binary_sensors.yaml#L126)

### [Set sleeping mode in the living room](https://github.com/basnijholt/home-assistant-config/blob/fb91cf80f7559983ee6c873cae3c3cbce304b3ac/automations/sleep_mode.yaml#L70)

  Set the living room lights to sleep mode only when no-one is there anymore.


  *which uses:*
  - [input_select.sleep_mode](https://github.com/basnijholt/home-assistant-config/blob/07c0fdd72fdd676ab1b95db36f7baef313f7cff6/includes/input_selects.yaml#L11)
  - [binary_sensor.activity_in_living_room](https://github.com/basnijholt/home-assistant-config/blob/5381dd8577848e8c74067fb623d6de62ee557552/includes/binary_sensors.yaml#L58)

[^ toc](#automations---table-of-content)


## [System 🖥](https://github.com/basnijholt/home-assistant-config/blob/fb91cf80f7559983ee6c873cae3c3cbce304b3ac/automations/system.yaml)
### [Warning about high CPU usage](https://github.com/basnijholt/home-assistant-config/blob/fb91cf80f7559983ee6c873cae3c3cbce304b3ac/automations/system.yaml#L11)


### [Warning about high CPU temperature](https://github.com/basnijholt/home-assistant-config/blob/fb91cf80f7559983ee6c873cae3c3cbce304b3ac/automations/system.yaml#L24)


### [Warning about high Xbox temperature](https://github.com/basnijholt/home-assistant-config/blob/fb91cf80f7559983ee6c873cae3c3cbce304b3ac/automations/system.yaml#L37)


### [Update DNS](https://github.com/basnijholt/home-assistant-config/blob/fb91cf80f7559983ee6c873cae3c3cbce304b3ac/automations/system.yaml#L56)

  Update the DNS at Gandi to point my domain to my Home Assistant instance.

  *which uses:*
  - [script.update_dns](https://github.com/basnijholt/home-assistant-config/blob/0a49b1ab897f8dbc068b042f4e6c2ba0e4cb3d8f/scripts.yaml#L428)

### [Run chores](https://github.com/basnijholt/home-assistant-config/blob/fb91cf80f7559983ee6c873cae3c3cbce304b3ac/automations/system.yaml#L64)

  Run shell and Python scripts in utils folder.

  *which uses:*
  - [shell_command.chores](https://github.com/basnijholt/home-assistant-config/blob/0a49b1ab897f8dbc068b042f4e6c2ba0e4cb3d8f/includes/shell_commands.yaml#L13)

### [MQTT sensors are not updating](https://github.com/basnijholt/home-assistant-config/blob/fb91cf80f7559983ee6c873cae3c3cbce304b3ac/automations/system.yaml#L72)

  Check whether we are receiving messages over MQTT from my other HA instance.


### [Battery level low](https://github.com/basnijholt/home-assistant-config/blob/fb91cf80f7559983ee6c873cae3c3cbce304b3ac/automations/system.yaml#L85)


[^ toc](#automations---table-of-content)


## [Test 🧪](https://github.com/basnijholt/home-assistant-config/blob/6ca664391f26c93d8bd5b16c7da63fb67d80557e/automations/test.yaml)
### [Listen to Adaptive Lighting events](https://github.com/basnijholt/home-assistant-config/blob/6ca664391f26c93d8bd5b16c7da63fb67d80557e/automations/test.yaml#L11)


### [Time](https://github.com/basnijholt/home-assistant-config/blob/6ca664391f26c93d8bd5b16c7da63fb67d80557e/automations/test.yaml#L30)


### [Flash lights](https://github.com/basnijholt/home-assistant-config/blob/6ca664391f26c93d8bd5b16c7da63fb67d80557e/automations/test.yaml#L43)


### [Call update_entity after light.turn_on/turn_off](https://github.com/basnijholt/home-assistant-config/blob/6ca664391f26c93d8bd5b16c7da63fb67d80557e/automations/test.yaml#L64)


[^ toc](#automations---table-of-content)


## [Utilities 🧺👚🍽](https://github.com/basnijholt/home-assistant-config/blob/66d951dc84a6d10ecb21cd9fb02ba20852afedeb/automations/utilities.yaml)
### [Washing machine or dishwasher started or finished](https://github.com/basnijholt/home-assistant-config/blob/66d951dc84a6d10ecb21cd9fb02ba20852afedeb/automations/utilities.yaml#L12)

  *which uses:*
  - [binary_sensor.dishwasher](https://github.com/basnijholt/home-assistant-config/blob/5381dd8577848e8c74067fb623d6de62ee557552/includes/binary_sensors.yaml#L148)
  - [binary_sensor.washing_machine](https://github.com/basnijholt/home-assistant-config/blob/5381dd8577848e8c74067fb623d6de62ee557552/includes/binary_sensors.yaml#L136)

### [Washing machine notification](https://github.com/basnijholt/home-assistant-config/blob/66d951dc84a6d10ecb21cd9fb02ba20852afedeb/automations/utilities.yaml#L29)

  *which uses:*
  - [script.utility_notification](https://github.com/basnijholt/home-assistant-config/blob/0a49b1ab897f8dbc068b042f4e6c2ba0e4cb3d8f/scripts.yaml#L511)
  - [binary_sensor.washing_machine](https://github.com/basnijholt/home-assistant-config/blob/5381dd8577848e8c74067fb623d6de62ee557552/includes/binary_sensors.yaml#L136)

### [Dishwasher notification](https://github.com/basnijholt/home-assistant-config/blob/66d951dc84a6d10ecb21cd9fb02ba20852afedeb/automations/utilities.yaml#L41)

  *which uses:*
  - [script.utility_notification](https://github.com/basnijholt/home-assistant-config/blob/0a49b1ab897f8dbc068b042f4e6c2ba0e4cb3d8f/scripts.yaml#L511)
  - [binary_sensor.dishwasher](https://github.com/basnijholt/home-assistant-config/blob/5381dd8577848e8c74067fb623d6de62ee557552/includes/binary_sensors.yaml#L148)

[^ toc](#automations---table-of-content)


## [Vacation mode 🏝](https://github.com/basnijholt/home-assistant-config/blob/585f51eecf4aef718381047225b29f960fd2751b/automations/vacation_mode.yaml)
### [Auto turn on](https://github.com/basnijholt/home-assistant-config/blob/585f51eecf4aef718381047225b29f960fd2751b/automations/vacation_mode.yaml#L11)

  *which uses:*
  - [input_boolean.guest_mode](https://github.com/basnijholt/home-assistant-config/blob/97b67b70bdf7e712c28a13523ff804c143df26be/includes/input_booleans.yaml#L22)
  - [input_boolean.vacation_mode](https://github.com/basnijholt/home-assistant-config/blob/97b67b70bdf7e712c28a13523ff804c143df26be/includes/input_booleans.yaml#L19)
  - [group.persons](https://github.com/basnijholt/home-assistant-config/blob/6bab64cd641699f47bb147f03af01022699eeecb/includes/groups.yaml#L11)

### [Auto turn off](https://github.com/basnijholt/home-assistant-config/blob/585f51eecf4aef718381047225b29f960fd2751b/automations/vacation_mode.yaml#L31)

  *which uses:*
  - [input_boolean.guest_mode](https://github.com/basnijholt/home-assistant-config/blob/97b67b70bdf7e712c28a13523ff804c143df26be/includes/input_booleans.yaml#L22)
  - [input_boolean.vacation_mode](https://github.com/basnijholt/home-assistant-config/blob/97b67b70bdf7e712c28a13523ff804c143df26be/includes/input_booleans.yaml#L19)
  - [group.persons](https://github.com/basnijholt/home-assistant-config/blob/6bab64cd641699f47bb147f03af01022699eeecb/includes/groups.yaml#L11)

[^ toc](#automations---table-of-content)


## [Vacuum 🧹](https://github.com/basnijholt/home-assistant-config/blob/da5ee3de9701c846c4e274fced15d92c033826d9/automations/vacuum.yaml)
### [Started cleaning](https://github.com/basnijholt/home-assistant-config/blob/da5ee3de9701c846c4e274fced15d92c033826d9/automations/vacuum.yaml#L11)


### [Stopped cleaning](https://github.com/basnijholt/home-assistant-config/blob/da5ee3de9701c846c4e274fced15d92c033826d9/automations/vacuum.yaml#L23)

  *which uses:*
  - [input_boolean.cleaned_today](https://github.com/basnijholt/home-assistant-config/blob/97b67b70bdf7e712c28a13523ff804c143df26be/includes/input_booleans.yaml#L16)

### [Reminder notification](https://github.com/basnijholt/home-assistant-config/blob/da5ee3de9701c846c4e274fced15d92c033826d9/automations/vacuum.yaml#L37)

  *which uses:*
  - [binary_sensor.vacuum_day](https://github.com/basnijholt/home-assistant-config/blob/5381dd8577848e8c74067fb623d6de62ee557552/includes/binary_sensors.yaml#L183)

### [Cleanup if nobody is home](https://github.com/basnijholt/home-assistant-config/blob/da5ee3de9701c846c4e274fced15d92c033826d9/automations/vacuum.yaml#L51)

  *which uses:*
  - [input_boolean.cleaned_today](https://github.com/basnijholt/home-assistant-config/blob/97b67b70bdf7e712c28a13523ff804c143df26be/includes/input_booleans.yaml#L16)
  - [input_boolean.guest_mode](https://github.com/basnijholt/home-assistant-config/blob/97b67b70bdf7e712c28a13523ff804c143df26be/includes/input_booleans.yaml#L22)
  - [input_boolean.vacation_mode](https://github.com/basnijholt/home-assistant-config/blob/97b67b70bdf7e712c28a13523ff804c143df26be/includes/input_booleans.yaml#L19)
  - [binary_sensor.vacuum_day](https://github.com/basnijholt/home-assistant-config/blob/5381dd8577848e8c74067fb623d6de62ee557552/includes/binary_sensors.yaml#L183)
  - [group.persons](https://github.com/basnijholt/home-assistant-config/blob/6bab64cd641699f47bb147f03af01022699eeecb/includes/groups.yaml#L11)

### [Reset cleaned today](https://github.com/basnijholt/home-assistant-config/blob/da5ee3de9701c846c4e274fced15d92c033826d9/automations/vacuum.yaml#L82)

  *which uses:*
  - [input_boolean.cleaned_today](https://github.com/basnijholt/home-assistant-config/blob/97b67b70bdf7e712c28a13523ff804c143df26be/includes/input_booleans.yaml#L16)

### [Reset to standard mode](https://github.com/basnijholt/home-assistant-config/blob/da5ee3de9701c846c4e274fced15d92c033826d9/automations/vacuum.yaml#L91)


[^ toc](#automations---table-of-content)


## [Work 💼](https://github.com/basnijholt/home-assistant-config/blob/fb91cf80f7559983ee6c873cae3c3cbce304b3ac/automations/work.yaml)
### [Go home notification](https://github.com/basnijholt/home-assistant-config/blob/fb91cf80f7559983ee6c873cae3c3cbce304b3ac/automations/work.yaml#L11)

  *which uses:*
  - [input_boolean.work_hour_notification_sent](https://github.com/basnijholt/home-assistant-config/blob/97b67b70bdf7e712c28a13523ff804c143df26be/includes/input_booleans.yaml#L49)
  - [binary_sensor.worked_enough_today](https://github.com/basnijholt/home-assistant-config/blob/5381dd8577848e8c74067fb623d6de62ee557552/includes/binary_sensors.yaml#L160)

### [Reset input_boolean at midnight](https://github.com/basnijholt/home-assistant-config/blob/fb91cf80f7559983ee6c873cae3c3cbce304b3ac/automations/work.yaml#L32)

  *which uses:*
  - [input_boolean.work_hour_notification_sent](https://github.com/basnijholt/home-assistant-config/blob/97b67b70bdf7e712c28a13523ff804c143df26be/includes/input_booleans.yaml#L49)

### [Bas left work notification for Marcella](https://github.com/basnijholt/home-assistant-config/blob/fb91cf80f7559983ee6c873cae3c3cbce304b3ac/automations/work.yaml#L44)


[^ toc](#automations---table-of-content)


<!-- end-automations -->
