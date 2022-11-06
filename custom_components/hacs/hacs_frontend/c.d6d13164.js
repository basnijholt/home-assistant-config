import{a as e,H as i,e as t,$ as s,n as o}from"./main-ad130be7.js";import"./c.82e03b89.js";import"./c.710a50fc.js";import"./c.8e28b461.js";let c=e([o("hacs-progress-dialog")],(function(e,i){return{F:class extends i{constructor(...i){super(...i),e(this)}},d:[{kind:"field",decorators:[t()],key:"title",value:void 0},{kind:"field",decorators:[t()],key:"content",value:void 0},{kind:"field",decorators:[t()],key:"confirmText",value:void 0},{kind:"field",decorators:[t()],key:"confirm",value:void 0},{kind:"field",decorators:[t({type:Boolean})],key:"_inProgress",value:()=>!1},{kind:"method",key:"shouldUpdate",value:function(e){return e.has("active")||e.has("title")||e.has("content")||e.has("confirmText")||e.has("confirm")||e.has("_inProgress")}},{kind:"method",key:"render",value:function(){return this.active?s`
      <hacs-dialog .active=${this.active} .hass=${this.hass} title=${this.title||""}>
        <div class="content">
          ${this.content||""}
        </div>
        <mwc-button slot="secondaryaction" ?disabled=${this._inProgress} @click=${this._close}>
          ${this.hacs.localize("common.cancel")}
        </mwc-button>
        <mwc-button slot="primaryaction" @click=${this._confirmed}>
          ${this._inProgress?s`<ha-circular-progress active size="small"></ha-circular-progress>`:this.confirmText||this.hacs.localize("common.yes")}</mwc-button
          >
        </mwc-button>
      </hacs-dialog>
    `:s``}},{kind:"method",key:"_confirmed",value:async function(){this._inProgress=!0,await this.confirm(),this._inProgress=!1,this._close()}},{kind:"method",key:"_close",value:function(){this.active=!1,this.dispatchEvent(new Event("hacs-dialog-closed",{bubbles:!0,composed:!0}))}}]}}),i);export{c as HacsProgressDialog};
