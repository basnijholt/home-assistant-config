import{_ as t,j as e,y as i,Y as a,d as o,n as r,e as s,t as n,E as d,G as c,a5 as l,O as p,eW as h,i as m,k as u,a$ as g,ba as _,eX as b,C as f,ac as v,aJ as y,eY as x,eZ as w,a4 as k,a8 as $}from"./main-aeda8d41.js";import{b as z}from"./c.0a5b0403.js";import"./c.8311c493.js";import{L as I}from"./c.5d5144b9.js";import{B as S,d as O,a as j}from"./c.10b44dbb.js";import"./c.5b67e4be.js";import{c as C}from"./c.65594b2e.js";import{a as D,d as M}from"./c.aa335625.js";import{i as T}from"./c.704dab74.js";import{M as R,B as E,b as L}from"./c.fcb597b7.js";import{a as H}from"./c.84db2bcc.js";import{i as P}from"./c.b0145069.js";import{i as A,b as U,e as W}from"./c.07e395f8.js";import{d as B}from"./c.4f015773.js";import"./c.a22978cb.js";import"./c.4c22daf7.js";import"./c.714b021e.js";import{c as F}from"./c.874c8cfd.js";import{t as G}from"./c.a0946910.js";import"./c.652c55f6.js";function N(t){return"horizontal"===t?"row":"column"}t([r("ha-header-bar")],(function(t,e){return{F:class extends e{constructor(...e){super(...e),t(this)}},d:[{kind:"method",key:"render",value:function(){return i`<header class="mdc-top-app-bar">
      <div class="mdc-top-app-bar__row">
        <section
          class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start"
          id="navigation"
        >
          <slot name="navigationIcon"></slot>
          <span class="mdc-top-app-bar__title">
            <slot name="title"></slot>
          </span>
        </section>
        <section
          class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end"
          id="actions"
          role="toolbar"
        >
          <slot name="actionItems"></slot>
        </section>
      </div>
    </header>`}},{kind:"get",static:!0,key:"styles",value:function(){return[a("/**\n * @license\n * Copyright Google LLC All Rights Reserved.\n *\n * Use of this source code is governed by an MIT-style license that can be\n * found in the LICENSE file at https://github.com/material-components/material-components-web/blob/master/LICENSE\n */\n.mdc-top-app-bar{background-color:#6200ee;background-color:var(--mdc-theme-primary, #6200ee);color:white;display:flex;position:fixed;flex-direction:column;justify-content:space-between;box-sizing:border-box;width:100%;z-index:4}.mdc-top-app-bar .mdc-top-app-bar__action-item,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon{color:#fff;color:var(--mdc-theme-on-primary, #fff)}.mdc-top-app-bar .mdc-top-app-bar__action-item::before,.mdc-top-app-bar .mdc-top-app-bar__action-item::after,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon::before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon::after{background-color:#fff;background-color:var(--mdc-ripple-color, var(--mdc-theme-on-primary, #fff))}.mdc-top-app-bar .mdc-top-app-bar__action-item:hover::before,.mdc-top-app-bar .mdc-top-app-bar__action-item.mdc-ripple-surface--hover::before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:hover::before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon.mdc-ripple-surface--hover::before{opacity:0.08;opacity:var(--mdc-ripple-hover-opacity, 0.08)}.mdc-top-app-bar .mdc-top-app-bar__action-item.mdc-ripple-upgraded--background-focused::before,.mdc-top-app-bar .mdc-top-app-bar__action-item:not(.mdc-ripple-upgraded):focus::before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon.mdc-ripple-upgraded--background-focused::before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-top-app-bar .mdc-top-app-bar__action-item:not(.mdc-ripple-upgraded)::after,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-top-app-bar .mdc-top-app-bar__action-item:not(.mdc-ripple-upgraded):active::after,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-top-app-bar .mdc-top-app-bar__action-item.mdc-ripple-upgraded,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-top-app-bar__row{display:flex;position:relative;box-sizing:border-box;width:100%;height:64px}.mdc-top-app-bar__section{display:inline-flex;flex:1 1 auto;align-items:center;min-width:0;padding:8px 12px;z-index:1}.mdc-top-app-bar__section--align-start{justify-content:flex-start;order:-1}.mdc-top-app-bar__section--align-end{justify-content:flex-end;order:1}.mdc-top-app-bar__title{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-headline6-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1.25rem;font-size:var(--mdc-typography-headline6-font-size, 1.25rem);line-height:2rem;line-height:var(--mdc-typography-headline6-line-height, 2rem);font-weight:500;font-weight:var(--mdc-typography-headline6-font-weight, 500);letter-spacing:0.0125em;letter-spacing:var(--mdc-typography-headline6-letter-spacing, 0.0125em);text-decoration:inherit;-webkit-text-decoration:var(--mdc-typography-headline6-text-decoration, inherit);text-decoration:var(--mdc-typography-headline6-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-headline6-text-transform, inherit);padding-left:20px;padding-right:0;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;z-index:1}[dir=rtl] .mdc-top-app-bar__title,.mdc-top-app-bar__title[dir=rtl]{padding-left:0;padding-right:20px}.mdc-top-app-bar--short-collapsed{border-top-left-radius:0;border-top-right-radius:0;border-bottom-right-radius:24px;border-bottom-left-radius:0}[dir=rtl] .mdc-top-app-bar--short-collapsed,.mdc-top-app-bar--short-collapsed[dir=rtl]{border-top-left-radius:0;border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:24px}.mdc-top-app-bar--short{top:0;right:auto;left:0;width:100%;transition:width 250ms cubic-bezier(0.4, 0, 0.2, 1)}[dir=rtl] .mdc-top-app-bar--short,.mdc-top-app-bar--short[dir=rtl]{right:0;left:auto}.mdc-top-app-bar--short .mdc-top-app-bar__row{height:56px}.mdc-top-app-bar--short .mdc-top-app-bar__section{padding:4px}.mdc-top-app-bar--short .mdc-top-app-bar__title{transition:opacity 200ms cubic-bezier(0.4, 0, 0.2, 1);opacity:1}.mdc-top-app-bar--short-collapsed{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12);width:56px;transition:width 300ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-top-app-bar--short-collapsed .mdc-top-app-bar__title{display:none}.mdc-top-app-bar--short-collapsed .mdc-top-app-bar__action-item{transition:padding 150ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item{width:112px}.mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item .mdc-top-app-bar__section--align-end{padding-left:0;padding-right:12px}[dir=rtl] .mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item .mdc-top-app-bar__section--align-end,.mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item .mdc-top-app-bar__section--align-end[dir=rtl]{padding-left:12px;padding-right:0}.mdc-top-app-bar--dense .mdc-top-app-bar__row{height:48px}.mdc-top-app-bar--dense .mdc-top-app-bar__section{padding:0 4px}.mdc-top-app-bar--dense .mdc-top-app-bar__title{padding-left:12px;padding-right:0}[dir=rtl] .mdc-top-app-bar--dense .mdc-top-app-bar__title,.mdc-top-app-bar--dense .mdc-top-app-bar__title[dir=rtl]{padding-left:0;padding-right:12px}.mdc-top-app-bar--prominent .mdc-top-app-bar__row{height:128px}.mdc-top-app-bar--prominent .mdc-top-app-bar__title{align-self:flex-end;padding-bottom:2px}.mdc-top-app-bar--prominent .mdc-top-app-bar__action-item,.mdc-top-app-bar--prominent .mdc-top-app-bar__navigation-icon{align-self:flex-start}.mdc-top-app-bar--fixed{transition:box-shadow 200ms linear}.mdc-top-app-bar--fixed-scrolled{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12);transition:box-shadow 200ms linear}.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__row{height:96px}.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__section{padding:0 12px}.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__title{padding-left:20px;padding-right:0;padding-bottom:9px}[dir=rtl] .mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__title,.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__title[dir=rtl]{padding-left:0;padding-right:20px}.mdc-top-app-bar--fixed-adjust{padding-top:64px}.mdc-top-app-bar--dense-fixed-adjust{padding-top:48px}.mdc-top-app-bar--short-fixed-adjust{padding-top:56px}.mdc-top-app-bar--prominent-fixed-adjust{padding-top:128px}.mdc-top-app-bar--dense-prominent-fixed-adjust{padding-top:96px}@media(max-width: 599px){.mdc-top-app-bar__row{height:56px}.mdc-top-app-bar__section{padding:4px}.mdc-top-app-bar--short{transition:width 200ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-top-app-bar--short-collapsed{transition:width 250ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-top-app-bar--short-collapsed .mdc-top-app-bar__section--align-end{padding-left:0;padding-right:12px}[dir=rtl] .mdc-top-app-bar--short-collapsed .mdc-top-app-bar__section--align-end,.mdc-top-app-bar--short-collapsed .mdc-top-app-bar__section--align-end[dir=rtl]{padding-left:12px;padding-right:0}.mdc-top-app-bar--prominent .mdc-top-app-bar__title{padding-bottom:6px}.mdc-top-app-bar--fixed-adjust{padding-top:56px}}\n\n/*# sourceMappingURL=mdc.top-app-bar.min.css.map*/"),o`
        .mdc-top-app-bar {
          position: static;
          color: var(--mdc-theme-on-primary, #fff);
        }
      `]}}]}}),e);class q extends S{constructor(){super(...arguments),this._itemSize={},this._gaps={},this._padding={}}get _defaultConfig(){return Object.assign({},super._defaultConfig,{itemSize:{width:"300px",height:"300px"},gap:"8px",padding:"match-gap"})}get _gap(){return this._gaps.row}get _idealSize(){return this._itemSize[O(this.direction)]}get _idealSize1(){return this._itemSize[O(this.direction)]}get _idealSize2(){return this._itemSize[j(this.direction)]}get _gap1(){return this._gaps[(t=this.direction,"horizontal"===t?"column":"row")];var t}get _gap2(){return this._gaps[N(this.direction)]}get _padding1(){const t=this._padding,[e,i]="horizontal"===this.direction?["left","right"]:["top","bottom"];return[t[e],t[i]]}get _padding2(){const t=this._padding,[e,i]="horizontal"===this.direction?["top","bottom"]:["left","right"];return[t[e],t[i]]}set itemSize(t){const e=this._itemSize,i=parseInt(t.width),a=parseInt(t.height);i!==e.width&&(e.width=i,this._triggerReflow()),a!==e.height&&(e.height=a,this._triggerReflow())}_setGap(t){const e=t.split(" ").map((t=>function(t){return"auto"===t?1/0:parseInt(t)}(t))),i=this._gaps;e[0]!==i.row&&(i.row=e[0],this._triggerReflow()),void 0===e[1]?e[0]!==i.column&&(i.column=e[0],this._triggerReflow()):e[1]!==i.column&&(i.column=e[1],this._triggerReflow())}set padding(t){const e=this._padding,i=t.split(" ").map((t=>function(t){return"match-gap"===t?1/0:parseInt(t)}(t)));1===i.length?e.top=e.right=e.bottom=e.left=i[0]:2===i.length?(e.top=e.bottom=i[0],e.right=e.left=i[1]):3===i.length?(e.top=i[0],e.right=e.left=i[1],e.bottom=i[2]):4===i.length&&["top","right","bottom","left"].forEach(((t,a)=>e[t]=i[a]))}}class Y extends q{constructor(){super(...arguments),this._metrics=null,this.flex=null,this.justify=null}get _defaultConfig(){return Object.assign({},super._defaultConfig,{flex:!1,justify:"start"})}set gap(t){this._setGap(t)}_updateLayout(){const t=this.justify,[e,i]=this._padding1,[a,o]=this._padding2;["_gap1","_gap2"].forEach((e=>{const i=this[e];if(i===1/0&&!["space-between","space-around","space-evenly"].includes(t))throw new Error("grid layout: gap can only be set to 'auto' when justify is set to 'space-between', 'space-around' or 'space-evenly'");if(i===1/0&&"_gap2"===e)throw new Error(`grid layout: ${N(this.direction)}-gap cannot be set to 'auto' when direction is set to ${this.direction}`)}));const r={rolumns:-1,itemSize1:-1,itemSize2:-1,gap1:this._gap1===1/0?-1:this._gap1,gap2:this._gap2,padding1:{start:e===1/0?this._gap1:e,end:i===1/0?this._gap1:i},padding2:{start:a===1/0?this._gap2:a,end:o===1/0?this._gap2:o},positions:[]};let s=this._viewDim2;this.flex||["start","center","end"].includes(t)?(s-=r.padding2.start,s-=r.padding2.end):"space-between"===t?s+=r.gap2:"space-evenly"===t&&(s-=r.gap2);const n=s/(this._idealSize2+r.gap2);if(this.flex){r.rolumns=Math.round(n),r.itemSize2=Math.round((s-r.gap2*(r.rolumns-1))/r.rolumns);switch(!0===this.flex?"area":this.flex.preserve){case"aspect-ratio":r.itemSize1=Math.round(this._idealSize1/this._idealSize2*r.itemSize2);break;case O(this.direction):r.itemSize1=Math.round(this._idealSize1);break;default:r.itemSize1=Math.round(this._idealSize1*this._idealSize2/r.itemSize2)}}else r.itemSize1=this._idealSize1,r.itemSize2=this._idealSize2,r.rolumns=Math.floor(n);let d,c;if(this.flex||["start","center","end"].includes(t)){const e=r.rolumns*r.itemSize2+(r.rolumns-1)*r.gap2;d=this.flex||"start"===t?r.padding2.start:"end"===t?this._viewDim2-r.padding2.end-e:Math.round(this._viewDim2/2-e/2),c=r.gap2}else{const a=s-r.rolumns*r.itemSize2;"space-between"===t?(c=Math.round(a/(r.rolumns-1)),d=0):"space-around"===t?(c=Math.round(a/r.rolumns),d=Math.round(c/2)):(c=Math.round(a/(r.rolumns+1)),d=c),this._gap1===1/0&&(r.gap1=c,e===1/0&&(r.padding1.start=d),i===1/0&&(r.padding1.end=d))}for(let t=0;t<r.rolumns;t++)r.positions.push(d),d+=r.itemSize2+c;this._metrics=r}get _delta(){return this._metrics.itemSize1+this._metrics.gap1}_getItemSize(t){return{[this._sizeDim]:this._metrics.itemSize1,[this._secondarySizeDim]:this._metrics.itemSize2}}_getActiveItems(){const{padding1:t}=this._metrics,e=Math.max(0,this._scrollPosition-this._overhang),i=Math.min(this._scrollSize,this._scrollPosition+this._viewDim1+this._overhang),a=Math.max(0,Math.floor((e-t.start)/this._delta)),o=Math.max(0,Math.ceil((i-t.start)/this._delta));this._first=a*this._metrics.rolumns,this._last=Math.min(o*this._metrics.rolumns-1,this._totalItems-1),this._physicalMin=t.start+this._delta*a,this._physicalMax=t.start+this._delta*o}_getItemPosition(t){const{rolumns:e,padding1:i,positions:a,itemSize1:o,itemSize2:r}=this._metrics;return{[this._positionDim]:i.start+Math.floor(t/e)*this._delta,[this._secondaryPositionDim]:a[t%e],[O(this.direction)]:o,[j(this.direction)]:r}}_updateScrollSize(){this._scrollSize=Math.max(1,Math.ceil(this._totalItems/this._metrics.rolumns)*this._delta+this._gap)}}const J=(t,e)=>t.callWS({type:"media_source/browse_media",media_content_id:e}),K=t=>t.startsWith("media-source://media_source"),V=async(t,e,i)=>{const a=new FormData;a.append("media_content_id",e),a.append("file",i);const o=await t.fetchWithAuth("/api/media_source/local_source/upload",{method:"POST",body:a});if(413===o.status)throw new Error(`Uploaded file is too large (${i.name})`);if(200!==o.status)throw new Error("Unknown error");return o.json()},X=async(t,e)=>t.callWS({type:"media_source/local_source/remove",media_content_id:e}),Z=t=>{const e=[];if(!t)return e;const i=new Set;for(const[a]of t.languages){if(i.has(a))continue;i.add(a);let t=a;if(a in G.translations)t=G.translations[a].nativeName;else{const[e,i]=a.split("-");e in G.translations&&(t=`${G.translations[e].nativeName}`,e.toLowerCase()!==i.toLowerCase()&&(t+=` (${i})`))}e.push([a,t])}return e.sort(((t,e)=>F(t[1],e[1])))},Q=(t,e,i)=>{const a=[];if(!e)return a;for(const[o,r]of e.languages)o===t&&a.push([r,"male"===r||"female"===r?i(`ui.components.media-browser.tts.gender_${r}`):r]);return a.sort(((t,e)=>F(t[1],e[1])))};t([r("ha-browse-media-tts")],(function(t,e){class a extends e{constructor(...e){super(...e),t(this)}}return{F:a,d:[{kind:"field",decorators:[s()],key:"hass",value:void 0},{kind:"field",decorators:[s()],key:"item",value:void 0},{kind:"field",decorators:[s()],key:"action",value:void 0},{kind:"field",decorators:[n()],key:"_cloudDefaultOptions",value:void 0},{kind:"field",decorators:[n()],key:"_cloudOptions",value:void 0},{kind:"field",decorators:[n()],key:"_cloudTTSInfo",value:void 0},{kind:"field",decorators:[I("cloudTtsTryMessage",!0,!1)],key:"_message",value:void 0},{kind:"method",key:"render",value:function(){var t;return i`<ha-card>
      <div class="card-content">
        <ha-textarea
          autogrow
          .label=${this.hass.localize("ui.components.media-browser.tts.message")}
          .value=${this._message||this.hass.localize("ui.components.media-browser.tts.example_message",{name:(null===(t=this.hass.user)||void 0===t?void 0:t.name)||""})}
        >
        </ha-textarea>
        ${this._cloudDefaultOptions?this._renderCloudOptions():""}
      </div>
      <div class="card-actions">
        ${!this._cloudDefaultOptions||this._cloudDefaultOptions[0]===this._cloudOptions[0]&&this._cloudDefaultOptions[1]===this._cloudOptions[1]?i`<span></span>`:i`
              <button class="link" @click=${this._storeDefaults}>
                ${this.hass.localize("ui.components.media-browser.tts.set_as_default")}
              </button>
            `}

        <mwc-button @click=${this._ttsClicked}>
          ${this.hass.localize(`ui.components.media-browser.tts.action_${this.action}`)}
        </mwc-button>
      </div>
    </ha-card> `}},{kind:"method",key:"_renderCloudOptions",value:function(){if(!this._cloudTTSInfo||!this._cloudOptions)return"";const t=this.getLanguages(this._cloudTTSInfo),e=this._cloudOptions,a=this.getSupportedGenders(e[0],this._cloudTTSInfo,this.hass.localize);return i`
      <div class="cloud-options">
        <ha-select
          fixedMenuPosition
          naturalMenuWidth
          .label=${this.hass.localize("ui.components.media-browser.tts.language")}
          .value=${e[0]}
          @selected=${this._handleLanguageChange}
          @closed=${D}
        >
          ${t.map((([t,e])=>i`<mwc-list-item .value=${t}>${e}</mwc-list-item>`))}
        </ha-select>

        <ha-select
          fixedMenuPosition
          naturalMenuWidth
          .label=${this.hass.localize("ui.components.media-browser.tts.gender")}
          .value=${e[1]}
          @selected=${this._handleGenderChange}
          @closed=${D}
        >
          ${a.map((([t,e])=>i`<mwc-list-item .value=${t}>${e}</mwc-list-item>`))}
        </ha-select>
      </div>
    `}},{kind:"method",key:"willUpdate",value:function(t){var e,i;if(d(c(a.prototype),"willUpdate",this).call(this,t),t.has("item")){if(this.item.media_content_id){const t=new URLSearchParams(this.item.media_content_id.split("?")[1]),e=t.get("message"),i=t.get("language"),a=t.get("gender");e&&(this._message=e),i&&a&&(this._cloudOptions=[i,a])}this.isCloudItem&&!this._cloudTTSInfo&&((i=this.hass,i.callWS({type:"cloud/tts/info"})).then((t=>{this._cloudTTSInfo=t})),(t=>t.callWS({type:"cloud/status"}))(this.hass).then((t=>{t.logged_in&&(this._cloudDefaultOptions=t.prefs.tts_default_voice,this._cloudOptions||(this._cloudOptions={...this._cloudDefaultOptions}))})))}if(t.has("message"))return;const o=null===(e=this.shadowRoot.querySelector("ha-textarea"))||void 0===e?void 0:e.value;void 0!==o&&o!==this._message&&(this._message=o)}},{kind:"method",key:"_handleLanguageChange",value:async function(t){t.target.value!==this._cloudOptions[0]&&(this._cloudOptions=[t.target.value,this._cloudOptions[1]])}},{kind:"method",key:"_handleGenderChange",value:async function(t){t.target.value!==this._cloudOptions[1]&&(this._cloudOptions=[this._cloudOptions[0],t.target.value])}},{kind:"field",key:"getLanguages",value:()=>l(Z)},{kind:"field",key:"getSupportedGenders",value:()=>l(Q)},{kind:"get",key:"isCloudItem",value:function(){return this.item.media_content_id.startsWith("media-source://tts/cloud")}},{kind:"method",key:"_ttsClicked",value:async function(){const t=this.shadowRoot.querySelector("ha-textarea").value;this._message=t;const e={...this.item},i=new URLSearchParams;i.append("message",t),this._cloudOptions&&(i.append("language",this._cloudOptions[0]),i.append("gender",this._cloudOptions[1])),e.media_content_id=`${e.media_content_id.split("?")[0]}?${i.toString()}`,e.can_play=!0,e.title=t,p(this,"tts-picked",{item:e})}},{kind:"method",key:"_storeDefaults",value:async function(){const t=this._cloudDefaultOptions;this._cloudDefaultOptions=[...this._cloudOptions];try{await(e=this.hass,i={tts_default_voice:this._cloudDefaultOptions},e.callWS({type:"cloud/update_prefs",...i}))}catch(e){this._cloudDefaultOptions=t,H(this,{text:this.hass.localize("ui.components.media-browser.tts.faild_to_store_defaults",{error:e.message||e})})}var e,i}},{kind:"field",static:!0,key:"styles",value:()=>[h,o`
      :host {
        margin: 16px auto;
        padding: 0 8px;
        display: flex;
        flex-direction: column;
        max-width: 400px;
      }
      .cloud-options {
        margin-top: 16px;
        display: flex;
        justify-content: space-between;
      }
      .cloud-options ha-select {
        width: 48%;
      }
      ha-textarea {
        width: 100%;
      }
      button.link {
        color: var(--primary-color);
      }
      .card-actions {
        display: flex;
        justify-content: space-between;
      }
    `]}]}}),e),t([r("ha-media-player-browse")],(function(t,e){class a extends e{constructor(...e){super(...e),t(this)}}return{F:a,d:[{kind:"field",decorators:[s({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[s()],key:"entityId",value:void 0},{kind:"field",decorators:[s()],key:"action",value:()=>"play"},{kind:"field",decorators:[s({type:Boolean})],key:"dialog",value:()=>!1},{kind:"field",decorators:[s()],key:"navigateIds",value:void 0},{kind:"field",decorators:[s({type:Boolean,attribute:"narrow",reflect:!0})],key:"_narrow",value:()=>!1},{kind:"field",decorators:[s({type:Boolean,attribute:"scroll",reflect:!0})],key:"_scrolled",value:()=>!1},{kind:"field",decorators:[n()],key:"_error",value:void 0},{kind:"field",decorators:[n()],key:"_parentItem",value:void 0},{kind:"field",decorators:[n()],key:"_currentItem",value:void 0},{kind:"field",decorators:[m(".header")],key:"_header",value:void 0},{kind:"field",decorators:[m(".content")],key:"_content",value:void 0},{kind:"field",decorators:[m("lit-virtualizer")],key:"_virtualizer",value:void 0},{kind:"field",key:"_observed",value:()=>!1},{kind:"field",key:"_headerOffsetHeight",value:()=>0},{kind:"field",key:"_resizeObserver",value:void 0},{kind:"method",key:"connectedCallback",value:function(){d(c(a.prototype),"connectedCallback",this).call(this),this.updateComplete.then((()=>this._attachResizeObserver()))}},{kind:"method",key:"disconnectedCallback",value:function(){this._resizeObserver&&this._resizeObserver.disconnect()}},{kind:"method",key:"refresh",value:async function(){const t=this.navigateIds[this.navigateIds.length-1];try{this._currentItem=await this._fetchData(this.entityId,t.media_content_id,t.media_content_type),p(this,"media-browsed",{ids:this.navigateIds,current:this._currentItem})}catch(t){this._setError(t)}}},{kind:"method",key:"play",value:function(){var t;null!==(t=this._currentItem)&&void 0!==t&&t.can_play&&this._runAction(this._currentItem)}},{kind:"method",key:"willUpdate",value:function(t){var e;if(d(c(a.prototype),"willUpdate",this).call(this,t),t.has("entityId"))this._setError(void 0);else if(!t.has("navigateIds"))return;this._setError(void 0);const i=t.get("navigateIds"),o=this.navigateIds;null===(e=this._content)||void 0===e||e.scrollTo(0,0),this._scrolled=!1;const r=this._currentItem,s=this._parentItem;this._currentItem=void 0,this._parentItem=void 0;const n=o[o.length-1],l=o.length>1?o[o.length-2]:void 0;let h,m;t.has("entityId")||(i&&o.length===i.length+1&&i.every(((t,e)=>{const i=o[e];return i.media_content_id===t.media_content_id&&i.media_content_type===t.media_content_type}))?m=Promise.resolve(r):i&&o.length===i.length-1&&o.every(((t,e)=>{const a=i[e];return t.media_content_id===a.media_content_id&&t.media_content_type===a.media_content_type}))&&(h=Promise.resolve(s))),h||(h=this._fetchData(this.entityId,n.media_content_id,n.media_content_type)),h.then((t=>{this._currentItem=t,p(this,"media-browsed",{ids:o,current:t})}),(e=>{var a;i&&t.has("entityId")&&o.length===i.length&&i.every(((t,e)=>o[e].media_content_id===t.media_content_id&&o[e].media_content_type===t.media_content_type))?p(this,"media-browsed",{ids:[{media_content_id:void 0,media_content_type:void 0}],replace:!0}):"entity_not_found"===e.code&&T(null===(a=this.hass.states[this.entityId])||void 0===a?void 0:a.state)?this._setError({message:this.hass.localize("ui.components.media-browser.media_player_unavailable"),code:"entity_not_found"}):this._setError(e)})),m||void 0===l||(m=this._fetchData(this.entityId,l.media_content_id,l.media_content_type)),m&&m.then((t=>{this._parentItem=t}))}},{kind:"method",key:"shouldUpdate",value:function(t){if(t.size>1||!t.has("hass"))return!0;const e=t.get("hass");return void 0===e||e.localize!==this.hass.localize}},{kind:"method",key:"firstUpdated",value:function(){this._measureCard(),this._attachResizeObserver()}},{kind:"method",key:"updated",value:function(t){if(d(c(a.prototype),"updated",this).call(this,t),t.has("_scrolled"))this._animateHeaderHeight();else if(t.has("_currentItem")){var e;if(this._setHeaderHeight(),this._observed)return;const t=null===(e=this._virtualizer)||void 0===e?void 0:e._virtualizer;t&&(this._observed=!0,setTimeout((()=>t._observeMutations()),0))}}},{kind:"method",key:"render",value:function(){if(this._error)return i`
        <div class="container">
          <ha-alert alert-type="error">
            ${this._renderError(this._error)}
          </ha-alert>
        </div>
      `;if(!this._currentItem)return i`<ha-circular-progress active></ha-circular-progress>`;const t=this._currentItem,e=this.hass.localize(`ui.components.media-browser.class.${t.media_class}`),a=t.children||[],o=R[t.media_class],r=t.children_media_class?R[t.children_media_class]:R.directory,s=t.thumbnail?this._getThumbnailURLorBase64(t.thumbnail).then((t=>`url(${t})`)):"none";return i`
              ${t.can_play?i`
                      <div
                        class="header ${u({"no-img":!t.thumbnail,"no-dialog":!this.dialog})}"
                        @transitionend=${this._setHeaderHeight}
                      >
                        <div class="header-content">
                          ${t.thumbnail?i`
                                <div
                                  class="img"
                                  style="background-image: ${C(s,"")}"
                                >
                                  ${this._narrow&&null!=t&&t.can_play?i`
                                        <ha-fab
                                          mini
                                          .item=${t}
                                          @click=${this._actionClicked}
                                        >
                                          <ha-svg-icon
                                            slot="icon"
                                            .label=${this.hass.localize(`ui.components.media-browser.${this.action}-media`)}
                                            .path=${"play"===this.action?g:_}
                                          ></ha-svg-icon>
                                          ${this.hass.localize(`ui.components.media-browser.${this.action}`)}
                                        </ha-fab>
                                      `:""}
                                </div>
                              `:i``}
                          <div class="header-info">
                            <div class="breadcrumb">
                              <h1 class="title">${t.title}</h1>
                              ${e?i` <h2 class="subtitle">${e}</h2> `:""}
                            </div>
                            ${!t.can_play||t.thumbnail&&this._narrow?"":i`
                                  <mwc-button
                                    raised
                                    .item=${t}
                                    @click=${this._actionClicked}
                                  >
                                    <ha-svg-icon
                                      .label=${this.hass.localize(`ui.components.media-browser.${this.action}-media`)}
                                      .path=${"play"===this.action?g:_}
                                    ></ha-svg-icon>
                                    ${this.hass.localize(`ui.components.media-browser.${this.action}`)}
                                  </mwc-button>
                                `}
                          </div>
                        </div>
                      </div>
                    `:""}
          <div
            class="content"
            @scroll=${this._scroll}
            @touchmove=${this._scroll}
          >
            ${this._error?i`
                    <div class="container">
                      <ha-alert alert-type="error">
                        ${this._renderError(this._error)}
                      </ha-alert>
                    </div>
                  `:(d=t.media_content_id,d.startsWith("media-source://tts/")?i`
                    <ha-browse-media-tts
                      .item=${t}
                      .hass=${this.hass}
                      .action=${this.action}
                      @tts-picked=${this._ttsPicked}
                    ></ha-browse-media-tts>
                  `:a.length||t.not_shown?"grid"===r.layout?i`
                    <lit-virtualizer
                      scroller
                      .layout=${n={itemSize:{width:"175px",height:"portrait"===r.thumbnail_ratio?"312px":"225px"},gap:"16px",flex:{preserve:"aspect-ratio"},justify:"space-evenly",direction:"vertical"},Object.assign({type:Y},n)}
                      .items=${a}
                      .renderItem=${this._renderGridItem}
                      class="children ${u({portrait:"portrait"===r.thumbnail_ratio,not_shown:!!t.not_shown})}"
                    ></lit-virtualizer>
                    ${t.not_shown?i`
                          <div class="grid not-shown">
                            <div class="title">
                              ${this.hass.localize("ui.components.media-browser.not_shown",{count:t.not_shown})}
                            </div>
                          </div>
                        `:""}
                  `:i`
                    <mwc-list>
                      <lit-virtualizer
                        scroller
                        .items=${a}
                        style=${f({height:72*a.length+26+"px"})}
                        .renderItem=${this._renderListItem}
                      ></lit-virtualizer>
                      ${t.not_shown?i`
                            <mwc-list-item
                              noninteractive
                              class="not-shown"
                              .graphic=${o.show_list_images?"medium":"avatar"}
                              dir=${z(this.hass)}
                            >
                              <span class="title">
                                ${this.hass.localize("ui.components.media-browser.not_shown",{count:t.not_shown})}
                              </span>
                            </mwc-list-item>
                          `:""}
                    </mwc-list>
                  `:i`
                    <div class="container no-items">
                      ${"media-source://media_source/local/."===t.media_content_id?i`
                            <div class="highlight-add-button">
                              <span>
                                <ha-svg-icon
                                  .path=${b}
                                ></ha-svg-icon>
                              </span>
                              <span>
                                ${this.hass.localize("ui.components.media-browser.file_management.highlight_button")}
                              </span>
                            </div>
                          `:this.hass.localize("ui.components.media-browser.no_items")}
                    </div>
                  `)}
          </div>
        </div>
      </div>
    `;var n,d}},{kind:"field",key:"_renderGridItem",value(){return t=>{const e=t.thumbnail?this._getThumbnailURLorBase64(t.thumbnail).then((t=>`url(${t})`)):"none";return i`
      <div class="child" .item=${t} @click=${this._childClicked}>
        <ha-card outlined>
          <div class="thumbnail">
            ${t.thumbnail?i`
                  <div
                    class="${["app","directory"].includes(t.media_class)?"centered-image":""} ${A(t.thumbnail)?"brand-image":""} image"
                    style="background-image: ${C(e,"")}"
                  ></div>
                `:i`
                  <div class="icon-holder image">
                    <ha-svg-icon
                      class="folder"
                      .path=${R["directory"===t.media_class&&t.children_media_class||t.media_class].icon}
                    ></ha-svg-icon>
                  </div>
                `}
            ${t.can_play?i`
                  <ha-icon-button
                    class="play ${u({can_expand:t.can_expand})}"
                    .item=${t}
                    .label=${this.hass.localize(`ui.components.media-browser.${this.action}-media`)}
                    .path=${"play"===this.action?g:_}
                    @click=${this._actionClicked}
                  ></ha-icon-button>
                `:""}
          </div>
          <div class="title">
            ${t.title}
            <paper-tooltip fitToVisibleBounds position="top" offset="4"
              >${t.title}</paper-tooltip
            >
          </div>
        </ha-card>
      </div>
    `}}},{kind:"field",key:"_renderListItem",value(){return t=>{const e=this._currentItem,a=R[e.media_class],o=a.show_list_images&&t.thumbnail?this._getThumbnailURLorBase64(t.thumbnail).then((t=>`url(${t})`)):"none";return i`
      <mwc-list-item
        @click=${this._childClicked}
        .item=${t}
        .graphic=${a.show_list_images?"medium":"avatar"}
        dir=${z(this.hass)}
      >
        <div
          class=${u({graphic:!0,thumbnail:!0===a.show_list_images})}
          style="background-image: ${C(o,"")}"
          slot="graphic"
        >
          <ha-icon-button
            class="play ${u({show:!a.show_list_images||!t.thumbnail})}"
            .item=${t}
            .label=${this.hass.localize(`ui.components.media-browser.${this.action}-media`)}
            .path=${"play"===this.action?g:_}
            @click=${this._actionClicked}
          ></ha-icon-button>
        </div>
        <span class="title">${t.title}</span>
      </mwc-list-item>
    `}}},{kind:"method",key:"_getThumbnailURLorBase64",value:async function(t){if(!t)return"";if(t.startsWith("/"))return new Promise(((e,i)=>{this.hass.fetchWithAuth(t).then((t=>t.blob())).then((t=>{const a=new FileReader;a.onload=()=>{const t=a.result;e("string"==typeof t?t:"")},a.onerror=t=>i(t),a.readAsDataURL(t)}))}));var e;A(t)&&(t=U({domain:W(t),type:"icon",useFallback:!0,darkOptimized:null===(e=this.hass.themes)||void 0===e?void 0:e.darkMode}));return t}},{kind:"field",key:"_actionClicked",value(){return t=>{t.stopPropagation();const e=t.currentTarget.item;this._runAction(e)}}},{kind:"method",key:"_runAction",value:function(t){p(this,"media-picked",{item:t,navigateIds:this.navigateIds})}},{kind:"method",key:"_ttsPicked",value:function(t){t.stopPropagation();const e=this.navigateIds.slice(0,-1);e.push(t.detail.item),p(this,"media-picked",{...t.detail,navigateIds:e})}},{kind:"field",key:"_childClicked",value(){return async t=>{const e=t.currentTarget.item;e&&(e.can_expand?p(this,"media-browsed",{ids:[...this.navigateIds,e]}):this._runAction(e))}}},{kind:"method",key:"_fetchData",value:async function(t,e,i){return t!==E?L(this.hass,t,e,i):J(this.hass,e)}},{kind:"method",key:"_measureCard",value:function(){this._narrow=(this.dialog?window.innerWidth:this.offsetWidth)<450}},{kind:"method",key:"_attachResizeObserver",value:async function(){this._resizeObserver||(await P(),this._resizeObserver=new ResizeObserver(M((()=>this._measureCard()),250,!1))),this._resizeObserver.observe(this)}},{kind:"method",key:"_closeDialogAction",value:function(){p(this,"close-dialog")}},{kind:"method",key:"_setError",value:function(t){this.dialog?t&&(this._closeDialogAction(),H(this,{title:this.hass.localize("ui.components.media-browser.media_browsing_error"),text:this._renderError(t)})):this._error=t}},{kind:"method",key:"_renderError",value:function(t){return"Media directory does not exist."===t.message?i`
        <h2>
          ${this.hass.localize("ui.components.media-browser.no_local_media_found")}
        </h2>
        <p>
          ${this.hass.localize("ui.components.media-browser.no_media_folder")}
          <br />
          ${this.hass.localize("ui.components.media-browser.setup_local_help","documentation",i`<a
              href=${B(this.hass,"/more-info/local-media/setup-media")}
              target="_blank"
              rel="noreferrer"
              >${this.hass.localize("ui.components.media-browser.documentation")}</a
            >`)}
          <br />
          ${this.hass.localize("ui.components.media-browser.local_media_files")}
        </p>
      `:i`<span class="error">${t.message}</span>`}},{kind:"method",key:"_setHeaderHeight",value:async function(){await this.updateComplete;const t=this._header,e=this._content;t&&e&&(this._headerOffsetHeight=t.offsetHeight,e.style.marginTop=`${this._headerOffsetHeight}px`,e.style.maxHeight=`calc(var(--media-browser-max-height, 100%) - ${this._headerOffsetHeight}px)`)}},{kind:"method",key:"_animateHeaderHeight",value:function(){let t;const e=i=>{void 0===t&&(t=i);const a=i-t;this._setHeaderHeight(),a<400&&requestAnimationFrame(e)};requestAnimationFrame(e)}},{kind:"method",decorators:[v({passive:!0})],key:"_scroll",value:function(t){const e=t.currentTarget;!this._scrolled&&e.scrollTop>this._headerOffsetHeight?this._scrolled=!0:this._scrolled&&e.scrollTop<this._headerOffsetHeight&&(this._scrolled=!1)}},{kind:"get",static:!0,key:"styles",value:function(){return[y,o`
        :host {
          display: flex;
          flex-direction: column;
          position: relative;
        }

        ha-circular-progress {
          --mdc-theme-primary: var(--primary-color);
          display: flex;
          justify-content: center;
          margin: 40px;
        }

        .container {
          padding: 16px;
        }

        .no-items {
          padding-left: 32px;
        }

        .highlight-add-button {
          display: flex;
          flex-direction: row-reverse;
          margin-right: 48px;
        }

        .highlight-add-button ha-svg-icon {
          position: relative;
          top: -0.5em;
          margin-left: 8px;
        }

        .content {
          overflow-y: auto;
          box-sizing: border-box;
          height: 100%;
        }

        /* HEADER */

        .header {
          display: flex;
          justify-content: space-between;
          border-bottom: 1px solid var(--divider-color);
          background-color: var(--card-background-color);
          position: absolute;
          top: 0;
          right: 0;
          left: 0;
          z-index: 5;
          padding: 16px;
        }
        .header_button {
          position: relative;
          right: -8px;
        }
        .header-content {
          display: flex;
          flex-wrap: wrap;
          flex-grow: 1;
          align-items: flex-start;
        }
        .header-content .img {
          height: 175px;
          width: 175px;
          margin-right: 16px;
          background-size: cover;
          border-radius: 2px;
          transition: width 0.4s, height 0.4s;
        }
        .header-info {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-self: stretch;
          min-width: 0;
          flex: 1;
        }
        .header-info mwc-button {
          display: block;
          --mdc-theme-primary: var(--primary-color);
          padding-bottom: 16px;
        }
        .breadcrumb {
          display: flex;
          flex-direction: column;
          overflow: hidden;
          flex-grow: 1;
          padding-top: 16px;
        }
        .breadcrumb .title {
          font-size: 32px;
          line-height: 1.2;
          font-weight: bold;
          margin: 0;
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          padding-right: 8px;
        }
        .breadcrumb .previous-title {
          font-size: 14px;
          padding-bottom: 8px;
          color: var(--secondary-text-color);
          overflow: hidden;
          text-overflow: ellipsis;
          cursor: pointer;
          --mdc-icon-size: 14px;
        }
        .breadcrumb .subtitle {
          font-size: 16px;
          overflow: hidden;
          text-overflow: ellipsis;
          margin-bottom: 0;
          transition: height 0.5s, margin 0.5s;
        }

        .not-shown {
          font-style: italic;
          color: var(--secondary-text-color);
          padding: 8px 16px 8px;
        }

        .grid.not-shown {
          display: flex;
          align-items: center;
          text-align: center;
        }

        /* ============= CHILDREN ============= */

        mwc-list {
          --mdc-list-vertical-padding: 0;
          --mdc-list-item-graphic-margin: 0;
          --mdc-theme-text-icon-on-background: var(--secondary-text-color);
          margin-top: 10px;
        }

        mwc-list li:last-child {
          display: none;
        }

        mwc-list li[divider] {
          border-bottom-color: var(--divider-color);
        }

        mwc-list-item {
          width: 100%;
        }

        div.children {
          display: grid;
          grid-template-columns: repeat(
            auto-fit,
            minmax(var(--media-browse-item-size, 175px), 0.1fr)
          );
          grid-gap: 16px;
          padding: 16px;
        }

        :host([dialog]) .children {
          grid-template-columns: repeat(
            auto-fit,
            minmax(var(--media-browse-item-size, 175px), 0.33fr)
          );
        }

        .child {
          display: flex;
          flex-direction: column;
          cursor: pointer;
        }

        ha-card {
          position: relative;
          width: 100%;
          box-sizing: border-box;
        }

        .children ha-card .thumbnail {
          width: 100%;
          position: relative;
          box-sizing: border-box;
          transition: padding-bottom 0.1s ease-out;
          padding-bottom: 100%;
        }

        .portrait ha-card .thumbnail {
          padding-bottom: 150%;
        }

        ha-card .image {
          border-radius: 3px 3px 0 0;
        }

        .image {
          position: absolute;
          top: 0;
          right: 0;
          left: 0;
          bottom: 0;
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center;
        }

        .centered-image {
          margin: 0 8px;
          background-size: contain;
        }

        .brand-image {
          background-size: 40%;
        }

        .children ha-card .icon-holder {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .child .folder {
          color: var(--secondary-text-color);
          --mdc-icon-size: calc(var(--media-browse-item-size, 175px) * 0.4);
        }

        .child .play {
          position: absolute;
          transition: color 0.5s;
          border-radius: 50%;
          top: calc(50% - 50px);
          right: calc(50% - 35px);
          opacity: 0;
          transition: opacity 0.1s ease-out;
        }

        .child .play:not(.can_expand) {
          --mdc-icon-button-size: 70px;
          --mdc-icon-size: 48px;
        }

        ha-card:hover .play {
          opacity: 1;
        }

        ha-card:hover .play:not(.can_expand) {
          color: var(--primary-color);
        }

        ha-card:hover .play.can_expand {
          bottom: 8px;
        }

        .child .play.can_expand {
          background-color: rgba(var(--rgb-card-background-color), 0.5);
          top: auto;
          bottom: 0px;
          right: 8px;
          transition: bottom 0.1s ease-out, opacity 0.1s ease-out;
        }

        .child .play:hover {
          color: var(--primary-color);
        }

        .child .title {
          font-size: 16px;
          padding-top: 16px;
          padding-left: 2px;
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
          text-overflow: ellipsis;
        }

        .child ha-card .title {
          margin-bottom: 16px;
          padding-left: 16px;
        }

        mwc-list-item .graphic {
          background-size: contain;
          border-radius: 2px;
          display: flex;
          align-content: center;
          align-items: center;
          line-height: initial;
        }

        mwc-list-item .graphic .play {
          opacity: 0;
          transition: all 0.5s;
          background-color: rgba(var(--rgb-card-background-color), 0.5);
          border-radius: 50%;
          --mdc-icon-button-size: 40px;
        }

        mwc-list-item:hover .graphic .play {
          opacity: 1;
          color: var(--primary-text-color);
        }

        mwc-list-item .graphic .play.show {
          opacity: 1;
          background-color: transparent;
        }

        mwc-list-item .title {
          margin-left: 16px;
        }
        mwc-list-item[dir="rtl"] .title {
          margin-right: 16px;
          margin-left: 0;
        }

        /* ============= Narrow ============= */

        :host([narrow]) {
          padding: 0;
        }

        :host([narrow]) .media-source {
          padding: 0 24px;
        }

        :host([narrow]) div.children {
          grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) !important;
        }

        :host([narrow]) .breadcrumb .title {
          font-size: 24px;
        }
        :host([narrow]) .header {
          padding: 0;
        }
        :host([narrow]) .header.no-dialog {
          display: block;
        }
        :host([narrow]) .header_button {
          position: absolute;
          top: 14px;
          right: 8px;
        }
        :host([narrow]) .header-content {
          flex-direction: column;
          flex-wrap: nowrap;
        }
        :host([narrow]) .header-content .img {
          height: auto;
          width: 100%;
          margin-right: 0;
          padding-bottom: 50%;
          margin-bottom: 8px;
          position: relative;
          background-position: center;
          border-radius: 0;
          transition: width 0.4s, height 0.4s, padding-bottom 0.4s;
        }
        ha-fab {
          position: absolute;
          --mdc-theme-secondary: var(--primary-color);
          bottom: -20px;
          right: 20px;
        }
        :host([narrow]) .header-info mwc-button {
          margin-top: 16px;
          margin-bottom: 8px;
        }
        :host([narrow]) .header-info {
          padding: 0 16px 8px;
        }

        /* ============= Scroll ============= */
        :host([scroll]) .breadcrumb .subtitle {
          height: 0;
          margin: 0;
        }
        :host([scroll]) .breadcrumb .title {
          -webkit-line-clamp: 1;
        }
        :host(:not([narrow])[scroll]) .header:not(.no-img) ha-icon-button {
          align-self: center;
        }
        :host([scroll]) .header-info mwc-button,
        .no-img .header-info mwc-button {
          padding-right: 4px;
        }
        :host([scroll][narrow]) .no-img .header-info mwc-button {
          padding-right: 16px;
        }
        :host([scroll]) .header-info {
          flex-direction: row;
        }
        :host([scroll]) .header-info mwc-button {
          align-self: center;
          margin-top: 0;
          margin-bottom: 0;
          padding-bottom: 0;
        }
        :host([scroll][narrow]) .no-img .header-info {
          flex-direction: row-reverse;
        }
        :host([scroll][narrow]) .header-info {
          padding: 20px 24px 10px 24px;
          align-items: center;
        }
        :host([scroll]) .header-content {
          align-items: flex-end;
          flex-direction: row;
        }
        :host([scroll]) .header-content .img {
          height: 75px;
          width: 75px;
        }
        :host([scroll]) .breadcrumb {
          padding-top: 0;
          align-self: center;
        }
        :host([scroll][narrow]) .header-content .img {
          height: 100px;
          width: 100px;
          padding-bottom: initial;
          margin-bottom: 0;
        }
        :host([scroll]) ha-fab {
          bottom: 0px;
          right: -24px;
          --mdc-fab-box-shadow: none;
          --mdc-theme-secondary: rgba(var(--rgb-primary-color), 0.5);
        }

        lit-virtualizer {
          height: 100%;
          overflow: overlay !important;
          contain: size layout !important;
        }

        lit-virtualizer.not_shown {
          height: calc(100% - 36px);
        }
      `]}}]}}),e);t([r("ha-media-manage-button")],(function(t,e){return{F:class extends e{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[s({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[s()],key:"currentItem",value:void 0},{kind:"field",decorators:[n()],key:"_uploading",value:()=>0},{kind:"method",key:"render",value:function(){return this.currentItem&&K(this.currentItem.media_content_id||"")?i`
      <mwc-button
        .label=${this.hass.localize("ui.components.media-browser.file_management.manage")}
        @click=${this._manage}
      >
        <ha-svg-icon .path=${x} slot="icon"></ha-svg-icon>
      </mwc-button>
    `:i``}},{kind:"method",key:"_manage",value:function(){var t,e;t=this,e={currentItem:this.currentItem,onClose:()=>p(this,"media-refresh")},p(t,"show-dialog",{dialogTag:"dialog-media-manage",dialogImport:()=>import("./c.1cee1fa9.js"),dialogParams:e})}},{kind:"field",static:!0,key:"styles",value:()=>o`
    mwc-button {
      /* We use icon + text to show disabled state */
      --mdc-button-disabled-ink-color: --mdc-theme-primary;
    }

    ha-svg-icon[slot="icon"],
    ha-circular-progress[slot="icon"] {
      vertical-align: middle;
    }

    ha-svg-icon[slot="icon"] {
      margin-inline-start: 0px;
      margin-inline-end: 8px;
      direction: var(--direction);
    }
  `}]}}),e),t([r("dialog-media-player-browse")],(function(t,e){return{F:class extends e{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[s({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[n()],key:"_currentItem",value:void 0},{kind:"field",decorators:[n()],key:"_navigateIds",value:void 0},{kind:"field",decorators:[n()],key:"_params",value:void 0},{kind:"field",decorators:[m("ha-media-player-browse")],key:"_browser",value:void 0},{kind:"method",key:"showDialog",value:function(t){this._params=t,this._navigateIds=t.navigateIds||[{media_content_id:void 0,media_content_type:void 0}]}},{kind:"method",key:"closeDialog",value:function(){this._params=void 0,this._navigateIds=void 0,this._currentItem=void 0,p(this,"dialog-closed",{dialog:this.localName})}},{kind:"method",key:"render",value:function(){return this._params&&this._navigateIds?i`
      <ha-dialog
        open
        scrimClickAction
        escapeKeyAction
        hideActions
        flexContent
        .heading=${this._currentItem?this._currentItem.title:this.hass.localize("ui.components.media-browser.media-player-browser")}
        @closed=${this.closeDialog}
      >
        <ha-header-bar slot="heading">
          ${this._navigateIds.length>1?i`
                <ha-icon-button
                  slot="navigationIcon"
                  .path=${w}
                  @click=${this._goBack}
                ></ha-icon-button>
              `:""}
          <span slot="title">
            ${this._currentItem?this._currentItem.title:this.hass.localize("ui.components.media-browser.media-player-browser")}
          </span>

          <ha-media-manage-button
            slot="actionItems"
            .hass=${this.hass}
            .currentItem=${this._currentItem}
            @media-refresh=${this._refreshMedia}
          ></ha-media-manage-button>
          <ha-icon-button
            .label=${this.hass.localize("ui.dialogs.generic.close")}
            .path=${k}
            dialogAction="close"
            slot="actionItems"
            class="header_button"
            dir=${z(this.hass)}
          ></ha-icon-button>
        </ha-header-bar>
        <ha-media-player-browse
          dialog
          .hass=${this.hass}
          .entityId=${this._params.entityId}
          .navigateIds=${this._navigateIds}
          .action=${this._action}
          @close-dialog=${this.closeDialog}
          @media-picked=${this._mediaPicked}
          @media-browsed=${this._mediaBrowsed}
        ></ha-media-player-browse>
      </ha-dialog>
    `:i``}},{kind:"method",key:"_goBack",value:function(){var t;this._navigateIds=null===(t=this._navigateIds)||void 0===t?void 0:t.slice(0,-1),this._currentItem=void 0}},{kind:"method",key:"_mediaBrowsed",value:function(t){this._navigateIds=t.detail.ids,this._currentItem=t.detail.current}},{kind:"method",key:"_mediaPicked",value:function(t){this._params.mediaPickedCallback(t.detail),"play"!==this._action&&this.closeDialog()}},{kind:"get",key:"_action",value:function(){return this._params.action||"play"}},{kind:"method",key:"_refreshMedia",value:function(){this._browser.refresh()}},{kind:"get",static:!0,key:"styles",value:function(){return[$,o`
        ha-dialog {
          --dialog-z-index: 8;
          --dialog-content-padding: 0;
        }

        ha-media-player-browse {
          --media-browser-max-height: calc(100vh - 65px);
          height: calc(100vh - 65px);
          direction: ltr;
        }

        @media (min-width: 800px) {
          ha-dialog {
            --mdc-dialog-max-width: 800px;
            --dialog-surface-position: fixed;
            --dialog-surface-top: 40px;
            --mdc-dialog-max-height: calc(100vh - 72px);
          }
          ha-media-player-browse {
            position: initial;
            --media-browser-max-height: 100vh - 137px;
            height: 100vh - 137px;
            width: 700px;
          }
        }

        ha-header-bar {
          --mdc-theme-on-primary: var(--primary-text-color);
          --mdc-theme-primary: var(--mdc-theme-surface);
          flex-shrink: 0;
          border-bottom: 1px solid var(--divider-color, rgba(0, 0, 0, 0.12));
        }

        ha-media-manage-button {
          --mdc-theme-primary: var(--mdc-theme-on-primary);
        }
      `]}}]}}),e);var tt=Object.freeze({__proto__:null});export{J as b,tt as d,K as i,X as r,V as u};
