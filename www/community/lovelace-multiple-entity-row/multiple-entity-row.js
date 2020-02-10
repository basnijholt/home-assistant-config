((LitElement) => {
    const html = LitElement.prototype.html;
    const css = LitElement.prototype.css;

    class MultipleEntityRow extends LitElement {

        static get properties() {
            return {
                _hass: {},
                _config: {},
                state: {},
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
          .info {
            flex: 1 0 60px;
            cursor: pointer;
          }
          .info, .info > * {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .flex ::slotted(*) {
            margin-left: 8px;
            min-width: 0;
          }
          .flex ::slotted([slot="secondary"]) {
            margin-left: 0;
          }
          .secondary, ha-relative-time {
            display: block;
            color: var(--secondary-text-color);
          }
          state-badge {
            flex: 0 0 40px;
            cursor: pointer;
          }
          .entity {
            margin-right: 16px;
            text-align: center;
            cursor: pointer;
          }
          .entity span {
            font-size: 10px;
            color: var(--secondary-text-color);
          }
          .entity:last-of-type {
            margin-right: 0;
          }
          .state {
            min-width: 45px;
          }
          .toggle {
            margin-left: 8px;
          }`;
        }

        render() {
            return html`
            <state-badge
                .stateObj="${this.state.stateObj}"
                .overrideIcon="${this._config.icon}"
                .stateColor="${this._config.state_color}"
                @click="${this.onClick}">
            </state-badge>
            <div class="flex">
                <div class="info" @click="${this.onClick}">
                    ${this.state.name}
                    <div class="secondary">
                        ${this.state.info && `${this.state.info.name ? `${this.state.info.name} ` : ''}${this.state.info.value}`}
                        ${this.lastChanged
                ? html`<ha-relative-time datetime="${this.state.stateObj.last_changed}" .hass="${this._hass}"></ha-relative-time>`
                : null}
                    </div>
                </div>
                ${this.renderEntity(this.state.primary)}
                ${this.renderEntity(this.state.secondary)}
                ${this.renderEntity(this.state.tertiary)}
                ${this.state.value ? html`
                <div class="state entity" @click="${this.onClick}">
                    ${this.stateHeader && html`<span>${this.stateHeader}</span>`}
                    ${this.state.toggle
                ? html`<div class="toggle"><ha-entity-toggle .stateObj="${this.state.stateObj}" .hass="${this._hass}"></ha-entity-toggle></div>`
                : html`<div>${this.state.value}</div>`}
                </div>` : null}
            </div>`;
        }

        renderEntity(entity) {
            return entity ? html`
            <div class="entity" @click="${entity.onClick}">
            ${entity.toggle
                ? html`<span>${entity.name}</span><div><ha-entity-toggle .stateObj="${entity.stateObj}" .hass="${this._hass}"></ha-entity-toggle></div>`
                : entity.icon
                    ? html`<ha-icon icon="${entity.icon}"></ha-icon>`
                    : html`<span>${entity.name}</span><div>${entity.value}</div>`}
            </div>` : null;
        }

        setConfig(config) {
            if (!config.entity) throw new Error('Please define a main entity.');
            this.checkEntity(config, 'primary');
            this.checkEntity(config, 'secondary');
            this.checkEntity(config, 'tertiary');
            this.checkEntity(config, 'info');

            this.lastChanged = config.secondary_info === 'last-changed' && !config.info;
            this.stateHeader = config.name_state !== undefined ? config.name_state : null;
            this.onClick = () => this.fireEvent(config.entity);

            this._config = config;
        }

        set hass(hass) {
            this._hass = hass;

            if (hass && this._config) {
                const mainStateObj = hass.states[this._config.entity];

                if (!mainStateObj) throw new Error(`Entity not available: ${this._config.entity}`);

                this.state = {
                    ...this.state,

                    stateObj: mainStateObj,
                    name: this.entityName(this._config.name, mainStateObj),
                    value: this._config.hide_state !== true ? this.entityStateValue(mainStateObj, this._config.unit) : null,
                    toggle: this.checkToggle(this._config, mainStateObj),

                    primary: this.initEntity(this._config.primary, mainStateObj),
                    secondary: this.initEntity(this._config.secondary, mainStateObj),
                    tertiary: this.initEntity(this._config.tertiary, mainStateObj),
                    info: this.initEntity(this._config.info, mainStateObj),
                }
            }
        }

        checkEntity(config, key) {
            if (config[key] && !(config[key].entity || config[key].attribute || config[key].service)) {
                throw new Error(`Object '${key}' requires at least one 'entity', 'attribute' or 'service'.`);
            }
        }

        checkToggle(config, stateObj) {
            return config.toggle === true && stateObj.state && !["unknown", "unavailable"].includes(stateObj.state)
        }

        initEntity(config, mainStateObj) {
            if (!config) return null;

            const stateObj = config.entity ? (this._hass && this._hass.states[config.entity]) : mainStateObj;

            if (!stateObj) return {value: this._hass.localize('state.default.unavailable')};

            return {
                stateObj: stateObj,
                name: this.entityName(config.name, stateObj),
                value: config.attribute !== undefined
                    ? this.entityAttribute(stateObj, config.attribute, config.unit)
                    : this.entityStateValue(stateObj, config.unit),
                toggle: this.checkToggle(config, stateObj),
                icon: config.icon === true ? stateObj.attributes.icon : config.icon,
                onClick: () => (config.service ? this.callService(config.service, config.service_data) : this.fireEvent(stateObj.entity_id))
            };
        }

        entityName(name, stateObj) {
            if (name === false) return null;
            if (name !== undefined) return name;
            return stateObj.attributes.friendly_name === undefined
                ? stateObj.entity_id.substr(stateObj.entity_id.indexOf('.') + 1).replace(/_/g, ' ')
                : stateObj.attributes.friendly_name || '';
        }

        entityAttribute(stateObj, attribute, unit) {
            return (attribute in stateObj.attributes)
                ? `${stateObj.attributes[attribute]}${unit ? ` ${unit}` : ''}`
                : this._hass.localize('state.default.unavailable');
        }

        entityStateValue(stateObj, unit) {
            let display;
            const domain = stateObj.entity_id.substr(0, stateObj.entity_id.indexOf("."));

            if (domain === "binary_sensor") {
                if (stateObj.attributes.device_class) {
                    display = this._hass.localize(`state.${domain}.${stateObj.attributes.device_class}.${stateObj.state}`);
                }
                if (!display) {
                    display = this._hass.localize(`state.${domain}.default.${stateObj.state}`);
                }
            } else if (unit !== false && (unit || stateObj.attributes.unit_of_measurement) && !["unknown", "unavailable"].includes(stateObj.state)) {
                display = `${stateObj.state} ${unit || stateObj.attributes.unit_of_measurement}`;
            } else if (domain === "zwave") {
                display = ["initializing", "dead"].includes(stateObj.state)
                    ? this._hass.localize(`state.zwave.query_stage.${stateObj.state}`, 'query_stage', stateObj.attributes.query_stage)
                    : this._hass.localize(`state.zwave.default.${stateObj.state}`);
            } else {
                display = this._hass.localize(`state.${domain}.${stateObj.state}`);
            }

            return display ||
                this._hass.localize(`state.default.${stateObj.state}`) ||
                this._hass.localize(`component.${domain}.state.${stateObj.state}`) ||
                stateObj.state;
        }

        fireEvent(entity, options = {}) {
            const event = new Event('hass-more-info', {
                bubbles: options.bubbles || true,
                cancelable: options.cancelable || true,
                composed: options.composed || true,
            });
            event.detail = {entityId: entity};
            this.dispatchEvent(event);
        }

        callService(service, serviceData) {
            const serviceDetails = service.split(".");
            this._hass.callService(serviceDetails[0], serviceDetails[1], serviceData);
        }
    }

    customElements.define('multiple-entity-row', MultipleEntityRow);
})(window.LitElement || Object.getPrototypeOf(customElements.get("hui-view")));
