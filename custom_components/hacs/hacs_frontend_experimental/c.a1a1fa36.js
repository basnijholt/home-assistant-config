import{_ as e,j as t,e as i,i as a,y as o,n as d,E as s,G as l,O as r}from"./main-85e087f9.js";import{S as u}from"./c.59ae3c13.js";import{f as n}from"./c.8e31888c.js";import"./c.fea0de05.js";import"./c.a42008f9.js";import"./c.388f6c87.js";import"./c.8e28b461.js";import"./c.eab7754a.js";import"./c.89ccd556.js";import"./c.ef7f8e16.js";import"./c.743a15a1.js";import"./c.2610e8cd.js";import"./c.a0946910.js";import"./c.e3f3a0be.js";import"./c.7398f5d5.js";e([d("ha-entity-attribute-picker")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[i({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[i()],key:"entityId",value:void 0},{kind:"field",decorators:[i({type:Array,attribute:"hide-attributes"})],key:"hideAttributes",value:void 0},{kind:"field",decorators:[i({type:Boolean})],key:"autofocus",value:()=>!1},{kind:"field",decorators:[i({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[i({type:Boolean})],key:"required",value:()=>!1},{kind:"field",decorators:[i({type:Boolean,attribute:"allow-custom-value"})],key:"allowCustomValue",value:void 0},{kind:"field",decorators:[i()],key:"label",value:void 0},{kind:"field",decorators:[i()],key:"value",value:void 0},{kind:"field",decorators:[i()],key:"helper",value:void 0},{kind:"field",decorators:[i({type:Boolean})],key:"_opened",value:()=>!1},{kind:"field",decorators:[a("ha-combo-box",!0)],key:"_comboBox",value:void 0},{kind:"method",key:"shouldUpdate",value:function(e){return!(!e.has("_opened")&&this._opened)}},{kind:"method",key:"updated",value:function(e){if(e.has("_opened")&&this._opened){const e=this.entityId?this.hass.states[this.entityId]:void 0;this._comboBox.items=e?Object.keys(e.attributes).filter((e=>{var t;return!(null!==(t=this.hideAttributes)&&void 0!==t&&t.includes(e))})).map((e=>({value:e,label:n(e)}))):[]}}},{kind:"method",key:"render",value:function(){var e;return this.hass?o`
      <ha-combo-box
        .hass=${this.hass}
        .value=${this.value?n(this.value):""}
        .autofocus=${this.autofocus}
        .label=${null!==(e=this.label)&&void 0!==e?e:this.hass.localize("ui.components.entity.entity-attribute-picker.attribute")}
        .disabled=${this.disabled||!this.entityId}
        .required=${this.required}
        .helper=${this.helper}
        .allowCustomValue=${this.allowCustomValue}
        item-value-path="value"
        item-label-path="label"
        @opened-changed=${this._openedChanged}
        @value-changed=${this._valueChanged}
      >
      </ha-combo-box>
    `:o``}},{kind:"method",key:"_openedChanged",value:function(e){this._opened=e.detail.value}},{kind:"method",key:"_valueChanged",value:function(e){this.value=e.detail.value}}]}}),t);let h=e([d("ha-selector-attribute")],(function(e,t){class a extends t{constructor(...t){super(...t),e(this)}}return{F:a,d:[{kind:"field",decorators:[i({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[i({attribute:!1})],key:"selector",value:void 0},{kind:"field",decorators:[i()],key:"value",value:void 0},{kind:"field",decorators:[i()],key:"label",value:void 0},{kind:"field",decorators:[i()],key:"helper",value:void 0},{kind:"field",decorators:[i({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[i({type:Boolean})],key:"required",value:()=>!0},{kind:"field",decorators:[i({attribute:!1})],key:"context",value:void 0},{kind:"method",key:"render",value:function(){var e,t,i;return o`
      <ha-entity-attribute-picker
        .hass=${this.hass}
        .entityId=${(null===(e=this.selector.attribute)||void 0===e?void 0:e.entity_id)||(null===(t=this.context)||void 0===t?void 0:t.filter_entity)}
        .hideAttributes=${null===(i=this.selector.attribute)||void 0===i?void 0:i.hide_attributes}
        .value=${this.value}
        .label=${this.label}
        .helper=${this.helper}
        .disabled=${this.disabled}
        .required=${this.required}
        allow-custom-value
      ></ha-entity-attribute-picker>
    `}},{kind:"method",key:"updated",value:function(e){var t;if(s(l(a.prototype),"updated",this).call(this,e),!this.value||null!==(t=this.selector.attribute)&&void 0!==t&&t.entity_id||!e.has("context"))return;const i=e.get("context");if(!this.context||(null==i?void 0:i.filter_entity)===this.context.filter_entity)return;let o=!1;if(this.context.filter_entity){const e=this.hass.states[this.context.filter_entity];e&&this.value in e.attributes||(o=!0)}else o=void 0!==this.value;o&&r(this,"value-changed",{value:void 0})}}]}}),u(t));export{h as HaSelectorAttribute};
