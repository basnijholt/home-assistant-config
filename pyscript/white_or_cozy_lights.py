import statistics
from homeassistant.const import EVENT_CALL_SERVICE

def white_or_cozy(group_entity_id):
    entity_ids = state.get_attr(group_entity_id)['entity_id']
    attrs = [state.get_attr(entity_id) for entity_id in entity_ids]
    if "xy_color" in attrs[0]:
        xy_colors = [d['xy_color'] for d in attrs]
        xs, ys = zip(*xy_colors)
        x_std = statistics.stdev(xs)
        y_std = statistics.stdev(ys)
        col = "white" if x_std**2 + y_std**2 < 0.01 else "cozy"
    else:
        col = "white"
    return col


def set_input_select(group_entity_id, input_select):
    col = white_or_cozy(group_entity_id)
    options = state.get_attr(input_select)["options"]
    option = [opt for opt in options if col in opt][0]
    state.set(input_select, option)


@event_trigger(EVENT_CALL_SERVICE, "domain == 'lights' and service == 'turn_on'")
def bedroom(domain=None, service=None, service_data=None):
    input_select = "input_select.last_script_bedroom"
    group_entity_id = "light.bedroom_lights"
    set_input_select(group_entity_id, input_select)

# input_select = "input_select.last_script_bedroom"
# group_entity_id = "light.bedroom_lights"
# set_input_select(group_entity_id, input_select)
