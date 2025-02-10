import{cT as e,_ as a,n as i,b as t,t as r,a as o,cU as s,cQ as n,cV as d,cW as c,x as h,cX as l,l as g,cY as m,e as v,cZ as p,r as u,c_ as C,c$ as I,d0 as M,d1 as _,d2 as f,d3 as w,d4 as b,d5 as y,d6 as L,d7 as A}from"./card-bc00afb6.js";import{u as j,i as D}from"./media-layout-0b2aec48.js";import{p as $,d as S,M as E,A as T,a as N,b as k}from"./media-9cad1b6b.js";class z{constructor(e){this._inBackground=!1,this._lastMediaLoadedInfo=null,this._handleMediaLoaded=e=>{this._lastMediaLoadedInfo={source:e.composedPath()[0],mediaLoadedInfo:e.detail},this._inBackground&&e.stopPropagation()},this._host=e,e.addController(this),this._intersectionObserver=new IntersectionObserver(this._intersectionHandler.bind(this))}hostConnected(){this._intersectionObserver.observe(this._host),this._host.addEventListener("advanced-camera-card:media:loaded",this._handleMediaLoaded)}hostDisconnected(){this._intersectionObserver.disconnect(),this._host.removeEventListener("advanced-camera-card:media:loaded",this._handleMediaLoaded)}isInBackground(){return this._inBackground}_intersectionHandler(a){const i=this._inBackground;this._inBackground=!a.some((e=>e.isIntersecting)),!this._inBackground&&this._lastMediaLoadedInfo&&e(this._lastMediaLoadedInfo.source,this._lastMediaLoadedInfo.mediaLoadedInfo),i!==this._inBackground&&this._host.requestUpdate()}}let O=class extends o{constructor(){super(...arguments),this.load=!1,this.label="",this._isVideoMediaLoaded=!1,this._hasProviderError=!1,this._showStreamTroubleshooting=!1,this._refProvider=s(),this._importPromises=[]}async play(){await this.updateComplete,await(this._refProvider.value?.updateComplete),await $(this,this._refProvider.value)}async pause(){await this.updateComplete,await(this._refProvider.value?.updateComplete),await(this._refProvider.value?.pause())}async mute(){await this.updateComplete,await(this._refProvider.value?.updateComplete),await(this._refProvider.value?.mute())}async unmute(){await this.updateComplete,await(this._refProvider.value?.updateComplete),await(this._refProvider.value?.unmute())}isMuted(){return this._refProvider.value?.isMuted()??!0}async seek(e){await this.updateComplete,await(this._refProvider.value?.updateComplete),await(this._refProvider.value?.seek(e))}async setControls(e){await this.updateComplete,await(this._refProvider.value?.updateComplete),await(this._refProvider.value?.setControls(e))}isPaused(){return this._refProvider.value?.isPaused()??!0}async getScreenshotURL(){return await this.updateComplete,await(this._refProvider.value?.updateComplete),await(this._refProvider.value?.getScreenshotURL())??null}getFullscreenElement(){return this._refProvider.value?.getFullscreenElement()??null}_getResolvedProvider(){return"auto"===this.cameraConfig?.live_provider?this.cameraConfig?.webrtc_card?.entity||this.cameraConfig?.webrtc_card?.url?"webrtc-card":this.cameraConfig?.camera_entity?"ha":this.cameraConfig?.frigate.camera_name?"jsmpeg":n.cameras.live_provider:this.cameraConfig?.live_provider||"image"}_shouldShowImageDuringLoading(){return!(this._isVideoMediaLoaded||!this.cameraConfig?.camera_entity||!this.hass||!this.liveConfig?.show_image_during_load||this._showStreamTroubleshooting||this._hasProviderError)}disconnectedCallback(){this._isVideoMediaLoaded=!1}_videoMediaShowHandler(){this._isVideoMediaLoaded=!0,this._showStreamTroubleshooting=!1}_providerErrorHandler(){this._hasProviderError=!0}willUpdate(e){if(e.has("load")&&(this.load||(this._isVideoMediaLoaded=!1,d(this))),e.has("liveConfig")&&(this.liveConfig?.show_image_during_load&&this._importPromises.push(import("./image-480e34b0.js")),this.liveConfig?.zoomable&&this._importPromises.push(import("./zoomer-6ae21bde.js"))),e.has("cameraConfig")){const e=this._getResolvedProvider();"jsmpeg"===e?this._importPromises.push(import("./jsmpeg-fe1d8a5a.js")):"ha"===e?this._importPromises.push(import("./ha-4cf26e0e.js")):"webrtc-card"===e?this._importPromises.push(import("./webrtc-card-6ee3af0d.js")):"image"===e?this._importPromises.push(import("./image-480e34b0.js")):"go2rtc"===e&&this._importPromises.push(import("./index-a10e0ac0.js")),j(this,this.cameraConfig?.dimensions?.layout),this.style.aspectRatio=c({ratio:this.cameraConfig?.dimensions?.aspect_ratio})}}async getUpdateComplete(){const e=await super.getUpdateComplete();return await Promise.all(this._importPromises),this._importPromises=[],e}_useZoomIfRequired(e){return this.liveConfig?.zoomable?h` <advanced-camera-card-zoomer
          .defaultSettings=${D([this.cameraConfig?.dimensions?.layout],(()=>this.cameraConfig?.dimensions?.layout?{pan:this.cameraConfig.dimensions.layout.pan,zoom:this.cameraConfig.dimensions.layout.zoom}:void 0))}
          .settings=${this.zoomSettings}
          @advanced-camera-card:zoom:zoomed=${()=>this.setControls(!1)}
          @advanced-camera-card:zoom:unzoomed=${()=>this.setControls()}
        >
          ${e}
        </advanced-camera-card-zoomer>`:e}render(){if(!(this.load&&this.hass&&this.liveConfig&&this.cameraConfig))return;this.title=this.label,this.ariaLabel=this.label;const e=this._getResolvedProvider(),a=this._shouldShowImageDuringLoading(),i=!this._isVideoMediaLoaded,t={hidden:a};if("ha"===e||"image"===e||this.cameraConfig?.camera_entity&&this.cameraConfig.always_error_if_entity_unavailable){if(!this.cameraConfig?.camera_entity)return S(this),l({message:g("error.no_live_camera"),type:"error",icon:"mdi:camera",context:this.cameraConfig});const e=this.hass.states[this.cameraConfig.camera_entity];if(!e)return S(this),l({message:g("error.live_camera_not_found"),type:"error",icon:"mdi:camera",context:this.cameraConfig});if("unavailable"===e.state)return S(this),d(this),l({message:`${g("error.live_camera_unavailable")}${this.label?`: ${this.label}`:""}`,type:"info",icon:"mdi:cctv-off",dotdotdot:!0})}return h`${this._useZoomIfRequired(h`
      ${a||"image"===e?h` <advanced-camera-card-live-image
            ${m(this._refProvider)}
            .hass=${this.hass}
            .cameraConfig=${this.cameraConfig}
            @advanced-camera-card:live:error=${()=>this._providerErrorHandler()}
            @advanced-camera-card:media:loaded=${a=>{"image"===e?this._videoMediaShowHandler():a.stopPropagation()}}
          >
          </advanced-camera-card-live-image>`:h``}
      ${"ha"===e?h` <advanced-camera-card-live-ha
            ${m(this._refProvider)}
            class=${v(t)}
            .hass=${this.hass}
            .cameraConfig=${this.cameraConfig}
            ?controls=${this.liveConfig.controls.builtin}
            @advanced-camera-card:live:error=${()=>this._providerErrorHandler()}
            @advanced-camera-card:media:loaded=${this._videoMediaShowHandler.bind(this)}
          >
          </advanced-camera-card-live-ha>`:"go2rtc"===e?h`<advanced-camera-card-live-go2rtc
              ${m(this._refProvider)}
              class=${v(t)}
              .hass=${this.hass}
              .cameraConfig=${this.cameraConfig}
              .cameraEndpoints=${this.cameraEndpoints}
              .microphoneState=${this.microphoneState}
              .microphoneConfig=${this.liveConfig.microphone}
              ?controls=${this.liveConfig.controls.builtin}
              @advanced-camera-card:live:error=${()=>this._providerErrorHandler()}
              @advanced-camera-card:media:loaded=${this._videoMediaShowHandler.bind(this)}
            >
            </advanced-camera-card-live-go2rtc>`:"webrtc-card"===e?h`<advanced-camera-card-live-webrtc-card
                ${m(this._refProvider)}
                class=${v(t)}
                .hass=${this.hass}
                .cameraConfig=${this.cameraConfig}
                .cameraEndpoints=${this.cameraEndpoints}
                .cardWideConfig=${this.cardWideConfig}
                ?controls=${this.liveConfig.controls.builtin}
                @advanced-camera-card:live:error=${()=>this._providerErrorHandler()}
                @advanced-camera-card:media:loaded=${this._videoMediaShowHandler.bind(this)}
              >
              </advanced-camera-card-live-webrtc-card>`:"jsmpeg"===e?h` <advanced-camera-card-live-jsmpeg
                  ${m(this._refProvider)}
                  class=${v(t)}
                  .hass=${this.hass}
                  .cameraConfig=${this.cameraConfig}
                  .cameraEndpoints=${this.cameraEndpoints}
                  .cardWideConfig=${this.cardWideConfig}
                  @advanced-camera-card:live:error=${()=>this._providerErrorHandler()}
                  @advanced-camera-card:media:loaded=${this._videoMediaShowHandler.bind(this)}
                >
                </advanced-camera-card-live-jsmpeg>`:h``}
    `)}
    ${i?h`<advanced-camera-card-icon
          title=${g("error.awaiting_live")}
          .icon=${{icon:"mdi:progress-helper"}}
          @click=${()=>{this._showStreamTroubleshooting=!this._showStreamTroubleshooting}}
        ></advanced-camera-card-icon>`:""}
    ${this._showStreamTroubleshooting?l({type:"error",icon:"mdi:camera-off",message:g("error.stream_not_loading"),troubleshootingURL:p},{overlay:!0}):""}`}static get styles(){return u(':host {\n  background-color: var(--primary-background-color);\n  background-position: center;\n  background-repeat: no-repeat;\n  background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgaW5rc2NhcGU6dmVyc2lvbj0iMS4yLjIgKGIwYTg0ODY1NDEsIDIwMjItMTItMDEpIgogICBzb2RpcG9kaTpkb2NuYW1lPSJpcmlzLW91dGxpbmUuc3ZnIgogICBpZD0ic3ZnNCIKICAgdmVyc2lvbj0iMS4xIgogICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIgogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGRlZnMKICAgICBpZD0iZGVmczgiIC8+CiAgPHNvZGlwb2RpOm5hbWVkdmlldwogICAgIGlkPSJuYW1lZHZpZXc2IgogICAgIHBhZ2Vjb2xvcj0iI2I5M2UzZSIKICAgICBib3JkZXJjb2xvcj0iIzAwMDAwMCIKICAgICBib3JkZXJvcGFjaXR5PSIwLjI1IgogICAgIGlua3NjYXBlOnNob3dwYWdlc2hhZG93PSIyIgogICAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwLjYwNzg0MzE0IgogICAgIGlua3NjYXBlOnBhZ2VjaGVja2VyYm9hcmQ9ImZhbHNlIgogICAgIGlua3NjYXBlOmRlc2tjb2xvcj0iI2QxZDFkMSIKICAgICBzaG93Z3JpZD0iZmFsc2UiCiAgICAgaW5rc2NhcGU6em9vbT0iMTkuMzc4NTc4IgogICAgIGlua3NjYXBlOmN4PSI4LjI4MjM0MTUiCiAgICAgaW5rc2NhcGU6Y3k9IjEyLjM1OTAwOCIKICAgICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjM4NDAiCiAgICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iMTUyNyIKICAgICBpbmtzY2FwZTp3aW5kb3cteD0iMTA4MCIKICAgICBpbmtzY2FwZTp3aW5kb3cteT0iMjI3IgogICAgIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiCiAgICAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0ic3ZnNCIgLz4KICA8ZwogICAgIGlkPSJnMTExOSIKICAgICBzdHlsZT0iZmlsbC1vcGFjaXR5OjAuMDU7ZmlsbDojZmZmZmZmIj4KICAgIDxjaXJjbGUKICAgICAgIHN0eWxlPSJkaXNwbGF5OmlubGluZTtmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjAuNDk3ODI4MjU7c3Ryb2tlLXdpZHRoOjEuMzk3Mjk7b3BhY2l0eTowLjUiCiAgICAgICBpZD0icGF0aDE3MCIKICAgICAgIGN4PSIxMiIKICAgICAgIGN5PSIxMiIKICAgICAgIGlua3NjYXBlOmxhYmVsPSJCYWNrZ3JvdW5kIgogICAgICAgcj0iMTEuMjUiIC8+CiAgICA8cGF0aAogICAgICAgZD0iTSAxMy43MzAwMDEsMTUgOS44MzAwMDAzLDIxLjc2IEMgMTAuNTMsMjEuOTEgMTEuMjUsMjIgMTIsMjIgYyAyLjQwMDAwMSwwIDQuNiwtMC44NSA2LjMyLC0yLjI1IEwgMTQuNjYwMDAxLDEzLjQgTSAyLjQ2MDAwMDMsMTUgYyAwLjkyLDIuOTIgMy4xNSw1LjI2IDUuOTksNi4zNCBMIDEyLjEyLDE1IG0gLTMuNTc5OTk5NywtMyAtMy45LC02Ljc0OTk5OTYgYyAtMS42NCwxLjc0OTk5OSAtMi42NCw0LjEzOTk5OTMgLTIuNjQsNi43NDk5OTk2IDAsMC42OCAwLjA3LDEuMzUgMC4yLDIgaCA3LjQ5IE0gMjEuOCw5Ljk5OTk5OTcgSCAxNC4zMTAwMDEgTCAxNC42MDAwMDEsMTAuNSAxOS4zNiwxOC43NSBDIDIxLDE2Ljk3IDIyLDE0LjYgMjIsMTIgMjIsMTEuMzEgMjEuOTMsMTAuNjQgMjEuOCw5Ljk5OTk5OTcgbSAtMC4yNiwtMSBDIDIwLjYyLDYuMDcwMDAwNSAxOC4zOSwzLjc0MDAwMDIgMTUuNTUwMDAxLDIuNjYwMDAwMiBMIDExLjg4LDguOTk5OTk5NyBNIDkuNDAwMDAwMywxMC41IDE0LjE3MDAwMSwyLjI0MDAwMDIgYyAtMC43LC0wLjE1IC0xLjQyMDAwMSwtMC4yNCAtMi4xNzAwMDEsLTAuMjQgLTIuMzk5OTk5NywwIC00LjU5OTk5OTcsMC44NCAtNi4zMTk5OTk3LDIuMjUwMDAwMyBsIDMuNjYsNi4zNDk5OTk1IHoiCiAgICAgICBpZD0icGF0aDIiCiAgICAgICBpbmtzY2FwZTpsYWJlbD0iSXJpcyIKICAgICAgIHN0eWxlPSJmaWxsLW9wYWNpdHk6MC41MDIyMTAwMjtmaWxsOiNmZmZmZmY7b3BhY2l0eTowLjc1IiAvPgogIDwvZz4KPC9zdmc+Cg==");\n  background-size: 10%;\n  background-position: center;\n}\n\n:host {\n  display: block;\n  height: 100%;\n  width: 100%;\n  position: relative;\n}\n\n.hidden {\n  display: none;\n}\n\nadvanced-camera-card-icon {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  color: var(--primary-color);\n  cursor: help;\n}')}};a([i({attribute:!1})],O.prototype,"hass",void 0),a([i({attribute:!1})],O.prototype,"cameraConfig",void 0),a([i({attribute:!1})],O.prototype,"cameraEndpoints",void 0),a([i({attribute:!1})],O.prototype,"liveConfig",void 0),a([i({attribute:!0,type:Boolean})],O.prototype,"load",void 0),a([i({attribute:!1})],O.prototype,"label",void 0),a([i({attribute:!1})],O.prototype,"cardWideConfig",void 0),a([i({attribute:!1})],O.prototype,"microphoneState",void 0),a([i({attribute:!1})],O.prototype,"zoomSettings",void 0),a([t()],O.prototype,"_isVideoMediaLoaded",void 0),a([t()],O.prototype,"_hasProviderError",void 0),a([t()],O.prototype,"_showStreamTroubleshooting",void 0),O=a([r("advanced-camera-card-live-provider")],O);const P="advanced-camera-card-live-provider";let x=class extends o{constructor(){super(...arguments),this._cameraToSlide={},this._refPTZControl=s(),this._refCarousel=s(),this._mediaActionsController=new E,this._mediaHasLoaded=!1}connectedCallback(){super.connectedCallback(),this.requestUpdate()}disconnectedCallback(){this._mediaActionsController.destroy(),super.disconnectedCallback()}_getTransitionEffect(){return this.overriddenLiveConfig?.transition_effect??n.live.transition_effect}_getSelectedCameraIndex(){if(this.viewFilterCameraID)return 0;const e=this.cameraManager?.getStore().getCameraIDsWithCapability("live"),a=this.viewManagerEpoch?.manager.getView();return e?.size&&a?Math.max(0,Array.from(e).indexOf(a.camera)):0}willUpdate(e){(e.has("microphoneState")||e.has("overriddenLiveConfig"))&&this._mediaActionsController.setOptions({playerSelector:P,...this.overriddenLiveConfig?.auto_play&&{autoPlayConditions:this.overriddenLiveConfig.auto_play},...this.overriddenLiveConfig?.auto_pause&&{autoPauseConditions:this.overriddenLiveConfig.auto_pause},...this.overriddenLiveConfig?.auto_mute&&{autoMuteConditions:this.overriddenLiveConfig.auto_mute},...this.overriddenLiveConfig?.auto_unmute&&{autoUnmuteConditions:this.overriddenLiveConfig.auto_unmute},...(this.overriddenLiveConfig?.auto_unmute||this.overriddenLiveConfig?.auto_mute)&&{microphoneState:this.microphoneState,microphoneMuteSeconds:this.overriddenLiveConfig.microphone.mute_after_microphone_mute_seconds}})}_getPlugins(){return[T({...this.overriddenLiveConfig?.lazy_load&&{lazyLoadCallback:(e,a)=>this._lazyloadOrUnloadSlide("load",e,a)},lazyUnloadConditions:this.overriddenLiveConfig?.lazy_unload,lazyUnloadCallback:(e,a)=>this._lazyloadOrUnloadSlide("unload",e,a)}),N(),k()]}_getLazyLoadCount(){return!1===this.overriddenLiveConfig?.lazy_load?null:0}_getSlides(){if(!this.cameraManager)return[[],{}];const e=this.viewManagerEpoch?.manager.getView(),a=this.viewFilterCameraID?new Set([this.viewFilterCameraID]):this.cameraManager?.getStore().getCameraIDsWithCapability("live"),i=[],t={};for(const[r,o]of this.cameraManager.getStore().getCameraConfigEntries(a)){const a=this._getSubstreamCameraID(r,e),s=r===a?o:this.cameraManager?.getStore().getCameraConfig(a),n=s?this._renderLive(a,s):null;n&&(t[r]=i.length,i.push(n))}return[i,t]}_setViewHandler(e){const a=this.cameraManager?.getStore().getCameraIDsWithCapability("live");a?.size&&e.detail.index!==this._getSelectedCameraIndex()&&this._setViewCameraID([...a][e.detail.index])}_setViewCameraID(e){e&&this.viewManagerEpoch?.manager.setViewByParametersWithNewQuery({params:{camera:e}})}_lazyloadOrUnloadSlide(e,a,i){i instanceof HTMLSlotElement&&(i=i.assignedElements({flatten:!0})[0]);const t=i?.querySelector(P);t&&(t.load="load"===e)}_renderLive(e,a){if(!(this.overriddenLiveConfig&&this.nonOverriddenLiveConfig&&this.hass&&this.cameraManager&&this.conditionsManagerEpoch))return;let i=null;try{i=I(this.conditionsManagerEpoch.manager,{live:this.nonOverriddenLiveConfig},{configOverrides:this.overrides,stateOverrides:{camera:e},schema:M}).live}catch(e){return _(this,e)}const t=this.cameraManager.getCameraMetadata(e),r=this.viewManagerEpoch?.manager.getView();return h`
      <div class="embla__slide">
        <advanced-camera-card-live-provider
          ?load=${!i.lazy_load}
          .microphoneState=${r?.camera===e?this.microphoneState:void 0}
          .cameraConfig=${a}
          .cameraEndpoints=${D([this.cameraManager,e],(()=>this.cameraManager?.getCameraEndpoints(e)??void 0))}
          .label=${t?.title??""}
          .liveConfig=${i}
          .hass=${this.hass}
          .cardWideConfig=${this.cardWideConfig}
          .zoomSettings=${r?.context?.zoom?.[e]?.requested}
          @advanced-camera-card:zoom:change=${a=>f(a,this.viewManagerEpoch?.manager,e)}
        >
        </advanced-camera-card-live-provider>
      </div>
    `}_getSubstreamCameraID(e,a){return a?.context?.live?.overrides?.get(e)??e}_getCameraNeighbors(){const e=this.cameraManager?[...this.cameraManager?.getStore().getCameraIDsWithCapability("live")]:[],a=this.viewManagerEpoch?.manager.getView();if(this.viewFilterCameraID||e.length<=1||!a||!this.hass)return{};const i=this.viewFilterCameraID??a.camera,t=e.indexOf(i);if(t<0)return{};const r=e[t>0?t-1:e.length-1],o=e[t+1<e.length?t+1:0];return{previous:{id:r,metadata:r?this.cameraManager?.getCameraMetadata(this._getSubstreamCameraID(r,a)):null},next:{id:o,metadata:o?this.cameraManager?.getCameraMetadata(this._getSubstreamCameraID(o,a)):null}}}_renderNextPrevious(e,a){const i=w(this),t="ltr"===i&&"left"===e||"rtl"===i&&"right"===e?a?.previous:a?.next;return h`<advanced-camera-card-next-previous-control
      slot=${e}
      .hass=${this.hass}
      .side=${e}
      .controlConfig=${this.overriddenLiveConfig?.controls.next_previous}
      .label=${t?.metadata?.title??""}
      .icon=${t?.metadata?.icon}
      ?disabled=${!t}
      @click=${e=>{this._setViewCameraID(t?.id),b(e)}}
    >
    </advanced-camera-card-next-previous-control>`}render(){const e=this.viewManagerEpoch?.manager.getView();if(!(this.overriddenLiveConfig&&this.hass&&e&&this.cameraManager))return;const[a,i]=this._getSlides();if(this._cameraToSlide=i,!a.length)return;const t=a.length>1,r=this._getCameraNeighbors(),o=!(!this._mediaHasLoaded||this.viewFilterCameraID&&this.viewFilterCameraID!==e.camera||!1===e.context?.ptzControls?.enabled)&&e.context?.ptzControls?.enabled;return h`
      <advanced-camera-card-carousel
        ${m(this._refCarousel)}
        .loop=${t}
        .dragEnabled=${t&&this.overriddenLiveConfig?.draggable}
        .plugins=${D([this.cameraManager,this.overriddenLiveConfig],this._getPlugins.bind(this))}
        .selected=${this._getSelectedCameraIndex()}
        transitionEffect=${this._getTransitionEffect()}
        @advanced-camera-card:carousel:select=${this._setViewHandler.bind(this)}
        @advanced-camera-card:media:loaded=${()=>{this._mediaHasLoaded=!0}}
        @advanced-camera-card:media:unloaded=${()=>{this._mediaHasLoaded=!1}}
      >
        ${this._renderNextPrevious("left",r)}
        <!-- -->
        ${a}
        <!-- -->
        ${this._renderNextPrevious("right",r)}
      </advanced-camera-card-carousel>
      <advanced-camera-card-ptz
        .config=${this.overriddenLiveConfig.controls.ptz}
        .cameraManager=${this.cameraManager}
        .cameraID=${y(e,this.viewFilterCameraID)}
        .forceVisibility=${o}
      >
      </advanced-camera-card-ptz>
    `}_setMediaTarget(){const e=this.viewManagerEpoch?.manager.getView(),a=this._getSelectedCameraIndex();this.viewFilterCameraID?this._mediaActionsController.setTarget(a,e?.camera===this.viewFilterCameraID):this._mediaActionsController.setTarget(a,!0)}updated(e){super.updated(e);let a=!1;!this._mediaActionsController.hasRoot()&&this._refCarousel.value&&(this._mediaActionsController.initialize(this._refCarousel.value),a=!0),(a||e.has("viewManagerEpoch"))&&this._setMediaTarget()}static get styles(){return u(":host {\n  display: block;\n  --video-max-height: none;\n}\n\n:host(:not([grid-id])) {\n  height: 100%;\n}\n\n:host([unselected]) advanced-camera-card-carousel {\n  pointer-events: none;\n}\n\n.embla__slide {\n  display: flex;\n  justify-content: center;\n  height: 100%;\n  flex: 0 0 100%;\n}")}};a([i({attribute:!1})],x.prototype,"hass",void 0),a([i({attribute:!1})],x.prototype,"viewManagerEpoch",void 0),a([i({attribute:!1})],x.prototype,"nonOverriddenLiveConfig",void 0),a([i({attribute:!1})],x.prototype,"overriddenLiveConfig",void 0),a([i({attribute:!1,hasChanged:C})],x.prototype,"overrides",void 0),a([i({attribute:!1})],x.prototype,"conditionsManagerEpoch",void 0),a([i({attribute:!1})],x.prototype,"cardWideConfig",void 0),a([i({attribute:!1})],x.prototype,"cameraManager",void 0),a([i({attribute:!1})],x.prototype,"microphoneState",void 0),a([i({attribute:!1})],x.prototype,"viewFilterCameraID",void 0),a([t()],x.prototype,"_mediaHasLoaded",void 0),x=a([r("advanced-camera-card-live-carousel")],x);let Z=class extends o{_renderCarousel(e){const a=this.viewManagerEpoch?.manager.getView(),i=e??a?.camera;return h`
      <advanced-camera-card-live-carousel
        grid-id=${L(e)}
        .hass=${this.hass}
        .viewManagerEpoch=${this.viewManagerEpoch}
        .viewFilterCameraID=${e}
        .nonOverriddenLiveConfig=${this.nonOverriddenLiveConfig}
        .overriddenLiveConfig=${this.overriddenLiveConfig}
        .conditionsManagerEpoch=${this.conditionsManagerEpoch}
        .overrides=${this.overrides}
        .cardWideConfig=${this.cardWideConfig}
        .cameraManager=${this.cameraManager}
        .microphoneState=${this.microphoneState}
        ?triggered=${i&&!!this.triggeredCameraIDs?.has(i)}
      >
      </advanced-camera-card-live-carousel>
    `}_gridSelectCamera(e){this.viewManagerEpoch?.manager.setViewByParameters({params:{camera:e}})}_needsGrid(){const e=this.cameraManager?.getStore().getCameraIDsWithCapability("live"),a=this.viewManagerEpoch?.manager.getView();return!!a?.isGrid()&&!!a?.supportsMultipleDisplayModes()&&!!e&&e.size>1}willUpdate(e){e.has("viewManagerEpoch")&&this._needsGrid()&&import("./media-grid-90ef6302.js")}render(){if(!this.conditionsManagerEpoch||!this.nonOverriddenLiveConfig)return;const e=this.cameraManager?.getStore().getCameraIDsWithCapability("live");return e?.size&&this._needsGrid()?h`
      <advanced-camera-card-media-grid
        .selected=${this.viewManagerEpoch?.manager.getView()?.camera}
        .displayConfig=${this.overriddenLiveConfig?.display}
        @advanced-camera-card:media-grid:selected=${e=>this._gridSelectCamera(e.detail.selected)}
      >
        ${[...e].map((e=>this._renderCarousel(e)))}
      </advanced-camera-card-media-grid>
    `:this._renderCarousel()}static get styles(){return u(":host {\n  width: 100%;\n  height: 100%;\n  display: block;\n}\n\n@keyframes warning-pulse {\n  0% {\n    border: solid 2px var(--advanced-camera-card-triggered-color-1, rgba(0, 0, 0, 0));\n  }\n  50% {\n    border: solid 2px var(--advanced-camera-card-triggered-color-2, var(--warning-color));\n  }\n  100% {\n    border: solid 2px var(--advanced-camera-card-triggered-color-1, rgba(0, 0, 0, 0));\n  }\n}\nadvanced-camera-card-live-carousel[triggered] {\n  animation: warning-pulse 5s infinite;\n}\n\nadvanced-camera-card-live-carousel[selected] {\n  --advanced-camera-card-triggered-color-1: var(--primary-color);\n}")}};a([i({attribute:!1})],Z.prototype,"hass",void 0),a([i({attribute:!1})],Z.prototype,"viewManagerEpoch",void 0),a([i({attribute:!1})],Z.prototype,"nonOverriddenLiveConfig",void 0),a([i({attribute:!1})],Z.prototype,"overriddenLiveConfig",void 0),a([i({attribute:!1,hasChanged:C})],Z.prototype,"overrides",void 0),a([i({attribute:!1})],Z.prototype,"conditionsManagerEpoch",void 0),a([i({attribute:!1})],Z.prototype,"cardWideConfig",void 0),a([i({attribute:!1})],Z.prototype,"cameraManager",void 0),a([i({attribute:!1})],Z.prototype,"microphoneState",void 0),a([i({attribute:!1})],Z.prototype,"triggeredCameraIDs",void 0),Z=a([r("advanced-camera-card-live-grid")],Z);let W=class extends o{constructor(){super(...arguments),this._controller=new z(this)}render(){if(this.hass&&this.nonOverriddenLiveConfig&&this.cameraManager)return h`
      <advanced-camera-card-live-grid
        .hass=${this.hass}
        .viewManagerEpoch=${this.viewManagerEpoch}
        .nonOverriddenLiveConfig=${this.nonOverriddenLiveConfig}
        .overriddenLiveConfig=${this.overriddenLiveConfig}
        .inBackground=${this._controller.isInBackground()}
        .conditionsManagerEpoch=${this.conditionsManagerEpoch}
        .overrides=${this.overrides}
        .cardWideConfig=${this.cardWideConfig}
        .cameraManager=${this.cameraManager}
        .microphoneState=${this.microphoneState}
        .triggeredCameraIDs=${this.triggeredCameraIDs}
      >
      </advanced-camera-card-live-grid>
    `}static get styles(){return u(A)}};a([i({attribute:!1})],W.prototype,"conditionsManagerEpoch",void 0),a([i({attribute:!1})],W.prototype,"hass",void 0),a([i({attribute:!1})],W.prototype,"viewManagerEpoch",void 0),a([i({attribute:!1})],W.prototype,"nonOverriddenLiveConfig",void 0),a([i({attribute:!1})],W.prototype,"overriddenLiveConfig",void 0),a([i({attribute:!1,hasChanged:C})],W.prototype,"overrides",void 0),a([i({attribute:!1})],W.prototype,"cameraManager",void 0),a([i({attribute:!1})],W.prototype,"cardWideConfig",void 0),a([i({attribute:!1})],W.prototype,"microphoneState",void 0),a([i({attribute:!1})],W.prototype,"triggeredCameraIDs",void 0),W=a([r("advanced-camera-card-live")],W);export{W as AdvancedCameraCardLive};
