class DualGaugeCard extends HTMLElement {
  set hass(hass) {
    this._hass = hass;

    if (!this.card) {
      this._createCard();
    }

    this._update();
  }

  setConfig(config) {
    if (!config.inner|| !config.inner.entity) {
      throw new Error('You need to define an entity for the inner gauge');
    }
    if (!config.outer || !config.outer.entity) {
      throw new Error('You need to define an entity for the outer gauge');
    }
    this.config = config;

    if (!this.config.min) {
      this.config.min = 0;
    }
    if (!this.config.max) {
      this.config.max = 100;
    }

    if (!this.config.inner.min) {
      this.config.inner.min = this.config.min;
    }
    if (!this.config.inner.max) {
      this.config.inner.max = this.config.max;
    }

    if (!this.config.outer.min) {
      this.config.outer.min = this.config.min;
    }
    if (!this.config.outer.max) {
      this.config.outer.max = this.config.max;
    }

    if (!this.config.hasOwnProperty('shadeInner')) {
      this.config.shadeInner = true
    }

    if (!this.config.inner.colors) {
      this.config.inner.colors = this.config.colors;
    }
    if (!this.config.outer.colors) {
      this.config.outer.colors = this.config.colors;
    }

    if (this.config.inner.colors) {
      this.config.inner.colors.sort((a, b) => a.value < b.value ? 1 : -1);
    }
    if (this.config.outer.colors) {
      this.config.outer.colors.sort((a, b) => a.value < b.value ? 1 : -1);
    }
  }

  _update() {
    this._updateGauge('inner');
    this._updateGauge('outer');
  }

  _updateGauge(gauge) {
    const gaugeConfig = this.config[gauge];
    const value = this._getEntityStateValue(this._hass.states[gaugeConfig.entity], gaugeConfig.attribute);
    this._setCssVariable(this.nodes.content, gauge + '-angle', this._calculateRotation(value, gaugeConfig));
    this.nodes[gauge].value.innerHTML = this._formatValue(value, gaugeConfig);
    if (gaugeConfig.label) {
      this.nodes[gauge].label.innerHTML = gaugeConfig.label;
    }

    const color = this._findColor(value, gaugeConfig);
    if (color) {
      this._setCssVariable(this.nodes.content, gauge + '-color', color);
    }
  }

  _showDetails(gauge) {
    const event = new Event('hass-more-info', {
      bubbles: true,
      cancelable: false,
      composed: true
    });
    event.detail = {
      entityId: this.config[gauge].entity
    };
    this.card.dispatchEvent(event);
    return event;
  }

  _formatValue(value, gaugeConfig) {
    if (gaugeConfig.unit) {
      return value + gaugeConfig.unit;
    }

    return value;
  }

  _getEntityStateValue(entity, attribute) {
    if (!attribute) {
      return entity.state;
    }

    return entity.attributes[attribute];
  }

  _calculateRotation(value, gaugeConfig) {
    const maxTurnValue = Math.min(Math.max(value, gaugeConfig.min), gaugeConfig.max);
    return (180 + (5 * (maxTurnValue - gaugeConfig.min)) / (gaugeConfig.max - gaugeConfig.min) / 10 * 360) + 'deg';
  }

  _findColor(value, gaugeConfig) {
    if (!gaugeConfig.colors) return;

    var i = 0,
      count = gaugeConfig.colors.length - 1;
    for (; i < count; i++) {
      if (value >= gaugeConfig.colors[i].value) return gaugeConfig.colors[i].color;
    }

    return gaugeConfig.colors[count].color;
  }

  _createCard() {
    if (this.card) {
      this.card.remove();
    }

    this.card = document.createElement('ha-card');
    if (this.config.header) {
      this.card.header = this.config.header;
    }

    const content = document.createElement('div');
    this.card.appendChild(content);

    this.styles = document.createElement('style');
    this.card.appendChild(this.styles);

    this.appendChild(this.card);

    content.classList.add('gauge-dual-card');
    content.innerHTML = `
      <div class="gauge-dual">
        <div class="gauge-frame">
          <div class="gauge-background circle-container">
            <div class="circle"></div>
          </div>

          <div class="outer-gauge circle-container">
            <div class="circle"></div>
          </div>

          <div class="inner-gauge circle-container small-circle">
            <div class="circle"></div>
          </div>


          <div class="gauge-value gauge-value-outer"></div>
          <div class="gauge-label gauge-label-outer"></div>

          <div class="gauge-value gauge-value-inner"></div>
          <div class="gauge-label gauge-label-inner"></div>

          <div class="gauge-title"></div>

        </div>
      </div>
    `;

    this.nodes = {
      content: content,
      title: content.querySelector('.gauge-title'),
      outer: {
        value: content.querySelector('.gauge-value-outer'),
        label: content.querySelector('.gauge-label-outer'),
      },
      inner: {
        value: content.querySelector('.gauge-value-inner'),
        label: content.querySelector('.gauge-label-inner'),
      }
    };

    if (this.config.title) {
      this.nodes.title.innerHTML = this.config.title;
      this.nodes.title.addEventListener('click', event => {
        this._showDetails('outer');
      });
    }

    this.nodes.outer.value.addEventListener('click', event => {
      this._showDetails('outer');
    });
    this.nodes.inner.value.addEventListener('click', event => {
      this._showDetails('inner');
    });

    if (this.config.shadeInner) {
      this.nodes.content.classList.add('shadeInner');
    }

    if (this.config.cardwidth) {
      this._setCssVariable(this.nodes.content, 'gauge-card-width', this.config.cardwidth + 'px');
    }

    if (this.config.background_color) {
      this._setCssVariable(this.nodes.content, 'gauge-background-color', this.config.background_color);
    }

    this._initStyles();
  }

  _setCssVariable(node, variable, value) {
    node.style.setProperty('--' + variable, value);
  }

  _initStyles() {
    this.styles.innerHTML = `
      .gauge-dual-card {
        --gauge-card-width:300px;
        --outer-value: 50;
        --inner-value: 50;
        --outer-color: var(--primary-color);
        --inner-color: var(--primary-color);
        --gauge-background-color: var(--secondary-background-color);

        --outer-angle: 90deg;
        --inner-angle: 90deg;
        --gauge-width: calc(var(--gauge-card-width) / 10.5);
        --value-font-size: calc(var(--gauge-card-width) / 17);
        --title-font-size: calc(var(--gauge-card-width) / 14);
        --label-font-size: calc(var(--gauge-card-width) / 20);

        width: var(--gauge-card-width);
        padding: 16px;
        box-sizing:border-box;
        margin: 6px auto;
      }

      .gauge-dual-card div {
        box-sizing:border-box
      }
      .gauge-dual {
        overflow: hidden;
        width: 100%;
        height: 0;
        padding-bottom: 50%;
      }

      .gauge-frame {
        width: 100%;
        height: 0;
        padding-bottom:100%;
        position: relative;
      }

      .circle {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 200%;
        border-radius: 100%;
        border: var(--gauge-width) solid;
        transition: border-color .5s linear;
      }

      .circle-container {
        position: absolute;
        transform-origin: 50% 100%;
        top: 0;
        left: 0;
        height: 50%;
        width: 100%;
        overflow: hidden;
        transition: transform .5s linear;
      }

      .small-circle .circle {
        top: 20%;
        left: 10%;
        width: 80%;
        height: 160%;
      }

      .gauge-background .circle {
        border: calc(var(--gauge-width) * 2 - 2px) solid var(--gauge-background-color);
      }

      .gauge-title {
        position: absolute;
        bottom: 51%;
        margin-bottom: 0.1em;
        text-align: center;
        width: 100%;
        font-size: var(--title-font-size);
      }

      .gauge-value, .gauge-label {
        position: absolute;
        bottom: 50%;
        width: 81%;
        text-align: center;
      }

      .gauge-value {
        margin-bottom:15%;
        font-size: var(--value-font-size);
        font-weight: bold;
      }

      .gauge-label {
        font-size: var(--label-font-size);
        margin-bottom:10%;
      }

      .gauge-value-outer, .gauge-label-outer {
        color: var(--outer-color);
      }


      .gauge-value-inner, .gauge-label-inner {
        right: 0;
        color: var(--inner-color);
      }


      .outer-gauge {
        transform: rotate(var(--outer-angle));
      }

      .outer-gauge .circle {
        border-color: var(--outer-color);
      }


      .inner-gauge {
        transform: rotate(var(--inner-angle));
      }

      .inner-gauge .circle {
        border-color: var(--inner-color);
      }

      .shadeInner .gauge-value-inner, .shadeInner .gauge-label-inner, .shadeInner .inner-gauge .circle   {
        filter: brightness(75%);
      }

    `;
  }
}

customElements.define('dual-gauge-card', DualGaugeCard);
