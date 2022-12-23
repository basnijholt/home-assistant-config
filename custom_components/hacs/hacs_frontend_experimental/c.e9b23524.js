import{_ as t,H as e,e as i,a7 as o,y as s,n as r}from"./main-c4dd4de7.js";import{m as d}from"./c.fc663bf1.js";import"./c.522d304d.js";import"./c.34f240ae.js";import"./c.743a15a1.js";import"./c.c2d847f1.js";import"./c.8e28b461.js";let a=t([r("hacs-generic-dialog")],(function(t,e){return{F:class extends e{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[i({type:Boolean})],key:"markdown",value:()=>!1},{kind:"field",decorators:[i()],key:"repository",value:void 0},{kind:"field",decorators:[i()],key:"header",value:void 0},{kind:"field",decorators:[i()],key:"content",value:void 0},{kind:"field",key:"_getRepository",value:()=>o(((t,e)=>null==t?void 0:t.find((t=>String(t.id)===e))))},{kind:"method",key:"render",value:function(){if(!this.active||!this.repository)return s``;const t=this._getRepository(this.hacs.repositories,this.repository);return s`
      <hacs-dialog .active=${this.active} .narrow=${this.narrow} .hass=${this.hass}>
        <div slot="header">${this.header||""}</div>
        ${this.markdown?this.repository?d.html(this.content||"",t):d.html(this.content||""):this.content||""}
      </hacs-dialog>
    `}}]}}),e);export{a as HacsGenericDialog};
