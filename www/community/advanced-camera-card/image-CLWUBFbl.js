import{A as e,D as t,Eo as n,Er as r,Oo as i,To as a,an as o,bo as s,dr as c,ft as l,j as u,jo as d,k as f,rn as p,tt as m,wo as h,yo as g}from"./shared-CAMseYlJ.js";import{t as _}from"./image-updating-player-HEowecT7.js";var v=`:host{background-color:var(--advanced-camera-card-background);background-image:linear-gradient(color-mix(in srgb, var(--advanced-camera-card-text-color), transparent 90%) 0 0), linear-gradient(color-mix(in srgb, var(--advanced-camera-card-text-color), transparent 90%) 0 0), linear-gradient(color-mix(in srgb, var(--advanced-camera-card-text-color), transparent 90%) 0 0), linear-gradient(color-mix(in srgb, var(--advanced-camera-card-text-color), transparent 90%) 0 0), linear-gradient(color-mix(in srgb, var(--advanced-camera-card-text-color), transparent 90%) 0 0), linear-gradient(color-mix(in srgb, var(--advanced-camera-card-text-color), transparent 90%) 0 0), linear-gradient(color-mix(in srgb, var(--advanced-camera-card-text-color), transparent 90%) 0 0), linear-gradient(color-mix(in srgb, var(--advanced-camera-card-text-color), transparent 90%) 0 0);background-position:10px 10px,10px 10px,right 10px top 10px,right 10px top 10px,left 10px bottom 10px,left 10px bottom 10px,right 10px bottom 10px,right 10px bottom 10px;background-repeat:no-repeat;background-size:24px 1px,1px 24px,24px 1px,1px 24px,24px 1px,1px 24px,24px 1px,1px 24px;width:100%;height:100%;display:block}.zoom-wrapper{width:100%;height:100%;display:block}`,y=class extends n{constructor(){super(),this._refImage=g(),new t(this,{getTargetID:()=>o,isLoadExpected:()=>!!this.hass&&!this._getConfigurationError(),getAttemptID:()=>this._getMediaEpoch()})}_getMediaEpoch(){return(this.viewManagerEpoch?.manager.getView())?.context?.mediaEpoch?.__IMAGE_VIEW__??0}_getConfigurationError(){return _({imageConfig:this.imageConfig,cameraConfig:this.cameraConfig})===`camera`&&!this.cameraConfig?c(`error.no_camera_for_image`):null}async getMediaPlayerController(){return await this.updateComplete,await this._refImage.value?.getMediaPlayerController()??null}_renderContainer(e){let t=o,n=this.viewManagerEpoch?.manager.getView(),r=_({imageConfig:this.imageConfig,cameraConfig:this.cameraConfig}),a=i` <advanced-camera-card-media-dimensions-container
      .dimensionsConfig=${r===`camera`?this.cameraConfig?.dimensions:void 0}
    >
      ${e}
    </advanced-camera-card-media-dimensions-container>`;return i` ${this.imageConfig?.zoomable?i`<advanced-camera-card-zoomer
          .defaultSettings=${u([this.imageConfig,this.cameraConfig?.dimensions?.layout],()=>r===`camera`&&this.cameraConfig?.dimensions?.layout?{pan:this.cameraConfig.dimensions.layout.pan,zoom:this.cameraConfig.dimensions.layout.zoom}:void 0)}
          .settings=${n?.context?.zoom?.[t]?.requested}
          @advanced-camera-card:zoom:change=${e=>p(e,this.viewManagerEpoch?.manager,t)}
        >
          ${a}
        </advanced-camera-card-zoomer>`:a}`}_resolveProxyConfig(e){return e?{...r(e),enabled:e.enabled,enforce:e.enabled}:null}render(){if(!this.hass)return;let t=this._getConfigurationError();if(t)return m(t,{icon:`mdi:camera-off`});let n=this.viewManagerEpoch?.manager.getView();return this._renderContainer(i`
      ${e(this._getMediaEpoch(),i`
          <advanced-camera-card-image-updating-player
            ${s(this._refImage)}
            .hass=${this.hass}
            .view=${n}
            .imageConfig=${this.imageConfig}
            .cameraConfig=${this.cameraConfig}
            .targetID=${o}
            .proxyConfig=${this._resolveProxyConfig(this.imageConfig?.proxy)??void 0}
            @advanced-camera-card:image-updating-player:error=${e=>f(this,{targetID:o,reason:e.detail})}
          >
          </advanced-camera-card-image-updating-player>
        `)}
    `)}static get styles(){return d(v)}};l([h({attribute:!1})],y.prototype,`hass`,void 0),l([h({attribute:!1})],y.prototype,`viewManagerEpoch`,void 0),l([h({attribute:!1})],y.prototype,`cameraConfig`,void 0),l([h({attribute:!1})],y.prototype,`cameraManager`,void 0),l([h({attribute:!1})],y.prototype,`imageConfig`,void 0),y=l([a(`advanced-camera-card-image`)],y);export{y as AdvancedCameraCardImage};