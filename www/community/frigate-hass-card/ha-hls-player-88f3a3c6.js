import{ds as e,cX as t,dg as a,x as s,dC as i,dD as o,dE as r,dB as d,r as n,eV as c,_ as l,t as h}from"./card-bc00afb6.js";import{h as u,s as v,d as m,c as y}from"./media-9cad1b6b.js";import{m as p}from"./audio-cf3a75aa.js";
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _=(e,t,a)=>(a.configurable=!0,a.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,a),a)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;function g(e,t){return(a,s,i)=>{const o=t=>t.renderRoot?.querySelector(e)??null;if(t){const{get:e,set:t}="object"==typeof s?a:i??(()=>{const e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return _(a,s,{get(){let a=e.call(this);return void 0===a&&(a=o(this),(null!==a||this.hasUpdated)&&t.call(this,a)),a}})}return _(a,s,{get(){return o(this)}})}}var b="img,\nvideo {\n  object-fit: var(--advanced-camera-card-media-layout-fit, contain);\n  object-position: var(--advanced-camera-card-media-layout-position-x, 50%) var(--advanced-camera-card-media-layout-position-y, 50%);\n  object-view-box: inset(var(--advanced-camera-card-media-layout-view-box-top, 0%) var(--advanced-camera-card-media-layout-view-box-right, 0%) var(--advanced-camera-card-media-layout-view-box-bottom, 0%) var(--advanced-camera-card-media-layout-view-box-left, 0%));\n}";customElements.whenDefined("ha-hls-player").then((()=>{let _=class extends(customElements.get("ha-hls-player")){async play(){return this._video?.play()}async pause(){this._video?.pause()}async mute(){this._video&&(this._video.muted=!0)}async unmute(){this._video&&(this._video.muted=!1)}isMuted(){return this._video?.muted??!0}async seek(e){this._video&&(u(this._video),this._video.currentTime=e)}async setControls(e){this._video&&v(this._video,e??this.controls)}isPaused(){return this._video?.paused??!0}async getScreenshotURL(){return this._video?e(this._video):null}getFullscreenElement(){return this._video}render(){if(this._error){if(this._errorIsFatal)return m(this),t({type:"error",message:this._error,context:{entity_id:this.entityid}});a(this._error,console.error)}return s`
        <video
          id="video"
          .poster=${this.posterUrl}
          ?autoplay=${this.autoPlay}
          .muted=${this.muted}
          ?playsinline=${this.playsInline}
          ?controls=${this.controls}
          @loadedmetadata=${()=>{this.controls&&u(this._video,y)}}
          @loadeddata=${e=>this._loadedDataHandler(e)}
          @volumechange=${()=>i(this)}
          @play=${()=>o(this)}
          @pause=${()=>r(this)}
        ></video>
      `}_loadedDataHandler(e){super._loadedData(),d(this,e,{player:this,capabilities:{supportsPause:!0,hasAudio:p(this._video)},technology:["hls"]})}static get styles(){return[super.styles,n(b),c`
          :host {
            width: 100%;
            height: 100%;
          }
          video {
            width: 100%;
            height: 100%;
          }
        `]}};l([g("#video")],_.prototype,"_video",void 0),_=l([h("advanced-camera-card-ha-hls-player")],_)}));export{b as c,g as e};
