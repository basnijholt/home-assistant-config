#!/bin/sh
# t80-net: temporary internet access for the Ecovacs T80 robot vacuum.
#
# Lives on the ASUS router as /jffs/t80-net.sh and is the forced command of
# Home Assistant's SSH key, so that key can do nothing else:
#   ssh router on [minutes]   allow internet (WAN only), auto-off after <minutes> (default 60, max 180)
#   ssh router off            block again and cut open connections
#   ssh router status         "online until HH:MM" or "offline"
#
# Runtime iptables only: nothing is written to nvram and the Wi-Fi is never
# restarted (saved settings are what caused the 2026-11-25 AiMesh loop).
# A router reboot or firewall restart drops the rules, and the saved
# parental-control block (PControls / WGNPControls) keeps the robot offline.
set -u
MAC=B0:8C:B3:A3:CA:52
WAN=$(nvram get wan0_ifname)
[ -n "$WAN" ] || {
	echo "error: no WAN interface" >&2
	exit 1
}
PIDFILE=/tmp/t80-net.timer
UNTIL=/tmp/t80-net.until

# Forced command: the real arguments arrive in SSH_ORIGINAL_COMMAND.
# shellcheck disable=SC2086
set -- ${SSH_ORIGINAL_COMMAND:-${*:-status}}

allow() { iptables "$1" FORWARD -o "$WAN" -m mac --mac-source "$MAC" -j ACCEPT; }
deny() { iptables "$1" FORWARD -o "$WAN" -m mac --mac-source "$MAC" -j DROP; }

stop_timer() {
	# The timer itself runs "off": never kill our own process (or parent).
	p=$(cat "$PIDFILE" 2>/dev/null)
	[ -z "$p" ] || [ "$p" = "$$" ] || [ "$p" = "$PPID" ] || kill "$p" 2>/dev/null
	rm -f "$PIDFILE" "$UNTIL"
}

go_offline() {
	stop_timer
	while allow -D 2>/dev/null; do :; done
	# A DROP at the top also stops connections opened while online
	# (they would otherwise pass the ESTABLISHED accept), and the
	# Broadcom flow cache is flushed so offloaded flows hit it too.
	deny -C 2>/dev/null || deny -I || {
		echo "error: could not add the block rule" >&2
		exit 1
	}
	fc flush >/dev/null 2>&1
	echo offline
}

case "${1:-status}" in
on)
	minutes=${2:-60}
	case "$minutes" in '' | *[!0-9]*) minutes=60 ;; esac
	[ "$minutes" -gt 180 ] && minutes=180
	[ "$minutes" -lt 1 ] && minutes=1
	stop_timer
	while deny -D 2>/dev/null; do :; done
	allow -C 2>/dev/null || allow -I || {
		go_offline >/dev/null
		echo "error: could not add the allow rule" >&2
		exit 1
	}
	# nohup: survive the SSH session closing. The child must not inherit
	# SSH_ORIGINAL_COMMAND=on, so it gets an explicit "off".
	# Always /bin/sh: on this router a bare "sh" is /usr/sbin/sh, a
	# Broadcom memory-poke tool.
	SSH_ORIGINAL_COMMAND=off nohup /bin/sh -c "sleep $((minutes * 60)) && /bin/sh '$0'" </dev/null >/dev/null 2>&1 &
	echo $! >"$PIDFILE"
	date -d "@$(($(date +%s) + minutes * 60))" +%H:%M >"$UNTIL" 2>/dev/null || echo "+${minutes}m" >"$UNTIL"
	echo "online until $(cat "$UNTIL")"
	;;
off) go_offline ;;
status)
	if allow -C 2>/dev/null; then
		echo "online until $(cat "$UNTIL" 2>/dev/null || echo '?')"
	else
		echo offline
	fi
	;;
*)
	echo "usage: on [minutes] | off | status" >&2
	exit 2
	;;
esac
