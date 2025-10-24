function t(t,e,i,n){var o,s=arguments.length,a=s<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,n);else for(var r=t.length-1;r>=0;r--)(o=t[r])&&(a=(s<3?o(a):s>3?o(e,i,a):o(e,i))||a);return s>3&&a&&Object.defineProperty(e,i,a),a}const e=window,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,n=Symbol(),o=new WeakMap;class s{constructor(t,e,i){if(this._$cssResult$=!0,i!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=o.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&o.set(e,t))}return t}toString(){return this.cssText}}const a=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new s("string"==typeof t?t:t+"",void 0,n))(e)})(t):t;var r;const l=window,c=l.trustedTypes,h=c?c.emptyScript:"",d=l.reactiveElementPolyfillSupport,u={toAttribute(t,e){switch(e){case Boolean:t=t?h:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},p=(t,e)=>e!==t&&(e==e||t==t),m={attribute:!0,type:String,converter:u,reflect:!1,hasChanged:p},_="finalized";class f extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const n=this._$Ep(i,e);void 0!==n&&(this._$Ev.set(n,i),t.push(n))})),t}static createProperty(t,e=m){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,n=this.getPropertyDescriptor(t,i,e);void 0!==n&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(n){const o=this[t];this[e]=n,this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||m}static finalize(){if(this.hasOwnProperty(_))return!1;this[_]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const n=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,n)=>{i?t.adoptedStyleSheets=n.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):n.forEach((i=>{const n=document.createElement("style"),o=e.litNonce;void 0!==o&&n.setAttribute("nonce",o),n.textContent=i.cssText,t.appendChild(n)}))})(n,this.constructor.elementStyles),n}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=m){var n;const o=this.constructor._$Ep(t,i);if(void 0!==o&&!0===i.reflect){const s=(void 0!==(null===(n=i.converter)||void 0===n?void 0:n.toAttribute)?i.converter:u).toAttribute(e,i.type);this._$El=t,null==s?this.removeAttribute(o):this.setAttribute(o,s),this._$El=null}}_$AK(t,e){var i;const n=this.constructor,o=n._$Ev.get(t);if(void 0!==o&&this._$El!==o){const t=n.getPropertyOptions(o),s="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:u;this._$El=o,this[o]=s.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let n=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||p)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}var g;f[_]=!0,f.elementProperties=new Map,f.elementStyles=[],f.shadowRootOptions={mode:"open"},null==d||d({ReactiveElement:f}),(null!==(r=l.reactiveElementVersions)&&void 0!==r?r:l.reactiveElementVersions=[]).push("1.6.3");const v=window,b=v.trustedTypes,y=b?b.createPolicy("lit-html",{createHTML:t=>t}):void 0,w="$lit$",$=`lit$${(Math.random()+"").slice(9)}$`,A="?"+$,O=`<${A}>`,k=document,T=()=>k.createComment(""),S=t=>null===t||"object"!=typeof t&&"function"!=typeof t,j=Array.isArray,C="[ \t\n\f\r]",x=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,E=/-->/g,M=/>/g,D=RegExp(`>|${C}(?:([^\\s"'>=/]+)(${C}*=${C}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),H=/'/g,I=/"/g,P=/^(?:script|style|textarea|title)$/i,N=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),R=Symbol.for("lit-noChange"),z=Symbol.for("lit-nothing"),V=new WeakMap,L=k.createTreeWalker(k,129,null,!1);function F(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==y?y.createHTML(e):e}const U=(t,e)=>{const i=t.length-1,n=[];let o,s=2===e?"<svg>":"",a=x;for(let r=0;r<i;r++){const e=t[r];let i,l,c=-1,h=0;for(;h<e.length&&(a.lastIndex=h,l=a.exec(e),null!==l);)h=a.lastIndex,a===x?"!--"===l[1]?a=E:void 0!==l[1]?a=M:void 0!==l[2]?(P.test(l[2])&&(o=RegExp("</"+l[2],"g")),a=D):void 0!==l[3]&&(a=D):a===D?">"===l[0]?(a=null!=o?o:x,c=-1):void 0===l[1]?c=-2:(c=a.lastIndex-l[2].length,i=l[1],a=void 0===l[3]?D:'"'===l[3]?I:H):a===I||a===H?a=D:a===E||a===M?a=x:(a=D,o=void 0);const d=a===D&&t[r+1].startsWith("/>")?" ":"";s+=a===x?e+O:c>=0?(n.push(i),e.slice(0,c)+w+e.slice(c)+$+d):e+$+(-2===c?(n.push(void 0),r):d)}return[F(t,s+(t[i]||"<?>")+(2===e?"</svg>":"")),n]};class B{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let o=0,s=0;const a=t.length-1,r=this.parts,[l,c]=U(t,e);if(this.el=B.createElement(l,i),L.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(n=L.nextNode())&&r.length<a;){if(1===n.nodeType){if(n.hasAttributes()){const t=[];for(const e of n.getAttributeNames())if(e.endsWith(w)||e.startsWith($)){const i=c[s++];if(t.push(e),void 0!==i){const t=n.getAttribute(i.toLowerCase()+w).split($),e=/([.?@])?(.*)/.exec(i);r.push({type:1,index:o,name:e[2],strings:t,ctor:"."===e[1]?Y:"?"===e[1]?J:"@"===e[1]?Q:G})}else r.push({type:6,index:o})}for(const e of t)n.removeAttribute(e)}if(P.test(n.tagName)){const t=n.textContent.split($),e=t.length-1;if(e>0){n.textContent=b?b.emptyScript:"";for(let i=0;i<e;i++)n.append(t[i],T()),L.nextNode(),r.push({type:2,index:++o});n.append(t[e],T())}}}else if(8===n.nodeType)if(n.data===A)r.push({type:2,index:o});else{let t=-1;for(;-1!==(t=n.data.indexOf($,t+1));)r.push({type:7,index:o}),t+=$.length-1}o++}}static createElement(t,e){const i=k.createElement("template");return i.innerHTML=t,i}}function W(t,e,i=t,n){var o,s,a,r;if(e===R)return e;let l=void 0!==n?null===(o=i._$Co)||void 0===o?void 0:o[n]:i._$Cl;const c=S(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(s=null==l?void 0:l._$AO)||void 0===s||s.call(l,!1),void 0===c?l=void 0:(l=new c(t),l._$AT(t,i,n)),void 0!==n?(null!==(a=(r=i)._$Co)&&void 0!==a?a:r._$Co=[])[n]=l:i._$Cl=l),void 0!==l&&(e=W(t,l._$AS(t,e.values),l,n)),e}class q{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:n}=this._$AD,o=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:k).importNode(i,!0);L.currentNode=o;let s=L.nextNode(),a=0,r=0,l=n[0];for(;void 0!==l;){if(a===l.index){let e;2===l.type?e=new Z(s,s.nextSibling,this,t):1===l.type?e=new l.ctor(s,l.name,l.strings,this,t):6===l.type&&(e=new X(s,this,t)),this._$AV.push(e),l=n[++r]}a!==(null==l?void 0:l.index)&&(s=L.nextNode(),a++)}return L.currentNode=k,o}v(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Z{constructor(t,e,i,n){var o;this.type=2,this._$AH=z,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cp=null===(o=null==n?void 0:n.isConnected)||void 0===o||o}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=W(this,t,e),S(t)?t===z||null==t||""===t?(this._$AH!==z&&this._$AR(),this._$AH=z):t!==this._$AH&&t!==R&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>j(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==z&&S(this._$AH)?this._$AA.nextSibling.data=t:this.$(k.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:n}=t,o="number"==typeof n?this._$AC(t):(void 0===n.el&&(n.el=B.createElement(F(n.h,n.h[0]),this.options)),n);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===o)this._$AH.v(i);else{const t=new q(o,this),e=t.u(this.options);t.v(i),this.$(e),this._$AH=t}}_$AC(t){let e=V.get(t.strings);return void 0===e&&V.set(t.strings,e=new B(t)),e}T(t){j(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const o of t)n===e.length?e.push(i=new Z(this.k(T()),this.k(T()),this,this.options)):i=e[n],i._$AI(o),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class G{constructor(t,e,i,n,o){this.type=1,this._$AH=z,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=z}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,n){const o=this.strings;let s=!1;if(void 0===o)t=W(this,t,e,0),s=!S(t)||t!==this._$AH&&t!==R,s&&(this._$AH=t);else{const n=t;let a,r;for(t=o[0],a=0;a<o.length-1;a++)r=W(this,n[i+a],e,a),r===R&&(r=this._$AH[a]),s||(s=!S(r)||r!==this._$AH[a]),r===z?t=z:t!==z&&(t+=(null!=r?r:"")+o[a+1]),this._$AH[a]=r}s&&!n&&this.j(t)}j(t){t===z?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class Y extends G{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===z?void 0:t}}const K=b?b.emptyScript:"";class J extends G{constructor(){super(...arguments),this.type=4}j(t){t&&t!==z?this.element.setAttribute(this.name,K):this.element.removeAttribute(this.name)}}class Q extends G{constructor(t,e,i,n,o){super(t,e,i,n,o),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=W(this,t,e,0))&&void 0!==i?i:z)===R)return;const n=this._$AH,o=t===z&&n!==z||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,s=t!==z&&(n===z||o);o&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class X{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){W(this,t)}}const tt=v.litHtmlPolyfillSupport;null==tt||tt(B,Z),(null!==(g=v.litHtmlVersions)&&void 0!==g?g:v.litHtmlVersions=[]).push("2.8.0");var et,it;class nt extends f{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{var n,o;const s=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:e;let a=s._$litPart$;if(void 0===a){const t=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:null;s._$litPart$=a=new Z(e.insertBefore(T(),t),t,void 0,null!=i?i:{})}return a._$AI(t),a})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return R}}nt.finalized=!0,nt._$litElement$=!0,null===(et=globalThis.litElementHydrateSupport)||void 0===et||et.call(globalThis,{LitElement:nt});const ot=globalThis.litElementPolyfillSupport;null==ot||ot({LitElement:nt}),(null!==(it=globalThis.litElementVersions)&&void 0!==it?it:globalThis.litElementVersions=[]).push("3.3.3");const st=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function at(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):st(t,e)}var rt;null===(rt=window.HTMLSlotElement)||void 0===rt||rt.prototype.assignedElements;const lt=t=>null!=t?t:z,ct=1,ht=2,dt=t=>(...e)=>({_$litDirective$:t,values:e});class ut{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}const pt=(t,e)=>{var i,n;const o=t._$AN;if(void 0===o)return!1;for(const s of o)null===(n=(i=s)._$AO)||void 0===n||n.call(i,e,!1),pt(s,e);return!0},mt=t=>{let e,i;do{if(void 0===(e=t._$AM))break;i=e._$AN,i.delete(t),t=e}while(0===(null==i?void 0:i.size))},_t=t=>{for(let e;e=t._$AM;t=e){let i=e._$AN;if(void 0===i)e._$AN=i=new Set;else if(i.has(t))break;i.add(t),vt(e)}};function ft(t){void 0!==this._$AN?(mt(this),this._$AM=t,_t(this)):this._$AM=t}function gt(t,e=!1,i=0){const n=this._$AH,o=this._$AN;if(void 0!==o&&0!==o.size)if(e)if(Array.isArray(n))for(let s=i;s<n.length;s++)pt(n[s],!1),mt(n[s]);else null!=n&&(pt(n,!1),mt(n));else pt(this,t)}const vt=t=>{var e,i,n,o;t.type==ht&&(null!==(e=(n=t)._$AP)&&void 0!==e||(n._$AP=gt),null!==(i=(o=t)._$AQ)&&void 0!==i||(o._$AQ=ft))};class bt extends ut{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,i){super._$AT(t,e,i),_t(this),this.isConnected=t._$AU}_$AO(t,e=!0){var i,n;t!==this.isConnected&&(this.isConnected=t,t?null===(i=this.reconnected)||void 0===i||i.call(this):null===(n=this.disconnected)||void 0===n||n.call(this)),e&&(pt(this,t),mt(this))}setValue(t){if((t=>void 0===t.strings)(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}class yt{constructor(t){this.G=t}disconnect(){this.G=void 0}reconnect(t){this.G=t}deref(){return this.G}}class wt{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){var t;null!==(t=this.Y)&&void 0!==t||(this.Y=new Promise((t=>this.Z=t)))}resume(){var t;null===(t=this.Z)||void 0===t||t.call(this),this.Y=this.Z=void 0}}const $t=t=>!(t=>null===t||"object"!=typeof t&&"function"!=typeof t)(t)&&"function"==typeof t.then,At=1073741823;const Ot=dt(class extends bt{constructor(){super(...arguments),this._$C_t=At,this._$Cwt=[],this._$Cq=new yt(this),this._$CK=new wt}render(...t){var e;return null!==(e=t.find((t=>!$t(t))))&&void 0!==e?e:R}update(t,e){const i=this._$Cwt;let n=i.length;this._$Cwt=e;const o=this._$Cq,s=this._$CK;this.isConnected||this.disconnected();for(let a=0;a<e.length&&!(a>this._$C_t);a++){const t=e[a];if(!$t(t))return this._$C_t=a,t;a<n&&t===i[a]||(this._$C_t=At,n=0,Promise.resolve(t).then((async e=>{for(;s.get();)await s.get();const i=o.deref();if(void 0!==i){const n=i._$Cwt.indexOf(t);n>-1&&n<i._$C_t&&(i._$C_t=n,i.setValue(e))}})))}return R}disconnected(){this._$Cq.disconnect(),this._$CK.pause()}reconnected(){this._$Cq.reconnect(this),this._$CK.resume()}}),kt="important",Tt=" !"+kt,St=dt(class extends ut{constructor(t){var e;if(super(t),t.type!==ct||"style"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,i)=>{const n=t[i];return null==n?e:e+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${n};`}),"")}update(t,[e]){const{style:i}=t.element;if(void 0===this.ht){this.ht=new Set;for(const t in e)this.ht.add(t);return this.render(e)}this.ht.forEach((t=>{null==e[t]&&(this.ht.delete(t),t.includes("-")?i.removeProperty(t):i[t]="")}));for(const n in e){const t=e[n];if(null!=t){this.ht.add(n);const e="string"==typeof t&&t.endsWith(Tt);n.includes("-")||e?i.setProperty(n,e?t.slice(0,-11):t,e?kt:""):i[n]=t}}return R}});class jt extends ut{constructor(t){if(super(t),this.et=z,t.type!==ht)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===z||null==t)return this.ft=void 0,this.et=t;if(t===R)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.ft;this.et=t;const e=[t];return e.raw=e,this.ft={_$litType$:this.constructor.resultType,strings:e,values:[]}}}jt.directiveName="unsafeHTML",jt.resultType=1;const Ct=dt(jt),xt=dt(class extends ut{constructor(t){var e;if(super(t),t.type!==ct||"class"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){var i,n;if(void 0===this.it){this.it=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in e)e[t]&&!(null===(i=this.nt)||void 0===i?void 0:i.has(t))&&this.it.add(t);return this.render(e)}const o=t.element.classList;this.it.forEach((t=>{t in e||(o.remove(t),this.it.delete(t))}));for(const s in e){const t=!!e[s];t===this.it.has(s)||(null===(n=this.nt)||void 0===n?void 0:n.has(s))||(t?(o.add(s),this.it.add(s)):(o.remove(s),this.it.delete(s)))}return R}}),Et=(t,e,i,n)=>{n=n||{},i=null==i?{}:i;const o=new Event(e,{bubbles:void 0===n.bubbles||n.bubbles,cancelable:Boolean(n.cancelable),composed:void 0===n.composed||n.composed});return o.detail=i,t.dispatchEvent(o),o},Mt=(t,e)=>{if(t===e)return!0;if(t&&e&&"object"==typeof t&&"object"==typeof e){if(t.constructor!==e.constructor)return!1;let i,n;if(Array.isArray(t)){if(n=t.length,n!==e.length)return!1;for(i=n;0!=i--;)if(!Mt(t[i],e[i]))return!1;return!0}if(t instanceof Map&&e instanceof Map){if(t.size!==e.size)return!1;for(i of t.entries())if(!e.has(i[0]))return!1;for(i of t.entries())if(!Mt(i[1],e.get(i[0])))return!1;return!0}if(t instanceof Set&&e instanceof Set){if(t.size!==e.size)return!1;for(i of t.entries())if(!e.has(i[0]))return!1;return!0}if(ArrayBuffer.isView(t)&&ArrayBuffer.isView(e)){if(n=t.length,n!==e.length)return!1;for(i=n;0!=i--;)if(t[i]!==e[i])return!1;return!0}if(t.constructor===RegExp)return t.source===e.source&&t.flags===e.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===e.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===e.toString();const o=Object.keys(t);if(n=o.length,n!==Object.keys(e).length)return!1;for(i=n;0!=i--;)if(!Object.prototype.hasOwnProperty.call(e,o[i]))return!1;for(i=n;0!=i--;){const n=o[i];if(!Mt(t[n],e[n]))return!1}return!0}return t!=t&&e!=e},Dt="ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0;class Ht extends HTMLElement{constructor(){super(...arguments),this.holdTime=500,this.held=!1,this.cancelled=!1,this.isRepeating=!1,this.repeatCount=0}connectedCallback(){Object.assign(this.style,{position:"fixed",width:Dt?"100px":"50px",height:Dt?"100px":"50px",transform:"translate(-50%, -50%) scale(0)",pointerEvents:"none",zIndex:"999",background:"var(--primary-color)",display:null,opacity:"0.2",borderRadius:"50%",transition:"transform 180ms ease-in-out"}),["touchcancel","mouseout","mouseup","touchmove","mousewheel","wheel","scroll"].forEach((t=>{document.addEventListener(t,(()=>{this.cancelled=!0,this.timer&&(this.stopAnimation(),clearTimeout(this.timer),this.timer=void 0,this.isRepeating&&this.repeatTimeout&&(clearInterval(this.repeatTimeout),this.isRepeating=!1))}),{passive:!0})}))}bind(t,e={}){t.actionHandler&&Mt(e,t.actionHandler.options)||(t.actionHandler?(t.removeEventListener("touchstart",t.actionHandler.start),t.removeEventListener("touchend",t.actionHandler.end),t.removeEventListener("touchcancel",t.actionHandler.end),t.removeEventListener("mousedown",t.actionHandler.start),t.removeEventListener("click",t.actionHandler.end),t.removeEventListener("keydown",t.actionHandler.handleKeyDown)):t.addEventListener("contextmenu",(t=>{const e=t||window.event;return e.preventDefault&&e.preventDefault(),e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0,e.returnValue=!1,!1})),t.actionHandler={options:e},e.disabled||(t.actionHandler.start=i=>{var n;if(null===(n=i.detail)||void 0===n?void 0:n.ignore)return;let o,s;if(this.cancelled=!1,i.touches?(o=i.touches[0].clientX,s=i.touches[0].clientY):(o=i.clientX,s=i.clientY),e.isMomentary){if(0!==i.button)return;Et(t,"action",{action:"press"})}else e.hasHold&&(this.held=!1,this.timer=window.setTimeout((()=>{this.startAnimation(o,s),this.held=!0,e.repeat&&!this.isRepeating&&(this.repeatCount=0,this.isRepeating=!0,this.repeatTimeout=setInterval((()=>{Et(t,"action",{action:"hold"}),this.repeatCount++,this.repeatTimeout&&e.repeatLimit&&this.repeatCount>=e.repeatLimit&&(clearInterval(this.repeatTimeout),this.isRepeating=!1)}),e.repeat))}),this.holdTime))},t.actionHandler.end=i=>{var n;if(null===(n=i.detail)||void 0===n?void 0:n.ignore)return;if(["touchend","touchcancel"].includes(i.type)&&this.cancelled)return void(this.isRepeating&&this.repeatTimeout&&(clearInterval(this.repeatTimeout),this.isRepeating=!1));if("touchcancel"==i.type)return;const o=i.target;i.cancelable&&i.preventDefault(),e.isMomentary?Et(t,"action",{action:"release"}):(e.hasHold&&(clearTimeout(this.timer),this.isRepeating&&this.repeatTimeout&&clearInterval(this.repeatTimeout),this.isRepeating=!1,this.stopAnimation(),this.timer=void 0),e.hasHold&&this.held?e.repeat||Et(o,"action",{action:"hold"}):e.hasDoubleClick?"click"===i.type&&i.detail<2||!this.dblClickTimeout?this.dblClickTimeout=window.setTimeout((()=>{this.dblClickTimeout=void 0,Et(o,"action",{action:"tap"})}),250):(clearTimeout(this.dblClickTimeout),this.dblClickTimeout=void 0,Et(o,"action",{action:"double_tap"})):Et(o,"action",{action:"tap"}))},t.actionHandler.handleTouchMove=t=>{"touchmove"==t.type&&e.hasHold&&this.held&&(t.stopPropagation(),t.preventDefault())},t.actionHandler.handleKeyDown=t=>{e.disableKbd||["Enter"," "].includes(t.key)&&t.currentTarget.actionHandler.end(t)},t.addEventListener("touchstart",t.actionHandler.start,{passive:!0}),t.addEventListener("touchmove",t.actionHandler.handleTouchMove),t.addEventListener("touchend",t.actionHandler.end),t.addEventListener("touchcancel",t.actionHandler.end),t.addEventListener("mousedown",t.actionHandler.start,{passive:!0}),t.addEventListener("click",t.actionHandler.end),t.addEventListener("keydown",t.actionHandler.handleKeyDown)))}startAnimation(t,e){Object.assign(this.style,{left:`${t}px`,top:`${e}px`,transform:"translate(-50%, -50%) scale(1)"})}stopAnimation(){Object.assign(this.style,{left:null,top:null,transform:"translate(-50%, -50%) scale(0)"})}}customElements.define("button-card-action-handler",Ht);const It=(t,e)=>{const i=(()=>{const t=document.body;if(t.querySelector("button-card-action-handler"))return t.querySelector("button-card-action-handler");const e=document.createElement("button-card-action-handler");return t.appendChild(e),e})();i&&i.bind(t,e)},Pt=dt(class extends ut{update(t,[e]){return It(t.element,e),R}render(t){}});function Nt(t,e){(function(t){return"string"==typeof t&&-1!==t.indexOf(".")&&1===parseFloat(t)})(t)&&(t="100%");var i=function(t){return"string"==typeof t&&-1!==t.indexOf("%")}(t);return t=360===e?t:Math.min(e,Math.max(0,parseFloat(t))),i&&(t=parseInt(String(t*e),10)/100),Math.abs(t-e)<1e-6?1:t=360===e?(t<0?t%e+e:t%e)/parseFloat(String(e)):t%e/parseFloat(String(e))}function Rt(t){return Math.min(1,Math.max(0,t))}function zt(t){return t=parseFloat(t),(isNaN(t)||t<0||t>1)&&(t=1),t}function Vt(t){return t<=1?"".concat(100*Number(t),"%"):t}function Lt(t){return 1===t.length?"0"+t:String(t)}function Ft(t,e,i){t=Nt(t,255),e=Nt(e,255),i=Nt(i,255);var n=Math.max(t,e,i),o=Math.min(t,e,i),s=0,a=0,r=(n+o)/2;if(n===o)a=0,s=0;else{var l=n-o;switch(a=r>.5?l/(2-n-o):l/(n+o),n){case t:s=(e-i)/l+(e<i?6:0);break;case e:s=(i-t)/l+2;break;case i:s=(t-e)/l+4}s/=6}return{h:s,s:a,l:r}}function Ut(t,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?t+6*i*(e-t):i<.5?e:i<2/3?t+(e-t)*(2/3-i)*6:t}function Bt(t,e,i){t=Nt(t,255),e=Nt(e,255),i=Nt(i,255);var n=Math.max(t,e,i),o=Math.min(t,e,i),s=0,a=n,r=n-o,l=0===n?0:r/n;if(n===o)s=0;else{switch(n){case t:s=(e-i)/r+(e<i?6:0);break;case e:s=(i-t)/r+2;break;case i:s=(t-e)/r+4}s/=6}return{h:s,s:l,v:a}}function Wt(t,e,i,n){var o=[Lt(Math.round(t).toString(16)),Lt(Math.round(e).toString(16)),Lt(Math.round(i).toString(16))];return n&&o[0].startsWith(o[0].charAt(1))&&o[1].startsWith(o[1].charAt(1))&&o[2].startsWith(o[2].charAt(1))?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0):o.join("")}function qt(t){return Math.round(255*parseFloat(t)).toString(16)}function Zt(t){return Gt(t)/255}function Gt(t){return parseInt(t,16)}var Yt={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function Kt(t){var e={r:0,g:0,b:0},i=1,n=null,o=null,s=null,a=!1,r=!1;return"string"==typeof t&&(t=function(t){if(t=t.trim().toLowerCase(),0===t.length)return!1;var e=!1;if(Yt[t])t=Yt[t],e=!0;else if("transparent"===t)return{r:0,g:0,b:0,a:0,format:"name"};var i=te.rgb.exec(t);if(i)return{r:i[1],g:i[2],b:i[3]};if(i=te.rgba.exec(t),i)return{r:i[1],g:i[2],b:i[3],a:i[4]};if(i=te.hsl.exec(t),i)return{h:i[1],s:i[2],l:i[3]};if(i=te.hsla.exec(t),i)return{h:i[1],s:i[2],l:i[3],a:i[4]};if(i=te.hsv.exec(t),i)return{h:i[1],s:i[2],v:i[3]};if(i=te.hsva.exec(t),i)return{h:i[1],s:i[2],v:i[3],a:i[4]};if(i=te.hex8.exec(t),i)return{r:Gt(i[1]),g:Gt(i[2]),b:Gt(i[3]),a:Zt(i[4]),format:e?"name":"hex8"};if(i=te.hex6.exec(t),i)return{r:Gt(i[1]),g:Gt(i[2]),b:Gt(i[3]),format:e?"name":"hex"};if(i=te.hex4.exec(t),i)return{r:Gt(i[1]+i[1]),g:Gt(i[2]+i[2]),b:Gt(i[3]+i[3]),a:Zt(i[4]+i[4]),format:e?"name":"hex8"};if(i=te.hex3.exec(t),i)return{r:Gt(i[1]+i[1]),g:Gt(i[2]+i[2]),b:Gt(i[3]+i[3]),format:e?"name":"hex"};return!1}(t)),"object"==typeof t&&(ee(t.r)&&ee(t.g)&&ee(t.b)?(e=function(t,e,i){return{r:255*Nt(t,255),g:255*Nt(e,255),b:255*Nt(i,255)}}(t.r,t.g,t.b),a=!0,r="%"===String(t.r).substr(-1)?"prgb":"rgb"):ee(t.h)&&ee(t.s)&&ee(t.v)?(n=Vt(t.s),o=Vt(t.v),e=function(t,e,i){t=6*Nt(t,360),e=Nt(e,100),i=Nt(i,100);var n=Math.floor(t),o=t-n,s=i*(1-e),a=i*(1-o*e),r=i*(1-(1-o)*e),l=n%6;return{r:255*[i,a,s,s,r,i][l],g:255*[r,i,i,a,s,s][l],b:255*[s,s,r,i,i,a][l]}}(t.h,n,o),a=!0,r="hsv"):ee(t.h)&&ee(t.s)&&ee(t.l)&&(n=Vt(t.s),s=Vt(t.l),e=function(t,e,i){var n,o,s;if(t=Nt(t,360),e=Nt(e,100),i=Nt(i,100),0===e)o=i,s=i,n=i;else{var a=i<.5?i*(1+e):i+e-i*e,r=2*i-a;n=Ut(r,a,t+1/3),o=Ut(r,a,t),s=Ut(r,a,t-1/3)}return{r:255*n,g:255*o,b:255*s}}(t.h,n,s),a=!0,r="hsl"),Object.prototype.hasOwnProperty.call(t,"a")&&(i=t.a)),i=zt(i),{ok:a,format:t.format||r,r:Math.min(255,Math.max(e.r,0)),g:Math.min(255,Math.max(e.g,0)),b:Math.min(255,Math.max(e.b,0)),a:i}}var Jt="(?:".concat("[-\\+]?\\d*\\.\\d+%?",")|(?:").concat("[-\\+]?\\d+%?",")"),Qt="[\\s|\\(]+(".concat(Jt,")[,|\\s]+(").concat(Jt,")[,|\\s]+(").concat(Jt,")\\s*\\)?"),Xt="[\\s|\\(]+(".concat(Jt,")[,|\\s]+(").concat(Jt,")[,|\\s]+(").concat(Jt,")[,|\\s]+(").concat(Jt,")\\s*\\)?"),te={CSS_UNIT:new RegExp(Jt),rgb:new RegExp("rgb"+Qt),rgba:new RegExp("rgba"+Xt),hsl:new RegExp("hsl"+Qt),hsla:new RegExp("hsla"+Xt),hsv:new RegExp("hsv"+Qt),hsva:new RegExp("hsva"+Xt),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function ee(t){return Boolean(te.CSS_UNIT.exec(String(t)))}var ie=function(){function t(e,i){var n;if(void 0===e&&(e=""),void 0===i&&(i={}),e instanceof t)return e;"number"==typeof e&&(e=function(t){return{r:t>>16,g:(65280&t)>>8,b:255&t}}(e)),this.originalInput=e;var o=Kt(e);this.originalInput=e,this.r=o.r,this.g=o.g,this.b=o.b,this.a=o.a,this.roundA=Math.round(100*this.a)/100,this.format=null!==(n=i.format)&&void 0!==n?n:o.format,this.gradientType=i.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=o.ok}return t.prototype.isDark=function(){return this.getBrightness()<128},t.prototype.isLight=function(){return!this.isDark()},t.prototype.getBrightness=function(){var t=this.toRgb();return(299*t.r+587*t.g+114*t.b)/1e3},t.prototype.getLuminance=function(){var t=this.toRgb(),e=t.r/255,i=t.g/255,n=t.b/255;return.2126*(e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4))+.7152*(i<=.03928?i/12.92:Math.pow((i+.055)/1.055,2.4))+.0722*(n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4))},t.prototype.getAlpha=function(){return this.a},t.prototype.setAlpha=function(t){return this.a=zt(t),this.roundA=Math.round(100*this.a)/100,this},t.prototype.isMonochrome=function(){return 0===this.toHsl().s},t.prototype.toHsv=function(){var t=Bt(this.r,this.g,this.b);return{h:360*t.h,s:t.s,v:t.v,a:this.a}},t.prototype.toHsvString=function(){var t=Bt(this.r,this.g,this.b),e=Math.round(360*t.h),i=Math.round(100*t.s),n=Math.round(100*t.v);return 1===this.a?"hsv(".concat(e,", ").concat(i,"%, ").concat(n,"%)"):"hsva(".concat(e,", ").concat(i,"%, ").concat(n,"%, ").concat(this.roundA,")")},t.prototype.toHsl=function(){var t=Ft(this.r,this.g,this.b);return{h:360*t.h,s:t.s,l:t.l,a:this.a}},t.prototype.toHslString=function(){var t=Ft(this.r,this.g,this.b),e=Math.round(360*t.h),i=Math.round(100*t.s),n=Math.round(100*t.l);return 1===this.a?"hsl(".concat(e,", ").concat(i,"%, ").concat(n,"%)"):"hsla(".concat(e,", ").concat(i,"%, ").concat(n,"%, ").concat(this.roundA,")")},t.prototype.toHex=function(t){return void 0===t&&(t=!1),Wt(this.r,this.g,this.b,t)},t.prototype.toHexString=function(t){return void 0===t&&(t=!1),"#"+this.toHex(t)},t.prototype.toHex8=function(t){return void 0===t&&(t=!1),function(t,e,i,n,o){var s=[Lt(Math.round(t).toString(16)),Lt(Math.round(e).toString(16)),Lt(Math.round(i).toString(16)),Lt(qt(n))];return o&&s[0].startsWith(s[0].charAt(1))&&s[1].startsWith(s[1].charAt(1))&&s[2].startsWith(s[2].charAt(1))&&s[3].startsWith(s[3].charAt(1))?s[0].charAt(0)+s[1].charAt(0)+s[2].charAt(0)+s[3].charAt(0):s.join("")}(this.r,this.g,this.b,this.a,t)},t.prototype.toHex8String=function(t){return void 0===t&&(t=!1),"#"+this.toHex8(t)},t.prototype.toHexShortString=function(t){return void 0===t&&(t=!1),1===this.a?this.toHexString(t):this.toHex8String(t)},t.prototype.toRgb=function(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}},t.prototype.toRgbString=function(){var t=Math.round(this.r),e=Math.round(this.g),i=Math.round(this.b);return 1===this.a?"rgb(".concat(t,", ").concat(e,", ").concat(i,")"):"rgba(".concat(t,", ").concat(e,", ").concat(i,", ").concat(this.roundA,")")},t.prototype.toPercentageRgb=function(){var t=function(t){return"".concat(Math.round(100*Nt(t,255)),"%")};return{r:t(this.r),g:t(this.g),b:t(this.b),a:this.a}},t.prototype.toPercentageRgbString=function(){var t=function(t){return Math.round(100*Nt(t,255))};return 1===this.a?"rgb(".concat(t(this.r),"%, ").concat(t(this.g),"%, ").concat(t(this.b),"%)"):"rgba(".concat(t(this.r),"%, ").concat(t(this.g),"%, ").concat(t(this.b),"%, ").concat(this.roundA,")")},t.prototype.toName=function(){if(0===this.a)return"transparent";if(this.a<1)return!1;for(var t="#"+Wt(this.r,this.g,this.b,!1),e=0,i=Object.entries(Yt);e<i.length;e++){var n=i[e],o=n[0];if(t===n[1])return o}return!1},t.prototype.toString=function(t){var e=Boolean(t);t=null!=t?t:this.format;var i=!1,n=this.a<1&&this.a>=0;return e||!n||!t.startsWith("hex")&&"name"!==t?("rgb"===t&&(i=this.toRgbString()),"prgb"===t&&(i=this.toPercentageRgbString()),"hex"!==t&&"hex6"!==t||(i=this.toHexString()),"hex3"===t&&(i=this.toHexString(!0)),"hex4"===t&&(i=this.toHex8String(!0)),"hex8"===t&&(i=this.toHex8String()),"name"===t&&(i=this.toName()),"hsl"===t&&(i=this.toHslString()),"hsv"===t&&(i=this.toHsvString()),i||this.toHexString()):"name"===t&&0===this.a?this.toName():this.toRgbString()},t.prototype.toNumber=function(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)},t.prototype.clone=function(){return new t(this.toString())},t.prototype.lighten=function(e){void 0===e&&(e=10);var i=this.toHsl();return i.l+=e/100,i.l=Rt(i.l),new t(i)},t.prototype.brighten=function(e){void 0===e&&(e=10);var i=this.toRgb();return i.r=Math.max(0,Math.min(255,i.r-Math.round(-e/100*255))),i.g=Math.max(0,Math.min(255,i.g-Math.round(-e/100*255))),i.b=Math.max(0,Math.min(255,i.b-Math.round(-e/100*255))),new t(i)},t.prototype.darken=function(e){void 0===e&&(e=10);var i=this.toHsl();return i.l-=e/100,i.l=Rt(i.l),new t(i)},t.prototype.tint=function(t){return void 0===t&&(t=10),this.mix("white",t)},t.prototype.shade=function(t){return void 0===t&&(t=10),this.mix("black",t)},t.prototype.desaturate=function(e){void 0===e&&(e=10);var i=this.toHsl();return i.s-=e/100,i.s=Rt(i.s),new t(i)},t.prototype.saturate=function(e){void 0===e&&(e=10);var i=this.toHsl();return i.s+=e/100,i.s=Rt(i.s),new t(i)},t.prototype.greyscale=function(){return this.desaturate(100)},t.prototype.spin=function(e){var i=this.toHsl(),n=(i.h+e)%360;return i.h=n<0?360+n:n,new t(i)},t.prototype.mix=function(e,i){void 0===i&&(i=50);var n=this.toRgb(),o=new t(e).toRgb(),s=i/100;return new t({r:(o.r-n.r)*s+n.r,g:(o.g-n.g)*s+n.g,b:(o.b-n.b)*s+n.b,a:(o.a-n.a)*s+n.a})},t.prototype.analogous=function(e,i){void 0===e&&(e=6),void 0===i&&(i=30);var n=this.toHsl(),o=360/i,s=[this];for(n.h=(n.h-(o*e>>1)+720)%360;--e;)n.h=(n.h+o)%360,s.push(new t(n));return s},t.prototype.complement=function(){var e=this.toHsl();return e.h=(e.h+180)%360,new t(e)},t.prototype.monochromatic=function(e){void 0===e&&(e=6);for(var i=this.toHsv(),n=i.h,o=i.s,s=i.v,a=[],r=1/e;e--;)a.push(new t({h:n,s:o,v:s})),s=(s+r)%1;return a},t.prototype.splitcomplement=function(){var e=this.toHsl(),i=e.h;return[this,new t({h:(i+72)%360,s:e.s,l:e.l}),new t({h:(i+216)%360,s:e.s,l:e.l})]},t.prototype.onBackground=function(e){var i=this.toRgb(),n=new t(e).toRgb(),o=i.a+n.a*(1-i.a);return new t({r:(i.r*i.a+n.r*n.a*(1-i.a))/o,g:(i.g*i.a+n.g*n.a*(1-i.a))/o,b:(i.b*i.a+n.b*n.a*(1-i.a))/o,a:o})},t.prototype.triad=function(){return this.polyad(3)},t.prototype.tetrad=function(){return this.polyad(4)},t.prototype.polyad=function(e){for(var i=this.toHsl(),n=i.h,o=[this],s=360/e,a=1;a<e;a++)o.push(new t({h:(n+a*s)%360,s:i.s,l:i.l}));return o},t.prototype.equals=function(e){return this.toRgbString()===new t(e).toRgbString()},t}();function ne(t,e){return void 0===t&&(t=""),void 0===e&&(e={}),new ie(t,e)}const oe="sections",se=[oe],ae="unavailable",re=(le=[ae,"unknown"],(t,e)=>le.includes(t,e));var le;const ce=new Set(["fan","input_boolean","light","switch","group","automation","humidifier"]),he=new Set(["input_button"]),de=["auto","auto-no-temperature"],ue=["card","label-card"],pe=["--ha-card-background","--card-background-color"],me="var(--primary-text-color)",_e={pin:"Incorrect PIN, action cancelled",password:"Incorrect password, action cancelled"},fe="tap_action";function ge(t){return t.substr(0,t.indexOf("."))}function ve(t,e){const i=[];let n=e;return"var"===e.trim().substring(0,3)&&(e.split(",").forEach((t=>{const e=t.match(/var\(\s*([a-zA-Z0-9-]*)/);e&&i.push(e[1])})),i.some((e=>{const i=window.getComputedStyle(t).getPropertyValue(e);return!!i&&(n=i,!0)}))),n}function be(...t){const e=t=>t&&"object"==typeof t;return t.reduce(((t,i)=>(Object.keys(i).forEach((n=>{const o=t[n],s=i[n];Array.isArray(o)&&Array.isArray(s)?t[n]=o.concat(...s):e(o)&&e(s)?t[n]=be(o,s):t[n]=s})),t)),{})}function ye(t,e){let i=[];return t&&t.forEach((t=>{let n=t;e&&e.forEach((e=>{e.id&&t.id&&e.id==t.id&&(n=be(n,e))})),i.push(n)})),e&&(i=i.concat(e.filter((e=>!t||!t.find((t=>!(!t.id||!e.id)&&t.id==e.id)))))),i}function we(){var t;let e=document.querySelector("hc-main");if(e=e&&e.shadowRoot,e=e&&e.querySelector("hc-lovelace"),e=e&&e.shadowRoot,e=e&&(e.querySelector("hui-view")||e.querySelector("hui-panel-view")),e){const i=e.lovelace;return i.current_view=null!==(t=null==e?void 0:e._curView)&&void 0!==t?t:0,i}return null}function $e(){var t;let e=document.querySelector("home-assistant");if(e=e&&e.shadowRoot,e=e&&e.querySelector("home-assistant-main"),e=e&&e.shadowRoot,e=e&&e.querySelector("app-drawer-layout partial-panel-resolver, ha-drawer partial-panel-resolver"),e=e&&e.shadowRoot||e,e=e&&e.querySelector("ha-panel-lovelace"),e=e&&e.shadowRoot,e=e&&e.querySelector("hui-root"),e){const i=e.lovelace;return i.current_view=null!==(t=null==e?void 0:e._curView)&&void 0!==t?t:0,i}return null}const Ae=()=>{const t=function(){var t;const e=$e()||we();return(null==e?void 0:e.current_view)?null===(t=e.config)||void 0===t?void 0:t.views[e.current_view]:void 0}(),e=(null==(i=t)?void 0:i.type)?i.type:(null==i?void 0:i.panel)?"panel":(null==i?void 0:i.sections)?oe:(null==i?void 0:i.cards)?"masonry":oe;var i;return se.includes(e)};function Oe(t,e){if(void 0===t)return!1;const i=ge(t.entity_id),n=void 0!==e?e:null==t?void 0:t.state;if(["button","event","input_button","scene"].includes(i))return n!==ae;if(re(n))return!1;if("off"===n&&"alert"!==i)return!1;switch(i){case"alarm_control_panel":return"disarmed"!==n;case"alert":return"idle"!==n;case"cover":return"closed"!==n;case"device_tracker":case"person":return"not_home"!==n;case"lock":return"locked"!==n;case"media_player":return"standby"!==n;case"vacuum":return!["idle","docked","paused"].includes(n);case"plant":return"problem"===n;case"group":return["on","home","open","locked","problem"].includes(n);case"timer":return"active"===n;case"camera":return"streaming"===n}return!0}function ke(t){return Array.isArray(t)?t.reverse().reduce(((t,e)=>`var(${e}${t?`, ${t}`:""})`),void 0):`var(${t})`}function Te(t){const e=t.split(":").map(Number);return 3600*e[0]+60*e[1]+e[2]}const Se=t=>t<10?`0${t}`:t;const je=t=>t.startsWith("media-source://"),Ce=(t,e)=>t.callWS({type:"media_source/resolve_media",media_content_id:e}),xe=(t,e,i,n,o,s)=>{const a=[];(null==o?void 0:o.length)&&a.push((t=>o.includes(ge(t)))),s&&a.push((e=>t.states[e]&&s(t.states[e])));const r=((t,e,i)=>{(!i||i>t.length)&&(i=t.length);const n=[];for(let o=0;o<t.length&&n.length<i;o++){let i=!0;for(const n of e)if(!n(t[o])){i=!1;break}i&&n.push(t[o])}return n})(i,a,e);if(r.length<e&&n.length){const i=xe(t,e-r.length,n,[],o,s);r.push(...i)}return r},Ee=new Set(["call-service","divider","section","weblink","cast","select"]),Me={alert:"toggle",automation:"toggle",climate:"climate",cover:"cover",fan:"toggle",group:"group",input_boolean:"toggle",input_number:"input-number",input_select:"input-select",input_text:"input-text",light:"toggle",lock:"lock",media_player:"media-player",remote:"toggle",scene:"scene",script:"script",sensor:"sensor",timer:"timer",switch:"toggle",vacuum:"toggle",water_heater:"climate",input_datetime:"input-datetime"},De=((t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[n+1]),t[0]);return new s(i,t,n)})`
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
    transition: visibility 0s 1s, opacity 1s linear;
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
`;var He,Ie,Pe,Ne,Re;!function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(He||(He={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(Ie||(Ie={})),function(t){t.local="local",t.server="server"}(Pe||(Pe={})),function(t){t.language="language",t.system="system",t.DMY="DMY",t.MDY="MDY",t.YMD="YMD"}(Ne||(Ne={})),function(t){t.language="language",t.monday="monday",t.tuesday="tuesday",t.wednesday="wednesday",t.thursday="thursday",t.friday="friday",t.saturday="saturday",t.sunday="sunday"}(Re||(Re={}));const ze=(t,e,i)=>{const n=e?(t=>{switch(t.number_format){case He.comma_decimal:return["en-US","en"];case He.decimal_comma:return["de","es","it"];case He.space_comma:return["fr","sv","cs"];case He.system:return;default:return t.language}})(e):void 0;if(Number.isNaN=Number.isNaN||function t(e){return"number"==typeof e&&t(e)},(null==e?void 0:e.number_format)!==He.none&&!Number.isNaN(Number(t))&&Intl)try{return new Intl.NumberFormat(n,Le(t,i)).format(Number(t))}catch(o){return console.error(o),new Intl.NumberFormat(void 0,Le(t,i)).format(Number(t))}return"string"==typeof t?t:`${((t,e=2)=>Math.round(t*10**e)/10**e)(t,null==i?void 0:i.maximumFractionDigits).toString()}${"currency"===(null==i?void 0:i.style)?` ${i.currency}`:""}`},Ve=(t,e,i)=>{var n;let o=null==i?void 0:i.display_precision;return void 0!==e&&(o=e),null!=o?{maximumFractionDigits:o,minimumFractionDigits:o}:Number.isInteger(Number(null===(n=t.attributes)||void 0===n?void 0:n.step))&&Number.isInteger(Number(t.state))?{maximumFractionDigits:0}:null!=t.attributes.step?{maximumFractionDigits:Math.ceil(Math.log10(1/t.attributes.step))}:void 0},Le=(t,e)=>{const i=Object.assign({maximumFractionDigits:2},e);if("string"!=typeof t)return i;if(!e||void 0===e.minimumFractionDigits&&void 0===e.maximumFractionDigits){const e=t.indexOf(".")>-1?t.split(".")[1].length:0;i.minimumFractionDigits=e,i.maximumFractionDigits=e}return i};var Fe,Ue,Be,We,qe;!function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(Fe||(Fe={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(Ue||(Ue={})),function(t){t.local="local",t.server="server"}(Be||(Be={})),function(t){t.language="language",t.system="system",t.DMY="DMY",t.MDY="MDY",t.YMD="YMD"}(We||(We={})),function(t){t.language="language",t.monday="monday",t.tuesday="tuesday",t.wednesday="wednesday",t.thursday="thursday",t.friday="friday",t.saturday="saturday",t.sunday="sunday"}(qe||(qe={}));const Ze=(t,e=2)=>{let i=""+t;for(let n=1;n<e;n++)i=parseInt(i)<10**n?`0${i}`:i;return i};const Ge={ms:1,s:1e3,min:6e4,h:36e5,d:864e5},Ye=(t,e)=>function(t){const e=Math.floor(t/1e3/3600),i=Math.floor(t/1e3%3600/60),n=Math.floor(t/1e3%3600%60),o=Math.floor(t%1e3);return e>0?`${e}:${Ze(i)}:${Ze(n)}`:i>0?`${i}:${Ze(n)}`:n>0||o>0?`${n}${o>0?`.${Ze(o,3)}`:""}`:null}(parseFloat(t)*Ge[e])||"0";var Ke=Number.isNaN||function(t){return"number"==typeof t&&t!=t};function Je(t,e){if(t.length!==e.length)return!1;for(var i=0;i<t.length;i++)if(n=t[i],o=e[i],!(n===o||Ke(n)&&Ke(o)))return!1;var n,o;return!0}function Qe(t,e){void 0===e&&(e=Je);var i=null;function n(){for(var n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];if(i&&i.lastThis===this&&e(n,i.lastArgs))return i.lastResult;var s=t.apply(this,n);return i={lastResult:s,lastArgs:n,lastThis:this},s}return n.clear=function(){i=null},n}const Xe=Qe(((t,e)=>new Intl.DateTimeFormat(t.language,{weekday:"long",month:"long",day:"numeric",timeZone:"server"===t.time_zone?e:void 0}))),ti=(t,e,i)=>ei(e,i.time_zone).format(t),ei=Qe(((t,e)=>new Intl.DateTimeFormat(t.language,{year:"numeric",month:"long",day:"numeric",timeZone:"server"===t.time_zone?e:void 0}))),ii=(t,e,i)=>{var n,o,s,a;const r=ni(e,i.time_zone);if(e.date_format===Ne.language||e.date_format===Ne.system)return r.format(t);const l=r.formatToParts(t),c=null===(n=l.find((t=>"literal"===t.type)))||void 0===n?void 0:n.value,h=null===(o=l.find((t=>"day"===t.type)))||void 0===o?void 0:o.value,d=null===(s=l.find((t=>"month"===t.type)))||void 0===s?void 0:s.value,u=null===(a=l.find((t=>"year"===t.type)))||void 0===a?void 0:a.value,p=l[l.length-1];let m="literal"===(null==p?void 0:p.type)?null==p?void 0:p.value:"";"bg"===e.language&&e.date_format===Ne.YMD&&(m="");return{[Ne.DMY]:`${h}${c}${d}${c}${u}${m}`,[Ne.MDY]:`${d}${c}${h}${c}${u}${m}`,[Ne.YMD]:`${u}${c}${d}${c}${h}${m}`}[e.date_format]},ni=Qe(((t,e)=>{const i=t.date_format===Ne.system?void 0:t.language;return t.date_format===Ne.language||(t.date_format,Ne.system),new Intl.DateTimeFormat(i,{year:"numeric",month:"numeric",day:"numeric",timeZone:"server"===t.time_zone?e:void 0})})),oi=Qe(((t,e)=>new Intl.DateTimeFormat(t.language,{day:"numeric",month:"short",timeZone:"server"===t.time_zone?e:void 0}))),si=Qe(((t,e)=>new Intl.DateTimeFormat(t.language,{month:"long",year:"numeric",timeZone:"server"===t.time_zone?e:void 0}))),ai=Qe(((t,e)=>new Intl.DateTimeFormat(t.language,{month:"long",timeZone:"server"===t.time_zone?e:void 0}))),ri=Qe(((t,e)=>new Intl.DateTimeFormat(t.language,{year:"numeric",timeZone:"server"===t.time_zone?e:void 0}))),li=Qe(((t,e)=>new Intl.DateTimeFormat(t.language,{weekday:"long",timeZone:"server"===t.time_zone?e:void 0}))),ci=Qe(((t,e)=>new Intl.DateTimeFormat(t.language,{weekday:"short",timeZone:"server"===t.time_zone?e:void 0}))),hi=Qe((t=>{if(t.time_format===Ie.language||t.time_format===Ie.system){const e=t.time_format===Ie.language?t.language:void 0,i=(new Date).toLocaleString(e);return i.includes("AM")||i.includes("PM")}return t.time_format===Ie.am_pm})),di=(t,e,i)=>ui(e,i.time_zone).format(t),ui=Qe(((t,e)=>new Intl.DateTimeFormat("en"!==t.language||hi(t)?t.language:"en-u-hc-h23",{hour:"numeric",minute:"2-digit",hour12:hi(t),timeZone:"server"===t.time_zone?e:void 0}))),pi=Qe(((t,e)=>new Intl.DateTimeFormat("en"!==t.language||hi(t)?t.language:"en-u-hc-h23",{hour:hi(t)?"numeric":"2-digit",minute:"2-digit",second:"2-digit",hour12:hi(t),timeZone:"server"===t.time_zone?e:void 0}))),mi=Qe(((t,e)=>new Intl.DateTimeFormat("en"!==t.language||hi(t)?t.language:"en-u-hc-h23",{weekday:"long",hour:hi(t)?"numeric":"2-digit",minute:"2-digit",hour12:hi(t),timeZone:"server"===t.time_zone?e:void 0}))),_i=Qe(((t,e)=>new Intl.DateTimeFormat("en-GB",{hour:"numeric",minute:"2-digit",hour12:!1,timeZone:"server"===t.time_zone?e:void 0}))),fi=(t,e,i)=>gi(e,i.time_zone).format(t),gi=Qe(((t,e)=>new Intl.DateTimeFormat("en"!==t.language||hi(t)?t.language:"en-u-hc-h23",{year:"numeric",month:"long",day:"numeric",hour:hi(t)?"numeric":"2-digit",minute:"2-digit",hour12:hi(t),timeZone:"server"===t.time_zone?e:void 0}))),vi=Qe(((t,e)=>new Intl.DateTimeFormat("en"!==t.language||hi(t)?t.language:"en-u-hc-h23",{year:"numeric",month:"short",day:"numeric",hour:hi(t)?"numeric":"2-digit",minute:"2-digit",hour12:hi(t),timeZone:"server"===t.time_zone?e:void 0}))),bi=Qe(((t,e)=>new Intl.DateTimeFormat("en"!==t.language||hi(t)?t.language:"en-u-hc-h23",{month:"short",day:"numeric",hour:hi(t)?"numeric":"2-digit",minute:"2-digit",hour12:hi(t),timeZone:"server"===t.time_zone?e:void 0}))),yi=Qe(((t,e)=>new Intl.DateTimeFormat("en"!==t.language||hi(t)?t.language:"en-u-hc-h23",{year:"numeric",month:"long",day:"numeric",hour:hi(t)?"numeric":"2-digit",minute:"2-digit",second:"2-digit",hour12:hi(t),timeZone:"server"===t.time_zone?e:void 0}))),wi=(t,e)=>0!=(t.supported_features&e),$i=t=>(t=>wi(t,4)&&"number"==typeof t.in_progress)(t)||!!t.in_progress,Ai=(t,e,i,n,o,s,a)=>{const r=o[e.entity_id];return Oi(t,i,n,r,e.entity_id,e.attributes,s,void 0!==a?a:e.state)},Oi=(t,e,i,n,o,s,a,r)=>{var l;if("unknown"===r||"unavailable"===r)return t(`state.default.${r}`);if(function(t){return!!t.unit_of_measurement||!!t.state_class}(s)){if("duration"===s.device_class&&s.unit_of_measurement&&Ge[s.unit_of_measurement])try{return Ye(r,s.unit_of_measurement)}catch(h){}if("monetary"===s.device_class)try{return ze(r,e,Object.assign({style:"currency",currency:(null==a?void 0:a.units)||s.unit_of_measurement,minimumFractionDigits:2},Ve({state:r,attributes:s},null==a?void 0:a.numeric_precision,n)))}catch(h){}const t=(null==a?void 0:a.show_units)?(null==a?void 0:a.units)?null==a?void 0:a.units:s.unit_of_measurement:void 0,i=t?"%"===t?(t=>{switch(t.language){case"cz":case"de":case"fi":case"fr":case"sk":case"sv":return" ";default:return""}})(e)+"%":` ${t}`:"";return`${ze(r,e,Ve({state:r,attributes:s},null==a?void 0:a.numeric_precision,n))}${i}`}const c=ge(o);if("datetime"===c){const t=new Date(r);return fi(t,e,i)}if(["date","input_datetime","time"].includes(c))try{const t=r.split(" ");if(2===t.length)return fi(new Date(t.join("T")),Object.assign(Object.assign({},e),{time_zone:Be.local}),i);if(1===t.length){if(r.includes("-"))return ti(new Date(`${r}T00:00`),Object.assign(Object.assign({},e),{time_zone:Be.local}),i);if(r.includes(":")){const t=new Date;return di(new Date(`${t.toISOString().split("T")[0]}T${r}`),Object.assign(Object.assign({},e),{time_zone:Be.local}),i)}}return r}catch(d){return r}if("counter"===c||"number"===c||"input_number"===c)return ze(r,e,Ve({state:r,attributes:s},null==a?void 0:a.numeric_precision,n));if(["button","event","input_button","scene","stt","tts"].includes(c)||"sensor"===c&&"timestamp"===s.device_class)try{return fi(new Date(r),e,i)}catch(h){return r}return"update"===c?"on"===r?$i(s)?wi(s,4)&&"number"==typeof s.in_progress?t("ui.card.update.installing_with_progress",{progress:s.in_progress}):t("ui.card.update.installing"):s.latest_version:s.skipped_version===s.latest_version?null!==(l=s.latest_version)&&void 0!==l?l:t("state.default.unavailable"):t("ui.card.update.up_to_date"):(null==n?void 0:n.translation_key)&&t(`component.${n.platform}.entity.${c}.${n.translation_key}.state.${r}`)||s.device_class&&t(`component.${c}.entity_component.${s.device_class}.state.${r}`)||t(`component.${c}.entity_component._.state.${r}`)||r};var ki=Function.prototype.toString,Ti=Object.create,Si=Object.defineProperty,ji=Object.getOwnPropertyDescriptor,Ci=Object.getOwnPropertyNames,xi=Object.getOwnPropertySymbols,Ei=Object.getPrototypeOf,Mi=Object.prototype,Di=Mi.hasOwnProperty,Hi=Mi.propertyIsEnumerable,Ii="function"==typeof xi,Pi="function"==typeof WeakMap,Ni=function(){if(Pi)return function(){return new WeakMap};var t=function(){function t(){this._keys=[],this._values=[]}return t.prototype.has=function(t){return!!~this._keys.indexOf(t)},t.prototype.get=function(t){return this._values[this._keys.indexOf(t)]},t.prototype.set=function(t,e){this._keys.push(t),this._values.push(e)},t}();return function(){return new t}}(),Ri=function(t,e){var i=t.__proto__||Ei(t);if(!i)return Ti(null);var n=i.constructor;if(n===e.Object)return i===e.Object.prototype?{}:Ti(i);if(~ki.call(n).indexOf("[native code]"))try{return new n}catch(Mi){}return Ti(i)},zi=function(t,e,i,n){var o=Ri(t,e);for(var s in n.set(t,o),t)Di.call(t,s)&&(o[s]=i(t[s],n));if(Ii)for(var a=xi(t),r=0,l=a.length,c=void 0;r<l;++r)c=a[r],Hi.call(t,c)&&(o[c]=i(t[c],n));return o},Vi=function(t,e,i,n){var o=Ri(t,e);n.set(t,o);for(var s=Ii?Ci(t).concat(xi(t)):Ci(t),a=0,r=s.length,l=void 0,c=void 0;a<r;++a)if("callee"!==(l=s[a])&&"caller"!==l)if(c=ji(t,l)){c.get||c.set||(c.value=i(t[l],n));try{Si(o,l,c)}catch(h){o[l]=c.value}}else o[l]=i(t[l],n);return o},Li=Array.isArray,Fi=Object.getPrototypeOf,Ui=function(){return"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:(console&&console.error&&console.error('Unable to locate global object, returning "this".'),this)}();function Bi(t,e){var i=!(!e||!e.isStrict),n=e&&e.realm||Ui,o=i?Vi:zi,s=function(t,e){if(!t||"object"!=typeof t)return t;if(e.has(t))return e.get(t);var a,r,l,c=t.__proto__||Fi(t),h=c&&c.constructor;if(!h||h===n.Object)return o(t,n,s,e);if(Li(t)){if(i)return Vi(t,n,s,e);a=new h,e.set(t,a);for(var d=0,u=t.length;d<u;++d)a[d]=s(t[d],e);return a}if(t instanceof n.Date)return new h(t.getTime());if(t instanceof n.RegExp)return(a=new h(t.source,t.flags||(l="",(r=t).global&&(l+="g"),r.ignoreCase&&(l+="i"),r.multiline&&(l+="m"),r.unicode&&(l+="u"),r.sticky&&(l+="y"),l))).lastIndex=t.lastIndex,a;if(n.Map&&t instanceof n.Map)return a=new h,e.set(t,a),t.forEach((function(t,i){a.set(i,s(t,e))})),a;if(n.Set&&t instanceof n.Set)return a=new h,e.set(t,a),t.forEach((function(t){a.add(s(t,e))})),a;if(n.Blob&&t instanceof n.Blob)return t.slice(0,t.size,t.type);if(n.Buffer&&n.Buffer.isBuffer(t))return a=n.Buffer.allocUnsafe?n.Buffer.allocUnsafe(t.length):new h(t.length),e.set(t,a),t.copy(a),a;if(n.ArrayBuffer){if(n.ArrayBuffer.isView(t))return a=new h(t.buffer.slice(0)),e.set(t,a),a;if(t instanceof n.ArrayBuffer)return a=t.slice(0),e.set(t,a),a}return"function"==typeof t.then||t instanceof Error||n.WeakMap&&t instanceof n.WeakMap||n.WeakSet&&t instanceof n.WeakSet?t:o(t,n,s,e)};return s(t,Ni())}Bi.default=Bi,Bi.strict=function(t,e){return Bi(t,{isStrict:!0,realm:e?e.realm:void 0})};const Wi=new Set(["alarm_control_panel","alert","automation","binary_sensor","calendar","camera","climate","cover","device_tracker","fan","group","humidifier","input_boolean","light","lock","media_player","person","plant","remote","schedule","script","siren","sun","switch","timer","update","vacuum"]),qi=(t,e,i)=>{if((void 0!==e?e:null==t?void 0:t.state)===ae)return"var(--state-unavailable-color)";const n=Gi(t,e,i);return n?ke(n):void 0},Zi=(t,e,i,n)=>{const o=void 0!==i?i:e.state,s=Oe(e,i),a=[],r=function(t,e="_"){const i="àáäâãåăæąçćčđďèéěėëêęğǵḧìíïîįłḿǹńňñòóöôœøṕŕřßşśšșťțùúüûǘůűūųẃẍÿýźžż·/_,:;",n=`aaaaaaaaacccddeeeeeeegghiiiiilmnnnnooooooprrsssssttuuuuuuuuuwxyyzzz${e}${e}${e}${e}${e}${e}`,o=new RegExp(i.split("").join("|"),"g");return t.toString().toLowerCase().replace(/\s+/g,e).replace(o,(t=>n.charAt(i.indexOf(t)))).replace(/&/g,`${e}and${e}`).replace(/[^\w-]+/g,"").replace(/-/g,e).replace(new RegExp(`(${e})\\1+`,"g"),"$1").replace(new RegExp(`^${e}+`),"").replace(new RegExp(`${e}+$`),"")}(o,"_"),l=s?"active":"inactive";if(n&&ue.includes(n)&&"inactive"==l)return pe;const c=e.attributes.device_class;return c&&a.push(`--state-${t}-${c}-${r}-color`),a.push(`--state-${t}-${r}-color`,`--state-${t}-${l}-color`,`--state-${l}-color`),a},Gi=(t,e,i)=>{const n=void 0!==e?e:null==t?void 0:t.state,o=ge(t.entity_id),s=t.attributes.device_class;if("sensor"===o&&"battery"===s){const t=(t=>{const e=Number(t);if(!isNaN(e))return e>=70?"--state-sensor-battery-high-color":e>=30?"--state-sensor-battery-medium-color":"--state-sensor-battery-low-color"})(n);if(t)return[t]}if("group"===o){const n=(t=>{const e=t.attributes.entity_id||[],i=[...new Set(e.map((t=>ge(t))))];return 1===i.length?i[0]:void 0})(t);if(n&&Wi.has(n))return Zi(n,t,e,i)}return Wi.has(o)?Zi(o,t,e,i):i&&ue.includes(i)?pe:void 0},Yi=Object.create(null),Ki=36e5,Ji=24*Ki,Qi=365.25*Ji;Yi.year=Yi.yr=Yi.y=Qi,Yi.month=Yi.mo=Yi.mth=Qi/12,Yi.week=Yi.wk=Yi.w=7*Ji,Yi.day=Yi.d=Ji,Yi.hour=Yi.hr=Yi.h=Ki,Yi.minute=Yi.min=Yi.m=6e4,Yi.second=Yi.sec=Yi.s=1e3,Yi.millisecond=Yi.millisec=Yi.ms=1,Yi.microsecond=Yi.microsec=Yi.us=Yi.µs=.001,Yi.nanosecond=Yi.nanosec=Yi.ns=1e-6,Yi.group=",",Yi.decimal=".",Yi.placeholder=" _";const Xi=/((?:\d{1,16}(?:\.\d{1,16})?|\.\d{1,16})(?:[eE][-+]?\d{1,4})?)\s?([\p{L}]{0,14})/gu;function tn(t="",e="ms"){let i,n=null;return String(t).replace(new RegExp(`(\\d)[${tn.unit.placeholder}${tn.unit.group}](\\d)`,"g"),"$1$2").replace(tn.unit.decimal,".").replace(Xi,((t,o,s)=>{if(s)s=s.toLowerCase();else if(i){for(const e in tn.unit)if(tn.unit[e]<i){s=e;break}}else s=e;i=s=tn.unit[s]||tn.unit[s.replace(/s$/,"")],s&&(n=(n||0)+o*s)})),n&&n/(tn.unit[e]||1)*("-"===t[0]?-1:1)}tn.unit=Yi;const en=Object.create(Yi);en.jahr=en.j=Yi.y,en.monat=Yi.mo,en.woche=Yi.w,en.tag=en.t=Yi.d,en.stunde=Yi.h,en.minute=Yi.m,en.sekunde=Yi.s,en.millisekunde=Yi.ms,en.mikrosekunde=Yi.us,en.nanosekunde=Yi.ns,en.group=".",en.decimal=",";const nn=Object.create(Yi);nn.año=nn.a=Yi.y,nn.mes=Yi.mo,nn.semana=Yi.w,nn.día=Yi.d,nn.hora=Yi.h,nn.minuto=Yi.m,nn.segundo=Yi.s,nn.milisegundo=Yi.ms,nn.microsegundo=Yi.us,nn.nanosegundo=Yi.ns,nn.group=".",nn.decimal=",";const on=Object.create(Yi);on.année=on.an=on.a=Yi.y,on.mois=Yi.mo,on.semaine=on.sem=Yi.w,on.jour=on.j=Yi.d,on.heure=Yi.h,on.minute=Yi.m,on.seconde=Yi.s,on.milliseconde=Yi.ms,on.microseconde=Yi.us,on.nanoseconde=Yi.ns,on.group=" ",on.decimal=",";const sn=Object.create(Yi);sn.年=sn.年間=Yi.y,sn.月=sn.ヶ月=Yi.mo,sn.週=sn.週間=Yi.w,sn.日=Yi.d,sn.時間=sn.時=Yi.h,sn.分=sn.分間=Yi.m,sn.秒=sn.秒間=Yi.s,sn.ミリ秒=Yi.ms,sn.マイクロ秒=Yi.us,sn.ナノ秒=Yi.ns,sn.group=",",sn.decimal=".";const an=Object.create(Yi);an.ano=an.a=Yi.y,an.mês=an.mes=Yi.mo,an.semana=an.sem=Yi.w,an.dia=Yi.d,an.hora=Yi.h,an.minuto=Yi.m,an.segundo=an.seg=Yi.s,an.milissegundo=Yi.ms,an.microssegundo=Yi.us,an.nanossegundo=Yi.ns,an.group=".",an.decimal=",";const rn=Object.create(Yi);rn.год=rn.г=Yi.y,rn.месяц=rn.мес=Yi.mo,rn.неделя=rn.нед=Yi.w,rn.день=rn.д=Yi.d,rn.час=rn.ч=Yi.h,rn.минута=rn.мин=Yi.m,rn.секунда=rn.сек=Yi.s,rn.миллисекунда=rn.мс=Yi.ms,rn.микросекунда=rn.мкс=Yi.us,rn.наносекунда=rn.нс=Yi.ns,rn.group=" ",rn.decimal=",";const ln=Object.create(Yi);ln.年=Yi.y,ln.月=Yi.mo,ln.周=ln.星期=Yi.w,ln.天=ln.日=Yi.d,ln.小时=ln.时=Yi.h,ln.分钟=ln.分=Yi.m,ln.秒=ln.秒钟=Yi.s,ln.毫秒=Yi.ms,ln.微秒=Yi.us,ln.纳秒=Yi.ns,ln.group=",",ln.decimal=".";const cn={de:en,en:Yi,es:nn,fr:on,ja:sn,pt:an,ru:rn,zh:ln},hn=(t,e,i)=>{(i=(i=i.toLocaleLowerCase()).startsWith("en")?"en":i)&&i in cn?tn.unit=cn[i]:console.warn(`button-card: parseDuration does not support locale '${i}'`);const n=tn(t,e);return null!=n?n:void 0};let dn=window.cardHelpers;const un=new Promise((async t=>{dn&&t(),window.loadCardHelpers&&(dn=await window.loadCardHelpers(),window.cardHelpers=dn,t())}));window.buttonCardCustomActionsHandler||(window.buttonCardCustomActionsHandler=function(t){var e;t.detail.buttonCardCustomAction&&(null===(e=t.detail.buttonCardCustomAction)||void 0===e||e.callback(t))},document.body.addEventListener("ll-custom",window.buttonCardCustomActionsHandler)),console.info("%c BUTTON-CARD %c v6.0.0 ","color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray"),window.customCards=window.customCards||[],window.customCards.push({type:"button-card",name:"Button-Card",preview:!1,description:"A massively customizable custom button card"});let pn=class extends nt{constructor(){super(...arguments),this.preview=!1,this._spinnerActive=!1,this._cards={},this._cardsConfig={},this._entities=[],this._initialSetupComplete=!1,this._cardClickable=!1,this._iconClickable=!1,this._hasIconActions=!1,this._hidden=!1,this._cardMomentary=!1,this._iconMomentary=!1,this._cardRipple=!1,this._protectedAction=void 0}get _doIHaveEverything(){return!!this._hass&&!!this._config&&this.isConnected}static getStubConfig(t,e,i){const n=xe(t,1,e,i,["light","switch"]);return Ae()?{entity:n[0]||"",section_mode:!0,grid_options:{rows:2,columns:6}}:{entity:n[0]||"",section_mode:!1}}_computeHidden(){var t;let e;e=!(this.preview||!this._initialSetupComplete||void 0===(null===(t=this._config)||void 0===t?void 0:t.hidden))&&this._getTemplateOrValue(this._stateObj,this._config.hidden),e!==this._hidden&&(this._hidden=e,this.hidden=e,Et(this,"card-visibility-changed"))}set hass(t){this._hass=t,Object.keys(this._cards).forEach((t=>{this._cards[t].hass=this._hass})),this._initialSetupComplete||this._finishSetup()}disconnectedCallback(){super.disconnectedCallback(),this._clearInterval(),this._updateTimerCancel()}connectedCallback(){super.connectedCallback(),this._initialSetupComplete?(this._updateTimerStart(),this._startTimerCountdown()):this._finishSetup()}_evaluateVariablesSkipError(t){var e;if(this._evaledVariables={},null===(e=this._config)||void 0===e?void 0:e.variables){Object.keys(this._config.variables).sort().forEach((e=>{try{this._evaledVariables[e]=this._objectEvalTemplate(t,this._config.variables[e])}catch(jt){}}))}}_finishSetup(){if(!this._initialSetupComplete&&this._doIHaveEverything){if(this._evaluateVariablesSkipError(),this._config.entity){const t=this._getTemplateOrValue(void 0,this._config.entity);this._config.entity=t,this._stateObj=this._hass.states[t]}if(this._evaluateVariablesSkipError(this._stateObj),this._isActionDoingSomething(this._stateObj,this._config.press_action)||this._isActionDoingSomething(this._stateObj,this._config.release_action)?this._config=Object.assign({tap_action:{action:"none"}},this._config):this._config.entity&&ce.has(ge(this._config.entity))?this._config=Object.assign({tap_action:{action:"toggle"}},this._config):this._config.entity&&he.has(ge(this._config.entity))?this._config=Object.assign({tap_action:{action:"call-service",service:"input_button.press",target:{entity_id:this._config.entity}}},this._config):this._config.entity?this._config=Object.assign({tap_action:{action:"more-info"}},this._config):this._config=Object.assign({tap_action:{action:"none"}},this._config),(this._isActionDoingSomething(this._stateObj,this._config.press_action)||this._isActionDoingSomething(this._stateObj,this._config.release_action))&&(this._isActionDoingSomething(this._stateObj,this._config.tap_action)||this._isActionDoingSomething(this._stateObj,this._config.hold_action)||this._isActionDoingSomething(this._stateObj,this._config.double_tap_action)))throw new Error('button-card: If you use press_action or release_action, then tap_action, hold_action and double_tap_action must be "none" or not set at all.');if((this._isActionDoingSomething(this._stateObj,this._config.icon_press_action)||this._isActionDoingSomething(this._stateObj,this._config.icon_release_action))&&(this._isActionDoingSomething(this._stateObj,this._config.icon_tap_action)||this._isActionDoingSomething(this._stateObj,this._config.icon_hold_action)||this._isActionDoingSomething(this._stateObj,this._config.icon_double_tap_action)))throw new Error('button-card: If you use icon_press_action or icon_release_action, then icon_tap_action, icon_hold_action and icon_double_tap_action must be "none" or not set at all.');const t=JSON.stringify(this._config);if(this._entities=[],Array.isArray(this._config.triggers_update))this._config.triggers_update.forEach((t=>{try{const e=this._getTemplateOrValue(this._stateObj,t);null==e||this._entities.includes(e)||this._entities.push(e)}catch(jt){}}));else if("string"==typeof this._config.triggers_update){const t=this._getTemplateOrValue(this._stateObj,this._config.triggers_update);t&&"all"!==t?this._entities.push(t):this._config.triggers_update=t}if("all"!==this._config.triggers_update){const e=new RegExp(/states\[\s*('|\\")([a-zA-Z0-9_]+\.[a-zA-Z0-9_]+)\1\s*\]/,"gm"),i=new RegExp(/states\[\s*('|\\")([a-zA-Z0-9_]+\.[a-zA-Z0-9_]+)\1\s*\]/,"m"),n=t.match(e);null==n||n.forEach((t=>{const e=t.match(i);e&&!this._entities.includes(e[2])&&this._entities.push(e[2])}))}this._config.entity&&!this._entities.includes(this._config.entity)&&this._entities.push(this._config.entity),this._expandTriggerGroups();const e=new RegExp("(?:[^\\[]|^)\\[{3}[^\\[].*[^\\]]\\]{3}(?:[^\\]]|$)","s");this._triggersAll=!("all"!==this._config.triggers_update||!t.match(e)),this._startTimerCountdown(),this._updateTimerStart(),this._computeHidden(),this._initialSetupComplete=!0}}_startTimerCountdown(){if(this._config&&this._config.entity&&"timer"===ge(this._config.entity)){const t=this._hass.states[this._config.entity];this._startInterval(t)}}_createCard(t){if(dn)return dn.createCardElement(t);{const e=((t,e=!1)=>{const i=(t,e)=>n("hui-error-card",{type:"error",error:t,config:e}),n=(t,e)=>{const n=window.document.createElement(t);try{if(!n.setConfig)return;n.setConfig(e)}catch(o){return console.error(t,o),i(o.message,e)}return n};if(!t||"object"!=typeof t||!e&&!t.type)return i("No type defined",t);let o=t.type;if(o&&o.startsWith("custom:"))o=o.substr(7);else if(e)if(Ee.has(o))o=`hui-${o}-row`;else{if(!t.entity)return i("Invalid config given.",t);const e=t.entity.split(".",1)[0];o=`hui-${Me[e]||"text"}-entity-row`}else o=`hui-${o}-card`;if(customElements.get(o))return n(o,t);const s=i(`Custom element doesn't exist: ${t.type}.`,t);s.style.display="None";const a=setTimeout((()=>{s.style.display=""}),2e3);return customElements.whenDefined(t.type).then((()=>{clearTimeout(a),Et(s,"ll-rebuild",{},s)})),s})(t);return un.then((()=>{Et(e,"ll-rebuild",{})})),e}}static get styles(){return De}render(){var t;if(!this._config||!this._hass)return N``;this._stateObj=this._config.entity?this._hass.states[this._config.entity]:void 0;try{if(this._evaledVariables={},null===(t=this._config)||void 0===t?void 0:t.variables){Object.keys(this._config.variables).sort().forEach((t=>{this._evaledVariables[t]=this._objectEvalTemplate(this._stateObj,this._config.variables[t])}))}return this._cardHtml()}catch(jt){jt.stack?console.error(jt.stack):console.error(jt);const e=document.createElement("hui-error-card");return e.preview=this.preview,e.setConfig({type:"error",error:jt.name,message:jt.message}),N` ${e} `}}shouldUpdate(t){var e;if(t.has("_config"))return!0;if("update_timer"===(null===(e=this._config)||void 0===e?void 0:e.triggers_update))return!!t.has("_updateTimerMS")||this._updateTimerChanged();return!!(this._triggersAll||t.has("_timeRemaining")||t.has("_updateTimerMS")||t.has("_spinnerActive"))||function(t,e){if(e.has("_config"))return!0;const i=e.get("_hass");if(i)return t._entities.some((function(e){return(null==i?void 0:i.states[e])!==t._hass.states[e]}));return!1}(this,t)?(this._expandTriggerGroups(),!0):!!t.has("preview")}willUpdate(t){t.has("preview")&&Object.keys(this._cards).forEach((t=>{this._cards[t].preview=this.preview}))}updated(t){if(super.updated(t),this._config&&this._config.entity&&"timer"===ge(this._config.entity)&&t.has("_hass")){const e=this._hass.states[this._config.entity],i=t.get("_hass");(i?i.states[this._config.entity]:void 0)!==e?this._startInterval(e):e||this._clearInterval()}this.updateComplete.then((()=>{var t,e,i,n;const o=null===(t=this.shadowRoot)||void 0===t?void 0:t.getElementById("tooltip");o&&(null===(e=o.eventController)||void 0===e||e.abort(),o.eventController=new AbortController,o.anchor=void 0,null===(n=(i=o).handleForChange)||void 0===n||n.call(i))})),this._updateTimer(),this._computeHidden()}_clearInterval(){this._interval&&(window.clearInterval(this._interval),this._interval=void 0)}_startInterval(t){this._clearInterval(),this._calculateRemaining(t),"active"===t.state&&(this._interval=window.setInterval((()=>this._calculateRemaining(t)),1e3))}_calculateRemaining(t){t.attributes.remaining&&(this._timeRemaining=(t=>{if(!t.attributes.remaining)return;let e=Te(t.attributes.remaining);if("active"===t.state){const i=(new Date).getTime(),n=new Date(t.last_changed).getTime();e=Math.max(e-(i-n)/1e3,0)}return e})(t))}_computeTimeDisplay(t){if(t)return function(t){const e=Math.floor(t/3600),i=Math.floor(t%3600/60),n=Math.floor(t%3600%60);return e>0?`${e}:${Se(i)}:${Se(n)}`:i>0?`${i}:${Se(n)}`:n>0?""+n:null}(this._timeRemaining||Te(t.attributes.duration))}_getMatchingConfigState(t){if(!this._config.state)return;const e=this._config.state.find((t=>"template"===t.operator));if(!t&&!e)return;let i;const n=this._config.state.find((e=>{if(!e.operator)return t&&this._getTemplateOrValue(t,e.value)==t.state;switch(e.operator){case"==":return t&&t.state==this._getTemplateOrValue(t,e.value);case"<=":return t&&t.state<=this._getTemplateOrValue(t,e.value);case"<":return t&&t.state<this._getTemplateOrValue(t,e.value);case">=":return t&&t.state>=this._getTemplateOrValue(t,e.value);case">":return t&&t.state>this._getTemplateOrValue(t,e.value);case"!=":return t&&t.state!=this._getTemplateOrValue(t,e.value);case"regex":return!(!t||!t.state.match(this._getTemplateOrValue(t,e.value)));case"template":return this._getTemplateOrValue(t,e.value);case"default":return i=e,!1;default:return!1}}));return!n&&i?i:n}_localize(t,e,i,n=!0,o){var s;return Ai(this._hass.localize,t,this._hass.locale,this._hass.config,this._hass.entities,{numeric_precision:"card"===i?null===(s=this._config)||void 0===s?void 0:s.numeric_precision:i,show_units:n,units:o},e)}_relativeTime(t,e=!1){return t?N`
        <ha-relative-time
          id="relative-time"
          class="ellipsis"
          .hass="${this._hass}"
          .datetime="${t}"
          .capitalize="${e}"
        ></ha-relative-time>
      `:""}_getTemplateHelpers(){return{localize:this._localize.bind(this),formatDateTime:t=>fi(new Date(t),this._hass.locale,this._hass.config),formatShortDateTimeWithYear:t=>{return e=new Date(t),i=this._hass.locale,n=this._hass.config,vi(i,n.time_zone).format(e);var e,i,n},formatShortDateTime:t=>{return e=new Date(t),i=this._hass.locale,n=this._hass.config,bi(i,n.time_zone).format(e);var e,i,n},formatDateTimeWithSeconds:t=>{return e=new Date(t),i=this._hass.locale,n=this._hass.config,yi(i,n.time_zone).format(e);var e,i,n},formatDateTimeNumeric:t=>{return e=new Date(t),i=this._hass.locale,n=this._hass.config,`${ii(e,i,n)}, ${di(e,i,n)}`;var e,i,n},relativeTime:this._relativeTime.bind(this),formatTime:t=>di(new Date(t),this._hass.locale,this._hass.config),formatTimeWithSeconds:t=>{return e=new Date(t),i=this._hass.locale,n=this._hass.config,pi(i,n.time_zone).format(e);var e,i,n},formatTimeWeekday:t=>{return e=new Date(t),i=this._hass.locale,n=this._hass.config,mi(i,n.time_zone).format(e);var e,i,n},formatTime24h:t=>{return e=new Date(t),i=this._hass.locale,n=this._hass.config,_i(i,n.time_zone).format(e);var e,i,n},formatDateWeekdayDay:t=>{return e=new Date(t),i=this._hass.locale,n=this._hass.config,Xe(i,n.time_zone).format(e);var e,i,n},formatDate:t=>ti(new Date(t),this._hass.locale,this._hass.config),formatDateNumeric:t=>ii(new Date(t),this._hass.locale,this._hass.config),formatDateShort:t=>{return e=new Date(t),i=this._hass.locale,n=this._hass.config,oi(i,n.time_zone).format(e);var e,i,n},formatDateMonthYear:t=>{return e=new Date(t),i=this._hass.locale,n=this._hass.config,si(i,n.time_zone).format(e);var e,i,n},formatDateMonth:t=>{return e=new Date(t),i=this._hass.locale,n=this._hass.config,ai(i,n.time_zone).format(e);var e,i,n},formatDateYear:t=>{return e=new Date(t),i=this._hass.locale,n=this._hass.config,ri(i,n.time_zone).format(e);var e,i,n},formatDateWeekday:t=>{return e=new Date(t),i=this._hass.locale,n=this._hass.config,li(i,n.time_zone).format(e);var e,i,n},formatDateWeekdayShort:t=>{return e=new Date(t),i=this._hass.locale,n=this._hass.config,ci(i,n.time_zone).format(e);var e,i,n},parseDuration:(t,e,i)=>{var n;return void 0===e&&(e="ms"),void 0===i&&(i=null===(n=this._hass.locale)||void 0===n?void 0:n.language),hn(t,e,i)},toastMessage:t=>this._sendToastMessage.bind(this)({message:t}),toast:t=>this._sendToastMessage.bind(this)(t)}}_evalTemplate(t,e){try{return new Function("states","entity","user","hass","variables","html","helpers",`'use strict'; ${e}`).call(this,this._hass.states,t,this._hass.user,this._hass,this._evaledVariables,N,this._getTemplateHelpers())}catch(jt){const i=e.length<=100?e.trim():`${e.trim().substring(0,98)}...`;throw jt.message=`${jt.name}: ${jt.message} in '${i}'`,jt.name="ButtonCardJSTemplateError",jt}}_objectEvalTemplate(t,e){const i=Bi(e);return this._getTemplateOrValue(t,i)}_getTemplateOrValue(t,e){if(["number","boolean"].includes(typeof e))return e;if(!e)return e;if("object"==typeof e)return Object.keys(e).forEach((i=>{e[i]=this._getTemplateOrValue(t,e[i])})),e;const i=e.trim(),n=new RegExp("(\\[{3,})(.*?)(\\]{3,})","s"),o=i.match(n);return o&&4===o.length?3===o[1].length&&3===o[3].length?this._evalTemplate(t,o[2]):o[1].length===o[3].length?i.slice(1,-1):e:e}_getColorForLightEntity(t,e,i){let n=me;return ue.includes(n)&&(n=ke(pe)),t&&(Oe(t)?(n=t.attributes.rgb_color?`rgb(${t.attributes.rgb_color.join(",")})`:e&&t.attributes.color_temp&&t.attributes.min_mireds&&t.attributes.max_mireds?function(t,e,i){const n=new ie("rgb(255, 160, 0)"),o=new ie("rgb(166, 209, 255)"),s=new ie("white"),a=(t-e)/(i-e)*100;return a<50?ne(o).mix(s,2*a).toRgbString():ne(s).mix(n,2*(a-50)).toRgbString()}(t.attributes.color_temp,t.attributes.min_mireds,t.attributes.max_mireds):qi(t,t.state,i)||me,t.attributes.brightness&&(n=function(t,e,i){const n=new ie(ve(t,e));if(n.isValid){const t=n.mix("black",100-i).toString();if(t)return t}return e}(this,n,(t.attributes.brightness+245)/5))):n=qi(t,t.state,i)||me),n}_buildCssColorAttribute(t,e){var i,n;let o,s="";return(null==e?void 0:e.color)?s=e.color:this._config.color&&(s=this._config.color),de.includes(s)&&(!t||t&&"light"!==ge(t.entity_id))&&(s=""),o=de.includes(s)?this._getColorForLightEntity(t,"auto-no-temperature"!==s,null===(i=this._config)||void 0===i?void 0:i.color_type):s||(t&&qi(t,t.state,null===(n=this._config)||void 0===n?void 0:n.color_type)||me),o}_buildIcon(t,e){if(!this._config.show_icon)return;let i;if(null==e?void 0:e.icon)i=e.icon;else{if(!this._config.icon)return;i=this._config.icon}return this._getTemplateOrValue(t,i)}_buildEntityPicture(t,e){if(!this._config.show_entity_picture||!t&&!e&&!this._config.entity_picture)return;let i;(null==e?void 0:e.entity_picture)?i=e.entity_picture:this._config.entity_picture?i=this._config.entity_picture:t&&(i=t.attributes&&t.attributes.entity_picture?t.attributes.entity_picture:void 0);const n=this._getTemplateOrValue(t,i);return n&&je(n)?Ce(this._hass,n).then((t=>t.url)).catch((()=>"")):n}_buildStyleGeneric(t,e,i){var n,o;let s={};if((null===(n=this._config.styles)||void 0===n?void 0:n[i])&&(s=Object.assign(s,...this._config.styles[i])),null===(o=null==e?void 0:e.styles)||void 0===o?void 0:o[i]){let t={};t=Object.assign(t,...e.styles[i]),s=Object.assign(Object.assign({},s),t)}return Object.keys(s).forEach((e=>{s[e]=this._getTemplateOrValue(t,s[e])})),s}_buildCustomStyleGeneric(t,e,i){var n,o,s,a;let r={};if((null===(o=null===(n=this._config.styles)||void 0===n?void 0:n.custom_fields)||void 0===o?void 0:o[i])&&(r=Object.assign(r,...this._config.styles.custom_fields[i])),null===(a=null===(s=null==e?void 0:e.styles)||void 0===s?void 0:s.custom_fields)||void 0===a?void 0:a[i]){let t={};t=Object.assign(t,...e.styles.custom_fields[i]),r=Object.assign(Object.assign({},r),t)}return Object.keys(r).forEach((e=>{r[e]=this._getTemplateOrValue(t,r[e])})),r}_buildName(t,e){if(!1===this._config.show_name)return;let i;var n;return(null==e?void 0:e.name)?i=e.name:this._config.name?i=this._config.name:t&&(i=t.attributes&&t.attributes.friendly_name?t.attributes.friendly_name:(n=t.entity_id).substr(n.indexOf(".")+1)),this._getTemplateOrValue(t,i)}_buildStateString(t){let e;return this._config.show_state&&t&&t.state&&("timer"===ge(t.entity_id)?"idle"===t.state||0===this._timeRemaining?e=Ai(this._hass.localize,t,this._hass.locale,this._hass.config,this._hass.entities,this._config):(e=this._computeTimeDisplay(t),"paused"===t.state&&(e+=` (${Ai(this._hass.localize,t,this._hass.locale,this._hass.config,this._hass.entities,this._config)})`)):e=Ai(this._hass.localize,t,this._hass.locale,this._hass.config,this._hass.entities,this._config)),e}_buildLastChanged(t,e){return this._config.show_last_changed&&t?N`
          <ha-relative-time
            id="label"
            class="ellipsis"
            .hass="${this._hass}"
            .datetime="${t.last_changed}"
            style=${St(e)}
          ></ha-relative-time>
        `:void 0}_buildLabel(t,e){if(!this._config.show_label)return;let i;return i=(null==e?void 0:e.label)?e.label:this._config.label,this._getTemplateOrValue(t,i)}_buildCustomFields(t,e){let i=N``;const n={},o={};return this._config.custom_fields&&Object.keys(this._config.custom_fields).forEach((e=>{const i=this._config.custom_fields[e];i.card?i.do_not_eval?o[e]=Bi(i.card):o[e]=this._objectEvalTemplate(t,i.card):n[e]=this._getTemplateOrValue(t,i)})),(null==e?void 0:e.custom_fields)&&Object.keys(e.custom_fields).forEach((i=>{const s=e.custom_fields[i];s.card?s.do_not_eval?o[i]=Bi(s.card):o[i]=this._objectEvalTemplate(t,s.card):n[i]=this._getTemplateOrValue(t,s)})),Object.keys(n).forEach((o=>{if(null!=n[o]){const s=Object.assign(Object.assign({},this._buildCustomStyleGeneric(t,e,o)),{"grid-area":o});i=N`
          ${i}
          <div id=${o} class="ellipsis" style=${St(s)}>${this._unsafeHTMLorNot(n[o])}</div>
        `}})),Object.keys(o).forEach((n=>{var s,a;if(null!=o[n]){const r=Object.assign(Object.assign({},this._buildCustomStyleGeneric(t,e,n)),{"grid-area":n});let l;Mt(this._cardsConfig[n],o[n])?l=this._cards[n]:(null===(s=this._cardsConfig[n])||void 0===s?void 0:s.type)===(null===(a=o[n])||void 0===a?void 0:a.type)?(l=this._cards[n],l.preview=this.preview,this._cardsConfig[n]=Bi(o[n]),l.setConfig(o[n])):(l=this._createCard(o[n]),l.preview=this.preview,this._cards[n]=l,this._cardsConfig[n]=Bi(o[n])),l.hass=this._hass,i=N`
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
            style=${St(r)}
          >
            ${l}
          </div>
        `}})),i}_hasChildCards(t){return!!t&&Object.keys(t).some((e=>!!t[e].card))}_isActionDoingSomething(t,e){if(!e)return!1;if("string"==typeof e){const i=this._getTemplateOrValue(t,e);return!(!i||["none",null,void 0].includes(i.action))}if("object"==typeof e&&e.action){const i=this._getTemplateOrValue(t,e.action);return!["none",null,void 0].includes(i)}return!1}_computeIsClickable(t,e){const i=this._isActionDoingSomething(t,this._config.tap_action),n=this._isActionDoingSomething(t,this._config.hold_action),o=this._isActionDoingSomething(t,this._config.double_tap_action),s=this._isActionDoingSomething(t,this._config.press_action),a=this._isActionDoingSomething(t,this._config.release_action),r=this._isActionDoingSomething(t,this._config.icon_tap_action),l=this._isActionDoingSomething(t,this._config.icon_hold_action),c=this._isActionDoingSomething(t,this._config.icon_double_tap_action),h=this._isActionDoingSomething(t,this._config.icon_press_action),d=this._isActionDoingSomething(t,this._config.icon_release_action),u=this._hasChildCards(this._config.custom_fields)||!(!e||!this._hasChildCards(e.custom_fields)),p=i||n||o||s||a;this._cardClickable=p||u,this._hasIconActions=r||l||c||h||d,this._iconClickable=this._cardClickable||this._hasIconActions,this._cardRipple=p||this._hasIconActions,this._cardMomentary=s||a,this._iconMomentary=h||d}_rotate(t){return!!(null==t?void 0:t.spin)}_blankCardColoredHtml(t){const e=Object.assign({background:"none","box-shadow":"none","border-style":"none"},t);return N`
      <ha-card class="disabled" style=${St(e)}>
        <div></div>
      </ha-card>
    `}_cardHtml(){var t,e,i,n,o,s;const a=this._getMatchingConfigState(this._stateObj);this._computeIsClickable(this._stateObj,a);let r="var(--state-inactive-color)";r=(null==a?void 0:a.color)&&!de.includes(a.color)?a.color:(null===(t=this._config)||void 0===t?void 0:t.color)&&!de.includes(this._config.color)?this._stateObj?Oe(this._stateObj)?(null===(e=this._config)||void 0===e?void 0:e.color)||r:qi(this._stateObj,this._stateObj.state,null===(i=this._config)||void 0===i?void 0:i.color_type)||me:this._config.color:this._buildCssColorAttribute(this._stateObj,a);let l=r,c={},h={},d={};const u={},p=this._buildStyleGeneric(this._stateObj,a,"lock"),m=this._buildStyleGeneric(this._stateObj,a,"spinner"),_=this._buildStyleGeneric(this._stateObj,a,"card"),f=this._buildStyleGeneric(this._stateObj,a,"tooltip"),g={"button-card-main":!0,disabled:!this._cardClickable,section:!!(null===(n=this._config)||void 0===n?void 0:n.section_mode)};switch((null===(o=this._config)||void 0===o?void 0:o.section_mode)&&this.classList.add("section"),_.width&&(this.style.setProperty("flex","0 0 auto"),this.style.setProperty("max-width","fit-content")),this._config.color_type){case"blank-card":return this._blankCardColoredHtml(_);case"card":case"label-card":{const t=function(t,e){const i=new ie(ve(t,e)).getLuminance(),n=new ie({r:225,g:225,b:225}),o=n.getLuminance(),s=new ie({r:28,g:28,b:28}),a=s.getLuminance();return 0===i||(Math.max(i,o)+.05)/Math.min(i,o+.05)>(Math.max(i,a)+.05)/Math.min(i,a+.05)?n.toRgbString():s.toRgbString()}(this,r);c.color=t,h.color=t,c["background-color"]=r,c=Object.assign(Object.assign({},c),_),l="inherit",this.style.setProperty("--button-card-color",t);break}default:c=_,this.style.setProperty("--button-card-color",l)}this._config.aspect_ratio?(u["--aspect-ratio"]=this._config.aspect_ratio,c.position="absolute"):u.display="inline",this.style.setProperty("--button-card-light-color",this._getColorForLightEntity(this._stateObj,!0)),this.style.setProperty("--button-card-light-color-no-temperature",this._getColorForLightEntity(this._stateObj,!1)),this.style.setProperty("--button-card-ripple-color",l),h=Object.assign(Object.assign({},h),p),d=Object.assign(Object.assign({},d),m);const v=this._config.extra_styles?N`
          <style>
            ${this._getTemplateOrValue(this._stateObj,this._config.extra_styles)}
          </style>
        `:N``,b=this._partialActionEval(this._config.hold_action);return N`
      ${v}
      <div id="aspect-ratio" style=${St(u)}>
        <ha-card
          id="card"
          class=${xt(g)}
          style=${St(c)}
          @wa-show=${this._tooltipShow}
          @action=${t=>this._handleAction(t,{isIcon:!1})}
          .actionHandler=${Pt({hasDoubleClick:this._isActionDoingSomething(this._stateObj,this._config.double_tap_action),hasHold:this._isActionDoingSomething(this._stateObj,this._config.hold_action),repeat:null==b?void 0:b.repeat,repeatLimit:null==b?void 0:b.repeat_limit,isMomentary:this._cardMomentary,disableKbd:null===(s=this._config)||void 0===s?void 0:s.disable_kbd})}
          .config="${this._config}"
        >
          ${this._buttonContent(this._stateObj,a,l)}
          <ha-ripple .disabled=${!this._cardRipple}></ha-ripple>
        </ha-card>
        ${this._getLock(h)} ${this._getSpinner(d,a)}
        ${this._getTooltip(f,a)}
      </div>
    `}_getTooltip(t,e){var i,n,o,s,a;let r,l;r="string"==typeof this._config.tooltip?{content:this._getTemplateOrValue(this._stateObj,this._config.tooltip)}:null!==(i=this._objectEvalTemplate(this._stateObj,this._config.tooltip))&&void 0!==i?i:{},l="string"==typeof(null==e?void 0:e.tooltip)?{content:this._getTemplateOrValue(this._stateObj,null==e?void 0:e.tooltip)}:null!==(n=this._objectEvalTemplate(this._stateObj,null==e?void 0:e.tooltip))&&void 0!==n?n:{};const c=Object.assign(Object.assign({},r),l);if(c&&c.content){const e=hn(String(null!==(o=null==c?void 0:c.delay)&&void 0!==o?o:"150"),"ms","en"),i=hn(String(null!==(a=null!==(s=null==c?void 0:c.hide_delay)&&void 0!==s?s:null==c?void 0:c.delay)&&void 0!==a?a:"150"),"ms","en"),n=!(null==c?void 0:c.arrow)||void 0;return N`
        <wa-tooltip
          id="tooltip"
          for="card"
          @wa-show=${this._tooltipShow}
          placement=${lt(c.placement||void 0)}
          distance=${lt(c.distance||void 0)}
          skidding=${lt(c.skidding||void 0)}
          show-delay=${e}
          hide-delay=${i}
          without-arrow=${n||z}
          style=${St(t)}
        >
          <span class="tooltip">${this._unsafeHTMLorNot(c.content)}</span>
        </wa-tooltip>
      `}return N``}_getSpinner(t,e){const i=this._getTemplateOrValue(this._stateObj,null==e?void 0:e.spinner)||this._getTemplateOrValue(this._stateObj,this._config.spinner);return this._spinnerActive||i?N`
        <div id="spinner" style=${St(t)}>
          <div id="spinner-background"></div>
          <ha-spinner></ha-spinner>
        </div>
      `:N``}_getLock(t){var e;return this._config.lock&&this._getTemplateOrValue(this._stateObj,this._config.lock.enabled)?N`
        <div
          id="overlay"
          style=${St(t)}
          @action=${this._handleUnlockType}
          .actionHandler=${Pt({hasDoubleClick:"double_tap"===this._config.lock.unlock,hasHold:"hold"===this._config.lock.unlock,disableKbd:null===(e=this._config)||void 0===e?void 0:e.disable_kbd})}
          .config="${this._config}"
        >
          <ha-icon id="lock" icon=${this._config.lock.lock_icon}></ha-icon>
        </div>
      `:N``}_buttonContent(t,e,i){const n=this._buildName(t,e),o=(null==e?void 0:e.state_display)||this._config.state_display||void 0,s=this._config.show_state&&o?this._getTemplateOrValue(t,o):void 0,a=void 0!==s?s:this._buildStateString(t),r=function(t,e){if(!t&&!e)return;let i;return i=e?t?`${t}: ${e}`:e:t,i}(n,a);switch(this._config.layout){case"icon_name_state":case"name_state":return this._gridHtml(t,e,this._config.layout,i,r,void 0);default:return this._gridHtml(t,e,this._config.layout,i,n,a)}}_unsafeHTMLorNot(t){return t.strings||t.values?t:Ct(`${t}`)}_gridHtml(t,e,i,n,o,s){const a=this._getIconHtml(t,e,n),r=[i],l=this._buildLabel(t,e),c=this._buildStyleGeneric(t,e,"name"),h=this._buildStyleGeneric(t,e,"state"),d=this._buildStyleGeneric(t,e,"label"),u=this._buildLastChanged(t,d),p=this._buildStyleGeneric(t,e,"grid");return a||r.push("no-icon"),o||r.push("no-name"),s||r.push("no-state"),l||u||r.push("no-label"),N`
      <div id="container" class=${r.join(" ")} style=${St(p)}>
        ${a||""}
        ${o?N`
              <div id="name" class="ellipsis" style=${St(c)}>
                ${this._unsafeHTMLorNot(o)}
              </div>
            `:""}
        ${s?N`
              <div id="state" class="ellipsis" style=${St(h)}>
                ${this._unsafeHTMLorNot(s)}
              </div>
            `:""}
        ${l&&!u?N`
              <div id="label" class="ellipsis" style=${St(d)}>
                ${this._unsafeHTMLorNot(l)}
              </div>
            `:""}
        ${u||""} ${this._buildCustomFields(t,e)}
      </div>
    `}_getIconHtml(t,e,i){var n,o;const s=this._buildIcon(t,e),a=this._buildEntityPicture(t,e),r=this._buildStyleGeneric(t,e,"entity_picture"),l=this._buildStyleGeneric(t,e,"icon"),c=this._buildStyleGeneric(t,e,"img_cell"),h=this._buildStyleGeneric(t,e,"card"),d=Object.assign({color:i,width:this._config.size,"--ha-icon-display":h.height?"inline":void 0,position:this._config.aspect_ratio||h.height?"absolute":"relative"},l),u=Object.assign(Object.assign({},d),r),p={enabled:this._iconClickable},m=this._buildLiveStream(u),_=this._config.show_icon&&(s||t);if(_||a){let i;t&&(i=ge(t.entity_id));const r=this._partialActionEval(this._config.icon_hold_action);return N`
        <div id="img-cell" style=${St(c)}>
          ${!_||a||m?"":N`
                <ha-state-icon
                  class=${xt(p)}
                  .state=${t}
                  .stateObj=${t}
                  .hass=${this._hass}
                  ?data-domain=${i}
                  data-state=${lt(null==t?void 0:t.state)}
                  style=${St(d)}
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
                  .actionHandler=${this._hasIconActions?Pt({hasDoubleClick:this._isActionDoingSomething(t,this._config.icon_double_tap_action),hasHold:this._isActionDoingSomething(t,this._config.icon_hold_action),repeat:null==r?void 0:r.repeat,repeatLimit:null==r?void 0:r.repeat_limit,isMomentary:this._iconMomentary,disableKbd:null===(n=this._config)||void 0===n?void 0:n.disable_kbd}):void 0}
                ></ha-state-icon>
              `}
          ${m||""}
          ${a&&!m?N`
                <img
                  class=${xt(p)}
                  src=${Ot(a)}
                  style=${St(u)}
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
                  .actionHandler=${this._hasIconActions?Pt({hasDoubleClick:this._isActionDoingSomething(t,this._config.icon_double_tap_action),hasHold:this._isActionDoingSomething(t,this._config.icon_hold_action),repeat:null==r?void 0:r.repeat,repeatLimit:null==r?void 0:r.repeat_limit,isMomentary:this._iconMomentary,disableKbd:null===(o=this._config)||void 0===o?void 0:o.disable_kbd}):void 0}
                />
              `:""}
        </div>
      `}}_buildLiveStream(t){return this._config.show_live_stream&&this._config.entity&&"camera"===ge(this._config.entity)?N`
        <hui-image
          .hass=${this._hass}
          .cameraImage=${this._config.entity}
          .entity=${this._config.entity}
          .cameraView=${"live"}
          .aspectRatio=${this._config.live_stream_aspect_ratio}
          .fitMode=${this._config.live_stream_fit_mode}
          style=${St(t)}
        ></hui-image>
      `:void 0}_configFromLLTemplates(t,e){const i=e.template;if(!i)return e;let n,o={};const s=i&&Array.isArray(i)?i:[i];return null==s||s.forEach((e=>{var i;if(!(null===(i=t.config.button_card_templates)||void 0===i?void 0:i[e]))throw new Error(`Button-card template '${e}' is missing!`);const s=this._configFromLLTemplates(t,t.config.button_card_templates[e]);o=be(o,s),n=ye(n,s.state)})),o=be(o,e),o.state=ye(n,e.state),o}setConfig(t){if(!t)throw new Error("Invalid configuration");this._initialSetupComplete&&(this._initialSetupComplete=!1),this._cards={},this._cardsConfig={};const e=$e()||we();let i=Bi(t);i=this._configFromLLTemplates(e,i),this._config=Object.assign(Object.assign({type:"custom:button-card",group_expand:!1,hold_action:{action:"none"},double_tap_action:{action:"none"},press_action:{action:"none"},release_action:{action:"none"},icon_tap_action:{action:"none"},icon_hold_action:{action:"none"},icon_double_tap_action:{action:"none"},icon_press_action:{action:"none"},icon_release_action:{action:"none"},layout:"vertical",size:"40%",color_type:"icon",show_name:!0,show_state:!1,show_icon:!0,show_units:!0,show_label:!1,show_entity_picture:!1,show_live_stream:!1,card_size:3},i),{lock:Object.assign({enabled:!1,duration:5,unlock:"tap",lock_icon:"mdi:lock-outline",unlock_icon:"mdi:lock-open-outline"},i.lock)}),this._initialSetupComplete||this._finishSetup()}_loopGroup(t){t&&t.forEach((t=>{var e,i;(null===(e=this._hass)||void 0===e?void 0:e.states[t])&&((null===(i=this._hass.states[t].attributes)||void 0===i?void 0:i.entity_id)?this._loopGroup(this._hass.states[t].attributes.entity_id):this._entities.includes(t)||this._entities.push(t))}))}_expandTriggerGroups(){var t;this._hass&&(null===(t=this._config)||void 0===t?void 0:t.group_expand)&&this._entities&&this._entities.forEach((t=>{var e,i,n,o,s;(null===(n=null===(i=null===(e=this._hass)||void 0===e?void 0:e.states[t])||void 0===i?void 0:i.attributes)||void 0===n?void 0:n.entity_id)&&this._loopGroup(null===(s=null===(o=this._hass)||void 0===o?void 0:o.states[t].attributes)||void 0===s?void 0:s.entity_id)}))}_updateTimerStart(){this._updateTimerMS=Date.now(),this._updateTimer()}_updateTimerCancel(){this._updateTimeout&&window.clearTimeout(this._updateTimeout)}_updateTimerChanged(){var t;if(null===(t=this._config)||void 0===t?void 0:t.update_timer){const t=this._getTemplateOrValue(this._stateObj,this._config.update_timer),e=hn(t,"ms","en");if(e&&e>=100&&e!==this._updateTimerDuration)return!0}return!1}_updateTimer(){var t;if(this._updateTimeout&&(window.clearTimeout(this._updateTimeout),this._updateTimeout=void 0),null===(t=this._config)||void 0===t?void 0:t.update_timer){const t=this._getTemplateOrValue(this._stateObj,this._config.update_timer),e=hn(t,"ms","en");e&&e>=100&&(this._updateTimerDuration=e,this._updateTimeout=window.setTimeout((()=>{this._updateRefresh()}),e))}}_updateRefresh(){this._updateTimerMS=Date.now(),this._updateTimeout=void 0}getCardSize(){var t;return(null===(t=this._config)||void 0===t?void 0:t.card_size)||3}getGridOptions(){var t;if(null===(t=this._config)||void 0===t?void 0:t.section_mode)return{rows:2,columns:6,min_rows:1,min_columns:1}}_partialActionEval(t){if(!t)return{action:"none"};if("string"==typeof t)return this._objectEvalTemplate(this._stateObj,t);const e=Bi(t);return["action","repeat","repeat_limit"].forEach((t=>{e[t]=this._getTemplateOrValue(this._stateObj,e[t])})),e}_evalActions(t,e){var i;let n;n="string"==typeof e?this._objectEvalTemplate(this._stateObj,e):Bi(e);const o=this._getTemplateOrValue(this._stateObj,null==n?void 0:n.action);if("none"===o||!o){const t={};return t[fe]={action:"none"},t}const s=this._getTemplateOrValue(this._stateObj,null==n?void 0:n.repeat),a=this._getTemplateOrValue(this._stateObj,null==n?void 0:n.repeat_limit),r=this._getTemplateOrValue(this._stateObj,null==n?void 0:n.sound);let l=this._getTemplateOrValue(this._stateObj,null==n?void 0:n.confirmation);!l&&t.confirmation&&(l=this._objectEvalTemplate(this._stateObj,t.confirmation));const c=this._getTemplateOrValue(this._stateObj,null==n?void 0:n.haptic),h=Object.assign(Object.assign({},this._objectEvalTemplate(this._stateObj,t.protect)),this._objectEvalTemplate(this._stateObj,null==n?void 0:n.protect)),d={};switch(o){case"javascript":d[fe]={action:"fire-dom-event",buttonCardCustomAction:{callback:this._customActionsCallback.bind(this),type:"javascript",data:{javascript:null==n?void 0:n.javascript}}};break;case"multi-actions":d[fe]={action:"fire-dom-event",buttonCardCustomAction:{callback:this._customActionsCallback.bind(this),type:"multi-actions",data:{multiActions:null==n?void 0:n.actions}}};break;case"toast":d[fe]={action:"fire-dom-event",buttonCardCustomAction:{callback:this._customActionsCallback.bind(this),type:"toast",data:{toast:null==n?void 0:n.toast}}};break;case"toggle":d.entity=this._getTemplateOrValue(this._stateObj,null==n?void 0:n.entity)||this._getTemplateOrValue(this._stateObj,t.entity),d[fe]={action:"toggle"};break;case"more-info":d.entity=this._getTemplateOrValue(this._stateObj,null==n?void 0:n.entity)||this._getTemplateOrValue(this._stateObj,t.entity),d[fe]={action:"more-info"};break;case"navigate":d[fe]={action:"navigate",navigation_path:this._getTemplateOrValue(this._stateObj,null==n?void 0:n.navigation_path),navigation_replace:this._getTemplateOrValue(this._stateObj,null==n?void 0:n.navigation_replace)};break;case"url":d[fe]={action:"url",url_path:this._getTemplateOrValue(this._stateObj,null==n?void 0:n.url_path)};break;case"perform-action":case"call-service":d[fe]={action:"perform-action",perform_action:this._getTemplateOrValue(this._stateObj,null==n?void 0:n.perform_action)||this._getTemplateOrValue(this._stateObj,null==n?void 0:n.service),data:this._objectEvalTemplate(this._stateObj,null==n?void 0:n.data)||this._objectEvalTemplate(this._stateObj,null==n?void 0:n.service_data),target:this._objectEvalTemplate(this._stateObj,null==n?void 0:n.target)},"entity"===(null===(i=d[fe].data)||void 0===i?void 0:i.entity_id)&&(d[fe].data.entity_id=this._getTemplateOrValue(this._stateObj,t.entity));break;case"assist":d[fe]={action:"assist",pipeline_id:this._getTemplateOrValue(this._stateObj,null==n?void 0:n.pipeline_id),start_listening:this._getTemplateOrValue(this._stateObj,null==n?void 0:n.start_listening)};break;case"fire-dom-event":d[fe]=Object.assign({action:"fire-dom-event"},this._objectEvalTemplate(this._stateObj,n));break;default:return{[fe]:{action:"none"}}}return d[fe]=Object.assign(Object.assign({},d[fe]),{repeat:s,repeat_limit:a,sound:r,haptic:c,confirmation:l,protect:h}),h&&(h.password||h.pin)&&(this._protectedAction=Bi(d)),d}_handleRippleIcon(t){this._ripple.then((e=>{var i,n;if(e)if("pointerenter"===t.type){const o=null!==(n=null===(i=t.target)||void 0===i?void 0:i.getBoundingClientRect())&&void 0!==n?n:null,s=e.getBoundingClientRect(),a={top:0,left:0,bottom:0,right:0},r=t.target?getComputedStyle(t.target):null,l=r?parseInt(r.getPropertyValue("--button-card-ripple-icon-inset-padding")):12;let c="";o&&s&&(a.top=o.top-s.top-l,a.top=a.top<0?0:a.top,a.left=o.left-s.left-l,a.left=a.left<0?0:a.left,a.bottom=s.bottom-o.bottom-l,a.bottom=a.bottom<0?0:a.bottom,a.right=s.right-o.right-l,a.right=a.right<0?0:a.right,c=`${a.top}px ${a.right}px ${a.bottom}px ${a.left}px`),e.setAttribute("icon",""),""!=c&&e.style.setProperty("--dynamic-ripple-icon-inset",c)}else"pointerleave"===t.type&&(e.removeAttribute("icon"),e.style.removeProperty("--dynamic-ripple-icon-inset"))}))}_handleAction(t,e){var i;if(e.isIcon&&this._hasIconActions&&t.stopPropagation&&t.stopPropagation(),null===(i=t.detail)||void 0===i?void 0:i.action){const i=this._config;if(!i)return;const n=t.detail.action,o=e.isIcon?`icon_${n}_action`:`${n}_action`;this._isActionDoingSomething(this._stateObj,i[o])&&this._buildActionConfig(o)}}_buildActionConfig(t){var e,i,n,o;const s=this._config;if(!s)return;const a=this._evalActions(s,s[t]);(null===(i=null===(e=a[fe])||void 0===e?void 0:e.protect)||void 0===i?void 0:i.pin)?window.cardHelpers.showEnterCodeDialog(this,{submit:t=>this._protectedConfirmedCallback.bind(this)(t,"pin"),cancel:this._cancelledCallback.bind(this),codeFormat:"number"}):(null===(o=null===(n=a[fe])||void 0===n?void 0:n.protect)||void 0===o?void 0:o.password)?window.cardHelpers.showPromptDialog(this,{title:"Password",inputLabel:"Password",inputType:"password",confirm:t=>this._protectedConfirmedCallback.bind(this)(t,"password"),cancel:this._cancelledCallback.bind(this)}):this._executeAction(a)}_executeAction(t){var e;const i=null===(e=t[fe])||void 0===e?void 0:e.sound;if(i)if(je(i))Ce(this._hass,i).then((t=>{new Audio(t.url).play()})).catch((()=>{console.error(`button-card: Error loading media source: ${i}`)}));else{new Audio(i).play()}(async(t,e,i,n)=>{Et(t,"hass-action",{config:i,action:n})})(this,this._hass,t,"tap")}async _customActionsCallback(t){var e,i,n,o,s,a,r,l,c;if(!t.detail||!t.detail.buttonCardCustomAction)return;const h=t.detail.buttonCardCustomAction;switch(h.type){case"javascript":this._getTemplateOrValue(this._stateObj,null===(e=h.data)||void 0===e?void 0:e.javascript);break;case"multi-actions":let t=null===(i=h.data)||void 0===i?void 0:i.multiActions;"string"==typeof t&&(t=this._objectEvalTemplate(this._stateObj,t));const d=t=>new Promise((e=>setTimeout(e,t)));if(Array.isArray(t)){this._spinnerActive=t.some((t=>"string"!=typeof t&&((null==t?void 0:t.delay)||(null==t?void 0:t.wait_completion))));for(const e of t)if("string"!=typeof e&&(null==e?void 0:e.delay)){let t=this._getTemplateOrValue(this._stateObj,e.delay);t=hn(t||"","ms","en"),t&&await d(t)}else if("string"!=typeof e&&(null==e?void 0:e.wait_completion)){const t=e;await d(500);const i=this._getTemplateOrValue(this._stateObj,t.timeout);let n=0;const o=hn(i||"","ms","en")||0;for(;(n<o||0===o)&&!this._getTemplateOrValue(this._stateObj,t.wait_completion);)await d(500),n+=500}else{const t=this._evalActions(this._config,e);null===(n=t[fe])||void 0===n||delete n.repeat,null===(o=t[fe])||void 0===o||delete o.repeat_limit,null===(s=t[fe])||void 0===s||delete s.sound,null===(a=t[fe])||void 0===a||delete a.haptic,null===(r=t[fe])||void 0===r||delete r.confirmation,null===(l=t[fe])||void 0===l||delete l.protect,this._executeAction(t)}this._spinnerActive=!1}break;case"toast":let u=null===(c=h.data)||void 0===c?void 0:c.toast;u=this._objectEvalTemplate(this._stateObj,u),this._sendToastMessage(u)}}_protectedConfirmedCallback(t,e){var i,n,o,s,a,r,l;if(this._protectedAction&&this._config)if(t===(null===(n=null===(i=this._protectedAction[fe])||void 0===i?void 0:i.protect)||void 0===n?void 0:n[e]))this._sendToastMessage({message:null===(s=null===(o=this._protectedAction[fe])||void 0===o?void 0:o.protect)||void 0===s?void 0:s.success_message}),null===(a=this._protectedAction[fe])||void 0===a||delete a.protect,this._executeAction(this._protectedAction);else{const t=null===(l=null===(r=this._protectedAction[fe])||void 0===r?void 0:r.protect)||void 0===l?void 0:l.failure_message;this._sendToastMessage({message:t||_e[e]})}this._protectedAction=void 0}_cancelledCallback(){this._protectedAction=void 0}_sendToastMessage(t){void 0!==(null==t?void 0:t.message)&&this.dispatchEvent(new CustomEvent("hass-notification",{bubbles:!0,composed:!0,detail:Object.assign({},t)}))}_handleUnlockType(t){const e=this._config;e&&e.lock.unlock===t.detail.action&&this._handleLock()}_handleLock(){var t,e,i;const n=this.shadowRoot.getElementById("lock");if(!n)return;if(this._config.lock.exemptions){if(!(null===(t=this._hass.user)||void 0===t?void 0:t.name)||!this._hass.user.id)return;let e=!1;if(this._config.lock.exemptions.forEach((t=>{var i,n;(!e&&t.user===(null===(i=this._hass.user)||void 0===i?void 0:i.id)||t.username===(null===(n=this._hass.user)||void 0===n?void 0:n.name))&&(e=!0)})),!e)return n.classList.add("invalid"),void window.setTimeout((()=>{n&&n.classList.remove("invalid")}),3e3)}const o=this.shadowRoot.getElementById("overlay");o.style.setProperty("pointer-events","none"),n&&(n.icon=this._config.lock.unlock_icon,(null===(i=null===(e=this._config)||void 0===e?void 0:e.lock)||void 0===i?void 0:i.keep_unlock_icon)||n.classList.add("hidden")),window.setTimeout((()=>{var t,e;o.style.setProperty("pointer-events",""),n&&((null===(e=null===(t=this._config)||void 0===t?void 0:t.lock)||void 0===e?void 0:e.keep_unlock_icon)||n.classList.remove("hidden"),n.icon=this._config.lock.lock_icon)}),1e3*this._config.lock.duration)}_stopPropagation(t){t.stopPropagation()}_sendToParent(t){var e,i,n;const o=(null===(e=t.type)||void 0===e?void 0:e.startsWith("touch"))?new TouchEvent(t.type,t):(null===(i=t.type)||void 0===i?void 0:i.startsWith("mouse"))?new MouseEvent(t.type,t):new CustomEvent(t.type,t);t.stopPropagation(),null===(n=this.parentElement)||void 0===n||n.dispatchEvent(o);const s=new CustomEvent(t.type,Object.assign(Object.assign({},t),{bubbles:!1,composed:!1,detail:{ignore:!0}}));this._ripple.then((t=>{var e;t&&(null===(e=t.parentElement)||void 0===e||e.dispatchEvent(s))}))}_tooltipShow(t){var e,i,n,o;if(t.stopPropagation(),(null===(e=t.detail)||void 0===e?void 0:e.card)&&t.detail.card!==this){const t=null===(i=this.shadowRoot)||void 0===i?void 0:i.querySelector("#tooltip");if(t){const e=null!==(n=t.hideDelay)&&void 0!==n?n:400;window.setTimeout((()=>{var e;null===(e=t.hide)||void 0===e||e.call(t)}),e)}}else{const e=new CustomEvent(t.type,Object.assign(Object.assign({},t),{bubbles:!0,composed:!0,detail:{card:this}}));null===(o=this.parentElement)||void 0===o||o.dispatchEvent(e)}}};t([at()],pn.prototype,"_hass",void 0),t([at()],pn.prototype,"_config",void 0),t([at()],pn.prototype,"_timeRemaining",void 0),t([at()],pn.prototype,"_updateTimerMS",void 0),t([at({type:Boolean,reflect:!0})],pn.prototype,"preview",void 0),t([at({type:Boolean})],pn.prototype,"_spinnerActive",void 0),t([function(t){return(({finisher:t,descriptor:e})=>(i,n)=>{var o;if(void 0===n){const n=null!==(o=i.originalKey)&&void 0!==o?o:i.key,s=null!=e?{kind:"method",placement:"prototype",key:n,descriptor:e(i.key)}:{...i,key:n};return null!=t&&(s.finisher=function(e){t(e,n)}),s}{const o=i.constructor;void 0!==e&&Object.defineProperty(i,n,e(n)),null==t||t(o,n)}})({descriptor:e=>({async get(){var e;return await this.updateComplete,null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t)},enumerable:!0,configurable:!0})})}("ha-ripple")],pn.prototype,"_ripple",void 0),pn=t([(t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:n}=e;return{kind:i,elements:n,finisher(e){customElements.define(t,e)}}})(t,e))("button-card")],pn);
