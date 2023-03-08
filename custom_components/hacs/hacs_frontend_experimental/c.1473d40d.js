import{_ as e,j as a,e as i,y as l,bs as t,O as d,d as o,n as s}from"./main-aeda8d41.js";import{a as r}from"./c.2655bd99.js";import{f as n}from"./c.d9d8b90e.js";import"./c.aa335625.js";const h=()=>import("./c.f7a0328d.js");e([s("ha-date-input")],(function(e,a){return{F:class extends a{constructor(...a){super(...a),e(this)}},d:[{kind:"field",decorators:[i({attribute:!1})],key:"locale",value:void 0},{kind:"field",decorators:[i()],key:"value",value:void 0},{kind:"field",decorators:[i()],key:"min",value:void 0},{kind:"field",decorators:[i()],key:"max",value:void 0},{kind:"field",decorators:[i({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[i({type:Boolean})],key:"required",value:()=>!1},{kind:"field",decorators:[i()],key:"label",value:void 0},{kind:"field",decorators:[i()],key:"helper",value:void 0},{kind:"method",key:"render",value:function(){return l`<ha-textfield
      .label=${this.label}
      .helper=${this.helper}
      .disabled=${this.disabled}
      iconTrailing
      helperPersistent
      readonly
      @click=${this._openDialog}
      .value=${this.value?r(new Date(`${this.value.split("T")[0]}T00:00:00`),this.locale):""}
      .required=${this.required}
    >
      <ha-svg-icon slot="trailingIcon" .path=${t}></ha-svg-icon>
    </ha-textfield>`}},{kind:"method",key:"_openDialog",value:function(){var e,a;this.disabled||(e=this,a={min:this.min||"1970-01-01",max:this.max,value:this.value,onChange:e=>this._valueChanged(e),locale:this.locale.language,firstWeekday:n(this.locale)},d(e,"show-dialog",{dialogTag:"ha-dialog-date-picker",dialogImport:h,dialogParams:a}))}},{kind:"method",key:"_valueChanged",value:function(e){this.value!==e&&(this.value=e,d(this,"change"),d(this,"value-changed",{value:e}))}},{kind:"get",static:!0,key:"styles",value:function(){return o`
      ha-svg-icon {
        color: var(--secondary-text-color);
      }
      ha-textfield {
        display: block;
      }
    `}}]}}),a);
