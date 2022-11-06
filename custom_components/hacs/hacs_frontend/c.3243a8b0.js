import{a as e,h as i,e as t,i as a,$ as n,O as l,z as o,A as s,r as c,n as r,m as d}from"./main-ad130be7.js";import"./c.3f859915.js";e([r("search-input")],(function(e,i){return{F:class extends i{constructor(...i){super(...i),e(this)}},d:[{kind:"field",decorators:[t({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[t()],key:"filter",value:void 0},{kind:"field",decorators:[t({type:Boolean})],key:"suffix",value:()=>!1},{kind:"field",decorators:[t({type:Boolean})],key:"autofocus",value:()=>!1},{kind:"field",decorators:[t({type:String})],key:"label",value:void 0},{kind:"method",key:"focus",value:function(){var e;null===(e=this._input)||void 0===e||e.focus()}},{kind:"field",decorators:[a("ha-textfield",!0)],key:"_input",value:void 0},{kind:"method",key:"render",value:function(){return n`
      <ha-textfield
        .autofocus=${this.autofocus}
        .label=${this.label||"Search"}
        .value=${this.filter||""}
        icon
        .iconTrailing=${this.filter||this.suffix}
        @input=${this._filterInputChanged}
      >
        <slot name="prefix" slot="leadingIcon">
          <ha-svg-icon
            tabindex="-1"
            class="prefix"
            .path=${l}
          ></ha-svg-icon>
        </slot>
        <div class="trailing" slot="trailingIcon">
          ${this.filter&&n`
            <ha-icon-button
              @click=${this._clearSearch}
              .label=${this.hass.localize("ui.common.clear")}
              .path=${o}
              class="clear-button"
            ></ha-icon-button>
          `}
          <slot name="suffix"></slot>
        </div>
      </ha-textfield>
    `}},{kind:"method",key:"_filterChanged",value:async function(e){s(this,"value-changed",{value:String(e)})}},{kind:"method",key:"_filterInputChanged",value:async function(e){this._filterChanged(e.target.value)}},{kind:"method",key:"_clearSearch",value:async function(){this._filterChanged("")}},{kind:"get",static:!0,key:"styles",value:function(){return c`
      :host {
        display: inline-flex;
      }
      ha-svg-icon,
      ha-icon-button {
        color: var(--primary-text-color);
      }
      ha-svg-icon {
        outline: none;
      }
      .clear-button {
        --mdc-icon-size: 20px;
      }
      ha-textfield {
        display: inherit;
      }
      .trailing {
        display: flex;
        align-items: center;
      }
    `}}]}}),i);const u=d(((e,i)=>e.filter((e=>h(e.name).includes(h(i))||h(e.description).includes(h(i))||h(e.category).includes(h(i))||h(e.full_name).includes(h(i))||h(e.authors).includes(h(i))||h(e.domain).includes(h(i)))))),h=d((e=>String(e||"").toLocaleLowerCase().replace(/-|_| /g,"")));export{u as f};
