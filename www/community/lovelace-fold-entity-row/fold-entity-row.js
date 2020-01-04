!function(t){var e={};function i(n){if(e[n])return e[n].exports;var s=e[n]={i:n,l:!1,exports:{}};return t[n].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(n,s,function(e){return t[e]}.bind(null,s));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=0)}([function(t,e,i){"use strict";i.r(e);const n=customElements.get("home-assistant-main")?Object.getPrototypeOf(customElements.get("home-assistant-main")):Object.getPrototypeOf(customElements.get("hui-view")),s=n.prototype.html,o=n.prototype.css;function r(){return document.querySelector("home-assistant").hass}const a="custom:",c=["input_number","input_select","input_text","scene","weblink"];function l(t,e){const i=document.createElement("hui-error-card");return i.setConfig({type:"error",error:t,config:e}),i}function h(t,e){if(!e||"object"!=typeof e||!e.type)return l(`No ${t} type configured`,e);let i=e.type;if(i=i.startsWith(a)?i.substr(a.length):`hui-${i}-${t}`,customElements.get(i))return function(t,e){const i=document.createElement(t);try{i.setConfig(e)}catch(t){return l(t,e)}return i}(i,e);const n=l(`Custom element doesn't exist: ${i}.`,e);n.style.display="None";const s=setTimeout(()=>{n.style.display=""},2e3);return customElements.whenDefined(i).then(()=>{clearTimeout(s),function(t,e,i=null){if((t=new Event(t,{bubbles:!0,cancelable:!1,composed:!0})).detail=e||{},i)i.dispatchEvent(t);else{var n=document.querySelector("home-assistant");(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=n&&n.shadowRoot)&&n.querySelector("home-assistant-main"))&&n.shadowRoot)&&n.querySelector("app-drawer-layout partial-panel-resolver"))&&n.shadowRoot||n)&&n.querySelector("ha-panel-lovelace"))&&n.shadowRoot)&&n.querySelector("hui-root"))&&n.shadowRoot)&&n.querySelector("ha-app-layout #view"))&&n.firstElementChild)&&n.dispatchEvent(t)}}("ll-rebuild",{},n)}),n}class u extends n{static get properties(){return{hass:{},config:{},noHass:{type:Boolean}}}setConfig(t){var e;this._config=t,this.el?this.el.setConfig(t):this.el=this.create(t),this._hass&&(this.el.hass=this._hass),this.noHass&&(e=this,document.querySelector("home-assistant").provideHass(e))}set config(t){this.setConfig(t)}set hass(t){this._hass=t,this.el&&(this.el.hass=t)}createRenderRoot(){return this}render(){return s`${this.el}`}}if(!customElements.get("card-maker")){class t extends u{create(t){return function(t){return h("card",t)}(t)}getCardSize(){return this.firstElementChild&&this.firstElementChild.getCardSize?this.firstElementChild.getCardSize():1}}customElements.define("card-maker",t)}if(!customElements.get("element-maker")){class t extends u{create(t){return function(t){return h("element",t)}(t)}}customElements.define("element-maker",t)}if(!customElements.get("entity-row-maker")){class t extends u{create(t){return function(t){const e=new Set(["call-service","divider","section","weblink"]);if(!t)return l("Invalid configuration given.",t);if("string"==typeof t&&(t={entity:t}),"object"!=typeof t||!t.entity&&!t.type)return l("Invalid configuration given.",t);const i=t.type||"default";if(e.has(i)||i.startsWith(a))return h("row",t);const n=t.entity.split(".",1)[0];return Object.assign(t,{type:{alert:"toggle",automation:"toggle",climate:"climate",cover:"cover",fan:"toggle",group:"group",input_boolean:"toggle",input_number:"input-number",input_select:"input-select",input_text:"input-text",light:"toggle",lock:"lock",media_player:"media-player",remote:"toggle",scene:"scene",script:"script",sensor:"sensor",timer:"timer",switch:"toggle",vacuum:"toggle",water_heater:"climate",input_datetime:"input-datetime"}[n]||"text"}),h("entity-row",t)}(t)}}customElements.define("entity-row-maker",t)}customElements.define("fold-entity-row",class extends n{static get properties(){return{_hass:{},open:Boolean,items:{}}}setConfig(t){this._config=Object.assign({},{open:!1,padding:20,group_config:{}},t),this.open=this.open||this._config.open,this.head=this._config.head,this._config.entity&&(this.head=this._config.entity),"string"==typeof this.head&&(this.head={entity:this.head}),this.items=this._config.items,this._config.entities&&(this.items=this._config.entities),this.head.entity&&this.head.entity.startsWith("group.")&&!this.items&&(this.items=r().states[this.head.entity].attributes.entity_id)}clickRow(t){t.stopPropagation();const e=t.target.parentElement._config;this.hasMoreInfo(e)||e.tap_action?customElements.get("hui-entities-card").prototype._handleClick.bind(this)(e):t.target.parentElement.hasAttribute("head")&&this.toggle(t)}toggle(t){t&&t.stopPropagation(),this.open=!this.open}hasMoreInfo(t){const e=t.entity||("string"==typeof t?t:null);return!(!e||c.includes(e.split(".",1)[0]))}firstUpdated(){const t=this.shadowRoot.querySelector("#head > entity-row-maker");t.updateComplete.then(()=>{const e=t.querySelector("hui-section-row");e&&e.updateComplete.then(()=>{e.shadowRoot.querySelector(".divider").style.marginRight="-56px"})})}set hass(t){this._hass=t}render(){this._entities&&this._entities.forEach(t=>t.hass=this._hass);const t=t=>("string"==typeof t&&(t={entity:t}),Object.assign({},this._config.group_config,t));return s`
    <div id="head" ?open=${this.open}>
      <entity-row-maker
        .config=${this.head}
        .hass=${this._hass}
        @click=${this.clickRow}
        head
      ></entity-row-maker>
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
      ${this.items.map(e=>s`
        <entity-row-maker
          .config=${t(e)}
          .hass=${this._hass}
          @click=${this.clickRow}
          class=${this.hasMoreInfo(e)?"state-card-dialog":""}
        ></entity-row-maker>
      `)}
    </div>
    `}static get styles(){return o`
      #head {
        --toggle-icon-width: 40px;
        display: flex;
        cursor: pointer;
        align-items: center;
      }
      #head entity-row-maker {
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