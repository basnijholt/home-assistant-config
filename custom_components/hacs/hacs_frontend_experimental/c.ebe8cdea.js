import{an as e,S as t,ao as i,ap as a,aq as o,P as s,Q as l,a7 as r,_ as n,j as c,e as d,i as h,y as u,ar as f,a4 as p,O as m,d as b,n as v,t as _,E as g,G as y,k,C as w,p as x,as as $,at as R,ae as z,a6 as S,au as C,h as T,R as F,av as D,aw as H,ax as E,ay as L,az as M,aA as P,aB as B,ag as j,aC as A,aD as O,aE as N,aF as W,aG as I,aH as U,aI as q,af as K,aJ as V,c as G,aK as Y}from"./main-c4dd4de7.js";import{c as X,b as Q}from"./c.469b562b.js";import{p as Z}from"./c.0bd944cb.js";import{L as J}from"./c.613ad89f.js";import{d as ee,s as te}from"./c.984a9eec.js";import{b as ie}from"./c.07e395f8.js";import{m as ae}from"./c.fc663bf1.js";import{a as oe}from"./c.e8dd2da2.js";import{r as se,a as le}from"./c.3c09930b.js";import"./c.9997a901.js";import{d as re}from"./c.10855172.js";import{i as ne}from"./c.21c042d4.js";import"./c.8e28b461.js";import"./c.743a15a1.js";import"./c.2610e8cd.js";import"./c.a0946910.js";import"./c.89c41570.js";import"./c.34f240ae.js";import"./c.f2bb3724.js";var ce=new Set;const de=[{properties:{_parentResizable:{type:Object,observer:"_parentResizableChanged"},_notifyingDescendant:{type:Boolean,value:!1}},listeners:{"iron-request-resize-notifications":"_onIronRequestResizeNotifications"},created:function(){this._interestedResizables=[],this._boundNotifyResize=this.notifyResize.bind(this),this._boundOnDescendantIronResize=this._onDescendantIronResize.bind(this)},attached:function(){this._requestResizeNotifications()},detached:function(){this._parentResizable?this._parentResizable.stopResizeNotificationsFor(this):(ce.delete(this),window.removeEventListener("resize",this._boundNotifyResize)),this._parentResizable=null},notifyResize:function(){this.isAttached&&(this._interestedResizables.forEach((function(e){this.resizerShouldNotify(e)&&this._notifyDescendant(e)}),this),this._fireResize())},assignParentResizable:function(e){this._parentResizable&&this._parentResizable.stopResizeNotificationsFor(this),this._parentResizable=e,e&&-1===e._interestedResizables.indexOf(this)&&(e._interestedResizables.push(this),e._subscribeIronResize(this))},stopResizeNotificationsFor:function(e){var t=this._interestedResizables.indexOf(e);t>-1&&(this._interestedResizables.splice(t,1),this._unsubscribeIronResize(e))},_subscribeIronResize:function(e){e.addEventListener("iron-resize",this._boundOnDescendantIronResize)},_unsubscribeIronResize:function(e){e.removeEventListener("iron-resize",this._boundOnDescendantIronResize)},resizerShouldNotify:function(e){return!0},_onDescendantIronResize:function(t){this._notifyingDescendant?t.stopPropagation():e||this._fireResize()},_fireResize:function(){this.fire("iron-resize",null,{node:this,bubbles:!1})},_onIronRequestResizeNotifications:function(e){var i=t(e).rootTarget;i!==this&&(i.assignParentResizable(this),this._notifyDescendant(i),e.stopPropagation())},_parentResizableChanged:function(e){e&&window.removeEventListener("resize",this._boundNotifyResize)},_notifyDescendant:function(e){this.isAttached&&(this._notifyingDescendant=!0,e.notifyResize(),this._notifyingDescendant=!1)},_requestResizeNotifications:function(){if(this.isAttached)if("loading"===document.readyState){var e=this._requestResizeNotifications.bind(this);document.addEventListener("readystatechange",(function t(){document.removeEventListener("readystatechange",t),e()}))}else this._findParent(),this._parentResizable?this._parentResizable._interestedResizables.forEach((function(e){e!==this&&e._findParent()}),this):(ce.forEach((function(e){e!==this&&e._findParent()}),this),window.addEventListener("resize",this._boundNotifyResize),this.notifyResize())},_findParent:function(){this.assignParentResizable(null),this.fire("iron-request-resize-notifications",null,{node:this,bubbles:!0,cancelable:!0}),this._parentResizable?ce.delete(this):ce.add(this)}},{listeners:{"app-reset-layout":"_appResetLayoutHandler","iron-resize":"resetLayout"},attached:function(){this.fire("app-reset-layout")},_appResetLayoutHandler:function(e){t(e).path[0]!==this&&(this.resetLayout(),e.stopPropagation())},_updateLayoutStates:function(){console.error("unimplemented")},resetLayout:function(){var e=this._updateLayoutStates.bind(this);this._layoutDebouncer=i.debounce(this._layoutDebouncer,a,e),o(this._layoutDebouncer),this._notifyDescendantResize()},_notifyLayoutChanged:function(){var e=this;requestAnimationFrame((function(){e.fire("app-reset-layout")}))},_notifyDescendantResize:function(){this.isAttached&&this._interestedResizables.forEach((function(e){this.resizerShouldNotify(e)&&this._notifyDescendant(e)}),this)}}],he={properties:{scrollTarget:{type:HTMLElement,value:function(){return this._defaultScrollTarget}}},observers:["_scrollTargetChanged(scrollTarget, isAttached)"],_shouldHaveListener:!0,_scrollTargetChanged:function(e,i){if(this._oldScrollTarget&&(this._toggleScrollListener(!1,this._oldScrollTarget),this._oldScrollTarget=null),i)if("document"===e)this.scrollTarget=this._doc;else if("string"==typeof e){var a=this.domHost;this.scrollTarget=a&&a.$?a.$[e]:t(this.ownerDocument).querySelector("#"+e)}else this._isValidScrollTarget()&&(this._oldScrollTarget=e,this._toggleScrollListener(this._shouldHaveListener,e))},_scrollHandler:function(){},get _defaultScrollTarget(){return this._doc},get _doc(){return this.ownerDocument.documentElement},get _scrollTop(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.pageYOffset:this.scrollTarget.scrollTop:0},get _scrollLeft(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.pageXOffset:this.scrollTarget.scrollLeft:0},set _scrollTop(e){this.scrollTarget===this._doc?window.scrollTo(window.pageXOffset,e):this._isValidScrollTarget()&&(this.scrollTarget.scrollTop=e)},set _scrollLeft(e){this.scrollTarget===this._doc?window.scrollTo(e,window.pageYOffset):this._isValidScrollTarget()&&(this.scrollTarget.scrollLeft=e)},scroll:function(e,t){var i;"object"==typeof e?(i=e.left,t=e.top):i=e,i=i||0,t=t||0,this.scrollTarget===this._doc?window.scrollTo(i,t):this._isValidScrollTarget()&&(this.scrollTarget.scrollLeft=i,this.scrollTarget.scrollTop=t)},get _scrollTargetWidth(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.innerWidth:this.scrollTarget.offsetWidth:0},get _scrollTargetHeight(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.innerHeight:this.scrollTarget.offsetHeight:0},_isValidScrollTarget:function(){return this.scrollTarget instanceof HTMLElement},_toggleScrollListener:function(e,t){var i=t===this._doc?window:t;e?this._boundScrollHandler||(this._boundScrollHandler=this._scrollHandler.bind(this),i.addEventListener("scroll",this._boundScrollHandler)):this._boundScrollHandler&&(i.removeEventListener("scroll",this._boundScrollHandler),this._boundScrollHandler=null)},toggleScrollListener:function(e){this._shouldHaveListener=e,this._toggleScrollListener(e,this.scrollTarget)}},ue={},fe=[he,{properties:{effects:{type:String},effectsConfig:{type:Object,value:function(){return{}}},disabled:{type:Boolean,reflectToAttribute:!0,value:!1},threshold:{type:Number,value:0},thresholdTriggered:{type:Boolean,notify:!0,readOnly:!0,reflectToAttribute:!0}},observers:["_effectsChanged(effects, effectsConfig, isAttached)"],_updateScrollState:function(e){},isOnScreen:function(){return!1},isContentBelow:function(){return!1},_effectsRunFn:null,_effects:null,get _clampedScrollTop(){return Math.max(0,this._scrollTop)},attached:function(){this._scrollStateChanged()},detached:function(){this._tearDownEffects()},createEffect:function(e,t){var i=ue[e];if(!i)throw new ReferenceError(this._getUndefinedMsg(e));var a=this._boundEffect(i,t||{});return a.setUp(),a},_effectsChanged:function(e,t,i){this._tearDownEffects(),e&&i&&(e.split(" ").forEach((function(e){var i;""!==e&&((i=ue[e])?this._effects.push(this._boundEffect(i,t[e])):console.warn(this._getUndefinedMsg(e)))}),this),this._setUpEffect())},_layoutIfDirty:function(){return this.offsetWidth},_boundEffect:function(e,t){t=t||{};var i=parseFloat(t.startsAt||0),a=parseFloat(t.endsAt||1),o=a-i,s=function(){},l=0===i&&1===a?e.run:function(t,a){e.run.call(this,Math.max(0,(t-i)/o),a)};return{setUp:e.setUp?e.setUp.bind(this,t):s,run:e.run?l.bind(this):s,tearDown:e.tearDown?e.tearDown.bind(this):s}},_setUpEffect:function(){this.isAttached&&this._effects&&(this._effectsRunFn=[],this._effects.forEach((function(e){!1!==e.setUp()&&this._effectsRunFn.push(e.run)}),this))},_tearDownEffects:function(){this._effects&&this._effects.forEach((function(e){e.tearDown()})),this._effectsRunFn=[],this._effects=[]},_runEffects:function(e,t){this._effectsRunFn&&this._effectsRunFn.forEach((function(i){i(e,t)}))},_scrollHandler:function(){this._scrollStateChanged()},_scrollStateChanged:function(){if(!this.disabled){var e=this._clampedScrollTop;this._updateScrollState(e),this.threshold>0&&this._setThresholdTriggered(e>=this.threshold)}},_getDOMRef:function(e){console.warn("_getDOMRef","`"+e+"` is undefined")},_getUndefinedMsg:function(e){return"Scroll effect `"+e+"` is undefined. Did you forget to import app-layout/app-scroll-effects/effects/"+e+".html ?"}}];s({_template:l`
    <style>
      :host {
        position: relative;
        display: block;
        transition-timing-function: linear;
        transition-property: -webkit-transform;
        transition-property: transform;
      }

      :host::before {
        position: absolute;
        right: 0px;
        bottom: -5px;
        left: 0px;
        width: 100%;
        height: 5px;
        content: "";
        transition: opacity 0.4s;
        pointer-events: none;
        opacity: 0;
        box-shadow: inset 0px 5px 6px -3px rgba(0, 0, 0, 0.4);
        will-change: opacity;
        @apply --app-header-shadow;
      }

      :host([shadow])::before {
        opacity: 1;
      }

      #background {
        @apply --layout-fit;
        overflow: hidden;
      }

      #backgroundFrontLayer,
      #backgroundRearLayer {
        @apply --layout-fit;
        height: 100%;
        pointer-events: none;
        background-size: cover;
      }

      #backgroundFrontLayer {
        @apply --app-header-background-front-layer;
      }

      #backgroundRearLayer {
        opacity: 0;
        @apply --app-header-background-rear-layer;
      }

      #contentContainer {
        position: relative;
        width: 100%;
        height: 100%;
      }

      :host([disabled]),
      :host([disabled])::after,
      :host([disabled]) #backgroundFrontLayer,
      :host([disabled]) #backgroundRearLayer,
      /* Silent scrolling should not run CSS transitions */
      :host([silent-scroll]),
      :host([silent-scroll])::after,
      :host([silent-scroll]) #backgroundFrontLayer,
      :host([silent-scroll]) #backgroundRearLayer {
        transition: none !important;
      }

      :host([disabled]) ::slotted(app-toolbar:first-of-type),
      :host([disabled]) ::slotted([sticky]),
      /* Silent scrolling should not run CSS transitions */
      :host([silent-scroll]) ::slotted(app-toolbar:first-of-type),
      :host([silent-scroll]) ::slotted([sticky]) {
        transition: none !important;
      }

    </style>
    <div id="contentContainer">
      <slot id="slot"></slot>
    </div>
`,is:"app-header",behaviors:[fe,de],properties:{condenses:{type:Boolean,value:!1},fixed:{type:Boolean,value:!1},reveals:{type:Boolean,value:!1},shadow:{type:Boolean,reflectToAttribute:!0,value:!1}},observers:["_configChanged(isAttached, condenses, fixed)"],_height:0,_dHeight:0,_stickyElTop:0,_stickyElRef:null,_top:0,_progress:0,_wasScrollingDown:!1,_initScrollTop:0,_initTimestamp:0,_lastTimestamp:0,_lastScrollTop:0,get _maxHeaderTop(){return this.fixed?this._dHeight:this._height+5},get _stickyEl(){if(this._stickyElRef)return this._stickyElRef;for(var e,i=t(this.$.slot).getDistributedNodes(),a=0;e=i[a];a++)if(e.nodeType===Node.ELEMENT_NODE){if(e.hasAttribute("sticky")){this._stickyElRef=e;break}this._stickyElRef||(this._stickyElRef=e)}return this._stickyElRef},_configChanged:function(){this.resetLayout(),this._notifyLayoutChanged()},_updateLayoutStates:function(){if(0!==this.offsetWidth||0!==this.offsetHeight){var e=this._clampedScrollTop,t=0===this._height||0===e,i=this.disabled;this._height=this.offsetHeight,this._stickyElRef=null,this.disabled=!0,t||this._updateScrollState(0,!0),this._mayMove()?this._dHeight=this._stickyEl?this._height-this._stickyEl.offsetHeight:0:this._dHeight=0,this._stickyElTop=this._stickyEl?this._stickyEl.offsetTop:0,this._setUpEffect(),t?this._updateScrollState(e,!0):(this._updateScrollState(this._lastScrollTop,!0),this._layoutIfDirty()),this.disabled=i}},_updateScrollState:function(e,t){if(0!==this._height){var i=0,a=0,o=this._top;this._lastScrollTop;var s=this._maxHeaderTop,l=e-this._lastScrollTop,r=Math.abs(l),n=e>this._lastScrollTop,c=performance.now();if(this._mayMove()&&(a=this._clamp(this.reveals?o+l:e,0,s)),e>=this._dHeight&&(a=this.condenses&&!this.fixed?Math.max(this._dHeight,a):a,this.style.transitionDuration="0ms"),this.reveals&&!this.disabled&&r<100&&((c-this._initTimestamp>300||this._wasScrollingDown!==n)&&(this._initScrollTop=e,this._initTimestamp=c),e>=s))if(Math.abs(this._initScrollTop-e)>30||r>10){n&&e>=s?a=s:!n&&e>=this._dHeight&&(a=this.condenses&&!this.fixed?this._dHeight:0);var d=l/(c-this._lastTimestamp);this.style.transitionDuration=this._clamp((a-o)/d,0,300)+"ms"}else a=this._top;i=0===this._dHeight?e>0?1:0:a/this._dHeight,t||(this._lastScrollTop=e,this._top=a,this._wasScrollingDown=n,this._lastTimestamp=c),(t||i!==this._progress||o!==a||0===e)&&(this._progress=i,this._runEffects(i,a),this._transformHeader(a))}},_mayMove:function(){return this.condenses||!this.fixed},willCondense:function(){return this._dHeight>0&&this.condenses},isOnScreen:function(){return 0!==this._height&&this._top<this._height},isContentBelow:function(){return 0===this._top?this._clampedScrollTop>0:this._clampedScrollTop-this._maxHeaderTop>=0},_transformHeader:function(e){this.translate3d(0,-e+"px",0),this._stickyEl&&this.translate3d(0,this.condenses&&e>=this._stickyElTop?Math.min(e,this._dHeight)-this._stickyElTop+"px":0,0,this._stickyEl)},_clamp:function(e,t,i){return Math.min(i,Math.max(t,e))},_ensureBgContainers:function(){this._bgContainer||(this._bgContainer=document.createElement("div"),this._bgContainer.id="background",this._bgRear=document.createElement("div"),this._bgRear.id="backgroundRearLayer",this._bgContainer.appendChild(this._bgRear),this._bgFront=document.createElement("div"),this._bgFront.id="backgroundFrontLayer",this._bgContainer.appendChild(this._bgFront),t(this.root).insertBefore(this._bgContainer,this.$.contentContainer))},_getDOMRef:function(e){switch(e){case"backgroundFrontLayer":return this._ensureBgContainers(),this._bgFront;case"backgroundRearLayer":return this._ensureBgContainers(),this._bgRear;case"background":return this._ensureBgContainers(),this._bgContainer;case"mainTitle":return t(this).querySelector("[main-title]");case"condensedTitle":return t(this).querySelector("[condensed-title]")}return null},getScrollState:function(){return{progress:this._progress,top:this._top}}});const pe={second:45,minute:45,hour:22,day:5,week:4,month:11};Z&&await Z;const me=r((e=>new Intl.RelativeTimeFormat(e.language,{numeric:"auto"}))),be=(e,t,i,a=!0)=>{const o=function(e,t=Date.now(),i={}){const a={...pe,...i||{}},o=(+e-+t)/1e3;if(Math.abs(o)<a.second)return{value:Math.round(o),unit:"second"};const s=o/60;if(Math.abs(s)<a.minute)return{value:Math.round(s),unit:"minute"};const l=o/3600;if(Math.abs(l)<a.hour)return{value:Math.round(l),unit:"hour"};const r=o/86400;if(Math.abs(r)<a.day)return{value:Math.round(r),unit:"day"};const n=o/604800;if(Math.abs(n)<a.week)return{value:Math.round(n),unit:"week"};const c=new Date(e),d=new Date(t),h=c.getFullYear()-d.getFullYear(),u=12*h+c.getMonth()-d.getMonth();return Math.round(Math.abs(u))<a.month?{value:Math.round(u),unit:"month"}:{value:Math.round(h),unit:"year"}}(e,i);return a?me(t).format(o.value,o.unit):Intl.NumberFormat(t.language,{style:"unit",unit:o.unit,unitDisplay:"long"}).format(Math.abs(o.value))};n([v("search-input")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[d({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[d()],key:"filter",value:void 0},{kind:"field",decorators:[d({type:Boolean})],key:"suffix",value:()=>!1},{kind:"field",decorators:[d({type:Boolean})],key:"autofocus",value:()=>!1},{kind:"field",decorators:[d({type:String})],key:"label",value:void 0},{kind:"method",key:"focus",value:function(){var e;null===(e=this._input)||void 0===e||e.focus()}},{kind:"field",decorators:[h("ha-textfield",!0)],key:"_input",value:void 0},{kind:"method",key:"render",value:function(){return u`
      <ha-textfield
        .autofocus=${this.autofocus}
        .label=${this.label||"Search"}
        .value=${this.filter||""}
        icon
        .iconTrailing=${this.filter||this.suffix}
        @input=${this._filterInputChanged}
      >
        <slot name="prefix" slot="leadingIcon">
          <ha-svg-icon
            tabindex="-1"
            class="prefix"
            .path=${f}
          ></ha-svg-icon>
        </slot>
        <div class="trailing" slot="trailingIcon">
          ${this.filter&&u`
            <ha-icon-button
              @click=${this._clearSearch}
              .label=${this.hass.localize("ui.common.clear")}
              .path=${p}
              class="clear-button"
            ></ha-icon-button>
          `}
          <slot name="suffix"></slot>
        </div>
      </ha-textfield>
    `}},{kind:"method",key:"_filterChanged",value:async function(e){m(this,"value-changed",{value:String(e)})}},{kind:"method",key:"_filterInputChanged",value:async function(e){this._filterChanged(e.target.value)}},{kind:"method",key:"_clearSearch",value:async function(){this._filterChanged("")}},{kind:"get",static:!0,key:"styles",value:function(){return b`
      :host {
        display: inline-flex;
      }
      ha-svg-icon,
      ha-icon-button {
        color: var(--primary-text-color);
      }
      ha-svg-icon {
        outline: none;
      }
      .clear-button {
        --mdc-icon-size: 20px;
      }
      ha-textfield {
        display: inherit;
      }
      .trailing {
        display: flex;
        align-items: center;
      }
    `}}]}}),c);const ve=Symbol("Comlink.proxy"),_e=Symbol("Comlink.endpoint"),ge=Symbol("Comlink.releaseProxy"),ye=Symbol("Comlink.thrown"),ke=e=>"object"==typeof e&&null!==e||"function"==typeof e,we=new Map([["proxy",{canHandle:e=>ke(e)&&e[ve],serialize(e){const{port1:t,port2:i}=new MessageChannel;return xe(e,t),[i,[i]]},deserialize:e=>(e.start(),Re(e))}],["throw",{canHandle:e=>ke(e)&&ye in e,serialize({value:e}){let t;return t=e instanceof Error?{isError:!0,value:{message:e.message,name:e.name,stack:e.stack}}:{isError:!1,value:e},[t,[]]},deserialize(e){if(e.isError)throw Object.assign(new Error(e.value.message),e.value);throw e.value}}]]);function xe(e,t=self){t.addEventListener("message",(function i(a){if(!a||!a.data)return;const{id:o,type:s,path:l}=Object.assign({path:[]},a.data),r=(a.data.argumentList||[]).map(De);let n;try{const t=l.slice(0,-1).reduce(((e,t)=>e[t]),e),i=l.reduce(((e,t)=>e[t]),e);switch(s){case"GET":n=i;break;case"SET":t[l.slice(-1)[0]]=De(a.data.value),n=!0;break;case"APPLY":n=i.apply(t,r);break;case"CONSTRUCT":n=function(e){return Object.assign(e,{[ve]:!0})}(new i(...r));break;case"ENDPOINT":{const{port1:t,port2:i}=new MessageChannel;xe(e,i),n=function(e,t){return Te.set(e,t),e}(t,[t])}break;case"RELEASE":n=void 0;break;default:return}}catch(e){n={value:e,[ye]:0}}Promise.resolve(n).catch((e=>({value:e,[ye]:0}))).then((e=>{const[a,l]=Fe(e);t.postMessage(Object.assign(Object.assign({},a),{id:o}),l),"RELEASE"===s&&(t.removeEventListener("message",i),$e(t))}))})),t.start&&t.start()}function $e(e){(function(e){return"MessagePort"===e.constructor.name})(e)&&e.close()}function Re(e,t){return Se(e,[],t)}function ze(e){if(e)throw new Error("Proxy has been released and is not useable")}function Se(e,t=[],i=function(){}){let a=!1;const o=new Proxy(i,{get(i,s){if(ze(a),s===ge)return()=>He(e,{type:"RELEASE",path:t.map((e=>e.toString()))}).then((()=>{$e(e),a=!0}));if("then"===s){if(0===t.length)return{then:()=>o};const i=He(e,{type:"GET",path:t.map((e=>e.toString()))}).then(De);return i.then.bind(i)}return Se(e,[...t,s])},set(i,o,s){ze(a);const[l,r]=Fe(s);return He(e,{type:"SET",path:[...t,o].map((e=>e.toString())),value:l},r).then(De)},apply(i,o,s){ze(a);const l=t[t.length-1];if(l===_e)return He(e,{type:"ENDPOINT"}).then(De);if("bind"===l)return Se(e,t.slice(0,-1));const[r,n]=Ce(s);return He(e,{type:"APPLY",path:t.map((e=>e.toString())),argumentList:r},n).then(De)},construct(i,o){ze(a);const[s,l]=Ce(o);return He(e,{type:"CONSTRUCT",path:t.map((e=>e.toString())),argumentList:s},l).then(De)}});return o}function Ce(e){const t=e.map(Fe);return[t.map((e=>e[0])),(i=t.map((e=>e[1])),Array.prototype.concat.apply([],i))];var i}const Te=new WeakMap;function Fe(e){for(const[t,i]of we)if(i.canHandle(e)){const[a,o]=i.serialize(e);return[{type:"HANDLER",name:t,value:a},o]}return[{type:"RAW",value:e},Te.get(e)||[]]}function De(e){switch(e.type){case"HANDLER":return we.get(e.name).deserialize(e.value);case"RAW":return e.value}}function He(e,t,i){return new Promise((a=>{const o=new Array(4).fill(0).map((()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16))).join("-");e.addEventListener("message",(function t(i){i.data&&i.data.id&&i.data.id===o&&(e.removeEventListener("message",t),a(i.data))})),e.start&&e.start(),e.postMessage(Object.assign({id:o},t),i)}))}let Ee;let Le=n([v("ha-data-table")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[d({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[d({type:Object})],key:"columns",value:()=>({})},{kind:"field",decorators:[d({type:Array})],key:"data",value:()=>[]},{kind:"field",decorators:[d({type:Boolean})],key:"selectable",value:()=>!1},{kind:"field",decorators:[d({type:Boolean})],key:"clickable",value:()=>!1},{kind:"field",decorators:[d({type:Boolean})],key:"hasFab",value:()=>!1},{kind:"field",decorators:[d({attribute:!1})],key:"appendRow",value:void 0},{kind:"field",decorators:[d({type:Boolean,attribute:"auto-height"})],key:"autoHeight",value:()=>!1},{kind:"field",decorators:[d({type:String})],key:"id",value:()=>"id"},{kind:"field",decorators:[d({type:String})],key:"noDataText",value:void 0},{kind:"field",decorators:[d({type:String})],key:"searchLabel",value:void 0},{kind:"field",decorators:[d({type:Boolean,attribute:"no-label-float"})],key:"noLabelFloat",value:()=>!1},{kind:"field",decorators:[d({type:String})],key:"filter",value:()=>""},{kind:"field",decorators:[_()],key:"_filterable",value:()=>!1},{kind:"field",decorators:[_()],key:"_filter",value:()=>""},{kind:"field",decorators:[_()],key:"_sortColumn",value:void 0},{kind:"field",decorators:[_()],key:"_sortDirection",value:()=>null},{kind:"field",decorators:[_()],key:"_filteredData",value:()=>[]},{kind:"field",decorators:[_()],key:"_headerHeight",value:()=>0},{kind:"field",decorators:[h("slot[name='header']")],key:"_header",value:void 0},{kind:"field",decorators:[_()],key:"_items",value:()=>[]},{kind:"field",key:"_checkableRowsCount",value:void 0},{kind:"field",key:"_checkedRows",value:()=>[]},{kind:"field",key:"_sortColumns",value:()=>({})},{kind:"field",key:"curRequest",value:()=>0},{kind:"field",decorators:[se(".scroller")],key:"_savedScrollPos",value:void 0},{kind:"field",key:"_debounceSearch",value(){return ee((e=>{this._filter=e}),100,!1)}},{kind:"method",key:"clearSelection",value:function(){this._checkedRows=[],this._checkedRowsChanged()}},{kind:"method",key:"connectedCallback",value:function(){g(y(i.prototype),"connectedCallback",this).call(this),this._items.length&&(this._items=[...this._items])}},{kind:"method",key:"firstUpdated",value:function(){this.updateComplete.then((()=>this._calcTableHeight()))}},{kind:"method",key:"willUpdate",value:function(e){if(g(y(i.prototype),"willUpdate",this).call(this,e),e.has("columns")){this._filterable=Object.values(this.columns).some((e=>e.filterable));for(const e in this.columns)if(this.columns[e].direction){this._sortDirection=this.columns[e].direction,this._sortColumn=e;break}const e=re(this.columns);Object.values(e).forEach((e=>{delete e.title,delete e.type,delete e.template})),this._sortColumns=e}e.has("filter")&&this._debounceSearch(this.filter),e.has("data")&&(this._checkableRowsCount=this.data.filter((e=>!1!==e.selectable)).length),(e.has("data")||e.has("columns")||e.has("_filter")||e.has("_sortColumn")||e.has("_sortDirection"))&&this._sortFilterData()}},{kind:"method",key:"render",value:function(){return u`
      <div class="mdc-data-table">
        <slot name="header" @slotchange=${this._calcTableHeight}>
          ${this._filterable?u`
                <div class="table-header">
                  <search-input
                    .hass=${this.hass}
                    @value-changed=${this._handleSearchChange}
                    .label=${this.searchLabel}
                    .noLabelFloat=${this.noLabelFloat}
                  ></search-input>
                </div>
              `:""}
        </slot>
        <div
          class="mdc-data-table__table ${k({"auto-height":this.autoHeight})}"
          role="table"
          aria-rowcount=${this._filteredData.length+1}
          style=${w({height:this.autoHeight?53*(this._filteredData.length||1)+53+"px":`calc(100% - ${this._headerHeight}px)`})}
        >
          <div class="mdc-data-table__header-row" role="row" aria-rowindex="1">
            ${this.selectable?u`
                  <div
                    class="mdc-data-table__header-cell mdc-data-table__header-cell--checkbox"
                    role="columnheader"
                  >
                    <ha-checkbox
                      class="mdc-data-table__row-checkbox"
                      @change=${this._handleHeaderRowCheckboxClick}
                      .indeterminate=${this._checkedRows.length&&this._checkedRows.length!==this._checkableRowsCount}
                      .checked=${this._checkedRows.length&&this._checkedRows.length===this._checkableRowsCount}
                    >
                    </ha-checkbox>
                  </div>
                `:""}
            ${Object.entries(this.columns).map((([e,t])=>{if(t.hidden)return"";const i=e===this._sortColumn,a={"mdc-data-table__header-cell--numeric":"numeric"===t.type,"mdc-data-table__header-cell--icon":"icon"===t.type,"mdc-data-table__header-cell--icon-button":"icon-button"===t.type,"mdc-data-table__header-cell--overflow-menu":"overflow-menu"===t.type,sortable:Boolean(t.sortable),"not-sorted":Boolean(t.sortable&&!i),grows:Boolean(t.grows)};return u`
                <div
                  aria-label=${t.label}
                  class="mdc-data-table__header-cell ${k(a)}"
                  style=${t.width?w({[t.grows?"minWidth":"width"]:t.width,maxWidth:t.maxWidth||""}):""}
                  role="columnheader"
                  aria-sort=${x(i?"desc"===this._sortDirection?"descending":"ascending":void 0)}
                  @click=${this._handleHeaderClick}
                  .columnId=${e}
                >
                  ${t.sortable?u`
                        <ha-svg-icon
                          .path=${i&&"desc"===this._sortDirection?$:R}
                        ></ha-svg-icon>
                      `:""}
                  <span>${t.title}</span>
                </div>
              `}))}
          </div>
          ${this._filteredData.length?u`
                <lit-virtualizer
                  scroller
                  class="mdc-data-table__content scroller ha-scrollbar"
                  @scroll=${this._saveScrollPos}
                  .items=${this._items}
                  .renderItem=${this._renderRow}
                ></lit-virtualizer>
              `:u`
                <div class="mdc-data-table__content">
                  <div class="mdc-data-table__row" role="row">
                    <div class="mdc-data-table__cell grows center" role="cell">
                      ${this.noDataText||"No data"}
                    </div>
                  </div>
                </div>
              `}
        </div>
      </div>
    `}},{kind:"field",key:"_renderRow",value(){return(e,t)=>e?e.append?u` <div class="mdc-data-table__row">${e.content}</div> `:e.empty?u` <div class="mdc-data-table__row"></div> `:u`
      <div
        aria-rowindex=${t+2}
        role="row"
        .rowId=${e[this.id]}
        @click=${this._handleRowClick}
        class="mdc-data-table__row ${k({"mdc-data-table__row--selected":this._checkedRows.includes(String(e[this.id])),clickable:this.clickable})}"
        aria-selected=${x(!!this._checkedRows.includes(String(e[this.id]))||void 0)}
        .selectable=${!1!==e.selectable}
      >
        ${this.selectable?u`
              <div
                class="mdc-data-table__cell mdc-data-table__cell--checkbox"
                role="cell"
              >
                <ha-checkbox
                  class="mdc-data-table__row-checkbox"
                  @change=${this._handleRowCheckboxClick}
                  .rowId=${e[this.id]}
                  .disabled=${!1===e.selectable}
                  .checked=${this._checkedRows.includes(String(e[this.id]))}
                >
                </ha-checkbox>
              </div>
            `:""}
        ${Object.entries(this.columns).map((([t,i])=>i.hidden?"":u`
            <div
              role=${i.main?"rowheader":"cell"}
              class="mdc-data-table__cell ${k({"mdc-data-table__cell--numeric":"numeric"===i.type,"mdc-data-table__cell--icon":"icon"===i.type,"mdc-data-table__cell--icon-button":"icon-button"===i.type,"mdc-data-table__cell--overflow-menu":"overflow-menu"===i.type,grows:Boolean(i.grows),forceLTR:Boolean(i.forceLTR)})}"
              style=${i.width?w({[i.grows?"minWidth":"width"]:i.width,maxWidth:i.maxWidth?i.maxWidth:""}):""}
            >
              ${i.template?i.template(e[t],e):e[t]}
            </div>
          `))}
      </div>
    `:u``}},{kind:"method",key:"_sortFilterData",value:async function(){const e=(new Date).getTime();this.curRequest++;const t=this.curRequest;let i=this.data;this._filter&&(i=await this._memFilterData(this.data,this._sortColumns,this._filter));const a=this._sortColumn?(async(e,t,i,a)=>(Ee||(Ee=Re(new Worker(new URL("./sort_filter_worker",import.meta.url)))),Ee.sortData(e,t,i,a)))(i,this._sortColumns[this._sortColumn],this._sortDirection,this._sortColumn):i,[o]=await Promise.all([a,z]),s=(new Date).getTime()-e;if(s<100&&await new Promise((e=>setTimeout(e,100-s))),this.curRequest===t){if(this.appendRow||this.hasFab){const e=[...o];this.appendRow&&e.push({append:!0,content:this.appendRow}),this.hasFab&&e.push({empty:!0}),this._items=e}else this._items=o;this._filteredData=o}}},{kind:"field",key:"_memFilterData",value:()=>r((async(e,t,i)=>(async(e,t,i)=>(Ee||(Ee=Re(new Worker(new URL("./sort_filter_worker",import.meta.url)))),Ee.filterData(e,t,i)))(e,t,i)))},{kind:"method",key:"_handleHeaderClick",value:function(e){const t=e.currentTarget.columnId;this.columns[t].sortable&&(this._sortDirection&&this._sortColumn===t?"asc"===this._sortDirection?this._sortDirection="desc":this._sortDirection=null:this._sortDirection="asc",this._sortColumn=null===this._sortDirection?void 0:t,m(this,"sorting-changed",{column:t,direction:this._sortDirection}))}},{kind:"method",key:"_handleHeaderRowCheckboxClick",value:function(e){e.target.checked?(this._checkedRows=this._filteredData.filter((e=>!1!==e.selectable)).map((e=>e[this.id])),this._checkedRowsChanged()):(this._checkedRows=[],this._checkedRowsChanged())}},{kind:"field",key:"_handleRowCheckboxClick",value(){return e=>{const t=e.currentTarget,i=t.rowId;if(t.checked){if(this._checkedRows.includes(i))return;this._checkedRows=[...this._checkedRows,i]}else this._checkedRows=this._checkedRows.filter((e=>e!==i));this._checkedRowsChanged()}}},{kind:"field",key:"_handleRowClick",value(){return e=>{const t=e.target;if(["HA-CHECKBOX","MWC-BUTTON"].includes(t.tagName))return;const i=e.currentTarget.rowId;m(this,"row-click",{id:i},{bubbles:!1})}}},{kind:"method",key:"_checkedRowsChanged",value:function(){this._items.length&&(this._items=[...this._items]),m(this,"selection-changed",{value:this._checkedRows})}},{kind:"method",key:"_handleSearchChange",value:function(e){this.filter||this._debounceSearch(e.detail.value)}},{kind:"method",key:"_calcTableHeight",value:async function(){this.autoHeight||(await this.updateComplete,this._headerHeight=this._header.clientHeight)}},{kind:"method",decorators:[S({passive:!0})],key:"_saveScrollPos",value:function(e){this._savedScrollPos=e.target.scrollTop}},{kind:"get",static:!0,key:"styles",value:function(){return[C,b`
        /* default mdc styles, colors changed, without checkbox styles */
        :host {
          height: 100%;
        }
        .mdc-data-table__content {
          font-family: Roboto, sans-serif;
          -moz-osx-font-smoothing: grayscale;
          -webkit-font-smoothing: antialiased;
          font-size: 0.875rem;
          line-height: 1.25rem;
          font-weight: 400;
          letter-spacing: 0.0178571429em;
          text-decoration: inherit;
          text-transform: inherit;
        }

        .mdc-data-table {
          background-color: var(--data-table-background-color);
          border-radius: 4px;
          border-width: 1px;
          border-style: solid;
          border-color: var(--divider-color);
          display: inline-flex;
          flex-direction: column;
          box-sizing: border-box;
          overflow: hidden;
        }

        .mdc-data-table__row--selected {
          background-color: rgba(var(--rgb-primary-color), 0.04);
        }

        .mdc-data-table__row {
          display: flex;
          width: 100%;
          height: 52px;
        }

        .mdc-data-table__row ~ .mdc-data-table__row {
          border-top: 1px solid var(--divider-color);
        }

        .mdc-data-table__row.clickable:not(
            .mdc-data-table__row--selected
          ):hover {
          background-color: rgba(var(--rgb-primary-text-color), 0.04);
        }

        .mdc-data-table__header-cell {
          color: var(--primary-text-color);
        }

        .mdc-data-table__cell {
          color: var(--primary-text-color);
        }

        .mdc-data-table__header-row {
          height: 56px;
          display: flex;
          width: 100%;
          border-bottom: 1px solid var(--divider-color);
          overflow-x: auto;
        }

        .mdc-data-table__header-row::-webkit-scrollbar {
          display: none;
        }

        .mdc-data-table__cell,
        .mdc-data-table__header-cell {
          padding-right: 16px;
          padding-left: 16px;
          align-self: center;
          overflow: hidden;
          text-overflow: ellipsis;
          flex-shrink: 0;
          box-sizing: border-box;
        }

        .mdc-data-table__cell.mdc-data-table__cell--icon {
          overflow: initial;
        }

        .mdc-data-table__header-cell--checkbox,
        .mdc-data-table__cell--checkbox {
          /* @noflip */
          padding-left: 16px;
          /* @noflip */
          padding-right: 0;
          width: 60px;
        }
        :host([dir="rtl"]) .mdc-data-table__header-cell--checkbox,
        :host([dir="rtl"]) .mdc-data-table__cell--checkbox {
          /* @noflip */
          padding-left: 0;
          /* @noflip */
          padding-right: 16px;
        }

        .mdc-data-table__table {
          height: 100%;
          width: 100%;
          border: 0;
          white-space: nowrap;
        }

        .mdc-data-table__cell {
          font-family: Roboto, sans-serif;
          -moz-osx-font-smoothing: grayscale;
          -webkit-font-smoothing: antialiased;
          font-size: 0.875rem;
          line-height: 1.25rem;
          font-weight: 400;
          letter-spacing: 0.0178571429em;
          text-decoration: inherit;
          text-transform: inherit;
        }

        .mdc-data-table__cell a {
          color: inherit;
          text-decoration: none;
        }

        .mdc-data-table__cell--numeric {
          text-align: right;
        }
        :host([dir="rtl"]) .mdc-data-table__cell--numeric {
          /* @noflip */
          text-align: left;
        }

        .mdc-data-table__cell--icon {
          color: var(--secondary-text-color);
          text-align: center;
        }

        .mdc-data-table__header-cell--icon,
        .mdc-data-table__cell--icon {
          width: 54px;
        }

        .mdc-data-table__cell--icon img {
          width: 24px;
          height: 24px;
        }

        .mdc-data-table__header-cell.mdc-data-table__header-cell--icon {
          text-align: center;
        }

        .mdc-data-table__header-cell.sortable.mdc-data-table__header-cell--icon:hover,
        .mdc-data-table__header-cell.sortable.mdc-data-table__header-cell--icon:not(
            .not-sorted
          ) {
          text-align: left;
        }
        :host([dir="rtl"])
          .mdc-data-table__header-cell.sortable.mdc-data-table__header-cell--icon:hover,
        :host([dir="rtl"])
          .mdc-data-table__header-cell.sortable.mdc-data-table__header-cell--icon:not(
            .not-sorted
          ) {
          text-align: right;
        }

        .mdc-data-table__cell--icon:first-child ha-icon,
        .mdc-data-table__cell--icon:first-child img,
        .mdc-data-table__cell--icon:first-child ha-state-icon,
        .mdc-data-table__cell--icon:first-child ha-svg-icon {
          margin-left: 8px;
        }
        :host([dir="rtl"]) .mdc-data-table__cell--icon:first-child ha-icon,
        :host([dir="rtl"])
          .mdc-data-table__cell--icon:first-child
          ha-state-icon,
        :host([dir="rtl"])
          .mdc-data-table__cell--icon:first-child
          ha-svg-icon
          :host([dir="rtl"])
          .mdc-data-table__cell--icon:first-child
          img {
          margin-left: auto;
          margin-right: 8px;
        }

        .mdc-data-table__cell--icon:first-child state-badge {
          margin-right: -8px;
        }
        :host([dir="rtl"]) .mdc-data-table__cell--icon:first-child state-badge {
          margin-right: auto;
          margin-left: -8px;
        }

        .mdc-data-table__cell--overflow-menu,
        .mdc-data-table__header-cell--overflow-menu,
        .mdc-data-table__header-cell--icon-button,
        .mdc-data-table__cell--icon-button {
          padding: 8px;
        }

        .mdc-data-table__header-cell--icon-button,
        .mdc-data-table__cell--icon-button {
          width: 56px;
        }

        .mdc-data-table__cell--overflow-menu,
        .mdc-data-table__cell--icon-button {
          color: var(--secondary-text-color);
          text-overflow: clip;
        }

        .mdc-data-table__header-cell--icon-button:first-child,
        .mdc-data-table__cell--icon-button:first-child,
        .mdc-data-table__header-cell--icon-button:last-child,
        .mdc-data-table__cell--icon-button:last-child {
          width: 64px;
        }

        .mdc-data-table__cell--overflow-menu:first-child,
        .mdc-data-table__header-cell--overflow-menu:first-child,
        .mdc-data-table__header-cell--icon-button:first-child,
        .mdc-data-table__cell--icon-button:first-child {
          padding-left: 16px;
        }
        :host([dir="rtl"])
          .mdc-data-table__header-cell--overflow-menu:first-child,
        :host([dir="rtl"]) .mdc-data-table__cell--overflow-menu:first-child,
        :host([dir="rtl"])
          .mdc-data-table__header-cell--overflow-menu:first-child,
        :host([dir="rtl"]) .mdc-data-table__cell--overflow-menu:first-child {
          padding-left: 8px;
          padding-right: 16px;
        }

        .mdc-data-table__cell--overflow-menu:last-child,
        .mdc-data-table__header-cell--overflow-menu:last-child,
        .mdc-data-table__header-cell--icon-button:last-child,
        .mdc-data-table__cell--icon-button:last-child {
          padding-right: 16px;
        }
        :host([dir="rtl"])
          .mdc-data-table__header-cell--overflow-menu:last-child,
        :host([dir="rtl"]) .mdc-data-table__cell--overflow-menu:last-child,
        :host([dir="rtl"]) .mdc-data-table__header-cell--icon-button:last-child,
        :host([dir="rtl"]) .mdc-data-table__cell--icon-button:last-child {
          padding-right: 8px;
          padding-left: 16px;
        }
        .mdc-data-table__cell--overflow-menu,
        .mdc-data-table__header-cell--overflow-menu {
          overflow: initial;
        }
        .mdc-data-table__cell--icon-button a {
          color: var(--secondary-text-color);
        }

        .mdc-data-table__header-cell {
          font-family: Roboto, sans-serif;
          -moz-osx-font-smoothing: grayscale;
          -webkit-font-smoothing: antialiased;
          font-size: 0.875rem;
          line-height: 1.375rem;
          font-weight: 500;
          letter-spacing: 0.0071428571em;
          text-decoration: inherit;
          text-transform: inherit;
          text-align: left;
        }
        :host([dir="rtl"]) .mdc-data-table__header-cell {
          /* @noflip */
          text-align: right;
        }

        .mdc-data-table__header-cell--numeric {
          text-align: right;
        }
        .mdc-data-table__header-cell--numeric.sortable:hover,
        .mdc-data-table__header-cell--numeric.sortable:not(.not-sorted) {
          text-align: left;
        }
        :host([dir="rtl"]) .mdc-data-table__header-cell--numeric {
          /* @noflip */
          text-align: left;
        }
        :host([dir="rtl"]) .mdc-data-table__header-cell--numeric.sortable:hover,
        :host([dir="rtl"])
          .mdc-data-table__header-cell--numeric.sortable:not(.not-sorted) {
          text-align: right;
        }

        /* custom from here */

        :host {
          display: block;
        }

        .mdc-data-table {
          display: block;
          border-width: var(--data-table-border-width, 1px);
          height: 100%;
        }
        .mdc-data-table__header-cell {
          overflow: hidden;
          position: relative;
        }
        .mdc-data-table__header-cell span {
          position: relative;
          left: 0px;
        }
        :host([dir="rtl"]) .mdc-data-table__header-cell span {
          left: auto;
          right: 0px;
        }

        .mdc-data-table__header-cell.sortable {
          cursor: pointer;
        }
        .mdc-data-table__header-cell > * {
          transition: left 0.2s ease;
        }
        :host([dir="rtl"]) .mdc-data-table__header-cell > * {
          transition: right 0.2s ease;
        }
        .mdc-data-table__header-cell ha-svg-icon {
          top: -3px;
          position: absolute;
        }
        .mdc-data-table__header-cell.not-sorted ha-svg-icon {
          left: -20px;
        }
        :host([dir="rtl"]) .mdc-data-table__header-cell.not-sorted ha-svg-icon {
          right: -20px;
        }
        .mdc-data-table__header-cell.sortable:not(.not-sorted) span,
        .mdc-data-table__header-cell.sortable.not-sorted:hover span {
          left: 24px;
        }
        :host([dir="rtl"])
          .mdc-data-table__header-cell.sortable:not(.not-sorted)
          span,
        :host([dir="rtl"])
          .mdc-data-table__header-cell.sortable.not-sorted:hover
          span {
          left: auto;
          right: 24px;
        }
        .mdc-data-table__header-cell.sortable:not(.not-sorted) ha-svg-icon,
        .mdc-data-table__header-cell.sortable:hover.not-sorted ha-svg-icon {
          left: 12px;
        }
        :host([dir="rtl"])
          .mdc-data-table__header-cell.sortable:not(.not-sorted)
          ha-svg-icon,
        :host([dir="rtl"])
          .mdc-data-table__header-cell.sortable:hover.not-sorted
          ha-svg-icon {
          left: auto;
          right: 12px;
        }
        .table-header {
          border-bottom: 1px solid var(--divider-color);
        }
        search-input {
          display: block;
          flex: 1;
        }
        slot[name="header"] {
          display: block;
        }
        .center {
          text-align: center;
        }
        .secondary {
          color: var(--secondary-text-color);
        }
        .scroller {
          height: calc(100% - 57px);
          overflow: overlay !important;
        }

        .mdc-data-table__table.auto-height .scroller {
          overflow-y: hidden !important;
        }
        .grows {
          flex-grow: 1;
          flex-shrink: 1;
        }
        .forceLTR {
          direction: ltr;
        }
        .clickable {
          cursor: pointer;
        }
        lit-virtualizer {
          contain: size layout !important;
        }
      `]}}]}}),c);n([v("ha-tab")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[d({type:Boolean,reflect:!0})],key:"active",value:()=>!1},{kind:"field",decorators:[d({type:Boolean,reflect:!0})],key:"narrow",value:()=>!1},{kind:"field",decorators:[d()],key:"name",value:void 0},{kind:"field",decorators:[T("mwc-ripple")],key:"_ripple",value:void 0},{kind:"field",decorators:[_()],key:"_shouldRenderRipple",value:()=>!1},{kind:"method",key:"render",value:function(){return u`
      <div
        tabindex="0"
        role="tab"
        aria-selected=${this.active}
        aria-label=${x(this.name)}
        @focus=${this.handleRippleFocus}
        @blur=${this.handleRippleBlur}
        @mousedown=${this.handleRippleActivate}
        @mouseup=${this.handleRippleDeactivate}
        @mouseenter=${this.handleRippleMouseEnter}
        @mouseleave=${this.handleRippleMouseLeave}
        @touchstart=${this.handleRippleActivate}
        @touchend=${this.handleRippleDeactivate}
        @touchcancel=${this.handleRippleDeactivate}
        @keydown=${this._handleKeyDown}
      >
        ${this.narrow?u`<slot name="icon"></slot>`:""}
        <span class="name">${this.name}</span>
        ${this._shouldRenderRipple?u`<mwc-ripple></mwc-ripple>`:""}
      </div>
    `}},{kind:"field",key:"_rippleHandlers",value(){return new F((()=>(this._shouldRenderRipple=!0,this._ripple)))}},{kind:"method",key:"_handleKeyDown",value:function(e){13===e.keyCode&&e.target.click()}},{kind:"method",decorators:[S({passive:!0})],key:"handleRippleActivate",value:function(e){this._rippleHandlers.startPress(e)}},{kind:"method",key:"handleRippleDeactivate",value:function(){this._rippleHandlers.endPress()}},{kind:"method",key:"handleRippleMouseEnter",value:function(){this._rippleHandlers.startHover()}},{kind:"method",key:"handleRippleMouseLeave",value:function(){this._rippleHandlers.endHover()}},{kind:"method",key:"handleRippleFocus",value:function(){this._rippleHandlers.startFocus()}},{kind:"method",key:"handleRippleBlur",value:function(){this._rippleHandlers.endFocus()}},{kind:"get",static:!0,key:"styles",value:function(){return b`
      div {
        padding: 0 32px;
        display: flex;
        flex-direction: column;
        text-align: center;
        box-sizing: border-box;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: var(--header-height);
        cursor: pointer;
        position: relative;
        outline: none;
      }

      .name {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 100%;
      }

      :host([active]) {
        color: var(--primary-color);
      }

      :host(:not([narrow])[active]) div {
        border-bottom: 2px solid var(--primary-color);
      }

      :host([narrow]) {
        min-width: 0;
        display: flex;
        justify-content: center;
        overflow: hidden;
      }

      :host([narrow]) div {
        padding: 0 4px;
      }
    `}}]}}),c),n([v("hass-tabs-subpage")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[d({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[d({type:Boolean})],key:"supervisor",value:()=>!1},{kind:"field",decorators:[d({attribute:!1})],key:"localizeFunc",value:void 0},{kind:"field",decorators:[d({type:String,attribute:"back-path"})],key:"backPath",value:void 0},{kind:"field",decorators:[d()],key:"backCallback",value:void 0},{kind:"field",decorators:[d({type:Boolean,attribute:"main-page"})],key:"mainPage",value:()=>!1},{kind:"field",decorators:[d({attribute:!1})],key:"route",value:void 0},{kind:"field",decorators:[d({attribute:!1})],key:"tabs",value:void 0},{kind:"field",decorators:[d({type:Boolean,reflect:!0})],key:"narrow",value:()=>!1},{kind:"field",decorators:[d({type:Boolean,reflect:!0,attribute:"is-wide"})],key:"isWide",value:()=>!1},{kind:"field",decorators:[d({type:Boolean,reflect:!0})],key:"rtl",value:()=>!1},{kind:"field",decorators:[_()],key:"_activeTab",value:void 0},{kind:"field",decorators:[se(".content")],key:"_savedScrollPos",value:void 0},{kind:"field",key:"_getTabs",value(){return r(((e,t,i,a,o,s,l)=>{const r=e.filter((e=>(!e.component||e.core||ne(this.hass,e.component))&&(!e.advancedOnly||i)));if(r.length<2){if(1===r.length){const e=r[0];return[e.translationKey?l(e.translationKey):e.name]}return[""]}return r.map((e=>u`
            <a href=${e.path}>
              <ha-tab
                .hass=${this.hass}
                .active=${e.path===(null==t?void 0:t.path)}
                .narrow=${this.narrow}
                .name=${e.translationKey?l(e.translationKey):e.name}
              >
                ${e.iconPath?u`<ha-svg-icon
                      slot="icon"
                      .path=${e.iconPath}
                    ></ha-svg-icon>`:""}
              </ha-tab>
            </a>
          `))}))}},{kind:"method",key:"willUpdate",value:function(e){if(e.has("route")&&(this._activeTab=this.tabs.find((e=>`${this.route.prefix}${this.route.path}`.includes(e.path)))),e.has("hass")){const t=e.get("hass");t&&t.language===this.hass.language||(this.rtl=X(this.hass))}g(y(i.prototype),"willUpdate",this).call(this,e)}},{kind:"method",key:"render",value:function(){var e,t;const i=this._getTabs(this.tabs,this._activeTab,null===(e=this.hass.userData)||void 0===e?void 0:e.showAdvanced,this.hass.config.components,this.hass.language,this.narrow,this.localizeFunc||this.hass.localize),a=i.length>1;return u`
      <div class="toolbar">
        ${this.mainPage||!this.backPath&&null!==(t=history.state)&&void 0!==t&&t.root?u`
              <ha-menu-button
                .hassio=${this.supervisor}
                .hass=${this.hass}
                .narrow=${this.narrow}
              ></ha-menu-button>
            `:this.backPath?u`
              <a href=${this.backPath}>
                <ha-icon-button-arrow-prev
                  .hass=${this.hass}
                ></ha-icon-button-arrow-prev>
              </a>
            `:u`
              <ha-icon-button-arrow-prev
                .hass=${this.hass}
                @click=${this._backTapped}
              ></ha-icon-button-arrow-prev>
            `}
        ${this.narrow||!a?u`<div class="main-title">
              <slot name="header">${a?"":i[0]}</slot>
            </div>`:""}
        ${a?u`
              <div id="tabbar" class=${k({"bottom-bar":this.narrow})}>
                ${i}
              </div>
            `:""}
        <div id="toolbar-icon">
          <slot name="toolbar-icon"></slot>
        </div>
      </div>
      <div
        class="content ${k({tabs:a})}"
        @scroll=${this._saveScrollPos}
      >
        <slot></slot>
      </div>
      <div id="fab" class=${k({tabs:a})}>
        <slot name="fab"></slot>
      </div>
    `}},{kind:"method",decorators:[S({passive:!0})],key:"_saveScrollPos",value:function(e){this._savedScrollPos=e.target.scrollTop}},{kind:"method",key:"_backTapped",value:function(){this.backCallback?this.backCallback():history.back()}},{kind:"get",static:!0,key:"styles",value:function(){return b`
      :host {
        display: block;
        height: 100%;
        background-color: var(--primary-background-color);
      }

      :host([narrow]) {
        width: 100%;
        position: fixed;
      }

      ha-menu-button {
        margin-right: 24px;
      }

      .toolbar {
        display: flex;
        align-items: center;
        font-size: 20px;
        height: var(--header-height);
        background-color: var(--sidebar-background-color);
        font-weight: 400;
        border-bottom: 1px solid var(--divider-color);
        padding: 0 16px;
        box-sizing: border-box;
      }
      .toolbar a {
        color: var(--sidebar-text-color);
        text-decoration: none;
      }
      .bottom-bar a {
        width: 25%;
      }

      #tabbar {
        display: flex;
        font-size: 14px;
        overflow: hidden;
      }

      #tabbar > a {
        overflow: hidden;
        max-width: 45%;
      }

      #tabbar.bottom-bar {
        position: absolute;
        bottom: 0;
        left: 0;
        padding: 0 16px;
        box-sizing: border-box;
        background-color: var(--sidebar-background-color);
        border-top: 1px solid var(--divider-color);
        justify-content: space-around;
        z-index: 2;
        font-size: 12px;
        width: 100%;
        padding-bottom: env(safe-area-inset-bottom);
      }

      #tabbar:not(.bottom-bar) {
        flex: 1;
        justify-content: center;
      }

      :host(:not([narrow])) #toolbar-icon {
        min-width: 40px;
      }

      ha-menu-button,
      ha-icon-button-arrow-prev,
      ::slotted([slot="toolbar-icon"]) {
        display: flex;
        flex-shrink: 0;
        pointer-events: auto;
        color: var(--sidebar-icon-color);
      }

      .main-title {
        flex: 1;
        max-height: var(--header-height);
        line-height: 20px;
        color: var(--sidebar-text-color);
        margin: var(--main-title-margin, 0 0 0 24px);
      }

      .content {
        position: relative;
        width: calc(
          100% - env(safe-area-inset-left) - env(safe-area-inset-right)
        );
        margin-left: env(safe-area-inset-left);
        margin-right: env(safe-area-inset-right);
        height: calc(100% - 1px - var(--header-height));
        height: calc(
          100% - 1px - var(--header-height) - env(safe-area-inset-bottom)
        );
        overflow: auto;
        -webkit-overflow-scrolling: touch;
      }

      :host([narrow]) .content.tabs {
        height: calc(100% - 2 * var(--header-height));
        height: calc(
          100% - 2 * var(--header-height) - env(safe-area-inset-bottom)
        );
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
    `}}]}}),c);let Me=n([v("hass-tabs-subpage-data-table")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[d({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[d({attribute:!1})],key:"localizeFunc",value:void 0},{kind:"field",decorators:[d({type:Boolean})],key:"isWide",value:()=>!1},{kind:"field",decorators:[d({type:Boolean,reflect:!0})],key:"narrow",value:()=>!1},{kind:"field",decorators:[d({type:Boolean})],key:"supervisor",value:()=>!1},{kind:"field",decorators:[d({type:Boolean,attribute:"main-page"})],key:"mainPage",value:()=>!1},{kind:"field",decorators:[d({type:Object})],key:"columns",value:()=>({})},{kind:"field",decorators:[d({type:Array})],key:"data",value:()=>[]},{kind:"field",decorators:[d({type:Boolean})],key:"selectable",value:()=>!1},{kind:"field",decorators:[d({type:Boolean})],key:"clickable",value:()=>!1},{kind:"field",decorators:[d({type:Boolean})],key:"hasFab",value:()=>!1},{kind:"field",decorators:[d({attribute:!1})],key:"appendRow",value:void 0},{kind:"field",decorators:[d({type:String})],key:"id",value:()=>"id"},{kind:"field",decorators:[d({type:String})],key:"filter",value:()=>""},{kind:"field",decorators:[d()],key:"searchLabel",value:void 0},{kind:"field",decorators:[d({type:Array})],key:"activeFilters",value:void 0},{kind:"field",decorators:[d()],key:"hiddenLabel",value:void 0},{kind:"field",decorators:[d({type:Number})],key:"numHidden",value:()=>0},{kind:"field",decorators:[d({type:String,attribute:"back-path"})],key:"backPath",value:void 0},{kind:"field",decorators:[d()],key:"backCallback",value:void 0},{kind:"field",decorators:[d({type:String})],key:"noDataText",value:void 0},{kind:"field",decorators:[d()],key:"route",value:void 0},{kind:"field",decorators:[d()],key:"tabs",value:()=>[]},{kind:"field",decorators:[d({type:Boolean})],key:"hideFilterMenu",value:()=>!1},{kind:"field",decorators:[h("ha-data-table",!0)],key:"_dataTable",value:void 0},{kind:"method",key:"clearSelection",value:function(){this._dataTable.clearSelection()}},{kind:"method",key:"render",value:function(){const e=this.numHidden?this.hiddenLabel||this.hass.localize("ui.components.data-table.hidden","number",this.numHidden)||this.numHidden:void 0,t=this.activeFilters?u`${this.hass.localize("ui.components.data-table.filtering_by")}
        ${this.activeFilters.join(", ")}
        ${e?`(${e})`:""}`:e,i=u`<search-input
      .hass=${this.hass}
      .filter=${this.filter}
      .suffix=${!this.narrow}
      @value-changed=${this._handleSearchChange}
      .label=${this.searchLabel||this.hass.localize("ui.components.data-table.search")}
    >
      ${this.narrow?"":u`<div
            class="filters"
            slot="suffix"
            @click=${this._preventDefault}
          >
            ${t?u`<div class="active-filters">
                  ${t}
                  <mwc-button @click=${this._clearFilter}>
                    ${this.hass.localize("ui.components.data-table.clear")}
                  </mwc-button>
                </div>`:""}
            <slot name="filter-menu"></slot>
          </div>`}
    </search-input>`;return u`
      <hass-tabs-subpage
        .hass=${this.hass}
        .localizeFunc=${this.localizeFunc}
        .narrow=${this.narrow}
        .isWide=${this.isWide}
        .backPath=${this.backPath}
        .backCallback=${this.backCallback}
        .route=${this.route}
        .tabs=${this.tabs}
        .mainPage=${this.mainPage}
        .supervisor=${this.supervisor}
      >
        ${this.hideFilterMenu?"":u`
              <div slot="toolbar-icon">
                ${this.narrow?u`
                      <div class="filter-menu">
                        ${this.numHidden||this.activeFilters?u`<span class="badge"
                              >${this.numHidden||"!"}</span
                            >`:""}
                        <slot name="filter-menu"></slot>
                      </div>
                    `:""}<slot name="toolbar-icon"></slot>
              </div>
            `}
        ${this.narrow?u`
              <div slot="header">
                <slot name="header">
                  <div class="search-toolbar">${i}</div>
                </slot>
              </div>
            `:""}
        <ha-data-table
          .hass=${this.hass}
          .columns=${this.columns}
          .data=${this.data}
          .filter=${this.filter}
          .selectable=${this.selectable}
          .hasFab=${this.hasFab}
          .id=${this.id}
          .noDataText=${this.noDataText}
          .dir=${Q(this.hass)}
          .clickable=${this.clickable}
          .appendRow=${this.appendRow}
        >
          ${this.narrow?u` <div slot="header"></div> `:u`
                <div slot="header">
                  <slot name="header">
                    <div class="table-header">${i}</div>
                  </slot>
                </div>
              `}
        </ha-data-table>
        <div slot="fab"><slot name="fab"></slot></div>
      </hass-tabs-subpage>
    `}},{kind:"method",key:"_preventDefault",value:function(e){e.preventDefault()}},{kind:"method",key:"_handleSearchChange",value:function(e){this.filter!==e.detail.value&&(this.filter=e.detail.value,m(this,"search-changed",{value:this.filter}))}},{kind:"method",key:"_clearFilter",value:function(){m(this,"clear-filter")}},{kind:"get",static:!0,key:"styles",value:function(){return b`
      ha-data-table {
        width: 100%;
        height: 100%;
        --data-table-border-width: 0;
      }
      :host(:not([narrow])) ha-data-table {
        height: calc(100vh - 1px - var(--header-height));
        display: block;
      }
      :host([narrow]) hass-tabs-subpage {
        --main-title-margin: 0;
      }
      .table-header {
        display: flex;
        align-items: center;
        --mdc-shape-small: 0;
        height: 56px;
      }
      .search-toolbar {
        display: flex;
        align-items: center;
        color: var(--secondary-text-color);
      }
      search-input {
        --mdc-text-field-fill-color: var(--sidebar-background-color);
        --mdc-text-field-idle-line-color: var(--divider-color);
        --text-field-overflow: visible;
        z-index: 5;
      }
      .table-header search-input {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
      }
      .search-toolbar search-input {
        display: block;
        width: 100%;
        color: var(--secondary-text-color);
        --mdc-ripple-color: transparant;
      }
      .filters {
        --mdc-text-field-fill-color: var(--input-fill-color);
        --mdc-text-field-idle-line-color: var(--input-idle-line-color);
        --mdc-shape-small: 4px;
        --text-field-overflow: initial;
        display: flex;
        justify-content: flex-end;
        margin-right: 8px;
        color: var(--primary-text-color);
      }
      .active-filters {
        color: var(--primary-text-color);
        position: relative;
        display: flex;
        align-items: center;
        padding: 2px 2px 2px 8px;
        margin-left: 4px;
        font-size: 14px;
        width: max-content;
        cursor: initial;
      }
      .active-filters ha-svg-icon {
        color: var(--primary-color);
      }
      .active-filters mwc-button {
        margin-left: 8px;
      }
      .active-filters::before {
        background-color: var(--primary-color);
        opacity: 0.12;
        border-radius: 4px;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        content: "";
      }
      .badge {
        min-width: 20px;
        box-sizing: border-box;
        border-radius: 50%;
        font-weight: 400;
        background-color: var(--primary-color);
        line-height: 20px;
        text-align: center;
        padding: 0px 4px;
        color: var(--text-primary-color);
        position: absolute;
        right: 0;
        top: 4px;
        font-size: 0.65em;
      }
      .filter-menu {
        position: relative;
      }
    `}}]}}),c);const Pe=r(((e,t,i)=>(i=i.toUpperCase(),e.filter((e=>Object.entries(t).some((t=>{const[a,o]=t;return!(!o.filterable||!String(o.filterKey?e[o.valueColumn||a][o.filterKey]:e[o.valueColumn||a]).toUpperCase().includes(i))}))))))),Be=r(((e,t,i,a)=>e.sort(((e,o)=>{let s=1;"desc"===i&&(s=-1);let l=t.filterKey?e[t.valueColumn||a][t.filterKey]:e[t.valueColumn||a],r=t.filterKey?o[t.valueColumn||a][t.filterKey]:o[t.valueColumn||a];return"string"==typeof l&&(l=l.toUpperCase()),"string"==typeof r&&(r=r.toUpperCase()),void 0===l&&void 0!==r?1:void 0===r&&void 0!==l?-1:l<r?-1*s:l>r?1*s:0}))));n([v("hacs-data-table")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"method",key:"_sortFilterData",value:async function(){const e=(new Date).getTime();this.curRequest++;const t=this.curRequest;let i=this.data;this._filter&&(i=await this._memFilterData(this.data,this._sortColumns,this._filter));const a=this._sortColumn?Be(i,this._sortColumns[this._sortColumn],this._sortDirection,this._sortColumn):i,o=(new Date).getTime()-e;if(o<100&&await new Promise((e=>setTimeout(e,100-o))),this.curRequest===t){if(this.appendRow||this.hasFab){const e=[...a];this.appendRow&&e.push({append:!0,content:this.appendRow}),this.hasFab&&e.push({empty:!0}),this._items=e}else this._items=a;this._filteredData=a}}},{kind:"field",key:"_memFilterData",value:()=>r((async(e,t,i)=>Pe(e,t,i)))}]}}),Le),n([v("hacs-tabs-subpage-data-table")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"method",key:"render",value:function(){const e=this.numHidden?this.hiddenLabel||this.hass.localize("ui.components.data-table.hidden","number",this.numHidden)||this.numHidden:void 0,t=this.activeFilters?u`${this.hass.localize("ui.components.data-table.filtering_by")}
        ${this.activeFilters.join(", ")} ${e?`(${e})`:""}`:e,i=u`<search-input
      .hass=${this.hass}
      .filter=${this.filter}
      .suffix=${!this.narrow}
      @value-changed=${this._handleSearchChange}
      .label=${this.searchLabel||this.hass.localize("ui.components.data-table.search")}
    >
      ${this.narrow?"":u`<div class="filters" slot="suffix" @click=${this._preventDefault}>
            ${t?u`<div class="active-filters">
                  ${t}
                  <mwc-button @click=${this._clearFilter}>
                    ${this.hass.localize("ui.components.data-table.clear")}
                  </mwc-button>
                </div>`:""}
            <slot name="filter-menu"></slot>
          </div>`}
    </search-input>`;return u`
      <hass-tabs-subpage
        .hass=${this.hass}
        .localizeFunc=${this.localizeFunc}
        .narrow=${this.narrow}
        .isWide=${this.isWide}
        .backPath=${this.backPath}
        .backCallback=${this.backCallback}
        .route=${this.route}
        .tabs=${this.tabs}
        .mainPage=${this.mainPage}
        .supervisor=${this.supervisor}
      >
        ${this.hideFilterMenu?"":u`
              <div slot="toolbar-icon">
                ${this.narrow?u`
                      <div class="filter-menu">
                        ${this.numHidden||this.activeFilters?u`<span class="badge">${this.numHidden||"!"}</span>`:""}
                        <slot name="filter-menu"></slot>
                      </div>
                    `:""}<slot name="toolbar-icon"></slot>
              </div>
            `}
        ${this.narrow?u`
              <div slot="header">
                <slot name="header">
                  <div class="search-toolbar">${i}</div>
                </slot>
              </div>
            `:""}
        <hacs-data-table
          .hass=${this.hass}
          .columns=${this.columns}
          .data=${this.data}
          .filter=${this.filter}
          .selectable=${this.selectable}
          .hasFab=${this.hasFab}
          .id=${this.id}
          .noDataText=${this.noDataText}
          .dir=${Q(this.hass)}
          .clickable=${this.clickable}
          .appendRow=${this.appendRow}
        >
          ${this.narrow?u` <div slot="header"></div> `:u`
                <div slot="header">
                  <slot name="header">
                    <div class="table-header">${i}</div>
                  </slot>
                </div>
              `}
        </hacs-data-table>
        <div slot="fab"><slot name="fab"></slot></div>
      </hass-tabs-subpage>
    `}},{kind:"get",static:!0,key:"styles",value:function(){return[g(y(i),"styles",this),b`
        hacs-data-table {
          width: 100%;
          height: 100%;
          --data-table-border-width: 0;
        }
        :host(:not([narrow])) hacs-data-table {
          height: calc(100vh - 1px - var(--header-height));
          display: block;
        }
      `]}}]}}),Me);const je={appdaemon:D,integration:H,netdaemon:E,plugin:L,python_script:M,theme:P},Ae={name:!0,downloads:!0,stars:!0,last_updated:!0,category:!0},Oe={title:"",hidden:!0,filterable:!0};let Ne=n([v("hacs-experimental-panel")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[d({attribute:!1})],key:"hacs",value:void 0},{kind:"field",decorators:[d({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[d({attribute:!1})],key:"route",value:void 0},{kind:"field",decorators:[d({type:Boolean,reflect:!0})],key:"narrow",value:void 0},{kind:"field",decorators:[d({type:Boolean})],key:"isWide",value:void 0},{kind:"field",decorators:[J("hacs-table-filters",!0,!1)],key:"activeFilters",value:()=>[]},{kind:"field",decorators:[J("hacs-table-sort",!0,!1)],key:"activeSort",value:void 0},{kind:"field",decorators:[J("hacs-active-search",!0,!1)],key:"_activeSearch",value:void 0},{kind:"field",decorators:[J("hacs-table-active-columns",!0,!1)],key:"_tableColumns",value:()=>Ae},{kind:"method",key:"firstUpdated",value:async function(e){var t;g(y(i.prototype),"firstUpdated",this).call(this,e);const a=this.activeFilters&&0===this.activeFilters.length?[this.hacs.localize("common.downloaded")]:this.activeFilters,o=null!==(t=this._activeSearch)&&void 0!==t&&t.length?null==a?void 0:a.filter((e=>e!==this.hacs.localize("common.downloaded"))):a;this.activeFilters=null!=o&&o.length?o:void 0}},{kind:"method",key:"updated",value:function(e){var t,a;(g(y(i.prototype),"updated",this).call(this,e),e.has("_activeSearch")&&null!==(t=this._activeSearch)&&void 0!==t&&t.length)&&(this.activeFilters=null===(a=this.activeFilters)||void 0===a?void 0:a.filter((e=>e!==this.hacs.localize("common.downloaded"))))}},{kind:"field",key:"render",value(){return()=>{var e,t,i,a,o,s,l;const r=this._filterRepositories(this.hacs.repositories,this.activeFilters),n=0!==r.filter((e=>e.new)).length;return u`<hacs-tabs-subpage-data-table
      .tabs=${[{name:"Home Assistant Community Store",path:"/hacs/dashboard",iconPath:"m 20.064849,22.306912 c -0.0319,0.369835 -0.280561,0.707789 -0.656773,0.918212 -0.280572,0.153036 -0.605773,0.229553 -0.950094,0.229553 -0.0765,0 -0.146661,-0.0064 -0.216801,-0.01275 -0.605774,-0.05739 -1.135016,-0.344329 -1.402827,-0.7588 l 0.784304,-0.516495 c 0.0893,0.146659 0.344331,0.312448 0.707793,0.34433 0.235931,0.02551 0.471852,-0.01913 0.637643,-0.108401 0.101998,-0.05101 0.172171,-0.127529 0.17854,-0.191295 0.0065,-0.08289 -0.0255,-0.369835 -0.733293,-0.439975 -1.013854,-0.09565 -1.645127,-0.688661 -1.568606,-1.460214 0.0319,-0.382589 0.280561,-0.714165 0.663153,-0.930965 0.331571,-0.172165 0.752423,-0.25506 1.166895,-0.210424 0.599382,0.05739 1.128635,0.344329 1.402816,0.7588 l -0.784304,0.510118 c -0.0893,-0.140282 -0.344331,-0.299694 -0.707782,-0.331576 -0.235932,-0.02551 -0.471863,0.01913 -0.637654,0.10202 -0.0956,0.05739 -0.165791,0.133906 -0.17216,0.191295 -0.0255,0.293317 0.465482,0.420847 0.726913,0.439976 v 0.0064 c 1.020234,0.09565 1.638757,0.66953 1.562237,1.460213 z m -7.466854,-0.988354 c 0,-1.192401 0.962855,-2.155249 2.15525,-2.155249 0.599393,0 1.179645,0.25506 1.594117,0.707789 l -0.695033,0.624895 c -0.235931,-0.25506 -0.561133,-0.401718 -0.899084,-0.401718 -0.675903,0 -1.217906,0.542 -1.217906,1.217906 0,0.66953 0.542003,1.217908 1.217906,1.217908 0.337951,0 0.663153,-0.140283 0.899084,-0.401718 l 0.695033,0.631271 c -0.414472,0.452729 -0.988355,0.707788 -1.594117,0.707788 -1.192395,0 -2.15525,-0.969224 -2.15525,-2.148872 z M 8.6573365,23.461054 10.353474,19.14418 h 0.624893 l 1.568618,4.316874 H 11.52037 L 11.265308,22.734136 H 9.964513 l -0.274192,0.726918 z m 1.6833885,-1.68339 h 0.580263 L 10.646796,21.012487 Z M 8.1089536,19.156932 v 4.297745 H 7.1461095 v -1.645131 h -1.606867 v 1.645131 H 4.5763876 v -4.297745 h 0.9628549 v 1.696143 h 1.606867 V 19.156932 Z M 20.115859,4.2997436 C 20.090359,4.159461 19.969198,4.0574375 19.822548,4.0574375 H 14.141102 10.506516 4.8250686 c -0.14665,0 -0.2678112,0.1020202 -0.2933108,0.2423061 L 3.690064,8.8461703 c -0.00651,0.01913 -0.00651,0.03826 -0.00651,0.057391 v 1.5239797 c 0,0.165789 0.133911,0.299694 0.2996911,0.299694 H 4.5762579 20.0711 20.664112 c 0.165781,0 0.299691,-0.133905 0.299691,-0.299694 V 8.8971848 c 0,-0.01913 0,-0.03826 -0.0065,-0.05739 z M 4.5763876,17.358767 c 0,0.184917 0.1466608,0.331577 0.3315819,0.331577 h 5.5985465 3.634586 0.924594 c 0.184911,0 0.331571,-0.14666 0.331571,-0.331577 v -4.744098 c 0,-0.184918 0.146661,-0.331577 0.331582,-0.331577 h 2.894913 c 0.184921,0 0.331582,0.146659 0.331582,0.331577 v 4.744098 c 0,0.184917 0.146661,0.331577 0.331571,0.331577 h 0.446363 c 0.18491,0 0.331571,-0.14666 0.331571,-0.331577 v -5.636804 c 0,-0.184918 -0.146661,-0.331577 -0.331571,-0.331577 H 4.9079695 c -0.1849211,0 -0.3315819,0.146659 -0.3315819,0.331577 z m 1.6578879,-4.852498 h 5.6495565 c 0.15303,0 0.280561,0.12753 0.280561,0.280564 v 3.513438 c 0,0.153036 -0.127531,0.280566 -0.280561,0.280566 H 6.2342755 c -0.1530412,0 -0.2805719,-0.12753 -0.2805719,-0.280566 v -3.513438 c 0,-0.159411 0.1275307,-0.280564 0.2805719,-0.280564 z M 19.790657,3.3879075 H 4.8569594 c -0.1530412,0 -0.2805718,-0.1275296 -0.2805718,-0.2805642 V 1.3665653 C 4.5763876,1.2135296 4.7039182,1.086 4.8569594,1.086 H 19.790657 c 0.153041,0 0.280572,0.1275296 0.280572,0.2805653 v 1.740778 c 0,0.1530346 -0.127531,0.2805642 -0.280572,0.2805642 z"}]}
      .columns=${this._columns(this.narrow,this._tableColumns)}
      .data=${r}
      .hass=${this.hass}
      isWide=${this.isWide}
      .localizeFunc=${this.hass.localize}
      .mainPage=${!0}
      .narrow=${this.narrow}
      .route=${this.route}
      clickable
      .filter=${this._activeSearch}
      .activeFilters=${this.activeFilters}
      .hasFab=${null===(e=this.activeFilters)||void 0===e?void 0:e.includes(this.hacs.localize("common.downloaded"))}
      .noDataText=${null!==(t=this.activeFilters)&&void 0!==t&&t.includes(this.hacs.localize("common.downloaded"))?"No downloaded repositories":"No repositories matching search"}
      @row-click=${this._handleRowClicked}
      @clear-filter=${this._handleClearFilter}
      @value-changed=${this._handleSearchFilterChanged}
      @sorting-changed=${this._handleSortingChanged}
    >
      <ha-icon-overflow-menu
        narrow
        slot="toolbar-icon"
        .hass=${this.hass}
        .items=${[{path:B,label:this.hacs.localize("menu.documentation"),action:()=>j.open("https://hacs.xyz/","_blank","noreferrer=true")},{path:A,label:"GitHub",action:()=>j.open("https://github.com/hacs","_blank","noreferrer=true")},{path:O,label:this.hacs.localize("menu.open_issue"),action:()=>j.open("https://hacs.xyz/docs/issues","_blank","noreferrer=true")},{path:N,disabled:Boolean(this.hacs.info.disabled_reason),label:this.hacs.localize("menu.custom_repositories"),action:()=>{this.dispatchEvent(new CustomEvent("hacs-dialog",{detail:{type:"custom-repositories",repositories:this.hacs.repositories},bubbles:!0,composed:!0}))}},n?{path:W,label:this.hacs.localize("menu.dismiss"),action:()=>{I(this.hass,this.hacs)}}:void 0,{path:U,label:this.hacs.localize("menu.about"),action:()=>{(async(e,t)=>{oe(e,{title:"Home Assistant Community Store",confirmText:t.localize("common.close"),text:ae.html(`\n  **${t.localize("dialog_about.integration_version")}:** | ${t.info.version}\n  --|--\n  **${t.localize("dialog_about.frontend_version")}:** | 20221217163936\n  **${t.localize("common.repositories")}:** | ${t.repositories.length}\n  **${t.localize("dialog_about.downloaded_repositories")}:** | ${t.repositories.filter((e=>e.installed)).length}\n\n  **${t.localize("dialog_about.useful_links")}:**\n\n  - [General documentation](https://hacs.xyz/)\n  - [Configuration](https://hacs.xyz/docs/configuration/start)\n  - [FAQ](https://hacs.xyz/docs/faq/what)\n  - [GitHub](https://github.com/hacs)\n  - [Discord](https://discord.gg/apgchf8)\n  - [Become a GitHub sponsor? ❤️](https://github.com/sponsors/ludeeus)\n  - [BuyMe~~Coffee~~Beer? 🍺🙈](https://buymeacoffee.com/ludeeus)\n\n  ***\n\n  _Everything you find in HACS is **not** tested by Home Assistant, that includes HACS itself.\n  The HACS and Home Assistant teams do not support **anything** you find here._`)})})(this,this.hacs)}}].filter((e=>void 0!==e))}
      >
      </ha-icon-overflow-menu>
      <ha-button-menu slot="filter-menu" corner="BOTTOM_START" multi>
        <ha-icon-button
          slot="trigger"
          .label=${this.hass.localize("ui.panel.config.entities.picker.filter.filter")}
          .path=${q}
        >
        </ha-icon-button>

        ${this.narrow?"":u`<p class="menu_header">Filters</p>`}
        <ha-check-list-item
          @request-selected=${this._handleDownloadFilterChange}
          graphic="control"
          .selected=${null!==(i=null===(a=this.activeFilters)||void 0===a?void 0:a.includes(this.hacs.localize("common.downloaded")))&&void 0!==i&&i}
          left
        >
          ${this.hacs.localize("common.downloaded")}
        </ha-check-list-item>
        ${n?u`
              <ha-check-list-item
                @request-selected=${this._handleNewFilterChange}
                graphic="control"
                .selected=${null!==(o=null===(s=this.activeFilters)||void 0===s?void 0:s.includes(this.hacs.localize("common.new")))&&void 0!==o&&o}
                left
              >
                ${this.hacs.localize("common.new")}
              </ha-check-list-item>
            `:""}

        <ha-select
          label="Category filter"
          @selected=${this._handleCategoryFilterChange}
          @closed=${te}
          naturalMenuWidth
          .value=${(null===(l=this.activeFilters)||void 0===l?void 0:l.find((e=>e.startsWith(`${this.hacs.localize("dialog_custom_repositories.category")}: `))))||""}
        >
          ${this.hacs.info.categories.map((e=>u`
                <mwc-list-item
                  .value="${this.hacs.localize("dialog_custom_repositories.category")}: ${this.hacs.localize(`common.${e}`)}"
                >
                  ${this.hacs.localize(`common.${e}`)}
                </mwc-list-item>
              `))}
        </ha-select>
        ${this.narrow?"":u`
              <div class="divider"></div>
              <p class="menu_header">Columns</p>
              ${Object.keys(Ae).map((e=>{var t;return u`
                  <ha-check-list-item
                    @request-selected=${this._handleColumnChange}
                    graphic="control"
                    .column=${e}
                    .selected=${null!==(t=this._tableColumns[e])&&void 0!==t?t:Ae[e]}
                    left
                  >
                    ${this.hacs.localize(`column.${e}`)}
                  </ha-check-list-item>
                `}))}
            `}
      </ha-button-menu>
    </hacs-tabs-subpage-data-table>`}}},{kind:"field",key:"_exploreFabClicked",value(){return()=>{var e;const t=null===(e=this.activeFilters)||void 0===e?void 0:e.filter((e=>e!==this.hacs.localize("common.downloaded")));this.activeFilters=null!=t&&t.length?t:void 0}}},{kind:"field",key:"_filterRepositories",value(){return r(((e,t)=>e.filter((e=>{var i,a;return!(null!==(i=this.activeFilters)&&void 0!==i&&i.includes(this.hacs.localize("common.downloaded"))&&!e.installed)&&(!(null!==(a=this.activeFilters)&&void 0!==a&&a.includes(this.hacs.localize("common.new"))&&!e.new)&&!(null!=t&&t.filter((e=>e.startsWith(this.hacs.localize("dialog_custom_repositories.category")))).length&&!t.includes(`${this.hacs.localize("dialog_custom_repositories.category")}: ${this.hacs.localize(`common.${e.category}`)}`)))})).sort(((e,t)=>t.name.localeCompare(e.name))).sort(((e,t)=>e.stars<t.stars?1:-1)).sort(((e,t)=>e.installed&&!t.installed?1:-1)).sort(((e,t)=>!e.new&&t.new?1:-1))))}},{kind:"field",key:"_columns",value(){return r(((e,t)=>{var i,a,o,s,l;return{icon:{title:"",label:this.hass.localize("ui.panel.config.lovelace.dashboards.picker.headers.icon"),hidden:this.narrow,type:"icon",template:(e,t)=>{var i,a;return"integration"===t.category?u`
                <img
                  style="height: 32px; width: 32px"
                  slot="item-icon"
                  src=${ie({domain:t.domain||"invalid",type:"icon",useFallback:!0,darkOptimized:null===(i=this.hass.themes)||void 0===i?void 0:i.darkMode})}
                  referrerpolicy="no-referrer"
                />
              `:u`
                <ha-svg-icon
                  style="height: 32px; width: 32px; fill: var(--secondary-text-color);"
                  slot="item-icon"
                  .path=${a=t.category,je[a]}
                ></ha-svg-icon>
              `}},name:{...Oe,title:this.hacs.localize("column.name"),main:!0,sortable:!0,direction:"name"===(null===(i=this.activeSort)||void 0===i?void 0:i.column)?this.activeSort.direction:null,hidden:!t.name,grows:!0,template:(t,i)=>{var a;return u`
            ${i.new?u`<ha-svg-icon
                  label="New"
                  style="color: var(--primary-color); margin-right: 4px;"
                  .path=${W}
                ></ha-svg-icon>`:""}
            ${null!==(a=this.activeFilters)&&void 0!==a&&a.includes(this.hacs.localize("common.downloaded"))||!i.installed?"":u`<ha-svg-icon
                  label="Downloaded"
                  style="color: var(--primary-color); margin-right: 4px;"
                  .path=${Y}
                ></ha-svg-icon>`}
            ${t}
            <div class="secondary">
              ${e?this.hacs.localize(`common.${i.category}`):i.description}
            </div>
          `}},downloads:{...Oe,title:this.hacs.localize("column.downloads"),hidden:e||!t.downloads,sortable:!0,direction:"downloads"===(null===(a=this.activeSort)||void 0===a?void 0:a.column)?this.activeSort.direction:null,width:"10%",template:e=>u`${e||"-"}`},stars:{...Oe,title:this.hacs.localize("column.stars"),hidden:e||!t.stars,sortable:!0,direction:"stars"===(null===(o=this.activeSort)||void 0===o?void 0:o.column)?this.activeSort.direction:null,width:"10%"},last_updated:{...Oe,title:this.hacs.localize("column.last_updated"),hidden:e||!t.last_updated,sortable:!0,direction:"last_updated"===(null===(s=this.activeSort)||void 0===s?void 0:s.column)?this.activeSort.direction:null,width:"15%",template:(e,t)=>t.new?"-":be(new Date(e),this.hass.locale)},category:{...Oe,title:this.hacs.localize("column.category"),hidden:e||!t.category,sortable:!0,direction:"category"===(null===(l=this.activeSort)||void 0===l?void 0:l.column)?this.activeSort.direction:null,width:"10%",template:e=>this.hacs.localize(`common.${e}`)},authors:Oe,description:Oe,domain:Oe,full_name:Oe,id:Oe,topics:Oe,actions:{title:"",width:this.narrow?void 0:"10%",type:"overflow-menu",template:(e,t)=>t.installed?u`
                <ha-icon-overflow-menu
                  .hass=${this.hass}
                  .items=${le(this,t)}
                  narrow
                >
                </ha-icon-overflow-menu>
              `:""}}}))}},{kind:"method",key:"_handleRowClicked",value:function(e){K(`/hacs/repository/${e.detail.id}`)}},{kind:"method",key:"_handleCategoryFilterChange",value:function(e){e.stopPropagation();const t=e.target.value;var i;t&&(this.activeFilters=[...(null===(i=this.activeFilters)||void 0===i?void 0:i.filter((e=>!e.startsWith(this.hacs.localize("dialog_custom_repositories.category"))&&e!==t)))||[],t])}},{kind:"method",key:"_handleSearchFilterChanged",value:function(e){this._activeSearch=e.detail.value}},{kind:"method",key:"_handleColumnChange",value:function(e){e.stopPropagation();const t={...this._tableColumns,[e.currentTarget.column]:e.detail.selected};this._tableColumns=Object.keys(Ae).reduce(((e,i)=>{var a;return{...e,[i]:null!==(a=t[i])&&void 0!==a?a:Ae[i]}}),{})}},{kind:"method",key:"_handleSortingChanged",value:function(e){this.activeSort=e.detail}},{kind:"method",key:"_handleDownloadFilterChange",value:function(e){var t;const i=(null===(t=this.activeFilters)||void 0===t?void 0:t.filter((e=>!e.startsWith(this.hacs.localize("common.downloaded")))))||[];e.detail.selected&&i.push(this.hacs.localize("common.downloaded")),this.activeFilters=i.length?i:void 0}},{kind:"method",key:"_handleNewFilterChange",value:function(e){var t;const i=(null===(t=this.activeFilters)||void 0===t?void 0:t.filter((e=>!e.startsWith(this.hacs.localize("common.new")))))||[];e.detail.selected&&i.push(this.hacs.localize("common.new")),this.activeFilters=i.length?i:void 0}},{kind:"method",key:"_handleClearFilter",value:function(){this.activeFilters=void 0}},{kind:"get",static:!0,key:"styles",value:function(){return[V,G,b`
        .menu_header {
          font-size: 14px;
          margin: 8px;
        }
        .divider {
          bottom: 112px;
          padding: 10px 0px;
        }
        .divider::before {
          content: " ";
          display: block;
          height: 1px;
          background-color: var(--divider-color);
        }
        ha-select {
          margin: 8px;
        }
      `]}}]}}),c);export{Ne as HacsExperimentalPanel};
