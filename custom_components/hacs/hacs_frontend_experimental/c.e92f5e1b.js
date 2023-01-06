import{ah as o,ai as e,aj as s,ak as t,al as i,_ as a,H as r,e as l,t as n,a7 as h,w as d,a as c,y as p,am as _,g as y,ag as u,c as m,d as v,n as g}from"./main-73688df5.js";import{c as f}from"./c.98f99622.js";import"./c.3e68342a.js";import{s as w}from"./c.900ba4f7.js";import{f as b,r as k,a as $}from"./c.fe747ba2.js";import"./c.0dbdcc54.js";import"./c.4e724b62.js";import"./c.8e28b461.js";import"./c.33f8c39f.js";import"./c.dfdb15e4.js";import"./c.bb1e9c94.js";let R=a([g("hacs-download-dialog")],(function(a,r){return{F:class extends r{constructor(...o){super(...o),a(this)}},d:[{kind:"field",decorators:[l()],key:"repository",value:void 0},{kind:"field",decorators:[n()],key:"_toggle",value:()=>!0},{kind:"field",decorators:[n()],key:"_installing",value:()=>!1},{kind:"field",decorators:[n()],key:"_error",value:void 0},{kind:"field",decorators:[n()],key:"_repository",value:void 0},{kind:"field",decorators:[n()],key:"_downloadRepositoryData",value:()=>({beta:!1,version:""})},{kind:"method",key:"shouldUpdate",value:function(o){return o.forEach(((o,e)=>{var s,t;"hass"===e&&(this.sidebarDocked='"docked"'===(null===(s=window)||void 0===s||null===(t=s.localStorage)||void 0===t?void 0:t.getItem("dockedSidebar")));"repositories"===e&&this._fetchRepository()})),o.has("sidebarDocked")||o.has("narrow")||o.has("active")||o.has("_toggle")||o.has("_error")||o.has("_repository")||o.has("_downloadRepositoryData")||o.has("_installing")}},{kind:"field",key:"_getInstallPath",value:()=>h((o=>{let e=o.local_path;return"theme"===o.category&&(e=`${e}/${o.file_name}`),e}))},{kind:"method",key:"firstUpdated",value:async function(){var o;await this._fetchRepository(),this._toggle=!1,d(this.hass,(o=>this._error=o),c.ERROR),this._downloadRepositoryData.beta=this._repository.beta,this._downloadRepositoryData.version="version"===(null===(o=this._repository)||void 0===o?void 0:o.version_or_commit)?this._repository.releases[0]:""}},{kind:"method",key:"_fetchRepository",value:async function(){this._repository=await b(this.hass,this.repository)}},{kind:"method",key:"render",value:function(){var o;if(!this.active||!this._repository)return p``;const e=this._getInstallPath(this._repository),t=[{name:"beta",selector:{boolean:{}}},{name:"version",selector:{select:{options:"version"===this._repository.version_or_commit?this._repository.releases.concat("hacs/integration"===this._repository.full_name||this._repository.hide_default_branch?[]:[this._repository.default_branch]):[],mode:"dropdown"}}}];return p`
      <hacs-dialog
        .active=${this.active}
        .narrow=${this.narrow}
        .hass=${this.hass}
        .secondary=${this.secondary}
        .title=${this._repository.name}
      >
        <div class="content">
          ${"version"===this._repository.version_or_commit?p`
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
          ${this._repository.can_download?"":p`<ha-alert alert-type="error" .rtl=${f(this.hass)}>
                ${this.hacs.localize("confirm.home_assistant_version_not_correct",{haversion:this.hass.config.version,minversion:this._repository.homeassistant})}
              </ha-alert>`}
          <div class="note">
            ${this.hacs.localize("dialog_download.note_downloaded",{location:p`<code>'${e}'</code>`})}
            ${"plugin"===this._repository.category&&"storage"!==this.hacs.info.lovelace_mode?p`
                  <p>${this.hacs.localize("dialog_download.lovelace_instruction")}</p>
                  <pre>
                url: ${s({repository:this._repository,skipTag:!0})}
                type: module
                </pre
                  >
                `:""}
            ${"integration"===this._repository.category?p`<p>${this.hacs.localize("dialog_download.restart")}</p>`:""}
          </div>
          ${null!==(o=this._error)&&void 0!==o&&o.message?p`<ha-alert alert-type="error" .rtl=${f(this.hass)}>
                ${this._error.message}
              </ha-alert>`:""}
        </div>
        <mwc-button
          slot="primaryaction"
          ?disabled=${!(this._repository.can_download&&!this._toggle&&"version"!==this._repository.version_or_commit)&&!this._downloadRepositoryData.version}
          @click=${this._installRepository}
        >
          ${this._installing?p`<ha-circular-progress active size="small"></ha-circular-progress>`:this.hacs.localize("common.download")}
        </mwc-button>
      </hacs-dialog>
    `}},{kind:"method",key:"_valueChanged",value:async function(o){let e=!1;if(this._downloadRepositoryData.beta!==o.detail.value.beta&&(e=!0,this._toggle=!0,await _(this.hass,this.repository,o.detail.value.beta)),o.detail.value.version&&(e=!0,this._toggle=!0,await k(this.hass,this.repository,o.detail.value.version)),e){const o=await y(this.hass);await this._fetchRepository(),this.dispatchEvent(new CustomEvent("update-hacs",{detail:{repositories:o},bubbles:!0,composed:!0})),this._toggle=!1}this._downloadRepositoryData=o.detail.value}},{kind:"method",key:"_installRepository",value:async function(){var a;if(this._installing=!0,!this._repository)return;const r=this._downloadRepositoryData.version||this._repository.available_version||this._repository.default_branch;"commit"!==(null===(a=this._repository)||void 0===a?void 0:a.version_or_commit)?await $(this.hass,String(this._repository.id),r):await $(this.hass,String(this._repository.id)),this.hacs.log.debug(this._repository.category,"_installRepository"),this.hacs.log.debug(this.hacs.info.lovelace_mode,"_installRepository"),"plugin"===this._repository.category&&"storage"===this.hacs.info.lovelace_mode&&await async function(a,r,l){const n=new o("updateLovelaceResources"),h=await e(a),d=`/hacsfiles/${r.full_name.split("/")[1]}`,c=s({repository:r,version:l}),p=h.find((o=>o.url.includes(d)));n.debug({namespace:d,url:c,exsisting:p}),p&&p.url!==c?(n.debug(`Updating exsusting resource for ${d}`),await t(a,{url:c,resource_id:p.id,res_type:p.type})):h.map((o=>o.url)).includes(c)||(n.debug(`Adding ${c} to Lovelace resources`),await i(a,{url:c,res_type:"module"}))}(this.hass,this._repository,r),this._installing=!1,this.dispatchEvent(new Event("hacs-secondary-dialog-closed",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("hacs-dialog-closed",{bubbles:!0,composed:!0})),"plugin"===this._repository.category&&w(this,{title:this.hacs.localize("common.reload"),text:p`${this.hacs.localize("dialog.reload.description")}<br />${this.hacs.localize("dialog.reload.confirm")}`,dismissText:this.hacs.localize("common.cancel"),confirmText:this.hacs.localize("common.reload"),confirm:()=>{u.location.href=u.location.href}})}},{kind:"get",static:!0,key:"styles",value:function(){return[m,v`
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
      `]}}]}}),r);export{R as HacsDonwloadDialog};
