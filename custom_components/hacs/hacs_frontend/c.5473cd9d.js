import{aF as t,a8 as e,aG as i,aH as s,aI as o,a6 as a,a7 as n,aJ as r,aK as l,aL as h,a as c,h as d,e as p,$ as u,o as f,r as g,n as _,m as y,aM as m,ah as b,aN as v,c as w,aO as k,aP as z,aQ as x,d as T}from"./main-c805434e.js";import"./c.fa497e12.js";import{i as S}from"./c.b39f7e4d.js";import{c as R}from"./c.4a97632a.js";import"./c.6b338b4b.js";import"./c.517802bf.js";import{b as E}from"./c.be11274c.js";import{s as C}from"./c.0cdbe094.js";import"./c.8e28b461.js";import"./c.6e8e6174.js";import"./c.743a15a1.js";import"./c.d49c601d.js";import"./c.791b7770.js";var $=new Set;const L=[{properties:{_parentResizable:{type:Object,observer:"_parentResizableChanged"},_notifyingDescendant:{type:Boolean,value:!1}},listeners:{"iron-request-resize-notifications":"_onIronRequestResizeNotifications"},created:function(){this._interestedResizables=[],this._boundNotifyResize=this.notifyResize.bind(this),this._boundOnDescendantIronResize=this._onDescendantIronResize.bind(this)},attached:function(){this._requestResizeNotifications()},detached:function(){this._parentResizable?this._parentResizable.stopResizeNotificationsFor(this):($.delete(this),window.removeEventListener("resize",this._boundNotifyResize)),this._parentResizable=null},notifyResize:function(){this.isAttached&&(this._interestedResizables.forEach((function(t){this.resizerShouldNotify(t)&&this._notifyDescendant(t)}),this),this._fireResize())},assignParentResizable:function(t){this._parentResizable&&this._parentResizable.stopResizeNotificationsFor(this),this._parentResizable=t,t&&-1===t._interestedResizables.indexOf(this)&&(t._interestedResizables.push(this),t._subscribeIronResize(this))},stopResizeNotificationsFor:function(t){var e=this._interestedResizables.indexOf(t);e>-1&&(this._interestedResizables.splice(e,1),this._unsubscribeIronResize(t))},_subscribeIronResize:function(t){t.addEventListener("iron-resize",this._boundOnDescendantIronResize)},_unsubscribeIronResize:function(t){t.removeEventListener("iron-resize",this._boundOnDescendantIronResize)},resizerShouldNotify:function(t){return!0},_onDescendantIronResize:function(e){this._notifyingDescendant?e.stopPropagation():t||this._fireResize()},_fireResize:function(){this.fire("iron-resize",null,{node:this,bubbles:!1})},_onIronRequestResizeNotifications:function(t){var i=e(t).rootTarget;i!==this&&(i.assignParentResizable(this),this._notifyDescendant(i),t.stopPropagation())},_parentResizableChanged:function(t){t&&window.removeEventListener("resize",this._boundNotifyResize)},_notifyDescendant:function(t){this.isAttached&&(this._notifyingDescendant=!0,t.notifyResize(),this._notifyingDescendant=!1)},_requestResizeNotifications:function(){if(this.isAttached)if("loading"===document.readyState){var t=this._requestResizeNotifications.bind(this);document.addEventListener("readystatechange",(function e(){document.removeEventListener("readystatechange",e),t()}))}else this._findParent(),this._parentResizable?this._parentResizable._interestedResizables.forEach((function(t){t!==this&&t._findParent()}),this):($.forEach((function(t){t!==this&&t._findParent()}),this),window.addEventListener("resize",this._boundNotifyResize),this.notifyResize())},_findParent:function(){this.assignParentResizable(null),this.fire("iron-request-resize-notifications",null,{node:this,bubbles:!0,cancelable:!0}),this._parentResizable?$.delete(this):$.add(this)}},{listeners:{"app-reset-layout":"_appResetLayoutHandler","iron-resize":"resetLayout"},attached:function(){this.fire("app-reset-layout")},_appResetLayoutHandler:function(t){e(t).path[0]!==this&&(this.resetLayout(),t.stopPropagation())},_updateLayoutStates:function(){console.error("unimplemented")},resetLayout:function(){var t=this._updateLayoutStates.bind(this);this._layoutDebouncer=i.debounce(this._layoutDebouncer,s,t),o(this._layoutDebouncer),this._notifyDescendantResize()},_notifyLayoutChanged:function(){var t=this;requestAnimationFrame((function(){t.fire("app-reset-layout")}))},_notifyDescendantResize:function(){this.isAttached&&this._interestedResizables.forEach((function(t){this.resizerShouldNotify(t)&&this._notifyDescendant(t)}),this)}}],D={properties:{scrollTarget:{type:HTMLElement,value:function(){return this._defaultScrollTarget}}},observers:["_scrollTargetChanged(scrollTarget, isAttached)"],_shouldHaveListener:!0,_scrollTargetChanged:function(t,i){if(this._oldScrollTarget&&(this._toggleScrollListener(!1,this._oldScrollTarget),this._oldScrollTarget=null),i)if("document"===t)this.scrollTarget=this._doc;else if("string"==typeof t){var s=this.domHost;this.scrollTarget=s&&s.$?s.$[t]:e(this.ownerDocument).querySelector("#"+t)}else this._isValidScrollTarget()&&(this._oldScrollTarget=t,this._toggleScrollListener(this._shouldHaveListener,t))},_scrollHandler:function(){},get _defaultScrollTarget(){return this._doc},get _doc(){return this.ownerDocument.documentElement},get _scrollTop(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.pageYOffset:this.scrollTarget.scrollTop:0},get _scrollLeft(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.pageXOffset:this.scrollTarget.scrollLeft:0},set _scrollTop(t){this.scrollTarget===this._doc?window.scrollTo(window.pageXOffset,t):this._isValidScrollTarget()&&(this.scrollTarget.scrollTop=t)},set _scrollLeft(t){this.scrollTarget===this._doc?window.scrollTo(t,window.pageYOffset):this._isValidScrollTarget()&&(this.scrollTarget.scrollLeft=t)},scroll:function(t,e){var i;"object"==typeof t?(i=t.left,e=t.top):i=t,i=i||0,e=e||0,this.scrollTarget===this._doc?window.scrollTo(i,e):this._isValidScrollTarget()&&(this.scrollTarget.scrollLeft=i,this.scrollTarget.scrollTop=e)},get _scrollTargetWidth(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.innerWidth:this.scrollTarget.offsetWidth:0},get _scrollTargetHeight(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.innerHeight:this.scrollTarget.offsetHeight:0},_isValidScrollTarget:function(){return this.scrollTarget instanceof HTMLElement},_toggleScrollListener:function(t,e){var i=e===this._doc?window:e;t?this._boundScrollHandler||(this._boundScrollHandler=this._scrollHandler.bind(this),i.addEventListener("scroll",this._boundScrollHandler)):this._boundScrollHandler&&(i.removeEventListener("scroll",this._boundScrollHandler),this._boundScrollHandler=null)},toggleScrollListener:function(t){this._shouldHaveListener=t,this._toggleScrollListener(t,this.scrollTarget)}},H={},F=[D,{properties:{effects:{type:String},effectsConfig:{type:Object,value:function(){return{}}},disabled:{type:Boolean,reflectToAttribute:!0,value:!1},threshold:{type:Number,value:0},thresholdTriggered:{type:Boolean,notify:!0,readOnly:!0,reflectToAttribute:!0}},observers:["_effectsChanged(effects, effectsConfig, isAttached)"],_updateScrollState:function(t){},isOnScreen:function(){return!1},isContentBelow:function(){return!1},_effectsRunFn:null,_effects:null,get _clampedScrollTop(){return Math.max(0,this._scrollTop)},attached:function(){this._scrollStateChanged()},detached:function(){this._tearDownEffects()},createEffect:function(t,e){var i=H[t];if(!i)throw new ReferenceError(this._getUndefinedMsg(t));var s=this._boundEffect(i,e||{});return s.setUp(),s},_effectsChanged:function(t,e,i){this._tearDownEffects(),t&&i&&(t.split(" ").forEach((function(t){var i;""!==t&&((i=H[t])?this._effects.push(this._boundEffect(i,e[t])):console.warn(this._getUndefinedMsg(t)))}),this),this._setUpEffect())},_layoutIfDirty:function(){return this.offsetWidth},_boundEffect:function(t,e){e=e||{};var i=parseFloat(e.startsAt||0),s=parseFloat(e.endsAt||1),o=s-i,a=function(){},n=0===i&&1===s?t.run:function(e,s){t.run.call(this,Math.max(0,(e-i)/o),s)};return{setUp:t.setUp?t.setUp.bind(this,e):a,run:t.run?n.bind(this):a,tearDown:t.tearDown?t.tearDown.bind(this):a}},_setUpEffect:function(){this.isAttached&&this._effects&&(this._effectsRunFn=[],this._effects.forEach((function(t){!1!==t.setUp()&&this._effectsRunFn.push(t.run)}),this))},_tearDownEffects:function(){this._effects&&this._effects.forEach((function(t){t.tearDown()})),this._effectsRunFn=[],this._effects=[]},_runEffects:function(t,e){this._effectsRunFn&&this._effectsRunFn.forEach((function(i){i(t,e)}))},_scrollHandler:function(){this._scrollStateChanged()},_scrollStateChanged:function(){if(!this.disabled){var t=this._clampedScrollTop;this._updateScrollState(t),this.threshold>0&&this._setThresholdTriggered(t>=this.threshold)}},_getDOMRef:function(t){console.warn("_getDOMRef","`"+t+"` is undefined")},_getUndefinedMsg:function(t){return"Scroll effect `"+t+"` is undefined. Did you forget to import app-layout/app-scroll-effects/effects/"+t+".html ?"}}];a({_template:n`
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
`,is:"app-header",behaviors:[F,L],properties:{condenses:{type:Boolean,value:!1},fixed:{type:Boolean,value:!1},reveals:{type:Boolean,value:!1},shadow:{type:Boolean,reflectToAttribute:!0,value:!1}},observers:["_configChanged(isAttached, condenses, fixed)"],_height:0,_dHeight:0,_stickyElTop:0,_stickyElRef:null,_top:0,_progress:0,_wasScrollingDown:!1,_initScrollTop:0,_initTimestamp:0,_lastTimestamp:0,_lastScrollTop:0,get _maxHeaderTop(){return this.fixed?this._dHeight:this._height+5},get _stickyEl(){if(this._stickyElRef)return this._stickyElRef;for(var t,i=e(this.$.slot).getDistributedNodes(),s=0;t=i[s];s++)if(t.nodeType===Node.ELEMENT_NODE){if(t.hasAttribute("sticky")){this._stickyElRef=t;break}this._stickyElRef||(this._stickyElRef=t)}return this._stickyElRef},_configChanged:function(){this.resetLayout(),this._notifyLayoutChanged()},_updateLayoutStates:function(){if(0!==this.offsetWidth||0!==this.offsetHeight){var t=this._clampedScrollTop,e=0===this._height||0===t,i=this.disabled;this._height=this.offsetHeight,this._stickyElRef=null,this.disabled=!0,e||this._updateScrollState(0,!0),this._mayMove()?this._dHeight=this._stickyEl?this._height-this._stickyEl.offsetHeight:0:this._dHeight=0,this._stickyElTop=this._stickyEl?this._stickyEl.offsetTop:0,this._setUpEffect(),e?this._updateScrollState(t,!0):(this._updateScrollState(this._lastScrollTop,!0),this._layoutIfDirty()),this.disabled=i}},_updateScrollState:function(t,e){if(0!==this._height){var i=0,s=0,o=this._top;this._lastScrollTop;var a=this._maxHeaderTop,n=t-this._lastScrollTop,r=Math.abs(n),l=t>this._lastScrollTop,h=performance.now();if(this._mayMove()&&(s=this._clamp(this.reveals?o+n:t,0,a)),t>=this._dHeight&&(s=this.condenses&&!this.fixed?Math.max(this._dHeight,s):s,this.style.transitionDuration="0ms"),this.reveals&&!this.disabled&&r<100&&((h-this._initTimestamp>300||this._wasScrollingDown!==l)&&(this._initScrollTop=t,this._initTimestamp=h),t>=a))if(Math.abs(this._initScrollTop-t)>30||r>10){l&&t>=a?s=a:!l&&t>=this._dHeight&&(s=this.condenses&&!this.fixed?this._dHeight:0);var c=n/(h-this._lastTimestamp);this.style.transitionDuration=this._clamp((s-o)/c,0,300)+"ms"}else s=this._top;i=0===this._dHeight?t>0?1:0:s/this._dHeight,e||(this._lastScrollTop=t,this._top=s,this._wasScrollingDown=l,this._lastTimestamp=h),(e||i!==this._progress||o!==s||0===t)&&(this._progress=i,this._runEffects(i,s),this._transformHeader(s))}},_mayMove:function(){return this.condenses||!this.fixed},willCondense:function(){return this._dHeight>0&&this.condenses},isOnScreen:function(){return 0!==this._height&&this._top<this._height},isContentBelow:function(){return 0===this._top?this._clampedScrollTop>0:this._clampedScrollTop-this._maxHeaderTop>=0},_transformHeader:function(t){this.translate3d(0,-t+"px",0),this._stickyEl&&this.translate3d(0,this.condenses&&t>=this._stickyElTop?Math.min(t,this._dHeight)-this._stickyElTop+"px":0,0,this._stickyEl)},_clamp:function(t,e,i){return Math.min(i,Math.max(e,t))},_ensureBgContainers:function(){this._bgContainer||(this._bgContainer=document.createElement("div"),this._bgContainer.id="background",this._bgRear=document.createElement("div"),this._bgRear.id="backgroundRearLayer",this._bgContainer.appendChild(this._bgRear),this._bgFront=document.createElement("div"),this._bgFront.id="backgroundFrontLayer",this._bgContainer.appendChild(this._bgFront),e(this.root).insertBefore(this._bgContainer,this.$.contentContainer))},_getDOMRef:function(t){switch(t){case"backgroundFrontLayer":return this._ensureBgContainers(),this._bgFront;case"backgroundRearLayer":return this._ensureBgContainers(),this._bgRear;case"background":return this._ensureBgContainers(),this._bgContainer;case"mainTitle":return e(this).querySelector("[main-title]");case"condensedTitle":return e(this).querySelector("[condensed-title]")}return null},getScrollState:function(){return{progress:this._progress,top:this._top}}});customElements.define("ha-icon-next",class extends r{connectedCallback(){super.connectedCallback(),setTimeout((()=>{this.path="ltr"===window.getComputedStyle(this).direction?l:h}),100)}}),a({_template:n`
    <style>
      :host {
        display: block;
        /**
         * Force app-header-layout to have its own stacking context so that its parent can
         * control the stacking of it relative to other elements (e.g. app-drawer-layout).
         * This could be done using \`isolation: isolate\`, but that's not well supported
         * across browsers.
         */
        position: relative;
        z-index: 0;
      }

      #wrapper ::slotted([slot=header]) {
        @apply --layout-fixed-top;
        z-index: 1;
      }

      #wrapper.initializing ::slotted([slot=header]) {
        position: relative;
      }

      :host([has-scrolling-region]) {
        height: 100%;
      }

      :host([has-scrolling-region]) #wrapper ::slotted([slot=header]) {
        position: absolute;
      }

      :host([has-scrolling-region]) #wrapper.initializing ::slotted([slot=header]) {
        position: relative;
      }

      :host([has-scrolling-region]) #wrapper #contentContainer {
        @apply --layout-fit;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
      }

      :host([has-scrolling-region]) #wrapper.initializing #contentContainer {
        position: relative;
      }

      :host([fullbleed]) {
        @apply --layout-vertical;
        @apply --layout-fit;
      }

      :host([fullbleed]) #wrapper,
      :host([fullbleed]) #wrapper #contentContainer {
        @apply --layout-vertical;
        @apply --layout-flex;
      }

      #contentContainer {
        /* Create a stacking context here so that all children appear below the header. */
        position: relative;
        z-index: 0;
      }

      @media print {
        :host([has-scrolling-region]) #wrapper #contentContainer {
          overflow-y: visible;
        }
      }

    </style>

    <div id="wrapper" class="initializing">
      <slot id="headerSlot" name="header"></slot>

      <div id="contentContainer">
        <slot></slot>
      </div>
    </div>
`,is:"app-header-layout",behaviors:[L],properties:{hasScrollingRegion:{type:Boolean,value:!1,reflectToAttribute:!0}},observers:["resetLayout(isAttached, hasScrollingRegion)"],get header(){return e(this.$.headerSlot).getDistributedNodes()[0]},_updateLayoutStates:function(){var t=this.header;if(this.isAttached&&t){this.$.wrapper.classList.remove("initializing"),t.scrollTarget=this.hasScrollingRegion?this.$.contentContainer:this.ownerDocument.documentElement;var e=t.offsetHeight;this.hasScrollingRegion?(t.style.left="",t.style.right=""):requestAnimationFrame(function(){var e=this.getBoundingClientRect(),i=document.documentElement.clientWidth-e.right;t.style.left=e.left+"px",t.style.right=i+"px"}.bind(this));var i=this.$.contentContainer.style;t.fixed&&!t.condenses&&this.hasScrollingRegion?(i.marginTop=e+"px",i.paddingTop=""):(i.paddingTop=e+"px",i.marginTop="")}}});class M extends(customElements.get("app-header-layout")){static get template(){return n`
      <style>
        :host {
          display: block;
          /**
         * Force app-header-layout to have its own stacking context so that its parent can
         * control the stacking of it relative to other elements (e.g. app-drawer-layout).
         * This could be done using \`isolation: isolate\`, but that's not well supported
         * across browsers.
         */
          position: relative;
          z-index: 0;
        }

        #wrapper ::slotted([slot="header"]) {
          @apply --layout-fixed-top;
          z-index: 1;
        }

        #wrapper.initializing ::slotted([slot="header"]) {
          position: relative;
        }

        :host([has-scrolling-region]) {
          height: 100%;
        }

        :host([has-scrolling-region]) #wrapper ::slotted([slot="header"]) {
          position: absolute;
        }

        :host([has-scrolling-region])
          #wrapper.initializing
          ::slotted([slot="header"]) {
          position: relative;
        }

        :host([has-scrolling-region]) #wrapper #contentContainer {
          @apply --layout-fit;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
        }

        :host([has-scrolling-region]) #wrapper.initializing #contentContainer {
          position: relative;
        }

        #contentContainer {
          /* Create a stacking context here so that all children appear below the header. */
          position: relative;
          z-index: 0;
          /* Using 'transform' will cause 'position: fixed' elements to behave like
           'position: absolute' relative to this element. */
          transform: translate(0);
          margin-left: env(safe-area-inset-left);
          margin-right: env(safe-area-inset-right);
        }

        @media print {
          :host([has-scrolling-region]) #wrapper #contentContainer {
            overflow-y: visible;
          }
        }
      </style>

      <div id="wrapper" class="initializing">
        <slot id="headerSlot" name="header"></slot>

        <div id="contentContainer"><slot></slot></div>
        <slot id="fab" name="fab"></slot>
      </div>
    `}}customElements.define("ha-app-layout",M),c([_("ha-config-section")],(function(t,e){return{F:class extends e{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[p()],key:"isWide",value:()=>!1},{kind:"field",decorators:[p({type:Boolean})],key:"vertical",value:()=>!1},{kind:"field",decorators:[p({type:Boolean,attribute:"full-width"})],key:"fullWidth",value:()=>!1},{kind:"method",key:"render",value:function(){return u`
      <div
        class="content ${f({narrow:!this.isWide,"full-width":this.fullWidth})}"
      >
        <div class="header"><slot name="header"></slot></div>
        <div
          class="together layout ${f({narrow:!this.isWide,vertical:this.vertical||!this.isWide,horizontal:!this.vertical&&this.isWide})}"
        >
          <div class="intro"><slot name="introduction"></slot></div>
          <div class="panel flex-auto"><slot></slot></div>
        </div>
      </div>
    `}},{kind:"get",static:!0,key:"styles",value:function(){return g`
      :host {
        display: block;
      }
      .content {
        padding: 28px 20px 0;
        max-width: 1040px;
        margin: 0 auto;
      }

      .layout {
        display: flex;
      }

      .horizontal {
        flex-direction: row;
      }

      .vertical {
        flex-direction: column;
      }

      .flex-auto {
        flex: 1 1 auto;
      }

      .header {
        font-family: var(--paper-font-headline_-_font-family);
        -webkit-font-smoothing: var(
          --paper-font-headline_-_-webkit-font-smoothing
        );
        font-size: var(--paper-font-headline_-_font-size);
        font-weight: var(--paper-font-headline_-_font-weight);
        letter-spacing: var(--paper-font-headline_-_letter-spacing);
        line-height: var(--paper-font-headline_-_line-height);
        opacity: var(--dark-primary-opacity);
      }

      .together {
        margin-top: 32px;
      }

      .intro {
        font-family: var(--paper-font-subhead_-_font-family);
        -webkit-font-smoothing: var(
          --paper-font-subhead_-_-webkit-font-smoothing
        );
        font-weight: var(--paper-font-subhead_-_font-weight);
        line-height: var(--paper-font-subhead_-_line-height);
        width: 100%;
        opacity: var(--dark-primary-opacity);
        font-size: 14px;
        padding-bottom: 20px;
      }

      .horizontal .intro {
        max-width: 400px;
        margin-right: 40px;
      }

      .panel {
        margin-top: -24px;
      }

      .panel ::slotted(*) {
        margin-top: 24px;
        display: block;
      }

      .narrow.content {
        max-width: 640px;
      }
      .narrow .together {
        margin-top: 20px;
      }
      .narrow .intro {
        padding-bottom: 20px;
        margin-right: 0;
        max-width: 500px;
      }

      .full-width {
        padding: 0;
      }

      .full-width .layout {
        flex-direction: column;
      }
    `}}]}}),d);const A=y(((t,e)=>{var i,s,o;const a=[],n=[],r=[];var l,h;return t.repositories.forEach((e=>{var i;if("pending-restart"===e.status&&r.push(e),t.addedToLovelace(t,e)||n.push(e),e.installed&&null!==(i=t.removed.map((t=>t.repository)))&&void 0!==i&&i.includes(e.full_name)){const i=t.removed.find((t=>t.repository===e.full_name));a.push({name:t.localize("entry.messages.removed_repository",{repository:i.repository}),info:i.reason,severity:"warning",dialog:"remove",repository:e})}})),null!==(i=t.status)&&void 0!==i&&i.startup&&["setup","waiting","startup"].includes(t.status.stage)&&a.push({name:t.localize(`entry.messages.${t.status.stage}.title`),info:t.localize(`entry.messages.${t.status.stage}.content`),severity:"warning"}),null!==(s=t.status)&&void 0!==s&&s.has_pending_tasks&&a.push({name:t.localize("entry.messages.has_pending_tasks.title"),info:t.localize("entry.messages.has_pending_tasks.content"),severity:"warning"}),null!==(o=t.status)&&void 0!==o&&o.disabled?[{name:t.localize("entry.messages.disabled.title"),secondary:t.localize(`entry.messages.disabled.${null===(l=t.status)||void 0===l?void 0:l.disabled_reason}.title`),info:t.localize(`entry.messages.disabled.${null===(h=t.status)||void 0===h?void 0:h.disabled_reason}.description`),severity:"error"}]:(n.length>0&&a.push({name:t.localize("entry.messages.resources.title"),info:t.localize("entry.messages.resources.content",{number:n.length}),severity:"error"}),r.length>0&&a.push({name:t.localize("entry.messages.restart.title"),path:e?"/_my_redirect/server_controls":void 0,info:t.localize("entry.messages.restart.content",{number:r.length,pluralWording:1===r.length?t.localize("common.integration"):t.localize("common.integration_plural")}),severity:"error"}),a)}));let N=c([_("hacs-entry-panel")],(function(t,e){return{F:class extends e{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[p({attribute:!1})],key:"hacs",value:void 0},{kind:"field",decorators:[p({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[p({attribute:!1})],key:"route",value:void 0},{kind:"field",decorators:[p({type:Boolean,reflect:!0})],key:"narrow",value:void 0},{kind:"field",decorators:[p({type:Boolean})],key:"isWide",value:void 0},{kind:"method",key:"render",value:function(){var t,e;const i=[],s=[],o=A(this.hacs,S(this.hass,"my"));return this.hacs.repositories.forEach((t=>{t.pending_upgrade&&i.push(t)})),o.forEach((t=>{s.push({iconPath:m,name:t.name,info:t.info,secondary:t.secondary,path:t.path||"",severity:t.severity,dialog:t.dialog,repository:t.repository})})),this.dispatchEvent(new CustomEvent("update-hacs",{detail:{messages:s,updates:i},bubbles:!0,composed:!0})),u`
      <ha-app-layout>
        <app-header fixed slot="header">
          <app-toolbar>
            <ha-menu-button .hass=${this.hass} .narrow=${this.narrow}></ha-menu-button>
            <div main-title>${this.narrow?"HACS":"Home Assistant Community Store"}</div>
          </app-toolbar>
        </app-header>
        <ha-config-section .narrow=${this.narrow} .isWide=${this.isWide} full-width>
          ${0!==(null===(t=this.hacs.messages)||void 0===t?void 0:t.length)?this.hacs.messages.map((t=>u`
                    <ha-alert
                      .alertType=${t.severity}
                      .title=${t.secondary?`${t.name} - ${t.secondary}`:t.name}
                      .rtl=${R(this.hass)}
                    >
                      ${t.info}
                      <mwc-button
                        slot="action"
                        .label=${t.path?this.hacs.localize("common.navigate"):t.dialog?this.hacs.localize("common.show"):""}
                        @click=${()=>t.path?b(t.path):this._openDialog(t)}
                      >
                      </mwc-button>
                    </ha-alert>
                  `)):(this.narrow,"")}
          ${0!==(null===(e=this.hacs.updates)||void 0===e?void 0:e.length)?u` <ha-card outlined>
                <div class="title">${this.hacs.localize("common.updates")}</div>
                <mwc-list>
                  ${v(this.hacs.updates).map((t=>u`
                      <ha-clickable-list-item
                        graphic="avatar"
                        disableHref
                        twoline
                        @click=${()=>this._openUpdateDialog(t)}
                      >
                        ${"integration"===t.category?u`
                              <img
                                loading="lazy"
                                .src=${E({domain:t.domain,darkOptimized:this.hass.themes.darkMode,type:"icon"})}
                                referrerpolicy="no-referrer"
                                @error=${this._onImageError}
                                @load=${this._onImageLoad}
                                slot="graphic"
                              />
                            `:u`
                              <ha-svg-icon
                                slot="graphic"
                                path="${w}"
                                style="padding-left: 0; height: 40px; width: 40px;"
                              >
                              </ha-svg-icon>
                            `}
                        <span>${t.name}</span>
                        <span slot="secondary"
                          >${this.hacs.localize("sections.pending_repository_upgrade",{downloaded:t.installed_version,available:t.available_version})}</span
                        >
                      </ha-clickable-list-item>
                    `))}
                </mwc-list>
              </ha-card>`:""}

          <ha-card outlined>
            <mwc-list>
              ${this.hacs.sections.map((t=>u`
                  <ha-clickable-list-item
                    graphic="avatar"
                    twoline
                    .hasMeta=${!this.narrow}
                    href=${t.path}
                  >
                    <div
                      slot="graphic"
                      class=${t.iconColor?"icon-background":""}
                      .style="background-color: ${t.iconColor||"undefined"}"
                    >
                      <ha-svg-icon .path=${t.iconPath}></ha-svg-icon>
                    </div>
                    <span>${t.name}</span>
                    <span slot="secondary">${t.description}</span>
                    ${this.narrow?"":u`<ha-icon-next slot="meta"></ha-icon-next>`}
                  </ha-clickable-list-item>
                `))}
              ${S(this.hass,"hassio")?u`
                    <ha-clickable-list-item
                      graphic="avatar"
                      disableHref
                      twoline
                      @click=${this._openSupervisorDialog}
                      .hasMeta=${!this.narrow}
                    >
                      <div
                        class="icon-background"
                        slot="graphic"
                        style="background-color: rgb(64, 132, 205)"
                      >
                        <ha-svg-icon .path=${k}></ha-svg-icon>
                      </div>
                      <span>${this.hacs.localize("sections.addon.title")}</span>
                      <span slot="secondary"
                        >${this.hacs.localize("sections.addon.description")}</span
                      >
                    </ha-clickable-list-item>
                  `:""}
              <ha-clickable-list-item
                graphic="avatar"
                twoline
                @click=${this._openAboutDialog}
                disableHref
              >
                <div
                  class="icon-background"
                  slot="graphic"
                  style="background-color: rgb(74, 89, 99)"
                >
                  <ha-svg-icon .path=${z}></ha-svg-icon>
                </div>
                <span>${this.hacs.localize("sections.about.title")}</span>
                <span slot="secondary">${this.hacs.localize("sections.about.description")}</span>
              </ha-clickable-list-item>
            </mwc-list>
          </ha-card>
        </ha-config-section>
      </ha-app-layout>
    `}},{kind:"method",key:"_onImageLoad",value:function(t){t.target.style.visibility="initial"}},{kind:"method",key:"_onImageError",value:function(t){t.target&&(t.target.outerHTML=`\n      <div slot="item-icon" class="icon-background">\n        <ha-svg-icon path="${w}" style="padding-left: 0; height: 40px; width: 40px;"></ha-svg-icon>\n      </div>`)}},{kind:"method",key:"_openDialog",value:function(t){t.dialog&&("remove"==t.dialog&&(t.dialog="removed"),this.dispatchEvent(new CustomEvent("hacs-dialog",{detail:{type:t.dialog,repository:t.repository},bubbles:!0,composed:!0})))}},{kind:"method",key:"_openUpdateDialog",value:function(t){this.dispatchEvent(new CustomEvent("hacs-dialog",{detail:{type:"update",repository:t.id},bubbles:!0,composed:!0}))}},{kind:"method",key:"_openAboutDialog",value:async function(){C(this,this.hacs)}},{kind:"method",key:"_openSupervisorDialog",value:async function(){this.dispatchEvent(new CustomEvent("hacs-dialog",{detail:{type:"navigate",path:"/hassio"},bubbles:!0,composed:!0}))}},{kind:"get",static:!0,key:"styles",value:function(){return[x,T,g`
        :host {
          --mdc-list-vertical-padding: 0;
        }
        ha-card:last-child {
          margin-bottom: env(safe-area-inset-bottom);
        }
        :host(:not([narrow])) ha-card:last-child {
          margin-bottom: max(24px, env(safe-area-inset-bottom));
        }
        ha-config-section {
          margin: auto;
          margin-top: -32px;
          max-width: 600px;
        }
        ha-card {
          overflow: hidden;
        }
        ha-card a {
          text-decoration: none;
          color: var(--primary-text-color);
        }
        a.button {
          display: block;
          color: var(--primary-color);
          padding: 16px;
        }
        .title {
          font-size: 16px;
          padding: 16px;
          padding-bottom: 0;
        }

        @media all and (max-width: 600px) {
          ha-card {
            border-width: 1px 0;
            border-radius: 0;
            box-shadow: unset;
          }
          ha-config-section {
            margin-top: -42px;
          }
        }

        ha-svg-icon,
        ha-icon-next {
          color: var(--secondary-text-color);
          height: 24px;
          width: 24px;
          display: block;
        }
        ha-svg-icon {
          padding: 8px;
        }
        .icon-background {
          border-radius: 50%;
        }
        .icon-background ha-svg-icon {
          color: #fff;
        }
        ha-clickable-list-item {
          cursor: pointer;
          font-size: 16px;
          padding: 0;
        }
      `]}}]}}),d);export{N as HacsEntryPanel};
