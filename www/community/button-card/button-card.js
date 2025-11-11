function t(t,e,i,n){var o,s=arguments.length,a=s<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,n);else for(var r=t.length-1;r>=0;r--)(o=t[r])&&(a=(s<3?o(a):s>3?o(e,i,a):o(e,i))||a);return s>3&&a&&Object.defineProperty(e,i,a),a}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=globalThis,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,n=Symbol(),o=new WeakMap;let s=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=o.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&o.set(e,t))}return t}toString(){return this.cssText}};const a=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new s("string"==typeof t?t:t+"",void 0,n))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:r,defineProperty:l,getOwnPropertyDescriptor:c,getOwnPropertyNames:h,getOwnPropertySymbols:d,getPrototypeOf:u}=Object,p=globalThis,m=p.trustedTypes,_=m?m.emptyScript:"",g=p.reactiveElementPolyfillSupport,f=(t,e)=>t,v={toAttribute(t,e){switch(e){case Boolean:t=t?_:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},b=(t,e)=>!r(t,e),y={attribute:!0,type:String,converter:v,reflect:!1,useDefault:!1,hasChanged:b};Symbol.metadata??=Symbol("metadata"),p.litPropertyMetadata??=new WeakMap;let w=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=y){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),n=this.getPropertyDescriptor(t,i,e);void 0!==n&&l(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){const{get:n,set:o}=c(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:n,set(e){const s=n?.call(this);o?.call(this,e),this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??y}static _$Ei(){if(this.hasOwnProperty(f("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(f("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(f("properties"))){const t=this.properties,e=[...h(t),...d(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[e,i]of this.elementProperties){const t=this._$Eu(e,i);void 0!==t&&this._$Eh.set(t,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,n)=>{if(i)t.adoptedStyleSheets=n.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const i of n){const n=document.createElement("style"),o=e.litNonce;void 0!==o&&n.setAttribute("nonce",o),n.textContent=i.cssText,t.appendChild(n)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,i);if(void 0!==n&&!0===i.reflect){const o=(void 0!==i.converter?.toAttribute?i.converter:v).toAttribute(e,i.type);this._$Em=t,null==o?this.removeAttribute(n):this.setAttribute(n,o),this._$Em=null}}_$AK(t,e){const i=this.constructor,n=i._$Eh.get(t);if(void 0!==n&&this._$Em!==n){const t=i.getPropertyOptions(n),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:v;this._$Em=n;const s=o.fromAttribute(e,t.type);this[n]=s??this._$Ej?.get(n)??s,this._$Em=null}}requestUpdate(t,e,i){if(void 0!==t){const n=this.constructor,o=this[t];if(i??=n.getPropertyOptions(t),!((i.hasChanged??b)(o,e)||i.useDefault&&i.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:n,wrapped:o},s){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,s??e??this[t]),!0!==o||void 0!==s)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===n&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,n=this[e];!0!==t||this._$AL.has(e)||void 0===n||this.C(e,void 0,i,n)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach((t=>this._$ET(t,this[t]))),this._$EM()}updated(t){}firstUpdated(t){}};w.elementStyles=[],w.shadowRootOptions={mode:"open"},w[f("elementProperties")]=new Map,w[f("finalized")]=new Map,g?.({ReactiveElement:w}),(p.reactiveElementVersions??=[]).push("2.1.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const $=globalThis,A=$.trustedTypes,O=A?A.createPolicy("lit-html",{createHTML:t=>t}):void 0,k="$lit$",S=`lit$${Math.random().toFixed(9).slice(2)}$`,T="?"+S,C=`<${T}>`,j=document,x=()=>j.createComment(""),E=t=>null===t||"object"!=typeof t&&"function"!=typeof t,M=Array.isArray,D="[ \t\n\f\r]",H=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,P=/-->/g,I=/>/g,N=RegExp(`>|${D}(?:([^\\s"'>=/]+)(${D}*=${D}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),R=/'/g,V=/"/g,z=/^(?:script|style|textarea|title)$/i,L=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),F=Symbol.for("lit-noChange"),U=Symbol.for("lit-nothing"),B=new WeakMap,W=j.createTreeWalker(j,129);function q(t,e){if(!M(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==O?O.createHTML(e):e}const G=(t,e)=>{const i=t.length-1,n=[];let o,s=2===e?"<svg>":3===e?"<math>":"",a=H;for(let r=0;r<i;r++){const e=t[r];let i,l,c=-1,h=0;for(;h<e.length&&(a.lastIndex=h,l=a.exec(e),null!==l);)h=a.lastIndex,a===H?"!--"===l[1]?a=P:void 0!==l[1]?a=I:void 0!==l[2]?(z.test(l[2])&&(o=RegExp("</"+l[2],"g")),a=N):void 0!==l[3]&&(a=N):a===N?">"===l[0]?(a=o??H,c=-1):void 0===l[1]?c=-2:(c=a.lastIndex-l[2].length,i=l[1],a=void 0===l[3]?N:'"'===l[3]?V:R):a===V||a===R?a=N:a===P||a===I?a=H:(a=N,o=void 0);const d=a===N&&t[r+1].startsWith("/>")?" ":"";s+=a===H?e+C:c>=0?(n.push(i),e.slice(0,c)+k+e.slice(c)+S+d):e+S+(-2===c?r:d)}return[q(t,s+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),n]};class Y{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let o=0,s=0;const a=t.length-1,r=this.parts,[l,c]=G(t,e);if(this.el=Y.createElement(l,i),W.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(n=W.nextNode())&&r.length<a;){if(1===n.nodeType){if(n.hasAttributes())for(const t of n.getAttributeNames())if(t.endsWith(k)){const e=c[s++],i=n.getAttribute(t).split(S),a=/([.?@])?(.*)/.exec(e);r.push({type:1,index:o,name:a[2],strings:i,ctor:"."===a[1]?Q:"?"===a[1]?tt:"@"===a[1]?et:J}),n.removeAttribute(t)}else t.startsWith(S)&&(r.push({type:6,index:o}),n.removeAttribute(t));if(z.test(n.tagName)){const t=n.textContent.split(S),e=t.length-1;if(e>0){n.textContent=A?A.emptyScript:"";for(let i=0;i<e;i++)n.append(t[i],x()),W.nextNode(),r.push({type:2,index:++o});n.append(t[e],x())}}}else if(8===n.nodeType)if(n.data===T)r.push({type:2,index:o});else{let t=-1;for(;-1!==(t=n.data.indexOf(S,t+1));)r.push({type:7,index:o}),t+=S.length-1}o++}}static createElement(t,e){const i=j.createElement("template");return i.innerHTML=t,i}}function Z(t,e,i=t,n){if(e===F)return e;let o=void 0!==n?i._$Co?.[n]:i._$Cl;const s=E(e)?void 0:e._$litDirective$;return o?.constructor!==s&&(o?._$AO?.(!1),void 0===s?o=void 0:(o=new s(t),o._$AT(t,i,n)),void 0!==n?(i._$Co??=[])[n]=o:i._$Cl=o),void 0!==o&&(e=Z(t,o._$AS(t,e.values),o,n)),e}class K{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,n=(t?.creationScope??j).importNode(e,!0);W.currentNode=n;let o=W.nextNode(),s=0,a=0,r=i[0];for(;void 0!==r;){if(s===r.index){let e;2===r.type?e=new X(o,o.nextSibling,this,t):1===r.type?e=new r.ctor(o,r.name,r.strings,this,t):6===r.type&&(e=new it(o,this,t)),this._$AV.push(e),r=i[++a]}s!==r?.index&&(o=W.nextNode(),s++)}return W.currentNode=j,n}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class X{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,n){this.type=2,this._$AH=U,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Z(this,t,e),E(t)?t===U||null==t||""===t?(this._$AH!==U&&this._$AR(),this._$AH=U):t!==this._$AH&&t!==F&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>M(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==U&&E(this._$AH)?this._$AA.nextSibling.data=t:this.T(j.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,n="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=Y.createElement(q(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===n)this._$AH.p(e);else{const t=new K(n,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=B.get(t.strings);return void 0===e&&B.set(t.strings,e=new Y(t)),e}k(t){M(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const o of t)n===e.length?e.push(i=new X(this.O(x()),this.O(x()),this,this.options)):i=e[n],i._$AI(o),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class J{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,n,o){this.type=1,this._$AH=U,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=U}_$AI(t,e=this,i,n){const o=this.strings;let s=!1;if(void 0===o)t=Z(this,t,e,0),s=!E(t)||t!==this._$AH&&t!==F,s&&(this._$AH=t);else{const n=t;let a,r;for(t=o[0],a=0;a<o.length-1;a++)r=Z(this,n[i+a],e,a),r===F&&(r=this._$AH[a]),s||=!E(r)||r!==this._$AH[a],r===U?t=U:t!==U&&(t+=(r??"")+o[a+1]),this._$AH[a]=r}s&&!n&&this.j(t)}j(t){t===U?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Q extends J{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===U?void 0:t}}class tt extends J{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==U)}}class et extends J{constructor(t,e,i,n,o){super(t,e,i,n,o),this.type=5}_$AI(t,e=this){if((t=Z(this,t,e,0)??U)===F)return;const i=this._$AH,n=t===U&&i!==U||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==U&&(i===U||n);n&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class it{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Z(this,t)}}const nt=$.litHtmlPolyfillSupport;nt?.(Y,X),($.litHtmlVersions??=[]).push("3.3.1");const ot=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let st=class extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const n=i?.renderBefore??e;let o=n._$litPart$;if(void 0===o){const t=i?.renderBefore??null;n._$litPart$=o=new X(e.insertBefore(x(),t),t,void 0,i??{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return F}};st._$litElement$=!0,st.finalized=!0,ot.litElementHydrateSupport?.({LitElement:st});const at=ot.litElementPolyfillSupport;at?.({LitElement:st}),(ot.litElementVersions??=[]).push("4.2.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const rt={attribute:!0,type:String,converter:v,reflect:!1,hasChanged:b},lt=(t=rt,e,i)=>{const{kind:n,metadata:o}=i;let s=globalThis.litPropertyMetadata.get(o);if(void 0===s&&globalThis.litPropertyMetadata.set(o,s=new Map),"setter"===n&&((t=Object.create(t)).wrapped=!0),s.set(i.name,t),"accessor"===n){const{name:n}=i;return{set(i){const o=e.get.call(this);e.set.call(this,i),this.requestUpdate(n,o,t)},init(e){return void 0!==e&&this.C(n,void 0,t,e),e}}}if("setter"===n){const{name:n}=i;return function(i){const o=this[n];e.call(this,i),this.requestUpdate(n,o,t)}}throw Error("Unsupported decorator location: "+n)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ct(t){return(e,i)=>"object"==typeof i?lt(t,e,i):((t,e,i)=>{const n=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),n?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ht=t=>t??U
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,dt=1,ut=2,pt=t=>(...e)=>({_$litDirective$:t,values:e});let mt=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _t=(t,e)=>{const i=t._$AN;if(void 0===i)return!1;for(const n of i)n._$AO?.(e,!1),_t(n,e);return!0},gt=t=>{let e,i;do{if(void 0===(e=t._$AM))break;i=e._$AN,i.delete(t),t=e}while(0===i?.size)},ft=t=>{for(let e;e=t._$AM;t=e){let i=e._$AN;if(void 0===i)e._$AN=i=new Set;else if(i.has(t))break;i.add(t),yt(e)}};function vt(t){void 0!==this._$AN?(gt(this),this._$AM=t,ft(this)):this._$AM=t}function bt(t,e=!1,i=0){const n=this._$AH,o=this._$AN;if(void 0!==o&&0!==o.size)if(e)if(Array.isArray(n))for(let s=i;s<n.length;s++)_t(n[s],!1),gt(n[s]);else null!=n&&(_t(n,!1),gt(n));else _t(this,t)}const yt=t=>{t.type==ut&&(t._$AP??=bt,t._$AQ??=vt)};class wt extends mt{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,i){super._$AT(t,e,i),ft(this),this.isConnected=t._$AU}_$AO(t,e=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),e&&(_t(this,t),gt(this))}setValue(t){if((t=>void 0===t.strings)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class $t{constructor(t){this.G=t}disconnect(){this.G=void 0}reconnect(t){this.G=t}deref(){return this.G}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const At=t=>!(t=>null===t||"object"!=typeof t&&"function"!=typeof t)(t)&&"function"==typeof t.then,Ot=1073741823;const kt=pt(class extends wt{constructor(){super(...arguments),this._$Cwt=Ot,this._$Cbt=[],this._$CK=new $t(this),this._$CX=new class{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise((t=>this.Z=t))}resume(){this.Z?.(),this.Y=this.Z=void 0}}}render(...t){return t.find((t=>!At(t)))??F}update(t,e){const i=this._$Cbt;let n=i.length;this._$Cbt=e;const o=this._$CK,s=this._$CX;this.isConnected||this.disconnected();for(let a=0;a<e.length&&!(a>this._$Cwt);a++){const t=e[a];if(!At(t))return this._$Cwt=a,t;a<n&&t===i[a]||(this._$Cwt=Ot,n=0,Promise.resolve(t).then((async e=>{for(;s.get();)await s.get();const i=o.deref();if(void 0!==i){const n=i._$Cbt.indexOf(t);n>-1&&n<i._$Cwt&&(i._$Cwt=n,i.setValue(e))}})))}return F}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}),St="important",Tt=" !"+St,Ct=pt(class extends mt{constructor(t){if(super(t),t.type!==dt||"style"!==t.name||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,i)=>{const n=t[i];return null==n?e:e+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${n};`}),"")}update(t,[e]){const{style:i}=t.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(e)),this.render(e);for(const n of this.ft)null==e[n]&&(this.ft.delete(n),n.includes("-")?i.removeProperty(n):i[n]=null);for(const n in e){const t=e[n];if(null!=t){this.ft.add(n);const e="string"==typeof t&&t.endsWith(Tt);n.includes("-")||e?i.setProperty(n,e?t.slice(0,-11):t,e?St:""):i[n]=t}}return F}});
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
let jt=class extends mt{constructor(t){if(super(t),this.it=U,t.type!==ut)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===U||null==t)return this._t=void 0,this.it=t;if(t===F)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}};jt.directiveName="unsafeHTML",jt.resultType=1;const xt=pt(jt),Et=pt(class extends mt{constructor(t){if(super(t),t.type!==dt||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in e)e[t]&&!this.nt?.has(t)&&this.st.add(t);return this.render(e)}const i=t.element.classList;for(const n of this.st)n in e||(i.remove(n),this.st.delete(n));for(const n in e){const t=!!e[n];t===this.st.has(n)||this.nt?.has(n)||(t?(i.add(n),this.st.add(n)):(i.remove(n),this.st.delete(n)))}return F}}),Mt=(t,e,i,n)=>{n=n||{},i=null==i?{}:i;const o=new Event(e,{bubbles:void 0===n.bubbles||n.bubbles,cancelable:Boolean(n.cancelable),composed:void 0===n.composed||n.composed});return o.detail=i,t.dispatchEvent(o),o},Dt=(t,e)=>{if(t===e)return!0;if(t&&e&&"object"==typeof t&&"object"==typeof e){if(t.constructor!==e.constructor)return!1;let i,n;if(Array.isArray(t)){if(n=t.length,n!==e.length)return!1;for(i=n;0!=i--;)if(!Dt(t[i],e[i]))return!1;return!0}if(t instanceof Map&&e instanceof Map){if(t.size!==e.size)return!1;for(i of t.entries())if(!e.has(i[0]))return!1;for(i of t.entries())if(!Dt(i[1],e.get(i[0])))return!1;return!0}if(t instanceof Set&&e instanceof Set){if(t.size!==e.size)return!1;for(i of t.entries())if(!e.has(i[0]))return!1;return!0}if(ArrayBuffer.isView(t)&&ArrayBuffer.isView(e)){if(n=t.length,n!==e.length)return!1;for(i=n;0!=i--;)if(t[i]!==e[i])return!1;return!0}if(t.constructor===RegExp)return t.source===e.source&&t.flags===e.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===e.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===e.toString();const o=Object.keys(t);if(n=o.length,n!==Object.keys(e).length)return!1;for(i=n;0!=i--;)if(!Object.prototype.hasOwnProperty.call(e,o[i]))return!1;for(i=n;0!=i--;){const n=o[i];if(!Dt(t[n],e[n]))return!1}return!0}return t!=t&&e!=e},Ht="ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0;
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Pt extends HTMLElement{constructor(){super(...arguments),this.holdTime=500,this.held=!1,this.cancelled=!1,this.isRepeating=!1,this.repeatCount=0}connectedCallback(){Object.assign(this.style,{position:"fixed",width:Ht?"100px":"50px",height:Ht?"100px":"50px",transform:"translate(-50%, -50%) scale(0)",pointerEvents:"none",zIndex:"999",background:"var(--primary-color)",display:null,opacity:"0.2",borderRadius:"50%",transition:"transform 180ms ease-in-out"}),["touchcancel","mouseout","mouseup","touchmove","mousewheel","wheel","scroll"].forEach((t=>{document.addEventListener(t,(()=>{this.cancelled=!0,this.timer&&(this.stopAnimation(),clearTimeout(this.timer),this.timer=void 0,this.isRepeating&&this.repeatTimeout&&(clearInterval(this.repeatTimeout),this.isRepeating=!1))}),{passive:!0})}))}bind(t,e={}){t.actionHandler&&Dt(e,t.actionHandler.options)||(t.actionHandler?(t.removeEventListener("touchstart",t.actionHandler.start),t.removeEventListener("touchend",t.actionHandler.end),t.removeEventListener("touchcancel",t.actionHandler.end),t.removeEventListener("mousedown",t.actionHandler.start),t.removeEventListener("click",t.actionHandler.end),t.removeEventListener("keydown",t.actionHandler.handleKeyDown)):t.addEventListener("contextmenu",(t=>{const e=t||window.event;return e.preventDefault&&e.preventDefault(),e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0,e.returnValue=!1,!1})),t.actionHandler={options:e},e.disabled||(t.actionHandler.start=i=>{var n;if(null===(n=i.detail)||void 0===n?void 0:n.ignore)return;let o,s;if(this.cancelled=!1,i.touches?(o=i.touches[0].clientX,s=i.touches[0].clientY):(o=i.clientX,s=i.clientY),e.isMomentary){if(!i.touches&&0!==i.button)return;Mt(t,"action",{action:"press"})}else e.hasHold&&(this.held=!1,this.timer=window.setTimeout((()=>{this.startAnimation(o,s),this.held=!0,e.repeat&&!this.isRepeating&&(this.repeatCount=0,this.isRepeating=!0,this.repeatTimeout=setInterval((()=>{Mt(t,"action",{action:"hold"}),this.repeatCount++,this.repeatTimeout&&e.repeatLimit&&this.repeatCount>=e.repeatLimit&&(clearInterval(this.repeatTimeout),this.isRepeating=!1)}),e.repeat))}),this.holdTime))},t.actionHandler.end=i=>{var n;if(null===(n=i.detail)||void 0===n?void 0:n.ignore)return;if(["touchend","touchcancel"].includes(i.type)&&this.cancelled)return this.isRepeating&&this.repeatTimeout&&(clearInterval(this.repeatTimeout),this.isRepeating=!1),void(e.isMomentary&&Mt(t,"action",{action:"release"}));if("touchcancel"==i.type)return;const o=i.target;i.cancelable&&i.preventDefault(),e.isMomentary?Mt(t,"action",{action:"release"}):(e.hasHold&&(clearTimeout(this.timer),this.isRepeating&&this.repeatTimeout&&clearInterval(this.repeatTimeout),this.isRepeating=!1,this.stopAnimation(),this.timer=void 0),e.hasHold&&this.held?e.repeat||Mt(o,"action",{action:"hold"}):e.hasDoubleClick?"click"===i.type&&i.detail<2||!this.dblClickTimeout?this.dblClickTimeout=window.setTimeout((()=>{this.dblClickTimeout=void 0,Mt(o,"action",{action:"tap"})}),250):(clearTimeout(this.dblClickTimeout),this.dblClickTimeout=void 0,Mt(o,"action",{action:"double_tap"})):Mt(o,"action",{action:"tap"}))},t.actionHandler.handleTouchMove=t=>{"touchmove"==t.type&&e.hasHold&&this.held&&(t.stopPropagation(),t.preventDefault())},t.actionHandler.handleKeyDown=t=>{e.disableKbd||["Enter"," "].includes(t.key)&&t.currentTarget.actionHandler.end(t)},t.addEventListener("touchstart",t.actionHandler.start,{passive:!0}),t.addEventListener("touchmove",t.actionHandler.handleTouchMove),t.addEventListener("touchend",t.actionHandler.end),t.addEventListener("touchcancel",t.actionHandler.end),t.addEventListener("mousedown",t.actionHandler.start,{passive:!0}),t.addEventListener("click",t.actionHandler.end),t.addEventListener("keydown",t.actionHandler.handleKeyDown)))}startAnimation(t,e){Object.assign(this.style,{left:`${t}px`,top:`${e}px`,transform:"translate(-50%, -50%) scale(1)"})}stopAnimation(){Object.assign(this.style,{left:null,top:null,transform:"translate(-50%, -50%) scale(0)"})}}customElements.define("button-card-action-handler",Pt);const It=(t,e)=>{const i=(()=>{const t=document.body;if(t.querySelector("button-card-action-handler"))return t.querySelector("button-card-action-handler");const e=document.createElement("button-card-action-handler");return t.appendChild(e),e})();i&&i.bind(t,e)},Nt=pt(class extends mt{update(t,[e]){return It(t.element,e),F}render(t){}});function Rt(t,e){(function(t){return"string"==typeof t&&-1!==t.indexOf(".")&&1===parseFloat(t)})(t)&&(t="100%");const i=function(t){return"string"==typeof t&&-1!==t.indexOf("%")}(t);return t=360===e?t:Math.min(e,Math.max(0,parseFloat(t))),i&&(t=parseInt(String(t*e),10)/100),Math.abs(t-e)<1e-6?1:t=360===e?(t<0?t%e+e:t%e)/parseFloat(String(e)):t%e/parseFloat(String(e))}function Vt(t){return Math.min(1,Math.max(0,t))}function zt(t){return t=parseFloat(t),(isNaN(t)||t<0||t>1)&&(t=1),t}function Lt(t){return Number(t)<=1?100*Number(t)+"%":t}function Ft(t){return 1===t.length?"0"+t:String(t)}function Ut(t,e,i){t=Rt(t,255),e=Rt(e,255),i=Rt(i,255);const n=Math.max(t,e,i),o=Math.min(t,e,i);let s=0,a=0;const r=(n+o)/2;if(n===o)a=0,s=0;else{const l=n-o;switch(a=r>.5?l/(2-n-o):l/(n+o),n){case t:s=(e-i)/l+(e<i?6:0);break;case e:s=(i-t)/l+2;break;case i:s=(t-e)/l+4}s/=6}return{h:s,s:a,l:r}}function Bt(t,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?t+6*i*(e-t):i<.5?e:i<2/3?t+(e-t)*(2/3-i)*6:t}function Wt(t,e,i){t=Rt(t,255),e=Rt(e,255),i=Rt(i,255);const n=Math.max(t,e,i),o=Math.min(t,e,i);let s=0;const a=n,r=n-o,l=0===n?0:r/n;if(n===o)s=0;else{switch(n){case t:s=(e-i)/r+(e<i?6:0);break;case e:s=(i-t)/r+2;break;case i:s=(t-e)/r+4}s/=6}return{h:s,s:l,v:a}}function qt(t,e,i,n){const o=[Ft(Math.round(t).toString(16)),Ft(Math.round(e).toString(16)),Ft(Math.round(i).toString(16))];return n&&o[0].startsWith(o[0].charAt(1))&&o[1].startsWith(o[1].charAt(1))&&o[2].startsWith(o[2].charAt(1))?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0):o.join("")}function Gt(t,e,i){let n=1-t/255,o=1-e/255,s=1-i/255,a=Math.min(n,o,s);return 1===a?(n=0,o=0,s=0):(n=(n-a)/(1-a)*100,o=(o-a)/(1-a)*100,s=(s-a)/(1-a)*100),a*=100,{c:Math.round(n),m:Math.round(o),y:Math.round(s),k:Math.round(a)}}function Yt(t){return Math.round(255*parseFloat(t)).toString(16)}function Zt(t){return Kt(t)/255}function Kt(t){return parseInt(t,16)}const Xt={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function Jt(t){let e={r:0,g:0,b:0},i=1,n=null,o=null,s=null,a=!1,r=!1;return"string"==typeof t&&(t=function(t){if(t=t.trim().toLowerCase(),0===t.length)return!1;let e=!1;if(Xt[t])t=Xt[t],e=!0;else if("transparent"===t)return{r:0,g:0,b:0,a:0,format:"name"};let i=ie.rgb.exec(t);if(i)return{r:i[1],g:i[2],b:i[3]};if(i=ie.rgba.exec(t),i)return{r:i[1],g:i[2],b:i[3],a:i[4]};if(i=ie.hsl.exec(t),i)return{h:i[1],s:i[2],l:i[3]};if(i=ie.hsla.exec(t),i)return{h:i[1],s:i[2],l:i[3],a:i[4]};if(i=ie.hsv.exec(t),i)return{h:i[1],s:i[2],v:i[3]};if(i=ie.hsva.exec(t),i)return{h:i[1],s:i[2],v:i[3],a:i[4]};if(i=ie.cmyk.exec(t),i)return{c:i[1],m:i[2],y:i[3],k:i[4]};if(i=ie.hex8.exec(t),i)return{r:Kt(i[1]),g:Kt(i[2]),b:Kt(i[3]),a:Zt(i[4]),format:e?"name":"hex8"};if(i=ie.hex6.exec(t),i)return{r:Kt(i[1]),g:Kt(i[2]),b:Kt(i[3]),format:e?"name":"hex"};if(i=ie.hex4.exec(t),i)return{r:Kt(i[1]+i[1]),g:Kt(i[2]+i[2]),b:Kt(i[3]+i[3]),a:Zt(i[4]+i[4]),format:e?"name":"hex8"};if(i=ie.hex3.exec(t),i)return{r:Kt(i[1]+i[1]),g:Kt(i[2]+i[2]),b:Kt(i[3]+i[3]),format:e?"name":"hex"};return!1}(t)),"object"==typeof t&&(ne(t.r)&&ne(t.g)&&ne(t.b)?(e=function(t,e,i){return{r:255*Rt(t,255),g:255*Rt(e,255),b:255*Rt(i,255)}}(t.r,t.g,t.b),a=!0,r="%"===String(t.r).substr(-1)?"prgb":"rgb"):ne(t.h)&&ne(t.s)&&ne(t.v)?(n=Lt(t.s),o=Lt(t.v),e=function(t,e,i){t=6*Rt(t,360),e=Rt(e,100),i=Rt(i,100);const n=Math.floor(t),o=t-n,s=i*(1-e),a=i*(1-o*e),r=i*(1-(1-o)*e),l=n%6;return{r:255*[i,a,s,s,r,i][l],g:255*[r,i,i,a,s,s][l],b:255*[s,s,r,i,i,a][l]}}(t.h,n,o),a=!0,r="hsv"):ne(t.h)&&ne(t.s)&&ne(t.l)?(n=Lt(t.s),s=Lt(t.l),e=function(t,e,i){let n,o,s;if(t=Rt(t,360),e=Rt(e,100),i=Rt(i,100),0===e)o=i,s=i,n=i;else{const a=i<.5?i*(1+e):i+e-i*e,r=2*i-a;n=Bt(r,a,t+1/3),o=Bt(r,a,t),s=Bt(r,a,t-1/3)}return{r:255*n,g:255*o,b:255*s}}(t.h,n,s),a=!0,r="hsl"):ne(t.c)&&ne(t.m)&&ne(t.y)&&ne(t.k)&&(e=function(t,e,i,n){const o=n/100;return{r:255*(1-t/100)*(1-o),g:255*(1-e/100)*(1-o),b:255*(1-i/100)*(1-o)}}(t.c,t.m,t.y,t.k),a=!0,r="cmyk"),Object.prototype.hasOwnProperty.call(t,"a")&&(i=t.a)),i=zt(i),{ok:a,format:t.format||r,r:Math.min(255,Math.max(e.r,0)),g:Math.min(255,Math.max(e.g,0)),b:Math.min(255,Math.max(e.b,0)),a:i}}const Qt="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)",te="[\\s|\\(]+("+Qt+")[,|\\s]+("+Qt+")[,|\\s]+("+Qt+")\\s*\\)?",ee="[\\s|\\(]+("+Qt+")[,|\\s]+("+Qt+")[,|\\s]+("+Qt+")[,|\\s]+("+Qt+")\\s*\\)?",ie={CSS_UNIT:new RegExp(Qt),rgb:new RegExp("rgb"+te),rgba:new RegExp("rgba"+ee),hsl:new RegExp("hsl"+te),hsla:new RegExp("hsla"+ee),hsv:new RegExp("hsv"+te),hsva:new RegExp("hsva"+ee),cmyk:new RegExp("cmyk"+ee),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function ne(t){return"number"==typeof t?!Number.isNaN(t):ie.CSS_UNIT.test(t)}class oe{constructor(t="",e={}){if(t instanceof oe)return t;"number"==typeof t&&(t=function(t){return{r:t>>16,g:(65280&t)>>8,b:255&t}}(t)),this.originalInput=t;const i=Jt(t);this.originalInput=t,this.r=i.r,this.g=i.g,this.b=i.b,this.a=i.a,this.roundA=Math.round(100*this.a)/100,this.format=e.format??i.format,this.gradientType=e.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=i.ok}isDark(){return this.getBrightness()<128}isLight(){return!this.isDark()}getBrightness(){const t=this.toRgb();return(299*t.r+587*t.g+114*t.b)/1e3}getLuminance(){const t=this.toRgb();let e,i,n;const o=t.r/255,s=t.g/255,a=t.b/255;return e=o<=.03928?o/12.92:Math.pow((o+.055)/1.055,2.4),i=s<=.03928?s/12.92:Math.pow((s+.055)/1.055,2.4),n=a<=.03928?a/12.92:Math.pow((a+.055)/1.055,2.4),.2126*e+.7152*i+.0722*n}getAlpha(){return this.a}setAlpha(t){return this.a=zt(t),this.roundA=Math.round(100*this.a)/100,this}isMonochrome(){const{s:t}=this.toHsl();return 0===t}toHsv(){const t=Wt(this.r,this.g,this.b);return{h:360*t.h,s:t.s,v:t.v,a:this.a}}toHsvString(){const t=Wt(this.r,this.g,this.b),e=Math.round(360*t.h),i=Math.round(100*t.s),n=Math.round(100*t.v);return 1===this.a?`hsv(${e}, ${i}%, ${n}%)`:`hsva(${e}, ${i}%, ${n}%, ${this.roundA})`}toHsl(){const t=Ut(this.r,this.g,this.b);return{h:360*t.h,s:t.s,l:t.l,a:this.a}}toHslString(){const t=Ut(this.r,this.g,this.b),e=Math.round(360*t.h),i=Math.round(100*t.s),n=Math.round(100*t.l);return 1===this.a?`hsl(${e}, ${i}%, ${n}%)`:`hsla(${e}, ${i}%, ${n}%, ${this.roundA})`}toHex(t=!1){return qt(this.r,this.g,this.b,t)}toHexString(t=!1){return"#"+this.toHex(t)}toHex8(t=!1){return function(t,e,i,n,o){const s=[Ft(Math.round(t).toString(16)),Ft(Math.round(e).toString(16)),Ft(Math.round(i).toString(16)),Ft(Yt(n))];return o&&s[0].startsWith(s[0].charAt(1))&&s[1].startsWith(s[1].charAt(1))&&s[2].startsWith(s[2].charAt(1))&&s[3].startsWith(s[3].charAt(1))?s[0].charAt(0)+s[1].charAt(0)+s[2].charAt(0)+s[3].charAt(0):s.join("")}(this.r,this.g,this.b,this.a,t)}toHex8String(t=!1){return"#"+this.toHex8(t)}toHexShortString(t=!1){return 1===this.a?this.toHexString(t):this.toHex8String(t)}toRgb(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}}toRgbString(){const t=Math.round(this.r),e=Math.round(this.g),i=Math.round(this.b);return 1===this.a?`rgb(${t}, ${e}, ${i})`:`rgba(${t}, ${e}, ${i}, ${this.roundA})`}toPercentageRgb(){const t=t=>`${Math.round(100*Rt(t,255))}%`;return{r:t(this.r),g:t(this.g),b:t(this.b),a:this.a}}toPercentageRgbString(){const t=t=>Math.round(100*Rt(t,255));return 1===this.a?`rgb(${t(this.r)}%, ${t(this.g)}%, ${t(this.b)}%)`:`rgba(${t(this.r)}%, ${t(this.g)}%, ${t(this.b)}%, ${this.roundA})`}toCmyk(){return{...Gt(this.r,this.g,this.b)}}toCmykString(){const{c:t,m:e,y:i,k:n}=Gt(this.r,this.g,this.b);return`cmyk(${t}, ${e}, ${i}, ${n})`}toName(){if(0===this.a)return"transparent";if(this.a<1)return!1;const t="#"+qt(this.r,this.g,this.b,!1);for(const[e,i]of Object.entries(Xt))if(t===i)return e;return!1}toString(t){const e=Boolean(t);t=t??this.format;let i=!1;const n=this.a<1&&this.a>=0;return e||!n||!t.startsWith("hex")&&"name"!==t?("rgb"===t&&(i=this.toRgbString()),"prgb"===t&&(i=this.toPercentageRgbString()),"hex"!==t&&"hex6"!==t||(i=this.toHexString()),"hex3"===t&&(i=this.toHexString(!0)),"hex4"===t&&(i=this.toHex8String(!0)),"hex8"===t&&(i=this.toHex8String()),"name"===t&&(i=this.toName()),"hsl"===t&&(i=this.toHslString()),"hsv"===t&&(i=this.toHsvString()),"cmyk"===t&&(i=this.toCmykString()),i||this.toHexString()):"name"===t&&0===this.a?this.toName():this.toRgbString()}toNumber(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)}clone(){return new oe(this.toString())}lighten(t=10){const e=this.toHsl();return e.l+=t/100,e.l=Vt(e.l),new oe(e)}brighten(t=10){const e=this.toRgb();return e.r=Math.max(0,Math.min(255,e.r-Math.round(-t/100*255))),e.g=Math.max(0,Math.min(255,e.g-Math.round(-t/100*255))),e.b=Math.max(0,Math.min(255,e.b-Math.round(-t/100*255))),new oe(e)}darken(t=10){const e=this.toHsl();return e.l-=t/100,e.l=Vt(e.l),new oe(e)}tint(t=10){return this.mix("white",t)}shade(t=10){return this.mix("black",t)}desaturate(t=10){const e=this.toHsl();return e.s-=t/100,e.s=Vt(e.s),new oe(e)}saturate(t=10){const e=this.toHsl();return e.s+=t/100,e.s=Vt(e.s),new oe(e)}greyscale(){return this.desaturate(100)}spin(t){const e=this.toHsl(),i=(e.h+t)%360;return e.h=i<0?360+i:i,new oe(e)}mix(t,e=50){const i=this.toRgb(),n=new oe(t).toRgb(),o=e/100,s={r:(n.r-i.r)*o+i.r,g:(n.g-i.g)*o+i.g,b:(n.b-i.b)*o+i.b,a:(n.a-i.a)*o+i.a};return new oe(s)}analogous(t=6,e=30){const i=this.toHsl(),n=360/e,o=[this];for(i.h=(i.h-(n*t>>1)+720)%360;--t;)i.h=(i.h+n)%360,o.push(new oe(i));return o}complement(){const t=this.toHsl();return t.h=(t.h+180)%360,new oe(t)}monochromatic(t=6){const e=this.toHsv(),{h:i}=e,{s:n}=e;let{v:o}=e;const s=[],a=1/t;for(;t--;)s.push(new oe({h:i,s:n,v:o})),o=(o+a)%1;return s}splitcomplement(){const t=this.toHsl(),{h:e}=t;return[this,new oe({h:(e+72)%360,s:t.s,l:t.l}),new oe({h:(e+216)%360,s:t.s,l:t.l})]}onBackground(t){const e=this.toRgb(),i=new oe(t).toRgb(),n=e.a+i.a*(1-e.a);return new oe({r:(e.r*e.a+i.r*i.a*(1-e.a))/n,g:(e.g*e.a+i.g*i.a*(1-e.a))/n,b:(e.b*e.a+i.b*i.a*(1-e.a))/n,a:n})}triad(){return this.polyad(3)}tetrad(){return this.polyad(4)}polyad(t){const e=this.toHsl(),{h:i}=e,n=[this],o=360/t;for(let s=1;s<t;s++)n.push(new oe({h:(i+s*o)%360,s:e.s,l:e.l}));return n}equals(t){const e=new oe(t);return"cmyk"===this.format||"cmyk"===e.format?this.toCmykString()===e.toCmykString():this.toRgbString()===e.toRgbString()}}const se="sections",ae=[se],re="unavailable",le=(ce=[re,"unknown"],(t,e)=>ce.includes(t,e));var ce;const he=new Set(["fan","input_boolean","light","switch","group","automation","humidifier"]),de=new Set(["input_button"]),ue=["auto","auto-no-temperature"],pe=["card","label-card"],me=["--ha-card-background","--card-background-color"],_e="var(--primary-text-color)",ge={pin:"Incorrect PIN, action cancelled",password:"Incorrect password, action cancelled"},fe="tap_action";function ve(t){return t.substr(0,t.indexOf("."))}function be(t,e){const i=[];let n=e;return"var"===e.trim().substring(0,3)&&(e.split(",").forEach((t=>{const e=t.match(/var\(\s*([a-zA-Z0-9-]*)/);e&&i.push(e[1])})),i.some((e=>{const i=window.getComputedStyle(t).getPropertyValue(e);return!!i&&(n=i,!0)}))),n}function ye(...t){const e=t=>t&&"object"==typeof t;return t.reduce(((t,i)=>(Object.keys(i).forEach((n=>{const o=t[n],s=i[n];Array.isArray(o)&&Array.isArray(s)?t[n]=o.concat(...s):e(o)&&e(s)?t[n]=ye(o,s):t[n]=s})),t)),{})}function we(t,e){let i=[];return t&&t.forEach((t=>{let n=t;e&&e.forEach((e=>{e.id&&t.id&&e.id==t.id&&(n=ye(n,e))})),i.push(n)})),e&&(i=i.concat(e.filter((e=>!t||!t.find((t=>!(!t.id||!e.id)&&t.id==e.id)))))),i}function $e(){var t;let e=document.querySelector("hc-main");if(e=e&&e.shadowRoot,e=e&&e.querySelector("hc-lovelace"),e=e&&e.shadowRoot,e=e&&(e.querySelector("hui-view")||e.querySelector("hui-panel-view")),e){const i=e.lovelace;return i.current_view=null!==(t=null==e?void 0:e._curView)&&void 0!==t?t:0,i}return null}function Ae(){var t;let e=document.querySelector("home-assistant");if(e=e&&e.shadowRoot,e=e&&e.querySelector("home-assistant-main"),e=e&&e.shadowRoot,e=e&&e.querySelector("app-drawer-layout partial-panel-resolver, ha-drawer partial-panel-resolver"),e=e&&e.shadowRoot||e,e=e&&e.querySelector("ha-panel-lovelace"),e=e&&e.shadowRoot,e=e&&e.querySelector("hui-root"),e){const i=e.lovelace;return i.current_view=null!==(t=null==e?void 0:e._curView)&&void 0!==t?t:0,i}return null}const Oe=()=>{const t=function(){var t;const e=Ae()||$e();return(null==e?void 0:e.current_view)?null===(t=e.config)||void 0===t?void 0:t.views[e.current_view]:void 0}(),e=(null==(i=t)?void 0:i.type)?i.type:(null==i?void 0:i.panel)?"panel":(null==i?void 0:i.sections)?se:(null==i?void 0:i.cards)?"masonry":se;var i;return ae.includes(e)};function ke(t,e){if(void 0===t)return!1;const i=ve(t.entity_id),n=void 0!==e?e:null==t?void 0:t.state;if(["button","event","input_button","scene"].includes(i))return n!==re;if(le(n))return!1;if("off"===n&&"alert"!==i)return!1;switch(i){case"alarm_control_panel":return"disarmed"!==n;case"alert":return"idle"!==n;case"cover":return"closed"!==n;case"device_tracker":case"person":return"not_home"!==n;case"lock":return"locked"!==n;case"media_player":return"standby"!==n;case"vacuum":return!["idle","docked","paused"].includes(n);case"plant":return"problem"===n;case"group":return["on","home","open","locked","problem"].includes(n);case"timer":return"active"===n;case"camera":return"streaming"===n}return!0}function Se(t){return Array.isArray(t)?t.reverse().reduce(((t,e)=>`var(${e}${t?`, ${t}`:""})`),void 0):`var(${t})`}function Te(t){const e=t.split(":").map(Number);return 3600*e[0]+60*e[1]+e[2]}const Ce=t=>t<10?`0${t}`:t;const je=t=>t.startsWith("media-source://"),xe=(t,e)=>t.callWS({type:"media_source/resolve_media",media_content_id:e}),Ee=(t,e,i,n,o,s)=>{const a=[];(null==o?void 0:o.length)&&a.push((t=>o.includes(ve(t))));const r=((t,e,i)=>{(!i||i>t.length)&&(i=t.length);const n=[];for(let o=0;o<t.length&&n.length<i;o++){let i=!0;for(const n of e)if(!n(t[o])){i=!1;break}i&&n.push(t[o])}return n})(i,a,e);if(r.length<e&&n.length){const i=Ee(t,e-r.length,n,[],o);r.push(...i)}return r},Me=new Set(["call-service","divider","section","weblink","cast","select"]),De={alert:"toggle",automation:"toggle",climate:"climate",cover:"cover",fan:"toggle",group:"group",input_boolean:"toggle",input_number:"input-number",input_select:"input-select",input_text:"input-text",light:"toggle",lock:"lock",media_player:"media-player",remote:"toggle",scene:"scene",script:"script",sensor:"sensor",timer:"timer",switch:"toggle",vacuum:"toggle",water_heater:"climate",input_datetime:"input-datetime"},He=((t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[n+1]),t[0]);return new s(i,t,n)})`
  :host {
    position: relative;
    display: block;
    --state-inactive-color: var(--state-icon-color);
    --button-card-ripple-icon-inset-padding: 12px;
  }

  :host(.section) {
    display: unset;
    position: static;
  }

  ha-card {
    cursor: pointer;
    overflow: hidden;
    box-sizing: border-box;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: normal;

    --ha-ripple-color: var(--button-card-ripple-color);
    --ha-ripple-hover-color: var(--ha-ripple-color, var(--button-card-ripple-hover-color));
    --ha-ripple-pressed-color: var(--ha-ripple-color, var(--button-card-ripple-pressed-color));
    --ha-ripple-hover-opacity: var(--button-card-ripple-hover-opacity, 0.04);
    --ha-ripple-pressed-opacity: var(--button-card-ripple-pressed-opacity, 0.12);

    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently
                          supported by Chrome, Opera and Firefox */
  }
  ha-card.disabled {
    pointer-events: none;
    cursor: default;
  }
  ha-card.section {
    height: 100%;
  }
  ha-ripple[icon] {
    inset: var(--button-card-ripple-icon-inset, var(--dynamic-ripple-icon-inset, 5px));
    border-radius: var(--button-card-ripple-icon-border-radius, var(--ha-card-border-radius, 12px));
    --md-ripple-color: var(--button-card-ripple-icon-color, var(--ha-ripple-color));
    --md-ripple-hover-color: var(--button-card-ripple-icon-color, var(--ha-ripple-hover-color));
    --md-ripple-pressed-color: var(--button-card-ripple-pressed-color, var(--ha-ripple-pressed-color));
    --md-ripple-hover-opacity: var(
      --button-card-ripple-icon-hover-opacity,
      calc(var(--ha-ripple-hover-opacity, 0.04) + 0.05)
    );
    --md-ripple-pressed-opacity: var(
      --button-card-ripple-icon-pressed-opacity,
      calc(var(--ha-ripple-pressed-opacity, 0.12) + 0.05)
    );
  }
  wa-tooltip {
    --wa-tooltip-background-color: var(--button-card-tooltip-background-color, var(--secondary-background-color));
    --wa-tooltip-content-color: var(--button-card-tooltip-content-color, var(--primary-text-color));
    --wa-tooltip-font-family: var(
      --button-card-tooltip-font-family,
      var(--ha-tooltip-font-family, var(--ha-font-family-body))
    );
    --wa-tooltip-font-size: var(--button-card-tooltip-font-size, var(--ha-tooltip-font-size, var(--ha-font-size-s)));
    --wa-tooltip-font-weight: var(
      --button-card-tooltip-font-weight,
      var(--ha-tooltip-font-weight, var(--ha-font-weight-normal))
    );
    --wa-tooltip-line-height: var(
      --button-card-tooltip-line-height,
      var(--ha-tooltip-line-height, var(--ha-line-height-condensed))
    );
    --wa-tooltip-padding: var(--button-card-tooltip-padding, 8px);
    --wa-tooltip-border-radius: var(
      --button-card-tooltip-border-radius,
      var(--ha-tooltip-border-radius, var(--ha-border-radius-sm))
    );
    --wa-tooltip-arrow-size: var(--button-card-tooltip-arrow-size, var(--ha-tooltip-arrow-size, 8px));
    --wa-tooltip-border-width: var(--button-card-tooltip-border-width);
    --wa-tooltip-border-color: var(--button-card-tooltip-border-color);
    --wa-tooltip-border-style: var(--button-card-tooltip-border-style);
    --max-width: var(--button-card-tooltip-max-width, 30ch);
  }
  wa-tooltip::part(base__popup) {
    --show-duration: var(--button-card-tooltip-show-duration, 100ms);
    --hide-duration: var(--button-card-tooltip-hide-duration, 100ms);
    opacity: var(--button-card-tooltip-opacity, 1);
  }
  wa-tooltip::part(body) {
    padding: var(--button-card-tooltip-padding, 0.25em 0.5em);
    box-shadow: var(--button-card-tooltip-box-shadow, var(--ha-card-box-shadow, none));
    font-weight: var(--button-card-tooltip-font-weight, var(--ha-tooltip-font-weight, normal));
    font-family: var(--button-card-tooltip-font-family, var(--ha-tooltip-font-family, inherit));
    text-align: var(--button-card-tooltip-text-align, center);
    text-decoration: var(--button-card-tooltip-text-decoration, none);
    text-transform: var(--button-card-tooltip-text-transform, none);
    overflow-wrap: var(--button-card-tooltip-overflow-wrap, normal);
  }
  :not(ha-state-icon) ha-icon,
  ha-state-icon {
    display: inline-block;
    margin: auto;
    --mdc-icon-size: 100%;
    --iron-icon-width: 100%;
    --iron-icon-height: 100%;
  }
  ha-card.button-card-main {
    padding: 4% 0px;
    text-transform: none;
    font-weight: 400;
    font-size: 1.2rem;
    align-items: center;
    text-align: center;
    letter-spacing: normal;
    width: 100%;
  }
  .ellipsis {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  #spinner {
    align-items: flex-start;
    justify-content: flex-start;
    padding: 8px 7px;
    --ha-spinner-indicator-color: var(--button-card-spinner-color, var(--button-card-color));
    --ha-spinner-size: var(--button-card-spinner-size, 1.5vw);
    /* DO NOT override items below */
    pointer-events: auto;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
  }
  #spinner-background {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    opacity: var(--button-card-spinner-background-opacity, 0.4);
    background: var(--button-card-spinner-background-color, var(--card-background-color, white));
  }

  #overlay {
    align-items: flex-start;
    justify-content: flex-end;
    padding: 8px 7px;
    opacity: 0.5;
    /* DO NOT override items below */
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
  }
  #lock {
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    margin: unset;
    width: 24px;
  }
  .invalid {
    animation: blink 1s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite;
  }
  .hidden {
    visibility: hidden;
    opacity: 0;
    transition:
      visibility 0s 1s,
      opacity 1s linear;
  }
  @keyframes blink {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @-webkit-keyframes rotating /* Safari and Chrome */ {
    from {
      -webkit-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes rotating {
    from {
      -ms-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -webkit-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -ms-transform: rotate(360deg);
      -moz-transform: rotate(360deg);
      -webkit-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  [rotating] {
    -webkit-animation: rotating 2s linear infinite;
    -moz-animation: rotating 2s linear infinite;
    -ms-animation: rotating 2s linear infinite;
    -o-animation: rotating 2s linear infinite;
    animation: rotating 2s linear infinite;
  }

  #container {
    display: grid;
    width: 100%;
    height: 100%;
    text-align: center;
    align-items: center;
  }
  .section #container {
    align-content: center;
  }
  #img-cell {
    display: flex;
    grid-area: i;
    height: 100%;
    width: 100%;
    max-width: 100%;
    max-height: 100%;
    align-self: center;
    justify-self: center;
    overflow: hidden;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  ha-state-icon#icon {
    height: 100%;
    width: 100%;
    max-height: 100%;
    position: absolute;
  }
  ha-state-icon#icon.enabled,
  img#icon.enabled {
    pointer-events: auto;
    cursor: pointer;
  }
  img#icon {
    display: block;
    height: auto;
    width: 100%;
    position: absolute;
  }
  #name {
    grid-area: n;
    max-width: 100%;
    align-self: center;
    justify-self: center;
    /* margin: auto; */
  }
  #state {
    grid-area: s;
    max-width: 100%;
    align-self: center;
    justify-self: center;
    /* margin: auto; */
  }

  #label {
    grid-area: l;
    max-width: 100%;
    align-self: center;
    justify-self: center;
  }

  #container.vertical {
    grid-template-areas: 'i' 'n' 's' 'l';
    grid-template-columns: 1fr;
    grid-template-rows: 1fr min-content min-content min-content;
  }
  .section #container.vertical {
    grid-template-rows: auto min-content min-content min-content;
  }
  .section #container.vertical:not(.no-icon) #name {
    margin-top: 8px;
  }
  /* Vertical No Icon */
  #container.vertical.no-icon {
    grid-template-areas: 'n' 's' 'l';
    grid-template-columns: 1fr;
    grid-template-rows: 1fr min-content 1fr;
  }
  #container.vertical.no-icon #state {
    align-self: center;
  }
  #container.vertical.no-icon #name {
    align-self: end;
  }
  #container.vertical.no-icon #label {
    align-self: start;
  }

  /* Vertical No Icon No Name */
  #container.vertical.no-icon.no-name {
    grid-template-areas: 's' 'l';
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
  #container.vertical.no-icon.no-name #state {
    align-self: end;
  }
  #container.vertical.no-icon.no-name #label {
    align-self: start;
  }

  /* Vertical No Icon No State */
  #container.vertical.no-icon.no-state {
    grid-template-areas: 'n' 'l';
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
  #container.vertical.no-icon.no-state #name {
    align-self: end;
  }
  #container.vertical.no-icon.no-state #label {
    align-self: start;
  }

  /* Vertical No Icon No Label */
  #container.vertical.no-icon.no-label {
    grid-template-areas: 'n' 's';
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
  #container.vertical.no-icon.no-label #name {
    align-self: end;
  }
  #container.vertical.no-icon.no-label #state {
    align-self: start;
  }

  /* Vertical No Icon No Label No Name */
  #container.vertical.no-icon.no-label.no-name {
    grid-template-areas: 's';
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }
  #container.vertical.no-icon.no-label.no-name #state {
    align-self: center;
  }
  /* Vertical No Icon No Label No State */
  #container.vertical.no-icon.no-label.no-state {
    grid-template-areas: 'n';
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }
  #container.vertical.no-icon.no-label.no-state #name {
    align-self: center;
  }

  /* Vertical No Icon No Name No State */
  #container.vertical.no-icon.no-name.no-state {
    grid-template-areas: 'l';
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }
  #container.vertical.no-icon.no-name.no-state #label {
    align-self: center;
  }

  #container.icon_name_state {
    grid-template-areas: 'i n' 'l l';
    grid-template-columns: 40% 1fr;
    grid-template-rows: 1fr min-content;
  }

  #container.icon_name {
    grid-template-areas: 'i n' 's s' 'l l';
    grid-template-columns: 40% 1fr;
    grid-template-rows: 1fr min-content min-content;
  }
  .section #container.icon_name {
    grid-template-rows: auto min-content min-content;
  }
  #container.icon_state {
    grid-template-areas: 'i s' 'n n' 'l l';
    grid-template-columns: 40% 1fr;
    grid-template-rows: 1fr min-content min-content;
  }
  .section #container.icon_state {
    grid-template-rows: auto min-content min-content;
  }

  #container.name_state {
    grid-template-areas: 'i' 'n' 'l';
    grid-template-columns: 1fr;
    grid-template-rows: 1fr min-content min-content;
  }
  .section #container.name_state {
    grid-template-rows: auto min-content min-content;
  }
  #container.name_state.no-icon {
    grid-template-areas: 'n' 'l';
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
  #container.name_state.no-icon #name {
    align-self: end;
  }
  .section #container.name_state:not(.no-icon) #name {
    margin-top: 8px;
  }
  #container.name_state.no-icon #label {
    align-self: start;
  }

  #container.name_state.no-icon.no-label {
    grid-template-areas: 'n';
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }
  #container.name_state.no-icon.no-label #name {
    align-self: center;
  }

  /* icon_name_state2nd default */
  #container.icon_name_state2nd {
    grid-template-areas: 'i n' 'i s' 'i l';
    grid-template-columns: 40% 1fr;
    grid-template-rows: 1fr min-content 1fr;
  }
  #container.icon_name_state2nd #name {
    align-self: end;
  }
  #container.icon_name_state2nd #state {
    align-self: center;
  }
  #container.icon_name_state2nd #label {
    align-self: start;
  }

  /* icon_name_state2nd No Label */
  #container.icon_name_state2nd.no-label {
    grid-template-areas: 'i n' 'i s';
    grid-template-columns: 40% 1fr;
    grid-template-rows: 1fr 1fr;
  }
  #container.icon_name_state2nd #name {
    align-self: end;
  }
  #container.icon_name_state2nd #state {
    align-self: start;
  }

  /* icon_state_name2nd Default */
  #container.icon_state_name2nd {
    grid-template-areas: 'i s' 'i n' 'i l';
    grid-template-columns: 40% 1fr;
    grid-template-rows: 1fr min-content 1fr;
  }
  #container.icon_state_name2nd #state {
    align-self: end;
  }
  #container.icon_state_name2nd #name {
    align-self: center;
  }
  #container.icon_state_name2nd #label {
    align-self: start;
  }

  /* icon_state_name2nd No Label */
  #container.icon_state_name2nd.no-label {
    grid-template-areas: 'i s' 'i n';
    grid-template-columns: 40% 1fr;
    grid-template-rows: 1fr 1fr;
  }
  #container.icon_state_name2nd #state {
    align-self: end;
  }
  #container.icon_state_name2nd #name {
    align-self: start;
  }

  #container.icon_label {
    grid-template-areas: 'i l' 'n n' 's s';
    grid-template-columns: 40% 1fr;
    grid-template-rows: 1fr min-content min-content;
  }

  [style*='--aspect-ratio'] > :first-child {
    width: 100%;
  }
  [style*='--aspect-ratio'] > img {
    height: auto;
  }
  @supports (--custom: property) {
    [style*='--aspect-ratio'] {
      position: relative;
    }
    [style*='--aspect-ratio']::before {
      content: '';
      display: block;
      padding-bottom: calc(100% / (var(--aspect-ratio)));
    }
    [style*='--aspect-ratio'] > :first-child {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
    }
  }
`;var Pe,Ie,Ne,Re,Ve;!function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(Pe||(Pe={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(Ie||(Ie={})),function(t){t.local="local",t.server="server"}(Ne||(Ne={})),function(t){t.language="language",t.system="system",t.DMY="DMY",t.MDY="MDY",t.YMD="YMD"}(Re||(Re={})),function(t){t.language="language",t.monday="monday",t.tuesday="tuesday",t.wednesday="wednesday",t.thursday="thursday",t.friday="friday",t.saturday="saturday",t.sunday="sunday"}(Ve||(Ve={}));const ze=(t,e,i)=>{const n=e?(t=>{switch(t.number_format){case Pe.comma_decimal:return["en-US","en"];case Pe.decimal_comma:return["de","es","it"];case Pe.space_comma:return["fr","sv","cs"];case Pe.system:return;default:return t.language}})(e):void 0;if(Number.isNaN=Number.isNaN||function t(e){return"number"==typeof e&&t(e)},(null==e?void 0:e.number_format)!==Pe.none&&!Number.isNaN(Number(t))&&Intl)try{return new Intl.NumberFormat(n,Fe(t,i)).format(Number(t))}catch(o){return console.error(o),new Intl.NumberFormat(void 0,Fe(t,i)).format(Number(t))}return"string"==typeof t?t:`${((t,e=2)=>Math.round(t*10**e)/10**e)(t,null==i?void 0:i.maximumFractionDigits).toString()}${"currency"===(null==i?void 0:i.style)?` ${i.currency}`:""}`},Le=(t,e,i)=>{var n;let o=null==i?void 0:i.display_precision;return void 0!==e&&(o=e),null!=o?{maximumFractionDigits:o,minimumFractionDigits:o}:Number.isInteger(Number(null===(n=t.attributes)||void 0===n?void 0:n.step))&&Number.isInteger(Number(t.state))?{maximumFractionDigits:0}:null!=t.attributes.step?{maximumFractionDigits:Math.ceil(Math.log10(1/t.attributes.step))}:void 0},Fe=(t,e)=>{const i=Object.assign({maximumFractionDigits:2},e);if("string"!=typeof t)return i;if(!e||void 0===e.minimumFractionDigits&&void 0===e.maximumFractionDigits){const e=t.indexOf(".")>-1?t.split(".")[1].length:0;i.minimumFractionDigits=e,i.maximumFractionDigits=e}return i};var Ue,Be,We,qe,Ge;!function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(Ue||(Ue={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(Be||(Be={})),function(t){t.local="local",t.server="server"}(We||(We={})),function(t){t.language="language",t.system="system",t.DMY="DMY",t.MDY="MDY",t.YMD="YMD"}(qe||(qe={})),function(t){t.language="language",t.monday="monday",t.tuesday="tuesday",t.wednesday="wednesday",t.thursday="thursday",t.friday="friday",t.saturday="saturday",t.sunday="sunday"}(Ge||(Ge={}));const Ye=(t,e=2)=>{let i=""+t;for(let n=1;n<e;n++)i=parseInt(i)<10**n?`0${i}`:i;return i};const Ze={ms:1,s:1e3,min:6e4,h:36e5,d:864e5},Ke=(t,e)=>function(t){const e=Math.floor(t/1e3/3600),i=Math.floor(t/1e3%3600/60),n=Math.floor(t/1e3%3600%60),o=Math.floor(t%1e3);return e>0?`${e}:${Ye(i)}:${Ye(n)}`:i>0?`${i}:${Ye(n)}`:n>0||o>0?`${n}${o>0?`.${Ye(o,3)}`:""}`:null}(parseFloat(t)*Ze[e])||"0";var Xe=Number.isNaN||function(t){return"number"==typeof t&&t!=t};function Je(t,e){if(t.length!==e.length)return!1;for(var i=0;i<t.length;i++)if(n=t[i],o=e[i],!(n===o||Xe(n)&&Xe(o)))return!1;var n,o;return!0}function Qe(t,e){void 0===e&&(e=Je);var i=null;function n(){for(var n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];if(i&&i.lastThis===this&&e(n,i.lastArgs))return i.lastResult;var s=t.apply(this,n);return i={lastResult:s,lastArgs:n,lastThis:this},s}return n.clear=function(){i=null},n}const ti=Qe(((t,e)=>new Intl.DateTimeFormat(t.language,{weekday:"long",month:"long",day:"numeric",timeZone:"server"===t.time_zone?e:void 0}))),ei=(t,e,i)=>ii(e,i.time_zone).format(t),ii=Qe(((t,e)=>new Intl.DateTimeFormat(t.language,{year:"numeric",month:"long",day:"numeric",timeZone:"server"===t.time_zone?e:void 0}))),ni=(t,e,i)=>{var n,o,s,a;const r=oi(e,i.time_zone);if(e.date_format===Re.language||e.date_format===Re.system)return r.format(t);const l=r.formatToParts(t),c=null===(n=l.find((t=>"literal"===t.type)))||void 0===n?void 0:n.value,h=null===(o=l.find((t=>"day"===t.type)))||void 0===o?void 0:o.value,d=null===(s=l.find((t=>"month"===t.type)))||void 0===s?void 0:s.value,u=null===(a=l.find((t=>"year"===t.type)))||void 0===a?void 0:a.value,p=l[l.length-1];let m="literal"===(null==p?void 0:p.type)?null==p?void 0:p.value:"";"bg"===e.language&&e.date_format===Re.YMD&&(m="");return{[Re.DMY]:`${h}${c}${d}${c}${u}${m}`,[Re.MDY]:`${d}${c}${h}${c}${u}${m}`,[Re.YMD]:`${u}${c}${d}${c}${h}${m}`}[e.date_format]},oi=Qe(((t,e)=>{const i=t.date_format===Re.system?void 0:t.language;return t.date_format===Re.language||(t.date_format,Re.system),new Intl.DateTimeFormat(i,{year:"numeric",month:"numeric",day:"numeric",timeZone:"server"===t.time_zone?e:void 0})})),si=Qe(((t,e)=>new Intl.DateTimeFormat(t.language,{day:"numeric",month:"short",timeZone:"server"===t.time_zone?e:void 0}))),ai=Qe(((t,e)=>new Intl.DateTimeFormat(t.language,{month:"long",year:"numeric",timeZone:"server"===t.time_zone?e:void 0}))),ri=Qe(((t,e)=>new Intl.DateTimeFormat(t.language,{month:"long",timeZone:"server"===t.time_zone?e:void 0}))),li=Qe(((t,e)=>new Intl.DateTimeFormat(t.language,{year:"numeric",timeZone:"server"===t.time_zone?e:void 0}))),ci=Qe(((t,e)=>new Intl.DateTimeFormat(t.language,{weekday:"long",timeZone:"server"===t.time_zone?e:void 0}))),hi=Qe(((t,e)=>new Intl.DateTimeFormat(t.language,{weekday:"short",timeZone:"server"===t.time_zone?e:void 0}))),di=Qe((t=>{if(t.time_format===Ie.language||t.time_format===Ie.system){const e=t.time_format===Ie.language?t.language:void 0,i=(new Date).toLocaleString(e);return i.includes("AM")||i.includes("PM")}return t.time_format===Ie.am_pm})),ui=(t,e,i)=>pi(e,i.time_zone).format(t),pi=Qe(((t,e)=>new Intl.DateTimeFormat("en"!==t.language||di(t)?t.language:"en-u-hc-h23",{hour:"numeric",minute:"2-digit",hour12:di(t),timeZone:"server"===t.time_zone?e:void 0}))),mi=Qe(((t,e)=>new Intl.DateTimeFormat("en"!==t.language||di(t)?t.language:"en-u-hc-h23",{hour:di(t)?"numeric":"2-digit",minute:"2-digit",second:"2-digit",hour12:di(t),timeZone:"server"===t.time_zone?e:void 0}))),_i=Qe(((t,e)=>new Intl.DateTimeFormat("en"!==t.language||di(t)?t.language:"en-u-hc-h23",{weekday:"long",hour:di(t)?"numeric":"2-digit",minute:"2-digit",hour12:di(t),timeZone:"server"===t.time_zone?e:void 0}))),gi=Qe(((t,e)=>new Intl.DateTimeFormat("en-GB",{hour:"numeric",minute:"2-digit",hour12:!1,timeZone:"server"===t.time_zone?e:void 0}))),fi=(t,e,i)=>vi(e,i.time_zone).format(t),vi=Qe(((t,e)=>new Intl.DateTimeFormat("en"!==t.language||di(t)?t.language:"en-u-hc-h23",{year:"numeric",month:"long",day:"numeric",hour:di(t)?"numeric":"2-digit",minute:"2-digit",hour12:di(t),timeZone:"server"===t.time_zone?e:void 0}))),bi=Qe(((t,e)=>new Intl.DateTimeFormat("en"!==t.language||di(t)?t.language:"en-u-hc-h23",{year:"numeric",month:"short",day:"numeric",hour:di(t)?"numeric":"2-digit",minute:"2-digit",hour12:di(t),timeZone:"server"===t.time_zone?e:void 0}))),yi=Qe(((t,e)=>new Intl.DateTimeFormat("en"!==t.language||di(t)?t.language:"en-u-hc-h23",{month:"short",day:"numeric",hour:di(t)?"numeric":"2-digit",minute:"2-digit",hour12:di(t),timeZone:"server"===t.time_zone?e:void 0}))),wi=Qe(((t,e)=>new Intl.DateTimeFormat("en"!==t.language||di(t)?t.language:"en-u-hc-h23",{year:"numeric",month:"long",day:"numeric",hour:di(t)?"numeric":"2-digit",minute:"2-digit",second:"2-digit",hour12:di(t),timeZone:"server"===t.time_zone?e:void 0}))),$i=(t,e)=>0!=(t.supported_features&e),Ai=t=>(t=>$i(t,4)&&"number"==typeof t.in_progress)(t)||!!t.in_progress,Oi=(t,e,i,n,o,s,a)=>{const r=o[e.entity_id];return ki(t,i,n,r,e.entity_id,e.attributes,s,void 0!==a?a:e.state)},ki=(t,e,i,n,o,s,a,r)=>{var l;if("unknown"===r||"unavailable"===r)return t(`state.default.${r}`);if(function(t){return!!t.unit_of_measurement||!!t.state_class}(s)){if("duration"===s.device_class&&s.unit_of_measurement&&Ze[s.unit_of_measurement])try{return Ke(r,s.unit_of_measurement)}catch(h){}if("monetary"===s.device_class)try{return ze(r,e,Object.assign({style:"currency",currency:(null==a?void 0:a.units)||s.unit_of_measurement,minimumFractionDigits:2},Le({state:r,attributes:s},null==a?void 0:a.numeric_precision,n)))}catch(h){}const t=(null==a?void 0:a.show_units)?(null==a?void 0:a.units)?null==a?void 0:a.units:s.unit_of_measurement:void 0,i=t?"%"===t?(t=>{switch(t.language){case"cz":case"de":case"fi":case"fr":case"sk":case"sv":return" ";default:return""}})(e)+"%":` ${t}`:"";return`${ze(r,e,Le({state:r,attributes:s},null==a?void 0:a.numeric_precision,n))}${i}`}const c=ve(o);if("datetime"===c){const t=new Date(r);return fi(t,e,i)}if(["date","input_datetime","time"].includes(c))try{const t=r.split(" ");if(2===t.length)return fi(new Date(t.join("T")),Object.assign(Object.assign({},e),{time_zone:We.local}),i);if(1===t.length){if(r.includes("-"))return ei(new Date(`${r}T00:00`),Object.assign(Object.assign({},e),{time_zone:We.local}),i);if(r.includes(":")){const t=new Date;return ui(new Date(`${t.toISOString().split("T")[0]}T${r}`),Object.assign(Object.assign({},e),{time_zone:We.local}),i)}}return r}catch(d){return r}if("counter"===c||"number"===c||"input_number"===c)return ze(r,e,Le({state:r,attributes:s},null==a?void 0:a.numeric_precision,n));if(["button","event","input_button","scene","stt","tts"].includes(c)||"sensor"===c&&"timestamp"===s.device_class)try{return fi(new Date(r),e,i)}catch(h){return r}return"update"===c?"on"===r?Ai(s)?$i(s,4)&&"number"==typeof s.in_progress?t("ui.card.update.installing_with_progress",{progress:s.in_progress}):t("ui.card.update.installing"):s.latest_version:s.skipped_version===s.latest_version?null!==(l=s.latest_version)&&void 0!==l?l:t("state.default.unavailable"):t("ui.card.update.up_to_date"):(null==n?void 0:n.translation_key)&&t(`component.${n.platform}.entity.${c}.${n.translation_key}.state.${r}`)||s.device_class&&t(`component.${c}.entity_component.${s.device_class}.state.${r}`)||t(`component.${c}.entity_component._.state.${r}`)||r};var Si=Function.prototype.toString,Ti=Object.create,Ci=Object.prototype.toString,ji=function(){function t(){this._keys=[],this._values=[]}return t.prototype.has=function(t){return!!~this._keys.indexOf(t)},t.prototype.get=function(t){return this._values[this._keys.indexOf(t)]},t.prototype.set=function(t,e){this._keys.push(t),this._values.push(e)},t}();var xi="undefined"!=typeof WeakMap?function(){return new WeakMap}:function(){return new ji};function Ei(t){if(!t)return Ti(null);var e=t.constructor;if(e===Object)return t===Object.prototype?{}:Ti(t);if(e&&~Si.call(e).indexOf("[native code]"))try{return new e}catch(Vi){}return Ti(t)}var Mi="g"===/test/g.flags?function(t){return t.flags}:function(t){var e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e};function Di(t){var e=Ci.call(t);return e.substring(8,e.length-1)}var Hi="undefined"!=typeof Symbol?function(t){return t[Symbol.toStringTag]||Di(t)}:Di,Pi=Object.defineProperty,Ii=Object.getOwnPropertyDescriptor,Ni=Object.getOwnPropertyNames,Ri=Object.getOwnPropertySymbols,Vi=Object.prototype,zi=Vi.hasOwnProperty,Li=Vi.propertyIsEnumerable,Fi="function"==typeof Ri;var Ui=Fi?function(t){return Ni(t).concat(Ri(t))}:Ni;function Bi(t,e,i){for(var n=Ui(t),o=0,s=n.length,a=void 0,r=void 0;o<s;++o)if("callee"!==(a=n[o])&&"caller"!==a)if(r=Ii(t,a)){r.get||r.set||(r.value=i.copier(r.value,i));try{Pi(e,a,r)}catch(l){e[a]=r.value}}else e[a]=i.copier(t[a],i);return e}function Wi(t,e){return t.slice(0)}function qi(t,e){var i=new e.Constructor;return e.cache.set(t,i),t.forEach((function(t,n){i.set(n,e.copier(t,e))})),i}var Gi=Fi?function(t,e){var i=Ei(e.prototype);for(var n in e.cache.set(t,i),t)zi.call(t,n)&&(i[n]=e.copier(t[n],e));for(var o=Ri(t),s=0,a=o.length,r=void 0;s<a;++s)r=o[s],Li.call(t,r)&&(i[r]=e.copier(t[r],e));return i}:function(t,e){var i=Ei(e.prototype);for(var n in e.cache.set(t,i),t)zi.call(t,n)&&(i[n]=e.copier(t[n],e));return i};function Yi(t,e){return new e.Constructor(t.valueOf())}function Zi(t,e){return t}function Ki(t,e){var i=new e.Constructor;return e.cache.set(t,i),t.forEach((function(t){i.add(e.copier(t,e))})),i}var Xi=Array.isArray,Ji=Object.assign,Qi=Object.getPrototypeOf||function(t){return t.__proto__},tn={array:function(t,e){var i=new e.Constructor;e.cache.set(t,i);for(var n=0,o=t.length;n<o;++n)i[n]=e.copier(t[n],e);return i},arrayBuffer:Wi,blob:function(t,e){return t.slice(0,t.size,t.type)},dataView:function(t,e){return new e.Constructor(Wi(t.buffer))},date:function(t,e){return new e.Constructor(t.getTime())},error:Zi,map:qi,object:Gi,regExp:function(t,e){var i=new e.Constructor(t.source,Mi(t));return i.lastIndex=t.lastIndex,i},set:Ki},en=Ji({},tn,{array:function(t,e){var i=new e.Constructor;return e.cache.set(t,i),Bi(t,i,e)},map:function(t,e){return Bi(t,qi(t,e),e)},object:function(t,e){var i=Ei(e.prototype);return e.cache.set(t,i),Bi(t,i,e)},set:function(t,e){return Bi(t,Ki(t,e),e)}});function nn(t){var e=function(t){return{Arguments:t.object,Array:t.array,ArrayBuffer:t.arrayBuffer,Blob:t.blob,Boolean:Yi,DataView:t.dataView,Date:t.date,Error:t.error,Float32Array:t.arrayBuffer,Float64Array:t.arrayBuffer,Int8Array:t.arrayBuffer,Int16Array:t.arrayBuffer,Int32Array:t.arrayBuffer,Map:t.map,Number:Yi,Object:t.object,Promise:Zi,RegExp:t.regExp,Set:t.set,String:Yi,WeakMap:Zi,WeakSet:Zi,Uint8Array:t.arrayBuffer,Uint8ClampedArray:t.arrayBuffer,Uint16Array:t.arrayBuffer,Uint32Array:t.arrayBuffer,Uint64Array:t.arrayBuffer}}(Ji({},tn,t)),i=e.Array,n=e.Object;function o(t,o){if(o.prototype=o.Constructor=void 0,!t||"object"!=typeof t)return t;if(o.cache.has(t))return o.cache.get(t);if(o.prototype=Qi(t),o.Constructor=o.prototype&&o.prototype.constructor,!o.Constructor||o.Constructor===Object)return n(t,o);if(Xi(t))return i(t,o);var s=e[Hi(t)];return s?s(t,o):"function"==typeof t.then?t:n(t,o)}return function(t){return o(t,{Constructor:void 0,cache:xi(),copier:o,prototype:void 0})}}nn(Ji({},en,{}));var on=nn({});const sn=new Set(["alarm_control_panel","alert","automation","binary_sensor","calendar","camera","climate","cover","device_tracker","fan","group","humidifier","input_boolean","light","lock","media_player","person","plant","remote","schedule","script","siren","sun","switch","timer","update","vacuum"]),an=(t,e,i)=>{if((void 0!==e?e:null==t?void 0:t.state)===re)return"var(--state-unavailable-color)";const n=ln(t,e,i);return n?Se(n):void 0},rn=(t,e,i,n)=>{const o=void 0!==i?i:e.state,s=ke(e,i),a=[],r=function(t,e="_"){const i="àáäâãåăæąçćčđďèéěėëêęğǵḧìíïîįłḿǹńňñòóöôœøṕŕřßşśšșťțùúüûǘůűūųẃẍÿýźžż·/_,:;",n=`aaaaaaaaacccddeeeeeeegghiiiiilmnnnnooooooprrsssssttuuuuuuuuuwxyyzzz${e}${e}${e}${e}${e}${e}`,o=new RegExp(i.split("").join("|"),"g");return t.toString().toLowerCase().replace(/\s+/g,e).replace(o,(t=>n.charAt(i.indexOf(t)))).replace(/&/g,`${e}and${e}`).replace(/[^\w-]+/g,"").replace(/-/g,e).replace(new RegExp(`(${e})\\1+`,"g"),"$1").replace(new RegExp(`^${e}+`),"").replace(new RegExp(`${e}+$`),"")}(o,"_"),l=s?"active":"inactive";if(n&&pe.includes(n)&&"inactive"==l)return me;const c=e.attributes.device_class;return c&&a.push(`--state-${t}-${c}-${r}-color`),a.push(`--state-${t}-${r}-color`,`--state-${t}-${l}-color`,`--state-${l}-color`),a},ln=(t,e,i)=>{const n=void 0!==e?e:null==t?void 0:t.state,o=ve(t.entity_id),s=t.attributes.device_class;if("sensor"===o&&"battery"===s){const t=(t=>{const e=Number(t);if(!isNaN(e))return e>=70?"--state-sensor-battery-high-color":e>=30?"--state-sensor-battery-medium-color":"--state-sensor-battery-low-color"})(n);if(t)return[t]}if("group"===o){const n=(t=>{const e=t.attributes.entity_id||[],i=[...new Set(e.map((t=>ve(t))))];return 1===i.length?i[0]:void 0})(t);if(n&&sn.has(n))return rn(n,t,e,i)}return sn.has(o)?rn(o,t,e,i):i&&pe.includes(i)?me:void 0},cn=Object.create(null),hn=36e5,dn=24*hn,un=365.25*dn;cn.year=cn.yr=cn.y=un,cn.month=cn.mo=cn.mth=un/12,cn.week=cn.wk=cn.w=7*dn,cn.day=cn.d=dn,cn.hour=cn.hr=cn.h=hn,cn.minute=cn.min=cn.m=6e4,cn.second=cn.sec=cn.s=1e3,cn.millisecond=cn.millisec=cn.ms=1,cn.microsecond=cn.microsec=cn.us=cn.µs=.001,cn.nanosecond=cn.nanosec=cn.ns=1e-6,cn.group=",",cn.decimal=".",cn.placeholder=" _";const pn=/((?:\d{1,16}(?:\.\d{1,16})?|\.\d{1,16})(?:[eE][-+]?\d{1,4})?)\s?([\p{L}]{0,14})/gu;function mn(t="",e="ms"){let i,n=null;return String(t).replace(new RegExp(`(\\d)[${mn.unit.placeholder}${mn.unit.group}](\\d)`,"g"),"$1$2").replace(mn.unit.decimal,".").replace(pn,((t,o,s)=>{if(s)s=s.toLowerCase();else if(i){for(const e in mn.unit)if(mn.unit[e]<i){s=e;break}}else s=e;i=s=mn.unit[s]||mn.unit[s.replace(/s$/,"")],s&&(n=(n||0)+o*s)})),n&&n/(mn.unit[e]||1)*("-"===t[0]?-1:1)}mn.unit=cn;const _n=Object.create(cn);_n.jahr=_n.j=cn.y,_n.monat=cn.mo,_n.woche=cn.w,_n.tag=_n.t=cn.d,_n.stunde=cn.h,_n.minute=cn.m,_n.sekunde=cn.s,_n.millisekunde=cn.ms,_n.mikrosekunde=cn.us,_n.nanosekunde=cn.ns,_n.group=".",_n.decimal=",";const gn=Object.create(cn);gn.año=gn.a=cn.y,gn.mes=cn.mo,gn.semana=cn.w,gn.día=cn.d,gn.hora=cn.h,gn.minuto=cn.m,gn.segundo=cn.s,gn.milisegundo=cn.ms,gn.microsegundo=cn.us,gn.nanosegundo=cn.ns,gn.group=".",gn.decimal=",";const fn=Object.create(cn);fn.année=fn.an=fn.a=cn.y,fn.mois=cn.mo,fn.semaine=fn.sem=cn.w,fn.jour=fn.j=cn.d,fn.heure=cn.h,fn.minute=cn.m,fn.seconde=cn.s,fn.milliseconde=cn.ms,fn.microseconde=cn.us,fn.nanoseconde=cn.ns,fn.group=" ",fn.decimal=",";const vn=Object.create(cn);vn.年=vn.年間=cn.y,vn.月=vn.ヶ月=cn.mo,vn.週=vn.週間=cn.w,vn.日=cn.d,vn.時間=vn.時=cn.h,vn.分=vn.分間=cn.m,vn.秒=vn.秒間=cn.s,vn.ミリ秒=cn.ms,vn.マイクロ秒=cn.us,vn.ナノ秒=cn.ns,vn.group=",",vn.decimal=".";const bn=Object.create(cn);bn.ano=bn.a=cn.y,bn.mês=bn.mes=cn.mo,bn.semana=bn.sem=cn.w,bn.dia=cn.d,bn.hora=cn.h,bn.minuto=cn.m,bn.segundo=bn.seg=cn.s,bn.milissegundo=cn.ms,bn.microssegundo=cn.us,bn.nanossegundo=cn.ns,bn.group=".",bn.decimal=",";const yn=Object.create(cn);yn.год=yn.г=cn.y,yn.месяц=yn.мес=cn.mo,yn.неделя=yn.нед=cn.w,yn.день=yn.д=cn.d,yn.час=yn.ч=cn.h,yn.минута=yn.мин=cn.m,yn.секунда=yn.сек=cn.s,yn.миллисекунда=yn.мс=cn.ms,yn.микросекунда=yn.мкс=cn.us,yn.наносекунда=yn.нс=cn.ns,yn.group=" ",yn.decimal=",";const wn=Object.create(cn);wn.年=cn.y,wn.月=cn.mo,wn.周=wn.星期=cn.w,wn.天=wn.日=cn.d,wn.小时=wn.时=cn.h,wn.分钟=wn.分=cn.m,wn.秒=wn.秒钟=cn.s,wn.毫秒=cn.ms,wn.微秒=cn.us,wn.纳秒=cn.ns,wn.group=",",wn.decimal=".";const $n={de:_n,en:cn,es:gn,fr:fn,ja:vn,pt:bn,ru:yn,zh:wn},An=(t,e,i)=>{if(void 0===t)return;(i=(i=i.toLocaleLowerCase()).startsWith("en")?"en":i)&&i in $n?mn.unit=$n[i]:console.warn(`button-card: parseDuration does not support locale '${i}'`);const n=mn(t,e);return null!=n?n:void 0};let On=window.cardHelpers;const kn=new Promise((async t=>{On&&t(),window.loadCardHelpers&&(On=await window.loadCardHelpers(),window.cardHelpers=On,t())}));window.buttonCardCustomActionsHandler||(window.buttonCardCustomActionsHandler=function(t){var e;t.detail.buttonCardCustomAction&&(null===(e=t.detail.buttonCardCustomAction)||void 0===e||e.callback(t))},document.body.addEventListener("ll-custom",window.buttonCardCustomActionsHandler)),console.info("%c BUTTON-CARD %c v7.0.0 ","color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray"),window.customCards=window.customCards||[],window.customCards.push({type:"button-card",name:"Button-Card",preview:!1,description:"A massively customizable custom button card"});let Sn=class extends st{constructor(){super(...arguments),this.preview=!1,this._spinnerActive=!1,this._evaluatedVariables={},this._cards={},this._cardsConfig={},this._monitoredEntities=[],this._initialSetupComplete=!1,this._cardClickable=!1,this._iconClickable=!1,this._hasIconActions=!1,this._hidden=!1,this._cardMomentary=!1,this._iconMomentary=!1,this._cardRipple=!1,this._protectedAction=void 0,this._hapticCapture=!1,this._extraStyles=[]}get _doIHaveEverything(){return!!this._hass&&!!this._config&&this.isConnected}static getStubConfig(t,e,i){const n=Ee(t,1,e,i,["light","switch"]);return Oe()?{entity:n[0]||"",section_mode:!0,grid_options:{rows:2,columns:6}}:{entity:n[0]||"",section_mode:!1}}_computeHidden(){var t;let e;e=!(this.preview||!this._initialSetupComplete||void 0===(null===(t=this._config)||void 0===t?void 0:t.hidden))&&this._getTemplateOrValue(this._stateObj,this._config.hidden),e!==this._hidden&&(this._hidden=e,this.hidden=e,Mt(this,"card-visibility-changed"))}set hass(t){this._hass=t,this._pStates||(this._pStates=this._createStateProxy()),this._pHass=Object.assign(Object.assign({},t),{states:this._pStates}),Object.keys(this._cards).forEach((t=>{this._cards[t].hass=this._hass})),this._initialSetupComplete||this._finishSetup()}_createStateProxy(){return new Proxy({},{get:(t,e)=>{var i,n;return e.includes(".")&&!this._monitoredEntities.includes(e)&&(this._monitoredEntities.push(e),this._expandTriggerGroups()),null===(n=null===(i=this._hass)||void 0===i?void 0:i.states)||void 0===n?void 0:n[e]},has:(t,e)=>{var i,n;return!!(null===(n=null===(i=this._hass)||void 0===i?void 0:i.states)||void 0===n?void 0:n[e])},ownKeys:()=>this._hass&&this._hass.states?Object.keys(this._hass.states):[],getOwnPropertyDescriptor:(t,e)=>{var i,n;return{value:null===(n=null===(i=this._hass)||void 0===i?void 0:i.states)||void 0===n?void 0:n[e],enumerable:!0,configurable:!0}}})}_createVariablesProxy(t){return t?(this._evaluatedVariables={},new Proxy(t,{get:(t,e)=>{var i;if(e in this._evaluatedVariables&&"value"in this._evaluatedVariables[e])return this._evaluatedVariables[e].value;if(e in t){if(null===(i=this._evaluatedVariables[e])||void 0===i?void 0:i.loop)throw new Error(`button-card: Detected a loop while evaluating variable "${e}"`);this._evaluatedVariables[e]={loop:!0};const n=Reflect.get(t,e);return this._evaluatedVariables[e].value="object"==typeof n&&null!==n&&"value"in n?this._objectEvalTemplate(this._stateObj,n.value):this._objectEvalTemplate(this._stateObj,n),delete this._evaluatedVariables[e].loop,this._evaluatedVariables[e].value}}})):{}}disconnectedCallback(){super.disconnectedCallback(),this._clearInterval(),this._updateTimerCancel(),window.removeEventListener("haptic",this._hapticInterceptHandler.bind(this),{capture:!0})}connectedCallback(){super.connectedCallback(),this._initialSetupComplete?(this._updateTimerStart(),this._startTimerCountdown()):this._finishSetup(),window.addEventListener("haptic",this._hapticInterceptHandler.bind(this),{capture:!0})}_finishSetup(){var t;if(!this._initialSetupComplete&&this._doIHaveEverything){if(this._pVariables=this._createVariablesProxy(on(null===(t=this._config)||void 0===t?void 0:t.variables)),this._config.entity)try{const t=this._getTemplateOrValue(void 0,this._config.entity);this._config.entity=t,this._stateObj=this._hass.states[t]}catch(Et){console.error(`button-card: Could not evaluate entity template: ${this._config.entity}`)}if(this._isActionDoingSomething(this._stateObj,this._config.press_action)||this._isActionDoingSomething(this._stateObj,this._config.release_action)?this._config=Object.assign({tap_action:{action:"none"}},this._config):this._config.entity&&he.has(ve(this._config.entity))?this._config=Object.assign({tap_action:{action:"toggle"}},this._config):this._config.entity&&de.has(ve(this._config.entity))?this._config=Object.assign({tap_action:{action:"call-service",service:"input_button.press",target:{entity_id:this._config.entity}}},this._config):this._config.entity?this._config=Object.assign({tap_action:{action:"more-info"}},this._config):this._config=Object.assign({tap_action:{action:"none"}},this._config),(this._isActionDoingSomething(this._stateObj,this._config.press_action)||this._isActionDoingSomething(this._stateObj,this._config.release_action))&&(this._isActionDoingSomething(this._stateObj,this._config.tap_action)||this._isActionDoingSomething(this._stateObj,this._config.hold_action)||this._isActionDoingSomething(this._stateObj,this._config.double_tap_action)))throw new Error('button-card: If you use press_action or release_action, then tap_action, hold_action and double_tap_action must be "none" or not set at all.');if((this._isActionDoingSomething(this._stateObj,this._config.icon_press_action)||this._isActionDoingSomething(this._stateObj,this._config.icon_release_action))&&(this._isActionDoingSomething(this._stateObj,this._config.icon_tap_action)||this._isActionDoingSomething(this._stateObj,this._config.icon_hold_action)||this._isActionDoingSomething(this._stateObj,this._config.icon_double_tap_action)))throw new Error('button-card: If you use icon_press_action or icon_release_action, then icon_tap_action, icon_hold_action and icon_double_tap_action must be "none" or not set at all.');this._monitoredEntities=[],this._config.entity&&!this._monitoredEntities.includes(this._config.entity)&&this._monitoredEntities.push(this._config.entity),this._expandTriggerGroups(),this._startTimerCountdown(),this._updateTimerStart(),this._computeHidden(),this._initialSetupComplete=!0}}_startTimerCountdown(){if(this._config&&this._config.entity&&"timer"===ve(this._config.entity)){const t=this._hass.states[this._config.entity];this._startInterval(t)}}_createCard(t){if(On)return On.createCardElement(t);{const e=((t,e=!1)=>{const i=(t,e)=>n("hui-error-card",{type:"error",error:t,config:e}),n=(t,e)=>{const n=window.document.createElement(t);try{if(!n.setConfig)return;n.setConfig(e)}catch(o){return console.error(t,o),i(o.message,e)}return n};if(!t||"object"!=typeof t||!e&&!t.type)return i("No type defined",t);let o=t.type;if(o&&o.startsWith("custom:"))o=o.substr(7);else if(e)if(Me.has(o))o=`hui-${o}-row`;else{if(!t.entity)return i("Invalid config given.",t);const e=t.entity.split(".",1)[0];o=`hui-${De[e]||"text"}-entity-row`}else o=`hui-${o}-card`;if(customElements.get(o))return n(o,t);const s=i(`Custom element doesn't exist: ${t.type}.`,t);s.style.display="None";const a=setTimeout((()=>{s.style.display=""}),2e3);return customElements.whenDefined(t.type).then((()=>{clearTimeout(a),Mt(s,"ll-rebuild",{},s)})),s})(t);return kn.then((()=>{Mt(e,"ll-rebuild",{})})),e}}static get styles(){return He}render(){var t,e,i;if(!this._config||!this._hass)return L``;this._stateObj=this._config.entity?this._hass.states[this._config.entity]:void 0;try{return this._evaluatedVariables={},(null===(t=this._config)||void 0===t?void 0:t.variables)&&(null===(i=Object.keys(null===(e=this._config)||void 0===e?void 0:e.variables))||void 0===i||i.forEach((t=>{const e=this._config.variables[t];if("object"==typeof e&&null!==e&&e.force_eval){this._pVariables[t]}}))),this._cardHtml()}catch(Et){Et.stack?console.error(Et.stack):console.error(Et);const e=document.createElement("hui-error-card");return e.preview=this.preview,e.setConfig({type:"error",error:Et.name,message:Et.message}),L` ${e} `}}_hasAnEntityChanged(t){const e=t.get("_hass");if(e){function i(t){return(null==e?void 0:e.states[t])!==this._hass.states[t]}return this._monitoredEntities.some(i.bind(this))}return!1}shouldUpdate(t){if(t.has("_config"))return!0;if(this._updateTimerDuration)return!!t.has("_updateTimerMS")||this._updateTimerChanged();return!!(t.has("_timeRemaining")||t.has("_updateTimerMS")||t.has("_spinnerActive"))||this._hasAnEntityChanged(t)?(this._expandTriggerGroups(),!0):!!t.has("preview")}willUpdate(t){t.has("preview")&&Object.keys(this._cards).forEach((t=>{this._cards[t].preview=this.preview}))}updated(t){if(super.updated(t),this._config&&this._config.entity&&"timer"===ve(this._config.entity)&&t.has("_hass")){const e=this._hass.states[this._config.entity],i=t.get("_hass");(i?i.states[this._config.entity]:void 0)!==e?this._startInterval(e):e||this._clearInterval()}this.updateComplete.then((()=>{var t,e,i,n;const o=null===(t=this.shadowRoot)||void 0===t?void 0:t.getElementById("tooltip");o&&(null===(e=o.eventController)||void 0===e||e.abort(),o.eventController=new AbortController,o.anchor=void 0,null===(n=(i=o).handleForChange)||void 0===n||n.call(i))})),this._updateTimer(),this._computeHidden()}_clearInterval(){this._interval&&(window.clearInterval(this._interval),this._interval=void 0)}_startInterval(t){this._clearInterval(),this._calculateRemaining(t),"active"===t.state&&(this._interval=window.setInterval((()=>this._calculateRemaining(t)),1e3))}_calculateRemaining(t){t.attributes.remaining&&(this._timeRemaining=(t=>{if(!t.attributes.remaining)return;let e=Te(t.attributes.remaining);if("active"===t.state){const i=(new Date).getTime(),n=new Date(t.last_changed).getTime();e=Math.max(e-(i-n)/1e3,0)}return e})(t))}_computeTimeDisplay(t){if(t)return function(t){const e=Math.floor(t/3600),i=Math.floor(t%3600/60),n=Math.floor(t%3600%60);return e>0?`${e}:${Ce(i)}:${Ce(n)}`:i>0?`${i}:${Ce(n)}`:n>0?""+n:null}(this._timeRemaining||Te(t.attributes.duration))}_getMatchingConfigState(t){if(!this._config.state)return;const e=this._config.state.find((t=>"template"===t.operator));if(!t&&!e)return;let i;const n=this._config.state.find((e=>{if(!e.operator)return t&&this._getTemplateOrValue(t,e.value)==t.state;switch(e.operator){case"==":return t&&t.state==this._getTemplateOrValue(t,e.value);case"<=":return t&&t.state<=this._getTemplateOrValue(t,e.value);case"<":return t&&t.state<this._getTemplateOrValue(t,e.value);case">=":return t&&t.state>=this._getTemplateOrValue(t,e.value);case">":return t&&t.state>this._getTemplateOrValue(t,e.value);case"!=":return t&&t.state!=this._getTemplateOrValue(t,e.value);case"regex":return!(!t||!t.state.match(this._getTemplateOrValue(t,e.value)));case"template":return this._getTemplateOrValue(t,e.value);case"default":return i=e,!1;default:return!1}}));return!n&&i?i:n}_localize(t,e,i,n=!0,o){var s;return Oi(this._hass.localize,t,this._hass.locale,this._hass.config,this._hass.entities,{numeric_precision:"card"===i?null===(s=this._config)||void 0===s?void 0:s.numeric_precision:i,show_units:n,units:o},e)}_relativeTime(t,e=!1){return t?L`
        <ha-relative-time
          id="relative-time"
          class="ellipsis"
          .hass="${this._hass}"
          .datetime="${t}"
          .capitalize="${e}"
        ></ha-relative-time>
      `:""}_getTemplateHelpers(){return{localize:this._localize.bind(this),formatDateTime:t=>fi(new Date(t),this._hass.locale,this._hass.config),formatShortDateTimeWithYear:t=>{return e=new Date(t),i=this._hass.locale,n=this._hass.config,bi(i,n.time_zone).format(e);var e,i,n},formatShortDateTime:t=>{return e=new Date(t),i=this._hass.locale,n=this._hass.config,yi(i,n.time_zone).format(e);var e,i,n},formatDateTimeWithSeconds:t=>{return e=new Date(t),i=this._hass.locale,n=this._hass.config,wi(i,n.time_zone).format(e);var e,i,n},formatDateTimeNumeric:t=>{return e=new Date(t),i=this._hass.locale,n=this._hass.config,`${ni(e,i,n)}, ${ui(e,i,n)}`;var e,i,n},relativeTime:this._relativeTime.bind(this),formatTime:t=>ui(new Date(t),this._hass.locale,this._hass.config),formatTimeWithSeconds:t=>{return e=new Date(t),i=this._hass.locale,n=this._hass.config,mi(i,n.time_zone).format(e);var e,i,n},formatTimeWeekday:t=>{return e=new Date(t),i=this._hass.locale,n=this._hass.config,_i(i,n.time_zone).format(e);var e,i,n},formatTime24h:t=>{return e=new Date(t),i=this._hass.locale,n=this._hass.config,gi(i,n.time_zone).format(e);var e,i,n},formatDateWeekdayDay:t=>{return e=new Date(t),i=this._hass.locale,n=this._hass.config,ti(i,n.time_zone).format(e);var e,i,n},formatDate:t=>ei(new Date(t),this._hass.locale,this._hass.config),formatDateNumeric:t=>ni(new Date(t),this._hass.locale,this._hass.config),formatDateShort:t=>{return e=new Date(t),i=this._hass.locale,n=this._hass.config,si(i,n.time_zone).format(e);var e,i,n},formatDateMonthYear:t=>{return e=new Date(t),i=this._hass.locale,n=this._hass.config,ai(i,n.time_zone).format(e);var e,i,n},formatDateMonth:t=>{return e=new Date(t),i=this._hass.locale,n=this._hass.config,ri(i,n.time_zone).format(e);var e,i,n},formatDateYear:t=>{return e=new Date(t),i=this._hass.locale,n=this._hass.config,li(i,n.time_zone).format(e);var e,i,n},formatDateWeekday:t=>{return e=new Date(t),i=this._hass.locale,n=this._hass.config,ci(i,n.time_zone).format(e);var e,i,n},formatDateWeekdayShort:t=>{return e=new Date(t),i=this._hass.locale,n=this._hass.config,hi(i,n.time_zone).format(e);var e,i,n},parseDuration:(t,e,i)=>{var n;return void 0===e&&(e="ms"),void 0===i&&(i=null===(n=this._hass.locale)||void 0===n?void 0:n.language),An(t,e,i)},toastMessage:t=>this._sendToastMessage.bind(this)({message:t}),toast:t=>this._sendToastMessage.bind(this)(t),runAction:t=>{const e=this._evalActions(this._config,t);this._buildActionConfig(e)}}}_evalTemplate(t,e){try{return new Function("states","entity","user","hass","variables","html","helpers",`'use strict'; ${e}`).call(this,this._pStates,t,this._hass.user,this._pHass,this._pVariables,L,this._getTemplateHelpers())}catch(Et){const i=e.length<=100?e.trim():`${e.trim().substring(0,98)}...`;throw Et.message=`${Et.name}: ${Et.message} in '${i}'`,Et.name="ButtonCardJSTemplateError",Et}}_objectEvalTemplate(t,e){const i=on(e);return this._getTemplateOrValue(t,i)}_getTemplateOrValue(t,e){if(["number","boolean","function"].includes(typeof e))return e;if(!e)return e;if("object"==typeof e)return Object.keys(e).forEach((i=>{e[i]=this._getTemplateOrValue(t,e[i])})),e;const i=e.trim(),n=new RegExp("^(\\[{3,})(.*?)(\\]{3,})$","s"),o=i.match(n);return o&&4===o.length?3===o[1].length&&3===o[3].length?this._evalTemplate(t,o[2]):o[1].length===o[3].length?i.slice(1,-1):e:e}_getColorForLightEntity(t,e,i){let n=_e;return pe.includes(n)&&(n=Se(me)),t&&(ke(t)?(n=t.attributes.rgb_color?`rgb(${t.attributes.rgb_color.join(",")})`:e&&t.attributes.color_temp&&t.attributes.min_mireds&&t.attributes.max_mireds?function(t,e,i){const n=new oe("rgb(255, 160, 0)"),o=new oe("rgb(166, 209, 255)"),s=new oe("white"),a=(t-e)/(i-e)*100;return a<50?o.mix(s,2*a).toRgbString():s.mix(n,2*(a-50)).toRgbString()}(t.attributes.color_temp,t.attributes.min_mireds,t.attributes.max_mireds):an(t,t.state,i)||_e,t.attributes.brightness&&(n=function(t,e,i){const n=new oe(be(t,e));if(n.isValid){const t=n.mix("black",100-i).toString();if(t)return t}return e}(this,n,(t.attributes.brightness+245)/5))):n=an(t,t.state,i)||_e),n}_buildCssColorAttribute(t,e){var i,n;let o,s="";return(null==e?void 0:e.color)?s=e.color:this._config.color&&(s=this._config.color),ue.includes(s)&&(!t||t&&"light"!==ve(t.entity_id))&&(s=""),o=ue.includes(s)?this._getColorForLightEntity(t,"auto-no-temperature"!==s,null===(i=this._config)||void 0===i?void 0:i.color_type):s||(t&&an(t,t.state,null===(n=this._config)||void 0===n?void 0:n.color_type)||_e),o}_buildIcon(t,e){if(!this._config.show_icon)return;let i;if(null==e?void 0:e.icon)i=e.icon;else{if(!this._config.icon)return;i=this._config.icon}return this._getTemplateOrValue(t,i)}_buildEntityPicture(t,e){if(!this._config.show_entity_picture||!t&&!e&&!this._config.entity_picture)return;let i;(null==e?void 0:e.entity_picture)?i=e.entity_picture:this._config.entity_picture?i=this._config.entity_picture:t&&(i=t.attributes&&t.attributes.entity_picture?t.attributes.entity_picture:void 0);const n=this._getTemplateOrValue(t,i);return n&&je(n)?xe(this._hass,n).then((t=>t.url)).catch((()=>"")):n}_buildStyleGeneric(t,e,i){var n,o;let s={};if((null===(n=this._config.styles)||void 0===n?void 0:n[i])&&(s=Object.assign(s,...this._config.styles[i])),null===(o=null==e?void 0:e.styles)||void 0===o?void 0:o[i]){let t={};t=Object.assign(t,...e.styles[i]),s=Object.assign(Object.assign({},s),t)}return Object.keys(s).forEach((e=>{s[e]=this._getTemplateOrValue(t,s[e])})),s}_buildCustomStyleGeneric(t,e,i){var n,o,s,a;let r={};if((null===(o=null===(n=this._config.styles)||void 0===n?void 0:n.custom_fields)||void 0===o?void 0:o[i])&&(r=Object.assign(r,...this._config.styles.custom_fields[i])),null===(a=null===(s=null==e?void 0:e.styles)||void 0===s?void 0:s.custom_fields)||void 0===a?void 0:a[i]){let t={};t=Object.assign(t,...e.styles.custom_fields[i]),r=Object.assign(Object.assign({},r),t)}return Object.keys(r).forEach((e=>{r[e]=this._getTemplateOrValue(t,r[e])})),r}_buildName(t,e){if(!1===this._config.show_name)return;let i;var n;return(null==e?void 0:e.name)?i=e.name:this._config.name?i=this._config.name:t&&(i=t.attributes&&t.attributes.friendly_name?t.attributes.friendly_name:(n=t.entity_id).substr(n.indexOf(".")+1)),this._getTemplateOrValue(t,i)}_buildStateString(t){let e;return this._config.show_state&&t&&t.state&&("timer"===ve(t.entity_id)?"idle"===t.state||0===this._timeRemaining?e=Oi(this._hass.localize,t,this._hass.locale,this._hass.config,this._hass.entities,this._config):(e=this._computeTimeDisplay(t),"paused"===t.state&&(e+=` (${Oi(this._hass.localize,t,this._hass.locale,this._hass.config,this._hass.entities,this._config)})`)):e=Oi(this._hass.localize,t,this._hass.locale,this._hass.config,this._hass.entities,this._config)),e}_buildLastChanged(t,e){return this._config.show_last_changed&&t?L`
          <ha-relative-time
            id="label"
            class="ellipsis"
            .hass="${this._hass}"
            .datetime="${t.last_changed}"
            style=${Ct(e)}
          ></ha-relative-time>
        `:void 0}_buildLabel(t,e){if(!this._config.show_label)return;let i;return i=(null==e?void 0:e.label)?e.label:this._config.label,this._getTemplateOrValue(t,i)}_buildCustomFields(t,e){let i=L``;const n={},o={};return this._config.custom_fields&&Object.keys(this._config.custom_fields).forEach((e=>{const i=this._config.custom_fields[e];i.card?i.do_not_eval?o[e]=on(i.card):o[e]=this._objectEvalTemplate(t,i.card):n[e]=this._getTemplateOrValue(t,i)})),(null==e?void 0:e.custom_fields)&&Object.keys(e.custom_fields).forEach((i=>{const s=e.custom_fields[i];s.card?s.do_not_eval?o[i]=on(s.card):o[i]=this._objectEvalTemplate(t,s.card):n[i]=this._getTemplateOrValue(t,s)})),Object.keys(n).forEach((o=>{if(null!=n[o]){const s=Object.assign(Object.assign({},this._buildCustomStyleGeneric(t,e,o)),{"grid-area":o});i=L`
          ${i}
          <div id=${o} class="ellipsis" style=${Ct(s)}>${this._unsafeHTMLorNot(n[o])}</div>
        `}})),Object.keys(o).forEach((n=>{var s,a,r,l;if(null!=o[n]){const c=Object.assign(Object.assign({},this._buildCustomStyleGeneric(t,e,n)),{"grid-area":n});let h;Dt(this._cardsConfig[n],o[n])?h=this._cards[n]:(null===(s=this._cardsConfig[n])||void 0===s?void 0:s.type)===(null===(a=o[n])||void 0===a?void 0:a.type)&&!0!==(null===(l=null===(r=this._config.custom_fields)||void 0===r?void 0:r[n])||void 0===l?void 0:l.force_recreate)?(h=this._cards[n],h.preview=this.preview,this._cardsConfig[n]=on(o[n]),h.setConfig(o[n])):(h=this._createCard(o[n]),h.preview=this.preview,this._cards[n]=h,this._cardsConfig[n]=on(o[n])),h.hass=this._hass,i=L`
          ${i}
          <div
            id=${n}
            @action=${this._stopPropagation}
            @click=${this._sendToParent}
            @touchstart=${this._sendToParent}
            @mousedown=${this._sendToParent}
            @mouseup=${this._sendToParent}
            @touchend=${this._sendToParent}
            @touchcancel=${this._sendToParent}
            style=${Ct(c)}
          >
            ${h}
          </div>
        `}})),i}_hasChildCards(t){return!!t&&Object.keys(t).some((e=>!!t[e].card))}_isActionDoingSomething(t,e){if(!e)return!1;if("string"==typeof e){const i=this._getTemplateOrValue(t,e);return!(!i||["none",null,void 0].includes(i.action))}if("object"==typeof e&&e.action){const i=this._getTemplateOrValue(t,e.action);return!["none",null,void 0].includes(i)}return!1}_computeIsClickable(t,e){const i=this._isActionDoingSomething(t,this._config.tap_action),n=this._isActionDoingSomething(t,this._config.hold_action),o=this._isActionDoingSomething(t,this._config.double_tap_action),s=this._isActionDoingSomething(t,this._config.press_action),a=this._isActionDoingSomething(t,this._config.release_action),r=this._isActionDoingSomething(t,this._config.icon_tap_action),l=this._isActionDoingSomething(t,this._config.icon_hold_action),c=this._isActionDoingSomething(t,this._config.icon_double_tap_action),h=this._isActionDoingSomething(t,this._config.icon_press_action),d=this._isActionDoingSomething(t,this._config.icon_release_action),u=this._hasChildCards(this._config.custom_fields)||!(!e||!this._hasChildCards(e.custom_fields)),p=this._getTemplateOrValue(t,this._config.show_ripple),m=i||n||o||s||a;this._cardClickable=m||u,this._hasIconActions=r||l||c||h||d,this._iconClickable=this._cardClickable||this._hasIconActions,this._cardRipple=null!=p?p:m||this._hasIconActions,this._cardMomentary=s||a,this._iconMomentary=h||d}_rotate(t){var e,i;return!!(null!==(e=this._getTemplateOrValue(this._stateObj,null==t?void 0:t.rotate))&&void 0!==e?e:this._getTemplateOrValue(this._stateObj,null===(i=this._config)||void 0===i?void 0:i.rotate))}_blankCardColoredHtml(t){const e=Object.assign({background:"none","box-shadow":"none","border-style":"none"},t);return L`
      <ha-card class="disabled" style=${Ct(e)}>
        <div></div>
      </ha-card>
    `}_cardHtml(){var t,e,i,n,o,s,a;const r=this._getMatchingConfigState(this._stateObj);this._computeIsClickable(this._stateObj,r);let l="var(--state-inactive-color)";l=(null==r?void 0:r.color)&&!ue.includes(r.color)?r.color:(null===(t=this._config)||void 0===t?void 0:t.color)&&!ue.includes(this._config.color)?this._stateObj?ke(this._stateObj)?(null===(e=this._config)||void 0===e?void 0:e.color)||l:an(this._stateObj,this._stateObj.state,null===(i=this._config)||void 0===i?void 0:i.color_type)||_e:this._config.color:this._buildCssColorAttribute(this._stateObj,r);let c=l,h={},d={},u={};const p={},m=this._buildStyleGeneric(this._stateObj,r,"lock"),_=this._buildStyleGeneric(this._stateObj,r,"spinner"),g=this._buildStyleGeneric(this._stateObj,r,"card"),f=this._buildStyleGeneric(this._stateObj,r,"tooltip"),v={"button-card-main":!0,disabled:!this._cardClickable,section:!!(null===(n=this._config)||void 0===n?void 0:n.section_mode)};switch((null===(o=this._config)||void 0===o?void 0:o.section_mode)&&this.classList.add("section"),g.width&&(this.style.setProperty("flex","0 0 auto"),this.style.setProperty("max-width","fit-content")),this._config.color_type){case"blank-card":return this._blankCardColoredHtml(g);case"card":case"label-card":{const t=function(t,e){const i=new oe(be(t,e)).getLuminance(),n=new oe({r:225,g:225,b:225}),o=n.getLuminance(),s=new oe({r:28,g:28,b:28}),a=s.getLuminance();return 0===i||(Math.max(i,o)+.05)/Math.min(i,o+.05)>(Math.max(i,a)+.05)/Math.min(i,a+.05)?n.toRgbString():s.toRgbString()}(this,l);h.color=t,d.color=t,h["background-color"]=l,h=Object.assign(Object.assign({},h),g),c="inherit",this.style.setProperty("--button-card-color",t);break}default:h=g,this.style.setProperty("--button-card-color",c)}this._config.aspect_ratio?(p["--aspect-ratio"]=this._config.aspect_ratio,h.position="absolute"):p.display="inline",this.style.setProperty("--button-card-light-color",this._getColorForLightEntity(this._stateObj,!0)),this.style.setProperty("--button-card-light-color-no-temperature",this._getColorForLightEntity(this._stateObj,!1)),this.style.setProperty("--button-card-ripple-color",c),d=Object.assign(Object.assign({},d),m),u=Object.assign(Object.assign({},u),_);let b="";null===(s=this._extraStyles)||void 0===s||s.forEach((t=>{const e=this._getTemplateOrValue(this._stateObj,t);b+=e?e.trim()+"\n":""})),b=b.trim();const y=b?L`
          <style>
            ${b}
          </style>
        `:L``,w=this._partialActionEval(this._config.hold_action);return L`
      ${y}
      <div id="aspect-ratio" style=${Ct(p)}>
        <ha-card
          id="card"
          class=${Et(v)}
          style=${Ct(h)}
          @wa-show=${this._tooltipShow}
          @action=${t=>this._handleAction(t,{isIcon:!1})}
          .actionHandler=${Nt({hasDoubleClick:this._isActionDoingSomething(this._stateObj,this._config.double_tap_action),hasHold:this._isActionDoingSomething(this._stateObj,this._config.hold_action),repeat:null==w?void 0:w.repeat,repeatLimit:null==w?void 0:w.repeat_limit,isMomentary:this._cardMomentary,disableKbd:null===(a=this._config)||void 0===a?void 0:a.disable_kbd})}
          .config="${this._config}"
        >
          ${this._buttonContent(this._stateObj,r,c)}
          <ha-ripple .disabled=${!this._cardRipple}></ha-ripple>
        </ha-card>
        ${this._getLock(d)} ${this._getSpinner(u,r)}
        ${this._getTooltip(f,r)}
      </div>
    `}_getTooltip(t,e){var i,n,o,s,a;let r,l;r="string"==typeof this._config.tooltip?{content:this._getTemplateOrValue(this._stateObj,this._config.tooltip)}:null!==(i=this._objectEvalTemplate(this._stateObj,this._config.tooltip))&&void 0!==i?i:{},l="string"==typeof(null==e?void 0:e.tooltip)?{content:this._getTemplateOrValue(this._stateObj,null==e?void 0:e.tooltip)}:null!==(n=this._objectEvalTemplate(this._stateObj,null==e?void 0:e.tooltip))&&void 0!==n?n:{};const c=Object.assign(Object.assign({},r),l);if(c&&c.content){const e=An(String(null!==(o=null==c?void 0:c.delay)&&void 0!==o?o:"150"),"ms","en"),i=An(String(null!==(a=null!==(s=null==c?void 0:c.hide_delay)&&void 0!==s?s:null==c?void 0:c.delay)&&void 0!==a?a:"150"),"ms","en"),n=!(null==c?void 0:c.arrow)||void 0;return L`
        <wa-tooltip
          id="tooltip"
          for="card"
          @wa-show=${this._tooltipShow}
          placement=${ht(c.placement||void 0)}
          distance=${ht(c.distance||void 0)}
          skidding=${ht(c.skidding||void 0)}
          show-delay=${e}
          hide-delay=${i}
          without-arrow=${n||U}
          style=${Ct(t)}
        >
          <span class="tooltip">${this._unsafeHTMLorNot(c.content)}</span>
        </wa-tooltip>
      `}return L``}_getSpinner(t,e){const i=this._getTemplateOrValue(this._stateObj,null==e?void 0:e.spinner)||this._getTemplateOrValue(this._stateObj,this._config.spinner);return this._spinnerActive||i?L`
        <div id="spinner" style=${Ct(t)}>
          <div id="spinner-background"></div>
          <ha-spinner></ha-spinner>
        </div>
      `:L``}_getLock(t){var e;return this._config.lock&&this._getTemplateOrValue(this._stateObj,this._config.lock.enabled)?L`
        <div
          id="overlay"
          style=${Ct(t)}
          @action=${this._handleUnlockType}
          .actionHandler=${Nt({hasDoubleClick:"double_tap"===this._config.lock.unlock,hasHold:"hold"===this._config.lock.unlock,disableKbd:null===(e=this._config)||void 0===e?void 0:e.disable_kbd})}
          .config="${this._config}"
        >
          <ha-icon id="lock" icon=${this._config.lock.lock_icon}></ha-icon>
        </div>
      `:L``}_buttonContent(t,e,i){const n=this._buildName(t,e),o=(null==e?void 0:e.state_display)||this._config.state_display||void 0,s=this._config.show_state&&o?this._getTemplateOrValue(t,o):void 0,a=void 0!==s?s:this._buildStateString(t),r=function(t,e){if(!t&&!e)return;let i;return i=e?t?`${t}: ${e}`:e:t,i}(n,a);switch(this._config.layout){case"icon_name_state":case"name_state":return this._gridHtml(t,e,this._config.layout,i,r,void 0);default:return this._gridHtml(t,e,this._config.layout,i,n,a)}}_unsafeHTMLorNot(t){return t.strings||t.values?t:xt(`${t}`)}_gridHtml(t,e,i,n,o,s){const a=this._getIconHtml(t,e,n),r=[i],l=this._buildLabel(t,e),c=this._buildStyleGeneric(t,e,"name"),h=this._buildStyleGeneric(t,e,"state"),d=this._buildStyleGeneric(t,e,"label"),u=this._buildLastChanged(t,d),p=this._buildStyleGeneric(t,e,"grid");return a||r.push("no-icon"),o||r.push("no-name"),s||r.push("no-state"),l||u||r.push("no-label"),L`
      <div id="container" class=${r.join(" ")} style=${Ct(p)}>
        ${a||""}
        ${o?L`
              <div id="name" class="ellipsis" style=${Ct(c)}>
                ${this._unsafeHTMLorNot(o)}
              </div>
            `:""}
        ${s?L`
              <div id="state" class="ellipsis" style=${Ct(h)}>
                ${this._unsafeHTMLorNot(s)}
              </div>
            `:""}
        ${l&&!u?L`
              <div id="label" class="ellipsis" style=${Ct(d)}>
                ${this._unsafeHTMLorNot(l)}
              </div>
            `:""}
        ${u||""} ${this._buildCustomFields(t,e)}
      </div>
    `}_getIconHtml(t,e,i){var n,o;const s=this._buildIcon(t,e),a=this._buildEntityPicture(t,e),r=this._buildStyleGeneric(t,e,"entity_picture"),l=this._buildStyleGeneric(t,e,"icon"),c=this._buildStyleGeneric(t,e,"img_cell"),h=this._buildStyleGeneric(t,e,"card"),d=Object.assign({color:i,width:this._config.size,"--ha-icon-display":h.height?"inline":void 0,position:this._config.aspect_ratio||h.height?"absolute":"relative"},l),u=Object.assign(Object.assign({},d),r),p={enabled:this._iconClickable},m=this._buildLiveStream(u),_=this._config.show_icon&&(s||t);if(_||a){let i;t&&(i=ve(t.entity_id));const r=this._partialActionEval(this._config.icon_hold_action);return L`
        <div id="img-cell" style=${Ct(c)}>
          ${!_||a||m?"":L`
                <ha-state-icon
                  class=${Et(p)}
                  .state=${t}
                  .stateObj=${t}
                  .hass=${this._hass}
                  ?data-domain=${i}
                  data-state=${ht(null==t?void 0:t.state)}
                  style=${Ct(d)}
                  .icon="${s}"
                  id="icon"
                  ?rotating=${this._rotate(e)}
                  @action=${this._hasIconActions?t=>this._handleAction(t,{isIcon:!0}):void 0}
                  @pointerenter=${this._hasIconActions?this._handleRippleIcon:void 0}
                  @pointerleave=${this._hasIconActions?this._handleRippleIcon:void 0}
                  @click=${this._hasIconActions?this._sendToParent:void 0}
                  @touchstart=${this._hasIconActions?this._sendToParent:void 0}
                  @mousedown=${this._hasIconActions?this._sendToParent:void 0}
                  @mouseup=${this._hasIconActions?this._sendToParent:void 0}
                  @touchend=${this._hasIconActions?this._sendToParent:void 0}
                  @touchcancel=${this._hasIconActions?this._sendToParent:void 0}
                  .actionHandler=${this._hasIconActions?Nt({hasDoubleClick:this._isActionDoingSomething(t,this._config.icon_double_tap_action),hasHold:this._isActionDoingSomething(t,this._config.icon_hold_action),repeat:null==r?void 0:r.repeat,repeatLimit:null==r?void 0:r.repeat_limit,isMomentary:this._iconMomentary,disableKbd:null===(n=this._config)||void 0===n?void 0:n.disable_kbd}):void 0}
                ></ha-state-icon>
              `}
          ${m||""}
          ${a&&!m?L`
                <img
                  class=${Et(p)}
                  src=${kt(a)}
                  style=${Ct(u)}
                  id="icon"
                  ?rotating=${this._rotate(e)}
                  draggable="false"
                  @action=${this._hasIconActions?t=>this._handleAction(t,{isIcon:!0}):void 0}
                  @pointerenter=${this._hasIconActions?this._handleRippleIcon:void 0}
                  @pointerleave=${this._hasIconActions?this._handleRippleIcon:void 0}
                  @click=${this._hasIconActions?this._sendToParent:void 0}
                  @touchstart=${this._hasIconActions?this._sendToParent:void 0}
                  @mousedown=${this._hasIconActions?this._sendToParent:void 0}
                  @mouseup=${this._hasIconActions?this._sendToParent:void 0}
                  @touchend=${this._hasIconActions?this._sendToParent:void 0}
                  @touchcancel=${this._hasIconActions?this._sendToParent:void 0}
                  .actionHandler=${this._hasIconActions?Nt({hasDoubleClick:this._isActionDoingSomething(t,this._config.icon_double_tap_action),hasHold:this._isActionDoingSomething(t,this._config.icon_hold_action),repeat:null==r?void 0:r.repeat,repeatLimit:null==r?void 0:r.repeat_limit,isMomentary:this._iconMomentary,disableKbd:null===(o=this._config)||void 0===o?void 0:o.disable_kbd}):void 0}
                />
              `:""}
        </div>
      `}}_buildLiveStream(t){return this._config.show_live_stream&&this._config.entity&&"camera"===ve(this._config.entity)?L`
        <hui-image
          .hass=${this._hass}
          .cameraImage=${this._config.entity}
          .entity=${this._config.entity}
          .cameraView=${"live"}
          .aspectRatio=${this._config.live_stream_aspect_ratio}
          .fitMode=${this._config.live_stream_fit_mode}
          style=${Ct(t)}
        ></hui-image>
      `:void 0}_configFromLLTemplates(t,e){var i;const n=e.template;let o={};if(n){let i;const s=n&&Array.isArray(n)?n:[n];null==s||s.forEach((e=>{var n;if(!(null===(n=t.config.button_card_templates)||void 0===n?void 0:n[e]))throw new Error(`Button-card template '${e}' is missing!`);const s=this._configFromLLTemplates(t,t.config.button_card_templates[e]);o=ye(o,s),i=we(i,s.state)})),o=ye(o,e),o.state=we(i,e.state)}else o=on(e);return o.extra_styles&&(null===(i=this._extraStyles)||void 0===i||i.push(o.extra_styles),delete o.extra_styles),o}setConfig(t){if(!t)throw new Error("Invalid configuration");this._initialSetupComplete&&(this._initialSetupComplete=!1),this._cards={},this._cardsConfig={},this._extraStyles=[];const e=Ae()||$e();let i=on(t);i=this._configFromLLTemplates(e,i),this._config=Object.assign(Object.assign({type:"custom:button-card",group_expand:!1,hold_action:{action:"none"},double_tap_action:{action:"none"},press_action:{action:"none"},release_action:{action:"none"},icon_tap_action:{action:"none"},icon_hold_action:{action:"none"},icon_double_tap_action:{action:"none"},icon_press_action:{action:"none"},icon_release_action:{action:"none"},layout:"vertical",size:"40%",color_type:"icon",show_name:!0,show_state:!1,show_icon:!0,show_units:!0,show_label:!1,show_entity_picture:!1,show_live_stream:!1,card_size:3},i),{lock:Object.assign({enabled:!1,duration:5,unlock:"tap",lock_icon:"mdi:lock-outline",unlock_icon:"mdi:lock-open-outline"},i.lock)}),this._initialSetupComplete||this._finishSetup()}_loopGroup(t){t&&t.forEach((t=>{var e,i;(null===(e=this._hass)||void 0===e?void 0:e.states[t])&&((null===(i=this._hass.states[t].attributes)||void 0===i?void 0:i.entity_id)?this._loopGroup(this._hass.states[t].attributes.entity_id):this._monitoredEntities.includes(t)||this._monitoredEntities.push(t))}))}_expandTriggerGroups(){var t;this._hass&&(null===(t=this._config)||void 0===t?void 0:t.group_expand)&&this._monitoredEntities&&this._monitoredEntities.forEach((t=>{var e,i,n,o,s;(null===(n=null===(i=null===(e=this._hass)||void 0===e?void 0:e.states[t])||void 0===i?void 0:i.attributes)||void 0===n?void 0:n.entity_id)&&this._loopGroup(null===(s=null===(o=this._hass)||void 0===o?void 0:o.states[t].attributes)||void 0===s?void 0:s.entity_id)}))}_updateTimerStart(){this._updateTimerMS=Date.now(),this._updateTimer()}_updateTimerCancel(){this._updateTimeout&&window.clearTimeout(this._updateTimeout)}_updateTimerChanged(){var t;if(null===(t=this._config)||void 0===t?void 0:t.update_timer){const t=this._getTemplateOrValue(this._stateObj,this._config.update_timer),e=An(t,"ms","en");if(e&&e>=100&&e!==this._updateTimerDuration)return!0}return!1}_updateTimer(){var t;if(this._updateTimeout&&(window.clearTimeout(this._updateTimeout),this._updateTimeout=void 0),null===(t=this._config)||void 0===t?void 0:t.update_timer){const t=this._getTemplateOrValue(this._stateObj,this._config.update_timer),e=An(t,"ms","en");e&&e>=100&&(this._updateTimerDuration=e,this._updateTimeout=window.setTimeout((()=>{this._updateRefresh()}),e))}}_updateRefresh(){this._updateTimerMS=Date.now(),this._updateTimeout=void 0}getCardSize(){var t;return(null===(t=this._config)||void 0===t?void 0:t.card_size)||3}getGridOptions(){var t;if(null===(t=this._config)||void 0===t?void 0:t.section_mode)return{rows:2,columns:6,min_rows:1,min_columns:1}}_partialActionEval(t){if(!t)return{action:"none"};if("string"==typeof t)return this._objectEvalTemplate(this._stateObj,t);const e=on(t);return["action","repeat","repeat_limit"].forEach((t=>{e[t]=this._getTemplateOrValue(this._stateObj,e[t])})),e}_evalActions(t,e){var i;let n;n="string"==typeof e?this._objectEvalTemplate(this._stateObj,e):on(e);const o=this._getTemplateOrValue(this._stateObj,null==n?void 0:n.action);if("none"===o||!o){const t={};return t[fe]={action:"none"},t}const s=this._getTemplateOrValue(this._stateObj,null==n?void 0:n.repeat),a=this._getTemplateOrValue(this._stateObj,null==n?void 0:n.repeat_limit),r=this._getTemplateOrValue(this._stateObj,null==n?void 0:n.sound);let l=this._getTemplateOrValue(this._stateObj,null==n?void 0:n.confirmation);!l&&t.confirmation&&(l=this._objectEvalTemplate(this._stateObj,t.confirmation));const c=this._getTemplateOrValue(this._stateObj,null==n?void 0:n.haptic),h=Object.assign(Object.assign({},this._objectEvalTemplate(this._stateObj,t.protect)),this._objectEvalTemplate(this._stateObj,null==n?void 0:n.protect)),d={};switch(o){case"javascript":d[fe]={action:"fire-dom-event",buttonCardCustomAction:{callback:this._customActionsCallback.bind(this),type:"javascript",data:{javascript:null==n?void 0:n.javascript}}};break;case"multi-actions":d[fe]={action:"fire-dom-event",buttonCardCustomAction:{callback:this._customActionsCallback.bind(this),type:"multi-actions",data:{multiActions:null==n?void 0:n.actions}}};break;case"toast":d[fe]={action:"fire-dom-event",buttonCardCustomAction:{callback:this._customActionsCallback.bind(this),type:"toast",data:{toast:null==n?void 0:n.toast}}};break;case"toggle":d.entity=this._getTemplateOrValue(this._stateObj,null==n?void 0:n.entity)||this._getTemplateOrValue(this._stateObj,t.entity),d[fe]={action:"toggle"};break;case"more-info":d.entity=this._getTemplateOrValue(this._stateObj,null==n?void 0:n.entity)||this._getTemplateOrValue(this._stateObj,t.entity),d[fe]={action:"more-info"};break;case"navigate":d[fe]={action:"navigate",navigation_path:this._getTemplateOrValue(this._stateObj,null==n?void 0:n.navigation_path),navigation_replace:this._getTemplateOrValue(this._stateObj,null==n?void 0:n.navigation_replace)};break;case"url":d[fe]={action:"url",url_path:this._getTemplateOrValue(this._stateObj,null==n?void 0:n.url_path)};break;case"perform-action":case"call-service":d[fe]={action:"perform-action",perform_action:this._getTemplateOrValue(this._stateObj,null==n?void 0:n.perform_action)||this._getTemplateOrValue(this._stateObj,null==n?void 0:n.service),data:this._objectEvalTemplate(this._stateObj,null==n?void 0:n.data)||this._objectEvalTemplate(this._stateObj,null==n?void 0:n.service_data),target:this._objectEvalTemplate(this._stateObj,null==n?void 0:n.target)},"entity"===(null===(i=d[fe].data)||void 0===i?void 0:i.entity_id)&&(d[fe].data.entity_id=this._getTemplateOrValue(this._stateObj,t.entity));break;case"assist":d[fe]={action:"assist",pipeline_id:this._getTemplateOrValue(this._stateObj,null==n?void 0:n.pipeline_id),start_listening:this._getTemplateOrValue(this._stateObj,null==n?void 0:n.start_listening)};break;case"fire-dom-event":d[fe]=Object.assign({action:"fire-dom-event"},this._objectEvalTemplate(this._stateObj,n));break;default:return{[fe]:{action:"none"}}}return d[fe]=Object.assign(Object.assign({},d[fe]),{repeat:s,repeat_limit:a,sound:r,haptic:c,confirmation:l,protect:h}),h&&(h.password||h.pin)&&(this._protectedAction=on(d)),d}_handleRippleIcon(t){this._ripple.then((e=>{var i,n;if(e)if("pointerenter"===t.type){const o=null!==(n=null===(i=t.target)||void 0===i?void 0:i.getBoundingClientRect())&&void 0!==n?n:null,s=e.getBoundingClientRect(),a={top:0,left:0,bottom:0,right:0},r=t.target?getComputedStyle(t.target):null,l=r?parseInt(r.getPropertyValue("--button-card-ripple-icon-inset-padding")):12;let c="";o&&s&&(a.top=o.top-s.top-l,a.top=a.top<0?0:a.top,a.left=o.left-s.left-l,a.left=a.left<0?0:a.left,a.bottom=s.bottom-o.bottom-l,a.bottom=a.bottom<0?0:a.bottom,a.right=s.right-o.right-l,a.right=a.right<0?0:a.right,c=`${a.top}px ${a.right}px ${a.bottom}px ${a.left}px`),e.setAttribute("icon",""),""!=c&&e.style.setProperty("--dynamic-ripple-icon-inset",c)}else"pointerleave"===t.type&&(e.removeAttribute("icon"),e.style.removeProperty("--dynamic-ripple-icon-inset"))}))}_hapticInterceptHandler(t){if(this._hapticCapture&&t.stopPropagation){"failure"!==t.detail&&t.stopPropagation()}}_handleAction(t,e){var i;if(e.isIcon&&this._hasIconActions&&t.stopPropagation&&t.stopPropagation(),null===(i=t.detail)||void 0===i?void 0:i.action){const i=this._config;if(!i)return;const n=t.detail.action,o=e.isIcon?`icon_${n}_action`:`${n}_action`;if(this._isActionDoingSomething(this._stateObj,i[o])){const t=this._evalActions(i,i[o]);this._buildActionConfig(t)}}}_buildActionConfig(t){var e,i,n,o;t&&((null===(i=null===(e=t[fe])||void 0===e?void 0:e.protect)||void 0===i?void 0:i.pin)?window.cardHelpers.showEnterCodeDialog(this,{submit:t=>this._protectedConfirmedCallback.bind(this)(t,"pin"),cancel:this._cancelledCallback.bind(this),codeFormat:"number"}):(null===(o=null===(n=t[fe])||void 0===n?void 0:n.protect)||void 0===o?void 0:o.password)?window.cardHelpers.showPromptDialog(this,{title:"Password",inputLabel:"Password",inputType:"password",confirm:t=>this._protectedConfirmedCallback.bind(this)(t,"password"),cancel:this._cancelledCallback.bind(this)}):this._executeAction(t))}_executeAction(t){var e,i;const n=null===(e=t[fe])||void 0===e?void 0:e.sound;if(n)if(je(n))xe(this._hass,n).then((t=>{new Audio(t.url).play()})).catch((()=>{console.error(`button-card: Error loading media source: ${n}`)}));else{new Audio(n).play()}const o=null===(i=t[fe])||void 0===i?void 0:i.haptic;this._hapticCapture=void 0!==o,(async(t,e,i,n)=>{Mt(t,"hass-action",{config:i,action:n})})(this,this._hass,t,"tap"),this._hapticCapture=!1,o&&"none"!=o&&Mt(this,"haptic",o)}async _customActionsCallback(t){var e,i,n,o,s,a,r,l,c;if(!t.detail||!t.detail.buttonCardCustomAction)return;const h=t.detail.buttonCardCustomAction;switch(h.type){case"javascript":this._getTemplateOrValue(this._stateObj,null===(e=h.data)||void 0===e?void 0:e.javascript);break;case"multi-actions":let t=null===(i=h.data)||void 0===i?void 0:i.multiActions;"string"==typeof t&&(t=this._objectEvalTemplate(this._stateObj,t));const d=t=>new Promise((e=>setTimeout(e,t)));if(Array.isArray(t)){this._spinnerActive=t.some((t=>"string"!=typeof t&&((null==t?void 0:t.delay)||(null==t?void 0:t.wait_completion))));for(const e of t)if("string"!=typeof e&&(null==e?void 0:e.delay)){let t=this._getTemplateOrValue(this._stateObj,e.delay);t=An(t||"","ms","en"),t&&await d(t)}else if("string"!=typeof e&&(null==e?void 0:e.wait_completion)){const t=e;await d(500);const i=this._getTemplateOrValue(this._stateObj,t.timeout);let n=0;const o=An(i||"","ms","en")||0;for(;(n<o||0===o)&&!this._getTemplateOrValue(this._stateObj,t.wait_completion);)await d(500),n+=500}else{const t=this._evalActions(this._config,e);null===(n=t[fe])||void 0===n||delete n.repeat,null===(o=t[fe])||void 0===o||delete o.repeat_limit,null===(s=t[fe])||void 0===s||delete s.sound,null===(a=t[fe])||void 0===a||delete a.haptic,null===(r=t[fe])||void 0===r||delete r.confirmation,null===(l=t[fe])||void 0===l||delete l.protect,this._executeAction(t)}this._spinnerActive=!1}break;case"toast":let u=null===(c=h.data)||void 0===c?void 0:c.toast;u=this._objectEvalTemplate(this._stateObj,u),this._sendToastMessage(u)}}_protectedConfirmedCallback(t,e){var i,n,o,s,a,r,l;if(this._protectedAction&&this._config)if(t===(null===(n=null===(i=this._protectedAction[fe])||void 0===i?void 0:i.protect)||void 0===n?void 0:n[e]))this._sendToastMessage({message:null===(s=null===(o=this._protectedAction[fe])||void 0===o?void 0:o.protect)||void 0===s?void 0:s.success_message}),null===(a=this._protectedAction[fe])||void 0===a||delete a.protect,this._executeAction(this._protectedAction);else{const t=null===(l=null===(r=this._protectedAction[fe])||void 0===r?void 0:r.protect)||void 0===l?void 0:l.failure_message;this._sendToastMessage({message:t||ge[e]})}this._protectedAction=void 0}_cancelledCallback(){this._protectedAction=void 0}_sendToastMessage(t){void 0!==(null==t?void 0:t.message)&&this.dispatchEvent(new CustomEvent("hass-notification",{bubbles:!0,composed:!0,detail:Object.assign({},t)}))}_handleUnlockType(t){const e=this._config;e&&e.lock.unlock===t.detail.action&&this._handleLock()}_handleLock(){var t,e,i;const n=this.shadowRoot.getElementById("lock");if(!n)return;if(this._config.lock.exemptions){if(!(null===(t=this._hass.user)||void 0===t?void 0:t.name)||!this._hass.user.id)return;let e=!1;if(this._config.lock.exemptions.forEach((t=>{var i,n;(!e&&t.user===(null===(i=this._hass.user)||void 0===i?void 0:i.id)||t.username===(null===(n=this._hass.user)||void 0===n?void 0:n.name))&&(e=!0)})),!e)return n.classList.add("invalid"),void window.setTimeout((()=>{n&&n.classList.remove("invalid")}),3e3)}const o=this.shadowRoot.getElementById("overlay");o.style.setProperty("pointer-events","none"),n&&(n.icon=this._config.lock.unlock_icon,(null===(i=null===(e=this._config)||void 0===e?void 0:e.lock)||void 0===i?void 0:i.keep_unlock_icon)||n.classList.add("hidden")),window.setTimeout((()=>{var t,e;o.style.setProperty("pointer-events",""),n&&((null===(e=null===(t=this._config)||void 0===t?void 0:t.lock)||void 0===e?void 0:e.keep_unlock_icon)||n.classList.remove("hidden"),n.icon=this._config.lock.lock_icon)}),1e3*this._config.lock.duration)}_stopPropagation(t){t.stopPropagation()}_sendToParent(t){var e,i,n;const o=(null===(e=t.type)||void 0===e?void 0:e.startsWith("touch"))?new TouchEvent(t.type,t):(null===(i=t.type)||void 0===i?void 0:i.startsWith("mouse"))?new MouseEvent(t.type,t):new CustomEvent(t.type,t);t.stopPropagation(),null===(n=this.parentElement)||void 0===n||n.dispatchEvent(o);const s=new CustomEvent(t.type,Object.assign(Object.assign({},t),{bubbles:!1,composed:!1,detail:{ignore:!0}}));this._ripple.then((t=>{var e;t&&(null===(e=t.parentElement)||void 0===e||e.dispatchEvent(s))}))}_tooltipShow(t){var e,i,n,o;if(t.stopPropagation(),(null===(e=t.detail)||void 0===e?void 0:e.card)&&t.detail.card!==this){const t=null===(i=this.shadowRoot)||void 0===i?void 0:i.querySelector("#tooltip");if(t){const e=null!==(n=t.hideDelay)&&void 0!==n?n:400;window.setTimeout((()=>{var e;null===(e=t.hide)||void 0===e||e.call(t)}),e)}}else{const e=new CustomEvent(t.type,Object.assign(Object.assign({},t),{bubbles:!0,composed:!0,detail:{card:this}}));null===(o=this.parentElement)||void 0===o||o.dispatchEvent(e)}}};t([ct()],Sn.prototype,"_hass",void 0),t([ct()],Sn.prototype,"_config",void 0),t([ct()],Sn.prototype,"_timeRemaining",void 0),t([ct()],Sn.prototype,"_updateTimerMS",void 0),t([ct({type:Boolean,reflect:!0})],Sn.prototype,"preview",void 0),t([ct({type:Boolean})],Sn.prototype,"_spinnerActive",void 0),t([
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function(t){return(e,i)=>((t,e,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&"object"!=typeof e&&Object.defineProperty(t,e,i),i))(e,i,{async get(){return await this.updateComplete,this.renderRoot?.querySelector(t)??null}})}("ha-ripple")],Sn.prototype,"_ripple",void 0),Sn=t([(t=>(e,i)=>{void 0!==i?i.addInitializer((()=>{customElements.define(t,e)})):customElements.define(t,e)})("button-card")],Sn);
