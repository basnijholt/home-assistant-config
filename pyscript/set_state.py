"""Sets a state"""

@service
def set_state(entity_id=None, value=None):
    state.set(entity_id, value)
