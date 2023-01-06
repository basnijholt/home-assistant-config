import{_ as e,j as i,e as o,t as a,i as s,y as d,O as t,n,d as l}from"./main-73688df5.js";import{i as r}from"./c.21c042d4.js";import{s as c}from"./c.874c8cfd.js";import{a as u}from"./c.900ba4f7.js";const h=async e=>((e,i,o,a)=>{const[s,d,t]=e.split(".",3);return Number(s)>i||Number(s)===i&&(void 0===a?Number(d)>=o:Number(d)>o)||void 0!==a&&Number(s)===i&&Number(d)===o&&Number(t)>=a})(e.config.version,2021,2,4)?e.callWS({type:"supervisor/api",endpoint:"/addons",method:"get"}):(await e.callApi("GET","hassio/addons")).data,v=e=>d`<mwc-list-item twoline graphic="icon">
  <span>${e.name}</span>
  <span slot="secondary">${e.slug}</span>
  ${e.icon?d`<img slot="graphic" .src="/api/hassio/addons/${e.slug}/icon" />`:""}
</mwc-list-item>`;e([n("ha-addon-picker")],(function(e,i){return{F:class extends i{constructor(...i){super(...i),e(this)}},d:[{kind:"field",key:"hass",value:void 0},{kind:"field",decorators:[o()],key:"label",value:void 0},{kind:"field",decorators:[o()],key:"value",value:()=>""},{kind:"field",decorators:[o()],key:"helper",value:void 0},{kind:"field",decorators:[a()],key:"_addons",value:void 0},{kind:"field",decorators:[o({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[o({type:Boolean})],key:"required",value:()=>!1},{kind:"field",decorators:[s("ha-combo-box")],key:"_comboBox",value:void 0},{kind:"method",key:"open",value:function(){var e;null===(e=this._comboBox)||void 0===e||e.open()}},{kind:"method",key:"focus",value:function(){var e;null===(e=this._comboBox)||void 0===e||e.focus()}},{kind:"method",key:"firstUpdated",value:function(){this._getAddons()}},{kind:"method",key:"render",value:function(){return this._addons?d`
      <ha-combo-box
        .hass=${this.hass}
        .label=${void 0===this.label&&this.hass?this.hass.localize("ui.components.addon-picker.addon"):this.label}
        .value=${this._value}
        .required=${this.required}
        .disabled=${this.disabled}
        .helper=${this.helper}
        .renderer=${v}
        .items=${this._addons}
        item-value-path="slug"
        item-id-path="slug"
        item-label-path="name"
        @value-changed=${this._addonChanged}
      ></ha-combo-box>
    `:d``}},{kind:"method",key:"_getAddons",value:async function(){try{if(r(this.hass,"hassio")){const e=await h(this.hass);this._addons=e.addons.filter((e=>e.version)).sort(((e,i)=>c(e.name,i.name)))}else u(this,{title:this.hass.localize("ui.components.addon-picker.error.no_supervisor.title"),text:this.hass.localize("ui.components.addon-picker.error.no_supervisor.description")})}catch(e){u(this,{title:this.hass.localize("ui.components.addon-picker.error.fetch_addons.title"),text:this.hass.localize("ui.components.addon-picker.error.fetch_addons.description")})}}},{kind:"get",key:"_value",value:function(){return this.value||""}},{kind:"method",key:"_addonChanged",value:function(e){e.stopPropagation();const i=e.detail.value;i!==this._value&&this._setValue(i)}},{kind:"method",key:"_setValue",value:function(e){this.value=e,setTimeout((()=>{t(this,"value-changed",{value:e}),t(this,"change")}),0)}}]}}),i);let k=e([n("ha-selector-addon")],(function(e,i){return{F:class extends i{constructor(...i){super(...i),e(this)}},d:[{kind:"field",decorators:[o()],key:"hass",value:void 0},{kind:"field",decorators:[o()],key:"selector",value:void 0},{kind:"field",decorators:[o()],key:"value",value:void 0},{kind:"field",decorators:[o()],key:"label",value:void 0},{kind:"field",decorators:[o()],key:"helper",value:void 0},{kind:"field",decorators:[o({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[o({type:Boolean})],key:"required",value:()=>!0},{kind:"method",key:"render",value:function(){return d`<ha-addon-picker
      .hass=${this.hass}
      .value=${this.value}
      .label=${this.label}
      .helper=${this.helper}
      .disabled=${this.disabled}
      .required=${this.required}
      allow-custom-entity
    ></ha-addon-picker>`}},{kind:"field",static:!0,key:"styles",value:()=>l`
    ha-addon-picker {
      width: 100%;
    }
  `}]}}),i);export{k as HaAddonSelector};
