import{_ as e,j as i,e as a,y as t,n as r}from"./main-aeda8d41.js";import"./c.380b1478.js";import"./c.a5171285.js";import"./c.2610e8cd.js";import"./c.901fc1be.js";import"./c.aa335625.js";import"./c.8e28b461.js";import"./c.0a5b0403.js";import"./c.a66790a6.js";let d=e([r("ha-selector-time")],(function(e,i){return{F:class extends i{constructor(...i){super(...i),e(this)}},d:[{kind:"field",decorators:[a({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[a({attribute:!1})],key:"selector",value:void 0},{kind:"field",decorators:[a()],key:"value",value:void 0},{kind:"field",decorators:[a()],key:"label",value:void 0},{kind:"field",decorators:[a()],key:"helper",value:void 0},{kind:"field",decorators:[a({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[a({type:Boolean})],key:"required",value:()=>!1},{kind:"method",key:"render",value:function(){return t`
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
