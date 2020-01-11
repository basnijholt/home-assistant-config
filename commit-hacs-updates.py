import subprocess

cmd = "git status --porcelain".split()
p = subprocess.run(cmd, capture_output=True).stdout.decode()

folders_to_add = set()
for line in p.split("\n"):
    if not line.startswith(" M"):
        continue
    path = line[3:]
    community = "www/community/"
    if path.startswith(community):
        plugin = path.split("/")[2]
        folders_to_add.add(community + plugin)

for folder in folders_to_add:
    print(folder)
    subprocess.run(f"git add {folder}".split())
    subprocess.run(["git", "commit", f"-m 'update {folder}'"])
