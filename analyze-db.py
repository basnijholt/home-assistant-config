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

print(Counter(cnt).most_common())
