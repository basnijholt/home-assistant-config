import{K as t,L as e,J as i,F as s,O as n,a as o,f as a,e as l,t as r,$ as d,dY as h,j as c,r as m,n as u,h as p,W as f,I as v}from"./main-f3e781b1.js";import{r as g,b as _,c as y,u as b,m as k,d as $}from"./c.3dc7ab21.js";import"./c.c2b18de6.js";import{c as w}from"./c.0a038163.js";import{M as A}from"./c.928461f0.js";import{i as C,u as x,r as I,b as j}from"./c.2b092eff.js";import{a as z,s as O}from"./c.ecc9713e.js";import"./c.fb46b4a0.js";import"./c.74dbf101.js";import"./c.9f27b448.js";import"./c.0083326c.js";import"./c.c4dc5ba3.js";import"./c.f1b17fae.js";import"./c.c9bcea67.js";import"./c.7ae69098.js";import"./c.3f18632e.js";import"./c.4c7d1a78.js";import"./c.9a62bd84.js";import"./c.30e53b1f.js";import"./c.02cb8bae.js";import"./c.549fa845.js";import"./c.6f86bede.js";import"./c.e6514d94.js";import"./c.5c703026.js";const S=(t,e)=>{var i,s;const n=t._$AN;if(void 0===n)return!1;for(const t of n)null===(s=(i=t)._$AO)||void 0===s||s.call(i,e,!1),S(t,e);return!0},D=t=>{let e,i;do{if(void 0===(e=t._$AM))break;i=e._$AN,i.delete(t),t=e}while(0===(null==i?void 0:i.size))},N=t=>{for(let e;e=t._$AM;t=e){let i=e._$AN;if(void 0===i)e._$AN=i=new Set;else if(i.has(t))break;i.add(t),U(e)}};function F(t){void 0!==this._$AN?(D(this),this._$AM=t,N(this)):this._$AM=t}function M(t,e=!1,i=0){const s=this._$AH,n=this._$AN;if(void 0!==n&&0!==n.size)if(e)if(Array.isArray(s))for(let t=i;t<s.length;t++)S(s[t],!1),D(s[t]);else null!=s&&(S(s,!1),D(s));else S(this,t)}const U=t=>{var i,s,n,o;t.type==e.CHILD&&(null!==(i=(n=t)._$AP)&&void 0!==i||(n._$AP=M),null!==(s=(o=t)._$AQ)&&void 0!==s||(o._$AQ=F))};class E extends t{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,i){super._$AT(t,e,i),N(this),this.isConnected=t._$AU}_$AO(t,e=!0){var i,s;t!==this.isConnected&&(this.isConnected=t,t?null===(i=this.reconnected)||void 0===i||i.call(this):null===(s=this.disconnected)||void 0===s||s.call(this)),e&&(S(this,t),D(this))}setValue(t){if(g(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}const P=new WeakMap;let H=0;const L=new Map,K=new WeakSet,W=()=>new Promise((t=>requestAnimationFrame(t))),R=(t,e)=>{const i=t-e;return 0===i?void 0:i},T=(t,e)=>{const i=t/e;return 1===i?void 0:i},Y={left:(t,e)=>{const i=R(t,e);return{value:i,transform:i&&`translateX(${i}px)`}},top:(t,e)=>{const i=R(t,e);return{value:i,transform:i&&`translateY(${i}px)`}},width:(t,e)=>{const i=T(t,e);return{value:i,transform:i&&`scaleX(${i})`}},height:(t,e)=>{const i=T(t,e);return{value:i,transform:i&&`scaleY(${i})`}}},B={duration:333,easing:"ease-in-out"},Q=["left","top","width","height","opacity","color","background"],X=new WeakMap;const q=i(class extends E{constructor(t){if(super(t),this.t=null,this.i=null,this.o=!0,this.shouldLog=!1,t.type===e.CHILD)throw Error("The `animate` directive must be used in attribute position.");this.createFinished()}createFinished(){var t;null===(t=this.resolveFinished)||void 0===t||t.call(this),this.finished=new Promise((t=>{this.h=t}))}async resolveFinished(){var t;null===(t=this.h)||void 0===t||t.call(this),this.h=void 0}render(t){return s}getController(){return P.get(this.l)}isDisabled(){var t;return this.options.disabled||(null===(t=this.getController())||void 0===t?void 0:t.disabled)}update(t,[e]){var i;const s=void 0===this.l;return s&&(this.l=null===(i=t.options)||void 0===i?void 0:i.host,this.l.addController(this),this.element=t.element,X.set(this.element,this)),this.optionsOrCallback=e,(s||"function"!=typeof e)&&this.u(e),this.render(e)}u(t){var e,i;t=null!=t?t:{};const s=this.getController();void 0!==s&&((t={...s.defaultOptions,...t}).keyframeOptions={...s.defaultOptions.keyframeOptions,...t.keyframeOptions}),null!==(e=(i=t).properties)&&void 0!==e||(i.properties=Q),this.options=t}v(){const t={},e=this.element.getBoundingClientRect(),i=getComputedStyle(this.element);return this.options.properties.forEach((s=>{var n;const o=null!==(n=e[s])&&void 0!==n?n:Y[s]?void 0:i[s],a=Number(o);t[s]=isNaN(a)?o+"":a})),t}p(){let t,e=!0;return this.options.guard&&(t=this.options.guard(),e=((t,e)=>{if(Array.isArray(t)){if(Array.isArray(e)&&e.length===t.length&&t.every(((t,i)=>t===e[i])))return!1}else if(e===t)return!1;return!0})(t,this.m)),this.o=this.l.hasUpdated&&!this.isDisabled()&&!this.isAnimating()&&e&&this.element.isConnected,this.o&&(this.m=Array.isArray(t)?Array.from(t):t),this.o}hostUpdate(){var t;"function"==typeof this.optionsOrCallback&&this.u(this.optionsOrCallback()),this.p()&&(this.g=this.v(),this.t=null!==(t=this.t)&&void 0!==t?t:this.element.parentNode,this.i=this.element.nextSibling)}async hostUpdated(){if(!this.o||!this.element.isConnected||this.options.skipInitial&&!this.isHostRendered)return;let t;this.prepare(),await W;const e=this.A(),i=this._(this.options.keyframeOptions,e),s=this.v();if(void 0!==this.g){const{from:i,to:n}=this.j(this.g,s,e);this.log("measured",[this.g,s,i,n]),t=this.calculateKeyframes(i,n)}else{const i=L.get(this.options.inId);if(i){L.delete(this.options.inId);const{from:n,to:o}=this.j(i,s,e);t=this.calculateKeyframes(n,o),t=this.options.in?[{...this.options.in[0],...t[0]},...this.options.in.slice(1),t[1]]:t,H++,t.forEach((t=>t.zIndex=H))}else this.options.in&&(t=[...this.options.in,{}])}this.animate(t,i)}resetStyles(){var t;void 0!==this.S&&(this.element.setAttribute("style",null!==(t=this.S)&&void 0!==t?t:""),this.S=void 0)}commitStyles(){var t,e;this.S=this.element.getAttribute("style"),null===(t=this.webAnimation)||void 0===t||t.commitStyles(),null===(e=this.webAnimation)||void 0===e||e.cancel()}reconnected(){}async disconnected(){var t;if(!this.o)return;if(void 0!==this.options.id&&L.set(this.options.id,this.g),void 0===this.options.out)return;if(this.prepare(),await W(),null===(t=this.t)||void 0===t?void 0:t.isConnected){const t=this.i&&this.i.parentNode===this.t?this.i:null;if(this.t.insertBefore(this.element,t),this.options.stabilizeOut){const t=this.v();this.log("stabilizing out");const e=this.g.left-t.left,i=this.g.top-t.top;!("static"===getComputedStyle(this.element).position)||0===e&&0===i||(this.element.style.position="relative"),0!==e&&(this.element.style.left=e+"px"),0!==i&&(this.element.style.top=i+"px")}}const e=this._(this.options.keyframeOptions);await this.animate(this.options.out,e),this.element.remove()}prepare(){this.createFinished()}start(){var t,e;null===(e=(t=this.options).onStart)||void 0===e||e.call(t,this)}didFinish(t){var e,i;t&&(null===(i=(e=this.options).onComplete)||void 0===i||i.call(e,this)),this.g=void 0,this.animatingProperties=void 0,this.frames=void 0,this.resolveFinished()}A(){const t=[];for(let e=this.element.parentNode;e;e=null==e?void 0:e.parentNode){const i=X.get(e);i&&!i.isDisabled()&&i&&t.push(i)}return t}get isHostRendered(){const t=K.has(this.l);return t||this.l.updateComplete.then((()=>{K.add(this.l)})),t}_(t,e=this.A()){const i={...B};return e.forEach((t=>Object.assign(i,t.options.keyframeOptions))),Object.assign(i,t),i}j(t,e,i){t={...t},e={...e};const s=i.map((t=>t.animatingProperties)).filter((t=>void 0!==t));let n=1,o=1;return void 0!==s&&(s.forEach((t=>{t.width&&(n/=t.width),t.height&&(o/=t.height)})),void 0!==t.left&&void 0!==e.left&&(t.left=n*t.left,e.left=n*e.left),void 0!==t.top&&void 0!==e.top&&(t.top=o*t.top,e.top=o*e.top)),{from:t,to:e}}calculateKeyframes(t,e,i=!1){var s;const n={},o={};let a=!1;const l={};for(const i in e){const r=t[i],d=e[i];if(i in Y){const t=Y[i];if(void 0===r||void 0===d)continue;const e=t(r,d);void 0!==e.transform&&(l[i]=e.value,a=!0,n.transform=`${null!==(s=n.transform)&&void 0!==s?s:""} ${e.transform}`)}else r!==d&&void 0!==r&&void 0!==d&&(a=!0,n[i]=r,o[i]=d)}return n.transformOrigin=o.transformOrigin=i?"center center":"top left",this.animatingProperties=l,a?[n,o]:void 0}async animate(t,e=this.options.keyframeOptions){this.start(),this.frames=t;let i=!1;if(!this.isAnimating()&&!this.isDisabled()&&(this.options.onFrames&&(this.frames=t=this.options.onFrames(this),this.log("modified frames",t)),void 0!==t)){this.log("animate",[t,e]),i=!0,this.webAnimation=this.element.animate(t,e);const s=this.getController();null==s||s.add(this);try{await this.webAnimation.finished}catch(t){}null==s||s.remove(this)}return this.didFinish(i),i}isAnimating(){var t,e;return"running"===(null===(t=this.webAnimation)||void 0===t?void 0:t.playState)||(null===(e=this.webAnimation)||void 0===e?void 0:e.pending)}log(t,e){this.shouldLog&&!this.isDisabled()&&console.log(t,this.options.id,e)}}),J=(t,e,i)=>{const s=new Map;for(let n=e;n<=i;n++)s.set(t[n],n);return s},V=i(class extends t{constructor(t){if(super(t),t.type!==e.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,e,i){let s;void 0===i?i=e:void 0!==e&&(s=e);const n=[],o=[];let a=0;for(const e of t)n[a]=s?s(e,a):a,o[a]=i(e,a),a++;return{values:o,keys:n}}render(t,e,i){return this.dt(t,e,i).values}update(t,[e,i,s]){var o;const a=_(t),{values:l,keys:r}=this.dt(e,i,s);if(!Array.isArray(a))return this.at=r,l;const d=null!==(o=this.at)&&void 0!==o?o:this.at=[],h=[];let c,m,u=0,p=a.length-1,f=0,v=l.length-1;for(;u<=p&&f<=v;)if(null===a[u])u++;else if(null===a[p])p--;else if(d[u]===r[f])h[f]=y(a[u],l[f]),u++,f++;else if(d[p]===r[v])h[v]=y(a[p],l[v]),p--,v--;else if(d[u]===r[v])h[v]=y(a[u],l[v]),b(t,h[v+1],a[u]),u++,v--;else if(d[p]===r[f])h[f]=y(a[p],l[f]),b(t,a[u],a[p]),p--,f++;else if(void 0===c&&(c=J(r,f,v),m=J(d,u,p)),c.has(d[u]))if(c.has(d[p])){const e=m.get(r[f]),i=void 0!==e?a[e]:null;if(null===i){const e=b(t,a[u]);y(e,l[f]),h[f]=e}else h[f]=y(i,l[f]),b(t,a[u],i),a[e]=null;f++}else k(a[p]),p--;else k(a[u]),u++;for(;f<=v;){const e=b(t,h[v+1]);y(e,l[f]),h[f++]=e}for(;u<=p;){const t=a[u++];null!==t&&k(t)}return this.at=r,$(t,h),n}});o([u("ha-media-upload-button")],(function(t,e){return{F:class extends e{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[l({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[l()],key:"currentItem",value:void 0},{kind:"field",decorators:[r()],key:"_uploading",value:()=>0},{kind:"method",key:"render",value:function(){return this.currentItem&&C(this.currentItem.media_content_id||"")?d`
      <mwc-button
        .label=${this._uploading>0?this.hass.localize("ui.components.media-browser.file_management.uploading",{count:this._uploading}):this.hass.localize("ui.components.media-browser.file_management.add_media")}
        .disabled=${this._uploading>0}
        @click=${this._startUpload}
      >
        ${this._uploading>0?d`
              <ha-circular-progress
                size="tiny"
                active
                alt=""
                slot="icon"
              ></ha-circular-progress>
            `:d` <ha-svg-icon .path=${h} slot="icon"></ha-svg-icon> `}
      </mwc-button>
    `:d``}},{kind:"method",key:"_startUpload",value:async function(){if(this._uploading>0)return;const t=document.createElement("input");t.type="file",t.accept="audio/*,video/*,image/*",t.multiple=!0,t.addEventListener("change",(async()=>{c(this,"uploading");const e=t.files;document.body.removeChild(t);const i=this.currentItem.media_content_id;for(let t=0;t<e.length;t++){this._uploading=e.length-t;try{await x(this.hass,i,e[t])}catch(t){z(this,{text:this.hass.localize("ui.components.media-browser.file_management.upload_failed",{reason:t.message||t})});break}}this._uploading=0,c(this,"media-refresh")}),{once:!0}),t.style.display="none",document.body.append(t),t.click()}},{kind:"field",static:!0,key:"styles",value:()=>m`
    mwc-button {
      /* We use icon + text to show disabled state */
      --mdc-button-disabled-ink-color: --mdc-theme-primary;
    }

    ha-svg-icon[slot="icon"],
    ha-circular-progress[slot="icon"] {
      vertical-align: middle;
    }
  `}]}}),a),o([u("dialog-media-manage")],(function(t,e){return{F:class extends e{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[l({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[r()],key:"_currentItem",value:void 0},{kind:"field",decorators:[r()],key:"_params",value:void 0},{kind:"field",decorators:[r()],key:"_uploading",value:()=>!1},{kind:"field",decorators:[r()],key:"_deleting",value:()=>!1},{kind:"field",decorators:[r()],key:"_selected",value:()=>new Set},{kind:"field",key:"_filesChanged",value:()=>!1},{kind:"method",key:"showDialog",value:function(t){this._params=t,this._refreshMedia()}},{kind:"method",key:"closeDialog",value:function(){this._filesChanged&&this._params.onClose&&this._params.onClose(),this._params=void 0,this._currentItem=void 0,this._uploading=!1,this._deleting=!1,this._filesChanged=!1,c(this,"dialog-closed",{dialog:this.localName})}},{kind:"method",key:"render",value:function(){var t,e,i,s;if(!this._params)return d``;const n=(null===(t=this._currentItem)||void 0===t||null===(e=t.children)||void 0===e?void 0:e.filter((t=>!t.can_expand)))||[];let o=0;return d`
      <ha-dialog
        open
        scrimClickAction
        escapeKeyAction
        hideActions
        flexContent
        .heading=${this._params.currentItem.title}
        @closed=${this.closeDialog}
      >
        <ha-header-bar slot="heading">
          ${0===this._selected.size?d`
                <span slot="title">
                  ${this.hass.localize("ui.components.media-browser.file_management.title")}
                </span>

                <ha-media-upload-button
                  .disabled=${this._deleting}
                  .hass=${this.hass}
                  .currentItem=${this._params.currentItem}
                  @uploading=${this._startUploading}
                  @media-refresh=${this._doneUploading}
                  slot="actionItems"
                ></ha-media-upload-button>
                ${this._uploading?"":d`
                      <ha-icon-button
                        .label=${this.hass.localize("ui.dialogs.generic.close")}
                        .path=${p}
                        dialogAction="close"
                        slot="actionItems"
                        class="header_button"
                        dir=${w(this.hass)}
                      ></ha-icon-button>
                    `}
              `:d`
                <mwc-button
                  class="danger"
                  slot="title"
                  .disabled=${this._deleting}
                  .label=${this.hass.localize("ui.components.media-browser.file_management."+(this._deleting?"deleting":"delete"),{count:this._selected.size})}
                  @click=${this._handleDelete}
                >
                  <ha-svg-icon .path=${f} slot="icon"></ha-svg-icon>
                </mwc-button>

                ${this._deleting?"":d`
                      <mwc-button
                        slot="actionItems"
                        .label=${"Deselect all"}
                        @click=${this._handleDeselectAll}
                      >
                        <ha-svg-icon
                          .path=${p}
                          slot="icon"
                        ></ha-svg-icon>
                      </mwc-button>
                    `}
              `}
        </ha-header-bar>
        ${this._currentItem?n.length?d`
              <mwc-list multi @selected=${this._handleSelected}>
                ${V(n,(t=>t.media_content_id),(t=>{const e=d`
                      <ha-svg-icon
                        slot="graphic"
                        .path=${A["directory"===t.media_class&&t.children_media_class||t.media_class].icon}
                      ></ha-svg-icon>
                    `;return d`
                      <ha-check-list-item
                        ${q({id:t.media_content_id,skipInitial:!0})}
                        graphic="icon"
                        .disabled=${this._uploading||this._deleting}
                        .selected=${this._selected.has(o++)}
                        .item=${t}
                      >
                        ${e} ${t.title}
                      </ha-check-list-item>
                    `}))}
              </mwc-list>
            `:d`<div class="no-items">
              <p>
                ${this.hass.localize("ui.components.media-browser.file_management.no_items")}
              </p>
              ${null!==(i=this._currentItem)&&void 0!==i&&null!==(s=i.children)&&void 0!==s&&s.length?d`<span class="folders"
                    >${this.hass.localize("ui.components.media-browser.file_management.folders_not_supported")}</span
                  >`:""}
            </div>`:d`
              <div class="refresh">
                <ha-circular-progress active></ha-circular-progress>
              </div>
            `}
      </ha-dialog>
    `}},{kind:"method",key:"_handleSelected",value:function(t){this._selected=t.detail.index}},{kind:"method",key:"_startUploading",value:function(){this._uploading=!0,this._filesChanged=!0}},{kind:"method",key:"_doneUploading",value:function(){this._uploading=!1,this._refreshMedia()}},{kind:"method",key:"_handleDeselectAll",value:function(){this._selected.size&&(this._selected=new Set)}},{kind:"method",key:"_handleDelete",value:async function(){if(!await O(this,{text:this.hass.localize("ui.components.media-browser.file_management.confirm_delete",{count:this._selected.size}),warning:!0}))return;this._filesChanged=!0,this._deleting=!0;const t=[];let e=0;this._currentItem.children.forEach((i=>{i.can_expand||this._selected.has(e++)&&t.push(i)}));try{await Promise.all(t.map((async t=>{await I(this.hass,t.media_content_id),this._currentItem={...this._currentItem,children:this._currentItem.children.filter((e=>e!==t))}})))}finally{this._deleting=!1,this._selected=new Set}}},{kind:"method",key:"_refreshMedia",value:async function(){this._selected=new Set,this._currentItem=void 0,this._currentItem=await j(this.hass,this._params.currentItem.media_content_id)}},{kind:"get",static:!0,key:"styles",value:function(){return[v,m`
        ha-dialog {
          --dialog-z-index: 8;
          --dialog-content-padding: 0;
        }

        @media (min-width: 800px) {
          ha-dialog {
            --mdc-dialog-max-width: 800px;
            --dialog-surface-position: fixed;
            --dialog-surface-top: 40px;
            --mdc-dialog-max-height: calc(100vh - 72px);
          }
        }

        ha-header-bar {
          --mdc-theme-on-primary: var(--primary-text-color);
          --mdc-theme-primary: var(--mdc-theme-surface);
          flex-shrink: 0;
          border-bottom: 1px solid var(--divider-color, rgba(0, 0, 0, 0.12));
        }

        ha-media-upload-button,
        mwc-button {
          --mdc-theme-primary: var(--mdc-theme-on-primary);
        }

        .danger {
          --mdc-theme-primary: var(--error-color);
        }

        ha-svg-icon[slot="icon"] {
          vertical-align: middle;
        }

        .refresh {
          display: flex;
          height: 200px;
          justify-content: center;
          align-items: center;
        }

        .no-items {
          text-align: center;
          padding: 16px;
        }
        .folders {
          color: var(--secondary-text-color);
          font-style: italic;
        }
      `]}}]}}),a);
