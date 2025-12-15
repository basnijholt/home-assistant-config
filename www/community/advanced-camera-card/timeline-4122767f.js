import{_ as e,n as t,t as a,a as i,di as r,x as o,r as n,dg as s}from"./card-4818d30e.js";import"./timeline-core-6b86f6f7.js";import"./startOfHour-aee82f3a.js";import"./endOfDay-80d77989.js";import"./date-picker-bb94ae76.js";let d=class extends i{_getKeys(){const e=this.viewManagerEpoch?.manager.getView()?.query;if(r.isMediaQuery(e)){const t=e.getQueryCameraIDs();if(t&&t.size)return{type:"camera",cameraIDs:t}}else if(r.isFolderQuery(e)){const t=e.getQuery()?.folder;if(t)return{type:"folder",folder:t}}const t=this.cameraManager?.getStore().getCameraIDsWithCapability({anyCapabilities:["clips","snapshots","recordings"]}),a=this.foldersManager?.getFolder()??null;return t?.size?{type:"camera",cameraIDs:t}:a?{type:"folder",folder:a}:void 0}render(){return this.timelineConfig?o`
      <advanced-camera-card-timeline-core
        .hass=${this.hass}
        .viewManagerEpoch=${this.viewManagerEpoch}
        .timelineConfig=${this.timelineConfig}
        .thumbnailConfig=${this.timelineConfig.controls.thumbnails}
        .cameraManager=${this.cameraManager}
        .foldersManager=${this.foldersManager}
        .conditionStateManager=${this.conditionStateManager}
        .viewItemManager=${this.viewItemManager}
        .keys=${this._getKeys()}
        .cardWideConfig=${this.cardWideConfig}
        .itemClickAction=${"none"===this.timelineConfig.controls.thumbnails.mode?"play":"select"}
      >
      </advanced-camera-card-timeline-core>
    `:o``}static get styles(){return n(s)}};e([t({attribute:!1})],d.prototype,"hass",void 0),e([t({attribute:!1})],d.prototype,"viewManagerEpoch",void 0),e([t({attribute:!1})],d.prototype,"timelineConfig",void 0),e([t({attribute:!1})],d.prototype,"cameraManager",void 0),e([t({attribute:!1})],d.prototype,"foldersManager",void 0),e([t({attribute:!1})],d.prototype,"conditionStateManager",void 0),e([t({attribute:!1})],d.prototype,"viewItemManager",void 0),e([t({attribute:!1})],d.prototype,"cardWideConfig",void 0),d=e([a("advanced-camera-card-timeline")],d);export{d as AdvancedCameraCardTimeline};
