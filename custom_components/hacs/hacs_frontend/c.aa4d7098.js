import{a as e,h as i,e as t,i as a,$ as n,K as l,z as o,A as s,r,n as c,m as d,d as u}from"./main-c805434e.js";import"./c.ff857a48.js";e([c("search-input")],(function(e,i){return{F:class extends i{constructor(...i){super(...i),e(this)}},d:[{kind:"field",decorators:[t({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[t()],key:"filter",value:void 0},{kind:"field",decorators:[t({type:Boolean})],key:"suffix",value:()=>!1},{kind:"field",decorators:[t({type:Boolean})],key:"autofocus",value:()=>!1},{kind:"field",decorators:[t({type:String})],key:"label",value:void 0},{kind:"method",key:"focus",value:function(){var e;null===(e=this._input)||void 0===e||e.focus()}},{kind:"field",decorators:[a("ha-textfield",!0)],key:"_input",value:void 0},{kind:"method",key:"render",value:function(){return n`
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
    `}},{kind:"method",key:"_filterChanged",value:async function(e){s(this,"value-changed",{value:String(e)})}},{kind:"method",key:"_filterInputChanged",value:async function(e){this._filterChanged(e.target.value)}},{kind:"method",key:"_clearSearch",value:async function(){this._filterChanged("")}},{kind:"get",static:!0,key:"styles",value:function(){return r`
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
    `}}]}}),i);const h=d(((e,i)=>e.filter((e=>f(e.name).includes(f(i))||f(e.description).includes(f(i))||f(e.category).includes(f(i))||f(e.full_name).includes(f(i))||f(e.authors).includes(f(i))||f(e.domain).includes(f(i)))))),f=d((e=>String(e||"").toLocaleLowerCase().replace(/-|_| /g,"")));e([c("hacs-filter")],(function(e,i){return{F:class extends i{constructor(...i){super(...i),e(this)}},d:[{kind:"field",decorators:[t({attribute:!1})],key:"filters",value:void 0},{kind:"field",decorators:[t({attribute:!1})],key:"hacs",value:void 0},{kind:"method",key:"render",value:function(){var e;return n`
      <div class="filter">
        ${null===(e=this.filters)||void 0===e?void 0:e.map((e=>n`
            <ha-formfield
              class="checkbox"
              .label=${this.hacs.localize(`common.${e.id}`)||e.value}
            >
              <ha-checkbox
                .checked=${e.checked||!1}
                .id=${e.id}
                @click=${this._filterClick}
              >
              </ha-checkbox>
            </ha-formfield>
          `))}
      </div>
    `}},{kind:"method",key:"_filterClick",value:function(e){const i=e.currentTarget;this.dispatchEvent(new CustomEvent("filter-change",{detail:{id:i.id},bubbles:!0,composed:!0}))}},{kind:"get",static:!0,key:"styles",value:function(){return[u,r`
        .filter {
          display: flex;
          border-bottom: 1px solid var(--divider-color);
          align-items: center;
          font-size: 16px;
          height: 32px;
          line-height: 4px;
          background-color: var(--sidebar-background-color);
          padding: 0 16px;
          box-sizing: border-box;
        }

        .checkbox:not(:first-child) {
          margin-left: 20px;
        }
      `]}}]}}),i);export{h as f};
