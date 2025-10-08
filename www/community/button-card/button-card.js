function t(t,e,i,n){var o,s=arguments.length,r=s<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(r=(s<3?o(r):s>3?o(e,i,r):o(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r}const e=window,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,n=Symbol(),o=new WeakMap;class s{constructor(t,e,i){if(this._$cssResult$=!0,i!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=o.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&o.set(e,t))}return t}toString(){return this.cssText}}const r=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new s("string"==typeof t?t:t+"",void 0,n))(e)})(t):t;var a;const l=window,c=l.trustedTypes,h=c?c.emptyScript:"",u=l.reactiveElementPolyfillSupport,d={toAttribute(t,e){switch(e){case Boolean:t=t?h:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},p=(t,e)=>e!==t&&(e==e||t==t),m={attribute:!0,type:String,converter:d,reflect:!1,hasChanged:p},_="finalized";class f extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const n=this._$Ep(i,e);void 0!==n&&(this._$Ev.set(n,i),t.push(n))})),t}static createProperty(t,e=m){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,n=this.getPropertyDescriptor(t,i,e);void 0!==n&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(n){const o=this[t];this[e]=n,this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||m}static finalize(){if(this.hasOwnProperty(_))return!1;this[_]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(r(t))}else void 0!==t&&e.push(r(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const n=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,n)=>{i?t.adoptedStyleSheets=n.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):n.forEach((i=>{const n=document.createElement("style"),o=e.litNonce;void 0!==o&&n.setAttribute("nonce",o),n.textContent=i.cssText,t.appendChild(n)}))})(n,this.constructor.elementStyles),n}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=m){var n;const o=this.constructor._$Ep(t,i);if(void 0!==o&&!0===i.reflect){const s=(void 0!==(null===(n=i.converter)||void 0===n?void 0:n.toAttribute)?i.converter:d).toAttribute(e,i.type);this._$El=t,null==s?this.removeAttribute(o):this.setAttribute(o,s),this._$El=null}}_$AK(t,e){var i;const n=this.constructor,o=n._$Ev.get(t);if(void 0!==o&&this._$El!==o){const t=n.getPropertyOptions(o),s="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:d;this._$El=o,this[o]=s.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let n=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||p)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}var g;f[_]=!0,f.elementProperties=new Map,f.elementStyles=[],f.shadowRootOptions={mode:"open"},null==u||u({ReactiveElement:f}),(null!==(a=l.reactiveElementVersions)&&void 0!==a?a:l.reactiveElementVersions=[]).push("1.6.3");const v=window,b=v.trustedTypes,y=b?b.createPolicy("lit-html",{createHTML:t=>t}):void 0,$="$lit$",w=`lit$${(Math.random()+"").slice(9)}$`,A="?"+w,O=`<${A}>`,k=document,S=()=>k.createComment(""),T=t=>null===t||"object"!=typeof t&&"function"!=typeof t,x=Array.isArray,j="[ \t\n\f\r]",E=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,C=/-->/g,M=/>/g,D=RegExp(`>|${j}(?:([^\\s"'>=/]+)(${j}*=${j}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),H=/'/g,I=/"/g,N=/^(?:script|style|textarea|title)$/i,R=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),P=Symbol.for("lit-noChange"),z=Symbol.for("lit-nothing"),L=new WeakMap,V=k.createTreeWalker(k,129,null,!1);function F(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==y?y.createHTML(e):e}const U=(t,e)=>{const i=t.length-1,n=[];let o,s=2===e?"<svg>":"",r=E;for(let a=0;a<i;a++){const e=t[a];let i,l,c=-1,h=0;for(;h<e.length&&(r.lastIndex=h,l=r.exec(e),null!==l);)h=r.lastIndex,r===E?"!--"===l[1]?r=C:void 0!==l[1]?r=M:void 0!==l[2]?(N.test(l[2])&&(o=RegExp("</"+l[2],"g")),r=D):void 0!==l[3]&&(r=D):r===D?">"===l[0]?(r=null!=o?o:E,c=-1):void 0===l[1]?c=-2:(c=r.lastIndex-l[2].length,i=l[1],r=void 0===l[3]?D:'"'===l[3]?I:H):r===I||r===H?r=D:r===C||r===M?r=E:(r=D,o=void 0);const u=r===D&&t[a+1].startsWith("/>")?" ":"";s+=r===E?e+O:c>=0?(n.push(i),e.slice(0,c)+$+e.slice(c)+w+u):e+w+(-2===c?(n.push(void 0),a):u)}return[F(t,s+(t[i]||"<?>")+(2===e?"</svg>":"")),n]};class B{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let o=0,s=0;const r=t.length-1,a=this.parts,[l,c]=U(t,e);if(this.el=B.createElement(l,i),V.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(n=V.nextNode())&&a.length<r;){if(1===n.nodeType){if(n.hasAttributes()){const t=[];for(const e of n.getAttributeNames())if(e.endsWith($)||e.startsWith(w)){const i=c[s++];if(t.push(e),void 0!==i){const t=n.getAttribute(i.toLowerCase()+$).split(w),e=/([.?@])?(.*)/.exec(i);a.push({type:1,index:o,name:e[2],strings:t,ctor:"."===e[1]?Y:"?"===e[1]?J:"@"===e[1]?Q:G})}else a.push({type:6,index:o})}for(const e of t)n.removeAttribute(e)}if(N.test(n.tagName)){const t=n.textContent.split(w),e=t.length-1;if(e>0){n.textContent=b?b.emptyScript:"";for(let i=0;i<e;i++)n.append(t[i],S()),V.nextNode(),a.push({type:2,index:++o});n.append(t[e],S())}}}else if(8===n.nodeType)if(n.data===A)a.push({type:2,index:o});else{let t=-1;for(;-1!==(t=n.data.indexOf(w,t+1));)a.push({type:7,index:o}),t+=w.length-1}o++}}static createElement(t,e){const i=k.createElement("template");return i.innerHTML=t,i}}function W(t,e,i=t,n){var o,s,r,a;if(e===P)return e;let l=void 0!==n?null===(o=i._$Co)||void 0===o?void 0:o[n]:i._$Cl;const c=T(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(s=null==l?void 0:l._$AO)||void 0===s||s.call(l,!1),void 0===c?l=void 0:(l=new c(t),l._$AT(t,i,n)),void 0!==n?(null!==(r=(a=i)._$Co)&&void 0!==r?r:a._$Co=[])[n]=l:i._$Cl=l),void 0!==l&&(e=W(t,l._$AS(t,e.values),l,n)),e}class q{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:n}=this._$AD,o=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:k).importNode(i,!0);V.currentNode=o;let s=V.nextNode(),r=0,a=0,l=n[0];for(;void 0!==l;){if(r===l.index){let e;2===l.type?e=new Z(s,s.nextSibling,this,t):1===l.type?e=new l.ctor(s,l.name,l.strings,this,t):6===l.type&&(e=new X(s,this,t)),this._$AV.push(e),l=n[++a]}r!==(null==l?void 0:l.index)&&(s=V.nextNode(),r++)}return V.currentNode=k,o}v(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Z{constructor(t,e,i,n){var o;this.type=2,this._$AH=z,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cp=null===(o=null==n?void 0:n.isConnected)||void 0===o||o}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=W(this,t,e),T(t)?t===z||null==t||""===t?(this._$AH!==z&&this._$AR(),this._$AH=z):t!==this._$AH&&t!==P&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>x(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==z&&T(this._$AH)?this._$AA.nextSibling.data=t:this.$(k.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:n}=t,o="number"==typeof n?this._$AC(t):(void 0===n.el&&(n.el=B.createElement(F(n.h,n.h[0]),this.options)),n);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===o)this._$AH.v(i);else{const t=new q(o,this),e=t.u(this.options);t.v(i),this.$(e),this._$AH=t}}_$AC(t){let e=L.get(t.strings);return void 0===e&&L.set(t.strings,e=new B(t)),e}T(t){x(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const o of t)n===e.length?e.push(i=new Z(this.k(S()),this.k(S()),this,this.options)):i=e[n],i._$AI(o),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class G{constructor(t,e,i,n,o){this.type=1,this._$AH=z,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=z}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,n){const o=this.strings;let s=!1;if(void 0===o)t=W(this,t,e,0),s=!T(t)||t!==this._$AH&&t!==P,s&&(this._$AH=t);else{const n=t;let r,a;for(t=o[0],r=0;r<o.length-1;r++)a=W(this,n[i+r],e,r),a===P&&(a=this._$AH[r]),s||(s=!T(a)||a!==this._$AH[r]),a===z?t=z:t!==z&&(t+=(null!=a?a:"")+o[r+1]),this._$AH[r]=a}s&&!n&&this.j(t)}j(t){t===z?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class Y extends G{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===z?void 0:t}}const K=b?b.emptyScript:"";class J extends G{constructor(){super(...arguments),this.type=4}j(t){t&&t!==z?this.element.setAttribute(this.name,K):this.element.removeAttribute(this.name)}}class Q extends G{constructor(t,e,i,n,o){super(t,e,i,n,o),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=W(this,t,e,0))&&void 0!==i?i:z)===P)return;const n=this._$AH,o=t===z&&n!==z||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,s=t!==z&&(n===z||o);o&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class X{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){W(this,t)}}const tt=v.litHtmlPolyfillSupport;null==tt||tt(B,Z),(null!==(g=v.litHtmlVersions)&&void 0!==g?g:v.litHtmlVersions=[]).push("2.8.0");var et,it;class nt extends f{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{var n,o;const s=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:e;let r=s._$litPart$;if(void 0===r){const t=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:null;s._$litPart$=r=new Z(e.insertBefore(S(),t),t,void 0,null!=i?i:{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return P}}nt.finalized=!0,nt._$litElement$=!0,null===(et=globalThis.litElementHydrateSupport)||void 0===et||et.call(globalThis,{LitElement:nt});const ot=globalThis.litElementPolyfillSupport;null==ot||ot({LitElement:nt}),(null!==(it=globalThis.litElementVersions)&&void 0!==it?it:globalThis.litElementVersions=[]).push("3.3.3");const st=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function rt(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):st(t,e)}var at;null===(at=window.HTMLSlotElement)||void 0===at||at.prototype.assignedElements;const lt=1,ct=2,ht=t=>(...e)=>({_$litDirective$:t,values:e});class ut{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}const dt=(t,e)=>{var i,n;const o=t._$AN;if(void 0===o)return!1;for(const s of o)null===(n=(i=s)._$AO)||void 0===n||n.call(i,e,!1),dt(s,e);return!0},pt=t=>{let e,i;do{if(void 0===(e=t._$AM))break;i=e._$AN,i.delete(t),t=e}while(0===(null==i?void 0:i.size))},mt=t=>{for(let e;e=t._$AM;t=e){let i=e._$AN;if(void 0===i)e._$AN=i=new Set;else if(i.has(t))break;i.add(t),gt(e)}};function _t(t){void 0!==this._$AN?(pt(this),this._$AM=t,mt(this)):this._$AM=t}function ft(t,e=!1,i=0){const n=this._$AH,o=this._$AN;if(void 0!==o&&0!==o.size)if(e)if(Array.isArray(n))for(let s=i;s<n.length;s++)dt(n[s],!1),pt(n[s]);else null!=n&&(dt(n,!1),pt(n));else dt(this,t)}const gt=t=>{var e,i,n,o;t.type==ct&&(null!==(e=(n=t)._$AP)&&void 0!==e||(n._$AP=ft),null!==(i=(o=t)._$AQ)&&void 0!==i||(o._$AQ=_t))};class vt extends ut{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,i){super._$AT(t,e,i),mt(this),this.isConnected=t._$AU}_$AO(t,e=!0){var i,n;t!==this.isConnected&&(this.isConnected=t,t?null===(i=this.reconnected)||void 0===i||i.call(this):null===(n=this.disconnected)||void 0===n||n.call(this)),e&&(dt(this,t),pt(this))}setValue(t){if((t=>void 0===t.strings)(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}class bt{constructor(t){this.G=t}disconnect(){this.G=void 0}reconnect(t){this.G=t}deref(){return this.G}}class yt{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){var t;null!==(t=this.Y)&&void 0!==t||(this.Y=new Promise((t=>this.Z=t)))}resume(){var t;null===(t=this.Z)||void 0===t||t.call(this),this.Y=this.Z=void 0}}const $t=t=>!(t=>null===t||"object"!=typeof t&&"function"!=typeof t)(t)&&"function"==typeof t.then,wt=1073741823;const At=ht(class extends vt{constructor(){super(...arguments),this._$C_t=wt,this._$Cwt=[],this._$Cq=new bt(this),this._$CK=new yt}render(...t){var e;return null!==(e=t.find((t=>!$t(t))))&&void 0!==e?e:P}update(t,e){const i=this._$Cwt;let n=i.length;this._$Cwt=e;const o=this._$Cq,s=this._$CK;this.isConnected||this.disconnected();for(let r=0;r<e.length&&!(r>this._$C_t);r++){const t=e[r];if(!$t(t))return this._$C_t=r,t;r<n&&t===i[r]||(this._$C_t=wt,n=0,Promise.resolve(t).then((async e=>{for(;s.get();)await s.get();const i=o.deref();if(void 0!==i){const n=i._$Cwt.indexOf(t);n>-1&&n<i._$C_t&&(i._$C_t=n,i.setValue(e))}})))}return P}disconnected(){this._$Cq.disconnect(),this._$CK.pause()}reconnected(){this._$Cq.reconnect(this),this._$CK.resume()}}),Ot="important",kt=" !"+Ot,St=ht(class extends ut{constructor(t){var e;if(super(t),t.type!==lt||"style"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,i)=>{const n=t[i];return null==n?e:e+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${n};`}),"")}update(t,[e]){const{style:i}=t.element;if(void 0===this.ht){this.ht=new Set;for(const t in e)this.ht.add(t);return this.render(e)}this.ht.forEach((t=>{null==e[t]&&(this.ht.delete(t),t.includes("-")?i.removeProperty(t):i[t]="")}));for(const n in e){const t=e[n];if(null!=t){this.ht.add(n);const e="string"==typeof t&&t.endsWith(kt);n.includes("-")||e?i.setProperty(n,e?t.slice(0,-11):t,e?Ot:""):i[n]=t}}return P}});class Tt extends ut{constructor(t){if(super(t),this.et=z,t.type!==ct)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===z||null==t)return this.ft=void 0,this.et=t;if(t===P)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.ft;this.et=t;const e=[t];return e.raw=e,this.ft={_$litType$:this.constructor.resultType,strings:e,values:[]}}}Tt.directiveName="unsafeHTML",Tt.resultType=1;const xt=ht(Tt),jt=ht(class extends ut{constructor(t){var e;if(super(t),t.type!==lt||"class"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){var i,n;if(void 0===this.it){this.it=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in e)e[t]&&!(null===(i=this.nt)||void 0===i?void 0:i.has(t))&&this.it.add(t);return this.render(e)}const o=t.element.classList;this.it.forEach((t=>{t in e||(o.remove(t),this.it.delete(t))}));for(const s in e){const t=!!e[s];t===this.it.has(s)||(null===(n=this.nt)||void 0===n?void 0:n.has(s))||(t?(o.add(s),this.it.add(s)):(o.remove(s),this.it.delete(s)))}return P}}),Et=(t,e,i,n)=>{n=n||{},i=null==i?{}:i;const o=new Event(e,{bubbles:void 0===n.bubbles||n.bubbles,cancelable:Boolean(n.cancelable),composed:void 0===n.composed||n.composed});return o.detail=i,t.dispatchEvent(o),o},Ct=(t,e)=>{if(t===e)return!0;if(t&&e&&"object"==typeof t&&"object"==typeof e){if(t.constructor!==e.constructor)return!1;let i,n;if(Array.isArray(t)){if(n=t.length,n!==e.length)return!1;for(i=n;0!=i--;)if(!Ct(t[i],e[i]))return!1;return!0}if(t instanceof Map&&e instanceof Map){if(t.size!==e.size)return!1;for(i of t.entries())if(!e.has(i[0]))return!1;for(i of t.entries())if(!Ct(i[1],e.get(i[0])))return!1;return!0}if(t instanceof Set&&e instanceof Set){if(t.size!==e.size)return!1;for(i of t.entries())if(!e.has(i[0]))return!1;return!0}if(ArrayBuffer.isView(t)&&ArrayBuffer.isView(e)){if(n=t.length,n!==e.length)return!1;for(i=n;0!=i--;)if(t[i]!==e[i])return!1;return!0}if(t.constructor===RegExp)return t.source===e.source&&t.flags===e.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===e.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===e.toString();const o=Object.keys(t);if(n=o.length,n!==Object.keys(e).length)return!1;for(i=n;0!=i--;)if(!Object.prototype.hasOwnProperty.call(e,o[i]))return!1;for(i=n;0!=i--;){const n=o[i];if(!Ct(t[n],e[n]))return!1}return!0}return t!=t&&e!=e},Mt="ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0;class Dt extends HTMLElement{constructor(){super(...arguments),this.holdTime=500,this.held=!1,this.cancelled=!1,this.isRepeating=!1,this.repeatCount=0}connectedCallback(){Object.assign(this.style,{position:"fixed",width:Mt?"100px":"50px",height:Mt?"100px":"50px",transform:"translate(-50%, -50%) scale(0)",pointerEvents:"none",zIndex:"999",background:"var(--primary-color)",display:null,opacity:"0.2",borderRadius:"50%",transition:"transform 180ms ease-in-out"}),["touchcancel","mouseout","mouseup","touchmove","mousewheel","wheel","scroll"].forEach((t=>{document.addEventListener(t,(()=>{this.cancelled=!0,this.timer&&(this.stopAnimation(),clearTimeout(this.timer),this.timer=void 0,this.isRepeating&&this.repeatTimeout&&(clearInterval(this.repeatTimeout),this.isRepeating=!1))}),{passive:!0})}))}bind(t,e={}){t.actionHandler&&Ct(e,t.actionHandler.options)||(t.actionHandler?(t.removeEventListener("touchstart",t.actionHandler.start),t.removeEventListener("touchend",t.actionHandler.end),t.removeEventListener("touchcancel",t.actionHandler.end),t.removeEventListener("mousedown",t.actionHandler.start),t.removeEventListener("click",t.actionHandler.end),t.removeEventListener("keydown",t.actionHandler.handleKeyDown)):t.addEventListener("contextmenu",(t=>{const e=t||window.event;return e.preventDefault&&e.preventDefault(),e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0,e.returnValue=!1,!1})),t.actionHandler={options:e},e.disabled||(t.actionHandler.start=i=>{var n;if(null===(n=i.detail)||void 0===n?void 0:n.ignore)return;let o,s;if(this.cancelled=!1,i.touches?(o=i.touches[0].clientX,s=i.touches[0].clientY):(o=i.clientX,s=i.clientY),e.isMomentary){if(0!==i.button)return;Et(t,"action",{action:"press"})}else e.hasHold&&(this.held=!1,this.timer=window.setTimeout((()=>{this.startAnimation(o,s),this.held=!0,e.repeat&&!this.isRepeating&&(this.repeatCount=0,this.isRepeating=!0,this.repeatTimeout=setInterval((()=>{Et(t,"action",{action:"hold"}),this.repeatCount++,this.repeatTimeout&&e.repeatLimit&&this.repeatCount>=e.repeatLimit&&(clearInterval(this.repeatTimeout),this.isRepeating=!1)}),e.repeat))}),this.holdTime))},t.actionHandler.end=i=>{var n;if(null===(n=i.detail)||void 0===n?void 0:n.ignore)return;if(["touchend","touchcancel"].includes(i.type)&&this.cancelled)return void(this.isRepeating&&this.repeatTimeout&&(clearInterval(this.repeatTimeout),this.isRepeating=!1));if("touchcancel"==i.type)return;const o=i.target;i.cancelable&&i.preventDefault(),e.isMomentary?Et(t,"action",{action:"release"}):(e.hasHold&&(clearTimeout(this.timer),this.isRepeating&&this.repeatTimeout&&clearInterval(this.repeatTimeout),this.isRepeating=!1,this.stopAnimation(),this.timer=void 0),e.hasHold&&this.held?e.repeat||Et(o,"action",{action:"hold"}):e.hasDoubleClick?"click"===i.type&&i.detail<2||!this.dblClickTimeout?this.dblClickTimeout=window.setTimeout((()=>{this.dblClickTimeout=void 0,Et(o,"action",{action:"tap"})}),250):(clearTimeout(this.dblClickTimeout),this.dblClickTimeout=void 0,Et(o,"action",{action:"double_tap"})):Et(o,"action",{action:"tap"}))},t.actionHandler.handleTouchMove=t=>{"touchmove"==t.type&&e.hasHold&&this.held&&(t.stopPropagation(),t.preventDefault())},t.actionHandler.handleKeyDown=t=>{["Enter"," "].includes(t.key)&&t.currentTarget.actionHandler.end(t)},t.addEventListener("touchstart",t.actionHandler.start,{passive:!0}),t.addEventListener("touchmove",t.actionHandler.handleTouchMove),t.addEventListener("touchend",t.actionHandler.end),t.addEventListener("touchcancel",t.actionHandler.end),t.addEventListener("mousedown",t.actionHandler.start,{passive:!0}),t.addEventListener("click",t.actionHandler.end),t.addEventListener("keydown",t.actionHandler.handleKeyDown)))}startAnimation(t,e){Object.assign(this.style,{left:`${t}px`,top:`${e}px`,transform:"translate(-50%, -50%) scale(1)"})}stopAnimation(){Object.assign(this.style,{left:null,top:null,transform:"translate(-50%, -50%) scale(0)"})}}customElements.define("button-card-action-handler",Dt);const Ht=(t,e)=>{const i=(()=>{const t=document.body;if(t.querySelector("button-card-action-handler"))return t.querySelector("button-card-action-handler");const e=document.createElement("button-card-action-handler");return t.appendChild(e),e})();i&&i.bind(t,e)},It=ht(class extends ut{update(t,[e]){return Ht(t.element,e),P}render(t){}});function Nt(t,e){(function(t){return"string"==typeof t&&-1!==t.indexOf(".")&&1===parseFloat(t)})(t)&&(t="100%");var i=function(t){return"string"==typeof t&&-1!==t.indexOf("%")}(t);return t=360===e?t:Math.min(e,Math.max(0,parseFloat(t))),i&&(t=parseInt(String(t*e),10)/100),Math.abs(t-e)<1e-6?1:t=360===e?(t<0?t%e+e:t%e)/parseFloat(String(e)):t%e/parseFloat(String(e))}function Rt(t){return Math.min(1,Math.max(0,t))}function Pt(t){return t=parseFloat(t),(isNaN(t)||t<0||t>1)&&(t=1),t}function zt(t){return t<=1?"".concat(100*Number(t),"%"):t}function Lt(t){return 1===t.length?"0"+t:String(t)}function Vt(t,e,i){t=Nt(t,255),e=Nt(e,255),i=Nt(i,255);var n=Math.max(t,e,i),o=Math.min(t,e,i),s=0,r=0,a=(n+o)/2;if(n===o)r=0,s=0;else{var l=n-o;switch(r=a>.5?l/(2-n-o):l/(n+o),n){case t:s=(e-i)/l+(e<i?6:0);break;case e:s=(i-t)/l+2;break;case i:s=(t-e)/l+4}s/=6}return{h:s,s:r,l:a}}function Ft(t,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?t+6*i*(e-t):i<.5?e:i<2/3?t+(e-t)*(2/3-i)*6:t}function Ut(t,e,i){t=Nt(t,255),e=Nt(e,255),i=Nt(i,255);var n=Math.max(t,e,i),o=Math.min(t,e,i),s=0,r=n,a=n-o,l=0===n?0:a/n;if(n===o)s=0;else{switch(n){case t:s=(e-i)/a+(e<i?6:0);break;case e:s=(i-t)/a+2;break;case i:s=(t-e)/a+4}s/=6}return{h:s,s:l,v:r}}function Bt(t,e,i,n){var o=[Lt(Math.round(t).toString(16)),Lt(Math.round(e).toString(16)),Lt(Math.round(i).toString(16))];return n&&o[0].startsWith(o[0].charAt(1))&&o[1].startsWith(o[1].charAt(1))&&o[2].startsWith(o[2].charAt(1))?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0):o.join("")}function Wt(t){return Math.round(255*parseFloat(t)).toString(16)}function qt(t){return Zt(t)/255}function Zt(t){return parseInt(t,16)}var Gt={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function Yt(t){var e={r:0,g:0,b:0},i=1,n=null,o=null,s=null,r=!1,a=!1;return"string"==typeof t&&(t=function(t){if(t=t.trim().toLowerCase(),0===t.length)return!1;var e=!1;if(Gt[t])t=Gt[t],e=!0;else if("transparent"===t)return{r:0,g:0,b:0,a:0,format:"name"};var i=Xt.rgb.exec(t);if(i)return{r:i[1],g:i[2],b:i[3]};if(i=Xt.rgba.exec(t),i)return{r:i[1],g:i[2],b:i[3],a:i[4]};if(i=Xt.hsl.exec(t),i)return{h:i[1],s:i[2],l:i[3]};if(i=Xt.hsla.exec(t),i)return{h:i[1],s:i[2],l:i[3],a:i[4]};if(i=Xt.hsv.exec(t),i)return{h:i[1],s:i[2],v:i[3]};if(i=Xt.hsva.exec(t),i)return{h:i[1],s:i[2],v:i[3],a:i[4]};if(i=Xt.hex8.exec(t),i)return{r:Zt(i[1]),g:Zt(i[2]),b:Zt(i[3]),a:qt(i[4]),format:e?"name":"hex8"};if(i=Xt.hex6.exec(t),i)return{r:Zt(i[1]),g:Zt(i[2]),b:Zt(i[3]),format:e?"name":"hex"};if(i=Xt.hex4.exec(t),i)return{r:Zt(i[1]+i[1]),g:Zt(i[2]+i[2]),b:Zt(i[3]+i[3]),a:qt(i[4]+i[4]),format:e?"name":"hex8"};if(i=Xt.hex3.exec(t),i)return{r:Zt(i[1]+i[1]),g:Zt(i[2]+i[2]),b:Zt(i[3]+i[3]),format:e?"name":"hex"};return!1}(t)),"object"==typeof t&&(te(t.r)&&te(t.g)&&te(t.b)?(e=function(t,e,i){return{r:255*Nt(t,255),g:255*Nt(e,255),b:255*Nt(i,255)}}(t.r,t.g,t.b),r=!0,a="%"===String(t.r).substr(-1)?"prgb":"rgb"):te(t.h)&&te(t.s)&&te(t.v)?(n=zt(t.s),o=zt(t.v),e=function(t,e,i){t=6*Nt(t,360),e=Nt(e,100),i=Nt(i,100);var n=Math.floor(t),o=t-n,s=i*(1-e),r=i*(1-o*e),a=i*(1-(1-o)*e),l=n%6;return{r:255*[i,r,s,s,a,i][l],g:255*[a,i,i,r,s,s][l],b:255*[s,s,a,i,i,r][l]}}(t.h,n,o),r=!0,a="hsv"):te(t.h)&&te(t.s)&&te(t.l)&&(n=zt(t.s),s=zt(t.l),e=function(t,e,i){var n,o,s;if(t=Nt(t,360),e=Nt(e,100),i=Nt(i,100),0===e)o=i,s=i,n=i;else{var r=i<.5?i*(1+e):i+e-i*e,a=2*i-r;n=Ft(a,r,t+1/3),o=Ft(a,r,t),s=Ft(a,r,t-1/3)}return{r:255*n,g:255*o,b:255*s}}(t.h,n,s),r=!0,a="hsl"),Object.prototype.hasOwnProperty.call(t,"a")&&(i=t.a)),i=Pt(i),{ok:r,format:t.format||a,r:Math.min(255,Math.max(e.r,0)),g:Math.min(255,Math.max(e.g,0)),b:Math.min(255,Math.max(e.b,0)),a:i}}var Kt="(?:".concat("[-\\+]?\\d*\\.\\d+%?",")|(?:").concat("[-\\+]?\\d+%?",")"),Jt="[\\s|\\(]+(".concat(Kt,")[,|\\s]+(").concat(Kt,")[,|\\s]+(").concat(Kt,")\\s*\\)?"),Qt="[\\s|\\(]+(".concat(Kt,")[,|\\s]+(").concat(Kt,")[,|\\s]+(").concat(Kt,")[,|\\s]+(").concat(Kt,")\\s*\\)?"),Xt={CSS_UNIT:new RegExp(Kt),rgb:new RegExp("rgb"+Jt),rgba:new RegExp("rgba"+Qt),hsl:new RegExp("hsl"+Jt),hsla:new RegExp("hsla"+Qt),hsv:new RegExp("hsv"+Jt),hsva:new RegExp("hsva"+Qt),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function te(t){return Boolean(Xt.CSS_UNIT.exec(String(t)))}var ee=function(){function t(e,i){var n;if(void 0===e&&(e=""),void 0===i&&(i={}),e instanceof t)return e;"number"==typeof e&&(e=function(t){return{r:t>>16,g:(65280&t)>>8,b:255&t}}(e)),this.originalInput=e;var o=Yt(e);this.originalInput=e,this.r=o.r,this.g=o.g,this.b=o.b,this.a=o.a,this.roundA=Math.round(100*this.a)/100,this.format=null!==(n=i.format)&&void 0!==n?n:o.format,this.gradientType=i.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=o.ok}return t.prototype.isDark=function(){return this.getBrightness()<128},t.prototype.isLight=function(){return!this.isDark()},t.prototype.getBrightness=function(){var t=this.toRgb();return(299*t.r+587*t.g+114*t.b)/1e3},t.prototype.getLuminance=function(){var t=this.toRgb(),e=t.r/255,i=t.g/255,n=t.b/255;return.2126*(e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4))+.7152*(i<=.03928?i/12.92:Math.pow((i+.055)/1.055,2.4))+.0722*(n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4))},t.prototype.getAlpha=function(){return this.a},t.prototype.setAlpha=function(t){return this.a=Pt(t),this.roundA=Math.round(100*this.a)/100,this},t.prototype.isMonochrome=function(){return 0===this.toHsl().s},t.prototype.toHsv=function(){var t=Ut(this.r,this.g,this.b);return{h:360*t.h,s:t.s,v:t.v,a:this.a}},t.prototype.toHsvString=function(){var t=Ut(this.r,this.g,this.b),e=Math.round(360*t.h),i=Math.round(100*t.s),n=Math.round(100*t.v);return 1===this.a?"hsv(".concat(e,", ").concat(i,"%, ").concat(n,"%)"):"hsva(".concat(e,", ").concat(i,"%, ").concat(n,"%, ").concat(this.roundA,")")},t.prototype.toHsl=function(){var t=Vt(this.r,this.g,this.b);return{h:360*t.h,s:t.s,l:t.l,a:this.a}},t.prototype.toHslString=function(){var t=Vt(this.r,this.g,this.b),e=Math.round(360*t.h),i=Math.round(100*t.s),n=Math.round(100*t.l);return 1===this.a?"hsl(".concat(e,", ").concat(i,"%, ").concat(n,"%)"):"hsla(".concat(e,", ").concat(i,"%, ").concat(n,"%, ").concat(this.roundA,")")},t.prototype.toHex=function(t){return void 0===t&&(t=!1),Bt(this.r,this.g,this.b,t)},t.prototype.toHexString=function(t){return void 0===t&&(t=!1),"#"+this.toHex(t)},t.prototype.toHex8=function(t){return void 0===t&&(t=!1),function(t,e,i,n,o){var s=[Lt(Math.round(t).toString(16)),Lt(Math.round(e).toString(16)),Lt(Math.round(i).toString(16)),Lt(Wt(n))];return o&&s[0].startsWith(s[0].charAt(1))&&s[1].startsWith(s[1].charAt(1))&&s[2].startsWith(s[2].charAt(1))&&s[3].startsWith(s[3].charAt(1))?s[0].charAt(0)+s[1].charAt(0)+s[2].charAt(0)+s[3].charAt(0):s.join("")}(this.r,this.g,this.b,this.a,t)},t.prototype.toHex8String=function(t){return void 0===t&&(t=!1),"#"+this.toHex8(t)},t.prototype.toHexShortString=function(t){return void 0===t&&(t=!1),1===this.a?this.toHexString(t):this.toHex8String(t)},t.prototype.toRgb=function(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}},t.prototype.toRgbString=function(){var t=Math.round(this.r),e=Math.round(this.g),i=Math.round(this.b);return 1===this.a?"rgb(".concat(t,", ").concat(e,", ").concat(i,")"):"rgba(".concat(t,", ").concat(e,", ").concat(i,", ").concat(this.roundA,")")},t.prototype.toPercentageRgb=function(){var t=function(t){return"".concat(Math.round(100*Nt(t,255)),"%")};return{r:t(this.r),g:t(this.g),b:t(this.b),a:this.a}},t.prototype.toPercentageRgbString=function(){var t=function(t){return Math.round(100*Nt(t,255))};return 1===this.a?"rgb(".concat(t(this.r),"%, ").concat(t(this.g),"%, ").concat(t(this.b),"%)"):"rgba(".concat(t(this.r),"%, ").concat(t(this.g),"%, ").concat(t(this.b),"%, ").concat(this.roundA,")")},t.prototype.toName=function(){if(0===this.a)return"transparent";if(this.a<1)return!1;for(var t="#"+Bt(this.r,this.g,this.b,!1),e=0,i=Object.entries(Gt);e<i.length;e++){var n=i[e],o=n[0];if(t===n[1])return o}return!1},t.prototype.toString=function(t){var e=Boolean(t);t=null!=t?t:this.format;var i=!1,n=this.a<1&&this.a>=0;return e||!n||!t.startsWith("hex")&&"name"!==t?("rgb"===t&&(i=this.toRgbString()),"prgb"===t&&(i=this.toPercentageRgbString()),"hex"!==t&&"hex6"!==t||(i=this.toHexString()),"hex3"===t&&(i=this.toHexString(!0)),"hex4"===t&&(i=this.toHex8String(!0)),"hex8"===t&&(i=this.toHex8String()),"name"===t&&(i=this.toName()),"hsl"===t&&(i=this.toHslString()),"hsv"===t&&(i=this.toHsvString()),i||this.toHexString()):"name"===t&&0===this.a?this.toName():this.toRgbString()},t.prototype.toNumber=function(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)},t.prototype.clone=function(){return new t(this.toString())},t.prototype.lighten=function(e){void 0===e&&(e=10);var i=this.toHsl();return i.l+=e/100,i.l=Rt(i.l),new t(i)},t.prototype.brighten=function(e){void 0===e&&(e=10);var i=this.toRgb();return i.r=Math.max(0,Math.min(255,i.r-Math.round(-e/100*255))),i.g=Math.max(0,Math.min(255,i.g-Math.round(-e/100*255))),i.b=Math.max(0,Math.min(255,i.b-Math.round(-e/100*255))),new t(i)},t.prototype.darken=function(e){void 0===e&&(e=10);var i=this.toHsl();return i.l-=e/100,i.l=Rt(i.l),new t(i)},t.prototype.tint=function(t){return void 0===t&&(t=10),this.mix("white",t)},t.prototype.shade=function(t){return void 0===t&&(t=10),this.mix("black",t)},t.prototype.desaturate=function(e){void 0===e&&(e=10);var i=this.toHsl();return i.s-=e/100,i.s=Rt(i.s),new t(i)},t.prototype.saturate=function(e){void 0===e&&(e=10);var i=this.toHsl();return i.s+=e/100,i.s=Rt(i.s),new t(i)},t.prototype.greyscale=function(){return this.desaturate(100)},t.prototype.spin=function(e){var i=this.toHsl(),n=(i.h+e)%360;return i.h=n<0?360+n:n,new t(i)},t.prototype.mix=function(e,i){void 0===i&&(i=50);var n=this.toRgb(),o=new t(e).toRgb(),s=i/100;return new t({r:(o.r-n.r)*s+n.r,g:(o.g-n.g)*s+n.g,b:(o.b-n.b)*s+n.b,a:(o.a-n.a)*s+n.a})},t.prototype.analogous=function(e,i){void 0===e&&(e=6),void 0===i&&(i=30);var n=this.toHsl(),o=360/i,s=[this];for(n.h=(n.h-(o*e>>1)+720)%360;--e;)n.h=(n.h+o)%360,s.push(new t(n));return s},t.prototype.complement=function(){var e=this.toHsl();return e.h=(e.h+180)%360,new t(e)},t.prototype.monochromatic=function(e){void 0===e&&(e=6);for(var i=this.toHsv(),n=i.h,o=i.s,s=i.v,r=[],a=1/e;e--;)r.push(new t({h:n,s:o,v:s})),s=(s+a)%1;return r},t.prototype.splitcomplement=function(){var e=this.toHsl(),i=e.h;return[this,new t({h:(i+72)%360,s:e.s,l:e.l}),new t({h:(i+216)%360,s:e.s,l:e.l})]},t.prototype.onBackground=function(e){var i=this.toRgb(),n=new t(e).toRgb(),o=i.a+n.a*(1-i.a);return new t({r:(i.r*i.a+n.r*n.a*(1-i.a))/o,g:(i.g*i.a+n.g*n.a*(1-i.a))/o,b:(i.b*i.a+n.b*n.a*(1-i.a))/o,a:o})},t.prototype.triad=function(){return this.polyad(3)},t.prototype.tetrad=function(){return this.polyad(4)},t.prototype.polyad=function(e){for(var i=this.toHsl(),n=i.h,o=[this],s=360/e,r=1;r<e;r++)o.push(new t({h:(n+r*s)%360,s:i.s,l:i.l}));return o},t.prototype.equals=function(e){return this.toRgbString()===new t(e).toRgbString()},t}();function ie(t,e){return void 0===t&&(t=""),void 0===e&&(e={}),new ee(t,e)}const ne="sections",oe=[ne],se="unavailable",re=(ae=[se,"unknown"],(t,e)=>ae.includes(t,e));var ae;const le=new Set(["fan","input_boolean","light","switch","group","automation","humidifier"]),ce=new Set(["input_button"]),he=["auto","auto-no-temperature"],ue=["card","label-card"],de=["--ha-card-background","--card-background-color"],pe="var(--primary-text-color)";function me(t){return t.substr(0,t.indexOf("."))}function _e(t,e){const i=[];let n=e;return"var"===e.trim().substring(0,3)&&(e.split(",").forEach((t=>{const e=t.match(/var\(\s*([a-zA-Z0-9-]*)/);e&&i.push(e[1])})),i.some((e=>{const i=window.getComputedStyle(t).getPropertyValue(e);return!!i&&(n=i,!0)}))),n}function fe(...t){const e=t=>t&&"object"==typeof t;return t.reduce(((t,i)=>(Object.keys(i).forEach((n=>{const o=t[n],s=i[n];Array.isArray(o)&&Array.isArray(s)?t[n]=o.concat(...s):e(o)&&e(s)?t[n]=fe(o,s):t[n]=s})),t)),{})}function ge(t,e){let i=[];return t&&t.forEach((t=>{let n=t;e&&e.forEach((e=>{e.id&&t.id&&e.id==t.id&&(n=fe(n,e))})),i.push(n)})),e&&(i=i.concat(e.filter((e=>!t||!t.find((t=>!(!t.id||!e.id)&&t.id==e.id)))))),i}function ve(){var t;let e=document.querySelector("hc-main");if(e=e&&e.shadowRoot,e=e&&e.querySelector("hc-lovelace"),e=e&&e.shadowRoot,e=e&&(e.querySelector("hui-view")||e.querySelector("hui-panel-view")),e){const i=e.lovelace;return i.current_view=null!==(t=null==e?void 0:e._curView)&&void 0!==t?t:0,i}return null}function be(){var t;let e=document.querySelector("home-assistant");if(e=e&&e.shadowRoot,e=e&&e.querySelector("home-assistant-main"),e=e&&e.shadowRoot,e=e&&e.querySelector("app-drawer-layout partial-panel-resolver, ha-drawer partial-panel-resolver"),e=e&&e.shadowRoot||e,e=e&&e.querySelector("ha-panel-lovelace"),e=e&&e.shadowRoot,e=e&&e.querySelector("hui-root"),e){const i=e.lovelace;return i.current_view=null!==(t=null==e?void 0:e._curView)&&void 0!==t?t:0,i}return null}const ye=()=>{const t=function(){var t;const e=be()||ve();return(null==e?void 0:e.current_view)?null===(t=e.config)||void 0===t?void 0:t.views[e.current_view]:void 0}(),e=(null==(i=t)?void 0:i.type)?i.type:(null==i?void 0:i.panel)?"panel":(null==i?void 0:i.sections)?ne:(null==i?void 0:i.cards)?"masonry":ne;var i;return oe.includes(e)};function $e(t,e){if(void 0===t)return!1;const i=me(t.entity_id),n=void 0!==e?e:null==t?void 0:t.state;if(["button","event","input_button","scene"].includes(i))return n!==se;if(re(n))return!1;if("off"===n&&"alert"!==i)return!1;switch(i){case"alarm_control_panel":return"disarmed"!==n;case"alert":return"idle"!==n;case"cover":return"closed"!==n;case"device_tracker":case"person":return"not_home"!==n;case"lock":return"locked"!==n;case"media_player":return"standby"!==n;case"vacuum":return!["idle","docked","paused"].includes(n);case"plant":return"problem"===n;case"group":return["on","home","open","locked","problem"].includes(n);case"timer":return"active"===n;case"camera":return"streaming"===n}return!0}function we(t){return Array.isArray(t)?t.reverse().reduce(((t,e)=>`var(${e}${t?`, ${t}`:""})`),void 0):`var(${t})`}function Ae(t){const e=t.split(":").map(Number);return 3600*e[0]+60*e[1]+e[2]}const Oe=t=>t<10?`0${t}`:t;const ke=t=>t.startsWith("media-source://"),Se=(t,e)=>t.callWS({type:"media_source/resolve_media",media_content_id:e}),Te=(t,e,i,n,o,s)=>{const r=[];(null==o?void 0:o.length)&&r.push((t=>o.includes(me(t)))),s&&r.push((e=>t.states[e]&&s(t.states[e])));const a=((t,e,i)=>{(!i||i>t.length)&&(i=t.length);const n=[];for(let o=0;o<t.length&&n.length<i;o++){let i=!0;for(const n of e)if(!n(t[o])){i=!1;break}i&&n.push(t[o])}return n})(i,r,e);if(a.length<e&&n.length){const i=Te(t,e-a.length,n,[],o,s);a.push(...i)}return a},xe=new Set(["call-service","divider","section","weblink","cast","select"]),je={alert:"toggle",automation:"toggle",climate:"climate",cover:"cover",fan:"toggle",group:"group",input_boolean:"toggle",input_number:"input-number",input_select:"input-select",input_text:"input-text",light:"toggle",lock:"lock",media_player:"media-player",remote:"toggle",scene:"scene",script:"script",sensor:"sensor",timer:"timer",switch:"toggle",vacuum:"toggle",water_heater:"climate",input_datetime:"input-datetime"},Ee=((t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[n+1]),t[0]);return new s(i,t,n)})`
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
    --ha-ripple-hover-opacity: var(--button-card-ripple-hover-opacity, 0.08);
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
      calc(var(--ha-ripple-hover-opacity, 0.08) + 0.05)
    );
    --md-ripple-pressed-opacity: var(
      --button-card-ripple-icon-pressed-opacity,
      calc(var(--ha-ripple-pressed-opacity, 0.12) + 0.05)
    );
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
`;var Ce,Me,De,He,Ie;!function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(Ce||(Ce={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(Me||(Me={})),function(t){t.local="local",t.server="server"}(De||(De={})),function(t){t.language="language",t.system="system",t.DMY="DMY",t.MDY="MDY",t.YMD="YMD"}(He||(He={})),function(t){t.language="language",t.monday="monday",t.tuesday="tuesday",t.wednesday="wednesday",t.thursday="thursday",t.friday="friday",t.saturday="saturday",t.sunday="sunday"}(Ie||(Ie={}));const Ne=(t,e,i)=>{const n=e?(t=>{switch(t.number_format){case Ce.comma_decimal:return["en-US","en"];case Ce.decimal_comma:return["de","es","it"];case Ce.space_comma:return["fr","sv","cs"];case Ce.system:return;default:return t.language}})(e):void 0;if(Number.isNaN=Number.isNaN||function t(e){return"number"==typeof e&&t(e)},(null==e?void 0:e.number_format)!==Ce.none&&!Number.isNaN(Number(t))&&Intl)try{return new Intl.NumberFormat(n,Pe(t,i)).format(Number(t))}catch(o){return console.error(o),new Intl.NumberFormat(void 0,Pe(t,i)).format(Number(t))}return"string"==typeof t?t:`${((t,e=2)=>Math.round(t*10**e)/10**e)(t,null==i?void 0:i.maximumFractionDigits).toString()}${"currency"===(null==i?void 0:i.style)?` ${i.currency}`:""}`},Re=(t,e,i)=>{var n;let o=null==i?void 0:i.display_precision;return void 0!==e&&(o=e),null!=o?{maximumFractionDigits:o,minimumFractionDigits:o}:Number.isInteger(Number(null===(n=t.attributes)||void 0===n?void 0:n.step))&&Number.isInteger(Number(t.state))?{maximumFractionDigits:0}:null!=t.attributes.step?{maximumFractionDigits:Math.ceil(Math.log10(1/t.attributes.step))}:void 0},Pe=(t,e)=>{const i=Object.assign({maximumFractionDigits:2},e);if("string"!=typeof t)return i;if(!e||void 0===e.minimumFractionDigits&&void 0===e.maximumFractionDigits){const e=t.indexOf(".")>-1?t.split(".")[1].length:0;i.minimumFractionDigits=e,i.maximumFractionDigits=e}return i};var ze,Le,Ve,Fe,Ue;!function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(ze||(ze={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(Le||(Le={})),function(t){t.local="local",t.server="server"}(Ve||(Ve={})),function(t){t.language="language",t.system="system",t.DMY="DMY",t.MDY="MDY",t.YMD="YMD"}(Fe||(Fe={})),function(t){t.language="language",t.monday="monday",t.tuesday="tuesday",t.wednesday="wednesday",t.thursday="thursday",t.friday="friday",t.saturday="saturday",t.sunday="sunday"}(Ue||(Ue={}));const Be=(t,e=2)=>{let i=""+t;for(let n=1;n<e;n++)i=parseInt(i)<10**n?`0${i}`:i;return i};const We={ms:1,s:1e3,min:6e4,h:36e5,d:864e5},qe=(t,e)=>function(t){const e=Math.floor(t/1e3/3600),i=Math.floor(t/1e3%3600/60),n=Math.floor(t/1e3%3600%60),o=Math.floor(t%1e3);return e>0?`${e}:${Be(i)}:${Be(n)}`:i>0?`${i}:${Be(n)}`:n>0||o>0?`${n}${o>0?`.${Be(o,3)}`:""}`:null}(parseFloat(t)*We[e])||"0";var Ze=Number.isNaN||function(t){return"number"==typeof t&&t!=t};function Ge(t,e){if(t.length!==e.length)return!1;for(var i=0;i<t.length;i++)if(n=t[i],o=e[i],!(n===o||Ze(n)&&Ze(o)))return!1;var n,o;return!0}function Ye(t,e){void 0===e&&(e=Ge);var i=null;function n(){for(var n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];if(i&&i.lastThis===this&&e(n,i.lastArgs))return i.lastResult;var s=t.apply(this,n);return i={lastResult:s,lastArgs:n,lastThis:this},s}return n.clear=function(){i=null},n}const Ke=Ye(((t,e)=>new Intl.DateTimeFormat(t.language,{weekday:"long",month:"long",day:"numeric",timeZone:"server"===t.time_zone?e:void 0}))),Je=(t,e,i)=>Qe(e,i.time_zone).format(t),Qe=Ye(((t,e)=>new Intl.DateTimeFormat(t.language,{year:"numeric",month:"long",day:"numeric",timeZone:"server"===t.time_zone?e:void 0}))),Xe=(t,e,i)=>{var n,o,s,r;const a=ti(e,i.time_zone);if(e.date_format===He.language||e.date_format===He.system)return a.format(t);const l=a.formatToParts(t),c=null===(n=l.find((t=>"literal"===t.type)))||void 0===n?void 0:n.value,h=null===(o=l.find((t=>"day"===t.type)))||void 0===o?void 0:o.value,u=null===(s=l.find((t=>"month"===t.type)))||void 0===s?void 0:s.value,d=null===(r=l.find((t=>"year"===t.type)))||void 0===r?void 0:r.value,p=l[l.length-1];let m="literal"===(null==p?void 0:p.type)?null==p?void 0:p.value:"";"bg"===e.language&&e.date_format===He.YMD&&(m="");return{[He.DMY]:`${h}${c}${u}${c}${d}${m}`,[He.MDY]:`${u}${c}${h}${c}${d}${m}`,[He.YMD]:`${d}${c}${u}${c}${h}${m}`}[e.date_format]},ti=Ye(((t,e)=>{const i=t.date_format===He.system?void 0:t.language;return t.date_format===He.language||(t.date_format,He.system),new Intl.DateTimeFormat(i,{year:"numeric",month:"numeric",day:"numeric",timeZone:"server"===t.time_zone?e:void 0})})),ei=Ye(((t,e)=>new Intl.DateTimeFormat(t.language,{day:"numeric",month:"short",timeZone:"server"===t.time_zone?e:void 0}))),ii=Ye(((t,e)=>new Intl.DateTimeFormat(t.language,{month:"long",year:"numeric",timeZone:"server"===t.time_zone?e:void 0}))),ni=Ye(((t,e)=>new Intl.DateTimeFormat(t.language,{month:"long",timeZone:"server"===t.time_zone?e:void 0}))),oi=Ye(((t,e)=>new Intl.DateTimeFormat(t.language,{year:"numeric",timeZone:"server"===t.time_zone?e:void 0}))),si=Ye(((t,e)=>new Intl.DateTimeFormat(t.language,{weekday:"long",timeZone:"server"===t.time_zone?e:void 0}))),ri=Ye(((t,e)=>new Intl.DateTimeFormat(t.language,{weekday:"short",timeZone:"server"===t.time_zone?e:void 0}))),ai=Ye((t=>{if(t.time_format===Me.language||t.time_format===Me.system){const e=t.time_format===Me.language?t.language:void 0,i=(new Date).toLocaleString(e);return i.includes("AM")||i.includes("PM")}return t.time_format===Me.am_pm})),li=(t,e,i)=>ci(e,i.time_zone).format(t),ci=Ye(((t,e)=>new Intl.DateTimeFormat("en"!==t.language||ai(t)?t.language:"en-u-hc-h23",{hour:"numeric",minute:"2-digit",hour12:ai(t),timeZone:"server"===t.time_zone?e:void 0}))),hi=Ye(((t,e)=>new Intl.DateTimeFormat("en"!==t.language||ai(t)?t.language:"en-u-hc-h23",{hour:ai(t)?"numeric":"2-digit",minute:"2-digit",second:"2-digit",hour12:ai(t),timeZone:"server"===t.time_zone?e:void 0}))),ui=Ye(((t,e)=>new Intl.DateTimeFormat("en"!==t.language||ai(t)?t.language:"en-u-hc-h23",{weekday:"long",hour:ai(t)?"numeric":"2-digit",minute:"2-digit",hour12:ai(t),timeZone:"server"===t.time_zone?e:void 0}))),di=Ye(((t,e)=>new Intl.DateTimeFormat("en-GB",{hour:"numeric",minute:"2-digit",hour12:!1,timeZone:"server"===t.time_zone?e:void 0}))),pi=(t,e,i)=>mi(e,i.time_zone).format(t),mi=Ye(((t,e)=>new Intl.DateTimeFormat("en"!==t.language||ai(t)?t.language:"en-u-hc-h23",{year:"numeric",month:"long",day:"numeric",hour:ai(t)?"numeric":"2-digit",minute:"2-digit",hour12:ai(t),timeZone:"server"===t.time_zone?e:void 0}))),_i=Ye(((t,e)=>new Intl.DateTimeFormat("en"!==t.language||ai(t)?t.language:"en-u-hc-h23",{year:"numeric",month:"short",day:"numeric",hour:ai(t)?"numeric":"2-digit",minute:"2-digit",hour12:ai(t),timeZone:"server"===t.time_zone?e:void 0}))),fi=Ye(((t,e)=>new Intl.DateTimeFormat("en"!==t.language||ai(t)?t.language:"en-u-hc-h23",{month:"short",day:"numeric",hour:ai(t)?"numeric":"2-digit",minute:"2-digit",hour12:ai(t),timeZone:"server"===t.time_zone?e:void 0}))),gi=Ye(((t,e)=>new Intl.DateTimeFormat("en"!==t.language||ai(t)?t.language:"en-u-hc-h23",{year:"numeric",month:"long",day:"numeric",hour:ai(t)?"numeric":"2-digit",minute:"2-digit",second:"2-digit",hour12:ai(t),timeZone:"server"===t.time_zone?e:void 0}))),vi=(t,e)=>0!=(t.supported_features&e),bi=t=>(t=>vi(t,4)&&"number"==typeof t.in_progress)(t)||!!t.in_progress,yi=(t,e,i,n,o,s,r)=>{const a=o[e.entity_id];return $i(t,i,n,a,e.entity_id,e.attributes,s,void 0!==r?r:e.state)},$i=(t,e,i,n,o,s,r,a)=>{var l;if("unknown"===a||"unavailable"===a)return t(`state.default.${a}`);if(function(t){return!!t.unit_of_measurement||!!t.state_class}(s)){if("duration"===s.device_class&&s.unit_of_measurement&&We[s.unit_of_measurement])try{return qe(a,s.unit_of_measurement)}catch(h){}if("monetary"===s.device_class)try{return Ne(a,e,Object.assign({style:"currency",currency:(null==r?void 0:r.units)||s.unit_of_measurement,minimumFractionDigits:2},Re({state:a,attributes:s},null==r?void 0:r.numeric_precision,n)))}catch(h){}const t=(null==r?void 0:r.show_units)?(null==r?void 0:r.units)?null==r?void 0:r.units:s.unit_of_measurement:void 0,i=t?"%"===t?(t=>{switch(t.language){case"cz":case"de":case"fi":case"fr":case"sk":case"sv":return" ";default:return""}})(e)+"%":` ${t}`:"";return`${Ne(a,e,Re({state:a,attributes:s},null==r?void 0:r.numeric_precision,n))}${i}`}const c=me(o);if("datetime"===c){const t=new Date(a);return pi(t,e,i)}if(["date","input_datetime","time"].includes(c))try{const t=a.split(" ");if(2===t.length)return pi(new Date(t.join("T")),Object.assign(Object.assign({},e),{time_zone:Ve.local}),i);if(1===t.length){if(a.includes("-"))return Je(new Date(`${a}T00:00`),Object.assign(Object.assign({},e),{time_zone:Ve.local}),i);if(a.includes(":")){const t=new Date;return li(new Date(`${t.toISOString().split("T")[0]}T${a}`),Object.assign(Object.assign({},e),{time_zone:Ve.local}),i)}}return a}catch(u){return a}if("counter"===c||"number"===c||"input_number"===c)return Ne(a,e,Re({state:a,attributes:s},null==r?void 0:r.numeric_precision,n));if(["button","event","input_button","scene","stt","tts"].includes(c)||"sensor"===c&&"timestamp"===s.device_class)try{return pi(new Date(a),e,i)}catch(h){return a}return"update"===c?"on"===a?bi(s)?vi(s,4)&&"number"==typeof s.in_progress?t("ui.card.update.installing_with_progress",{progress:s.in_progress}):t("ui.card.update.installing"):s.latest_version:s.skipped_version===s.latest_version?null!==(l=s.latest_version)&&void 0!==l?l:t("state.default.unavailable"):t("ui.card.update.up_to_date"):(null==n?void 0:n.translation_key)&&t(`component.${n.platform}.entity.${c}.${n.translation_key}.state.${a}`)||s.device_class&&t(`component.${c}.entity_component.${s.device_class}.state.${a}`)||t(`component.${c}.entity_component._.state.${a}`)||a};var wi=Function.prototype.toString,Ai=Object.create,Oi=Object.defineProperty,ki=Object.getOwnPropertyDescriptor,Si=Object.getOwnPropertyNames,Ti=Object.getOwnPropertySymbols,xi=Object.getPrototypeOf,ji=Object.prototype,Ei=ji.hasOwnProperty,Ci=ji.propertyIsEnumerable,Mi="function"==typeof Ti,Di="function"==typeof WeakMap,Hi=function(){if(Di)return function(){return new WeakMap};var t=function(){function t(){this._keys=[],this._values=[]}return t.prototype.has=function(t){return!!~this._keys.indexOf(t)},t.prototype.get=function(t){return this._values[this._keys.indexOf(t)]},t.prototype.set=function(t,e){this._keys.push(t),this._values.push(e)},t}();return function(){return new t}}(),Ii=function(t,e){var i=t.__proto__||xi(t);if(!i)return Ai(null);var n=i.constructor;if(n===e.Object)return i===e.Object.prototype?{}:Ai(i);if(~wi.call(n).indexOf("[native code]"))try{return new n}catch(ji){}return Ai(i)},Ni=function(t,e,i,n){var o=Ii(t,e);for(var s in n.set(t,o),t)Ei.call(t,s)&&(o[s]=i(t[s],n));if(Mi)for(var r=Ti(t),a=0,l=r.length,c=void 0;a<l;++a)c=r[a],Ci.call(t,c)&&(o[c]=i(t[c],n));return o},Ri=function(t,e,i,n){var o=Ii(t,e);n.set(t,o);for(var s=Mi?Si(t).concat(Ti(t)):Si(t),r=0,a=s.length,l=void 0,c=void 0;r<a;++r)if("callee"!==(l=s[r])&&"caller"!==l)if(c=ki(t,l)){c.get||c.set||(c.value=i(t[l],n));try{Oi(o,l,c)}catch(h){o[l]=c.value}}else o[l]=i(t[l],n);return o},Pi=Array.isArray,zi=Object.getPrototypeOf,Li=function(){return"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:(console&&console.error&&console.error('Unable to locate global object, returning "this".'),this)}();function Vi(t,e){var i=!(!e||!e.isStrict),n=e&&e.realm||Li,o=i?Ri:Ni,s=function(t,e){if(!t||"object"!=typeof t)return t;if(e.has(t))return e.get(t);var r,a,l,c=t.__proto__||zi(t),h=c&&c.constructor;if(!h||h===n.Object)return o(t,n,s,e);if(Pi(t)){if(i)return Ri(t,n,s,e);r=new h,e.set(t,r);for(var u=0,d=t.length;u<d;++u)r[u]=s(t[u],e);return r}if(t instanceof n.Date)return new h(t.getTime());if(t instanceof n.RegExp)return(r=new h(t.source,t.flags||(l="",(a=t).global&&(l+="g"),a.ignoreCase&&(l+="i"),a.multiline&&(l+="m"),a.unicode&&(l+="u"),a.sticky&&(l+="y"),l))).lastIndex=t.lastIndex,r;if(n.Map&&t instanceof n.Map)return r=new h,e.set(t,r),t.forEach((function(t,i){r.set(i,s(t,e))})),r;if(n.Set&&t instanceof n.Set)return r=new h,e.set(t,r),t.forEach((function(t){r.add(s(t,e))})),r;if(n.Blob&&t instanceof n.Blob)return t.slice(0,t.size,t.type);if(n.Buffer&&n.Buffer.isBuffer(t))return r=n.Buffer.allocUnsafe?n.Buffer.allocUnsafe(t.length):new h(t.length),e.set(t,r),t.copy(r),r;if(n.ArrayBuffer){if(n.ArrayBuffer.isView(t))return r=new h(t.buffer.slice(0)),e.set(t,r),r;if(t instanceof n.ArrayBuffer)return r=t.slice(0),e.set(t,r),r}return"function"==typeof t.then||t instanceof Error||n.WeakMap&&t instanceof n.WeakMap||n.WeakSet&&t instanceof n.WeakSet?t:o(t,n,s,e)};return s(t,Hi())}Vi.default=Vi,Vi.strict=function(t,e){return Vi(t,{isStrict:!0,realm:e?e.realm:void 0})};const Fi=new Set(["alarm_control_panel","alert","automation","binary_sensor","calendar","camera","climate","cover","device_tracker","fan","group","humidifier","input_boolean","light","lock","media_player","person","plant","remote","schedule","script","siren","sun","switch","timer","update","vacuum"]),Ui=(t,e,i)=>{if((void 0!==e?e:null==t?void 0:t.state)===se)return"var(--state-unavailable-color)";const n=Wi(t,e,i);return n?we(n):void 0},Bi=(t,e,i,n)=>{const o=void 0!==i?i:e.state,s=$e(e,i),r=[],a=function(t,e="_"){const i="àáäâãåăæąçćčđďèéěėëêęğǵḧìíïîįłḿǹńňñòóöôœøṕŕřßşśšșťțùúüûǘůűūųẃẍÿýźžż·/_,:;",n=`aaaaaaaaacccddeeeeeeegghiiiiilmnnnnooooooprrsssssttuuuuuuuuuwxyyzzz${e}${e}${e}${e}${e}${e}`,o=new RegExp(i.split("").join("|"),"g");return t.toString().toLowerCase().replace(/\s+/g,e).replace(o,(t=>n.charAt(i.indexOf(t)))).replace(/&/g,`${e}and${e}`).replace(/[^\w-]+/g,"").replace(/-/g,e).replace(new RegExp(`(${e})\\1+`,"g"),"$1").replace(new RegExp(`^${e}+`),"").replace(new RegExp(`${e}+$`),"")}(o,"_"),l=s?"active":"inactive";if(n&&ue.includes(n)&&"inactive"==l)return de;const c=e.attributes.device_class;return c&&r.push(`--state-${t}-${c}-${a}-color`),r.push(`--state-${t}-${a}-color`,`--state-${t}-${l}-color`,`--state-${l}-color`),r},Wi=(t,e,i)=>{const n=void 0!==e?e:null==t?void 0:t.state,o=me(t.entity_id),s=t.attributes.device_class;if("sensor"===o&&"battery"===s){const t=(t=>{const e=Number(t);if(!isNaN(e))return e>=70?"--state-sensor-battery-high-color":e>=30?"--state-sensor-battery-medium-color":"--state-sensor-battery-low-color"})(n);if(t)return[t]}if("group"===o){const n=(t=>{const e=t.attributes.entity_id||[],i=[...new Set(e.map((t=>me(t))))];return 1===i.length?i[0]:void 0})(t);if(n&&Fi.has(n))return Bi(n,t,e,i)}return Fi.has(o)?Bi(o,t,e,i):i&&ue.includes(i)?de:void 0},qi=Object.create(null),Zi=36e5,Gi=24*Zi,Yi=365.25*Gi;qi.year=qi.yr=qi.y=Yi,qi.month=qi.mo=qi.mth=Yi/12,qi.week=qi.wk=qi.w=7*Gi,qi.day=qi.d=Gi,qi.hour=qi.hr=qi.h=Zi,qi.minute=qi.min=qi.m=6e4,qi.second=qi.sec=qi.s=1e3,qi.millisecond=qi.millisec=qi.ms=1,qi.microsecond=qi.microsec=qi.us=qi.µs=.001,qi.nanosecond=qi.nanosec=qi.ns=1e-6,qi.group=",",qi.decimal=".",qi.placeholder=" _";const Ki=/((?:\d{1,16}(?:\.\d{1,16})?|\.\d{1,16})(?:[eE][-+]?\d{1,4})?)\s?([\p{L}]{0,14})/gu;function Ji(t="",e="ms"){let i,n=null;return String(t).replace(new RegExp(`(\\d)[${Ji.unit.placeholder}${Ji.unit.group}](\\d)`,"g"),"$1$2").replace(Ji.unit.decimal,".").replace(Ki,((t,o,s)=>{if(s)s=s.toLowerCase();else if(i){for(const e in Ji.unit)if(Ji.unit[e]<i){s=e;break}}else s=e;i=s=Ji.unit[s]||Ji.unit[s.replace(/s$/,"")],s&&(n=(n||0)+o*s)})),n&&n/(Ji.unit[e]||1)*("-"===t[0]?-1:1)}Ji.unit=qi;const Qi=Object.create(qi);Qi.jahr=Qi.j=qi.y,Qi.monat=qi.mo,Qi.woche=qi.w,Qi.tag=Qi.t=qi.d,Qi.stunde=qi.h,Qi.minute=qi.m,Qi.sekunde=qi.s,Qi.millisekunde=qi.ms,Qi.mikrosekunde=qi.us,Qi.nanosekunde=qi.ns,Qi.group=".",Qi.decimal=",";const Xi=Object.create(qi);Xi.año=Xi.a=qi.y,Xi.mes=qi.mo,Xi.semana=qi.w,Xi.día=qi.d,Xi.hora=qi.h,Xi.minuto=qi.m,Xi.segundo=qi.s,Xi.milisegundo=qi.ms,Xi.microsegundo=qi.us,Xi.nanosegundo=qi.ns,Xi.group=".",Xi.decimal=",";const tn=Object.create(qi);tn.année=tn.an=tn.a=qi.y,tn.mois=qi.mo,tn.semaine=tn.sem=qi.w,tn.jour=tn.j=qi.d,tn.heure=qi.h,tn.minute=qi.m,tn.seconde=qi.s,tn.milliseconde=qi.ms,tn.microseconde=qi.us,tn.nanoseconde=qi.ns,tn.group=" ",tn.decimal=",";const en=Object.create(qi);en.年=en.年間=qi.y,en.月=en.ヶ月=qi.mo,en.週=en.週間=qi.w,en.日=qi.d,en.時間=en.時=qi.h,en.分=en.分間=qi.m,en.秒=en.秒間=qi.s,en.ミリ秒=qi.ms,en.マイクロ秒=qi.us,en.ナノ秒=qi.ns,en.group=",",en.decimal=".";const nn=Object.create(qi);nn.ano=nn.a=qi.y,nn.mês=nn.mes=qi.mo,nn.semana=nn.sem=qi.w,nn.dia=qi.d,nn.hora=qi.h,nn.minuto=qi.m,nn.segundo=nn.seg=qi.s,nn.milissegundo=qi.ms,nn.microssegundo=qi.us,nn.nanossegundo=qi.ns,nn.group=".",nn.decimal=",";const on=Object.create(qi);on.год=on.г=qi.y,on.месяц=on.мес=qi.mo,on.неделя=on.нед=qi.w,on.день=on.д=qi.d,on.час=on.ч=qi.h,on.минута=on.мин=qi.m,on.секунда=on.сек=qi.s,on.миллисекунда=on.мс=qi.ms,on.микросекунда=on.мкс=qi.us,on.наносекунда=on.нс=qi.ns,on.group=" ",on.decimal=",";const sn=Object.create(qi);sn.年=qi.y,sn.月=qi.mo,sn.周=sn.星期=qi.w,sn.天=sn.日=qi.d,sn.小时=sn.时=qi.h,sn.分钟=sn.分=qi.m,sn.秒=sn.秒钟=qi.s,sn.毫秒=qi.ms,sn.微秒=qi.us,sn.纳秒=qi.ns,sn.group=",",sn.decimal=".";const rn={de:Qi,en:qi,es:Xi,fr:tn,ja:en,pt:nn,ru:on,zh:sn},an=(t,e,i)=>{(i=(i=i.toLocaleLowerCase()).startsWith("en")?"en":i)&&i in rn?Ji.unit=rn[i]:console.warn(`button-card: parseDuration does not support locale '${i}'`);const n=Ji(t,e);return null!=n?n:void 0};let ln=window.cardHelpers;const cn=new Promise((async t=>{ln&&t(),window.loadCardHelpers&&(ln=await window.loadCardHelpers(),window.cardHelpers=ln,t())}));console.info("%c BUTTON-CARD %c v5.0.2 ","color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray"),window.customCards=window.customCards||[],window.customCards.push({type:"button-card",name:"Button-Card",preview:!1,description:"A massively customizable custom button card"});let hn=class extends nt{constructor(){super(...arguments),this.preview=!1,this._cards={},this._cardsConfig={},this._entities=[],this._initialSetupComplete=!1,this._cardClickable=!1,this._iconClickable=!1,this._hasIconActions=!1,this._cardMomentary=!1,this._iconMomentary=!1,this._cardRipple=!1}get _doIHaveEverything(){return!!this._hass&&!!this._config&&this.isConnected}static getStubConfig(t,e,i){const n=Te(t,1,e,i,["light","switch"]);return ye()?{entity:n[0]||"",section_mode:!0,grid_options:{rows:2,columns:6}}:{entity:n[0]||"",section_mode:!1}}set hass(t){this._hass=t,Object.keys(this._cards).forEach((t=>{this._cards[t].hass=this._hass})),this._initialSetupComplete||this._finishSetup()}disconnectedCallback(){super.disconnectedCallback(),this._clearInterval(),this._updateTimerCancel()}connectedCallback(){super.connectedCallback(),this._initialSetupComplete?(this._updateTimerStart(),this._startTimerCountdown()):this._finishSetup()}_evaluateVariablesSkipError(t){var e;if(this._evaledVariables={},null===(e=this._config)||void 0===e?void 0:e.variables){Object.keys(this._config.variables).sort().forEach((e=>{try{this._evaledVariables[e]=this._objectEvalTemplate(t,this._config.variables[e])}catch(Tt){}}))}}_finishSetup(){if(!this._initialSetupComplete&&this._doIHaveEverything){if(this._evaluateVariablesSkipError(),this._config.entity){const t=this._getTemplateOrValue(void 0,this._config.entity);this._config.entity=t,this._stateObj=this._hass.states[t]}if(this._evaluateVariablesSkipError(this._stateObj),this._isActionDoingSomething(this._stateObj,this._config.press_action)||this._isActionDoingSomething(this._stateObj,this._config.release_action)?this._config=Object.assign({tap_action:{action:"none"}},this._config):this._config.entity&&le.has(me(this._config.entity))?this._config=Object.assign({tap_action:{action:"toggle"}},this._config):this._config.entity&&ce.has(me(this._config.entity))?this._config=Object.assign({tap_action:{action:"call-service",service:"input_button.press",target:{entity_id:this._config.entity}}},this._config):this._config.entity?this._config=Object.assign({tap_action:{action:"more-info"}},this._config):this._config=Object.assign({tap_action:{action:"none"}},this._config),(this._isActionDoingSomething(this._stateObj,this._config.press_action)||this._isActionDoingSomething(this._stateObj,this._config.release_action))&&(this._isActionDoingSomething(this._stateObj,this._config.tap_action)||this._isActionDoingSomething(this._stateObj,this._config.hold_action)||this._isActionDoingSomething(this._stateObj,this._config.double_tap_action)))throw new Error('button-card: If you use press_action or release_action, then tap_action, hold_action and double_tap_action must be "none" or not set at all.');if((this._isActionDoingSomething(this._stateObj,this._config.icon_press_action)||this._isActionDoingSomething(this._stateObj,this._config.icon_release_action))&&(this._isActionDoingSomething(this._stateObj,this._config.icon_tap_action)||this._isActionDoingSomething(this._stateObj,this._config.icon_hold_action)||this._isActionDoingSomething(this._stateObj,this._config.icon_double_tap_action)))throw new Error('button-card: If you use icon_press_action or icon_release_action, then icon_tap_action, icon_hold_action and icon_double_tap_action must be "none" or not set at all.');const t=JSON.stringify(this._config);if(this._entities=[],Array.isArray(this._config.triggers_update))this._config.triggers_update.forEach((t=>{try{const e=this._getTemplateOrValue(this._stateObj,t);null==e||this._entities.includes(e)||this._entities.push(e)}catch(Tt){}}));else if("string"==typeof this._config.triggers_update){const t=this._getTemplateOrValue(this._stateObj,this._config.triggers_update);t&&"all"!==t?this._entities.push(t):this._config.triggers_update=t}if("all"!==this._config.triggers_update){const e=new RegExp(/states\[\s*('|\\")([a-zA-Z0-9_]+\.[a-zA-Z0-9_]+)\1\s*\]/,"gm"),i=new RegExp(/states\[\s*('|\\")([a-zA-Z0-9_]+\.[a-zA-Z0-9_]+)\1\s*\]/,"m"),n=t.match(e);null==n||n.forEach((t=>{const e=t.match(i);e&&!this._entities.includes(e[2])&&this._entities.push(e[2])}))}this._config.entity&&!this._entities.includes(this._config.entity)&&this._entities.push(this._config.entity),this._expandTriggerGroups();const e=new RegExp("(?:[^\\[]|^)\\[{3}[^\\[].*[^\\]]\\]{3}(?:[^\\]]|$)","s");this._triggersAll=!("all"!==this._config.triggers_update||!t.match(e)),this._startTimerCountdown(),this._updateTimerStart(),this._initialSetupComplete=!0}}_startTimerCountdown(){if(this._config&&this._config.entity&&"timer"===me(this._config.entity)){const t=this._hass.states[this._config.entity];this._startInterval(t)}}_createCard(t){if(ln)return ln.createCardElement(t);{const e=((t,e=!1)=>{const i=(t,e)=>n("hui-error-card",{type:"error",error:t,config:e}),n=(t,e)=>{const n=window.document.createElement(t);try{if(!n.setConfig)return;n.setConfig(e)}catch(o){return console.error(t,o),i(o.message,e)}return n};if(!t||"object"!=typeof t||!e&&!t.type)return i("No type defined",t);let o=t.type;if(o&&o.startsWith("custom:"))o=o.substr(7);else if(e)if(xe.has(o))o=`hui-${o}-row`;else{if(!t.entity)return i("Invalid config given.",t);const e=t.entity.split(".",1)[0];o=`hui-${je[e]||"text"}-entity-row`}else o=`hui-${o}-card`;if(customElements.get(o))return n(o,t);const s=i(`Custom element doesn't exist: ${t.type}.`,t);s.style.display="None";const r=setTimeout((()=>{s.style.display=""}),2e3);return customElements.whenDefined(t.type).then((()=>{clearTimeout(r),Et(s,"ll-rebuild",{},s)})),s})(t);return cn.then((()=>{Et(e,"ll-rebuild",{})})),e}}static get styles(){return Ee}render(){var t;if(!this._config||!this._hass)return R``;this._stateObj=this._config.entity?this._hass.states[this._config.entity]:void 0;try{if(this._evaledVariables={},null===(t=this._config)||void 0===t?void 0:t.variables){Object.keys(this._config.variables).sort().forEach((t=>{this._evaledVariables[t]=this._objectEvalTemplate(this._stateObj,this._config.variables[t])}))}return this._cardHtml()}catch(Tt){Tt.stack?console.error(Tt.stack):console.error(Tt);const e=document.createElement("hui-error-card");return e.preview=this.preview,e.setConfig({type:"error",error:Tt.name,message:Tt.message}),R` ${e} `}}shouldUpdate(t){var e;if("update_timer"===(null===(e=this._config)||void 0===e?void 0:e.triggers_update))return!!t.has("_updateTimerMS")||this._updateTimerChanged();return!!(this._triggersAll||t.has("_timeRemaining")||t.has("_updateTimerMS"))||function(t,e){if(e.has("_config"))return!0;const i=e.get("_hass");if(i)return t._entities.some((function(e){return(null==i?void 0:i.states[e])!==t._hass.states[e]}));return!1}(this,t)?(this._expandTriggerGroups(),!0):!!t.has("preview")}willUpdate(t){t.has("preview")&&Object.keys(this._cards).forEach((t=>{this._cards[t].preview=this.preview}))}updated(t){if(super.updated(t),this._config&&this._config.entity&&"timer"===me(this._config.entity)&&t.has("_hass")){const e=this._hass.states[this._config.entity],i=t.get("_hass");(i?i.states[this._config.entity]:void 0)!==e?this._startInterval(e):e||this._clearInterval()}this._updateTimer()}_clearInterval(){this._interval&&(window.clearInterval(this._interval),this._interval=void 0)}_startInterval(t){this._clearInterval(),this._calculateRemaining(t),"active"===t.state&&(this._interval=window.setInterval((()=>this._calculateRemaining(t)),1e3))}_calculateRemaining(t){t.attributes.remaining&&(this._timeRemaining=(t=>{if(!t.attributes.remaining)return;let e=Ae(t.attributes.remaining);if("active"===t.state){const i=(new Date).getTime(),n=new Date(t.last_changed).getTime();e=Math.max(e-(i-n)/1e3,0)}return e})(t))}_computeTimeDisplay(t){if(t)return function(t){const e=Math.floor(t/3600),i=Math.floor(t%3600/60),n=Math.floor(t%3600%60);return e>0?`${e}:${Oe(i)}:${Oe(n)}`:i>0?`${i}:${Oe(n)}`:n>0?""+n:null}(this._timeRemaining||Ae(t.attributes.duration))}_getMatchingConfigState(t){if(!this._config.state)return;const e=this._config.state.find((t=>"template"===t.operator));if(!t&&!e)return;let i;const n=this._config.state.find((e=>{if(!e.operator)return t&&this._getTemplateOrValue(t,e.value)==t.state;switch(e.operator){case"==":return t&&t.state==this._getTemplateOrValue(t,e.value);case"<=":return t&&t.state<=this._getTemplateOrValue(t,e.value);case"<":return t&&t.state<this._getTemplateOrValue(t,e.value);case">=":return t&&t.state>=this._getTemplateOrValue(t,e.value);case">":return t&&t.state>this._getTemplateOrValue(t,e.value);case"!=":return t&&t.state!=this._getTemplateOrValue(t,e.value);case"regex":return!(!t||!t.state.match(this._getTemplateOrValue(t,e.value)));case"template":return this._getTemplateOrValue(t,e.value);case"default":return i=e,!1;default:return!1}}));return!n&&i?i:n}_localize(t,e,i,n=!0,o){var s;return yi(this._hass.localize,t,this._hass.locale,this._hass.config,this._hass.entities,{numeric_precision:"card"===i?null===(s=this._config)||void 0===s?void 0:s.numeric_precision:i,show_units:n,units:o},e)}_relativeTime(t,e=!1){return t?R`
        <ha-relative-time
          id="relative-time"
          class="ellipsis"
          .hass="${this._hass}"
          .datetime="${t}"
          .capitalize="${e}"
        ></ha-relative-time>
      `:""}_getTemplateHelpers(){return{localize:this._localize.bind(this),formatDateTime:t=>pi(new Date(t),this._hass.locale,this._hass.config),formatShortDateTimeWithYear:t=>{return e=new Date(t),i=this._hass.locale,n=this._hass.config,_i(i,n.time_zone).format(e);var e,i,n},formatShortDateTime:t=>{return e=new Date(t),i=this._hass.locale,n=this._hass.config,fi(i,n.time_zone).format(e);var e,i,n},formatDateTimeWithSeconds:t=>{return e=new Date(t),i=this._hass.locale,n=this._hass.config,gi(i,n.time_zone).format(e);var e,i,n},formatDateTimeNumeric:t=>{return e=new Date(t),i=this._hass.locale,n=this._hass.config,`${Xe(e,i,n)}, ${li(e,i,n)}`;var e,i,n},relativeTime:this._relativeTime.bind(this),formatTime:t=>li(new Date(t),this._hass.locale,this._hass.config),formatTimeWithSeconds:t=>{return e=new Date(t),i=this._hass.locale,n=this._hass.config,hi(i,n.time_zone).format(e);var e,i,n},formatTimeWeekday:t=>{return e=new Date(t),i=this._hass.locale,n=this._hass.config,ui(i,n.time_zone).format(e);var e,i,n},formatTime24h:t=>{return e=new Date(t),i=this._hass.locale,n=this._hass.config,di(i,n.time_zone).format(e);var e,i,n},formatDateWeekdayDay:t=>{return e=new Date(t),i=this._hass.locale,n=this._hass.config,Ke(i,n.time_zone).format(e);var e,i,n},formatDate:t=>Je(new Date(t),this._hass.locale,this._hass.config),formatDateNumeric:t=>Xe(new Date(t),this._hass.locale,this._hass.config),formatDateShort:t=>{return e=new Date(t),i=this._hass.locale,n=this._hass.config,ei(i,n.time_zone).format(e);var e,i,n},formatDateMonthYear:t=>{return e=new Date(t),i=this._hass.locale,n=this._hass.config,ii(i,n.time_zone).format(e);var e,i,n},formatDateMonth:t=>{return e=new Date(t),i=this._hass.locale,n=this._hass.config,ni(i,n.time_zone).format(e);var e,i,n},formatDateYear:t=>{return e=new Date(t),i=this._hass.locale,n=this._hass.config,oi(i,n.time_zone).format(e);var e,i,n},formatDateWeekday:t=>{return e=new Date(t),i=this._hass.locale,n=this._hass.config,si(i,n.time_zone).format(e);var e,i,n},formatDateWeekdayShort:t=>{return e=new Date(t),i=this._hass.locale,n=this._hass.config,ri(i,n.time_zone).format(e);var e,i,n},parseDuration:(t,e,i)=>{var n;return void 0===e&&(e="ms"),void 0===i&&(i=null===(n=this._hass.locale)||void 0===n?void 0:n.language),an(t,e,i)}}}_evalTemplate(t,e){try{return new Function("states","entity","user","hass","variables","html","helpers",`'use strict'; ${e}`).call(this,this._hass.states,t,this._hass.user,this._hass,this._evaledVariables,R,this._getTemplateHelpers())}catch(Tt){const i=e.length<=100?e.trim():`${e.trim().substring(0,98)}...`;throw Tt.message=`${Tt.name}: ${Tt.message} in '${i}'`,Tt.name="ButtonCardJSTemplateError",Tt}}_objectEvalTemplate(t,e){const i=Vi(e);return this._getTemplateOrValue(t,i)}_getTemplateOrValue(t,e){if(["number","boolean"].includes(typeof e))return e;if(!e)return e;if("object"==typeof e)return Object.keys(e).forEach((i=>{e[i]=this._getTemplateOrValue(t,e[i])})),e;const i=e.trim(),n=new RegExp("(\\[{3,})(.*?)(\\]{3,})","s"),o=i.match(n);return o&&4===o.length?3===o[1].length&&3===o[3].length?this._evalTemplate(t,o[2]):o[1].length===o[3].length?i.slice(1,-1):e:e}_getColorForLightEntity(t,e,i){let n=pe;return ue.includes(n)&&(n=we(de)),t&&($e(t)?(n=t.attributes.rgb_color?`rgb(${t.attributes.rgb_color.join(",")})`:e&&t.attributes.color_temp&&t.attributes.min_mireds&&t.attributes.max_mireds?function(t,e,i){const n=new ee("rgb(255, 160, 0)"),o=new ee("rgb(166, 209, 255)"),s=new ee("white"),r=(t-e)/(i-e)*100;return r<50?ie(o).mix(s,2*r).toRgbString():ie(s).mix(n,2*(r-50)).toRgbString()}(t.attributes.color_temp,t.attributes.min_mireds,t.attributes.max_mireds):Ui(t,t.state,i)||pe,t.attributes.brightness&&(n=function(t,e,i){const n=new ee(_e(t,e));if(n.isValid){const t=n.mix("black",100-i).toString();if(t)return t}return e}(this,n,(t.attributes.brightness+245)/5))):n=Ui(t,t.state,i)||pe),n}_buildCssColorAttribute(t,e){var i,n;let o,s="";return(null==e?void 0:e.color)?s=e.color:this._config.color&&(s=this._config.color),he.includes(s)&&(!t||t&&"light"!==me(t.entity_id))&&(s=""),o=he.includes(s)?this._getColorForLightEntity(t,"auto-no-temperature"!==s,null===(i=this._config)||void 0===i?void 0:i.color_type):s||(t&&Ui(t,t.state,null===(n=this._config)||void 0===n?void 0:n.color_type)||pe),o}_buildIcon(t,e){if(!this._config.show_icon)return;let i;if(null==e?void 0:e.icon)i=e.icon;else{if(!this._config.icon)return;i=this._config.icon}return this._getTemplateOrValue(t,i)}_buildEntityPicture(t,e){if(!this._config.show_entity_picture||!t&&!e&&!this._config.entity_picture)return;let i;(null==e?void 0:e.entity_picture)?i=e.entity_picture:this._config.entity_picture?i=this._config.entity_picture:t&&(i=t.attributes&&t.attributes.entity_picture?t.attributes.entity_picture:void 0);const n=this._getTemplateOrValue(t,i);return n&&ke(n)?Se(this._hass,n).then((t=>t.url)).catch((()=>"")):n}_buildStyleGeneric(t,e,i){var n,o;let s={};if((null===(n=this._config.styles)||void 0===n?void 0:n[i])&&(s=Object.assign(s,...this._config.styles[i])),null===(o=null==e?void 0:e.styles)||void 0===o?void 0:o[i]){let t={};t=Object.assign(t,...e.styles[i]),s=Object.assign(Object.assign({},s),t)}return Object.keys(s).forEach((e=>{s[e]=this._getTemplateOrValue(t,s[e])})),s}_buildCustomStyleGeneric(t,e,i){var n,o,s,r;let a={};if((null===(o=null===(n=this._config.styles)||void 0===n?void 0:n.custom_fields)||void 0===o?void 0:o[i])&&(a=Object.assign(a,...this._config.styles.custom_fields[i])),null===(r=null===(s=null==e?void 0:e.styles)||void 0===s?void 0:s.custom_fields)||void 0===r?void 0:r[i]){let t={};t=Object.assign(t,...e.styles.custom_fields[i]),a=Object.assign(Object.assign({},a),t)}return Object.keys(a).forEach((e=>{a[e]=this._getTemplateOrValue(t,a[e])})),a}_buildName(t,e){if(!1===this._config.show_name)return;let i;var n;return(null==e?void 0:e.name)?i=e.name:this._config.name?i=this._config.name:t&&(i=t.attributes&&t.attributes.friendly_name?t.attributes.friendly_name:(n=t.entity_id).substr(n.indexOf(".")+1)),this._getTemplateOrValue(t,i)}_buildStateString(t){let e;return this._config.show_state&&t&&t.state&&("timer"===me(t.entity_id)?"idle"===t.state||0===this._timeRemaining?e=yi(this._hass.localize,t,this._hass.locale,this._hass.config,this._hass.entities,this._config):(e=this._computeTimeDisplay(t),"paused"===t.state&&(e+=` (${yi(this._hass.localize,t,this._hass.locale,this._hass.config,this._hass.entities,this._config)})`)):e=yi(this._hass.localize,t,this._hass.locale,this._hass.config,this._hass.entities,this._config)),e}_buildLastChanged(t,e){return this._config.show_last_changed&&t?R`
          <ha-relative-time
            id="label"
            class="ellipsis"
            .hass="${this._hass}"
            .datetime="${t.last_changed}"
            style=${St(e)}
          ></ha-relative-time>
        `:void 0}_buildLabel(t,e){if(!this._config.show_label)return;let i;return i=(null==e?void 0:e.label)?e.label:this._config.label,this._getTemplateOrValue(t,i)}_buildCustomFields(t,e){let i=R``;const n={},o={};return this._config.custom_fields&&Object.keys(this._config.custom_fields).forEach((e=>{const i=this._config.custom_fields[e];i.card?i.do_not_eval?o[e]=Vi(i.card):o[e]=this._objectEvalTemplate(t,i.card):n[e]=this._getTemplateOrValue(t,i)})),(null==e?void 0:e.custom_fields)&&Object.keys(e.custom_fields).forEach((i=>{const s=e.custom_fields[i];s.card?s.do_not_eval?o[i]=Vi(s.card):o[i]=this._objectEvalTemplate(t,s.card):n[i]=this._getTemplateOrValue(t,s)})),Object.keys(n).forEach((o=>{if(null!=n[o]){const s=Object.assign(Object.assign({},this._buildCustomStyleGeneric(t,e,o)),{"grid-area":o});i=R`
          ${i}
          <div id=${o} class="ellipsis" style=${St(s)}>${this._unsafeHTMLorNot(n[o])}</div>
        `}})),Object.keys(o).forEach((n=>{if(null!=o[n]){const s=Object.assign(Object.assign({},this._buildCustomStyleGeneric(t,e,n)),{"grid-area":n});let r;Ct(this._cardsConfig[n],o[n])?r=this._cards[n]:(r=this._createCard(o[n]),r.preview=this.preview,this._cards[n]=r,this._cardsConfig[n]=Vi(o[n])),r.hass=this._hass,i=R`
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
            style=${St(s)}
          >
            ${r}
          </div>
        `}})),i}_hasChildCards(t){return!!t&&Object.keys(t).some((e=>!!t[e].card))}_isActionDoingSomething(t,e){if(!e)return!1;if("string"==typeof e){const i=this._getTemplateOrValue(t,e);return!(!i||["none",null,void 0].includes(i.action))}if("object"==typeof e&&e.action){const i=this._getTemplateOrValue(t,e.action);return!["none",null,void 0].includes(i)}return!1}_computeIsClickable(t,e){const i=this._isActionDoingSomething(t,this._config.tap_action),n=this._isActionDoingSomething(t,this._config.hold_action),o=this._isActionDoingSomething(t,this._config.double_tap_action),s=this._isActionDoingSomething(t,this._config.press_action),r=this._isActionDoingSomething(t,this._config.release_action),a=this._isActionDoingSomething(t,this._config.icon_tap_action),l=this._isActionDoingSomething(t,this._config.icon_hold_action),c=this._isActionDoingSomething(t,this._config.icon_double_tap_action),h=this._isActionDoingSomething(t,this._config.icon_press_action),u=this._isActionDoingSomething(t,this._config.icon_release_action),d=this._hasChildCards(this._config.custom_fields)||!(!e||!this._hasChildCards(e.custom_fields)),p=i||n||o||s||r;this._cardClickable=p||d,this._hasIconActions=a||l||c||h||u,this._iconClickable=this._cardClickable||this._hasIconActions,this._cardRipple=p||this._hasIconActions,this._cardMomentary=s||r,this._iconMomentary=h||u}_rotate(t){return!!(null==t?void 0:t.spin)}_blankCardColoredHtml(t){const e=Object.assign({background:"none","box-shadow":"none","border-style":"none"},t);return R`
      <ha-card class="disabled" style=${St(e)}>
        <div></div>
      </ha-card>
    `}_cardHtml(){var t,e,i,n,o,s,r;const a=this._getMatchingConfigState(this._stateObj);this._computeIsClickable(this._stateObj,a);let l="var(--state-inactive-color)";const c=this._config.tooltip?this._getTemplateOrValue(this._stateObj,this._config.tooltip):void 0;l=(null==a?void 0:a.color)&&!he.includes(a.color)?a.color:(null===(t=this._config)||void 0===t?void 0:t.color)&&!he.includes(this._config.color)?this._stateObj?$e(this._stateObj)?(null===(e=this._config)||void 0===e?void 0:e.color)||l:Ui(this._stateObj,this._stateObj.state,null===(i=this._config)||void 0===i?void 0:i.color_type)||pe:this._config.color:this._buildCssColorAttribute(this._stateObj,a);let h=l,u={},d={};const p={},m=this._buildStyleGeneric(this._stateObj,a,"lock"),_=this._buildStyleGeneric(this._stateObj,a,"card"),f=this._buildStyleGeneric(this._stateObj,a,"tooltip"),g={"button-card-main":!0,disabled:!this._cardClickable,section:!!(null===(n=this._config)||void 0===n?void 0:n.section_mode)};switch((null===(o=this._config)||void 0===o?void 0:o.section_mode)&&this.classList.add("section"),(null===(s=this._config)||void 0===s?void 0:s.tooltip)&&this.classList.add("tooltip"),_.width&&(this.style.setProperty("flex","0 0 auto"),this.style.setProperty("max-width","fit-content")),this._config.color_type){case"blank-card":return this._blankCardColoredHtml(_);case"card":case"label-card":{const t=function(t,e){const i=new ee(_e(t,e)).getLuminance(),n=new ee({r:225,g:225,b:225}),o=n.getLuminance(),s=new ee({r:28,g:28,b:28}),r=s.getLuminance();return 0===i||(Math.max(i,o)+.05)/Math.min(i,o+.05)>(Math.max(i,r)+.05)/Math.min(i,r+.05)?n.toRgbString():s.toRgbString()}(this,l);u.color=t,d.color=t,u["background-color"]=l,u=Object.assign(Object.assign({},u),_),h="inherit";break}default:u=_}this._config.aspect_ratio?(p["--aspect-ratio"]=this._config.aspect_ratio,u.position="absolute"):p.display="inline",this.style.setProperty("--button-card-light-color",this._getColorForLightEntity(this._stateObj,!0)),this.style.setProperty("--button-card-light-color-no-temperature",this._getColorForLightEntity(this._stateObj,!1)),this.style.setProperty("--button-card-ripple-color",h),d=Object.assign(Object.assign({},d),m);const v=this._config.extra_styles?R`
          <style>
            ${this._getTemplateOrValue(this._stateObj,this._config.extra_styles)}
          </style>
        `:R``,b=this._partialActionEval(this._config.hold_action);return R`
      ${v}
      <div id="aspect-ratio" style=${St(p)}>
        <ha-card
          id="card"
          class=${jt(g)}
          style=${St(u)}
          @action=${this._handleAction}
          .actionHandler=${It({hasDoubleClick:this._isActionDoingSomething(this._stateObj,this._config.double_tap_action),hasHold:this._isActionDoingSomething(this._stateObj,this._config.hold_action),repeat:null==b?void 0:b.repeat,repeatLimit:null==b?void 0:b.repeat_limit,isMomentary:this._cardMomentary})}
          .config="${this._config}"
        >
          ${this._buttonContent(this._stateObj,a,h)}
          <ha-ripple .disabled=${!this._cardRipple}></ha-ripple>
        </ha-card>
        ${this._getLock(d)}
      </div>
      ${(null===(r=this._config)||void 0===r?void 0:r.tooltip)?R`
            <span class="tooltiptext" style=${St(f)}>
              ${this._unsafeHTMLorNot(c)}
            </span>
          `:""}
    `}_getLock(t){return this._config.lock&&this._getTemplateOrValue(this._stateObj,this._config.lock.enabled)?R`
        <div
          id="overlay"
          style=${St(t)}
          @action=${this._handleUnlockType}
          .actionHandler=${It({hasDoubleClick:"double_tap"===this._config.lock.unlock,hasHold:"hold"===this._config.lock.unlock})}
          .config="${this._config}"
        >
          <ha-icon id="lock" icon=${this._config.lock.lock_icon}></ha-icon>
        </div>
      `:R``}_buttonContent(t,e,i){const n=this._buildName(t,e),o=(null==e?void 0:e.state_display)||this._config.state_display||void 0,s=this._config.show_state&&o?this._getTemplateOrValue(t,o):void 0,r=void 0!==s?s:this._buildStateString(t),a=function(t,e){if(!t&&!e)return;let i;return i=e?t?`${t}: ${e}`:e:t,i}(n,r);switch(this._config.layout){case"icon_name_state":case"name_state":return this._gridHtml(t,e,this._config.layout,i,a,void 0);default:return this._gridHtml(t,e,this._config.layout,i,n,r)}}_unsafeHTMLorNot(t){return t.strings||t.values?t:xt(`${t}`)}_gridHtml(t,e,i,n,o,s){const r=this._getIconHtml(t,e,n),a=[i],l=this._buildLabel(t,e),c=this._buildStyleGeneric(t,e,"name"),h=this._buildStyleGeneric(t,e,"state"),u=this._buildStyleGeneric(t,e,"label"),d=this._buildLastChanged(t,u),p=this._buildStyleGeneric(t,e,"grid");return r||a.push("no-icon"),o||a.push("no-name"),s||a.push("no-state"),l||d||a.push("no-label"),R`
      <div id="container" class=${a.join(" ")} style=${St(p)}>
        ${r||""}
        ${o?R`
              <div id="name" class="ellipsis" style=${St(c)}>
                ${this._unsafeHTMLorNot(o)}
              </div>
            `:""}
        ${s?R`
              <div id="state" class="ellipsis" style=${St(h)}>
                ${this._unsafeHTMLorNot(s)}
              </div>
            `:""}
        ${l&&!d?R`
              <div id="label" class="ellipsis" style=${St(u)}>
                ${this._unsafeHTMLorNot(l)}
              </div>
            `:""}
        ${d||""} ${this._buildCustomFields(t,e)}
      </div>
    `}_getIconHtml(t,e,i){const n=this._buildIcon(t,e),o=this._buildEntityPicture(t,e),s=this._buildStyleGeneric(t,e,"entity_picture"),r=this._buildStyleGeneric(t,e,"icon"),a=this._buildStyleGeneric(t,e,"img_cell"),l=this._buildStyleGeneric(t,e,"card"),c=Object.assign({color:i,width:this._config.size,"--ha-icon-display":l.height?"inline":void 0,position:this._config.aspect_ratio||l.height?"absolute":"relative"},r),h=Object.assign(Object.assign({},c),s),u={enabled:this._iconClickable},d=this._buildLiveStream(h),p=this._config.show_icon&&(n||t);if(p||o){let i;t&&(i=me(t.entity_id));const s=this._partialActionEval(this._config.icon_hold_action);return R`
        <div id="img-cell" style=${St(a)}>
          ${!p||o||d?"":R`
                <ha-state-icon
                  class=${jt(u)}
                  .state=${t}
                  .stateObj=${t}
                  .hass=${this._hass}
                  ?data-domain=${i}
                  data-state=${(t=>null!=t?t:z)(null==t?void 0:t.state)}
                  style=${St(c)}
                  .icon="${n}"
                  id="icon"
                  ?rotating=${this._rotate(e)}
                  @action=${this._hasIconActions?this._handleIconAction:void 0}
                  @pointerenter=${this._hasIconActions?this._handleRippleIcon:void 0}
                  @pointerleave=${this._hasIconActions?this._handleRippleIcon:void 0}
                  @click=${this._hasIconActions?this._sendToParent:void 0}
                  @touchstart=${this._hasIconActions?this._sendToParent:void 0}
                  @mousedown=${this._hasIconActions?this._sendToParent:void 0}
                  @mouseup=${this._hasIconActions?this._sendToParent:void 0}
                  @touchend=${this._hasIconActions?this._sendToParent:void 0}
                  @touchcancel=${this._hasIconActions?this._sendToParent:void 0}
                  .actionHandler=${this._hasIconActions?It({hasDoubleClick:this._isActionDoingSomething(t,this._config.icon_double_tap_action),hasHold:this._isActionDoingSomething(t,this._config.icon_hold_action),repeat:null==s?void 0:s.repeat,repeatLimit:null==s?void 0:s.repeat_limit,isMomentary:this._iconMomentary}):void 0}
                ></ha-state-icon>
              `}
          ${d||""}
          ${o&&!d?R`
                <img
                  class=${jt(u)}
                  src=${At(o)}
                  style=${St(h)}
                  id="icon"
                  ?rotating=${this._rotate(e)}
                  draggable="false"
                  @action=${this._hasIconActions?this._handleIconAction:void 0}
                  @pointerenter=${this._hasIconActions?this._handleRippleIcon:void 0}
                  @pointerleave=${this._hasIconActions?this._handleRippleIcon:void 0}
                  @click=${this._hasIconActions?this._sendToParent:void 0}
                  @touchstart=${this._hasIconActions?this._sendToParent:void 0}
                  @mousedown=${this._hasIconActions?this._sendToParent:void 0}
                  @mouseup=${this._hasIconActions?this._sendToParent:void 0}
                  @touchend=${this._hasIconActions?this._sendToParent:void 0}
                  @touchcancel=${this._hasIconActions?this._sendToParent:void 0}
                  .actionHandler=${this._hasIconActions?It({hasDoubleClick:this._isActionDoingSomething(t,this._config.icon_double_tap_action),hasHold:this._isActionDoingSomething(t,this._config.icon_hold_action),repeat:null==s?void 0:s.repeat,repeatLimit:null==s?void 0:s.repeat_limit,isMomentary:this._iconMomentary}):void 0}
                />
              `:""}
        </div>
      `}}_buildLiveStream(t){return this._config.show_live_stream&&this._config.entity&&"camera"===me(this._config.entity)?R`
        <hui-image
          .hass=${this._hass}
          .cameraImage=${this._config.entity}
          .entity=${this._config.entity}
          .cameraView=${"live"}
          .aspectRatio=${this._config.live_stream_aspect_ratio}
          .fitMode=${this._config.live_stream_fit_mode}
          style=${St(t)}
        ></hui-image>
      `:void 0}_configFromLLTemplates(t,e){const i=e.template;if(!i)return e;let n,o={};const s=i&&Array.isArray(i)?i:[i];return null==s||s.forEach((e=>{var i;if(!(null===(i=t.config.button_card_templates)||void 0===i?void 0:i[e]))throw new Error(`Button-card template '${e}' is missing!`);const s=this._configFromLLTemplates(t,t.config.button_card_templates[e]);o=fe(o,s),n=ge(n,s.state)})),o=fe(o,e),o.state=ge(n,e.state),o}setConfig(t){if(!t)throw new Error("Invalid configuration");this._initialSetupComplete&&(this._initialSetupComplete=!1),this._cards={},this._cardsConfig={};const e=be()||ve();let i=Vi(t);i=this._configFromLLTemplates(e,i),this._config=Object.assign(Object.assign({type:"custom:button-card",group_expand:!1,hold_action:{action:"none"},double_tap_action:{action:"none"},press_action:{action:"none"},release_action:{action:"none"},icon_tap_action:{action:"none"},icon_hold_action:{action:"none"},icon_double_tap_action:{action:"none"},icon_press_action:{action:"none"},icon_release_action:{action:"none"},layout:"vertical",size:"40%",color_type:"icon",show_name:!0,show_state:!1,show_icon:!0,show_units:!0,show_label:!1,show_entity_picture:!1,show_live_stream:!1,card_size:3},i),{lock:Object.assign({enabled:!1,duration:5,unlock:"tap",lock_icon:"mdi:lock-outline",unlock_icon:"mdi:lock-open-outline"},i.lock)}),this._initialSetupComplete||this._finishSetup()}_loopGroup(t){t&&t.forEach((t=>{var e,i;(null===(e=this._hass)||void 0===e?void 0:e.states[t])&&((null===(i=this._hass.states[t].attributes)||void 0===i?void 0:i.entity_id)?this._loopGroup(this._hass.states[t].attributes.entity_id):this._entities.includes(t)||this._entities.push(t))}))}_expandTriggerGroups(){var t;this._hass&&(null===(t=this._config)||void 0===t?void 0:t.group_expand)&&this._entities&&this._entities.forEach((t=>{var e,i,n,o,s;(null===(n=null===(i=null===(e=this._hass)||void 0===e?void 0:e.states[t])||void 0===i?void 0:i.attributes)||void 0===n?void 0:n.entity_id)&&this._loopGroup(null===(s=null===(o=this._hass)||void 0===o?void 0:o.states[t].attributes)||void 0===s?void 0:s.entity_id)}))}_updateTimerStart(){this._updateTimerMS=Date.now(),this._updateTimer()}_updateTimerCancel(){this._updateTimeout&&window.clearTimeout(this._updateTimeout)}_updateTimerChanged(){var t;if(null===(t=this._config)||void 0===t?void 0:t.update_timer){const t=this._getTemplateOrValue(this._stateObj,this._config.update_timer),e=an(t,"ms","en");if(e&&e>=100&&e!==this._updateTimerDuration)return!0}return!1}_updateTimer(){var t;if(this._updateTimeout&&(window.clearTimeout(this._updateTimeout),this._updateTimeout=void 0),null===(t=this._config)||void 0===t?void 0:t.update_timer){const t=this._getTemplateOrValue(this._stateObj,this._config.update_timer),e=an(t,"ms","en");e&&e>=100&&(this._updateTimerDuration=e,this._updateTimeout=window.setTimeout((()=>{this._updateRefresh()}),e))}}_updateRefresh(){this._updateTimerMS=Date.now(),this._updateTimeout=void 0}getCardSize(){var t;return(null===(t=this._config)||void 0===t?void 0:t.card_size)||3}getGridOptions(){var t;if(null===(t=this._config)||void 0===t?void 0:t.section_mode)return{rows:2,columns:6,min_rows:1,min_columns:1}}_partialActionEval(t){if(!t)return{action:"none"};if("string"==typeof t)return this._objectEvalTemplate(this._stateObj,t);const e=Vi(t);return["action","repeat","repeat_limit"].forEach((t=>{e[t]=this._getTemplateOrValue(this._stateObj,e[t])})),e}_evalActions(t,e){var i,n,o,s,r,a,l,c,h,u,d,p,m,_,f,g,v,b,y;const $={};"string"==typeof t[e]?$[e]=this._objectEvalTemplate(this._stateObj,t[e]):$[e]=Vi(t[e]);const w=this._getTemplateOrValue(this._stateObj,null===(i=$[e])||void 0===i?void 0:i.action);if("none"===w||!w){const t={};return t[e]={action:"none"},t}const A=this._getTemplateOrValue(this._stateObj,null===(n=$[e])||void 0===n?void 0:n.repeat),O=this._getTemplateOrValue(this._stateObj,null===(o=$[e])||void 0===o?void 0:o.repeat_limit),k=this._getTemplateOrValue(this._stateObj,null===(s=$[e])||void 0===s?void 0:s.sound);let S=this._getTemplateOrValue(this._stateObj,null===(r=$[e])||void 0===r?void 0:r.confirmation);!S&&t.confirmation&&(S=this._objectEvalTemplate(this._stateObj,t.confirmation));const T=this._getTemplateOrValue(this._stateObj,null===(a=$[e])||void 0===a?void 0:a.haptic),x={};switch(w){case"javascript":x[e]={action:"javascript",javascript:$[e].javascript};break;case"toggle":x.entity=this._getTemplateOrValue(this._stateObj,null===(l=t[e])||void 0===l?void 0:l.entity)||this._getTemplateOrValue(this._stateObj,t.entity),x[e]={action:"toggle"};break;case"more-info":x.entity=this._getTemplateOrValue(this._stateObj,null===(c=t[e])||void 0===c?void 0:c.entity)||this._getTemplateOrValue(this._stateObj,t.entity),x[e]={action:"more-info"};break;case"navigate":x[e]={action:"navigate",navigation_path:this._getTemplateOrValue(this._stateObj,null===(h=$[e])||void 0===h?void 0:h.navigation_path),navigation_replace:this._getTemplateOrValue(this._stateObj,null===(u=$[e])||void 0===u?void 0:u.navigation_replace)};break;case"url":x[e]={action:"url",url_path:this._getTemplateOrValue(this._stateObj,null===(d=$[e])||void 0===d?void 0:d.url_path)};break;case"perform-action":case"call-service":x[e]={action:"perform-action",perform_action:this._getTemplateOrValue(this._stateObj,null===(p=$[e])||void 0===p?void 0:p.perform_action)||this._getTemplateOrValue(this._stateObj,null===(m=$[e])||void 0===m?void 0:m.service),data:this._objectEvalTemplate(this._stateObj,null===(_=$[e])||void 0===_?void 0:_.data)||this._objectEvalTemplate(this._stateObj,null===(f=$[e])||void 0===f?void 0:f.service_data),target:this._objectEvalTemplate(this._stateObj,null===(g=$[e])||void 0===g?void 0:g.target)},"entity"===(null===(v=x[e].data)||void 0===v?void 0:v.entity_id)&&(x[e].data.entity_id=this._getTemplateOrValue(this._stateObj,t.entity));break;case"assist":x[e]={action:"assist",pipeline_id:this._getTemplateOrValue(this._stateObj,null===(b=$[e])||void 0===b?void 0:b.pipeline_id),start_listening:this._getTemplateOrValue(this._stateObj,null===(y=$[e])||void 0===y?void 0:y.start_listening)};break;case"fire-dom-event":x[e]=Object.assign({action:"fire-dom-event"},this._objectEvalTemplate(this._stateObj,$[e]));break;default:return{[e]:{action:"none"}}}return x[e]=Object.assign(Object.assign({},x[e]),{repeat:A,repeat_limit:O,sound:k,haptic:T,confirmation:S}),x}_handleRippleIcon(t){this._ripple.then((e=>{var i,n;if(e)if("pointerenter"===t.type){const o=null!==(n=null===(i=t.target)||void 0===i?void 0:i.getBoundingClientRect())&&void 0!==n?n:null,s=e.getBoundingClientRect(),r={top:0,left:0,bottom:0,right:0},a=t.target?getComputedStyle(t.target):null,l=a?parseInt(a.getPropertyValue("--button-card-ripple-icon-inset-padding")):12;let c="";o&&s&&(r.top=o.top-s.top-l,r.top=r.top<0?0:r.top,r.left=o.left-s.left-l,r.left=r.left<0?0:r.left,r.bottom=s.bottom-o.bottom-l,r.bottom=r.bottom<0?0:r.bottom,r.right=s.right-o.right-l,r.right=r.right<0?0:r.right,c=`${r.top}px ${r.right}px ${r.bottom}px ${r.left}px`),e.setAttribute("icon",""),""!=c&&e.style.setProperty("--dynamic-ripple-icon-inset",c)}else"pointerleave"===t.type&&(e.removeAttribute("icon"),e.style.removeProperty("--dynamic-ripple-icon-inset"))}))}_handleIconAction(t){var e;if(this._hasIconActions&&t.stopPropagation&&t.stopPropagation(),null===(e=t.detail)||void 0===e?void 0:e.action){const e=this._config;if(!e)return;const i=`icon_${t.detail.action}_action`;this._isActionDoingSomething(this._stateObj,e[i])&&this._runAction(t.detail.action,{isIcon:!0})}}_handleAction(t){var e;if(null===(e=t.detail)||void 0===e?void 0:e.action){const e=this._config;if(!e)return;const i=`${t.detail.action}_action`;this._isActionDoingSomething(this._stateObj,e[i])&&this._runAction(t.detail.action,{isIcon:!1})}}_runAction(t,e){const i=this._config;if(!i)return;const n=e.isIcon?`icon_${t}_action`:`${t}_action`,o=this._evalActions(i,n),s=o[n].sound;if(s)if(ke(s))Se(this._hass,s).then((t=>{new Audio(t.url).play()})).catch((()=>{console.error(`button-card: Error loading media source: ${s}`)}));else{new Audio(s).play()}if("javascript"===o[n].action)this._getTemplateOrValue(this._stateObj,o[n].javascript);else{let i=t;e.isIcon?["press","release"].includes(t)?(o.tap_action=o[`icon_${t}_action`],i="tap"):o[`${t}_action`]=o[`icon_${t}_action`]:["press","release"].includes(t)&&(o.tap_action=o[`${t}_action`],i="tap"),(async(t,e,i,n)=>{Et(t,"hass-action",{config:i,action:n})})(this,this._hass,o,i)}}_handleUnlockType(t){const e=this._config;e&&e.lock.unlock===t.detail.action&&this._handleLock()}_handleLock(){var t,e,i;const n=this.shadowRoot.getElementById("lock");if(!n)return;if(this._config.lock.exemptions){if(!(null===(t=this._hass.user)||void 0===t?void 0:t.name)||!this._hass.user.id)return;let e=!1;if(this._config.lock.exemptions.forEach((t=>{var i,n;(!e&&t.user===(null===(i=this._hass.user)||void 0===i?void 0:i.id)||t.username===(null===(n=this._hass.user)||void 0===n?void 0:n.name))&&(e=!0)})),!e)return n.classList.add("invalid"),void window.setTimeout((()=>{n&&n.classList.remove("invalid")}),3e3)}const o=this.shadowRoot.getElementById("overlay");o.style.setProperty("pointer-events","none"),n&&(n.icon=this._config.lock.unlock_icon,(null===(i=null===(e=this._config)||void 0===e?void 0:e.lock)||void 0===i?void 0:i.keep_unlock_icon)||n.classList.add("hidden")),window.setTimeout((()=>{var t,e;o.style.setProperty("pointer-events",""),n&&((null===(e=null===(t=this._config)||void 0===t?void 0:t.lock)||void 0===e?void 0:e.keep_unlock_icon)||n.classList.remove("hidden"),n.icon=this._config.lock.lock_icon)}),1e3*this._config.lock.duration)}_stopPropagation(t){t.stopPropagation()}_sendToParent(t){var e,i,n;const o=(null===(e=t.type)||void 0===e?void 0:e.startsWith("touch"))?new TouchEvent(t.type,t):(null===(i=t.type)||void 0===i?void 0:i.startsWith("mouse"))?new MouseEvent(t.type,t):new CustomEvent(t.type,t);t.stopPropagation(),null===(n=this.parentElement)||void 0===n||n.dispatchEvent(o);const s=new CustomEvent(t.type,Object.assign(Object.assign({},t),{bubbles:!1,composed:!1,detail:{ignore:!0}}));this._ripple.then((t=>{var e;t&&(null===(e=t.parentElement)||void 0===e||e.dispatchEvent(s))}))}};t([rt()],hn.prototype,"_hass",void 0),t([rt()],hn.prototype,"_config",void 0),t([rt()],hn.prototype,"_timeRemaining",void 0),t([rt()],hn.prototype,"_updateTimerMS",void 0),t([rt({type:Boolean,reflect:!0})],hn.prototype,"preview",void 0),t([function(t){return(({finisher:t,descriptor:e})=>(i,n)=>{var o;if(void 0===n){const n=null!==(o=i.originalKey)&&void 0!==o?o:i.key,s=null!=e?{kind:"method",placement:"prototype",key:n,descriptor:e(i.key)}:{...i,key:n};return null!=t&&(s.finisher=function(e){t(e,n)}),s}{const o=i.constructor;void 0!==e&&Object.defineProperty(i,n,e(n)),null==t||t(o,n)}})({descriptor:e=>({async get(){var e;return await this.updateComplete,null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t)},enumerable:!0,configurable:!0})})}("ha-ripple")],hn.prototype,"_ripple",void 0),hn=t([(t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:n}=e;return{kind:i,elements:n,finisher(e){customElements.define(t,e)}}})(t,e))("button-card")],hn);
