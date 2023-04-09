import{_ as e,j as a,e as o,y as t,aM as i,k as s,aK as l,d as n,n as r,a5 as c,aI as d,af as h,aD as p,ag as m,aN as u,aO as f,aP as b,aQ as g,aE as v,aR as y,a4 as _,ai as w,aS as k,aT as $}from"./main-85e087f9.js";import"./c.eab7754a.js";import"./c.e651e5fa.js";import{g as z}from"./c.f2bb3724.js";import{s as x}from"./c.ccbe2b52.js";e([r("ha-icon-overflow-menu")],(function(e,a){return{F:class extends a{constructor(...a){super(...a),e(this)}},d:[{kind:"field",decorators:[o({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[o({type:Array})],key:"items",value:()=>[]},{kind:"field",decorators:[o({type:Boolean})],key:"narrow",value:()=>!1},{kind:"method",key:"render",value:function(){return t`
      ${this.narrow?t` <!-- Collapsed representation for small screens -->
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

              ${this.items.map((e=>e.divider?t`<li divider role="separator"></li>`:t`<mwc-list-item
                      graphic="icon"
                      ?disabled=${e.disabled}
                      @click=${e.action}
                      class=${s({warning:Boolean(e.warning)})}
                    >
                      <div slot="graphic">
                        <ha-svg-icon
                          class=${s({warning:Boolean(e.warning)})}
                          .path=${e.path}
                        ></ha-svg-icon>
                      </div>
                      ${e.label}
                    </mwc-list-item> `))}
            </ha-button-menu>`:t`
            <!-- Icon representation for big screens -->
            ${this.items.map((e=>e.narrowOnly?"":e.divider?t`<div role="separator"></div>`:t`<div>
                    ${e.tooltip?t`<paper-tooltip animation-delay="0" position="left">
                          ${e.tooltip}
                        </paper-tooltip>`:""}
                    <ha-icon-button
                      @click=${e.action}
                      .label=${e.label}
                      .path=${e.path}
                      ?disabled=${e.disabled}
                    ></ha-icon-button>
                  </div> `))}
          `}
    `}},{kind:"method",key:"_handleIconOverflowMenuOpened",value:function(e){e.stopPropagation();const a=this.closest(".mdc-data-table__row");a&&(a.style.zIndex="1")}},{kind:"method",key:"_handleIconOverflowMenuClosed",value:function(){const e=this.closest(".mdc-data-table__row");e&&(e.style.zIndex="")}},{kind:"get",static:!0,key:"styles",value:function(){return[l,n`
        :host {
          display: flex;
          justify-content: flex-end;
        }
        li[role="separator"] {
          border-bottom-color: var(--divider-color);
        }
        div[role="separator"] {
          border-right: 1px solid var(--divider-color);
          width: 1px;
        }
      `]}}]}}),a);const E=c(((e,a)=>[..."HACS-EXPERIMENTAL-PANEL"===e.nodeName?[{path:d,label:e.hacs.localize("common.show"),action:()=>h(`/hacs/repository/${a.id}`)}]:[],{path:p,label:e.hacs.localize("common.repository"),action:()=>m.open(`https://github.com/${a.full_name}`,"_blank","noreferrer=true")},{path:u,label:e.hacs.localize("repository_card.update_information"),action:async()=>{await f(e.hass,String(a.id))}},...a.installed_version?[{path:b,label:e.hacs.localize("repository_card.redownload"),action:()=>O(e,a.id),hideForUninstalled:!0}]:[],..."plugin"===a.category&&a.installed_version?[{path:g,label:e.hacs.localize("repository_card.open_source"),action:()=>m.open(`/hacsfiles/${a.local_path.split("/").pop()}/${a.file_name}`,"_blank","noreferrer=true")}]:[],{divider:!0},{path:v,label:e.hacs.localize("repository_card.open_issue"),action:()=>m.open(`https://github.com/${a.full_name}/issues`,"_blank","noreferrer=true")},..."172733314"!==a.id&&a.installed_version?[{path:y,label:e.hacs.localize("repository_card.report"),action:()=>m.open(`https://github.com/hacs/integration/issues/new?assignees=ludeeus&labels=flag&template=removal.yml&repo=${a.full_name}&title=Request for removal of ${a.full_name}`,"_blank","noreferrer=true"),warning:!0},{path:_,label:e.hacs.localize("common.remove"),action:async()=>{if("integration"===a.category&&a.config_flow){if((await z(e.hass)).some((e=>e.domain===a.domain))){if(await x(e,{title:e.hacs.localize("dialog.configured.title"),text:e.hacs.localize("dialog.configured.message",{name:a.name}),dismissText:e.hacs.localize("common.ignore"),confirmText:e.hacs.localize("common.navigate"),confirm:()=>{h("/config/integrations",{replace:!0})}}))return}}e.dispatchEvent(new CustomEvent("hacs-dialog",{detail:{type:"progress",title:e.hacs.localize("dialog.remove.title"),confirmText:e.hacs.localize("dialog.remove.title"),content:e.hacs.localize("dialog.remove.message",{name:a.name}),confirm:async()=>{await S(e,a)}},bubbles:!0,composed:!0}))},warning:!0}]:[]])),O=(e,a)=>{e.dispatchEvent(new CustomEvent("hacs-dialog",{detail:{type:"download",repository:a},bubbles:!0,composed:!0}))},S=async(e,a)=>{var o;if("plugin"===a.category&&"yaml"!==(null===(o=e.hacs.info)||void 0===o?void 0:o.lovelace_mode)){(await w(e.hass)).filter((e=>e.url.startsWith(`/hacsfiles/${a.full_name.split("/")[1]}/${a.file_name}`))).forEach((async a=>{await k(e.hass,String(a.id))}))}await $(e.hass,String(a.id)),"HACS-REPOSITORY-PANEL"===e.nodeName&&history.back()},T=e=>a=>({kind:"method",placement:"prototype",key:a.key,descriptor:{set(e){this[`__${String(a.key)}`]=e},get(){return this[`__${String(a.key)}`]},enumerable:!0,configurable:!0},finisher(o){const t=o.prototype.connectedCallback;o.prototype.connectedCallback=function(){if(t.call(this),this[a.key]){const o=this.renderRoot.querySelector(e);if(!o)return;o.scrollTop=this[a.key]}}}});export{E as a,T as r};
