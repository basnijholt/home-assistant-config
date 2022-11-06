import{eg as i,eh as a,ei as e,ej as t,ek as o,el as l,em as s,en as d,eo as n,ep as r,eq as c,er as u,es as m,et as h,eu as v,bv as p,J as _,_ as g,j as b,e as y,t as k,y as f,k as x,aB as $,ev as w,d as z,n as j}from"./main-ec7846c8.js";import{s as U}from"./c.04ecc0ad.js";import{b as q,e as I}from"./c.07e395f8.js";import"./c.541a83df.js";const C=(i,a)=>i.callWS({type:"auth/sign_path",path:a}),M="browser",B={album:{icon:i,layout:"grid"},app:{icon:a,layout:"grid"},artist:{icon:e,layout:"grid",show_list_images:!0},channel:{icon:t,thumbnail_ratio:"portrait",layout:"grid"},composer:{icon:o,layout:"grid",show_list_images:!0},contributing_artist:{icon:e,layout:"grid",show_list_images:!0},directory:{icon:l,layout:"grid",show_list_images:!0},episode:{icon:t,layout:"grid",thumbnail_ratio:"portrait"},game:{icon:s,layout:"grid",thumbnail_ratio:"portrait"},genre:{icon:d,layout:"grid",show_list_images:!0},image:{icon:n,layout:"grid"},movie:{icon:r,thumbnail_ratio:"portrait",layout:"grid"},music:{icon:c},playlist:{icon:u,layout:"grid",show_list_images:!0},podcast:{icon:m,layout:"grid"},season:{icon:t,layout:"grid",thumbnail_ratio:"portrait"},track:{icon:h},tv_show:{icon:t,layout:"grid",thumbnail_ratio:"portrait"},url:{icon:v},video:{icon:p,layout:"grid"}},W=(i,a,e,t)=>i.callWS({type:"media_player/browse_media",entity_id:a,media_content_id:e,media_content_type:t}),L=[{name:"media_content_id",required:!1,selector:{text:{}}},{name:"media_content_type",required:!1,selector:{text:{}}}];let P=g([j("ha-selector-media")],(function(i,a){return{F:class extends a{constructor(...a){super(...a),i(this)}},d:[{kind:"field",decorators:[y({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[y({attribute:!1})],key:"selector",value:void 0},{kind:"field",decorators:[y({attribute:!1})],key:"value",value:void 0},{kind:"field",decorators:[y()],key:"label",value:void 0},{kind:"field",decorators:[y()],key:"helper",value:void 0},{kind:"field",decorators:[y({type:Boolean,reflect:!0})],key:"disabled",value:()=>!1},{kind:"field",decorators:[y({type:Boolean,reflect:!0})],key:"required",value:()=>!0},{kind:"field",decorators:[k()],key:"_thumbnailUrl",value:void 0},{kind:"method",key:"willUpdate",value:function(i){if(i.has("value")){var a,e,t,o;const s=null===(a=this.value)||void 0===a||null===(e=a.metadata)||void 0===e?void 0:e.thumbnail;if(s===(null===(t=i.get("value"))||void 0===t||null===(o=t.metadata)||void 0===o?void 0:o.thumbnail))return;if(s&&s.startsWith("/"))this._thumbnailUrl=void 0,C(this.hass,s).then((i=>{this._thumbnailUrl=i.path}));else if(s&&s.startsWith("https://brands.home-assistant.io")){var l;this._thumbnailUrl=q({domain:I(s),type:"icon",useFallback:!0,darkOptimized:null===(l=this.hass.themes)||void 0===l?void 0:l.darkMode})}else this._thumbnailUrl=s}}},{kind:"method",key:"render",value:function(){var i,a,e,t,o,l,s,d,n,r,c,u,m;const h=null!==(i=this.value)&&void 0!==i&&i.entity_id?this.hass.states[this.value.entity_id]:void 0,v=!(null!==(a=this.value)&&void 0!==a&&a.entity_id)||h&&U(h,131072);return f`<ha-entity-picker
        .hass=${this.hass}
        .value=${null===(e=this.value)||void 0===e?void 0:e.entity_id}
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
            class=${this.disabled||null===(t=this.value)||void 0===t||!t.entity_id?"disabled":""}
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
                        .path=${null!==(n=this.value)&&void 0!==n&&n.media_content_id?null!==(r=this.value)&&void 0!==r&&null!==(c=r.metadata)&&void 0!==c&&c.media_class?B["directory"===this.value.metadata.media_class&&this.value.metadata.children_media_class||this.value.metadata.media_class].icon:w:$}
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
              .schema=${L}
              .computeLabel=${this._computeLabelCallback}
            ></ha-form>`}`}},{kind:"field",key:"_computeLabelCallback",value(){return i=>this.hass.localize(`ui.components.selectors.media.${i.name}`)}},{kind:"method",key:"_entityChanged",value:function(i){i.stopPropagation(),_(this,"value-changed",{value:{entity_id:i.detail.value,media_content_id:"",media_content_type:""}})}},{kind:"method",key:"_pickMedia",value:function(){var i,a,e;a=this,e={action:"pick",entityId:this.value.entity_id,navigateIds:null===(i=this.value.metadata)||void 0===i?void 0:i.navigateIds,mediaPickedCallback:i=>{var a;_(this,"value-changed",{value:{...this.value,media_content_id:i.item.media_content_id,media_content_type:i.item.media_content_type,metadata:{title:i.item.title,thumbnail:i.item.thumbnail,media_class:i.item.media_class,children_media_class:i.item.children_media_class,navigateIds:null===(a=i.navigateIds)||void 0===a?void 0:a.map((i=>({media_content_type:i.media_content_type,media_content_id:i.media_content_id})))}}})}},_(a,"show-dialog",{dialogTag:"dialog-media-player-browse",dialogImport:()=>import("./c.8654f580.js").then((function(i){return i.d})),dialogParams:e})}},{kind:"get",static:!0,key:"styles",value:function(){return z`
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
    `}}]}}),b);var S=Object.freeze({__proto__:null,HaMediaSelector:P});export{M as B,B as M,W as b,C as g,S as h};
