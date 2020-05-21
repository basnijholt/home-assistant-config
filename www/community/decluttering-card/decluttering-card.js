/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
function e(e, t, r, n) {
  var s,
      i = arguments.length,
      o = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, r, n);else for (var a = e.length - 1; a >= 0; a--) (s = e[a]) && (o = (i < 3 ? s(o) : i > 3 ? s(t, r, o) : s(t, r)) || o);return i > 3 && o && Object.defineProperty(t, r, o), o;
  /**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */
}const t = "undefined" != typeof window && null != window.customElements && void 0 !== window.customElements.polyfillWrapFlushCallback,
      r = (e, t, r = null) => {
  for (; t !== r;) {
    const r = t.nextSibling;e.removeChild(t), t = r;
  }
},
      n = `{{lit-${String(Math.random()).slice(2)}}}`,
      s = `\x3c!--${n}--\x3e`,
      i = new RegExp(`${n}|${s}`);class o {
  constructor(e, t) {
    this.parts = [], this.element = t;const r = [],
          s = [],
          o = document.createTreeWalker(t.content, 133, null, !1);let c = 0,
        u = -1,
        h = 0;const { strings: p, values: { length: f } } = e;for (; h < f;) {
      const e = o.nextNode();if (null !== e) {
        if (u++, 1 === e.nodeType) {
          if (e.hasAttributes()) {
            const t = e.attributes,
                  { length: r } = t;let n = 0;for (let e = 0; e < r; e++) a(t[e].name, "$lit$") && n++;for (; n-- > 0;) {
              const t = p[h],
                    r = d.exec(t)[2],
                    n = r.toLowerCase() + "$lit$",
                    s = e.getAttribute(n);e.removeAttribute(n);const o = s.split(i);this.parts.push({ type: "attribute", index: u, name: r, strings: o }), h += o.length - 1;
            }
          }"TEMPLATE" === e.tagName && (s.push(e), o.currentNode = e.content);
        } else if (3 === e.nodeType) {
          const t = e.data;if (t.indexOf(n) >= 0) {
            const n = e.parentNode,
                  s = t.split(i),
                  o = s.length - 1;for (let t = 0; t < o; t++) {
              let r,
                  i = s[t];if ("" === i) r = l();else {
                const e = d.exec(i);null !== e && a(e[2], "$lit$") && (i = i.slice(0, e.index) + e[1] + e[2].slice(0, -"$lit$".length) + e[3]), r = document.createTextNode(i);
              }n.insertBefore(r, e), this.parts.push({ type: "node", index: ++u });
            }"" === s[o] ? (n.insertBefore(l(), e), r.push(e)) : e.data = s[o], h += o;
          }
        } else if (8 === e.nodeType) if (e.data === n) {
          const t = e.parentNode;null !== e.previousSibling && u !== c || (u++, t.insertBefore(l(), e)), c = u, this.parts.push({ type: "node", index: u }), null === e.nextSibling ? e.data = "" : (r.push(e), u--), h++;
        } else {
          let t = -1;for (; -1 !== (t = e.data.indexOf(n, t + 1));) this.parts.push({ type: "node", index: -1 }), h++;
        }
      } else o.currentNode = s.pop();
    }for (const e of r) e.parentNode.removeChild(e);
  }
}const a = (e, t) => {
  const r = e.length - t.length;return r >= 0 && e.slice(r) === t;
},
      c = e => -1 !== e.index,
      l = () => document.createComment(""),
      d = /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function u(e, t) {
  const { element: { content: r }, parts: n } = e,
        s = document.createTreeWalker(r, 133, null, !1);let i = p(n),
      o = n[i],
      a = -1,
      c = 0;const l = [];let d = null;for (; s.nextNode();) {
    a++;const e = s.currentNode;for (e.previousSibling === d && (d = null), t.has(e) && (l.push(e), null === d && (d = e)), null !== d && c++; void 0 !== o && o.index === a;) o.index = null !== d ? -1 : o.index - c, i = p(n, i), o = n[i];
  }l.forEach(e => e.parentNode.removeChild(e));
}const h = e => {
  let t = 11 === e.nodeType ? 0 : 1;const r = document.createTreeWalker(e, 133, null, !1);for (; r.nextNode();) t++;return t;
},
      p = (e, t = -1) => {
  for (let r = t + 1; r < e.length; r++) {
    const t = e[r];if (c(t)) return r;
  }return -1;
};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const f = new WeakMap(),
      m = e => "function" == typeof e && f.has(e),
      g = {},
      y = {};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class _ {
  constructor(e, t, r) {
    this.__parts = [], this.template = e, this.processor = t, this.options = r;
  }update(e) {
    let t = 0;for (const r of this.__parts) void 0 !== r && r.setValue(e[t]), t++;for (const e of this.__parts) void 0 !== e && e.commit();
  }_clone() {
    const e = t ? this.template.element.content.cloneNode(!0) : document.importNode(this.template.element.content, !0),
          r = [],
          n = this.template.parts,
          s = document.createTreeWalker(e, 133, null, !1);let i,
        o = 0,
        a = 0,
        l = s.nextNode();for (; o < n.length;) if (i = n[o], c(i)) {
      for (; a < i.index;) a++, "TEMPLATE" === l.nodeName && (r.push(l), s.currentNode = l.content), null === (l = s.nextNode()) && (s.currentNode = r.pop(), l = s.nextNode());if ("node" === i.type) {
        const e = this.processor.handleTextExpression(this.options);e.insertAfterNode(l.previousSibling), this.__parts.push(e);
      } else this.__parts.push(...this.processor.handleAttributeExpressions(l, i.name, i.strings, this.options));o++;
    } else this.__parts.push(void 0), o++;return t && (document.adoptNode(e), customElements.upgrade(e)), e;
  }
}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const v = ` ${n} `;class w {
  constructor(e, t, r, n) {
    this.strings = e, this.values = t, this.type = r, this.processor = n;
  }getHTML() {
    const e = this.strings.length - 1;let t = "",
        r = !1;for (let i = 0; i < e; i++) {
      const e = this.strings[i],
            o = e.lastIndexOf("\x3c!--");r = (o > -1 || r) && -1 === e.indexOf("--\x3e", o + 1);const a = d.exec(e);t += null === a ? e + (r ? v : s) : e.substr(0, a.index) + a[1] + a[2] + "$lit$" + a[3] + n;
    }return t += this.strings[e], t;
  }getTemplateElement() {
    const e = document.createElement("template");return e.innerHTML = this.getHTML(), e;
  }
}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const b = e => null === e || !("object" == typeof e || "function" == typeof e),
      S = e => Array.isArray(e) || !(!e || !e[Symbol.iterator]);class x {
  constructor(e, t, r) {
    this.dirty = !0, this.element = e, this.name = t, this.strings = r, this.parts = [];for (let e = 0; e < r.length - 1; e++) this.parts[e] = this._createPart();
  }_createPart() {
    return new P(this);
  }_getValue() {
    const e = this.strings,
          t = e.length - 1;let r = "";for (let n = 0; n < t; n++) {
      r += e[n];const t = this.parts[n];if (void 0 !== t) {
        const e = t.value;if (b(e) || !S(e)) r += "string" == typeof e ? e : String(e);else for (const t of e) r += "string" == typeof t ? t : String(t);
      }
    }return r += e[t], r;
  }commit() {
    this.dirty && (this.dirty = !1, this.element.setAttribute(this.name, this._getValue()));
  }
}class P {
  constructor(e) {
    this.value = void 0, this.committer = e;
  }setValue(e) {
    e === g || b(e) && e === this.value || (this.value = e, m(e) || (this.committer.dirty = !0));
  }commit() {
    for (; m(this.value);) {
      const e = this.value;this.value = g, e(this);
    }this.value !== g && this.committer.commit();
  }
}class N {
  constructor(e) {
    this.value = void 0, this.__pendingValue = void 0, this.options = e;
  }appendInto(e) {
    this.startNode = e.appendChild(l()), this.endNode = e.appendChild(l());
  }insertAfterNode(e) {
    this.startNode = e, this.endNode = e.nextSibling;
  }appendIntoPart(e) {
    e.__insert(this.startNode = l()), e.__insert(this.endNode = l());
  }insertAfterPart(e) {
    e.__insert(this.startNode = l()), this.endNode = e.endNode, e.endNode = this.startNode;
  }setValue(e) {
    this.__pendingValue = e;
  }commit() {
    if (null === this.startNode.parentNode) return;for (; m(this.__pendingValue);) {
      const e = this.__pendingValue;this.__pendingValue = g, e(this);
    }const e = this.__pendingValue;e !== g && (b(e) ? e !== this.value && this.__commitText(e) : e instanceof w ? this.__commitTemplateResult(e) : e instanceof Node ? this.__commitNode(e) : S(e) ? this.__commitIterable(e) : e === y ? (this.value = y, this.clear()) : this.__commitText(e));
  }__insert(e) {
    this.endNode.parentNode.insertBefore(e, this.endNode);
  }__commitNode(e) {
    this.value !== e && (this.clear(), this.__insert(e), this.value = e);
  }__commitText(e) {
    const t = this.startNode.nextSibling,
          r = "string" == typeof (e = null == e ? "" : e) ? e : String(e);t === this.endNode.previousSibling && 3 === t.nodeType ? t.data = r : this.__commitNode(document.createTextNode(r)), this.value = e;
  }__commitTemplateResult(e) {
    const t = this.options.templateFactory(e);if (this.value instanceof _ && this.value.template === t) this.value.update(e.values);else {
      const r = new _(t, e.processor, this.options),
            n = r._clone();r.update(e.values), this.__commitNode(n), this.value = r;
    }
  }__commitIterable(e) {
    Array.isArray(this.value) || (this.value = [], this.clear());const t = this.value;let r,
        n = 0;for (const s of e) r = t[n], void 0 === r && (r = new N(this.options), t.push(r), 0 === n ? r.appendIntoPart(this) : r.insertAfterPart(t[n - 1])), r.setValue(s), r.commit(), n++;n < t.length && (t.length = n, this.clear(r && r.endNode));
  }clear(e = this.startNode) {
    r(this.startNode.parentNode, e.nextSibling, this.endNode);
  }
}class T {
  constructor(e, t, r) {
    if (this.value = void 0, this.__pendingValue = void 0, 2 !== r.length || "" !== r[0] || "" !== r[1]) throw new Error("Boolean attributes can only contain a single expression");this.element = e, this.name = t, this.strings = r;
  }setValue(e) {
    this.__pendingValue = e;
  }commit() {
    for (; m(this.__pendingValue);) {
      const e = this.__pendingValue;this.__pendingValue = g, e(this);
    }if (this.__pendingValue === g) return;const e = !!this.__pendingValue;this.value !== e && (e ? this.element.setAttribute(this.name, "") : this.element.removeAttribute(this.name), this.value = e), this.__pendingValue = g;
  }
}class C extends x {
  constructor(e, t, r) {
    super(e, t, r), this.single = 2 === r.length && "" === r[0] && "" === r[1];
  }_createPart() {
    return new E(this);
  }_getValue() {
    return this.single ? this.parts[0].value : super._getValue();
  }commit() {
    this.dirty && (this.dirty = !1, this.element[this.name] = this._getValue());
  }
}class E extends P {}let $ = !1;(() => {
  try {
    const e = { get capture() {
        return $ = !0, !1;
      } };window.addEventListener("test", e, e), window.removeEventListener("test", e, e);
  } catch (e) {}
})();class M {
  constructor(e, t, r) {
    this.value = void 0, this.__pendingValue = void 0, this.element = e, this.eventName = t, this.eventContext = r, this.__boundHandleEvent = e => this.handleEvent(e);
  }setValue(e) {
    this.__pendingValue = e;
  }commit() {
    for (; m(this.__pendingValue);) {
      const e = this.__pendingValue;this.__pendingValue = g, e(this);
    }if (this.__pendingValue === g) return;const e = this.__pendingValue,
          t = this.value,
          r = null == e || null != t && (e.capture !== t.capture || e.once !== t.once || e.passive !== t.passive),
          n = null != e && (null == t || r);r && this.element.removeEventListener(this.eventName, this.__boundHandleEvent, this.__options), n && (this.__options = O(e), this.element.addEventListener(this.eventName, this.__boundHandleEvent, this.__options)), this.value = e, this.__pendingValue = g;
  }handleEvent(e) {
    "function" == typeof this.value ? this.value.call(this.eventContext || this.element, e) : this.value.handleEvent(e);
  }
}const O = e => e && ($ ? { capture: e.capture, passive: e.passive, once: e.once } : e.capture)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;function R(e) {
  let t = A.get(e.type);void 0 === t && (t = { stringsArray: new WeakMap(), keyString: new Map() }, A.set(e.type, t));let r = t.stringsArray.get(e.strings);if (void 0 !== r) return r;const s = e.strings.join(n);return r = t.keyString.get(s), void 0 === r && (r = new o(e, e.getTemplateElement()), t.keyString.set(s, r)), t.stringsArray.set(e.strings, r), r;
}const A = new Map(),
      k = new WeakMap();
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const D = new
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class {
  handleAttributeExpressions(e, t, r, n) {
    const s = t[0];if ("." === s) {
      return new C(e, t.slice(1), r).parts;
    }return "@" === s ? [new M(e, t.slice(1), n.eventContext)] : "?" === s ? [new T(e, t.slice(1), r)] : new x(e, t, r).parts;
  }handleTextExpression(e) {
    return new N(e);
  }
}();
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */"undefined" != typeof window && (window.litHtmlVersions || (window.litHtmlVersions = [])).push("1.2.0");const V = (e, ...t) => new w(e, t, "html", D)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */,
      H = (e, t) => `${e}--${t}`;let Y = !0;void 0 === window.ShadyCSS ? Y = !1 : void 0 === window.ShadyCSS.prepareTemplateDom && (console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."), Y = !1);const j = e => t => {
  const r = H(t.type, e);let s = A.get(r);void 0 === s && (s = { stringsArray: new WeakMap(), keyString: new Map() }, A.set(r, s));let i = s.stringsArray.get(t.strings);if (void 0 !== i) return i;const a = t.strings.join(n);if (i = s.keyString.get(a), void 0 === i) {
    const r = t.getTemplateElement();Y && window.ShadyCSS.prepareTemplateDom(r, e), i = new o(t, r), s.keyString.set(a, i);
  }return s.stringsArray.set(t.strings, i), i;
},
      z = ["html", "svg"],
      U = new Set(),
      F = (e, t, r) => {
  U.add(e);const n = r ? r.element : document.createElement("template"),
        s = t.querySelectorAll("style"),
        { length: i } = s;if (0 === i) return void window.ShadyCSS.prepareTemplateStyles(n, e);const o = document.createElement("style");for (let e = 0; e < i; e++) {
    const t = s[e];t.parentNode.removeChild(t), o.textContent += t.textContent;
  }(e => {
    z.forEach(t => {
      const r = A.get(H(t, e));void 0 !== r && r.keyString.forEach(e => {
        const { element: { content: t } } = e,
              r = new Set();Array.from(t.querySelectorAll("style")).forEach(e => {
          r.add(e);
        }), u(e, r);
      });
    });
  })(e);const a = n.content;r ? function (e, t, r = null) {
    const { element: { content: n }, parts: s } = e;if (null == r) return void n.appendChild(t);const i = document.createTreeWalker(n, 133, null, !1);let o = p(s),
        a = 0,
        c = -1;for (; i.nextNode();) {
      for (c++, i.currentNode === r && (a = h(t), r.parentNode.insertBefore(t, r)); -1 !== o && s[o].index === c;) {
        if (a > 0) {
          for (; -1 !== o;) s[o].index += a, o = p(s, o);return;
        }o = p(s, o);
      }
    }
  }(r, o, a.firstChild) : a.insertBefore(o, a.firstChild), window.ShadyCSS.prepareTemplateStyles(n, e);const c = a.querySelector("style");if (window.ShadyCSS.nativeShadow && null !== c) t.insertBefore(c.cloneNode(!0), t.firstChild);else if (r) {
    a.insertBefore(o, a.firstChild);const e = new Set();e.add(o), u(r, e);
  }
};window.JSCompiler_renameProperty = (e, t) => e;const q = { toAttribute(e, t) {
    switch (t) {case Boolean:
        return e ? "" : null;case Object:case Array:
        return null == e ? e : JSON.stringify(e);}return e;
  }, fromAttribute(e, t) {
    switch (t) {case Boolean:
        return null !== e;case Number:
        return null === e ? null : Number(e);case Object:case Array:
        return JSON.parse(e);}return e;
  } },
      L = (e, t) => t !== e && (t == t || e == e),
      W = { attribute: !0, type: String, converter: q, reflect: !1, hasChanged: L };class B extends HTMLElement {
  constructor() {
    super(), this._updateState = 0, this._instanceProperties = void 0, this._updatePromise = new Promise(e => this._enableUpdatingResolver = e), this._changedProperties = new Map(), this._reflectingProperties = void 0, this.initialize();
  }static get observedAttributes() {
    this.finalize();const e = [];return this._classProperties.forEach((t, r) => {
      const n = this._attributeNameForProperty(r, t);void 0 !== n && (this._attributeToPropertyMap.set(n, r), e.push(n));
    }), e;
  }static _ensureClassProperties() {
    if (!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties", this))) {
      this._classProperties = new Map();const e = Object.getPrototypeOf(this)._classProperties;void 0 !== e && e.forEach((e, t) => this._classProperties.set(t, e));
    }
  }static createProperty(e, t = W) {
    if (this._ensureClassProperties(), this._classProperties.set(e, t), t.noAccessor || this.prototype.hasOwnProperty(e)) return;const r = "symbol" == typeof e ? Symbol() : `__${e}`,
          n = this.getPropertyDescriptor(e, r, t);void 0 !== n && Object.defineProperty(this.prototype, e, n);
  }static getPropertyDescriptor(e, t, r) {
    return { get() {
        return this[t];
      }, set(r) {
        const n = this[e];this[t] = r, this._requestUpdate(e, n);
      }, configurable: !0, enumerable: !0 };
  }static getPropertyOptions(e) {
    return this._classProperties && this._classProperties.get(e) || W;
  }static finalize() {
    const e = Object.getPrototypeOf(this);if (e.hasOwnProperty("finalized") || e.finalize(), this.finalized = !0, this._ensureClassProperties(), this._attributeToPropertyMap = new Map(), this.hasOwnProperty(JSCompiler_renameProperty("properties", this))) {
      const e = this.properties,
            t = [...Object.getOwnPropertyNames(e), ...("function" == typeof Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e) : [])];for (const r of t) this.createProperty(r, e[r]);
    }
  }static _attributeNameForProperty(e, t) {
    const r = t.attribute;return !1 === r ? void 0 : "string" == typeof r ? r : "string" == typeof e ? e.toLowerCase() : void 0;
  }static _valueHasChanged(e, t, r = L) {
    return r(e, t);
  }static _propertyValueFromAttribute(e, t) {
    const r = t.type,
          n = t.converter || q,
          s = "function" == typeof n ? n : n.fromAttribute;return s ? s(e, r) : e;
  }static _propertyValueToAttribute(e, t) {
    if (void 0 === t.reflect) return;const r = t.type,
          n = t.converter;return (n && n.toAttribute || q.toAttribute)(e, r);
  }initialize() {
    this._saveInstanceProperties(), this._requestUpdate();
  }_saveInstanceProperties() {
    this.constructor._classProperties.forEach((e, t) => {
      if (this.hasOwnProperty(t)) {
        const e = this[t];delete this[t], this._instanceProperties || (this._instanceProperties = new Map()), this._instanceProperties.set(t, e);
      }
    });
  }_applyInstanceProperties() {
    this._instanceProperties.forEach((e, t) => this[t] = e), this._instanceProperties = void 0;
  }connectedCallback() {
    this.enableUpdating();
  }enableUpdating() {
    void 0 !== this._enableUpdatingResolver && (this._enableUpdatingResolver(), this._enableUpdatingResolver = void 0);
  }disconnectedCallback() {}attributeChangedCallback(e, t, r) {
    t !== r && this._attributeToProperty(e, r);
  }_propertyToAttribute(e, t, r = W) {
    const n = this.constructor,
          s = n._attributeNameForProperty(e, r);if (void 0 !== s) {
      const e = n._propertyValueToAttribute(t, r);if (void 0 === e) return;this._updateState = 8 | this._updateState, null == e ? this.removeAttribute(s) : this.setAttribute(s, e), this._updateState = -9 & this._updateState;
    }
  }_attributeToProperty(e, t) {
    if (8 & this._updateState) return;const r = this.constructor,
          n = r._attributeToPropertyMap.get(e);if (void 0 !== n) {
      const e = r.getPropertyOptions(n);this._updateState = 16 | this._updateState, this[n] = r._propertyValueFromAttribute(t, e), this._updateState = -17 & this._updateState;
    }
  }_requestUpdate(e, t) {
    let r = !0;if (void 0 !== e) {
      const n = this.constructor,
            s = n.getPropertyOptions(e);n._valueHasChanged(this[e], t, s.hasChanged) ? (this._changedProperties.has(e) || this._changedProperties.set(e, t), !0 !== s.reflect || 16 & this._updateState || (void 0 === this._reflectingProperties && (this._reflectingProperties = new Map()), this._reflectingProperties.set(e, s))) : r = !1;
    }!this._hasRequestedUpdate && r && (this._updatePromise = this._enqueueUpdate());
  }requestUpdate(e, t) {
    return this._requestUpdate(e, t), this.updateComplete;
  }async _enqueueUpdate() {
    this._updateState = 4 | this._updateState;try {
      await this._updatePromise;
    } catch (e) {}const e = this.performUpdate();return null != e && (await e), !this._hasRequestedUpdate;
  }get _hasRequestedUpdate() {
    return 4 & this._updateState;
  }get hasUpdated() {
    return 1 & this._updateState;
  }performUpdate() {
    this._instanceProperties && this._applyInstanceProperties();let e = !1;const t = this._changedProperties;try {
      e = this.shouldUpdate(t), e ? this.update(t) : this._markUpdated();
    } catch (t) {
      throw e = !1, this._markUpdated(), t;
    }e && (1 & this._updateState || (this._updateState = 1 | this._updateState, this.firstUpdated(t)), this.updated(t));
  }_markUpdated() {
    this._changedProperties = new Map(), this._updateState = -5 & this._updateState;
  }get updateComplete() {
    return this._getUpdateComplete();
  }_getUpdateComplete() {
    return this._updatePromise;
  }shouldUpdate(e) {
    return !0;
  }update(e) {
    void 0 !== this._reflectingProperties && this._reflectingProperties.size > 0 && (this._reflectingProperties.forEach((e, t) => this._propertyToAttribute(t, this[t], e)), this._reflectingProperties = void 0), this._markUpdated();
  }updated(e) {}firstUpdated(e) {}
}B.finalized = !0;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const I = (e, t) => "method" === t.kind && t.descriptor && !("value" in t.descriptor) ? Object.assign(Object.assign({}, t), { finisher(r) {
    r.createProperty(t.key, e);
  } }) : { kind: "field", key: Symbol(), placement: "own", descriptor: {}, initializer() {
    "function" == typeof t.initializer && (this[t.key] = t.initializer.call(this));
  }, finisher(r) {
    r.createProperty(t.key, e);
  } };function J(e) {
  return (t, r) => void 0 !== r ? ((e, t, r) => {
    t.constructor.createProperty(r, e);
  })(e, t, r) : I(e, t);
}
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const Z = "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype,
      G = Symbol();class K {
  constructor(e, t) {
    if (t !== G) throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText = e;
  }get styleSheet() {
    return void 0 === this._styleSheet && (Z ? (this._styleSheet = new CSSStyleSheet(), this._styleSheet.replaceSync(this.cssText)) : this._styleSheet = null), this._styleSheet;
  }toString() {
    return this.cssText;
  }
}const Q = (e, ...t) => {
  const r = t.reduce((t, r, n) => t + (e => {
    if (e instanceof K) return e.cssText;if ("number" == typeof e) return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`);
  })(r) + e[n + 1], e[0]);return new K(r, G);
};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions || (window.litElementVersions = [])).push("2.3.0");const X = {};class ee extends B {
  static getStyles() {
    return this.styles;
  }static _getUniqueStyles() {
    if (this.hasOwnProperty(JSCompiler_renameProperty("_styles", this))) return;const e = this.getStyles();if (void 0 === e) this._styles = [];else if (Array.isArray(e)) {
      const t = (e, r) => e.reduceRight((e, r) => Array.isArray(r) ? t(r, e) : (e.add(r), e), r),
            r = t(e, new Set()),
            n = [];r.forEach(e => n.unshift(e)), this._styles = n;
    } else this._styles = [e];
  }initialize() {
    super.initialize(), this.constructor._getUniqueStyles(), this.renderRoot = this.createRenderRoot(), window.ShadowRoot && this.renderRoot instanceof window.ShadowRoot && this.adoptStyles();
  }createRenderRoot() {
    return this.attachShadow({ mode: "open" });
  }adoptStyles() {
    const e = this.constructor._styles;0 !== e.length && (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow ? Z ? this.renderRoot.adoptedStyleSheets = e.map(e => e.styleSheet) : this._needsShimAdoptedStyleSheets = !0 : window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e => e.cssText), this.localName));
  }connectedCallback() {
    super.connectedCallback(), this.hasUpdated && void 0 !== window.ShadyCSS && window.ShadyCSS.styleElement(this);
  }update(e) {
    const t = this.render();super.update(e), t !== X && this.constructor.render(t, this.renderRoot, { scopeName: this.localName, eventContext: this }), this._needsShimAdoptedStyleSheets && (this._needsShimAdoptedStyleSheets = !1, this.constructor._styles.forEach(e => {
      const t = document.createElement("style");t.textContent = e.cssText, this.renderRoot.appendChild(t);
    }));
  }render() {
    return X;
  }
}ee.finalized = !0, ee.render = (e, t, n) => {
  if (!n || "object" != typeof n || !n.scopeName) throw new Error("The `scopeName` option is required.");const s = n.scopeName,
        i = k.has(t),
        o = Y && 11 === t.nodeType && !!t.host,
        a = o && !U.has(s),
        c = a ? document.createDocumentFragment() : t;if (((e, t, n) => {
    let s = k.get(t);void 0 === s && (r(t, t.firstChild), k.set(t, s = new N(Object.assign({ templateFactory: R }, n))), s.appendInto(t)), s.setValue(e), s.commit();
  })(e, c, Object.assign({ templateFactory: j(s) }, n)), a) {
    const e = k.get(c);k.delete(c);const n = e.value instanceof _ ? e.value.template : void 0;F(s, c, n), r(t, t.firstChild), t.appendChild(c), k.set(t, e);
  }!i && o && window.ShadyCSS.styleElement(t.host);
};var te = /d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|Z|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g,
    re = "[^\\s]+",
    ne = /\[([^]*?)\]/gm;function se(e, t) {
  for (var r = [], n = 0, s = e.length; n < s; n++) r.push(e[n].substr(0, t));return r;
}var ie = function (e) {
  return function (t, r) {
    var n = r[e].map(function (e) {
      return e.toLowerCase();
    }).indexOf(t.toLowerCase());return n > -1 ? n : null;
  };
};function oe(e) {
  for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];for (var n = 0, s = t; n < s.length; n++) {
    var i = s[n];for (var o in i) e[o] = i[o];
  }return e;
}var ae = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    ce = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    le = se(ce, 3),
    de = { dayNamesShort: se(ae, 3), dayNames: ae, monthNamesShort: le, monthNames: ce, amPm: ["am", "pm"], DoFn: function (e) {
    return e + ["th", "st", "nd", "rd"][e % 10 > 3 ? 0 : (e - e % 10 != 10 ? 1 : 0) * e % 10];
  } },
    ue = oe({}, de),
    he = function (e, t) {
  for (void 0 === t && (t = 2), e = String(e); e.length < t;) e = "0" + e;return e;
},
    pe = { D: function (e) {
    return String(e.getDate());
  }, DD: function (e) {
    return he(e.getDate());
  }, Do: function (e, t) {
    return t.DoFn(e.getDate());
  }, d: function (e) {
    return String(e.getDay());
  }, dd: function (e) {
    return he(e.getDay());
  }, ddd: function (e, t) {
    return t.dayNamesShort[e.getDay()];
  }, dddd: function (e, t) {
    return t.dayNames[e.getDay()];
  }, M: function (e) {
    return String(e.getMonth() + 1);
  }, MM: function (e) {
    return he(e.getMonth() + 1);
  }, MMM: function (e, t) {
    return t.monthNamesShort[e.getMonth()];
  }, MMMM: function (e, t) {
    return t.monthNames[e.getMonth()];
  }, YY: function (e) {
    return he(String(e.getFullYear()), 4).substr(2);
  }, YYYY: function (e) {
    return he(e.getFullYear(), 4);
  }, h: function (e) {
    return String(e.getHours() % 12 || 12);
  }, hh: function (e) {
    return he(e.getHours() % 12 || 12);
  }, H: function (e) {
    return String(e.getHours());
  }, HH: function (e) {
    return he(e.getHours());
  }, m: function (e) {
    return String(e.getMinutes());
  }, mm: function (e) {
    return he(e.getMinutes());
  }, s: function (e) {
    return String(e.getSeconds());
  }, ss: function (e) {
    return he(e.getSeconds());
  }, S: function (e) {
    return String(Math.round(e.getMilliseconds() / 100));
  }, SS: function (e) {
    return he(Math.round(e.getMilliseconds() / 10), 2);
  }, SSS: function (e) {
    return he(e.getMilliseconds(), 3);
  }, a: function (e, t) {
    return e.getHours() < 12 ? t.amPm[0] : t.amPm[1];
  }, A: function (e, t) {
    return e.getHours() < 12 ? t.amPm[0].toUpperCase() : t.amPm[1].toUpperCase();
  }, ZZ: function (e) {
    var t = e.getTimezoneOffset();return (t > 0 ? "-" : "+") + he(100 * Math.floor(Math.abs(t) / 60) + Math.abs(t) % 60, 4);
  }, Z: function (e) {
    var t = e.getTimezoneOffset();return (t > 0 ? "-" : "+") + he(Math.floor(Math.abs(t) / 60), 2) + ":" + he(Math.abs(t) % 60, 2);
  } },
    fe = function (e) {
  return +e - 1;
},
    me = [null, "[1-9]\\d?"],
    ge = [null, re],
    ye = ["isPm", re, function (e, t) {
  var r = e.toLowerCase();return r === t.amPm[0] ? 0 : r === t.amPm[1] ? 1 : null;
}],
    _e = ["timezoneOffset", "[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z?", function (e) {
  var t = (e + "").match(/([+-]|\d\d)/gi);if (t) {
    var r = 60 * +t[1] + parseInt(t[2], 10);return "+" === t[0] ? r : -r;
  }return 0;
}],
    ve = (ie("monthNamesShort"), ie("monthNames"), { default: "ddd MMM DD YYYY HH:mm:ss", shortDate: "M/D/YY", mediumDate: "MMM D, YYYY", longDate: "MMMM D, YYYY", fullDate: "dddd, MMMM D, YYYY", isoDate: "YYYY-MM-DD", isoDateTime: "YYYY-MM-DDTHH:mm:ssZ", shortTime: "HH:mm", mediumTime: "HH:mm:ss", longTime: "HH:mm:ss.SSS" });var we = function (e, t, r) {
  if (void 0 === t && (t = ve.default), void 0 === r && (r = {}), "number" == typeof e && (e = new Date(e)), "[object Date]" !== Object.prototype.toString.call(e) || isNaN(e.getTime())) throw new Error("Invalid Date pass to format");var n = [];t = (t = ve[t] || t).replace(ne, function (e, t) {
    return n.push(t), "@@@";
  });var s = oe(oe({}, ue), r);return (t = t.replace(te, function (t) {
    return pe[t](e, s);
  })).replace(/@@@/g, function () {
    return n.shift();
  });
},
    be = (function () {
  try {
    new Date().toLocaleDateString("i");
  } catch (e) {
    return "RangeError" === e.name;
  }
}(), function () {
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
}(), new Set(["call-service", "divider", "section", "weblink", "cast", "select"])),
    Se = { alert: "toggle", automation: "toggle", climate: "climate", cover: "cover", fan: "toggle", group: "group", input_boolean: "toggle", input_number: "input-number", input_select: "input-select", input_text: "input-text", light: "toggle", lock: "lock", media_player: "media-player", remote: "toggle", scene: "scene", script: "script", sensor: "sensor", timer: "timer", switch: "toggle", vacuum: "toggle", water_heater: "climate", input_datetime: "input-datetime" },
    xe = function (e, t) {
  void 0 === t && (t = !1);var r = function (e, t) {
    return n("hui-error-card", { type: "error", error: e, config: t });
  },
      n = function (e, t) {
    var n = window.document.createElement(e);try {
      n.setConfig(t);
    } catch (n) {
      return console.error(e, n), r(n.message, t);
    }return n;
  };if (!e || "object" != typeof e || !t && !e.type) return r("No type defined", e);var s = e.type;if (s && s.startsWith("custom:")) s = s.substr("custom:".length);else if (t) {
    if (be.has(s)) s = "hui-" + s + "-row";else {
      if (!e.entity) return r("Invalid config given.", e);var i = e.entity.split(".", 1)[0];s = "hui-" + (Se[i] || "text") + "-entity-row";
    }
  } else s = "hui-" + s + "-card";if (customElements.get(s)) return n(s, e);var o = r("Custom element doesn't exist: " + e.type + ".", e);o.style.display = "None";var a = setTimeout(function () {
    o.style.display = "";
  }, 2e3);return customElements.whenDefined(e.type).then(function () {
    clearTimeout(a), function (e, t, r, n) {
      n = n || {}, r = null == r ? {} : r;var s = new Event(t, { bubbles: void 0 === n.bubbles || n.bubbles, cancelable: Boolean(n.cancelable), composed: void 0 === n.composed || n.composed });s.detail = r, e.dispatchEvent(s);
    }(o, "ll-rebuild", {}, o);
  }), o;
};function Pe(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}function Ne(e, t) {
  return e(t = { exports: {} }, t.exports), t.exports;
}var Te = Ne(function (e, t) {
  Object.defineProperty(t, "__esModule", { value: !0 });t.ContentRect = function (e) {
    if ("getBBox" in e) {
      var t = e.getBBox();return Object.freeze({ height: t.height, left: 0, top: 0, width: t.width });
    }var r = window.getComputedStyle(e);return Object.freeze({ height: parseFloat(r.height || "0"), left: parseFloat(r.paddingLeft || "0"), top: parseFloat(r.paddingTop || "0"), width: parseFloat(r.width || "0") });
  };
});Pe(Te);Te.ContentRect;var Ce = Ne(function (e, t) {
  Object.defineProperty(t, "__esModule", { value: !0 });var r = function () {
    function e(e) {
      this.target = e, this.$$broadcastWidth = this.$$broadcastHeight = 0;
    }return Object.defineProperty(e.prototype, "broadcastWidth", { get: function () {
        return this.$$broadcastWidth;
      }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "broadcastHeight", { get: function () {
        return this.$$broadcastHeight;
      }, enumerable: !0, configurable: !0 }), e.prototype.isActive = function () {
      var e = Te.ContentRect(this.target);return !!e && (e.width !== this.broadcastWidth || e.height !== this.broadcastHeight);
    }, e;
  }();t.ResizeObservation = r;
});Pe(Ce);Ce.ResizeObservation;var Ee = Ne(function (e, t) {
  Object.defineProperty(t, "__esModule", { value: !0 });var r = function (e) {
    this.target = e, this.contentRect = Te.ContentRect(e);
  };t.ResizeObserverEntry = r;
});Pe(Ee);Ee.ResizeObserverEntry;var $e = Ne(function (e, t) {
  Object.defineProperty(t, "__esModule", { value: !0 });var r = [],
      n = function () {
    function e(e) {
      this.$$observationTargets = [], this.$$activeTargets = [], this.$$skippedTargets = [];var t = function (e) {
        if (void 0 === e) return "Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.";if ("function" != typeof e) return "Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.";
      }(e);if (t) throw TypeError(t);this.$$callback = e, r.push(this);
    }return e.prototype.observe = function (e) {
      var t = s("observe", e);if (t) throw TypeError(t);i(this.$$observationTargets, e) > 0 || (this.$$observationTargets.push(new Ce.ResizeObservation(e)), u());
    }, e.prototype.unobserve = function (e) {
      var t = s("unobserve", e);if (t) throw TypeError(t);var r = i(this.$$observationTargets, e);r < 0 || (this.$$observationTargets.splice(r, 1), p());
    }, e.prototype.disconnect = function () {
      this.$$observationTargets = [], this.$$activeTargets = [];
    }, e;
  }();function s(e, t) {
    return void 0 === t ? "Failed to execute '" + e + "' on 'ResizeObserver': 1 argument required, but only 0 present." : t instanceof window.Element ? void 0 : "Failed to execute '" + e + "' on 'ResizeObserver': parameter 1 is not of type 'Element'.";
  }function i(e, t) {
    for (var r = 0; r < e.length; r += 1) if (e[r].target === t) return r;return -1;
  }t.ResizeObserver = n;var o,
      a = function (e) {
    r.forEach(function (t) {
      t.$$activeTargets = [], t.$$skippedTargets = [], t.$$observationTargets.forEach(function (r) {
        r.isActive() && (l(r.target) > e ? t.$$activeTargets.push(r) : t.$$skippedTargets.push(r));
      });
    });
  },
      c = function () {
    var e = 1 / 0;return r.forEach(function (t) {
      if (t.$$activeTargets.length) {
        var r = [];t.$$activeTargets.forEach(function (t) {
          var n = new Ee.ResizeObserverEntry(t.target);r.push(n), t.$$broadcastWidth = n.contentRect.width, t.$$broadcastHeight = n.contentRect.height;var s = l(t.target);s < e && (e = s);
        }), t.$$callback(r, t), t.$$activeTargets = [];
      }
    }), e;
  },
      l = function (e) {
    for (var t = 0; e.parentNode;) e = e.parentNode, t += 1;return t;
  },
      d = function () {
    var e,
        t = 0;for (a(t); r.some(function (e) {
      return !!e.$$activeTargets.length;
    });) t = c(), a(t);r.some(function (e) {
      return !!e.$$skippedTargets.length;
    }) && (e = new window.ErrorEvent("ResizeLoopError", { message: "ResizeObserver loop completed with undelivered notifications." }), window.dispatchEvent(e));
  },
      u = function () {
    o || h();
  },
      h = function () {
    o = window.requestAnimationFrame(function () {
      d(), h();
    });
  },
      p = function () {
    o && !r.some(function (e) {
      return !!e.$$observationTargets.length;
    }) && (window.cancelAnimationFrame(o), o = void 0);
  };t.install = function () {
    return window.ResizeObserver = n;
  };
});Pe($e);var Me = $e.ResizeObserver;$e.install;const Oe = window.loadCardHelpers ? window.loadCardHelpers() : void 0;console.info("%c DECLUTTERING-CARD \n%c   Version 0.6.3   ", "color: orange; font-weight: bold; background: black", "color: white; font-weight: bold; background: dimgray");let Re = class extends ee {
  set hass(e) {
    e && (!this._hass && e && this._createCard(this._config, this._type).then(e => {
      var t;return this._card = e, this._card && (null === (t = this._ro) || void 0 === t || t.observe(this._card)), this._card;
    }), this._hass = e, this._card && (this._card.hass = e));
  }static get styles() {
    return Q`
      :host(.child-card-hidden) {
        display: none;
      }
    `;
  }firstUpdated() {
    this.updateComplete.then(() => {
      this._displayHidden();
    });
  }_displayHidden() {
    var e;"none" === (null === (e = this._card) || void 0 === e ? void 0 : e.style.display) ? this.classList.add("child-card-hidden") : this.classList.contains("child-card-hidden") && this.classList.remove("child-card-hidden");
  }setConfig(e) {
    if (!e.template) throw new Error("Missing template object in your config");const t = function () {
      var e = document.querySelector("home-assistant");if (e = (e = (e = (e = (e = (e = (e = (e = e && e.shadowRoot) && e.querySelector("home-assistant-main")) && e.shadowRoot) && e.querySelector("app-drawer-layout partial-panel-resolver")) && e.shadowRoot || e) && e.querySelector("ha-panel-lovelace")) && e.shadowRoot) && e.querySelector("hui-root")) {
        var t = e.lovelace;return t.current_view = e.___curView, t;
      }return null;
    }() || function () {
      let e = document.querySelector("hc-main");if (e = e && e.shadowRoot, e = e && e.querySelector("hc-lovelace"), e = e && e.shadowRoot, e = e && e.querySelector("hui-view"), e) {
        const t = e.lovelace;return t.current_view = e.___curView, t;
      }return null;
    }();if (!t.config && !t.config.decluttering_templates) throw new Error("The object decluttering_templates doesn't exist in your main lovelace config.");const r = t.config.decluttering_templates[e.template];if (!r) throw new Error(`The template "${e.template}" doesn't exist in decluttering_templates`);if (!r.card && !r.element) throw new Error("You shoud define either a card or an element in the template");if (r.card && r.element) throw new Error("You can define a card and an element in the template");this._ro = new Me(() => {
      this._displayHidden();
    }), this._config = ((e, t) => {
      if (!e && !t.default) return t.card;let r = [];e && (r = e.slice(0)), t.default && (r = r.concat(t.default));let n = t.card ? JSON.stringify(t.card) : JSON.stringify(t.element);return r.forEach(e => {
        const t = Object.keys(e)[0],
              r = Object.values(e)[0];if ("number" == typeof r || "boolean" == typeof r) {
          const e = new RegExp(`"\\[\\[${t}\\]\\]"`, "gm");n = n.replace(e, r);
        }if ("object" == typeof r) {
          const e = new RegExp(`"\\[\\[${t}\\]\\]"`, "gm"),
                s = JSON.stringify(r);n = n.replace(e, s);
        } else {
          const e = new RegExp(`\\[\\[${t}\\]\\]`, "gm");n = n.replace(e, r);
        }
      }), JSON.parse(n);
    })(e.variables, r), this._type = r.card ? "card" : "element";
  }render() {
    return this._hass && this._card && this._config ? V`
      <div id="root">${this._card}</div>
    ` : V``;
  }async _createCard(e, t) {
    let r;return Oe ? "card" === t ? r = "divider" === e.type ? (await Oe).createRowElement(e) : (await Oe).createCardElement(e) : (r = (await Oe).createHuiElement(e), e.style && Object.keys(e.style).forEach(t => {
      this.style.setProperty(t, e.style[t]);
    })) : r = xe(e), this._hass && (r.hass = this._hass), r.addEventListener("ll-rebuild", n => {
      n.stopPropagation(), this._rebuildCard(r, e, t);
    }, { once: !0 }), r.id = "declutter-child", r;
  }async _rebuildCard(e, t, r) {
    var n;const s = await this._createCard(t, r);e.replaceWith(s), this._card = s, null === (n = this._ro) || void 0 === n || n.observe(this._card);
  }getCardSize() {
    return this._card && "function" == typeof this._card.getCardSize ? this._card.getCardSize() : 1;
  }
};var Ae;e([J()], Re.prototype, "_card", void 0), e([J()], Re.prototype, "_config", void 0), Re = e([(Ae = "decluttering-card", e => "function" == typeof e ? ((e, t) => (window.customElements.define(e, t), t))(Ae, e) : ((e, t) => {
  const { kind: r, elements: n } = t;return { kind: r, elements: n, finisher(t) {
      window.customElements.define(e, t);
    } };
})(Ae, e))], Re);
