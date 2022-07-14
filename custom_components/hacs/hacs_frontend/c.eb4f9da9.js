import{a as e,h as t,e as o,$ as r,aM as i,r as a,n as s,o as n,aL as d,d as c}from"./main-7bc9a818.js";import"./c.cf66b923.js";import"./c.01f18260.js";import"./c.5d9598b2.js";import"./c.e0e56ec4.js";import"./c.9475214f.js";import"./c.e6921cf4.js";e([s("ha-icon-overflow-menu")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[o({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[o({type:Array})],key:"items",value:()=>[]},{kind:"field",decorators:[o({type:Boolean})],key:"narrow",value:()=>!1},{kind:"method",key:"render",value:function(){return r`
      ${this.narrow?r` <!-- Collapsed representation for small screens -->
            <ha-button-menu
              @click=${this._handleIconOverflowMenuOpened}
              @closed=${this._handleIconOverflowMenuClosed}
              class="ha-icon-overflow-menu-overflow"
              corner="BOTTOM_START"
              absolute
            >
              <ha-icon-button
                .label=${this.hass.localize("ui.common.overflow_menu")}
                .path=${i}
                slot="trigger"
              ></ha-icon-button>

              ${this.items.map((e=>r`
                  <mwc-list-item
                    graphic="icon"
                    .disabled=${e.disabled}
                    @click=${e.action}
                  >
                    <div slot="graphic">
                      <ha-svg-icon .path=${e.path}></ha-svg-icon>
                    </div>
                    ${e.label}
                  </mwc-list-item>
                `))}
            </ha-button-menu>`:r`
            <!-- Icon representation for big screens -->
            ${this.items.map((e=>e.narrowOnly?"":r`<div>
                    ${e.tooltip?r`<paper-tooltip animation-delay="0" position="left">
                          ${e.tooltip}
                        </paper-tooltip>`:""}
                    <ha-icon-button
                      @click=${e.action}
                      .label=${e.label}
                      .path=${e.path}
                      .disabled=${e.disabled}
                    ></ha-icon-button>
                  </div> `))}
          `}
    `}},{kind:"method",key:"_handleIconOverflowMenuOpened",value:function(){const e=this.closest(".mdc-data-table__row");e&&(e.style.zIndex="1")}},{kind:"method",key:"_handleIconOverflowMenuClosed",value:function(){const e=this.closest(".mdc-data-table__row");e&&(e.style.zIndex="")}},{kind:"get",static:!0,key:"styles",value:function(){return a`
      :host {
        display: flex;
        justify-content: flex-end;
      }
    `}}]}}),t);const l=e=>t=>({kind:"method",placement:"prototype",key:t.key,descriptor:{set(e){this[`__${String(t.key)}`]=e},get(){return this[`__${String(t.key)}`]},enumerable:!0,configurable:!0},finisher(o){const r=o.prototype.connectedCallback;o.prototype.connectedCallback=function(){if(r.call(this),this[t.key]){const o=this.renderRoot.querySelector(e);if(!o)return;o.scrollTop=this[t.key]}}}});e([s("hacs-repository-card")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[o({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[o({attribute:!1})],key:"hacs",value:void 0},{kind:"field",decorators:[o({attribute:!1})],key:"repository",value:void 0},{kind:"field",decorators:[o({type:Boolean})],key:"narrow",value:void 0},{kind:"get",key:"_borderClass",value:function(){const e={};return this.hacs.addedToLovelace(this.hacs,this.repository)&&"pending-restart"!==this.repository.status?this.repository.pending_upgrade?e["status-update"]=!0:this.repository.new&&!this.repository.installed&&(e["status-new"]=!0):e["status-issue"]=!0,0!==Object.keys(e).length&&(e["status-border"]=!0),e}},{kind:"get",key:"_headerClass",value:function(){const e={};return this.hacs.addedToLovelace(this.hacs,this.repository)&&"pending-restart"!==this.repository.status?this.repository.pending_upgrade?e["update-header"]=!0:this.repository.new&&!this.repository.installed?e["new-header"]=!0:e["default-header"]=!0:e["issue-header"]=!0,e}},{kind:"get",key:"_headerTitle",value:function(){return this.hacs.addedToLovelace(this.hacs,this.repository)?"pending-restart"===this.repository.status?this.hacs.localize("repository_card.pending_restart"):this.repository.pending_upgrade?this.hacs.localize("repository_card.pending_update"):this.repository.new&&!this.repository.installed?this.hacs.localize("repository_card.new_repository"):"":this.hacs.localize("repository_card.not_loaded")}},{kind:"method",key:"render",value:function(){return r`
      <a href="/hacs/repository/${this.repository.id}">
        <ha-card class=${n(this._borderClass)} ?narrow=${this.narrow} outlined>
          <div class="card-content">
            <div class="group-header">
              <div class="status-header ${n(this._headerClass)}">${this._headerTitle}</div>

              <div class="title pointer">
                <h1>${this.repository.name}</h1>
                ${"integration"!==this.repository.category?r` <ha-chip>
                      ${this.hacs.localize(`common.${this.repository.category}`)}
                    </ha-chip>`:""}
              </div>
            </div>
            <div class="description">${this.repository.description}</div>
          </div>
          <div class="card-actions">
            ${this.repository.new&&!this.repository.installed?r`<div>
                  <mwc-button class="status-new" @click=${this._setNotNew}>
                    ${this.hacs.localize("repository_card.dismiss")}
                  </mwc-button>
                </div>`:this.repository.pending_upgrade&&this.hacs.addedToLovelace(this.hacs,this.repository)?r`<div>
                  <mwc-button class="update-header" @click=${this._updateRepository} raised>
                    ${this.hacs.localize("common.update")}
                  </mwc-button>
                </div> `:""}
          </div>
        </ha-card>
      </a>
    `}},{kind:"method",key:"_updateRepository",value:function(e){e.preventDefault(),this.dispatchEvent(new CustomEvent("hacs-dialog",{detail:{type:"update",repository:this.repository.id},bubbles:!0,composed:!0}))}},{kind:"method",key:"_setNotNew",value:async function(e){e.preventDefault(),await d(this.hass,{repository:String(this.repository.id)})}},{kind:"get",static:!0,key:"styles",value:function(){return[c,a`
        ha-card {
          display: flex;
          flex-direction: column;
          height: 195px;
          width: 480px;
        }

        .title {
          display: flex;
          justify-content: space-between;
        }
        .card-content {
          padding: 0 0 3px 0;
          height: 100%;
        }
        .card-actions {
          border-top: none;
          bottom: 0;
          display: flex;
          flex-direction: row-reverse;
          justify-content: space-between;
          align-items: center;
          padding: 5px;
        }
        .group-header {
          height: auto;
          align-content: center;
        }
        .group-header h1 {
          margin: 0;
          padding: 8px 16px;
          font-size: 22px;
        }
        h1 {
          margin-top: 0;
          min-height: 24px;
        }
        a {
          all: unset;
          cursor: pointer;
        }

        .description {
          opacity: var(--dark-primary-opacity);
          font-size: 14px;
          padding: 8px 16px;
          max-height: 52px;
          overflow: hidden;
        }

        .status-new {
          border-color: var(--hcv-color-new);
          --mdc-theme-primary: var(--hcv-color-new);
        }

        .status-update {
          border-color: var(--hcv-color-update);
        }

        .status-issue {
          border-color: var(--hcv-color-error);
        }

        .new-header {
          background-color: var(--hcv-color-new);
          color: var(--hcv-text-color-on-background);
        }

        .issue-header {
          background-color: var(--hcv-color-error);
          color: var(--hcv-text-color-on-background);
        }

        .update-header {
          background-color: var(--hcv-color-update);
          color: var(--hcv-text-color-on-background);
        }

        .default-header {
          padding: 2px 0 !important;
        }

        mwc-button.update-header {
          --mdc-theme-primary: var(--hcv-color-update);
          --mdc-theme-on-primary: var(--hcv-text-color-on-background);
        }

        .status-border {
          border-style: solid;
          border-width: min(var(--ha-card-border-width, 1px), 10px);
        }

        .status-header {
          top: 0;
          padding: 6px 1px;
          margin: -1px;
          width: 100%;
          font-weight: 500;
          text-align: center;
          left: 0;
          border-top-left-radius: var(--ha-card-border-radius, 4px);
          border-top-right-radius: var(--ha-card-border-radius, 4px);
        }

        ha-card[narrow] {
          width: calc(100% - 24px);
          margin: 11px;
        }

        ha-chip {
          padding: 4px;
          margin-top: 3px;
        }
      `]}}]}}),t);export{l as r};
