import{Eo as e,Oo as t,To as n,U as r,bo as i,c as a,ft as o,jo as s,wo as c,yo as l}from"./shared-CAMseYlJ.js";import"./image-updating-player-HEowecT7.js";var u=class extends e{constructor(...e){super(...e),this._refImage=l()}async getMediaPlayerController(){return await this.updateComplete,await this._refImage.value?.getMediaPlayerController()??null}render(){let e=this.camera?.getConfig();if(!(!this.hass||!e))return t`
      <advanced-camera-card-image-updating-player
        ${i(this._refImage)}
        .hass=${this.hass}
        .imageConfig=${e.image}
        .cameraConfig=${e}
        .targetID=${this.targetID}
        .cameraTitle=${this.cameraTitle}
        .proxyConfig=${this.camera?.getLiveProxyConfig()}
        @advanced-camera-card:image-updating-player:error=${e=>a(this,{reason:e.detail})}
      >
      </advanced-camera-card-image-updating-player>
    `}static get styles(){return s(r)}};o([c({attribute:!1})],u.prototype,`hass`,void 0),o([c({attribute:!1})],u.prototype,`camera`,void 0),o([c({attribute:!1})],u.prototype,`targetID`,void 0),o([c({attribute:!1})],u.prototype,`cameraTitle`,void 0),u=o([n(`advanced-camera-card-live-image`)],u);export{u as AdvancedCameraCardLiveImage};