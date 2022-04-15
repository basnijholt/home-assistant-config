import{a as c,f as o,e as i,$ as a,r,G as n,n as t}from"./main-f3e781b1.js";import{c as e}from"./c.30e53b1f.js";c([t("ha-chip")],(function(c,o){return{F:class extends o{constructor(...o){super(...o),c(this)}},d:[{kind:"field",decorators:[i({type:Boolean})],key:"hasIcon",value:()=>!1},{kind:"field",decorators:[i({type:Boolean})],key:"noText",value:()=>!1},{kind:"method",key:"render",value:function(){return a`
      <div class="mdc-chip ${this.noText?"no-text":""}">
        ${this.hasIcon?a`<div class="mdc-chip__icon mdc-chip__icon--leading">
              <slot name="icon"></slot>
            </div>`:null}
        <div class="mdc-chip__ripple"></div>
        <span role="gridcell">
          <span role="button" tabindex="0" class="mdc-chip__primary-action">
            <span class="mdc-chip__text"><slot></slot></span>
          </span>
        </span>
      </div>
    `}},{kind:"get",static:!0,key:"styles",value:function(){return r`
      ${n(e)}
      .mdc-chip {
        background-color: var(
          --ha-chip-background-color,
          rgba(var(--rgb-primary-text-color), 0.15)
        );
        color: var(--ha-chip-text-color, var(--primary-text-color));
      }

      .mdc-chip.no-text {
        padding: 0 10px;
      }

      .mdc-chip:hover {
        color: var(--ha-chip-text-color, var(--primary-text-color));
      }

      .mdc-chip__icon--leading {
        --mdc-icon-size: 20px;
        color: var(--ha-chip-icon-color, var(--ha-chip-text-color));
      }
      .mdc-chip.no-text
        .mdc-chip__icon--leading:not(.mdc-chip__icon--leading-hidden) {
        margin-right: -4px;
      }
    `}}]}}),o);
