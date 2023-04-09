import{_ as e,j as i,e as t,y as r,n as a}from"./main-85e087f9.js";import"./c.f965ee00.js";import"./c.e3f3a0be.js";import"./c.2610e8cd.js";import"./c.fea0de05.js";import"./c.388f6c87.js";import"./c.8e28b461.js";import"./c.eab7754a.js";import"./c.7398f5d5.js";let d=e([a("ha-selector-time")],(function(e,i){return{F:class extends i{constructor(...i){super(...i),e(this)}},d:[{kind:"field",decorators:[t({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[t({attribute:!1})],key:"selector",value:void 0},{kind:"field",decorators:[t()],key:"value",value:void 0},{kind:"field",decorators:[t()],key:"label",value:void 0},{kind:"field",decorators:[t()],key:"helper",value:void 0},{kind:"field",decorators:[t({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[t({type:Boolean})],key:"required",value:()=>!1},{kind:"method",key:"render",value:function(){return r`
      <ha-time-input
        .value=${this.value}
        .locale=${this.hass.locale}
        .disabled=${this.disabled}
        .required=${this.required}
        .helper=${this.helper}
        .label=${this.label}
        enable-second
      ></ha-time-input>
    `}}]}}),i);export{d as HaTimeSelector};
