var t="simple-thermostat";const e="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,i=(t,e,i=null)=>{for(;e!==i;){const i=e.nextSibling;t.removeChild(e),e=i}},s=`{{lit-${String(Math.random()).slice(2)}}}`,n=`\x3c!--${s}--\x3e`,o=new RegExp(`${s}|${n}`);class a{constructor(t,e){this.parts=[],this.element=e;const i=[],n=[],a=document.createTreeWalker(e.content,133,null,!1);let l=0,h=-1,p=0;const{strings:u,values:{length:g}}=t;for(;p<g;){const t=a.nextNode();if(null!==t){if(h++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:i}=e;let s=0;for(let t=0;t<i;t++)r(e[t].name,"$lit$")&&s++;for(;s-- >0;){const e=u[p],i=d.exec(e)[2],s=i.toLowerCase()+"$lit$",n=t.getAttribute(s);t.removeAttribute(s);const a=n.split(o);this.parts.push({type:"attribute",index:h,name:i,strings:a}),p+=a.length-1}}"TEMPLATE"===t.tagName&&(n.push(t),a.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(s)>=0){const s=t.parentNode,n=e.split(o),a=n.length-1;for(let e=0;e<a;e++){let i,o=n[e];if(""===o)i=c();else{const t=d.exec(o);null!==t&&r(t[2],"$lit$")&&(o=o.slice(0,t.index)+t[1]+t[2].slice(0,-"$lit$".length)+t[3]),i=document.createTextNode(o)}s.insertBefore(i,t),this.parts.push({type:"node",index:++h})}""===n[a]?(s.insertBefore(c(),t),i.push(t)):t.data=n[a],p+=a}}else if(8===t.nodeType)if(t.data===s){const e=t.parentNode;null!==t.previousSibling&&h!==l||(h++,e.insertBefore(c(),t)),l=h,this.parts.push({type:"node",index:h}),null===t.nextSibling?t.data="":(i.push(t),h--),p++}else{let e=-1;for(;-1!==(e=t.data.indexOf(s,e+1));)this.parts.push({type:"node",index:-1}),p++}}else a.currentNode=n.pop()}for(const t of i)t.parentNode.removeChild(t)}}const r=(t,e)=>{const i=t.length-e.length;return i>=0&&t.slice(i)===e},l=t=>-1!==t.index,c=()=>document.createComment(""),d=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function h(t,e){const{element:{content:i},parts:s}=t,n=document.createTreeWalker(i,133,null,!1);let o=u(s),a=s[o],r=-1,l=0;const c=[];let d=null;for(;n.nextNode();){r++;const t=n.currentNode;for(t.previousSibling===d&&(d=null),e.has(t)&&(c.push(t),null===d&&(d=t)),null!==d&&l++;void 0!==a&&a.index===r;)a.index=null!==d?-1:a.index-l,o=u(s,o),a=s[o]}c.forEach((t=>t.parentNode.removeChild(t)))}const p=t=>{let e=11===t.nodeType?0:1;const i=document.createTreeWalker(t,133,null,!1);for(;i.nextNode();)e++;return e},u=(t,e=-1)=>{for(let i=e+1;i<t.length;i++){const e=t[i];if(l(e))return i}return-1};const g=new WeakMap,f=t=>"function"==typeof t&&g.has(t),m={},y={};class v{constructor(t,e,i){this.__parts=[],this.template=t,this.processor=e,this.options=i}update(t){let e=0;for(const i of this.__parts)void 0!==i&&i.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=e?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),i=[],s=this.template.parts,n=document.createTreeWalker(t,133,null,!1);let o,a=0,r=0,c=n.nextNode();for(;a<s.length;)if(o=s[a],l(o)){for(;r<o.index;)r++,"TEMPLATE"===c.nodeName&&(i.push(c),n.currentNode=c.content),null===(c=n.nextNode())&&(n.currentNode=i.pop(),c=n.nextNode());if("node"===o.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(c.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(c,o.name,o.strings,this.options));a++}else this.__parts.push(void 0),a++;return e&&(document.adoptNode(t),customElements.upgrade(t)),t}}const _=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:t=>t}),b=` ${s} `;class w{constructor(t,e,i,s){this.strings=t,this.values=e,this.type=i,this.processor=s}getHTML(){const t=this.strings.length-1;let e="",i=!1;for(let o=0;o<t;o++){const t=this.strings[o],a=t.lastIndexOf("\x3c!--");i=(a>-1||i)&&-1===t.indexOf("--\x3e",a+1);const r=d.exec(t);e+=null===r?t+(i?b:n):t.substr(0,r.index)+r[1]+r[2]+"$lit$"+r[3]+s}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");let e=this.getHTML();return void 0!==_&&(e=_.createHTML(e)),t.innerHTML=e,t}}const S=t=>null===t||!("object"==typeof t||"function"==typeof t),x=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class ${constructor(t,e,i){this.dirty=!0,this.element=t,this.name=e,this.strings=i,this.parts=[];for(let t=0;t<i.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new P(this)}_getValue(){const t=this.strings,e=t.length-1,i=this.parts;if(1===e&&""===t[0]&&""===t[1]){const t=i[0].value;if("symbol"==typeof t)return String(t);if("string"==typeof t||!x(t))return t}let s="";for(let n=0;n<e;n++){s+=t[n];const e=i[n];if(void 0!==e){const t=e.value;if(S(t)||!x(t))s+="string"==typeof t?t:String(t);else for(const e of t)s+="string"==typeof e?e:String(e)}}return s+=t[e],s}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class P{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===m||S(t)&&t===this.value||(this.value=t,f(t)||(this.committer.dirty=!0))}commit(){for(;f(this.value);){const t=this.value;this.value=m,t(this)}this.value!==m&&this.committer.commit()}}class O{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(c()),this.endNode=t.appendChild(c())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=c()),t.__insert(this.endNode=c())}insertAfterPart(t){t.__insert(this.startNode=c()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){if(null===this.startNode.parentNode)return;for(;f(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=m,t(this)}const t=this.__pendingValue;t!==m&&(S(t)?t!==this.value&&this.__commitText(t):t instanceof w?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):x(t)?this.__commitIterable(t):t===y?(this.value=y,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,i="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=i:this.__commitNode(document.createTextNode(i)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof v&&this.value.template===e)this.value.update(t.values);else{const i=new v(e,t.processor,this.options),s=i._clone();i.update(t.values),this.__commitNode(s),this.value=i}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let i,s=0;for(const n of t)i=e[s],void 0===i&&(i=new O(this.options),e.push(i),0===s?i.appendIntoPart(this):i.insertAfterPart(e[s-1])),i.setValue(n),i.commit(),s++;s<e.length&&(e.length=s,this.clear(i&&i.endNode))}clear(t=this.startNode){i(this.startNode.parentNode,t.nextSibling,this.endNode)}}class C{constructor(t,e,i){if(this.value=void 0,this.__pendingValue=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=i}setValue(t){this.__pendingValue=t}commit(){for(;f(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=m,t(this)}if(this.__pendingValue===m)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=m}}class E extends ${constructor(t,e,i){super(t,e,i),this.single=2===i.length&&""===i[0]&&""===i[1]}_createPart(){return new k(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class k extends P{}let N=!1;(()=>{try{const t={get capture(){return N=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class T{constructor(t,e,i){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=i,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;f(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=m,t(this)}if(this.__pendingValue===m)return;const t=this.__pendingValue,e=this.value,i=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),s=null!=t&&(null==e||i);i&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),s&&(this.__options=j(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=m}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const j=t=>t&&(N?{capture:t.capture,passive:t.passive,once:t.once}:t.capture);function z(t){let e=A.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},A.set(t.type,e));let i=e.stringsArray.get(t.strings);if(void 0!==i)return i;const n=t.strings.join(s);return i=e.keyString.get(n),void 0===i&&(i=new a(t,t.getTemplateElement()),e.keyString.set(n,i)),e.stringsArray.set(t.strings,i),i}const A=new Map,V=new WeakMap;const U=new class{handleAttributeExpressions(t,e,i,s){const n=e[0];if("."===n){return new E(t,e.slice(1),i).parts}if("@"===n)return[new T(t,e.slice(1),s.eventContext)];if("?"===n)return[new C(t,e.slice(1),i)];return new $(t,e,i).parts}handleTextExpression(t){return new O(t)}};"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.3.0");const R=(t,...e)=>new w(t,e,"html",U),M=(t,e)=>`${t}--${e}`;let F=!0;void 0===window.ShadyCSS?F=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),F=!1);const I=t=>e=>{const i=M(e.type,t);let n=A.get(i);void 0===n&&(n={stringsArray:new WeakMap,keyString:new Map},A.set(i,n));let o=n.stringsArray.get(e.strings);if(void 0!==o)return o;const r=e.strings.join(s);if(o=n.keyString.get(r),void 0===o){const i=e.getTemplateElement();F&&window.ShadyCSS.prepareTemplateDom(i,t),o=new a(e,i),n.keyString.set(r,o)}return n.stringsArray.set(e.strings,o),o},L=["html","svg"],q=new Set,H=(t,e,i)=>{q.add(t);const s=i?i.element:document.createElement("template"),n=e.querySelectorAll("style"),{length:o}=n;if(0===o)return void window.ShadyCSS.prepareTemplateStyles(s,t);const a=document.createElement("style");for(let t=0;t<o;t++){const e=n[t];e.parentNode.removeChild(e),a.textContent+=e.textContent}(t=>{L.forEach((e=>{const i=A.get(M(e,t));void 0!==i&&i.keyString.forEach((t=>{const{element:{content:e}}=t,i=new Set;Array.from(e.querySelectorAll("style")).forEach((t=>{i.add(t)})),h(t,i)}))}))})(t);const r=s.content;i?function(t,e,i=null){const{element:{content:s},parts:n}=t;if(null==i)return void s.appendChild(e);const o=document.createTreeWalker(s,133,null,!1);let a=u(n),r=0,l=-1;for(;o.nextNode();)for(l++,o.currentNode===i&&(r=p(e),i.parentNode.insertBefore(e,i));-1!==a&&n[a].index===l;){if(r>0){for(;-1!==a;)n[a].index+=r,a=u(n,a);return}a=u(n,a)}}(i,a,r.firstChild):r.insertBefore(a,r.firstChild),window.ShadyCSS.prepareTemplateStyles(s,t);const l=r.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)e.insertBefore(l.cloneNode(!0),e.firstChild);else if(i){r.insertBefore(a,r.firstChild);const t=new Set;t.add(a),h(i,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const B={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},D=(t,e)=>e!==t&&(e==e||t==t),W={attribute:!0,type:String,converter:B,reflect:!1,hasChanged:D};class J extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach(((e,i)=>{const s=this._attributeNameForProperty(i,e);void 0!==s&&(this._attributeToPropertyMap.set(s,i),t.push(s))})),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach(((t,e)=>this._classProperties.set(e,t)))}}static createProperty(t,e=W){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const i="symbol"==typeof t?Symbol():`__${t}`,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const n=this[t];this[e]=s,this.requestUpdateInternal(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||W}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty("finalized")||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const i of e)this.createProperty(i,t[i])}}static _attributeNameForProperty(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,i=D){return i(t,e)}static _propertyValueFromAttribute(t,e){const i=e.type,s=e.converter||B,n="function"==typeof s?s:s.fromAttribute;return n?n(t,i):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const i=e.type,s=e.converter;return(s&&s.toAttribute||B.toAttribute)(t,i)}initialize(){this._updateState=0,this._updatePromise=new Promise((t=>this._enableUpdatingResolver=t)),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach(((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}}))}_applyInstanceProperties(){this._instanceProperties.forEach(((t,e)=>this[e]=t)),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,i){e!==i&&this._attributeToProperty(t,i)}_propertyToAttribute(t,e,i=W){const s=this.constructor,n=s._attributeNameForProperty(t,i);if(void 0!==n){const t=s._propertyValueToAttribute(e,i);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(n):this.setAttribute(n,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(8&this._updateState)return;const i=this.constructor,s=i._attributeToPropertyMap.get(t);if(void 0!==s){const t=i.getPropertyOptions(s);this._updateState=16|this._updateState,this[s]=i._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState}}requestUpdateInternal(t,e,i){let s=!0;if(void 0!==t){const n=this.constructor;i=i||n.getPropertyOptions(t),n._valueHasChanged(this[t],e,i.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==i.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,i))):s=!1}!this._hasRequestedUpdate&&s&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,e){return this.requestUpdateInternal(t,e),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(t){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t?this.update(e):this._markUpdated()}catch(e){throw t=!1,this._markUpdated(),e}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach(((t,e)=>this._propertyToAttribute(e,this[e],t))),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}J.finalized=!0;const Y=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?Object.assign(Object.assign({},e),{finisher(i){i.createProperty(e.key,t)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function G(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):Y(t,e)}const K=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Q=Symbol();class X{constructor(t,e){if(e!==Q)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(K?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}(window.litElementVersions||(window.litElementVersions=[])).push("2.4.0");const Z={};class tt extends J{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(Array.isArray(t)){const e=(t,i)=>t.reduceRight(((t,i)=>Array.isArray(i)?e(i,t):(t.add(i),t)),i),i=e(t,new Set),s=[];i.forEach((t=>s.unshift(t))),this._styles=s}else this._styles=void 0===t?[]:[t];this._styles=this._styles.map((t=>{if(t instanceof CSSStyleSheet&&!K){const e=Array.prototype.slice.call(t.cssRules).reduce(((t,e)=>t+e.cssText),"");return new X(String(e),Q)}return t}))}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?K?this.renderRoot.adoptedStyleSheets=t.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map((t=>t.cssText)),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){const e=this.render();super.update(t),e!==Z&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach((t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)})))}render(){return Z}}tt.finalized=!0,tt.render=(t,e,s)=>{if(!s||"object"!=typeof s||!s.scopeName)throw new Error("The `scopeName` option is required.");const n=s.scopeName,o=V.has(e),a=F&&11===e.nodeType&&!!e.host,r=a&&!q.has(n),l=r?document.createDocumentFragment():e;if(((t,e,s)=>{let n=V.get(e);void 0===n&&(i(e,e.firstChild),V.set(e,n=new O(Object.assign({templateFactory:z},s))),n.appendInto(e)),n.setValue(t),n.commit()})(t,l,Object.assign({templateFactory:I(n)},s)),r){const t=V.get(l);V.delete(l);const s=t.value instanceof v?t.value.template:void 0;H(n,l,s),i(e,e.firstChild),e.appendChild(l),V.set(e,t)}!o&&a&&window.ShadyCSS.styleElement(e.host)};var et=((t,...e)=>{const i=e.reduce(((e,i,s)=>e+(t=>{if(t instanceof X)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+t[s+1]),t[0]);return new X(i,Q)})`:host {
  --st-default-spacing: 4px;
}
ha-card {
  -webkit-font-smoothing: var(--paper-font-body1_-_-webkit-font-smoothing);
  font-size: var(--paper-font-body1_-_font-size);
  font-weight: var(--paper-font-body1_-_font-weight);
  line-height: var(--paper-font-body1_-_line-height);

  padding-bottom: calc(var(--st-default-spacing) * 2);

  padding-bottom: calc(var(--st-spacing, var(--st-default-spacing)) * 2);

  --auto-color: green;
  --heat_cool-color: springgreen;
  --cool-color: #2b9af9;
  --heat-color: #ff8100;
  --manual-color: #44739e;
  --off-color: #8a8a8a;
  --fan_only-color: #8a8a8a;
  --dry-color: #efbd07;
}

ha-card.no-header {
  padding: calc(var(--st-default-spacing) * 4) 0;
  padding: calc(var(--st-spacing, var(--st-default-spacing)) * 4) 0;
}

.body {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: auto;
  align-items: center;
  justify-items: center;
  place-items: center;
  padding: 0 calc(var(--st-default-spacing) * 4);
  padding: 0 calc(var(--st-spacing, var(--st-default-spacing)) * 4);
  padding-bottom: calc(var(--st-default-spacing) * 2);
  padding-bottom: calc(var(--st-spacing, var(--st-default-spacing)) * 2);
}

.toggle-label {
  color: var(--primary-text-color);
  color: var(--st-toggle-label-color, var(--primary-text-color));
  margin-right: calc(var(--st-default-spacing) * 2);
  margin-right: calc(var(--st-spacing, var(--st-default-spacing)) * 2);
  font-size: 16px;
  font-size: var(
    --st-font-size-toggle-label,
    var(--paper-font-subhead_-_font-size, 16px)
  );
}

.faults {
  display: flex;
  flex-direction: row;
  margin-left: calc(var(--st-default-spacing) * 2);
  margin-left: calc(var(--st-spacing, var(--st-default-spacing)) * 2);
}
.fault-icon {
  padding: 2px;
  cursor: pointer;
  color: var(--secondary-background-color);
  color: var(--st-fault-inactive-color, var(--secondary-background-color))
}
.fault-icon.active {
    color: var(--accent-color);
    color: var(--st-fault-active-color, var(--accent-color));
  }
.fault-icon.hide {
    display: none;
  }

.sensors {
  display: grid;
  grid: auto-flow / auto auto;
  grid-gap: var(--st-default-spacing);
  grid-gap: var(--st-spacing, var(--st-default-spacing));
  font-size: 16px;
  font-size: var(
    --st-font-size-sensors,
    var(--paper-font-subhead_-_font-size, 16px)
  );
}
.sensor-value {
  display: flex;
  align-items: center;
  padding-bottom: 4px;
}
.sensor-heading {
  font-weight: 300;
  padding-right: 8px;
  padding-bottom: 4px;
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.sensors:empty {
  display: none;
}
header {
  display: flex;
  flex-direction: row;
  align-items: center;

  padding: calc(var(--st-default-spacing) * 6)
    calc(var(--st-default-spacing) * 4)
    calc(var(--st-default-spacing) * 4);

  padding: calc(var(--st-spacing, var(--st-default-spacing)) * 6)
    calc(var(--st-spacing, var(--st-default-spacing)) * 4)
    calc(var(--st-spacing, var(--st-default-spacing)) * 4);
}
.header__icon {
  margin-right: calc(var(--st-default-spacing) * 2);
  margin-right: calc(var(--st-spacing, var(--st-default-spacing)) * 2);
  color: #44739e;
  color: var(--paper-item-icon-color, #44739e);
}
.header__title {
  font-size: 24px;
  font-size: var(--st-font-size-title, var(--ha-card-header-font-size, 24px));
  line-height: 24px;
  line-height: var(--st-font-size-title, var(--ha-card-header-font-size, 24px));
  -webkit-font-smoothing: var(--paper-font-headline_-_-webkit-font-smoothing);
  font-weight: normal;
  margin: 0;
  align-self: left;
}
.current-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  overflow: hidden;
  flex-wrap: wrap
}
.current-wrapper.row {
    flex-direction: row-reverse;
  }
.current--value {
  display: flex;
  align-items: center;
  margin: 0;
  font-weight: 400;
  line-height: var(--paper-font-display1_-_font-size);
  line-height: var(--st-font-size-l, var(--paper-font-display1_-_font-size));
  font-size: var(--paper-font-display1_-_font-size);
  font-size: var(--st-font-size-l, var(--paper-font-display1_-_font-size))
}
@media (min-width: 768px) {
.current--value {
    font-size: var(--paper-font-display2_-_font-size);
    font-size: var(--st-font-size-xl, var(--paper-font-display2_-_font-size));
    line-height: var(--paper-font-display2_-_font-size);
    line-height: var(--st-font-size-xl, var(--paper-font-display2_-_font-size))
}
  }
.current--value.updating {
    color: var(--error-color);
  }
.current--unit {
  font-size: var(--paper-font-title_-_font-size);
  font-size: var(--st-font-size-m, var(--paper-font-title_-_font-size));
}
.thermostat-trigger {
  padding: 0px;
}
.clickable {
  cursor: pointer;
}
.modes {
  display: grid;
  grid-template-columns: auto;
  grid-auto-flow: column;
  grid-gap: 2px;
  margin-top: calc(var(--st-default-spacing) * 2);
  margin-top: calc(var(--st-spacing, var(--st-default-spacing)) * 2);
  padding: var(--st-default-spacing);
  padding: var(--st-spacing, var(--st-default-spacing))
}
.modes.heading {
    grid-template-columns: -webkit-min-content;
    grid-template-columns: min-content;
  }
.mode-title {
  padding: 0 16px;
  align-self: center;
  justify-self: center;
  place-self: center;
  font-size: 16px;
  font-size: var(
    --st-font-size-sensors,
    var(--paper-font-subhead_-_font-size, 16px)
  );
  font-weight: 300;
  white-space: nowrap;
}
.mode-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  min-height: 24px;
  padding: var(--st-default-spacing) 0;
  padding: var(--st-spacing, var(--st-default-spacing)) 0;
  background: var(--secondary-background-color);
  background: var(--st-mode-background, var(--secondary-background-color));
  color: var(--secondary-text-color);
  cursor: pointer;
  border-radius: var(--st-default-spacing);
  border-radius: var(--st-spacing, var(--st-default-spacing))
}
.mode-item:hover {
    color: var(--primary-text-color);
    color: var(--st-mode-active-color, var(--primary-text-color));
  }
.mode-item.active,
  .mode-item.active:hover {
    background: var(--primary-color);
    background: var(--st-mode-active-background, var(--primary-color));
    color: var(--text-primary-color);
    color: var(--st-mode-active-color, var(--text-primary-color));
  }
.mode-item.active.off {
    background: var(--off-color);
  }
.mode-item.active.heat {
    background: var(--heat-color);
  }
.mode-item.active.cool {
    background: var(--cool-color);
  }
.mode-item.active.heat_cool {
    background: var(--heat_cool-color);
  }
.mode-item.active.auto {
    background: var(--auto-color);
  }
.mode-item.active.dry {
    background: var(--dry-color);
  }
.mode-item.active.fan_only {
    background: var(--fan_only-color);
  }
.mode-icon {
  --iron-icon-width: 24px;
  --iron-icon-height: 24px;
  display: block;
}
ha-switch {
  padding: 16px 6px;
}
.side-by-side {
  display: flex;
  align-items: center;
}
.side-by-side > * {
  flex: 1;
  padding-right: 4px;
}
`;function it(t,e,i,s={}){s=s||{},i=null==i?{}:i;const n=new Event(e,{bubbles:void 0===s.bubbles||s.bubbles,cancelable:Boolean(s.cancelable),composed:void 0===s.composed||s.composed});return n.detail=i,t.dispatchEvent(n),n}!function(t,e){void 0===e&&(e={});var i=e.insertAt;if(t&&"undefined"!=typeof document){var s=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css","top"===i&&s.firstChild?s.insertBefore(n,s.firstChild):s.appendChild(n),n.styleSheet?n.styleSheet.cssText=t:n.appendChild(document.createTextNode(t))}}(et);const st=["0","1"],nt=["0.5","1"],ot=["column","row"],at=["climate"];function rt(t,e){var i={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(i[s]=t[s]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(s=Object.getOwnPropertySymbols(t);n<s.length;n++)e.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(t,s[n])&&(i[s[n]]=t[s[n]])}return i}function lt(t,e,i,s){var n,o=arguments.length,a=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,s);else for(var r=t.length-1;r>=0;r--)(n=t[r])&&(a=(o<3?n(a):o>3?n(e,i,a):n(e,i))||a);return o>3&&a&&Object.defineProperty(e,i,a),a}const ct=(t,e,i,s)=>{if("length"===i||"prototype"===i)return;if("arguments"===i||"caller"===i)return;const n=Object.getOwnPropertyDescriptor(t,i),o=Object.getOwnPropertyDescriptor(e,i);!dt(n,o)&&s||Object.defineProperty(t,i,o)},dt=function(t,e){return void 0===t||t.configurable||t.writable===e.writable&&t.enumerable===e.enumerable&&t.configurable===e.configurable&&(t.writable||t.value===e.value)},ht=(t,e)=>`/* Wrapped ${t}*/\n${e}`,pt=Object.getOwnPropertyDescriptor(Function.prototype,"toString"),ut=Object.getOwnPropertyDescriptor(Function.prototype.toString,"name");var gt=(t,e,{ignoreNonConfigurable:i=!1}={})=>{const{name:s}=t;for(const s of Reflect.ownKeys(e))ct(t,e,s,i);return((t,e)=>{const i=Object.getPrototypeOf(e);i!==Object.getPrototypeOf(t)&&Object.setPrototypeOf(t,i)})(t,e),((t,e,i)=>{const s=""===i?"":`with ${i.trim()}() `,n=ht.bind(null,s,e.toString());Object.defineProperty(n,"name",ut),Object.defineProperty(t,"toString",{...pt,value:n})})(t,e,s),t};const ft=(t,e={})=>{if("function"!=typeof t)throw new TypeError(`Expected the first argument to be a function, got \`${typeof t}\``);const{wait:i=0,maxWait:s=Number.Infinity,before:n=!1,after:o=!0}=e;if(!n&&!o)throw new Error("Both `before` and `after` are false, function wouldn't be called.");let a,r,l;const c=function(...e){const c=this,d=()=>{r=void 0,a&&(clearTimeout(a),a=void 0),o&&(l=t.apply(c,e))},h=n&&!a;return clearTimeout(a),a=setTimeout((()=>{a=void 0,r&&(clearTimeout(r),r=void 0),o&&(l=t.apply(c,e))}),i),s>0&&s!==Number.Infinity&&!r&&(r=setTimeout(d,s)),h&&(l=t.apply(c,e)),l};return gt(c,t),c.cancel=()=>{a&&(clearTimeout(a),a=void 0),r&&(clearTimeout(r),r=void 0)},c};function mt(t,{decimals:e=1,fallback:i="N/A"}={}){return null===t||""===t||["boolean","undefined"].includes(typeof t)?i:Number(t).toFixed(e)}function yt({name:t,icon:e,faults:i,toggle_entity:s,toggle_entity_label:n,toggleEntityChanged:o,entity:a,openEntityPopover:r}){var l;const c=a.attributes.hvac_action||a.state;return"object"==typeof e&&(e=null!==(l=null==e?void 0:e[c])&&void 0!==l&&l),R`<header><div style="display:flex" class="clickable" @click="${()=>r()}">${e&&R`<ha-icon class="header__icon" .icon="${e}"></ha-icon>`||""}<h2 class="header__title">${t}</h2></div>${i?function({faults:t,openEntityPopover:e}){const i=t.map((({icon:t,hide_inactive:i,state:s})=>R`<ha-icon class="fault-icon ${"on"===s.state?"active":i?" hide":""}" icon="${t||s.attributes.icon}" @click="${()=>e(s.entity_id)}"></ha-icon>`));return R`<div class="faults">${i}</div>`}({faults:i,openEntityPopover:r}):""} ${s?function({openEntityPopover:t,toggle_entity:e,toggle_entity_label:i,toggleEntityChanged:s}){return R`<div style="margin-left:auto"><span class="clickable toggle-label" @click="${()=>t(null==e?void 0:e.entity_id)}">${i}</span><ha-switch .checked="${"on"===(null==e?void 0:e.state)}" @change="${s}"></ha-switch></div>`}({openEntityPopover:r,toggle_entity:s,toggle_entity_label:n,toggleEntityChanged:o}):""}</header>`}function vt({hide:t,state:e,details:i,localize:s,openEntityPopover:n}){if(t||!e)return;const{heading:o,icon:a,unit:r}=i;let l;if("object"==typeof e){let t=e.state;if("device_class"in e.attributes){const[i]=e.entity_id.split("."),n=["state",i,e.attributes.device_class,""].join(".");t=s(e.state,n)}l=R`<div class="sensor-value clickable" @click="${()=>n(e.entity_id)}">${t} ${r||e.attributes.unit_of_measurement}</div>`}else l=R`<div class="sensor-value">${e}</div>`;const c=a?R`<ha-icon icon="${a}"></ha-icon>`:R`${o}:`;return R`<div class="sensor-heading">${c}</div>${l}`}var _t,bt;function wt({state:t,mode:e,modeOptions:i,localize:s,setMode:n}){const{type:o,hide_when_off:a,mode:r="none",list:l,name:c}=e;if(0===l.length||a&&t===bt.OFF)return null;let d=`state_attributes.climate.${o}_mode.`;"hvac"===o&&(d="state.climate.");const h=c||s(`ui.card.climate.${"hvac"==o?"operation":`${o}_mode`}`),{headings:p}=i;return R`<div class="modes ${p?"heading":""}">${p?R`<div class="mode-title">${h}</div>`:null} ${l.map((({value:t,icon:e,name:a})=>R`<div class="mode-item ${t===r?"active "+r:""}" @click="${()=>n(o,t)}">${(t=>t?!1===i.icons?null:R`<ha-icon class="mode-icon" .icon="${t}"></ha-icon>`:null)(e)} ${(t=>!1===t||!1===i.names?null:s(t,d))(a)}</div>`))}</div>`}!function(t){t.HVAC="hvac",t.FAN="fan",t.PRESET="preset",t.SWING="swing"}(_t||(_t={})),function(t){t.OFF="off",t.HEAT="heat",t.COOL="cool",t.HEAT_COOL="heat_cool",t.AUTO="auto",t.DRY="dry",t.FAN_ONLY="fan_only"}(bt||(bt={}));const St=Object.values(_t),xt=[_t.HVAC,_t.PRESET],$t="hass:chevron-up",Pt="hass:chevron-down",Ot="mdi:plus",Ct="mdi:minus",Et={auto:"hass:autorenew",cool:"hass:snowflake",dry:"hass:water-percent",fan_only:"hass:fan",heat_cool:"hass:autorenew",heat:"hass:fire",off:"hass:power"},kt={auto:"mdi:radiator",cooling:"mdi:snowflake",fan:"mdi:fan",heating:"mdi:radiator",idle:"mdi:radiator-disabled",off:"mdi:radiator-off"},Nt={temperature:!1,setpoint:!1,state:!1};function Tt(t,e,i={}){return e[`${t}_modes`].filter((t=>function(t,e){if(void 0===e)return!0;if(Array.isArray(e))return e.includes(t);const i=typeof e[t];return"boolean"===i?e[t]:"object"!==i||!1!==e[t].include}(t,i))).map((t=>{const e=rt("object"==typeof i[t]?i[t]:{},["include"]);return Object.assign({icon:Et[t],value:t,name:t},e)}))}class jt extends tt{constructor(){super(...arguments),this.config={},this.modes=[],this._hass={},this.entity={},this.toggle_entity=null,this.toggle_entity_label=null,this.icon=null,this.sensors=[],this.showSensors=!0,this.faults=[],this.name="",this._stepSize=.5,this._updatingValues=!1,this._hide=Nt,this.modeOptions={names:!0,icons:!0,headings:!0},this._debouncedSetTemperature=ft((t=>{this._hass.callService("climate","set_temperature",Object.assign({entity_id:this.config.entity},t))}),{wait:1e3}),this.localize=(t,e="")=>{const i=this._hass.selectedLanguage||this._hass.language,s=`${e}${t}`,n=this._hass.resources[i];return s in n?n[s]:t},this.setMode=(t,e)=>{t&&e?(this._hass.callService("climate",`set_${t}_mode`,{entity_id:this.config.entity,[`${t}_mode`]:e}),it(this,"haptic","light")):it(this,"haptic","failure")},this.openEntityPopover=(t=null)=>{it(this,"hass-more-info",{entityId:t||this.config.entity})}}static get styles(){return et}static getConfigElement(){return window.document.createElement(`${t}-editor`)}setConfig(t){if(!t.entity)throw new Error("You need to define an entity");if(!1===t.show_header&&t.faults)throw new Error("Faults are not supported when header is hidden");this.config=Object.assign({decimals:1},t)}set hass(t){var e,i;const s=t.states[this.config.entity];if(void 0===typeof s)return;if(this._hass=t,this.entity!==s&&(this.entity=s),"string"==typeof this.config.toggle_entity){const e=t.states[this.config.toggle_entity];this.toggle_entity!==e&&(this.toggle_entity=e)}else if("object"==typeof this.config.toggle_entity){const e=t.states[this.config.toggle_entity.entity_id];this.toggle_entity!==e&&(this.toggle_entity=e),"string"==typeof this.config.toggle_entity.name?this.toggle_entity_label=this.config.toggle_entity.name:!0===this.config.toggle_entity.name?this.toggle_entity_label=this.toggle_entity.attributes.name:this.toggle_entity_label=void 0}const n=s.attributes;let o;this.entityType=function(t){return"number"==typeof t.target_temp_high&&"number"==typeof t.target_temp_low?"dual":"single"}(n),o="dual"===this.entityType?{target_temp_low:n.target_temp_low,target_temp_high:n.target_temp_high}:{temperature:n.temperature},this._updatingValues&&function(t,e){const i=Object.keys(t);return i.length===Object.keys(e).length&&!i.some((i=>(null==t?void 0:t[i])!==(null==e?void 0:e[i])))}(o,this._values)?this._updatingValues=!1:this._updatingValues||(this._values=o);const a=t=>St.includes(t)&&n[`${t}_modes`],r=t=>t.filter(a).map((t=>({type:t,list:Tt(t,n,{})})));let l=[];if(!1===this.config.control)l=[];else if(Array.isArray(this.config.control))l=r(this.config.control);else if("object"==typeof this.config.control){const t=this.config.control,{_names:e,_icons:i,_headings:s}=t,o=rt(t,["_names","_icons","_headings"]);"boolean"==typeof e&&(this.modeOptions.names=e),"boolean"==typeof i&&(this.modeOptions.icons=i),"boolean"==typeof s&&(this.modeOptions.headings=s);const c=Object.entries(o);l=c.length>0?c.filter((([t])=>a(t))).map((([t,e])=>{const i=e,{_name:s,_hide_when_off:o}=i,a=rt(i,["_name","_hide_when_off"]);return{type:t,hide_when_off:o,name:s,list:Tt(t,n,a)}})):r(xt)}else l=r(xt);this.modes=l.map((t=>{if(t.type===_t.HVAC){const e=[],i=Object.values(bt);return t.list.forEach((t=>{const s=i.indexOf(t.value);e[s]=t})),Object.assign(Object.assign({},t),{list:e,mode:s.state})}const e=n[`${t.type}_mode`];return Object.assign(Object.assign({},t),{mode:e})})),void 0!==this.config.icon?this.icon=this.config.icon:this.entity.attributes.hvac_action?this.icon=kt:this.icon=Et,this.config.step_size&&(this._stepSize=+this.config.step_size),this.config.hide&&(this._hide=Object.assign(Object.assign({},this._hide),this.config.hide)),this.show_header=null===(i=null===(e=this.config)||void 0===e?void 0:e.show_header)||void 0===i||i,"string"==typeof this.config.name?this.name=this.config.name:!1===this.config.name?this.name=!1:this.name=s.attributes.friendly_name,!1===this.config.sensors?this.showSensors=!1:this.config.sensors&&(this.sensors=this.config.sensors.map((e=>{var{name:i,entity:s,attribute:n,unit:o=""}=e,a=rt(e,["name","entity","attribute","unit"]);let r;const l=[i];return s?(r=t.states[s],l.push(r&&r.attributes&&r.attributes.friendly_name),n&&(r=r.attributes[n]+o)):n&&n in this.entity.attributes&&(r=this.entity.attributes[n]+o,l.push(n)),l.push(s),Object.assign(Object.assign({},a),{name:l.find((t=>!!t)),state:r,entity:s,unit:o})}))),!1===this.config.faults?this.faults=[]:this.config.faults&&(this.faults=this.config.faults.map((e=>{var{entity:i}=e,s=rt(e,["entity"]);return Object.assign(Object.assign({},s),{state:t.states[i],entity:i})})))}render({_hide:t,_values:e,_updatingValues:i,config:s,entity:n}=this){if(!n)return R`<hui-warning>Entity not available: ${s.entity}</hui-warning>`;const{attributes:{min_temp:o=null,max_temp:a=null,hvac_action:r}}=n,l=this.getUnit(),c=this.config.step_layout||"column",d="row"===c,h=[!this.show_header&&"no-header",r].filter((t=>!!t));return R`<ha-card class="${h.join(" ")}">${this.show_header?yt({name:this.name,icon:this.icon,faults:this.faults,toggle_entity:this.toggle_entity,toggle_entity_label:this.toggle_entity_label,toggleEntityChanged:this.toggleEntityChanged,entity:this.entity,openEntityPopover:this.openEntityPopover}):y}<section class="body">${this.showSensors?function({_hide:t,entity:e,unit:i,sensors:s,config:n,localize:o,openEntityPopover:a}){var r,l,c,d;const{attributes:{hvac_action:h,current_temperature:p}}=e,u=[vt({hide:t.temperature,state:`${mt(p,n)}${i}`,localize:o,openEntityPopover:a,details:{heading:null!==(l=null===(r=null==n?void 0:n.label)||void 0===r?void 0:r.temperature)&&void 0!==l?l:"Temperature"}}),vt({hide:t.state,state:o(h,"state_attributes.climate.hvac_action."),localize:o,openEntityPopover:a,details:{heading:null!==(d=null===(c=null==n?void 0:n.label)||void 0===c?void 0:c.state)&&void 0!==d?d:"State"}}),...s.map((({name:t,icon:e,state:i,unit:s})=>i&&vt({hide:!1,state:i,localize:o,openEntityPopover:a,details:{heading:t,icon:e,unit:s}})))||null].filter((t=>null!==t));return R`<div class="sensors">${u}</div>`}({_hide:this._hide,unit:l,entity:this.entity,sensors:this.sensors,config:this.config,localize:this.localize,openEntityPopover:this.openEntityPopover}):""} ${t.setpoint?"":Object.entries(e).map((([t,e])=>R`<div class="current-wrapper ${c}"><ha-icon-button ?disabled="${a&&e>=a}" class="thermostat-trigger" icon="${d?Ot:$t}" @click="${()=>this.setTemperature(this._stepSize,t)}"></ha-icon-button><h3 @click="${()=>this.openEntityPopover()}" class="current--value ${i?"updating":""}">${mt(e,s)} ${!1!==l?R`<span class="current--unit">${l}</span>`:""}</h3><ha-icon-button ?disabled="${o&&e<=o}" class="thermostat-trigger" icon="${d?Ct:Pt}" @click="${()=>this.setTemperature(-this._stepSize,t)}"></ha-icon-button></div>`))}</section>${this.modes.map((t=>wt({state:n.state,mode:t,localize:this.localize,modeOptions:this.modeOptions,setMode:this.setMode})))}</ha-card>`}toggleEntityChanged(t){var e;const i=t.target.checked;this._hass.callService("homeassistant",i?"turn_on":"turn_off",{entity_id:null===(e=this.toggle_entity)||void 0===e?void 0:e.entity_id})}setTemperature(t,e="temperature"){this._updatingValues=!0,this._values=Object.assign(Object.assign({},this._values),{[e]:+mt(this._values[e]+t,{decimals:this.config.decimals})}),this._debouncedSetTemperature(Object.assign({},this._values))}getCardSize(){return 3}getUnit(){var t;return["boolean","string"].includes(typeof this.config.unit)?null===(t=this.config)||void 0===t?void 0:t.unit:this._hass.config.unit_system.temperature}}lt([G()],jt.prototype,"config",void 0),lt([G()],jt.prototype,"modes",void 0),lt([G()],jt.prototype,"_hass",void 0),lt([G()],jt.prototype,"entity",void 0),lt([G()],jt.prototype,"toggle_entity",void 0),lt([G()],jt.prototype,"toggle_entity_label",void 0),lt([G()],jt.prototype,"entityType",void 0),lt([G()],jt.prototype,"icon",void 0),lt([G()],jt.prototype,"sensors",void 0),lt([G()],jt.prototype,"showSensors",void 0),lt([G()],jt.prototype,"faults",void 0),lt([G()],jt.prototype,"show_header",void 0),lt([G()],jt.prototype,"name",void 0),lt([G()],jt.prototype,"_values",void 0),lt([G()],jt.prototype,"_updatingValues",void 0),lt([G()],jt.prototype,"_hide",void 0),lt([G()],jt.prototype,"modeOptions",void 0),customElements.define(t,jt),customElements.define(`${t}-editor`,class extends tt{static get styles(){return et}static get properties(){return{hass:{},config:{}}}setConfig(t){this.config=t}_openLink(){window.open("https://github.com/nervetattoo/simple-thermostat/blob/master/README.md")}get _show_header(){return!1!==this.config.show_header}render(){return this.hass?R`<div class="card-config"><div class="overall-config"><div class="side-by-side"><ha-entity-picker label="Entity (required)" .hass="${this.hass}" .value="${this.config.entity}" .configValue="${"entity"}" .includeDomains="${at}" @change="${this.valueChanged}" allow-custom-entity></ha-entity-picker></div><div class="side-by-side"><paper-input label="Name (optional)" .value="${this.config.name}" .configValue="${"name"}" @value-changed="${this.valueChanged}"></paper-input><ha-icon-input label="Icon (optional)" .value="${this.config.icon}" .configValue="${"icon"}" @value-changed="${this.valueChanged}"></ha-icon-input></div><ha-formfield label="Show Name and Icon?"><ha-switch .checked="${this._show_header}" .configValue="${"show_header"}" @change="${this.valueChanged}"></ha-switch></ha-formfield><div class="side-by-side"><paper-dropdown-menu label="Decimals (optional)" .configValue="${"decimals"}" @value-changed="${this.valueChanged}" class="dropdown"><paper-listbox slot="dropdown-content" .selected="${Object.values(st).indexOf(String(this.config.decimals))}">${Object.values(st).map((t=>R`<paper-item>${t}</paper-item>`))}</paper-listbox></paper-dropdown-menu><paper-input label="Unit (optional)" .value="${this.config.unit}" .configValue="${"unit"}" @value-changed="${this.valueChanged}"></paper-input></div><div class="side-by-side"><ha-entity-picker label="Toggle Entity (optional)" .hass="${this.hass}" .value="${this.toggle_entity}" .configValue="${"toggle_entity"}" @change="${this.valueChanged}" allow-custom-entity></ha-entity-picker><paper-input label="Fallback Text (optional)" .value="${this.config.fallback}" .configValue="${"fallback"}" @value-changed="${this.valueChanged}"></paper-input></div><div class="side-by-side"><paper-dropdown-menu label="Step Layout (optional)" .configValue="${"step_layout"}" @value-changed="${this.valueChanged}" class="dropdown"><paper-listbox slot="dropdown-content" .selected="${Object.values(ot).indexOf(this.config.step_layout)}">${Object.values(ot).map((t=>R`<paper-item>${t}</paper-item>`))}</paper-listbox></paper-dropdown-menu><paper-dropdown-menu label="Step Size (optional)" .configValue="${"step_size"}" @value-changed="${this.valueChanged}" class="dropdown"><paper-listbox slot="dropdown-content" .selected="${Object.values(nt).indexOf(String(this.config.step_size))}">${Object.values(nt).map((t=>R`<paper-item>${t}</paper-item>`))}</paper-listbox></paper-dropdown-menu></div><div class="side-by-side"><mwc-button @click="${this._openLink}">Configuration Options</mwc-button>Settings for label, control, sensors, faults and hiding UI elements can only be configured in the code editor</div></div></div>`:R``}valueChanged(t){if(!this.config||!this.hass)return;const{target:e}=t;this[`_${e.configValue}`]!==e.value&&(e.configValue&&(""===e.value?delete this.config[e.configValue]:this.config=Object.assign(Object.assign({},this.config),{[e.configValue]:void 0!==e.checked?e.checked:e.value})),it(this,"config-changed",{config:this.config}))}}),console.info(`%c${t}: 1.0.0-development`,"font-weight: bold"),window.customCards=window.customCards||[],window.customCards.push({type:t,name:"Simple Thermostat",preview:!1,description:"A different take on the thermostat card"});
