import{a as e,cU as a,x as s,cY as t,r,d7 as i,_ as n,n as u,t as m}from"./card-bc00afb6.js";import"./image-base-faa8551d.js";let c=class extends e{constructor(){super(...arguments),this._refImage=a()}async play(){await(this._refImage.value?.play())}async pause(){await(this._refImage.value?.pause())}async mute(){await(this._refImage.value?.mute())}async unmute(){await(this._refImage.value?.unmute())}isMuted(){return!!this._refImage.value?.isMuted()}async seek(e){await(this._refImage.value?.seek(e))}async setControls(e){await(this._refImage.value?.setControls(e))}isPaused(){return this._refImage.value?.isPaused()??!0}async getScreenshotURL(){return await(this._refImage.value?.getScreenshotURL())??null}getFullscreenElement(){return this._refImage.value?.getFullscreenElement()??null}render(){if(this.hass&&this.cameraConfig)return s`
      <advanced-camera-card-image-base
        ${t(this._refImage)}
        .hass=${this.hass}
        .imageConfig=${this.cameraConfig.image}
        .cameraConfig=${this.cameraConfig}
      >
      </advanced-camera-card-image-base>
    `}static get styles(){return r(i)}};n([u({attribute:!1})],c.prototype,"hass",void 0),n([u({attribute:!1})],c.prototype,"cameraConfig",void 0),c=n([m("advanced-camera-card-live-image")],c);export{c as AdvancedCameraCardLiveImage};
