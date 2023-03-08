import{_ as e,j as a,e as t,y as i,O as l,n as d}from"./main-aeda8d41.js";import"./c.2e43c30a.js";import"./c.901fc1be.js";import"./c.5fe2e3ab.js";import"./c.636925b9.js";import"./c.aa335625.js";import"./c.8e28b461.js";import"./c.0a5b0403.js";import"./c.a66790a6.js";let r=e([d("ha-selector-object")],(function(e,a){return{F:class extends a{constructor(...a){super(...a),e(this)}},d:[{kind:"field",decorators:[t()],key:"hass",value:void 0},{kind:"field",decorators:[t()],key:"value",value:void 0},{kind:"field",decorators:[t()],key:"label",value:void 0},{kind:"field",decorators:[t()],key:"helper",value:void 0},{kind:"field",decorators:[t()],key:"placeholder",value:void 0},{kind:"field",decorators:[t({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[t({type:Boolean})],key:"required",value:()=>!0},{kind:"method",key:"render",value:function(){return i`<ha-yaml-editor
        .hass=${this.hass}
        .readonly=${this.disabled}
        .label=${this.label}
        .required=${this.required}
        .placeholder=${this.placeholder}
        .defaultValue=${this.value}
        @value-changed=${this._handleChange}
      ></ha-yaml-editor>
      ${this.helper?i`<ha-input-helper-text>${this.helper}</ha-input-helper-text>`:""} `}},{kind:"method",key:"_handleChange",value:function(e){const a=e.target.value;e.target.isValid&&this.value!==a&&l(this,"value-changed",{value:a})}}]}}),a);export{r as HaObjectSelector};
