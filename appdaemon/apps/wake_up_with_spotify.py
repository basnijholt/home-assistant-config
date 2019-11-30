"""Turns on speakers and plays Spotify while slowly ramping the volume.

To cancel the ramp, simply change the volume manually.

# Example `apps.yaml` config:
```
wake_up_with_spotify:
  module: wake_up_with_spotify
  class: WakeUpWithSpotify
  speaker: media_player.kef
  speaker_name: "KEF LS50 Wireless"
  playlist: "spotify:playlist:6rPTm9dYftKcFAfwyRqmDZ"
  total_time: 900
  final_volume: 0.3
  input_boolean: input_boolean.wake_up_with_spotify
```
# Example `configuration.yaml`:
```
input_boolean:
  wake_up_with_spotify:
    name: Start wake up with Spotify
    initial: off
    icon: mdi:music
```
"""

import math

import hassapi as hass

DEFAULT_SPEAKER = "media_player.kef"
DEFAULT_SPEAKER_NAME = "KEF LS50 Wireless"
DEFAULT_PLAYLIST = "6rPTm9dYftKcFAfwyRqmDZ"
DEFAULT_TOTAL_TIME = 300
DEFAULT_FINAL_VOLUME = 0.3
DEFAULT_INPUT_BOOLEAN = "input_boolean.wake_up_with_spotify"

MIN_VOLUME_STEP = 0.01

DEFAULTS = {
    "speaker": DEFAULT_SPEAKER,
    "speaker_name": DEFAULT_SPEAKER_NAME,
    "playlist": DEFAULT_PLAYLIST,
    "total_time": DEFAULT_TOTAL_TIME,
    "final_volume": DEFAULT_FINAL_VOLUME,
    "input_boolean": DEFAULT_INPUT_BOOLEAN,
}


def time_step(total_time, final_volume, step):
    return total_time / math.floor(final_volume / step)


class WakeUpWithSpotify(hass.Hass):
    def initialize(self):
        self.volume = None
        self.input_boolean = self.args.get("input_boolean", DEFAULT_INPUT_BOOLEAN)
        self.listen_state(self.start_cb, self.input_boolean, new="on")
        self.listen_event(self.start, "start_spotify_ramp")
        self._handle = None

    def maybe_defaults(self, kwargs):
        for k, v in DEFAULTS.items():
            if k not in kwargs:
                default_value = self.args.get(k, v)
                kwargs[k] = default_value

    @property
    def done_signal(self):
        return f"{self.input_boolean}.done"

    def start_cb(self, entity, attribute, old, new, kwargs):
        self.set_state(self.input_boolean, state="off")
        self.start()

    def start(self, **kwargs):
        self.volume = 0
        self.maybe_defaults(kwargs)
        app = self.get_app("start_spotify")
        self._handle = self.listen_event(
            self.start_volume_ramp_cb, app.done_signal, timeout=30
        )  # XXX: use oneshot=True when it is available.
        app.start(volume=self.volume, **kwargs)

    def set_volume(self, speaker, volume):
        self.call_service(
            "media_player/volume_set", entity_id=speaker, volume_level=volume
        )

    def start_volume_ramp_cb(self, event_name=None, data=None, kwargs=None):
        self._handle = self.cancel_listen_event(self._handle)
        self.run_in(self.volume_up, 0, **data)
        self.log(f"Going to run for {data['total_time']} seconds.")

    def volume_was_manually_changed(self, speaker):
        current_volume = self.get_state(speaker, attribute="volume_level")
        return abs(current_volume - self.volume) > MIN_VOLUME_STEP

    def volume_up(self, kwargs=None):
        if self.volume_was_manually_changed(kwargs["speaker"]):
            self.log("Someone changed the volume manually, canceling.")
            return
        self.volume += MIN_VOLUME_STEP
        if self.volume > kwargs["final_volume"]:
            self.fire_event(self.done_signal, **kwargs)
            self.log(self.done_signal + f" {kwargs}")
            return
        dt = time_step(kwargs["total_time"], kwargs["final_volume"], MIN_VOLUME_STEP)
        self.log(f"Setting volume: {self.volume}, with a timestep of {dt}.")
        self.set_volume(kwargs["speaker"], self.volume)
        self.run_in(self.volume_up, dt, **kwargs)
