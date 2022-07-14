import{a as e,h as i,e as t,$ as r,d as o,r as c,n as d}from"./main-7bc9a818.js";import"./c.01f18260.js";e([d("hacs-filter")],(function(e,i){return{F:class extends i{constructor(...i){super(...i),e(this)}},d:[{kind:"field",decorators:[t({attribute:!1})],key:"filters",value:void 0},{kind:"field",decorators:[t({attribute:!1})],key:"hacs",value:void 0},{kind:"method",key:"render",value:function(){var e;return r`
      <div class="filter">
        ${null===(e=this.filters)||void 0===e?void 0:e.map((e=>r`
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
    `}},{kind:"method",key:"_filterClick",value:function(e){const i=e.currentTarget;this.dispatchEvent(new CustomEvent("filter-change",{detail:{id:i.id},bubbles:!0,composed:!0}))}},{kind:"get",static:!0,key:"styles",value:function(){return[o,c`
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
      `]}}]}}),i);
