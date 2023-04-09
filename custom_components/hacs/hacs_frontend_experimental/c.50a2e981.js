import{bT as e,aR as a,bU as t,av as s,bs as r,bQ as n,bV as o,bW as c,bX as i,bY as u,bu as d,bZ as l,b_ as h,b$ as m,c0 as f,c1 as p,c2 as g,c3 as b,c4 as v,c5 as _,c6 as y,c7 as w,c8 as k,c9 as x,ca as $,aV as j,cb as I,cc as C,cd as z,aB as O,ce as N,a7 as U,cf as S,cg as q,a_ as B,ch as E,ci as F,cj as G,ck as M,bj as T,cl as V,cm as A,cn as D,co as H,cp as J,cq as K,cr as L,cs as Q,ct as R,cu as W,cv as X,cw as Y,cx as Z,cy as P,cz as ee,cA as ae,cB as te,cC as se,cD as re,cE as ne,cF as oe,cG as ce,cH as ie,cI as ue,cJ as de,cK as le,cL as he,cM as me,cN as fe,d as pe,cO as ge,cP as be,aE as ve,cQ as _e,cR as ye,cS as we,cT as ke,cU as xe,cV as $e,cW as je,bg as Ie,cX as Ce,cY as ze,cZ as Oe,c_ as Ne,c$ as Ue,d0 as Se,d1 as qe,d2 as Be,d3 as Ee,d4 as Fe,d5 as Ge,d6 as Me,d7 as Te,d8 as Ve,d9 as Ae,da as De,db as He,dc as Je,dd as Ke,de as Le,df as Qe,b0 as Re,dg as We,dh as Xe,di as Ye,dj as Ze,dk as Pe,dl as ea,dm as aa,dn as ta,dp as sa,dq as ra,dr as na,ds as oa,dt as ca,du as ia,dv as ua,dw as da,dx as la,dy as ha,dz as ma,dA as fa,dB as pa,dC as ga,dD as ba,dE as va,dF as _a,dG as ya,dH as wa,dI as ka,dJ as xa,dK as $a,dL as ja,dM as Ia,dN as Ca,dO as za,dP as Oa,dQ as Na,dR as Ua,dS as Sa,dT as qa,dU as Ba,dV as Ea,dW as Fa,dX as Ga,dY as Ma,dZ as Ta,d_ as Va,d$ as Aa,e0 as Da,e1 as Ha,e2 as Ja,e3 as Ka,e4 as La,e5 as Qa,e6 as Ra,e7 as Wa,e8 as Xa,e9 as Ya,ea as Za,eb as Pa,ec as et,ed as at,ee as tt,ef as st,eg as rt,eh as nt,ei as ot,ej as ct,ek as it,el as ut,em as dt,bv as lt,en as ht,eo as mt,ep as ft,eq as pt,er as gt,es as bt,et as vt,eu as _t,ev as yt,ew as wt,ex as kt,ey as xt,ez as $t,eA as jt,eB as It,eC as Ct,eD as zt,eE as Ot,eF as Nt,eG as Ut,eH as St,eI as qt,eJ as Bt,eK as Et,eL as Ft,eM as Gt,eN as Mt,_ as Tt,j as Vt,e as At,y as Dt,n as Ht,t as Jt,C as Kt,p as Lt,E as Qt,G as Rt}from"./main-85e087f9.js";import{c as Wt}from"./c.d2f13ac1.js";import{c as Xt}from"./c.fa0ef026.js";import{U as Yt,i as Zt,O as Pt,u as es}from"./c.704dab74.js";import"./c.2610e8cd.js";const as={cooling:"var(--rgb-state-climate-cool-color)",drying:"var(--rgb-state-climate-dry-color)",fan:"var(--rgb-state-climate-fan-only-color)",heating:"var(--rgb-state-climate-heat-color)",idle:"var(--rgb-state-climate-idle-color)",off:"var(--rgb-state-climate-off-color)"};function ts(e,a){const t=Wt(e.entity_id),s=void 0!==a?a:null==e?void 0:e.state;if(["button","input_button","scene"].includes(t))return s!==Yt;if(Zt(s))return!1;if(s===Pt&&"alert"!==t)return!1;switch(t){case"alarm_control_panel":return"disarmed"!==s;case"alert":return"idle"!==s;case"cover":return"closed"!==s;case"device_tracker":case"person":return"not_home"!==s;case"lock":return"locked"!==s;case"media_player":return"standby"!==s;case"vacuum":return!["idle","docked","paused"].includes(s);case"plant":return"problem"===s;case"group":return["on","home","open","locked","problem"].includes(s);case"timer":return"active"===s;case"camera":return"streaming"===s}return!0}const ss=new Set(["battery","carbon_monoxide","gas","heat","lock","moisture","problem","safety","smoke","tamper"]),rs=(e,a)=>{if("battery"===(null==e?void 0:e.attributes.device_class))return(e=>{const a=Number(e);if(!isNaN(a))return a>=70?"sensor-battery-high":a>=30?"sensor-battery-medium":"sensor-battery-low"})(a)},ns=e,os={alert:a,air_quality:t,automation:s,calendar:r,camera:n,climate:o,configurator:c,conversation:i,counter:u,demo:d,fan:l,google_assistant:h,group:m,homeassistant:d,homekit:f,image_processing:p,input_button:g,input_datetime:b,input_number:v,input_select:_,input_text:y,light:w,mailbox:k,notify:x,number:v,persistent_notification:$,person:j,plant:I,proximity:C,remote:z,scene:O,schedule:b,script:N,select:_,sensor:U,siren:S,simple_alarm:$,sun:q,text:y,timer:B,updater:E,vacuum:F,water_heater:G,weather:M,zone:T},cs={apparent_power:V,aqi:t,atmospheric_pressure:A,carbon_dioxide:D,carbon_monoxide:H,current:J,data_rate:K,data_size:L,date:r,distance:Q,duration:R,energy:W,frequency:X,gas:Y,humidity:Z,illuminance:P,irradiance:ee,moisture:Z,monetary:ae,nitrogen_dioxide:te,nitrogen_monoxide:te,nitrous_oxide:te,ozone:te,pm1:te,pm10:te,pm25:te,power:V,power_factor:se,precipitation:re,precipitation_intensity:ne,pressure:oe,reactive_power:V,signal_strength:ce,sound_pressure:ie,speed:ue,sulphur_dioxide:te,temperature:G,timestamp:de,volatile_organic_compounds:te,voltage:X,volume:le,water:he,weight:me,wind_speed:fe},is=new Set(["automation","calendar","camera","cover","fan","group","humidifier","input_boolean","light","media_player","remote","script","siren","switch","timer","vacuum"]),us=(e,a)=>{const t=void 0!==a?a:null==e?void 0:e.state,s=Wt(e.entity_id);if(is.has(s)&&ts(e,a))return s.replace("_","-");switch(s){case"alarm_control_panel":return(e=>{switch(e){case"armed_away":case"armed_vacation":case"armed_home":case"armed_night":case"armed_custom_bypass":return"alarm-armed";case"pending":return"alarm-pending";case"arming":case"disarming":return"alarm-arming";case"triggered":return"alarm-triggered";case"disarmed":return"alarm-disarmed";default:return}})(t);case"alert":return(e=>{switch(e){case"on":return"alert";case"off":return"alert-off";default:return}})(t);case"binary_sensor":return((e,a)=>{const t=null==e?void 0:e.attributes.device_class;if(ts(e,a))return t&&ss.has(t)?"binary-sensor-alerting":"binary-sensor"})(e,t);case"climate":return(e=>{switch(e){case"auto":return"climate-auto";case"cool":return"climate-cool";case"dry":return"climate-dry";case"fan_only":return"climate-fan-only";case"heat":return"climate-heat";case"heat_cool":return"climate-heat-cool";default:return}})(t);case"lock":return(e=>{switch(e){case"unlocked":return"lock-unlocked";case"locked":return"lock-locked";case"jammed":return"lock-jammed";case"locking":case"unlocking":return"lock-pending";default:return}})(t);case"person":case"device_tracker":return(e=>{switch(e){case"home":return"person-home";case"not_home":return"person-not-home";default:return"person-zone"}})(t);case"sensor":return rs(e,t);case"sun":return"above_horizon"===t?"sun-day":"sun-night";case"update":return((e,a)=>{if(ts(e,a))return es(e)?"update-installing":"update"})(e,t)}},ds=pe`
  ha-state-icon[data-domain="alarm_control_panel"][data-state="pending"],
  ha-state-icon[data-domain="alarm_control_panel"][data-state="arming"],
  ha-state-icon[data-domain="alarm_control_panel"][data-state="triggered"],
  ha-state-icon[data-domain="lock"][data-state="jammed"] {
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

  /* Color the icon if unavailable */
  ha-state-icon[data-state="unavailable"] {
    color: rgb(var(--rgb-state-unavailable-color));
  }
`,ls={"clear-night":be,cloudy:M,exceptional:ve,fog:_e,hail:ye,lightning:we,"lightning-rainy":ke,partlycloudy:xe,pouring:ne,rainy:re,snowy:$e,"snowy-rainy":je,sunny:Ie,windy:fe,"windy-variant":Ce};pe`
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
  .snow {
    fill: var(--weather-icon-snow-color, #f9f9f9);
    stroke: var(--weather-icon-snow-stroke-color, #d4d4d4);
    stroke-width: 1;
    paint-order: stroke;
  }
`;const hs={10:Ka,20:La,30:Qa,40:Ra,50:Wa,60:Xa,70:Ya,80:Za,90:Pa,100:wa},ms={10:et,20:at,30:tt,40:st,50:rt,60:nt,70:ot,80:ct,90:it,100:ka},fs=(e,a)=>{const t=Number(e);if(isNaN(t))return"off"===e?wa:"on"===e?Aa:Da;const s=10*Math.round(t/10);return a&&t>=10?ms[s]:a?Ha:t<=5?Ja:hs[s]},ps=e=>{const a=null==e?void 0:e.attributes.device_class;if(a&&a in cs)return cs[a];if("battery"===a)return e?((e,a)=>{const t=e.state,s=a&&"on"===a.state;return fs(t,s)})(e):wa;const t=null==e?void 0:e.attributes.unit_of_measurement;return"°C"===t||"°F"===t?G:void 0},gs=(e,a,t)=>{const s=void 0!==t?t:null==a?void 0:a.state;switch(e){case"alarm_control_panel":return(e=>{switch(e){case"armed_away":return Fe;case"armed_vacation":return Ee;case"armed_home":return Be;case"armed_night":return qe;case"armed_custom_bypass":return Se;case"pending":return Ue;case"triggered":return Ne;case"disarmed":return Oe;default:return ze}})(s);case"binary_sensor":return((e,a)=>{const t="off"===e;switch(null==a?void 0:a.attributes.device_class){case"battery":return t?wa:xa;case"battery_charging":return t?wa:ka;case"carbon_monoxide":return t?_a:ya;case"cold":return t?G:va;case"connectivity":return t?ga:ba;case"door":return t?fa:pa;case"garage_door":return t?ha:ma;case"power":case"plug":return t?Ye:Ze;case"gas":case"problem":case"safety":case"tamper":return t?da:la;case"smoke":return t?ia:ua;case"heat":return t?G:ca;case"light":return t?P:oa;case"lock":return t?ra:na;case"moisture":return t?sa:he;case"motion":return t?aa:ta;case"occupancy":case"presence":return t?We:Xe;case"opening":return t?Pe:ea;case"running":return t?Qe:Re;case"sound":return t?Ke:Le;case"update":return t?He:Je;case"vibration":return t?Ae:De;case"window":return t?Te:Ve;default:return t?Ge:Me}})(s,a);case"button":switch(null==a?void 0:a.attributes.device_class){case"restart":return Mt;case"update":return Je;default:return g}case"cover":return((e,a)=>{const t="closed"!==e;switch(null==a?void 0:a.attributes.device_class){case"garage":switch(e){case"opening":return ja;case"closing":return $a;case"closed":return ha;default:return ma}case"gate":switch(e){case"opening":case"closing":return Va;case"closed":return Ta;default:return Ma}case"door":return t?pa:fa;case"damper":return t?Fa:Ga;case"shutter":switch(e){case"opening":return ja;case"closing":return $a;case"closed":return Ea;default:return Ba}case"curtain":switch(e){case"opening":return qa;case"closing":return Sa;case"closed":return Ua;default:return Na}case"blind":switch(e){case"opening":return ja;case"closing":return $a;case"closed":return Oa;default:return za}case"shade":switch(e){case"opening":return ja;case"closing":return $a;case"closed":return Ca;default:return Ia}case"window":switch(e){case"opening":return ja;case"closing":return $a;case"closed":return Te;default:return Ve}}switch(e){case"opening":return ja;case"closing":return $a;case"closed":return Te;default:return Ve}})(s,a);case"device_tracker":return"router"===(null==a?void 0:a.attributes.source_type)?"home"===s?Bt:Et:["bluetooth","bluetooth_le"].includes(null==a?void 0:a.attributes.source_type)?"home"===s?Ft:Gt:"not_home"===s?ft:j;case"humidifier":return t&&"off"===t?St:qt;case"input_boolean":return"on"===s?Nt:Ut;case"input_datetime":if(null==a||!a.attributes.has_date)return de;if(!a.attributes.has_time)return r;break;case"lock":switch(s){case"unlocked":return na;case"jammed":return Ot;case"locking":case"unlocking":return zt;default:return ra}case"media_player":switch(null==a?void 0:a.attributes.device_class){case"speaker":switch(s){case"playing":return Ct;case"paused":return It;case"off":return jt;default:return $t}case"tv":switch(s){case"playing":return xt;case"paused":return kt;case"off":return wt;default:return yt}case"receiver":return"off"===s?_t:vt;default:switch(s){case"playing":case"paused":return bt;case"off":return gt;default:return pt}}case"person":return"not_home"===s?ft:j;case"switch":switch(null==a?void 0:a.attributes.device_class){case"outlet":return"on"===s?Ze:Ye;case"switch":return"on"===s?ht:mt;default:return ht}case"sensor":{const e=ps(a);if(e)return e;break}case"sun":return"above_horizon"===(null==a?void 0:a.state)?os[e]:be;case"switch_as_x":return lt;case"threshold":return dt;case"update":return"on"===s?es(a)?ut:Je:He;case"weather":return((e,a)=>e?a&&"partlycloudy"===e?ge:ls[e]:void 0)(null==a?void 0:a.state)}if(e in os)return os[e]},bs=e=>e?((e,a,t)=>{const s=gs(e,a,t);return s||(console.warn(`Unable to find icon for domain ${e}`),ns)})(Wt(e.entity_id),e):ns;Tt([Ht("ha-state-icon")],(function(e,a){return{F:class extends a{constructor(...a){super(...a),e(this)}},d:[{kind:"field",decorators:[At({attribute:!1})],key:"state",value:void 0},{kind:"field",decorators:[At()],key:"icon",value:void 0},{kind:"method",key:"render",value:function(){var e,a;return this.icon||null!==(e=this.state)&&void 0!==e&&e.attributes.icon?Dt`<ha-icon
        .icon=${this.icon||(null===(a=this.state)||void 0===a?void 0:a.attributes.icon)}
      ></ha-icon>`:Dt`<ha-svg-icon .path=${bs(this.state)}></ha-svg-icon>`}}]}}),Vt);let vs=Tt(null,(function(e,t){class s extends t{constructor(...a){super(...a),e(this)}}return{F:s,d:[{kind:"field",key:"hass",value:void 0},{kind:"field",decorators:[At()],key:"stateObj",value:void 0},{kind:"field",decorators:[At()],key:"overrideIcon",value:void 0},{kind:"field",decorators:[At()],key:"overrideImage",value:void 0},{kind:"field",decorators:[At({type:Boolean})],key:"stateColor",value:void 0},{kind:"field",decorators:[At()],key:"color",value:void 0},{kind:"field",decorators:[At({type:Boolean,reflect:!0,attribute:"icon"})],key:"_showIcon",value:()=>!0},{kind:"field",decorators:[Jt()],key:"_iconStyle",value:()=>({})},{kind:"get",key:"_stateColor",value:function(){const e=this.stateObj?Xt(this.stateObj):void 0;return this.stateColor||"light"===e&&!1!==this.stateColor}},{kind:"method",key:"render",value:function(){const e=this.stateObj;if(!e&&!this.overrideIcon&&!this.overrideImage)return Dt`<div class="missing">
        <ha-svg-icon .path=${a}></ha-svg-icon>
      </div>`;if(!this._showIcon)return Dt``;const t=e?Xt(e):void 0;return Dt`<ha-state-icon
      style=${Kt(this._iconStyle)}
      data-domain=${Lt(t)}
      data-state=${Lt(null==e?void 0:e.state)}
      .icon=${this.overrideIcon}
      .state=${e}
    ></ha-state-icon>`}},{kind:"method",key:"willUpdate",value:function(e){if(Qt(Rt(s.prototype),"willUpdate",this).call(this,e),!(e.has("stateObj")||e.has("overrideImage")||e.has("overrideIcon")||e.has("stateColor")||e.has("color")))return;const a=this.stateObj,t={},r={backgroundImage:""};if(this._showIcon=!0,a&&void 0===this.overrideImage)if(!a.attributes.entity_picture_local&&!a.attributes.entity_picture||this.overrideIcon){if(this.color)t.color=this.color;else if(this._stateColor&&ts(a)){const e=((e,a)=>{if((void 0!==a?a:null==e?void 0:e.state)===Yt)return"var(--rgb-state-unavailable-color)";const t=us(e,a);return t?`var(--rgb-state-${t}-color)`:ts(e,a)?void 0:"var(--rgb-state-inactive-color)"})(a);if(e&&(t.color=`rgb(${e})`),a.attributes.rgb_color&&(t.color=`rgb(${a.attributes.rgb_color.join(",")})`),a.attributes.brightness){const e=a.attributes.brightness;if("number"!=typeof e){const t=`Type error: state-badge expected number, but type of ${a.entity_id}.attributes.brightness is ${typeof e} (${e})`;console.warn(t)}t.filter=`brightness(${(e+245)/5}%)`}if(a.attributes.hvac_action){const e=a.attributes.hvac_action;["heating","cooling","drying"].includes(e)?t.color=`rgb(${as[e]})`:delete t.color}}}else{let e=a.attributes.entity_picture_local||a.attributes.entity_picture;this.hass&&(e=this.hass.hassUrl(e)),"camera"===Wt(a.entity_id)&&(e=`${e}&width=${80}&height=${80}`),r.backgroundImage=`url(${e})`,this._showIcon=!1}else if(this.overrideImage){let e=this.overrideImage;this.hass&&(e=this.hass.hassUrl(e)),r.backgroundImage=`url(${e})`,this._showIcon=!1}this._iconStyle=t,Object.assign(this.style,r)}},{kind:"get",static:!0,key:"styles",value:function(){return[ds,pe`
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
      `]}}]}}),Vt);customElements.define("state-badge",vs);
