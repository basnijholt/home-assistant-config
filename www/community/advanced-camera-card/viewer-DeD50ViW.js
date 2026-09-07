import{A as e,Ao as t,Co as n,D as r,Do as i,Ft as a,G as o,N as s,Ot as c,Pt as l,So as u,To as d,U as f,Yn as p,_i as m,b as h,bo as g,bt as _,cr as v,dn as ee,dt as te,et as ne,fr as y,ft as b,g as x,h as S,j as C,l as w,lt as T,m as E,n as D,p as O,q as k,rr as A,s as j,tn as M,ui as N,vo as P,vt as re,w as F,wo as I,x as L,xt as R,yn as z,yo as B,yt as V}from"./shared-Dia7VIOe.js";import{t as H}from"./media-actions-controller-71-CZH7E.js";var U=`:host{flex-direction:column;gap:5px;width:100%;height:100%;display:flex}:host([empty]){aspect-ratio:16/9}advanced-camera-card-viewer-carousel{flex:1;min-height:0}`,W=`:host{--video-max-height:none;border-radius:var(--advanced-camera-card-border-radius-final);transition:max-height .1s ease-in-out;display:block;position:relative;overflow:hidden}:host(:not([grid-id])){height:100%}:host([unselected]) advanced-camera-card-carousel,:host([unselected]) .seek-warning{pointer-events:none}:host([unseekable]) advanced-camera-card-carousel{filter:brightness(50%)}:host([unseekable]) .seek-warning{display:block}.seek-warning{color:#fff;display:none;position:absolute;top:50%;left:50%;transform:translate(-50%)translateY(-50%)}.embla__slide{flex:0 0 100%;width:100%;height:100%;display:flex}`,G=`:host{background-color:var(--advanced-camera-card-background);background-image:linear-gradient(color-mix(in srgb, var(--advanced-camera-card-text-color), transparent 90%) 0 0), linear-gradient(color-mix(in srgb, var(--advanced-camera-card-text-color), transparent 90%) 0 0), linear-gradient(color-mix(in srgb, var(--advanced-camera-card-text-color), transparent 90%) 0 0), linear-gradient(color-mix(in srgb, var(--advanced-camera-card-text-color), transparent 90%) 0 0), linear-gradient(color-mix(in srgb, var(--advanced-camera-card-text-color), transparent 90%) 0 0), linear-gradient(color-mix(in srgb, var(--advanced-camera-card-text-color), transparent 90%) 0 0), linear-gradient(color-mix(in srgb, var(--advanced-camera-card-text-color), transparent 90%) 0 0), linear-gradient(color-mix(in srgb, var(--advanced-camera-card-text-color), transparent 90%) 0 0);background-position:10px 10px,10px 10px,right 10px top 10px,right 10px top 10px,left 10px bottom 10px,left 10px bottom 10px,right 10px bottom 10px,right 10px bottom 10px;background-repeat:no-repeat;background-size:24px 1px,1px 24px,24px 1px,1px 24px,24px 1px,1px 24px,24px 1px,1px 24px;width:100%;height:100%;display:block}.zoom-wrapper{width:100%;height:100%;display:block}advanced-camera-card-progress-indicator{box-sizing:border-box;padding:30px}`,K=e=>{let t=e?.toLowerCase(),n=t===`application/vnd.apple.mpegurl`||t===`application/x-mpegurl`;return{isHLS:n,isVideo:n||!!t?.startsWith(`video/`)}},q=`:host{width:100%;height:100%;display:block}video{object-fit:var(--advanced-camera-card-media-layout-fit,contain);object-position:var(--advanced-camera-card-media-layout-position-x,50%) var(--advanced-camera-card-media-layout-position-y,50%);object-view-box:inset(var(--advanced-camera-card-media-layout-view-box-top,0%) var(--advanced-camera-card-media-layout-view-box-right,0%) var(--advanced-camera-card-media-layout-view-box-bottom,0%) var(--advanced-camera-card-media-layout-view-box-left,0%));width:100%;height:100%;display:block}`,J=class extends d{constructor(...e){super(...e),this.controls=!1,this._refVideo=P(),this._mediaPlayerController=new j(this,()=>this._refVideo.value??null,()=>this.controls),this._mediaLoadedInfoSourceController=new F(this,{getTargetID:()=>this.targetID??null})}async getMediaPlayerController(){return this._mediaPlayerController}render(){return i`
      <video
        ${B(this._refVideo)}
        muted
        playsinline
        crossorigin="anonymous"
        ?autoplay=${!1}
        ?controls=${this.controls}
        @loadedmetadata=${e=>{e.target&&this.controls&&w(e.target,2)}}
        @loadeddata="${e=>{let t=re(e,{...this._mediaPlayerController&&{mediaPlayerController:this._mediaPlayerController},capabilities:{supportsPause:!0,hasAudio:O(e.target)},technology:[`mp4`]});t&&this._mediaLoadedInfoSourceController.set(t)}}"
        @volumechange=${()=>R(this)}
        @play=${()=>_(this)}
        @pause=${()=>V(this)}
      >
        <source src="${g(this.url)}" type="video/mp4" />
      </video>
    `}static get styles(){return t(q)}};T([n()],J.prototype,`url`,void 0),T([n()],J.prototype,`targetID`,void 0),T([n({type:Boolean})],J.prototype,`controls`,void 0),J=T([I(`advanced-camera-card-video-player`)],J);var Y=class extends d{constructor(){super(),this.forceSelected=!1,this._refProvider=P(),this._lazyLoadController=new E(this),this._resolvedMedia=null,this._resolveGeneration=new A,this._signedURLController=new h(this,()=>{if(!this.hass||!this._resolvedMedia)return{};if(a(this._resolvedMedia.url))return{endpoint:{endpoint:l(this.hass,this._resolvedMedia.url)}};let e=this.media?.getCameraID(),t=e?this.cameraManager?.getStore().getCamera(e):null;return{hass:this.hass,endpoint:{endpoint:this._resolvedMedia.url},proxyConfig:t?.getMediaProxyConfig()}}),this._lazyLoadController.addListener(e=>e&&this._resolveURL()),new r(this,{getTargetID:()=>this.media?.getID()??null,isLoadExpected:()=>this._shouldLoad()})}async getMediaPlayerController(){return await this.updateComplete,await this._refProvider.value?.getMediaPlayerController()??null}async _switchToRelatedClipView(){let e=this.viewManagerEpoch?.manager.getView();if(!this.hass||!e||!this.cameraManager||!this.media||!p.isEvent(this.media)||!e.query?.hasMediaQueriesOfType(z.Event))return;let t=D.convertToClips(e.query);await this.viewManagerEpoch?.manager.setViewByParametersWithExistingQuery({params:{view:`media`,query:t},queryExecutorOptions:{selectResult:{id:this.media.getID()??void 0},rejectResults:e=>!e.hasSelectedResult()}})}async _resolveURL(){let e=this.media?.getContentID();if(!e||!this.hass||!this._shouldLoad()){this._resolveGeneration.invalidate(),this._resolvedMedia=null;return}let t=this._resolveGeneration.next();this._resolvedMedia=null;let n=this.resolvedMediaCache?.get(e)??await ee(this.hass,e,this.resolvedMediaCache)??null;this._resolveGeneration.isCurrent(t)&&(this._resolvedMedia=n,this.requestUpdate())}willUpdate(e){(e.has(`viewerConfig`)||e.has(`forceSelected`))&&this._lazyLoadController.setConfiguration({lazyLoad:this.viewerConfig?.lazy_load,forceSelected:this.forceSelected}),(e.has(`media`)||e.has(`viewerConfig`)||e.has(`resolvedMediaCache`)||e.has(`hass`))&&this._resolveURL(),e.has(`viewerConfig`)&&this.viewerConfig?.zoomable&&import(`./shared-Dia7VIOe.js`).then(e=>e.v)}_shouldLoad(){return this._lazyLoadController.isLoaded()}_getRelevantCameraConfig(){let e=this.media?.getCameraID();return e?this.cameraManager?.getStore().getCameraConfig(e)??null:null}_renderContainer(e){if(!this.media)return e;let t=this.media.getCameraID(),n=this.media.getID()??void 0,r=t?this.cameraManager?.getStore().getCameraConfig(t)??null:null,a=this.viewManagerEpoch?.manager.getView(),o=i` <advanced-camera-card-media-dimensions-container
      .dimensionsConfig=${this._getRelevantCameraConfig()?.dimensions}
    >
      ${e}
    </advanced-camera-card-media-dimensions-container>`;return i`
      ${this.viewerConfig?.zoomable?i`<advanced-camera-card-zoomer
            .defaultSettings=${C([r?.dimensions?.layout],()=>r?.dimensions?.layout?{pan:r.dimensions.layout.pan,zoom:r.dimensions.layout.zoom}:void 0)}
            .settings=${n?a?.context?.zoom?.[n]?.requested:void 0}
            @advanced-camera-card:zoom:zoomed=${async()=>(await this.getMediaPlayerController())?.setControls(!1)}
            @advanced-camera-card:zoom:unzoomed=${async()=>(await this.getMediaPlayerController())?.setControls()}
            @advanced-camera-card:zoom:change=${e=>M(e,this.viewManagerEpoch?.manager,n)}
          >
            ${o}
          </advanced-camera-card-zoomer>`:o}
    `}render(){if(!this._shouldLoad()||!this.media||!this.hass||!this.viewerConfig)return;let e=this._signedURLController.getError();if(e){let t=this.media?.getContentID();return ne(L(e),{...t&&{metadata:[{text:t,icon:`mdi:identifier`}]}})}let t=this._signedURLController.getValue();if(!t)return o({cardWideConfig:this.cardWideConfig});let n=this.media.getID()??void 0,{isHLS:r,isVideo:a}=K(this._resolvedMedia?.mime_type);return this._renderContainer(i`
      ${a?r?i`<advanced-camera-card-ha-hls-player
              ${B(this._refProvider)}
              allow-exoplayer
              aria-label="${this.media.getTitle()??``}"
              ?autoplay=${!1}
              controls
              muted
              playsinline
              title="${this.media.getTitle()??``}"
              url=${t}
              .hass=${this.hass}
              .targetID=${n}
              ?controls=${this.viewerConfig.controls.builtin}
            >
            </advanced-camera-card-ha-hls-player>`:i`
              <advanced-camera-card-video-player
                ${B(this._refProvider)}
                url=${t}
                aria-label="${this.media.getTitle()??``}"
                title="${this.media.getTitle()??``}"
                .targetID=${n}
                ?controls=${this.viewerConfig.controls.builtin}
              >
              </advanced-camera-card-video-player>
            `:i`<advanced-camera-card-image-player
            ${B(this._refProvider)}
            url="${t}"
            aria-label="${this.media.getTitle()??``}"
            title="${this.media.getTitle()??``}"
            .targetID=${n}
            @click=${()=>{this.viewerConfig?.snapshot_click_plays_clip&&this._switchToRelatedClipView()}}
          ></advanced-camera-card-image-player>`}
    `)}static get styles(){return t(G)}};T([n({attribute:!1})],Y.prototype,`hass`,void 0),T([n({attribute:!1})],Y.prototype,`viewManagerEpoch`,void 0),T([n({attribute:!1})],Y.prototype,`media`,void 0),T([n({attribute:!1})],Y.prototype,`viewerConfig`,void 0),T([n({attribute:!1})],Y.prototype,`resolvedMediaCache`,void 0),T([n({attribute:!1})],Y.prototype,`cameraManager`,void 0),T([n({attribute:!1})],Y.prototype,`cardWideConfig`,void 0),T([n({attribute:!1})],Y.prototype,`forceSelected`,void 0),Y=T([I(`advanced-camera-card-viewer-provider`)],Y);var X=`advanced-camera-card-viewer-provider`,Z=class extends d{constructor(...e){super(...e),this.showControls=!0,this.autoHeight=!0,this._selected=null,this._media=null,this._mediaActionsController=new H,this._mediaHeightController=new x(this,`.embla__slide`),this._refCarousel=P(),this._mediaLoadedInfoSinkController=new S(this,{getTargetID:()=>this._selected!==null&&this._media?.[this._selected]?.getID()||null,callback:()=>{this._mediaHeightController.recalculate(),this._seekHandler()}})}connectedCallback(){super.connectedCallback(),this.autoHeight&&this._mediaHeightController.setRoot(this.renderRoot),this.requestUpdate()}disconnectedCallback(){this._mediaActionsController.destroy(),this._mediaHeightController.destroy(),super.disconnectedCallback()}_getTransitionEffect(){return this.viewerConfig?.transition_effect??y.media_viewer.transition_effect}_getMediaNeighbors(){let e=this._media?.length??0;if(!this._media||this._selected===null)return null;let t=this._selected>0?this._selected-1:null,n=this._selected+1<e?this._selected+1:null;return{...t!==null&&{previous:{index:t,media:this._media[t]}},...n!==null&&{next:{index:n,media:this._media[n]}}}}_setViewSelectedIndex(e){let t=this.viewManagerEpoch?.manager.getView();if(!this._media||!t||this._selected===e)return;let n=t?.queryResults?.clone().selectResultIfFound(t=>t===this._media?.[e],{main:!0,cameraID:this.viewFilterCameraID});if(!n)return;let r=n.getSelectedResult(this.viewFilterCameraID),i=p.isMedia(r)?r.getCameraID():null;this.viewManagerEpoch?.manager.setViewByParameters({params:{queryResults:n,...i&&{camera:i}},modifiers:[new b(`mediaViewer`,`seek`)]})}_getSlides(){if(!this._media)return[];let e=[];for(let t=0;t<this._media.length;++t){let n=this._media[t];if(n){let r=this._renderMediaItem(n,t===this._selected);r&&(e[t]=r)}}return e}willUpdate(e){if(e.has(`viewerConfig`)&&this._mediaActionsController.setOptions({playerSelector:X,...this.viewerConfig?.auto_play&&{autoPlayConditions:this.viewerConfig.auto_play},...this.viewerConfig?.auto_pause&&{autoPauseConditions:this.viewerConfig.auto_pause},...this.viewerConfig?.auto_mute&&{autoMuteConditions:this.viewerConfig.auto_mute},...this.viewerConfig?.auto_unmute&&{autoUnmuteConditions:this.viewerConfig.auto_unmute}}),e.has(`viewManagerEpoch`)){let e=this.viewManagerEpoch?.manager.getView();e?.context?.mediaViewer?.seek||this.toggleAttribute(`unseekable`,!1);let t=this.viewManagerEpoch?.oldView,n=t?.queryResults?.getResults(this.viewFilterCameraID)??null,r=e?.queryResults?.getResults(this.viewFilterCameraID)??null,i=!1;(!this._media||n!==r)&&(this._media=r?.filter(e=>p.isMedia(e))??null,i=!0);let a=t?.queryResults?.getSelectedResult(this.viewFilterCameraID),o=e?.queryResults?.getSelectedResult(this.viewFilterCameraID);if(a!==o||i){let e=this._media?.findIndex(e=>e===o)??null;this._selected=e??(this._media&&this._media.length?this._media.length-1:null)}}}_renderNextPrevious(e,t){let n=e=>{if(!t||!this._media)return;let n=(e===`previous`?t.previous?.index:t.next?.index)??null;n!==null&&this._setViewSelectedIndex(n)},r=k(this),a=r===`ltr`&&e===`left`||r===`rtl`&&e===`right`?`previous`:`next`;return i` <advanced-camera-card-next-previous-control
      slot=${e}
      .hass=${this.hass}
      .side=${e}
      .controlConfig=${this.viewerConfig?.controls.next_previous}
      .thumbnail=${t?.[a]?.media.getThumbnail()??void 0}
      .label=${t?.[a]?.media.getTitle()??``}
      .autoHideState=${te()}
      ?disabled=${!t?.[a]}
      @click=${e=>{n(a),N(e)}}
    ></advanced-camera-card-next-previous-control>`}render(){let e=this._media?.length??0;if(!this._media||!e)return s({cameraID:this.viewFilterCameraID??this.viewManagerEpoch?.manager.getView()?.camera??null},this.cameraManager);if(!this.hass||!this.cameraManager||this._selected===null)return;let t=this._getMediaNeighbors(),n=this.viewManagerEpoch?.manager.getView();return i`
      <advanced-camera-card-carousel
        ${B(this._refCarousel)}
        .dragEnabled=${this.viewerConfig?.draggable??!0}
        .selected=${this._selected}
        .wheelScrolling=${this.viewerConfig?.controls.wheel}
        transitionEffect=${this._getTransitionEffect()}
        @advanced-camera-card:carousel:select=${e=>{this._setViewSelectedIndex(e.detail.index)}}
      >
        ${this.showControls?this._renderNextPrevious(`left`,t):``}
        ${C([this._media,n],()=>this._getSlides())}
        ${this.showControls?this._renderNextPrevious(`right`,t):``}
      </advanced-camera-card-carousel>
      ${n?i` <advanced-camera-card-ptz
            .hass=${this.hass}
            .config=${this.viewerConfig?.controls.ptz}
            .forceVisibility=${n?.context?.ptzControls?.enabled}
          >
          </advanced-camera-card-ptz>`:``}
      <div class="seek-warning">
        <advanced-camera-card-icon
          title="${v(`media_viewer.unseekable`)}"
          .icon=${{icon:`mdi:clock-remove`}}
        >
        </advanced-camera-card-icon>
      </div>
    `}updated(e){super.updated(e),(this._refCarousel.value&&this._mediaActionsController.setRoot(this._refCarousel.value)||e.has(`viewManagerEpoch`))&&this._setMediaTarget(),e.has(`viewManagerEpoch`)&&this.viewManagerEpoch?.manager.getView()?.context?.mediaViewer?.seek?.getTime()!==this.viewManagerEpoch?.oldView?.context?.mediaViewer?.seek?.getTime()&&this._seekHandler()}_setMediaTarget(){!this._media?.length||this._selected===null?this._mediaActionsController.unsetTarget():(this._mediaActionsController.setTarget(this._selected,!this.viewFilterCameraID||this.viewManagerEpoch?.manager.getView()?.camera===this.viewFilterCameraID),this._mediaHeightController.setSelected(this._selected))}async _seekHandler(){let e=this._mediaLoadedInfoSinkController.get()?.mediaPlayerController??null;if(!this.hass||!this._media||!e||this._selected===null)return;let t=this._media[this._selected];if(!t)return;let n=(this.viewManagerEpoch?.manager.getView())?.context?.mediaViewer?.seek??t.getStartTime();if(!n)return;let r=t.includesTime(n);this.toggleAttribute(`unseekable`,!r),!r&&!e.playback?.isPaused()?e.playback?.pause():r&&e.playback?.isPaused()&&e.playback?.play();let i=await this.cameraManager?.getMediaSeekTime(t,n)??null;i!==null&&e.seek?.(i)}_renderMediaItem(t,n){let r=this.viewManagerEpoch?.manager.getView();if(!this.hass||!r||!this.viewerConfig)return null;let a=t.getID(),o=a?r.context?.mediaEpoch?.[a]??0:0;return i` <div class="embla__slide">
      ${e(o,i`<advanced-camera-card-viewer-provider
          .hass=${this.hass}
          .viewManagerEpoch=${this.viewManagerEpoch}
          .media=${t}
          .viewerConfig=${this.viewerConfig}
          .resolvedMediaCache=${this.resolvedMediaCache}
          .cameraManager=${this.cameraManager}
          .cardWideConfig=${this.cardWideConfig}
          .forceSelected=${n}
        ></advanced-camera-card-viewer-provider>`)}
    </div>`}static get styles(){return t(W)}};T([n({attribute:!1})],Z.prototype,`hass`,void 0),T([n({attribute:!1})],Z.prototype,`viewManagerEpoch`,void 0),T([n({attribute:!1})],Z.prototype,`viewFilterCameraID`,void 0),T([n({attribute:!1,hasChanged:m})],Z.prototype,`viewerConfig`,void 0),T([n({attribute:!1})],Z.prototype,`resolvedMediaCache`,void 0),T([n({attribute:!1})],Z.prototype,`cardWideConfig`,void 0),T([n({attribute:!1})],Z.prototype,`cameraManager`,void 0),T([n({attribute:!1})],Z.prototype,`showControls`,void 0),T([n({attribute:!1})],Z.prototype,`autoHeight`,void 0),T([u()],Z.prototype,`_selected`,void 0),Z=T([I(`advanced-camera-card-viewer-carousel`)],Z);var Q=class extends d{_renderCarousel(e){let t=this.viewManagerEpoch?.manager.getView()?.camera,n=e?this.cameraManager?.getStore().getCameraConfig(e)?.dimensions?.grid?.width_factor:void 0;return i`
      <advanced-camera-card-viewer-carousel
        grid-id=${g(e)}
        grid-width-factor=${g(n)}
        .hass=${this.hass}
        .viewManagerEpoch=${this.viewManagerEpoch}
        .viewFilterCameraID=${e}
        .autoHeight=${!e}
        .viewerConfig=${this.viewerConfig}
        .resolvedMediaCache=${this.resolvedMediaCache}
        .cameraManager=${this.cameraManager}
        .cardWideConfig=${this.cardWideConfig}
        .showControls=${!e||t===e}
        .viewItemManager=${this.viewItemManager}
      >
      </advanced-camera-card-viewer-carousel>
    `}willUpdate(e){e.has(`viewManagerEpoch`)&&this._getGridCameraIDs()&&import(`./media-grid-B9ZbtJkf.js`)}_getGridCameraIDs(){let e=this.viewManagerEpoch?.manager.getView();return e?c(e):null}_gridSelectCamera(e){let t=this.viewManagerEpoch?.manager.getView();this.viewManagerEpoch?.manager.setViewByParameters({params:{camera:e,queryResults:t?.queryResults?.clone().promoteCameraSelectionToMainSelection(e)}})}render(){let e=this._getGridCameraIDs();return e?i`
      <advanced-camera-card-media-grid
        .selected=${this.viewManagerEpoch?.manager.getView()?.camera}
        .displayConfig=${this.viewerConfig?.display}
        @advanced-camera-card:media-grid:selected=${e=>this._gridSelectCamera(e.detail.selected)}
      >
        ${[...e].map(e=>this._renderCarousel(e))}
      </advanced-camera-card-media-grid>
    `:this._renderCarousel()}static get styles(){return t(f)}};T([n({attribute:!1})],Q.prototype,`hass`,void 0),T([n({attribute:!1})],Q.prototype,`viewManagerEpoch`,void 0),T([n({attribute:!1})],Q.prototype,`viewerConfig`,void 0),T([n({attribute:!1})],Q.prototype,`resolvedMediaCache`,void 0),T([n({attribute:!1})],Q.prototype,`cardWideConfig`,void 0),T([n({attribute:!1})],Q.prototype,`cameraManager`,void 0),T([n({attribute:!1})],Q.prototype,`viewItemManager`,void 0),Q=T([I(`advanced-camera-card-viewer-grid`)],Q);var $=class extends d{constructor(...e){super(...e),this.isEmpty=!1}willUpdate(e){if(e.has(`viewManagerEpoch`)){let e=this.viewManagerEpoch?.manager.getView();this.isEmpty=!e?.queryResults?.getResults()?.filter(e=>p.isMedia(e)).length}}render(){if(!(!this.hass||!this.viewManagerEpoch||!this.viewerConfig||!this.cameraManager||!this.cardWideConfig))return this.isEmpty?s({cameraID:this.viewManagerEpoch.manager.getView()?.camera??null,inProgress:!!this.viewManagerEpoch.manager.getView()?.context?.loading?.query},this.cameraManager):i` <advanced-camera-card-viewer-grid
      .hass=${this.hass}
      .viewManagerEpoch=${this.viewManagerEpoch}
      .viewerConfig=${this.viewerConfig}
      .resolvedMediaCache=${this.resolvedMediaCache}
      .cameraManager=${this.cameraManager}
      .cardWideConfig=${this.cardWideConfig}
      .viewItemManager=${this.viewItemManager}
    >
    </advanced-camera-card-viewer-grid>`}static get styles(){return t(U)}};T([n({attribute:!1})],$.prototype,`hass`,void 0),T([n({attribute:!1})],$.prototype,`viewManagerEpoch`,void 0),T([n({attribute:!1})],$.prototype,`viewerConfig`,void 0),T([n({attribute:!1})],$.prototype,`resolvedMediaCache`,void 0),T([n({attribute:!1})],$.prototype,`cameraManager`,void 0),T([n({attribute:!1})],$.prototype,`cardWideConfig`,void 0),T([n({attribute:!1})],$.prototype,`viewItemManager`,void 0),T([n({attribute:`empty`,reflect:!0,type:Boolean})],$.prototype,`isEmpty`,void 0),$=T([I(`advanced-camera-card-viewer`)],$);export{$ as AdvancedCameraCardViewer};