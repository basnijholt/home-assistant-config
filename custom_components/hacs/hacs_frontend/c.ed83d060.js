import{a as e,h as t,e as i,g as a,t as s,$ as o,j as r,R as n,w as l,r as c,n as h,m as d,L as p,N as u,o as v,b as f,aI as b,ai as m,c as k,E as g,aJ as y,aC as w,aK as x,aL as $,d as _,s as R}from"./main-bfa41146.js";import{f as z}from"./c.eedd7a8a.js";import{c as j}from"./c.4a97632a.js";import"./c.866cbf1f.js";import"./c.886b012a.js";import"./c.dc6e12fb.js";import{r as F}from"./c.6e0bb230.js";import{i as P}from"./c.21c042d4.js";import{s as I}from"./c.50ff9066.js";import"./c.d1eec9d1.js";import"./c.476721bc.js";import"./c.aa41e25c.js";import"./c.497c36cc.js";import"./c.8e28b461.js";import"./c.6fe7dd6c.js";import"./c.a7d20849.js";import"./c.48057b49.js";import"./c.cae7ccdd.js";import"./c.743a15a1.js";import"./c.70483bd2.js";e([h("ha-tab")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[i({type:Boolean,reflect:!0})],key:"active",value:()=>!1},{kind:"field",decorators:[i({type:Boolean,reflect:!0})],key:"narrow",value:()=>!1},{kind:"field",decorators:[i()],key:"name",value:void 0},{kind:"field",decorators:[a("mwc-ripple")],key:"_ripple",value:void 0},{kind:"field",decorators:[s()],key:"_shouldRenderRipple",value:()=>!1},{kind:"method",key:"render",value:function(){return o`
      <div
        tabindex="0"
        role="tab"
        aria-selected=${this.active}
        aria-label=${r(this.name)}
        @focus=${this.handleRippleFocus}
        @blur=${this.handleRippleBlur}
        @mousedown=${this.handleRippleActivate}
        @mouseup=${this.handleRippleDeactivate}
        @mouseenter=${this.handleRippleMouseEnter}
        @mouseleave=${this.handleRippleMouseLeave}
        @touchstart=${this.handleRippleActivate}
        @touchend=${this.handleRippleDeactivate}
        @touchcancel=${this.handleRippleDeactivate}
        @keydown=${this._handleKeyDown}
      >
        ${this.narrow?o`<slot name="icon"></slot>`:""}
        <span class="name">${this.name}</span>
        ${this._shouldRenderRipple?o`<mwc-ripple></mwc-ripple>`:""}
      </div>
    `}},{kind:"field",key:"_rippleHandlers",value(){return new n((()=>(this._shouldRenderRipple=!0,this._ripple)))}},{kind:"method",key:"_handleKeyDown",value:function(e){13===e.keyCode&&e.target.click()}},{kind:"method",decorators:[l({passive:!0})],key:"handleRippleActivate",value:function(e){this._rippleHandlers.startPress(e)}},{kind:"method",key:"handleRippleDeactivate",value:function(){this._rippleHandlers.endPress()}},{kind:"method",key:"handleRippleMouseEnter",value:function(){this._rippleHandlers.startHover()}},{kind:"method",key:"handleRippleMouseLeave",value:function(){this._rippleHandlers.endHover()}},{kind:"method",key:"handleRippleFocus",value:function(){this._rippleHandlers.startFocus()}},{kind:"method",key:"handleRippleBlur",value:function(){this._rippleHandlers.endFocus()}},{kind:"get",static:!0,key:"styles",value:function(){return c`
      div {
        padding: 0 32px;
        display: flex;
        flex-direction: column;
        text-align: center;
        box-sizing: border-box;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: var(--header-height);
        cursor: pointer;
        position: relative;
        outline: none;
      }

      .name {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 100%;
      }

      :host([active]) {
        color: var(--primary-color);
      }

      :host(:not([narrow])[active]) div {
        border-bottom: 2px solid var(--primary-color);
      }

      :host([narrow]) {
        min-width: 0;
        display: flex;
        justify-content: center;
        overflow: hidden;
      }

      :host([narrow]) div {
        padding: 0 4px;
      }
    `}}]}}),t),e([h("hass-tabs-subpage")],(function(e,t){class a extends t{constructor(...t){super(...t),e(this)}}return{F:a,d:[{kind:"field",decorators:[i({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[i({type:Boolean})],key:"supervisor",value:()=>!1},{kind:"field",decorators:[i({attribute:!1})],key:"localizeFunc",value:void 0},{kind:"field",decorators:[i({type:String,attribute:"back-path"})],key:"backPath",value:void 0},{kind:"field",decorators:[i()],key:"backCallback",value:void 0},{kind:"field",decorators:[i({type:Boolean,attribute:"main-page"})],key:"mainPage",value:()=>!1},{kind:"field",decorators:[i({attribute:!1})],key:"route",value:void 0},{kind:"field",decorators:[i({attribute:!1})],key:"tabs",value:void 0},{kind:"field",decorators:[i({type:Boolean,reflect:!0})],key:"narrow",value:()=>!1},{kind:"field",decorators:[i({type:Boolean,reflect:!0,attribute:"is-wide"})],key:"isWide",value:()=>!1},{kind:"field",decorators:[i({type:Boolean,reflect:!0})],key:"rtl",value:()=>!1},{kind:"field",decorators:[s()],key:"_activeTab",value:void 0},{kind:"field",decorators:[F(".content")],key:"_savedScrollPos",value:void 0},{kind:"field",key:"_getTabs",value(){return d(((e,t,i,a,s,r,n)=>{const l=e.filter((e=>(!e.component||e.core||P(this.hass,e.component))&&(!e.advancedOnly||i)));if(l.length<2){if(1===l.length){const e=l[0];return[e.translationKey?n(e.translationKey):e.name]}return[""]}return l.map((e=>o`
            <a href=${e.path}>
              <ha-tab
                .hass=${this.hass}
                .active=${e.path===(null==t?void 0:t.path)}
                .narrow=${this.narrow}
                .name=${e.translationKey?n(e.translationKey):e.name}
              >
                ${e.iconPath?o`<ha-svg-icon
                      slot="icon"
                      .path=${e.iconPath}
                    ></ha-svg-icon>`:""}
              </ha-tab>
            </a>
          `))}))}},{kind:"method",key:"willUpdate",value:function(e){if(e.has("route")&&(this._activeTab=this.tabs.find((e=>`${this.route.prefix}${this.route.path}`.includes(e.path)))),e.has("hass")){const t=e.get("hass");t&&t.language===this.hass.language||(this.rtl=j(this.hass))}p(u(a.prototype),"willUpdate",this).call(this,e)}},{kind:"method",key:"render",value:function(){var e,t;const i=this._getTabs(this.tabs,this._activeTab,null===(e=this.hass.userData)||void 0===e?void 0:e.showAdvanced,this.hass.config.components,this.hass.language,this.narrow,this.localizeFunc||this.hass.localize),a=i.length>1;return o`
      <div class="toolbar">
        ${this.mainPage||!this.backPath&&null!==(t=history.state)&&void 0!==t&&t.root?o`
              <ha-menu-button
                .hassio=${this.supervisor}
                .hass=${this.hass}
                .narrow=${this.narrow}
              ></ha-menu-button>
            `:this.backPath?o`
              <a href=${this.backPath}>
                <ha-icon-button-arrow-prev
                  .hass=${this.hass}
                ></ha-icon-button-arrow-prev>
              </a>
            `:o`
              <ha-icon-button-arrow-prev
                .hass=${this.hass}
                @click=${this._backTapped}
              ></ha-icon-button-arrow-prev>
            `}
        ${this.narrow||!a?o`<div class="main-title">
              <slot name="header">${a?"":i[0]}</slot>
            </div>`:""}
        ${a?o`
              <div id="tabbar" class=${v({"bottom-bar":this.narrow})}>
                ${i}
              </div>
            `:""}
        <div id="toolbar-icon">
          <slot name="toolbar-icon"></slot>
        </div>
      </div>
      <div
        class="content ${v({tabs:a})}"
        @scroll=${this._saveScrollPos}
      >
        <slot></slot>
      </div>
      <div id="fab" class=${v({tabs:a})}>
        <slot name="fab"></slot>
      </div>
    `}},{kind:"method",decorators:[l({passive:!0})],key:"_saveScrollPos",value:function(e){this._savedScrollPos=e.target.scrollTop}},{kind:"method",key:"_backTapped",value:function(){this.backCallback?this.backCallback():history.back()}},{kind:"get",static:!0,key:"styles",value:function(){return c`
      :host {
        display: block;
        height: 100%;
        background-color: var(--primary-background-color);
      }

      :host([narrow]) {
        width: 100%;
        position: fixed;
      }

      ha-menu-button {
        margin-right: 24px;
      }

      .toolbar {
        display: flex;
        align-items: center;
        font-size: 20px;
        height: var(--header-height);
        background-color: var(--sidebar-background-color);
        font-weight: 400;
        border-bottom: 1px solid var(--divider-color);
        padding: 0 16px;
        box-sizing: border-box;
      }
      .toolbar a {
        color: var(--sidebar-text-color);
        text-decoration: none;
      }
      .bottom-bar a {
        width: 25%;
      }

      #tabbar {
        display: flex;
        font-size: 14px;
        overflow: hidden;
      }

      #tabbar > a {
        overflow: hidden;
        max-width: 45%;
      }

      #tabbar.bottom-bar {
        position: absolute;
        bottom: 0;
        left: 0;
        padding: 0 16px;
        box-sizing: border-box;
        background-color: var(--sidebar-background-color);
        border-top: 1px solid var(--divider-color);
        justify-content: space-around;
        z-index: 2;
        font-size: 12px;
        width: 100%;
        padding-bottom: env(safe-area-inset-bottom);
      }

      #tabbar:not(.bottom-bar) {
        flex: 1;
        justify-content: center;
      }

      :host(:not([narrow])) #toolbar-icon {
        min-width: 40px;
      }

      ha-menu-button,
      ha-icon-button-arrow-prev,
      ::slotted([slot="toolbar-icon"]) {
        display: flex;
        flex-shrink: 0;
        pointer-events: auto;
        color: var(--sidebar-icon-color);
      }

      .main-title {
        flex: 1;
        max-height: var(--header-height);
        line-height: 20px;
        color: var(--sidebar-text-color);
        margin: var(--main-title-margin, 0 0 0 24px);
      }

      .content {
        position: relative;
        width: calc(
          100% - env(safe-area-inset-left) - env(safe-area-inset-right)
        );
        margin-left: env(safe-area-inset-left);
        margin-right: env(safe-area-inset-right);
        height: calc(100% - 1px - var(--header-height));
        height: calc(
          100% - 1px - var(--header-height) - env(safe-area-inset-bottom)
        );
        overflow: auto;
        -webkit-overflow-scrolling: touch;
      }

      :host([narrow]) .content.tabs {
        height: calc(100% - 2 * var(--header-height));
        height: calc(
          100% - 2 * var(--header-height) - env(safe-area-inset-bottom)
        );
      }

      #fab {
        position: fixed;
        right: calc(16px + env(safe-area-inset-right));
        bottom: calc(16px + env(safe-area-inset-bottom));
        z-index: 1;
      }
      :host([narrow]) #fab.tabs {
        bottom: calc(84px + env(safe-area-inset-bottom));
      }
      #fab[is-wide] {
        bottom: 24px;
        right: 24px;
      }
      :host([rtl]) #fab {
        right: auto;
        left: calc(16px + env(safe-area-inset-left));
      }
      :host([rtl][is-wide]) #fab {
        bottom: 24px;
        left: 24px;
        right: auto;
      }
    `}}]}}),t);let E=e([h("hacs-store-panel")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[i({attribute:!1})],key:"filters",value:()=>({})},{kind:"field",decorators:[i({attribute:!1})],key:"hacs",value:void 0},{kind:"field",decorators:[i()],key:"_searchInput",value:()=>""},{kind:"field",decorators:[i({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[i({attribute:!1})],key:"narrow",value:void 0},{kind:"field",decorators:[i({attribute:!1})],key:"isWide",value:void 0},{kind:"field",decorators:[i({attribute:!1})],key:"route",value:void 0},{kind:"field",decorators:[i({attribute:!1})],key:"sections",value:void 0},{kind:"field",decorators:[i()],key:"section",value:void 0},{kind:"field",key:"_repositoriesInActiveSection",value(){return d(((e,t)=>[(null==e?void 0:e.filter((e=>{var i,a,s;return(null===(i=this.hacs.sections)||void 0===i||null===(a=i.find((e=>e.id===t)))||void 0===a||null===(s=a.categories)||void 0===s?void 0:s.includes(e.category))&&e.installed})))||[],(null==e?void 0:e.filter((e=>{var i,a,s;return(null===(i=this.hacs.sections)||void 0===i||null===(a=i.find((e=>e.id===t)))||void 0===a||null===(s=a.categories)||void 0===s?void 0:s.includes(e.category))&&e.new&&!e.installed})))||[]]))}},{kind:"get",key:"allRepositories",value:function(){const[e,t]=this._repositoriesInActiveSection(this.hacs.repositories,this.section);return t.concat(e)}},{kind:"field",key:"_filterRepositories",value:()=>d(z)},{kind:"get",key:"visibleRepositories",value:function(){const e=this.allRepositories.filter((e=>{var t,i;return null===(t=this.filters[this.section])||void 0===t||null===(i=t.find((t=>t.id===e.category)))||void 0===i?void 0:i.checked}));return this._filterRepositories(e,this._searchInput)}},{kind:"method",key:"firstUpdated",value:async function(){this.addEventListener("filter-change",(e=>this._updateFilters(e)))}},{kind:"method",key:"_updateFilters",value:function(e){var t;const i=null===(t=this.filters[this.section])||void 0===t?void 0:t.find((t=>t.id===e.detail.id));this.filters[this.section].find((e=>e.id===i.id)).checked=!i.checked,this.requestUpdate()}},{kind:"method",key:"render",value:function(){var e;if(!this.hacs)return o``;const t=this._repositoriesInActiveSection(this.hacs.repositories,this.section)[1];if(!this.filters[this.section]&&this.hacs.info.categories){var i;const e=null===(i=f(this.hacs.language,this.route))||void 0===i?void 0:i.categories;this.filters[this.section]=[],null==e||e.filter((e=>{var t;return null===(t=this.hacs.info)||void 0===t?void 0:t.categories.includes(e)})).forEach((e=>{this.filters[this.section].push({id:e,value:e,checked:!0})}))}return o`<hass-tabs-subpage
      back-path="/hacs/entry"
      .hass=${this.hass}
      .narrow=${this.narrow}
      .route=${this.route}
      .tabs=${this.hacs.sections}
      hasFab
    >
      <ha-icon-overflow-menu
        slot="toolbar-icon"
        narrow
        .hass=${this.hass}
        .items=${[{path:b,label:this.hacs.localize("menu.documentation"),action:()=>m.open("https://hacs.xyz/","_blank","noreferrer=true")},{path:k,label:"GitHub",action:()=>m.open("https://github.com/hacs","_blank","noreferrer=true")},{path:g,label:this.hacs.localize("menu.open_issue"),action:()=>m.open("https://hacs.xyz/docs/issues","_blank","noreferrer=true")},{path:y,label:this.hacs.localize("menu.custom_repositories"),disabled:this.hacs.info.disabled_reason,action:()=>this.dispatchEvent(new CustomEvent("hacs-dialog",{detail:{type:"custom-repositories",repositories:this.hacs.repositories},bubbles:!0,composed:!0}))},{path:w,label:this.hacs.localize("menu.about"),action:()=>I(this,this.hacs)}]}
      >
      </ha-icon-overflow-menu>
      ${this.narrow?o`
            <search-input
              .hass=${this.hass}
              class="header"
              slot="header"
              .label=${this.hacs.localize("search.downloaded")}
              .filter=${this._searchInput||""}
              @value-changed=${this._inputValueChanged}
            ></search-input>
          `:o`<div class="search">
            <search-input
              .hass=${this.hass}
              .label=${0===t.length?this.hacs.localize("search.downloaded"):this.hacs.localize("search.downloaded_new")}
              .filter=${this._searchInput||""}
              @value-changed=${this._inputValueChanged}
            ></search-input>
          </div>`}
      <div class="content ${this.narrow?"narrow-content":""}">
        ${(null===(e=this.filters[this.section])||void 0===e?void 0:e.length)>1?o`<div class="filters">
              <hacs-filter
                .hacs=${this.hacs}
                .filters="${this.filters[this.section]}"
              ></hacs-filter>
            </div>`:""}
        ${null!=t&&t.length?o`<ha-alert .rtl=${j(this.hass)}>
              ${this.hacs.localize("store.new_repositories_note")}
              <mwc-button
                class="max-content"
                slot="action"
                .label=${this.hacs.localize("menu.dismiss")}
                @click=${this._clearAllNewRepositories}
              >
              </mwc-button>
            </ha-alert> `:""}
        <div class="container ${this.narrow?"narrow":""}">
          ${void 0===this.hacs.repositories?"":0===this.allRepositories.length?this._renderEmpty():0===this.visibleRepositories.length?this._renderNoResultsFound():this._renderRepositories()}
        </div>
      </div>
      <ha-fab
        slot="fab"
        .label=${this.hacs.localize("store.explore")}
        .extended=${!this.narrow}
        @click=${this._addRepository}
      >
        <ha-svg-icon slot="icon" .path=${x}></ha-svg-icon>
      </ha-fab>
    </hass-tabs-subpage>`}},{kind:"method",key:"_renderRepositories",value:function(){return this.visibleRepositories.map((e=>o`<hacs-repository-card
          .hass=${this.hass}
          .hacs=${this.hacs}
          .repository=${e}
          .narrow=${this.narrow}
          ?narrow=${this.narrow}
        ></hacs-repository-card>`))}},{kind:"method",key:"_clearAllNewRepositories",value:async function(){var e;await $(this.hass,{categories:(null===(e=f(this.hacs.language,this.route))||void 0===e?void 0:e.categories)||[]})}},{kind:"method",key:"_renderNoResultsFound",value:function(){return o`<ha-alert
      .rtl=${j(this.hass)}
      alert-type="warning"
      .title="${this.hacs.localize("store.no_repositories")} 😕"
    >
      ${this.hacs.localize("store.no_repositories_found_desc1",{searchInput:this._searchInput})}
      <br />
      ${this.hacs.localize("store.no_repositories_found_desc2")}
    </ha-alert>`}},{kind:"method",key:"_renderEmpty",value:function(){return o`<ha-alert
      .title="${this.hacs.localize("store.no_repositories")} 😕"
      .rtl=${j(this.hass)}
    >
      ${this.hacs.localize("store.no_repositories_desc1")}
      <br />
      ${this.hacs.localize("store.no_repositories_desc2")}
    </ha-alert>`}},{kind:"method",key:"_inputValueChanged",value:function(e){this._searchInput=e.detail.value,window.localStorage.setItem("hacs-search",this._searchInput)}},{kind:"method",key:"_addRepository",value:function(){this.dispatchEvent(new CustomEvent("hacs-dialog",{detail:{type:"add-repository",repositories:this.hacs.repositories,section:this.section},bubbles:!0,composed:!0}))}},{kind:"get",static:!0,key:"styles",value:function(){return[_,R,c`
        .filter {
          border-bottom: 1px solid var(--divider-color);
        }
        .content {
          height: calc(100vh - 128px);
          overflow: auto;
        }
        .narrow-content {
          height: calc(100vh - 128px);
        }
        .container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(480px, 1fr));
          justify-items: center;
          grid-gap: 8px 8px;
          padding: 8px 16px 16px;
          margin-bottom: 64px;
        }
        ha-svg-icon {
          color: var(--hcv-text-color-on-background);
        }
        hacs-repository-card {
          max-width: 500px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        hacs-repository-card[narrow] {
          width: 100%;
        }
        hacs-repository-card[narrow]:last-of-type {
          margin-bottom: 64px;
        }
        ha-alert {
          color: var(--hcv-text-color-primary);
          display: block;
          margin-top: -4px;
        }
        .narrow {
          width: 100%;
          display: block;
          padding: 0px;
          margin: 0;
        }
        search-input {
          display: block;
        }

        search-input.header {
          padding: 0;
        }

        .bottom-bar {
          position: fixed !important;
        }
        .max-content {
          width: max-content;
        }
      `]}}]}}),t);export{E as HacsStorePanel};
