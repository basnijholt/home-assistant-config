import{_ as a,n as e,t as i,a as t,cQ as s,cS as r,x as o,cZ as m,cU as n,r as g,d2 as c,dK as f}from"./card-b90190e9.js";import{u as h,i as u}from"./media-layout-3ed3ad51.js";import{r as d}from"./image-base-534863bd.js";import"./zoomer-ac938891.js";let p=class extends t{constructor(){super(...arguments),this._refImage=s()}async play(){await(this._refImage.value?.play())}async pause(){await(this._refImage.value?.pause())}async mute(){await(this._refImage.value?.mute())}async unmute(){await(this._refImage.value?.unmute())}isMuted(){return!!this._refImage.value?.isMuted()}async seek(a){await(this._refImage.value?.seek(a))}async setControls(a){await(this._refImage.value?.setControls(a))}isPaused(){return this._refImage.value?.isPaused()??!0}async getScreenshotURL(){return await(this._refImage.value?.getScreenshotURL())??null}willUpdate(a){(a.has("cameraConfig")||a.has("imageConfig"))&&("camera"===d({imageConfig:this.imageConfig,cameraConfig:this.cameraConfig})?(h(this,this.cameraConfig?.dimensions?.layout),this.style.aspectRatio=r({ratio:this.cameraConfig?.dimensions?.aspect_ratio})):(h(this),this.style.removeProperty("aspect-ratio")))}_useZoomIfRequired(a){const e=f,i=this.viewManagerEpoch?.manager.getView(),t=d({imageConfig:this.imageConfig,cameraConfig:this.cameraConfig});return this.imageConfig?.zoomable?o` <frigate-card-zoomer
          .defaultSettings=${u([this.imageConfig,this.cameraConfig?.dimensions?.layout],(()=>"camera"===t&&this.cameraConfig?.dimensions?.layout?{pan:this.cameraConfig.dimensions.layout.pan,zoom:this.cameraConfig.dimensions.layout.zoom}:void 0))}
          .settings=${i?.context?.zoom?.[e]?.requested}
          @frigate-card:zoom:change=${a=>m(a,this.viewManagerEpoch?.manager,e)}
        >
          ${a}
        </frigate-card-zoomer>`:a}render(){if(this.hass&&this.cameraConfig)return this._useZoomIfRequired(o`
      <frigate-card-image-base
        ${n(this._refImage)}
        .hass=${this.hass}
        .view=${this.viewManagerEpoch?.manager.getView()}
        .imageConfig=${this.imageConfig}
        .cameraConfig=${this.cameraConfig}
      >
      </frigate-card-image-base>
    `)}static get styles(){return g(c)}};a([e({attribute:!1})],p.prototype,"hass",void 0),a([e({attribute:!1})],p.prototype,"viewManagerEpoch",void 0),a([e({attribute:!1})],p.prototype,"cameraConfig",void 0),a([e({attribute:!1})],p.prototype,"cameraManager",void 0),a([e({attribute:!1})],p.prototype,"imageConfig",void 0),p=a([i("frigate-card-image")],p);export{p as FrigateCardImage};
