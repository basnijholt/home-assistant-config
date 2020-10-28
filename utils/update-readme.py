#!/usr/bin/env python3

#  _   _ ____  ____    _  _____ _____   ____  _____    _    ____  __  __ _____
# | | | |  _ \|  _ \  / \|_   _| ____| |  _ \| ____|  / \  |  _ \|  \/  | ____|
# | | | | |_) | | | |/ _ \ | | |  _|   | |_) |  _|   / _ \ | | | | |\/| |  _|
# | |_| |  __/| |_| / ___ \| | | |___  |  _ <| |___ / ___ \| |_| | |  | | |___
#  \___/|_|   |____/_/   \_\_| |_____| |_| \_\_____/_/   \_\____/|_|  |_|_____|
#
# - from github.com/basnijholt/home-assistant-config

# Run this script from the main repo root!
# It updates the table of devices and the list of automations.
# This code relies on the way I have structeded my files and named my automations.

import functools
import json
import re
import subprocess
import urllib.parse
from contextlib import suppress
from pathlib import Path

import yaml

from _readme_tables import html_table

URL = "https://github.com/basnijholt/home-assistant-config/blob/{commit_hash}/{fname}"


@functools.lru_cache()
def git_revision_hash():
    """Get the git hash to save with data to ensure reproducibility."""
    git_output = subprocess.check_output(["git", "rev-parse", "HEAD"])
    return git_output.decode("utf-8").replace("\n", "")


@functools.lru_cache()
def git_latest_edit_hash(fname):
    """Get the git hash to save with data to ensure reproducibility."""
    git_output = subprocess.check_output(
        ["git", "rev-list", "-1", "master", str(fname)]
    )
    return git_output.decode("utf-8").replace("\n", "")


def line_number(fname, text, regex_check):
    assert isinstance(text, str)
    with fname.open() as f:
        for i, line in enumerate(f):
            if text in line:
                if regex_check and re.search(fr"\b{text}", line) is None:
                    break
                return i + 1
    raise ValueError(f"Text ({text}) doesn't exist in file {fname}.")


def permalink(fname):
    return URL.format(commit_hash=git_latest_edit_hash(fname), fname=fname)


def permalink_automation(fname, automation):
    from_line = line_number(fname, automation["alias"], False)
    return permalink(fname) + f"#L{from_line}"


def permalink_entity(x, yaml_fname):
    domain, name = x.split(".")
    fname = Path(yaml_fname or f"includes/{domain}s.yaml")
    from_line = line_number(fname, f"{name}:", True)
    return permalink(fname) + f"#L{from_line}"


def title_and_summary(automation):
    title, summary = automation["alias"].split(": ")
    emoji = get_emoji(title.strip())
    title = f"{title} {emoji}"
    summary = summary[0].upper() + summary[1:]
    return title, summary


def automations_as_dict(fname):
    with fname.open() as f:
        return yaml.safe_load(f)


def find_inputs(s):
    pattern = "(input_(select|boolean|number|datetime|text)[.][a-z0-9_]+)"
    return {groups[0] for groups in re.findall(pattern, s)}


def find_entities(s, domain):
    pattern = f"({domain}[.][a-z0-9_]+)"
    return {groups for groups in re.findall(pattern, s)}


def get_dependencies(automation):
    deps = []
    inputs = find_inputs(str(automation))
    for input_entity in sorted(inputs):
        with suppress(ValueError):
            url = permalink_entity(input_entity, None)
            s = f"  - [{input_entity}]({url})"
            deps.append(s)

    for domain, yaml_file in [
        ("script", "scripts.yaml"),
        ("sensor", "includes/sensors.yaml"),
        ("binary_sensor", "includes/binary_sensors.yaml"),
        ("switch", "includes/switches.yaml"),
        ("shell_command", "includes/shell_commands.yaml"),
        ("group", "includes/groups.yaml"),
        ("plant", "includes/plant.yaml"),
        ("sensor", "includes/utility_meter.yaml"),
    ]:
        entities = find_entities(str(automation), domain)
        for entity in sorted(entities):
            with suppress(ValueError):
                url = permalink_entity(entity, yaml_file)
                s = f"  - [{entity}]({url})"
                deps.append(s)

    text = "\n".join(deps)
    if deps:
        text = "  *which uses:*\n" + text + "\n"
    return text


def toc_entry(automations):
    title, _ = title_and_summary(automations[0])
    return f"1. [{title}](#{slugify(title)}) ({len(automations)} automations)"


def get_header(fname, automation):
    title, _ = title_and_summary(automation)
    return f"## [{title}]({permalink(fname)})"


def get_automation_line(fname, automation):
    _, summary = title_and_summary(automation)
    return f"### [{summary}]({permalink_automation(fname, automation)})"


def slugify(s):
    return s.lower().strip().replace(" ", "-").encode("ascii", "ignore").decode("ascii")


def get_description(automation):
    if "description" not in automation:
        return ""
    desc = automation["description"]
    return "\n  " + desc + "\n"


def remove_text(content, start, end):
    do_append = True
    new = []
    for line in content:
        if end in line:
            do_append = not do_append
        if do_append:
            new.append(line)
        if start in line:
            do_append = not do_append
    return new


def get_emoji(title):
    return {
        "Adaptive lighting": "🌄🌇",
        "Alarm clock": "⏰",
        "Apple Watch": "⌚",
        "Arriving": "👞",
        "Climate": "🔥🥶",
        "Control switches": "🎛",
        "Cube": "∛",
        "Doorbell": "🚪🔔",
        "Frontend": "👨‍💻",
        "KEF DSP": "🔈🎛",
        "Leaving": "👞",
        "Light": "💡",
        "Lovelace": "👨‍💻",
        "LSX": "🔈",
        "Media player": "🔈📺",
        "Music": "🎵",
        "Night mode": "🌕🌑",
        "Notifications": "🔔",
        "Plant": "🌱",
        "Rhasspy": "🤖",
        "Security": "👮🚨",
        "System": "🖥",
        "Test": "🧪",
        "Utilities": "🧺👚🍽",
        "Vacation mode": "🏝",
        "Vacuum": "🧹",
        "Work": "💼",
    }[title]


def modify_lines(to_insert, lines, tag):
    MARKDOWN_COMMENT = "<!-- {} -->"
    start = MARKDOWN_COMMENT.format(f"start-{tag}")
    end = MARKDOWN_COMMENT.format(f"end-{tag}")
    new_lines = remove_text(lines, start, end)
    i = next((i for (i, line) in enumerate(new_lines) if start in line)) + 1
    return new_lines[:i] + [s + "\n" for s in to_insert] + new_lines[i:]


def modify_version(lines):
    with open(".HA_VERSION") as f:
        version = f.read()
    msg = f"Running Home Asssistant-{version} -darkblue"
    url_part = urllib.parse.quote(msg)
    ha_url = f"https://github.com/home-assistant/core/releases/tag/{version}"
    pattern = "[![HA Version]"
    new_lines = []
    for line in lines:
        if line.startswith(pattern):
            line = f"{pattern}(https://img.shields.io/badge/{url_part})]({ha_url})\n"
        new_lines.append(line)
    return new_lines


def get_addons():
    """Get the git hash to save with data to ensure reproducibility."""
    try:
        output = subprocess.check_output(["ha", "addons", "--raw-json"])
    except FileNotFoundError:
        # the 'ha' program isn't available in the host image, I can only
        # run it from the 'SSH & Web Terminal' Add-on.
        return None
    raw = output.decode("utf-8")
    addons = json.loads(raw)["data"]
    installed_addons = [
        addon for addon in addons["addons"] if addon["installed"]
    ]
    return installed_addons


def get_addon_line(addon):
    name = addon["name"]
    url = addon["url"]
    try:
        by = addon["url"].split("github.com/")[1].split("/")[0]
    except IndexError:
        by = "home-assistant.io"
    version = addon['version']
    return by, f"- [{name}]({url}) version {version} by @{by}"


def get_addon_lines():
    installed_addons = get_addons()
    if installed_addons is None:
        return None
    addons = {get_addon_line(addon) for addon in installed_addons}
    _, addons = zip(*sorted(addons))
    return addons


automation_files = sorted(list(Path("automations/").glob("*yaml")))
text = []


# Create TOC
toc_title = "Automations - Table of Content"
text.append(f"# {toc_title}")
total_automations = 0
for fname in automation_files:
    automations = automations_as_dict(fname)
    if automations is None:
        continue
    total_automations += len(automations)
    text.append(toc_entry(automations))
text.append("\n")
text.append(f"⚠️ Total number of automations: **{total_automations}** ⚠️\n")
back_to_toc = f"[^ toc](#{slugify(toc_title)})"

# List automations
for fname in automation_files:
    automations = automations_as_dict(fname)
    if automations is None:
        continue
    text.append(get_header(fname, automations[0]))
    for automation in automations:
        text.append(get_automation_line(fname, automation))
        text.append(get_description(automation))
        text.append(get_dependencies(automation))
    text.append(back_to_toc)
    text.append("\n")

# List addons
addons = get_addon_lines()

# Modify README.md
with open("README.md") as f:
    lines = f.readlines()

lines = modify_version(lines)
lines = modify_lines(text, lines, "automations")
lines = modify_lines(html_table.split("\n"), lines, "table")
if addons is not None:
    # Only works when running from the 'SSH & Web Terminal' Add-on
    lines = modify_lines(addons, lines, "addons")

with open("README.md", "w") as f:
    f.write("".join(lines))
