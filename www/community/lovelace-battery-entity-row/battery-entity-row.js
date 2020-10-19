((LitElement) => {
    console.info(
        '%c BATTERY-ENTITY-ROW %c 1.0.0 ',
        'color: cyan; background: black; font-weight: bold;',
        'color: darkblue; background: white; font-weight: bold;',
    );

    const html = LitElement.prototype.html;
    const css = LitElement.prototype.css;

    class BatteryEntityRow extends LitElement {

        static get properties() {
            return {
                _hass: Object,
                _config: Object,
                stateObj: Object,
                state: Object
            }
        }

        static get styles() {
            return css`
          :host {
            display: flex;
            align-items: center;
          }
          .flex {
            flex: 1;
            margin-left: 16px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            min-width: 0;
          }
          .info, state-badge {
            cursor: pointer;
          }
          .secondary {
            color: var(--secondary-text-color);
          }
          .good {
            color: var(--label-badge-green);
          }
          .warning {
            color: var(--label-badge-yellow);
          }
          .critical {
            color: var(--label-badge-red);
          }`;
        }

        render() {
            return this.stateObj ? html`
            <state-badge
                .stateObj="${this.stateObj}"
                .overrideIcon="${this.state.icon}"
                @click="${this.moreInfo}"
                class="pointer ${this.state.color}">
            </state-badge>
            <div class="flex" @click="${this.moreInfo}">
                <div class="info">
                    ${this.state.name}
                    ${this.renderSecondaryInfo()}
                </div>
                <div class="state">
                    ${this.state.level}&nbsp;${this.state.unit}
                </div>
            </div>` : html`
            <hui-warning>
                ${this._hass.localize('ui.panel.lovelace.warning.entity_not_found', 'entity', this._config.entity)}
            </hui-warning>`;
        }

        renderSecondaryInfo() {
            return this._config.secondary_info === 'last-changed' ?
                html`<div class="secondary">
                    <ha-relative-time datetime="${this.stateObj.last_changed}" .hass="${this._hass}"></ha-relative-time>
                </div>` : null;
        }

        setConfig(config) {
            if (!config.entity) throw new Error('Please define a valid entity.');

            this.moreInfo = () => this.fireEvent(this, 'hass-more-info', {entityId: config.entity});
            this._config = config;
        }

        set hass(hass) {
            this._hass = hass;

            if (hass && this._config) {
                this.stateObj = this._config.entity in hass.states ? hass.states[this._config.entity] : null;

                if (this.stateObj) {
                    const batteryLevel = this.getBatteryLevel(this._config.attribute);

                    this.state = {
                        name: this._config.name || this.stateObj.attributes.friendly_name,
                        level: batteryLevel,
                        unit: this._config.unit || '%',
                        icon: this._config.icon || this.getIcon(batteryLevel),
                        color: this.getColor(batteryLevel)
                    };
                }
            }
        }

        getBatteryLevel(attribute) {
            let batteryValue = this.stateObj.state;
            if (this.stateObj.attributes.battery) batteryValue = this.stateObj.attributes.battery;
            if (this.stateObj.attributes.battery_level) batteryValue = this.stateObj.attributes.battery_level;
            if (this.stateObj.attributes[attribute]) batteryValue = this.stateObj.attributes[attribute];
            return Number.isFinite(parseInt(batteryValue)) ? Math.round(parseInt(batteryValue, 10)) : 0;
        }

        getIcon(batteryLevel) {
            const roundedLevel = Math.round(batteryLevel / 10) * 10;
            return roundedLevel >= 100
                ? 'mdi:battery'
                : roundedLevel === 0
                    ? 'mdi:battery-outline'
                    : `mdi:battery-${roundedLevel}`;
        }

        getColor(batteryLevel) {
            const warning = this._config.warning || 35;
            const critical = this._config.critical || 15;
            return (batteryLevel > warning)
                ? 'good'
                : (batteryLevel > critical)
                    ? 'warning'
                    : 'critical';
        }

        fireEvent(node, type, detail = {}, options = {}) {
            const event = new Event(type, {
                bubbles: options.bubbles || true,
                cancelable: options.cancelable || true,
                composed: options.composed || true,
            });
            event.detail = detail;
            node.dispatchEvent(event);
        }
    }

    customElements.define('battery-entity-row', BatteryEntityRow);
})(window.LitElement || Object.getPrototypeOf(customElements.get('hui-masonry-view') || customElements.get('hui-view')));
