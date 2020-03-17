!function(t){var e={};function i(o){if(e[o])return e[o].exports;var n=e[o]={i:o,l:!1,exports:{}};return t[o].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=e,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(o,n,function(e){return t[e]}.bind(null,n));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=1)}([function(t){t.exports=JSON.parse('{"name":"template-entity-row","private":true,"version":"1.1.0","description":"","scripts":{"build":"webpack","watch":"webpack --watch --mode=development","update-card-tools":"npm uninstall card-tools && npm install thomasloven/lovelace-card-tools"},"repository":{"type":"git","url":"github.com:thomasloven/lovelace-template-entity-row"},"keywords":[],"author":"Thomas Lovén","license":"MIT","devDependencies":{"webpack":"^4.41.5","webpack-cli":"^3.3.10"},"dependencies":{"card-tools":"github:thomasloven/lovelace-card-tools"}}')},function(t,e,i){"use strict";i.r(e);const o=customElements.get("home-assistant-main")?Object.getPrototypeOf(customElements.get("home-assistant-main")):Object.getPrototypeOf(customElements.get("hui-view")),n=o.prototype.html;o.prototype.css;function s(){return document.querySelector("home-assistant")?document.querySelector("home-assistant").hass:document.querySelector("hc-main")?document.querySelector("hc-main").hass:void 0}let r=function(){if(window.fully&&"function"==typeof fully.getDeviceId)return fully.getDeviceId();if(!localStorage["lovelace-player-device-id"]){const t=()=>Math.floor(1e5*(1+Math.random())).toString(16).substring(1);localStorage["lovelace-player-device-id"]=`${t()}${t()}-${t()}${t()}`}return localStorage["lovelace-player-device-id"]}();function a(t){return!!String(t).includes("{%")||(!!String(t).includes("{{")||void 0)}function c(t,e,i){t||(t=s().connection);let o={user:s().user.name,browser:r,hash:location.hash.substr(1)||" ",...i.variables},n=i.template,a=i.entity_ids;return t.subscribeMessage(t=>{let i=t.result;i=i.replace(/_\([^)]*\)/g,t=>s().localize(t.substring(2,t.length-1))||t),e(i)},{type:"render_template",template:n,variables:o,entity_ids:a})}function l(t,e={}){return customElements.whenDefined("long-press").then(()=>{document.body.querySelector("long-press").bind(t)}),customElements.whenDefined("action-handler").then(()=>{document.body.querySelector("action-handler").bind(t,e)}),t}const d=["icon","active","name","secondary","state","condition","image","entity","color"];class u extends o{static get properties(){return{hass:{},state:{}}}setConfig(t){this._config={...t},this.config=this._config,this.state={...this._config};let e=this._config.entity_ids;e||!this._config.entity||a(this._config.entity)||(e=[this._config.entity]);for(const t of d)this._config[t]&&a(this._config[t])&&c(null,e=>{this.state[t]=e,this.requestUpdate()},{template:this._config[t],variables:{config:this._config},entity_ids:e})}async firstUpdated(){const t=this.shadowRoot.querySelector("#staging hui-generic-entity-row");if(!t)return;await t.updateComplete,this._action=t._handleAction;const e={hasHold:void 0!==this._config.hold_action&&void 0!==this._config.hold_action.action,hasDoubleClick:void 0!==this._config.hold_action&&void 0!==this._config.hold_action.action};l(this.shadowRoot.querySelector("state-badge"),e),l(this.shadowRoot.querySelector(".info"),e)}_actionHandler(t){if(this._action)return this._action(t)}render(){if(void 0!==this.state.condition&&"true"!==String(this.state.condition).toLowerCase())return n``;const t=this.hass.states[this.state.entity],e=t&&JSON.parse(JSON.stringify(t))||{entity_id:"light.",attributes:{icon:"no:icon"}},i=void 0!==this.state.icon?this.state.icon||"no:icon":void 0,o=this.state.image,s=void 0!==this.state.name?this.state.name:t?t.attributes.friendly_name||t.entity_id:void 0,r=this.state.secondary,c=void 0!==this.state.state?this.state.state:e?e.state:void 0,l=void 0!==this.state.active?"true"===String(this.state.active).toLowerCase():void 0;return void 0!==l&&(e.attributes.brightness=255,e.attributes.hs_color=void 0===this.state.color||a(this.state.color)?[0,0]:JSON.parse(this.state.color)),n`
      <div id="wrapper">
        <state-badge
          .hass=${this.hass}
          .stateObj=${e}
          @action=${this._actionHandler};
          style=${void 0!==l?l?"--paper-item-icon-color: var(--paper-item-icon-active-color, #fdd835);":"--paper-item-icon-active-color: var(--paper-item-icon-color, #44739e);":""}
          .overrideIcon=${i}
          .overrideImage=${o}
          class="pointer"
        ></state-badge>
        <div
          class="info pointer"
          @action=${this._actionHandler};
        >
            ${s}
            <div class="secondary">
              ${r}
            </div>
        </div>
        <div class="state">
          ${c}
        </div>
      </div>
      <div id="staging">
        <hui-generic-entity-row
            .hass=${this.hass}
            .config=${this._config}
        >
        </hui-generic-entity-row>
      </div>
    `}static get styles(){let t=customElements.get("hui-generic-entity-row").styles;return t.cssText=t.cssText.replace(":host","#wrapper")+"\n      .state {\n        text-align: right;\n      }\n      #wrapper {\n        min-height: 40px;\n      }\n      #staging {\n        display: none;\n      }\n      ",t}}if(!customElements.get("template-entity-row")){customElements.define("template-entity-row",u);const t=i(0);console.info(`%cTEMPLATE-ENTITY-ROW ${t.version} IS INSTALLED`,"color: green; font-weight: bold","")}}]);