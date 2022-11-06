import{_ as e,j as i,e as t,t as a,y as s,a5 as l,J as d,i as o,ef as n,d as r,n as v}from"./main-ec7846c8.js";import{c}from"./c.d2f13ac1.js";import{c as h}from"./c.1024e243.js";import{d as u,f as _}from"./c.05172f3d.js";import{d as f}from"./c.4f015773.js";import"./c.0e3055bd.js";import"./c.541a83df.js";import"./c.227858d9.js";import"./c.87e5362a.js";import"./c.f490cc01.js";const k=e=>s`<mwc-list-item twoline>
  <span>${e.name}</span>
  <span slot="secondary"
    >${e.name===e.service?"":e.service}</span
  >
</mwc-list-item>`;let p=e(null,(function(e,i){return{F:class extends i{constructor(...i){super(...i),e(this)}},d:[{kind:"field",decorators:[t({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[t({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[t()],key:"value",value:void 0},{kind:"field",decorators:[a()],key:"_filter",value:void 0},{kind:"method",key:"render",value:function(){return s`
      <ha-combo-box
        .hass=${this.hass}
        .label=${this.hass.localize("ui.components.service-picker.service")}
        .filteredItems=${this._filteredServices(this.hass.localize,this.hass.services,this._filter)}
        .value=${this.value}
        .disabled=${this.disabled}
        .renderer=${k}
        item-value-path="service"
        item-label-path="name"
        allow-custom-value
        @filter-changed=${this._filterChanged}
        @value-changed=${this._valueChanged}
      ></ha-combo-box>
    `}},{kind:"field",key:"_services",value:()=>l(((e,i)=>{if(!i)return[];const t=[];return Object.keys(i).sort().forEach((a=>{const s=Object.keys(i[a]).sort();for(const l of s)t.push({service:`${a}.${l}`,name:`${u(e,a)}: ${i[a][l].name||l}`})})),t}))},{kind:"field",key:"_filteredServices",value(){return l(((e,i,t)=>{if(!i)return[];const a=this._services(e,i);return t?a.filter((e=>{var i;return e.service.toLowerCase().includes(t)||(null===(i=e.name)||void 0===i?void 0:i.toLowerCase().includes(t))})):a}))}},{kind:"method",key:"_filterChanged",value:function(e){this._filter=e.detail.value.toLowerCase()}},{kind:"method",key:"_valueChanged",value:function(e){this.value=e.detail.value,d(this,"change"),d(this,"value-changed",{value:this.value})}}]}}),i);customElements.define("ha-service-picker",p);const y=e=>e.selector&&!e.required&&!("boolean"in e.selector&&e.default);e([v("ha-service-control")],(function(e,i){return{F:class extends i{constructor(...i){super(...i),e(this)}},d:[{kind:"field",decorators:[t({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[t({attribute:!1})],key:"value",value:void 0},{kind:"field",decorators:[t({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[t({reflect:!0,type:Boolean})],key:"narrow",value:void 0},{kind:"field",decorators:[t({type:Boolean})],key:"showAdvanced",value:void 0},{kind:"field",decorators:[a()],key:"_value",value:void 0},{kind:"field",decorators:[a()],key:"_checkedKeys",value:()=>new Set},{kind:"field",decorators:[a()],key:"_manifest",value:void 0},{kind:"field",decorators:[o("ha-yaml-editor")],key:"_yamlEditor",value:void 0},{kind:"method",key:"willUpdate",value:function(e){var i,t,a,s,l,o,n,r,v,h,u;if(!e.has("value"))return;const _=e.get("value");(null==_?void 0:_.service)!==(null===(i=this.value)||void 0===i?void 0:i.service)&&(this._checkedKeys=new Set);const f=this._getServiceInfo(null===(t=this.value)||void 0===t?void 0:t.service,this.hass.services);var k;null!==(a=this.value)&&void 0!==a&&a.service?null!=_&&_.service&&c(this.value.service)===c(_.service)||this._fetchManifest(c(null===(k=this.value)||void 0===k?void 0:k.service)):this._manifest=void 0;if(f&&"target"in f&&(null!==(s=this.value)&&void 0!==s&&null!==(l=s.data)&&void 0!==l&&l.entity_id||null!==(o=this.value)&&void 0!==o&&null!==(n=o.data)&&void 0!==n&&n.area_id||null!==(r=this.value)&&void 0!==r&&null!==(v=r.data)&&void 0!==v&&v.device_id)){var p,y,g;const e={...this.value.target};!this.value.data.entity_id||null!==(p=this.value.target)&&void 0!==p&&p.entity_id||(e.entity_id=this.value.data.entity_id),!this.value.data.area_id||null!==(y=this.value.target)&&void 0!==y&&y.area_id||(e.area_id=this.value.data.area_id),!this.value.data.device_id||null!==(g=this.value.target)&&void 0!==g&&g.device_id||(e.device_id=this.value.data.device_id),this._value={...this.value,target:e,data:{...this.value.data}},delete this._value.data.entity_id,delete this._value.data.device_id,delete this._value.data.area_id}else this._value=this.value;if((null==_?void 0:_.service)!==(null===(h=this.value)||void 0===h?void 0:h.service)){let e=!1;this._value&&f&&(this._value.data||(this._value.data={}),f.fields.forEach((i=>{i.selector&&i.required&&void 0===i.default&&"boolean"in i.selector&&void 0===this._value.data[i.key]&&(e=!0,this._value.data[i.key]=!1)}))),e&&d(this,"value-changed",{value:{...this._value}})}if(null!==(u=this._value)&&void 0!==u&&u.data){const e=this._yamlEditor;e&&e.value!==this._value.data&&e.setValue(this._value.data)}}},{kind:"field",key:"_getServiceInfo",value:()=>l(((e,i)=>{if(!e||!i)return;const t=c(e),a=h(e);if(!(t in i))return;if(!(a in i[t]))return;const s=Object.entries(i[t][a].fields).map((([e,i])=>({key:e,...i,selector:i.selector})));return{...i[t][a],fields:s,hasSelector:s.length?s.filter((e=>e.selector)).map((e=>e.key)):[]}}))},{kind:"method",key:"render",value:function(){var e,i,t,a,l,d,o;const r=this._getServiceInfo(null===(e=this._value)||void 0===e?void 0:e.service,this.hass.services),v=(null==r?void 0:r.fields.length)&&!r.hasSelector.length||r&&Object.keys((null===(i=this._value)||void 0===i?void 0:i.data)||{}).some((e=>!r.hasSelector.includes(e))),c=v&&(null==r?void 0:r.fields.find((e=>"entity_id"===e.key))),h=Boolean(!v&&(null==r?void 0:r.fields.some((e=>y(e)))));return s`<ha-service-picker
        .hass=${this.hass}
        .value=${null===(t=this._value)||void 0===t?void 0:t.service}
        .disabled=${this.disabled}
        @value-changed=${this._serviceChanged}
      ></ha-service-picker>
      <div class="description">
        ${null!=r&&r.description?s`<p>${null==r?void 0:r.description}</p>`:""}
        ${this._manifest?s` <a
              href=${this._manifest.is_built_in?f(this.hass,`/integrations/${this._manifest.domain}`):this._manifest.documentation}
              title=${this.hass.localize("ui.components.service-control.integration_doc")}
              target="_blank"
              rel="noreferrer"
            >
              <ha-icon-button
                .path=${n}
                class="help-icon"
              ></ha-icon-button>
            </a>`:""}
      </div>
      ${r&&"target"in r?s`<ha-settings-row .narrow=${this.narrow}>
            ${h?s`<div slot="prefix" class="checkbox-spacer"></div>`:""}
            <span slot="heading"
              >${this.hass.localize("ui.components.service-control.target")}</span
            >
            <span slot="description"
              >${this.hass.localize("ui.components.service-control.target_description")}</span
            ><ha-selector
              .hass=${this.hass}
              .selector=${r.target?{target:r.target}:{target:{}}}
              .disabled=${this.disabled}
              @value-changed=${this._targetChanged}
              .value=${null===(a=this._value)||void 0===a?void 0:a.target}
            ></ha-selector
          ></ha-settings-row>`:c?s`<ha-entity-picker
            .hass=${this.hass}
            .disabled=${this.disabled}
            .value=${null===(l=this._value)||void 0===l||null===(d=l.data)||void 0===d?void 0:d.entity_id}
            .label=${c.description}
            @value-changed=${this._entityPicked}
            allow-custom-entity
          ></ha-entity-picker>`:""}
      ${v?s`<ha-yaml-editor
            .hass=${this.hass}
            .label=${this.hass.localize("ui.components.service-control.data")}
            .name=${"data"}
            .readOnly=${this.disabled}
            .defaultValue=${null===(o=this._value)||void 0===o?void 0:o.data}
            @value-changed=${this._dataChanged}
          ></ha-yaml-editor>`:null==r?void 0:r.fields.map((e=>{var i,t,a,l;const d=y(e);return e.selector&&(!e.advanced||this.showAdvanced||null!==(i=this._value)&&void 0!==i&&i.data&&void 0!==this._value.data[e.key])?s`<ha-settings-row .narrow=${this.narrow}>
                  ${d?s`<ha-checkbox
                        .key=${e.key}
                        .checked=${this._checkedKeys.has(e.key)||(null===(t=this._value)||void 0===t?void 0:t.data)&&void 0!==this._value.data[e.key]}
                        .disabled=${this.disabled}
                        @change=${this._checkboxChanged}
                        slot="prefix"
                      ></ha-checkbox>`:h?s`<div slot="prefix" class="checkbox-spacer"></div>`:""}
                  <span slot="heading">${e.name||e.key}</span>
                  <span slot="description">${null==e?void 0:e.description}</span>
                  <ha-selector
                    .disabled=${this.disabled||d&&!this._checkedKeys.has(e.key)&&(!(null!==(a=this._value)&&void 0!==a&&a.data)||void 0===this._value.data[e.key])}
                    .hass=${this.hass}
                    .selector=${e.selector}
                    .key=${e.key}
                    @value-changed=${this._serviceDataChanged}
                    .value=${null!==(l=this._value)&&void 0!==l&&l.data&&void 0!==this._value.data[e.key]?this._value.data[e.key]:e.default}
                  ></ha-selector>
                </ha-settings-row>`:""}))}`}},{kind:"method",key:"_checkboxChanged",value:function(e){const i=e.currentTarget.checked,t=e.currentTarget.key;let a;if(i){var s,l,o;this._checkedKeys.add(t);const e=null===(s=this._getServiceInfo(null===(o=this._value)||void 0===o?void 0:o.service,this.hass.services))||void 0===s||null===(l=s.fields.find((e=>e.key===t)))||void 0===l?void 0:l.default;var n;if(e)a={...null===(n=this._value)||void 0===n?void 0:n.data,[t]:e}}else{var r;this._checkedKeys.delete(t),a={...null===(r=this._value)||void 0===r?void 0:r.data},delete a[t]}a&&d(this,"value-changed",{value:{...this._value,data:a}}),this.requestUpdate("_checkedKeys")}},{kind:"method",key:"_serviceChanged",value:function(e){var i;e.stopPropagation(),e.detail.value!==(null===(i=this._value)||void 0===i?void 0:i.service)&&d(this,"value-changed",{value:{service:e.detail.value||""}})}},{kind:"method",key:"_entityPicked",value:function(e){var i,t,a;e.stopPropagation();const s=e.detail.value;if((null===(i=this._value)||void 0===i||null===(t=i.data)||void 0===t?void 0:t.entity_id)===s)return;let l;var o;!s&&null!==(a=this._value)&&void 0!==a&&a.data?(l={...this._value},delete l.data.entity_id):l={...this._value,data:{...null===(o=this._value)||void 0===o?void 0:o.data,entity_id:e.detail.value}};d(this,"value-changed",{value:l})}},{kind:"method",key:"_targetChanged",value:function(e){var i;e.stopPropagation();const t=e.detail.value;if((null===(i=this._value)||void 0===i?void 0:i.target)===t)return;let a;t?a={...this._value,target:e.detail.value}:(a={...this._value},delete a.target),d(this,"value-changed",{value:a})}},{kind:"method",key:"_serviceDataChanged",value:function(e){var i,t,a,s,l;e.stopPropagation();const o=e.currentTarget.key,n=e.detail.value;if((null===(i=this._value)||void 0===i||null===(t=i.data)||void 0===t?void 0:t[o])===n||(null===(a=this._value)||void 0===a||null===(s=a.data)||void 0===s||!s[o])&&(""===n||void 0===n))return;const r={...null===(l=this._value)||void 0===l?void 0:l.data,[o]:n};""!==n&&void 0!==n||delete r[o],d(this,"value-changed",{value:{...this._value,data:r}})}},{kind:"method",key:"_dataChanged",value:function(e){e.stopPropagation(),e.detail.isValid&&d(this,"value-changed",{value:{...this._value,data:e.detail.value}})}},{kind:"method",key:"_fetchManifest",value:async function(e){this._manifest=void 0;try{this._manifest=await _(this.hass,e)}catch(e){}}},{kind:"get",static:!0,key:"styles",value:function(){return r`
      ha-settings-row {
        padding: var(--service-control-padding, 0 16px);
      }
      ha-settings-row {
        --paper-time-input-justify-content: flex-end;
        --settings-row-content-width: 100%;
        --settings-row-prefix-display: contents;
        border-top: var(
          --service-control-items-border-top,
          1px solid var(--divider-color)
        );
      }
      ha-service-picker,
      ha-entity-picker,
      ha-yaml-editor {
        display: block;
        margin: var(--service-control-padding, 0 16px);
      }
      ha-yaml-editor {
        padding: 16px 0;
      }
      p {
        margin: var(--service-control-padding, 0 16px);
        padding: 16px 0;
      }
      .checkbox-spacer {
        width: 32px;
      }
      ha-checkbox {
        margin-left: -16px;
      }
      .help-icon {
        color: var(--secondary-text-color);
      }
      .description {
        justify-content: space-between;
        display: flex;
        align-items: center;
        padding-right: 2px;
      }
    `}}]}}),i);
