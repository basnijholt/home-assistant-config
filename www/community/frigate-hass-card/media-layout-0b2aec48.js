import{dQ as r,dR as e,dS as t}from"./card-bc00afb6.js";
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const a={},o=r(class extends e{constructor(){super(...arguments),this.ot=a}render(r,e){return e()}update(r,[e,a]){if(Array.isArray(e)){if(Array.isArray(this.ot)&&this.ot.length===e.length&&e.every(((r,e)=>r===this.ot[e])))return t}else if(this.ot===e)return t;return this.ot=Array.isArray(e)?Array.from(e):e,this.render(e,a)}}),i=(r,e)=>{void 0!==e?.fit?r.style.setProperty("--advanced-camera-card-media-layout-fit",e.fit):r.style.removeProperty("--advanced-camera-card-media-layout-fit");for(const t of["x","y"])void 0!==e?.position?.[t]?r.style.setProperty(`--advanced-camera-card-media-layout-position-${t}`,`${e.position[t]}%`):r.style.removeProperty(`--advanced-camera-card-media-layout-position-${t}`);for(const t of["top","bottom","left","right"])void 0!==e?.view_box?.[t]?r.style.setProperty(`--advanced-camera-card-media-layout-view-box-${t}`,`${e.view_box[t]}%`):r.style.removeProperty(`--advanced-camera-card-media-layout-view-box-${t}`)};export{o as i,i as u};
