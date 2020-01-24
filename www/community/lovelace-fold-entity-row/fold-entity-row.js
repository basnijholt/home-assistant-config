!function(t){var e={};function o(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=0)}([function(t,e,o){"use strict";o.r(e);const n=customElements.get("home-assistant-main")?Object.getPrototypeOf(customElements.get("home-assistant-main")):Object.getPrototypeOf(customElements.get("hui-view")),i=n.prototype.html,r=n.prototype.css;function s(){return document.querySelector("hc-main")?document.querySelector("hc-main").hass:document.querySelector("home-assistant")?document.querySelector("home-assistant").hass:void 0}function a(t,e,o=null){if((t=new Event(t,{bubbles:!0,cancelable:!1,composed:!0})).detail=e||{},o)o.dispatchEvent(t);else{var n=function(){var t=document.querySelector("hc-main");return t=t?(t=(t=(t=t&&t.shadowRoot)&&t.querySelector("hc-lovelace"))&&t.shadowRoot)&&t.querySelector("hui-view"):(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=document.querySelector("home-assistant"))&&t.shadowRoot)&&t.querySelector("home-assistant-main"))&&t.shadowRoot)&&t.querySelector("app-drawer-layout partial-panel-resolver"))&&t.shadowRoot||t)&&t.querySelector("ha-panel-lovelace"))&&t.shadowRoot)&&t.querySelector("hui-root"))&&t.shadowRoot)&&t.querySelector("ha-app-layout #view"))&&t.firstElementChild}();n&&n.dispatchEvent(t)}}const c=["input_number","input_select","input_text","scene","weblink"];function l(t,e){const o=document.createElement("hui-error-card");return o.setConfig({type:"error",error:t,origConfig:e}),o}function u(t,e){if(!e||"object"!=typeof e||!e.type)return l(`No ${t} type configured`,e);let o=e.type;if(o=o.startsWith("custom:")?o.substr("custom:".length):`hui-${o}-${t}`,customElements.get(o))return function(t,e){const o=document.createElement(t);try{o.setConfig(e)}catch(t){return l(t,e)}return o}(o,e);const n=l(`Custom element doesn't exist: ${o}.`,e);n.style.display="None";const i=setTimeout(()=>{n.style.display=""},2e3);return customElements.whenDefined(o).then(()=>{clearTimeout(i),a("ll-rebuild",{},n)}),n}function d(t){const e=new Set(["call-service","divider","section","weblink"]);if(!t)return l("Invalid configuration given.",t);if("string"==typeof t&&(t={entity:t}),"object"!=typeof t||!t.entity&&!t.type)return l("Invalid configuration given.",t);const o=t.type||"default";if(e.has(o)||o.startsWith("custom:"))return u("row",t);const n=t.entity.split(".",1)[0];return Object.assign(t,{type:{alert:"toggle",automation:"toggle",climate:"climate",cover:"cover",fan:"toggle",group:"group",input_boolean:"toggle",input_number:"input-number",input_select:"input-select",input_text:"input-text",light:"toggle",lock:"lock",media_player:"media-player",remote:"toggle",scene:"scene",script:"script",sensor:"sensor",timer:"timer",switch:"toggle",vacuum:"toggle",water_heater:"climate",input_datetime:"input-datetime"}[n]||"text"}),u("entity-row",t)}customElements.define("fold-entity-row",class extends n{static get properties(){return{open:Boolean,rows:{}}}setConfig(t){this._config=Object.assign({},{open:!1,padding:20,group_config:{}},t),this.open=this.open||this._config.open;let e=this._config.head;this._config.entity&&(e=this._config.entity),"string"==typeof e&&(e={entity:e});let o=this._config.items;this._config.entities&&(o=this._config.entities),e.entity&&e.entity.startsWith("group.")&&!o&&(o=s().states[e.entity].attributes.entity_id);const n=t=>("string"==typeof t&&(t={entity:t}),Object.assign({},this._config.group_config,t));this.head=d(e),this.head.hass=s(),this.head.addEventListener("click",t=>{this.hasMoreInfo(e)||e.tap_action||this.toggle(t)}),this.head.setAttribute("head","head"),this.applyStyle(this.head,e),this.rows=o.map(t=>{const e=d(n(t));return e.hass=s(),this.hasMoreInfo(t)&&e.classList.add("state-card-dialog"),this.applyStyle(e,n(t)),e})}async applyStyle(t,e){if(!e.style)return;await customElements.whenDefined("card-mod"),t.updateComplete&&await t.updateComplete;const o=document.createElement("card-mod");o.template={template:e.style,variables:{config:e},entity_ids:e.entity_ids},t.shadowRoot.appendChild(o)}toggle(t){t&&t.stopPropagation(),this.open=!this.open}hasMoreInfo(t){const e=t.entity||("string"==typeof t?t:null);return!(!e||c.includes(e.split(".",1)[0]))}firstUpdated(){const t=this.head;t.updateComplete.then(()=>{"HUI-SECTION-ROW"===t.tagName&&t.updateComplete.then(()=>{t.shadowRoot.querySelector(".divider").style.marginRight="-56px"})})}set hass(t){this.rows.forEach(e=>e.hass=t),this.head.hass=t}render(){return i`
    <div id="head" ?open=${this.open}>
      ${this.head}
      <ha-icon
        @click=${this.toggle}
        icon=${this.open?"mdi:chevron-up":"mdi:chevron-down"}
      ></ha-icon>
    </div>

    <div id="items"
      ?open=${this.open}
      style=
        ${this._config.padding?`padding-left: ${this._config.padding}px;`:""}
    >
      ${this.rows}
    </div>
    `}static get styles(){return r`
      #head {
        --toggle-icon-width: 40px;
        display: flex;
        cursor: pointer;
        align-items: center;
      }
      #head :not(ha-icon) {
        flex-grow: 1;
        max-width: calc(100% - var(--toggle-icon-width));
      }
      #head ha-icon {
        width: var(--toggle-icon-width);
        cursor: pointer
      }

      #items {
        padding: 0;
        margin: 0;
        overflow: hidden;
        max-height: 0;
      }
      #items[open] {
        overflow: visible;
        max-height: none;
      }
      .state-card-dialog {
        cursor: pointer;
      }
    `}})}]);