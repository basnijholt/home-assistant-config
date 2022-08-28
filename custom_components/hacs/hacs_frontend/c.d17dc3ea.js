import{aw as e,ax as t,ay as i,a6 as a,a7 as o,a8 as s,a as n,h as r,e as l,$ as d,o as c,r as h,n as p,m as g,az as u,ah as m,aA as v,c as f,aB as y,aC as b,aD as w,d as k}from"./main-bfa41146.js";import"./c.497c36cc.js";import{A as x}from"./c.09384688.js";import{i as $}from"./c.21c042d4.js";import{c as _}from"./c.4a97632a.js";import"./c.866cbf1f.js";import"./c.886b012a.js";import"./c.d5a56e52.js";import{b as z}from"./c.eab771ac.js";import{s as C}from"./c.50ff9066.js";import"./c.8e28b461.js";import"./c.cae7ccdd.js";import"./c.743a15a1.js";import"./c.48057b49.js";import"./c.70483bd2.js";customElements.define("ha-icon-next",class extends e{connectedCallback(){super.connectedCallback(),setTimeout((()=>{this.path="ltr"===window.getComputedStyle(this).direction?t:i}),100)}}),a({_template:o`
    <style>
      :host {
        display: block;
        /**
         * Force app-header-layout to have its own stacking context so that its parent can
         * control the stacking of it relative to other elements (e.g. app-drawer-layout).
         * This could be done using \`isolation: isolate\`, but that's not well supported
         * across browsers.
         */
        position: relative;
        z-index: 0;
      }

      #wrapper ::slotted([slot=header]) {
        @apply --layout-fixed-top;
        z-index: 1;
      }

      #wrapper.initializing ::slotted([slot=header]) {
        position: relative;
      }

      :host([has-scrolling-region]) {
        height: 100%;
      }

      :host([has-scrolling-region]) #wrapper ::slotted([slot=header]) {
        position: absolute;
      }

      :host([has-scrolling-region]) #wrapper.initializing ::slotted([slot=header]) {
        position: relative;
      }

      :host([has-scrolling-region]) #wrapper #contentContainer {
        @apply --layout-fit;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
      }

      :host([has-scrolling-region]) #wrapper.initializing #contentContainer {
        position: relative;
      }

      :host([fullbleed]) {
        @apply --layout-vertical;
        @apply --layout-fit;
      }

      :host([fullbleed]) #wrapper,
      :host([fullbleed]) #wrapper #contentContainer {
        @apply --layout-vertical;
        @apply --layout-flex;
      }

      #contentContainer {
        /* Create a stacking context here so that all children appear below the header. */
        position: relative;
        z-index: 0;
      }

      @media print {
        :host([has-scrolling-region]) #wrapper #contentContainer {
          overflow-y: visible;
        }
      }

    </style>

    <div id="wrapper" class="initializing">
      <slot id="headerSlot" name="header"></slot>

      <div id="contentContainer">
        <slot></slot>
      </div>
    </div>
`,is:"app-header-layout",behaviors:[x],properties:{hasScrollingRegion:{type:Boolean,value:!1,reflectToAttribute:!0}},observers:["resetLayout(isAttached, hasScrollingRegion)"],get header(){return s(this.$.headerSlot).getDistributedNodes()[0]},_updateLayoutStates:function(){var e=this.header;if(this.isAttached&&e){this.$.wrapper.classList.remove("initializing"),e.scrollTarget=this.hasScrollingRegion?this.$.contentContainer:this.ownerDocument.documentElement;var t=e.offsetHeight;this.hasScrollingRegion?(e.style.left="",e.style.right=""):requestAnimationFrame(function(){var t=this.getBoundingClientRect(),i=document.documentElement.clientWidth-t.right;e.style.left=t.left+"px",e.style.right=i+"px"}.bind(this));var i=this.$.contentContainer.style;e.fixed&&!e.condenses&&this.hasScrollingRegion?(i.marginTop=t+"px",i.paddingTop=""):(i.paddingTop=t+"px",i.marginTop="")}}});class E extends(customElements.get("app-header-layout")){static get template(){return o`
      <style>
        :host {
          display: block;
          /**
         * Force app-header-layout to have its own stacking context so that its parent can
         * control the stacking of it relative to other elements (e.g. app-drawer-layout).
         * This could be done using \`isolation: isolate\`, but that's not well supported
         * across browsers.
         */
          position: relative;
          z-index: 0;
        }

        #wrapper ::slotted([slot="header"]) {
          @apply --layout-fixed-top;
          z-index: 1;
        }

        #wrapper.initializing ::slotted([slot="header"]) {
          position: relative;
        }

        :host([has-scrolling-region]) {
          height: 100%;
        }

        :host([has-scrolling-region]) #wrapper ::slotted([slot="header"]) {
          position: absolute;
        }

        :host([has-scrolling-region])
          #wrapper.initializing
          ::slotted([slot="header"]) {
          position: relative;
        }

        :host([has-scrolling-region]) #wrapper #contentContainer {
          @apply --layout-fit;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
        }

        :host([has-scrolling-region]) #wrapper.initializing #contentContainer {
          position: relative;
        }

        #contentContainer {
          /* Create a stacking context here so that all children appear below the header. */
          position: relative;
          z-index: 0;
          /* Using 'transform' will cause 'position: fixed' elements to behave like
           'position: absolute' relative to this element. */
          transform: translate(0);
          margin-left: env(safe-area-inset-left);
          margin-right: env(safe-area-inset-right);
        }

        @media print {
          :host([has-scrolling-region]) #wrapper #contentContainer {
            overflow-y: visible;
          }
        }
      </style>

      <div id="wrapper" class="initializing">
        <slot id="headerSlot" name="header"></slot>

        <div id="contentContainer"><slot></slot></div>
        <slot id="fab" name="fab"></slot>
      </div>
    `}}customElements.define("ha-app-layout",E),n([p("ha-config-section")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[l()],key:"isWide",value:()=>!1},{kind:"field",decorators:[l({type:Boolean})],key:"vertical",value:()=>!1},{kind:"field",decorators:[l({type:Boolean,attribute:"full-width"})],key:"fullWidth",value:()=>!1},{kind:"method",key:"render",value:function(){return d`
      <div
        class="content ${c({narrow:!this.isWide,"full-width":this.fullWidth})}"
      >
        <div class="header"><slot name="header"></slot></div>
        <div
          class="together layout ${c({narrow:!this.isWide,vertical:this.vertical||!this.isWide,horizontal:!this.vertical&&this.isWide})}"
        >
          <div class="intro"><slot name="introduction"></slot></div>
          <div class="panel flex-auto"><slot></slot></div>
        </div>
      </div>
    `}},{kind:"get",static:!0,key:"styles",value:function(){return h`
      :host {
        display: block;
      }
      .content {
        padding: 28px 20px 0;
        max-width: 1040px;
        margin: 0 auto;
      }

      .layout {
        display: flex;
      }

      .horizontal {
        flex-direction: row;
      }

      .vertical {
        flex-direction: column;
      }

      .flex-auto {
        flex: 1 1 auto;
      }

      .header {
        font-family: var(--paper-font-headline_-_font-family);
        -webkit-font-smoothing: var(
          --paper-font-headline_-_-webkit-font-smoothing
        );
        font-size: var(--paper-font-headline_-_font-size);
        font-weight: var(--paper-font-headline_-_font-weight);
        letter-spacing: var(--paper-font-headline_-_letter-spacing);
        line-height: var(--paper-font-headline_-_line-height);
        opacity: var(--dark-primary-opacity);
      }

      .together {
        margin-top: 32px;
      }

      .intro {
        font-family: var(--paper-font-subhead_-_font-family);
        -webkit-font-smoothing: var(
          --paper-font-subhead_-_-webkit-font-smoothing
        );
        font-weight: var(--paper-font-subhead_-_font-weight);
        line-height: var(--paper-font-subhead_-_line-height);
        width: 100%;
        opacity: var(--dark-primary-opacity);
        font-size: 14px;
        padding-bottom: 20px;
      }

      .horizontal .intro {
        max-width: 400px;
        margin-right: 40px;
      }

      .panel {
        margin-top: -24px;
      }

      .panel ::slotted(*) {
        margin-top: 24px;
        display: block;
      }

      .narrow.content {
        max-width: 640px;
      }
      .narrow .together {
        margin-top: 20px;
      }
      .narrow .intro {
        padding-bottom: 20px;
        margin-right: 0;
        max-width: 500px;
      }

      .full-width {
        padding: 0;
      }

      .full-width .layout {
        flex-direction: column;
      }
    `}}]}}),r);const j=g(((e,t)=>{var i,a;const o=[],s=[],n=[];var r,l;return e.repositories.forEach((t=>{var i;if("pending-restart"===t.status&&n.push(t),e.addedToLovelace(e,t)||s.push(t),t.installed&&null!==(i=e.removed.map((e=>e.repository)))&&void 0!==i&&i.includes(t.full_name)){const i=e.removed.find((e=>e.repository===t.full_name));o.push({name:e.localize("entry.messages.removed_repository",{repository:i.repository}),info:i.reason,severity:"warning",dialog:"remove",repository:t})}})),null!==(i=e.info)&&void 0!==i&&i.startup&&["setup","waiting","startup"].includes(e.info.stage)&&o.push({name:e.localize(`entry.messages.${e.info.stage}.title`),info:e.localize(`entry.messages.${e.info.stage}.content`),severity:"warning"}),null!==(a=e.info)&&void 0!==a&&a.disabled_reason?[{name:e.localize("entry.messages.disabled.title"),secondary:e.localize(`entry.messages.disabled.${null===(r=e.info)||void 0===r?void 0:r.disabled_reason}.title`),info:e.localize(`entry.messages.disabled.${null===(l=e.info)||void 0===l?void 0:l.disabled_reason}.description`),severity:"error"}]:(s.length>0&&o.push({name:e.localize("entry.messages.resources.title"),info:e.localize("entry.messages.resources.content",{number:s.length}),severity:"error"}),n.length>0&&o.push({name:e.localize("entry.messages.restart.title"),path:t?"/_my_redirect/server_controls":void 0,info:e.localize("entry.messages.restart.content",{number:n.length,pluralWording:1===n.length?e.localize("common.integration"):e.localize("common.integration_plural")}),severity:"error"}),o)}));let S=n([p("hacs-entry-panel")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[l({attribute:!1})],key:"hacs",value:void 0},{kind:"field",decorators:[l({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[l({attribute:!1})],key:"route",value:void 0},{kind:"field",decorators:[l({type:Boolean,reflect:!0})],key:"narrow",value:void 0},{kind:"field",decorators:[l({type:Boolean})],key:"isWide",value:void 0},{kind:"method",key:"render",value:function(){var e,t;const i=[],a=[],o=j(this.hacs,$(this.hass,"my"));return this.hacs.repositories.forEach((e=>{e.pending_upgrade&&i.push(e)})),o.forEach((e=>{a.push({iconPath:u,name:e.name,info:e.info,secondary:e.secondary,path:e.path||"",severity:e.severity,dialog:e.dialog,repository:e.repository})})),this.dispatchEvent(new CustomEvent("update-hacs",{detail:{messages:a,updates:i},bubbles:!0,composed:!0})),d`
      <ha-app-layout>
        <app-header fixed slot="header">
          <app-toolbar>
            <ha-menu-button .hass=${this.hass} .narrow=${this.narrow}></ha-menu-button>
            <div main-title>${this.narrow?"HACS":"Home Assistant Community Store"}</div>
          </app-toolbar>
        </app-header>
        <ha-config-section .narrow=${this.narrow} .isWide=${this.isWide} full-width>
          ${0!==(null===(e=this.hacs.messages)||void 0===e?void 0:e.length)?this.hacs.messages.map((e=>d`
                    <ha-alert
                      .alertType=${e.severity}
                      .title=${e.secondary?`${e.name} - ${e.secondary}`:e.name}
                      .rtl=${_(this.hass)}
                    >
                      ${e.info}
                      <mwc-button
                        slot="action"
                        .label=${e.path?this.hacs.localize("common.navigate"):e.dialog?this.hacs.localize("common.show"):""}
                        @click=${()=>e.path?m(e.path):this._openDialog(e)}
                      >
                      </mwc-button>
                    </ha-alert>
                  `)):(this.narrow,"")}
          ${0!==(null===(t=this.hacs.updates)||void 0===t?void 0:t.length)?d` <ha-card outlined>
                <div class="title">${this.hacs.localize("common.updates")}</div>
                <mwc-list>
                  ${v(this.hacs.updates).map((e=>d`
                      <ha-clickable-list-item
                        graphic="avatar"
                        disableHref
                        twoline
                        @click=${()=>this._openUpdateDialog(e)}
                      >
                        ${"integration"===e.category?d`
                              <img
                                loading="lazy"
                                .src=${z({domain:e.domain,darkOptimized:this.hass.themes.darkMode,type:"icon"})}
                                referrerpolicy="no-referrer"
                                @error=${this._onImageError}
                                @load=${this._onImageLoad}
                                slot="graphic"
                              />
                            `:d`
                              <ha-svg-icon
                                slot="graphic"
                                path="${f}"
                                style="padding-left: 0; height: 40px; width: 40px;"
                              >
                              </ha-svg-icon>
                            `}
                        <span>${e.name}</span>
                        <span slot="secondary"
                          >${this.hacs.localize("sections.pending_repository_upgrade",{downloaded:e.installed_version,available:e.available_version})}</span
                        >
                      </ha-clickable-list-item>
                    `))}
                </mwc-list>
              </ha-card>`:""}

          <ha-card outlined>
            <mwc-list>
              ${this.hacs.sections.map((e=>d`
                  <ha-clickable-list-item
                    graphic="avatar"
                    twoline
                    .hasMeta=${!this.narrow}
                    href=${e.path}
                  >
                    <div
                      slot="graphic"
                      class=${e.iconColor?"icon-background":""}
                      .style="background-color: ${e.iconColor||"undefined"}"
                    >
                      <ha-svg-icon .path=${e.iconPath}></ha-svg-icon>
                    </div>
                    <span>${e.name}</span>
                    <span slot="secondary">${e.description}</span>
                    ${this.narrow?"":d`<ha-icon-next slot="meta"></ha-icon-next>`}
                  </ha-clickable-list-item>
                `))}
              ${$(this.hass,"my")&&$(this.hass,"hassio")?d`
                    <ha-clickable-list-item
                      graphic="avatar"
                      disableHref
                      twoline
                      @click=${this._openSupervisorDialog}
                      .hasMeta=${!this.narrow}
                    >
                      <div
                        class="icon-background"
                        slot="graphic"
                        style="background-color: rgb(64, 132, 205)"
                      >
                        <ha-svg-icon .path=${y}></ha-svg-icon>
                      </div>
                      <span>${this.hacs.localize("sections.addon.title")}</span>
                      <span slot="secondary"
                        >${this.hacs.localize("sections.addon.description")}</span
                      >
                    </ha-clickable-list-item>
                  `:""}
              <ha-clickable-list-item
                graphic="avatar"
                twoline
                @click=${this._openAboutDialog}
                disableHref
              >
                <div
                  class="icon-background"
                  slot="graphic"
                  style="background-color: rgb(74, 89, 99)"
                >
                  <ha-svg-icon .path=${b}></ha-svg-icon>
                </div>
                <span>${this.hacs.localize("sections.about.title")}</span>
                <span slot="secondary">${this.hacs.localize("sections.about.description")}</span>
              </ha-clickable-list-item>
            </mwc-list>
          </ha-card>
        </ha-config-section>
      </ha-app-layout>
    `}},{kind:"method",key:"_onImageLoad",value:function(e){e.target.style.visibility="initial"}},{kind:"method",key:"_onImageError",value:function(e){e.target&&(e.target.outerHTML=`\n      <div slot="item-icon" class="icon-background">\n        <ha-svg-icon path="${f}" style="padding-left: 0; height: 40px; width: 40px;"></ha-svg-icon>\n      </div>`)}},{kind:"method",key:"_openDialog",value:function(e){e.dialog&&("remove"==e.dialog&&(e.dialog="removed"),this.dispatchEvent(new CustomEvent("hacs-dialog",{detail:{type:e.dialog,repository:e.repository},bubbles:!0,composed:!0})))}},{kind:"method",key:"_openUpdateDialog",value:function(e){this.dispatchEvent(new CustomEvent("hacs-dialog",{detail:{type:"update",repository:e.id},bubbles:!0,composed:!0}))}},{kind:"method",key:"_openAboutDialog",value:async function(){C(this,this.hacs)}},{kind:"method",key:"_openSupervisorDialog",value:async function(){this.dispatchEvent(new CustomEvent("hacs-dialog",{detail:{type:"navigate",path:"/_my_redirect/supervisor"},bubbles:!0,composed:!0}))}},{kind:"get",static:!0,key:"styles",value:function(){return[w,k,h`
        :host {
          --mdc-list-vertical-padding: 0;
        }
        ha-card:last-child {
          margin-bottom: env(safe-area-inset-bottom);
        }
        :host(:not([narrow])) ha-card:last-child {
          margin-bottom: max(24px, env(safe-area-inset-bottom));
        }
        ha-config-section {
          margin: auto;
          margin-top: -32px;
          max-width: 600px;
        }
        ha-card {
          overflow: hidden;
        }
        ha-card a {
          text-decoration: none;
          color: var(--primary-text-color);
        }
        a.button {
          display: block;
          color: var(--primary-color);
          padding: 16px;
        }
        .title {
          font-size: 16px;
          padding: 16px;
          padding-bottom: 0;
        }

        @media all and (max-width: 600px) {
          ha-card {
            border-width: 1px 0;
            border-radius: 0;
            box-shadow: unset;
          }
          ha-config-section {
            margin-top: -42px;
          }
        }

        ha-svg-icon,
        ha-icon-next {
          color: var(--secondary-text-color);
          height: 24px;
          width: 24px;
          display: block;
        }
        ha-svg-icon {
          padding: 8px;
        }
        .icon-background {
          border-radius: 50%;
        }
        .icon-background ha-svg-icon {
          color: #fff;
        }
        ha-clickable-list-item {
          cursor: pointer;
          font-size: 16px;
          padding: 0;
        }
      `]}}]}}),r);export{S as HacsEntryPanel};
