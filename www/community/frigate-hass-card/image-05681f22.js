import{a as e,cU as a,x as t,cY as s,r,d7 as i,_ as u,n,t as g}from"./card-f2dccb12.js";import"./image-base-57ec0a29.js";let m=class extends e{constructor(){super(...arguments),this._refImage=a()}async play(){await(this._refImage.value?.play())}async pause(){await(this._refImage.value?.pause())}async mute(){await(this._refImage.value?.mute())}async unmute(){await(this._refImage.value?.unmute())}isMuted(){return!!this._refImage.value?.isMuted()}async seek(e){await(this._refImage.value?.seek(e))}async setControls(e){await(this._refImage.value?.setControls(e))}isPaused(){return this._refImage.value?.isPaused()??!0}async getScreenshotURL(){return await(this._refImage.value?.getScreenshotURL())??null}getFullscreenElement(){return this._refImage.value?.getFullscreenElement()??null}render(){if(this.hass&&this.cameraConfig)return t`
      <frigate-card-image-base
        ${s(this._refImage)}
        .hass=${this.hass}
        .imageConfig=${this.cameraConfig.image}
        .cameraConfig=${this.cameraConfig}
      >
      </frigate-card-image-base>
    `}static get styles(){return r(i)}};u([n({attribute:!1})],m.prototype,"hass",void 0),u([n({attribute:!1})],m.prototype,"cameraConfig",void 0),m=u([g("frigate-card-live-image")],m);export{m as FrigateCardLiveImage};
