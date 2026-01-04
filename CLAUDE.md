# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Home Assistant configuration repository for a smart home setup running on an Intel NUC. It uses YAML-based configuration with automations, scripts, sensors, and custom components.

## Commands

**Linting:**
```bash
yamllint -c .github/yamllint-config.yml .
```

CI runs yamllint automatically on push via GitHub Actions.

**Update README (auto-generates automation documentation):**
```bash
python utils/update-readme.py
```

## Architecture

### Configuration Structure

```
configuration.yaml          # Main entry point - includes all other configs
├── automations/            # Automation YAML files (merged via !include_dir_merge_list)
├── includes/               # Entity configs (sensors, switches, input_*, etc.)
├── scripts.yaml            # All scripts in one file
├── scenes.yaml             # Managed via UI
├── themes/                 # Lovelace themes
├── pyscript/               # Python scripts for HA (battery monitor, wake up light)
├── appdaemon/apps/         # AppDaemon applications
└── utils/                  # Helper scripts (README updater, DB analyzer, etc.)
```

### Key Patterns

**Automations** are split by domain into `automations/` directory:
- `climate.yaml` - thermostat scheduling and temperature control
- `light.yaml` - automated lighting
- `leaving.yaml` / `arriving.yaml` - presence-based actions
- `vacation_mode.yaml` - away mode behaviors
- `sleep_mode.yaml` - night mode settings

**Includes** contain entity definitions in `includes/`:
- `input_booleans.yaml` - toggle states (vacation_mode, guest_mode, etc.)
- `input_numbers.yaml` - numeric settings (temperature_high/low, etc.)
- `sensors.yaml` - template and platform sensors
- `binary_sensors.yaml` - presence detection and state sensors

**Scripts** in `scripts.yaml` are reusable actions called by automations:
- `set_high_temperature` / `set_low_temperature`
- `leaving` / `arriving`
- `cozy_lights_living_room` / `white_lights_living_room`

### YAML Style Conventions

- Single trigger/action: no list syntax (`trigger: time` not `- trigger: time`)
- Multiple triggers/actions: use list syntax with dashes
- State values quoted: `"on"`, `"off"`
- Times quoted: `"07:00"`, `"22:00"`
- Entity IDs not quoted
- Each file has ASCII art header comment with the domain name

### Important Entities

- `input_boolean.automatic_temperature` - master switch for climate automations
- `input_boolean.vacation_mode` - vacation/away mode
- `input_boolean.guest_mode` - disables some automations when guests present
- `input_number.temperature_high` / `temperature_low` - thermostat setpoints
- `binary_sensor.no_one_home` - presence detection
- `climate.thermostat` - main thermostat (Ecobee via OpenTherm)

### Custom Components

- **Adaptive Lighting** - automatic color temperature adjustment
- **Pyscript** - Python scripting for complex automations
