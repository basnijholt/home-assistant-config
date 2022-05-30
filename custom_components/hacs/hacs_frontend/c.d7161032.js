import{a as e,h as a,e as i,t,i as s,$ as o,ax as n,o as r,A as d,ae as l,r as c,n as h,H as p,m,I as u,J as v,ay as g,a0 as y,a1 as x,az as _,an as f,ao as k,ai as b,s as $,d as w}from"./main-c805434e.js";import{c as z}from"./c.4a97632a.js";import"./c.6b338b4b.js";import{s as R}from"./c.791b7770.js";import{m as j}from"./c.6e8e6174.js";import{u as C}from"./c.15b2193e.js";import"./c.d49c601d.js";import"./c.70de318c.js";import"./c.743a15a1.js";import"./c.78610cf7.js";import"./c.8e28b461.js";e([h("ha-expansion-panel")],(function(e,a){return{F:class extends a{constructor(...a){super(...a),e(this)}},d:[{kind:"field",decorators:[i({type:Boolean,reflect:!0})],key:"expanded",value:()=>!1},{kind:"field",decorators:[i({type:Boolean,reflect:!0})],key:"outlined",value:()=>!1},{kind:"field",decorators:[i()],key:"header",value:void 0},{kind:"field",decorators:[i()],key:"secondary",value:void 0},{kind:"field",decorators:[t()],key:"_showContent",value(){return this.expanded}},{kind:"field",decorators:[s(".container")],key:"_container",value:void 0},{kind:"method",key:"render",value:function(){return o`
      <div
        id="summary"
        @click=${this._toggleContainer}
        @keydown=${this._toggleContainer}
        role="button"
        tabindex="0"
        aria-expanded=${this.expanded}
        aria-controls="sect1"
      >
        <slot class="header" name="header">
          ${this.header}
          <slot class="secondary" name="secondary">${this.secondary}</slot>
        </slot>
        <ha-svg-icon
          .path=${n}
          class="summary-icon ${r({expanded:this.expanded})}"
        ></ha-svg-icon>
      </div>
      <div
        class="container ${r({expanded:this.expanded})}"
        @transitionend=${this._handleTransitionEnd}
        role="region"
        aria-labelledby="summary"
        aria-hidden=${!this.expanded}
        tabindex="-1"
      >
        ${this._showContent?o`<slot></slot>`:""}
      </div>
    `}},{kind:"method",key:"willUpdate",value:function(e){e.has("expanded")&&this.expanded&&(this._showContent=this.expanded)}},{kind:"method",key:"_handleTransitionEnd",value:function(){this._container.style.removeProperty("height"),this._showContent=this.expanded}},{kind:"method",key:"_toggleContainer",value:async function(e){if("keydown"===e.type&&"Enter"!==e.key&&" "!==e.key)return;e.preventDefault();const a=!this.expanded;d(this,"expanded-will-change",{expanded:a}),a&&(this._showContent=!0,await l());const i=this._container.scrollHeight;this._container.style.height=`${i}px`,a||setTimeout((()=>{this._container.style.height="0px"}),0),this.expanded=a,d(this,"expanded-changed",{expanded:this.expanded})}},{kind:"get",static:!0,key:"styles",value:function(){return c`
      :host {
        display: block;
      }

      :host([outlined]) {
        box-shadow: none;
        border-width: 1px;
        border-style: solid;
        border-color: var(
          --ha-card-border-color,
          var(--divider-color, #e0e0e0)
        );
        border-radius: var(--ha-card-border-radius, 4px);
      }

      #summary {
        display: flex;
        padding: var(--expansion-panel-summary-padding, 0 8px);
        min-height: 48px;
        align-items: center;
        cursor: pointer;
        overflow: hidden;
        font-weight: 500;
        outline: none;
      }

      #summary:focus {
        background: var(--input-fill-color);
      }

      .summary-icon {
        transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1);
        margin-left: auto;
        margin-inline-start: auto;
        margin-inline-end: initial;
        direction: var(--direction);
      }

      .summary-icon.expanded {
        transform: rotate(180deg);
      }

      .container {
        padding: var(--expansion-panel-content-padding, 0 8px);
        overflow: hidden;
        transition: height 300ms cubic-bezier(0.4, 0, 0.2, 1);
        height: 0px;
      }

      .container.expanded {
        height: auto;
      }

      .header {
        display: block;
      }

      .secondary {
        display: block;
        color: var(--secondary-text-color);
        font-size: 12px;
      }
    `}}]}}),a);let E=e([h("hacs-update-dialog")],(function(e,a){class t extends a{constructor(...a){super(...a),e(this)}}return{F:t,d:[{kind:"field",decorators:[i()],key:"repository",value:void 0},{kind:"field",decorators:[i({type:Boolean})],key:"_updating",value:()=>!1},{kind:"field",decorators:[i()],key:"_error",value:void 0},{kind:"field",decorators:[i({attribute:!1})],key:"_releaseNotes",value:()=>[]},{kind:"field",key:"_getRepository",value:()=>m(((e,a)=>e.find((e=>e.id===a))))},{kind:"method",key:"firstUpdated",value:async function(e){u(v(t.prototype),"firstUpdated",this).call(this,e);const a=this._getRepository(this.hacs.repositories,this.repository);a&&("commit"!==a.version_or_commit&&(this._releaseNotes=await g(this.hass,a.id,a.installed_version)),y(this.hass,(e=>this._error=e),x.ERROR))}},{kind:"method",key:"render",value:function(){var e;if(!this.active)return o``;const a=this._getRepository(this.hacs.repositories,this.repository);return a?o`
      <hacs-dialog
        .active=${this.active}
        .title=${this.hacs.localize("dialog_update.title")}
        .hass=${this.hass}
      >
        <div class=${r({content:!0,narrow:this.narrow})}>
          <p class="message">
            ${this.hacs.localize("dialog_update.message",{name:a.name})}
          </p>
          <div class="version-container">
            <div class="version-element">
              <span class="version-number">${a.installed_version}</span>
              <small class="version-text">${this.hacs.localize("dialog_update.downloaded_version")}</small>
            </div>

            <span class="version-separator">
              <ha-svg-icon
                .path=${_}
              ></ha-svg-icon>
            </span>

            <div class="version-element">
                <span class="version-number">${a.available_version}</span>
                <small class="version-text">${this.hacs.localize("dialog_update.available_version")}</small>
              </div>
            </div>
          </div>

          ${this._releaseNotes.length>0?this._releaseNotes.map((e=>o`
                    <ha-expansion-panel
                      .header=${e.name&&e.name!==e.tag?`${e.tag}: ${e.name}`:e.tag}
                      outlined
                      ?expanded=${1===this._releaseNotes.length}
                    >
                      ${e.body?j.html(e.body,a):this.hacs.localize("dialog_update.no_info")}
                    </ha-expansion-panel>
                  `)):""}
          ${a.can_install?"":o`<ha-alert alert-type="error" .rtl=${z(this.hass)}>
                  ${this.hacs.localize("confirm.home_assistant_version_not_correct",{haversion:this.hass.config.version,minversion:a.homeassistant})}
                </ha-alert>`}
          ${"integration"===a.category?o`<p>${this.hacs.localize("dialog_download.restart")}</p>`:""}
          ${null!==(e=this._error)&&void 0!==e&&e.message?o`<ha-alert alert-type="error" .rtl=${z(this.hass)}>
                  ${this._error.message}
                </ha-alert>`:""}
        </div>
        <mwc-button
          slot="primaryaction"
          ?disabled=${!a.can_install}
          @click=${this._updateRepository}
          raised
          >
          ${this._updating?o`<ha-circular-progress active size="small"></ha-circular-progress>`:this.hacs.localize("common.update")}
          </mwc-button
        >
        <div class="secondary" slot="secondaryaction">
          <hacs-link .url=${this._getChanglogURL()||""}>
            <mwc-button>${this.hacs.localize("dialog_update.changelog")}
          </mwc-button>
          </hacs-link>
          <hacs-link .url="https://github.com/${a.full_name}">
            <mwc-button>${this.hacs.localize("common.repository")}
          </mwc-button>
          </hacs-link>
        </div>
      </hacs-dialog>
    `:o``}},{kind:"method",key:"_updateRepository",value:async function(){this._updating=!0;const e=this._getRepository(this.hacs.repositories,this.repository);e&&("commit"!==e.version_or_commit?await f(this.hass,e.id,e.available_version):await k(this.hass,e.id),"plugin"===e.category&&"storage"===this.hacs.status.lovelace_mode&&await C(this.hass,e,e.available_version),this._updating=!1,this.dispatchEvent(new Event("hacs-dialog-closed",{bubbles:!0,composed:!0})),"plugin"===e.category&&R(this,{title:this.hacs.localize("common.reload"),text:o`${this.hacs.localize("dialog.reload.description")}<br />${this.hacs.localize("dialog.reload.confirm")}`,dismissText:this.hacs.localize("common.cancel"),confirmText:this.hacs.localize("common.reload"),confirm:()=>{b.location.href=b.location.href}}))}},{kind:"method",key:"_getChanglogURL",value:function(){const e=this._getRepository(this.hacs.repositories,this.repository);if(e)return"commit"===e.version_or_commit?`https://github.com/${e.full_name}/compare/${e.installed_version}...${e.available_version}`:`https://github.com/${e.full_name}/releases`}},{kind:"get",static:!0,key:"styles",value:function(){return[$,w,c`
        .content {
          width: 360px;
          display: contents;
        }
        ha-expansion-panel {
          margin: 8px 0;
        }
        ha-expansion-panel[expanded] {
          padding-bottom: 16px;
        }

        .secondary {
          display: flex;
        }
        .message {
          text-align: center;
          margin: 0;
        }
        .version-container {
          margin: 24px 0 12px 0;
          width: 360px;
          min-width: 100%;
          max-width: 100%;
          display: flex;
          flex-direction: row;
        }
        .version-element {
          display: flex;
          flex-direction: column;
          flex: 1;
          padding: 0 12px;
          text-align: center;
        }
        .version-text {
          color: var(--secondary-text-color);
        }
        .version-number {
          font-size: 1.5rem;
          margin-bottom: 4px;
        }
      `]}}]}}),p);export{E as HacsUpdateDialog};
