!function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);const i=customElements.get("home-assistant-main")?Object.getPrototypeOf(customElements.get("home-assistant-main")):Object.getPrototypeOf(customElements.get("hui-view")),o=i.prototype.html,s=i.prototype.css;function r(){return document.querySelector("home-assistant").hass}const a=["input_number","input_select","input_text","scene","weblink"];function c(t,e){const n=document.createElement("hui-error-card");return n.setConfig({type:"error",error:t,origConfig:e}),n}function l(t,e){if(!e||"object"!=typeof e||!e.type)return c(`No ${t} type configured`,e);let n=e.type;if(n=n.startsWith("custom:")?n.substr("custom:".length):`hui-${n}-${t}`,customElements.get(n))return function(t,e){const n=document.createElement(t);try{n.setConfig(e)}catch(t){return c(t,e)}return n}(n,e);const i=c(`Custom element doesn't exist: ${n}.`,e);i.style.display="None";const o=setTimeout(()=>{i.style.display=""},2e3);return customElements.whenDefined(n).then(()=>{clearTimeout(o),function(t,e,n=null){if((t=new Event(t,{bubbles:!0,cancelable:!1,composed:!0})).detail=e||{},n)n.dispatchEvent(t);else{var i=document.querySelector("home-assistant");(i=(i=(i=(i=(i=(i=(i=(i=(i=(i=(i=i&&i.shadowRoot)&&i.querySelector("home-assistant-main"))&&i.shadowRoot)&&i.querySelector("app-drawer-layout partial-panel-resolver"))&&i.shadowRoot||i)&&i.querySelector("ha-panel-lovelace"))&&i.shadowRoot)&&i.querySelector("hui-root"))&&i.shadowRoot)&&i.querySelector("ha-app-layout #view"))&&i.firstElementChild)&&i.dispatchEvent(t)}}("ll-rebuild",{},i)}),i}function u(t){const e=new Set(["call-service","divider","section","weblink"]);if(!t)return c("Invalid configuration given.",t);if("string"==typeof t&&(t={entity:t}),"object"!=typeof t||!t.entity&&!t.type)return c("Invalid configuration given.",t);const n=t.type||"default";if(e.has(n)||n.startsWith("custom:"))return l("row",t);const i=t.entity.split(".",1)[0];return Object.assign(t,{type:{alert:"toggle",automation:"toggle",climate:"climate",cover:"cover",fan:"toggle",group:"group",input_boolean:"toggle",input_number:"input-number",input_select:"input-select",input_text:"input-text",light:"toggle",lock:"lock",media_player:"media-player",remote:"toggle",scene:"scene",script:"script",sensor:"sensor",timer:"timer",switch:"toggle",vacuum:"toggle",water_heater:"climate",input_datetime:"input-datetime"}[i]||"text"}),l("entity-row",t)}customElements.define("fold-entity-row",class extends i{static get properties(){return{open:Boolean,items:{}}}setConfig(t){this._config=Object.assign({},{open:!1,padding:20,group_config:{}},t),this.open=this.open||this._config.open;let e=this._config.head;this._config.entity&&(e=this._config.entity),"string"==typeof e&&(e={entity:e});let n=this._config.items;this._config.entities&&(n=this._config.entities),e.entity&&e.entity.startsWith("group.")&&!n&&(n=r().states[e.entity].attributes.entity_id);const i=t=>("string"==typeof t&&(t={entity:t}),Object.assign({},this._config.group_config,t));this.head=u(e),this.head.hass=r(),this.head.addEventListener("click",t=>{this.hasMoreInfo(e)||e.tap_action||this.toggle(t)}),this.head.setAttribute("head","head"),this.applyStyle(this.head,e),this.rows=n.map(t=>{const e=u(i(t));return e.hass=r(),this.hasMoreInfo(t)&&e.classList.add("state-card-dialog"),this.applyStyle(e,i(t)),e})}async applyStyle(t,e){if(!e.style)return;await customElements.whenDefined("card-mod"),t.updateComplete&&await t.updateComplete;const n=document.createElement("card-mod");n.template={template:e.style,variables:{config:e},entity_ids:e.entity_ids},t.shadowRoot.appendChild(n)}toggle(t){t&&t.stopPropagation(),this.open=!this.open}hasMoreInfo(t){const e=t.entity||("string"==typeof t?t:null);return!(!e||a.includes(e.split(".",1)[0]))}firstUpdated(){const t=this.head;t.updateComplete.then(()=>{"HUI-SECTION-ROW"===t.tagName&&t.updateComplete.then(()=>{t.shadowRoot.querySelector(".divider").style.marginRight="-56px"})})}set hass(t){this.rows.forEach(e=>e.hass=t),this.head.hass=t}render(){return o`
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
    `}static get styles(){return s`
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