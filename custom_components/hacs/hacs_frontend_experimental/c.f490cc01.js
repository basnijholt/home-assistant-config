import{_ as e,j as a,e as t,t as i,y as l,J as o,n as r}from"./main-ec7846c8.js";import{D as d,d as s,l as n}from"./c.5fe2e3ab.js";import"./c.749b9503.js";e([r("ha-yaml-editor")],(function(e,a){return{F:class extends a{constructor(...a){super(...a),e(this)}},d:[{kind:"field",decorators:[t({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[t()],key:"value",value:void 0},{kind:"field",decorators:[t({attribute:!1})],key:"yamlSchema",value:()=>d},{kind:"field",decorators:[t()],key:"defaultValue",value:void 0},{kind:"field",decorators:[t()],key:"isValid",value:()=>!0},{kind:"field",decorators:[t()],key:"label",value:void 0},{kind:"field",decorators:[t({type:Boolean})],key:"readOnly",value:()=>!1},{kind:"field",decorators:[t({type:Boolean})],key:"required",value:()=>!1},{kind:"field",decorators:[i()],key:"_yaml",value:()=>""},{kind:"method",key:"setValue",value:function(e){try{this._yaml=e&&!(e=>{if("object"!=typeof e)return!1;for(const a in e)if(Object.prototype.hasOwnProperty.call(e,a))return!1;return!0})(e)?s(e,{schema:this.yamlSchema,quotingType:'"'}):""}catch(a){console.error(a,e),alert(`There was an error converting to YAML: ${a}`)}}},{kind:"method",key:"firstUpdated",value:function(){this.defaultValue&&this.setValue(this.defaultValue)}},{kind:"method",key:"render",value:function(){return void 0===this._yaml?l``:l`
      ${this.label?l`<p>${this.label}${this.required?" *":""}</p>`:""}
      <ha-code-editor
        .hass=${this.hass}
        .value=${this._yaml}
        .readOnly=${this.readOnly}
        mode="yaml"
        autocomplete-entities
        autocomplete-icons
        .error=${!1===this.isValid}
        @value-changed=${this._onChange}
        dir="ltr"
      ></ha-code-editor>
    `}},{kind:"method",key:"_onChange",value:function(e){let a;e.stopPropagation(),this._yaml=e.detail.value;let t=!0;if(this._yaml)try{a=n(this._yaml,{schema:this.yamlSchema})}catch(e){t=!1}else a={};this.value=a,this.isValid=t,o(this,"value-changed",{value:a,isValid:t})}},{kind:"get",key:"yaml",value:function(){return this._yaml}}]}}),a);
