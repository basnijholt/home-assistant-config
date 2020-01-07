var e = {},
    t = /d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g,
    n = "[^\\s]+",
    o = /\[([^]*?)\]/gm,
    r = function () {};function i(e, t) {
  for (var n = [], o = 0, r = e.length; o < r; o++) n.push(e[o].substr(0, t));return n;
}function a(e) {
  return function (t, n, o) {
    var r = o[e].indexOf(n.charAt(0).toUpperCase() + n.substr(1).toLowerCase());~r && (t.month = r);
  };
}function s(e, t) {
  for (e = String(e), t = t || 2; e.length < t;) e = "0" + e;return e;
}var u = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    c = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    l = i(c, 3),
    d = i(u, 3);e.i18n = { dayNamesShort: d, dayNames: u, monthNamesShort: l, monthNames: c, amPm: ["am", "pm"], DoFn: function (e) {
    return e + ["th", "st", "nd", "rd"][e % 10 > 3 ? 0 : (e - e % 10 != 10) * e % 10];
  } };var m = { D: function (e) {
    return e.getDate();
  }, DD: function (e) {
    return s(e.getDate());
  }, Do: function (e, t) {
    return t.DoFn(e.getDate());
  }, d: function (e) {
    return e.getDay();
  }, dd: function (e) {
    return s(e.getDay());
  }, ddd: function (e, t) {
    return t.dayNamesShort[e.getDay()];
  }, dddd: function (e, t) {
    return t.dayNames[e.getDay()];
  }, M: function (e) {
    return e.getMonth() + 1;
  }, MM: function (e) {
    return s(e.getMonth() + 1);
  }, MMM: function (e, t) {
    return t.monthNamesShort[e.getMonth()];
  }, MMMM: function (e, t) {
    return t.monthNames[e.getMonth()];
  }, YY: function (e) {
    return s(String(e.getFullYear()), 4).substr(2);
  }, YYYY: function (e) {
    return s(e.getFullYear(), 4);
  }, h: function (e) {
    return e.getHours() % 12 || 12;
  }, hh: function (e) {
    return s(e.getHours() % 12 || 12);
  }, H: function (e) {
    return e.getHours();
  }, HH: function (e) {
    return s(e.getHours());
  }, m: function (e) {
    return e.getMinutes();
  }, mm: function (e) {
    return s(e.getMinutes());
  }, s: function (e) {
    return e.getSeconds();
  }, ss: function (e) {
    return s(e.getSeconds());
  }, S: function (e) {
    return Math.round(e.getMilliseconds() / 100);
  }, SS: function (e) {
    return s(Math.round(e.getMilliseconds() / 10), 2);
  }, SSS: function (e) {
    return s(e.getMilliseconds(), 3);
  }, a: function (e, t) {
    return e.getHours() < 12 ? t.amPm[0] : t.amPm[1];
  }, A: function (e, t) {
    return e.getHours() < 12 ? t.amPm[0].toUpperCase() : t.amPm[1].toUpperCase();
  }, ZZ: function (e) {
    var t = e.getTimezoneOffset();return (t > 0 ? "-" : "+") + s(100 * Math.floor(Math.abs(t) / 60) + Math.abs(t) % 60, 4);
  } },
    h = { D: ["\\d\\d?", function (e, t) {
    e.day = t;
  }], Do: ["\\d\\d?" + n, function (e, t) {
    e.day = parseInt(t, 10);
  }], M: ["\\d\\d?", function (e, t) {
    e.month = t - 1;
  }], YY: ["\\d\\d?", function (e, t) {
    var n = +("" + new Date().getFullYear()).substr(0, 2);e.year = "" + (t > 68 ? n - 1 : n) + t;
  }], h: ["\\d\\d?", function (e, t) {
    e.hour = t;
  }], m: ["\\d\\d?", function (e, t) {
    e.minute = t;
  }], s: ["\\d\\d?", function (e, t) {
    e.second = t;
  }], YYYY: ["\\d{4}", function (e, t) {
    e.year = t;
  }], S: ["\\d", function (e, t) {
    e.millisecond = 100 * t;
  }], SS: ["\\d{2}", function (e, t) {
    e.millisecond = 10 * t;
  }], SSS: ["\\d{3}", function (e, t) {
    e.millisecond = t;
  }], d: ["\\d\\d?", r], ddd: [n, r], MMM: [n, a("monthNamesShort")], MMMM: [n, a("monthNames")], a: [n, function (e, t, n) {
    var o = t.toLowerCase();o === n.amPm[0] ? e.isPm = !1 : o === n.amPm[1] && (e.isPm = !0);
  }], ZZ: ["[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z", function (e, t) {
    var n,
        o = (t + "").match(/([+-]|\d\d)/gi);o && (n = 60 * o[1] + parseInt(o[2], 10), e.timezoneOffset = "+" === o[0] ? n : -n);
  }] };h.dd = h.d, h.dddd = h.ddd, h.DD = h.D, h.mm = h.m, h.hh = h.H = h.HH = h.h, h.MM = h.M, h.ss = h.s, h.A = h.a, e.masks = { default: "ddd MMM DD YYYY HH:mm:ss", shortDate: "M/D/YY", mediumDate: "MMM D, YYYY", longDate: "MMMM D, YYYY", fullDate: "dddd, MMMM D, YYYY", shortTime: "HH:mm", mediumTime: "HH:mm:ss", longTime: "HH:mm:ss.SSS" }, e.format = function (n, r, i) {
  var a = i || e.i18n;if ("number" == typeof n && (n = new Date(n)), "[object Date]" !== Object.prototype.toString.call(n) || isNaN(n.getTime())) throw new Error("Invalid Date in fecha.format");r = e.masks[r] || r || e.masks.default;var s = [];return (r = (r = r.replace(o, function (e, t) {
    return s.push(t), "@@@";
  })).replace(t, function (e) {
    return e in m ? m[e](n, a) : e.slice(1, e.length - 1);
  })).replace(/@@@/g, function () {
    return s.shift();
  });
}, e.parse = function (n, r, i) {
  var a = i || e.i18n;if ("string" != typeof r) throw new Error("Invalid format in fecha.parse");if (r = e.masks[r] || r, n.length > 1e3) return null;var s = {},
      u = [],
      c = [];r = r.replace(o, function (e, t) {
    return c.push(t), "@@@";
  });var l,
      d = (l = r, l.replace(/[|\\{()[^$+*?.-]/g, "\\$&")).replace(t, function (e) {
    if (h[e]) {
      var t = h[e];return u.push(t[1]), "(" + t[0] + ")";
    }return e;
  });d = d.replace(/@@@/g, function () {
    return c.shift();
  });var m = n.match(new RegExp(d, "i"));if (!m) return null;for (var p = 1; p < m.length; p++) u[p - 1](s, m[p], a);var f,
      g = new Date();return !0 === s.isPm && null != s.hour && 12 != +s.hour ? s.hour = +s.hour + 12 : !1 === s.isPm && 12 == +s.hour && (s.hour = 0), null != s.timezoneOffset ? (s.minute = +(s.minute || 0) - +s.timezoneOffset, f = new Date(Date.UTC(s.year || g.getFullYear(), s.month || 0, s.day || 1, s.hour || 0, s.minute || 0, s.second || 0, s.millisecond || 0))) : f = new Date(s.year || g.getFullYear(), s.month || 0, s.day || 1, s.hour || 0, s.minute || 0, s.second || 0, s.millisecond || 0), f;
};(function () {
  try {
    new Date().toLocaleDateString("i");
  } catch (e) {
    return "RangeError" === e.name;
  }
})(), function () {
  try {
    new Date().toLocaleString("i");
  } catch (e) {
    return "RangeError" === e.name;
  }
}(), function () {
  try {
    new Date().toLocaleTimeString("i");
  } catch (e) {
    return "RangeError" === e.name;
  }
}();String(Math.random()).slice(2);try {
  const e = { get capture() {
      return !1;
    } };window.addEventListener("test", e, e), window.removeEventListener("test", e, e);
} catch (e) {}(window.litHtmlVersions || (window.litHtmlVersions = [])).push("1.0.0");var p = "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0,
    f = function (e) {
  function t() {
    e.call(this), this.holdTime = 500, this.ripple = document.createElement("paper-ripple"), this.timer = void 0, this.held = !1, this.cooldownStart = !1, this.cooldownEnd = !1, this.nbClicks = 0;
  }return e && (t.__proto__ = e), (t.prototype = Object.create(e && e.prototype)).constructor = t, t.prototype.connectedCallback = function () {
    var e = this;Object.assign(this.style, { borderRadius: "50%", position: "absolute", width: p ? "100px" : "50px", height: p ? "100px" : "50px", transform: "translate(-50%, -50%)", pointerEvents: "none" }), this.appendChild(this.ripple), this.ripple.style.color = "#03a9f4", this.ripple.style.color = "var(--primary-color)", ["touchcancel", "mouseout", "mouseup", "touchmove", "mousewheel", "wheel", "scroll"].forEach(function (t) {
      document.addEventListener(t, function () {
        clearTimeout(e.timer), e.stopAnimation(), e.timer = void 0;
      }, { passive: !0 });
    });
  }, t.prototype.bind = function (e) {
    var t = this;if (!e.longPress) {
      e.longPress = !0, e.addEventListener("contextmenu", function (e) {
        var t = e || window.event;return t.preventDefault && t.preventDefault(), t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0, t.returnValue = !1, !1;
      });var n = function (n) {
        var o, r;t.cooldownStart || (t.held = !1, n.touches ? (o = n.touches[0].pageX, r = n.touches[0].pageY) : (o = n.pageX, r = n.pageY), t.timer = window.setTimeout(function () {
          t.startAnimation(o, r), t.held = !0, e.repeat && !e.isRepeating && (e.isRepeating = !0, t.repeatTimeout = setInterval(function () {
            e.dispatchEvent(new Event("ha-hold"));
          }, e.repeat));
        }, t.holdTime), t.cooldownStart = !0, window.setTimeout(function () {
          return t.cooldownStart = !1;
        }, 100));
      },
          o = function (n) {
        t.cooldownEnd || ["touchend", "touchcancel"].includes(n.type) && void 0 === t.timer ? e.isRepeating && t.repeatTimeout && (clearInterval(t.repeatTimeout), e.isRepeating = !1) : (clearTimeout(t.timer), e.isRepeating && t.repeatTimeout && clearInterval(t.repeatTimeout), e.isRepeating = !1, t.stopAnimation(), t.timer = void 0, t.held ? e.repeat || e.dispatchEvent(new Event("ha-hold")) : e.hasDblClick ? 0 === t.nbClicks ? (t.nbClicks += 1, t.dblClickTimeout = window.setTimeout(function () {
          1 === t.nbClicks && (t.nbClicks = 0, e.dispatchEvent(new Event("ha-click")));
        }, 250)) : (t.nbClicks = 0, clearTimeout(t.dblClickTimeout), e.dispatchEvent(new Event("ha-dblclick"))) : e.dispatchEvent(new Event("ha-click")), t.cooldownEnd = !0, window.setTimeout(function () {
          return t.cooldownEnd = !1;
        }, 100));
      };e.addEventListener("touchstart", n, { passive: !0 }), e.addEventListener("touchend", o), e.addEventListener("touchcancel", o), e.addEventListener("mousedown", n, { passive: !0 }), e.addEventListener("click", o);
    }
  }, t.prototype.startAnimation = function (e, t) {
    Object.assign(this.style, { left: e + "px", top: t + "px", display: null }), this.ripple.holdDown = !0, this.ripple.simulatedRipple();
  }, t.prototype.stopAnimation = function () {
    this.ripple.holdDown = !1, this.style.display = "none";
  }, t;
}(HTMLElement);customElements.get("long-press-custom-card-helpers") || customElements.define("long-press-custom-card-helpers", f);class g extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" });
  }set hass(e) {
    this._card && (this._card.hass = e);
  }setConfig(e) {
    if (!e.template) throw new Error("Missing template object in your config");const t = function () {
      var e = document.querySelector("home-assistant");if (e = (e = (e = (e = (e = (e = (e = (e = e && e.shadowRoot) && e.querySelector("home-assistant-main")) && e.shadowRoot) && e.querySelector("app-drawer-layout partial-panel-resolver")) && e.shadowRoot || e) && e.querySelector("ha-panel-lovelace")) && e.shadowRoot) && e.querySelector("hui-root")) {
        var t = e.lovelace;return t.current_view = e.___curView, t;
      }return null;
    }() || function () {
      let e = document.querySelector("hc-main");if (e = e && e.shadowRoot, e = e && e.querySelector("hc-lovelace"), e = e && e.shadowRoot, e = e && e.querySelector("hui-view"), e) {
        const t = e.lovelace;return t.current_view = e.___curView, t;
      }return null;
    }();if (!t.config && !t.config.decluttering_templates) throw new Error("The object decluttering_templates doesn't exist in your main lovelace config.");const n = t.config.decluttering_templates[e.template];if (!n || !n.card) throw new Error(`The template "${e.template}" doesn't exist in decluttering_templates`);const o = this.shadowRoot;for (; o && o.hasChildNodes();) o.removeChild(o.lastChild);const r = document.createElement("div");r.id = "root", o.appendChild(r);const i = (e, t) => {
      const n = document.createElement(e);try {
        n.setConfig(t);
      } catch (n) {
        return console.error(e, n), a(n.message, t);
      }return n;
    },
          a = (e, t) => i("hui-error-card", { type: "error", error: e, config: t });let s = n.card.type;if (s = s.startsWith("divider") ? "hui-divider-row" : s.startsWith("custom:") ? s.substr("custom:".length) : `hui-${s}-card`, customElements.get(s)) {
      const t = i(s, ((e, t) => {
        if (!e && !t.default) return t.card;let n = [];e && (n = e.slice(0)), t.default && (n = n.concat(t.default));let o = JSON.stringify(t.card);return n.forEach(e => {
          const t = Object.keys(e)[0],
                n = Object.values(e)[0],
                r = new RegExp(`\\[\\[${t}\\]\\]`, "gm");if ("number" == typeof n || "boolean" == typeof n) {
            const e = new RegExp(`"\\[\\[${t}\\]\\]"`, "gm");o = o.replace(e, n);
          }if ("object" == typeof n) {
            const e = new RegExp(`"\\[\\[${t}\\]\\]"`, "gm"),
                  r = JSON.stringify(n);o = o.replace(e, r);
          } else o = o.replace(r, n);
        }), JSON.parse(o);
      })(e.variables, n));r.appendChild(t), this._card = t;
    } else {
      const e = a(`Custom element doesn't exist: ${s}.`, n);e.style.display = "None";const t = setTimeout(() => {
        e.style.display = "";
      }, 2e3);customElements.whenDefined(s).then(() => {
        clearTimeout(t), ((e, t, n = null) => {
          (e = new Event(e, { bubbles: !0, cancelable: !1, composed: !0 })).detail = t || {}, n ? n.dispatchEvent(e) : document.querySelector("home-assistant").shadowRoot.querySelector("home-assistant-main").shadowRoot.querySelector("app-drawer-layout partial-panel-resolver").shadowRoot.querySelector("ha-panel-lovelace").shadowRoot.querySelector("hui-root").shadowRoot.querySelector("ha-app-layout #view").firstElementChild.dispatchEvent(e);
        })("ll-rebuild", {}, e);
      }), r.appendChild(e), this._card = e;
    }
  }getCardSize() {
    return "function" == typeof this._card.getCardSize ? this._card.getCardSize() : 1;
  }
}customElements.define("decluttering-card", g);
