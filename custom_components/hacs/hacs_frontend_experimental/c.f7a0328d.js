import{I as e,J as t,$ as a,Z as i,y as r,d as o,e_ as n,f as s,e as l,i as d,ac as c,j as h,k as u,_ as p,t as y,ae as m,O as f,a8 as _,n as b}from"./main-aeda8d41.js";import{n as v,m as w,b as g,r as k,f as D}from"./c.aa335625.js";import{c as x}from"./c.96ac6088.js";import"./c.8311c493.js";import"./c.8e28b461.js";import"./c.0a5b0403.js";const T=Intl&&Intl.DateTimeFormat,C=[38,33,36],S=[40,34,35],$=new Set([37,...C]),F=new Set([39,...S]),U=new Set([39,...C]),N=new Set([37,...S]),W=new Set([37,39,...C,...S]),L=e(class extends t{constructor(e){super(e),this.et=new WeakMap}render(e){return[e]}update(e,[t]){if(v(this.it)&&(!v(t)||this.it.strings!==t.strings)){const t=w(e).pop();let r=this.et.get(this.it.strings);if(void 0===r){const e=document.createDocumentFragment();r=a(i,e),r.setConnected(!1),this.et.set(this.it.strings,r)}g(r,[t]),k(r,void 0,t)}if(v(t)){if(!v(this.it)||this.it.strings!==t.strings){const a=this.et.get(t.strings);if(void 0!==a){const t=w(a).pop();D(e),k(e,void 0,t),g(e,[t])}}this.it=t}else this.it=void 0;return this.render(t)}});function M(e,t,a){return new Date(Date.UTC(e,t,a))}const E=r`<svg height="24" viewBox="0 0 24 24" width="24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path></svg>`,Y=r`<svg height="24" viewBox="0 0 24 24" width="24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></svg>`,V=o`
button {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  position: relative;
  display: block;
  margin: 0;
  padding: 0;
  background: none; /** NOTE: IE11 fix */
  color: inherit;
  border: none;
  font: inherit;
  text-align: left;
  text-transform: inherit;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
`;o`
a {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  position: relative;
  display: inline-block;
  background: initial;
  color: inherit;
  font: inherit;
  text-transform: inherit;
  text-decoration: none;
  outline: none;
}
a:focus,
a:focus.page-selected {
  text-decoration: underline;
}
`,o`
svg {
  display: block;
  min-width: var(--svg-icon-min-width, 24px);
  min-height: var(--svg-icon-min-height, 24px);
  fill: var(--svg-icon-fill, currentColor);
  pointer-events: none;
}
`,o`[hidden] { display: none !important; }`;const O=o`
:host {
  display: block;

  /* --app-datepicker-width: 300px; */
  /* --app-datepicker-primary-color: #4285f4; */
  /* --app-datepicker-header-height: 80px; */
}

* {
  box-sizing: border-box;
}
`;function A(e,t){return+t-+e}function P({hasAltKey:e,keyCode:t,focusedDate:a,selectedDate:i,disabledDaysSet:r,disabledDatesSet:o,minTime:n,maxTime:s}){const l=a.getUTCFullYear(),d=a.getUTCMonth(),c=a.getUTCDate(),h=+a,u=i.getUTCFullYear(),p=i.getUTCMonth();let y=l,m=d,f=c,_=!0;switch((p!==d||u!==l)&&(y=u,m=p,f=1,_=34===t||33===t||35===t),_){case h===n&&$.has(t):case h===s&&F.has(t):break;case 38===t:f-=7;break;case 40===t:f+=7;break;case 37===t:f-=1;break;case 39===t:f+=1;break;case 34===t:e?y+=1:m+=1;break;case 33===t:e?y-=1:m-=1;break;case 35===t:m+=1,f=0;break;default:f=1}if(34===t||33===t){const e=M(y,m+1,0).getUTCDate();f>e&&(f=e)}const b=function({keyCode:e,disabledDaysSet:t,disabledDatesSet:a,focusedDate:i,maxTime:r,minTime:o}){const n=+i;let s=n<o,l=n>r;if(A(o,r)<864e5)return i;let d=s||l||t.has(i.getUTCDay())||a.has(n);if(!d)return i;let c=0,h=s===l?i:new Date(s?o-864e5:864e5+r);const u=h.getUTCFullYear(),p=h.getUTCMonth();let y=h.getUTCDate();for(;d;)(s||!l&&U.has(e))&&(y+=1),(l||!s&&N.has(e))&&(y-=1),h=M(u,p,y),c=+h,s||(s=c<o,s&&(h=new Date(o),c=+h,y=h.getUTCDate())),l||(l=c>r,l&&(h=new Date(r),c=+h,y=h.getUTCDate())),d=t.has(h.getUTCDay())||a.has(c);return h}({keyCode:t,maxTime:s,minTime:n,disabledDaysSet:r,disabledDatesSet:o,focusedDate:M(y,m,f)});return b}function j(e,t,a){return e.dispatchEvent(new CustomEvent(t,{detail:a,bubbles:!0,composed:!0}))}function z(e,t){return e.composedPath().find((e=>e instanceof HTMLElement&&t(e)))}function I(e){return t=>e.format(t).replace(/\u200e/gi,"")}function K(e){const t=T(e,{timeZone:"UTC",weekday:"short",month:"short",day:"numeric"}),a=T(e,{timeZone:"UTC",day:"numeric"}),i=T(e,{timeZone:"UTC",year:"numeric",month:"short",day:"numeric"}),r=T(e,{timeZone:"UTC",year:"numeric",month:"long"}),o=T(e,{timeZone:"UTC",weekday:"long"}),n=T(e,{timeZone:"UTC",weekday:"narrow"}),s=T(e,{timeZone:"UTC",year:"numeric"});return{locale:e,dateFormat:I(t),dayFormat:I(a),fullDateFormat:I(i),longMonthYearFormat:I(r),longWeekdayFormat:I(o),narrowWeekdayFormat:I(n),yearFormat:I(s)}}function Z(e,t){const a=function(e,t){const a=t.getUTCFullYear(),i=t.getUTCMonth(),r=t.getUTCDate(),o=t.getUTCDay();let n=o;return"first-4-day-week"===e&&(n=3),"first-day-of-year"===e&&(n=6),"first-full-week"===e&&(n=0),M(a,i,r-o+n)}(e,t),i=M(a.getUTCFullYear(),0,1),r=1+(+a-+i)/864e5;return Math.ceil(r/7)}function B(e){if(e>=0&&e<7)return Math.abs(e);return((e<0?7*Math.ceil(Math.abs(e)):0)+e)%7}function R(e,t,a){const i=B(e-t);return a?1+i:i}function q(e){const{dayFormat:t,fullDateFormat:a,locale:i,longWeekdayFormat:r,narrowWeekdayFormat:o,selectedDate:n,disabledDates:s,disabledDays:l,firstDayOfWeek:d,max:c,min:h,showWeekNumber:u,weekLabel:p,weekNumberType:y}=e,m=null==h?Number.MIN_SAFE_INTEGER:+h,f=null==c?Number.MAX_SAFE_INTEGER:+c,_=function(e){const{firstDayOfWeek:t=0,showWeekNumber:a=!1,weekLabel:i,longWeekdayFormat:r,narrowWeekdayFormat:o}=e||{},n=1+(t+(t<0?7:0))%7,s=i||"Wk",l=a?[{label:"Wk"===s?"Week":s,value:s}]:[],d=Array.from(Array(7)).reduce(((e,t,a)=>{const i=M(2017,0,n+a);return e.push({label:r(i),value:o(i)}),e}),l);return d}({longWeekdayFormat:r,narrowWeekdayFormat:o,firstDayOfWeek:d,showWeekNumber:u,weekLabel:p}),b=e=>[i,e.toJSON(),null==s?void 0:s.join("_"),null==l?void 0:l.join("_"),d,null==c?void 0:c.toJSON(),null==h?void 0:h.toJSON(),u,p,y].filter(Boolean).join(":"),v=n.getUTCFullYear(),w=n.getUTCMonth(),g=[-1,0,1].map((e=>{const r=M(v,w+e,1),o=+M(v,w+e+1,0),n=b(r);if(o<m||+r>f)return{key:n,calendar:[],disabledDatesSet:new Set,disabledDaysSet:new Set};const _=function(e){const{date:t,dayFormat:a,disabledDates:i=[],disabledDays:r=[],firstDayOfWeek:o=0,fullDateFormat:n,locale:s="en-US",max:l,min:d,showWeekNumber:c=!1,weekLabel:h="Week",weekNumberType:u="first-4-day-week"}=e||{},p=B(o),y=t.getUTCFullYear(),m=t.getUTCMonth(),f=M(y,m,1),_=new Set(r.map((e=>R(e,p,c)))),b=new Set(i.map((e=>+e))),v=[f.toJSON(),p,s,null==l?"":l.toJSON(),null==d?"":d.toJSON(),Array.from(_).join(","),Array.from(b).join(","),u].filter(Boolean).join(":"),w=R(f.getUTCDay(),p,c),g=null==d?+new Date("2000-01-01"):+d,k=null==l?+new Date("2100-12-31"):+l,D=c?8:7,x=M(y,1+m,0).getUTCDate(),T=[];let C=[],S=!1,$=1;for(const e of[0,1,2,3,4,5]){for(const t of[0,1,2,3,4,5,6].concat(7===D?[]:[7])){const i=t+e*D;if(!S&&c&&0===t){const t=Z(u,M(y,m,$-(e<1?p:0))),a=`${h} ${t}`;C.push({fullDate:null,label:a,value:`${t}`,key:`${v}:${a}`,disabled:!0});continue}if(S||i<w){C.push({fullDate:null,label:"",value:"",key:`${v}:${i}`,disabled:!0});continue}const r=M(y,m,$),o=+r,s=_.has(t)||b.has(o)||o<g||o>k;s&&b.add(o),C.push({fullDate:r,label:n(r),value:a(r),key:`${v}:${r.toJSON()}`,disabled:s}),$+=1,$>x&&(S=!0)}T.push(C),C=[]}return{disabledDatesSet:b,calendar:T,disabledDaysSet:new Set(r.map((e=>B(e)))),key:v}}({dayFormat:t,fullDateFormat:a,locale:i,disabledDates:s,disabledDays:l,firstDayOfWeek:d,max:c,min:h,showWeekNumber:u,weekLabel:p,weekNumberType:y,date:r});return{..._,key:n}})),k=[],D=new Set,x=new Set;for(const e of g){const{disabledDatesSet:t,disabledDaysSet:a,...i}=e;if(i.calendar.length>0){if(a.size>0)for(const e of a)x.add(e);if(t.size>0)for(const e of t)D.add(e)}k.push(i)}return{calendars:k,weekdays:_,disabledDatesSet:D,disabledDaysSet:x,key:b(n)}}function J(e){const t=null==e?new Date:new Date(e),a="string"==typeof e&&(/^\d{4}-\d{2}-\d{2}$/i.test(e)||/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}(Z|\+00:00|-00:00)$/i.test(e)),i="number"==typeof e&&e>0&&isFinite(e);let r=t.getFullYear(),o=t.getMonth(),n=t.getDate();return(a||i)&&(r=t.getUTCFullYear(),o=t.getUTCMonth(),n=t.getUTCDate()),M(r,o,n)}function X(e,t){return e.classList.contains(t)}function H(e,t){return!(null==e||!(t instanceof Date)||isNaN(+t))}function G(e){return e-Math.floor(e)>0?+e.toFixed(3):e}function Q(e){return{passive:!0,handleEvent:e}}function ee(e,t){const a="string"==typeof e&&e.length>0?e.split(/,\s*/i):[];return a.length?"function"==typeof t?a.map(t):a:[]}function te(e){if(e instanceof Date&&!isNaN(+e)){const t=e.toJSON();return null==t?"":t.replace(/^(.+)T.+/i,"$1")}return""}function ae(e,t){if(A(e,t)<864e5)return[];const a=e.getUTCFullYear();return Array.from(Array(t.getUTCFullYear()-a+1),((e,t)=>t+a))}function ie(e,t,a){const i="number"==typeof e?e:+e,r=+t,o=+a;return i<r?r:i>o?o:e}function re(e){const{clientX:t,clientY:a,pageX:i,pageY:r}=e,o=Math.max(i,t),n=Math.max(r,a),s=e.identifier||e.pointerId;return{x:o,y:n,id:null==s?0:s}}function oe(e,t){const a=t.changedTouches;if(null==a)return{newPointer:re(t),oldPointer:e};const i=Array.from(a,(e=>re(e))),r=null==e?i[0]:i.find((t=>t.id===e.id));return{newPointer:r,oldPointer:e}}function ne(e,t,a){e.addEventListener(t,a,!!n&&{passive:!0})}class se{constructor(e,t){this._element=e,this._startPointer=null;const{down:a,move:i,up:r}=t;this._down=this._onDown(a),this._move=this._onMove(i),this._up=this._onUp(r),e&&e.addEventListener&&(e.addEventListener("mousedown",this._down),ne(e,"touchstart",this._down),ne(e,"touchmove",this._move),ne(e,"touchend",this._up))}disconnect(){const e=this._element;e&&e.removeEventListener&&(e.removeEventListener("mousedown",this._down),e.removeEventListener("touchstart",this._down),e.removeEventListener("touchmove",this._move),e.removeEventListener("touchend",this._up))}_onDown(e){return t=>{t instanceof MouseEvent&&(this._element.addEventListener("mousemove",this._move),this._element.addEventListener("mouseup",this._up),this._element.addEventListener("mouseleave",this._up));const{newPointer:a}=oe(this._startPointer,t);e(a,t),this._startPointer=a}}_onMove(e){return t=>{this._updatePointers(e,t)}}_onUp(e){return t=>{this._updatePointers(e,t,!0)}}_updatePointers(e,t,a){a&&t instanceof MouseEvent&&(this._element.removeEventListener("mousemove",this._move),this._element.removeEventListener("mouseup",this._up),this._element.removeEventListener("mouseleave",this._up));const{newPointer:i,oldPointer:r}=oe(this._startPointer,t);e(i,r,t),this._startPointer=a?null:i}}class le extends h{constructor(){super(),this.firstDayOfWeek=0,this.showWeekNumber=!1,this.weekNumberType="first-4-day-week",this.landscape=!1,this.locale=T&&T().resolvedOptions&&T().resolvedOptions().locale||"en-US",this.disabledDays="",this.disabledDates="",this.weekLabel="Wk",this.inline=!1,this.dragRatio=.15,this._hasMin=!1,this._hasMax=!1,this._disabledDaysSet=new Set,this._disabledDatesSet=new Set,this._dx=-1/0,this._hasNativeWebAnimation="animate"in HTMLElement.prototype,this._updatingDateWithKey=!1;const e=J(),t=K(this.locale),a=te(e),i=J("2100-12-31");this.value=a,this.startView="calendar",this._min=new Date(e),this._max=new Date(i),this._todayDate=e,this._maxDate=i,this._yearList=ae(e,i),this._selectedDate=new Date(e),this._focusedDate=new Date(e),this._formatters=t}get startView(){return this._startView}set startView(e){const t=e||"calendar";if("calendar"!==t&&"yearList"!==t)return;const a=this._startView;this._startView=t,this.requestUpdate("startView",a)}get min(){return this._hasMin?te(this._min):""}set min(e){const t=J(e),a=H(e,t);this._min=a?t:this._todayDate,this._hasMin=a,this.requestUpdate("min")}get max(){return this._hasMax?te(this._max):""}set max(e){const t=J(e),a=H(e,t);this._max=a?t:this._maxDate,this._hasMax=a,this.requestUpdate("max")}get value(){return te(this._focusedDate)}set value(e){const t=J(e),a=H(e,t)?t:this._todayDate;this._focusedDate=new Date(a),this._selectedDate=this._lastSelectedDate=new Date(a)}disconnectedCallback(){super.disconnectedCallback(),this._tracker&&(this._tracker.disconnect(),this._tracker=void 0)}render(){this._formatters.locale!==this.locale&&(this._formatters=K(this.locale));const e="yearList"===this._startView?this._renderDatepickerYearList():this._renderDatepickerCalendar(),t=this.inline?null:r`<div class="datepicker-header" part="header">${this._renderHeaderSelectorButton()}</div>`;return r`
    ${t}
    <div class="datepicker-body" part="body">${L(e)}</div>
    `}firstUpdated(){let e;e="calendar"===this._startView?this.inline?this.shadowRoot.querySelector(".btn__month-selector"):this._buttonSelectorYear:this._yearViewListItem,j(this,"datepicker-first-updated",{firstFocusableElement:e,value:this.value})}async updated(e){const t=this._startView;if(e.has("min")||e.has("max")){this._yearList=ae(this._min,this._max),"yearList"===t&&this.requestUpdate();const e=+this._min,a=+this._max;if(A(e,a)>864e5){const t=+this._focusedDate;let i=t;t<e&&(i=e),t>a&&(i=a),this.value=te(new Date(i))}}if(e.has("_startView")||e.has("startView")){if("yearList"===t){const e=48*(this._selectedDate.getUTCFullYear()-this._min.getUTCFullYear()-2);!function(e,t){if(null==e.scrollTo){const{top:a,left:i}=t||{};e.scrollTop=a||0,e.scrollLeft=i||0}else e.scrollTo(t)}(this._yearViewFullList,{top:e,left:0})}if("calendar"===t&&null==this._tracker){const e=this.calendarsContainer;let t=!1,a=!1,i=!1;if(e){const r={down:()=>{i||(t=!0,this._dx=0)},move:(r,o)=>{if(i||!t)return;const n=this._dx,s=n<0&&X(e,"has-max-date")||n>0&&X(e,"has-min-date");!s&&Math.abs(n)>0&&t&&(a=!0,e.style.transform=`translateX(${G(n)}px)`),this._dx=s?0:n+(r.x-o.x)},up:async(r,o,n)=>{if(t&&a){const r=this._dx,o=e.getBoundingClientRect().width/3,n=Math.abs(r)>Number(this.dragRatio)*o,s=350,l="cubic-bezier(0, 0, .4, 1)",d=n?G(o*(r<0?-1:1)):0;i=!0,await async function(e,t){const{hasNativeWebAnimation:a=!1,keyframes:i=[],options:r={duration:100}}=t||{};if(Array.isArray(i)&&i.length)return new Promise((t=>{if(a)e.animate(i,r).onfinish=()=>t();else{const[,a]=i||[],o=()=>{e.removeEventListener("transitionend",o),t()};e.addEventListener("transitionend",o),e.style.transitionDuration=`${r.duration}ms`,r.easing&&(e.style.transitionTimingFunction=r.easing),Object.keys(a).forEach((t=>{t&&(e.style[t]=a[t])}))}}))}(e,{hasNativeWebAnimation:this._hasNativeWebAnimation,keyframes:[{transform:`translateX(${r}px)`},{transform:`translateX(${d}px)`}],options:{duration:s,easing:l}}),n&&this._updateMonth(r<0?"next":"previous").handleEvent(),t=a=i=!1,this._dx=-1/0,e.removeAttribute("style"),j(this,"datepicker-animation-finished")}else t&&(this._updateFocusedDate(n),t=a=!1,this._dx=-1/0)}};this._tracker=new se(e,r)}}e.get("_startView")&&"calendar"===t&&this._focusElement('[part="year-selector"]')}this._updatingDateWithKey&&(this._focusElement('[part="calendars"]:nth-of-type(2) .day--focused'),this._updatingDateWithKey=!1)}_focusElement(e){const t=this.shadowRoot.querySelector(e);t&&t.focus()}_renderHeaderSelectorButton(){const{yearFormat:e,dateFormat:t}=this._formatters,a="calendar"===this.startView,i=this._focusedDate,o=t(i),n=e(i);return r`
    <button
      class="${u({"btn__year-selector":!0,selected:!a})}"
      type="button"
      part="year-selector"
      data-view="${"yearList"}"
      @click="${this._updateView("yearList")}">${n}</button>

    <div class="datepicker-toolbar" part="toolbar">
      <button
        class="${u({"btn__calendar-selector":!0,selected:a})}"
        type="button"
        part="calendar-selector"
        data-view="${"calendar"}"
        @click="${this._updateView("calendar")}">${o}</button>
    </div>
    `}_renderDatepickerYearList(){const{yearFormat:e}=this._formatters,t=this._focusedDate.getUTCFullYear();return r`
    <div class="datepicker-body__year-list-view" part="year-list-view">
      <div class="year-list-view__full-list" part="year-list" @click="${this._updateYear}">
      ${this._yearList.map((a=>r`<button
        class="${u({"year-list-view__list-item":!0,"year--selected":t===a})}"
        type="button"
        part="year"
        .year="${a}">${e(M(a,0,1))}</button>`))}</div>
    </div>
    `}_renderDatepickerCalendar(){const{longMonthYearFormat:e,dayFormat:t,fullDateFormat:a,longWeekdayFormat:i,narrowWeekdayFormat:o}=this._formatters,n=ee(this.disabledDays,Number),s=ee(this.disabledDates,J),l=this.showWeekNumber,d=this._focusedDate,c=this.firstDayOfWeek,h=J(),p=this._selectedDate,y=this._max,m=this._min,{calendars:f,disabledDaysSet:_,disabledDatesSet:b,weekdays:v}=q({dayFormat:t,fullDateFormat:a,longWeekdayFormat:i,narrowWeekdayFormat:o,firstDayOfWeek:c,disabledDays:n,disabledDates:s,locale:this.locale,selectedDate:p,showWeekNumber:this.showWeekNumber,weekNumberType:this.weekNumberType,max:y,min:m,weekLabel:this.weekLabel}),w=!f[0].calendar.length,g=!f[2].calendar.length,k=v.map((e=>r`<th
        class="calendar-weekday"
        part="calendar-weekday"
        role="columnheader"
        aria-label="${e.label}"
      >
        <div class="weekday" part="weekday">${e.value}</div>
      </th>`)),D=x(f,(e=>e.key),(({calendar:t},a)=>{if(!t.length)return r`<div class="calendar-container" part="calendar"></div>`;const i=`calendarcaption${a}`,o=t[1][1].fullDate,n=1===a,s=n&&!this._isInVisibleMonth(d,p)?P({disabledDaysSet:_,disabledDatesSet:b,hasAltKey:!1,keyCode:36,focusedDate:d,selectedDate:p,minTime:+m,maxTime:+y}):d;return r`
      <div class="calendar-container" part="calendar">
        <table class="calendar-table" part="table" role="grid" aria-labelledby="${i}">
          <caption id="${i}">
            <div class="calendar-label" part="label">${o?e(o):""}</div>
          </caption>

          <thead role="rowgroup">
            <tr class="calendar-weekdays" part="weekdays" role="row">${k}</tr>
          </thead>

          <tbody role="rowgroup">${t.map((e=>r`<tr role="row">${e.map(((e,t)=>{const{disabled:a,fullDate:i,label:o,value:c}=e;if(!i&&c&&l&&t<1)return r`<th
                      class="full-calendar__day weekday-label"
                      part="calendar-day"
                      scope="row"
                      role="rowheader"
                      abbr="${o}"
                      aria-label="${o}"
                    >${c}</th>`;if(!c||!i)return r`<td class="full-calendar__day day--empty" part="calendar-day"></td>`;const p=+new Date(i),y=+d===p,m=n&&s.getUTCDate()===Number(c);return r`
                  <td
                    tabindex="${m?"0":"-1"}"
                    class="${u({"full-calendar__day":!0,"day--disabled":a,"day--today":+h===p,"day--focused":!a&&y})}"
                    part="calendar-day"
                    role="gridcell"
                    aria-disabled="${a?"true":"false"}"
                    aria-label="${o}"
                    aria-selected="${y?"true":"false"}"
                    .fullDate="${i}"
                    .day="${c}"
                  >
                    <div class="calendar-day" part="day">${c}</div>
                  </td>
                  `}))}</tr>`))}</tbody>
        </table>
      </div>
      `}));return this._disabledDatesSet=b,this._disabledDaysSet=_,r`
    <div class="datepicker-body__calendar-view" part="calendar-view">
      <div class="calendar-view__month-selector" part="month-selectors">
        <div class="month-selector-container">${w?null:r`
          <button
            class="btn__month-selector"
            type="button"
            part="month-selector"
            aria-label="Previous month"
            @click="${this._updateMonth("previous")}"
          >${E}</button>
        `}</div>

        <div class="month-selector-container">${g?null:r`
          <button
            class="btn__month-selector"
            type="button"
            part="month-selector"
            aria-label="Next month"
            @click="${this._updateMonth("next")}"
          >${Y}</button>
        `}</div>
      </div>

      <div
        class="${u({"calendars-container":!0,"has-min-date":w,"has-max-date":g})}"
        part="calendars"
        @keyup="${this._updateFocusedDateWithKeyboard}"
      >${D}</div>
    </div>
    `}_updateView(e){return Q((()=>{"calendar"===e&&(this._selectedDate=this._lastSelectedDate=new Date(ie(this._focusedDate,this._min,this._max))),this._startView=e}))}_updateMonth(e){return Q((()=>{if(null==this.calendarsContainer)return this.updateComplete;const t=this._lastSelectedDate||this._selectedDate,a=this._min,i=this._max,r="previous"===e,o=M(t.getUTCFullYear(),t.getUTCMonth()+(r?-1:1),1),n=o.getUTCFullYear(),s=o.getUTCMonth(),l=a.getUTCFullYear(),d=a.getUTCMonth(),c=i.getUTCFullYear(),h=i.getUTCMonth();return n<l||n<=l&&s<d||(n>c||n>=c&&s>h)||(this._lastSelectedDate=o,this._selectedDate=this._lastSelectedDate),this.updateComplete}))}_updateYear(e){const t=z(e,(e=>X(e,"year-list-view__list-item")));if(null==t)return;const a=ie(new Date(this._focusedDate).setUTCFullYear(+t.year),this._min,this._max);this._selectedDate=this._lastSelectedDate=new Date(a),this._focusedDate=new Date(a),this._startView="calendar"}_updateFocusedDate(e){const t=z(e,(e=>X(e,"full-calendar__day")));null==t||["day--empty","day--disabled","day--focused","weekday-label"].some((e=>X(t,e)))||(this._focusedDate=new Date(t.fullDate),j(this,"datepicker-value-updated",{isKeypress:!1,value:this.value}))}_updateFocusedDateWithKeyboard(e){const t=e.keyCode;if(13===t||32===t)return j(this,"datepicker-value-updated",{keyCode:t,isKeypress:!0,value:this.value}),void(this._focusedDate=new Date(this._selectedDate));if(9===t||!W.has(t))return;const a=this._selectedDate,i=P({keyCode:t,selectedDate:a,disabledDatesSet:this._disabledDatesSet,disabledDaysSet:this._disabledDaysSet,focusedDate:this._focusedDate,hasAltKey:e.altKey,maxTime:+this._max,minTime:+this._min});this._isInVisibleMonth(i,a)||(this._selectedDate=this._lastSelectedDate=i),this._focusedDate=i,this._updatingDateWithKey=!0,j(this,"datepicker-value-updated",{keyCode:t,isKeypress:!0,value:this.value})}_isInVisibleMonth(e,t){const a=e.getUTCFullYear(),i=e.getUTCMonth(),r=t.getUTCFullYear(),o=t.getUTCMonth();return a===r&&i===o}get calendarsContainer(){return this.shadowRoot.querySelector(".calendars-container")}}var de,ce;le.styles=[O,V,o`
    :host {
      width: 312px;
      /** NOTE: Magic number as 16:9 aspect ratio does not look good */
      /* height: calc((var(--app-datepicker-width) / .66) - var(--app-datepicker-footer-height, 56px)); */
      background-color: var(--app-datepicker-bg-color, #fff);
      color: var(--app-datepicker-color, #000);
      border-radius:
        var(--app-datepicker-border-top-left-radius, 0)
        var(--app-datepicker-border-top-right-radius, 0)
        var(--app-datepicker-border-bottom-right-radius, 0)
        var(--app-datepicker-border-bottom-left-radius, 0);
      contain: content;
      overflow: hidden;
    }
    :host([landscape]) {
      display: flex;

      /** <iphone-5-landscape-width> - <standard-side-margin-width> */
      min-width: calc(568px - 16px * 2);
      width: calc(568px - 16px * 2);
    }

    .datepicker-header + .datepicker-body {
      border-top: 1px solid var(--app-datepicker-separator-color, #ddd);
    }
    :host([landscape]) > .datepicker-header + .datepicker-body {
      border-top: none;
      border-left: 1px solid var(--app-datepicker-separator-color, #ddd);
    }

    .datepicker-header {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      position: relative;
      padding: 16px 24px;
    }
    :host([landscape]) > .datepicker-header {
      /** :this.<one-liner-month-day-width> + :this.<side-padding-width> */
      min-width: calc(14ch + 24px * 2);
    }

    .btn__year-selector,
    .btn__calendar-selector {
      color: var(--app-datepicker-selector-color, rgba(0, 0, 0, .55));
      cursor: pointer;
      /* outline: none; */
    }
    .btn__year-selector.selected,
    .btn__calendar-selector.selected {
      color: currentColor;
    }

    /**
      * NOTE: IE11-only fix. This prevents formatted focused date from overflowing the container.
      */
    .datepicker-toolbar {
      width: 100%;
    }

    .btn__year-selector {
      font-size: 16px;
      font-weight: 700;
    }
    .btn__calendar-selector {
      font-size: 36px;
      font-weight: 700;
      line-height: 1;
    }

    .datepicker-body {
      position: relative;
      width: 100%;
      overflow: hidden;
    }

    .datepicker-body__calendar-view {
      min-height: 56px;
    }

    .calendar-view__month-selector {
      display: flex;
      align-items: center;

      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      padding: 0 8px;
      z-index: 1;
    }

    .month-selector-container {
      max-height: 56px;
      height: 100%;
    }
    .month-selector-container + .month-selector-container {
      margin: 0 0 0 auto;
    }

    .btn__month-selector {
      padding: calc((56px - 24px) / 2);
      /**
        * NOTE: button element contains no text, only SVG.
        * No extra height will incur with such setting.
        */
      line-height: 0;
    }
    .btn__month-selector > svg {
      fill: currentColor;
    }

    .calendars-container {
      display: flex;
      justify-content: center;

      position: relative;
      top: 0;
      left: calc(-100%);
      width: calc(100% * 3);
      transform: translateZ(0);
      will-change: transform;
      /**
        * NOTE: Required for Pointer Events API to work on touch devices.
        * Native \`pan-y\` action will be fired by the browsers since we only care about the
        * horizontal direction. This is great as vertical scrolling still works even when touch
        * event happens on a datepicker's calendar.
        */
      touch-action: pan-y;
      /* outline: none; */
    }

    .year-list-view__full-list {
      max-height: calc(48px * 7);
      overflow-y: auto;

      scrollbar-color: var(--app-datepicker-scrollbar-thumb-bg-color, rgba(0, 0, 0, .35)) rgba(0, 0, 0, 0);
      scrollbar-width: thin;
    }
    .year-list-view__full-list::-webkit-scrollbar {
      width: 8px;
      background-color: rgba(0, 0, 0, 0);
    }
    .year-list-view__full-list::-webkit-scrollbar-thumb {
      background-color: var(--app-datepicker-scrollbar-thumb-bg-color, rgba(0, 0, 0, .35));
      border-radius: 50px;
    }
    .year-list-view__full-list::-webkit-scrollbar-thumb:hover {
      background-color: var(--app-datepicker-scrollbar-thumb-hover-bg-color, rgba(0, 0, 0, .5));
    }

    .calendar-weekdays > th,
    .weekday-label {
      color: var(--app-datepicker-weekday-color, rgba(0, 0, 0, .55));
      font-weight: 400;
      transform: translateZ(0);
      will-change: transform;
    }

    .calendar-container,
    .calendar-label,
    .calendar-table {
      width: 100%;
    }

    .calendar-container {
      position: relative;
      padding: 0 16px 16px;
    }

    .calendar-table {
      -moz-user-select: none;
      -webkit-user-select: none;
      user-select: none;

      border-collapse: collapse;
      border-spacing: 0;
      text-align: center;
    }

    .calendar-label {
      display: flex;
      align-items: center;
      justify-content: center;

      height: 56px;
      font-weight: 500;
      text-align: center;
    }

    .calendar-weekday,
    .full-calendar__day {
      position: relative;
      width: calc(100% / 7);
      height: 0;
      padding: calc(100% / 7 / 2) 0;
      outline: none;
      text-align: center;
    }
    .full-calendar__day:not(.day--disabled):focus {
      outline: #000 dotted 1px;
      outline: -webkit-focus-ring-color auto 1px;
    }
    :host([showweeknumber]) .calendar-weekday,
    :host([showweeknumber]) .full-calendar__day {
      width: calc(100% / 8);
      padding-top: calc(100% / 8);
      padding-bottom: 0;
    }
    :host([showweeknumber]) th.weekday-label {
      padding: 0;
    }

    /**
      * NOTE: Interesting fact! That is ::after will trigger paint when dragging. This will trigger
      * layout and paint on **ONLY** affected nodes. This is much cheaper as compared to rendering
      * all :::after of all calendar day elements. When dragging the entire calendar container,
      * because of all layout and paint trigger on each and every ::after, this becomes a expensive
      * task for the browsers especially on low-end devices. Even though animating opacity is much
      * cheaper, the technique does not work here. Adding 'will-change' will further reduce overall
      * painting at the expense of memory consumption as many cells in a table has been promoted
      * a its own layer.
      */
    .full-calendar__day:not(.day--empty):not(.day--disabled):not(.weekday-label) {
      transform: translateZ(0);
      will-change: transform;
    }
    .full-calendar__day:not(.day--empty):not(.day--disabled):not(.weekday-label).day--focused::after,
    .full-calendar__day:not(.day--empty):not(.day--disabled):not(.day--focused):not(.weekday-label):hover::after {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: var(--app-datepicker-accent-color, #1a73e8);
      border-radius: 50%;
      opacity: 0;
      pointer-events: none;
    }
    .full-calendar__day:not(.day--empty):not(.day--disabled):not(.weekday-label) {
      cursor: pointer;
      pointer-events: auto;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }
    .full-calendar__day.day--focused:not(.day--empty):not(.day--disabled):not(.weekday-label)::after,
    .full-calendar__day.day--today.day--focused:not(.day--empty):not(.day--disabled):not(.weekday-label)::after {
      opacity: 1;
    }

    .calendar-weekday > .weekday,
    .full-calendar__day > .calendar-day {
      display: flex;
      align-items: center;
      justify-content: center;

      position: absolute;
      top: 5%;
      left: 5%;
      width: 90%;
      height: 90%;
      color: currentColor;
      font-size: 14px;
      pointer-events: none;
      z-index: 1;
    }
    .full-calendar__day.day--today {
      color: var(--app-datepicker-accent-color, #1a73e8);
    }
    .full-calendar__day.day--focused,
    .full-calendar__day.day--today.day--focused {
      color: var(--app-datepicker-focused-day-color, #fff);
    }
    .full-calendar__day.day--empty,
    .full-calendar__day.weekday-label,
    .full-calendar__day.day--disabled > .calendar-day {
      pointer-events: none;
    }
    .full-calendar__day.day--disabled:not(.day--today) {
      color: var(--app-datepicker-disabled-day-color, rgba(0, 0, 0, .55));
    }

    .year-list-view__list-item {
      position: relative;
      width: 100%;
      padding: 12px 16px;
      text-align: center;
      /** NOTE: Reduce paint when hovering and scrolling, but this increases memory usage */
      /* will-change: opacity; */
      /* outline: none; */
    }
    .year-list-view__list-item::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: var(--app-datepicker-focused-year-bg-color, #000);
      opacity: 0;
      pointer-events: none;
    }
    .year-list-view__list-item:focus::after {
      opacity: .05;
    }
    .year-list-view__list-item.year--selected {
      color: var(--app-datepicker-accent-color, #1a73e8);
      font-size: 24px;
      font-weight: 500;
    }

    @media (any-hover: hover) {
      .btn__month-selector:hover,
      .year-list-view__list-item:hover {
        cursor: pointer;
      }
      .full-calendar__day:not(.day--empty):not(.day--disabled):not(.day--focused):not(.weekday-label):hover::after {
        opacity: .15;
      }
      .year-list-view__list-item:hover::after {
        opacity: .05;
      }
    }

    @supports (background: -webkit-canvas(squares)) {
      .calendar-container {
        padding: 56px 16px 16px;
      }

      table > caption {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translate3d(-50%, 0, 0);
        will-change: transform;
      }
    }
    `],s([l({type:Number,reflect:!0})],le.prototype,"firstDayOfWeek",void 0),s([l({type:Boolean,reflect:!0})],le.prototype,"showWeekNumber",void 0),s([l({type:String,reflect:!0})],le.prototype,"weekNumberType",void 0),s([l({type:Boolean,reflect:!0})],le.prototype,"landscape",void 0),s([l({type:String,reflect:!0})],le.prototype,"startView",null),s([l({type:String,reflect:!0})],le.prototype,"min",null),s([l({type:String,reflect:!0})],le.prototype,"max",null),s([l({type:String})],le.prototype,"value",null),s([l({type:String})],le.prototype,"locale",void 0),s([l({type:String})],le.prototype,"disabledDays",void 0),s([l({type:String})],le.prototype,"disabledDates",void 0),s([l({type:String})],le.prototype,"weekLabel",void 0),s([l({type:Boolean})],le.prototype,"inline",void 0),s([l({type:Number})],le.prototype,"dragRatio",void 0),s([l({type:Date,attribute:!1})],le.prototype,"_selectedDate",void 0),s([l({type:Date,attribute:!1})],le.prototype,"_focusedDate",void 0),s([l({type:String,attribute:!1})],le.prototype,"_startView",void 0),s([d(".year-list-view__full-list")],le.prototype,"_yearViewFullList",void 0),s([d(".btn__year-selector")],le.prototype,"_buttonSelectorYear",void 0),s([d(".year-list-view__list-item")],le.prototype,"_yearViewListItem",void 0),s([c({passive:!0})],le.prototype,"_updateYear",null),s([c({passive:!0})],le.prototype,"_updateFocusedDateWithKeyboard",null),de="app-datepicker",ce=le,window.customElements&&!window.customElements.get(de)&&window.customElements.define(de,ce);let he=p([b("ha-dialog-date-picker")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[l()],key:"hass",value:void 0},{kind:"field",decorators:[l()],key:"value",value:void 0},{kind:"field",decorators:[l({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[l()],key:"label",value:void 0},{kind:"field",decorators:[y()],key:"_params",value:void 0},{kind:"field",decorators:[y()],key:"_value",value:void 0},{kind:"method",key:"showDialog",value:async function(e){await m(),this._params=e,this._value=e.value}},{kind:"method",key:"closeDialog",value:function(){this._params=void 0,f(this,"dialog-closed",{dialog:this.localName})}},{kind:"method",key:"render",value:function(){return this._params?r`<ha-dialog open @closed=${this.closeDialog}>
      <app-datepicker
        .value=${this._value}
        .min=${this._params.min}
        .max=${this._params.max}
        .locale=${this._params.locale}
        @datepicker-value-updated=${this._valueChanged}
        .firstDayOfWeek=${this._params.firstWeekday}
      ></app-datepicker>
      <mwc-button slot="secondaryAction" @click=${this._setToday}>
        ${this.hass.localize("ui.dialogs.date-picker.today")}
      </mwc-button>
      <mwc-button slot="primaryAction" dialogaction="cancel" class="cancel-btn">
        ${this.hass.localize("ui.common.cancel")}
      </mwc-button>
      <mwc-button slot="primaryAction" @click=${this._setValue}>
        ${this.hass.localize("ui.common.ok")}
      </mwc-button>
    </ha-dialog>`:r``}},{kind:"method",key:"_valueChanged",value:function(e){this._value=e.detail.value}},{kind:"method",key:"_setToday",value:function(){this._value=(new Date).toLocaleDateString("en-CA")}},{kind:"method",key:"_setValue",value:function(){var e;null===(e=this._params)||void 0===e||e.onChange(this._value),this.closeDialog()}},{kind:"field",static:!0,key:"styles",value:()=>[_,o`
      ha-dialog {
        --dialog-content-padding: 0;
        --justify-action-buttons: space-between;
      }
      app-datepicker {
        --app-datepicker-accent-color: var(--primary-color);
        --app-datepicker-bg-color: transparent;
        --app-datepicker-color: var(--primary-text-color);
        --app-datepicker-disabled-day-color: var(--disabled-text-color);
        --app-datepicker-focused-day-color: var(--text-primary-color);
        --app-datepicker-focused-year-bg-color: var(--primary-color);
        --app-datepicker-selector-color: var(--secondary-text-color);
        --app-datepicker-separator-color: var(--divider-color);
        --app-datepicker-weekday-color: var(--secondary-text-color);
      }
      app-datepicker::part(calendar-day):focus {
        outline: none;
      }
      @media all and (min-width: 450px) {
        ha-dialog {
          --mdc-dialog-min-width: 300px;
        }
      }
      @media all and (max-width: 450px), all and (max-height: 500px) {
        app-datepicker {
          width: 100%;
        }
      }
    `]}]}}),h);export{he as HaDialogDatePicker};
