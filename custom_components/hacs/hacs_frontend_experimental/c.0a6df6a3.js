import{_ as s,H as o,e as t,t as a,y as e,m as i,w as r,a as c,r as d,g as h,b as n,s as l,c as p,d as m,n as u}from"./main-aeda8d41.js";import{c as v}from"./c.0a5b0403.js";import"./c.901fc1be.js";import"./c.c52dfb16.js";import"./c.f1584111.js";import"./c.8e28b461.js";import"./c.aa335625.js";import"./c.a66790a6.js";import"./c.8311c493.js";let g=s([u("hacs-custom-repositories-dialog")],(function(s,o){return{F:class extends o{constructor(...o){super(...o),s(this)}},d:[{kind:"field",decorators:[t()],key:"_error",value:void 0},{kind:"field",decorators:[a()],key:"_progress",value:()=>!1},{kind:"field",decorators:[a()],key:"_addRepositoryData",value:()=>({category:void 0,repository:void 0})},{kind:"field",decorators:[a()],key:"_customRepositories",value:void 0},{kind:"method",key:"shouldUpdate",value:function(s){return s.has("narrow")||s.has("active")||s.has("_error")||s.has("_addRepositoryData")||s.has("_customRepositories")||s.has("_progress")}},{kind:"method",key:"render",value:function(){var s,o;if(!this.active)return e``;const t=[{name:"repository",selector:{text:{}}},{name:"category",selector:{select:{mode:"dropdown",options:this.hacs.info.categories.map((s=>({value:s,label:this.hacs.localize(`common.${s}`)})))}}}];return e`
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
            ${null!==(s=this._error)&&void 0!==s&&s.message?e`<ha-alert alert-type="error" .rtl=${v(this.hass)}>
                  ${this._error.message}
                </ha-alert>`:""}
            ${null===(o=this._customRepositories)||void 0===o?void 0:o.filter((s=>this.hacs.info.categories.includes(s.category))).map((s=>e`<a
                  href="/hacs/repository/${s.id}"
                  @click=${()=>this.active=!1}
                >
                  <ha-settings-row>
                    <span slot="heading">${s.name}</span>
                    <span slot="description">${s.full_name} (${s.category})</span>

                    <mwc-icon-button
                      @click=${o=>{o.preventDefault(),this._removeRepository(String(s.id))}}
                    >
                      <ha-svg-icon class="delete" .path=${i}></ha-svg-icon>
                    </mwc-icon-button>
                  </ha-settings-row>
                </a>`))}
          </div>
          <ha-form
            ?narrow=${this.narrow}
            .data=${this._addRepositoryData}
            .schema=${t}
            .computeLabel=${s=>"category"===s.name?this.hacs.localize("dialog_custom_repositories.category"):this.hacs.localize("common.repository")}
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
    `}},{kind:"method",key:"firstUpdated",value:function(){var s;r(this.hass,(s=>this._error=s),c.ERROR),this._customRepositories=null===(s=this.hacs.repositories)||void 0===s?void 0:s.filter((s=>s.custom))}},{kind:"method",key:"_valueChanged",value:function(s){this._addRepositoryData=s.detail.value}},{kind:"method",key:"_addRepository",value:async function(){if(this._error=void 0,this._progress=!0,!this._addRepositoryData.category)return void(this._error={message:this.hacs.localize("dialog_custom_repositories.no_category")});if(!this._addRepositoryData.repository)return void(this._error={message:this.hacs.localize("dialog_custom_repositories.no_repository")});await d(this.hass,this._addRepositoryData.repository,this._addRepositoryData.category);const s=await h(this.hass);this.dispatchEvent(new CustomEvent("update-hacs",{detail:{repositories:s},bubbles:!0,composed:!0})),this._customRepositories=s.filter((s=>s.custom)),this._progress=!1}},{kind:"method",key:"_removeRepository",value:async function(s){this._error=void 0,await n(this.hass,s);const o=await h(this.hass);this.dispatchEvent(new CustomEvent("update-hacs",{detail:{repositories:o},bubbles:!0,composed:!0})),this._customRepositories=o.filter((s=>s.custom))}},{kind:"get",static:!0,key:"styles",value:function(){return[l,p,m`
        .list {
          position: relative;
          max-height: calc(100vh - 500px);
          overflow: auto;
        }
        a {
          all: unset;
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
      `]}}]}}),o);export{g as HacsCustomRepositoriesDialog};
