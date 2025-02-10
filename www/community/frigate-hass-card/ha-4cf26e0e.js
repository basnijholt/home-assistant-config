import{ds as e,cX as t,x as s,d6 as a,dC as r,dD as i,dE as d,dB as o,r as n,eV as l,_ as h,t as c,eK as u,eN as p,cT as y,a as m,cU as _,cY as v,n as $}from"./card-bc00afb6.js";import{c as f,e as g}from"./ha-hls-player-88f3a3c6.js";import{s as b,d as w,h as R,c as L}from"./media-9cad1b6b.js";import{m as I}from"./audio-cf3a75aa.js";customElements.whenDefined("ha-web-rtc-player").then((()=>{let u=class extends(customElements.get("ha-web-rtc-player")){async play(){return this._video?.play()}async pause(){this._video?.pause()}async mute(){this._video&&(this._video.muted=!0)}async unmute(){this._video&&(this._video.muted=!1)}isMuted(){return this._video?.muted??!0}async seek(e){this._video&&(this._video.currentTime=e)}async setControls(e){this._video&&b(this._video,e??this.controls)}isPaused(){return this._video?.paused??!0}async getScreenshotURL(){return this._video?e(this._video):null}getFullscreenElement(){return this._video??null}render(){return this._error?(w(this),t({type:"error",message:this._error,context:{entity_id:this.entityid}})):s`
        <video
          id="remote-stream"
          ?autoplay=${this.autoPlay}
          .muted=${this.muted}
          ?playsinline=${this.playsInline}
          ?controls=${this.controls}
          poster=${a(this.posterUrl)}
          @loadedmetadata=${()=>{this.controls&&R(this._video,L)}}
          @loadeddata=${e=>this._loadedDataHandler(e)}
          @volumechange=${()=>r(this)}
          @play=${()=>i(this)}
          @pause=${()=>d(this)}
        ></video>
      `}_loadedDataHandler(e){super._loadedData(),o(this,e,{player:this,capabilities:{supportsPause:!0,hasAudio:I(this._video)},technology:["webrtc"]})}static get styles(){return[super.styles,n(f),l`
          :host {
            width: 100%;
            height: 100%;
          }
          video {
            width: 100%;
            height: 100%;
          }
        `]}};h([g("#remote-stream")],u.prototype,"_video",void 0),u=h([c("advanced-camera-card-ha-web-rtc-player")],u)})),customElements.whenDefined("ha-camera-stream").then((()=>{const e="web_rtc",t="mjpeg";let a=class extends(customElements.get("ha-camera-stream")){constructor(){super(...arguments),this._mediaLoadedInfoPerStream={},this._mediaLoadedInfoDispatched=null}async play(){return this._player?.play()}async pause(){this._player?.pause()}async mute(){this._player?.mute()}async unmute(){this._player?.unmute()}isMuted(){return this._player?.isMuted()??!0}async seek(e){this._player?.seek(e)}async setControls(e){this._player&&this._player.setControls(e??this.controls)}isPaused(){return this._player?.isPaused()??!0}async getScreenshotURL(){return this._player?await this._player.getScreenshotURL():null}getFullscreenElement(){return this._player?.getFullscreenElement()??null}_storeMediaLoadedInfoHandler(e,t){this._storeMediaLoadedInfo(e,t.detail),t.stopPropagation()}_storeMediaLoadedInfo(e,t){this._mediaLoadedInfoPerStream[e]=t,this.requestUpdate()}_renderStream(a){return this.stateObj?a.type===t?s`
          <img
            @load=${e=>this._storeMediaLoadedInfo(t,p(e,{player:this,technology:["mjpeg"]}))}
            .src=${void 0===this._connected||this._connected?(r=this.stateObj,`/api/camera_proxy_stream/${r.entity_id}?token=${r.attributes.access_token}`):this._posterUrl||""}
          />
        `:"hls"===a.type?s` <advanced-camera-card-ha-hls-player
          ?autoplay=${!1}
          playsinline
          .allowExoPlayer=${this.allowExoPlayer}
          .muted=${this.muted}
          .controls=${this.controls}
          .hass=${this.hass}
          .entityid=${this.stateObj.entity_id}
          .posterUrl=${this._posterUrl}
          @advanced-camera-card:media:loaded=${e=>this._storeMediaLoadedInfoHandler("hls",e)}
          @streams=${this._handleHlsStreams}
          class="player ${a.visible?"":"hidden"}"
        ></advanced-camera-card-ha-hls-player>`:a.type===e?s`<advanced-camera-card-ha-web-rtc-player
          ?autoplay=${!1}
          playsinline
          .muted=${this.muted}
          .controls=${this.controls}
          .hass=${this.hass}
          .entityid=${this.stateObj.entity_id}
          .posterUrl=${this._posterUrl}
          @advanced-camera-card:media:loaded=${t=>this._storeMediaLoadedInfoHandler(e,t)}
          @streams=${this._handleWebRtcStreams}
          class="player ${a.visible?"":"hidden"}"
        ></advanced-camera-card-ha-web-rtc-player>`:u:u;var r}updated(e){super.updated(e);const t=this._streams(this._capabilities?.frontend_stream_types,this._hlsStreams,this._webRtcStreams).find((e=>e.visible))??null;if(t){const e=this._mediaLoadedInfoPerStream[t.type];e&&e!==this._mediaLoadedInfoDispatched&&(this._mediaLoadedInfoDispatched=e,y(this,e))}}static get styles(){return[super.styles,n(f),l`
          :host {
            width: 100%;
            height: 100%;
          }
          img {
            width: 100%;
            height: 100%;
          }
        `]}};h([g(".player:not(.hidden)")],a.prototype,"_player",void 0),a=h([c("advanced-camera-card-ha-camera-stream")],a)}));let P=class extends m{constructor(){super(...arguments),this.controls=!1,this._playerRef=_()}async play(){return this._playerRef.value?.play()}async pause(){this._playerRef.value?.pause()}async mute(){this._playerRef.value?.mute()}async unmute(){this._playerRef.value?.unmute()}isMuted(){return this._playerRef.value?.isMuted()??!0}async seek(e){this._playerRef.value?.seek(e)}async setControls(e){this._playerRef.value?.setControls(e??this.controls)}isPaused(){return this._playerRef.value?.isPaused()??!0}async getScreenshotURL(){return await(this._playerRef.value?.getScreenshotURL())??null}getFullscreenElement(){return this._playerRef.value?.getFullscreenElement()??null}render(){if(this.hass)return s` <advanced-camera-card-ha-camera-stream
      ${v(this._playerRef)}
      .hass=${this.hass}
      .stateObj=${this.cameraConfig?.camera_entity?this.hass.states[this.cameraConfig.camera_entity]:void 0}
      .controls=${this.controls}
      .muted=${!0}
    >
    </advanced-camera-card-ha-camera-stream>`}static get styles(){return n(":host {\n  width: 100%;\n  height: 100%;\n  display: block;\n}")}};h([$({attribute:!1})],P.prototype,"hass",void 0),h([$({attribute:!1})],P.prototype,"cameraConfig",void 0),h([$({attribute:!0,type:Boolean})],P.prototype,"controls",void 0),P=h([c("advanced-camera-card-live-ha")],P);export{P as AdvancedCameraCardLiveHA};
