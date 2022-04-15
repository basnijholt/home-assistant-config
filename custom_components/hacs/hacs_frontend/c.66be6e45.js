import{a as o,H as s,e as t,t as i,$ as e,W as a,X as r,Y as c,Z as d,s as n,d as h,r as l,n as p}from"./main-f3e781b1.js";import{a as m}from"./c.0a038163.js";import"./c.c4dc5ba3.js";import"./c.74dbf101.js";import"./c.02cb8bae.js";import"./c.f41a074f.js";import"./c.c2b18de6.js";import"./c.9f27b448.js";import"./c.3dc7ab21.js";import"./c.e6514d94.js";import"./c.f1b17fae.js";import"./c.9a62bd84.js";import"./c.5c703026.js";import"./c.549fa845.js";import"./c.fb46b4a0.js";let u=o([p("hacs-custom-repositories-dialog")],(function(o,s){return{F:class extends s{constructor(...s){super(...s),o(this)}},d:[{kind:"field",decorators:[t()],key:"_error",value:void 0},{kind:"field",decorators:[i()],key:"_progress",value:()=>!1},{kind:"field",decorators:[i()],key:"_addRepositoryData",value:()=>({category:void 0,repository:void 0})},{kind:"field",decorators:[i()],key:"_customRepositories",value:void 0},{kind:"method",key:"shouldUpdate",value:function(o){return o.has("narrow")||o.has("active")||o.has("_error")||o.has("_addRepositoryData")||o.has("_customRepositories")||o.has("_progress")}},{kind:"method",key:"render",value:function(){var o,s;if(!this.active)return e``;const t=[{type:"string",name:"repository"},{type:"select",name:"category",optional:!0,options:this.hacs.configuration.categories.map((o=>[o,this.hacs.localize(`common.${o}`)]))}];return e`
      <hacs-dialog
        .active=${this.active}
        .hass=${this.hass}
        .title=${this.hacs.localize("dialog_custom_repositories.title")}
        scrimClickAction
        escapeKeyAction
        maxWidth
      >
        <div class="content">
          <div class="list" ?narrow=${this.narrow}>
            ${null!==(o=this._error)&&void 0!==o&&o.message?e`<ha-alert alert-type="error" .rtl=${m(this.hass)}>
                  ${this._error.message}
                </ha-alert>`:""}
            ${null===(s=this._customRepositories)||void 0===s?void 0:s.filter((o=>this.hacs.configuration.categories.includes(o.category))).map((o=>e`<ha-settings-row
                  @click=${()=>this._showReopsitoryInfo(String(o.id))}
                >
                  <span slot="heading">${o.name}</span>
                  <span slot="description">${o.full_name} (${o.category})</span>

                  <mwc-icon-button
                    @click=${s=>{s.stopPropagation(),this._removeRepository(o.id)}}
                  >
                    <ha-svg-icon class="delete" .path=${a}></ha-svg-icon>
                  </mwc-icon-button>
                </ha-settings-row>`))}
          </div>
          <ha-form
            ?narrow=${this.narrow}
            .data=${this._addRepositoryData}
            .schema=${t}
            .computeLabel=${o=>"category"===o.name?this.hacs.localize("dialog_custom_repositories.category"):this.hacs.localize("common.repository")}
            @value-changed=${this._valueChanged}
          >
          </ha-form>
        </div>
        <mwc-button
          slot="primaryaction"
          raised
          .disabled=${void 0===this._addRepositoryData.category||void 0===this._addRepositoryData.repository}
          @click=${this._addRepository}
        >
          ${this._progress?e`<ha-circular-progress active size="small"></ha-circular-progress>`:this.hacs.localize("common.add")}
        </mwc-button>
      </hacs-dialog>
    `}},{kind:"method",key:"firstUpdated",value:function(){var o;this.hass.connection.subscribeEvents((o=>this._error=o.data),"hacs/error"),this._customRepositories=null===(o=this.hacs.repositories)||void 0===o?void 0:o.filter((o=>o.custom))}},{kind:"method",key:"_valueChanged",value:function(o){this._addRepositoryData=o.detail.value}},{kind:"method",key:"_addRepository",value:async function(){if(this._error=void 0,this._progress=!0,!this._addRepositoryData.category)return void(this._error={message:this.hacs.localize("dialog_custom_repositories.no_category")});if(!this._addRepositoryData.repository)return void(this._error={message:this.hacs.localize("dialog_custom_repositories.no_repository")});await r(this.hass,this._addRepositoryData.repository,this._addRepositoryData.category);const o=await c(this.hass);this.dispatchEvent(new CustomEvent("update-hacs",{detail:{repositories:o},bubbles:!0,composed:!0})),this._customRepositories=o.filter((o=>o.custom)),this._progress=!1}},{kind:"method",key:"_removeRepository",value:async function(o){this._error=void 0,await d(this.hass,o);const s=await c(this.hass);this.dispatchEvent(new CustomEvent("update-hacs",{detail:{repositories:s},bubbles:!0,composed:!0})),this._customRepositories=s.filter((o=>o.custom))}},{kind:"method",key:"_showReopsitoryInfo",value:async function(o){this.dispatchEvent(new CustomEvent("hacs-dialog-secondary",{detail:{type:"repository-info",repository:o},bubbles:!0,composed:!0}))}},{kind:"get",static:!0,key:"styles",value:function(){return[n,h,l`
        .list {
          position: relative;
          max-height: calc(100vh - 500px);
          overflow: auto;
        }
        ha-form {
          display: block;
          padding: 25px 0;
        }
        ha-form[narrow] {
          background-color: var(--card-background-color);
          bottom: 0;
          position: absolute;
          width: calc(100% - 48px);
        }
        ha-svg-icon {
          --mdc-icon-size: 36px;
        }
        ha-svg-icon:not(.delete) {
          margin-right: 4px;
        }
        ha-settings-row {
          cursor: pointer;
          padding: 0;
        }
        .list[narrow] > ha-settings-row:last-of-type {
          margin-bottom: 162px;
        }
        .delete {
          color: var(--hcv-color-error);
        }

        @media all and (max-width: 450px), all and (max-height: 500px) {
          .list {
            max-height: calc(100vh - 162px);
          }
        }
      `]}}]}}),s);export{u as HacsCustomRepositoriesDialog};
