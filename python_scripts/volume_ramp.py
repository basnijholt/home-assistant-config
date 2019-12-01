"""
automation:
  - alias: Ramp volume of speaker
      trigger:
        - platform: sun
          event: sunset
          offset: "-01:00:00"
      action:
        - service: python_script.volume_ramp
            data:
              entity_id: media_player.kef
              total_time: 20  # in seconds
              final_volume: 0.25
              volume_step: 0.01
"""

entity_id = data.get("entity_id", "media_player.kef")
total_time = data.get("total_time", 30)
final_volume = data.get("final_volume", 0.25)
volume_step = data.get("volume_step", 0.01)

steps = math.floor(final_volume / volume_step)
time_step = total_time / steps


def set_volume(volume, entity_id=entity_id, hass=hass, logger=logger):
    data = {"entity_id": entity_id, "volume_level": volume}
    hass.services.call("media_player", "volume_set", data)


def get_volume(entity_id=entity_id, hass=hass):
    return hass.states.get(entity_id).attributes.get("volume_level")
    hass.services.call("homeassistant", "update_entity", {"entity_id": entity_id})


for i in range(steps):
    t_start = time.time()
    volume = i * volume_step
    if i > 0 and abs(get_volume() - volume) > volume_step:
        logger.warning(f"Stopping because of manual change")
        break
    logger.warning(str(hass.states.get(entity_id)))
    set_volume(volume)
    to_sleep = time_step - (t_start - time.time())
    time.sleep(to_sleep if to_sleep > 0 else 0)
