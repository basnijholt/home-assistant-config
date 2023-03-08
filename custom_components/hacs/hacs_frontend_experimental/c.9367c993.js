import{bT as e,aQ as a,bU as t,av as s,bs as r,bQ as n,bV as o,bW as c,bX as i,bY as u,bu as d,bZ as l,b_ as h,b$ as m,c0 as f,c1 as p,c2 as g,c3 as v,c4 as b,c5 as _,c6 as y,c7 as w,c8 as k,c9 as x,ca as $,aU as j,cb as I,cc as C,cd as z,aA as O,ce as U,a7 as N,cf as S,cg as q,aZ as F,ch as B,ci as E,cj as A,ck as D,bj as G,cl as M,cm as Q,cn as T,co as Z,cp as H,cq as J,cr as K,cs as L,ct as V,cu as W,cv as X,cw as Y,cx as P,cy as R,cz as ee,cA as ae,cB as te,cC as se,cD as re,cE as ne,cF as oe,cG as ce,cH as ie,cI as ue,cJ as de,cK as le,cL as he,cM as me,cN as fe,d as pe,cO as ge,cP as ve,aD as be,cQ as _e,cR as ye,cS as we,cT as ke,cU as xe,cV as $e,cW as je,bg as Ie,cX as Ce,cY as ze,cZ as Oe,c_ as Ue,c$ as Ne,d0 as Se,d1 as qe,d2 as Fe,d3 as Be,d4 as Ee,d5 as Ae,d6 as De,d7 as Ge,d8 as Me,d9 as Qe,da as Te,db as Ze,dc as He,dd as Je,de as Ke,df as Le,a$ as Ve,dg as We,dh as Xe,di as Ye,dj as Pe,dk as Re,dl as ea,dm as aa,dn as ta,dp as sa,dq as ra,dr as na,ds as oa,dt as ca,du as ia,dv as ua,dw as da,dx as la,dy as ha,dz as ma,dA as fa,dB as pa,dC as ga,dD as va,dE as ba,dF as _a,dG as ya,dH as wa,dI as ka,dJ as xa,dK as $a,dL as ja,dM as Ia,dN as Ca,dO as za,dP as Oa,dQ as Ua,dR as Na,dS as Sa,dT as qa,dU as Fa,dV as Ba,dW as Ea,dX as Aa,dY as Da,dZ as Ga,d_ as Ma,d$ as Qa,e0 as Ta,e1 as Za,e2 as Ha,e3 as Ja,e4 as Ka,e5 as La,e6 as Va,e7 as Wa,e8 as Xa,e9 as Ya,ea as Pa,eb as Ra,ec as et,ed as at,ee as tt,ef as st,eg as rt,eh as nt,ei as ot,ej as ct,ek as it,el as ut,em as dt,bv as lt,en as ht,eo as mt,ep as ft,eq as pt,er as gt,es as vt,et as bt,eu as _t,ev as yt,ew as wt,ex as kt,ey as xt,ez as $t,eA as jt,eB as It,eC as Ct,eD as zt,eE as Ot,eF as Ut,eG as Nt,eH as St,eI as qt,eJ as Ft,eK as Bt,eL as Et,eM as At,eN as Dt,_ as Gt,j as Mt,e as Qt,y as Tt,n as Zt,t as Ht,C as Jt,p as Kt,E as Lt,G as Vt}from"./main-aeda8d41.js";import{c as Wt}from"./c.d2f13ac1.js";import{c as Xt}from"./c.fa0ef026.js";import{U as Yt,i as Pt,O as Rt,u as es}from"./c.704dab74.js";import"./c.2610e8cd.js";const as={cooling:"var(--rgb-state-climate-cool-color)",drying:"var(--rgb-state-climate-dry-color)",fan:"var(--rgb-state-climate-fan-only-color)",heating:"var(--rgb-state-climate-heat-color)",idle:"var(--rgb-state-climate-idle-color)",off:"var(--rgb-state-climate-off-color)"};function ts(e,a){const t=Wt(e.entity_id),s=void 0!==a?a:null==e?void 0:e.state;if(["button","input_button","scene"].includes(t))return s!==Yt;if(Pt(s))return!1;if(s===Rt&&"alert"!==t)return!1;switch(t){case"alarm_control_panel":return"disarmed"!==s;case"alert":return"idle"!==s;case"cover":return"closed"!==s;case"device_tracker":case"person":return"not_home"!==s;case"lock":return"locked"!==s;case"media_player":return"standby"!==s;case"vacuum":return!["idle","docked","paused"].includes(s);case"plant":return"problem"===s;case"group":return["on","home","open","locked","problem"].includes(s);case"timer":return"active"===s;case"camera":return"streaming"===s}return!0}const ss=new Set(["battery","carbon_monoxide","gas","heat","lock","moisture","problem","safety","smoke","tamper"]),rs=(e,a)=>{if("battery"===(null==e?void 0:e.attributes.device_class))return(e=>{const a=Number(e);if(!isNaN(a))return a>=70?"sensor-battery-high":a>=30?"sensor-battery-medium":"sensor-battery-low"})(a)},ns=e,os={alert:a,air_quality:t,automation:s,calendar:r,camera:n,climate:o,configurator:c,conversation:i,counter:u,demo:d,fan:l,google_assistant:h,group:m,homeassistant:d,homekit:f,image_processing:p,input_button:g,input_datetime:v,input_number:b,input_select:_,input_text:y,light:w,mailbox:k,notify:x,number:b,persistent_notification:$,person:j,plant:I,proximity:C,remote:z,scene:O,schedule:v,script:U,select:_,sensor:N,siren:S,simple_alarm:$,sun:q,text:y,timer:F,updater:B,vacuum:E,water_heater:A,weather:D,zone:G},cs={apparent_power:M,aqi:t,atmospheric_pressure:Q,carbon_dioxide:T,carbon_monoxide:Z,current:H,data_rate:J,data_size:K,date:r,distance:L,duration:V,energy:W,frequency:X,gas:Y,humidity:P,illuminance:R,irradiance:ee,moisture:P,monetary:ae,nitrogen_dioxide:te,nitrogen_monoxide:te,nitrous_oxide:te,ozone:te,pm1:te,pm10:te,pm25:te,power:M,power_factor:se,precipitation:re,precipitation_intensity:ne,pressure:oe,reactive_power:M,signal_strength:ce,sound_pressure:ie,speed:ue,sulphur_dioxide:te,temperature:A,timestamp:de,volatile_organic_compounds:te,voltage:X,volume:le,water:he,weight:me,wind_speed:fe},is=new Set(["automation","calendar","camera","cover","fan","group","humidifier","input_boolean","light","media_player","remote","script","siren","switch","timer","vacuum"]),us=(e,a)=>{const t=void 0!==a?a:null==e?void 0:e.state,s=Wt(e.entity_id);if(is.has(s)&&ts(e,a))return s.replace("_","-");switch(s){case"alarm_control_panel":return(e=>{switch(e){case"armed_away":case"armed_vacation":case"armed_home":case"armed_night":case"armed_custom_bypass":return"alarm-armed";case"pending":return"alarm-pending";case"arming":case"disarming":return"alarm-arming";case"triggered":return"alarm-triggered";case"disarmed":return"alarm-disarmed";default:return}})(t);case"alert":return(e=>{switch(e){case"on":return"alert";case"off":return"alert-off";default:return}})(t);case"binary_sensor":return((e,a)=>{const t=null==e?void 0:e.attributes.device_class;if(ts(e,a))return t&&ss.has(t)?"binary-sensor-alerting":"binary-sensor"})(e,t);case"climate":return(e=>{switch(e){case"auto":return"climate-auto";case"cool":return"climate-cool";case"dry":return"climate-dry";case"fan_only":return"climate-fan-only";case"heat":return"climate-heat";case"heat_cool":return"climate-heat-cool";default:return}})(t);case"lock":return(e=>{switch(e){case"unlocked":return"lock-unlocked";case"locked":return"lock-locked";case"jammed":return"lock-jammed";case"locking":case"unlocking":return"lock-pending";default:return}})(t);case"person":case"device_tracker":return(e=>{switch(e){case"home":return"person-home";case"not_home":return"person-not-home";default:return"person-zone"}})(t);case"sensor":return rs(e,t);case"sun":return"above_horizon"===t?"sun-day":"sun-night";case"update":return((e,a)=>{if(ts(e,a))return es(e)?"update-installing":"update"})(e,t)}},ds=pe`
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
`,ls={"clear-night":ve,cloudy:D,exceptional:be,fog:_e,hail:ye,lightning:we,"lightning-rainy":ke,partlycloudy:xe,pouring:ne,rainy:re,snowy:$e,"snowy-rainy":je,sunny:Ie,windy:fe,"windy-variant":Ce};pe`
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
`;const hs={10:Ja,20:Ka,30:La,40:Va,50:Wa,60:Xa,70:Ya,80:Pa,90:Ra,100:wa},ms={10:et,20:at,30:tt,40:st,50:rt,60:nt,70:ot,80:ct,90:it,100:ka},fs=(e,a)=>{const t=Number(e);if(isNaN(t))return"off"===e?wa:"on"===e?Qa:Ta;const s=10*Math.round(t/10);return a&&t>=10?ms[s]:a?Za:t<=5?Ha:hs[s]},ps=e=>{const a=null==e?void 0:e.attributes.device_class;if(a&&a in cs)return cs[a];if("battery"===a)return e?((e,a)=>{const t=e.state,s=a&&"on"===a.state;return fs(t,s)})(e):wa;const t=null==e?void 0:e.attributes.unit_of_measurement;return"°C"===t||"°F"===t?A:void 0},gs=(e,a,t)=>{const s=void 0!==t?t:null==a?void 0:a.state;switch(e){case"alarm_control_panel":return(e=>{switch(e){case"armed_away":return Ee;case"armed_vacation":return Be;case"armed_home":return Fe;case"armed_night":return qe;case"armed_custom_bypass":return Se;case"pending":return Ne;case"triggered":return Ue;case"disarmed":return Oe;default:return ze}})(s);case"binary_sensor":return((e,a)=>{const t="off"===e;switch(null==a?void 0:a.attributes.device_class){case"battery":return t?wa:xa;case"battery_charging":return t?wa:ka;case"carbon_monoxide":return t?_a:ya;case"cold":return t?A:ba;case"connectivity":return t?ga:va;case"door":return t?fa:pa;case"garage_door":return t?ha:ma;case"power":case"plug":return t?Ye:Pe;case"gas":case"problem":case"safety":case"tamper":return t?da:la;case"smoke":return t?ia:ua;case"heat":return t?A:ca;case"light":return t?R:oa;case"lock":return t?ra:na;case"moisture":return t?sa:he;case"motion":return t?aa:ta;case"occupancy":case"presence":return t?We:Xe;case"opening":return t?Re:ea;case"running":return t?Le:Ve;case"sound":return t?Je:Ke;case"update":return t?Ze:He;case"vibration":return t?Qe:Te;case"window":return t?Ge:Me;default:return t?Ae:De}})(s,a);case"button":switch(null==a?void 0:a.attributes.device_class){case"restart":return Dt;case"update":return He;default:return g}case"cover":return((e,a)=>{const t="closed"!==e;switch(null==a?void 0:a.attributes.device_class){case"garage":switch(e){case"opening":return ja;case"closing":return $a;case"closed":return ha;default:return ma}case"gate":switch(e){case"opening":case"closing":return Ma;case"closed":return Ga;default:return Da}case"door":return t?pa:fa;case"damper":return t?Ea:Aa;case"shutter":switch(e){case"opening":return ja;case"closing":return $a;case"closed":return Ba;default:return Fa}case"curtain":switch(e){case"opening":return qa;case"closing":return Sa;case"closed":return Na;default:return Ua}case"blind":switch(e){case"opening":return ja;case"closing":return $a;case"closed":return Oa;default:return za}case"shade":switch(e){case"opening":return ja;case"closing":return $a;case"closed":return Ca;default:return Ia}case"window":switch(e){case"opening":return ja;case"closing":return $a;case"closed":return Ge;default:return Me}}switch(e){case"opening":return ja;case"closing":return $a;case"closed":return Ge;default:return Me}})(s,a);case"device_tracker":return"router"===(null==a?void 0:a.attributes.source_type)?"home"===s?Ft:Bt:["bluetooth","bluetooth_le"].includes(null==a?void 0:a.attributes.source_type)?"home"===s?Et:At:"not_home"===s?ft:j;case"humidifier":return t&&"off"===t?St:qt;case"input_boolean":return"on"===s?Ut:Nt;case"input_datetime":if(null==a||!a.attributes.has_date)return de;if(!a.attributes.has_time)return r;break;case"lock":switch(s){case"unlocked":return na;case"jammed":return Ot;case"locking":case"unlocking":return zt;default:return ra}case"media_player":switch(null==a?void 0:a.attributes.device_class){case"speaker":switch(s){case"playing":return Ct;case"paused":return It;case"off":return jt;default:return $t}case"tv":switch(s){case"playing":return xt;case"paused":return kt;case"off":return wt;default:return yt}case"receiver":return"off"===s?_t:bt;default:switch(s){case"playing":case"paused":return vt;case"off":return gt;default:return pt}}case"person":return"not_home"===s?ft:j;case"switch":switch(null==a?void 0:a.attributes.device_class){case"outlet":return"on"===s?Pe:Ye;case"switch":return"on"===s?ht:mt;default:return ht}case"sensor":{const e=ps(a);if(e)return e;break}case"sun":return"above_horizon"===(null==a?void 0:a.state)?os[e]:ve;case"switch_as_x":return lt;case"threshold":return dt;case"update":return"on"===s?es(a)?ut:He:Ze;case"weather":return((e,a)=>e?a&&"partlycloudy"===e?ge:ls[e]:void 0)(null==a?void 0:a.state)}if(e in os)return os[e]},vs=e=>e?((e,a,t)=>{const s=gs(e,a,t);return s||(console.warn(`Unable to find icon for domain ${e}`),ns)})(Wt(e.entity_id),e):ns;Gt([Zt("ha-state-icon")],(function(e,a){return{F:class extends a{constructor(...a){super(...a),e(this)}},d:[{kind:"field",decorators:[Qt({attribute:!1})],key:"state",value:void 0},{kind:"field",decorators:[Qt()],key:"icon",value:void 0},{kind:"method",key:"render",value:function(){var e,a;return this.icon||null!==(e=this.state)&&void 0!==e&&e.attributes.icon?Tt`<ha-icon
        .icon=${this.icon||(null===(a=this.state)||void 0===a?void 0:a.attributes.icon)}
      ></ha-icon>`:Tt`<ha-svg-icon .path=${vs(this.state)}></ha-svg-icon>`}}]}}),Mt);let bs=Gt(null,(function(e,t){class s extends t{constructor(...a){super(...a),e(this)}}return{F:s,d:[{kind:"field",key:"hass",value:void 0},{kind:"field",decorators:[Qt()],key:"stateObj",value:void 0},{kind:"field",decorators:[Qt()],key:"overrideIcon",value:void 0},{kind:"field",decorators:[Qt()],key:"overrideImage",value:void 0},{kind:"field",decorators:[Qt({type:Boolean})],key:"stateColor",value:void 0},{kind:"field",decorators:[Qt()],key:"color",value:void 0},{kind:"field",decorators:[Qt({type:Boolean,reflect:!0,attribute:"icon"})],key:"_showIcon",value:()=>!0},{kind:"field",decorators:[Ht()],key:"_iconStyle",value:()=>({})},{kind:"get",key:"_stateColor",value:function(){const e=this.stateObj?Xt(this.stateObj):void 0;return this.stateColor||"light"===e&&!1!==this.stateColor}},{kind:"method",key:"render",value:function(){const e=this.stateObj;if(!e&&!this.overrideIcon&&!this.overrideImage)return Tt`<div class="missing">
        <ha-svg-icon .path=${a}></ha-svg-icon>
      </div>`;if(!this._showIcon)return Tt``;const t=e?Xt(e):void 0;return Tt`<ha-state-icon
      style=${Jt(this._iconStyle)}
      data-domain=${Kt(t)}
      data-state=${Kt(null==e?void 0:e.state)}
      .icon=${this.overrideIcon}
      .state=${e}
    ></ha-state-icon>`}},{kind:"method",key:"willUpdate",value:function(e){if(Lt(Vt(s.prototype),"willUpdate",this).call(this,e),!(e.has("stateObj")||e.has("overrideImage")||e.has("overrideIcon")||e.has("stateColor")||e.has("color")))return;const a=this.stateObj,t={},r={backgroundImage:""};if(this._showIcon=!0,a&&void 0===this.overrideImage)if(!a.attributes.entity_picture_local&&!a.attributes.entity_picture||this.overrideIcon){if(this.color)t.color=this.color;else if(this._stateColor&&ts(a)){const e=((e,a)=>{if((void 0!==a?a:null==e?void 0:e.state)===Yt)return"var(--rgb-state-unavailable-color)";const t=us(e,a);return t?`var(--rgb-state-${t}-color)`:ts(e,a)?void 0:"var(--rgb-state-inactive-color)"})(a);if(e&&(t.color=`rgb(${e})`),a.attributes.rgb_color&&(t.color=`rgb(${a.attributes.rgb_color.join(",")})`),a.attributes.brightness){const e=a.attributes.brightness;if("number"!=typeof e){const t=`Type error: state-badge expected number, but type of ${a.entity_id}.attributes.brightness is ${typeof e} (${e})`;console.warn(t)}t.filter=`brightness(${(e+245)/5}%)`}if(a.attributes.hvac_action){const e=a.attributes.hvac_action;["heating","cooling","drying"].includes(e)?t.color=`rgb(${as[e]})`:delete t.color}}}else{let e=a.attributes.entity_picture_local||a.attributes.entity_picture;this.hass&&(e=this.hass.hassUrl(e)),"camera"===Wt(a.entity_id)&&(e=`${e}&width=${80}&height=${80}`),r.backgroundImage=`url(${e})`,this._showIcon=!1}else if(this.overrideImage){let e=this.overrideImage;this.hass&&(e=this.hass.hassUrl(e)),r.backgroundImage=`url(${e})`,this._showIcon=!1}this._iconStyle=t,Object.assign(this.style,r)}},{kind:"get",static:!0,key:"styles",value:function(){return[ds,pe`
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
      `]}}]}}),Mt);customElements.define("state-badge",bs);
