import{_ as e,j as l,e as i,O as a,y as r,C as o,d as t,n as d}from"./main-c4dd4de7.js";import"./c.469b562b.js";import{s}from"./c.984a9eec.js";import"./c.8e28b461.js";const c=new Set(["primary","accent","disabled","red","pink","purple","deep-purple","indigo","blue","light-blue","cyan","teal","green","light-green","lime","yellow","amber","orange","deep-orange","brown","grey","blue-grey","black","white"]);function n(e){return c.has(e)?`rgb(var(--rgb-${e}-color))`:e}e([d("hui-color-picker")],(function(e,l){return{F:class extends l{constructor(...l){super(...l),e(this)}},d:[{kind:"field",decorators:[i()],key:"label",value:void 0},{kind:"field",decorators:[i()],key:"helper",value:void 0},{kind:"field",decorators:[i()],key:"hass",value:void 0},{kind:"field",decorators:[i()],key:"value",value:void 0},{kind:"field",decorators:[i({type:Boolean})],key:"disabled",value:()=>!1},{kind:"method",key:"_valueSelected",value:function(e){const l=e.target.value;l&&a(this,"value-changed",{value:"default"!==l?l:void 0})}},{kind:"method",key:"render",value:function(){return r`
      <ha-select
        .icon=${Boolean(this.value)}
        .label=${this.label}
        .value=${this.value||"default"}
        .helper=${this.helper}
        .disabled=${this.disabled}
        @closed=${s}
        @selected=${this._valueSelected}
        fixedMenuPosition
        naturalMenuWidth
      >
        ${this.value?r`
              <span slot="icon">
                ${this.renderColorCircle(this.value||"grey")}
              </span>
            `:null}
        <mwc-list-item value="default">
          ${this.hass.localize("ui.panel.lovelace.editor.color-picker.default_color")}
        </mwc-list-item>
        ${Array.from(c).map((e=>r`
            <mwc-list-item .value=${e} graphic="icon">
              ${this.hass.localize(`ui.panel.lovelace.editor.color-picker.colors.${e}`)||e}
              <span slot="graphic">${this.renderColorCircle(e)}</span>
            </mwc-list-item>
          `))}
      </ha-select>
    `}},{kind:"method",key:"renderColorCircle",value:function(e){return r`
      <span
        class="circle-color"
        style=${o({"--circle-color":n(e)})}
      ></span>
    `}},{kind:"get",static:!0,key:"styles",value:function(){return t`
      .circle-color {
        display: block;
        background-color: var(--circle-color);
        border-radius: 10px;
        width: 20px;
        height: 20px;
      }
      ha-select {
        width: 100%;
      }
    `}}]}}),l);let u=e([d("ha-selector-ui-color")],(function(e,l){return{F:class extends l{constructor(...l){super(...l),e(this)}},d:[{kind:"field",decorators:[i()],key:"hass",value:void 0},{kind:"field",decorators:[i()],key:"selector",value:void 0},{kind:"field",decorators:[i()],key:"value",value:void 0},{kind:"field",decorators:[i()],key:"label",value:void 0},{kind:"field",decorators:[i()],key:"helper",value:void 0},{kind:"method",key:"render",value:function(){return r`
      <hui-color-picker
        .label=${this.label}
        .hass=${this.hass}
        .value=${this.value}
        .helper=${this.helper}
        @value-changed=${this._valueChanged}
      ></hui-color-picker>
    `}},{kind:"method",key:"_valueChanged",value:function(e){a(this,"value-changed",{value:e.detail.value})}}]}}),l);export{u as HaSelectorUiColor};
