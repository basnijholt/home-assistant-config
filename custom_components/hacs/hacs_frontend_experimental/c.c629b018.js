import{_ as e,j as t,e as a,t as i,i as o,y as n,O as l,d as s,n as d}from"./main-85e087f9.js";import"./c.fea0de05.js";const h=e=>e.replace(/^_*(.)|_+(.)/g,((e,t,a)=>t?t.toUpperCase():" "+a.toUpperCase())),r=[],c=e=>n`
  <mwc-list-item graphic="icon" .twoline=${!!e.title}>
    <ha-icon .icon=${e.icon} slot="graphic"></ha-icon>
    <span>${e.title||e.path}</span>
    <span slot="secondary">${e.path}</span>
  </mwc-list-item>
`,u=(e,t,a)=>{var i,o,n;return{path:`/${e}/${null!==(i=t.path)&&void 0!==i?i:a}`,icon:null!==(o=t.icon)&&void 0!==o?o:"mdi:view-compact",title:null!==(n=t.title)&&void 0!==n?n:t.path?h(t.path):`${a}`}},v=(e,t)=>{var a;return{path:`/${t.url_path}`,icon:null!==(a=t.icon)&&void 0!==a?a:"mdi:view-dashboard",title:t.url_path===e.defaultPanel?e.localize("panel.states"):e.localize(`panel.${t.title}`)||t.title||(t.url_path?h(t.url_path):"")}};e([d("ha-navigation-picker")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[a()],key:"hass",value:void 0},{kind:"field",decorators:[a()],key:"label",value:void 0},{kind:"field",decorators:[a()],key:"value",value:void 0},{kind:"field",decorators:[a()],key:"helper",value:void 0},{kind:"field",decorators:[a({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[a({type:Boolean})],key:"required",value:()=>!1},{kind:"field",decorators:[i()],key:"_opened",value:()=>!1},{kind:"field",key:"navigationItemsLoaded",value:()=>!1},{kind:"field",key:"navigationItems",value:()=>r},{kind:"field",decorators:[o("ha-combo-box",!0)],key:"comboBox",value:void 0},{kind:"method",key:"render",value:function(){return n`
      <ha-combo-box
        .hass=${this.hass}
        item-value-path="path"
        item-label-path="path"
        .value=${this._value}
        allow-custom-value
        .filteredItems=${this.navigationItems}
        .label=${this.label}
        .helper=${this.helper}
        .disabled=${this.disabled}
        .required=${this.required}
        .renderer=${c}
        @opened-changed=${this._openedChanged}
        @value-changed=${this._valueChanged}
        @filter-changed=${this._filterChanged}
      >
      </ha-combo-box>
    `}},{kind:"method",key:"_openedChanged",value:async function(e){this._opened=e.detail.value,this._opened&&!this.navigationItemsLoaded&&this._loadNavigationItems()}},{kind:"method",key:"_loadNavigationItems",value:async function(){this.navigationItemsLoaded=!0;const e=Object.entries(this.hass.panels).map((([e,t])=>({id:e,...t}))),t=e.filter((e=>"lovelace"===e.component_name)),a=await Promise.all(t.map((e=>{return(t=this.hass.connection,a="lovelace"===e.url_path?null:e.url_path,i=!0,t.sendMessagePromise({type:"lovelace/config",url_path:a,force:i})).then((t=>[e.id,t])).catch((t=>[e.id,void 0]));var t,a,i}))),i=new Map(a);this.navigationItems=[];for(const t of e){this.navigationItems.push(v(this.hass,t));const e=i.get(t.id);e&&e.views.forEach(((e,a)=>this.navigationItems.push(u(t.url_path,e,a))))}this.comboBox.filteredItems=this.navigationItems}},{kind:"method",key:"shouldUpdate",value:function(e){return!this._opened||e.has("_opened")}},{kind:"method",key:"_valueChanged",value:function(e){e.stopPropagation(),this._setValue(e.detail.value)}},{kind:"method",key:"_setValue",value:function(e){this.value=e,l(this,"value-changed",{value:this._value},{bubbles:!1,composed:!1})}},{kind:"method",key:"_filterChanged",value:function(e){const t=e.detail.value.toLowerCase();if(t.length>=2){const e=[];this.navigationItems.forEach((a=>{(a.path.toLowerCase().includes(t)||a.title.toLowerCase().includes(t))&&e.push(a)})),e.length>0?this.comboBox.filteredItems=e:this.comboBox.filteredItems=[]}else this.comboBox.filteredItems=this.navigationItems}},{kind:"get",key:"_value",value:function(){return this.value||""}},{kind:"get",static:!0,key:"styles",value:function(){return s`
      ha-icon,
      ha-svg-icon {
        color: var(--primary-text-color);
        position: relative;
        bottom: 0px;
      }
      *[slot="prefix"] {
        margin-right: 8px;
      }
    `}}]}}),t);
