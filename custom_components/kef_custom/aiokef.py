"""A module for asynchronously interacting with KEF wireless speakers."""

import asyncio
import functools
import inspect
import logging
import socket
import time
from collections import namedtuple
from typing import Any, Callable, Optional, Tuple, Union

from async_timeout import timeout
from tenacity import (
    after_log,
    before_log,
    before_sleep_log,
    retry,
    stop_after_attempt,
    wait_exponential,
)

_LOGGER = logging.getLogger(__name__)

_RESPONSE_OK = 17  # the full response is [82, 17, 255]
_TIMEOUT = 2.0  # in seconds
_KEEP_ALIVE = 1.0  # in seconds
_VOLUME_SCALE = 100.0
_MAX_ATTEMPT_TILL_SUCCESS = 10
_MAX_SEND_MESSAGE_TRIES = 5
_MAX_CONNECTION_RETRIES = 10  # Each time `_send_command` is called, ...
# ... the connection is maximally refreshed this many times.

# Only in the case of Bluetooth there is a second number
# that can identify if the bluetooth is connected.
INPUT_SOURCES_20_MINUTES_LR = {
    "Bluetooth": 9,
    "Bluetooth_paired": 15,  # This cannot be used to set!
    "Aux": 10,
    "Opt": 11,
    "Usb": 12,
    "Wifi": 2,
}

# We will create {source_name: {standby_time: ("L/R code", "R/L code")}}
STANDBY_OPTIONS = [20, 60, None]  # in minutes and 0 means never standby
INPUT_SOURCES = {}
for source, code in INPUT_SOURCES_20_MINUTES_LR.items():
    LR_mapping = {t: code + i * 16 for i, t in enumerate(STANDBY_OPTIONS)}
    INPUT_SOURCES[source] = {t: (LR, LR + 64) for t, LR in LR_mapping.items()}

INPUT_SOURCES_RESPONSE = {}
for source, mapping in INPUT_SOURCES.items():
    source = source.replace("_paired", "")
    for t, (LR, RL) in mapping.items():
        INPUT_SOURCES_RESPONSE[LR] = (source, t, "L/R")
        INPUT_SOURCES_RESPONSE[RL] = (source, t, "R/L")

# This seems necessary on both the LSX and LS50W, I don't know why...
# It's the response when Wifi, "R/L", 60 standby.
INPUT_SOURCES_RESPONSE[48] = INPUT_SOURCES_RESPONSE[82]

_SET_START = ord("S")
_SET_MID = 129
_GET_END = 128
_GET_START = ord("G")

# Control
_VOL = ord("%")
_SOURCE = ord("0")
_CONTROL = ord("1")

# DSP
_MODE = 39
_DESK_DB = 40
_WALL_DB = 41
_TREBLE_DB = 42
_HIGH_HZ = 43
_LOW_HZ = 44
_SUB_DB = 45


def _get(which: int) -> bytes:
    return bytes([_GET_START, which, _GET_END])


def _set(which: int) -> Callable[[int], bytes]:
    return lambda i: bytes([_SET_START, which, _SET_MID, i])


COMMANDS = {
    "get_volume": _get(_VOL),
    "set_volume": _set(_VOL),
    "set_source": _set(_SOURCE),
    "get_source": _get(_SOURCE),
    "set_play_pause": _set(_CONTROL)(129),  # 128 also works
    "get_play_pause": _get(_CONTROL),
    "next_track": _set(_CONTROL)(130),
    "prev_track": _set(_CONTROL)(131),
    "get_mode": _get(_MODE),
    "set_mode": _set(_MODE),
    "get_desk_db": _get(_DESK_DB),
    "set_desk_db": _set(_DESK_DB),
    "get_wall_db": _get(_WALL_DB),
    "set_wall_db": _set(_WALL_DB),
    "get_treble_db": _get(_TREBLE_DB),
    "set_treble_db": _set(_TREBLE_DB),
    "get_high_hz": _get(_HIGH_HZ),
    "set_high_hz": _set(_HIGH_HZ),
    "get_low_hz": _get(_LOW_HZ),
    "set_low_hz": _set(_LOW_HZ),
    "get_sub_db": _get(_SUB_DB),
    "set_sub_db": _set(_SUB_DB),
}


def arange(start, end, step):
    return [x * step for x in range(int(start / step), int(end / step) + 1)]


# DSP options
_DESK_WALL_DB_OPTIONS = arange(-6, 0, 0.5)
_TREBLE_DB_OPTIONS = arange(-2, 2, 0.5)
_HIGH_HZ_OPTIONS = arange(50, 120, 5)
_LOW_HZ_OPTIONS = arange(40, 250, 5)
_SUB_DB_OPTIONS = arange(-10, 10, 1)

DSP_OPTION_MAPPING = {
    "desk_db": _DESK_WALL_DB_OPTIONS,
    "wall_db": _DESK_WALL_DB_OPTIONS,
    "treble_db": _TREBLE_DB_OPTIONS,
    "high_hz": _HIGH_HZ_OPTIONS,
    "low_hz": _LOW_HZ_OPTIONS,
    "sub_db": _SUB_DB_OPTIONS,
}

State = namedtuple("State", ["source", "is_on", "standby_time", "orientation"])

Mode = namedtuple(
    "Mode",
    [
        "desk_mode",
        "wall_mode",
        "phase_correction",
        "high_pass",
        "sub_polarity",
        "bass_extension",
    ],
)

_RETRY_KWARGS = dict(
    wait=wait_exponential(exp_base=1.5),
    before=before_log(_LOGGER, logging.DEBUG),
    before_sleep=before_sleep_log(_LOGGER, logging.DEBUG),
    after=after_log(_LOGGER, logging.DEBUG),
)
_CMD_RETRY_KWARGS = dict(
    _RETRY_KWARGS, stop=stop_after_attempt(_MAX_ATTEMPT_TILL_SUCCESS)
)
_SEND_MSG_RETRY_KWARGS = dict(
    _RETRY_KWARGS, stop=stop_after_attempt(_MAX_SEND_MESSAGE_TRIES)
)

BASS_EXTENSION_MAPPING = {
    "00": "Standard",
    "10": "Less",
    "01": "Extra",
    "11": "Unknown",
}
BASS_EXTENSION_MAPPING_INV = {v: k for k, v in BASS_EXTENSION_MAPPING.items()}


def bits_to_mode(bits: int) -> Mode:
    mode_bits = f"{bits:08b}"

    desk_mode = mode_bits[7] == "1"
    wall_mode = mode_bits[6] == "1"
    phase_correction = mode_bits[5] == "1"
    high_pass = mode_bits[4] == "1"

    sub_polarity = "-" if mode_bits[1] == "1" else "+"
    bass_extension_bits = mode_bits[2:4]
    bass_extension = BASS_EXTENSION_MAPPING[bass_extension_bits]
    return Mode(
        desk_mode=desk_mode,
        wall_mode=wall_mode,
        phase_correction=phase_correction,
        high_pass=high_pass,
        sub_polarity=sub_polarity,
        bass_extension=bass_extension,
    )


def mode_to_bits(mode: Mode) -> int:
    true_false = {True: "1", False: "0"}
    desk_mode = true_false[mode.desk_mode]
    wall_mode = true_false[mode.wall_mode]
    phase_correction = true_false[mode.phase_correction]
    high_pass = true_false[mode.high_pass]
    sub_polarity = {"-": "1", "+": "0"}[mode.sub_polarity]
    bass_extension = BASS_EXTENSION_MAPPING_INV[mode.bass_extension]
    byte = f"1{sub_polarity}{bass_extension}{high_pass}{phase_correction}{wall_mode}{desk_mode}"
    return int(byte, 2)


def _parse_response(message: bytes, reply: bytes) -> bytes:
    """Sometimes we receive many messages, so we need to split
    them up and choose the right one."""
    responses = [b"R" + i for i in reply.split(b"R") if i]

    if message[0] == ord("G"):
        which = message[1]
        try:
            return next(r for r in responses if r[1] == which)
        except StopIteration:
            raise Exception("The query type didn't match with the response.")
    elif message[0] == ord("S"):
        FULL_RESPONSE_OK = bytes([82, 17, 255])
        if FULL_RESPONSE_OK in responses:
            return FULL_RESPONSE_OK
        else:
            raise Exception("Didn't get OK after SET command.")
    else:
        raise Exception(f"Got an unknown response '{reply!r}'")


class _AsyncCommunicator:
    def __init__(
        self,
        host: str,
        port: int,
        *,
        loop: Optional[asyncio.events.AbstractEventLoop] = None,
    ):
        self.host = host
        self.port = port
        self._reader: Optional[asyncio.StreamReader] = None
        self._writer: Optional[asyncio.StreamWriter] = None
        self._last_time_stamp = 0.0
        self._is_online = False
        self._loop = loop or asyncio.get_event_loop()
        self._disconnect_task = None
        self._lock = asyncio.Lock()

    @property
    def is_connected(self) -> bool:
        return (self._reader, self._writer) != (None, None)

    async def open_connection(self) -> None:
        if self.is_connected:
            _LOGGER.debug("%s: Connection is still alive", self.host)
            return
        retries = 0
        while retries < _MAX_CONNECTION_RETRIES:
            _LOGGER.debug("%s: Opening connection", self.host)

            try:
                async with self._lock, timeout(_TIMEOUT):
                    self._reader, self._writer = await asyncio.open_connection(
                        self.host, self.port, family=socket.AF_INET
                    )
                    _LOGGER.debug("%s: Opening connection successful", self.host)
            except ConnectionRefusedError:
                _LOGGER.debug("%s: Opening connection failed", self.host)
                await asyncio.sleep(0.5)
            except BlockingIOError:  # Connection incomming
                # XXX: I have never seen this.
                retries = 0
                await asyncio.sleep(1)
            except (asyncio.TimeoutError, OSError) as e:  # Host is down
                self._is_online = False
                raise ConnectionRefusedError("Speaker is offline.") from e
            else:
                self._is_online = True
                self._last_time_stamp = time.time()
                self._schedule_disconnect()
                return
            retries += 1
        self._is_online = False
        raise ConnectionRefusedError("Connection tries exceeded.")

    async def _send_message(self, message: bytes) -> bytes:
        async with self._lock:
            assert self._writer is not None
            assert self._reader is not None
            _LOGGER.debug("%s: Writing message: %s", self.host, str(message))
            try:
                self._writer.write(message)
                await self._writer.drain()
            except:

            _LOGGER.debug("%s: Reading message", self.host)
            try:
                async with timeout(_TIMEOUT):
                    data = await self._reader.read(100)
                _LOGGER.debug("%s: Got reply, %s", self.host, str(data))
                self._last_time_stamp = time.time()
                self._schedule_disconnect()
            except asyncio.TimeoutError:
                _LOGGER.error("%s: Timeout in waiting for reply", self.host)
            finally:
                return data

    async def _disconnect(self) -> None:
        if self.is_connected:
            async with self._lock:
                assert self._writer is not None
                _LOGGER.debug("%s: Disconnecting", self.host)
                self._writer.close()
                await self._writer.wait_closed()
                self._reader, self._writer = (None, None)

    async def _disconnect_in(self, dt):
        await asyncio.sleep(dt)
        await asyncio.shield(self._disconnect())  # ℹ️ shield it from being cancelled

    def _schedule_disconnect(self, dt=_KEEP_ALIVE):
        if self._disconnect_task is not None:
            _LOGGER.debug("%s: Cancelling the _disconnect_task", self.host)
            self._disconnect_task.cancel()
            self._disconnect_task = None
        self._disconnect_task = asyncio.create_task(self._disconnect_in(dt))

    @retry(**_SEND_MSG_RETRY_KWARGS)
    async def send_message(self, msg: bytes) -> int:
        await self.open_connection()
        raw_reply = await self._send_message(msg)
        reply = _parse_response(msg, raw_reply)[-2]
        _LOGGER.debug("%s: Received: %s", self.host, reply)
        return reply


class AsyncKefSpeaker:
    """Asynchronous KEF speaker class.

    Parameters
    ----------
    host : str
        The IP of the speaker.
    port : int, optional
        The port used for the communication, the default is 50001.
    volume_step : float, optional
        The volume change when calling `increase_volume` or
        `decrease_volume`, by default 0.05.
    maximum_volume : float, optional
        The maximum allow volume, between 0 and 1. Use this to avoid
        accidentally setting very high volumes, by default 1.0.
    loop : `asyncio.BaseEventLoop`, optional
        The eventloop to use.
    standby_time: int, optional
        Put the speaker in standby when inactive for ``standby_time``
        minutes. The only options are None (default), 20, and 60.
    inverse_speaker_mode : bool, optional
        Reverse L/R to R/L.

    Attributes
    ----------
    sync : `aiokef.SyncKefSpeaker`
        Run any method that the `AsyncKefSpeaker` has in a synchronous way.
        For example ``kef_speaker.sync.mute()``.
    """

    def __init__(
        self,
        host: str,
        port: int = 50001,
        volume_step: float = 0.05,
        maximum_volume: float = 1.0,
        standby_time: Optional[int] = None,
        inverse_speaker_mode: bool = False,
        *,
        loop: Optional[asyncio.events.AbstractEventLoop] = None,
    ):
        if standby_time not in STANDBY_OPTIONS:
            raise ValueError(
                f"It is only possible to use `standby_time` from {STANDBY_OPTIONS}"
            )
        self.host = host
        self.port = port
        self.volume_step = volume_step
        self.maximum_volume = maximum_volume
        self.standby_time = standby_time
        self.inverse_speaker_mode = inverse_speaker_mode
        self._comm = _AsyncCommunicator(host, port, loop=loop)
        self.sync = SyncKefSpeaker(self)

    @retry(**_CMD_RETRY_KWARGS)
    async def get_state(self) -> State:
        # If the speaker is off, the source increases by 128
        response = await self._comm.send_message(COMMANDS["get_source"])
        is_on = response <= 128
        code = response % 128
        if code not in INPUT_SOURCES_RESPONSE:
            raise ConnectionError(f"Getting source failed, got response {response}.")
        source, standby_time, orientation = INPUT_SOURCES_RESPONSE[code]
        return State(source, is_on, standby_time, orientation)

    async def get_source(self) -> None:
        state = await self.get_state()
        return state.source

    @retry(**_CMD_RETRY_KWARGS)
    async def set_source(self, source: str, *, state="on") -> None:
        assert source in INPUT_SOURCES
        i = INPUT_SOURCES[source][self.standby_time][self.inverse_speaker_mode] % 128
        if state == "off":
            i += 128
        response = await self._comm.send_message(
            COMMANDS["set_source"](i)  # type: ignore
        )
        if response != _RESPONSE_OK:
            raise ConnectionError(f"Setting source failed, got response {response}.")

        for i in range(_MAX_ATTEMPT_TILL_SUCCESS):
            state = await self.get_state()
            current_source = state.source

            if (
                (current_source == source)
                and ("R/L" if self.inverse_speaker_mode else "L/R")
                and (state.standby_time == self.standby_time)
            ):
                _LOGGER.debug("%s: Source is %s", self.host, source)
                return
            _LOGGER.debug(
                "%s: Try #%s: Source is %s but %s is selected",
                self.host,
                i,
                current_source,
                source,
            ), self.host
            await asyncio.sleep(0.5)

        raise TimeoutError(
            f"Tried to set {source} {_MAX_ATTEMPT_TILL_SUCCESS} times"
            f" but the speaker is still {current_source}."
        )

    @retry(**_CMD_RETRY_KWARGS)
    async def get_volume_and_is_muted(
        self, scale=True
    ) -> Tuple[Union[float, int], bool]:
        """Return volume level (0..1) and is_muted (in a single call)."""
        volume = await self._comm.send_message(COMMANDS["get_volume"])
        if volume is None:
            raise ConnectionError("Getting volume failed.")
        is_muted = volume >= 128
        return volume / _VOLUME_SCALE if scale else volume, is_muted

    @retry(**_CMD_RETRY_KWARGS)
    async def _set_volume(self, volume: int) -> None:
        # Write volume level (0..100) on index 3,
        # add 128 to current level to mute.
        response = await self._comm.send_message(
            COMMANDS["set_volume"](volume)  # type: ignore
        )
        if response != _RESPONSE_OK:
            raise ConnectionError(
                f"Setting the volume failed, got response {response}."
            )

    @retry(**_CMD_RETRY_KWARGS)
    async def set_play_pause(self) -> None:
        response = await self._comm.send_message(COMMANDS["set_play_pause"])
        if response != _RESPONSE_OK:
            raise ConnectionError(
                f"Setting play or pause failed, got response {response}."
            )

    @retry(**_CMD_RETRY_KWARGS)
    async def get_play_pause(self) -> str:
        response = await self._comm.send_message(COMMANDS["get_play_pause"])
        if response == 128:
            return "Paused"
        elif response == 129:
            return "Playing"
        else:
            raise ConnectionError(
                f"Getting play or pause failed, got response {response}."
            )

    @retry(**_CMD_RETRY_KWARGS)
    async def prev_track(self) -> None:
        response = await self._comm.send_message(COMMANDS["prev_track"])
        if response != _RESPONSE_OK:
            raise ConnectionError(
                f"Setting the previous track failed, got response {response}."
            )

    @retry(**_CMD_RETRY_KWARGS)
    async def next_track(self) -> None:
        response = await self._comm.send_message(COMMANDS["next_track"])
        if response != _RESPONSE_OK:
            raise ConnectionError(
                f"Setting the next track failed, got response {response}."
            )

    @retry(**_CMD_RETRY_KWARGS)
    async def get_mode(self) -> Union[Mode, str]:
        response = await self._comm.send_message(COMMANDS["get_mode"])
        if response == 255:
            # Happens if device is off
            return "Unknown"
        return bits_to_mode(response)

    @retry(**_CMD_RETRY_KWARGS)
    async def _set_mode(self, mode: Mode) -> None:
        i = mode_to_bits(mode)
        cmd = COMMANDS["set_mode"](i)  # type: ignore
        response = await self._comm.send_message(cmd)
        if response != _RESPONSE_OK:
            raise ConnectionError(f"Setting the mode failed, got response {response}.")

    async def set_mode(
        self,
        desk_mode=None,
        wall_mode=None,
        phase_correction=None,
        high_pass=None,
        sub_polarity=None,
        bass_extension=None,
    ) -> None:
        """Set the mode of the speaker.

        Leave option None to keep the setting the same."""
        current_mode = await self.get_mode()

        if desk_mode is None:
            desk_mode = current_mode.desk_mode
        if wall_mode is None:
            wall_mode = current_mode.wall_mode
        if phase_correction is None:
            phase_correction = current_mode.phase_correction
        if high_pass is None:
            high_pass = current_mode.high_pass
        if sub_polarity is None:
            sub_polarity = current_mode.sub_polarity
        if bass_extension is None:
            bass_extension = current_mode.bass_extension

        new_mode = Mode(
            desk_mode=desk_mode,
            wall_mode=wall_mode,
            phase_correction=phase_correction,
            high_pass=high_pass,
            sub_polarity=sub_polarity,
            bass_extension=bass_extension,
        )
        await self._set_mode(new_mode)
        # XXX: implement a check like in set_source

    @retry(**_CMD_RETRY_KWARGS)
    async def _get_dsp(self, which) -> Union[int, str]:
        cmd = COMMANDS[f"get_{which}"]
        response = await self._comm.send_message(cmd)
        if response == 255:
            # Happens for example when getting "high_hz" and "High pass mode" if off.
            return "Unknown"
        return DSP_OPTION_MAPPING[which][response - 128]

    async def get_desk_db(self) -> int:
        return await self._get_dsp("desk_db")

    async def get_wall_db(self) -> int:
        return await self._get_dsp("wall_db")

    async def get_treble_db(self) -> int:
        return await self._get_dsp("treble_db")

    async def get_high_hz(self) -> int:
        return await self._get_dsp("high_hz")

    async def get_low_hz(self) -> int:
        return await self._get_dsp("low_hz")

    async def get_sub_db(self) -> int:
        return await self._get_dsp("sub_db")

    @retry(**_CMD_RETRY_KWARGS)
    async def _set_dsp(self, which, value) -> None:
        i = DSP_OPTION_MAPPING[which].index(value) + 128  # "+ 128" seems to do nothing
        cmd = COMMANDS[f"set_{which}"](i)  # type: ignore
        response = await self._comm.send_message(cmd)
        if response != _RESPONSE_OK:
            raise ConnectionError(
                f"Setting the {which} failed, got response {response}."
            )

    async def set_desk_db(self, db) -> None:
        await self._set_dsp("desk_db", db)

    async def set_wall_db(self, db) -> None:
        await self._set_dsp("wall_db", db)

    async def set_treble_db(self, db) -> None:
        await self._set_dsp("treble_db", db)

    async def set_high_hz(self, hz) -> None:
        await self._set_dsp("high_hz", hz)

    async def set_low_hz(self, hz) -> None:
        await self._set_dsp("low_hz", hz)

    async def set_sub_db(self, db) -> None:
        await self._set_dsp("sub_db", db)

    async def get_volume(self) -> Optional[float]:
        """Volume level of the media player (0..1). None if muted."""
        volume, is_muted = await self.get_volume_and_is_muted(scale=True)
        return volume if not is_muted else None

    async def set_volume(self, value: float) -> float:
        volume = max(0.0, min(self.maximum_volume, value))
        await self._set_volume(int(volume * _VOLUME_SCALE))
        return volume

    async def _change_volume(self, step: float) -> float:
        """Change volume by `step`."""
        volume = await self.get_volume()
        is_muted = await self.is_muted()
        if is_muted:
            await self.unmute()
        assert volume is not None
        return await self.set_volume(volume + step)

    async def increase_volume(self) -> float:
        """Increase volume by `self.volume_step`."""
        return await self._change_volume(self.volume_step)

    async def decrease_volume(self) -> float:
        """Decrease volume by `self.volume_step`."""
        return await self._change_volume(-self.volume_step)

    async def is_muted(self) -> bool:
        _, is_muted = await self.get_volume_and_is_muted(scale=False)
        return is_muted

    async def mute(self) -> None:
        volume, _ = await self.get_volume_and_is_muted(scale=False)
        await self._set_volume(int(volume) % 128 + 128)

    async def unmute(self) -> None:
        volume, _ = await self.get_volume_and_is_muted(scale=False)
        await self._set_volume(int(volume) % 128)

    async def is_online(self) -> bool:
        try:
            await self._comm.open_connection()
        except ConnectionRefusedError:
            assert not self._comm._is_online
        finally:
            return self._comm._is_online

    async def is_on(self) -> bool:
        state = await self.get_state()
        return state.is_on

    async def turn_on(self, source: Optional[str] = None) -> None:
        """The speaker can be turned on by selecting an INPUT_SOURCE."""
        state = await self.get_state()
        if state.is_on:
            return
        await self.set_source(source or state.source, state="on")

        for i in range(20):  # it can take 20s to boot
            if await self.is_on():
                _LOGGER.debug("%s: Speaker is on", self.host)
                return
            _LOGGER.debug(
                "%s: Try #%s: Turned on the speaker, but it is still off", self.host, i
            )
            await asyncio.sleep(1)

    async def turn_off(self) -> None:
        state = await self.get_state()
        if not state.is_on:
            return
        await self.set_source(state.source, state="off")

        for i in range(20):  # it can take 20s to boot
            if not await self.is_on():
                _LOGGER.debug("%s: Speaker is off", self.host)
                return
            _LOGGER.debug(
                "%s: Try #%s: Turned off the speaker, but it is still on", self.host, i
            )
            await asyncio.sleep(1)


class SyncKefSpeaker:
    """A synchronous KEF speaker class.

    This has the same methods as `aiokef.AsyncKefSpeaker`, however, it wraps all async
    methods and call them in a blocking way."""

    def __init__(self, async_speaker: AsyncKefSpeaker):
        self.async_speaker = async_speaker

    def __getattr__(self, attr: str) -> Any:
        method = getattr(self.async_speaker, attr)
        if method is None:
            raise AttributeError(f"'SyncKefSpeaker' object has no attribute '{attr}.'")
        if inspect.iscoroutinefunction(method):

            @functools.wraps(method)
            def wrapped(*args, **kwargs):
                return asyncio.run(method(*args, **kwargs))

            return wrapped
        else:
            return method
