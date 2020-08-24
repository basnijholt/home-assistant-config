#!/usr/bin/env python3

#      _    ____   ____ ___ ___              _
#     / \  / ___| / ___|_ _|_ _|   __ _ _ __| |_
#    / _ \ \___ \| |    | | | |   / _` | '__| __|
#   / ___ \ ___) | |___ | | | |  | (_| | |  | |_
#  /_/   \_\____/ \____|___|___|  \__,_|_|   \__|
#
# - from github.com/basnijholt/home-assistant-config

# Use manually on http://patorjk.com/software/taag/#p=display&f=Standard&t=input_boolean

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
    i_insert_gen = (i + 1 for i, line in enumerate(content) if line.startswith("---"))
    i_insert = next(i_insert_gen, 0)
    content.insert(i_insert, start)  # start
    for i, line in enumerate(formatted):
        content.insert(i + 1 + i_insert, line + "\n")
    content.insert(i + 2 + i_insert, end)  # end
    return content


folders = ["automations", "includes", ""]
for folder in folders:
    folder = Path(".") / folder
    for fname in folder.glob("*.yaml"):
        with fname.open() as f:
            content = f.readlines()

        content = remove_text(content)
        content = add_text(fname.stem, content)

        with fname.open("w") as f:
            f.write("".join(content))
