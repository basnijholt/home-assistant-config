import{a as t,H as o,e as s,t as i,m as e,af as a,Y as r,$ as l,ag as h,ah as n,ai as c,aj as d,ak as p,ae as _,d as y,r as m,n as u}from"./main-f3e781b1.js";import{a as v}from"./c.0a038163.js";import"./c.c4dc5ba3.js";import"./c.74dbf101.js";import{s as g}from"./c.ecc9713e.js";import{u as b}from"./c.69bec4b9.js";import"./c.b85cccfb.js";import"./c.f41a074f.js";import"./c.c2b18de6.js";import"./c.9f27b448.js";import"./c.3dc7ab21.js";import"./c.e6514d94.js";import"./c.f1b17fae.js";import"./c.9a62bd84.js";import"./c.5c703026.js";import"./c.fb46b4a0.js";let f=t([u("hacs-download-dialog")],(function(t,o){return{F:class extends o{constructor(...o){super(...o),t(this)}},d:[{kind:"field",decorators:[s()],key:"repository",value:void 0},{kind:"field",decorators:[i()],key:"_toggle",value:()=>!0},{kind:"field",decorators:[i()],key:"_installing",value:()=>!1},{kind:"field",decorators:[i()],key:"_error",value:void 0},{kind:"field",decorators:[i()],key:"_repository",value:void 0},{kind:"field",decorators:[i()],key:"_downloadRepositoryData",value:()=>({beta:!1,version:""})},{kind:"method",key:"shouldUpdate",value:function(t){return t.forEach(((t,o)=>{"hass"===o&&(this.sidebarDocked='"docked"'===window.localStorage.getItem("dockedSidebar")),"repositories"===o&&(this._repository=this._getRepository(this.hacs.repositories,this.repository))})),t.has("sidebarDocked")||t.has("narrow")||t.has("active")||t.has("_toggle")||t.has("_error")||t.has("_repository")||t.has("_downloadRepositoryData")||t.has("_installing")}},{kind:"field",key:"_getRepository",value:()=>e(((t,o)=>null==t?void 0:t.find((t=>t.id===o))))},{kind:"field",key:"_getInstallPath",value:()=>e((t=>{let o=t.local_path;return"theme"===t.category&&(o=`${o}/${t.file_name}`),o}))},{kind:"method",key:"firstUpdated",value:async function(){var t,o;if(this._repository=this._getRepository(this.hacs.repositories,this.repository),null===(t=this._repository)||void 0===t||!t.updated_info){await a(this.hass,this._repository.id);const t=await r(this.hass);this.dispatchEvent(new CustomEvent("update-hacs",{detail:{repositories:t},bubbles:!0,composed:!0})),this._repository=this._getRepository(t,this.repository)}this._toggle=!1,this.hass.connection.subscribeEvents((t=>this._error=t.data),"hacs/error"),this._downloadRepositoryData.beta=this._repository.beta,this._downloadRepositoryData.version="version"===(null===(o=this._repository)||void 0===o?void 0:o.version_or_commit)?this._repository.releases[0]:""}},{kind:"method",key:"render",value:function(){var t;if(!this.active||!this._repository)return l``;const o=this._getInstallPath(this._repository),s=[{type:"boolean",name:"beta"},{type:"select",name:"version",optional:!0,options:"version"===this._repository.version_or_commit?this._repository.releases.map((t=>[t,t])).concat("hacs/integration"===this._repository.full_name||this._repository.hide_default_branch?[]:[[this._repository.default_branch,this._repository.default_branch]]):[]}];return l`
      <hacs-dialog
        .active=${this.active}
        .narrow=${this.narrow}
        .hass=${this.hass}
        .secondary=${this.secondary}
        .title=${this._repository.name}
      >
        <div class="content">
          ${"version"===this._repository.version_or_commit?l`
                <ha-form
                  .disabled=${this._toggle}
                  ?narrow=${this.narrow}
                  .data=${this._downloadRepositoryData}
                  .schema=${s}
                  .computeLabel=${t=>"beta"===t.name?this.hacs.localize("dialog_download.show_beta"):this.hacs.localize("dialog_download.select_version")}
                  @value-changed=${this._valueChanged}
                >
                </ha-form>
              `:""}
          ${this._repository.can_install?"":l`<ha-alert alert-type="error" .rtl=${v(this.hass)}>
                ${this.hacs.localize("confirm.home_assistant_version_not_correct",{haversion:this.hass.config.version,minversion:this._repository.homeassistant})}
              </ha-alert>`}
          <div class="note">
            ${this.hacs.localize("dialog_download.note_downloaded",{location:l`<code>'${o}'</code>`})}
            ${"plugin"===this._repository.category&&"storage"!==this.hacs.status.lovelace_mode?l`
                  <p>${this.hacs.localize("dialog_download.lovelace_instruction")}</p>
                  <pre>
                url: ${h({repository:this._repository,skipTag:!0})}
                type: module
                </pre
                  >
                `:""}
            ${"integration"===this._repository.category?l`<p>${this.hacs.localize("dialog_download.restart")}</p>`:""}
          </div>
          ${null!==(t=this._error)&&void 0!==t&&t.message?l`<ha-alert alert-type="error" .rtl=${v(this.hass)}>
                ${this._error.message}
              </ha-alert>`:""}
        </div>
        <mwc-button
          raised
          slot="primaryaction"
          ?disabled=${!(this._repository.can_install&&!this._toggle&&"version"!==this._repository.version_or_commit)&&!this._downloadRepositoryData.version}
          @click=${this._installRepository}
        >
          ${this._installing?l`<ha-circular-progress active size="small"></ha-circular-progress>`:this.hacs.localize("common.download")}
        </mwc-button>
        <hacs-link slot="secondaryaction" .url="https://github.com/${this._repository.full_name}">
          <mwc-button> ${this.hacs.localize("common.repository")} </mwc-button>
        </hacs-link>
      </hacs-dialog>
    `}},{kind:"method",key:"_valueChanged",value:async function(t){let o=!1;if(this._downloadRepositoryData.beta!==t.detail.value.beta&&(o=!0,this._toggle=!0,await n(this.hass,this.repository)),t.detail.value.version&&(o=!0,this._toggle=!0,await c(this.hass,this.repository,t.detail.value.version)),o){const t=await r(this.hass);this.dispatchEvent(new CustomEvent("update-hacs",{detail:{repositories:t},bubbles:!0,composed:!0})),this._repository=this._getRepository(t,this.repository),this._toggle=!1}this._downloadRepositoryData=t.detail.value}},{kind:"method",key:"_installRepository",value:async function(){var t;if(this._installing=!0,!this._repository)return;const o=this._downloadRepositoryData.version||this._repository.available_version||this._repository.default_branch;"commit"!==(null===(t=this._repository)||void 0===t?void 0:t.version_or_commit)?await d(this.hass,this._repository.id,o):await p(this.hass,this._repository.id),this.hacs.log.debug(this._repository.category,"_installRepository"),this.hacs.log.debug(this.hacs.status.lovelace_mode,"_installRepository"),"plugin"===this._repository.category&&"storage"===this.hacs.status.lovelace_mode&&await b(this.hass,this._repository,o),this._installing=!1,this.dispatchEvent(new Event("hacs-secondary-dialog-closed",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("hacs-dialog-closed",{bubbles:!0,composed:!0})),"plugin"===this._repository.category&&g(this,{title:this.hacs.localize("common.reload"),text:l`${this.hacs.localize("dialog.reload.description")}<br />${this.hacs.localize("dialog.reload.confirm")}`,dismissText:this.hacs.localize("common.cancel"),confirmText:this.hacs.localize("common.reload"),confirm:()=>{_.location.href=_.location.href}})}},{kind:"get",static:!0,key:"styles",value:function(){return[y,m`
        .note {
          margin-top: 12px;
        }
        .lovelace {
          margin-top: 8px;
        }
        pre {
          white-space: pre-line;
          user-select: all;
        }
      `]}}]}}),o);export{f as HacsDonwloadDialog};
