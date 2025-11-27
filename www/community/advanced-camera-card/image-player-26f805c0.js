import{_ as e,t as a,a4 as t,dg as r,x as o,dl as i,dm as s,dn as n,dk as d,r as l,eW as c,eZ as h,n as m,a as u,d4 as y,d6 as v,dc as p}from"./card-2e6f5419.js";import{d as g}from"./dispatch-live-error-7c4be887.js";import{V as b,h as _,m as f,M as w}from"./audio-f20d952d.js";
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const x=(e,a,t)=>(t.configurable=!0,t.enumerable=!0,Reflect.decorate&&"object"!=typeof a&&Object.defineProperty(e,a,t),t)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;function C(e,a){return(t,r,o)=>{const i=a=>a.renderRoot?.querySelector(e)??null;if(a){const{get:e,set:a}="object"==typeof r?t:o??(()=>{const e=Symbol();return{get(){return this[e]},set(a){this[e]=a}}})();return x(t,r,{get(){let t=e.call(this);return void 0===t&&(t=i(this),(null!==t||this.hasUpdated)&&a.call(this,t)),t}})}return x(t,r,{get(){return i(this)}})}}var P="img,\nvideo {\n  object-fit: var(--advanced-camera-card-media-layout-fit, contain);\n  object-position: var(--advanced-camera-card-media-layout-position-x, 50%) var(--advanced-camera-card-media-layout-position-y, 50%);\n  object-view-box: inset(var(--advanced-camera-card-media-layout-view-box-top, 0%) var(--advanced-camera-card-media-layout-view-box-right, 0%) var(--advanced-camera-card-media-layout-view-box-bottom, 0%) var(--advanced-camera-card-media-layout-view-box-left, 0%));\n}";customElements.whenDefined("ha-hls-player").then((()=>{const h=customElements.get("ha-hls-player");let m=class extends h{constructor(){super(...arguments),this._mediaPlayerController=new b(this,(()=>this._video),(()=>this.controls))}async getMediaPlayerController(){return this._mediaPlayerController}render(){if(this._error){if(this._errorIsFatal)return g(this),t({type:"error",message:this._error,context:{entity_id:this.entityid}});r(this._error,console.error)}return o`
        <video
          id="video"
          .poster=${this.posterUrl}
          ?autoplay=${this.autoPlay}
          .muted=${this.muted}
          ?playsinline=${this.playsInline}
          ?controls=${this.controls}
          @loadedmetadata=${()=>{this.controls&&_(this._video,w)}}
          @loadeddata=${e=>this._loadedDataHandler(e)}
          @volumechange=${()=>i(this)}
          @play=${()=>s(this)}
          @pause=${()=>n(this)}
        ></video>
      `}_loadedDataHandler(e){super._loadedData(),d(this,e,{mediaPlayerController:this._mediaPlayerController,capabilities:{supportsPause:!0,hasAudio:f(this._video)},technology:["hls"]})}static get styles(){return[super.styles,l(P),c`
          :host {
            width: 100%;
            height: 100%;
          }
          video {
            width: 100%;
            height: 100%;
          }
        `]}};e([C("#video")],m.prototype,"_video",void 0),m=e([a("advanced-camera-card-ha-hls-player")],m)}));class j{constructor(e,a){this._host=e,this._getImageCallback=a}async play(){}async pause(){}async mute(){}async unmute(){}isMuted(){return!0}async seek(e){}async setControls(e){}isPaused(){return!1}async getScreenshotURL(){await this._host.updateComplete;const e=this._getImageCallback();return e?h(e):null}getFullscreenElement(){return this._getImageCallback()??null}}let $=class extends u{constructor(){super(...arguments),this._refImage=y(),this._mediaPlayerController=new j(this,(()=>this._refImage.value??null))}async getMediaPlayerController(){return this._mediaPlayerController}render(){return o`<img
      ${v(this._refImage)}
      src="${p(this.url)}"
      @load=${e=>{d(this,e,{...this._mediaPlayerController&&{mediaPlayerController:this._mediaPlayerController},technology:[this.technology??"jpg"]})}}
    />`}static get styles(){return l(":host {\n  width: 100%;\n  height: 100%;\n  display: block;\n}\n\nimg {\n  width: 100%;\n  height: 100%;\n  display: block;\n  object-fit: var(--advanced-camera-card-media-layout-fit, contain);\n  object-position: var(--advanced-camera-card-media-layout-position-x, 50%) var(--advanced-camera-card-media-layout-position-y, 50%);\n  object-view-box: inset(var(--advanced-camera-card-media-layout-view-box-top, 0%) var(--advanced-camera-card-media-layout-view-box-right, 0%) var(--advanced-camera-card-media-layout-view-box-bottom, 0%) var(--advanced-camera-card-media-layout-view-box-left, 0%));\n}")}};e([m()],$.prototype,"url",void 0),e([m()],$.prototype,"technology",void 0),$=e([a("advanced-camera-card-image-player")],$);export{P as c,C as e};
