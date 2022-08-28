import{a as o,H as t,e as s,t as e,m as i,a0 as a,a1 as r,$ as l,aj as n,ak as h,a3 as c,ai as d,d as p,r as _,n as m}from"./main-bfa41146.js";import{c as y}from"./c.4a97632a.js";import"./c.866cbf1f.js";import"./c.f9c233d8.js";import{s as v}from"./c.70483bd2.js";import{f as g,r as u,a as f}from"./c.fe747ba2.js";import{u as w}from"./c.ccaee571.js";import"./c.48057b49.js";import"./c.5208e53e.js";import"./c.aa41e25c.js";import"./c.497c36cc.js";import"./c.8e28b461.js";import"./c.476721bc.js";import"./c.a7d20849.js";import"./c.c87dd2e2.js";import"./c.c9ce972e.js";let b=o([m("hacs-download-dialog")],(function(o,t){return{F:class extends t{constructor(...t){super(...t),o(this)}},d:[{kind:"field",decorators:[s()],key:"repository",value:void 0},{kind:"field",decorators:[e()],key:"_toggle",value:()=>!0},{kind:"field",decorators:[e()],key:"_installing",value:()=>!1},{kind:"field",decorators:[e()],key:"_error",value:void 0},{kind:"field",decorators:[e()],key:"_repository",value:void 0},{kind:"field",decorators:[e()],key:"_downloadRepositoryData",value:()=>({beta:!1,version:""})},{kind:"method",key:"shouldUpdate",value:function(o){return o.forEach(((o,t)=>{"hass"===t&&(this.sidebarDocked='"docked"'===window.localStorage.getItem("dockedSidebar")),"repositories"===t&&this._fetchRepository()})),o.has("sidebarDocked")||o.has("narrow")||o.has("active")||o.has("_toggle")||o.has("_error")||o.has("_repository")||o.has("_downloadRepositoryData")||o.has("_installing")}},{kind:"field",key:"_getInstallPath",value:()=>i((o=>{let t=o.local_path;return"theme"===o.category&&(t=`${t}/${o.file_name}`),t}))},{kind:"method",key:"firstUpdated",value:async function(){var o;await this._fetchRepository(),this._toggle=!1,a(this.hass,(o=>this._error=o),r.ERROR),this._downloadRepositoryData.beta=this._repository.beta,this._downloadRepositoryData.version="version"===(null===(o=this._repository)||void 0===o?void 0:o.version_or_commit)?this._repository.releases[0]:""}},{kind:"method",key:"_fetchRepository",value:async function(){this._repository=await g(this.hass,this.repository)}},{kind:"method",key:"render",value:function(){var o;if(!this.active||!this._repository)return l``;const t=this._getInstallPath(this._repository),s=[{name:"beta",selector:{boolean:{}}},{name:"version",selector:{select:{options:"version"===this._repository.version_or_commit?this._repository.releases.concat("hacs/integration"===this._repository.full_name||this._repository.hide_default_branch?[]:[this._repository.default_branch]):[],mode:"dropdown"}}}];return l`
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
                  .computeLabel=${o=>"beta"===o.name?this.hacs.localize("dialog_download.show_beta"):this.hacs.localize("dialog_download.select_version")}
                  @value-changed=${this._valueChanged}
                >
                </ha-form>
              `:""}
          ${this._repository.can_download?"":l`<ha-alert alert-type="error" .rtl=${y(this.hass)}>
                ${this.hacs.localize("confirm.home_assistant_version_not_correct",{haversion:this.hass.config.version,minversion:this._repository.homeassistant})}
              </ha-alert>`}
          <div class="note">
            ${this.hacs.localize("dialog_download.note_downloaded",{location:l`<code>'${t}'</code>`})}
            ${"plugin"===this._repository.category&&"storage"!==this.hacs.info.lovelace_mode?l`
                  <p>${this.hacs.localize("dialog_download.lovelace_instruction")}</p>
                  <pre>
                url: ${n({repository:this._repository,skipTag:!0})}
                type: module
                </pre
                  >
                `:""}
            ${"integration"===this._repository.category?l`<p>${this.hacs.localize("dialog_download.restart")}</p>`:""}
          </div>
          ${null!==(o=this._error)&&void 0!==o&&o.message?l`<ha-alert alert-type="error" .rtl=${y(this.hass)}>
                ${this._error.message}
              </ha-alert>`:""}
        </div>
        <mwc-button
          slot="primaryaction"
          ?disabled=${!(this._repository.can_download&&!this._toggle&&"version"!==this._repository.version_or_commit)&&!this._downloadRepositoryData.version}
          @click=${this._installRepository}
        >
          ${this._installing?l`<ha-circular-progress active size="small"></ha-circular-progress>`:this.hacs.localize("common.download")}
        </mwc-button>
      </hacs-dialog>
    `}},{kind:"method",key:"_valueChanged",value:async function(o){let t=!1;if(this._downloadRepositoryData.beta!==o.detail.value.beta&&(t=!0,this._toggle=!0,await h(this.hass,this.repository,o.detail.value.beta)),o.detail.value.version&&(t=!0,this._toggle=!0,await u(this.hass,this.repository,o.detail.value.version)),t){const o=await c(this.hass);await this._fetchRepository(),this.dispatchEvent(new CustomEvent("update-hacs",{detail:{repositories:o},bubbles:!0,composed:!0})),this._toggle=!1}this._downloadRepositoryData=o.detail.value}},{kind:"method",key:"_installRepository",value:async function(){var o;if(this._installing=!0,!this._repository)return;const t=this._downloadRepositoryData.version||this._repository.available_version||this._repository.default_branch;"commit"!==(null===(o=this._repository)||void 0===o?void 0:o.version_or_commit)?await f(this.hass,String(this._repository.id),t):await f(this.hass,String(this._repository.id)),this.hacs.log.debug(this._repository.category,"_installRepository"),this.hacs.log.debug(this.hacs.info.lovelace_mode,"_installRepository"),"plugin"===this._repository.category&&"storage"===this.hacs.info.lovelace_mode&&await w(this.hass,this._repository,t),this._installing=!1,this.dispatchEvent(new Event("hacs-secondary-dialog-closed",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("hacs-dialog-closed",{bubbles:!0,composed:!0})),"plugin"===this._repository.category&&v(this,{title:this.hacs.localize("common.reload"),text:l`${this.hacs.localize("dialog.reload.description")}<br />${this.hacs.localize("dialog.reload.confirm")}`,dismissText:this.hacs.localize("common.cancel"),confirmText:this.hacs.localize("common.reload"),confirm:()=>{d.location.href=d.location.href}})}},{kind:"get",static:!0,key:"styles",value:function(){return[p,_`
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
      `]}}]}}),t);export{b as HacsDonwloadDialog};
