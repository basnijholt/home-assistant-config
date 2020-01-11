((LitElement) => {
    const html = LitElement.prototype.html;
    const css = LitElement.prototype.css;

    class XiaomiVacuumCard extends LitElement {

        static get properties() {
            return {
                _hass: {},
                _config: {},
                stateObj: {},
                state: {},
                style: {}
            }
        }

        static get styles() {
            return css`
        .background {
          background-repeat: no-repeat;
          background-position: center center;
          background-size: cover;
        }
        .title {
          font-size: 20px;
          padding: 16px 16px 0;
          text-align: center;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
        .content {
          cursor: pointer;
        }
        .flex {
          display: flex;
          align-items: center;
          justify-content: space-evenly;
        }
        .button {
          cursor: pointer;
          padding: 16px;
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(2, auto);
        }
        .grid-content {
          display: grid;
          align-content: space-between;
          grid-row-gap: 6px;
        }
        .grid-left {
          text-align: left;
          font-size: 110%;
          padding-left: 10px;
          border-left: 2px solid var(--primary-color);
        }
        .grid-right {
          text-align: right;
          padding-right: 10px;
          border-right: 2px solid var(--primary-color);
        }`;
        }

        render() {
            return html`
            <ha-card .hass="${this._hass}" .config="${this._config}" class="background" style="${this.style.background}">
              ${this.state.name ?
                html`<div class="title" style="${this.style.text}" @click="${() => this.fireEvent('hass-more-info')}">${this.state.name}</div>`
                : null}
              ${this.state.showLabels ? html`
              <div class="content grid" style="${this.style.content + this.style.text}" @click="${() => this.fireEvent('hass-more-info')}">
                <div class="grid-content grid-left">
                  <div>${this.getValue('status')}</div>
                  <div>${this.getValue('battery', ' %')}</div>
                  <div>${this.getValue('mode')}</div>
                </div>
                ${this.state.showDetails ? html`
                <div class="grid-content grid-right" >
                  <div>${this.computeValue('main_brush')}</div>
                  <div>${this.computeValue('side_brush')}</div>
                  <div>${this.computeValue('filter')}</div>
                  <div>${this.computeValue('sensor')}</div>
                </div>` : null}
              </div>` : null}
              ${this.state.showButtons ? html`
              <div class="flex" style="${this.style.text}">
                ${Object.keys(this.state.buttons).map(this.renderButton.bind(this))}
              </div>` : null}
            </ha-card>`;
        }

        renderButton(key) {
            return this.state.buttons[key]
                ? html`<div class="button" @tap="${() => this.callService(key)}"><ha-icon icon="${this.state.icons[key]}"></ha-icon></div>`
                : null;
        }

        getValue(field, unit = '') {
            const value = (this.stateObj && this.state.attributes[field] in this.stateObj.attributes)
                ? this.stateObj.attributes[this.state.attributes[field]] + unit
                : (this._hass ? this._hass.localize('state.default.unavailable') : 'Unavailable');
            return `${this.state.labels[field]}: ${value}`;
        };

        computeValue(field) {
            if (this.state.attributes[field] === undefined || this.state.attributes[field] === false) {
                return null;
            } else if (this.stateObj && this.state.attributes[field] in this.stateObj.attributes) {
                const computed = this.state.computeValue(this.stateObj.attributes[this.state.attributes[field]]);
                const unit = typeof computed === 'number' ? ` ${this.state.labels.hours}` : '';
                return `${this.state.labels[field]}: ${computed}${unit}`;
            } else {
                return `${this.state.labels[field]}: - `;
            }
        };

        callService(service) {
            this._hass.callService('vacuum', this.state.service[service], {entity_id: this.stateObj.entity_id});
        }

        fireEvent(type, options = {}) {
            const event = new Event(type, {
                bubbles: options.bubbles || true,
                cancelable: options.cancelable || true,
                composed: options.composed || true,
            });
            event.detail = {entityId: this.stateObj.entity_id};
            this.dispatchEvent(event);
        }

        getCardSize() {
            if (this.state.name && this.state.showButtons) return 5;
            if (this.state.name || this.state.showButtons) return 4;
            return 3;
        }

        setConfig(config) {
            const labels = {
                status: 'Status',
                battery: 'Battery',
                mode: 'Mode',
                main_brush: 'Main Brush',
                side_brush: 'Side Brush',
                filter: 'Filter',
                sensor: 'Sensor',
                hours: 'h',
            };

            const attributes = {
                status: 'status',
                battery: 'battery_level',
                mode: 'fan_speed',
                main_brush: 'main_brush_left',
                side_brush: 'side_brush_left',
                filter: 'filter_left',
                sensor: 'sensor_dirty_left',
            };

            const services = {
                start: 'start',
                pause: 'pause',
                stop: 'stop',
                locate: 'locate',
                return: 'return_to_base',
                spot: 'clean_spot',
            };

            const buttons = {
                start: true,
                pause: true,
                stop: true,
                spot: false,
                locate: true,
                return: true,
            };

            const icons = {
                start: 'mdi:play',
                pause: 'mdi:pause',
                stop: 'mdi:stop',
                locate: 'mdi:map-marker',
                return: 'mdi:home-map-marker',
                spot: 'mdi:broom',
            };

            const vendors = {
                xiaomi: {
                    details: true,
                },
                valetudo: {
                    details: true,
                    attributes: {
                        status: 'state',
                        main_brush: 'mainBrush',
                        side_brush: 'sideBrush',
                        filter: 'filter',
                        sensor: 'sensor',
                    },
                },
                roomba: {
                    details: true,
                    attributes: {
                        main_brush: 'bin_present',
                        side_brush: 'bin_full',
                        filter: false,
                        sensor: false,
                    },
                    labels: {
                        main_brush: 'Bin Present',
                        side_brush: 'Bin Full',
                    },
                    computeValue: v => (v === true ? 'Yes' : (v === false ? 'No' : '-')),
                },
                robovac: {
                    details: false,
                    buttons: {
                        stop: false,
                        spot: true,
                    },
                },
                ecovacs: {
                    image: '/local/img/vacuum_ecovacs.png',
                    details: false,
                    buttons: {
                        stop: false,
                        spot: true,
                    },
                    service: {
                        start: 'turn_on',
                        pause: 'stop',
                        stop: 'turn_off',
                    },
                },
                deebot: {
                    image: '/local/img/vacuum_ecovacs.png',
                    details: true,
                    service: {
                        start: 'turn_on',
                        pause: 'stop',
                        stop: 'turn_off',
                    },
                    attributes: {
                        main_brush: 'component_main_brush',
                        side_brush: 'component_side_brush',
                        filter: 'component_filter',
                        sensor: false,
                    },
                    computeValue: v => Math.round(Number(v) / 100),
                }
            };

            if (!config.entity) throw new Error('Please define an entity.');
            if (config.entity.split('.')[0] !== 'vacuum') throw new Error('Please define a vacuum entity.');
            if (config.vendor && !config.vendor in vendors) throw new Error('Please define a valid vendor.');

            const vendor = vendors[config.vendor] || vendors.xiaomi;

            this.state = {
                showDetails: vendor.details,
                showButtons: config.buttons !== false,
                showLabels: config.labels !== false,
                showName: config.name !== false,

                service: Object.assign({}, services, vendor.service),
                buttons: Object.assign({}, buttons, vendor.buttons, config.buttons),
                attributes: Object.assign({}, attributes, vendor.attributes, config.attributes),
                labels: Object.assign({}, labels, vendor.labels, config.labels),
                icons: Object.assign({}, icons, config.icons),
                computeValue: vendor.computeValue || (val => val),
            };

            this.style = {
                text: `color: ${config.image !== false ? 'white; text-shadow: 0 0 10px black;' : 'var(--primary-text-color);'}`,
                content: `padding: ${config.showButtons ? '16px 16px 4px' : '16px'};`,
                background: config.image !== false ? `background-image: url('${config.image || vendor.image || '/local/img/vacuum.png'}')` : ''
            };

            this._config = config;
        }

        set hass(hass) {
            this._hass = hass;

            if (hass && this._config) {
                this.stateObj = this._config.entity in hass.states ? hass.states[this._config.entity] : null;

                if (this.stateObj && this.state.showName) {
                    this.state.name = this._config.name || this.stateObj.attributes.friendly_name;
                }
            }
        }
    }

    customElements.define('xiaomi-vacuum-card', XiaomiVacuumCard);
})(window.LitElement || Object.getPrototypeOf(customElements.get("hui-view")));