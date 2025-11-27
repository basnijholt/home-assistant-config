import{_ as e,t as a,a4 as t,x as s,dc as r,dl as i,dm as d,dn as o,dk as l,r as n,eW as h,eL as c,d3 as m,a as p,d4 as y,d6 as _,n as u}from"./card-2e6f5419.js";import{c as $,e as v}from"./image-player-26f805c0.js";import{d as g}from"./dispatch-live-error-7c4be887.js";import{V as f,h as b,M as w,m as P}from"./audio-f20d952d.js";customElements.whenDefined("ha-web-rtc-player").then((()=>{const c=customElements.get("ha-web-rtc-player");let m=class extends c{constructor(){super(...arguments),this._mediaPlayerController=new f(this,(()=>this._videoEl),(()=>this.controls)),this._addTrack=async e=>{this._remoteStream&&(this._remoteStream.addTrack(e.track),this.hasUpdated||await this.updateComplete,this._videoEl.srcObject=this._remoteStream)}}async getMediaPlayerController(){return this._mediaPlayerController}async _startWebRtc(){await super._startWebRtc(),this.isConnected||this._cleanUp()}render(){return this._error?(g(this),t({type:"error",message:this._error,context:{entity_id:this.entityid}})):s`
        <video
          id="remote-stream"
          ?autoplay=${this.autoPlay}
          .muted=${this.muted}
          ?playsinline=${this.playsInline}
          ?controls=${this.controls}
          poster=${r(this.posterUrl)}
          @loadedmetadata=${()=>{this.controls&&b(this._videoEl,w)}}
          @loadeddata=${e=>this._loadedDataHandler(e)}
          @volumechange=${()=>i(this)}
          @play=${()=>d(this)}
          @pause=${()=>o(this)}
        ></video>
      `}_loadedDataHandler(e){super._loadedData(),l(this,e,{mediaPlayerController:this._mediaPlayerController,capabilities:{supportsPause:!0,hasAudio:P(this._videoEl)},technology:["webrtc"]})}static get styles(){return[super.styles,n($),h`
          :host {
            width: 100%;
            height: 100%;
          }
          video {
            width: 100%;
            height: 100%;
          }
        `]}};m=e([a("advanced-camera-card-ha-web-rtc-player")],m)})),customElements.whenDefined("ha-camera-stream").then((()=>{const t="web_rtc",r="mjpeg";let i=class extends(customElements.get("ha-camera-stream")){constructor(){super(...arguments),this._mediaLoadedInfoPerStream={},this._mediaLoadedInfoDispatched=null}async getMediaPlayerController(){return await this.updateComplete,await(this._player?.getMediaPlayerController())??null}_storeMediaLoadedInfoHandler(e,a){this._storeMediaLoadedInfo(e,a.detail),a.stopPropagation()}_storeMediaLoadedInfo(e,a){this._mediaLoadedInfoPerStream[e]=a,this.requestUpdate()}_renderStream(e){return this.stateObj?e.type===r?s`
          <advanced-camera-card-image-player
            @advanced-camera-card:media:loaded=${e=>{this._storeMediaLoadedInfo(r,e.detail),e.stopPropagation()}}
            src=${void 0===this._connected||this._connected?(a=this.stateObj,`/api/camera_proxy_stream/${a.entity_id}?token=${a.attributes.access_token}`):this._posterUrl||""}
            technology="mjpeg"
            class="player"
          ></advanced-camera-card-image-player>
        `:"hls"===e.type?s` <advanced-camera-card-ha-hls-player
          ?autoplay=${!1}
          playsinline
          .allowExoPlayer=${this.allowExoPlayer}
          .muted=${this.muted}
          .controls=${this.controls}
          .hass=${this.hass}
          .entityid=${this.stateObj.entity_id}
          .posterUrl=${this._posterUrl}
          @advanced-camera-card:media:loaded=${e=>{this._storeMediaLoadedInfoHandler("hls",e),e.stopPropagation()}}
          @streams=${this._handleHlsStreams}
          class="player ${e.visible?"":"hidden"}"
        ></advanced-camera-card-ha-hls-player>`:e.type===t?s`<advanced-camera-card-ha-web-rtc-player
          ?autoplay=${!1}
          playsinline
          .muted=${this.muted}
          .controls=${this.controls}
          .hass=${this.hass}
          .entityid=${this.stateObj.entity_id}
          .posterUrl=${this._posterUrl}
          @advanced-camera-card:media:loaded=${e=>{this._storeMediaLoadedInfoHandler(t,e),e.stopPropagation()}}
          @streams=${this._handleWebRtcStreams}
          class="player ${e.visible?"":"hidden"}"
        ></advanced-camera-card-ha-web-rtc-player>`:c:c;var a}updated(e){super.updated(e);const a=this._streams(this._capabilities?.frontend_stream_types,this._hlsStreams,this._webRtcStreams,this.muted).find((e=>e.visible))??null;if(a){const e=this._mediaLoadedInfoPerStream[a.type];e&&e!==this._mediaLoadedInfoDispatched&&(this._mediaLoadedInfoDispatched=e,m(this,e))}}static get styles(){return[super.styles,n($),h`
          :host {
            width: 100%;
            height: 100%;
          }
          img {
            width: 100%;
            height: 100%;
          }
        `]}};e([v(".player:not(.hidden)")],i.prototype,"_player",void 0),i=e([a("advanced-camera-card-ha-camera-stream")],i)}));let C=class extends p{constructor(){super(...arguments),this.controls=!1,this._playerRef=y()}async getMediaPlayerController(){return await this.updateComplete,await(this._playerRef.value?.getMediaPlayerController())??null}render(){if(this.hass)return s` <advanced-camera-card-ha-camera-stream
      ${_(this._playerRef)}
      .hass=${this.hass}
      .stateObj=${this.cameraConfig?.camera_entity?this.hass.states[this.cameraConfig.camera_entity]:void 0}
      .controls=${this.controls}
      .muted=${!0}
    >
    </advanced-camera-card-ha-camera-stream>`}static get styles(){return n(":host {\n  width: 100%;\n  height: 100%;\n  display: block;\n}")}};e([u({attribute:!1})],C.prototype,"hass",void 0),e([u({attribute:!1})],C.prototype,"cameraConfig",void 0),e([u({attribute:!0,type:Boolean})],C.prototype,"controls",void 0),C=e([a("advanced-camera-card-live-ha")],C);export{C as AdvancedCameraCardLiveHA};
