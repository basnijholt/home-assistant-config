import{_ as e,e as i,y as t,O as a,d as r,n as s,j as d,t as l,a7 as o}from"./main-c66a9a06.js";import{g as n,d as c}from"./c.15496b0b.js";import{f as u,a as h,b as v}from"./c.6f18200a.js";import{S as k}from"./c.baaad129.js";import"./c.a47e7fac.js";import"./c.6eb9fcd4.js";import"./c.1024e243.js";import"./c.a5550d10.js";import"./c.8e28b461.js";import"./c.41d13611.js";import"./c.874c8cfd.js";import"./c.fa0ef026.js";import"./c.d2f13ac1.js";import"./c.4b0dc107.js";import"./c.bbadaeea.js";import"./c.930daaba.js";e([s("ha-areas-picker")],(function(e,s){return{F:class extends s{constructor(...i){super(...i),e(this)}},d:[{kind:"field",decorators:[i({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[i()],key:"label",value:void 0},{kind:"field",decorators:[i()],key:"value",value:void 0},{kind:"field",decorators:[i()],key:"helper",value:void 0},{kind:"field",decorators:[i()],key:"placeholder",value:void 0},{kind:"field",decorators:[i({type:Boolean,attribute:"no-add"})],key:"noAdd",value:void 0},{kind:"field",decorators:[i({type:Array,attribute:"include-domains"})],key:"includeDomains",value:void 0},{kind:"field",decorators:[i({type:Array,attribute:"exclude-domains"})],key:"excludeDomains",value:void 0},{kind:"field",decorators:[i({type:Array,attribute:"include-device-classes"})],key:"includeDeviceClasses",value:void 0},{kind:"field",decorators:[i()],key:"deviceFilter",value:void 0},{kind:"field",decorators:[i()],key:"entityFilter",value:void 0},{kind:"field",decorators:[i({attribute:"picked-area-label"})],key:"pickedAreaLabel",value:void 0},{kind:"field",decorators:[i({attribute:"pick-area-label"})],key:"pickAreaLabel",value:void 0},{kind:"field",decorators:[i({type:Boolean})],key:"disabled",value:void 0},{kind:"field",decorators:[i({type:Boolean})],key:"required",value:void 0},{kind:"method",key:"render",value:function(){if(!this.hass)return t``;const e=this._currentAreas;return t`
      ${e.map((e=>t`
          <div>
            <ha-area-picker
              .curValue=${e}
              .noAdd=${this.noAdd}
              .hass=${this.hass}
              .value=${e}
              .label=${this.pickedAreaLabel}
              .includeDomains=${this.includeDomains}
              .excludeDomains=${this.excludeDomains}
              .includeDeviceClasses=${this.includeDeviceClasses}
              .deviceFilter=${this.deviceFilter}
              .entityFilter=${this.entityFilter}
              .disabled=${this.disabled}
              @value-changed=${this._areaChanged}
            ></ha-area-picker>
          </div>
        `))}
      <div>
        <ha-area-picker
          .noAdd=${this.noAdd}
          .hass=${this.hass}
          .label=${this.pickAreaLabel}
          .helper=${this.helper}
          .includeDomains=${this.includeDomains}
          .excludeDomains=${this.excludeDomains}
          .includeDeviceClasses=${this.includeDeviceClasses}
          .deviceFilter=${this.deviceFilter}
          .entityFilter=${this.entityFilter}
          .disabled=${this.disabled}
          .placeholder=${this.placeholder}
          .required=${this.required&&!e.length}
          @value-changed=${this._addArea}
        ></ha-area-picker>
      </div>
    `}},{kind:"get",key:"_currentAreas",value:function(){return this.value||[]}},{kind:"method",key:"_updateAreas",value:async function(e){this.value=e,a(this,"value-changed",{value:e})}},{kind:"method",key:"_areaChanged",value:function(e){e.stopPropagation();const i=e.currentTarget.curValue,t=e.detail.value;if(t===i)return;const a=this._currentAreas;t&&!a.includes(t)?this._updateAreas(a.map((e=>e===i?t:e))):this._updateAreas(a.filter((e=>e!==i)))}},{kind:"method",key:"_addArea",value:function(e){e.stopPropagation();const i=e.detail.value;if(!i)return;e.currentTarget.value="";const t=this._currentAreas;t.includes(i)||this._updateAreas([...t,i])}},{kind:"field",static:!0,key:"styles",value:()=>r`
    div {
      margin-top: 8px;
    }
  `}]}}),k(d));let p=e([s("ha-selector-area")],(function(e,a){return{F:class extends a{constructor(...i){super(...i),e(this)}},d:[{kind:"field",decorators:[i()],key:"hass",value:void 0},{kind:"field",decorators:[i()],key:"selector",value:void 0},{kind:"field",decorators:[i()],key:"value",value:void 0},{kind:"field",decorators:[i()],key:"label",value:void 0},{kind:"field",decorators:[i()],key:"helper",value:void 0},{kind:"field",decorators:[i({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[i({type:Boolean})],key:"required",value:()=>!0},{kind:"field",decorators:[l()],key:"_entitySources",value:void 0},{kind:"field",decorators:[l()],key:"_entities",value:void 0},{kind:"field",key:"_deviceIntegrationLookup",value:()=>o(n)},{kind:"method",key:"hassSubscribe",value:function(){return[c(this.hass.connection,(e=>{this._entities=e.filter((e=>null!==e.device_id))}))]}},{kind:"method",key:"updated",value:function(e){var i,t,a,r;e.has("selector")&&(null!==(i=this.selector.area)&&void 0!==i&&null!==(t=i.device)&&void 0!==t&&t.integration||null!==(a=this.selector.area)&&void 0!==a&&null!==(r=a.entity)&&void 0!==r&&r.integration)&&!this._entitySources&&u(this.hass).then((e=>{this._entitySources=e}))}},{kind:"method",key:"render",value:function(){var e,i,a,r,s;return(null!==(e=this.selector.area)&&void 0!==e&&null!==(i=e.device)&&void 0!==i&&i.integration||null!==(a=this.selector.area)&&void 0!==a&&null!==(r=a.entity)&&void 0!==r&&r.integration)&&!this._entitySources?t``:null!==(s=this.selector.area)&&void 0!==s&&s.multiple?t`
      <ha-areas-picker
        .hass=${this.hass}
        .value=${this.value}
        .helper=${this.helper}
        .pickAreaLabel=${this.label}
        no-add
        .deviceFilter=${this._filterDevices}
        .entityFilter=${this._filterEntities}
        .disabled=${this.disabled}
        .required=${this.required}
      ></ha-areas-picker>
    `:t`
        <ha-area-picker
          .hass=${this.hass}
          .value=${this.value}
          .label=${this.label}
          .helper=${this.helper}
          no-add
          .deviceFilter=${this._filterDevices}
          .entityFilter=${this._filterEntities}
          .disabled=${this.disabled}
          .required=${this.required}
        ></ha-area-picker>
      `}},{kind:"field",key:"_filterEntities",value(){return e=>{var i;return null===(i=this.selector.area)||void 0===i||!i.entity||h(this.selector.area.entity,e,this._entitySources)}}},{kind:"field",key:"_filterDevices",value(){return e=>{var i;if(null===(i=this.selector.area)||void 0===i||!i.device)return!0;const t=this._entitySources&&this._entities?this._deviceIntegrationLookup(this._entitySources,this._entities):void 0;return v(this.selector.area.device,e,t)}}}]}}),k(d));export{p as HaAreaSelector};
