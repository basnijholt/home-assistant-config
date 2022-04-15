import{a as e,f as i,e as t,i as o,$ as n,r as d,n as l}from"./main-f3e781b1.js";import"./c.c2b18de6.js";e([l("ha-button-menu")],(function(e,i){return{F:class extends i{constructor(...i){super(...i),e(this)}},d:[{kind:"field",decorators:[t()],key:"corner",value:()=>"TOP_START"},{kind:"field",decorators:[t()],key:"menuCorner",value:()=>"START"},{kind:"field",decorators:[t({type:Number})],key:"x",value:void 0},{kind:"field",decorators:[t({type:Number})],key:"y",value:void 0},{kind:"field",decorators:[t({type:Boolean})],key:"multi",value:()=>!1},{kind:"field",decorators:[t({type:Boolean})],key:"activatable",value:()=>!1},{kind:"field",decorators:[t({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[t({type:Boolean})],key:"fixed",value:()=>!1},{kind:"field",decorators:[o("mwc-menu",!0)],key:"_menu",value:void 0},{kind:"get",key:"items",value:function(){var e;return null===(e=this._menu)||void 0===e?void 0:e.items}},{kind:"get",key:"selected",value:function(){var e;return null===(e=this._menu)||void 0===e?void 0:e.selected}},{kind:"method",key:"render",value:function(){return n`
      <div @click=${this._handleClick}>
        <slot name="trigger"></slot>
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
    `}},{kind:"method",key:"_handleClick",value:function(){this.disabled||(this._menu.anchor=this,this._menu.show())}},{kind:"get",static:!0,key:"styles",value:function(){return d`
      :host {
        display: inline-block;
        position: relative;
      }
      ::slotted([disabled]) {
        color: var(--disabled-text-color);
      }
    `}}]}}),i);
