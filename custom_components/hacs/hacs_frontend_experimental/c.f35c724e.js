import{_ as e,j as a,e as i,y as l,bk as t,J as o,d,n as s}from"./main-ec7846c8.js";import{a as r}from"./c.128a6b66.js";import{f as n}from"./c.fad05014.js";import"./c.0e3055bd.js";const c=()=>import("./c.51c8d838.js");e([s("ha-date-input")],(function(e,a){return{F:class extends a{constructor(...a){super(...a),e(this)}},d:[{kind:"field",decorators:[i({attribute:!1})],key:"locale",value:void 0},{kind:"field",decorators:[i()],key:"value",value:void 0},{kind:"field",decorators:[i({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[i({type:Boolean})],key:"required",value:()=>!1},{kind:"field",decorators:[i()],key:"label",value:void 0},{kind:"field",decorators:[i()],key:"helper",value:void 0},{kind:"method",key:"render",value:function(){return l`<ha-textfield
      .label=${this.label}
      .helper=${this.helper}
      .disabled=${this.disabled}
      iconTrailing
      helperPersistent
      @click=${this._openDialog}
      .value=${this.value?r(new Date(this.value),this.locale):""}
      .required=${this.required}
    >
      <ha-svg-icon slot="trailingIcon" .path=${t}></ha-svg-icon>
    </ha-textfield>`}},{kind:"method",key:"_openDialog",value:function(){var e,a;this.disabled||(e=this,a={min:"1970-01-01",value:this.value,onChange:e=>this._valueChanged(e),locale:this.locale.language,firstWeekday:n(this.locale)},o(e,"show-dialog",{dialogTag:"ha-dialog-date-picker",dialogImport:c,dialogParams:a}))}},{kind:"method",key:"_valueChanged",value:function(e){this.value!==e&&(this.value=e,o(this,"change"),o(this,"value-changed",{value:e}))}},{kind:"get",static:!0,key:"styles",value:function(){return d`
      ha-svg-icon {
        color: var(--secondary-text-color);
      }
    `}}]}}),a);
