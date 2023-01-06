import{_ as t,H as e,e as i,a7 as o,y as s,n as r}from"./main-73688df5.js";import{m as a}from"./c.f3bff73f.js";import"./c.4e724b62.js";import"./c.0dbdcc54.js";import"./c.743a15a1.js";import"./c.bb1e9c94.js";import"./c.8e28b461.js";let d=t([r("hacs-generic-dialog")],(function(t,e){return{F:class extends e{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[i({type:Boolean})],key:"markdown",value:()=>!1},{kind:"field",decorators:[i()],key:"repository",value:void 0},{kind:"field",decorators:[i()],key:"header",value:void 0},{kind:"field",decorators:[i()],key:"content",value:void 0},{kind:"field",key:"_getRepository",value:()=>o(((t,e)=>null==t?void 0:t.find((t=>String(t.id)===e))))},{kind:"method",key:"render",value:function(){if(!this.active||!this.repository)return s``;const t=this._getRepository(this.hacs.repositories,this.repository);return s`
      <hacs-dialog .active=${this.active} .narrow=${this.narrow} .hass=${this.hass}>
        <div slot="header">${this.header||""}</div>
        ${this.markdown?this.repository?a.html(this.content||"",t):a.html(this.content||""):this.content||""}
      </hacs-dialog>
    `}}]}}),e);export{d as HacsGenericDialog};
