import{_ as e,j as a,e as l,y as i,O as d,n as o}from"./main-c66a9a06.js";let r=e([o("ha-selector-icon")],(function(e,a){return{F:class extends a{constructor(...a){super(...a),e(this)}},d:[{kind:"field",decorators:[l()],key:"hass",value:void 0},{kind:"field",decorators:[l()],key:"selector",value:void 0},{kind:"field",decorators:[l()],key:"value",value:void 0},{kind:"field",decorators:[l()],key:"label",value:void 0},{kind:"field",decorators:[l()],key:"helper",value:void 0},{kind:"field",decorators:[l({type:Boolean,reflect:!0})],key:"disabled",value:()=>!1},{kind:"field",decorators:[l({type:Boolean})],key:"required",value:()=>!0},{kind:"method",key:"render",value:function(){var e,a;return i`
      <ha-icon-picker
        .hass=${this.hass}
        .label=${this.label}
        .value=${this.value}
        .required=${this.required}
        .disabled=${this.disabled}
        .helper=${this.helper}
        .fallbackPath=${null===(e=this.selector.icon)||void 0===e?void 0:e.fallbackPath}
        .placeholder=${null===(a=this.selector.icon)||void 0===a?void 0:a.placeholder}
        @value-changed=${this._valueChanged}
      ></ha-icon-picker>
    `}},{kind:"method",key:"_valueChanged",value:function(e){d(this,"value-changed",{value:e.detail.value})}}]}}),a);export{r as HaIconSelector};
