import{d6 as e,_ as a,n as i,b as t,t as r,a as o,d7 as s,d8 as n,x as d,a4 as c,l,d9 as h,Q as g,da as m,r as v,d5 as C,db as p,dc as u,dd as I,de as M,df as _,dg as b}from"./card-590da7c8.js";import{i as w}from"./media-dimensions-container-5468a718.js";import{L as f,d as y,M as A,a as D,A as j}from"./dispatch-live-error-a392d0cf.js";import{g as $}from"./live-provider-5c5a3d0c.js";class L{constructor(e){this._inBackground=!1,this._lastMediaLoadedInfo=null,this._handleMediaLoaded=e=>{this._lastMediaLoadedInfo={source:e.composedPath()[0],mediaLoadedInfo:e.detail},this._inBackground&&e.stopPropagation()},this._host=e,e.addController(this),this._intersectionObserver=new IntersectionObserver(this._intersectionHandler.bind(this))}hostConnected(){this._intersectionObserver.observe(this._host),this._host.addEventListener("advanced-camera-card:media:loaded",this._handleMediaLoaded)}hostDisconnected(){this._intersectionObserver.disconnect(),this._host.removeEventListener("advanced-camera-card:media:loaded",this._handleMediaLoaded)}isInBackground(){return this._inBackground}_intersectionHandler(a){const i=this._inBackground;this._inBackground=!a.some((e=>e.isIntersecting)),!this._inBackground&&this._lastMediaLoadedInfo&&e(this._lastMediaLoadedInfo.source,this._lastMediaLoadedInfo.mediaLoadedInfo),i!==this._inBackground&&this._host.requestUpdate()}}let S=class extends o{constructor(){super(),this.label="",this._isVideoMediaLoaded=!1,this._hasProviderError=!1,this._showStreamTroubleshooting=!1,this._refProvider=s(),this._lazyLoadController=new f(this),this._importPromises=[],this._lazyLoadController.addListener((e=>{e||(this._isVideoMediaLoaded=!1,n(this))}))}async getMediaPlayerController(){return await this.updateComplete,await(this._refProvider.value?.getMediaPlayerController())??null}_shouldShowImageDuringLoading(){return!(this._isVideoMediaLoaded||!this.camera?.getConfig()?.camera_entity||!this.hass||!this.liveConfig?.show_image_during_load||this._showStreamTroubleshooting||this._hasProviderError)}disconnectedCallback(){this._isVideoMediaLoaded=!1,super.disconnectedCallback()}_videoMediaShowHandler(){this._isVideoMediaLoaded=!0,this._showStreamTroubleshooting=!1}_providerErrorHandler(){this._hasProviderError=!0}willUpdate(e){if((e.has("liveConfig")||!this._lazyLoadController&&this.liveConfig)&&this._lazyLoadController.setConfiguration(this.liveConfig?.lazy_load,this.liveConfig?.lazy_unload),e.has("liveConfig")&&(this.liveConfig?.show_image_during_load&&this._importPromises.push(import("./image-b2bf6aae.js")),this.liveConfig?.zoomable&&this._importPromises.push(import("./zoomer-f9744213.js"))),e.has("camera")){const e=$(this.camera?.getConfig());"jsmpeg"===e?this._importPromises.push(import("./jsmpeg-e4410f2f.js")):"ha"===e?this._importPromises.push(import("./ha-6716a43a.js")):"webrtc-card"===e?this._importPromises.push(import("./webrtc-card-136308f2.js")):"image"===e?this._importPromises.push(import("./image-b2bf6aae.js")):"go2rtc"===e&&this._importPromises.push(import("./index-32ef3ecf.js"))}}async getUpdateComplete(){const e=await super.getUpdateComplete();return await Promise.all(this._importPromises),this._importPromises=[],e}_renderContainer(e){const a=this.camera?.getConfig(),i=d` <advanced-camera-card-media-dimensions-container
      .dimensionsConfig=${a?.dimensions}
      @advanced-camera-card:media:loaded=${e=>{e.detail.placeholder?e.stopPropagation():this._videoMediaShowHandler()}}
    >
      ${e}
    </advanced-camera-card-media-dimensions-container>`;return d` ${this.liveConfig?.zoomable?d` <advanced-camera-card-zoomer
          .defaultSettings=${w([a?.dimensions?.layout],(()=>a?.dimensions?.layout?{pan:a.dimensions.layout.pan,zoom:a.dimensions.layout.zoom}:void 0))}
          .settings=${this.zoomSettings}
          @advanced-camera-card:zoom:zoomed=${async()=>(await this.getMediaPlayerController())?.setControls(!1)}
          @advanced-camera-card:zoom:unzoomed=${async()=>(await this.getMediaPlayerController())?.setControls()}
        >
          ${i}
        </advanced-camera-card-zoomer>`:i}`}render(){const e=this.camera?.getConfig();if(!(this._lazyLoadController?.isLoaded()&&this.hass&&this.liveConfig&&this.camera&&e))return;this.title=this.label,this.ariaLabel=this.label;const a=$(this.camera?.getConfig());if("ha"===a||"image"===a||e?.camera_entity&&e.always_error_if_entity_unavailable){if(!e?.camera_entity)return y(this),c({message:l("error.no_live_camera"),type:"error",icon:"mdi:camera",context:e});const a=this.hass.states[e.camera_entity];if(!a)return y(this),c({message:l("error.live_camera_not_found"),type:"error",icon:"mdi:camera",context:e});if("unavailable"===a.state)return y(this),n(this),c({message:`${l("error.live_camera_unavailable")}${this.label?`: ${this.label}`:""}`,type:"info",icon:"mdi:cctv-off",dotdotdot:!0})}const i=this._shouldShowImageDuringLoading(),t=!this._isVideoMediaLoaded,r={hidden:i};return d`${this._renderContainer(d`
      ${i||"image"===a?d` <advanced-camera-card-live-image
            ${h(this._refProvider)}
            .hass=${this.hass}
            .cameraConfig=${e}
            class=${g({...r,hidden:!1})}
            @advanced-camera-card:live:error=${()=>this._providerErrorHandler()}
            @advanced-camera-card:media:loaded=${e=>{e.detail.placeholder="image"!==a}}
          >
          </advanced-camera-card-live-image>`:d``}
      ${"ha"===a?d` <advanced-camera-card-live-ha
            ${h(this._refProvider)}
            class=${g(r)}
            .hass=${this.hass}
            .cameraConfig=${e}
            ?controls=${this.liveConfig.controls.builtin}
            @advanced-camera-card:live:error=${()=>this._providerErrorHandler()}
          >
          </advanced-camera-card-live-ha>`:"go2rtc"===a?d`<advanced-camera-card-live-go2rtc
              ${h(this._refProvider)}
              class=${g(r)}
              .hass=${this.hass}
              .camera=${this.camera}
              .cameraEndpoints=${this.cameraEndpoints}
              .microphoneState=${this.microphoneState}
              .microphoneConfig=${this.liveConfig.microphone}
              ?controls=${this.liveConfig.controls.builtin}
              @advanced-camera-card:live:error=${()=>this._providerErrorHandler()}
            >
            </advanced-camera-card-live-go2rtc>`:"webrtc-card"===a?d`<advanced-camera-card-live-webrtc-card
                ${h(this._refProvider)}
                class=${g(r)}
                .hass=${this.hass}
                .cameraConfig=${e}
                .cameraEndpoints=${this.cameraEndpoints}
                .cardWideConfig=${this.cardWideConfig}
                ?controls=${this.liveConfig.controls.builtin}
                @advanced-camera-card:live:error=${()=>this._providerErrorHandler()}
              >
              </advanced-camera-card-live-webrtc-card>`:"jsmpeg"===a?d` <advanced-camera-card-live-jsmpeg
                  ${h(this._refProvider)}
                  class=${g(r)}
                  .hass=${this.hass}
                  .cameraConfig=${e}
                  .cameraEndpoints=${this.cameraEndpoints}
                  .cardWideConfig=${this.cardWideConfig}
                  @advanced-camera-card:live:error=${()=>this._providerErrorHandler()}
                >
                </advanced-camera-card-live-jsmpeg>`:d``}
    `)}
    ${t?d`<advanced-camera-card-icon
          title=${l("error.awaiting_live")}
          .icon=${{icon:"mdi:progress-helper"}}
          @click=${()=>{this._showStreamTroubleshooting=!this._showStreamTroubleshooting}}
        ></advanced-camera-card-icon>`:""}
    ${this._showStreamTroubleshooting?c({type:"error",icon:"mdi:camera-off",message:l("error.stream_not_loading"),url:{link:m,title:l("error.troubleshooting")}},{overlay:!0}):""}`}static get styles(){return v(':host {\n  background-color: var(--advanced-camera-card-background);\n  background-position: center;\n  background-repeat: no-repeat;\n  background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgaW5rc2NhcGU6dmVyc2lvbj0iMS4yLjIgKGIwYTg0ODY1NDEsIDIwMjItMTItMDEpIgogICBzb2RpcG9kaTpkb2NuYW1lPSJpcmlzLW91dGxpbmUuc3ZnIgogICBpZD0ic3ZnNCIKICAgdmVyc2lvbj0iMS4xIgogICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIgogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGRlZnMKICAgICBpZD0iZGVmczgiIC8+CiAgPHNvZGlwb2RpOm5hbWVkdmlldwogICAgIGlkPSJuYW1lZHZpZXc2IgogICAgIHBhZ2Vjb2xvcj0iI2I5M2UzZSIKICAgICBib3JkZXJjb2xvcj0iIzAwMDAwMCIKICAgICBib3JkZXJvcGFjaXR5PSIwLjI1IgogICAgIGlua3NjYXBlOnNob3dwYWdlc2hhZG93PSIyIgogICAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwLjYwNzg0MzE0IgogICAgIGlua3NjYXBlOnBhZ2VjaGVja2VyYm9hcmQ9ImZhbHNlIgogICAgIGlua3NjYXBlOmRlc2tjb2xvcj0iI2QxZDFkMSIKICAgICBzaG93Z3JpZD0iZmFsc2UiCiAgICAgaW5rc2NhcGU6em9vbT0iMTkuMzc4NTc4IgogICAgIGlua3NjYXBlOmN4PSI4LjI4MjM0MTUiCiAgICAgaW5rc2NhcGU6Y3k9IjEyLjM1OTAwOCIKICAgICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjM4NDAiCiAgICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iMTUyNyIKICAgICBpbmtzY2FwZTp3aW5kb3cteD0iMTA4MCIKICAgICBpbmtzY2FwZTp3aW5kb3cteT0iMjI3IgogICAgIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiCiAgICAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0ic3ZnNCIgLz4KICA8ZwogICAgIGlkPSJnMTExOSIKICAgICBzdHlsZT0iZmlsbC1vcGFjaXR5OjAuMDU7ZmlsbDojZmZmZmZmIj4KICAgIDxjaXJjbGUKICAgICAgIHN0eWxlPSJkaXNwbGF5OmlubGluZTtmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjAuNDk3ODI4MjU7c3Ryb2tlLXdpZHRoOjEuMzk3Mjk7b3BhY2l0eTowLjUiCiAgICAgICBpZD0icGF0aDE3MCIKICAgICAgIGN4PSIxMiIKICAgICAgIGN5PSIxMiIKICAgICAgIGlua3NjYXBlOmxhYmVsPSJCYWNrZ3JvdW5kIgogICAgICAgcj0iMTEuMjUiIC8+CiAgICA8cGF0aAogICAgICAgZD0iTSAxMy43MzAwMDEsMTUgOS44MzAwMDAzLDIxLjc2IEMgMTAuNTMsMjEuOTEgMTEuMjUsMjIgMTIsMjIgYyAyLjQwMDAwMSwwIDQuNiwtMC44NSA2LjMyLC0yLjI1IEwgMTQuNjYwMDAxLDEzLjQgTSAyLjQ2MDAwMDMsMTUgYyAwLjkyLDIuOTIgMy4xNSw1LjI2IDUuOTksNi4zNCBMIDEyLjEyLDE1IG0gLTMuNTc5OTk5NywtMyAtMy45LC02Ljc0OTk5OTYgYyAtMS42NCwxLjc0OTk5OSAtMi42NCw0LjEzOTk5OTMgLTIuNjQsNi43NDk5OTk2IDAsMC42OCAwLjA3LDEuMzUgMC4yLDIgaCA3LjQ5IE0gMjEuOCw5Ljk5OTk5OTcgSCAxNC4zMTAwMDEgTCAxNC42MDAwMDEsMTAuNSAxOS4zNiwxOC43NSBDIDIxLDE2Ljk3IDIyLDE0LjYgMjIsMTIgMjIsMTEuMzEgMjEuOTMsMTAuNjQgMjEuOCw5Ljk5OTk5OTcgbSAtMC4yNiwtMSBDIDIwLjYyLDYuMDcwMDAwNSAxOC4zOSwzLjc0MDAwMDIgMTUuNTUwMDAxLDIuNjYwMDAwMiBMIDExLjg4LDguOTk5OTk5NyBNIDkuNDAwMDAwMywxMC41IDE0LjE3MDAwMSwyLjI0MDAwMDIgYyAtMC43LC0wLjE1IC0xLjQyMDAwMSwtMC4yNCAtMi4xNzAwMDEsLTAuMjQgLTIuMzk5OTk5NywwIC00LjU5OTk5OTcsMC44NCAtNi4zMTk5OTk3LDIuMjUwMDAwMyBsIDMuNjYsNi4zNDk5OTk1IHoiCiAgICAgICBpZD0icGF0aDIiCiAgICAgICBpbmtzY2FwZTpsYWJlbD0iSXJpcyIKICAgICAgIHN0eWxlPSJmaWxsLW9wYWNpdHk6MC41MDIyMTAwMjtmaWxsOiNmZmZmZmY7b3BhY2l0eTowLjc1IiAvPgogIDwvZz4KPC9zdmc+Cg==");\n  background-size: 10%;\n  background-position: center;\n}\n\n:host {\n  width: 100%;\n  height: 100%;\n  display: block;\n}\n\n.zoom-wrapper {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n\n.hidden {\n  display: none;\n}\n\nadvanced-camera-card-icon {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  color: var(--primary-color);\n  cursor: help;\n}')}};a([i({attribute:!1})],S.prototype,"hass",void 0),a([i({attribute:!1})],S.prototype,"camera",void 0),a([i({attribute:!1})],S.prototype,"cameraEndpoints",void 0),a([i({attribute:!1})],S.prototype,"liveConfig",void 0),a([i({attribute:!1})],S.prototype,"label",void 0),a([i({attribute:!1})],S.prototype,"cardWideConfig",void 0),a([i({attribute:!1})],S.prototype,"microphoneState",void 0),a([i({attribute:!1})],S.prototype,"zoomSettings",void 0),a([t()],S.prototype,"_isVideoMediaLoaded",void 0),a([t()],S.prototype,"_hasProviderError",void 0),a([t()],S.prototype,"_showStreamTroubleshooting",void 0),S=a([r("advanced-camera-card-live-provider")],S);let T=class extends o{constructor(){super(...arguments),this._cameraToSlide={},this._refPTZControl=s(),this._refCarousel=s(),this._mediaActionsController=new A,this._mediaHeightController=new D(this,".embla__slide"),this._mediaHasLoaded=!1}connectedCallback(){super.connectedCallback(),this._mediaHeightController.setRoot(this.renderRoot),this.requestUpdate()}disconnectedCallback(){this._mediaActionsController.destroy(),this._mediaHeightController.destroy(),super.disconnectedCallback()}_getTransitionEffect(){return this.liveConfig?.transition_effect??C.live.transition_effect}_getSelectedCameraIndex(){if(this.viewFilterCameraID)return 0;const e=this.cameraManager?.getStore().getCameraIDsWithCapability("live"),a=this.viewManagerEpoch?.manager.getView();return e?.size&&a?Math.max(0,Array.from(e).indexOf(a.camera)):0}willUpdate(e){(e.has("microphoneState")||e.has("liveConfig"))&&this._mediaActionsController.setOptions({playerSelector:"advanced-camera-card-live-provider",...this.liveConfig?.auto_play&&{autoPlayConditions:this.liveConfig.auto_play},...this.liveConfig?.auto_pause&&{autoPauseConditions:this.liveConfig.auto_pause},...this.liveConfig?.auto_mute&&{autoMuteConditions:this.liveConfig.auto_mute},...this.liveConfig?.auto_unmute&&{autoUnmuteConditions:this.liveConfig.auto_unmute},...(this.liveConfig?.auto_unmute||this.liveConfig?.auto_mute)&&{microphoneState:this.microphoneState,microphoneMuteSeconds:this.liveConfig.microphone.mute_after_microphone_mute_seconds}})}_getPlugins(){return[j()]}_getLazyLoadCount(){return!1===this.liveConfig?.lazy_load?null:0}_getSlides(){if(!this.cameraManager)return[[],{}];const e=this.viewManagerEpoch?.manager.getView(),a=this.viewFilterCameraID?new Set([this.viewFilterCameraID]):this.cameraManager?.getStore().getCameraIDsWithCapability("live"),i=[],t={};for(const r of a??[]){const a=this._renderLive(this._getSubstreamCameraID(r,e));a&&(t[r]=i.length,i.push(a))}return[i,t]}_setViewHandler(e){const a=this.cameraManager?.getStore().getCameraIDsWithCapability("live");a?.size&&e.detail.index!==this._getSelectedCameraIndex()&&this._setViewCameraID([...a][e.detail.index])}_setViewCameraID(e){e&&this.viewManagerEpoch?.manager.setViewByParametersWithNewQuery({params:{camera:e}})}_renderLive(e){const a=this.cameraManager?.getStore().getCamera(e);if(!(this.liveConfig&&this.hass&&this.cameraManager&&a))return;const i=this.cameraManager.getCameraMetadata(e),t=this.viewManagerEpoch?.manager.getView();return d`
      <div class="embla__slide">
        <advanced-camera-card-live-provider
          .microphoneState=${t?.camera===e?this.microphoneState:void 0}
          .camera=${a}
          .cameraEndpoints=${w([this.cameraManager,e],(()=>this.cameraManager?.getCameraEndpoints(e)??void 0))}
          .label=${i?.title??""}
          .liveConfig=${this.liveConfig}
          .hass=${this.hass}
          .cardWideConfig=${this.cardWideConfig}
          .zoomSettings=${t?.context?.zoom?.[e]?.requested}
          @advanced-camera-card:zoom:change=${a=>p(a,this.viewManagerEpoch?.manager,e)}
        >
        </advanced-camera-card-live-provider>
      </div>
    `}_getSubstreamCameraID(e,a){return a?.context?.live?.overrides?.get(e)??e}_getCameraNeighbors(){const e=this.cameraManager?[...this.cameraManager?.getStore().getCameraIDsWithCapability("live")]:[],a=this.viewManagerEpoch?.manager.getView();if(this.viewFilterCameraID||e.length<=1||!a||!this.hass)return{};const i=this.viewFilterCameraID??a.camera,t=e.indexOf(i);if(t<0)return{};const r=e[t>0?t-1:e.length-1],o=e[t+1<e.length?t+1:0];return{previous:{id:r,metadata:r?this.cameraManager?.getCameraMetadata(this._getSubstreamCameraID(r,a)):null},next:{id:o,metadata:o?this.cameraManager?.getCameraMetadata(this._getSubstreamCameraID(o,a)):null}}}_renderNextPrevious(e,a){const i=u(this),t="ltr"===i&&"left"===e||"rtl"===i&&"right"===e?a?.previous:a?.next;return d`<advanced-camera-card-next-previous-control
      slot=${e}
      .hass=${this.hass}
      .side=${e}
      .controlConfig=${this.liveConfig?.controls.next_previous}
      .label=${t?.metadata?.title??""}
      .icon=${t?.metadata?.icon}
      ?disabled=${!t}
      @click=${e=>{this._setViewCameraID(t?.id),I(e)}}
    >
    </advanced-camera-card-next-previous-control>`}render(){const e=this.viewManagerEpoch?.manager.getView();if(!(this.liveConfig&&this.hass&&e&&this.cameraManager))return;const[a,i]=this._getSlides();if(this._cameraToSlide=i,!a.length)return;const t=a.length>1,r=this._getCameraNeighbors(),o=!(!this._mediaHasLoaded||this.viewFilterCameraID&&this.viewFilterCameraID!==e.camera||!1===e.context?.ptzControls?.enabled)&&e.context?.ptzControls?.enabled;return d`
      <advanced-camera-card-carousel
        ${h(this._refCarousel)}
        .loop=${t}
        .dragEnabled=${t&&this.liveConfig?.draggable}
        .plugins=${w([this.cameraManager,this.liveConfig],this._getPlugins.bind(this))}
        .selected=${this._getSelectedCameraIndex()}
        .wheelScrolling=${this.liveConfig?.controls.wheel}
        transitionEffect=${this._getTransitionEffect()}
        @advanced-camera-card:carousel:select=${this._setViewHandler.bind(this)}
        @advanced-camera-card:media:loaded=${()=>{this._mediaHasLoaded=!0,this._mediaHeightController.recalculate()}}
        @advanced-camera-card:media:unloaded=${()=>{this._mediaHasLoaded=!1}}
      >
        ${this._renderNextPrevious("left",r)}
        <!-- -->
        ${a}
        <!-- -->
        ${this._renderNextPrevious("right",r)}
      </advanced-camera-card-carousel>
      <advanced-camera-card-ptz
        .hass=${this.hass}
        .config=${this.liveConfig.controls.ptz}
        .cameraManager=${this.cameraManager}
        .cameraID=${M(e,this.viewFilterCameraID)}
        .forceVisibility=${o}
      >
      </advanced-camera-card-ptz>
    `}_setMediaTarget(){const e=this.viewManagerEpoch?.manager.getView(),a=this._getSelectedCameraIndex();this.viewFilterCameraID?this._mediaActionsController.setTarget(a,e?.camera===this.viewFilterCameraID):this._mediaActionsController.setTarget(a,!0),this._mediaHeightController.setSelected(a)}updated(e){super.updated(e);(!!this._refCarousel.value&&this._mediaActionsController.setRoot(this._refCarousel.value)||e.has("viewManagerEpoch"))&&this._setMediaTarget()}static get styles(){return v(":host {\n  display: block;\n  --video-max-height: none;\n  transition: max-height 0.1s ease-in-out;\n  position: relative;\n  border-radius: var(--advanced-camera-card-border-radius-final);\n  overflow: hidden;\n}\n\n:host(:not([grid-id])) {\n  height: 100%;\n}\n\n:host([unselected]) advanced-camera-card-carousel {\n  pointer-events: none;\n}\n\n.embla__slide {\n  display: flex;\n  height: 100%;\n  width: 100%;\n  flex: 0 0 100%;\n}")}};a([i({attribute:!1})],T.prototype,"hass",void 0),a([i({attribute:!1})],T.prototype,"viewManagerEpoch",void 0),a([i({attribute:!1})],T.prototype,"liveConfig",void 0),a([i({attribute:!1})],T.prototype,"cardWideConfig",void 0),a([i({attribute:!1})],T.prototype,"cameraManager",void 0),a([i({attribute:!1})],T.prototype,"microphoneState",void 0),a([i({attribute:!1})],T.prototype,"viewFilterCameraID",void 0),a([t()],T.prototype,"_mediaHasLoaded",void 0),T=a([r("advanced-camera-card-live-carousel")],T);let E=class extends o{_renderCarousel(e){const a=this.viewManagerEpoch?.manager.getView(),i=e??a?.camera,t=e?this.cameraManager?.getStore().getCameraConfig(e)?.dimensions?.grid?.width_factor:void 0;return d`
      <advanced-camera-card-live-carousel
        grid-id=${_(e)}
        grid-width-factor=${_(t)}
        .hass=${this.hass}
        .viewManagerEpoch=${this.viewManagerEpoch}
        .viewFilterCameraID=${e}
        .liveConfig=${this.liveConfig}
        .cardWideConfig=${this.cardWideConfig}
        .cameraManager=${this.cameraManager}
        .microphoneState=${this.microphoneState}
        ?triggered=${i&&!!this.triggeredCameraIDs?.has(i)}
      >
      </advanced-camera-card-live-carousel>
    `}_gridSelectCamera(e){this.viewManagerEpoch?.manager.setViewByParameters({params:{camera:e}})}_needsGrid(){const e=this.cameraManager?.getStore().getCameraIDsWithCapability("live"),a=this.viewManagerEpoch?.manager.getView();return!!a?.isGrid()&&!!a?.supportsMultipleDisplayModes()&&!!e&&e.size>1}willUpdate(e){e.has("viewManagerEpoch")&&this._needsGrid()&&import("./media-grid-9ee6c2dc.js")}render(){const e=this.cameraManager?.getStore().getCameraIDsWithCapability("live");return e?.size&&this._needsGrid()?d`
      <advanced-camera-card-media-grid
        .selected=${this.viewManagerEpoch?.manager.getView()?.camera}
        .displayConfig=${this.liveConfig?.display}
        @advanced-camera-card:media-grid:selected=${e=>this._gridSelectCamera(e.detail.selected)}
      >
        ${[...e].map((e=>this._renderCarousel(e)))}
      </advanced-camera-card-media-grid>
    `:this._renderCarousel()}static get styles(){return v(":host {\n  width: 100%;\n  height: 100%;\n  display: block;\n}\n\n@keyframes warning-pulse {\n  0% {\n    border: solid 2px var(--trigger-border-color-base);\n  }\n  50% {\n    border: solid 2px var(--trigger-border-color);\n  }\n  100% {\n    border: solid 2px var(--trigger-border-color-base);\n  }\n}\nadvanced-camera-card-live-carousel {\n  --trigger-border-color: var(--advanced-camera-card-trigger-border-color);\n  --trigger-border-color-base: var(\n    --advanced-camera-card-trigger-border-color-base,\n    black\n  );\n}\n\nadvanced-camera-card-live-carousel[triggered] {\n  animation: warning-pulse 5s infinite;\n}\n\nadvanced-camera-card-live-carousel[selected] {\n  --trigger-border-color-base: var(\n    --advanced-camera-card-trigger-border-color-base,\n    var(--advanced-camera-card-foreground-primary)\n  );\n}")}};a([i({attribute:!1})],E.prototype,"hass",void 0),a([i({attribute:!1})],E.prototype,"viewManagerEpoch",void 0),a([i({attribute:!1})],E.prototype,"liveConfig",void 0),a([i({attribute:!1})],E.prototype,"cardWideConfig",void 0),a([i({attribute:!1})],E.prototype,"cameraManager",void 0),a([i({attribute:!1})],E.prototype,"microphoneState",void 0),a([i({attribute:!1})],E.prototype,"triggeredCameraIDs",void 0),E=a([r("advanced-camera-card-live-grid")],E);let N=class extends o{constructor(){super(...arguments),this._controller=new L(this)}render(){if(this.hass&&this.cameraManager)return d`
      <advanced-camera-card-live-grid
        .hass=${this.hass}
        .viewManagerEpoch=${this.viewManagerEpoch}
        .liveConfig=${this.liveConfig}
        .inBackground=${this._controller.isInBackground()}
        .cardWideConfig=${this.cardWideConfig}
        .cameraManager=${this.cameraManager}
        .microphoneState=${this.microphoneState}
        .triggeredCameraIDs=${this.triggeredCameraIDs}
      >
      </advanced-camera-card-live-grid>
    `}static get styles(){return v(b)}};a([i({attribute:!1})],N.prototype,"hass",void 0),a([i({attribute:!1})],N.prototype,"viewManagerEpoch",void 0),a([i({attribute:!1})],N.prototype,"liveConfig",void 0),a([i({attribute:!1})],N.prototype,"cameraManager",void 0),a([i({attribute:!1})],N.prototype,"cardWideConfig",void 0),a([i({attribute:!1})],N.prototype,"microphoneState",void 0),a([i({attribute:!1})],N.prototype,"triggeredCameraIDs",void 0),N=a([r("advanced-camera-card-live")],N);export{N as AdvancedCameraCardLive};
