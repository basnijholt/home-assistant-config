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
function e(e, t, n, r) {
  var s,
      i = arguments.length,
      o = i < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, n, r);else for (var a = e.length - 1; a >= 0; a--) (s = e[a]) && (o = (i < 3 ? s(o) : i > 3 ? s(t, n, o) : s(t, n)) || o);return i > 3 && o && Object.defineProperty(t, n, o), o;
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
      n = (e, t, n = null) => {
  for (; t !== n;) {
    const n = t.nextSibling;e.removeChild(t), t = n;
  }
},
      r = `{{lit-${String(Math.random()).slice(2)}}}`,
      s = `\x3c!--${r}--\x3e`,
      i = new RegExp(`${r}|${s}`);class o {
  constructor(e, t) {
    this.parts = [], this.element = t;const n = [],
          s = [],
          o = document.createTreeWalker(t.content, 133, null, !1);let l = 0,
        u = -1,
        h = 0;const { strings: p, values: { length: m } } = e;for (; h < m;) {
      const e = o.nextNode();if (null !== e) {
        if (u++, 1 === e.nodeType) {
          if (e.hasAttributes()) {
            const t = e.attributes,
                  { length: n } = t;let r = 0;for (let e = 0; e < n; e++) a(t[e].name, "$lit$") && r++;for (; r-- > 0;) {
              const t = p[h],
                    n = d.exec(t)[2],
                    r = n.toLowerCase() + "$lit$",
                    s = e.getAttribute(r);e.removeAttribute(r);const o = s.split(i);this.parts.push({ type: "attribute", index: u, name: n, strings: o }), h += o.length - 1;
            }
          }"TEMPLATE" === e.tagName && (s.push(e), o.currentNode = e.content);
        } else if (3 === e.nodeType) {
          const t = e.data;if (t.indexOf(r) >= 0) {
            const r = e.parentNode,
                  s = t.split(i),
                  o = s.length - 1;for (let t = 0; t < o; t++) {
              let n,
                  i = s[t];if ("" === i) n = c();else {
                const e = d.exec(i);null !== e && a(e[2], "$lit$") && (i = i.slice(0, e.index) + e[1] + e[2].slice(0, -"$lit$".length) + e[3]), n = document.createTextNode(i);
              }r.insertBefore(n, e), this.parts.push({ type: "node", index: ++u });
            }"" === s[o] ? (r.insertBefore(c(), e), n.push(e)) : e.data = s[o], h += o;
          }
        } else if (8 === e.nodeType) if (e.data === r) {
          const t = e.parentNode;null !== e.previousSibling && u !== l || (u++, t.insertBefore(c(), e)), l = u, this.parts.push({ type: "node", index: u }), null === e.nextSibling ? e.data = "" : (n.push(e), u--), h++;
        } else {
          let t = -1;for (; -1 !== (t = e.data.indexOf(r, t + 1));) this.parts.push({ type: "node", index: -1 }), h++;
        }
      } else o.currentNode = s.pop();
    }for (const e of n) e.parentNode.removeChild(e);
  }
}const a = (e, t) => {
  const n = e.length - t.length;return n >= 0 && e.slice(n) === t;
},
      l = e => -1 !== e.index,
      c = () => document.createComment(""),
      d = /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function u(e, t) {
  const { element: { content: n }, parts: r } = e,
        s = document.createTreeWalker(n, 133, null, !1);let i = p(r),
      o = r[i],
      a = -1,
      l = 0;const c = [];let d = null;for (; s.nextNode();) {
    a++;const e = s.currentNode;for (e.previousSibling === d && (d = null), t.has(e) && (c.push(e), null === d && (d = e)), null !== d && l++; void 0 !== o && o.index === a;) o.index = null !== d ? -1 : o.index - l, i = p(r, i), o = r[i];
  }c.forEach(e => e.parentNode.removeChild(e));
}const h = e => {
  let t = 11 === e.nodeType ? 0 : 1;const n = document.createTreeWalker(e, 133, null, !1);for (; n.nextNode();) t++;return t;
},
      p = (e, t = -1) => {
  for (let n = t + 1; n < e.length; n++) {
    const t = e[n];if (l(t)) return n;
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
const m = new WeakMap(),
      f = e => "function" == typeof e && m.has(e),
      g = {},
      _ = {};
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
class y {
  constructor(e, t, n) {
    this.__parts = [], this.template = e, this.processor = t, this.options = n;
  }update(e) {
    let t = 0;for (const n of this.__parts) void 0 !== n && n.setValue(e[t]), t++;for (const e of this.__parts) void 0 !== e && e.commit();
  }_clone() {
    const e = t ? this.template.element.content.cloneNode(!0) : document.importNode(this.template.element.content, !0),
          n = [],
          r = this.template.parts,
          s = document.createTreeWalker(e, 133, null, !1);let i,
        o = 0,
        a = 0,
        c = s.nextNode();for (; o < r.length;) if (i = r[o], l(i)) {
      for (; a < i.index;) a++, "TEMPLATE" === c.nodeName && (n.push(c), s.currentNode = c.content), null === (c = s.nextNode()) && (s.currentNode = n.pop(), c = s.nextNode());if ("node" === i.type) {
        const e = this.processor.handleTextExpression(this.options);e.insertAfterNode(c.previousSibling), this.__parts.push(e);
      } else this.__parts.push(...this.processor.handleAttributeExpressions(c, i.name, i.strings, this.options));o++;
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
 */const v = ` ${r} `;class S {
  constructor(e, t, n, r) {
    this.strings = e, this.values = t, this.type = n, this.processor = r;
  }getHTML() {
    const e = this.strings.length - 1;let t = "",
        n = !1;for (let i = 0; i < e; i++) {
      const e = this.strings[i],
            o = e.lastIndexOf("\x3c!--");n = (o > -1 || n) && -1 === e.indexOf("--\x3e", o + 1);const a = d.exec(e);t += null === a ? e + (n ? v : s) : e.substr(0, a.index) + a[1] + a[2] + "$lit$" + a[3] + r;
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
 */const w = e => null === e || !("object" == typeof e || "function" == typeof e),
      b = e => Array.isArray(e) || !(!e || !e[Symbol.iterator]);class x {
  constructor(e, t, n) {
    this.dirty = !0, this.element = e, this.name = t, this.strings = n, this.parts = [];for (let e = 0; e < n.length - 1; e++) this.parts[e] = this._createPart();
  }_createPart() {
    return new N(this);
  }_getValue() {
    const e = this.strings,
          t = e.length - 1;let n = "";for (let r = 0; r < t; r++) {
      n += e[r];const t = this.parts[r];if (void 0 !== t) {
        const e = t.value;if (w(e) || !b(e)) n += "string" == typeof e ? e : String(e);else for (const t of e) n += "string" == typeof t ? t : String(t);
      }
    }return n += e[t], n;
  }commit() {
    this.dirty && (this.dirty = !1, this.element.setAttribute(this.name, this._getValue()));
  }
}class N {
  constructor(e) {
    this.value = void 0, this.committer = e;
  }setValue(e) {
    e === g || w(e) && e === this.value || (this.value = e, f(e) || (this.committer.dirty = !0));
  }commit() {
    for (; f(this.value);) {
      const e = this.value;this.value = g, e(this);
    }this.value !== g && this.committer.commit();
  }
}class P {
  constructor(e) {
    this.value = void 0, this.__pendingValue = void 0, this.options = e;
  }appendInto(e) {
    this.startNode = e.appendChild(c()), this.endNode = e.appendChild(c());
  }insertAfterNode(e) {
    this.startNode = e, this.endNode = e.nextSibling;
  }appendIntoPart(e) {
    e.__insert(this.startNode = c()), e.__insert(this.endNode = c());
  }insertAfterPart(e) {
    e.__insert(this.startNode = c()), this.endNode = e.endNode, e.endNode = this.startNode;
  }setValue(e) {
    this.__pendingValue = e;
  }commit() {
    if (null === this.startNode.parentNode) return;for (; f(this.__pendingValue);) {
      const e = this.__pendingValue;this.__pendingValue = g, e(this);
    }const e = this.__pendingValue;e !== g && (w(e) ? e !== this.value && this.__commitText(e) : e instanceof S ? this.__commitTemplateResult(e) : e instanceof Node ? this.__commitNode(e) : b(e) ? this.__commitIterable(e) : e === _ ? (this.value = _, this.clear()) : this.__commitText(e));
  }__insert(e) {
    this.endNode.parentNode.insertBefore(e, this.endNode);
  }__commitNode(e) {
    this.value !== e && (this.clear(), this.__insert(e), this.value = e);
  }__commitText(e) {
    const t = this.startNode.nextSibling,
          n = "string" == typeof (e = null == e ? "" : e) ? e : String(e);t === this.endNode.previousSibling && 3 === t.nodeType ? t.data = n : this.__commitNode(document.createTextNode(n)), this.value = e;
  }__commitTemplateResult(e) {
    const t = this.options.templateFactory(e);if (this.value instanceof y && this.value.template === t) this.value.update(e.values);else {
      const n = new y(t, e.processor, this.options),
            r = n._clone();n.update(e.values), this.__commitNode(r), this.value = n;
    }
  }__commitIterable(e) {
    Array.isArray(this.value) || (this.value = [], this.clear());const t = this.value;let n,
        r = 0;for (const s of e) n = t[r], void 0 === n && (n = new P(this.options), t.push(n), 0 === r ? n.appendIntoPart(this) : n.insertAfterPart(t[r - 1])), n.setValue(s), n.commit(), r++;r < t.length && (t.length = r, this.clear(n && n.endNode));
  }clear(e = this.startNode) {
    n(this.startNode.parentNode, e.nextSibling, this.endNode);
  }
}class C {
  constructor(e, t, n) {
    if (this.value = void 0, this.__pendingValue = void 0, 2 !== n.length || "" !== n[0] || "" !== n[1]) throw new Error("Boolean attributes can only contain a single expression");this.element = e, this.name = t, this.strings = n;
  }setValue(e) {
    this.__pendingValue = e;
  }commit() {
    for (; f(this.__pendingValue);) {
      const e = this.__pendingValue;this.__pendingValue = g, e(this);
    }if (this.__pendingValue === g) return;const e = !!this.__pendingValue;this.value !== e && (e ? this.element.setAttribute(this.name, "") : this.element.removeAttribute(this.name), this.value = e), this.__pendingValue = g;
  }
}class E extends x {
  constructor(e, t, n) {
    super(e, t, n), this.single = 2 === n.length && "" === n[0] && "" === n[1];
  }_createPart() {
    return new M(this);
  }_getValue() {
    return this.single ? this.parts[0].value : super._getValue();
  }commit() {
    this.dirty && (this.dirty = !1, this.element[this.name] = this._getValue());
  }
}class M extends N {}let T = !1;(() => {
  try {
    const e = { get capture() {
        return T = !0, !1;
      } };window.addEventListener("test", e, e), window.removeEventListener("test", e, e);
  } catch (e) {}
})();class A {
  constructor(e, t, n) {
    this.value = void 0, this.__pendingValue = void 0, this.element = e, this.eventName = t, this.eventContext = n, this.__boundHandleEvent = e => this.handleEvent(e);
  }setValue(e) {
    this.__pendingValue = e;
  }commit() {
    for (; f(this.__pendingValue);) {
      const e = this.__pendingValue;this.__pendingValue = g, e(this);
    }if (this.__pendingValue === g) return;const e = this.__pendingValue,
          t = this.value,
          n = null == e || null != t && (e.capture !== t.capture || e.once !== t.once || e.passive !== t.passive),
          r = null != e && (null == t || n);n && this.element.removeEventListener(this.eventName, this.__boundHandleEvent, this.__options), r && (this.__options = D(e), this.element.addEventListener(this.eventName, this.__boundHandleEvent, this.__options)), this.value = e, this.__pendingValue = g;
  }handleEvent(e) {
    "function" == typeof this.value ? this.value.call(this.eventContext || this.element, e) : this.value.handleEvent(e);
  }
}const D = e => e && (T ? { capture: e.capture, passive: e.passive, once: e.once } : e.capture)
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
 */;function O(e) {
  let t = V.get(e.type);void 0 === t && (t = { stringsArray: new WeakMap(), keyString: new Map() }, V.set(e.type, t));let n = t.stringsArray.get(e.strings);if (void 0 !== n) return n;const s = e.strings.join(r);return n = t.keyString.get(s), void 0 === n && (n = new o(e, e.getTemplateElement()), t.keyString.set(s, n)), t.stringsArray.set(e.strings, n), n;
}const V = new Map(),
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
 */const R = new
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
  handleAttributeExpressions(e, t, n, r) {
    const s = t[0];if ("." === s) {
      return new E(e, t.slice(1), n).parts;
    }return "@" === s ? [new A(e, t.slice(1), r.eventContext)] : "?" === s ? [new C(e, t.slice(1), n)] : new x(e, t, n).parts;
  }handleTextExpression(e) {
    return new P(e);
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
 */"undefined" != typeof window && (window.litHtmlVersions || (window.litHtmlVersions = [])).push("1.2.0");const Y = (e, ...t) => new S(e, t, "html", R)
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
      U = (e, t) => `${e}--${t}`;let H = !0;void 0 === window.ShadyCSS ? H = !1 : void 0 === window.ShadyCSS.prepareTemplateDom && (console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."), H = !1);const j = e => t => {
  const n = U(t.type, e);let s = V.get(n);void 0 === s && (s = { stringsArray: new WeakMap(), keyString: new Map() }, V.set(n, s));let i = s.stringsArray.get(t.strings);if (void 0 !== i) return i;const a = t.strings.join(r);if (i = s.keyString.get(a), void 0 === i) {
    const n = t.getTemplateElement();H && window.ShadyCSS.prepareTemplateDom(n, e), i = new o(t, n), s.keyString.set(a, i);
  }return s.stringsArray.set(t.strings, i), i;
},
      $ = ["html", "svg"],
      q = new Set(),
      z = (e, t, n) => {
  q.add(e);const r = n ? n.element : document.createElement("template"),
        s = t.querySelectorAll("style"),
        { length: i } = s;if (0 === i) return void window.ShadyCSS.prepareTemplateStyles(r, e);const o = document.createElement("style");for (let e = 0; e < i; e++) {
    const t = s[e];t.parentNode.removeChild(t), o.textContent += t.textContent;
  }(e => {
    $.forEach(t => {
      const n = V.get(U(t, e));void 0 !== n && n.keyString.forEach(e => {
        const { element: { content: t } } = e,
              n = new Set();Array.from(t.querySelectorAll("style")).forEach(e => {
          n.add(e);
        }), u(e, n);
      });
    });
  })(e);const a = r.content;n ? function (e, t, n = null) {
    const { element: { content: r }, parts: s } = e;if (null == n) return void r.appendChild(t);const i = document.createTreeWalker(r, 133, null, !1);let o = p(s),
        a = 0,
        l = -1;for (; i.nextNode();) {
      for (l++, i.currentNode === n && (a = h(t), n.parentNode.insertBefore(t, n)); -1 !== o && s[o].index === l;) {
        if (a > 0) {
          for (; -1 !== o;) s[o].index += a, o = p(s, o);return;
        }o = p(s, o);
      }
    }
  }(n, o, a.firstChild) : a.insertBefore(o, a.firstChild), window.ShadyCSS.prepareTemplateStyles(r, e);const l = a.querySelector("style");if (window.ShadyCSS.nativeShadow && null !== l) t.insertBefore(l.cloneNode(!0), t.firstChild);else if (n) {
    a.insertBefore(o, a.firstChild);const e = new Set();e.add(o), u(n, e);
  }
};window.JSCompiler_renameProperty = (e, t) => e;const L = { toAttribute(e, t) {
    switch (t) {case Boolean:
        return e ? "" : null;case Object:case Array:
        return null == e ? e : JSON.stringify(e);}return e;
  }, fromAttribute(e, t) {
    switch (t) {case Boolean:
        return null !== e;case Number:
        return null === e ? null : Number(e);case Object:case Array:
        return JSON.parse(e);}return e;
  } },
      F = (e, t) => t !== e && (t == t || e == e),
      I = { attribute: !0, type: String, converter: L, reflect: !1, hasChanged: F };class J extends HTMLElement {
  constructor() {
    super(), this._updateState = 0, this._instanceProperties = void 0, this._updatePromise = new Promise(e => this._enableUpdatingResolver = e), this._changedProperties = new Map(), this._reflectingProperties = void 0, this.initialize();
  }static get observedAttributes() {
    this.finalize();const e = [];return this._classProperties.forEach((t, n) => {
      const r = this._attributeNameForProperty(n, t);void 0 !== r && (this._attributeToPropertyMap.set(r, n), e.push(r));
    }), e;
  }static _ensureClassProperties() {
    if (!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties", this))) {
      this._classProperties = new Map();const e = Object.getPrototypeOf(this)._classProperties;void 0 !== e && e.forEach((e, t) => this._classProperties.set(t, e));
    }
  }static createProperty(e, t = I) {
    if (this._ensureClassProperties(), this._classProperties.set(e, t), t.noAccessor || this.prototype.hasOwnProperty(e)) return;const n = "symbol" == typeof e ? Symbol() : `__${e}`,
          r = this.getPropertyDescriptor(e, n, t);void 0 !== r && Object.defineProperty(this.prototype, e, r);
  }static getPropertyDescriptor(e, t, n) {
    return { get() {
        return this[t];
      }, set(n) {
        const r = this[e];this[t] = n, this._requestUpdate(e, r);
      }, configurable: !0, enumerable: !0 };
  }static getPropertyOptions(e) {
    return this._classProperties && this._classProperties.get(e) || I;
  }static finalize() {
    const e = Object.getPrototypeOf(this);if (e.hasOwnProperty("finalized") || e.finalize(), this.finalized = !0, this._ensureClassProperties(), this._attributeToPropertyMap = new Map(), this.hasOwnProperty(JSCompiler_renameProperty("properties", this))) {
      const e = this.properties,
            t = [...Object.getOwnPropertyNames(e), ...("function" == typeof Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e) : [])];for (const n of t) this.createProperty(n, e[n]);
    }
  }static _attributeNameForProperty(e, t) {
    const n = t.attribute;return !1 === n ? void 0 : "string" == typeof n ? n : "string" == typeof e ? e.toLowerCase() : void 0;
  }static _valueHasChanged(e, t, n = F) {
    return n(e, t);
  }static _propertyValueFromAttribute(e, t) {
    const n = t.type,
          r = t.converter || L,
          s = "function" == typeof r ? r : r.fromAttribute;return s ? s(e, n) : e;
  }static _propertyValueToAttribute(e, t) {
    if (void 0 === t.reflect) return;const n = t.type,
          r = t.converter;return (r && r.toAttribute || L.toAttribute)(e, n);
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
  }disconnectedCallback() {}attributeChangedCallback(e, t, n) {
    t !== n && this._attributeToProperty(e, n);
  }_propertyToAttribute(e, t, n = I) {
    const r = this.constructor,
          s = r._attributeNameForProperty(e, n);if (void 0 !== s) {
      const e = r._propertyValueToAttribute(t, n);if (void 0 === e) return;this._updateState = 8 | this._updateState, null == e ? this.removeAttribute(s) : this.setAttribute(s, e), this._updateState = -9 & this._updateState;
    }
  }_attributeToProperty(e, t) {
    if (8 & this._updateState) return;const n = this.constructor,
          r = n._attributeToPropertyMap.get(e);if (void 0 !== r) {
      const e = n.getPropertyOptions(r);this._updateState = 16 | this._updateState, this[r] = n._propertyValueFromAttribute(t, e), this._updateState = -17 & this._updateState;
    }
  }_requestUpdate(e, t) {
    let n = !0;if (void 0 !== e) {
      const r = this.constructor,
            s = r.getPropertyOptions(e);r._valueHasChanged(this[e], t, s.hasChanged) ? (this._changedProperties.has(e) || this._changedProperties.set(e, t), !0 !== s.reflect || 16 & this._updateState || (void 0 === this._reflectingProperties && (this._reflectingProperties = new Map()), this._reflectingProperties.set(e, s))) : n = !1;
    }!this._hasRequestedUpdate && n && (this._updatePromise = this._enqueueUpdate());
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
}J.finalized = !0;
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
const W = (e, t) => "method" === t.kind && t.descriptor && !("value" in t.descriptor) ? Object.assign(Object.assign({}, t), { finisher(n) {
    n.createProperty(t.key, e);
  } }) : { kind: "field", key: Symbol(), placement: "own", descriptor: {}, initializer() {
    "function" == typeof t.initializer && (this[t.key] = t.initializer.call(this));
  }, finisher(n) {
    n.createProperty(t.key, e);
  } };function B(e) {
  return (t, n) => void 0 !== n ? ((e, t, n) => {
    t.constructor.createProperty(n, e);
  })(e, t, n) : W(e, t);
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
  const n = t.reduce((t, n, r) => t + (e => {
    if (e instanceof K) return e.cssText;if ("number" == typeof e) return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`);
  })(n) + e[r + 1], e[0]);return new K(n, G);
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
(window.litElementVersions || (window.litElementVersions = [])).push("2.3.0");const X = {};class ee extends J {
  static getStyles() {
    return this.styles;
  }static _getUniqueStyles() {
    if (this.hasOwnProperty(JSCompiler_renameProperty("_styles", this))) return;const e = this.getStyles();if (void 0 === e) this._styles = [];else if (Array.isArray(e)) {
      const t = (e, n) => e.reduceRight((e, n) => Array.isArray(n) ? t(n, e) : (e.add(n), e), n),
            n = t(e, new Set()),
            r = [];n.forEach(e => r.unshift(e)), this._styles = r;
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
}ee.finalized = !0, ee.render = (e, t, r) => {
  if (!r || "object" != typeof r || !r.scopeName) throw new Error("The `scopeName` option is required.");const s = r.scopeName,
        i = k.has(t),
        o = H && 11 === t.nodeType && !!t.host,
        a = o && !q.has(s),
        l = a ? document.createDocumentFragment() : t;if (((e, t, r) => {
    let s = k.get(t);void 0 === s && (n(t, t.firstChild), k.set(t, s = new P(Object.assign({ templateFactory: O }, r))), s.appendInto(t)), s.setValue(e), s.commit();
  })(e, l, Object.assign({ templateFactory: j(s) }, r)), a) {
    const e = k.get(l);k.delete(l);const r = e.value instanceof y ? e.value.template : void 0;z(s, l, r), n(t, t.firstChild), t.appendChild(l), k.set(t, e);
  }!i && o && window.ShadyCSS.styleElement(t.host);
};var te = /d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|Z|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g,
    ne = "[^\\s]+",
    re = /\[([^]*?)\]/gm;function se(e, t) {
  for (var n = [], r = 0, s = e.length; r < s; r++) n.push(e[r].substr(0, t));return n;
}var ie = function (e) {
  return function (t, n) {
    var r = n[e].map(function (e) {
      return e.toLowerCase();
    }).indexOf(t.toLowerCase());return r > -1 ? r : null;
  };
};function oe(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];for (var r = 0, s = t; r < s.length; r++) {
    var i = s[r];for (var o in i) e[o] = i[o];
  }return e;
}var ae = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    le = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    ce = se(le, 3),
    de = { dayNamesShort: se(ae, 3), dayNames: ae, monthNamesShort: ce, monthNames: le, amPm: ["am", "pm"], DoFn: function (e) {
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
    me = function (e) {
  return +e - 1;
},
    fe = [null, "[1-9]\\d?"],
    ge = [null, ne],
    _e = ["isPm", ne, function (e, t) {
  var n = e.toLowerCase();return n === t.amPm[0] ? 0 : n === t.amPm[1] ? 1 : null;
}],
    ye = ["timezoneOffset", "[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z?", function (e) {
  var t = (e + "").match(/([+-]|\d\d)/gi);if (t) {
    var n = 60 * +t[1] + parseInt(t[2], 10);return "+" === t[0] ? n : -n;
  }return 0;
}],
    ve = (ie("monthNamesShort"), ie("monthNames"), { default: "ddd MMM DD YYYY HH:mm:ss", shortDate: "M/D/YY", mediumDate: "MMM D, YYYY", longDate: "MMMM D, YYYY", fullDate: "dddd, MMMM D, YYYY", isoDate: "YYYY-MM-DD", isoDateTime: "YYYY-MM-DDTHH:mm:ssZ", shortTime: "HH:mm", mediumTime: "HH:mm:ss", longTime: "HH:mm:ss.SSS" });var Se = function (e, t, n) {
  if (void 0 === t && (t = ve.default), void 0 === n && (n = {}), "number" == typeof e && (e = new Date(e)), "[object Date]" !== Object.prototype.toString.call(e) || isNaN(e.getTime())) throw new Error("Invalid Date pass to format");var r = [];t = (t = ve[t] || t).replace(re, function (e, t) {
    return r.push(t), "@@@";
  });var s = oe(oe({}, ue), n);return (t = t.replace(te, function (t) {
    return pe[t](e, s);
  })).replace(/@@@/g, function () {
    return r.shift();
  });
},
    we = (function () {
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
    be = { alert: "toggle", automation: "toggle", climate: "climate", cover: "cover", fan: "toggle", group: "group", input_boolean: "toggle", input_number: "input-number", input_select: "input-select", input_text: "input-text", light: "toggle", lock: "lock", media_player: "media-player", remote: "toggle", scene: "scene", script: "script", sensor: "sensor", timer: "timer", switch: "toggle", vacuum: "toggle", water_heater: "climate", input_datetime: "input-datetime" },
    xe = function (e, t) {
  void 0 === t && (t = !1);var n = function (e, t) {
    return r("hui-error-card", { type: "error", error: e, config: t });
  },
      r = function (e, t) {
    var r = window.document.createElement(e);try {
      r.setConfig(t);
    } catch (r) {
      return console.error(e, r), n(r.message, t);
    }return r;
  };if (!e || "object" != typeof e || !t && !e.type) return n("No type defined", e);var s = e.type;if (s && s.startsWith("custom:")) s = s.substr("custom:".length);else if (t) {
    if (we.has(s)) s = "hui-" + s + "-row";else {
      if (!e.entity) return n("Invalid config given.", e);var i = e.entity.split(".", 1)[0];s = "hui-" + (be[i] || "text") + "-entity-row";
    }
  } else s = "hui-" + s + "-card";if (customElements.get(s)) return r(s, e);var o = n("Custom element doesn't exist: " + e.type + ".", e);o.style.display = "None";var a = setTimeout(function () {
    o.style.display = "";
  }, 2e3);return customElements.whenDefined(e.type).then(function () {
    clearTimeout(a), function (e, t, n, r) {
      r = r || {}, n = null == n ? {} : n;var s = new Event(t, { bubbles: void 0 === r.bubbles || r.bubbles, cancelable: Boolean(r.cancelable), composed: void 0 === r.composed || r.composed });s.detail = n, e.dispatchEvent(s);
    }(o, "ll-rebuild", {}, o);
  }), o;
};const Ne = window.loadCardHelpers ? window.loadCardHelpers() : void 0;console.info("%c DECLUTTERING-CARD \n%c   Version 0.6.1   ", "color: orange; font-weight: bold; background: black", "color: white; font-weight: bold; background: dimgray");let Pe = class extends ee {
  set hass(e) {
    this._hass = e, this._card && (this._card.hass = e);
  }static get styles() {
    return Q`
      :host(.child-card-hidden) {
        display: none;
      }
    `;
  }updated() {
    this.updateComplete.then(() => {
      var e;"none" === (null === (e = this._card) || void 0 === e ? void 0 : e.style.display) ? this.className = "child-card-hidden" : "child-card-hidden" === this.className && (this.className = "");
    });
  }setConfig(e) {
    if (!e.template) throw new Error("Missing template object in your config");const t = function () {
      var e = document.querySelector("home-assistant");if (e = (e = (e = (e = (e = (e = (e = (e = e && e.shadowRoot) && e.querySelector("home-assistant-main")) && e.shadowRoot) && e.querySelector("app-drawer-layout partial-panel-resolver")) && e.shadowRoot || e) && e.querySelector("ha-panel-lovelace")) && e.shadowRoot) && e.querySelector("hui-root")) {
        var t = e.lovelace;return t.current_view = e.___curView, t;
      }return null;
    }() || function () {
      let e = document.querySelector("hc-main");if (e = e && e.shadowRoot, e = e && e.querySelector("hc-lovelace"), e = e && e.shadowRoot, e = e && e.querySelector("hui-view"), e) {
        const t = e.lovelace;return t.current_view = e.___curView, t;
      }return null;
    }();if (!t.config && !t.config.decluttering_templates) throw new Error("The object decluttering_templates doesn't exist in your main lovelace config.");const n = t.config.decluttering_templates[e.template];if (!n) throw new Error(`The template "${e.template}" doesn't exist in decluttering_templates`);if (!n.card && !n.element) throw new Error("You shoud define either a card or an element in the template");if (n.card && n.element) throw new Error("You can define a card and an element in the template");this._config = ((e, t) => {
      if (!e && !t.default) return t.card;let n = [];e && (n = e.slice(0)), t.default && (n = n.concat(t.default));let r = t.card ? JSON.stringify(t.card) : JSON.stringify(t.element);return n.forEach(e => {
        const t = Object.keys(e)[0],
              n = Object.values(e)[0];if ("number" == typeof n || "boolean" == typeof n) {
          const e = new RegExp(`"\\[\\[${t}\\]\\]"`, "gm");r = r.replace(e, n);
        }if ("object" == typeof n) {
          const e = new RegExp(`"\\[\\[${t}\\]\\]"`, "gm"),
                s = JSON.stringify(n);r = r.replace(e, s);
        } else {
          const e = new RegExp(`\\[\\[${t}\\]\\]`, "gm");r = r.replace(e, n);
        }
      }), JSON.parse(r);
    })(e.variables, n);const r = n.card ? "card" : "element";this._createCard(this._config, r).then(e => (this._card = e, this._card));
  }render() {
    return this._hass && this._card && this._config ? Y`
      <div id="root">${this._card}</div>
    ` : Y``;
  }async _createCard(e, t) {
    let n;return Ne ? "card" === t ? n = "divider" === e.type ? (await Ne).createRowElement(e) : (await Ne).createCardElement(e) : (n = (await Ne).createHuiElement(e), e.style && Object.keys(e.style).forEach(t => {
      this.style.setProperty(t, e.style[t]);
    })) : n = xe(e), this._hass && (n.hass = this._hass), n.addEventListener("ll-rebuild", r => {
      r.stopPropagation(), this._rebuildCard(n, e, t);
    }, { once: !0 }), n.id = "declutter-child", n;
  }async _rebuildCard(e, t, n) {
    const r = await this._createCard(t, n);e.replaceWith(r), this._card = r;
  }getCardSize() {
    return this._card && "function" == typeof this._card.getCardSize ? this._card.getCardSize() : 1;
  }
};var Ce;e([B()], Pe.prototype, "_card", void 0), e([B()], Pe.prototype, "_hass", void 0), e([B()], Pe.prototype, "_config", void 0), Pe = e([(Ce = "decluttering-card", e => "function" == typeof e ? ((e, t) => (window.customElements.define(e, t), t))(Ce, e) : ((e, t) => {
  const { kind: n, elements: r } = t;return { kind: n, elements: r, finisher(t) {
      window.customElements.define(e, t);
    } };
})(Ce, e))], Pe);
