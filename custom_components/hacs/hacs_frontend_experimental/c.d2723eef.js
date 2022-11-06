import{_ as e,j as t,e as i,t as s,y as a,a6 as l,a7 as o,J as d,d as r,n}from"./main-ec7846c8.js";import"./c.0a3ec415.js";import"./c.0e3055bd.js";import"./c.8e28b461.js";import"./c.eea05cf6.js";let h=e([n("ha-selector-text")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[i()],key:"hass",value:void 0},{kind:"field",decorators:[i()],key:"value",value:void 0},{kind:"field",decorators:[i()],key:"label",value:void 0},{kind:"field",decorators:[i()],key:"placeholder",value:void 0},{kind:"field",decorators:[i()],key:"helper",value:void 0},{kind:"field",decorators:[i()],key:"selector",value:void 0},{kind:"field",decorators:[i({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[i({type:Boolean})],key:"required",value:()=>!0},{kind:"field",decorators:[s()],key:"_unmaskedPassword",value:()=>!1},{kind:"method",key:"render",value:function(){var e,t,i,s,d;return null!==(e=this.selector.text)&&void 0!==e&&e.multiline?a`<ha-textarea
        .label=${this.label}
        .placeholder=${this.placeholder}
        .value=${this.value||""}
        .helper=${this.helper}
        helperPersistent
        .disabled=${this.disabled}
        @input=${this._handleChange}
        autocapitalize="none"
        .autocomplete=${this.selector.text.autofill}
        spellcheck="false"
        .required=${this.required}
        autogrow
      ></ha-textarea>`:a`<ha-textfield
        .value=${this.value||""}
        .placeholder=${this.placeholder||""}
        .helper=${this.helper}
        helperPersistent
        .disabled=${this.disabled}
        .type=${this._unmaskedPassword?"text":null===(t=this.selector.text)||void 0===t?void 0:t.type}
        @input=${this._handleChange}
        .label=${this.label||""}
        .suffix=${"password"===(null===(i=this.selector.text)||void 0===i?void 0:i.type)?a`<div style="width: 24px"></div>`:null===(s=this.selector.text)||void 0===s?void 0:s.suffix}
        .required=${this.required}
        .autocomplete=${this.selector.text.autofill}
      ></ha-textfield>
      ${"password"===(null===(d=this.selector.text)||void 0===d?void 0:d.type)?a`<ha-icon-button
            toggles
            .label=${(this._unmaskedPassword?"Hide":"Show")+" password"}
            @click=${this._toggleUnmaskedPassword}
            .path=${this._unmaskedPassword?l:o}
          ></ha-icon-button>`:""}`}},{kind:"method",key:"_toggleUnmaskedPassword",value:function(){this._unmaskedPassword=!this._unmaskedPassword}},{kind:"method",key:"_handleChange",value:function(e){let t=e.target.value;this.value!==t&&(""!==t||this.required||(t=void 0),d(this,"value-changed",{value:t}))}},{kind:"get",static:!0,key:"styles",value:function(){return r`
      :host {
        display: block;
        position: relative;
      }
      ha-textarea,
      ha-textfield {
        width: 100%;
      }
      ha-icon-button {
        position: absolute;
        top: 10px;
        right: 10px;
        --mdc-icon-button-size: 36px;
        --mdc-icon-size: 20px;
        color: var(--secondary-text-color);
        inset-inline-start: initial;
        inset-inline-end: 10px;
        direction: var(--direction);
      }
    `}}]}}),t);export{h as HaTextSelector};
