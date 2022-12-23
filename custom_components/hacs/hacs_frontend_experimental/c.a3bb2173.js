import{_ as e,j as t,e as i,t as a,y as s,a8 as o,a9 as d,O as l,d as r,n}from"./main-c4dd4de7.js";import"./c.ffdeb3d4.js";import"./c.984a9eec.js";import"./c.8e28b461.js";import"./c.469b562b.js";let h=e([n("ha-selector-text")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[i()],key:"hass",value:void 0},{kind:"field",decorators:[i()],key:"value",value:void 0},{kind:"field",decorators:[i()],key:"name",value:void 0},{kind:"field",decorators:[i()],key:"label",value:void 0},{kind:"field",decorators:[i()],key:"placeholder",value:void 0},{kind:"field",decorators:[i()],key:"helper",value:void 0},{kind:"field",decorators:[i()],key:"selector",value:void 0},{kind:"field",decorators:[i({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[i({type:Boolean})],key:"required",value:()=>!0},{kind:"field",decorators:[a()],key:"_unmaskedPassword",value:()=>!1},{kind:"method",key:"render",value:function(){var e,t,i,a,l,r,n;return null!==(e=this.selector.text)&&void 0!==e&&e.multiline?s`<ha-textarea
        .name=${this.name}
        .label=${this.label}
        .placeholder=${this.placeholder}
        .value=${this.value||""}
        .helper=${this.helper}
        helperPersistent
        .disabled=${this.disabled}
        @input=${this._handleChange}
        autocapitalize="none"
        .autocomplete=${null===(n=this.selector.text)||void 0===n?void 0:n.autocomplete}
        spellcheck="false"
        .required=${this.required}
        autogrow
      ></ha-textarea>`:s`<ha-textfield
        .name=${this.name}
        .value=${this.value||""}
        .placeholder=${this.placeholder||""}
        .helper=${this.helper}
        helperPersistent
        .disabled=${this.disabled}
        .type=${this._unmaskedPassword?"text":null===(t=this.selector.text)||void 0===t?void 0:t.type}
        @input=${this._handleChange}
        .label=${this.label||""}
        .suffix=${"password"===(null===(i=this.selector.text)||void 0===i?void 0:i.type)?s`<div style="width: 24px"></div>`:null===(a=this.selector.text)||void 0===a?void 0:a.suffix}
        .required=${this.required}
        .autocomplete=${null===(l=this.selector.text)||void 0===l?void 0:l.autocomplete}
      ></ha-textfield>
      ${"password"===(null===(r=this.selector.text)||void 0===r?void 0:r.type)?s`<ha-icon-button
            toggles
            .label=${(this._unmaskedPassword?"Hide":"Show")+" password"}
            @click=${this._toggleUnmaskedPassword}
            .path=${this._unmaskedPassword?o:d}
          ></ha-icon-button>`:""}`}},{kind:"method",key:"_toggleUnmaskedPassword",value:function(){this._unmaskedPassword=!this._unmaskedPassword}},{kind:"method",key:"_handleChange",value:function(e){let t=e.target.value;this.value!==t&&(""!==t||this.required||(t=void 0),l(this,"value-changed",{value:t}))}},{kind:"get",static:!0,key:"styles",value:function(){return r`
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
