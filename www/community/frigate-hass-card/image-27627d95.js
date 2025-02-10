import{_ as a,n as e,t,a as i,cU as s,cW as r,x as o,d2 as n,cY as m,r as g,d7 as c,dP as u}from"./card-bc00afb6.js";import{u as h,i as d}from"./media-layout-0b2aec48.js";import{r as f}from"./image-base-faa8551d.js";import"./zoomer-6ae21bde.js";let l=class extends i{constructor(){super(...arguments),this._refImage=s()}async play(){await(this._refImage.value?.play())}async pause(){await(this._refImage.value?.pause())}async mute(){await(this._refImage.value?.mute())}async unmute(){await(this._refImage.value?.unmute())}isMuted(){return!!this._refImage.value?.isMuted()}async seek(a){await(this._refImage.value?.seek(a))}async setControls(a){await(this._refImage.value?.setControls(a))}isPaused(){return this._refImage.value?.isPaused()??!0}async getScreenshotURL(){return await(this._refImage.value?.getScreenshotURL())??null}getFullscreenElement(){return this._refImage.value?.getFullscreenElement()??null}willUpdate(a){(a.has("cameraConfig")||a.has("imageConfig"))&&("camera"===f({imageConfig:this.imageConfig,cameraConfig:this.cameraConfig})?(h(this,this.cameraConfig?.dimensions?.layout),this.style.aspectRatio=r({ratio:this.cameraConfig?.dimensions?.aspect_ratio})):(h(this),this.style.removeProperty("aspect-ratio")))}_useZoomIfRequired(a){const e=u,t=this.viewManagerEpoch?.manager.getView(),i=f({imageConfig:this.imageConfig,cameraConfig:this.cameraConfig});return this.imageConfig?.zoomable?o` <advanced-camera-card-zoomer
          .defaultSettings=${d([this.imageConfig,this.cameraConfig?.dimensions?.layout],(()=>"camera"===i&&this.cameraConfig?.dimensions?.layout?{pan:this.cameraConfig.dimensions.layout.pan,zoom:this.cameraConfig.dimensions.layout.zoom}:void 0))}
          .settings=${t?.context?.zoom?.[e]?.requested}
          @advanced-camera-card:zoom:change=${a=>n(a,this.viewManagerEpoch?.manager,e)}
        >
          ${a}
        </advanced-camera-card-zoomer>`:a}render(){if(this.hass&&this.cameraConfig)return this._useZoomIfRequired(o`
      <advanced-camera-card-image-base
        ${m(this._refImage)}
        .hass=${this.hass}
        .view=${this.viewManagerEpoch?.manager.getView()}
        .imageConfig=${this.imageConfig}
        .cameraConfig=${this.cameraConfig}
      >
      </advanced-camera-card-image-base>
    `)}static get styles(){return g(c)}};a([e({attribute:!1})],l.prototype,"hass",void 0),a([e({attribute:!1})],l.prototype,"viewManagerEpoch",void 0),a([e({attribute:!1})],l.prototype,"cameraConfig",void 0),a([e({attribute:!1})],l.prototype,"cameraManager",void 0),a([e({attribute:!1})],l.prototype,"imageConfig",void 0),l=a([t("advanced-camera-card-image")],l);export{l as AdvancedCameraCardImage};
