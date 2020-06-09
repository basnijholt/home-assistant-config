((LitElement) => {
    const html = LitElement.prototype.html;
    const css = LitElement.prototype.css;

    const UNAVAILABLE = 'unavailable';
    const UNKNOWN = 'unknown';

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
                    <div class="secondary">${this.renderSecondaryInfo()}</div>
                </div>
                ${this.state.entities.map(entity => this.renderEntity(entity))}
                ${this.state.value ? html`
                <div class="state entity" @click="${this.onStateClick}">
                    ${this.stateHeader && html`<span>${this.stateHeader}</span>`}
                    ${this.renderMainState()}
                </div>` : null}
            </div>`;
        }

        renderMainState() {
            if (this.state.toggle) return html`<div class="toggle">${this.renderToggle(this.state.stateObj)}</div>`;
            else if (this._config.format) return this.renderTimestamp(this.state.value, this._config.format);
            else return html`<div>${this.state.value}</div>`;
        }

        renderSecondaryInfo() {
            return this.lastChanged
                ? html`<ha-relative-time datetime="${this.state.stateObj.last_changed}" .hass="${this._hass}"></ha-relative-time>`
                : this.state.info && this.state.info.format
                    ? this.renderTimestamp(this.state.info.value, this.state.info.format)
                    : (this.state.info && `${this.state.info.name ? `${this.state.info.name} ` : ''}${this.state.info.value}`)
        }

        renderToggle(stateObj) {
            return html`<ha-entity-toggle .stateObj="${stateObj}" .hass="${this._hass}"></ha-entity-toggle>`;
        }

        renderTimestamp(value, format) {
            return ![UNKNOWN, UNAVAILABLE].includes(value.toLowerCase())
                ? html`<hui-timestamp-display .ts=${new Date(value)} .format=${format} .hass=${this._hass}></hui-timestamp-display>`
                : html`${value}`;
        }

        renderIcon(entity) {
            return html`<state-badge class="icon-small" .stateObj="${entity.stateObj}" .overrideIcon="${entity.icon}" .stateColor="${entity.state_color}"></state-badge>`;
        }

        renderEntityValue(entity) {
            if (entity.toggle) return this.renderToggle(entity.stateObj);
            else if (entity.icon !== undefined) return this.renderIcon(entity);
            else if (entity.format) return this.renderTimestamp(entity.value, entity.format);
            else return html`${entity.value}`;
        }

        renderEntity(entity) {
            return entity ? html`
            <div class="entity" @click="${entity.onClick}">
                <span>${entity.name}</span>
                <div>${this.renderEntityValue(entity)}</div>
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
            this.onRowClick = (!config.tap_action || config.tap_action.action !== 'none')
                ? this.moreInfoAction(config.tap_action, config.entity)
                : null;
            this.onStateClick = this.getAction(config.tap_action, config.entity);

            this._config = config;
        }

        set hass(hass) {
            this._hass = hass;

            if (hass && this._config) {
                const mainStateObj = hass.states[this._config.entity];

                if (!mainStateObj) throw new Error(`Entity '${this._config.entity}' does not exist.`);

                this.state = {
                    ...this.state,

                    stateObj: mainStateObj,
                    name: this.entityName(this._config.name, mainStateObj),
                    value: this._config.show_state !== false ? this.entityStateValue(mainStateObj, this._config.unit) : null,
                    toggle: this.checkToggle(this._config, mainStateObj),

                    entities: this._config.entities ? this._config.entities.map(entity => this.initEntity(entity, mainStateObj)) : [],
                    info: this.lastChanged ? null :
                        typeof this._config.secondary_info === 'string'
                            ? {value: this._config.secondary_info}
                            : this.initEntity(this._config.secondary_info, mainStateObj),
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
                name: entity ? this.entityName(config.name, stateObj) : (config.name || null),
                value: config.attribute !== undefined
                    ? this.entityAttribute(stateObj, config.attribute, config.unit)
                    : this.entityStateValue(stateObj, config.unit),
                toggle: this.checkToggle(config, stateObj),
                icon: config.icon === true ? (stateObj.attributes.icon || null) : config.icon,
                format: config.format || false,
                state_color: config.state_color || false,
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
            if (stateObj.state === UNKNOWN || stateObj.state === UNAVAILABLE) {
                return this._hass.localize(`state.default.${stateObj.state}`);
            }

            if (unit !== false && (unit || stateObj.attributes.unit_of_measurement)) {
                return `${stateObj.state} ${unit || stateObj.attributes.unit_of_measurement}`;
            }

            const domain = stateObj.entity_id.substr(0, stateObj.entity_id.indexOf('.'));

            if (domain === 'zwave') {
                return ['initializing', 'dead'].includes(stateObj.state)
                    ? this._hass.localize(`state.zwave.query_stage.${stateObj.state}`, 'query_stage', stateObj.attributes.query_stage)
                    : this._hass.localize(`state.zwave.default.${stateObj.state}`);
            }

            return (
                (stateObj.attributes.device_class
                    && this._hass.localize(`component.${domain}.state.${stateObj.attributes.device_class}.${stateObj.state}`))
                || this._hass.localize(`component.${domain}.state._.${stateObj.state}`)
                || stateObj.state
            );
        }

        getAction(config, entityId) {
            if (config && config.action) {
                if (config.action === 'none') {
                    return null;
                }
                const confirmation = config.confirmation === true ? 'Are you sure?' : config.confirmation;
                if (config.action === 'call-service') {
                    const [domain, service] = config.service.split(".");
                    return () => {
                        if (!confirmation || confirm(confirmation)) {
                            this._hass.callService(domain, service, config.service_data);
                            this.forwardHaptic('light');
                        }
                    }
                }
                if (config.action === 'toggle') {
                    return () => {
                        if (!confirmation || confirm(confirmation)) {
                            this._hass.callService('homeassistant', 'toggle', {entity_id: entityId});
                            this.forwardHaptic('light');
                        }
                    }
                }
                if (config.action === 'url') {
                    return () => {
                        if (!confirmation || confirm(confirmation)) {
                            const win = window.open(config.url_path, '_blank');
                            if (win) win.focus();
                        }
                    }
                }
            }
            return this.moreInfoAction(config, entityId);
        }

        moreInfoAction(config, entityId) {
            return () => this.fireEvent('hass-more-info', (config && config.entity) || entityId);
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

        forwardHaptic(type) {
            const event = new Event("haptic", {bubbles: true, cancelable: false, composed: true});
            event.detail = type;
            this.dispatchEvent(event);
        }
    }

    customElements.define('multiple-entity-row', MultipleEntityRow);
})(window.LitElement || Object.getPrototypeOf(customElements.get('hui-view')));
