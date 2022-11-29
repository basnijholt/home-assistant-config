import{_ as e,j as i,e as t,y as a,bv as o,d as n,n as l,a7 as s,O as c}from"./main-c66a9a06.js";import{s as r}from"./c.a5550d10.js";import"./c.24287846.js";import"./c.7cf5fd2b.js";import"./c.6829e397.js";import"./c.8e28b461.js";import"./c.41d13611.js";import"./c.d2f13ac1.js";import"./c.1024e243.js";import"./c.05172f3d.js";import"./c.4f015773.js";import"./c.bbadaeea.js";import"./c.930daaba.js";import"./c.08837419.js";import"./c.89ace730.js";import"./c.5fe2e3ab.js";import"./c.c55c9f95.js";e([l("ha-help-tooltip")],(function(e,i){return{F:class extends i{constructor(...i){super(...i),e(this)}},d:[{kind:"field",decorators:[t()],key:"label",value:void 0},{kind:"field",decorators:[t()],key:"position",value:()=>"top"},{kind:"method",key:"render",value:function(){return a`
      <ha-svg-icon .path=${o}></ha-svg-icon>
      <paper-tooltip
        offset="4"
        .position=${this.position}
        .fitToVisibleBounds=${!0}
        >${this.label}</paper-tooltip
      >
    `}},{kind:"get",static:!0,key:"styles",value:function(){return n`
      ha-svg-icon {
        --mdc-icon-size: var(--ha-help-tooltip-size, 14px);
        color: var(--ha-help-tooltip-color, var(--disabled-text-color));
      }
    `}}]}}),i);const d=["more-info","toggle","navigate","url","call-service","none"];e([l("hui-action-editor")],(function(e,i){return{F:class extends i{constructor(...i){super(...i),e(this)}},d:[{kind:"field",decorators:[t()],key:"config",value:void 0},{kind:"field",decorators:[t()],key:"label",value:void 0},{kind:"field",decorators:[t()],key:"actions",value:void 0},{kind:"field",decorators:[t()],key:"tooltipText",value:void 0},{kind:"field",decorators:[t()],key:"hass",value:void 0},{kind:"get",key:"_navigation_path",value:function(){const e=this.config;return(null==e?void 0:e.navigation_path)||""}},{kind:"get",key:"_url_path",value:function(){const e=this.config;return(null==e?void 0:e.url_path)||""}},{kind:"get",key:"_service",value:function(){const e=this.config;return(null==e?void 0:e.service)||""}},{kind:"field",key:"_serviceAction",value(){return s((e=>{var i;return{service:this._service,data:null!==(i=e.data)&&void 0!==i?i:e.service_data,target:e.target}}))}},{kind:"method",key:"render",value:function(){var e,i,t,o,n,l,s;if(!this.hass)return a``;const c=null!==(e=this.actions)&&void 0!==e?e:d;return a`
      <div class="dropdown">
        <ha-select
          .label=${this.label}
          .configValue=${"action"}
          @selected=${this._actionPicked}
          .value=${null!==(i=null===(t=this.config)||void 0===t?void 0:t.action)&&void 0!==i?i:"default"}
          @closed=${r}
          fixedMenuPosition
          naturalMenuWidt
        >
          <mwc-list-item value="default">
            ${this.hass.localize("ui.panel.lovelace.editor.action-editor.actions.default_action")}
          </mwc-list-item>
          ${c.map((e=>a`
              <mwc-list-item .value=${e}>
                ${this.hass.localize(`ui.panel.lovelace.editor.action-editor.actions.${e}`)}
              </mwc-list-item>
            `))}
        </ha-select>
        ${this.tooltipText?a`
              <ha-help-tooltip .label=${this.tooltipText}></ha-help-tooltip>
            `:""}
      </div>
      ${"navigate"===(null===(o=this.config)||void 0===o?void 0:o.action)?a`
            <ha-navigation-picker
              .hass=${this.hass}
              .label=${this.hass.localize("ui.panel.lovelace.editor.action-editor.navigation_path")}
              .value=${this._navigation_path}
              @value-changed=${this._navigateValueChanged}
            ></ha-navigation-picker>
          `:""}
      ${"url"===(null===(n=this.config)||void 0===n?void 0:n.action)?a`
            <ha-textfield
              .label=${this.hass.localize("ui.panel.lovelace.editor.action-editor.url_path")}
              .value=${this._url_path}
              .configValue=${"url_path"}
              @input=${this._valueChanged}
            ></ha-textfield>
          `:""}
      ${"call-service"===(null===(l=this.config)||void 0===l?void 0:l.action)?a`
            <ha-service-control
              .hass=${this.hass}
              .value=${this._serviceAction(this.config)}
              .showAdvanced=${null===(s=this.hass.userData)||void 0===s?void 0:s.showAdvanced}
              narrow
              @value-changed=${this._serviceValueChanged}
            ></ha-service-control>
          `:""}
    `}},{kind:"method",key:"_actionPicked",value:function(e){var i;if(e.stopPropagation(),!this.hass)return;const t=e.target.value;if((null===(i=this.config)||void 0===i?void 0:i.action)===t)return;if("default"===t)return void c(this,"value-changed",{value:void 0});let a;switch(t){case"url":a={url_path:this._url_path};break;case"call-service":a={service:this._service};break;case"navigate":a={navigation_path:this._navigation_path}}c(this,"value-changed",{value:{action:t,...a}})}},{kind:"method",key:"_valueChanged",value:function(e){if(e.stopPropagation(),!this.hass)return;const i=e.target,t=e.target.value;this[`_${i.configValue}`]!==t&&i.configValue&&c(this,"value-changed",{value:{...this.config,[i.configValue]:t}})}},{kind:"method",key:"_serviceValueChanged",value:function(e){e.stopPropagation();const i={...this.config,service:e.detail.value.service||"",data:e.detail.value.data||{},target:e.detail.value.target||{}};"service_data"in i&&delete i.service_data,c(this,"value-changed",{value:i})}},{kind:"method",key:"_navigateValueChanged",value:function(e){e.stopPropagation();const i={...this.config,navigation_path:e.detail.value};c(this,"value-changed",{value:i})}},{kind:"get",static:!0,key:"styles",value:function(){return n`
      .dropdown {
        position: relative;
      }
      ha-help-tooltip {
        position: absolute;
        right: 40px;
        top: 16px;
        inset-inline-start: initial;
        inset-inline-end: 40px;
        direction: var(--direction);
      }
      ha-select,
      ha-textfield {
        width: 100%;
      }
      ha-service-control,
      ha-navigation-picker {
        display: block;
      }
      ha-textfield,
      ha-service-control,
      ha-navigation-picker {
        margin-top: 8px;
      }
      ha-service-control {
        --service-control-padding: 0;
      }
    `}}]}}),i);let v=e([l("ha-selector-ui-action")],(function(e,i){return{F:class extends i{constructor(...i){super(...i),e(this)}},d:[{kind:"field",decorators:[t()],key:"hass",value:void 0},{kind:"field",decorators:[t()],key:"selector",value:void 0},{kind:"field",decorators:[t()],key:"value",value:void 0},{kind:"field",decorators:[t()],key:"label",value:void 0},{kind:"field",decorators:[t()],key:"helper",value:void 0},{kind:"method",key:"render",value:function(){var e;return a`
      <hui-action-editor
        .label=${this.label}
        .hass=${this.hass}
        .config=${this.value}
        .actions=${null===(e=this.selector["ui-action"])||void 0===e?void 0:e.actions}
        .tooltipText=${this.helper}
        @value-changed=${this._valueChanged}
      ></hui-action-editor>
    `}},{kind:"method",key:"_valueChanged",value:function(e){c(this,"value-changed",{value:e.detail.value})}}]}}),i);export{v as HaSelectorUiAction};
