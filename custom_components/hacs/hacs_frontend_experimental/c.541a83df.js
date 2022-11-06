import{_ as e,j as t,e as i,y as a,k as n,I as r,J as o,d as s,n as l,K as d,L as c,N as u,O as h,P as p,Q as m,S as v,T as f,U as b,x as y,z as g,M as _,f as k,i as x,B as w,E as $,G as C,V as E,W as S,X as A,Y as B,Z as R,$ as V,t as M,a0 as I,a1 as L,p as P,a2 as T,h as K,a3 as D,a4 as F,R as O,D as H,a5 as q,a6 as N,a7 as z}from"./main-ec7846c8.js";import{F as j,s as U}from"./c.0e3055bd.js";import{o as X}from"./c.8e28b461.js";import{o as W}from"./c.eea05cf6.js";import{c as G}from"./c.3db34379.js";const Y={info:d,warning:c,error:u,success:h};e([l("ha-alert")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[i()],key:"title",value:()=>""},{kind:"field",decorators:[i({attribute:"alert-type"})],key:"alertType",value:()=>"info"},{kind:"field",decorators:[i({type:Boolean})],key:"dismissable",value:()=>!1},{kind:"field",decorators:[i({type:Boolean})],key:"rtl",value:()=>!1},{kind:"method",key:"render",value:function(){return a`
      <div
        class="issue-type ${n({rtl:this.rtl,[this.alertType]:!0})}"
        role="alert"
      >
        <div class="icon ${this.title?"":"no-title"}">
          <slot name="icon">
            <ha-svg-icon .path=${Y[this.alertType]}></ha-svg-icon>
          </slot>
        </div>
        <div class="content">
          <div class="main-content">
            ${this.title?a`<div class="title">${this.title}</div>`:""}
            <slot></slot>
          </div>
          <div class="action">
            <slot name="action">
              ${this.dismissable?a`<ha-icon-button
                    @click=${this._dismiss_clicked}
                    label="Dismiss alert"
                    .path=${r}
                  ></ha-icon-button>`:""}
            </slot>
          </div>
        </div>
      </div>
    `}},{kind:"method",key:"_dismiss_clicked",value:function(){o(this,"alert-dismissed-clicked")}},{kind:"field",static:!0,key:"styles",value:()=>s`
    .issue-type {
      position: relative;
      padding: 8px;
      display: flex;
    }
    .issue-type.rtl {
      flex-direction: row-reverse;
    }
    .issue-type::after {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      opacity: 0.12;
      pointer-events: none;
      content: "";
      border-radius: 4px;
    }
    .icon {
      z-index: 1;
    }
    .icon.no-title {
      align-self: center;
    }
    .issue-type.rtl > .content {
      flex-direction: row-reverse;
      text-align: right;
    }
    .content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }
    .action {
      z-index: 1;
      width: min-content;
      --mdc-theme-primary: var(--primary-text-color);
    }
    .main-content {
      overflow-wrap: anywhere;
      word-break: break-word;
      margin-left: 8px;
      margin-right: 0;
    }
    .issue-type.rtl > .content > .main-content {
      margin-left: 0;
      margin-right: 8px;
    }
    .title {
      margin-top: 2px;
      font-weight: bold;
    }
    .action mwc-button,
    .action ha-icon-button {
      --mdc-theme-primary: var(--primary-text-color);
      --mdc-icon-button-size: 36px;
    }
    .issue-type.info > .icon {
      color: var(--info-color);
    }
    .issue-type.info::after {
      background-color: var(--info-color);
    }

    .issue-type.warning > .icon {
      color: var(--warning-color);
    }
    .issue-type.warning::after {
      background-color: var(--warning-color);
    }

    .issue-type.error > .icon {
      color: var(--error-color);
    }
    .issue-type.error::after {
      background-color: var(--error-color);
    }

    .issue-type.success > .icon {
      color: var(--success-color);
    }
    .issue-type.success::after {
      background-color: var(--success-color);
    }
  `}]}}),t);const J=p(class extends m{constructor(e){if(super(e),v(this,"_element",void 0),e.type!==f.CHILD)throw new Error("dynamicElementDirective can only be used in content bindings")}update(e,[t,i]){return this._element&&this._element.localName===t?(i&&Object.entries(i).forEach((([e,t])=>{this._element[e]=t})),b):this.render(t,i)}render(e,t){return this._element=document.createElement(e),t&&Object.entries(t).forEach((([e,t])=>{this._element[e]=t})),this._element}}),Q={action:()=>import("./c.62767b73.js"),addon:()=>import("./c.0f2c7a19.js"),area:()=>import("./c.35c1b222.js"),attribute:()=>import("./c.56b8e866.js"),boolean:()=>import("./c.388e95d4.js"),"color-rgb":()=>import("./c.82f7d184.js"),"config-entry":()=>import("./c.f3b919a6.js"),date:()=>import("./c.a66b9724.js"),datetime:()=>import("./c.7ff3a36b.js"),device:()=>import("./c.1067c64a.js"),duration:()=>import("./c.993c72af.js"),entity:()=>import("./c.90249400.js"),file:()=>import("./c.08b532a7.js"),navigation:()=>import("./c.0f34374f.js"),number:()=>import("./c.5bdef5ef.js"),object:()=>import("./c.6b4b6aa6.js"),select:()=>Promise.resolve().then((function(){return Qe})),state:()=>import("./c.2f5573d4.js"),target:()=>import("./c.cacb2283.js"),template:()=>import("./c.3e105a28.js"),text:()=>import("./c.d2723eef.js"),time:()=>import("./c.2afbc6de.js"),icon:()=>import("./c.28596b81.js"),media:()=>import("./c.fb45139f.js").then((function(e){return e.h})),theme:()=>import("./c.923b9541.js"),location:()=>import("./c.bf0fb3ba.js"),"color-temp":()=>import("./c.75843f76.js"),"ui-action":()=>import("./c.e3089bb2.js")};e([l("ha-selector")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[i()],key:"hass",value:void 0},{kind:"field",decorators:[i()],key:"selector",value:void 0},{kind:"field",decorators:[i()],key:"value",value:void 0},{kind:"field",decorators:[i()],key:"label",value:void 0},{kind:"field",decorators:[i()],key:"helper",value:void 0},{kind:"field",decorators:[i()],key:"placeholder",value:void 0},{kind:"field",decorators:[i({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[i({type:Boolean})],key:"required",value:()=>!0},{kind:"field",decorators:[i()],key:"context",value:void 0},{kind:"method",key:"focus",value:function(){var e,t;null===(e=this.shadowRoot)||void 0===e||null===(t=e.getElementById("selector"))||void 0===t||t.focus()}},{kind:"get",key:"_type",value:function(){return Object.keys(this.selector)[0]}},{kind:"method",key:"willUpdate",value:function(e){var t;e.has("selector")&&this.selector&&(null===(t=Q[this._type])||void 0===t||t.call(Q))}},{kind:"method",key:"render",value:function(){return a`
      ${J(`ha-selector-${this._type}`,{hass:this.hass,selector:this.selector,value:this.value,label:this.label,placeholder:this.placeholder,disabled:this.disabled,required:this.required,helper:this.helper,context:this.context,id:"selector"})}
    `}}]}}),t);var Z={ROOT:"mdc-form-field"},ee={LABEL_SELECTOR:".mdc-form-field > label"},te=function(e){function t(i){var a=e.call(this,g(g({},t.defaultAdapter),i))||this;return a.click=function(){a.handleClick()},a}return y(t,e),Object.defineProperty(t,"cssClasses",{get:function(){return Z},enumerable:!1,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return ee},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{activateInputRipple:function(){},deactivateInputRipple:function(){},deregisterInteractionHandler:function(){},registerInteractionHandler:function(){}}},enumerable:!1,configurable:!0}),t.prototype.init=function(){this.adapter.registerInteractionHandler("click",this.click)},t.prototype.destroy=function(){this.adapter.deregisterInteractionHandler("click",this.click)},t.prototype.handleClick=function(){var e=this;this.adapter.activateInputRipple(),requestAnimationFrame((function(){e.adapter.deactivateInputRipple()}))},t}(_);class ie extends w{constructor(){super(...arguments),this.alignEnd=!1,this.spaceBetween=!1,this.nowrap=!1,this.label="",this.mdcFoundationClass=te}createAdapter(){return{registerInteractionHandler:(e,t)=>{this.labelEl.addEventListener(e,t)},deregisterInteractionHandler:(e,t)=>{this.labelEl.removeEventListener(e,t)},activateInputRipple:async()=>{const e=this.input;if(e instanceof j){const t=await e.ripple;t&&t.startPress()}},deactivateInputRipple:async()=>{const e=this.input;if(e instanceof j){const t=await e.ripple;t&&t.endPress()}}}}get input(){var e,t;return null!==(t=null===(e=this.slottedInputs)||void 0===e?void 0:e[0])&&void 0!==t?t:null}render(){const e={"mdc-form-field--align-end":this.alignEnd,"mdc-form-field--space-between":this.spaceBetween,"mdc-form-field--nowrap":this.nowrap};return a`
      <div class="mdc-form-field ${n(e)}">
        <slot></slot>
        <label class="mdc-label"
               @click="${this._labelClick}">${this.label}</label>
      </div>`}click(){this._labelClick()}_labelClick(){const e=this.input;e&&(e.focus(),e.click())}}k([i({type:Boolean})],ie.prototype,"alignEnd",void 0),k([i({type:Boolean})],ie.prototype,"spaceBetween",void 0),k([i({type:Boolean})],ie.prototype,"nowrap",void 0),k([i({type:String}),X((async function(e){var t;null===(t=this.input)||void 0===t||t.setAttribute("aria-label",e)}))],ie.prototype,"label",void 0),k([x(".mdc-form-field")],ie.prototype,"mdcRoot",void 0),k([W("",!0,"*")],ie.prototype,"slottedInputs",void 0),k([x("label")],ie.prototype,"labelEl",void 0);const ae=s`.mdc-form-field{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));display:inline-flex;align-items:center;vertical-align:middle}.mdc-form-field>label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0;order:0}[dir=rtl] .mdc-form-field>label,.mdc-form-field>label[dir=rtl]{margin-left:auto;margin-right:0}[dir=rtl] .mdc-form-field>label,.mdc-form-field>label[dir=rtl]{padding-left:0;padding-right:4px}.mdc-form-field--nowrap>label{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.mdc-form-field--align-end>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px;order:-1}[dir=rtl] .mdc-form-field--align-end>label,.mdc-form-field--align-end>label[dir=rtl]{margin-left:0;margin-right:auto}[dir=rtl] .mdc-form-field--align-end>label,.mdc-form-field--align-end>label[dir=rtl]{padding-left:4px;padding-right:0}.mdc-form-field--space-between{justify-content:space-between}.mdc-form-field--space-between>label{margin:0}[dir=rtl] .mdc-form-field--space-between>label,.mdc-form-field--space-between>label[dir=rtl]{margin:0}:host{display:inline-flex}.mdc-form-field{width:100%}::slotted(*){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}::slotted(mwc-switch){margin-right:10px}[dir=rtl] ::slotted(mwc-switch),::slotted(mwc-switch[dir=rtl]){margin-left:10px}`;let ne=class extends ie{};ne.styles=[ae],ne=k([l("mwc-formfield")],ne),e([l("ha-form-boolean")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[i()],key:"schema",value:void 0},{kind:"field",decorators:[i()],key:"data",value:void 0},{kind:"field",decorators:[i()],key:"label",value:void 0},{kind:"field",decorators:[i({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[x("ha-checkbox",!0)],key:"_input",value:void 0},{kind:"method",key:"focus",value:function(){this._input&&this._input.focus()}},{kind:"method",key:"render",value:function(){return a`
      <mwc-formfield .label=${this.label}>
        <ha-checkbox
          .checked=${this.data}
          .disabled=${this.disabled}
          @change=${this._valueChanged}
        ></ha-checkbox>
      </mwc-formfield>
    `}},{kind:"method",key:"_valueChanged",value:function(e){o(this,"value-changed",{value:e.target.checked})}}]}}),t),e([l("ha-form-constant")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[i({attribute:!1})],key:"schema",value:void 0},{kind:"field",decorators:[i()],key:"label",value:void 0},{kind:"method",key:"render",value:function(){return a`<span class="label">${this.label}</span>${this.schema.value?`: ${this.schema.value}`:""}`}},{kind:"get",static:!0,key:"styles",value:function(){return s`
      :host {
        display: block;
      }
      .label {
        font-weight: 500;
      }
    `}}]}}),t),e([l("ha-form-float")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[i({attribute:!1})],key:"schema",value:void 0},{kind:"field",decorators:[i({attribute:!1})],key:"data",value:void 0},{kind:"field",decorators:[i()],key:"label",value:void 0},{kind:"field",decorators:[i({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[x("ha-textfield")],key:"_input",value:void 0},{kind:"method",key:"focus",value:function(){this._input&&this._input.focus()}},{kind:"method",key:"render",value:function(){var e;return a`
      <ha-textfield
        type="numeric"
        inputMode="decimal"
        .label=${this.label}
        .value=${void 0!==this.data?this.data:""}
        .disabled=${this.disabled}
        .required=${this.schema.required}
        .autoValidate=${this.schema.required}
        .suffix=${null===(e=this.schema.description)||void 0===e?void 0:e.suffix}
        .validationMessage=${this.schema.required?"Required":void 0}
        @input=${this._valueChanged}
      ></ha-textfield>
    `}},{kind:"method",key:"updated",value:function(e){e.has("schema")&&this.toggleAttribute("own-margin",!!this.schema.required)}},{kind:"method",key:"_valueChanged",value:function(e){const t=e.target,i=t.value.replace(",",".");let a;if(!i.endsWith(".")&&"-"!==i)if(""!==i&&(a=parseFloat(i),isNaN(a)&&(a=void 0)),this.data!==a)o(this,"value-changed",{value:a});else{const e=void 0===a?"":String(a);t.value!==e&&(t.value=e)}}},{kind:"field",static:!0,key:"styles",value:()=>s`
    :host([own-margin]) {
      margin-bottom: 5px;
    }
    ha-textfield {
      display: block;
    }
  `}]}}),t),e([l("ha-form-grid")],(function(e,t){class n extends t{constructor(...t){super(...t),e(this)}}return{F:n,d:[{kind:"field",decorators:[i({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[i({attribute:!1})],key:"data",value:void 0},{kind:"field",decorators:[i({attribute:!1})],key:"schema",value:void 0},{kind:"field",decorators:[i({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[i()],key:"computeLabel",value:void 0},{kind:"field",decorators:[i()],key:"computeHelper",value:void 0},{kind:"method",key:"firstUpdated",value:function(e){$(C(n.prototype),"firstUpdated",this).call(this,e),this.setAttribute("own-margin","")}},{kind:"method",key:"updated",value:function(e){$(C(n.prototype),"updated",this).call(this,e),e.has("schema")&&(this.schema.column_min_width?this.style.setProperty("--form-grid-min-width",this.schema.column_min_width):this.style.setProperty("--form-grid-min-width",""))}},{kind:"method",key:"render",value:function(){return a`
      ${this.schema.schema.map((e=>a`
            <ha-form
              .hass=${this.hass}
              .data=${this.data}
              .schema=${[e]}
              .disabled=${this.disabled}
              .computeLabel=${this.computeLabel}
              .computeHelper=${this.computeHelper}
            ></ha-form>
          `))}
    `}},{kind:"get",static:!0,key:"styles",value:function(){return s`
      :host {
        display: grid !important;
        grid-template-columns: repeat(
          var(--form-grid-column-count, auto-fit),
          minmax(var(--form-grid-min-width, 200px), 1fr)
        );
        grid-gap: 8px;
      }
      :host > ha-form {
        display: block;
        margin-bottom: 24px;
      }
    `}}]}}),t);const re=E({_template:S`
    <style>
      :host {
        display: inline-block;
        position: fixed;
        clip: rect(0px,0px,0px,0px);
      }
    </style>
    <div aria-live$="[[mode]]">[[_text]]</div>
`,is:"iron-a11y-announcer",properties:{mode:{type:String,value:"polite"},timeout:{type:Number,value:150},_text:{type:String,value:""}},created:function(){re.instance||(re.instance=this),document.addEventListener("iron-announce",this._onIronAnnounce.bind(this))},announce:function(e){this._text="",this.async((function(){this._text=e}),this.timeout)},_onIronAnnounce:function(e){e.detail&&e.detail.text&&this.announce(e.detail.text)}});re.instance=null,re.requestAvailability=function(){re.instance||(re.instance=document.createElement("iron-a11y-announcer")),document.body?document.body.appendChild(re.instance):document.addEventListener("load",(function(){document.body.appendChild(re.instance)}))};class oe{constructor(e){oe[" "](e),this.type=e&&e.type||"default",this.key=e&&e.key,e&&"value"in e&&(this.value=e.value)}get value(){var e=this.type,t=this.key;if(e&&t)return oe.types[e]&&oe.types[e][t]}set value(e){var t=this.type,i=this.key;t&&i&&(t=oe.types[t]=oe.types[t]||{},null==e?delete t[i]:t[i]=e)}get list(){if(this.type){var e=oe.types[this.type];return e?Object.keys(e).map((function(e){return se[this.type][e]}),this):[]}}byKey(e){return this.key=e,this.value}}oe[" "]=function(){},oe.types={};var se=oe.types;E({is:"iron-meta",properties:{type:{type:String,value:"default"},key:{type:String},value:{type:String,notify:!0},self:{type:Boolean,observer:"_selfChanged"},__meta:{type:Boolean,computed:"__computeMeta(type, key, value)"}},hostAttributes:{hidden:!0},__computeMeta:function(e,t,i){var a=new oe({type:e,key:t});return void 0!==i&&i!==a.value?a.value=i:this.value!==a.value&&(this.value=a.value),a},get list(){return this.__meta&&this.__meta.list},_selfChanged:function(e){e&&(this.value=this)},byKey:function(e){return new oe({type:this.type,key:e}).value}});let le=null;const de={properties:{validator:{type:String},invalid:{notify:!0,reflectToAttribute:!0,type:Boolean,value:!1,observer:"_invalidChanged"}},registered:function(){le=new oe({type:"validator"})},_invalidChanged:function(){this.invalid?this.setAttribute("aria-invalid","true"):this.removeAttribute("aria-invalid")},get _validator(){return le&&le.byKey(this.validator)},hasValidator:function(){return null!=this._validator},validate:function(e){return void 0===e&&void 0!==this.value?this.invalid=!this._getValidity(this.value):this.invalid=!this._getValidity(e),!this.invalid},_getValidity:function(e){return!this.hasValidator()||this._validator.validate(e)}};E({_template:S`
    <style>
      :host {
        display: inline-block;
      }
    </style>
    <slot id="content"></slot>
`,is:"iron-input",behaviors:[de],properties:{bindValue:{type:String,value:""},value:{type:String,computed:"_computeValue(bindValue)"},allowedPattern:{type:String},autoValidate:{type:Boolean,value:!1},_inputElement:Object},observers:["_bindValueChanged(bindValue, _inputElement)"],listeners:{input:"_onInput",keypress:"_onKeypress"},created:function(){re.requestAvailability(),this._previousValidInput="",this._patternAlreadyChecked=!1},attached:function(){this._observer=A(this).observeNodes(function(e){this._initSlottedInput()}.bind(this))},detached:function(){this._observer&&(A(this).unobserveNodes(this._observer),this._observer=null)},get inputElement(){return this._inputElement},_initSlottedInput:function(){this._inputElement=this.getEffectiveChildren()[0],this.inputElement&&this.inputElement.value&&(this.bindValue=this.inputElement.value),this.fire("iron-input-ready")},get _patternRegExp(){var e;if(this.allowedPattern)e=new RegExp(this.allowedPattern);else if("number"===this.inputElement.type)e=/[0-9.,e-]/;return e},_bindValueChanged:function(e,t){t&&(void 0===e?t.value=null:e!==t.value&&(this.inputElement.value=e),this.autoValidate&&this.validate(),this.fire("bind-value-changed",{value:e}))},_onInput:function(){this.allowedPattern&&!this._patternAlreadyChecked&&(this._checkPatternValidity()||(this._announceInvalidCharacter("Invalid string of characters not entered."),this.inputElement.value=this._previousValidInput));this.bindValue=this._previousValidInput=this.inputElement.value,this._patternAlreadyChecked=!1},_isPrintable:function(e){var t=8==e.keyCode||9==e.keyCode||13==e.keyCode||27==e.keyCode,i=19==e.keyCode||20==e.keyCode||45==e.keyCode||46==e.keyCode||144==e.keyCode||145==e.keyCode||e.keyCode>32&&e.keyCode<41||e.keyCode>111&&e.keyCode<124;return!(t||0==e.charCode&&i)},_onKeypress:function(e){if(this.allowedPattern||"number"===this.inputElement.type){var t=this._patternRegExp;if(t&&!(e.metaKey||e.ctrlKey||e.altKey)){this._patternAlreadyChecked=!0;var i=String.fromCharCode(e.charCode);this._isPrintable(e)&&!t.test(i)&&(e.preventDefault(),this._announceInvalidCharacter("Invalid character "+i+" not entered."))}}},_checkPatternValidity:function(){var e=this._patternRegExp;if(!e)return!0;for(var t=0;t<this.inputElement.value.length;t++)if(!e.test(this.inputElement.value[t]))return!1;return!0},validate:function(){if(!this.inputElement)return this.invalid=!1,!0;var e=this.inputElement.checkValidity();return e&&(this.required&&""===this.bindValue?e=!1:this.hasValidator()&&(e=de.validate.call(this,this.bindValue))),this.invalid=!e,this.fire("iron-input-validate"),e},_announceInvalidCharacter:function(e){this.fire("iron-announce",{text:e})},_computeValue:function(e){return e}});const ce={attached:function(){this.fire("addon-attached")},update:function(e){}};E({_template:S`
    <style>
      :host {
        display: inline-block;
        float: right;

        @apply --paper-font-caption;
        @apply --paper-input-char-counter;
      }

      :host([hidden]) {
        display: none !important;
      }

      :host(:dir(rtl)) {
        float: left;
      }
    </style>

    <span>[[_charCounterStr]]</span>
`,is:"paper-input-char-counter",behaviors:[ce],properties:{_charCounterStr:{type:String,value:"0"}},update:function(e){if(e.inputElement){e.value=e.value||"";var t=e.value.toString().length.toString();e.inputElement.hasAttribute("maxlength")&&(t+="/"+e.inputElement.getAttribute("maxlength")),this._charCounterStr=t}}});const ue=S`
<custom-style>
  <style is="custom-style">
    html {
      --paper-input-container-shared-input-style: {
        position: relative; /* to make a stacking context */
        outline: none;
        box-shadow: none;
        padding: 0;
        margin: 0;
        width: 100%;
        max-width: 100%;
        background: transparent;
        border: none;
        color: var(--paper-input-container-input-color, var(--primary-text-color));
        -webkit-appearance: none;
        text-align: inherit;
        vertical-align: var(--paper-input-container-input-align, bottom);

        @apply --paper-font-subhead;
      };
    }
  </style>
</custom-style>
`;ue.setAttribute("style","display: none;"),document.head.appendChild(ue.content),E({_template:S`
    <style>
      :host {
        display: block;
        padding: 8px 0;
        @apply --paper-input-container;
      }

      :host([inline]) {
        display: inline-block;
      }

      :host([disabled]) {
        pointer-events: none;
        opacity: 0.33;

        @apply --paper-input-container-disabled;
      }

      :host([hidden]) {
        display: none !important;
      }

      [hidden] {
        display: none !important;
      }

      .floated-label-placeholder {
        @apply --paper-font-caption;
      }

      .underline {
        height: 2px;
        position: relative;
      }

      .focused-line {
        @apply --layout-fit;
        border-bottom: 2px solid var(--paper-input-container-focus-color, var(--primary-color));

        -webkit-transform-origin: center center;
        transform-origin: center center;
        -webkit-transform: scale3d(0,1,1);
        transform: scale3d(0,1,1);

        @apply --paper-input-container-underline-focus;
      }

      .underline.is-highlighted .focused-line {
        -webkit-transform: none;
        transform: none;
        -webkit-transition: -webkit-transform 0.25s;
        transition: transform 0.25s;

        @apply --paper-transition-easing;
      }

      .underline.is-invalid .focused-line {
        border-color: var(--paper-input-container-invalid-color, var(--error-color));
        -webkit-transform: none;
        transform: none;
        -webkit-transition: -webkit-transform 0.25s;
        transition: transform 0.25s;

        @apply --paper-transition-easing;
      }

      .unfocused-line {
        @apply --layout-fit;
        border-bottom: 1px solid var(--paper-input-container-color, var(--secondary-text-color));
        @apply --paper-input-container-underline;
      }

      :host([disabled]) .unfocused-line {
        border-bottom: 1px dashed;
        border-color: var(--paper-input-container-color, var(--secondary-text-color));
        @apply --paper-input-container-underline-disabled;
      }

      .input-wrapper {
        @apply --layout-horizontal;
        @apply --layout-center;
        position: relative;
      }

      .input-content {
        @apply --layout-flex-auto;
        @apply --layout-relative;
        max-width: 100%;
      }

      .input-content ::slotted(label),
      .input-content ::slotted(.paper-input-label) {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        font: inherit;
        color: var(--paper-input-container-color, var(--secondary-text-color));
        -webkit-transition: -webkit-transform 0.25s, width 0.25s;
        transition: transform 0.25s, width 0.25s;
        -webkit-transform-origin: left top;
        transform-origin: left top;
        /* Fix for safari not focusing 0-height date/time inputs with -webkit-apperance: none; */
        min-height: 1px;

        @apply --paper-font-common-nowrap;
        @apply --paper-font-subhead;
        @apply --paper-input-container-label;
        @apply --paper-transition-easing;
      }


      .input-content ::slotted(label):before,
      .input-content ::slotted(.paper-input-label):before {
        @apply --paper-input-container-label-before;
      }

      .input-content ::slotted(label):after,
      .input-content ::slotted(.paper-input-label):after {
        @apply --paper-input-container-label-after;
      }

      .input-content.label-is-floating ::slotted(label),
      .input-content.label-is-floating ::slotted(.paper-input-label) {
        -webkit-transform: translateY(-75%) scale(0.75);
        transform: translateY(-75%) scale(0.75);

        /* Since we scale to 75/100 of the size, we actually have 100/75 of the
        original space now available */
        width: 133%;

        @apply --paper-input-container-label-floating;
      }

      :host(:dir(rtl)) .input-content.label-is-floating ::slotted(label),
      :host(:dir(rtl)) .input-content.label-is-floating ::slotted(.paper-input-label) {
        right: 0;
        left: auto;
        -webkit-transform-origin: right top;
        transform-origin: right top;
      }

      .input-content.label-is-highlighted ::slotted(label),
      .input-content.label-is-highlighted ::slotted(.paper-input-label) {
        color: var(--paper-input-container-focus-color, var(--primary-color));

        @apply --paper-input-container-label-focus;
      }

      .input-content.is-invalid ::slotted(label),
      .input-content.is-invalid ::slotted(.paper-input-label) {
        color: var(--paper-input-container-invalid-color, var(--error-color));
      }

      .input-content.label-is-hidden ::slotted(label),
      .input-content.label-is-hidden ::slotted(.paper-input-label) {
        visibility: hidden;
      }

      .input-content ::slotted(input),
      .input-content ::slotted(iron-input),
      .input-content ::slotted(textarea),
      .input-content ::slotted(iron-autogrow-textarea),
      .input-content ::slotted(.paper-input-input) {
        @apply --paper-input-container-shared-input-style;
        /* The apply shim doesn't apply the nested color custom property,
          so we have to re-apply it here. */
        color: var(--paper-input-container-input-color, var(--primary-text-color));
        @apply --paper-input-container-input;
      }

      .input-content ::slotted(input)::-webkit-outer-spin-button,
      .input-content ::slotted(input)::-webkit-inner-spin-button {
        @apply --paper-input-container-input-webkit-spinner;
      }

      .input-content.focused ::slotted(input),
      .input-content.focused ::slotted(iron-input),
      .input-content.focused ::slotted(textarea),
      .input-content.focused ::slotted(iron-autogrow-textarea),
      .input-content.focused ::slotted(.paper-input-input) {
        @apply --paper-input-container-input-focus;
      }

      .input-content.is-invalid ::slotted(input),
      .input-content.is-invalid ::slotted(iron-input),
      .input-content.is-invalid ::slotted(textarea),
      .input-content.is-invalid ::slotted(iron-autogrow-textarea),
      .input-content.is-invalid ::slotted(.paper-input-input) {
        @apply --paper-input-container-input-invalid;
      }

      .prefix ::slotted(*) {
        display: inline-block;
        @apply --paper-font-subhead;
        @apply --layout-flex-none;
        @apply --paper-input-prefix;
      }

      .suffix ::slotted(*) {
        display: inline-block;
        @apply --paper-font-subhead;
        @apply --layout-flex-none;

        @apply --paper-input-suffix;
      }

      /* Firefox sets a min-width on the input, which can cause layout issues */
      .input-content ::slotted(input) {
        min-width: 0;
      }

      .input-content ::slotted(textarea) {
        resize: none;
      }

      .add-on-content {
        position: relative;
      }

      .add-on-content.is-invalid ::slotted(*) {
        color: var(--paper-input-container-invalid-color, var(--error-color));
      }

      .add-on-content.is-highlighted ::slotted(*) {
        color: var(--paper-input-container-focus-color, var(--primary-color));
      }
    </style>

    <div class="floated-label-placeholder" aria-hidden="true" hidden="[[noLabelFloat]]">&nbsp;</div>

    <div class="input-wrapper">
      <span class="prefix"><slot name="prefix"></slot></span>

      <div class$="[[_computeInputContentClass(noLabelFloat,alwaysFloatLabel,focused,invalid,_inputHasContent)]]" id="labelAndInputContainer">
        <slot name="label"></slot>
        <slot name="input"></slot>
      </div>

      <span class="suffix"><slot name="suffix"></slot></span>
    </div>

    <div class$="[[_computeUnderlineClass(focused,invalid)]]">
      <div class="unfocused-line"></div>
      <div class="focused-line"></div>
    </div>

    <div class$="[[_computeAddOnContentClass(focused,invalid)]]">
      <slot name="add-on"></slot>
    </div>
`,is:"paper-input-container",properties:{noLabelFloat:{type:Boolean,value:!1},alwaysFloatLabel:{type:Boolean,value:!1},attrForValue:{type:String,value:"bind-value"},autoValidate:{type:Boolean,value:!1},invalid:{observer:"_invalidChanged",type:Boolean,value:!1},focused:{readOnly:!0,type:Boolean,value:!1,notify:!0},_addons:{type:Array},_inputHasContent:{type:Boolean,value:!1},_inputSelector:{type:String,value:"input,iron-input,textarea,.paper-input-input"},_boundOnFocus:{type:Function,value:function(){return this._onFocus.bind(this)}},_boundOnBlur:{type:Function,value:function(){return this._onBlur.bind(this)}},_boundOnInput:{type:Function,value:function(){return this._onInput.bind(this)}},_boundValueChanged:{type:Function,value:function(){return this._onValueChanged.bind(this)}}},listeners:{"addon-attached":"_onAddonAttached","iron-input-validate":"_onIronInputValidate"},get _valueChangedEvent(){return this.attrForValue+"-changed"},get _propertyForValue(){return B(this.attrForValue)},get _inputElement(){return A(this).querySelector(this._inputSelector)},get _inputElementValue(){return this._inputElement[this._propertyForValue]||this._inputElement.value},ready:function(){this.__isFirstValueUpdate=!0,this._addons||(this._addons=[]),this.addEventListener("focus",this._boundOnFocus,!0),this.addEventListener("blur",this._boundOnBlur,!0)},attached:function(){this.attrForValue?this._inputElement.addEventListener(this._valueChangedEvent,this._boundValueChanged):this.addEventListener("input",this._onInput),this._inputElementValue&&""!=this._inputElementValue?this._handleValueAndAutoValidate(this._inputElement):this._handleValue(this._inputElement)},_onAddonAttached:function(e){this._addons||(this._addons=[]);var t=e.target;-1===this._addons.indexOf(t)&&(this._addons.push(t),this.isAttached&&this._handleValue(this._inputElement))},_onFocus:function(){this._setFocused(!0)},_onBlur:function(){this._setFocused(!1),this._handleValueAndAutoValidate(this._inputElement)},_onInput:function(e){this._handleValueAndAutoValidate(e.target)},_onValueChanged:function(e){var t=e.target;this.__isFirstValueUpdate&&(this.__isFirstValueUpdate=!1,void 0===t.value||""===t.value)||this._handleValueAndAutoValidate(e.target)},_handleValue:function(e){var t=this._inputElementValue;t||0===t||"number"===e.type&&!e.checkValidity()?this._inputHasContent=!0:this._inputHasContent=!1,this.updateAddons({inputElement:e,value:t,invalid:this.invalid})},_handleValueAndAutoValidate:function(e){var t;this.autoValidate&&e&&(t=e.validate?e.validate(this._inputElementValue):e.checkValidity(),this.invalid=!t);this._handleValue(e)},_onIronInputValidate:function(e){this.invalid=this._inputElement.invalid},_invalidChanged:function(){this._addons&&this.updateAddons({invalid:this.invalid})},updateAddons:function(e){for(var t,i=0;t=this._addons[i];i++)t.update(e)},_computeInputContentClass:function(e,t,i,a,n){var r="input-content";if(e)n&&(r+=" label-is-hidden"),a&&(r+=" is-invalid");else{var o=this.querySelector("label");t||n?(r+=" label-is-floating",this.$.labelAndInputContainer.style.position="static",a?r+=" is-invalid":i&&(r+=" label-is-highlighted")):(o&&(this.$.labelAndInputContainer.style.position="relative"),a&&(r+=" is-invalid"))}return i&&(r+=" focused"),r},_computeUnderlineClass:function(e,t){var i="underline";return t?i+=" is-invalid":e&&(i+=" is-highlighted"),i},_computeAddOnContentClass:function(e,t){var i="add-on-content";return t?i+=" is-invalid":e&&(i+=" is-highlighted"),i}}),E({_template:S`
    <style>
      :host {
        display: inline-block;
        visibility: hidden;

        color: var(--paper-input-container-invalid-color, var(--error-color));

        @apply --paper-font-caption;
        @apply --paper-input-error;
        position: absolute;
        left:0;
        right:0;
      }

      :host([invalid]) {
        visibility: visible;
      }

      #a11yWrapper {
        visibility: hidden;
      }

      :host([invalid]) #a11yWrapper {
        visibility: visible;
      }
    </style>

    <!--
    If the paper-input-error element is directly referenced by an
    \`aria-describedby\` attribute, such as when used as a paper-input add-on,
    then applying \`visibility: hidden;\` to the paper-input-error element itself
    does not hide the error.

    For more information, see:
    https://www.w3.org/TR/accname-1.1/#mapping_additional_nd_description
    -->
    <div id="a11yWrapper">
      <slot></slot>
    </div>
`,is:"paper-input-error",behaviors:[ce],properties:{invalid:{readOnly:!0,reflectToAttribute:!0,type:Boolean}},update:function(e){this._setInvalid(e.invalid)}});const he={properties:{name:{type:String},value:{notify:!0,type:String},required:{type:Boolean,value:!1}},attached:function(){},detached:function(){}};var pe={"U+0008":"backspace","U+0009":"tab","U+001B":"esc","U+0020":"space","U+007F":"del"},me={8:"backspace",9:"tab",13:"enter",27:"esc",33:"pageup",34:"pagedown",35:"end",36:"home",32:"space",37:"left",38:"up",39:"right",40:"down",46:"del",106:"*"},ve={shift:"shiftKey",ctrl:"ctrlKey",alt:"altKey",meta:"metaKey"},fe=/[a-z0-9*]/,be=/U\+/,ye=/^arrow/,ge=/^space(bar)?/,_e=/^escape$/;function ke(e,t){var i="";if(e){var a=e.toLowerCase();" "===a||ge.test(a)?i="space":_e.test(a)?i="esc":1==a.length?t&&!fe.test(a)||(i=a):i=ye.test(a)?a.replace("arrow",""):"multiply"==a?"*":a}return i}function xe(e,t){return e.key?ke(e.key,t):e.detail&&e.detail.key?ke(e.detail.key,t):(i=e.keyIdentifier,a="",i&&(i in pe?a=pe[i]:be.test(i)?(i=parseInt(i.replace("U+","0x"),16),a=String.fromCharCode(i).toLowerCase()):a=i.toLowerCase()),a||function(e){var t="";return Number(e)&&(t=e>=65&&e<=90?String.fromCharCode(32+e):e>=112&&e<=123?"f"+(e-112+1):e>=48&&e<=57?String(e-48):e>=96&&e<=105?String(e-96):me[e]),t}(e.keyCode)||"");var i,a}function we(e,t){return xe(t,e.hasModifiers)===e.key&&(!e.hasModifiers||!!t.shiftKey==!!e.shiftKey&&!!t.ctrlKey==!!e.ctrlKey&&!!t.altKey==!!e.altKey&&!!t.metaKey==!!e.metaKey)}function $e(e){return e.trim().split(" ").map((function(e){return function(e){return 1===e.length?{combo:e,key:e,event:"keydown"}:e.split("+").reduce((function(e,t){var i=t.split(":"),a=i[0],n=i[1];return a in ve?(e[ve[a]]=!0,e.hasModifiers=!0):(e.key=a,e.event=n||"keydown"),e}),{combo:e.split(":").shift()})}(e)}))}const Ce={properties:{keyEventTarget:{type:Object,value:function(){return this}},stopKeyboardEventPropagation:{type:Boolean,value:!1},_boundKeyHandlers:{type:Array,value:function(){return[]}},_imperativeKeyBindings:{type:Object,value:function(){return{}}}},observers:["_resetKeyEventListeners(keyEventTarget, _boundKeyHandlers)"],keyBindings:{},registered:function(){this._prepKeyBindings()},attached:function(){this._listenKeyEventListeners()},detached:function(){this._unlistenKeyEventListeners()},addOwnKeyBinding:function(e,t){this._imperativeKeyBindings[e]=t,this._prepKeyBindings(),this._resetKeyEventListeners()},removeOwnKeyBindings:function(){this._imperativeKeyBindings={},this._prepKeyBindings(),this._resetKeyEventListeners()},keyboardEventMatchesKeys:function(e,t){for(var i=$e(t),a=0;a<i.length;++a)if(we(i[a],e))return!0;return!1},_collectKeyBindings:function(){var e=this.behaviors.map((function(e){return e.keyBindings}));return-1===e.indexOf(this.keyBindings)&&e.push(this.keyBindings),e},_prepKeyBindings:function(){for(var e in this._keyBindings={},this._collectKeyBindings().forEach((function(e){for(var t in e)this._addKeyBinding(t,e[t])}),this),this._imperativeKeyBindings)this._addKeyBinding(e,this._imperativeKeyBindings[e]);for(var t in this._keyBindings)this._keyBindings[t].sort((function(e,t){var i=e[0].hasModifiers;return i===t[0].hasModifiers?0:i?-1:1}))},_addKeyBinding:function(e,t){$e(e).forEach((function(e){this._keyBindings[e.event]=this._keyBindings[e.event]||[],this._keyBindings[e.event].push([e,t])}),this)},_resetKeyEventListeners:function(){this._unlistenKeyEventListeners(),this.isAttached&&this._listenKeyEventListeners()},_listenKeyEventListeners:function(){this.keyEventTarget&&Object.keys(this._keyBindings).forEach((function(e){var t=this._keyBindings[e],i=this._onKeyBindingEvent.bind(this,t);this._boundKeyHandlers.push([this.keyEventTarget,e,i]),this.keyEventTarget.addEventListener(e,i)}),this)},_unlistenKeyEventListeners:function(){for(var e,t,i,a;this._boundKeyHandlers.length;)t=(e=this._boundKeyHandlers.pop())[0],i=e[1],a=e[2],t.removeEventListener(i,a)},_onKeyBindingEvent:function(e,t){if(this.stopKeyboardEventPropagation&&t.stopPropagation(),!t.defaultPrevented)for(var i=0;i<e.length;i++){var a=e[i][0],n=e[i][1];if(we(a,t)&&(this._triggerKeyHandler(a,n,t),t.defaultPrevented))return}},_triggerKeyHandler:function(e,t,i){var a=Object.create(e);a.keyboardEvent=i;var n=new CustomEvent(e.event,{detail:a,cancelable:!0});this[t].call(this,n),n.defaultPrevented&&i.preventDefault()}},Ee={properties:{focused:{type:Boolean,value:!1,notify:!0,readOnly:!0,reflectToAttribute:!0},disabled:{type:Boolean,value:!1,notify:!0,observer:"_disabledChanged",reflectToAttribute:!0},_oldTabIndex:{type:String},_boundFocusBlurHandler:{type:Function,value:function(){return this._focusBlurHandler.bind(this)}}},observers:["_changedControlState(focused, disabled)"],ready:function(){this.addEventListener("focus",this._boundFocusBlurHandler,!0),this.addEventListener("blur",this._boundFocusBlurHandler,!0)},_focusBlurHandler:function(e){this._setFocused("focus"===e.type)},_disabledChanged:function(e,t){this.setAttribute("aria-disabled",e?"true":"false"),this.style.pointerEvents=e?"none":"",e?(this._oldTabIndex=this.getAttribute("tabindex"),this._setFocused(!1),this.tabIndex=-1,this.blur()):void 0!==this._oldTabIndex&&(null===this._oldTabIndex?this.removeAttribute("tabindex"):this.setAttribute("tabindex",this._oldTabIndex))},_changedControlState:function(){this._controlStateChanged&&this._controlStateChanged()}},Se={NextLabelID:1,NextAddonID:1,NextInputID:1},Ae={properties:{label:{type:String},value:{notify:!0,type:String},disabled:{type:Boolean,value:!1},invalid:{type:Boolean,value:!1,notify:!0},allowedPattern:{type:String},type:{type:String},list:{type:String},pattern:{type:String},required:{type:Boolean,value:!1},errorMessage:{type:String},charCounter:{type:Boolean,value:!1},noLabelFloat:{type:Boolean,value:!1},alwaysFloatLabel:{type:Boolean,value:!1},autoValidate:{type:Boolean,value:!1},validator:{type:String},autocomplete:{type:String,value:"off"},autofocus:{type:Boolean,observer:"_autofocusChanged"},inputmode:{type:String},minlength:{type:Number},maxlength:{type:Number},min:{type:String},max:{type:String},step:{type:String},name:{type:String},placeholder:{type:String,value:""},readonly:{type:Boolean,value:!1},size:{type:Number},autocapitalize:{type:String,value:"none"},autocorrect:{type:String,value:"off"},autosave:{type:String},results:{type:Number},accept:{type:String},multiple:{type:Boolean},_ariaDescribedBy:{type:String,value:""},_ariaLabelledBy:{type:String,value:""},_inputId:{type:String,value:""}},listeners:{"addon-attached":"_onAddonAttached"},keyBindings:{"shift+tab:keydown":"_onShiftTabDown"},hostAttributes:{tabindex:0},get inputElement(){return this.$||(this.$={}),this.$.input||(this._generateInputId(),this.$.input=this.$$("#"+this._inputId)),this.$.input},get _focusableElement(){return this.inputElement},created:function(){this._typesThatHaveText=["date","datetime","datetime-local","month","time","week","file"]},attached:function(){this._updateAriaLabelledBy(),!R&&this.inputElement&&-1!==this._typesThatHaveText.indexOf(this.inputElement.type)&&(this.alwaysFloatLabel=!0)},_appendStringWithSpace:function(e,t){return e=e?e+" "+t:t},_onAddonAttached:function(e){var t=A(e).rootTarget;if(t.id)this._ariaDescribedBy=this._appendStringWithSpace(this._ariaDescribedBy,t.id);else{var i="paper-input-add-on-"+Se.NextAddonID++;t.id=i,this._ariaDescribedBy=this._appendStringWithSpace(this._ariaDescribedBy,i)}},validate:function(){return this.inputElement.validate()},_focusBlurHandler:function(e){Ee._focusBlurHandler.call(this,e),this.focused&&!this._shiftTabPressed&&this._focusableElement&&this._focusableElement.focus()},_onShiftTabDown:function(e){var t=this.getAttribute("tabindex");this._shiftTabPressed=!0,this.setAttribute("tabindex","-1"),this.async((function(){this.setAttribute("tabindex",t),this._shiftTabPressed=!1}),1)},_handleAutoValidate:function(){this.autoValidate&&this.validate()},updateValueAndPreserveCaret:function(e){try{var t=this.inputElement.selectionStart;this.value=e,this.inputElement.selectionStart=t,this.inputElement.selectionEnd=t}catch(t){this.value=e}},_computeAlwaysFloatLabel:function(e,t){return t||e},_updateAriaLabelledBy:function(){var e,t=A(this.root).querySelector("label");t?(t.id?e=t.id:(e="paper-input-label-"+Se.NextLabelID++,t.id=e),this._ariaLabelledBy=e):this._ariaLabelledBy=""},_generateInputId:function(){this._inputId&&""!==this._inputId||(this._inputId="input-"+Se.NextInputID++)},_onChange:function(e){this.shadowRoot&&this.fire(e.type,{sourceEvent:e},{node:this,bubbles:e.bubbles,cancelable:e.cancelable})},_autofocusChanged:function(){if(this.autofocus&&this._focusableElement){var e=document.activeElement;e instanceof HTMLElement&&e!==document.body&&e!==document.documentElement||this._focusableElement.focus()}}};E({is:"paper-input",_template:S`
    <style>
      :host {
        display: block;
      }

      :host([focused]) {
        outline: none;
      }

      :host([hidden]) {
        display: none !important;
      }

      input {
        /* Firefox sets a min-width on the input, which can cause layout issues */
        min-width: 0;
      }

      /* In 1.x, the <input> is distributed to paper-input-container, which styles it.
      In 2.x the <iron-input> is distributed to paper-input-container, which styles
      it, but in order for this to work correctly, we need to reset some
      of the native input's properties to inherit (from the iron-input) */
      iron-input > input {
        @apply --paper-input-container-shared-input-style;
        font-family: inherit;
        font-weight: inherit;
        font-size: inherit;
        letter-spacing: inherit;
        word-spacing: inherit;
        line-height: inherit;
        text-shadow: inherit;
        color: inherit;
        cursor: inherit;
      }

      input:disabled {
        @apply --paper-input-container-input-disabled;
      }

      input::-webkit-outer-spin-button,
      input::-webkit-inner-spin-button {
        @apply --paper-input-container-input-webkit-spinner;
      }

      input::-webkit-clear-button {
        @apply --paper-input-container-input-webkit-clear;
      }

      input::-webkit-calendar-picker-indicator {
        @apply --paper-input-container-input-webkit-calendar-picker-indicator;
      }

      input::-webkit-input-placeholder {
        color: var(--paper-input-container-color, var(--secondary-text-color));
      }

      input:-moz-placeholder {
        color: var(--paper-input-container-color, var(--secondary-text-color));
      }

      input::-moz-placeholder {
        color: var(--paper-input-container-color, var(--secondary-text-color));
      }

      input::-ms-clear {
        @apply --paper-input-container-ms-clear;
      }

      input::-ms-reveal {
        @apply --paper-input-container-ms-reveal;
      }

      input:-ms-input-placeholder {
        color: var(--paper-input-container-color, var(--secondary-text-color));
      }

      label {
        pointer-events: none;
      }
    </style>

    <paper-input-container id="container" no-label-float="[[noLabelFloat]]" always-float-label="[[_computeAlwaysFloatLabel(alwaysFloatLabel,placeholder)]]" auto-validate$="[[autoValidate]]" disabled$="[[disabled]]" invalid="[[invalid]]">

      <slot name="prefix" slot="prefix"></slot>

      <label hidden$="[[!label]]" aria-hidden="true" for$="[[_inputId]]" slot="label">[[label]]</label>

      <!-- Need to bind maxlength so that the paper-input-char-counter works correctly -->
      <iron-input bind-value="{{value}}" slot="input" class="input-element" id$="[[_inputId]]" maxlength$="[[maxlength]]" allowed-pattern="[[allowedPattern]]" invalid="{{invalid}}" validator="[[validator]]">
        <input aria-labelledby$="[[_ariaLabelledBy]]" aria-describedby$="[[_ariaDescribedBy]]" disabled$="[[disabled]]" title$="[[title]]" type$="[[type]]" pattern$="[[pattern]]" required$="[[required]]" autocomplete$="[[autocomplete]]" autofocus$="[[autofocus]]" inputmode$="[[inputmode]]" minlength$="[[minlength]]" maxlength$="[[maxlength]]" min$="[[min]]" max$="[[max]]" step$="[[step]]" name$="[[name]]" placeholder$="[[placeholder]]" readonly$="[[readonly]]" list$="[[list]]" size$="[[size]]" autocapitalize$="[[autocapitalize]]" autocorrect$="[[autocorrect]]" on-change="_onChange" tabindex$="[[tabIndex]]" autosave$="[[autosave]]" results$="[[results]]" accept$="[[accept]]" multiple$="[[multiple]]" role$="[[inputRole]]" aria-haspopup$="[[inputAriaHaspopup]]">
      </iron-input>

      <slot name="suffix" slot="suffix"></slot>

      <template is="dom-if" if="[[errorMessage]]">
        <paper-input-error aria-live="assertive" slot="add-on">[[errorMessage]]</paper-input-error>
      </template>

      <template is="dom-if" if="[[charCounter]]">
        <paper-input-char-counter slot="add-on"></paper-input-char-counter>
      </template>

    </paper-input-container>
  `,behaviors:[[Ee,Ce,Ae],he],properties:{value:{type:String},inputRole:{type:String,value:void 0},inputAriaHaspopup:{type:String,value:void 0}},get _focusableElement(){return this.inputElement._inputElement},listeners:{"iron-input-ready":"_onIronInputReady"},_onIronInputReady:function(){this.$.nativeInput||(this.$.nativeInput=this.$$("input")),this.inputElement&&-1!==this._typesThatHaveText.indexOf(this.$.nativeInput.type)&&(this.alwaysFloatLabel=!0),this.inputElement.bindValue&&this.$.container._handleValueAndAutoValidate(this.inputElement)}});const Be={properties:{value:{type:Number,value:0,notify:!0,reflectToAttribute:!0},min:{type:Number,value:0,notify:!0},max:{type:Number,value:100,notify:!0},step:{type:Number,value:1,notify:!0},ratio:{type:Number,value:0,readOnly:!0,notify:!0}},observers:["_update(value, min, max, step)"],_calcRatio:function(e){return(this._clampValue(e)-this.min)/(this.max-this.min)},_clampValue:function(e){return Math.min(this.max,Math.max(this.min,this._calcStep(e)))},_calcStep:function(e){if(e=parseFloat(e),!this.step)return e;var t=Math.round((e-this.min)/this.step);return this.step<1?t/(1/this.step)+this.min:t*this.step+this.min},_validateValue:function(){var e=this._clampValue(this.value);return this.value=this.oldValue=isNaN(e)?this.oldValue:e,this.value!==e},_update:function(){this._validateValue(),this._setRatio(100*this._calcRatio(this.value))}};E({_template:S`
    <style>
      :host {
        display: block;
        width: 200px;
        position: relative;
        overflow: hidden;
      }

      :host([hidden]), [hidden] {
        display: none !important;
      }

      #progressContainer {
        @apply --paper-progress-container;
        position: relative;
      }

      #progressContainer,
      /* the stripe for the indeterminate animation*/
      .indeterminate::after {
        height: var(--paper-progress-height, 4px);
      }

      #primaryProgress,
      #secondaryProgress,
      .indeterminate::after {
        @apply --layout-fit;
      }

      #progressContainer,
      .indeterminate::after {
        background: var(--paper-progress-container-color, var(--google-grey-300));
      }

      :host(.transiting) #primaryProgress,
      :host(.transiting) #secondaryProgress {
        -webkit-transition-property: -webkit-transform;
        transition-property: transform;

        /* Duration */
        -webkit-transition-duration: var(--paper-progress-transition-duration, 0.08s);
        transition-duration: var(--paper-progress-transition-duration, 0.08s);

        /* Timing function */
        -webkit-transition-timing-function: var(--paper-progress-transition-timing-function, ease);
        transition-timing-function: var(--paper-progress-transition-timing-function, ease);

        /* Delay */
        -webkit-transition-delay: var(--paper-progress-transition-delay, 0s);
        transition-delay: var(--paper-progress-transition-delay, 0s);
      }

      #primaryProgress,
      #secondaryProgress {
        @apply --layout-fit;
        -webkit-transform-origin: left center;
        transform-origin: left center;
        -webkit-transform: scaleX(0);
        transform: scaleX(0);
        will-change: transform;
      }

      #primaryProgress {
        background: var(--paper-progress-active-color, var(--google-green-500));
      }

      #secondaryProgress {
        background: var(--paper-progress-secondary-color, var(--google-green-100));
      }

      :host([disabled]) #primaryProgress {
        background: var(--paper-progress-disabled-active-color, var(--google-grey-500));
      }

      :host([disabled]) #secondaryProgress {
        background: var(--paper-progress-disabled-secondary-color, var(--google-grey-300));
      }

      :host(:not([disabled])) #primaryProgress.indeterminate {
        -webkit-transform-origin: right center;
        transform-origin: right center;
        -webkit-animation: indeterminate-bar var(--paper-progress-indeterminate-cycle-duration, 2s) linear infinite;
        animation: indeterminate-bar var(--paper-progress-indeterminate-cycle-duration, 2s) linear infinite;
      }

      :host(:not([disabled])) #primaryProgress.indeterminate::after {
        content: "";
        -webkit-transform-origin: center center;
        transform-origin: center center;

        -webkit-animation: indeterminate-splitter var(--paper-progress-indeterminate-cycle-duration, 2s) linear infinite;
        animation: indeterminate-splitter var(--paper-progress-indeterminate-cycle-duration, 2s) linear infinite;
      }

      @-webkit-keyframes indeterminate-bar {
        0% {
          -webkit-transform: scaleX(1) translateX(-100%);
        }
        50% {
          -webkit-transform: scaleX(1) translateX(0%);
        }
        75% {
          -webkit-transform: scaleX(1) translateX(0%);
          -webkit-animation-timing-function: cubic-bezier(.28,.62,.37,.91);
        }
        100% {
          -webkit-transform: scaleX(0) translateX(0%);
        }
      }

      @-webkit-keyframes indeterminate-splitter {
        0% {
          -webkit-transform: scaleX(.75) translateX(-125%);
        }
        30% {
          -webkit-transform: scaleX(.75) translateX(-125%);
          -webkit-animation-timing-function: cubic-bezier(.42,0,.6,.8);
        }
        90% {
          -webkit-transform: scaleX(.75) translateX(125%);
        }
        100% {
          -webkit-transform: scaleX(.75) translateX(125%);
        }
      }

      @keyframes indeterminate-bar {
        0% {
          transform: scaleX(1) translateX(-100%);
        }
        50% {
          transform: scaleX(1) translateX(0%);
        }
        75% {
          transform: scaleX(1) translateX(0%);
          animation-timing-function: cubic-bezier(.28,.62,.37,.91);
        }
        100% {
          transform: scaleX(0) translateX(0%);
        }
      }

      @keyframes indeterminate-splitter {
        0% {
          transform: scaleX(.75) translateX(-125%);
        }
        30% {
          transform: scaleX(.75) translateX(-125%);
          animation-timing-function: cubic-bezier(.42,0,.6,.8);
        }
        90% {
          transform: scaleX(.75) translateX(125%);
        }
        100% {
          transform: scaleX(.75) translateX(125%);
        }
      }
    </style>

    <div id="progressContainer">
      <div id="secondaryProgress" hidden\$="[[_hideSecondaryProgress(secondaryRatio)]]"></div>
      <div id="primaryProgress"></div>
    </div>
`,is:"paper-progress",behaviors:[Be],properties:{secondaryProgress:{type:Number,value:0},secondaryRatio:{type:Number,value:0,readOnly:!0},indeterminate:{type:Boolean,value:!1,observer:"_toggleIndeterminate"},disabled:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_disabledChanged"}},observers:["_progressChanged(secondaryProgress, value, min, max, indeterminate)"],hostAttributes:{role:"progressbar"},_toggleIndeterminate:function(e){this.toggleClass("indeterminate",e,this.$.primaryProgress)},_transformProgress:function(e,t){var i="scaleX("+t/100+")";e.style.transform=e.style.webkitTransform=i},_mainRatioChanged:function(e){this._transformProgress(this.$.primaryProgress,e)},_progressChanged:function(e,t,i,a,n){e=this._clampValue(e),t=this._clampValue(t);var r=100*this._calcRatio(e),o=100*this._calcRatio(t);this._setSecondaryRatio(r),this._transformProgress(this.$.secondaryProgress,r),this._transformProgress(this.$.primaryProgress,o),this.secondaryProgress=e,n?this.removeAttribute("aria-valuenow"):this.setAttribute("aria-valuenow",t),this.setAttribute("aria-valuemin",i),this.setAttribute("aria-valuemax",a)},_disabledChanged:function(e){this.setAttribute("aria-disabled",e?"true":"false")},_hideSecondaryProgress:function(e){return 0===e}});const Re={properties:{pressed:{type:Boolean,readOnly:!0,value:!1,reflectToAttribute:!0,observer:"_pressedChanged"},toggles:{type:Boolean,value:!1,reflectToAttribute:!0},active:{type:Boolean,value:!1,notify:!0,reflectToAttribute:!0},pointerDown:{type:Boolean,readOnly:!0,value:!1},receivedFocusFromKeyboard:{type:Boolean,readOnly:!0},ariaActiveAttribute:{type:String,value:"aria-pressed",observer:"_ariaActiveAttributeChanged"}},listeners:{down:"_downHandler",up:"_upHandler",tap:"_tapHandler"},observers:["_focusChanged(focused)","_activeChanged(active, ariaActiveAttribute)"],keyBindings:{"enter:keydown":"_asyncClick","space:keydown":"_spaceKeyDownHandler","space:keyup":"_spaceKeyUpHandler"},_mouseEventRe:/^mouse/,_tapHandler:function(){this.toggles?this._userActivate(!this.active):this.active=!1},_focusChanged:function(e){this._detectKeyboardFocus(e),e||this._setPressed(!1)},_detectKeyboardFocus:function(e){this._setReceivedFocusFromKeyboard(!this.pointerDown&&e)},_userActivate:function(e){this.active!==e&&(this.active=e,this.fire("change"))},_downHandler:function(e){this._setPointerDown(!0),this._setPressed(!0),this._setReceivedFocusFromKeyboard(!1)},_upHandler:function(){this._setPointerDown(!1),this._setPressed(!1)},_spaceKeyDownHandler:function(e){var t=e.detail.keyboardEvent,i=A(t).localTarget;this.isLightDescendant(i)||(t.preventDefault(),t.stopImmediatePropagation(),this._setPressed(!0))},_spaceKeyUpHandler:function(e){var t=e.detail.keyboardEvent,i=A(t).localTarget;this.isLightDescendant(i)||(this.pressed&&this._asyncClick(),this._setPressed(!1))},_asyncClick:function(){this.async((function(){this.click()}),1)},_pressedChanged:function(e){this._changedButtonState()},_ariaActiveAttributeChanged:function(e,t){t&&t!=e&&this.hasAttribute(t)&&this.removeAttribute(t)},_activeChanged:function(e,t){this.toggles?this.setAttribute(this.ariaActiveAttribute,e?"true":"false"):this.removeAttribute(this.ariaActiveAttribute),this._changedButtonState()},_controlStateChanged:function(){this.disabled?this._setPressed(!1):this._changedButtonState()},_changedButtonState:function(){this._buttonStateChanged&&this._buttonStateChanged()}},Ve=[Ce,Re];var Me={distance:function(e,t,i,a){var n=e-i,r=t-a;return Math.sqrt(n*n+r*r)},now:window.performance&&window.performance.now?window.performance.now.bind(window.performance):Date.now};function Ie(e){this.element=e,this.width=this.boundingRect.width,this.height=this.boundingRect.height,this.size=Math.max(this.width,this.height)}function Le(e){this.element=e,this.color=window.getComputedStyle(e).color,this.wave=document.createElement("div"),this.waveContainer=document.createElement("div"),this.wave.style.backgroundColor=this.color,this.wave.classList.add("wave"),this.waveContainer.classList.add("wave-container"),A(this.waveContainer).appendChild(this.wave),this.resetInteractionState()}Ie.prototype={get boundingRect(){return this.element.getBoundingClientRect()},furthestCornerDistanceFrom:function(e,t){var i=Me.distance(e,t,0,0),a=Me.distance(e,t,this.width,0),n=Me.distance(e,t,0,this.height),r=Me.distance(e,t,this.width,this.height);return Math.max(i,a,n,r)}},Le.MAX_RADIUS=300,Le.prototype={get recenters(){return this.element.recenters},get center(){return this.element.center},get mouseDownElapsed(){var e;return this.mouseDownStart?(e=Me.now()-this.mouseDownStart,this.mouseUpStart&&(e-=this.mouseUpElapsed),e):0},get mouseUpElapsed(){return this.mouseUpStart?Me.now()-this.mouseUpStart:0},get mouseDownElapsedSeconds(){return this.mouseDownElapsed/1e3},get mouseUpElapsedSeconds(){return this.mouseUpElapsed/1e3},get mouseInteractionSeconds(){return this.mouseDownElapsedSeconds+this.mouseUpElapsedSeconds},get initialOpacity(){return this.element.initialOpacity},get opacityDecayVelocity(){return this.element.opacityDecayVelocity},get radius(){var e=this.containerMetrics.width*this.containerMetrics.width,t=this.containerMetrics.height*this.containerMetrics.height,i=1.1*Math.min(Math.sqrt(e+t),Le.MAX_RADIUS)+5,a=1.1-i/Le.MAX_RADIUS*.2,n=this.mouseInteractionSeconds/a,r=i*(1-Math.pow(80,-n));return Math.abs(r)},get opacity(){return this.mouseUpStart?Math.max(0,this.initialOpacity-this.mouseUpElapsedSeconds*this.opacityDecayVelocity):this.initialOpacity},get outerOpacity(){var e=.3*this.mouseUpElapsedSeconds,t=this.opacity;return Math.max(0,Math.min(e,t))},get isOpacityFullyDecayed(){return this.opacity<.01&&this.radius>=Math.min(this.maxRadius,Le.MAX_RADIUS)},get isRestingAtMaxRadius(){return this.opacity>=this.initialOpacity&&this.radius>=Math.min(this.maxRadius,Le.MAX_RADIUS)},get isAnimationComplete(){return this.mouseUpStart?this.isOpacityFullyDecayed:this.isRestingAtMaxRadius},get translationFraction(){return Math.min(1,this.radius/this.containerMetrics.size*2/Math.sqrt(2))},get xNow(){return this.xEnd?this.xStart+this.translationFraction*(this.xEnd-this.xStart):this.xStart},get yNow(){return this.yEnd?this.yStart+this.translationFraction*(this.yEnd-this.yStart):this.yStart},get isMouseDown(){return this.mouseDownStart&&!this.mouseUpStart},resetInteractionState:function(){this.maxRadius=0,this.mouseDownStart=0,this.mouseUpStart=0,this.xStart=0,this.yStart=0,this.xEnd=0,this.yEnd=0,this.slideDistance=0,this.containerMetrics=new Ie(this.element)},draw:function(){var e,t,i;this.wave.style.opacity=this.opacity,e=this.radius/(this.containerMetrics.size/2),t=this.xNow-this.containerMetrics.width/2,i=this.yNow-this.containerMetrics.height/2,this.waveContainer.style.webkitTransform="translate("+t+"px, "+i+"px)",this.waveContainer.style.transform="translate3d("+t+"px, "+i+"px, 0)",this.wave.style.webkitTransform="scale("+e+","+e+")",this.wave.style.transform="scale3d("+e+","+e+",1)"},downAction:function(e){var t=this.containerMetrics.width/2,i=this.containerMetrics.height/2;this.resetInteractionState(),this.mouseDownStart=Me.now(),this.center?(this.xStart=t,this.yStart=i,this.slideDistance=Me.distance(this.xStart,this.yStart,this.xEnd,this.yEnd)):(this.xStart=e?e.detail.x-this.containerMetrics.boundingRect.left:this.containerMetrics.width/2,this.yStart=e?e.detail.y-this.containerMetrics.boundingRect.top:this.containerMetrics.height/2),this.recenters&&(this.xEnd=t,this.yEnd=i,this.slideDistance=Me.distance(this.xStart,this.yStart,this.xEnd,this.yEnd)),this.maxRadius=this.containerMetrics.furthestCornerDistanceFrom(this.xStart,this.yStart),this.waveContainer.style.top=(this.containerMetrics.height-this.containerMetrics.size)/2+"px",this.waveContainer.style.left=(this.containerMetrics.width-this.containerMetrics.size)/2+"px",this.waveContainer.style.width=this.containerMetrics.size+"px",this.waveContainer.style.height=this.containerMetrics.size+"px"},upAction:function(e){this.isMouseDown&&(this.mouseUpStart=Me.now())},remove:function(){A(A(this.waveContainer).parentNode).removeChild(this.waveContainer)}},E({_template:S`
    <style>
      :host {
        display: block;
        position: absolute;
        border-radius: inherit;
        overflow: hidden;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        /* See PolymerElements/paper-behaviors/issues/34. On non-Chrome browsers,
         * creating a node (with a position:absolute) in the middle of an event
         * handler "interrupts" that event handler (which happens when the
         * ripple is created on demand) */
        pointer-events: none;
      }

      :host([animating]) {
        /* This resolves a rendering issue in Chrome (as of 40) where the
           ripple is not properly clipped by its parent (which may have
           rounded corners). See: http://jsbin.com/temexa/4

           Note: We only apply this style conditionally. Otherwise, the browser
           will create a new compositing layer for every ripple element on the
           page, and that would be bad. */
        -webkit-transform: translate(0, 0);
        transform: translate3d(0, 0, 0);
      }

      #background,
      #waves,
      .wave-container,
      .wave {
        pointer-events: none;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }

      #background,
      .wave {
        opacity: 0;
      }

      #waves,
      .wave {
        overflow: hidden;
      }

      .wave-container,
      .wave {
        border-radius: 50%;
      }

      :host(.circle) #background,
      :host(.circle) #waves {
        border-radius: 50%;
      }

      :host(.circle) .wave-container {
        overflow: hidden;
      }
    </style>

    <div id="background"></div>
    <div id="waves"></div>
`,is:"paper-ripple",behaviors:[Ce],properties:{initialOpacity:{type:Number,value:.25},opacityDecayVelocity:{type:Number,value:.8},recenters:{type:Boolean,value:!1},center:{type:Boolean,value:!1},ripples:{type:Array,value:function(){return[]}},animating:{type:Boolean,readOnly:!0,reflectToAttribute:!0,value:!1},holdDown:{type:Boolean,value:!1,observer:"_holdDownChanged"},noink:{type:Boolean,value:!1},_animating:{type:Boolean},_boundAnimate:{type:Function,value:function(){return this.animate.bind(this)}}},get target(){return this.keyEventTarget},keyBindings:{"enter:keydown":"_onEnterKeydown","space:keydown":"_onSpaceKeydown","space:keyup":"_onSpaceKeyup"},attached:function(){11==A(this).parentNode.nodeType?this.keyEventTarget=A(this).getOwnerRoot().host:this.keyEventTarget=A(this).parentNode;var e=this.keyEventTarget;this.listen(e,"up","uiUpAction"),this.listen(e,"down","uiDownAction")},detached:function(){this.unlisten(this.keyEventTarget,"up","uiUpAction"),this.unlisten(this.keyEventTarget,"down","uiDownAction"),this.keyEventTarget=null},get shouldKeepAnimating(){for(var e=0;e<this.ripples.length;++e)if(!this.ripples[e].isAnimationComplete)return!0;return!1},simulatedRipple:function(){this.downAction(null),this.async((function(){this.upAction()}),1)},uiDownAction:function(e){this.noink||this.downAction(e)},downAction:function(e){this.holdDown&&this.ripples.length>0||(this.addRipple().downAction(e),this._animating||(this._animating=!0,this.animate()))},uiUpAction:function(e){this.noink||this.upAction(e)},upAction:function(e){this.holdDown||(this.ripples.forEach((function(t){t.upAction(e)})),this._animating=!0,this.animate())},onAnimationComplete:function(){this._animating=!1,this.$.background.style.backgroundColor="",this.fire("transitionend")},addRipple:function(){var e=new Le(this);return A(this.$.waves).appendChild(e.waveContainer),this.$.background.style.backgroundColor=e.color,this.ripples.push(e),this._setAnimating(!0),e},removeRipple:function(e){var t=this.ripples.indexOf(e);t<0||(this.ripples.splice(t,1),e.remove(),this.ripples.length||this._setAnimating(!1))},animate:function(){if(this._animating){var e,t;for(e=0;e<this.ripples.length;++e)(t=this.ripples[e]).draw(),this.$.background.style.opacity=t.outerOpacity,t.isOpacityFullyDecayed&&!t.isRestingAtMaxRadius&&this.removeRipple(t);this.shouldKeepAnimating||0!==this.ripples.length?window.requestAnimationFrame(this._boundAnimate):this.onAnimationComplete()}},animateRipple:function(){return this.animate()},_onEnterKeydown:function(){this.uiDownAction(),this.async(this.uiUpAction,1)},_onSpaceKeydown:function(){this.uiDownAction()},_onSpaceKeyup:function(){this.uiUpAction()},_holdDownChanged:function(e,t){void 0!==t&&(e?this.downAction():this.upAction())}});const Pe={properties:{noink:{type:Boolean,observer:"_noinkChanged"},_rippleContainer:{type:Object}},_buttonStateChanged:function(){this.focused&&this.ensureRipple()},_downHandler:function(e){Re._downHandler.call(this,e),this.pressed&&this.ensureRipple(e)},ensureRipple:function(e){if(!this.hasRipple()){this._ripple=this._createRipple(),this._ripple.noink=this.noink;var t=this._rippleContainer||this.root;if(t&&A(t).appendChild(this._ripple),e){var i=A(this._rippleContainer||this),a=A(e).rootTarget;i.deepContains(a)&&this._ripple.uiDownAction(e)}}},getRipple:function(){return this.ensureRipple(),this._ripple},hasRipple:function(){return Boolean(this._ripple)},_createRipple:function(){return document.createElement("paper-ripple")},_noinkChanged:function(e){this.hasRipple()&&(this._ripple.noink=e)}},Te={observers:["_focusedChanged(receivedFocusFromKeyboard)"],_focusedChanged:function(e){e&&this.ensureRipple(),this.hasRipple()&&(this._ripple.holdDown=e)},_createRipple:function(){var e=Pe._createRipple();return e.id="ink",e.setAttribute("center",""),e.classList.add("circle"),e}},Ke=[Ve,Ee,Pe,Te],De=S`
  <style>
    :host {
      @apply --layout;
      @apply --layout-justified;
      @apply --layout-center;
      width: 200px;
      cursor: default;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      --paper-progress-active-color: var(--paper-slider-active-color, var(--google-blue-700));
      --paper-progress-secondary-color: var(--paper-slider-secondary-color, var(--google-blue-300));
      --paper-progress-disabled-active-color: var(--paper-slider-disabled-active-color, var(--paper-grey-400));
      --paper-progress-disabled-secondary-color: var(--paper-slider-disabled-secondary-color, var(--paper-grey-400));
      --calculated-paper-slider-height: var(--paper-slider-height, 2px);
    }

    /* focus shows the ripple */
    :host(:focus) {
      outline: none;
    }

    /**
      * NOTE(keanulee): Though :host-context is not universally supported, some pages
      * still rely on paper-slider being flipped when dir="rtl" is set on body. For full
      * compatibility, dir="rtl" must be explicitly set on paper-slider.
      */
    :dir(rtl) #sliderContainer {
      -webkit-transform: scaleX(-1);
      transform: scaleX(-1);
    }

    /**
      * NOTE(keanulee): This is separate from the rule above because :host-context may
      * not be recognized.
      */
    :host([dir="rtl"]) #sliderContainer {
      -webkit-transform: scaleX(-1);
      transform: scaleX(-1);
    }

    /**
      * NOTE(keanulee): Needed to override the :host-context rule (where supported)
      * to support LTR sliders in RTL pages.
      */
    :host([dir="ltr"]) #sliderContainer {
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
    }

    #sliderContainer {
      position: relative;
      width: 100%;
      height: calc(30px + var(--calculated-paper-slider-height));
      margin-left: calc(15px + var(--calculated-paper-slider-height)/2);
      margin-right: calc(15px + var(--calculated-paper-slider-height)/2);
    }

    #sliderContainer:focus {
      outline: 0;
    }

    #sliderContainer.editable {
      margin-top: 12px;
      margin-bottom: 12px;
    }

    .bar-container {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      overflow: hidden;
    }

    .ring > .bar-container {
      left: calc(5px + var(--calculated-paper-slider-height)/2);
      transition: left 0.18s ease;
    }

    .ring.expand.dragging > .bar-container {
      transition: none;
    }

    .ring.expand:not(.pin) > .bar-container {
      left: calc(8px + var(--calculated-paper-slider-height)/2);
    }

    #sliderBar {
      padding: 15px 0;
      width: 100%;
      background-color: var(--paper-slider-bar-color, transparent);
      --paper-progress-container-color: var(--paper-slider-container-color, var(--paper-grey-400));
      --paper-progress-height: var(--calculated-paper-slider-height);
    }

    .slider-markers {
      position: absolute;
      /* slider-knob is 30px + the slider-height so that the markers should start at a offset of 15px*/
      top: 15px;
      height: var(--calculated-paper-slider-height);
      left: 0;
      right: -1px;
      box-sizing: border-box;
      pointer-events: none;
      @apply --layout-horizontal;
    }

    .slider-marker {
      @apply --layout-flex;
    }
    .slider-markers::after,
    .slider-marker::after {
      content: "";
      display: block;
      margin-left: -1px;
      width: 2px;
      height: var(--calculated-paper-slider-height);
      border-radius: 50%;
      background-color: var(--paper-slider-markers-color, #000);
    }

    .slider-knob {
      position: absolute;
      left: 0;
      top: 0;
      margin-left: calc(-15px - var(--calculated-paper-slider-height)/2);
      width: calc(30px + var(--calculated-paper-slider-height));
      height: calc(30px + var(--calculated-paper-slider-height));
    }

    .transiting > .slider-knob {
      transition: left 0.08s ease;
    }

    .slider-knob:focus {
      outline: none;
    }

    .slider-knob.dragging {
      transition: none;
    }

    .snaps > .slider-knob.dragging {
      transition: -webkit-transform 0.08s ease;
      transition: transform 0.08s ease;
    }

    .slider-knob-inner {
      margin: 10px;
      width: calc(100% - 20px);
      height: calc(100% - 20px);
      background-color: var(--paper-slider-knob-color, var(--google-blue-700));
      border: 2px solid var(--paper-slider-knob-color, var(--google-blue-700));
      border-radius: 50%;

      -moz-box-sizing: border-box;
      box-sizing: border-box;

      transition-property: -webkit-transform, background-color, border;
      transition-property: transform, background-color, border;
      transition-duration: 0.18s;
      transition-timing-function: ease;
    }

    .expand:not(.pin) > .slider-knob > .slider-knob-inner {
      -webkit-transform: scale(1.5);
      transform: scale(1.5);
    }

    .ring > .slider-knob > .slider-knob-inner {
      background-color: var(--paper-slider-knob-start-color, transparent);
      border: 2px solid var(--paper-slider-knob-start-border-color, var(--paper-grey-400));
    }

    .slider-knob-inner::before {
      background-color: var(--paper-slider-pin-color, var(--google-blue-700));
    }

    .pin > .slider-knob > .slider-knob-inner::before {
      content: "";
      position: absolute;
      top: 0;
      left: 50%;
      margin-left: -13px;
      width: 26px;
      height: 26px;
      border-radius: 50% 50% 50% 0;

      -webkit-transform: rotate(-45deg) scale(0) translate(0);
      transform: rotate(-45deg) scale(0) translate(0);
    }

    .slider-knob-inner::before,
    .slider-knob-inner::after {
      transition: -webkit-transform .18s ease, background-color .18s ease;
      transition: transform .18s ease, background-color .18s ease;
    }

    .pin.ring > .slider-knob > .slider-knob-inner::before {
      background-color: var(--paper-slider-pin-start-color, var(--paper-grey-400));
    }

    .pin.expand > .slider-knob > .slider-knob-inner::before {
      -webkit-transform: rotate(-45deg) scale(1) translate(17px, -17px);
      transform: rotate(-45deg) scale(1) translate(17px, -17px);
    }

    .pin > .slider-knob > .slider-knob-inner::after {
      content: attr(value);
      position: absolute;
      top: 0;
      left: 50%;
      margin-left: -16px;
      width: 32px;
      height: 26px;
      text-align: center;
      color: var(--paper-slider-font-color, #fff);
      font-size: 10px;

      -webkit-transform: scale(0) translate(0);
      transform: scale(0) translate(0);
    }

    .pin.expand > .slider-knob > .slider-knob-inner::after {
      -webkit-transform: scale(1) translate(0, -17px);
      transform: scale(1) translate(0, -17px);
    }

    /* paper-input */
    .slider-input {
      width: 50px;
      overflow: hidden;
      --paper-input-container-input: {
        text-align: center;
        @apply --paper-slider-input-container-input;
      };
      @apply --paper-slider-input;
    }

    /* disabled state */
    #sliderContainer.disabled {
      pointer-events: none;
    }

    .disabled > .slider-knob > .slider-knob-inner {
      background-color: var(--paper-slider-disabled-knob-color, var(--paper-grey-400));
      border: 2px solid var(--paper-slider-disabled-knob-color, var(--paper-grey-400));
      -webkit-transform: scale3d(0.75, 0.75, 1);
      transform: scale3d(0.75, 0.75, 1);
    }

    .disabled.ring > .slider-knob > .slider-knob-inner {
      background-color: var(--paper-slider-knob-start-color, transparent);
      border: 2px solid var(--paper-slider-knob-start-border-color, var(--paper-grey-400));
    }

    paper-ripple {
      color: var(--paper-slider-knob-color, var(--google-blue-700));
    }
  </style>

  <div id="sliderContainer" class\$="[[_getClassNames(disabled, pin, snaps, immediateValue, min, expand, dragging, transiting, editable)]]">
    <div class="bar-container">
      <paper-progress disabled\$="[[disabled]]" id="sliderBar" aria-hidden="true" min="[[min]]" max="[[max]]" step="[[step]]" value="[[immediateValue]]" secondary-progress="[[secondaryProgress]]" on-down="_bardown" on-up="_resetKnob" on-track="_bartrack" on-tap="_barclick">
      </paper-progress>
    </div>

    <template is="dom-if" if="[[snaps]]">
      <div class="slider-markers">
        <template is="dom-repeat" items="[[markers]]">
          <div class="slider-marker"></div>
        </template>
      </div>
    </template>

    <div id="sliderKnob" class="slider-knob" on-down="_knobdown" on-up="_resetKnob" on-track="_onTrack" on-transitionend="_knobTransitionEnd">
        <div class="slider-knob-inner" value\$="[[immediateValue]]"></div>
    </div>
  </div>

  <template is="dom-if" if="[[editable]]">
    <paper-input id="input" type="number" step="[[step]]" min="[[min]]" max="[[max]]" class="slider-input" disabled\$="[[disabled]]" value="[[immediateValue]]" on-change="_changeValue" on-keydown="_inputKeyDown" no-label-float>
    </paper-input>
  </template>
`;De.setAttribute("strip-whitespace",""),E({_template:De,is:"paper-slider",behaviors:[Ce,he,Ke,Be],properties:{value:{type:Number,value:0},snaps:{type:Boolean,value:!1,notify:!0},pin:{type:Boolean,value:!1,notify:!0},secondaryProgress:{type:Number,value:0,notify:!0,observer:"_secondaryProgressChanged"},editable:{type:Boolean,value:!1},immediateValue:{type:Number,value:0,readOnly:!0,notify:!0},maxMarkers:{type:Number,value:0,notify:!0},expand:{type:Boolean,value:!1,readOnly:!0},ignoreBarTouch:{type:Boolean,value:!1},dragging:{type:Boolean,value:!1,readOnly:!0,notify:!0},transiting:{type:Boolean,value:!1,readOnly:!0},markers:{type:Array,readOnly:!0,value:function(){return[]}}},observers:["_updateKnob(value, min, max, snaps, step)","_valueChanged(value)","_immediateValueChanged(immediateValue)","_updateMarkers(maxMarkers, min, max, snaps)"],hostAttributes:{role:"slider",tabindex:0},keyBindings:{left:"_leftKey",right:"_rightKey","down pagedown home":"_decrementKey","up pageup end":"_incrementKey"},ready:function(){this.ignoreBarTouch&&V(this.$.sliderBar,"auto")},increment:function(){this.value=this._clampValue(this.value+this.step)},decrement:function(){this.value=this._clampValue(this.value-this.step)},_updateKnob:function(e,t,i,a,n){this.setAttribute("aria-valuemin",t),this.setAttribute("aria-valuemax",i),this.setAttribute("aria-valuenow",e),this._positionKnob(100*this._calcRatio(e))},_valueChanged:function(){this.fire("value-change",{composed:!0})},_immediateValueChanged:function(){this.dragging?this.fire("immediate-value-change",{composed:!0}):this.value=this.immediateValue},_secondaryProgressChanged:function(){this.secondaryProgress=this._clampValue(this.secondaryProgress)},_expandKnob:function(){this._setExpand(!0)},_resetKnob:function(){this.cancelDebouncer("expandKnob"),this._setExpand(!1)},_positionKnob:function(e){this._setImmediateValue(this._calcStep(this._calcKnobPosition(e))),this._setRatio(100*this._calcRatio(this.immediateValue)),this.$.sliderKnob.style.left=this.ratio+"%",this.dragging&&(this._knobstartx=this.ratio*this._w/100,this.translate3d(0,0,0,this.$.sliderKnob))},_calcKnobPosition:function(e){return(this.max-this.min)*e/100+this.min},_onTrack:function(e){switch(e.stopPropagation(),e.detail.state){case"start":this._trackStart(e);break;case"track":this._trackX(e);break;case"end":this._trackEnd()}},_trackStart:function(e){this._setTransiting(!1),this._w=this.$.sliderBar.offsetWidth,this._x=this.ratio*this._w/100,this._startx=this._x,this._knobstartx=this._startx,this._minx=-this._startx,this._maxx=this._w-this._startx,this.$.sliderKnob.classList.add("dragging"),this._setDragging(!0)},_trackX:function(e){this.dragging||this._trackStart(e);var t=this._isRTL?-1:1,i=Math.min(this._maxx,Math.max(this._minx,e.detail.dx*t));this._x=this._startx+i;var a=this._calcStep(this._calcKnobPosition(this._x/this._w*100));this._setImmediateValue(a);var n=this._calcRatio(this.immediateValue)*this._w-this._knobstartx;this.translate3d(n+"px",0,0,this.$.sliderKnob)},_trackEnd:function(){var e=this.$.sliderKnob.style;this.$.sliderKnob.classList.remove("dragging"),this._setDragging(!1),this._resetKnob(),this.value=this.immediateValue,e.transform=e.webkitTransform="",this.fire("change",{composed:!0})},_knobdown:function(e){this._expandKnob(),e.preventDefault(),this.focus()},_bartrack:function(e){this._allowBarEvent(e)&&this._onTrack(e)},_barclick:function(e){this._w=this.$.sliderBar.offsetWidth;var t=this.$.sliderBar.getBoundingClientRect(),i=(e.detail.x-t.left)/this._w*100;this._isRTL&&(i=100-i);var a=this.ratio;this._setTransiting(!0),this._positionKnob(i),a===this.ratio&&this._setTransiting(!1),this.async((function(){this.fire("change",{composed:!0})})),e.preventDefault(),this.focus()},_bardown:function(e){this._allowBarEvent(e)&&(this.debounce("expandKnob",this._expandKnob,60),this._barclick(e))},_knobTransitionEnd:function(e){e.target===this.$.sliderKnob&&this._setTransiting(!1)},_updateMarkers:function(e,t,i,a){a||this._setMarkers([]);var n=Math.round((i-t)/this.step);n>e&&(n=e),(n<0||!isFinite(n))&&(n=0),this._setMarkers(new Array(n))},_mergeClasses:function(e){return Object.keys(e).filter((function(t){return e[t]})).join(" ")},_getClassNames:function(){return this._mergeClasses({disabled:this.disabled,pin:this.pin,snaps:this.snaps,ring:this.immediateValue<=this.min,expand:this.expand,dragging:this.dragging,transiting:this.transiting,editable:this.editable})},_allowBarEvent:function(e){return!this.ignoreBarTouch||e.detail.sourceEvent instanceof MouseEvent},get _isRTL(){return void 0===this.__isRTL&&(this.__isRTL="rtl"===window.getComputedStyle(this).direction),this.__isRTL},_leftKey:function(e){this._isRTL?this._incrementKey(e):this._decrementKey(e)},_rightKey:function(e){this._isRTL?this._decrementKey(e):this._incrementKey(e)},_incrementKey:function(e){this.disabled||("end"===e.detail.key?this.value=this.max:this.increment(),this.fire("change"),e.preventDefault())},_decrementKey:function(e){this.disabled||("home"===e.detail.key?this.value=this.min:this.decrement(),this.fire("change"),e.preventDefault())},_changeValue:function(e){this.value=e.target.value,this.fire("change",{composed:!0})},_inputKeyDown:function(e){e.stopPropagation()},_createRipple:function(){return this._rippleContainer=this.$.sliderKnob,Te._createRipple.call(this)},_focusedChanged:function(e){e&&this.ensureRipple(),this.hasRipple()&&(this._ripple.style.display=e?"":"none",this._ripple.holdDown=e)}});const Fe=customElements.get("paper-slider");let Oe;function He(e){return Array.isArray(e)?e[0]:e}function qe(e){return Array.isArray(e)?e[1]||e[0]:e}customElements.define("ha-slider",class extends Fe{static get template(){if(!Oe){Oe=Fe.template.cloneNode(!0);Oe.content.querySelector("style").appendChild(document.createTextNode('\n          :host([dir="rtl"]) #sliderContainer.pin.expand > .slider-knob > .slider-knob-inner::after {\n            -webkit-transform: scale(1) translate(0, -17px) scaleX(-1) !important;\n            transform: scale(1) translate(0, -17px) scaleX(-1) !important;\n            }\n\n            .pin > .slider-knob > .slider-knob-inner {\n              font-size:  var(--ha-slider-pin-font-size, 15px);\n              line-height: normal;\n              cursor: pointer;\n            }\n\n            .disabled.ring > .slider-knob > .slider-knob-inner {\n              background-color: var(--paper-slider-disabled-knob-color, var(--disabled-text-color));\n              border: 2px solid var(--paper-slider-disabled-knob-color, var(--disabled-text-color));\n            }\n\n            .pin > .slider-knob > .slider-knob-inner::before {\n              top: unset;\n              margin-left: unset;\n\n              bottom: calc(15px + var(--calculated-paper-slider-height)/2);\n              left: 50%;\n              width: 2.6em;\n              height: 2.6em;\n\n              -webkit-transform-origin: left bottom;\n              transform-origin: left bottom;\n              -webkit-transform: rotate(-45deg) scale(0) translate(0);\n              transform: rotate(-45deg) scale(0) translate(0);\n            }\n\n            .pin.expand > .slider-knob > .slider-knob-inner::before {\n              -webkit-transform: rotate(-45deg) scale(1) translate(7px, -7px);\n              transform: rotate(-45deg) scale(1) translate(7px, -7px);\n            }\n\n            .pin > .slider-knob > .slider-knob-inner::after {\n              top: unset;\n              font-size: unset;\n\n              bottom: calc(15px + var(--calculated-paper-slider-height)/2);\n              left: 50%;\n              margin-left: -1.3em;\n              width: 2.6em;\n              height: 2.5em;\n\n              -webkit-transform-origin: center bottom;\n              transform-origin: center bottom;\n              -webkit-transform: scale(0) translate(0);\n              transform: scale(0) translate(0);\n            }\n\n            .pin.expand > .slider-knob > .slider-knob-inner::after {\n              -webkit-transform: scale(1) translate(0, -10px);\n              transform: scale(1) translate(0, -10px);\n            }\n\n            .slider-input {\n              width: 54px;\n            }\n        '))}return Oe}_setImmediateValue(e){super._setImmediateValue(this.step>=1?Math.round(e):Math.round(100*e)/100)}_calcStep(e){if(!this.step)return parseFloat(e);const t=Math.round((e-this.min)/this.step),i=this.step.toString(),a=i.indexOf(".");if(-1!==a){const e=10**(i.length-a-1);return Math.round((t*this.step+this.min)*e)/e}return t*this.step+this.min}}),e([l("ha-form-integer")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[i({attribute:!1})],key:"schema",value:void 0},{kind:"field",decorators:[i({attribute:!1})],key:"data",value:void 0},{kind:"field",decorators:[i()],key:"label",value:void 0},{kind:"field",decorators:[i({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[x("ha-textfield ha-slider")],key:"_input",value:void 0},{kind:"field",key:"_lastValue",value:void 0},{kind:"method",key:"focus",value:function(){this._input&&this._input.focus()}},{kind:"method",key:"render",value:function(){var e;return void 0!==this.schema.valueMin&&void 0!==this.schema.valueMax&&this.schema.valueMax-this.schema.valueMin<256?a`
        <div>
          ${this.label}
          <div class="flex">
            ${this.schema.required?"":a`
                  <ha-checkbox
                    @change=${this._handleCheckboxChange}
                    .checked=${void 0!==this.data}
                    .disabled=${this.disabled}
                  ></ha-checkbox>
                `}
            <ha-slider
              pin
              ignore-bar-touch
              .value=${this._value}
              .min=${this.schema.valueMin}
              .max=${this.schema.valueMax}
              .disabled=${this.disabled||void 0===this.data&&!this.schema.required}
              @change=${this._valueChanged}
            ></ha-slider>
          </div>
        </div>
      `:a`
      <ha-textfield
        type="number"
        inputMode="numeric"
        .label=${this.label}
        .value=${void 0!==this.data?this.data:""}
        .disabled=${this.disabled}
        .required=${this.schema.required}
        .autoValidate=${this.schema.required}
        .suffix=${null===(e=this.schema.description)||void 0===e?void 0:e.suffix}
        .validationMessage=${this.schema.required?"Required":void 0}
        @input=${this._valueChanged}
      ></ha-textfield>
    `}},{kind:"method",key:"updated",value:function(e){e.has("schema")&&this.toggleAttribute("own-margin",!("valueMin"in this.schema&&"valueMax"in this.schema||!this.schema.required))}},{kind:"get",key:"_value",value:function(){var e,t;return void 0!==this.data?this.data:this.schema.required?void 0!==(null===(e=this.schema.description)||void 0===e?void 0:e.suggested_value)&&null!==(null===(t=this.schema.description)||void 0===t?void 0:t.suggested_value)||this.schema.default||this.schema.valueMin||0:this.schema.valueMin||0}},{kind:"method",key:"_handleCheckboxChange",value:function(e){let t;if(e.target.checked)for(const e of[this._lastValue,null===(i=this.schema.description)||void 0===i?void 0:i.suggested_value,this.schema.default,0]){var i;if(void 0!==e){t=e;break}}else this._lastValue=this.data;o(this,"value-changed",{value:t})}},{kind:"method",key:"_valueChanged",value:function(e){const t=e.target,i=t.value;let a;if(""!==i&&(a=parseInt(String(i))),this.data!==a)o(this,"value-changed",{value:a});else{const e=void 0===a?"":String(a);t.value!==e&&(t.value=e)}}},{kind:"get",static:!0,key:"styles",value:function(){return s`
      :host([own-margin]) {
        margin-bottom: 5px;
      }
      .flex {
        display: flex;
      }
      ha-slider {
        flex: 1;
      }
      ha-textfield {
        display: block;
      }
    `}}]}}),t),e([l("ha-formfield")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"method",key:"_labelClick",value:function(){const e=this.input;if(e)switch(e.focus(),e.tagName){case"HA-CHECKBOX":case"HA-RADIO":if(e.disabled)break;e.checked=!e.checked,o(e,"change");break;default:e.click()}}},{kind:"field",static:!0,key:"styles",value:()=>[ae,s`
      :host(:not([alignEnd])) ::slotted(ha-switch) {
        margin-right: 10px;
        margin-inline-end: 10px;
        margin-inline-start: inline;
      }
      .mdc-form-field > label {
        direction: var(--direction);
        margin-inline-start: 0;
        margin-inline-end: auto;
        padding-inline-start: 4px;
        padding-inline-end: 0;
      }
    `]}]}}),ie);e([l("ha-form-multi_select")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[i()],key:"schema",value:void 0},{kind:"field",decorators:[i()],key:"data",value:void 0},{kind:"field",decorators:[i()],key:"label",value:void 0},{kind:"field",decorators:[i({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[M()],key:"_opened",value:()=>!1},{kind:"field",decorators:[x("ha-button-menu")],key:"_input",value:void 0},{kind:"method",key:"focus",value:function(){this._input&&this._input.focus()}},{kind:"method",key:"render",value:function(){const e=Array.isArray(this.schema.options)?this.schema.options:Object.entries(this.schema.options),t=this.data||[];return e.length<6?a`<div>
        ${this.label}${e.map((e=>{const i=He(e);return a`
            <ha-formfield .label=${qe(e)}>
              <ha-checkbox
                .checked=${t.includes(i)}
                .value=${i}
                .disabled=${this.disabled}
                @change=${this._valueChanged}
              ></ha-checkbox>
            </ha-formfield>
          `}))}
      </div> `:a`
      <ha-button-menu
        .disabled=${this.disabled}
        fixed
        corner="BOTTOM_START"
        @opened=${this._handleOpen}
        @closed=${this._handleClose}
        multi
        activatable
      >
        <ha-textfield
          slot="trigger"
          .label=${this.label}
          .value=${t.map((e=>this.schema.options[e]||e)).join(", ")}
          .disabled=${this.disabled}
          tabindex="-1"
        ></ha-textfield>
        <ha-svg-icon
          slot="trigger"
          .path=${this._opened?I:L}
        ></ha-svg-icon>
        ${e.map((e=>{const i=He(e),n=t.includes(i);return a`<ha-check-list-item
            left
            .selected=${n}
            .activated=${n}
            @request-selected=${this._selectedChanged}
            .value=${i}
            .disabled=${this.disabled}
          >
            ${qe(e)}
          </ha-check-list-item>`}))}
      </ha-button-menu>
    `}},{kind:"method",key:"firstUpdated",value:function(){this.updateComplete.then((()=>{var e;const{formElement:t,mdcRoot:i}=(null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("ha-textfield"))||{};t&&(t.style.textOverflow="ellipsis"),i&&(i.style.cursor="pointer")}))}},{kind:"method",key:"updated",value:function(e){e.has("schema")&&this.toggleAttribute("own-margin",Object.keys(this.schema.options).length>=6&&!!this.schema.required)}},{kind:"method",key:"_selectedChanged",value:function(e){e.stopPropagation(),"property"!==e.detail.source&&this._handleValueChanged(e.target.value,e.detail.selected)}},{kind:"method",key:"_valueChanged",value:function(e){const{value:t,checked:i}=e.target;this._handleValueChanged(t,i)}},{kind:"method",key:"_handleValueChanged",value:function(e,t){let i;if(t)if(this.data){if(this.data.includes(e))return;i=[...this.data,e]}else i=[e];else{if(!this.data.includes(e))return;i=this.data.filter((t=>t!==e))}o(this,"value-changed",{value:i})}},{kind:"method",key:"_handleOpen",value:function(e){e.stopPropagation(),this._opened=!0,this.toggleAttribute("opened",!0)}},{kind:"method",key:"_handleClose",value:function(e){e.stopPropagation(),this._opened=!1,this.toggleAttribute("opened",!1)}},{kind:"get",static:!0,key:"styles",value:function(){return s`
      :host([own-margin]) {
        margin-bottom: 5px;
      }
      ha-button-menu {
        display: block;
        cursor: pointer;
      }
      ha-formfield {
        display: block;
        padding-right: 16px;
        padding-inline-end: 16px;
        padding-inline-start: initial;
        direction: var(--direction);
      }
      ha-textfield {
        display: block;
        pointer-events: none;
      }
      ha-svg-icon {
        color: var(--input-dropdown-icon-color);
        position: absolute;
        right: 1em;
        top: 1em;
        cursor: pointer;
        inset-inline-end: 1em;
        inset-inline-start: initial;
        direction: var(--direction);
      }
      :host([opened]) ha-svg-icon {
        color: var(--primary-color);
      }
      :host([opened]) ha-button-menu {
        --mdc-text-field-idle-line-color: var(--input-hover-line-color);
        --mdc-text-field-label-ink-color: var(--primary-color);
      }
    `}}]}}),t),e([l("ha-input-helper-text")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"method",key:"render",value:function(){return a`<slot></slot>`}},{kind:"field",static:!0,key:"styles",value:()=>s`
    :host {
      display: block;
      color: var(--mdc-text-field-label-ink-color, rgba(0, 0, 0, 0.6));
      font-size: 0.75rem;
      padding-left: 16px;
      padding-right: 16px;
    }
  `}]}}),t),e([l("ha-base-time-input")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[i()],key:"label",value:void 0},{kind:"field",decorators:[i()],key:"helper",value:void 0},{kind:"field",decorators:[i({type:Boolean})],key:"autoValidate",value:()=>!1},{kind:"field",decorators:[i({type:Boolean})],key:"required",value:()=>!1},{kind:"field",decorators:[i({type:Number})],key:"format",value:()=>12},{kind:"field",decorators:[i({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[i({type:Number})],key:"days",value:()=>0},{kind:"field",decorators:[i({type:Number})],key:"hours",value:()=>0},{kind:"field",decorators:[i({type:Number})],key:"minutes",value:()=>0},{kind:"field",decorators:[i({type:Number})],key:"seconds",value:()=>0},{kind:"field",decorators:[i({type:Number})],key:"milliseconds",value:()=>0},{kind:"field",decorators:[i()],key:"dayLabel",value:()=>""},{kind:"field",decorators:[i()],key:"hourLabel",value:()=>""},{kind:"field",decorators:[i()],key:"minLabel",value:()=>""},{kind:"field",decorators:[i()],key:"secLabel",value:()=>""},{kind:"field",decorators:[i()],key:"millisecLabel",value:()=>""},{kind:"field",decorators:[i({type:Boolean})],key:"enableSecond",value:()=>!1},{kind:"field",decorators:[i({type:Boolean})],key:"enableMillisecond",value:()=>!1},{kind:"field",decorators:[i({type:Boolean})],key:"enableDay",value:()=>!1},{kind:"field",decorators:[i({type:Boolean})],key:"noHoursLimit",value:()=>!1},{kind:"field",decorators:[i()],key:"amPm",value:()=>"AM"},{kind:"method",key:"render",value:function(){return a`
      ${this.label?a`<label>${this.label}${this.required?" *":""}</label>`:""}
      <div class="time-input-wrap">
        ${this.enableDay?a`
              <ha-textfield
                id="day"
                type="number"
                inputmode="numeric"
                .value=${this.days.toFixed()}
                .label=${this.dayLabel}
                name="days"
                @change=${this._valueChanged}
                @focusin=${this._onFocus}
                no-spinner
                .required=${this.required}
                .autoValidate=${this.autoValidate}
                min="0"
                .disabled=${this.disabled}
                suffix=":"
                class="hasSuffix"
              >
              </ha-textfield>
            `:""}

        <ha-textfield
          id="hour"
          type="number"
          inputmode="numeric"
          .value=${this.hours.toFixed()}
          .label=${this.hourLabel}
          name="hours"
          @change=${this._valueChanged}
          @focusin=${this._onFocus}
          no-spinner
          .required=${this.required}
          .autoValidate=${this.autoValidate}
          maxlength="2"
          max=${P(this._hourMax)}
          min="0"
          .disabled=${this.disabled}
          suffix=":"
          class="hasSuffix"
        >
        </ha-textfield>
        <ha-textfield
          id="min"
          type="number"
          inputmode="numeric"
          .value=${this._formatValue(this.minutes)}
          .label=${this.minLabel}
          @change=${this._valueChanged}
          @focusin=${this._onFocus}
          name="minutes"
          no-spinner
          .required=${this.required}
          .autoValidate=${this.autoValidate}
          maxlength="2"
          max="59"
          min="0"
          .disabled=${this.disabled}
          .suffix=${this.enableSecond?":":""}
          class=${this.enableSecond?"has-suffix":""}
        >
        </ha-textfield>
        ${this.enableSecond?a`<ha-textfield
              id="sec"
              type="number"
              inputmode="numeric"
              .value=${this._formatValue(this.seconds)}
              .label=${this.secLabel}
              @change=${this._valueChanged}
              @focusin=${this._onFocus}
              name="seconds"
              no-spinner
              .required=${this.required}
              .autoValidate=${this.autoValidate}
              maxlength="2"
              max="59"
              min="0"
              .disabled=${this.disabled}
              .suffix=${this.enableMillisecond?":":""}
              class=${this.enableMillisecond?"has-suffix":""}
            >
            </ha-textfield>`:""}
        ${this.enableMillisecond?a`<ha-textfield
              id="millisec"
              type="number"
              .value=${this._formatValue(this.milliseconds,3)}
              .label=${this.millisecLabel}
              @change=${this._valueChanged}
              @focusin=${this._onFocus}
              name="milliseconds"
              no-spinner
              .required=${this.required}
              .autoValidate=${this.autoValidate}
              maxlength="3"
              max="999"
              min="0"
              .disabled=${this.disabled}
            >
            </ha-textfield>`:""}
        ${24===this.format?"":a`<ha-select
              .required=${this.required}
              .value=${this.amPm}
              .disabled=${this.disabled}
              name="amPm"
              naturalMenuWidth
              fixedMenuPosition
              @selected=${this._valueChanged}
              @closed=${U}
            >
              <mwc-list-item value="AM">AM</mwc-list-item>
              <mwc-list-item value="PM">PM</mwc-list-item>
            </ha-select>`}
      </div>
      ${this.helper?a`<ha-input-helper-text>${this.helper}</ha-input-helper-text>`:""}
    `}},{kind:"method",key:"_valueChanged",value:function(e){const t=e.currentTarget;this[t.name]="amPm"===t.name?t.value:Number(t.value);const i={hours:this.hours,minutes:this.minutes,seconds:this.seconds,milliseconds:this.milliseconds};12===this.format&&(i.amPm=this.amPm),o(this,"value-changed",{value:i})}},{kind:"method",key:"_onFocus",value:function(e){e.currentTarget.select()}},{kind:"method",key:"_formatValue",value:function(e,t=2){return e.toString().padStart(t,"0")}},{kind:"get",key:"_hourMax",value:function(){if(!this.noHoursLimit)return 12===this.format?12:23}},{kind:"field",static:!0,key:"styles",value:()=>s`
    :host {
      display: block;
    }
    .time-input-wrap {
      display: flex;
      border-radius: var(--mdc-shape-small, 4px) var(--mdc-shape-small, 4px) 0 0;
      overflow: hidden;
      position: relative;
      direction: ltr;
    }
    ha-textfield {
      width: 40px;
      text-align: center;
      --mdc-shape-small: 0;
      --text-field-appearance: none;
      --text-field-padding: 0 4px;
      --text-field-suffix-padding-left: 2px;
      --text-field-suffix-padding-right: 0;
      --text-field-text-align: center;
    }
    ha-textfield.hasSuffix {
      --text-field-padding: 0 0 0 4px;
    }
    ha-textfield:first-child {
      --text-field-border-top-left-radius: var(--mdc-shape-medium);
    }
    ha-textfield:last-child {
      --text-field-border-top-right-radius: var(--mdc-shape-medium);
    }
    ha-select {
      --mdc-shape-small: 0;
      width: 85px;
    }
    label {
      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;
      font-family: var(
        --mdc-typography-body2-font-family,
        var(--mdc-typography-font-family, Roboto, sans-serif)
      );
      font-size: var(--mdc-typography-body2-font-size, 0.875rem);
      line-height: var(--mdc-typography-body2-line-height, 1.25rem);
      font-weight: var(--mdc-typography-body2-font-weight, 400);
      letter-spacing: var(
        --mdc-typography-body2-letter-spacing,
        0.0178571429em
      );
      text-decoration: var(--mdc-typography-body2-text-decoration, inherit);
      text-transform: var(--mdc-typography-body2-text-transform, inherit);
      color: var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));
      padding-left: 4px;
    }
  `}]}}),t),e([l("ha-duration-input")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[i({attribute:!1})],key:"data",value:void 0},{kind:"field",decorators:[i()],key:"label",value:void 0},{kind:"field",decorators:[i()],key:"helper",value:void 0},{kind:"field",decorators:[i({type:Boolean})],key:"required",value:()=>!1},{kind:"field",decorators:[i({type:Boolean})],key:"enableMillisecond",value:()=>!1},{kind:"field",decorators:[i({type:Boolean})],key:"enableDay",value:()=>!1},{kind:"field",decorators:[i({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[x("paper-time-input",!0)],key:"_input",value:void 0},{kind:"method",key:"focus",value:function(){this._input&&this._input.focus()}},{kind:"method",key:"render",value:function(){return a`
      <ha-base-time-input
        .label=${this.label}
        .helper=${this.helper}
        .required=${this.required}
        .autoValidate=${this.required}
        .disabled=${this.disabled}
        errorMessage="Required"
        enableSecond
        .enableMillisecond=${this.enableMillisecond}
        .enableDay=${this.enableDay}
        format="24"
        .days=${this._days}
        .hours=${this._hours}
        .minutes=${this._minutes}
        .seconds=${this._seconds}
        .milliseconds=${this._milliseconds}
        @value-changed=${this._durationChanged}
        noHoursLimit
        dayLabel="dd"
        hourLabel="hh"
        minLabel="mm"
        secLabel="ss"
        millisecLabel="ms"
      ></ha-base-time-input>
    `}},{kind:"get",key:"_days",value:function(){var e;return null!==(e=this.data)&&void 0!==e&&e.days?Number(this.data.days):0}},{kind:"get",key:"_hours",value:function(){var e;return null!==(e=this.data)&&void 0!==e&&e.hours?Number(this.data.hours):0}},{kind:"get",key:"_minutes",value:function(){var e;return null!==(e=this.data)&&void 0!==e&&e.minutes?Number(this.data.minutes):0}},{kind:"get",key:"_seconds",value:function(){var e;return null!==(e=this.data)&&void 0!==e&&e.seconds?Number(this.data.seconds):0}},{kind:"get",key:"_milliseconds",value:function(){var e;return null!==(e=this.data)&&void 0!==e&&e.milliseconds?Number(this.data.milliseconds):0}},{kind:"method",key:"_durationChanged",value:function(e){e.stopPropagation();const t={...e.detail.value};var i;(this.enableMillisecond||t.milliseconds?t.milliseconds>999&&(t.seconds+=Math.floor(t.milliseconds/1e3),t.milliseconds%=1e3):delete t.milliseconds,t.seconds>59&&(t.minutes+=Math.floor(t.seconds/60),t.seconds%=60),t.minutes>59&&(t.hours+=Math.floor(t.minutes/60),t.minutes%=60),this.enableDay&&t.hours>24)&&(t.days=(null!==(i=t.days)&&void 0!==i?i:0)+Math.floor(t.hours/24),t.hours%=24);o(this,"value-changed",{value:t})}}]}}),t),e([l("ha-form-positive_time_period_dict")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[i({attribute:!1})],key:"schema",value:void 0},{kind:"field",decorators:[i({attribute:!1})],key:"data",value:void 0},{kind:"field",decorators:[i()],key:"label",value:void 0},{kind:"field",decorators:[i({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[x("ha-time-input",!0)],key:"_input",value:void 0},{kind:"method",key:"focus",value:function(){this._input&&this._input.focus()}},{kind:"method",key:"render",value:function(){return a`
      <ha-duration-input
        .label=${this.label}
        ?required=${this.schema.required}
        .data=${this.data}
        .disabled=${this.disabled}
      ></ha-duration-input>
    `}}]}}),t),e([l("ha-chip-set")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"method",key:"render",value:function(){return a`
      <div class="mdc-chip-set">
        <slot></slot>
      </div>
    `}},{kind:"get",static:!0,key:"styles",value:function(){return s`
      ${T(G)}

      slot::slotted(ha-chip) {
        margin: 4px 4px 4px 0;
      }
    `}}]}}),t);const Ne=Symbol("selection controller");class ze{constructor(){this.selected=null,this.ordered=null,this.set=new Set}}class je{constructor(e){this.sets={},this.focusedSet=null,this.mouseIsDown=!1,this.updating=!1,e.addEventListener("keydown",(e=>{this.keyDownHandler(e)})),e.addEventListener("mousedown",(()=>{this.mousedownHandler()})),e.addEventListener("mouseup",(()=>{this.mouseupHandler()}))}static getController(e){const t=!("global"in e)||"global"in e&&e.global?document:e.getRootNode();let i=t[Ne];return void 0===i&&(i=new je(t),t[Ne]=i),i}keyDownHandler(e){const t=e.target;"checked"in t&&this.has(t)&&("ArrowRight"==e.key||"ArrowDown"==e.key?this.selectNext(t):"ArrowLeft"!=e.key&&"ArrowUp"!=e.key||this.selectPrevious(t))}mousedownHandler(){this.mouseIsDown=!0}mouseupHandler(){this.mouseIsDown=!1}has(e){return this.getSet(e.name).set.has(e)}selectPrevious(e){const t=this.getOrdered(e),i=t.indexOf(e),a=t[i-1]||t[t.length-1];return this.select(a),a}selectNext(e){const t=this.getOrdered(e),i=t.indexOf(e),a=t[i+1]||t[0];return this.select(a),a}select(e){e.click()}focus(e){if(this.mouseIsDown)return;const t=this.getSet(e.name),i=this.focusedSet;this.focusedSet=t,i!=t&&t.selected&&t.selected!=e&&t.selected.focus()}isAnySelected(e){const t=this.getSet(e.name);for(const e of t.set)if(e.checked)return!0;return!1}getOrdered(e){const t=this.getSet(e.name);return t.ordered||(t.ordered=Array.from(t.set),t.ordered.sort(((e,t)=>e.compareDocumentPosition(t)==Node.DOCUMENT_POSITION_PRECEDING?1:0))),t.ordered}getSet(e){return this.sets[e]||(this.sets[e]=new ze),this.sets[e]}register(e){const t=e.name||e.getAttribute("name")||"",i=this.getSet(t);i.set.add(e),i.ordered=null}unregister(e){const t=this.getSet(e.name);t.set.delete(e),t.ordered=null,t.selected==e&&(t.selected=null)}update(e){if(this.updating)return;this.updating=!0;const t=this.getSet(e.name);if(e.checked){for(const i of t.set)i!=e&&(i.checked=!1);t.selected=e}if(this.isAnySelected(e))for(const e of t.set){if(void 0===e.formElementTabIndex)break;e.formElementTabIndex=e.checked?0:-1}this.updating=!1}}var Ue={NATIVE_CONTROL_SELECTOR:".mdc-radio__native-control"},Xe={DISABLED:"mdc-radio--disabled",ROOT:"mdc-radio"},We=function(e){function t(i){return e.call(this,g(g({},t.defaultAdapter),i))||this}return y(t,e),Object.defineProperty(t,"cssClasses",{get:function(){return Xe},enumerable:!1,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return Ue},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},setNativeControlDisabled:function(){}}},enumerable:!1,configurable:!0}),t.prototype.setDisabled=function(e){var i=t.cssClasses.DISABLED;this.adapter.setNativeControlDisabled(e),e?this.adapter.addClass(i):this.adapter.removeClass(i)},t}(_);class Ge extends j{constructor(){super(...arguments),this._checked=!1,this.useStateLayerCustomProperties=!1,this.global=!1,this.disabled=!1,this.value="on",this.name="",this.reducedTouchTarget=!1,this.mdcFoundationClass=We,this.formElementTabIndex=0,this.focused=!1,this.shouldRenderRipple=!1,this.rippleElement=null,this.rippleHandlers=new O((()=>(this.shouldRenderRipple=!0,this.ripple.then((e=>{this.rippleElement=e})),this.ripple)))}get checked(){return this._checked}set checked(e){var t,i;const a=this._checked;e!==a&&(this._checked=e,this.formElement&&(this.formElement.checked=e),null===(t=this._selectionController)||void 0===t||t.update(this),!1===e&&(null===(i=this.formElement)||void 0===i||i.blur()),this.requestUpdate("checked",a),this.dispatchEvent(new Event("checked",{bubbles:!0,composed:!0})))}_handleUpdatedValue(e){this.formElement.value=e}renderRipple(){return this.shouldRenderRipple?a`<mwc-ripple unbounded accent
        .internalUseStateLayerCustomProperties="${this.useStateLayerCustomProperties}"
        .disabled="${this.disabled}"></mwc-ripple>`:""}get isRippleActive(){var e;return(null===(e=this.rippleElement)||void 0===e?void 0:e.isActive)||!1}connectedCallback(){super.connectedCallback(),this._selectionController=je.getController(this),this._selectionController.register(this),this._selectionController.update(this)}disconnectedCallback(){this._selectionController.unregister(this),this._selectionController=void 0}focus(){this.formElement.focus()}createAdapter(){return Object.assign(Object.assign({},H(this.mdcRoot)),{setNativeControlDisabled:e=>{this.formElement.disabled=e}})}handleFocus(){this.focused=!0,this.handleRippleFocus()}handleClick(){this.formElement.focus()}handleBlur(){this.focused=!1,this.formElement.blur(),this.rippleHandlers.endFocus()}setFormData(e){this.name&&this.checked&&e.append(this.name,this.value)}render(){const e={"mdc-radio--touch":!this.reducedTouchTarget,"mdc-ripple-upgraded--background-focused":this.focused,"mdc-radio--disabled":this.disabled};return a`
      <div class="mdc-radio ${n(e)}">
        <input
          tabindex="${this.formElementTabIndex}"
          class="mdc-radio__native-control"
          type="radio"
          name="${this.name}"
          aria-label="${P(this.ariaLabel)}"
          aria-labelledby="${P(this.ariaLabelledBy)}"
          .checked="${this.checked}"
          .value="${this.value}"
          ?disabled="${this.disabled}"
          @change="${this.changeHandler}"
          @focus="${this.handleFocus}"
          @click="${this.handleClick}"
          @blur="${this.handleBlur}"
          @mousedown="${this.handleRippleMouseDown}"
          @mouseenter="${this.handleRippleMouseEnter}"
          @mouseleave="${this.handleRippleMouseLeave}"
          @touchstart="${this.handleRippleTouchStart}"
          @touchend="${this.handleRippleDeactivate}"
          @touchcancel="${this.handleRippleDeactivate}">
        <div class="mdc-radio__background">
          <div class="mdc-radio__outer-circle"></div>
          <div class="mdc-radio__inner-circle"></div>
        </div>
        ${this.renderRipple()}
      </div>`}handleRippleMouseDown(e){const t=()=>{window.removeEventListener("mouseup",t),this.handleRippleDeactivate()};window.addEventListener("mouseup",t),this.rippleHandlers.startPress(e)}handleRippleTouchStart(e){this.rippleHandlers.startPress(e)}handleRippleDeactivate(){this.rippleHandlers.endPress()}handleRippleMouseEnter(){this.rippleHandlers.startHover()}handleRippleMouseLeave(){this.rippleHandlers.endHover()}handleRippleFocus(){this.rippleHandlers.startFocus()}changeHandler(){this.checked=this.formElement.checked}}k([x(".mdc-radio")],Ge.prototype,"mdcRoot",void 0),k([x("input")],Ge.prototype,"formElement",void 0),k([M()],Ge.prototype,"useStateLayerCustomProperties",void 0),k([i({type:Boolean})],Ge.prototype,"global",void 0),k([i({type:Boolean,reflect:!0})],Ge.prototype,"checked",null),k([i({type:Boolean}),X((function(e){this.mdcFoundation.setDisabled(e)}))],Ge.prototype,"disabled",void 0),k([i({type:String}),X((function(e){this._handleUpdatedValue(e)}))],Ge.prototype,"value",void 0),k([i({type:String})],Ge.prototype,"name",void 0),k([i({type:Boolean})],Ge.prototype,"reducedTouchTarget",void 0),k([i({type:Number})],Ge.prototype,"formElementTabIndex",void 0),k([M()],Ge.prototype,"focused",void 0),k([M()],Ge.prototype,"shouldRenderRipple",void 0),k([K("mwc-ripple")],Ge.prototype,"ripple",void 0),k([D,i({attribute:"aria-label"})],Ge.prototype,"ariaLabel",void 0),k([D,i({attribute:"aria-labelledby"})],Ge.prototype,"ariaLabelledBy",void 0),k([F({passive:!0})],Ge.prototype,"handleRippleTouchStart",null);const Ye=s`.mdc-touch-target-wrapper{display:inline}.mdc-radio{padding:calc((40px - 20px) / 2)}.mdc-radio .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:rgba(0, 0, 0, 0.54)}.mdc-radio .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:#018786;border-color:var(--mdc-theme-secondary, #018786)}.mdc-radio .mdc-radio__native-control:enabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:#018786;border-color:var(--mdc-theme-secondary, #018786)}.mdc-radio [aria-disabled=true] .mdc-radio__native-control:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:rgba(0, 0, 0, 0.38)}.mdc-radio [aria-disabled=true] .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:rgba(0, 0, 0, 0.38)}.mdc-radio [aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:rgba(0, 0, 0, 0.38)}.mdc-radio .mdc-radio__background::before{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-radio .mdc-radio__background::before{top:calc(-1 * (40px - 20px) / 2);left:calc(-1 * (40px - 20px) / 2);width:40px;height:40px}.mdc-radio .mdc-radio__native-control{top:calc((40px - 40px) / 2);right:calc((40px - 40px) / 2);left:calc((40px - 40px) / 2);width:40px;height:40px}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-radio [aria-disabled=true] .mdc-radio__native-control:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:GrayText}.mdc-radio [aria-disabled=true] .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:GrayText}.mdc-radio [aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:GrayText}}.mdc-radio{display:inline-block;position:relative;flex:0 0 auto;box-sizing:content-box;width:20px;height:20px;cursor:pointer;will-change:opacity,transform,border-color,color}.mdc-radio__background{display:inline-block;position:relative;box-sizing:border-box;width:20px;height:20px}.mdc-radio__background::before{position:absolute;transform:scale(0, 0);border-radius:50%;opacity:0;pointer-events:none;content:"";transition:opacity 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-radio__outer-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;border-width:2px;border-style:solid;border-radius:50%;transition:border-color 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-radio__inner-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;transform:scale(0, 0);border-width:10px;border-style:solid;border-radius:50%;transition:transform 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1),border-color 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-radio__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit;z-index:1}.mdc-radio--touch{margin-top:4px;margin-bottom:4px;margin-right:4px;margin-left:4px}.mdc-radio--touch .mdc-radio__native-control{top:calc((40px - 48px) / 2);right:calc((40px - 48px) / 2);left:calc((40px - 48px) / 2);width:48px;height:48px}.mdc-radio__native-control:checked+.mdc-radio__background,.mdc-radio__native-control:disabled+.mdc-radio__background{transition:opacity 120ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__outer-circle{transition:border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{transition:transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1),border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio--disabled{cursor:default;pointer-events:none}.mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle{transform:scale(0.5);transition:transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1),border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio__native-control:disabled+.mdc-radio__background,[aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background{cursor:default}.mdc-radio__native-control:focus+.mdc-radio__background::before{transform:scale(1);opacity:.12;transition:opacity 120ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}:host{display:inline-block;outline:none}.mdc-radio{vertical-align:bottom}.mdc-radio .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-unchecked-color, rgba(0, 0, 0, 0.54))}.mdc-radio [aria-disabled=true] .mdc-radio__native-control:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-color, rgba(0, 0, 0, 0.38))}.mdc-radio [aria-disabled=true] .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-color, rgba(0, 0, 0, 0.38))}.mdc-radio [aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:var(--mdc-radio-disabled-color, rgba(0, 0, 0, 0.38))}`;e([l("ha-radio")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",static:!0,key:"styles",value:()=>[Ye,s`
      :host {
        --mdc-theme-secondary: var(--primary-color);
      }
    `]}]}}),Ge);let Je=e([l("ha-selector-select")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[i({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[i({attribute:!1})],key:"selector",value:void 0},{kind:"field",decorators:[i()],key:"value",value:void 0},{kind:"field",decorators:[i()],key:"label",value:void 0},{kind:"field",decorators:[i()],key:"helper",value:void 0},{kind:"field",decorators:[i({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[i({type:Boolean})],key:"required",value:()=>!0},{kind:"field",decorators:[x("ha-combo-box",!0)],key:"comboBox",value:void 0},{kind:"field",key:"_filter",value:()=>""},{kind:"method",key:"render",value:function(){const e=this.selector.select.options.map((e=>"object"==typeof e?e:{value:e,label:e}));if(!this.selector.select.custom_value&&"list"===this._mode)return this.selector.select.multiple?a`
        <div>
          ${this.label}
          ${e.map((e=>{var t;return a`
              <ha-formfield .label=${e.label}>
                <ha-checkbox
                  .checked=${null===(t=this.value)||void 0===t?void 0:t.includes(e.value)}
                  .value=${e.value}
                  .disabled=${e.disabled||this.disabled}
                  @change=${this._checkboxChanged}
                ></ha-checkbox>
              </ha-formfield>
            `}))}
        </div>
        ${this._renderHelper()}
      `:a`
          <div>
            ${this.label}
            ${e.map((e=>a`
                <ha-formfield .label=${e.label}>
                  <ha-radio
                    .checked=${e.value===this.value}
                    .value=${e.value}
                    .disabled=${e.disabled||this.disabled}
                    @change=${this._valueChanged}
                  ></ha-radio>
                </ha-formfield>
              `))}
          </div>
          ${this._renderHelper()}
        `;if(this.selector.select.multiple){const t=this.value&&""!==this.value?this.value:[];return a`
        <ha-chip-set>
          ${null==t?void 0:t.map(((t,i)=>{var n;return a`
                <ha-chip hasTrailingIcon>
                  ${(null===(n=e.find((e=>e.value===t)))||void 0===n?void 0:n.label)||t}
                  <ha-svg-icon
                    slot="trailing-icon"
                    .path=${r}
                    .idx=${i}
                    @click=${this._removeItem}
                  ></ha-svg-icon>
                </ha-chip>
              `}))}
        </ha-chip-set>

        <ha-combo-box
          item-value-path="value"
          item-label-path="label"
          .hass=${this.hass}
          .label=${this.label}
          .helper=${this.helper}
          .disabled=${this.disabled}
          .required=${this.required&&!t.length}
          .value=${this._filter}
          .items=${e.filter((e=>!(e.disabled||null!=t&&t.includes(e.value))))}
          @filter-changed=${this._filterChanged}
          @value-changed=${this._comboBoxValueChanged}
        ></ha-combo-box>
      `}return this.selector.select.custom_value?(void 0===this.value||e.find((e=>e.value===this.value))||e.unshift({value:this.value,label:this.value}),a`
        <ha-combo-box
          item-value-path="value"
          item-label-path="label"
          .hass=${this.hass}
          .label=${this.label}
          .helper=${this.helper}
          .disabled=${this.disabled}
          .required=${this.required}
          .items=${e.filter((e=>!e.disabled))}
          .value=${this.value}
          @filter-changed=${this._filterChanged}
          @value-changed=${this._comboBoxValueChanged}
        ></ha-combo-box>
      `):a`
      <ha-select
        fixedMenuPosition
        naturalMenuWidth
        .label=${this.label}
        .value=${this.value}
        .helper=${this.helper}
        .disabled=${this.disabled}
        @closed=${U}
        @selected=${this._valueChanged}
      >
        ${e.map((e=>a`
            <mwc-list-item .value=${e.value} .disabled=${e.disabled}
              >${e.label}</mwc-list-item
            >
          `))}
      </ha-select>
    `}},{kind:"method",key:"_renderHelper",value:function(){return this.helper?a`<ha-input-helper-text>${this.helper}</ha-input-helper-text>`:""}},{kind:"get",key:"_mode",value:function(){return this.selector.select.mode||(this.selector.select.options.length<6?"list":"dropdown")}},{kind:"method",key:"_valueChanged",value:function(e){var t;e.stopPropagation();const i=(null===(t=e.detail)||void 0===t?void 0:t.value)||e.target.value;!this.disabled&&i&&o(this,"value-changed",{value:i})}},{kind:"method",key:"_checkboxChanged",value:function(e){if(e.stopPropagation(),this.disabled)return;let t;const i=e.target.value;if(e.target.checked)if(this.value){if(this.value.includes(i))return;t=[...this.value,i]}else t=[i];else{var a;if(null===(a=this.value)||void 0===a||!a.includes(i))return;t=this.value.filter((e=>e!==i))}o(this,"value-changed",{value:t})}},{kind:"method",key:"_removeItem",value:async function(e){const t=[...this.value];t.splice(e.target.idx,1),o(this,"value-changed",{value:t}),await this.updateComplete,this._filterChanged()}},{kind:"method",key:"_comboBoxValueChanged",value:function(e){var t;e.stopPropagation();const i=e.detail.value;if(this.disabled||""===i)return;if(!this.selector.select.multiple)return void o(this,"value-changed",{value:i});if(void 0!==i&&null!==(t=this.value)&&void 0!==t&&t.includes(i))return;setTimeout((()=>{this._filterChanged(),this.comboBox.setInputValue("")}),0);const a=this.value&&""!==this.value?this.value:[];o(this,"value-changed",{value:[...a,i]})}},{kind:"method",key:"_filterChanged",value:function(e){var t;this._filter=(null==e?void 0:e.detail.value)||"";const i=null===(t=this.comboBox.items)||void 0===t?void 0:t.filter((e=>{var t,i;if(this.selector.select.multiple&&null!==(t=this.value)&&void 0!==t&&t.includes(e.value))return!1;return(e.label||e.value).toLowerCase().includes(null===(i=this._filter)||void 0===i?void 0:i.toLowerCase())}));this._filter&&this.selector.select.custom_value&&(null==i||i.unshift({label:this._filter,value:this._filter})),this.comboBox.filteredItems=i}},{kind:"field",static:!0,key:"styles",value:()=>s`
    ha-select,
    mwc-formfield,
    ha-formfield {
      display: block;
    }
    mwc-list-item[disabled] {
      --mdc-theme-text-primary-on-background: var(--disabled-text-color);
    }
  `}]}}),t);var Qe=Object.freeze({__proto__:null,HaSelectSelector:Je});e([l("ha-form-select")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[i({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[i({attribute:!1})],key:"schema",value:void 0},{kind:"field",decorators:[i()],key:"data",value:void 0},{kind:"field",decorators:[i()],key:"label",value:void 0},{kind:"field",decorators:[i({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",key:"_selectSchema",value:()=>q((e=>({select:{options:e.map((e=>({value:e[0],label:e[1]})))}})))},{kind:"method",key:"render",value:function(){return a`
      <ha-selector-select
        .hass=${this.hass}
        .schema=${this.schema}
        .value=${this.data}
        .label=${this.label}
        .disabled=${this.disabled}
        .required=${this.schema.required}
        .selector=${this._selectSchema(this.schema.options)}
        @value-changed=${this._valueChanged}
      ></ha-selector-select>
    `}},{kind:"method",key:"_valueChanged",value:function(e){e.stopPropagation();let t=e.detail.value;t!==this.data&&(""===t&&(t=void 0),o(this,"value-changed",{value:t}))}}]}}),t);const Ze=["password","secret","token"];e([l("ha-form-string")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[i()],key:"schema",value:void 0},{kind:"field",decorators:[i()],key:"data",value:void 0},{kind:"field",decorators:[i()],key:"label",value:void 0},{kind:"field",decorators:[i()],key:"helper",value:void 0},{kind:"field",decorators:[i({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[M()],key:"_unmaskedPassword",value:()=>!1},{kind:"field",decorators:[x("ha-textfield")],key:"_input",value:void 0},{kind:"method",key:"focus",value:function(){this._input&&this._input.focus()}},{kind:"method",key:"render",value:function(){var e;const t=Ze.some((e=>this.schema.name.includes(e)));return a`
      <ha-textfield
        .type=${t?this._unmaskedPassword?"text":"password":this._stringType}
        .label=${this.label}
        .value=${this.data||""}
        .helper=${this.helper}
        helperPersistent
        .disabled=${this.disabled}
        .required=${this.schema.required}
        .autoValidate=${this.schema.required}
        .suffix=${t?a`<div style="width: 24px"></div>`:null===(e=this.schema.description)||void 0===e?void 0:e.suffix}
        .validationMessage=${this.schema.required?"Required":void 0}
        @input=${this._valueChanged}
      ></ha-textfield>
      ${t?a`<ha-icon-button
            toggles
            .label=${(this._unmaskedPassword?"Hide":"Show")+" password"}
            @click=${this._toggleUnmaskedPassword}
            .path=${this._unmaskedPassword?N:z}
          ></ha-icon-button>`:""}
    `}},{kind:"method",key:"updated",value:function(e){e.has("schema")&&this.toggleAttribute("own-margin",!!this.schema.required)}},{kind:"method",key:"_toggleUnmaskedPassword",value:function(){this._unmaskedPassword=!this._unmaskedPassword}},{kind:"method",key:"_valueChanged",value:function(e){let t=e.target.value;this.data!==t&&(""!==t||this.schema.required||(t=void 0),o(this,"value-changed",{value:t}))}},{kind:"get",key:"_stringType",value:function(){if(this.schema.format){if(["email","url"].includes(this.schema.format))return this.schema.format;if("fqdnurl"===this.schema.format)return"url"}return"text"}},{kind:"get",static:!0,key:"styles",value:function(){return s`
      :host {
        display: block;
        position: relative;
      }
      :host([own-margin]) {
        margin-bottom: 5px;
      }
      ha-textfield {
        display: block;
      }
      ha-icon-button {
        position: absolute;
        top: 1em;
        right: 12px;
        --mdc-icon-button-size: 24px;
        color: var(--secondary-text-color);
      }

      ha-icon-button {
        inset-inline-start: initial;
        inset-inline-end: 12px;
        direction: var(--direction);
      }
    `}}]}}),t);const et=(e,t)=>e?t.name?e[t.name]:e:null;e([l("ha-form")],(function(e,t){class n extends t{constructor(...t){super(...t),e(this)}}return{F:n,d:[{kind:"field",decorators:[i({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[i({attribute:!1})],key:"data",value:void 0},{kind:"field",decorators:[i({attribute:!1})],key:"schema",value:void 0},{kind:"field",decorators:[i()],key:"error",value:void 0},{kind:"field",decorators:[i({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[i()],key:"computeError",value:void 0},{kind:"field",decorators:[i()],key:"computeLabel",value:void 0},{kind:"field",decorators:[i()],key:"computeHelper",value:void 0},{kind:"method",key:"focus",value:function(){var e;const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector(".root");if(t)for(const e of t.children)if("HA-ALERT"!==e.tagName){e.focus();break}}},{kind:"method",key:"render",value:function(){return a`
      <div class="root" part="root">
        ${this.error&&this.error.base?a`
              <ha-alert alert-type="error">
                ${this._computeError(this.error.base,this.schema)}
              </ha-alert>
            `:""}
        ${this.schema.map((e=>{const t=((e,t)=>e&&t.name?e[t.name]:null)(this.error,e);return a`
            ${t?a`
                  <ha-alert own-margin alert-type="error">
                    ${this._computeError(t,e)}
                  </ha-alert>
                `:""}
            ${"selector"in e?a`<ha-selector
                  .schema=${e}
                  .hass=${this.hass}
                  .selector=${e.selector}
                  .value=${et(this.data,e)}
                  .label=${this._computeLabel(e,this.data)}
                  .disabled=${this.disabled}
                  .helper=${this._computeHelper(e)}
                  .required=${e.required||!1}
                  .context=${this._generateContext(e)}
                ></ha-selector>`:J(`ha-form-${e.type}`,{schema:e,data:et(this.data,e),label:this._computeLabel(e,this.data),disabled:this.disabled,hass:this.hass,computeLabel:this.computeLabel,computeHelper:this.computeHelper,context:this._generateContext(e)})}
          `}))}
      </div>
    `}},{kind:"method",key:"_generateContext",value:function(e){if(!e.context)return;const t={};for(const[i,a]of Object.entries(e.context))t[i]=this.data[a];return t}},{kind:"method",key:"createRenderRoot",value:function(){const e=$(C(n.prototype),"createRenderRoot",this).call(this);return e.addEventListener("value-changed",(e=>{e.stopPropagation();const t=e.target.schema,i=t.name?{[t.name]:e.detail.value}:e.detail.value;o(this,"value-changed",{value:{...this.data,...i}})})),e}},{kind:"method",key:"_computeLabel",value:function(e,t){return this.computeLabel?this.computeLabel(e,t):e?e.name:""}},{kind:"method",key:"_computeHelper",value:function(e){return this.computeHelper?this.computeHelper(e):""}},{kind:"method",key:"_computeError",value:function(e,t){return this.computeError?this.computeError(e,t):e}},{kind:"get",static:!0,key:"styles",value:function(){return s`
      .root {
        margin-bottom: -24px;
        overflow: clip visible;
      }
      .root > * {
        display: block;
      }
      .root > *:not([own-margin]) {
        margin-bottom: 24px;
      }
      ha-alert[own-margin] {
        margin-bottom: 4px;
      }
    `}}]}}),t);export{J as d};
