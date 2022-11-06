import{f as t,i as e,e as i,y as a,k as s,p as l,d as o,_ as r,E as d,G as n,n as h}from"./main-ec7846c8.js";import{T as p,l as u,b as c}from"./c.0e3055bd.js";const m={fromAttribute:t=>null!==t&&(""===t||t),toAttribute:t=>"boolean"==typeof t?t?"":null:t};class x extends p{constructor(){super(...arguments),this.rows=2,this.cols=20,this.charCounter=!1}render(){const t=this.charCounter&&-1!==this.maxLength,e=t&&"internal"===this.charCounter,i=t&&!e,l=!!this.helper||!!this.validationMessage||i,o={"mdc-text-field--disabled":this.disabled,"mdc-text-field--no-label":!this.label,"mdc-text-field--filled":!this.outlined,"mdc-text-field--outlined":this.outlined,"mdc-text-field--end-aligned":this.endAligned,"mdc-text-field--with-internal-counter":e};return a`
      <label class="mdc-text-field mdc-text-field--textarea ${s(o)}">
        ${this.renderRipple()}
        ${this.outlined?this.renderOutline():this.renderLabel()}
        ${this.renderInput()}
        ${this.renderCharCounter(e)}
        ${this.renderLineRipple()}
      </label>
      ${this.renderHelperText(l,i)}
    `}renderInput(){const t=this.label?"label":void 0,e=-1===this.minLength?void 0:this.minLength,i=-1===this.maxLength?void 0:this.maxLength,s=this.autocapitalize?this.autocapitalize:void 0;return a`
      <textarea
          aria-labelledby=${l(t)}
          class="mdc-text-field__input"
          .value="${u(this.value)}"
          rows="${this.rows}"
          cols="${this.cols}"
          ?disabled="${this.disabled}"
          placeholder="${this.placeholder}"
          ?required="${this.required}"
          ?readonly="${this.readOnly}"
          minlength="${l(e)}"
          maxlength="${l(i)}"
          name="${l(""===this.name?void 0:this.name)}"
          inputmode="${l(this.inputMode)}"
          autocapitalize="${l(s)}"
          @input="${this.handleInputChange}"
          @blur="${this.onInputBlur}">
      </textarea>`}}t([e("textarea")],x.prototype,"formElement",void 0),t([i({type:Number})],x.prototype,"rows",void 0),t([i({type:Number})],x.prototype,"cols",void 0),t([i({converter:m})],x.prototype,"charCounter",void 0);const g=o`.mdc-text-field{height:100%}.mdc-text-field__input{resize:none}`;r([h("ha-textarea")],(function(t,e){class a extends e{constructor(...e){super(...e),t(this)}}return{F:a,d:[{kind:"field",decorators:[i({type:Boolean,reflect:!0})],key:"autogrow",value:()=>!1},{kind:"method",key:"updated",value:function(t){d(n(a.prototype),"updated",this).call(this,t),this.autogrow&&t.has("value")&&(this.mdcRoot.dataset.value=this.value+'=​"')}},{kind:"field",static:!0,key:"styles",value:()=>[c,g,o`
      :host([autogrow]) .mdc-text-field {
        position: relative;
        min-height: 74px;
        min-width: 178px;
        max-height: 200px;
      }
      :host([autogrow]) .mdc-text-field:after {
        content: attr(data-value);
        margin-top: 23px;
        margin-bottom: 9px;
        line-height: 1.5rem;
        min-height: 42px;
        padding: 0px 32px 0 16px;
        letter-spacing: var(
          --mdc-typography-subtitle1-letter-spacing,
          0.009375em
        );
        visibility: hidden;
        white-space: pre-wrap;
      }
      :host([autogrow]) .mdc-text-field__input {
        position: absolute;
        height: calc(100% - 32px);
      }
      :host([autogrow]) .mdc-text-field.mdc-text-field--no-label:after {
        margin-top: 16px;
        margin-bottom: 16px;
      }
    `]}]}}),x);
