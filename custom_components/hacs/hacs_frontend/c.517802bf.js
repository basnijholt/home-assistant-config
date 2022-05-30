import{a as e,e as i,i as t,I as a,J as n,$ as r,r as o,n as d}from"./main-c805434e.js";import{L as s,s as l}from"./c.fa497e12.js";e([d("ha-clickable-list-item")],(function(e,d){class s extends d{constructor(...i){super(...i),e(this)}}return{F:s,d:[{kind:"field",decorators:[i()],key:"href",value:void 0},{kind:"field",decorators:[i({type:Boolean})],key:"disableHref",value:()=>!1},{kind:"field",decorators:[i({type:Boolean,reflect:!0})],key:"rtl",value:()=>!1},{kind:"field",decorators:[i({type:Boolean,reflect:!0})],key:"openNewTab",value:()=>!1},{kind:"field",decorators:[t("a")],key:"_anchor",value:void 0},{kind:"method",key:"render",value:function(){const e=a(n(s.prototype),"render",this).call(this),i=this.href||"";return r`${this.disableHref?r`<a aria-role="option">${e}</a>`:r`<a
          aria-role="option"
          target=${this.openNewTab?"_blank":""}
          href=${i}
          >${e}</a
        >`}`}},{kind:"method",key:"firstUpdated",value:function(){a(n(s.prototype),"firstUpdated",this).call(this),this.addEventListener("keydown",(e=>{"Enter"!==e.key&&" "!==e.key||this._anchor.click()}))}},{kind:"get",static:!0,key:"styles",value:function(){return[l,o`
        :host {
          padding-left: 0px;
          padding-right: 0px;
        }
        :host([graphic="avatar"]:not([twoLine])),
        :host([graphic="icon"]:not([twoLine])) {
          height: 48px;
        }
        a {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          padding-left: var(--mdc-list-side-padding, 20px);
          padding-right: var(--mdc-list-side-padding, 20px);
          overflow: hidden;
        }
        span.material-icons:first-of-type {
          margin-inline-start: 0px !important;
          margin-inline-end: var(
            --mdc-list-item-graphic-margin,
            16px
          ) !important;
          direction: var(--direction);
        }
        span.material-icons:last-of-type {
          margin-inline-start: auto !important;
          margin-inline-end: 0px !important;
          direction: var(--direction);
        }
      `]}}]}}),s);
