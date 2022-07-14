import{a as e,h as i,e as t,t as a,i as s,$ as o,at as r,o as n,A as d,ae as l,r as c,n as h,H as p,L as m,N as u,au as y,a0 as v,a1 as g,av as _,ai as x,s as f,d as k}from"./main-7bc9a818.js";import{c as b}from"./c.4a97632a.js";import"./c.fb76e5d5.js";import{s as $}from"./c.38b86040.js";import{f as w,a as z}from"./c.fe747ba2.js";import{m as j}from"./c.3507790e.js";import{u as C}from"./c.0681dd5f.js";import"./c.e6921cf4.js";import"./c.18158037.js";import"./c.743a15a1.js";import"./c.fc1fab2b.js";import"./c.8e28b461.js";e([h("ha-expansion-panel")],(function(e,i){return{F:class extends i{constructor(...i){super(...i),e(this)}},d:[{kind:"field",decorators:[t({type:Boolean,reflect:!0})],key:"expanded",value:()=>!1},{kind:"field",decorators:[t({type:Boolean,reflect:!0})],key:"outlined",value:()=>!1},{kind:"field",decorators:[t()],key:"header",value:void 0},{kind:"field",decorators:[t()],key:"secondary",value:void 0},{kind:"field",decorators:[a()],key:"_showContent",value(){return this.expanded}},{kind:"field",decorators:[s(".container")],key:"_container",value:void 0},{kind:"method",key:"render",value:function(){return o`
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
          .path=${r}
          class="summary-icon ${n({expanded:this.expanded})}"
        ></ha-svg-icon>
      </div>
      <div
        class="container ${n({expanded:this.expanded})}"
        @transitionend=${this._handleTransitionEnd}
        role="region"
        aria-labelledby="summary"
        aria-hidden=${!this.expanded}
        tabindex="-1"
      >
        ${this._showContent?o`<slot></slot>`:""}
      </div>
    `}},{kind:"method",key:"willUpdate",value:function(e){e.has("expanded")&&this.expanded&&(this._showContent=this.expanded)}},{kind:"method",key:"_handleTransitionEnd",value:function(){this._container.style.removeProperty("height"),this._showContent=this.expanded}},{kind:"method",key:"_toggleContainer",value:async function(e){if("keydown"===e.type&&"Enter"!==e.key&&" "!==e.key)return;e.preventDefault();const i=!this.expanded;d(this,"expanded-will-change",{expanded:i}),i&&(this._showContent=!0,await l());const t=this._container.scrollHeight;this._container.style.height=`${t}px`,i||setTimeout((()=>{this._container.style.height="0px"}),0),this.expanded=i,d(this,"expanded-changed",{expanded:this.expanded})}},{kind:"get",static:!0,key:"styles",value:function(){return c`
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
    `}}]}}),i);let R=e([h("hacs-update-dialog")],(function(e,i){class s extends i{constructor(...i){super(...i),e(this)}}return{F:s,d:[{kind:"field",decorators:[t()],key:"repository",value:void 0},{kind:"field",decorators:[t({type:Boolean})],key:"_updating",value:()=>!1},{kind:"field",decorators:[t()],key:"_error",value:void 0},{kind:"field",decorators:[t({attribute:!1})],key:"_releaseNotes",value:()=>[]},{kind:"field",decorators:[a()],key:"_repository",value:void 0},{kind:"method",key:"firstUpdated",value:async function(e){m(u(s.prototype),"firstUpdated",this).call(this,e),this._repository=await w(this.hass,this.repository),this._repository&&("commit"!==this._repository.version_or_commit&&(this._releaseNotes=await y(this.hass,String(this._repository.id))),v(this.hass,(e=>this._error=e),g.ERROR))}},{kind:"method",key:"render",value:function(){var e;return this.active&&this._repository?o`
      <hacs-dialog
        .active=${this.active}
        .title=${this.hacs.localize("dialog_update.title")}
        .hass=${this.hass}
      >
        <div class=${n({content:!0,narrow:this.narrow})}>
          <p class="message">
            ${this.hacs.localize("dialog_update.message",{name:this._repository.name})}
          </p>
          <div class="version-container">
            <div class="version-element">
              <span class="version-number">${this._repository.installed_version}</span>
              <small class="version-text">${this.hacs.localize("dialog_update.downloaded_version")}</small>
            </div>

            <span class="version-separator">
              <ha-svg-icon
                .path=${_}
              ></ha-svg-icon>
            </span>

            <div class="version-element">
                <span class="version-number">${this._repository.available_version}</span>
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
                      ${e.body?j.html(e.body,this._repository):this.hacs.localize("dialog_update.no_info")}
                    </ha-expansion-panel>
                  `)):""}
          ${this._repository.can_download?"":o`<ha-alert alert-type="error" .rtl=${b(this.hass)}>
                  ${this.hacs.localize("confirm.home_assistant_version_not_correct",{haversion:this.hass.config.version,minversion:this._repository.homeassistant})}
                </ha-alert>`}
          ${"integration"===this._repository.category?o`<p>${this.hacs.localize("dialog_download.restart")}</p>`:""}
          ${null!==(e=this._error)&&void 0!==e&&e.message?o`<ha-alert alert-type="error" .rtl=${b(this.hass)}>
                  ${this._error.message}
                </ha-alert>`:""}
        </div>
        <mwc-button
          slot="primaryaction"
          ?disabled=${!this._repository.can_download}
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
          <hacs-link .url="https://github.com/${this._repository.full_name}">
            <mwc-button>${this.hacs.localize("common.repository")}
          </mwc-button>
          </hacs-link>
        </div>
      </hacs-dialog>
    `:o``}},{kind:"method",key:"_updateRepository",value:async function(){this._updating=!0,"commit"!==this._repository.version_or_commit?await z(this.hass,String(this._repository.id),this._repository.available_version):await z(this.hass,String(this._repository.id)),"plugin"===this._repository.category&&"storage"===this.hacs.info.lovelace_mode&&await C(this.hass,this._repository,this._repository.available_version),this._updating=!1,this.dispatchEvent(new Event("hacs-dialog-closed",{bubbles:!0,composed:!0})),"plugin"===this._repository.category&&$(this,{title:this.hacs.localize("common.reload"),text:o`${this.hacs.localize("dialog.reload.description")}<br />${this.hacs.localize("dialog.reload.confirm")}`,dismissText:this.hacs.localize("common.cancel"),confirmText:this.hacs.localize("common.reload"),confirm:()=>{x.location.href=x.location.href}})}},{kind:"method",key:"_getChanglogURL",value:function(){return"commit"===this._repository.version_or_commit?`https://github.com/${this._repository.full_name}/compare/${this._repository.installed_version}...${this._repository.available_version}`:`https://github.com/${this._repository.full_name}/releases`}},{kind:"get",static:!0,key:"styles",value:function(){return[f,k,c`
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
      `]}}]}}),p);export{R as HacsUpdateDialog};
