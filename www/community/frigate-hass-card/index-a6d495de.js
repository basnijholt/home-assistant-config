import{_ as e,n as i,b as t,t as a,a as r,cQ as s,dm as o,dn as n,da as d,dp as l,dq as g,dr as h,ds as c,dt as u,du as m,dv as v,db as C,cS as p,x as w,cZ as M,dl as f,cU as I,dw as y,dx as _,dy as b,dz as A,r as j,cV as D,cM as T,dA as x,s as k,c_ as $,c$ as N,cT as E,l as L,d1 as P,d2 as z}from"./card-b90190e9.js";import"./ha-hls-player-b18d46c3.js";import{u as V,i as S}from"./media-layout-3ed3ad51.js";import{p as Z,h as O,s as G,c as W,M as Y,A as R,a as B,b as F}from"./media-3fd6f0af.js";import{m as U}from"./audio-cf3a75aa.js";import{V as X}from"./media-c9012082.js";let Q=class extends r{constructor(){super(...arguments),this.load=!1,this._refFrigateCardMediaPlayer=s(),this._refVideoProvider=s(),this._refImageProvider=s(),this._url=null}async play(){await Z(this,this._refFrigateCardMediaPlayer.value??this._refVideoProvider.value)}async pause(){(this._refFrigateCardMediaPlayer.value||this._refVideoProvider.value)?.pause()}async mute(){this._refFrigateCardMediaPlayer.value?this._refFrigateCardMediaPlayer.value?.mute():this._refVideoProvider.value&&(this._refVideoProvider.value.muted=!0)}async unmute(){this._refFrigateCardMediaPlayer.value?this._refFrigateCardMediaPlayer.value?.mute():this._refVideoProvider.value&&(this._refVideoProvider.value.muted=!1)}isMuted(){return this._refFrigateCardMediaPlayer.value?this._refFrigateCardMediaPlayer.value?.isMuted()??!0:!this._refVideoProvider.value||this._refVideoProvider.value.muted}async seek(e){if(this._refFrigateCardMediaPlayer.value)return this._refFrigateCardMediaPlayer.value.seek(e);this._refVideoProvider.value&&(O(this._refVideoProvider.value),this._refVideoProvider.value.currentTime=e)}async setControls(e){if(this._refFrigateCardMediaPlayer.value)return this._refFrigateCardMediaPlayer.value.setControls(e);this._refVideoProvider.value&&G(this._refVideoProvider.value,e??this.viewerConfig?.controls.builtin??!0)}isPaused(){return this._refFrigateCardMediaPlayer.value?this._refFrigateCardMediaPlayer.value.isPaused():!this._refVideoProvider.value||this._refVideoProvider.value.paused}async getScreenshotURL(){return this._refFrigateCardMediaPlayer.value?await this._refFrigateCardMediaPlayer.value.getScreenshotURL():this._refVideoProvider.value?o(this._refVideoProvider.value):this._refImageProvider.value?this._refImageProvider.value.src:null}async _switchToRelatedClipView(){const e=this.viewManagerEpoch?.manager.getView();if(!(this.hass&&e&&this.cameraManager&&this.media&&n.isEvent(this.media)&&d.areEventQueries(e.query)))return;const i=e.query.clone();i.convertToClipsQueries();i.getQueries()&&await(this.viewManagerEpoch?.manager.setViewByParametersWithExistingQuery({params:{view:"media",query:i},queryExecutorOptions:{selectResult:{id:this.media.getID()??void 0},rejectResults:e=>!e.hasSelectedResult()}}))}async _setURL(){const e=this.media?.getContentID();if(!this.media||!e||!this.hass||this.viewerConfig?.lazy_load&&!this.load)return;let i=this.resolvedMediaCache?.get(e)??null;if(i||(i=await l(this.hass,e,this.resolvedMediaCache)),!i)return;const t=i.url;if(g(t))return void(this._url=h(this.hass,t));const a=this.cameraManager?.getStore().getCamera(this.media.getCameraID()),r=a?.getProxyConfig();if(r&&c(this.hass,r,"media")){if(r.dynamic){const e=t.split(/#/)[0];await u(this.hass,e,{sslVerification:r.ssl_verification,sslCiphers:r.ssl_ciphers,openLimit:0})}try{this._url=await m(this.hass,v(t))}catch(e){C(e)}}else this._url=t}willUpdate(e){if((e.has("load")||e.has("media")||e.has("viewerConfig")||e.has("resolvedMediaCache")||e.has("hass"))&&this._setURL().then((()=>{this.requestUpdate()})),e.has("viewerConfig")&&this.viewerConfig?.zoomable&&import("./zoomer-ac938891.js"),e.has("media")||e.has("cameraManager")){const e=this.media?.getCameraID(),i=e?this.cameraManager?.getStore().getCameraConfig(e):null;V(this,i?.dimensions?.layout),this.style.aspectRatio=p({ratio:i?.dimensions?.aspect_ratio})}}_useZoomIfRequired(e){if(!this.media)return e;const i=this.media.getCameraID(),t=this.media.getID()??void 0,a=this.cameraManager?.getStore().getCameraConfig(i),r=this.viewManagerEpoch?.manager.getView();return this.viewerConfig?.zoomable?w` <frigate-card-zoomer
          .defaultSettings=${S([a?.dimensions?.layout],(()=>a?.dimensions?.layout?{pan:a.dimensions.layout.pan,zoom:a.dimensions.layout.zoom}:void 0))}
          .settings=${t?r?.context?.zoom?.[t]?.requested:void 0}
          @frigate-card:zoom:zoomed=${()=>this.setControls(!1)}
          @frigate-card:zoom:unzoomed=${()=>this.setControls()}
          @frigate-card:zoom:change=${e=>M(e,this.viewManagerEpoch?.manager,t)}
        >
          ${e}
        </frigate-card-zoomer>`:e}render(){if(this.load&&this.media&&this.hass&&this.viewerConfig)return this._url?this._useZoomIfRequired(w`
      ${n.isVideo(this.media)?this.media.getVideoContentType()===X.HLS?w`<frigate-card-ha-hls-player
              ${I(this._refFrigateCardMediaPlayer)}
              allow-exoplayer
              aria-label="${this.media.getTitle()??""}"
              ?autoplay=${!1}
              controls
              muted
              playsinline
              title="${this.media.getTitle()??""}"
              url=${this._url}
              .hass=${this.hass}
              ?controls=${this.viewerConfig.controls.builtin}
            >
            </frigate-card-ha-hls-player>`:w`
              <video
                ${I(this._refVideoProvider)}
                aria-label="${this.media.getTitle()??""}"
                title="${this.media.getTitle()??""}"
                muted
                playsinline
                crossorigin="anonymous"
                ?autoplay=${!1}
                ?controls=${this.viewerConfig.controls.builtin}
                @loadedmetadata=${e=>{e.target&&this.viewerConfig?.controls.builtin&&O(e.target,W)}}
                @loadeddata=${e=>{y(this,e,{player:this,capabilities:{supportsPause:!0,hasAudio:U(e.target)},technology:["hls"]})}}
                @volumechange=${()=>_(this)}
                @play=${()=>b(this)}
                @pause=${()=>A(this)}
              >
                <source src=${this._url} type="video/mp4" />
              </video>
            `:w`<img
            ${I(this._refImageProvider)}
            aria-label="${this.media.getTitle()??""}"
            src="${this._url}"
            title="${this.media.getTitle()??""}"
            @click=${()=>{this.viewerConfig?.snapshot_click_plays_clip&&this._switchToRelatedClipView()}}
            @load=${e=>{y(this,e,{player:this,technology:["jpg"]})}}
          />`}
    `):f({cardWideConfig:this.cardWideConfig})}static get styles(){return j(':host {\n  background-color: var(--primary-background-color);\n  background-position: center;\n  background-repeat: no-repeat;\n  background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgaW5rc2NhcGU6dmVyc2lvbj0iMS4yLjIgKGIwYTg0ODY1NDEsIDIwMjItMTItMDEpIgogICBzb2RpcG9kaTpkb2NuYW1lPSJpcmlzLW91dGxpbmUuc3ZnIgogICBpZD0ic3ZnNCIKICAgdmVyc2lvbj0iMS4xIgogICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIgogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGRlZnMKICAgICBpZD0iZGVmczgiIC8+CiAgPHNvZGlwb2RpOm5hbWVkdmlldwogICAgIGlkPSJuYW1lZHZpZXc2IgogICAgIHBhZ2Vjb2xvcj0iI2I5M2UzZSIKICAgICBib3JkZXJjb2xvcj0iIzAwMDAwMCIKICAgICBib3JkZXJvcGFjaXR5PSIwLjI1IgogICAgIGlua3NjYXBlOnNob3dwYWdlc2hhZG93PSIyIgogICAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwLjYwNzg0MzE0IgogICAgIGlua3NjYXBlOnBhZ2VjaGVja2VyYm9hcmQ9ImZhbHNlIgogICAgIGlua3NjYXBlOmRlc2tjb2xvcj0iI2QxZDFkMSIKICAgICBzaG93Z3JpZD0iZmFsc2UiCiAgICAgaW5rc2NhcGU6em9vbT0iMTkuMzc4NTc4IgogICAgIGlua3NjYXBlOmN4PSI4LjI4MjM0MTUiCiAgICAgaW5rc2NhcGU6Y3k9IjEyLjM1OTAwOCIKICAgICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjM4NDAiCiAgICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iMTUyNyIKICAgICBpbmtzY2FwZTp3aW5kb3cteD0iMTA4MCIKICAgICBpbmtzY2FwZTp3aW5kb3cteT0iMjI3IgogICAgIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiCiAgICAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0ic3ZnNCIgLz4KICA8ZwogICAgIGlkPSJnMTExOSIKICAgICBzdHlsZT0iZmlsbC1vcGFjaXR5OjAuMDU7ZmlsbDojZmZmZmZmIj4KICAgIDxjaXJjbGUKICAgICAgIHN0eWxlPSJkaXNwbGF5OmlubGluZTtmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjAuNDk3ODI4MjU7c3Ryb2tlLXdpZHRoOjEuMzk3Mjk7b3BhY2l0eTowLjUiCiAgICAgICBpZD0icGF0aDE3MCIKICAgICAgIGN4PSIxMiIKICAgICAgIGN5PSIxMiIKICAgICAgIGlua3NjYXBlOmxhYmVsPSJCYWNrZ3JvdW5kIgogICAgICAgcj0iMTEuMjUiIC8+CiAgICA8cGF0aAogICAgICAgZD0iTSAxMy43MzAwMDEsMTUgOS44MzAwMDAzLDIxLjc2IEMgMTAuNTMsMjEuOTEgMTEuMjUsMjIgMTIsMjIgYyAyLjQwMDAwMSwwIDQuNiwtMC44NSA2LjMyLC0yLjI1IEwgMTQuNjYwMDAxLDEzLjQgTSAyLjQ2MDAwMDMsMTUgYyAwLjkyLDIuOTIgMy4xNSw1LjI2IDUuOTksNi4zNCBMIDEyLjEyLDE1IG0gLTMuNTc5OTk5NywtMyAtMy45LC02Ljc0OTk5OTYgYyAtMS42NCwxLjc0OTk5OSAtMi42NCw0LjEzOTk5OTMgLTIuNjQsNi43NDk5OTk2IDAsMC42OCAwLjA3LDEuMzUgMC4yLDIgaCA3LjQ5IE0gMjEuOCw5Ljk5OTk5OTcgSCAxNC4zMTAwMDEgTCAxNC42MDAwMDEsMTAuNSAxOS4zNiwxOC43NSBDIDIxLDE2Ljk3IDIyLDE0LjYgMjIsMTIgMjIsMTEuMzEgMjEuOTMsMTAuNjQgMjEuOCw5Ljk5OTk5OTcgbSAtMC4yNiwtMSBDIDIwLjYyLDYuMDcwMDAwNSAxOC4zOSwzLjc0MDAwMDIgMTUuNTUwMDAxLDIuNjYwMDAwMiBMIDExLjg4LDguOTk5OTk5NyBNIDkuNDAwMDAwMywxMC41IDE0LjE3MDAwMSwyLjI0MDAwMDIgYyAtMC43LC0wLjE1IC0xLjQyMDAwMSwtMC4yNCAtMi4xNzAwMDEsLTAuMjQgLTIuMzk5OTk5NywwIC00LjU5OTk5OTcsMC44NCAtNi4zMTk5OTk3LDIuMjUwMDAwMyBsIDMuNjYsNi4zNDk5OTk1IHoiCiAgICAgICBpZD0icGF0aDIiCiAgICAgICBpbmtzY2FwZTpsYWJlbD0iSXJpcyIKICAgICAgIHN0eWxlPSJmaWxsLW9wYWNpdHk6MC41MDIyMTAwMjtmaWxsOiNmZmZmZmY7b3BhY2l0eTowLjc1IiAvPgogIDwvZz4KPC9zdmc+Cg==");\n  background-size: 10%;\n  background-position: center;\n}\n\n:host {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n\nimg,\nvideo,\nfrigate-card-ha-hls-player {\n  display: block;\n  width: 100%;\n  height: 100%;\n  object-fit: var(--frigate-card-media-layout-fit, contain);\n  object-position: var(--frigate-card-media-layout-position-x, 50%) var(--frigate-card-media-layout-position-y, 50%);\n  object-view-box: inset(var(--frigate-card-media-layout-view-box-top, 0%) var(--frigate-card-media-layout-view-box-right, 0%) var(--frigate-card-media-layout-view-box-bottom, 0%) var(--frigate-card-media-layout-view-box-left, 0%));\n}\n\nfrigate-card-progress-indicator {\n  padding: 30px;\n  box-sizing: border-box;\n}')}};e([i({attribute:!1})],Q.prototype,"hass",void 0),e([i({attribute:!1})],Q.prototype,"viewManagerEpoch",void 0),e([i({attribute:!1})],Q.prototype,"media",void 0),e([i({attribute:!1})],Q.prototype,"viewerConfig",void 0),e([i({attribute:!1})],Q.prototype,"resolvedMediaCache",void 0),e([i({attribute:!1})],Q.prototype,"load",void 0),e([i({attribute:!1})],Q.prototype,"cameraManager",void 0),e([i({attribute:!1})],Q.prototype,"cardWideConfig",void 0),e([t()],Q.prototype,"_url",void 0),Q=e([a("frigate-card-viewer-provider")],Q);let q=class extends r{constructor(){super(...arguments),this.showControls=!0,this._selected=0,this._media=null,this._mediaActionsController=new Y,this._player=null,this._refCarousel=s()}updated(e){super.updated(e),e.has("viewManagerEpoch")&&this.viewManagerEpoch?.manager.getView()?.context?.mediaViewer!==this.viewManagerEpoch?.oldView?.context?.mediaViewer&&this._seekHandler(),!this._mediaActionsController.hasRoot()&&this._refCarousel.value&&this._mediaActionsController.initialize(this._refCarousel.value)}connectedCallback(){super.connectedCallback(),this.requestUpdate()}disconnectedCallback(){this._mediaActionsController.destroy(),super.disconnectedCallback()}_getTransitionEffect(){return this.viewerConfig?.transition_effect??T.media_viewer.transition_effect}_getPlugins(){return[R({...this.viewerConfig?.lazy_load&&{lazyLoadCallback:(e,i)=>this._lazyloadSlide(i)}}),B(),F()]}_getMediaNeighbors(){const e=this._media?.length??0;if(!this._media)return null;const i=this._selected>0?this._selected-1:null,t=this._selected+1<e?this._selected+1:null;return{...null!==i&&{previous:{index:i,media:this._media[i]}},...null!==t&&{next:{index:t,media:this._media[t]}}}}_setViewSelectedIndex(e){const i=this.viewManagerEpoch?.manager.getView();if(!this._media||!i)return;if(this._selected===e)return;const t=i?.queryResults?.clone().selectIndex(e,this.viewFilterCameraID);if(!t)return;const a=t.getSelectedResult(this.viewFilterCameraID)?.getCameraID();this.viewManagerEpoch?.manager.setViewByParameters({params:{queryResults:t,...a&&{camera:a}},modifiers:[new x("mediaViewer","seek")]})}_lazyloadSlide(e){e instanceof HTMLSlotElement&&(e=e.assignedElements({flatten:!0})[0]);const i=e?.querySelector("frigate-card-viewer-provider");i&&(i.load=!0)}_getSlides(){if(!this._media)return[];const e=[];for(let i=0;i<this._media.length;++i){const t=this._media[i];if(t){const a=this._renderMediaItem(t);a&&(e[i]=a)}}return e}willUpdate(e){if(e.has("viewerConfig")&&this._mediaActionsController.setOptions({playerSelector:"frigate-card-viewer-provider",...this.viewerConfig?.auto_play&&{autoPlayConditions:this.viewerConfig.auto_play},...this.viewerConfig?.auto_pause&&{autoPauseConditions:this.viewerConfig.auto_pause},...this.viewerConfig?.auto_mute&&{autoMuteConditions:this.viewerConfig.auto_mute},...this.viewerConfig?.auto_unmute&&{autoUnmuteConditions:this.viewerConfig.auto_unmute}}),e.has("viewManagerEpoch")){const e=this.viewManagerEpoch?.manager.getView(),i=e?.queryResults?.getResults(this.viewFilterCameraID)??null,t=e?.queryResults?.getSelectedIndex(this.viewFilterCameraID)??0,a=e?.context?.mediaViewer?.seek;i===this._media&&t===this._selected&&a||(k(this,!1,"unseekable"),this._media=i,this._selected=t),i?.length?this.viewFilterCameraID?this._mediaActionsController.setTarget(t,e?.camera===this.viewFilterCameraID):this._mediaActionsController.setTarget(t,!0):this._mediaActionsController.unsetTarget()}}_renderNextPrevious(e,i){const t=e=>{if(!i||!this._media)return;const t=("previous"===e?i.previous?.index:i.next?.index)??null;null!==t&&this._setViewSelectedIndex(t)},a=$(this),r="ltr"===a&&"left"===e||"rtl"===a&&"right"===e?"previous":"next";return w` <frigate-card-next-previous-control
      slot=${e}
      .hass=${this.hass}
      .side=${e}
      .controlConfig=${this.viewerConfig?.controls.next_previous}
      .thumbnail=${i?.[r]?.media.getThumbnail()??void 0}
      .label=${i?.[r]?.media.getTitle()??""}
      ?disabled=${!i?.[r]}
      @click=${e=>{t(r),N(e)}}
    ></frigate-card-next-previous-control>`}render(){const e=this._media?.length??0;if(!this._media||!e)return E({message:L("common.no_media"),type:"info",icon:"mdi:multimedia",...this.viewFilterCameraID&&{context:{camera_id:this.viewFilterCameraID}}});const i=this._media[this._selected]??this._media[e-1];if(!this.hass||!this.cameraManager||!i)return;const t=this._getMediaNeighbors(),a=this.viewManagerEpoch?.manager.getView();return w`
      <frigate-card-carousel
        ${I(this._refCarousel)}
        .dragEnabled=${this.viewerConfig?.draggable??!0}
        .plugins=${S([this.viewerConfig,this._media],this._getPlugins.bind(this))}
        .selected=${this._selected}
        transitionEffect=${this._getTransitionEffect()}
        @frigate-card:carousel:select=${e=>{this._setViewSelectedIndex(e.detail.index)}}
        @frigate-card:media:loaded=${e=>{this._player=e.detail.player??null,this._seekHandler()}}
        @frigate-card:media:unloaded=${()=>{this._player=null}}
      >
        ${this.showControls?this._renderNextPrevious("left",t):""}
        ${S([this._media,a],(()=>this._getSlides()))}
        ${this.showControls?this._renderNextPrevious("right",t):""}
      </frigate-card-carousel>
      ${a?w` <frigate-card-ptz
            .config=${this.viewerConfig?.controls.ptz}
            .forceVisibility=${a?.context?.ptzControls?.enabled}
          >
          </frigate-card-ptz>`:""}
      <div class="seek-warning">
        <frigate-card-icon
          title="${L("media_viewer.unseekable")}"
          .icon=${{icon:"mdi:clock-remove"}}
        >
        </frigate-card-icon>
      </div>
    `}async _seekHandler(){const e=this.viewManagerEpoch?.manager.getView(),i=e?.context?.mediaViewer?.seek;if(!(this.hass&&i&&this._media&&this._player))return;const t=this._media[this._selected];if(!t)return;const a=t.includesTime(i);k(this,!a,"unseekable"),a||this._player.isPaused()?a&&this._player.isPaused()&&this._player.play():this._player.pause();const r=await(this.cameraManager?.getMediaSeekTime(t,i))??null;null!==r&&this._player.seek(r)}_renderMediaItem(e){const i=this.viewManagerEpoch?.manager.getView();return this.hass&&i&&this.viewerConfig?w` <div class="embla__slide">
      <frigate-card-viewer-provider
        .hass=${this.hass}
        .viewManagerEpoch=${this.viewManagerEpoch}
        .media=${e}
        .viewerConfig=${this.viewerConfig}
        .resolvedMediaCache=${this.resolvedMediaCache}
        .cameraManager=${this.cameraManager}
        .load=${!this.viewerConfig.lazy_load}
        .cardWideConfig=${this.cardWideConfig}
      ></frigate-card-viewer-provider>
    </div>`:null}static get styles(){return j(":host {\n  position: relative;\n  --video-max-height: none;\n}\n\n:host([unselected]) frigate-card-carousel,\n:host([unselected]) .seek-warning {\n  pointer-events: none;\n}\n\n:host([unseekable]) frigate-card-carousel {\n  filter: brightness(50%);\n}\n\n:host([unseekable]) .seek-warning {\n  display: block;\n}\n\n.seek-warning {\n  display: none;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translateX(-50%) translateY(-50%);\n  color: white;\n}\n\n.embla__slide {\n  height: 100%;\n  flex: 0 0 100%;\n}")}};e([i({attribute:!1})],q.prototype,"hass",void 0),e([i({attribute:!1})],q.prototype,"viewManagerEpoch",void 0),e([i({attribute:!1})],q.prototype,"viewFilterCameraID",void 0),e([i({attribute:!1,hasChanged:D})],q.prototype,"viewerConfig",void 0),e([i({attribute:!1})],q.prototype,"resolvedMediaCache",void 0),e([i({attribute:!1})],q.prototype,"cardWideConfig",void 0),e([i({attribute:!1})],q.prototype,"cameraManager",void 0),e([i({attribute:!1})],q.prototype,"showControls",void 0),e([t()],q.prototype,"_selected",void 0),q=e([a("frigate-card-viewer-carousel")],q);let H=class extends r{_renderCarousel(e){const i=this.viewManagerEpoch?.manager.getView()?.camera;return w`
      <frigate-card-viewer-carousel
        grid-id=${P(e)}
        .hass=${this.hass}
        .viewManagerEpoch=${this.viewManagerEpoch}
        .viewFilterCameraID=${e}
        .viewerConfig=${this.viewerConfig}
        .resolvedMediaCache=${this.resolvedMediaCache}
        .cameraManager=${this.cameraManager}
        .cardWideConfig=${this.cardWideConfig}
        .showControls=${!e||i===e}
      >
      </frigate-card-viewer-carousel>
    `}willUpdate(e){e.has("viewManagerEpoch")&&this._needsGrid()&&import("./media-grid-62833fe3.js")}_needsGrid(){const e=this.viewManagerEpoch?.manager.getView(),i=e?.queryResults?.getCameraIDs();return!!e?.isGrid()&&!!e?.supportsMultipleDisplayModes()&&(i?.size??0)>1}_gridSelectCamera(e){const i=this.viewManagerEpoch?.manager.getView();this.viewManagerEpoch?.manager.setViewByParameters({params:{camera:e,queryResults:i?.queryResults?.clone().promoteCameraSelectionToMainSelection(e)}})}render(){const e=this.viewManagerEpoch?.manager.getView(),i=e?.queryResults?.getCameraIDs();return i&&this._needsGrid()?w`
      <frigate-card-media-grid
        .selected=${e?.camera}
        .displayConfig=${this.viewerConfig?.display}
        @frigate-card:media-grid:selected=${e=>this._gridSelectCamera(e.detail.selected)}
      >
        ${[...i].map((e=>this._renderCarousel(e)))}
      </frigate-card-media-grid>
    `:this._renderCarousel()}static get styles(){return j(z)}};e([i({attribute:!1})],H.prototype,"hass",void 0),e([i({attribute:!1})],H.prototype,"viewManagerEpoch",void 0),e([i({attribute:!1})],H.prototype,"viewerConfig",void 0),e([i({attribute:!1})],H.prototype,"resolvedMediaCache",void 0),e([i({attribute:!1})],H.prototype,"cardWideConfig",void 0),e([i({attribute:!1})],H.prototype,"cameraManager",void 0),H=e([a("frigate-card-viewer-grid")],H);let K=class extends r{render(){if(this.hass&&this.viewManagerEpoch&&this.viewerConfig&&this.cameraManager&&this.cardWideConfig){if(!this.viewManagerEpoch.manager.getView()?.queryResults?.hasResults()){const e=!!this.viewManagerEpoch.manager.getView()?.context?.loading?.query;return E({type:"info",message:L(e?"error.awaiting_media":"common.no_media"),icon:"mdi:multimedia",dotdotdot:e})}return w` <frigate-card-viewer-grid
      .hass=${this.hass}
      .viewManagerEpoch=${this.viewManagerEpoch}
      .viewerConfig=${this.viewerConfig}
      .resolvedMediaCache=${this.resolvedMediaCache}
      .cameraManager=${this.cameraManager}
      .cardWideConfig=${this.cardWideConfig}
    >
    </frigate-card-viewer-grid>`}}static get styles(){return j(":host {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n\nfrigate-card-viewer-carousel {\n  flex: 1;\n  min-height: 0;\n}")}};e([i({attribute:!1})],K.prototype,"hass",void 0),e([i({attribute:!1})],K.prototype,"viewManagerEpoch",void 0),e([i({attribute:!1})],K.prototype,"viewerConfig",void 0),e([i({attribute:!1})],K.prototype,"resolvedMediaCache",void 0),e([i({attribute:!1})],K.prototype,"cameraManager",void 0),e([i({attribute:!1})],K.prototype,"cardWideConfig",void 0),K=e([a("frigate-card-viewer")],K);export{K as FrigateCardViewer};
