import{d as e,bs as a,aI as t,bt as s,bu as i,bk as n,bv as o,bw as r,bx as d,by as c,bz as l,bm as u,bA as h,bB as m,bC as p,bD as v,bE as f,bF as b,bG as y,bH as _,bI as g,bJ as k,bK as w,bL as x,bM as $,bN as C,aM as I,bO as j,bP as B,bQ as z,aV as U,bR as S,a7 as E,bS as O,bT as A,aS as D,bU as F,bV as q,bW as M,bX as N,bc as V,bY as L,bZ as T,b_ as G,b$ as J,c0 as P,c1 as H,c2 as K,c3 as Q,c4 as R,c5 as W,c6 as X,c7 as Y,c8 as Z,c9 as ee,ca as ae,cb as te,cc as se,cd as ie,ce as ne,cf as oe,cg as re,ch as de,N as ce,ci as le,cj as ue,ck as he,cl as me,cm as pe,cn as ve,co as fe,cp as be,b9 as ye,cq as _e,cr as ge,cs as ke,ct as we,cu as xe,cv as $e,cw as Ce,cx as Ie,cy as je,cz as Be,cA as ze,cB as Ue,cC as Se,cD as Ee,cE as Oe,cF as Ae,cG as De,cH as Fe,cI as qe,cJ as Me,cK as Ne,cL as Ve,aU as Le,cM as Te,cN as Ge,cO as Je,cP as Pe,cQ as He,cR as Ke,cS as Qe,cT as Re,cU as We,cV as Xe,cW as Ye,cX as Ze,cY as ea,cZ as aa,c_ as ta,c$ as sa,d0 as ia,d1 as na,d2 as oa,d3 as ra,d4 as da,d5 as ca,d6 as la,d7 as ua,d8 as ha,d9 as ma,da as pa,db as va,dc as fa,dd as ba,de as ya,df as _a,dg as ga,dh as ka,di as wa,dj as xa,dk as $a,dl as Ca,dm as Ia,dn as ja,dp as Ba,dq as za,dr as Ua,ds as Sa,dt as Ea,du as Oa,dv as Aa,dw as Da,dx as Fa,dy as qa,dz as Ma,dA as Na,dB as Va,dC as La,dD as Ta,dE as Ga,dF as Ja,dG as Pa,dH as Ha,dI as Ka,dJ as Qa,dK as Ra,dL as Wa,dM as Xa,dN as Ya,dO as Za,dP as et,dQ as at,dR as tt,bn as st,dS as it,dT as nt,dU as ot,dV as rt,dW as dt,dX as ct,dY as lt,dZ as ut,d_ as ht,d$ as mt,e0 as pt,e1 as vt,e2 as ft,e3 as bt,e4 as yt,e5 as _t,e6 as gt,e7 as kt,e8 as wt,e9 as xt,ea as $t,eb as Ct,ec as It,ed as jt,ee as Bt,_ as zt,j as Ut,e as St,y as Et,n as Ot,t as At,C as Dt,p as Ft,E as qt,G as Mt,i as Nt,a5 as Vt,J as Lt}from"./main-ec7846c8.js";import"./c.eea05cf6.js";import{c as Tt}from"./c.d2f13ac1.js";import{c as Gt}from"./c.6eb9fcd4.js";import{c as Jt}from"./c.874c8cfd.js";import"./c.227858d9.js";import{U as Pt,u as Ht}from"./c.811f664e.js";import{c as Kt}from"./c.fa0ef026.js";import"./c.2610e8cd.js";const Qt=e`
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
`,Rt=a,Wt={alert:t,air_quality:s,automation:i,calendar:n,camera:o,climate:r,configurator:d,conversation:c,counter:l,demo:u,fan:h,google_assistant:m,group:p,homeassistant:u,homekit:v,image_processing:f,input_button:b,input_datetime:y,input_number:_,input_select:g,input_text:k,light:w,mailbox:x,notify:$,number:_,persistent_notification:C,person:I,plant:j,proximity:B,remote:z,scene:U,schedule:y,script:S,select:g,sensor:E,siren:O,simple_alarm:C,sun:A,timer:D,updater:F,vacuum:q,water_heater:M,weather:N,zone:V},Xt={apparent_power:L,aqi:s,carbon_dioxide:T,carbon_monoxide:G,current:J,date:n,distance:P,duration:H,energy:K,frequency:Q,gas:R,humidity:W,illuminance:X,moisture:W,monetary:Y,nitrogen_dioxide:Z,nitrogen_monoxide:Z,nitrous_oxide:Z,ozone:Z,pm1:Z,pm10:Z,pm25:Z,power:L,power_factor:ee,precipitation_intensity:ae,pressure:te,reactive_power:L,signal_strength:se,speed:ie,sulphur_dioxide:Z,temperature:M,timestamp:ne,volatile_organic_compounds:Z,voltage:Q,weight:oe},Yt={"clear-night":de,cloudy:N,exceptional:ce,fog:le,hail:ue,lightning:he,"lightning-rainy":me,partlycloudy:pe,pouring:ae,rainy:ve,snowy:fe,"snowy-rainy":be,sunny:ye,windy:_e,"windy-variant":ge};e`
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
`;const Zt={10:qa,20:Ma,30:Na,40:Va,50:La,60:Ta,70:Ga,80:Ja,90:Pa,100:va},es={10:Ha,20:Ka,30:Qa,40:Ra,50:Wa,60:Xa,70:Ya,80:Za,90:et,100:fa},as=(e,a)=>{const t=Number(e);if(isNaN(t))return"off"===e?va:"on"===e?Oa:Aa;const s=10*Math.round(t/10);return a&&t>=10?es[s]:a?Da:t<=5?Fa:Zt[s]},ts=e=>{const a=null==e?void 0:e.attributes.device_class;if(a&&a in Xt)return Xt[a];if("battery"===a)return e?((e,a)=>{const t=e.state,s=a&&"on"===a.state;return as(t,s)})(e):va;const t=null==e?void 0:e.attributes.unit_of_measurement;return"°C"===t||"°F"===t?M:void 0},ss=(e,a,t)=>{const s=void 0!==t?t:null==a?void 0:a.state;switch(e){case"alarm_control_panel":return(e=>{switch(e){case"armed_away":return ze;case"armed_vacation":return Be;case"armed_home":return je;case"armed_night":return Ie;case"armed_custom_bypass":return Ce;case"pending":return $e;case"triggered":return xe;case"disarmed":return we;default:return ke}})(s);case"binary_sensor":return((e,a)=>{const t="off"===e;switch(null==a?void 0:a.attributes.device_class){case"battery":return t?va:ba;case"battery_charging":return t?va:fa;case"carbon_monoxide":return t?ma:pa;case"cold":return t?M:ha;case"connectivity":return t?la:ua;case"door":return t?da:ca;case"garage_door":return t?oa:ra;case"power":case"plug":return t?Je:Pe;case"gas":case"problem":case"safety":case"tamper":return t?ia:na;case"smoke":return t?ta:sa;case"heat":return t?M:aa;case"light":return t?X:ea;case"lock":return t?Ye:Ze;case"moisture":return t?We:Xe;case"motion":return t?Qe:Re;case"occupancy":case"presence":return t?Te:Ge;case"opening":return t?He:Ke;case"running":return t?Ve:Le;case"sound":return t?Me:Ne;case"update":return t?Fe:qe;case"vibration":return t?Ae:De;case"window":return t?Ee:Oe;default:return t?Ue:Se}})(s,a);case"button":switch(null==a?void 0:a.attributes.device_class){case"restart":return Bt;case"update":return qe;default:return b}case"cover":return((e,a)=>{const t="closed"!==e;switch(null==a?void 0:a.attributes.device_class){case"garage":switch(e){case"opening":return _a;case"closing":return ya;case"closed":return oa;default:return ra}case"gate":switch(e){case"opening":case"closing":return Ea;case"closed":return Sa;default:return Ua}case"door":return t?ca:da;case"damper":return t?Ba:za;case"shutter":switch(e){case"opening":return _a;case"closing":return ya;case"closed":return ja;default:return Ia}case"curtain":switch(e){case"opening":return Ca;case"closing":return $a;case"closed":return xa;default:return wa}case"blind":case"shade":switch(e){case"opening":return _a;case"closing":return ya;case"closed":return ka;default:return ga}case"window":switch(e){case"opening":return _a;case"closing":return ya;case"closed":return Ee;default:return Oe}}switch(e){case"opening":return _a;case"closing":return ya;case"closed":return Ee;default:return Oe}})(s,a);case"device_tracker":return"router"===(null==a?void 0:a.attributes.source_type)?"home"===s?xt:$t:["bluetooth","bluetooth_le"].includes(null==a?void 0:a.attributes.source_type)?"home"===s?Ct:It:"not_home"===s?jt:I;case"humidifier":return t&&"off"===t?kt:wt;case"input_boolean":return"on"===s?_t:gt;case"input_datetime":if(null==a||!a.attributes.has_date)return ne;if(!a.attributes.has_time)return n;break;case"lock":switch(s){case"unlocked":return Ze;case"jammed":return yt;case"locking":case"unlocking":return bt;default:return Ye}case"media_player":switch(null==a?void 0:a.attributes.device_class){case"speaker":switch(s){case"playing":return ft;case"paused":return vt;case"off":return pt;default:return mt}case"tv":switch(s){case"playing":return ht;case"paused":return ut;case"off":return lt;default:return ct}default:switch(s){case"playing":case"paused":return dt;case"off":return rt;default:return ot}}case"switch":switch(null==a?void 0:a.attributes.device_class){case"outlet":return"on"===s?Pe:Je;case"switch":return"on"===s?it:nt;default:return it}case"sensor":{const e=ts(a);if(e)return e;break}case"sun":return"above_horizon"===(null==a?void 0:a.state)?Wt[e]:de;case"switch_as_x":return st;case"threshold":return tt;case"update":return"on"===s?Ht(a)?at:qe:Fe;case"weather":return((e,a)=>e?a&&"partlycloudy"===e?re:Yt[e]:void 0)(null==a?void 0:a.state)}if(e in Wt)return Wt[e]},is=e=>e?((e,a,t)=>ss(e,a,t)||(console.warn(`Unable to find icon for domain ${e}`),Rt))(Tt(e.entity_id),e):Rt;zt([Ot("ha-state-icon")],(function(e,a){return{F:class extends a{constructor(...a){super(...a),e(this)}},d:[{kind:"field",decorators:[St({attribute:!1})],key:"state",value:void 0},{kind:"field",decorators:[St()],key:"icon",value:void 0},{kind:"method",key:"render",value:function(){var e,a;return this.icon||null!==(e=this.state)&&void 0!==e&&e.attributes.icon?Et`<ha-icon
        .icon=${this.icon||(null===(a=this.state)||void 0===a?void 0:a.attributes.icon)}
      ></ha-icon>`:Et`<ha-svg-icon .path=${is(this.state)}></ha-svg-icon>`}}]}}),Ut);let ns=zt(null,(function(a,s){class i extends s{constructor(...e){super(...e),a(this)}}return{F:i,d:[{kind:"field",key:"hass",value:void 0},{kind:"field",decorators:[St()],key:"stateObj",value:void 0},{kind:"field",decorators:[St()],key:"overrideIcon",value:void 0},{kind:"field",decorators:[St()],key:"overrideImage",value:void 0},{kind:"field",decorators:[St({type:Boolean})],key:"stateColor",value:void 0},{kind:"field",decorators:[St({type:Boolean,reflect:!0,attribute:"icon"})],key:"_showIcon",value:()=>!0},{kind:"field",decorators:[At()],key:"_iconStyle",value:()=>({})},{kind:"method",key:"render",value:function(){const e=this.stateObj;if(!e&&!this.overrideIcon&&!this.overrideImage)return Et`<div class="missing">
        <ha-svg-icon .path=${t}></ha-svg-icon>
      </div>`;if(!this._showIcon)return Et``;const a=e?Kt(e):void 0;return Et`<ha-state-icon
      style=${Dt(this._iconStyle)}
      data-domain=${Ft(this.stateColor||"light"===a&&!1!==this.stateColor?a:void 0)}
      data-state=${e?(e=>{if(Pt.includes(e.state))return e.state;const a=e.entity_id.split(".")[0];let t=e.state;return"climate"===a&&(t=e.attributes.hvac_action),t})(e):""}
      .icon=${this.overrideIcon}
      .state=${e}
    ></ha-state-icon>`}},{kind:"method",key:"willUpdate",value:function(e){if(qt(Mt(i.prototype),"willUpdate",this).call(this,e),!e.has("stateObj")&&!e.has("overrideImage")&&!e.has("overrideIcon"))return;const a=this.stateObj,t={},s={backgroundImage:""};if(this._showIcon=!0,a&&void 0===this.overrideImage)if(!a.attributes.entity_picture_local&&!a.attributes.entity_picture||this.overrideIcon){if("on"===a.state&&(!1!==this.stateColor&&a.attributes.rgb_color&&(t.color=`rgb(${a.attributes.rgb_color.join(",")})`),a.attributes.brightness&&!1!==this.stateColor)){const e=a.attributes.brightness;if("number"!=typeof e){const t=`Type error: state-badge expected number, but type of ${a.entity_id}.attributes.brightness is ${typeof e} (${e})`;console.warn(t)}t.filter=`brightness(${(e+245)/5}%)`}}else{let e=a.attributes.entity_picture_local||a.attributes.entity_picture;this.hass&&(e=this.hass.hassUrl(e)),"camera"===Tt(a.entity_id)&&(e=`${e}&width=${80}&height=${80}`),s.backgroundImage=`url(${e})`,this._showIcon=!1}else if(this.overrideImage){let e=this.overrideImage;this.hass&&(e=this.hass.hassUrl(e)),s.backgroundImage=`url(${e})`,this._showIcon=!1}this._iconStyle=t,Object.assign(this.style,s)}},{kind:"get",static:!0,key:"styles",value:function(){return[Qt,e`
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
      `]}}]}}),Ut);customElements.define("state-badge",ns);const os=e=>Et`<mwc-list-item graphic="avatar" .twoline=${!!e.entity_id}>
    ${e.state?Et`<state-badge slot="graphic" .stateObj=${e}></state-badge>`:""}
    <span>${e.friendly_name}</span>
    <span slot="secondary">${e.entity_id}</span>
  </mwc-list-item>`;zt([Ot("ha-entity-picker")],(function(e,a){return{F:class extends a{constructor(...a){super(...a),e(this)}},d:[{kind:"field",decorators:[St({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[St({type:Boolean})],key:"autofocus",value:()=>!1},{kind:"field",decorators:[St({type:Boolean})],key:"disabled",value:void 0},{kind:"field",decorators:[St({type:Boolean})],key:"required",value:void 0},{kind:"field",decorators:[St({type:Boolean,attribute:"allow-custom-entity"})],key:"allowCustomEntity",value:void 0},{kind:"field",decorators:[St()],key:"label",value:void 0},{kind:"field",decorators:[St()],key:"value",value:void 0},{kind:"field",decorators:[St()],key:"helper",value:void 0},{kind:"field",decorators:[St({type:Array,attribute:"include-domains"})],key:"includeDomains",value:void 0},{kind:"field",decorators:[St({type:Array,attribute:"exclude-domains"})],key:"excludeDomains",value:void 0},{kind:"field",decorators:[St({type:Array,attribute:"include-device-classes"})],key:"includeDeviceClasses",value:void 0},{kind:"field",decorators:[St({type:Array,attribute:"include-unit-of-measurement"})],key:"includeUnitOfMeasurement",value:void 0},{kind:"field",decorators:[St({type:Array,attribute:"include-entities"})],key:"includeEntities",value:void 0},{kind:"field",decorators:[St({type:Array,attribute:"exclude-entities"})],key:"excludeEntities",value:void 0},{kind:"field",decorators:[St()],key:"entityFilter",value:void 0},{kind:"field",decorators:[St({type:Boolean})],key:"hideClearIcon",value:()=>!1},{kind:"field",decorators:[At()],key:"_opened",value:()=>!1},{kind:"field",decorators:[Nt("ha-combo-box",!0)],key:"comboBox",value:void 0},{kind:"method",key:"open",value:async function(){var e;await this.updateComplete,await(null===(e=this.comboBox)||void 0===e?void 0:e.open())}},{kind:"method",key:"focus",value:async function(){var e;await this.updateComplete,await(null===(e=this.comboBox)||void 0===e?void 0:e.focus())}},{kind:"field",key:"_initedStates",value:()=>!1},{kind:"field",key:"_states",value:()=>[]},{kind:"field",key:"_getStates",value(){return Vt(((e,a,t,s,i,n,o,r,d)=>{let c=[];if(!a)return[];let l=Object.keys(a.states);return l.length?r?(l=l.filter((e=>this.includeEntities.includes(e))),l.map((e=>({...a.states[e],friendly_name:Gt(a.states[e])||e}))).sort(((e,a)=>Jt(e.friendly_name,a.friendly_name)))):(d&&(l=l.filter((e=>!d.includes(e)))),t&&(l=l.filter((e=>t.includes(Tt(e))))),s&&(l=l.filter((e=>!s.includes(Tt(e))))),c=l.map((e=>({...a.states[e],friendly_name:Gt(a.states[e])||e}))).sort(((e,a)=>Jt(e.friendly_name,a.friendly_name))),n&&(c=c.filter((e=>e.entity_id===this.value||e.attributes.device_class&&n.includes(e.attributes.device_class)))),o&&(c=c.filter((e=>e.entity_id===this.value||e.attributes.unit_of_measurement&&o.includes(e.attributes.unit_of_measurement)))),i&&(c=c.filter((e=>e.entity_id===this.value||i(e)))),c.length?c:[{entity_id:"",state:"",last_changed:"",last_updated:"",context:{id:"",user_id:null,parent_id:null},friendly_name:this.hass.localize("ui.components.entity.entity-picker.no_match"),attributes:{friendly_name:this.hass.localize("ui.components.entity.entity-picker.no_match"),icon:"mdi:magnify"}}]):[{entity_id:"",state:"",last_changed:"",last_updated:"",context:{id:"",user_id:null,parent_id:null},friendly_name:this.hass.localize("ui.components.entity.entity-picker.no_entities"),attributes:{friendly_name:this.hass.localize("ui.components.entity.entity-picker.no_entities"),icon:"mdi:magnify"}}]}))}},{kind:"method",key:"shouldUpdate",value:function(e){return!!(e.has("value")||e.has("label")||e.has("disabled"))||!(!e.has("_opened")&&this._opened)}},{kind:"method",key:"willUpdate",value:function(e){(!this._initedStates||e.has("_opened")&&this._opened)&&(this._states=this._getStates(this._opened,this.hass,this.includeDomains,this.excludeDomains,this.entityFilter,this.includeDeviceClasses,this.includeUnitOfMeasurement,this.includeEntities,this.excludeEntities),this._initedStates&&(this.comboBox.filteredItems=this._states),this._initedStates=!0)}},{kind:"method",key:"render",value:function(){return Et`
      <ha-combo-box
        item-value-path="entity_id"
        item-label-path="friendly_name"
        .hass=${this.hass}
        .value=${this._value}
        .label=${void 0===this.label?this.hass.localize("ui.components.entity.entity-picker.entity"):this.label}
        .helper=${this.helper}
        .allowCustomValue=${this.allowCustomEntity}
        .filteredItems=${this._states}
        .renderer=${os}
        .required=${this.required}
        .disabled=${this.disabled}
        @opened-changed=${this._openedChanged}
        @value-changed=${this._valueChanged}
        @filter-changed=${this._filterChanged}
      >
      </ha-combo-box>
    `}},{kind:"get",key:"_value",value:function(){return this.value||""}},{kind:"method",key:"_openedChanged",value:function(e){this._opened=e.detail.value}},{kind:"method",key:"_valueChanged",value:function(e){e.stopPropagation();const a=e.detail.value;a!==this._value&&this._setValue(a)}},{kind:"method",key:"_filterChanged",value:function(e){const a=e.detail.value.toLowerCase();this.comboBox.filteredItems=this._states.filter((e=>e.entity_id.toLowerCase().includes(a)||Gt(e).toLowerCase().includes(a)))}},{kind:"method",key:"_setValue",value:function(e){this.value=e,setTimeout((()=>{Lt(this,"value-changed",{value:e}),Lt(this,"change")}),0)}}]}}),Ut);
