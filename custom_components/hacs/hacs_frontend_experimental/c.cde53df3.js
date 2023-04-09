import{_ as e,H as t,e as i,a5 as o,y as s,n as r}from"./main-85e087f9.js";import{m as a}from"./c.f2af93f0.js";import"./c.cbdebe08.js";import"./c.5ebe89cb.js";import"./c.743a15a1.js";import"./c.7d6b8ecd.js";import"./c.8e28b461.js";let d=e([r("hacs-generic-dialog")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[i({type:Boolean})],key:"markdown",value:()=>!1},{kind:"field",decorators:[i()],key:"repository",value:void 0},{kind:"field",decorators:[i()],key:"header",value:void 0},{kind:"field",decorators:[i()],key:"content",value:void 0},{kind:"field",key:"_getRepository",value:()=>o(((e,t)=>null==e?void 0:e.find((e=>String(e.id)===t))))},{kind:"method",key:"render",value:function(){if(!this.active||!this.repository)return s``;const e=this._getRepository(this.hacs.repositories,this.repository);return s`
      <hacs-dialog .active=${this.active} .narrow=${this.narrow} .hass=${this.hass}>
        <div slot="header">${this.header||""}</div>
        ${this.markdown?this.repository?a.html(this.content||"",e):a.html(this.content||""):this.content||""}
      </hacs-dialog>
    `}}]}}),t);export{d as HacsGenericDialog};
