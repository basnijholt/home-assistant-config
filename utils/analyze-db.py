import json
import sqlite3
from collections import Counter, defaultdict


conn = sqlite3.connect("home-assistant_v2.db")
cur = conn.cursor()


def analyze(d):
    N = 50
    cnt = Counter(d)
    most_common = cnt.most_common(N)
    total = sum(cnt.values())

    print(f"The {N} most common entries are:\n")
    for k, v in most_common:
        print(f"{k}: {v/total * 100}%, ({v})")


events = defaultdict(int)
cur.execute("SELECT * FROM events")

while row := cur.fetchone():
    i, which, dict_str, *_ = row
    info = json.loads(dict_str)
    if "entity_id" in info:
        events[info["entity_id"]] += len(dict_str)

print("Statistics on 'events' table.")
analyze(events)

states = defaultdict(int)
cur.execute("SELECT * FROM states")

while row := cur.fetchone():
    i, domain, entity_id, state, attributes, *_ = row
    states[entity_id] += len(state) + len(attributes)
print("\nStatistics on 'states' table.")
analyze(states)
