import{a as o,H as s,e as t,t as i,$ as e,Z as a,a0 as r,a1 as c,a2 as d,a3 as n,a4 as h,s as l,d as p,r as m,n as u}from"./main-c805434e.js";import{c as v}from"./c.4a97632a.js";import"./c.6b338b4b.js";import"./c.7e9628d7.js";import"./c.28b63723.js";import"./c.70de318c.js";import"./c.ff857a48.js";import"./c.fa497e12.js";import"./c.8e28b461.js";import"./c.249923af.js";import"./c.9175c851.js";import"./c.1fc70989.js";import"./c.78610cf7.js";let g=o([u("hacs-custom-repositories-dialog")],(function(o,s){return{F:class extends s{constructor(...s){super(...s),o(this)}},d:[{kind:"field",decorators:[t()],key:"_error",value:void 0},{kind:"field",decorators:[i()],key:"_progress",value:()=>!1},{kind:"field",decorators:[i()],key:"_addRepositoryData",value:()=>({category:void 0,repository:void 0})},{kind:"field",decorators:[i()],key:"_customRepositories",value:void 0},{kind:"method",key:"shouldUpdate",value:function(o){return o.has("narrow")||o.has("active")||o.has("_error")||o.has("_addRepositoryData")||o.has("_customRepositories")||o.has("_progress")}},{kind:"method",key:"render",value:function(){var o,s;if(!this.active)return e``;const t=[{name:"repository",selector:{text:{}}},{name:"category",selector:{select:{mode:"dropdown",options:this.hacs.configuration.categories.map((o=>({value:o,label:this.hacs.localize(`common.${o}`)})))}}}];return e`
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
            ${null!==(o=this._error)&&void 0!==o&&o.message?e`<ha-alert alert-type="error" .rtl=${v(this.hass)}>
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
    `}},{kind:"method",key:"firstUpdated",value:function(){var o;r(this.hass,(o=>this._error=o),c.ERROR),this._customRepositories=null===(o=this.hacs.repositories)||void 0===o?void 0:o.filter((o=>o.custom))}},{kind:"method",key:"_valueChanged",value:function(o){this._addRepositoryData=o.detail.value}},{kind:"method",key:"_addRepository",value:async function(){if(this._error=void 0,this._progress=!0,!this._addRepositoryData.category)return void(this._error={message:this.hacs.localize("dialog_custom_repositories.no_category")});if(!this._addRepositoryData.repository)return void(this._error={message:this.hacs.localize("dialog_custom_repositories.no_repository")});await d(this.hass,this._addRepositoryData.repository,this._addRepositoryData.category);const o=await n(this.hass);this.dispatchEvent(new CustomEvent("update-hacs",{detail:{repositories:o},bubbles:!0,composed:!0})),this._customRepositories=o.filter((o=>o.custom)),this._progress=!1}},{kind:"method",key:"_removeRepository",value:async function(o){this._error=void 0,await h(this.hass,o);const s=await n(this.hass);this.dispatchEvent(new CustomEvent("update-hacs",{detail:{repositories:s},bubbles:!0,composed:!0})),this._customRepositories=s.filter((o=>o.custom))}},{kind:"method",key:"_showReopsitoryInfo",value:async function(o){this.dispatchEvent(new CustomEvent("hacs-dialog-secondary",{detail:{type:"repository-info",repository:o},bubbles:!0,composed:!0}))}},{kind:"get",static:!0,key:"styles",value:function(){return[l,p,m`
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
      `]}}]}}),s);export{g as HacsCustomRepositoriesDialog};
