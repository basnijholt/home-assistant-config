import{a as e,h as t,e as n,t as i,i as o,$ as a,av as d,o as s,L as r,N as l,A as h,ae as c,r as p,n as u}from"./main-bfa41146.js";e([u("ha-expansion-panel")],(function(e,t){class u extends t{constructor(...t){super(...t),e(this)}}return{F:u,d:[{kind:"field",decorators:[n({type:Boolean,reflect:!0})],key:"expanded",value:()=>!1},{kind:"field",decorators:[n({type:Boolean,reflect:!0})],key:"outlined",value:()=>!1},{kind:"field",decorators:[n({type:Boolean,reflect:!0})],key:"leftChevron",value:()=>!1},{kind:"field",decorators:[n()],key:"header",value:void 0},{kind:"field",decorators:[n()],key:"secondary",value:void 0},{kind:"field",decorators:[i()],key:"_showContent",value(){return this.expanded}},{kind:"field",decorators:[o(".container")],key:"_container",value:void 0},{kind:"method",key:"render",value:function(){return a`
      <div class="top">
        <div
          id="summary"
          @click=${this._toggleContainer}
          @keydown=${this._toggleContainer}
          @focus=${this._focusChanged}
          @blur=${this._focusChanged}
          role="button"
          tabindex="0"
          aria-expanded=${this.expanded}
          aria-controls="sect1"
        >
          ${this.leftChevron?a`
                <ha-svg-icon
                  .path=${d}
                  class="summary-icon ${s({expanded:this.expanded})}"
                ></ha-svg-icon>
              `:""}
          <slot name="header">
            <div class="header">
              ${this.header}
              <slot class="secondary" name="secondary">${this.secondary}</slot>
            </div>
          </slot>
          ${this.leftChevron?"":a`
                <ha-svg-icon
                  .path=${d}
                  class="summary-icon ${s({expanded:this.expanded})}"
                ></ha-svg-icon>
              `}
        </div>
        <slot name="icons"></slot>
      </div>
      <div
        class="container ${s({expanded:this.expanded})}"
        @transitionend=${this._handleTransitionEnd}
        role="region"
        aria-labelledby="summary"
        aria-hidden=${!this.expanded}
        tabindex="-1"
      >
        ${this._showContent?a`<slot></slot>`:""}
      </div>
    `}},{kind:"method",key:"willUpdate",value:function(e){r(l(u.prototype),"willUpdate",this).call(this,e),e.has("expanded")&&this.expanded&&(this._showContent=this.expanded,setTimeout((()=>{this.expanded&&(this._container.style.overflow="initial")}),300))}},{kind:"method",key:"_handleTransitionEnd",value:function(){this._container.style.removeProperty("height"),this._container.style.overflow=this.expanded?"initial":"hidden",this._showContent=this.expanded}},{kind:"method",key:"_toggleContainer",value:async function(e){if(e.defaultPrevented)return;if("keydown"===e.type&&"Enter"!==e.key&&" "!==e.key)return;e.preventDefault();const t=!this.expanded;h(this,"expanded-will-change",{expanded:t}),this._container.style.overflow="hidden",t&&(this._showContent=!0,await c());const n=this._container.scrollHeight;this._container.style.height=`${n}px`,t||setTimeout((()=>{this._container.style.height="0px"}),0),this.expanded=t,h(this,"expanded-changed",{expanded:this.expanded})}},{kind:"method",key:"_focusChanged",value:function(e){this.shadowRoot.querySelector(".top").classList.toggle("focused","focus"===e.type)}},{kind:"get",static:!0,key:"styles",value:function(){return p`
      :host {
        display: block;
      }

      .top {
        display: flex;
        align-items: center;
      }

      .top.focused {
        background: var(--input-fill-color);
      }

      :host([outlined]) {
        box-shadow: none;
        border-width: 1px;
        border-style: solid;
        border-color: var(
          --ha-card-border-color,
          var(--divider-color, #e0e0e0)
        );
        border-radius: var(--ha-card-border-radius, 4px);
      }

      .summary-icon {
        margin-left: 8px;
      }

      :host([leftchevron]) .summary-icon {
        margin-left: 0;
        margin-right: 8px;
      }

      #summary {
        flex: 1;
        display: flex;
        padding: var(--expansion-panel-summary-padding, 0 8px);
        min-height: 48px;
        align-items: center;
        cursor: pointer;
        overflow: hidden;
        font-weight: 500;
        outline: none;
      }

      .summary-icon {
        transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1);
        direction: var(--direction);
      }

      .summary-icon.expanded {
        transform: rotate(180deg);
      }

      .header,
      ::slotted([slot="header"]) {
        flex: 1;
      }

      .container {
        padding: var(--expansion-panel-content-padding, 0 8px);
        overflow: hidden;
        transition: height 300ms cubic-bezier(0.4, 0, 0.2, 1);
        height: 0px;
      }

      .container.expanded {
        height: auto;
      }

      .secondary {
        display: block;
        color: var(--secondary-text-color);
        font-size: 12px;
      }
    `}}]}}),t);
