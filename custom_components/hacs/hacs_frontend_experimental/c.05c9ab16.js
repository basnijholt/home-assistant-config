import{_ as t,j as i,e,t as s,i as a,y as c,a5 as d,O as n,n as l,d as o}from"./main-aeda8d41.js";import{e as r}from"./c.cbce77f6.js";import{s as u}from"./c.874c8cfd.js";import{c as h}from"./c.6eb9fcd4.js";import{d as v}from"./c.4f015773.js";import"./c.901fc1be.js";import"./c.9367c993.js";import"./c.1024e243.js";import"./c.aa335625.js";import"./c.8e28b461.js";import"./c.0a5b0403.js";import"./c.a66790a6.js";import"./c.d2f13ac1.js";import"./c.fa0ef026.js";import"./c.704dab74.js";import"./c.04ecc0ad.js";import"./c.2610e8cd.js";const k=(t,i,e)=>{const s=t.states[i];return s?h(s):(null==e?void 0:e.name)||i};t([l("ha-statistic-picker")],(function(t,i){return{F:class extends i{constructor(...i){super(...i),t(this)}},d:[{kind:"field",decorators:[e({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[e()],key:"label",value:void 0},{kind:"field",decorators:[e()],key:"value",value:void 0},{kind:"field",decorators:[e({attribute:"statistic-types"})],key:"statisticTypes",value:void 0},{kind:"field",decorators:[e({type:Array})],key:"statisticIds",value:void 0},{kind:"field",decorators:[e({type:Boolean})],key:"disabled",value:void 0},{kind:"field",decorators:[e({type:Array,attribute:"include-statistics-unit-of-measurement"})],key:"includeStatisticsUnitOfMeasurement",value:void 0},{kind:"field",decorators:[e({attribute:"include-unit-class"})],key:"includeUnitClass",value:void 0},{kind:"field",decorators:[e({attribute:"include-device-class"})],key:"includeDeviceClass",value:void 0},{kind:"field",decorators:[e({type:Boolean,attribute:"entities-only"})],key:"entitiesOnly",value:()=>!1},{kind:"field",decorators:[s()],key:"_opened",value:void 0},{kind:"field",decorators:[a("ha-combo-box",!0)],key:"comboBox",value:void 0},{kind:"field",key:"_init",value:()=>!1},{kind:"field",key:"_rowRenderer",value(){return t=>c`<mwc-list-item graphic="avatar" twoline>
    ${t.state?c`<state-badge slot="graphic" .stateObj=${t.state}></state-badge>`:""}
    <span>${t.name}</span>
    <span slot="secondary"
      >${""===t.id||"__missing"===t.id?c`<a
            target="_blank"
            rel="noopener noreferrer"
            href=${v(this.hass,"/more-info/statistics/")}
            >${this.hass.localize("ui.components.statistic-picker.learn_more")}</a
          >`:t.id}</span
    >
  </mwc-list-item>`}},{kind:"field",key:"_getStatistics",value(){return d(((t,i,e,s,a)=>{if(!t.length)return[{id:"",name:this.hass.localize("ui.components.statistic-picker.no_statistics")}];if(i){const e=r(i);t=t.filter((t=>e.includes(t.statistics_unit_of_measurement)))}if(e){const i=r(e);t=t.filter((t=>i.includes(t.unit_class)))}if(s){const i=r(s);t=t.filter((t=>{const e=this.hass.states[t.statistic_id];return!e||i.includes(e.attributes.device_class||"")}))}const c=[];return t.forEach((t=>{const i=this.hass.states[t.statistic_id];i?c.push({id:t.statistic_id,name:k(this.hass,t.statistic_id,t),state:i}):a||c.push({id:t.statistic_id,name:k(this.hass,t.statistic_id,t)})})),c.length?(c.length>1&&c.sort(((t,i)=>u(t.name||"",i.name||""))),c.push({id:"__missing",name:this.hass.localize("ui.components.statistic-picker.missing_entity")}),c):[{id:"",name:this.hass.localize("ui.components.statistic-picker.no_match")}]}))}},{kind:"method",key:"open",value:function(){var t;null===(t=this.comboBox)||void 0===t||t.open()}},{kind:"method",key:"focus",value:function(){var t;null===(t=this.comboBox)||void 0===t||t.focus()}},{kind:"method",key:"willUpdate",value:function(t){(!this.hasUpdated&&!this.statisticIds||t.has("statisticTypes"))&&this._getStatisticIds(),(!this._init&&this.statisticIds||t.has("_opened")&&this._opened)&&(this._init=!0,this.hasUpdated?this.comboBox.items=this._getStatistics(this.statisticIds,this.includeStatisticsUnitOfMeasurement,this.includeUnitClass,this.includeDeviceClass,this.entitiesOnly):this.updateComplete.then((()=>{this.comboBox.items=this._getStatistics(this.statisticIds,this.includeStatisticsUnitOfMeasurement,this.includeUnitClass,this.includeDeviceClass,this.entitiesOnly)})))}},{kind:"method",key:"render",value:function(){return c`
      <ha-combo-box
        .hass=${this.hass}
        .label=${void 0===this.label&&this.hass?this.hass.localize("ui.components.statistic-picker.statistic"):this.label}
        .value=${this._value}
        .renderer=${this._rowRenderer}
        .disabled=${this.disabled}
        item-value-path="id"
        item-id-path="id"
        item-label-path="name"
        @opened-changed=${this._openedChanged}
        @value-changed=${this._statisticChanged}
      ></ha-combo-box>
    `}},{kind:"method",key:"_getStatisticIds",value:async function(){var t,i;this.statisticIds=await(t=this.hass,i=this.statisticTypes,t.callWS({type:"recorder/list_statistic_ids",statistic_type:i}))}},{kind:"get",key:"_value",value:function(){return this.value||""}},{kind:"method",key:"_statisticChanged",value:function(t){t.stopPropagation();let i=t.detail.value;"__missing"===i&&(i=""),i!==this._value&&this._setValue(i)}},{kind:"method",key:"_openedChanged",value:function(t){this._opened=t.detail.value}},{kind:"method",key:"_setValue",value:function(t){this.value=t,setTimeout((()=>{n(this,"value-changed",{value:t}),n(this,"change")}),0)}}]}}),i),t([l("ha-statistics-picker")],(function(t,i){return{F:class extends i{constructor(...i){super(...i),t(this)}},d:[{kind:"field",decorators:[e({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[e({type:Array})],key:"value",value:void 0},{kind:"field",decorators:[e({type:Array})],key:"statisticIds",value:void 0},{kind:"field",decorators:[e({attribute:"statistic-types"})],key:"statisticTypes",value:void 0},{kind:"field",decorators:[e({attribute:"picked-statistic-label"})],key:"pickedStatisticLabel",value:void 0},{kind:"field",decorators:[e({attribute:"pick-statistic-label"})],key:"pickStatisticLabel",value:void 0},{kind:"field",decorators:[e({attribute:"include-statistics-unit-of-measurement"})],key:"includeStatisticsUnitOfMeasurement",value:void 0},{kind:"field",decorators:[e({attribute:"include-unit-class"})],key:"includeUnitClass",value:void 0},{kind:"field",decorators:[e({attribute:"include-device-class"})],key:"includeDeviceClass",value:void 0},{kind:"field",decorators:[e({type:Boolean,attribute:"ignore-restrictions-on-first-statistic"})],key:"ignoreRestrictionsOnFirstStatistic",value:()=>!1},{kind:"method",key:"render",value:function(){if(!this.hass)return c``;const t=this.ignoreRestrictionsOnFirstStatistic&&this._currentStatistics.length<=1,i=t?void 0:this.includeStatisticsUnitOfMeasurement,e=t?void 0:this.includeUnitClass,s=t?void 0:this.statisticTypes;return c`
      ${this._currentStatistics.map((t=>c`
          <div>
            <ha-statistic-picker
              .curValue=${t}
              .hass=${this.hass}
              .includeStatisticsUnitOfMeasurement=${i}
              .includeUnitClass=${e}
              .value=${t}
              .statisticTypes=${s}
              .statisticIds=${this.statisticIds}
              .label=${this.pickedStatisticLabel}
              @value-changed=${this._statisticChanged}
            ></ha-statistic-picker>
          </div>
        `))}
      <div>
        <ha-statistic-picker
          .hass=${this.hass}
          .includeStatisticsUnitOfMeasurement=${this.includeStatisticsUnitOfMeasurement}
          .includeUnitClass=${this.includeUnitClass}
          .includeDeviceClass=${this.includeDeviceClass}
          .statisticTypes=${this.statisticTypes}
          .statisticIds=${this.statisticIds}
          .label=${this.pickStatisticLabel}
          @value-changed=${this._addStatistic}
        ></ha-statistic-picker>
      </div>
    `}},{kind:"get",key:"_currentStatistics",value:function(){return this.value||[]}},{kind:"method",key:"_updateStatistics",value:async function(t){this.value=t,n(this,"value-changed",{value:t})}},{kind:"method",key:"_statisticChanged",value:function(t){t.stopPropagation();const i=t.currentTarget.curValue,e=t.detail.value;if(e===i)return;const s=this._currentStatistics;e&&!s.includes(e)?this._updateStatistics(s.map((t=>t===i?e:t))):this._updateStatistics(s.filter((t=>t!==i)))}},{kind:"method",key:"_addStatistic",value:async function(t){t.stopPropagation();const i=t.detail.value;if(!i)return;if(t.currentTarget.value="",!i)return;const e=this._currentStatistics;e.includes(i)||this._updateStatistics([...e,i])}},{kind:"get",static:!0,key:"styles",value:function(){return o`
      :host {
        width: 200px;
        display: block;
      }
      ha-statistic-picker {
        display: block;
        width: 100%;
        margin-top: 8px;
      }
    `}}]}}),i);let p=t([l("ha-selector-statistic")],(function(t,i){return{F:class extends i{constructor(...i){super(...i),t(this)}},d:[{kind:"field",decorators:[e()],key:"hass",value:void 0},{kind:"field",decorators:[e()],key:"selector",value:void 0},{kind:"field",decorators:[e()],key:"value",value:void 0},{kind:"field",decorators:[e()],key:"label",value:void 0},{kind:"field",decorators:[e()],key:"helper",value:void 0},{kind:"field",decorators:[e({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[e({type:Boolean})],key:"required",value:()=>!0},{kind:"method",key:"render",value:function(){return this.selector.statistic.multiple?c`
      ${this.label?c`<label>${this.label}</label>`:""}
      <ha-statistics-picker
        .hass=${this.hass}
        .value=${this.value}
        .helper=${this.helper}
        .disabled=${this.disabled}
        .required=${this.required}
      ></ha-statistics-picker>
    `:c`<ha-statistic-picker
        .hass=${this.hass}
        .value=${this.value}
        .label=${this.label}
        .helper=${this.helper}
        .disabled=${this.disabled}
        .required=${this.required}
        allow-custom-entity
      ></ha-statistic-picker>`}}]}}),i);export{p as HaStatisticSelector};
