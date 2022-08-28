import{a as e,h as t,Y as i,e as n,i as o,$ as r,L as a,N as l,r as d,n as s}from"./main-bfa41146.js";import"./c.aa41e25c.js";e([s("ha-button-menu")],(function(e,t){class s extends t{constructor(...t){super(...t),e(this)}}return{F:s,d:[{kind:"field",key:i,value:void 0},{kind:"field",decorators:[n()],key:"corner",value:()=>"TOP_START"},{kind:"field",decorators:[n()],key:"menuCorner",value:()=>"START"},{kind:"field",decorators:[n({type:Number})],key:"x",value:()=>null},{kind:"field",decorators:[n({type:Number})],key:"y",value:()=>null},{kind:"field",decorators:[n({type:Boolean})],key:"multi",value:()=>!1},{kind:"field",decorators:[n({type:Boolean})],key:"activatable",value:()=>!1},{kind:"field",decorators:[n({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[n({type:Boolean})],key:"fixed",value:()=>!1},{kind:"field",decorators:[o("mwc-menu",!0)],key:"_menu",value:void 0},{kind:"get",key:"items",value:function(){var e;return null===(e=this._menu)||void 0===e?void 0:e.items}},{kind:"get",key:"selected",value:function(){var e;return null===(e=this._menu)||void 0===e?void 0:e.selected}},{kind:"method",key:"focus",value:function(){var e,t;null!==(e=this._menu)&&void 0!==e&&e.open?this._menu.focusItemAtIndex(0):null===(t=this._triggerButton)||void 0===t||t.focus()}},{kind:"method",key:"render",value:function(){return r`
      <div @click=${this._handleClick}>
        <slot name="trigger" @slotchange=${this._setTriggerAria}></slot>
      </div>
      <mwc-menu
        .corner=${this.corner}
        .menuCorner=${this.menuCorner}
        .fixed=${this.fixed}
        .multi=${this.multi}
        .activatable=${this.activatable}
        .y=${this.y}
        .x=${this.x}
      >
        <slot></slot>
      </mwc-menu>
    `}},{kind:"method",key:"firstUpdated",value:function(e){a(l(s.prototype),"firstUpdated",this).call(this,e),"rtl"===document.dir&&this.updateComplete.then((()=>{this.querySelectorAll("mwc-list-item").forEach((e=>{const t=document.createElement("style");t.innerHTML="span.material-icons:first-of-type { margin-left: var(--mdc-list-item-graphic-margin, 32px) !important; margin-right: 0px !important;}",e.shadowRoot.appendChild(t)}))}))}},{kind:"method",key:"_handleClick",value:function(){this.disabled||(this._menu.anchor=this,this._menu.show())}},{kind:"get",key:"_triggerButton",value:function(){return this.querySelector('ha-icon-button[slot="trigger"], mwc-button[slot="trigger"]')}},{kind:"method",key:"_setTriggerAria",value:function(){this._triggerButton&&(this._triggerButton.ariaHasPopup="menu")}},{kind:"get",static:!0,key:"styles",value:function(){return d`
      :host {
        display: inline-block;
        position: relative;
      }
      ::slotted([disabled]) {
        color: var(--disabled-text-color);
      }
    `}}]}}),t);
