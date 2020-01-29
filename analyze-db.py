import json
import sqlite3
from collections import Counter, defaultdict

cnt = defaultdict(int)

conn = sqlite3.connect("home-assistant_v2.db")
cur = conn.cursor()
cur.execute("SELECT * FROM events")

while row := cur.fetchone():
    i, which, dict_str, *_ = row
    info = json.loads(dict_str)
    if "entity_id" in info:
        cnt[info["entity_id"]] += 1

N = 50
cnt = Counter(cnt)
most_common = cnt.most_common(N)
total = sum(cnt.values())

print(f"The {N} most common entries are:\n")
for k, v in most_common:
    print(f"{k}: {v/total * 100}%, ({v})")
