import{_ as e,j as a,e as d,y as i,n as t}from"./main-ec7846c8.js";let r=e([t("ha-selector-duration")],(function(e,a){return{F:class extends a{constructor(...a){super(...a),e(this)}},d:[{kind:"field",decorators:[d({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[d({attribute:!1})],key:"selector",value:void 0},{kind:"field",decorators:[d({attribute:!1})],key:"value",value:void 0},{kind:"field",decorators:[d()],key:"label",value:void 0},{kind:"field",decorators:[d()],key:"helper",value:void 0},{kind:"field",decorators:[d({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[d({type:Boolean})],key:"required",value:()=>!0},{kind:"method",key:"render",value:function(){return i`
      <ha-duration-input
        .label=${this.label}
        .helper=${this.helper}
        .data=${this.value}
        .disabled=${this.disabled}
        .required=${this.required}
        ?enableDay=${this.selector.duration.enable_day}
      ></ha-duration-input>
    `}}]}}),a);export{r as HaTimeDuration};
