import{S as t,T as e,Q as i,V as a,a as s,h as o,$ as r,J as n,r as l,n as d,x as c,e as h,a5 as p,t as m,L as u,N as _,m as g,A as b,eK as f,i as v,o as y,cm as w,aK as x,eL as k,I as $,w as z,aD as C,eM as I,eN as O,z as S,P as E}from"./main-ad130be7.js";import{a as T}from"./c.4a97632a.js";import"./c.710a50fc.js";import{r as L,t as M}from"./c.3f859915.js";import{c as R,t as A,a as j,U as D,M as P,g as V,B as N,b as H,i as U,d as B}from"./c.d2e52e5a.js";import{grid as F}from"@lit-labs/virtualizer/layouts/grid";import"./c.82eccc94.js";import"./c.4feb0cb8.js";import{d as W}from"./c.d262aab0.js";import{a as q}from"./c.4266acdb.js";import{i as G,b as K,e as Y}from"./c.0a1cf8d0.js";import"./c.f1291e50.js";import"./c.0ca5587f.js";import"./c.2d5ed670.js";import"./c.97b7c4b0.js";import{a as J}from"./c.42d6aebd.js";const Q=(t,e)=>{var i,a;const s=t._$AN;if(void 0===s)return!1;for(const t of s)null===(a=(i=t)._$AO)||void 0===a||a.call(i,e,!1),Q(t,e);return!0},X=t=>{let e,i;do{if(void 0===(e=t._$AM))break;i=e._$AN,i.delete(t),t=e}while(0===(null==i?void 0:i.size))},Z=t=>{for(let e;e=t._$AM;t=e){let i=e._$AN;if(void 0===i)e._$AN=i=new Set;else if(i.has(t))break;i.add(t),it(e)}};function tt(t){void 0!==this._$AN?(X(this),this._$AM=t,Z(this)):this._$AM=t}function et(t,e=!1,i=0){const a=this._$AH,s=this._$AN;if(void 0!==s&&0!==s.size)if(e)if(Array.isArray(a))for(let t=i;t<a.length;t++)Q(a[t],!1),X(a[t]);else null!=a&&(Q(a,!1),X(a));else Q(this,t)}const it=t=>{var i,a,s,o;t.type==e.CHILD&&(null!==(i=(s=t)._$AP)&&void 0!==i||(s._$AP=et),null!==(a=(o=t)._$AQ)&&void 0!==a||(o._$AQ=tt))};class at extends t{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,i){super._$AT(t,e,i),Z(this),this.isConnected=t._$AU}_$AO(t,e=!0){var i,a;t!==this.isConnected&&(this.isConnected=t,t?null===(i=this.reconnected)||void 0===i||i.call(this):null===(a=this.disconnected)||void 0===a||a.call(this)),e&&(Q(this,t),X(this))}setValue(t){if(L(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}class st{constructor(t){this.U=t}disconnect(){this.U=void 0}reconnect(t){this.U=t}deref(){return this.U}}class ot{constructor(){this.Y=void 0,this.q=void 0}get(){return this.Y}pause(){var t;null!==(t=this.Y)&&void 0!==t||(this.Y=new Promise((t=>this.q=t)))}resume(){var t;null===(t=this.q)||void 0===t||t.call(this),this.Y=this.q=void 0}}const rt=t=>!M(t)&&"function"==typeof t.then;const nt=i(class extends at{constructor(){super(...arguments),this._$Cft=1073741823,this._$Cwt=[],this._$CG=new st(this),this._$CK=new ot}render(...t){var e;return null!==(e=t.find((t=>!rt(t))))&&void 0!==e?e:a}update(t,e){const i=this._$Cwt;let s=i.length;this._$Cwt=e;const o=this._$CG,r=this._$CK;this.isConnected||this.disconnected();for(let t=0;t<e.length&&!(t>this._$Cft);t++){const a=e[t];if(!rt(a))return this._$Cft=t,a;t<s&&a===i[t]||(this._$Cft=1073741823,s=0,Promise.resolve(a).then((async t=>{for(;r.get();)await r.get();const e=o.deref();if(void 0!==e){const i=e._$Cwt.indexOf(a);i>-1&&i<e._$Cft&&(e._$Cft=i,e.setValue(t))}})))}return a}disconnected(){this._$CG.disconnect(),this._$CK.pause()}reconnected(){this._$CG.reconnect(this),this._$CK.resume()}});let lt,dt;async function ct(){return dt||async function(){if(lt)return(await lt).default;lt=window.ResizeObserver;try{new lt((function(){}))}catch(t){lt=import("./c.24bd2446.js"),lt=(await lt).default}return dt=lt}()}s([d("ha-header-bar")],(function(t,e){return{F:class extends e{constructor(...e){super(...e),t(this)}},d:[{kind:"method",key:"render",value:function(){return r`<header class="mdc-top-app-bar">
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
    </header>`}},{kind:"get",static:!0,key:"styles",value:function(){return[n("/**\n * @license\n * Copyright Google LLC All Rights Reserved.\n *\n * Use of this source code is governed by an MIT-style license that can be\n * found in the LICENSE file at https://github.com/material-components/material-components-web/blob/master/LICENSE\n */\n.mdc-top-app-bar{background-color:#6200ee;background-color:var(--mdc-theme-primary, #6200ee);color:white;display:flex;position:fixed;flex-direction:column;justify-content:space-between;box-sizing:border-box;width:100%;z-index:4}.mdc-top-app-bar .mdc-top-app-bar__action-item,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon{color:#fff;color:var(--mdc-theme-on-primary, #fff)}.mdc-top-app-bar .mdc-top-app-bar__action-item::before,.mdc-top-app-bar .mdc-top-app-bar__action-item::after,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon::before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon::after{background-color:#fff;background-color:var(--mdc-ripple-color, var(--mdc-theme-on-primary, #fff))}.mdc-top-app-bar .mdc-top-app-bar__action-item:hover::before,.mdc-top-app-bar .mdc-top-app-bar__action-item.mdc-ripple-surface--hover::before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:hover::before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon.mdc-ripple-surface--hover::before{opacity:0.08;opacity:var(--mdc-ripple-hover-opacity, 0.08)}.mdc-top-app-bar .mdc-top-app-bar__action-item.mdc-ripple-upgraded--background-focused::before,.mdc-top-app-bar .mdc-top-app-bar__action-item:not(.mdc-ripple-upgraded):focus::before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon.mdc-ripple-upgraded--background-focused::before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-top-app-bar .mdc-top-app-bar__action-item:not(.mdc-ripple-upgraded)::after,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-top-app-bar .mdc-top-app-bar__action-item:not(.mdc-ripple-upgraded):active::after,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-top-app-bar .mdc-top-app-bar__action-item.mdc-ripple-upgraded,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-top-app-bar__row{display:flex;position:relative;box-sizing:border-box;width:100%;height:64px}.mdc-top-app-bar__section{display:inline-flex;flex:1 1 auto;align-items:center;min-width:0;padding:8px 12px;z-index:1}.mdc-top-app-bar__section--align-start{justify-content:flex-start;order:-1}.mdc-top-app-bar__section--align-end{justify-content:flex-end;order:1}.mdc-top-app-bar__title{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-headline6-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1.25rem;font-size:var(--mdc-typography-headline6-font-size, 1.25rem);line-height:2rem;line-height:var(--mdc-typography-headline6-line-height, 2rem);font-weight:500;font-weight:var(--mdc-typography-headline6-font-weight, 500);letter-spacing:0.0125em;letter-spacing:var(--mdc-typography-headline6-letter-spacing, 0.0125em);text-decoration:inherit;-webkit-text-decoration:var(--mdc-typography-headline6-text-decoration, inherit);text-decoration:var(--mdc-typography-headline6-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-headline6-text-transform, inherit);padding-left:20px;padding-right:0;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;z-index:1}[dir=rtl] .mdc-top-app-bar__title,.mdc-top-app-bar__title[dir=rtl]{padding-left:0;padding-right:20px}.mdc-top-app-bar--short-collapsed{border-top-left-radius:0;border-top-right-radius:0;border-bottom-right-radius:24px;border-bottom-left-radius:0}[dir=rtl] .mdc-top-app-bar--short-collapsed,.mdc-top-app-bar--short-collapsed[dir=rtl]{border-top-left-radius:0;border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:24px}.mdc-top-app-bar--short{top:0;right:auto;left:0;width:100%;transition:width 250ms cubic-bezier(0.4, 0, 0.2, 1)}[dir=rtl] .mdc-top-app-bar--short,.mdc-top-app-bar--short[dir=rtl]{right:0;left:auto}.mdc-top-app-bar--short .mdc-top-app-bar__row{height:56px}.mdc-top-app-bar--short .mdc-top-app-bar__section{padding:4px}.mdc-top-app-bar--short .mdc-top-app-bar__title{transition:opacity 200ms cubic-bezier(0.4, 0, 0.2, 1);opacity:1}.mdc-top-app-bar--short-collapsed{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12);width:56px;transition:width 300ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-top-app-bar--short-collapsed .mdc-top-app-bar__title{display:none}.mdc-top-app-bar--short-collapsed .mdc-top-app-bar__action-item{transition:padding 150ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item{width:112px}.mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item .mdc-top-app-bar__section--align-end{padding-left:0;padding-right:12px}[dir=rtl] .mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item .mdc-top-app-bar__section--align-end,.mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item .mdc-top-app-bar__section--align-end[dir=rtl]{padding-left:12px;padding-right:0}.mdc-top-app-bar--dense .mdc-top-app-bar__row{height:48px}.mdc-top-app-bar--dense .mdc-top-app-bar__section{padding:0 4px}.mdc-top-app-bar--dense .mdc-top-app-bar__title{padding-left:12px;padding-right:0}[dir=rtl] .mdc-top-app-bar--dense .mdc-top-app-bar__title,.mdc-top-app-bar--dense .mdc-top-app-bar__title[dir=rtl]{padding-left:0;padding-right:12px}.mdc-top-app-bar--prominent .mdc-top-app-bar__row{height:128px}.mdc-top-app-bar--prominent .mdc-top-app-bar__title{align-self:flex-end;padding-bottom:2px}.mdc-top-app-bar--prominent .mdc-top-app-bar__action-item,.mdc-top-app-bar--prominent .mdc-top-app-bar__navigation-icon{align-self:flex-start}.mdc-top-app-bar--fixed{transition:box-shadow 200ms linear}.mdc-top-app-bar--fixed-scrolled{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12);transition:box-shadow 200ms linear}.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__row{height:96px}.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__section{padding:0 12px}.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__title{padding-left:20px;padding-right:0;padding-bottom:9px}[dir=rtl] .mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__title,.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__title[dir=rtl]{padding-left:0;padding-right:20px}.mdc-top-app-bar--fixed-adjust{padding-top:64px}.mdc-top-app-bar--dense-fixed-adjust{padding-top:48px}.mdc-top-app-bar--short-fixed-adjust{padding-top:56px}.mdc-top-app-bar--prominent-fixed-adjust{padding-top:128px}.mdc-top-app-bar--dense-prominent-fixed-adjust{padding-top:96px}@media(max-width: 599px){.mdc-top-app-bar__row{height:56px}.mdc-top-app-bar__section{padding:4px}.mdc-top-app-bar--short{transition:width 200ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-top-app-bar--short-collapsed{transition:width 250ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-top-app-bar--short-collapsed .mdc-top-app-bar__section--align-end{padding-left:0;padding-right:12px}[dir=rtl] .mdc-top-app-bar--short-collapsed .mdc-top-app-bar__section--align-end,.mdc-top-app-bar--short-collapsed .mdc-top-app-bar__section--align-end[dir=rtl]{padding-left:12px;padding-right:0}.mdc-top-app-bar--prominent .mdc-top-app-bar__title{padding-bottom:6px}.mdc-top-app-bar--fixed-adjust{padding-top:56px}}\n\n/*# sourceMappingURL=mdc.top-app-bar.min.css.map*/"),l`
        .mdc-top-app-bar {
          position: static;
          color: var(--mdc-theme-on-primary, #fff);
        }
      `]}}]}}),o);const ht=Symbol("scrollerRef");let pt="attachShadow"in Element.prototype&&(!("ShadyDOM"in window)||!window.ShadyDOM.inUse);let mt=null;function ut(t,e){return`\n    ${t} {\n      display: block;\n      position: relative;\n      contain: strict;\n      height: 150px;\n      overflow: auto;\n    }\n    ${e} {\n      box-sizing: border-box;\n    }`}class _t{constructor(t){this._benchmarkStart=null,this._layout=null,this._scrollTarget=null,this._sizer=null,this._scrollSize=null,this._scrollErr=null,this._childrenPos=null,this._childMeasurements=null,this._toBeMeasured=new Map,this._rangeChanged=!0,this._itemsChanged=!0,this._visibilityChanged=!0,this._container=null,this._containerElement=null,this._containerInlineStyle=null,this._containerStylesheet=null,this._containerSize=null,this._containerRO=null,this._childrenRO=null,this._mutationObserver=null,this._mutationPromise=null,this._mutationPromiseResolver=null,this._mutationsObserved=!1,this._loadListener=this._childLoaded.bind(this),this._scrollToIndex=null,this._items=[],this._totalItems=null,this._first=0,this._last=0,this._scheduled=new WeakSet,this._measureCallback=null,this._measureChildOverride=null,this._first=-1,this._last=-1,t&&Object.assign(this,t)}set items(t){t!==this._items&&(this._itemsChanged=!0,this._items=t,this._schedule(this._updateLayout))}get totalItems(){return null===this._totalItems?this._items.length:this._totalItems}set totalItems(t){if("number"!=typeof t&&null!==t)throw new Error("New value must be a number.");t!==this._totalItems&&(this._totalItems=t,this._schedule(this._updateLayout))}get container(){return this._container}set container(t){t!==this._container&&(this._container&&this._children.forEach((t=>t.parentNode.removeChild(t))),this._container=t,this._schedule(this._updateLayout),this._initResizeObservers().then((()=>{const e=this._containerElement,i=t&&t.nodeType===Node.DOCUMENT_FRAGMENT_NODE?t.host:t;e!==i&&(this._containerRO.disconnect(),this._containerSize=null,e?(this._containerInlineStyle?e.setAttribute("style",this._containerInlineStyle):e.removeAttribute("style"),this._containerInlineStyle=null,e===this._scrollTarget&&(e.removeEventListener("scroll",this,{passive:!0}),this._sizer&&this._sizer.remove()),e.removeEventListener("load",this._loadListener,!0),this._mutationObserver.disconnect()):addEventListener("scroll",this,{passive:!0}),this._containerElement=i,i&&(this._containerInlineStyle=i.getAttribute("style")||null,this._applyContainerStyles(),i===this._scrollTarget&&(this._sizer=this._sizer||this._createContainerSizer(),this._container.insertBefore(this._sizer,this._container.firstChild)),this._schedule(this._updateLayout),this._containerRO.observe(i),this._mutationObserver.observe(i,{childList:!0}),this._mutationPromise=new Promise((t=>this._mutationPromiseResolver=t)),this._layout&&this._layout.listenForChildLoadEvents&&i.addEventListener("load",this._loadListener,!0)))})))}get layout(){return this._layout}set layout(t){if(this._layout===t)return;let e,i;if("object"==typeof t?(void 0!==t.type&&(e=t.type,delete t.type),i=t):e=t,"function"==typeof e){if(this._layout instanceof e)return void(i&&(this._layout.config=i));e=new e(i)}this._layout&&(this._measureCallback=null,this._measureChildOverride=null,this._layout.removeEventListener("scrollsizechange",this),this._layout.removeEventListener("scrollerrorchange",this),this._layout.removeEventListener("itempositionchange",this),this._layout.removeEventListener("rangechange",this),delete this.container[ht],this.container.removeEventListener("load",this._loadListener,!0),this._containerElement&&this._sizeContainer(void 0)),this._layout=e,this._layout&&(this._layout.measureChildren&&"function"==typeof this._layout.updateItemSizes&&("function"==typeof this._layout.measureChildren&&(this._measureChildOverride=this._layout.measureChildren),this._measureCallback=this._layout.updateItemSizes.bind(this._layout)),this._layout.addEventListener("scrollsizechange",this),this._layout.addEventListener("scrollerrorchange",this),this._layout.addEventListener("itempositionchange",this),this._layout.addEventListener("rangechange",this),this._container[ht]=this,this._layout.listenForChildLoadEvents&&this._container.addEventListener("load",this._loadListener,!0),this._schedule(this._updateLayout))}startBenchmarking(){null===this._benchmarkStart&&(this._benchmarkStart=window.performance.now())}stopBenchmarking(){if(null!==this._benchmarkStart){const t=window.performance.now(),e=t-this._benchmarkStart,i=performance.getEntriesByName("uv-virtualizing","measure").filter((e=>e.startTime>=this._benchmarkStart&&e.startTime<t)).reduce(((t,e)=>t+e.duration),0);return this._benchmarkStart=null,{timeElapsed:e,virtualizationTime:i}}return null}_measureChildren(){const t={},e=this._children,i=this._measureChildOverride||this._measureChild;for(let a=0;a<e.length;a++){const s=e[a],o=this._first+a;(this._itemsChanged||this._toBeMeasured.has(s))&&(t[o]=i.call(this,s,this._items[o]))}this._childMeasurements=t,this._schedule(this._updateLayout),this._toBeMeasured.clear()}_measureChild(t){const{width:e,height:i}=t.getBoundingClientRect();return Object.assign({width:e,height:i},function(t){const e=window.getComputedStyle(t);return{marginTop:gt(e.marginTop),marginRight:gt(e.marginRight),marginBottom:gt(e.marginBottom),marginLeft:gt(e.marginLeft)}}(t))}get scrollTarget(){return this._scrollTarget}set scrollTarget(t){t===window&&(t=null),this._scrollTarget!==t&&(this._sizeContainer(void 0),this._scrollTarget&&(this._scrollTarget.removeEventListener("scroll",this,{passive:!0}),this._sizer&&this._scrollTarget===this._containerElement&&this._sizer.remove()),this._scrollTarget=t,t&&(t.addEventListener("scroll",this,{passive:!0}),t===this._containerElement&&(this._sizer=this._sizer||this._createContainerSizer(),this._container.insertBefore(this._sizer,this._container.firstChild))))}set scrollToIndex(t){this._scrollToIndex=t,this._schedule(this._updateLayout)}async _schedule(t){this._scheduled.has(t)||(this._scheduled.add(t),await Promise.resolve(),this._scheduled.delete(t),t.call(this))}async _updateDOM(){const{_rangeChanged:t,_itemsChanged:e}=this;this._visibilityChanged&&(this._notifyVisibility(),this._visibilityChanged=!1),(t||e)&&(this._notifyRange(),this._rangeChanged=!1,this._itemsChanged=!1,await this._mutationPromise),this._layout.measureChildren&&this._children.forEach((t=>this._childrenRO.observe(t))),this._positionChildren(this._childrenPos),this._sizeContainer(this._scrollSize),this._scrollErr&&(this._correctScrollError(this._scrollErr),this._scrollErr=null),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end")}_updateLayout(){this._layout.totalItems=this._totalItems,null!==this._scrollToIndex&&(this._layout.scrollToIndex(this._scrollToIndex.index,this._scrollToIndex.position),this._scrollToIndex=null),this._updateView(),null!==this._childMeasurements&&(this._measureCallback&&this._measureCallback(this._childMeasurements),this._childMeasurements=null),this._layout.reflowIfNeeded(this._itemsChanged),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end")}_handleScrollEvent(){if(this._benchmarkStart&&"mark"in window.performance){try{window.performance.measure("uv-virtualizing","uv-start","uv-end")}catch(t){}window.performance.mark("uv-start")}this._schedule(this._updateLayout)}handleEvent(t){switch(t.type){case"scroll":this._scrollTarget&&t.target!==this._scrollTarget||this._handleScrollEvent();break;case"scrollsizechange":this._scrollSize=t.detail,this._schedule(this._updateDOM);break;case"scrollerrorchange":this._scrollErr=t.detail,this._schedule(this._updateDOM);break;case"itempositionchange":this._childrenPos=t.detail,this._schedule(this._updateDOM);break;case"rangechange":this._adjustRange(t.detail),this._schedule(this._updateDOM);break;default:console.warn("event not handled",t)}}async _initResizeObservers(){if(null===this._containerRO){const t=await ct();this._containerRO=new t((t=>this._containerSizeChanged(t[0].contentRect))),this._childrenRO=new t(this._childrenSizeChanged.bind(this)),this._mutationObserver=new MutationObserver(this._observeMutations.bind(this))}}_applyContainerStyles(){if(pt){if(null===this._containerStylesheet){(this._containerStylesheet=document.createElement("style")).textContent=ut(":host","::slotted(*)")}const t=this._containerElement.shadowRoot||this._containerElement.attachShadow({mode:"open"}),e=t.querySelector("slot:not([name])");t.appendChild(this._containerStylesheet),e||t.appendChild(document.createElement("slot"))}else mt||(mt=document.createElement("style"),mt.textContent=ut(".uni-virtualizer-host",".uni-virtualizer-host > *"),document.head.appendChild(mt)),this._containerElement&&this._containerElement.classList.add("uni-virtualizer-host")}_createContainerSizer(){const t=document.createElement("div");return Object.assign(t.style,{position:"absolute",margin:"-2px 0 0 0",padding:0,visibility:"hidden",fontSize:"2px"}),t.innerHTML="&nbsp;",t.id="uni-virtualizer-spacer",t}get _children(){const t=[];let e=this.container.firstElementChild;for(;e;)"uni-virtualizer-spacer"!==e.id&&t.push(e),e=e.nextElementSibling;return t}_updateView(){if(!this.container||!this._containerElement||!this._layout)return;let t,e,i,a;if(this._scrollTarget===this._containerElement&&null!==this._containerSize)t=this._containerSize.width,e=this._containerSize.height,a=this._containerElement.scrollLeft,i=this._containerElement.scrollTop;else{const s=this._containerElement.getBoundingClientRect(),o=this._scrollTarget?this._scrollTarget.getBoundingClientRect():{top:s.top+window.pageYOffset,left:s.left+window.pageXOffset,width:innerWidth,height:innerHeight},r=o.width,n=o.height,l=Math.max(0,Math.min(r,s.left-o.left)),d=Math.max(0,Math.min(n,s.top-o.top));t=("vertical"===this._layout.direction?Math.max(0,Math.min(r,s.right-o.left)):r)-l,e=("vertical"===this._layout.direction?n:Math.max(0,Math.min(n,s.bottom-o.top)))-d,a=Math.max(0,-(s.left-o.left)),i=Math.max(0,-(s.top-o.top))}this._layout.viewportSize={width:t,height:e},this._layout.viewportScroll={top:i,left:a}}_sizeContainer(t){if(this._scrollTarget===this._containerElement){const e=t&&t.width?t.width-1:0,i=t&&t.height?t.height-1:0;this._sizer&&(this._sizer.style.transform=`translate(${e}px, ${i}px)`)}else if(this._containerElement){const e=this._containerElement.style;e.minWidth=t&&t.width?t.width+"px":null,e.minHeight=t&&t.height?t.height+"px":null}}_positionChildren(t){if(t){const e=this._children;Object.keys(t).forEach((i=>{const a=i-this._first,s=e[a];if(s){const{top:e,left:a,width:o,height:r}=t[i];s.style.position="absolute",s.style.transform=`translate(${a}px, ${e}px)`,void 0!==o&&(s.style.width=o+"px"),void 0!==r&&(s.style.height=r+"px")}}))}}async _adjustRange(t){const{_first:e,_last:i,_firstVisible:a,_lastVisible:s}=this;this._first=t.first,this._last=t.last,this._firstVisible=t.firstVisible,this._lastVisible=t.lastVisible,this._rangeChanged=this._rangeChanged||this._first!==e||this._last!==i,this._visibilityChanged=this._visibilityChanged||this._firstVisible!==a||this._lastVisible!==s}_correctScrollError(t){this._scrollTarget?(this._scrollTarget.scrollTop-=t.top,this._scrollTarget.scrollLeft-=t.left):window.scroll(window.pageXOffset-t.left,window.pageYOffset-t.top)}_notifyRange(){this._container.dispatchEvent(new CustomEvent("rangeChanged",{detail:{first:this._first,last:this._last,firstVisible:this._firstVisible,lastVisible:this._lastVisible}}))}_notifyVisibility(){this._container.dispatchEvent(new CustomEvent("visibilityChanged",{detail:{first:this._first,last:this._last,firstVisible:this._firstVisible,lastVisible:this._lastVisible}}))}_containerSizeChanged(t){const{width:e,height:i}=t;this._containerSize={width:e,height:i},this._schedule(this._updateLayout)}async _observeMutations(){this._mutationsObserved||(this._mutationsObserved=!0,this._mutationPromiseResolver(),this._mutationPromise=new Promise((t=>this._mutationPromiseResolver=t)),this._mutationsObserved=!1)}_childLoaded(){}_childrenSizeChanged(t){for(let e of t)this._toBeMeasured.set(e.target,e.contentRect);this._measureChildren(),this._schedule(this._updateLayout)}}function gt(t){const e=t?parseFloat(t):NaN;return Number.isNaN(e)?0:e}const bt=t=>t;const ft=i(class extends at{constructor(t){if(super(t),this.first=0,this.last=-1,t.type!==e.CHILD)throw new Error("The scroll directive can only be used in child expressions")}render(t){t&&(this.renderItem=t.renderItem,this.keyFunction=t.keyFunction);const e=[];if(this.first>=0&&this.last>=this.first)for(let t=this.first;t<this.last+1;t++)e.push(this.items[t]);return R(e,this.keyFunction||bt,this.renderItem)}update(t,[e]){var i;if(this.scroller||this._initialize(t,e)){const{scroller:t}=this;return this.items=t.items=e.items,t.totalItems=e.totalItems||(null===(i=e.items)||void 0===i?void 0:i.length)||0,t.layout=e.layout,t.scrollTarget=e.scrollTarget||this.container,e.scrollToIndex&&(t.scrollToIndex=e.scrollToIndex),this.render(e)}return c}_initialize(t,e){const i=this.container=t.parentNode;return i&&1===i.nodeType?(this.scroller=new _t({container:i}),i.addEventListener("rangeChanged",(t=>{this.first=t.detail.first,this.last=t.detail.last,this.setValue(this.render())})),!0):(Promise.resolve().then((()=>this.update(t,[e]))),!1)}});function vt(t,e,i,a){var s,o=arguments.length,r=o<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,a);else for(var n=t.length-1;n>=0;n--)(s=t[n])&&(r=(o<3?s(r):o>3?s(e,i,r):s(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r}let yt=class extends o{constructor(){super(...arguments),this.scrollTarget=this}createRenderRoot(){return this}set layout(t){this._layout=t,this.requestUpdate()}get layout(){return this[ht].layout}async scrollToIndex(t,e="start"){this._scrollToIndex={index:t,position:e},this.requestUpdate(),await this.updateComplete,this._scrollToIndex=null}render(){const{items:t,renderItem:e,keyFunction:i,scrollTarget:a}=this,s=this._layout;return r`
            ${ft({items:t,renderItem:e,layout:s,keyFunction:i,scrollTarget:a,scrollToIndex:this._scrollToIndex})}
        `}};vt([h()],yt.prototype,"renderItem",void 0),vt([h({attribute:!1})],yt.prototype,"items",void 0),vt([h({attribute:!1})],yt.prototype,"scrollTarget",void 0),vt([h()],yt.prototype,"keyFunction",void 0),vt([h({attribute:!1})],yt.prototype,"layout",null),yt=vt([d("lit-virtualizer")],yt);const wt=(t,e)=>t.callWS({type:"media_source/browse_media",media_content_id:e}),xt=t=>t.startsWith("media-source://media_source"),kt=async(t,e,i)=>{const a=new FormData;a.append("media_content_id",e),a.append("file",i);const s=await t.fetchWithAuth("/api/media_source/local_source/upload",{method:"POST",body:a});if(413===s.status)throw new Error(`Uploaded file is too large (${i.name})`);if(200!==s.status)throw new Error("Unknown error");return s.json()},$t=async(t,e)=>t.callWS({type:"media_source/local_source/remove",media_content_id:e});class zt{constructor(t=!0){p(this,"_storage",{}),p(this,"_listeners",{}),t&&window.addEventListener("storage",(t=>{t.key&&this.hasKey(t.key)&&(this._storage[t.key]=t.newValue?JSON.parse(t.newValue):t.newValue,this._listeners[t.key]&&this._listeners[t.key].forEach((e=>e(t.oldValue?JSON.parse(t.oldValue):t.oldValue,this._storage[t.key]))))}))}addFromStorage(t){if(!this._storage[t]){const e=window.localStorage.getItem(t);e&&(this._storage[t]=JSON.parse(e))}}subscribeChanges(t,e){return this._listeners[t]?this._listeners[t].push(e):this._listeners[t]=[e],()=>{this.unsubscribeChanges(t,e)}}unsubscribeChanges(t,e){if(!(t in this._listeners))return;const i=this._listeners[t].indexOf(e);-1!==i&&this._listeners[t].splice(i,1)}hasKey(t){return t in this._storage}getValue(t){return this._storage[t]}setValue(t,e){this._storage[t]=e;try{void 0===e?window.localStorage.removeItem(t):window.localStorage.setItem(t,JSON.stringify(e))}catch(t){}}}const Ct=new zt,It=(t,e,i=!0,a)=>s=>{const o=i?Ct:new zt(!1),r=String(s.key);t=t||String(s.key);const n=s.initializer?s.initializer():void 0;o.addFromStorage(t);const l=()=>o.hasKey(t)?o.getValue(t):n;return{kind:"method",placement:"prototype",key:s.key,descriptor:{set(i){((i,a)=>{let r;e&&(r=l()),o.setValue(t,a),e&&i.requestUpdate(s.key,r)})(this,i)},get:()=>l(),enumerable:!0,configurable:!0},finisher(n){if(e&&i){const e=n.prototype.connectedCallback,i=n.prototype.disconnectedCallback;n.prototype.connectedCallback=function(){var i;e.call(this),this[`__unbsubLocalStorage${r}`]=(i=this,o.subscribeChanges(t,(t=>{i.requestUpdate(s.key,t)})))},n.prototype.disconnectedCallback=function(){i.call(this),this[`__unbsubLocalStorage${r}`]()}}e&&n.createProperty(s.key,{noAccessor:!0,...a})}}},Ot=t=>{const e=[];if(!t)return e;const i=new Set;for(const[a]of t.languages){if(i.has(a))continue;i.add(a);let t=a;if(a in A.translations)t=A.translations[a].nativeName;else{const[e,i]=a.split("-");e in A.translations&&(t=`${A.translations[e].nativeName}`,e.toLowerCase()!==i.toLowerCase()&&(t+=` (${i})`))}e.push([a,t])}return e.sort(((t,e)=>j(t[1],e[1])))},St=(t,e,i)=>{const a=[];if(!e)return a;for(const[s,o]of e.languages)s===t&&a.push([o,"male"===o||"female"===o?i(`ui.panel.config.cloud.account.tts.${o}`):o]);return a.sort(((t,e)=>j(t[1],e[1])))};s([d("ha-browse-media-tts")],(function(t,e){class i extends e{constructor(...e){super(...e),t(this)}}return{F:i,d:[{kind:"field",decorators:[h()],key:"hass",value:void 0},{kind:"field",decorators:[h()],key:"item",value:void 0},{kind:"field",decorators:[h()],key:"action",value:void 0},{kind:"field",decorators:[m()],key:"_cloudDefaultOptions",value:void 0},{kind:"field",decorators:[m()],key:"_cloudOptions",value:void 0},{kind:"field",decorators:[m()],key:"_cloudTTSInfo",value:void 0},{kind:"field",decorators:[It("cloudTtsTryMessage",!0,!1)],key:"_message",value:void 0},{kind:"method",key:"render",value:function(){var t;return r`<ha-card>
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
        ${!this._cloudDefaultOptions||this._cloudDefaultOptions[0]===this._cloudOptions[0]&&this._cloudDefaultOptions[1]===this._cloudOptions[1]?r`<span></span>`:r`
              <button class="link" @click=${this._storeDefaults}>
                ${this.hass.localize("ui.components.media-browser.tts.set_as_default")}
              </button>
            `}

        <mwc-button @click=${this._ttsClicked}>
          ${this.hass.localize(`ui.components.media-browser.tts.action_${this.action}`)}
        </mwc-button>
      </div>
    </ha-card> `}},{kind:"method",key:"_renderCloudOptions",value:function(){if(!this._cloudTTSInfo||!this._cloudOptions)return"";const t=this.getLanguages(this._cloudTTSInfo),e=this._cloudOptions,i=this.getSupportedGenders(e[0],this._cloudTTSInfo,this.hass.localize);return r`
      <div class="cloud-options">
        <ha-select
          fixedMenuPosition
          naturalMenuWidth
          .label=${this.hass.localize("ui.components.media-browser.tts.language")}
          .value=${e[0]}
          @selected=${this._handleLanguageChange}
          @closed=${J}
        >
          ${t.map((([t,e])=>r`<mwc-list-item .value=${t}>${e}</mwc-list-item>`))}
        </ha-select>

        <ha-select
          fixedMenuPosition
          naturalMenuWidth
          .label=${this.hass.localize("ui.components.media-browser.tts.gender")}
          .value=${e[1]}
          @selected=${this._handleGenderChange}
          @closed=${J}
        >
          ${i.map((([t,e])=>r`<mwc-list-item .value=${t}>${e}</mwc-list-item>`))}
        </ha-select>
      </div>
    `}},{kind:"method",key:"willUpdate",value:function(t){var e,a;if(u(_(i.prototype),"willUpdate",this).call(this,t),t.has("item")){if(this.item.media_content_id){const t=new URLSearchParams(this.item.media_content_id.split("?")[1]),e=t.get("message"),i=t.get("language"),a=t.get("gender");e&&(this._message=e),i&&a&&(this._cloudOptions=[i,a])}this.isCloudItem&&!this._cloudTTSInfo&&((a=this.hass,a.callWS({type:"cloud/tts/info"})).then((t=>{this._cloudTTSInfo=t})),(t=>t.callWS({type:"cloud/status"}))(this.hass).then((t=>{t.logged_in&&(this._cloudDefaultOptions=t.prefs.tts_default_voice,this._cloudOptions||(this._cloudOptions={...this._cloudDefaultOptions}))})))}if(t.has("message"))return;const s=null===(e=this.shadowRoot.querySelector("ha-textarea"))||void 0===e?void 0:e.value;void 0!==s&&s!==this._message&&(this._message=s)}},{kind:"method",key:"_handleLanguageChange",value:async function(t){t.target.value!==this._cloudOptions[0]&&(this._cloudOptions=[t.target.value,this._cloudOptions[1]])}},{kind:"method",key:"_handleGenderChange",value:async function(t){t.target.value!==this._cloudOptions[1]&&(this._cloudOptions=[this._cloudOptions[0],t.target.value])}},{kind:"field",key:"getLanguages",value:()=>g(Ot)},{kind:"field",key:"getSupportedGenders",value:()=>g(St)},{kind:"get",key:"isCloudItem",value:function(){return this.item.media_content_id.startsWith("media-source://tts/cloud")}},{kind:"method",key:"_ttsClicked",value:async function(){const t=this.shadowRoot.querySelector("ha-textarea").value;this._message=t;const e={...this.item},i=new URLSearchParams;i.append("message",t),this._cloudOptions&&(i.append("language",this._cloudOptions[0]),i.append("gender",this._cloudOptions[1])),e.media_content_id=`${e.media_content_id.split("?")[0]}?${i.toString()}`,e.can_play=!0,e.title=t,b(this,"tts-picked",{item:e})}},{kind:"method",key:"_storeDefaults",value:async function(){const t=this._cloudDefaultOptions;this._cloudDefaultOptions=[...this._cloudOptions];try{await(e=this.hass,i={tts_default_voice:this._cloudDefaultOptions},e.callWS({type:"cloud/update_prefs",...i}))}catch(e){this._cloudDefaultOptions=t,q(this,{text:this.hass.localize("ui.components.media-browser.tts.faild_to_store_defaults",{error:e.message||e})})}var e,i}},{kind:"field",static:!0,key:"styles",value:()=>[f,l`
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
    `]}]}}),o),s([d("ha-media-player-browse")],(function(t,e){class i extends e{constructor(...e){super(...e),t(this)}}return{F:i,d:[{kind:"field",decorators:[h({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[h()],key:"entityId",value:void 0},{kind:"field",decorators:[h()],key:"action",value:()=>"play"},{kind:"field",decorators:[h({type:Boolean})],key:"dialog",value:()=>!1},{kind:"field",decorators:[h()],key:"navigateIds",value:void 0},{kind:"field",decorators:[h({type:Boolean,attribute:"narrow",reflect:!0})],key:"_narrow",value:()=>!1},{kind:"field",decorators:[h({type:Boolean,attribute:"scroll",reflect:!0})],key:"_scrolled",value:()=>!1},{kind:"field",decorators:[m()],key:"_error",value:void 0},{kind:"field",decorators:[m()],key:"_parentItem",value:void 0},{kind:"field",decorators:[m()],key:"_currentItem",value:void 0},{kind:"field",decorators:[v(".header")],key:"_header",value:void 0},{kind:"field",decorators:[v(".content")],key:"_content",value:void 0},{kind:"field",decorators:[v("lit-virtualizer")],key:"_virtualizer",value:void 0},{kind:"field",key:"_observed",value:()=>!1},{kind:"field",key:"_headerOffsetHeight",value:()=>0},{kind:"field",key:"_resizeObserver",value:void 0},{kind:"method",key:"connectedCallback",value:function(){u(_(i.prototype),"connectedCallback",this).call(this),this.updateComplete.then((()=>this._attachResizeObserver()))}},{kind:"method",key:"disconnectedCallback",value:function(){this._resizeObserver&&this._resizeObserver.disconnect()}},{kind:"method",key:"refresh",value:async function(){const t=this.navigateIds[this.navigateIds.length-1];try{this._currentItem=await this._fetchData(this.entityId,t.media_content_id,t.media_content_type),b(this,"media-browsed",{ids:this.navigateIds,current:this._currentItem})}catch(t){this._setError(t)}}},{kind:"method",key:"play",value:function(){var t;null!==(t=this._currentItem)&&void 0!==t&&t.can_play&&this._runAction(this._currentItem)}},{kind:"method",key:"willUpdate",value:function(t){var e;if(u(_(i.prototype),"willUpdate",this).call(this,t),t.has("entityId"))this._setError(void 0);else if(!t.has("navigateIds"))return;this._setError(void 0);const a=t.get("navigateIds"),s=this.navigateIds;null===(e=this._content)||void 0===e||e.scrollTo(0,0),this._scrolled=!1;const o=this._currentItem,r=this._parentItem;this._currentItem=void 0,this._parentItem=void 0;const n=s[s.length-1],l=s.length>1?s[s.length-2]:void 0;let d,c;t.has("entityId")||(a&&s.length===a.length+1&&a.every(((t,e)=>{const i=s[e];return i.media_content_id===t.media_content_id&&i.media_content_type===t.media_content_type}))?c=Promise.resolve(o):a&&s.length===a.length-1&&s.every(((t,e)=>{const i=a[e];return t.media_content_id===i.media_content_id&&t.media_content_type===i.media_content_type}))&&(d=Promise.resolve(r))),d||(d=this._fetchData(this.entityId,n.media_content_id,n.media_content_type)),d.then((t=>{this._currentItem=t,b(this,"media-browsed",{ids:s,current:t})}),(e=>{var i;a&&t.has("entityId")&&s.length===a.length&&a.every(((t,e)=>s[e].media_content_id===t.media_content_id&&s[e].media_content_type===t.media_content_type))?b(this,"media-browsed",{ids:[{media_content_id:void 0,media_content_type:void 0}],replace:!0}):"entity_not_found"===e.code&&D.includes(null===(i=this.hass.states[this.entityId])||void 0===i?void 0:i.state)?this._setError({message:this.hass.localize("ui.components.media-browser.media_player_unavailable"),code:"entity_not_found"}):this._setError(e)})),c||void 0===l||(c=this._fetchData(this.entityId,l.media_content_id,l.media_content_type)),c&&c.then((t=>{this._parentItem=t}))}},{kind:"method",key:"shouldUpdate",value:function(t){if(t.size>1||!t.has("hass"))return!0;const e=t.get("hass");return void 0===e||e.localize!==this.hass.localize}},{kind:"method",key:"firstUpdated",value:function(){this._measureCard(),this._attachResizeObserver()}},{kind:"method",key:"updated",value:function(t){if(u(_(i.prototype),"updated",this).call(this,t),t.has("_scrolled"))this._animateHeaderHeight();else if(t.has("_currentItem")){var e;if(this._setHeaderHeight(),this._observed)return;const t=null===(e=this._virtualizer)||void 0===e?void 0:e._virtualizer;t&&(this._observed=!0,setTimeout((()=>t._observeMutations()),0))}}},{kind:"method",key:"render",value:function(){if(this._error)return r`
        <div class="container">
          <ha-alert alert-type="error">
            ${this._renderError(this._error)}
          </ha-alert>
        </div>
      `;if(!this._currentItem)return r`<ha-circular-progress active></ha-circular-progress>`;const t=this._currentItem,e=this.hass.localize(`ui.components.media-browser.class.${t.media_class}`),i=t.children||[],a=P[t.media_class],s=t.children_media_class?P[t.children_media_class]:P.directory,o=t.thumbnail?this._getSignedThumbnail(t.thumbnail).then((t=>`url(${t})`)):"none";return r`
              ${t.can_play?r`
                      <div
                        class="header ${y({"no-img":!t.thumbnail,"no-dialog":!this.dialog})}"
                        @transitionend=${this._setHeaderHeight}
                      >
                        <div class="header-content">
                          ${t.thumbnail?r`
                                <div
                                  class="img"
                                  style="background-image: ${nt(o,"")}"
                                >
                                  ${this._narrow&&null!=t&&t.can_play?r`
                                        <ha-fab
                                          mini
                                          .item=${t}
                                          @click=${this._actionClicked}
                                        >
                                          <ha-svg-icon
                                            slot="icon"
                                            .label=${this.hass.localize(`ui.components.media-browser.${this.action}-media`)}
                                            .path=${"play"===this.action?w:x}
                                          ></ha-svg-icon>
                                          ${this.hass.localize(`ui.components.media-browser.${this.action}`)}
                                        </ha-fab>
                                      `:""}
                                </div>
                              `:r``}
                          <div class="header-info">
                            <div class="breadcrumb">
                              <h1 class="title">${t.title}</h1>
                              ${e?r` <h2 class="subtitle">${e}</h2> `:""}
                            </div>
                            ${!t.can_play||t.thumbnail&&this._narrow?"":r`
                                  <mwc-button
                                    raised
                                    .item=${t}
                                    @click=${this._actionClicked}
                                  >
                                    <ha-svg-icon
                                      .label=${this.hass.localize(`ui.components.media-browser.${this.action}-media`)}
                                      .path=${"play"===this.action?w:x}
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
            ${this._error?r`
                    <div class="container">
                      <ha-alert alert-type="error">
                        ${this._renderError(this._error)}
                      </ha-alert>
                    </div>
                  `:(n=t.media_content_id,n.startsWith("media-source://tts/")?r`
                    <ha-browse-media-tts
                      .item=${t}
                      .hass=${this.hass}
                      .action=${this.action}
                      @tts-picked=${this._ttsPicked}
                    ></ha-browse-media-tts>
                  `:i.length||t.not_shown?"grid"===s.layout?r`
                    <lit-virtualizer
                      scroller
                      .layout=${F({itemSize:{width:"175px",height:"portrait"===s.thumbnail_ratio?"312px":"225px"},gap:"16px",flex:{preserve:"aspect-ratio"},justify:"space-evenly",direction:"vertical"})}
                      .items=${i}
                      .renderItem=${this._renderGridItem}
                      class="children ${y({portrait:"portrait"===s.thumbnail_ratio,not_shown:!!t.not_shown})}"
                    ></lit-virtualizer>
                    ${t.not_shown?r`
                          <div class="grid not-shown">
                            <div class="title">
                              ${this.hass.localize("ui.components.media-browser.not_shown",{count:t.not_shown})}
                            </div>
                          </div>
                        `:""}
                  `:r`
                    <mwc-list>
                      <lit-virtualizer
                        scroller
                        .items=${i}
                        style=${$({height:72*i.length+26+"px"})}
                        .renderItem=${this._renderListItem}
                      ></lit-virtualizer>
                      ${t.not_shown?r`
                            <mwc-list-item
                              noninteractive
                              class="not-shown"
                              .graphic=${a.show_list_images?"medium":"avatar"}
                              dir=${T(this.hass)}
                            >
                              <span class="title">
                                ${this.hass.localize("ui.components.media-browser.not_shown",{count:t.not_shown})}
                              </span>
                            </mwc-list-item>
                          `:""}
                    </mwc-list>
                  `:r`
                    <div class="container no-items">
                      ${"media-source://media_source/local/."===t.media_content_id?r`
                            <div class="highlight-add-button">
                              <span>
                                <ha-svg-icon
                                  .path=${k}
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
    `;var n}},{kind:"field",key:"_renderGridItem",value(){return t=>{const e=t.thumbnail?this._getSignedThumbnail(t.thumbnail).then((t=>`url(${t})`)):"none";return r`
      <div class="child" .item=${t} @click=${this._childClicked}>
        <ha-card outlined>
          <div class="thumbnail">
            ${t.thumbnail?r`
                  <div
                    class="${["app","directory"].includes(t.media_class)?"centered-image":""} ${G(t.thumbnail)?"brand-image":""} image"
                    style="background-image: ${nt(e,"")}"
                  ></div>
                `:r`
                  <div class="icon-holder image">
                    <ha-svg-icon
                      class="folder"
                      .path=${P["directory"===t.media_class&&t.children_media_class||t.media_class].icon}
                    ></ha-svg-icon>
                  </div>
                `}
            ${t.can_play?r`
                  <ha-icon-button
                    class="play ${y({can_expand:t.can_expand})}"
                    .item=${t}
                    .label=${this.hass.localize(`ui.components.media-browser.${this.action}-media`)}
                    .path=${"play"===this.action?w:x}
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
    `}}},{kind:"field",key:"_renderListItem",value(){return t=>{const e=this._currentItem,i=P[e.media_class],a=i.show_list_images&&t.thumbnail?this._getSignedThumbnail(t.thumbnail).then((t=>`url(${t})`)):"none";return r`
      <mwc-list-item
        @click=${this._childClicked}
        .item=${t}
        .graphic=${i.show_list_images?"medium":"avatar"}
        dir=${T(this.hass)}
      >
        <div
          class=${y({graphic:!0,thumbnail:!0===i.show_list_images})}
          style="background-image: ${nt(a,"")}"
          slot="graphic"
        >
          <ha-icon-button
            class="play ${y({show:!i.show_list_images||!t.thumbnail})}"
            .item=${t}
            .label=${this.hass.localize(`ui.components.media-browser.${this.action}-media`)}
            .path=${"play"===this.action?w:x}
            @click=${this._actionClicked}
          ></ha-icon-button>
        </div>
        <span class="title">${t.title}</span>
      </mwc-list-item>
    `}}},{kind:"method",key:"_getSignedThumbnail",value:async function(t){if(!t)return"";if(t.startsWith("/"))return(await V(this.hass,t)).path;var e;G(t)&&(t=K({domain:Y(t),type:"icon",useFallback:!0,darkOptimized:null===(e=this.hass.themes)||void 0===e?void 0:e.darkMode}));return t}},{kind:"field",key:"_actionClicked",value(){return t=>{t.stopPropagation();const e=t.currentTarget.item;this._runAction(e)}}},{kind:"method",key:"_runAction",value:function(t){b(this,"media-picked",{item:t,navigateIds:this.navigateIds})}},{kind:"method",key:"_ttsPicked",value:function(t){t.stopPropagation();const e=this.navigateIds.slice(0,-1);e.push(t.detail.item),b(this,"media-picked",{...t.detail,navigateIds:e})}},{kind:"field",key:"_childClicked",value(){return async t=>{const e=t.currentTarget.item;e&&(e.can_expand?b(this,"media-browsed",{ids:[...this.navigateIds,e]}):this._runAction(e))}}},{kind:"method",key:"_fetchData",value:async function(t,e,i){return t!==N?H(this.hass,t,e,i):wt(this.hass,e)}},{kind:"method",key:"_measureCard",value:function(){this._narrow=(this.dialog?window.innerWidth:this.offsetWidth)<450}},{kind:"method",key:"_attachResizeObserver",value:async function(){this._resizeObserver||(await U(),this._resizeObserver=new ResizeObserver(W((()=>this._measureCard()),250,!1))),this._resizeObserver.observe(this)}},{kind:"method",key:"_closeDialogAction",value:function(){b(this,"close-dialog")}},{kind:"method",key:"_setError",value:function(t){this.dialog?t&&(this._closeDialogAction(),q(this,{title:this.hass.localize("ui.components.media-browser.media_browsing_error"),text:this._renderError(t)})):this._error=t}},{kind:"method",key:"_renderError",value:function(t){return"Media directory does not exist."===t.message?r`
        <h2>
          ${this.hass.localize("ui.components.media-browser.no_local_media_found")}
        </h2>
        <p>
          ${this.hass.localize("ui.components.media-browser.no_media_folder")}
          <br />
          ${this.hass.localize("ui.components.media-browser.setup_local_help","documentation",r`<a
              href=${B(this.hass,"/more-info/local-media/setup-media")}
              target="_blank"
              rel="noreferrer"
              >${this.hass.localize("ui.components.media-browser.documentation")}</a
            >`)}
          <br />
          ${this.hass.localize("ui.components.media-browser.local_media_files")}
        </p>
      `:r`<span class="error">${t.message}</span>`}},{kind:"method",key:"_setHeaderHeight",value:async function(){await this.updateComplete;const t=this._header,e=this._content;t&&e&&(this._headerOffsetHeight=t.offsetHeight,e.style.marginTop=`${this._headerOffsetHeight}px`,e.style.maxHeight=`calc(var(--media-browser-max-height, 100%) - ${this._headerOffsetHeight}px)`)}},{kind:"method",key:"_animateHeaderHeight",value:function(){let t;const e=i=>{void 0===t&&(t=i);const a=i-t;this._setHeaderHeight(),a<400&&requestAnimationFrame(e)};requestAnimationFrame(e)}},{kind:"method",decorators:[z({passive:!0})],key:"_scroll",value:function(t){const e=t.currentTarget;!this._scrolled&&e.scrollTop>this._headerOffsetHeight?this._scrolled=!0:this._scrolled&&e.scrollTop<this._headerOffsetHeight&&(this._scrolled=!1)}},{kind:"get",static:!0,key:"styles",value:function(){return[C,l`
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
      `]}}]}}),o);s([d("ha-media-manage-button")],(function(t,e){return{F:class extends e{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[h({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[h()],key:"currentItem",value:void 0},{kind:"field",decorators:[m()],key:"_uploading",value:()=>0},{kind:"method",key:"render",value:function(){return this.currentItem&&xt(this.currentItem.media_content_id||"")?r`
      <mwc-button
        .label=${this.hass.localize("ui.components.media-browser.file_management.manage")}
        @click=${this._manage}
      >
        <ha-svg-icon .path=${I} slot="icon"></ha-svg-icon>
      </mwc-button>
    `:r``}},{kind:"method",key:"_manage",value:function(){var t,e;t=this,e={currentItem:this.currentItem,onClose:()=>b(this,"media-refresh")},b(t,"show-dialog",{dialogTag:"dialog-media-manage",dialogImport:()=>import("./c.f940f080.js"),dialogParams:e})}},{kind:"field",static:!0,key:"styles",value:()=>l`
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
  `}]}}),o),s([d("dialog-media-player-browse")],(function(t,e){return{F:class extends e{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[h({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[m()],key:"_currentItem",value:void 0},{kind:"field",decorators:[m()],key:"_navigateIds",value:void 0},{kind:"field",decorators:[m()],key:"_params",value:void 0},{kind:"field",decorators:[v("ha-media-player-browse")],key:"_browser",value:void 0},{kind:"method",key:"showDialog",value:function(t){this._params=t,this._navigateIds=t.navigateIds||[{media_content_id:void 0,media_content_type:void 0}]}},{kind:"method",key:"closeDialog",value:function(){this._params=void 0,this._navigateIds=void 0,this._currentItem=void 0,b(this,"dialog-closed",{dialog:this.localName})}},{kind:"method",key:"render",value:function(){return this._params&&this._navigateIds?r`
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
          ${this._navigateIds.length>1?r`
                <ha-icon-button
                  slot="navigationIcon"
                  .path=${O}
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
            .path=${S}
            dialogAction="close"
            slot="actionItems"
            class="header_button"
            dir=${T(this.hass)}
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
    `:r``}},{kind:"method",key:"_goBack",value:function(){var t;this._navigateIds=null===(t=this._navigateIds)||void 0===t?void 0:t.slice(0,-1),this._currentItem=void 0}},{kind:"method",key:"_mediaBrowsed",value:function(t){this._navigateIds=t.detail.ids,this._currentItem=t.detail.current}},{kind:"method",key:"_mediaPicked",value:function(t){this._params.mediaPickedCallback(t.detail),"play"!==this._action&&this.closeDialog()}},{kind:"get",key:"_action",value:function(){return this._params.action||"play"}},{kind:"method",key:"_refreshMedia",value:function(){this._browser.refresh()}},{kind:"get",static:!0,key:"styles",value:function(){return[E,l`
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
      `]}}]}}),o);var Et=Object.freeze({__proto__:null});export{Et as a,wt as b,at as d,xt as i,$t as r,kt as u};
