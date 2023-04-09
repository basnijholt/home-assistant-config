import{_ as e,j as i,e as t,y as s,O as d,d as a,n as l,t as c,a5 as r,E as o,G as n}from"./main-85e087f9.js";import{g as v,d as u}from"./c.1095ea82.js";import{f as h,b as k}from"./c.6f18200a.js";import{S as p}from"./c.59ae3c13.js";import"./c.fc9cf645.js";import"./c.6eb9fcd4.js";import"./c.1024e243.js";import"./c.388f6c87.js";import"./c.8e28b461.js";import"./c.eab7754a.js";import"./c.874c8cfd.js";import"./c.fa0ef026.js";import"./c.d2f13ac1.js";import"./c.fea0de05.js";import"./c.7398f5d5.js";e([l("ha-devices-picker")],(function(e,i){return{F:class extends i{constructor(...i){super(...i),e(this)}},d:[{kind:"field",decorators:[t({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[t()],key:"value",value:void 0},{kind:"field",decorators:[t()],key:"helper",value:void 0},{kind:"field",decorators:[t({type:Boolean})],key:"disabled",value:void 0},{kind:"field",decorators:[t({type:Boolean})],key:"required",value:void 0},{kind:"field",decorators:[t({type:Array,attribute:"include-domains"})],key:"includeDomains",value:void 0},{kind:"field",decorators:[t({type:Array,attribute:"exclude-domains"})],key:"excludeDomains",value:void 0},{kind:"field",decorators:[t({attribute:"picked-device-label"}),t({type:Array,attribute:"include-device-classes"})],key:"includeDeviceClasses",value:void 0},{kind:"field",key:"pickedDeviceLabel",value:void 0},{kind:"field",decorators:[t({attribute:"pick-device-label"})],key:"pickDeviceLabel",value:void 0},{kind:"field",decorators:[t()],key:"deviceFilter",value:void 0},{kind:"method",key:"render",value:function(){if(!this.hass)return s``;const e=this._currentDevices;return s`
      ${e.map((e=>s`
          <div>
            <ha-device-picker
              allow-custom-entity
              .curValue=${e}
              .hass=${this.hass}
              .deviceFilter=${this.deviceFilter}
              .includeDomains=${this.includeDomains}
              .excludeDomains=${this.excludeDomains}
              .includeDeviceClasses=${this.includeDeviceClasses}
              .value=${e}
              .label=${this.pickedDeviceLabel}
              .disabled=${this.disabled}
              @value-changed=${this._deviceChanged}
            ></ha-device-picker>
          </div>
        `))}
      <div>
        <ha-device-picker
          allow-custom-entity
          .hass=${this.hass}
          .helper=${this.helper}
          .deviceFilter=${this.deviceFilter}
          .includeDomains=${this.includeDomains}
          .excludeDomains=${this.excludeDomains}
          .includeDeviceClasses=${this.includeDeviceClasses}
          .label=${this.pickDeviceLabel}
          .disabled=${this.disabled}
          .required=${this.required&&!e.length}
          @value-changed=${this._addDevice}
        ></ha-device-picker>
      </div>
    `}},{kind:"get",key:"_currentDevices",value:function(){return this.value||[]}},{kind:"method",key:"_updateDevices",value:async function(e){d(this,"value-changed",{value:e}),this.value=e}},{kind:"method",key:"_deviceChanged",value:function(e){e.stopPropagation();const i=e.currentTarget.curValue,t=e.detail.value;t!==i&&""===t&&(""===t?this._updateDevices(this._currentDevices.filter((e=>e!==i))):this._updateDevices(this._currentDevices.map((e=>e===i?t:e))))}},{kind:"method",key:"_addDevice",value:async function(e){e.stopPropagation();const i=e.detail.value;if(e.currentTarget.value="",!i)return;const t=this._currentDevices;t.includes(i)||this._updateDevices([...t,i])}},{kind:"field",static:!0,key:"styles",value:()=>a`
    div {
      margin-top: 8px;
    }
  `}]}}),i);let y=e([l("ha-selector-device")],(function(e,i){class d extends i{constructor(...i){super(...i),e(this)}}return{F:d,d:[{kind:"field",decorators:[t()],key:"hass",value:void 0},{kind:"field",decorators:[t()],key:"selector",value:void 0},{kind:"field",decorators:[c()],key:"_entitySources",value:void 0},{kind:"field",decorators:[c()],key:"_entities",value:void 0},{kind:"field",decorators:[t()],key:"value",value:void 0},{kind:"field",decorators:[t()],key:"label",value:void 0},{kind:"field",decorators:[t()],key:"helper",value:void 0},{kind:"field",decorators:[t({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[t({type:Boolean})],key:"required",value:()=>!0},{kind:"field",key:"_deviceIntegrationLookup",value:()=>r(v)},{kind:"method",key:"hassSubscribe",value:function(){return[u(this.hass.connection,(e=>{this._entities=e.filter((e=>null!==e.device_id))}))]}},{kind:"method",key:"updated",value:function(e){var i;o(n(d.prototype),"updated",this).call(this,e),e.has("selector")&&null!==(i=this.selector.device)&&void 0!==i&&i.integration&&!this._entitySources&&h(this.hass).then((e=>{this._entitySources=e}))}},{kind:"method",key:"render",value:function(){var e,i,t,d,a,l,c,r;return null!==(e=this.selector.device)&&void 0!==e&&e.integration&&!this._entitySources?s``:null!==(i=this.selector.device)&&void 0!==i&&i.multiple?s`
      ${this.label?s`<label>${this.label}</label>`:""}
      <ha-devices-picker
        .hass=${this.hass}
        .value=${this.value}
        .helper=${this.helper}
        .deviceFilter=${this._filterDevices}
        .includeDeviceClasses=${null!==(t=this.selector.device.entity)&&void 0!==t&&t.device_class?[this.selector.device.entity.device_class]:void 0}
        .includeDomains=${null!==(d=this.selector.device.entity)&&void 0!==d&&d.domain?[this.selector.device.entity.domain]:void 0}
        .disabled=${this.disabled}
        .required=${this.required}
      ></ha-devices-picker>
    `:s`
        <ha-device-picker
          .hass=${this.hass}
          .value=${this.value}
          .label=${this.label}
          .helper=${this.helper}
          .deviceFilter=${this._filterDevices}
          .includeDeviceClasses=${null!==(a=this.selector.device)&&void 0!==a&&null!==(l=a.entity)&&void 0!==l&&l.device_class?[this.selector.device.entity.device_class]:void 0}
          .includeDomains=${null!==(c=this.selector.device)&&void 0!==c&&null!==(r=c.entity)&&void 0!==r&&r.domain?[this.selector.device.entity.domain]:void 0}
          .disabled=${this.disabled}
          .required=${this.required}
          allow-custom-entity
        ></ha-device-picker>
      `}},{kind:"field",key:"_filterDevices",value(){return e=>{const i=this._entitySources&&this._entities?this._deviceIntegrationLookup(this._entitySources,this._entities):void 0;return!this.selector.device||k(this.selector.device,e,i)}}}]}}),p(i));export{y as HaDeviceSelector};
