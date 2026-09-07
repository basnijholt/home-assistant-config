import{Ao as e,Co as t,Do as n,To as r,U as i,c as a,lt as o,vo as s,wo as c,yo as l}from"./shared-Dia7VIOe.js";import"./image-updating-player-C0IqMx48.js";var u=class extends r{constructor(...e){super(...e),this._refImage=s()}async getMediaPlayerController(){return await this.updateComplete,await this._refImage.value?.getMediaPlayerController()??null}render(){let e=this.camera?.getConfig();if(!(!this.hass||!e))return n`
      <advanced-camera-card-image-updating-player
        ${l(this._refImage)}
        .hass=${this.hass}
        .imageConfig=${e.image}
        .cameraConfig=${e}
        .targetID=${this.targetID}
        .cameraTitle=${this.cameraTitle}
        .proxyConfig=${this.camera?.getLiveProxyConfig()}
        @advanced-camera-card:image-updating-player:error=${e=>a(this,{reason:e.detail})}
      >
      </advanced-camera-card-image-updating-player>
    `}static get styles(){return e(i)}};o([t({attribute:!1})],u.prototype,`hass`,void 0),o([t({attribute:!1})],u.prototype,`camera`,void 0),o([t({attribute:!1})],u.prototype,`targetID`,void 0),o([t({attribute:!1})],u.prototype,`cameraTitle`,void 0),u=o([c(`advanced-camera-card-live-image`)],u);export{u as AdvancedCameraCardLiveImage};