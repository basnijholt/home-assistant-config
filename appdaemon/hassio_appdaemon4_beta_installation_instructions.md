# Install AppDaemon 4 beta on Hass.io instructions

This is just for reference. I needed AD 4 for some new features and thought I might share the instructions on how to get it.

In the Hass.io AppDaemon addon use the following config:
```json
{
  "disable_auto_token": true,
  "system_packages": [
    "python3",
    "build-base",
    "libffi-dev",
    "python3-dev"
  ],
  "python_packages": [
    "appdaemon==4.0.0b2"
  ]
}
```
and change `/config/appdaemon/appdaemon.yaml` to:
```yaml
secrets: /config/secrets.yaml
logs: null
appdaemon:
  latitude: !secret latitude_home
  longitude: !secret longitude_home
  elevation: 0
  time_zone: Europe/Amsterdam
  total_threads: 10
  app_dir: /config/appdaemon/apps
  plugins:
    HASS:
      type: hass
      ha_url: https://url_here.duckdns.org:8123  # <---- change this accordingly
      token: !secret hass_ad_gh_token
http:
  url: http://0.0.0.0:5050
hadashboard:
  dash_url: http://127.0.0.1:5050
  dash_dir: /config/appdaemon/dashboards
```

Get a "Long-Lived Access Tokens" by going to your user profile and scrolling all the way down.

Save it in `secrets.yaml` under `hass_ad_gh_token`.

Make sure you also have `!secret latitude_home` and `!secret longitude_home` defined.

Restart the addon and profit!
