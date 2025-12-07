import{df as e,dg as a,dh as t,di as r,dj as i,dk as n,db as s,_ as o,n as l,t as d,a as c,x as h,e as g,a4 as u,l as m,r as y}from"./card-075f743d.js";import"./gallery-core-14f32744.js";import"./endOfDay-7368c1cb.js";import"./date-picker-10528425.js";class v{constructor(e){this._media=null,this._host=e}getMedia(){return this._media}setMediaFromView(e,a){const t=e?.queryResults?.getResults()??null;null!==t?this._media&&a?.queryResults?.getResults()===t||(this._media=[...t].reverse()):this._media=null}setThumbnailSize(a){this._host.style.setProperty("--advanced-camera-card-thumbnail-size",`${a??e}px`)}getColumnWidth(a){return a?a.show_details?300:a.size:e}getColumnCountRoundMethod(e){return e?.show_details?"floor":"ceil"}async extendMediaGallery(e,s,o,l=!0){const d=s.manager.getView();if(!d)return;const c=d.query,h=d.queryResults?.getResults();if(!h||!c||!a.isMediaQuery(c))return;const g=c.getQuery()??null;if(!g)return;let u;try{u=await e.extendMediaQueries(g,h,o,{useCache:l})}catch(e){return void t(e)}if(u){const e=a.isEventQuery(c)?new r(u.queries):a.isRecordingQuery(c)?new i(u.queries):/* istanbul ignore next: this path cannot be reached -- @preserve */
null;
/* istanbul ignore else: this path cannot be reached, as we explicitly
               check for media queries above -- @preserve */e&&s.manager.setViewByParameters({baseView:d,params:{query:e,queryResults:new n({results:u.results}).selectResultIfFound((e=>e===d.queryResults?.getSelectedResult()))}})}}itemClickHandler(e,a,t){s(t);const r=e.getView();r&&this._media?.length&&e.setViewByParameters({params:{view:"media",queryResults:r.queryResults?.clone().selectIndex(this._media.length-a-1)}})}}const w={closed:"mdi:filter-cog-outline",open:"mdi:filter-cog"};let p=class extends c{constructor(){super(...arguments),this._controller=new v(this)}willUpdate(e){e.has("viewManagerEpoch")&&this._controller.setMediaFromView(this.viewManagerEpoch?.manager.getView(),this.viewManagerEpoch?.oldView),e.has("galleryConfig")&&this._controller.setThumbnailSize(this.galleryConfig?.controls.thumbnails.size)}_renderThumbnails(){const e=this.viewManagerEpoch?.manager.getView()?.queryResults?.getSelectedResult();return h`
      ${this._controller.getMedia()?.map(((a,t)=>h`<advanced-camera-card-thumbnail
            class=${g({selected:a===e})}
            .hass=${this.hass}
            .cameraManager=${this.cameraManager}
            .viewItemManager=${this.viewItemManager}
            .item=${a}
            .viewManagerEpoch=${this.viewManagerEpoch}
            ?selected=${a===e}
            ?details=${!!this.galleryConfig?.controls.thumbnails.show_details}
            ?show_favorite_control=${!!this.galleryConfig?.controls.thumbnails.show_favorite_control}
            ?show_timeline_control=${!!this.galleryConfig?.controls.thumbnails.show_timeline_control}
            ?show_download_control=${!!this.galleryConfig?.controls.thumbnails.show_download_control}
            @click=${e=>{const a=this.viewManagerEpoch?.manager;a&&this._controller.itemClickHandler(a,t,e)}}
          >
          </advanced-camera-card-thumbnail>`))}
    `}render(){const e=!!this.viewManagerEpoch?.manager.getView()?.context?.loading?.query;return h`
      <advanced-camera-card-surround-basic
        .drawerIcons=${{...this.galleryConfig&&"none"!==this.galleryConfig.controls.filter.mode&&{[this.galleryConfig.controls.filter.mode]:w}}}
      >
        ${this.galleryConfig&&"none"!==this.galleryConfig.controls.filter.mode?h` <advanced-camera-card-media-filter
              .hass=${this.hass}
              .cameraManager=${this.cameraManager}
              .viewManagerEpoch=${this.viewManagerEpoch}
              .cardWideConfig=${this.cardWideConfig}
              slot=${this.galleryConfig.controls.filter.mode}
            >
            </advanced-camera-card-media-filter>`:""}
        ${this._controller.getMedia()?.length?h`<advanced-camera-card-gallery-core
              .hass=${this.hass}
              .columnWidth=${this._controller.getColumnWidth(this.galleryConfig?.controls.thumbnails)}
              .columnCountRoundMethod=${this._controller.getColumnCountRoundMethod(this.galleryConfig?.controls.thumbnails)}
              .cardWideConfig=${this.cardWideConfig}
              .extendUp=${!0}
              .extendDown=${!0}
              @advanced-camera-card:gallery:extend:up=${e=>this._extendGallery(e,"later",!1)}
              @advanced-camera-card:gallery:extend:down=${e=>this._extendGallery(e,"earlier")}
            >
              ${this._renderThumbnails()}
            </advanced-camera-card-gallery-core>`:u({type:"info",message:m(e?"error.awaiting_media":"common.no_media"),icon:"mdi:multimedia",dotdotdot:e})}
      </advanced-camera-card-surround-basic>
    `}async _extendGallery(e,a,t=!0){this.cameraManager&&this.viewManagerEpoch&&(await this._controller.extendMediaGallery(this.cameraManager,this.viewManagerEpoch,a,t),e.detail.resolve())}static get styles(){return y(":host {\n  width: 100%;\n  height: 100%;\n  display: block;\n}\n\nadvanced-camera-card-surround-basic {\n  max-height: 110dvh;\n}\n\nadvanced-camera-card-thumbnail {\n  height: 100%;\n  min-height: var(--advanced-camera-card-thumbnail-size);\n  background-color: var(--secondary-background-color);\n}\n\nadvanced-camera-card-thumbnail:not([details]) {\n  width: 100%;\n}\n\nadvanced-camera-card-thumbnail.selected {\n  border: 4px solid var(--accent-color);\n  border-radius: calc(var(--advanced-camera-card-css-border-radius, var(--ha-card-border-radius, 4px)) + 4px);\n}")}};o([l({attribute:!1})],p.prototype,"hass",void 0),o([l({attribute:!1})],p.prototype,"viewManagerEpoch",void 0),o([l({attribute:!1})],p.prototype,"galleryConfig",void 0),o([l({attribute:!1})],p.prototype,"cameraManager",void 0),o([l({attribute:!1})],p.prototype,"viewItemManager",void 0),o([l({attribute:!1})],p.prototype,"cardWideConfig",void 0),p=o([d("advanced-camera-card-media-gallery")],p);export{p as AdvancedCameraCardMediaGallery};
