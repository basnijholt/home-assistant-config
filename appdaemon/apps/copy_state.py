import appdaemon.plugins.hass.hassapi as hass


class CopyState(hass.Hass):
    def initialize(self):
        self.listen_state(self.change_state, self.args["copy_from"], new="on")
        self.listen_state(self.change_state, self.args["copy_from"], new="off")

    def change_state(self, entity, attribute, old, new, kwargs):
        switch = self.args["copy_to"]
        if new == "on":
            self.turn_on(switch)
        elif new == "off":
            self.turn_off(switch)
