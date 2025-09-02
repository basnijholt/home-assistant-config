function t(t,e,i,n){var r,s=arguments.length,o=s<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(o=(s<3?r(o):s>3?r(e,i,o):r(e,i))||o);return s>3&&o&&Object.defineProperty(e,i,o),o}const e=window,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,n=Symbol(),r=new WeakMap;class s{constructor(t,e,i){if(this._$cssResult$=!0,i!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=r.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&r.set(e,t))}return t}toString(){return this.cssText}}const o=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new s("string"==typeof t?t:t+"",void 0,n))(e)})(t):t;var a;const l=window,c=l.trustedTypes,h=c?c.emptyScript:"",u=l.reactiveElementPolyfillSupport,d={toAttribute(t,e){switch(e){case Boolean:t=t?h:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},f=(t,e)=>e!==t&&(e==e||t==t),p={attribute:!0,type:String,converter:d,reflect:!1,hasChanged:f},m="finalized";class g extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const n=this._$Ep(i,e);void 0!==n&&(this._$Ev.set(n,i),t.push(n))})),t}static createProperty(t,e=p){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,n=this.getPropertyDescriptor(t,i,e);void 0!==n&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(n){const r=this[t];this[e]=n,this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||p}static finalize(){if(this.hasOwnProperty(m))return!1;this[m]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(o(t))}else void 0!==t&&e.push(o(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const n=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,n)=>{i?t.adoptedStyleSheets=n.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):n.forEach((i=>{const n=document.createElement("style"),r=e.litNonce;void 0!==r&&n.setAttribute("nonce",r),n.textContent=i.cssText,t.appendChild(n)}))})(n,this.constructor.elementStyles),n}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=p){var n;const r=this.constructor._$Ep(t,i);if(void 0!==r&&!0===i.reflect){const s=(void 0!==(null===(n=i.converter)||void 0===n?void 0:n.toAttribute)?i.converter:d).toAttribute(e,i.type);this._$El=t,null==s?this.removeAttribute(r):this.setAttribute(r,s),this._$El=null}}_$AK(t,e){var i;const n=this.constructor,r=n._$Ev.get(t);if(void 0!==r&&this._$El!==r){const t=n.getPropertyOptions(r),s="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:d;this._$El=r,this[r]=s.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let n=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||f)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}var _;g[m]=!0,g.elementProperties=new Map,g.elementStyles=[],g.shadowRootOptions={mode:"open"},null==u||u({ReactiveElement:g}),(null!==(a=l.reactiveElementVersions)&&void 0!==a?a:l.reactiveElementVersions=[]).push("1.6.3");const v=window,y=v.trustedTypes,b=y?y.createPolicy("lit-html",{createHTML:t=>t}):void 0,$="$lit$",w=`lit$${(Math.random()+"").slice(9)}$`,A="?"+w,k=`<${A}>`,x=document,S=()=>x.createComment(""),O=t=>null===t||"object"!=typeof t&&"function"!=typeof t,E=Array.isArray,C="[ \t\n\f\r]",T=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,M=/-->/g,j=/>/g,H=RegExp(`>|${C}(?:([^\\s"'>=/]+)(${C}*=${C}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),D=/'/g,N=/"/g,R=/^(?:script|style|textarea|title)$/i,P=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),z=Symbol.for("lit-noChange"),L=Symbol.for("lit-nothing"),I=new WeakMap,F=x.createTreeWalker(x,129,null,!1);function V(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==b?b.createHTML(e):e}const U=(t,e)=>{const i=t.length-1,n=[];let r,s=2===e?"<svg>":"",o=T;for(let a=0;a<i;a++){const e=t[a];let i,l,c=-1,h=0;for(;h<e.length&&(o.lastIndex=h,l=o.exec(e),null!==l);)h=o.lastIndex,o===T?"!--"===l[1]?o=M:void 0!==l[1]?o=j:void 0!==l[2]?(R.test(l[2])&&(r=RegExp("</"+l[2],"g")),o=H):void 0!==l[3]&&(o=H):o===H?">"===l[0]?(o=null!=r?r:T,c=-1):void 0===l[1]?c=-2:(c=o.lastIndex-l[2].length,i=l[1],o=void 0===l[3]?H:'"'===l[3]?N:D):o===N||o===D?o=H:o===M||o===j?o=T:(o=H,r=void 0);const u=o===H&&t[a+1].startsWith("/>")?" ":"";s+=o===T?e+k:c>=0?(n.push(i),e.slice(0,c)+$+e.slice(c)+w+u):e+w+(-2===c?(n.push(void 0),a):u)}return[V(t,s+(t[i]||"<?>")+(2===e?"</svg>":"")),n]};class B{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let r=0,s=0;const o=t.length-1,a=this.parts,[l,c]=U(t,e);if(this.el=B.createElement(l,i),F.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(n=F.nextNode())&&a.length<o;){if(1===n.nodeType){if(n.hasAttributes()){const t=[];for(const e of n.getAttributeNames())if(e.endsWith($)||e.startsWith(w)){const i=c[s++];if(t.push(e),void 0!==i){const t=n.getAttribute(i.toLowerCase()+$).split(w),e=/([.?@])?(.*)/.exec(i);a.push({type:1,index:r,name:e[2],strings:t,ctor:"."===e[1]?Y:"?"===e[1]?J:"@"===e[1]?Q:G})}else a.push({type:6,index:r})}for(const e of t)n.removeAttribute(e)}if(R.test(n.tagName)){const t=n.textContent.split(w),e=t.length-1;if(e>0){n.textContent=y?y.emptyScript:"";for(let i=0;i<e;i++)n.append(t[i],S()),F.nextNode(),a.push({type:2,index:++r});n.append(t[e],S())}}}else if(8===n.nodeType)if(n.data===A)a.push({type:2,index:r});else{let t=-1;for(;-1!==(t=n.data.indexOf(w,t+1));)a.push({type:7,index:r}),t+=w.length-1}r++}}static createElement(t,e){const i=x.createElement("template");return i.innerHTML=t,i}}function W(t,e,i=t,n){var r,s,o,a;if(e===z)return e;let l=void 0!==n?null===(r=i._$Co)||void 0===r?void 0:r[n]:i._$Cl;const c=O(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(s=null==l?void 0:l._$AO)||void 0===s||s.call(l,!1),void 0===c?l=void 0:(l=new c(t),l._$AT(t,i,n)),void 0!==n?(null!==(o=(a=i)._$Co)&&void 0!==o?o:a._$Co=[])[n]=l:i._$Cl=l),void 0!==l&&(e=W(t,l._$AS(t,e.values),l,n)),e}class q{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:n}=this._$AD,r=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:x).importNode(i,!0);F.currentNode=r;let s=F.nextNode(),o=0,a=0,l=n[0];for(;void 0!==l;){if(o===l.index){let e;2===l.type?e=new Z(s,s.nextSibling,this,t):1===l.type?e=new l.ctor(s,l.name,l.strings,this,t):6===l.type&&(e=new X(s,this,t)),this._$AV.push(e),l=n[++a]}o!==(null==l?void 0:l.index)&&(s=F.nextNode(),o++)}return F.currentNode=x,r}v(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Z{constructor(t,e,i,n){var r;this.type=2,this._$AH=L,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cp=null===(r=null==n?void 0:n.isConnected)||void 0===r||r}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=W(this,t,e),O(t)?t===L||null==t||""===t?(this._$AH!==L&&this._$AR(),this._$AH=L):t!==this._$AH&&t!==z&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>E(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==L&&O(this._$AH)?this._$AA.nextSibling.data=t:this.$(x.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:n}=t,r="number"==typeof n?this._$AC(t):(void 0===n.el&&(n.el=B.createElement(V(n.h,n.h[0]),this.options)),n);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===r)this._$AH.v(i);else{const t=new q(r,this),e=t.u(this.options);t.v(i),this.$(e),this._$AH=t}}_$AC(t){let e=I.get(t.strings);return void 0===e&&I.set(t.strings,e=new B(t)),e}T(t){E(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const r of t)n===e.length?e.push(i=new Z(this.k(S()),this.k(S()),this,this.options)):i=e[n],i._$AI(r),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class G{constructor(t,e,i,n,r){this.type=1,this._$AH=L,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=L}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,n){const r=this.strings;let s=!1;if(void 0===r)t=W(this,t,e,0),s=!O(t)||t!==this._$AH&&t!==z,s&&(this._$AH=t);else{const n=t;let o,a;for(t=r[0],o=0;o<r.length-1;o++)a=W(this,n[i+o],e,o),a===z&&(a=this._$AH[o]),s||(s=!O(a)||a!==this._$AH[o]),a===L?t=L:t!==L&&(t+=(null!=a?a:"")+r[o+1]),this._$AH[o]=a}s&&!n&&this.j(t)}j(t){t===L?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class Y extends G{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===L?void 0:t}}const K=y?y.emptyScript:"";class J extends G{constructor(){super(...arguments),this.type=4}j(t){t&&t!==L?this.element.setAttribute(this.name,K):this.element.removeAttribute(this.name)}}class Q extends G{constructor(t,e,i,n,r){super(t,e,i,n,r),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=W(this,t,e,0))&&void 0!==i?i:L)===z)return;const n=this._$AH,r=t===L&&n!==L||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,s=t!==L&&(n===L||r);r&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class X{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){W(this,t)}}const tt=v.litHtmlPolyfillSupport;null==tt||tt(B,Z),(null!==(_=v.litHtmlVersions)&&void 0!==_?_:v.litHtmlVersions=[]).push("2.8.0");var et,it;class nt extends g{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{var n,r;const s=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:e;let o=s._$litPart$;if(void 0===o){const t=null!==(r=null==i?void 0:i.renderBefore)&&void 0!==r?r:null;s._$litPart$=o=new Z(e.insertBefore(S(),t),t,void 0,null!=i?i:{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return z}}nt.finalized=!0,nt._$litElement$=!0,null===(et=globalThis.litElementHydrateSupport)||void 0===et||et.call(globalThis,{LitElement:nt});const rt=globalThis.litElementPolyfillSupport;null==rt||rt({LitElement:nt}),(null!==(it=globalThis.litElementVersions)&&void 0!==it?it:globalThis.litElementVersions=[]).push("3.3.3");const st=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function ot(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):st(t,e)}const at=({finisher:t,descriptor:e})=>(i,n)=>{var r;if(void 0===n){const n=null!==(r=i.originalKey)&&void 0!==r?r:i.key,s=null!=e?{kind:"method",placement:"prototype",key:n,descriptor:e(i.key)}:{...i,key:n};return null!=t&&(s.finisher=function(e){t(e,n)}),s}{const r=i.constructor;void 0!==e&&Object.defineProperty(i,n,e(n)),null==t||t(r,n)}};var lt;null===(lt=window.HTMLSlotElement)||void 0===lt||lt.prototype.assignedElements;const ct=1,ht=2,ut=t=>(...e)=>({_$litDirective$:t,values:e});class dt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}const ft=(t,e)=>{var i,n;const r=t._$AN;if(void 0===r)return!1;for(const s of r)null===(n=(i=s)._$AO)||void 0===n||n.call(i,e,!1),ft(s,e);return!0},pt=t=>{let e,i;do{if(void 0===(e=t._$AM))break;i=e._$AN,i.delete(t),t=e}while(0===(null==i?void 0:i.size))},mt=t=>{for(let e;e=t._$AM;t=e){let i=e._$AN;if(void 0===i)e._$AN=i=new Set;else if(i.has(t))break;i.add(t),vt(e)}};function gt(t){void 0!==this._$AN?(pt(this),this._$AM=t,mt(this)):this._$AM=t}function _t(t,e=!1,i=0){const n=this._$AH,r=this._$AN;if(void 0!==r&&0!==r.size)if(e)if(Array.isArray(n))for(let s=i;s<n.length;s++)ft(n[s],!1),pt(n[s]);else null!=n&&(ft(n,!1),pt(n));else ft(this,t)}const vt=t=>{var e,i,n,r;t.type==ht&&(null!==(e=(n=t)._$AP)&&void 0!==e||(n._$AP=_t),null!==(i=(r=t)._$AQ)&&void 0!==i||(r._$AQ=gt))};class yt extends dt{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,i){super._$AT(t,e,i),mt(this),this.isConnected=t._$AU}_$AO(t,e=!0){var i,n;t!==this.isConnected&&(this.isConnected=t,t?null===(i=this.reconnected)||void 0===i||i.call(this):null===(n=this.disconnected)||void 0===n||n.call(this)),e&&(ft(this,t),pt(this))}setValue(t){if((t=>void 0===t.strings)(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}class bt{constructor(t){this.G=t}disconnect(){this.G=void 0}reconnect(t){this.G=t}deref(){return this.G}}class $t{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){var t;null!==(t=this.Y)&&void 0!==t||(this.Y=new Promise((t=>this.Z=t)))}resume(){var t;null===(t=this.Z)||void 0===t||t.call(this),this.Y=this.Z=void 0}}const wt=t=>!(t=>null===t||"object"!=typeof t&&"function"!=typeof t)(t)&&"function"==typeof t.then,At=1073741823;const kt=ut(class extends yt{constructor(){super(...arguments),this._$C_t=At,this._$Cwt=[],this._$Cq=new bt(this),this._$CK=new $t}render(...t){var e;return null!==(e=t.find((t=>!wt(t))))&&void 0!==e?e:z}update(t,e){const i=this._$Cwt;let n=i.length;this._$Cwt=e;const r=this._$Cq,s=this._$CK;this.isConnected||this.disconnected();for(let o=0;o<e.length&&!(o>this._$C_t);o++){const t=e[o];if(!wt(t))return this._$C_t=o,t;o<n&&t===i[o]||(this._$C_t=At,n=0,Promise.resolve(t).then((async e=>{for(;s.get();)await s.get();const i=r.deref();if(void 0!==i){const n=i._$Cwt.indexOf(t);n>-1&&n<i._$C_t&&(i._$C_t=n,i.setValue(e))}})))}return z}disconnected(){this._$Cq.disconnect(),this._$CK.pause()}reconnected(){this._$Cq.reconnect(this),this._$CK.resume()}});class xt{constructor(t){this.startPress=e=>{t().then((t=>{t&&t.startPress(e)}))},this.endPress=()=>{t().then((t=>{t&&t.endPress()}))},this.startFocus=()=>{t().then((t=>{t&&t.startFocus()}))},this.endFocus=()=>{t().then((t=>{t&&t.endFocus()}))},this.startHover=()=>{t().then((t=>{t&&t.startHover()}))},this.endHover=()=>{t().then((t=>{t&&t.endHover()}))}}}const St="important",Ot=" !"+St,Et=ut(class extends dt{constructor(t){var e;if(super(t),t.type!==ct||"style"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,i)=>{const n=t[i];return null==n?e:e+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${n};`}),"")}update(t,[e]){const{style:i}=t.element;if(void 0===this.ht){this.ht=new Set;for(const t in e)this.ht.add(t);return this.render(e)}this.ht.forEach((t=>{null==e[t]&&(this.ht.delete(t),t.includes("-")?i.removeProperty(t):i[t]="")}));for(const n in e){const t=e[n];if(null!=t){this.ht.add(n);const e="string"==typeof t&&t.endsWith(Ot);n.includes("-")||e?i.setProperty(n,e?t.slice(0,-11):t,e?St:""):i[n]=t}}return z}});class Ct extends dt{constructor(t){if(super(t),this.et=L,t.type!==ht)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===L||null==t)return this.ft=void 0,this.et=t;if(t===z)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.ft;this.et=t;const e=[t];return e.raw=e,this.ft={_$litType$:this.constructor.resultType,strings:e,values:[]}}}Ct.directiveName="unsafeHTML",Ct.resultType=1;const Tt=ut(Ct),Mt=ut(class extends dt{constructor(t){var e;if(super(t),t.type!==ct||"class"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){var i,n;if(void 0===this.it){this.it=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in e)e[t]&&!(null===(i=this.nt)||void 0===i?void 0:i.has(t))&&this.it.add(t);return this.render(e)}const r=t.element.classList;this.it.forEach((t=>{t in e||(r.remove(t),this.it.delete(t))}));for(const s in e){const t=!!e[s];t===this.it.has(s)||(null===(n=this.nt)||void 0===n?void 0:n.has(s))||(t?(r.add(s),this.it.add(s)):(r.remove(s),this.it.delete(s)))}return z}}),jt=(t,e,i,n)=>{n=n||{},i=null==i?{}:i;const r=new Event(e,{bubbles:void 0===n.bubbles||n.bubbles,cancelable:Boolean(n.cancelable),composed:void 0===n.composed||n.composed});return r.detail=i,t.dispatchEvent(r),r},Ht=(t,e)=>{if(t===e)return!0;if(t&&e&&"object"==typeof t&&"object"==typeof e){if(t.constructor!==e.constructor)return!1;let i,n;if(Array.isArray(t)){if(n=t.length,n!==e.length)return!1;for(i=n;0!=i--;)if(!Ht(t[i],e[i]))return!1;return!0}if(t instanceof Map&&e instanceof Map){if(t.size!==e.size)return!1;for(i of t.entries())if(!e.has(i[0]))return!1;for(i of t.entries())if(!Ht(i[1],e.get(i[0])))return!1;return!0}if(t instanceof Set&&e instanceof Set){if(t.size!==e.size)return!1;for(i of t.entries())if(!e.has(i[0]))return!1;return!0}if(ArrayBuffer.isView(t)&&ArrayBuffer.isView(e)){if(n=t.length,n!==e.length)return!1;for(i=n;0!=i--;)if(t[i]!==e[i])return!1;return!0}if(t.constructor===RegExp)return t.source===e.source&&t.flags===e.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===e.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===e.toString();const r=Object.keys(t);if(n=r.length,n!==Object.keys(e).length)return!1;for(i=n;0!=i--;)if(!Object.prototype.hasOwnProperty.call(e,r[i]))return!1;for(i=n;0!=i--;){const n=r[i];if(!Ht(t[n],e[n]))return!1}return!0}return t!=t&&e!=e},Dt="ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0;class Nt extends HTMLElement{constructor(){super(),this.holdTime=500,this.held=!1,this.cancelled=!1,this.isRepeating=!1,this.repeatCount=0,this.ripple=document.createElement("mwc-ripple")}connectedCallback(){Object.assign(this.style,{position:"fixed",width:Dt?"100px":"50px",height:Dt?"100px":"50px",transform:"translate(-50%, -50%)",pointerEvents:"none",zIndex:"999"}),this.appendChild(this.ripple),this.ripple.primary=!0,["touchcancel","mouseout","mouseup","touchmove","mousewheel","wheel","scroll"].forEach((t=>{document.addEventListener(t,(()=>{this.cancelled=!0,this.timer&&(this.stopAnimation(),clearTimeout(this.timer),this.timer=void 0,this.isRepeating&&this.repeatTimeout&&(clearInterval(this.repeatTimeout),this.isRepeating=!1))}),{passive:!0})}))}bind(t,e){t.actionHandler&&Ht(e,t.actionHandler.options)||(t.actionHandler?(t.removeEventListener("touchstart",t.actionHandler.start),t.removeEventListener("touchend",t.actionHandler.end),t.removeEventListener("touchcancel",t.actionHandler.end),t.removeEventListener("mousedown",t.actionHandler.start),t.removeEventListener("click",t.actionHandler.end),t.removeEventListener("keyup",t.actionHandler.handleEnter)):t.addEventListener("contextmenu",(t=>{const e=t||window.event;return e.preventDefault&&e.preventDefault(),e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0,e.returnValue=!1,!1})),t.actionHandler={options:e},e.disabled||(t.actionHandler.start=i=>{let n,r;this.cancelled=!1,i.touches?(n=i.touches[0].clientX,r=i.touches[0].clientY):(n=i.clientX,r=i.clientY),e.hasHold&&(this.held=!1,this.timer=window.setTimeout((()=>{this.startAnimation(n,r),this.held=!0,e.repeat&&!this.isRepeating&&(this.repeatCount=0,this.isRepeating=!0,this.repeatTimeout=setInterval((()=>{jt(t,"action",{action:"hold"}),this.repeatCount++,this.repeatTimeout&&e.repeatLimit&&this.repeatCount>=e.repeatLimit&&(clearInterval(this.repeatTimeout),this.isRepeating=!1)}),e.repeat))}),this.holdTime))},t.actionHandler.end=t=>{if(["touchend","touchcancel"].includes(t.type)&&this.cancelled)return void(this.isRepeating&&this.repeatTimeout&&(clearInterval(this.repeatTimeout),this.isRepeating=!1));if("touchcancel"==t.type)return;const i=t.target;t.cancelable&&t.preventDefault(),e.hasHold&&(clearTimeout(this.timer),this.isRepeating&&this.repeatTimeout&&clearInterval(this.repeatTimeout),this.isRepeating=!1,this.stopAnimation(),this.timer=void 0),e.hasHold&&this.held?e.repeat||jt(i,"action",{action:"hold"}):e.hasDoubleClick?"click"===t.type&&t.detail<2||!this.dblClickTimeout?this.dblClickTimeout=window.setTimeout((()=>{this.dblClickTimeout=void 0,jt(i,"action",{action:"tap"})}),250):(clearTimeout(this.dblClickTimeout),this.dblClickTimeout=void 0,jt(i,"action",{action:"double_tap"})):jt(i,"action",{action:"tap"})},t.actionHandler.handleEnter=t=>{13===t.keyCode&&t.currentTarget.actionHandler.end(t)},t.addEventListener("touchstart",t.actionHandler.start,{passive:!0}),t.addEventListener("touchend",t.actionHandler.end),t.addEventListener("touchcancel",t.actionHandler.end),t.addEventListener("mousedown",t.actionHandler.start,{passive:!0}),t.addEventListener("click",t.actionHandler.end),t.addEventListener("keyup",t.actionHandler.handleEnter)))}startAnimation(t,e){Object.assign(this.style,{left:`${t}px`,top:`${e}px`,display:null}),this.ripple.disabled=!1,this.ripple.startPress(),this.ripple.unbounded=!0}stopAnimation(){this.ripple.endPress(),this.ripple.disabled=!0,this.style.display="none"}}customElements.define("button-card-action-handler",Nt);const Rt=(t,e)=>{const i=(()=>{const t=document.body;if(t.querySelector("button-card-action-handler"))return t.querySelector("button-card-action-handler");const e=document.createElement("button-card-action-handler");return t.appendChild(e),e})();i&&i.bind(t,e)},Pt=ut(class extends dt{update(t,[e]){return Rt(t.element,e),z}render(t){}});function zt(t,e){(function(t){return"string"==typeof t&&-1!==t.indexOf(".")&&1===parseFloat(t)})(t)&&(t="100%");var i=function(t){return"string"==typeof t&&-1!==t.indexOf("%")}(t);return t=360===e?t:Math.min(e,Math.max(0,parseFloat(t))),i&&(t=parseInt(String(t*e),10)/100),Math.abs(t-e)<1e-6?1:t=360===e?(t<0?t%e+e:t%e)/parseFloat(String(e)):t%e/parseFloat(String(e))}function Lt(t){return Math.min(1,Math.max(0,t))}function It(t){return t=parseFloat(t),(isNaN(t)||t<0||t>1)&&(t=1),t}function Ft(t){return t<=1?"".concat(100*Number(t),"%"):t}function Vt(t){return 1===t.length?"0"+t:String(t)}function Ut(t,e,i){t=zt(t,255),e=zt(e,255),i=zt(i,255);var n=Math.max(t,e,i),r=Math.min(t,e,i),s=0,o=0,a=(n+r)/2;if(n===r)o=0,s=0;else{var l=n-r;switch(o=a>.5?l/(2-n-r):l/(n+r),n){case t:s=(e-i)/l+(e<i?6:0);break;case e:s=(i-t)/l+2;break;case i:s=(t-e)/l+4}s/=6}return{h:s,s:o,l:a}}function Bt(t,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?t+6*i*(e-t):i<.5?e:i<2/3?t+(e-t)*(2/3-i)*6:t}function Wt(t,e,i){t=zt(t,255),e=zt(e,255),i=zt(i,255);var n=Math.max(t,e,i),r=Math.min(t,e,i),s=0,o=n,a=n-r,l=0===n?0:a/n;if(n===r)s=0;else{switch(n){case t:s=(e-i)/a+(e<i?6:0);break;case e:s=(i-t)/a+2;break;case i:s=(t-e)/a+4}s/=6}return{h:s,s:l,v:o}}function qt(t,e,i,n){var r=[Vt(Math.round(t).toString(16)),Vt(Math.round(e).toString(16)),Vt(Math.round(i).toString(16))];return n&&r[0].startsWith(r[0].charAt(1))&&r[1].startsWith(r[1].charAt(1))&&r[2].startsWith(r[2].charAt(1))?r[0].charAt(0)+r[1].charAt(0)+r[2].charAt(0):r.join("")}function Zt(t){return Math.round(255*parseFloat(t)).toString(16)}function Gt(t){return Yt(t)/255}function Yt(t){return parseInt(t,16)}var Kt={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function Jt(t){var e={r:0,g:0,b:0},i=1,n=null,r=null,s=null,o=!1,a=!1;return"string"==typeof t&&(t=function(t){if(t=t.trim().toLowerCase(),0===t.length)return!1;var e=!1;if(Kt[t])t=Kt[t],e=!0;else if("transparent"===t)return{r:0,g:0,b:0,a:0,format:"name"};var i=ee.rgb.exec(t);if(i)return{r:i[1],g:i[2],b:i[3]};if(i=ee.rgba.exec(t),i)return{r:i[1],g:i[2],b:i[3],a:i[4]};if(i=ee.hsl.exec(t),i)return{h:i[1],s:i[2],l:i[3]};if(i=ee.hsla.exec(t),i)return{h:i[1],s:i[2],l:i[3],a:i[4]};if(i=ee.hsv.exec(t),i)return{h:i[1],s:i[2],v:i[3]};if(i=ee.hsva.exec(t),i)return{h:i[1],s:i[2],v:i[3],a:i[4]};if(i=ee.hex8.exec(t),i)return{r:Yt(i[1]),g:Yt(i[2]),b:Yt(i[3]),a:Gt(i[4]),format:e?"name":"hex8"};if(i=ee.hex6.exec(t),i)return{r:Yt(i[1]),g:Yt(i[2]),b:Yt(i[3]),format:e?"name":"hex"};if(i=ee.hex4.exec(t),i)return{r:Yt(i[1]+i[1]),g:Yt(i[2]+i[2]),b:Yt(i[3]+i[3]),a:Gt(i[4]+i[4]),format:e?"name":"hex8"};if(i=ee.hex3.exec(t),i)return{r:Yt(i[1]+i[1]),g:Yt(i[2]+i[2]),b:Yt(i[3]+i[3]),format:e?"name":"hex"};return!1}(t)),"object"==typeof t&&(ie(t.r)&&ie(t.g)&&ie(t.b)?(e=function(t,e,i){return{r:255*zt(t,255),g:255*zt(e,255),b:255*zt(i,255)}}(t.r,t.g,t.b),o=!0,a="%"===String(t.r).substr(-1)?"prgb":"rgb"):ie(t.h)&&ie(t.s)&&ie(t.v)?(n=Ft(t.s),r=Ft(t.v),e=function(t,e,i){t=6*zt(t,360),e=zt(e,100),i=zt(i,100);var n=Math.floor(t),r=t-n,s=i*(1-e),o=i*(1-r*e),a=i*(1-(1-r)*e),l=n%6;return{r:255*[i,o,s,s,a,i][l],g:255*[a,i,i,o,s,s][l],b:255*[s,s,a,i,i,o][l]}}(t.h,n,r),o=!0,a="hsv"):ie(t.h)&&ie(t.s)&&ie(t.l)&&(n=Ft(t.s),s=Ft(t.l),e=function(t,e,i){var n,r,s;if(t=zt(t,360),e=zt(e,100),i=zt(i,100),0===e)r=i,s=i,n=i;else{var o=i<.5?i*(1+e):i+e-i*e,a=2*i-o;n=Bt(a,o,t+1/3),r=Bt(a,o,t),s=Bt(a,o,t-1/3)}return{r:255*n,g:255*r,b:255*s}}(t.h,n,s),o=!0,a="hsl"),Object.prototype.hasOwnProperty.call(t,"a")&&(i=t.a)),i=It(i),{ok:o,format:t.format||a,r:Math.min(255,Math.max(e.r,0)),g:Math.min(255,Math.max(e.g,0)),b:Math.min(255,Math.max(e.b,0)),a:i}}var Qt="(?:".concat("[-\\+]?\\d*\\.\\d+%?",")|(?:").concat("[-\\+]?\\d+%?",")"),Xt="[\\s|\\(]+(".concat(Qt,")[,|\\s]+(").concat(Qt,")[,|\\s]+(").concat(Qt,")\\s*\\)?"),te="[\\s|\\(]+(".concat(Qt,")[,|\\s]+(").concat(Qt,")[,|\\s]+(").concat(Qt,")[,|\\s]+(").concat(Qt,")\\s*\\)?"),ee={CSS_UNIT:new RegExp(Qt),rgb:new RegExp("rgb"+Xt),rgba:new RegExp("rgba"+te),hsl:new RegExp("hsl"+Xt),hsla:new RegExp("hsla"+te),hsv:new RegExp("hsv"+Xt),hsva:new RegExp("hsva"+te),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function ie(t){return Boolean(ee.CSS_UNIT.exec(String(t)))}var ne=function(){function t(e,i){var n;if(void 0===e&&(e=""),void 0===i&&(i={}),e instanceof t)return e;"number"==typeof e&&(e=function(t){return{r:t>>16,g:(65280&t)>>8,b:255&t}}(e)),this.originalInput=e;var r=Jt(e);this.originalInput=e,this.r=r.r,this.g=r.g,this.b=r.b,this.a=r.a,this.roundA=Math.round(100*this.a)/100,this.format=null!==(n=i.format)&&void 0!==n?n:r.format,this.gradientType=i.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=r.ok}return t.prototype.isDark=function(){return this.getBrightness()<128},t.prototype.isLight=function(){return!this.isDark()},t.prototype.getBrightness=function(){var t=this.toRgb();return(299*t.r+587*t.g+114*t.b)/1e3},t.prototype.getLuminance=function(){var t=this.toRgb(),e=t.r/255,i=t.g/255,n=t.b/255;return.2126*(e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4))+.7152*(i<=.03928?i/12.92:Math.pow((i+.055)/1.055,2.4))+.0722*(n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4))},t.prototype.getAlpha=function(){return this.a},t.prototype.setAlpha=function(t){return this.a=It(t),this.roundA=Math.round(100*this.a)/100,this},t.prototype.isMonochrome=function(){return 0===this.toHsl().s},t.prototype.toHsv=function(){var t=Wt(this.r,this.g,this.b);return{h:360*t.h,s:t.s,v:t.v,a:this.a}},t.prototype.toHsvString=function(){var t=Wt(this.r,this.g,this.b),e=Math.round(360*t.h),i=Math.round(100*t.s),n=Math.round(100*t.v);return 1===this.a?"hsv(".concat(e,", ").concat(i,"%, ").concat(n,"%)"):"hsva(".concat(e,", ").concat(i,"%, ").concat(n,"%, ").concat(this.roundA,")")},t.prototype.toHsl=function(){var t=Ut(this.r,this.g,this.b);return{h:360*t.h,s:t.s,l:t.l,a:this.a}},t.prototype.toHslString=function(){var t=Ut(this.r,this.g,this.b),e=Math.round(360*t.h),i=Math.round(100*t.s),n=Math.round(100*t.l);return 1===this.a?"hsl(".concat(e,", ").concat(i,"%, ").concat(n,"%)"):"hsla(".concat(e,", ").concat(i,"%, ").concat(n,"%, ").concat(this.roundA,")")},t.prototype.toHex=function(t){return void 0===t&&(t=!1),qt(this.r,this.g,this.b,t)},t.prototype.toHexString=function(t){return void 0===t&&(t=!1),"#"+this.toHex(t)},t.prototype.toHex8=function(t){return void 0===t&&(t=!1),function(t,e,i,n,r){var s=[Vt(Math.round(t).toString(16)),Vt(Math.round(e).toString(16)),Vt(Math.round(i).toString(16)),Vt(Zt(n))];return r&&s[0].startsWith(s[0].charAt(1))&&s[1].startsWith(s[1].charAt(1))&&s[2].startsWith(s[2].charAt(1))&&s[3].startsWith(s[3].charAt(1))?s[0].charAt(0)+s[1].charAt(0)+s[2].charAt(0)+s[3].charAt(0):s.join("")}(this.r,this.g,this.b,this.a,t)},t.prototype.toHex8String=function(t){return void 0===t&&(t=!1),"#"+this.toHex8(t)},t.prototype.toHexShortString=function(t){return void 0===t&&(t=!1),1===this.a?this.toHexString(t):this.toHex8String(t)},t.prototype.toRgb=function(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}},t.prototype.toRgbString=function(){var t=Math.round(this.r),e=Math.round(this.g),i=Math.round(this.b);return 1===this.a?"rgb(".concat(t,", ").concat(e,", ").concat(i,")"):"rgba(".concat(t,", ").concat(e,", ").concat(i,", ").concat(this.roundA,")")},t.prototype.toPercentageRgb=function(){var t=function(t){return"".concat(Math.round(100*zt(t,255)),"%")};return{r:t(this.r),g:t(this.g),b:t(this.b),a:this.a}},t.prototype.toPercentageRgbString=function(){var t=function(t){return Math.round(100*zt(t,255))};return 1===this.a?"rgb(".concat(t(this.r),"%, ").concat(t(this.g),"%, ").concat(t(this.b),"%)"):"rgba(".concat(t(this.r),"%, ").concat(t(this.g),"%, ").concat(t(this.b),"%, ").concat(this.roundA,")")},t.prototype.toName=function(){if(0===this.a)return"transparent";if(this.a<1)return!1;for(var t="#"+qt(this.r,this.g,this.b,!1),e=0,i=Object.entries(Kt);e<i.length;e++){var n=i[e],r=n[0];if(t===n[1])return r}return!1},t.prototype.toString=function(t){var e=Boolean(t);t=null!=t?t:this.format;var i=!1,n=this.a<1&&this.a>=0;return e||!n||!t.startsWith("hex")&&"name"!==t?("rgb"===t&&(i=this.toRgbString()),"prgb"===t&&(i=this.toPercentageRgbString()),"hex"!==t&&"hex6"!==t||(i=this.toHexString()),"hex3"===t&&(i=this.toHexString(!0)),"hex4"===t&&(i=this.toHex8String(!0)),"hex8"===t&&(i=this.toHex8String()),"name"===t&&(i=this.toName()),"hsl"===t&&(i=this.toHslString()),"hsv"===t&&(i=this.toHsvString()),i||this.toHexString()):"name"===t&&0===this.a?this.toName():this.toRgbString()},t.prototype.toNumber=function(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)},t.prototype.clone=function(){return new t(this.toString())},t.prototype.lighten=function(e){void 0===e&&(e=10);var i=this.toHsl();return i.l+=e/100,i.l=Lt(i.l),new t(i)},t.prototype.brighten=function(e){void 0===e&&(e=10);var i=this.toRgb();return i.r=Math.max(0,Math.min(255,i.r-Math.round(-e/100*255))),i.g=Math.max(0,Math.min(255,i.g-Math.round(-e/100*255))),i.b=Math.max(0,Math.min(255,i.b-Math.round(-e/100*255))),new t(i)},t.prototype.darken=function(e){void 0===e&&(e=10);var i=this.toHsl();return i.l-=e/100,i.l=Lt(i.l),new t(i)},t.prototype.tint=function(t){return void 0===t&&(t=10),this.mix("white",t)},t.prototype.shade=function(t){return void 0===t&&(t=10),this.mix("black",t)},t.prototype.desaturate=function(e){void 0===e&&(e=10);var i=this.toHsl();return i.s-=e/100,i.s=Lt(i.s),new t(i)},t.prototype.saturate=function(e){void 0===e&&(e=10);var i=this.toHsl();return i.s+=e/100,i.s=Lt(i.s),new t(i)},t.prototype.greyscale=function(){return this.desaturate(100)},t.prototype.spin=function(e){var i=this.toHsl(),n=(i.h+e)%360;return i.h=n<0?360+n:n,new t(i)},t.prototype.mix=function(e,i){void 0===i&&(i=50);var n=this.toRgb(),r=new t(e).toRgb(),s=i/100;return new t({r:(r.r-n.r)*s+n.r,g:(r.g-n.g)*s+n.g,b:(r.b-n.b)*s+n.b,a:(r.a-n.a)*s+n.a})},t.prototype.analogous=function(e,i){void 0===e&&(e=6),void 0===i&&(i=30);var n=this.toHsl(),r=360/i,s=[this];for(n.h=(n.h-(r*e>>1)+720)%360;--e;)n.h=(n.h+r)%360,s.push(new t(n));return s},t.prototype.complement=function(){var e=this.toHsl();return e.h=(e.h+180)%360,new t(e)},t.prototype.monochromatic=function(e){void 0===e&&(e=6);for(var i=this.toHsv(),n=i.h,r=i.s,s=i.v,o=[],a=1/e;e--;)o.push(new t({h:n,s:r,v:s})),s=(s+a)%1;return o},t.prototype.splitcomplement=function(){var e=this.toHsl(),i=e.h;return[this,new t({h:(i+72)%360,s:e.s,l:e.l}),new t({h:(i+216)%360,s:e.s,l:e.l})]},t.prototype.onBackground=function(e){var i=this.toRgb(),n=new t(e).toRgb(),r=i.a+n.a*(1-i.a);return new t({r:(i.r*i.a+n.r*n.a*(1-i.a))/r,g:(i.g*i.a+n.g*n.a*(1-i.a))/r,b:(i.b*i.a+n.b*n.a*(1-i.a))/r,a:r})},t.prototype.triad=function(){return this.polyad(3)},t.prototype.tetrad=function(){return this.polyad(4)},t.prototype.polyad=function(e){for(var i=this.toHsl(),n=i.h,r=[this],s=360/e,o=1;o<e;o++)r.push(new t({h:(n+o*s)%360,s:i.s,l:i.l}));return r},t.prototype.equals=function(e){return this.toRgbString()===new t(e).toRgbString()},t}();function re(t,e){return void 0===t&&(t=""),void 0===e&&(e={}),new ne(t,e)}const se="sections",oe=[se],ae="unavailable",le=(ce=[ae,"unknown"],(t,e)=>ce.includes(t,e));var ce;const he=new Set(["fan","input_boolean","light","switch","group","automation","humidifier"]),ue=new Set(["input_button"]),de=["auto","auto-no-temperature"],fe=["card","label-card"],pe=["--ha-card-background","--card-background-color"],me="var(--primary-text-color)";function ge(t){return t.substr(0,t.indexOf("."))}function _e(t,e){const i=[];let n=e;return"var"===e.trim().substring(0,3)&&(e.split(",").forEach((t=>{const e=t.match(/var\(\s*([a-zA-Z0-9-]*)/);e&&i.push(e[1])})),i.some((e=>{const i=window.getComputedStyle(t).getPropertyValue(e);return!!i&&(n=i,!0)}))),n}function ve(...t){const e=t=>t&&"object"==typeof t;return t.reduce(((t,i)=>(Object.keys(i).forEach((n=>{const r=t[n],s=i[n];Array.isArray(r)&&Array.isArray(s)?t[n]=r.concat(...s):e(r)&&e(s)?t[n]=ve(r,s):t[n]=s})),t)),{})}function ye(t,e){let i=[];return t&&t.forEach((t=>{let n=t;e&&e.forEach((e=>{e.id&&t.id&&e.id==t.id&&(n=ve(n,e))})),i.push(n)})),e&&(i=i.concat(e.filter((e=>!t||!t.find((t=>!(!t.id||!e.id)&&t.id==e.id)))))),i}function be(){var t;let e=document.querySelector("hc-main");if(e=e&&e.shadowRoot,e=e&&e.querySelector("hc-lovelace"),e=e&&e.shadowRoot,e=e&&(e.querySelector("hui-view")||e.querySelector("hui-panel-view")),e){const i=e.lovelace;return i.current_view=null!==(t=null==e?void 0:e._curView)&&void 0!==t?t:0,i}return null}function $e(){var t;let e=document.querySelector("home-assistant");if(e=e&&e.shadowRoot,e=e&&e.querySelector("home-assistant-main"),e=e&&e.shadowRoot,e=e&&e.querySelector("app-drawer-layout partial-panel-resolver, ha-drawer partial-panel-resolver"),e=e&&e.shadowRoot||e,e=e&&e.querySelector("ha-panel-lovelace"),e=e&&e.shadowRoot,e=e&&e.querySelector("hui-root"),e){const i=e.lovelace;return i.current_view=null!==(t=null==e?void 0:e._curView)&&void 0!==t?t:0,i}return null}const we=()=>{const t=function(){var t;const e=$e()||be();return(null==e?void 0:e.current_view)?null===(t=e.config)||void 0===t?void 0:t.views[e.current_view]:void 0}(),e=(null==(i=t)?void 0:i.type)?i.type:(null==i?void 0:i.panel)?"panel":(null==i?void 0:i.sections)?se:(null==i?void 0:i.cards)?"masonry":se;var i;return oe.includes(e)};function Ae(t,e){if(void 0===t)return!1;const i=ge(t.entity_id),n=void 0!==e?e:null==t?void 0:t.state;if(["button","event","input_button","scene"].includes(i))return n!==ae;if(le(n))return!1;if("off"===n&&"alert"!==i)return!1;switch(i){case"alarm_control_panel":return"disarmed"!==n;case"alert":return"idle"!==n;case"cover":return"closed"!==n;case"device_tracker":case"person":return"not_home"!==n;case"lock":return"locked"!==n;case"media_player":return"standby"!==n;case"vacuum":return!["idle","docked","paused"].includes(n);case"plant":return"problem"===n;case"group":return["on","home","open","locked","problem"].includes(n);case"timer":return"active"===n;case"camera":return"streaming"===n}return!0}function ke(t){return Array.isArray(t)?t.reverse().reduce(((t,e)=>`var(${e}${t?`, ${t}`:""})`),void 0):`var(${t})`}function xe(t){const e=t.split(":").map(Number);return 3600*e[0]+60*e[1]+e[2]}const Se=t=>t<10?`0${t}`:t;const Oe=t=>t.startsWith("media-source://"),Ee=(t,e)=>t.callWS({type:"media_source/resolve_media",media_content_id:e}),Ce=(t,e,i,n,r,s)=>{const o=[];(null==r?void 0:r.length)&&o.push((t=>r.includes(ge(t)))),s&&o.push((e=>t.states[e]&&s(t.states[e])));const a=((t,e,i)=>{(!i||i>t.length)&&(i=t.length);const n=[];for(let r=0;r<t.length&&n.length<i;r++){let i=!0;for(const n of e)if(!n(t[r])){i=!1;break}i&&n.push(t[r])}return n})(i,o,e);if(a.length<e&&n.length){const i=Ce(t,e-a.length,n,[],r,s);a.push(...i)}return a},Te=new Set(["call-service","divider","section","weblink","cast","select"]),Me={alert:"toggle",automation:"toggle",climate:"climate",cover:"cover",fan:"toggle",group:"group",input_boolean:"toggle",input_number:"input-number",input_select:"input-select",input_text:"input-text",light:"toggle",lock:"lock",media_player:"media-player",remote:"toggle",scene:"scene",script:"script",sensor:"sensor",timer:"timer",switch:"toggle",vacuum:"toggle",water_heater:"climate",input_datetime:"input-datetime"},je=((t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[n+1]),t[0]);return new s(i,t,n)})`
  :host {
    position: relative;
    display: block;
    --state-inactive-color: var(--state-icon-color);
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
  :host(.tooltip) .tooltiptext {
    pointer-events: none;
    opacity: 0;
    text-align: center;
    padding: 4px;
    border-radius: var(--ha-card-border-radius, 4px);
    box-shadow: var(
      --ha-card-box-shadow,
      0px 2px 1px -1px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14),
      0px 1px 3px 0px rgba(0, 0, 0, 0.12)
    );
    background: var(--ha-card-background, var(--card-background-color, white));
    border: 1px solid var(--primary-text-color);
    color: var(--primary-text-color);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  :host(.tooltip:hover) span.tooltiptext {
    opacity: 1;
    transition-delay: 1.5s;
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
    transition: visibility 0s 1s, opacity 1s linear;
  }
  @keyframes blink {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
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
`;var He,De,Ne,Re,Pe;!function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(He||(He={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(De||(De={})),function(t){t.local="local",t.server="server"}(Ne||(Ne={})),function(t){t.language="language",t.system="system",t.DMY="DMY",t.MDY="MDY",t.YMD="YMD"}(Re||(Re={})),function(t){t.language="language",t.monday="monday",t.tuesday="tuesday",t.wednesday="wednesday",t.thursday="thursday",t.friday="friday",t.saturday="saturday",t.sunday="sunday"}(Pe||(Pe={}));const ze=(t,e,i)=>{const n=e?(t=>{switch(t.number_format){case He.comma_decimal:return["en-US","en"];case He.decimal_comma:return["de","es","it"];case He.space_comma:return["fr","sv","cs"];case He.system:return;default:return t.language}})(e):void 0;if(Number.isNaN=Number.isNaN||function t(e){return"number"==typeof e&&t(e)},(null==e?void 0:e.number_format)!==He.none&&!Number.isNaN(Number(t))&&Intl)try{return new Intl.NumberFormat(n,Ie(t,i)).format(Number(t))}catch(r){return console.error(r),new Intl.NumberFormat(void 0,Ie(t,i)).format(Number(t))}return"string"==typeof t?t:`${((t,e=2)=>Math.round(t*10**e)/10**e)(t,null==i?void 0:i.maximumFractionDigits).toString()}${"currency"===(null==i?void 0:i.style)?` ${i.currency}`:""}`},Le=(t,e,i)=>{var n;let r=null==i?void 0:i.display_precision;return void 0!==e&&(r=e),null!=r?{maximumFractionDigits:r,minimumFractionDigits:r}:Number.isInteger(Number(null===(n=t.attributes)||void 0===n?void 0:n.step))&&Number.isInteger(Number(t.state))?{maximumFractionDigits:0}:null!=t.attributes.step?{maximumFractionDigits:Math.ceil(Math.log10(1/t.attributes.step))}:void 0},Ie=(t,e)=>{const i=Object.assign({maximumFractionDigits:2},e);if("string"!=typeof t)return i;if(!e||void 0===e.minimumFractionDigits&&void 0===e.maximumFractionDigits){const e=t.indexOf(".")>-1?t.split(".")[1].length:0;i.minimumFractionDigits=e,i.maximumFractionDigits=e}return i};var Fe,Ve,Ue,Be,We;!function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(Fe||(Fe={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(Ve||(Ve={})),function(t){t.local="local",t.server="server"}(Ue||(Ue={})),function(t){t.language="language",t.system="system",t.DMY="DMY",t.MDY="MDY",t.YMD="YMD"}(Be||(Be={})),function(t){t.language="language",t.monday="monday",t.tuesday="tuesday",t.wednesday="wednesday",t.thursday="thursday",t.friday="friday",t.saturday="saturday",t.sunday="sunday"}(We||(We={}));const qe=(t,e=2)=>{let i=""+t;for(let n=1;n<e;n++)i=parseInt(i)<10**n?`0${i}`:i;return i};const Ze={ms:1,s:1e3,min:6e4,h:36e5,d:864e5},Ge=(t,e)=>function(t){const e=Math.floor(t/1e3/3600),i=Math.floor(t/1e3%3600/60),n=Math.floor(t/1e3%3600%60),r=Math.floor(t%1e3);return e>0?`${e}:${qe(i)}:${qe(n)}`:i>0?`${i}:${qe(n)}`:n>0||r>0?`${n}${r>0?`.${qe(r,3)}`:""}`:null}(parseFloat(t)*Ze[e])||"0";var Ye=Number.isNaN||function(t){return"number"==typeof t&&t!=t};function Ke(t,e){if(t.length!==e.length)return!1;for(var i=0;i<t.length;i++)if(n=t[i],r=e[i],!(n===r||Ye(n)&&Ye(r)))return!1;var n,r;return!0}function Je(t,e){void 0===e&&(e=Ke);var i=null;function n(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];if(i&&i.lastThis===this&&e(n,i.lastArgs))return i.lastResult;var s=t.apply(this,n);return i={lastResult:s,lastArgs:n,lastThis:this},s}return n.clear=function(){i=null},n}const Qe=Je(((t,e)=>new Intl.DateTimeFormat(t.language,{weekday:"long",month:"long",day:"numeric",timeZone:"server"===t.time_zone?e:void 0}))),Xe=(t,e,i)=>ti(e,i.time_zone).format(t),ti=Je(((t,e)=>new Intl.DateTimeFormat(t.language,{year:"numeric",month:"long",day:"numeric",timeZone:"server"===t.time_zone?e:void 0}))),ei=(t,e,i)=>{var n,r,s,o;const a=ii(e,i.time_zone);if(e.date_format===Re.language||e.date_format===Re.system)return a.format(t);const l=a.formatToParts(t),c=null===(n=l.find((t=>"literal"===t.type)))||void 0===n?void 0:n.value,h=null===(r=l.find((t=>"day"===t.type)))||void 0===r?void 0:r.value,u=null===(s=l.find((t=>"month"===t.type)))||void 0===s?void 0:s.value,d=null===(o=l.find((t=>"year"===t.type)))||void 0===o?void 0:o.value,f=l[l.length-1];let p="literal"===(null==f?void 0:f.type)?null==f?void 0:f.value:"";"bg"===e.language&&e.date_format===Re.YMD&&(p="");return{[Re.DMY]:`${h}${c}${u}${c}${d}${p}`,[Re.MDY]:`${u}${c}${h}${c}${d}${p}`,[Re.YMD]:`${d}${c}${u}${c}${h}${p}`}[e.date_format]},ii=Je(((t,e)=>{const i=t.date_format===Re.system?void 0:t.language;return t.date_format===Re.language||(t.date_format,Re.system),new Intl.DateTimeFormat(i,{year:"numeric",month:"numeric",day:"numeric",timeZone:"server"===t.time_zone?e:void 0})})),ni=Je(((t,e)=>new Intl.DateTimeFormat(t.language,{day:"numeric",month:"short",timeZone:"server"===t.time_zone?e:void 0}))),ri=Je(((t,e)=>new Intl.DateTimeFormat(t.language,{month:"long",year:"numeric",timeZone:"server"===t.time_zone?e:void 0}))),si=Je(((t,e)=>new Intl.DateTimeFormat(t.language,{month:"long",timeZone:"server"===t.time_zone?e:void 0}))),oi=Je(((t,e)=>new Intl.DateTimeFormat(t.language,{year:"numeric",timeZone:"server"===t.time_zone?e:void 0}))),ai=Je(((t,e)=>new Intl.DateTimeFormat(t.language,{weekday:"long",timeZone:"server"===t.time_zone?e:void 0}))),li=Je(((t,e)=>new Intl.DateTimeFormat(t.language,{weekday:"short",timeZone:"server"===t.time_zone?e:void 0}))),ci=Je((t=>{if(t.time_format===De.language||t.time_format===De.system){const e=t.time_format===De.language?t.language:void 0,i=(new Date).toLocaleString(e);return i.includes("AM")||i.includes("PM")}return t.time_format===De.am_pm})),hi=(t,e,i)=>ui(e,i.time_zone).format(t),ui=Je(((t,e)=>new Intl.DateTimeFormat("en"!==t.language||ci(t)?t.language:"en-u-hc-h23",{hour:"numeric",minute:"2-digit",hour12:ci(t),timeZone:"server"===t.time_zone?e:void 0}))),di=Je(((t,e)=>new Intl.DateTimeFormat("en"!==t.language||ci(t)?t.language:"en-u-hc-h23",{hour:ci(t)?"numeric":"2-digit",minute:"2-digit",second:"2-digit",hour12:ci(t),timeZone:"server"===t.time_zone?e:void 0}))),fi=Je(((t,e)=>new Intl.DateTimeFormat("en"!==t.language||ci(t)?t.language:"en-u-hc-h23",{weekday:"long",hour:ci(t)?"numeric":"2-digit",minute:"2-digit",hour12:ci(t),timeZone:"server"===t.time_zone?e:void 0}))),pi=Je(((t,e)=>new Intl.DateTimeFormat("en-GB",{hour:"numeric",minute:"2-digit",hour12:!1,timeZone:"server"===t.time_zone?e:void 0}))),mi=(t,e,i)=>gi(e,i.time_zone).format(t),gi=Je(((t,e)=>new Intl.DateTimeFormat("en"!==t.language||ci(t)?t.language:"en-u-hc-h23",{year:"numeric",month:"long",day:"numeric",hour:ci(t)?"numeric":"2-digit",minute:"2-digit",hour12:ci(t),timeZone:"server"===t.time_zone?e:void 0}))),_i=Je(((t,e)=>new Intl.DateTimeFormat("en"!==t.language||ci(t)?t.language:"en-u-hc-h23",{year:"numeric",month:"short",day:"numeric",hour:ci(t)?"numeric":"2-digit",minute:"2-digit",hour12:ci(t),timeZone:"server"===t.time_zone?e:void 0}))),vi=Je(((t,e)=>new Intl.DateTimeFormat("en"!==t.language||ci(t)?t.language:"en-u-hc-h23",{month:"short",day:"numeric",hour:ci(t)?"numeric":"2-digit",minute:"2-digit",hour12:ci(t),timeZone:"server"===t.time_zone?e:void 0}))),yi=Je(((t,e)=>new Intl.DateTimeFormat("en"!==t.language||ci(t)?t.language:"en-u-hc-h23",{year:"numeric",month:"long",day:"numeric",hour:ci(t)?"numeric":"2-digit",minute:"2-digit",second:"2-digit",hour12:ci(t),timeZone:"server"===t.time_zone?e:void 0}))),bi=(t,e)=>0!=(t.supported_features&e),$i=t=>(t=>bi(t,4)&&"number"==typeof t.in_progress)(t)||!!t.in_progress,wi=(t,e,i,n,r,s,o)=>{const a=r[e.entity_id];return Ai(t,i,n,a,e.entity_id,e.attributes,s,void 0!==o?o:e.state)},Ai=(t,e,i,n,r,s,o,a)=>{var l;if("unknown"===a||"unavailable"===a)return t(`state.default.${a}`);if(function(t){return!!t.unit_of_measurement||!!t.state_class}(s)){if("duration"===s.device_class&&s.unit_of_measurement&&Ze[s.unit_of_measurement])try{return Ge(a,s.unit_of_measurement)}catch(h){}if("monetary"===s.device_class)try{return ze(a,e,Object.assign({style:"currency",currency:(null==o?void 0:o.units)||s.unit_of_measurement,minimumFractionDigits:2},Le({state:a,attributes:s},null==o?void 0:o.numeric_precision,n)))}catch(h){}const t=(null==o?void 0:o.show_units)?(null==o?void 0:o.units)?null==o?void 0:o.units:s.unit_of_measurement:void 0,i=t?"%"===t?(t=>{switch(t.language){case"cz":case"de":case"fi":case"fr":case"sk":case"sv":return" ";default:return""}})(e)+"%":` ${t}`:"";return`${ze(a,e,Le({state:a,attributes:s},null==o?void 0:o.numeric_precision,n))}${i}`}const c=ge(r);if("datetime"===c){const t=new Date(a);return mi(t,e,i)}if(["date","input_datetime","time"].includes(c))try{const t=a.split(" ");if(2===t.length)return mi(new Date(t.join("T")),Object.assign(Object.assign({},e),{time_zone:Ue.local}),i);if(1===t.length){if(a.includes("-"))return Xe(new Date(`${a}T00:00`),Object.assign(Object.assign({},e),{time_zone:Ue.local}),i);if(a.includes(":")){const t=new Date;return hi(new Date(`${t.toISOString().split("T")[0]}T${a}`),Object.assign(Object.assign({},e),{time_zone:Ue.local}),i)}}return a}catch(u){return a}if("counter"===c||"number"===c||"input_number"===c)return ze(a,e,Le({state:a,attributes:s},null==o?void 0:o.numeric_precision,n));if(["button","event","input_button","scene","stt","tts"].includes(c)||"sensor"===c&&"timestamp"===s.device_class)try{return mi(new Date(a),e,i)}catch(h){return a}return"update"===c?"on"===a?$i(s)?bi(s,4)&&"number"==typeof s.in_progress?t("ui.card.update.installing_with_progress",{progress:s.in_progress}):t("ui.card.update.installing"):s.latest_version:s.skipped_version===s.latest_version?null!==(l=s.latest_version)&&void 0!==l?l:t("state.default.unavailable"):t("ui.card.update.up_to_date"):(null==n?void 0:n.translation_key)&&t(`component.${n.platform}.entity.${c}.${n.translation_key}.state.${a}`)||s.device_class&&t(`component.${c}.entity_component.${s.device_class}.state.${a}`)||t(`component.${c}.entity_component._.state.${a}`)||a};var ki=Function.prototype.toString,xi=Object.create,Si=Object.defineProperty,Oi=Object.getOwnPropertyDescriptor,Ei=Object.getOwnPropertyNames,Ci=Object.getOwnPropertySymbols,Ti=Object.getPrototypeOf,Mi=Object.prototype,ji=Mi.hasOwnProperty,Hi=Mi.propertyIsEnumerable,Di="function"==typeof Ci,Ni="function"==typeof WeakMap,Ri=function(){if(Ni)return function(){return new WeakMap};var t=function(){function t(){this._keys=[],this._values=[]}return t.prototype.has=function(t){return!!~this._keys.indexOf(t)},t.prototype.get=function(t){return this._values[this._keys.indexOf(t)]},t.prototype.set=function(t,e){this._keys.push(t),this._values.push(e)},t}();return function(){return new t}}(),Pi=function(t,e){var i=t.__proto__||Ti(t);if(!i)return xi(null);var n=i.constructor;if(n===e.Object)return i===e.Object.prototype?{}:xi(i);if(~ki.call(n).indexOf("[native code]"))try{return new n}catch(Mi){}return xi(i)},zi=function(t,e,i,n){var r=Pi(t,e);for(var s in n.set(t,r),t)ji.call(t,s)&&(r[s]=i(t[s],n));if(Di)for(var o=Ci(t),a=0,l=o.length,c=void 0;a<l;++a)c=o[a],Hi.call(t,c)&&(r[c]=i(t[c],n));return r},Li=function(t,e,i,n){var r=Pi(t,e);n.set(t,r);for(var s=Di?Ei(t).concat(Ci(t)):Ei(t),o=0,a=s.length,l=void 0,c=void 0;o<a;++o)if("callee"!==(l=s[o])&&"caller"!==l)if(c=Oi(t,l)){c.get||c.set||(c.value=i(t[l],n));try{Si(r,l,c)}catch(h){r[l]=c.value}}else r[l]=i(t[l],n);return r},Ii=Array.isArray,Fi=Object.getPrototypeOf,Vi=function(){return"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:(console&&console.error&&console.error('Unable to locate global object, returning "this".'),this)}();function Ui(t,e){var i=!(!e||!e.isStrict),n=e&&e.realm||Vi,r=i?Li:zi,s=function(t,e){if(!t||"object"!=typeof t)return t;if(e.has(t))return e.get(t);var o,a,l,c=t.__proto__||Fi(t),h=c&&c.constructor;if(!h||h===n.Object)return r(t,n,s,e);if(Ii(t)){if(i)return Li(t,n,s,e);o=new h,e.set(t,o);for(var u=0,d=t.length;u<d;++u)o[u]=s(t[u],e);return o}if(t instanceof n.Date)return new h(t.getTime());if(t instanceof n.RegExp)return(o=new h(t.source,t.flags||(l="",(a=t).global&&(l+="g"),a.ignoreCase&&(l+="i"),a.multiline&&(l+="m"),a.unicode&&(l+="u"),a.sticky&&(l+="y"),l))).lastIndex=t.lastIndex,o;if(n.Map&&t instanceof n.Map)return o=new h,e.set(t,o),t.forEach((function(t,i){o.set(i,s(t,e))})),o;if(n.Set&&t instanceof n.Set)return o=new h,e.set(t,o),t.forEach((function(t){o.add(s(t,e))})),o;if(n.Blob&&t instanceof n.Blob)return t.slice(0,t.size,t.type);if(n.Buffer&&n.Buffer.isBuffer(t))return o=n.Buffer.allocUnsafe?n.Buffer.allocUnsafe(t.length):new h(t.length),e.set(t,o),t.copy(o),o;if(n.ArrayBuffer){if(n.ArrayBuffer.isView(t))return o=new h(t.buffer.slice(0)),e.set(t,o),o;if(t instanceof n.ArrayBuffer)return o=t.slice(0),e.set(t,o),o}return"function"==typeof t.then||t instanceof Error||n.WeakMap&&t instanceof n.WeakMap||n.WeakSet&&t instanceof n.WeakSet?t:r(t,n,s,e)};return s(t,Ri())}Ui.default=Ui,Ui.strict=function(t,e){return Ui(t,{isStrict:!0,realm:e?e.realm:void 0})};const Bi=new Set(["alarm_control_panel","alert","automation","binary_sensor","calendar","camera","climate","cover","device_tracker","fan","group","humidifier","input_boolean","light","lock","media_player","person","plant","remote","schedule","script","siren","sun","switch","timer","update","vacuum"]),Wi=(t,e,i)=>{if((void 0!==e?e:null==t?void 0:t.state)===ae)return"var(--state-unavailable-color)";const n=Zi(t,e,i);return n?ke(n):void 0},qi=(t,e,i,n)=>{const r=void 0!==i?i:e.state,s=Ae(e,i),o=[],a=function(t,e="_"){const i="àáäâãåăæąçćčđďèéěėëêęğǵḧìíïîįłḿǹńňñòóöôœøṕŕřßşśšșťțùúüûǘůűūųẃẍÿýźžż·/_,:;",n=`aaaaaaaaacccddeeeeeeegghiiiiilmnnnnooooooprrsssssttuuuuuuuuuwxyyzzz${e}${e}${e}${e}${e}${e}`,r=new RegExp(i.split("").join("|"),"g");return t.toString().toLowerCase().replace(/\s+/g,e).replace(r,(t=>n.charAt(i.indexOf(t)))).replace(/&/g,`${e}and${e}`).replace(/[^\w-]+/g,"").replace(/-/g,e).replace(new RegExp(`(${e})\\1+`,"g"),"$1").replace(new RegExp(`^${e}+`),"").replace(new RegExp(`${e}+$`),"")}(r,"_"),l=s?"active":"inactive";if(n&&fe.includes(n)&&"inactive"==l)return pe;const c=e.attributes.device_class;return c&&o.push(`--state-${t}-${c}-${a}-color`),o.push(`--state-${t}-${a}-color`,`--state-${t}-${l}-color`,`--state-${l}-color`),o},Zi=(t,e,i)=>{const n=void 0!==e?e:null==t?void 0:t.state,r=ge(t.entity_id),s=t.attributes.device_class;if("sensor"===r&&"battery"===s){const t=(t=>{const e=Number(t);if(!isNaN(e))return e>=70?"--state-sensor-battery-high-color":e>=30?"--state-sensor-battery-medium-color":"--state-sensor-battery-low-color"})(n);if(t)return[t]}if("group"===r){const n=(t=>{const e=t.attributes.entity_id||[],i=[...new Set(e.map((t=>ge(t))))];return 1===i.length?i[0]:void 0})(t);if(n&&Bi.has(n))return qi(n,t,e,i)}return Bi.has(r)?qi(r,t,e,i):i&&fe.includes(i)?pe:void 0};let Gi=window.cardHelpers;const Yi=new Promise((async t=>{Gi&&t(),window.loadCardHelpers&&(Gi=await window.loadCardHelpers(),window.cardHelpers=Gi,t())}));console.info("%c  BUTTON-CARD  \n%c Version 4.3.0 ","color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray"),window.customCards=window.customCards||[],window.customCards.push({type:"button-card",name:"Button-Card",preview:!1,description:"A massively customizable custom button card"});let Ki=class extends nt{constructor(){super(...arguments),this.preview=!1,this._cards={},this._cardsConfig={},this._entities=[],this._initialSetupComplete=!1,this._rippleHandlers=new xt((()=>this._ripple))}get _doIHaveEverything(){return!!this._hass&&!!this._config&&this.isConnected}static getStubConfig(t,e,i){const n=Ce(t,1,e,i,["light","switch"]);return we()?{entity:n[0]||"",section_mode:!0,grid_options:{rows:2,columns:6}}:{entity:n[0]||"",section_mode:!1}}set hass(t){this._hass=t,Object.keys(this._cards).forEach((t=>{this._cards[t].hass=this._hass})),this._initialSetupComplete||this._finishSetup()}disconnectedCallback(){super.disconnectedCallback(),this._clearInterval()}connectedCallback(){super.connectedCallback(),this._initialSetupComplete?this._startTimerCountdown():this._finishSetup()}_evaluateVariablesSkipError(t){var e;if(this._evaledVariables={},null===(e=this._config)||void 0===e?void 0:e.variables){Object.keys(this._config.variables).sort().forEach((e=>{try{this._evaledVariables[e]=this._objectEvalTemplate(t,this._config.variables[e])}catch(Ct){}}))}}_finishSetup(){if(!this._initialSetupComplete&&this._doIHaveEverything){if(this._evaluateVariablesSkipError(),this._config.entity){const t=this._getTemplateOrValue(void 0,this._config.entity);this._config.entity=t,this._stateObj=this._hass.states[t]}this._evaluateVariablesSkipError(this._stateObj),this._config.entity&&he.has(ge(this._config.entity))?this._config=Object.assign({tap_action:{action:"toggle"}},this._config):this._config.entity&&ue.has(ge(this._config.entity))?this._config=Object.assign({tap_action:{action:"call-service",service:"input_button.press",target:{entity_id:this._config.entity}}},this._config):this._config.entity?this._config=Object.assign({tap_action:{action:"more-info"}},this._config):this._config=Object.assign({tap_action:{action:"none"}},this._config);const t=JSON.stringify(this._config);if(this._entities=[],Array.isArray(this._config.triggers_update))this._config.triggers_update.forEach((t=>{try{const e=this._getTemplateOrValue(this._stateObj,t);null==e||this._entities.includes(e)||this._entities.push(e)}catch(Ct){}}));else if("string"==typeof this._config.triggers_update){const t=this._getTemplateOrValue(this._stateObj,this._config.triggers_update);t&&"all"!==t?this._entities.push(t):this._config.triggers_update=t}if("all"!==this._config.triggers_update){const e=new RegExp(/states\[\s*('|\\")([a-zA-Z0-9_]+\.[a-zA-Z0-9_]+)\1\s*\]/,"gm"),i=new RegExp(/states\[\s*('|\\")([a-zA-Z0-9_]+\.[a-zA-Z0-9_]+)\1\s*\]/,"m"),n=t.match(e);null==n||n.forEach((t=>{const e=t.match(i);e&&!this._entities.includes(e[2])&&this._entities.push(e[2])}))}this._config.entity&&!this._entities.includes(this._config.entity)&&this._entities.push(this._config.entity),this._expandTriggerGroups();const e=new RegExp("(?:[^\\[]|^)\\[{3}[^\\[].*[^\\]]\\]{3}(?:[^\\]]|$)","s");this._triggersAll=!("all"!==this._config.triggers_update||!t.match(e)),this._startTimerCountdown(),this._initialSetupComplete=!0}}_startTimerCountdown(){if(this._config&&this._config.entity&&"timer"===ge(this._config.entity)){const t=this._hass.states[this._config.entity];this._startInterval(t)}}_createCard(t){if(Gi)return Gi.createCardElement(t);{const e=((t,e=!1)=>{const i=(t,e)=>n("hui-error-card",{type:"error",error:t,config:e}),n=(t,e)=>{const n=window.document.createElement(t);try{if(!n.setConfig)return;n.setConfig(e)}catch(r){return console.error(t,r),i(r.message,e)}return n};if(!t||"object"!=typeof t||!e&&!t.type)return i("No type defined",t);let r=t.type;if(r&&r.startsWith("custom:"))r=r.substr(7);else if(e)if(Te.has(r))r=`hui-${r}-row`;else{if(!t.entity)return i("Invalid config given.",t);const e=t.entity.split(".",1)[0];r=`hui-${Me[e]||"text"}-entity-row`}else r=`hui-${r}-card`;if(customElements.get(r))return n(r,t);const s=i(`Custom element doesn't exist: ${t.type}.`,t);s.style.display="None";const o=setTimeout((()=>{s.style.display=""}),2e3);return customElements.whenDefined(t.type).then((()=>{clearTimeout(o),jt(s,"ll-rebuild",{},s)})),s})(t);return Yi.then((()=>{jt(e,"ll-rebuild",{})})),e}}static get styles(){return je}render(){var t;if(!this._config||!this._hass)return P``;this._stateObj=this._config.entity?this._hass.states[this._config.entity]:void 0;try{if(this._evaledVariables={},null===(t=this._config)||void 0===t?void 0:t.variables){Object.keys(this._config.variables).sort().forEach((t=>{this._evaledVariables[t]=this._objectEvalTemplate(this._stateObj,this._config.variables[t])}))}return this._cardHtml()}catch(Ct){Ct.stack?console.error(Ct.stack):console.error(Ct);const e=document.createElement("hui-error-card");return e.preview=this.preview,e.setConfig({type:"error",error:Ct.name,message:Ct.message}),P` ${e} `}}shouldUpdate(t){return!(!this._triggersAll&&!t.has("_timeRemaining"))||function(t,e){if(e.has("_config"))return!0;const i=e.get("_hass");if(i)return t._entities.some((function(e){return(null==i?void 0:i.states[e])!==t._hass.states[e]}));return!1}(this,t)?(this._expandTriggerGroups(),!0):!!t.has("preview")}willUpdate(t){t.has("preview")&&Object.keys(this._cards).forEach((t=>{this._cards[t].preview=this.preview}))}updated(t){if(super.updated(t),this._config&&this._config.entity&&"timer"===ge(this._config.entity)&&t.has("_hass")){const e=this._hass.states[this._config.entity],i=t.get("_hass");(i?i.states[this._config.entity]:void 0)!==e?this._startInterval(e):e||this._clearInterval()}}_clearInterval(){this._interval&&(window.clearInterval(this._interval),this._interval=void 0)}_startInterval(t){this._clearInterval(),this._calculateRemaining(t),"active"===t.state&&(this._interval=window.setInterval((()=>this._calculateRemaining(t)),1e3))}_calculateRemaining(t){t.attributes.remaining&&(this._timeRemaining=(t=>{if(!t.attributes.remaining)return;let e=xe(t.attributes.remaining);if("active"===t.state){const i=(new Date).getTime(),n=new Date(t.last_changed).getTime();e=Math.max(e-(i-n)/1e3,0)}return e})(t))}_computeTimeDisplay(t){if(t)return function(t){const e=Math.floor(t/3600),i=Math.floor(t%3600/60),n=Math.floor(t%3600%60);return e>0?`${e}:${Se(i)}:${Se(n)}`:i>0?`${i}:${Se(n)}`:n>0?""+n:null}(this._timeRemaining||xe(t.attributes.duration))}_getMatchingConfigState(t){if(!this._config.state)return;const e=this._config.state.find((t=>"template"===t.operator));if(!t&&!e)return;let i;const n=this._config.state.find((e=>{if(!e.operator)return t&&this._getTemplateOrValue(t,e.value)==t.state;switch(e.operator){case"==":return t&&t.state==this._getTemplateOrValue(t,e.value);case"<=":return t&&t.state<=this._getTemplateOrValue(t,e.value);case"<":return t&&t.state<this._getTemplateOrValue(t,e.value);case">=":return t&&t.state>=this._getTemplateOrValue(t,e.value);case">":return t&&t.state>this._getTemplateOrValue(t,e.value);case"!=":return t&&t.state!=this._getTemplateOrValue(t,e.value);case"regex":return!(!t||!t.state.match(this._getTemplateOrValue(t,e.value)));case"template":return this._getTemplateOrValue(t,e.value);case"default":return i=e,!1;default:return!1}}));return!n&&i?i:n}_localize(t,e,i,n=!0,r){var s;return wi(this._hass.localize,t,this._hass.locale,this._hass.config,this._hass.entities,{numeric_precision:"card"===i?null===(s=this._config)||void 0===s?void 0:s.numeric_precision:i,show_units:n,units:r},e)}_relativeTime(t,e=!1){return t?P`
        <ha-relative-time
          id="relative-time"
          class="ellipsis"
          .hass="${this._hass}"
          .datetime="${t}"
          .capitalize="${e}"
        ></ha-relative-time>
      `:""}_getTemplateHelpers(){return{localize:this._localize.bind(this),formatDateTime:t=>mi(new Date(t),this._hass.locale,this._hass.config),formatShortDateTimeWithYear:t=>{return e=new Date(t),i=this._hass.locale,n=this._hass.config,_i(i,n.time_zone).format(e);var e,i,n},formatShortDateTime:t=>{return e=new Date(t),i=this._hass.locale,n=this._hass.config,vi(i,n.time_zone).format(e);var e,i,n},formatDateTimeWithSeconds:t=>{return e=new Date(t),i=this._hass.locale,n=this._hass.config,yi(i,n.time_zone).format(e);var e,i,n},formatDateTimeNumeric:t=>{return e=new Date(t),i=this._hass.locale,n=this._hass.config,`${ei(e,i,n)}, ${hi(e,i,n)}`;var e,i,n},relativeTime:this._relativeTime.bind(this),formatTime:t=>hi(new Date(t),this._hass.locale,this._hass.config),formatTimeWithSeconds:t=>{return e=new Date(t),i=this._hass.locale,n=this._hass.config,di(i,n.time_zone).format(e);var e,i,n},formatTimeWeekday:t=>{return e=new Date(t),i=this._hass.locale,n=this._hass.config,fi(i,n.time_zone).format(e);var e,i,n},formatTime24h:t=>{return e=new Date(t),i=this._hass.locale,n=this._hass.config,pi(i,n.time_zone).format(e);var e,i,n},formatDateWeekdayDay:t=>{return e=new Date(t),i=this._hass.locale,n=this._hass.config,Qe(i,n.time_zone).format(e);var e,i,n},formatDate:t=>Xe(new Date(t),this._hass.locale,this._hass.config),formatDateNumeric:t=>ei(new Date(t),this._hass.locale,this._hass.config),formatDateShort:t=>{return e=new Date(t),i=this._hass.locale,n=this._hass.config,ni(i,n.time_zone).format(e);var e,i,n},formatDateMonthYear:t=>{return e=new Date(t),i=this._hass.locale,n=this._hass.config,ri(i,n.time_zone).format(e);var e,i,n},formatDateMonth:t=>{return e=new Date(t),i=this._hass.locale,n=this._hass.config,si(i,n.time_zone).format(e);var e,i,n},formatDateYear:t=>{return e=new Date(t),i=this._hass.locale,n=this._hass.config,oi(i,n.time_zone).format(e);var e,i,n},formatDateWeekday:t=>{return e=new Date(t),i=this._hass.locale,n=this._hass.config,ai(i,n.time_zone).format(e);var e,i,n},formatDateWeekdayShort:t=>{return e=new Date(t),i=this._hass.locale,n=this._hass.config,li(i,n.time_zone).format(e);var e,i,n}}}_evalTemplate(t,e){try{return new Function("states","entity","user","hass","variables","html","helpers",`'use strict'; ${e}`).call(this,this._hass.states,t,this._hass.user,this._hass,this._evaledVariables,P,this._getTemplateHelpers())}catch(Ct){const i=e.length<=100?e.trim():`${e.trim().substring(0,98)}...`;throw Ct.message=`${Ct.name}: ${Ct.message} in '${i}'`,Ct.name="ButtonCardJSTemplateError",Ct}}_objectEvalTemplate(t,e){const i=Ui(e);return this._getTemplateOrValue(t,i)}_getTemplateOrValue(t,e){if(["number","boolean"].includes(typeof e))return e;if(!e)return e;if("object"==typeof e)return Object.keys(e).forEach((i=>{e[i]=this._getTemplateOrValue(t,e[i])})),e;const i=e.trim(),n=new RegExp("(\\[{3,})(.*?)(\\]{3,})","s"),r=i.match(n);return r&&4===r.length?3===r[1].length&&3===r[3].length?this._evalTemplate(t,r[2]):r[1].length===r[3].length?i.slice(1,-1):e:e}_getColorForLightEntity(t,e,i){let n=me;return fe.includes(n)&&(n=ke(pe)),t&&(Ae(t)?(n=t.attributes.rgb_color?`rgb(${t.attributes.rgb_color.join(",")})`:e&&t.attributes.color_temp&&t.attributes.min_mireds&&t.attributes.max_mireds?function(t,e,i){const n=new ne("rgb(255, 160, 0)"),r=new ne("rgb(166, 209, 255)"),s=new ne("white"),o=(t-e)/(i-e)*100;return o<50?re(r).mix(s,2*o).toRgbString():re(s).mix(n,2*(o-50)).toRgbString()}(t.attributes.color_temp,t.attributes.min_mireds,t.attributes.max_mireds):Wi(t,t.state,i)||me,t.attributes.brightness&&(n=function(t,e,i){const n=new ne(_e(t,e));if(n.isValid){const t=n.mix("black",100-i).toString();if(t)return t}return e}(this,n,(t.attributes.brightness+245)/5))):n=Wi(t,t.state,i)||me),n}_buildCssColorAttribute(t,e){var i,n;let r,s="";return(null==e?void 0:e.color)?s=e.color:this._config.color&&(s=this._config.color),de.includes(s)&&(!t||t&&"light"!==ge(t.entity_id))&&(s=""),r=de.includes(s)?this._getColorForLightEntity(t,"auto-no-temperature"!==s,null===(i=this._config)||void 0===i?void 0:i.color_type):s||(t&&Wi(t,t.state,null===(n=this._config)||void 0===n?void 0:n.color_type)||me),r}_buildIcon(t,e){if(!this._config.show_icon)return;let i;if(null==e?void 0:e.icon)i=e.icon;else{if(!this._config.icon)return;i=this._config.icon}return this._getTemplateOrValue(t,i)}_buildEntityPicture(t,e){if(!this._config.show_entity_picture||!t&&!e&&!this._config.entity_picture)return;let i;(null==e?void 0:e.entity_picture)?i=e.entity_picture:this._config.entity_picture?i=this._config.entity_picture:t&&(i=t.attributes&&t.attributes.entity_picture?t.attributes.entity_picture:void 0);const n=this._getTemplateOrValue(t,i);return n&&Oe(n)?Ee(this._hass,n).then((t=>t.url)).catch((()=>"")):n}_buildStyleGeneric(t,e,i){var n,r;let s={};if((null===(n=this._config.styles)||void 0===n?void 0:n[i])&&(s=Object.assign(s,...this._config.styles[i])),null===(r=null==e?void 0:e.styles)||void 0===r?void 0:r[i]){let t={};t=Object.assign(t,...e.styles[i]),s=Object.assign(Object.assign({},s),t)}return Object.keys(s).forEach((e=>{s[e]=this._getTemplateOrValue(t,s[e])})),s}_buildCustomStyleGeneric(t,e,i){var n,r,s,o;let a={};if((null===(r=null===(n=this._config.styles)||void 0===n?void 0:n.custom_fields)||void 0===r?void 0:r[i])&&(a=Object.assign(a,...this._config.styles.custom_fields[i])),null===(o=null===(s=null==e?void 0:e.styles)||void 0===s?void 0:s.custom_fields)||void 0===o?void 0:o[i]){let t={};t=Object.assign(t,...e.styles.custom_fields[i]),a=Object.assign(Object.assign({},a),t)}return Object.keys(a).forEach((e=>{a[e]=this._getTemplateOrValue(t,a[e])})),a}_buildName(t,e){if(!1===this._config.show_name)return;let i;var n;return(null==e?void 0:e.name)?i=e.name:this._config.name?i=this._config.name:t&&(i=t.attributes&&t.attributes.friendly_name?t.attributes.friendly_name:(n=t.entity_id).substr(n.indexOf(".")+1)),this._getTemplateOrValue(t,i)}_buildStateString(t){let e;return this._config.show_state&&t&&t.state&&("timer"===ge(t.entity_id)?"idle"===t.state||0===this._timeRemaining?e=wi(this._hass.localize,t,this._hass.locale,this._hass.config,this._hass.entities,this._config):(e=this._computeTimeDisplay(t),"paused"===t.state&&(e+=` (${wi(this._hass.localize,t,this._hass.locale,this._hass.config,this._hass.entities,this._config)})`)):e=wi(this._hass.localize,t,this._hass.locale,this._hass.config,this._hass.entities,this._config)),e}_buildLastChanged(t,e){return this._config.show_last_changed&&t?P`
          <ha-relative-time
            id="label"
            class="ellipsis"
            .hass="${this._hass}"
            .datetime="${t.last_changed}"
            style=${Et(e)}
          ></ha-relative-time>
        `:void 0}_buildLabel(t,e){if(!this._config.show_label)return;let i;return i=(null==e?void 0:e.label)?e.label:this._config.label,this._getTemplateOrValue(t,i)}_buildCustomFields(t,e){let i=P``;const n={},r={};return this._config.custom_fields&&Object.keys(this._config.custom_fields).forEach((e=>{const i=this._config.custom_fields[e];i.card?i.do_not_eval?r[e]=Ui(i.card):r[e]=this._objectEvalTemplate(t,i.card):n[e]=this._getTemplateOrValue(t,i)})),(null==e?void 0:e.custom_fields)&&Object.keys(e.custom_fields).forEach((i=>{const s=e.custom_fields[i];s.card?s.do_not_eval?r[i]=Ui(s.card):r[i]=this._objectEvalTemplate(t,s.card):n[i]=this._getTemplateOrValue(t,s)})),Object.keys(n).forEach((r=>{if(null!=n[r]){const s=Object.assign(Object.assign({},this._buildCustomStyleGeneric(t,e,r)),{"grid-area":r});i=P`
          ${i}
          <div id=${r} class="ellipsis" style=${Et(s)}>${this._unsafeHTMLorNot(n[r])}</div>
        `}})),Object.keys(r).forEach((n=>{if(null!=r[n]){const s=Object.assign(Object.assign({},this._buildCustomStyleGeneric(t,e,n)),{"grid-area":n});let o;Ht(this._cardsConfig[n],r[n])?o=this._cards[n]:(o=this._createCard(r[n]),o.preview=this.preview,this._cards[n]=o,this._cardsConfig[n]=Ui(r[n])),o.hass=this._hass,i=P`
          ${i}
          <div
            id=${n}
            @action=${this._stopPropagation}
            @click=${this._stopPropagation}
            @touchstart=${this._stopPropagation}
            @mousedown=${this._stopPropagation}
            @mouseup=${this._stopPropagation}
            @touchend=${this._stopPropagation}
            @touchcancel=${this._stopPropagation}
            style=${Et(s)}
          >
            ${o}
          </div>
        `}})),i}_hasChildCards(t){return!!t&&Object.keys(t).some((e=>!!t[e].card))}_isClickable(t,e){const i=this._getTemplateOrValue(t,this._config.tap_action.action),n=this._getTemplateOrValue(t,this._config.hold_action.action),r=this._getTemplateOrValue(t,this._config.double_tap_action.action),s=this._hasChildCards(this._config.custom_fields)||!(!e||!this._hasChildCards(e.custom_fields));return"none"!=i||"none"!=n||"none"!=r||s}_rotate(t){return!!(null==t?void 0:t.spin)}_blankCardColoredHtml(t){const e=Object.assign({background:"none","box-shadow":"none","border-style":"none"},t);return P`
      <ha-card class="disabled" style=${Et(e)}>
        <div></div>
      </ha-card>
    `}_cardHtml(){var t,e,i,n,r,s;const o=this._getMatchingConfigState(this._stateObj);let a="var(--state-inactive-color)";(null==o?void 0:o.color)&&!de.includes(o.color)?a=o.color:(null===(t=this._config)||void 0===t?void 0:t.color)&&!de.includes(this._config.color)?this._stateObj?Ae(this._stateObj)&&(a=(null===(e=this._config)||void 0===e?void 0:e.color)||a):a=this._config.color:a=this._buildCssColorAttribute(this._stateObj,o);let l=a,c={},h={};const u={},d=this._buildStyleGeneric(this._stateObj,o,"lock"),f=this._buildStyleGeneric(this._stateObj,o,"card"),p=this._buildStyleGeneric(this._stateObj,o,"tooltip"),m={"button-card-main":!0,disabled:!this._isClickable(this._stateObj,o),section:!!(null===(i=this._config)||void 0===i?void 0:i.section_mode)};switch((null===(n=this._config)||void 0===n?void 0:n.section_mode)&&this.classList.add("section"),(null===(r=this._config)||void 0===r?void 0:r.tooltip)&&this.classList.add("tooltip"),f.width&&(this.style.setProperty("flex","0 0 auto"),this.style.setProperty("max-width","fit-content")),this._config.color_type){case"blank-card":return this._blankCardColoredHtml(f);case"card":case"label-card":{const t=function(t,e){const i=new ne(_e(t,e)).getLuminance(),n=new ne({r:225,g:225,b:225}),r=n.getLuminance(),s=new ne({r:28,g:28,b:28}),o=s.getLuminance();return 0===i||(Math.max(i,r)+.05)/Math.min(i,r+.05)>(Math.max(i,o)+.05)/Math.min(i,o+.05)?n.toRgbString():s.toRgbString()}(this,a);c.color=t,h.color=t,c["background-color"]=a,c=Object.assign(Object.assign({},c),f),l="inherit";break}default:c=f}this._config.aspect_ratio?(u["--aspect-ratio"]=this._config.aspect_ratio,c.position="absolute"):u.display="inline",this.style.setProperty("--button-card-light-color",this._getColorForLightEntity(this._stateObj,!0)),this.style.setProperty("--button-card-light-color-no-temperature",this._getColorForLightEntity(this._stateObj,!1)),h=Object.assign(Object.assign({},h),d);const g=this._config.extra_styles?P`
          <style>
            ${this._getTemplateOrValue(this._stateObj,this._config.extra_styles)}
          </style>
        `:P``;return P`
      ${g}
      <div id="aspect-ratio" style=${Et(u)}>
        <ha-card
          id="card"
          class=${Mt(m)}
          style=${Et(c)}
          @action=${this._handleAction}
          @focus="${this.handleRippleFocus}"
          @blur="${this.handleRippleBlur}"
          @mousedown="${this.handleRippleActivate}"
          @mouseup="${this.handleRippleDeactivate}"
          @touchstart="${this.handleRippleActivate}"
          @touchend="${this.handleRippleDeactivate}"
          @touchcancel="${this.handleRippleDeactivate}"
          .actionHandler=${Pt({hasDoubleClick:"none"!==this._config.double_tap_action.action,hasHold:"none"!==this._config.hold_action.action,repeat:this._config.hold_action.repeat,repeatLimit:this._config.hold_action.repeat_limit})}
          .config="${this._config}"
        >
          ${this._buttonContent(this._stateObj,o,l)}
          <mwc-ripple id="ripple"></mwc-ripple>
        </ha-card>
        ${this._getLock(h)}
      </div>
      ${(null===(s=this._config)||void 0===s?void 0:s.tooltip)?P`
            <span class="tooltiptext" style=${Et(p)}>
              ${this._getTemplateOrValue(this._stateObj,this._config.tooltip)}
            </span>
          `:""}
    `}_getLock(t){return this._config.lock&&this._getTemplateOrValue(this._stateObj,this._config.lock.enabled)?P`
        <div
          id="overlay"
          style=${Et(t)}
          @action=${this._handleUnlockType}
          .actionHandler=${Pt({hasDoubleClick:"double_tap"===this._config.lock.unlock,hasHold:"hold"===this._config.lock.unlock})}
          .config="${this._config}"
        >
          <ha-icon id="lock" icon=${this._config.lock.lock_icon}></ha-icon>
        </div>
      `:P``}_buttonContent(t,e,i){const n=this._buildName(t,e),r=(null==e?void 0:e.state_display)||this._config.state_display||void 0,s=this._config.show_state&&r?this._getTemplateOrValue(t,r):void 0,o=void 0!==s?s:this._buildStateString(t),a=function(t,e){if(!t&&!e)return;let i;return i=e?t?`${t}: ${e}`:e:t,i}(n,o);switch(this._config.layout){case"icon_name_state":case"name_state":return this._gridHtml(t,e,this._config.layout,i,a,void 0);default:return this._gridHtml(t,e,this._config.layout,i,n,o)}}_unsafeHTMLorNot(t){return t.strings||t.values?t:Tt(`${t}`)}_gridHtml(t,e,i,n,r,s){const o=this._getIconHtml(t,e,n),a=[i],l=this._buildLabel(t,e),c=this._buildStyleGeneric(t,e,"name"),h=this._buildStyleGeneric(t,e,"state"),u=this._buildStyleGeneric(t,e,"label"),d=this._buildLastChanged(t,u),f=this._buildStyleGeneric(t,e,"grid");return o||a.push("no-icon"),r||a.push("no-name"),s||a.push("no-state"),l||d||a.push("no-label"),P`
      <div id="container" class=${a.join(" ")} style=${Et(f)}>
        ${o||""}
        ${r?P`
              <div id="name" class="ellipsis" style=${Et(c)}>
                ${this._unsafeHTMLorNot(r)}
              </div>
            `:""}
        ${s?P`
              <div id="state" class="ellipsis" style=${Et(h)}>
                ${this._unsafeHTMLorNot(s)}
              </div>
            `:""}
        ${l&&!d?P`
              <div id="label" class="ellipsis" style=${Et(u)}>
                ${this._unsafeHTMLorNot(l)}
              </div>
            `:""}
        ${d||""} ${this._buildCustomFields(t,e)}
      </div>
    `}_getIconHtml(t,e,i){const n=this._buildIcon(t,e),r=this._buildEntityPicture(t,e),s=this._buildStyleGeneric(t,e,"entity_picture"),o=this._buildStyleGeneric(t,e,"icon"),a=this._buildStyleGeneric(t,e,"img_cell"),l=this._buildStyleGeneric(t,e,"card"),c=Object.assign({color:i,width:this._config.size,"--ha-icon-display":l.height?"inline":void 0,position:this._config.aspect_ratio||l.height?"absolute":"relative"},o),h=Object.assign(Object.assign({},c),s),u=this._buildLiveStream(h),d=this._config.show_icon&&(n||t);if(d||r){let i;return t&&(i=ge(t.entity_id)),P`
        <div id="img-cell" style=${Et(a)}>
          ${!d||r||u?"":P`
                <ha-state-icon
                  .state=${t}
                  .stateObj=${t}
                  .hass=${this._hass}
                  ?data-domain=${i}
                  data-state=${(t=>null!=t?t:L)(null==t?void 0:t.state)}
                  style=${Et(c)}
                  .icon="${n}"
                  id="icon"
                  ?rotating=${this._rotate(e)}
                ></ha-state-icon>
              `}
          ${u||""}
          ${r&&!u?P`
                <img
                  src=${kt(r)}
                  style=${Et(h)}
                  id="icon"
                  ?rotating=${this._rotate(e)}
                />
              `:""}
        </div>
      `}}_buildLiveStream(t){return this._config.show_live_stream&&this._config.entity&&"camera"===ge(this._config.entity)?P`
        <hui-image
          .hass=${this._hass}
          .cameraImage=${this._config.entity}
          .entity=${this._config.entity}
          .cameraView=${"live"}
          .aspectRatio=${this._config.live_stream_aspect_ratio}
          .fitMode=${this._config.live_stream_fit_mode}
          style=${Et(t)}
        ></hui-image>
      `:void 0}_configFromLLTemplates(t,e){const i=e.template;if(!i)return e;let n,r={};const s=i&&Array.isArray(i)?i:[i];return null==s||s.forEach((e=>{var i;if(!(null===(i=t.config.button_card_templates)||void 0===i?void 0:i[e]))throw new Error(`Button-card template '${e}' is missing!`);const s=this._configFromLLTemplates(t,t.config.button_card_templates[e]);r=ve(r,s),n=ye(n,s.state)})),r=ve(r,e),r.state=ye(n,e.state),r}setConfig(t){if(!t)throw new Error("Invalid configuration");this._initialSetupComplete&&(this._initialSetupComplete=!1),this._cards={},this._cardsConfig={};const e=$e()||be();let i=Ui(t);i=this._configFromLLTemplates(e,i),this._config=Object.assign(Object.assign({type:"custom:button-card",group_expand:!1,hold_action:{action:"none"},double_tap_action:{action:"none"},layout:"vertical",size:"40%",color_type:"icon",show_name:!0,show_state:!1,show_icon:!0,show_units:!0,show_label:!1,show_entity_picture:!1,show_live_stream:!1,card_size:3},i),{lock:Object.assign({enabled:!1,duration:5,unlock:"tap",lock_icon:"mdi:lock-outline",unlock_icon:"mdi:lock-open-outline"},i.lock)}),this._initialSetupComplete||this._finishSetup()}_loopGroup(t){t&&t.forEach((t=>{var e,i;(null===(e=this._hass)||void 0===e?void 0:e.states[t])&&((null===(i=this._hass.states[t].attributes)||void 0===i?void 0:i.entity_id)?this._loopGroup(this._hass.states[t].attributes.entity_id):this._entities.includes(t)||this._entities.push(t))}))}_expandTriggerGroups(){var t;this._hass&&(null===(t=this._config)||void 0===t?void 0:t.group_expand)&&this._entities&&this._entities.forEach((t=>{var e,i,n,r,s;(null===(n=null===(i=null===(e=this._hass)||void 0===e?void 0:e.states[t])||void 0===i?void 0:i.attributes)||void 0===n?void 0:n.entity_id)&&this._loopGroup(null===(s=null===(r=this._hass)||void 0===r?void 0:r.states[t].attributes)||void 0===s?void 0:s.entity_id)}))}getCardSize(){var t;return(null===(t=this._config)||void 0===t?void 0:t.card_size)||3}getGridOptions(){var t;if(null===(t=this._config)||void 0===t?void 0:t.section_mode)return{rows:2,columns:6,min_rows:1,min_columns:1}}_evalActions(t,e){var i,n,r,s,o;const a=Ui(t),l=t=>t?"string"==typeof t?this._getTemplateOrValue(this._stateObj,t):(Object.keys(t).forEach((e=>{"object"==typeof t[e]?t[e]=l(t[e]):t[e]=this._getTemplateOrValue(this._stateObj,t[e])})),t):t;return"entity"===(null===(n=null===(i=a[e])||void 0===i?void 0:i.service_data)||void 0===n?void 0:n.entity_id)&&(a[e].service_data.entity_id=t.entity),"entity"===(null===(s=null===(r=a[e])||void 0===r?void 0:r.data)||void 0===s?void 0:s.entity_id)&&(a[e].data.entity_id=t.entity),a[e]=l(a[e]),!a[e].confirmation&&a.confirmation&&(a[e].confirmation=l(a.confirmation)),(null===(o=a[e])||void 0===o?void 0:o.entity)&&(a.entity=a[e].entity),a}handleRippleActivate(t){this._ripple.then((e=>e&&"function"==typeof e.startPress&&this._rippleHandlers.startPress(t)))}handleRippleDeactivate(){this._ripple.then((t=>t&&"function"==typeof t.endPress&&this._rippleHandlers.endPress()))}handleRippleFocus(){this._ripple.then((t=>t&&"function"==typeof t.startFocus&&this._rippleHandlers.startFocus()))}handleRippleBlur(){this._ripple.then((t=>t&&"function"==typeof t.endFocus&&this._rippleHandlers.endFocus()))}_handleAction(t){var e;if(null===(e=t.detail)||void 0===e?void 0:e.action)switch(t.detail.action){case"tap":case"hold":case"double_tap":const e=this._config;if(!e)return;const i=t.detail.action,n=this._evalActions(e,`${i}_action`),r=n[`${i}_action`].sound;if(r)if(Oe(r))Ee(this._hass,r).then((t=>{new Audio(t.url).play()})).catch((()=>{console.error(`button-card: Error loading media source: ${r}`)}));else{new Audio(r).play()}(async(t,e,i,n)=>{jt(t,"hass-action",{config:i,action:n})})(this,this._hass,n,i)}}_handleUnlockType(t){const e=this._config;e&&e.lock.unlock===t.detail.action&&this._handleLock()}_handleLock(){var t,e,i;const n=this.shadowRoot.getElementById("lock");if(!n)return;if(this._config.lock.exemptions){if(!(null===(t=this._hass.user)||void 0===t?void 0:t.name)||!this._hass.user.id)return;let e=!1;if(this._config.lock.exemptions.forEach((t=>{var i,n;(!e&&t.user===(null===(i=this._hass.user)||void 0===i?void 0:i.id)||t.username===(null===(n=this._hass.user)||void 0===n?void 0:n.name))&&(e=!0)})),!e)return n.classList.add("invalid"),void window.setTimeout((()=>{n&&n.classList.remove("invalid")}),3e3)}const r=this.shadowRoot.getElementById("overlay");r.style.setProperty("pointer-events","none"),n&&(n.icon=this._config.lock.unlock_icon,(null===(i=null===(e=this._config)||void 0===e?void 0:e.lock)||void 0===i?void 0:i.keep_unlock_icon)||n.classList.add("hidden")),window.setTimeout((()=>{var t,e;r.style.setProperty("pointer-events",""),n&&((null===(e=null===(t=this._config)||void 0===t?void 0:t.lock)||void 0===e?void 0:e.keep_unlock_icon)||n.classList.remove("hidden"),n.icon=this._config.lock.lock_icon)}),1e3*this._config.lock.duration)}_stopPropagation(t){t.stopPropagation()}};t([ot()],Ki.prototype,"_hass",void 0),t([ot()],Ki.prototype,"_config",void 0),t([ot()],Ki.prototype,"_timeRemaining",void 0),t([ot({type:Boolean,reflect:!0})],Ki.prototype,"preview",void 0),t([function(t){return at({descriptor:e=>({async get(){var e;return await this.updateComplete,null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t)},enumerable:!0,configurable:!0})})}("mwc-ripple")],Ki.prototype,"_ripple",void 0),t([function(t){return at({finisher:(e,i)=>{Object.assign(e.prototype[i],t)}})}({passive:!0})],Ki.prototype,"handleRippleActivate",null),Ki=t([(t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:n}=e;return{kind:i,elements:n,finisher(e){customElements.define(t,e)}}})(t,e))("button-card")],Ki);
