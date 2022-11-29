import{_ as e,j as a,e as t,y as i,O as d,d as o,n as s}from"./main-c66a9a06.js";import"./c.c55c9f95.js";import"./c.bbadaeea.js";import"./c.a5550d10.js";import"./c.8e28b461.js";import"./c.41d13611.js";import"./c.930daaba.js";let l=e([s("ha-selector-template")],(function(e,a){return{F:class extends a{constructor(...a){super(...a),e(this)}},d:[{kind:"field",decorators:[t()],key:"hass",value:void 0},{kind:"field",decorators:[t()],key:"value",value:void 0},{kind:"field",decorators:[t()],key:"label",value:void 0},{kind:"field",decorators:[t()],key:"helper",value:void 0},{kind:"field",decorators:[t({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[t({type:Boolean})],key:"required",value:()=>!0},{kind:"method",key:"render",value:function(){return i`
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
    `}},{kind:"method",key:"_handleChange",value:function(e){const a=e.target.value;this.value!==a&&d(this,"value-changed",{value:a})}},{kind:"get",static:!0,key:"styles",value:function(){return o`
      p {
        margin-top: 0;
      }
    `}}]}}),a);export{l as HaTemplateSelector};
