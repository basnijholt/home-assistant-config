import{Ao as e,Co as t,Do as n,To as r,U as i,lt as a,wo as o}from"./shared-Dia7VIOe.js";import"./timeline-core-vkvqCAch.js";var s=class extends r{render(){return this.timelineConfig?n`
      <advanced-camera-card-timeline-core
        .hass=${this.hass}
        .viewManagerEpoch=${this.viewManagerEpoch}
        .timelineConfig=${this.timelineConfig}
        .thumbnailConfig=${this.timelineConfig.controls.thumbnails}
        .cameraManager=${this.cameraManager}
        .foldersManager=${this.foldersManager}
        .conditionStateManager=${this.conditionStateManager}
        .viewItemManager=${this.viewItemManager}
        .cardWideConfig=${this.cardWideConfig}
        .itemClickAction=${this.timelineConfig.controls.thumbnails.mode===`none`?`play`:`select`}
      >
      </advanced-camera-card-timeline-core>
    `:n``}static get styles(){return e(i)}};a([t({attribute:!1})],s.prototype,`hass`,void 0),a([t({attribute:!1})],s.prototype,`viewManagerEpoch`,void 0),a([t({attribute:!1})],s.prototype,`timelineConfig`,void 0),a([t({attribute:!1})],s.prototype,`cameraManager`,void 0),a([t({attribute:!1})],s.prototype,`foldersManager`,void 0),a([t({attribute:!1})],s.prototype,`conditionStateManager`,void 0),a([t({attribute:!1})],s.prototype,`viewItemManager`,void 0),a([t({attribute:!1})],s.prototype,`cardWideConfig`,void 0),s=a([o(`advanced-camera-card-timeline`)],s);export{s as AdvancedCameraCardTimeline};