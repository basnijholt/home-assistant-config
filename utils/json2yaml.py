#!/usr/bin/env python3

#       _ ____   ___  _   _   _         __   __ _    __  __ _
#      | / ___| / _ \| \ | | | |_ ___   \ \ / // \  |  \/  | |
#   _  | \___ \| | | |  \| | | __/ _ \   \ V // _ \ | |\/| | |
#  | |_| |___) | |_| | |\  | | || (_) |   | |/ ___ \| |  | | |___
#   \___/|____/ \___/|_| \_|  \__\___/    |_/_/   \_\_|  |_|_____|
#
# - from github.com/basnijholt/home-assistant-config

import argparse
import json
import sys

import yaml

p = argparse.ArgumentParser()
p.add_argument("json_fname", nargs="?", type=str, default=sys.stdin)
p.add_argument("yaml_fname", nargs="?", type=str, default=sys.stdin)

json_fname = p.parse_args().json_fname
with open(json_fname) as f:
    info = json.load(f)["data"]["config"]

yaml_fname = p.parse_args().yaml_fname
with open(yaml_fname, "w") as f:
    f.write("---\n")
    yaml.dump(info, f, allow_unicode=True)
