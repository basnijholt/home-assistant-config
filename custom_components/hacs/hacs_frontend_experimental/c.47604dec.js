import{_ as e,j as i,e as t,y as s,O as d,d as n,n as l,t as a,E as r,G as u}from"./main-c4dd4de7.js";import{f as c,a as o}from"./c.6f18200a.js";import"./c.0af6b5ec.js";import"./c.fa0ef026.js";import"./c.d2f13ac1.js";import"./c.469b562b.js";import"./c.8e28b461.js";import"./c.6eb9fcd4.js";import"./c.1024e243.js";import"./c.874c8cfd.js";import"./c.7c8361ff.js";import"./c.984a9eec.js";import"./c.29d7c8e9.js";import"./c.8e7ffbc7.js";import"./c.704dab74.js";import"./c.04ecc0ad.js";import"./c.2610e8cd.js";const h=/^(\w+)\.(\w+)$/;e([l("ha-entities-picker")],(function(e,i){return{F:class extends i{constructor(...i){super(...i),e(this)}},d:[{kind:"field",decorators:[t({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[t({type:Array})],key:"value",value:void 0},{kind:"field",decorators:[t({type:Boolean})],key:"disabled",value:void 0},{kind:"field",decorators:[t({type:Boolean})],key:"required",value:void 0},{kind:"field",decorators:[t()],key:"helper",value:void 0},{kind:"field",decorators:[t({type:Array,attribute:"include-domains"})],key:"includeDomains",value:void 0},{kind:"field",decorators:[t({type:Array,attribute:"exclude-domains"})],key:"excludeDomains",value:void 0},{kind:"field",decorators:[t({type:Array,attribute:"include-device-classes"})],key:"includeDeviceClasses",value:void 0},{kind:"field",decorators:[t({type:Array,attribute:"include-unit-of-measurement"})],key:"includeUnitOfMeasurement",value:void 0},{kind:"field",decorators:[t({type:Array,attribute:"include-entities"})],key:"includeEntities",value:void 0},{kind:"field",decorators:[t({type:Array,attribute:"exclude-entities"})],key:"excludeEntities",value:void 0},{kind:"field",decorators:[t({attribute:"picked-entity-label"})],key:"pickedEntityLabel",value:void 0},{kind:"field",decorators:[t({attribute:"pick-entity-label"})],key:"pickEntityLabel",value:void 0},{kind:"field",decorators:[t()],key:"entityFilter",value:void 0},{kind:"method",key:"render",value:function(){if(!this.hass)return s``;const e=this._currentEntities;return s`
      ${e.map((e=>s`
          <div>
            <ha-entity-picker
              allow-custom-entity
              .curValue=${e}
              .hass=${this.hass}
              .includeDomains=${this.includeDomains}
              .excludeDomains=${this.excludeDomains}
              .includeEntities=${this.includeEntities}
              .excludeEntities=${this.excludeEntities}
              .includeDeviceClasses=${this.includeDeviceClasses}
              .includeUnitOfMeasurement=${this.includeUnitOfMeasurement}
              .entityFilter=${this._entityFilter}
              .value=${e}
              .label=${this.pickedEntityLabel}
              .disabled=${this.disabled}
              @value-changed=${this._entityChanged}
            ></ha-entity-picker>
          </div>
        `))}
      <div>
        <ha-entity-picker
          allow-custom-entity
          .hass=${this.hass}
          .includeDomains=${this.includeDomains}
          .excludeDomains=${this.excludeDomains}
          .includeEntities=${this.includeEntities}
          .excludeEntities=${this.excludeEntities}
          .includeDeviceClasses=${this.includeDeviceClasses}
          .includeUnitOfMeasurement=${this.includeUnitOfMeasurement}
          .entityFilter=${this._entityFilter}
          .label=${this.pickEntityLabel}
          .helper=${this.helper}
          .disabled=${this.disabled}
          .required=${this.required&&!e.length}
          @value-changed=${this._addEntity}
        ></ha-entity-picker>
      </div>
    `}},{kind:"field",key:"_entityFilter",value(){return e=>(!this.value||!this.value.includes(e.entity_id))&&(!this.entityFilter||this.entityFilter(e))}},{kind:"get",key:"_currentEntities",value:function(){return this.value||[]}},{kind:"method",key:"_updateEntities",value:async function(e){this.value=e,d(this,"value-changed",{value:e})}},{kind:"method",key:"_entityChanged",value:function(e){e.stopPropagation();const i=e.currentTarget.curValue,t=e.detail.value;if(t===i||void 0!==t&&(s=t,!h.test(s)))return;var s;const d=this._currentEntities;t&&!d.includes(t)?this._updateEntities(d.map((e=>e===i?t:e))):this._updateEntities(d.filter((e=>e!==i)))}},{kind:"method",key:"_addEntity",value:async function(e){e.stopPropagation();const i=e.detail.value;if(!i)return;if(e.currentTarget.value="",!i)return;const t=this._currentEntities;t.includes(i)||this._updateEntities([...t,i])}},{kind:"field",static:!0,key:"styles",value:()=>n`
    div {
      margin-top: 8px;
    }
  `}]}}),i);let y=e([l("ha-selector-entity")],(function(e,i){class d extends i{constructor(...i){super(...i),e(this)}}return{F:d,d:[{kind:"field",decorators:[t()],key:"hass",value:void 0},{kind:"field",decorators:[t()],key:"selector",value:void 0},{kind:"field",decorators:[a()],key:"_entitySources",value:void 0},{kind:"field",decorators:[t()],key:"value",value:void 0},{kind:"field",decorators:[t()],key:"label",value:void 0},{kind:"field",decorators:[t()],key:"helper",value:void 0},{kind:"field",decorators:[t({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[t({type:Boolean})],key:"required",value:()=>!0},{kind:"method",key:"render",value:function(){var e,i,t;return null!==(e=this.selector.entity)&&void 0!==e&&e.multiple?s`
      ${this.label?s`<label>${this.label}</label>`:""}
      <ha-entities-picker
        .hass=${this.hass}
        .value=${this.value}
        .helper=${this.helper}
        .includeEntities=${this.selector.entity.include_entities}
        .excludeEntities=${this.selector.entity.exclude_entities}
        .entityFilter=${this._filterEntities}
        .disabled=${this.disabled}
        .required=${this.required}
      ></ha-entities-picker>
    `:s`<ha-entity-picker
        .hass=${this.hass}
        .value=${this.value}
        .label=${this.label}
        .helper=${this.helper}
        .includeEntities=${null===(i=this.selector.entity)||void 0===i?void 0:i.include_entities}
        .excludeEntities=${null===(t=this.selector.entity)||void 0===t?void 0:t.exclude_entities}
        .entityFilter=${this._filterEntities}
        .disabled=${this.disabled}
        .required=${this.required}
        allow-custom-entity
      ></ha-entity-picker>`}},{kind:"method",key:"updated",value:function(e){var i;r(u(d.prototype),"updated",this).call(this,e),e.has("selector")&&null!==(i=this.selector.entity)&&void 0!==i&&i.integration&&!this._entitySources&&c(this.hass).then((e=>{this._entitySources=e}))}},{kind:"field",key:"_filterEntities",value(){return e=>{var i;return null===(i=this.selector)||void 0===i||!i.entity||o(this.selector.entity,e,this._entitySources)}}}]}}),i);export{y as HaEntitySelector};
