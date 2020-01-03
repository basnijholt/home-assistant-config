"""Turns on speakers and plays Spotify while slowly ramping the volume.

To cancel the ramp, simply change the volume manually.

# Example `apps.yaml` config:
```
wake_up_with_spotify:
  module: wake_up_with_spotify
  class: WakeUpWithSpotify
  speaker: media_player.kef
  spotify_source: "LS50 Wireless 00C437"
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
DEFAULT_SPOTIFY_SOURCE = "KEF LS50 Wireless"
DEFAULT_PLAYLIST = "6rPTm9dYftKcFAfwyRqmDZ"
DEFAULT_TOTAL_TIME = 300
DEFAULT_FINAL_VOLUME = 0.3
DEFAULT_INPUT_BOOLEAN = "input_boolean.wake_up_with_spotify"

MIN_VOLUME_STEP = 0.01
MIN_TIME_STEP = 4

DEFAULTS = {
    "speaker": DEFAULT_SPEAKER,
    "spotify_source": DEFAULT_SPOTIFY_SOURCE,
    "playlist": DEFAULT_PLAYLIST,
    "total_time": DEFAULT_TOTAL_TIME,
    "final_volume": DEFAULT_FINAL_VOLUME,
    "input_boolean": DEFAULT_INPUT_BOOLEAN,
}


def linspace(a, b, n=100):
    if n < 2:
        return b
    diff = (float(b) - a) / (n - 1)
    return [diff * i + a for i in range(n)]


class WakeUpWithSpotify(hass.Hass):
    def initialize(self):
        self.volume = None
        self.input_boolean = self.args.get("input_boolean", DEFAULT_INPUT_BOOLEAN)
        self.listen_state(self.start_cb, self.input_boolean, new="on")
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
        self.listen_event(
            self.start_volume_ramp_cb, app.done_signal, timeout=30, oneshot=True
        )
        app.start(volume=self.volume, **kwargs)

    def start_volume_ramp_cb(self, event=None, data=None, kwargs=None):
        return self.start_volume_ramp(**data)

    def start_volume_ramp(self, **kwargs):
        steps_volume = round(kwargs["final_volume"] / MIN_VOLUME_STEP)
        steps_time = round(kwargs["total_time"] / MIN_TIME_STEP)
        steps = min(steps_volume, steps_time) + 1
        times = linspace(0, kwargs["total_time"], steps)
        volumes = linspace(0, kwargs["final_volume"], steps)
        self.log(f"volumes: {volumes}, times: {times}")
        for t, vol in zip(times, volumes):
            service_kwargs = {
                "entity_id": kwargs["speaker"],
                "volume_level": round(vol, 2),
            }
            is_done = t == kwargs["total_time"]
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
        manually_changed = abs(current_volume - self.volume) > 2 * MIN_VOLUME_STEP
        if manually_changed:
            self.log(
                f"Canceling sequence, "
                "current_volume: {current_volume}, "
                "volume: {self.volume}"
            )
            while self.todos:
                self.cancel_timer(self.todos.pop())
            return True

    def set_state_cb(self, kwargs):
        if self.maybe_cancel(kwargs["speaker"]):
            return
        service_kwargs = kwargs.pop("service_kwargs")
        self.log(f"Setting volume: {service_kwargs}")
        self.call_service("media_player/volume_set", **service_kwargs)
        self.volume = service_kwargs["volume_level"]
        if kwargs.pop("is_done"):
            self.fire_event(self.done_signal, **kwargs)
            self.log(self.done_signal)
