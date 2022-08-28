import{a as e,e as t,i,L as a,N as r,$ as d,r as n,n as o}from"./main-bfa41146.js";import{H as s}from"./c.eab771ac.js";e([o("ha-clickable-list-item")],(function(e,o){class s extends o{constructor(...t){super(...t),e(this)}}return{F:s,d:[{kind:"field",decorators:[t()],key:"href",value:void 0},{kind:"field",decorators:[t({type:Boolean})],key:"disableHref",value:()=>!1},{kind:"field",decorators:[t({type:Boolean,reflect:!0})],key:"openNewTab",value:()=>!1},{kind:"field",decorators:[i("a")],key:"_anchor",value:void 0},{kind:"method",key:"render",value:function(){const e=a(r(s.prototype),"render",this).call(this),t=this.href||"";return d`${this.disableHref?d`<a aria-role="option">${e}</a>`:d`<a
          aria-role="option"
          target=${this.openNewTab?"_blank":""}
          href=${t}
          >${e}</a
        >`}`}},{kind:"method",key:"firstUpdated",value:function(){a(r(s.prototype),"firstUpdated",this).call(this),this.addEventListener("keydown",(e=>{"Enter"!==e.key&&" "!==e.key||this._anchor.click()}))}},{kind:"get",static:!0,key:"styles",value:function(){return[a(r(s),"styles",this),n`
        a {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          padding-left: var(--mdc-list-side-padding, 20px);
          padding-right: var(--mdc-list-side-padding, 20px);
          overflow: hidden;
        }
      `]}}]}}),s);
