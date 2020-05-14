!function(e){var t={};function o(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=1)}([function(e){e.exports=JSON.parse('{"name":"fold-entity-row","private":true,"version":"1.0.2","description":"","scripts":{"build":"webpack","watch":"webpack --watch --mode=development","update-card-tools":"npm uninstall card-tools && npm install thomasloven/lovelace-card-tools"},"keywords":[],"author":"Thomas Lovén","license":"MIT","devDependencies":{"webpack":"^4.42.0","webpack-cli":"^3.3.11"},"dependencies":{"card-tools":"github:thomasloven/lovelace-card-tools"}}')},function(e,t,o){"use strict";o.r(t);const n=customElements.get("home-assistant-main")?Object.getPrototypeOf(customElements.get("home-assistant-main")):Object.getPrototypeOf(customElements.get("hui-view")),i=n.prototype.html,s=n.prototype.css;function r(){return document.querySelector("hc-main")?document.querySelector("hc-main").hass:document.querySelector("home-assistant")?document.querySelector("home-assistant").hass:void 0}function a(e,t,o=null){if((e=new Event(e,{bubbles:!0,cancelable:!1,composed:!0})).detail=t||{},o)o.dispatchEvent(e);else{var n=function(){var e=document.querySelector("hc-main");return e=e?(e=(e=(e=e&&e.shadowRoot)&&e.querySelector("hc-lovelace"))&&e.shadowRoot)&&e.querySelector("hui-view")||e.querySelector("hui-panel-view"):(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=document.querySelector("home-assistant"))&&e.shadowRoot)&&e.querySelector("home-assistant-main"))&&e.shadowRoot)&&e.querySelector("app-drawer-layout partial-panel-resolver"))&&e.shadowRoot||e)&&e.querySelector("ha-panel-lovelace"))&&e.shadowRoot)&&e.querySelector("hui-root"))&&e.shadowRoot)&&e.querySelector("ha-app-layout #view"))&&e.firstElementChild}();n&&n.dispatchEvent(e)}}const c=["input_number","input_select","input_text","scene","weblink"];let l=window.cardHelpers;const d=new Promise(async(e,t)=>{l&&e();const o=async()=>{l=await window.loadCardHelpers(),window.cardHelpers=l,e()};window.loadCardHelpers?o():window.addEventListener("load",async()=>{!function(){if(customElements.get("hui-view"))return!0;const e=document.createElement("partial-panel-resolver");if(e.hass=r(),!e.hass||!e.hass.panels)return!1;e.route={path:"/lovelace/"},e._updateRoutes();try{document.querySelector("home-assistant").appendChild(e)}catch(e){}finally{document.querySelector("home-assistant").removeChild(e)}customElements.get("hui-view")}(),window.loadCardHelpers&&o()})});function u(e,t){const o=document.createElement("hui-error-card");return customElements.whenDefined("hui-error-card").then(()=>{o.setConfig({type:"error",error:e,origConfig:t})}),d.then(()=>{a("ll-rebuild",{},o)}),o}function h(e,t){if(!t||"object"!=typeof t||!t.type)return u(`No ${e} type configured`,t);let o=t.type;if(o=o.startsWith("custom:")?o.substr("custom:".length):`hui-${o}-${e}`,customElements.get(o))return function(e,t){let o=document.createElement(e);try{o.setConfig(JSON.parse(JSON.stringify(t)))}catch(e){o=u(e,t)}return d.then(()=>{a("ll-rebuild",{},o)}),o}(o,t);const n=u(`Custom element doesn't exist: ${o}.`,t);n.style.display="None";const i=setTimeout(()=>{n.style.display=""},2e3);return customElements.whenDefined(o).then(()=>{clearTimeout(i),a("ll-rebuild",{},n)}),n}function p(e){if(l)return l.createRowElement(e);const t=new Set(["call-service","cast","conditional","divider","section","select","weblink"]);if(!e)return u("Invalid configuration given.",e);if("string"==typeof e&&(e={entity:e}),"object"!=typeof e||!e.entity&&!e.type)return u("Invalid configuration given.",e);const o=e.type||"default";return t.has(o)||o.startsWith("custom:")?h("row",e):h("entity-row",{type:{alert:"toggle",automation:"toggle",climate:"climate",cover:"cover",fan:"toggle",group:"group",input_boolean:"toggle",input_number:"input-number",input_select:"input-select",input_text:"input-text",light:"toggle",lock:"lock",media_player:"media-player",remote:"toggle",scene:"scene",script:"script",sensor:"sensor",timer:"timer",switch:"toggle",vacuum:"toggle",water_heater:"climate",input_datetime:"input-datetime"}[e.entity.split(".",1)[0]]||"text",...e})}class m extends n{static get properties(){return{open:Boolean,rows:{}}}setConfig(e){this._config=Object.assign({},{open:!1,padding:20,group_config:{}},e),this.open=this.open||this._config.open;let t=this._config.head;this._config.entity&&(t=this._config.entity),"string"==typeof t&&(t={entity:t});let o=this._config.items;this._config.entities&&(o=this._config.entities),t.entity&&t.entity.startsWith("group.")&&!o&&(o=r().states[t.entity].attributes.entity_id);const n=e=>("string"==typeof e&&(e={entity:e}),Object.assign({},this._config.group_config,e));this.head=p(t),this.head.hass=r(),this.head.addEventListener("click",e=>{this.hasMoreInfo(t)||t.tap_action||this.toggle(e)}),this.head.setAttribute("head","head"),this.applyStyle(this.head,t),"HUI-SECTION-ROW"===this.head.tagName&&customElements.whenDefined(this.head.localName).then(async()=>{await this.updateComplete,await this.head.updateComplete,this.head.shadowRoot.querySelector(".divider").style.marginRight="-56px"}),this.rows=o.map(e=>{const t=p(n(e));return t.hass=r(),this.hasMoreInfo(e)&&t.classList.add("state-card-dialog"),this.applyStyle(t,n(e)),t})}async applyStyle(e,t){if(!t.style)return;e.updateComplete&&await e.updateComplete;const o=document.createElement("card-mod");o.template={template:t.style,variables:{config:t},entity_ids:t.entity_ids},e.shadowRoot.appendChild(o)}toggle(e){e&&e.stopPropagation(),this.open=!this.open}hasMoreInfo(e){const t=e.entity||("string"==typeof e?e:null);return!(!t||c.includes(t.split(".",1)[0]))}set hass(e){this.rows.forEach(t=>t.hass=e),this.head.hass=e}render(){return i`
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
    `}}if(!customElements.get("fold-entity-row")){customElements.define("fold-entity-row",m);const e=o(0);console.info(`%cFOLD-ENTITY-ROW ${e.version} IS INSTALLED`,"color: green; font-weight: bold","")}}]);