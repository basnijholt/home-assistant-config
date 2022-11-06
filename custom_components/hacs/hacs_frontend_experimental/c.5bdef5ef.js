import{_ as e,j as t,e as i,y as l,k as r,J as s,d as a,n}from"./main-ec7846c8.js";import"./c.541a83df.js";import"./c.0e3055bd.js";import"./c.8e28b461.js";import"./c.eea05cf6.js";import"./c.3db34379.js";let d=e([n("ha-selector-number")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[i()],key:"hass",value:void 0},{kind:"field",decorators:[i()],key:"selector",value:void 0},{kind:"field",decorators:[i()],key:"value",value:void 0},{kind:"field",decorators:[i()],key:"placeholder",value:void 0},{kind:"field",decorators:[i()],key:"label",value:void 0},{kind:"field",decorators:[i()],key:"helper",value:void 0},{kind:"field",decorators:[i({type:Boolean})],key:"required",value:()=>!0},{kind:"field",decorators:[i({type:Boolean})],key:"disabled",value:()=>!1},{kind:"method",key:"render",value:function(){var e,t,i;const s="box"===this.selector.number.mode;return l`
      <div class="input">
        ${s?"":l`
              ${this.label?l`${this.label}${this.required?" *":""}`:""}
              <ha-slider
                .min=${this.selector.number.min}
                .max=${this.selector.number.max}
                .value=${this._value}
                .step=${null!==(e=this.selector.number.step)&&void 0!==e?e:1}
                .disabled=${this.disabled}
                .required=${this.required}
                pin
                ignore-bar-touch
                @change=${this._handleSliderChange}
              >
              </ha-slider>
            `}
        <ha-textfield
          .inputMode=${(this.selector.number.step||1)%1!=0?"decimal":"numeric"}
          .label=${"box"!==this.selector.number.mode?void 0:this.label}
          .placeholder=${this.placeholder}
          class=${r({single:"box"===this.selector.number.mode})}
          .min=${this.selector.number.min}
          .max=${this.selector.number.max}
          .value=${null!==(t=this.value)&&void 0!==t?t:""}
          .step=${null!==(i=this.selector.number.step)&&void 0!==i?i:1}
          helperPersistent
          .helper=${s?this.helper:void 0}
          .disabled=${this.disabled}
          .required=${this.required}
          .suffix=${this.selector.number.unit_of_measurement}
          type="number"
          autoValidate
          ?no-spinner=${"box"!==this.selector.number.mode}
          @input=${this._handleInputChange}
        >
        </ha-textfield>
      </div>
      ${!s&&this.helper?l`<ha-input-helper-text>${this.helper}</ha-input-helper-text>`:""}
    `}},{kind:"get",key:"_value",value:function(){var e;return null!==(e=this.value)&&void 0!==e?e:this.selector.number.min||0}},{kind:"method",key:"_handleInputChange",value:function(e){e.stopPropagation();const t=""===e.target.value||isNaN(e.target.value)?this.required?this.selector.number.min||0:void 0:Number(e.target.value);this.value!==t&&s(this,"value-changed",{value:t})}},{kind:"method",key:"_handleSliderChange",value:function(e){e.stopPropagation();const t=Number(e.target.value);this.value!==t&&s(this,"value-changed",{value:t})}},{kind:"get",static:!0,key:"styles",value:function(){return a`
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
    `}}]}}),t);export{d as HaNumberSelector};
