import{Eo as e,Oo as t,To as n,U as r,ft as i,jo as a,wo as o}from"./shared-CAMseYlJ.js";import"./timeline-core-D0w0cqd-.js";var s=class extends e{render(){return this.timelineConfig?t`
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
    `:t``}static get styles(){return a(r)}};i([o({attribute:!1})],s.prototype,`hass`,void 0),i([o({attribute:!1})],s.prototype,`viewManagerEpoch`,void 0),i([o({attribute:!1})],s.prototype,`timelineConfig`,void 0),i([o({attribute:!1})],s.prototype,`cameraManager`,void 0),i([o({attribute:!1})],s.prototype,`foldersManager`,void 0),i([o({attribute:!1})],s.prototype,`conditionStateManager`,void 0),i([o({attribute:!1})],s.prototype,`viewItemManager`,void 0),i([o({attribute:!1})],s.prototype,`cardWideConfig`,void 0),s=i([n(`advanced-camera-card-timeline`)],s);export{s as AdvancedCameraCardTimeline};