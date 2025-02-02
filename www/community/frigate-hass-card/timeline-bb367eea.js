import{_ as t,n as i,t as e,a,x as r,r as o,d7 as n}from"./card-f2dccb12.js";import"./timeline-core-c7049ffc.js";import"./startOfHour-63cd6407.js";import"./endOfDay-5221568f.js";import"./date-picker-947cbe85.js";let s=class extends a{render(){return this.timelineConfig?r`
      <frigate-card-timeline-core
        .hass=${this.hass}
        .viewManagerEpoch=${this.viewManagerEpoch}
        .timelineConfig=${this.timelineConfig}
        .thumbnailConfig=${this.timelineConfig.controls.thumbnails}
        .cameraManager=${this.cameraManager}
        .cameraIDs=${this.cameraManager?.getStore().getCameraIDsWithCapability({anyCapabilities:["clips","snapshots","recordings"]})}
        .cardWideConfig=${this.cardWideConfig}
        .itemClickAction=${"none"===this.timelineConfig.controls.thumbnails.mode?"play":"select"}
      >
      </frigate-card-timeline-core>
    `:r``}static get styles(){return o(n)}};t([i({attribute:!1})],s.prototype,"hass",void 0),t([i({attribute:!1})],s.prototype,"viewManagerEpoch",void 0),t([i({attribute:!1})],s.prototype,"timelineConfig",void 0),t([i({attribute:!1})],s.prototype,"cameraManager",void 0),t([i({attribute:!1})],s.prototype,"cardWideConfig",void 0),s=t([e("frigate-card-timeline")],s);export{s as FrigateCardTimeline};
