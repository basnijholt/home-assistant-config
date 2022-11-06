import{a as s,H as i,e,t,L as a,N as o,at as r,a0 as n,a1 as l,$ as c,o as h,au as d,ai as p,s as m,d as _,r as v,n as u}from"./main-ad130be7.js";import{c as y}from"./c.4a97632a.js";import"./c.f1291e50.js";import"./c.2ee83bd0.js";import{s as g}from"./c.4266acdb.js";import{f,a as $}from"./c.fe747ba2.js";import{m as b}from"./c.f6611997.js";import{u as x}from"./c.25ed1ae4.js";import"./c.5d3ce9d6.js";import"./c.82e03b89.js";import"./c.743a15a1.js";import"./c.710a50fc.js";import"./c.8e28b461.js";let k=s([u("hacs-update-dialog")],(function(s,i){class u extends i{constructor(...i){super(...i),s(this)}}return{F:u,d:[{kind:"field",decorators:[e()],key:"repository",value:void 0},{kind:"field",decorators:[e({type:Boolean})],key:"_updating",value:()=>!1},{kind:"field",decorators:[e()],key:"_error",value:void 0},{kind:"field",decorators:[e({attribute:!1})],key:"_releaseNotes",value:()=>[]},{kind:"field",decorators:[t()],key:"_repository",value:void 0},{kind:"method",key:"firstUpdated",value:async function(s){a(o(u.prototype),"firstUpdated",this).call(this,s),this._repository=await f(this.hass,this.repository),this._repository&&("commit"!==this._repository.version_or_commit&&(this._releaseNotes=await r(this.hass,String(this._repository.id))),n(this.hass,(s=>this._error=s),l.ERROR))}},{kind:"method",key:"render",value:function(){var s;return this.active&&this._repository?c`
      <hacs-dialog
        .active=${this.active}
        .title=${this.hacs.localize("dialog_update.title")}
        .hass=${this.hass}
      >
        <div class=${h({content:!0,narrow:this.narrow})}>
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
                .path=${d}
              ></ha-svg-icon>
            </span>

            <div class="version-element">
                <span class="version-number">${this._repository.available_version}</span>
                <small class="version-text">${this.hacs.localize("dialog_update.available_version")}</small>
              </div>
            </div>
          </div>

          ${this._releaseNotes.length>0?this._releaseNotes.map((s=>c`
                    <ha-expansion-panel
                      .header=${s.name&&s.name!==s.tag?`${s.tag}: ${s.name}`:s.tag}
                      outlined
                      ?expanded=${1===this._releaseNotes.length}
                    >
                      ${s.body?b.html(s.body,this._repository):this.hacs.localize("dialog_update.no_info")}
                    </ha-expansion-panel>
                  `)):""}
          ${this._repository.can_download?"":c`<ha-alert alert-type="error" .rtl=${y(this.hass)}>
                  ${this.hacs.localize("confirm.home_assistant_version_not_correct",{haversion:this.hass.config.version,minversion:this._repository.homeassistant})}
                </ha-alert>`}
          ${"integration"===this._repository.category?c`<p>${this.hacs.localize("dialog_download.restart")}</p>`:""}
          ${null!==(s=this._error)&&void 0!==s&&s.message?c`<ha-alert alert-type="error" .rtl=${y(this.hass)}>
                  ${this._error.message}
                </ha-alert>`:""}
        </div>
        <mwc-button
          slot="primaryaction"
          ?disabled=${!this._repository.can_download}
          @click=${this._updateRepository}
          raised
          >
          ${this._updating?c`<ha-circular-progress active size="small"></ha-circular-progress>`:this.hacs.localize("common.update")}
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
    `:c``}},{kind:"method",key:"_updateRepository",value:async function(){this._updating=!0,"commit"!==this._repository.version_or_commit?await $(this.hass,String(this._repository.id),this._repository.available_version):await $(this.hass,String(this._repository.id)),"plugin"===this._repository.category&&"storage"===this.hacs.info.lovelace_mode&&await x(this.hass,this._repository,this._repository.available_version),this._updating=!1,this.dispatchEvent(new Event("hacs-dialog-closed",{bubbles:!0,composed:!0})),"plugin"===this._repository.category&&g(this,{title:this.hacs.localize("common.reload"),text:c`${this.hacs.localize("dialog.reload.description")}<br />${this.hacs.localize("dialog.reload.confirm")}`,dismissText:this.hacs.localize("common.cancel"),confirmText:this.hacs.localize("common.reload"),confirm:()=>{p.location.href=p.location.href}})}},{kind:"method",key:"_getChanglogURL",value:function(){return"commit"===this._repository.version_or_commit?`https://github.com/${this._repository.full_name}/compare/${this._repository.installed_version}...${this._repository.available_version}`:`https://github.com/${this._repository.full_name}/releases`}},{kind:"get",static:!0,key:"styles",value:function(){return[m,_,v`
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
      `]}}]}}),i);export{k as HacsUpdateDialog};
