"""Notifies when a battery_level has gone below a threshold value."""

LOW_LEVEL = 15
NOTIFY_NAME = "mobile_app_basnijholt_iphone"
HOUR = 14
MINUTE = 0


def get_low_battery_level(low_battery_level):
    # TODO: use ast_namedexpr when implemented
    low_battery_level = {
        entity_id: int(state.get(entity_id))
        for entity_id in entity_ids("sensor")
        if "battery_level" in entity_id
        and "ipad" not in entity_id
        and "iphone" not in entity_id
        and 0 <= int(state.get(entity_id)) < low_battery_level
    }
    return low_battery_level


def low_battery_notify(notify_name, low_battery_level):
    for entity_id, battery_level in get_low_battery_level(low_battery_level).items():
        service.call(
            "notify",
            notify_name,
            message=f"Battery level of {entity_id} is {battery_level}%!",
            title="Warning! ⚠️🔋☠️",
        )

@time_trigger(f"cron({MINUTE} {HOUR} * * *)")
def run():
    low_battery_notify(NOTIFY_NAME, LOW_LEVEL)
