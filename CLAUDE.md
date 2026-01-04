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

### Automation YAML Style Conventions

#### File Structure
- Each file starts with `---` followed by ASCII art header (domain name)
- Header ends with `#- from github.com/basnijholt/home-assistant-config`
- Sub-sections within files use ASCII art sub-headers (e.g., "Living room", "Bedroom")

#### Alias Format
Always `"Category: description"` with double quotes:
```yaml
- alias: "Light: turn on living room"
- alias: "Security: motion detected but we are not home"
- alias: "Climate: turn off the heating at 22:00"
```

#### Single vs Multiple Items (Critical!)
**Single item** → no dash, no list:
```yaml
triggers:
  trigger: time
  at: "07:00"
conditions:
  condition: state
  entity_id: input_boolean.guest_mode
  state: "off"
actions:
  action: light.turn_on
  entity_id: light.living_room_lights
```

**Multiple items** → list with dashes:
```yaml
triggers:
  - trigger: time
    at: "07:00"
  - trigger: state
    entity_id: input_boolean.alarm_clock
    to: "off"
conditions:
  - condition: state
    entity_id: input_boolean.guest_mode
    state: "off"
  - condition: time
    after: "16:00:00"
actions:
  - action: light.turn_on
    entity_id: light.living_room_lights
  - action: notify.all_iphones
    data:
      message: "Lights on!"
```

#### Quoting Rules
- **State values**: Always quoted `"on"`, `"off"`
- **Times**: Always quoted `"07:00"`, `"22:00:00"`
- **Custom states**: Unquoted when not boolean-like: `half`, `total`, `home`, `not_home`
- **Entity IDs**: Never quoted
- **Alias**: Always double-quoted

#### Template Conditions (Shorthand)
Use inline template strings instead of verbose `condition: template`:
```yaml
# Preferred (shorthand)
conditions:
  - "{{ states('input_select.sleep_mode') != 'total' }}"
  - "{{ is_state('media_player.spotify', 'playing') }}"

# Also valid for single condition
conditions: "{{ state_attr('climate.thermostat', 'temperature') >= 18 }}"
```

#### Entity ID Placement
Can be at same level as `action:` OR inside `data:`:
```yaml
# Direct (preferred for simple cases)
actions:
  action: light.turn_on
  entity_id: light.living_room_lights

# Inside data (when other data fields needed)
actions:
  action: light.turn_on
  data:
    entity_id: light.living_room_lights
    transition: 1
    brightness: 255
```

#### Variables Block
Define at automation level for reuse:
```yaml
- alias: "Light: turn on hall"
  triggers:
    # ...
  variables:
    off_lights: >
      {{ expand(state_attr("light.stairs_lights", "entity_id"))
        | selectattr("state", "eq", "off")
        | map(attribute="entity_id")
        | list }}
  conditions: "{{ (off_lights | length) > 0 }}"
  actions:
    # use off_lights variable
```

#### Choose/Sequence Format
```yaml
actions:
  choose:
    - conditions: "{{ action == 'off_press' }}"
      sequence:
        action: script.next_colors  # single action, no dash
        data:
          input_select: input_select.last_script_living_room
    - conditions: "{{ action == 'up_press' }}"
      sequence:  # multiple actions, use dashes
        - action: script.white_lights_living_room
        - action: light.turn_on
          entity_id: light.living_room_lights
```

#### Inline Comments
Use `#` comments to explain logic:
```yaml
- conditions: "{{ action == 'off_press' }}" # Lowest button
- conditions: "{{ trigger.payload_json.action_duration > 2 }}" # Hold for 2+ seconds
```

#### Optional Fields
- `mode: parallel` or `mode: single` when needed
- `initial_state: "on"` to ensure automation is enabled
- `description: >` for multi-line explanations

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
