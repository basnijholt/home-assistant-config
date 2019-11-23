class GithubEntityRow extends Polymer.Element {

    static get template() {
        return Polymer.html`
          <style>
            .flex {
              display: flex;
              align-items: center;
              flex-wrap: nowrap;
            }
            .entity {
              display: inline-block;
              margin-right: 8px;
              text-align: right;
              min-width: 44px;
            }
            .entity:last-of-type {
              margin-right: 0;
            }
            .icon {
              color: var(--primary-color);
            }
          </style>
          <hui-generic-entity-row hass="[[_hass]]" config="[[_config]]">
            <div class="flex">
              <div class="entity" on-click="issues"  title="Open issues">
                <ha-icon class="icon" icon="mdi:alert-circle-outline"></ha-icon>
                <span>[[stateObj.attributes.open_issues]]</span>
              </div>
              <div class="entity" on-click="pulls" title="Open pull requests">
                <ha-icon class="icon" icon="mdi:source-pull"></ha-icon>
                <span>[[stateObj.attributes.open_pull_requests]]</span>
              </div>
              <div class="entity" on-click="stars" title="Stargazers">
                <ha-icon class="icon" icon="mdi:star"></ha-icon>
                <span>[[stateObj.attributes.stargazers]]</span>
              </div>
            </div>
          </hui-generic-entity-row>
        `;
    }

    issues(e) { this.goto(e, 'issues'); }
    pulls(e) { this.goto(e, 'pulls'); }
    stars(e) { this.goto(e, 'stargazers'); }

    goto(event, path) {
        event.stopPropagation();
        window.open(`https://github.com/${this.stateObj.attributes.path}/${path}`);
    }

    setConfig(config) {
        if (!config.entity) throw new Error('Please define an entity.');
        if (config.entity.split('.')[0] !== 'sensor') throw new Error('Please define a GitHub sensor entity.');

        this._config = config;
    }

    set hass(hass) {
        this._hass = hass;

        if (hass && this._config) {
            this.stateObj = this._config.entity in hass.states ? hass.states[this._config.entity] : null;
        }
    }
}

customElements.define('github-entity-row', GithubEntityRow);
