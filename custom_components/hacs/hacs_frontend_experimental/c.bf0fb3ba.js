import{_ as e,j as t,e as i,y as a,C as o,J as s,d as r,eC as n,t as d,E as l,G as c,n as h,i as u,a5 as p}from"./main-ec7846c8.js";import"./c.541a83df.js";import{c as m}from"./c.fa0ef026.js";import{c as f}from"./c.6eb9fcd4.js";import{i as k}from"./c.b0145069.js";import"./c.0e3055bd.js";import"./c.8e28b461.js";import"./c.eea05cf6.js";import"./c.3db34379.js";import"./c.d2f13ac1.js";import"./c.1024e243.js";const y=e=>e.tileLayer("https://basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}"+(e.Browser.retina?"@2x.png":".png"),{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attributions">CARTO</a>',subdomains:"abcd",minZoom:0,maxZoom:20});let v=e(null,(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[i({attribute:"entity-id"})],key:"entityId",value:void 0},{kind:"field",decorators:[i({attribute:"entity-name"})],key:"entityName",value:void 0},{kind:"field",decorators:[i({attribute:"entity-picture"})],key:"entityPicture",value:void 0},{kind:"field",decorators:[i({attribute:"entity-color"})],key:"entityColor",value:void 0},{kind:"method",key:"render",value:function(){return a`
      <div
        class="marker"
        style=${o({"border-color":this.entityColor})}
        @click=${this._badgeTap}
      >
        ${this.entityPicture?a`<div
              class="entity-picture"
              style=${o({"background-image":`url(${this.entityPicture})`})}
            ></div>`:this.entityName}
      </div>
    `}},{kind:"method",key:"_badgeTap",value:function(e){e.stopPropagation(),this.entityId&&s(this,"hass-more-info",{entityId:this.entityId})}},{kind:"get",static:!0,key:"styles",value:function(){return r`
      .marker {
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        overflow: hidden;
        width: 48px;
        height: 48px;
        font-size: var(--ha-marker-font-size, 1.5em);
        border-radius: 50%;
        border: 1px solid var(--ha-marker-color, var(--primary-color));
        color: var(--primary-text-color);
        background-color: var(--card-background-color);
      }
      .entity-picture {
        background-size: cover;
        height: 100%;
        width: 100%;
      }
    `}}]}}),t);customElements.define("ha-entity-marker",v);const g=e=>"string"==typeof e?e:e.entity_id;e([h("ha-map")],(function(e,t){class a extends t{constructor(...t){super(...t),e(this)}}return{F:a,d:[{kind:"field",decorators:[i({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[i({attribute:!1})],key:"entities",value:void 0},{kind:"field",decorators:[i({attribute:!1})],key:"paths",value:void 0},{kind:"field",decorators:[i({attribute:!1})],key:"layers",value:void 0},{kind:"field",decorators:[i({type:Boolean})],key:"autoFit",value:()=>!1},{kind:"field",decorators:[i({type:Boolean})],key:"fitZones",value:void 0},{kind:"field",decorators:[i({type:Boolean})],key:"darkMode",value:void 0},{kind:"field",decorators:[i({type:Number})],key:"zoom",value:()=>14},{kind:"field",decorators:[d()],key:"_loaded",value:()=>!1},{kind:"field",key:"leafletMap",value:void 0},{kind:"field",key:"Leaflet",value:void 0},{kind:"field",key:"_resizeObserver",value:void 0},{kind:"field",key:"_mapItems",value:()=>[]},{kind:"field",key:"_mapZones",value:()=>[]},{kind:"field",key:"_mapPaths",value:()=>[]},{kind:"method",key:"connectedCallback",value:function(){l(c(a.prototype),"connectedCallback",this).call(this),this._loadMap(),this._attachObserver()}},{kind:"method",key:"disconnectedCallback",value:function(){l(c(a.prototype),"disconnectedCallback",this).call(this),this.leafletMap&&(this.leafletMap.remove(),this.leafletMap=void 0,this.Leaflet=void 0),this._loaded=!1,this._resizeObserver&&this._resizeObserver.unobserve(this)}},{kind:"method",key:"update",value:function(e){var t;if(l(c(a.prototype),"update",this).call(this,e),!this._loaded)return;const i=e.get("hass");if(e.has("_loaded")||e.has("entities"))this._drawEntities();else if(this._loaded&&i&&this.entities)for(const e of this.entities)if(i.states[g(e)]!==this.hass.states[g(e)]){this._drawEntities();break}if((e.has("_loaded")||e.has("paths"))&&this._drawPaths(),(e.has("_loaded")||e.has("layers"))&&this._drawLayers(e.get("layers")),(e.has("_loaded")||(e.has("entities")||e.has("layers"))&&this.autoFit)&&this.fitMap(),e.has("zoom")&&this.leafletMap.setZoom(this.zoom),!e.has("darkMode")&&(!e.has("hass")||i&&i.themes.darkMode===this.hass.themes.darkMode))return;const o=null!==(t=this.darkMode)&&void 0!==t?t:this.hass.themes.darkMode;this.shadowRoot.getElementById("map").classList.toggle("dark",o)}},{kind:"method",key:"_loadMap",value:async function(){var e;let t=this.shadowRoot.getElementById("map");t||(t=document.createElement("div"),t.id="map",this.shadowRoot.append(t));const i=null!==(e=this.darkMode)&&void 0!==e?e:this.hass.themes.darkMode;[this.leafletMap,this.Leaflet]=await(async e=>{if(!e.parentNode)throw new Error("Cannot setup Leaflet map on disconnected element");const t=(await import("./c.9571b827.js")).default;t.Icon.Default.imagePath="/static/images/leaflet/images/";const i=t.map(e),a=document.createElement("link");return a.setAttribute("href","/static/images/leaflet/leaflet.css"),a.setAttribute("rel","stylesheet"),e.parentNode.appendChild(a),i.setView([52.3731339,4.8903147],13),[i,t,y(t).addTo(i)]})(t),this.shadowRoot.getElementById("map").classList.toggle("dark",i),this._loaded=!0}},{kind:"method",key:"fitMap",value:function(){var e,t;if(!this.leafletMap||!this.Leaflet||!this.hass)return;if(!(this._mapItems.length||null!==(e=this.layers)&&void 0!==e&&e.length))return void this.leafletMap.setView(new this.Leaflet.LatLng(this.hass.config.latitude,this.hass.config.longitude),this.zoom);let i=this.Leaflet.latLngBounds(this._mapItems?this._mapItems.map((e=>e.getLatLng())):[]);var a;this.fitZones&&(null===(a=this._mapZones)||void 0===a||a.forEach((e=>{i.extend("getBounds"in e?e.getBounds():e.getLatLng())})));null===(t=this.layers)||void 0===t||t.forEach((e=>{i.extend("getBounds"in e?e.getBounds():e.getLatLng())})),this.layers||(i=i.pad(.5)),this.leafletMap.fitBounds(i,{maxZoom:this.zoom})}},{kind:"method",key:"_drawLayers",value:function(e){if(e&&e.forEach((e=>e.remove())),!this.layers)return;const t=this.leafletMap;this.layers.forEach((e=>{t.addLayer(e)}))}},{kind:"method",key:"_drawPaths",value:function(){const e=this.hass,t=this.leafletMap,i=this.Leaflet;if(!e||!t||!i)return;if(this._mapPaths.length&&(this._mapPaths.forEach((e=>e.remove())),this._mapPaths=[]),!this.paths)return;const a=getComputedStyle(this).getPropertyValue("--dark-primary-color");this.paths.forEach((e=>{let o,s;e.gradualOpacity&&(o=e.gradualOpacity/(e.points.length-2),s=1-e.gradualOpacity);for(let t=0;t<e.points.length-1;t++){const r=e.gradualOpacity?s+t*o:void 0;this._mapPaths.push(i.circleMarker(e.points[t],{radius:3,color:e.color||a,opacity:r,fillOpacity:r,interactive:!1})),this._mapPaths.push(i.polyline([e.points[t],e.points[t+1]],{color:e.color||a,opacity:r,interactive:!1}))}const r=e.points.length-1;if(r>=0){const t=e.gradualOpacity?s+r*o:void 0;this._mapPaths.push(i.circleMarker(e.points[r],{radius:3,color:e.color||a,opacity:t,fillOpacity:t,interactive:!1}))}this._mapPaths.forEach((e=>t.addLayer(e)))}))}},{kind:"method",key:"_drawEntities",value:function(){var e;const t=this.hass,i=this.leafletMap,a=this.Leaflet;if(!t||!i||!a)return;if(this._mapItems.length&&(this._mapItems.forEach((e=>e.remove())),this._mapItems=[]),this._mapZones.length&&(this._mapZones.forEach((e=>e.remove())),this._mapZones=[]),!this.entities)return;const o=getComputedStyle(this),s=o.getPropertyValue("--accent-color"),r=o.getPropertyValue("--dark-primary-color"),n=(null!==(e=this.darkMode)&&void 0!==e?e:this.hass.themes.darkMode)?"dark":"light";for(const e of this.entities){const i=t.states[g(e)];if(!i)continue;const o=f(i),{latitude:d,longitude:l,passive:c,icon:h,radius:u,entity_picture:p,gps_accuracy:k}=i.attributes;if(!d||!l)continue;if("zone"===m(i)){if(c)continue;let e="";if(h){const t=document.createElement("ha-icon");t.setAttribute("icon",h),e=t.outerHTML}else{const t=document.createElement("span");t.innerHTML=o,e=t.outerHTML}this._mapZones.push(a.marker([d,l],{icon:a.divIcon({html:e,iconSize:[24,24],className:n}),interactive:!1,title:o})),this._mapZones.push(a.circle([d,l],{interactive:!1,color:s,radius:u}));continue}const y=o.split(" ").map((e=>e[0])).join("").substr(0,3);this._mapItems.push(a.marker([d,l],{icon:a.divIcon({html:`\n              <ha-entity-marker\n                entity-id="${g(e)}"\n                entity-name="${y}"\n                entity-picture="${p?this.hass.hassUrl(p):""}"\n                ${"string"!=typeof e?`entity-color="${e.color}"`:""}\n              ></ha-entity-marker>\n            `,iconSize:[48,48],className:""}),title:f(i)})),k&&this._mapItems.push(a.circle([d,l],{interactive:!1,color:r,radius:k}))}this._mapItems.forEach((e=>i.addLayer(e))),this._mapZones.forEach((e=>i.addLayer(e)))}},{kind:"method",key:"_attachObserver",value:async function(){this._resizeObserver||(await k(),this._resizeObserver=new ResizeObserver((()=>{var e;null===(e=this.leafletMap)||void 0===e||e.invalidateSize({debounceMoveend:!0})}))),this._resizeObserver.observe(this)}},{kind:"get",static:!0,key:"styles",value:function(){return r`
      :host {
        display: block;
        height: 300px;
      }
      #map {
        height: 100%;
      }
      #map.dark {
        background: #090909;
        --map-filter: invert(0.9) hue-rotate(170deg) grayscale(0.7);
      }
      .light {
        color: #000000;
      }
      .dark {
        color: #ffffff;
      }
      .leaflet-tile-pane {
        filter: var(--map-filter);
      }
      .dark .leaflet-bar a {
        background-color: var(--card-background-color, #1c1c1c);
        color: #ffffff;
      }
      .leaflet-marker-draggable {
        cursor: move !important;
      }
      .leaflet-edit-resize {
        border-radius: 50%;
        cursor: nesw-resize !important;
      }
      .named-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        text-align: center;
        color: var(--primary-text-color);
      }
      .leaflet-pane {
        z-index: 0 !important;
      }
      .leaflet-control,
      .leaflet-top,
      .leaflet-bottom {
        z-index: 1 !important;
      }
    `}}]}}),n),e([h("ha-locations-editor")],(function(e,t){class o extends t{constructor(){super(),e(this),import("./c.9571b827.js").then((e=>{import("./c.bc53dda1.js").then((()=>{this.Leaflet=e.default,this._updateMarkers(),this.updateComplete.then((()=>this.fitMap()))}))}))}}return{F:o,d:[{kind:"field",decorators:[i({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[i({attribute:!1})],key:"locations",value:void 0},{kind:"field",decorators:[i()],key:"helper",value:void 0},{kind:"field",decorators:[i({type:Boolean})],key:"autoFit",value:()=>!1},{kind:"field",decorators:[i({type:Number})],key:"zoom",value:()=>16},{kind:"field",decorators:[i({type:Boolean})],key:"darkMode",value:void 0},{kind:"field",decorators:[d()],key:"_locationMarkers",value:void 0},{kind:"field",decorators:[d()],key:"_circles",value:()=>({})},{kind:"field",decorators:[u("ha-map",!0)],key:"map",value:void 0},{kind:"field",key:"Leaflet",value:void 0},{kind:"method",key:"fitMap",value:function(){this.map.fitMap()}},{kind:"method",key:"fitMarker",value:function(e){if(!this.map.leafletMap||!this._locationMarkers)return;const t=this._locationMarkers[e];if(t)if("getBounds"in t)this.map.leafletMap.fitBounds(t.getBounds()),t.bringToFront();else{const i=this._circles[e];i?this.map.leafletMap.fitBounds(i.getBounds()):this.map.leafletMap.setView(t.getLatLng(),this.zoom)}}},{kind:"method",key:"render",value:function(){return a`
      <ha-map
        .hass=${this.hass}
        .layers=${this._getLayers(this._circles,this._locationMarkers)}
        .zoom=${this.zoom}
        .autoFit=${this.autoFit}
        .darkMode=${this.darkMode}
      ></ha-map>
      ${this.helper?a`<ha-input-helper-text>${this.helper}</ha-input-helper-text>`:""}
    `}},{kind:"field",key:"_getLayers",value:()=>p(((e,t)=>{const i=[];return Array.prototype.push.apply(i,Object.values(e)),t&&Array.prototype.push.apply(i,Object.values(t)),i}))},{kind:"method",key:"willUpdate",value:function(e){l(c(o.prototype),"willUpdate",this).call(this,e),this.Leaflet&&e.has("locations")&&this._updateMarkers()}},{kind:"method",key:"_updateLocation",value:function(e){const t=e.target,i=t.getLatLng();let a=i.lng;Math.abs(a)>180&&(a=(a%360+540)%360-180);const o=[i.lat,a];s(this,"location-updated",{id:t.id,location:o},{bubbles:!1})}},{kind:"method",key:"_updateRadius",value:function(e){const t=e.target,i=this._locationMarkers[t.id];s(this,"radius-updated",{id:t.id,radius:i.getRadius()},{bubbles:!1})}},{kind:"method",key:"_markerClicked",value:function(e){const t=e.target;s(this,"marker-clicked",{id:t.id},{bubbles:!1})}},{kind:"method",key:"_updateMarkers",value:function(){if(!this.locations||!this.locations.length)return this._circles={},void(this._locationMarkers=void 0);const e={},t={},i=getComputedStyle(this).getPropertyValue("--accent-color");this.locations.forEach((a=>{let o;if(a.icon){const e=document.createElement("div");e.className="named-icon",a.name&&(e.innerText=a.name);const t=document.createElement("ha-icon");t.setAttribute("icon",a.icon),e.prepend(t),o=this.Leaflet.divIcon({html:e.outerHTML,iconSize:[24,24],className:"light"})}if(a.radius){const s=this.Leaflet.circle([a.latitude,a.longitude],{color:a.radius_color||i,radius:a.radius});a.radius_editable||a.location_editable?(s.editing.enable(),s.addEventListener("add",(()=>{const e=s.editing._moveMarker,t=s.editing._resizeMarkers[0];o&&e.setIcon(o),t.id=e.id=a.id,e.addEventListener("dragend",(e=>this._updateLocation(e))).addEventListener("click",(e=>this._markerClicked(e))),a.radius_editable?t.addEventListener("dragend",(e=>this._updateRadius(e))):t.remove()})),e[a.id]=s):t[a.id]=s}if(!a.radius||!a.radius_editable&&!a.location_editable){const t={title:a.name,draggable:a.location_editable};o&&(t.icon=o);const i=this.Leaflet.marker([a.latitude,a.longitude],t).addEventListener("dragend",(e=>this._updateLocation(e))).addEventListener("click",(e=>this._markerClicked(e)));i.id=a.id,e[a.id]=i}})),this._circles=t,this._locationMarkers=e,s(this,"markers-updated")}},{kind:"get",static:!0,key:"styles",value:function(){return r`
      ha-map {
        display: block;
        height: 100%;
      }
    `}}]}}),t);let _=e([h("ha-selector-location")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[i({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[i({attribute:!1})],key:"selector",value:void 0},{kind:"field",decorators:[i()],key:"value",value:void 0},{kind:"field",decorators:[i()],key:"label",value:void 0},{kind:"field",decorators:[i()],key:"helper",value:void 0},{kind:"field",decorators:[i({type:Boolean,reflect:!0})],key:"disabled",value:()=>!1},{kind:"method",key:"render",value:function(){return a`
      <ha-locations-editor
        class="flex"
        .hass=${this.hass}
        .helper=${this.helper}
        .locations=${this._location(this.selector,this.value)}
        @location-updated=${this._locationChanged}
        @radius-updated=${this._radiusChanged}
      ></ha-locations-editor>
    `}},{kind:"field",key:"_location",value(){return p(((e,t)=>{const i=getComputedStyle(this),a=e.location.radius?i.getPropertyValue("--zone-radius-color")||i.getPropertyValue("--accent-color"):void 0;return[{id:"location",latitude:(null==t?void 0:t.latitude)||this.hass.config.latitude,longitude:(null==t?void 0:t.longitude)||this.hass.config.longitude,radius:e.location.radius?(null==t?void 0:t.radius)||1e3:void 0,radius_color:a,icon:e.location.icon||e.location.radius?"mdi:map-marker-radius":"mdi:map-marker",location_editable:!0,radius_editable:!0}]}))}},{kind:"method",key:"_locationChanged",value:function(e){const[t,i]=e.detail.location;s(this,"value-changed",{value:{...this.value,latitude:t,longitude:i}})}},{kind:"method",key:"_radiusChanged",value:function(e){const t=e.detail.radius;s(this,"value-changed",{value:{...this.value,radius:t}})}},{kind:"field",static:!0,key:"styles",value:()=>r`
    :host {
      display: block;
      height: 400px;
    }
  `}]}}),t);export{_ as HaLocationSelector};
