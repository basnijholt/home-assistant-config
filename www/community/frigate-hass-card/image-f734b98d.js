import{_ as e,n as a,t,a as i,cQ as s,cS as r,x as o,c_ as n,cU as m,r as g,d3 as c,dL as u}from"./card-cbf3bfb8.js";import{u as f,i as h}from"./media-layout-fd51a9f5.js";import{r as l}from"./image-base-f5eb8aac.js";import"./zoomer-5e570acc.js";let d=class extends i{constructor(){super(...arguments),this._refImage=s()}async play(){await(this._refImage.value?.play())}async pause(){await(this._refImage.value?.pause())}async mute(){await(this._refImage.value?.mute())}async unmute(){await(this._refImage.value?.unmute())}isMuted(){return!!this._refImage.value?.isMuted()}async seek(e){await(this._refImage.value?.seek(e))}async setControls(e){await(this._refImage.value?.setControls(e))}isPaused(){return this._refImage.value?.isPaused()??!0}async getScreenshotURL(){return await(this._refImage.value?.getScreenshotURL())??null}getFullscreenElement(){return this._refImage.value?.getFullscreenElement()??null}willUpdate(e){(e.has("cameraConfig")||e.has("imageConfig"))&&("camera"===l({imageConfig:this.imageConfig,cameraConfig:this.cameraConfig})?(f(this,this.cameraConfig?.dimensions?.layout),this.style.aspectRatio=r({ratio:this.cameraConfig?.dimensions?.aspect_ratio})):(f(this),this.style.removeProperty("aspect-ratio")))}_useZoomIfRequired(e){const a=u,t=this.viewManagerEpoch?.manager.getView(),i=l({imageConfig:this.imageConfig,cameraConfig:this.cameraConfig});return this.imageConfig?.zoomable?o` <frigate-card-zoomer
          .defaultSettings=${h([this.imageConfig,this.cameraConfig?.dimensions?.layout],(()=>"camera"===i&&this.cameraConfig?.dimensions?.layout?{pan:this.cameraConfig.dimensions.layout.pan,zoom:this.cameraConfig.dimensions.layout.zoom}:void 0))}
          .settings=${t?.context?.zoom?.[a]?.requested}
          @frigate-card:zoom:change=${e=>n(e,this.viewManagerEpoch?.manager,a)}
        >
          ${e}
        </frigate-card-zoomer>`:e}render(){if(this.hass&&this.cameraConfig)return this._useZoomIfRequired(o`
      <frigate-card-image-base
        ${m(this._refImage)}
        .hass=${this.hass}
        .view=${this.viewManagerEpoch?.manager.getView()}
        .imageConfig=${this.imageConfig}
        .cameraConfig=${this.cameraConfig}
      >
      </frigate-card-image-base>
    `)}static get styles(){return g(c)}};e([a({attribute:!1})],d.prototype,"hass",void 0),e([a({attribute:!1})],d.prototype,"viewManagerEpoch",void 0),e([a({attribute:!1})],d.prototype,"cameraConfig",void 0),e([a({attribute:!1})],d.prototype,"cameraManager",void 0),e([a({attribute:!1})],d.prototype,"imageConfig",void 0),d=e([t("frigate-card-image")],d);export{d as FrigateCardImage};
