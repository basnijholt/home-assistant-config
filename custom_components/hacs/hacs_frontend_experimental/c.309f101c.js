import{_ as e,j as l,e as a,y as d,O as i,n as o}from"./main-c4dd4de7.js";let r=e([o("ha-selector-icon")],(function(e,l){return{F:class extends l{constructor(...l){super(...l),e(this)}},d:[{kind:"field",decorators:[a()],key:"hass",value:void 0},{kind:"field",decorators:[a()],key:"selector",value:void 0},{kind:"field",decorators:[a()],key:"value",value:void 0},{kind:"field",decorators:[a()],key:"label",value:void 0},{kind:"field",decorators:[a()],key:"helper",value:void 0},{kind:"field",decorators:[a({type:Boolean,reflect:!0})],key:"disabled",value:()=>!1},{kind:"field",decorators:[a({type:Boolean})],key:"required",value:()=>!0},{kind:"method",key:"render",value:function(){var e,l;return d`
      <ha-icon-picker
        .hass=${this.hass}
        .label=${this.label}
        .value=${this.value}
        .required=${this.required}
        .disabled=${this.disabled}
        .helper=${this.helper}
        .fallbackPath=${null===(e=this.selector.icon)||void 0===e?void 0:e.fallbackPath}
        .placeholder=${null===(l=this.selector.icon)||void 0===l?void 0:l.placeholder}
        @value-changed=${this._valueChanged}
      ></ha-icon-picker>
    `}},{kind:"method",key:"_valueChanged",value:function(e){i(this,"value-changed",{value:e.detail.value})}}]}}),l);export{r as HaIconSelector};
