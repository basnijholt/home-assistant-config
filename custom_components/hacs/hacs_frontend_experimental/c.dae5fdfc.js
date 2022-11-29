import{aT as e,aU as t,aV as i,aW as a,aX as o,aY as n,aZ as s,a_ as d,a$ as r,b0 as l,b1 as c,b2 as u,b3 as h,b4 as v,d as g,_ as p,j as m,e as f,t as y,i as k,y as _,b5 as b,k as $,E as x,G as w,O as C,ae as z,n as M,m as O,aD as A,aE as T,b6 as P,b7 as U,b8 as E,b9 as j,ba as F,bb as I,bc as N,bd as S,be as L,aF as B,bf as D,bg as q,bh as W,bi as R,bj as K,bk as V,bl as X,a7 as Y,at as G,as as J,bm as H,bn as Q,bo as Z,bp as ee,bq as te,br as ie,bs as ae,bt as oe,I as ne,J as se,N as de,C as re,a4 as le,bu as ce}from"./main-c66a9a06.js";import{d as ue}from"./c.10855172.js";import{c as he}from"./c.279495d9.js";import{s as ve,c as ge}from"./c.874c8cfd.js";import{L as pe,s as me}from"./c.41d13611.js";import{d as fe}from"./c.bbadaeea.js";import{f as ye,c as ke}from"./c.d0468013.js";import"./c.6ada13f5.js";import{s as _e}from"./c.468b43fb.js";import{e as be}from"./c.3f62d98e.js";import{c as $e}from"./c.6eb9fcd4.js";import{e as xe,c as we,a as Ce}from"./c.15496b0b.js";import{d as ze}from"./c.05172f3d.js";import{s as Me,a as Oe,b as Ae}from"./c.4b0dc107.js";import"./c.997c429c.js";import{d as Te}from"./c.a5550d10.js";import"./c.89ace730.js";import"./c.9381c7ae.js";import"./c.a6328fdc.js";import{f as Pe}from"./c.d9d8b90e.js";import{c as Ue}from"./c.fa0ef026.js";import"./c.7cf5fd2b.js";import"./c.163f08fb.js";import"./c.8e28b461.js";import"./c.930daaba.js";import"./c.708f0e16.js";import"./c.31caccfc.js";import"./c.3acef177.js";import"./c.743a15a1.js";import"./c.2610e8cd.js";import"./c.a0946910.js";import"./c.e95db283.js";import"./c.1024e243.js";import"./c.d2f13ac1.js";import"./c.d0c1a17e.js";import"./c.811f664e.js";import"./c.04ecc0ad.js";import"./c.5fe2e3ab.js";import"./c.c55c9f95.js";import"./c.baaad129.js";import"./c.4f015773.js";import"./c.08837419.js";import"./c.07e395f8.js";const Ee={condition:e,delay:t,event:i,play_media:a,activate_scene:o,service:n,wait_template:s,wait_for_trigger:d,repeat:r,choose:l,if:c,device_id:u,stop:h,parallel:v},je=g`
  #sortable a:nth-of-type(2n) paper-icon-item {
    animation-name: keyframes1;
    animation-iteration-count: infinite;
    transform-origin: 50% 10%;
    animation-delay: -0.75s;
    animation-duration: 0.25s;
  }

  #sortable a:nth-of-type(2n-1) paper-icon-item {
    animation-name: keyframes2;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    transform-origin: 30% 5%;
    animation-delay: -0.5s;
    animation-duration: 0.33s;
  }

  #sortable a {
    height: 48px;
    display: flex;
  }

  #sortable {
    outline: none;
    display: block !important;
  }

  .hidden-panel {
    display: flex !important;
  }

  .sortable-fallback {
    display: none;
  }

  .sortable-ghost {
    opacity: 0.4;
  }

  .sortable-fallback {
    opacity: 0;
  }

  @keyframes keyframes1 {
    0% {
      transform: rotate(-1deg);
      animation-timing-function: ease-in;
    }

    50% {
      transform: rotate(1.5deg);
      animation-timing-function: ease-out;
    }
  }

  @keyframes keyframes2 {
    0% {
      transform: rotate(1deg);
      animation-timing-function: ease-in;
    }

    50% {
      transform: rotate(-1.5deg);
      animation-timing-function: ease-out;
    }
  }

  .show-panel,
  .hide-panel {
    display: none;
    position: absolute;
    top: 0;
    right: 4px;
    --mdc-icon-button-size: 40px;
  }

  :host([rtl]) .show-panel {
    right: initial;
    left: 4px;
  }

  .hide-panel {
    top: 4px;
    right: 8px;
  }

  :host([rtl]) .hide-panel {
    right: initial;
    left: 8px;
  }

  :host([expanded]) .hide-panel {
    display: block;
  }

  :host([expanded]) .show-panel {
    display: inline-flex;
  }

  paper-icon-item.hidden-panel,
  paper-icon-item.hidden-panel span,
  paper-icon-item.hidden-panel ha-icon[slot="item-icon"] {
    color: var(--secondary-text-color);
    cursor: pointer;
  }
`;let Fe;const Ie=async()=>(Fe||(Fe=(await import("./c.c177bbc3.js")).default),Fe);class Ne extends TypeError{constructor(e,t){let i;const{message:a,...o}=e,{path:n}=e;super(0===n.length?a:"At path: "+n.join(".")+" -- "+a),this.value=void 0,this.key=void 0,this.type=void 0,this.refinement=void 0,this.path=void 0,this.branch=void 0,this.failures=void 0,Object.assign(this,o),this.name=this.constructor.name,this.failures=()=>{var a;return null!=(a=i)?a:i=[e,...t()]}}}function Se(e){return"object"==typeof e&&null!=e}function Le(e){return"string"==typeof e?JSON.stringify(e):""+e}function Be(e,t,i,a){if(!0===e)return;!1===e?e={}:"string"==typeof e&&(e={message:e});const{path:o,branch:n}=t,{type:s}=i,{refinement:d,message:r="Expected a value of type `"+s+"`"+(d?" with refinement `"+d+"`":"")+", but received: `"+Le(a)+"`"}=e;return{value:a,type:s,refinement:d,key:o[o.length-1],path:o,branch:n,...e,message:r}}function*De(e,t,i,a){(function(e){return Se(e)&&"function"==typeof e[Symbol.iterator]})(e)||(e=[e]);for(const o of e){const e=Be(o,t,i,a);e&&(yield e)}}function*qe(e,t,i){void 0===i&&(i={});const{path:a=[],branch:o=[e],coerce:n=!1,mask:s=!1}=i,d={path:a,branch:o};if(n&&(e=t.coercer(e,d),s&&"type"!==t.type&&Se(t.schema)&&Se(e)&&!Array.isArray(e)))for(const i in e)void 0===t.schema[i]&&delete e[i];let r=!0;for(const i of t.validator(e,d))r=!1,yield[i,void 0];for(let[i,l,c]of t.entries(e,d)){const t=qe(l,c,{path:void 0===i?a:[...a,i],branch:void 0===i?o:[...o,l],coerce:n,mask:s});for(const a of t)a[0]?(r=!1,yield[a[0],void 0]):n&&(l=a[1],void 0===i?e=l:e instanceof Map?e.set(i,l):e instanceof Set?e.add(l):Se(e)&&(e[i]=l))}if(r)for(const i of t.refiner(e,d))r=!1,yield[i,void 0];r&&(yield[void 0,e])}class We{constructor(e){this.TYPE=void 0,this.type=void 0,this.schema=void 0,this.coercer=void 0,this.validator=void 0,this.refiner=void 0,this.entries=void 0;const{type:t,schema:i,validator:a,refiner:o,coercer:n=(e=>e),entries:s=function*(){}}=e;this.type=t,this.schema=i,this.entries=s,this.coercer=n,this.validator=a?(e,t)=>De(a(e,t),t,this,e):()=>[],this.refiner=o?(e,t)=>De(o(e,t),t,this,e):()=>[]}assert(e){return Re(e,this)}create(e){return function(e,t){const i=Ve(e,t,{coerce:!0});if(i[0])throw i[0];return i[1]}(e,this)}is(e){return Ke(e,this)}mask(e){return function(e,t){const i=Ve(e,t,{coerce:!0,mask:!0});if(i[0])throw i[0];return i[1]}(e,this)}validate(e,t){return void 0===t&&(t={}),Ve(e,this,t)}}function Re(e,t){const i=Ve(e,t);if(i[0])throw i[0]}function Ke(e,t){return!Ve(e,t)[0]}function Ve(e,t,i){void 0===i&&(i={});const a=qe(e,t,i),o=function(e){const{done:t,value:i}=e.next();return t?void 0:i}(a);if(o[0]){const e=new Ne(o[0],(function*(){for(const e of a)e[0]&&(yield e[0])}));return[e,void 0]}return[void 0,o[1]]}function Xe(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];const a="type"===t[0].type,o=t.map((e=>e.schema)),n=Object.assign({},...o);return a?at(n):et(n)}function Ye(e,t){return new We({type:e,schema:null,validator:t})}function Ge(){return Ye("any",(()=>!0))}function Je(e){return new We({type:"array",schema:e,*entries(t){if(e&&Array.isArray(t))for(const[i,a]of t.entries())yield[i,a,e]},coercer:e=>Array.isArray(e)?e.slice():e,validator:e=>Array.isArray(e)||"Expected an array value, but received: "+Le(e)})}function He(){return Ye("boolean",(e=>"boolean"==typeof e))}function Qe(e){const t=Le(e),i=typeof e;return new We({type:"literal",schema:"string"===i||"number"===i||"boolean"===i?e:null,validator:i=>i===e||"Expected the literal `"+t+"`, but received: "+Le(i)})}function Ze(){return Ye("number",(e=>"number"==typeof e&&!isNaN(e)||"Expected a number, but received: "+Le(e)))}function et(e){const t=e?Object.keys(e):[],i=Ye("never",(()=>!1));return new We({type:"object",schema:e||null,*entries(a){if(e&&Se(a)){const o=new Set(Object.keys(a));for(const i of t)o.delete(i),yield[i,a[i],e[i]];for(const e of o)yield[e,a[e],i]}},validator:e=>Se(e)||"Expected an object, but received: "+Le(e),coercer:e=>Se(e)?{...e}:e})}function tt(e){return new We({...e,validator:(t,i)=>void 0===t||e.validator(t,i),refiner:(t,i)=>void 0===t||e.refiner(t,i)})}function it(){return Ye("string",(e=>"string"==typeof e||"Expected a string, but received: "+Le(e)))}function at(e){const t=Object.keys(e);return new We({type:"type",schema:e,*entries(i){if(Se(i))for(const a of t)yield[a,i[a],e[a]]},validator:e=>Se(e)||"Expected an object, but received: "+Le(e)})}function ot(e){const t=e.map((e=>e.type)).join(" | ");return new We({type:"union",schema:null,coercer(t,i){const a=e.find((e=>{const[i]=e.validate(t,{coerce:!0});return!i}))||Ye("unknown",(()=>!0));return a.coercer(t,i)},validator(i,a){const o=[];for(const t of e){const[...e]=qe(i,t,a),[n]=e;if(!n[0])return[];for(const[t]of e)t&&o.push(t)}return["Expected the value to satisfy a union of `"+t+"`, but received: "+Le(i),...o]}})}const nt=(e,t)=>{if(!(t instanceof Ne))return{warnings:[t.message],errors:void 0};const i=[],a=[];for(const o of t.failures())if(void 0===o.value)i.push(e.localize("ui.errors.config.key_missing","key",o.path.join(".")));else if("never"===o.type)a.push(e.localize("ui.errors.config.key_not_expected","key",o.path.join(".")));else{if("union"===o.type)continue;"enums"===o.type?a.push(e.localize("ui.errors.config.key_wrong_type","key",o.path.join("."),"type_correct",o.message.replace("Expected ","").split(", ")[0],"type_wrong",JSON.stringify(o.value))):a.push(e.localize("ui.errors.config.key_wrong_type","key",o.path.join("."),"type_correct",o.refinement||o.type,"type_wrong",JSON.stringify(o.value)))}return{warnings:a,errors:i}};p([M("ha-expansion-panel")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[f({type:Boolean,reflect:!0})],key:"expanded",value:()=>!1},{kind:"field",decorators:[f({type:Boolean,reflect:!0})],key:"outlined",value:()=>!1},{kind:"field",decorators:[f({type:Boolean,reflect:!0})],key:"leftChevron",value:()=>!1},{kind:"field",decorators:[f()],key:"header",value:void 0},{kind:"field",decorators:[f()],key:"secondary",value:void 0},{kind:"field",decorators:[y()],key:"_showContent",value(){return this.expanded}},{kind:"field",decorators:[k(".container")],key:"_container",value:void 0},{kind:"method",key:"render",value:function(){return _`
      <div class="top">
        <div
          id="summary"
          @click=${this._toggleContainer}
          @keydown=${this._toggleContainer}
          @focus=${this._focusChanged}
          @blur=${this._focusChanged}
          role="button"
          tabindex="0"
          aria-expanded=${this.expanded}
          aria-controls="sect1"
        >
          ${this.leftChevron?_`
                <ha-svg-icon
                  .path=${b}
                  class="summary-icon ${$({expanded:this.expanded})}"
                ></ha-svg-icon>
              `:""}
          <slot name="header">
            <div class="header">
              ${this.header}
              <slot class="secondary" name="secondary">${this.secondary}</slot>
            </div>
          </slot>
          ${this.leftChevron?"":_`
                <ha-svg-icon
                  .path=${b}
                  class="summary-icon ${$({expanded:this.expanded})}"
                ></ha-svg-icon>
              `}
        </div>
        <slot name="icons"></slot>
      </div>
      <div
        class="container ${$({expanded:this.expanded})}"
        @transitionend=${this._handleTransitionEnd}
        role="region"
        aria-labelledby="summary"
        aria-hidden=${!this.expanded}
        tabindex="-1"
      >
        ${this._showContent?_`<slot></slot>`:""}
      </div>
    `}},{kind:"method",key:"willUpdate",value:function(e){x(w(i.prototype),"willUpdate",this).call(this,e),e.has("expanded")&&this.expanded&&(this._showContent=this.expanded,setTimeout((()=>{this.expanded&&(this._container.style.overflow="initial")}),300))}},{kind:"method",key:"_handleTransitionEnd",value:function(){this._container.style.removeProperty("height"),this._container.style.overflow=this.expanded?"initial":"hidden",this._showContent=this.expanded}},{kind:"method",key:"_toggleContainer",value:async function(e){if(e.defaultPrevented)return;if("keydown"===e.type&&"Enter"!==e.key&&" "!==e.key)return;e.preventDefault();const t=!this.expanded;C(this,"expanded-will-change",{expanded:t}),this._container.style.overflow="hidden",t&&(this._showContent=!0,await z());const i=this._container.scrollHeight;this._container.style.height=`${i}px`,t||setTimeout((()=>{this._container.style.height="0px"}),0),this.expanded=t,C(this,"expanded-changed",{expanded:this.expanded})}},{kind:"method",key:"_focusChanged",value:function(e){this.shadowRoot.querySelector(".top").classList.toggle("focused","focus"===e.type)}},{kind:"get",static:!0,key:"styles",value:function(){return g`
      :host {
        display: block;
      }

      .top {
        display: flex;
        align-items: center;
      }

      .top.focused {
        background: var(--input-fill-color);
      }

      :host([outlined]) {
        box-shadow: none;
        border-width: 1px;
        border-style: solid;
        border-color: var(
          --ha-card-border-color,
          var(--divider-color, #e0e0e0)
        );
        border-radius: var(--ha-card-border-radius, 12px);
      }

      .summary-icon {
        margin-left: 8px;
      }

      :host([leftchevron]) .summary-icon {
        margin-left: 0;
        margin-right: 8px;
      }

      #summary {
        flex: 1;
        display: flex;
        padding: var(--expansion-panel-summary-padding, 0 8px);
        min-height: 48px;
        align-items: center;
        cursor: pointer;
        overflow: hidden;
        font-weight: 500;
        outline: none;
      }

      .summary-icon {
        transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1);
        direction: var(--direction);
      }

      .summary-icon.expanded {
        transform: rotate(180deg);
      }

      .header,
      ::slotted([slot="header"]) {
        flex: 1;
      }

      .container {
        padding: var(--expansion-panel-content-padding, 0 8px);
        overflow: hidden;
        transition: height 300ms cubic-bezier(0.4, 0, 0.2, 1);
        height: 0px;
      }

      .container.expanded {
        height: auto;
      }

      .secondary {
        display: block;
        color: var(--secondary-text-color);
        font-size: 12px;
      }
    `}}]}}),m);const st=(e,t)=>e.callWS({type:"validate_config",...t}),dt=et({alias:tt(it()),enabled:tt(He())}),rt=et({entity_id:tt(ot([it(),Je(it())])),device_id:tt(ot([it(),Je(it())])),area_id:tt(ot([it(),Je(it())]))});Xe(dt,et({service:tt(it()),service_template:tt(it()),entity_id:tt(it()),target:tt(rt),data:tt(et())}));const lt=Xe(dt,et({service:Qe("media_player.play_media"),target:tt(et({entity_id:tt(it())})),entity_id:tt(it()),data:et({media_content_id:it(),media_content_type:it()}),metadata:et()})),ct=Xe(dt,et({service:Qe("scene.turn_on"),target:tt(et({entity_id:tt(it())})),entity_id:tt(it()),metadata:et()})),ut=e=>{if("delay"in e)return"delay";if("wait_template"in e)return"wait_template";if(["condition","and","or","not"].some((t=>t in e)))return"check_condition";if("event"in e)return"fire_event";if("device_id"in e)return"device_action";if("scene"in e)return"activate_scene";if("repeat"in e)return"repeat";if("choose"in e)return"choose";if("if"in e)return"if";if("wait_for_trigger"in e)return"wait_for_trigger";if("variables"in e)return"variables";if("stop"in e)return"stop";if("parallel"in e)return"parallel";if("service"in e){if("metadata"in e){if(Ke(e,ct))return"activate_scene";if(Ke(e,lt))return"play_media"}return"service"}return"unknown"},ht=e=>e<10?`0${e}`:e,vt=e=>{const t=e.days||0,i=e.hours||0,a=e.minutes||0,o=e.seconds||0,n=e.milliseconds||0;return t>0?`${t} day${1===t?"":"s"} ${i}:${ht(a)}:${ht(o)}`:i>0?`${i}:${ht(a)}:${ht(o)}`:a>0?`${a}:${ht(o)}`:o>0?`${o} second${1===o?"":"s"}`:n>0?`${n} millisecond${1===n?"":"s"}`:null},gt=new RegExp("{%|{{"),pt=e=>gt.test(e),mt=e=>{if(!e)return!1;if("string"==typeof e)return pt(e);if("object"==typeof e){return(Array.isArray(e)?e:Object.values(e)).some((e=>e&&mt(e)))}return!1},ft=(e,t)=>e.callWS({type:"device_automation/action/list",device_id:t}),yt=(e,t)=>e.callWS({type:"device_automation/condition/list",device_id:t}),kt=(e,t)=>e.callWS({type:"device_automation/trigger/list",device_id:t}),_t=["device_id","domain","entity_id","type","subtype","event","condition","platform"],bt=(e,t)=>{if(typeof e!=typeof t)return!1;for(const i in e)if(_t.includes(i)&&!Object.is(e[i],t[i]))return!1;for(const i in t)if(_t.includes(i)&&!Object.is(e[i],t[i]))return!1;return!0},$t=(e,t)=>{const i=t.entity_id?e.states[t.entity_id]:void 0;return e.localize(`component.${t.domain}.device_automation.action_type.${t.type}`,"entity_name",i?$e(i):t.entity_id||"<unknown>","subtype",t.subtype?e.localize(`component.${t.domain}.device_automation.action_subtype.${t.subtype}`)||t.subtype:"")||(t.subtype?`"${t.subtype}" ${t.type}`:t.type)},xt=(e,t)=>{const i=t.entity_id?e.states[t.entity_id]:void 0;return e.localize(`component.${t.domain}.device_automation.condition_type.${t.type}`,"entity_name",i?$e(i):t.entity_id||"<unknown>","subtype",t.subtype?e.localize(`component.${t.domain}.device_automation.condition_subtype.${t.subtype}`)||t.subtype:"")||(t.subtype?`"${t.subtype}" ${t.type}`:t.type)},wt=(e,t)=>{const i=t.entity_id?e.states[t.entity_id]:void 0;return e.localize(`component.${t.domain}.device_automation.trigger_type.${t.type}`,"entity_name",i?$e(i):t.entity_id||"<unknown>","subtype",t.subtype?e.localize(`component.${t.domain}.device_automation.trigger_subtype.${t.subtype}`)||t.subtype:"")||(t.subtype?`"${t.subtype}" ${t.type}`:t.type)},Ct=(e,t)=>{var i,a,o,n;return null===(i=e.metadata)||void 0===i||!i.secondary||null!==(a=t.metadata)&&void 0!==a&&a.secondary?null!==(o=e.metadata)&&void 0!==o&&o.secondary||null===(n=t.metadata)||void 0===n||!n.secondary?0:-1:1},zt=(e,t,i=!1)=>{if(e.alias&&!i)return e.alias;if("event"===e.platform&&e.event_type){let t="";if(Array.isArray(e.event_type))for(const[i,a]of e.event_type.entries())t+=`${i>0?",":""} ${e.event_type.length>1&&i===e.event_type.length-1?"or":""} ${a}`;else t=e.event_type.toString();return`When ${t} event is fired`}if("homeassistant"===e.platform&&e.event)return"When Home Assistant is "+("start"===e.event?"started":"shutdown");if("numeric_state"===e.platform&&e.entity_id){let i="When";const a=t.states[e.entity_id],o=a?$e(a):e.entity_id;if(e.attribute&&(i+=` ${ye(e.attribute)} from`),i+=` ${o} is`,void 0!==e.above&&(i+=` above ${e.above}`),void 0!==e.below&&void 0!==e.above&&(i+=" and"),void 0!==e.below&&(i+=` below ${e.below}`),e.for){let t;t="number"==typeof e.for?_e(e.for):"string"==typeof e.for?e.for:vt(e.for),t&&(i+=` for ${t}`)}return i}if("state"===e.platform){let i="When",a="";const o=t.states;if(e.attribute&&(i+=` ${ye(e.attribute)} from`),Array.isArray(e.entity_id))for(const[t,i]of e.entity_id.entries())o[i]&&(a+=`${t>0?",":""} ${e.entity_id.length>1&&t===e.entity_id.length-1?"or":""} ${$e(o[i])||i}`);else e.entity_id&&(a=o[e.entity_id]?$e(o[e.entity_id]):e.entity_id);if(a||(a="something"),i+=` ${a} changes`,e.from){let t="";if(Array.isArray(e.from))for(const[i,a]of e.from.entries())t+=`${i>0?",":""} ${e.from.length>1&&i===e.from.length-1?"or":""} ${a}`;else t=e.from.toString();i+=` from ${t}`}if(e.to){let t="";if(Array.isArray(e.to))for(const[i,a]of e.to.entries())t+=`${i>0?",":""} ${e.to.length>1&&i===e.to.length-1?"or":""} ${a}`;else e.to&&(t=e.to.toString());i+=` to ${t}`}if(e.for){let t;t="number"==typeof e.for?_e(e.for):"string"==typeof e.for?e.for:vt(e.for),t&&(i+=` for ${t}`)}return i}if("sun"===e.platform&&e.event){let t="When the sun "+("sunset"===e.event?"sets":"rises");if(e.offset){let i="";e.offset&&(i="number"==typeof e.offset?` offset by ${_e(e.offset)}`:"string"==typeof e.offset?` offset by ${e.offset}`:` offset by ${JSON.stringify(e.offset)}`),t+=i}return t}if("tag"===e.platform)return"When a tag is scanned";if("time"===e.platform&&e.at){const i=be(e.at).map((e=>e.toString().includes(".")?`entity ${t.states[e]?$e(t.states[e]):e}`:e)),a=i.splice(-1,1)[0];return`When the time is equal to ${i.length?`${i.join(", ")} or `:""}${a}`}if("time_pattern"===e.platform)return"Time pattern trigger";if("zone"===e.platform&&e.entity_id&&e.zone){let i="",a="",o=!1;const n=t.states;if(Array.isArray(e.entity_id))for(const[t,a]of e.entity_id.entries())n[a]&&(i+=`${t>0?",":""} ${e.entity_id.length>1&&t===e.entity_id.length-1?"or":""} ${$e(n[a])||a}`);else i=n[e.entity_id]?$e(n[e.entity_id]):e.entity_id;if(Array.isArray(e.zone)){e.zone.length>1&&(o=!0);for(const[t,i]of e.zone.entries())n[i]&&(a+=`${t>0?",":""} ${e.zone.length>1&&t===e.zone.length-1?"or":""} ${$e(n[i])||i}`)}else a=n[e.zone]?$e(n[e.zone]):e.zone;return`When ${i} ${e.event}s ${a} ${o?"zones":"zone"}`}if("geo_location"===e.platform&&e.source&&e.zone){let i="",a="",o=!1;const n=t.states;if(Array.isArray(e.source))for(const[t,a]of e.source.entries())i+=`${t>0?",":""} ${e.source.length>1&&t===e.source.length-1?"or":""} ${a}`;else i=e.source;if(Array.isArray(e.zone)){e.zone.length>1&&(o=!0);for(const[t,i]of e.zone.entries())n[i]&&(a+=`${t>0?",":""} ${e.zone.length>1&&t===e.zone.length-1?"or":""} ${$e(n[i])||i}`)}else a=n[e.zone]?$e(n[e.zone]):e.zone;return`When ${i} ${e.event}s ${a} ${o?"zones":"zone"}`}if("mqtt"===e.platform)return"When an MQTT message has been received";if("template"===e.platform)return"When a template triggers";if("webhook"===e.platform)return"When a Webhook payload has been received";if("device"===e.platform){if(!e.device_id)return"Device trigger";const i=e,a=wt(t,i);if(a)return a;const o=t.states[i.entity_id];return`${o?$e(o):i.entity_id} ${i.type}`}return`${e.platform?e.platform.replace(/_/g," "):"Unknown"} trigger`},Mt=(e,t,i=!1)=>{if(e.alias&&!i)return e.alias;if(!e.condition){const t=["and","or","not"];for(const i of t)i in e&&be(e[i])&&(e={condition:i,conditions:e[i]})}if("or"===e.condition){const t=be(e.conditions);if(!t||0===t.length)return"Test if any condition matches";const i=t.length;return`Test if any of ${i} condition${1===i?"":"s"} matches`}if("and"===e.condition){const t=be(e.conditions);if(!t||0===t.length)return"Test if multiple conditions match";const i=t.length;return`Test if ${i} condition${1===i?"":"s"} match${1===i?"es":""}`}if("not"===e.condition){const t=be(e.conditions);return t&&0!==t.length?1===t.length?"Test if 1 condition does not match":`Test if none of ${t.length} conditions match`:"Test if no condition matches"}if("state"===e.condition){let i="Confirm";const a=t.states[e.entity_id],o=a?$e(a):e.entity_id?e.entity_id:"an entity";"attribute"in e&&(i+=` ${e.attribute} from`);let n="";if(Array.isArray(e.state))for(const[t,i]of e.state.entries())n+=`${t>0?",":""} ${e.state.length>1&&t===e.state.length-1?"or":""} ${i}`;else e.state&&(n=e.state.toString());if(n||(n="a state"),i+=` ${o} is ${n}`,e.for){let t;t="number"==typeof e.for?_e(e.for):"string"==typeof e.for?e.for:vt(e.for),t&&(i+=` for ${t}`)}return i}if("numeric_state"===e.condition&&e.entity_id){let i="Confirm";const a=t.states[e.entity_id],o=a?$e(a):e.entity_id;return"attribute"in e&&(i+=` ${e.attribute} from`),i+=` ${o} is`,"above"in e&&(i+=` above ${e.above}`),"below"in e&&"above"in e&&(i+=" and"),"below"in e&&(i+=` below ${e.below}`),i}if("sun"===e.condition&&("before"in e||"after"in e)){let t="Confirm";if(!e.after&&!e.before)return t+=" sun",t;if(t+=" sun",e.after){let i="";e.after_offset&&(i="number"==typeof e.after_offset?` offset by ${_e(e.after_offset)}`:"string"==typeof e.after_offset?` offset by ${e.after_offset}`:` offset by ${JSON.stringify(e.after_offset)}`),t+=` after ${e.after}${i}`}return e.before&&(t+=` before ${e.before}`),t}if("zone"===e.condition&&e.entity_id&&e.zone){let i="",a=!1,o="",n=!1;const s=t.states;if(Array.isArray(e.entity_id)){e.entity_id.length>1&&(a=!0);for(const[t,a]of e.entity_id.entries())s[a]&&(i+=`${t>0?",":""} ${e.entity_id.length>1&&t===e.entity_id.length-1?"or":""} ${$e(s[a])||a}`)}else i=s[e.entity_id]?$e(s[e.entity_id]):e.entity_id;if(Array.isArray(e.zone)){e.zone.length>1&&(n=!0);for(const[t,i]of e.zone.entries())s[i]&&(o+=`${t>0?",":""} ${e.zone.length>1&&t===e.zone.length-1?"or":""} ${$e(s[i])||i}`)}else o=s[e.zone]?$e(s[e.zone]):e.zone;return`Confirm ${i} ${a?"are":"is"} in ${o} ${n?"zones":"zone"}`}if("device"===e.condition){if(!e.device_id)return"Device condition";const i=e,a=xt(t,i);if(a)return a;const o=t.states[i.entity_id];return`${o?$e(o):i.entity_id} ${i.type}`}return"trigger"===e.condition?e.id?`When triggered by ${e.id}`:"Trigger condition":`${e.condition?e.condition.replace(/_/g," "):"Unknown"} condition`},Ot=(e,t,i,a=!1)=>{if(t.alias&&!a)return t.alias;if(i||(i=ut(t)),"service"===i){const i=t;let a;if(i.service_template||i.service&&pt(i.service))a="Call a service based on a template";else{if(!i.service)return"Call a service";{const[t,o]=i.service.split(".",2),n=e.services[t][o];a=n?`${ze(e.localize,t)}: ${n.name}`:`Call service: ${i.service}`}}if(i.target){const t=[];for(const[a,o]of Object.entries({area_id:"areas",device_id:"devices",entity_id:"entities"})){if(!(a in i.target))continue;const n=Array.isArray(i.target[a])?i.target[a]:[i.target[a]];for(const i of n){if(pt(i)){t.push(`templated ${o}`);break}if("entity_id"===a)if(i.includes(".")){const a=e.states[i];a?t.push($e(a)):t.push(i)}else{const a=xe(e.entities)[i];a?t.push(we(e,a)||i):t.push("unknown entity")}else if("device_id"===a){const a=e.devices[i];a?t.push(Ce(a,e)):t.push("unknown device")}else if("area_id"===a){const a=e.areas[i];null!=a&&a.name?t.push(a.name):t.push("unknown area")}else t.push(i)}}t.length>0&&(a+=` ${t.join(", ")}`)}return a}if("delay"===i){const e=t;let i;return i="number"==typeof e.delay?`for ${_e(e.delay)}`:"string"==typeof e.delay?pt(e.delay)?"based on a template":`for ${e.delay||"a duration"}`:e.delay?`for ${vt(e.delay)}`:"for a duration",`Delay ${i}`}if("activate_scene"===i){const i=t;let a;var o;if("scene"in i)a=i.scene;else a=(null===(o=i.target)||void 0===o?void 0:o.entity_id)||i.entity_id;if(!a)return"Activate a scene";const n=a?e.states[a]:void 0;return`Activate scene ${n?$e(n):a}`}if("play_media"===i){var n;const i=t,a=(null===(n=i.target)||void 0===n?void 0:n.entity_id)||i.entity_id,o=a?e.states[a]:void 0;return`Play ${i.metadata.title||i.data.media_content_id||"media"} on ${o?$e(o):a||"a media player"}`}if("wait_for_trigger"===i){const i=be(t.wait_for_trigger);return i&&0!==i.length?`Wait for ${i.map((t=>zt(t,e))).join(", ")}`:"Wait for a trigger"}if("variables"===i){const e=t;return`Define variables ${Object.keys(e.variables).join(", ")}`}if("fire_event"===i){const e=t;return pt(e.event)?"Fire event based on a template":`Fire event ${e.event}`}if("wait_template"===i)return"Wait for a template to render true";if("check_condition"===i)return Mt(t,e);if("stop"===i){const e=t;return"Stop"+(e.stop?` because: ${e.stop}`:"")}if("if"===i){const i=t;return`Perform an action if: ${i.if?"string"==typeof i.if?i.if:be(i.if).length>1?`${be(i.if).length} conditions`:be(i.if).length?Mt(be(i.if)[0],e):"":""}${i.else?" (or else!)":""}`}if("choose"===i){const e=t;if(e.choose){const t=be(e.choose).length+(e.default?1:0);return`Choose between ${t} action${1===t?"":"s"}`}return"Choose an action"}if("repeat"===i){const i=t;let a="Repeat an action";if("count"in i.repeat){const e=i.repeat.count;a+=` ${e} time${1===Number(e)?"":"s"}`}else"while"in i.repeat?a+=` while ${be(i.repeat.while).map((t=>Mt(t,e))).join(", ")} is true`:"until"in i.repeat?a+=` until ${be(i.repeat.until).map((t=>Mt(t,e))).join(", ")} is true`:"for_each"in i.repeat&&(a+=` for every item: ${be(i.repeat.for_each).map((e=>JSON.stringify(e))).join(", ")}`);return a}if("check_condition"===i)return`Test ${Mt(t,e)}`;if("device_action"===i){const i=t;if(!i.device_id)return"Device action";const a=$t(e,i);if(a)return a;const o=e.states[i.entity_id];return`${i.type||"Perform action with"} ${o?$e(o):i.entity_id}`}if("parallel"===i){const e=be(t.parallel).length;return`Run ${e} action${1===e?"":"s"} in parallel`}return i},At=(e,t)=>C(e,"hass-notification",t),Tt=["scene"];p([M("ha-automation-action-activate_scene")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[f()],key:"action",value:void 0},{kind:"get",static:!0,key:"defaultConfig",value:function(){return{service:"scene.turn_on",target:{entity_id:""},metadata:{}}}},{kind:"method",key:"render",value:function(){let e;var t;"scene"in this.action?e=this.action.scene:e=null===(t=this.action.target)||void 0===t?void 0:t.entity_id;return _`
      <ha-entity-picker
        .hass=${this.hass}
        .label=${this.hass.localize("ui.panel.config.automation.editor.actions.type.activate_scene.scene")}
        .value=${e}
        .disabled=${this.disabled}
        @value-changed=${this._entityPicked}
        .includeDomains=${Tt}
        allow-custom-entity
      ></ha-entity-picker>
    `}},{kind:"method",key:"_entityPicked",value:function(e){e.stopPropagation(),C(this,"value-changed",{value:{service:"scene.turn_on",target:{entity_id:e.detail.value},metadata:{}}})}}]}}),m),p([M("ha-automation-action-choose")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[f()],key:"action",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"reOrderMode",value:()=>!1},{kind:"field",decorators:[y()],key:"_showDefault",value:()=>!1},{kind:"get",static:!0,key:"defaultConfig",value:function(){return{choose:[{conditions:[],sequence:[]}]}}},{kind:"method",key:"render",value:function(){const e=this.action;return _`
      ${(e.choose?be(e.choose):[]).map(((e,t)=>_`<ha-card>
          <ha-icon-button
            .idx=${t}
            .disabled=${this.disabled}
            @click=${this._removeOption}
            .label=${this.hass.localize("ui.panel.config.automation.editor.actions.type.choose.remove_option")}
            .path=${O}
          ></ha-icon-button>
          <div class="card-content">
            <h2>
              ${this.hass.localize("ui.panel.config.automation.editor.actions.type.choose.option","number",t+1)}:
            </h2>
            <h3>
              ${this.hass.localize("ui.panel.config.automation.editor.actions.type.choose.conditions")}:
            </h3>
            <ha-automation-condition
              nested
              .conditions=${be(e.conditions)}
              .reOrderMode=${this.reOrderMode}
              .disabled=${this.disabled}
              .hass=${this.hass}
              .idx=${t}
              @value-changed=${this._conditionChanged}
            ></ha-automation-condition>
            <h3>
              ${this.hass.localize("ui.panel.config.automation.editor.actions.type.choose.sequence")}:
            </h3>
            <ha-automation-action
              nested
              .actions=${be(e.sequence)||[]}
              .reOrderMode=${this.reOrderMode}
              .disabled=${this.disabled}
              .hass=${this.hass}
              .idx=${t}
              @value-changed=${this._actionChanged}
            ></ha-automation-action>
          </div>
        </ha-card>`))}
      <mwc-button
        outlined
        .label=${this.hass.localize("ui.panel.config.automation.editor.actions.type.choose.add_option")}
        .disabled=${this.disabled}
        @click=${this._addOption}
      >
        <ha-svg-icon .path=${A} slot="icon"></ha-svg-icon>
      </mwc-button>
      ${this._showDefault||e.default?_`
            <h2>
              ${this.hass.localize("ui.panel.config.automation.editor.actions.type.choose.default")}:
            </h2>
            <ha-automation-action
              nested
              .actions=${be(e.default)||[]}
              .reOrderMode=${this.reOrderMode}
              .disabled=${this.disabled}
              @value-changed=${this._defaultChanged}
              .hass=${this.hass}
            ></ha-automation-action>
          `:_`<div class="link-button-row">
            <button
              class="link"
              @click=${this._addDefault}
              .disabled=${this.disabled}
            >
              ${this.hass.localize("ui.panel.config.automation.editor.actions.type.choose.add_default")}
            </button>
          </div>`}
    `}},{kind:"method",key:"_addDefault",value:function(){this._showDefault=!0}},{kind:"method",key:"_conditionChanged",value:function(e){e.stopPropagation();const t=e.detail.value,i=e.target.idx,a=this.action.choose?[...be(this.action.choose)]:[];a[i].conditions=t,C(this,"value-changed",{value:{...this.action,choose:a}})}},{kind:"method",key:"_actionChanged",value:function(e){e.stopPropagation();const t=e.detail.value,i=e.target.idx,a=this.action.choose?[...be(this.action.choose)]:[];a[i].sequence=t,C(this,"value-changed",{value:{...this.action,choose:a}})}},{kind:"method",key:"_addOption",value:function(){const e=this.action.choose?[...be(this.action.choose)]:[];e.push({conditions:[],sequence:[]}),C(this,"value-changed",{value:{...this.action,choose:e}})}},{kind:"method",key:"_removeOption",value:function(e){const t=e.currentTarget.idx,i=this.action.choose?[...be(this.action.choose)]:[];i.splice(t,1),C(this,"value-changed",{value:{...this.action,choose:i}})}},{kind:"method",key:"_defaultChanged",value:function(e){e.stopPropagation();const t=e.detail.value;C(this,"value-changed",{value:{...this.action,default:t}})}},{kind:"get",static:!0,key:"styles",value:function(){return[T,g`
        ha-card {
          margin: 16px 0;
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
        ha-svg-icon {
          height: 20px;
        }
        .link-button-row {
          padding: 14px;
        }
      `]}}]}}),m);const Pt={device:u,and:P,or:U,not:E,state:j,numeric_state:F,sun:I,template:s,time:N,trigger:S,zone:L},Ut=e=>e.preventDefault();p([M("ha-automation-condition-row")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f()],key:"condition",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"hideMenu",value:()=>!1},{kind:"field",decorators:[f({type:Boolean})],key:"reOrderMode",value:()=>!1},{kind:"field",decorators:[f({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[y()],key:"_yamlMode",value:()=>!1},{kind:"field",decorators:[y()],key:"_warnings",value:void 0},{kind:"field",decorators:[y()],key:"_testing",value:()=>!1},{kind:"field",decorators:[y()],key:"_testingResult",value:void 0},{kind:"method",key:"render",value:function(){return this.condition?_`
      <ha-card outlined>
        ${!1===this.condition.enabled?_`<div class="disabled-bar">
              ${this.hass.localize("ui.panel.config.automation.editor.actions.disabled")}
            </div>`:""}

        <ha-expansion-panel leftChevron>
          <h3 slot="header">
            <ha-svg-icon
              class="condition-icon"
              .path=${Pt[this.condition.condition]}
            ></ha-svg-icon>
            ${ke(Mt(this.condition,this.hass))}
          </h3>

          <slot name="icons" slot="icons"></slot>
          ${this.hideMenu?"":_`
                <ha-button-menu
                  slot="icons"
                  fixed
                  corner="BOTTOM_START"
                  @action=${this._handleAction}
                  @click=${Ut}
                >
                  <ha-icon-button
                    slot="trigger"
                    .label=${this.hass.localize("ui.common.menu")}
                    .path=${B}
                  >
                  </ha-icon-button>

                  <mwc-list-item graphic="icon">
                    ${this.hass.localize("ui.panel.config.automation.editor.conditions.test")}
                    <ha-svg-icon slot="graphic" .path=${D}></ha-svg-icon>
                  </mwc-list-item>
                  <mwc-list-item graphic="icon" .disabled=${this.disabled}>
                    ${this.hass.localize("ui.panel.config.automation.editor.conditions.rename")}
                    <ha-svg-icon
                      slot="graphic"
                      .path=${q}
                    ></ha-svg-icon>
                  </mwc-list-item>

                  <mwc-list-item graphic="icon" .disabled=${this.disabled}>
                    ${this.hass.localize("ui.panel.config.automation.editor.conditions.re_order")}
                    <ha-svg-icon slot="graphic" .path=${W}></ha-svg-icon>
                  </mwc-list-item>

                  <mwc-list-item graphic="icon" .disabled=${this.disabled}>
                    ${this.hass.localize("ui.panel.config.automation.editor.actions.duplicate")}
                    <ha-svg-icon
                      slot="graphic"
                      .path=${R}
                    ></ha-svg-icon>
                  </mwc-list-item>

                  <li divider role="separator"></li>

                  <mwc-list-item graphic="icon">
                    ${this.hass.localize("ui.panel.config.automation.editor.edit_ui")}
                    ${this._yamlMode?"":_`<ha-svg-icon
                          class="selected_menu_item"
                          slot="graphic"
                          .path=${K}
                        ></ha-svg-icon>`}
                  </mwc-list-item>

                  <mwc-list-item graphic="icon">
                    ${this.hass.localize("ui.panel.config.automation.editor.edit_yaml")}
                    ${this._yamlMode?_`<ha-svg-icon
                          class="selected_menu_item"
                          slot="graphic"
                          .path=${K}
                        ></ha-svg-icon>`:""}
                  </mwc-list-item>

                  <li divider role="separator"></li>

                  <mwc-list-item graphic="icon" .disabled=${this.disabled}>
                    ${!1===this.condition.enabled?this.hass.localize("ui.panel.config.automation.editor.actions.enable"):this.hass.localize("ui.panel.config.automation.editor.actions.disable")}
                    <ha-svg-icon
                      slot="graphic"
                      .path=${!1===this.condition.enabled?V:X}
                    ></ha-svg-icon>
                  </mwc-list-item>
                  <mwc-list-item
                    class="warning"
                    graphic="icon"
                    .disabled=${this.disabled}
                  >
                    ${this.hass.localize("ui.panel.config.automation.editor.actions.delete")}
                    <ha-svg-icon
                      class="warning"
                      slot="graphic"
                      .path=${O}
                    ></ha-svg-icon>
                  </mwc-list-item>
                </ha-button-menu>
              `}

          <div
            class=${$({"card-content":!0,disabled:!1===this.condition.enabled})}
          >
            ${this._warnings?_`<ha-alert
                  alert-type="warning"
                  .title=${this.hass.localize("ui.errors.config.editor_not_supported")}
                >
                  ${this._warnings.length>0&&void 0!==this._warnings[0]?_` <ul>
                        ${this._warnings.map((e=>_`<li>${e}</li>`))}
                      </ul>`:""}
                  ${this.hass.localize("ui.errors.config.edit_in_yaml_supported")}
                </ha-alert>`:""}
            <ha-automation-condition-editor
              @ui-mode-not-available=${this._handleUiModeNotAvailable}
              @value-changed=${this._handleChangeEvent}
              .yamlMode=${this._yamlMode}
              .disabled=${this.disabled}
              .hass=${this.hass}
              .condition=${this.condition}
              .reOrderMode=${this.reOrderMode}
            ></ha-automation-condition-editor>
          </div>
        </ha-expansion-panel>
        <div
          class="testing ${$({active:this._testing,pass:!0===this._testingResult,error:!1===this._testingResult})}"
        >
          ${this._testingResult?this.hass.localize("ui.panel.config.automation.editor.conditions.testing_pass"):this.hass.localize("ui.panel.config.automation.editor.conditions.testing_error")}
        </div>
      </ha-card>
    `:_``}},{kind:"method",key:"_handleUiModeNotAvailable",value:function(e){e.stopPropagation(),this._warnings=nt(this.hass,e.detail).warnings,this._yamlMode||(this._yamlMode=!0)}},{kind:"method",key:"_handleChangeEvent",value:function(e){e.detail.yaml&&(this._warnings=void 0)}},{kind:"method",key:"_handleAction",value:async function(e){switch(e.detail.index){case 0:await this._testCondition();break;case 1:await this._renameCondition();break;case 2:C(this,"re-order");break;case 3:C(this,"duplicate");break;case 4:this._switchUiMode(),this.expand();break;case 5:this._switchYamlMode(),this.expand();break;case 6:this._onDisable();break;case 7:this._onDelete()}}},{kind:"method",key:"_onDisable",value:function(){var e;const t=!(null===(e=this.condition.enabled)||void 0===e||e),i={...this.condition,enabled:t};C(this,"value-changed",{value:i})}},{kind:"method",key:"_onDelete",value:function(){Me(this,{title:this.hass.localize("ui.panel.config.automation.editor.conditions.delete_confirm_title"),text:this.hass.localize("ui.panel.config.automation.editor.conditions.delete_confirm_text"),dismissText:this.hass.localize("ui.common.cancel"),confirmText:this.hass.localize("ui.common.delete"),destructive:!0,confirm:()=>{C(this,"value-changed",{value:null})}})}},{kind:"method",key:"_switchUiMode",value:function(){this._warnings=void 0,this._yamlMode=!1}},{kind:"method",key:"_switchYamlMode",value:function(){this._warnings=void 0,this._yamlMode=!0}},{kind:"method",key:"_testCondition",value:async function(){if(this._testing)return;this._testingResult=void 0,this._testing=!0;const e=this.condition;try{const t=await st(this.hass,{condition:e});if(this.condition!==e)return void(this._testing=!1);if(!t.condition.valid)return Oe(this,{title:this.hass.localize("ui.panel.config.automation.editor.conditions.invalid_condition"),text:t.condition.error}),void(this._testing=!1);let i;try{i=await((e,t,i)=>e.callWS({type:"test_condition",condition:t,variables:i}))(this.hass,e)}catch(t){return this.condition!==e||Oe(this,{title:this.hass.localize("ui.panel.config.automation.editor.conditions.test_failed"),text:t.message}),void(this._testing=!1)}this._testingResult=i.result}finally{setTimeout((()=>{this._testing=!1}),2500)}}},{kind:"method",key:"_renameCondition",value:async function(){const e=await Ae(this,{title:this.hass.localize("ui.panel.config.automation.editor.conditions.change_alias"),inputLabel:this.hass.localize("ui.panel.config.automation.editor.conditions.alias"),inputType:"string",placeholder:ke(Mt(this.condition,this.hass,!0)),defaultValue:this.condition.alias,confirmText:this.hass.localize("ui.common.submit")}),t={...this.condition};e?t.alias=e:delete t.alias,C(this,"value-changed",{value:t})}},{kind:"method",key:"expand",value:function(){this.updateComplete.then((()=>{this.shadowRoot.querySelector("ha-expansion-panel").expanded=!0}))}},{kind:"get",static:!0,key:"styles",value:function(){return[T,g`
        ha-button-menu {
          --mdc-theme-text-primary-on-background: var(--primary-text-color);
        }
        .disabled {
          opacity: 0.5;
          pointer-events: none;
        }
        ha-expansion-panel {
          --expansion-panel-summary-padding: 0 0 0 8px;
          --expansion-panel-content-padding: 0;
        }
        h3 {
          margin: 0;
          font-size: inherit;
          font-weight: inherit;
        }
        .condition-icon {
          display: none;
        }
        @media (min-width: 870px) {
          .condition-icon {
            display: inline-block;
            color: var(--secondary-text-color);
            opacity: 0.9;
            margin-right: 8px;
          }
        }
        .card-content {
          padding: 16px;
        }
        .disabled-bar {
          background: var(--divider-color, #e0e0e0);
          text-align: center;
          border-top-right-radius: var(--ha-card-border-radius);
          border-top-left-radius: var(--ha-card-border-radius);
        }
        mwc-list-item[disabled] {
          --mdc-theme-text-primary-on-background: var(--disabled-text-color);
        }
        .testing {
          position: absolute;
          top: 0px;
          right: 0px;
          left: 0px;
          text-transform: uppercase;
          font-weight: bold;
          font-size: 14px;
          background-color: var(--divider-color, #e0e0e0);
          color: var(--text-primary-color);
          max-height: 0px;
          overflow: hidden;
          transition: max-height 0.3s;
          text-align: center;
          border-top-right-radius: var(--ha-card-border-radius, 12px);
          border-top-left-radius: var(--ha-card-border-radius, 12px);
        }
        .testing.active {
          max-height: 100px;
        }
        .testing.error {
          background-color: var(--accent-color);
        }
        .testing.pass {
          background-color: var(--success-color);
        }
        .selected_menu_item {
          color: var(--primary-color);
        }
        li[role="separator"] {
          border-bottom-color: var(--divider-color);
        }
      `]}}]}}),m);const Et="NO_AUTOMATION",jt="UNKNOWN_AUTOMATION";let Ft=p(null,(function(e,t){class i extends t{constructor(t,i,a){super(),e(this),this._localizeDeviceAutomation=t,this._fetchDeviceAutomations=i,this._createNoAutomation=a}}return{F:i,d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f()],key:"label",value:void 0},{kind:"field",decorators:[f()],key:"deviceId",value:void 0},{kind:"field",decorators:[f()],key:"value",value:void 0},{kind:"field",decorators:[y()],key:"_automations",value:()=>[]},{kind:"field",decorators:[y()],key:"_renderEmpty",value:()=>!1},{kind:"get",key:"NO_AUTOMATION_TEXT",value:function(){return this.hass.localize("ui.panel.config.devices.automation.actions.no_actions")}},{kind:"get",key:"UNKNOWN_AUTOMATION_TEXT",value:function(){return this.hass.localize("ui.panel.config.devices.automation.actions.unknown_action")}},{kind:"field",key:"_localizeDeviceAutomation",value:void 0},{kind:"field",key:"_fetchDeviceAutomations",value:void 0},{kind:"field",key:"_createNoAutomation",value:void 0},{kind:"get",key:"_value",value:function(){if(!this.value)return"";if(!this._automations.length)return Et;const e=this._automations.findIndex((e=>bt(e,this.value)));return-1===e?jt:`${this._automations[e].device_id}_${e}`}},{kind:"method",key:"render",value:function(){if(this._renderEmpty)return _``;const e=this._value;return _`
      <ha-select
        .label=${this.label}
        .value=${e}
        @selected=${this._automationChanged}
        .disabled=${0===this._automations.length}
      >
        ${e===Et?_`<mwc-list-item .value=${Et}>
              ${this.NO_AUTOMATION_TEXT}
            </mwc-list-item>`:""}
        ${e===jt?_`<mwc-list-item .value=${jt}>
              ${this.UNKNOWN_AUTOMATION_TEXT}
            </mwc-list-item>`:""}
        ${this._automations.map(((e,t)=>_`
            <mwc-list-item .value=${`${e.device_id}_${t}`}>
              ${this._localizeDeviceAutomation(this.hass,e)}
            </mwc-list-item>
          `))}
      </ha-select>
    `}},{kind:"method",key:"updated",value:function(e){x(w(i.prototype),"updated",this).call(this,e),e.has("deviceId")&&this._updateDeviceInfo()}},{kind:"method",key:"_updateDeviceInfo",value:async function(){this._automations=this.deviceId?(await this._fetchDeviceAutomations(this.hass,this.deviceId)).sort(Ct):[],this.value&&this.value.device_id===this.deviceId||this._setValue(this._automations.length?this._automations[0]:this._createNoAutomation(this.deviceId)),this._renderEmpty=!0,await this.updateComplete,this._renderEmpty=!1}},{kind:"method",key:"_automationChanged",value:function(e){const t=e.target.value;if(!t||[jt,Et].includes(t))return;const[i,a]=t.split("_"),o=this._automations[a];o.device_id===i&&this._setValue(o)}},{kind:"method",key:"_setValue",value:function(e){if(this.value&&bt(e,this.value))return;const t={...e};delete t.metadata,C(this,"value-changed",{value:t})}},{kind:"get",static:!0,key:"styles",value:function(){return g`
      ha-select {
        display: block;
      }
    `}}]}}),m);p([M("ha-device-condition-picker")],(function(e,t){return{F:class extends t{constructor(){super(xt,yt,(e=>({device_id:e||"",condition:"device",domain:"",entity_id:""}))),e(this)}},d:[{kind:"get",key:"NO_AUTOMATION_TEXT",value:function(){return this.hass.localize("ui.panel.config.devices.automation.conditions.no_conditions")}},{kind:"get",key:"UNKNOWN_AUTOMATION_TEXT",value:function(){return this.hass.localize("ui.panel.config.devices.automation.conditions.unknown_condition")}}]}}),Ft),p([M("ha-automation-condition-device")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f({type:Object})],key:"condition",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[y()],key:"_deviceId",value:void 0},{kind:"field",decorators:[y()],key:"_capabilities",value:void 0},{kind:"field",key:"_origCondition",value:void 0},{kind:"get",static:!0,key:"defaultConfig",value:function(){return{device_id:"",domain:"",entity_id:""}}},{kind:"field",key:"_extraFieldsData",value:()=>Y(((e,t)=>{const i={};return t.extra_fields.forEach((t=>{void 0!==e[t.name]&&(i[t.name]=e[t.name])})),i}))},{kind:"method",key:"render",value:function(){var e;const t=this._deviceId||this.condition.device_id;return _`
      <ha-device-picker
        .value=${t}
        @value-changed=${this._devicePicked}
        .hass=${this.hass}
        .disabled=${this.disabled}
        .label=${this.hass.localize("ui.panel.config.automation.editor.conditions.type.device.label")}
      ></ha-device-picker>
      <ha-device-condition-picker
        .value=${this.condition}
        .deviceId=${t}
        @value-changed=${this._deviceConditionPicked}
        .hass=${this.hass}
        .disabled=${this.disabled}
        .label=${this.hass.localize("ui.panel.config.automation.editor.conditions.type.device.condition")}
      ></ha-device-condition-picker>
      ${null!==(e=this._capabilities)&&void 0!==e&&e.extra_fields?_`
            <ha-form
              .hass=${this.hass}
              .data=${this._extraFieldsData(this.condition,this._capabilities)}
              .schema=${this._capabilities.extra_fields}
              .disabled=${this.disabled}
              .computeLabel=${this._extraFieldsComputeLabelCallback(this.hass.localize)}
              @value-changed=${this._extraFieldsChanged}
            ></ha-form>
          `:""}
    `}},{kind:"method",key:"firstUpdated",value:function(){this._capabilities||this._getCapabilities(),this.condition&&(this._origCondition=this.condition)}},{kind:"method",key:"updated",value:function(e){const t=e.get("condition");t&&!bt(t,this.condition)&&this._getCapabilities()}},{kind:"method",key:"_getCapabilities",value:async function(){const e=this.condition;this._capabilities=e.domain?await((e,t)=>e.callWS({type:"device_automation/condition/capabilities",condition:t}))(this.hass,e):void 0}},{kind:"method",key:"_devicePicked",value:function(e){e.stopPropagation(),this._deviceId=e.target.value,void 0===this._deviceId&&C(this,"value-changed",{value:{...i.defaultConfig,condition:"device"}})}},{kind:"method",key:"_deviceConditionPicked",value:function(e){e.stopPropagation();let t=e.detail.value;this._origCondition&&bt(this._origCondition,t)&&(t=this._origCondition),C(this,"value-changed",{value:t})}},{kind:"method",key:"_extraFieldsChanged",value:function(e){e.stopPropagation(),C(this,"value-changed",{value:{...this.condition,...e.detail.value}})}},{kind:"method",key:"_extraFieldsComputeLabelCallback",value:function(e){return t=>e(`ui.panel.config.automation.editor.conditions.type.device.extra_fields.${t.name}`)||t.name}},{kind:"field",static:!0,key:"styles",value:()=>g`
    ha-device-picker {
      display: block;
      margin-bottom: 24px;
    }
  `}]}}),m),p([M("ha-automation-condition-numeric_state")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f({attribute:!1})],key:"condition",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"disabled",value:()=>!1},{kind:"get",static:!0,key:"defaultConfig",value:function(){return{entity_id:""}}},{kind:"field",key:"_schema",value:()=>Y((e=>[{name:"entity_id",required:!0,selector:{entity:{}}},{name:"attribute",selector:{attribute:{entity_id:e,hide_attributes:["access_token","auto_update","available_modes","away_mode","changed_by","code_format","color_modes","current_activity","device_class","editable","effect_list","effect","entity_picture","fan_mode","fan_modes","fan_speed_list","forecast","friendly_name","frontend_stream_type","has_date","has_time","hs_color","hvac_mode","hvac_modes","icon","media_album_name","media_artist","media_content_type","media_position_updated_at","media_title","next_dawn","next_dusk","next_midnight","next_noon","next_rising","next_setting","operation_list","operation_mode","options","preset_mode","preset_modes","release_notes","release_summary","release_url","restored","rgb_color","rgbw_color","shuffle","sound_mode_list","sound_mode","source_list","source_type","source","state_class","supported_features","swing_mode","swing_mode","swing_modes","title","token","unit_of_measurement","xy_color"]}}},{name:"above",selector:{number:{mode:"box",min:Number.MIN_SAFE_INTEGER,max:Number.MAX_SAFE_INTEGER,step:.1}}},{name:"below",selector:{number:{mode:"box",min:Number.MIN_SAFE_INTEGER,max:Number.MAX_SAFE_INTEGER,step:.1}}},{name:"value_template",selector:{template:{}}}]))},{kind:"method",key:"render",value:function(){const e=this._schema(this.condition.entity_id);return _`
      <ha-form
        .hass=${this.hass}
        .data=${this.condition}
        .schema=${e}
        .disabled=${this.disabled}
        @value-changed=${this._valueChanged}
        .computeLabel=${this._computeLabelCallback}
      ></ha-form>
    `}},{kind:"method",key:"_valueChanged",value:function(e){e.stopPropagation();const t=e.detail.value;C(this,"value-changed",{value:t})}},{kind:"field",key:"_computeLabelCallback",value(){return e=>{switch(e.name){case"entity_id":return this.hass.localize("ui.components.entity.entity-picker.entity");case"attribute":return this.hass.localize("ui.components.entity.entity-attribute-picker.attribute");default:return this.hass.localize(`ui.panel.config.automation.editor.triggers.type.numeric_state.${e.name}`)}}}}]}}),m);const It=e=>{if(void 0===e)return;if("object"!=typeof e){if("string"==typeof e||isNaN(e)){const t=(null==e?void 0:e.toString().split(":"))||[];return{hours:Number(t[0])||0,minutes:Number(t[1])||0,seconds:Number(t[2])||0,milliseconds:Number(t[3])||0}}return{seconds:e}}if(!("days"in e))return e;const{days:t,minutes:i,seconds:a,milliseconds:o}=e;let n=e.hours||0;return n=(n||0)+24*(t||0),{hours:n,minutes:i,seconds:a,milliseconds:o}},Nt=et({platform:it(),id:tt(it()),enabled:tt(He())}),St=et({days:tt(Ze()),hours:tt(Ze()),minutes:tt(Ze()),seconds:tt(Ze())}),Lt=et({alias:tt(it()),condition:Qe("state"),entity_id:tt(it()),attribute:tt(it()),state:tt(it()),for:tt(ot([it(),St]))});p([M("ha-automation-condition-state")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f({attribute:!1})],key:"condition",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"disabled",value:()=>!1},{kind:"get",static:!0,key:"defaultConfig",value:function(){return{entity_id:"",state:""}}},{kind:"field",key:"_schema",value:()=>Y(((e,t)=>[{name:"entity_id",required:!0,selector:{entity:{}}},{name:"attribute",selector:{attribute:{entity_id:e,hide_attributes:["access_token","available_modes","color_modes","editable","effect_list","entity_picture","fan_modes","fan_speed_list","forecast","friendly_name","hvac_modes","icon","operation_list","options","preset_modes","sound_mode_list","source_list","state_class","swing_modes","token"]}}},{name:"state",required:!0,selector:{state:{entity_id:e,attribute:t}}},{name:"for",selector:{duration:{}}}]))},{kind:"method",key:"shouldUpdate",value:function(e){if(e.has("condition"))try{Re(this.condition,Lt)}catch(e){return C(this,"ui-mode-not-available",e),!1}return!0}},{kind:"method",key:"render",value:function(){const e=It(this.condition.for),t={...this.condition,for:e},i=this._schema(this.condition.entity_id,this.condition.attribute);return _`
      <ha-form
        .hass=${this.hass}
        .data=${t}
        .schema=${i}
        .disabled=${this.disabled}
        @value-changed=${this._valueChanged}
        .computeLabel=${this._computeLabelCallback}
      ></ha-form>
    `}},{kind:"method",key:"_valueChanged",value:function(e){e.stopPropagation();const t=e.detail.value;Object.keys(t).forEach((e=>void 0===t[e]||""===t[e]?delete t[e]:{})),t.state||(t.state=""),C(this,"value-changed",{value:t})}},{kind:"field",key:"_computeLabelCallback",value(){return e=>{switch(e.name){case"entity_id":return this.hass.localize("ui.components.entity.entity-picker.entity");case"attribute":return this.hass.localize("ui.components.entity.entity-attribute-picker.attribute");case"for":return this.hass.localize("ui.panel.config.automation.editor.triggers.type.state.for");default:return this.hass.localize(`ui.panel.config.automation.editor.conditions.type.state.${e.name}`)}}}}]}}),m),p([M("ha-automation-condition-sun")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f({attribute:!1})],key:"condition",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"disabled",value:()=>!1},{kind:"get",static:!0,key:"defaultConfig",value:function(){return{}}},{kind:"field",key:"_schema",value:()=>Y((e=>[{name:"before",type:"select",required:!0,options:[["sunrise",e("ui.panel.config.automation.editor.conditions.type.sun.sunrise")],["sunset",e("ui.panel.config.automation.editor.conditions.type.sun.sunset")]]},{name:"before_offset",selector:{text:{}}},{name:"after",type:"select",required:!0,options:[["sunrise",e("ui.panel.config.automation.editor.conditions.type.sun.sunrise")],["sunset",e("ui.panel.config.automation.editor.conditions.type.sun.sunset")]]},{name:"after_offset",selector:{text:{}}}]))},{kind:"method",key:"render",value:function(){const e=this._schema(this.hass.localize);return _`
      <ha-form
        .schema=${e}
        .data=${this.condition}
        .hass=${this.hass}
        .disabled=${this.disabled}
        .computeLabel=${this._computeLabelCallback}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `}},{kind:"method",key:"_valueChanged",value:function(e){e.stopPropagation();const t=e.detail.value;C(this,"value-changed",{value:t})}},{kind:"field",key:"_computeLabelCallback",value(){return e=>this.hass.localize(`ui.panel.config.automation.editor.conditions.type.sun.${e.name}`)}}]}}),m),p([M("ha-automation-condition-template")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f({attribute:!1})],key:"condition",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"disabled",value:()=>!1},{kind:"get",static:!0,key:"defaultConfig",value:function(){return{value_template:""}}},{kind:"method",key:"render",value:function(){const{value_template:e}=this.condition;return _`
      <p>
        ${this.hass.localize("ui.panel.config.automation.editor.conditions.type.template.value_template")}
        *
      </p>
      <ha-code-editor
        .name=${"value_template"}
        mode="jinja2"
        .hass=${this.hass}
        .value=${e}
        .readOnly=${this.disabled}
        autocomplete-entities
        @value-changed=${this._valueChanged}
        dir="ltr"
      ></ha-code-editor>
    `}},{kind:"method",key:"_valueChanged",value:function(e){((e,t)=>{var i,a,o;t.stopPropagation();const n=null===(i=t.currentTarget)||void 0===i?void 0:i.name;if(!n)return;const s=(null===(a=t.detail)||void 0===a?void 0:a.value)||(null===(o=t.currentTarget)||void 0===o?void 0:o.value);if((e.condition[n]||"")===s)return;let d;s?d={...e.condition,[n]:s}:(d={...e.condition},delete d[n]),C(e,"value-changed",{value:d})})(this,e)}},{kind:"get",static:!0,key:"styles",value:function(){return g`
      p {
        margin-top: 0;
      }
    `}}]}}),m);const Bt=["sun","mon","tue","wed","thu","fri","sat"];p([M("ha-automation-condition-time")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f({attribute:!1})],key:"condition",value:void 0},{kind:"field",decorators:[y()],key:"_inputModeBefore",value:void 0},{kind:"field",decorators:[y()],key:"_inputModeAfter",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"disabled",value:()=>!1},{kind:"get",static:!0,key:"defaultConfig",value:function(){return{}}},{kind:"field",key:"_schema",value:()=>Y(((e,t,i,a)=>{const o=Pe(t),n=Bt.slice(o,Bt.length).concat(Bt.slice(0,o));return[{name:"mode_after",type:"select",required:!0,options:[["value",e("ui.panel.config.automation.editor.conditions.type.time.type_value")],["input",e("ui.panel.config.automation.editor.conditions.type.time.type_input")]]},{name:"after",selector:i?{entity:{domain:"input_datetime"}}:{time:{}}},{name:"mode_before",type:"select",required:!0,options:[["value",e("ui.panel.config.automation.editor.conditions.type.time.type_value")],["input",e("ui.panel.config.automation.editor.conditions.type.time.type_input")]]},{name:"before",selector:a?{entity:{domain:"input_datetime"}}:{time:{}}},{type:"multi_select",name:"weekday",options:n.map((t=>[t,e(`ui.panel.config.automation.editor.conditions.type.time.weekdays.${t}`)]))}]}))},{kind:"method",key:"render",value:function(){var e,t,i,a;const o=null!==(e=this._inputModeBefore)&&void 0!==e?e:null===(t=this.condition.before)||void 0===t?void 0:t.startsWith("input_datetime."),n=null!==(i=this._inputModeAfter)&&void 0!==i?i:null===(a=this.condition.after)||void 0===a?void 0:a.startsWith("input_datetime."),s=this._schema(this.hass.localize,this.hass.locale,n,o),d={mode_before:o?"input":"value",mode_after:n?"input":"value",...this.condition};return _`
      <ha-form
        .hass=${this.hass}
        .data=${d}
        .schema=${s}
        .disabled=${this.disabled}
        @value-changed=${this._valueChanged}
        .computeLabel=${this._computeLabelCallback}
      ></ha-form>
    `}},{kind:"method",key:"_valueChanged",value:function(e){e.stopPropagation();const t=e.detail.value;this._inputModeAfter="input"===t.mode_after,this._inputModeBefore="input"===t.mode_before,delete t.mode_after,delete t.mode_before,Object.keys(t).forEach((e=>void 0===t[e]||""===t[e]?delete t[e]:{})),C(this,"value-changed",{value:t})}},{kind:"field",key:"_computeLabelCallback",value(){return e=>this.hass.localize(`ui.panel.config.automation.editor.conditions.type.time.${e.name}`)}}]}}),m),p([M("ha-automation-condition-trigger")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f({attribute:!1})],key:"condition",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[y()],key:"_triggers",value:()=>[]},{kind:"field",key:"_unsub",value:void 0},{kind:"get",static:!0,key:"defaultConfig",value:function(){return{id:""}}},{kind:"method",key:"connectedCallback",value:function(){x(w(i.prototype),"connectedCallback",this).call(this);const e={callback:e=>this._automationUpdated(e)};C(this,"subscribe-automation-config",e),this._unsub=e.unsub}},{kind:"method",key:"disconnectedCallback",value:function(){x(w(i.prototype),"disconnectedCallback",this).call(this),this._unsub&&this._unsub()}},{kind:"method",key:"render",value:function(){const{id:e}=this.condition;return this._triggers.length?_`<ha-select
      .label=${this.hass.localize("ui.panel.config.automation.editor.conditions.type.trigger.id")}
      .value=${e}
      .disabled=${this.disabled}
      @selected=${this._triggerPicked}
    >
      ${this._triggers.map((e=>_`
            <mwc-list-item .value=${e.id}> ${e.id} </mwc-list-item>
          `))}
    </ha-select>`:this.hass.localize("ui.panel.config.automation.editor.conditions.type.trigger.no_triggers")}},{kind:"method",key:"_automationUpdated",value:function(e){const t=new Set;this._triggers=null!=e&&e.trigger?be(e.trigger).filter((e=>e.id&&!t.has(e.id)&&t.add(e.id))):[]}},{kind:"method",key:"_triggerPicked",value:function(e){if(e.stopPropagation(),!e.target.value)return;const t=e.target.value;this.condition.id!==t&&C(this,"value-changed",{value:{...this.condition,id:t}})}}]}}),m);const Dt=e=>"latitude"in e.attributes&&"longitude"in e.attributes;function qt(e){return Dt(e)&&"zone"!==Ue(e)}const Wt=["zone"];p([M("ha-automation-condition-zone")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f({attribute:!1})],key:"condition",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"disabled",value:()=>!1},{kind:"get",static:!0,key:"defaultConfig",value:function(){return{entity_id:"",zone:""}}},{kind:"method",key:"render",value:function(){const{entity_id:e,zone:t}=this.condition;return _`
      <ha-entity-picker
        .label=${this.hass.localize("ui.panel.config.automation.editor.conditions.type.zone.entity")}
        .value=${e}
        @value-changed=${this._entityPicked}
        .hass=${this.hass}
        .disabled=${this.disabled}
        allow-custom-entity
        .entityFilter=${qt}
      ></ha-entity-picker>
      <ha-entity-picker
        .label=${this.hass.localize("ui.panel.config.automation.editor.conditions.type.zone.zone")}
        .value=${t}
        @value-changed=${this._zonePicked}
        .hass=${this.hass}
        .disabled=${this.disabled}
        allow-custom-entity
        .includeDomains=${Wt}
      ></ha-entity-picker>
      <label id="eventlabel">
        ${this.hass.localize("ui.panel.config.automation.editor.conditions.type.zone.event")}
      </label>
    `}},{kind:"method",key:"_entityPicked",value:function(e){e.stopPropagation(),C(this,"value-changed",{value:{...this.condition,entity_id:e.detail.value}})}},{kind:"method",key:"_zonePicked",value:function(e){e.stopPropagation(),C(this,"value-changed",{value:{...this.condition,zone:e.detail.value}})}},{kind:"field",static:!0,key:"styles",value:()=>g`
    ha-entity-picker:first-child {
      display: block;
      margin-bottom: 24px;
    }
  `}]}}),m),p([M("ha-automation-condition")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f()],key:"conditions",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[f({type:Boolean})],key:"nested",value:()=>!1},{kind:"field",decorators:[f({type:Boolean})],key:"reOrderMode",value:()=>!1},{kind:"field",key:"_focusLastConditionOnChange",value:()=>!1},{kind:"field",key:"_conditionKeys",value:()=>new WeakMap},{kind:"field",key:"_sortable",value:void 0},{kind:"method",key:"updated",value:function(e){if(e.has("reOrderMode")&&(this.reOrderMode?this._createSortable():this._destroySortable()),!e.has("conditions"))return;let t;if(Array.isArray(this.conditions)||(t=[this.conditions]),(t||this.conditions).forEach(((e,i)=>{"string"==typeof e&&(t=t||[...this.conditions],t[i]={condition:"template",value_template:e})})),t)C(this,"value-changed",{value:t});else if(this._focusLastConditionOnChange){this._focusLastConditionOnChange=!1;const e=this.shadowRoot.querySelector("ha-automation-condition-row:last-of-type");e.updateComplete.then((()=>{e.expand(),e.scrollIntoView(),e.focus()}))}}},{kind:"method",key:"render",value:function(){return Array.isArray(this.conditions)?_`
      ${this.reOrderMode&&!this.nested?_`
            <ha-alert
              alert-type="info"
              .title=${this.hass.localize("ui.panel.config.automation.editor.re_order_mode.title")}
            >
              ${this.hass.localize("ui.panel.config.automation.editor.re_order_mode.description_conditions")}
              <mwc-button slot="action" @click=${this._exitReOrderMode}>
                ${this.hass.localize("ui.panel.config.automation.editor.re_order_mode.exit")}
              </mwc-button>
            </ha-alert>
          `:null}
      <div class="conditions">
        ${he(this.conditions,(e=>this._getKey(e)),((e,t)=>_`
            <ha-automation-condition-row
              .index=${t}
              .totalConditions=${this.conditions.length}
              .condition=${e}
              .hideMenu=${this.reOrderMode}
              .reOrderMode=${this.reOrderMode}
              .disabled=${this.disabled}
              @duplicate=${this._duplicateCondition}
              @move-condition=${this._move}
              @value-changed=${this._conditionChanged}
              @re-order=${this._enterReOrderMode}
              .hass=${this.hass}
            >
              ${this.reOrderMode?_`
                    <ha-icon-button
                      .index=${t}
                      slot="icons"
                      .label=${this.hass.localize("ui.panel.config.automation.editor.move_up")}
                      .path=${G}
                      @click=${this._moveUp}
                      .disabled=${0===t}
                    ></ha-icon-button>
                    <ha-icon-button
                      .index=${t}
                      slot="icons"
                      .label=${this.hass.localize("ui.panel.config.automation.editor.move_down")}
                      .path=${J}
                      @click=${this._moveDown}
                      .disabled=${t===this.conditions.length-1}
                    ></ha-icon-button>
                    <div class="handle" slot="icons">
                      <ha-svg-icon .path=${H}></ha-svg-icon>
                    </div>
                  `:""}
            </ha-automation-condition-row>
          `))}
      </div>
      <ha-button-menu
        fixed
        @action=${this._addCondition}
        .disabled=${this.disabled}
      >
        <mwc-button
          slot="trigger"
          outlined
          .disabled=${this.disabled}
          .label=${this.hass.localize("ui.panel.config.automation.editor.conditions.add")}
        >
          <ha-svg-icon .path=${A} slot="icon"></ha-svg-icon>
        </mwc-button>
        ${this._processedTypes(this.hass.localize).map((([e,t,i])=>_`
            <mwc-list-item .value=${e} aria-label=${t} graphic="icon">
              ${t}<ha-svg-icon slot="graphic" .path=${i}></ha-svg-icon
            ></mwc-list-item>
          `))}
      </ha-button-menu>
    `:_``}},{kind:"method",key:"_enterReOrderMode",value:async function(e){this.nested||(e.stopPropagation(),this.reOrderMode=!0)}},{kind:"method",key:"_exitReOrderMode",value:async function(){this.reOrderMode=!1}},{kind:"method",key:"_createSortable",value:async function(){const e=await Ie();this._sortable=new e(this.shadowRoot.querySelector(".conditions"),{animation:150,fallbackClass:"sortable-fallback",handle:".handle",onChoose:e=>{e.item.placeholder=document.createComment("sort-placeholder"),e.item.after(e.item.placeholder)},onEnd:e=>{e.item.placeholder&&(e.item.placeholder.replaceWith(e.item),delete e.item.placeholder),this._dragged(e)}})}},{kind:"method",key:"_destroySortable",value:function(){var e;null===(e=this._sortable)||void 0===e||e.destroy(),this._sortable=void 0}},{kind:"method",key:"_getKey",value:function(e){return this._conditionKeys.has(e)||this._conditionKeys.set(e,Math.random().toString()),this._conditionKeys.get(e)}},{kind:"method",key:"_addCondition",value:function(e){const t=e.currentTarget.items[e.detail.index].value,i=customElements.get(`ha-automation-condition-${t}`),a=this.conditions.concat({condition:t,...i.defaultConfig});this._focusLastConditionOnChange=!0,C(this,"value-changed",{value:a})}},{kind:"method",key:"_moveUp",value:function(e){const t=e.target.index,i=t-1;this._move(t,i)}},{kind:"method",key:"_moveDown",value:function(e){const t=e.target.index,i=t+1;this._move(t,i)}},{kind:"method",key:"_dragged",value:function(e){e.oldIndex!==e.newIndex&&this._move(e.oldIndex,e.newIndex)}},{kind:"method",key:"_move",value:function(e,t){const i=this.conditions.concat(),a=i.splice(e,1)[0];i.splice(t,0,a),C(this,"value-changed",{value:i})}},{kind:"method",key:"_conditionChanged",value:function(e){e.stopPropagation();const t=[...this.conditions],i=e.detail.value,a=e.target.index;if(null===i)t.splice(a,1);else{const e=this._getKey(t[a]);this._conditionKeys.set(i,e),t[a]=i}C(this,"value-changed",{value:t})}},{kind:"method",key:"_duplicateCondition",value:function(e){e.stopPropagation();const t=e.target.index;C(this,"value-changed",{value:this.conditions.concat(ue(this.conditions[t]))})}},{kind:"field",key:"_processedTypes",value:()=>Y((e=>Object.entries(Pt).map((([t,i])=>[t,e(`ui.panel.config.automation.editor.conditions.type.${t}.label`),i])).sort(((e,t)=>ve(e[1],t[1])))))},{kind:"get",static:!0,key:"styles",value:function(){return[je,g`
        ha-automation-condition-row {
          display: block;
          margin-bottom: 16px;
          scroll-margin-top: 48px;
        }
        ha-svg-icon {
          height: 20px;
        }
        ha-alert {
          display: block;
          margin-bottom: 16px;
          border-radius: var(--ha-card-border-radius, 12px);
          overflow: hidden;
        }
        .handle {
          cursor: move;
          padding: 12px;
        }
        .handle ha-svg-icon {
          pointer-events: none;
          height: 24px;
        }
      `]}}]}}),m);let Rt=p([M("ha-automation-condition-logical")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f({attribute:!1})],key:"condition",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[f({type:Boolean})],key:"reOrderMode",value:()=>!1},{kind:"get",static:!0,key:"defaultConfig",value:function(){return{conditions:[]}}},{kind:"method",key:"render",value:function(){return _`
      <ha-automation-condition
        nested
        .conditions=${this.condition.conditions||[]}
        @value-changed=${this._valueChanged}
        .hass=${this.hass}
        .disabled=${this.disabled}
        .reOrderMode=${this.reOrderMode}
      ></ha-automation-condition>
    `}},{kind:"method",key:"_valueChanged",value:function(e){e.stopPropagation(),C(this,"value-changed",{value:{...this.condition,conditions:e.detail.value}})}}]}}),m);p([M("ha-automation-condition-and")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[]}}),Rt),p([M("ha-automation-condition-not")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[]}}),Rt),p([M("ha-automation-condition-or")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[]}}),Rt),p([M("ha-automation-condition-editor")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f({attribute:!1})],key:"condition",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[f({type:Boolean})],key:"yamlMode",value:()=>!1},{kind:"field",decorators:[f({type:Boolean})],key:"reOrderMode",value:()=>!1},{kind:"field",key:"_processedCondition",value:()=>Y((e=>(e=>{if("condition"in e&&Array.isArray(e.condition))return{condition:"and",conditions:e.condition};for(const t of["and","or","not"])if(t in e)return{condition:t,conditions:e[t]};return e})(e)))},{kind:"method",key:"render",value:function(){const e=this._processedCondition(this.condition),t=void 0!==customElements.get(`ha-automation-condition-${e.condition}`),i=this.yamlMode||!t;return _`
      ${i?_`
            ${t?"":_`
                  ${this.hass.localize("ui.panel.config.automation.editor.conditions.unsupported_condition","condition",e.condition)}
                `}
            <ha-yaml-editor
              .hass=${this.hass}
              .defaultValue=${this.condition}
              @value-changed=${this._onYamlChange}
              .readOnly=${this.disabled}
            ></ha-yaml-editor>
          `:_`
            <div>
              ${fe(`ha-automation-condition-${e.condition}`,{hass:this.hass,condition:e,reOrderMode:this.reOrderMode,disabled:this.disabled})}
            </div>
          `}
    `}},{kind:"method",key:"_onYamlChange",value:function(e){e.stopPropagation(),e.detail.isValid&&C(this,"value-changed",{value:e.detail.value,yaml:!0})}},{kind:"field",static:!0,key:"styles",value:()=>T}]}}),m),p([M("ha-automation-action-condition")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[f()],key:"action",value:void 0},{kind:"get",static:!0,key:"defaultConfig",value:function(){return{condition:"state"}}},{kind:"method",key:"render",value:function(){return _`
      <ha-select
        fixedMenuPosition
        .label=${this.hass.localize("ui.panel.config.automation.editor.conditions.type_select")}
        .disabled=${this.disabled}
        .value=${this.action.condition}
        naturalMenuWidth
        @selected=${this._typeChanged}
      >
        ${this._processedTypes(this.hass.localize).map((([e,t,i])=>_`
            <mwc-list-item .value=${e} aria-label=${t} graphic="icon">
              ${t}<ha-svg-icon slot="graphic" .path=${i}></ha-svg-icon
            ></mwc-list-item>
          `))}
      </ha-select>
      <ha-automation-condition-editor
        .condition=${this.action}
        .disabled=${this.disabled}
        .hass=${this.hass}
        @value-changed=${this._conditionChanged}
      ></ha-automation-condition-editor>
    `}},{kind:"field",key:"_processedTypes",value:()=>Y((e=>Object.entries(Pt).map((([t,i])=>[t,e(`ui.panel.config.automation.editor.conditions.type.${t}.label`),i])).sort(((e,t)=>ve(e[1],t[1])))))},{kind:"method",key:"_conditionChanged",value:function(e){e.stopPropagation(),C(this,"value-changed",{value:e.detail.value})}},{kind:"method",key:"_typeChanged",value:function(e){const t=e.target.value;if(!t)return;const i=customElements.get(`ha-automation-condition-${t}`);t!==this.action.condition&&C(this,"value-changed",{value:{condition:t,...i.defaultConfig}})}},{kind:"get",static:!0,key:"styles",value:function(){return g`
      ha-select {
        margin-bottom: 24px;
      }
    `}}]}}),m),p([M("ha-automation-action-delay")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[f({attribute:!1})],key:"action",value:void 0},{kind:"field",decorators:[y()],key:"_timeData",value:void 0},{kind:"get",static:!0,key:"defaultConfig",value:function(){return{delay:""}}},{kind:"method",key:"willUpdate",value:function(e){e.has("action")&&(this.action&&mt(this.action)?C(this,"ui-mode-not-available",Error(this.hass.localize("ui.errors.config.no_template_editor_support"))):this._timeData=It(this.action.delay))}},{kind:"method",key:"render",value:function(){return _`<ha-duration-input
      .label=${this.hass.localize("ui.panel.config.automation.editor.actions.type.delay.delay")}
      .disabled=${this.disabled}
      .data=${this._timeData}
      enableMillisecond
      @value-changed=${this._valueChanged}
    ></ha-duration-input>`}},{kind:"method",key:"_valueChanged",value:function(e){e.stopPropagation();const t=e.detail.value;t&&C(this,"value-changed",{value:{...this.action,delay:t}})}}]}}),m),p([M("ha-device-action-picker")],(function(e,t){return{F:class extends t{constructor(){super($t,ft,(e=>({device_id:e||"",domain:"",entity_id:""}))),e(this)}},d:[{kind:"get",key:"NO_AUTOMATION_TEXT",value:function(){return this.hass.localize("ui.panel.config.devices.automation.actions.no_actions")}},{kind:"get",key:"UNKNOWN_AUTOMATION_TEXT",value:function(){return this.hass.localize("ui.panel.config.devices.automation.actions.unknown_action")}}]}}),Ft),p([M("ha-automation-action-device_id")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[f({type:Object})],key:"action",value:void 0},{kind:"field",decorators:[y()],key:"_deviceId",value:void 0},{kind:"field",decorators:[y()],key:"_capabilities",value:void 0},{kind:"field",key:"_origAction",value:void 0},{kind:"get",static:!0,key:"defaultConfig",value:function(){return{device_id:"",domain:"",entity_id:""}}},{kind:"field",key:"_extraFieldsData",value:()=>Y(((e,t)=>{const i={};return t.extra_fields.forEach((t=>{void 0!==e[t.name]&&(i[t.name]=e[t.name])})),i}))},{kind:"method",key:"render",value:function(){var e,t;const i=this._deviceId||this.action.device_id;return _`
      <ha-device-picker
        .value=${i}
        .disabled=${this.disabled}
        @value-changed=${this._devicePicked}
        .hass=${this.hass}
        label=${this.hass.localize("ui.panel.config.automation.editor.actions.type.device_id.label")}
      ></ha-device-picker>
      <ha-device-action-picker
        .value=${this.action}
        .deviceId=${i}
        .disabled=${this.disabled}
        @value-changed=${this._deviceActionPicked}
        .hass=${this.hass}
        label=${this.hass.localize("ui.panel.config.automation.editor.actions.type.device_id.action")}
      ></ha-device-action-picker>
      ${null!==(e=this._capabilities)&&void 0!==e&&null!==(t=e.extra_fields)&&void 0!==t&&t.length?_`
            <ha-form
              .hass=${this.hass}
              .data=${this._extraFieldsData(this.action,this._capabilities)}
              .schema=${this._capabilities.extra_fields}
              .disabled=${this.disabled}
              .computeLabel=${this._extraFieldsComputeLabelCallback(this.hass.localize)}
              @value-changed=${this._extraFieldsChanged}
            ></ha-form>
          `:""}
    `}},{kind:"method",key:"firstUpdated",value:function(){this._capabilities||this._getCapabilities(),this.action&&(this._origAction=this.action)}},{kind:"method",key:"updated",value:function(e){const t=e.get("action");t&&!bt(t,this.action)&&(this._deviceId=void 0,this._getCapabilities())}},{kind:"method",key:"_getCapabilities",value:async function(){var e,t;this._capabilities=this.action.domain?await(e=this.hass,t=this.action,e.callWS({type:"device_automation/action/capabilities",action:t})):void 0}},{kind:"method",key:"_devicePicked",value:function(e){e.stopPropagation(),this._deviceId=e.target.value,void 0===this._deviceId&&C(this,"value-changed",{value:i.defaultConfig})}},{kind:"method",key:"_deviceActionPicked",value:function(e){e.stopPropagation();let t=e.detail.value;this._origAction&&bt(this._origAction,t)&&(t=this._origAction),C(this,"value-changed",{value:t})}},{kind:"method",key:"_extraFieldsChanged",value:function(e){e.stopPropagation(),C(this,"value-changed",{value:{...this.action,...e.detail.value}})}},{kind:"method",key:"_extraFieldsComputeLabelCallback",value:function(e){return t=>e(`ui.panel.config.automation.editor.actions.type.device_id.extra_fields.${t.name}`)||t.name}},{kind:"field",static:!0,key:"styles",value:()=>g`
    ha-device-picker {
      display: block;
      margin-bottom: 16px;
    }
    ha-device-action-picker {
      display: block;
    }
  `}]}}),m),p([M("ha-automation-action-event")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[f()],key:"action",value:void 0},{kind:"field",decorators:[k("ha-yaml-editor",!0)],key:"_yamlEditor",value:void 0},{kind:"field",key:"_actionData",value:void 0},{kind:"get",static:!0,key:"defaultConfig",value:function(){return{event:"",event_data:{}}}},{kind:"method",key:"updated",value:function(e){e.has("action")&&(this._actionData&&this._actionData!==this.action.event_data&&this._yamlEditor&&this._yamlEditor.setValue(this.action.event_data),this._actionData=this.action.event_data)}},{kind:"method",key:"render",value:function(){const{event:e,event_data:t}=this.action;return _`
      <ha-textfield
        .label=${this.hass.localize("ui.panel.config.automation.editor.actions.type.event.event")}
        .value=${e}
        .disabled=${this.disabled}
        @change=${this._eventChanged}
      ></ha-textfield>
      <ha-yaml-editor
        .hass=${this.hass}
        .label=${this.hass.localize("ui.panel.config.automation.editor.actions.type.event.event_data")}
        .name=${"event_data"}
        .readOnly=${this.disabled}
        .defaultValue=${t}
        @value-changed=${this._dataChanged}
      ></ha-yaml-editor>
    `}},{kind:"method",key:"_dataChanged",value:function(e){e.stopPropagation(),e.detail.isValid&&(this._actionData=e.detail.value,hi(this,e))}},{kind:"method",key:"_eventChanged",value:function(e){e.stopPropagation(),C(this,"value-changed",{value:{...this.action,event:e.target.value}})}},{kind:"get",static:!0,key:"styles",value:function(){return g`
      ha-textfield {
        display: block;
      }
    `}}]}}),m),p([M("ha-automation-action-if")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[f({attribute:!1})],key:"action",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"reOrderMode",value:()=>!1},{kind:"field",decorators:[y()],key:"_showElse",value:()=>!1},{kind:"get",static:!0,key:"defaultConfig",value:function(){return{if:[],then:[]}}},{kind:"method",key:"render",value:function(){const e=this.action;return _`
      <h3>
        ${this.hass.localize("ui.panel.config.automation.editor.actions.type.if.if")}*:
      </h3>
      <ha-automation-condition
        nested
        .conditions=${e.if}
        .reOrderMode=${this.reOrderMode}
        .disabled=${this.disabled}
        @value-changed=${this._ifChanged}
        .hass=${this.hass}
      ></ha-automation-condition>

      <h3>
        ${this.hass.localize("ui.panel.config.automation.editor.actions.type.if.then")}*:
      </h3>
      <ha-automation-action
        nested
        .actions=${e.then}
        .reOrderMode=${this.reOrderMode}
        .disabled=${this.disabled}
        @value-changed=${this._thenChanged}
        .hass=${this.hass}
      ></ha-automation-action>
      ${this._showElse||e.else?_`
            <h3>
              ${this.hass.localize("ui.panel.config.automation.editor.actions.type.if.else")}:
            </h3>
            <ha-automation-action
              nested
              .actions=${e.else||[]}
              .reOrderMode=${this.reOrderMode}
              .disabled=${this.disabled}
              @value-changed=${this._elseChanged}
              .hass=${this.hass}
            ></ha-automation-action>
          `:_` <div class="link-button-row">
            <button
              class="link"
              @click=${this._addElse}
              .disabled=${this.disabled}
            >
              ${this.hass.localize("ui.panel.config.automation.editor.actions.type.if.add_else")}
            </button>
          </div>`}
    `}},{kind:"method",key:"_addElse",value:function(){this._showElse=!0}},{kind:"method",key:"_ifChanged",value:function(e){e.stopPropagation();const t=e.detail.value;C(this,"value-changed",{value:{...this.action,if:t}})}},{kind:"method",key:"_thenChanged",value:function(e){e.stopPropagation();const t=e.detail.value;C(this,"value-changed",{value:{...this.action,then:t}})}},{kind:"method",key:"_elseChanged",value:function(e){e.stopPropagation();const t=e.detail.value;C(this,"value-changed",{value:{...this.action,else:t}})}},{kind:"get",static:!0,key:"styles",value:function(){return[T,g`
        .link-button-row {
          padding: 14px;
        }
      `]}}]}}),m),p([M("ha-automation-action-parallel")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[f({attribute:!1})],key:"action",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"reOrderMode",value:()=>!1},{kind:"get",static:!0,key:"defaultConfig",value:function(){return{parallel:[]}}},{kind:"method",key:"render",value:function(){const e=this.action;return _`
      <ha-automation-action
        nested
        .actions=${e.parallel}
        .reOrderMode=${this.reOrderMode}
        .disabled=${this.disabled}
        @value-changed=${this._actionsChanged}
        .hass=${this.hass}
      ></ha-automation-action>
    `}},{kind:"method",key:"_actionsChanged",value:function(e){e.stopPropagation();const t=e.detail.value;C(this,"value-changed",{value:{...this.action,parallel:t}})}},{kind:"get",static:!0,key:"styles",value:function(){return T}}]}}),m),p([M("ha-automation-action-play_media")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[f({attribute:!1})],key:"action",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"narrow",value:()=>!1},{kind:"get",static:!0,key:"defaultConfig",value:function(){return{service:"media_player.play_media",target:{entity_id:""},data:{media_content_id:"",media_content_type:""},metadata:{}}}},{kind:"field",key:"_getSelectorValue",value:()=>Y((e=>{var t,i,a;return{entity_id:(null===(t=e.target)||void 0===t?void 0:t.entity_id)||e.entity_id,media_content_id:null===(i=e.data)||void 0===i?void 0:i.media_content_id,media_content_type:null===(a=e.data)||void 0===a?void 0:a.media_content_type,metadata:e.metadata}}))},{kind:"method",key:"render",value:function(){return _`
      <ha-selector-media
        .hass=${this.hass}
        .disabled=${this.disabled}
        .value=${this._getSelectorValue(this.action)}
        @value-changed=${this._valueChanged}
      ></ha-selector-media>
    `}},{kind:"method",key:"_valueChanged",value:function(e){e.stopPropagation(),C(this,"value-changed",{value:{service:"media_player.play_media",target:{entity_id:e.detail.value.entity_id},data:{media_content_id:e.detail.value.media_content_id,media_content_type:e.detail.value.media_content_type},metadata:e.detail.value.metadata||{}}})}}]}}),m);const Kt=["count","while","until"],Vt=e=>Kt.find((t=>t in e));p([M("ha-automation-action-repeat")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[f({attribute:!1})],key:"action",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"reOrderMode",value:()=>!1},{kind:"get",static:!0,key:"defaultConfig",value:function(){return{repeat:{count:2,sequence:[]}}}},{kind:"method",key:"render",value:function(){const e=this.action.repeat,t=Vt(e);return _`
      <ha-select
        .label=${this.hass.localize("ui.panel.config.automation.editor.actions.type.repeat.type_select")}
        .value=${t}
        .disabled=${this.disabled}
        @selected=${this._typeChanged}
      >
        ${Kt.map((e=>_`
            <mwc-list-item .value=${e}>
              ${this.hass.localize(`ui.panel.config.automation.editor.actions.type.repeat.type.${e}.label`)}
            </mwc-list-item>
          `))}
      </ha-select>
      <div>
        ${"count"===t?_`
              <ha-textfield
                .label=${this.hass.localize("ui.panel.config.automation.editor.actions.type.repeat.type.count.label")}
                name="count"
                .value=${e.count||"0"}
                .disabled=${this.disabled}
                @change=${this._countChanged}
              ></ha-textfield>
            `:"while"===t?_` <h3>
                ${this.hass.localize("ui.panel.config.automation.editor.actions.type.repeat.type.while.conditions")}:
              </h3>
              <ha-automation-condition
                nested
                .conditions=${e.while||[]}
                .hass=${this.hass}
                .disabled=${this.disabled}
                @value-changed=${this._conditionChanged}
              ></ha-automation-condition>`:"until"===t?_` <h3>
                ${this.hass.localize("ui.panel.config.automation.editor.actions.type.repeat.type.until.conditions")}:
              </h3>
              <ha-automation-condition
                nested
                .conditions=${e.until||[]}
                .hass=${this.hass}
                .disabled=${this.disabled}
                @value-changed=${this._conditionChanged}
              ></ha-automation-condition>`:""}
      </div>
      <h3>
        ${this.hass.localize("ui.panel.config.automation.editor.actions.type.repeat.sequence")}:
      </h3>
      <ha-automation-action
        nested
        .actions=${e.sequence}
        .reOrderMode=${this.reOrderMode}
        .disabled=${this.disabled}
        @value-changed=${this._actionChanged}
        .hass=${this.hass}
      ></ha-automation-action>
    `}},{kind:"method",key:"_typeChanged",value:function(e){const t=e.target.value;if(!t||t===Vt(this.action.repeat))return;const i="count"===t?2:[];C(this,"value-changed",{value:{...this.action,repeat:{[t]:i,sequence:this.action.repeat.sequence}}})}},{kind:"method",key:"_conditionChanged",value:function(e){e.stopPropagation();const t=e.detail.value;C(this,"value-changed",{value:{...this.action,repeat:{...this.action.repeat,[Vt(this.action.repeat)]:t}}})}},{kind:"method",key:"_actionChanged",value:function(e){e.stopPropagation();const t=e.detail.value;C(this,"value-changed",{value:{...this.action,repeat:{...this.action.repeat,sequence:t}}})}},{kind:"method",key:"_countChanged",value:function(e){const t=e.target.value;this.action.repeat.count!==t&&C(this,"value-changed",{value:{...this.action,repeat:{...this.action.repeat,count:t}}})}},{kind:"get",static:!0,key:"styles",value:function(){return[T,g`
        ha-textfield {
          margin-top: 16px;
        }
      `]}}]}}),m);const Xt=e=>"all"===e||(e=>e.includes("."))(e),Yt=et({alias:tt(it()),service:tt(it()),entity_id:tt((Gt=it(),Jt="entity ID (domain.entity or all)",Ht=Xt,new We({...Gt,*refiner(e,t){yield*Gt.refiner(e,t);const i=De(Ht(e,t),t,Gt,e);for(const e of i)yield{...e,refinement:Jt}}}))),target:tt(Ge()),data:tt(Ge())});var Gt,Jt,Ht;p([M("ha-automation-action-service")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f({attribute:!1})],key:"action",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[f({type:Boolean})],key:"narrow",value:()=>!1},{kind:"field",decorators:[y()],key:"_action",value:void 0},{kind:"get",static:!0,key:"defaultConfig",value:function(){return{service:"",data:{}}}},{kind:"method",key:"willUpdate",value:function(e){if(e.has("action")){try{Re(this.action,Yt)}catch(e){return void C(this,"ui-mode-not-available",e)}this.action&&mt(this.action)?C(this,"ui-mode-not-available",Error(this.hass.localize("ui.errors.config.no_template_editor_support"))):this.action.entity_id?(this._action={...this.action,data:{...this.action.data,entity_id:this.action.entity_id}},delete this._action.entity_id):this._action=this.action}}},{kind:"method",key:"render",value:function(){var e;return _`
      <ha-service-control
        .narrow=${this.narrow}
        .hass=${this.hass}
        .value=${this._action}
        .disabled=${this.disabled}
        .showAdvanced=${null===(e=this.hass.userData)||void 0===e?void 0:e.showAdvanced}
        @value-changed=${this._actionChanged}
      ></ha-service-control>
    `}},{kind:"method",key:"_actionChanged",value:function(e){e.detail.value===this._action&&e.stopPropagation()}},{kind:"get",static:!0,key:"styles",value:function(){return g`
      ha-service-control {
        display: block;
        margin: 0 -16px;
      }
    `}}]}}),m),p([M("ha-automation-action-stop")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f()],key:"action",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"disabled",value:()=>!1},{kind:"get",static:!0,key:"defaultConfig",value:function(){return{stop:""}}},{kind:"method",key:"render",value:function(){const{error:e,stop:t}=this.action;return _`
      <ha-textfield
        .label=${this.hass.localize("ui.panel.config.automation.editor.actions.type.stop.stop")}
        .value=${t}
        .disabled=${this.disabled}
        @change=${this._stopChanged}
      ></ha-textfield>
      <ha-formfield
        .disabled=${this.disabled}
        .label=${this.hass.localize("ui.panel.config.automation.editor.actions.type.stop.error")}
      >
        <ha-switch
          .disabled=${this.disabled}
          .checked=${null!=e&&e}
          @change=${this._errorChanged}
        ></ha-switch>
      </ha-formfield>
    `}},{kind:"method",key:"_stopChanged",value:function(e){e.stopPropagation(),C(this,"value-changed",{value:{...this.action,stop:e.target.value}})}},{kind:"method",key:"_errorChanged",value:function(e){e.stopPropagation(),C(this,"value-changed",{value:{...this.action,error:e.target.checked}})}},{kind:"get",static:!0,key:"styles",value:function(){return g`
      ha-textfield {
        display: block;
        margin-bottom: 24px;
      }
    `}}]}}),m);const Qt={calendar:Q,device:u,event:i,state:j,geo_location:Z,homeassistant:ee,mqtt:te,numeric_state:F,sun:I,tag:ie,template:s,time:N,time_pattern:ae,webhook:oe,zone:L};p([M("ha-automation-trigger-calendar")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f({attribute:!1})],key:"trigger",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",key:"_schema",value:()=>Y((e=>[{name:"entity_id",required:!0,selector:{entity:{domain:"calendar"}}},{name:"event",type:"select",required:!0,options:[["start",e("ui.panel.config.automation.editor.triggers.type.calendar.start")],["end",e("ui.panel.config.automation.editor.triggers.type.calendar.end")]]},{name:"offset",selector:{duration:{enable_day:!0}}},{name:"offset_type",type:"select",required:!0,options:[["before",e("ui.panel.config.automation.editor.triggers.type.calendar.before")],["after",e("ui.panel.config.automation.editor.triggers.type.calendar.after")]]}]))},{kind:"get",static:!0,key:"defaultConfig",value:function(){return{event:"start",offset:0}}},{kind:"method",key:"render",value:function(){const e=this._schema(this.hass.localize),t=this.trigger.offset,i=It(t);let a="after";("object"==typeof t&&i.hours<0||"string"==typeof t&&t.startsWith("-"))&&(i.hours=Math.abs(i.hours),a="before");const o={...this.trigger,offset:i,offset_type:a};return _`
      <ha-form
        .schema=${e}
        .data=${o}
        .hass=${this.hass}
        .disabled=${this.disabled}
        .computeLabel=${this._computeLabelCallback}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `}},{kind:"method",key:"_valueChanged",value:function(e){var t,i,a;e.stopPropagation();const o=e.detail.value.offset,n="before"===e.detail.value.offset_type?"-":"",s={...e.detail.value,offset:`${n}${null!==(t=o.hours)&&void 0!==t?t:0}:${null!==(i=o.minutes)&&void 0!==i?i:0}:${null!==(a=o.seconds)&&void 0!==a?a:0}`};delete s.offset_type,C(this,"value-changed",{value:s})}},{kind:"field",key:"_computeLabelCallback",value(){return e=>this.hass.localize(`ui.panel.config.automation.editor.triggers.type.calendar.${e.name}`)}}]}}),m),p([M("ha-device-trigger-picker")],(function(e,t){return{F:class extends t{constructor(){super(wt,kt,(e=>({device_id:e||"",platform:"device",domain:"",entity_id:""}))),e(this)}},d:[{kind:"get",key:"NO_AUTOMATION_TEXT",value:function(){return this.hass.localize("ui.panel.config.devices.automation.triggers.no_triggers")}},{kind:"get",key:"UNKNOWN_AUTOMATION_TEXT",value:function(){return this.hass.localize("ui.panel.config.devices.automation.triggers.unknown_trigger")}}]}}),Ft),p([M("ha-automation-trigger-device")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f({type:Object})],key:"trigger",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[y()],key:"_deviceId",value:void 0},{kind:"field",decorators:[y()],key:"_capabilities",value:void 0},{kind:"field",key:"_origTrigger",value:void 0},{kind:"get",static:!0,key:"defaultConfig",value:function(){return{device_id:"",domain:"",entity_id:""}}},{kind:"field",key:"_extraFieldsData",value:()=>Y(((e,t)=>{const i={};return t.extra_fields.forEach((t=>{void 0!==e[t.name]&&(i[t.name]=e[t.name])})),i}))},{kind:"method",key:"render",value:function(){var e;const t=this._deviceId||this.trigger.device_id;return _`
      <ha-device-picker
        .value=${t}
        @value-changed=${this._devicePicked}
        .hass=${this.hass}
        .disabled=${this.disabled}
        label=${this.hass.localize("ui.panel.config.automation.editor.triggers.type.device.label")}
      ></ha-device-picker>
      <ha-device-trigger-picker
        .value=${this.trigger}
        .deviceId=${t}
        @value-changed=${this._deviceTriggerPicked}
        .hass=${this.hass}
        .disabled=${this.disabled}
        label=${this.hass.localize("ui.panel.config.automation.editor.triggers.type.device.trigger")}
      ></ha-device-trigger-picker>
      ${null!==(e=this._capabilities)&&void 0!==e&&e.extra_fields?_`
            <ha-form
              .hass=${this.hass}
              .data=${this._extraFieldsData(this.trigger,this._capabilities)}
              .schema=${this._capabilities.extra_fields}
              .disabled=${this.disabled}
              .computeLabel=${this._extraFieldsComputeLabelCallback(this.hass.localize)}
              @value-changed=${this._extraFieldsChanged}
            ></ha-form>
          `:""}
    `}},{kind:"method",key:"firstUpdated",value:function(){this._capabilities||this._getCapabilities(),this.trigger&&(this._origTrigger=this.trigger)}},{kind:"method",key:"updated",value:function(e){if(!e.has("trigger"))return;const t=e.get("trigger");t&&!bt(t,this.trigger)&&this._getCapabilities()}},{kind:"method",key:"_getCapabilities",value:async function(){const e=this.trigger;this._capabilities=e.domain?await((e,t)=>e.callWS({type:"device_automation/trigger/capabilities",trigger:t}))(this.hass,e):void 0}},{kind:"method",key:"_devicePicked",value:function(e){e.stopPropagation(),this._deviceId=e.target.value,void 0===this._deviceId&&C(this,"value-changed",{value:{...i.defaultConfig,platform:"device"}})}},{kind:"method",key:"_deviceTriggerPicked",value:function(e){e.stopPropagation();let t=e.detail.value;this._origTrigger&&bt(this._origTrigger,t)&&(t=this._origTrigger),this.trigger.id&&(t.id=this.trigger.id),C(this,"value-changed",{value:t})}},{kind:"method",key:"_extraFieldsChanged",value:function(e){e.stopPropagation(),C(this,"value-changed",{value:{...this.trigger,...e.detail.value}})}},{kind:"method",key:"_extraFieldsComputeLabelCallback",value:function(e){return t=>e(`ui.panel.config.automation.editor.triggers.type.device.extra_fields.${t.name}`)||t.name}},{kind:"field",static:!0,key:"styles",value:()=>g`
    ha-device-picker {
      display: block;
      margin-bottom: 24px;
    }
  `}]}}),m);const Zt={},ei=ne(class extends se{constructor(){super(...arguments),this.ot=Zt}render(e,t){return t()}update(e,[t,i]){if(Array.isArray(t)){if(Array.isArray(this.ot)&&this.ot.length===t.length&&t.every(((e,t)=>e===this.ot[t])))return de}else if(this.ot===t)return de;return this.ot=Array.isArray(t)?Array.from(t):t,this.render(t,i)}}),ti=async e=>e.callWS({type:"config/auth/list"});p([M("ha-user-badge")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f({attribute:!1})],key:"user",value:void 0},{kind:"field",decorators:[y()],key:"_personPicture",value:void 0},{kind:"field",key:"_personEntityId",value:void 0},{kind:"method",key:"willUpdate",value:function(e){if(x(w(i.prototype),"willUpdate",this).call(this,e),e.has("user"))return void this._getPersonPicture();const t=e.get("hass");if(this._personEntityId&&t&&this.hass.states[this._personEntityId]!==t.states[this._personEntityId]){const e=this.hass.states[this._personEntityId];e?this._personPicture=e.attributes.entity_picture:this._getPersonPicture()}else!this._personEntityId&&t&&this._getPersonPicture()}},{kind:"method",key:"render",value:function(){if(!this.hass||!this.user)return _``;const e=this._personPicture;if(e)return _`<div
        style=${re({backgroundImage:`url(${e})`})}
        class="picture"
      ></div>`;const t=(e=>e?e.trim().split(" ").slice(0,3).map((e=>e.substring(0,1))).join(""):"?")(this.user.name);return _`<div
      class="initials ${$({long:t.length>2})}"
    >
      ${t}
    </div>`}},{kind:"method",key:"_getPersonPicture",value:function(){if(this._personEntityId=void 0,this._personPicture=void 0,this.hass&&this.user)for(const e of Object.values(this.hass.states))if(e.attributes.user_id===this.user.id&&"person"===Ue(e)){this._personEntityId=e.entity_id,this._personPicture=e.attributes.entity_picture;break}}},{kind:"get",static:!0,key:"styles",value:function(){return g`
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
    `}}]}}),m),p([M("ha-list-item")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"get",static:!0,key:"styles",value:function(){return[me,g`
        :host {
          padding-left: var(--mdc-list-side-padding, 20px);
          padding-right: var(--mdc-list-side-padding, 20px);
        }
        :host([graphic="avatar"]:not([twoLine])),
        :host([graphic="icon"]:not([twoLine])) {
          height: 48px;
        }
        span.material-icons:first-of-type {
          margin-inline-start: 0px !important;
          margin-inline-end: var(
            --mdc-list-item-graphic-margin,
            16px
          ) !important;
          direction: var(--direction);
        }
        span.material-icons:last-of-type {
          margin-inline-start: auto !important;
          margin-inline-end: 0px !important;
          direction: var(--direction);
        }
      `]}}]}}),pe);let ii=p(null,(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",key:"hass",value:void 0},{kind:"field",decorators:[f()],key:"label",value:void 0},{kind:"field",decorators:[f()],key:"noUserLabel",value:void 0},{kind:"field",decorators:[f()],key:"value",value:()=>""},{kind:"field",decorators:[f()],key:"users",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",key:"_sortedUsers",value:()=>Y((e=>e?e.filter((e=>!e.system_generated)).sort(((e,t)=>ve(e.name,t.name))):[]))},{kind:"method",key:"render",value:function(){var e,t;return _`
      <ha-select
        .label=${this.label}
        .disabled=${this.disabled}
        .value=${this.value}
        @selected=${this._userChanged}
      >
        ${0===(null===(e=this.users)||void 0===e?void 0:e.length)?_`<mwc-list-item value="">
              ${this.noUserLabel||(null===(t=this.hass)||void 0===t?void 0:t.localize("ui.components.user-picker.no_user"))}
            </mwc-list-item>`:""}
        ${this._sortedUsers(this.users).map((e=>_`
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
    `}},{kind:"method",key:"firstUpdated",value:function(e){x(w(i.prototype),"firstUpdated",this).call(this,e),void 0===this.users&&ti(this.hass).then((e=>{this.users=e}))}},{kind:"method",key:"_userChanged",value:function(e){const t=e.target.value;t!==this.value&&(this.value=t,setTimeout((()=>{C(this,"value-changed",{value:t}),C(this,"change")}),0))}},{kind:"get",static:!0,key:"styles",value:function(){return g`
      :host {
        display: inline-block;
      }
      mwc-list {
        display: block;
      }
    `}}]}}),m);customElements.define("ha-user-picker",ii),p([M("ha-users-picker")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f()],key:"value",value:void 0},{kind:"field",decorators:[f({attribute:"picked-user-label"})],key:"pickedUserLabel",value:void 0},{kind:"field",decorators:[f({attribute:"pick-user-label"})],key:"pickUserLabel",value:void 0},{kind:"field",decorators:[f({attribute:!1})],key:"users",value:void 0},{kind:"method",key:"firstUpdated",value:function(e){x(w(i.prototype),"firstUpdated",this).call(this,e),void 0===this.users&&ti(this.hass).then((e=>{this.users=e}))}},{kind:"method",key:"render",value:function(){if(!this.hass||!this.users)return _``;const e=this._notSelectedUsers(this.users,this.value);return _`
      ${ei([e],(()=>{var t;return null===(t=this.value)||void 0===t?void 0:t.map(((t,i)=>_`
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
                .path=${le}
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
    `}},{kind:"field",key:"_notSelectedUsers",value:()=>Y(((e,t)=>t?null==e?void 0:e.filter((e=>!e.system_generated&&!t.includes(e.id))):null==e?void 0:e.filter((e=>!e.system_generated))))},{kind:"field",key:"_notSelectedUsersAndSelected",value:()=>(e,t,i)=>{const a=null==t?void 0:t.find((t=>t.id===e));return a?i?[...i,a]:[a]:i}},{kind:"get",key:"_currentUsers",value:function(){return this.value||[]}},{kind:"method",key:"_updateUsers",value:async function(e){this.value=e,C(this,"value-changed",{value:e})}},{kind:"method",key:"_userChanged",value:function(e){e.stopPropagation();const t=e.currentTarget.index,i=e.detail.value,a=[...this._currentUsers];""===i?a.splice(t,1):a.splice(t,1,i),this._updateUsers(a)}},{kind:"method",key:"_addUser",value:async function(e){e.stopPropagation();const t=e.detail.value;if(e.currentTarget.value="",!t)return;const i=this._currentUsers;i.includes(t)||this._updateUsers([...i,t])}},{kind:"method",key:"_removeUser",value:function(e){const t=e.currentTarget.userId;this._updateUsers(this._currentUsers.filter((e=>e!==t)))}},{kind:"get",static:!0,key:"styles",value:function(){return g`
      :host {
        display: block;
      }
      div {
        display: flex;
        align-items: center;
      }
    `}}]}}),m),p([M("ha-automation-trigger-event")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f()],key:"trigger",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"disabled",value:()=>!1},{kind:"get",static:!0,key:"defaultConfig",value:function(){return{event_type:""}}},{kind:"method",key:"render",value:function(){const{event_type:e,event_data:t,context:i}=this.trigger;return _`
      <ha-textfield
        .label=${this.hass.localize("ui.panel.config.automation.editor.triggers.type.event.event_type")}
        name="event_type"
        .value=${e}
        .disabled=${this.disabled}
        @change=${this._valueChanged}
      ></ha-textfield>
      <ha-yaml-editor
        .hass=${this.hass}
        .label=${this.hass.localize("ui.panel.config.automation.editor.triggers.type.event.event_data")}
        .name=${"event_data"}
        .readOnly=${this.disabled}
        .defaultValue=${t}
        @value-changed=${this._dataChanged}
      ></ha-yaml-editor>
      <br />
      ${this.hass.localize("ui.panel.config.automation.editor.triggers.type.event.context_users")}
      <ha-users-picker
        .pickedUserLabel=${this.hass.localize("ui.panel.config.automation.editor.triggers.type.event.context_user_picked")}
        .pickUserLabel=${this.hass.localize("ui.panel.config.automation.editor.triggers.type.event.context_user_pick")}
        .hass=${this.hass}
        .disabled=${this.disabled}
        .value=${this._wrapUsersInArray(null==i?void 0:i.user_id)}
        @value-changed=${this._usersChanged}
      ></ha-users-picker>
    `}},{kind:"method",key:"_wrapUsersInArray",value:function(e){return e?"string"==typeof e?[e]:e:[]}},{kind:"method",key:"_valueChanged",value:function(e){e.stopPropagation(),ri(this,e)}},{kind:"method",key:"_dataChanged",value:function(e){e.stopPropagation(),e.detail.isValid&&ri(this,e)}},{kind:"method",key:"_usersChanged",value:function(e){e.stopPropagation();const t={...this.trigger};!e.detail.value.length&&t.context?delete t.context.user_id:(t.context||(t.context={}),t.context.user_id=e.detail.value),C(this,"value-changed",{value:t})}},{kind:"get",static:!0,key:"styles",value:function(){return g`
      ha-textfield {
        display: block;
      }
    `}}]}}),m),p([M("ha-automation-trigger-geo_location")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f({attribute:!1})],key:"trigger",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",key:"_schema",value:()=>Y((e=>[{name:"source",selector:{text:{}}},{name:"zone",selector:{entity:{domain:"zone"}}},{name:"event",type:"select",required:!0,options:[["enter",e("ui.panel.config.automation.editor.triggers.type.geo_location.enter")],["leave",e("ui.panel.config.automation.editor.triggers.type.geo_location.leave")]]}]))},{kind:"get",static:!0,key:"defaultConfig",value:function(){return{source:"",zone:"",event:"enter"}}},{kind:"method",key:"render",value:function(){return _`
      <ha-form
        .schema=${this._schema(this.hass.localize)}
        .data=${this.trigger}
        .hass=${this.hass}
        .disabled=${this.disabled}
        .computeLabel=${this._computeLabelCallback}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `}},{kind:"method",key:"_valueChanged",value:function(e){e.stopPropagation();const t=e.detail.value;C(this,"value-changed",{value:t})}},{kind:"field",key:"_computeLabelCallback",value(){return e=>this.hass.localize(`ui.panel.config.automation.editor.triggers.type.geo_location.${e.name}`)}}]}}),m),p([M("ha-automation-trigger-homeassistant")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f({attribute:!1})],key:"trigger",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",key:"_schema",value:()=>Y((e=>[{name:"event",type:"select",required:!0,options:[["start",e("ui.panel.config.automation.editor.triggers.type.homeassistant.start")],["shutdown",e("ui.panel.config.automation.editor.triggers.type.homeassistant.shutdown")]]}]))},{kind:"get",static:!0,key:"defaultConfig",value:function(){return{event:"start"}}},{kind:"method",key:"render",value:function(){return _`
      <ha-form
        .schema=${this._schema(this.hass.localize)}
        .data=${this.trigger}
        .hass=${this.hass}
        .disabled=${this.disabled}
        .computeLabel=${this._computeLabelCallback}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `}},{kind:"method",key:"_valueChanged",value:function(e){e.stopPropagation();const t=e.detail.value;C(this,"value-changed",{value:t})}},{kind:"field",key:"_computeLabelCallback",value(){return e=>this.hass.localize(`ui.panel.config.automation.editor.triggers.type.homeassistant.${e.name}`)}},{kind:"field",static:!0,key:"styles",value:()=>g`
    label {
      display: flex;
      align-items: center;
    }
  `}]}}),m);const ai=[{name:"topic",required:!0,selector:{text:{}}},{name:"payload",selector:{text:{}}}];p([M("ha-automation-trigger-mqtt")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f({attribute:!1})],key:"trigger",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"disabled",value:()=>!1},{kind:"get",static:!0,key:"defaultConfig",value:function(){return{topic:""}}},{kind:"method",key:"render",value:function(){return _`
      <ha-form
        .schema=${ai}
        .data=${this.trigger}
        .hass=${this.hass}
        .disabled=${this.disabled}
        .computeLabel=${this._computeLabelCallback}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `}},{kind:"method",key:"_valueChanged",value:function(e){e.stopPropagation();const t=e.detail.value;C(this,"value-changed",{value:t})}},{kind:"field",key:"_computeLabelCallback",value(){return e=>this.hass.localize(`ui.panel.config.automation.editor.triggers.type.mqtt.${e.name}`)}}]}}),m),p([M("ha-automation-trigger-numeric_state")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f({attribute:!1})],key:"trigger",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",key:"_schema",value:()=>Y((e=>[{name:"entity_id",required:!0,selector:{entity:{}}},{name:"attribute",selector:{attribute:{entity_id:e,hide_attributes:["access_token","auto_update","available_modes","away_mode","changed_by","code_format","color_modes","current_activity","device_class","editable","effect_list","effect","entity_picture","fan_mode","fan_modes","fan_speed_list","forecast","friendly_name","frontend_stream_type","has_date","has_time","hs_color","hvac_mode","hvac_modes","icon","media_album_name","media_artist","media_content_type","media_position_updated_at","media_title","next_dawn","next_dusk","next_midnight","next_noon","next_rising","next_setting","operation_list","operation_mode","options","preset_mode","preset_modes","release_notes","release_summary","release_url","restored","rgb_color","rgbw_color","shuffle","sound_mode_list","sound_mode","source_list","source_type","source","state_class","supported_features","swing_mode","swing_mode","swing_modes","title","token","unit_of_measurement","xy_color"]}}},{name:"above",selector:{number:{mode:"box",min:Number.MIN_SAFE_INTEGER,max:Number.MAX_SAFE_INTEGER,step:.1}}},{name:"below",selector:{number:{mode:"box",min:Number.MIN_SAFE_INTEGER,max:Number.MAX_SAFE_INTEGER,step:.1}}},{name:"value_template",selector:{template:{}}},{name:"for",selector:{duration:{}}}]))},{kind:"method",key:"willUpdate",value:function(e){e.has("trigger")&&this.trigger&&mt(this.trigger.for)&&C(this,"ui-mode-not-available",Error(this.hass.localize("ui.errors.config.no_template_editor_support")))}},{kind:"get",static:!0,key:"defaultConfig",value:function(){return{entity_id:""}}},{kind:"method",key:"render",value:function(){const e=It(this.trigger.for),t={...this.trigger,for:e},i=this._schema(this.trigger.entity_id);return _`
      <ha-form
        .hass=${this.hass}
        .data=${t}
        .schema=${i}
        .disabled=${this.disabled}
        @value-changed=${this._valueChanged}
        .computeLabel=${this._computeLabelCallback}
      ></ha-form>
    `}},{kind:"method",key:"_valueChanged",value:function(e){e.stopPropagation();const t=e.detail.value;C(this,"value-changed",{value:t})}},{kind:"field",key:"_computeLabelCallback",value(){return e=>{switch(e.name){case"entity_id":return this.hass.localize("ui.components.entity.entity-picker.entity");case"attribute":return this.hass.localize("ui.components.entity.entity-attribute-picker.attribute");case"for":return this.hass.localize("ui.panel.config.automation.editor.triggers.type.state.for");default:return this.hass.localize(`ui.panel.config.automation.editor.triggers.type.numeric_state.${e.name}`)}}}}]}}),m);const oi=Xe(Nt,et({alias:tt(it()),platform:Qe("state"),entity_id:tt(ot([it(),Je(it())])),attribute:tt(it()),from:tt(it()),to:tt(it()),for:tt(ot([it(),St]))}));p([M("ha-automation-trigger-state")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f({attribute:!1})],key:"trigger",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"disabled",value:()=>!1},{kind:"get",static:!0,key:"defaultConfig",value:function(){return{entity_id:[]}}},{kind:"field",key:"_schema",value:()=>Y(((e,t)=>[{name:"entity_id",required:!0,selector:{entity:{multiple:!0}}},{name:"attribute",selector:{attribute:{entity_id:e?e[0]:void 0,hide_attributes:["access_token","available_modes","color_modes","device_class","editable","effect_list","entity_picture","fan_modes","fan_speed_list","friendly_name","has_date","has_time","hvac_modes","icon","operation_list","options","preset_modes","sound_mode_list","source_list","state_class","supported_features","swing_modes","token","unit_of_measurement"]}}},{name:"from",selector:{state:{entity_id:e?e[0]:void 0,attribute:t}}},{name:"to",selector:{state:{entity_id:e?e[0]:void 0,attribute:t}}},{name:"for",selector:{duration:{}}}]))},{kind:"method",key:"shouldUpdate",value:function(e){if(!e.has("trigger"))return!0;if(this.trigger.for&&"object"==typeof this.trigger.for&&0===this.trigger.for.milliseconds&&delete this.trigger.for.milliseconds,this.trigger&&mt(this.trigger))return C(this,"ui-mode-not-available",Error(this.hass.localize("ui.errors.config.no_template_editor_support"))),!1;try{Re(this.trigger,oi)}catch(e){return C(this,"ui-mode-not-available",e),!1}return!0}},{kind:"method",key:"render",value:function(){const e=It(this.trigger.for),t={...this.trigger,entity_id:be(this.trigger.entity_id),for:e},i=this._schema(this.trigger.entity_id,this.trigger.attribute);return _`
      <ha-form
        .hass=${this.hass}
        .data=${t}
        .schema=${i}
        @value-changed=${this._valueChanged}
        .computeLabel=${this._computeLabelCallback}
        .disabled=${this.disabled}
      ></ha-form>
    `}},{kind:"method",key:"_valueChanged",value:function(e){e.stopPropagation();const t=e.detail.value;Object.keys(t).forEach((e=>void 0===t[e]||""===t[e]?delete t[e]:{})),C(this,"value-changed",{value:t})}},{kind:"field",key:"_computeLabelCallback",value(){return e=>this.hass.localize("entity_id"===e.name?"ui.components.entity.entity-picker.entity":`ui.panel.config.automation.editor.triggers.type.state.${e.name}`)}}]}}),m),p([M("ha-automation-trigger-sun")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f({attribute:!1})],key:"trigger",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",key:"_schema",value:()=>Y((e=>[{name:"event",type:"select",required:!0,options:[["sunrise",e("ui.panel.config.automation.editor.triggers.type.sun.sunrise")],["sunset",e("ui.panel.config.automation.editor.triggers.type.sun.sunset")]]},{name:"offset",selector:{text:{}}}]))},{kind:"get",static:!0,key:"defaultConfig",value:function(){return{event:"sunrise",offset:0}}},{kind:"method",key:"render",value:function(){const e=this._schema(this.hass.localize);return _`
      <ha-form
        .schema=${e}
        .data=${this.trigger}
        .hass=${this.hass}
        .disabled=${this.disabled}
        .computeLabel=${this._computeLabelCallback}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `}},{kind:"method",key:"_valueChanged",value:function(e){e.stopPropagation();const t=e.detail.value;C(this,"value-changed",{value:t})}},{kind:"field",key:"_computeLabelCallback",value(){return e=>this.hass.localize(`ui.panel.config.automation.editor.triggers.type.sun.${e.name}`)}}]}}),m);p([M("ha-automation-trigger-tag")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f()],key:"trigger",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[y()],key:"_tags",value:void 0},{kind:"get",static:!0,key:"defaultConfig",value:function(){return{tag_id:""}}},{kind:"method",key:"firstUpdated",value:function(e){x(w(i.prototype),"firstUpdated",this).call(this,e),this._fetchTags()}},{kind:"method",key:"render",value:function(){return this._tags?_`
      <ha-select
        .label=${this.hass.localize("ui.panel.config.automation.editor.triggers.type.tag.label")}
        .disabled=${this.disabled||0===this._tags.length}
        .value=${this.trigger.tag_id}
        @selected=${this._tagChanged}
      >
        ${this._tags.map((e=>_`
            <mwc-list-item .value=${e.id}>
              ${e.name||e.id}
            </mwc-list-item>
          `))}
      </ha-select>
    `:_``}},{kind:"method",key:"_fetchTags",value:async function(){this._tags=(await(async e=>e.callWS({type:"tag/list"}))(this.hass)).sort(((e,t)=>ge(e.name||e.id,t.name||t.id)))}},{kind:"method",key:"_tagChanged",value:function(e){e.target.value&&this._tags&&this.trigger.tag_id!==e.target.value&&C(this,"value-changed",{value:{...this.trigger,tag_id:e.target.value}})}},{kind:"get",static:!0,key:"styles",value:function(){return g`
      ha-select {
        display: block;
      }
    `}}]}}),m),p([M("ha-automation-trigger-template")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f({attribute:!1})],key:"trigger",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"disabled",value:()=>!1},{kind:"get",static:!0,key:"defaultConfig",value:function(){return{value_template:""}}},{kind:"method",key:"render",value:function(){const{value_template:e}=this.trigger;return _`
      <p>
        ${this.hass.localize("ui.panel.config.automation.editor.triggers.type.template.value_template")}
        *
      </p>
      <ha-code-editor
        .name=${"value_template"}
        mode="jinja2"
        .hass=${this.hass}
        .value=${e}
        .readOnly=${this.disabled}
        autocomplete-entities
        @value-changed=${this._valueChanged}
        dir="ltr"
      ></ha-code-editor>
    `}},{kind:"method",key:"_valueChanged",value:function(e){ri(this,e)}},{kind:"get",static:!0,key:"styles",value:function(){return g`
      p {
        margin-top: 0;
      }
    `}}]}}),m),p([M("ha-automation-trigger-time")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f({attribute:!1})],key:"trigger",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[y()],key:"_inputMode",value:void 0},{kind:"get",static:!0,key:"defaultConfig",value:function(){return{at:""}}},{kind:"field",key:"_schema",value:()=>Y(((e,t)=>{const i=t?{entity:{domain:"input_datetime"}}:{time:{}};return[{name:"mode",type:"select",required:!0,options:[["value",e("ui.panel.config.automation.editor.triggers.type.time.type_value")],["input",e("ui.panel.config.automation.editor.triggers.type.time.type_input")]]},{name:"at",selector:i}]}))},{kind:"method",key:"willUpdate",value:function(e){e.has("trigger")&&this.trigger&&Array.isArray(this.trigger.at)&&C(this,"ui-mode-not-available",Error(this.hass.localize("ui.errors.config.editor_not_supported")))}},{kind:"method",key:"render",value:function(){var e;const t=this.trigger.at;if(Array.isArray(t))return _``;const i=null!==(e=this._inputMode)&&void 0!==e?e:(null==t?void 0:t.startsWith("input_datetime."))||(null==t?void 0:t.startsWith("sensor.")),a=this._schema(this.hass.localize,i),o={mode:i?"input":"value",...this.trigger};return _`
      <ha-form
        .hass=${this.hass}
        .data=${o}
        .schema=${a}
        .disabled=${this.disabled}
        @value-changed=${this._valueChanged}
        .computeLabel=${this._computeLabelCallback}
      ></ha-form>
    `}},{kind:"method",key:"_valueChanged",value:function(e){e.stopPropagation();const t=e.detail.value;this._inputMode="input"===t.mode,delete t.mode,Object.keys(t).forEach((e=>void 0===t[e]||""===t[e]?delete t[e]:{})),C(this,"value-changed",{value:t})}},{kind:"field",key:"_computeLabelCallback",value(){return e=>this.hass.localize(`ui.panel.config.automation.editor.triggers.type.time.${e.name}`)}}]}}),m);const ni=[{name:"hours",selector:{text:{}}},{name:"minutes",selector:{text:{}}},{name:"seconds",selector:{text:{}}}];p([M("ha-automation-trigger-time_pattern")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f({attribute:!1})],key:"trigger",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"disabled",value:()=>!1},{kind:"get",static:!0,key:"defaultConfig",value:function(){return{}}},{kind:"method",key:"render",value:function(){return _`
      <ha-form
        .hass=${this.hass}
        .schema=${ni}
        .data=${this.trigger}
        .disabled=${this.disabled}
        .computeLabel=${this._computeLabelCallback}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `}},{kind:"method",key:"_valueChanged",value:function(e){e.stopPropagation();const t=e.detail.value;C(this,"value-changed",{value:t})}},{kind:"field",key:"_computeLabelCallback",value(){return e=>this.hass.localize(`ui.panel.config.automation.editor.triggers.type.time_pattern.${e.name}`)}}]}}),m);function si(e){return Dt(e)&&"zone"!==Ue(e)}p([M("ha-automation-trigger-webhook")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f()],key:"trigger",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[y()],key:"_config",value:void 0},{kind:"field",key:"_unsub",value:void 0},{kind:"get",static:!0,key:"defaultConfig",value:function(){return{webhook_id:""}}},{kind:"method",key:"connectedCallback",value:function(){x(w(i.prototype),"connectedCallback",this).call(this);const e={callback:e=>{this._config=e}};C(this,"subscribe-automation-config",e),this._unsub=e.unsub}},{kind:"method",key:"disconnectedCallback",value:function(){x(w(i.prototype),"disconnectedCallback",this).call(this),this._unsub&&this._unsub()}},{kind:"method",key:"_generateWebhookId",value:function(){var e;const t=crypto.getRandomValues(new Uint8Array(18)),i=btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_"),a=((e,t="_")=>{const i="àáäâãåăæąçćčđďèéěėëêęğǵḧìíïîįłḿǹńňñòóöôœøṕŕřßşśšșťțùúüûǘůűūųẃẍÿýźžż·/_,:;",a=`aaaaaaaaacccddeeeeeeegghiiiiilmnnnnooooooprrsssssttuuuuuuuuuwxyyzzz${t}${t}${t}${t}${t}${t}`,o=new RegExp(i.split("").join("|"),"g");return e.toString().toLowerCase().replace(/\s+/g,t).replace(o,(e=>a.charAt(i.indexOf(e)))).replace(/&/g,`${t}and${t}`).replace(/[^\w-]+/g,"").replace(/-/g,t).replace(new RegExp(`(${t})\\1+`,"g"),"$1").replace(new RegExp(`^${t}+`),"").replace(new RegExp(`${t}+$`),"")})((null===(e=this._config)||void 0===e?void 0:e.alias)||"","-");return`${a}-${i}`}},{kind:"method",key:"willUpdate",value:function(e){x(w(i.prototype),"willUpdate",this).call(this,e),e.has("trigger")&&""===this.trigger.webhook_id&&(this.trigger.webhook_id=this._generateWebhookId())}},{kind:"method",key:"render",value:function(){const{webhook_id:e}=this.trigger;return _`
      <ha-textfield
        name="webhook_id"
        .label=${this.hass.localize("ui.panel.config.automation.editor.triggers.type.webhook.webhook_id")}
        .helper=${this.hass.localize("ui.panel.config.automation.editor.triggers.type.webhook.webhook_id_helper")}
        .disabled=${this.disabled}
        iconTrailing
        .value=${e||""}
        @input=${this._valueChanged}
      >
        <ha-icon-button
          @click=${this._copyUrl}
          slot="trailingIcon"
          .label=${this.hass.localize("ui.panel.config.automation.editor.triggers.type.webhook.copy_url")}
          .path=${ce}
        ></ha-icon-button>
      </ha-textfield>
    `}},{kind:"method",key:"_valueChanged",value:function(e){ri(this,e)}},{kind:"method",key:"_copyUrl",value:async function(e){const t=e.target.parentElement,i=this.hass.hassUrl(`/api/webhook/${t.value}`);await(async e=>{if(navigator.clipboard)try{return void await navigator.clipboard.writeText(e)}catch{}const t=document.createElement("textarea");t.value=e,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)})(i),At(this,{message:this.hass.localize("ui.common.copied_clipboard")})}},{kind:"field",static:!0,key:"styles",value:()=>g`
    ha-textfield {
      display: block;
    }

    ha-textfield > ha-icon-button {
      --mdc-icon-button-size: 24px;
      --mdc-icon-size: 18px;
    }
  `}]}}),m);const di=["zone"];p([M("ha-automation-trigger-zone")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f()],key:"trigger",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"disabled",value:()=>!1},{kind:"get",static:!0,key:"defaultConfig",value:function(){return{entity_id:"",zone:"",event:"enter"}}},{kind:"method",key:"render",value:function(){const{entity_id:e,zone:t,event:i}=this.trigger;return _`
      <ha-entity-picker
        .label=${this.hass.localize("ui.panel.config.automation.editor.triggers.type.zone.entity")}
        .value=${e}
        .disabled=${this.disabled}
        @value-changed=${this._entityPicked}
        .hass=${this.hass}
        allow-custom-entity
        .entityFilter=${si}
      ></ha-entity-picker>
      <ha-entity-picker
        .label=${this.hass.localize("ui.panel.config.automation.editor.triggers.type.zone.zone")}
        .value=${t}
        .disabled=${this.disabled}
        @value-changed=${this._zonePicked}
        .hass=${this.hass}
        allow-custom-entity
        .includeDomains=${di}
      ></ha-entity-picker>

      <label>
        ${this.hass.localize("ui.panel.config.automation.editor.triggers.type.zone.event")}
        <ha-formfield
          .disabled=${this.disabled}
          .label=${this.hass.localize("ui.panel.config.automation.editor.triggers.type.zone.enter")}
        >
          <ha-radio
            name="event"
            value="enter"
            .disabled=${this.disabled}
            .checked=${"enter"===i}
            @change=${this._radioGroupPicked}
          ></ha-radio>
        </ha-formfield>
        <ha-formfield
          .disabled=${this.disabled}
          .label=${this.hass.localize("ui.panel.config.automation.editor.triggers.type.zone.leave")}
        >
          <ha-radio
            name="event"
            value="leave"
            .disabled=${this.disabled}
            .checked=${"leave"===i}
            @change=${this._radioGroupPicked}
          ></ha-radio>
        </ha-formfield>
      </label>
    `}},{kind:"method",key:"_entityPicked",value:function(e){e.stopPropagation(),C(this,"value-changed",{value:{...this.trigger,entity_id:e.detail.value}})}},{kind:"method",key:"_zonePicked",value:function(e){e.stopPropagation(),C(this,"value-changed",{value:{...this.trigger,zone:e.detail.value}})}},{kind:"method",key:"_radioGroupPicked",value:function(e){e.stopPropagation(),C(this,"value-changed",{value:{...this.trigger,event:e.target.value}})}},{kind:"field",static:!0,key:"styles",value:()=>g`
    label {
      display: flex;
      align-items: center;
    }
    ha-entity-picker {
      display: block;
      margin-bottom: 24px;
    }
  `}]}}),m);const ri=(e,t)=>{var i,a;t.stopPropagation();const o=null===(i=t.currentTarget)||void 0===i?void 0:i.name;if(!o)return;const n=null===(a=t.target)||void 0===a?void 0:a.value;if((e.trigger[o]||"")===n)return;let s;void 0===n||""===n?(s={...e.trigger},delete s[o]):s={...e.trigger,[o]:n},C(e,"value-changed",{value:s})},li=e=>e.preventDefault();p([M("ha-automation-trigger-row")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f({attribute:!1})],key:"trigger",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"hideMenu",value:()=>!1},{kind:"field",decorators:[f({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[y()],key:"_warnings",value:void 0},{kind:"field",decorators:[y()],key:"_yamlMode",value:()=>!1},{kind:"field",decorators:[y()],key:"_requestShowId",value:()=>!1},{kind:"field",decorators:[y()],key:"_triggered",value:void 0},{kind:"field",decorators:[y()],key:"_triggerColor",value:()=>!1},{kind:"field",decorators:[k("ha-yaml-editor")],key:"_yamlEditor",value:void 0},{kind:"field",key:"_triggerUnsub",value:void 0},{kind:"method",key:"render",value:function(){const e=void 0!==customElements.get(`ha-automation-trigger-${this.trigger.platform}`),t=this._yamlMode||!e,i="id"in this.trigger||this._requestShowId;return _`
      <ha-card outlined>
        ${!1===this.trigger.enabled?_`
              <div class="disabled-bar">
                ${this.hass.localize("ui.panel.config.automation.editor.actions.disabled")}
              </div>
            `:""}

        <ha-expansion-panel leftChevron>
          <h3 slot="header">
            <ha-svg-icon
              class="trigger-icon"
              .path=${Qt[this.trigger.platform]}
            ></ha-svg-icon>
            ${ke(zt(this.trigger,this.hass))}
          </h3>

          <slot name="icons" slot="icons"></slot>
          ${this.hideMenu?"":_`
                <ha-button-menu
                  slot="icons"
                  fixed
                  corner="BOTTOM_START"
                  @action=${this._handleAction}
                  @click=${li}
                >
                  <ha-icon-button
                    slot="trigger"
                    .label=${this.hass.localize("ui.common.menu")}
                    .path=${B}
                  ></ha-icon-button>

                  <mwc-list-item graphic="icon" .disabled=${this.disabled}>
                    ${this.hass.localize("ui.panel.config.automation.editor.triggers.rename")}
                    <ha-svg-icon
                      slot="graphic"
                      .path=${q}
                    ></ha-svg-icon>
                  </mwc-list-item>

                  <mwc-list-item graphic="icon" .disabled=${this.disabled}>
                    ${this.hass.localize("ui.panel.config.automation.editor.triggers.re_order")}
                    <ha-svg-icon slot="graphic" .path=${W}></ha-svg-icon>
                  </mwc-list-item>

                  <mwc-list-item graphic="icon" .disabled=${this.disabled}>
                    ${this.hass.localize("ui.panel.config.automation.editor.triggers.duplicate")}
                    <ha-svg-icon
                      slot="graphic"
                      .path=${R}
                    ></ha-svg-icon>
                  </mwc-list-item>

                  <mwc-list-item graphic="icon" .disabled=${this.disabled}>
                    ${this.hass.localize("ui.panel.config.automation.editor.triggers.edit_id")}
                    <ha-svg-icon
                      slot="graphic"
                      .path=${S}
                    ></ha-svg-icon>
                  </mwc-list-item>

                  <li divider role="separator"></li>

                  <mwc-list-item .disabled=${!e} graphic="icon">
                    ${this.hass.localize("ui.panel.config.automation.editor.edit_ui")}
                    ${t?"":_`<ha-svg-icon
                          class="selected_menu_item"
                          slot="graphic"
                          .path=${K}
                        ></ha-svg-icon>`}
                  </mwc-list-item>

                  <mwc-list-item .disabled=${!e} graphic="icon">
                    ${this.hass.localize("ui.panel.config.automation.editor.edit_yaml")}
                    ${t?_`<ha-svg-icon
                          class="selected_menu_item"
                          slot="graphic"
                          .path=${K}
                        ></ha-svg-icon>`:""}
                  </mwc-list-item>

                  <li divider role="separator"></li>

                  <mwc-list-item graphic="icon" .disabled=${this.disabled}>
                    ${!1===this.trigger.enabled?this.hass.localize("ui.panel.config.automation.editor.actions.enable"):this.hass.localize("ui.panel.config.automation.editor.actions.disable")}
                    <ha-svg-icon
                      slot="graphic"
                      .path=${!1===this.trigger.enabled?V:X}
                    ></ha-svg-icon>
                  </mwc-list-item>
                  <mwc-list-item
                    class="warning"
                    graphic="icon"
                    .disabled=${this.disabled}
                  >
                    ${this.hass.localize("ui.panel.config.automation.editor.actions.delete")}
                    <ha-svg-icon
                      class="warning"
                      slot="graphic"
                      .path=${O}
                    ></ha-svg-icon>
                  </mwc-list-item>
                </ha-button-menu>
              `}
          <div
            class=${$({"card-content":!0,disabled:!1===this.trigger.enabled})}
          >
            ${this._warnings?_`<ha-alert
                  alert-type="warning"
                  .title=${this.hass.localize("ui.errors.config.editor_not_supported")}
                >
                  ${this._warnings.length&&void 0!==this._warnings[0]?_` <ul>
                        ${this._warnings.map((e=>_`<li>${e}</li>`))}
                      </ul>`:""}
                  ${this.hass.localize("ui.errors.config.edit_in_yaml_supported")}
                </ha-alert>`:""}
            ${t?_`
                  ${e?"":_`
                        ${this.hass.localize("ui.panel.config.automation.editor.triggers.unsupported_platform","platform",this.trigger.platform)}
                      `}
                  <ha-yaml-editor
                    .hass=${this.hass}
                    .defaultValue=${this.trigger}
                    .readOnly=${this.disabled}
                    @value-changed=${this._onYamlChange}
                  ></ha-yaml-editor>
                `:_`
                  ${i?_`
                        <ha-textfield
                          .label=${this.hass.localize("ui.panel.config.automation.editor.triggers.id")}
                          .value=${this.trigger.id||""}
                          .disabled=${this.disabled}
                          @change=${this._idChanged}
                        >
                        </ha-textfield>
                      `:""}
                  <div @ui-mode-not-available=${this._handleUiModeNotAvailable}>
                    ${fe(`ha-automation-trigger-${this.trigger.platform}`,{hass:this.hass,trigger:this.trigger,disabled:this.disabled})}
                  </div>
                `}
          </div>
        </ha-expansion-panel>

        <div
          class="triggered ${$({active:void 0!==this._triggered,accent:this._triggerColor})}"
          @click=${this._showTriggeredInfo}
        >
          ${this.hass.localize("ui.panel.config.automation.editor.triggers.triggered")}
        </div>
      </ha-card>
    `}},{kind:"method",key:"updated",value:function(e){x(w(i.prototype),"updated",this).call(this,e),e.has("trigger")&&this._subscribeTrigger()}},{kind:"method",key:"connectedCallback",value:function(){x(w(i.prototype),"connectedCallback",this).call(this),this.hasUpdated&&this.trigger&&this._subscribeTrigger()}},{kind:"method",key:"disconnectedCallback",value:function(){x(w(i.prototype),"disconnectedCallback",this).call(this),this._triggerUnsub&&(this._triggerUnsub.then((e=>e())),this._triggerUnsub=void 0),this._doSubscribeTrigger.cancel()}},{kind:"method",key:"_subscribeTrigger",value:function(){this._triggerUnsub&&(this._triggerUnsub.then((e=>e())),this._triggerUnsub=void 0),this._doSubscribeTrigger()}},{kind:"field",key:"_doSubscribeTrigger",value(){return Te((async()=>{let e;const t=this.trigger;this._triggerUnsub&&(this._triggerUnsub.then((e=>e())),this._triggerUnsub=void 0);if(!(await st(this.hass,{trigger:t})).trigger.valid||this.trigger!==t)return;const i=((e,t,i,a)=>e.connection.subscribeMessage(t,{type:"subscribe_trigger",trigger:i,variables:a}))(this.hass,(t=>{void 0!==e?(clearTimeout(e),this._triggerColor=!this._triggerColor):this._triggerColor=!1,this._triggered=t,e=window.setTimeout((()=>{this._triggered=void 0,e=void 0}),5e3)}),t);i.catch((()=>{this._triggerUnsub===i&&(this._triggerUnsub=void 0)})),this._triggerUnsub=i}),5e3)}},{kind:"method",key:"_handleUiModeNotAvailable",value:function(e){this._warnings=nt(this.hass,e.detail).warnings,this._yamlMode||(this._yamlMode=!0)}},{kind:"method",key:"_handleAction",value:async function(e){switch(e.detail.index){case 0:await this._renameTrigger();break;case 1:C(this,"re-order");break;case 2:C(this,"duplicate");break;case 3:this._requestShowId=!0,this.expand();break;case 4:this._switchUiMode(),this.expand();break;case 5:this._switchYamlMode(),this.expand();break;case 6:this._onDisable();break;case 7:this._onDelete()}}},{kind:"method",key:"_onDelete",value:function(){Me(this,{title:this.hass.localize("ui.panel.config.automation.editor.triggers.delete_confirm_title"),text:this.hass.localize("ui.panel.config.automation.editor.triggers.delete_confirm_text"),dismissText:this.hass.localize("ui.common.cancel"),confirmText:this.hass.localize("ui.common.delete"),destructive:!0,confirm:()=>{C(this,"value-changed",{value:null})}})}},{kind:"method",key:"_onDisable",value:function(){var e;const t=!(null===(e=this.trigger.enabled)||void 0===e||e),i={...this.trigger,enabled:t};var a;(C(this,"value-changed",{value:i}),this._yamlMode)&&(null===(a=this._yamlEditor)||void 0===a||a.setValue(i))}},{kind:"method",key:"_idChanged",value:function(e){var t;const i=e.target.value;if(i===(null!==(t=this.trigger.id)&&void 0!==t?t:""))return;this._requestShowId=!0;const a={...this.trigger};i?a.id=i:delete a.id,C(this,"value-changed",{value:a})}},{kind:"method",key:"_onYamlChange",value:function(e){e.stopPropagation(),e.detail.isValid&&(this._warnings=void 0,C(this,"value-changed",{value:e.detail.value}))}},{kind:"method",key:"_switchUiMode",value:function(){this._warnings=void 0,this._yamlMode=!1}},{kind:"method",key:"_switchYamlMode",value:function(){this._warnings=void 0,this._yamlMode=!0}},{kind:"method",key:"_showTriggeredInfo",value:function(){Oe(this,{text:_`
        <ha-yaml-editor
          readOnly
          .hass=${this.hass}
          .defaultValue=${this._triggered}
        ></ha-yaml-editor>
      `})}},{kind:"method",key:"_renameTrigger",value:async function(){const e=await Ae(this,{title:this.hass.localize("ui.panel.config.automation.editor.triggers.change_alias"),inputLabel:this.hass.localize("ui.panel.config.automation.editor.triggers.alias"),inputType:"string",placeholder:ke(zt(this.trigger,this.hass,!0)),defaultValue:this.trigger.alias,confirmText:this.hass.localize("ui.common.submit")}),t={...this.trigger};var i;(e?t.alias=e:delete t.alias,C(this,"value-changed",{value:t}),this._yamlMode)&&(null===(i=this._yamlEditor)||void 0===i||i.setValue(t))}},{kind:"method",key:"expand",value:function(){this.updateComplete.then((()=>{this.shadowRoot.querySelector("ha-expansion-panel").expanded=!0}))}},{kind:"get",static:!0,key:"styles",value:function(){return[T,g`
        ha-button-menu {
          --mdc-theme-text-primary-on-background: var(--primary-text-color);
        }
        .disabled {
          opacity: 0.5;
          pointer-events: none;
        }
        ha-expansion-panel {
          --expansion-panel-summary-padding: 0 0 0 8px;
          --expansion-panel-content-padding: 0;
        }
        h3 {
          margin: 0;
          font-size: inherit;
          font-weight: inherit;
        }
        .trigger-icon {
          display: none;
        }
        @media (min-width: 870px) {
          .trigger-icon {
            display: inline-block;
            color: var(--secondary-text-color);
            opacity: 0.9;
            margin-right: 8px;
          }
        }
        .card-content {
          padding: 16px;
        }
        .disabled-bar {
          background: var(--divider-color, #e0e0e0);
          text-align: center;
          border-top-right-radius: var(--ha-card-border-radius);
          border-top-left-radius: var(--ha-card-border-radius);
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
          border-top-right-radius: var(--ha-card-border-radius, 12px);
          border-top-left-radius: var(--ha-card-border-radius, 12px);
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
        ha-textfield {
          display: block;
          margin-bottom: 24px;
        }
        .selected_menu_item {
          color: var(--primary-color);
        }
        li[role="separator"] {
          border-bottom-color: var(--divider-color);
        }
      `]}}]}}),m),p([M("ha-automation-trigger")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f()],key:"triggers",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[f({type:Boolean})],key:"nested",value:()=>!1},{kind:"field",decorators:[f({type:Boolean})],key:"reOrderMode",value:()=>!1},{kind:"field",key:"_focusLastTriggerOnChange",value:()=>!1},{kind:"field",key:"_triggerKeys",value:()=>new WeakMap},{kind:"field",key:"_sortable",value:void 0},{kind:"method",key:"render",value:function(){return _`
      ${this.reOrderMode&&!this.nested?_`
              <ha-alert
                alert-type="info"
                .title=${this.hass.localize("ui.panel.config.automation.editor.re_order_mode.title")}
              >
                ${this.hass.localize("ui.panel.config.automation.editor.re_order_mode.description_triggers")}
                <mwc-button slot="action" @click=${this._exitReOrderMode}>
                  ${this.hass.localize("ui.panel.config.automation.editor.re_order_mode.exit")}
                </mwc-button>
              </ha-alert>
            `:null}
      <div class="triggers">
        ${he(this.triggers,(e=>this._getKey(e)),((e,t)=>_`
            <ha-automation-trigger-row
              .index=${t}
              .trigger=${e}
              .hideMenu=${this.reOrderMode}
              @duplicate=${this._duplicateTrigger}
              @value-changed=${this._triggerChanged}
              .hass=${this.hass}
              .disabled=${this.disabled}
              @re-order=${this._enterReOrderMode}
            >
              ${this.reOrderMode?_`
                    <ha-icon-button
                      .index=${t}
                      slot="icons"
                      .label=${this.hass.localize("ui.panel.config.automation.editor.move_up")}
                      .path=${G}
                      @click=${this._moveUp}
                      .disabled=${0===t}
                    ></ha-icon-button>
                    <ha-icon-button
                      .index=${t}
                      slot="icons"
                      .label=${this.hass.localize("ui.panel.config.automation.editor.move_down")}
                      .path=${J}
                      @click=${this._moveDown}
                      .disabled=${t===this.triggers.length-1}
                    ></ha-icon-button>
                    <div class="handle" slot="icons">
                      <ha-svg-icon .path=${H}></ha-svg-icon>
                    </div>
                  `:""}
            </ha-automation-trigger-row>
          `))}
        </div>
        <ha-button-menu @action=${this._addTrigger} .disabled=${this.disabled}>
          <mwc-button
            slot="trigger"
            outlined
            .label=${this.hass.localize("ui.panel.config.automation.editor.triggers.add")}
            .disabled=${this.disabled}
          >
            <ha-svg-icon .path=${A} slot="icon"></ha-svg-icon>
          </mwc-button>
          ${this._processedTypes(this.hass.localize).map((([e,t,i])=>_`
              <mwc-list-item .value=${e} aria-label=${t} graphic="icon">
                ${t}<ha-svg-icon slot="graphic" .path=${i}></ha-svg-icon
              ></mwc-list-item>
            `))}
        </ha-button-menu>
      </div>
    `}},{kind:"method",key:"updated",value:function(e){if(x(w(i.prototype),"updated",this).call(this,e),e.has("reOrderMode")&&(this.reOrderMode?this._createSortable():this._destroySortable()),e.has("triggers")&&this._focusLastTriggerOnChange){this._focusLastTriggerOnChange=!1;const e=this.shadowRoot.querySelector("ha-automation-trigger-row:last-of-type");e.updateComplete.then((()=>{e.expand(),e.scrollIntoView(),e.focus()}))}}},{kind:"method",key:"_enterReOrderMode",value:async function(e){this.nested||(e.stopPropagation(),this.reOrderMode=!0)}},{kind:"method",key:"_exitReOrderMode",value:async function(){this.reOrderMode=!1}},{kind:"method",key:"_createSortable",value:async function(){const e=await Ie();this._sortable=new e(this.shadowRoot.querySelector(".triggers"),{animation:150,fallbackClass:"sortable-fallback",handle:".handle",onChoose:e=>{e.item.placeholder=document.createComment("sort-placeholder"),e.item.after(e.item.placeholder)},onEnd:e=>{e.item.placeholder&&(e.item.placeholder.replaceWith(e.item),delete e.item.placeholder),this._dragged(e)}})}},{kind:"method",key:"_destroySortable",value:function(){var e;null===(e=this._sortable)||void 0===e||e.destroy(),this._sortable=void 0}},{kind:"method",key:"_getKey",value:function(e){return this._triggerKeys.has(e)||this._triggerKeys.set(e,Math.random().toString()),this._triggerKeys.get(e)}},{kind:"method",key:"_addTrigger",value:function(e){const t=e.currentTarget.items[e.detail.index].value,i=customElements.get(`ha-automation-trigger-${t}`),a=this.triggers.concat({platform:t,...i.defaultConfig});this._focusLastTriggerOnChange=!0,C(this,"value-changed",{value:a})}},{kind:"method",key:"_moveUp",value:function(e){const t=e.target.index,i=t-1;this._move(t,i)}},{kind:"method",key:"_moveDown",value:function(e){const t=e.target.index,i=t+1;this._move(t,i)}},{kind:"method",key:"_dragged",value:function(e){e.oldIndex!==e.newIndex&&this._move(e.oldIndex,e.newIndex)}},{kind:"method",key:"_move",value:function(e,t){const i=this.triggers.concat(),a=i.splice(e,1)[0];i.splice(t,0,a),C(this,"value-changed",{value:i})}},{kind:"method",key:"_triggerChanged",value:function(e){e.stopPropagation();const t=[...this.triggers],i=e.detail.value,a=e.target.index;if(null===i)t.splice(a,1);else{const e=this._getKey(t[a]);this._triggerKeys.set(i,e),t[a]=i}C(this,"value-changed",{value:t})}},{kind:"method",key:"_duplicateTrigger",value:function(e){e.stopPropagation();const t=e.target.index;C(this,"value-changed",{value:this.triggers.concat(ue(this.triggers[t]))})}},{kind:"field",key:"_processedTypes",value:()=>Y((e=>Object.entries(Qt).map((([t,i])=>[t,e(`ui.panel.config.automation.editor.triggers.type.${t}.label`),i])).sort(((e,t)=>ve(e[1],t[1])))))},{kind:"get",static:!0,key:"styles",value:function(){return[je,g`
        ha-automation-trigger-row {
          display: block;
          margin-bottom: 16px;
          scroll-margin-top: 48px;
        }
        ha-svg-icon {
          height: 20px;
        }
        ha-alert {
          display: block;
          margin-bottom: 16px;
          border-radius: var(--ha-card-border-radius, 16px);
          overflow: hidden;
        }
        .handle {
          cursor: move;
          padding: 12px;
        }
        .handle ha-svg-icon {
          pointer-events: none;
          height: 24px;
        }
      `]}}]}}),m),p([M("ha-automation-action-wait_for_trigger")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f({attribute:!1})],key:"action",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[f({type:Boolean})],key:"reOrderMode",value:()=>!1},{kind:"get",static:!0,key:"defaultConfig",value:function(){return{wait_for_trigger:[]}}},{kind:"method",key:"render",value:function(){var e;const t=It(this.action.timeout);return _`
      <ha-duration-input
        .label=${this.hass.localize("ui.panel.config.automation.editor.actions.type.wait_for_trigger.timeout")}
        .data=${t}
        .disabled=${this.disabled}
        enableMillisecond
        @value-changed=${this._timeoutChanged}
      ></ha-duration-input>
      <ha-formfield
        .disabled=${this.disabled}
        .label=${this.hass.localize("ui.panel.config.automation.editor.actions.type.wait_for_trigger.continue_timeout")}
      >
        <ha-switch
          .checked=${null===(e=this.action.continue_on_timeout)||void 0===e||e}
          .disabled=${this.disabled}
          @change=${this._continueChanged}
        ></ha-switch>
      </ha-formfield>
      <ha-automation-trigger
        nested
        .triggers=${be(this.action.wait_for_trigger)}
        .hass=${this.hass}
        .disabled=${this.disabled}
        .name=${"wait_for_trigger"}
        .reOrderMode=${this.reOrderMode}
        @value-changed=${this._valueChanged}
      ></ha-automation-trigger>
    `}},{kind:"method",key:"_timeoutChanged",value:function(e){e.stopPropagation();const t=e.detail.value;t&&C(this,"value-changed",{value:{...this.action,timeout:t}})}},{kind:"method",key:"_continueChanged",value:function(e){C(this,"value-changed",{value:{...this.action,continue_on_timeout:e.target.checked}})}},{kind:"method",key:"_valueChanged",value:function(e){hi(this,e)}},{kind:"get",static:!0,key:"styles",value:function(){return g`
      ha-duration-input {
        display: block;
        margin-bottom: 24px;
      }
      ha-automation-trigger {
        display: block;
        margin-top: 24px;
      }
    `}}]}}),m);const ci=[{name:"wait_template",selector:{template:{}}},{name:"timeout",required:!1,selector:{text:{}}},{name:"continue_on_timeout",selector:{boolean:{}}}];p([M("ha-automation-action-wait_template")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f({attribute:!1})],key:"action",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"disabled",value:()=>!1},{kind:"get",static:!0,key:"defaultConfig",value:function(){return{wait_template:"",continue_on_timeout:!0}}},{kind:"method",key:"render",value:function(){return _`
      <ha-form
        .hass=${this.hass}
        .data=${this.action}
        .schema=${ci}
        .disabled=${this.disabled}
        .computeLabel=${this._computeLabelCallback}
      ></ha-form>
    `}},{kind:"field",key:"_computeLabelCallback",value(){return e=>this.hass.localize(`ui.panel.config.automation.editor.actions.type.wait_template.${"continue_on_timeout"===e.name?"continue_timeout":e.name}`)}}]}}),m);const ui=e=>{if(e)return"service"in e||"scene"in e?ut(e):["and","or","not"].some((t=>t in e))?"condition":Object.keys(Ee).find((t=>t in e))},hi=(e,t)=>{var i,a;t.stopPropagation();const o=null===(i=t.target)||void 0===i?void 0:i.name;if(!o)return;const n=(null===(a=t.detail)||void 0===a?void 0:a.value)||t.target.value;if((e.action[o]||"")===n)return;let s;n?s={...e.action,[o]:n}:(s={...e.action},delete s[o]),C(e,"value-changed",{value:s})},vi=e=>e.preventDefault();p([M("ha-automation-action-row")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f()],key:"action",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"narrow",value:()=>!1},{kind:"field",decorators:[f({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[f({type:Boolean})],key:"hideMenu",value:()=>!1},{kind:"field",decorators:[f({type:Boolean})],key:"reOrderMode",value:()=>!1},{kind:"field",decorators:[y()],key:"_warnings",value:void 0},{kind:"field",decorators:[y()],key:"_uiModeAvailable",value:()=>!0},{kind:"field",decorators:[y()],key:"_yamlMode",value:()=>!1},{kind:"field",decorators:[k("ha-yaml-editor")],key:"_yamlEditor",value:void 0},{kind:"method",key:"willUpdate",value:function(e){e.has("action")&&(this._uiModeAvailable=void 0!==ui(this.action),this._uiModeAvailable||this._yamlMode||(this._yamlMode=!0))}},{kind:"method",key:"updated",value:function(e){if(e.has("action")&&this._yamlMode){const e=this._yamlEditor;e&&e.value!==this.action&&e.setValue(this.action)}}},{kind:"method",key:"render",value:function(){const e=ui(this.action),t=this._yamlMode;return _`
      <ha-card outlined>
        ${!1===this.action.enabled?_`<div class="disabled-bar">
              ${this.hass.localize("ui.panel.config.automation.editor.actions.disabled")}
            </div>`:""}
        <ha-expansion-panel leftChevron>
          <h3 slot="header">
            <ha-svg-icon
              class="action-icon"
              .path=${Ee[e]}
            ></ha-svg-icon>
            ${ke(Ot(this.hass,this.action))}
          </h3>

          <slot name="icons" slot="icons"></slot>
          ${this.hideMenu?"":_`
                <ha-button-menu
                  slot="icons"
                  fixed
                  corner="BOTTOM_START"
                  @action=${this._handleAction}
                  @click=${vi}
                >
                  <ha-icon-button
                    slot="trigger"
                    .label=${this.hass.localize("ui.common.menu")}
                    .path=${B}
                  ></ha-icon-button>
                  <mwc-list-item graphic="icon">
                    ${this.hass.localize("ui.panel.config.automation.editor.actions.run")}
                    <ha-svg-icon slot="graphic" .path=${a}></ha-svg-icon>
                  </mwc-list-item>

                  <mwc-list-item graphic="icon" .disabled=${this.disabled}>
                    ${this.hass.localize("ui.panel.config.automation.editor.actions.rename")}
                    <ha-svg-icon
                      slot="graphic"
                      .path=${q}
                    ></ha-svg-icon>
                  </mwc-list-item>
                  <mwc-list-item graphic="icon" .disabled=${this.disabled}>
                    ${this.hass.localize("ui.panel.config.automation.editor.actions.re_order")}
                    <ha-svg-icon slot="graphic" .path=${W}></ha-svg-icon>
                  </mwc-list-item>
                  <mwc-list-item graphic="icon" .disabled=${this.disabled}>
                    ${this.hass.localize("ui.panel.config.automation.editor.actions.duplicate")}
                    <ha-svg-icon
                      slot="graphic"
                      .path=${R}
                    ></ha-svg-icon>
                  </mwc-list-item>

                  <li divider role="separator"></li>

                  <mwc-list-item
                    .disabled=${!this._uiModeAvailable}
                    graphic="icon"
                  >
                    ${this.hass.localize("ui.panel.config.automation.editor.edit_ui")}
                    ${t?"":_`<ha-svg-icon
                          class="selected_menu_item"
                          slot="graphic"
                          .path=${K}
                        ></ha-svg-icon>`}
                  </mwc-list-item>

                  <mwc-list-item
                    .disabled=${!this._uiModeAvailable}
                    graphic="icon"
                  >
                    ${this.hass.localize("ui.panel.config.automation.editor.edit_yaml")}
                    ${t?_`<ha-svg-icon
                          class="selected_menu_item"
                          slot="graphic"
                          .path=${K}
                        ></ha-svg-icon>`:""}
                  </mwc-list-item>

                  <li divider role="separator"></li>

                  <mwc-list-item graphic="icon" .disabled=${this.disabled}>
                    ${!1===this.action.enabled?this.hass.localize("ui.panel.config.automation.editor.actions.enable"):this.hass.localize("ui.panel.config.automation.editor.actions.disable")}
                    <ha-svg-icon
                      slot="graphic"
                      .path=${!1===this.action.enabled?V:X}
                    ></ha-svg-icon>
                  </mwc-list-item>
                  <mwc-list-item
                    class="warning"
                    graphic="icon"
                    .disabled=${this.disabled}
                  >
                    ${this.hass.localize("ui.panel.config.automation.editor.actions.delete")}
                    <ha-svg-icon
                      class="warning"
                      slot="graphic"
                      .path=${O}
                    ></ha-svg-icon>
                  </mwc-list-item>
                </ha-button-menu>
              `}

          <div
            class=${$({"card-content":!0,disabled:!1===this.action.enabled})}
          >
            ${this._warnings?_`<ha-alert
                  alert-type="warning"
                  .title=${this.hass.localize("ui.errors.config.editor_not_supported")}
                >
                  ${this._warnings.length>0&&void 0!==this._warnings[0]?_` <ul>
                        ${this._warnings.map((e=>_`<li>${e}</li>`))}
                      </ul>`:""}
                  ${this.hass.localize("ui.errors.config.edit_in_yaml_supported")}
                </ha-alert>`:""}
            ${t?_`
                  ${void 0===e?_`
                        ${this.hass.localize("ui.panel.config.automation.editor.actions.unsupported_action","action",e)}
                      `:""}
                  <ha-yaml-editor
                    .hass=${this.hass}
                    .defaultValue=${this.action}
                    .readOnly=${this.disabled}
                    @value-changed=${this._onYamlChange}
                  ></ha-yaml-editor>
                `:_`
                  <div @ui-mode-not-available=${this._handleUiModeNotAvailable}>
                    ${fe(`ha-automation-action-${e}`,{hass:this.hass,action:this.action,narrow:this.narrow,reOrderMode:this.reOrderMode,disabled:this.disabled})}
                  </div>
                `}
          </div>
        </ha-expansion-panel>
      </ha-card>
    `}},{kind:"method",key:"_handleUiModeNotAvailable",value:function(e){e.stopPropagation(),this._warnings=nt(this.hass,e.detail).warnings,this._yamlMode||(this._yamlMode=!0)}},{kind:"method",key:"_handleAction",value:async function(e){switch(e.detail.index){case 0:this._runAction();break;case 1:await this._renameAction();break;case 2:C(this,"re-order");break;case 3:C(this,"duplicate");break;case 4:this._switchUiMode(),this.expand();break;case 5:this._switchYamlMode(),this.expand();break;case 6:this._onDisable();break;case 7:this._onDelete()}}},{kind:"method",key:"_onDisable",value:function(){var e;const t=!(null===(e=this.action.enabled)||void 0===e||e),i={...this.action,enabled:t};var a;(C(this,"value-changed",{value:i}),this._yamlMode)&&(null===(a=this._yamlEditor)||void 0===a||a.setValue(i))}},{kind:"method",key:"_runAction",value:async function(){const e=await st(this.hass,{action:this.action});if(e.action.valid){try{await(t=this.hass,i=this.action,t.callWS({type:"execute_script",sequence:i}))}catch(e){return void Oe(this,{title:this.hass.localize("ui.panel.config.automation.editor.actions.run_action_error"),text:e.message||e})}var t,i;At(this,{message:this.hass.localize("ui.panel.config.automation.editor.actions.run_action_success")})}else Oe(this,{title:this.hass.localize("ui.panel.config.automation.editor.actions.invalid_action"),text:e.action.error})}},{kind:"method",key:"_onDelete",value:function(){Me(this,{title:this.hass.localize("ui.panel.config.automation.editor.actions.delete_confirm_title"),text:this.hass.localize("ui.panel.config.automation.editor.actions.delete_confirm_text"),dismissText:this.hass.localize("ui.common.cancel"),confirmText:this.hass.localize("ui.common.delete"),destructive:!0,confirm:()=>{C(this,"value-changed",{value:null})}})}},{kind:"method",key:"_onYamlChange",value:function(e){e.stopPropagation(),e.detail.isValid&&C(this,"value-changed",{value:e.detail.value})}},{kind:"method",key:"_switchUiMode",value:function(){this._warnings=void 0,this._yamlMode=!1}},{kind:"method",key:"_switchYamlMode",value:function(){this._warnings=void 0,this._yamlMode=!0}},{kind:"method",key:"_renameAction",value:async function(){const e=await Ae(this,{title:this.hass.localize("ui.panel.config.automation.editor.actions.change_alias"),inputLabel:this.hass.localize("ui.panel.config.automation.editor.actions.alias"),inputType:"string",placeholder:ke(Ot(this.hass,this.action,void 0,!0)),defaultValue:this.action.alias,confirmText:this.hass.localize("ui.common.submit")}),t={...this.action};var i;(e?t.alias=e:delete t.alias,C(this,"value-changed",{value:t}),this._yamlMode)&&(null===(i=this._yamlEditor)||void 0===i||i.setValue(t))}},{kind:"method",key:"expand",value:function(){this.updateComplete.then((()=>{this.shadowRoot.querySelector("ha-expansion-panel").expanded=!0}))}},{kind:"get",static:!0,key:"styles",value:function(){return[T,g`
        ha-button-menu,
        ha-icon-button {
          --mdc-theme-text-primary-on-background: var(--primary-text-color);
        }
        .disabled {
          opacity: 0.5;
          pointer-events: none;
        }
        ha-expansion-panel {
          --expansion-panel-summary-padding: 0 0 0 8px;
          --expansion-panel-content-padding: 0;
        }
        h3 {
          margin: 0;
          font-size: inherit;
          font-weight: inherit;
        }
        .action-icon {
          display: none;
        }
        @media (min-width: 870px) {
          .action-icon {
            display: inline-block;
            color: var(--secondary-text-color);
            opacity: 0.9;
            margin-right: 8px;
          }
        }
        .card-content {
          padding: 16px;
        }
        .disabled-bar {
          background: var(--divider-color, #e0e0e0);
          text-align: center;
          border-top-right-radius: var(--ha-card-border-radius);
          border-top-left-radius: var(--ha-card-border-radius);
        }

        mwc-list-item[disabled] {
          --mdc-theme-text-primary-on-background: var(--disabled-text-color);
        }
        .warning ul {
          margin: 4px 0;
        }
        .selected_menu_item {
          color: var(--primary-color);
        }
        li[role="separator"] {
          border-bottom-color: var(--divider-color);
        }
      `]}}]}}),m),p([M("ha-automation-action")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"narrow",value:()=>!1},{kind:"field",decorators:[f({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[f({type:Boolean})],key:"nested",value:()=>!1},{kind:"field",decorators:[f()],key:"actions",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"reOrderMode",value:()=>!1},{kind:"field",key:"_focusLastActionOnChange",value:()=>!1},{kind:"field",key:"_actionKeys",value:()=>new WeakMap},{kind:"field",key:"_sortable",value:void 0},{kind:"method",key:"render",value:function(){return _`
      ${this.reOrderMode&&!this.nested?_`
            <ha-alert
              alert-type="info"
              .title=${this.hass.localize("ui.panel.config.automation.editor.re_order_mode.title")}
            >
              ${this.hass.localize("ui.panel.config.automation.editor.re_order_mode.description_actions")}
              <mwc-button slot="action" @click=${this._exitReOrderMode}>
                ${this.hass.localize("ui.panel.config.automation.editor.re_order_mode.exit")}
              </mwc-button>
            </ha-alert>
          `:null}
      <div class="actions">
        ${he(this.actions,(e=>this._getKey(e)),((e,t)=>_`
            <ha-automation-action-row
              .index=${t}
              .action=${e}
              .narrow=${this.narrow}
              .disabled=${this.disabled}
              .hideMenu=${this.reOrderMode}
              .reOrderMode=${this.reOrderMode}
              @duplicate=${this._duplicateAction}
              @value-changed=${this._actionChanged}
              @re-order=${this._enterReOrderMode}
              .hass=${this.hass}
            >
              ${this.reOrderMode?_`
                    <ha-icon-button
                      .index=${t}
                      slot="icons"
                      .label=${this.hass.localize("ui.panel.config.automation.editor.move_up")}
                      .path=${G}
                      @click=${this._moveUp}
                      .disabled=${0===t}
                    ></ha-icon-button>
                    <ha-icon-button
                      .index=${t}
                      slot="icons"
                      .label=${this.hass.localize("ui.panel.config.automation.editor.move_down")}
                      .path=${J}
                      @click=${this._moveDown}
                      .disabled=${t===this.actions.length-1}
                    ></ha-icon-button>
                    <div class="handle" slot="icons">
                      <ha-svg-icon .path=${H}></ha-svg-icon>
                    </div>
                  `:""}
            </ha-automation-action-row>
          `))}
      </div>
      <ha-button-menu
        fixed
        @action=${this._addAction}
        .disabled=${this.disabled}
      >
        <mwc-button
          slot="trigger"
          outlined
          .disabled=${this.disabled}
          .label=${this.hass.localize("ui.panel.config.automation.editor.actions.add")}
        >
          <ha-svg-icon .path=${A} slot="icon"></ha-svg-icon>
        </mwc-button>
        ${this._processedTypes(this.hass.localize).map((([e,t,i])=>_`
            <mwc-list-item .value=${e} aria-label=${t} graphic="icon">
              ${t}<ha-svg-icon slot="graphic" .path=${i}></ha-svg-icon
            ></mwc-list-item>
          `))}
      </ha-button-menu>
    `}},{kind:"method",key:"updated",value:function(e){if(x(w(i.prototype),"updated",this).call(this,e),e.has("reOrderMode")&&(this.reOrderMode?this._createSortable():this._destroySortable()),e.has("actions")&&this._focusLastActionOnChange){this._focusLastActionOnChange=!1;const e=this.shadowRoot.querySelector("ha-automation-action-row:last-of-type");e.updateComplete.then((()=>{e.expand(),e.scrollIntoView(),e.focus()}))}}},{kind:"method",key:"_enterReOrderMode",value:async function(e){this.nested||(e.stopPropagation(),this.reOrderMode=!0)}},{kind:"method",key:"_exitReOrderMode",value:async function(){this.reOrderMode=!1}},{kind:"method",key:"_createSortable",value:async function(){const e=await Ie();this._sortable=new e(this.shadowRoot.querySelector(".actions"),{animation:150,fallbackClass:"sortable-fallback",handle:".handle",onChoose:e=>{e.item.placeholder=document.createComment("sort-placeholder"),e.item.after(e.item.placeholder)},onEnd:e=>{e.item.placeholder&&(e.item.placeholder.replaceWith(e.item),delete e.item.placeholder),this._dragged(e)}})}},{kind:"method",key:"_destroySortable",value:function(){var e;null===(e=this._sortable)||void 0===e||e.destroy(),this._sortable=void 0}},{kind:"method",key:"_getKey",value:function(e){return this._actionKeys.has(e)||this._actionKeys.set(e,Math.random().toString()),this._actionKeys.get(e)}},{kind:"method",key:"_addAction",value:function(e){const t=e.currentTarget.items[e.detail.index].value,i=customElements.get(`ha-automation-action-${t}`),a=this.actions.concat({...i.defaultConfig});this._focusLastActionOnChange=!0,C(this,"value-changed",{value:a})}},{kind:"method",key:"_moveUp",value:function(e){const t=e.target.index,i=t-1;this._move(t,i)}},{kind:"method",key:"_moveDown",value:function(e){const t=e.target.index,i=t+1;this._move(t,i)}},{kind:"method",key:"_dragged",value:function(e){e.oldIndex!==e.newIndex&&this._move(e.oldIndex,e.newIndex)}},{kind:"method",key:"_move",value:function(e,t){const i=this.actions.concat(),a=i.splice(e,1)[0];i.splice(t,0,a),C(this,"value-changed",{value:i})}},{kind:"method",key:"_actionChanged",value:function(e){e.stopPropagation();const t=[...this.actions],i=e.detail.value,a=e.target.index;if(null===i)t.splice(a,1);else{const e=this._getKey(t[a]);this._actionKeys.set(i,e),t[a]=i}C(this,"value-changed",{value:t})}},{kind:"method",key:"_duplicateAction",value:function(e){e.stopPropagation();const t=e.target.index;C(this,"value-changed",{value:this.actions.concat(ue(this.actions[t]))})}},{kind:"field",key:"_processedTypes",value:()=>Y((e=>Object.entries(Ee).map((([t,i])=>[t,e(`ui.panel.config.automation.editor.actions.type.${t}.label`),i])).sort(((e,t)=>ve(e[1],t[1])))))},{kind:"get",static:!0,key:"styles",value:function(){return[je,g`
        ha-automation-action-row {
          display: block;
          margin-bottom: 16px;
          scroll-margin-top: 48px;
        }
        ha-svg-icon {
          height: 20px;
        }
        ha-alert {
          display: block;
          margin-bottom: 16px;
          border-radius: var(--ha-card-border-radius, 12px);
          overflow: hidden;
        }
        .handle {
          cursor: move;
          padding: 12px;
        }
        .handle ha-svg-icon {
          pointer-events: none;
          height: 24px;
        }
      `]}}]}}),m);let gi=p([M("ha-selector-action")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[f()],key:"hass",value:void 0},{kind:"field",decorators:[f()],key:"selector",value:void 0},{kind:"field",decorators:[f()],key:"value",value:void 0},{kind:"field",decorators:[f()],key:"label",value:void 0},{kind:"field",decorators:[f({type:Boolean,reflect:!0})],key:"disabled",value:()=>!1},{kind:"method",key:"render",value:function(){return _`
      <ha-automation-action
        .disabled=${this.disabled}
        .actions=${this.value||[]}
        .hass=${this.hass}
      ></ha-automation-action>
    `}},{kind:"get",static:!0,key:"styles",value:function(){return g`
      ha-automation-action {
        display: block;
        margin-bottom: 16px;
      }
      :host([disabled]) ha-automation-action {
        opacity: var(--light-disabled-opacity);
        pointer-events: none;
      }
    `}}]}}),m);export{gi as HaActionSelector};
