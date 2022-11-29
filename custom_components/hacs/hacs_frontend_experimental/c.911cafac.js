import{_ as e,j as i,e as t,y as l,k as d,O as o,d as a,n}from"./main-c66a9a06.js";import"./c.bbadaeea.js";import"./c.a5550d10.js";import"./c.8e28b461.js";import"./c.41d13611.js";import"./c.930daaba.js";let r=e([n("ha-selector-number")],(function(e,i){return{F:class extends i{constructor(...i){super(...i),e(this)}},d:[{kind:"field",decorators:[t()],key:"hass",value:void 0},{kind:"field",decorators:[t()],key:"selector",value:void 0},{kind:"field",decorators:[t()],key:"value",value:void 0},{kind:"field",decorators:[t()],key:"placeholder",value:void 0},{kind:"field",decorators:[t()],key:"label",value:void 0},{kind:"field",decorators:[t()],key:"helper",value:void 0},{kind:"field",decorators:[t({type:Boolean})],key:"required",value:()=>!0},{kind:"field",decorators:[t({type:Boolean})],key:"disabled",value:()=>!1},{kind:"method",key:"render",value:function(){var e,i,t,o,a,n,r,s,u,h,v,c,m,p,b;const f="box"===(null===(e=this.selector.number)||void 0===e?void 0:e.mode);return l`
      <div class="input">
        ${f?"":l`
              ${this.label?l`${this.label}${this.required?" *":""}`:""}
              <ha-slider
                .min=${null===(i=this.selector.number)||void 0===i?void 0:i.min}
                .max=${null===(t=this.selector.number)||void 0===t?void 0:t.max}
                .value=${this._value}
                .step=${null!==(o=null===(a=this.selector.number)||void 0===a?void 0:a.step)&&void 0!==o?o:1}
                .disabled=${this.disabled}
                .required=${this.required}
                pin
                ignore-bar-touch
                @change=${this._handleSliderChange}
              >
              </ha-slider>
            `}
        <ha-textfield
          .inputMode=${((null===(n=this.selector.number)||void 0===n?void 0:n.step)||1)%1!=0?"decimal":"numeric"}
          .label=${"box"!==(null===(r=this.selector.number)||void 0===r?void 0:r.mode)?void 0:this.label}
          .placeholder=${this.placeholder}
          class=${d({single:"box"===(null===(s=this.selector.number)||void 0===s?void 0:s.mode)})}
          .min=${null===(u=this.selector.number)||void 0===u?void 0:u.min}
          .max=${null===(h=this.selector.number)||void 0===h?void 0:h.max}
          .value=${null!==(v=this.value)&&void 0!==v?v:""}
          .step=${null!==(c=null===(m=this.selector.number)||void 0===m?void 0:m.step)&&void 0!==c?c:1}
          helperPersistent
          .helper=${f?this.helper:void 0}
          .disabled=${this.disabled}
          .required=${this.required}
          .suffix=${null===(p=this.selector.number)||void 0===p?void 0:p.unit_of_measurement}
          type="number"
          autoValidate
          ?no-spinner=${"box"!==(null===(b=this.selector.number)||void 0===b?void 0:b.mode)}
          @input=${this._handleInputChange}
        >
        </ha-textfield>
      </div>
      ${!f&&this.helper?l`<ha-input-helper-text>${this.helper}</ha-input-helper-text>`:""}
    `}},{kind:"get",key:"_value",value:function(){var e,i;return null!==(e=this.value)&&void 0!==e?e:(null===(i=this.selector.number)||void 0===i?void 0:i.min)||0}},{kind:"method",key:"_handleInputChange",value:function(e){var i;e.stopPropagation();const t=""===e.target.value||isNaN(e.target.value)?this.required?(null===(i=this.selector.number)||void 0===i?void 0:i.min)||0:void 0:Number(e.target.value);this.value!==t&&o(this,"value-changed",{value:t})}},{kind:"method",key:"_handleSliderChange",value:function(e){e.stopPropagation();const i=Number(e.target.value);this.value!==i&&o(this,"value-changed",{value:i})}},{kind:"get",static:!0,key:"styles",value:function(){return a`
      .input {
        display: flex;
        justify-content: space-between;
        align-items: center;
        direction: ltr;
      }
      ha-slider {
        flex: 1;
      }
      ha-textfield {
        --ha-textfield-input-width: 40px;
      }
      .single {
        --ha-textfield-input-width: unset;
        flex: 1;
      }
    `}}]}}),i);export{r as HaNumberSelector};
