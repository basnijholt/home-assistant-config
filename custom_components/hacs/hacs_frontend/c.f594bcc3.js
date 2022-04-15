import{a as e,f as t,e as i,$ as o,aN as a,r as s,n as r,p as n,t as l,q as c,R as d,E as h,m as p,P as u,Q as v,o as f,aL as b,c as y,ae as m,aO as k,aP as g,aQ as w,a2 as _,aR as x,h as $,af as z,aS as R,ad as j,am as I,ag as T,ar as C,as as F,d as E,b as P,aT as S,aU as B,aV as O,aW as A,s as H}from"./main-f3e781b1.js";import{f as D}from"./c.dee01337.js";import{a as M}from"./c.0a038163.js";import"./c.c4dc5ba3.js";import{i as N}from"./c.0083326c.js";import"./c.6f86bede.js";import"./c.c2b18de6.js";import{g as L}from"./c.7ae69098.js";import"./c.f1b17fae.js";import{s as U}from"./c.69351b0c.js";import"./c.145b2350.js";import{s as q}from"./c.ecc9713e.js";import"./c.b85cccfb.js";import"./c.3dc7ab21.js";import"./c.9f27b448.js";import"./c.ac33c45a.js";import"./c.3f18632e.js";import"./c.30e53b1f.js";e([r("ha-icon-overflow-menu")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[i({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[i({type:Array})],key:"items",value:()=>[]},{kind:"field",decorators:[i({type:Boolean})],key:"narrow",value:()=>!1},{kind:"method",key:"render",value:function(){return o`
      ${this.narrow?o` <!-- Collapsed representation for small screens -->
            <ha-button-menu
              @click=${this._handleIconOverflowMenuOpened}
              @closed=${this._handleIconOverflowMenuClosed}
              class="ha-icon-overflow-menu-overflow"
              corner="BOTTOM_START"
              absolute
            >
              <ha-icon-button
                .label=${this.hass.localize("ui.common.overflow_menu")}
                .path=${a}
                slot="trigger"
              ></ha-icon-button>

              ${this.items.map((e=>o`
                  <mwc-list-item
                    graphic="icon"
                    .disabled=${e.disabled}
                    @click=${e.action}
                  >
                    <div slot="graphic">
                      <ha-svg-icon .path=${e.path}></ha-svg-icon>
                    </div>
                    ${e.label}
                  </mwc-list-item>
                `))}
            </ha-button-menu>`:o`
            <!-- Icon representation for big screens -->
            ${this.items.map((e=>e.narrowOnly?"":o`<div>
                    ${e.tooltip?o`<paper-tooltip animation-delay="0" position="left">
                          ${e.tooltip}
                        </paper-tooltip>`:""}
                    <ha-icon-button
                      @click=${e.action}
                      .label=${e.label}
                      .path=${e.path}
                      .disabled=${e.disabled}
                    ></ha-icon-button>
                  </div> `))}
          `}
    `}},{kind:"method",key:"_handleIconOverflowMenuOpened",value:function(){const e=this.closest(".mdc-data-table__row");e&&(e.style.zIndex="1")}},{kind:"method",key:"_handleIconOverflowMenuClosed",value:function(){const e=this.closest(".mdc-data-table__row");e&&(e.style.zIndex="")}},{kind:"get",static:!0,key:"styles",value:function(){return s`
      :host {
        display: flex;
        justify-content: flex-end;
      }
    `}}]}}),t);const K=e=>t=>({kind:"method",placement:"prototype",key:t.key,descriptor:{set(e){this[`__${String(t.key)}`]=e},get(){return this[`__${String(t.key)}`]},enumerable:!0,configurable:!0},finisher(i){const o=i.prototype.connectedCallback;i.prototype.connectedCallback=function(){if(o.call(this),this[t.key]){const i=this.renderRoot.querySelector(e);if(!i)return;i.scrollTop=this[t.key]}}}});e([r("ha-tab")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[i({type:Boolean,reflect:!0})],key:"active",value:()=>!1},{kind:"field",decorators:[i({type:Boolean,reflect:!0})],key:"narrow",value:()=>!1},{kind:"field",decorators:[i()],key:"name",value:void 0},{kind:"field",decorators:[n("mwc-ripple")],key:"_ripple",value:void 0},{kind:"field",decorators:[l()],key:"_shouldRenderRipple",value:()=>!1},{kind:"method",key:"render",value:function(){return o`
      <div
        tabindex="0"
        role="tab"
        aria-selected=${this.active}
        aria-label=${c(this.name)}
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
    `}},{kind:"field",key:"_rippleHandlers",value(){return new d((()=>(this._shouldRenderRipple=!0,this._ripple)))}},{kind:"method",key:"_handleKeyDown",value:function(e){13===e.keyCode&&e.target.click()}},{kind:"method",decorators:[h({passive:!0})],key:"handleRippleActivate",value:function(e){this._rippleHandlers.startPress(e)}},{kind:"method",key:"handleRippleDeactivate",value:function(){this._rippleHandlers.endPress()}},{kind:"method",key:"handleRippleMouseEnter",value:function(){this._rippleHandlers.startHover()}},{kind:"method",key:"handleRippleMouseLeave",value:function(){this._rippleHandlers.endHover()}},{kind:"method",key:"handleRippleFocus",value:function(){this._rippleHandlers.startFocus()}},{kind:"method",key:"handleRippleBlur",value:function(){this._rippleHandlers.endFocus()}},{kind:"get",static:!0,key:"styles",value:function(){return s`
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
    `}}]}}),t),e([r("hass-tabs-subpage")],(function(e,t){class a extends t{constructor(...t){super(...t),e(this)}}return{F:a,d:[{kind:"field",decorators:[i({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[i({type:Boolean})],key:"supervisor",value:()=>!1},{kind:"field",decorators:[i({attribute:!1})],key:"localizeFunc",value:void 0},{kind:"field",decorators:[i({type:String,attribute:"back-path"})],key:"backPath",value:void 0},{kind:"field",decorators:[i()],key:"backCallback",value:void 0},{kind:"field",decorators:[i({type:Boolean,attribute:"main-page"})],key:"mainPage",value:()=>!1},{kind:"field",decorators:[i({attribute:!1})],key:"route",value:void 0},{kind:"field",decorators:[i({attribute:!1})],key:"tabs",value:void 0},{kind:"field",decorators:[i({type:Boolean,reflect:!0})],key:"narrow",value:()=>!1},{kind:"field",decorators:[i({type:Boolean,reflect:!0,attribute:"is-wide"})],key:"isWide",value:()=>!1},{kind:"field",decorators:[i({type:Boolean,reflect:!0})],key:"rtl",value:()=>!1},{kind:"field",decorators:[l()],key:"_activeTab",value:void 0},{kind:"field",decorators:[K(".content")],key:"_savedScrollPos",value:void 0},{kind:"field",key:"_getTabs",value(){return p(((e,t,i,a,s,r,n)=>e.filter((e=>(!e.component||e.core||N(this.hass,e.component))&&(!e.advancedOnly||i))).map((e=>o`
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
          `))))}},{kind:"method",key:"willUpdate",value:function(e){if(e.has("route")&&(this._activeTab=this.tabs.find((e=>`${this.route.prefix}${this.route.path}`.includes(e.path)))),e.has("hass")){const t=e.get("hass");t&&t.language===this.hass.language||(this.rtl=M(this.hass))}u(v(a.prototype),"willUpdate",this).call(this,e)}},{kind:"method",key:"render",value:function(){var e,t;const i=this._getTabs(this.tabs,this._activeTab,null===(e=this.hass.userData)||void 0===e?void 0:e.showAdvanced,this.hass.config.components,this.hass.language,this.narrow,this.localizeFunc||this.hass.localize),a=i.length>1||!this.narrow;return o`
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
        ${this.narrow?o`<div class="main-title"><slot name="header"></slot></div>`:""}
        ${a?o`
              <div id="tabbar" class=${f({"bottom-bar":this.narrow})}>
                ${i}
              </div>
            `:""}
        <div id="toolbar-icon">
          <slot name="toolbar-icon"></slot>
        </div>
      </div>
      <div
        class="content ${f({tabs:a})}"
        @scroll=${this._saveScrollPos}
      >
        <slot></slot>
      </div>
      <div id="fab" class=${f({tabs:a})}>
        <slot name="fab"></slot>
      </div>
    `}},{kind:"method",decorators:[h({passive:!0})],key:"_saveScrollPos",value:function(e){this._savedScrollPos=e.target.scrollTop}},{kind:"method",key:"_backTapped",value:function(){this.backCallback?this.backCallback():history.back()}},{kind:"get",static:!0,key:"styles",value:function(){return s`
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
    `}}]}}),t),e([r("hacs-repository-card")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[i({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[i({attribute:!1})],key:"hacs",value:void 0},{kind:"field",decorators:[i({attribute:!1})],key:"repository",value:void 0},{kind:"field",decorators:[i({type:Boolean})],key:"narrow",value:void 0},{kind:"get",key:"_borderClass",value:function(){const e={};return this.hacs.addedToLovelace(this.hacs,this.repository)&&"pending-restart"!==this.repository.status?this.repository.pending_upgrade?e["status-update"]=!0:this.repository.new&&!this.repository.installed&&(e["status-new"]=!0):e["status-issue"]=!0,0!==Object.keys(e).length&&(e["status-border"]=!0),e}},{kind:"get",key:"_headerClass",value:function(){const e={};return this.hacs.addedToLovelace(this.hacs,this.repository)&&"pending-restart"!==this.repository.status?this.repository.pending_upgrade?e["update-header"]=!0:this.repository.new&&!this.repository.installed?e["new-header"]=!0:e["default-header"]=!0:e["issue-header"]=!0,e}},{kind:"get",key:"_headerTitle",value:function(){return this.hacs.addedToLovelace(this.hacs,this.repository)?"pending-restart"===this.repository.status?this.hacs.localize("repository_card.pending_restart"):this.repository.pending_upgrade?this.hacs.localize("repository_card.pending_update"):this.repository.new&&!this.repository.installed?this.hacs.localize("repository_card.new_repository"):"":this.hacs.localize("repository_card.not_loaded")}},{kind:"method",key:"render",value:function(){const e=this.repository.local_path.split("/");return o`
      <ha-card class=${f(this._borderClass)} ?narrow=${this.narrow}>
        <div class="card-content">
          <div class="group-header">
            <div class="status-header ${f(this._headerClass)}">${this._headerTitle}</div>
            <div class="title pointer" @click=${this._showReopsitoryInfo}>
              <h1>${this.repository.name}</h1>
              ${"integration"!==this.repository.category?o` <ha-chip>
                    ${this.hacs.localize(`common.${this.repository.category}`)}
                  </ha-chip>`:""}
            </div>
          </div>
          <div class="description">${this.repository.description}</div>
        </div>
        <div class="card-actions">
          ${this.repository.installed?o` <ha-icon-overflow-menu
                slot="toolbar-icon"
                narrow
                .hass=${this.hass}
                .items=${[{path:b,label:this.hacs.localize("repository_card.information"),action:()=>this._showReopsitoryInfo()},{path:y,label:this.hacs.localize("common.repository"),action:()=>m.open(`https://github.com/${this.repository.full_name}`,"_blank","noreferrer=true")},{path:k,label:this.hacs.localize("repository_card.update_information"),action:()=>this._updateReopsitoryInfo()},{path:g,label:this.hacs.localize("repository_card.redownload"),action:()=>this._installRepository()},{category:"plugin",path:w,label:this.hacs.localize("repository_card.open_source"),action:()=>m.open(`/hacsfiles/${e.pop()}/${this.repository.file_name}`,"_blank","noreferrer=true")},{path:_,label:this.hacs.localize("repository_card.open_issue"),action:()=>m.open(`https://github.com/${this.repository.full_name}/issues`,"_blank","noreferrer=true")},{hideForId:"172733314",path:x,label:this.hacs.localize("repository_card.report"),action:()=>m.open(`https://github.com/hacs/integration/issues/new?assignees=ludeeus&labels=flag&template=removal.yml&repo=${this.repository.full_name}&title=Request for removal of ${this.repository.full_name}`,"_blank","noreferrer=true")},{hideForId:"172733314",path:$,label:this.hacs.localize("common.remove"),action:()=>this._uninstallRepositoryDialog()}].filter((e=>!(e.category&&this.repository.category!==e.category||e.hideForId&&String(this.repository.id)===e.hideForId)))}
              >
              </ha-icon-overflow-menu>`:""}
          ${this.repository.new&&!this.repository.installed?o`<div>
                <mwc-button class="status-new" @click=${this._setNotNew}>
                  ${this.hacs.localize("repository_card.dismiss")}
                </mwc-button>
              </div>`:this.repository.pending_upgrade&&this.hacs.addedToLovelace(this.hacs,this.repository)?o`<div>
                <mwc-button class="update-header" @click=${this._updateRepository} raised>
                  ${this.hacs.localize("common.update")}
                </mwc-button>
              </div> `:""}
        </div>
      </ha-card>
    `}},{kind:"method",key:"_updateReopsitoryInfo",value:async function(){await z(this.hass,this.repository.id)}},{kind:"method",key:"_showReopsitoryInfo",value:async function(){this.dispatchEvent(new CustomEvent("hacs-dialog",{detail:{type:"repository-info",repository:this.repository.id},bubbles:!0,composed:!0}))}},{kind:"method",key:"_updateRepository",value:async function(){this.dispatchEvent(new CustomEvent("hacs-dialog",{detail:{type:"update",repository:this.repository.id},bubbles:!0,composed:!0}))}},{kind:"method",key:"_setNotNew",value:async function(){await R(this.hass,this.repository.id)}},{kind:"method",key:"_installRepository",value:function(){this.dispatchEvent(new CustomEvent("hacs-dialog",{detail:{type:"download",repository:this.repository.id},bubbles:!0,composed:!0}))}},{kind:"method",key:"_uninstallRepositoryDialog",value:async function(){if("integration"===this.repository.category&&this.repository.config_flow){if((await L(this.hass)).some((e=>e.domain===this.repository.domain))){if(await q(this,{title:this.hacs.localize("dialog.configured.title"),text:this.hacs.localize("dialog.configured.message",{name:this.repository.name}),dismissText:this.hacs.localize("common.ignore"),confirmText:this.hacs.localize("common.navigate"),confirm:()=>{j("/config/integrations",{replace:!0})}}))return}}this.dispatchEvent(new CustomEvent("hacs-dialog",{detail:{type:"progress",title:this.hacs.localize("dialog.remove.title"),confirmText:this.hacs.localize("dialog.remove.title"),content:this.hacs.localize("dialog.remove.message",{name:this.repository.name}),confirm:async()=>{await this._uninstallRepository()}},bubbles:!0,composed:!0}))}},{kind:"method",key:"_uninstallRepository",value:async function(){var e;if("plugin"===this.repository.category&&"yaml"!==(null===(e=this.hacs.status)||void 0===e?void 0:e.lovelace_mode)){const e=await I(this.hass),t=T({repository:this.repository,skipTag:!0});await Promise.all(e.filter((e=>e.url.includes(t))).map((e=>C(this.hass,String(e.id)))))}await F(this.hass,this.repository.id)}},{kind:"get",static:!0,key:"styles",value:function(){return[E,s`
        ha-card {
          display: flex;
          flex-direction: column;
          height: 100%;
          width: 480px;
          border-style: solid;
          border-width: min(var(--ha-card-border-width, 1px), 10px);
          border-color: transparent;
          border-radius: var(--ha-card-border-radius, 4px);
        }

        .title {
          display: flex;
          justify-content: space-between;
        }
        .card-content {
          padding: 0 0 3px 0;
          height: 100%;
        }
        .card-actions {
          border-top: none;
          bottom: 0;
          display: flex;
          flex-direction: row-reverse;
          justify-content: space-between;
          align-items: center;
          padding: 5px;
        }
        .group-header {
          height: auto;
          align-content: center;
        }
        .group-header h1 {
          margin: 0;
          padding: 8px 16px;
          font-size: 22px;
        }
        h1 {
          margin-top: 0;
          min-height: 24px;
        }

        .pointer {
          cursor: pointer;
        }
        .description {
          opacity: var(--dark-primary-opacity);
          font-size: 14px;
          padding: 8px 16px;
        }

        .status-new {
          border-color: var(--hcv-color-new);
          --mdc-theme-primary: var(--hcv-color-new);
        }

        .status-update {
          border-color: var(--hcv-color-update);
        }

        .status-issue {
          border-color: var(--hcv-color-error);
        }

        .new-header {
          background-color: var(--hcv-color-new);
          color: var(--hcv-text-color-on-background);
        }

        .issue-header {
          background-color: var(--hcv-color-error);
          color: var(--hcv-text-color-on-background);
        }

        .update-header {
          background-color: var(--hcv-color-update);
          color: var(--hcv-text-color-on-background);
        }

        .default-header {
          padding: 2px 0 !important;
        }

        mwc-button.update-header {
          --mdc-theme-primary: var(--hcv-color-update);
          --mdc-theme-on-primary: var(--hcv-text-color-on-background);
        }

        .status-border {
          border-style: solid;
          border-width: min(var(--ha-card-border-width, 1px), 10px);
        }

        .status-header {
          top: 0;
          padding: 6px 1px;
          margin: -1px;
          width: 100%;
          font-weight: 500;
          text-align: center;
          left: 0;
          border-top-left-radius: var(--ha-card-border-radius, 4px);
          border-top-right-radius: var(--ha-card-border-radius, 4px);
        }

        ha-card[narrow] {
          width: calc(100% - 24px);
          margin: 11px;
        }

        ha-chip {
          padding: 4px;
          margin-top: 3px;
        }
      `]}}]}}),t);let V=e([r("hacs-store-panel")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[i({attribute:!1})],key:"filters",value:()=>({})},{kind:"field",decorators:[i({attribute:!1})],key:"hacs",value:void 0},{kind:"field",decorators:[i()],key:"_searchInput",value:()=>""},{kind:"field",decorators:[i({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[i({attribute:!1})],key:"narrow",value:void 0},{kind:"field",decorators:[i({attribute:!1})],key:"isWide",value:void 0},{kind:"field",decorators:[i({attribute:!1})],key:"route",value:void 0},{kind:"field",decorators:[i({attribute:!1})],key:"sections",value:void 0},{kind:"field",decorators:[i()],key:"section",value:void 0},{kind:"field",key:"_repositoriesInActiveSection",value(){return p(((e,t)=>[(null==e?void 0:e.filter((e=>{var i,o,a;return(null===(i=this.hacs.sections)||void 0===i||null===(o=i.find((e=>e.id===t)))||void 0===o||null===(a=o.categories)||void 0===a?void 0:a.includes(e.category))&&e.installed})))||[],(null==e?void 0:e.filter((e=>{var i,o,a;return(null===(i=this.hacs.sections)||void 0===i||null===(o=i.find((e=>e.id===t)))||void 0===o||null===(a=o.categories)||void 0===a?void 0:a.includes(e.category))&&e.new&&!e.installed})))||[]]))}},{kind:"get",key:"allRepositories",value:function(){const[e,t]=this._repositoriesInActiveSection(this.hacs.repositories,this.section);return t.concat(e)}},{kind:"field",key:"_filterRepositories",value:()=>p(D)},{kind:"get",key:"visibleRepositories",value:function(){const e=this.allRepositories.filter((e=>{var t,i;return null===(t=this.filters[this.section])||void 0===t||null===(i=t.find((t=>t.id===e.category)))||void 0===i?void 0:i.checked}));return this._filterRepositories(e,this._searchInput)}},{kind:"method",key:"firstUpdated",value:async function(){this.addEventListener("filter-change",(e=>this._updateFilters(e)))}},{kind:"method",key:"_updateFilters",value:function(e){var t;const i=null===(t=this.filters[this.section])||void 0===t?void 0:t.find((t=>t.id===e.detail.id));this.filters[this.section].find((e=>e.id===i.id)).checked=!i.checked,this.requestUpdate()}},{kind:"method",key:"render",value:function(){var e;if(!this.hacs)return o``;const t=this._repositoriesInActiveSection(this.hacs.repositories,this.section)[1];if(!this.filters[this.section]&&this.hacs.configuration.categories){var i;const e=null===(i=P(this.hacs.language,this.route))||void 0===i?void 0:i.categories;this.filters[this.section]=[],null==e||e.filter((e=>{var t;return null===(t=this.hacs.configuration)||void 0===t?void 0:t.categories.includes(e)})).forEach((e=>{this.filters[this.section].push({id:e,value:e,checked:!0})}))}return o`<hass-tabs-subpage
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
        .items=${[{path:S,label:this.hacs.localize("menu.documentation"),action:()=>m.open("https://hacs.xyz/","_blank","noreferrer=true")},{path:y,label:"GitHub",action:()=>m.open("https://github.com/hacs","_blank","noreferrer=true")},{path:_,label:this.hacs.localize("menu.open_issue"),action:()=>m.open("https://hacs.xyz/docs/issues","_blank","noreferrer=true")},{path:B,label:this.hacs.localize("menu.custom_repositories"),disabled:this.hacs.status.disabled||this.hacs.status.background_task,action:()=>this.dispatchEvent(new CustomEvent("hacs-dialog",{detail:{type:"custom-repositories",repositories:this.hacs.repositories},bubbles:!0,composed:!0}))},{path:b,label:this.hacs.localize("menu.about"),action:()=>U(this,this.hacs)}]}
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
        ${null!=t&&t.length?o`<ha-alert .rtl=${M(this.hass)}>
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
        <ha-svg-icon slot="icon" .path=${O}></ha-svg-icon>
      </ha-fab>
    </hass-tabs-subpage>`}},{kind:"method",key:"_renderRepositories",value:function(){return this.visibleRepositories.map((e=>o`<hacs-repository-card
          .hass=${this.hass}
          .hacs=${this.hacs}
          .repository=${e}
          .narrow=${this.narrow}
          ?narrow=${this.narrow}
        ></hacs-repository-card>`))}},{kind:"method",key:"_clearAllNewRepositories",value:async function(){var e;await A(this.hass,(null===(e=P(this.hacs.language,this.route))||void 0===e?void 0:e.categories)||[])}},{kind:"method",key:"_renderNoResultsFound",value:function(){return o`<ha-alert
      .rtl=${M(this.hass)}
      alert-type="warning"
      .title="${this.hacs.localize("store.no_repositories")} 😕"
    >
      ${this.hacs.localize("store.no_repositories_found_desc1",{searchInput:this._searchInput})}
      <br />
      ${this.hacs.localize("store.no_repositories_found_desc2")}
    </ha-alert>`}},{kind:"method",key:"_renderEmpty",value:function(){return o`<ha-alert
      .title="${this.hacs.localize("store.no_repositories")} 😕"
      .rtl=${M(this.hass)}
    >
      ${this.hacs.localize("store.no_repositories_desc1")}
      <br />
      ${this.hacs.localize("store.no_repositories_desc2")}
    </ha-alert>`}},{kind:"method",key:"_inputValueChanged",value:function(e){this._searchInput=e.detail.value,window.localStorage.setItem("hacs-search",this._searchInput)}},{kind:"method",key:"_addRepository",value:function(){this.dispatchEvent(new CustomEvent("hacs-dialog",{detail:{type:"add-repository",repositories:this.hacs.repositories,section:this.section},bubbles:!0,composed:!0}))}},{kind:"get",static:!0,key:"styles",value:function(){return[E,H,s`
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
      `]}}]}}),t);export{V as HacsStorePanel};
