import{a as o,h as t,e,$ as i,w as a,r as s,n as r,t as n,L as h,N as l,ai as c,a2 as d,a3 as p,m as u,c as y,aN as m,aO as f,aP as v,E as _,aQ as g,z as b,aR as k,aS as w,aT as $,aU as x,aV as z,aW as j,ah as R,am as L,ar as S,as as F,aX as I,d as P}from"./main-bfa41146.js";import"./c.09384688.js";import{e as C}from"./c.50bfd408.js";import"./c.dc6e12fb.js";import{r as E}from"./c.6e0bb230.js";import{g as T}from"./c.f2bb3724.js";import{s as U}from"./c.70483bd2.js";import"./c.d1eec9d1.js";import{f as D}from"./c.fe747ba2.js";import{m as K}from"./c.cae7ccdd.js";import"./c.886b012a.js";import"./c.aa41e25c.js";import"./c.497c36cc.js";import"./c.8e28b461.js";import"./c.6fe7dd6c.js";import"./c.a7d20849.js";import"./c.48057b49.js";import"./c.743a15a1.js";o([r("hass-subpage")],(function(o,t){return{F:class extends t{constructor(...t){super(...t),o(this)}},d:[{kind:"field",decorators:[e({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[e()],key:"header",value:void 0},{kind:"field",decorators:[e({type:Boolean,attribute:"main-page"})],key:"mainPage",value:()=>!1},{kind:"field",decorators:[e({type:String,attribute:"back-path"})],key:"backPath",value:void 0},{kind:"field",decorators:[e({type:Boolean,reflect:!0})],key:"narrow",value:()=>!1},{kind:"field",decorators:[e({type:Boolean})],key:"supervisor",value:()=>!1},{kind:"field",decorators:[E(".content")],key:"_savedScrollPos",value:void 0},{kind:"method",key:"render",value:function(){var o;return i`
      <div class="toolbar">
        ${this.mainPage||null!==(o=history.state)&&void 0!==o&&o.root?i`
              <ha-menu-button
                .hassio=${this.supervisor}
                .hass=${this.hass}
                .narrow=${this.narrow}
              ></ha-menu-button>
            `:this.backPath?i`
              <a href=${this.backPath}>
                <ha-icon-button-arrow-prev
                  .hass=${this.hass}
                ></ha-icon-button-arrow-prev>
              </a>
            `:i`
              <ha-icon-button-arrow-prev
                .hass=${this.hass}
                @click=${this._backTapped}
              ></ha-icon-button-arrow-prev>
            `}

        <div class="main-title">${this.header}</div>
        <slot name="toolbar-icon"></slot>
      </div>
      <div class="content" @scroll=${this._saveScrollPos}><slot></slot></div>
    `}},{kind:"method",decorators:[a({passive:!0})],key:"_saveScrollPos",value:function(o){this._savedScrollPos=o.target.scrollTop}},{kind:"method",key:"_backTapped",value:function(){history.back()}},{kind:"get",static:!0,key:"styles",value:function(){return s`
      :host {
        display: block;
        height: 100%;
        background-color: var(--primary-background-color);
      }

      :host([narrow]) {
        width: 100%;
        position: fixed;
      }

      .toolbar {
        display: flex;
        align-items: center;
        font-size: 20px;
        height: var(--header-height);
        padding: 0 16px;
        pointer-events: none;
        background-color: var(--app-header-background-color);
        font-weight: 400;
        color: var(--app-header-text-color, white);
        border-bottom: var(--app-header-border-bottom, none);
        box-sizing: border-box;
      }
      .toolbar a {
        color: var(--sidebar-text-color);
        text-decoration: none;
      }

      ha-menu-button,
      ha-icon-button-arrow-prev,
      ::slotted([slot="toolbar-icon"]) {
        pointer-events: auto;
        color: var(--sidebar-icon-color);
      }

      .main-title {
        margin: 0 0 0 24px;
        line-height: 20px;
        flex-grow: 1;
      }

      .content {
        position: relative;
        width: 100%;
        height: calc(100% - 1px - var(--header-height));
        overflow-y: auto;
        overflow: auto;
        -webkit-overflow-scrolling: touch;
      }
    `}}]}}),t);let M=o([r("hacs-repository-panel")],(function(o,t){class a extends t{constructor(...t){super(...t),o(this)}}return{F:a,d:[{kind:"field",decorators:[e({attribute:!1})],key:"hacs",value:void 0},{kind:"field",decorators:[e({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[e({attribute:!1})],key:"narrow",value:void 0},{kind:"field",decorators:[e({attribute:!1})],key:"isWide",value:void 0},{kind:"field",decorators:[e({attribute:!1})],key:"route",value:void 0},{kind:"field",decorators:[e({attribute:!1})],key:"_repository",value:void 0},{kind:"field",decorators:[n()],key:"_error",value:void 0},{kind:"method",key:"connectedCallback",value:function(){h(l(a.prototype),"connectedCallback",this).call(this),document.body.addEventListener("keydown",this._generateMyLink)}},{kind:"method",key:"disconnectedCallback",value:function(){h(l(a.prototype),"disconnectedCallback",this).call(this),document.body.removeEventListener("keydown",this._generateMyLink)}},{kind:"field",key:"_generateMyLink",value(){return o=>{if(!(o.ctrlKey||o.shiftKey||o.metaKey||o.altKey)&&"m"===o.key&&c.location.pathname.startsWith("/hacs/repository/")){if(!this._repository)return;const o=new URLSearchParams({redirect:"hacs_repository",owner:this._repository.full_name.split("/")[0],repository:this._repository.full_name.split("/")[1],category:this._repository.category});window.open(`https://my.home-assistant.io/create-link/?${o.toString()}`,"_blank")}}}},{kind:"method",key:"firstUpdated",value:async function(o){h(l(a.prototype),"firstUpdated",this).call(this,o);const t=C();if(Object.entries(t).length){let o;const e=`${t.owner}/${t.repository}`;if(o=this.hacs.repositories.find((o=>o.full_name.toLocaleLowerCase()===e.toLocaleLowerCase())),!o&&t.category){if(!await U(this,{title:this.hacs.localize("my.add_repository_title"),text:this.hacs.localize("my.add_repository_description",{repository:e}),confirmText:this.hacs.localize("common.add"),dismissText:this.hacs.localize("common.cancel")}))return void(this._error=this.hacs.localize("my.repository_not_found",{repository:e}));try{await d(this.hass,e,t.category),this.hacs.repositories=await p(this.hass),o=this.hacs.repositories.find((o=>o.full_name.toLocaleLowerCase()===e.toLocaleLowerCase()))}catch(o){return void(this._error=o)}}o?this._fetchRepository(String(o.id)):this._error=this.hacs.localize("my.repository_not_found",{repository:e})}else{const o=this.route.path.indexOf("/",1),t=this.route.path.substr(o+1);if(!t)return void(this._error="Missing repositoryId from route");this._fetchRepository(t)}}},{kind:"method",key:"updated",value:function(o){h(l(a.prototype),"updated",this).call(this,o),o.has("repositories")&&this._repository&&this._fetchRepository()}},{kind:"method",key:"_fetchRepository",value:async function(o){try{this._repository=await D(this.hass,o||String(this._repository.id))}catch(o){this._error=null==o?void 0:o.message}}},{kind:"field",key:"_getAuthors",value:()=>u((o=>{const t=[];if(!o.authors)return t;if(o.authors.forEach((o=>t.push(o.replace("@","")))),0===t.length){const e=o.full_name.split("/")[0];if(["custom-cards","custom-components","home-assistant-community-themes"].includes(e))return t;t.push(e)}return t}))},{kind:"method",key:"render",value:function(){if(this._error)return i`<hass-error-screen .error=${this._error}></hass-error-screen>`;if(!this._repository)return i`<hass-loading-screen></hass-loading-screen>`;const o=this._getAuthors(this._repository);return i`
      <hass-subpage
        .hass=${this.hass}
        .narrow=${this.narrow}
        .route=${this.route}
        .header=${this._repository.name}
        hasFab
      >
        <ha-icon-overflow-menu
          slot="toolbar-icon"
          narrow
          .hass=${this.hass}
          .items=${[{path:y,label:this.hacs.localize("common.repository"),action:()=>c.open(`https://github.com/${this._repository.full_name}`,"_blank","noreferrer=true")},{path:m,label:this.hacs.localize("repository_card.update_information"),action:()=>this._refreshReopsitoryInfo()},{path:f,label:this.hacs.localize("repository_card.redownload"),action:()=>this._downloadRepositoryDialog(),hideForUninstalled:!0},{category:"plugin",hideForUninstalled:!0,path:v,label:this.hacs.localize("repository_card.open_source"),action:()=>c.open(`/hacsfiles/${this._repository.local_path.split("/").pop()}/${this._repository.file_name}`,"_blank","noreferrer=true")},{path:_,label:this.hacs.localize("repository_card.open_issue"),action:()=>c.open(`https://github.com/${this._repository.full_name}/issues`,"_blank","noreferrer=true")},{hideForId:"172733314",path:g,label:this.hacs.localize("repository_card.report"),hideForUninstalled:!0,action:()=>c.open(`https://github.com/hacs/integration/issues/new?assignees=ludeeus&labels=flag&template=removal.yml&repo=${this._repository.full_name}&title=Request for removal of ${this._repository.full_name}`,"_blank","noreferrer=true")},{hideForId:"172733314",hideForUninstalled:!0,path:b,label:this.hacs.localize("common.remove"),action:()=>this._removeRepositoryDialog()}].filter((o=>(!o.category||this._repository.category===o.category)&&(!o.hideForId||String(this._repository.id)!==o.hideForId)&&(!o.hideForUninstalled||this._repository.installed_version)))}
        >
        </ha-icon-overflow-menu>
        <div class="content">
          <div class="chips">
            ${this._repository.installed?i`
                  <ha-chip title="${this.hacs.localize("dialog_info.version_installed")}" hasIcon>
                    <ha-svg-icon slot="icon" .path=${k}></ha-svg-icon>
                    ${this._repository.installed_version}
                  </ha-chip>
                `:""}
            ${o?o.map((o=>i`<hacs-link .url="https://github.com/${o}">
                    <ha-chip title="${this.hacs.localize("dialog_info.author")}" hasIcon>
                      <ha-svg-icon slot="icon" .path=${w}></ha-svg-icon>
                      @${o}
                    </ha-chip>
                  </hacs-link>`)):""}
            ${this._repository.downloads?i` <ha-chip hasIcon title="${this.hacs.localize("dialog_info.downloads")}">
                  <ha-svg-icon slot="icon" .path=${$}></ha-svg-icon>
                  ${this._repository.downloads}
                </ha-chip>`:""}
            <ha-chip title="${this.hacs.localize("dialog_info.stars")}" hasIcon>
              <ha-svg-icon slot="icon" .path=${x}></ha-svg-icon>
              ${this._repository.stars}
            </ha-chip>
            <hacs-link .url="https://github.com/${this._repository.full_name}/issues">
              <ha-chip title="${this.hacs.localize("dialog_info.open_issues")}" hasIcon>
                <ha-svg-icon slot="icon" .path=${z}></ha-svg-icon>
                ${this._repository.issues}
              </ha-chip>
            </hacs-link>
          </div>
          ${K.html(this._repository.additional_info||this.hacs.localize("dialog_info.no_info"),this._repository)}
        </div>
        ${this._repository.installed_version?"":i`<ha-fab
              .label=${this.hacs.localize("common.download")}
              .extended=${!this.narrow}
              @click=${this._downloadRepositoryDialog}
            >
              <ha-svg-icon slot="icon" .path=${j}></ha-svg-icon>
            </ha-fab>`}
      </hass-subpage>
    `}},{kind:"method",key:"_downloadRepositoryDialog",value:function(){this.dispatchEvent(new CustomEvent("hacs-dialog",{detail:{type:"download",repository:this._repository.id},bubbles:!0,composed:!0}))}},{kind:"method",key:"_removeRepositoryDialog",value:async function(){if("integration"===this._repository.category&&this._repository.config_flow){if((await T(this.hass)).some((o=>o.domain===this._repository.domain))){if(await U(this,{title:this.hacs.localize("dialog.configured.title"),text:this.hacs.localize("dialog.configured.message",{name:this._repository.name}),dismissText:this.hacs.localize("common.ignore"),confirmText:this.hacs.localize("common.navigate"),confirm:()=>{R("/config/integrations",{replace:!0})}}))return}}this.dispatchEvent(new CustomEvent("hacs-dialog",{detail:{type:"progress",title:this.hacs.localize("dialog.remove.title"),confirmText:this.hacs.localize("dialog.remove.title"),content:this.hacs.localize("dialog.remove.message",{name:this._repository.name}),confirm:async()=>{await this._repositoryRemove()}},bubbles:!0,composed:!0}))}},{kind:"method",key:"_repositoryRemove",value:async function(){var o;if("plugin"===this._repository.category&&"yaml"!==(null===(o=this.hacs.info)||void 0===o?void 0:o.lovelace_mode)){(await L(this.hass)).filter((o=>o.url.startsWith(`/hacsfiles/${this._repository.full_name.split("/")[1]}/${this._repository.file_name}`))).forEach((async o=>{await S(this.hass,String(o.id))}))}await F(this.hass,String(this._repository.id)),history.back()}},{kind:"method",key:"_refreshReopsitoryInfo",value:async function(){await I(this.hass,String(this._repository.id))}},{kind:"get",static:!0,key:"styles",value:function(){return[P,s`
        hass-loading-screen {
          --app-header-background-color: var(--sidebar-background-color);
          --app-header-text-color: var(--sidebar-text-color);
          height: 100vh;
        }

        hass-subpage {
          position: absolute;
          width: 100vw;
        }

        ha-svg-icon {
          color: var(--hcv-text-color-on-background);
        }

        ha-fab {
          position: fixed;
          float: right;
          right: calc(18px + env(safe-area-inset-right));
          bottom: calc(16px + env(safe-area-inset-bottom));
          z-index: 1;
        }

        ha-fab.rtl {
          float: left;
          right: auto;
          left: calc(18px + env(safe-area-inset-left));
        }

        .content {
          padding: 12px;
          margin-bottom: 64px;
        }

        .chips {
          display: flex;
          flex-wrap: wrap;
          padding-bottom: 8px;
          gap: 4px;
        }

        @media all and (max-width: 500px) {
          .content {
            margin: 8px 4px 64px;
          }
        }
      `]}}]}}),t);export{M as HacsRepositoryPanel};
