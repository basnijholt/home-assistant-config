import{_ as e,n as t,t as a,a as i,df as r,x as o,r as s,dd as n}from"./card-04eb008a.js";import"./timeline-core-9b5c7c4e.js";import"./startOfHour-2bc031cd.js";import"./endOfDay-04d6c2dc.js";import"./date-picker-421f99f0.js";let c=class extends i{_getKeys(){const e=this.viewManagerEpoch?.manager.getView()?.query;if(r.isMediaQuery(e)){const t=e.getQueryCameraIDs();if(t&&t.size)return[...t].map((e=>({type:"camera",cameraID:e})))}else if(r.isFolderQuery(e)){const t=e.getQuery()?.folder;if(t)return[{type:"folder",folder:t}]}const t=[];for(const e of this.cameraManager?.getStore().getCameraIDsWithCapability({anyCapabilities:["clips","snapshots","recordings"]})??[])t.push({type:"camera",cameraID:e});return t}render(){return this.timelineConfig?o`
      <advanced-camera-card-timeline-core
        .hass=${this.hass}
        .viewManagerEpoch=${this.viewManagerEpoch}
        .timelineConfig=${this.timelineConfig}
        .thumbnailConfig=${this.timelineConfig.controls.thumbnails}
        .cameraManager=${this.cameraManager}
        .viewItemManager=${this.viewItemManager}
        .keys=${this._getKeys()}
        .cardWideConfig=${this.cardWideConfig}
        .itemClickAction=${"none"===this.timelineConfig.controls.thumbnails.mode?"play":"select"}
      >
      </advanced-camera-card-timeline-core>
    `:o``}static get styles(){return s(n)}};e([t({attribute:!1})],c.prototype,"hass",void 0),e([t({attribute:!1})],c.prototype,"viewManagerEpoch",void 0),e([t({attribute:!1})],c.prototype,"timelineConfig",void 0),e([t({attribute:!1})],c.prototype,"cameraManager",void 0),e([t({attribute:!1})],c.prototype,"viewItemManager",void 0),e([t({attribute:!1})],c.prototype,"cardWideConfig",void 0),c=e([a("advanced-camera-card-timeline")],c);export{c as AdvancedCameraCardTimeline};
