import subprocess

cmd = "git status --porcelain".split()
p = subprocess.run(cmd, capture_output=True).stdout.decode()

folders_to_add = set()
for line in p.split("\n"):
    if line.startswith(" M") or line.startswith("??"):
        path = line[3:]
        community = "www/community/"
        if path.startswith(community):
            plugin = path.split("/")[2]
            folders_to_add.add(community + plugin)

        themes = "themes/"
        if path.startswith(themes):
            theme = path.split("/")[1]
            folders_to_add.add(themes + theme)

for folder in folders_to_add:
    print(folder)
    subprocess.run(f"git add {folder}".split())
    subprocess.run(["git", "commit", "-m", f"update {folder} via HACS"])
