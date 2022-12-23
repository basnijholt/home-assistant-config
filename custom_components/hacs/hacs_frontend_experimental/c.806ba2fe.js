import{_ as t,j as o,e,E as a,G as i,y as s,a6 as r,d as n,n as h,t as c,ag as l,r as d,g as p,a7 as u,aT as f,aU as v,aV as y,aW as b,aX as m,aK as k,c as g}from"./main-c4dd4de7.js";import{e as _}from"./c.50bfd408.js";import"./c.29d7c8e9.js";import"./c.79bc4ea6.js";import{s as w}from"./c.e8dd2da2.js";import{r as x,a as $}from"./c.3c09930b.js";import{c as z}from"./c.469b562b.js";import"./c.34f240ae.js";import{f as j}from"./c.fe747ba2.js";import{m as L}from"./c.fc663bf1.js";import"./c.9997a901.js";import"./c.f2bb3724.js";import"./c.8e28b461.js";import"./c.743a15a1.js";t([h("hass-subpage")],(function(t,o){class h extends o{constructor(...o){super(...o),t(this)}}return{F:h,d:[{kind:"field",decorators:[e({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[e()],key:"header",value:void 0},{kind:"field",decorators:[e({type:Boolean,attribute:"main-page"})],key:"mainPage",value:()=>!1},{kind:"field",decorators:[e({type:String,attribute:"back-path"})],key:"backPath",value:void 0},{kind:"field",decorators:[e()],key:"backCallback",value:void 0},{kind:"field",decorators:[e({type:Boolean,reflect:!0})],key:"narrow",value:()=>!1},{kind:"field",decorators:[e({type:Boolean})],key:"supervisor",value:()=>!1},{kind:"field",decorators:[x(".content")],key:"_savedScrollPos",value:void 0},{kind:"method",key:"willUpdate",value:function(t){if(a(i(h.prototype),"willUpdate",this).call(this,t),!t.has("hass"))return;const o=t.get("hass");var e,s,r;o&&o.locale===this.hass.locale||(e=this,s="rtl",void 0!==(r=z(this.hass))&&(r=!!r),e.hasAttribute(s)?r||e.removeAttribute(s):!1!==r&&e.setAttribute(s,""))}},{kind:"method",key:"render",value:function(){var t;return s`
      <div class="toolbar">
        ${this.mainPage||null!==(t=history.state)&&void 0!==t&&t.root?s`
              <ha-menu-button
                .hassio=${this.supervisor}
                .hass=${this.hass}
                .narrow=${this.narrow}
              ></ha-menu-button>
            `:this.backPath?s`
              <a href=${this.backPath}>
                <ha-icon-button-arrow-prev
                  .hass=${this.hass}
                ></ha-icon-button-arrow-prev>
              </a>
            `:s`
              <ha-icon-button-arrow-prev
                .hass=${this.hass}
                @click=${this._backTapped}
              ></ha-icon-button-arrow-prev>
            `}

        <div class="main-title">${this.header}</div>
        <slot name="toolbar-icon"></slot>
      </div>
      <div class="content" @scroll=${this._saveScrollPos}><slot></slot></div>
      <div id="fab">
        <slot name="fab"></slot>
      </div>
    `}},{kind:"method",decorators:[r({passive:!0})],key:"_saveScrollPos",value:function(t){this._savedScrollPos=t.target.scrollTop}},{kind:"method",key:"_backTapped",value:function(){this.backCallback?this.backCallback():history.back()}},{kind:"get",static:!0,key:"styles",value:function(){return n`
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

      #fab {
        position: fixed;
        right: calc(16px + env(safe-area-inset-right));
        bottom: calc(16px + env(safe-area-inset-bottom));
        z-index: 1;
      }
      :host([narrow]) #fab.tabs {
        bottom: calc(84px + env(safe-area-inset-bottom));
      }
      #fab[is-wide] {
        bottom: 24px;
        right: 24px;
      }
      :host([rtl]) #fab {
        right: auto;
        left: calc(16px + env(safe-area-inset-left));
      }
      :host([rtl][is-wide]) #fab {
        bottom: 24px;
        left: 24px;
        right: auto;
      }
    `}}]}}),o);let C=t([h("hacs-repository-panel")],(function(t,o){class r extends o{constructor(...o){super(...o),t(this)}}return{F:r,d:[{kind:"field",decorators:[e({attribute:!1})],key:"hacs",value:void 0},{kind:"field",decorators:[e({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[e({attribute:!1})],key:"narrow",value:void 0},{kind:"field",decorators:[e({attribute:!1})],key:"isWide",value:void 0},{kind:"field",decorators:[e({attribute:!1})],key:"route",value:void 0},{kind:"field",decorators:[e({attribute:!1})],key:"_repository",value:void 0},{kind:"field",decorators:[c()],key:"_error",value:void 0},{kind:"method",key:"connectedCallback",value:function(){a(i(r.prototype),"connectedCallback",this).call(this),document.body.addEventListener("keydown",this._generateMyLink)}},{kind:"method",key:"disconnectedCallback",value:function(){a(i(r.prototype),"disconnectedCallback",this).call(this),document.body.removeEventListener("keydown",this._generateMyLink)}},{kind:"field",key:"_generateMyLink",value(){return t=>{if(!(t.ctrlKey||t.shiftKey||t.metaKey||t.altKey)&&"m"===t.key&&l.location.pathname.startsWith("/hacs/repository/")){if(!this._repository)return;const t=new URLSearchParams({redirect:"hacs_repository",owner:this._repository.full_name.split("/")[0],repository:this._repository.full_name.split("/")[1],category:this._repository.category});window.open(`https://my.home-assistant.io/create-link/?${t.toString()}`,"_blank")}}}},{kind:"method",key:"firstUpdated",value:async function(t){a(i(r.prototype),"firstUpdated",this).call(this,t);const o=_();if(Object.entries(o).length){let t;const e=`${o.owner}/${o.repository}`;if(t=this.hacs.repositories.find((t=>t.full_name.toLocaleLowerCase()===e.toLocaleLowerCase())),!t&&o.category){if(!await w(this,{title:this.hacs.localize("my.add_repository_title"),text:this.hacs.localize("my.add_repository_description",{repository:e}),confirmText:this.hacs.localize("common.add"),dismissText:this.hacs.localize("common.cancel")}))return void(this._error=this.hacs.localize("my.repository_not_found",{repository:e}));try{await d(this.hass,e,o.category),this.hacs.repositories=await p(this.hass),t=this.hacs.repositories.find((t=>t.full_name.toLocaleLowerCase()===e.toLocaleLowerCase()))}catch(t){return void(this._error=t)}}t?this._fetchRepository(String(t.id)):this._error=this.hacs.localize("my.repository_not_found",{repository:e})}else{const t=this.route.path.indexOf("/",1),o=this.route.path.substr(t+1);if(!o)return void(this._error="Missing repositoryId from route");this._fetchRepository(o)}}},{kind:"method",key:"updated",value:function(t){a(i(r.prototype),"updated",this).call(this,t),t.has("repositories")&&this._repository&&this._fetchRepository()}},{kind:"method",key:"_fetchRepository",value:async function(t){try{this._repository=await j(this.hass,t||String(this._repository.id))}catch(t){this._error=null==t?void 0:t.message}}},{kind:"field",key:"_getAuthors",value:()=>u((t=>{const o=[];if(!t.authors)return o;if(t.authors.forEach((t=>o.push(t.replace("@","")))),0===o.length){const e=t.full_name.split("/")[0];if(["custom-cards","custom-components","home-assistant-community-themes"].includes(e))return o;o.push(e)}return o}))},{kind:"method",key:"render",value:function(){if(this._error)return s`<hass-error-screen .error=${this._error}></hass-error-screen>`;if(!this._repository)return s`<hass-loading-screen></hass-loading-screen>`;const t=this._getAuthors(this._repository);return s`
      <hass-subpage
        .hass=${this.hass}
        .narrow=${this.narrow}
        .route=${this.route}
        .header=${this._repository.name}
        hasFab
      >
        <ha-icon-overflow-menu
          .hass=${this.hass}
          slot="toolbar-icon"
          narrow
          .items=${$(this,this._repository)}
        >
        </ha-icon-overflow-menu>
        <div class="content">
          <div class="chips">
            ${this._repository.installed?s`
                  <ha-chip title="${this.hacs.localize("dialog_info.version_installed")}" hasIcon>
                    <ha-svg-icon slot="icon" .path=${f}></ha-svg-icon>
                    ${this._repository.installed_version}
                  </ha-chip>
                `:""}
            ${t?t.map((t=>s`<hacs-link .url="https://github.com/${t}">
                    <ha-chip title="${this.hacs.localize("dialog_info.author")}" hasIcon>
                      <ha-svg-icon slot="icon" .path=${v}></ha-svg-icon>
                      @${t}
                    </ha-chip>
                  </hacs-link>`)):""}
            ${this._repository.downloads?s` <ha-chip hasIcon title="${this.hacs.localize("dialog_info.downloads")}">
                  <ha-svg-icon slot="icon" .path=${y}></ha-svg-icon>
                  ${this._repository.downloads}
                </ha-chip>`:""}
            <ha-chip title="${this.hacs.localize("dialog_info.stars")}" hasIcon>
              <ha-svg-icon slot="icon" .path=${b}></ha-svg-icon>
              ${this._repository.stars}
            </ha-chip>
            <hacs-link .url="https://github.com/${this._repository.full_name}/issues">
              <ha-chip title="${this.hacs.localize("dialog_info.open_issues")}" hasIcon>
                <ha-svg-icon slot="icon" .path=${m}></ha-svg-icon>
                ${this._repository.issues}
              </ha-chip>
            </hacs-link>
          </div>
          ${L.html(this._repository.additional_info||this.hacs.localize("dialog_info.no_info"),this._repository)}
        </div>
        ${this._repository.installed_version?"":s`<ha-fab
              .label=${this.hacs.localize("common.download")}
              .extended=${!this.narrow}
              @click=${this._downloadRepositoryDialog}
            >
              <ha-svg-icon slot="icon" .path=${k}></ha-svg-icon>
            </ha-fab>`}
      </hass-subpage>
    `}},{kind:"method",key:"_downloadRepositoryDialog",value:function(){this.dispatchEvent(new CustomEvent("hacs-dialog",{detail:{type:"download",repository:this._repository.id},bubbles:!0,composed:!0}))}},{kind:"get",static:!0,key:"styles",value:function(){return[g,n`
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
      `]}}]}}),o);export{C as HacsRepositoryPanel};
