!function(t){var e={};function i(o){if(e[o])return e[o].exports;var n=e[o]={i:o,l:!1,exports:{}};return t[o].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=e,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(o,n,function(e){return t[e]}.bind(null,n));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=1)}([function(t){t.exports=JSON.parse('{"name":"template-entity-row","private":true,"version":"1.1.2","description":"","scripts":{"build":"webpack","watch":"webpack --watch --mode=development","update-card-tools":"npm uninstall card-tools && npm install thomasloven/lovelace-card-tools"},"repository":{"type":"git","url":"github.com:thomasloven/lovelace-template-entity-row"},"keywords":[],"author":"Thomas Lovén","license":"MIT","devDependencies":{"webpack":"^4.44.2","webpack-cli":"^3.3.12"},"dependencies":{"card-tools":"github:thomasloven/lovelace-card-tools"}}')},function(t,e,i){"use strict";i.r(e);const o=customElements.get("home-assistant-main")?Object.getPrototypeOf(customElements.get("home-assistant-main")):Object.getPrototypeOf(customElements.get("hui-view")),n=o.prototype.html,s=o.prototype.css;function a(){return document.querySelector("hc-main")?document.querySelector("hc-main").hass:document.querySelector("home-assistant")?document.querySelector("home-assistant").hass:void 0}const r="lovelace-player-device-id";function c(){if(!localStorage[r]){const t=()=>Math.floor(1e5*(1+Math.random())).toString(16).substring(1);window.fully&&"function"==typeof fully.getDeviceId?localStorage[r]=fully.getDeviceId():localStorage[r]=`${t()}${t()}-${t()}${t()}`}return localStorage[r]}let l=c();const d=new URLSearchParams(window.location.search);var u;function h(t){return!!String(t).includes("{%")||(!!String(t).includes("{{")||void 0)}function g(t,e,i,o=!0){t||(t=a().connection);let n={user:a().user.name,browser:l,hash:location.hash.substr(1)||" ",...i.variables},s=i.template,r=i.entity_ids;return t.subscribeMessage(t=>{if(o){let i=String(t.result);const o=/_\([^)]*\)/g;i=i.replace(o,t=>a().localize(t.substring(2,t.length-1))||t),e(i)}else e(t.result)},{type:"render_template",template:s,variables:n,entity_ids:r})}function p(t,e={}){return customElements.whenDefined("long-press").then(()=>{document.body.querySelector("long-press").bind(t)}),customElements.whenDefined("action-handler").then(()=>{document.body.querySelector("action-handler").bind(t,e)}),t}d.get("deviceID")&&null!==(u=d.get("deviceID"))&&("clear"===u?localStorage.removeItem(r):localStorage[r]=u,l=c());const f=["icon","active","name","secondary","state","condition","image","entity","color"];class m extends o{static get properties(){return{hass:{},state:{}}}setConfig(t){this._config={...t},this.config=this._config,this.state={...this._config};let e=this._config.entity_ids;e||!this._config.entity||h(this._config.entity)||(e=[this._config.entity]);for(const t of f)this._config[t]&&h(this._config[t])&&g(null,e=>{this.state[t]=e,this.requestUpdate()},{template:this._config[t],variables:{config:this._config},entity_ids:e})}async firstUpdated(){const t=this.shadowRoot.querySelector("#staging hui-generic-entity-row");if(!t)return;await t.updateComplete,this._action=t._handleAction;const e={hasHold:void 0!==this._config.hold_action&&void 0!==this._config.hold_action.action,hasDoubleClick:void 0!==this._config.hold_action&&void 0!==this._config.hold_action.action};p(this.shadowRoot.querySelector("state-badge"),e),p(this.shadowRoot.querySelector(".info"),e)}_actionHandler(t){if(this._action)return this._action(t)}render(){const t=this.hass.states[this.state.entity],e=t&&JSON.parse(JSON.stringify(t))||{entity_id:"light.",attributes:{icon:"no:icon"}},i=void 0!==this.state.icon?this.state.icon||"no:icon":void 0,o=this.state.image,s=void 0!==this.state.name?this.state.name:t?t.attributes.friendly_name||t.entity_id:void 0,a=this.state.secondary,r=void 0!==this.state.state?this.state.state:e?e.state:void 0,c=void 0!==this.state.active?"true"===String(this.state.active).toLowerCase():void 0;void 0!==c&&(e.attributes.brightness=255);const l=void 0!==this.state.color?this.state.color:void 0===c?void 0:c?"var(--paper-item-icon-active-color, #fdd835)":"var(--paper-item-icon-color, #44739e)";return n`
      <div
        id="wrapper"
        class="${void 0!==this.state.condition&&"true"!==String(this.state.condition).toLowerCase()?"hidden":""}"
      >
        <state-badge
          .hass=${this.hass}
          .stateObj=${e}
          @action=${this._actionHandler}
          style="${l?`--paper-item-icon-color: ${l}; --paper-item-icon-active-color: ${l};`:""}"
          .overrideIcon=${i}
          .overrideImage=${o}
          class="pointer"
        ></state-badge>
        <div class="info pointer" @action="${this._actionHandler};">
          ${s}
          <div class="secondary">${a}</div>
        </div>
        <div class="state">${r}</div>
      </div>
      <div id="staging">
        <hui-generic-entity-row .hass=${this.hass} .config=${this._config}>
        </hui-generic-entity-row>
      </div>
    `}static get styles(){return[customElements.get("hui-generic-entity-row").styles,s`
        :host {
          display: inline;
        }
        #wrapper {
          display: flex;
          align-items: center;
          flex-direction: row;
        }
        .state {
          text-align: right;
        }
        #wrapper {
          min-height: 40px;
        }
        #wrapper.hidden {
          display: none;
        }
        #staging {
          display: none;
        }
      `]}}if(!customElements.get("template-entity-row")){customElements.define("template-entity-row",m);const t=i(0);console.info(`%cTEMPLATE-ENTITY-ROW ${t.version} IS INSTALLED`,"color: green; font-weight: bold","")}}]);