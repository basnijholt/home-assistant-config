import{_ as t,j as e,e as r,y as n,ae as i,af as a,d as o,n as s}from"./main-ec7846c8.js";t([s("hacs-link")],(function(t,e){return{F:class extends e{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[r({type:Boolean})],key:"newtab",value:()=>!1},{kind:"field",decorators:[r({type:Boolean})],key:"parent",value:()=>!1},{kind:"field",decorators:[r()],key:"title",value:()=>""},{kind:"field",decorators:[r()],key:"url",value:void 0},{kind:"method",key:"render",value:function(){return n`<span title=${this.title||this.url} @click=${this._open}><slot></slot></span>`}},{kind:"method",key:"_open",value:function(){var t;if(this.url.startsWith("/")&&!this.newtab)return void i(this.url,{replace:!0});const e=null===(t=this.url)||void 0===t?void 0:t.startsWith("http");let r="",n="_blank";e&&(r="noreferrer=true"),e||this.newtab||(n="_blank"),e||this.parent||(n="_parent"),a.open(this.url,n,r)}},{kind:"get",static:!0,key:"styles",value:function(){return o`
      span {
        cursor: pointer;
        color: var(--hcv-text-color-link);
        text-decoration: var(--hcv-text-decoration-link);
      }
    `}}]}}),e);
