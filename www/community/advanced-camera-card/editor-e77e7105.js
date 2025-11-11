import{i as e,s as i,_ as t,n,t as a,a as s,x as o,e as r,l,r as c,b as d,c as u,d as m,p as h,f as _,g,h as b,j as p,k as v,C as f,m as $,o as y,q as w,u as S,v as x,w as M,y as I,z as k,A as O,B as C,D as z,E as A,F as T,G as N,H as B,I as E,J as P,K as H,L,M as V,N as K,O as U,S as j,P as q,Q as F,Z as R,R as D,T as G,U as J,V as Q,W,X,Y,$ as Z,a0 as ee,a1 as ie,a2 as te,a3 as ne,a4 as ae,a5 as se,a6 as oe,a7 as re,a8 as le,a9 as ce,aa as de,ab as ue,ac as me,ad as he,ae as _e,af as ge,ag as be,ah as pe,ai as ve,aj as fe,ak as $e,al as ye,am as we,an as Se,ao as xe,ap as Me,aq as Ie,ar as ke,as as Oe,at as Ce,au as ze,av as Ae,aw as Te,ax as Ne,ay as Be,az as Ee,aA as Pe,aB as He,aC as Le,aD as Ve,aE as Ke,aF as Ue,aG as je,aH as qe,aI as Fe,aJ as Re,aK as De,aL as Ge,aM as Je,aN as Qe,aO as We,aP as Xe,aQ as Ye,aR as Ze,aS as ei,aT as ii,aU as ti,aV as ni,aW as ai,aX as si,aY as oi,aZ as ri,a_ as li,a$ as ci,b0 as di,b1 as ui,b2 as mi,b3 as hi,b4 as _i,b5 as gi,b6 as bi,b7 as pi,b8 as vi,b9 as fi,ba as $i,bb as yi,bc as wi,bd as Si,be as xi,bf as Mi,bg as Ii,bh as ki,bi as Oi,bj as Ci,bk as zi,bl as Ai,bm as Ti,bn as Ni,bo as Bi,bp as Ei,bq as Pi,br as Hi,bs as Li,bt as Vi,bu as Ki,bv as Ui,bw as ji,bx as qi,by as Fi,bz as Ri,bA as Di,bB as Gi,bC as Ji,bD as Qi,bE as Wi,bF as Xi,bG as Yi,bH as Zi,bI as et,bJ as it,bK as tt,bL as nt,bM as at,bN as st,bO as ot,bP as rt,bQ as lt,bR as ct,bS as dt,bT as ut,bU as mt,bV as ht,bW as _t,bX as gt,bY as bt,bZ as pt,b_ as vt,b$ as ft,c0 as $t,c1 as yt,c2 as wt,c3 as St,c4 as xt,c5 as Mt,c6 as It,c7 as kt,c8 as Ot,c9 as Ct,ca as zt,cb as At,cc as Tt,cd as Nt,ce as Bt,cf as Et,cg as Pt,ch as Ht,ci as Lt,cj as Vt,ck as Kt,cl as Ut,cm as jt,cn as qt,co as Ft,cp as Rt,cq as Dt,cr as Gt,cs as Jt,ct as Qt,cu as Wt,cv as Xt,cw as Yt,cx as Zt,cy as en,cz as tn,cA as nn,cB as an,cC as sn,cD as on,cE as rn,cF as ln,cG as cn,cH as dn,cI as un,cJ as mn,cK as hn,cL as _n,cM as gn,cN as bn,cO as pn,cP as vn,cQ as fn,cR as $n,cS as yn,cT as wn,cU as Sn,cV as xn,cW as Mn,cX as In,cY as kn,cZ as On,c_ as Cn,c$ as zn,d0 as An,d1 as Tn,d2 as Nn}from"./card-04eb008a.js";class Bn{constructor(e){this._assigning=!1,this._value=null,this._blurEventHandler=()=>{this._setAssigning(!1)},this._keydownEventHandler=e=>{e.key&&!["Control","Alt","Shift","Meta"].includes(e.key)&&(this.setValue({key:e.key,ctrl:e.ctrlKey,alt:e.altKey,shift:e.shiftKey,meta:e.metaKey}),this._setAssigning(!1))},this._host=e,this._host.addController(this)}setValue(i){e(i,this._value)||(this._value=i,this._host.requestUpdate(),this._host.dispatchEvent(new CustomEvent("value-changed",{detail:{value:this._value}})))}getValue(){return this._value}hasValue(){return!!this._value}isAssigning(){return this._assigning}toggleAssigning(){this._setAssigning(!this._assigning)}_setAssigning(e){this._assigning=e,i(this._host,this._assigning,"assigning"),this._assigning?this._host.addEventListener("keydown",this._keydownEventHandler):this._host.removeEventListener("keydown",this._keydownEventHandler),this._host.requestUpdate()}hostConnected(){this._host.addEventListener("blur",this._blurEventHandler)}hostDisconnected(){this._host.removeEventListener("blur",this._blurEventHandler)}}let En=class extends s{constructor(){super(...arguments),this._controller=new Bn(this)}willUpdate(e){e.has("value")&&this._controller.setValue(this.value??null)}render(){if(!this.label)return;const e=e=>o`<div class="key">
        <div class="key-inner">${e}</div>
      </div>`;return o`
      <div class="label">${this.label}</div>
      <ha-button
        class="assign"
        @click=${()=>{this._controller.toggleAssigning()}}
      >
        <advanced-camera-card-icon .icon=${{icon:"mdi:keyboard-settings"}}></advanced-camera-card-icon>
        <span class="${r({dotdotdot:this._controller.isAssigning()})}">
          ${this._controller.isAssigning()?"":l("key_assigner.assign")}
        </span>
      </ha-button>
      ${this._controller.hasValue()?o`<ha-button
              @click=${()=>{this._controller.setValue(null)}}
            >
              <advanced-camera-card-icon
                .icon=${{icon:"mdi:keyboard-off"}}
              ></advanced-camera-card-icon>
              <span> ${l("key_assigner.unassign")} </span>
            </ha-button>`:""}
      <div class="key-row">
        ${this.value?.ctrl?e(l("key_assigner.modifiers.ctrl")):""}
        ${this.value?.shift?e(l("key_assigner.modifiers.shift")):""}
        ${this.value?.meta?e(l("key_assigner.modifiers.meta")):""}
        ${this.value?.alt?e(l("key_assigner.modifiers.alt")):""}
        ${this.value?.key?e(this.value.key):""}
      </div>
      </span>`}static get styles(){return c('.dotdotdot:after {\n  animation: dots 2s linear infinite;\n  content: "";\n  display: inline-block;\n  width: 3em;\n}\n@keyframes dots {\n  0%, 20% {\n    content: ".";\n  }\n  40% {\n    content: "..";\n  }\n  60% {\n    content: "...";\n  }\n  90%, 100% {\n    content: "";\n  }\n}\n\n:host {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  padding: 10px;\n  height: 56px;\n  border: 1px solid var(--divider-color);\n}\n\n:host([assigning]) ha-button.assign span,\n:host([assigning]) ha-button.assign advanced-camera-card-icon {\n  color: var(--warning-color);\n}\n\nadvanced-camera-card-icon {\n  padding: 10px;\n}\n\ndiv.label {\n  width: 100px;\n  margin-left: 4px;\n}\n\ndiv.key-row {\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\ndiv.key {\n  display: flex;\n  align-items: center;\n  height: 90%;\n  width: min-content;\n  margin-left: 5px;\n  margin-right: 5px;\n}\n\ndiv.key-inner {\n  height: 100%;\n  width: 100%;\n  padding-top: 2px;\n  padding-bottom: 2px;\n  padding-left: 4px;\n  padding-right: 4px;\n  border: 2px;\n  border-radius: 4px;\n  border-style: outset;\n  border-color: var(--divider-color);\n  font-family: monospace;\n  text-transform: capitalize;\n}\n\ndiv.unassigned {\n  font-style: italic;\n}\n\ndiv.key + div.key:before {\n  display: flex;\n  align-items: center;\n  margin-right: 5px;\n  content: " + ";\n}')}};t([n({attribute:!1})],En.prototype,"label",void 0),t([n({attribute:!1})],En.prototype,"value",void 0),En=t([a("advanced-camera-card-key-assigner")],En);const Pn=(e,i)=>Object.keys(e.states).filter((e=>!i||e.substring(0,e.indexOf("."))===i)).sort();const Hn="cameras",Ln="folders",Vn="options",Kn={cameras:{icon:"video",name:l("editor.cameras"),secondary:l("editor.cameras_secondary")},view:{icon:"eye",name:l("editor.view"),secondary:l("editor.view_secondary")},menu:{icon:"menu",name:l("editor.menu"),secondary:l("editor.menu_secondary")},status_bar:{icon:"sign-text",name:l("editor.status_bar"),secondary:l("editor.status_bar_secondary")},live:{icon:"cctv",name:l("editor.live"),secondary:l("editor.live_secondary")},folders:{icon:"folder-multiple",name:l("editor.folders"),secondary:l("editor.folders")},media_gallery:{icon:"grid",name:l("editor.media_gallery"),secondary:l("editor.media_gallery_secondary")},media_viewer:{icon:"filmstrip",name:l("editor.media_viewer"),secondary:l("editor.media_viewer_secondary")},image:{icon:"image",name:l("editor.image"),secondary:l("editor.image_secondary")},timeline:{icon:"chart-gantt",name:l("editor.timeline"),secondary:l("editor.timeline_secondary")},dimensions:{icon:"aspect-ratio",name:l("editor.dimensions"),secondary:l("editor.dimensions_secondary")},performance:{icon:"speedometer",name:l("editor.performance"),secondary:l("editor.performance_secondary")},profiles:{icon:"folder-wrench-outline",name:l("editor.profiles"),secondary:l("editor.profiles_secondary")},remote_control:{icon:"remote",name:l("editor.remote_control"),secondary:l("editor.remote_control_secondary")},overrides:{icon:"file-replace",name:l("editor.overrides"),secondary:l("editor.overrides_secondary")}};let Un=class extends s{constructor(){super(...arguments),this._defaults=u(Nn),this._initialized=!1,this._configUpgradeable=!1,this._expandedMenus={},this._viewModes=[{value:"",label:""},{value:"clip",label:l("config.view.views.clip")},{value:"clips",label:l("config.view.views.clips")},{value:"folder",label:l("config.view.views.folder")},{value:"folders",label:l("config.view.views.folders")},{value:"image",label:l("config.view.views.image")},{value:"live",label:l("config.view.views.live")},{value:"recording",label:l("config.view.views.recording")},{value:"recordings",label:l("config.view.views.recordings")},{value:"snapshot",label:l("config.view.views.snapshot")},{value:"snapshots",label:l("config.view.views.snapshots")},{value:"timeline",label:l("config.view.views.timeline")}],this._cameraSelectViewModes=[...this._viewModes,{value:"current",label:l("config.view.views.current")}],this._filterModes=[{value:"",label:""},{value:"none",label:l("config.common.controls.filter.modes.none")},{value:"left",label:l("config.common.controls.filter.modes.left")},{value:"right",label:l("config.common.controls.filter.modes.right")}],this._menuStyles=[{value:"",label:""},{value:"none",label:l("config.menu.styles.none")},{value:"hidden",label:l("config.menu.styles.hidden")},{value:"overlay",label:l("config.menu.styles.overlay")},{value:"hover",label:l("config.menu.styles.hover")},{value:"hover-card",label:l("config.menu.styles.hover-card")},{value:"outside",label:l("config.menu.styles.outside")}],this._menuPositions=[{value:"",label:""},{value:"left",label:l("config.menu.positions.left")},{value:"right",label:l("config.menu.positions.right")},{value:"top",label:l("config.menu.positions.top")},{value:"bottom",label:l("config.menu.positions.bottom")}],this._menuAlignments=[{value:"",label:""},{value:"left",label:l("config.menu.alignments.left")},{value:"right",label:l("config.menu.alignments.right")},{value:"top",label:l("config.menu.alignments.top")},{value:"bottom",label:l("config.menu.alignments.bottom")}],this._nextPreviousControlStyles=[{value:"",label:""},{value:"chevrons",label:l("config.common.controls.next_previous.styles.chevrons")},{value:"icons",label:l("config.common.controls.next_previous.styles.icons")},{value:"none",label:l("config.common.controls.next_previous.styles.none")},{value:"thumbnails",label:l("config.common.controls.next_previous.styles.thumbnails")}],this._aspectRatioModes=[{value:"",label:""},{value:"dynamic",label:l("config.dimensions.aspect_ratio_modes.dynamic")},{value:"static",label:l("config.dimensions.aspect_ratio_modes.static")},{value:"unconstrained",label:l("config.dimensions.aspect_ratio_modes.unconstrained")}],this._thumbnailModes=[{value:"",label:""},{value:"none",label:l("config.common.controls.thumbnails.modes.none")},{value:"above",label:l("config.common.controls.thumbnails.modes.above")},{value:"below",label:l("config.common.controls.thumbnails.modes.below")},{value:"left",label:l("config.common.controls.thumbnails.modes.left")},{value:"right",label:l("config.common.controls.thumbnails.modes.right")}],this._thumbnailMediaTypes=[{value:"",label:""},{value:"events",label:l("config.common.controls.thumbnails.media_types.events")},{value:"recordings",label:l("config.common.controls.thumbnails.media_types.recordings")}],this._thumbnailEventsMediaTypes=[{value:"",label:""},{value:"clips",label:l("config.common.controls.thumbnails.events_media_types.clips")},{value:"snapshots",label:l("config.common.controls.thumbnails.events_media_types.snapshots")}],this._transitionEffects=[{value:"",label:""},{value:"none",label:l("config.media_viewer.transition_effects.none")},{value:"slide",label:l("config.media_viewer.transition_effects.slide")}],this._imageModes=[{value:"",label:""},{value:"camera",label:l("config.common.image.modes.camera")},{value:"entity",label:l("config.common.image.modes.entity")},{value:"screensaver",label:l("config.common.image.modes.screensaver")},{value:"url",label:l("config.common.image.modes.url")}],this._timelineEventsMediaTypes=[{value:"",label:""},{value:"all",label:l("config.common.timeline.events_media_types.all")},{value:"clips",label:l("config.common.timeline.events_media_types.clips")},{value:"snapshots",label:l("config.common.timeline.events_media_types.snapshots")}],this._timelineStyleTypes=[{value:"",label:""},{value:"ribbon",label:l("config.common.timeline.styles.ribbon")},{value:"stack",label:l("config.common.timeline.styles.stack")}],this._mediaActionNegativeConditions=[{value:"",label:""},{value:"unselected",label:l("config.common.media_action_conditions.unselected")},{value:"hidden",label:l("config.common.media_action_conditions.hidden")}],this._mediaActionPositiveConditions=[{value:"",label:""},{value:"selected",label:l("config.common.media_action_conditions.selected")},{value:"visible",label:l("config.common.media_action_conditions.visible")}],this._mediaLiveUnmuteConditions=[...this._mediaActionPositiveConditions,{value:"microphone",label:l("config.common.media_action_conditions.microphone_unmute")}],this._mediaLiveMuteConditions=[...this._mediaActionNegativeConditions,{value:"microphone",label:l("config.common.media_action_conditions.microphone_mute")}],this._layoutFits=[{value:"",label:""},{value:"contain",label:l("config.cameras.dimensions.layout.fits.contain")},{value:"cover",label:l("config.cameras.dimensions.layout.fits.cover")},{value:"fill",label:l("config.cameras.dimensions.layout.fits.fill")}],this._miniTimelineModes=[{value:"",label:""},{value:"none",label:l("config.common.controls.timeline.modes.none")},{value:"above",label:l("config.common.controls.timeline.modes.above")},{value:"below",label:l("config.common.controls.timeline.modes.below")}],this._profiles=[{value:"",label:""},{value:"casting",label:l("config.profiles.casting")},{value:"low-performance",label:l("config.profiles.low-performance")},{value:"scrubbing",label:l("config.profiles.scrubbing")}],this._go2rtcModes=[{value:"",label:""},{value:"mse",label:l("config.cameras.go2rtc.modes.mse")},{value:"webrtc",label:l("config.cameras.go2rtc.modes.webrtc")},{value:"mp4",label:l("config.cameras.go2rtc.modes.mp4")},{value:"mjpeg",label:l("config.cameras.go2rtc.modes.mjpeg")}],this._microphoneButtonTypes=[{value:"",label:""},{value:"momentary",label:l("config.menu.buttons.types.momentary")},{value:"toggle",label:l("config.menu.buttons.types.toggle")}],this._displayModes=[{value:"",label:""},{value:"single",label:l("display_modes.single")},{value:"grid",label:l("display_modes.grid")}],this._gridSelectPositions=[{value:"",label:""},{value:"default",label:l("config.common.display.grid_selected_positions.default")},{value:"first",label:l("config.common.display.grid_selected_positions.first")},{value:"last",label:l("config.common.display.grid_selected_positions.last")}],this._castMethods=[{value:"",label:""},{value:"standard",label:l("config.cameras.cast.methods.standard")},{value:"dashboard",label:l("config.cameras.cast.methods.dashboard")}],this._ptzModes=[{value:"",label:""},{value:"on",label:l("config.live.controls.ptz.modes.on")},{value:"off",label:l("config.live.controls.ptz.modes.off")}],this._ptzOrientations=[{value:"",label:""},{value:"vertical",label:l("config.live.controls.ptz.orientations.vertical")},{value:"horizontal",label:l("config.live.controls.ptz.orientations.horizontal")}],this._ptzPositions=[{value:"",label:""},{value:"top-left",label:l("config.live.controls.ptz.positions.top-left")},{value:"top-right",label:l("config.live.controls.ptz.positions.top-right")},{value:"bottom-left",label:l("config.live.controls.ptz.positions.bottom-left")},{value:"bottom-right",label:l("config.live.controls.ptz.positions.bottom-right")}],this._triggersActionsInteractionModes=[{value:"",label:""},{value:"all",label:l("config.view.triggers.actions.interaction_modes.all")},{value:"inactive",label:l("config.view.triggers.actions.interaction_modes.inactive")},{value:"active",label:l("config.view.triggers.actions.interaction_modes.active")}],this._triggersActionsTrigger=[{value:"",label:""},{value:"default",label:l("config.view.triggers.actions.triggers.default")},{value:"live",label:l("config.view.triggers.actions.triggers.live")},{value:"media",label:l("config.view.triggers.actions.triggers.media")},{value:"none",label:l("config.view.triggers.actions.triggers.none")}],this._triggersActionsUntrigger=[{value:"",label:""},{value:"default",label:l("config.view.triggers.actions.untriggers.default")},{value:"none",label:l("config.view.triggers.actions.untriggers.none")}],this._triggersEvents=[{value:"",label:""},{value:"events",label:l("config.cameras.triggers.events.events")},{value:"clips",label:l("config.cameras.triggers.events.clips")},{value:"snapshots",label:l("config.cameras.triggers.events.snapshots")}],this._timelinePanModes=[{value:"",label:""},{value:"pan",label:l("config.common.controls.timeline.pan_modes.pan")},{value:"seek",label:l("config.common.controls.timeline.pan_modes.seek")},{value:"seek-in-media",label:l("config.common.controls.timeline.pan_modes.seek-in-media")},{value:"seek-in-camera",label:l("config.common.controls.timeline.pan_modes.seek-in-camera")}],this._capabilities=[{value:"",label:""},{value:"live",label:l("config.cameras.capabilities.capabilities.live")},{value:"substream",label:l("config.cameras.capabilities.capabilities.substream")},{value:"clips",label:l("config.cameras.capabilities.capabilities.clips")},{value:"recordings",label:l("config.cameras.capabilities.capabilities.recordings")},{value:"snapshots",label:l("config.cameras.capabilities.capabilities.snapshots")},{value:"favorite-events",label:l("config.cameras.capabilities.capabilities.favorite-events")},{value:"favorite-recordings",label:l("config.cameras.capabilities.capabilities.favorite-recordings")},{value:"seek",label:l("config.cameras.capabilities.capabilities.seek")},{value:"ptz",label:l("config.cameras.capabilities.capabilities.ptz")},{value:"menu",label:l("config.cameras.capabilities.capabilities.menu")}],this._defaultResetInteractionModes=[{value:"",label:""},{value:"all",label:l("config.view.default_reset.interaction_modes.all")},{value:"inactive",label:l("config.view.default_reset.interaction_modes.inactive")},{value:"active",label:l("config.view.default_reset.interaction_modes.active")}],this._proxyModes=[{value:"",label:""},{value:"auto",label:l("config.cameras.proxy.modes.auto")},{value:!0,label:l("config.cameras.proxy.modes.true")},{value:!1,label:l("config.cameras.proxy.modes.false")}],this._proxySSLCiphers=[{value:"",label:""},{value:"auto",label:l("config.cameras.proxy.ssl_ciphers.auto")},{value:"default",label:l("config.cameras.proxy.ssl_ciphers.default")},{value:"insecure",label:l("config.cameras.proxy.ssl_ciphers.insecure")},{value:"intermediate",label:l("config.cameras.proxy.ssl_ciphers.intermediate")},{value:"modern",label:l("config.cameras.proxy.ssl_ciphers.modern")}],this._proxySSLVerification=[{value:"",label:""},{value:"auto",label:l("config.cameras.proxy.ssl_verification.auto")},{value:!0,label:l("config.cameras.proxy.ssl_verification.true")},{value:!1,label:l("config.cameras.proxy.ssl_verification.false")}],this._reolinkMediaResolution=[{value:"",label:""},{value:"high",label:l("config.cameras.reolink.media_resolution.high")},{value:"low",label:l("config.cameras.reolink.media_resolution.low")}],this._statusBarStyles=[{value:"",label:""},{value:"hover",label:l("config.status_bar.styles.hover")},{value:"hover-card",label:l("config.status_bar.styles.hover-card")},{value:"none",label:l("config.status_bar.styles.none")},{value:"outside",label:l("config.status_bar.styles.outside")},{value:"overlay",label:l("config.status_bar.styles.overlay")},{value:"popup",label:l("config.status_bar.styles.popup")}],this._statusBarPositions=[{value:"",label:""},{value:"top",label:l("config.status_bar.positions.top")},{value:"bottom",label:l("config.status_bar.positions.bottom")}],this._themes=[{value:"",label:""},{value:"ha",label:l("config.view.theme.themes.ha")},{value:"dark",label:l("config.view.theme.themes.dark")},{value:"light",label:l("config.view.theme.themes.light")},{value:"traditional",label:l("config.view.theme.themes.traditional")}],this._rotations=[{value:"",label:""},{value:0,label:l("config.cameras.dimensions.rotations.0")},{value:90,label:l("config.cameras.dimensions.rotations.90")},{value:180,label:l("config.cameras.dimensions.rotations.180")},{value:270,label:l("config.cameras.dimensions.rotations.270")}]}setConfig(e){this._config=e,this._configUpgradeable=m(e);const i=h.safeParse(this._config.profiles);if(i.success){const e=u(Nn);_(this._config,e,i.data),this._defaults=e}}willUpdate(){this._initialized||g().then((e=>{e&&(this._initialized=!0)}))}_renderOptionSetHeader(e,i){const t=Kn[e];return o`
      <div
        class="option option-${e}"
        @click=${this._toggleMenu}
        .domain=${"options"}
        .key=${e}
      >
        <div class="row">
          <advanced-camera-card-icon
            .icon=${{icon:`mdi:${t.icon}`}}
          ></advanced-camera-card-icon>
          <div class="title ${i??""}">${t.name}</div>
        </div>
        <div class="secondary">${t.secondary}</div>
      </div>
    `}_getLabel(e){const i=e.split(".").filter((e=>!e.match(/^\[[0-9]+\]$/))).join(".");return l(`config.${i}`)}_renderEntitySelector(e,i){if(this._config)return o`
      <ha-selector
        .hass=${this.hass}
        .selector=${{entity:{domain:i}}}
        .label=${this._getLabel(e)}
        .value=${b(this._config,e,"")}
        .required=${!1}
        @value-changed=${i=>this._valueChangedHandler(e,i)}
      >
      </ha-selector>
    `}_renderOptionSelector(e,i=[],t){if(this._config)return o`
      <ha-selector
        .hass=${this.hass}
        .selector=${{select:{mode:"dropdown",multiple:!!t?.multiple,custom_value:!i.length,options:i}}}
        .label=${t?.label||this._getLabel(e)}
        .value=${b(this._config,e,"")}
        .required=${!1}
        @value-changed=${i=>this._valueChangedHandler(e,i)}
      >
      </ha-selector>
    `}_renderIconSelector(e,i){if(this._config)return o`
      <ha-selector
        .hass=${this.hass}
        .selector=${{icon:{}}}
        .label=${i?.label||this._getLabel(e)}
        .value=${b(this._config,e,"")}
        .required=${!1}
        @value-changed=${i=>this._valueChangedHandler(e,i)}
      >
      </ha-selector>
    `}_renderNumberInput(e,i){if(!this._config)return;const t=b(this._config,e),n=void 0===i?.max?"box":"slider";return o`
      <ha-selector
        .hass=${this.hass}
        .selector=${{number:{min:i?.min||0,max:i?.max,mode:n,step:i?.step}}}
        .label=${i?.label||this._getLabel(e)}
        .value=${t??i?.default}
        .required=${!1}
        @value-changed=${i=>this._valueChangedHandler(e,i)}
      >
      </ha-selector>
    `}_renderInfo(e){return o` <span class="info">${e}</span>`}_getEditorCameraTitle(e,i){return"string"==typeof i?.title&&i.title||("string"==typeof i?.camera_entity?p(this.hass,i.camera_entity):"")||"object"==typeof i?.webrtc_card&&i.webrtc_card&&"string"==typeof i.webrtc_card.entity&&i.webrtc_card.entity||("object"==typeof i?.frigate&&i.frigate&&"string"==typeof i?.frigate.camera_name&&i.frigate.camera_name?v(i.frigate.camera_name):"")||"string"==typeof i?.id&&i.id||l("editor.camera")+" #"+e}_getEditorFolderTitle(e,i){return"string"==typeof i?.title&&i.title||"string"==typeof i?.id&&i.id||l("common.folder")+" #"+e}_renderViewDefaultResetMenu(){return this._putInSubmenu("view.default_reset",!0,`config.${f}.editor_label`,"mdi:restart",o`
        ${this._renderSwitch($,this._defaults.view.default_reset.after_interaction)}
        ${this._renderNumberInput(y)}
        ${this._renderOptionSelector(w,this._defaultResetInteractionModes,{label:l("config.view.default_reset.interaction_mode")})},
        ${this._renderOptionSelector(S,this.hass?Pn(this.hass):[],{multiple:!0})}
      `)}_renderViewTriggersMenu(){return this._putInSubmenu("view.triggers",!0,`config.${x}.editor_label`,"mdi:target-account",o`
        ${this._renderSwitch(M,this._defaults.view.triggers.filter_selected_camera,{label:l(`config.${M}`)})}
        ${this._renderSwitch(I,this._defaults.view.triggers.show_trigger_status,{label:l(`config.${I}`)})}
        ${this._renderNumberInput(k,{default:this._defaults.view.triggers.untrigger_seconds})}
        ${this._putInSubmenu("view.triggers.actions",!0,`config.${O}.editor_label`,"mdi:cogs",o` ${this._renderOptionSelector(C,this._triggersActionsTrigger,{label:l("config.view.triggers.actions.trigger")})}
          ${this._renderOptionSelector(z,this._triggersActionsUntrigger,{label:l("config.view.triggers.actions.untrigger")})}
          ${this._renderOptionSelector(A,this._triggersActionsInteractionModes,{label:l("config.view.triggers.actions.interaction_mode")})}`)}
      `)}_renderKeyAssigner(e,i){return o` <advanced-camera-card-key-assigner
      .label=${l(`config.${e}`)}
      .value=${this._config?b(this._config,e,i):null}
      @value-changed=${i=>this._valueChangedHandler(e,i)}
    ></advanced-camera-card-key-assigner>`}_renderViewKeyboardShortcutMenu(){return this._putInSubmenu("view.keyboard_shortcuts",!0,`config.${T}.editor_label`,"mdi:keyboard",o`
        ${this._renderSwitch(N,this._defaults.view.keyboard_shortcuts.enabled,{label:l(`config.${N}`)})}
        ${this._renderKeyAssigner(B,this._defaults.view.keyboard_shortcuts.ptz_left)}
        ${this._renderKeyAssigner(E,this._defaults.view.keyboard_shortcuts.ptz_right)}
        ${this._renderKeyAssigner(P,this._defaults.view.keyboard_shortcuts.ptz_up)}
        ${this._renderKeyAssigner(H,this._defaults.view.keyboard_shortcuts.ptz_down)}
        ${this._renderKeyAssigner(L,this._defaults.view.keyboard_shortcuts.ptz_zoom_in)}
        ${this._renderKeyAssigner(V,this._defaults.view.keyboard_shortcuts.ptz_zoom_out)}
        ${this._renderKeyAssigner(K,this._defaults.view.keyboard_shortcuts.ptz_home)}
      `)}_renderStatusBarItem(e){return o` ${this._putInSubmenu("status_bar.items",e,`config.status_bar.items.${e}`,"mdi:feature-search",o`
        ${this._renderSwitch(`${U}.${e}.enabled`,this._defaults.status_bar.items[e]?.enabled??!0,{label:l("config.status_bar.items.enabled")})}
        ${this._renderNumberInput(`${U}.${e}.priority`,{max:j,default:this._defaults.status_bar.items[e]?.priority,label:l("config.status_bar.items.priority")})}
      `)}`}_renderMenuButton(e,i){const t=[{value:"",label:""},{value:"matching",label:l("config.menu.buttons.alignments.matching")},{value:"opposing",label:l("config.menu.buttons.alignments.opposing")}];return o` ${this._putInSubmenu("menu.buttons",e,`config.menu.buttons.${e}`,"mdi:gesture-tap-button",o`
        ${this._renderSwitch(`${q}.${e}.enabled`,this._defaults.menu.buttons[e]?.enabled??!0,{label:l("config.menu.buttons.enabled")})}
        ${this._renderOptionSelector(`${q}.${e}.alignment`,t,{label:l("config.menu.buttons.alignment")})}
        ${this._renderSwitch(`${q}.${e}.permanent`,this._defaults.menu.buttons[e]?.permanent??!1,{label:l("config.menu.buttons.permanent")})}
        ${this._renderNumberInput(`${q}.${e}.priority`,{max:F,default:this._defaults.menu.buttons[e]?.priority,label:l("config.menu.buttons.priority")})}
        ${this._renderIconSelector(`${q}.${e}.icon`,{label:l("config.menu.buttons.icon")})}
        ${i}
      `)}`}_putInSubmenu(e,i,t,n,a){const s=this._expandedMenus[e]===i;return o` <div class="${r({submenu:!0,selected:s})}">
      <div
        class="submenu-header"
        @click=${this._toggleMenu}
        .domain=${e}
        .key=${i}
      >
        <advanced-camera-card-icon .icon=${{icon:n}}></advanced-camera-card-icon>
        <span>${l(t)}</span>
      </div>
      ${s?o`<div class="values">${a}</div>`:""}
    </div>`}_renderMediaLayout(e,i,t,n,a,s,r,c,d,u,m,h){return this._putInSubmenu(e,!0,i,"mdi:page-layout-body",o`
        ${this._renderNumberInput(u,{min:R,max:D,label:l("config.cameras.dimensions.layout.zoom"),step:.1})}
        ${this._renderNumberInput(m,{min:0,max:100,label:l("config.cameras.dimensions.layout.pan.x")})}
        ${this._renderNumberInput(h,{min:0,max:100,label:l("config.cameras.dimensions.layout.pan.y")})}
        ${this._renderOptionSelector(t,this._layoutFits,{label:l("config.cameras.dimensions.layout.fit")})}
        ${this._putInSubmenu(`${e}.position`,!0,"config.cameras.dimensions.layout.position.editor_label","mdi:aspect-ratio",o` ${this._renderNumberInput(n,{min:0,max:100,label:l("config.cameras.dimensions.layout.position.x")})}
          ${this._renderNumberInput(a,{min:0,max:100,label:l("config.cameras.dimensions.layout.position.y")})}`)}
        ${this._putInSubmenu(`${e}.view_box`,!0,"config.cameras.dimensions.layout.view_box.editor_label","mdi:crop",o`
            ${this._renderNumberInput(s,{min:0,max:100,label:l("config.cameras.dimensions.layout.view_box.top")})}
            ${this._renderNumberInput(r,{min:0,max:100,label:l("config.cameras.dimensions.layout.view_box.bottom")})}
            ${this._renderNumberInput(c,{min:0,max:100,label:l("config.cameras.dimensions.layout.view_box.left")})}
            ${this._renderNumberInput(d,{min:0,max:100,label:l("config.cameras.dimensions.layout.view_box.right")})}
          `)}
      `)}_renderTimelineCoreControls(e,i,t,n,a,s,r,c,d,u){return o`
      ${this._renderOptionSelector(i,this._timelineStyleTypes,{label:l(`config.common.${G}`)})}
      ${u?this._renderOptionSelector(u,this._timelinePanModes,{label:l("config.common.controls.timeline.pan_mode")}):""}
      ${this._renderNumberInput(t,{label:l(`config.common.${J}`)})}
      ${this._renderNumberInput(n,{label:l(`config.common.${Q}`)})}
      ${this._renderOptionSelector(a,this._timelineEventsMediaTypes,{label:l(`config.common.${W}`)})}
      ${this._renderSwitch(s,c,{label:l(`config.common.${X}`)})}
      ${this._putInSubmenu(`${e}.format`,!0,"config.common.controls.timeline.format.editor_label","mdi:clock-edit",o`
          ${this._renderSwitch(r,d,{label:l("config.common.controls.timeline.format.24h")})}
        `)}
    `}_renderMiniTimeline(e,i,t,n,a,s,r,c,d,u,m){return this._putInSubmenu(e,!0,"config.common.controls.timeline.editor_label","mdi:chart-gantt",o` ${this._renderOptionSelector(i,this._miniTimelineModes,{label:l("config.common.controls.timeline.mode")})}
      ${this._renderTimelineCoreControls(e,t,n,a,s,r,c,d,u,m)}`)}_renderViewDisplay(e,i,t,n,a,s){return this._putInSubmenu(e,!0,"config.common.display.editor_label","mdi:palette-swatch",o`
        ${this._renderOptionSelector(i,this._displayModes,{label:l("config.common.display.mode")})}
        ${this._renderOptionSelector(t,this._gridSelectPositions,{label:l("config.common.display.grid_selected_position")})}
        ${this._renderNumberInput(n,{min:0,label:l("config.common.display.grid_selected_width_factor")})}
        ${this._renderNumberInput(a,{min:0,label:l("config.common.display.grid_columns")})}
        ${this._renderNumberInput(s,{min:0,label:l("config.common.display.grid_max_columns")})}
      `)}_renderNextPreviousControls(e,i,t,n){return this._putInSubmenu(e,!0,"config.common.controls.next_previous.editor_label","mdi:arrow-right-bold-circle",o`
        ${this._renderOptionSelector(i,this._nextPreviousControlStyles.filter((e=>!(!n?.allowThumbnails&&"thumbnails"===e.value||!n?.allowIcons&&"icons"===e.value))),{label:l("config.common.controls.next_previous.style")})}
        ${this._renderNumberInput(t,{min:Y,label:l("config.common.controls.next_previous.size")})}
      `)}_renderThumbnailsControls(e,i,t,n,a,s,r,c){return this._putInSubmenu(e,!0,"config.common.controls.thumbnails.editor_label","mdi:image-text",o`
        ${c?.configPathMode?o`${this._renderOptionSelector(c.configPathMode,this._thumbnailModes,{label:l("config.common.controls.thumbnails.mode")})}`:o``}
        ${c?.configPathMediaType?o`${this._renderOptionSelector(c.configPathMediaType,this._thumbnailMediaTypes,{label:l("config.common.controls.thumbnails.media_type")})}`:o``}
        ${c?.configPathEventsMediaType?o`${this._renderOptionSelector(c.configPathEventsMediaType,this._thumbnailEventsMediaTypes,{label:l("config.common.controls.thumbnails.events_media_type")})}`:o``}
        ${this._renderNumberInput(i,{min:Z,max:ee,label:l("config.common.controls.thumbnails.size")})}
        ${this._renderSwitch(t,r.show_details,{label:l("config.common.controls.thumbnails.show_details")})}
        ${this._renderSwitch(n,r.show_favorite_control,{label:l("config.common.controls.thumbnails.show_favorite_control")})}
        ${this._renderSwitch(a,r.show_timeline_control,{label:l("config.common.controls.thumbnails.show_timeline_control")})}
        ${this._renderSwitch(s,r.show_download_control,{label:l("config.common.controls.thumbnails.show_download_control")})}
      `)}_renderFilterControls(e,i){return this._putInSubmenu(e,!0,"config.common.controls.filter.editor_label","mdi:filter-cog",o`
        ${i?o`${this._renderOptionSelector(i,this._filterModes,{label:l("config.common.controls.filter.mode")})}`:o``}
      `)}_renderImageOptions(e,i,t,n,a){return o`
      ${this._renderOptionSelector(e,this._imageModes,{label:l("config.common.image.mode")})}
      ${this._renderStringInput(i,{label:l("config.common.image.url")})}
      ${this._renderOptionSelector(t,this.hass?Pn(this.hass):[],{label:l("config.common.image.entity")})}
      ${this._renderStringInput(n,{label:l("config.common.image.entity_parameters")})}
      ${this._renderNumberInput(a,{label:l("config.common.image.refresh_seconds")})}
    `}_modifyConfig(e){if(this._config){const i=u(this._config);e(i)&&this._updateConfig(i)}}_renderArrayManagementControls(e,i,t,n){const a=this._config?b(this._config,e):null;return o`
      <div class="controls">
        <ha-icon-button
          .label=${l("editor.move_up")}
          .disabled=${n||!this._config||!Array.isArray(a)||i<=0}
          @click=${()=>!n&&this._modifyConfig((n=>{const a=b(n,e);return!!(Array.isArray(a)&&i>0)&&(ie(a,i,i-1),this._openMenu(t,i-1),!0)}))}
        >
          <advanced-camera-card-icon
            .icon=${{icon:"mdi:arrow-up"}}
          ></advanced-camera-card-icon>
        </ha-icon-button>
        <ha-icon-button
          .label=${l("editor.move_down")}
          .disabled=${n||!this._config||!Array.isArray(this._config.cameras)||i>=this._config.cameras.length-1}
          @click=${()=>!n&&this._modifyConfig((n=>{const a=b(n,e);return!!(Array.isArray(a)&&i<a.length-1)&&(ie(a,i,i+1),this._openMenu(t,i+1),!0)}))}
        >
          <advanced-camera-card-icon
            .icon=${{icon:"mdi:arrow-down"}}
          ></advanced-camera-card-icon>
        </ha-icon-button>
        <ha-icon-button
          .label=${l("editor.delete")}
          .disabled=${n}
          @click=${()=>{this._modifyConfig((n=>{const a=b(n,e);return!!Array.isArray(a)&&(a.splice(i,1),this._closeMenu(t),!0)}))}}
        >
          <advanced-camera-card-icon
            .icon=${{icon:"mdi:delete"}}
          ></advanced-camera-card-icon>
        </ha-icon-button>
      </div>
    `}_renderFolder(e,i,t){const n={submenu:!0,selected:this._expandedMenus[Ln]===i},a=[{value:"",label:""},{value:"ha",label:l("config.folders.types.ha")}];return o` <div class="${r(n)}">
      <div
        class="submenu-header"
        @click=${this._toggleMenu}
        .domain=${Ln}
        .key=${i}
      >
        <advanced-camera-card-icon
          .icon=${{icon:t?"mdi:folder-plus":"mdi:folder"}}
        ></advanced-camera-card-icon>
        <span>
          ${t?o` <span class="new"> [${l("editor.add_new_folder")}...] </span>`:o`<span
                >${this._getEditorFolderTitle(i,e[i]||{})}</span
              >`}
        </span>
      </div>
      ${this._expandedMenus[Ln]===i?o` <div class="values">
            ${this._renderArrayManagementControls(te,i,Ln,t)}
            ${this._renderOptionSelector(ne(xt,i),a)}
            ${this._renderStringInput(ne(Mt,i))}
            ${this._renderIconSelector(ne(It,i),{label:l("config.folders.icon")})}
            ${this._renderStringInput(ne(kt,i))}
            ${this._putInSubmenu("folders.ha",i,"config.folders.ha.editor_label","mdi:home-assistant",o`
                ${this._renderStringInput(ne(Ot,i))}
                ${ae({message:l("config.folders.ha.path_info"),icon:"mdi:information-outline",url:{link:se,title:l("error.configuration")}})}
              `)}
          </div>`:""}
    </div>`}_renderCamera(e,i,t,n){const a=[{value:"",label:""},{value:"auto",label:l("config.cameras.live_providers.auto")},{value:"ha",label:l("config.cameras.live_providers.ha")},{value:"image",label:l("config.cameras.live_providers.image")},{value:"jsmpeg",label:l("config.cameras.live_providers.jsmpeg")},{value:"go2rtc",label:l("config.cameras.live_providers.go2rtc")},{value:"webrtc-card",label:l("config.cameras.live_providers.webrtc-card")}],s=[];e.forEach(((e,t)=>{t!==i&&s.push({value:oe(e),label:this._getEditorCameraTitle(t,e)})}));const c={submenu:!0,selected:this._expandedMenus[Hn]===i};return o`
      <div class="${r(c)}">
        <div
          class="submenu-header"
          @click=${this._toggleMenu}
          .domain=${Hn}
          .key=${i}
        >
          <advanced-camera-card-icon
            .icon=${{icon:n?"mdi:video-plus":"mdi:video"}}
          ></advanced-camera-card-icon>
          <span>
            ${n?o` <span class="new">
                  [${l("editor.add_new_camera")}...]
                </span>`:o`<span
                  >${this._getEditorCameraTitle(i,e[i]||{})}</span
                >`}
          </span>
        </div>
        ${this._expandedMenus[Hn]===i?o` <div class="values">
              ${this._renderArrayManagementControls(re,i,Hn,n)}
              ${this._renderEntitySelector(ne(Ct,i),"camera")}
              ${this._renderOptionSelector(ne(zt,i),a)}
              ${this._renderStringInput(ne(At,i))}
              ${this._renderIconSelector(ne(Tt,i),{label:l("config.cameras.icon")})}
              ${this._renderStringInput(ne(Nt,i))}
              ${this._renderSwitch(ne(Bt,i),this._defaults.cameras.always_error_if_entity_unavailable)}
              ${this._putInSubmenu("cameras.engine",!0,"config.cameras.engines.editor_label","mdi:engine",o`${this._putInSubmenu("cameras.frigate",i,"config.cameras.frigate.editor_label","frigate",o`
                    ${this._renderStringInput(ne(Et,i))}
                    ${this._renderStringInput(ne(Pt,i))}
                    ${this._renderOptionSelector(ne(Ht,i),[],{multiple:!0,label:l("config.cameras.frigate.labels")})}
                    ${this._renderOptionSelector(ne(Lt,i),[],{multiple:!0,label:l("config.cameras.frigate.zones")})}
                    ${this._renderStringInput(ne(Vt,i))}
                  `)}
                ${this._putInSubmenu("cameras.motioneye",i,"config.cameras.motioneye.editor_label","motioneye",o` ${this._renderStringInput(ne(Kt,i))}
                  ${this._renderStringInput(ne(Ut,i))}
                  ${this._renderStringInput(ne(jt,i))}
                  ${this._renderStringInput(ne(qt,i))}
                  ${this._renderStringInput(ne(Ft,i))}`)}
                ${this._putInSubmenu("cameras.reolink",i,"config.cameras.reolink.editor_label","reolink",o` ${this._renderStringInput(ne(Rt,i))}
                  ${this._renderOptionSelector(ne(Dt,i),this._reolinkMediaResolution,{label:l("config.cameras.reolink.media_resolution.editor_label")})}`)}`)}
              ${this._putInSubmenu("cameras.live_provider",!0,"config.cameras.live_provider_options.editor_label","mdi:cctv",o` ${this._putInSubmenu("cameras.go2rtc",i,"config.cameras.go2rtc.editor_label","mdi:alpha-g-circle",o`${this._renderOptionSelector(ne(Gt,i),this._go2rtcModes,{multiple:!0,label:l("config.cameras.go2rtc.modes.editor_label")})}
                  ${this._renderStringInput(ne(Jt,i))}
                  ${this._renderStringInput(ne(Qt,i))} `)}
                ${this._putInSubmenu("cameras.image",!0,"config.cameras.image.editor_label","mdi:image",this._renderImageOptions(ne(Wt,i),ne(Xt,i),ne(Yt,i),ne(Zt,i),ne(en,i)))}
                ${this._putInSubmenu("cameras.webrtc_card",i,"config.cameras.webrtc_card.editor_label","mdi:webrtc",o`${this._renderEntitySelector(ne(tn,i),"camera")}
                  ${this._renderStringInput(ne(nn,i))}`)}`)}
              ${this._putInSubmenu("cameras.dependencies",i,"config.cameras.dependencies.editor_label","mdi:graph",o` ${this._renderSwitch(ne(an,i),this._defaults.cameras.dependencies.all_cameras)}
                ${this._renderOptionSelector(ne(sn,i),s,{multiple:!0})}`)}
              ${this._putInSubmenu("cameras.triggers",i,"config.cameras.triggers.editor_label","mdi:magnify-scan",o`
                  ${this._renderSwitch(ne(on,i),this._defaults.cameras.triggers.occupancy)}
                  ${this._renderSwitch(ne(rn,i),this._defaults.cameras.triggers.motion)}
                  ${this._renderOptionSelector(ne(ln,i),t,{multiple:!0})}
                  ${this._renderOptionSelector(ne(cn,i),this._triggersEvents,{multiple:!0,label:l("config.cameras.triggers.events.editor_label")})}
                `)}
              ${this._putInSubmenu("cameras.cast",i,"config.cameras.cast.editor_label","mdi:cast",o`
                  ${this._renderOptionSelector(ne(dn,i),this._castMethods)}
                  ${this._renderStringInput(ne(un,i))}
                  ${this._renderStringInput(ne(mn,i))}
                `)}
              ${this._putInSubmenu("cameras.dimensions",i,"config.cameras.dimensions.editor_label","mdi:aspect-ratio",o`
                  ${this._renderStringInput(ne(hn,i))}
                  ${this._renderOptionSelector(ne(_n,i),this._rotations)}
                  ${this._renderMediaLayout("cameras.dimensions.layout","config.cameras.dimensions.layout.editor_label",ne(gn,i),ne(bn,i),ne(pn,i),ne(vn,i),ne(fn,i),ne($n,i),ne(yn,i),ne(wn,i),ne(Sn,i),ne(xn,i))}
                `)}
              ${this._putInSubmenu("cameras.capabilities",i,"config.cameras.capabilities.editor_label","mdi:cog-stop",o`
                  ${this._renderOptionSelector(ne(Mn,i),this._capabilities,{multiple:!0})}
                  ${this._renderOptionSelector(ne(In,i),this._capabilities,{multiple:!0})}
                `)}
              ${this._putInSubmenu("cameras.proxy",i,"config.cameras.proxy.editor_label","mdi:arrow-decision",o`
                  ${this._renderOptionSelector(ne(kn,i),this._proxyModes,{label:l("config.cameras.proxy.live")})}
                  ${this._renderOptionSelector(ne(On,i),this._proxyModes,{label:l("config.cameras.proxy.media")})}
                  ${this._renderSwitch(ne(Cn,i),this._defaults.cameras.proxy.dynamic)}
                  ${this._renderOptionSelector(ne(zn,i),this._proxySSLVerification,{label:l("config.cameras.proxy.ssl_verification.editor_label")})}
                  ${this._renderOptionSelector(ne(An,i),this._proxySSLCiphers,{label:l("config.cameras.proxy.ssl_ciphers.editor_label")})}
                `)}
            </div>`:""}
      </div>
    `}_renderStringInput(e,i){if(this._config)return o`
      <ha-selector
        .hass=${this.hass}
        .selector=${{text:{type:i?.type||"text"}}}
        .label=${i?.label??this._getLabel(e)}
        .value=${b(this._config,e,"")}
        .required=${!1}
        @value-changed=${i=>this._valueChangedHandler(e,i)}
      >
      </ha-selector>
    `}_renderSwitch(e,i,t){if(this._config)return o`
      <ha-selector
        .hass=${this.hass}
        .selector=${{boolean:{}}}
        .label=${t?.label||this._getLabel(e)}
        .value=${b(this._config,e,i)}
        .required=${!1}
        @value-changed=${i=>this._valueChangedHandler(e,i)}
      >
      </ha-selector>
    `}_updateConfig(e){this._config=e,le(this,"config-changed",{config:this._config})}render(){if(!this.hass||!this._config)return o``;const e=Pn(this.hass),i=b(this._config,re)||[],t=b(this._config,te)||[];return o`
      ${this._configUpgradeable?o` <div class="upgrade">
              <span>${l("editor.upgrade_available")}</span>
              <span>
                <mwc-button
                  raised
                  label="${l("editor.upgrade")}"
                  @click=${()=>{if(this._config){const e=u(this._config);ce(e),this._updateConfig(e)}}}
                >
                </mwc-button>
              </span>
            </div>
            <br />`:o``}
      <div class="card-config">
        ${this._renderOptionSetHeader("cameras")}
        ${"cameras"===this._expandedMenus[Vn]?o`
              <div class="values">
                ${i.map(((t,n)=>this._renderCamera(i,n,e)))}
                ${this._renderCamera(i,i.length,e,!0)}
              </div>
            `:""}
        ${this._renderOptionSetHeader("profiles")}
        ${"profiles"===this._expandedMenus[Vn]?o` <div class="values">
              ${this._renderOptionSelector(de,this._profiles,{multiple:!0,label:l("config.profiles.editor_label")})}
            </div>`:""}
        ${this._renderOptionSetHeader("view")}
        ${"view"===this._expandedMenus[Vn]?o`
              <div class="values">
                ${this._renderOptionSelector(ue,this._viewModes)}
                ${this._renderOptionSelector(me,this._cameraSelectViewModes)}
                ${this._renderSwitch(he,this._defaults.view.dim)}
                ${this._renderNumberInput(_e)}
                ${this._renderSwitch(ge,this._defaults.view.default_cycle_camera)}
                ${this._renderViewDefaultResetMenu()} ${this._renderViewTriggersMenu()}
                ${this._renderViewKeyboardShortcutMenu()}
                ${this._renderOptionSelector(be,this._themes,{label:l("config.view.theme.themes.editor_label"),multiple:!0})}
              </div>
            `:""}
        ${this._renderOptionSetHeader("menu")}
        ${"menu"===this._expandedMenus[Vn]?o`
              <div class="values">
                ${this._renderOptionSelector(pe,this._menuStyles)}
                ${this._renderOptionSelector(ve,this._menuPositions)}
                ${this._renderOptionSelector(fe,this._menuAlignments)}
                ${this._renderNumberInput($e,{min:Y})}
                ${this._renderMenuButton("iris")}
                ${this._renderMenuButton("cameras")}
                ${this._renderMenuButton("substreams")}
                ${this._renderMenuButton("live")}
                ${this._renderMenuButton("clips")}
                ${this._renderMenuButton("snapshots")}
                ${this._renderMenuButton("recordings")}
                ${this._renderMenuButton("folders")}
                ${this._renderMenuButton("image")}
                ${this._renderMenuButton("download")}
                ${this._renderMenuButton("camera_ui")}
                ${this._renderMenuButton("fullscreen")}
                ${this._renderMenuButton("expand")}
                ${this._renderMenuButton("timeline")}
                ${this._renderMenuButton("media_player")}
                ${this._renderMenuButton("microphone",o`${this._renderOptionSelector(`${q}.microphone.type`,this._microphoneButtonTypes,{label:l("config.menu.buttons.type")})}`)}
                ${this._renderMenuButton("play")}
                ${this._renderMenuButton("mute")}
                ${this._renderMenuButton("screenshot")}
                ${this._renderMenuButton("display_mode")}
                ${this._renderMenuButton("ptz_controls")}
                ${this._renderMenuButton("ptz_home")}
              </div>
            `:""}
        ${this._renderOptionSetHeader("status_bar")}
        ${"status_bar"===this._expandedMenus[Vn]?o`
              <div class="values">
                ${this._renderOptionSelector(ye,this._statusBarStyles)}
                ${this._renderOptionSelector(we,this._statusBarPositions)}
                ${this._renderNumberInput(Se,{min:xe,label:l("config.status_bar.height")})}
                ${this._renderNumberInput(Me,{min:0,max:60,default:this._defaults.status_bar.popup_seconds,label:l("config.status_bar.popup_seconds")})}
                ${this._renderStatusBarItem("title")}
                ${this._renderStatusBarItem("resolution")}
                ${this._renderStatusBarItem("technology")}
                ${this._renderStatusBarItem("engine")}
              </div>
            `:""}
        ${this._renderOptionSetHeader("live")}
        ${"live"===this._expandedMenus[Vn]?o`
              <div class="values">
                ${this._renderSwitch(Ie,this._defaults.live.preload)}
                ${this._renderSwitch(ke,this._defaults.live.draggable)}
                ${this._renderSwitch(Oe,this._defaults.live.zoomable)}
                ${this._renderSwitch(Ce,this._defaults.live.lazy_load)}
                ${this._renderOptionSelector(ze,this._mediaActionNegativeConditions,{multiple:!0})}
                ${this._renderOptionSelector(Ae,this._mediaActionPositiveConditions,{multiple:!0})}
                ${this._renderOptionSelector(Te,this._mediaActionNegativeConditions,{multiple:!0})}
                ${this._renderOptionSelector(Ne,this._mediaLiveMuteConditions,{multiple:!0})}
                ${this._renderOptionSelector(Be,this._mediaLiveUnmuteConditions,{multiple:!0})}
                ${this._renderOptionSelector(Ee,this._transitionEffects)}
                ${this._renderSwitch(Pe,this._defaults.live.show_image_during_load)}
                ${this._renderViewDisplay("live.display",He,Le,Ve,Ke,Ue)}
                ${this._putInSubmenu("live.controls",!0,"config.live.controls.editor_label","mdi:gamepad",o`
                    ${this._renderSwitch(je,this._defaults.live.controls.builtin,{label:l("config.common.controls.builtin")})}
                    ${this._renderNextPreviousControls("live.controls.next_previous",qe,Fe,{allowIcons:!0})}
                    ${this._renderThumbnailsControls("live.controls.thumbnails",Re,De,Ge,Je,Qe,this._defaults.live.controls.thumbnails,{configPathMediaType:We,configPathEventsMediaType:Xe,configPathMode:Ye})}
                    ${this._renderMiniTimeline("live.controls.timeline",Ze,ei,ii,ti,ni,ai,si,this._defaults.live.controls.timeline.show_recordings,this._defaults.live.controls.timeline.format["24h"],oi)}
                    ${this._putInSubmenu("live.controls.ptz",!0,"config.live.controls.ptz.editor_label","mdi:pan",o`
                        ${this._renderOptionSelector(ri,this._ptzModes)}
                        ${this._renderOptionSelector(li,this._ptzPositions)}
                        ${this._renderOptionSelector(ci,this._ptzOrientations)}
                        ${this._renderSwitch(di,this._defaults.live.controls.ptz.hide_pan_tilt,{label:l("config.live.controls.ptz.hide_pan_tilt")})}
                        ${this._renderSwitch(ui,this._defaults.live.controls.ptz.hide_pan_tilt,{label:l("config.live.controls.ptz.hide_zoom")})}
                        ${this._renderSwitch(mi,this._defaults.live.controls.ptz.hide_home,{label:l("config.live.controls.ptz.hide_home")})}
                      `)}
                  `)}
                ${this._putInSubmenu("live.microphone",!0,"config.live.microphone.editor_label","mdi:microphone",o`
                    ${this._renderNumberInput(hi)}
                    ${this._renderSwitch(_i,this._defaults.live.microphone.always_connected)}
                    ${this._renderNumberInput(gi)}
                  `)}
              </div>
            `:""}
        ${this._renderOptionSetHeader("folders")}
        ${"folders"===this._expandedMenus[Vn]?o` <div class="values">
              ${t.map(((e,i)=>this._renderFolder(t,i)))}
              ${this._renderFolder(t,t.length,!0)}
            </div>`:""}
        ${this._renderOptionSetHeader("media_gallery")}
        ${"media_gallery"===this._expandedMenus[Vn]?o` <div class="values">
              ${this._renderThumbnailsControls("media_gallery.controls.thumbnails",bi,pi,vi,fi,$i,this._defaults.media_gallery.controls.thumbnails)}
              ${this._renderFilterControls("media_gallery.controls.filter",yi)}
            </div>`:""}
        ${this._renderOptionSetHeader("media_viewer")}
        ${"media_viewer"===this._expandedMenus[Vn]?o` <div class="values">
              ${this._renderOptionSelector(wi,this._mediaActionPositiveConditions,{multiple:!0})}
              ${this._renderOptionSelector(Si,this._mediaActionNegativeConditions,{multiple:!0})}
              ${this._renderOptionSelector(xi,this._mediaActionNegativeConditions,{multiple:!0})}
              ${this._renderOptionSelector(Mi,this._mediaActionPositiveConditions,{multiple:!0})}
              ${this._renderSwitch(Ii,this._defaults.media_viewer.draggable)}
              ${this._renderSwitch(ki,this._defaults.media_viewer.zoomable)}
              ${this._renderSwitch(Oi,this._defaults.media_viewer.lazy_load)}
              ${this._renderOptionSelector(Ci,this._transitionEffects)}
              ${this._renderSwitch(zi,this._defaults.media_viewer.snapshot_click_plays_clip)}
              ${this._renderViewDisplay("media_viewer.display",Ai,Ti,Ni,Bi,Ei)}
              ${this._putInSubmenu("media_viewer.controls",!0,"config.media_viewer.controls.editor_label","mdi:gamepad",o`
                  ${this._renderSwitch(Pi,this._defaults.media_viewer.controls.builtin,{label:l("config.common.controls.builtin")})}
                  ${this._renderNextPreviousControls("media_viewer.controls.next_previous",Hi,Li,{allowThumbnails:!0})}
                  ${this._renderThumbnailsControls("media_viewer.controls.thumbnails",Vi,Ki,Ui,ji,qi,this._defaults.media_viewer.controls.thumbnails,{configPathMode:Fi})}
                  ${this._renderMiniTimeline("media_viewer.controls.timeline",Ri,Di,Gi,Ji,Qi,Wi,Xi,this._defaults.media_viewer.controls.timeline.show_recordings,this._defaults.media_viewer.controls.timeline.format["24h"],Yi)}
                `)}
            </div>`:""}
        ${this._renderOptionSetHeader("image")}
        ${"image"===this._expandedMenus[Vn]?o` <div class="values">
              ${this._renderImageOptions(Zi,et,it,tt,nt)}
            </div>`:""}
        ${this._renderOptionSetHeader("timeline")}
        ${"timeline"===this._expandedMenus[Vn]?o` <div class="values">
              ${this._renderTimelineCoreControls("timeline.format",G,J,Q,W,X,at,this._defaults.timeline.show_recordings,this._defaults.timeline.format["24h"])}
              ${this._renderThumbnailsControls("timeline.controls.thumbnails",st,ot,rt,lt,ct,this._defaults.timeline.controls.thumbnails,{configPathMode:dt})}
            </div>`:""}
        ${this._renderOptionSetHeader("dimensions")}
        ${"dimensions"===this._expandedMenus[Vn]?o` <div class="values">
              ${this._renderOptionSelector(ut,this._aspectRatioModes)}
              ${this._renderStringInput(mt)}
              ${this._renderStringInput(ht)}
            </div>`:""}
        ${this._renderOptionSetHeader("performance","low"===b(this._config,Tn)?"warning":void 0)}
        ${"performance"===this._expandedMenus[Vn]?o` <div class="values">
              ${"low"===b(this._config,Tn)?this._renderInfo(l("config.performance.warning")):o``}
              ${this._putInSubmenu("performance.features",!0,"config.performance.features.editor_label","mdi:feature-search",o`
                  ${this._renderSwitch(_t,this._defaults.performance.features.card_loading_indicator)}
                  ${this._renderSwitch(gt,this._defaults.performance.features.animated_progress_indicator)}
                  ${this._renderNumberInput(bt,{max:pt})}
                  ${this._renderNumberInput(vt,{min:1})}
                `)}
              ${this._putInSubmenu("performance.style",!0,"config.performance.style.editor_label","mdi:palette-swatch-variant",o`
                  ${this._renderSwitch(ft,this._defaults.performance.style.border_radius)}
                  ${this._renderSwitch($t,this._defaults.performance.style.box_shadow)}
                `)}
            </div>`:""}
        ${this._renderOptionSetHeader("remote_control")}
        ${"remote_control"===this._expandedMenus[Vn]?o` <div class="values">
              ${this._putInSubmenu("remote_control.entities",!0,"config.remote_control.entities.editor_label","mdi:devices",o`
                  ${this._renderEntitySelector(yt,"input_select")}
                `)}
            </div>`:""}
        ${void 0!==this._config.overrides?o` ${this._renderOptionSetHeader("overrides")}
            ${"overrides"===this._expandedMenus[Vn]?o` <div class="values">
                  ${this._renderInfo(l("config.overrides.info"))}
                </div>`:""}`:o``}
      </div>
    `}_closeMenu(e){delete this._expandedMenus[e],this.requestUpdate()}_openMenu(e,i){this._expandedMenus[e]=i,this.requestUpdate()}_toggleMenu(e){if(e&&e.target){const i=e.target.domain,t=e.target.key;this._expandedMenus[i]===t?this._closeMenu(i):this._openMenu(i,t)}}_valueChangedHandler(e,i){if(!this._config||!this.hass)return;let t;if(i.detail&&void 0!==i.detail.value&&(t=i.detail.value,"string"==typeof t&&(t=t.trim())),b(this._config,e)===t)return;const n=u(this._config);""===t||void 0===t?wt(n,e):St(n,e,t),this._updateConfig(n)}static get styles(){return c('ha-icon-button {\n  color: var(--advanced-camera-card-button-color);\n  background-color: var(--advanced-camera-card-button-background);\n  border-radius: 50%;\n  padding: 0px;\n  margin: 3px;\n  --ha-icon-display: block;\n  /* Buttons can always be clicked */\n  pointer-events: auto;\n}\n\n.option {\n  padding: 4px 4px;\n  cursor: pointer;\n}\n\n.option.option-overrides .title {\n  color: var(--warning-color);\n}\n\n.row {\n  display: flex;\n  margin-bottom: -14px;\n  pointer-events: none;\n}\n\n.title {\n  padding-left: 16px;\n  margin-top: -6px;\n  pointer-events: none;\n}\n\n.title.warning {\n  color: var(--warning-color);\n}\n\n.secondary {\n  padding-left: 40px;\n  color: var(--secondary-text-color);\n  pointer-events: none;\n}\n\n.values {\n  background: var(--secondary-background-color);\n  display: grid;\n}\n\n.values + .option,\n.submenu + .option {\n  margin-top: 10px;\n}\n\ndiv.upgrade {\n  width: auto;\n  border: 1px dotted var(--primary-color);\n  margin: 10px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\ndiv.upgrade span {\n  padding: 10px;\n}\n\n.submenu-header {\n  display: flex;\n  padding: 10px;\n  cursor: pointer;\n}\n\n.submenu.selected > .submenu-header {\n  background-color: var(--primary-color);\n  color: var(--primary-text-color);\n}\n\n.submenu-header * {\n  flex-basis: auto;\n  pointer-events: none;\n}\n\n.submenu-header .new {\n  font-style: italic;\n}\n\n.submenu:not(.selected) > .submenu-header .new {\n  color: var(--secondary-text-color, "black");\n}\n\n.submenu-header advanced-camera-card-icon {\n  margin-right: 15px;\n}\n\n.submenu.selected {\n  border: 1px solid var(--primary-color);\n}\n\n.submenu {\n  width: calc(100% - 20px);\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 10px;\n}\n\n.submenu:first-child,\n:not(.submenu) + .submenu {\n  margin-top: 10px;\n}\n\n.submenu .controls {\n  display: inline-block;\n  margin-left: auto;\n  margin-right: 0px;\n  margin-bottom: 5px;\n}\n\n.submenu .controls ha-icon-button {\n  --mdc-icon-button-size: 32px;\n  --mdc-icon-size: calc(var(--mdc-icon-button-size) / 2);\n}\n\nspan.info {\n  padding: 10px;\n}\n\nha-selector {\n  padding: 10px;\n  border: 1px solid var(--divider-color);\n}\n\nadvanced-camera-card-message::part(icon) {\n  color: var(--primary-color);\n}')}};t([n({attribute:!1})],Un.prototype,"hass",void 0),t([d()],Un.prototype,"_config",void 0),t([d()],Un.prototype,"_defaults",void 0),t([d()],Un.prototype,"_expandedMenus",void 0),Un=t([a("advanced-camera-card-editor")],Un);export{Un as AdvancedCameraCardEditor};
