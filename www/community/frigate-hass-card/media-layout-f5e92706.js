import{dQ as t,dR as r,dS as e}from"./card-f2dccb12.js";
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const o={},i=t(class extends r{constructor(){super(...arguments),this.ot=o}render(t,r){return r()}update(t,[r,o]){if(Array.isArray(r)){if(Array.isArray(this.ot)&&this.ot.length===r.length&&r.every(((t,r)=>t===this.ot[r])))return e}else if(this.ot===r)return e;return this.ot=Array.isArray(r)?Array.from(r):r,this.render(r,o)}}),a=(t,r)=>{void 0!==r?.fit?t.style.setProperty("--frigate-card-media-layout-fit",r.fit):t.style.removeProperty("--frigate-card-media-layout-fit");for(const e of["x","y"])void 0!==r?.position?.[e]?t.style.setProperty(`--frigate-card-media-layout-position-${e}`,`${r.position[e]}%`):t.style.removeProperty(`--frigate-card-media-layout-position-${e}`);for(const e of["top","bottom","left","right"])void 0!==r?.view_box?.[e]?t.style.setProperty(`--frigate-card-media-layout-view-box-${e}`,`${r.view_box[e]}%`):t.style.removeProperty(`--frigate-card-media-layout-view-box-${e}`)};export{i,a as u};
