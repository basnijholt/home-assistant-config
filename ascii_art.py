from pathlib import Path

import pyfiglet

start = "#-\n"
end = "#- from github.com/basnijholt/home-assistant-config\n"


def remove_text(content):
    do_append = True
    new = []
    for line in content:
        if start in line:
            do_append = not do_append
        if do_append:
            new.append(line)
        if end in line:
            do_append = not do_append
    return new


def add_text(text, content):
    text = pyfiglet.figlet_format(text, width=200)
    formatted = [("# " + i).rstrip(" ") for i in text.split("\n")]
    content.insert(1, start)  # start
    for i, line in enumerate(formatted):
        content.insert(i + 2, line + "\n")
    content.insert(i + 3, end)  # end
    return content

folders = ["automations", "includes"]
for folder in folders:
    for fname in Path(folder).glob("*.yaml"):
        with fname.open() as f:
            content = f.readlines()

        content = remove_text(content)
        content = add_text(fname.stem, content)

        with fname.open("w") as f:
            f.write("".join(content))
