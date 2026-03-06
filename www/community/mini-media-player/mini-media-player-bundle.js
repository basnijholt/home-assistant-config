/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function t(t,e,i,r){var s,o=arguments.length,n=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(n=(o<3?s(n):o>3?s(e,i,n):s(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}const e=globalThis,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,r=Symbol(),s=new WeakMap;class o{constructor(t,e,i){if(this._$cssResult$=!0,i!==r)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=s.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&s.set(e,t))}return t}toString(){return this.cssText}}const n=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,r)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[r+1]),t[0]);return new o(i,t,r)},a=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new o("string"==typeof t?t:t+"",void 0,r))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:l,defineProperty:c,getOwnPropertyDescriptor:h,getOwnPropertyNames:p,getOwnPropertySymbols:u,getPrototypeOf:d}=Object,m=globalThis,g=m.trustedTypes,f=g?g.emptyScript:"",_=m.reactiveElementPolyfillSupport,v=(t,e)=>t,b={toAttribute(t,e){switch(e){case Boolean:t=t?f:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},y=(t,e)=>!l(t,e),w={attribute:!0,type:String,converter:b,reflect:!1,useDefault:!1,hasChanged:y};Symbol.metadata??=Symbol("metadata"),m.litPropertyMetadata??=new WeakMap;class $ extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=w){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(t,i,e);void 0!==r&&c(this.prototype,t,r)}}static getPropertyDescriptor(t,e,i){const{get:r,set:s}=h(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:r,set(e){const o=r?.call(this);s?.call(this,e),this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??w}static _$Ei(){if(this.hasOwnProperty(v("elementProperties")))return;const t=d(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(v("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(v("properties"))){const t=this.properties,e=[...p(t),...u(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,r)=>{if(i)t.adoptedStyleSheets=r.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const i of r){const r=document.createElement("style"),s=e.litNonce;void 0!==s&&r.setAttribute("nonce",s),r.textContent=i.cssText,t.appendChild(r)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,i);if(void 0!==r&&!0===i.reflect){const s=(void 0!==i.converter?.toAttribute?i.converter:b).toAttribute(e,i.type);this._$Em=t,null==s?this.removeAttribute(r):this.setAttribute(r,s),this._$Em=null}}_$AK(t,e){const i=this.constructor,r=i._$Eh.get(t);if(void 0!==r&&this._$Em!==r){const t=i.getPropertyOptions(r),s="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:b;this._$Em=r;const o=s.fromAttribute(e,t.type);this[r]=o??this._$Ej?.get(r)??o,this._$Em=null}}requestUpdate(t,e,i){if(void 0!==t){const r=this.constructor,s=this[t];if(i??=r.getPropertyOptions(t),!((i.hasChanged??y)(s,e)||i.useDefault&&i.reflect&&s===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:r,wrapped:s},o){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??e??this[t]),!0!==s||void 0!==o)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===r&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,r=this[e];!0!==t||this._$AL.has(e)||void 0===r||this.C(e,void 0,i,r)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach((t=>this._$ET(t,this[t]))),this._$EM()}updated(t){}firstUpdated(t){}}$.elementStyles=[],$.shadowRootOptions={mode:"open"},$[v("elementProperties")]=new Map,$[v("finalized")]=new Map,_?.({ReactiveElement:$}),(m.reactiveElementVersions??=[]).push("2.1.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const k=globalThis,x=k.trustedTypes,S=x?x.createPolicy("lit-html",{createHTML:t=>t}):void 0,E=`lit$${Math.random().toFixed(9).slice(2)}$`,A="?"+E,C=`<${A}>`,M=document,P=()=>M.createComment(""),O=t=>null===t||"object"!=typeof t&&"function"!=typeof t,L=Array.isArray,T="[ \t\n\f\r]",V=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,D=/-->/g,I=/>/g,z=RegExp(`>|${T}(?:([^\\s"'>=/]+)(${T}*=${T}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),j=/'/g,N=/"/g,R=/^(?:script|style|textarea|title)$/i,U=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),B=Symbol.for("lit-noChange"),H=Symbol.for("lit-nothing"),q=new WeakMap,G=M.createTreeWalker(M,129);function W(t,e){if(!L(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==S?S.createHTML(e):e}const F=(t,e)=>{const i=t.length-1,r=[];let s,o=2===e?"<svg>":3===e?"<math>":"",n=V;for(let e=0;e<i;e++){const i=t[e];let a,l,c=-1,h=0;for(;h<i.length&&(n.lastIndex=h,l=n.exec(i),null!==l);)h=n.lastIndex,n===V?"!--"===l[1]?n=D:void 0!==l[1]?n=I:void 0!==l[2]?(R.test(l[2])&&(s=RegExp("</"+l[2],"g")),n=z):void 0!==l[3]&&(n=z):n===z?">"===l[0]?(n=s??V,c=-1):void 0===l[1]?c=-2:(c=n.lastIndex-l[2].length,a=l[1],n=void 0===l[3]?z:'"'===l[3]?N:j):n===N||n===j?n=z:n===D||n===I?n=V:(n=z,s=void 0);const p=n===z&&t[e+1].startsWith("/>")?" ":"";o+=n===V?i+C:c>=0?(r.push(a),i.slice(0,c)+"$lit$"+i.slice(c)+E+p):i+E+(-2===c?e:p)}return[W(t,o+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),r]};class Z{constructor({strings:t,_$litType$:e},i){let r;this.parts=[];let s=0,o=0;const n=t.length-1,a=this.parts,[l,c]=F(t,e);if(this.el=Z.createElement(l,i),G.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(r=G.nextNode())&&a.length<n;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith("$lit$")){const e=c[o++],i=r.getAttribute(t).split(E),n=/([.?@])?(.*)/.exec(e);a.push({type:1,index:s,name:n[2],strings:i,ctor:"."===n[1]?Q:"?"===n[1]?tt:"@"===n[1]?et:K}),r.removeAttribute(t)}else t.startsWith(E)&&(a.push({type:6,index:s}),r.removeAttribute(t));if(R.test(r.tagName)){const t=r.textContent.split(E),e=t.length-1;if(e>0){r.textContent=x?x.emptyScript:"";for(let i=0;i<e;i++)r.append(t[i],P()),G.nextNode(),a.push({type:2,index:++s});r.append(t[e],P())}}}else if(8===r.nodeType)if(r.data===A)a.push({type:2,index:s});else{let t=-1;for(;-1!==(t=r.data.indexOf(E,t+1));)a.push({type:7,index:s}),t+=E.length-1}s++}}static createElement(t,e){const i=M.createElement("template");return i.innerHTML=t,i}}function Y(t,e,i=t,r){if(e===B)return e;let s=void 0!==r?i._$Co?.[r]:i._$Cl;const o=O(e)?void 0:e._$litDirective$;return s?.constructor!==o&&(s?._$AO?.(!1),void 0===o?s=void 0:(s=new o(t),s._$AT(t,i,r)),void 0!==r?(i._$Co??=[])[r]=s:i._$Cl=s),void 0!==s&&(e=Y(t,s._$AS(t,e.values),s,r)),e}class X{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,r=(t?.creationScope??M).importNode(e,!0);G.currentNode=r;let s=G.nextNode(),o=0,n=0,a=i[0];for(;void 0!==a;){if(o===a.index){let e;2===a.type?e=new J(s,s.nextSibling,this,t):1===a.type?e=new a.ctor(s,a.name,a.strings,this,t):6===a.type&&(e=new it(s,this,t)),this._$AV.push(e),a=i[++n]}o!==a?.index&&(s=G.nextNode(),o++)}return G.currentNode=M,r}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class J{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,r){this.type=2,this._$AH=H,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Y(this,t,e),O(t)?t===H||null==t||""===t?(this._$AH!==H&&this._$AR(),this._$AH=H):t!==this._$AH&&t!==B&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>L(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==H&&O(this._$AH)?this._$AA.nextSibling.data=t:this.T(M.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,r="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=Z.createElement(W(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===r)this._$AH.p(e);else{const t=new X(r,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=q.get(t.strings);return void 0===e&&q.set(t.strings,e=new Z(t)),e}k(t){L(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,r=0;for(const s of t)r===e.length?e.push(i=new J(this.O(P()),this.O(P()),this,this.options)):i=e[r],i._$AI(s),r++;r<e.length&&(this._$AR(i&&i._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class K{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,r,s){this.type=1,this._$AH=H,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=s,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=H}_$AI(t,e=this,i,r){const s=this.strings;let o=!1;if(void 0===s)t=Y(this,t,e,0),o=!O(t)||t!==this._$AH&&t!==B,o&&(this._$AH=t);else{const r=t;let n,a;for(t=s[0],n=0;n<s.length-1;n++)a=Y(this,r[i+n],e,n),a===B&&(a=this._$AH[n]),o||=!O(a)||a!==this._$AH[n],a===H?t=H:t!==H&&(t+=(a??"")+s[n+1]),this._$AH[n]=a}o&&!r&&this.j(t)}j(t){t===H?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Q extends K{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===H?void 0:t}}class tt extends K{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==H)}}class et extends K{constructor(t,e,i,r,s){super(t,e,i,r,s),this.type=5}_$AI(t,e=this){if((t=Y(this,t,e,0)??H)===B)return;const i=this._$AH,r=t===H&&i!==H||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,s=t!==H&&(i===H||r);r&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class it{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Y(this,t)}}(0,k.litHtmlPolyfillSupport)?.(Z,J),(k.litHtmlVersions??=[]).push("3.3.1");const rt=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class st extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const r=i?.renderBefore??e;let s=r._$litPart$;if(void 0===s){const t=i?.renderBefore??null;r._$litPart$=s=new J(e.insertBefore(P(),t),t,void 0,i??{})}return s._$AI(t),s})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return B}}st._$litElement$=!0,st.finalized=!0,rt.litElementHydrateSupport?.({LitElement:st});(0,rt.litElementPolyfillSupport)?.({LitElement:st}),(rt.litElementVersions??=[]).push("4.2.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ot=t=>(e,i)=>{void 0!==i?i.addInitializer((()=>{customElements.define(t,e)})):customElements.define(t,e)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,nt={attribute:!0,type:String,converter:b,reflect:!1,hasChanged:y},at=(t=nt,e,i)=>{const{kind:r,metadata:s}=i;let o=globalThis.litPropertyMetadata.get(s);if(void 0===o&&globalThis.litPropertyMetadata.set(s,o=new Map),"setter"===r&&((t=Object.create(t)).wrapped=!0),o.set(i.name,t),"accessor"===r){const{name:r}=i;return{set(i){const s=e.get.call(this);e.set.call(this,i),this.requestUpdate(r,s,t)},init(e){return void 0!==e&&this.C(r,void 0,t,e),e}}}if("setter"===r){const{name:r}=i;return function(i){const s=this[r];e.call(this,i),this.requestUpdate(r,s,t)}}throw Error("Unsupported decorator location: "+r)};function lt(t){return(e,i)=>"object"==typeof i?at(t,e,i):((t,e,i)=>{const r=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),r?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function ct(t){return lt({...t,state:!0,attribute:!1})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ht=1,pt=t=>(...e)=>({_$litDirective$:t,values:e});class ut{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const dt=pt(class extends ut{constructor(t){if(super(t),t.type!==ht||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in e)e[t]&&!this.nt?.has(t)&&this.st.add(t);return this.render(e)}const i=t.element.classList;for(const t of this.st)t in e||(i.remove(t),this.st.delete(t));for(const t in e){const r=!!e[t];r===this.st.has(t)||this.nt?.has(t)||(r?(i.add(t),this.st.add(t)):(i.remove(t),this.st.delete(t)))}return B}}),mt="important",gt=pt(class extends ut{constructor(t){if(super(t),t.type!==ht||"style"!==t.name||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,i)=>{const r=t[i];return null==r?e:e+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`}),"")}update(t,[e]){const{style:i}=t.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(e)),this.render(e);for(const t of this.ft)null==e[t]&&(this.ft.delete(t),t.includes("-")?i.removeProperty(t):i[t]=null);for(const t in e){const r=e[t];if(null!=r){this.ft.add(t);const e="string"==typeof r&&r.endsWith(" !important");t.includes("-")||e?i.setProperty(t,e?r.slice(0,-11):r,e?mt:""):i[t]=r}}return B}});
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ft=function(){if("undefined"!=typeof Map)return Map;function t(t,e){var i=-1;return t.some((function(t,r){return t[0]===e&&(i=r,!0)})),i}return function(){function e(){this.__entries__=[]}return Object.defineProperty(e.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),e.prototype.get=function(e){var i=t(this.__entries__,e),r=this.__entries__[i];return r&&r[1]},e.prototype.set=function(e,i){var r=t(this.__entries__,e);~r?this.__entries__[r][1]=i:this.__entries__.push([e,i])},e.prototype.delete=function(e){var i=this.__entries__,r=t(i,e);~r&&i.splice(r,1)},e.prototype.has=function(e){return!!~t(this.__entries__,e)},e.prototype.clear=function(){this.__entries__.splice(0)},e.prototype.forEach=function(t,e){void 0===e&&(e=null);for(var i=0,r=this.__entries__;i<r.length;i++){var s=r[i];t.call(e,s[1],s[0])}},e}()}(),_t="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,vt="undefined"!=typeof global&&global.Math===Math?global:"undefined"!=typeof self&&self.Math===Math?self:"undefined"!=typeof window&&window.Math===Math?window:Function("return this")(),bt="function"==typeof requestAnimationFrame?requestAnimationFrame.bind(vt):function(t){return setTimeout((function(){return t(Date.now())}),1e3/60)};var yt=["top","right","bottom","left","width","height","size","weight"],wt="undefined"!=typeof MutationObserver,$t=function(){function t(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(t,e){var i=!1,r=!1,s=0;function o(){i&&(i=!1,t()),r&&a()}function n(){bt(o)}function a(){var t=Date.now();if(i){if(t-s<2)return;r=!0}else i=!0,r=!1,setTimeout(n,e);s=t}return a}(this.refresh.bind(this),20)}return t.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},t.prototype.removeObserver=function(t){var e=this.observers_,i=e.indexOf(t);~i&&e.splice(i,1),!e.length&&this.connected_&&this.disconnect_()},t.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},t.prototype.updateObservers_=function(){var t=this.observers_.filter((function(t){return t.gatherActive(),t.hasActive()}));return t.forEach((function(t){return t.broadcastActive()})),t.length>0},t.prototype.connect_=function(){_t&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),wt?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},t.prototype.disconnect_=function(){_t&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},t.prototype.onTransitionEnd_=function(t){var e=t.propertyName,i=void 0===e?"":e;yt.some((function(t){return!!~i.indexOf(t)}))&&this.refresh()},t.getInstance=function(){return this.instance_||(this.instance_=new t),this.instance_},t.instance_=null,t}(),kt=function(t,e){for(var i=0,r=Object.keys(e);i<r.length;i++){var s=r[i];Object.defineProperty(t,s,{value:e[s],enumerable:!1,writable:!1,configurable:!0})}return t},xt=function(t){return t&&t.ownerDocument&&t.ownerDocument.defaultView||vt},St=Ot(0,0,0,0);function Et(t){return parseFloat(t)||0}function At(t){for(var e=[],i=1;i<arguments.length;i++)e[i-1]=arguments[i];return e.reduce((function(e,i){return e+Et(t["border-"+i+"-width"])}),0)}function Ct(t){var e=t.clientWidth,i=t.clientHeight;if(!e&&!i)return St;var r=xt(t).getComputedStyle(t),s=function(t){for(var e={},i=0,r=["top","right","bottom","left"];i<r.length;i++){var s=r[i],o=t["padding-"+s];e[s]=Et(o)}return e}(r),o=s.left+s.right,n=s.top+s.bottom,a=Et(r.width),l=Et(r.height);if("border-box"===r.boxSizing&&(Math.round(a+o)!==e&&(a-=At(r,"left","right")+o),Math.round(l+n)!==i&&(l-=At(r,"top","bottom")+n)),!function(t){return t===xt(t).document.documentElement}(t)){var c=Math.round(a+o)-e,h=Math.round(l+n)-i;1!==Math.abs(c)&&(a-=c),1!==Math.abs(h)&&(l-=h)}return Ot(s.left,s.top,a,l)}var Mt="undefined"!=typeof SVGGraphicsElement?function(t){return t instanceof xt(t).SVGGraphicsElement}:function(t){return t instanceof xt(t).SVGElement&&"function"==typeof t.getBBox};function Pt(t){return _t?Mt(t)?function(t){var e=t.getBBox();return Ot(0,0,e.width,e.height)}(t):Ct(t):St}function Ot(t,e,i,r){return{x:t,y:e,width:i,height:r}}var Lt=function(){function t(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=Ot(0,0,0,0),this.target=t}return t.prototype.isActive=function(){var t=Pt(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},t.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},t}(),Tt=function(t,e){var i=function(t){var e=t.x,i=t.y,r=t.width,s=t.height,o="undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object,n=Object.create(o.prototype);return kt(n,{x:e,y:i,width:r,height:s,top:i,right:e+r,bottom:s+i,left:e}),n}(e);kt(this,{target:t,contentRect:i})},Vt=function(){function t(t,e,i){if(this.activeObservations_=[],this.observations_=new ft,"function"!=typeof t)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=e,this.callbackCtx_=i}return t.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof xt(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)||(e.set(t,new Lt(t)),this.controller_.addObserver(this),this.controller_.refresh())}},t.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof xt(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)&&(e.delete(t),e.size||this.controller_.removeObserver(this))}},t.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},t.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach((function(e){e.isActive()&&t.activeObservations_.push(e)}))},t.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,e=this.activeObservations_.map((function(t){return new Tt(t.target,t.broadcastRect())}));this.callback_.call(t,e,t),this.clearActive()}},t.prototype.clearActive=function(){this.activeObservations_.splice(0)},t.prototype.hasActive=function(){return this.activeObservations_.length>0},t}(),Dt="undefined"!=typeof WeakMap?new WeakMap:new ft,It=function t(e){if(!(this instanceof t))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var i=$t.getInstance(),r=new Vt(e,i,this);Dt.set(this,r)};["observe","unobserve","disconnect"].forEach((function(t){It.prototype[t]=function(){var e;return(e=Dt.get(this))[t].apply(e,arguments)}}));var zt=void 0!==vt.ResizeObserver?vt.ResizeObserver:It;const jt={repeat:!0,shuffle:!0,power_state:!0,artwork_border:!0,icon_state:!0,sound_mode:!0,group_button:!1,runtime:!0,runtime_remaining:!0,volume:!1,volume_level:!0,controls:!1,play_pause:!1,play_stop:!0,prev:!1,next:!1,jump:!0,state_label:!1,progress:!1,icon:!1,name:!1,info:!1},Nt={OFF:"off",ALL:"all",ONE:"one"},Rt="mdi:chevron-down",Ut="mdi:speaker-multiple",Bt={true:"mdi:volume-off",false:"mdi:volume-high"},Ht="mdi:skip-next",qt={true:"mdi:pause",false:"mdi:play"},Gt="mdi:power",Wt="mdi:skip-previous",Ft="mdi:shuffle",Zt={[Nt.OFF]:"mdi:repeat-off",[Nt.ONE]:"mdi:repeat-once",[Nt.ALL]:"mdi:repeat"},Yt={true:"mdi:stop",false:"mdi:play"},Xt="mdi:volume-minus",Jt="mdi:volume-plus",Kt="mdi:fast-forward",Qt="mdi:rewind",te=["entity","groupMgmtEntity","_overflow","break","thumbnail","prevThumbnail","edit","idle","cardHeight","backgroundColor","foregroundColor"],ee=["media_duration","media_position","media_position_updated_at"],ie=[{attr:"media_title"},{attr:"media_artist"},{attr:"media_series_title"},{attr:"media_season",prefix:"S"},{attr:"media_episode",prefix:"E"},{attr:"media_channel"},{attr:"app_name"}],re="sonos",se="squeezebox",oe="soundtouch",ne="media_player",ae="heos";var le;!function(t){t.MORE_INFO="more-info",t.NAVIGATE="navigate",t.CALL_SERVICE="call-service",t.URL="url",t.FIRE_DOM_EVENT="fire-dom-event",t.NONE="none"}(le||(le={}));const ce=t=>{var e;(t=>{if(void 0===t.entity)throw new Error("You need to specify the required entity option.");if("media_player"!==t.entity.split(".")[0])throw new Error("Specify an entity from within the media_player domain.");if(void 0===t.type)throw new Error("You need to specify the required type option.")})(t);const i=Object.assign(Object.assign({artwork:"default",info:"default",group:!1,volume_stateless:!1,more_info:!0,source:"default",sound_mode:"default",toggle_power:!0,tap_action:{action:le.MORE_INFO},jump_amount:10},t),{hide:Object.assign(Object.assign({},jt),t.hide),speaker_group:Object.assign(Object.assign({show_group_count:!0,platform:"sonos",supports_master:!0,entities:[]},t.sonos),t.speaker_group),shortcuts:Object.assign({label:"Shortcuts..."},t.shortcuts),max_volume:null!==(e=Number(t.max_volume))&&void 0!==e?e:100,min_volume:Number(t.min_volume)||0});return i.collapse=i.hide.controls||i.hide.volume,i.info=i.collapse&&"scroll"!==i.info?"short":i.info,i.flow=i.hide.icon&&i.hide.name&&i.hide.info,i};var he;!function(t){t.PLAYING="playing",t.PAUSED="paused",t.IDLE="idle",t.OFF="off",t.ON="on",t.UNAVAILABLE="unavailable",t.UNKNOWN="unknown",t.STANDBY="standby"}(he||(he={}));class pe{constructor(t,e,i){this.hass=t||{},this.config=e||{},this.entity=i||{},this.state=i.state,this._entityId=i&&i.entity_id||this.config.entity,this._attr=i.attributes||{},this.idle=!!e.idle_view&&this.idleView,this._active=this.isActive}get id(){return this.entity.entity_id}get icon(){return this._attr.icon}get isPaused(){return this.state===he.PAUSED}get isPlaying(){return this.state===he.PLAYING}get isIdle(){return this.state===he.IDLE}get isStandby(){return this.state===he.STANDBY}get isUnavailable(){return this.state===he.UNAVAILABLE}get isOff(){return this.state===he.OFF}get isActive(){return!this.isOff&&!this.isUnavailable&&!this.idle||!1}get assumedState(){return this._attr.assumed_state||!1}get shuffle(){return this._attr.shuffle||!1}get repeat(){return this._attr.repeat||Nt.OFF}get content(){return this._attr.media_content_type||"none"}get mediaDuration(){return this._attr.media_duration||0}get updatedAt(){return this._attr.media_position_updated_at||0}get position(){return this._attr.media_position||0}get name(){return this._attr.friendly_name||""}get groupCount(){return this.group.length}get isGrouped(){return this.group.length>1}get group(){return this.platform===se?this._attr.sync_group||[]:this.platform===ne||this.platform===ae||this.platform===re?this._attr.group_members||[]:this._attr[`${this.platform}_group`]||[]}get platform(){return this.config.speaker_group.platform}get master(){return this.supportsMaster&&this.group[0]||this._entityId}get isMaster(){return this.master===this._entityId}get sources(){return this._attr.source_list||[]}get source(){return this._attr.source||""}get soundModes(){return this._attr.sound_mode_list||[]}get soundMode(){return this._attr.sound_mode||""}get muted(){return this._attr.is_volume_muted||!1}get vol(){return this._attr.volume_level||0}get picture(){return this._attr.entity_picture_local||this._attr.entity_picture}get hasArtwork(){return!!this.picture&&"none"!==this.config.artwork&&this._active&&!this.idle}get mediaInfo(){return ie.map((t=>Object.assign({text:this._attr[t.attr],prefix:""},t))).filter((t=>t.text))}get hasProgress(){var t;return!this.config.hide.progress&&!this.idle&&ee.every((t=>t in this._attr))&&(null!==(t=this._attr.media_duration)&&void 0!==t?t:-1)>-1}get supportsPrev(){return!!this._attr.supported_features&&(16|this._attr.supported_features)===this._attr.supported_features}get supportsNext(){return!!this._attr.supported_features&&(32|this._attr.supported_features)===this._attr.supported_features}get progress(){return this.isPlaying?this.position+(Date.now()-new Date(this.updatedAt).getTime())/1e3:this.position}get idleView(){const t=this.config.idle_view;return!!((null==t?void 0:t.when_idle)&&this.isIdle||(null==t?void 0:t.when_standby)&&this.isStandby||(null==t?void 0:t.when_paused)&&this.isPaused)||!(!this.updatedAt||!(null==t?void 0:t.after)||this.isPlaying)&&this.checkIdleAfter(t.after)}get trackIdle(){var t,e;return Boolean(this._active&&!this.isPlaying&&this.updatedAt&&(null===(e=null===(t=this.config)||void 0===t?void 0:t.idle_view)||void 0===e?void 0:e.after))}checkIdleAfter(t){const e=(Date.now()-new Date(this.updatedAt).getTime())/1e3;return this.idle=e>60*t,this._active=this.isActive,this.idle}get supportsShuffle(){return void 0!==this._attr.shuffle}get supportsRepeat(){return void 0!==this._attr.repeat}get supportsMute(){return void 0!==this._attr.is_volume_muted}get supportsVolumeSet(){return void 0!==this._attr.volume_level}get supportsMaster(){return this.platform!==se&&this.config.speaker_group.supports_master}async fetchArtwork(){const t=this._attr.entity_picture_local?this.hass.hassUrl(this.picture):this.picture;try{const e=await fetch(new Request(t)),i=(t=>{let e="";return[].slice.call(new Uint8Array(t)).forEach((t=>e+=String.fromCharCode(t))),window.btoa(e)})(await e.arrayBuffer());return`url(data:${e.headers.get("Content-Type")||"image/jpeg"};base64,${i})`}catch(t){return!1}}getAttribute(t){return this._attr[t]}toggle(t){return this.config.toggle_power?this.callService(t,"toggle"):this.isOff?this.callService(t,"turn_on"):void this.callService(t,"turn_off")}toggleMute(t){this.config.speaker_group.sync_volume?this.group.forEach((e=>{this.callService(t,"volume_mute",{entity_id:e,is_volume_muted:!this.muted})})):this.callService(t,"volume_mute",{is_volume_muted:!this.muted})}toggleShuffle(t){this.callService(t,"shuffle_set",{shuffle:!this.shuffle})}toggleRepeat(t){const e=Object.values(Nt),{length:i}=e,r=e.indexOf(this.repeat)-1,s=e[(r-1%i+i)%i];this.callService(t,"repeat_set",{repeat:s})}setSource(t,e){this.callService(t,"select_source",{source:e})}setMedia(t,e){this.callService(t,"play_media",Object.assign({},e))}play(t){this.callService(t,"media_play")}pause(t){this.callService(t,"media_pause")}playPause(t){this.callService(t,"media_play_pause")}playStop(t){this.isPlaying?this.callService(t,"media_stop"):this.callService(t,"media_play")}setSoundMode(t,e){this.callService(t,"select_sound_mode",{sound_mode:e})}next(t){this.callService(t,"media_next_track")}prev(t){this.callService(t,"media_previous_track")}stop(t){this.callService(t,"media_stop")}volumeUp(t){this.supportsVolumeSet&&this.config.volume_step&&this.config.volume_step>0?this.callService(t,"volume_set",{entity_id:this._entityId,volume_level:Math.min(this.vol+this.config.volume_step/100,1)}):this.callService(t,"volume_up")}volumeDown(t){this.supportsVolumeSet&&this.config.volume_step&&this.config.volume_step>0?this.callService(t,"volume_set",{entity_id:this._entityId,volume_level:Math.max(this.vol-this.config.volume_step/100,0)}):this.callService(t,"volume_down")}seek(t,e){this.callService(t,"media_seek",{seek_position:e})}jump(t,e){const i=this.progress+e,r=Math.min(Math.max(i,0),Number(this.mediaDuration)||i);this.callService(t,"media_seek",{seek_position:r})}setVolume(t,e){this.config.speaker_group.sync_volume&&this.config.speaker_group.entities?this.group.forEach((i=>{var r;const s=null===(r=this.config.speaker_group.entities)||void 0===r?void 0:r.find((t=>t.entity_id===i));if(void 0===s)return;let o=e;s.volume_offset&&(o+=s.volume_offset/100,o>1&&(o=1),o<0&&(o=0)),this.callService(t,"volume_set",{entity_id:i,volume_level:o})})):this.callService(t,"volume_set",{entity_id:this._entityId,volume_level:e})}handleGroupChange(t,e,i){const{platform:r}=this,s={entity_id:e};if(i)switch(s.master=this._entityId,r){case oe:return this.handleSoundtouch(t,this.isGrouped?"ADD_ZONE_SLAVE":"CREATE_ZONE",e);case se:return this.callService(t,"sync",{entity_id:this._entityId,other_player:e},se);case ne:case re:return this.callService(t,"join",{entity_id:this._entityId,group_members:e},ne);case ae:return this.callService(t,"join",{entity_id:this._entityId,group_members:this.group.concat("string"==typeof e?[e]:e)},ne);default:return this.callService(t,"join",s,r)}else switch(r){case oe:return this.handleSoundtouch(t,"REMOVE_ZONE_SLAVE",e);case se:return this.callService(t,"unsync",s,se);case ne:case re:return this.callService(t,"unjoin",{entity_id:e},ne);case ae:return this.callService(t,"unjoin",{entity_id:"string"==typeof e?e:e[0]},ne);default:return this.callService(t,"unjoin",s,r)}}handleSoundtouch(t,e,i){return this.callService(t,e,{master:this.master,slaves:i},oe,!0)}toggleScript(t,e,i={}){const[,r]=e.split(".");this.callService(t,r,Object.assign({},i),"script")}toggleService(t,e,i={}){t.stopPropagation();const[r,s]=e.split(".");this.hass.callService(r,s,Object.assign({},i))}callService(t,e,i,r="media_player",s=!1){t.stopPropagation(),this.hass.callService(r,e,Object.assign(Object.assign({},!s&&{entity_id:this._entityId}),i))}}const ue=n`
  :host {
    overflow: visible !important;
    display: block;
    --mmp-scale: var(--mini-media-player-scale, 1);
    --mmp-unit: calc(var(--mmp-scale) * 40px);
    --mmp-name-font-weight: var(--mini-media-player-name-font-weight, 400);
    --mmp-accent-color: var(--mini-media-player-accent-color, var(--accent-color, #f39c12));
    --mmp-base-color: var(--mini-media-player-base-color, var(--primary-text-color, #000));
    --mmp-overlay-color: var(--mini-media-player-overlay-color, rgba(0, 0, 0, 0.5));
    --mmp-overlay-color-stop: var(--mini-media-player-overlay-color-stop, 25%);
    --mmp-overlay-base-color: var(--mini-media-player-overlay-base-color, #fff);
    --mmp-overlay-accent-color: var(--mini-media-player-overlay-accent-color, --mmp-accent-color);
    --mmp-text-color: var(--mini-media-player-base-color, var(--primary-text-color, #000));
    --mmp-media-cover-info-color: var(--mini-media-player-media-cover-info-color, --mmp-text-color);
    --mmp-text-color-inverted: var(--disabled-text-color);
    --mmp-active-color: var(--mmp-accent-color);
    --mmp-button-color: var(--mini-media-player-button-color, rgba(255, 255, 255, 0.25));
    --mmp-icon-color: var(
      --mini-media-player-icon-color,
      var(--mini-media-player-base-color, var(--paper-item-icon-color, #44739e))
    );
    --mmp-icon-active-color: var(--paper-item-icon-active-color, --mmp-active-color);
    --mmp-info-opacity: 0.75;
    --mmp-bg-opacity: var(--mini-media-player-background-opacity, 1);
    --mmp-artwork-opacity: var(--mini-media-player-artwork-opacity, 1);
    --mmp-progress-height: var(--mini-media-player-progress-height, 6px);
    --mmp-border-radius: var(--ha-card-border-radius, 12px);
    --mdc-theme-primary: var(--mmp-text-color);
    --mdc-theme-on-primary: var(--mmp-text-color);
    --paper-checkbox-unchecked-color: var(--mmp-text-color);
    --paper-checkbox-label-color: var(--mmp-text-color);
    color: var(--mmp-text-color);
  }
  ha-card.--bg {
    --mmp-info-opacity: 0.75;
  }
  ha-card.--has-artwork[artwork='material'],
  ha-card.--has-artwork[artwork*='cover'] {
    --mmp-accent-color: var(
      --mini-media-player-overlay-accent-color,
      var(--mini-media-player-accent-color, var(--accent-color, #f39c12))
    );
    --mmp-text-color: var(--mmp-overlay-base-color);
    --mmp-text-color-inverted: #000;
    --mmp-active-color: rgba(255, 255, 255, 0.5);
    --mmp-icon-color: var(--mmp-text-color);
    --mmp-icon-active-color: var(--mmp-text-color);
    --mmp-info-opacity: 0.75;
    --disabled-color: var(--mini-media-player-overlay-color, rgba(255, 255, 255, 0.75)) !important;
    --mdc-theme-primary: var(--mmp-text-color);
    --mdc-theme-on-primary: var(--mmp-text-color);
    --paper-checkbox-unchecked-color: var(--mmp-text-color);
    --paper-checkbox-label-color: var(--mmp-text-color);
    --switch-checked-color: var(--mmp-accent-color);
    --switch-checked-button-color: var(--mmp-accent-color);
    --switch-checked-track-color: var(--mmp-accent-color);
    --switch-unchecked-color: var(--mmp-text-color);
    --switch-unchecked-button-color: var(--mmp-text-color);
    --switch-unchecked-track-color: var(--mmp-text-color);
    --mdc-text-field-fill-color: transparent;
    --mdc-text-field-ink-color: var(--mmp-text-color);
    --mdc-text-field-idle-line-color: var(--mmp-text-color);
    --mdc-text-field-label-ink-color: var(--mmp-text-color);
    --mdc-text-field-hover-line-color: var(--mmp-text-color);
    --mdc-ripple-color: var(--mmp-text-color);
    --text-field-padding: 0;
    color: var(--mmp-text-color);
  }
  ha-card {
    cursor: default;
    display: flex;
    background: transparent;
    overflow: visible;
    padding: 0;
    position: relative;
    color: inherit;
    font-size: calc(var(--mmp-unit) * 0.35);
    --mdc-icon-button-size: calc(var(--mmp-unit));
    --mdc-icon-size: calc(var(--mmp-unit) * 0.6);
  }
  ha-card.--group {
    box-shadow: none;
    border: none;
    --mmp-progress-height: var(--mini-media-player-progress-height, 4px);
    --mmp-border-radius: 0px
  }
  ha-card.--more-info {
    cursor: pointer;
  }
  .mmp__bg,
  .mmp-player,
  .mmp__container {
    border-radius: var(--mmp-border-radius);
  }
  .mmp__container {
    overflow: hidden;
    height: 100%;
    width: 100%;
    position: absolute;
    pointer-events: none;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }
  ha-card:before {
    content: '';
    padding-top: 0px;
    transition: padding-top 0.5s cubic-bezier(0.21, 0.61, 0.35, 1);
    will-change: padding-top;
  }
  ha-card.--initial .entity__artwork,
  ha-card.--initial .entity__icon {
    animation-duration: 0.001s;
  }
  ha-card.--initial:before,
  ha-card.--initial .mmp-player {
    transition: none;
  }
  header {
    display: none;
  }
  ha-card[artwork='full-cover'].--has-artwork:before {
    padding-top: 56%;
  }
  ha-card[artwork='full-cover'].--has-artwork[content='music']:before,
  ha-card[artwork='full-cover-fit'].--has-artwork:before {
    padding-top: 100%;
  }
  .mmp__bg {
    background: var(--ha-card-background, var(--card-background-color, var(--paper-card-background-color, white)));
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    opacity: var(--mmp-bg-opacity);
  }
  ha-card[artwork='material'].--has-artwork .mmp__bg,
  ha-card[artwork*='cover'].--has-artwork .mmp__bg {
    opacity: var(--mmp-artwork-opacity);
    background: transparent;
  }
  ha-card[artwork='material'].--has-artwork .cover {
    height: 100%;
    right: 0;
    left: unset;
    animation: fade-in 4s cubic-bezier(0.21, 0.61, 0.35, 1) !important;
  }
  ha-card[artwork='material'].--has-artwork .cover.--prev {
    animation: fade-in 1s linear reverse forwards !important;
  }
  ha-card[artwork='material'].--has-artwork .cover-gradient {
    position: absolute;
    height: 100%;
    right: 0;
    left: 0;
    opacity: 1;
  }
  ha-card.--group .mmp__bg {
    background: transparent;
  }
  ha-card.--inactive .cover {
    opacity: 0;
  }
  ha-card.--inactive .cover.--bg {
    opacity: 1;
  }
  .cover-gradient {
    transition: opacity 0.45s linear;
    opacity: 0;
  }
  .cover,
  .cover:before {
    display: block;
    opacity: 0;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transition: opacity 0.75s linear, width 0.05s cubic-bezier(0.21, 0.61, 0.35, 1);
    will-change: opacity;
  }
  .cover:before {
    content: '';
    background: var(--mmp-overlay-color);
  }
  .cover {
    animation: fade-in 0.5s cubic-bezier(0.21, 0.61, 0.35, 1);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    border-radius: var(--mmp-border-radius, 0);
    overflow: hidden;
  }
  .cover.--prev {
    animation: fade-in 0.5s linear reverse forwards;
  }
  .cover.--bg {
    opacity: 1;
  }
  ha-card[artwork*='full-cover'].--has-artwork .mmp-player {
    background: linear-gradient(to top, var(--mmp-overlay-color) var(--mmp-overlay-color-stop), transparent 100%);
  }
  ha-card.--has-artwork .cover,
  ha-card.--has-artwork[artwork='cover'] .cover:before {
    opacity: 0.999;
  }
  ha-card[artwork='default'] .cover {
    display: none;
  }
  ha-card.--bg .cover {
    display: block;
  }
  ha-card[artwork='material'].--has-artwork .cover {
    background-size: cover;
  }
  ha-card[artwork='full-cover-fit'].--has-artwork .cover {
    background-color: black;
    background-size: contain;
  }
  .mmp-player {
    align-self: flex-end;
    box-sizing: border-box;
    position: relative;
    padding: 16px;
    transition: padding 0.25s ease-out;
    width: 100%;
    will-change: padding;
  }
  ha-card.--group .mmp-player {
    padding: 2px 0;
  }
  .flex {
    display: flex;
    display: -ms-flexbox;
    display: -webkit-flex;
    flex-direction: row;
  }
  .mmp-player__core {
    position: relative;
  }
  .entity__info {
    justify-content: center;
    display: flex;
    flex-direction: column;
    margin-left: 8px;
    position: relative;
    overflow: hidden;
    user-select: none;
  }
  ha-card.--rtl .entity__info {
    margin-left: auto;
    margin-right: calc(var(--mmp-unit) / 5);
  }
  ha-card[content='movie'] .attr__media_season,
  ha-card[content='movie'] .attr__media_episode {
    display: none;
  }
  .entity__icon {
    color: var(--mmp-icon-color);
  }
  .entity__icon[color] {
    color: var(--mmp-icon-active-color);
  }
  .entity__artwork,
  .entity__icon {
    animation: fade-in 0.25s ease-out;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 100%;
    height: var(--mmp-unit);
    width: var(--mmp-unit);
    min-width: var(--mmp-unit);
    line-height: var(--mmp-unit);
    margin-right: calc(var(--mmp-unit) / 5);
    position: relative;
    text-align: center;
    will-change: border-color;
    transition: border-color 0.25s ease-out;
  }
  ha-card.--rtl .entity__artwork,
  ha-card.--rtl .entity__icon {
    margin-right: auto;
  }
  .entity__artwork[border] {
    border: 2px solid var(--primary-text-color);
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
  }
  .entity__artwork[border][state='playing'] {
    border-color: var(--mmp-accent-color);
  }
  .entity__info__name,
  .entity__info__media[short] {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .entity__info__name {
    line-height: calc(var(--mmp-unit) / 2);
    color: var(--mmp-text-color);
    font-weight: var(--mmp-name-font-weight);
  }
  .entity__info__media {
    color: var(--secondary-text-color);
    max-height: 6em;
    word-break: break-word;
    opacity: var(--mmp-info-opacity);
    transition: color 0.5s;
    -webkit-text-size-adjust: 100%;
  }
  .entity__info__media[short] {
    max-height: calc(var(--mmp-unit) / 2);
    overflow: hidden;
  }
  .attr__app_name {
    display: none;
  }
  .attr__app_name:first-child,
  .attr__app_name:first-of-type {
    display: inline;
  }
  .mmp-player__core[inactive] .entity__info__media {
    color: var(--mmp-text-color);
    max-width: 200px;
    opacity: 0.5;
  }
  .entity__info__media[short-scroll] {
    max-height: calc(var(--mmp-unit) / 2);
    white-space: nowrap;
  }
  .entity__info__media[scroll] > span {
    visibility: hidden;
  }
  .entity__info__media[scroll] > div {
    animation: move linear infinite;
  }
  .entity__info__media[scroll] .marquee {
    animation: slide linear infinite;
  }
  .entity__info__media[scroll] .marquee,
  .entity__info__media[scroll] > div {
    animation-duration: inherit;
    visibility: visible;
  }
  .entity__info__media[scroll] {
    animation-duration: 10s;
    mask-image: linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%);
    -webkit-mask-image: linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%);
  }
  .marquee {
    visibility: hidden;
    position: absolute;
    white-space: nowrap;
  }
  ha-card[artwork*='cover'].--has-artwork .entity__info__media,
  ha-card.--bg .entity__info__media {
    color: var(--mmp-media-cover-info-color);
  }
  .entity__info__media span:before {
    content: ' - ';
  }
  .entity__info__media span:first-of-type:before {
    content: '';
  }
  .entity__info__media span:empty {
    display: none;
  }
  .mmp-player__adds {
    margin-left: calc(var(--mmp-unit) * 1.2);
    position: relative;
  }
  ha-card.--rtl .mmp-player__adds {
    margin-left: auto;
    margin-right: calc(var(--mmp-unit) * 1.2);
  }
  .mmp-player__adds > *:nth-child(2) {
    margin-top: 0px;
  }
  mmp-powerstrip {
    flex: 1;
    justify-content: flex-end;
    margin-right: 0;
    margin-left: auto;
    width: auto;
    max-width: 100%;
  }
  mmp-media-controls {
    flex-wrap: wrap;
  }
  ha-card.--flow mmp-powerstrip {
    justify-content: space-between;
    margin-left: auto;
  }
  ha-card.--flow.--rtl mmp-powerstrip {
    margin-right: auto;
  }
  ha-card.--flow .entity__info {
    display: none;
  }
  ha-card.--responsive .mmp-player__adds {
    margin-left: 0;
  }
  ha-card.--responsive.--rtl .mmp-player__adds {
    margin-right: 0;
  }
  ha-card.--responsive .mmp-player__adds > mmp-media-controls {
    padding: 0;
  }
  ha-card.--progress .mmp-player {
    padding-bottom: calc(16px + calc(var(--mini-media-player-progress-height, 6px) - 6px));
  }
  ha-card.--progress.--group .mmp-player {
    padding-bottom: calc(10px + calc(var(--mini-media-player-progress-height, 6px) - 6px));
  }
  ha-card.--runtime .mmp-player {
    padding-bottom: calc(16px + 16px + var(--mini-media-player-progress-height, 0px));
  }
  ha-card.--runtime.--group .mmp-player {
    padding-bottom: calc(16px + 12px + var(--mini-media-player-progress-height, 0px));
  }
  ha-card.--inactive .mmp-player {
    padding: 16px;
  }
  ha-card.--inactive.--group .mmp-player {
    padding: 2px 0;
  }
  .mmp-player div:empty {
    display: none;
  }
  @keyframes slide {
    100% {
      transform: translateX(-100%);
    }
  }
  @keyframes move {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }
  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  ha-switch {
    padding: 16px 6px;
  }
`,de=n`
  .ellipsis {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .label {
    margin: 0 8px;
  }
  ha-icon {
    width: calc(var(--mmp-unit) * 0.6);
    height: calc(var(--mmp-unit) * 0.6);
  }
  ha-icon-button {
    width: var(--mmp-unit);
    height: var(--mmp-unit);
    color: var(--mmp-text-color, var(--primary-text-color));
    transition: color 0.25s;
  }
  ha-icon-button[color] {
    color: var(--mmp-accent-color, var(--accent-color)) !important;
    opacity: 1 !important;
  }
  ha-icon-button[inactive] {
    opacity: 0.5;
  }
  ha-icon-button ha-icon,
  mmp-icon-button ha-icon {
    display: flex;
  }
`;var me=(t,e,i,r,s)=>{let o;switch(r.action){case"more-info":o=new Event("hass-more-info",{composed:!0}),o.detail={entityId:r.entity||s},t.dispatchEvent(o);break;case"navigate":if(!r.navigation_path)return;window.history.pushState(null,"",r.navigation_path),o=new Event("location-changed",{composed:!0}),o.detail={replace:!1},window.dispatchEvent(o);break;case"call-service":{if(!r.service)return;const[t,i]=r.service.split(".",2),s={...r.service_data};e.callService(t,i,s);break}case"url":if(!r.url)return;r.new_tab?window.open(r.url,"_blank"):window.location.href=r.url;break;case"fire-dom-event":o=new Event("ll-custom",{composed:!0,bubbles:!0}),o.detail=r,t.dispatchEvent(o)}r.haptic&&((t,e)=>{const i=new Event("haptic",{composed:!0});i.detail={haptic:e},t.dispatchEvent(i)})(t,r.haptic)};class ge{constructor(t,e){this.pixels=t,this.opts=e;const{sigBits:i}=e,r=(t,e,r)=>(t<<2*i)+(e<<i)+r;this.getColorIndex=r;const s=8-i,o=new Uint32Array(1<<3*i);let n,a,l,c,h,p,u,d,m,g;n=l=h=0,a=c=p=Number.MAX_VALUE;const f=t.length/4;let _=0;for(;_<f;){const e=4*_;if(_++,u=t[e+0],d=t[e+1],m=t[e+2],g=t[e+3],0===g)continue;u>>=s,d>>=s,m>>=s;const i=r(u,d,m);void 0===o[i]&&(o[i]=0),o[i]+=1,u>n&&(n=u),u<a&&(a=u),d>l&&(l=d),d<c&&(c=d),m>h&&(h=m),m<p&&(p=m)}this._colorCount=o.reduce(((t,e)=>e>0?t+1:t),0),this.hist=o,this.rmax=n,this.rmin=a,this.gmax=l,this.gmin=c,this.bmax=h,this.bmin=p}get colorCount(){return this._colorCount}}function fe(t,...e){return e.forEach((e=>{if(e)for(const i in e)if(e.hasOwnProperty(i)){const r=e[i];Array.isArray(r)?t[i]=r.slice(0):"object"==typeof r?(t[i]||(t[i]={}),fe(t[i],r)):t[i]=r}})),t}class _e{constructor(t,e={}){this._src=t,this._opts=fe({},$e.DefaultOpts,e)}maxColorCount(t){return this._opts.colorCount=t,this}maxDimension(t){return this._opts.maxDimension=t,this}addFilter(t){return this._opts.filters?this._opts.filters.push(t):this._opts.filters=[t],this}removeFilter(t){if(this._opts.filters){const e=this._opts.filters.indexOf(t);e>0&&this._opts.filters.splice(e)}return this}clearFilters(){return this._opts.filters=[],this}quality(t){return this._opts.quality=t,this}useImageClass(t){return this._opts.ImageClass=t,this}useGenerator(t,e){return this._opts.generators||(this._opts.generators=[]),this._opts.generators.push(e?{name:t,options:e}:t),this}useQuantizer(t,e){return this._opts.quantizer=e?{name:t,options:e}:t,this}build(){return new $e(this._src,this._opts)}getPalette(){return this.build().getPalette()}}class ve{constructor(t){this.pipeline=t,this._map={}}names(){return Object.keys(this._map)}has(t){return!!this._map[t]}get(t){return this._map[t]}register(t,e){return this._map[t]=e,this.pipeline}}function be(t,e,i){let r,s,o;function n(t,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?t+6*(e-t)*i:i<.5?e:i<2/3?t+(e-t)*(2/3-i)*6:t}if(0===e)r=s=o=i;else{const a=i<.5?i*(1+e):i+e-i*e,l=2*i-a;r=n(l,a,t+1/3),s=n(l,a,t),o=n(l,a,t-1/3)}return[255*r,255*s,255*o]}class ye{static applyFilters(t,e){return e.length>0?t.filter((({r:t,g:i,b:r})=>{var s;for(let o=0;o<e.length;o++)if(!(null==(s=e[o])?void 0:s.call(e,t,i,r,255)))return!1;return!0})):t}static clone(t){return new ye(t._rgb,t._population)}get r(){return this._rgb[0]}get g(){return this._rgb[1]}get b(){return this._rgb[2]}get rgb(){return this._rgb}get hsl(){if(!this._hsl){const[t,e,i]=this._rgb;this._hsl=function(t,e,i){t/=255,e/=255,i/=255;const r=Math.max(t,e,i),s=Math.min(t,e,i);let o=0,n=0;const a=(r+s)/2;if(r!==s){const l=r-s;switch(n=a>.5?l/(2-r-s):l/(r+s),r){case t:o=(e-i)/l+(e<i?6:0);break;case e:o=(i-t)/l+2;break;case i:o=(t-e)/l+4}o/=6}return[o,n,a]}(t,e,i)}return this._hsl}get hex(){if(!this._hex){const[t,e,i]=this._rgb;this._hex=function(t,e,i){return"#"+((1<<24)+(t<<16)+(e<<8)+i).toString(16).slice(1,7)}(t,e,i)}return this._hex}get population(){return this._population}toJSON(){return{rgb:this.rgb,population:this.population}}getYiq(){if(!this._yiq){const t=this._rgb;this._yiq=(299*t[0]+587*t[1]+114*t[2])/1e3}return this._yiq}get titleTextColor(){return this._titleTextColor||(this._titleTextColor=this.getYiq()<200?"#fff":"#000"),this._titleTextColor}get bodyTextColor(){return this._bodyTextColor||(this._bodyTextColor=this.getYiq()<150?"#fff":"#000"),this._bodyTextColor}constructor(t,e){this._rgb=t,this._population=e}}const we=class t{constructor(e,i){this._src=e,this.opts=fe({},t.DefaultOpts,i)}static use(t){this._pipeline=t}static from(t){return new _e(t)}get result(){return this._result}_process(e,i){e.scaleDown(this.opts);const r=function(t,e){const{colorCount:i,quantizer:r,generators:s,filters:o}=t,n={colorCount:i},a="string"==typeof r?{name:r,options:{}}:r;return a.options=fe({},n,a.options),fe({},{quantizer:a,generators:s,filters:o},e)}(this.opts,i);return t._pipeline.process(e.getImageData(),r)}async getPalette(){const t=new this.opts.ImageClass;try{const e=await t.load(this._src),i=await this._process(e,{generators:["default"]});this._result=i;const r=i.palettes.default;if(!r)throw new Error("Something went wrong and a palette was not found, please file a bug against our GitHub repo: https://github.com/vibrant-Colors/node-vibrant/");return t.remove(),r}catch(e){return t.remove(),Promise.reject(e)}}async getPalettes(){const t=new this.opts.ImageClass;try{const e=await t.load(this._src),i=await this._process(e,{generators:["*"]});this._result=i;const r=i.palettes;return t.remove(),r}catch(e){return t.remove(),Promise.reject(e)}}};we.DefaultOpts={colorCount:64,quality:5,filters:[]};let $e=we;$e.DefaultOpts.quantizer="mmcq",$e.DefaultOpts.generators=["default"],$e.DefaultOpts.filters=["default"],$e.DefaultOpts.ImageClass=class extends class{scaleDown(t){const e=this.getWidth(),i=this.getHeight();let r=1;if(t.maxDimension>0){const s=Math.max(e,i);s>t.maxDimension&&(r=t.maxDimension/s)}else r=1/t.quality;r<1&&this.resize(e*r,i*r,r)}}{_getCanvas(){if(!this._canvas)throw new Error("Canvas is not initialized");return this._canvas}_getContext(){if(!this._context)throw new Error("Context is not initialized");return this._context}_getWidth(){if(!this._width)throw new Error("Width is not initialized");return this._width}_getHeight(){if(!this._height)throw new Error("Height is not initialized");return this._height}_initCanvas(){const t=this.image;if(!t)throw new Error("Image is not initialized");const e=this._canvas=document.createElement("canvas"),i=e.getContext("2d");if(!i)throw new ReferenceError("Failed to create canvas context");this._context=i,e.className="@vibrant/canvas",e.style.display="none",this._width=e.width=t.width,this._height=e.height=t.height,i.drawImage(t,0,0),document.body.appendChild(e)}load(t){let e,i;if("string"==typeof t)e=document.createElement("img"),i=t,function(t){const e=new URL(t,location.href);return e.protocol===location.protocol&&e.host===location.host&&e.port===location.port}(i)||function(t,e){const i=new URL(t),r=new URL(e);return i.protocol===r.protocol&&i.hostname===r.hostname&&i.port===r.port}(window.location.href,i)||(e.crossOrigin="anonymous"),e.src=i;else{if(!(t instanceof HTMLImageElement))return Promise.reject(new Error("Cannot load buffer as an image in browser"));e=t,i=t.src}return this.image=e,new Promise(((t,r)=>{const s=()=>{this._initCanvas(),t(this)};e.complete?s():(e.onload=s,e.onerror=t=>r(new Error(`Fail to load image: ${i}`)))}))}clear(){this._getContext().clearRect(0,0,this._getWidth(),this._getHeight())}update(t){this._getContext().putImageData(t,0,0)}getWidth(){return this._getWidth()}getHeight(){return this._getHeight()}resize(t,e,i){if(!this.image)throw new Error("Image is not initialized");this._width=this._getCanvas().width=t,this._height=this._getCanvas().height=e,this._getContext().scale(i,i),this._getContext().drawImage(this.image,0,0)}getPixelCount(){return this._getWidth()*this._getHeight()}getImageData(){return this._getContext().getImageData(0,0,this._getWidth(),this._getHeight())}remove(){this._canvas&&this._canvas.parentNode&&this._canvas.parentNode.removeChild(this._canvas)}};class ke{constructor(t,e,i,r,s,o,n){this.histogram=n,this._volume=-1,this._avg=null,this._count=-1,this.dimension={r1:t,r2:e,g1:i,g2:r,b1:s,b2:o}}static build(t){const e=new ge(t,{sigBits:5}),{rmin:i,rmax:r,gmin:s,gmax:o,bmin:n,bmax:a}=e;return new ke(i,r,s,o,n,a,e)}invalidate(){this._volume=this._count=-1,this._avg=null}volume(){if(this._volume<0){const{r1:t,r2:e,g1:i,g2:r,b1:s,b2:o}=this.dimension;this._volume=(e-t+1)*(r-i+1)*(o-s+1)}return this._volume}count(){if(this._count<0){const{hist:t,getColorIndex:e}=this.histogram,{r1:i,r2:r,g1:s,g2:o,b1:n,b2:a}=this.dimension;let l=0;for(let c=i;c<=r;c++)for(let i=s;i<=o;i++)for(let r=n;r<=a;r++){const s=e(c,i,r);t[s]&&(l+=t[s])}this._count=l}return this._count}clone(){const{histogram:t}=this,{r1:e,r2:i,g1:r,g2:s,b1:o,b2:n}=this.dimension;return new ke(e,i,r,s,o,n,t)}avg(){if(!this._avg){const{hist:t,getColorIndex:e}=this.histogram,{r1:i,r2:r,g1:s,g2:o,b1:n,b2:a}=this.dimension;let l=0;const c=8;let h,p,u;h=p=u=0;for(let d=i;d<=r;d++)for(let i=s;i<=o;i++)for(let r=n;r<=a;r++){const s=t[e(d,i,r)];s&&(l+=s,h+=s*(d+.5)*c,p+=s*(i+.5)*c,u+=s*(r+.5)*c)}this._avg=l?[~~(h/l),~~(p/l),~~(u/l)]:[~~(c*(i+r+1)/2),~~(c*(s+o+1)/2),~~(c*(n+a+1)/2)]}return this._avg}contains(t){let[e,i,r]=t;const{r1:s,r2:o,g1:n,g2:a,b1:l,b2:c}=this.dimension;return e>>=3,i>>=3,r>>=3,e>=s&&e<=o&&i>=n&&i<=a&&r>=l&&r<=c}split(){const{hist:t,getColorIndex:e}=this.histogram,{r1:i,r2:r,g1:s,g2:o,b1:n,b2:a}=this.dimension,l=this.count();if(!l)return[];if(1===l)return[this.clone()];const c=r-i+1,h=o-s+1,p=a-n+1,u=Math.max(c,h,p);let d,m,g=null;d=m=0;let f=null;if(u===c){f="r",g=new Uint32Array(r+1);for(let l=i;l<=r;l++){d=0;for(let i=s;i<=o;i++)for(let r=n;r<=a;r++){const s=e(l,i,r);t[s]&&(d+=t[s])}m+=d,g[l]=m}}else if(u===h){f="g",g=new Uint32Array(o+1);for(let l=s;l<=o;l++){d=0;for(let s=i;s<=r;s++)for(let i=n;i<=a;i++){const r=e(s,l,i);t[r]&&(d+=t[r])}m+=d,g[l]=m}}else{f="b",g=new Uint32Array(a+1);for(let l=n;l<=a;l++){d=0;for(let n=i;n<=r;n++)for(let i=s;i<=o;i++){const r=e(n,i,l);t[r]&&(d+=t[r])}m+=d,g[l]=m}}let _=-1;const v=new Uint32Array(g.length);for(let t=0;t<g.length;t++){const e=g[t];e&&(_<0&&e>m/2&&(_=t),v[t]=m-e)}const b=this;return function(t){const e=t+"1",i=t+"2",r=b.dimension[e];let s=b.dimension[i];const o=b.clone(),n=b.clone(),a=_-r,l=s-_;for(a<=l?(s=Math.min(s-1,~~(_+l/2)),s=Math.max(0,s)):(s=Math.max(r,~~(_-1-a/2)),s=Math.min(b.dimension[i],s));!g[s];)s++;let c=v[s];for(;!c&&g[s-1];)c=v[--s];return o.dimension[i]=s,n.dimension[e]=s+1,[o,n]}(f)}}class xe{_sort(){this._sorted||(this.contents.sort(this._comparator),this._sorted=!0)}constructor(t){this._comparator=t,this.contents=[],this._sorted=!1}push(t){this.contents.push(t),this._sorted=!1}peek(t){return this._sort(),t="number"==typeof t?t:this.contents.length-1,this.contents[t]}pop(){return this._sort(),this.contents.pop()}size(){return this.contents.length}map(t){return this._sort(),this.contents.map(t)}}function Se(t,e){let i=t.size();for(;t.size()<e;){const e=t.pop();if(!(e&&e.count()>0))break;{const[r,s]=e.split();if(!r)break;if(t.push(r),s&&s.count()>0&&t.push(s),t.size()===i)break;i=t.size()}}}const Ee={targetDarkLuma:.26,maxDarkLuma:.45,minLightLuma:.55,targetLightLuma:.74,minNormalLuma:.3,targetNormalLuma:.5,maxNormalLuma:.7,targetMutesSaturation:.3,maxMutesSaturation:.4,targetVibrantSaturation:1,minVibrantSaturation:.35,weightSaturation:3,weightLuma:6.5,weightPopulation:.5};function Ae(t,e,i,r,s,o,n,a,l,c){let h=null,p=0;return e.forEach((e=>{const[,u,d]=e.hsl;if(u>=a&&u<=l&&d>=s&&d<=o&&!function(t,e){return t.Vibrant===e||t.DarkVibrant===e||t.LightVibrant===e||t.Muted===e||t.DarkMuted===e||t.LightMuted===e}(t,e)){const t=function(t,e,i,r,s,o,n){function a(t,e){return 1-Math.abs(t-e)}return function(...t){let e=0,i=0;for(let r=0;r<t.length;r+=2){const s=t[r],o=t[r+1];s&&o&&(e+=s*o,i+=o)}return e/i}(a(t,e),n.weightSaturation,a(i,r),n.weightLuma,s/o,n.weightPopulation)}(u,n,d,r,e.population,i,c);(null===h||t>p)&&(h=e,p=t)}})),h}const Ce=(new class{constructor(){this.filter=new ve(this),this.quantizer=new ve(this),this.generator=new ve(this)}_buildProcessTasks({filters:t,quantizer:e,generators:i}){return 1===i.length&&"*"===i[0]&&(i=this.generator.names()),{filters:t.map((t=>r(this.filter,t))),quantizer:r(this.quantizer,e),generators:i.map((t=>r(this.generator,t)))};function r(t,e){let i,r;return"string"==typeof e?i=e:(i=e.name,r=e.options),{name:i,fn:t.get(i),options:r}}}async process(t,e){const{filters:i,quantizer:r,generators:s}=this._buildProcessTasks(e),o=await this._filterColors(i,t),n=await this._generateColors(r,o);return{colors:n,palettes:await this._generatePalettes(s,n)}}_filterColors(t,e){return Promise.resolve(function(t,e){var i;if(e.length>0){const r=t.data,s=r.length/4;let o,n,a,l,c;for(let t=0;t<s;t++){o=4*t,n=r[o+0],a=r[o+1],l=r[o+2],c=r[o+3];for(let t=0;t<e.length;t++)if(!(null==(i=e[t])?void 0:i.call(e,n,a,l,c))){r[o+3]=0;break}}}return t}(e,t.map((({fn:t})=>t))))}_generateColors(t,e){return Promise.resolve(t.fn(e.data,t.options))}async _generatePalettes(t,e){const i=await Promise.all(t.map((({fn:t,options:i})=>Promise.resolve(t(e,i)))));return Promise.resolve(i.reduce(((e,i,r)=>(e[t[r].name]=i,e)),{}))}}).filter.register("default",((t,e,i,r)=>r>=125&&!(t>250&&e>250&&i>250))).quantizer.register("mmcq",((t,e)=>{if(0===t.length||e.colorCount<2||e.colorCount>256)throw new Error("Wrong MMCQ parameters");const i=ke.build(t);i.histogram.colorCount;const r=new xe(((t,e)=>t.count()-e.count()));r.push(i),Se(r,.75*e.colorCount);const s=new xe(((t,e)=>t.count()*t.volume()-e.count()*e.volume()));return s.contents=r.contents,Se(s,e.colorCount-s.size()),function(t){const e=[];for(;t.size();){const i=t.pop(),r=i.avg();e.push(new ye(r,i.count()))}return e}(s)})).generator.register("default",((t,e)=>{e=Object.assign({},Ee,e);const i=function(t){let e=0;return t.forEach((t=>{e=Math.max(e,t.population)})),e}(t),r=function(t,e,i){const r={Vibrant:null,DarkVibrant:null,LightVibrant:null,Muted:null,DarkMuted:null,LightMuted:null};return r.Vibrant=Ae(r,t,e,i.targetNormalLuma,i.minNormalLuma,i.maxNormalLuma,i.targetVibrantSaturation,i.minVibrantSaturation,1,i),r.LightVibrant=Ae(r,t,e,i.targetLightLuma,i.minLightLuma,1,i.targetVibrantSaturation,i.minVibrantSaturation,1,i),r.DarkVibrant=Ae(r,t,e,i.targetDarkLuma,0,i.maxDarkLuma,i.targetVibrantSaturation,i.minVibrantSaturation,1,i),r.Muted=Ae(r,t,e,i.targetNormalLuma,i.minNormalLuma,i.maxNormalLuma,i.targetMutesSaturation,0,i.maxMutesSaturation,i),r.LightMuted=Ae(r,t,e,i.targetLightLuma,i.minLightLuma,1,i.targetMutesSaturation,0,i.maxMutesSaturation,i),r.DarkMuted=Ae(r,t,e,i.targetDarkLuma,0,i.maxDarkLuma,i.targetMutesSaturation,0,i.maxMutesSaturation,i),r}(t,i,e);return function(t,e,i){if(!t.Vibrant&&!t.DarkVibrant&&!t.LightVibrant){if(!t.DarkVibrant&&t.DarkMuted){let[e,r,s]=t.DarkMuted.hsl;s=i.targetDarkLuma,t.DarkVibrant=new ye(be(e,r,s),0)}if(!t.LightVibrant&&t.LightMuted){let[e,r,s]=t.LightMuted.hsl;s=i.targetDarkLuma,t.DarkVibrant=new ye(be(e,r,s),0)}}if(!t.Vibrant&&t.DarkVibrant){let[e,r,s]=t.DarkVibrant.hsl;s=i.targetNormalLuma,t.Vibrant=new ye(be(e,r,s),0)}else if(!t.Vibrant&&t.LightVibrant){let[e,r,s]=t.LightVibrant.hsl;s=i.targetNormalLuma,t.Vibrant=new ye(be(e,r,s),0)}if(!t.DarkVibrant&&t.Vibrant){let[e,r,s]=t.Vibrant.hsl;s=i.targetDarkLuma,t.DarkVibrant=new ye(be(e,r,s),0)}if(!t.LightVibrant&&t.Vibrant){let[e,r,s]=t.Vibrant.hsl;s=i.targetLightLuma,t.LightVibrant=new ye(be(e,r,s),0)}if(!t.Muted&&t.Vibrant){let[e,r,s]=t.Vibrant.hsl;s=i.targetMutesSaturation,t.Muted=new ye(be(e,r,s),0)}if(!t.DarkMuted&&t.DarkVibrant){let[e,r,s]=t.DarkVibrant.hsl;s=i.targetMutesSaturation,t.DarkMuted=new ye(be(e,r,s),0)}if(!t.LightMuted&&t.LightVibrant){let[e,r,s]=t.LightVibrant.hsl;s=i.targetMutesSaturation,t.LightMuted=new ye(be(e,r,s),0)}}(r,0,e),r}));$e.use(Ce);const Me=(t,e,i)=>{const r=[t,e,i].map((t=>{let e=t;return e/=255,e<=.03928?e/12.92:((e+.055)/1.055)**2.4}));return.2126*r[0]+.7152*r[1]+.0722*r[2]},Pe=(t,e)=>Math.round(100*(((t,e)=>{const i=Me(...t),r=Me(...e);return(Math.max(i,r)+.05)/(Math.min(i,r)+.05)})(t,e)+Number.EPSILON))/100;$e._pipeline.generator.register("default",(t=>{t.sort(((t,e)=>e.population-t.population));const e=t[0];let i;const r=new Map,s=(t,i)=>(r.has(t)||r.set(t,Pe(e.rgb,i)),r.get(t)>4.5);for(let e=1;e<t.length&&void 0===i;e++){if(s(t[e].hex,t[e].rgb)){i=t[e].rgb;break}const r=t[e];for(let o=e+1;o<t.length;o++){const e=t[o];if(!(Math.abs(r.rgb[0]-e.rgb[0])+Math.abs(r.rgb[1]-e.rgb[1])+Math.abs(r.rgb[2]-e.rgb[2])>150)&&s(e.hex,e.rgb)){i=e.rgb;break}}}return void 0===i&&(i=e.getYiq()<200?[255,255,255]:[0,0,0]),[new e.constructor(i,0).hex,e.hex]}));customElements.get("ha-slider")||customElements.define("ha-slider",class extends(customElements.get("paper-slider")){}),customElements.get("ha-icon-button")||customElements.define("ha-icon-button",class extends(customElements.get("paper-icon-button")){}),customElements.get("ha-icon")||customElements.define("ha-icon",class extends(customElements.get("iron-icon")){});const Oe={en:{placeholder:{tts:"Text to speech"},label:{leave:"Leave",ungroup:"Ungroup",group_all:"Group all",send:"Send",master:"Master"},state:{idle:"Idle",unavailable:"Unavailable"},title:{speaker_management:"Group management"}},de:{placeholder:{tts:"Text zum Sprechen"},label:{leave:"Verlassen",ungroup:"Teilen",group_all:"Gruppieren",send:"Senden",master:"Master"},state:{idle:"Pause",unavailable:"Nicht verfügbar"},title:{speaker_management:"Wiedergabe auf"}},fi:{placeholder:{tts:"Teksti puheeksi"},label:{leave:"Jätä",ungroup:"Pura ryhmä",group_all:"Liitä kaikki",send:"Lähetä",master:"Master"},state:{idle:"Tauko",unavailable:"Ei käytettävissä"},title:{speaker_management:"Ryhmän hallinta"}},fr:{placeholder:{tts:"Texte à lire"},label:{leave:"Quitter",ungroup:"Dégrouper",group_all:"Grouper tous",send:"Envoyer"},state:{idle:"Inactif",unavailable:"Indisponible"},title:{speaker_management:"Gestion des groupes"}},he:{placeholder:{tts:"טקסט לדיבור"},label:{leave:"לעזוב",ungroup:"ביטול קבוצה",group_all:"לקבץ את כולם",send:"שליחה",master:"ראשי"},state:{idle:"לא פעיל",unavailable:"לא זמין"},title:{speaker_management:"ניהול קבוצות"}},hu:{placeholder:{tts:"Szövegfelolvasás"},label:{leave:"Kilépés",ungroup:"Összes ki",group_all:"Összes be",send:"Küldés",master:"Forrás"},state:{idle:"Tétlen",unavailable:"Nem elérhető"},title:{speaker_management:"Hangszórók csoportosítása"}},it:{placeholder:{tts:"Conversione testo in voce"},label:{leave:"Lascia",ungroup:"Separa",group_all:"Raggruppa tutti",send:"Invia",master:"Master"},state:{idle:"Inattivo",unavailable:"Non disponibile"},title:{speaker_management:"Gestione gruppo"}},is:{placeholder:{tts:"Texti sem á að segja"},label:{leave:"Yfirgefa",ungroup:"Aðskilja",group_all:"Sameina alla",send:"Senda",master:"Stjórnandi"},state:{idle:"Aðgerðalaus",unavailable:"Ekki tiltækt"},title:{speaker_management:"Stjórnun hópa"}},no:{placeholder:{tts:"Tekst til tale"},label:{leave:"Forlat",ungroup:"Oppløs gruppe",group_all:"Grupper alle",send:"Send",master:"Master"},state:{idle:"Inaktiv",unavailable:"Utilgjengelig"},title:{speaker_management:"Gruppestyring"}},pl:{placeholder:{tts:"Zamień tekst na mowę"},label:{leave:"Opuść",ungroup:"Usuń grupę",group_all:"Grupuj wszystkie",send:"Wyślij",master:"Główny"},state:{idle:"brak aktywności",unavailable:"niedostępny"},title:{speaker_management:"Zarządzanie grupą"}},sv:{placeholder:{tts:"Text till tal"},label:{leave:"Lämna",ungroup:"Avgruppera",group_all:"Gruppera alla",send:"Skicka",master:"Master"},state:{idle:"Inaktiv",unavailable:"Otillgänglig"},title:{speaker_management:"Gruppstyrning"}},uk:{placeholder:{tts:"Текст для відтворення"},label:{leave:"Залишити",ungroup:"Розгрупувати",group_all:"Згрупувати всі",send:"Надіслати",master:"Головний"},state:{idle:"бездіяльність",unavailable:"недоступний"},title:{speaker_management:"Управління групою"}},cz:{placeholder:{tts:"Převeď text na řeč"},label:{leave:"Odejít",ungroup:"Zrušit seskupení",group_all:"Seskupit vše",send:"Poslat",master:"Master"},state:{idle:"Nečinný",unavailable:"Nedostupný"},title:{speaker_management:"Správa skupin"}},ru:{placeholder:{tts:"Преобразование текста в речь"},label:{leave:"Покинуть",ungroup:"Разгруппировать",group_all:"Сгруппировать все",send:"Отправить",master:"Мастер"},state:{idle:"Бездействие",unavailable:"Недоступен"},title:{speaker_management:"Управление группой"}},es:{placeholder:{tts:"Texto a voz"},label:{leave:"Salir",ungroup:"Desagrupar",group_all:"Agrupar todos",send:"Enviar",master:"Maestro"},state:{idle:"Inactivo",unavailable:"No disponible"},title:{speaker_management:"Gestión de grupo"}},zh:{placeholder:{tts:"播放文本"},label:{leave:"退出",ungroup:"取消组合",group_all:"组合全部",send:"发送",master:"主要的"},state:{idle:"空闲",unavailable:"不可用"},title:{speaker_management:"组合管理"}},sk:{placeholder:{tts:"Prevod textu na reč"},label:{leave:"Odísť",ungroup:"Zrušiť zoskupenie",group_all:"Zoskupiť všetky",send:"Poslať",master:"Master"},state:{idle:"Nečinný",unavailable:"Nedostupné"},title:{speaker_management:"Manažment skupiny"}},ca:{placeholder:{tts:"Text a veu"},label:{leave:"Sortir",ungroup:"Desagrupar",group_all:"Agrupar-los tots",send:"Enviar",master:"Mestre"},state:{idle:"Inactiu",unavailable:"No disponible"},title:{speaker_management:"Gestió del grup"}},nl:{placeholder:{tts:"Tekst naar spraak"},label:{leave:"Verlaten",ungroup:"Ontgroeperen",group_all:"Alles groeperen",send:"Verzenden",master:"Master"},state:{idle:"Inactief",unavailable:"Niet beschikbaar"},title:{speaker_management:"Groepsbeheer"}},pt:{placeholder:{tts:"Texto para fala"},label:{leave:"Sair",ungroup:"Desagrupar",group_all:"Agrupar tudo",send:"Enviar",master:"Master"},state:{idle:"Ocioso",unavailable:"Indisponível"},title:{speaker_management:"Gerenciamento de grupo"}},cs:{placeholder:{tts:"Převod textu na řeč"},label:{leave:"Opustit",ungroup:"Zrušit seskupení",group_all:"Seskupit vše",send:"Poslat",master:"Master"},state:{idle:"Nečinný",unavailable:"Nedostupné"},title:{speaker_management:"Správa skupiny"}}},Le=(t,e)=>e.split(".").reduce(((t,e)=>t&&t[e]||null),t),Te=(t,e,i,r="unknown")=>{const s=t.selectedLanguage||t.language,o=s.split("-")[0];return Oe[s]&&Le(Oe[s],e)||t.resources[s]&&i&&t.resources[s][i]||Oe[o]&&Le(Oe[o],e)||Le(Oe.en,e)||r};let Ve=class extends st{render(){return U`
      <ha-switch .checked=${this.checked} ?disabled=${this.disabled}></ha-switch>
      <span ?disabled=${this.disabled}>
        <slot>${this.label}</slot>
      </span>
    `}static get styles(){return n`
      :host {
        display: flex;
        padding: 0.6em 0;
        align-items: center;
      }
      span {
        margin-left: 1em;
        font-weight: 400;
      }
      span[disabled] {
        opacity: 0.65;
      }
    `}};t([lt({attribute:!1})],Ve.prototype,"checked",void 0),t([lt({attribute:!1})],Ve.prototype,"disabled",void 0),t([lt({attribute:!1})],Ve.prototype,"label",void 0),Ve=t([ot("mmp-checkbox")],Ve);let De=class extends st{render(){return U`
      <mmp-checkbox
        .checked=${this.checked}
        .disabled=${this.disabled}
        @change="${t=>t.stopPropagation()}"
        @click="${this.handleClick}"
      >
        ${this.item.name} ${this.master?U`<span class="master">(${Te(this.hass,"label.master")})</span>`:""}
      </mmp-checkbox>
    `}handleClick(t){t.stopPropagation(),t.preventDefault(),this.disabled||this.dispatchEvent(new CustomEvent("change",{detail:{entity:this.item.entity_id,checked:!this.checked}}))}static get styles(){return n`
      .master {
        font-weight: 500;
      }
    `}};t([lt({attribute:!1})],De.prototype,"hass",void 0),t([lt({attribute:!1})],De.prototype,"item",void 0),t([lt({attribute:!1})],De.prototype,"checked",void 0),t([lt({attribute:!1})],De.prototype,"disabled",void 0),t([lt({attribute:!1})],De.prototype,"master",void 0),De=t([ot("mmp-group-item")],De);let Ie=class extends st{render(){return U`
      <div class="container">
        <div class="slot-container">
          <slot></slot>
        </div>
        <paper-ripple></paper-ripple>
      </div>
    `}static get styles(){return n`
      :host {
        position: relative;
        box-sizing: border-box;
        margin: 4px;
        min-width: 0;
        overflow: hidden;
        transition: background 0.5s;
        border-radius: 4px;
        font-weight: 500;
      }
      :host([raised]) {
        background: var(--mmp-button-color);
        min-height: calc(var(--mmp-unit) * 0.8);
        box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14),
          0px 1px 5px 0px rgba(0, 0, 0, 0.12);
      }
      :host([color]) {
        background: var(--mmp-active-color);
        transition: background 0.25s;
        opacity: 1;
      }
      :host([faded]) {
        opacity: 0.75;
      }
      :host([disabled]) {
        opacity: 0.25;
        pointer-events: none;
      }
      .container {
        height: 100%;
        width: 100%;
      }
      .slot-container {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 8px;
        width: auto;
      }
      paper-ripple {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
      }
    `}};Ie=t([ot("mmp-button")],Ie);let ze=class extends st{get group(){return this.player.group}get master(){return this.player.master}get isMaster(){return this.player.isMaster}get isGrouped(){return this.player.isGrouped}handleGroupChange(t){const{entity:e,checked:i}=t.detail;this.player.handleGroupChange(t,e,i)}render(){if(!this.visible)return U``;const{group:t,isMaster:e,isGrouped:i}=this,{id:r}=this.player;return U`
      <div class="mmp-group-list">
        <span class="mmp-group-list__title">${Te(this.hass,"title.speaker_management")}</span>
        ${this.entities.map((t=>this.renderItem(t,r)))}
        <div class="mmp-group-list__buttons">
          <mmp-button raised ?disabled=${!i} @click=${t=>this.player.handleGroupChange(t,r,!1)}>
            <span>${Te(this.hass,"label.leave")}</span>
          </mmp-button>
          ${i&&e?U`
                <mmp-button raised @click=${e=>this.player.handleGroupChange(e,t,!1)}>
                  <span>${Te(this.hass,"label.ungroup")}</span>
                </mmp-button>
              `:U``}
          <mmp-button
            raised
            ?disabled=${!e}
            @click=${t=>this.player.handleGroupChange(t,this.entities.map((t=>t.entity_id)),!0)}
          >
            <span>${Te(this.hass,"label.group_all")}</span>
          </mmp-button>
        </div>
      </div>
    `}renderItem(t,e){const i=t.entity_id;return U` <mmp-group-item
      @change=${this.handleGroupChange}
      .item=${t}
      .hass=${this.hass}
      .checked=${i===e||this.group.includes(i)}
      .disabled=${i===e||!this.isMaster}
      .master=${i===this.master}
    />`}static get styles(){return n`
      .mmp-group-list {
        display: flex;
        flex-direction: column;
        margin-left: 8px;
        margin-bottom: 8px;
      }
      .mmp-group-list__title {
        font-weight: 500;
        letter-spacing: 0.1em;
        margin: 8px 0 4px;
        text-transform: uppercase;
      }
      .mmp-group-list__buttons {
        display: flex;
      }
      mmp-button {
        margin: 8px 8px 0 0;
        min-width: 0;
        text-transform: uppercase;
        text-align: center;
        width: 50%;
        --mdc-theme-primary: transparent;
      }
    `}};t([lt({attribute:!1})],ze.prototype,"hass",void 0),t([lt({attribute:!1})],ze.prototype,"entities",void 0),t([lt({attribute:!1})],ze.prototype,"player",void 0),t([lt({attribute:!1})],ze.prototype,"visible",void 0),ze=t([ot("mmp-group-list")],ze);customElements.define("mmp-dropdown",class extends st{static get properties(){return{items:[],label:String,selected:String,id:String,isOpen:Boolean}}connectedCallback(){super.connectedCallback(),this._handleDocumentClick=this.handleDocumentClick.bind(this),document.addEventListener("click",this._handleDocumentClick)}disconnectedCallback(){document.removeEventListener("click",this._handleDocumentClick),super.disconnectedCallback()}get selectedIndex(){return this.items.map((t=>t.id)).indexOf(this.selected)}get hasLegacyMenu(){return Boolean(customElements.get("mwc-menu")&&customElements.get("mwc-list-item"))}firstUpdated(){if(!this.hasLegacyMenu)return;const t=this.shadowRoot.querySelector("#menu"),e=this.shadowRoot.querySelector("#button");t.anchor=e}render(){return U`
      <div
        class='mmp-dropdown'
        @click=${t=>t.stopPropagation()}
        ?open=${this.isOpen}>
        ${this.icon?U`
          <ha-icon-button
            id='button'
            class='mmp-dropdown__button icon'
            .icon=${Rt}
            @click=${this.toggleMenu}>
            <ha-icon .icon=${Rt}></ha-icon>
          </ha-icon-button>
        `:U`
          <mmp-button id='button' class='mmp-dropdown__button' 
            @click=${this.toggleMenu}>
            <div>
              <span class='mmp-dropdown__label ellipsis'>
                ${this.selected||this.label}
              </span>
              <ha-icon class='mmp-dropdown__icon' .icon=${Rt}></ha-icon>
            </div>
          </mmp-button>
        `}
        ${this.hasLegacyMenu?U`<mwc-menu
              @closed=${this.handleClose}
              @selected=${this.onChange}
              activatable
              id='menu'
              corner='BOTTOM_RIGHT'
              menuCorner='END'>
              ${this.items.map((t=>U`
                <mwc-list-item value=${t.id||t.name}>
                  ${t.icon?U`<ha-icon .icon=${t.icon}></ha-icon>`:""}
                  ${t.name?U`<span class='mmp-dropdown__item__label'>${t.name}</span>`:""}
                </mwc-list-item>`))}
            </mwc-menu>`:U`<div class='mmp-dropdown__menu' ?open=${this.isOpen}>
              ${this.items.map(((t,e)=>U`
                <button
                  class='mmp-dropdown__item'
                  type='button'
                  ?selected=${e===this.selectedIndex}
                  @click=${t=>this.onFallbackSelect(t,e)}>
                  ${t.icon?U`<ha-icon .icon=${t.icon}></ha-icon>`:""}
                  ${t.name?U`<span class='mmp-dropdown__item__label'>${t.name}</span>`:""}
                </button>`))}
            </div>`}
      </div>
    `}onChange(t){const{index:e}=t.detail;e!==this.selectedIndex&&this.items[e]&&this.dispatchEvent(new CustomEvent("change",{detail:this.items[e]}))}handleClose(t){t.stopPropagation(),this.isOpen=!1}toggleMenu(){if(this.hasLegacyMenu){const t=this.shadowRoot.querySelector("#menu");t.open=!t.open,this.isOpen=t.open}else this.isOpen=!this.isOpen}onFallbackSelect(t,e){t.stopPropagation();const i=this.items[e];this.isOpen=!1,i&&e!==this.selectedIndex&&this.dispatchEvent(new CustomEvent("change",{detail:i}))}handleDocumentClick(t){if(!this.isOpen)return;(t.composedPath?t.composedPath():[]).includes(this)||(this.isOpen=!1)}static get styles(){return[de,n`
        :host {
          display: block;
          min-width: 0;
          max-width: 100%;
        }
        :host([faded]) {
          opacity: .75;
        }
        :host[small] .mmp-dropdown__label {
          max-width: 60px;
          display: block;
          position: relative;
          width: auto;
          text-transform: initial;
        }
        :host[full] .mmp-dropdown__label {
          max-width: none;
        }
        .mmp-dropdown {
          padding: 0;
          display: block;
          position: relative;
          min-width: 0;
          max-width: 100%;
        }
        .mmp-dropdown__menu {
          position: absolute;
          right: 0;
          top: calc(100% + 2px);
          min-width: 140px;
          max-width: 240px;
          max-height: 320px;
          overflow-y: auto;
          border-radius: 8px;
          background: var(--card-background-color, var(--ha-card-background, #fff));
          box-shadow: var(--ha-card-box-shadow, 0 2px 6px rgba(0, 0, 0, 0.25));
          padding: 4px;
          z-index: 1000;
          display: none;
        }
        .mmp-dropdown__menu[open] {
          display: block;
        }
        .mmp-dropdown__item {
          align-items: center;
          background: transparent;
          border: 0;
          border-radius: 6px;
          color: inherit;
          cursor: pointer;
          display: flex;
          font: inherit;
          gap: 8px;
          min-height: calc(var(--mmp-unit) * 0.8);
          padding: 0 10px;
          text-align: left;
          width: 100%;
        }
        .mmp-dropdown__item[selected],
        .mmp-dropdown__item:hover {
          background: rgba(127, 127, 127, 0.15);
        }
        .mmp-dropdown__item__label {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .mmp-dropdown__button {
          display: flex;
          font-size: 1em;
          justify-content: space-between;
          align-items: center;
          height: calc(var(--mmp-unit) - 4px);
          margin: 2px 0;
          max-width: 100%;
          min-width: 0;
        }
        .mmp-dropdown__button:not(.icon) {
          width: 100%;
          overflow: hidden;
        }
        .mmp-dropdown__button.icon {
          height: var(--mmp-unit);
          margin: 0;
        }
        .mmp-dropdown__button > div {
          display: flex;
          flex: 1;
          justify-content: space-between;
          align-items: center;
          height: calc(var(--mmp-unit) - 4px);
          max-width: 100%;
          min-width: 0;
        }
        .mmp-dropdown__label {
          display: block;
          min-width: 0;
          max-width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          text-align: left;
          text-transform: none;
        }
        .mmp-dropdown__icon {
          height: auto;
          width: calc(var(--mmp-unit) * .6);
          min-width: calc(var(--mmp-unit) * .6);
        }
        mwc-list-item > *:nth-child(2) {
          margin-left: 4px;
        }
        .mmp-dropdown[open] mmp-button ha-icon {
          color: var(--mmp-accent-color);
          transform: rotate(180deg);
        }
        .mmp-dropdown[open] mmp-icon-button {
          color: var(--mmp-accent-color);
          transform: rotate(180deg);
        }
        .mmp-dropdown[open] mmp-icon-button[focused] {
          color: var(--mmp-text-color);
          transform: rotate(0deg);
        }
      `]}});customElements.define("mmp-shortcuts",class extends st{static get properties(){return{player:{},shortcuts:{}}}get buttons(){return this.shortcuts.buttons}get list(){return this.shortcuts.list}get show(){return!this.shortcuts.hide_when_off||this.player.isActive}get active(){return this.player.getAttribute(this.shortcuts.attribute)}get height(){return this.shortcuts.column_height||36}render(){if(!this.show)return U``;const{active:t}=this,e=this.list?U`
      <mmp-dropdown class='mmp-shortcuts__dropdown'
        @change=${this.handleShortcut}
        .items=${this.list}
        .label=${this.shortcuts.label}
        .selected=${t}>
      </mmp-dropdown>
    `:"",i=this.buttons?U`
      <div class='mmp-shortcuts__buttons'>
        ${this.buttons.map((e=>U`
          <mmp-button
            style="${gt(this.shortcutStyle(e))}"
            raised
            columns=${this.shortcuts.columns}
            ?color=${e.id===t}
            class='mmp-shortcuts__button'
            @click=${t=>this.handleShortcut(t,e)}>
            <div align=${this.shortcuts.align_text}>
              ${e.icon?U`<ha-icon .icon=${e.icon}></ha-icon>`:""}
              ${e.image?U`<img src=${e.image}>`:""}
              ${e.name?U`<span class="ellipsis">${e.name}</span>`:""}
            </div>
          </mmp-button>`))}
      </div>
    `:"";return U`
      ${i}
      ${e}
    `}handleShortcut(t,e){const{type:i,id:r,data:s}=e||t.detail;if("source"===i)return this.player.setSource(t,r);if("service"===i)return this.player.toggleService(t,r,s);if("script"===i)return this.player.toggleScript(t,r,s);if("sound_mode"===i)return this.player.setSoundMode(t,r);const o={media_content_type:i,media_content_id:r};this.player.setMedia(t,o)}shortcutStyle(t){return{"min-height":`${this.height}px`,...t.cover&&{"background-image":`url(${t.cover})`}}}static get styles(){return[de,n`
        .mmp-shortcuts__buttons {
          box-sizing: border-box;
          display: flex;
          flex-wrap: wrap;
          margin-top: 8px;
        }
        .mmp-shortcuts__button {
          min-width: calc(50% - 8px);
          flex: 1;
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center center;
        }
        .mmp-shortcuts__button > div {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          padding: .2em 0;
        }
        .mmp-shortcuts__button > div[align='left'] {
          justify-content: flex-start;
        }
        .mmp-shortcuts__button > div[align='right'] {
          justify-content: flex-end;
        }
        .mmp-shortcuts__button[columns='1'] {
          min-width: calc(100% - 8px);
        }
        .mmp-shortcuts__button[columns='3'] {
          min-width: calc(33.33% - 8px);
        }
        .mmp-shortcuts__button[columns='4'] {
          min-width: calc(25% - 8px);
        }
        .mmp-shortcuts__button[columns='5'] {
          min-width: calc(20% - 8px);
        }
        .mmp-shortcuts__button[columns='6'] {
          min-width: calc(16.66% - 8px);
        }
        .mmp-shortcuts__button > div > span {
          line-height: calc(var(--mmp-unit) * .6);
          text-transform: initial;
        }
        .mmp-shortcuts__button > div > ha-icon {
          width: calc(var(--mmp-unit) * .6);
          height: calc(var(--mmp-unit) * .6);
        }
        .mmp-shortcuts__button > div > *:nth-child(2) {
          margin-left: 4px;
        }
        .mmp-shortcuts__button > div > img {
          height: 24px;
        }
      `]}});customElements.define("mmp-tts",class extends st{static get properties(){return{hass:{},config:{},player:{}}}get label(){return Te(this.hass,"placeholder.tts","ui.card.media_player.text_to_speak","Say")}get input(){return this.shadowRoot.getElementById("tts-input")}get message(){return this.input.value}render(){return U`
      <ha-textfield
        id="tts-input"
        class="mmp-tts__input"
        placeholder="${this.label}..."
        @click=${t=>t.stopPropagation()}
      >
      </ha-textfield>
      <mmp-button class="mmp-tts__button" @click=${this.handleTts}>
        <span>${Te(this.hass,"label.send")}</span>
      </mmp-button>
    `}handleTts(t){const{config:e,message:i}=this,r={message:i,entity_id:e.entity_id||this.player.id,..."group"===e.entity_id&&{entity_id:this.player.group},...e.data};switch(e.language&&(r.language=e.language),e.platform){case"alexa":this.hass.callService("notify","alexa_media",{message:i,data:{type:e.type||"tts",...e.data},target:r.entity_id});break;case"sonos":this.hass.callService("script","sonos_say",{sonos_entity:r.entity_id,volume:e.volume||.5,message:i,...e.data});break;case"webos":this.hass.callService("notify",r.entity_id.split(".").slice(-1)[0],{message:i,...e.data});break;case"ga":this.hass.callService("notify","ga_broadcast",{message:i,...e.data});break;case"service":{const[t,s]=(e.data.service||"").split("."),o={[e.data.message_field||"message"]:i,entity_id:r.entity_id,...e.language?{language:r.language}:{},...e.data.service_data||{}};this.hass.callService(t,s,o);break}default:this.hass.callService("tts",`${e.platform}_say`,r)}t.stopPropagation(),this.reset()}reset(){this.input.value=""}static get styles(){return n`
      :host {
        align-items: center;
        margin: 8px 4px 0px;
        display: flex;
      }
      .mmp-tts__input {
        cursor: text;
        flex: 1;
        margin-right: 8px;
      }
      ha-card[rtl] .mmp-tts__input {
        margin-right: auto;
        margin-left: 8px;
      }
      .mmp-tts__button {
        margin: 0;
        height: 30px;
        padding: 0 .4em;
      }
    `}});var je=t=>{let e=Math.abs(parseInt(""+t%60,10)),i=Math.abs(parseInt(""+t/60%60,10)),r=Math.abs(parseInt(""+t/3600%24,10));return r=r<10?`0${r}`:r,i=i<10?`0${i}`:i,e=e<10?`0${e}`:e,`${"00"!==r?`${r}:`:""}${i}:${e}`};customElements.define("mmp-progress",class extends st{static get properties(){return{_player:{},showTime:Boolean,showRemainingTime:Boolean,progress:Number,duration:Number,tracker:{},seekProgress:Number,seekWidth:Number,track:Boolean}}set player(t){this._player=t,this.hasProgress&&this.trackProgress()}get duration(){return this.player.mediaDuration}get player(){return this._player}get hasProgress(){return this.player.hasProgress}get width(){return this.shadowRoot.querySelector(".mmp-progress").offsetWidth}get offset(){return this.getBoundingClientRect().left}get classes(){return dt({transiting:!this.seekProgress,seeking:this.seekProgress})}render(){return U`
      <div class='mmp-progress'
        @touchstart=${this.initSeek}
        @touchend=${this.handleSeek}
        @mousedown=${this.initSeek}
        @mouseup=${this.handleSeek}
        @mouseleave=${this.resetSeek}
        @click=${t=>t.stopPropagation()}
        ?paused=${!this.player.isPlaying}>
        ${this.showTime?U`
          <div class='mmp-progress__duration'>
            <span>${je(this.seekProgress||this.progress)}</span>
            <div>
              ${this.showTime?U`
                <span class='mmp-progress__duration__remaining'>
                  -${je(this.duration-(this.seekProgress||this.progress))} |
                </span>
              `:""}
              <span>${je(this.duration)}</span>
            </div>
          </div>
        `:""}
        <div class='progress-bar' style=${this.progressBarStyle()}></div>
      </div>
    `}progressBarStyle(){return gt({width:(this.seekProgress||this.progress)/this.duration*100+"%"})}trackProgress(){this.progress=this.player.progress,this.tracker||(this.tracker=setInterval((()=>this.trackProgress()),1e3)),this.player.isPlaying||(clearInterval(this.tracker),this.tracker=null)}initSeek(t){const e=t.offsetX||t.touches[0].pageX-this.offset;this.seekWidth=this.width,this.seekProgress=this.calcProgress(e),this.addEventListener("touchmove",this.moveSeek),this.addEventListener("mousemove",this.moveSeek)}resetSeek(){this.seekProgress=null,this.removeEventListener("touchmove",this.moveSeek),this.removeEventListener("mousemove",this.moveSeek)}moveSeek(t){t.preventDefault();const e=t.offsetX||t.touches[0].pageX-this.offset;this.seekProgress=this.calcProgress(e)}handleSeek(t){this.resetSeek();const e=t.offsetX||t.changedTouches[0].pageX-this.offset,i=this.calcProgress(e);this.player.seek(t,i)}disconnectedCallback(){super.disconnectedCallback(),this.resetSeek(),clearInterval(this.tracker),this.tracker=null}connectedCallback(){super.connectedCallback(),this.hasProgress&&this.trackProgress()}calcProgress(t){const e=t/this.seekWidth*this.duration;return Math.min(Math.max(e,.1),this.duration)}static get styles(){return n`
      .mmp-progress {
        cursor: pointer;
        left: 0; right: 0; bottom: 0;
        position: absolute;
        pointer-events: auto;
        min-height: calc(var(--mmp-progress-height) + 10px);
      }
      .mmp-progress:before {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: var(--mmp-progress-height);
        background-color: rgba(100,100,100,.15);
      }
      .mmp-progress__duration {
        left: calc(var(--ha-card-border-radius, 4px) / 2);
        right: calc(var(--ha-card-border-radius, 4px) / 2);
        bottom: calc(var(--mmp-progress-height) + 6px);
        position: absolute;
        display: flex;
        justify-content: space-between;
        font-size: .8em;
        padding: 0 6px;
        z-index: 2
      }
      .mmp-progress__duration__remaining {
        opacity: .5;
      }
      .progress-bar {
        height: var(--mmp-progress-height);
        bottom: 0;
        position: absolute;
        width: 0;
        transition: height 0;
        z-index: 1;
        background-color: var(--mmp-accent-color);
      }
      .progress-bar.seeking {
        transition: height .15s ease-out;
        height: calc(var(--mmp-progress-height) + 4px);
      }
      .mmp-progress[paused] .progress-bar {
        background-color: var(--disabled-text-color, rgba(150,150,150,.5));
      }
    `}});let Ne=class extends st{get source(){return this.player.source}get alternatives(){return this.player.sources.map((t=>({name:t,id:t,type:"source"})))}render(){return U`
      <mmp-dropdown
        @change=${this.handleSource}
        .items=${this.alternatives}
        .label=${this.source}
        .selected=${this.source}
        .icon=${this.icon}
      ></mmp-dropdown>
    `}handleSource(t){const{id:e}=t.detail;this.player.setSource(t,e)}static get styles(){return n`
      :host {
        max-width: 120px;
        min-width: var(--mmp-unit);
      }
      :host([full]) {
        max-width: none;
      }
    `}};t([lt({attribute:!1})],Ne.prototype,"player",void 0),t([lt({attribute:!1})],Ne.prototype,"icon",void 0),Ne=t([ot("mmp-source-menu")],Ne);let Re=class extends st{constructor(){super(...arguments),this.selected=void 0}get mode(){return this.player.soundMode}get alternatives(){return this.player.soundModes.map((t=>({name:t,id:t,type:"soundMode"})))}render(){return U`
      <mmp-dropdown
        @change=${this.handleChange}
        .items=${this.alternatives}
        .label=${this.mode}
        .selected=${this.selected||this.mode}
        .icon=${this.icon}
      ></mmp-dropdown>
    `}handleChange(t){const{id:e}=t.detail;this.player.setSoundMode(t,e),this.selected=e}static get styles(){return n`
      :host {
        max-width: 120px;
        min-width: var(--mmp-unit);
      }
      :host([full]) {
        max-width: none;
      }
    `}};t([lt({attribute:!1})],Re.prototype,"player",void 0),t([lt({attribute:!1})],Re.prototype,"icon",void 0),t([ct()],Re.prototype,"selected",void 0),Re=t([ot("mmp-sound-menu")],Re);customElements.define("mmp-media-controls",class extends st{static get properties(){return{player:{},config:{},break:Boolean}}get showShuffle(){return!this.config.hide.shuffle&&this.player.supportsShuffle}get showRepeat(){return!this.config.hide.repeat&&this.player.supportsRepeat}get maxVol(){return this.config.max_volume||100}get minVol(){return this.config.min_volume||0}get vol(){return Math.round(100*this.player.vol)}get jumpAmount(){return this.config.jump_amount||10}render(){const{hide:t}=this.config;return U`
      ${t.volume?U``:this.renderVolControls(this.player.muted)}
      ${this.renderShuffleButton()}
      ${this.renderRepeatButton()}
      ${t.controls?U``:U`
        <div class='flex mmp-media-controls__media' ?flow=${this.config.flow||this.break}>
          ${!t.prev&&this.player.supportsPrev?U`
            <ha-icon-button
              @click=${t=>this.player.prev(t)}
              .icon=${Wt}>
             <ha-icon .icon=${Wt}></ha-icon>
            </ha-icon-button>`:""}
          ${this.renderJumpBackwardButton()}
          ${this.renderPlayButtons()}
          ${this.renderJumpForwardButton()}
          ${!t.next&&this.player.supportsNext?U`
            <ha-icon-button
              @click=${t=>this.player.next(t)}
              .icon=${Ht}>
             <ha-icon .icon=${Ht}></ha-icon>
            </ha-icon-button>`:""}
        </div>
      `}
    `}renderShuffleButton(){return this.showShuffle?U`
      <div class='flex mmp-media-controls__shuffle'>
        <ha-icon-button
          class='shuffle-button'
          @click=${t=>this.player.toggleShuffle(t)}
          .icon=${Ft}
          ?color=${this.player.shuffle}>
          <ha-icon .icon=${Ft}></ha-icon>
        </ha-icon-button>
      </div>
    `:U``}renderRepeatButton(){if(!this.showRepeat)return U``;const t=[Nt.ONE,Nt.ALL].includes(this.player.repeat);return U`
      <div class='flex mmp-media-controls__repeat'>
        <ha-icon-button
          class='repeat-button'
          @click=${t=>this.player.toggleRepeat(t)}
          .icon=${Zt[this.player.repeat]}
          ?color=${t}>
          <ha-icon .icon=${Zt[this.player.repeat]}></ha-icon>
        </ha-icon-button>
      </div>
    `}renderVolControls(t){const e=this.config.volume_stateless?this.renderVolButtons(t):this.renderVolSlider(t),i=dt({"--buttons":this.config.volume_stateless,"mmp-media-controls__volume":!0,flex:!0}),r=!this.config.hide.volume_level;return U`
      <div class=${i}>
        ${e}
        ${r?this.renderVolLevel():""}
      </div>`}renderVolSlider(t){return U`
      ${this.renderMuteButton(t)}
      <ha-slider
        @change=${this.handleVolumeChange}
        @click=${t=>t.stopPropagation()}
        ?disabled=${t}
        min=${this.minVol} max=${this.maxVol}
        .value=${100*this.player.vol}
        step=${this.config.volume_step||1}
        dir=${"ltr"}
        ignore-bar-touch pin labeled>
      </ha-slider>
    `}renderVolButtons(t){return U`
      ${this.renderMuteButton(t)}
      <ha-icon-button
        @click=${t=>this.player.volumeDown(t)}
        .icon=${Xt}>
          <ha-icon .icon=${Xt}></ha-icon>
      </ha-icon-button>
      <ha-icon-button
        @click=${t=>this.player.volumeUp(t)}
        .icon=${Jt}>
          <ha-icon .icon=${Jt}></ha-icon>
      </ha-icon-button>
    `}renderVolLevel(){return U`
      <span class="mmp-media-controls__volume__level">${this.vol}%</span>
    `}renderMuteButton(t){if(!this.config.hide.mute)switch(this.config.replace_mute){case"play":case"play_pause":return U`
          <ha-icon-button
            @click=${t=>this.player.playPause(t)}
            .icon=${qt[this.player.isPlaying]}>
            <ha-icon .icon=${qt[this.player.isPlaying]}></ha-icon>
          </ha-icon-button>
        `;case"stop":return U`
          <ha-icon-button
            @click=${t=>this.player.stop(t)}
            .icon=${Yt.true}>
            <ha-icon .icon=${Yt.true}></ha-icon>
          </ha-icon-button>
        `;case"play_stop":return U`
          <ha-icon-button
            @click=${t=>this.player.playStop(t)}
            .icon=${Yt[this.player.isPlaying]}>
            <ha-icon .icon=${Yt[this.player.isPlaying]}></ha-icon>
          </ha-icon-button>
        `;case"next":return U`
          <ha-icon-button
            @click=${t=>this.player.next(t)}
            .icon=${Ht}>
            <ha-icon .icon=${Ht}></ha-icon>
          </ha-icon-button>
        `;default:if(!this.player.supportsMute)return;return U`
          <ha-icon-button
            @click=${t=>this.player.toggleMute(t)}
            .icon=${Bt[t]}>
            <ha-icon .icon=${Bt[t]}></ha-icon>
          </ha-icon-button>
        `}}renderPlayButtons(){const{hide:t}=this.config;return U`
      ${t.play_pause?U``:this.player.assumedState?U`
        <ha-icon-button
          @click=${t=>this.player.play(t)}
          .icon=${qt.false}>
            <ha-icon .icon=${qt.false}></ha-icon>
        </ha-icon-button>
        <ha-icon-button
          @click=${t=>this.player.pause(t)}
          .icon=${qt.true}>
            <ha-icon .icon=${qt.true}></ha-icon>
        </ha-icon-button>
      `:U`
        <ha-icon-button
          @click=${t=>this.player.playPause(t)}
          .icon=${qt[this.player.isPlaying]}>
            <ha-icon .icon=${qt[this.player.isPlaying]}></ha-icon>
        </ha-icon-button>
      `}
      ${t.play_stop?U``:U`
        <ha-icon-button
          @click=${t=>this.handleStop(t)}
          .icon=${t.play_pause?Yt[this.player.isPlaying]:Yt.true}>
            <ha-icon .icon=${t.play_pause?Yt[this.player.isPlaying]:Yt.true}></ha-icon>
        </ha-icon-button>
      `}
    `}renderJumpForwardButton(){return this.config.hide.jump||!this.player.hasProgress?U``:U`
      <ha-icon-button
        @click=${t=>this.player.jump(t,this.jumpAmount)}
        .icon=${Kt}>
        <ha-icon .icon=${Kt}></ha-icon>
      </ha-icon-button>
    `}renderJumpBackwardButton(){return this.config.hide.jump||!this.player.hasProgress?U``:U`
      <ha-icon-button
        @click=${t=>this.player.jump(t,-this.jumpAmount)}
        .icon=${Qt}>
        <ha-icon .icon=${Qt}></ha-icon>
      </ha-icon-button>
    `}handleStop(t){return this.config.hide.play_pause?this.player.playStop(t):this.player.stop(t)}handleVolumeChange(t){const e=parseFloat(t.target.value)/100;this.player.setVolume(t,e)}static get styles(){return[de,n`
        :host {
          display: flex;
          width: 100%;
          justify-content: space-between;
        }
        .flex {
          display: flex;
          flex: 1;
          justify-content: space-between;
        }
        ha-slider {
          max-width: none;
          min-width: 100px;
          width: 100%;
          --md-sys-color-primary: var(--mmp-accent-color); /* before 2025.10.0 */
          color: var(--primary-text-color);
        }
        ha-icon-button {
          min-width: var(--mmp-unit);
        }
        .mmp-media-controls__volume {
          flex: 100;
          max-height: var(--mmp-unit);
          align-items: center;
        }
        .mmp-media-controls__volume.--buttons {
          justify-content: left;
        }
        .mmp-media-controls__media {
          margin-right: 0;
          margin-left: auto;
          justify-content: inherit;
        }
        .mmp-media-controls__media[flow] {
          max-width: none;
          justify-content: space-between;
        }
        .mmp-media-controls__shuffle,
        .mmp-media-controls__repeat {
          flex: 3;
          flex-shrink: 200;
          justify-content: center;
        }
      `]}});customElements.define("mmp-powerstrip",class extends st{static get properties(){return{hass:{},player:{},config:{},groupVisible:Boolean,idle:Boolean}}get icon(){return this.config.speaker_group.icon||Ut}get showGroupButton(){return this.config.speaker_group.entities.length>0&&!this.config.hide.group_button}get showPowerButton(){return!this.config.hide.power}get powerColor(){return this.player.isActive&&!this.config.hide.power_state}get sourceSize(){return"icon"===this.config.source||this.hasControls||this.idle}get soundSize(){return"icon"===this.config.sound_mode||this.hasControls||this.idle}get hasControls(){return this.player.isActive&&this.config.hide.controls!==this.config.hide.volume}get hasSource(){return this.player.sources.length>0&&!this.config.hide.source}get hasSoundMode(){return this.player.soundModes.length>0&&!this.config.hide.sound_mode}get showLabel(){return!this.config.hide.state_label}render(){return this.player.isUnavailable&&this.showLabel?U`
        <span class="label ellipsis"> ${Te(this.hass,"state.unavailable","state.default.unavailable")} </span>
      `:U`
      ${this.idle?this.renderIdleView:""}
      ${this.hasControls?U` <mmp-media-controls .player=${this.player} .config=${this.config}> </mmp-media-controls> `:""}
      ${this.hasSource?U` <mmp-source-menu .player=${this.player} .icon=${this.sourceSize} ?full=${"full"===this.config.source}>
          </mmp-source-menu>`:""}
      ${this.hasSoundMode?U` <mmp-sound-menu
            .player=${this.player}
            .icon=${this.soundSize}
            ?full=${"full"===this.config.sound_mode}
          >
          </mmp-sound-menu>`:""}
      ${this.showGroupButton?U` <ha-icon-button
            class="group-button"
            .icon=${this.icon}
            ?inactive=${!this.player.isGrouped}
            ?color=${this.groupVisible}
            @click=${this.handleGroupClick}
          >
            <ha-icon .icon=${this.icon}></ha-icon>
          </ha-icon-button>`:""}
      ${this.showPowerButton?U` <ha-icon-button
            class="power-button"
            .icon=${Gt}
            @click=${t=>this.player.toggle(t)}
            ?color=${this.powerColor}
          >
            <ha-icon .icon=${Gt}></ha-icon>
          </ha-icon-button>`:""}
    `}handleGroupClick(t){t.stopPropagation(),this.dispatchEvent(new CustomEvent("toggleGroupList"))}get renderIdleView(){return this.player.isPaused?U` <ha-icon-button .icon=${qt[this.player.isPlaying]} @click=${t=>this.player.playPause(t)}>
        <ha-icon .icon=${qt[this.player.isPlaying]}></ha-icon>
      </ha-icon-button>`:this.showLabel?U` <span class="label ellipsis"> ${Te(this.hass,"state.idle","state.media_player.idle")} </span> `:U``}static get styles(){return[de,n`
        :host {
          display: flex;
          line-height: var(--mmp-unit);
          max-height: var(--mmp-unit);
        }
        :host([flow]) mmp-media-controls {
          max-width: unset;
        }
        mmp-media-controls {
          max-width: calc(var(--mmp-unit) * 5);
          line-height: initial;
          justify-content: flex-end;
        }
        mmp-source-menu,
        mmp-sound-menu {
          min-width: 0;
          max-width: 120px;
          flex: 0 1 auto;
        }
        mmp-source-menu[full],
        mmp-sound-menu[full] {
          max-width: 100%;
        }
        .group-button {
          --mdc-icon-size: calc(var(--mmp-unit) * 0.5);
        }
        ha-icon-button {
          min-width: var(--mmp-unit);
        }
      `]}});let Ue=class extends st{constructor(){super(...arguments),this.initial=!0,this.picture=void 0,this.thumbnail="",this.prevThumbnail="",this.edit=!1,this.rtl=!1,this.cardHeight=0,this.foregroundColor="",this.backgroundColor="",this.break=!1}set hass(t){if(!t)return;const e=t.states[this.config.entity];if(this._hass=t,e&&this.entity!==e&&(this.entity=e,this.player=new pe(t,this.config,e),this.rtl=this.computeRTL(t),this.idle=this.player.idle,this.player.trackIdle&&this.updateIdleStatus()),this.config&&this.config.speaker_group&&this.config.speaker_group.group_mgmt_entity){const e=t.states[this.config.speaker_group.group_mgmt_entity];e&&this.groupMgmtEntity!==e&&(this.groupMgmtEntity=e,this.groupMgmtPlayer=new pe(t,this.config,e))}}get hass(){return this._hass}static async getConfigElement(){return await Promise.resolve().then((function(){return Ye})),document.createElement("mini-media-player-editor")}static get styles(){return[de,ue]}set overflow(t){this._overflow!==t&&(this._overflow=t)}get overflow(){return this._overflow}get name(){return this.config.name||this.player.name}setConfig(t){this.config=ce(t)}shouldUpdate(t){return void 0===this.break&&this.computeRect(this),t.has("prevThumbnail")&&this.prevThumbnail&&setTimeout((()=>{this.prevThumbnail=""}),1e3),t.has("player")&&"material"===this.config.artwork&&this.setColors(),te.some((e=>t.has(e)))&&Boolean(this.player)}firstUpdated(){new zt((t=>{t.forEach((t=>{window.requestAnimationFrame((()=>{"scroll"===this.config.info&&this.computeOverflow(),this._resizeTimer||(this.computeRect(t),this._resizeTimer=setTimeout((()=>{this._resizeTimer=void 0,this._resizeEntry&&(this.computeRect(this._resizeEntry),this.measureCard())}),250)),this._resizeEntry=t}))}))})).observe(this),setTimeout((()=>this.initial=!1),250),this.edit=this.config.speaker_group.expanded||!1}updated(){"scroll"===this.config.info&&setTimeout((()=>{this.computeOverflow()}),10)}render({config:t}=this){return this.computeArtwork(),U`
      <ha-card
        class=${this.computeClasses()}
        style=${this.computeStyles()}
        @click=${t=>this.handlePopup(t)}
        artwork=${t.artwork}
        content=${this.player.content}
      >
        <div class="mmp__bg">${this.renderBackground()} ${this.renderArtwork()} ${this.renderGradient()}</div>
        <div class="mmp-player">
          <div class="mmp-player__core flex" ?inactive=${this.player.idle}>
            ${this.renderIcon()}
            <div class="entity__info">${this.renderEntityName()} ${this.renderMediaInfo()}</div>
            <mmp-powerstrip
              @toggleGroupList=${this.toggleGroupList}
              .hass=${this.hass}
              .player=${this.player}
              .config=${t}
              .groupVisible=${this.edit}
              .idle=${this.idle}
              ?flow=${t.flow}
            >
            </mmp-powerstrip>
          </div>
          <div class="mmp-player__adds">
            ${!t.collapse&&this.player.isActive?U`
                  <mmp-media-controls .player=${this.player} .config=${t} .break=${this.break}>
                  </mmp-media-controls>
                `:""}
            <mmp-shortcuts .player=${this.player} .shortcuts=${t.shortcuts}> </mmp-shortcuts>
            ${t.tts?U` <mmp-tts .config=${t.tts} .hass=${this.hass} .player=${this.player}> </mmp-tts> `:""}
            <mmp-group-list
              .hass=${this.hass}
              .visible=${this.edit}
              .entities=${t.speaker_group.entities}
              .player=${this.groupMgmtPlayer?this.groupMgmtPlayer:this.player}
              >>
            </mmp-group-list>
          </div>
        </div>
        <div class="mmp__container">
          ${this.player.isActive&&this.player.hasProgress?U`
                <mmp-progress
                  .player=${this.player}
                  .showTime=${!this.config.hide.runtime}
                  .showRemainingTime=${!this.config.hide.runtime_remaining}
                >
                </mmp-progress>
              `:""}
        </div>
      </ha-card>
    `}computeClasses({config:t}=this){return dt({"--responsive":this.break||t.hide.icon,"--initial":this.initial,"--bg":t.background||!1,"--group":t.group,"--more-info":"none"!==t.tap_action.action,"--has-artwork":this.player.hasArtwork&&this.thumbnail,"--flow":t.flow,"--collapse":t.collapse,"--rtl":this.rtl,"--progress":this.player.hasProgress,"--runtime":!t.hide.runtime&&this.player.hasProgress,"--inactive":!this.player.isActive})}renderArtwork(){if(!this.thumbnail||"default"===this.config.artwork)return;const t={backgroundImage:this.thumbnail,backgroundColor:this.backgroundColor||"",width:"material"===this.config.artwork&&this.player.isActive?`${this.cardHeight}px`:"100%"},e={backgroundImage:this.prevThumbnail,width:"material"===this.config.artwork?`${this.cardHeight}px`:""};return U` <div class="cover" style=${gt(t)}></div>
      ${this.prevThumbnail&&U` <div class="cover --prev" style=${gt(e)}></div> `}`}renderGradient(){if("material"!==this.config.artwork)return;const t={backgroundImage:`linear-gradient(to left,\n        transparent 0,\n        ${this.backgroundColor} ${this.cardHeight}px,\n        ${this.backgroundColor} 100%)`};return U`<div class="cover-gradient" style=${gt(t)}></div>`}renderBackground(){if(this.config.background)return U`
      <div class="cover --bg" style=${gt({backgroundImage:`url(${this.config.background})`})}></div>
    `}handlePopup(t){t.stopPropagation(),me(this,this._hass,this.config,this.config.tap_action,this.player.id)}renderIcon(){if(this.config.hide.icon)return;if(this.player.isActive&&this.thumbnail&&"default"===this.config.artwork)return U` <div
        class="entity__artwork"
        style="background-image: ${this.thumbnail};"
        ?border=${!this.config.hide.artwork_border}
        state=${this.player.state}
      >
        ${" "}
      </div>`;if(null!=this.config.icon_image)return U` <div class="entity__icon">
        <img src="${this.config.icon_image}" height="100%" />
      </div>`;const t=!this.config.hide.icon_state&&this.player.isActive;return U` <div class="entity__icon" ?color=${t}>
      <ha-state-icon
        .hass=${this.hass}
        .icon=${this.config.icon}
        .state=${this.entity}
        .stateObj=${this.entity}
      ></ha-state-icon>
    </div>`}renderEntityName(){if(!this.config.hide.name)return U` <div class="entity__info__name">${this.name} ${this.speakerCount()}</div>`}renderMediaInfo(){if(this.config.hide.info)return;const t=this.player.mediaInfo;return U` <div
      class="entity__info__media"
      ?short=${"short"===this.config.info||!this.player.isActive}
      ?short-scroll=${"scroll"===this.config.info}
      ?scroll=${this.overflow}
      style="animation-duration: ${this.overflow}s;"
    >
      ${"scroll"===this.config.info?U` <div>
            <div class="marquee">
              ${t.map((t=>U`<span class=${`attr__${t.attr}`}>${t.prefix+t.text}</span>`))}
            </div>
          </div>`:""}
      ${t.map((t=>U`<span class=${`attr__${t.attr}`}>${t.prefix+t.text}</span>`))}
    </div>`}speakerCount(){if(this.config.speaker_group.show_group_count){const t=this.groupMgmtPlayer?this.groupMgmtPlayer.groupCount:this.player.groupCount;return t>1?" +"+(t-1):""}}computeStyles(){const{scale:t}=this.config;return gt(Object.assign(Object.assign({},t&&{"--mmp-unit":40*t+"px"}),this.foregroundColor&&this.player.isActive&&{"--mmp-text-color":this.foregroundColor,"--mmp-icon-color":this.foregroundColor,"--mmp-icon-active-color":this.foregroundColor,"--mmp-accent-color":this.foregroundColor,"--secondary-text-color":this.foregroundColor,"--mmp-media-cover-info-color":this.foregroundColor,"--ha-control-color":this.foregroundColor}))}async computeArtwork(){const{picture:t,hasArtwork:e}=this.player;if(e&&t!==this.picture){this.picture=t;const e=await this.player.fetchArtwork();this.thumbnail&&(this.prevThumbnail=this.thumbnail),this.thumbnail=e||`url(${t})`}}measureCard(){var t;const e=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector("ha-card");e&&(this.cardHeight=e.offsetHeight)}computeOverflow(){var t;const e=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector(".marquee");if(e&&e.parentNode){const t=e.clientWidth>e.parentNode.clientWidth;this.overflow=t&&this.player.isActive?7.5+e.clientWidth/50:void 0}}computeRect(t){if("contentRect"in t){const{left:e,width:i}=t.contentRect;this.break=i+2*e<390}else{const{left:e,width:i}=t.getBoundingClientRect();this.break=i+2*e<390}}computeRTL(t){const e=t.language||"en";return t.translationMetadata.translations[e]&&t.translationMetadata.translations[e].isRTL||!1}toggleGroupList(){this.edit=!this.edit}updateIdleStatus(){var t,e;const i=null===(e=null===(t=this.config)||void 0===t?void 0:t.idle_view)||void 0===e?void 0:e.after;if(!i)return;this._idleTracker&&clearTimeout(this._idleTracker);const r=(Date.now()-new Date(this.player.updatedAt).getTime())/1e3;this._idleTracker=setTimeout((()=>{this.idle=this.player.checkIdleAfter(i),this.player.idle=this.idle,this._idleTracker=void 0}),1e3*(60*i-r))}getCardSize(){return this.config.collapse?1:2}async setColors(){if(this.player.picture!==this.picture){if(!this.player.picture)return this.foregroundColor="",void(this.backgroundColor="");try{[this.foregroundColor,this.backgroundColor]=await(async t=>new $e(t,{colorCount:16}).getPalette())(this.player.picture)}catch(t){console.error("Error getting Image Colors",t),this.foregroundColor="",this.backgroundColor=""}}}};t([lt({attribute:!1})],Ue.prototype,"hass",null),t([ct()],Ue.prototype,"_overflow",void 0),t([ct()],Ue.prototype,"initial",void 0),t([ct()],Ue.prototype,"picture",void 0),t([ct()],Ue.prototype,"thumbnail",void 0),t([ct()],Ue.prototype,"prevThumbnail",void 0),t([ct()],Ue.prototype,"edit",void 0),t([ct()],Ue.prototype,"rtl",void 0),t([ct()],Ue.prototype,"cardHeight",void 0),t([ct()],Ue.prototype,"foregroundColor",void 0),t([ct()],Ue.prototype,"backgroundColor",void 0),t([ct()],Ue.prototype,"config",void 0),t([ct()],Ue.prototype,"_hass",void 0),t([ct()],Ue.prototype,"entity",void 0),t([ct()],Ue.prototype,"player",void 0),t([ct()],Ue.prototype,"idle",void 0),t([ct()],Ue.prototype,"groupMgmtPlayer",void 0),t([ct()],Ue.prototype,"groupMgmtEntity",void 0),t([ct()],Ue.prototype,"break",void 0),t([ct()],Ue.prototype,"_resizeEntry",void 0),t([ct()],Ue.prototype,"_resizeTimer",void 0),t([ct()],Ue.prototype,"_idleTracker",void 0),Ue=t([ot("mini-media-player")],Ue),window.customCards=window.customCards||[],window.customCards.push({type:"mini-media-player",name:"Mini Media Player",preview:!1,description:"A minimalistic yet customizable media player card"});const Be=["cover","full-cover","full-cover-fit","material","none"],He=["icon","full"],qe=["icon","full"],Ge=["short","scroll"],We=["play_pause","stop","play_stop","next"],Fe=(t,e=!1)=>{const i=t.map((t=>({name:t,id:t})));return e&&i.push({name:"Default",id:void 0}),i};class Ze extends st{static get styles(){return[ue,n`
        .editor-side-by-side {
          display: flex;
          margin: 16px 0;
        }
        .editor-side-by-side > * {
          flex: 1;
          padding-right: 4px;
        }
        .editor-label {
          margin-left: 6px;
          font-size: 0.8em;
          opacity: 0.75;
        }
      `]}static get properties(){return{hass:{},_config:{}}}setConfig(t){this._config=Object.assign({},ce,t)}get getMediaPlayerEntities(){return Object.keys(this.hass.states).filter((t=>"media_player"===t.substr(0,t.indexOf("."))))}get _group(){return this._config.group||!1}get _volume_stateless(){return this._config.volume_stateless||!1}get _toggle_power(){return this._config.toggle_power||!0}render(){if(!this.hass)return U``;const t=this.getMediaPlayerEntities.map((t=>({name:t,id:t})));return U`
      <div class="card-config">
        <div class="overall-config">
          <span class="editor-label">Entity (required)</span>
          <mmp-dropdown
            class="mmp-shortcuts__dropdown"
            @change=${({detail:t})=>this.valueChanged({target:{configValue:"entity",value:t.id}})}
            .items=${t}
            .label=${"Select entity"}
            .selected=${this._config.entity}
          >
          </mmp-dropdown>

          <div class="editor-side-by-side">
            <paper-input
              label="Name"
              .value="${this._config.name}"
              .configValue="${"name"}"
              @value-changed=${this.valueChanged}
            ></paper-input>

            <paper-input
              label="Icon"
              .value="${this._config.icon}"
              .configValue="${"icon"}"
              @value-changed=${this.valueChanged}
            ></paper-input>

            <paper-input
              label="Icon Image"
              .value="${this._config.icon_image}"
              .configValue="${"icon_image"}"
              @value-changed=${this.valueChanged}
            ></paper-input>
          </div>

          <div class="editor-side-by-side">
            <ha-formfield label="Group cards">
              <ha-switch .checked=${this._group} .configValue="${"group"}" @change=${this.valueChanged}></ha-switch>
            </ha-formfield>

            <ha-formfield label="Swap volume slider for buttons">
              <ha-switch
                .checked="${this._volume_stateless}"
                .configValue="${"volume_stateless"}"
                @change=${this.valueChanged}
              ></ha-switch>
            </ha-formfield>

            <ha-formfield label="Toggle power button behavior">
              <ha-switch
                .checked="${this._toggle_power}"
                .configValue="${"toggle_power"}"
                @change=${this.valueChanged}
              ></ha-switch>
            </ha-formfield>
          </div>

          <div class="editor-side-by-side">
            <div>
              <span class="editor-label">Artwork</span>
              <mmp-dropdown
                class="mmp-shortcuts__dropdown"
                @change=${({detail:t})=>this.valueChanged({target:{configValue:"artwork",value:t.id}})}
                .items=${Fe(Be,!0)}
                .label=${"Default"}
                .selected=${this._config.artwork}
              >
              </mmp-dropdown>
            </div>
            <div>
              <span class="editor-label">Source</span>
              <mmp-dropdown
                class="mmp-shortcuts__dropdown"
                @change=${({detail:t})=>this.valueChanged({target:{configValue:"source",value:t.id}})}
                .items=${Fe(He,!0)}
                .label=${"Default"}
                .selected=${this._config.source}
              >
              </mmp-dropdown>
            </div>
            <div>
              <span class="editor-label">Sound mode</span>
              <mmp-dropdown
                class="mmp-shortcuts__dropdown"
                @change=${({detail:t})=>this.valueChanged({target:{configValue:"sound_mode",value:t.id}})}
                .items=${Fe(qe,!0)}
                .label=${"Default"}
                .selected=${this._config.sound_mode}
              >
              </mmp-dropdown>
            </div>
          </div>

          <div class="editor-side-by-side">
            <div>
              <span class="editor-label">Info</span>
              <mmp-dropdown
                class="mmp-shortcuts__dropdown"
                @change=${({detail:t})=>this.valueChanged({target:{configValue:"info",value:t.id}})}
                .items=${Fe(Ge,!0)}
                .label=${"Default"}
                .selected=${this._config.info}
              >
              </mmp-dropdown>
            </div>

            <div>
              <span class="editor-label">Replace Mute</span>
              <mmp-dropdown
                class="mmp-shortcuts__dropdown"
                @change=${({detail:t})=>this.valueChanged({target:{configValue:"replace_mute",value:t.id}})}
                .items=${Fe(We,!0)}
                .label=${"Default"}
                .selected=${this._config.replace_mute}
              >
              </mmp-dropdown>
            </div>
          </div>

          <div class="editor-side-by-side">
            <paper-input
              label="Volume Step (1-100)"
              .value="${this._config.volume_step}"
              .configValue="${"volume_step"}"
              @value-changed=${this.valueChanged}
            ></paper-input>

            <paper-input
              label="Max Volume (1-100)"
              .value="${this._config.max_volume}"
              .configValue="${"max_volume"}"
              @value-changed=${this.valueChanged}
            ></paper-input>

            <paper-input
              label="Min Volume (1-100)"
              .value="${this._config.min_volume}"
              .configValue="${"min_volume"}"
              @value-changed=${this.valueChanged}
            ></paper-input>
          </div>

          <div class="editor-side-by-side">
            <paper-input
              label="Background"
              .value="${this._config.background}"
              .configValue="${"background"}"
              @value-changed=${this.valueChanged}
            ></paper-input>

            <paper-input
              label="Scale"
              .value="${this._config.scale}"
              .configValue="${"scale"}"
              @value-changed=${this.valueChanged}
            ></paper-input>
          </div>

          <div>
            Settings for Tap actions, TTS, hiding UI elements, idle view, speaker groups and shortcuts can only be
            configured in the code editor
          </div>
        </div>
      </div>
    `}valueChanged(t){if(!this._config||!this.hass)return;const{target:e}=t;this[`_${e.configValue}`]!==e.value&&(e.configValue&&(""===e.value?delete this._config[e.configValue]:this._config={...this._config,[e.configValue]:void 0!==e.checked?e.checked:e.value}),((t,e,i={},r={})=>{const s=new Event(e,{bubbles:void 0===r.bubbles||r.bubbles,cancelable:Boolean(r.cancelable),composed:void 0===r.composed||r.composed});s.detail=i,t.dispatchEvent(s)})(this,"config-changed",{config:this._config}))}}customElements.define("mini-media-player-editor",Ze);var Ye=Object.freeze({__proto__:null,default:Ze});
