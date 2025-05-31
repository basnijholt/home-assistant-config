import{a,d2 as e,x as t,d5 as r,r as i,dc as s,_ as d,n,t as o}from"./card-ab16aecd.js";import"./image-updating-player-39ff1a64.js";let c=class extends a{constructor(){super(...arguments),this._refImage=e()}async getMediaPlayerController(){return await this.updateComplete,await(this._refImage.value?.getMediaPlayerController())??null}render(){if(this.hass&&this.cameraConfig)return t`
      <advanced-camera-card-image-updating-player
        ${r(this._refImage)}
        .hass=${this.hass}
        .imageConfig=${this.cameraConfig.image}
        .cameraConfig=${this.cameraConfig}
      >
      </advanced-camera-card-image-updating-player>
    `}static get styles(){return i(s)}};d([n({attribute:!1})],c.prototype,"hass",void 0),d([n({attribute:!1})],c.prototype,"cameraConfig",void 0),c=d([o("advanced-camera-card-live-image")],c);export{c as AdvancedCameraCardLiveImage};
