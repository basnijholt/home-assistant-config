import{d2 as e,_ as a,n as i,b as t,t as r,a as o,d3 as s,d4 as n,d1 as d,x as c,a4 as l,l as g,d5 as h,e as m,d6 as v,r as C,d7 as p,d8 as u,d9 as I,da as M,db as _,dc as b}from"./card-1d564018.js";import{i as w}from"./media-dimensions-container-51253c0b.js";import{L as f,d as y,M as A,a as D,A as j}from"./dispatch-live-error-60e4bf2e.js";class ${constructor(e){this._inBackground=!1,this._lastMediaLoadedInfo=null,this._handleMediaLoaded=e=>{this._lastMediaLoadedInfo={source:e.composedPath()[0],mediaLoadedInfo:e.detail},this._inBackground&&e.stopPropagation()},this._host=e,e.addController(this),this._intersectionObserver=new IntersectionObserver(this._intersectionHandler.bind(this))}hostConnected(){this._intersectionObserver.observe(this._host),this._host.addEventListener("advanced-camera-card:media:loaded",this._handleMediaLoaded)}hostDisconnected(){this._intersectionObserver.disconnect(),this._host.removeEventListener("advanced-camera-card:media:loaded",this._handleMediaLoaded)}isInBackground(){return this._inBackground}_intersectionHandler(a){const i=this._inBackground;this._inBackground=!a.some((e=>e.isIntersecting)),!this._inBackground&&this._lastMediaLoadedInfo&&e(this._lastMediaLoadedInfo.source,this._lastMediaLoadedInfo.mediaLoadedInfo),i!==this._inBackground&&this._host.requestUpdate()}}let L=class extends o{constructor(){super(),this.label="",this._isVideoMediaLoaded=!1,this._hasProviderError=!1,this._showStreamTroubleshooting=!1,this._refProvider=s(),this._lazyLoadController=new f(this),this._importPromises=[],this._lazyLoadController.addListener((e=>{e||(this._isVideoMediaLoaded=!1,n(this))}))}async getMediaPlayerController(){return await this.updateComplete,await(this._refProvider.value?.getMediaPlayerController())??null}_getResolvedProvider(){return"auto"===this.cameraConfig?.live_provider?this.cameraConfig?.webrtc_card?.entity||this.cameraConfig?.webrtc_card?.url?"webrtc-card":this.cameraConfig?.camera_entity?"ha":this.cameraConfig?.frigate.camera_name?"jsmpeg":d.cameras.live_provider:this.cameraConfig?.live_provider||"image"}_shouldShowImageDuringLoading(){return!(this._isVideoMediaLoaded||!this.cameraConfig?.camera_entity||!this.hass||!this.liveConfig?.show_image_during_load||this._showStreamTroubleshooting||this._hasProviderError)}disconnectedCallback(){this._isVideoMediaLoaded=!1,super.disconnectedCallback()}_videoMediaShowHandler(){this._isVideoMediaLoaded=!0,this._showStreamTroubleshooting=!1}_providerErrorHandler(){this._hasProviderError=!0}willUpdate(e){if((e.has("liveConfig")||!this._lazyLoadController&&this.liveConfig)&&this._lazyLoadController.setConfiguration(this.liveConfig?.lazy_load,this.liveConfig?.lazy_unload),e.has("liveConfig")&&(this.liveConfig?.show_image_during_load&&this._importPromises.push(import("./image-1300186c.js")),this.liveConfig?.zoomable&&this._importPromises.push(import("./zoomer-9aa1ba0a.js"))),e.has("cameraConfig")){const e=this._getResolvedProvider();"jsmpeg"===e?this._importPromises.push(import("./jsmpeg-9d473ba1.js")):"ha"===e?this._importPromises.push(import("./ha-9dd4c134.js")):"webrtc-card"===e?this._importPromises.push(import("./webrtc-card-92b1efba.js")):"image"===e?this._importPromises.push(import("./image-1300186c.js")):"go2rtc"===e&&this._importPromises.push(import("./index-8ddd6475.js"))}}async getUpdateComplete(){const e=await super.getUpdateComplete();return await Promise.all(this._importPromises),this._importPromises=[],e}_renderContainer(e){const a=c` <advanced-camera-card-media-dimensions-container
      .dimensionsConfig=${this.cameraConfig?.dimensions}
      @advanced-camera-card:media:loaded=${e=>{e.detail.placeholder?e.stopPropagation():this._videoMediaShowHandler()}}
    >
      ${e}
    </advanced-camera-card-media-dimensions-container>`;return c` ${this.liveConfig?.zoomable?c` <advanced-camera-card-zoomer
          .defaultSettings=${w([this.cameraConfig?.dimensions?.layout],(()=>this.cameraConfig?.dimensions?.layout?{pan:this.cameraConfig.dimensions.layout.pan,zoom:this.cameraConfig.dimensions.layout.zoom}:void 0))}
          .settings=${this.zoomSettings}
          @advanced-camera-card:zoom:zoomed=${async()=>(await this.getMediaPlayerController())?.setControls(!1)}
          @advanced-camera-card:zoom:unzoomed=${async()=>(await this.getMediaPlayerController())?.setControls()}
        >
          ${a}
        </advanced-camera-card-zoomer>`:a}`}render(){if(!(this._lazyLoadController?.isLoaded()&&this.hass&&this.liveConfig&&this.cameraConfig))return;this.title=this.label,this.ariaLabel=this.label;const e=this._getResolvedProvider();if("ha"===e||"image"===e||this.cameraConfig?.camera_entity&&this.cameraConfig.always_error_if_entity_unavailable){if(!this.cameraConfig?.camera_entity)return y(this),l({message:g("error.no_live_camera"),type:"error",icon:"mdi:camera",context:this.cameraConfig});const e=this.hass.states[this.cameraConfig.camera_entity];if(!e)return y(this),l({message:g("error.live_camera_not_found"),type:"error",icon:"mdi:camera",context:this.cameraConfig});if("unavailable"===e.state)return y(this),n(this),l({message:`${g("error.live_camera_unavailable")}${this.label?`: ${this.label}`:""}`,type:"info",icon:"mdi:cctv-off",dotdotdot:!0})}const a=this._shouldShowImageDuringLoading(),i=!this._isVideoMediaLoaded,t={hidden:a};return c`${this._renderContainer(c`
      ${a||"image"===e?c` <advanced-camera-card-live-image
            ${h(this._refProvider)}
            .hass=${this.hass}
            .cameraConfig=${this.cameraConfig}
            class=${m({...t,hidden:!1})}
            @advanced-camera-card:live:error=${()=>this._providerErrorHandler()}
            @advanced-camera-card:media:loaded=${a=>{a.detail.placeholder="image"!==e}}
          >
          </advanced-camera-card-live-image>`:c``}
      ${"ha"===e?c` <advanced-camera-card-live-ha
            ${h(this._refProvider)}
            class=${m(t)}
            .hass=${this.hass}
            .cameraConfig=${this.cameraConfig}
            ?controls=${this.liveConfig.controls.builtin}
            @advanced-camera-card:live:error=${()=>this._providerErrorHandler()}
          >
          </advanced-camera-card-live-ha>`:"go2rtc"===e?c`<advanced-camera-card-live-go2rtc
              ${h(this._refProvider)}
              class=${m(t)}
              .hass=${this.hass}
              .cameraConfig=${this.cameraConfig}
              .cameraEndpoints=${this.cameraEndpoints}
              .microphoneState=${this.microphoneState}
              .microphoneConfig=${this.liveConfig.microphone}
              ?controls=${this.liveConfig.controls.builtin}
              @advanced-camera-card:live:error=${()=>this._providerErrorHandler()}
            >
            </advanced-camera-card-live-go2rtc>`:"webrtc-card"===e?c`<advanced-camera-card-live-webrtc-card
                ${h(this._refProvider)}
                class=${m(t)}
                .hass=${this.hass}
                .cameraConfig=${this.cameraConfig}
                .cameraEndpoints=${this.cameraEndpoints}
                .cardWideConfig=${this.cardWideConfig}
                ?controls=${this.liveConfig.controls.builtin}
                @advanced-camera-card:live:error=${()=>this._providerErrorHandler()}
              >
              </advanced-camera-card-live-webrtc-card>`:"jsmpeg"===e?c` <advanced-camera-card-live-jsmpeg
                  ${h(this._refProvider)}
                  class=${m(t)}
                  .hass=${this.hass}
                  .cameraConfig=${this.cameraConfig}
                  .cameraEndpoints=${this.cameraEndpoints}
                  .cardWideConfig=${this.cardWideConfig}
                  @advanced-camera-card:live:error=${()=>this._providerErrorHandler()}
                >
                </advanced-camera-card-live-jsmpeg>`:c``}
    `)}
    ${i?c`<advanced-camera-card-icon
          title=${g("error.awaiting_live")}
          .icon=${{icon:"mdi:progress-helper"}}
          @click=${()=>{this._showStreamTroubleshooting=!this._showStreamTroubleshooting}}
        ></advanced-camera-card-icon>`:""}
    ${this._showStreamTroubleshooting?l({type:"error",icon:"mdi:camera-off",message:g("error.stream_not_loading"),url:{link:v,title:g("error.troubleshooting")}},{overlay:!0}):""}`}static get styles(){return C(':host {\n  background-color: var(--advanced-camera-card-background);\n  background-position: center;\n  background-repeat: no-repeat;\n  background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgaW5rc2NhcGU6dmVyc2lvbj0iMS4yLjIgKGIwYTg0ODY1NDEsIDIwMjItMTItMDEpIgogICBzb2RpcG9kaTpkb2NuYW1lPSJpcmlzLW91dGxpbmUuc3ZnIgogICBpZD0ic3ZnNCIKICAgdmVyc2lvbj0iMS4xIgogICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIgogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGRlZnMKICAgICBpZD0iZGVmczgiIC8+CiAgPHNvZGlwb2RpOm5hbWVkdmlldwogICAgIGlkPSJuYW1lZHZpZXc2IgogICAgIHBhZ2Vjb2xvcj0iI2I5M2UzZSIKICAgICBib3JkZXJjb2xvcj0iIzAwMDAwMCIKICAgICBib3JkZXJvcGFjaXR5PSIwLjI1IgogICAgIGlua3NjYXBlOnNob3dwYWdlc2hhZG93PSIyIgogICAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwLjYwNzg0MzE0IgogICAgIGlua3NjYXBlOnBhZ2VjaGVja2VyYm9hcmQ9ImZhbHNlIgogICAgIGlua3NjYXBlOmRlc2tjb2xvcj0iI2QxZDFkMSIKICAgICBzaG93Z3JpZD0iZmFsc2UiCiAgICAgaW5rc2NhcGU6em9vbT0iMTkuMzc4NTc4IgogICAgIGlua3NjYXBlOmN4PSI4LjI4MjM0MTUiCiAgICAgaW5rc2NhcGU6Y3k9IjEyLjM1OTAwOCIKICAgICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjM4NDAiCiAgICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iMTUyNyIKICAgICBpbmtzY2FwZTp3aW5kb3cteD0iMTA4MCIKICAgICBpbmtzY2FwZTp3aW5kb3cteT0iMjI3IgogICAgIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiCiAgICAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0ic3ZnNCIgLz4KICA8ZwogICAgIGlkPSJnMTExOSIKICAgICBzdHlsZT0iZmlsbC1vcGFjaXR5OjAuMDU7ZmlsbDojZmZmZmZmIj4KICAgIDxjaXJjbGUKICAgICAgIHN0eWxlPSJkaXNwbGF5OmlubGluZTtmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjAuNDk3ODI4MjU7c3Ryb2tlLXdpZHRoOjEuMzk3Mjk7b3BhY2l0eTowLjUiCiAgICAgICBpZD0icGF0aDE3MCIKICAgICAgIGN4PSIxMiIKICAgICAgIGN5PSIxMiIKICAgICAgIGlua3NjYXBlOmxhYmVsPSJCYWNrZ3JvdW5kIgogICAgICAgcj0iMTEuMjUiIC8+CiAgICA8cGF0aAogICAgICAgZD0iTSAxMy43MzAwMDEsMTUgOS44MzAwMDAzLDIxLjc2IEMgMTAuNTMsMjEuOTEgMTEuMjUsMjIgMTIsMjIgYyAyLjQwMDAwMSwwIDQuNiwtMC44NSA2LjMyLC0yLjI1IEwgMTQuNjYwMDAxLDEzLjQgTSAyLjQ2MDAwMDMsMTUgYyAwLjkyLDIuOTIgMy4xNSw1LjI2IDUuOTksNi4zNCBMIDEyLjEyLDE1IG0gLTMuNTc5OTk5NywtMyAtMy45LC02Ljc0OTk5OTYgYyAtMS42NCwxLjc0OTk5OSAtMi42NCw0LjEzOTk5OTMgLTIuNjQsNi43NDk5OTk2IDAsMC42OCAwLjA3LDEuMzUgMC4yLDIgaCA3LjQ5IE0gMjEuOCw5Ljk5OTk5OTcgSCAxNC4zMTAwMDEgTCAxNC42MDAwMDEsMTAuNSAxOS4zNiwxOC43NSBDIDIxLDE2Ljk3IDIyLDE0LjYgMjIsMTIgMjIsMTEuMzEgMjEuOTMsMTAuNjQgMjEuOCw5Ljk5OTk5OTcgbSAtMC4yNiwtMSBDIDIwLjYyLDYuMDcwMDAwNSAxOC4zOSwzLjc0MDAwMDIgMTUuNTUwMDAxLDIuNjYwMDAwMiBMIDExLjg4LDguOTk5OTk5NyBNIDkuNDAwMDAwMywxMC41IDE0LjE3MDAwMSwyLjI0MDAwMDIgYyAtMC43LC0wLjE1IC0xLjQyMDAwMSwtMC4yNCAtMi4xNzAwMDEsLTAuMjQgLTIuMzk5OTk5NywwIC00LjU5OTk5OTcsMC44NCAtNi4zMTk5OTk3LDIuMjUwMDAwMyBsIDMuNjYsNi4zNDk5OTk1IHoiCiAgICAgICBpZD0icGF0aDIiCiAgICAgICBpbmtzY2FwZTpsYWJlbD0iSXJpcyIKICAgICAgIHN0eWxlPSJmaWxsLW9wYWNpdHk6MC41MDIyMTAwMjtmaWxsOiNmZmZmZmY7b3BhY2l0eTowLjc1IiAvPgogIDwvZz4KPC9zdmc+Cg==");\n  background-size: 10%;\n  background-position: center;\n}\n\n:host {\n  width: 100%;\n  height: 100%;\n  display: block;\n}\n\n.zoom-wrapper {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n\n.hidden {\n  display: none;\n}\n\nadvanced-camera-card-icon {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  color: var(--primary-color);\n  cursor: help;\n}')}};a([i({attribute:!1})],L.prototype,"hass",void 0),a([i({attribute:!1})],L.prototype,"cameraConfig",void 0),a([i({attribute:!1})],L.prototype,"cameraEndpoints",void 0),a([i({attribute:!1})],L.prototype,"liveConfig",void 0),a([i({attribute:!1})],L.prototype,"label",void 0),a([i({attribute:!1})],L.prototype,"cardWideConfig",void 0),a([i({attribute:!1})],L.prototype,"microphoneState",void 0),a([i({attribute:!1})],L.prototype,"zoomSettings",void 0),a([t()],L.prototype,"_isVideoMediaLoaded",void 0),a([t()],L.prototype,"_hasProviderError",void 0),a([t()],L.prototype,"_showStreamTroubleshooting",void 0),L=a([r("advanced-camera-card-live-provider")],L);let S=class extends o{constructor(){super(...arguments),this._cameraToSlide={},this._refPTZControl=s(),this._refCarousel=s(),this._mediaActionsController=new A,this._mediaHeightController=new D(this,".embla__slide"),this._mediaHasLoaded=!1}connectedCallback(){super.connectedCallback(),this._mediaHeightController.setRoot(this.renderRoot),this.requestUpdate()}disconnectedCallback(){this._mediaActionsController.destroy(),this._mediaHeightController.destroy(),super.disconnectedCallback()}_getTransitionEffect(){return this.liveConfig?.transition_effect??d.live.transition_effect}_getSelectedCameraIndex(){if(this.viewFilterCameraID)return 0;const e=this.cameraManager?.getStore().getCameraIDsWithCapability("live"),a=this.viewManagerEpoch?.manager.getView();return e?.size&&a?Math.max(0,Array.from(e).indexOf(a.camera)):0}willUpdate(e){(e.has("microphoneState")||e.has("liveConfig"))&&this._mediaActionsController.setOptions({playerSelector:"advanced-camera-card-live-provider",...this.liveConfig?.auto_play&&{autoPlayConditions:this.liveConfig.auto_play},...this.liveConfig?.auto_pause&&{autoPauseConditions:this.liveConfig.auto_pause},...this.liveConfig?.auto_mute&&{autoMuteConditions:this.liveConfig.auto_mute},...this.liveConfig?.auto_unmute&&{autoUnmuteConditions:this.liveConfig.auto_unmute},...(this.liveConfig?.auto_unmute||this.liveConfig?.auto_mute)&&{microphoneState:this.microphoneState,microphoneMuteSeconds:this.liveConfig.microphone.mute_after_microphone_mute_seconds}})}_getPlugins(){return[j()]}_getLazyLoadCount(){return!1===this.liveConfig?.lazy_load?null:0}_getSlides(){if(!this.cameraManager)return[[],{}];const e=this.viewManagerEpoch?.manager.getView(),a=this.viewFilterCameraID?new Set([this.viewFilterCameraID]):this.cameraManager?.getStore().getCameraIDsWithCapability("live"),i=[],t={};for(const[r,o]of this.cameraManager.getStore().getCameraConfigEntries(a)){const a=this._getSubstreamCameraID(r,e),s=r===a?o:this.cameraManager?.getStore().getCameraConfig(a),n=s?this._renderLive(a,s):null;n&&(t[r]=i.length,i.push(n))}return[i,t]}_setViewHandler(e){const a=this.cameraManager?.getStore().getCameraIDsWithCapability("live");a?.size&&e.detail.index!==this._getSelectedCameraIndex()&&this._setViewCameraID([...a][e.detail.index])}_setViewCameraID(e){e&&this.viewManagerEpoch?.manager.setViewByParametersWithNewQuery({params:{camera:e}})}_renderLive(e,a){if(!this.liveConfig||!this.hass||!this.cameraManager)return;const i=this.cameraManager.getCameraMetadata(e),t=this.viewManagerEpoch?.manager.getView();return c`
      <div class="embla__slide">
        <advanced-camera-card-live-provider
          .microphoneState=${t?.camera===e?this.microphoneState:void 0}
          .cameraConfig=${a}
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
    `}_getSubstreamCameraID(e,a){return a?.context?.live?.overrides?.get(e)??e}_getCameraNeighbors(){const e=this.cameraManager?[...this.cameraManager?.getStore().getCameraIDsWithCapability("live")]:[],a=this.viewManagerEpoch?.manager.getView();if(this.viewFilterCameraID||e.length<=1||!a||!this.hass)return{};const i=this.viewFilterCameraID??a.camera,t=e.indexOf(i);if(t<0)return{};const r=e[t>0?t-1:e.length-1],o=e[t+1<e.length?t+1:0];return{previous:{id:r,metadata:r?this.cameraManager?.getCameraMetadata(this._getSubstreamCameraID(r,a)):null},next:{id:o,metadata:o?this.cameraManager?.getCameraMetadata(this._getSubstreamCameraID(o,a)):null}}}_renderNextPrevious(e,a){const i=u(this),t="ltr"===i&&"left"===e||"rtl"===i&&"right"===e?a?.previous:a?.next;return c`<advanced-camera-card-next-previous-control
      slot=${e}
      .hass=${this.hass}
      .side=${e}
      .controlConfig=${this.liveConfig?.controls.next_previous}
      .label=${t?.metadata?.title??""}
      .icon=${t?.metadata?.icon}
      ?disabled=${!t}
      @click=${e=>{this._setViewCameraID(t?.id),I(e)}}
    >
    </advanced-camera-card-next-previous-control>`}render(){const e=this.viewManagerEpoch?.manager.getView();if(!(this.liveConfig&&this.hass&&e&&this.cameraManager))return;const[a,i]=this._getSlides();if(this._cameraToSlide=i,!a.length)return;const t=a.length>1,r=this._getCameraNeighbors(),o=!(!this._mediaHasLoaded||this.viewFilterCameraID&&this.viewFilterCameraID!==e.camera||!1===e.context?.ptzControls?.enabled)&&e.context?.ptzControls?.enabled;return c`
      <advanced-camera-card-carousel
        ${h(this._refCarousel)}
        .loop=${t}
        .dragEnabled=${t&&this.liveConfig?.draggable}
        .plugins=${w([this.cameraManager,this.liveConfig],this._getPlugins.bind(this))}
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
        .hass=${this.hass}
        .config=${this.liveConfig.controls.ptz}
        .cameraManager=${this.cameraManager}
        .cameraID=${M(e,this.viewFilterCameraID)}
        .forceVisibility=${o}
      >
      </advanced-camera-card-ptz>
    `}_setMediaTarget(){const e=this.viewManagerEpoch?.manager.getView(),a=this._getSelectedCameraIndex();this.viewFilterCameraID?this._mediaActionsController.setTarget(a,e?.camera===this.viewFilterCameraID):this._mediaActionsController.setTarget(a,!0),this._mediaHeightController.setSelected(a)}updated(e){super.updated(e);(!!this._refCarousel.value&&this._mediaActionsController.setRoot(this._refCarousel.value)||e.has("viewManagerEpoch"))&&this._setMediaTarget()}static get styles(){return C(":host {\n  display: block;\n  --video-max-height: none;\n  transition: max-height 0.1s ease-in-out;\n  position: relative;\n}\n\n:host(:not([grid-id])) {\n  height: 100%;\n}\n\n:host([unselected]) advanced-camera-card-carousel {\n  pointer-events: none;\n}\n\n.embla__slide {\n  display: flex;\n  height: 100%;\n  width: 100%;\n  flex: 0 0 100%;\n}")}};a([i({attribute:!1})],S.prototype,"hass",void 0),a([i({attribute:!1})],S.prototype,"viewManagerEpoch",void 0),a([i({attribute:!1})],S.prototype,"liveConfig",void 0),a([i({attribute:!1})],S.prototype,"cardWideConfig",void 0),a([i({attribute:!1})],S.prototype,"cameraManager",void 0),a([i({attribute:!1})],S.prototype,"microphoneState",void 0),a([i({attribute:!1})],S.prototype,"viewFilterCameraID",void 0),a([t()],S.prototype,"_mediaHasLoaded",void 0),S=a([r("advanced-camera-card-live-carousel")],S);let E=class extends o{_renderCarousel(e){const a=this.viewManagerEpoch?.manager.getView(),i=e??a?.camera;return c`
      <advanced-camera-card-live-carousel
        grid-id=${_(e)}
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
    `}_gridSelectCamera(e){this.viewManagerEpoch?.manager.setViewByParameters({params:{camera:e}})}_needsGrid(){const e=this.cameraManager?.getStore().getCameraIDsWithCapability("live"),a=this.viewManagerEpoch?.manager.getView();return!!a?.isGrid()&&!!a?.supportsMultipleDisplayModes()&&!!e&&e.size>1}willUpdate(e){e.has("viewManagerEpoch")&&this._needsGrid()&&import("./media-grid-44653d02.js")}render(){const e=this.cameraManager?.getStore().getCameraIDsWithCapability("live");return e?.size&&this._needsGrid()?c`
      <advanced-camera-card-media-grid
        .selected=${this.viewManagerEpoch?.manager.getView()?.camera}
        .displayConfig=${this.liveConfig?.display}
        @advanced-camera-card:media-grid:selected=${e=>this._gridSelectCamera(e.detail.selected)}
      >
        ${[...e].map((e=>this._renderCarousel(e)))}
      </advanced-camera-card-media-grid>
    `:this._renderCarousel()}static get styles(){return C(":host {\n  width: 100%;\n  height: 100%;\n  display: block;\n}\n\n@keyframes warning-pulse {\n  0% {\n    border: solid 2px var(--trigger-border-color-base);\n  }\n  50% {\n    border: solid 2px var(--trigger-border-color);\n  }\n  100% {\n    border: solid 2px var(--trigger-border-color-base);\n  }\n}\nadvanced-camera-card-live-carousel {\n  --trigger-border-color: var(--advanced-camera-card-trigger-border-color);\n  --trigger-border-color-base: var(\n    --advanced-camera-card-trigger-border-color-base,\n    black\n  );\n}\n\nadvanced-camera-card-live-carousel[triggered] {\n  animation: warning-pulse 5s infinite;\n}\n\nadvanced-camera-card-live-carousel[selected] {\n  --trigger-border-color-base: var(\n    --advanced-camera-card-trigger-border-color-base,\n    var(--advanced-camera-card-foreground-primary)\n  );\n}")}};a([i({attribute:!1})],E.prototype,"hass",void 0),a([i({attribute:!1})],E.prototype,"viewManagerEpoch",void 0),a([i({attribute:!1})],E.prototype,"liveConfig",void 0),a([i({attribute:!1})],E.prototype,"cardWideConfig",void 0),a([i({attribute:!1})],E.prototype,"cameraManager",void 0),a([i({attribute:!1})],E.prototype,"microphoneState",void 0),a([i({attribute:!1})],E.prototype,"triggeredCameraIDs",void 0),E=a([r("advanced-camera-card-live-grid")],E);let T=class extends o{constructor(){super(...arguments),this._controller=new $(this)}render(){if(this.hass&&this.cameraManager)return c`
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
    `}static get styles(){return C(b)}};a([i({attribute:!1})],T.prototype,"hass",void 0),a([i({attribute:!1})],T.prototype,"viewManagerEpoch",void 0),a([i({attribute:!1})],T.prototype,"liveConfig",void 0),a([i({attribute:!1})],T.prototype,"cameraManager",void 0),a([i({attribute:!1})],T.prototype,"cardWideConfig",void 0),a([i({attribute:!1})],T.prototype,"microphoneState",void 0),a([i({attribute:!1})],T.prototype,"triggeredCameraIDs",void 0),T=a([r("advanced-camera-card-live")],T);export{T as AdvancedCameraCardLive};
