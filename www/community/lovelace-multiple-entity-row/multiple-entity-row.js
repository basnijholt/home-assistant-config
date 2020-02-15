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
          }
          .icon-small {
            width: auto;
          }`;
        }

        render() {
            return html`
            <state-badge
                .stateObj="${this.state.stateObj}"
                .overrideIcon="${this._config.icon}"
                .stateColor="${this._config.state_color}"
                @click="${this.onRowClick}">
            </state-badge>
            <div class="flex">
                <div class="info" @click="${this.onRowClick}">
                    ${this.state.name}
                    <div class="secondary">
                        ${this.lastChanged
                ? html`<ha-relative-time datetime="${this.state.stateObj.last_changed}" .hass="${this._hass}"></ha-relative-time>`
                : (this.state.info && `${this.state.info.name ? `${this.state.info.name} ` : ''}${this.state.info.value}`)}
                    </div>
                </div>
                ${this.state.entities.map(entity => this.renderEntity(entity))}
                ${this.state.value ? html`
                <div class="state entity" @click="${this.onStateClick}">
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
                    ? html`<state-badge class="icon-small" .stateObj="${entity.stateObj}" .overrideIcon="${entity.icon}" .stateColor="${this._config.state_color}"></state-badge>`
                    : html`<span>${entity.name}</span><div>${entity.value}</div>`}
            </div>` : null;
        }

        setConfig(config) {
            if (!config.entity) throw new Error('Please define a main entity.');
            if (config.entities) {
                config.entities.map(entity => this.checkEntity(entity));
            }
            this.checkEntity(config.secondary_info);

            this.lastChanged = config.secondary_info === 'last-changed';
            this.stateHeader = config.state_header !== undefined ? config.state_header : null;
            this.onRowClick = () => this.fireEvent('hass-more-info', config.entity);
            this.onStateClick = this.getAction(config.tap_action, config.entity);

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
                    value: this._config.show_state !== false ? this.entityStateValue(mainStateObj, this._config.unit) : null,
                    toggle: this.checkToggle(this._config, mainStateObj),

                    entities: this._config.entities ? this._config.entities.map(entity => this.initEntity(entity, mainStateObj)) : [],
                    info: this.lastChanged ? null : this.initEntity(this._config.secondary_info, mainStateObj),
                }
            }
        }

        checkEntity(config) {
            if (config && typeof config === 'object' && !(config.entity || config.attribute || config.icon)) {
                throw new Error(`Entity object requires at least one 'entity', 'attribute' or 'icon'.`);
            } else if (config && typeof config === 'string' && config === '') {
                throw new Error('Entity ID string must not be blank.');
            } else if (config && typeof config !== 'string' && typeof config !== 'object') {
                throw new Error('Entity config must be a valid entity ID string or entity object.');
            }
        }

        checkToggle(config, stateObj) {
            return config.toggle === true && stateObj.state && !['unknown', 'unavailable'].includes(stateObj.state)
        }

        initEntity(config, mainStateObj) {
            if (!config) return null;

            const entity = typeof config === 'string' ? config : config.entity;
            const stateObj = entity ? (this._hass && this._hass.states[entity]) : mainStateObj;

            if (!stateObj) return {value: this._hass.localize('state.default.unavailable')};

            return {
                stateObj: stateObj,
                name: this.entityName(config.name, stateObj),
                value: config.attribute !== undefined
                    ? this.entityAttribute(stateObj, config.attribute, config.unit)
                    : this.entityStateValue(stateObj, config.unit),
                toggle: this.checkToggle(config, stateObj),
                icon: config.icon === true ? stateObj.attributes.icon : config.icon,
                onClick: this.getAction(config.tap_action, stateObj.entity_id),
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

            if (domain === 'binary_sensor') {
                if (stateObj.attributes.device_class) {
                    display = this._hass.localize(`state.${domain}.${stateObj.attributes.device_class}.${stateObj.state}`);
                }
                if (!display) {
                    display = this._hass.localize(`state.${domain}.default.${stateObj.state}`);
                }
            } else if (unit !== false && (unit || stateObj.attributes.unit_of_measurement) && !['unknown', 'unavailable'].includes(stateObj.state)) {
                display = `${stateObj.state} ${unit || stateObj.attributes.unit_of_measurement}`;
            } else if (domain === 'zwave') {
                display = ['initializing', 'dead'].includes(stateObj.state)
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

        getAction(config, entityId) {
            if (config && config.action) {
                if (config.action === 'call-service') {
                    const serviceDetails = config.service.split(".");
                    return () => this._hass.callService(serviceDetails[0], serviceDetails[1], config.service_data);
                }
                if (config.action === 'toggle') {
                    return () => this._hass.callService('homeassistant', 'toggle', {entity_id: entityId});
                }
            }
            return () => this.fireEvent('hass-more-info', entityId);
        }

        fireEvent(type, entity, options = {}) {
            const event = new Event(type, {
                bubbles: options.bubbles || true,
                cancelable: options.cancelable || true,
                composed: options.composed || true,
            });
            event.detail = {entityId: entity};
            this.dispatchEvent(event);
        }
    }

    customElements.define('multiple-entity-row', MultipleEntityRow);
})(window.LitElement || Object.getPrototypeOf(customElements.get('hui-view')));
