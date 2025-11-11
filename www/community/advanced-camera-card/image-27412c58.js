import{a,d4 as e,x as t,d6 as r,r as i,dd as s,_ as d,n,t as o}from"./card-04eb008a.js";import"./image-updating-player-b3b914cc.js";let g=class extends a{constructor(){super(...arguments),this._refImage=e()}async getMediaPlayerController(){return await this.updateComplete,await(this._refImage.value?.getMediaPlayerController())??null}render(){if(this.hass&&this.cameraConfig)return t`
      <advanced-camera-card-image-updating-player
        ${r(this._refImage)}
        .hass=${this.hass}
        .imageConfig=${this.cameraConfig.image}
        .cameraConfig=${this.cameraConfig}
      >
      </advanced-camera-card-image-updating-player>
    `}static get styles(){return i(s)}};d([n({attribute:!1})],g.prototype,"hass",void 0),d([n({attribute:!1})],g.prototype,"cameraConfig",void 0),g=d([o("advanced-camera-card-live-image")],g);export{g as AdvancedCameraCardLiveImage};
