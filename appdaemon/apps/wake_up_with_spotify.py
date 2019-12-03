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

import hassapi as hass

DEFAULT_SPEAKER = "media_player.kef"
DEFAULT_SPEAKER_NAME = "KEF LS50 Wireless"
DEFAULT_PLAYLIST = "6rPTm9dYftKcFAfwyRqmDZ"
DEFAULT_TOTAL_TIME = 300
DEFAULT_FINAL_VOLUME = 0.3
DEFAULT_INPUT_BOOLEAN = "input_boolean.wake_up_with_spotify"

MIN_VOLUME_STEP = 0.01

TIME_STEP = 4

DEFAULTS = {
    "speaker": DEFAULT_SPEAKER,
    "speaker_name": DEFAULT_SPEAKER_NAME,
    "playlist": DEFAULT_PLAYLIST,
    "total_time": DEFAULT_TOTAL_TIME,
    "final_volume": DEFAULT_FINAL_VOLUME,
    "input_boolean": DEFAULT_INPUT_BOOLEAN,
}


class WakeUpWithSpotify(hass.Hass):
    def initialize(self):
        self.volume = None
        self.input_boolean = self.args.get("input_boolean", DEFAULT_INPUT_BOOLEAN)
        self.listen_state(self.start_cb, self.input_boolean, new="on")
        self._handle = None
        self.todos = []

    def maybe_defaults(self, kwargs):
        for key in set(DEFAULTS) | set(self.args):
            if key in kwargs:
                continue
            elif key in self.args:
                kwargs[key] = self.args[key]
            else:
                kwargs[key] = DEFAULTS[key]

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
            self.start_volume_ramp_cb, app.done_signal, timeout=30, oneshot=True
        )  # XXX: use oneshot=True when it is available.
        app.start(volume=self.volume, **kwargs)

    def start_volume_ramp_cb(self, event=None, data=None, kwargs=None):
        self._handle = self.cancel_listen_event(self._handle)
        return self.start_volume_ramp(**data)

    def start_volume_ramp(self, **kwargs):
        total_time = kwargs["total_time"]
        slope = kwargs["final_volume"] / total_time
        for t in range(0, total_time + TIME_STEP, TIME_STEP):
            t = min(t, total_time)
            service_kwargs = {
                "entity_id": kwargs["speaker"],
                "volume_level": round(slope * t, 2),
            }
            is_done = t == total_time
            todo = self.run_in(
                self.set_state_cb,
                t,
                service_kwargs=service_kwargs,
                is_done=is_done,
                **kwargs,
            )
            self.todos.append(todo)

    def maybe_cancel(self, speaker):
        current_volume = self.get_state(speaker, attribute="volume_level")
        manually_changed = abs(current_volume - self.volume) > MIN_VOLUME_STEP
        if manually_changed:
            self.log(f"Canceling sequence")
            while self.todos:
                self.cancel_timer(self.todos.pop())

    def set_state_cb(self, kwargs):
        self.maybe_cancel(kwargs["speaker"])
        self.log(f"Setting volume: {kwargs}")
        service_kwargs = kwargs.pop("service_kwargs")
        self.call_service("media_player/volume_set", **service_kwargs)
        self.volume = service_kwargs["volume_level"]
        if kwargs.pop("is_done"):
            self.fire_event(self.done_signal, **kwargs)
            self.log(self.done_signal)
