#!/usr/bin/env python3
"""Check Home Assistant repairs via WebSocket API.

Shows the same repair information visible in Settings → System → Repairs.

Usage (via SSH):
    ssh ha "python3 /config/utils/check-repairs.py"
"""

import json
import os
import sys

import websocket


def get_repairs():
    """Fetch repairs via WebSocket API."""
    token = os.environ.get("SUPERVISOR_TOKEN")
    if not token:
        print("Error: SUPERVISOR_TOKEN not set. Run this on the HA host.", file=sys.stderr)
        sys.exit(1)

    ws = websocket.create_connection("ws://supervisor/core/api/websocket")

    # Wait for auth_required
    result = json.loads(ws.recv())
    if result["type"] != "auth_required":
        print(f"Unexpected: {result}", file=sys.stderr)
        sys.exit(1)

    # Authenticate
    ws.send(json.dumps({"type": "auth", "access_token": token}))
    result = json.loads(ws.recv())
    if result["type"] != "auth_ok":
        print(f"Auth failed: {result}", file=sys.stderr)
        sys.exit(1)

    # Request repairs list
    ws.send(json.dumps({"id": 1, "type": "repairs/list_issues"}))
    result = json.loads(ws.recv())

    ws.close()
    return result.get("result", {}).get("issues", [])


def main():
    repairs = get_repairs()

    print(f"Repairs ({len(repairs)} active):\n")

    for r in repairs:
        domain = r.get("domain", "unknown")
        issue_id = r.get("issue_id", "")
        severity = r.get("severity", "")
        print(f"  [{domain}] {issue_id}")
        if r.get("translation_key"):
            print(f"    type: {r['translation_key']}")
        if severity:
            print(f"    severity: {severity}")
        print()


if __name__ == "__main__":
    main()
