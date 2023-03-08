import{_ as e,j as i,e as t,t as a,i as l,E as d,G as n,y as o,k as s,a4 as r,O as c,d as u,n as h,eR as f}from"./main-aeda8d41.js";import{a as p}from"./c.84db2bcc.js";import{c as v}from"./c.aa335625.js";import"./c.8e28b461.js";import"./c.0a5b0403.js";e([h("ha-file-upload")],(function(e,i){class h extends i{constructor(...i){super(...i),e(this)}}return{F:h,d:[{kind:"field",decorators:[t({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[t()],key:"accept",value:void 0},{kind:"field",decorators:[t()],key:"icon",value:void 0},{kind:"field",decorators:[t()],key:"label",value:void 0},{kind:"field",decorators:[t()],key:"value",value:()=>null},{kind:"field",decorators:[t({type:Boolean})],key:"uploading",value:()=>!1},{kind:"field",decorators:[t({type:Boolean,attribute:"auto-open-file-dialog"})],key:"autoOpenFileDialog",value:()=>!1},{kind:"field",decorators:[a()],key:"_drag",value:()=>!1},{kind:"field",decorators:[l("#input")],key:"_input",value:void 0},{kind:"method",key:"firstUpdated",value:function(e){d(n(h.prototype),"firstUpdated",this).call(this,e),this.autoOpenFileDialog&&this._openFilePicker()}},{kind:"method",key:"render",value:function(){var e;return o`
      ${this.uploading?o`<ha-circular-progress
            alt="Uploading"
            size="large"
            active
          ></ha-circular-progress>`:o`
            <label
              for="input"
              class="mdc-text-field mdc-text-field--filled ${s({"mdc-text-field--focused":this._drag,"mdc-text-field--with-leading-icon":Boolean(this.icon),"mdc-text-field--with-trailing-icon":Boolean(this.value)})}"
              @drop=${this._handleDrop}
              @dragenter=${this._handleDragStart}
              @dragover=${this._handleDragStart}
              @dragleave=${this._handleDragEnd}
              @dragend=${this._handleDragEnd}
            >
              <span class="mdc-text-field__ripple"></span>
              <span
                class="mdc-floating-label ${this.value||this._drag?"mdc-floating-label--float-above":""}"
                id="label"
                >${this.label}</span
              >
              ${this.icon?o`<span
                    class="mdc-text-field__icon mdc-text-field__icon--leading"
                    tabindex="-1"
                  >
                    <ha-icon-button
                      @click=${this._openFilePicker}
                      .path=${this.icon}
                    ></ha-icon-button>
                  </span>`:""}
              <div class="value">${this.value}</div>
              <input
                id="input"
                type="file"
                class="mdc-text-field__input file"
                accept=${this.accept}
                @change=${this._handleFilePicked}
                aria-labelledby="label"
              />
              ${this.value?o`<span
                    class="mdc-text-field__icon mdc-text-field__icon--trailing"
                    tabindex="1"
                  >
                    <ha-icon-button
                      slot="suffix"
                      @click=${this._clearValue}
                      .label=${(null===(e=this.hass)||void 0===e?void 0:e.localize("ui.common.close"))||"close"}
                      .path=${r}
                    ></ha-icon-button>
                  </span>`:""}
              <span
                class="mdc-line-ripple ${this._drag?"mdc-line-ripple--active":""}"
              ></span>
            </label>
          `}
    `}},{kind:"method",key:"_openFilePicker",value:function(){var e;null===(e=this._input)||void 0===e||e.click()}},{kind:"method",key:"_handleDrop",value:function(e){var i;e.preventDefault(),e.stopPropagation(),null!==(i=e.dataTransfer)&&void 0!==i&&i.files&&c(this,"file-picked",{files:e.dataTransfer.files}),this._drag=!1}},{kind:"method",key:"_handleDragStart",value:function(e){e.preventDefault(),e.stopPropagation(),this._drag=!0}},{kind:"method",key:"_handleDragEnd",value:function(e){e.preventDefault(),e.stopPropagation(),this._drag=!1}},{kind:"method",key:"_handleFilePicked",value:function(e){c(this,"file-picked",{files:e.target.files})}},{kind:"method",key:"_clearValue",value:function(e){e.preventDefault(),this.value=null,c(this,"change")}},{kind:"get",static:!0,key:"styles",value:function(){return[v,u`
        :host {
          display: block;
        }
        .mdc-text-field--filled {
          height: auto;
          padding-top: 16px;
          cursor: pointer;
        }
        .mdc-text-field--filled.mdc-text-field--with-trailing-icon {
          padding-top: 28px;
        }
        .mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__icon {
          color: var(--secondary-text-color);
        }
        .mdc-text-field--filled.mdc-text-field--with-trailing-icon
          .mdc-text-field__icon {
          align-self: flex-end;
        }
        .mdc-text-field__icon--leading {
          margin-bottom: 12px;
          inset-inline-start: initial;
          inset-inline-end: 0px;
          direction: var(--direction);
        }
        .mdc-text-field--filled .mdc-floating-label--float-above {
          transform: scale(0.75);
          top: 8px;
        }
        .mdc-floating-label {
          inset-inline-start: 16px !important;
          inset-inline-end: initial !important;
          direction: var(--direction);
        }
        .mdc-text-field--filled .mdc-floating-label {
          inset-inline-start: 48px !important;
          inset-inline-end: initial !important;
          direction: var(--direction);
        }
        .dragged:before {
          position: var(--layout-fit_-_position);
          top: var(--layout-fit_-_top);
          right: var(--layout-fit_-_right);
          bottom: var(--layout-fit_-_bottom);
          left: var(--layout-fit_-_left);
          background: currentColor;
          content: "";
          opacity: var(--dark-divider-opacity);
          pointer-events: none;
          border-radius: 4px;
        }
        .value {
          width: 100%;
        }
        input.file {
          display: none;
        }
        img {
          max-width: 100%;
          max-height: 125px;
        }
        ha-icon-button {
          --mdc-icon-button-size: 24px;
          --mdc-icon-size: 20px;
        }
        ha-circular-progress {
          display: block;
          text-align-last: center;
        }
      `]}}]}}),i);let m=e([h("ha-selector-file")],(function(e,i){class l extends i{constructor(...i){super(...i),e(this)}}return{F:l,d:[{kind:"field",decorators:[t()],key:"hass",value:void 0},{kind:"field",decorators:[t()],key:"selector",value:void 0},{kind:"field",decorators:[t()],key:"value",value:void 0},{kind:"field",decorators:[t()],key:"label",value:void 0},{kind:"field",decorators:[t()],key:"helper",value:void 0},{kind:"field",decorators:[t({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[t({type:Boolean})],key:"required",value:()=>!0},{kind:"field",decorators:[a()],key:"_filename",value:void 0},{kind:"field",decorators:[a()],key:"_busy",value:()=>!1},{kind:"method",key:"render",value:function(){var e,i;return o`
      <ha-file-upload
        .hass=${this.hass}
        .accept=${null===(e=this.selector.file)||void 0===e?void 0:e.accept}
        .icon=${f}
        .label=${this.label}
        .required=${this.required}
        .disabled=${this.disabled}
        .helper=${this.helper}
        .uploading=${this._busy}
        .value=${this.value?(null===(i=this._filename)||void 0===i?void 0:i.name)||"Unknown file":""}
        @file-picked=${this._uploadFile}
        @change=${this._removeFile}
      ></ha-file-upload>
    `}},{kind:"method",key:"willUpdate",value:function(e){d(n(l.prototype),"willUpdate",this).call(this,e),e.has("value")&&this._filename&&this.value!==this._filename.fileId&&(this._filename=void 0)}},{kind:"method",key:"_uploadFile",value:async function(e){this._busy=!0;const i=e.detail.files[0];try{const e=await(async(e,i)=>{const t=new FormData;t.append("file",i);const a=await e.fetchWithAuth("/api/file_upload",{method:"POST",body:t});if(413===a.status)throw new Error(`Uploaded file is too large (${i.name})`);if(200!==a.status)throw new Error("Unknown error");return(await a.json()).file_id})(this.hass,i);this._filename={fileId:e,name:i.name},c(this,"value-changed",{value:e})}catch(e){p(this,{text:this.hass.localize("ui.components.selectors.file.upload_failed",{reason:e.message||e})})}finally{this._busy=!1}}},{kind:"field",key:"_removeFile",value(){return async()=>{this._busy=!0;try{await(async(e,i)=>e.callApi("DELETE","file_upload",{file_id:i}))(this.hass,this.value)}catch(e){}finally{this._busy=!1}this._filename=void 0,c(this,"value-changed",{value:""})}}}]}}),i);export{m as HaFileSelector};
