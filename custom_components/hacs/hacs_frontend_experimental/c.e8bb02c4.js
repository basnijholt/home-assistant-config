import{_ as e,j as i,e as d,y as t,n as r}from"./main-c4dd4de7.js";import"./c.d6876c9b.js";import"./c.b05de56b.js";import"./c.2610e8cd.js";import"./c.7c8361ff.js";import"./c.984a9eec.js";import"./c.8e28b461.js";import"./c.469b562b.js";import"./c.29d7c8e9.js";let o=e([r("ha-selector-time")],(function(e,i){return{F:class extends i{constructor(...i){super(...i),e(this)}},d:[{kind:"field",decorators:[d({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[d({attribute:!1})],key:"selector",value:void 0},{kind:"field",decorators:[d()],key:"value",value:void 0},{kind:"field",decorators:[d()],key:"label",value:void 0},{kind:"field",decorators:[d()],key:"helper",value:void 0},{kind:"field",decorators:[d({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[d({type:Boolean})],key:"required",value:()=>!1},{kind:"method",key:"render",value:function(){return t`
      <ha-time-input
        .value=${this.value}
        .locale=${this.hass.locale}
        .disabled=${this.disabled}
        .required=${this.required}
        .helper=${this.helper}
        .label=${this.label}
        enable-second
      ></ha-time-input>
    `}}]}}),i);export{o as HaTimeSelector};
