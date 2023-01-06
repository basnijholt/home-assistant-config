import{_ as e,j as t,e as a,y as i,O as o,d,n as s}from"./main-73688df5.js";import"./c.cfb39f4e.js";import"./c.3e68342a.js";import"./c.33f8c39f.js";import"./c.8e28b461.js";import"./c.98f99622.js";import"./c.dfdb15e4.js";let l=e([s("ha-selector-template")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[a()],key:"hass",value:void 0},{kind:"field",decorators:[a()],key:"value",value:void 0},{kind:"field",decorators:[a()],key:"label",value:void 0},{kind:"field",decorators:[a()],key:"helper",value:void 0},{kind:"field",decorators:[a({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[a({type:Boolean})],key:"required",value:()=>!0},{kind:"method",key:"render",value:function(){return i`
      ${this.label?i`<p>${this.label}${this.required?" *":""}</p>`:""}
      <ha-code-editor
        mode="jinja2"
        .hass=${this.hass}
        .value=${this.value}
        .readOnly=${this.disabled}
        autofocus
        autocomplete-entities
        autocomplete-icons
        @value-changed=${this._handleChange}
        dir="ltr"
      ></ha-code-editor>
      ${this.helper?i`<ha-input-helper-text>${this.helper}</ha-input-helper-text>`:""}
    `}},{kind:"method",key:"_handleChange",value:function(e){const t=e.target.value;this.value!==t&&o(this,"value-changed",{value:t})}},{kind:"get",static:!0,key:"styles",value:function(){return d`
      p {
        margin-top: 0;
      }
    `}}]}}),t);export{l as HaTemplateSelector};
