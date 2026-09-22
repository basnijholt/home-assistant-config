console.log(
  `%cvertical-stack-in-card\n%cVersion: ${'1.1.2'}`,
  'color: #1976d2; font-weight: bold;',
  '',
);

class VerticalStackInCardEditor extends HTMLElement {
  constructor() {
    super();
    this._config = {};
    this._initialized = false;
  }

  async setConfig(config) {
    this._config = config;
    if (!this._initialized) {
      await this._build();
    } else {
      this._sync();
    }
  }

  async _build() {
    this._initialized = true;

    // Load the hui-vertical-stack-card editor for title + cards UI.
    let cls = customElements.get('hui-vertical-stack-card');
    if (!cls) {
      const helpers = await window.loadCardHelpers();
      helpers.createCardElement({ type: 'vertical-stack', cards: [] });
      await customElements.whenDefined('hui-vertical-stack-card');
      cls = customElements.get('hui-vertical-stack-card');
    }
    this._huiEditor = await cls.getConfigElement();
    this._huiEditor.addEventListener('config-changed', (ev) => {
      // Only intercept the final top-level event from the hui editor itself.
      // Intermediate events (from child card editors, the card picker, etc.)
      // must propagate so HA's internals keep working.
      if (ev.detail.config.type !== 'custom:vertical-stack-in-card') return;
      ev.stopPropagation();
      this._fireConfigChanged({ ...this._config, ...ev.detail.config });
    });

    // Horizontal toggle row.
    const switchContainer = document.createElement('div');
    switchContainer.style.cssText =
      'display:flex;align-items:center;justify-content:space-between;padding:8px 0;';
    const label = document.createElement('span');
    label.textContent = 'Stack horizontally';
    this._horizontalSwitch = document.createElement('ha-switch');
    this._horizontalSwitch.addEventListener('change', () => {
      const config = { ...this._config };
      if (this._horizontalSwitch.checked) {
        config.horizontal = true;
      } else {
        delete config.horizontal;
      }
      this._fireConfigChanged(config);
    });
    switchContainer.appendChild(label);
    switchContainer.appendChild(this._horizontalSwitch);
    this.appendChild(switchContainer);
    this.appendChild(this._huiEditor);

    this._sync();
  }

  set hass(hass) {
    this._hass = hass;
    if (this._huiEditor) this._huiEditor.hass = hass;
  }

  // HA sets lovelace on the config element — forward it into the hui editor
  // so hui-cards-editor and hui-card-picker receive it and work correctly.
  set lovelace(lovelace) {
    this._lovelace = lovelace;
    if (this._huiEditor) this._huiEditor.lovelace = lovelace;
  }

  _sync() {
    if (this._huiEditor) {
      if (this._hass) this._huiEditor.hass = this._hass;
      if (this._lovelace) this._huiEditor.lovelace = this._lovelace;
      this._huiEditor.setConfig({
        type: this._config.type,
        title: this._config.title,
        cards: this._config.cards || [],
      });
    }
    if (this._horizontalSwitch) {
      this._horizontalSwitch.checked = !!this._config.horizontal;
    }
  }

  _fireConfigChanged(config) {
    this._config = config;
    this.dispatchEvent(
      new CustomEvent('config-changed', {
        detail: { config },
        bubbles: true,
        composed: true,
      }),
    );
  }
}

customElements.define(
  'vertical-stack-in-card-editor',
  VerticalStackInCardEditor,
);

class VerticalStackInCard extends HTMLElement {
  constructor() {
    super();
  }

  get updateComplete() {
    return this._cardSize.promise;
  }

  setConfig(config) {
    this._cardSize = {};
    this._cardSize.promise = new Promise(
      (resolve) => (this._cardSize.resolve = resolve),
    );

    if (!config || !config.cards || !Array.isArray(config.cards)) {
      throw new Error('Card config incorrect');
    }
    this._config = config;
    this._refCards = [];
    this.renderCard();
  }

  async renderCard() {
    const config = this._config;
    const promises = config.cards.map((config) =>
      this._createCardElement(config),
    );
    this._refCards = await Promise.all(promises);

    // Style cards
    this._refCards.forEach((card) => {
      if (card.updateComplete) {
        card.updateComplete.then(() => this._styleCard(card));
      } else {
        this._styleCard(card);
      }
    });

    // Create the card
    const card = document.createElement('ha-card');
    const cardContent = document.createElement('div');
    card.header = config.title;
    card.style.overflow = 'visible';
    cardContent.style.display = 'flex';
    // height: 100% is only appropriate for horizontal stacks, where the card
    // should fill the grid-allocated row height. For vertical stacks, height
    // must be content-driven (auto) — otherwise child cards that also set
    // height: 100% (e.g. hui-horizontal-stack-card after HA 2025.x) will
    // resolve their 100% against our container height and inflate to fill it.
    if (config.horizontal) {
      card.style.height = '100%';
      cardContent.style.height = '100%';
    }

    this._refCards.forEach((refCard) => cardContent.appendChild(refCard));

    if (config.horizontal) {
      // Proportional widths from grid_options.columns (native stack gives equal
      // flex: 1 1 0 to all; we use columns as relative flex weights).
      this._refCards.forEach((refCard, i) => {
        const cols = config.cards[i]?.grid_options?.columns ?? 1;
        refCard.style.flex = `${cols} ${cols} 0`;
        refCard.style.minWidth = '0';
      });
    } else {
      cardContent.style.flexDirection = 'column';
      // Proportional heights from grid_options.rows; cards without rows are
      // content-sized (flex: 0 0 auto).
      this._refCards.forEach((refCard, i) => {
        const rows = config.cards[i]?.grid_options?.rows;
        refCard.style.flex = rows ? `${rows} ${rows} 0` : '0 0 auto';
      });
    }

    card.appendChild(cardContent);

    const shadowRoot = this.shadowRoot || this.attachShadow({ mode: 'open' });
    while (shadowRoot.hasChildNodes()) {
      shadowRoot.removeChild(shadowRoot.lastChild);
    }
    shadowRoot.appendChild(card);

    // Calculate card size
    this._cardSize.resolve();
  }

  async _createCardElement(cardConfig) {
    const helpers = await window.loadCardHelpers();
    const element =
      cardConfig.type === 'divider'
        ? helpers.createRowElement(cardConfig)
        : helpers.createCardElement(cardConfig);

    element.hass = this._hass;
    element.addEventListener(
      'll-rebuild',
      (ev) => {
        ev.stopPropagation();
        this._createCardElement(cardConfig).then(() => {
          this.renderCard();
        });
      },
      { once: true },
    );
    return element;
  }

  set hass(hass) {
    this._hass = hass;
    if (this._refCards) {
      this._refCards.forEach((card) => {
        card.hass = hass;
      });
    }
  }

  _styleCard(element) {
    const config = this._config;
    if (element.shadowRoot) {
      if (element.shadowRoot.querySelector('ha-card')) {
        let ele = element.shadowRoot.querySelector('ha-card');
        ele.style.boxShadow = 'none';
        ele.style.border = 'none';
        if ('styles' in config) {
          Object.entries(config.styles).forEach(([key, value]) =>
            ele.style.setProperty(key, value),
          );
        }
      } else {
        let searchEles = element.shadowRoot.getElementById('root');
        if (!searchEles) {
          searchEles = element.shadowRoot.getElementById('card');
        }
        if (!searchEles) return;
        searchEles = searchEles.childNodes;
        for (let i = 0; i < searchEles.length; i++) {
          if (searchEles[i].style) {
            searchEles[i].style.margin = '0px';
          }
          this._styleCard(searchEles[i]);
        }
      }
    } else {
      if (
        typeof element.querySelector === 'function' &&
        element.querySelector('ha-card')
      ) {
        let ele = element.querySelector('ha-card');
        ele.style.boxShadow = 'none';
        ele.style.borderRadius = '0';
        ele.style.border = 'none';
        if ('styles' in config) {
          Object.entries(config.styles).forEach(([key, value]) =>
            ele.style.setProperty(key, value),
          );
        }
      }
      let searchEles = element.childNodes;
      for (let i = 0; i < searchEles.length; i++) {
        if (searchEles[i] && searchEles[i].style) {
          searchEles[i].style.margin = '0px';
        }
        this._styleCard(searchEles[i]);
      }
    }
  }

  _computeCardSize(card) {
    if (typeof card.getCardSize === 'function') {
      return card.getCardSize();
    }
    return customElements
      .whenDefined(card.localName)
      .then(() => this._computeCardSize(card))
      .catch(() => 1);
  }

  async getCardSize() {
    await this._cardSize.promise;
    const sizes = await Promise.all(this._refCards.map(this._computeCardSize));
    return sizes.reduce((a, b) => a + b, 0);
  }

  getGridOptions() {
    return {
      columns: 12,
      rows: 'auto',
      min_columns: 3,
    };
  }

  static getConfigElement() {
    return document.createElement('vertical-stack-in-card-editor');
  }

  static getStubConfig() {
    return {
      cards: [],
    };
  }
}

customElements.define('vertical-stack-in-card', VerticalStackInCard);
window.customCards = window.customCards || [];
window.customCards.push({
  type: 'vertical-stack-in-card',
  name: 'Vertical Stack In Card',
  description: 'Group multiple cards into a single sleek card.',
  preview: false,
  documentationURL: 'https://github.com/ofekashery/vertical-stack-in-card',
});
