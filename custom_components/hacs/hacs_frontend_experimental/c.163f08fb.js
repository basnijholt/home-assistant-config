import{bw as a,bx as i,by as t,bz as e,bA as o,bB as l,bC as s,bD as d,bE as n,bF as r,bG as c,bH as u,bI as m,bJ as h,bK as v,bL as p,O as _,_ as b,j as g,e as y,t as k,y as f,k as x,aD as w,bM as $,d as z,n as j}from"./main-c66a9a06.js";import{s as U}from"./c.04ecc0ad.js";import{b as I,e as C}from"./c.07e395f8.js";import"./c.bbadaeea.js";const M=(a,i)=>a.callWS({type:"auth/sign_path",path:i}),q="browser",B={album:{icon:a,layout:"grid"},app:{icon:i,layout:"grid"},artist:{icon:t,layout:"grid",show_list_images:!0},channel:{icon:e,thumbnail_ratio:"portrait",layout:"grid"},composer:{icon:o,layout:"grid",show_list_images:!0},contributing_artist:{icon:t,layout:"grid",show_list_images:!0},directory:{icon:l,layout:"grid",show_list_images:!0},episode:{icon:e,layout:"grid",thumbnail_ratio:"portrait"},game:{icon:s,layout:"grid",thumbnail_ratio:"portrait"},genre:{icon:d,layout:"grid",show_list_images:!0},image:{icon:n,layout:"grid"},movie:{icon:r,thumbnail_ratio:"portrait",layout:"grid"},music:{icon:c},playlist:{icon:u,layout:"grid",show_list_images:!0},podcast:{icon:m,layout:"grid"},season:{icon:e,layout:"grid",thumbnail_ratio:"portrait"},track:{icon:h},tv_show:{icon:e,layout:"grid",thumbnail_ratio:"portrait"},url:{icon:v},video:{icon:p,layout:"grid"}},L=(a,i,t,e)=>a.callWS({type:"media_player/browse_media",entity_id:i,media_content_id:t,media_content_type:e}),W=[{name:"media_content_id",required:!1,selector:{text:{}}},{name:"media_content_type",required:!1,selector:{text:{}}}];let F=b([j("ha-selector-media")],(function(a,i){return{F:class extends i{constructor(...i){super(...i),a(this)}},d:[{kind:"field",decorators:[y({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[y({attribute:!1})],key:"selector",value:void 0},{kind:"field",decorators:[y({attribute:!1})],key:"value",value:void 0},{kind:"field",decorators:[y()],key:"label",value:void 0},{kind:"field",decorators:[y()],key:"helper",value:void 0},{kind:"field",decorators:[y({type:Boolean,reflect:!0})],key:"disabled",value:()=>!1},{kind:"field",decorators:[y({type:Boolean,reflect:!0})],key:"required",value:()=>!0},{kind:"field",decorators:[k()],key:"_thumbnailUrl",value:void 0},{kind:"method",key:"willUpdate",value:function(a){if(a.has("value")){var i,t,e,o;const s=null===(i=this.value)||void 0===i||null===(t=i.metadata)||void 0===t?void 0:t.thumbnail;if(s===(null===(e=a.get("value"))||void 0===e||null===(o=e.metadata)||void 0===o?void 0:o.thumbnail))return;if(s&&s.startsWith("/"))this._thumbnailUrl=void 0,M(this.hass,s).then((a=>{this._thumbnailUrl=a.path}));else if(s&&s.startsWith("https://brands.home-assistant.io")){var l;this._thumbnailUrl=I({domain:C(s),type:"icon",useFallback:!0,darkOptimized:null===(l=this.hass.themes)||void 0===l?void 0:l.darkMode})}else this._thumbnailUrl=s}}},{kind:"method",key:"render",value:function(){var a,i,t,e,o,l,s,d,n,r,c,u,m;const h=null!==(a=this.value)&&void 0!==a&&a.entity_id?this.hass.states[this.value.entity_id]:void 0,v=!(null!==(i=this.value)&&void 0!==i&&i.entity_id)||h&&U(h,131072);return f`<ha-entity-picker
        .hass=${this.hass}
        .value=${null===(t=this.value)||void 0===t?void 0:t.entity_id}
        .label=${this.label||this.hass.localize("ui.components.selectors.media.pick_media_player")}
        .disabled=${this.disabled}
        .helper=${this.helper}
        .required=${this.required}
        include-domains='["media_player"]'
        allow-custom-entity
        @value-changed=${this._entityChanged}
      ></ha-entity-picker>
      ${v?f`<ha-card
            outlined
            @click=${this._pickMedia}
            class=${this.disabled||null===(e=this.value)||void 0===e||!e.entity_id?"disabled":""}
          >
            <div
              class="thumbnail ${x({portrait:!(null===(o=this.value)||void 0===o||null===(l=o.metadata)||void 0===l||!l.media_class)&&"portrait"===B[this.value.metadata.children_media_class||this.value.metadata.media_class].thumbnail_ratio})}"
            >
              ${null!==(s=this.value)&&void 0!==s&&null!==(d=s.metadata)&&void 0!==d&&d.thumbnail?f`
                    <div
                      class="${x({"centered-image":!!this.value.metadata.media_class&&["app","directory"].includes(this.value.metadata.media_class)})}
                        image"
                      style=${this._thumbnailUrl?`background-image: url(${this._thumbnailUrl});`:""}
                    ></div>
                  `:f`
                    <div class="icon-holder image">
                      <ha-svg-icon
                        class="folder"
                        .path=${null!==(n=this.value)&&void 0!==n&&n.media_content_id?null!==(r=this.value)&&void 0!==r&&null!==(c=r.metadata)&&void 0!==c&&c.media_class?B["directory"===this.value.metadata.media_class&&this.value.metadata.children_media_class||this.value.metadata.media_class].icon:$:w}
                      ></ha-svg-icon>
                    </div>
                  `}
            </div>
            <div class="title">
              ${null!==(u=this.value)&&void 0!==u&&u.media_content_id?(null===(m=this.value.metadata)||void 0===m?void 0:m.title)||this.value.media_content_id:this.hass.localize("ui.components.selectors.media.pick_media")}
            </div>
          </ha-card>`:f`<ha-alert>
              ${this.hass.localize("ui.components.selectors.media.browse_not_supported")}
            </ha-alert>
            <ha-form
              .hass=${this.hass}
              .data=${this.value}
              .schema=${W}
              .computeLabel=${this._computeLabelCallback}
            ></ha-form>`}`}},{kind:"field",key:"_computeLabelCallback",value(){return a=>this.hass.localize(`ui.components.selectors.media.${a.name}`)}},{kind:"method",key:"_entityChanged",value:function(a){a.stopPropagation(),_(this,"value-changed",{value:{entity_id:a.detail.value,media_content_id:"",media_content_type:""}})}},{kind:"method",key:"_pickMedia",value:function(){var a,i,t;i=this,t={action:"pick",entityId:this.value.entity_id,navigateIds:null===(a=this.value.metadata)||void 0===a?void 0:a.navigateIds,mediaPickedCallback:a=>{var i;_(this,"value-changed",{value:{...this.value,media_content_id:a.item.media_content_id,media_content_type:a.item.media_content_type,metadata:{title:a.item.title,thumbnail:a.item.thumbnail,media_class:a.item.media_class,children_media_class:a.item.children_media_class,navigateIds:null===(i=a.navigateIds)||void 0===i?void 0:i.map((a=>({media_content_type:a.media_content_type,media_content_id:a.media_content_id})))}}})}},_(i,"show-dialog",{dialogTag:"dialog-media-player-browse",dialogImport:()=>import("./c.06557919.js").then((function(a){return a.d})),dialogParams:t})}},{kind:"get",static:!0,key:"styles",value:function(){return z`
      ha-entity-picker {
        display: block;
        margin-bottom: 16px;
      }
      mwc-button {
        margin-top: 8px;
      }
      ha-alert {
        display: block;
        margin-bottom: 16px;
      }
      ha-card {
        position: relative;
        width: 200px;
        box-sizing: border-box;
        cursor: pointer;
      }
      ha-card.disabled {
        pointer-events: none;
        color: var(--disabled-text-color);
      }
      ha-card .thumbnail {
        width: 100%;
        position: relative;
        box-sizing: border-box;
        transition: padding-bottom 0.1s ease-out;
        padding-bottom: 100%;
      }
      ha-card .thumbnail.portrait {
        padding-bottom: 150%;
      }
      ha-card .image {
        border-radius: 3px 3px 0 0;
      }
      .folder {
        --mdc-icon-size: calc(var(--media-browse-item-size, 175px) * 0.4);
      }
      .title {
        font-size: 16px;
        padding-top: 16px;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-bottom: 16px;
        padding-left: 16px;
        padding-right: 4px;
        white-space: nowrap;
      }
      .image {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
      }
      .centered-image {
        margin: 0 8px;
        background-size: contain;
      }
      .icon-holder {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    `}}]}}),g);var O=Object.freeze({__proto__:null,HaMediaSelector:F});export{q as B,B as M,L as b,M as g,O as h};
