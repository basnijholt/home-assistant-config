import{_ as e,j as t,e as a,y as i,O as o,n as d}from"./main-85e087f9.js";import{u as l}from"./c.e3f3a0be.js";import"./c.fea0de05.js";e([d("ha-time-input")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[a({attribute:!1})],key:"locale",value:void 0},{kind:"field",decorators:[a()],key:"value",value:void 0},{kind:"field",decorators:[a()],key:"label",value:void 0},{kind:"field",decorators:[a()],key:"helper",value:void 0},{kind:"field",decorators:[a({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[a({type:Boolean})],key:"required",value:()=>!1},{kind:"field",decorators:[a({type:Boolean,attribute:"enable-second"})],key:"enableSecond",value:()=>!1},{kind:"method",key:"render",value:function(){var e;const t=l(this.locale),a=(null===(e=this.value)||void 0===e?void 0:e.split(":"))||[];let o=a[0];const d=Number(a[0]);return d&&t&&d>12&&d<24&&(o=String(d-12).padStart(2,"0")),t&&0===d&&(o="12"),i`
      <ha-base-time-input
        .label=${this.label}
        .hours=${Number(o)}
        .minutes=${Number(a[1])}
        .seconds=${Number(a[2])}
        .format=${t?12:24}
        .amPm=${t&&d>=12?"PM":"AM"}
        .disabled=${this.disabled}
        @value-changed=${this._timeChanged}
        .enableSecond=${this.enableSecond}
        .required=${this.required}
        .helper=${this.helper}
      ></ha-base-time-input>
    `}},{kind:"method",key:"_timeChanged",value:function(e){e.stopPropagation();const t=e.detail.value,a=l(this.locale);let i=t.hours||0;t&&a&&("PM"===t.amPm&&i<12&&(i+=12),"AM"===t.amPm&&12===i&&(i=0));const d=`${i.toString().padStart(2,"0")}:${t.minutes?t.minutes.toString().padStart(2,"0"):"00"}:${t.seconds?t.seconds.toString().padStart(2,"0"):"00"}`;d!==this.value&&(this.value=d,o(this,"change"),o(this,"value-changed",{value:d}))}}]}}),t);
