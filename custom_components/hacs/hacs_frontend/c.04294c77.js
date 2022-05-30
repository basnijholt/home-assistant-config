import{a as o,H as s,e as t,t as i,m as e,aj as a,a3 as r,a0 as l,a1 as h,$ as n,ak as c,al as d,am as p,an as _,ao as y,ai as m,d as u,r as v,n as g}from"./main-c805434e.js";import{c as f}from"./c.4a97632a.js";import"./c.6b338b4b.js";import"./c.7e9628d7.js";import{s as b}from"./c.791b7770.js";import{u as w}from"./c.15b2193e.js";import"./c.d49c601d.js";import"./c.70de318c.js";import"./c.ff857a48.js";import"./c.fa497e12.js";import"./c.8e28b461.js";import"./c.249923af.js";import"./c.9175c851.js";import"./c.1fc70989.js";import"./c.78610cf7.js";let k=o([g("hacs-download-dialog")],(function(o,s){return{F:class extends s{constructor(...s){super(...s),o(this)}},d:[{kind:"field",decorators:[t()],key:"repository",value:void 0},{kind:"field",decorators:[i()],key:"_toggle",value:()=>!0},{kind:"field",decorators:[i()],key:"_installing",value:()=>!1},{kind:"field",decorators:[i()],key:"_error",value:void 0},{kind:"field",decorators:[i()],key:"_repository",value:void 0},{kind:"field",decorators:[i()],key:"_downloadRepositoryData",value:()=>({beta:!1,version:""})},{kind:"method",key:"shouldUpdate",value:function(o){return o.forEach(((o,s)=>{"hass"===s&&(this.sidebarDocked='"docked"'===window.localStorage.getItem("dockedSidebar")),"repositories"===s&&(this._repository=this._getRepository(this.hacs.repositories,this.repository))})),o.has("sidebarDocked")||o.has("narrow")||o.has("active")||o.has("_toggle")||o.has("_error")||o.has("_repository")||o.has("_downloadRepositoryData")||o.has("_installing")}},{kind:"field",key:"_getRepository",value:()=>e(((o,s)=>null==o?void 0:o.find((o=>o.id===s))))},{kind:"field",key:"_getInstallPath",value:()=>e((o=>{let s=o.local_path;return"theme"===o.category&&(s=`${s}/${o.file_name}`),s}))},{kind:"method",key:"firstUpdated",value:async function(){var o,s;if(this._repository=this._getRepository(this.hacs.repositories,this.repository),null===(o=this._repository)||void 0===o||!o.updated_info){await a(this.hass,this._repository.id);const o=await r(this.hass);this.dispatchEvent(new CustomEvent("update-hacs",{detail:{repositories:o},bubbles:!0,composed:!0})),this._repository=this._getRepository(o,this.repository)}this._toggle=!1,l(this.hass,(o=>this._error=o),h.ERROR),this._downloadRepositoryData.beta=this._repository.beta,this._downloadRepositoryData.version="version"===(null===(s=this._repository)||void 0===s?void 0:s.version_or_commit)?this._repository.releases[0]:""}},{kind:"method",key:"render",value:function(){var o;if(!this.active||!this._repository)return n``;const s=this._getInstallPath(this._repository),t=[{name:"beta",selector:{boolean:{}}},{name:"version",selector:{select:{options:"version"===this._repository.version_or_commit?this._repository.releases.concat("hacs/integration"===this._repository.full_name||this._repository.hide_default_branch?[]:[this._repository.default_branch]):[],mode:"dropdown"}}}];return n`
      <hacs-dialog
        .active=${this.active}
        .narrow=${this.narrow}
        .hass=${this.hass}
        .secondary=${this.secondary}
        .title=${this._repository.name}
      >
        <div class="content">
          ${"version"===this._repository.version_or_commit?n`
                <ha-form
                  .disabled=${this._toggle}
                  ?narrow=${this.narrow}
                  .data=${this._downloadRepositoryData}
                  .schema=${t}
                  .computeLabel=${o=>"beta"===o.name?this.hacs.localize("dialog_download.show_beta"):this.hacs.localize("dialog_download.select_version")}
                  @value-changed=${this._valueChanged}
                >
                </ha-form>
              `:""}
          ${this._repository.can_install?"":n`<ha-alert alert-type="error" .rtl=${f(this.hass)}>
                ${this.hacs.localize("confirm.home_assistant_version_not_correct",{haversion:this.hass.config.version,minversion:this._repository.homeassistant})}
              </ha-alert>`}
          <div class="note">
            ${this.hacs.localize("dialog_download.note_downloaded",{location:n`<code>'${s}'</code>`})}
            ${"plugin"===this._repository.category&&"storage"!==this.hacs.status.lovelace_mode?n`
                  <p>${this.hacs.localize("dialog_download.lovelace_instruction")}</p>
                  <pre>
                url: ${c({repository:this._repository,skipTag:!0})}
                type: module
                </pre
                  >
                `:""}
            ${"integration"===this._repository.category?n`<p>${this.hacs.localize("dialog_download.restart")}</p>`:""}
          </div>
          ${null!==(o=this._error)&&void 0!==o&&o.message?n`<ha-alert alert-type="error" .rtl=${f(this.hass)}>
                ${this._error.message}
              </ha-alert>`:""}
        </div>
        <mwc-button
          raised
          slot="primaryaction"
          ?disabled=${!(this._repository.can_install&&!this._toggle&&"version"!==this._repository.version_or_commit)&&!this._downloadRepositoryData.version}
          @click=${this._installRepository}
        >
          ${this._installing?n`<ha-circular-progress active size="small"></ha-circular-progress>`:this.hacs.localize("common.download")}
        </mwc-button>
        <hacs-link slot="secondaryaction" .url="https://github.com/${this._repository.full_name}">
          <mwc-button> ${this.hacs.localize("common.repository")} </mwc-button>
        </hacs-link>
      </hacs-dialog>
    `}},{kind:"method",key:"_valueChanged",value:async function(o){let s=!1;if(this._downloadRepositoryData.beta!==o.detail.value.beta&&(s=!0,this._toggle=!0,await d(this.hass,this.repository)),o.detail.value.version&&(s=!0,this._toggle=!0,await p(this.hass,this.repository,o.detail.value.version)),s){const o=await r(this.hass);this.dispatchEvent(new CustomEvent("update-hacs",{detail:{repositories:o},bubbles:!0,composed:!0})),this._repository=this._getRepository(o,this.repository),this._toggle=!1}this._downloadRepositoryData=o.detail.value}},{kind:"method",key:"_installRepository",value:async function(){var o;if(this._installing=!0,!this._repository)return;const s=this._downloadRepositoryData.version||this._repository.available_version||this._repository.default_branch;"commit"!==(null===(o=this._repository)||void 0===o?void 0:o.version_or_commit)?await _(this.hass,this._repository.id,s):await y(this.hass,this._repository.id),this.hacs.log.debug(this._repository.category,"_installRepository"),this.hacs.log.debug(this.hacs.status.lovelace_mode,"_installRepository"),"plugin"===this._repository.category&&"storage"===this.hacs.status.lovelace_mode&&await w(this.hass,this._repository,s),this._installing=!1,this.dispatchEvent(new Event("hacs-secondary-dialog-closed",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("hacs-dialog-closed",{bubbles:!0,composed:!0})),"plugin"===this._repository.category&&b(this,{title:this.hacs.localize("common.reload"),text:n`${this.hacs.localize("dialog.reload.description")}<br />${this.hacs.localize("dialog.reload.confirm")}`,dismissText:this.hacs.localize("common.cancel"),confirmText:this.hacs.localize("common.reload"),confirm:()=>{m.location.href=m.location.href}})}},{kind:"get",static:!0,key:"styles",value:function(){return[u,v`
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
      `]}}]}}),s);export{k as HacsDonwloadDialog};
