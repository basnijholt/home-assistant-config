import{_ as e,n as t,t as n,a as i,d4 as a,x as c,l as r,d6 as l,da as s,r as o,dK as d}from"./card-04eb008a.js";let p=class extends i{constructor(){super(...arguments),this._refInput=a()}get value(){return this._refInput.value?.value?new Date(this._refInput.value.value):null}reset(){this._refInput.value&&(this._refInput.value.value="")}render(){const e=()=>{const e=this._refInput.value?.value;d(this,"date-picker:change",{date:e?new Date(e):null})};return c`<input
        aria-label="${r("timeline.select_date")}"
        title="${r("timeline.select_date")}"
        ${l(this._refInput)}
        type="datetime-local"
        @input=${()=>e()}
        @change=${()=>e()}
      />
      <advanced-camera-card-icon
        aria-label="${r("timeline.select_date")}"
        title="${r("timeline.select_date")}"
        .icon=${{icon:this.icon??"mdi:calendar-search"}}
        @click=${e=>{s(e),this._refInput.value?.showPicker()}}
      >
      </advanced-camera-card-icon>`}static get styles(){return o(":host {\n  display: inline-block;\n  position: relative;\n  width: var(--mdc-icon-size, 24px);\n  height: var(--mdc-icon-size, 24px);\n}\n\ninput {\n  display: block;\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  padding: 0px;\n  border: 0px;\n}\n\n/**\n * Hack warning: Safari on iOS does not support showPicker with\n * datetime-local:\n * https://caniuse.com/mdn-api_htmlinputelement_showpicker_datetime_local_input\n *\n * The hack is to render the input element in front of the icon, with an\n * opacity of 0. This only works if the underlying input element accepts the\n * click at the exact place the user happens to click. From trial and error,\n * this seems to work better than expected / quite reliably, but had the user\n * manually changed icon sizes with Safari iOS their experience may vary.\n */\n@supports (-webkit-touch-callout: none) {\n  input {\n    opacity: 0;\n    z-index: 1;\n  }\n}\n@supports not (-webkit-touch-callout: none) {\n  input {\n    visibility: hidden;\n  }\n}\nadvanced-camera-card-icon {\n  display: block;\n  height: 100%;\n  width: 100%;\n  position: absolute;\n}")}};e([t({attribute:!1})],p.prototype,"icon",void 0),p=e([n("advanced-camera-card-date-picker")],p);export{p as A};
