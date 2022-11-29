import{d as a,bO as e,aK as t,bP as s,bQ as r,bn as o,bL as n,bR as i,bS as c,bT as d,bU as l,bp as u,bV as h,bW as m,bX as p,bY as g,bZ as v,b_ as b,b$ as f,c0 as _,c1 as y,c2 as w,c3 as k,c4 as x,c5 as $,c6 as I,aO as j,c7 as C,c8 as U,c9 as z,aX as O,ca as q,a9 as S,cb as B,cc as F,aU as N,cd as E,ce as T,cf as W,cg as X,be as A,ch as G,ci as K,cj as L,ck as M,cl as P,cm as Q,cn as R,co as V,cp as Y,cq as Z,cr as D,cs as H,ct as J,cu as aa,cv as ea,cw as ta,cx as sa,cy as ra,cz as oa,cA as na,cB as ia,cC as ca,cD as da,cE as la,cF as ua,cG as ha,ax as ma,cH as pa,cI as ga,cJ as va,cK as ba,cL as fa,cM as _a,cN as ya,bb as wa,cO as ka,cP as xa,cQ as $a,cR as Ia,cS as ja,cT as Ca,cU as Ua,cV as za,cW as Oa,cX as qa,cY as Sa,cZ as Ba,c_ as Fa,c$ as Na,d0 as Ea,d1 as Ta,d2 as Wa,d3 as Xa,d4 as Aa,d5 as Ga,d6 as Ka,aW as La,d7 as Ma,d8 as Pa,d9 as Qa,da as Ra,db as Va,dc as Ya,dd as Za,de as Da,df as Ha,dg as Ja,dh as ae,di as ee,dj as te,dk as se,dl as re,dm as oe,dn as ne,dp as ie,dq as ce,dr as de,ds as le,dt as ue,du as he,dv as me,dw as pe,dx as ge,dy as ve,dz as be,dA as fe,dB as _e,dC as ye,dD as we,dE as ke,dF as xe,dG as $e,dH as Ie,dI as je,dJ as Ce,dK as Ue,dL as ze,dM as Oe,dN as qe,dO as Se,dP as Be,dQ as Fe,dR as Ne,dS as Ee,dT as Te,dU as We,dV as Xe,dW as Ae,dX as Ge,dY as Ke,dZ as Le,d_ as Me,d$ as Pe,e0 as Qe,e1 as Re,e2 as Ve,e3 as Ye,e4 as Ze,e5 as De,e6 as He,e7 as Je,e8 as at,e9 as et,ea as tt,eb as st,bq as rt,ec as ot,ed as nt,ee as it,ef as ct,eg as dt,eh as lt,ei as ut,ej as ht,ek as mt,el as pt,em as gt,en as vt,eo as bt,ep as ft,eq as _t,er as yt,es as wt,et as kt,eu as xt,ev as $t,ew as It,ex as jt,ey as Ct,ez as Ut,eA as zt,eB as Ot,eC as qt,_ as St,j as Bt,e as Ft,y as Nt,n as Et,t as Tt,C as Wt,p as Xt,E as At,G as Gt}from"./main-c66a9a06.js";import{U as Kt,u as Lt}from"./c.811f664e.js";import{c as Mt}from"./c.d2f13ac1.js";import{c as Pt}from"./c.fa0ef026.js";import"./c.2610e8cd.js";const Qt=a`
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
`,Rt=e,Vt={alert:t,air_quality:s,automation:r,calendar:o,camera:n,climate:i,configurator:c,conversation:d,counter:l,demo:u,fan:h,google_assistant:m,group:p,homeassistant:u,homekit:g,image_processing:v,input_button:b,input_datetime:f,input_number:_,input_select:y,input_text:w,light:k,mailbox:x,notify:$,number:_,persistent_notification:I,person:j,plant:C,proximity:U,remote:z,scene:O,schedule:f,script:q,select:y,sensor:S,siren:B,simple_alarm:I,sun:F,text:w,timer:N,updater:E,vacuum:T,water_heater:W,weather:X,zone:A},Yt={apparent_power:G,aqi:s,carbon_dioxide:K,carbon_monoxide:L,current:M,date:o,distance:P,duration:Q,energy:R,frequency:V,gas:Y,humidity:Z,illuminance:D,moisture:Z,monetary:H,nitrogen_dioxide:J,nitrogen_monoxide:J,nitrous_oxide:J,ozone:J,pm1:J,pm10:J,pm25:J,power:G,power_factor:aa,precipitation:ea,precipitation_intensity:ta,pressure:sa,reactive_power:G,signal_strength:ra,speed:oa,sulphur_dioxide:J,temperature:W,timestamp:na,volatile_organic_compounds:J,voltage:V,volume:ia,water:ca,weight:da,wind_speed:la},Zt={"clear-night":ha,cloudy:X,exceptional:ma,fog:pa,hail:ga,lightning:va,"lightning-rainy":ba,partlycloudy:fa,pouring:ta,rainy:ea,snowy:_a,"snowy-rainy":ya,sunny:wa,windy:la,"windy-variant":ka};a`
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
`;const Dt={10:We,20:Xe,30:Ae,40:Ge,50:Ke,60:Le,70:Me,80:Pe,90:Qe,100:ve},Ht={10:Re,20:Ve,30:Ye,40:Ze,50:De,60:He,70:Je,80:at,90:et,100:be},Jt=(a,e)=>{const t=Number(a);if(isNaN(t))return"off"===a?ve:"on"===a?Fe:Ne;const s=10*Math.round(t/10);return e&&t>=10?Ht[s]:e?Ee:t<=5?Te:Dt[s]},as=a=>{const e=null==a?void 0:a.attributes.device_class;if(e&&e in Yt)return Yt[e];if("battery"===e)return a?((a,e)=>{const t=a.state,s=e&&"on"===e.state;return Jt(t,s)})(a):ve;const t=null==a?void 0:a.attributes.unit_of_measurement;return"°C"===t||"°F"===t?W:void 0},es=(a,e,t)=>{const s=void 0!==t?t:null==e?void 0:e.state;switch(a){case"alarm_control_panel":return(a=>{switch(a){case"armed_away":return qa;case"armed_vacation":return Oa;case"armed_home":return za;case"armed_night":return Ua;case"armed_custom_bypass":return Ca;case"pending":return ja;case"triggered":return Ia;case"disarmed":return $a;default:return xa}})(s);case"binary_sensor":return((a,e)=>{const t="off"===a;switch(null==e?void 0:e.attributes.device_class){case"battery":return t?ve:fe;case"battery_charging":return t?ve:be;case"carbon_monoxide":return t?pe:ge;case"cold":return t?W:me;case"connectivity":return t?ue:he;case"door":return t?de:le;case"garage_door":return t?ie:ce;case"power":case"plug":return t?Qa:Ra;case"gas":case"problem":case"safety":case"tamper":return t?oe:ne;case"smoke":return t?se:re;case"heat":return t?W:te;case"light":return t?D:ee;case"lock":return t?Ja:ae;case"moisture":return t?Ha:ca;case"motion":return t?Za:Da;case"occupancy":case"presence":return t?Ma:Pa;case"opening":return t?Va:Ya;case"running":return t?Ka:La;case"sound":return t?Aa:Ga;case"update":return t?Wa:Xa;case"vibration":return t?Ea:Ta;case"window":return t?Fa:Na;default:return t?Sa:Ba}})(s,e);case"button":switch(null==e?void 0:e.attributes.device_class){case"restart":return qt;case"update":return Xa;default:return b}case"cover":return((a,e)=>{const t="closed"!==a;switch(null==e?void 0:e.attributes.device_class){case"garage":switch(a){case"opening":return ye;case"closing":return _e;case"closed":return ie;default:return ce}case"gate":switch(a){case"opening":case"closing":return Be;case"closed":return Se;default:return qe}case"door":return t?le:de;case"damper":return t?ze:Oe;case"shutter":switch(a){case"opening":return ye;case"closing":return _e;case"closed":return Ue;default:return Ce}case"curtain":switch(a){case"opening":return je;case"closing":return Ie;case"closed":return $e;default:return xe}case"blind":case"shade":switch(a){case"opening":return ye;case"closing":return _e;case"closed":return ke;default:return we}case"window":switch(a){case"opening":return ye;case"closing":return _e;case"closed":return Fa;default:return Na}}switch(a){case"opening":return ye;case"closing":return _e;case"closed":return Fa;default:return Na}})(s,e);case"device_tracker":return"router"===(null==e?void 0:e.attributes.source_type)?"home"===s?jt:Ct:["bluetooth","bluetooth_le"].includes(null==e?void 0:e.attributes.source_type)?"home"===s?Ut:zt:"not_home"===s?Ot:j;case"humidifier":return t&&"off"===t?$t:It;case"input_boolean":return"on"===s?kt:xt;case"input_datetime":if(null==e||!e.attributes.has_date)return na;if(!e.attributes.has_time)return o;break;case"lock":switch(s){case"unlocked":return ae;case"jammed":return wt;case"locking":case"unlocking":return yt;default:return Ja}case"media_player":switch(null==e?void 0:e.attributes.device_class){case"speaker":switch(s){case"playing":return _t;case"paused":return ft;case"off":return bt;default:return vt}case"tv":switch(s){case"playing":return gt;case"paused":return pt;case"off":return mt;default:return ht}case"receiver":return"off"===s?ut:lt;default:switch(s){case"playing":case"paused":return dt;case"off":return ct;default:return it}}case"switch":switch(null==e?void 0:e.attributes.device_class){case"outlet":return"on"===s?Ra:Qa;case"switch":return"on"===s?ot:nt;default:return ot}case"sensor":{const a=as(e);if(a)return a;break}case"sun":return"above_horizon"===(null==e?void 0:e.state)?Vt[a]:ha;case"switch_as_x":return rt;case"threshold":return st;case"update":return"on"===s?Lt(e)?tt:Xa:Wa;case"weather":return((a,e)=>a?e&&"partlycloudy"===a?ua:Zt[a]:void 0)(null==e?void 0:e.state)}if(a in Vt)return Vt[a]},ts=a=>a?((a,e,t)=>es(a,e,t)||(console.warn(`Unable to find icon for domain ${a}`),Rt))(Mt(a.entity_id),a):Rt;St([Et("ha-state-icon")],(function(a,e){return{F:class extends e{constructor(...e){super(...e),a(this)}},d:[{kind:"field",decorators:[Ft({attribute:!1})],key:"state",value:void 0},{kind:"field",decorators:[Ft()],key:"icon",value:void 0},{kind:"method",key:"render",value:function(){var a,e;return this.icon||null!==(a=this.state)&&void 0!==a&&a.attributes.icon?Nt`<ha-icon
        .icon=${this.icon||(null===(e=this.state)||void 0===e?void 0:e.attributes.icon)}
      ></ha-icon>`:Nt`<ha-svg-icon .path=${ts(this.state)}></ha-svg-icon>`}}]}}),Bt);let ss=St(null,(function(e,s){class r extends s{constructor(...a){super(...a),e(this)}}return{F:r,d:[{kind:"field",key:"hass",value:void 0},{kind:"field",decorators:[Ft()],key:"stateObj",value:void 0},{kind:"field",decorators:[Ft()],key:"overrideIcon",value:void 0},{kind:"field",decorators:[Ft()],key:"overrideImage",value:void 0},{kind:"field",decorators:[Ft({type:Boolean})],key:"stateColor",value:void 0},{kind:"field",decorators:[Ft({type:Boolean,reflect:!0,attribute:"icon"})],key:"_showIcon",value:()=>!0},{kind:"field",decorators:[Tt()],key:"_iconStyle",value:()=>({})},{kind:"method",key:"render",value:function(){const a=this.stateObj;if(!a&&!this.overrideIcon&&!this.overrideImage)return Nt`<div class="missing">
        <ha-svg-icon .path=${t}></ha-svg-icon>
      </div>`;if(!this._showIcon)return Nt``;const e=a?Pt(a):void 0;return Nt`<ha-state-icon
      style=${Wt(this._iconStyle)}
      data-domain=${Xt(this.stateColor||"light"===e&&!1!==this.stateColor?e:void 0)}
      data-state=${a?(a=>{if(Kt.includes(a.state))return a.state;const e=a.entity_id.split(".")[0];let t=a.state;return"climate"===e&&(t=a.attributes.hvac_action),t})(a):""}
      .icon=${this.overrideIcon}
      .state=${a}
    ></ha-state-icon>`}},{kind:"method",key:"willUpdate",value:function(a){if(At(Gt(r.prototype),"willUpdate",this).call(this,a),!a.has("stateObj")&&!a.has("overrideImage")&&!a.has("overrideIcon"))return;const e=this.stateObj,t={},s={backgroundImage:""};if(this._showIcon=!0,e&&void 0===this.overrideImage)if(!e.attributes.entity_picture_local&&!e.attributes.entity_picture||this.overrideIcon){if("on"===e.state&&(!1!==this.stateColor&&e.attributes.rgb_color&&(t.color=`rgb(${e.attributes.rgb_color.join(",")})`),e.attributes.brightness&&!1!==this.stateColor)){const a=e.attributes.brightness;if("number"!=typeof a){const t=`Type error: state-badge expected number, but type of ${e.entity_id}.attributes.brightness is ${typeof a} (${a})`;console.warn(t)}t.filter=`brightness(${(a+245)/5}%)`}}else{let a=e.attributes.entity_picture_local||e.attributes.entity_picture;this.hass&&(a=this.hass.hassUrl(a)),"camera"===Mt(e.entity_id)&&(a=`${a}&width=${80}&height=${80}`),s.backgroundImage=`url(${a})`,this._showIcon=!1}else if(this.overrideImage){let a=this.overrideImage;this.hass&&(a=this.hass.hassUrl(a)),s.backgroundImage=`url(${a})`,this._showIcon=!1}this._iconStyle=t,Object.assign(this.style,s)}},{kind:"get",static:!0,key:"styles",value:function(){return[Qt,a`
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
      `]}}]}}),Bt);customElements.define("state-badge",ss);
