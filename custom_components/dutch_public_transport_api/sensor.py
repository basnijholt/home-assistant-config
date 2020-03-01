import http.client
import json
import logging
import re
from datetime import datetime, timedelta

import homeassistant.helpers.config_validation as cv
import voluptuous as vol
from homeassistant.components.sensor import PLATFORM_SCHEMA
from homeassistant.const import CONF_NAME, STATE_UNKNOWN
from homeassistant.exceptions import PlatformNotReady
from homeassistant.helpers.entity import Entity
from homeassistant.util import Throttle

__version__ = "0.1"
_LOGGER = logging.getLogger(__name__)
_RESOURCE = "api.9292.nl"

_LATE = "late"

CONF_CREDITS = "Data provided by api.9292.nl"
CONF_DATE_FORMAT = "date_format"
CONF_DESTINATION = "destination"
CONF_STATION = "station"
CONF_NAME = "name"
CONF_SHOW_FUTURE_DEPARTURES = "show_future_departures"

DEFAULT_NAME = "9292OV API"
DEFAULT_SHOW_FUTURE_DEPARTURES = 0

ATTR_CREDITS = "credits"
ATTR_DELAY = "delay"
ATTR_DEPARTURE = "departure"
ATTR_DESTINATION = "destination"
ATTR_STATION = "station"
ATTR_NAME = "name"
ATTR_STOP_NAME = "stop_name"
ATTR_TRANSPORT_TYPE = "transport_type"
ATTR_UPDATE_CYCLE = "update_cycle"

MIN_TIME_BETWEEN_UPDATES = timedelta(seconds=60)

PLATFORM_SCHEMA = PLATFORM_SCHEMA.extend(
    {
        vol.Optional(CONF_NAME, default=DEFAULT_NAME): cv.string,
        vol.Required(CONF_STATION, default=CONF_STATION): cv.string,
        vol.Required(CONF_DESTINATION, default=CONF_DESTINATION): cv.string,
        vol.Optional(
            CONF_SHOW_FUTURE_DEPARTURES, default=DEFAULT_SHOW_FUTURE_DEPARTURES
        ): cv.positive_int,
    }
)


def setup_platform(hass, config, add_entities, discovery_info=None):
    name = config.get(CONF_NAME)
    destination = config.get(CONF_DESTINATION)
    future_departures = config.get(CONF_SHOW_FUTURE_DEPARTURES)
    station = config.get(CONF_STATION)

    ov_api = OvApiData(station)

    ov_api.update()

    if ov_api is None:
        raise PlatformNotReady

    sensors = []

    for counter in range(future_departures + 1):
        if counter == 0:
            sensors.append(OvApiSensor(ov_api, name, destination, counter))
        else:
            sensors.append(
                OvApiSensor(
                    ov_api, name + "_future_" + str(counter), destination, counter
                )
            )

    add_entities(sensors, True)


class OvApiSensor(Entity):
    def __init__(self, ov_api, name, destination, counter):
        self._json_data = ov_api
        self._name = name
        self._destination = destination
        self._sensor_number = counter
        self._station_name = None
        self._transport_type = None
        self._departure = None
        self._delay = None
        self._state = None

    @property
    def name(self):
        return self._name

    @property
    def station_name(self):
        return self._station_name

    @property
    def transport_type(self):
        return self._transport_type

    @property
    def departure(self):
        return self._departure

    @property
    def delay(self):
        return self._delay

    @property
    def state(self):
        return self._state

    @property
    def device_state_attributes(self):
        return {
            ATTR_NAME: self._name,
            ATTR_DESTINATION: self._destination,
            ATTR_TRANSPORT_TYPE: self._transport_type,
            ATTR_DEPARTURE: self._departure,
            ATTR_DELAY: self._delay,
            ATTR_UPDATE_CYCLE: str(MIN_TIME_BETWEEN_UPDATES.seconds) + " seconds",
            ATTR_CREDITS: CONF_CREDITS,
        }

    def update(self):
        """Get the latest data from the 9292OV Api."""
        self._json_data.update()

        data = json.loads(self._json_data.result)
        
        if data is None:
            self._departure = STATE_UNKNOWN
            self._delay = STATE_UNKNOWN
            self._state = STATE_UNKNOWN
        else:
            departures = [
                departure
                for departure in data["tabs"][0]["departures"]
                if departure["destinationName"].lower() == self._destination.lower()
            ]
            if self._sensor_number >= len(departures):
                self._departure = STATE_UNKNOWN
                self._delay = STATE_UNKNOWN
                self._state = STATE_UNKNOWN
            else:
                item = departures[self._sensor_number]
                self._station_name = data["tabs"][0]["locations"][0]["name"]
                self._transport_type = data["tabs"][0]["name"]
                self._departure = item["time"]
                self._delay = item["realtimeText"]
                if item["realtimeState"] == _LATE:
                    departure_time = datetime.strptime(item["time"], "%H:%M")
                    delay_digit = int("".join(filter(str.isdigit, self._delay)))
                    result_delay = (
                        departure_time + timedelta(minutes=delay_digit)
                    ).strftime("%H:%M")
                    self._state = result_delay
                else:
                    self._state = item["time"]


class OvApiData:
    def __init__(self, station):
        self._resource = _RESOURCE
        self.station = station
        self.result = ""
        self._headers = {"cache-control": "no-cache", "accept": "application/json"}

    @Throttle(MIN_TIME_BETWEEN_UPDATES)
    def update(self):
        if self.station.lower() == CONF_STATION.lower():
            _LOGGER.error("Impossible to get data from 9292OV Api, no location.")
            self.result = "Impossible to get data from 9292OV Api, no location."
        else:
            try:
                response = http.client.HTTPConnection(self._resource, timeout=1)
                response.request(
                    "GET",
                    "/0.1/locations/" + self.station + "/departure-times?lang=nl-NL",
                    headers=self._headers,
                )
                result = response.getresponse()
                self.result = result.read().decode("utf-8")
            except http.client.HTTPException:
                _LOGGER.error("Impossible to get data from 929OV Api using location.")
                self.result = "Impossible to get data from 929OV Api using location."
