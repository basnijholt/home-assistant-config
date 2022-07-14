import{A as e,aY as t,r as i,aZ as a,aa as n,a7 as o,a_ as s,a$ as r,a9 as l,S as d,T as c,x as u,Q as h,b0 as p,a as v,h as m,e as f,i as g,L as _,N as y,$ as k,z as b,ac as x,ad as $,n as w,b1 as C,aQ as A,b2 as I,b3 as E,b4 as z,b5 as S,b6 as L,b7 as T,b8 as O,b9 as P,ba as M,bb as F,bc as D,aB as B,bd as N,be as V,bf as j,bg as q,bh as R,bi as U,bj as H,bk as G,bl as W,bm as K,bn as Y,aS as Z,bo as Q,bp as X,bq as J,br as ee,bs as te,ag as ie,bt as ae,bu as ne,bv as oe,bw as se,bx as re,by as le,bz as de,bA as ce,bB as ue,bC as he,bD as pe,bE as ve,bF as me,bG as fe,bH as ge,bI as _e,bJ as ye,bK as ke,bL as be,bM as xe,bN as $e,bO as we,bP as Ce,bQ as Ae,bR as Ie,E as Ee,bS as ze,bT as Se,bU as Le,bV as Te,bW as Oe,bX as Pe,bY as Me,bZ as Fe,b_ as De,b$ as Be,c0 as Ne,c1 as Ve,c2 as je,c3 as qe,c4 as Re,c5 as Ue,c6 as He,c7 as Ge,c8 as We,c9 as Ke,ca as Ye,cb as Ze,cc as Qe,cd as Xe,ce as Je,cf as et,cg as tt,ch as it,ci as at,cj as nt,ck as ot,cl as st,cm as rt,cn as lt,co as dt,cp as ct,cq as ut,cr as ht,cs as pt,ct as vt,cu as mt,cv as ft,cw as gt,cx as _t,cy as yt,cz as kt,cA as bt,cB as xt,cC as $t,cD as wt,az as Ct,cE as At,cF as It,cG as Et,cH as zt,cI as St,cJ as Lt,cK as Tt,cL as Ot,cM as Pt,cN as Mt,cO as Ft,cP as Dt,cQ as Bt,cR as Nt,cS as Vt,cT as jt,cU as qt,cV as Rt,cW as Ut,cX as Ht,cY as Gt,cZ as Wt,c_ as Kt,c$ as Yt,d0 as Zt,d1 as Qt,d2 as Xt,d3 as Jt,d4 as ei,d5 as ti,d6 as ii,d7 as ai,d8 as ni,d9 as oi,da as si,db as ri,dc as li,dd as di,de as ci,df as ui,dg as hi,dh as pi,di as vi,dj as mi,dk as fi,dl as gi,dm as _i,dn as yi,dp as ki,dq as bi,dr as xi,ds as $i,dt as wi,du as Ci,dv as Ai,dw as Ii,dx as Ei,dy as zi,dz as Si,dA as Li,dB as Ti,dC as Oi,dD as Pi,dE as Mi,dF as Fi,dG as Di,dH as Bi,dI as Ni,t as Vi,I as ji,j as qi,m as Ri,Z as Ui,aD as Hi,dJ as Gi,dK as Wi,dL as Ki,aM as Yi,dM as Zi,_ as Qi,o as Xi,dN as Ji,dO as ea,dP as ta,dQ as ia,dR as aa,dS as na,dT as oa,dU as sa,dV as ra,dW as la,dX as da,dY as ca,dZ as ua,d_ as ha,d$ as pa,aK as va,e0 as ma,e1 as fa,V as ga,e2 as _a,e3 as ya,e4 as ka,e5 as ba,e6 as xa,e7 as $a,e8 as wa,e9 as Ca,J as Aa,af as Ia}from"./main-7bc9a818.js";import{d as Ea,a as za}from"./c.67735e63.js";import"./c.cf66b923.js";import"./c.5d9598b2.js";import"./c.fb76e5d5.js";import"./c.9475214f.js";import{s as Sa,a as La,b as Ta}from"./c.38b86040.js";import{T as Oa,a as Pa,s as Ma}from"./c.2aa297ae.js";import{b as Fa,e as Da}from"./c.d9dcade0.js";import{d as Ba}from"./c.01f18260.js";import{i as Na}from"./c.21c042d4.js";import{c as Va,u as ja}from"./c.743a15a1.js";import"./c.5ec2d281.js";import{g as qa}from"./c.6711bf6c.js";import"./c.e0e56ec4.js";import{a as Ra}from"./c.487362b0.js";import"./c.9a1f96ed.js";let Ua=!1,Ha=[],Ga=[];function Wa(){Ua=!0,requestAnimationFrame((function(){Ua=!1,function(e){for(;e.length;)Ka(e.shift())}(Ha),setTimeout((function(){!function(e){for(let t=0,i=e.length;t<i;t++)Ka(e.shift())}(Ga)}))}))}function Ka(e){const t=e[0],i=e[1],a=e[2];try{i.apply(t,a)}catch(e){setTimeout((()=>{throw e}))}}function Ya(e){if(!e||"object"!=typeof e)return e;if("[object Date]"==Object.prototype.toString.call(e))return new Date(e.getTime());if(Array.isArray(e))return e.map(Ya);var t={};return Object.keys(e).forEach((function(i){t[i]=Ya(e[i])})),t}const Za=(e,t)=>e<t?-1:e>t?1:0,Qa=(e,t)=>Za(e.toLowerCase(),t.toLowerCase());class Xa extends TypeError{constructor(e,t){let i;const{message:a,...n}=e,{path:o}=e;super(0===o.length?a:"At path: "+o.join(".")+" -- "+a),this.value=void 0,this.key=void 0,this.type=void 0,this.refinement=void 0,this.path=void 0,this.branch=void 0,this.failures=void 0,Object.assign(this,n),this.name=this.constructor.name,this.failures=()=>{var a;return null!=(a=i)?a:i=[e,...t()]}}}function Ja(e){return"object"==typeof e&&null!=e}function en(e){return"string"==typeof e?JSON.stringify(e):""+e}function tn(e,t,i,a){if(!0===e)return;!1===e?e={}:"string"==typeof e&&(e={message:e});const{path:n,branch:o}=t,{type:s}=i,{refinement:r,message:l="Expected a value of type `"+s+"`"+(r?" with refinement `"+r+"`":"")+", but received: `"+en(a)+"`"}=e;return{value:a,type:s,refinement:r,key:n[n.length-1],path:n,branch:o,...e,message:l}}function*an(e,t,i,a){(function(e){return Ja(e)&&"function"==typeof e[Symbol.iterator]})(e)||(e=[e]);for(const n of e){const e=tn(n,t,i,a);e&&(yield e)}}function*nn(e,t,i){void 0===i&&(i={});const{path:a=[],branch:n=[e],coerce:o=!1,mask:s=!1}=i,r={path:a,branch:n};if(o&&(e=t.coercer(e,r),s&&"type"!==t.type&&Ja(t.schema)&&Ja(e)&&!Array.isArray(e)))for(const i in e)void 0===t.schema[i]&&delete e[i];let l=!0;for(const i of t.validator(e,r))l=!1,yield[i,void 0];for(let[i,d,c]of t.entries(e,r)){const t=nn(d,c,{path:void 0===i?a:[...a,i],branch:void 0===i?n:[...n,d],coerce:o,mask:s});for(const a of t)a[0]?(l=!1,yield[a[0],void 0]):o&&(d=a[1],void 0===i?e=d:e instanceof Map?e.set(i,d):e instanceof Set?e.add(d):Ja(e)&&(e[i]=d))}if(l)for(const i of t.refiner(e,r))l=!1,yield[i,void 0];l&&(yield[void 0,e])}class on{constructor(e){this.TYPE=void 0,this.type=void 0,this.schema=void 0,this.coercer=void 0,this.validator=void 0,this.refiner=void 0,this.entries=void 0;const{type:t,schema:i,validator:a,refiner:n,coercer:o=(e=>e),entries:s=function*(){}}=e;this.type=t,this.schema=i,this.entries=s,this.coercer=o,this.validator=a?(e,t)=>an(a(e,t),t,this,e):()=>[],this.refiner=n?(e,t)=>an(n(e,t),t,this,e):()=>[]}assert(e){return sn(e,this)}create(e){return function(e,t){const i=ln(e,t,{coerce:!0});if(i[0])throw i[0];return i[1]}(e,this)}is(e){return rn(e,this)}mask(e){return function(e,t){const i=ln(e,t,{coerce:!0,mask:!0});if(i[0])throw i[0];return i[1]}(e,this)}validate(e,t){return void 0===t&&(t={}),ln(e,this,t)}}function sn(e,t){const i=ln(e,t);if(i[0])throw i[0]}function rn(e,t){return!ln(e,t)[0]}function ln(e,t,i){void 0===i&&(i={});const a=nn(e,t,i),n=function(e){const{done:t,value:i}=e.next();return t?void 0:i}(a);if(n[0]){const e=new Xa(n[0],(function*(){for(const e of a)e[0]&&(yield e[0])}));return[e,void 0]}return[void 0,n[1]]}function dn(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];const a="type"===t[0].type,n=t.map((e=>e.schema)),o=Object.assign({},...n);return a?yn(o):fn(o)}function cn(e,t){return new on({type:e,schema:null,validator:t})}function un(){return cn("any",(()=>!0))}function hn(e){return new on({type:"array",schema:e,*entries(t){if(e&&Array.isArray(t))for(const[i,a]of t.entries())yield[i,a,e]},coercer:e=>Array.isArray(e)?e.slice():e,validator:e=>Array.isArray(e)||"Expected an array value, but received: "+en(e)})}function pn(){return cn("boolean",(e=>"boolean"==typeof e))}function vn(e){const t=en(e),i=typeof e;return new on({type:"literal",schema:"string"===i||"number"===i||"boolean"===i?e:null,validator:i=>i===e||"Expected the literal `"+t+"`, but received: "+en(i)})}function mn(){return cn("number",(e=>"number"==typeof e&&!isNaN(e)||"Expected a number, but received: "+en(e)))}function fn(e){const t=e?Object.keys(e):[],i=cn("never",(()=>!1));return new on({type:"object",schema:e||null,*entries(a){if(e&&Ja(a)){const n=new Set(Object.keys(a));for(const i of t)n.delete(i),yield[i,a[i],e[i]];for(const e of n)yield[e,a[e],i]}},validator:e=>Ja(e)||"Expected an object, but received: "+en(e),coercer:e=>Ja(e)?{...e}:e})}function gn(e){return new on({...e,validator:(t,i)=>void 0===t||e.validator(t,i),refiner:(t,i)=>void 0===t||e.refiner(t,i)})}function _n(){return cn("string",(e=>"string"==typeof e||"Expected a string, but received: "+en(e)))}function yn(e){const t=Object.keys(e);return new on({type:"type",schema:e,*entries(i){if(Ja(i))for(const a of t)yield[a,i[a],e[a]]},validator:e=>Ja(e)||"Expected an object, but received: "+en(e)})}function kn(e){const t=e.map((e=>e.type)).join(" | ");return new on({type:"union",schema:null,coercer(t,i){const a=e.find((e=>{const[i]=e.validate(t,{coerce:!0});return!i}))||cn("unknown",(()=>!0));return a.coercer(t,i)},validator(i,a){const n=[];for(const t of e){const[...e]=nn(i,t,a),[o]=e;if(!o[0])return[];for(const[t]of e)t&&n.push(t)}return["Expected the value to satisfy a union of `"+t+"`, but received: "+en(i),...n]}})}const bn=(e,t)=>{if(!(t instanceof Xa))return{warnings:[t.message],errors:void 0};const i=[],a=[];for(const n of t.failures())if(void 0===n.value)i.push(e.localize("ui.errors.config.key_missing","key",n.path.join(".")));else if("never"===n.type)a.push(e.localize("ui.errors.config.key_not_expected","key",n.path.join(".")));else{if("union"===n.type)continue;"enums"===n.type?a.push(e.localize("ui.errors.config.key_wrong_type","key",n.path.join("."),"type_correct",n.message.replace("Expected ","").split(", ")[0],"type_wrong",JSON.stringify(n.value))):a.push(e.localize("ui.errors.config.key_wrong_type","key",n.path.join("."),"type_correct",n.refinement||n.type,"type_wrong",JSON.stringify(n.value)))}return{warnings:a,errors:i}},xn=(e,t)=>e.callWS({type:"validate_config",...t}),$n=e=>e.substr(e.indexOf(".")+1),wn=fn({alias:gn(_n()),enabled:gn(pn())}),Cn=fn({entity_id:gn(kn([_n(),hn(_n())])),device_id:gn(kn([_n(),hn(_n())])),area_id:gn(kn([_n(),hn(_n())]))});dn(wn,fn({service:gn(_n()),service_template:gn(_n()),entity_id:gn(_n()),target:gn(Cn),data:gn(fn())}));const An=dn(wn,fn({service:vn("media_player.play_media"),target:gn(fn({entity_id:gn(_n())})),entity_id:gn(_n()),data:fn({media_content_id:_n(),media_content_type:_n()}),metadata:fn()})),In=dn(wn,fn({service:vn("scene.turn_on"),target:gn(fn({entity_id:gn(_n())})),entity_id:gn(_n()),metadata:fn()})),En=(t,i)=>e(t,"hass-notification",i),zn=e=>e.substr(0,e.indexOf(".")),Sn=e=>{return t=e.entity_id,void 0===(i=e.attributes).friendly_name?$n(t).replace(/_/g," "):i.friendly_name||"";var t,i};class Ln extends HTMLElement{static get version(){return"23.1.3"}}customElements.define("vaadin-material-styles",Ln);const Tn=e=>class extends e{static get properties(){return{theme:{type:String,reflectToAttribute:!0,observer:"__deprecatedThemePropertyChanged"},_theme:{type:String,readOnly:!0}}}__deprecatedThemePropertyChanged(e){this._set_theme(e)}},On=[];function Pn(e,i,a={}){var n;e&&(n=e,Nn(customElements.get(n))&&console.warn(`The custom element definition for "${e}"\n      was finalized before a style module was registered.\n      Make sure to add component specific style modules before\n      importing the corresponding custom element.`)),i=function(e=[]){return[e].flat(1/0).filter((e=>e instanceof t||(console.warn("An item in styles is not of type CSSResult. Use `unsafeCSS` or `css`."),!1)))}(i),window.Vaadin&&window.Vaadin.styleModules?window.Vaadin.styleModules.registerStyles(e,i,a):On.push({themeFor:e,styles:i,include:a.include,moduleId:a.moduleId})}function Mn(){return window.Vaadin&&window.Vaadin.styleModules?window.Vaadin.styleModules.getAllThemes():On}function Fn(e=""){let t=0;return 0===e.indexOf("lumo-")||0===e.indexOf("material-")?t=1:0===e.indexOf("vaadin-")&&(t=2),t}function Dn(e){const t=[];return e.include&&[].concat(e.include).forEach((e=>{const i=Mn().find((t=>t.moduleId===e));i?t.push(...Dn(i),...i.styles):console.warn(`Included moduleId ${e} not found in style registry`)}),e.styles),t}function Bn(e){const t=`${e}-default-theme`,i=Mn().filter((i=>i.moduleId!==t&&function(e,t){return(e||"").split(" ").some((e=>new RegExp(`^${e.split("*").join(".*")}$`).test(t)))}(i.themeFor,e))).map((e=>({...e,styles:[...Dn(e),...e.styles],includePriority:Fn(e.moduleId)}))).sort(((e,t)=>t.includePriority-e.includePriority));return i.length>0?i:Mn().filter((e=>e.moduleId===t))}function Nn(e){return e&&Object.prototype.hasOwnProperty.call(e,"__themes")}const Vn=e=>class extends(Tn(e)){static finalize(){if(super.finalize(),this.elementStyles)return;const e=this.prototype._template;e&&!Nn(this)&&function(e,t){const i=document.createElement("style");i.innerHTML=e.map((e=>e.cssText)).join("\n"),t.content.appendChild(i)}(this.getStylesForThis(),e)}static finalizeStyles(e){const t=this.getStylesForThis();return e?[...super.finalizeStyles(e),...t]:t}static getStylesForThis(){const e=Object.getPrototypeOf(this.prototype),t=(e?e.constructor.__themes:[])||[];this.__themes=[...t,...Bn(this.is)];const i=this.__themes.flatMap((e=>e.styles));return i.filter(((e,t)=>t===i.lastIndexOf(e)))}};Pn("",i`
  :host {
    /* Text colors */
    --material-body-text-color: var(--light-theme-text-color, rgba(0, 0, 0, 0.87));
    --material-secondary-text-color: var(--light-theme-secondary-color, rgba(0, 0, 0, 0.54));
    --material-disabled-text-color: var(--light-theme-disabled-color, rgba(0, 0, 0, 0.38));

    /* Primary colors */
    --material-primary-color: var(--primary-color, #6200ee);
    --material-primary-contrast-color: var(--dark-theme-base-color, #fff);
    --material-primary-text-color: var(--material-primary-color);

    /* Error colors */
    --material-error-color: var(--error-color, #b00020);
    --material-error-text-color: var(--material-error-color);

    /* Background colors */
    --material-background-color: var(--light-theme-background-color, #fff);
    --material-secondary-background-color: var(--light-theme-secondary-background-color, #f5f5f5);
    --material-disabled-color: rgba(0, 0, 0, 0.26);

    /* Divider colors */
    --material-divider-color: rgba(0, 0, 0, 0.12);

    /* Undocumented internal properties (prefixed with three dashes) */

    /* Text field tweaks */
    --_material-text-field-input-line-background-color: initial;
    --_material-text-field-input-line-opacity: initial;
    --_material-text-field-input-line-hover-opacity: initial;
    --_material-text-field-focused-label-opacity: initial;

    /* Button tweaks */
    --_material-button-raised-background-color: initial;
    --_material-button-outline-color: initial;

    /* Grid tweaks */
    --_material-grid-row-hover-background-color: initial;

    /* Split layout tweaks */
    --_material-split-layout-splitter-background-color: initial;

    background-color: var(--material-background-color);
    color: var(--material-body-text-color);
  }

  [theme~='dark'] {
    /* Text colors */
    --material-body-text-color: var(--dark-theme-text-color, rgba(255, 255, 255, 1));
    --material-secondary-text-color: var(--dark-theme-secondary-color, rgba(255, 255, 255, 0.7));
    --material-disabled-text-color: var(--dark-theme-disabled-color, rgba(255, 255, 255, 0.5));

    /* Primary colors */
    --material-primary-color: var(--light-primary-color, #7e3ff2);
    --material-primary-text-color: #b794f6;

    /* Error colors */
    --material-error-color: var(--error-color, #de2839);
    --material-error-text-color: var(--material-error-color);

    /* Background colors */
    --material-background-color: var(--dark-theme-background-color, #303030);
    --material-secondary-background-color: var(--dark-theme-secondary-background-color, #3b3b3b);
    --material-disabled-color: rgba(255, 255, 255, 0.3);

    /* Divider colors */
    --material-divider-color: rgba(255, 255, 255, 0.12);

    /* Undocumented internal properties (prefixed with three dashes) */

    /* Text field tweaks */
    --_material-text-field-input-line-background-color: #fff;
    --_material-text-field-input-line-opacity: 0.7;
    --_material-text-field-input-line-hover-opacity: 1;
    --_material-text-field-focused-label-opacity: 1;

    /* Button tweaks */
    --_material-button-raised-background-color: rgba(255, 255, 255, 0.08);
    --_material-button-outline-color: rgba(255, 255, 255, 0.2);

    /* Grid tweaks */
    --_material-grid-row-hover-background-color: rgba(255, 255, 255, 0.08);
    --_material-grid-row-selected-overlay-opacity: 0.16;

    /* Split layout tweaks */
    --_material-split-layout-splitter-background-color: rgba(255, 255, 255, 0.8);

    background-color: var(--material-background-color);
    color: var(--material-body-text-color);
  }

  a {
    color: inherit;
  }
`,{moduleId:"material-color-light"});Pn("",i`
  :host {
    /* Text colors */
    --material-body-text-color: var(--dark-theme-text-color, rgba(255, 255, 255, 1));
    --material-secondary-text-color: var(--dark-theme-secondary-color, rgba(255, 255, 255, 0.7));
    --material-disabled-text-color: var(--dark-theme-disabled-color, rgba(255, 255, 255, 0.5));

    /* Primary colors */
    --material-primary-color: var(--light-primary-color, #7e3ff2);
    --material-primary-text-color: #b794f6;

    /* Error colors */
    --material-error-color: var(--error-color, #de2839);
    --material-error-text-color: var(--material-error-color);

    /* Background colors */
    --material-background-color: var(--dark-theme-background-color, #303030);
    --material-secondary-background-color: var(--dark-theme-secondary-background-color, #3b3b3b);
    --material-disabled-color: rgba(255, 255, 255, 0.3);

    /* Divider colors */
    --material-divider-color: rgba(255, 255, 255, 0.12);

    /* Undocumented internal properties (prefixed with three dashes) */

    /* Text field tweaks */
    --_material-text-field-input-line-background-color: #fff;
    --_material-text-field-input-line-opacity: 0.7;
    --_material-text-field-input-line-hover-opacity: 1;
    --_material-text-field-focused-label-opacity: 1;

    /* Button tweaks */
    --_material-button-raised-background-color: rgba(255, 255, 255, 0.08);
    --_material-button-outline-color: rgba(255, 255, 255, 0.2);

    /* Grid tweaks */
    --_material-grid-row-hover-background-color: rgba(255, 255, 255, 0.08);
    --_material-grid-row-selected-overlay-opacity: 0.16;

    /* Split layout tweaks */
    --_material-split-layout-splitter-background-color: rgba(255, 255, 255, 0.8);

    background-color: var(--material-background-color);
    color: var(--material-body-text-color);
  }
`,{moduleId:"material-color-dark"});const jn=i`
  :host {
    /* Text colors */
    --material-body-text-color: var(--light-theme-text-color, rgba(0, 0, 0, 0.87));
    --material-secondary-text-color: var(--light-theme-secondary-color, rgba(0, 0, 0, 0.54));
    --material-disabled-text-color: var(--light-theme-disabled-color, rgba(0, 0, 0, 0.38));

    /* Primary colors */
    --material-primary-color: var(--primary-color, #6200ee);
    --material-primary-contrast-color: var(--dark-theme-base-color, #fff);
    --material-primary-text-color: var(--material-primary-color);

    /* Error colors */
    --material-error-color: var(--error-color, #b00020);
    --material-error-text-color: var(--material-error-color);

    /* Background colors */
    --material-background-color: var(--light-theme-background-color, #fff);
    --material-secondary-background-color: var(--light-theme-secondary-background-color, #f5f5f5);
    --material-disabled-color: rgba(0, 0, 0, 0.26);

    /* Divider colors */
    --material-divider-color: rgba(0, 0, 0, 0.12);
  }
`,qn=document.createElement("template");qn.innerHTML=`<style>${jn.toString().replace(":host","html")}</style>`,document.head.appendChild(qn.content);const Rn=i`
  :host {
    /* Font family */
    --material-font-family: 'Roboto', sans-serif;

    /* Font sizes */
    --material-h1-font-size: 6rem;
    --material-h2-font-size: 3.75rem;
    --material-h3-font-size: 3rem;
    --material-h4-font-size: 2.125rem;
    --material-h5-font-size: 1.5rem;
    --material-h6-font-size: 1.25rem;
    --material-body-font-size: 1rem;
    --material-small-font-size: 0.875rem;
    --material-button-font-size: 0.875rem;
    --material-caption-font-size: 0.75rem;

    /* Icon size */
    --material-icon-font-size: 20px;
  }
`;Pn("",i`
  body,
  :host {
    font-family: var(--material-font-family);
    font-size: var(--material-body-font-size);
    line-height: 1.4;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: inherit;
    line-height: 1.1;
    margin-top: 1.5em;
  }

  h1 {
    font-size: var(--material-h3-font-size);
    font-weight: 300;
    letter-spacing: -0.015em;
    margin-bottom: 1em;
    text-indent: -0.07em;
  }

  h2 {
    font-size: var(--material-h4-font-size);
    font-weight: 300;
    letter-spacing: -0.01em;
    margin-bottom: 0.75em;
    text-indent: -0.07em;
  }

  h3 {
    font-size: var(--material-h5-font-size);
    font-weight: 400;
    margin-bottom: 0.75em;
    text-indent: -0.05em;
  }

  h4 {
    font-size: var(--material-h6-font-size);
    font-weight: 400;
    letter-spacing: 0.01em;
    margin-bottom: 0.75em;
    text-indent: -0.05em;
  }

  h5 {
    font-size: var(--material-body-font-size);
    font-weight: 500;
    margin-bottom: 0.5em;
    text-indent: -0.025em;
  }

  h6 {
    font-size: var(--material-small-font-size);
    font-weight: 500;
    letter-spacing: 0.01em;
    margin-bottom: 0.25em;
    text-indent: -0.025em;
  }

  a,
  b,
  strong {
    font-weight: 500;
  }
`,{moduleId:"material-typography"});const Un=document.createElement("template");if(Un.innerHTML=`<style>${Rn.toString().replace(":host","html")}</style>`,document.head.appendChild(Un.content),!window.polymerSkipLoadingFontRoboto){const e="https://fonts.googleapis.com/css?family=Roboto+Mono:400,700|Roboto:400,300,300italic,400italic,500,500italic,700,700italic",t=document.createElement("link");t.rel="stylesheet",t.type="text/css",t.crossOrigin="anonymous",t.href=e,document.head.appendChild(t)}const Hn=i`
  /* prettier-ignore */
  :host {
    /* from http://codepen.io/shyndman/pen/c5394ddf2e8b2a5c9185904b57421cdb */
    --material-shadow-elevation-2dp: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
    --material-shadow-elevation-3dp: 0 3px 4px 0 rgba(0, 0, 0, 0.14), 0 1px 8px 0 rgba(0, 0, 0, 0.12), 0 3px 3px -2px rgba(0, 0, 0, 0.4);
    --material-shadow-elevation-4dp: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.4);
    --material-shadow-elevation-6dp: 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.4);
    --material-shadow-elevation-8dp: 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.4);
    --material-shadow-elevation-12dp: 0 12px 16px 1px rgba(0, 0, 0, 0.14), 0 4px 22px 3px rgba(0, 0, 0, 0.12), 0 6px 7px -4px rgba(0, 0, 0, 0.4);
    --material-shadow-elevation-16dp: 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.4);
    --material-shadow-elevation-24dp: 0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 11px 15px -7px rgba(0, 0, 0, 0.4);
  }
`,Gn=document.createElement("template");Gn.innerHTML=`<style>${Hn.toString().replace(":host","html")}</style>`,document.head.appendChild(Gn.content);const Wn=i`
  :host {
    top: 16px;
    right: 16px;
    /* TODO (@jouni): remove unnecessary multiplication after https://github.com/vaadin/vaadin-overlay/issues/90 is fixed */
    bottom: calc(1px * var(--vaadin-overlay-viewport-bottom) + 16px);
    left: 16px;
  }

  [part='overlay'] {
    background-color: var(--material-background-color);
    border-radius: 4px;
    box-shadow: var(--material-shadow-elevation-4dp);
    color: var(--material-body-text-color);
    font-family: var(--material-font-family);
    font-size: var(--material-body-font-size);
    font-weight: 400;
  }

  [part='content'] {
    padding: 8px 0;
  }

  [part='backdrop'] {
    opacity: 0.2;
    animation: 0.2s vaadin-overlay-backdrop-enter;
    will-change: opacity;
  }

  @keyframes vaadin-overlay-backdrop-enter {
    0% {
      opacity: 0;
    }
  }
`;Pn("",Wn,{moduleId:"material-overlay"}),Pn("vaadin-overlay",Wn,{moduleId:"material-vaadin-overlay"});const Kn=e=>e.test(navigator.userAgent),Yn=e=>e.test(navigator.platform);Kn(/Android/),Kn(/Chrome/)&&/Google Inc/.test(navigator.vendor),Kn(/Firefox/);const Zn=Yn(/^iPad/)||Yn(/^Mac/)&&navigator.maxTouchPoints>1,Qn=Yn(/^iPhone/)||Zn,Xn=Kn(/^((?!chrome|android).)*safari/i),Jn=(()=>{try{return document.createEvent("TouchEvent"),!0}catch(e){return!1}})(),eo=a((e=>class extends e{constructor(){super(),this.__controllers=new Set}connectedCallback(){super.connectedCallback(),this.__controllers.forEach((e=>{e.hostConnected&&e.hostConnected()}))}disconnectedCallback(){super.disconnectedCallback(),this.__controllers.forEach((e=>{e.hostDisconnected&&e.hostDisconnected()}))}addController(e){this.__controllers.add(e),void 0!==this.$&&this.isConnected&&e.hostConnected&&e.hostConnected()}removeController(e){this.__controllers.delete(e)}}));class to{static detectScrollType(){const e=document.createElement("div");e.textContent="ABCD",e.dir="rtl",e.style.fontSize="14px",e.style.width="4px",e.style.height="1px",e.style.position="absolute",e.style.top="-1000px",e.style.overflow="scroll",document.body.appendChild(e);let t="reverse";return e.scrollLeft>0?t="default":(e.scrollLeft=2,e.scrollLeft<2&&(t="negative")),document.body.removeChild(e),t}static getNormalizedScrollLeft(e,t,i){const{scrollLeft:a}=i;if("rtl"!==t||!e)return a;switch(e){case"negative":return i.scrollWidth-i.clientWidth+a;case"reverse":return i.scrollWidth-i.clientWidth-a;default:return a}}static setNormalizedScrollLeft(e,t,i,a){if("rtl"===t&&e)switch(e){case"negative":i.scrollLeft=i.clientWidth-i.scrollWidth+a;break;case"reverse":i.scrollLeft=i.scrollWidth-i.clientWidth-a;break;default:i.scrollLeft=a}else i.scrollLeft=a}}const io=[];let ao;function no(e,t,i=e.getAttribute("dir")){t?e.setAttribute("dir",t):null!=i&&e.removeAttribute("dir")}function oo(){return document.documentElement.getAttribute("dir")}new MutationObserver((function(){const e=oo();io.forEach((t=>{no(t,e)}))})).observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]});const so=e=>class extends e{static get properties(){return{dir:{type:String,value:"",reflectToAttribute:!0,converter:{fromAttribute:e=>e||"",toAttribute:e=>""===e?null:e}}}}static finalize(){super.finalize(),ao||(ao=to.detectScrollType())}connectedCallback(){super.connectedCallback(),this.hasAttribute("dir")||(this.__subscribe(),no(this,oo(),null))}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),"dir"!==e)return;const a=oo(),n=i===a&&-1===io.indexOf(this),o=!i&&t&&-1===io.indexOf(this),s=i!==a&&t===a;n||o?(this.__subscribe(),no(this,a,i)):s&&this.__subscribe(!1)}disconnectedCallback(){super.disconnectedCallback(),this.__subscribe(!1),this.removeAttribute("dir")}_valueToNodeAttribute(e,t,i){("dir"!==i||""!==t||e.hasAttribute("dir"))&&super._valueToNodeAttribute(e,t,i)}_attributeToProperty(e,t,i){"dir"!==e||t?super._attributeToProperty(e,t,i):this.dir=""}__subscribe(e=!0){e?io.includes(this)||io.push(this):io.includes(this)&&io.splice(io.indexOf(this),1)}__getNormalizedScrollLeft(e){return to.getNormalizedScrollLeft(ao,this.getAttribute("dir")||"ltr",e)}__setNormalizedScrollLeft(e,t){return to.setNormalizedScrollLeft(ao,this.getAttribute("dir")||"ltr",e,t)}};function ro(e,t){const i=Math.max(e.tabIndex,0),a=Math.max(t.tabIndex,0);return 0===i||0===a?a>i:i>a}function lo(e){const t=e.length;if(t<2)return e;const i=Math.ceil(t/2);return function(e,t){const i=[];for(;e.length>0&&t.length>0;)ro(e[0],t[0])?i.push(t.shift()):i.push(e.shift());return i.concat(e,t)}(lo(e.slice(0,i)),lo(e.slice(i)))}function co(e,t){if(e.nodeType!==Node.ELEMENT_NODE||function(e){const t=e.style;if("hidden"===t.visibility||"none"===t.display)return!0;const i=window.getComputedStyle(e);return"hidden"===i.visibility||"none"===i.display}(e))return!1;const i=e,a=function(e){if(!function(e){return!e.matches('[tabindex="-1"]')&&(e.matches("input, select, textarea, button, object")?e.matches(":not([disabled])"):e.matches("a[href], area[href], iframe, [tabindex], [contentEditable]"))}(e))return-1;const t=e.getAttribute("tabindex")||0;return Number(t)}(i);let n=a>0;a>=0&&t.push(i);let o=[];return o="slot"===i.localName?i.assignedNodes({flatten:!0}):(i.shadowRoot||i).children,[...o].forEach((e=>{n=co(e,t)||n})),n}function uo(e){return e.getRootNode().activeElement===e}const ho=[];class po{constructor(e){this.host=e,this.__trapNode=null,this.__onKeyDown=this.__onKeyDown.bind(this)}hostConnected(){document.addEventListener("keydown",this.__onKeyDown)}hostDisconnected(){document.removeEventListener("keydown",this.__onKeyDown)}trapFocus(e){if(this.__trapNode=e,0===this.__focusableElements.length)throw this.__trapNode=null,new Error("The trap node should have at least one focusable descendant or be focusable itself.");ho.push(this),-1===this.__focusedElementIndex&&this.__focusableElements[0].focus()}releaseFocus(){this.__trapNode=null,ho.pop()}__onKeyDown(e){if(this.__trapNode&&this===Array.from(ho).pop()&&"Tab"===e.key){e.preventDefault();const t=e.shiftKey;this.__focusNextElement(t)}}__focusNextElement(e=!1){const t=this.__focusableElements,i=e?-1:1,a=this.__focusedElementIndex;t[(t.length+a+i)%t.length].focus()}get __focusableElements(){return function(e){const t=[];return co(e,t)?lo(t):t}(this.__trapNode)}get __focusedElementIndex(){const e=this.__focusableElements;return e.indexOf(e.filter(uo).pop())}}class vo extends(Vn(so(eo(n)))){static get template(){return o`
      <style>
        :host {
          z-index: 200;
          position: fixed;

          /* Despite of what the names say, <vaadin-overlay> is just a container
          for position/sizing/alignment. The actual overlay is the overlay part. */

          /* Default position constraints: the entire viewport. Note: themes can
          override this to introduce gaps between the overlay and the viewport. */
          top: 0;
          right: 0;
          bottom: var(--vaadin-overlay-viewport-bottom);
          left: 0;

          /* Use flexbox alignment for the overlay part. */
          display: flex;
          flex-direction: column; /* makes dropdowns sizing easier */
          /* Align to center by default. */
          align-items: center;
          justify-content: center;

          /* Allow centering when max-width/max-height applies. */
          margin: auto;

          /* The host is not clickable, only the overlay part is. */
          pointer-events: none;

          /* Remove tap highlight on touch devices. */
          -webkit-tap-highlight-color: transparent;

          /* CSS API for host */
          --vaadin-overlay-viewport-bottom: 0;
        }

        :host([hidden]),
        :host(:not([opened]):not([closing])) {
          display: none !important;
        }

        [part='overlay'] {
          -webkit-overflow-scrolling: touch;
          overflow: auto;
          pointer-events: auto;

          /* Prevent overflowing the host in MSIE 11 */
          max-width: 100%;
          box-sizing: border-box;

          -webkit-tap-highlight-color: initial; /* reenable tap highlight inside */
        }

        [part='backdrop'] {
          z-index: -1;
          content: '';
          background: rgba(0, 0, 0, 0.5);
          position: fixed;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          pointer-events: auto;
        }
      </style>

      <div id="backdrop" part="backdrop" hidden$="[[!withBackdrop]]"></div>
      <div part="overlay" id="overlay" tabindex="0">
        <div part="content" id="content">
          <slot></slot>
        </div>
      </div>
    `}static get is(){return"vaadin-overlay"}static get properties(){return{opened:{type:Boolean,notify:!0,observer:"_openedChanged",reflectToAttribute:!0},owner:Element,renderer:Function,template:{type:Object,notify:!0},content:{type:Object,notify:!0},withBackdrop:{type:Boolean,value:!1,reflectToAttribute:!0},model:Object,modeless:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_modelessChanged"},hidden:{type:Boolean,reflectToAttribute:!0,observer:"_hiddenChanged"},focusTrap:{type:Boolean,value:!1},restoreFocusOnClose:{type:Boolean,value:!1},restoreFocusNode:{type:HTMLElement},_mouseDownInside:{type:Boolean},_mouseUpInside:{type:Boolean},_instance:{type:Object},_originalContentPart:Object,_contentNodes:Array,_oldOwner:Element,_oldModel:Object,_oldTemplate:Object,_oldRenderer:Object,_oldOpened:Boolean}}static get observers(){return["_templateOrRendererChanged(template, renderer, owner, model, opened)"]}constructor(){super(),this._boundMouseDownListener=this._mouseDownListener.bind(this),this._boundMouseUpListener=this._mouseUpListener.bind(this),this._boundOutsideClickListener=this._outsideClickListener.bind(this),this._boundKeydownListener=this._keydownListener.bind(this),this._observer=new s(this,(e=>{this._setTemplateFromNodes(e.addedNodes)})),this._boundIronOverlayCanceledListener=this._ironOverlayCanceled.bind(this),Qn&&(this._boundIosResizeListener=()=>this._detectIosNavbar()),this.__focusTrapController=new po(this)}ready(){super.ready(),this._observer.flush(),this.addEventListener("click",(()=>{})),this.$.backdrop.addEventListener("click",(()=>{})),this.addController(this.__focusTrapController)}_detectIosNavbar(){if(!this.opened)return;const e=window.innerHeight,t=window.innerWidth>e,i=document.documentElement.clientHeight;t&&i>e?this.style.setProperty("--vaadin-overlay-viewport-bottom",i-e+"px"):this.style.setProperty("--vaadin-overlay-viewport-bottom","0")}_setTemplateFromNodes(e){this.template=e.filter((e=>e.localName&&"template"===e.localName))[0]||this.template}close(e){const t=new CustomEvent("vaadin-overlay-close",{bubbles:!0,cancelable:!0,detail:{sourceEvent:e}});this.dispatchEvent(t),t.defaultPrevented||(this.opened=!1)}connectedCallback(){super.connectedCallback(),this._boundIosResizeListener&&(this._detectIosNavbar(),window.addEventListener("resize",this._boundIosResizeListener))}disconnectedCallback(){super.disconnectedCallback(),this._boundIosResizeListener&&window.removeEventListener("resize",this._boundIosResizeListener)}requestContentUpdate(){this.renderer&&this.renderer.call(this.owner,this.content,this.owner,this.model)}_ironOverlayCanceled(e){e.preventDefault()}_mouseDownListener(e){this._mouseDownInside=e.composedPath().indexOf(this.$.overlay)>=0}_mouseUpListener(e){this._mouseUpInside=e.composedPath().indexOf(this.$.overlay)>=0}_outsideClickListener(e){if(e.composedPath().includes(this.$.overlay)||this._mouseDownInside||this._mouseUpInside)return this._mouseDownInside=!1,void(this._mouseUpInside=!1);if(!this._last)return;const t=new CustomEvent("vaadin-overlay-outside-click",{bubbles:!0,cancelable:!0,detail:{sourceEvent:e}});this.dispatchEvent(t),this.opened&&!t.defaultPrevented&&this.close(e)}_keydownListener(e){if(this._last&&(!this.modeless||e.composedPath().includes(this.$.overlay))&&"Escape"===e.key){const t=new CustomEvent("vaadin-overlay-escape-press",{bubbles:!0,cancelable:!0,detail:{sourceEvent:e}});this.dispatchEvent(t),this.opened&&!t.defaultPrevented&&this.close(e)}}_ensureTemplatized(){this._setTemplateFromNodes(Array.from(this.children))}_openedChanged(e,t){var i,a,n;this._instance||this._ensureTemplatized(),e?(this.__restoreFocusNode=this._getActiveElement(),this._animatedOpening(),i=this,a=()=>{this.focusTrap&&this.__focusTrapController.trapFocus(this.$.overlay);const e=new CustomEvent("vaadin-overlay-open",{bubbles:!0});this.dispatchEvent(e)},Ua||Wa(),Ga.push([i,a,n]),document.addEventListener("keydown",this._boundKeydownListener),this.modeless||this._addGlobalListeners()):t&&(this.focusTrap&&this.__focusTrapController.releaseFocus(),this._animatedClosing(),document.removeEventListener("keydown",this._boundKeydownListener),this.modeless||this._removeGlobalListeners())}_hiddenChanged(e){e&&this.hasAttribute("closing")&&this._flushAnimation("closing")}_shouldAnimate(){const e=getComputedStyle(this).getPropertyValue("animation-name");return!("none"===getComputedStyle(this).getPropertyValue("display"))&&e&&"none"!==e}_enqueueAnimation(e,t){const i=`__${e}Handler`,a=e=>{e&&e.target!==this||(t(),this.removeEventListener("animationend",a),delete this[i])};this[i]=a,this.addEventListener("animationend",a)}_flushAnimation(e){const t=`__${e}Handler`;"function"==typeof this[t]&&this[t]()}_animatedOpening(){this.parentNode===document.body&&this.hasAttribute("closing")&&this._flushAnimation("closing"),this._attachOverlay(),this.modeless||this._enterModalState(),this.setAttribute("opening",""),this._shouldAnimate()?this._enqueueAnimation("opening",(()=>{this._finishOpening()})):this._finishOpening()}_attachOverlay(){this._placeholder=document.createComment("vaadin-overlay-placeholder"),this.parentNode.insertBefore(this._placeholder,this),document.body.appendChild(this),this.bringToFront()}_finishOpening(){document.addEventListener("iron-overlay-canceled",this._boundIronOverlayCanceledListener),this.removeAttribute("opening")}_finishClosing(){document.removeEventListener("iron-overlay-canceled",this._boundIronOverlayCanceledListener),this._detachOverlay(),this.$.overlay.style.removeProperty("pointer-events"),this.removeAttribute("closing")}_animatedClosing(){if(this.hasAttribute("opening")&&this._flushAnimation("opening"),this._placeholder){this._exitModalState();const e=this.restoreFocusNode||this.__restoreFocusNode;if(this.restoreFocusOnClose&&e){const t=this._getActiveElement();(t===document.body||this._deepContains(t))&&setTimeout((()=>e.focus())),this.__restoreFocusNode=null}this.setAttribute("closing",""),this.dispatchEvent(new CustomEvent("vaadin-overlay-closing")),this._shouldAnimate()?this._enqueueAnimation("closing",(()=>{this._finishClosing()})):this._finishClosing()}}_detachOverlay(){this._placeholder.parentNode.insertBefore(this,this._placeholder),this._placeholder.parentNode.removeChild(this._placeholder)}static get __attachedInstances(){return Array.from(document.body.children).filter((e=>e instanceof vo&&!e.hasAttribute("closing"))).sort(((e,t)=>e.__zIndex-t.__zIndex||0))}get _last(){return this===vo.__attachedInstances.pop()}_modelessChanged(e){e?(this._removeGlobalListeners(),this._exitModalState()):this.opened&&(this._addGlobalListeners(),this._enterModalState())}_addGlobalListeners(){document.addEventListener("mousedown",this._boundMouseDownListener),document.addEventListener("mouseup",this._boundMouseUpListener),document.documentElement.addEventListener("click",this._boundOutsideClickListener,!0)}_enterModalState(){"none"!==document.body.style.pointerEvents&&(this._previousDocumentPointerEvents=document.body.style.pointerEvents,document.body.style.pointerEvents="none"),vo.__attachedInstances.forEach((e=>{e!==this&&(e.shadowRoot.querySelector('[part="overlay"]').style.pointerEvents="none")}))}_removeGlobalListeners(){document.removeEventListener("mousedown",this._boundMouseDownListener),document.removeEventListener("mouseup",this._boundMouseUpListener),document.documentElement.removeEventListener("click",this._boundOutsideClickListener,!0)}_exitModalState(){void 0!==this._previousDocumentPointerEvents&&(document.body.style.pointerEvents=this._previousDocumentPointerEvents,delete this._previousDocumentPointerEvents);const e=vo.__attachedInstances;let t;for(;(t=e.pop())&&(t===this||(t.shadowRoot.querySelector('[part="overlay"]').style.removeProperty("pointer-events"),t.modeless)););}_removeOldContent(){this.content&&this._contentNodes&&(this._observer.disconnect(),this._contentNodes.forEach((e=>{e.parentNode===this.content&&this.content.removeChild(e)})),this._originalContentPart&&(this.$.content.parentNode.replaceChild(this._originalContentPart,this.$.content),this.$.content=this._originalContentPart,this._originalContentPart=void 0),this._observer.connect(),this._contentNodes=void 0,this.content=void 0)}_stampOverlayTemplate(e){this._removeOldContent(),e._Templatizer||(e._Templatizer=r(e,this,{forwardHostProp(e,t){this._instance&&this._instance.forwardHostProp(e,t)}})),this._instance=new e._Templatizer({}),this._contentNodes=Array.from(this._instance.root.childNodes);const t=e._templateRoot||(e._templateRoot=e.getRootNode());if(t!==document){this.$.content.shadowRoot||this.$.content.attachShadow({mode:"open"});let e=Array.from(t.querySelectorAll("style")).reduce(((e,t)=>e+t.textContent),"");if(e=e.replace(/:host/g,":host-nomatch"),e){const t=document.createElement("style");t.textContent=e,this.$.content.shadowRoot.appendChild(t),this._contentNodes.unshift(t)}this.$.content.shadowRoot.appendChild(this._instance.root),this.content=this.$.content.shadowRoot}else this.appendChild(this._instance.root),this.content=this}_removeNewRendererOrTemplate(e,t,i,a){e!==t?this.template=void 0:i!==a&&(this.renderer=void 0)}_templateOrRendererChanged(e,t,i,a,n){if(e&&t)throw this._removeNewRendererOrTemplate(e,this._oldTemplate,t,this._oldRenderer),new Error("You should only use either a renderer or a template for overlay content");const o=this._oldOwner!==i||this._oldModel!==a;this._oldModel=a,this._oldOwner=i;const s=this._oldTemplate!==e;this._oldTemplate=e;const r=this._oldRenderer!==t;this._oldRenderer=t;const l=this._oldOpened!==n;this._oldOpened=n,r&&(this.content=this,this.content.innerHTML="",delete this.content._$litPart$),e&&s?this._stampOverlayTemplate(e):t&&(r||l||o)&&n&&this.requestContentUpdate()}_getActiveElement(){let e=document.activeElement||document.body;for(;e.shadowRoot&&e.shadowRoot.activeElement;)e=e.shadowRoot.activeElement;return e}_deepContains(e){if(this.contains(e))return!0;let t=e;const i=e.ownerDocument;for(;t&&t!==i&&t!==this;)t=t.parentNode||t.host;return t===this}bringToFront(){let e="";const t=vo.__attachedInstances.filter((e=>e!==this)).pop();if(t){e=t.__zIndex+1}this.style.zIndex=e,this.__zIndex=e||parseFloat(getComputedStyle(this).zIndex)}}customElements.define(vo.is,vo);const mo=Wn;Pn("",mo,{moduleId:"material-menu-overlay"});Pn("vaadin-combo-box-overlay",[mo,i`
  :host {
    --_vaadin-combo-box-items-container-border-width: 8px 0;
    --_vaadin-combo-box-items-container-border-style: solid;
    --_vaadin-combo-box-items-container-border-color: transparent;
  }

  [part='overlay'] {
    position: relative;
    overflow: visible;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }

  [part='content'] {
    padding: 0;
  }

  :host([loading]) [part='loader'] {
    height: 2px;
    position: absolute;
    z-index: 1;
    top: -2px;
    left: 0;
    right: 0;
    background: var(--material-background-color)
      linear-gradient(
        90deg,
        transparent 0%,
        transparent 20%,
        var(--material-primary-color) 20%,
        var(--material-primary-color) 40%,
        transparent 40%,
        transparent 60%,
        var(--material-primary-color) 60%,
        var(--material-primary-color) 80%,
        transparent 80%,
        transparent 100%
      )
      0 0 / 400% 100% repeat-x;
    opacity: 0;
    animation: 3s linear infinite material-combo-box-loader-progress, 0.3s 0.1s both material-combo-box-loader-fade-in;
  }

  [part='loader']::before {
    content: '';
    display: block;
    height: 100%;
    opacity: 0.16;
    background: var(--material-primary-color);
  }

  @keyframes material-combo-box-loader-fade-in {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  @keyframes material-combo-box-loader-progress {
    0% {
      background-position: 0 0;
      background-size: 300% 100%;
    }

    33% {
      background-position: -100% 0;
      background-size: 400% 100%;
    }

    67% {
      background-position: -200% 0;
      background-size: 250% 100%;
    }

    100% {
      background-position: -300% 0;
      background-size: 300% 100%;
    }
  }

  /* RTL specific styles */

  @keyframes material-combo-box-loader-progress-rtl {
    0% {
      background-position: 100% 0;
      background-size: 300% 100%;
    }

    33% {
      background-position: 200% 0;
      background-size: 400% 100%;
    }

    67% {
      background-position: 300% 0;
      background-size: 250% 100%;
    }

    100% {
      background-position: 400% 0;
      background-size: 300% 100%;
    }
  }

  :host([loading][dir='rtl']) [part='loader'] {
    animation: 3s linear infinite material-combo-box-loader-progress-rtl,
      0.3s 0.1s both material-combo-box-loader-fade-in;
  }
`],{moduleId:"material-combo-box-overlay"});const fo=document.createElement("template");fo.innerHTML='\n  <style>\n    @font-face {\n      font-family: \'material-icons\';\n      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAjAAAsAAAAADaAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADsAAABUIIslek9TLzIAAAFEAAAARAAAAFZSk1xEY21hcAAAAYgAAACNAAACNOuCXH5nbHlmAAACGAAABDoAAAX4NWGBxmhlYWQAAAZUAAAAMAAAADZhSa2YaGhlYQAABoQAAAAeAAAAJBGxCLtobXR4AAAGpAAAABMAAABAjXoAAGxvY2EAAAa4AAAAIgAAACIKMAjcbWF4cAAABtwAAAAfAAAAIAEeAFRuYW1lAAAG/AAAATQAAAJe3l764XBvc3QAAAgwAAAAkAAAAMondETCeJxjYGRgYOBiMGCwY2BycfMJYeDLSSzJY5BiYGGAAJA8MpsxJzM9kYEDxgPKsYBpDiBmg4gCACY7BUgAeJxjYOS4wTiBgZWBga2WbQIDA2MAhGZpYChlymZgYGJgZWbACgLSXFMYHF4xvuJnv/CvgOEG+wXG6UBhRpAcAA0HDXt4nO2R2Q0DIQxEHwt7HzSSGlJQvlJkqqGJjYdJGbH0PPJgELKBEcjBIyiQ3iQUr3BT9zNb9wvP3lPkt3rfkZNy1KXnIXpLvDgxs7DGvZ2Dk4saxxP/OHr+/KqqCZo+08EgzUa7acVoym002lubDNLZIF0M0tUg3Yz22XaD9DD6XTsN0ssgrYb6BZEQJiUAAAB4nH1UXUgcVxS+Z2ZnZpeq7IT9CbTY2Z24o1m72+zPTB/UFSS2MWssTZRs6doqialmy27bPIghPzQttCxjfEhjfGhoUFLBQoVdKixSkofCEkurwQdBgw1NqeCWFrokVt3b3pnRqm3J/Nw598537v3Od869CBC5uFm2EZkRAgl4kQcOuFm1NJcv3R+kBVpQS/dNdzcilH9w80e0F+8EPsiDAjCkUv485SMIgqd8GxHT3dIc8UYUQnjefINLoGfR88RDDIt2F3lFdwXYeVslBF2BBgjzIR/QLt7FzZ7Kb+7Pn5LfkMnDNhrfP++wjexYnlx6Z9fPtTXGZnAyh5hbiEHIApwFJPpD/OYg5TdNqnAJbpFgiGXgWIbp13AgWQhxllFL49RJFcumVWKVxlWY2cI1buHIdE6gV1S4h2WVOsn0qziMw8Ta0iLBLKFnjPk0qDYrlyArluaIJnpD+UmXaSONbu38IO40Qn+9RPQxo/3oEFLIPG6ORRxrdTqQ0yEoMlJkq+RBkod2Sz6QPFalARRZcFaC02HlKoBjaVFLgemrmVwGr0aPHYuCPZOD4VwG7NG2tihezeRmRq8NPaiPROofDF2D5h373etU+VHcwJkJrJDN4b5cFhc0J7Blc3A9lwVbtG1t7T9+OKfbjK00jr89D1r4umZj9IqWcQtFTUMRivQKLoPinhifQ8LTYhTDwbDIB02TM//HxGB5RiuEp1NeP5DPkwQZ+pLa2GQr0D7kRY3ba/+z8C5lQ7qyAV1Zm6EswXKszelwOgKKrMghySN5TJOPlxfwVEcHHFlYhsLyAhzp6MBTC8uPe+KxtEeSPOlY/Lsds+e15qbqmprqpuaxbYOt6IrjicVFPBHv6opD++IitMe7Nir/7WqYtLDHWTeQieyrXssyN4sqUBWqQy8jVMWKgqaivE/RahBYu02PJRhQJFZ0a9zDIcUCcjikxyu6OUkOCloSWIoMBwNaoHYb+8v8I1wsruKRzro7FzGXNi+l12PV3oPD3aeTZ7uzZeWxaEttLZi68Q+yt0YbvZD69acnUPZHAc50Rr4vfYYvCm4d1Nna1wPv/zYClrdhLf3kQJr5ovts8nT3cI23OgMveFuisfLyUh4OpS5oowe9cuH13h6s/v45LsB7cIWt9ba0xlxo114j9QU80IIpyiytf0xNo11nko90SJiCnj3rdvREEFEbEPfm2eEEF8/+nLxqlHNdJFJHSnt0avTmw9rZmvHUucsDycRtn9/vu51IFpN9x/E31DTTnty7B0jh8V+e+zoQ2oJpHi/6TmhYjRalNZa3CLcqVGuw05XX+Gj3do5cAZ1VWC8x4MlRSI6Tq+6+3pGbmcErl+5FPj0/cPgVfY0BxmZUWqS+N1HqxSk8r2+2RxPpT1pfDQam+q0njl/+6IbB3qjBD1LvNB3GD3EKhqCIy9DfIQrMlQAAeJxjYGRgYABiYWGbw/H8Nl8ZuDkTgCIMNaobGhH0v0zO++wXgFwOBiaQKAAHHgoPeJxjYGRgYL/wr4CBgcuKAQg47zMwMqACAQBc2wOEAAB4nGNgYGDgTCAec1mh8gG9VgYDAAAAAAAAGAAwAGIAdgCKAJ4AwAEkATIBcAHcAlQCYgKwAvwAAHicY2BkYGAQYPBgYGEAASYg5gJCBob/YD4DABFeAXMAeJx9kL1uwjAUhU8gUJVIVaWqnRgsVepSEX5G1BkkRgb2EBwIcuLIMUi8QR+kT9CH6NgH6VP0xHiBAVtyvvvdc50oAB7xgwDNCvDgzma1cMfqzG3Ss+eQ/Oq5gwhjz136D889vGPhOcITDrwhCO9p+vj03GL+y3Ob/ttzSP713MEL/jx30Q/guYdV0Pcc4S0wRWKlyRM1yFNd1ku5PajkSl5WK2nqXJdiHI8uG3NZSkOzEeuTqI/bibWZyIwuxEyXViqlRWX0XqY23llbTYfDzPs41QUKJLCQMMhJCgM+U2iUqLGk3/JfKHbMzeSt3sr5mqapBf9/jNHNiTl96XrnzIZTa5x41jjyiya0FhnrjBnNuwRmbrZJK25NU7nenialj7FzUxWmGHJnV/nYvb34BzHZcLZ4nG2M0Q6CMBRDV2CIOhTf/Ak+am5XIdyw5QoS/l4W4ptN2uYkTVWmdt3VfzXIkKOARokDKhxxwhkGNS64osFNXaxIWFoflnGx4s2Oc0xQOcs0eivadeQGs+VHwtgyPaf6B9K/ukk7pjTj4IbKS4jpT9P2JTmtZDa3vn/bB5MvItu1FOJgfTnHVEp9AbKdMX4=) format(\'woff\');\n      font-weight: normal;\n      font-style: normal;\n    }\n\n    html {\n      --material-icons-arrow-downward: "\\ea01";\n      --material-icons-arrow-upward: "\\ea02";\n      --material-icons-calendar: "\\ea03";\n      --material-icons-check: "\\ea04";\n      --material-icons-chevron-left: "\\ea05";\n      --material-icons-chevron-right: "\\ea06";\n      --material-icons-clear: "\\ea07";\n      --material-icons-clock: "\\ea08";\n      --material-icons-dropdown: "\\ea09";\n      --material-icons-error: "\\ea0a";\n      --material-icons-eye: "\\ea0b";\n      --material-icons-eye-disabled: "\\ea0c";\n      --material-icons-play: "\\ea0d";\n      --material-icons-reload: "\\ea0e";\n      --material-icons-upload: "\\ea0f";\n    }\n  </style>\n',document.head.appendChild(fo.content);const go=i`
  :host {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    min-height: 36px;
    padding: 8px 32px 8px 10px;
    overflow: hidden;
    font-family: var(--material-font-family);
    font-size: var(--material-small-font-size);
    line-height: 24px;
  }

  /* It's the list-box's responsibility to add the focus style */
  :host([focused]) {
    outline: none;
  }

  /* Checkmark */
  [part='checkmark']::before {
    display: var(--_material-item-selected-icon-display, none);
    content: '';
    font-family: material-icons;
    font-size: 24px;
    line-height: 1;
    font-weight: 400;
    width: 24px;
    text-align: center;
    margin-right: 10px;
    color: var(--material-secondary-text-color);
    flex: none;
  }

  :host([selected]) [part='checkmark']::before {
    content: var(--material-icons-check);
  }

  @media (any-hover: hover) {
    :host(:hover:not([disabled])) {
      background-color: var(--material-secondary-background-color);
    }

    :host([focused]:not([disabled])) {
      background-color: var(--material-divider-color);
    }
  }

  /* Disabled */
  :host([disabled]) {
    color: var(--material-disabled-text-color);
    cursor: default;
    pointer-events: none;
  }

  /* RTL specific styles */
  :host([dir='rtl']) {
    padding: 8px 10px 8px 32px;
  }

  :host([dir='rtl']) [part='checkmark']::before {
    margin-right: 0;
    margin-left: 10px;
  }
`;Pn("vaadin-item",go,{moduleId:"material-item"});Pn("vaadin-combo-box-item",[go,i`
  :host {
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    padding: 4px 10px;
    --_material-item-selected-icon-display: block;
  }
`],{moduleId:"material-combo-box-item"});class _o extends(Vn(so(n))){static get template(){return o`
      <style>
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none;
        }
      </style>
      <span part="checkmark" aria-hidden="true"></span>
      <div part="content">
        <slot></slot>
      </div>
    `}static get is(){return"vaadin-combo-box-item"}static get properties(){return{index:Number,item:Object,label:String,selected:{type:Boolean,value:!1,reflectToAttribute:!0},focused:{type:Boolean,value:!1,reflectToAttribute:!0},renderer:Function,_oldRenderer:Function}}static get observers(){return["__rendererOrItemChanged(renderer, index, item.*, selected, focused)","__updateLabel(label, renderer)"]}connectedCallback(){super.connectedCallback(),this._comboBox=this.parentNode.comboBox;const e=this._comboBox.getAttribute("dir");e&&this.setAttribute("dir",e)}requestContentUpdate(){if(!this.renderer)return;const e={index:this.index,item:this.item,focused:this.focused,selected:this.selected};this.renderer(this,this._comboBox,e)}__rendererOrItemChanged(e,t,i){void 0!==i&&void 0!==t&&(this._oldRenderer!==e&&(this.innerHTML="",delete this._$litPart$),e&&(this._oldRenderer=e,this.requestContentUpdate()))}__updateLabel(e,t){t||(this.textContent=e)}}customElements.define(_o.is,_o);const yo={start:"top",end:"bottom"},ko={start:"left",end:"right"},bo=e=>class extends e{static get properties(){return{positionTarget:{type:Object,value:null},horizontalAlign:{type:String,value:"start"},verticalAlign:{type:String,value:"top"},noHorizontalOverlap:{type:Boolean,value:!1},noVerticalOverlap:{type:Boolean,value:!1}}}static get observers(){return["__positionSettingsChanged(horizontalAlign, verticalAlign, noHorizontalOverlap, noVerticalOverlap)","__overlayOpenedChanged(opened, positionTarget)"]}constructor(){super(),this._updatePosition=this._updatePosition.bind(this)}connectedCallback(){super.connectedCallback(),this.opened&&this.__addUpdatePositionEventListeners()}disconnectedCallback(){super.disconnectedCallback(),this.__removeUpdatePositionEventListeners()}__addUpdatePositionEventListeners(){window.addEventListener("resize",this._updatePosition),this.__positionTargetAncestorRootNodes=function(e){const t=[];for(;e;){if(e.nodeType===Node.DOCUMENT_NODE){t.push(e);break}e.nodeType!==Node.DOCUMENT_FRAGMENT_NODE?e=e.assignedSlot?e.assignedSlot:e.parentNode:(t.push(e),e=e.host)}return t}(this.positionTarget),this.__positionTargetAncestorRootNodes.forEach((e=>{e.addEventListener("scroll",this._updatePosition,!0)}))}__removeUpdatePositionEventListeners(){window.removeEventListener("resize",this._updatePosition),this.__positionTargetAncestorRootNodes&&(this.__positionTargetAncestorRootNodes.forEach((e=>{e.removeEventListener("scroll",this._updatePosition,!0)})),this.__positionTargetAncestorRootNodes=null)}__overlayOpenedChanged(e,t){if(this.__removeUpdatePositionEventListeners(),e&&t&&this.__addUpdatePositionEventListeners(),e){const e=getComputedStyle(this);this.__margins||(this.__margins={},["top","bottom","left","right"].forEach((t=>{this.__margins[t]=parseInt(e[t],10)}))),this.setAttribute("dir",e.direction),this._updatePosition(),requestAnimationFrame((()=>this._updatePosition()))}}get __isRTL(){return"rtl"===this.getAttribute("dir")}__positionSettingsChanged(){this._updatePosition()}_updatePosition(){if(!this.positionTarget||!this.opened)return;const e=this.positionTarget.getBoundingClientRect(),t=this.__shouldAlignStartVertically(e);this.style.justifyContent=t?"flex-start":"flex-end";const i=this.__shouldAlignStartHorizontally(e,this.__isRTL),a=!this.__isRTL&&i||this.__isRTL&&!i;this.style.alignItems=a?"flex-start":"flex-end";const n=this.getBoundingClientRect(),o=this.__calculatePositionInOneDimension(e,n,this.noVerticalOverlap,yo,this,t),s=this.__calculatePositionInOneDimension(e,n,this.noHorizontalOverlap,ko,this,i);Object.assign(this.style,o,s),this.toggleAttribute("bottom-aligned",!t),this.toggleAttribute("top-aligned",t),this.toggleAttribute("end-aligned",!a),this.toggleAttribute("start-aligned",a)}__shouldAlignStartHorizontally(e,t){const i=Math.max(this.__oldContentWidth||0,this.$.overlay.offsetWidth);this.__oldContentWidth=this.$.overlay.offsetWidth;const a=Math.min(window.innerWidth,document.documentElement.clientWidth),n=!t&&"start"===this.horizontalAlign||t&&"end"===this.horizontalAlign;return this.__shouldAlignStart(e,i,a,this.__margins,n,this.noHorizontalOverlap,ko)}__shouldAlignStartVertically(e){const t=Math.max(this.__oldContentHeight||0,this.$.overlay.offsetHeight);this.__oldContentHeight=this.$.overlay.offsetHeight;const i=Math.min(window.innerHeight,document.documentElement.clientHeight),a="top"===this.verticalAlign;return this.__shouldAlignStart(e,t,i,this.__margins,a,this.noVerticalOverlap,yo)}__shouldAlignStart(e,t,i,a,n,o,s){const r=i-e[o?s.end:s.start]-a[s.end],l=e[o?s.start:s.end]-a[s.start],d=n?r:l;return n===(d>(n?l:r)||d>t)}__calculatePositionInOneDimension(e,t,i,a,n,o){const s=o?a.start:a.end,r=o?a.end:a.start;return{[s]:`${parseFloat(n.style[s]||getComputedStyle(n)[s])+(t[o?a.start:a.end]-e[i===o?a.end:a.start])*(o?-1:1)}px`,[r]:""}}};let xo;Pn("vaadin-combo-box-overlay",i`
    #overlay {
      width: var(--vaadin-combo-box-overlay-width, var(--_vaadin-combo-box-overlay-default-width, auto));
    }

    [part='content'] {
      display: flex;
      flex-direction: column;
      height: 100%;
    }
  `,{moduleId:"vaadin-combo-box-overlay-styles"});class $o extends(bo(vo)){static get is(){return"vaadin-combo-box-overlay"}static get template(){return xo||(xo=super.template.cloneNode(!0),xo.content.querySelector('[part~="overlay"]').removeAttribute("tabindex")),xo}static get observers(){return["_setOverlayWidth(positionTarget, opened)"]}connectedCallback(){super.connectedCallback();const e=this.__dataHost,t=e&&e.getRootNode().host;this._comboBox=t;const i=t&&t.getAttribute("dir");i&&this.setAttribute("dir",i)}ready(){super.ready();const e=document.createElement("div");e.setAttribute("part","loader");const t=this.shadowRoot.querySelector('[part~="content"]');t.parentNode.insertBefore(e,t)}_outsideClickListener(e){const t=e.composedPath();t.includes(this.positionTarget)||t.includes(this)||this.close()}_setOverlayWidth(e,t){if(e&&t){const t=this.localName;this.style.setProperty(`--_${t}-default-width`,`${e.clientWidth}px`);const i=getComputedStyle(this._comboBox).getPropertyValue(`--${t}-width`);""===i?this.style.removeProperty(`--${t}-width`):this.style.setProperty(`--${t}-width`,i),this._updatePosition()}}}customElements.define($o.is,$o);let wo=0,Co=0;const Ao=[];let Io=0,Eo=!1;const zo=document.createTextNode("");new window.MutationObserver((function(){Eo=!1;const e=Ao.length;for(let t=0;t<e;t++){const e=Ao[t];if(e)try{e()}catch(e){setTimeout((()=>{throw e}))}}Ao.splice(0,e),Co+=e})).observe(zo,{characterData:!0});const So={after:e=>({run:t=>window.setTimeout(t,e),cancel(e){window.clearTimeout(e)}}),run:(e,t)=>window.setTimeout(e,t),cancel(e){window.clearTimeout(e)}},Lo={run:e=>window.requestAnimationFrame(e),cancel(e){window.cancelAnimationFrame(e)}},To={run:e=>window.requestIdleCallback?window.requestIdleCallback(e):window.setTimeout(e,16),cancel(e){window.cancelIdleCallback?window.cancelIdleCallback(e):window.clearTimeout(e)}},Oo={run(e){Eo||(Eo=!0,zo.textContent=Io,Io+=1),Ao.push(e);const t=wo;return wo+=1,t},cancel(e){const t=e-Co;if(t>=0){if(!Ao[t])throw new Error(`invalid async handle: ${e}`);Ao[t]=null}}};class Po{static debounce(e,t,i){return e instanceof Po?e._cancelAsync():e=new Po,e.setConfig(t,i),e}constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(e,t){this._asyncModule=e,this._callback=t,this._timer=this._asyncModule.run((()=>{this._timer=null,Mo.delete(this),this._callback()}))}cancel(){this.isActive()&&(this._cancelAsync(),Mo.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return null!=this._timer}}let Mo=new Set;function Fo(){const e=Boolean(Mo.size);return Mo.forEach((e=>{try{e.flush()}catch(e){setTimeout((()=>{throw e}))}})),e}const Do=()=>{let e;do{e=Fo()}while(e)},Bo=navigator.userAgent.match(/iP(?:hone|ad;(?: U;)? CPU) OS (\d+)/),No=Bo&&Bo[1]>=8,Vo={_ratio:.5,_scrollerPaddingTop:0,_scrollPosition:0,_physicalSize:0,_physicalAverage:0,_physicalAverageCount:0,_physicalTop:0,_virtualCount:0,_estScrollHeight:0,_scrollHeight:0,_viewportHeight:0,_viewportWidth:0,_physicalItems:null,_physicalSizes:null,_firstVisibleIndexVal:null,_lastVisibleIndexVal:null,_maxPages:2,_templateCost:0,get _physicalBottom(){return this._physicalTop+this._physicalSize},get _scrollBottom(){return this._scrollPosition+this._viewportHeight},get _virtualEnd(){return this._virtualStart+this._physicalCount-1},get _hiddenContentSize(){return this._physicalSize-this._viewportHeight},get _maxScrollTop(){return this._estScrollHeight-this._viewportHeight+this._scrollOffset},get _maxVirtualStart(){const e=this._virtualCount;return Math.max(0,e-this._physicalCount)},get _virtualStart(){return this._virtualStartVal||0},set _virtualStart(e){e=this._clamp(e,0,this._maxVirtualStart),this._virtualStartVal=e},get _physicalStart(){return this._physicalStartVal||0},set _physicalStart(e){(e%=this._physicalCount)<0&&(e=this._physicalCount+e),this._physicalStartVal=e},get _physicalEnd(){return(this._physicalStart+this._physicalCount-1)%this._physicalCount},get _physicalCount(){return this._physicalCountVal||0},set _physicalCount(e){this._physicalCountVal=e},get _optPhysicalSize(){return 0===this._viewportHeight?1/0:this._viewportHeight*this._maxPages},get _isVisible(){return Boolean(this.offsetWidth||this.offsetHeight)},get firstVisibleIndex(){let e=this._firstVisibleIndexVal;if(null==e){let t=this._physicalTop+this._scrollOffset;e=this._iterateItems(((e,i)=>{if(t+=this._getPhysicalSizeIncrement(e),t>this._scrollPosition)return i}))||0,this._firstVisibleIndexVal=e}return e},get lastVisibleIndex(){let e=this._lastVisibleIndexVal;if(null==e){let t=this._physicalTop+this._scrollOffset;this._iterateItems(((i,a)=>{t<this._scrollBottom&&(e=a),t+=this._getPhysicalSizeIncrement(i)})),this._lastVisibleIndexVal=e}return e},get _scrollOffset(){return this._scrollerPaddingTop+this.scrollOffset},_scrollHandler(){const e=Math.max(0,Math.min(this._maxScrollTop,this._scrollTop));let t=e-this._scrollPosition;const i=t>=0;if(this._scrollPosition=e,this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,Math.abs(t)>this._physicalSize&&this._physicalSize>0){t-=this._scrollOffset;const e=Math.round(t/this._physicalAverage);this._virtualStart+=e,this._physicalStart+=e,this._physicalTop=Math.min(Math.floor(this._virtualStart)*this._physicalAverage,this._scrollPosition),this._update()}else if(this._physicalCount>0){const e=this._getReusables(i);i?(this._physicalTop=e.physicalTop,this._virtualStart+=e.indexes.length,this._physicalStart+=e.indexes.length):(this._virtualStart-=e.indexes.length,this._physicalStart-=e.indexes.length),this._update(e.indexes,i?null:e.indexes),this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,0),Oo)}},_getReusables(e){let t,i,a;const n=[],o=this._hiddenContentSize*this._ratio,s=this._virtualStart,r=this._virtualEnd,l=this._physicalCount;let d=this._physicalTop+this._scrollOffset;const c=this._physicalBottom+this._scrollOffset,u=this._scrollPosition,h=this._scrollBottom;for(e?(t=this._physicalStart,i=u-d):(t=this._physicalEnd,i=c-h);a=this._getPhysicalSizeIncrement(t),i-=a,!(n.length>=l||i<=o);)if(e){if(r+n.length+1>=this._virtualCount)break;if(d+a>=u-this._scrollOffset)break;n.push(t),d+=a,t=(t+1)%l}else{if(s-n.length<=0)break;if(d+this._physicalSize-a<=h)break;n.push(t),d-=a,t=0===t?l-1:t-1}return{indexes:n,physicalTop:d-this._scrollOffset}},_update(e,t){if(!(e&&0===e.length||0===this._physicalCount)){if(this._assignModels(e),this._updateMetrics(e),t)for(;t.length;){const e=t.pop();this._physicalTop-=this._getPhysicalSizeIncrement(e)}this._positionItems(),this._updateScrollerSize()}},_isClientFull(){return 0!==this._scrollBottom&&this._physicalBottom-1>=this._scrollBottom&&this._physicalTop<=this._scrollPosition},_increasePoolIfNeeded(e){const t=this._clamp(this._physicalCount+e,3,this._virtualCount-this._virtualStart)-this._physicalCount;let i=Math.round(.5*this._physicalCount);if(!(t<0)){if(t>0){const e=window.performance.now();[].push.apply(this._physicalItems,this._createPool(t));for(let e=0;e<t;e++)this._physicalSizes.push(0);this._physicalCount+=t,this._physicalStart>this._physicalEnd&&this._isIndexRendered(this._focusedVirtualIndex)&&this._getPhysicalIndex(this._focusedVirtualIndex)<this._physicalEnd&&(this._physicalStart+=t),this._update(),this._templateCost=(window.performance.now()-e)/t,i=Math.round(.5*this._physicalCount)}this._virtualEnd>=this._virtualCount-1||0===i||(this._isClientFull()?this._physicalSize<this._optPhysicalSize&&this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,this._clamp(Math.round(50/this._templateCost),1,i)),To):this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,i),Oo))}},_render(){if(this.isAttached&&this._isVisible)if(0!==this._physicalCount){const e=this._getReusables(!0);this._physicalTop=e.physicalTop,this._virtualStart+=e.indexes.length,this._physicalStart+=e.indexes.length,this._update(e.indexes),this._update(),this._increasePoolIfNeeded(0)}else this._virtualCount>0&&(this.updateViewportBoundaries(),this._increasePoolIfNeeded(3))},_itemsChanged(e){"items"===e.path&&(this._virtualStart=0,this._physicalTop=0,this._virtualCount=this.items?this.items.length:0,this._physicalIndexForKey={},this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,this._physicalCount=this._physicalCount||0,this._physicalItems=this._physicalItems||[],this._physicalSizes=this._physicalSizes||[],this._physicalStart=0,this._scrollTop>this._scrollOffset&&this._resetScrollPosition(0),this._debounce("_render",this._render,Lo))},_iterateItems(e,t){let i,a,n,o;if(2===arguments.length&&t){for(o=0;o<t.length;o++)if(i=t[o],a=this._computeVidx(i),null!=(n=e.call(this,i,a)))return n}else{for(i=this._physicalStart,a=this._virtualStart;i<this._physicalCount;i++,a++)if(null!=(n=e.call(this,i,a)))return n;for(i=0;i<this._physicalStart;i++,a++)if(null!=(n=e.call(this,i,a)))return n}},_computeVidx(e){return e>=this._physicalStart?this._virtualStart+(e-this._physicalStart):this._virtualStart+(this._physicalCount-this._physicalStart)+e},_updateMetrics(e){Do();let t=0,i=0;const a=this._physicalAverageCount,n=this._physicalAverage;this._iterateItems(((e,a)=>{i+=this._physicalSizes[e],this._physicalSizes[e]=this._physicalItems[e].offsetHeight,t+=this._physicalSizes[e],this._physicalAverageCount+=this._physicalSizes[e]?1:0}),e),this._physicalSize=this._physicalSize+t-i,this._physicalAverageCount!==a&&(this._physicalAverage=Math.round((n*a+t)/this._physicalAverageCount))},_positionItems(){this._adjustScrollPosition();let e=this._physicalTop;this._iterateItems((t=>{this.translate3d(0,`${e}px`,0,this._physicalItems[t]),e+=this._physicalSizes[t]}))},_getPhysicalSizeIncrement(e){return this._physicalSizes[e]},_adjustScrollPosition(){const e=0===this._virtualStart?this._physicalTop:Math.min(this._scrollPosition+this._physicalTop,0);if(0!==e){this._physicalTop-=e;const t=this._scrollPosition;!No&&t>0&&this._resetScrollPosition(t-e)}},_resetScrollPosition(e){this.scrollTarget&&e>=0&&(this._scrollTop=e,this._scrollPosition=this._scrollTop)},_updateScrollerSize(e){this._estScrollHeight=this._physicalBottom+Math.max(this._virtualCount-this._physicalCount-this._virtualStart,0)*this._physicalAverage,((e=(e=e||0===this._scrollHeight)||this._scrollPosition>=this._estScrollHeight-this._physicalSize)||Math.abs(this._estScrollHeight-this._scrollHeight)>=this._viewportHeight)&&(this.$.items.style.height=`${this._estScrollHeight}px`,this._scrollHeight=this._estScrollHeight)},scrollToIndex(e){if("number"!=typeof e||e<0||e>this.items.length-1)return;if(Do(),0===this._physicalCount)return;e=this._clamp(e,0,this._virtualCount-1),(!this._isIndexRendered(e)||e>=this._maxVirtualStart)&&(this._virtualStart=e-1),this._assignModels(),this._updateMetrics(),this._physicalTop=this._virtualStart*this._physicalAverage;let t=this._physicalStart,i=this._virtualStart,a=0;const n=this._hiddenContentSize;for(;i<e&&a<=n;)a+=this._getPhysicalSizeIncrement(t),t=(t+1)%this._physicalCount,i+=1;this._updateScrollerSize(!0),this._positionItems(),this._resetScrollPosition(this._physicalTop+this._scrollOffset+a),this._increasePoolIfNeeded(0),this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null},_resetAverage(){this._physicalAverage=0,this._physicalAverageCount=0},_resizeHandler(){this._debounce("_render",(()=>{this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,this._isVisible?(this.updateViewportBoundaries(),this.toggleScrollListener(!0),this._resetAverage(),this._render()):this.toggleScrollListener(!1)}),Lo)},_isIndexRendered(e){return e>=this._virtualStart&&e<=this._virtualEnd},_getPhysicalIndex(e){return(this._physicalStart+(e-this._virtualStart))%this._physicalCount},_clamp:(e,t,i)=>Math.min(i,Math.max(t,e)),_debounce(e,t,i){var a;this._debouncers=this._debouncers||{},this._debouncers[e]=Po.debounce(this._debouncers[e],i,t.bind(this)),a=this._debouncers[e],Mo.add(a)}};class jo{constructor({createElements:e,updateElement:t,scrollTarget:i,scrollContainer:a,elementsContainer:n,reorderElements:o}){this.isAttached=!0,this._vidxOffset=0,this.createElements=e,this.updateElement=t,this.scrollTarget=i,this.scrollContainer=a,this.elementsContainer=n||a,this.reorderElements=o,this._maxPages=1.3,this.__placeholderHeight=200,this.__elementHeightQueue=Array(10),this.timeouts={SCROLL_REORDER:500,IGNORE_WHEEL:500},this.__resizeObserver=new ResizeObserver((()=>this._resizeHandler())),"visible"===getComputedStyle(this.scrollTarget).overflow&&(this.scrollTarget.style.overflow="auto"),"static"===getComputedStyle(this.scrollContainer).position&&(this.scrollContainer.style.position="relative"),this.__resizeObserver.observe(this.scrollTarget),this.scrollTarget.addEventListener("scroll",(()=>this._scrollHandler())),this._scrollLineHeight=this._getScrollLineHeight(),this.scrollTarget.addEventListener("wheel",(e=>this.__onWheel(e))),this.reorderElements&&(this.scrollTarget.addEventListener("mousedown",(()=>this.__mouseDown=!0)),this.scrollTarget.addEventListener("mouseup",(()=>{this.__mouseDown=!1,this.__pendingReorder&&this.__reorderElements()})))}get scrollOffset(){return 0}get adjustedFirstVisibleIndex(){return this.firstVisibleIndex+this._vidxOffset}get adjustedLastVisibleIndex(){return this.lastVisibleIndex+this._vidxOffset}scrollToIndex(e){if("number"!=typeof e||isNaN(e)||0===this.size||!this.scrollTarget.offsetHeight)return;e=this._clamp(e,0,this.size-1);const t=this.__getVisibleElements().length;let i=Math.floor(e/this.size*this._virtualCount);this._virtualCount-i<t?(i=this._virtualCount-(this.size-e),this._vidxOffset=this.size-this._virtualCount):i<t?e<1e3?(i=e,this._vidxOffset=0):(i=1e3,this._vidxOffset=e-i):this._vidxOffset=e-i,this.__skipNextVirtualIndexAdjust=!0,super.scrollToIndex(i),this.adjustedFirstVisibleIndex!==e&&this._scrollTop<this._maxScrollTop&&!this.grid&&(this._scrollTop-=this.__getIndexScrollOffset(e)||0),this._scrollHandler()}flush(){0!==this.scrollTarget.offsetHeight&&(this._resizeHandler(),Do(),this._scrollHandler(),this.__scrollReorderDebouncer&&this.__scrollReorderDebouncer.flush(),this.__debouncerWheelAnimationFrame&&this.__debouncerWheelAnimationFrame.flush())}update(e=0,t=this.size-1){this.__getVisibleElements().forEach((i=>{i.__virtualIndex>=e&&i.__virtualIndex<=t&&this.__updateElement(i,i.__virtualIndex,!0)}))}__updateElement(e,t,i){e.style.paddingTop&&(e.style.paddingTop=""),this.__preventElementUpdates||e.__lastUpdatedIndex===t&&!i||(this.updateElement(e,t),e.__lastUpdatedIndex=t);const a=e.offsetHeight;if(0===a)e.style.paddingTop=`${this.__placeholderHeight}px`;else{this.__elementHeightQueue.push(a),this.__elementHeightQueue.shift();const e=this.__elementHeightQueue.filter((e=>void 0!==e));this.__placeholderHeight=Math.round(e.reduce(((e,t)=>e+t),0)/e.length)}}__getIndexScrollOffset(e){const t=this.__getVisibleElements().find((t=>t.__virtualIndex===e));return t?this.scrollTarget.getBoundingClientRect().top-t.getBoundingClientRect().top:void 0}get size(){return this.__size}set size(e){if(e===this.size)return;let t,i;if(this.__preventElementUpdates=!0,e>0&&(t=this.adjustedFirstVisibleIndex,i=this.__getIndexScrollOffset(t)),this.__size=e,Do(),this._itemsChanged({path:"items"}),Do(),e>0){t=Math.min(t,e-1),this.scrollToIndex(t);const a=this.__getIndexScrollOffset(t);void 0!==i&&void 0!==a&&(this._scrollTop+=i-a)}this.elementsContainer.children.length||requestAnimationFrame((()=>this._resizeHandler())),this.__preventElementUpdates=!1,this._resizeHandler(),Do()}get _scrollTop(){return this.scrollTarget.scrollTop}set _scrollTop(e){this.scrollTarget.scrollTop=e}get items(){return{length:Math.min(this.size,1e5)}}get offsetHeight(){return this.scrollTarget.offsetHeight}get $(){return{items:this.scrollContainer}}updateViewportBoundaries(){const e=window.getComputedStyle(this.scrollTarget);this._scrollerPaddingTop=this.scrollTarget===this?0:parseInt(e["padding-top"],10),this._isRTL=Boolean("rtl"===e.direction),this._viewportWidth=this.elementsContainer.offsetWidth,this._viewportHeight=this.scrollTarget.offsetHeight,this._scrollPageHeight=this._viewportHeight-this._scrollLineHeight,this.grid&&this._updateGridMetrics()}setAttribute(){}_createPool(e){const t=this.createElements(e),i=document.createDocumentFragment();return t.forEach((e=>{e.style.position="absolute",i.appendChild(e),this.__resizeObserver.observe(e)})),this.elementsContainer.appendChild(i),t}_assignModels(e){this._iterateItems(((e,t)=>{const i=this._physicalItems[e];i.hidden=t>=this.size,i.hidden?delete i.__lastUpdatedIndex:(i.__virtualIndex=t+(this._vidxOffset||0),this.__updateElement(i,i.__virtualIndex))}),e)}_isClientFull(){return setTimeout((()=>this.__clientFull=!0)),this.__clientFull||super._isClientFull()}translate3d(e,t,i,a){a.style.transform=`translateY(${t})`}toggleScrollListener(){}_scrollHandler(){this._adjustVirtualIndexOffset(this._scrollTop-(this.__previousScrollTop||0));const e=this.scrollTarget.scrollTop-this._scrollPosition;if(super._scrollHandler(),0!==this._physicalCount){const t=e>=0,i=this._getReusables(!t);i.indexes.length&&(this._physicalTop=i.physicalTop,t?(this._virtualStart-=i.indexes.length,this._physicalStart-=i.indexes.length):(this._virtualStart+=i.indexes.length,this._physicalStart+=i.indexes.length),this._resizeHandler())}this.reorderElements&&(this.__scrollReorderDebouncer=Po.debounce(this.__scrollReorderDebouncer,So.after(this.timeouts.SCROLL_REORDER),(()=>this.__reorderElements()))),this.__previousScrollTop=this._scrollTop}__onWheel(e){if(e.ctrlKey||this._hasScrolledAncestor(e.target,e.deltaX,e.deltaY))return;let t=e.deltaY;if(e.deltaMode===WheelEvent.DOM_DELTA_LINE?t*=this._scrollLineHeight:e.deltaMode===WheelEvent.DOM_DELTA_PAGE&&(t*=this._scrollPageHeight),this._deltaYAcc=this._deltaYAcc||0,this._wheelAnimationFrame)return this._deltaYAcc+=t,void e.preventDefault();t+=this._deltaYAcc,this._deltaYAcc=0,this._wheelAnimationFrame=!0,this.__debouncerWheelAnimationFrame=Po.debounce(this.__debouncerWheelAnimationFrame,Lo,(()=>this._wheelAnimationFrame=!1));const i=Math.abs(e.deltaX)+Math.abs(t);this._canScroll(this.scrollTarget,e.deltaX,t)?(e.preventDefault(),this.scrollTarget.scrollTop+=t,this.scrollTarget.scrollLeft+=e.deltaX,this._hasResidualMomentum=!0,this._ignoreNewWheel=!0,this._debouncerIgnoreNewWheel=Po.debounce(this._debouncerIgnoreNewWheel,So.after(this.timeouts.IGNORE_WHEEL),(()=>this._ignoreNewWheel=!1))):this._hasResidualMomentum&&i<=this._previousMomentum||this._ignoreNewWheel?e.preventDefault():i>this._previousMomentum&&(this._hasResidualMomentum=!1),this._previousMomentum=i}_hasScrolledAncestor(e,t,i){return e!==this.scrollTarget&&e!==this.scrollTarget.getRootNode().host&&(!(!this._canScroll(e,t,i)||-1===["auto","scroll"].indexOf(getComputedStyle(e).overflow))||(e!==this&&e.parentElement?this._hasScrolledAncestor(e.parentElement,t,i):void 0))}_canScroll(e,t,i){return i>0&&e.scrollTop<e.scrollHeight-e.offsetHeight||i<0&&e.scrollTop>0||t>0&&e.scrollLeft<e.scrollWidth-e.offsetWidth||t<0&&e.scrollLeft>0}_getScrollLineHeight(){const e=document.createElement("div");e.style.fontSize="initial",e.style.display="none",document.body.appendChild(e);const t=window.getComputedStyle(e).fontSize;return document.body.removeChild(e),t?window.parseInt(t):void 0}__getVisibleElements(){return Array.from(this.elementsContainer.children).filter((e=>!e.hidden))}__reorderElements(){if(this.__mouseDown)return void(this.__pendingReorder=!0);this.__pendingReorder=!1;const e=this._virtualStart+(this._vidxOffset||0),t=this.__getVisibleElements(),i=t.find((e=>e.contains(this.elementsContainer.getRootNode().activeElement)||e.contains(this.scrollTarget.getRootNode().activeElement)))||t[0];if(!i)return;const a=i.__virtualIndex-e,n=t.indexOf(i)-a;if(n>0)for(let e=0;e<n;e++)this.elementsContainer.appendChild(t[e]);else if(n<0)for(let e=t.length+n;e<t.length;e++)this.elementsContainer.insertBefore(t[e],t[0]);if(Xn){const{transform:e}=this.scrollTarget.style;this.scrollTarget.style.transform="translateZ(0)",setTimeout((()=>this.scrollTarget.style.transform=e))}}_adjustVirtualIndexOffset(e){if(this._virtualCount>=this.size)this._vidxOffset=0;else if(this.__skipNextVirtualIndexAdjust)this.__skipNextVirtualIndexAdjust=!1;else if(Math.abs(e)>1e4){const e=this._scrollTop/(this.scrollTarget.scrollHeight-this.scrollTarget.offsetHeight),t=e*this.size;this._vidxOffset=Math.round(t-e*this._virtualCount)}else{const e=this._vidxOffset,t=1e3,i=100;0===this._scrollTop?(this._vidxOffset=0,e!==this._vidxOffset&&super.scrollToIndex(0)):this.firstVisibleIndex<t&&this._vidxOffset>0&&(this._vidxOffset-=Math.min(this._vidxOffset,i),super.scrollToIndex(this.firstVisibleIndex+(e-this._vidxOffset)));const a=this.size-this._virtualCount;this._scrollTop>=this._maxScrollTop&&this._maxScrollTop>0?(this._vidxOffset=a,e!==this._vidxOffset&&super.scrollToIndex(this._virtualCount-1)):this.firstVisibleIndex>this._virtualCount-t&&this._vidxOffset<a&&(this._vidxOffset+=Math.min(a-this._vidxOffset,i),super.scrollToIndex(this.firstVisibleIndex-(this._vidxOffset-e)))}}}Object.setPrototypeOf(jo.prototype,Vo);class qo{constructor(e){this.__adapter=new jo(e)}get size(){return this.__adapter.size}set size(e){this.__adapter.size=e}scrollToIndex(e){this.__adapter.scrollToIndex(e)}update(e=0,t=this.size-1){this.__adapter.update(e,t)}flush(){this.__adapter.flush()}get firstVisibleIndex(){return this.__adapter.adjustedFirstVisibleIndex}get lastVisibleIndex(){return this.__adapter.adjustedLastVisibleIndex}}const Ro=class{toString(){return""}};class Uo extends n{static get is(){return"vaadin-combo-box-scroller"}static get template(){return o`
      <style>
        :host {
          display: block;
          min-height: 1px;
          overflow: auto;

          /* Fixes item background from getting on top of scrollbars on Safari */
          transform: translate3d(0, 0, 0);

          /* Enable momentum scrolling on iOS */
          -webkit-overflow-scrolling: touch;

          /* Fixes scrollbar disappearing when 'Show scroll bars: Always' enabled in Safari */
          box-shadow: 0 0 0 white;
        }

        #selector {
          border-width: var(--_vaadin-combo-box-items-container-border-width);
          border-style: var(--_vaadin-combo-box-items-container-border-style);
          border-color: var(--_vaadin-combo-box-items-container-border-color);
        }
      </style>
      <div id="selector">
        <slot></slot>
      </div>
    `}static get properties(){return{items:{type:Array,observer:"__itemsChanged"},focusedIndex:{type:Number,observer:"__focusedIndexChanged"},loading:{type:Boolean,observer:"__loadingChanged"},opened:{type:Boolean,observer:"__openedChanged"},selectedItem:{type:Object},itemIdPath:{type:String},comboBox:{type:Object},getItemLabel:{type:Object},renderer:{type:Object,observer:"__rendererChanged"},theme:{type:String}}}constructor(){super(),this.__boundOnItemClick=this.__onItemClick.bind(this)}__openedChanged(e){e&&this.requestContentUpdate()}ready(){super.ready(),this.__hostTagName=this.constructor.is.replace("-scroller",""),this.setAttribute("role","listbox"),this.addEventListener("click",(e=>e.stopPropagation())),this.__patchWheelOverScrolling(),this.__virtualizer=new qo({createElements:this.__createElements.bind(this),updateElement:this.__updateElement.bind(this),elementsContainer:this,scrollTarget:this,scrollContainer:this.$.selector})}requestContentUpdate(){this.__virtualizer&&this.__virtualizer.update()}scrollIntoView(e){if(!(this.opened&&e>=0))return;const t=this._visibleItemsCount();let i=e;e>this.__virtualizer.lastVisibleIndex-1?(this.__virtualizer.scrollToIndex(e),i=e-t+1):e>this.__virtualizer.firstVisibleIndex&&(i=this.__virtualizer.firstVisibleIndex),this.__virtualizer.scrollToIndex(Math.max(0,i));const a=[...this.children].find((e=>!e.hidden&&e.index===this.__virtualizer.lastVisibleIndex));if(!a||e!==a.index)return;const n=a.getBoundingClientRect(),o=this.getBoundingClientRect(),s=n.bottom-o.bottom+this._viewportTotalPaddingBottom;s>0&&(this.scrollTop+=s)}__getAriaRole(e){return void 0!==e&&"option"}__getAriaSelected(e,t){return this.__isItemFocused(e,t).toString()}__isItemFocused(e,t){return e===t}__isItemSelected(e,t,i){return!(e instanceof Ro)&&(i&&void 0!==e&&void 0!==t?this.get(i,e)===this.get(i,t):e===t)}__itemsChanged(e){this.__virtualizer&&e&&(this.__virtualizer.size=e.length,this.__virtualizer.flush(),this.setAttribute("aria-setsize",e.length),this.requestContentUpdate())}__loadingChanged(e){this.__virtualizer&&!e&&setTimeout((()=>this.requestContentUpdate()))}__focusedIndexChanged(e,t){this.__virtualizer&&(e!==t&&this.requestContentUpdate(),e>=0&&!this.loading&&this.scrollIntoView(e))}__rendererChanged(e,t){(e||t)&&this.requestContentUpdate()}__createElements(e){return[...Array(e)].map((()=>{const e=document.createElement(`${this.__hostTagName}-item`);return e.addEventListener("click",this.__boundOnItemClick),e.tabIndex="-1",e.style.width="100%",e}))}__updateElement(e,t){const i=this.items[t],a=this.focusedIndex;e.setProperties({item:i,index:this.__requestItemByIndex(i,t),label:this.getItemLabel(i),selected:this.__isItemSelected(i,this.selectedItem,this.itemIdPath),renderer:this.renderer,focused:this.__isItemFocused(a,t)}),e.id=`${this.__hostTagName}-item-${t}`,e.setAttribute("role",this.__getAriaRole(t)),e.setAttribute("aria-selected",this.__getAriaSelected(a,t)),e.setAttribute("aria-posinset",t+1),this.theme?e.setAttribute("theme",this.theme):e.removeAttribute("theme")}__onItemClick(e){this.dispatchEvent(new CustomEvent("selection-changed",{detail:{item:e.currentTarget.item}}))}__patchWheelOverScrolling(){this.$.selector.addEventListener("wheel",(e=>{const t=0===this.scrollTop,i=this.scrollHeight-this.scrollTop-this.clientHeight<=1;(t&&e.deltaY<0||i&&e.deltaY>0)&&e.preventDefault()}))}get _viewportTotalPaddingBottom(){if(void 0===this._cachedViewportTotalPaddingBottom){const e=window.getComputedStyle(this.$.selector);this._cachedViewportTotalPaddingBottom=[e.paddingBottom,e.borderBottomWidth].map((e=>parseInt(e,10))).reduce(((e,t)=>e+t))}return this._cachedViewportTotalPaddingBottom}__requestItemByIndex(e,t){return e instanceof Ro&&void 0!==t&&this.dispatchEvent(new CustomEvent("index-requested",{detail:{index:t,currentScrollerPos:this._oldScrollerPosition}})),t}_visibleItemsCount(){this.__virtualizer.scrollToIndex(this.__virtualizer.firstVisibleIndex);return this.__virtualizer.size>0?this.__virtualizer.lastVisibleIndex-this.__virtualizer.firstVisibleIndex+1:0}}customElements.define(Uo.is,Uo);class Ho extends n{static get is(){return"vaadin-combo-box-dropdown"}static get template(){return o`
      <vaadin-combo-box-overlay
        id="overlay"
        hidden$="[[_isOverlayHidden(_items.*, loading)]]"
        loading$="[[loading]]"
        opened="{{_overlayOpened}}"
        theme$="[[theme]]"
        position-target="[[positionTarget]]"
        no-vertical-overlap
        restore-focus-on-close="[[restoreFocusOnClose]]"
        restore-focus-node="[[restoreFocusNode]]"
      ></vaadin-combo-box-overlay>
    `}static get properties(){return{opened:Boolean,positionTarget:{type:Object},renderer:Function,loading:{type:Boolean,value:!1,reflectToAttribute:!0},theme:String,_selectedItem:{type:Object},_items:{type:Array},_focusedIndex:{type:Number,value:-1},focusedItem:{type:String,computed:"_getFocusedItem(_focusedIndex)"},_itemLabelPath:{type:String,value:"label"},_itemValuePath:{type:String,value:"value"},_scroller:Object,_itemIdPath:String,_overlayOpened:{type:Boolean,observer:"_openedChanged"}}}static get observers(){return["_openedOrItemsChanged(opened, _items, loading)","__updateScroller(_scroller, _items, opened, loading, _selectedItem, _itemIdPath, _focusedIndex, renderer, theme)"]}constructor(){super();const e=Ho._uniqueId=1+Ho._uniqueId||0;this.scrollerId=`${this.localName}-scroller-${e}`}ready(){super.ready(),this.__hostTagName=this.constructor.is.replace("-dropdown","");const e=this.$.overlay,t=`${this.__hostTagName}-scroller`;e.renderer=e=>{if(!e.firstChild){const i=document.createElement(t);e.appendChild(i)}},e.requestContentUpdate(),this._scroller=e.content.querySelector(t),this._scroller.id=this.scrollerId,this._scroller.getItemLabel=this.getItemLabel.bind(this),this._scroller.comboBox=this.getRootNode().host,this._scroller.addEventListener("selection-changed",(e=>this._forwardScrollerEvent(e))),this._scroller.addEventListener("index-requested",(e=>this._forwardScrollerEvent(e))),e.addEventListener("touchend",(e=>this._fireTouchAction(e))),e.addEventListener("touchmove",(e=>this._fireTouchAction(e))),e.addEventListener("mousedown",(e=>e.preventDefault())),e.addEventListener("vaadin-overlay-outside-click",(e=>{e.preventDefault()}))}disconnectedCallback(){super.disconnectedCallback(),this._overlayOpened=!1}_fireTouchAction(e){this.dispatchEvent(new CustomEvent("vaadin-overlay-touch-action",{detail:{sourceEvent:e}}))}_forwardScrollerEvent(e){this.dispatchEvent(new CustomEvent(e.type,{detail:e.detail}))}_openedChanged(e,t){e?(this._scroller.style.maxHeight=getComputedStyle(this).getPropertyValue(`--${this.__hostTagName}-overlay-max-height`)||"65vh",this.dispatchEvent(new CustomEvent("vaadin-combo-box-dropdown-opened",{bubbles:!0,composed:!0}))):t&&!this.__emptyItems&&this.dispatchEvent(new CustomEvent("vaadin-combo-box-dropdown-closed",{bubbles:!0,composed:!0}))}_openedOrItemsChanged(e,t,i){const a=t&&t.length;a||(this.__emptyItems=!0),this._overlayOpened=!(!e||!i&&!a),this.__emptyItems=!1}_getFocusedItem(e){if(e>=0)return this._items[e]}indexOfLabel(e){if(this._items&&e)for(let t=0;t<this._items.length;t++)if(this.getItemLabel(this._items[t]).toString().toLowerCase()===e.toString().toLowerCase())return t;return-1}getItemLabel(e,t){t=t||this._itemLabelPath;let i=e&&t?this.get(t,e):void 0;return null==i&&(i=e?e.toString():""),i}_scrollIntoView(e){this._scroller&&this._scroller.scrollIntoView(e)}adjustScrollPosition(){this.opened&&this._items&&this._scrollIntoView(this._focusedIndex)}__updateScroller(e,t,i,a,n,o,s,r,l){e&&e.setProperties({items:i?t:[],opened:i,loading:a,selectedItem:n,itemIdPath:o,focusedIndex:s,renderer:r,theme:l})}_isOverlayHidden(){return!(this.loading||this._items&&this._items.length)}}customElements.define(Ho.is,Ho);const Go=e=>class extends e{static get properties(){return{pageSize:{type:Number,value:50,observer:"_pageSizeChanged"},size:{type:Number,observer:"_sizeChanged"},dataProvider:{type:Object,observer:"_dataProviderChanged"},_pendingRequests:{value:()=>({})},__placeHolder:{value:new Ro},__previousDataProviderFilter:{type:String}}}static get observers(){return["_dataProviderFilterChanged(filter)","_warnDataProviderValue(dataProvider, value)","_ensureFirstPage(opened)"]}ready(){super.ready(),this.$.dropdown.addEventListener("index-requested",(e=>{const t=e.detail.index,i=e.detail.currentScrollerPos,a=Math.floor(1.5*this.pageSize);if(!this._shouldSkipIndex(t,a,i)&&void 0!==t){const e=this._getPageForIndex(t);this._shouldLoadPage(e)&&this._loadPage(e)}}))}_dataProviderFilterChanged(e){void 0!==this.__previousDataProviderFilter||""!==e?this.__previousDataProviderFilter!==e&&(this.__previousDataProviderFilter=e,this._pendingRequests={},this.loading=this._shouldFetchData(),this.size=void 0,this.clearCache()):this.__previousDataProviderFilter=e}_shouldFetchData(){return!!this.dataProvider&&(this.opened||this.filter&&this.filter.length)}_ensureFirstPage(e){e&&this._shouldLoadPage(0)&&this._loadPage(0)}_shouldSkipIndex(e,t,i){return 0!==i&&e>=i-t&&e<=i+t}_shouldLoadPage(e){if(!this.filteredItems||this._forceNextRequest)return this._forceNextRequest=!1,!0;const t=this.filteredItems[e*this.pageSize];return void 0!==t?t instanceof Ro:void 0===this.size}_loadPage(e){if(!this._pendingRequests[e]&&this.dataProvider){this.loading=!0;const t={page:e,pageSize:this.pageSize,filter:this.filter},i=(a,n)=>{if(this._pendingRequests[e]===i){const i=this.filteredItems?[...this.filteredItems]:[];i.splice(t.page*t.pageSize,a.length,...a),this.filteredItems=i,this._isValidValue(this.value)&&this._getItemValue(this.selectedItem)!==this.value&&this._selectItemForValue(this.value),this.opened||this.hasAttribute("focused")||this._commitValue(),this.size=n,delete this._pendingRequests[e],0===Object.keys(this._pendingRequests).length&&(this.loading=!1)}};this._pendingRequests[e]||(this._pendingRequests[e]=i,this.dataProvider(t,i))}}_getPageForIndex(e){return Math.floor(e/this.pageSize)}clearCache(){if(!this.dataProvider)return;this._pendingRequests={};const e=[];for(let t=0;t<(this.size||0);t++)e.push(this.__placeHolder);this.filteredItems=e,this._shouldFetchData()?(this._forceNextRequest=!1,this._loadPage(0)):this._forceNextRequest=!0}_sizeChanged(e=0){const t=(this.filteredItems||[]).slice(0,e);for(let i=0;i<e;i++)t[i]=void 0!==t[i]?t[i]:this.__placeHolder;this.filteredItems=t,this._flushPendingRequests(e)}_pageSizeChanged(e,t){if(Math.floor(e)!==e||e<1)throw this.pageSize=t,new Error("`pageSize` value must be an integer > 0");this.clearCache()}_dataProviderChanged(e,t){this._ensureItemsOrDataProvider((()=>{this.dataProvider=t})),this.clearCache()}_ensureItemsOrDataProvider(e){if(void 0!==this.items&&void 0!==this.dataProvider)throw e(),new Error("Using `items` and `dataProvider` together is not supported");this.dataProvider&&!this.filteredItems&&(this.filteredItems=[])}_warnDataProviderValue(e,t){if(e&&""!==t&&(void 0===this.selectedItem||null===this.selectedItem)){const e=this._indexOfValue(t,this.filteredItems);(e<0||!this._getItemLabel(this.filteredItems[e]))&&console.warn("Warning: unable to determine the label for the provided `value`. Nothing to display in the text field. This usually happens when setting an initial `value` before any items are returned from the `dataProvider` callback. Consider setting `selectedItem` instead of `value`")}}_flushPendingRequests(e){if(this._pendingRequests){const t=Math.ceil(e/this.pageSize),i=Object.keys(this._pendingRequests);for(let a=0;a<i.length;a++){const n=parseInt(i[a]);n>=t&&this._pendingRequests[n]([],e)}}}},Wo=a((e=>class extends e{static get properties(){return{disabled:{type:Boolean,value:!1,observer:"_disabledChanged",reflectToAttribute:!0}}}_disabledChanged(e){this._setAriaDisabled(e)}_setAriaDisabled(e){e?this.setAttribute("aria-disabled","true"):this.removeAttribute("aria-disabled")}click(){this.disabled||super.click()}})),Ko=a((e=>class extends e{ready(){super.ready(),this.addEventListener("keydown",(e=>{this._onKeyDown(e)})),this.addEventListener("keyup",(e=>{this._onKeyUp(e)}))}_onKeyDown(e){switch(e.key){case"Enter":this._onEnter(e);break;case"Escape":this._onEscape(e)}}_onKeyUp(e){}_onEnter(e){}_onEscape(e){}}));const Yo=a((e=>class extends e{static get properties(){return{inputElement:{type:Object,readOnly:!0,observer:"_inputElementChanged"},type:{type:String,readOnly:!0},value:{type:String,value:"",observer:"_valueChanged",notify:!0}}}constructor(){super(),this._boundOnInput=this._onInput.bind(this),this._boundOnChange=this._onChange.bind(this)}clear(){this.value=""}_addInputListeners(e){e.addEventListener("input",this._boundOnInput),e.addEventListener("change",this._boundOnChange)}_removeInputListeners(e){e.removeEventListener("input",this._boundOnInput),e.removeEventListener("change",this._boundOnChange)}_forwardInputValue(e){this.inputElement&&(this.inputElement.value=null!=e?e:"")}_inputElementChanged(e,t){e?this._addInputListeners(e):t&&this._removeInputListeners(t)}_onInput(e){this.__userInput=e.isTrusted,this.value=e.target.value,this.__userInput=!1}_onChange(e){}_toggleHasValue(e){this.toggleAttribute("has-value",e)}_valueChanged(e,t){this._toggleHasValue(""!==e&&null!=e),""===e&&void 0===t||this.__userInput||this._forwardInputValue(e)}}));class Zo{constructor(e){this.host=e,e.addEventListener("opened-changed",(()=>{e.opened||this.__setVirtualKeyboardEnabled(!1)})),e.addEventListener("blur",(()=>this.__setVirtualKeyboardEnabled(!0))),e.addEventListener("touchstart",(()=>this.__setVirtualKeyboardEnabled(!0)))}__setVirtualKeyboardEnabled(e){this.host.inputElement&&(this.host.inputElement.inputMode=e?"":"none")}}const Qo=e=>class extends(eo(Ko(Yo(Wo(e))))){static get properties(){return{opened:{type:Boolean,notify:!0,value:!1,reflectToAttribute:!0,observer:"_openedChanged"},autoOpenDisabled:{type:Boolean},readonly:{type:Boolean,value:!1,reflectToAttribute:!0},renderer:Function,items:{type:Array,observer:"_itemsChanged"},allowCustomValue:{type:Boolean,value:!1},filteredItems:{type:Array},_lastCommittedValue:String,loading:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_loadingChanged"},_focusedIndex:{type:Number,observer:"_focusedIndexChanged",value:-1},filter:{type:String,value:"",notify:!0},selectedItem:{type:Object,notify:!0},itemLabelPath:{type:String,value:"label",observer:"_itemLabelPathChanged"},itemValuePath:{type:String,value:"value"},itemIdPath:String,_toggleElement:{type:Object,observer:"_toggleElementChanged"},_closeOnBlurIsPrevented:Boolean,__restoreFocusOnClose:Boolean}}static get observers(){return["_filterChanged(filter, itemValuePath, itemLabelPath)","_filteredItemsChanged(filteredItems)","_selectedItemChanged(selectedItem, itemValuePath, itemLabelPath)"]}constructor(){super(),this._boundOnFocusout=this._onFocusout.bind(this),this._boundOverlaySelectedItemChanged=this._overlaySelectedItemChanged.bind(this),this._boundOnClearButtonMouseDown=this.__onClearButtonMouseDown.bind(this),this._boundClose=this.close.bind(this),this._boundOnOpened=this._onOpened.bind(this),this._boundOnClick=this._onClick.bind(this),this._boundOnOverlayTouchAction=this._onOverlayTouchAction.bind(this),this._boundOnTouchend=this._onTouchend.bind(this)}get _inputElementValue(){return this.inputElement?this.inputElement[this._propertyForValue]:void 0}set _inputElementValue(e){this.inputElement&&(this.inputElement[this._propertyForValue]=e)}_inputElementChanged(e){super._inputElementChanged(e),e&&(e.autocomplete="off",e.autocapitalize="off",e.setAttribute("role","combobox"),e.setAttribute("aria-autocomplete","list"),e.setAttribute("aria-expanded",!!this.opened),e.setAttribute("spellcheck","false"),e.setAttribute("autocorrect","off"),this._revertInputValueToValue(),this.clearElement&&this.clearElement.addEventListener("mousedown",this._boundOnClearButtonMouseDown))}ready(){super.ready(),this.addEventListener("focusout",this._boundOnFocusout),this._lastCommittedValue=this.value,this.$.dropdown.addEventListener("selection-changed",this._boundOverlaySelectedItemChanged),this.addEventListener("vaadin-combo-box-dropdown-closed",this._boundClose),this.addEventListener("vaadin-combo-box-dropdown-opened",this._boundOnOpened),this.addEventListener("click",this._boundOnClick),this.$.dropdown.addEventListener("vaadin-overlay-touch-action",this._boundOnOverlayTouchAction),this.addEventListener("touchend",this._boundOnTouchend);const e=()=>{requestAnimationFrame((()=>{this.$.dropdown.$.overlay.bringToFront()}))};var t;this.addEventListener("mousedown",e),this.addEventListener("touchstart",e),t=this,window.Vaadin&&window.Vaadin.templateRendererCallback?window.Vaadin.templateRendererCallback(t):t.querySelector("template")&&console.warn(`WARNING: <template> inside <${t.localName}> is no longer supported. Import @vaadin/polymer-legacy-adapter/template-renderer.js to enable compatibility.`),this.addController(new Zo(this))}requestContentUpdate(){this.$.dropdown._scroller&&(this.$.dropdown._scroller.requestContentUpdate(),this._getItemElements().forEach((e=>{e.requestContentUpdate()})))}open(){this.disabled||this.readonly||(this.opened=!0)}close(){this.opened=!1}_focusedIndexChanged(e,t){void 0!==t&&this._updateActiveDescendant(e)}_updateActiveDescendant(e){const t=this.inputElement;if(!t)return;const i=this._getItemElements().find((t=>t.index===e));i?t.setAttribute("aria-activedescendant",i.id):t.removeAttribute("aria-activedescendant")}_openedChanged(e,t){if(void 0===t)return;e?(this._openedWithFocusRing=this.hasAttribute("focus-ring"),this.hasAttribute("focused")||Jn||this.focus(),this.__restoreFocusOnClose=!0):(this._onClosed(),this._openedWithFocusRing&&this.hasAttribute("focused")&&this.setAttribute("focus-ring",""));const i=this.inputElement;i&&(i.setAttribute("aria-expanded",!!e),e?i.setAttribute("aria-controls",this.$.dropdown.scrollerId):i.removeAttribute("aria-controls"))}_onOverlayTouchAction(){this._closeOnBlurIsPrevented=!0,this.inputElement.blur(),this._closeOnBlurIsPrevented=!1}_isClearButton(e){return e.composedPath()[0]===this.clearElement}_handleClearButtonClick(e){e.preventDefault(),this._clear(),this.opened&&this.requestContentUpdate()}_onToggleButtonClick(e){e.preventDefault(),this.opened?this.close():this.open()}_onHostClick(e){this.autoOpenDisabled||(e.preventDefault(),this.open())}_onClick(e){this._closeOnBlurIsPrevented=!0;const t=e.composedPath();this._isClearButton(e)?this._handleClearButtonClick(e):t.indexOf(this._toggleElement)>-1?this._onToggleButtonClick(e):this._onHostClick(e),this._closeOnBlurIsPrevented=!1}_onKeyDown(e){super._onKeyDown(e),"Tab"===e.key?this.__restoreFocusOnClose=!1:"ArrowDown"===e.key?(this._closeOnBlurIsPrevented=!0,this._onArrowDown(),this._closeOnBlurIsPrevented=!1,e.preventDefault()):"ArrowUp"===e.key&&(this._closeOnBlurIsPrevented=!0,this._onArrowUp(),this._closeOnBlurIsPrevented=!1,e.preventDefault())}_getItemLabel(e){return this.$.dropdown.getItemLabel(e)}_getItemValue(e){let t=e&&this.itemValuePath?this.get(this.itemValuePath,e):void 0;return void 0===t&&(t=e?e.toString():""),t}_onArrowDown(){if(this.opened){const e=this._getOverlayItems();e&&(this._focusedIndex=Math.min(e.length-1,this._focusedIndex+1),this._prefillFocusedItemLabel())}else this.open()}_onArrowUp(){if(this.opened){if(this._focusedIndex>-1)this._focusedIndex=Math.max(0,this._focusedIndex-1);else{const e=this._getOverlayItems();e&&(this._focusedIndex=e.length-1)}this._prefillFocusedItemLabel()}else this.open()}_prefillFocusedItemLabel(){this._focusedIndex>-1&&(this._inputElementValue=this._getItemLabel(this.$.dropdown.focusedItem),this._markAllSelectionRange())}_setSelectionRange(e,t){this.hasAttribute("focused")&&this.inputElement.setSelectionRange(e,t)}_markAllSelectionRange(){void 0!==this._inputElementValue&&this._setSelectionRange(0,this._inputElementValue.length)}_clearSelectionRange(){if(void 0!==this._inputElementValue){const e=this._inputElementValue?this._inputElementValue.length:0;this._setSelectionRange(e,e)}}_closeOrCommit(){this.opened||this.loading?this.close():this._commitValue()}_onEnter(e){if(!this.allowCustomValue&&""!==this._inputElementValue&&this._focusedIndex<0)return e.preventDefault(),void e.stopPropagation();this.opened&&(e.preventDefault(),e.stopPropagation()),this._closeOrCommit()}_onEscape(e){this.autoOpenDisabled?this.opened||this.value!==this._inputElementValue&&this._inputElementValue.length>0?(e.stopPropagation(),this._focusedIndex=-1,this.cancel()):this.clearButtonVisible&&!this.opened&&this.value&&(e.stopPropagation(),this._clear()):this.opened?(e.stopPropagation(),this._focusedIndex>-1?(this._focusedIndex=-1,this._revertInputValue()):this.cancel()):this.clearButtonVisible&&this.value&&(e.stopPropagation(),this._clear())}_toggleElementChanged(e){e&&(e.addEventListener("mousedown",(e=>e.preventDefault())),e.addEventListener("click",(()=>{Jn&&!this.hasAttribute("focused")&&document.activeElement.blur()})))}_clear(){this.selectedItem=null,this.allowCustomValue&&(this.value=""),this._detectAndDispatchChange()}cancel(){this._revertInputValueToValue(),this._lastCommittedValue=this.value,this._closeOrCommit()}_onOpened(){requestAnimationFrame((()=>{this.$.dropdown.adjustScrollPosition(),this._updateActiveDescendant(this._focusedIndex)})),this._lastCommittedValue=this.value}_onClosed(){this.loading&&!this.allowCustomValue||this._commitValue()}_commitValue(){const e=this._getOverlayItems();if(e&&this._focusedIndex>-1){const t=e[this._focusedIndex];this.selectedItem!==t&&(this.selectedItem=t),this._inputElementValue=this._getItemLabel(this.selectedItem)}else if(""===this._inputElementValue||void 0===this._inputElementValue)this.selectedItem=null,this.allowCustomValue&&(this.value="");else{const e=e=>e&&e.toLowerCase&&e.toLowerCase(),t=[...this.filteredItems||[],this.selectedItem].find((t=>e(this._getItemLabel(t))===e(this._inputElementValue)));if(this.allowCustomValue&&!t){const e=this._inputElementValue;this._lastCustomValue=e;const t=new CustomEvent("custom-value-set",{detail:e,composed:!0,cancelable:!0,bubbles:!0});this.dispatchEvent(t),t.defaultPrevented||(this._selectItemForValue(e),this.value=e)}else this.allowCustomValue||this.opened||!t?this._inputElementValue=this.selectedItem?this._getItemLabel(this.selectedItem):this.value||"":this.value=this._getItemValue(t)}this._detectAndDispatchChange(),this._clearSelectionRange(),this.filter=""}get _propertyForValue(){return"value"}_onInput(e){this.opened||this._isClearButton(e)||this.autoOpenDisabled||this.open();const t=this._inputElementValue;this.filter===t?this._filterChanged(this.filter,this.itemValuePath,this.itemLabelPath):this.filter=t}_onChange(e){e.stopPropagation()}_itemLabelPathChanged(e){"string"!=typeof e&&console.error("You should set itemLabelPath to a valid string")}_filterChanged(e,t,i){void 0!==e&&(this.$.dropdown._scrollIntoView(0),this.items?this.filteredItems=this._filterItems(this.items,e):this._filteredItemsChanged(this.filteredItems))}_loadingChanged(e){e&&(this._focusedIndex=-1)}_revertInputValue(){""!==this.filter?this._inputElementValue=this.filter:this._revertInputValueToValue(),this._clearSelectionRange()}_revertInputValueToValue(){this.allowCustomValue&&!this.selectedItem?this._inputElementValue=this.value:this._inputElementValue=this._getItemLabel(this.selectedItem)}_selectedItemChanged(e){if(null==e)this.filteredItems&&(this.allowCustomValue||(this.value=""),this._toggleHasValue(""!==this.value),this._inputElementValue=this.value);else{const t=this._getItemValue(e);if(this.value!==t&&(this.value=t,this.value!==t))return;this._toggleHasValue(!0),this._inputElementValue=this._getItemLabel(e)}this.$.dropdown._selectedItem=e;const t=this._getOverlayItems();this.filteredItems&&t&&(this._focusedIndex=this.filteredItems.indexOf(e))}_valueChanged(e,t){""===e&&void 0===t||(this._isValidValue(e)?(this._getItemValue(this.selectedItem)!==e&&this._selectItemForValue(e),!this.selectedItem&&this.allowCustomValue&&(this._inputElementValue=e),this._toggleHasValue(""!==this.value)):this.selectedItem=null,this.filter="",this._lastCommittedValue=void 0)}_detectAndDispatchChange(){this.value!==this._lastCommittedValue&&(this.dispatchEvent(new CustomEvent("change",{bubbles:!0})),this._lastCommittedValue=this.value)}_itemsChanged(e,t){this._ensureItemsOrDataProvider((()=>{this.items=t})),e?this.filteredItems=e.slice(0):this.__previousItems&&(this.filteredItems=null);const i=this._indexOfValue(this.value,e);this._focusedIndex=i;const a=i>-1&&e[i];a&&(this.selectedItem=a),this.__previousItems=e}_filteredItemsChanged(e,t,i){this._setOverlayItems(e);const a=this._indexOfValue(this.value,e);null===this.selectedItem&&a>=0&&this._selectItemForValue(this.value);const n=this._inputElementValue;void 0===n||n===this._getItemLabel(this.selectedItem)?this._focusedIndex=this.$.dropdown.indexOfLabel(this._getItemLabel(this.selectedItem)):this._focusedIndex=this.$.dropdown.indexOfLabel(this.filter)}_filterItems(e,t){if(!e)return e;const i=e.filter((e=>(t=t?t.toString().toLowerCase():"",this._getItemLabel(e).toString().toLowerCase().indexOf(t)>-1)));return i}_selectItemForValue(e){const t=this._indexOfValue(e,this.filteredItems),i=this.selectedItem;t>=0?this.selectedItem=this.filteredItems[t]:this.dataProvider&&void 0===this.selectedItem?this.selectedItem=void 0:this.selectedItem=null,null===this.selectedItem&&null===i&&this._selectedItemChanged(this.selectedItem)}_getItemElements(){return Array.from(this.$.dropdown._scroller.querySelectorAll("vaadin-combo-box-item"))}_getOverlayItems(){return this.$.dropdown._items}_setOverlayItems(e){this.$.dropdown.set("_items",e)}_indexOfValue(e,t){return t&&this._isValidValue(e)?t.findIndex((t=>!(t instanceof Ro)&&this._getItemValue(t)===e)):-1}_isValidValue(e){return null!=e}_overlaySelectedItemChanged(e){e.stopPropagation(),e.detail.item instanceof Ro||(this.opened?(this._focusedIndex=this.filteredItems.indexOf(e.detail.item),this.close()):this.selectedItem!==e.detail.item&&(this.selectedItem=e.detail.item,this._detectAndDispatchChange()))}__onClearButtonMouseDown(e){e.preventDefault(),this.inputElement.focus()}_onFocusout(e){if(e.relatedTarget!==this.$.dropdown.$.overlay){if(!this.readonly&&!this._closeOnBlurIsPrevented){if(!this.opened&&this.allowCustomValue&&this._inputElementValue===this._lastCustomValue)return void delete this._lastCustomValue;this._closeOrCommit()}}else e.composedPath()[0].focus()}_onTouchend(e){this.clearElement&&e.composedPath()[0]===this.clearElement&&(e.preventDefault(),this._clear())}validate(){return!(this.invalid=!this.checkValidity())}checkValidity(){return super.checkValidity?super.checkValidity():!this.required||!!this.value}};class Xo extends(Go(Qo(Vn(n)))){static get is(){return"vaadin-combo-box-light"}static get template(){return o`
      <style>
        :host([opened]) {
          pointer-events: auto;
        }
      </style>

      <slot></slot>

      <vaadin-combo-box-dropdown
        id="dropdown"
        opened="[[opened]]"
        position-target="[[inputElement]]"
        restore-focus-on-close="[[__restoreFocusOnClose]]"
        restore-focus-node="[[inputElement]]"
        renderer="[[renderer]]"
        _focused-index="[[_focusedIndex]]"
        _item-id-path="[[itemIdPath]]"
        _item-label-path="[[itemLabelPath]]"
        loading="[[loading]]"
        theme="[[_theme]]"
      ></vaadin-combo-box-dropdown>
    `}static get properties(){return{attrForValue:{type:String,value:"value"}}}get clearElement(){return this.querySelector(".clear-button")}ready(){super.ready(),this._toggleElement=this.querySelector(".toggle-button")}connectedCallback(){super.connectedCallback(),this._setInputElement(this.querySelector("vaadin-text-field,.input")),this._revertInputValue()}checkValidity(){return this.inputElement.validate?this.inputElement.validate():super.checkValidity()}get _propertyForValue(){return l(this.attrForValue)}_isClearButton(e){return super._isClearButton(e)||"input"===e.type&&!e.isTrusted||"clear-button"===e.composedPath()[0].getAttribute("part")}_onChange(e){super._onChange(e),this._isClearButton(e)&&this._clear()}}customElements.define(Xo.is,Xo);const Jo={};class es extends d{constructor(e){if(super(e),this.previousValue=Jo,e.type!==c.ELEMENT)throw new Error("renderer only supports binding to element")}render(e,t){return u}update(e,[t,i]){var a;const n=this.previousValue===Jo;if(!this.hasChanged(i))return u;this.previousValue=Array.isArray(i)?Array.from(i):i;const o=e.element;if(n){const i=null===(a=e.options)||void 0===a?void 0:a.host;this.addRenderer(o,t,{host:i})}else this.runRenderer(o);return u}hasChanged(e){let t=!0;return Array.isArray(e)?Array.isArray(this.previousValue)&&this.previousValue.length===e.length&&e.every(((e,t)=>e===this.previousValue[t]))&&(t=!1):this.previousValue===e&&(t=!1),t}}const ts=h(class extends es{addRenderer(e,t,i){e.renderer=(e,a,n)=>{p(t.call(i.host,n.item,n,a),e,i)}}runRenderer(e){e.requestContentUpdate()}});Pn("vaadin-combo-box-item",i`
    :host {
      padding: 0;
    }
    :host([focused]:not([disabled])) {
      background-color: rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.12);
    }
    :host([selected]:not([disabled])) {
      background-color: transparent;
      color: var(--mdc-theme-primary);
      --mdc-ripple-color: var(--mdc-theme-primary);
      --mdc-theme-text-primary-on-background: var(--mdc-theme-primary);
    }
    :host([selected]:not([disabled])):before {
      background-color: var(--mdc-theme-primary);
      opacity: 0.12;
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    :host([selected][focused]:not([disabled])):before {
      opacity: 0.24;
    }
    :host(:hover:not([disabled])) {
      background-color: transparent;
    }
    [part="content"] {
      width: 100%;
    }
    [part="checkmark"] {
      display: none;
    }
  `),v([w("ha-combo-box")],(function(t,a){class n extends a{constructor(...e){super(...e),t(this)}}return{F:n,d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f()],key:"label",value:void 0},{kind:"field",decorators:[f()],key:"value",value:void 0},{kind:"field",decorators:[f()],key:"placeholder",value:void 0},{kind:"field",decorators:[f()],key:"validationMessage",value:void 0},{kind:"field",decorators:[f()],key:"helper",value:void 0},{kind:"field",decorators:[f({attribute:"error-message"})],key:"errorMessage",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"invalid",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"icon",value:void 0},{kind:"field",decorators:[f()],key:"items",value:void 0},{kind:"field",decorators:[f()],key:"filteredItems",value:void 0},{kind:"field",decorators:[f({attribute:"allow-custom-value",type:Boolean})],key:"allowCustomValue",value:void 0},{kind:"field",decorators:[f({attribute:"item-value-path"})],key:"itemValuePath",value:void 0},{kind:"field",decorators:[f({attribute:"item-label-path"})],key:"itemLabelPath",value:void 0},{kind:"field",decorators:[f({attribute:"item-id-path"})],key:"itemIdPath",value:void 0},{kind:"field",decorators:[f()],key:"renderer",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"disabled",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"required",value:void 0},{kind:"field",decorators:[f({type:Boolean,reflect:!0,attribute:"opened"})],key:"_opened",value:void 0},{kind:"field",decorators:[g("vaadin-combo-box-light",!0)],key:"_comboBox",value:void 0},{kind:"field",key:"_overlayMutationObserver",value:void 0},{kind:"method",key:"open",value:function(){this.updateComplete.then((()=>{var e;null===(e=this._comboBox)||void 0===e||e.open()}))}},{kind:"method",key:"focus",value:function(){this.updateComplete.then((()=>{var e,t;null===(e=this._comboBox)||void 0===e||null===(t=e.inputElement)||void 0===t||t.focus()}))}},{kind:"method",key:"disconnectedCallback",value:function(){_(y(n.prototype),"disconnectedCallback",this).call(this),this._overlayMutationObserver&&(this._overlayMutationObserver.disconnect(),this._overlayMutationObserver=void 0)}},{kind:"get",key:"selectedItem",value:function(){return this._comboBox.selectedItem}},{kind:"method",key:"setInputValue",value:function(e){this._comboBox.value=e}},{kind:"method",key:"render",value:function(){var e,t,i,a;return k`
      <vaadin-combo-box-light
        .itemValuePath=${this.itemValuePath}
        .itemIdPath=${this.itemIdPath}
        .itemLabelPath=${this.itemLabelPath}
        .items=${this.items}
        .value=${this.value||""}
        .filteredItems=${this.filteredItems}
        .allowCustomValue=${this.allowCustomValue}
        .disabled=${this.disabled}
        .required=${this.required}
        ${i=this.renderer||this._defaultRowRenderer,ts(i,a)}
        @opened-changed=${this._openedChanged}
        @filter-changed=${this._filterChanged}
        @value-changed=${this._valueChanged}
        attr-for-value="value"
      >
        <ha-textfield
          .label=${this.label}
          .placeholder=${this.placeholder}
          .disabled=${this.disabled}
          .required=${this.required}
          .validationMessage=${this.validationMessage}
          .errorMessage=${this.errorMessage}
          class="input"
          autocapitalize="none"
          autocomplete="off"
          autocorrect="off"
          spellcheck="false"
          .suffix=${k`<div style="width: 28px;"></div>`}
          .icon=${this.icon}
          .invalid=${this.invalid}
          .helper=${this.helper}
          helperPersistent
        >
          <slot name="icon" slot="leadingIcon"></slot>
        </ha-textfield>
        ${this.value?k`<ha-svg-icon
              aria-label=${null===(e=this.hass)||void 0===e?void 0:e.localize("ui.components.combo-box.clear")}
              class="clear-button"
              .path=${b}
              @click=${this._clearValue}
            ></ha-svg-icon>`:""}
        <ha-svg-icon
          aria-label=${null===(t=this.hass)||void 0===t?void 0:t.localize("ui.components.combo-box.show")}
          class="toggle-button"
          .path=${this._opened?x:$}
          @click=${this._toggleOpen}
        ></ha-svg-icon>
      </vaadin-combo-box-light>
    `}},{kind:"field",key:"_defaultRowRenderer",value(){return e=>k`<mwc-list-item>
      ${this.itemLabelPath?e[this.itemLabelPath]:e}
    </mwc-list-item>`}},{kind:"method",key:"_clearValue",value:function(t){t.stopPropagation(),e(this,"value-changed",{value:void 0})}},{kind:"method",key:"_toggleOpen",value:function(e){var t,i;this._opened?(null===(t=this._comboBox)||void 0===t||t.close(),e.stopPropagation()):null===(i=this._comboBox)||void 0===i||i.inputElement.focus()}},{kind:"method",key:"_openedChanged",value:function(t){const i=t.detail.value;if(setTimeout((()=>{this._opened=i}),0),e(this,t.type,t.detail),i&&"MutationObserver"in window&&!this._overlayMutationObserver){const e=document.querySelector("vaadin-combo-box-overlay");if(!e)return;this._overlayMutationObserver=new MutationObserver((t=>{t.forEach((t=>{var i;"attributes"===t.type&&"inert"===t.attributeName?(null===(i=this._overlayMutationObserver)||void 0===i||i.disconnect(),this._overlayMutationObserver=void 0,e.inert=!1):"childList"===t.type&&t.removedNodes.forEach((e=>{var t;"VAADIN-COMBO-BOX-OVERLAY"===e.nodeName&&(null===(t=this._overlayMutationObserver)||void 0===t||t.disconnect(),this._overlayMutationObserver=void 0)}))}))})),this._overlayMutationObserver.observe(e,{attributes:!0}),this._overlayMutationObserver.observe(document.body,{childList:!0})}}},{kind:"method",key:"_filterChanged",value:function(t){e(this,t.type,t.detail,{composed:!1})}},{kind:"method",key:"_valueChanged",value:function(t){t.stopPropagation();const i=t.detail.value;i!==this.value&&e(this,"value-changed",{value:i})}},{kind:"get",static:!0,key:"styles",value:function(){return i`
      :host {
        display: block;
        width: 100%;
      }
      vaadin-combo-box-light {
        position: relative;
      }
      ha-textfield {
        width: 100%;
      }
      ha-textfield > ha-icon-button {
        --mdc-icon-button-size: 24px;
        padding: 2px;
        color: var(--secondary-text-color);
      }
      ha-svg-icon {
        color: var(--input-dropdown-icon-color);
        position: absolute;
        cursor: pointer;
      }
      .toggle-button {
        right: 12px;
        top: -10px;
        inset-inline-start: initial;
        inset-inline-end: 12px;
        direction: var(--direction);
      }
      :host([opened]) .toggle-button {
        color: var(--primary-color);
      }
      .clear-button {
        --mdc-icon-size: 20px;
        top: -7px;
        right: 36px;
        inset-inline-start: initial;
        inset-inline-end: 36px;
        direction: var(--direction);
      }
    `}}]}}),m);const is=["unavailable","unknown"],as=e=>zn(e.entity_id),ns=i`
  ha-state-icon[data-domain="alert"][data-state="on"],
  ha-state-icon[data-domain="automation"][data-state="on"],
  ha-state-icon[data-domain="binary_sensor"][data-state="on"],
  ha-state-icon[data-domain="calendar"][data-state="on"],
  ha-state-icon[data-domain="camera"][data-state="streaming"],
  ha-state-icon[data-domain="cover"][data-state="open"],
  ha-state-icon[data-domain="device_tracker"][data-state="home"],
  ha-state-icon[data-domain="fan"][data-state="on"],
  ha-state-icon[data-domain="humidifier"][data-state="on"],
  ha-state-icon[data-domain="light"][data-state="on"],
  ha-state-icon[data-domain="input_boolean"][data-state="on"],
  ha-state-icon[data-domain="lock"][data-state="unlocked"],
  ha-state-icon[data-domain="media_player"][data-state="on"],
  ha-state-icon[data-domain="media_player"][data-state="paused"],
  ha-state-icon[data-domain="media_player"][data-state="playing"],
  ha-state-icon[data-domain="remote"][data-state="on"],
  ha-state-icon[data-domain="script"][data-state="on"],
  ha-state-icon[data-domain="sun"][data-state="above_horizon"],
  ha-state-icon[data-domain="switch"][data-state="on"],
  ha-state-icon[data-domain="timer"][data-state="active"],
  ha-state-icon[data-domain="vacuum"][data-state="cleaning"],
  ha-state-icon[data-domain="group"][data-state="on"],
  ha-state-icon[data-domain="group"][data-state="home"],
  ha-state-icon[data-domain="group"][data-state="open"],
  ha-state-icon[data-domain="group"][data-state="locked"],
  ha-state-icon[data-domain="group"][data-state="problem"] {
    color: var(--paper-item-icon-active-color, #fdd835);
  }

  ha-state-icon[data-domain="climate"][data-state="cooling"] {
    color: var(--cool-color, var(--state-climate-cool-color));
  }

  ha-state-icon[data-domain="climate"][data-state="heating"] {
    color: var(--heat-color, var(--state-climate-heat-color));
  }

  ha-state-icon[data-domain="climate"][data-state="drying"] {
    color: var(--dry-color, var(--state-climate-dry-color));
  }

  ha-state-icon[data-domain="alarm_control_panel"] {
    color: var(--alarm-color-armed, var(--label-badge-red));
  }
  ha-state-icon[data-domain="alarm_control_panel"][data-state="disarmed"] {
    color: var(--alarm-color-disarmed, var(--label-badge-green));
  }
  ha-state-icon[data-domain="alarm_control_panel"][data-state="pending"],
  ha-state-icon[data-domain="alarm_control_panel"][data-state="arming"] {
    color: var(--alarm-color-pending, var(--label-badge-yellow));
    animation: pulse 1s infinite;
  }
  ha-state-icon[data-domain="alarm_control_panel"][data-state="triggered"] {
    color: var(--alarm-color-triggered, var(--label-badge-red));
    animation: pulse 1s infinite;
  }

  @keyframes pulse {
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

  ha-state-icon[data-domain="plant"][data-state="problem"] {
    color: var(--state-icon-error-color);
  }

  /* Color the icon if unavailable */
  ha-state-icon[data-state="unavailable"] {
    color: var(--state-unavailable-color);
  }
`,os=(e,t)=>e.callWS({type:"auth/sign_path",path:t}),ss=C,rs={alert:A,air_quality:I,automation:E,calendar:z,camera:S,climate:L,configurator:T,conversation:O,counter:P,fan:M,google_assistant:F,group:D,homeassistant:B,homekit:N,image_processing:V,input_button:j,input_datetime:q,input_number:R,input_select:U,input_text:H,light:G,mailbox:W,notify:K,number:R,persistent_notification:Y,person:Z,plant:Q,proximity:X,remote:J,scene:ee,script:te,select:U,sensor:ie,siren:ae,simple_alarm:Y,sun:ne,timer:oe,updater:se,vacuum:re,water_heater:le,weather:de,zone:ce},ls={apparent_power:ue,aqi:I,carbon_dioxide:he,carbon_monoxide:pe,current:ve,date:z,energy:me,frequency:fe,gas:ge,humidity:_e,illuminance:ye,monetary:ke,nitrogen_dioxide:be,nitrogen_monoxide:be,nitrous_oxide:be,ozone:be,pm1:be,pm10:be,pm25:be,power:ue,power_factor:xe,pressure:$e,reactive_power:ue,signal_strength:we,sulphur_dioxide:be,temperature:le,timestamp:Ce,volatile_organic_compounds:be,voltage:fe},ds=(e,t)=>0!=(e.supported_features&t),cs=e=>ds(e,4)&&"number"==typeof e.in_progress,us=e=>(e=>cs(e.attributes))(e)||!!e.attributes.in_progress;let hs,ps;!function(e){e.language="language",e.system="system",e.comma_decimal="comma_decimal",e.decimal_comma="decimal_comma",e.space_comma="space_comma",e.none="none"}(hs||(hs={})),function(e){e.language="language",e.system="system",e.am_pm="12",e.twenty_four="24"}(ps||(ps={}));const vs={"clear-night":Ie,cloudy:de,exceptional:Ee,fog:ze,hail:Se,lightning:Le,"lightning-rainy":Te,partlycloudy:Oe,pouring:Pe,rainy:Me,snowy:Fe,"snowy-rainy":De,sunny:Be,windy:Ne,"windy-variant":Ve};i`
  .rain {
    fill: var(--weather-icon-rain-color, #30b3ff);
  }
  .sun {
    fill: var(--weather-icon-sun-color, #fdd93c);
  }
  .moon {
    fill: var(--weather-icon-moon-color, #fcf497);
  }
  .cloud-back {
    fill: var(--weather-icon-cloud-back-color, #d4d4d4);
  }
  .cloud-front {
    fill: var(--weather-icon-cloud-front-color, #f9f9f9);
  }
`;const ms={10:ai,20:ni,30:oi,40:si,50:ri,60:li,70:di,80:ci,90:ui,100:Mt},fs={10:hi,20:pi,30:vi,40:mi,50:fi,60:gi,70:_i,80:yi,90:ki,100:Ft},gs=(e,t)=>{const i=Number(e);if(isNaN(i))return"off"===e?Mt:"on"===e?Jt:ei;const a=10*Math.round(i/10);return t&&i>=10?fs[a]:t?ti:i<=5?ii:ms[a]},_s=e=>{const t=null==e?void 0:e.attributes.device_class;if(t&&t in ls)return ls[t];if("battery"===t)return e?((e,t)=>{const i=e.state,a=t&&"on"===t.state;return gs(i,a)})(e):Mt;const i=null==e?void 0:e.attributes.unit_of_measurement;return"°C"===i||"°F"===i?le:void 0},ys=(e,t,i)=>{const a=void 0!==i?i:null==t?void 0:t.state;switch(e){case"alarm_control_panel":return(e=>{switch(e){case"armed_away":return Ye;case"armed_vacation":return Ke;case"armed_home":return We;case"armed_night":return Ge;case"armed_custom_bypass":return He;case"pending":return Ue;case"triggered":return Re;case"disarmed":return qe;default:return je}})(a);case"binary_sensor":return((e,t)=>{const i="off"===e;switch(null==t?void 0:t.attributes.device_class){case"battery":return i?Mt:Dt;case"battery_charging":return i?Mt:Ft;case"carbon_monoxide":return i?Ot:Pt;case"cold":return i?le:Tt;case"connectivity":return i?St:Lt;case"door":return i?Et:zt;case"garage_door":return i?At:It;case"power":case"plug":return i?ct:ut;case"gas":case"problem":case"safety":case"tamper":return i?wt:Ct;case"smoke":return i?xt:$t;case"heat":return i?le:bt;case"light":return i?ye:kt;case"lock":return i?_t:yt;case"moisture":return i?ft:gt;case"motion":return i?vt:mt;case"occupancy":case"presence":return i?lt:dt;case"opening":return i?ht:pt;case"running":return i?st:rt;case"sound":return i?nt:ot;case"update":return i?it:at;case"vibration":return i?et:tt;case"window":return i?Xe:Je;default:return i?Ze:Qe}})(a,t);case"button":switch(null==t?void 0:t.attributes.device_class){case"restart":return Ni;case"update":return at;default:return j}case"cover":return((e,t)=>{const i="closed"!==e;switch(null==t?void 0:t.attributes.device_class){case"garage":switch(e){case"opening":return Nt;case"closing":return Bt;case"closed":return At;default:return It}case"gate":switch(e){case"opening":case"closing":return Xt;case"closed":return Qt;default:return Zt}case"door":return i?zt:Et;case"damper":return i?Kt:Yt;case"shutter":switch(e){case"opening":return Nt;case"closing":return Bt;case"closed":return Wt;default:return Gt}case"curtain":switch(e){case"opening":return Ht;case"closing":return Ut;case"closed":return Rt;default:return qt}case"blind":case"shade":switch(e){case"opening":return Nt;case"closing":return Bt;case"closed":return jt;default:return Vt}case"window":switch(e){case"opening":return Nt;case"closing":return Bt;case"closed":return Xe;default:return Je}}switch(e){case"opening":return Nt;case"closing":return Bt;case"closed":return Xe;default:return Je}})(a,t);case"device_tracker":return"router"===(null==t?void 0:t.attributes.source_type)?"home"===a?Pi:Mi:["bluetooth","bluetooth_le"].includes(null==t?void 0:t.attributes.source_type)?"home"===a?Fi:Di:"not_home"===a?Bi:Z;case"humidifier":return i&&"off"===i?Ti:Oi;case"input_boolean":return"on"===a?Si:Li;case"input_datetime":if(null==t||!t.attributes.has_date)return Ce;if(!t.attributes.has_time)return z;break;case"lock":switch(a){case"unlocked":return yt;case"jammed":return zi;case"locking":case"unlocking":return Ei;default:return _t}case"media_player":return"playing"===a?Ai:Ii;case"switch":switch(null==t?void 0:t.attributes.device_class){case"outlet":return"on"===a?ut:ct;case"switch":return"on"===a?wi:Ci;default:return wi}case"sensor":{const e=_s(t);if(e)return e;break}case"sun":return"above_horizon"===(null==t?void 0:t.state)?rs[e]:Ie;case"switch_as_x":return $i;case"threshold":return xi;case"update":return"on"===a?us(t)?bi:at:it;case"weather":return((e,t)=>e?t&&"partlycloudy"===e?Ae:vs[e]:void 0)(null==t?void 0:t.state)}if(e in rs)return rs[e]},ks=e=>e?((e,t,i)=>ys(e,t,i)||(console.warn(`Unable to find icon for domain ${e}`),ss))(zn(e.entity_id),e):ss;v([w("ha-state-icon")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"state",value:void 0},{kind:"field",decorators:[f()],key:"icon",value:void 0},{kind:"method",key:"render",value:function(){var e,t;return this.icon||null!==(e=this.state)&&void 0!==e&&e.attributes.icon?k`<ha-icon
        .icon=${this.icon||(null===(t=this.state)||void 0===t?void 0:t.attributes.icon)}
      ></ha-icon>`:k`<ha-svg-icon .path=${ks(this.state)}></ha-svg-icon>`}}]}}),m);let bs=v(null,(function(e,t){class a extends t{constructor(...t){super(...t),e(this)}}return{F:a,d:[{kind:"field",key:"hass",value:void 0},{kind:"field",decorators:[f()],key:"stateObj",value:void 0},{kind:"field",decorators:[f()],key:"overrideIcon",value:void 0},{kind:"field",decorators:[f()],key:"overrideImage",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"stateColor",value:void 0},{kind:"field",decorators:[f({type:Boolean,reflect:!0,attribute:"icon"})],key:"_showIcon",value:()=>!0},{kind:"field",decorators:[Vi()],key:"_iconStyle",value:()=>({})},{kind:"method",key:"render",value:function(){const e=this.stateObj;if(!e&&!this.overrideIcon&&!this.overrideImage)return k`<div class="missing">
        <ha-svg-icon .path=${A}></ha-svg-icon>
      </div>`;if(!this._showIcon)return k``;const t=e?as(e):void 0;return k`<ha-state-icon
      style=${ji(this._iconStyle)}
      data-domain=${qi(this.stateColor||"light"===t&&!1!==this.stateColor?t:void 0)}
      data-state=${e?(e=>{if(is.includes(e.state))return e.state;const t=e.entity_id.split(".")[0];let i=e.state;return"climate"===t&&(i=e.attributes.hvac_action),i})(e):""}
      .icon=${this.overrideIcon}
      .state=${e}
    ></ha-state-icon>`}},{kind:"method",key:"willUpdate",value:function(e){if(_(y(a.prototype),"willUpdate",this).call(this,e),!e.has("stateObj")&&!e.has("overrideImage")&&!e.has("overrideIcon"))return;const t=this.stateObj,i={},n={backgroundImage:""};if(this._showIcon=!0,t&&void 0===this.overrideImage)if(!t.attributes.entity_picture_local&&!t.attributes.entity_picture||this.overrideIcon){if("on"===t.state&&(!1!==this.stateColor&&t.attributes.rgb_color&&(i.color=`rgb(${t.attributes.rgb_color.join(",")})`),t.attributes.brightness&&!1!==this.stateColor)){const e=t.attributes.brightness;if("number"!=typeof e){const i=`Type error: state-badge expected number, but type of ${t.entity_id}.attributes.brightness is ${typeof e} (${e})`;console.warn(i)}i.filter=`brightness(${(e+245)/5}%)`}}else{let e=t.attributes.entity_picture_local||t.attributes.entity_picture;this.hass&&(e=this.hass.hassUrl(e)),"camera"===zn(t.entity_id)&&(e=`${e}&width=${80}&height=${80}`),n.backgroundImage=`url(${e})`,this._showIcon=!1}else if(this.overrideImage){let e=this.overrideImage;this.hass&&(e=this.hass.hassUrl(e)),n.backgroundImage=`url(${e})`,this._showIcon=!1}this._iconStyle=i,Object.assign(this.style,n)}},{kind:"get",static:!0,key:"styles",value:function(){return[ns,i`
        :host {
          position: relative;
          display: inline-block;
          width: 40px;
          color: var(--paper-item-icon-color, #44739e);
          border-radius: 50%;
          height: 40px;
          text-align: center;
          background-size: cover;
          line-height: 40px;
          vertical-align: middle;
          box-sizing: border-box;
        }
        :host(:focus) {
          outline: none;
        }
        :host(:not([icon]):focus) {
          border: 2px solid var(--divider-color);
        }
        :host([icon]:focus) {
          background: var(--divider-color);
        }
        ha-state-icon {
          transition: color 0.3s ease-in-out, filter 0.3s ease-in-out;
        }
        .missing {
          color: #fce588;
        }
      `]}}]}}),m);customElements.define("state-badge",bs);const xs=e=>k`<mwc-list-item graphic="avatar" .twoline=${!!e.entity_id}>
    ${e.state?k`<state-badge slot="graphic" .stateObj=${e}></state-badge>`:""}
    <span>${e.friendly_name}</span>
    <span slot="secondary">${e.entity_id}</span>
  </mwc-list-item>`;v([w("ha-entity-picker")],(function(t,i){return{F:class extends i{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"autofocus",value:()=>!1},{kind:"field",decorators:[f({type:Boolean})],key:"disabled",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"required",value:void 0},{kind:"field",decorators:[f({type:Boolean,attribute:"allow-custom-entity"})],key:"allowCustomEntity",value:void 0},{kind:"field",decorators:[f()],key:"label",value:void 0},{kind:"field",decorators:[f()],key:"value",value:void 0},{kind:"field",decorators:[f()],key:"helper",value:void 0},{kind:"field",decorators:[f({type:Array,attribute:"include-domains"})],key:"includeDomains",value:void 0},{kind:"field",decorators:[f({type:Array,attribute:"exclude-domains"})],key:"excludeDomains",value:void 0},{kind:"field",decorators:[f({type:Array,attribute:"include-device-classes"})],key:"includeDeviceClasses",value:void 0},{kind:"field",decorators:[f({type:Array,attribute:"include-unit-of-measurement"})],key:"includeUnitOfMeasurement",value:void 0},{kind:"field",decorators:[f({type:Array,attribute:"include-entities"})],key:"includeEntities",value:void 0},{kind:"field",decorators:[f({type:Array,attribute:"exclude-entities"})],key:"excludeEntities",value:void 0},{kind:"field",decorators:[f()],key:"entityFilter",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"hideClearIcon",value:()=>!1},{kind:"field",decorators:[Vi()],key:"_opened",value:()=>!1},{kind:"field",decorators:[g("ha-combo-box",!0)],key:"comboBox",value:void 0},{kind:"method",key:"open",value:function(){this.updateComplete.then((()=>{var e;null===(e=this.comboBox)||void 0===e||e.open()}))}},{kind:"method",key:"focus",value:function(){this.updateComplete.then((()=>{var e;null===(e=this.comboBox)||void 0===e||e.focus()}))}},{kind:"field",key:"_initedStates",value:()=>!1},{kind:"field",key:"_states",value:()=>[]},{kind:"field",key:"_getStates",value(){return Ri(((e,t,i,a,n,o,s,r,l)=>{let d=[];if(!t)return[];let c=Object.keys(t.states);return c.length?r?(c=c.filter((e=>this.includeEntities.includes(e))),c.map((e=>({...t.states[e],friendly_name:Sn(t.states[e])||e}))).sort(((e,t)=>Qa(e.friendly_name,t.friendly_name)))):(l&&(c=c.filter((e=>!l.includes(e)))),i&&(c=c.filter((e=>i.includes(zn(e))))),a&&(c=c.filter((e=>!a.includes(zn(e))))),d=c.map((e=>({...t.states[e],friendly_name:Sn(t.states[e])||e}))).sort(((e,t)=>Qa(e.friendly_name,t.friendly_name))),o&&(d=d.filter((e=>e.entity_id===this.value||e.attributes.device_class&&o.includes(e.attributes.device_class)))),s&&(d=d.filter((e=>e.entity_id===this.value||e.attributes.unit_of_measurement&&s.includes(e.attributes.unit_of_measurement)))),n&&(d=d.filter((e=>e.entity_id===this.value||n(e)))),d.length?d:[{entity_id:"",state:"",last_changed:"",last_updated:"",context:{id:"",user_id:null,parent_id:null},friendly_name:this.hass.localize("ui.components.entity.entity-picker.no_match"),attributes:{friendly_name:this.hass.localize("ui.components.entity.entity-picker.no_match"),icon:"mdi:magnify"}}]):[{entity_id:"",state:"",last_changed:"",last_updated:"",context:{id:"",user_id:null,parent_id:null},friendly_name:this.hass.localize("ui.components.entity.entity-picker.no_entities"),attributes:{friendly_name:this.hass.localize("ui.components.entity.entity-picker.no_entities"),icon:"mdi:magnify"}}]}))}},{kind:"method",key:"shouldUpdate",value:function(e){return!!(e.has("value")||e.has("label")||e.has("disabled"))||!(!e.has("_opened")&&this._opened)}},{kind:"method",key:"willUpdate",value:function(e){(!this._initedStates||e.has("_opened")&&this._opened)&&(this._states=this._getStates(this._opened,this.hass,this.includeDomains,this.excludeDomains,this.entityFilter,this.includeDeviceClasses,this.includeUnitOfMeasurement,this.includeEntities,this.excludeEntities),this._initedStates&&(this.comboBox.filteredItems=this._states),this._initedStates=!0)}},{kind:"method",key:"render",value:function(){return k`
      <ha-combo-box
        item-value-path="entity_id"
        item-label-path="friendly_name"
        .hass=${this.hass}
        .value=${this._value}
        .label=${void 0===this.label?this.hass.localize("ui.components.entity.entity-picker.entity"):this.label}
        .helper=${this.helper}
        .allowCustomValue=${this.allowCustomEntity}
        .filteredItems=${this._states}
        .renderer=${xs}
        .required=${this.required}
        @opened-changed=${this._openedChanged}
        @value-changed=${this._valueChanged}
        @filter-changed=${this._filterChanged}
      >
      </ha-combo-box>
    `}},{kind:"get",key:"_value",value:function(){return this.value||""}},{kind:"method",key:"_openedChanged",value:function(e){this._opened=e.detail.value}},{kind:"method",key:"_valueChanged",value:function(e){e.stopPropagation();const t=e.detail.value;t!==this._value&&this._setValue(t)}},{kind:"method",key:"_filterChanged",value:function(e){const t=e.detail.value.toLowerCase();this.comboBox.filteredItems=this._states.filter((e=>e.entity_id.toLowerCase().includes(t)||Sn(e).toLowerCase().includes(t)))}},{kind:"method",key:"_setValue",value:function(t){this.value=t,setTimeout((()=>{e(this,"value-changed",{value:t}),e(this,"change")}),0)}}]}}),m);const $s=["scene"];function ws(e){return void 0===e||Array.isArray(e)?e:[e]}function Cs(e){return null==e}v([w("ha-automation-action-activate_scene")],(function(t,i){return{F:class extends i{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f()],key:"action",value:void 0},{kind:"get",static:!0,key:"defaultConfig",value:function(){return{service:"scene.turn_on",target:{entity_id:""},metadata:{}}}},{kind:"method",key:"render",value:function(){let e;var t;"scene"in this.action?e=this.action.scene:e=null===(t=this.action.target)||void 0===t?void 0:t.entity_id;return k`
      <ha-entity-picker
        .hass=${this.hass}
        .value=${e}
        @value-changed=${this._entityPicked}
        .includeDomains=${$s}
        allow-custom-entity
      ></ha-entity-picker>
    `}},{kind:"method",key:"_entityPicked",value:function(t){t.stopPropagation(),e(this,"value-changed",{value:{service:"scene.turn_on",target:{entity_id:t.detail.value},metadata:{}}})}}]}}),m),v([w("ha-automation-action-choose")],(function(t,a){return{F:class extends a{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f()],key:"action",value:void 0},{kind:"get",static:!0,key:"defaultConfig",value:function(){return{choose:[{conditions:[],sequence:[]}],default:[]}}},{kind:"method",key:"render",value:function(){const e=this.action;return k`
      ${(e.choose?ws(e.choose):[]).map(((e,t)=>k`<ha-card>
          <ha-icon-button
            .idx=${t}
            @click=${this._removeOption}
            .label=${this.hass.localize("ui.panel.config.automation.editor.actions.type.choose.remove_option")}
            .path=${Ui}
          ></ha-icon-button>
          <div class="card-content">
            <h2>
              ${this.hass.localize("ui.panel.config.automation.editor.actions.type.choose.option","number",t+1)}:
            </h2>
            <h3>
              ${this.hass.localize("ui.panel.config.automation.editor.actions.type.choose.conditions")}:
            </h3>
            <ha-automation-condition
              .conditions=${e.conditions}
              .hass=${this.hass}
              .idx=${t}
              @value-changed=${this._conditionChanged}
            ></ha-automation-condition>
            <h3>
              ${this.hass.localize("ui.panel.config.automation.editor.actions.type.choose.sequence")}:
            </h3>
            <ha-form
              .hass=${this.hass}
              .schema=${[{name:"sequence",selector:{action:{}}}]}
              .data=${e}
              .idx=${t}
              @value-changed=${this._actionChanged}
            ></ha-form>
          </div>
        </ha-card>`))}
      <ha-card outlined>
        <div class="card-actions add-card">
          <mwc-button @click=${this._addOption}>
            ${this.hass.localize("ui.panel.config.automation.editor.actions.type.choose.add_option")}
          </mwc-button>
        </div>
      </ha-card>
      <h2>
        ${this.hass.localize("ui.panel.config.automation.editor.actions.type.choose.default")}:
      </h2>
      <ha-automation-action
        .actions=${e.default||[]}
        @value-changed=${this._defaultChanged}
        .hass=${this.hass}
      ></ha-automation-action>
    `}},{kind:"method",key:"_conditionChanged",value:function(t){t.stopPropagation();const i=t.detail.value,a=t.target.idx,n=this.action.choose?[...ws(this.action.choose)]:[];n[a].conditions=i,e(this,"value-changed",{value:{...this.action,choose:n}})}},{kind:"method",key:"_actionChanged",value:function(t){t.stopPropagation();const i=t.detail.value.sequence,a=t.target.idx,n=this.action.choose?[...ws(this.action.choose)]:[];n[a].sequence=i,e(this,"value-changed",{value:{...this.action,choose:n}})}},{kind:"method",key:"_addOption",value:function(){const t=this.action.choose?[...ws(this.action.choose)]:[];t.push({conditions:[],sequence:[]}),e(this,"value-changed",{value:{...this.action,choose:t}})}},{kind:"method",key:"_removeOption",value:function(t){const i=t.currentTarget.idx,a=this.action.choose?[...ws(this.action.choose)]:[];a.splice(i,1),e(this,"value-changed",{value:{...this.action,choose:a}})}},{kind:"method",key:"_defaultChanged",value:function(t){t.stopPropagation();const i=t.detail.value;e(this,"value-changed",{value:{...this.action,default:i}})}},{kind:"get",static:!0,key:"styles",value:function(){return[Hi,i`
        ha-card {
          margin-top: 16px;
        }
        .add-card mwc-button {
          display: block;
          text-align: center;
        }
        ha-icon-button {
          position: absolute;
          right: 0;
          padding: 4px;
        }
        ha-form::part(root) {
          overflow: visible;
        }
      `]}}]}}),m);var As=function(e,t){var i,a="";for(i=0;i<t;i+=1)a+=e;return a},Is=function(e){return 0===e&&Number.NEGATIVE_INFINITY===1/e},Es={isNothing:Cs,isObject:function(e){return"object"==typeof e&&null!==e},toArray:function(e){return Array.isArray(e)?e:Cs(e)?[]:[e]},repeat:As,isNegativeZero:Is,extend:function(e,t){var i,a,n,o;if(t)for(i=0,a=(o=Object.keys(t)).length;i<a;i+=1)e[n=o[i]]=t[n];return e}};function zs(e,t){var i="",a=e.reason||"(unknown reason)";return e.mark?(e.mark.name&&(i+='in "'+e.mark.name+'" '),i+="("+(e.mark.line+1)+":"+(e.mark.column+1)+")",!t&&e.mark.snippet&&(i+="\n\n"+e.mark.snippet),a+" "+i):a}function Ss(e,t){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=t,this.message=zs(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack||""}Ss.prototype=Object.create(Error.prototype),Ss.prototype.constructor=Ss,Ss.prototype.toString=function(e){return this.name+": "+zs(this,e)};var Ls=Ss;function Ts(e,t,i,a,n){var o="",s="",r=Math.floor(n/2)-1;return a-t>r&&(t=a-r+(o=" ... ").length),i-a>r&&(i=a+r-(s=" ...").length),{str:o+e.slice(t,i).replace(/\t/g,"→")+s,pos:a-t+o.length}}function Os(e,t){return Es.repeat(" ",t-e.length)+e}var Ps=function(e,t){if(t=Object.create(t||null),!e.buffer)return null;t.maxLength||(t.maxLength=79),"number"!=typeof t.indent&&(t.indent=1),"number"!=typeof t.linesBefore&&(t.linesBefore=3),"number"!=typeof t.linesAfter&&(t.linesAfter=2);for(var i,a=/\r?\n|\r|\0/g,n=[0],o=[],s=-1;i=a.exec(e.buffer);)o.push(i.index),n.push(i.index+i[0].length),e.position<=i.index&&s<0&&(s=n.length-2);s<0&&(s=n.length-1);var r,l,d="",c=Math.min(e.line+t.linesAfter,o.length).toString().length,u=t.maxLength-(t.indent+c+3);for(r=1;r<=t.linesBefore&&!(s-r<0);r++)l=Ts(e.buffer,n[s-r],o[s-r],e.position-(n[s]-n[s-r]),u),d=Es.repeat(" ",t.indent)+Os((e.line-r+1).toString(),c)+" | "+l.str+"\n"+d;for(l=Ts(e.buffer,n[s],o[s],e.position,u),d+=Es.repeat(" ",t.indent)+Os((e.line+1).toString(),c)+" | "+l.str+"\n",d+=Es.repeat("-",t.indent+c+3+l.pos)+"^\n",r=1;r<=t.linesAfter&&!(s+r>=o.length);r++)l=Ts(e.buffer,n[s+r],o[s+r],e.position-(n[s]-n[s+r]),u),d+=Es.repeat(" ",t.indent)+Os((e.line+r+1).toString(),c)+" | "+l.str+"\n";return d.replace(/\n$/,"")},Ms=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],Fs=["scalar","sequence","mapping"];var Ds=function(e,t){if(t=t||{},Object.keys(t).forEach((function(t){if(-1===Ms.indexOf(t))throw new Ls('Unknown option "'+t+'" is met in definition of "'+e+'" YAML type.')})),this.options=t,this.tag=e,this.kind=t.kind||null,this.resolve=t.resolve||function(){return!0},this.construct=t.construct||function(e){return e},this.instanceOf=t.instanceOf||null,this.predicate=t.predicate||null,this.represent=t.represent||null,this.representName=t.representName||null,this.defaultStyle=t.defaultStyle||null,this.multi=t.multi||!1,this.styleAliases=function(e){var t={};return null!==e&&Object.keys(e).forEach((function(i){e[i].forEach((function(e){t[String(e)]=i}))})),t}(t.styleAliases||null),-1===Fs.indexOf(this.kind))throw new Ls('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')};function Bs(e,t){var i=[];return e[t].forEach((function(e){var t=i.length;i.forEach((function(i,a){i.tag===e.tag&&i.kind===e.kind&&i.multi===e.multi&&(t=a)})),i[t]=e})),i}function Ns(e){return this.extend(e)}Ns.prototype.extend=function(e){var t=[],i=[];if(e instanceof Ds)i.push(e);else if(Array.isArray(e))i=i.concat(e);else{if(!e||!Array.isArray(e.implicit)&&!Array.isArray(e.explicit))throw new Ls("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");e.implicit&&(t=t.concat(e.implicit)),e.explicit&&(i=i.concat(e.explicit))}t.forEach((function(e){if(!(e instanceof Ds))throw new Ls("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(e.loadKind&&"scalar"!==e.loadKind)throw new Ls("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(e.multi)throw new Ls("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")})),i.forEach((function(e){if(!(e instanceof Ds))throw new Ls("Specified list of YAML types (or a single Type object) contains a non-Type object.")}));var a=Object.create(Ns.prototype);return a.implicit=(this.implicit||[]).concat(t),a.explicit=(this.explicit||[]).concat(i),a.compiledImplicit=Bs(a,"implicit"),a.compiledExplicit=Bs(a,"explicit"),a.compiledTypeMap=function(){var e,t,i={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}};function a(e){e.multi?(i.multi[e.kind].push(e),i.multi.fallback.push(e)):i[e.kind][e.tag]=i.fallback[e.tag]=e}for(e=0,t=arguments.length;e<t;e+=1)arguments[e].forEach(a);return i}(a.compiledImplicit,a.compiledExplicit),a};var Vs=new Ns({explicit:[new Ds("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return null!==e?e:""}}),new Ds("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return null!==e?e:[]}}),new Ds("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return null!==e?e:{}}})]});var js=new Ds("tag:yaml.org,2002:null",{kind:"scalar",resolve:function(e){if(null===e)return!0;var t=e.length;return 1===t&&"~"===e||4===t&&("null"===e||"Null"===e||"NULL"===e)},construct:function(){return null},predicate:function(e){return null===e},represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});var qs=new Ds("tag:yaml.org,2002:bool",{kind:"scalar",resolve:function(e){if(null===e)return!1;var t=e.length;return 4===t&&("true"===e||"True"===e||"TRUE"===e)||5===t&&("false"===e||"False"===e||"FALSE"===e)},construct:function(e){return"true"===e||"True"===e||"TRUE"===e},predicate:function(e){return"[object Boolean]"===Object.prototype.toString.call(e)},represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"});function Rs(e){return 48<=e&&e<=55}function Us(e){return 48<=e&&e<=57}var Hs=new Ds("tag:yaml.org,2002:int",{kind:"scalar",resolve:function(e){if(null===e)return!1;var t,i,a=e.length,n=0,o=!1;if(!a)return!1;if("-"!==(t=e[n])&&"+"!==t||(t=e[++n]),"0"===t){if(n+1===a)return!0;if("b"===(t=e[++n])){for(n++;n<a;n++)if("_"!==(t=e[n])){if("0"!==t&&"1"!==t)return!1;o=!0}return o&&"_"!==t}if("x"===t){for(n++;n<a;n++)if("_"!==(t=e[n])){if(!(48<=(i=e.charCodeAt(n))&&i<=57||65<=i&&i<=70||97<=i&&i<=102))return!1;o=!0}return o&&"_"!==t}if("o"===t){for(n++;n<a;n++)if("_"!==(t=e[n])){if(!Rs(e.charCodeAt(n)))return!1;o=!0}return o&&"_"!==t}}if("_"===t)return!1;for(;n<a;n++)if("_"!==(t=e[n])){if(!Us(e.charCodeAt(n)))return!1;o=!0}return!(!o||"_"===t)},construct:function(e){var t,i=e,a=1;if(-1!==i.indexOf("_")&&(i=i.replace(/_/g,"")),"-"!==(t=i[0])&&"+"!==t||("-"===t&&(a=-1),t=(i=i.slice(1))[0]),"0"===i)return 0;if("0"===t){if("b"===i[1])return a*parseInt(i.slice(2),2);if("x"===i[1])return a*parseInt(i.slice(2),16);if("o"===i[1])return a*parseInt(i.slice(2),8)}return a*parseInt(i,10)},predicate:function(e){return"[object Number]"===Object.prototype.toString.call(e)&&e%1==0&&!Es.isNegativeZero(e)},represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0o"+e.toString(8):"-0o"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),Gs=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");var Ws=/^[-+]?[0-9]+e/;var Ks=new Ds("tag:yaml.org,2002:float",{kind:"scalar",resolve:function(e){return null!==e&&!(!Gs.test(e)||"_"===e[e.length-1])},construct:function(e){var t,i;return i="-"===(t=e.replace(/_/g,"").toLowerCase())[0]?-1:1,"+-".indexOf(t[0])>=0&&(t=t.slice(1)),".inf"===t?1===i?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:".nan"===t?NaN:i*parseFloat(t,10)},predicate:function(e){return"[object Number]"===Object.prototype.toString.call(e)&&(e%1!=0||Es.isNegativeZero(e))},represent:function(e,t){var i;if(isNaN(e))switch(t){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(t){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(t){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(Es.isNegativeZero(e))return"-0.0";return i=e.toString(10),Ws.test(i)?i.replace("e",".e"):i},defaultStyle:"lowercase"}),Ys=Vs.extend({implicit:[js,qs,Hs,Ks]}),Zs=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),Qs=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");var Xs=new Ds("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:function(e){return null!==e&&(null!==Zs.exec(e)||null!==Qs.exec(e))},construct:function(e){var t,i,a,n,o,s,r,l,d=0,c=null;if(null===(t=Zs.exec(e))&&(t=Qs.exec(e)),null===t)throw new Error("Date resolve error");if(i=+t[1],a=+t[2]-1,n=+t[3],!t[4])return new Date(Date.UTC(i,a,n));if(o=+t[4],s=+t[5],r=+t[6],t[7]){for(d=t[7].slice(0,3);d.length<3;)d+="0";d=+d}return t[9]&&(c=6e4*(60*+t[10]+ +(t[11]||0)),"-"===t[9]&&(c=-c)),l=new Date(Date.UTC(i,a,n,o,s,r,d)),c&&l.setTime(l.getTime()-c),l},instanceOf:Date,represent:function(e){return e.toISOString()}});var Js=new Ds("tag:yaml.org,2002:merge",{kind:"scalar",resolve:function(e){return"<<"===e||null===e}}),er="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r";var tr=new Ds("tag:yaml.org,2002:binary",{kind:"scalar",resolve:function(e){if(null===e)return!1;var t,i,a=0,n=e.length,o=er;for(i=0;i<n;i++)if(!((t=o.indexOf(e.charAt(i)))>64)){if(t<0)return!1;a+=6}return a%8==0},construct:function(e){var t,i,a=e.replace(/[\r\n=]/g,""),n=a.length,o=er,s=0,r=[];for(t=0;t<n;t++)t%4==0&&t&&(r.push(s>>16&255),r.push(s>>8&255),r.push(255&s)),s=s<<6|o.indexOf(a.charAt(t));return 0===(i=n%4*6)?(r.push(s>>16&255),r.push(s>>8&255),r.push(255&s)):18===i?(r.push(s>>10&255),r.push(s>>2&255)):12===i&&r.push(s>>4&255),new Uint8Array(r)},predicate:function(e){return"[object Uint8Array]"===Object.prototype.toString.call(e)},represent:function(e){var t,i,a="",n=0,o=e.length,s=er;for(t=0;t<o;t++)t%3==0&&t&&(a+=s[n>>18&63],a+=s[n>>12&63],a+=s[n>>6&63],a+=s[63&n]),n=(n<<8)+e[t];return 0===(i=o%3)?(a+=s[n>>18&63],a+=s[n>>12&63],a+=s[n>>6&63],a+=s[63&n]):2===i?(a+=s[n>>10&63],a+=s[n>>4&63],a+=s[n<<2&63],a+=s[64]):1===i&&(a+=s[n>>2&63],a+=s[n<<4&63],a+=s[64],a+=s[64]),a}}),ir=Object.prototype.hasOwnProperty,ar=Object.prototype.toString;var nr=new Ds("tag:yaml.org,2002:omap",{kind:"sequence",resolve:function(e){if(null===e)return!0;var t,i,a,n,o,s=[],r=e;for(t=0,i=r.length;t<i;t+=1){if(a=r[t],o=!1,"[object Object]"!==ar.call(a))return!1;for(n in a)if(ir.call(a,n)){if(o)return!1;o=!0}if(!o)return!1;if(-1!==s.indexOf(n))return!1;s.push(n)}return!0},construct:function(e){return null!==e?e:[]}}),or=Object.prototype.toString;var sr=new Ds("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:function(e){if(null===e)return!0;var t,i,a,n,o,s=e;for(o=new Array(s.length),t=0,i=s.length;t<i;t+=1){if(a=s[t],"[object Object]"!==or.call(a))return!1;if(1!==(n=Object.keys(a)).length)return!1;o[t]=[n[0],a[n[0]]]}return!0},construct:function(e){if(null===e)return[];var t,i,a,n,o,s=e;for(o=new Array(s.length),t=0,i=s.length;t<i;t+=1)a=s[t],n=Object.keys(a),o[t]=[n[0],a[n[0]]];return o}}),rr=Object.prototype.hasOwnProperty;var lr=new Ds("tag:yaml.org,2002:set",{kind:"mapping",resolve:function(e){if(null===e)return!0;var t,i=e;for(t in i)if(rr.call(i,t)&&null!==i[t])return!1;return!0},construct:function(e){return null!==e?e:{}}}),dr=Ys.extend({implicit:[Xs,Js],explicit:[tr,nr,sr,lr]}),cr=Object.prototype.hasOwnProperty,ur=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,hr=/[\x85\u2028\u2029]/,pr=/[,\[\]\{\}]/,vr=/^(?:!|!!|![a-z\-]+!)$/i,mr=/^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;function fr(e){return Object.prototype.toString.call(e)}function gr(e){return 10===e||13===e}function _r(e){return 9===e||32===e}function yr(e){return 9===e||32===e||10===e||13===e}function kr(e){return 44===e||91===e||93===e||123===e||125===e}function br(e){var t;return 48<=e&&e<=57?e-48:97<=(t=32|e)&&t<=102?t-97+10:-1}function xr(e){return 48===e?"\0":97===e?"":98===e?"\b":116===e||9===e?"\t":110===e?"\n":118===e?"\v":102===e?"\f":114===e?"\r":101===e?"":32===e?" ":34===e?'"':47===e?"/":92===e?"\\":78===e?"":95===e?" ":76===e?"\u2028":80===e?"\u2029":""}function $r(e){return e<=65535?String.fromCharCode(e):String.fromCharCode(55296+(e-65536>>10),56320+(e-65536&1023))}for(var wr=new Array(256),Cr=new Array(256),Ar=0;Ar<256;Ar++)wr[Ar]=xr(Ar)?1:0,Cr[Ar]=xr(Ar);function Ir(e,t){this.input=e,this.filename=t.filename||null,this.schema=t.schema||dr,this.onWarning=t.onWarning||null,this.legacy=t.legacy||!1,this.json=t.json||!1,this.listener=t.listener||null,this.implicitTypes=this.schema.compiledImplicit,this.typeMap=this.schema.compiledTypeMap,this.length=e.length,this.position=0,this.line=0,this.lineStart=0,this.lineIndent=0,this.firstTabInLine=-1,this.documents=[]}function Er(e,t){var i={name:e.filename,buffer:e.input.slice(0,-1),position:e.position,line:e.line,column:e.position-e.lineStart};return i.snippet=Ps(i),new Ls(t,i)}function zr(e,t){throw Er(e,t)}function Sr(e,t){e.onWarning&&e.onWarning.call(null,Er(e,t))}var Lr={YAML:function(e,t,i){var a,n,o;null!==e.version&&zr(e,"duplication of %YAML directive"),1!==i.length&&zr(e,"YAML directive accepts exactly one argument"),null===(a=/^([0-9]+)\.([0-9]+)$/.exec(i[0]))&&zr(e,"ill-formed argument of the YAML directive"),n=parseInt(a[1],10),o=parseInt(a[2],10),1!==n&&zr(e,"unacceptable YAML version of the document"),e.version=i[0],e.checkLineBreaks=o<2,1!==o&&2!==o&&Sr(e,"unsupported YAML version of the document")},TAG:function(e,t,i){var a,n;2!==i.length&&zr(e,"TAG directive accepts exactly two arguments"),a=i[0],n=i[1],vr.test(a)||zr(e,"ill-formed tag handle (first argument) of the TAG directive"),cr.call(e.tagMap,a)&&zr(e,'there is a previously declared suffix for "'+a+'" tag handle'),mr.test(n)||zr(e,"ill-formed tag prefix (second argument) of the TAG directive");try{n=decodeURIComponent(n)}catch(t){zr(e,"tag prefix is malformed: "+n)}e.tagMap[a]=n}};function Tr(e,t,i,a){var n,o,s,r;if(t<i){if(r=e.input.slice(t,i),a)for(n=0,o=r.length;n<o;n+=1)9===(s=r.charCodeAt(n))||32<=s&&s<=1114111||zr(e,"expected valid JSON character");else ur.test(r)&&zr(e,"the stream contains non-printable characters");e.result+=r}}function Or(e,t,i,a){var n,o,s,r;for(Es.isObject(i)||zr(e,"cannot merge mappings; the provided source object is unacceptable"),s=0,r=(n=Object.keys(i)).length;s<r;s+=1)o=n[s],cr.call(t,o)||(t[o]=i[o],a[o]=!0)}function Pr(e,t,i,a,n,o,s,r,l){var d,c;if(Array.isArray(n))for(d=0,c=(n=Array.prototype.slice.call(n)).length;d<c;d+=1)Array.isArray(n[d])&&zr(e,"nested arrays are not supported inside keys"),"object"==typeof n&&"[object Object]"===fr(n[d])&&(n[d]="[object Object]");if("object"==typeof n&&"[object Object]"===fr(n)&&(n="[object Object]"),n=String(n),null===t&&(t={}),"tag:yaml.org,2002:merge"===a)if(Array.isArray(o))for(d=0,c=o.length;d<c;d+=1)Or(e,t,o[d],i);else Or(e,t,o,i);else e.json||cr.call(i,n)||!cr.call(t,n)||(e.line=s||e.line,e.lineStart=r||e.lineStart,e.position=l||e.position,zr(e,"duplicated mapping key")),"__proto__"===n?Object.defineProperty(t,n,{configurable:!0,enumerable:!0,writable:!0,value:o}):t[n]=o,delete i[n];return t}function Mr(e){var t;10===(t=e.input.charCodeAt(e.position))?e.position++:13===t?(e.position++,10===e.input.charCodeAt(e.position)&&e.position++):zr(e,"a line break is expected"),e.line+=1,e.lineStart=e.position,e.firstTabInLine=-1}function Fr(e,t,i){for(var a=0,n=e.input.charCodeAt(e.position);0!==n;){for(;_r(n);)9===n&&-1===e.firstTabInLine&&(e.firstTabInLine=e.position),n=e.input.charCodeAt(++e.position);if(t&&35===n)do{n=e.input.charCodeAt(++e.position)}while(10!==n&&13!==n&&0!==n);if(!gr(n))break;for(Mr(e),n=e.input.charCodeAt(e.position),a++,e.lineIndent=0;32===n;)e.lineIndent++,n=e.input.charCodeAt(++e.position)}return-1!==i&&0!==a&&e.lineIndent<i&&Sr(e,"deficient indentation"),a}function Dr(e){var t,i=e.position;return!(45!==(t=e.input.charCodeAt(i))&&46!==t||t!==e.input.charCodeAt(i+1)||t!==e.input.charCodeAt(i+2)||(i+=3,0!==(t=e.input.charCodeAt(i))&&!yr(t)))}function Br(e,t){1===t?e.result+=" ":t>1&&(e.result+=Es.repeat("\n",t-1))}function Nr(e,t){var i,a,n=e.tag,o=e.anchor,s=[],r=!1;if(-1!==e.firstTabInLine)return!1;for(null!==e.anchor&&(e.anchorMap[e.anchor]=s),a=e.input.charCodeAt(e.position);0!==a&&(-1!==e.firstTabInLine&&(e.position=e.firstTabInLine,zr(e,"tab characters must not be used in indentation")),45===a)&&yr(e.input.charCodeAt(e.position+1));)if(r=!0,e.position++,Fr(e,!0,-1)&&e.lineIndent<=t)s.push(null),a=e.input.charCodeAt(e.position);else if(i=e.line,qr(e,t,3,!1,!0),s.push(e.result),Fr(e,!0,-1),a=e.input.charCodeAt(e.position),(e.line===i||e.lineIndent>t)&&0!==a)zr(e,"bad indentation of a sequence entry");else if(e.lineIndent<t)break;return!!r&&(e.tag=n,e.anchor=o,e.kind="sequence",e.result=s,!0)}function Vr(e){var t,i,a,n,o=!1,s=!1;if(33!==(n=e.input.charCodeAt(e.position)))return!1;if(null!==e.tag&&zr(e,"duplication of a tag property"),60===(n=e.input.charCodeAt(++e.position))?(o=!0,n=e.input.charCodeAt(++e.position)):33===n?(s=!0,i="!!",n=e.input.charCodeAt(++e.position)):i="!",t=e.position,o){do{n=e.input.charCodeAt(++e.position)}while(0!==n&&62!==n);e.position<e.length?(a=e.input.slice(t,e.position),n=e.input.charCodeAt(++e.position)):zr(e,"unexpected end of the stream within a verbatim tag")}else{for(;0!==n&&!yr(n);)33===n&&(s?zr(e,"tag suffix cannot contain exclamation marks"):(i=e.input.slice(t-1,e.position+1),vr.test(i)||zr(e,"named tag handle cannot contain such characters"),s=!0,t=e.position+1)),n=e.input.charCodeAt(++e.position);a=e.input.slice(t,e.position),pr.test(a)&&zr(e,"tag suffix cannot contain flow indicator characters")}a&&!mr.test(a)&&zr(e,"tag name cannot contain such characters: "+a);try{a=decodeURIComponent(a)}catch(t){zr(e,"tag name is malformed: "+a)}return o?e.tag=a:cr.call(e.tagMap,i)?e.tag=e.tagMap[i]+a:"!"===i?e.tag="!"+a:"!!"===i?e.tag="tag:yaml.org,2002:"+a:zr(e,'undeclared tag handle "'+i+'"'),!0}function jr(e){var t,i;if(38!==(i=e.input.charCodeAt(e.position)))return!1;for(null!==e.anchor&&zr(e,"duplication of an anchor property"),i=e.input.charCodeAt(++e.position),t=e.position;0!==i&&!yr(i)&&!kr(i);)i=e.input.charCodeAt(++e.position);return e.position===t&&zr(e,"name of an anchor node must contain at least one character"),e.anchor=e.input.slice(t,e.position),!0}function qr(e,t,i,a,n){var o,s,r,l,d,c,u,h,p,v=1,m=!1,f=!1;if(null!==e.listener&&e.listener("open",e),e.tag=null,e.anchor=null,e.kind=null,e.result=null,o=s=r=4===i||3===i,a&&Fr(e,!0,-1)&&(m=!0,e.lineIndent>t?v=1:e.lineIndent===t?v=0:e.lineIndent<t&&(v=-1)),1===v)for(;Vr(e)||jr(e);)Fr(e,!0,-1)?(m=!0,r=o,e.lineIndent>t?v=1:e.lineIndent===t?v=0:e.lineIndent<t&&(v=-1)):r=!1;if(r&&(r=m||n),1!==v&&4!==i||(h=1===i||2===i?t:t+1,p=e.position-e.lineStart,1===v?r&&(Nr(e,p)||function(e,t,i){var a,n,o,s,r,l,d,c=e.tag,u=e.anchor,h={},p=Object.create(null),v=null,m=null,f=null,g=!1,_=!1;if(-1!==e.firstTabInLine)return!1;for(null!==e.anchor&&(e.anchorMap[e.anchor]=h),d=e.input.charCodeAt(e.position);0!==d;){if(g||-1===e.firstTabInLine||(e.position=e.firstTabInLine,zr(e,"tab characters must not be used in indentation")),a=e.input.charCodeAt(e.position+1),o=e.line,63!==d&&58!==d||!yr(a)){if(s=e.line,r=e.lineStart,l=e.position,!qr(e,i,2,!1,!0))break;if(e.line===o){for(d=e.input.charCodeAt(e.position);_r(d);)d=e.input.charCodeAt(++e.position);if(58===d)yr(d=e.input.charCodeAt(++e.position))||zr(e,"a whitespace character is expected after the key-value separator within a block mapping"),g&&(Pr(e,h,p,v,m,null,s,r,l),v=m=f=null),_=!0,g=!1,n=!1,v=e.tag,m=e.result;else{if(!_)return e.tag=c,e.anchor=u,!0;zr(e,"can not read an implicit mapping pair; a colon is missed")}}else{if(!_)return e.tag=c,e.anchor=u,!0;zr(e,"can not read a block mapping entry; a multiline key may not be an implicit key")}}else 63===d?(g&&(Pr(e,h,p,v,m,null,s,r,l),v=m=f=null),_=!0,g=!0,n=!0):g?(g=!1,n=!0):zr(e,"incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"),e.position+=1,d=a;if((e.line===o||e.lineIndent>t)&&(g&&(s=e.line,r=e.lineStart,l=e.position),qr(e,t,4,!0,n)&&(g?m=e.result:f=e.result),g||(Pr(e,h,p,v,m,f,s,r,l),v=m=f=null),Fr(e,!0,-1),d=e.input.charCodeAt(e.position)),(e.line===o||e.lineIndent>t)&&0!==d)zr(e,"bad indentation of a mapping entry");else if(e.lineIndent<t)break}return g&&Pr(e,h,p,v,m,null,s,r,l),_&&(e.tag=c,e.anchor=u,e.kind="mapping",e.result=h),_}(e,p,h))||function(e,t){var i,a,n,o,s,r,l,d,c,u,h,p,v=!0,m=e.tag,f=e.anchor,g=Object.create(null);if(91===(p=e.input.charCodeAt(e.position)))s=93,d=!1,o=[];else{if(123!==p)return!1;s=125,d=!0,o={}}for(null!==e.anchor&&(e.anchorMap[e.anchor]=o),p=e.input.charCodeAt(++e.position);0!==p;){if(Fr(e,!0,t),(p=e.input.charCodeAt(e.position))===s)return e.position++,e.tag=m,e.anchor=f,e.kind=d?"mapping":"sequence",e.result=o,!0;v?44===p&&zr(e,"expected the node content, but found ','"):zr(e,"missed comma between flow collection entries"),h=null,r=l=!1,63===p&&yr(e.input.charCodeAt(e.position+1))&&(r=l=!0,e.position++,Fr(e,!0,t)),i=e.line,a=e.lineStart,n=e.position,qr(e,t,1,!1,!0),u=e.tag,c=e.result,Fr(e,!0,t),p=e.input.charCodeAt(e.position),!l&&e.line!==i||58!==p||(r=!0,p=e.input.charCodeAt(++e.position),Fr(e,!0,t),qr(e,t,1,!1,!0),h=e.result),d?Pr(e,o,g,u,c,h,i,a,n):r?o.push(Pr(e,null,g,u,c,h,i,a,n)):o.push(c),Fr(e,!0,t),44===(p=e.input.charCodeAt(e.position))?(v=!0,p=e.input.charCodeAt(++e.position)):v=!1}zr(e,"unexpected end of the stream within a flow collection")}(e,h)?f=!0:(s&&function(e,t){var i,a,n,o,s,r=1,l=!1,d=!1,c=t,u=0,h=!1;if(124===(o=e.input.charCodeAt(e.position)))a=!1;else{if(62!==o)return!1;a=!0}for(e.kind="scalar",e.result="";0!==o;)if(43===(o=e.input.charCodeAt(++e.position))||45===o)1===r?r=43===o?3:2:zr(e,"repeat of a chomping mode identifier");else{if(!((n=48<=(s=o)&&s<=57?s-48:-1)>=0))break;0===n?zr(e,"bad explicit indentation width of a block scalar; it cannot be less than one"):d?zr(e,"repeat of an indentation width identifier"):(c=t+n-1,d=!0)}if(_r(o)){do{o=e.input.charCodeAt(++e.position)}while(_r(o));if(35===o)do{o=e.input.charCodeAt(++e.position)}while(!gr(o)&&0!==o)}for(;0!==o;){for(Mr(e),e.lineIndent=0,o=e.input.charCodeAt(e.position);(!d||e.lineIndent<c)&&32===o;)e.lineIndent++,o=e.input.charCodeAt(++e.position);if(!d&&e.lineIndent>c&&(c=e.lineIndent),gr(o))u++;else{if(e.lineIndent<c){3===r?e.result+=Es.repeat("\n",l?1+u:u):1===r&&l&&(e.result+="\n");break}for(a?_r(o)?(h=!0,e.result+=Es.repeat("\n",l?1+u:u)):h?(h=!1,e.result+=Es.repeat("\n",u+1)):0===u?l&&(e.result+=" "):e.result+=Es.repeat("\n",u):e.result+=Es.repeat("\n",l?1+u:u),l=!0,d=!0,u=0,i=e.position;!gr(o)&&0!==o;)o=e.input.charCodeAt(++e.position);Tr(e,i,e.position,!1)}}return!0}(e,h)||function(e,t){var i,a,n;if(39!==(i=e.input.charCodeAt(e.position)))return!1;for(e.kind="scalar",e.result="",e.position++,a=n=e.position;0!==(i=e.input.charCodeAt(e.position));)if(39===i){if(Tr(e,a,e.position,!0),39!==(i=e.input.charCodeAt(++e.position)))return!0;a=e.position,e.position++,n=e.position}else gr(i)?(Tr(e,a,n,!0),Br(e,Fr(e,!1,t)),a=n=e.position):e.position===e.lineStart&&Dr(e)?zr(e,"unexpected end of the document within a single quoted scalar"):(e.position++,n=e.position);zr(e,"unexpected end of the stream within a single quoted scalar")}(e,h)||function(e,t){var i,a,n,o,s,r,l;if(34!==(r=e.input.charCodeAt(e.position)))return!1;for(e.kind="scalar",e.result="",e.position++,i=a=e.position;0!==(r=e.input.charCodeAt(e.position));){if(34===r)return Tr(e,i,e.position,!0),e.position++,!0;if(92===r){if(Tr(e,i,e.position,!0),gr(r=e.input.charCodeAt(++e.position)))Fr(e,!1,t);else if(r<256&&wr[r])e.result+=Cr[r],e.position++;else if((s=120===(l=r)?2:117===l?4:85===l?8:0)>0){for(n=s,o=0;n>0;n--)(s=br(r=e.input.charCodeAt(++e.position)))>=0?o=(o<<4)+s:zr(e,"expected hexadecimal character");e.result+=$r(o),e.position++}else zr(e,"unknown escape sequence");i=a=e.position}else gr(r)?(Tr(e,i,a,!0),Br(e,Fr(e,!1,t)),i=a=e.position):e.position===e.lineStart&&Dr(e)?zr(e,"unexpected end of the document within a double quoted scalar"):(e.position++,a=e.position)}zr(e,"unexpected end of the stream within a double quoted scalar")}(e,h)?f=!0:!function(e){var t,i,a;if(42!==(a=e.input.charCodeAt(e.position)))return!1;for(a=e.input.charCodeAt(++e.position),t=e.position;0!==a&&!yr(a)&&!kr(a);)a=e.input.charCodeAt(++e.position);return e.position===t&&zr(e,"name of an alias node must contain at least one character"),i=e.input.slice(t,e.position),cr.call(e.anchorMap,i)||zr(e,'unidentified alias "'+i+'"'),e.result=e.anchorMap[i],Fr(e,!0,-1),!0}(e)?function(e,t,i){var a,n,o,s,r,l,d,c,u=e.kind,h=e.result;if(yr(c=e.input.charCodeAt(e.position))||kr(c)||35===c||38===c||42===c||33===c||124===c||62===c||39===c||34===c||37===c||64===c||96===c)return!1;if((63===c||45===c)&&(yr(a=e.input.charCodeAt(e.position+1))||i&&kr(a)))return!1;for(e.kind="scalar",e.result="",n=o=e.position,s=!1;0!==c;){if(58===c){if(yr(a=e.input.charCodeAt(e.position+1))||i&&kr(a))break}else if(35===c){if(yr(e.input.charCodeAt(e.position-1)))break}else{if(e.position===e.lineStart&&Dr(e)||i&&kr(c))break;if(gr(c)){if(r=e.line,l=e.lineStart,d=e.lineIndent,Fr(e,!1,-1),e.lineIndent>=t){s=!0,c=e.input.charCodeAt(e.position);continue}e.position=o,e.line=r,e.lineStart=l,e.lineIndent=d;break}}s&&(Tr(e,n,o,!1),Br(e,e.line-r),n=o=e.position,s=!1),_r(c)||(o=e.position+1),c=e.input.charCodeAt(++e.position)}return Tr(e,n,o,!1),!!e.result||(e.kind=u,e.result=h,!1)}(e,h,1===i)&&(f=!0,null===e.tag&&(e.tag="?")):(f=!0,null===e.tag&&null===e.anchor||zr(e,"alias node should not have any properties")),null!==e.anchor&&(e.anchorMap[e.anchor]=e.result)):0===v&&(f=r&&Nr(e,p))),null===e.tag)null!==e.anchor&&(e.anchorMap[e.anchor]=e.result);else if("?"===e.tag){for(null!==e.result&&"scalar"!==e.kind&&zr(e,'unacceptable node kind for !<?> tag; it should be "scalar", not "'+e.kind+'"'),l=0,d=e.implicitTypes.length;l<d;l+=1)if((u=e.implicitTypes[l]).resolve(e.result)){e.result=u.construct(e.result),e.tag=u.tag,null!==e.anchor&&(e.anchorMap[e.anchor]=e.result);break}}else if("!"!==e.tag){if(cr.call(e.typeMap[e.kind||"fallback"],e.tag))u=e.typeMap[e.kind||"fallback"][e.tag];else for(u=null,l=0,d=(c=e.typeMap.multi[e.kind||"fallback"]).length;l<d;l+=1)if(e.tag.slice(0,c[l].tag.length)===c[l].tag){u=c[l];break}u||zr(e,"unknown tag !<"+e.tag+">"),null!==e.result&&u.kind!==e.kind&&zr(e,"unacceptable node kind for !<"+e.tag+'> tag; it should be "'+u.kind+'", not "'+e.kind+'"'),u.resolve(e.result,e.tag)?(e.result=u.construct(e.result,e.tag),null!==e.anchor&&(e.anchorMap[e.anchor]=e.result)):zr(e,"cannot resolve a node with !<"+e.tag+"> explicit tag")}return null!==e.listener&&e.listener("close",e),null!==e.tag||null!==e.anchor||f}function Rr(e){var t,i,a,n,o=e.position,s=!1;for(e.version=null,e.checkLineBreaks=e.legacy,e.tagMap=Object.create(null),e.anchorMap=Object.create(null);0!==(n=e.input.charCodeAt(e.position))&&(Fr(e,!0,-1),n=e.input.charCodeAt(e.position),!(e.lineIndent>0||37!==n));){for(s=!0,n=e.input.charCodeAt(++e.position),t=e.position;0!==n&&!yr(n);)n=e.input.charCodeAt(++e.position);for(a=[],(i=e.input.slice(t,e.position)).length<1&&zr(e,"directive name must not be less than one character in length");0!==n;){for(;_r(n);)n=e.input.charCodeAt(++e.position);if(35===n){do{n=e.input.charCodeAt(++e.position)}while(0!==n&&!gr(n));break}if(gr(n))break;for(t=e.position;0!==n&&!yr(n);)n=e.input.charCodeAt(++e.position);a.push(e.input.slice(t,e.position))}0!==n&&Mr(e),cr.call(Lr,i)?Lr[i](e,i,a):Sr(e,'unknown document directive "'+i+'"')}Fr(e,!0,-1),0===e.lineIndent&&45===e.input.charCodeAt(e.position)&&45===e.input.charCodeAt(e.position+1)&&45===e.input.charCodeAt(e.position+2)?(e.position+=3,Fr(e,!0,-1)):s&&zr(e,"directives end mark is expected"),qr(e,e.lineIndent-1,4,!1,!0),Fr(e,!0,-1),e.checkLineBreaks&&hr.test(e.input.slice(o,e.position))&&Sr(e,"non-ASCII line breaks are interpreted as content"),e.documents.push(e.result),e.position===e.lineStart&&Dr(e)?46===e.input.charCodeAt(e.position)&&(e.position+=3,Fr(e,!0,-1)):e.position<e.length-1&&zr(e,"end of the stream or a document separator is expected")}function Ur(e,t){t=t||{},0!==(e=String(e)).length&&(10!==e.charCodeAt(e.length-1)&&13!==e.charCodeAt(e.length-1)&&(e+="\n"),65279===e.charCodeAt(0)&&(e=e.slice(1)));var i=new Ir(e,t),a=e.indexOf("\0");for(-1!==a&&(i.position=a,zr(i,"null byte is not allowed in input")),i.input+="\0";32===i.input.charCodeAt(i.position);)i.lineIndent+=1,i.position+=1;for(;i.position<i.length-1;)Rr(i);return i.documents}var Hr={loadAll:function(e,t,i){null!==t&&"object"==typeof t&&void 0===i&&(i=t,t=null);var a=Ur(e,i);if("function"!=typeof t)return a;for(var n=0,o=a.length;n<o;n+=1)t(a[n])},load:function(e,t){var i=Ur(e,t);if(0!==i.length){if(1===i.length)return i[0];throw new Ls("expected a single document in the stream, but found more")}}},Gr=Object.prototype.toString,Wr=Object.prototype.hasOwnProperty,Kr={0:"\\0",7:"\\a",8:"\\b",9:"\\t",10:"\\n",11:"\\v",12:"\\f",13:"\\r",27:"\\e",34:'\\"',92:"\\\\",133:"\\N",160:"\\_",8232:"\\L",8233:"\\P"},Yr=["y","Y","yes","Yes","YES","on","On","ON","n","N","no","No","NO","off","Off","OFF"],Zr=/^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;function Qr(e){var t,i,a;if(t=e.toString(16).toUpperCase(),e<=255)i="x",a=2;else if(e<=65535)i="u",a=4;else{if(!(e<=4294967295))throw new Ls("code point within a string may not be greater than 0xFFFFFFFF");i="U",a=8}return"\\"+i+Es.repeat("0",a-t.length)+t}function Xr(e){this.schema=e.schema||dr,this.indent=Math.max(1,e.indent||2),this.noArrayIndent=e.noArrayIndent||!1,this.skipInvalid=e.skipInvalid||!1,this.flowLevel=Es.isNothing(e.flowLevel)?-1:e.flowLevel,this.styleMap=function(e,t){var i,a,n,o,s,r,l;if(null===t)return{};for(i={},n=0,o=(a=Object.keys(t)).length;n<o;n+=1)s=a[n],r=String(t[s]),"!!"===s.slice(0,2)&&(s="tag:yaml.org,2002:"+s.slice(2)),(l=e.compiledTypeMap.fallback[s])&&Wr.call(l.styleAliases,r)&&(r=l.styleAliases[r]),i[s]=r;return i}(this.schema,e.styles||null),this.sortKeys=e.sortKeys||!1,this.lineWidth=e.lineWidth||80,this.noRefs=e.noRefs||!1,this.noCompatMode=e.noCompatMode||!1,this.condenseFlow=e.condenseFlow||!1,this.quotingType='"'===e.quotingType?2:1,this.forceQuotes=e.forceQuotes||!1,this.replacer="function"==typeof e.replacer?e.replacer:null,this.implicitTypes=this.schema.compiledImplicit,this.explicitTypes=this.schema.compiledExplicit,this.tag=null,this.result="",this.duplicates=[],this.usedDuplicates=null}function Jr(e,t){for(var i,a=Es.repeat(" ",t),n=0,o=-1,s="",r=e.length;n<r;)-1===(o=e.indexOf("\n",n))?(i=e.slice(n),n=r):(i=e.slice(n,o+1),n=o+1),i.length&&"\n"!==i&&(s+=a),s+=i;return s}function el(e,t){return"\n"+Es.repeat(" ",e.indent*t)}function tl(e){return 32===e||9===e}function il(e){return 32<=e&&e<=126||161<=e&&e<=55295&&8232!==e&&8233!==e||57344<=e&&e<=65533&&65279!==e||65536<=e&&e<=1114111}function al(e){return il(e)&&65279!==e&&13!==e&&10!==e}function nl(e,t,i){var a=al(e),n=a&&!tl(e);return(i?a:a&&44!==e&&91!==e&&93!==e&&123!==e&&125!==e)&&35!==e&&!(58===t&&!n)||al(t)&&!tl(t)&&35===e||58===t&&n}function ol(e,t){var i,a=e.charCodeAt(t);return a>=55296&&a<=56319&&t+1<e.length&&(i=e.charCodeAt(t+1))>=56320&&i<=57343?1024*(a-55296)+i-56320+65536:a}function sl(e){return/^\n* /.test(e)}function rl(e,t,i,a,n,o,s,r){var l,d,c=0,u=null,h=!1,p=!1,v=-1!==a,m=-1,f=il(d=ol(e,0))&&65279!==d&&!tl(d)&&45!==d&&63!==d&&58!==d&&44!==d&&91!==d&&93!==d&&123!==d&&125!==d&&35!==d&&38!==d&&42!==d&&33!==d&&124!==d&&61!==d&&62!==d&&39!==d&&34!==d&&37!==d&&64!==d&&96!==d&&function(e){return!tl(e)&&58!==e}(ol(e,e.length-1));if(t||s)for(l=0;l<e.length;c>=65536?l+=2:l++){if(!il(c=ol(e,l)))return 5;f=f&&nl(c,u,r),u=c}else{for(l=0;l<e.length;c>=65536?l+=2:l++){if(10===(c=ol(e,l)))h=!0,v&&(p=p||l-m-1>a&&" "!==e[m+1],m=l);else if(!il(c))return 5;f=f&&nl(c,u,r),u=c}p=p||v&&l-m-1>a&&" "!==e[m+1]}return h||p?i>9&&sl(e)?5:s?2===o?5:2:p?4:3:!f||s||n(e)?2===o?5:2:1}function ll(e,t,i,a,n){e.dump=function(){if(0===t.length)return 2===e.quotingType?'""':"''";if(!e.noCompatMode&&(-1!==Yr.indexOf(t)||Zr.test(t)))return 2===e.quotingType?'"'+t+'"':"'"+t+"'";var o=e.indent*Math.max(1,i),s=-1===e.lineWidth?-1:Math.max(Math.min(e.lineWidth,40),e.lineWidth-o),r=a||e.flowLevel>-1&&i>=e.flowLevel;switch(rl(t,r,e.indent,s,(function(t){return function(e,t){var i,a;for(i=0,a=e.implicitTypes.length;i<a;i+=1)if(e.implicitTypes[i].resolve(t))return!0;return!1}(e,t)}),e.quotingType,e.forceQuotes&&!a,n)){case 1:return t;case 2:return"'"+t.replace(/'/g,"''")+"'";case 3:return"|"+dl(t,e.indent)+cl(Jr(t,o));case 4:return">"+dl(t,e.indent)+cl(Jr(function(e,t){var i,a,n=/(\n+)([^\n]*)/g,o=(r=e.indexOf("\n"),r=-1!==r?r:e.length,n.lastIndex=r,ul(e.slice(0,r),t)),s="\n"===e[0]||" "===e[0];var r;for(;a=n.exec(e);){var l=a[1],d=a[2];i=" "===d[0],o+=l+(s||i||""===d?"":"\n")+ul(d,t),s=i}return o}(t,s),o));case 5:return'"'+function(e){for(var t,i="",a=0,n=0;n<e.length;a>=65536?n+=2:n++)a=ol(e,n),!(t=Kr[a])&&il(a)?(i+=e[n],a>=65536&&(i+=e[n+1])):i+=t||Qr(a);return i}(t)+'"';default:throw new Ls("impossible error: invalid scalar style")}}()}function dl(e,t){var i=sl(e)?String(t):"",a="\n"===e[e.length-1];return i+(a&&("\n"===e[e.length-2]||"\n"===e)?"+":a?"":"-")+"\n"}function cl(e){return"\n"===e[e.length-1]?e.slice(0,-1):e}function ul(e,t){if(""===e||" "===e[0])return e;for(var i,a,n=/ [^ ]/g,o=0,s=0,r=0,l="";i=n.exec(e);)(r=i.index)-o>t&&(a=s>o?s:r,l+="\n"+e.slice(o,a),o=a+1),s=r;return l+="\n",e.length-o>t&&s>o?l+=e.slice(o,s)+"\n"+e.slice(s+1):l+=e.slice(o),l.slice(1)}function hl(e,t,i,a){var n,o,s,r="",l=e.tag;for(n=0,o=i.length;n<o;n+=1)s=i[n],e.replacer&&(s=e.replacer.call(i,String(n),s)),(vl(e,t+1,s,!0,!0,!1,!0)||void 0===s&&vl(e,t+1,null,!0,!0,!1,!0))&&(a&&""===r||(r+=el(e,t)),e.dump&&10===e.dump.charCodeAt(0)?r+="-":r+="- ",r+=e.dump);e.tag=l,e.dump=r||"[]"}function pl(e,t,i){var a,n,o,s,r,l;for(o=0,s=(n=i?e.explicitTypes:e.implicitTypes).length;o<s;o+=1)if(((r=n[o]).instanceOf||r.predicate)&&(!r.instanceOf||"object"==typeof t&&t instanceof r.instanceOf)&&(!r.predicate||r.predicate(t))){if(i?r.multi&&r.representName?e.tag=r.representName(t):e.tag=r.tag:e.tag="?",r.represent){if(l=e.styleMap[r.tag]||r.defaultStyle,"[object Function]"===Gr.call(r.represent))a=r.represent(t,l);else{if(!Wr.call(r.represent,l))throw new Ls("!<"+r.tag+'> tag resolver accepts not "'+l+'" style');a=r.represent[l](t,l)}e.dump=a}return!0}return!1}function vl(e,t,i,a,n,o,s){e.tag=null,e.dump=i,pl(e,i,!1)||pl(e,i,!0);var r,l=Gr.call(e.dump),d=a;a&&(a=e.flowLevel<0||e.flowLevel>t);var c,u,h="[object Object]"===l||"[object Array]"===l;if(h&&(u=-1!==(c=e.duplicates.indexOf(i))),(null!==e.tag&&"?"!==e.tag||u||2!==e.indent&&t>0)&&(n=!1),u&&e.usedDuplicates[c])e.dump="*ref_"+c;else{if(h&&u&&!e.usedDuplicates[c]&&(e.usedDuplicates[c]=!0),"[object Object]"===l)a&&0!==Object.keys(e.dump).length?(!function(e,t,i,a){var n,o,s,r,l,d,c="",u=e.tag,h=Object.keys(i);if(!0===e.sortKeys)h.sort();else if("function"==typeof e.sortKeys)h.sort(e.sortKeys);else if(e.sortKeys)throw new Ls("sortKeys must be a boolean or a function");for(n=0,o=h.length;n<o;n+=1)d="",a&&""===c||(d+=el(e,t)),r=i[s=h[n]],e.replacer&&(r=e.replacer.call(i,s,r)),vl(e,t+1,s,!0,!0,!0)&&((l=null!==e.tag&&"?"!==e.tag||e.dump&&e.dump.length>1024)&&(e.dump&&10===e.dump.charCodeAt(0)?d+="?":d+="? "),d+=e.dump,l&&(d+=el(e,t)),vl(e,t+1,r,!0,l)&&(e.dump&&10===e.dump.charCodeAt(0)?d+=":":d+=": ",c+=d+=e.dump));e.tag=u,e.dump=c||"{}"}(e,t,e.dump,n),u&&(e.dump="&ref_"+c+e.dump)):(!function(e,t,i){var a,n,o,s,r,l="",d=e.tag,c=Object.keys(i);for(a=0,n=c.length;a<n;a+=1)r="",""!==l&&(r+=", "),e.condenseFlow&&(r+='"'),s=i[o=c[a]],e.replacer&&(s=e.replacer.call(i,o,s)),vl(e,t,o,!1,!1)&&(e.dump.length>1024&&(r+="? "),r+=e.dump+(e.condenseFlow?'"':"")+":"+(e.condenseFlow?"":" "),vl(e,t,s,!1,!1)&&(l+=r+=e.dump));e.tag=d,e.dump="{"+l+"}"}(e,t,e.dump),u&&(e.dump="&ref_"+c+" "+e.dump));else if("[object Array]"===l)a&&0!==e.dump.length?(e.noArrayIndent&&!s&&t>0?hl(e,t-1,e.dump,n):hl(e,t,e.dump,n),u&&(e.dump="&ref_"+c+e.dump)):(!function(e,t,i){var a,n,o,s="",r=e.tag;for(a=0,n=i.length;a<n;a+=1)o=i[a],e.replacer&&(o=e.replacer.call(i,String(a),o)),(vl(e,t,o,!1,!1)||void 0===o&&vl(e,t,null,!1,!1))&&(""!==s&&(s+=","+(e.condenseFlow?"":" ")),s+=e.dump);e.tag=r,e.dump="["+s+"]"}(e,t,e.dump),u&&(e.dump="&ref_"+c+" "+e.dump));else{if("[object String]"!==l){if("[object Undefined]"===l)return!1;if(e.skipInvalid)return!1;throw new Ls("unacceptable kind of an object to dump "+l)}"?"!==e.tag&&ll(e,e.dump,t,o,d)}null!==e.tag&&"?"!==e.tag&&(r=encodeURI("!"===e.tag[0]?e.tag.slice(1):e.tag).replace(/!/g,"%21"),r="!"===e.tag[0]?"!"+r:"tag:yaml.org,2002:"===r.slice(0,18)?"!!"+r.slice(18):"!<"+r+">",e.dump=r+" "+e.dump)}return!0}function ml(e,t){var i,a,n=[],o=[];for(fl(e,n,o),i=0,a=o.length;i<a;i+=1)t.duplicates.push(n[o[i]]);t.usedDuplicates=new Array(a)}function fl(e,t,i){var a,n,o;if(null!==e&&"object"==typeof e)if(-1!==(n=t.indexOf(e)))-1===i.indexOf(n)&&i.push(n);else if(t.push(e),Array.isArray(e))for(n=0,o=e.length;n<o;n+=1)fl(e[n],t,i);else for(n=0,o=(a=Object.keys(e)).length;n<o;n+=1)fl(e[a[n]],t,i)}var gl=dr,_l=Hr.load,yl={dump:function(e,t){var i=new Xr(t=t||{});i.noRefs||ml(e,i);var a=e;return i.replacer&&(a=i.replacer.call({"":a},"",a)),vl(i,0,a,!0,!0)?i.dump+"\n":""}}.dump;let kl;const bl={key:"Mod-s",run:t=>(e(t.dom,"editor-save"),!0)},xl=e=>{const t=document.createElement("ha-icon");return t.icon=e.label,t};v([w("ha-code-editor")],(function(t,a){class n extends a{constructor(...e){super(...e),t(this)}}return{F:n,d:[{kind:"field",key:"codemirror",value:void 0},{kind:"field",decorators:[f()],key:"mode",value:()=>"yaml"},{kind:"field",key:"hass",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"autofocus",value:()=>!1},{kind:"field",decorators:[f({type:Boolean})],key:"readOnly",value:()=>!1},{kind:"field",decorators:[f({type:Boolean,attribute:"autocomplete-entities"})],key:"autocompleteEntities",value:()=>!1},{kind:"field",decorators:[f({type:Boolean,attribute:"autocomplete-icons"})],key:"autocompleteIcons",value:()=>!1},{kind:"field",decorators:[f()],key:"error",value:()=>!1},{kind:"field",decorators:[Vi()],key:"_value",value:()=>""},{kind:"field",key:"_loadedCodeMirror",value:void 0},{kind:"field",key:"_iconList",value:void 0},{kind:"set",key:"value",value:function(e){this._value=e}},{kind:"get",key:"value",value:function(){return this.codemirror?this.codemirror.state.doc.toString():this._value}},{kind:"get",key:"hasComments",value:function(){if(!this.codemirror||!this._loadedCodeMirror)return!1;const e=this._loadedCodeMirror.HighlightStyle.get(this.codemirror.state,this._loadedCodeMirror.tags.comment);return!!this.shadowRoot.querySelector(`span.${e}`)}},{kind:"method",key:"connectedCallback",value:function(){_(y(n.prototype),"connectedCallback",this).call(this),this.codemirror&&!1!==this.autofocus&&this.codemirror.focus()}},{kind:"method",key:"update",value:function(e){_(y(n.prototype),"update",this).call(this,e),this.codemirror&&(e.has("mode")&&this.codemirror.dispatch({effects:this._loadedCodeMirror.langCompartment.reconfigure(this._mode)}),e.has("readOnly")&&this.codemirror.dispatch({effects:this._loadedCodeMirror.readonlyCompartment.reconfigure(this._loadedCodeMirror.EditorView.editable.of(!this.readOnly))}),e.has("_value")&&this._value!==this.value&&this.codemirror.dispatch({changes:{from:0,to:this.codemirror.state.doc.length,insert:this._value}}),e.has("error")&&this.classList.toggle("error-state",this.error))}},{kind:"method",key:"firstUpdated",value:function(e){_(y(n.prototype),"firstUpdated",this).call(this,e),this._blockKeyboardShortcuts(),this._load()}},{kind:"get",key:"_mode",value:function(){return this._loadedCodeMirror.langs[this.mode]}},{kind:"method",key:"_load",value:async function(){this._loadedCodeMirror=await(async()=>(kl||(kl=import("./c.da8de431.js")),kl))();const e=[this._loadedCodeMirror.lineNumbers(),this._loadedCodeMirror.EditorState.allowMultipleSelections.of(!0),this._loadedCodeMirror.history(),this._loadedCodeMirror.highlightSelectionMatches(),this._loadedCodeMirror.highlightActiveLine(),this._loadedCodeMirror.drawSelection(),this._loadedCodeMirror.rectangularSelection(),this._loadedCodeMirror.keymap.of([...this._loadedCodeMirror.defaultKeymap,...this._loadedCodeMirror.searchKeymap,...this._loadedCodeMirror.historyKeymap,...this._loadedCodeMirror.tabKeyBindings,bl]),this._loadedCodeMirror.langCompartment.of(this._mode),this._loadedCodeMirror.theme,this._loadedCodeMirror.Prec.fallback(this._loadedCodeMirror.highlightStyle),this._loadedCodeMirror.readonlyCompartment.of(this._loadedCodeMirror.EditorView.editable.of(!this.readOnly)),this._loadedCodeMirror.EditorView.updateListener.of((e=>this._onUpdate(e)))];if(!this.readOnly){const t=[];this.autocompleteEntities&&this.hass&&t.push(this._entityCompletions.bind(this)),this.autocompleteIcons&&t.push(this._mdiCompletions.bind(this)),t.length>0&&e.push(this._loadedCodeMirror.autocompletion({override:t,maxRenderedOptions:10}))}this.codemirror=new this._loadedCodeMirror.EditorView({state:this._loadedCodeMirror.EditorState.create({doc:this._value,extensions:e}),root:this.shadowRoot,parent:this.shadowRoot})}},{kind:"field",key:"_getStates",value:()=>Ri((e=>{if(!e)return[];return Object.keys(e).map((t=>({type:"variable",label:t,detail:e[t].attributes.friendly_name,info:`State: ${e[t].state}`})))}))},{kind:"method",key:"_entityCompletions",value:function(e){const t=e.matchBefore(/[a-z_]{3,}\.\w*/);if(!t||t.from===t.to&&!e.explicit)return null;const i=this._getStates(this.hass.states);return i&&i.length?{from:Number(t.from),options:i,span:/^[a-z_]{3,}\.\w*$/}:null}},{kind:"field",key:"_getIconItems",value(){return async()=>{if(!this._iconList){let e;e=[],this._iconList=e.map((e=>({type:"variable",label:`mdi:${e.name}`,detail:e.keywords.join(", "),info:xl})))}return this._iconList}}},{kind:"method",key:"_mdiCompletions",value:async function(e){const t=e.matchBefore(/mdi:\S*/);if(!t||t.from===t.to&&!e.explicit)return null;const i=await this._getIconItems();return{from:Number(t.from),options:i,span:/^mdi:\S*$/}}},{kind:"method",key:"_blockKeyboardShortcuts",value:function(){this.addEventListener("keydown",(e=>e.stopPropagation()))}},{kind:"method",key:"_onUpdate",value:function(t){if(!t.docChanged)return;const i=this.value;i!==this._value&&(this._value=i,e(this,"value-changed",{value:this._value}))}},{kind:"get",static:!0,key:"styles",value:function(){return i`
      :host(.error-state) .cm-gutters {
        border-color: var(--error-state-color, red);
      }
    `}}]}}),Gi);v([w("ha-yaml-editor")],(function(t,i){return{F:class extends i{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f()],key:"value",value:void 0},{kind:"field",decorators:[f({attribute:!1})],key:"yamlSchema",value:()=>gl},{kind:"field",decorators:[f()],key:"defaultValue",value:void 0},{kind:"field",decorators:[f()],key:"isValid",value:()=>!0},{kind:"field",decorators:[f()],key:"label",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"readOnly",value:()=>!1},{kind:"field",decorators:[f({type:Boolean})],key:"required",value:()=>!1},{kind:"field",decorators:[Vi()],key:"_yaml",value:()=>""},{kind:"method",key:"setValue",value:function(e){try{this._yaml=e&&!(e=>{if("object"!=typeof e)return!1;for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0})(e)?yl(e,{schema:this.yamlSchema}):""}catch(t){console.error(t,e),alert(`There was an error converting to YAML: ${t}`)}}},{kind:"method",key:"firstUpdated",value:function(){this.defaultValue&&this.setValue(this.defaultValue)}},{kind:"method",key:"render",value:function(){return void 0===this._yaml?k``:k`
      ${this.label?k`<p>${this.label}${this.required?" *":""}</p>`:""}
      <ha-code-editor
        .hass=${this.hass}
        .value=${this._yaml}
        .readOnly=${this.readOnly}
        mode="yaml"
        autocomplete-entities
        autocomplete-icons
        .error=${!1===this.isValid}
        @value-changed=${this._onChange}
        dir="ltr"
      ></ha-code-editor>
    `}},{kind:"method",key:"_onChange",value:function(t){let i;t.stopPropagation(),this._yaml=t.detail.value;let a=!0;if(this._yaml)try{i=_l(this._yaml,{schema:this.yamlSchema})}catch(e){a=!1}else i={};this.value=i,this.isValid=a,e(this,"value-changed",{value:i,isValid:a})}},{kind:"get",key:"yaml",value:function(){return this._yaml}}]}}),m);v([w("ha-progress-button")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[f({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[f({type:Boolean})],key:"progress",value:()=>!1},{kind:"field",decorators:[f({type:Boolean})],key:"raised",value:()=>!1},{kind:"field",decorators:[Vi()],key:"_result",value:void 0},{kind:"method",key:"render",value:function(){const e=this._result||this.progress;return k`
      <mwc-button
        ?raised=${this.raised}
        .disabled=${this.disabled||this.progress}
        @click=${this._buttonTapped}
        class=${this._result||""}
      >
        <slot></slot>
      </mwc-button>
      ${e?k`
            <div class="progress">
              ${"success"===this._result?k`<ha-svg-icon .path=${Wi}></ha-svg-icon>`:"error"===this._result?k`<ha-svg-icon .path=${Ki}></ha-svg-icon>`:this.progress?k`
                    <ha-circular-progress
                      size="small"
                      active
                    ></ha-circular-progress>
                  `:""}
            </div>
          `:""}
    `}},{kind:"method",key:"actionSuccess",value:function(){this._setResult("success")}},{kind:"method",key:"actionError",value:function(){this._setResult("error")}},{kind:"method",key:"_setResult",value:function(e){this._result=e,setTimeout((()=>{this._result=void 0}),2e3)}},{kind:"method",key:"_buttonTapped",value:function(e){this.progress&&e.stopPropagation()}},{kind:"get",static:!0,key:"styles",value:function(){return i`
      :host {
        outline: none;
        display: inline-block;
        position: relative;
      }

      mwc-button {
        transition: all 1s;
      }

      mwc-button.success {
        --mdc-theme-primary: white;
        background-color: var(--success-color);
        transition: none;
        border-radius: 4px;
        pointer-events: none;
      }

      mwc-button[raised].success {
        --mdc-theme-primary: var(--success-color);
        --mdc-theme-on-primary: white;
      }

      mwc-button.error {
        --mdc-theme-primary: white;
        background-color: var(--error-color);
        transition: none;
        border-radius: 4px;
        pointer-events: none;
      }

      mwc-button[raised].error {
        --mdc-theme-primary: var(--error-color);
        --mdc-theme-on-primary: white;
      }

      .progress {
        bottom: 4px;
        position: absolute;
        text-align: center;
        top: 4px;
        width: 100%;
      }

      ha-svg-icon {
        color: white;
      }

      mwc-button.success slot,
      mwc-button.error slot {
        visibility: hidden;
      }
    `}}]}}),m);v([w("ha-automation-condition-row")],(function(t,a){return{F:class extends a{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f()],key:"condition",value:void 0},{kind:"field",decorators:[Vi()],key:"_yamlMode",value:()=>!1},{kind:"field",decorators:[Vi()],key:"_warnings",value:void 0},{kind:"field",decorators:[g("ha-yaml-editor")],key:"_yamlEditor",value:void 0},{kind:"method",key:"render",value:function(){return this.condition?k`
      <ha-card outlined>
        ${!1===this.condition.enabled?k`<div class="disabled-bar">
              ${this.hass.localize("ui.panel.config.automation.editor.actions.disabled")}
            </div>`:""}
        <div class="card-menu">
          <ha-progress-button @click=${this._testCondition}>
            ${this.hass.localize("ui.panel.config.automation.editor.conditions.test")}
          </ha-progress-button>
          <ha-button-menu corner="BOTTOM_START" @action=${this._handleAction}>
            <ha-icon-button
              slot="trigger"
              .label=${this.hass.localize("ui.common.menu")}
              .path=${Yi}
            >
            </ha-icon-button>
            <mwc-list-item>
              ${this._yamlMode?this.hass.localize("ui.panel.config.automation.editor.edit_ui"):this.hass.localize("ui.panel.config.automation.editor.edit_yaml")}
            </mwc-list-item>
            <mwc-list-item>
              ${this.hass.localize("ui.panel.config.automation.editor.actions.duplicate")}
            </mwc-list-item>
            <mwc-list-item>
              ${!1===this.condition.enabled?this.hass.localize("ui.panel.config.automation.editor.actions.enable"):this.hass.localize("ui.panel.config.automation.editor.actions.disable")}
            </mwc-list-item>
            <mwc-list-item class="warning">
              ${this.hass.localize("ui.panel.config.automation.editor.actions.delete")}
            </mwc-list-item>
          </ha-button-menu>
        </div>
        <div
          class="card-content ${!1===this.condition.enabled?"disabled":""}"
        >
          ${this._warnings?k`<ha-alert
                alert-type="warning"
                .title=${this.hass.localize("ui.errors.config.editor_not_supported")}
              >
                ${this._warnings.length>0&&void 0!==this._warnings[0]?k` <ul>
                      ${this._warnings.map((e=>k`<li>${e}</li>`))}
                    </ul>`:""}
                ${this.hass.localize("ui.errors.config.edit_in_yaml_supported")}
              </ha-alert>`:""}
          <ha-automation-condition-editor
            @ui-mode-not-available=${this._handleUiModeNotAvailable}
            @value-changed=${this._handleChangeEvent}
            .yamlMode=${this._yamlMode}
            .hass=${this.hass}
            .condition=${this.condition}
          ></ha-automation-condition-editor>
        </div>
      </ha-card>
    `:k``}},{kind:"method",key:"_handleUiModeNotAvailable",value:function(e){e.stopPropagation(),this._warnings=bn(this.hass,e.detail).warnings,this._yamlMode||(this._yamlMode=!0)}},{kind:"method",key:"_handleChangeEvent",value:function(e){e.detail.yaml&&(this._warnings=void 0)}},{kind:"method",key:"_handleAction",value:function(t){switch(t.detail.index){case 0:this._switchYamlMode();break;case 1:e(this,"duplicate");break;case 2:this._onDisable();break;case 3:this._onDelete()}}},{kind:"method",key:"_onDisable",value:function(){var t;const i=!(null===(t=this.condition.enabled)||void 0===t||t),a={...this.condition,enabled:i};var n;(e(this,"value-changed",{value:a}),this._yamlMode)&&(null===(n=this._yamlEditor)||void 0===n||n.setValue(a))}},{kind:"method",key:"_onDelete",value:function(){Sa(this,{text:this.hass.localize("ui.panel.config.automation.editor.conditions.delete_confirm"),dismissText:this.hass.localize("ui.common.cancel"),confirmText:this.hass.localize("ui.common.delete"),confirm:()=>{e(this,"value-changed",{value:null})}})}},{kind:"method",key:"_switchYamlMode",value:function(){this._warnings=void 0,this._yamlMode=!this._yamlMode}},{kind:"method",key:"_testCondition",value:async function(e){const t=this.condition,i=e.target;if(!i.progress){i.progress=!0;try{const e=await xn(this.hass,{condition:t});if(this.condition!==t)return;if(!e.condition.valid)return void La(this,{title:this.hass.localize("ui.panel.config.automation.editor.conditions.invalid_condition"),text:e.condition.error});let a;try{a=await((e,t,i)=>e.callWS({type:"test_condition",condition:t,variables:i}))(this.hass,t)}catch(e){if(this.condition!==t)return;return void La(this,{title:this.hass.localize("ui.panel.config.automation.editor.conditions.test_failed"),text:e.message})}if(this.condition!==t)return;a.result?i.actionSuccess():i.actionError()}finally{i.progress=!1}}}},{kind:"get",static:!0,key:"styles",value:function(){return[Hi,i`
        .disabled {
          opacity: 0.5;
          pointer-events: none;
        }
        .card-content {
          padding-top: 16px;
          margin-top: 0;
        }
        .disabled-bar {
          background: var(--divider-color, #e0e0e0);
          text-align: center;
          border-top-right-radius: var(--ha-card-border-radius);
          border-top-left-radius: var(--ha-card-border-radius);
        }
        .card-menu {
          float: var(--float-end, right);
          z-index: 3;
          margin: 4px;
          --mdc-theme-text-primary-on-background: var(--primary-text-color);
          display: flex;
          align-items: center;
        }
        mwc-list-item[disabled] {
          --mdc-theme-text-primary-on-background: var(--disabled-text-color);
        }
      `]}}]}}),m);const $l=(e,t)=>e.callWS({type:"device_automation/action/list",device_id:t}),wl=(e,t)=>e.callWS({type:"device_automation/condition/list",device_id:t}),Cl=(e,t)=>e.callWS({type:"device_automation/trigger/list",device_id:t}),Al=["device_id","domain","entity_id","type","subtype","event","condition","platform"],Il=(e,t)=>{if(typeof e!=typeof t)return!1;for(const i in e)if(Al.includes(i)&&!Object.is(e[i],t[i]))return!1;for(const i in t)if(Al.includes(i)&&!Object.is(e[i],t[i]))return!1;return!0},El=(e,t)=>{const i=t.entity_id?e.states[t.entity_id]:void 0;return e.localize(`component.${t.domain}.device_automation.action_type.${t.type}`,"entity_name",i?Sn(i):t.entity_id||"<unknown>","subtype",t.subtype?e.localize(`component.${t.domain}.device_automation.action_subtype.${t.subtype}`)||t.subtype:"")||(t.subtype?`"${t.subtype}" ${t.type}`:t.type)},zl=(e,t)=>{const i=t.entity_id?e.states[t.entity_id]:void 0;return e.localize(`component.${t.domain}.device_automation.condition_type.${t.type}`,"entity_name",i?Sn(i):t.entity_id||"<unknown>","subtype",t.subtype?e.localize(`component.${t.domain}.device_automation.condition_subtype.${t.subtype}`)||t.subtype:"")||(t.subtype?`"${t.subtype}" ${t.type}`:t.type)},Sl=(e,t)=>{const i=t.entity_id?e.states[t.entity_id]:void 0;return e.localize(`component.${t.domain}.device_automation.trigger_type.${t.type}`,"entity_name",i?Sn(i):t.entity_id||"<unknown>","subtype",t.subtype?e.localize(`component.${t.domain}.device_automation.trigger_subtype.${t.subtype}`)||t.subtype:"")||(t.subtype?`"${t.subtype}" ${t.type}`:t.type)},Ll=(e,t)=>{var i,a,n,o;return null===(i=e.metadata)||void 0===i||!i.secondary||null!==(a=t.metadata)&&void 0!==a&&a.secondary?null!==(n=e.metadata)&&void 0!==n&&n.secondary||null===(o=t.metadata)||void 0===o||!o.secondary?0:-1:1},Tl="NO_AUTOMATION",Ol="UNKNOWN_AUTOMATION";let Pl=v(null,(function(t,a){class n extends a{constructor(e,i,a){super(),t(this),this._localizeDeviceAutomation=e,this._fetchDeviceAutomations=i,this._createNoAutomation=a}}return{F:n,d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f()],key:"label",value:void 0},{kind:"field",decorators:[f()],key:"deviceId",value:void 0},{kind:"field",decorators:[f()],key:"value",value:void 0},{kind:"field",decorators:[Vi()],key:"_automations",value:()=>[]},{kind:"field",decorators:[Vi()],key:"_renderEmpty",value:()=>!1},{kind:"get",key:"NO_AUTOMATION_TEXT",value:function(){return this.hass.localize("ui.panel.config.devices.automation.actions.no_actions")}},{kind:"get",key:"UNKNOWN_AUTOMATION_TEXT",value:function(){return this.hass.localize("ui.panel.config.devices.automation.actions.unknown_action")}},{kind:"field",key:"_localizeDeviceAutomation",value:void 0},{kind:"field",key:"_fetchDeviceAutomations",value:void 0},{kind:"field",key:"_createNoAutomation",value:void 0},{kind:"get",key:"_value",value:function(){if(!this.value)return"";if(!this._automations.length)return Tl;const e=this._automations.findIndex((e=>Il(e,this.value)));return-1===e?Ol:`${this._automations[e].device_id}_${e}`}},{kind:"method",key:"render",value:function(){if(this._renderEmpty)return k``;const e=this._value;return k`
      <ha-select
        .label=${this.label}
        .value=${e}
        @selected=${this._automationChanged}
        .disabled=${0===this._automations.length}
      >
        ${e===Tl?k`<mwc-list-item .value=${Tl}>
              ${this.NO_AUTOMATION_TEXT}
            </mwc-list-item>`:""}
        ${e===Ol?k`<mwc-list-item .value=${Ol}>
              ${this.UNKNOWN_AUTOMATION_TEXT}
            </mwc-list-item>`:""}
        ${this._automations.map(((e,t)=>k`
            <mwc-list-item .value=${`${e.device_id}_${t}`}>
              ${this._localizeDeviceAutomation(this.hass,e)}
            </mwc-list-item>
          `))}
      </ha-select>
    `}},{kind:"method",key:"updated",value:function(e){_(y(n.prototype),"updated",this).call(this,e),e.has("deviceId")&&this._updateDeviceInfo()}},{kind:"method",key:"_updateDeviceInfo",value:async function(){this._automations=this.deviceId?(await this._fetchDeviceAutomations(this.hass,this.deviceId)).sort(Ll):[],this.value&&this.value.device_id===this.deviceId||this._setValue(this._automations.length?this._automations[0]:this._createNoAutomation(this.deviceId)),this._renderEmpty=!0,await this.updateComplete,this._renderEmpty=!1}},{kind:"method",key:"_automationChanged",value:function(e){const t=e.target.value;if(!t||[Ol,Tl].includes(t))return;const[i,a]=t.split("_"),n=this._automations[a];n.device_id===i&&this._setValue(n)}},{kind:"method",key:"_setValue",value:function(t){if(this.value&&Il(t,this.value))return;const i={...t};delete i.metadata,e(this,"value-changed",{value:i})}},{kind:"get",static:!0,key:"styles",value:function(){return i`
      ha-select {
        width: 100%;
        margin-top: 4px;
      }
    `}}]}}),m);v([w("ha-device-condition-picker")],(function(e,t){return{F:class extends t{constructor(){super(zl,wl,(e=>({device_id:e||"",condition:"device",domain:"",entity_id:""}))),e(this)}},d:[{kind:"get",key:"NO_AUTOMATION_TEXT",value:function(){return this.hass.localize("ui.panel.config.devices.automation.conditions.no_conditions")}},{kind:"get",key:"UNKNOWN_AUTOMATION_TEXT",value:function(){return this.hass.localize("ui.panel.config.devices.automation.conditions.unknown_condition")}}]}}),Pl);const Ml=e=>e.sendMessagePromise({type:"config/area_registry/list"}).then((e=>e.sort(((e,t)=>Za(e.name,t.name))))),Fl=(e,t)=>e.subscribeEvents(Ea((()=>Ml(e).then((e=>t.setState(e,!0)))),500,!0),"area_registry_updated"),Dl=(e,t)=>Zi("_areaRegistry",Ml,Fl,e,t),Bl=(e,t,i)=>e.name_by_user||e.name||i&&((e,t)=>{for(const i of t||[]){const t="string"==typeof i?i:i.entity_id,a=e.states[t];if(a)return Sn(a)}})(t,i)||t.localize("ui.panel.config.devices.unnamed_device","type",t.localize(`ui.panel.config.devices.type.${e.entry_type||"device"}`)),Nl=e=>e.sendMessagePromise({type:"config/device_registry/list"}),Vl=(e,t)=>e.subscribeEvents(Ea((()=>Nl(e).then((e=>t.setState(e,!0)))),500,!0),"device_registry_updated"),jl=(e,t)=>Zi("_dr",Nl,Vl,e,t),ql=e=>e.sendMessagePromise({type:"config/entity_registry/list"}),Rl=(e,t)=>e.subscribeEvents(Ea((()=>ql(e).then((e=>t.setState(e,!0)))),500,!0),"entity_registry_updated"),Ul=(e,t)=>Zi("_entityRegistry",ql,Rl,e,t),Hl=e=>v(null,(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",key:"hassSubscribeRequiredHostProps",value:void 0},{kind:"field",key:"__unsubs",value:void 0},{kind:"method",key:"connectedCallback",value:function(){_(y(i.prototype),"connectedCallback",this).call(this),this.__checkSubscribed()}},{kind:"method",key:"disconnectedCallback",value:function(){if(_(y(i.prototype),"disconnectedCallback",this).call(this),this.__unsubs){for(;this.__unsubs.length;){const e=this.__unsubs.pop();e instanceof Promise?e.then((e=>e())):e()}this.__unsubs=void 0}}},{kind:"method",key:"updated",value:function(e){if(_(y(i.prototype),"updated",this).call(this,e),e.has("hass"))this.__checkSubscribed();else if(this.hassSubscribeRequiredHostProps)for(const t of e.keys())if(this.hassSubscribeRequiredHostProps.includes(t))return void this.__checkSubscribed()}},{kind:"method",key:"hassSubscribe",value:function(){return[]}},{kind:"method",key:"__checkSubscribed",value:function(){var e;void 0!==this.__unsubs||!this.isConnected||void 0===this.hass||null!==(e=this.hassSubscribeRequiredHostProps)&&void 0!==e&&e.some((e=>void 0===this[e]))||(this.__unsubs=this.hassSubscribe())}}]}}),e),Gl=e=>k`<mwc-list-item
  .twoline=${!!e.area}
>
  <span>${e.name}</span>
  <span slot="secondary">${e.area}</span>
</mwc-list-item>`;v([w("ha-device-picker")],(function(t,i){return{F:class extends i{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f()],key:"label",value:void 0},{kind:"field",decorators:[f()],key:"value",value:void 0},{kind:"field",decorators:[f()],key:"helper",value:void 0},{kind:"field",decorators:[f()],key:"devices",value:void 0},{kind:"field",decorators:[f()],key:"areas",value:void 0},{kind:"field",decorators:[f()],key:"entities",value:void 0},{kind:"field",decorators:[f({type:Array,attribute:"include-domains"})],key:"includeDomains",value:void 0},{kind:"field",decorators:[f({type:Array,attribute:"exclude-domains"})],key:"excludeDomains",value:void 0},{kind:"field",decorators:[f({type:Array,attribute:"include-device-classes"})],key:"includeDeviceClasses",value:void 0},{kind:"field",decorators:[f()],key:"deviceFilter",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"disabled",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"required",value:void 0},{kind:"field",decorators:[Vi()],key:"_opened",value:void 0},{kind:"field",decorators:[g("ha-combo-box",!0)],key:"comboBox",value:void 0},{kind:"field",key:"_init",value:()=>!1},{kind:"field",key:"_getDevices",value(){return Ri(((e,t,i,a,n,o,s)=>{if(!e.length)return[{id:"no_devices",area:"",name:this.hass.localize("ui.components.device-picker.no_devices")}];const r={};if(a||n||o)for(const e of i)e.device_id&&(e.device_id in r||(r[e.device_id]=[]),r[e.device_id].push(e));const l={};for(const e of t)l[e.area_id]=e;let d=e.filter((e=>e.id===this.value||!e.disabled_by));a&&(d=d.filter((e=>{const t=r[e.id];return!(!t||!t.length)&&r[e.id].some((e=>a.includes(zn(e.entity_id))))}))),n&&(d=d.filter((e=>{const t=r[e.id];return!t||!t.length||i.every((e=>!n.includes(zn(e.entity_id))))}))),o&&(d=d.filter((e=>{const t=r[e.id];return!(!t||!t.length)&&r[e.id].some((e=>{const t=this.hass.states[e.entity_id];return!!t&&(t.attributes.device_class&&o.includes(t.attributes.device_class))}))}))),s&&(d=d.filter((e=>e.id===this.value||s(e))));const c=d.map((e=>({id:e.id,name:Bl(e,this.hass,r[e.id]),area:e.area_id&&l[e.area_id]?l[e.area_id].name:this.hass.localize("ui.components.device-picker.no_area")})));return c.length?1===c.length?c:c.sort(((e,t)=>Za(e.name||"",t.name||""))):[{id:"no_devices",area:"",name:this.hass.localize("ui.components.device-picker.no_match")}]}))}},{kind:"method",key:"open",value:function(){var e;null===(e=this.comboBox)||void 0===e||e.open()}},{kind:"method",key:"focus",value:function(){var e;null===(e=this.comboBox)||void 0===e||e.focus()}},{kind:"method",key:"hassSubscribe",value:function(){return[jl(this.hass.connection,(e=>{this.devices=e})),Dl(this.hass.connection,(e=>{this.areas=e})),Ul(this.hass.connection,(e=>{this.entities=e}))]}},{kind:"method",key:"updated",value:function(e){(!this._init&&this.devices&&this.areas&&this.entities||e.has("_opened")&&this._opened)&&(this._init=!0,this.comboBox.items=this._getDevices(this.devices,this.areas,this.entities,this.includeDomains,this.excludeDomains,this.includeDeviceClasses,this.deviceFilter))}},{kind:"method",key:"render",value:function(){return this.devices&&this.areas&&this.entities?k`
      <ha-combo-box
        .hass=${this.hass}
        .label=${void 0===this.label&&this.hass?this.hass.localize("ui.components.device-picker.device"):this.label}
        .value=${this._value}
        .helper=${this.helper}
        .renderer=${Gl}
        .disabled=${this.disabled}
        .required=${this.required}
        item-value-path="id"
        item-label-path="name"
        @opened-changed=${this._openedChanged}
        @value-changed=${this._deviceChanged}
      ></ha-combo-box>
    `:k``}},{kind:"get",key:"_value",value:function(){return this.value||""}},{kind:"method",key:"_deviceChanged",value:function(e){e.stopPropagation();let t=e.detail.value;"no_devices"===t&&(t=""),t!==this._value&&this._setValue(t)}},{kind:"method",key:"_openedChanged",value:function(e){this._opened=e.detail.value}},{kind:"method",key:"_setValue",value:function(t){this.value=t,setTimeout((()=>{e(this,"value-changed",{value:t}),e(this,"change")}),0)}}]}}),Hl(m));let Wl=v([w("ha-automation-condition-device")],(function(t,a){class n extends a{constructor(...e){super(...e),t(this)}}return{F:n,d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f({type:Object})],key:"condition",value:void 0},{kind:"field",decorators:[Vi()],key:"_deviceId",value:void 0},{kind:"field",decorators:[Vi()],key:"_capabilities",value:void 0},{kind:"field",key:"_origCondition",value:void 0},{kind:"get",static:!0,key:"defaultConfig",value:function(){return{device_id:"",domain:"",entity_id:""}}},{kind:"field",key:"_extraFieldsData",value:()=>Ri(((e,t)=>{const i={};return t.extra_fields.forEach((t=>{void 0!==e[t.name]&&(i[t.name]=e[t.name])})),i}))},{kind:"method",key:"render",value:function(){var e;const t=this._deviceId||this.condition.device_id;return k`
      <ha-device-picker
        .value=${t}
        @value-changed=${this._devicePicked}
        .hass=${this.hass}
        label=${this.hass.localize("ui.panel.config.automation.editor.conditions.type.device.label")}
      ></ha-device-picker>
      <ha-device-condition-picker
        .value=${this.condition}
        .deviceId=${t}
        @value-changed=${this._deviceConditionPicked}
        .hass=${this.hass}
        label=${this.hass.localize("ui.panel.config.automation.editor.conditions.type.device.condition")}
      ></ha-device-condition-picker>
      ${null!==(e=this._capabilities)&&void 0!==e&&e.extra_fields?k`
            <ha-form
              .hass=${this.hass}
              .data=${this._extraFieldsData(this.condition,this._capabilities)}
              .schema=${this._capabilities.extra_fields}
              .computeLabel=${this._extraFieldsComputeLabelCallback(this.hass.localize)}
              @value-changed=${this._extraFieldsChanged}
            ></ha-form>
          `:""}
    `}},{kind:"method",key:"firstUpdated",value:function(){this._capabilities||this._getCapabilities(),this.condition&&(this._origCondition=this.condition)}},{kind:"method",key:"updated",value:function(e){const t=e.get("condition");t&&!Il(t,this.condition)&&this._getCapabilities()}},{kind:"method",key:"_getCapabilities",value:async function(){const e=this.condition;this._capabilities=e.domain?await((e,t)=>e.callWS({type:"device_automation/condition/capabilities",condition:t}))(this.hass,e):void 0}},{kind:"method",key:"_devicePicked",value:function(t){t.stopPropagation(),this._deviceId=t.target.value,void 0===this._deviceId&&e(this,"value-changed",{value:{...n.defaultConfig,condition:"device"}})}},{kind:"method",key:"_deviceConditionPicked",value:function(t){t.stopPropagation();let i=t.detail.value;this._origCondition&&Il(this._origCondition,i)&&(i=this._origCondition),e(this,"value-changed",{value:i})}},{kind:"method",key:"_extraFieldsChanged",value:function(t){t.stopPropagation(),e(this,"value-changed",{value:{...this.condition,...t.detail.value}})}},{kind:"method",key:"_extraFieldsComputeLabelCallback",value:function(e){return t=>e(`ui.panel.config.automation.editor.conditions.type.device.extra_fields.${t.name}`)||t.name}},{kind:"field",static:!0,key:"styles",value:()=>i`
    ha-device-picker {
      display: block;
      margin-bottom: 24px;
    }
  `}]}}),m);v([w("ha-automation-condition")],(function(t,a){return{F:class extends a{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f()],key:"conditions",value:void 0},{kind:"method",key:"updated",value:function(t){if(!t.has("conditions"))return;let i;Array.isArray(this.conditions)||(i=[this.conditions]),(i||this.conditions).forEach(((e,t)=>{"string"==typeof e&&(i=i||[...this.conditions],i[t]={condition:"template",value_template:e})})),i&&e(this,"value-changed",{value:i})}},{kind:"method",key:"render",value:function(){return Array.isArray(this.conditions)?k`
      ${this.conditions.map(((e,t)=>k`
          <ha-automation-condition-row
            .index=${t}
            .condition=${e}
            @duplicate=${this._duplicateCondition}
            @value-changed=${this._conditionChanged}
            .hass=${this.hass}
          ></ha-automation-condition-row>
        `))}
      <ha-card outlined>
        <div class="card-actions add-card">
          <mwc-button @click=${this._addCondition}>
            ${this.hass.localize("ui.panel.config.automation.editor.conditions.add")}
          </mwc-button>
        </div>
      </ha-card>
    `:k``}},{kind:"method",key:"_addCondition",value:function(){const t=this.conditions.concat({condition:"device",...Wl.defaultConfig});e(this,"value-changed",{value:t})}},{kind:"method",key:"_conditionChanged",value:function(t){t.stopPropagation();const i=[...this.conditions],a=t.detail.value,n=t.target.index;null===a?i.splice(n,1):i[n]=a,e(this,"value-changed",{value:i})}},{kind:"method",key:"_duplicateCondition",value:function(t){t.stopPropagation();const i=t.target.index;e(this,"value-changed",{value:this.conditions.concat(Ya(this.conditions[i]))})}},{kind:"get",static:!0,key:"styles",value:function(){return i`
      ha-automation-condition-row,
      ha-card {
        display: block;
        margin-top: 16px;
      }
      .add-card mwc-button {
        display: block;
        text-align: center;
      }
    `}}]}}),m);const Kl=e=>{if(void 0===e)return;if("object"!=typeof e){if("string"==typeof e||isNaN(e)){const t=(null==e?void 0:e.toString().split(":"))||[];return{hours:Number(t[0])||0,minutes:Number(t[1])||0,seconds:Number(t[2])||0,milliseconds:Number(t[3])||0}}return{seconds:e}}if(!("days"in e))return e;const{days:t,minutes:i,seconds:a,milliseconds:n}=e;let o=e.hours||0;return o=(o||0)+24*(t||0),{hours:o,minutes:i,seconds:a,milliseconds:n}},Yl=fn({platform:_n(),id:gn(_n()),enabled:gn(pn())}),Zl=fn({days:gn(mn()),hours:gn(mn()),minutes:gn(mn()),seconds:gn(mn())}),Ql=fn({condition:vn("state"),entity_id:gn(_n()),attribute:gn(_n()),state:gn(_n()),for:gn(kn([_n(),Zl]))});let Xl=v([w("ha-automation-condition-state")],(function(t,i){return{F:class extends i{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f({attribute:!1})],key:"condition",value:void 0},{kind:"get",static:!0,key:"defaultConfig",value:function(){return{entity_id:"",state:""}}},{kind:"field",key:"_schema",value:()=>Ri((e=>[{name:"entity_id",required:!0,selector:{entity:{}}},{name:"attribute",selector:{attribute:{entity_id:e}}},{name:"state",selector:{text:{}}},{name:"for",selector:{duration:{}}}]))},{kind:"method",key:"shouldUpdate",value:function(t){if(t.has("condition"))try{sn(this.condition,Ql)}catch(t){return e(this,"ui-mode-not-available",t),!1}return!0}},{kind:"method",key:"render",value:function(){const e=Kl(this.condition.for),t={...this.condition,for:e},i=this._schema(this.condition.entity_id);return k`
      <ha-form
        .hass=${this.hass}
        .data=${t}
        .schema=${i}
        @value-changed=${this._valueChanged}
        .computeLabel=${this._computeLabelCallback}
      ></ha-form>
    `}},{kind:"method",key:"_valueChanged",value:function(t){t.stopPropagation();const i=t.detail.value;Object.keys(i).forEach((e=>void 0===i[e]||""===i[e]?delete i[e]:{})),e(this,"value-changed",{value:i})}},{kind:"field",key:"_computeLabelCallback",value(){return e=>{switch(e.name){case"entity_id":return this.hass.localize("ui.components.entity.entity-picker.entity");case"attribute":return this.hass.localize("ui.components.entity.entity-attribute-picker.attribute");case"for":return this.hass.localize("ui.panel.config.automation.editor.triggers.type.state.for");default:return this.hass.localize(`ui.panel.config.automation.editor.conditions.type.state.${e.name}`)}}}}]}}),m),Jl=v([w("ha-automation-condition-logical")],(function(t,i){return{F:class extends i{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f({attribute:!1})],key:"condition",value:void 0},{kind:"get",static:!0,key:"defaultConfig",value:function(){return{conditions:[{condition:"state",...Xl.defaultConfig}]}}},{kind:"method",key:"render",value:function(){return k`
      <ha-automation-condition
        .conditions=${this.condition.conditions||[]}
        @value-changed=${this._valueChanged}
        .hass=${this.hass}
      ></ha-automation-condition>
    `}},{kind:"method",key:"_valueChanged",value:function(t){t.stopPropagation(),e(this,"value-changed",{value:{...this.condition,conditions:t.detail.value}})}}]}}),m);v([w("ha-automation-condition-and")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[]}}),Jl),v([w("ha-automation-condition-not")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[]}}),Jl),v([w("ha-automation-condition-numeric_state")],(function(t,i){return{F:class extends i{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f({attribute:!1})],key:"condition",value:void 0},{kind:"get",static:!0,key:"defaultConfig",value:function(){return{entity_id:""}}},{kind:"field",key:"_schema",value:()=>Ri((e=>[{name:"entity_id",required:!0,selector:{entity:{}}},{name:"attribute",selector:{attribute:{entity_id:e}}},{name:"above",selector:{text:{}}},{name:"below",selector:{text:{}}},{name:"value_template",selector:{text:{multiline:!0}}}]))},{kind:"method",key:"render",value:function(){const e=this._schema(this.condition.entity_id);return k`
      <ha-form
        .hass=${this.hass}
        .data=${this.condition}
        .schema=${e}
        @value-changed=${this._valueChanged}
        .computeLabel=${this._computeLabelCallback}
      ></ha-form>
    `}},{kind:"method",key:"_valueChanged",value:function(t){t.stopPropagation();const i=t.detail.value;e(this,"value-changed",{value:i})}},{kind:"field",key:"_computeLabelCallback",value(){return e=>{switch(e.name){case"entity_id":return this.hass.localize("ui.components.entity.entity-picker.entity");case"attribute":return this.hass.localize("ui.components.entity.entity-attribute-picker.attribute");default:return this.hass.localize(`ui.panel.config.automation.editor.triggers.type.numeric_state.${e.name}`)}}}}]}}),m),v([w("ha-automation-condition-or")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[]}}),Jl),v([w("ha-automation-condition-sun")],(function(t,i){return{F:class extends i{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f({attribute:!1})],key:"condition",value:void 0},{kind:"get",static:!0,key:"defaultConfig",value:function(){return{}}},{kind:"field",key:"_schema",value:()=>Ri((e=>[{name:"before",type:"select",required:!0,options:[["sunrise",e("ui.panel.config.automation.editor.conditions.type.sun.sunrise")],["sunset",e("ui.panel.config.automation.editor.conditions.type.sun.sunset")]]},{name:"before_offset",selector:{text:{}}},{name:"after",type:"select",required:!0,options:[["sunrise",e("ui.panel.config.automation.editor.conditions.type.sun.sunrise")],["sunset",e("ui.panel.config.automation.editor.conditions.type.sun.sunset")]]},{name:"after_offset",selector:{text:{}}}]))},{kind:"method",key:"render",value:function(){const e=this._schema(this.hass.localize);return k`
      <ha-form
        .schema=${e}
        .data=${this.condition}
        .hass=${this.hass}
        .computeLabel=${this._computeLabelCallback}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `}},{kind:"method",key:"_valueChanged",value:function(t){t.stopPropagation();const i=t.detail.value;e(this,"value-changed",{value:i})}},{kind:"field",key:"_computeLabelCallback",value(){return e=>this.hass.localize(`ui.panel.config.automation.editor.conditions.type.sun.${e.name}`)}}]}}),m);const ed={fromAttribute:e=>null!==e&&(""===e||e),toAttribute:e=>"boolean"==typeof e?e?"":null:e};class td extends Oa{constructor(){super(...arguments),this.rows=2,this.cols=20,this.charCounter=!1}render(){const e=this.charCounter&&-1!==this.maxLength,t=e&&"internal"===this.charCounter,i=e&&!t,a=!!this.helper||!!this.validationMessage||i,n={"mdc-text-field--disabled":this.disabled,"mdc-text-field--no-label":!this.label,"mdc-text-field--filled":!this.outlined,"mdc-text-field--outlined":this.outlined,"mdc-text-field--end-aligned":this.endAligned,"mdc-text-field--with-internal-counter":t};return k`
      <label class="mdc-text-field mdc-text-field--textarea ${Xi(n)}">
        ${this.renderRipple()}
        ${this.outlined?this.renderOutline():this.renderLabel()}
        ${this.renderInput()}
        ${this.renderCharCounter(t)}
        ${this.renderLineRipple()}
      </label>
      ${this.renderHelperText(a,i)}
    `}renderInput(){const e=this.label?"label":void 0,t=-1===this.minLength?void 0:this.minLength,i=-1===this.maxLength?void 0:this.maxLength,a=this.autocapitalize?this.autocapitalize:void 0;return k`
      <textarea
          aria-labelledby=${qi(e)}
          class="mdc-text-field__input"
          .value="${Pa(this.value)}"
          rows="${this.rows}"
          cols="${this.cols}"
          ?disabled="${this.disabled}"
          placeholder="${this.placeholder}"
          ?required="${this.required}"
          ?readonly="${this.readOnly}"
          minlength="${qi(t)}"
          maxlength="${qi(i)}"
          name="${qi(""===this.name?void 0:this.name)}"
          inputmode="${qi(this.inputMode)}"
          autocapitalize="${qi(a)}"
          @input="${this.handleInputChange}"
          @blur="${this.onInputBlur}">
      </textarea>`}}Qi([g("textarea")],td.prototype,"formElement",void 0),Qi([f({type:Number})],td.prototype,"rows",void 0),Qi([f({type:Number})],td.prototype,"cols",void 0),Qi([f({converter:ed})],td.prototype,"charCounter",void 0);const id=i`.mdc-text-field{height:100%}.mdc-text-field__input{resize:none}`;v([w("ha-textarea")],(function(e,t){class a extends t{constructor(...t){super(...t),e(this)}}return{F:a,d:[{kind:"field",decorators:[f({type:Boolean,reflect:!0})],key:"autogrow",value:()=>!1},{kind:"method",key:"updated",value:function(e){_(y(a.prototype),"updated",this).call(this,e),this.autogrow&&e.has("value")&&(this.mdcRoot.dataset.value=this.value+'=​"')}},{kind:"field",static:!0,key:"styles",value:()=>[Ma,id,i`
      :host([autogrow]) .mdc-text-field {
        position: relative;
        min-height: 74px;
        min-width: 178px;
        max-height: 200px;
      }
      :host([autogrow]) .mdc-text-field:after {
        content: attr(data-value);
        margin-top: 23px;
        margin-bottom: 9px;
        line-height: 1.5rem;
        min-height: 42px;
        padding: 0px 32px 0 16px;
        letter-spacing: var(
          --mdc-typography-subtitle1-letter-spacing,
          0.009375em
        );
        visibility: hidden;
        white-space: pre-wrap;
      }
      :host([autogrow]) .mdc-text-field__input {
        position: absolute;
        height: calc(100% - 32px);
      }
      :host([autogrow]) .mdc-text-field.mdc-text-field--no-label:after {
        margin-top: 16px;
        margin-bottom: 16px;
      }
    `]}]}}),td),v([w("ha-automation-condition-template")],(function(t,i){return{F:class extends i{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f({attribute:!1})],key:"condition",value:void 0},{kind:"get",static:!0,key:"defaultConfig",value:function(){return{value_template:""}}},{kind:"method",key:"render",value:function(){const{value_template:e}=this.condition;return k`
      <p>
        ${this.hass.localize("ui.panel.config.automation.editor.conditions.type.template.value_template")}
        *
      </p>
      <ha-code-editor
        .name=${"value_template"}
        mode="jinja2"
        .hass=${this.hass}
        .value=${e}
        autocomplete-entities
        @value-changed=${this._valueChanged}
        dir="ltr"
      ></ha-code-editor>
    `}},{kind:"method",key:"_valueChanged",value:function(t){((t,i)=>{var a,n,o;i.stopPropagation();const s=null===(a=i.currentTarget)||void 0===a?void 0:a.name;if(!s)return;const r=(null===(n=i.detail)||void 0===n?void 0:n.value)||(null===(o=i.currentTarget)||void 0===o?void 0:o.value);if((t.condition[s]||"")===r)return;let l;r?l={...t.condition,[s]:r}:(l={...t.condition},delete l[s]),e(t,"value-changed",{value:l})})(this,t)}}]}}),m);const ad={mon:1,tue:2,wed:3,thu:4,fri:5,sat:6,sun:7};v([w("ha-automation-condition-time")],(function(t,i){return{F:class extends i{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f({attribute:!1})],key:"condition",value:void 0},{kind:"field",decorators:[Vi()],key:"_inputModeBefore",value:void 0},{kind:"field",decorators:[Vi()],key:"_inputModeAfter",value:void 0},{kind:"get",static:!0,key:"defaultConfig",value:function(){return{}}},{kind:"field",key:"_schema",value:()=>Ri(((e,t,i)=>{const a=t?{name:"after",selector:{entity:{domain:"input_datetime"}}}:{name:"after",selector:{time:{}}},n=i?{name:"before",selector:{entity:{domain:"input_datetime"}}}:{name:"before",selector:{time:{}}};return[{name:"mode_after",type:"select",required:!0,options:[["value",e("ui.panel.config.automation.editor.conditions.type.time.type_value")],["input",e("ui.panel.config.automation.editor.conditions.type.time.type_input")]]},a,{name:"mode_before",type:"select",required:!0,options:[["value",e("ui.panel.config.automation.editor.conditions.type.time.type_value")],["input",e("ui.panel.config.automation.editor.conditions.type.time.type_input")]]},n,{type:"multi_select",name:"weekday",options:Object.keys(ad).map((t=>[t,e(`ui.panel.config.automation.editor.conditions.type.time.weekdays.${t}`)]))}]}))},{kind:"method",key:"render",value:function(){var e,t,i,a;const n=null!==(e=this._inputModeBefore)&&void 0!==e?e:null===(t=this.condition.before)||void 0===t?void 0:t.startsWith("input_datetime."),o=null!==(i=this._inputModeAfter)&&void 0!==i?i:null===(a=this.condition.after)||void 0===a?void 0:a.startsWith("input_datetime."),s=this._schema(this.hass.localize,o,n),r={mode_before:n?"input":"value",mode_after:o?"input":"value",...this.condition};return k`
      <ha-form
        .hass=${this.hass}
        .data=${r}
        .schema=${s}
        @value-changed=${this._valueChanged}
        .computeLabel=${this._computeLabelCallback}
      ></ha-form>
    `}},{kind:"method",key:"_valueChanged",value:function(t){t.stopPropagation();const i=t.detail.value;this._inputModeAfter="input"===i.mode_after,this._inputModeBefore="input"===i.mode_before,delete i.mode_after,delete i.mode_before,Object.keys(i).forEach((e=>void 0===i[e]||""===i[e]?delete i[e]:{})),e(this,"value-changed",{value:i})}},{kind:"field",key:"_computeLabelCallback",value(){return e=>this.hass.localize(`ui.panel.config.automation.editor.conditions.type.time.${e.name}`)}}]}}),m),v([w("ha-automation-condition-trigger")],(function(t,i){class a extends i{constructor(...e){super(...e),t(this)}}return{F:a,d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f({attribute:!1})],key:"condition",value:void 0},{kind:"field",decorators:[Vi()],key:"_triggers",value:()=>[]},{kind:"field",key:"_unsub",value:void 0},{kind:"get",static:!0,key:"defaultConfig",value:function(){return{id:""}}},{kind:"method",key:"connectedCallback",value:function(){_(y(a.prototype),"connectedCallback",this).call(this);const t={callback:e=>this._automationUpdated(e)};e(this,"subscribe-automation-config",t),this._unsub=t.unsub}},{kind:"method",key:"disconnectedCallback",value:function(){_(y(a.prototype),"disconnectedCallback",this).call(this),this._unsub&&this._unsub()}},{kind:"method",key:"render",value:function(){const{id:e}=this.condition;return this._triggers.length?k`<ha-select
      .label=${this.hass.localize("ui.panel.config.automation.editor.conditions.type.trigger.id")}
      .value=${e}
      @selected=${this._triggerPicked}
    >
      ${this._triggers.map((e=>k`
            <mwc-list-item .value=${e.id}> ${e.id} </mwc-list-item>
          `))}
    </ha-select>`:this.hass.localize("ui.panel.config.automation.editor.conditions.type.trigger.no_triggers")}},{kind:"method",key:"_automationUpdated",value:function(e){this._triggers=null!=e&&e.trigger?ws(e.trigger).filter((e=>e.id)):[]}},{kind:"method",key:"_triggerPicked",value:function(t){if(t.stopPropagation(),!t.target.value)return;const i=t.target.value;this.condition.id!==i&&e(this,"value-changed",{value:{...this.condition,id:i}})}}]}}),m);const nd=e=>"latitude"in e.attributes&&"longitude"in e.attributes;function od(e){return nd(e)&&"zone"!==as(e)}const sd=["zone"];v([w("ha-automation-condition-zone")],(function(t,a){return{F:class extends a{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f()],key:"condition",value:void 0},{kind:"get",static:!0,key:"defaultConfig",value:function(){return{entity_id:"",zone:""}}},{kind:"method",key:"render",value:function(){const{entity_id:e,zone:t}=this.condition;return k`
      <ha-entity-picker
        .label=${this.hass.localize("ui.panel.config.automation.editor.conditions.type.zone.entity")}
        .value=${e}
        @value-changed=${this._entityPicked}
        .hass=${this.hass}
        allow-custom-entity
        .entityFilter=${od}
      ></ha-entity-picker>
      <ha-entity-picker
        .label=${this.hass.localize("ui.panel.config.automation.editor.conditions.type.zone.zone")}
        .value=${t}
        @value-changed=${this._zonePicked}
        .hass=${this.hass}
        allow-custom-entity
        .includeDomains=${sd}
      ></ha-entity-picker>
      <label id="eventlabel">
        ${this.hass.localize("ui.panel.config.automation.editor.conditions.type.zone.event")}
      </label>
    `}},{kind:"method",key:"_entityPicked",value:function(t){t.stopPropagation(),e(this,"value-changed",{value:{...this.condition,entity_id:t.detail.value}})}},{kind:"method",key:"_zonePicked",value:function(t){t.stopPropagation(),e(this,"value-changed",{value:{...this.condition,zone:t.detail.value}})}},{kind:"field",static:!0,key:"styles",value:()=>i`
    ha-entity-picker {
      display: block;
      margin-bottom: 24px;
    }
  `}]}}),m);const rd=["device","and","or","not","state","numeric_state","sun","template","time","trigger","zone"];v([w("ha-automation-condition-editor")],(function(t,a){return{F:class extends a{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f()],key:"condition",value:void 0},{kind:"field",decorators:[f()],key:"yamlMode",value:()=>!1},{kind:"field",key:"_processedCondition",value:()=>Ri((e=>(e=>{if("condition"in e&&Array.isArray(e.condition))return{condition:"and",conditions:e.condition};for(const t of["and","or","not"])if(t in e)return{condition:t,conditions:e[t]};return e})(e)))},{kind:"field",key:"_processedTypes",value:()=>Ri((e=>rd.map((t=>[t,e(`ui.panel.config.automation.editor.conditions.type.${t}.label`)])).sort(((e,t)=>Za(e[1],t[1])))))},{kind:"method",key:"render",value:function(){const e=this._processedCondition(this.condition),t=rd.indexOf(e.condition),i=this.yamlMode||-1===t;return k`
      ${i?k`
            ${-1===t?k`
                  ${this.hass.localize("ui.panel.config.automation.editor.conditions.unsupported_condition","condition",e.condition)}
                `:""}
            <h2>
              ${this.hass.localize("ui.panel.config.automation.editor.edit_yaml")}
            </h2>
            <ha-yaml-editor
              .hass=${this.hass}
              .defaultValue=${this.condition}
              @value-changed=${this._onYamlChange}
            ></ha-yaml-editor>
          `:k`
            <ha-select
              .label=${this.hass.localize("ui.panel.config.automation.editor.conditions.type_select")}
              .value=${e.condition}
              naturalMenuWidth
              @selected=${this._typeChanged}
            >
              ${this._processedTypes(this.hass.localize).map((([e,t])=>k`
                  <mwc-list-item .value=${e}>${t}</mwc-list-item>
                `))}
            </ha-select>

            <div>
              ${za(`ha-automation-condition-${e.condition}`,{hass:this.hass,condition:e})}
            </div>
          `}
    `}},{kind:"method",key:"_typeChanged",value:function(t){const i=t.target.value;if(!i)return;const a=customElements.get(`ha-automation-condition-${i}`);i!==this._processedCondition(this.condition).condition&&e(this,"value-changed",{value:{condition:i,...a.defaultConfig}})}},{kind:"method",key:"_onYamlChange",value:function(t){t.stopPropagation(),t.detail.isValid&&e(this,"value-changed",{value:t.detail.value,yaml:!0})}},{kind:"field",static:!0,key:"styles",value:()=>[Hi,i`
      ha-select {
        margin-bottom: 24px;
      }
    `]}]}}),m),v([w("ha-automation-action-condition")],(function(t,i){return{F:class extends i{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f()],key:"action",value:void 0},{kind:"get",static:!0,key:"defaultConfig",value:function(){return{condition:"state"}}},{kind:"method",key:"render",value:function(){return k`
      <ha-automation-condition-editor
        .condition=${this.action}
        .hass=${this.hass}
        @value-changed=${this._conditionChanged}
      ></ha-automation-condition-editor>
    `}},{kind:"method",key:"_conditionChanged",value:function(t){t.stopPropagation(),e(this,"value-changed",{value:t.detail.value})}}]}}),m);const ld=new RegExp("{%|{{"),dd=e=>{if(!e)return!1;if("string"==typeof e)return(e=>ld.test(e))(e);if("object"==typeof e){return(Array.isArray(e)?e:Object.values(e)).some((e=>e&&dd(e)))}return!1};v([w("ha-automation-action-delay")],(function(t,i){return{F:class extends i{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f()],key:"action",value:void 0},{kind:"field",decorators:[f()],key:"_timeData",value:void 0},{kind:"get",static:!0,key:"defaultConfig",value:function(){return{delay:""}}},{kind:"method",key:"willUpdate",value:function(t){t.has("action")&&(this.action&&dd(this.action)?e(this,"ui-mode-not-available",Error(this.hass.localize("ui.errors.config.no_template_editor_support"))):this._timeData=Kl(this.action.delay))}},{kind:"method",key:"render",value:function(){return k`<ha-duration-input
      .label=${this.hass.localize("ui.panel.config.automation.editor.actions.type.delay.delay")}
      .data=${this._timeData}
      enableMillisecond
      @value-changed=${this._valueChanged}
    ></ha-duration-input>`}},{kind:"method",key:"_valueChanged",value:function(t){t.stopPropagation();const i=t.detail.value;i&&e(this,"value-changed",{value:{...this.action,delay:i}})}}]}}),m),v([w("ha-device-action-picker")],(function(e,t){return{F:class extends t{constructor(){super(El,$l,(e=>({device_id:e||"",domain:"",entity_id:""}))),e(this)}},d:[{kind:"get",key:"NO_AUTOMATION_TEXT",value:function(){return this.hass.localize("ui.panel.config.devices.automation.actions.no_actions")}},{kind:"get",key:"UNKNOWN_AUTOMATION_TEXT",value:function(){return this.hass.localize("ui.panel.config.devices.automation.actions.unknown_action")}}]}}),Pl);let cd=v([w("ha-automation-action-device_id")],(function(t,a){class n extends a{constructor(...e){super(...e),t(this)}}return{F:n,d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f({type:Object})],key:"action",value:void 0},{kind:"field",decorators:[Vi()],key:"_deviceId",value:void 0},{kind:"field",decorators:[Vi()],key:"_capabilities",value:void 0},{kind:"field",key:"_origAction",value:void 0},{kind:"get",static:!0,key:"defaultConfig",value:function(){return{device_id:"",domain:"",entity_id:""}}},{kind:"field",key:"_extraFieldsData",value:()=>Ri(((e,t)=>{const i={};return t.extra_fields.forEach((t=>{void 0!==e[t.name]&&(i[t.name]=e[t.name])})),i}))},{kind:"method",key:"render",value:function(){var e;const t=this._deviceId||this.action.device_id;return k`
      <ha-device-picker
        .value=${t}
        @value-changed=${this._devicePicked}
        .hass=${this.hass}
        label=${this.hass.localize("ui.panel.config.automation.editor.actions.type.device_id.label")}
      ></ha-device-picker>
      <ha-device-action-picker
        .value=${this.action}
        .deviceId=${t}
        @value-changed=${this._deviceActionPicked}
        .hass=${this.hass}
        label=${this.hass.localize("ui.panel.config.automation.editor.actions.type.device_id.action")}
      ></ha-device-action-picker>
      ${null!==(e=this._capabilities)&&void 0!==e&&e.extra_fields?k`
            <ha-form
              .hass=${this.hass}
              .data=${this._extraFieldsData(this.action,this._capabilities)}
              .schema=${this._capabilities.extra_fields}
              .computeLabel=${this._extraFieldsComputeLabelCallback(this.hass.localize)}
              @value-changed=${this._extraFieldsChanged}
            ></ha-form>
          `:""}
    `}},{kind:"method",key:"firstUpdated",value:function(){this._capabilities||this._getCapabilities(),this.action&&(this._origAction=this.action)}},{kind:"method",key:"updated",value:function(e){const t=e.get("action");t&&!Il(t,this.action)&&(this._deviceId=void 0,this._getCapabilities())}},{kind:"method",key:"_getCapabilities",value:async function(){var e,t;this._capabilities=this.action.domain?await(e=this.hass,t=this.action,e.callWS({type:"device_automation/action/capabilities",action:t})):void 0}},{kind:"method",key:"_devicePicked",value:function(t){t.stopPropagation(),this._deviceId=t.target.value,void 0===this._deviceId&&e(this,"value-changed",{value:n.defaultConfig})}},{kind:"method",key:"_deviceActionPicked",value:function(t){t.stopPropagation();let i=t.detail.value;this._origAction&&Il(this._origAction,i)&&(i=this._origAction),e(this,"value-changed",{value:i})}},{kind:"method",key:"_extraFieldsChanged",value:function(t){t.stopPropagation(),e(this,"value-changed",{value:{...this.action,...t.detail.value}})}},{kind:"method",key:"_extraFieldsComputeLabelCallback",value:function(e){return t=>e(`ui.panel.config.automation.editor.actions.type.device_id.extra_fields.${t.name}`)||t.name}},{kind:"field",static:!0,key:"styles",value:()=>i`
    ha-device-picker {
      display: block;
      margin-bottom: 16px;
    }
    ha-device-action-picker {
      display: block;
    }
  `}]}}),m);const ud=(e,t,i)=>e(`component.${t}.title`)||(null==i?void 0:i.name)||t,hd=e=>k`<mwc-list-item twoline>
  <span>${e.name}</span>
  <span slot="secondary"
    >${e.name===e.service?"":e.service}</span
  >
</mwc-list-item>`;let pd=v(null,(function(t,i){return{F:class extends i{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f()],key:"value",value:void 0},{kind:"field",decorators:[Vi()],key:"_filter",value:void 0},{kind:"method",key:"render",value:function(){return k`
      <ha-combo-box
        .hass=${this.hass}
        .label=${this.hass.localize("ui.components.service-picker.service")}
        .filteredItems=${this._filteredServices(this.hass.localize,this.hass.services,this._filter)}
        .value=${this.value}
        .renderer=${hd}
        item-value-path="service"
        item-label-path="name"
        allow-custom-value
        @filter-changed=${this._filterChanged}
        @value-changed=${this._valueChanged}
      ></ha-combo-box>
    `}},{kind:"field",key:"_services",value:()=>Ri(((e,t)=>{if(!t)return[];const i=[];return Object.keys(t).sort().forEach((a=>{const n=Object.keys(t[a]).sort();for(const o of n)i.push({service:`${a}.${o}`,name:`${ud(e,a)}: ${t[a][o].name||o}`})})),i}))},{kind:"field",key:"_filteredServices",value(){return Ri(((e,t,i)=>{if(!t)return[];const a=this._services(e,t);return i?a.filter((e=>{var t;return e.service.toLowerCase().includes(i)||(null===(t=e.name)||void 0===t?void 0:t.toLowerCase().includes(i))})):a}))}},{kind:"method",key:"_filterChanged",value:function(e){this._filter=e.detail.value.toLowerCase()}},{kind:"method",key:"_valueChanged",value:function(t){this.value=t.detail.value,e(this,"change"),e(this,"value-changed",{value:this.value})}}]}}),m);customElements.define("ha-service-picker",pd),v([w("ha-automation-action-event")],(function(t,a){return{F:class extends a{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f()],key:"action",value:void 0},{kind:"field",decorators:[g("ha-yaml-editor",!0)],key:"_yamlEditor",value:void 0},{kind:"field",key:"_actionData",value:void 0},{kind:"get",static:!0,key:"defaultConfig",value:function(){return{event:"",event_data:{}}}},{kind:"method",key:"updated",value:function(e){e.has("action")&&(this._actionData&&this._actionData!==this.action.event_data&&this._yamlEditor&&this._yamlEditor.setValue(this.action.event_data),this._actionData=this.action.event_data)}},{kind:"method",key:"render",value:function(){const{event:e,event_data:t}=this.action;return k`
      <ha-textfield
        .label=${this.hass.localize("ui.panel.config.automation.editor.actions.type.event.event")}
        .value=${e}
        @change=${this._eventChanged}
      ></ha-textfield>
      <ha-yaml-editor
        .hass=${this.hass}
        .label=${this.hass.localize("ui.panel.config.automation.editor.actions.type.event.event_data")}
        .name=${"event_data"}
        .defaultValue=${t}
        @value-changed=${this._dataChanged}
      ></ha-yaml-editor>
    `}},{kind:"method",key:"_dataChanged",value:function(e){e.stopPropagation(),e.detail.isValid&&(this._actionData=e.detail.value,qd(this,e))}},{kind:"method",key:"_eventChanged",value:function(t){t.stopPropagation(),e(this,"value-changed",{value:{...this.action,event:t.target.value}})}},{kind:"get",static:!0,key:"styles",value:function(){return i`
      ha-textfield {
        display: block;
      }
    `}}]}}),m),v([w("ha-automation-action-if")],(function(t,i){return{F:class extends i{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f({attribute:!1})],key:"action",value:void 0},{kind:"get",static:!0,key:"defaultConfig",value:function(){return{if:[{...Wl.defaultConfig,condition:"device"}],then:[cd.defaultConfig]}}},{kind:"method",key:"render",value:function(){const e=this.action;return k`
      <h3>
        ${this.hass.localize("ui.panel.config.automation.editor.actions.type.if.if")}*:
      </h3>
      <ha-automation-condition
        .conditions=${e.if}
        .hass=${this.hass}
        @value-changed=${this._ifChanged}
      ></ha-automation-condition>

      <h3>
        ${this.hass.localize("ui.panel.config.automation.editor.actions.type.if.then")}*:
      </h3>
      <ha-automation-action
        .actions=${e.then}
        @value-changed=${this._thenChanged}
        .hass=${this.hass}
      ></ha-automation-action>

      <h3>
        ${this.hass.localize("ui.panel.config.automation.editor.actions.type.if.else")}:
      </h3>
      <ha-automation-action
        .actions=${e.else||[]}
        @value-changed=${this._elseChanged}
        .hass=${this.hass}
      ></ha-automation-action>
    `}},{kind:"method",key:"_ifChanged",value:function(t){t.stopPropagation();const i=t.detail.value;e(this,"value-changed",{value:{...this.action,if:i}})}},{kind:"method",key:"_thenChanged",value:function(t){t.stopPropagation();const i=t.detail.value;e(this,"value-changed",{value:{...this.action,then:i}})}},{kind:"method",key:"_elseChanged",value:function(t){t.stopPropagation();const i=t.detail.value;e(this,"value-changed",{value:{...this.action,else:i}})}},{kind:"get",static:!0,key:"styles",value:function(){return Hi}}]}}),m),v([w("ha-automation-action-parallel")],(function(t,i){return{F:class extends i{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f({attribute:!1})],key:"action",value:void 0},{kind:"get",static:!0,key:"defaultConfig",value:function(){return{parallel:[cd.defaultConfig]}}},{kind:"method",key:"render",value:function(){const e=this.action;return k`
      <ha-automation-action
        .actions=${e.parallel}
        @value-changed=${this._actionsChanged}
        .hass=${this.hass}
      ></ha-automation-action>
    `}},{kind:"method",key:"_actionsChanged",value:function(t){t.stopPropagation();const i=t.detail.value;e(this,"value-changed",{value:{...this.action,parallel:i}})}},{kind:"get",static:!0,key:"styles",value:function(){return Hi}}]}}),m);const vd="browser",md={album:{icon:Ji,layout:"grid"},app:{icon:ea,layout:"grid"},artist:{icon:ta,layout:"grid",show_list_images:!0},channel:{icon:ia,thumbnail_ratio:"portrait",layout:"grid"},composer:{icon:aa,layout:"grid",show_list_images:!0},contributing_artist:{icon:ta,layout:"grid",show_list_images:!0},directory:{icon:na,layout:"grid",show_list_images:!0},episode:{icon:ia,layout:"grid",thumbnail_ratio:"portrait"},game:{icon:oa,layout:"grid",thumbnail_ratio:"portrait"},genre:{icon:sa,layout:"grid",show_list_images:!0},image:{icon:ra,layout:"grid"},movie:{icon:la,thumbnail_ratio:"portrait",layout:"grid"},music:{icon:da},playlist:{icon:ca,layout:"grid",show_list_images:!0},podcast:{icon:ua,layout:"grid"},season:{icon:ia,layout:"grid",thumbnail_ratio:"portrait"},track:{icon:ha},tv_show:{icon:ia,layout:"grid",thumbnail_ratio:"portrait"},url:{icon:pa},video:{icon:S,layout:"grid"}},fd=(e,t,i,a)=>e.callWS({type:"media_player/browse_media",entity_id:t,media_content_id:i,media_content_type:a}),gd=[{name:"media_content_id",required:!1,selector:{text:{}}},{name:"media_content_type",required:!1,selector:{text:{}}}];v([w("ha-selector-media")],(function(t,a){return{F:class extends a{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f({attribute:!1})],key:"selector",value:void 0},{kind:"field",decorators:[f({attribute:!1})],key:"value",value:void 0},{kind:"field",decorators:[f()],key:"label",value:void 0},{kind:"field",decorators:[f()],key:"helper",value:void 0},{kind:"field",decorators:[f({type:Boolean,reflect:!0})],key:"disabled",value:()=>!1},{kind:"field",decorators:[f({type:Boolean,reflect:!0})],key:"required",value:()=>!0},{kind:"field",decorators:[Vi()],key:"_thumbnailUrl",value:void 0},{kind:"method",key:"willUpdate",value:function(e){if(e.has("value")){var t,i,a,n;const s=null===(t=this.value)||void 0===t||null===(i=t.metadata)||void 0===i?void 0:i.thumbnail;if(s===(null===(a=e.get("value"))||void 0===a||null===(n=a.metadata)||void 0===n?void 0:n.thumbnail))return;if(s&&s.startsWith("/"))this._thumbnailUrl=void 0,os(this.hass,s).then((e=>{this._thumbnailUrl=e.path}));else if(s&&s.startsWith("https://brands.home-assistant.io")){var o;this._thumbnailUrl=Fa({domain:Da(s),type:"icon",useFallback:!0,darkOptimized:null===(o=this.hass.themes)||void 0===o?void 0:o.darkMode})}else this._thumbnailUrl=s}}},{kind:"method",key:"render",value:function(){var e,t,i,a,n,o,s,r,l,d,c,u,h;const p=null!==(e=this.value)&&void 0!==e&&e.entity_id?this.hass.states[this.value.entity_id]:void 0,v=!(null!==(t=this.value)&&void 0!==t&&t.entity_id)||p&&((e,t)=>ds(e.attributes,t))(p,131072);return k`<ha-entity-picker
        .hass=${this.hass}
        .value=${null===(i=this.value)||void 0===i?void 0:i.entity_id}
        .label=${this.label||this.hass.localize("ui.components.selectors.media.pick_media_player")}
        .disabled=${this.disabled}
        .helper=${this.helper}
        .required=${this.required}
        include-domains='["media_player"]'
        allow-custom-entity
        @value-changed=${this._entityChanged}
      ></ha-entity-picker>
      ${v?k`<ha-card
            outlined
            @click=${this._pickMedia}
            class=${this.disabled||null===(a=this.value)||void 0===a||!a.entity_id?"disabled":""}
          >
            <div
              class="thumbnail ${Xi({portrait:!(null===(n=this.value)||void 0===n||null===(o=n.metadata)||void 0===o||!o.media_class)&&"portrait"===md[this.value.metadata.children_media_class||this.value.metadata.media_class].thumbnail_ratio})}"
            >
              ${null!==(s=this.value)&&void 0!==s&&null!==(r=s.metadata)&&void 0!==r&&r.thumbnail?k`
                    <div
                      class="${Xi({"centered-image":!!this.value.metadata.media_class&&["app","directory"].includes(this.value.metadata.media_class)})}
                        image"
                      style=${this._thumbnailUrl?`background-image: url(${this._thumbnailUrl});`:""}
                    ></div>
                  `:k`
                    <div class="icon-holder image">
                      <ha-svg-icon
                        class="folder"
                        .path=${null!==(l=this.value)&&void 0!==l&&l.media_content_id?null!==(d=this.value)&&void 0!==d&&null!==(c=d.metadata)&&void 0!==c&&c.media_class?md["directory"===this.value.metadata.media_class&&this.value.metadata.children_media_class||this.value.metadata.media_class].icon:ma:va}
                      ></ha-svg-icon>
                    </div>
                  `}
            </div>
            <div class="title">
              ${null!==(u=this.value)&&void 0!==u&&u.media_content_id?(null===(h=this.value.metadata)||void 0===h?void 0:h.title)||this.value.media_content_id:this.hass.localize("ui.components.selectors.media.pick_media")}
            </div>
          </ha-card>`:k`<ha-alert>
              ${this.hass.localize("ui.components.selectors.media.browse_not_supported")}
            </ha-alert>
            <ha-form
              .hass=${this.hass}
              .data=${this.value}
              .schema=${gd}
              .computeLabel=${this._computeLabelCallback}
            ></ha-form>`}`}},{kind:"field",key:"_computeLabelCallback",value(){return e=>this.hass.localize(`ui.components.selectors.media.${e.name}`)}},{kind:"method",key:"_entityChanged",value:function(t){t.stopPropagation(),e(this,"value-changed",{value:{entity_id:t.detail.value,media_content_id:"",media_content_type:""}})}},{kind:"method",key:"_pickMedia",value:function(){var t,i,a;i=this,a={action:"pick",entityId:this.value.entity_id,navigateIds:null===(t=this.value.metadata)||void 0===t?void 0:t.navigateIds,mediaPickedCallback:t=>{var i;e(this,"value-changed",{value:{...this.value,media_content_id:t.item.media_content_id,media_content_type:t.item.media_content_type,metadata:{title:t.item.title,thumbnail:t.item.thumbnail,media_class:t.item.media_class,children_media_class:t.item.children_media_class,navigateIds:null===(i=t.navigateIds)||void 0===i?void 0:i.map((e=>({media_content_type:e.media_content_type,media_content_id:e.media_content_id})))}}})}},e(i,"show-dialog",{dialogTag:"dialog-media-player-browse",dialogImport:()=>import("./c.ecb39554.js").then((function(e){return e.a})),dialogParams:a})}},{kind:"get",static:!0,key:"styles",value:function(){return i`
      ha-entity-picker {
        display: block;
        margin-bottom: 16px;
      }
      mwc-button {
        margin-top: 8px;
      }
      ha-alert {
        display: block;
        margin-bottom: 16px;
      }
      ha-card {
        position: relative;
        width: 200px;
        box-sizing: border-box;
        cursor: pointer;
      }
      ha-card.disabled {
        pointer-events: none;
        color: var(--disabled-text-color);
      }
      ha-card .thumbnail {
        width: 100%;
        position: relative;
        box-sizing: border-box;
        transition: padding-bottom 0.1s ease-out;
        padding-bottom: 100%;
      }
      ha-card .thumbnail.portrait {
        padding-bottom: 150%;
      }
      ha-card .image {
        border-radius: 3px 3px 0 0;
      }
      .folder {
        --mdc-icon-size: calc(var(--media-browse-item-size, 175px) * 0.4);
      }
      .title {
        font-size: 16px;
        padding-top: 16px;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-bottom: 16px;
        padding-left: 16px;
        padding-right: 4px;
        white-space: nowrap;
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
      .icon-holder {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    `}}]}}),m),v([w("ha-automation-action-play_media")],(function(t,i){return{F:class extends i{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f({attribute:!1})],key:"action",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"narrow",value:()=>!1},{kind:"get",static:!0,key:"defaultConfig",value:function(){return{service:"media_player.play_media",target:{entity_id:""},data:{media_content_id:"",media_content_type:""},metadata:{}}}},{kind:"field",key:"_getSelectorValue",value:()=>Ri((e=>{var t,i,a;return{entity_id:(null===(t=e.target)||void 0===t?void 0:t.entity_id)||e.entity_id,media_content_id:null===(i=e.data)||void 0===i?void 0:i.media_content_id,media_content_type:null===(a=e.data)||void 0===a?void 0:a.media_content_type,metadata:e.metadata}}))},{kind:"method",key:"render",value:function(){return k`
      <ha-selector-media
        .hass=${this.hass}
        .value=${this._getSelectorValue(this.action)}
        @value-changed=${this._valueChanged}
      ></ha-selector-media>
    `}},{kind:"method",key:"_valueChanged",value:function(t){t.stopPropagation(),e(this,"value-changed",{value:{service:"media_player.play_media",target:{entity_id:t.detail.value.entity_id},data:{media_content_id:t.detail.value.media_content_id,media_content_type:t.detail.value.media_content_type},metadata:t.detail.value.metadata||{}}})}}]}}),m);const _d=["count","while","until"],yd=e=>_d.find((t=>t in e));v([w("ha-automation-action-repeat")],(function(t,a){return{F:class extends a{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f({attribute:!1})],key:"action",value:void 0},{kind:"get",static:!0,key:"defaultConfig",value:function(){return{repeat:{count:2,sequence:[]}}}},{kind:"method",key:"render",value:function(){const e=this.action.repeat,t=yd(e);return k`
      <ha-select
        .label=${this.hass.localize("ui.panel.config.automation.editor.actions.type.repeat.type_select")}
        .value=${t}
        @selected=${this._typeChanged}
      >
        ${_d.map((e=>k`
            <mwc-list-item .value=${e}>
              ${this.hass.localize(`ui.panel.config.automation.editor.actions.type.repeat.type.${e}.label`)}
            </mwc-list-item>
          `))}
      </ha-select>
      ${"count"===t?k`
            <ha-textfield
              .label=${this.hass.localize("ui.panel.config.automation.editor.actions.type.repeat.type.count.label")}
              name="count"
              .value=${e.count||"0"}
              @change=${this._countChanged}
            ></ha-textfield>
          `:""}
      ${"while"===t?k` <h3>
              ${this.hass.localize("ui.panel.config.automation.editor.actions.type.repeat.type.while.conditions")}:
            </h3>
            <ha-automation-condition
              .conditions=${e.while||[]}
              .hass=${this.hass}
              @value-changed=${this._conditionChanged}
            ></ha-automation-condition>`:""}
      ${"until"===t?k` <h3>
              ${this.hass.localize("ui.panel.config.automation.editor.actions.type.repeat.type.until.conditions")}:
            </h3>
            <ha-automation-condition
              .conditions=${e.until||[]}
              .hass=${this.hass}
              @value-changed=${this._conditionChanged}
            ></ha-automation-condition>`:""}
      <h3>
        ${this.hass.localize("ui.panel.config.automation.editor.actions.type.repeat.sequence")}:
      </h3>
      <ha-automation-action
        .actions=${e.sequence}
        @value-changed=${this._actionChanged}
        .hass=${this.hass}
      ></ha-automation-action>
    `}},{kind:"method",key:"_typeChanged",value:function(t){const i=t.target.value;if(!i||i===yd(this.action.repeat))return;e(this,"value-changed",{value:{repeat:{[i]:"count"===i?2:[],sequence:this.action.repeat.sequence}}})}},{kind:"method",key:"_conditionChanged",value:function(t){t.stopPropagation();const i=t.detail.value;e(this,"value-changed",{value:{repeat:{...this.action.repeat,[yd(this.action.repeat)]:i}}})}},{kind:"method",key:"_actionChanged",value:function(t){t.stopPropagation();const i=t.detail.value;e(this,"value-changed",{value:{repeat:{...this.action.repeat,sequence:i}}})}},{kind:"method",key:"_countChanged",value:function(t){const i=t.target.value;this.action.repeat.count!==i&&e(this,"value-changed",{value:{repeat:{...this.action.repeat,count:i}}})}},{kind:"get",static:!0,key:"styles",value:function(){return[Hi,i`
        ha-textfield {
          margin-top: 16px;
        }
      `]}}]}}),m);const kd=e=>"all"===e||(e=>e.includes("."))(e),bd=(e,t)=>`https://${e.config.version.includes("b")?"rc":e.config.version.includes("dev")?"next":"www"}.home-assistant.io${t}`,xd=e=>e.selector&&!e.required&&!("boolean"in e.selector&&e.default);v([w("ha-service-control")],(function(t,a){return{F:class extends a{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f({attribute:!1})],key:"value",value:void 0},{kind:"field",decorators:[Vi()],key:"_value",value:void 0},{kind:"field",decorators:[f({reflect:!0,type:Boolean})],key:"narrow",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"showAdvanced",value:void 0},{kind:"field",decorators:[Vi()],key:"_checkedKeys",value:()=>new Set},{kind:"field",decorators:[Vi()],key:"_manifest",value:void 0},{kind:"field",decorators:[g("ha-yaml-editor")],key:"_yamlEditor",value:void 0},{kind:"method",key:"willUpdate",value:function(t){var i,a,n,o,s,r,l,d,c,u,h;if(!t.has("value"))return;const p=t.get("value");(null==p?void 0:p.service)!==(null===(i=this.value)||void 0===i?void 0:i.service)&&(this._checkedKeys=new Set);const v=this._getServiceInfo(null===(a=this.value)||void 0===a?void 0:a.service,this.hass.services);var m;null!==(n=this.value)&&void 0!==n&&n.service?null!=p&&p.service&&zn(this.value.service)===zn(p.service)||this._fetchManifest(zn(null===(m=this.value)||void 0===m?void 0:m.service)):this._manifest=void 0;if(v&&"target"in v&&(null!==(o=this.value)&&void 0!==o&&null!==(s=o.data)&&void 0!==s&&s.entity_id||null!==(r=this.value)&&void 0!==r&&null!==(l=r.data)&&void 0!==l&&l.area_id||null!==(d=this.value)&&void 0!==d&&null!==(c=d.data)&&void 0!==c&&c.device_id)){var f,g,_;const e={...this.value.target};!this.value.data.entity_id||null!==(f=this.value.target)&&void 0!==f&&f.entity_id||(e.entity_id=this.value.data.entity_id),!this.value.data.area_id||null!==(g=this.value.target)&&void 0!==g&&g.area_id||(e.area_id=this.value.data.area_id),!this.value.data.device_id||null!==(_=this.value.target)&&void 0!==_&&_.device_id||(e.device_id=this.value.data.device_id),this._value={...this.value,target:e,data:{...this.value.data}},delete this._value.data.entity_id,delete this._value.data.device_id,delete this._value.data.area_id}else this._value=this.value;if((null==p?void 0:p.service)!==(null===(u=this.value)||void 0===u?void 0:u.service)){let t=!1;this._value&&v&&(this._value.data||(this._value.data={}),v.fields.forEach((e=>{e.selector&&e.required&&void 0===e.default&&"boolean"in e.selector&&void 0===this._value.data[e.key]&&(t=!0,this._value.data[e.key]=!1)}))),t&&e(this,"value-changed",{value:{...this._value}})}if(null!==(h=this._value)&&void 0!==h&&h.data){const e=this._yamlEditor;e&&e.value!==this._value.data&&e.setValue(this._value.data)}}},{kind:"field",key:"_getServiceInfo",value:()=>Ri(((e,t)=>{if(!e||!t)return;const i=zn(e),a=$n(e);if(!(i in t))return;if(!(a in t[i]))return;const n=Object.entries(t[i][a].fields).map((([e,t])=>({key:e,...t,selector:t.selector})));return{...t[i][a],fields:n,hasSelector:n.length?n.filter((e=>e.selector)).map((e=>e.key)):[]}}))},{kind:"method",key:"render",value:function(){var e,t,i,a,n,o,s;const r=this._getServiceInfo(null===(e=this._value)||void 0===e?void 0:e.service,this.hass.services),l=(null==r?void 0:r.fields.length)&&!r.hasSelector.length||r&&Object.keys((null===(t=this._value)||void 0===t?void 0:t.data)||{}).some((e=>!r.hasSelector.includes(e))),d=l&&(null==r?void 0:r.fields.find((e=>"entity_id"===e.key))),c=Boolean(!l&&(null==r?void 0:r.fields.some((e=>xd(e)))));return k`<ha-service-picker
        .hass=${this.hass}
        .value=${null===(i=this._value)||void 0===i?void 0:i.service}
        @value-changed=${this._serviceChanged}
      ></ha-service-picker>
      <div class="description">
        <p>${null==r?void 0:r.description}</p>
        ${this._manifest?k` <a
              href=${this._manifest.is_built_in?bd(this.hass,`/integrations/${this._manifest.domain}`):this._manifest.documentation}
              title=${this.hass.localize("ui.components.service-control.integration_doc")}
              target="_blank"
              rel="noreferrer"
            >
              <ha-icon-button
                .path=${fa}
                class="help-icon"
              ></ha-icon-button>
            </a>`:""}
      </div>
      ${r&&"target"in r?k`<ha-settings-row .narrow=${this.narrow}>
            ${c?k`<div slot="prefix" class="checkbox-spacer"></div>`:""}
            <span slot="heading"
              >${this.hass.localize("ui.components.service-control.target")}</span
            >
            <span slot="description"
              >${this.hass.localize("ui.components.service-control.target_description")}</span
            ><ha-selector
              .hass=${this.hass}
              .selector=${r.target?{target:r.target}:{target:{}}}
              @value-changed=${this._targetChanged}
              .value=${null===(a=this._value)||void 0===a?void 0:a.target}
            ></ha-selector
          ></ha-settings-row>`:d?k`<ha-entity-picker
            .hass=${this.hass}
            .value=${null===(n=this._value)||void 0===n||null===(o=n.data)||void 0===o?void 0:o.entity_id}
            .label=${d.description}
            @value-changed=${this._entityPicked}
            allow-custom-entity
          ></ha-entity-picker>`:""}
      ${l?k`<ha-yaml-editor
            .hass=${this.hass}
            .label=${this.hass.localize("ui.components.service-control.data")}
            .name=${"data"}
            .defaultValue=${null===(s=this._value)||void 0===s?void 0:s.data}
            @value-changed=${this._dataChanged}
          ></ha-yaml-editor>`:null==r?void 0:r.fields.map((e=>{var t,i,a,n;const o=xd(e);return e.selector&&(!e.advanced||this.showAdvanced||null!==(t=this._value)&&void 0!==t&&t.data&&void 0!==this._value.data[e.key])?k`<ha-settings-row .narrow=${this.narrow}>
                  ${o?k`<ha-checkbox
                        .key=${e.key}
                        .checked=${this._checkedKeys.has(e.key)||(null===(i=this._value)||void 0===i?void 0:i.data)&&void 0!==this._value.data[e.key]}
                        @change=${this._checkboxChanged}
                        slot="prefix"
                      ></ha-checkbox>`:c?k`<div slot="prefix" class="checkbox-spacer"></div>`:""}
                  <span slot="heading">${e.name||e.key}</span>
                  <span slot="description">${null==e?void 0:e.description}</span>
                  <ha-selector
                    .disabled=${o&&!this._checkedKeys.has(e.key)&&(!(null!==(a=this._value)&&void 0!==a&&a.data)||void 0===this._value.data[e.key])}
                    .hass=${this.hass}
                    .selector=${e.selector}
                    .key=${e.key}
                    @value-changed=${this._serviceDataChanged}
                    .value=${null!==(n=this._value)&&void 0!==n&&n.data&&void 0!==this._value.data[e.key]?this._value.data[e.key]:e.default}
                  ></ha-selector>
                </ha-settings-row>`:""}))}`}},{kind:"method",key:"_checkboxChanged",value:function(t){const i=t.currentTarget.checked,a=t.currentTarget.key;let n;if(i){var o,s,r;this._checkedKeys.add(a);const e=null===(o=this._getServiceInfo(null===(r=this._value)||void 0===r?void 0:r.service,this.hass.services))||void 0===o||null===(s=o.fields.find((e=>e.key===a)))||void 0===s?void 0:s.default;var l;if(e)n={...null===(l=this._value)||void 0===l?void 0:l.data,[a]:e}}else{var d;this._checkedKeys.delete(a),n={...null===(d=this._value)||void 0===d?void 0:d.data},delete n[a]}n&&e(this,"value-changed",{value:{...this._value,data:n}}),this.requestUpdate("_checkedKeys")}},{kind:"method",key:"_serviceChanged",value:function(t){var i;t.stopPropagation(),t.detail.value!==(null===(i=this._value)||void 0===i?void 0:i.service)&&e(this,"value-changed",{value:{service:t.detail.value||""}})}},{kind:"method",key:"_entityPicked",value:function(t){var i,a,n;t.stopPropagation();const o=t.detail.value;if((null===(i=this._value)||void 0===i||null===(a=i.data)||void 0===a?void 0:a.entity_id)===o)return;let s;var r;!o&&null!==(n=this._value)&&void 0!==n&&n.data?(s={...this._value},delete s.data.entity_id):s={...this._value,data:{...null===(r=this._value)||void 0===r?void 0:r.data,entity_id:t.detail.value}};e(this,"value-changed",{value:s})}},{kind:"method",key:"_targetChanged",value:function(t){var i;t.stopPropagation();const a=t.detail.value;if((null===(i=this._value)||void 0===i?void 0:i.target)===a)return;let n;a?n={...this._value,target:t.detail.value}:(n={...this._value},delete n.target),e(this,"value-changed",{value:n})}},{kind:"method",key:"_serviceDataChanged",value:function(t){var i,a,n,o,s;t.stopPropagation();const r=t.currentTarget.key,l=t.detail.value;if((null===(i=this._value)||void 0===i||null===(a=i.data)||void 0===a?void 0:a[r])===l||(null===(n=this._value)||void 0===n||null===(o=n.data)||void 0===o||!o[r])&&(""===l||void 0===l))return;const d={...null===(s=this._value)||void 0===s?void 0:s.data,[r]:l};""!==l&&void 0!==l||delete d[r],e(this,"value-changed",{value:{...this._value,data:d}})}},{kind:"method",key:"_dataChanged",value:function(t){t.stopPropagation(),t.detail.isValid&&e(this,"value-changed",{value:{...this._value,data:t.detail.value}})}},{kind:"method",key:"_fetchManifest",value:async function(e){this._manifest=void 0;try{this._manifest=await((e,t)=>e.callWS({type:"manifest/get",integration:t}))(this.hass,e)}catch(e){}}},{kind:"get",static:!0,key:"styles",value:function(){return i`
      ha-settings-row {
        padding: var(--service-control-padding, 0 16px);
      }
      ha-settings-row {
        --paper-time-input-justify-content: flex-end;
        --settings-row-content-width: 100%;
        --settings-row-prefix-display: contents;
        border-top: var(
          --service-control-items-border-top,
          1px solid var(--divider-color)
        );
      }
      ha-service-picker,
      ha-entity-picker,
      ha-yaml-editor {
        display: block;
        margin: var(--service-control-padding, 0 16px);
      }
      ha-yaml-editor {
        padding: 16px 0;
      }
      p {
        margin: var(--service-control-padding, 0 16px);
        padding: 16px 0;
      }
      .checkbox-spacer {
        width: 32px;
      }
      ha-checkbox {
        margin-left: -16px;
      }
      .help-icon {
        color: var(--secondary-text-color);
      }
      .description {
        justify-content: space-between;
        display: flex;
        align-items: center;
        padding-right: 2px;
      }
    `}}]}}),m);const $d=fn({service:gn(_n()),entity_id:gn((wd=_n(),Cd="entity ID (domain.entity or all)",Ad=kd,new on({...wd,*refiner(e,t){yield*wd.refiner(e,t);const i=an(Ad(e,t),t,wd,e);for(const e of i)yield{...e,refinement:Cd}}}))),target:gn(un()),data:gn(un())});var wd,Cd,Ad;v([w("ha-automation-action-service")],(function(t,a){return{F:class extends a{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f({attribute:!1})],key:"action",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"narrow",value:()=>!1},{kind:"field",decorators:[Vi()],key:"_action",value:void 0},{kind:"get",static:!0,key:"defaultConfig",value:function(){return{service:"",data:{}}}},{kind:"method",key:"willUpdate",value:function(t){if(t.has("action")){try{sn(this.action,$d)}catch(t){return void e(this,"ui-mode-not-available",t)}this.action&&dd(this.action)?e(this,"ui-mode-not-available",Error(this.hass.localize("ui.errors.config.no_template_editor_support"))):this.action.entity_id?(this._action={...this.action,data:{...this.action.data,entity_id:this.action.entity_id}},delete this._action.entity_id):this._action=this.action}}},{kind:"method",key:"render",value:function(){var e;return k`
      <ha-service-control
        .narrow=${this.narrow}
        .hass=${this.hass}
        .value=${this._action}
        .showAdvanced=${null===(e=this.hass.userData)||void 0===e?void 0:e.showAdvanced}
        @value-changed=${this._actionChanged}
      ></ha-service-control>
    `}},{kind:"method",key:"_actionChanged",value:function(e){e.detail.value===this._action&&e.stopPropagation()}},{kind:"get",static:!0,key:"styles",value:function(){return i`
      ha-service-control {
        display: block;
        margin: 0 -16px;
      }
    `}}]}}),m),v([w("ha-automation-action-stop")],(function(t,a){return{F:class extends a{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f()],key:"action",value:void 0},{kind:"get",static:!0,key:"defaultConfig",value:function(){return{stop:""}}},{kind:"method",key:"render",value:function(){const{error:e,stop:t}=this.action;return k`
      <ha-textfield
        .label=${this.hass.localize("ui.panel.config.automation.editor.actions.type.stop.stop")}
        .value=${t}
        @change=${this._stopChanged}
      ></ha-textfield>
      <ha-formfield
        .label=${this.hass.localize("ui.panel.config.automation.editor.actions.type.stop.error")}
      >
        <ha-switch
          .checked=${null!=e&&e}
          @change=${this._errorChanged}
        ></ha-switch>
      </ha-formfield>
    `}},{kind:"method",key:"_stopChanged",value:function(t){t.stopPropagation(),e(this,"value-changed",{value:{...this.action,stop:t.target.value}})}},{kind:"method",key:"_errorChanged",value:function(t){t.stopPropagation(),e(this,"value-changed",{value:{...this.action,error:t.target.checked}})}},{kind:"get",static:!0,key:"styles",value:function(){return i`
      ha-textfield {
        display: block;
        margin-bottom: 24px;
      }
    `}}]}}),m),v([w("ha-automation-trigger-calendar")],(function(t,i){return{F:class extends i{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f({attribute:!1})],key:"trigger",value:void 0},{kind:"field",key:"_schema",value:()=>Ri((e=>[{name:"entity_id",required:!0,selector:{entity:{domain:"calendar"}}},{name:"event",type:"select",required:!0,options:[["start",e("ui.panel.config.automation.editor.triggers.type.calendar.start")],["end",e("ui.panel.config.automation.editor.triggers.type.calendar.end")]]},{name:"offset",selector:{duration:{}}},{name:"offset_type",type:"select",required:!0,options:[["before",e("ui.panel.config.automation.editor.triggers.type.calendar.before")],["after",e("ui.panel.config.automation.editor.triggers.type.calendar.after")]]}]))},{kind:"get",static:!0,key:"defaultConfig",value:function(){return{event:"start",offset:0}}},{kind:"method",key:"render",value:function(){const e=this._schema(this.hass.localize),t=this.trigger.offset,i=Kl(t);let a="after";("object"==typeof t&&i.hours<0||"string"==typeof t&&t.startsWith("-"))&&(i.hours=Math.abs(i.hours),a="before");const n={...this.trigger,offset:i,offset_type:a};return k`
      <ha-form
        .schema=${e}
        .data=${n}
        .hass=${this.hass}
        .computeLabel=${this._computeLabelCallback}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `}},{kind:"method",key:"_valueChanged",value:function(t){var i,a,n;t.stopPropagation();const o=t.detail.value.offset,s="before"===t.detail.value.offset_type?"-":"",r={...t.detail.value,offset:`${s}${null!==(i=o.hours)&&void 0!==i?i:0}:${null!==(a=o.minutes)&&void 0!==a?a:0}:${null!==(n=o.seconds)&&void 0!==n?n:0}`};delete r.offset_type,e(this,"value-changed",{value:r})}},{kind:"field",key:"_computeLabelCallback",value(){return e=>this.hass.localize(`ui.panel.config.automation.editor.triggers.type.calendar.${e.name}`)}}]}}),m),v([w("ha-device-trigger-picker")],(function(e,t){return{F:class extends t{constructor(){super(Sl,Cl,(e=>({device_id:e||"",platform:"device",domain:"",entity_id:""}))),e(this)}},d:[{kind:"get",key:"NO_AUTOMATION_TEXT",value:function(){return this.hass.localize("ui.panel.config.devices.automation.triggers.no_triggers")}},{kind:"get",key:"UNKNOWN_AUTOMATION_TEXT",value:function(){return this.hass.localize("ui.panel.config.devices.automation.triggers.unknown_trigger")}}]}}),Pl);let Id=v([w("ha-automation-trigger-device")],(function(t,a){class n extends a{constructor(...e){super(...e),t(this)}}return{F:n,d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f({type:Object})],key:"trigger",value:void 0},{kind:"field",decorators:[Vi()],key:"_deviceId",value:void 0},{kind:"field",decorators:[Vi()],key:"_capabilities",value:void 0},{kind:"field",key:"_origTrigger",value:void 0},{kind:"get",static:!0,key:"defaultConfig",value:function(){return{device_id:"",domain:"",entity_id:""}}},{kind:"field",key:"_extraFieldsData",value:()=>Ri(((e,t)=>{const i={};return t.extra_fields.forEach((t=>{void 0!==e[t.name]&&(i[t.name]=e[t.name])})),i}))},{kind:"method",key:"render",value:function(){var e;const t=this._deviceId||this.trigger.device_id;return k`
      <ha-device-picker
        .value=${t}
        @value-changed=${this._devicePicked}
        .hass=${this.hass}
        label=${this.hass.localize("ui.panel.config.automation.editor.triggers.type.device.label")}
      ></ha-device-picker>
      <ha-device-trigger-picker
        .value=${this.trigger}
        .deviceId=${t}
        @value-changed=${this._deviceTriggerPicked}
        .hass=${this.hass}
        label=${this.hass.localize("ui.panel.config.automation.editor.triggers.type.device.trigger")}
      ></ha-device-trigger-picker>
      ${null!==(e=this._capabilities)&&void 0!==e&&e.extra_fields?k`
            <ha-form
              .hass=${this.hass}
              .data=${this._extraFieldsData(this.trigger,this._capabilities)}
              .schema=${this._capabilities.extra_fields}
              .computeLabel=${this._extraFieldsComputeLabelCallback(this.hass.localize)}
              @value-changed=${this._extraFieldsChanged}
            ></ha-form>
          `:""}
    `}},{kind:"method",key:"firstUpdated",value:function(){this._capabilities||this._getCapabilities(),this.trigger&&(this._origTrigger=this.trigger)}},{kind:"method",key:"updated",value:function(e){if(!e.has("trigger"))return;const t=e.get("trigger");t&&!Il(t,this.trigger)&&this._getCapabilities()}},{kind:"method",key:"_getCapabilities",value:async function(){const e=this.trigger;this._capabilities=e.domain?await((e,t)=>e.callWS({type:"device_automation/trigger/capabilities",trigger:t}))(this.hass,e):void 0}},{kind:"method",key:"_devicePicked",value:function(t){t.stopPropagation(),this._deviceId=t.target.value,void 0===this._deviceId&&e(this,"value-changed",{value:{...n.defaultConfig,platform:"device"}})}},{kind:"method",key:"_deviceTriggerPicked",value:function(t){t.stopPropagation();let i=t.detail.value;this._origTrigger&&Il(this._origTrigger,i)&&(i=this._origTrigger),this.trigger.id&&(i.id=this.trigger.id),e(this,"value-changed",{value:i})}},{kind:"method",key:"_extraFieldsChanged",value:function(t){t.stopPropagation(),e(this,"value-changed",{value:{...this.trigger,...t.detail.value}})}},{kind:"method",key:"_extraFieldsComputeLabelCallback",value:function(e){return t=>e(`ui.panel.config.automation.editor.triggers.type.device.extra_fields.${t.name}`)||t.name}},{kind:"field",static:!0,key:"styles",value:()=>i`
    ha-device-picker {
      display: block;
      margin-bottom: 24px;
    }
  `}]}}),m);const Ed={},zd=h(class extends d{constructor(){super(...arguments),this.nt=Ed}render(e,t){return t()}update(e,[t,i]){if(Array.isArray(t)){if(Array.isArray(this.nt)&&this.nt.length===t.length&&t.every(((e,t)=>e===this.nt[t])))return ga}else if(this.nt===t)return ga;return this.nt=Array.isArray(t)?Array.from(t):t,this.render(t,i)}}),Sd=async e=>e.callWS({type:"config/auth/list"});v([w("ha-user-badge")],(function(e,t){class a extends t{constructor(...t){super(...t),e(this)}}return{F:a,d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f({attribute:!1})],key:"user",value:void 0},{kind:"field",decorators:[Vi()],key:"_personPicture",value:void 0},{kind:"field",key:"_personEntityId",value:void 0},{kind:"method",key:"willUpdate",value:function(e){if(_(y(a.prototype),"willUpdate",this).call(this,e),e.has("user"))return void this._getPersonPicture();const t=e.get("hass");if(this._personEntityId&&t&&this.hass.states[this._personEntityId]!==t.states[this._personEntityId]){const e=this.hass.states[this._personEntityId];e?this._personPicture=e.attributes.entity_picture:this._getPersonPicture()}else!this._personEntityId&&t&&this._getPersonPicture()}},{kind:"method",key:"render",value:function(){if(!this.hass||!this.user)return k``;const e=this._personPicture;if(e)return k`<div
        style=${ji({backgroundImage:`url(${e})`})}
        class="picture"
      ></div>`;const t=(e=>e?e.trim().split(" ").slice(0,3).map((e=>e.substring(0,1))).join(""):"?")(this.user.name);return k`<div
      class="initials ${Xi({long:t.length>2})}"
    >
      ${t}
    </div>`}},{kind:"method",key:"_getPersonPicture",value:function(){if(this._personEntityId=void 0,this._personPicture=void 0,this.hass&&this.user)for(const e of Object.values(this.hass.states))if(e.attributes.user_id===this.user.id&&"person"===as(e)){this._personEntityId=e.entity_id,this._personPicture=e.attributes.entity_picture;break}}},{kind:"get",static:!0,key:"styles",value:function(){return i`
      :host {
        display: contents;
      }
      .picture {
        width: 40px;
        height: 40px;
        background-size: cover;
        border-radius: 50%;
      }
      .initials {
        display: inline-block;
        box-sizing: border-box;
        width: 40px;
        line-height: 40px;
        border-radius: 50%;
        text-align: center;
        background-color: var(--light-primary-color);
        text-decoration: none;
        color: var(--text-light-primary-color, var(--primary-text-color));
        overflow: hidden;
      }
      .initials.long {
        font-size: 80%;
      }
    `}}]}}),m);let Ld=v(null,(function(t,a){class n extends a{constructor(...e){super(...e),t(this)}}return{F:n,d:[{kind:"field",key:"hass",value:void 0},{kind:"field",decorators:[f()],key:"label",value:void 0},{kind:"field",decorators:[f()],key:"noUserLabel",value:void 0},{kind:"field",decorators:[f()],key:"value",value:()=>""},{kind:"field",decorators:[f()],key:"users",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",key:"_sortedUsers",value:()=>Ri((e=>e?e.filter((e=>!e.system_generated)).sort(((e,t)=>Za(e.name,t.name))):[]))},{kind:"method",key:"render",value:function(){var e,t;return k`
      <ha-select
        .label=${this.label}
        .disabled=${this.disabled}
        .value=${this.value}
        @selected=${this._userChanged}
      >
        ${0===(null===(e=this.users)||void 0===e?void 0:e.length)?k`<mwc-list-item value="">
              ${this.noUserLabel||(null===(t=this.hass)||void 0===t?void 0:t.localize("ui.components.user-picker.no_user"))}
            </mwc-list-item>`:""}
        ${this._sortedUsers(this.users).map((e=>k`
            <ha-list-item graphic="avatar" .value=${e.id}>
              <ha-user-badge
                .hass=${this.hass}
                .user=${e}
                slot="graphic"
              ></ha-user-badge>
              ${e.name}
            </ha-list-item>
          `))}
      </ha-select>
    `}},{kind:"method",key:"firstUpdated",value:function(e){_(y(n.prototype),"firstUpdated",this).call(this,e),void 0===this.users&&Sd(this.hass).then((e=>{this.users=e}))}},{kind:"method",key:"_userChanged",value:function(t){const i=t.target.value;i!==this.value&&(this.value=i,setTimeout((()=>{e(this,"value-changed",{value:i}),e(this,"change")}),0))}},{kind:"get",static:!0,key:"styles",value:function(){return i`
      :host {
        display: inline-block;
      }
      mwc-list {
        display: block;
      }
    `}}]}}),m);customElements.define("ha-user-picker",Ld),v([w("ha-users-picker")],(function(t,a){class n extends a{constructor(...e){super(...e),t(this)}}return{F:n,d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f()],key:"value",value:void 0},{kind:"field",decorators:[f({attribute:"picked-user-label"})],key:"pickedUserLabel",value:void 0},{kind:"field",decorators:[f({attribute:"pick-user-label"})],key:"pickUserLabel",value:void 0},{kind:"field",decorators:[f({attribute:!1})],key:"users",value:void 0},{kind:"method",key:"firstUpdated",value:function(e){_(y(n.prototype),"firstUpdated",this).call(this,e),void 0===this.users&&Sd(this.hass).then((e=>{this.users=e}))}},{kind:"method",key:"render",value:function(){if(!this.hass||!this.users)return k``;const e=this._notSelectedUsers(this.users,this.value);return k`
      ${zd([e],(()=>{var t;return null===(t=this.value)||void 0===t?void 0:t.map(((t,i)=>k`
            <div>
              <ha-user-picker
                .label=${this.pickedUserLabel}
                .noUserLabel=${this.hass.localize("ui.components.user-picker.remove_user")}
                .index=${i}
                .hass=${this.hass}
                .value=${t}
                .users=${this._notSelectedUsersAndSelected(t,this.users,e)}
                @value-changed=${this._userChanged}
              ></ha-user-picker>
              <ha-icon-button
                .userId=${t}
                .label=${this.hass.localize("ui.components.user-picker.remove_user")}
                .path=${b}
                @click=${this._removeUser}
              >
                ></ha-icon-button
              >
            </div>
          `))}))}
      <ha-user-picker
        .label=${this.pickUserLabel||this.hass.localize("ui.components.user-picker.add_user")}
        .hass=${this.hass}
        .users=${e}
        .disabled=${!(null!=e&&e.length)}
        @value-changed=${this._addUser}
      ></ha-user-picker>
    `}},{kind:"field",key:"_notSelectedUsers",value:()=>Ri(((e,t)=>t?null==e?void 0:e.filter((e=>!e.system_generated&&!t.includes(e.id))):null==e?void 0:e.filter((e=>!e.system_generated))))},{kind:"field",key:"_notSelectedUsersAndSelected",value:()=>(e,t,i)=>{const a=null==t?void 0:t.find((t=>t.id===e));return a?i?[...i,a]:[a]:i}},{kind:"get",key:"_currentUsers",value:function(){return this.value||[]}},{kind:"method",key:"_updateUsers",value:async function(t){this.value=t,e(this,"value-changed",{value:t})}},{kind:"method",key:"_userChanged",value:function(e){e.stopPropagation();const t=e.currentTarget.index,i=e.detail.value,a=[...this._currentUsers];""===i?a.splice(t,1):a.splice(t,1,i),this._updateUsers(a)}},{kind:"method",key:"_addUser",value:async function(e){e.stopPropagation();const t=e.detail.value;if(e.currentTarget.value="",!t)return;const i=this._currentUsers;i.includes(t)||this._updateUsers([...i,t])}},{kind:"method",key:"_removeUser",value:function(e){const t=e.currentTarget.userId;this._updateUsers(this._currentUsers.filter((e=>e!==t)))}},{kind:"get",static:!0,key:"styles",value:function(){return i`
      :host {
        display: block;
      }
      div {
        display: flex;
        align-items: center;
      }
    `}}]}}),m),v([w("ha-automation-trigger-event")],(function(t,a){return{F:class extends a{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f()],key:"trigger",value:void 0},{kind:"get",static:!0,key:"defaultConfig",value:function(){return{event_type:""}}},{kind:"method",key:"render",value:function(){const{event_type:e,event_data:t,context:i}=this.trigger;return k`
      <ha-textfield
        .label=${this.hass.localize("ui.panel.config.automation.editor.triggers.type.event.event_type")}
        name="event_type"
        .value=${e}
        @change=${this._valueChanged}
      ></ha-textfield>
      <ha-yaml-editor
        .hass=${this.hass}
        .label=${this.hass.localize("ui.panel.config.automation.editor.triggers.type.event.event_data")}
        .name=${"event_data"}
        .defaultValue=${t}
        @value-changed=${this._dataChanged}
      ></ha-yaml-editor>
      <br />
      ${this.hass.localize("ui.panel.config.automation.editor.triggers.type.event.context_users")}
      <ha-users-picker
        .pickedUserLabel=${this.hass.localize("ui.panel.config.automation.editor.triggers.type.event.context_user_picked")}
        .pickUserLabel=${this.hass.localize("ui.panel.config.automation.editor.triggers.type.event.context_user_pick")}
        .hass=${this.hass}
        .value=${this._wrapUsersInArray(null==i?void 0:i.user_id)}
        @value-changed=${this._usersChanged}
      ></ha-users-picker>
    `}},{kind:"method",key:"_wrapUsersInArray",value:function(e){return e?"string"==typeof e?[e]:e:[]}},{kind:"method",key:"_valueChanged",value:function(e){e.stopPropagation(),Bd(this,e)}},{kind:"method",key:"_dataChanged",value:function(e){e.stopPropagation(),e.detail.isValid&&Bd(this,e)}},{kind:"method",key:"_usersChanged",value:function(t){t.stopPropagation();const i={...this.trigger};!t.detail.value.length&&i.context?delete i.context.user_id:(i.context||(i.context={}),i.context.user_id=t.detail.value),e(this,"value-changed",{value:i})}},{kind:"get",static:!0,key:"styles",value:function(){return i`
      ha-textfield {
        display: block;
      }
    `}}]}}),m),v([w("ha-automation-trigger-geo_location")],(function(t,i){return{F:class extends i{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f({attribute:!1})],key:"trigger",value:void 0},{kind:"field",key:"_schema",value:()=>Ri((e=>[{name:"source",selector:{text:{}}},{name:"zone",selector:{entity:{domain:"zone"}}},{name:"event",type:"select",required:!0,options:[["enter",e("ui.panel.config.automation.editor.triggers.type.geo_location.enter")],["leave",e("ui.panel.config.automation.editor.triggers.type.geo_location.leave")]]}]))},{kind:"get",static:!0,key:"defaultConfig",value:function(){return{source:"",zone:"",event:"enter"}}},{kind:"method",key:"render",value:function(){return k`
      <ha-form
        .schema=${this._schema(this.hass.localize)}
        .data=${this.trigger}
        .hass=${this.hass}
        .computeLabel=${this._computeLabelCallback}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `}},{kind:"method",key:"_valueChanged",value:function(t){t.stopPropagation();const i=t.detail.value;e(this,"value-changed",{value:i})}},{kind:"field",key:"_computeLabelCallback",value(){return e=>this.hass.localize(`ui.panel.config.automation.editor.triggers.type.geo_location.${e.name}`)}}]}}),m),v([w("ha-automation-trigger-homeassistant")],(function(t,a){return{F:class extends a{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f({attribute:!1})],key:"trigger",value:void 0},{kind:"field",key:"_schema",value:()=>Ri((e=>[{name:"event",type:"select",required:!0,options:[["start",e("ui.panel.config.automation.editor.triggers.type.homeassistant.start")],["shutdown",e("ui.panel.config.automation.editor.triggers.type.homeassistant.shutdown")]]}]))},{kind:"get",static:!0,key:"defaultConfig",value:function(){return{event:"start"}}},{kind:"method",key:"render",value:function(){return k`
      <ha-form
        .schema=${this._schema(this.hass.localize)}
        .data=${this.trigger}
        .hass=${this.hass}
        .computeLabel=${this._computeLabelCallback}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `}},{kind:"method",key:"_valueChanged",value:function(t){t.stopPropagation();const i=t.detail.value;e(this,"value-changed",{value:i})}},{kind:"field",key:"_computeLabelCallback",value(){return e=>this.hass.localize(`ui.panel.config.automation.editor.triggers.type.geo_location.${e.name}`)}},{kind:"field",static:!0,key:"styles",value:()=>i`
    label {
      display: flex;
      align-items: center;
    }
  `}]}}),m);const Td=[{name:"topic",required:!0,selector:{text:{}}},{name:"payload",selector:{text:{}}}];v([w("ha-automation-trigger-mqtt")],(function(t,i){return{F:class extends i{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f()],key:"trigger",value:void 0},{kind:"get",static:!0,key:"defaultConfig",value:function(){return{topic:""}}},{kind:"method",key:"render",value:function(){return k`
      <ha-form
        .schema=${Td}
        .data=${this.trigger}
        .hass=${this.hass}
        .computeLabel=${this._computeLabelCallback}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `}},{kind:"method",key:"_valueChanged",value:function(t){t.stopPropagation();const i=t.detail.value;e(this,"value-changed",{value:i})}},{kind:"field",key:"_computeLabelCallback",value(){return e=>this.hass.localize(`ui.panel.config.automation.editor.triggers.type.mqtt.${e.name}`)}}]}}),m),v([w("ha-automation-trigger-numeric_state")],(function(t,i){return{F:class extends i{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f()],key:"trigger",value:void 0},{kind:"field",key:"_schema",value:()=>Ri((e=>[{name:"entity_id",required:!0,selector:{entity:{}}},{name:"attribute",selector:{attribute:{entity_id:e}}},{name:"above",selector:{text:{}}},{name:"below",selector:{text:{}}},{name:"value_template",selector:{text:{multiline:!0}}},{name:"for",selector:{duration:{}}}]))},{kind:"method",key:"willUpdate",value:function(t){t.has("trigger")&&this.trigger&&dd(this.trigger)&&e(this,"ui-mode-not-available",Error(this.hass.localize("ui.errors.config.no_template_editor_support")))}},{kind:"get",static:!0,key:"defaultConfig",value:function(){return{entity_id:""}}},{kind:"method",key:"render",value:function(){const e=Kl(this.trigger.for),t={...this.trigger,for:e},i=this._schema(this.trigger.entity_id);return k`
      <ha-form
        .hass=${this.hass}
        .data=${t}
        .schema=${i}
        @value-changed=${this._valueChanged}
        .computeLabel=${this._computeLabelCallback}
      ></ha-form>
    `}},{kind:"method",key:"_valueChanged",value:function(t){t.stopPropagation();const i=t.detail.value;e(this,"value-changed",{value:i})}},{kind:"field",key:"_computeLabelCallback",value(){return e=>{switch(e.name){case"entity_id":return this.hass.localize("ui.components.entity.entity-picker.entity");case"attribute":return this.hass.localize("ui.components.entity.entity-attribute-picker.attribute");case"for":return this.hass.localize("ui.panel.config.automation.editor.triggers.type.state.for");default:return this.hass.localize(`ui.panel.config.automation.editor.triggers.type.numeric_state.${e.name}`)}}}}]}}),m);const Od=dn(Yl,fn({platform:vn("state"),entity_id:gn(kn([_n(),hn(_n())])),attribute:gn(_n()),from:gn(_n()),to:gn(_n()),for:gn(kn([_n(),Zl]))}));v([w("ha-automation-trigger-state")],(function(t,i){return{F:class extends i{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f()],key:"trigger",value:void 0},{kind:"get",static:!0,key:"defaultConfig",value:function(){return{entity_id:[]}}},{kind:"field",key:"_schema",value:()=>Ri((e=>[{name:"entity_id",required:!0,selector:{entity:{multiple:!0}}},{name:"attribute",selector:{attribute:{entity_id:e}}},{name:"from",selector:{text:{}}},{name:"to",selector:{text:{}}},{name:"for",selector:{duration:{}}}]))},{kind:"method",key:"shouldUpdate",value:function(t){if(!t.has("trigger"))return!0;if(this.trigger.for&&"object"==typeof this.trigger.for&&0===this.trigger.for.milliseconds&&delete this.trigger.for.milliseconds,this.trigger&&dd(this.trigger))return e(this,"ui-mode-not-available",Error(this.hass.localize("ui.errors.config.no_template_editor_support"))),!1;try{sn(this.trigger,Od)}catch(t){return e(this,"ui-mode-not-available",t),!1}return!0}},{kind:"method",key:"render",value:function(){const e=Kl(this.trigger.for),t={...this.trigger,entity_id:ws(this.trigger.entity_id),for:e},i=this._schema(this.trigger.entity_id);return k`
      <ha-form
        .hass=${this.hass}
        .data=${t}
        .schema=${i}
        @value-changed=${this._valueChanged}
        .computeLabel=${this._computeLabelCallback}
      ></ha-form>
    `}},{kind:"method",key:"_valueChanged",value:function(t){t.stopPropagation();const i=t.detail.value;Object.keys(i).forEach((e=>void 0===i[e]||""===i[e]?delete i[e]:{})),e(this,"value-changed",{value:i})}},{kind:"field",key:"_computeLabelCallback",value(){return e=>this.hass.localize("entity_id"===e.name?"ui.components.entity.entity-picker.entity":`ui.panel.config.automation.editor.triggers.type.state.${e.name}`)}}]}}),m),v([w("ha-automation-trigger-sun")],(function(t,i){return{F:class extends i{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f({attribute:!1})],key:"trigger",value:void 0},{kind:"field",key:"_schema",value:()=>Ri((e=>[{name:"event",type:"select",required:!0,options:[["sunrise",e("ui.panel.config.automation.editor.triggers.type.sun.sunrise")],["sunset",e("ui.panel.config.automation.editor.triggers.type.sun.sunset")]]},{name:"offset",selector:{text:{}}}]))},{kind:"get",static:!0,key:"defaultConfig",value:function(){return{event:"sunrise",offset:0}}},{kind:"method",key:"render",value:function(){const e=this._schema(this.hass.localize);return k`
      <ha-form
        .schema=${e}
        .data=${this.trigger}
        .hass=${this.hass}
        .computeLabel=${this._computeLabelCallback}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `}},{kind:"method",key:"_valueChanged",value:function(t){t.stopPropagation();const i=t.detail.value;e(this,"value-changed",{value:i})}},{kind:"field",key:"_computeLabelCallback",value(){return e=>this.hass.localize(`ui.panel.config.automation.editor.triggers.type.sun.${e.name}`)}}]}}),m);v([w("ha-automation-trigger-tag")],(function(t,i){class a extends i{constructor(...e){super(...e),t(this)}}return{F:a,d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f()],key:"trigger",value:void 0},{kind:"field",decorators:[Vi()],key:"_tags",value:()=>[]},{kind:"get",static:!0,key:"defaultConfig",value:function(){return{tag_id:""}}},{kind:"method",key:"firstUpdated",value:function(e){_(y(a.prototype),"firstUpdated",this).call(this,e),this._fetchTags()}},{kind:"method",key:"render",value:function(){const{tag_id:e}=this.trigger;return k`
      <ha-select
        .label=${this.hass.localize("ui.panel.config.automation.editor.triggers.type.tag.label")}
        .disabled=${0===this._tags.length}
        .value=${e}
        @selected=${this._tagChanged}
      >
        ${this._tags.map((e=>k`
            <mwc-list-item .value=${e.id}>
              ${e.name||e.id}
            </mwc-list-item>
          `))}
      </ha-select>
    `}},{kind:"method",key:"_fetchTags",value:async function(){this._tags=await(async e=>e.callWS({type:"tag/list"}))(this.hass),this._tags.sort(((e,t)=>Qa(e.name||e.id,t.name||t.id)))}},{kind:"method",key:"_tagChanged",value:function(t){e(this,"value-changed",{value:{...this.trigger,tag_id:t.target.value}})}}]}}),m),v([w("ha-automation-trigger-template")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f({attribute:!1})],key:"trigger",value:void 0},{kind:"get",static:!0,key:"defaultConfig",value:function(){return{value_template:""}}},{kind:"method",key:"render",value:function(){const{value_template:e}=this.trigger;return k`
      <p>
        ${this.hass.localize("ui.panel.config.automation.editor.triggers.type.template.value_template")}
        *
      </p>
      <ha-code-editor
        .name=${"value_template"}
        mode="jinja2"
        .hass=${this.hass}
        .value=${e}
        autocomplete-entities
        @value-changed=${this._valueChanged}
        dir="ltr"
      ></ha-code-editor>
    `}},{kind:"method",key:"_valueChanged",value:function(e){Bd(this,e)}}]}}),m),v([w("ha-automation-trigger-time")],(function(t,i){return{F:class extends i{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f({attribute:!1})],key:"trigger",value:void 0},{kind:"field",decorators:[Vi()],key:"_inputMode",value:void 0},{kind:"get",static:!0,key:"defaultConfig",value:function(){return{at:""}}},{kind:"field",key:"_schema",value:()=>Ri(((e,t)=>{const i=t?{entity:{domain:"input_datetime"}}:{time:{}};return[{name:"mode",type:"select",required:!0,options:[["value",e("ui.panel.config.automation.editor.triggers.type.time.type_value")],["input",e("ui.panel.config.automation.editor.triggers.type.time.type_input")]]},{name:"at",selector:i}]}))},{kind:"method",key:"willUpdate",value:function(t){t.has("trigger")&&this.trigger&&Array.isArray(this.trigger.at)&&e(this,"ui-mode-not-available",Error(this.hass.localize("ui.errors.config.editor_not_supported")))}},{kind:"method",key:"render",value:function(){var e;const t=this.trigger.at;if(Array.isArray(t))return k``;const i=null!==(e=this._inputMode)&&void 0!==e?e:(null==t?void 0:t.startsWith("input_datetime."))||(null==t?void 0:t.startsWith("sensor.")),a=this._schema(this.hass.localize,i),n={mode:i?"input":"value",...this.trigger};return k`
      <ha-form
        .hass=${this.hass}
        .data=${n}
        .schema=${a}
        @value-changed=${this._valueChanged}
        .computeLabel=${this._computeLabelCallback}
      ></ha-form>
    `}},{kind:"method",key:"_valueChanged",value:function(t){t.stopPropagation();const i=t.detail.value;this._inputMode="input"===i.mode,delete i.mode,Object.keys(i).forEach((e=>void 0===i[e]||""===i[e]?delete i[e]:{})),e(this,"value-changed",{value:i})}},{kind:"field",key:"_computeLabelCallback",value(){return e=>this.hass.localize(`ui.panel.config.automation.editor.triggers.type.time.${e.name}`)}}]}}),m);const Pd=[{name:"hours",selector:{text:{}}},{name:"minutes",selector:{text:{}}},{name:"seconds",selector:{text:{}}}];v([w("ha-automation-trigger-time_pattern")],(function(t,i){return{F:class extends i{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f()],key:"trigger",value:void 0},{kind:"get",static:!0,key:"defaultConfig",value:function(){return{}}},{kind:"method",key:"render",value:function(){return k`
      <ha-form
        .hass=${this.hass}
        .schema=${Pd}
        .data=${this.trigger}
        .computeLabel=${this._computeLabelCallback}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `}},{kind:"method",key:"_valueChanged",value:function(t){t.stopPropagation();const i=t.detail.value;e(this,"value-changed",{value:i})}},{kind:"field",key:"_computeLabelCallback",value(){return e=>this.hass.localize(`ui.panel.config.automation.editor.triggers.type.time_pattern.${e.name}`)}}]}}),m);function Md(e){return nd(e)&&"zone"!==as(e)}v([w("ha-automation-trigger-webhook")],(function(t,a){class n extends a{constructor(...e){super(...e),t(this)}}return{F:n,d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f()],key:"trigger",value:void 0},{kind:"field",decorators:[Vi()],key:"_config",value:void 0},{kind:"field",key:"_unsub",value:void 0},{kind:"get",static:!0,key:"defaultConfig",value:function(){return{webhook_id:""}}},{kind:"method",key:"connectedCallback",value:function(){_(y(n.prototype),"connectedCallback",this).call(this);const t={callback:e=>{this._config=e}};e(this,"subscribe-automation-config",t),this._unsub=t.unsub}},{kind:"method",key:"disconnectedCallback",value:function(){_(y(n.prototype),"disconnectedCallback",this).call(this),this._unsub&&this._unsub()}},{kind:"method",key:"_generateWebhookId",value:function(){var e;const t=crypto.getRandomValues(new Uint8Array(18)),i=btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_"),a=((e,t="_")=>{const i="àáäâãåăæąçćčđďèéěėëêęğǵḧìíïîįłḿǹńňñòóöôœøṕŕřßşśšșťțùúüûǘůűūųẃẍÿýźžż·/_,:;",a=`aaaaaaaaacccddeeeeeeegghiiiiilmnnnnooooooprrsssssttuuuuuuuuuwxyyzzz${t}${t}${t}${t}${t}${t}`,n=new RegExp(i.split("").join("|"),"g");return e.toString().toLowerCase().replace(/\s+/g,t).replace(n,(e=>a.charAt(i.indexOf(e)))).replace(/&/g,`${t}and${t}`).replace(/[^\w-]+/g,"").replace(/-/g,t).replace(new RegExp(`(${t})\\1+`,"g"),"$1").replace(new RegExp(`^${t}+`),"").replace(new RegExp(`${t}+$`),"")})((null===(e=this._config)||void 0===e?void 0:e.alias)||"","-");return`${a}-${i}`}},{kind:"method",key:"willUpdate",value:function(e){_(y(n.prototype),"willUpdate",this).call(this,e),e.has("trigger")&&""===this.trigger.webhook_id&&(this.trigger.webhook_id=this._generateWebhookId())}},{kind:"method",key:"render",value:function(){const{webhook_id:e}=this.trigger;return k`
      <ha-textfield
        name="webhook_id"
        .label=${this.hass.localize("ui.panel.config.automation.editor.triggers.type.webhook.webhook_id")}
        .helper=${this.hass.localize("ui.panel.config.automation.editor.triggers.type.webhook.webhook_id_helper")}
        iconTrailing
        .value=${e||""}
        @input=${this._valueChanged}
      >
        <ha-icon-button
          @click=${this._copyUrl}
          slot="trailingIcon"
          .label=${this.hass.localize("ui.panel.config.automation.editor.triggers.type.webhook.copy_url")}
          .path=${_a}
        ></ha-icon-button>
      </ha-textfield>
    `}},{kind:"method",key:"_valueChanged",value:function(e){Bd(this,e)}},{kind:"method",key:"_copyUrl",value:async function(e){const t=e.target.parentElement,i=this.hass.hassUrl(`/api/webhook/${t.value}`);await(async e=>{if(navigator.clipboard)try{return void await navigator.clipboard.writeText(e)}catch{}const t=document.createElement("textarea");t.value=e,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)})(i),En(this,{message:this.hass.localize("ui.common.copied_clipboard")})}},{kind:"field",static:!0,key:"styles",value:()=>i`
    ha-textfield {
      display: block;
    }

    ha-textfield > ha-icon-button {
      --mdc-icon-button-size: 24px;
      --mdc-icon-size: 18px;
    }
  `}]}}),m);const Fd=["zone"];v([w("ha-automation-trigger-zone")],(function(t,a){return{F:class extends a{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f()],key:"trigger",value:void 0},{kind:"get",static:!0,key:"defaultConfig",value:function(){return{entity_id:"",zone:"",event:"enter"}}},{kind:"method",key:"render",value:function(){const{entity_id:e,zone:t,event:i}=this.trigger;return k`
      <ha-entity-picker
        .label=${this.hass.localize("ui.panel.config.automation.editor.triggers.type.zone.entity")}
        .value=${e}
        @value-changed=${this._entityPicked}
        .hass=${this.hass}
        allow-custom-entity
        .entityFilter=${Md}
      ></ha-entity-picker>
      <ha-entity-picker
        .label=${this.hass.localize("ui.panel.config.automation.editor.triggers.type.zone.zone")}
        .value=${t}
        @value-changed=${this._zonePicked}
        .hass=${this.hass}
        allow-custom-entity
        .includeDomains=${Fd}
      ></ha-entity-picker>

      <label>
        ${this.hass.localize("ui.panel.config.automation.editor.triggers.type.zone.event")}
        <ha-formfield
          .label=${this.hass.localize("ui.panel.config.automation.editor.triggers.type.zone.enter")}
        >
          <ha-radio
            name="event"
            value="enter"
            .checked=${"enter"===i}
            @change=${this._radioGroupPicked}
          ></ha-radio>
        </ha-formfield>
        <ha-formfield
          .label=${this.hass.localize("ui.panel.config.automation.editor.triggers.type.zone.leave")}
        >
          <ha-radio
            name="event"
            value="leave"
            .checked=${"leave"===i}
            @change=${this._radioGroupPicked}
          ></ha-radio>
        </ha-formfield>
      </label>
    `}},{kind:"method",key:"_entityPicked",value:function(t){t.stopPropagation(),e(this,"value-changed",{value:{...this.trigger,entity_id:t.detail.value}})}},{kind:"method",key:"_zonePicked",value:function(t){t.stopPropagation(),e(this,"value-changed",{value:{...this.trigger,zone:t.detail.value}})}},{kind:"method",key:"_radioGroupPicked",value:function(t){t.stopPropagation(),e(this,"value-changed",{value:{...this.trigger,event:t.target.value}})}},{kind:"field",static:!0,key:"styles",value:()=>i`
    label {
      display: flex;
      align-items: center;
    }
    ha-entity-picker {
      display: block;
      margin-bottom: 24px;
    }
  `}]}}),m);const Dd=["calendar","device","event","state","geo_location","homeassistant","mqtt","numeric_state","sun","tag","template","time","time_pattern","webhook","zone"],Bd=(t,i)=>{var a,n;i.stopPropagation();const o=null===(a=i.currentTarget)||void 0===a?void 0:a.name;if(!o)return;const s=null===(n=i.target)||void 0===n?void 0:n.value;if((t.trigger[o]||"")===s)return;let r;void 0===s||""===s?(r={...t.trigger},delete r[o]):r={...t.trigger,[o]:s},e(t,"value-changed",{value:r})};v([w("ha-automation-trigger-row")],(function(t,a){class n extends a{constructor(...e){super(...e),t(this)}}return{F:n,d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f()],key:"trigger",value:void 0},{kind:"field",decorators:[Vi()],key:"_warnings",value:void 0},{kind:"field",decorators:[Vi()],key:"_yamlMode",value:()=>!1},{kind:"field",decorators:[Vi()],key:"_requestShowId",value:()=>!1},{kind:"field",decorators:[Vi()],key:"_triggered",value:void 0},{kind:"field",decorators:[Vi()],key:"_triggerColor",value:()=>!1},{kind:"field",decorators:[g("ha-yaml-editor")],key:"_yamlEditor",value:void 0},{kind:"field",key:"_triggerUnsub",value:void 0},{kind:"field",key:"_processedTypes",value:()=>Ri((e=>Dd.map((t=>[t,e(`ui.panel.config.automation.editor.triggers.type.${t}.label`)])).sort(((e,t)=>Za(e[1],t[1])))))},{kind:"method",key:"render",value:function(){const e=Dd.indexOf(this.trigger.platform),t=this._yamlMode||-1===e,i="id"in this.trigger||this._requestShowId;return k`
      <ha-card outlined>
        ${!1===this.trigger.enabled?k`<div class="disabled-bar">
              ${this.hass.localize("ui.panel.config.automation.editor.actions.disabled")}
            </div>`:""}
        <div class="card-menu">
          <ha-button-menu corner="BOTTOM_START" @action=${this._handleAction}>
            <ha-icon-button
              slot="trigger"
              .label=${this.hass.localize("ui.common.menu")}
              .path=${Yi}
            ></ha-icon-button>
            <mwc-list-item>
              ${this.hass.localize("ui.panel.config.automation.editor.triggers.edit_id")}
            </mwc-list-item>
            <mwc-list-item .disabled=${-1===e}>
              ${t?this.hass.localize("ui.panel.config.automation.editor.edit_ui"):this.hass.localize("ui.panel.config.automation.editor.edit_yaml")}
            </mwc-list-item>
            <mwc-list-item>
              ${this.hass.localize("ui.panel.config.automation.editor.actions.duplicate")}
            </mwc-list-item>
            <mwc-list-item>
              ${!1===this.trigger.enabled?this.hass.localize("ui.panel.config.automation.editor.actions.enable"):this.hass.localize("ui.panel.config.automation.editor.actions.disable")}
            </mwc-list-item>
            <mwc-list-item class="warning">
              ${this.hass.localize("ui.panel.config.automation.editor.actions.delete")}
            </mwc-list-item>
          </ha-button-menu>
        </div>
        <div
          class="card-content ${!1===this.trigger.enabled?"disabled":""}"
        >
          ${this._warnings?k`<ha-alert
                alert-type="warning"
                .title=${this.hass.localize("ui.errors.config.editor_not_supported")}
              >
                ${this._warnings.length&&void 0!==this._warnings[0]?k` <ul>
                      ${this._warnings.map((e=>k`<li>${e}</li>`))}
                    </ul>`:""}
                ${this.hass.localize("ui.errors.config.edit_in_yaml_supported")}
              </ha-alert>`:""}
          ${t?k`
                ${-1===e?k`
                      ${this.hass.localize("ui.panel.config.automation.editor.triggers.unsupported_platform","platform",this.trigger.platform)}
                    `:""}
                <h2>
                  ${this.hass.localize("ui.panel.config.automation.editor.edit_yaml")}
                </h2>
                <ha-yaml-editor
                  .hass=${this.hass}
                  .defaultValue=${this.trigger}
                  @value-changed=${this._onYamlChange}
                ></ha-yaml-editor>
              `:k`
                <ha-select
                  .label=${this.hass.localize("ui.panel.config.automation.editor.triggers.type_select")}
                  .value=${this.trigger.platform}
                  naturalMenuWidth
                  @selected=${this._typeChanged}
                >
                  ${this._processedTypes(this.hass.localize).map((([e,t])=>k`
                      <mwc-list-item .value=${e}>${t}</mwc-list-item>
                    `))}
                </ha-select>
                ${i?k`
                      <ha-textfield
                        .label=${this.hass.localize("ui.panel.config.automation.editor.triggers.id")}
                        .value=${this.trigger.id||""}
                        @change=${this._idChanged}
                      >
                      </ha-textfield>
                    `:""}
                <div @ui-mode-not-available=${this._handleUiModeNotAvailable}>
                  ${za(`ha-automation-trigger-${this.trigger.platform}`,{hass:this.hass,trigger:this.trigger})}
                </div>
              `}
        </div>
        <div
          class="triggered ${Xi({active:void 0!==this._triggered,accent:this._triggerColor})}"
          @click=${this._showTriggeredInfo}
        >
          ${this.hass.localize("ui.panel.config.automation.editor.triggers.triggered")}
        </div>
      </ha-card>
    `}},{kind:"method",key:"updated",value:function(e){_(y(n.prototype),"updated",this).call(this,e),e.has("trigger")&&this._subscribeTrigger()}},{kind:"method",key:"connectedCallback",value:function(){_(y(n.prototype),"connectedCallback",this).call(this),this.hasUpdated&&this.trigger&&this._subscribeTrigger()}},{kind:"method",key:"disconnectedCallback",value:function(){_(y(n.prototype),"disconnectedCallback",this).call(this),this._triggerUnsub&&(this._triggerUnsub.then((e=>e())),this._triggerUnsub=void 0),this._doSubscribeTrigger.cancel()}},{kind:"method",key:"_subscribeTrigger",value:function(){this._triggerUnsub&&(this._triggerUnsub.then((e=>e())),this._triggerUnsub=void 0),this._doSubscribeTrigger()}},{kind:"field",key:"_doSubscribeTrigger",value(){return Ea((async()=>{let e;const t=this.trigger;this._triggerUnsub&&(this._triggerUnsub.then((e=>e())),this._triggerUnsub=void 0);if(!(await xn(this.hass,{trigger:t})).trigger.valid||this.trigger!==t)return;const i=((e,t,i,a)=>e.connection.subscribeMessage(t,{type:"subscribe_trigger",trigger:i,variables:a}))(this.hass,(t=>{void 0!==e?(clearTimeout(e),this._triggerColor=!this._triggerColor):this._triggerColor=!1,this._triggered=t,e=window.setTimeout((()=>{this._triggered=void 0,e=void 0}),5e3)}),t);i.catch((()=>{this._triggerUnsub===i&&(this._triggerUnsub=void 0)})),this._triggerUnsub=i}),5e3)}},{kind:"method",key:"_handleUiModeNotAvailable",value:function(e){this._warnings=bn(this.hass,e.detail).warnings,this._yamlMode||(this._yamlMode=!0)}},{kind:"method",key:"_handleAction",value:function(t){switch(t.detail.index){case 0:this._requestShowId=!0;break;case 1:this._switchYamlMode();break;case 2:e(this,"duplicate");break;case 3:this._onDisable();break;case 4:this._onDelete()}}},{kind:"method",key:"_onDelete",value:function(){Sa(this,{text:this.hass.localize("ui.panel.config.automation.editor.triggers.delete_confirm"),dismissText:this.hass.localize("ui.common.cancel"),confirmText:this.hass.localize("ui.common.delete"),confirm:()=>{e(this,"value-changed",{value:null})}})}},{kind:"method",key:"_onDisable",value:function(){var t;const i=!(null===(t=this.trigger.enabled)||void 0===t||t),a={...this.trigger,enabled:i};var n;(e(this,"value-changed",{value:a}),this._yamlMode)&&(null===(n=this._yamlEditor)||void 0===n||n.setValue(a))}},{kind:"method",key:"_typeChanged",value:function(t){const i=t.target.value;if(!i)return;const a=customElements.get(`ha-automation-trigger-${i}`);if(i!==this.trigger.platform){const t={platform:i,...a.defaultConfig};this.trigger.id&&(t.id=this.trigger.id),e(this,"value-changed",{value:t})}}},{kind:"method",key:"_idChanged",value:function(t){var i;const a=t.target.value;if(a===(null!==(i=this.trigger.id)&&void 0!==i?i:""))return;this._requestShowId=!0;const n={...this.trigger};a?n.id=a:delete n.id,e(this,"value-changed",{value:n})}},{kind:"method",key:"_onYamlChange",value:function(t){t.stopPropagation(),t.detail.isValid&&(this._warnings=void 0,e(this,"value-changed",{value:t.detail.value}))}},{kind:"method",key:"_switchYamlMode",value:function(){this._warnings=void 0,this._yamlMode=!this._yamlMode}},{kind:"method",key:"_showTriggeredInfo",value:function(){La(this,{text:k`
        <ha-yaml-editor
          readOnly
          .hass=${this.hass}
          .defaultValue=${this._triggered}
        ></ha-yaml-editor>
      `})}},{kind:"get",static:!0,key:"styles",value:function(){return[Hi,i`
        .disabled {
          opacity: 0.5;
          pointer-events: none;
        }
        .card-content {
          padding-top: 16px;
          margin-top: 0;
        }
        .disabled-bar {
          background: var(--divider-color, #e0e0e0);
          text-align: center;
          border-top-right-radius: var(--ha-card-border-radius);
          border-top-left-radius: var(--ha-card-border-radius);
        }
        .card-menu {
          float: var(--float-end, right);
          z-index: 3;
          margin: 4px;
          --mdc-theme-text-primary-on-background: var(--primary-text-color);
          display: flex;
          align-items: center;
        }
        .triggered {
          cursor: pointer;
          position: absolute;
          top: 0px;
          right: 0px;
          left: 0px;
          text-transform: uppercase;
          font-weight: bold;
          font-size: 14px;
          background-color: var(--primary-color);
          color: var(--text-primary-color);
          max-height: 0px;
          overflow: hidden;
          transition: max-height 0.3s;
          text-align: center;
          border-top-right-radius: var(--ha-card-border-radius, 4px);
          border-top-left-radius: var(--ha-card-border-radius, 4px);
        }
        .triggered.active {
          max-height: 100px;
        }
        .triggered:hover {
          opacity: 0.8;
        }
        .triggered.accent {
          background-color: var(--accent-color);
          color: var(--text-accent-color, var(--text-primary-color));
        }
        mwc-list-item[disabled] {
          --mdc-theme-text-primary-on-background: var(--disabled-text-color);
        }
        ha-select {
          margin-bottom: 24px;
        }
        ha-textfield {
          display: block;
          margin-bottom: 24px;
        }
      `]}}]}}),m),v([w("ha-automation-trigger")],(function(t,a){return{F:class extends a{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f()],key:"triggers",value:void 0},{kind:"method",key:"render",value:function(){return k`
      ${this.triggers.map(((e,t)=>k`
          <ha-automation-trigger-row
            .index=${t}
            .trigger=${e}
            @duplicate=${this._duplicateTrigger}
            @value-changed=${this._triggerChanged}
            .hass=${this.hass}
          ></ha-automation-trigger-row>
        `))}
      <ha-card outlined>
        <div class="card-actions add-card">
          <mwc-button @click=${this._addTrigger}>
            ${this.hass.localize("ui.panel.config.automation.editor.triggers.add")}
          </mwc-button>
        </div>
      </ha-card>
    `}},{kind:"method",key:"_addTrigger",value:function(){const t=this.triggers.concat({platform:"device",...Id.defaultConfig});e(this,"value-changed",{value:t})}},{kind:"method",key:"_triggerChanged",value:function(t){t.stopPropagation();const i=[...this.triggers],a=t.detail.value,n=t.target.index;null===a?i.splice(n,1):i[n]=a,e(this,"value-changed",{value:i})}},{kind:"method",key:"_duplicateTrigger",value:function(t){t.stopPropagation();const i=t.target.index;e(this,"value-changed",{value:this.triggers.concat(Ya(this.triggers[i]))})}},{kind:"get",static:!0,key:"styles",value:function(){return i`
      ha-automation-trigger-row,
      ha-card {
        display: block;
        margin-top: 16px;
      }
      .add-card mwc-button {
        display: block;
        text-align: center;
      }
    `}}]}}),m),v([w("ha-automation-action-wait_for_trigger")],(function(t,a){return{F:class extends a{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f()],key:"action",value:void 0},{kind:"get",static:!0,key:"defaultConfig",value:function(){return{wait_for_trigger:[]}}},{kind:"method",key:"render",value:function(){const{wait_for_trigger:e,continue_on_timeout:t,timeout:i}=this.action;return k`
      <ha-textfield
        .label=${this.hass.localize("ui.panel.config.automation.editor.actions.type.wait_for_trigger.timeout")}
        .name=${"timeout"}
        .value=${i||""}
        @change=${this._valueChanged}
      ></ha-textfield>
      <ha-formfield
        .label=${this.hass.localize("ui.panel.config.automation.editor.actions.type.wait_for_trigger.continue_timeout")}
      >
        <ha-switch
          .checked=${null==t||t}
          @change=${this._continueChanged}
        ></ha-switch>
      </ha-formfield>
      <ha-automation-trigger
        .triggers=${e}
        .hass=${this.hass}
        .name=${"wait_for_trigger"}
        @value-changed=${this._valueChanged}
      ></ha-automation-trigger>
    `}},{kind:"method",key:"_continueChanged",value:function(t){e(this,"value-changed",{value:{...this.action,continue_on_timeout:t.target.checked}})}},{kind:"method",key:"_valueChanged",value:function(e){qd(this,e)}},{kind:"get",static:!0,key:"styles",value:function(){return i`
      ha-textfield {
        display: block;
        margin-bottom: 24px;
      }
    `}}]}}),m);const Nd=[{name:"wait_template",selector:{template:{}}},{name:"timeout",required:!1,selector:{text:{}}},{name:"continue_on_timeout",selector:{boolean:{}}}];v([w("ha-automation-action-wait_template")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f({attribute:!1})],key:"action",value:void 0},{kind:"get",static:!0,key:"defaultConfig",value:function(){return{wait_template:"",continue_on_timeout:!0}}},{kind:"method",key:"render",value:function(){return k`
      <ha-form
        .hass=${this.hass}
        .data=${this.action}
        .schema=${Nd}
        .computeLabel=${this._computeLabelCallback}
      ></ha-form>
    `}},{kind:"field",key:"_computeLabelCallback",value(){return e=>this.hass.localize(`ui.panel.config.automation.editor.actions.type.wait_template.${"continue_on_timeout"===e.name?"continue_timeout":e.name}`)}}]}}),m);const Vd=["condition","delay","event","play_media","activate_scene","service","wait_template","wait_for_trigger","repeat","choose","if","device_id","stop","parallel"],jd=e=>{if(e)return"service"in e||"scene"in e?(e=>{if("delay"in e)return"delay";if("wait_template"in e)return"wait_template";if(["condition","and","or","not"].some((t=>t in e)))return"check_condition";if("event"in e)return"fire_event";if("device_id"in e)return"device_action";if("scene"in e)return"activate_scene";if("repeat"in e)return"repeat";if("choose"in e)return"choose";if("if"in e)return"if";if("wait_for_trigger"in e)return"wait_for_trigger";if("variables"in e)return"variables";if("stop"in e)return"stop";if("parallel"in e)return"parallel";if("service"in e){if("metadata"in e){if(rn(e,In))return"activate_scene";if(rn(e,An))return"play_media"}return"service"}return"unknown"})(e):["and","or","not"].some((t=>t in e))?"condition":Vd.find((t=>t in e))},qd=(t,i)=>{var a,n;i.stopPropagation();const o=null===(a=i.target)||void 0===a?void 0:a.name;if(!o)return;const s=(null===(n=i.detail)||void 0===n?void 0:n.value)||i.target.value;if((t.action[o]||"")===s)return;let r;s?r={...t.action,[o]:s}:(r={...t.action},delete r[o]),e(t,"value-changed",{value:r})};v([w("ha-automation-action-row")],(function(t,a){return{F:class extends a{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f()],key:"action",value:void 0},{kind:"field",decorators:[f()],key:"index",value:void 0},{kind:"field",decorators:[f()],key:"totalActions",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"narrow",value:()=>!1},{kind:"field",decorators:[Vi()],key:"_warnings",value:void 0},{kind:"field",decorators:[Vi()],key:"_uiModeAvailable",value:()=>!0},{kind:"field",decorators:[Vi()],key:"_yamlMode",value:()=>!1},{kind:"field",decorators:[g("ha-yaml-editor")],key:"_yamlEditor",value:void 0},{kind:"field",key:"_processedTypes",value:()=>Ri((e=>Vd.map((t=>[t,e(`ui.panel.config.automation.editor.actions.type.${t}.label`)])).sort(((e,t)=>Za(e[1],t[1])))))},{kind:"method",key:"willUpdate",value:function(e){e.has("action")&&(this._uiModeAvailable=void 0!==jd(this.action),this._uiModeAvailable||this._yamlMode||(this._yamlMode=!0))}},{kind:"method",key:"updated",value:function(e){if(e.has("action")&&this._yamlMode){const e=this._yamlEditor;e&&e.value!==this.action&&e.setValue(this.action)}}},{kind:"method",key:"render",value:function(){const e=jd(this.action),t=this._yamlMode;return k`
      <ha-card outlined>
        ${!1===this.action.enabled?k`<div class="disabled-bar">
              ${this.hass.localize("ui.panel.config.automation.editor.actions.disabled")}
            </div>`:""}
        <div class="card-menu">
          ${0!==this.index?k`
                <ha-icon-button
                  .label=${this.hass.localize("ui.panel.config.automation.editor.move_up")}
                  .path=${ya}
                  @click=${this._moveUp}
                ></ha-icon-button>
              `:""}
          ${this.index!==this.totalActions-1?k`
                <ha-icon-button
                  .label=${this.hass.localize("ui.panel.config.automation.editor.move_down")}
                  .path=${ka}
                  @click=${this._moveDown}
                ></ha-icon-button>
              `:""}
          <ha-button-menu corner="BOTTOM_START" @action=${this._handleAction}>
            <ha-icon-button
              slot="trigger"
              .label=${this.hass.localize("ui.common.menu")}
              .path=${Yi}
            ></ha-icon-button>
            <mwc-list-item>
              ${this.hass.localize("ui.panel.config.automation.editor.actions.run_action")}
            </mwc-list-item>
            <mwc-list-item .disabled=${!this._uiModeAvailable}>
              ${t?this.hass.localize("ui.panel.config.automation.editor.edit_ui"):this.hass.localize("ui.panel.config.automation.editor.edit_yaml")}
            </mwc-list-item>
            <mwc-list-item>
              ${this.hass.localize("ui.panel.config.automation.editor.actions.duplicate")}
            </mwc-list-item>
            <mwc-list-item>
              ${!1===this.action.enabled?this.hass.localize("ui.panel.config.automation.editor.actions.enable"):this.hass.localize("ui.panel.config.automation.editor.actions.disable")}
            </mwc-list-item>
            <mwc-list-item class="warning">
              ${this.hass.localize("ui.panel.config.automation.editor.actions.delete")}
            </mwc-list-item>
          </ha-button-menu>
        </div>
        <div
          class="card-content ${!1===this.action.enabled?"disabled":""}"
        >
          ${this._warnings?k`<ha-alert
                alert-type="warning"
                .title=${this.hass.localize("ui.errors.config.editor_not_supported")}
              >
                ${this._warnings.length>0&&void 0!==this._warnings[0]?k` <ul>
                      ${this._warnings.map((e=>k`<li>${e}</li>`))}
                    </ul>`:""}
                ${this.hass.localize("ui.errors.config.edit_in_yaml_supported")}
              </ha-alert>`:""}
          ${t?k`
                ${void 0===e?k`
                      ${this.hass.localize("ui.panel.config.automation.editor.actions.unsupported_action","action",e)}
                    `:""}
                <h2>
                  ${this.hass.localize("ui.panel.config.automation.editor.edit_yaml")}
                </h2>
                <ha-yaml-editor
                  .hass=${this.hass}
                  .defaultValue=${this.action}
                  @value-changed=${this._onYamlChange}
                ></ha-yaml-editor>
              `:k`
                <ha-select
                  .label=${this.hass.localize("ui.panel.config.automation.editor.actions.type_select")}
                  .value=${jd(this.action)}
                  naturalMenuWidth
                  @selected=${this._typeChanged}
                >
                  ${this._processedTypes(this.hass.localize).map((([e,t])=>k`
                      <mwc-list-item .value=${e}>${t}</mwc-list-item>
                    `))}
                </ha-select>

                <div @ui-mode-not-available=${this._handleUiModeNotAvailable}>
                  ${za(`ha-automation-action-${e}`,{hass:this.hass,action:this.action,narrow:this.narrow})}
                </div>
              `}
        </div>
      </ha-card>
    `}},{kind:"method",key:"_handleUiModeNotAvailable",value:function(e){e.stopPropagation(),this._warnings=bn(this.hass,e.detail).warnings,this._yamlMode||(this._yamlMode=!0)}},{kind:"method",key:"_moveUp",value:function(){e(this,"move-action",{direction:"up"})}},{kind:"method",key:"_moveDown",value:function(){e(this,"move-action",{direction:"down"})}},{kind:"method",key:"_handleAction",value:function(t){switch(t.detail.index){case 0:this._runAction();break;case 1:this._switchYamlMode();break;case 2:e(this,"duplicate");break;case 3:this._onDisable();break;case 4:this._onDelete()}}},{kind:"method",key:"_onDisable",value:function(){var t;const i=!(null===(t=this.action.enabled)||void 0===t||t),a={...this.action,enabled:i};var n;(e(this,"value-changed",{value:a}),this._yamlMode)&&(null===(n=this._yamlEditor)||void 0===n||n.setValue(a))}},{kind:"method",key:"_runAction",value:async function(){const e=await xn(this.hass,{action:this.action});if(e.action.valid){try{await(t=this.hass,i=this.action,t.callWS({type:"execute_script",sequence:i}))}catch(e){return void La(this,{title:this.hass.localize("ui.panel.config.automation.editor.actions.run_action_error"),text:e.message||e})}var t,i;En(this,{message:this.hass.localize("ui.panel.config.automation.editor.actions.run_action_success")})}else La(this,{title:this.hass.localize("ui.panel.config.automation.editor.actions.invalid_action"),text:e.action.error})}},{kind:"method",key:"_onDelete",value:function(){Sa(this,{text:this.hass.localize("ui.panel.config.automation.editor.actions.delete_confirm"),dismissText:this.hass.localize("ui.common.cancel"),confirmText:this.hass.localize("ui.common.delete"),confirm:()=>{e(this,"value-changed",{value:null})}})}},{kind:"method",key:"_typeChanged",value:function(t){const i=t.target.value;if(i&&(this._uiModeAvailable=Vd.includes(i),this._uiModeAvailable||this._yamlMode||(this._yamlMode=!1),i!==jd(this.action))){const t=customElements.get(`ha-automation-action-${i}`);e(this,"value-changed",{value:{...t.defaultConfig}})}}},{kind:"method",key:"_onYamlChange",value:function(t){t.stopPropagation(),t.detail.isValid&&e(this,"value-changed",{value:t.detail.value})}},{kind:"method",key:"_switchYamlMode",value:function(){this._warnings=void 0,this._yamlMode=!this._yamlMode}},{kind:"get",static:!0,key:"styles",value:function(){return[Hi,i`
        .disabled {
          opacity: 0.5;
          pointer-events: none;
        }
        .card-content {
          padding-top: 16px;
          margin-top: 0;
        }
        .disabled-bar {
          background: var(--divider-color, #e0e0e0);
          text-align: center;
          border-top-right-radius: var(--ha-card-border-radius);
          border-top-left-radius: var(--ha-card-border-radius);
        }
        .card-menu {
          float: var(--float-end, right);
          z-index: 3;
          margin: 4px;
          --mdc-theme-text-primary-on-background: var(--primary-text-color);
          display: flex;
          align-items: center;
        }
        mwc-list-item[disabled] {
          --mdc-theme-text-primary-on-background: var(--disabled-text-color);
        }
        .warning {
          margin-bottom: 8px;
        }
        .warning ul {
          margin: 4px 0;
        }
        ha-select {
          margin-bottom: 24px;
        }
      `]}}]}}),m),v([w("ha-automation-action")],(function(t,a){return{F:class extends a{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"narrow",value:()=>!1},{kind:"field",decorators:[f()],key:"actions",value:void 0},{kind:"method",key:"render",value:function(){return k`
      ${this.actions.map(((e,t)=>k`
          <ha-automation-action-row
            .index=${t}
            .totalActions=${this.actions.length}
            .action=${e}
            .narrow=${this.narrow}
            @duplicate=${this._duplicateAction}
            @move-action=${this._move}
            @value-changed=${this._actionChanged}
            .hass=${this.hass}
          ></ha-automation-action-row>
        `))}
      <ha-card outlined>
        <div class="card-actions add-card">
          <mwc-button @click=${this._addAction}>
            ${this.hass.localize("ui.panel.config.automation.editor.actions.add")}
          </mwc-button>
        </div>
      </ha-card>
    `}},{kind:"method",key:"_addAction",value:function(){const t=this.actions.concat({...cd.defaultConfig});e(this,"value-changed",{value:t})}},{kind:"method",key:"_move",value:function(t){t.stopPropagation();const i=t.target.index,a="up"===t.detail.direction?i-1:i+1,n=this.actions.concat(),o=n.splice(i,1)[0];n.splice(a,0,o),e(this,"value-changed",{value:n})}},{kind:"method",key:"_actionChanged",value:function(t){t.stopPropagation();const i=[...this.actions],a=t.detail.value,n=t.target.index;null===a?i.splice(n,1):i[n]=a,e(this,"value-changed",{value:i})}},{kind:"method",key:"_duplicateAction",value:function(t){t.stopPropagation();const i=t.target.index;e(this,"value-changed",{value:this.actions.concat(Ya(this.actions[i]))})}},{kind:"get",static:!0,key:"styles",value:function(){return i`
      ha-automation-action-row,
      ha-card {
        display: block;
        margin-top: 16px;
      }
      .add-card mwc-button {
        display: block;
        text-align: center;
      }
    `}}]}}),m),v([w("ha-selector-action")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[f()],key:"hass",value:void 0},{kind:"field",decorators:[f()],key:"selector",value:void 0},{kind:"field",decorators:[f()],key:"value",value:void 0},{kind:"field",decorators:[f()],key:"label",value:void 0},{kind:"field",decorators:[f({type:Boolean,reflect:!0})],key:"disabled",value:()=>!1},{kind:"method",key:"render",value:function(){return k`<ha-automation-action
      .disabled=${this.disabled}
      .actions=${this.value||[]}
      .hass=${this.hass}
    ></ha-automation-action>`}},{kind:"get",static:!0,key:"styles",value:function(){return i`
      ha-automation-action {
        display: block;
        margin-bottom: 16px;
      }
      :host([disabled]) ha-automation-action {
        opacity: var(--light-disabled-opacity);
        pointer-events: none;
      }
    `}}]}}),m);const Rd=async e=>((e,t,i,a)=>{const[n,o,s]=e.split(".",3);return Number(n)>t||Number(n)===t&&(void 0===a?Number(o)>=i:Number(o)>i)||void 0!==a&&Number(n)===t&&Number(o)===i&&Number(s)>=a})(e.config.version,2021,2,4)?e.callWS({type:"supervisor/api",endpoint:"/addons",method:"get"}):(await e.callApi("GET","hassio/addons")).data,Ud=e=>k`<mwc-list-item twoline graphic="icon">
  <span>${e.name}</span>
  <span slot="secondary">${e.slug}</span>
  ${e.icon?k`<img slot="graphic" .src="/api/hassio/addons/${e.slug}/icon" />`:""}
</mwc-list-item>`;v([w("ha-addon-picker")],(function(t,i){return{F:class extends i{constructor(...e){super(...e),t(this)}},d:[{kind:"field",key:"hass",value:void 0},{kind:"field",decorators:[f()],key:"label",value:void 0},{kind:"field",decorators:[f()],key:"value",value:()=>""},{kind:"field",decorators:[f()],key:"helper",value:void 0},{kind:"field",decorators:[Vi()],key:"_addons",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[f({type:Boolean})],key:"required",value:()=>!1},{kind:"field",decorators:[g("ha-combo-box")],key:"_comboBox",value:void 0},{kind:"method",key:"open",value:function(){var e;null===(e=this._comboBox)||void 0===e||e.open()}},{kind:"method",key:"focus",value:function(){var e;null===(e=this._comboBox)||void 0===e||e.focus()}},{kind:"method",key:"firstUpdated",value:function(){this._getAddons()}},{kind:"method",key:"render",value:function(){return this._addons?k`
      <ha-combo-box
        .hass=${this.hass}
        .label=${void 0===this.label&&this.hass?this.hass.localize("ui.components.addon-picker.addon"):this.label}
        .value=${this._value}
        .required=${this.required}
        .disabled=${this.disabled}
        .helper=${this.helper}
        .renderer=${Ud}
        .items=${this._addons}
        item-value-path="slug"
        item-id-path="slug"
        item-label-path="name"
        @value-changed=${this._addonChanged}
      ></ha-combo-box>
    `:k``}},{kind:"method",key:"_getAddons",value:async function(){try{if(Na(this.hass,"hassio")){const e=await Rd(this.hass);this._addons=e.addons.filter((e=>e.version)).sort(((e,t)=>Za(e.name,t.name)))}else La(this,{title:this.hass.localize("ui.componencts.addon-picker.error.no_supervisor.title"),text:this.hass.localize("ui.componencts.addon-picker.error.no_supervisor.description")})}catch(e){La(this,{title:this.hass.localize("ui.componencts.addon-picker.error.fetch_addons.title"),text:this.hass.localize("ui.componencts.addon-picker.error.fetch_addons.description")})}}},{kind:"get",key:"_value",value:function(){return this.value||""}},{kind:"method",key:"_addonChanged",value:function(e){e.stopPropagation();const t=e.detail.value;t!==this._value&&this._setValue(t)}},{kind:"method",key:"_setValue",value:function(t){this.value=t,setTimeout((()=>{e(this,"value-changed",{value:t}),e(this,"change")}),0)}}]}}),m),v([w("ha-selector-addon")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[f()],key:"hass",value:void 0},{kind:"field",decorators:[f()],key:"selector",value:void 0},{kind:"field",decorators:[f()],key:"value",value:void 0},{kind:"field",decorators:[f()],key:"label",value:void 0},{kind:"field",decorators:[f()],key:"helper",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[f({type:Boolean})],key:"required",value:()=>!0},{kind:"method",key:"render",value:function(){return k`<ha-addon-picker
      .hass=${this.hass}
      .value=${this.value}
      .label=${this.label}
      .helper=${this.helper}
      .disabled=${this.disabled}
      .required=${this.required}
      allow-custom-entity
    ></ha-addon-picker>`}},{kind:"field",static:!0,key:"styles",value:()=>i`
    ha-addon-picker {
      width: 100%;
    }
  `}]}}),m);const Hd=async(e,t,i,a,n,...o)=>{const s=n,r=s[e],l=r=>a&&a(n,r.result)!==r.cacheKey?(s[e]=void 0,Hd(e,t,i,a,n,...o)):r.result;if(r)return r instanceof Promise?r.then(l):l(r);const d=i(n,...o);return s[e]=d,d.then((i=>{s[e]={result:i,cacheKey:null==a?void 0:a(n,i)},setTimeout((()=>{s[e]=void 0}),t)}),(()=>{s[e]=void 0})),d},Gd=(e,t)=>e.callWS({type:"entity/source",entity_id:t}),Wd=(e,t)=>t?Gd(e,t):Hd("_entitySources",3e4,Gd,(e=>Object.keys(e.states).length),e),Kd=e=>k`<mwc-list-item
  class=${Xi({"add-new":"add_new"===e.area_id})}
>
  ${e.name}
</mwc-list-item>`;v([w("ha-area-picker")],(function(t,i){return{F:class extends i{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f()],key:"label",value:void 0},{kind:"field",decorators:[f()],key:"value",value:void 0},{kind:"field",decorators:[f()],key:"helper",value:void 0},{kind:"field",decorators:[f()],key:"placeholder",value:void 0},{kind:"field",decorators:[f({type:Boolean,attribute:"no-add"})],key:"noAdd",value:void 0},{kind:"field",decorators:[f({type:Array,attribute:"include-domains"})],key:"includeDomains",value:void 0},{kind:"field",decorators:[f({type:Array,attribute:"exclude-domains"})],key:"excludeDomains",value:void 0},{kind:"field",decorators:[f({type:Array,attribute:"include-device-classes"})],key:"includeDeviceClasses",value:void 0},{kind:"field",decorators:[f()],key:"deviceFilter",value:void 0},{kind:"field",decorators:[f()],key:"entityFilter",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"disabled",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"required",value:void 0},{kind:"field",decorators:[Vi()],key:"_areas",value:void 0},{kind:"field",decorators:[Vi()],key:"_devices",value:void 0},{kind:"field",decorators:[Vi()],key:"_entities",value:void 0},{kind:"field",decorators:[Vi()],key:"_opened",value:void 0},{kind:"field",decorators:[g("ha-combo-box",!0)],key:"comboBox",value:void 0},{kind:"field",key:"_filter",value:void 0},{kind:"field",key:"_init",value:()=>!1},{kind:"method",key:"hassSubscribe",value:function(){return[Dl(this.hass.connection,(e=>{this._areas=e})),jl(this.hass.connection,(e=>{this._devices=e})),Ul(this.hass.connection,(e=>{this._entities=e}))]}},{kind:"method",key:"open",value:function(){this.updateComplete.then((()=>{var e;null===(e=this.comboBox)||void 0===e||e.open()}))}},{kind:"method",key:"focus",value:function(){this.updateComplete.then((()=>{var e;null===(e=this.comboBox)||void 0===e||e.focus()}))}},{kind:"field",key:"_getAreas",value(){return Ri(((e,t,i,a,n,o,s,r,l)=>{if(!e.length)return[{area_id:"no_areas",name:this.hass.localize("ui.components.area-picker.no_areas"),picture:null}];const d={};let c,u;if(a||n||o){for(const e of i)e.device_id&&(e.device_id in d||(d[e.device_id]=[]),d[e.device_id].push(e));c=t,u=i.filter((e=>e.area_id))}else s&&(c=t),r&&(u=i.filter((e=>e.area_id)));a&&(c=c.filter((e=>{const t=d[e.id];return!(!t||!t.length)&&d[e.id].some((e=>a.includes(zn(e.entity_id))))})),u=u.filter((e=>a.includes(zn(e.entity_id))))),n&&(c=c.filter((e=>{const t=d[e.id];return!t||!t.length||i.every((e=>!n.includes(zn(e.entity_id))))})),u=u.filter((e=>!n.includes(zn(e.entity_id))))),o&&(c=c.filter((e=>{const t=d[e.id];return!(!t||!t.length)&&d[e.id].some((e=>{const t=this.hass.states[e.entity_id];return!!t&&(t.attributes.device_class&&o.includes(t.attributes.device_class))}))})),u=u.filter((e=>{const t=this.hass.states[e.entity_id];return t.attributes.device_class&&o.includes(t.attributes.device_class)}))),s&&(c=c.filter((e=>s(e)))),r&&(u=u.filter((e=>r(e))));let h,p=e;var v;(c&&(h=c.filter((e=>e.area_id)).map((e=>e.area_id))),u)&&(h=(null!==(v=h)&&void 0!==v?v:[]).concat(u.filter((e=>e.area_id)).map((e=>e.area_id))));return h&&(p=e.filter((e=>h.includes(e.area_id)))),p.length||(p=[{area_id:"no_areas",name:this.hass.localize("ui.components.area-picker.no_match"),picture:null}]),l?p:[...p,{area_id:"add_new",name:this.hass.localize("ui.components.area-picker.add_new"),picture:null}]}))}},{kind:"method",key:"updated",value:function(e){(!this._init&&this._devices&&this._areas&&this._entities||e.has("_opened")&&this._opened)&&(this._init=!0,this.comboBox.items=this._getAreas(this._areas,this._devices,this._entities,this.includeDomains,this.excludeDomains,this.includeDeviceClasses,this.deviceFilter,this.entityFilter,this.noAdd))}},{kind:"method",key:"render",value:function(){var e;return this._devices&&this._areas&&this._entities?k`
      <ha-combo-box
        .hass=${this.hass}
        .helper=${this.helper}
        item-value-path="area_id"
        item-id-path="area_id"
        item-label-path="name"
        .value=${this.value}
        .disabled=${this.disabled}
        .required=${this.required}
        .label=${void 0===this.label&&this.hass?this.hass.localize("ui.components.area-picker.area"):this.label}
        .placeholder=${this.placeholder?null===(e=this._area(this.placeholder))||void 0===e?void 0:e.name:void 0}
        .renderer=${Kd}
        @filter-changed=${this._filterChanged}
        @opened-changed=${this._openedChanged}
        @value-changed=${this._areaChanged}
      >
      </ha-combo-box>
    `:k``}},{kind:"field",key:"_area",value(){return Ri((e=>{var t;return null===(t=this._areas)||void 0===t?void 0:t.find((t=>t.area_id===e))}))}},{kind:"method",key:"_filterChanged",value:function(e){var t,i;(this._filter=e.detail.value,this._filter)?this.noAdd||0!==(null===(t=this.comboBox._comboBox.filteredItems)||void 0===t?void 0:t.length)?this.comboBox.filteredItems=null===(i=this.comboBox.items)||void 0===i?void 0:i.filter((e=>e.name.toLowerCase().includes(this._filter.toLowerCase()))):this.comboBox.filteredItems=[{area_id:"add_new_suggestion",name:this.hass.localize("ui.components.area-picker.add_new_sugestion",{name:this._filter}),picture:null}]:this.comboBox.filteredItems=this.comboBox.items}},{kind:"get",key:"_value",value:function(){return this.value||""}},{kind:"method",key:"_openedChanged",value:function(e){this._opened=e.detail.value}},{kind:"method",key:"_areaChanged",value:function(e){e.stopPropagation();let t=e.detail.value;"no_areas"===t&&(t=""),["add_new_suggestion","add_new"].includes(t)?(e.target.value=this._value,Ta(this,{title:this.hass.localize("ui.components.area-picker.add_dialog.title"),text:this.hass.localize("ui.components.area-picker.add_dialog.text"),confirmText:this.hass.localize("ui.components.area-picker.add_dialog.add"),inputLabel:this.hass.localize("ui.components.area-picker.add_dialog.name"),defaultValue:"add_new_suggestion"===t?this._filter:void 0,confirm:async e=>{var t,i;if(e)try{const a=await(t=this.hass,i={name:e},t.callWS({type:"config/area_registry/create",...i}));this._areas=[...this._areas,a],this.comboBox.filteredItems=this._getAreas(this._areas,this._devices,this._entities,this.includeDomains,this.excludeDomains,this.includeDeviceClasses,this.deviceFilter,this.entityFilter,this.noAdd),await this.updateComplete,await this.comboBox.updateComplete,this._setValue(a.area_id)}catch(e){La(this,{title:this.hass.localize("ui.components.area-picker.add_dialog.failed_create_area"),text:e.message})}}})):t!==this._value&&this._setValue(t)}},{kind:"method",key:"_setValue",value:function(t){this.value=t,setTimeout((()=>{e(this,"value-changed",{value:t}),e(this,"change")}),0)}}]}}),Hl(m)),v([w("ha-areas-picker")],(function(t,a){return{F:class extends a{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f()],key:"label",value:void 0},{kind:"field",decorators:[f()],key:"value",value:void 0},{kind:"field",decorators:[f()],key:"helper",value:void 0},{kind:"field",decorators:[f()],key:"placeholder",value:void 0},{kind:"field",decorators:[f({type:Boolean,attribute:"no-add"})],key:"noAdd",value:void 0},{kind:"field",decorators:[f({type:Array,attribute:"include-domains"})],key:"includeDomains",value:void 0},{kind:"field",decorators:[f({type:Array,attribute:"exclude-domains"})],key:"excludeDomains",value:void 0},{kind:"field",decorators:[f({type:Array,attribute:"include-device-classes"})],key:"includeDeviceClasses",value:void 0},{kind:"field",decorators:[f()],key:"deviceFilter",value:void 0},{kind:"field",decorators:[f()],key:"entityFilter",value:void 0},{kind:"field",decorators:[f({attribute:"picked-area-label"})],key:"pickedAreaLabel",value:void 0},{kind:"field",decorators:[f({attribute:"pick-area-label"})],key:"pickAreaLabel",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"disabled",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"required",value:void 0},{kind:"method",key:"render",value:function(){if(!this.hass)return k``;const e=this._currentAreas;return k`
      ${e.map((e=>k`
          <div>
            <ha-area-picker
              .curValue=${e}
              .noAdd=${this.noAdd}
              .hass=${this.hass}
              .value=${e}
              .label=${this.pickedAreaLabel}
              .includeDomains=${this.includeDomains}
              .excludeDomains=${this.excludeDomains}
              .includeDeviceClasses=${this.includeDeviceClasses}
              .deviceFilter=${this.deviceFilter}
              .entityFilter=${this.entityFilter}
              .disabled=${this.disabled}
              @value-changed=${this._areaChanged}
            ></ha-area-picker>
          </div>
        `))}
      <div>
        <ha-area-picker
          .noAdd=${this.noAdd}
          .hass=${this.hass}
          .label=${this.pickAreaLabel}
          .helper=${this.helper}
          .includeDomains=${this.includeDomains}
          .excludeDomains=${this.excludeDomains}
          .includeDeviceClasses=${this.includeDeviceClasses}
          .deviceFilter=${this.deviceFilter}
          .entityFilter=${this.entityFilter}
          .disabled=${this.disabled}
          .placeholder=${this.placeholder}
          .required=${this.required&&!e.length}
          @value-changed=${this._addArea}
        ></ha-area-picker>
      </div>
    `}},{kind:"get",key:"_currentAreas",value:function(){return this.value||[]}},{kind:"method",key:"_updateAreas",value:async function(t){this.value=t,e(this,"value-changed",{value:t})}},{kind:"method",key:"_areaChanged",value:function(e){e.stopPropagation();const t=e.currentTarget.curValue,i=e.detail.value;if(i===t)return;const a=this._currentAreas;i&&!a.includes(i)?this._updateAreas(a.map((e=>e===t?i:e))):this._updateAreas(a.filter((e=>e!==t)))}},{kind:"method",key:"_addArea",value:function(e){e.stopPropagation();const t=e.detail.value;if(!t)return;e.currentTarget.value="";const i=this._currentAreas;i.includes(t)||this._updateAreas([...i,t])}},{kind:"field",static:!0,key:"styles",value:()=>i`
    div {
      margin-top: 8px;
    }
  `}]}}),Hl(m)),v([w("ha-selector-area")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[f()],key:"hass",value:void 0},{kind:"field",decorators:[f()],key:"selector",value:void 0},{kind:"field",decorators:[f()],key:"value",value:void 0},{kind:"field",decorators:[f()],key:"label",value:void 0},{kind:"field",decorators:[f()],key:"helper",value:void 0},{kind:"field",decorators:[Vi()],key:"_entitySources",value:void 0},{kind:"field",decorators:[Vi()],key:"_entities",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[f({type:Boolean})],key:"required",value:()=>!0},{kind:"method",key:"hassSubscribe",value:function(){return[Ul(this.hass.connection,(e=>{this._entities=e.filter((e=>null!==e.device_id))}))]}},{kind:"method",key:"updated",value:function(e){var t,i;e.has("selector")&&(null!==(t=this.selector.area.device)&&void 0!==t&&t.integration||null!==(i=this.selector.area.entity)&&void 0!==i&&i.integration)&&!this._entitySources&&Wd(this.hass).then((e=>{this._entitySources=e}))}},{kind:"method",key:"render",value:function(){var e,t,i,a,n,o;return(null!==(e=this.selector.area.device)&&void 0!==e&&e.integration||null!==(t=this.selector.area.entity)&&void 0!==t&&t.integration)&&!this._entitySources?k``:this.selector.area.multiple?k`
      <ha-areas-picker
        .hass=${this.hass}
        .value=${this.value}
        .helper=${this.helper}
        .pickAreaLabel=${this.label}
        no-add
        .deviceFilter=${this._filterDevices}
        .entityFilter=${this._filterEntities}
        .includeDeviceClasses=${null!==(i=this.selector.area.entity)&&void 0!==i&&i.device_class?[this.selector.area.entity.device_class]:void 0}
        .includeDomains=${null!==(a=this.selector.area.entity)&&void 0!==a&&a.domain?[this.selector.area.entity.domain]:void 0}
        .disabled=${this.disabled}
        .required=${this.required}
      ></ha-areas-picker>
    `:k`
        <ha-area-picker
          .hass=${this.hass}
          .value=${this.value}
          .label=${this.label}
          .helper=${this.helper}
          no-add
          .deviceFilter=${this._filterDevices}
          .entityFilter=${this._filterEntities}
          .includeDeviceClasses=${null!==(n=this.selector.area.entity)&&void 0!==n&&n.device_class?[this.selector.area.entity.device_class]:void 0}
          .includeDomains=${null!==(o=this.selector.area.entity)&&void 0!==o&&o.domain?[this.selector.area.entity.domain]:void 0}
          .disabled=${this.disabled}
          .required=${this.required}
        ></ha-area-picker>
      `}},{kind:"field",key:"_filterEntities",value(){return e=>{var t,i,a;const n=null===(t=this.selector.area.entity)||void 0===t?void 0:t.integration;return!n||(null===(i=this._entitySources)||void 0===i||null===(a=i[e.entity_id])||void 0===a?void 0:a.domain)===n}}},{kind:"field",key:"_filterDevices",value(){return e=>{if(!this.selector.area.device)return!0;const{manufacturer:t,model:i,integration:a}=this.selector.area.device;if(t&&e.manufacturer!==t)return!1;if(i&&e.model!==i)return!1;if(a&&this._entitySources&&this._entities){var n;const t=this._deviceIntegrations(this._entitySources,this._entities);if(null==t||null===(n=t[e.id])||void 0===n||!n.includes(a))return!1}return!0}}},{kind:"field",key:"_deviceIntegrations",value:()=>Ri(((e,t)=>{const i={};for(const a of t){const t=e[a.entity_id];null!=t&&t.domain&&(i[a.device_id]||(i[a.device_id]=[]),i[a.device_id].push(t.domain))}return i}))}]}}),Hl(m));var Yd=/-u(?:-[0-9a-z]{2,8})+/gi;function Zd(e,t,i){if(void 0===i&&(i=Error),!e)throw new i(t)}function Qd(e,t){for(var i=t;;){if(e.has(i))return i;var a=i.lastIndexOf("-");if(!~a)return;a>=2&&"-"===i[a-2]&&(a-=2),i=i.slice(0,a)}}function Xd(e,t){Zd(2===t.length,"key must have 2 elements");var i=e.length,a="-".concat(t,"-"),n=e.indexOf(a);if(-1!==n){for(var o=n+4,s=o,r=o,l=!1;!l;){var d=e.indexOf("-",r);2===(-1===d?i-r:d-r)?l=!0:-1===d?(s=i,l=!0):(s=d,r=d+1)}return e.slice(o,s)}if(a="-".concat(t),-1!==(n=e.indexOf(a))&&n+3===i)return""}function Jd(e,t,i,a,n,o){var s;s="lookup"===i.localeMatcher?function(e,t,i){for(var a={locale:""},n=0,o=t;n<o.length;n++){var s=o[n],r=s.replace(Yd,""),l=Qd(e,r);if(l)return a.locale=l,s!==r&&(a.extension=s.slice(r.length+1,s.length)),a}return a.locale=i(),a}(e,t,o):function(e,t,i){var a,n={},o={},s={},r=new Set;e.forEach((function(e){var t=new Intl.Locale(e).minimize().toString(),i=Intl.getCanonicalLocales(e)[0]||e;n[t]=e,o[e]=e,s[i]=e,r.add(t),r.add(e),r.add(i)}));for(var l=0,d=t;l<d.length;l++){var c=d[l];if(a)break;var u=c.replace(Yd,"");if(e.has(u)){a=u;break}if(r.has(u)){a=u;break}var h=new Intl.Locale(u),p=h.maximize().toString(),v=h.minimize().toString();if(r.has(v)){a=v;break}a=Qd(r,p)}return a?{locale:o[a]||s[a]||n[a]||a}:{locale:i()}}(e,t,o);for(var r=s.locale,l={locale:"",dataLocale:r},d="-u",c=0,u=a;c<u.length;c++){var h=u[c];Zd(r in n,"Missing locale data for ".concat(r));var p=n[r];Zd("object"==typeof p&&null!==p,"locale data ".concat(h," must be an object"));var v=p[h];Zd(Array.isArray(v),"keyLocaleData for ".concat(h," must be an array"));var m=v[0];Zd("string"==typeof m||null===m,"value must be string or null but got ".concat(typeof m," in key ").concat(h));var f="";if(s.extension){var g=Xd(s.extension,h);void 0!==g&&(""!==g?~v.indexOf(g)&&(m=g,f="-".concat(h,"-").concat(m)):~g.indexOf("true")&&(m="true",f="-".concat(h)))}if(h in i){var _=i[h];Zd("string"==typeof _||null==_,"optionsValue must be String, Undefined or Null"),~v.indexOf(_)&&_!==m&&(m=_,f="")}l[h]=m,d+=f}if(d.length>2){var y=r.indexOf("-x-");if(-1===y)r+=d;else{var k=r.slice(0,y),b=r.slice(y,r.length);r=k+d+b}r=Intl.getCanonicalLocales(r)[0]}return l.locale=r,l}function ec(e,t,i,a){var n=t.reduce((function(e,t){return e.add(t),e}),new Set);return Jd(n,function(e){return Intl.getCanonicalLocales(e)}(e),{localeMatcher:(null==a?void 0:a.algorithm)||"best fit"},[],{},(function(){return i})).locale}var tc=Object.freeze({__proto__:null,match:ec,LookupSupportedLocales:function(e,t){for(var i=[],a=0,n=t;a<n.length;a++){var o=Qd(e,n[a].replace(Yd,""));o&&i.push(o)}return i},ResolveLocale:Jd}),ic=["af","ak","am","an","ar","ars","as","asa","ast","az","bal","be","bem","bez","bg","bho","bm","bn","bo","br","brx","bs","ca","ce","ceb","cgg","chr","ckb","cs","cy","da","de","doi","dsb","dv","dz","ee","el","en","eo","es","et","eu","fa","ff","fi","fil","fo","fr","fur","fy","ga","gd","gl","gsw","gu","guw","gv","ha","haw","he","hi","hnj","hr","hsb","hu","hy","ia","id","ig","ii","io","is","it","iu","ja","jbo","jgo","jmc","jv","jw","ka","kab","kaj","kcg","kde","kea","kk","kkj","kl","km","kn","ko","ks","ksb","ksh","ku","kw","ky","lag","lb","lg","lij","lkt","ln","lo","lt","lv","mas","mg","mgo","mk","ml","mn","mo","mr","ms","mt","my","nah","naq","nb","nd","ne","nl","nn","nnh","no","nqo","nr","nso","ny","nyn","om","or","os","osa","pa","pap","pcm","pl","prg","ps","pt-PT","pt","rm","ro","rof","ru","rwk","sah","saq","sat","sc","scn","sd","sdh","se","seh","ses","sg","sh","shi","si","sk","sl","sma","smi","smj","smn","sms","sn","so","sq","sr","ss","ssy","st","su","sv","sw","syr","ta","te","teo","th","ti","tig","tk","tl","tn","to","tpi","tr","ts","tzm","ug","uk","und","ur","uz","ve","vi","vo","vun","wa","wae","wo","xh","xog","yi","yo","yue","zh","zu"];var ac=Va((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.CanonicalizeLocaleList=void 0,t.CanonicalizeLocaleList=function(e){return Intl.getCanonicalLocales(e)}}));ja(ac),ac.CanonicalizeLocaleList;var nc=Va((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.invariant=t.UNICODE_EXTENSION_SEQUENCE_REGEX=void 0,t.UNICODE_EXTENSION_SEQUENCE_REGEX=/-u(?:-[0-9a-z]{2,8})+/gi,t.invariant=function(e,t,i){if(void 0===i&&(i=Error),!e)throw new i(t)}}));ja(nc),nc.invariant,nc.UNICODE_EXTENSION_SEQUENCE_REGEX;var oc=Va((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.BestAvailableLocale=void 0,t.BestAvailableLocale=function(e,t){for(var i=t;;){if(e.has(i))return i;var a=i.lastIndexOf("-");if(!~a)return;a>=2&&"-"===i[a-2]&&(a-=2),i=i.slice(0,a)}}}));ja(oc),oc.BestAvailableLocale;var sc=Va((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.LookupMatcher=void 0,t.LookupMatcher=function(e,t,i){for(var a={locale:""},n=0,o=t;n<o.length;n++){var s=o[n],r=s.replace(nc.UNICODE_EXTENSION_SEQUENCE_REGEX,""),l=(0,oc.BestAvailableLocale)(e,r);if(l)return a.locale=l,s!==r&&(a.extension=s.slice(r.length+1,s.length)),a}return a.locale=i(),a}}));ja(sc),sc.LookupMatcher;var rc=Va((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.BestFitMatcher=void 0,t.BestFitMatcher=function(e,t,i){var a,n={},o={},s={},r=new Set;e.forEach((function(e){var t=new Intl.Locale(e).minimize().toString(),i=Intl.getCanonicalLocales(e)[0]||e;n[t]=e,o[e]=e,s[i]=e,r.add(t),r.add(e),r.add(i)}));for(var l=0,d=t;l<d.length;l++){var c=d[l];if(a)break;var u=c.replace(nc.UNICODE_EXTENSION_SEQUENCE_REGEX,"");if(e.has(u)){a=u;break}if(r.has(u)){a=u;break}var h=new Intl.Locale(u),p=h.maximize().toString(),v=h.minimize().toString();if(r.has(v)){a=v;break}a=(0,oc.BestAvailableLocale)(r,p)}return a?{locale:o[a]||s[a]||n[a]||a}:{locale:i()}}}));ja(rc),rc.BestFitMatcher;var lc=Va((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.UnicodeExtensionValue=void 0,t.UnicodeExtensionValue=function(e,t){(0,nc.invariant)(2===t.length,"key must have 2 elements");var i=e.length,a="-".concat(t,"-"),n=e.indexOf(a);if(-1!==n){for(var o=n+4,s=o,r=o,l=!1;!l;){var d=e.indexOf("-",r);2===(-1===d?i-r:d-r)?l=!0:-1===d?(s=i,l=!0):(s=d,r=d+1)}return e.slice(o,s)}if(a="-".concat(t),-1!==(n=e.indexOf(a))&&n+3===i)return""}}));ja(lc),lc.UnicodeExtensionValue;var dc=Va((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ResolveLocale=void 0,t.ResolveLocale=function(e,t,i,a,n,o){for(var s,r=(s="lookup"===i.localeMatcher?(0,sc.LookupMatcher)(e,t,o):(0,rc.BestFitMatcher)(e,t,o)).locale,l={locale:"",dataLocale:r},d="-u",c=0,u=a;c<u.length;c++){var h=u[c];(0,nc.invariant)(r in n,"Missing locale data for ".concat(r));var p=n[r];(0,nc.invariant)("object"==typeof p&&null!==p,"locale data ".concat(h," must be an object"));var v=p[h];(0,nc.invariant)(Array.isArray(v),"keyLocaleData for ".concat(h," must be an array"));var m=v[0];(0,nc.invariant)("string"==typeof m||null===m,"value must be string or null but got ".concat(typeof m," in key ").concat(h));var f="";if(s.extension){var g=(0,lc.UnicodeExtensionValue)(s.extension,h);void 0!==g&&(""!==g?~v.indexOf(g)&&(m=g,f="-".concat(h,"-").concat(m)):~g.indexOf("true")&&(m="true",f="-".concat(h)))}if(h in i){var _=i[h];(0,nc.invariant)("string"==typeof _||null==_,"optionsValue must be String, Undefined or Null"),~v.indexOf(_)&&_!==m&&(m=_,f="")}l[h]=m,d+=f}if(d.length>2){var y=r.indexOf("-x-");if(-1===y)r+=d;else{var k=r.slice(0,y),b=r.slice(y,r.length);r=k+d+b}r=Intl.getCanonicalLocales(r)[0]}return l.locale=r,l}}));ja(dc),dc.ResolveLocale;var cc=Va((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.LookupSupportedLocales=void 0,t.LookupSupportedLocales=function(e,t){for(var i=[],a=0,n=t;a<n.length;a++){var o=n[a].replace(nc.UNICODE_EXTENSION_SEQUENCE_REGEX,""),s=(0,oc.BestAvailableLocale)(e,o);s&&i.push(s)}return i}}));ja(cc),cc.LookupSupportedLocales;var uc=Va((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ResolveLocale=t.LookupSupportedLocales=t.match=void 0,t.match=function(e,t,i,a){var n=t.reduce((function(e,t){return e.add(t),e}),new Set);return(0,dc.ResolveLocale)(n,(0,ac.CanonicalizeLocaleList)(e),{localeMatcher:(null==a?void 0:a.algorithm)||"best fit"},[],{},(function(){return i})).locale},Object.defineProperty(t,"LookupSupportedLocales",{enumerable:!0,get:function(){return cc.LookupSupportedLocales}});var i=dc;Object.defineProperty(t,"ResolveLocale",{enumerable:!0,get:function(){return i.ResolveLocale}})}));ja(uc);var hc=uc.ResolveLocale,pc=uc.LookupSupportedLocales,vc=uc.match,mc=["af-NA","af","agq","ak","am","ar-AE","ar-BH","ar-DJ","ar-DZ","ar-EG","ar-EH","ar-ER","ar-IL","ar-IQ","ar-JO","ar-KM","ar-KW","ar-LB","ar-LY","ar-MA","ar-MR","ar-OM","ar-PS","ar-QA","ar-SA","ar-SD","ar-SO","ar-SS","ar-SY","ar-TD","ar-TN","ar-YE","ar","as","asa","ast","az-Cyrl","az-Latn","az","bas","be-tarask","be","bem","bez","bg","bm","bn-IN","bn","bo-IN","bo","br","brx","bs-Cyrl","bs-Latn","bs","ca-AD","ca-ES-valencia","ca-FR","ca-IT","ca","ccp-IN","ccp","ce","ceb","cgg","chr","ckb-IR","ckb","cs","cy","da-GL","da","dav","de-AT","de-BE","de-CH","de-IT","de-LI","de-LU","de","dje","doi","dsb","dua","dyo","dz","ebu","ee-TG","ee","el-CY","el","en-001","en-150","en-AE","en-AG","en-AI","en-AS","en-AT","en-AU","en-BB","en-BE","en-BI","en-BM","en-BS","en-BW","en-BZ","en-CA","en-CC","en-CH","en-CK","en-CM","en-CX","en-CY","en-DE","en-DG","en-DK","en-DM","en-ER","en-FI","en-FJ","en-FK","en-FM","en-GB","en-GD","en-GG","en-GH","en-GI","en-GM","en-GU","en-GY","en-HK","en-IE","en-IL","en-IM","en-IN","en-IO","en-JE","en-JM","en-KE","en-KI","en-KN","en-KY","en-LC","en-LR","en-LS","en-MG","en-MH","en-MO","en-MP","en-MS","en-MT","en-MU","en-MW","en-MY","en-NA","en-NF","en-NG","en-NL","en-NR","en-NU","en-NZ","en-PG","en-PH","en-PK","en-PN","en-PR","en-PW","en-RW","en-SB","en-SC","en-SD","en-SE","en-SG","en-SH","en-SI","en-SL","en-SS","en-SX","en-SZ","en-TC","en-TK","en-TO","en-TT","en-TV","en-TZ","en-UG","en-UM","en-VC","en-VG","en-VI","en-VU","en-WS","en-ZA","en-ZM","en-ZW","en","eo","es-419","es-AR","es-BO","es-BR","es-BZ","es-CL","es-CO","es-CR","es-CU","es-DO","es-EA","es-EC","es-GQ","es-GT","es-HN","es-IC","es-MX","es-NI","es-PA","es-PE","es-PH","es-PR","es-PY","es-SV","es-US","es-UY","es-VE","es","et","eu","ewo","fa-AF","fa","ff-Adlm-BF","ff-Adlm-CM","ff-Adlm-GH","ff-Adlm-GM","ff-Adlm-GW","ff-Adlm-LR","ff-Adlm-MR","ff-Adlm-NE","ff-Adlm-NG","ff-Adlm-SL","ff-Adlm-SN","ff-Adlm","ff-Latn-BF","ff-Latn-CM","ff-Latn-GH","ff-Latn-GM","ff-Latn-GN","ff-Latn-GW","ff-Latn-LR","ff-Latn-MR","ff-Latn-NE","ff-Latn-NG","ff-Latn-SL","ff-Latn","ff","fi","fil","fo-DK","fo","fr-BE","fr-BF","fr-BI","fr-BJ","fr-BL","fr-CA","fr-CD","fr-CF","fr-CG","fr-CH","fr-CI","fr-CM","fr-DJ","fr-DZ","fr-GA","fr-GF","fr-GN","fr-GP","fr-GQ","fr-HT","fr-KM","fr-LU","fr-MA","fr-MC","fr-MF","fr-MG","fr-ML","fr-MQ","fr-MR","fr-MU","fr-NC","fr-NE","fr-PF","fr-PM","fr-RE","fr-RW","fr-SC","fr-SN","fr-SY","fr-TD","fr-TG","fr-TN","fr-VU","fr-WF","fr-YT","fr","fur","fy","ga-GB","ga","gd","gl","gsw-FR","gsw-LI","gsw","gu","guz","gv","ha-GH","ha-NE","ha","haw","he","hi","hr-BA","hr","hsb","hu","hy","ia","id","ig","ii","is","it-CH","it-SM","it-VA","it","ja","jgo","jmc","jv","ka","kab","kam","kde","kea","kgp","khq","ki","kk","kkj","kl","kln","km","kn","ko-KP","ko","kok","ks-Arab","ks","ksb","ksf","ksh","ku","kw","ky","lag","lb","lg","lkt","ln-AO","ln-CF","ln-CG","ln","lo","lrc-IQ","lrc","lt","lu","luo","luy","lv","mai","mas-TZ","mas","mer","mfe","mg","mgh","mgo","mi","mk","ml","mn","mni-Beng","mni","mr","ms-BN","ms-ID","ms-SG","ms","mt","mua","my","mzn","naq","nb-SJ","nb","nd","nds-NL","nds","ne-IN","ne","nl-AW","nl-BE","nl-BQ","nl-CW","nl-SR","nl-SX","nl","nmg","nn","nnh","no","nus","nyn","om-KE","om","or","os-RU","os","pa-Arab","pa-Guru","pa","pcm","pl","ps-PK","ps","pt-AO","pt-CH","pt-CV","pt-GQ","pt-GW","pt-LU","pt-MO","pt-MZ","pt-PT","pt-ST","pt-TL","pt","qu-BO","qu-EC","qu","rm","rn","ro-MD","ro","rof","ru-BY","ru-KG","ru-KZ","ru-MD","ru-UA","ru","rw","rwk","sa","sah","saq","sat-Olck","sat","sbp","sc","sd-Arab","sd-Deva","sd","se-FI","se-SE","se","seh","ses","sg","shi-Latn","shi-Tfng","shi","si","sk","sl","smn","sn","so-DJ","so-ET","so-KE","so","sq-MK","sq-XK","sq","sr-Cyrl-BA","sr-Cyrl-ME","sr-Cyrl-XK","sr-Cyrl","sr-Latn-BA","sr-Latn-ME","sr-Latn-XK","sr-Latn","sr","su-Latn","su","sv-AX","sv-FI","sv","sw-CD","sw-KE","sw-UG","sw","ta-LK","ta-MY","ta-SG","ta","te","teo-KE","teo","tg","th","ti-ER","ti","tk","to","tr-CY","tr","tt","twq","tzm","ug","uk","und","ur-IN","ur","uz-Arab","uz-Cyrl","uz-Latn","uz","vai-Latn","vai-Vaii","vai","vi","vun","wae","wo","xh","xog","yav","yi","yo-BJ","yo","yrl-CO","yrl-VE","yrl","yue-Hans","yue-Hant","yue","zgh","zh-Hans-HK","zh-Hans-MO","zh-Hans-SG","zh-Hans","zh-Hant-HK","zh-Hant-MO","zh-Hant","zh","zu"];var fc=["af-NA","af","agq","ak","am","ar-AE","ar-BH","ar-DJ","ar-DZ","ar-EG","ar-EH","ar-ER","ar-IL","ar-IQ","ar-JO","ar-KM","ar-KW","ar-LB","ar-LY","ar-MA","ar-MR","ar-OM","ar-PS","ar-QA","ar-SA","ar-SD","ar-SO","ar-SS","ar-SY","ar-TD","ar-TN","ar-YE","ar","as","asa","ast","az-Cyrl","az-Latn","az","bas","be-tarask","be","bem","bez","bg","bm","bn-IN","bn","bo-IN","bo","br","brx","bs-Cyrl","bs-Latn","bs","ca-AD","ca-ES-valencia","ca-FR","ca-IT","ca","ccp-IN","ccp","ce","ceb","cgg","chr","ckb-IR","ckb","cs","cy","da-GL","da","dav","de-AT","de-BE","de-CH","de-IT","de-LI","de-LU","de","dje","doi","dsb","dua","dyo","dz","ebu","ee-TG","ee","el-CY","el","en-001","en-150","en-AE","en-AG","en-AI","en-AS","en-AT","en-AU","en-BB","en-BE","en-BI","en-BM","en-BS","en-BW","en-BZ","en-CA","en-CC","en-CH","en-CK","en-CM","en-CX","en-CY","en-DE","en-DG","en-DK","en-DM","en-ER","en-FI","en-FJ","en-FK","en-FM","en-GB","en-GD","en-GG","en-GH","en-GI","en-GM","en-GU","en-GY","en-HK","en-IE","en-IL","en-IM","en-IN","en-IO","en-JE","en-JM","en-KE","en-KI","en-KN","en-KY","en-LC","en-LR","en-LS","en-MG","en-MH","en-MO","en-MP","en-MS","en-MT","en-MU","en-MW","en-MY","en-NA","en-NF","en-NG","en-NL","en-NR","en-NU","en-NZ","en-PG","en-PH","en-PK","en-PN","en-PR","en-PW","en-RW","en-SB","en-SC","en-SD","en-SE","en-SG","en-SH","en-SI","en-SL","en-SS","en-SX","en-SZ","en-TC","en-TK","en-TO","en-TT","en-TV","en-TZ","en-UG","en-UM","en-VC","en-VG","en-VI","en-VU","en-WS","en-ZA","en-ZM","en-ZW","en","eo","es-419","es-AR","es-BO","es-BR","es-BZ","es-CL","es-CO","es-CR","es-CU","es-DO","es-EA","es-EC","es-GQ","es-GT","es-HN","es-IC","es-MX","es-NI","es-PA","es-PE","es-PH","es-PR","es-PY","es-SV","es-US","es-UY","es-VE","es","et","eu","ewo","fa-AF","fa","ff-Adlm-BF","ff-Adlm-CM","ff-Adlm-GH","ff-Adlm-GM","ff-Adlm-GW","ff-Adlm-LR","ff-Adlm-MR","ff-Adlm-NE","ff-Adlm-NG","ff-Adlm-SL","ff-Adlm-SN","ff-Adlm","ff-Latn-BF","ff-Latn-CM","ff-Latn-GH","ff-Latn-GM","ff-Latn-GN","ff-Latn-GW","ff-Latn-LR","ff-Latn-MR","ff-Latn-NE","ff-Latn-NG","ff-Latn-SL","ff-Latn","ff","fi","fil","fo-DK","fo","fr-BE","fr-BF","fr-BI","fr-BJ","fr-BL","fr-CA","fr-CD","fr-CF","fr-CG","fr-CH","fr-CI","fr-CM","fr-DJ","fr-DZ","fr-GA","fr-GF","fr-GN","fr-GP","fr-GQ","fr-HT","fr-KM","fr-LU","fr-MA","fr-MC","fr-MF","fr-MG","fr-ML","fr-MQ","fr-MR","fr-MU","fr-NC","fr-NE","fr-PF","fr-PM","fr-RE","fr-RW","fr-SC","fr-SN","fr-SY","fr-TD","fr-TG","fr-TN","fr-VU","fr-WF","fr-YT","fr","fur","fy","ga-GB","ga","gd","gl","gsw-FR","gsw-LI","gsw","gu","guz","gv","ha-GH","ha-NE","ha","haw","he","hi","hr-BA","hr","hsb","hu","hy","ia","id","ig","ii","is","it-CH","it-SM","it-VA","it","ja","jgo","jmc","jv","ka","kab","kam","kde","kea","kgp","khq","ki","kk","kkj","kl","kln","km","kn","ko-KP","ko","kok","ks-Arab","ks","ksb","ksf","ksh","ku","kw","ky","lag","lb","lg","lkt","ln-AO","ln-CF","ln-CG","ln","lo","lrc-IQ","lrc","lt","lu","luo","luy","lv","mai","mas-TZ","mas","mer","mfe","mg","mgh","mgo","mi","mk","ml","mn","mni-Beng","mni","mr","ms-BN","ms-ID","ms-SG","ms","mt","mua","my","mzn","naq","nb-SJ","nb","nd","nds-NL","nds","ne-IN","ne","nl-AW","nl-BE","nl-BQ","nl-CW","nl-SR","nl-SX","nl","nmg","nn","nnh","no","nus","nyn","om-KE","om","or","os-RU","os","pa-Arab","pa-Guru","pa","pcm","pl","ps-PK","ps","pt-AO","pt-CH","pt-CV","pt-GQ","pt-GW","pt-LU","pt-MO","pt-MZ","pt-PT","pt-ST","pt-TL","pt","qu-BO","qu-EC","qu","rm","rn","ro-MD","ro","rof","ru-BY","ru-KG","ru-KZ","ru-MD","ru-UA","ru","rw","rwk","sa","sah","saq","sat-Olck","sat","sbp","sc","sd-Arab","sd-Deva","sd","se-FI","se-SE","se","seh","ses","sg","shi-Latn","shi-Tfng","shi","si","sk","sl","smn","sn","so-DJ","so-ET","so-KE","so","sq-MK","sq-XK","sq","sr-Cyrl-BA","sr-Cyrl-ME","sr-Cyrl-XK","sr-Cyrl","sr-Latn-BA","sr-Latn-ME","sr-Latn-XK","sr-Latn","sr","su-Latn","su","sv-AX","sv-FI","sv","sw-CD","sw-KE","sw-UG","sw","ta-LK","ta-MY","ta-SG","ta","te","teo-KE","teo","tg","th","ti-ER","ti","tk","to","tr-CY","tr","tt","twq","tzm","ug","uk","und","ur-IN","ur","uz-Arab","uz-Cyrl","uz-Latn","uz","vai-Latn","vai-Vaii","vai","vi","vun","wae","wo","xh","xog","yav","yi","yo-BJ","yo","yrl-CO","yrl-VE","yrl","yue-Hans","yue-Hant","yue","zgh","zh-Hans-HK","zh-Hans-MO","zh-Hans-SG","zh-Hans","zh-Hant-HK","zh-Hant-MO","zh-Hant","zh","zu"];const gc={},_c=window.localStorage||{},yc={"zh-cn":"zh-Hans","zh-sg":"zh-Hans","zh-my":"zh-Hans","zh-tw":"zh-Hant","zh-hk":"zh-Hant","zh-mo":"zh-Hant",zh:"zh-Hant"};function kc(e){if(e in gc.translations)return e;const t=e.toLowerCase();if(t in yc)return yc[t];const i=Object.keys(gc.translations).find((e=>e.toLowerCase()===t));return i||(e.includes("-")?kc(e.split("-")[0]):void 0)}const bc=new Set,xc=[];"Locale"in Intl&&!function(){try{return"x-private"===new Intl.Locale("und-x-private").toString()}catch(e){return!0}}()||xc.push(import("./c.f4178207.js")),function(e){if(void 0===e&&(e="en"),!("PluralRules"in Intl)||"one"===new Intl.PluralRules("en",{minimumFractionDigits:2}).select(1)||!function(e){if(!e)return!0;var t=Array.isArray(e)?e:[e];return Intl.PluralRules.supportedLocalesOf(t).length===t.length}(e))return e?ec([e],ic,"en"):void 0}()&&(xc.push(import("./c.e4d174e7.js")),xc.push(import("./c.e23b0d0b.js"))),function(e){if(void 0===e&&(e="en"),!("RelativeTimeFormat"in Intl)||!function(e){if(!e)return!0;var t=Array.isArray(e)?e:[e];return Intl.RelativeTimeFormat.supportedLocalesOf(t).length===t.length}(e)||!function(e){try{return"numberingSystem"in new Intl.RelativeTimeFormat(e||"en",{numeric:"auto"}).resolvedOptions()}catch(e){return!1}}(e))return vc([e],mc,"en")}()&&xc.push(import("./c.6764b15a.js")),function(e){if(void 0===e&&(e="en"),!("DateTimeFormat"in Intl)||!("formatToParts"in Intl.DateTimeFormat.prototype)||!("formatRange"in Intl.DateTimeFormat.prototype)||function(){try{return"dayPeriod"!==new Intl.DateTimeFormat("en",{hourCycle:"h11",hour:"numeric"}).formatToParts(0)[2].type}catch(e){return!1}}()||function(){try{return!!new Intl.DateTimeFormat("en",{dateStyle:"short",hour:"numeric"}).format(new Date(0))}catch(e){return!1}}()||!function(){try{return!!new Intl.DateTimeFormat(void 0,{dateStyle:"short"}).resolvedOptions().dateStyle}catch(e){return!1}}()||!function(e){if(!e)return!0;var t=Array.isArray(e)?e:[e];return Intl.DateTimeFormat.supportedLocalesOf(t).length===t.length}(e))return e?vc([e],fc,"en"):void 0}()&&(xc.push(import("./c.4d3573a6.js")),xc.push(import("./c.ad739743.js")));const $c=0===xc.length?void 0:Promise.all(xc).then((()=>wc(function(){let e=null;if(_c.selectedLanguage)try{const t=JSON.parse(_c.selectedLanguage);if(t&&(e=kc(t),e))return e}catch(e){}if(navigator.languages)for(const t of navigator.languages)if(e=kc(t),e)return e;return e=kc(navigator.language),e||"en"}()))),wc=async e=>{if(!bc.has(e)){bc.add(e);try{if(Intl.NumberFormat&&"function"==typeof Intl.NumberFormat.__addLocaleData){const t=await fetch(`/static/locale-data/intl-numberformat/${e}.json`);Intl.NumberFormat.__addLocaleData(await t.json())}if(Intl.RelativeTimeFormat&&"function"==typeof Intl.RelativeTimeFormat.__addLocaleData){const t=await fetch(`/static/locale-data/intl-relativetimeformat/${e}.json`);Intl.RelativeTimeFormat.__addLocaleData(await t.json())}if(Intl.DateTimeFormat&&"function"==typeof Intl.DateTimeFormat.__addLocaleData){const t=await fetch(`/static/locale-data/intl-datetimeformat/${e}.json`);Intl.DateTimeFormat.__addLocaleData(await t.json())}}catch(e){}}};$c&&await $c,Ri((e=>new Intl.DateTimeFormat(e.language,{weekday:"long",month:"long",day:"numeric"}))),Ri((e=>new Intl.DateTimeFormat(e.language,{year:"numeric",month:"long",day:"numeric"})));const Cc=Ri((e=>new Intl.DateTimeFormat(e.language,{year:"numeric",month:"numeric",day:"numeric"})));Ri((e=>new Intl.DateTimeFormat(e.language,{day:"numeric",month:"short"}))),Ri((e=>new Intl.DateTimeFormat(e.language,{month:"long",year:"numeric"}))),Ri((e=>new Intl.DateTimeFormat(e.language,{month:"long"}))),Ri((e=>new Intl.DateTimeFormat(e.language,{year:"numeric"})));const Ac=Ri((e=>{if(e.time_format===ps.language||e.time_format===ps.system){const t=e.time_format===ps.language?e.language:void 0,i=(new Date).toLocaleString(t);return i.includes("AM")||i.includes("PM")}return e.time_format===ps.am_pm}));$c&&await $c,Ri((e=>new Intl.DateTimeFormat("en"!==e.language||Ac(e)?e.language:"en-u-hc-h23",{year:"numeric",month:"long",day:"numeric",hour:Ac(e)?"numeric":"2-digit",minute:"2-digit",hour12:Ac(e)}))),Ri((e=>new Intl.DateTimeFormat("en"!==e.language||Ac(e)?e.language:"en-u-hc-h23",{year:"numeric",month:"long",day:"numeric",hour:Ac(e)?"numeric":"2-digit",minute:"2-digit",second:"2-digit",hour12:Ac(e)}))),Ri((e=>new Intl.DateTimeFormat("en"!==e.language||Ac(e)?e.language:"en-u-hc-h23",{year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"2-digit",hour12:Ac(e)})));v([w("ha-entity-attribute-picker")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f()],key:"entityId",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"autofocus",value:()=>!1},{kind:"field",decorators:[f({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[f({type:Boolean})],key:"required",value:()=>!1},{kind:"field",decorators:[f({type:Boolean,attribute:"allow-custom-value"})],key:"allowCustomValue",value:void 0},{kind:"field",decorators:[f()],key:"label",value:void 0},{kind:"field",decorators:[f()],key:"value",value:void 0},{kind:"field",decorators:[f()],key:"helper",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"_opened",value:()=>!1},{kind:"field",decorators:[g("ha-combo-box",!0)],key:"_comboBox",value:void 0},{kind:"method",key:"shouldUpdate",value:function(e){return!(!e.has("_opened")&&this._opened)}},{kind:"method",key:"updated",value:function(e){if(e.has("_opened")&&this._opened){const e=this.entityId?this.hass.states[this.entityId]:void 0;this._comboBox.items=e?Object.keys(e.attributes).map((e=>{return{value:e,label:(t=e,(e=>e.charAt(0).toUpperCase()+e.slice(1))(t=t.replace(/_/g," ").replace(/\bid\b/g,"ID").replace(/\bip\b/g,"IP").replace(/\bmac\b/g,"MAC").replace(/\bgps\b/g,"GPS")))};var t})):[]}}},{kind:"method",key:"render",value:function(){var e;return this.hass?k`
      <ha-combo-box
        .hass=${this.hass}
        .value=${this.value||""}
        .autofocus=${this.autofocus}
        .label=${null!==(e=this.label)&&void 0!==e?e:this.hass.localize("ui.components.entity.entity-attribute-picker.attribute")}
        .disabled=${this.disabled||!this.entityId}
        .required=${this.required}
        .helper=${this.helper}
        .allowCustomValue=${this.allowCustomValue}
        item-value-path="value"
        item-label-path="label"
        @opened-changed=${this._openedChanged}
        @value-changed=${this._valueChanged}
      >
      </ha-combo-box>
    `:k``}},{kind:"method",key:"_openedChanged",value:function(e){this._opened=e.detail.value}},{kind:"method",key:"_valueChanged",value:function(e){this.value=e.detail.value}}]}}),m),v([w("ha-selector-attribute")],(function(t,i){class a extends i{constructor(...e){super(...e),t(this)}}return{F:a,d:[{kind:"field",decorators:[f()],key:"hass",value:void 0},{kind:"field",decorators:[f()],key:"selector",value:void 0},{kind:"field",decorators:[f()],key:"value",value:void 0},{kind:"field",decorators:[f()],key:"label",value:void 0},{kind:"field",decorators:[f()],key:"helper",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[f({type:Boolean})],key:"required",value:()=>!0},{kind:"field",decorators:[f()],key:"context",value:void 0},{kind:"method",key:"render",value:function(){var e;return k`
      <ha-entity-attribute-picker
        .hass=${this.hass}
        .entityId=${this.selector.attribute.entity_id||(null===(e=this.context)||void 0===e?void 0:e.filter_entity)}
        .value=${this.value}
        .label=${this.label}
        .helper=${this.helper}
        .disabled=${this.disabled}
        .required=${this.required}
        allow-custom-value
      ></ha-entity-attribute-picker>
    `}},{kind:"method",key:"updated",value:function(t){if(_(y(a.prototype),"updated",this).call(this,t),!this.value||this.selector.attribute.entity_id||!t.has("context"))return;const i=t.get("context");if(!this.context||(null==i?void 0:i.filter_entity)===this.context.filter_entity)return;let n=!1;if(this.context.filter_entity){const e=this.hass.states[this.context.filter_entity];e&&this.value in e.attributes||(n=!0)}else n=void 0!==this.value;n&&e(this,"value-changed",{value:void 0})}}]}}),Hl(m)),v([w("ha-selector-boolean")],(function(t,a){return{F:class extends a{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[f()],key:"hass",value:void 0},{kind:"field",decorators:[f()],key:"value",value:void 0},{kind:"field",decorators:[f()],key:"label",value:void 0},{kind:"field",decorators:[f()],key:"helper",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"disabled",value:()=>!1},{kind:"method",key:"render",value:function(){return k`
      <ha-formfield alignEnd spaceBetween .label=${this.label}>
        <ha-switch
          .checked=${this.value}
          @change=${this._handleChange}
          .disabled=${this.disabled}
        ></ha-switch>
      </ha-formfield>
      ${this.helper?k`<ha-input-helper-text>${this.helper}</ha-input-helper-text>`:""}
    `}},{kind:"method",key:"_handleChange",value:function(t){const i=t.target.checked;this.value!==i&&e(this,"value-changed",{value:i})}},{kind:"get",static:!0,key:"styles",value:function(){return i`
      ha-formfield {
        display: flex;
        height: 56px;
        align-items: center;
        --mdc-typography-body2-font-size: 1em;
      }
    `}}]}}),m),v([w("ha-selector-color_rgb")],(function(t,a){return{F:class extends a{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f({attribute:!1})],key:"selector",value:void 0},{kind:"field",decorators:[f()],key:"value",value:void 0},{kind:"field",decorators:[f()],key:"label",value:void 0},{kind:"field",decorators:[f()],key:"helper",value:void 0},{kind:"field",decorators:[f({type:Boolean,reflect:!0})],key:"disabled",value:()=>!1},{kind:"field",decorators:[f({type:Boolean})],key:"required",value:()=>!0},{kind:"method",key:"render",value:function(){return k`
      <ha-textfield
        type="color"
        helperPersistent
        .value=${this.value?ba(this.value):""}
        .label=${this.label||""}
        .required=${this.required}
        .helper=${this.helper}
        .disalbled=${this.disabled}
        @change=${this._valueChanged}
      ></ha-textfield>
    `}},{kind:"method",key:"_valueChanged",value:function(t){const i=t.target.value;e(this,"value-changed",{value:xa(i)})}},{kind:"field",static:!0,key:"styles",value:()=>i`
    :host {
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
    ha-textfield {
      --text-field-padding: 8px;
      min-width: 75px;
      flex-grow: 1;
      margin: 0 4px;
    }
  `}]}}),m);const Ic=()=>import("./c.e431cd4c.js");v([w("ha-date-input")],(function(t,a){return{F:class extends a{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"locale",value:void 0},{kind:"field",decorators:[f()],key:"value",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[f({type:Boolean})],key:"required",value:()=>!1},{kind:"field",decorators:[f()],key:"label",value:void 0},{kind:"field",decorators:[f()],key:"helper",value:void 0},{kind:"method",key:"render",value:function(){return k`<ha-textfield
      .label=${this.label}
      .helper=${this.helper}
      .disabled=${this.disabled}
      iconTrailing
      helperPersistent
      @click=${this._openDialog}
      .value=${this.value?(e=new Date(this.value),t=this.locale,Cc(t).format(e)):""}
      .required=${this.required}
    >
      <ha-svg-icon slot="trailingIcon" .path=${z}></ha-svg-icon>
    </ha-textfield>`;var e,t}},{kind:"method",key:"_openDialog",value:function(){var t,i;this.disabled||(t=this,i={min:"1970-01-01",value:this.value,onChange:e=>this._valueChanged(e),locale:this.locale.language},e(t,"show-dialog",{dialogTag:"ha-dialog-date-picker",dialogImport:Ic,dialogParams:i}))}},{kind:"method",key:"_valueChanged",value:function(t){this.value!==t&&(this.value=t,e(this,"change"),e(this,"value-changed",{value:t}))}},{kind:"get",static:!0,key:"styles",value:function(){return i`
      ha-svg-icon {
        color: var(--secondary-text-color);
      }
    `}}]}}),m),v([w("ha-selector-date")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[f()],key:"hass",value:void 0},{kind:"field",decorators:[f()],key:"selector",value:void 0},{kind:"field",decorators:[f()],key:"value",value:void 0},{kind:"field",decorators:[f()],key:"label",value:void 0},{kind:"field",decorators:[f()],key:"helper",value:void 0},{kind:"field",decorators:[f({type:Boolean,reflect:!0})],key:"disabled",value:()=>!1},{kind:"field",decorators:[f({type:Boolean})],key:"required",value:()=>!0},{kind:"method",key:"render",value:function(){return k`
      <ha-date-input
        .label=${this.label}
        .locale=${this.hass.locale}
        .disabled=${this.disabled}
        .value=${this.value}
        .required=${this.required}
        .helper=${this.helper}
      >
      </ha-date-input>
    `}}]}}),m),v([w("ha-time-input")],(function(t,i){return{F:class extends i{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"locale",value:void 0},{kind:"field",decorators:[f()],key:"value",value:void 0},{kind:"field",decorators:[f()],key:"label",value:void 0},{kind:"field",decorators:[f()],key:"helper",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[f({type:Boolean})],key:"required",value:()=>!1},{kind:"field",decorators:[f({type:Boolean,attribute:"enable-second"})],key:"enableSecond",value:()=>!1},{kind:"method",key:"render",value:function(){var e;const t=Ac(this.locale),i=(null===(e=this.value)||void 0===e?void 0:e.split(":"))||[];let a=i[0];const n=Number(i[0]);return n&&t&&n>12&&n<24&&(a=String(n-12).padStart(2,"0")),t&&0===n&&(a="12"),k`
      <ha-base-time-input
        .label=${this.label}
        .hours=${Number(a)}
        .minutes=${Number(i[1])}
        .seconds=${Number(i[2])}
        .format=${t?12:24}
        .amPm=${t&&(n>=12?"PM":"AM")}
        .disabled=${this.disabled}
        @value-changed=${this._timeChanged}
        .enableSecond=${this.enableSecond}
        .required=${this.required}
        .helper=${this.helper}
      ></ha-base-time-input>
    `}},{kind:"method",key:"_timeChanged",value:function(t){t.stopPropagation();const i=t.detail.value,a=Ac(this.locale);let n=i.hours||0;i&&a&&("PM"===i.amPm&&n<12&&(n+=12),"AM"===i.amPm&&12===n&&(n=0));const o=`${n.toString().padStart(2,"0")}:${i.minutes?i.minutes.toString().padStart(2,"0"):"00"}:${i.seconds?i.seconds.toString().padStart(2,"0"):"00"}`;o!==this.value&&(this.value=o,e(this,"change"),e(this,"value-changed",{value:o}))}}]}}),m),v([w("ha-selector-datetime")],(function(t,a){return{F:class extends a{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[f()],key:"hass",value:void 0},{kind:"field",decorators:[f()],key:"selector",value:void 0},{kind:"field",decorators:[f()],key:"value",value:void 0},{kind:"field",decorators:[f()],key:"label",value:void 0},{kind:"field",decorators:[f()],key:"helper",value:void 0},{kind:"field",decorators:[f({type:Boolean,reflect:!0})],key:"disabled",value:()=>!1},{kind:"field",decorators:[f({type:Boolean})],key:"required",value:()=>!0},{kind:"field",decorators:[g("ha-date-input")],key:"_dateInput",value:void 0},{kind:"field",decorators:[g("ha-time-input")],key:"_timeInput",value:void 0},{kind:"method",key:"render",value:function(){var e;const t=null===(e=this.value)||void 0===e?void 0:e.split(" ");return k`
      <div class="input">
        <ha-date-input
          .label=${this.label}
          .locale=${this.hass.locale}
          .disabled=${this.disabled}
          .required=${this.required}
          .value=${null==t?void 0:t[0]}
          @value-changed=${this._valueChanged}
        >
        </ha-date-input>
        <ha-time-input
          enable-second
          .value=${(null==t?void 0:t[1])||"0:00:00"}
          .locale=${this.hass.locale}
          .disabled=${this.disabled}
          .required=${this.required}
          @value-changed=${this._valueChanged}
        ></ha-time-input>
      </div>
      ${this.helper?k`<ha-input-helper-text>${this.helper}</ha-input-helper-text>`:""}
    `}},{kind:"method",key:"_valueChanged",value:function(t){t.stopPropagation(),e(this,"value-changed",{value:`${this._dateInput.value} ${this._timeInput.value}`})}},{kind:"field",static:!0,key:"styles",value:()=>i`
    .input {
      display: flex;
      align-items: center;
      flex-direction: row;
    }

    ha-date-input {
      min-width: 150px;
      margin-right: 4px;
    }
  `}]}}),m),v([w("ha-devices-picker")],(function(t,a){return{F:class extends a{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f()],key:"value",value:void 0},{kind:"field",decorators:[f()],key:"helper",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"disabled",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"required",value:void 0},{kind:"field",decorators:[f({type:Array,attribute:"include-domains"})],key:"includeDomains",value:void 0},{kind:"field",decorators:[f({type:Array,attribute:"exclude-domains"})],key:"excludeDomains",value:void 0},{kind:"field",decorators:[f({attribute:"picked-device-label"}),f({type:Array,attribute:"include-device-classes"})],key:"includeDeviceClasses",value:void 0},{kind:"field",key:"pickedDeviceLabel",value:void 0},{kind:"field",decorators:[f({attribute:"pick-device-label"})],key:"pickDeviceLabel",value:void 0},{kind:"field",decorators:[f()],key:"deviceFilter",value:void 0},{kind:"method",key:"render",value:function(){if(!this.hass)return k``;const e=this._currentDevices;return k`
      ${e.map((e=>k`
          <div>
            <ha-device-picker
              allow-custom-entity
              .curValue=${e}
              .hass=${this.hass}
              .deviceFilter=${this.deviceFilter}
              .includeDomains=${this.includeDomains}
              .excludeDomains=${this.excludeDomains}
              .includeDeviceClasses=${this.includeDeviceClasses}
              .value=${e}
              .label=${this.pickedDeviceLabel}
              .disabled=${this.disabled}
              @value-changed=${this._deviceChanged}
            ></ha-device-picker>
          </div>
        `))}
      <div>
        <ha-device-picker
          allow-custom-entity
          .hass=${this.hass}
          .helper=${this.helper}
          .deviceFilter=${this.deviceFilter}
          .includeDomains=${this.includeDomains}
          .excludeDomains=${this.excludeDomains}
          .includeDeviceClasses=${this.includeDeviceClasses}
          .label=${this.pickDeviceLabel}
          .disabled=${this.disabled}
          .required=${this.required&&!e.length}
          @value-changed=${this._addDevice}
        ></ha-device-picker>
      </div>
    `}},{kind:"get",key:"_currentDevices",value:function(){return this.value||[]}},{kind:"method",key:"_updateDevices",value:async function(t){e(this,"value-changed",{value:t}),this.value=t}},{kind:"method",key:"_deviceChanged",value:function(e){e.stopPropagation();const t=e.currentTarget.curValue,i=e.detail.value;i!==t&&""===i&&(""===i?this._updateDevices(this._currentDevices.filter((e=>e!==t))):this._updateDevices(this._currentDevices.map((e=>e===t?i:e))))}},{kind:"method",key:"_addDevice",value:async function(e){e.stopPropagation();const t=e.detail.value;if(e.currentTarget.value="",!t)return;const i=this._currentDevices;i.includes(t)||this._updateDevices([...i,t])}},{kind:"field",static:!0,key:"styles",value:()=>i`
    div {
      margin-top: 8px;
    }
  `}]}}),m),v([w("ha-selector-device")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[f()],key:"hass",value:void 0},{kind:"field",decorators:[f()],key:"selector",value:void 0},{kind:"field",decorators:[Vi()],key:"_entitySources",value:void 0},{kind:"field",decorators:[Vi()],key:"_entities",value:void 0},{kind:"field",decorators:[f()],key:"value",value:void 0},{kind:"field",decorators:[f()],key:"label",value:void 0},{kind:"field",decorators:[f()],key:"helper",value:void 0},{kind:"field",decorators:[Vi()],key:"_configEntries",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[f({type:Boolean})],key:"required",value:()=>!0},{kind:"method",key:"hassSubscribe",value:function(){return[Ul(this.hass.connection,(e=>{this._entities=e.filter((e=>null!==e.device_id))}))]}},{kind:"method",key:"updated",value:function(e){_(y(i.prototype),"updated",this).call(this,e),e.has("selector")&&this.selector.device.integration&&!this._entitySources&&Wd(this.hass).then((e=>{this._entitySources=e}))}},{kind:"method",key:"render",value:function(){var e,t,i,a;return this.selector.device.integration&&!this._entitySources?k``:this.selector.device.multiple?k`
      ${this.label?k`<label>${this.label}</label>`:""}
      <ha-devices-picker
        .hass=${this.hass}
        .value=${this.value}
        .helper=${this.helper}
        .deviceFilter=${this._filterDevices}
        .includeDeviceClasses=${null!==(e=this.selector.device.entity)&&void 0!==e&&e.device_class?[this.selector.device.entity.device_class]:void 0}
        .includeDomains=${null!==(t=this.selector.device.entity)&&void 0!==t&&t.domain?[this.selector.device.entity.domain]:void 0}
        .disabled=${this.disabled}
        .required=${this.required}
      ></ha-devices-picker>
    `:k`
        <ha-device-picker
          .hass=${this.hass}
          .value=${this.value}
          .label=${this.label}
          .helper=${this.helper}
          .deviceFilter=${this._filterDevices}
          .includeDeviceClasses=${null!==(i=this.selector.device.entity)&&void 0!==i&&i.device_class?[this.selector.device.entity.device_class]:void 0}
          .includeDomains=${null!==(a=this.selector.device.entity)&&void 0!==a&&a.domain?[this.selector.device.entity.domain]:void 0}
          .disabled=${this.disabled}
          .required=${this.required}
          allow-custom-entity
        ></ha-device-picker>
      `}},{kind:"field",key:"_filterDevices",value(){return e=>{const{manufacturer:t,model:i,integration:a}=this.selector.device;if(t&&e.manufacturer!==t)return!1;if(i&&e.model!==i)return!1;if(a&&this._entitySources&&this._entities){var n;const t=this._deviceIntegrations(this._entitySources,this._entities);if(null==t||null===(n=t[e.id])||void 0===n||!n.includes(a))return!1}return!0}}},{kind:"field",key:"_deviceIntegrations",value:()=>Ri(((e,t)=>{const i={};for(const a of t){const t=e[a.entity_id];null!=t&&t.domain&&(i[a.device_id]||(i[a.device_id]=[]),i[a.device_id].push(t.domain))}return i}))}]}}),Hl(m)),v([w("ha-selector-duration")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[f()],key:"hass",value:void 0},{kind:"field",decorators:[f()],key:"selector",value:void 0},{kind:"field",decorators:[f()],key:"value",value:void 0},{kind:"field",decorators:[f()],key:"label",value:void 0},{kind:"field",decorators:[f()],key:"helper",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[f({type:Boolean})],key:"required",value:()=>!0},{kind:"method",key:"render",value:function(){return k`
      <ha-duration-input
        .label=${this.label}
        .helper=${this.helper}
        .data=${this.value}
        .disabled=${this.disabled}
        .required=${this.required}
        .enableDay=${this.selector.duration.enable_day}
      ></ha-duration-input>
    `}}]}}),m);const Ec=/^(\w+)\.(\w+)$/;v([w("ha-entities-picker")],(function(t,a){return{F:class extends a{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f({type:Array})],key:"value",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"disabled",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"required",value:void 0},{kind:"field",decorators:[f()],key:"helper",value:void 0},{kind:"field",decorators:[f({type:Array,attribute:"include-domains"})],key:"includeDomains",value:void 0},{kind:"field",decorators:[f({type:Array,attribute:"exclude-domains"})],key:"excludeDomains",value:void 0},{kind:"field",decorators:[f({type:Array,attribute:"include-device-classes"})],key:"includeDeviceClasses",value:void 0},{kind:"field",decorators:[f({type:Array,attribute:"include-unit-of-measurement"})],key:"includeUnitOfMeasurement",value:void 0},{kind:"field",decorators:[f({type:Array,attribute:"include-entities"})],key:"includeEntities",value:void 0},{kind:"field",decorators:[f({type:Array,attribute:"exclude-entities"})],key:"excludeEntities",value:void 0},{kind:"field",decorators:[f({attribute:"picked-entity-label"})],key:"pickedEntityLabel",value:void 0},{kind:"field",decorators:[f({attribute:"pick-entity-label"})],key:"pickEntityLabel",value:void 0},{kind:"field",decorators:[f()],key:"entityFilter",value:void 0},{kind:"method",key:"render",value:function(){if(!this.hass)return k``;const e=this._currentEntities;return k`
      ${e.map((e=>k`
          <div>
            <ha-entity-picker
              allow-custom-entity
              .curValue=${e}
              .hass=${this.hass}
              .includeDomains=${this.includeDomains}
              .excludeDomains=${this.excludeDomains}
              .includeEntities=${this.includeEntities}
              .excludeEntities=${this.excludeEntities}
              .includeDeviceClasses=${this.includeDeviceClasses}
              .includeUnitOfMeasurement=${this.includeUnitOfMeasurement}
              .entityFilter=${this._entityFilter}
              .value=${e}
              .label=${this.pickedEntityLabel}
              .disabled=${this.disabled}
              @value-changed=${this._entityChanged}
            ></ha-entity-picker>
          </div>
        `))}
      <div>
        <ha-entity-picker
          allow-custom-entity
          .hass=${this.hass}
          .includeDomains=${this.includeDomains}
          .excludeDomains=${this.excludeDomains}
          .includeEntities=${this.includeEntities}
          .excludeEntities=${this.excludeEntities}
          .includeDeviceClasses=${this.includeDeviceClasses}
          .includeUnitOfMeasurement=${this.includeUnitOfMeasurement}
          .entityFilter=${this._entityFilter}
          .label=${this.pickEntityLabel}
          .helper=${this.helper}
          .disabled=${this.disabled}
          .required=${this.required&&!e.length}
          @value-changed=${this._addEntity}
        ></ha-entity-picker>
      </div>
    `}},{kind:"field",key:"_entityFilter",value(){return e=>(!this.value||!this.value.includes(e.entity_id))&&(!this.entityFilter||this.entityFilter(e))}},{kind:"get",key:"_currentEntities",value:function(){return this.value||[]}},{kind:"method",key:"_updateEntities",value:async function(t){this.value=t,e(this,"value-changed",{value:t})}},{kind:"method",key:"_entityChanged",value:function(e){e.stopPropagation();const t=e.currentTarget.curValue,i=e.detail.value;if(i===t||void 0!==i&&(a=i,!Ec.test(a)))return;var a;const n=this._currentEntities;i&&!n.includes(i)?this._updateEntities(n.map((e=>e===t?i:e))):this._updateEntities(n.filter((e=>e!==t)))}},{kind:"method",key:"_addEntity",value:async function(e){e.stopPropagation();const t=e.detail.value;if(!t)return;if(e.currentTarget.value="",!t)return;const i=this._currentEntities;i.includes(t)||this._updateEntities([...i,t])}},{kind:"field",static:!0,key:"styles",value:()=>i`
    div {
      margin-top: 8px;
    }
  `}]}}),m),v([w("ha-selector-entity")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[f()],key:"hass",value:void 0},{kind:"field",decorators:[f()],key:"selector",value:void 0},{kind:"field",decorators:[Vi()],key:"_entitySources",value:void 0},{kind:"field",decorators:[f()],key:"value",value:void 0},{kind:"field",decorators:[f()],key:"label",value:void 0},{kind:"field",decorators:[f()],key:"helper",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[f({type:Boolean})],key:"required",value:()=>!0},{kind:"method",key:"render",value:function(){return this.selector.entity.multiple?k`
      ${this.label?k`<label>${this.label}</label>`:""}
      <ha-entities-picker
        .hass=${this.hass}
        .value=${this.value}
        .helper=${this.helper}
        .includeEntities=${this.selector.entity.include_entities}
        .excludeEntities=${this.selector.entity.exclude_entities}
        .entityFilter=${this._filterEntities}
        .disabled=${this.disabled}
        .required=${this.required}
      ></ha-entities-picker>
    `:k`<ha-entity-picker
        .hass=${this.hass}
        .value=${this.value}
        .label=${this.label}
        .helper=${this.helper}
        .includeEntities=${this.selector.entity.include_entities}
        .excludeEntities=${this.selector.entity.exclude_entities}
        .entityFilter=${this._filterEntities}
        .disabled=${this.disabled}
        .required=${this.required}
        allow-custom-entity
      ></ha-entity-picker>`}},{kind:"method",key:"updated",value:function(e){_(y(i.prototype),"updated",this).call(this,e),e.has("selector")&&this.selector.entity.integration&&!this._entitySources&&Wd(this.hass).then((e=>{this._entitySources=e}))}},{kind:"field",key:"_filterEntities",value(){return e=>{var t,i;const{domain:a,device_class:n,integration:o}=this.selector.entity;if(a){const t=as(e);if(Array.isArray(a)?!a.includes(t):t!==a)return!1}return(!n||e.attributes.device_class===n)&&(!o||(null===(t=this._entitySources)||void 0===t||null===(i=t[e.entity_id])||void 0===i?void 0:i.domain)===o)}}}]}}),m),v([w("ha-selector-number")],(function(t,a){return{F:class extends a{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[f()],key:"hass",value:void 0},{kind:"field",decorators:[f()],key:"selector",value:void 0},{kind:"field",decorators:[f()],key:"value",value:void 0},{kind:"field",decorators:[f()],key:"placeholder",value:void 0},{kind:"field",decorators:[f()],key:"label",value:void 0},{kind:"field",decorators:[f()],key:"helper",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"required",value:()=>!0},{kind:"field",decorators:[f({type:Boolean})],key:"disabled",value:()=>!1},{kind:"method",key:"render",value:function(){var e,t,i;const a="box"===this.selector.number.mode;return k`
      ${this.label?k`${this.label}${this.required?" *":""}`:""}
      <div class="input">
        ${a?"":k`<ha-slider
              .min=${this.selector.number.min}
              .max=${this.selector.number.max}
              .value=${this._value}
              .step=${null!==(e=this.selector.number.step)&&void 0!==e?e:1}
              .disabled=${this.disabled}
              .required=${this.required}
              pin
              ignore-bar-touch
              @change=${this._handleSliderChange}
            >
            </ha-slider>`}
        <ha-textfield
          inputMode="numeric"
          pattern="[0-9]+([\\.][0-9]+)?"
          .label=${"box"!==this.selector.number.mode?void 0:this.label}
          .placeholder=${this.placeholder}
          class=${Xi({single:"box"===this.selector.number.mode})}
          .min=${this.selector.number.min}
          .max=${this.selector.number.max}
          .value=${null!==(t=this.value)&&void 0!==t?t:""}
          .step=${null!==(i=this.selector.number.step)&&void 0!==i?i:1}
          helperPersistent
          .helper=${a?this.helper:void 0}
          .disabled=${this.disabled}
          .required=${this.required}
          .suffix=${this.selector.number.unit_of_measurement}
          type="number"
          autoValidate
          ?no-spinner=${"box"!==this.selector.number.mode}
          @input=${this._handleInputChange}
        >
        </ha-textfield>
      </div>
      ${!a&&this.helper?k`<ha-input-helper-text>${this.helper}</ha-input-helper-text>`:""}
    `}},{kind:"get",key:"_value",value:function(){var e;return null!==(e=this.value)&&void 0!==e?e:this.selector.number.min||0}},{kind:"method",key:"_handleInputChange",value:function(t){t.stopPropagation();const i=""===t.target.value||isNaN(t.target.value)?this.required?this.selector.number.min||0:void 0:Number(t.target.value);this.value!==i&&e(this,"value-changed",{value:i})}},{kind:"method",key:"_handleSliderChange",value:function(t){t.stopPropagation();const i=Number(t.target.value);this.value!==i&&e(this,"value-changed",{value:i})}},{kind:"get",static:!0,key:"styles",value:function(){return i`
      .input {
        display: flex;
        justify-content: space-between;
        align-items: center;
        direction: ltr;
      }
      ha-slider {
        flex: 1;
      }
      ha-textfield {
        --ha-textfield-input-width: 40px;
      }
      .single {
        --ha-textfield-input-width: unset;
        flex: 1;
      }
    `}}]}}),m),v([w("ha-selector-object")],(function(t,i){return{F:class extends i{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[f()],key:"hass",value:void 0},{kind:"field",decorators:[f()],key:"value",value:void 0},{kind:"field",decorators:[f()],key:"label",value:void 0},{kind:"field",decorators:[f()],key:"helper",value:void 0},{kind:"field",decorators:[f()],key:"placeholder",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[f({type:Boolean})],key:"required",value:()=>!0},{kind:"method",key:"render",value:function(){return k`<ha-yaml-editor
        .hass=${this.hass}
        .readonly=${this.disabled}
        .label=${this.label}
        .required=${this.required}
        .placeholder=${this.placeholder}
        .defaultValue=${this.value}
        @value-changed=${this._handleChange}
      ></ha-yaml-editor>
      ${this.helper?k`<ha-input-helper-text>${this.helper}</ha-input-helper-text>`:""} `}},{kind:"method",key:"_handleChange",value:function(t){const i=t.target.value;t.target.isValid&&this.value!==i&&e(this,"value-changed",{value:i})}}]}}),m),v([w("ha-target-picker")],(function(t,a){return{F:class extends a{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f({attribute:!1})],key:"value",value:void 0},{kind:"field",decorators:[f()],key:"label",value:void 0},{kind:"field",decorators:[f()],key:"helper",value:void 0},{kind:"field",decorators:[f({type:Array,attribute:"include-domains"})],key:"includeDomains",value:void 0},{kind:"field",decorators:[f({type:Array,attribute:"include-device-classes"})],key:"includeDeviceClasses",value:void 0},{kind:"field",decorators:[f()],key:"deviceFilter",value:void 0},{kind:"field",decorators:[f()],key:"entityRegFilter",value:void 0},{kind:"field",decorators:[f()],key:"entityFilter",value:void 0},{kind:"field",decorators:[f({type:Boolean,reflect:!0})],key:"disabled",value:()=>!1},{kind:"field",decorators:[f({type:Boolean})],key:"horizontal",value:()=>!1},{kind:"field",decorators:[Vi()],key:"_areas",value:void 0},{kind:"field",decorators:[Vi()],key:"_devices",value:void 0},{kind:"field",decorators:[Vi()],key:"_entities",value:void 0},{kind:"field",decorators:[Vi()],key:"_addMode",value:void 0},{kind:"field",decorators:[g("#input")],key:"_inputElement",value:void 0},{kind:"method",key:"hassSubscribe",value:function(){return[Dl(this.hass.connection,(e=>{const t={};for(const i of e)t[i.area_id]=i;this._areas=t})),jl(this.hass.connection,(e=>{const t={};for(const i of e)t[i.id]=i;this._devices=t})),Ul(this.hass.connection,(e=>{this._entities=e}))]}},{kind:"method",key:"render",value:function(){return this._areas&&this._devices&&this._entities?k`<div class=${this.horizontal?"horizontal-container":""}>
      ${this.horizontal?this._renderChips():this._renderItems()}
      ${this._renderPicker()}
      ${this.horizontal?this._renderItems():this._renderChips()}
    </div>`:k``}},{kind:"method",key:"_renderItems",value:function(){var e,t,i;return k`<div class="mdc-chip-set items">
      ${null!==(e=this.value)&&void 0!==e&&e.area_id?ws(this.value.area_id).map((e=>{const t=this._areas[e];return this._renderChip("area_id",e,(null==t?void 0:t.name)||e,void 0,$a)})):""}
      ${null!==(t=this.value)&&void 0!==t&&t.device_id?ws(this.value.device_id).map((e=>{const t=this._devices[e];return this._renderChip("device_id",e,t?Bl(t,this.hass):e,void 0,wa)})):""}
      ${null!==(i=this.value)&&void 0!==i&&i.entity_id?ws(this.value.entity_id).map((e=>{const t=this.hass.states[e];return this._renderChip("entity_id",e,t?Sn(t):e,t)})):""}
    </div>`}},{kind:"method",key:"_renderChips",value:function(){return k`<div class="mdc-chip-set">
        <div
          class="mdc-chip area_id add"
          .type=${"area_id"}
          @click=${this._showPicker}
        >
          <div class="mdc-chip__ripple"></div>
          <ha-svg-icon
            class="mdc-chip__icon mdc-chip__icon--leading"
            .path=${va}
          ></ha-svg-icon>
          <span role="gridcell">
            <span role="button" tabindex="0" class="mdc-chip__primary-action">
              <span class="mdc-chip__text"
                >${this.hass.localize("ui.components.target-picker.add_area_id")}</span
              >
            </span>
          </span>
        </div>
        <div
          class="mdc-chip device_id add"
          .type=${"device_id"}
          @click=${this._showPicker}
        >
          <div class="mdc-chip__ripple"></div>
          <ha-svg-icon
            class="mdc-chip__icon mdc-chip__icon--leading"
            .path=${va}
          ></ha-svg-icon>
          <span role="gridcell">
            <span role="button" tabindex="0" class="mdc-chip__primary-action">
              <span class="mdc-chip__text"
                >${this.hass.localize("ui.components.target-picker.add_device_id")}</span
              >
            </span>
          </span>
        </div>
        <div
          class="mdc-chip entity_id add"
          .type=${"entity_id"}
          @click=${this._showPicker}
        >
          <div class="mdc-chip__ripple"></div>
          <ha-svg-icon
            class="mdc-chip__icon mdc-chip__icon--leading"
            .path=${va}
          ></ha-svg-icon>
          <span role="gridcell">
            <span role="button" tabindex="0" class="mdc-chip__primary-action">
              <span class="mdc-chip__text"
                >${this.hass.localize("ui.components.target-picker.add_entity_id")}</span
              >
            </span>
          </span>
        </div>
      </div>
      ${this.helper?k`<ha-input-helper-text>${this.helper}</ha-input-helper-text>`:""} `}},{kind:"method",key:"_showPicker",value:async function(e){this._addMode=e.currentTarget.type,await this.updateComplete,setTimeout((()=>{var e,t;null===(e=this._inputElement)||void 0===e||e.open(),null===(t=this._inputElement)||void 0===t||t.focus()}),0)}},{kind:"method",key:"_renderChip",value:function(e,t,i,a,n){return k`
      <div
        class="mdc-chip ${Xi({[e]:!0})}"
      >
        ${n?k`<ha-svg-icon
              class="mdc-chip__icon mdc-chip__icon--leading"
              .path=${n}
            ></ha-svg-icon>`:""}
        ${a?k`<ha-state-icon
              class="mdc-chip__icon mdc-chip__icon--leading"
              .state=${a}
            ></ha-state-icon>`:""}
        <span role="gridcell">
          <span role="button" tabindex="0" class="mdc-chip__primary-action">
            <span class="mdc-chip__text">${i}</span>
          </span>
        </span>
        ${"entity_id"===e?"":k` <span role="gridcell">
              <ha-icon-button
                class="expand-btn mdc-chip__icon mdc-chip__icon--trailing"
                tabindex="-1"
                role="button"
                .label=${this.hass.localize("ui.components.target-picker.expand")}
                .path=${Ca}
                hideTooltip
                .id=${t}
                .type=${e}
                @click=${this._handleExpand}
              ></ha-icon-button>
              <paper-tooltip class="expand" animation-delay="0"
                >${this.hass.localize(`ui.components.target-picker.expand_${e}`)}</paper-tooltip
              >
            </span>`}
        <span role="gridcell">
          <ha-icon-button
            class="mdc-chip__icon mdc-chip__icon--trailing"
            tabindex="-1"
            role="button"
            .label=${this.hass.localize("ui.components.target-picker.expand")}
            .path=${b}
            hideTooltip
            .id=${t}
            .type=${e}
            @click=${this._handleRemove}
          ></ha-icon-button>
          <paper-tooltip animation-delay="0"
            >${this.hass.localize(`ui.components.target-picker.remove_${e}`)}</paper-tooltip
          >
        </span>
      </div>
    `}},{kind:"method",key:"_renderPicker",value:function(){switch(this._addMode){case"area_id":return k`<ha-area-picker
          .hass=${this.hass}
          id="input"
          .type=${"area_id"}
          .label=${this.hass.localize("ui.components.target-picker.add_area_id")}
          no-add
          .deviceFilter=${this.deviceFilter}
          .entityFilter=${this.entityRegFilter}
          .includeDeviceClasses=${this.includeDeviceClasses}
          .includeDomains=${this.includeDomains}
          class=${this.horizontal?"hidden-picker":""}
          @value-changed=${this._targetPicked}
        ></ha-area-picker>`;case"device_id":return k`<ha-device-picker
          .hass=${this.hass}
          id="input"
          .type=${"device_id"}
          .label=${this.hass.localize("ui.components.target-picker.add_device_id")}
          .deviceFilter=${this.deviceFilter}
          .entityFilter=${this.entityRegFilter}
          .includeDeviceClasses=${this.includeDeviceClasses}
          .includeDomains=${this.includeDomains}
          class=${this.horizontal?"hidden-picker":""}
          @value-changed=${this._targetPicked}
        ></ha-device-picker>`;case"entity_id":return k`<ha-entity-picker
          .hass=${this.hass}
          id="input"
          .type=${"entity_id"}
          .label=${this.hass.localize("ui.components.target-picker.add_entity_id")}
          .entityFilter=${this.entityFilter}
          .includeDeviceClasses=${this.includeDeviceClasses}
          .includeDomains=${this.includeDomains}
          class=${this.horizontal?"hidden-picker":""}
          @value-changed=${this._targetPicked}
          allow-custom-entity
        ></ha-entity-picker>`}return k``}},{kind:"method",key:"_targetPicked",value:function(t){if(t.stopPropagation(),!t.detail.value)return;const i=t.detail.value,a=t.currentTarget;a.value="",this._addMode=void 0,e(this,"value-changed",{value:this.value?{...this.value,[a.type]:this.value[a.type]?[...ws(this.value[a.type]),i]:i}:{[a.type]:i}})}},{kind:"method",key:"_handleExpand",value:function(t){const i=t.currentTarget,a=[],n=[];if("area_id"===i.type)Object.values(this._devices).forEach((e=>{var t;e.area_id!==i.id||null!==(t=this.value.device_id)&&void 0!==t&&t.includes(e.id)||!this._deviceMeetsFilter(e)||a.push(e.id)})),this._entities.forEach((e=>{var t;e.area_id!==i.id||null!==(t=this.value.entity_id)&&void 0!==t&&t.includes(e.entity_id)||!this._entityRegMeetsFilter(e)||n.push(e.entity_id)}));else{if("device_id"!==i.type)return;this._entities.forEach((e=>{var t;e.device_id!==i.id||null!==(t=this.value.entity_id)&&void 0!==t&&t.includes(e.entity_id)||!this._entityRegMeetsFilter(e)||n.push(e.entity_id)}))}let o=this.value;n.length&&(o=this._addItems(o,"entity_id",n)),a.length&&(o=this._addItems(o,"device_id",a)),o=this._removeItem(o,i.type,i.id),e(this,"value-changed",{value:o})}},{kind:"method",key:"_handleRemove",value:function(t){const i=t.currentTarget;e(this,"value-changed",{value:this._removeItem(this.value,i.type,i.id)})}},{kind:"method",key:"_addItems",value:function(e,t,i){return{...e,[t]:e[t]?ws(e[t]).concat(i):i}}},{kind:"method",key:"_removeItem",value:function(e,t,i){const a=ws(e[t]).filter((e=>String(e)!==i));if(a.length)return{...e,[t]:a};const n={...e};return delete n[t],Object.keys(n).length?n:void 0}},{kind:"method",key:"_deviceMeetsFilter",value:function(e){var t;const i=null===(t=this._entities)||void 0===t?void 0:t.filter((t=>t.device_id===e.id));if(this.includeDomains){if(!i||!i.length)return!1;if(!i.some((e=>this.includeDomains.includes(zn(e.entity_id)))))return!1}if(this.includeDeviceClasses){if(!i||!i.length)return!1;if(!i.some((e=>{const t=this.hass.states[e.entity_id];return!!t&&(t.attributes.device_class&&this.includeDeviceClasses.includes(t.attributes.device_class))})))return!1}return!this.deviceFilter||this.deviceFilter(e)}},{kind:"method",key:"_entityRegMeetsFilter",value:function(e){if(e.entity_category)return!1;if(this.includeDomains&&!this.includeDomains.includes(zn(e.entity_id)))return!1;if(this.includeDeviceClasses){const t=this.hass.states[e.entity_id];if(!t)return!1;if(!t.attributes.device_class||!this.includeDeviceClasses.includes(t.attributes.device_class))return!1}return!this.entityRegFilter||this.entityRegFilter(e)}},{kind:"get",static:!0,key:"styles",value:function(){return i`
      ${Aa(Ba)}
      .hidden-picker {
        height: 0px;
        display: inline-block;
        overflow: hidden;
        position: absolute;
      }
      .horizontal-container {
        display: flex;
        flex-wrap: wrap;
      }
      .mdc-chip {
        color: var(--primary-text-color);
      }
      .items {
        z-index: 2;
      }
      .mdc-chip-set {
        padding: 4px 0;
      }
      .mdc-chip.add {
        color: rgba(0, 0, 0, 0.87);
      }
      .mdc-chip:not(.add) {
        cursor: default;
      }
      .mdc-chip ha-icon-button {
        --mdc-icon-button-size: 24px;
        display: flex;
        align-items: center;
        outline: none;
      }
      .mdc-chip ha-icon-button ha-svg-icon {
        border-radius: 50%;
        background: var(--secondary-text-color);
      }
      .mdc-chip__icon.mdc-chip__icon--trailing {
        width: 16px;
        height: 16px;
        --mdc-icon-size: 14px;
        color: var(--secondary-text-color);
        margin-inline-start: 4px !important;
        margin-inline-end: -4px !important;
        direction: var(--direction);
      }
      .mdc-chip__icon--leading {
        display: flex;
        align-items: center;
        justify-content: center;
        --mdc-icon-size: 20px;
        border-radius: 50%;
        padding: 6px;
        margin-left: -14px !important;
        margin-inline-start: -14px !important;
        margin-inline-end: 4px !important;
        direction: var(--direction);
      }
      .expand-btn {
        margin-right: 0;
      }
      .mdc-chip.area_id:not(.add) {
        border: 2px solid #fed6a4;
        background: var(--card-background-color);
      }
      .mdc-chip.area_id:not(.add) .mdc-chip__icon--leading,
      .mdc-chip.area_id.add {
        background: #fed6a4;
      }
      .mdc-chip.device_id:not(.add) {
        border: 2px solid #a8e1fb;
        background: var(--card-background-color);
      }
      .mdc-chip.device_id:not(.add) .mdc-chip__icon--leading,
      .mdc-chip.device_id.add {
        background: #a8e1fb;
      }
      .mdc-chip.entity_id:not(.add) {
        border: 2px solid #d2e7b9;
        background: var(--card-background-color);
      }
      .mdc-chip.entity_id:not(.add) .mdc-chip__icon--leading,
      .mdc-chip.entity_id.add {
        background: #d2e7b9;
      }
      .mdc-chip:hover {
        z-index: 5;
      }
      paper-tooltip.expand {
        min-width: 200px;
      }
      :host([disabled]) .mdc-chip {
        opacity: var(--light-disabled-opacity);
        pointer-events: none;
      }
    `}}]}}),Hl(m)),v([w("ha-selector-target")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[f()],key:"hass",value:void 0},{kind:"field",decorators:[f()],key:"selector",value:void 0},{kind:"field",decorators:[f()],key:"value",value:void 0},{kind:"field",decorators:[f()],key:"label",value:void 0},{kind:"field",decorators:[f()],key:"helper",value:void 0},{kind:"field",decorators:[Vi()],key:"_entityPlaformLookup",value:void 0},{kind:"field",decorators:[Vi()],key:"_configEntries",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"disabled",value:()=>!1},{kind:"method",key:"hassSubscribe",value:function(){return[Ul(this.hass.connection,(e=>{const t={};for(const i of e)i.platform&&(t[i.entity_id]=i.platform);this._entityPlaformLookup=t}))]}},{kind:"method",key:"updated",value:function(e){if(e.has("selector")){var t,i;e.get("selector")!==this.selector&&(null!==(t=this.selector.target.device)&&void 0!==t&&t.integration||null!==(i=this.selector.target.entity)&&void 0!==i&&i.integration)&&this._loadConfigEntries()}}},{kind:"method",key:"render",value:function(){var e,t;return k`<ha-target-picker
      .hass=${this.hass}
      .value=${this.value}
      .helper=${this.helper}
      .deviceFilter=${this._filterDevices}
      .entityRegFilter=${this._filterRegEntities}
      .entityFilter=${this._filterEntities}
      .includeDeviceClasses=${null!==(e=this.selector.target.entity)&&void 0!==e&&e.device_class?[this.selector.target.entity.device_class]:void 0}
      .includeDomains=${null!==(t=this.selector.target.entity)&&void 0!==t&&t.domain?[this.selector.target.entity.domain]:void 0}
      .disabled=${this.disabled}
    ></ha-target-picker>`}},{kind:"field",key:"_filterEntities",value(){return e=>{var t,i,a,n;if((null!==(t=this.selector.target.entity)&&void 0!==t&&t.integration||null!==(i=this.selector.target.device)&&void 0!==i&&i.integration)&&(!this._entityPlaformLookup||this._entityPlaformLookup[e.entity_id]!==((null===(a=this.selector.target.entity)||void 0===a?void 0:a.integration)||(null===(n=this.selector.target.device)||void 0===n?void 0:n.integration))))return!1;return!0}}},{kind:"field",key:"_filterRegEntities",value(){return e=>{var t;return null===(t=this.selector.target.entity)||void 0===t||!t.integration||e.platform===this.selector.target.entity.integration}}},{kind:"field",key:"_filterDevices",value(){return e=>{var t,i,a,n,o;if(null!==(t=this.selector.target.device)&&void 0!==t&&t.manufacturer&&e.manufacturer!==this.selector.target.device.manufacturer)return!1;if(null!==(i=this.selector.target.device)&&void 0!==i&&i.model&&e.model!==this.selector.target.device.model)return!1;if((null!==(a=this.selector.target.device)&&void 0!==a&&a.integration||null!==(n=this.selector.target.entity)&&void 0!==n&&n.integration)&&(null===(o=this._configEntries)||void 0===o||!o.some((t=>e.config_entries.includes(t.entry_id)))))return!1;return!0}}},{kind:"method",key:"_loadConfigEntries",value:async function(){this._configEntries=(await qa(this.hass)).filter((e=>{var t,i;return e.domain===(null===(t=this.selector.target.device)||void 0===t?void 0:t.integration)||e.domain===(null===(i=this.selector.target.entity)||void 0===i?void 0:i.integration)}))}},{kind:"get",static:!0,key:"styles",value:function(){return i`
      ha-target-picker {
        display: block;
      }
    `}}]}}),Hl(m)),v([w("ha-selector-template")],(function(t,i){return{F:class extends i{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[f()],key:"hass",value:void 0},{kind:"field",decorators:[f()],key:"value",value:void 0},{kind:"field",decorators:[f()],key:"label",value:void 0},{kind:"field",decorators:[f()],key:"helper",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[f({type:Boolean})],key:"required",value:()=>!0},{kind:"method",key:"render",value:function(){return k`
      ${this.label?k`<p>${this.label}${this.required?" *":""}</p>`:""}
      <ha-code-editor
        mode="jinja2"
        .hass=${this.hass}
        .value=${this.value}
        .readOnly=${this.disabled}
        autofocus
        autocomplete-entities
        autocomplete-icons
        @value-changed=${this._handleChange}
        dir="ltr"
      ></ha-code-editor>
      ${this.helper?k`<ha-input-helper-text>${this.helper}</ha-input-helper-text>`:""}
    `}},{kind:"method",key:"_handleChange",value:function(t){const i=t.target.value;this.value!==i&&e(this,"value-changed",{value:i})}}]}}),m),v([w("ha-selector-text")],(function(t,a){return{F:class extends a{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[f()],key:"hass",value:void 0},{kind:"field",decorators:[f()],key:"value",value:void 0},{kind:"field",decorators:[f()],key:"label",value:void 0},{kind:"field",decorators:[f()],key:"placeholder",value:void 0},{kind:"field",decorators:[f()],key:"helper",value:void 0},{kind:"field",decorators:[f()],key:"selector",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[f({type:Boolean})],key:"required",value:()=>!0},{kind:"field",decorators:[Vi()],key:"_unmaskedPassword",value:()=>!1},{kind:"method",key:"render",value:function(){var e,t,i,a,n;return null!==(e=this.selector.text)&&void 0!==e&&e.multiline?k`<ha-textarea
        .label=${this.label}
        .placeholder=${this.placeholder}
        .value=${this.value||""}
        .helper=${this.helper}
        helperPersistent
        .disabled=${this.disabled}
        @input=${this._handleChange}
        autocapitalize="none"
        autocomplete="off"
        spellcheck="false"
        .required=${this.required}
        autogrow
      ></ha-textarea>`:k`<ha-textfield
        .value=${this.value||""}
        .placeholder=${this.placeholder||""}
        .helper=${this.helper}
        helperPersistent
        .disabled=${this.disabled}
        .type=${this._unmaskedPassword?"text":null===(t=this.selector.text)||void 0===t?void 0:t.type}
        @input=${this._handleChange}
        .label=${this.label||""}
        .suffix=${"password"===(null===(i=this.selector.text)||void 0===i?void 0:i.type)?k`<div style="width: 24px"></div>`:null===(a=this.selector.text)||void 0===a?void 0:a.suffix}
        .required=${this.required}
      ></ha-textfield>
      ${"password"===(null===(n=this.selector.text)||void 0===n?void 0:n.type)?k`<ha-icon-button
            toggles
            .label=${(this._unmaskedPassword?"Hide":"Show")+" password"}
            @click=${this._toggleUnmaskedPassword}
            .path=${this._unmaskedPassword?Ia:ie}
          ></ha-icon-button>`:""}`}},{kind:"method",key:"_toggleUnmaskedPassword",value:function(){this._unmaskedPassword=!this._unmaskedPassword}},{kind:"method",key:"_handleChange",value:function(t){let i=t.target.value;this.value!==i&&(""!==i||this.required||(i=void 0),e(this,"value-changed",{value:i}))}},{kind:"get",static:!0,key:"styles",value:function(){return i`
      :host {
        display: block;
        position: relative;
      }
      ha-textarea,
      ha-textfield {
        width: 100%;
      }
      ha-icon-button {
        position: absolute;
        top: 16px;
        right: 16px;
        --mdc-icon-button-size: 24px;
        --mdc-icon-size: 20px;
        color: var(--secondary-text-color);
        inset-inline-start: initial;
        inset-inline-end: 16px;
        direction: var(--direction);
      }
    `}}]}}),m),v([w("ha-selector-time")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[f()],key:"hass",value:void 0},{kind:"field",decorators:[f()],key:"selector",value:void 0},{kind:"field",decorators:[f()],key:"value",value:void 0},{kind:"field",decorators:[f()],key:"label",value:void 0},{kind:"field",decorators:[f()],key:"helper",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[f({type:Boolean})],key:"required",value:()=>!1},{kind:"method",key:"render",value:function(){return k`
      <ha-time-input
        .value=${this.value}
        .locale=${this.hass.locale}
        .disabled=${this.disabled}
        .required=${this.required}
        .helper=${this.helper}
        .label=${this.label}
        enable-second
      ></ha-time-input>
    `}}]}}),m),v([w("ha-selector-icon")],(function(t,i){return{F:class extends i{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[f()],key:"hass",value:void 0},{kind:"field",decorators:[f()],key:"selector",value:void 0},{kind:"field",decorators:[f()],key:"value",value:void 0},{kind:"field",decorators:[f()],key:"label",value:void 0},{kind:"field",decorators:[f()],key:"helper",value:void 0},{kind:"field",decorators:[f({type:Boolean,reflect:!0})],key:"disabled",value:()=>!1},{kind:"field",decorators:[f({type:Boolean})],key:"required",value:()=>!0},{kind:"method",key:"render",value:function(){return k`
      <ha-icon-picker
        .label=${this.label}
        .value=${this.value}
        .required=${this.required}
        .disabled=${this.disabled}
        .helper=${this.helper}
        .fallbackPath=${this.selector.icon.fallbackPath}
        .placeholder=${this.selector.icon.placeholder}
        @value-changed=${this._valueChanged}
      ></ha-icon-picker>
    `}},{kind:"method",key:"_valueChanged",value:function(t){e(this,"value-changed",{value:t.detail.value})}}]}}),m),v([w("ha-theme-picker")],(function(t,a){return{F:class extends a{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[f()],key:"value",value:void 0},{kind:"field",decorators:[f()],key:"label",value:void 0},{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f({type:Boolean,reflect:!0})],key:"disabled",value:()=>!1},{kind:"field",decorators:[f({type:Boolean})],key:"required",value:()=>!1},{kind:"method",key:"render",value:function(){return k`
      <ha-select
        .label=${this.label||this.hass.localize("ui.components.theme_picker.theme")}
        .value=${this.value}
        .required=${this.required}
        .disabled=${this.disabled}
        @selected=${this._changed}
        @closed=${Ra}
        fixedMenuPosition
        naturalMenuWidth
      >
        <mwc-list-item value="remove"
          >${this.hass.localize("ui.components.theme_picker.no_theme")}</mwc-list-item
        >
        ${Object.keys(this.hass.themes.themes).sort().map((e=>k`<mwc-list-item .value=${e}>${e}</mwc-list-item>`))}
      </ha-select>
    `}},{kind:"get",static:!0,key:"styles",value:function(){return i`
      ha-select {
        width: 100%;
      }
    `}},{kind:"method",key:"_changed",value:function(t){this.hass&&""!==t.target.value&&(this.value="remove"===t.target.value?void 0:t.target.value,e(this,"value-changed",{value:this.value}))}}]}}),m),v([w("ha-selector-theme")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f({attribute:!1})],key:"selector",value:void 0},{kind:"field",decorators:[f()],key:"value",value:void 0},{kind:"field",decorators:[f()],key:"label",value:void 0},{kind:"field",decorators:[f({type:Boolean,reflect:!0})],key:"disabled",value:()=>!1},{kind:"field",decorators:[f({type:Boolean})],key:"required",value:()=>!0},{kind:"method",key:"render",value:function(){return k`
      <ha-theme-picker
        .hass=${this.hass}
        .value=${this.value}
        .label=${this.label}
        .disabled=${this.disabled}
        .required=${this.required}
      ></ha-theme-picker>
    `}}]}}),m);const zc=(e,t)=>e.tileLayer(`https://{s}.basemaps.cartocdn.com/${t?"dark_all":"light_all"}/{z}/{x}/{y}${e.Browser.retina?"@2x.png":".png"}`,{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attributions">CARTO</a>',subdomains:"abcd",minZoom:0,maxZoom:20});let Sc=v(null,(function(t,a){return{F:class extends a{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[f({attribute:"entity-id"})],key:"entityId",value:void 0},{kind:"field",decorators:[f({attribute:"entity-name"})],key:"entityName",value:void 0},{kind:"field",decorators:[f({attribute:"entity-picture"})],key:"entityPicture",value:void 0},{kind:"field",decorators:[f({attribute:"entity-color"})],key:"entityColor",value:void 0},{kind:"method",key:"render",value:function(){return k`
      <div
        class="marker"
        style=${ji({"border-color":this.entityColor})}
        @click=${this._badgeTap}
      >
        ${this.entityPicture?k`<div
              class="entity-picture"
              style=${ji({"background-image":`url(${this.entityPicture})`})}
            ></div>`:this.entityName}
      </div>
    `}},{kind:"method",key:"_badgeTap",value:function(t){t.stopPropagation(),this.entityId&&e(this,"hass-more-info",{entityId:this.entityId})}},{kind:"get",static:!0,key:"styles",value:function(){return i`
      .marker {
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        overflow: hidden;
        width: 48px;
        height: 48px;
        font-size: var(--ha-marker-font-size, 1.5em);
        border-radius: 50%;
        border: 1px solid var(--ha-marker-color, var(--primary-color));
        color: var(--primary-text-color);
        background-color: var(--card-background-color);
      }
      .entity-picture {
        background-size: cover;
        height: 100%;
        width: 100%;
      }
    `}}]}}),m);customElements.define("ha-entity-marker",Sc);const Lc=async()=>{"function"!=typeof ResizeObserver&&(window.ResizeObserver=(await import("./c.004a7b01.js")).default)},Tc=e=>"string"==typeof e?e:e.entity_id;v([w("ha-map")],(function(e,t){class a extends t{constructor(...t){super(...t),e(this)}}return{F:a,d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f({attribute:!1})],key:"entities",value:void 0},{kind:"field",decorators:[f({attribute:!1})],key:"paths",value:void 0},{kind:"field",decorators:[f({attribute:!1})],key:"layers",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"autoFit",value:()=>!1},{kind:"field",decorators:[f({type:Boolean})],key:"fitZones",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"darkMode",value:void 0},{kind:"field",decorators:[f({type:Number})],key:"zoom",value:()=>14},{kind:"field",decorators:[Vi()],key:"_loaded",value:()=>!1},{kind:"field",key:"leafletMap",value:void 0},{kind:"field",key:"Leaflet",value:void 0},{kind:"field",key:"_tileLayer",value:void 0},{kind:"field",key:"_resizeObserver",value:void 0},{kind:"field",key:"_mapItems",value:()=>[]},{kind:"field",key:"_mapZones",value:()=>[]},{kind:"field",key:"_mapPaths",value:()=>[]},{kind:"method",key:"connectedCallback",value:function(){_(y(a.prototype),"connectedCallback",this).call(this),this._loadMap(),this._attachObserver()}},{kind:"method",key:"disconnectedCallback",value:function(){_(y(a.prototype),"disconnectedCallback",this).call(this),this.leafletMap&&(this.leafletMap.remove(),this.leafletMap=void 0,this.Leaflet=void 0),this._loaded=!1,this._resizeObserver&&this._resizeObserver.unobserve(this)}},{kind:"method",key:"update",value:function(e){var t;if(_(y(a.prototype),"update",this).call(this,e),!this._loaded)return;const i=e.get("hass");if(e.has("_loaded")||e.has("entities"))this._drawEntities();else if(this._loaded&&i&&this.entities)for(const e of this.entities)if(i.states[Tc(e)]!==this.hass.states[Tc(e)]){this._drawEntities();break}if((e.has("_loaded")||e.has("paths"))&&this._drawPaths(),(e.has("_loaded")||e.has("layers"))&&this._drawLayers(e.get("layers")),(e.has("_loaded")||(e.has("entities")||e.has("layers"))&&this.autoFit)&&this.fitMap(),e.has("zoom")&&this.leafletMap.setZoom(this.zoom),!e.has("darkMode")&&(!e.has("hass")||i&&i.themes.darkMode===this.hass.themes.darkMode))return;const n=null!==(t=this.darkMode)&&void 0!==t?t:this.hass.themes.darkMode;this._tileLayer=((e,t,i,a)=>(t.removeLayer(i),(i=zc(e,a)).addTo(t),i))(this.Leaflet,this.leafletMap,this._tileLayer,n),this.shadowRoot.getElementById("map").classList.toggle("dark",n)}},{kind:"method",key:"_loadMap",value:async function(){var e;let t=this.shadowRoot.getElementById("map");t||(t=document.createElement("div"),t.id="map",this.shadowRoot.append(t));const i=null!==(e=this.darkMode)&&void 0!==e?e:this.hass.themes.darkMode;[this.leafletMap,this.Leaflet,this._tileLayer]=await(async(e,t)=>{if(!e.parentNode)throw new Error("Cannot setup Leaflet map on disconnected element");const i=(await import("./c.99c1c4ba.js")).default;i.Icon.Default.imagePath="/static/images/leaflet/images/";const a=i.map(e),n=document.createElement("link");return n.setAttribute("href","/static/images/leaflet/leaflet.css"),n.setAttribute("rel","stylesheet"),e.parentNode.appendChild(n),a.setView([52.3731339,4.8903147],13),[a,i,zc(i,Boolean(t)).addTo(a)]})(t,i),this.shadowRoot.getElementById("map").classList.toggle("dark",i),this._loaded=!0}},{kind:"method",key:"fitMap",value:function(){var e,t;if(!this.leafletMap||!this.Leaflet||!this.hass)return;if(!(this._mapItems.length||null!==(e=this.layers)&&void 0!==e&&e.length))return void this.leafletMap.setView(new this.Leaflet.LatLng(this.hass.config.latitude,this.hass.config.longitude),this.zoom);let i=this.Leaflet.latLngBounds(this._mapItems?this._mapItems.map((e=>e.getLatLng())):[]);var a;this.fitZones&&(null===(a=this._mapZones)||void 0===a||a.forEach((e=>{i.extend("getBounds"in e?e.getBounds():e.getLatLng())})));null===(t=this.layers)||void 0===t||t.forEach((e=>{i.extend("getBounds"in e?e.getBounds():e.getLatLng())})),this.layers||(i=i.pad(.5)),this.leafletMap.fitBounds(i,{maxZoom:this.zoom})}},{kind:"method",key:"_drawLayers",value:function(e){if(e&&e.forEach((e=>e.remove())),!this.layers)return;const t=this.leafletMap;this.layers.forEach((e=>{t.addLayer(e)}))}},{kind:"method",key:"_drawPaths",value:function(){const e=this.hass,t=this.leafletMap,i=this.Leaflet;if(!e||!t||!i)return;if(this._mapPaths.length&&(this._mapPaths.forEach((e=>e.remove())),this._mapPaths=[]),!this.paths)return;const a=getComputedStyle(this).getPropertyValue("--dark-primary-color");this.paths.forEach((e=>{let n,o;e.gradualOpacity&&(n=e.gradualOpacity/(e.points.length-2),o=1-e.gradualOpacity);for(let t=0;t<e.points.length-1;t++){const s=e.gradualOpacity?o+t*n:void 0;this._mapPaths.push(i.circleMarker(e.points[t],{radius:3,color:e.color||a,opacity:s,fillOpacity:s,interactive:!1})),this._mapPaths.push(i.polyline([e.points[t],e.points[t+1]],{color:e.color||a,opacity:s,interactive:!1}))}const s=e.points.length-1;if(s>=0){const t=e.gradualOpacity?o+s*n:void 0;this._mapPaths.push(i.circleMarker(e.points[s],{radius:3,color:e.color||a,opacity:t,fillOpacity:t,interactive:!1}))}this._mapPaths.forEach((e=>t.addLayer(e)))}))}},{kind:"method",key:"_drawEntities",value:function(){var e;const t=this.hass,i=this.leafletMap,a=this.Leaflet;if(!t||!i||!a)return;if(this._mapItems.length&&(this._mapItems.forEach((e=>e.remove())),this._mapItems=[]),this._mapZones.length&&(this._mapZones.forEach((e=>e.remove())),this._mapZones=[]),!this.entities)return;const n=getComputedStyle(this),o=n.getPropertyValue("--accent-color"),s=n.getPropertyValue("--dark-primary-color"),r=(null!==(e=this.darkMode)&&void 0!==e?e:this.hass.themes.darkMode)?"dark":"light";for(const e of this.entities){const i=t.states[Tc(e)];if(!i)continue;const n=Sn(i),{latitude:l,longitude:d,passive:c,icon:u,radius:h,entity_picture:p,gps_accuracy:v}=i.attributes;if(!l||!d)continue;if("zone"===as(i)){if(c)continue;let e="";if(u){const t=document.createElement("ha-icon");t.setAttribute("icon",u),e=t.outerHTML}else{const t=document.createElement("span");t.innerHTML=n,e=t.outerHTML}this._mapZones.push(a.marker([l,d],{icon:a.divIcon({html:e,iconSize:[24,24],className:r}),interactive:!1,title:n})),this._mapZones.push(a.circle([l,d],{interactive:!1,color:o,radius:h}));continue}const m=n.split(" ").map((e=>e[0])).join("").substr(0,3);this._mapItems.push(a.marker([l,d],{icon:a.divIcon({html:`\n              <ha-entity-marker\n                entity-id="${Tc(e)}"\n                entity-name="${m}"\n                entity-picture="${p?this.hass.hassUrl(p):""}"\n                ${"string"!=typeof e?`entity-color="${e.color}"`:""}\n              ></ha-entity-marker>\n            `,iconSize:[48,48],className:""}),title:Sn(i)})),v&&this._mapItems.push(a.circle([l,d],{interactive:!1,color:s,radius:v}))}this._mapItems.forEach((e=>i.addLayer(e))),this._mapZones.forEach((e=>i.addLayer(e)))}},{kind:"method",key:"_attachObserver",value:async function(){this._resizeObserver||(await Lc(),this._resizeObserver=new ResizeObserver((()=>{var e;null===(e=this.leafletMap)||void 0===e||e.invalidateSize({debounceMoveend:!0})}))),this._resizeObserver.observe(this)}},{kind:"get",static:!0,key:"styles",value:function(){return i`
      :host {
        display: block;
        height: 300px;
      }
      #map {
        height: 100%;
      }
      #map.dark {
        background: #090909;
      }
      .light {
        color: #000000;
      }
      .dark {
        color: #ffffff;
      }
      .leaflet-marker-draggable {
        cursor: move !important;
      }
      .leaflet-edit-resize {
        border-radius: 50%;
        cursor: nesw-resize !important;
      }
      .named-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        text-align: center;
        color: var(--primary-text-color);
      }
      .leaflet-pane {
        z-index: 0 !important;
      }
      .leaflet-control,
      .leaflet-top,
      .leaflet-bottom {
        z-index: 1 !important;
      }
    `}}]}}),Gi),v([w("ha-locations-editor")],(function(t,a){class n extends a{constructor(){super(),t(this),import("./c.99c1c4ba.js").then((e=>{import("./c.bc53dda1.js").then((()=>{this.Leaflet=e.default,this._updateMarkers(),this.updateComplete.then((()=>this.fitMap()))}))}))}}return{F:n,d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f({attribute:!1})],key:"locations",value:void 0},{kind:"field",decorators:[f()],key:"helper",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"autoFit",value:()=>!1},{kind:"field",decorators:[f({type:Number})],key:"zoom",value:()=>16},{kind:"field",decorators:[f({type:Boolean})],key:"darkMode",value:void 0},{kind:"field",decorators:[Vi()],key:"_locationMarkers",value:void 0},{kind:"field",decorators:[Vi()],key:"_circles",value:()=>({})},{kind:"field",decorators:[g("ha-map",!0)],key:"map",value:void 0},{kind:"field",key:"Leaflet",value:void 0},{kind:"method",key:"fitMap",value:function(){this.map.fitMap()}},{kind:"method",key:"fitMarker",value:function(e){if(!this.map.leafletMap||!this._locationMarkers)return;const t=this._locationMarkers[e];if(t)if("getBounds"in t)this.map.leafletMap.fitBounds(t.getBounds()),t.bringToFront();else{const i=this._circles[e];i?this.map.leafletMap.fitBounds(i.getBounds()):this.map.leafletMap.setView(t.getLatLng(),this.zoom)}}},{kind:"method",key:"render",value:function(){return k`
      <ha-map
        .hass=${this.hass}
        .layers=${this._getLayers(this._circles,this._locationMarkers)}
        .zoom=${this.zoom}
        .autoFit=${this.autoFit}
        .darkMode=${this.darkMode}
      ></ha-map>
      ${this.helper?k`<ha-input-helper-text>${this.helper}</ha-input-helper-text>`:""}
    `}},{kind:"field",key:"_getLayers",value:()=>Ri(((e,t)=>{const i=[];return Array.prototype.push.apply(i,Object.values(e)),t&&Array.prototype.push.apply(i,Object.values(t)),i}))},{kind:"method",key:"willUpdate",value:function(e){_(y(n.prototype),"willUpdate",this).call(this,e),this.Leaflet&&e.has("locations")&&this._updateMarkers()}},{kind:"method",key:"_updateLocation",value:function(t){const i=t.target,a=i.getLatLng();let n=a.lng;Math.abs(n)>180&&(n=(n%360+540)%360-180);const o=[a.lat,n];e(this,"location-updated",{id:i.id,location:o},{bubbles:!1})}},{kind:"method",key:"_updateRadius",value:function(t){const i=t.target,a=this._locationMarkers[i.id];e(this,"radius-updated",{id:i.id,radius:a.getRadius()},{bubbles:!1})}},{kind:"method",key:"_markerClicked",value:function(t){const i=t.target;e(this,"marker-clicked",{id:i.id},{bubbles:!1})}},{kind:"method",key:"_updateMarkers",value:function(){if(!this.locations||!this.locations.length)return this._circles={},void(this._locationMarkers=void 0);const t={},i={},a=getComputedStyle(this).getPropertyValue("--accent-color");this.locations.forEach((e=>{let n;if(e.icon){const t=document.createElement("div");t.className="named-icon",e.name&&(t.innerText=e.name);const i=document.createElement("ha-icon");i.setAttribute("icon",e.icon),t.prepend(i),n=this.Leaflet.divIcon({html:t.outerHTML,iconSize:[24,24],className:"light"})}if(e.radius){const o=this.Leaflet.circle([e.latitude,e.longitude],{color:e.radius_color||a,radius:e.radius});e.radius_editable||e.location_editable?(o.editing.enable(),o.addEventListener("add",(()=>{const t=o.editing._moveMarker,i=o.editing._resizeMarkers[0];n&&t.setIcon(n),i.id=t.id=e.id,t.addEventListener("dragend",(e=>this._updateLocation(e))).addEventListener("click",(e=>this._markerClicked(e))),e.radius_editable?i.addEventListener("dragend",(e=>this._updateRadius(e))):i.remove()})),t[e.id]=o):i[e.id]=o}if(!e.radius||!e.radius_editable&&!e.location_editable){const i={title:e.name,draggable:e.location_editable};n&&(i.icon=n);const a=this.Leaflet.marker([e.latitude,e.longitude],i).addEventListener("dragend",(e=>this._updateLocation(e))).addEventListener("click",(e=>this._markerClicked(e)));a.id=e.id,t[e.id]=a}})),this._circles=i,this._locationMarkers=t,e(this,"markers-updated")}},{kind:"get",static:!0,key:"styles",value:function(){return i`
      ha-map {
        display: block;
        height: 100%;
      }
    `}}]}}),m),v([w("ha-selector-location")],(function(t,a){return{F:class extends a{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f({attribute:!1})],key:"selector",value:void 0},{kind:"field",decorators:[f()],key:"value",value:void 0},{kind:"field",decorators:[f()],key:"label",value:void 0},{kind:"field",decorators:[f()],key:"helper",value:void 0},{kind:"field",decorators:[f({type:Boolean,reflect:!0})],key:"disabled",value:()=>!1},{kind:"method",key:"render",value:function(){return k`
      <ha-locations-editor
        class="flex"
        .hass=${this.hass}
        .helper=${this.helper}
        .locations=${this._location(this.selector,this.value)}
        @location-updated=${this._locationChanged}
        @radius-updated=${this._radiusChanged}
      ></ha-locations-editor>
    `}},{kind:"field",key:"_location",value(){return Ri(((e,t)=>{const i=getComputedStyle(this),a=e.location.radius?i.getPropertyValue("--zone-radius-color")||i.getPropertyValue("--accent-color"):void 0;return[{id:"location",latitude:(null==t?void 0:t.latitude)||this.hass.config.latitude,longitude:(null==t?void 0:t.longitude)||this.hass.config.longitude,radius:e.location.radius?(null==t?void 0:t.radius)||1e3:void 0,radius_color:a,icon:e.location.icon||e.location.radius?"mdi:map-marker-radius":"mdi:map-marker",location_editable:!0,radius_editable:!0}]}))}},{kind:"method",key:"_locationChanged",value:function(t){const[i,a]=t.detail.location;e(this,"value-changed",{value:{...this.value,latitude:i,longitude:a}})}},{kind:"method",key:"_radiusChanged",value:function(t){const i=t.detail.radius;e(this,"value-changed",{value:{...this.value,radius:i}})}},{kind:"field",static:!0,key:"styles",value:()=>i`
    :host {
      display: block;
      height: 400px;
    }
  `}]}}),m);customElements.define("ha-labeled-slider",class extends n{static get template(){return o`
      <style>
        :host {
          display: block;
        }

        .title {
          margin: 5px 0 8px;
          color: var(--primary-text-color);
        }

        .slider-container {
          display: flex;
        }

        ha-icon {
          margin-top: 4px;
          color: var(--secondary-text-color);
        }

        ha-slider {
          flex-grow: 1;
          background-image: var(--ha-slider-background);
          border-radius: 4px;
        }
      </style>

      <div class="title">[[_getTitle()]]</div>
      <div class="extra-container"><slot name="extra"></slot></div>
      <div class="slider-container">
        <ha-icon icon="[[icon]]" hidden$="[[!icon]]"></ha-icon>
        <ha-slider
          min="[[min]]"
          max="[[max]]"
          step="[[step]]"
          pin="[[pin]]"
          disabled="[[disabled]]"
          value="{{value}}"
        ></ha-slider>
      </div>
      <template is="dom-if" if="[[helper]]">
        <ha-input-helper-text>[[helper]]</ha-input-helper-text>
      </template>
    `}_getTitle(){return`${this.caption}${this.caption&&this.required?" *":""}`}static get properties(){return{caption:String,disabled:Boolean,required:Boolean,min:Number,max:Number,pin:Boolean,step:Number,helper:String,extra:{type:Boolean,value:!1},ignoreBarTouch:{type:Boolean,value:!0},icon:{type:String,value:""},value:{type:Number,notify:!0}}}}),v([w("ha-selector-color_temp")],(function(t,a){return{F:class extends a{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[f()],key:"hass",value:void 0},{kind:"field",decorators:[f()],key:"selector",value:void 0},{kind:"field",decorators:[f()],key:"value",value:void 0},{kind:"field",decorators:[f()],key:"label",value:void 0},{kind:"field",decorators:[f()],key:"helper",value:void 0},{kind:"field",decorators:[f({type:Boolean,reflect:!0})],key:"disabled",value:()=>!1},{kind:"field",decorators:[f({type:Boolean})],key:"required",value:()=>!0},{kind:"method",key:"render",value:function(){var e,t,i,a;return k`
      <ha-labeled-slider
        pin
        icon="hass:thermometer"
        .caption=${this.label||""}
        .min=${null!==(e=null===(t=this.selector.color_temp)||void 0===t?void 0:t.min_mireds)&&void 0!==e?e:153}
        .max=${null!==(i=null===(a=this.selector.color_temp)||void 0===a?void 0:a.max_mireds)&&void 0!==i?i:500}
        .value=${this.value}
        .disabled=${this.disabled}
        .helper=${this.helper}
        .required=${this.required}
        @change=${this._valueChanged}
      ></ha-labeled-slider>
    `}},{kind:"method",key:"_valueChanged",value:function(t){e(this,"value-changed",{value:Number(t.target.value)})}},{kind:"field",static:!0,key:"styles",value:()=>i`
    ha-labeled-slider {
      --ha-slider-background: -webkit-linear-gradient(
        right,
        rgb(255, 160, 0) 0%,
        white 50%,
        rgb(166, 209, 255) 100%
      );
      /* The color temp minimum value shouldn't be rendered differently. It's not "off". */
      --paper-slider-knob-start-border-color: var(--primary-color);
    }
  `}]}}),m);let Oc=v([w("ha-selector")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[f()],key:"hass",value:void 0},{kind:"field",decorators:[f()],key:"selector",value:void 0},{kind:"field",decorators:[f()],key:"value",value:void 0},{kind:"field",decorators:[f()],key:"label",value:void 0},{kind:"field",decorators:[f()],key:"helper",value:void 0},{kind:"field",decorators:[f()],key:"placeholder",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[f({type:Boolean})],key:"required",value:()=>!0},{kind:"field",decorators:[f()],key:"context",value:void 0},{kind:"method",key:"focus",value:function(){var e,t;null===(e=this.shadowRoot)||void 0===e||null===(t=e.getElementById("selector"))||void 0===t||t.focus()}},{kind:"get",key:"_type",value:function(){return Object.keys(this.selector)[0]}},{kind:"method",key:"render",value:function(){return k`
      ${za(`ha-selector-${this._type}`,{hass:this.hass,selector:this.selector,value:this.value,label:this.label,placeholder:this.placeholder,disabled:this.disabled,required:this.required,helper:this.helper,context:this.context,id:"selector"})}
    `}}]}}),m);var Pc=Object.freeze({__proto__:null,HaSelector:Oc});export{vd as B,md as M,is as U,hc as a,fd as b,Qa as c,bd as d,pc as e,uc as f,os as g,Pc as h,Lc as i,tc as l,gc as t};
