import{_ as e,j as i,e as t,t as o,i as a,y as n,J as r,n as d,d as s}from"./main-ec7846c8.js";import"./c.eea05cf6.js";import{g as l}from"./c.f2bb3724.js";import{d as c}from"./c.05172f3d.js";import{c as u}from"./c.874c8cfd.js";import{b as h}from"./c.07e395f8.js";import"./c.227858d9.js";import"./c.8e28b461.js";import"./c.0e3055bd.js";e([d("ha-config-entry-picker")],(function(e,i){return{F:class extends i{constructor(...i){super(...i),e(this)}},d:[{kind:"field",key:"hass",value:void 0},{kind:"field",decorators:[t()],key:"integration",value:void 0},{kind:"field",decorators:[t()],key:"label",value:void 0},{kind:"field",decorators:[t()],key:"value",value:()=>""},{kind:"field",decorators:[t()],key:"helper",value:void 0},{kind:"field",decorators:[o()],key:"_configEntries",value:void 0},{kind:"field",decorators:[t({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[t({type:Boolean})],key:"required",value:()=>!1},{kind:"field",decorators:[a("ha-combo-box")],key:"_comboBox",value:void 0},{kind:"method",key:"open",value:function(){var e;null===(e=this._comboBox)||void 0===e||e.open()}},{kind:"method",key:"focus",value:function(){var e;null===(e=this._comboBox)||void 0===e||e.focus()}},{kind:"method",key:"firstUpdated",value:function(){this._getConfigEntries()}},{kind:"field",key:"_rowRenderer",value(){return e=>{var i;return n`<mwc-list-item twoline graphic="icon">
    <span
      >${e.title||this.hass.localize("ui.panel.config.integrations.config_entry.unnamed_entry")}</span
    >
    <span slot="secondary">${e.localized_domain_name}</span>
    <img
      slot="graphic"
      src=${h({domain:e.domain,type:"icon",darkOptimized:null===(i=this.hass.themes)||void 0===i?void 0:i.darkMode})}
      referrerpolicy="no-referrer"
      @error=${this._onImageError}
      @load=${this._onImageLoad}
    />
  </mwc-list-item>`}}},{kind:"method",key:"render",value:function(){return this._configEntries?n`
      <ha-combo-box
        .hass=${this.hass}
        .label=${void 0===this.label&&this.hass?this.hass.localize("ui.components.config-entry-picker.config_entry"):this.label}
        .value=${this._value}
        .required=${this.required}
        .disabled=${this.disabled}
        .helper=${this.helper}
        .renderer=${this._rowRenderer}
        .items=${this._configEntries}
        item-value-path="entry_id"
        item-id-path="entry_id"
        item-label-path="title"
        @value-changed=${this._valueChanged}
      ></ha-combo-box>
    `:n``}},{kind:"method",key:"_onImageLoad",value:function(e){e.target.style.visibility="initial"}},{kind:"method",key:"_onImageError",value:function(e){e.target.style.visibility="hidden"}},{kind:"method",key:"_getConfigEntries",value:async function(){l(this.hass,{type:["device","hub","service"],domain:this.integration}).then((e=>{this._configEntries=e.map((e=>({...e,localized_domain_name:c(this.hass.localize,e.domain)}))).sort(((e,i)=>u(e.localized_domain_name+e.title,i.localized_domain_name+i.title)))}))}},{kind:"get",key:"_value",value:function(){return this.value||""}},{kind:"method",key:"_valueChanged",value:function(e){e.stopPropagation();const i=e.detail.value;i!==this._value&&this._setValue(i)}},{kind:"method",key:"_setValue",value:function(e){this.value=e,setTimeout((()=>{r(this,"value-changed",{value:e}),r(this,"change")}),0)}}]}}),i);let v=e([d("ha-selector-config_entry")],(function(e,i){return{F:class extends i{constructor(...i){super(...i),e(this)}},d:[{kind:"field",decorators:[t({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[t({attribute:!1})],key:"selector",value:void 0},{kind:"field",decorators:[t()],key:"value",value:void 0},{kind:"field",decorators:[t()],key:"label",value:void 0},{kind:"field",decorators:[t()],key:"helper",value:void 0},{kind:"field",decorators:[t({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[t({type:Boolean})],key:"required",value:()=>!0},{kind:"method",key:"render",value:function(){return n`<ha-config-entry-picker
      .hass=${this.hass}
      .value=${this.value}
      .label=${this.label}
      .helper=${this.helper}
      .disabled=${this.disabled}
      .required=${this.required}
      .integration=${this.selector.config_entry.integration}
      allow-custom-entity
    ></ha-config-entry-picker>`}},{kind:"field",static:!0,key:"styles",value:()=>s`
    ha-config-entry-picker {
      width: 100%;
    }
  `}]}}),i);export{v as HaConfigEntrySelector};
