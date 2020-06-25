/* VimeoPlayer - v3.20.13 - 2020-06-17 - https://player.vimeo.com/NOTICE.txt */ ! function(t) {
    "use strict";
    var n = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

    function i(t, n) { return t(n = { exports: {} }, n.exports), n.exports }
    var e = i((function(t, i) {
            /*!
             * @overview es6-promise - a tiny implementation of Promises/A+.
             * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
             * @license   Licensed under MIT license
             *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
             * @version   v4.2.6+9869a4bc
             */
            t.exports = function() {
                function t(t) { return "function" == typeof t }
                var i = Array.isArray ? Array.isArray : function(t) { return "[object Array]" === Object.prototype.toString.call(t) },
                    e = 0,
                    r = void 0,
                    o = void 0,
                    u = function(t, n) { h[e] = t, h[e + 1] = n, 2 === (e += 2) && (o ? o(v) : p()) },
                    a = "undefined" != typeof window ? window : void 0,
                    s = a || {},
                    c = s.MutationObserver || s.WebKitMutationObserver,
                    f = "undefined" == typeof self && "undefined" != typeof process && "[object process]" === {}.toString.call(process),
                    l = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel;

                function d() { var t = setTimeout; return function() { return t(v, 1) } }
                var h = new Array(1e3);

                function v() {
                    for (var t = 0; t < e; t += 2)(0, h[t])(h[t + 1]), h[t] = void 0, h[t + 1] = void 0;
                    e = 0
                }
                var p = void 0;

                function m(t, n) {
                    var i = this,
                        e = new this.constructor(g);
                    void 0 === e[b] && O(e);
                    var r = i._;
                    if (r) {
                        var o = arguments[r - 1];
                        u((function() { return C(r, e, o, i.k) }))
                    } else M(i, e, t, n);
                    return e
                }

                function w(t) { if (t && "object" == typeof t && t.constructor === this) return t; var n = new this(g); return E(n, t), n }
                p = f ? function() { return process.nextTick(v) } : c ? function() {
                    var t = 0,
                        n = new c(v),
                        i = document.createTextNode("");
                    return n.observe(i, { characterData: !0 }),
                        function() { i.data = t = ++t % 2 }
                }() : l ? function() {
                    var t = new MessageChannel;
                    return t.port1.onmessage = v,
                        function() { return t.port2.postMessage(0) }
                }() : void 0 === a ? function() { try { var t = Function("return this")().require("vertx"); return void 0 !== (r = t.runOnLoop || t.runOnContext) ? function() { r(v) } : d() } catch (t) { return d() } }() : d();
                var b = Math.random().toString(36).substring(2);

                function g() {}
                var y = { error: null };

                function _(t) { try { return t.then } catch (t) { return y.error = t, y } }

                function k(n, i, e) {
                    i.constructor === n.constructor && e === m && i.constructor.resolve === w ? function(t, n) { 1 === n._ ? S(t, n.k) : 2 === n._ ? x(t, n.k) : M(n, void 0, (function(n) { return E(t, n) }), (function(n) { return x(t, n) })) }(n, i) : e === y ? (x(n, y.error), y.error = null) : void 0 === e ? S(n, i) : t(e) ? function(t, n, i) {
                        u((function(t) {
                            var e = !1,
                                r = function(i, r, o, u) { try { i.call(r, (function(i) { e || (e = !0, n !== i ? E(t, i) : S(t, i)) }), (function(n) { e || (e = !0, x(t, n)) })) } catch (t) { return t } }(i, n, 0, 0, t.T);
                            !e && r && (e = !0, x(t, r))
                        }), t)
                    }(n, i, e) : S(n, i)
                }

                function E(t, n) { t === n ? x(t, new TypeError("You cannot resolve a promise with itself")) : function(t) { var n = typeof t; return null !== t && ("object" === n || "function" === n) }(n) ? k(t, n, _(n)) : S(t, n) }

                function T(t) { t.S && t.S(t.k), A(t) }

                function S(t, n) { void 0 === t._ && (t.k = n, t._ = 1, 0 !== t.M.length && u(A, t)) }

                function x(t, n) { void 0 === t._ && (t._ = 2, t.k = n, u(T, t)) }

                function M(t, n, i, e) {
                    var r = t.M,
                        o = r.length;
                    t.S = null, r[o] = n, r[o + 1] = i, r[o + 2] = e, 0 === o && t._ && u(A, t)
                }

                function A(t) {
                    var n = t.M,
                        i = t._;
                    if (0 !== n.length) {
                        for (var e = void 0, r = void 0, o = t.k, u = 0; u < n.length; u += 3) e = n[u], r = n[u + i], e ? C(i, e, r, o) : r(o);
                        t.M.length = 0
                    }
                }

                function C(n, i, e, r) {
                    var o = t(e),
                        u = void 0,
                        a = void 0,
                        s = void 0,
                        c = void 0;
                    if (o) { if ((u = function(t, n) { try { return t(n) } catch (t) { return y.error = t, y } }(e, r)) === y ? (c = !0, a = u.error, u.error = null) : s = !0, i === u) return void x(i, new TypeError("A promises callback cannot return that same promise.")) } else u = r, s = !0;
                    void 0 !== i._ || (o && s ? E(i, u) : c ? x(i, a) : 1 === n ? S(i, u) : 2 === n && x(i, u))
                }
                var R = 0;

                function O(t) { t[b] = R++, t._ = void 0, t.k = void 0, t.M = [] }
                var I = function() {
                        function t(t, n) { this.A = t, this.promise = new t(g), this.promise[b] || O(this.promise), i(n) ? (this.length = n.length, this.C = n.length, this.k = new Array(this.length), 0 === this.length ? S(this.promise, this.k) : (this.length = this.length || 0, this.R(n), 0 === this.C && S(this.promise, this.k))) : x(this.promise, new Error("Array Methods must be provided an Array")) }
                        return t.prototype.R = function(t) { for (var n = 0; void 0 === this._ && n < t.length; n++) this.O(t[n], n) }, t.prototype.O = function(t, n) {
                            var i = this.A,
                                e = i.resolve;
                            if (e === w) {
                                var r = _(t);
                                if (r === m && void 0 !== t._) this.I(t._, n, t.k);
                                else if ("function" != typeof r) this.C--, this.k[n] = t;
                                else if (i === j) {
                                    var o = new i(g);
                                    k(o, t, r), this.D(o, n)
                                } else this.D(new i((function(n) { return n(t) })), n)
                            } else this.D(e(t), n)
                        }, t.prototype.I = function(t, n, i) {
                            var e = this.promise;
                            void 0 === e._ && (this.C--, 2 === t ? x(e, i) : this.k[n] = i), 0 === this.C && S(e, this.k)
                        }, t.prototype.D = function(t, n) {
                            var i = this;
                            M(t, void 0, (function(t) { return i.I(1, n, t) }), (function(t) { return i.I(2, n, t) }))
                        }, t
                    }(),
                    j = function() {
                        function n(t) { this[b] = R++, this.k = this._ = void 0, this.M = [], g !== t && ("function" != typeof t && function() { throw new TypeError("You must pass a resolver function as the first argument to the promise constructor") }(), this instanceof n ? function(t, n) { try { n((function(n) { E(t, n) }), (function(n) { x(t, n) })) } catch (n) { x(t, n) } }(this, t) : function() { throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.") }()) }
                        return n.prototype.catch = function(t) { return this.then(null, t) }, n.prototype.finally = function(n) { var i = this.constructor; return t(n) ? this.then((function(t) { return i.resolve(n()).then((function() { return t })) }), (function(t) { return i.resolve(n()).then((function() { throw t })) })) : this.then(n, n) }, n
                    }();
                return j.prototype.then = m, j.all = function(t) { return new I(this, t).promise }, j.race = function(t) { var n = this; return i(t) ? new n((function(i, e) { for (var r = t.length, o = 0; o < r; o++) n.resolve(t[o]).then(i, e) })) : new n((function(t, n) { return n(new TypeError("You must pass an array to race.")) })) }, j.resolve = w, j.reject = function(t) { var n = new this(g); return x(n, t), n }, j.L = function(t) { o = t }, j.P = function(t) { u = t }, j.N = u, j.polyfill = function() {
                    var t = void 0;
                    if (void 0 !== n) t = n;
                    else if ("undefined" != typeof self) t = self;
                    else try { t = Function("return this")() } catch (t) { throw new Error("polyfill failed because global object is unavailable in this environment") }
                    var i = t.Promise;
                    if (i) { var e = null; try { e = Object.prototype.toString.call(i.resolve()) } catch (t) {} if ("[object Promise]" === e && !i.cast) return }
                    t.Promise = j
                }, j.Promise = j, j
            }()
        })),
        r = window.Promise || e;
    if (r.allSettled || (r.allSettled = function(t) { return r.all(t.map((function(t) { return t.then((function(t) { return { status: "fulfilled", value: t } })).catch((function(t) { return { status: "rejected", reason: t } })) }))) }), function() {
            for (var t = ["webkit", "moz"], n = 0; n < t.length && !window.requestAnimationFrame; ++n) {
                var i = t[n];
                window.requestAnimationFrame = window[i + "RequestAnimationFrame"], window.cancelAnimationFrame = window[i + "CancelAnimationFrame"] || window[i + "CancelRequestAnimationFrame"]
            }!/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) && window.requestAnimationFrame && window.cancelAnimationFrame || (window.requestAnimationFrame = function(t) { return setTimeout(t, 0) }, window.cancelAnimationFrame = clearTimeout)
        }(), Number.isInteger || (Number.isInteger = function(t) { return "number" == typeof t && isFinite(t) && Math.floor(t) === t }), "undefined" != typeof DOMTokenList && ! function() { var t = document.createElement("div"); return t.classList.toggle("test-class", !1), !t.classList.contains("test-class") }()) {
        var o = DOMTokenList.prototype.toggle;
        DOMTokenList.prototype.toggle = function(t, n) {!0 !== n ? !1 !== n ? o.call(this, t) : this.remove(t) : this.add(t) }
    }
    "function" != typeof Object.assign && (Object.assign = function(t) {
        if (null == t) throw new TypeError("Cannot convert undefined or null to object");
        for (var n = Object(t), i = 1; i < arguments.length; i++) {
            var e = arguments[i];
            if (null != e)
                for (var r in e) e.hasOwnProperty(r) && (n[r] = e[r])
        }
        return n
    }), Array.prototype.find || Object.defineProperty(Array.prototype, "find", {
        value: function(t) {
            for (var n = Object(this), i = n.length >>> 0, e = arguments[1], r = 0; r < i;) {
                var o = n[r];
                if (t.call(e, o, r, n)) return o;
                r++
            }
        }
    }), Array.prototype.findIndex || Object.defineProperty(Array.prototype, "findIndex", {
        value: function(t) {
            for (var n = Object(this), i = n.length >>> 0, e = arguments[1], r = 0; r < i;) {
                var o = n[r];
                if (t.call(e, o, r, n)) return r;
                r++
            }
            return -1
        }
    }), Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
        value: function(t, n) {
            if (null == this) throw new TypeError('"this" is null or not defined');
            var i = Object(this),
                e = i.length >>> 0;
            if (0 === e) return !1;
            var r = 0 | n,
                o = Math.max(r >= 0 ? r : e - Math.abs(r), 0);

            function u(t, n) { return t === n || "number" == typeof t && "number" == typeof n && isNaN(t) && isNaN(n) }
            for (; o < e;) {
                if (u(i[o], t)) return !0;
                o++
            }
            return !1
        }
    }), String.prototype.includes || (String.prototype.includes = function(t, n) { return "number" != typeof n && (n = 0), !(n + t.length > this.length) && -1 !== this.indexOf(t, n) }), Object.values || (Object.values = function(t) { return Object.keys(t).map((function(n) { return t[n] })) });
    var u, a, s, c, f = { object: !0, symbol: !0 },
        l = function(t) { return null != t },
        d = Object.keys,
        h = function() { try { return Object.keys("primitive"), !0 } catch (t) { return !1 } }() ? Object.keys : function(t) { return d(l(t) ? Object(t) : t) },
        v = function(t) { if (!l(t)) throw new TypeError("Cannot use null or undefined"); return t },
        p = Math.max,
        m = function() { var t, n = Object.assign; return "function" == typeof n && (n(t = { foo: "raz" }, { bar: "dwa" }, { trzy: "trzy" }), t.foo + t.bar + t.trzy === "razdwatrzy") }() ? Object.assign : function(t, n) { var i, e, r, o = p(arguments.length, 2); for (t = Object(v(t)), r = function(e) { try { t[e] = n[e] } catch (t) { i || (i = t) } }, e = 1; e < o; ++e) n = arguments[e], h(n).forEach(r); if (void 0 !== i) throw i; return t },
        w = Array.prototype.forEach,
        b = Object.create,
        g = function(t, n) { var i; for (i in t) n[i] = t[i] },
        y = function(t) { var n = b(null); return w.call(arguments, (function(t) { l(t) && g(Object(t), n) })), n },
        _ = function(t) { return "function" == typeof t },
        k = "razdwatrzy",
        E = String.prototype.indexOf,
        T = "function" == typeof k.contains && !0 === k.contains("dwa") && !1 === k.contains("foo") ? String.prototype.contains : function(t) { return E.call(this, t, arguments[1]) > -1 },
        S = i((function(t) {
            (t.exports = function(t, n) { var i, e, r, o, u; return arguments.length < 2 || "string" != typeof t ? (o = n, n = t, t = null) : o = arguments[2], null == t ? (i = r = !0, e = !1) : (i = T.call(t, "c"), e = T.call(t, "e"), r = T.call(t, "w")), u = { value: n, configurable: i, enumerable: e, writable: r }, o ? m(y(o), u) : u }).gs = function(t, n, i) { var e, r, o, u; return "string" != typeof t ? (o = i, i = n, n = t, t = null) : o = arguments[3], null == n ? n = void 0 : _(n) ? null == i ? i = void 0 : _(i) || (o = i, i = void 0) : (o = n, n = i = void 0), null == t ? (e = !0, r = !1) : (e = T.call(t, "c"), r = T.call(t, "e")), u = { get: n, set: i, configurable: e, enumerable: r }, o ? m(y(o), u) : u }
        })),
        x = function(t) { if (! function(t) { return !!t && ("symbol" == typeof t || !!t.constructor && "Symbol" === t.constructor.name && "Symbol" === t[t.constructor.toStringTag]) }(t)) throw new TypeError(t + " is not a symbol"); return t },
        M = Object.create,
        A = Object.defineProperties,
        C = Object.defineProperty,
        R = Object.prototype,
        O = M(null);
    if ("function" == typeof Symbol) { u = Symbol; try { String(u()), c = !0 } catch (t) {} }
    var I = function() { var t = M(null); return function(n) { for (var i, e, r = 0; t[n + (r || "")];) ++r; return t[n += r || ""] = !0, C(R, i = "@@" + n, S.gs(null, (function(t) { e || (e = !0, C(this, i, S(t)), e = !1) }))), i } }();
    s = function(t) { if (this instanceof s) throw new TypeError("TypeError: Symbol is not a constructor"); return a(t) };
    var j = a = function t(n) { var i; if (this instanceof t) throw new TypeError("TypeError: Symbol is not a constructor"); return c ? u(n) : (i = M(s.prototype), n = void 0 === n ? "" : String(n), A(i, { F: S("", n), U: S("", I(n)) })) };
    A(a, {
        for: S((function(t) { return O[t] ? O[t] : O[t] = a(String(t)) })),
        keyFor: S((function(t) {
            var n;
            for (n in x(t), O)
                if (O[n] === t) return n
        })),
        hasInstance: S("", u && u.hasInstance || a("hasInstance")),
        isConcatSpreadable: S("", u && u.isConcatSpreadable || a("isConcatSpreadable")),
        iterator: S("", u && u.iterator || a("iterator")),
        match: S("", u && u.match || a("match")),
        replace: S("", u && u.replace || a("replace")),
        search: S("", u && u.search || a("search")),
        species: S("", u && u.species || a("species")),
        split: S("", u && u.split || a("split")),
        toPrimitive: S("", u && u.toPrimitive || a("toPrimitive")),
        toStringTag: S("", u && u.toStringTag || a("toStringTag")),
        unscopables: S("", u && u.unscopables || a("unscopables"))
    }), A(s.prototype, { constructor: S(a), toString: S("", (function() { return this.U })) }), A(a.prototype, { toString: S((function() { return "Symbol (" + x(this).F + ")" })), valueOf: S((function() { return x(this) })) }), C(a.prototype, a.toPrimitive, S("", (function() { var t = x(this); return "symbol" == typeof t ? t : t.toString() }))), C(a.prototype, a.toStringTag, S("c", "Symbol")), C(s.prototype, a.toStringTag, S("c", a.prototype[a.toStringTag])), C(s.prototype, a.toPrimitive, S("c", a.prototype[a.toPrimitive]));
    var D = function() {
            var t;
            if ("function" != typeof Symbol) return !1;
            t = Symbol("test symbol");
            try { String(t) } catch (t) { return !1 }
            return !!f[typeof Symbol.iterator] && !!f[typeof Symbol.toPrimitive] && !!f[typeof Symbol.toStringTag]
        }() ? Symbol : j,
        L = window.Map || function() {
            var t, n, i, e = function() { n = [], i = [] },
                r = function(i) { return -1 < (t = n.indexOf(i)) };
            return e(), {get size() { return n.length },
                has: r,
                clear: e,
                get: function(t) { return i[n.indexOf(t)] },
                keys: function() { return n.slice() },
                values: function() { return i.slice() },
                entries: function() { return n.map((function(t, n) { return [t, i[n]] })) },
                delete: function(e) { return r(e) && n.splice(t, 1) && !!i.splice(t, 1) },
                forEach: function(t, e) {
                    var r = this;
                    i.forEach((function(i, o) { return t.call(e, i, n[o], r) }))
                },
                set: function(e, o) { return r(e) ? i[t] = o : i[n.push(e) - 1] = o, this }
            }
        },
        P = window.WeakMap || function() {
            var t = Object.defineProperty,
                n = Date.now() % 1e9,
                i = function() { this.name = "__st" + (1e9 * Math.random() >>> 0) + n++ + "__" };
            return i.prototype.set = function(n, i) { if ("object" !== V(n) && "function" != typeof n) throw new TypeError("Invalid value used as weak map key"); var e = n[this.name]; return e && e[0] === n ? e[1] = i : t(n, this.name, { value: [n, i], writable: !0 }), this }, i.prototype.get = function(t) { var n; return (n = t[this.name]) && n[0] === t ? n[1] : void 0 }, i.prototype.delete = function(t) { var n = t[this.name]; return !(!n || n[0] !== t || (n[0] = n[1] = void 0, 0)) }, i.prototype.has = function(t) { var n = t[this.name]; return !!n && n[0] === t }, i
        }(),
        N = window.Array.from,
        F = [1];
    "function" == typeof N && N(F) === F && (N = !1);
    var U = N || function(t) { return [].slice.call(t, 0) };

    function V(t) { return (V = "function" == typeof D && "symbol" == typeof D.iterator ? function(t) { return typeof t } : function(t) { return t && "function" == typeof D && t.constructor === D && t !== D.prototype ? "symbol" : typeof t })(t) }

    function B(t, n) {
        for (var i = 0; i < n.length; i++) {
            var e = n[i];
            e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(t, e.key, e)
        }
    }

    function H(t, n, i) { return n && B(t.prototype, n), i && B(t, i), t }

    function q(t, n, i) { return n in t ? Object.defineProperty(t, n, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : t[n] = i, t }

    function W(t, n) {
        var i = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var e = Object.getOwnPropertySymbols(t);
            n && (e = e.filter((function(n) { return Object.getOwnPropertyDescriptor(t, n).enumerable }))), i.push.apply(i, e)
        }
        return i
    }

    function z(t) {
        for (var n = 1; n < arguments.length; n++) {
            var i = null != arguments[n] ? arguments[n] : {};
            n % 2 ? W(Object(i), !0).forEach((function(n) { q(t, n, i[n]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : W(Object(i)).forEach((function(n) { Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(i, n)) }))
        }
        return t
    }

    function G(t, n) { t.prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n }

    function $(t) { return ($ = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) { return t.__proto__ || Object.getPrototypeOf(t) })(t) }

    function K(t, n) { return (K = Object.setPrototypeOf || function(t, n) { return t.__proto__ = n, t })(t, n) }

    function Y() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0 } catch (t) { return !1 } }

    function J(t, n, i) {
        return (J = Y() ? Reflect.construct : function(t, n, i) {
            var e = [null];
            e.push.apply(e, n);
            var r = new(Function.bind.apply(t, e));
            return i && K(r, i.prototype), r
        }).apply(null, arguments)
    }

    function X(t) {
        var n = "function" == typeof L ? new L : void 0;
        return (X = function(t) {
            if (null === t || ! function(t) { return -1 !== Function.toString.call(t).indexOf("[native code]") }(t)) return t;
            if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
            if (void 0 !== n) {
                if (n.has(t)) return n.get(t);
                n.set(t, i)
            }

            function i() { return J(t, arguments, $(this).constructor) }
            return i.prototype = Object.create(t.prototype, { constructor: { value: i, enumerable: !1, writable: !0, configurable: !0 } }), K(i, t)
        })(t)
    }

    function Z(t) { if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return t }

    function Q(t, n) {
        return function(t) { if (Array.isArray(t)) return t }(t) || function(t, n) {
            if (D.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) {
                var i = [],
                    e = !0,
                    r = !1,
                    o = void 0;
                try { for (var u, a = t[D.iterator](); !(e = (u = a.next()).done) && (i.push(u.value), !n || i.length !== n); e = !0); } catch (t) { r = !0, o = t } finally { try { e || null == a.return || a.return() } finally { if (r) throw o } }
                return i
            }
        }(t, n) || function() { throw new TypeError("Invalid attempt to destructure non-iterable instance") }()
    }

    function tt(t) { return function(t) { if (Array.isArray(t)) { for (var n = 0, i = new Array(t.length); n < t.length; n++) i[n] = t[n]; return i } }(t) || function(t) { if (D.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return U(t) }(t) || function() { throw new TypeError("Invalid attempt to spread non-iterable instance") }() }
    var nt = i((function(t, n) {
        t.exports = function(t) {
            var n = {};
            return (t = t || {}).prependOn = function(n, i) { return t.on(n, i, !0) }, t.eventNames = function() { return Object.keys(n) }, t.on = function(i, e, r) {
                for (var o = 0, u = (i = [].concat(i)).length; o < u; o++) {
                    var a = i[o];
                    if (!a) throw new Error("Tried to listen for an undefined event.");
                    n[a] || (n[a] = []), r ? n[a].unshift(e) : n[a].push(e)
                }
                return t
            }, t.once = function(n, i, e) {
                function r() { i.apply(t.off(n, r), arguments) }
                return r.handler = i, t.on(n, r, e)
            }, t.off = function(i, e) {
                if (!i) return n = {}, t;
                for (var r = 0, o = (i = [].concat(i)).length; r < o; r++) {
                    var u = i[r];
                    if (!u) throw new Error("Tried to remove an undefined event.");
                    if (u in n)
                        if (e) {
                            var a = n[u].indexOf(e);
                            if (-1 === a)
                                for (var s = 0, c = n[u].length; s < c; s++)
                                    if (n[u][s].handler === e) { a = r; break }
                            if (-1 === a) return t;
                            n[u].splice(a, 1)
                        } else delete n[u]
                }
                return t
            }, t.fire = function(i) {
                if (!i) throw new Error("Tried to fire an undefined event.");
                if (i in n)
                    for (var e = n[i].slice(0), r = 0, o = e.length; r < o; r++)
                        if (e[r].apply(t, e.slice.call(arguments, 1)), t.V) { delete t.V; break }
                return t
            }, t.halt = function() { return t.V = !0, t }, t
        }
    }));

    function it(t) {
        return function(n) {
            for (var i = arguments.length, e = new Array(i > 1 ? i - 1 : 0), r = 1; r < i; r++) e[r - 1] = arguments[r];
            return e.forEach((function(i) {
                for (var e in i) {
                    var r = Object.getOwnPropertyDescriptor(i, e);
                    Object.defineProperty(n, e, Object.assign(r, t))
                }
            })), n
        }
    }
    var et = it({ enumerable: !1, configurable: !0, writeable: !1 }),
        rt = it({ enumerable: !1, configurable: !1, writeable: !1 }),
        ot = it({ enumerable: !0, configurable: !0, writeable: !1 }),
        ut = "",
        at = { defer: !0, async: !0 };

    function st(t, n) {
        n = Object.assign(at, n);
        var i = window.vpimport__ = window.vpimport__ || { cache: {} };
        if (i.cache[t]) return i.cache[t].H;
        var e = new r((function(e, r) {
            var o = document.getElementsByTagName("head")[0],
                u = document.createElement("script");
            u.src = ut + t, u.defer = n.defer, u.async = n.async, u.onreadystatechange = u.onload = function() {
                var n = Object.keys(i).filter((function(t) { return "cache" !== t }))[0];
                i.cache[t].W = i[n], delete i[n], e(i.cache[t].W), o.removeChild(u)
            }, u.onerror = function(n) { r(n), delete i.cache[t], o.removeChild(u) }, o.appendChild(u)
        }));
        return i.cache[t] = { H: e }, e
    }

    function ct(t) {
        for (var n = function(t) { return t && "object" === V(t) }, i = arguments.length, e = new Array(i > 1 ? i - 1 : 0), r = 1; r < i; r++) e[r - 1] = arguments[r];
        return e.reduce((function(t, i) {
            return Object.keys(i || {}).forEach((function(e) {
                var r = t[e],
                    o = i[e];
                r && void 0 === o || (Array.isArray(o) ? t[e] = (r || []).concat(o) : n(o) ? t[e] = ct({}, r, o) : t[e] = o)
            })), t
        }), t)
    }

    function ft() { var t, n, i = new r((function(i, e) { t = i, n = e })); return i.resolve = t, i.reject = n, i }

    function lt(t, n) {
        for (var i = t, e = 0; e < n.length; e++)
            if (n.start(e) <= t && n.end(e) >= t) { i = n.end(e); break }
        return i - t
    }

    function dt(t, n) { if (!n || !n.length) return 0; if (1 === n.length && n.end(0) - n.start(0) < 1e-6) return 0; for (var i = 0, e = n.length - 1; e >= 0 && n.end(e) > t; --e) i += n.end(e) - Math.max(n.start(e), t); return i }

    function ht(t) {
        return "string" != typeof t ? {} : t.replace("?", "").split("&").reduce((function(t, n) {
            if (n.length > 0) {
                var i = Q(n.split("="), 2),
                    e = i[0],
                    r = i[1];
                t[e] = decodeURIComponent(r)
            }
            return t
        }), {})
    }

    function vt(t) { var n = document.createElement("a"); return n.href = t, n }

    function pt(t, n) { var i = function(t) { if ("object" !== V(t)) return ""; var n = []; for (var i in t) t.hasOwnProperty(i) && n.push(encodeURIComponent(i) + "=" + encodeURIComponent(t[i])); return n.length ? n.join("&") : "" }(n); return "".concat(t).concat(i ? "?".concat(i) : "") }

    function mt(t) { var n = t.split("://"); if (2 !== n.length) return null; var i = n[1].split("/"); if (i.length > 1) return i[0]; var e = n[1].split("?"); if (e.length > 1) return e[0]; var r = n[1].split("#"); return r.length > 1 ? r[0] : n[1] }

    function wt(t, n, i) {
        switch (i.length) {
            case 0:
                return t.call(n);
            case 1:
                return t.call(n, i[0]);
            case 2:
                return t.call(n, i[0], i[1]);
            case 3:
                return t.call(n, i[0], i[1], i[2])
        }
        return t.apply(n, i)
    }

    function bt(t) { return t }
    var gt = Math.max;

    function yt(t, n, i) {
        return n = gt(void 0 === n ? t.length - 1 : n, 0),
            function() {
                for (var e = arguments, r = -1, o = gt(e.length - n, 0), u = Array(o); ++r < o;) u[r] = e[n + r];
                r = -1;
                for (var a = Array(n + 1); ++r < n;) a[r] = e[r];
                return a[n] = i(u), wt(t, this, a)
            }
    }

    function _t(t) { return function() { return t } }
    var kt = "object" == ("undefined" == typeof global ? "undefined" : V(global)) && global && global.Object === Object && global,
        Et = "object" == ("undefined" == typeof self ? "undefined" : V(self)) && self && self.Object === Object && self,
        Tt = kt || Et || Function("return this")(),
        St = Tt.Symbol,
        xt = Object.prototype,
        Mt = xt.hasOwnProperty,
        At = xt.toString,
        Ct = St ? St.toStringTag : void 0,
        Rt = Object.prototype.toString,
        Ot = St ? St.toStringTag : void 0;

    function It(t) {
        return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : Ot && Ot in Object(t) ? function(t) {
            var n = Mt.call(t, Ct),
                i = t[Ct];
            try { t[Ct] = void 0; var e = !0 } catch (t) {}
            var r = At.call(t);
            return e && (n ? t[Ct] = i : delete t[Ct]), r
        }(t) : function(t) { return Rt.call(t) }(t)
    }

    function jt(t) { var n = V(t); return null != t && ("object" == n || "function" == n) }

    function Dt(t) { if (!jt(t)) return !1; var n = It(t); return "[object Function]" == n || "[object GeneratorFunction]" == n || "[object AsyncFunction]" == n || "[object Proxy]" == n }
    var Lt = Tt["G"],
        Pt = function() { var t = /[^.]+$/.exec(Lt && Lt.keys && Lt.keys.IE_PROTO || ""); return t ? "Symbol(src)_1." + t : "" }(),
        Nt = Function.prototype.toString;

    function Ft(t) { if (null != t) { try { return Nt.call(t) } catch (t) {} try { return t + "" } catch (t) {} } return "" }
    var Ut = /^\[object .+?Constructor\]$/,
        Vt = Function.prototype,
        Bt = Object.prototype,
        Ht = Vt.toString,
        qt = Bt.hasOwnProperty,
        Wt = RegExp("^" + Ht.call(qt).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

    function zt(t, n) { var i = function(t, n) { return null == t ? void 0 : t[n] }(t, n); return function(t) { return !(!jt(t) || function(t) { return !!Pt && Pt in t }(t)) && (Dt(t) ? Wt : Ut).test(Ft(t)) }(i) ? i : void 0 }
    var Gt = function() { try { var t = zt(Object, "defineProperty"); return t({}, "", {}), t } catch (t) {} }(),
        $t = Gt ? function(t, n) { return Gt(t, "toString", { configurable: !0, enumerable: !1, value: _t(n), writable: !0 }) } : bt,
        Kt = Date.now,
        Yt = function(t) {
            var n = 0,
                i = 0;
            return function() {
                var e = Kt(),
                    r = 16 - (e - i);
                if (i = e, r > 0) { if (++n >= 800) return arguments[0] } else n = 0;
                return t.apply(void 0, arguments)
            }
        }($t);

    function Jt(t, n) { return Yt(yt(t, n, bt), t + "") }

    function Xt(t, n) { return t === n || t != t && n != n }

    function Zt(t, n) {
        for (var i = t.length; i--;)
            if (Xt(t[i][0], n)) return i;
        return -1
    }
    var Qt = Array.prototype.splice;

    function tn(t) {
        var n = -1,
            i = null == t ? 0 : t.length;
        for (this.clear(); ++n < i;) {
            var e = t[n];
            this.set(e[0], e[1])
        }
    }
    tn.prototype.clear = function() { this.$ = [], this.size = 0 }, tn.prototype.delete = function(t) {
        var n = this.$,
            i = Zt(n, t);
        return !(i < 0 || (i == n.length - 1 ? n.pop() : Qt.call(n, i, 1), --this.size, 0))
    }, tn.prototype.get = function(t) {
        var n = this.$,
            i = Zt(n, t);
        return i < 0 ? void 0 : n[i][1]
    }, tn.prototype.has = function(t) { return Zt(this.$, t) > -1 }, tn.prototype.set = function(t, n) {
        var i = this.$,
            e = Zt(i, t);
        return e < 0 ? (++this.size, i.push([t, n])) : i[e][1] = n, this
    };
    var nn = zt(Tt, "Map"),
        en = zt(Object, "create"),
        rn = Object.prototype.hasOwnProperty,
        on = Object.prototype.hasOwnProperty;

    function un(t) {
        var n = -1,
            i = null == t ? 0 : t.length;
        for (this.clear(); ++n < i;) {
            var e = t[n];
            this.set(e[0], e[1])
        }
    }

    function an(t, n) { var i = t.$; return function(t) { var n = V(t); return "string" == n || "number" == n || "symbol" == n || "boolean" == n ? "__proto__" !== t : null === t }(n) ? i["string" == typeof n ? "string" : "hash"] : i.map }

    function sn(t) {
        var n = -1,
            i = null == t ? 0 : t.length;
        for (this.clear(); ++n < i;) {
            var e = t[n];
            this.set(e[0], e[1])
        }
    }

    function cn(t) {
        var n = this.$ = new tn(t);
        this.size = n.size
    }

    function fn(t, n, i) { "__proto__" == n && Gt ? Gt(t, n, { configurable: !0, enumerable: !0, value: i, writable: !0 }) : t[n] = i }

    function ln(t, n, i) {
        (void 0 === i || Xt(t[n], i)) && (void 0 !== i || n in t) || fn(t, n, i)
    }
    un.prototype.clear = function() { this.$ = en ? en(null) : {}, this.size = 0 }, un.prototype.delete = function(t) { var n = this.has(t) && delete this.$[t]; return this.size -= n ? 1 : 0, n }, un.prototype.get = function(t) { var n = this.$; if (en) { var i = n[t]; return "__lodash_hash_undefined__" === i ? void 0 : i } return rn.call(n, t) ? n[t] : void 0 }, un.prototype.has = function(t) { var n = this.$; return en ? void 0 !== n[t] : on.call(n, t) }, un.prototype.set = function(t, n) { var i = this.$; return this.size += this.has(t) ? 0 : 1, i[t] = en && void 0 === n ? "__lodash_hash_undefined__" : n, this }, sn.prototype.clear = function() { this.size = 0, this.$ = { hash: new un, map: new(nn || tn), string: new un } }, sn.prototype.delete = function(t) { var n = an(this, t).delete(t); return this.size -= n ? 1 : 0, n }, sn.prototype.get = function(t) { return an(this, t).get(t) }, sn.prototype.has = function(t) { return an(this, t).has(t) }, sn.prototype.set = function(t, n) {
        var i = an(this, t),
            e = i.size;
        return i.set(t, n), this.size += i.size == e ? 0 : 1, this
    }, cn.prototype.clear = function() { this.$ = new tn, this.size = 0 }, cn.prototype.delete = function(t) {
        var n = this.$,
            i = n.delete(t);
        return this.size = n.size, i
    }, cn.prototype.get = function(t) { return this.$.get(t) }, cn.prototype.has = function(t) { return this.$.has(t) }, cn.prototype.set = function(t, n) {
        var i = this.$;
        if (i instanceof tn) {
            var e = i.$;
            if (!nn || e.length < 199) return e.push([t, n]), this.size = ++i.size, this;
            i = this.$ = new sn(e)
        }
        return i.set(t, n), this.size = i.size, this
    };
    var dn = function(t, n, i) { for (var e = -1, r = Object(t), o = i(t), u = o.length; u--;) { var a = o[++e]; if (!1 === n(r[a], a, r)) break } return t },
        hn = "object" == (void 0 === t ? "undefined" : V(t)) && t && !t.nodeType && t,
        vn = hn && "object" == ("undefined" == typeof module ? "undefined" : V(module)) && module && !module.nodeType && module,
        pn = vn && vn.exports === hn ? Tt.Buffer : void 0,
        mn = pn ? pn.allocUnsafe : void 0;

    function wn(t, n) {
        if (n) return t.slice();
        var i = t.length,
            e = mn ? mn(i) : new t.constructor(i);
        return t.copy(e), e
    }
    var bn = Tt.Uint8Array;

    function gn(t) { var n = new t.constructor(t.byteLength); return new bn(n).set(new bn(t)), n }

    function yn(t, n) { var i = n ? gn(t.buffer) : t.buffer; return new t.constructor(i, t.byteOffset, t.length) }

    function _n(t, n) {
        var i = -1,
            e = t.length;
        for (n || (n = Array(e)); ++i < e;) n[i] = t[i];
        return n
    }
    var kn = Object.create,
        En = function() {
            function t() {}
            return function(n) {
                if (!jt(n)) return {};
                if (kn) return kn(n);
                t.prototype = n;
                var i = new t;
                return t.prototype = void 0, i
            }
        }();

    function Tn(t, n) { return function(i) { return t(n(i)) } }
    var Sn = Tn(Object.getPrototypeOf, Object),
        xn = Object.prototype;

    function Mn(t) { var n = t && t.constructor; return t === ("function" == typeof n && n.prototype || xn) }

    function An(t) { return "function" != typeof t.constructor || Mn(t) ? {} : En(Sn(t)) }

    function Cn(t) { return null != t && "object" == V(t) }

    function Rn(t) { return Cn(t) && "[object Arguments]" == It(t) }
    var On = Object.prototype,
        In = On.hasOwnProperty,
        jn = On.propertyIsEnumerable,
        Dn = Rn(function() { return arguments }()) ? Rn : function(t) { return Cn(t) && In.call(t, "callee") && !jn.call(t, "callee") },
        Ln = Array.isArray;

    function Pn(t) { return "number" == typeof t && t > -1 && t % 1 == 0 && t <= 9007199254740991 }

    function Nn(t) { return null != t && Pn(t.length) && !Dt(t) }
    var Fn = "object" == (void 0 === t ? "undefined" : V(t)) && t && !t.nodeType && t,
        Un = Fn && "object" == ("undefined" == typeof module ? "undefined" : V(module)) && module && !module.nodeType && module,
        Vn = Un && Un.exports === Fn ? Tt.Buffer : void 0,
        Bn = (Vn ? Vn.isBuffer : void 0) || function() { return !1 },
        Hn = Function.prototype,
        qn = Object.prototype,
        Wn = Hn.toString,
        zn = qn.hasOwnProperty,
        Gn = Wn.call(Object);

    function $n(t) { if (!Cn(t) || "[object Object]" != It(t)) return !1; var n = Sn(t); if (null === n) return !0; var i = zn.call(n, "constructor") && n.constructor; return "function" == typeof i && i instanceof i && Wn.call(i) == Gn }
    var Kn = {};

    function Yn(t) { return function(n) { return t(n) } }
    Kn["[object Float32Array]"] = Kn["[object Float64Array]"] = Kn["[object Int8Array]"] = Kn["[object Int16Array]"] = Kn["[object Int32Array]"] = Kn["[object Uint8Array]"] = Kn["[object Uint8ClampedArray]"] = Kn["[object Uint16Array]"] = Kn["[object Uint32Array]"] = !0, Kn["[object Arguments]"] = Kn["[object Array]"] = Kn["[object ArrayBuffer]"] = Kn["[object Boolean]"] = Kn["[object DataView]"] = Kn["[object Date]"] = Kn["[object Error]"] = Kn["[object Function]"] = Kn["[object Map]"] = Kn["[object Number]"] = Kn["[object Object]"] = Kn["[object RegExp]"] = Kn["[object Set]"] = Kn["[object String]"] = Kn["[object WeakMap]"] = !1;
    var Jn = "object" == (void 0 === t ? "undefined" : V(t)) && t && !t.nodeType && t,
        Xn = Jn && "object" == ("undefined" == typeof module ? "undefined" : V(module)) && module && !module.nodeType && module,
        Zn = Xn && Xn.exports === Jn && kt.process,
        Qn = function() { try { return Xn && Xn.require && Xn.require("util").types || Zn && Zn.binding && Zn.binding("util") } catch (t) {} }(),
        ti = Qn && Qn.isTypedArray,
        ni = ti ? Yn(ti) : function(t) { return Cn(t) && Pn(t.length) && !!Kn[It(t)] };

    function ii(t, n) { if (("constructor" !== n || "function" != typeof t[n]) && "__proto__" != n) return t[n] }
    var ei = Object.prototype.hasOwnProperty;

    function ri(t, n, i) {
        var e = t[n];
        ei.call(t, n) && Xt(e, i) && (void 0 !== i || n in t) || fn(t, n, i)
    }

    function oi(t, n, i, e) {
        var r = !i;
        i || (i = {});
        for (var o = -1, u = n.length; ++o < u;) {
            var a = n[o],
                s = e ? e(i[a], t[a], a, i, t) : void 0;
            void 0 === s && (s = t[a]), r ? fn(i, a, s) : ri(i, a, s)
        }
        return i
    }
    var ui = /^(?:0|[1-9]\d*)$/;

    function ai(t, n) { var i = V(t); return !!(n = null == n ? 9007199254740991 : n) && ("number" == i || "symbol" != i && ui.test(t)) && t > -1 && t % 1 == 0 && t < n }
    var si = Object.prototype.hasOwnProperty;

    function ci(t, n) {
        var i = Ln(t),
            e = !i && Dn(t),
            r = !i && !e && Bn(t),
            o = !i && !e && !r && ni(t),
            u = i || e || r || o,
            a = u ? function(t, n) { for (var i = -1, e = Array(t); ++i < t;) e[i] = n(i); return e }(t.length, String) : [],
            s = a.length;
        for (var c in t) !n && !si.call(t, c) || u && ("length" == c || r && ("offset" == c || "parent" == c) || o && ("buffer" == c || "byteLength" == c || "byteOffset" == c) || ai(c, s)) || a.push(c);
        return a
    }
    var fi = Object.prototype.hasOwnProperty;

    function li(t) {
        return Nn(t) ? ci(t, !0) : function(t) {
            if (!jt(t)) return function(t) {
                var n = [];
                if (null != t)
                    for (var i in Object(t)) n.push(i);
                return n
            }(t);
            var n = Mn(t),
                i = [];
            for (var e in t)("constructor" != e || !n && fi.call(t, e)) && i.push(e);
            return i
        }(t)
    }

    function di(t, n, i, e, r) {
        t !== n && dn(n, (function(o, u) {
            if (r || (r = new cn), jt(o)) ! function(t, n, i, e, r, o, u) {
                var a = ii(t, i),
                    s = ii(n, i),
                    c = u.get(s);
                if (c) ln(t, i, c);
                else {
                    var f = o ? o(a, s, i + "", t, n, u) : void 0,
                        l = void 0 === f;
                    if (l) {
                        var d = Ln(s),
                            h = !d && Bn(s),
                            v = !d && !h && ni(s);
                        f = s, d || h || v ? Ln(a) ? f = a : function(t) { return Cn(t) && Nn(t) }(a) ? f = _n(a) : h ? (l = !1, f = wn(s, !0)) : v ? (l = !1, f = yn(s, !0)) : f = [] : $n(s) || Dn(s) ? (f = a, Dn(a) ? f = function(t) { return oi(t, li(t)) }(a) : jt(a) && !Dt(a) || (f = An(s))) : l = !1
                    }
                    l && (u.set(s, f), r(f, s, e, o, u), u.delete(s)), ln(t, i, f)
                }
            }(t, n, u, i, di, e, r);
            else {
                var a = e ? e(ii(t, u), o, u + "", t, n, r) : void 0;
                void 0 === a && (a = o), ln(t, u, a)
            }
        }), li)
    }

    function hi(t, n, i, e, r, o) { return jt(t) && jt(n) && (o.set(n, t), di(t, n, void 0, hi, o), o.delete(n)), t }

    function vi(t) {
        return Jt((function(n, i) {
            var e = -1,
                r = i.length,
                o = r > 1 ? i[r - 1] : void 0,
                u = r > 2 ? i[2] : void 0;
            for (o = t.length > 3 && "function" == typeof o ? (r--, o) : void 0, u && function(t, n, i) { if (!jt(i)) return !1; var e = V(n); return !!("number" == e ? Nn(i) && ai(n, i.length) : "string" == e && n in i) && Xt(i[n], t) }(i[0], i[1], u) && (o = r < 3 ? void 0 : o, r = 1), n = Object(n); ++e < r;) {
                var a = i[e];
                a && t(n, a, e, o)
            }
            return n
        }))
    }
    var pi = vi((function(t, n, i, e) { di(t, n, i, e) })),
        mi = Jt((function(t) { return t.push(void 0, hi), wt(pi, void 0, t) })),
        wi = function() {
            function t(t) { this.K = !1, this.Y = !1, this.J = t, nt(this) }
            H(t, null, [{ key: "displayName", get: function() { return "ExternalDisplay" } }, { key: "supported", get: function() { return !1 } }, { key: "supportedVideoTypes", get: function() { return [] } }]);
            var n = t.prototype;
            return n.showPicker = function() {}, n.getFile = function() {
                var t = this.constructor.displayName.replace("ExternalDisplay", "");
                if (this.J.externalDisplayFiles[t]) return this.J.externalDisplayFiles[t];
                var n = this.constructor.supportedVideoTypes,
                    i = this.J.files.filter((function(t) { return -1 !== n.indexOf(t.mime) })).sort((function(t, i) { return t.mime === i.mime ? t.priority - i.priority : n.indexOf(t.mime) - n.indexOf(i.mime) }));
                if (!i.length) throw new Error("No files available for ".concat(this.constructor.displayName, " external display."));
                return i[0]
            }, H(t, [{ key: "active", get: function() { return this.Y } }, { key: "available", get: function() { return this.K } }, { key: "element", get: function() { return document.createElement("div") } }]), t
        }(),
        bi = { ABORT: "abort", CAN_PLAY: "canplay", CAN_PLAY_THROUGH: "canplaythrough", DURATION_CHANGE: "durationchange", EMPTIED: "emptied", ENDED: "ended", ERROR: "error", LOADED_DATA: "loadeddata", LOADED_METADATA: "loadedmetadata", LOAD_START: "loadstart", PAUSE: "pause", PLAY: "play", PLAYING: "playing", PROGRESS: "progress", RATE_CHANGE: "ratechange", SEEKED: "seeked", SEEKING: "seeking", STALLED: "stalled", SUSPEND: "suspend", TIME_UPDATE: "timeupdate", VOLUME_CHANGE: "volumechange", WAITING: "waiting", WEBKIT_BEGIN_FULLSCREEN: "webkitbeginfullscreen", WEBKIT_END_FULLSCREEN: "webkitendfullscreen", WEBKIT_PRESENTATION_MODE_CHANGED: "webkitpresentationmodechanged" },
        gi = { AVAILABLE: "externaldisplayavailable", UNAVAILABLE: "externaldisplayunavailable", ACTIVATED: "externaldisplayactivated", DEACTIVATED: "externaldisplaydeactivated" },
        yi = { AIRPLAY_AVAILABLE: "available", AIRPLAY_UNAVAILABLE: "unavailable", AIRPLAY_ACTIVATED: "activated", AIRPLAY_DEACTIVATED: "deactivated" },
        _i = { SCANNER_CHANGE: "scannerchange", SCANNER_ERROR: "scannererror", FILE_ERROR: "fileerror", FILE_SRC_UPDATE: "filesrcupdate", DOWNLOAD_START: "downloadstart", DOWNLOAD_END: "downloadend", DOWNLOAD_ERROR: "downloaderror", DOWNLOAD_TIMEOUT: "downloadtimeout", DRM_AUTH_FAILURE: "drmauthfailure", DRM_AUTH_SUCCESS: "drmauthsuccess", DRM_FAILURE: "drmfailure", DRM_OUTPUT_RESTRICTED: "drmoutputrestricted", EME_UNSUPPORTED: "emeunsupported", CURRENT_FILE_CHANGE: "currentfilechange", MEDIA_URL_EXPIRED: "mediaurlexpired", MEDIA_URL_BAD_REQUEST: "mediaurlbadrequest", STREAM_CHANGE: "streamchange", STREAM_CHANGE_START: "streamchangestart", STREAM_BUFFER_START: "streambufferstart", STREAM_BUFFER_END: "streambufferend", DROPPED_FRAMES: "droppedframes", BANDWIDTH: "bandwidth", STREAM_TARGET_CHANGE: "streamtargetchange", PRESENTATION_MODE_CHANGE: "presentationmodechange", CUE_POINT: "cuepoint", BUFFER_OCCUPANCY: "bufferoccupancy", MANIFEST_TIMEOUT: "manifesttimeout", MANIFEST_LOADED: "manifestloaded", STREAMS_LOADED: "streamsloaded", TEXT_SRC_UPDATE: "texttracksrcupdate", TEXT_TRACKS_AVAILABLE: "texttracksavailable", AV_DURATION_MISMATCH: "avdurationmismatch", BUFFER_STARTED: "bufferstarted", BUFFER_ENDED: "bufferended", QUOTA_EXCEEDED_ERROR: "quotaexceedederror", CHAPTER_CUES_UPDATED: "chaptercuesupdated", APPEND_BUFFER_END: "appendbufferend" },
        ki = { STREAM_ONLINE: "livestreamonline", STREAM_OFFLINE: "livestreamoffline" },
        Ei = { CAMERA_UPDATE: "cameraupdate", MOTION_START: "motionstart", MOTION_END: "motionend", SPATIAL_UNSUPPORTED: "spatialunsupported", WEBVR_ENTER: "entervr", WEBVR_EXIT: "exitvr", WEBVR_HARDWARE_AVAILABLE: "webvrhardwareavailable" },
        Ti = { MEDIASESSION_PLAY: "mediasessionplay", MEDIASESSION_PAUSE: "mediasessionpause", MEDIASESSION_SEEK_FORWARD: "mediasessionseekforward", MEDIASESSION_SEEK_BACKWARD: "mediasessionseekbackward" },
        Si = { BRAIN_ML_MODEL_ERR: "brainmlmodelerr", BRAIN_ML_MODEL_NET_ERR: "brainmlmodelresperr", BRAIN_ML_MODEL_TIMEOUT: "brainmlmodeltimeout", BRAIN_ML_SWITCH_TO_SKYFIRE: "brainmlmodelswitchtoskyfire", BRAIN_ML_MODEL_INPUTS: "brainmlmodelinputs" },
        xi = Object.assign({}, bi, gi, yi, _i, Ei, ki, Ti, Si),
        AirPlayExternalDisplay = function(t) {
            function AirPlayExternalDisplay(n) { var i; return (i = t.call(this, n) || this).X = document.createElement("video"), i.X.setAttribute("data-airplay", ""), i.X.setAttribute("x-webkit-airplay", "allow"), i.addVideoEventListeners(), i }
            G(AirPlayExternalDisplay, t), H(AirPlayExternalDisplay, null, [{ key: "displayName", get: function() { return "AirPlayExternalDisplay" } }, { key: "supported", get: function() { return "WebKitPlaybackTargetAvailabilityEvent" in window } }, { key: "supportedVideoTypes", get: function() { return ["application/vnd.apple.mpegurl", "video/mp4"] } }]);
            var n = AirPlayExternalDisplay.prototype;
            return n.addVideoEventListeners = function() {
                var t = this,
                    n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.X;
                n.addEventListener(bi.LOADED_METADATA, (function(n) { t.fire(bi.LOADED_METADATA, n) })), n.addEventListener("webkitplaybacktargetavailabilitychanged", (function(n) {
                    switch (n.availability) {
                        case "available":
                            t.K || (t.K = !0, t.fire(yi.AIRPLAY_AVAILABLE));
                            break;
                        case "not-available":
                            t.K && (t.K = !1, t.fire(yi.AIRPLAY_UNAVAILABLE))
                    }
                })), n.addEventListener("webkitcurrentplaybacktargetiswirelesschanged", (function(n) {
                    if (n.target.webkitCurrentPlaybackTargetIsWireless) return t.Y = !0, void t.fire(yi.AIRPLAY_ACTIVATED);
                    t.Y = !1, t.fire(yi.AIRPLAY_DEACTIVATED)
                }))
            }, n.showPicker = function() {
                var t = this;
                this.X.webkitShowPlaybackTargetPicker(), this.loadMetadata().then((function() { return t.X.webkitShowPlaybackTargetPicker() })).catch((function() {}))
            }, n.loadMetadata = function() { var t = this; return this.X.readyState >= 1 ? r.resolve() : new r((function(n, i) { t.X.addEventListener(bi.LOADED_METADATA, (function() { n() })), t.X.src = t.getFile().src })) }, H(AirPlayExternalDisplay, [{
                key: "element",
                get: function() { return this.X },
                set: function(t) {
                    if (!(t instanceof HTMLVideoElement)) throw new TypeError("The element for AirPlay must be a <video>.");
                    t !== this.X && (this.addVideoEventListeners(t), this.X = t, this.X.setAttribute("x-webkit-airplay", "allow"))
                }
            }]), AirPlayExternalDisplay
        }(wi),
        Mi = navigator.userAgent.toLowerCase();

    function Ai(t) { t = t.toLowerCase(); var n = new RegExp(t).test(Mi); return "safari" === t ? n && new RegExp("version").test(Mi) : n }

    function Ci(t) {
        var n = document.createElement("div"),
            i = t.charAt(0).toUpperCase() + t.slice(1),
            e = (t + " " + ["Webkit", "Moz", "O", "ms"].join(i + " ") + i).split(" ");
        for (var r in e) { var o = e[r]; if (void 0 !== n.style[o]) return o }
        return t
    }
    var Ri = !!Ai("android") && (parseFloat(Mi.replace(/^.* android (\d+)\.(\d+).*$/, "$1.$2")) || !0),
        Oi = window.devicePixelRatio || 1,
        Ii = !(!Ai("windows phone") && !Ai("iemobile")) && (parseFloat(Mi.replace(/^.* windows phone (os )?(\d+)\.(\d+).*$/, "$2.$3")) || !0),
        ji = !!Ai("msie") && parseFloat(Mi.replace(/^.*msie (\d+).*$/, "$1")),
        Di = !!Ai("trident") && parseFloat(Mi.replace(/^.*trident\/(\d+)\.(\d+).*$/, "$1.$2")) + 4,
        Li = !!(Ai("ipad;") || Ai("iphone;") || Ai("ipod touch;")) && parseFloat(Mi.replace(/^.* os (\d+)_(\d+).*$/, "$1.$2")),
        Pi = Ai("opera") || Ai("opr");

    function Ni() { if (!Ai("safari")) return []; var t = Mi.split(" ").find((function(t) { return /version\//.test(t) })); return t ? t.replace("version/", "").split(".").map((function(t) { return parseInt(t, 10) })) : [] }
    var Fi = Ai("safari") && Ai("apple") && !Ai("chrome") && !Ai("android") && Ni()[0] >= 11,
        Ui = { airPlay: "WebKitPlaybackTargetAvailabilityEvent" in window, android: Ri, hasAutoplayPolicy: Ri || Li || Fi || function() { if (!Ai("chrome")) return []; var t = Mi.split(" ").find((function(t) { return Li ? /CriOS\//.test(t) : /chrome\//.test(t) })); return t ? t.replace("chrome/", "").split(".").map((function(t) { return parseInt(t, 10) })) : [] }()[0] >= 66, iOS: Li, mobileAndroid: Ri && Ai("mobile"), browser: { bb10: Ai("bb10"), chrome: Ai("chrome"), firefox: Ai("firefox"), ie: ji || Di, edge: Ai("edge"), opera: Pi, safari: Ai("safari") && Ai("apple") && !Ai("chrome") && !Ai("android") }, devicePixelRatio: Oi, iPhone: Ai("iphone;") || Ai("ipod touch;") || Ai("ipod;"), iPad: Ai("ipad;"), iPadNonRetina: Ai("ipad;") && Oi < 2, mac: Ai("mac os"), pointerEvents: window.navigator.pointerEnabled || window.navigator.msPointerEnabled || !1, svg: !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect, touch: "ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch || Ai("windows phone") || window.navigator.maxTouchPoints > 1 || window.navigator.msMaxTouchPoints || !1, transformProperty: Ci("transform"), transitionProperty: Ci("transition"), webp: function() { var t = document.createElement("canvas"); return !(!t.getContext || !t.getContext("2d")) && 0 === t.toDataURL("image/webp").indexOf("data:image/webp") }(), windowsPhone: Ii },
        Vi = /mac os x 10_13/.test(Mi),
        Bi = Ui.iOS && Ui.iOS >= 11,
        Hi = Ui.iPhone && 812 === window.screen.availHeight && 375 === window.screen.availWidth,
        qi = Ui.iPhone && 896 === window.screen.availHeight && 414 === window.screen.availWidth,
        Wi = Ui.iPad && 1112 === window.screen.availWidth && 834 === window.screen.availHeight,
        zi = Ui.iPad && 834 === window.screen.availWidth && 1194 === window.screen.availHeight,
        Gi = Ui.iPad && 1024 === window.screen.availWidth && 1366 === window.screen.availHeight,
        $i = Hi || qi || Wi || zi || Gi;

    function Ki() { return !!(Fi && Vi || Fi && Bi) || "undefined" != typeof MediaSource && MediaSource.isTypeSupported('video/mp4; codecs="hvc1"') }

    function Yi() { return !(Ui.iOS || Ui.iPad || Ui.browser.ie) && (!Ai("safari") || Ni()[0] > 11 || 11 === Ni()[0] && (Ni()[2] > 1 || Ni()[1] > 0)) }
    Ui.hevc = Ki(), Ui.hdr = Fi && Bi && $i, Ui.vp9hdr = (window.matchMedia("(color-gamut: p3)").matches || window.matchMedia("(color-gamut: rec2020)").matches) && screen.colorDepth >= 48 && (MediaSource.isTypeSupported('video/webm; codecs="vp09.02.10.10.01.09.16.09.00"') || MediaSource.isTypeSupported('video/webm; codecs="vp09.02.10.10.01.09.16.09.01"') || MediaSource.isTypeSupported('video/webm; codecs="vp09.02.10.10.01.09.18.09.00"') || MediaSource.isTypeSupported('video/webm; codecs="vp09.02.10.10.01.09.18.09.01"')), Ui.av1 = "undefined" != typeof MediaSource && MediaSource.isTypeSupported('video/mp4; codecs="av01.0.31M.08.0.110.01.01.01.0"'), Ui.webvr = !!(window.navigator && "getVRDisplays" in window.navigator), Ui.webxr = !!(window.navigator && "xr" in window.navigator && "supportsSession" in window.navigator.xr), Ui.spatialPlayback = Yi(), Ui.spatialHEVC = !Ui.browser.safari && Yi() && Ki(), Ui.stereoscopic = Ui.spatialPlayback && Ui.mobileAndroid;
    var Ji = /Firefox/.test(navigator.userAgent),
        Xi = /i(Phone|Pad|Pod touch);/.test(navigator.userAgent),
        Zi = /Android/.test(navigator.userAgent),
        Qi = { firefox: Ji, iOS: Xi, android: Zi, androidMobile: Zi && /mobile/.test(navigator.userAgent.toLowerCase()), chrome: function() { var t = navigator.userAgent.match(/Chrom(?:e|ium)\/([0-9]+)\.([0-9]+)\./); return !!t && { major: t[1], minor: t[2] } }() };

    function te(t, n) { var i, e = 0; return q(i = {}, D.iterator, (function() { return this })), q(i, "next", (function() { return e < t.length ? { done: !1, value: n ? [t[e], n[e++]] : t[e++] } : { done: !0 } })), i }
    var ne = function(t) {
        for (var n = 0, i = this.length; n < i; n++)
            if (this[n].id === "".concat(t)) return this[n];
        return null
    };

    function ie() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []; return t.item = function(t) { return this[t] }, t.getTrackById = ne, t }

    function ee() { return void 0 !== window.performance && "function" == typeof window.performance.now ? window.performance.now() : Date.now() }

    function re(t) { return ee() - t }

    function oe() { return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (function(t) { return (t ^ (16 * Math.random() >> t) / 4).toString(16) })) }

    function ue(t) { for (var n = window.atob(t), i = n.length, e = new Uint8Array(i), r = 0; r < i; r++) e[r] = n.charCodeAt(r); return e }

    function ae(t) { return ue(t).buffer }

    function se(t, n, i, e) {
        var r = 0,
            o = 0,
            u = t,
            a = n,
            s = i / e;
        return u / a >= s ? (o = a, r = (s * a).toFixed(2)) : (r = u, o = (u / s).toFixed(2)), { width: r, height: o, left: Math.max((u - r) / 2, 0), top: Math.max((a - o) / 2, 0) }
    }

    function ce(t) { var n = [document.fullscreenElement, document.webkitFullscreenElement, document.webkitCurrentFullScreenElement, document.mozFullScreenElement, document.msFullscreenElement].find((function(t) { return void 0 !== t })); return void 0 !== n ? !!n : t.webkitDisplayingFullscreen }

    function fe(t, n) { return ["".concat(t, ';codecs="').concat(n, '"'), "".concat(t, ';codecs="').concat("avc1.42E01E,mp4a.40.2", '"')].find(MediaSource.isTypeSupported) || t }

    function le(t) { var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3; if (t = parseFloat(t), isNaN(t)) return 0; var i = Math.pow(10, n); return Math.round(t * i) / i }

    function de(t, n) { return t && t.tests && t.tests[n] ? t.tests[n] : null }

    function he(t) { return t && "ML" === t.displayName }
    var TelecineError = function(t, n) { this.name = t, this.message = n, Object.freeze(this) },
        ve = new P,
        pe = function() {
            function t(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    i = parseFloat(t);
                if (isNaN(i)) throw new TypeError("Time must be a number.");
                if (i < 0) throw new TypeError("Time must be a positive number.");
                this.time = t, this.data = n, this.id = oe();
                try {
                    var e = "undefined" == typeof VTTCue ? TextTrackCue : VTTCue;
                    this.vttCue = new e(t, t + .25, JSON.stringify(n)), this.vttCue.id = this.id
                } catch (t) { throw new TelecineError("CuePointsNotSupported", "Cue points are not supported in this browser.") }
                ve.set(this.vttCue, this), Object.freeze(this)
            }
            return t.fromVTTCue = function(n) { if (ve.has(n)) return ve.get(n); var i = {}; try { i = JSON.parse(n.text) } catch (t) {} return new t(n.startTime, i) }, t
        }();

    function me(t, n, i) { var e; try { document.removeChild({}) } catch (r) { e = Object.create(Object.getPrototypeOf(r), { name: { value: n, configurable: !0, writable: !0 }, code: { value: t, configurable: !0, writable: !0 }, message: { value: i, configurable: !0, writable: !0 }, toString: { value: function() { return "".concat(n, ": DOM Exception ").concat(t) }, configurable: !0, writable: !0 } }) } return Object.freeze(e) }
    var we = function(t, n) { if (!t || void 0 === t[n]) throw me(1, "INDEX_SIZE_ERR"); return t[n] };

    function be() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        return Object.freeze(q({get length() { return t.length }, start: function(n) { return we(t, n) }, end: function(t) { return we(n, t) } }, D.iterator, (function() { return te(t, n) })))
    }
    be.from = function(t) { if (!(t instanceof TimeRanges)) throw new TypeError("Can only create a TelecineTimeRange from a TimeRanges object."); for (var n = [], i = [], e = 0, r = t.length; e < r; e++) n.push(t.start(e)), i.push(t.end(e)); return be(n, i) };
    var ge = document.createElement("video"),
        ye = { "application/vnd.apple.mpegurl": "application/vnd.apple.mpegurl", "video/mp4": 'video/mp4; codecs="avc1.64001E"', "video/webm": 'video/webm; codecs="vp8, vorbis"', "video/x-flv": 'video/x-flv; codecs="vp6"' },
        _e = function() { var t = "undefined" == typeof TextTrack ? {} : TextTrack; return { disabled: "DISABLED" in t ? t.DISABLED : "disabled", hidden: "HIDDEN" in t ? t.HIDDEN : "hidden", showing: "SHOWING" in t ? t.SHOWING : "showing" } }(),
        ke = function() { var t = document.createElement("track"); return "track" in t && "oncuechange" in t.track }(),
        Ee = new P,
        Te = function() {
            function t(t) {
                var n = this,
                    i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                this.Z = t, this.tt = i, this.nt = null, this.it = null, this.et = [], nt(this), this.on("play", (function() { return n.rt() }));
                var e = t.querySelector("video");
                e || ((e = document.createElement("video")).preload = "none", this.Z.appendChild(e)), e.setAttribute("tabindex", "-1"), this.J = e, i.playRequest && (this.ot = i.playRequest, this.ot.video = e), i.htmlScanner && i.htmlScanner.controls && (this.J.controls = !0), this.ut = this.handleVideoEvent.bind(this), this.addVideoEventListeners(), this.at = "none", this.st = !1, this.ct = !1, this.ft = -1
            }
            H(t, null, [{ key: "displayName", get: function() { return "HTMLScanner" } }, { key: "supported", get: function() { return t.supportedVideoTypes.length > 0 } }, {
                key: "supportedVideoTypes",
                get: function() {
                    var t = [];
                    if ("function" != typeof ge.canPlayType) return t;
                    for (var n in ye) {
                        var i = ye[n];
                        Ui.android && "application/vnd.apple.mpegurl" === n || (Ui.android && !Ui.mobileAndroid && "video/mp4" === n && Ui.android instanceof String ? parseInt(Ui.android.split(".")[0], 10) > 3 && t.push(n) : ge.canPlayType(i).replace(/^no$/, "") && t.push(n))
                    }
                    return t
                }
            }, { key: "supportedAudioTypes", get: function() { return [] } }, { key: "supportedExternalDisplays", get: function() { return [AirPlayExternalDisplay] } }, { key: "supportsSettingVolume", get: function() { if (Ui.android) return !1; var t = ge.volume; return ge.volume = .5 * t, ge.volume !== t } }, { key: "supportsTextTracks", get: function() { return void 0 !== ge.textTracks && ge.textTracks instanceof TextTrackList } }, {
                key: "supportsPlaybackRate",
                get: function() {
                    if (Ui.android && Qi.chrome && Qi.chrome.major < 52) return !1;
                    var t = ge.playbackRate;
                    ge.playbackRate = .5 * t;
                    var n = t !== ge.playbackRate;
                    return ge.playbackRate = t, n
                }
            }]);
            var n = t.prototype;
            return n.deactivate = function() { this.nt && (this.nt.off("filesrcupdate"), this.nt.off("texttracksrcupdate")), this.removeVideoEventListeners(), this.removeSnapshot(), this.J.style.display = "none" }, n.reactivate = function() { this.addVideoEventListeners(), this.J.style.display = "" }, n.addVideoEventListeners = function() {
                var t = this,
                    n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.J;
                Object.keys(bi).forEach((function(i) {
                    var e = bi[i];
                    n.addEventListener(e, t.ut)
                }))
            }, n.removeVideoEventListeners = function() {
                var t = this,
                    n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.J;
                Object.keys(bi).forEach((function(i) {
                    var e = bi[i];
                    n.removeEventListener(e, t.ut)
                }))
            }, n.play = function(t) { var n = this; return this.ot.start(t).catch((function(t) { throw n.lt(t), t })) }, n.lt = function(t) { this.fire(bi.ERROR, new TelecineError(t.name, t.message)) }, n.pause = function() { this.ot.cancel(), this.J.pause() }, n.onpause = function() {}, n.ontimeupdate = function() { this.ft = this.currentTime }, n.addTextTrack = function(t) {
                var n, i, e = this;
                t.src ? ((n = document.createElement("track")).kind = t.kind, n.src = t.src, n.id = "telecine-track-".concat(t.id), n.srclang = t.language, n.label = t.label, this.J.appendChild(n), i = n.track) : (i = this.J.addTextTrack(t.kind, t.label, t.language), this.dt = this.dt || {}, this.dt["telecine-track-".concat(t.id)] = i), i.addEventListener("cuechange", (function() { return t.dispatchEvent("cuechange") })), this.J.addEventListener("timeupdate", (function() { ce(e.J) && (t.mode = i.mode) }));
                var r = function() { var n = Qi.iOS && ce(e.J);!t.ht || n ? t.mode = i.mode : i.mode = _e[t.mode] },
                    o = [];
                if (n ? n.addEventListener("load", r) : r(), ["loadeddata", "seeking"].forEach((function(t) { e.J.addEventListener(t, r), o.push([t, r]) })), t.ht && (i.mode = _e[t.mode]), !ke) {
                    var u = [],
                        a = function() {
                            if (i && "disabled" !== _e[i.mode]) {
                                if (u.length !== i.activeCues.length) return t.dispatchEvent("cuechange"), void(u = U(i.activeCues));
                                for (var n = 0, e = i.activeCues.length; n < e; n++)
                                    if (i.activeCues[n].startTime !== u[n].startTime) return t.dispatchEvent("cuechange"), void(u = U(i.activeCues))
                            }
                        };
                    this.J.addEventListener("timeupdate", a), o.push(["timeupdate", a])
                }
                return Ee.set(t, o), i
            }, n.removeTextTrack = function(t) {
                var n = this,
                    i = this.J.querySelector("#telecine-track-".concat(t.id));
                i && this.J.removeChild(i);
                var e = Ee.get(t);
                Array.isArray(e) && e.forEach((function(t) {
                    var i = Q(t, 2),
                        e = i[0],
                        r = i[1];
                    n.J.removeEventListener(e, r)
                }))
            }, n.getCuesForTrack = function(t) { var n = this.getTrackById("telecine-track-".concat(t.id)); return n ? U(n.cues) : [] }, n.getActiveCuesForTrack = function(t) { var n = this.getTrackById("telecine-track-".concat(t.id)); return n ? U(n.activeCues) : [] }, n.setModeForTrack = function(t, n) { var i = this.getTrackById("telecine-track-".concat(t.id)); return i && i.mode !== _e[n] && (i.mode = _e[n], ke || "disabled" === n || t.dispatchEvent("cuechange")), this }, n.setSrcForTrack = function(t, n) { var i = this.J.querySelector("#telecine-track-".concat(t.id)); return i && null === i.track.cues && (i.src = n), this }, n.pt = function(t, n) {
                var i, e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                this.wt || (this.wt = this.J.addTextTrack("chapters"), this.wt.mode = "hidden");
                var r = t.timecode,
                    o = e ? e.timecode : n,
                    u = window.VTTCue || window.TextTrackCue;
                try { i = new u(r, o, t.title) } catch (t) { throw new TelecineError("ChaptersNotSupported", "Chapters are not supported in this browser.") }
                i.size = (o - r) / n, i.id = r, this.wt.addCue(i)
            }, n.addChapter = function(t, n) {
                var i = this.video.chapters,
                    e = { timecode: t, title: n };
                i.push(e), i.sort((function(t, n) { return t.timecode - n.timecode }));
                var r = i[i.indexOf(e) + 1];
                this.pt(e, this.video.duration, r), this.gt(this.wt, this.video.duration)
            }, n.removeChapter = function(t) {
                try { this.wt.removeCue(t) } catch (t) { throw new TelecineError("ChaptersNotSupported", "Chapters are not supported in this browser.") }
                var n = this.video.chapters.find((function(n) { return n.timecode === t.timecode }));
                this.video.chapters.splice(n, 1), this.gt(this.wt, this.video.duration)
            }, n.gt = function(t, n) {
                for (var i = 0; i < t.cues.length; i++) {
                    var e = t.cues[i],
                        r = t.cues[i + 1],
                        o = r ? r.startTime : n;
                    e.endTime = o, e.size = (o - e.startTime) / n
                }
                this.fire(_i.CHAPTER_CUES_UPDATED)
            }, n.addChapters = function(t, n) {
                var i = this;
                0 !== t.length && n && t.every((function(t) { return void 0 !== t.timecode && t.timecode >= 0 && t.timecode < n && void 0 !== t.title })) && t.sort((function(t, n) { return t.timecode - n.timecode })).forEach((function(e, r) { return i.pt(e, n, t[r + 1]) }))
            }, n.addCuePoint = function(t) {
                var n = this,
                    i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (this.yt || (this.yt = this.J.addTextTrack("metadata"), this.yt.mode = "hidden", this.yt.addEventListener("cuechange", (function(t) { U(t.target.activeCues).forEach((function(t) { n.fire(_i.CUE_POINT, pe.fromVTTCue(t)) })) })), this.J.addEventListener("canplay", (function(t) { n.yt.mode = "hidden" }))), t = parseFloat(t), isNaN(t)) throw new TypeError("Time must be a number.");
                if (t < 0 || t >= this.duration) throw new TypeError("Time must be a positive number less than the duration of the video.");
                var e = new pe(t, i);
                return this.yt.addCue(e.vttCue), e
            }, n.removeCuePoint = function(t) { if (!t) throw new TelecineError("InvalidCuePoint", "The specified cue point is not valid."); return this.yt.removeCue(t.vttCue), !0 }, n.removeAllCuePoints = function() { var t = this; return this.yt && this.yt.length && U(this.yt.cues).forEach((function(n) { t.yt.removeCue(n) })), !0 }, n.onerror = function() {
                if (!this.J.error) return !1;
                switch (this.J.error.code) {
                    case this.J.error.MEDIA_ERR_SRC_NOT_SUPPORTED:
                        return this._t("MediaSrcNotSupportedError", "The media was not suitable."), this.kt(), !1;
                    case this.J.error.MEDIA_ERR_DECODE:
                        return -1 !== this.ft && Ui.iOS ? (this.J.load(), this.currentTime = this.ft, this.ft = -1, !1) : (this._t("MediaDecodeError", "The media could not be decoded."), this.kt(), !1);
                    case this.J.error.MEDIA_ERR_NETWORK:
                        return this._t("MediaNetworkError", "A network error ocurred while fetching the media."), !1;
                    case this.J.error.MEDIA_ERR_ABORTED:
                        return this._t("MediaAbortedError", "The user agent aborted the fetching of the media."), !1;
                    default:
                        return this._t("MediaUnknownError", "An unknown error occurred."), !1
                }
            }, n._t = function(t, n) { this.fire(bi.ERROR, new TelecineError(t, n)) }, n.onended = function() { if (this.J.paused || this.J.pause(), this.currentTime < this.J.duration) return !1 }, n.onwaiting = function() { return !1 }, n.onwebkitbeginfullscreen = function() { this.ct = !0 }, n.onwebkitendfullscreen = function() { this.ct = !1 }, n.onwebkitpresentationmodechanged = function() {
                switch (this.J.webkitPresentationMode) {
                    case "picture-in-picture":
                        this.J.controls = !0;
                        break;
                    case "inline":
                        this.tt.htmlScanner && this.tt.htmlScanner.controls || (this.J.controls = !1)
                }
                this.fire(_i.PRESENTATION_MODE_CHANGE, this.J.webkitPresentationMode)
            }, n.shouldHandleVideoEvent = function(t) { return !0 }, n.handleVideoEvent = function(t) { t.target === this.J && !1 !== this.shouldHandleVideoEvent(t) && ("function" == typeof this["on".concat(t.type)] && !1 === this["on".concat(t.type)](t) || this.fire(t.type)) }, n.swapVideo = function(t, n) {
                var i = t.paused;
                this.removeVideoEventListeners(t), t.parentElement.replaceChild(n, t), t.pause(), n.currentTime = t.currentTime, i || n.play(), this.addVideoEventListeners(n), this.J = n
            }, n.onexternaldisplayactivated = function(t) { this.st || (this.J !== t.element && (this.Et = this.J, this.swapVideo(this.J, t.element)), this.st = !0) }, n.onexternaldisplaydeactivated = function(t) { this.st && (this.Et && (this.swapVideo(t.element, this.Et), this.Et = null), this.st = !1) }, n.setVideoSrc = function(t) { this.J.src = t }, n.canSeekTo = function(t) {
                var n = this.duration;
                if (n && t > n && (t = n), this.J.seekable.length > 0)
                    for (var i = 0, e = this.J.seekable.length; i < e; i++)
                        if (this.J.seekable.start(i) <= t && this.J.seekable.end(i) >= t) return !0;
                return !1
            }, n.seekToTime = function(t) {
                var n = this;
                return this.canSeekTo(t) ? (this.J.currentTime = t, r.resolve(this.J.currentTime)) : new r((function(i, e) {
                    var r = function e() {
                        n.canSeekTo(t) && (Object.keys(bi).forEach((function(t) {
                            var i = bi[t];
                            n.J.removeEventListener(i, e)
                        })), n.J.currentTime = t, i(n.J.currentTime))
                    };
                    Object.keys(bi).forEach((function(t) {
                        var i = bi[t];
                        n.J.addEventListener(i, r)
                    }))
                }))
            }, n.takeSnapshot = function() {
                var t = this.Z.querySelector("[telecine-snapshot]");
                t || ((t = document.createElement("canvas")).setAttribute("telecine-snapshot", ""), this.Z.appendChild(t)), t.setAttribute("width", "".concat(this.Z.clientWidth, "px")), t.setAttribute("height", "".concat(this.Z.clientHeight, "px")), t.style.display = "";
                var n = se(this.J.clientWidth, this.J.clientHeight, this.J.videoWidth, this.J.videoHeight),
                    i = n.width,
                    e = n.height,
                    r = n.left,
                    o = n.top;
                t.style.cssText = "position:absolute;width:".concat(i, "px;height:").concat(e, "px;left:").concat(r, "px;top:").concat(o, "px");
                var u = t.getContext("2d");
                t.width > 0 && t.height > 0 && u.drawImage(this.J, 0, 0, t.width, t.height)
            }, n.removeSnapshot = function() {
                var t = this.Z.querySelector("[telecine-snapshot]");
                t && (t.style.display = "none")
            }, n.getTrackById = function(t) { if (this.dt && this.dt[t]) return this.dt[t]; if ("function" == typeof this.J.textTracks.getTrackById) return this.J.textTracks.getTrackById(t); var n = document.getElementById(t); return n ? n.track : null }, n.initDrm = function() {
                var t = this.nt.drmHandler;
                t && t.init(this)
            }, n.showExternalDisplayPicker = function(t) {
                if (!this.et.length) throw new TelecineError("ExternalDisplayUnvailable", "No external displays are available.");
                if (t) {
                    var n = this.et.filter((function(n) { return n.constructor.displayName.replace("ExternalDisplay", "") === t }))[0];
                    if (!n) throw new TelecineError("InvalidExternalDisplay", "The specified external display is not available.");
                    n.showPicker()
                } else this.et[0].showPicker()
            }, n.Tt = function() { return this.St.length < 1 ? null : this.St.slice(0).sort((function(t, n) { return t.priority - n.priority }))[0] }, n.xt = function() {
                var t = this.Tt();
                t ? this.currentFile = t : this.fire(_i.SCANNER_ERROR, { reason: "all files failed" })
            }, n.kt = function() {
                var t = this.St.indexOf(this.it);
                this.St.splice(t, 1), this.xt()
            }, n.rt = function() {
                var t = this;
                if ("mediaSession" in navigator) {
                    var n = { title: this.nt.title, artist: this.nt.subtitle, artwork: [] };
                    this.nt.metadata.thumbnail && n.artwork.push({ src: this.nt.metadata.thumbnail }), navigator.mediaSession.metadata = new MediaMetadata(n), "function" == typeof navigator.mediaSession.setActionHandler && (navigator.mediaSession.setActionHandler("play", (function() { t.play().then((function() { return t.fire(Ti.MEDIASESSION_PLAY) })).catch(t.lt.bind(t)) })), navigator.mediaSession.setActionHandler("pause", (function() { t.pause(), t.fire(Ti.MEDIASESSION_PAUSE) })), navigator.mediaSession.setActionHandler("seekforward", (function() { t.currentTime = Math.min(t.duration, t.currentTime + 10), t.fire(Ti.MEDIASESSION_SEEK_FORWARD) })), navigator.mediaSession.setActionHandler("seekbackward", (function() { t.currentTime = Math.max(0, t.currentTime - 10), t.fire(Ti.MEDIASESSION_SEEK_BACKWARD) })))
                }
            }, H(t, [{ key: "chaptersTrack", get: function() { return this.wt } }, { key: "manifest", get: function() { return this.Mt } }, { key: "buffered", get: function() { return be.from(this.J.buffered) } }, { key: "cuePoints", get: function() { return this.yt ? U(this.yt.cues).map((function(t) { return pe.fromVTTCue(t) })) : [] } }, {
                key: "currentFile",
                get: function() { return this.it },
                set: function(n) {
                    var i = this,
                        e = !this.J.paused,
                        r = this.currentTime,
                        o = !this.it || n.video.id !== this.it.video.id;
                    if (o || this.takeSnapshot(), this.it = n, o && (this.J.preload = this.at), this.constructor === t && this.J.readyState > 0 && (this.J.currentTime = 0), (Qi.iOS || Ui.android) && this.it.video.title) {
                        var u = this.it.video.title;
                        this.it.video.subtitle && (u = "".concat(u, " ").concat(this.it.video.subtitle)), this.J.setAttribute("title", u)
                    } else this.J.removeAttribute("title");
                    this.setVideoSrc(this.it.src, o), this.fire(_i.CURRENT_FILE_CHANGE, n), Qi.iOS && !o && this.play().catch(this.lt.bind(this)), this.constructor !== t || o ? e && this.play().catch(this.lt.bind(this)) : (this.seekToTime(r).then((function(t) { return e && i.play().catch(i.lt.bind(i)), t })).catch((function() {})), this.once("canplay", (function() { return i.removeSnapshot() })), this.once("playing", (function() { return i.removeSnapshot() })))
                }
            }, { key: "currentTime", get: function() { return this.J.currentTime }, set: function(t) { this.seekToTime(t) } }, { key: "duration", get: function() { return this.J.duration } }, { key: "ended", get: function() { return this.J.ended } }, { key: "externalDisplayAvailable", get: function() { return this.et.some((function(t) { return t.available })) } }, { key: "externalDisplayActive", get: function() { return this.et.some((function(t) { return t.active })) } }, { key: "loop", get: function() { return this.J.loop }, set: function(t) { this.J.loop = t } }, { key: "isLowerProfileAvailable", get: function() { return null } }, { key: "muted", get: function() { return this.J.muted }, set: function(t) { this.J.muted = t } }, { key: "playsinline", get: function() { return this.J.playsinline }, set: function(t) { this.J.playsinline = t, t ? this.J.setAttribute("playsinline", "") : this.J.removeAttribute("playsinline") } }, { key: "paused", get: function() { return this.J.paused } }, { key: "defaultPlaybackRate", get: function() { return this.J.defaultPlaybackRate }, set: function(t) { this.J.defaultPlaybackRate = t } }, { key: "playbackRate", get: function() { return this.J.playbackRate }, set: function(t) { this.J.playbackRate = t } }, { key: "played", get: function() { return this.J.played } }, { key: "seekable", get: function() { return this.J.seekable } }, { key: "seeking", get: function() { return this.J.seeking } }, { key: "preload", get: function() { return this.at }, set: function(t) { this.J.preload = t, this.at = t } }, { key: "presentationMode", get: function() { return this.J.webkitPresentationMode ? this.J.webkitPresentationMode : "inline" }, set: function(t) { if (-1 === this.supportedPresentationModes.indexOf(t)) throw new TelecineError("InvalidPresentationMode", "The “".concat(t, "” presentation mode is not supported.")); "function" == typeof this.J.webkitSetPresentationMode && this.J.webkitSetPresentationMode(t) } }, { key: "supportedPresentationModes", get: function() { var t = ["inline"]; return "function" == typeof this.J.webkitSupportsPresentationMode && this.J.webkitSupportsPresentationMode("picture-in-picture") && t.push("picture-in-picture"), t } }, {
                key: "video",
                get: function() { return this.nt },
                set: function(t) {
                    var n = this;
                    if (this.reactivate(), this.nt !== t) {
                        if (this.nt && (this.nt.off("filesrcupdate"), this.nt.off("texttracksrcupdate")), this.removeAllCuePoints(), this.nt = t, this.St = t.files.filter((function(t) { return -1 !== n.constructor.supportedVideoTypes.indexOf(t.mime) })), this.nt.on("filesrcupdate", (function(t) { t === n.it && n.xt() })), this.nt.on("texttracksrcupdate", (function(t) { n.video.currentScanner && n.video.currentScanner.setSrcForTrack(t, t.src) })), this.tt.externalDisplays && this.tt.externalDisplays.length) {
                            this.et = [];
                            var i = this.constructor.supportedExternalDisplays;
                            Array.isArray(i) || (i = []);
                            var e = i.map((function(t) { return t.displayName }));
                            this.tt.externalDisplays.filter((function(t) { return t.supported && -1 !== e.indexOf(t.displayName) })).forEach((function(i) {
                                var e = new i(t),
                                    r = i.displayName.replace("ExternalDisplay", "");
                                e.on(bi.LOADED_METADATA, (function(t) { return n.fire(bi.LOADED_METADATA, t) })), e.on("available", (function() { return n.fire(gi.AVAILABLE, { type: r }) })), e.on("unavailable", (function() { return n.fire(gi.UNAVAILABLE, { type: r }) })), e.on("activated", (function() { "function" == typeof n.onexternaldisplayactivated && n.onexternaldisplayactivated(e), n.fire(gi.ACTIVATED, { type: r }) })), e.on("deactivated", (function() { "function" == typeof n.onexternaldisplaydeactivated && n.onexternaldisplaydeactivated(e), n.fire(gi.DEACTIVATED, { type: r }) })), n.et.push(e)
                            }))
                        }
                        this.xt(), Qi.iOS && this.et.forEach((function(t) { "AirPlay" === t.constructor.displayName && (t.element = n.J) })), this.initDrm()
                    }
                }
            }, { key: "videoElement", get: function() { return this.J } }, { key: "videoWidth", get: function() { return this.J.videoWidth } }, { key: "videoHeight", get: function() { return this.J.videoHeight } }, { key: "volume", get: function() { return this.J.volume }, set: function(t) { this.J.volume = t } }, { key: "readyState", get: function() { return this.J.readyState } }]), t
        }(),
        Se = {};
    try { Se.Set = Set } catch (t) {
        ! function(t, n) {
            var i = n(e.prototype, { size: { configurable: !0, get: function() { return this.At.length } } });

            function e(t) { n(this, { At: { value: [] } }), t && t.forEach(this.add, this) }

            function r(n, i) { return -1 < (t = n.At.indexOf(i)) }

            function o(t) { return [t, t] }
            i.add = function(t) { return r(this, t) || this.At.push(t), this }, i.clear = function() {
                var t = this.At.length;
                this.At.splice(0, t)
            }, i.delete = function(n) { return r(this, n) && !!this.At.splice(t, 1) }, i.entries = function() { return this.At.map(o) }, i.forEach = function(t, n) { this.At.forEach((function(i, e) { t.call(n, i, i, this) }), this) }, i.has = function(t) { return r(this, t) }, i.keys = i.values = function() { return this.At.slice(0) }, Se.Set = e
        }(0, Object.defineProperties)
    }
    var xe = Se.Set,
        Me = { MANIFEST: "manifest", SEGMENT: "segment" },
        Ae = { method: "GET", async: !0, retry: 0, throwHttpErrors: !0, headers: {}, hooks: { beforeRequest: [], beforeRetry: [], afterResponse: [] }, validateStatus: function(t) { return t >= 200 && t < 300 }, retryStatus: function(t) { return [408, 413, 429].includes(t) || t >= 500 && t < 600 } };

    function Ce(t, n) {
        var i = this;
        this.headers = {}, ct(this, n), this.ok = 2 == (this.status / 100 | 0), this.body = t, this.text = function() { return r.resolve(t) }, this.json = function() { return r.resolve(JSON.parse(t)) }, this.blob = function() { return r.resolve(new Blob([t])) }, this.arrayBuffer = function() { return r.resolve(t) }, this.clone = function() { return new Ce(t, i) }
    }
    var Re = function(t) {
            function n() { var n; return (n = t.call(this, "The operation was aborted.") || this).name = "AbortError", n }
            return G(n, t), n
        }(X(Error)),
        Oe = function(t) {
            function n(n) { var i; return (i = t.call(this, n.statusText) || this).name = "HTTPError", i.response = n, i }
            return G(n, t), n
        }(X(Error)),
        Ie = function(t) {
            function n() { var n; return (n = t.call(this, "A network error occurred.") || this).name = "NetworkError", n }
            return G(n, t), n
        }(X(Error)),
        je = function(t) {
            function n(n) { var i; return (i = t.call(this, "Request timed out.") || this).name = "TimeoutError", i.timeoutMs = n, i }
            return G(n, t), n
        }(X(Error));

    function De() {}

    function Le(t, n, i) {
        if (!t.s) {
            if (i instanceof Pe) {
                if (!i.s) return void(i.o = Le.bind(null, t, n));
                1 & n && (n = i.s), i = i.v
            }
            if (i && i.then) return void i.then(Le.bind(null, t, n), Le.bind(null, t, 2));
            t.s = n, t.v = i;
            var e = t.o;
            e && e(t)
        }
    }
    var Pe = function() {
        function t() {}
        return t.prototype.then = function(n, i) {
            var e = new t,
                r = this.s;
            if (r) { var o = 1 & r ? n : i; if (o) { try { Le(e, 1, o(this.v)) } catch (t) { Le(e, 2, t) } return e } return this }
            return this.o = function(t) {
                try {
                    var r = t.v;
                    1 & t.s ? Le(e, 1, n ? n(r) : r) : i ? Le(e, 1, i(r)) : Le(e, 2, r)
                } catch (t) { Le(e, 2, t) }
            }, e
        }, t
    }();

    function Ne(t) { return t instanceof Pe && 1 & t.s }

    function Fe(t) {
        var n = function(t) { return function() { for (var n = [], i = 0; i < arguments.length; i++) n[i] = arguments[i]; try { return r.resolve(t.apply(this, n)) } catch (t) { return r.reject(t) } } }((function(e) {
                return function(t, n) { try { var i = t() } catch (t) { return n(t) } return i && i.then ? i.then(void 0, n) : i }(e, (function(o) {
                    var u = !1;
                    i++;
                    var a = function(n) { if (!t.retryAbortErrors && n instanceof Re) return 0; if (n instanceof je) return 0; if (i >= t.retry) return 0; if (n instanceof Oe) { if (!t.retryStatus(n.response.status)) return 0; var e = n.response.headers["retry-after"]; if (e && t.retryStatus(n.response.status)) { var r = Number(e); return isNaN(r) ? r = Date.parse(e) - Date.now() : r *= 1e3, r } if (413 === n.response.status) return 0 } return .3 * Math.pow(2, i - 1) * 1e3 }(o);
                    return function(s, c) {
                        var f = function() {
                            if (0 !== a && i > 0) return function(t, n, i) { return t && t.then || (t = r.resolve(t)), n ? t.then(n) : t }(function(t) { return new r((function(n, i) { return setTimeout(n, t) })) }(a), (function() {
                                var a = t.hooks.beforeRetry || [];
                                return function(t, n) { return t && t.then ? t.then(n) : n() }(function(t, n, i) {
                                    var e, r, o = -1;
                                    return function i(u) {
                                        try {
                                            for (; ++o < t.length;)
                                                if ((u = n(o)) && u.then) {
                                                    if (!Ne(u)) return void u.then(i, r || (r = Le.bind(null, e = new Pe, 2)));
                                                    u = u.v
                                                }
                                            e ? Le(e, 1, u) : e = u
                                        } catch (t) { Le(e || (e = new Pe), 2, t) }
                                    }(), e
                                }(a, (function(n) { return function(t, n) { return t && t.then ? t.then(De) : r.resolve() }((0, a[n])(t, o, i)) })), (function() { return u = !0, n(e) }))
                            }))
                        }();
                        return f && f.then ? f.then(c) : c(f)
                    }(0, (function(n) { if (u) return n; if (t.throwHttpErrors) throw o }))
                }))
            })),
            i = 0;
        return n
    }

    function Ue(t, n, i) { return i ? n ? n(t) : t : (t && t.then || (t = r.resolve(t)), n ? t.then(n) : t) }

    function Ve(t, n, i) {
        if (!t.s) {
            if (i instanceof Be) {
                if (!i.s) return void(i.o = Ve.bind(null, t, n));
                1 & n && (n = i.s), i = i.v
            }
            if (i && i.then) return void i.then(Ve.bind(null, t, n), Ve.bind(null, t, 2));
            t.s = n, t.v = i;
            var e = t.o;
            e && e(t)
        }
    }
    var Be = function() {
        function t() {}
        return t.prototype.then = function(n, i) {
            var e = new t,
                r = this.s;
            if (r) { var o = 1 & r ? n : i; if (o) { try { Ve(e, 1, o(this.v)) } catch (t) { Ve(e, 2, t) } return e } return this }
            return this.o = function(t) {
                try {
                    var r = t.v;
                    1 & t.s ? Ve(e, 1, n ? n(r) : r) : i ? Ve(e, 1, i(r)) : Ve(e, 2, r)
                } catch (t) { Ve(e, 2, t) }
            }, e
        }, t
    }();

    function He(t) { return t instanceof Be && 1 & t.s }

    function qe(t, n, i) {
        var e, r, o = -1;
        return function u(a) {
            try {
                for (; ++o < t.length && (!i || !i());)
                    if ((a = n(o)) && a.then) {
                        if (!He(a)) return void a.then(u, r || (r = Ve.bind(null, e = new Be, 2)));
                        a = a.v
                    }
                e ? Ve(e, 1, a) : e = a
            } catch (t) { Ve(e || (e = new Be), 2, t) }
        }(), e
    }

    function We(t, n) { return t && t.then ? t.then(n) : n(t) }

    function ze(t) { return function() { for (var n = [], i = 0; i < arguments.length; i++) n[i] = arguments[i]; try { return r.resolve(t.apply(this, n)) } catch (t) { return r.reject(t) } } }
    var Ge = ["get", "post", "put", "patch", "head", "delete"],
        $e = { json: "application/json", text: "text/plain", arrayBuffer: "*/*", blob: "*/*" },
        Ke = ["get"];

    function Ye(t, n) {
        var i = ze((function() {
                var t = !1,
                    i = !1,
                    e = n.hooks.beforeRequest || [];
                return We(qe(e, (function(o) { return Ue((0, e[o])(n), (function(e) { return e instanceof Je ? (n = e, void(i = !0)) : e instanceof Ce ? (t = !0, r.resolve(e).then(Xe(n))) : void 0 })) }), (function() { return i || t })), (function(i) {
                    return t ? i : function(t) {
                        var n = t.url,
                            i = t.method,
                            e = t.body,
                            o = t.onDownloadProgress;
                        return new r((function(r, u) {
                            var a = new XMLHttpRequest;
                            for (var s in a.open(i.toUpperCase(), n, t.async), t.timeout && (a.timeout = t.timeout), a.onload = function() {
                                    if (0 !== a.status || a.responseURL && 0 === a.responseURL.indexOf("file:")) {
                                        var t = {};
                                        a.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, (function(n, i, e) { t[i] = t[i] ? "".concat(t[i], ",").concat(e) : e })), r(new Ce(a.response, { headers: t, statusText: a.statusText, status: a.status, url: a.responseURL }))
                                    }
                                }, a.onabort = function() { u(new Re) }, a.onerror = function() { u(new Ie) }, a.ontimeout = function() { u(new je(t.timeout)) }, "function" == typeof o && a.addEventListener("progress", o), t.headers) a.setRequestHeader(s, t.headers[s]);
                            t.withCredentials && (a.withCredentials = !0), t.responseType && (a.responseType = t.responseType), t.abort = a.abort.bind(a), a.send(e || null)
                        }))
                    }(n).then(Xe(n))
                }))
            })),
            e = n = new Je(t, n),
            o = e.method,
            u = e.json,
            a = e.jwt,
            s = e.searchParams;
        if (u && (n.headers["Content-Type"] = $e.json, n.body = JSON.stringify(u)), a && (n.headers.Authorization = "jwt ".concat(a)), s) {
            var c = Q(n.url.split("?"), 2),
                f = c[0],
                l = c[1];
            n.url = pt(f, z({}, ht(l), {}, s))
        }
        var d = -1 !== Ke.indexOf(o.toLowerCase()) ? Fe(n)(i) : i(),
            h = function(t) { d[t] = ze((function() { return n.headers["Content-Type"] = $e[t], Ue(d, (function(n) { return n.clone()[t]() })) })) };
        for (var v in $e) h(v);
        return function t(n, i) { var e = n.then.bind(n); return Object.assign(n, { abort: i, then: function() { return t(e.apply(void 0, arguments), i) } }) }(d, (function() { return n.abort() }))
    }

    function Je(t, n) { ct(this, Ae, t = "string" == typeof t ? { url: t } : t, n) }

    function Xe(t) {
        var n = t.validateStatus,
            i = t.throwHttpErrors,
            e = t.hooks;
        return ze((function(r) { var o = e.afterResponse || []; return We(qe(o, (function(n) { return Ue((0, o[n])(t, r.clone()), (function(t) { t instanceof Ce && (r = t) })) })), (function() { if (!n || n(r.status)) return r; if (i) throw new Oe(r); return r })) }))
    }
    Ge.forEach((function(t) { return Ye[t] = function(n, i) { return Ye(n, z({ method: t }, i)) }, Ye[t] }));
    var Ze = Ye.get,
        Qe = Ye.post,
        tr = Ye.put,
        nr = Ye.patch,
        ir = Ye.head,
        er = { ARRAY_BUFFER: "arraybuffer" },
        rr = Object.freeze({ __proto__: null, ContentTypes: Me, defaults: Ae, requestMethods: Ge, responseTypes: $e, retryMethods: Ke, request: Ye, Request: Je, get: Ze, post: Qe, put: tr, patch: nr, head: ir, Response: Ce, ResponseTypes: er, AbortError: Re, HTTPError: Oe, NetworkError: Ie, TimeoutError: je });

    function or(t) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        if (0 === t.length) return 0;
        for (var i = 0, e = 0, r = 0; r < t.length; r++) {
            var o = n[r] || 1;
            e += o, i += t[r] * o
        }
        return i / e
    }

    function ur(t) { if (0 === t.length) return 0; for (var n = 0, i = 0; i < t.length; i++) n += 1 / t[i]; return t.length / n }

    function ar(t, n) {
        if (t.sort(), 0 === t.length) return 0;
        if (n <= 0) return t[0];
        if (n >= 1) return t[t.length - 1];
        var i = t.length * n,
            e = Math.floor(i),
            r = e + 1,
            o = i % 1;
        return r >= t.length ? t[e] : t[e] * (1 - o) + t[r] * o
    }

    function sr(t) { t.sort((function(t, n) { return t - n })); var n = Math.floor(t.length / 2); return t.length % 2 ? t[n] : (t[n - 1] + t[n]) / 2 }

    function cr() { return "undefined" != typeof performance ? performance.now() : Date.now() }

    function fr() {}
    var lr = [],
        dr = [],
        hr = [];

    function vr(t, n, i) { return i ? n ? n(t) : t : (t && t.then || (t = r.resolve(t)), n ? t.then(n) : t) }
    var pr = [],
        mr = function() {
            function t() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    n = t.retryCount,
                    i = void 0 === n ? 3 : n,
                    e = t.parallel,
                    r = void 0 === e ? 1 : e,
                    o = t.includeWithSpeeds,
                    u = void 0 === o || o,
                    a = t.timeout,
                    s = void 0 === a ? 0 : a,
                    c = t.retryAbortErrors,
                    f = void 0 === c || c;
                this.Ct = [], this.Rt = new xe, this.Ot = new P, this.It = i, this.jt = !1, this.Dt = !1, this.Lt = r, this.Pt = u, this.Nt = s, this.Ft = f, this.Ut()
            }
            t.getPercentileSpeed = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 5,
                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .8,
                    i = lr.slice(-t);
                return ar(i, n)
            }, t.getAverageSpeed = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 5,
                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                    i = lr.slice(-t);
                return or(i, n)
            }, t.getHarmonicAverageSpeed = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 5,
                    n = lr.slice(-t);
                return ur(n)
            }, t.getVolatilityScaler = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 5,
                    n = lr.slice(-t);
                if (n.length < 3) return null;
                var i = or(n, []),
                    e = Math.min.apply(Math, tt(n));
                return e / i
            }, t.getMedianSpeed = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 5,
                    n = lr.slice(-t);
                return sr(n)
            }, t.getResponseSpeeds = function() { return lr }, t.getProgressSpeeds = function() { return pr }, t.getFailedSegments = function() { return dr }, t.getSuccessfulSegments = function() { return hr };
            var n = t.prototype;
            return n.add = function(t, n) {
                var i = this;
                return new r((function(e, r) {
                    var o = i.Vt(t, e, r);
                    i.Bt(o, n), i.jt && !i.Dt && i.Ht()
                }))
            }, n.start = function() { this.jt || (this.jt = !0, this.Ht()) }, n.stop = function() { this.jt = !1 }, n.abort = function() {
                var t = this,
                    n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                    i = this.Ct.filter((function(t) { return !n || n === t.stream }));
                i.forEach((function(n) { n.reject("Stream manually aborted"), t.fire("downloadabort", n.identifier) })), this.Ct = this.Ct.filter((function(t) { return n && n !== t.stream })), this.Rt.forEach((function(t) { n && n !== t.stream || t.request.abort() }))
            }, n.qt = function(t) {
                for (var n = 0; n < this.Ct.length && !(this.Ct[n].priority > t.priority); n++);
                this.Ct.splice(n, 0, t)
            }, n.Ut = function() {
                var t = this;
                this.Wt = new P, nt(this), window.addEventListener("online", (function() { t.start(), t.zt && (t.zt.resolve(), t.zt = null) })), window.addEventListener("offline", (function() { t.stop(), t.abort(), t.zt = new ft }))
            }, n.Bt = function(t, n) { t.hasOwnProperty("priority") ? this.qt(t) : this.Ct[n ? "unshift" : "push"](t) }, n.Ht = function() { if (this.jt) { this.Dt = !0; for (var t = this.Lt - this.Rt.size, n = 0; n < t; n++) this.Gt() } }, n.Vt = function(t, n, i) { var e = t; return t.id && (e = t.id), z({}, t, { identifier: e, resolve: n, reject: i }) }, n.$t = function() { 0 !== this.Rt.size || 0 !== this.Ct.length ? this.Rt.size < this.Lt && this.Ht() : this.Dt = !1 }, n.Gt = function() {
                if (0 !== this.Ct.length) {
                    var t = this.Ct.shift(),
                        n = t.url,
                        i = t.byteRange,
                        e = t.isInitSegmentRequest,
                        r = t.identifier,
                        o = t.timeout,
                        u = { stream: t.stream, data: { url: n, isInitSegmentRequest: e, requestSendTime: cr(), uuid: ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (function(t) { return (t ^ 16 * Math.random() >> t / 4).toString(16) })) } },
                        a = this.Nt,
                        s = parseInt(o, 10);
                    s >= 0 && (a = s);
                    var c = { url: n, type: Me.SEGMENT, responseType: er.ARRAY_BUFFER, retry: this.It, hooks: { beforeRetry: [this.Kt.bind(this)] }, onDownloadProgress: this.Yt(r, u), headers: i && { Range: "bytes=".concat(i) }, retryAbortErrors: this.Ft, timeout: a };
                    this.fire("downloadstart", r), u.request = Ye(c).then(this.Jt(u, t)).catch(this.Xt(u, t)), this.Rt.add(u)
                } else this.Dt = !1
            }, n.Kt = function() { try { var t = this; return function(n) { var i = function() { if (t.zt) return function(t, n) { return t && t.then ? t.then(fr) : r.resolve() }(t.zt) }(); if (i && i.then) return i.then(fr) }() } catch (t) { return r.reject(t) } }, n.Yt = function(t, n) {
                var i = this,
                    e = 0,
                    r = 0,
                    o = cr();
                return function(u) {
                    if (u.lengthComputable) {
                        var a = 8 * (u.loaded - r),
                            s = cr(),
                            c = s - o,
                            f = { startTime: o, length: c, bitrate: a / (c / 1e3), index: e };
                        e > 0 && (pr.length >= 100 && pr.shift(), pr.push(f)), o = s, r = u.loaded, e += 1, i.Wt.set(n, { bytesTotal: u.total, bytesLoaded: u.loaded, percent: u.loaded / u.total, identifier: t }), i.fire("progress", t)
                    }
                }
            }, n.Jt = function(t, n) {
                var i = this,
                    e = cr(),
                    o = n.identifier,
                    u = n.resolve;
                return function(t) { return function() { for (var n = [], i = 0; i < arguments.length; i++) n[i] = arguments[i]; try { return r.resolve(t.apply(this, n)) } catch (t) { return r.reject(t) } } }((function(r) { return vr(r.arrayBuffer(), (function(a) { return t.data.duration = cr() - t.data.requestSendTime, i.Rt.delete(t), i.Wt.delete(t), i.Zt(n, e, a.byteLength), i.fire("downloadend", o, { request: t, response: r }), hr.push({ url: t.data.url, status: 200, duration: t.data.duration }), vr(i.Qt(t, a), (function(t) { u(a = t), i.$t() })) })) }))
            }, n.Zt = function(t, n, i) {
                var e = t.includeWithBandwidthChecks,
                    r = (cr() - n) / 1e3;
                if (i > 8e3) {
                    var o = 8 * i / r;
                    lr.length > 100 && lr.shift(), this.Pt && e && lr.push(o)
                }
            }, n.Qt = function(t, n) { return t.data.url && t.data.url.match(".ts$") ? this.tn(t, n) : r.resolve(new Uint8Array(n)) }, n.tn = function(t, n) {
                try {
                    var i = this;
                    return function(t, n) { var e = function() { if (!i.nn) return vr(st("module/mux-mp4.js"), (function(t) { i.nn = new t({ keepOriginalTimestamps: !0 }) })) }(); return e && e.then ? e.then(n) : n() }(0, (function() {
                        return new r((function(e) {
                            i.nn.on("data", (function(n) {
                                i.nn.off("data");
                                var r = new Uint8Array(n.initSegment.byteLength + n.data.byteLength);
                                r.set(n.initSegment, 0), r.set(n.data, n.initSegment.byteLength), e(t.data.isInitSegmentRequest ? n.initSegment : r)
                            })), i.nn.push(new Uint8Array(n)), i.nn.flush()
                        }))
                    }))
                } catch (t) { return r.reject(t) }
            }, n.Xt = function(t, n) {
                var i = this,
                    e = n.identifier,
                    r = n.reject,
                    o = n.size;
                return function(n) {
                    var u = cr() - t.data.requestSendTime;
                    if (t.data.duration = u, n instanceof Re) dr.push({ url: t.data.url, status: "abort", duration: u }), i.fire("downloadabort", e);
                    else if (n instanceof Oe) dr.push({ url: t.data.url, status: n.response.status, duration: u }), i.fire("downloaderror", e, n.response.status);
                    else if (n instanceof je) {
                        if (dr.push({ url: t.data.url, status: "timeout", duration: u }), o > 0 && n.timeoutMs > 0) {
                            var a = 8 * o / (n.timeoutMs / 1e3);
                            a *= .5, lr.push(a)
                        }
                        i.fire("downloadtimeout", e, "timeout")
                    }
                    i.Wt.delete(t), i.Rt.delete(t), r(n), i.$t()
                }
            }, H(t, [{ key: "parallel", get: function() { return this.Lt }, set: function(t) { this.Lt = t } }, {
                key: "pendingFetches",
                get: function() {
                    var t = this,
                        n = [];
                    return this.Rt.forEach((function(i) {
                        if (t.Wt.get(i)) {
                            var e = t.Wt.get(i);
                            e.elapsedTime = cr() - i.data.requestSendTime, n.push(e)
                        }
                    })), n
                }
            }]), t
        }(),
        wr = function() {
            function t(t) { nt(this), this.in = t, this.en = null, this.rn = null, this.un = !1, this.an = !0, this.sn = null, this.cn = [], this.fn = [], this.ln = !1, this.dn = null, this.hn = !1, this.vn = void 0, this.pn = !1, this.mn = !0, this.wn = {}, this.bn = this.gn.bind(this), this.in.on("durationset", this.yn.bind(this)) }
            var n = t.prototype;
            return n.addStream = function(t) {
                var n = this;
                t.on("segmentadd", (function() { return n._n() }));
                var i = this.fn.push(t) - 1;
                t.index = i, null === this.rn && (this.kn(i), this.un = !0)
            }, n.streamIndexAtTime = function(t) { return this.wn[void 0] ? { stream: this.activeStreamIndex } : this.wn[Math.floor(t / 6)] }, n.switchTo = function(t) {
                var n = this,
                    i = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                    e = t;
                "object" === V(t) && (e = t.index);
                var o = this.rn !== e,
                    u = o;
                if (!o && this.un && (o = !0), o) {
                    this.un = !1;
                    var a = this.rn,
                        s = this.fn[a];
                    this.fire("streamchangestart", a, e), s && u && i && s.abort(), this.En = e, this.kn(e)
                }
                return this._n(), new r((function(t) { o ? n.Tn = function() { n.En === e && (n.Tn = null, t(), n.fire("streamchange", e)) } : t() }))
            }, n.isTimeInBuffer = function(t) {
                for (var n = 0; n < this.en.buffered.length; n++) {
                    var i = this.en.buffered.start(n),
                        e = this.en.buffered.end(n);
                    if (i <= t && e >= t) return !0
                }
                return !1
            }, n.hasAppendedFinalSegment = function() { return void 0 !== this.vn && this.isTimeInBuffer(this.vn) }, n.clear = function() { this.fn.forEach((function(t) { return t.clear() })) }, n.remove = function(t) {
                var n = this,
                    i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.in.Sn.duration;
                return new r((function(e, r) { n.cn.push([t, i, e]), n._n() }))
            }, n.removeEventListeners = function() { this.en && this.en.removeEventListener("updateend", this.bn) }, n.yn = function() {
                var t = this.in.Sn.duration,
                    n = Math.floor(t / 6);
                n += 6 % t > 1 ? 1 : 0;
                for (var i = 0; i < n; i++) this.wn[i] = { stream: null, segment: i, type: "video" }
            }, n.xn = function() { this.en.addEventListener("updateend", this.bn) }, n.kn = function(t) { this.an = !0, this.rn = t, this.in.Mn.streamIndex = t }, n.gn = function() { this.An(), this.Cn(), this._n() }, n.An = function() { if (this.hn && this.endTime) return this.hn = !1, this.vn = this.endTime, void this.in.checkEndOfStream();!this.activeStream.hasNextSegment() && this.vn > 0 && "open" === this.in.Sn.readyState && this.in.checkEndOfStream() }, n.Cn = function() { this.sn && (this.fire("appendbufferend", this.sn), this.sn = null, this.Tn && this.Tn()) }, n._n = function() {
                if (this.en) {
                    if (this.activeStream && "closed" !== this.in.Sn.readyState && !this.en.updating)
                        if (this.cn.length) this.Rn();
                        else if (!this.ln && !this.pn) return this.an ? (this.an = !1, void this.On()) : void this.In()
                } else this.on("sourcebufferattach", this._n)
            }, n.Rn = function() {
                var t = this,
                    n = Q(this.cn.shift(), 3),
                    i = n[0],
                    e = n[1],
                    r = n[2];
                this.en.addEventListener("updateend", (function n(i) { t.en.removeEventListener("updateend", n), r(), clearTimeout(t.dn), t.dn = setTimeout((function() { t.ln = !1, t._n() }), 5e3) })), this.en.remove(i, e)
            }, n.On = function() {
                var t = this;
                this.pn = !0, this.activeStream.getInitSegment().then((function(n) { return t.sn = null, t.en.appendBuffer(n), t.pn = !1, n })).catch((function(n) { t.an = !0, t.pn = !1 }))
            }, n.In = function() {
                var t = this.activeStream.getNextSegment();
                if (null !== t) {
                    var n = this.activeStream.getIdForSegment(t);
                    this.activeStream.isFinal(t) && (this.hn = !0), this.sn = n, this.fire("appendbufferstart", n);
                    try { this.en.appendBuffer(t), this.wn[n.segment] = n, this.mn && (this.mn = !1, this.fire("initialbufferstart")) } catch (n) {
                        if ("QuotaExceededError" === n.name) {
                            if (this.ln = !0, this.fire("quotaexceedederror", this.en.buffered), this.in.J.currentTime > 6) {
                                var i = this.in.J.currentTime - 6;
                                this.in.removeBuffer(0, i)
                            }
                            this.activeStream.jn.unshift(t)
                        }
                    }
                }
            }, H(t, [{ key: "streams", get: function() { return this.fn } }, { key: "activeStreamIndex", get: function() { return this.rn } }, { key: "activeStream", get: function() { return this.fn[this.rn] } }, { key: "sourceBuffer", get: function() { return this.en }, set: function(t) { this.en = t, this.xn(), this.fire("sourcebufferattach") } }, { key: "endTime", get: function() { var t = this.en.buffered; if (t.length > 0) return t.end(t.length - 1) } }]), t
        }(),
        br = function() {
            function t(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                    i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new mr;
                nt(this), this.jn = [], this.Dn = t, this.an = !0, this.Ln = NaN, this.Pn = n, this.Nn = i, this.Nn.start(), this.Fn = new P, this.Un = {}
            }
            t.isValidSegmentUrl = function(t) { return "string" == typeof t || "string" == typeof t.url && "string" == typeof t.byteRange };
            var n = t.prototype;
            return n.getIdForSegment = function(n) { return t.isValidSegmentUrl(n) ? this.Un[n] : this.Fn.get(n).id }, n.isFinal = function(t) { return this.Fn.get(t).final }, n.addSegment = function(n) {
                var i = this,
                    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    o = e.identifier,
                    u = void 0 === o ? null : o,
                    a = e.isFinalSegment,
                    s = void 0 !== a && a,
                    c = e.loadOnly,
                    f = void 0 !== c && c,
                    l = e.priority,
                    d = void 0 === l ? 0 : l,
                    h = e.includeWithBandwidthChecks,
                    v = void 0 === h || h,
                    p = e.timeout,
                    m = void 0 === p ? null : p,
                    w = e.size,
                    b = void 0 === w ? null : w;
                return this.an && this.getInitSegment(), t.isValidSegmentUrl(n) ? (this.Un[n] = u || n, this.fire("queued", this.getIdForSegment(n)), this.Nn.add({ url: n.url || n, byteRange: n.byteRange, id: this.getIdForSegment(n), stream: this, includeWithBandwidthChecks: v, isInitSegmentRequest: !1, priority: d, timeout: m, size: b }).then((function(t) { i.Fn.set(t, { id: u || n, final: s }), i.jn.push(t), i.fire("bufferqueueadd", i.getIdForSegment(n)), f || i.fire("segmentadd") }))) : (this.Fn.set(n, { id: u, final: s }), this.jn.push(n), this.fire("bufferqueueadd", u), r.resolve())
            }, n.clear = function() { this.jn = [] }, n.abort = function() {
                var t = this;
                this.getInitSegment().then((function() { t.Nn.abort(t) })).catch((function(t) {}))
            }, n.hasNextSegment = function() { return this.jn.length > 0 }, n.getNextSegment = function() { return 0 === this.jn.length ? null : this.jn.shift() }, n.getInitSegment = function() {
                var n = this;
                this.an = !1;
                var i = this.Dn.url || this.Dn;
                return t.isValidSegmentUrl(i) ? this.Nn.add({ url: i, byteRange: this.Dn.byteRange, id: null, stream: this, isInitSegmentRequest: !0 }).then((function(t) { return n.Dn = t, n.Dn })) : r.resolve(this.Dn)
            }, H(t, [{ key: "codec", get: function() { return this.Pn }, set: function(t) { this.Pn = t } }, { key: "index", get: function() { return this.Ln }, set: function(t) { this.Ln = t } }, { key: "pendingFetches", get: function() { return this.Nn.pendingFetches } }]), t
        }(),
        gr = function() {
            function t(t) { this.J = t, this.jt = !1, this.Vn = null, this.Bn = {}, this.Hn = {}, this.qn = 0, this.Wn = 0, this.zn = "default", this.bound = { startCheckingDroppedFrames: this.Gn.bind(this), stopCheckingDroppedFrames: this.$n.bind(this) } }
            var n = t.prototype;
            return n.start = function() { return this.Gn(), this }, n.stop = function() { return this.$n(), this }, n.destroy = function() { this.$n(), this.Kn() }, n.getDroppedFrameRate = function(t, n) {
                var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "average",
                    e = this.Bn[n];
                if (!e) return 0;
                if (e.length < t) return 0;
                var r = e.slice(-t);
                return "median" === i ? sr(r) : or(r)
            }, n.getDroppedFrameTotal = function() { return { dropped: this.Yn(), total: this.Jn() } }, n.xn = function() { this.J.addEventListener("playing", this.bound.startCheckingDroppedFrames), this.J.addEventListener("pause", this.bound.stopCheckingDroppedFrames), this.J.addEventListener("ended", this.bound.stopCheckingDroppedFrames) }, n.Kn = function() { this.J.removeEventListener("playing", this.bound.startCheckingDroppedFrames), this.J.removeEventListener("pause", this.bound.stopCheckingDroppedFrames), this.J.removeEventListener("ended", this.bound.stopCheckingDroppedFrames) }, n.Gn = function() { this.jt = !0, this.Xn() }, n.$n = function() { this.jt = !1 }, n.Xn = function() {
                var t = this;
                if (this.jt && null !== this.zn) {
                    clearTimeout(this.Vn);
                    var n = this.Yn(),
                        i = n - this.qn;
                    this.qn = n;
                    var e = this.Zn(),
                        r = e - this.Wn;
                    this.Wn = e, this.Bn[this.zn] || (this.Bn[this.zn] = []), this.Hn[this.zn] || (this.Hn[this.zn] = []), this.Bn[this.zn].length > 100 && this.Bn[this.zn].shift(), this.Hn[this.zn].length > 100 && this.Hn[this.zn].shift(), this.Bn[this.zn].push(i), this.Hn[this.zn].push(r), this.Vn = setTimeout((function() { t.Xn() }), 1e3)
                }
            }, n.Yn = function() { return "function" == typeof this.J.getVideoPlaybackQuality ? this.J.getVideoPlaybackQuality().droppedVideoFrames : this.J.webkitDroppedFrameCount || 0 }, n.Jn = function() { return "function" == typeof this.J.getVideoPlaybackQuality ? this.J.getVideoPlaybackQuality().totalVideoFrames : this.J.webkitDecodedFrameCount || 0 }, n.Zn = function() { if ("function" == typeof this.J.getVideoPlaybackQuality) { var t = this.J.getVideoPlaybackQuality(); return t.totalVideoFrames - t.droppedVideoFrames - t.corruptedVideoFrames } return this.J.webkitDecodedFrameCount || 0 }, H(t, [{ key: "streamIndex", get: function() { return this.zn }, set: function(t) { this.zn = t } }]), t
        }(),
        yr = function() {
            function t(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                this.J = t, this.tt = n, nt(this);
                var i = this.tt,
                    e = i.fetcherTimeout,
                    r = void 0 === e ? 0 : e,
                    o = i.fetcherRetryAbortErrors,
                    u = void 0 === o || o;
                this.Mn = new gr(t), this.Sn = new MediaSource, this.Nn = new mr({ parallel: 1, timeout: r, retryAbortErrors: u }), this.Qn = {}, this.ti = [], this.ni = null, this.ii = this.ei.bind(this), this.xn()
            }
            var n = t.prototype;
            return n.switchTo = function(t) { return 1 === this.ti.length && this.video.switchTo(t) }, n.getCurrentSpeed = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    n = t.type,
                    i = void 0 === n ? "average" : n,
                    e = t.howMany,
                    r = void 0 === e ? 10 : e,
                    o = t.weights,
                    u = void 0 === o ? [] : o,
                    a = t.percentile,
                    s = void 0 === a ? null : a;
                return "harmonicAverage" === i ? mr.getHarmonicAverageSpeed(r) : "average" === i ? mr.getAverageSpeed(r, u) : "median" === i ? mr.getMedianSpeed(r) : mr.getPercentileSpeed(r, s)
            }, n.getVolatilityScaler = function(t) { return mr.getVolatilityScaler(t) }, n.getResponseSpeeds = function() { return mr.getResponseSpeeds() }, n.getFailedSegments = function() { return mr.getFailedSegments() }, n.getSuccessfulSegments = function() { return mr.getSuccessfulSegments() }, n.getDroppedFrameRate = function(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.activeStreamIndex,
                    i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "average";
                return this.Mn.getDroppedFrameRate(t, n, i)
            }, n.getDroppedFrameTotal = function() { return this.Mn.getDroppedFrameTotal() }, n.clear = function() { this.ti.forEach((function(t) { return t.clear() })) }, n.streamIndexAtTime = function(t, n) { return this.Qn[n].streamIndexAtTime(t) ? this.Qn[n].streamIndexAtTime(t).stream : null }, n.removeBuffer = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.J.duration;
                if (t >= (n = n || 0)) return r.resolve();
                var i = this.ti.map((function(i) { return i.remove(t, n) }));
                return r.all(i)
            }, n.addStream = function(t, n) {
                var i = this,
                    e = this.ri(t);
                if (!this.Qn[e]) {
                    var r = new wr(this, e);
                    this.Qn[e] = r, this.ti.push(r), this.readyPromise.then((function() {
                        var n;
                        try { n = i.Sn.addSourceBuffer(t) } catch (t) {
                            if (22 !== t.code) return void i.fire("srcnotsupported", t);
                            n = i.Qn[e]
                        }
                        i.tt.duration && (n.appendWindowEnd = i.tt.duration + .1), r.sourceBuffer = n
                    })).catch((function(t) {})), ["appendbufferstart", "appendbufferend", "streamchange", "streamchangestart", "initialbufferstart", "quotaexceedederror"].forEach((function(t) { r.on(t, (function(n) { i.fire(t, n) })) }))
                }
                var o = new br(n, t, this.Nn);
                return ["queued", "bufferqueueadd"].forEach((function(t) { o.on(t, (function(n) { i.fire(t, n) })) })), this.Qn[e].addStream(o), o
            }, n.checkEndOfStream = function() {
                var t = this;
                this.ti.every((function(t) { return t.hasAppendedFinalSegment() })) && this.J.addEventListener("timeupdate", (function n() { t.J.removeEventListener("timeupdate", n), t.ti.every((function(n) { return n.isTimeInBuffer(t.J.currentTime) })) && t.endOfStream() }))
            }, n.abortFetches = function() { this.Nn.abort() }, n.endOfStream = function() { "open" === this.Sn.readyState && (this.oi() || (this.Sn.endOfStream(), this.fire("endofstream"))) }, n.destroy = function() { this.clear(), this.ai(), this.off(), this.Mn.destroy(), this.Nn.abort(), this.J.src && (this.J.removeAttribute("src"), this.J.load()) }, n.xn = function() {
                var t = this;
                this.readyPromise = new r((function(n, i) { t.ni = n, t.Sn.addEventListener("sourceopen", t.ii) })), ["downloadstart", "downloadend", "downloadabort", "downloaderror", "downloadtimeout", "progress"].forEach((function(n) {
                    t.Nn.on(n, (function() {
                        for (var i = arguments.length, e = new Array(i), r = 0; r < i; r++) e[r] = arguments[r];
                        t.fire.apply(t, [n].concat(e))
                    }))
                }))
            }, n.oi = function() {
                for (var t = 0; t < this.Sn.sourceBuffers.length; t++)
                    if (this.Sn.sourceBuffers[t].updating) return !0;
                return !1
            }, n.ei = function() { URL.revokeObjectURL(this.J.src), this.Sn.removeEventListener("sourceopen", this.ii), this.tt.duration && (this.Sn.duration = this.tt.duration, this.fire("durationset")), this.ni() }, n.ai = function() { this.ti.forEach((function(t) { return t.removeEventListeners() })) }, n.ri = function(t) { return 0 === t.indexOf("audio") ? "audio" : "video" }, H(t, [{ key: "mediaSource", get: function() { return this.Sn } }, { key: "pendingFetches", get: function() { return this.Nn.pendingFetches } }, { key: "streams", get: function() { return 1 === this.ti.length && this.video.streams } }, { key: "activeStreamIndex", get: function() { return 1 === this.ti.length && this.video.activeStreamIndex } }, { key: "video", get: function() { return !!this.Qn.video && this.Qn.video } }, { key: "audio", get: function() { return !!this.Qn.audio && this.Qn.audio } }]), t
        }(),
        _r = function(t) {
            function n(n) { var i, e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; return (i = t.call(this, n) || this).tt = e, i.blacklisted = [], i.whitelisted = [], i.MAX_LOADABLE_SEGMENTS_AUTO = 3, i.MAX_LOADABLE_SEGMENTS_LOCKED = 15, i.SEGMENT_DURATION = 6, i }
            G(n, t), H(n, [{ key: "displayName", get: function() { return "MediaSource" } }]);
            var i = n.prototype;
            return i.isTimeInBuffer = function(t, n, i) { return this.si(t, t, n, i, 1) }, i.getDistanceFromBuffer = function(t, n) {
                for (var i = t, e = 0; e < n.length; e++)
                    if (n.start(e) <= t && n.end(e) >= t) { i = n.end(e); break }
                return i - t
            }, i.blacklist = function(t) { this.blacklisted[t] = 1 }, i.lock = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                this.whitelisted = t
            }, i.filterStreams = function(t, n, i) {
                for (var e, r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null, o = [], u = !1, a = 0; a < t.length; a++)
                    if (e && e[0] === t[a].width && e[1] === t[a].height) o.push(t[a]);
                    else {
                        if (u) break;
                        if (!(this.blacklisted[a] && -1 === this.whitelisted.indexOf(a) || this.whitelisted.length && -1 === this.whitelisted.indexOf(a)))
                            if (this.whitelisted.length) o.push(t[a]);
                            else {
                                var s = this.ci(n, i, t[a].width, t[a].height, r),
                                    c = 1e3 / (window.devicePixelRatio || 1),
                                    f = i < c ? 1.75 : 1;
                                s >= f && (u = !0), o.push(t[a]), e = [t[a].width, t[a].height]
                            }
                    }
                return o
            }, i.getCurrentSpeed = function() {
                var t = "average",
                    n = 3,
                    i = [1, 2, 5];
                return this.tt.tests && this.tt.tests.harmonic_average && this.tt.tests.harmonic_average.group && (t = "harmonicAverage", n = this.fi(), i = []), this.scanner.sorcerer.getCurrentSpeed({ type: t, howMany: n, weights: i })
            }, i.getAudioIndexFromVideo = function(t, n, i) { if (0 === n.length) return !1; if (!t[i]) return 0; for (var e = 0; e < n.length; e++) { if (n[e].bitrate < 8e4 && t[i].bitrate < 5e5) return e; if (n[e].bitrate > 144e3 && t[i].bitrate > 1e6) return e } return 0 }, i.li = function(t, n, i, e) {
                var r = i / e,
                    o = t - n * r,
                    u = n - t / r,
                    a = t - o,
                    s = n - u;
                return o > 0 && (s = n), u > 0 && (a = t), [a, s]
            }, i.ci = function(t, n, i, e) {
                var r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                    o = this.li(t, n, i, e),
                    u = i * e;
                r && (u *= r);
                var a = window.devicePixelRatio || 1,
                    s = o[0] * o[1] * a * a;
                return u / s
            }, i.fi = function() { var t = de(this.tt, "lookahead_count"); return t && t.group && t.data.count ? t.data.count : t && t.data.segment_lookahead_count ? t.data.segment_lookahead_count : this.MAX_LOADABLE_SEGMENTS_AUTO }, i.di = function(t, n, i) { var e = i && i.bitrate > 11e6; return 1 === this.whitelisted.length ? e ? 30 : this.MAX_LOADABLE_SEGMENTS_LOCKED * this.SEGMENT_DURATION : this.fi() * this.SEGMENT_DURATION }, i.si = function(t, n, i, e) {
                var r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
                if (!i) return !1;
                n = Math.min(n, e);
                for (var o = 0; o < i.length; o++) {
                    var u = le(i.start(o)) - r,
                        a = le(i.end(o)) + r;
                    if (u <= t && a >= n) return !0
                }
                return !1
            }, i.hi = function(t) { return t.video.length > 0 && t.audio.length > 0 }, i.vi = function(t, n, i, e) { var r = 1; return this.hi(e) && (r = .05), this.si(t.start, t.end, n, i, r) }, n
        }(function() {
            function t(t) { this.scanner = t }
            H(t, [{ key: "displayName", get: function() { return "Brain" } }]);
            var n = t.prototype;
            return n.shouldPowerUp = function(t, n) { return !1 }, n.shouldPowerDown = function(t, n) { return !1 }, n.canPowerUp = function(t, n) { return 1 !== t.length && n < t.length - 1 }, n.canPowerDown = function(t, n) { return 1 !== t.length && n > 0 }, n.filterStreams = function(t) { return t }, t
        }()),
        kr = function(t) {
            function n(n) { var i, e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; return (i = t.call(this, n, e) || this).BANDWIDTH_UPSWITCH_THRESHOLD = .85, i.BANDWIDTH_DOWNSWITCH_THRESHOLD = .9, i }
            G(n, t), H(n, [{ key: "displayName", get: function() { return "Skyfire" } }]);
            var i = n.prototype;
            return i.shouldPowerUp = function(t, n, i) { i && this.tt.startingBandwidthThreshold && (this.BANDWIDTH_UPSWITCH_THRESHOLD = this.tt.startingBandwidthThreshold); var e = t.indexOf(n); if (-1 === e && (e = 0), !this.canPowerUp(t, e)) return r.resolve(!1); var o = this.getCurrentSpeed(); if (!o) return r.resolve(!1); var u = this.pi(o, this.BANDWIDTH_UPSWITCH_THRESHOLD, t); if (u === e) return r.resolve(!1); var a = de(this.tt, "upswitch_health"); return a && a.group && !i && u > e && lt(this.scanner.currentTime, this.scanner.J.buffered) < 1.5 * this.SEGMENT_DURATION ? r.resolve(!1) : r.resolve(u) }, i.shouldPowerDown = function(t, n) { var i = t.indexOf(n); if (-1 === i) { var e = this.isTimeInBuffer(this.scanner.J.duration, this.scanner.J.buffered, this.scanner.J.duration); return this.whitelisted.length || this.blacklisted.length || !e ? r.resolve(t.length - 1) : r.resolve(!1) } if (!this.canPowerDown(t, i)) return r.resolve(!1); var o = this.getCurrentSpeed(); if (!o) return r.resolve(!1); if (this.hasTooManyDroppedFrames(i, n, this.tt.droppedFrameSwitchPercent)) return r.resolve(i - 1); var u = this.pi(o, this.BANDWIDTH_DOWNSWITCH_THRESHOLD, t); return u === i ? r.resolve(!1) : r.resolve(u) }, i.hasTooManyDroppedFrames = function(t, n, i) { return this.scanner.sorcerer.getDroppedFrameRate(10, t, "median") / n.framerate * 100 >= i && (this.blacklist(t), !0) }, i.getTimeEstimateToLoad = function(t, n) {
                if (null === n) return 3;
                var i = n.segments[t],
                    e = i.end - i.start,
                    r = this.getCurrentSpeed();
                return e * (n.bitrate + n.audioBitrate) / r * 1.3
            }, i.canPlayFromTimeInStream = function(t, n) { if (!this.isTimeInBuffer(t, this.scanner.J.buffered, this.scanner.J.duration)) return !1; if (!n) return !1; var i = this.getSegmentsToLoad(!1, "video", n); if (0 === i.length) return !0; var e = lt(t, this.scanner.J.buffered); return this.getTimeEstimateToLoad(i[0], n) < e }, i.getSegmentsToLoad = function(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "video",
                    i = arguments.length > 2 ? arguments[2] : void 0,
                    e = this.scanner.J,
                    r = this.scanner.currentTime,
                    o = [],
                    u = this.di(r, e.duration, i),
                    a = r + u,
                    s = this.scanner.sorcerer[n].activeStreamIndex,
                    c = this.scanner.fn[n][s];
                if (!c) return o;
                var f = this.scanner.sorcerer[n].sourceBuffer,
                    l = null;
                f && (l = f.buffered);
                for (var d = 0; d < c.segments.length; d++) {
                    var h = c.segments[d];
                    if (!(h.end < r || h.start > a)) {
                        var v = r >= h.start && r < h.end,
                            p = this.vi(h, l, this.scanner.J.duration, this.scanner.fn);
                        !t && p || t && p && v || (v || a >= h.start) && o.push(d)
                    }
                }
                return o
            }, i.pi = function(t, n, i) { for (var e = 0, r = e; r < i.length; r++) t * n > i[r].bitrate + i[r].audioBitrate && (e = r); return e }, n
        }(_r),
        Er = function(t) {
            function n(n) { var i, e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; return (i = t.call(this, n, e) || this).mi = e.tests.ml_brain.data.mimir_url, i.wi = e.tests.ml_brain.data.geolocation, i.bi = {}, i.gi = null, i.yi = [], i._i = [], i.ki = [], i.Ei = [], i.Ti = [], i.Si = [], i.xi = [], i.Mi = null, i.Ai = null, i.Ci = null, i.Ri = !1, i.Oi = !1, i.Ii = 0, i.ji = [], i.scanner.on(_i.DOWNLOAD_START, i.Di.bind(Z(i))), i.scanner.on(_i.DOWNLOAD_END, i.Li.bind(Z(i))), i.scanner.on(_i.APPEND_BUFFER_END, i.Pi.bind(Z(i))), Ae.hooks.beforeRequest.push(i.Ni), Ae.hooks.afterResponse.push(i.Fi), i }
            G(n, t), H(n, [{ key: "displayName", get: function() { return "ML" } }]);
            var i = n.prototype;
            return i.Di = function(t) { var n = t.identifier; "video" === n.type && (this.Ai = { index: n.segment, streamIndex: n.stream, complete: null }), "audio" === n.type && (this.Ci = { index: n.segment, streamIndex: n.stream, complete: null }) }, i.Ui = function(t) { var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "video"; return "video" === n ? null !== this.Ai && this.Ai.index === t.segment && this.Ai.streamIndex === t.stream : "audio" === n && null !== this.Ci && this.Ci.index === t.segment }, i.Vi = function() { return null !== this.Ai || null !== this.Ci }, i.Li = function(t) {
                var n = t.identifier,
                    i = t.data,
                    e = i.request,
                    r = i.response,
                    o = e.data.duration / 1e3,
                    u = r.body.byteLength;
                "video" === n.type && this.Ui(n, "video") && (this.Ai.complete = { downloadTime: o, byteLength: u, uuid: e.data.uuid }, this.Oi || (this.Bi(n.stream, n.segment - 1, o, u), this.Oi = !0)), "audio" === n.type && this.Ui(n, "audio") && (this.Ci.complete = { downloadTime: o, byteLength: u, uuid: e.data.uuid })
            }, i.Pi = function(t) {
                var n = this,
                    i = t.identifier,
                    e = function(t, e, r) { n.Bi(i.stream, i.segment - 1, t, e, r), n.Ai = null, n.Ci = null };
                if (this.hi(this.scanner.fn)) {
                    if (this.Ui(i, "video") && this.Ui(i, "audio") && null !== this.Ai.complete && null !== this.Ci.complete) {
                        var r = this.Ai.complete,
                            o = this.Ci.complete;
                        e(r.downloadTime + o.downloadTime, r.byteLength + o.byteLength, r.uuid)
                    }
                } else if (this.Ui(i, "video") && null !== this.Ai.complete) {
                    var u = this.Ai.complete;
                    e(u.downloadTime, u.byteLength, u.uuid)
                }
            }, i.Bi = function(t, n, i, e, r) {
                var o = this.scanner.fn.video[t],
                    u = this.scanner.sorcerer.video.sourceBuffer;
                u && o && (this.yi.push(this.getTotalBufferDuration()), this.Ei.push(lt(this.scanner.currentTime, u.buffered)), this.Ti.push(t), this._i.push(i), this.ki.push(e), this.Si.push(o.segments.length - n), this.xi.push(r))
            }, i.handleScrubEnd = function(t) {
                var n = this._i.length,
                    i = n ? this._i[n - 1] : 0,
                    e = this.ki.length,
                    r = e ? this.ki[e - 1] : 0,
                    o = this.scanner.fn.video[t],
                    u = this.Hi(o),
                    a = u ? u.index : this.Si[this.Si.length - 1],
                    s = this.xi.length ? this.xi[this.xi.length - 1] : "";
                this.Bi(t, a, i, r, s)
            }, i.shouldPowerUp = function(t, n, i) {
                var e = t.indexOf(n);
                if (-1 === e && (e = 0), 1 === this.whitelisted.length) return this.whitelisted[0] > e ? r.resolve(0) : r.resolve(!1);
                if (1 === this.scanner.fn.video.length) return r.resolve(!1);
                if (!this.canPowerUp(t, e)) return r.resolve(!1);
                if (this.scrubInProgress) return r.resolve(!1);
                var o = this.Hi(n);
                if (null === o) return r.resolve(!1);
                var u = { index: o.index, streamIndex: o.streamIndex },
                    a = o.index;
                if (null !== this.gi && this.gi.index === u.index && this.gi.streamIndex === u.streamIndex) return r.resolve(!1);
                if (!(a in this.bi)) return this.qi(u, t, n).then((function(t) { return t > e && t })).catch(console.error);
                var s = this.bi[a];
                return s > e ? r.resolve(s) : r.resolve(!1)
            }, i.shouldPowerDown = function(t, n) {
                var i = t.indexOf(n);
                if (-1 === i) { var e = this.isTimeInBuffer(this.scanner.J.duration, this.scanner.J.buffered, this.scanner.J.duration); return this.whitelisted.length || this.blacklisted.length || !e ? r.resolve(t.length - 1) : r.resolve(!1) }
                if (1 === this.whitelisted.length) return this.whitelisted[0] < i ? r.resolve(0) : r.resolve(!1);
                if (1 === this.scanner.fn.video.length) return r.resolve(!1);
                if (!this.canPowerDown(t, i)) return r.resolve(!1);
                if (this.scrubInProgress) return r.resolve(!1);
                var o = this.Hi(n);
                if (null === o) return r.resolve(!1);
                var u = { index: o.index, streamIndex: o.streamIndex },
                    a = o.index;
                if (null !== this.gi && this.gi.index === u.index && this.gi.streamIndex === u.streamIndex) return r.resolve(!1);
                if (!(a in this.bi)) return this.qi(u, t, n).then((function(t) { return t < i && t })).catch(console.error);
                var s = this.bi[a];
                return s < i ? r.resolve(s) : r.resolve(!1)
            }, i.getTotalBufferDuration = function() {
                var t = this.scanner.sorcerer.video.sourceBuffer,
                    n = 0;
                if (!t) return n;
                for (var i = 0; i < t.buffered.length; i++) {
                    var e = t.buffered.start(i);
                    n += t.buffered.end(i) - e
                }
                return n
            }, i.canPlayFromTimeInStream = function(t, n) { return !!this.isTimeInBuffer(t, this.scanner.J.buffered, this.scanner.J.duration) && !!n }, i.Wi = function(t) { var n = t.slice(0); if (n.length < 8) { for (var i = 8 - n.length, e = 0; e < i; e++) n.unshift(0); return n } return n.slice(n.length - 8, n.length) }, i.zi = function(t, n) {
                for (var i = this, e = { 240: 1, 360: 2, 480: 3, 540: 3, 720: 4, 1080: 5, 1440: 6, 2160: 7 }, r = { 240: 0, 360: 1, 480: 2, 540: 2, 720: 3, 1080: 4, 1440: 5, 2160: 6 }, o = [0, 0, 0, 0, 0, 0, 0, 0], u = [0, 0, 0, 0, 0, 0, 0, 0], a = 0; a < n.length; a++) {
                    var s = n[a],
                        c = parseInt(s.quality, 10);
                    c in e && (o[e[c]] = 1);
                    var f = this.getAudioIndexFromVideo(n, this.ji, a),
                        l = null;
                    !1 !== f && (l = this.ji[f]);
                    for (var d = 0; d < s.segments.length; d++)
                        if (d === t && c in r) {
                            var h = s.segments[d].size,
                                v = l ? l.segments[d].size : 0;
                            u[r[c]] = h + v
                        }
                }
                var p = this.Ti.map((function(t) { return parseInt(i.scanner.fn.video[t].quality, 10) }));
                return {
                    availableQualities: o,
                    nextChunkSizes: u,
                    lastBufferSizes: this.Wi(this.yi),
                    lastChunkDownloadTimes: this.Wi(this._i),
                    lastChunkSizes: this.Wi(this.ki),
                    lastChunkQualities: this.Wi(p),
                    numRemainingChunks: this.Wi(this.Si),
                    lastPlaybackHeads: this.Wi(this.Ei),
                    geolocation: [
                        [this.wi]
                    ]
                }
            }, i.Gi = function(t, n) { for (var i = -1, e = -1, r = 0; r < t.length; r++) t[r] > e && (e = t[r], i = r); for (var o = [], u = 0; u < n.length; u++) 1 === n[u] && o.push(u); return { 1: 240, 2: 360, 3: 540, 4: 720, 5: 1080, 6: 1440, 7: 2160 }[o[i]] }, i.$i = function(t, n) { for (var i = 0; i < n.length; i++) { var e = parseInt(n[i].quality, 10); if (e === t) return i; if (480 === e && 540 === t) return i } return 0 }, i.Ni = function(t) { t.startTime = ee() }, i.Fi = function(t, n) { return n.duration = re(t.startTime), n }, i.qi = function(t, n, i) {
                var e = this,
                    r = this.zi(t.index, n);
                return this.gi = t, Ye.post(this.mi, { json: { inputs: r }, timeout: 2e3 }).then((function(i) {
                    var o = JSON.parse(i.body),
                        u = e.Gi(o.outputs[0], r.availableQualities),
                        a = e.$i(u, n);
                    if (e.bi[t.index] = a, e.xi.length && e.Mi) {
                        var s = e.xi[e.xi.length - 1];
                        e.scanner.fire(Si.BRAIN_ML_MODEL_INPUTS, z({ chunkRequestID: s, duration: i.duration, geolocation: e.wi }, e.Mi))
                    }
                    return e.Mi = r, e.gi = null, a
                })).catch((function(n) {
                    if (n instanceof Oe) {
                        var i = { status: n.response.status, resp: n.response.body, url: e.mi };
                        e.scanner.fire(Si.BRAIN_ML_MODEL_ERR, i), e.Ii++
                    }
                    if (n instanceof je) {
                        var r = { url: e.mi };
                        e.scanner.fire(Si.BRAIN_ML_MODEL_TIMEOUT, r), e.Ii++
                    }
                    if (n instanceof Ie) {
                        var o = { url: e.mi };
                        e.scanner.fire(Si.BRAIN_ML_MODEL_NET_ERR, o), e.Ii++
                    }
                    e.Ii >= 2 && e.scanner.resetBrain(!0);
                    var u = t.streamIndex;
                    return e.bi[t.index] = u, e.gi = null, u
                }))
            }, i.Hi = function(t) {
                var n = this.scanner.sorcerer.video.sourceBuffer,
                    i = null;
                if (n && (i = n.buffered), null === i) return null;
                for (var e = this.Ki(t), r = 0; r < e.length; r++) { var o = e[r].segment; if (!this.vi(o, i, this.scanner.J.duration, this.scanner.fn)) return e[r] }
                return null
            }, i.Ki = function(t) {
                var n = this.scanner.J,
                    i = this.scanner.currentTime,
                    e = i + this.di(i, n.duration, t),
                    r = [],
                    o = this.scanner.sorcerer.video.activeStreamIndex,
                    u = this.scanner.fn.video[o];
                if (!u) return r;
                for (var a = 0; a < u.segments.length; a++) {
                    var s = u.segments[a];
                    s.end < i || s.start > e || (i >= s.start && i < s.end || e >= s.start) && r.push({ segment: s, index: a, streamIndex: o })
                }
                return r
            }, i.Yi = function(t, n) {
                var i = this;
                Object.keys(this.bi).filter((function(n) { return -1 === t.indexOf(parseInt(n, 10)) })).forEach((function(t) {
                    var e = i.bi[t],
                        r = i.scanner.fn.video[e].segments[t];
                    i.vi(r, n, i.scanner.J.duration, i.scanner.fn) || delete i.bi[t]
                }))
            }, i.getSegmentsToLoad = function(t, n, i) {
                var e = this.Ki(i),
                    r = this.scanner.sorcerer[n].sourceBuffer,
                    o = null;
                r && (o = r.buffered), this.Yi(e.map((function(t) { return t.index })), o);
                for (var u = [], a = 0; a < e.length; a++) {
                    var s = e[a].segment,
                        c = e[a].index,
                        f = this.vi(s, o, this.scanner.J.duration, this.scanner.fn),
                        l = c in this.bi;
                    f || !l && 1 !== this.whitelisted.length && 1 !== this.scanner.fn.video.length || u.push(c)
                }
                return u
            }, H(n, [{ key: "audioStreams", set: function(t) { this.ji = t } }, { key: "scrubInProgress", set: function(t) { this.Ri = t }, get: function() { return this.Ri } }]), n
        }(_r),
        Tr = function() {
            function t(t, n) { this.J = t, this.Ji = n }
            var n = t.prototype;
            return n.start = function() { return clearInterval(this.Xi), this.Xi = setInterval(this.Zi.bind(this), 200), this.Zi() }, n.stop = function() { clearInterval(this.Xi) }, n.Zi = function() {
                var t = this.J.buffered,
                    n = this.J.currentTime,
                    i = this.Qi(t, n);
                if (0 === this.J.readyState) return !1;
                if (this.J.seeking) return !1;
                if (this.J.paused) return !1;
                var e = this.J.duration;
                if (n >= e) return this.J.currentTime = e - .1, !0;
                if (t.length <= i) return !1;
                var r = t.start(i);
                return !(r >= e) && (0 === i && (this.stop(), this.te("audio", r), this.te("video", r), this.J.currentTime = r, !0))
            }, n.Qi = function(t, n) {
                if (!t || !t.length) return null;
                for (var i = 0; i < t.length; i++) {
                    var e = t.start(i),
                        r = t.end(i);
                    if (e > n && (0 === i || r - n <= .1)) break
                }
                return i >= 0 ? i : null
            }, n.te = function(t, n) {
                var i = this.Ji(0, t);
                i && i.segments && i.segments[0] && (i.segments[0].start = n)
            }, t
        }(),
        Sr = function(t) {
            function n(n) { var i, e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; return (i = t.call(this, n, e) || this).reset(), i.manifestLoadDurations = [], e.mediaSourceScanner && (i.ne = e.mediaSourceScanner.maxPreloadStreamIndex), i }
            G(n, t), H(n, null, [{ key: "displayName", get: function() { return "MediaSourceScanner" } }, { key: "supported", get: function() { return "undefined" != typeof MediaSource && MediaSource.isTypeSupported } }, { key: "supportedVideoTypes", get: function() { return ["application/vnd.vimeo.dash+json", "video/vnd.mpeg.dash.mpd"] } }]);
            var i = n.prototype;
            return i.deactivate = function() { t.prototype.deactivate.call(this), this.sorcerer && this.sorcerer.destroy(), this.reset() }, i.reset = function() { this.ee = new xe, this.re = {}, this.oe = new Tr(this.J, this.Ji.bind(this)), this.resetBrain(), this.ue = !1, this.ae = !1, this.Mt = null, this.fn = {}, this.fn.audio = [], this.fn.video = [], this.ji = [], this.se = null, this.ce = null, this.fe = null, this.le = null, this.de = null, this.he = null, this.ve = !1, this.pe = null, this.me = !1, this.we = !1, this.be = null, this.ge = null, this.ye = !1, this._e = [], this.ke = {}, this.Ee = 0, this.Te = null, clearInterval(this.Se), clearTimeout(this.xe) }, i.resetBrain = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    n = this.tt.mediaSourceScanner || {};
                if (n.tests = this.tt.tests, t) { var i = he(this.Me); return this.Me = new kr(this, n), void(i && this.fire(Si.BRAIN_ML_SWITCH_TO_SKYFIRE)) }
                this.Me = new kr(this, n);
                var e = de(n, "ml_brain");
                e && e.group && e.data.use_model && (this.Me = new Er(this, n))
            }, i.preloadStream = function() {
                var t = this;
                if (this.be) return this.be;
                var n = 0,
                    i = 1;
                this.fn.audio.length && (i = 2);
                var e = this.sorcerer.video.activeStreamIndex;
                this._e.length && (e = this._e[0]);
                var o = 0,
                    u = this.Me.getSegmentsToLoad(!1, "video", e);
                u.length > 0 && (o = u[0]);
                var a = function() {},
                    s = function() {
                        var n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        n && (e = t.sorcerer.video.activeStreamIndex), t.Te = e, t.Ae(!0)
                    },
                    c = function(e) {
                        (n += 1) < i || (e.segment === o && 0 === t._e.length ? t.Ce(!0).then((function(i) {
                            if (!1 !== i && i > e.stream) {
                                if (t.sorcerer.video.switchTo(i, !1), t.fn.audio.length) {
                                    var r = t.Me.getAudioIndexFromVideo(t.fn.video, t.fn.audio, i);
                                    t.sorcerer.audio.switchTo(r, !1)
                                }
                                return n = 0, void s(!0)
                            }
                            a()
                        })).catch(console.error) : a())
                    };
                return this.be = new r((function(n, i) {
                    a = function() {
                        var i = t.Ji(e).segments[0].end,
                            r = t.Re(!0);
                        if (t.currentTime >= r && (t.currentTime = r), t.currentTime > i && (t.sorcerer.clear(), t.ee = new xe), t.sorcerer.video.switchTo(e, !1), t.fn.audio.length) {
                            var o = t.Me.getAudioIndexFromVideo(t.fn.video, t.fn.audio, e);
                            t.sorcerer.audio.switchTo(o, !1)
                        }
                        t.sorcerer.off("bufferqueueadd", c), t.Te = null, t.ue = !0, n()
                    }, t.sorcerer.on("bufferqueueadd", c), s()
                })), this.be
            }, i.loadManifest = function(t) {
                var n = this,
                    i = Date.now();
                return Ui.browser.ie && t && -1 !== t.indexOf("archive_playlist") ? (setTimeout((function() { n._t("MediaUnknownError", "An unknown error occurred.") }), 250), new r((function() {}))) : Ye({ url: t, timeout: 1e4, type: Me.MANIFEST }).then((function(e) { return e.url && e.url !== t && -1 !== e.url.indexOf("live-archive") && (n.ce = e.url.split("/").slice(0, -2).join("/")), n.manifestLoadDurations.push({ url: t, status: e.status, duration: Date.now() - i }), n.fire(_i.MANIFEST_LOADED), e.text() })).then(function(t) { return function() { for (var n = [], i = 0; i < arguments.length; i++) n[i] = arguments[i]; try { return r.resolve(t.apply(this, n)) } catch (t) { return r.reject(t) } } }((function(n) {
                    var i;
                    return function(e, o) {
                        var u = function() {
                            if (-1 !== t.indexOf(".mpd")) return function(t, n, i) { return t && t.then || (t = r.resolve(t)), n ? t.then(n) : t }(st("module/media-manifest.js"), (function(e) {
                                var r = e.parseMPD;
                                i = r(n, t)
                            }));
                            i = JSON.parse(n)
                        }();
                        return u && u.then ? u.then(o) : o()
                    }(0, (function() { return i }))
                }))).catch((function(e) { if (n.manifestLoadDurations.push({ url: t, status: e.response && e.response.status, duration: Date.now() - i }), n.reset(), e instanceof Oe && 410 === e.response.status) return n.fire(_i.MEDIA_URL_EXPIRED), new r((function() {})); throw e instanceof Oe && 400 === e.response.status ? n.fire(_i.MEDIA_URL_BAD_REQUEST, e.response.url) : e instanceof je && n.fire(_i.MANIFEST_TIMEOUT), e }))
            }, i.setVideoSrc = function(t, n) {
                var i = this,
                    e = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                if (e && !n && this.se) {
                    if (("metadata" === this.at || "none" === this.at && !this.paused) && !this.ue) return void this.se.then((function() {
                        var n = i.paused;
                        i.setVideoSrc(t, n, !1)
                    })).catch(console.error);
                    if ("auto" === this.at) return void this.se.then((function() { i.setVideoSrc(t, !1, !1) })).catch(console.error)
                }
                n && this.reset(), n || !this.paused || this.sorcerer || (n = !0);
                var r = this.Oe;
                n && (r = this.Ut);
                var o = t.split("/");
                o.pop();
                var u = "".concat(o.join("/"), "/");
                this.ve = !n, this.se = this.Ie(t, this.at).then(this.loadManifest.bind(this)).then((function(t) { return "string" == typeof i.ce && -1 !== i.ce.indexOf("live-archive") || (i.ce = u), t })).then(r.bind(this)), n && "auto" === this.at && (this.se = this.je(this.se, this.preloadStream.bind(this), !1)), this.se = this.De(this.se)
            }, i.getBitrateAtTime = function(t, n) { if (!this.sorcerer) return 0; var i = this.sorcerer.streamIndexAtTime(t, n); return this.fn[n][i] ? this.fn[n][i].bitrate : 0 }, i.lockStreamIndexes = function() {
                var t = this,
                    n = this._e.map((function(n) { return t.fn.video.indexOf(t.fn.video[n]) })),
                    i = !this.paused;
                if (i && (this.Le = !0, this.J.pause()), this.ke.video = !1, this.Me.lock(n), this.ae || "auto" === this.at) {
                    var e = Math.max(this.currentTime - 7, 0),
                        r = Math.min(this.currentTime + 7, this.J.duration);
                    this.sorcerer.removeBuffer(e, r).then((function() {!t.ae && "auto" === t.at || t.ended ? t.Pe() : (t.seekToTime(t.currentTime), i && t.paused && (t.Ne = !0, t.J.play())) })).catch(console.error)
                }
            }, i.seekToTime = function(t) {
                var n = this;
                if (t === this.currentTime) return r.resolve();
                var i = null === this.le;
                if (i || (this.Fe && (this.Fe(), this.Fe = null), this.Ue = null, this.le = null, this.de = null), this.le = t, this.Ve(), this.ue)
                    for (var e in this.fn)
                        if (this.fn[e].length > 0) {
                            var o = this.sorcerer[e].activeStreamIndex;
                            this.sorcerer[e].streams[o].abort()
                        }
                return this.Ue = this.Be(t), r.all([this.se, this.ge]).then((function() { n.Pe() })).catch(console.error), this.He && 0 === t && this.fire(bi.SEEKING), i || this.play().catch(this.lt.bind(this)), this.se.then((function() { return n.Ue })).catch((function(t) {}))
            }, i.takeSnapshot = function() {}, i.initDrm = function() {}, i.onstalled = function() { return !1 }, i.onseeked = function(t) { this.ae && this.Ae() }, i.onended = function(n) { return t.prototype.onended.call(this, n), !0 }, i.onseeking = function(t) { this.ae }, i.Ve = function() {
                var t = this;
                this.qe(), clearTimeout(this.We), this.We = setTimeout((function() { t.ze() }), 200)
            }, i.qe = function() { this.Ge || (this.Ge = !0, he(this.Me) && (this.Me.scrubInProgress = !0)) }, i.ze = function() {
                if (this.Ge = !1, he(this.Me)) {
                    this.Me.scrubInProgress = !1;
                    var t = this.sorcerer.video.activeStreamIndex;
                    this.Me.handleScrubEnd(t), this.Pe()
                }
            }, i.ontimeupdate = function(n) {
                if (!this.sorcerer) return !1;
                if (t.prototype.ontimeupdate.call(this), this.oe.stop(), 0 === this.currentTime) return this.ae;
                if (this.le) return !1;
                this.ae || (this.ae = !0), this.we && this.currentTime >= this.we && (this.sorcerer.removeBuffer(0, this.we - 2), this.we = !1);
                var i = this.sorcerer.getDroppedFrameTotal();
                this.fire(_i.DROPPED_FRAMES, i);
                var e = this.sorcerer.getResponseSpeeds(),
                    r = this.fn.video[this.sorcerer.video.activeStreamIndex],
                    o = this.tt.tests && this.tt.tests.download_bitrate;
                if ((!o || !o.group) && r && this.Me.getCurrentSpeed) {
                    var u = { speed: this.Me.getCurrentSpeed(), bitrate: r.bitrate, speeds: e };
                    this.fire(_i.BANDWIDTH, u)
                }
                var a = this.J.buffered.length;
                if (!a) return !0;
                var s = this.J.buffered.end(a - 1);
                return Math.ceil(s) === Math.ceil(this.J.duration) || (Math.abs(this.currentTime - s) < .2 ? (this.ye || (this.fire(_i.STREAM_BUFFER_START, { hasLowerStreamIndex: this.sorcerer.video.activeStreamIndex > 0 }), this.ye = !0), !1) : void 0)
            }, i.$e = function() { return !!this.ended || Math.ceil(this.currentTime) === Math.ceil(this.J.duration) }, i.Ke = function() { return !!this.sorcerer && !this.$e() && (null !== this.Te ? (this.Ye(), !0) : 0 !== this.currentTime || this.ue ? (this.Pe(), !0) : this.ae) }, i.onprogress = function() { this.Me.canPlayFromTimeInStream(this.currentTime, this.Ji()) && this.ye && (this.fire(_i.STREAM_BUFFER_END), this.ye = !1) }, i.onwaiting = function() { return !this.oe.start() }, i.onerror = function() { return !!this.J.error && (this.J.error.code === this.J.error.MEDIA_ERR_DECODE ? (this.fire(_i.SCANNER_ERROR, { reason: "encountered media decode error" }), !1) : t.prototype.onerror.call(this)) }, i.pause = function() { t.prototype.pause.call(this) }, i.play = function() { var n = this; return this.Ae(), t.prototype.play.call(this, (function() { return n.he && n.he(), n.ve || n.ue || "auto" === n.at || (n.se = n.je(n.se, n.preloadStream.bind(n))), n.se.then((function() { return r.resolve(n.Ue) })) })) }, i.onpause = function() { return this.Le ? (this.Le = !1, !1) : (t.prototype.onpause.call(this), !0) }, i.onplay = function() { return !this.Ne || (this.Ne = !1, !1) }, i.je = function(t, n) {
                var i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                    e = t.then(n);
                return i && (e = this.De(e)), e
            }, i.De = function(t) { var n = this; return t.catch((function(t) { return n.fire(_i.FILE_ERROR, { reason: t }), new r((function(t, n) {})) })) }, i.Je = function() { this.ue && this.fn.video[this.sorcerer.video.activeStreamIndex].bitrate / 1e3 > 12e3 && (this.ge = this.sorcerer.removeBuffer()) }, i.Ie = function(t, n) { var i = this; return new r((function(e, r) { "none" !== n || i.ve && !i.paused ? e(t) : i.he = function() { e(t), i.he = null } })) }, i.Be = function() {
                var t = this,
                    n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.le;
                return new r((function(i, e) {
                    var r = t.ae && 0 === n,
                        o = t.Me.canPlayFromTimeInStream(n, t.Ji());
                    r || o ? i(n) : (t.Je(), t.de = i)
                })).then((function(n) { t.le = null, t.Ue = null; var i = new r((function(n, i) { t.Fe = i, t.J.addEventListener("seeked", (function i() { n(t.J.currentTime), t.J.removeEventListener("seeked", i) })) })); return t.J.currentTime = n, i }))
            }, i.Xe = function(t, n) { "auto" !== t && "auto" === n && (this.se = this.je(this.se, this.preloadStream.bind(this))), t !== n && "none" !== n && this.he && this.he() }, i.Ze = function(t) {
                var n = t.audio.reduce((function(t, n) { return t + n.duration }), 0),
                    i = t.video.reduce((function(t, n) { return t + n.duration }), 0),
                    e = n / t.audio.length,
                    r = i / t.video.length;
                return e + 4 < r ? r - e : 0
            }, i.Qe = function(t) { return t.video.every((function(t) { return t.segments.every((function(t) { return "size" in t })) })) }, i.Oe = function(t) {
                var n = this;
                return new r((function(i, e) {
                    if (n.Mt = t, n.fn.video = n.tr(t.video), t.audio) {
                        var r = n.Ze(t);
                        if (r > 0) return n.fire(_i.AV_DURATION_MISMATCH, r), n.fire(_i.SCANNER_ERROR, { reason: "Encountered A/V duration mismatch" }), void e();
                        n.fn.audio = n.tr(t.audio)
                    }
                    for (var o = 0; o < n.fn.video.length; o++) {
                        var u = 0;
                        if (t.audio) {
                            var a = n.Me.getAudioIndexFromVideo(n.fn.video, n.fn.audio, o),
                                s = n.fn.audio[a];
                            s && (u = s.bitrate)
                        }
                        n.fn.video[o].audioBitrate = u
                    }
                    he(n.Me) && n.fn.audio.length > 0 && (n.Me.audioStreams = n.fn.audio), n.nr(n.fn.video, n.fn.audio, n.Mt.key_info), n.Qe(t) || n.resetBrain(!0), n.fire(_i.STREAMS_LOADED, n.fn), i()
                }))
            }, i.ir = function(t, n) { this.sorcerer && this.sorcerer.destroy(), this.sorcerer = new yr(t, n), this.J.src = URL.createObjectURL(this.sorcerer.mediaSource), this.successfulSegments = this.sorcerer.getSuccessfulSegments(), this.failedSegments = this.sorcerer.getFailedSegments(), this.Ae() }, i.Ae = function() {
                var t = this,
                    n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                this.er(500), clearTimeout(this.xe), this.xe = setTimeout((function() { t.er(5e3) }), 6e4), n && this.Ke()
            }, i.er = function(t) {
                var n = this;
                clearInterval(this.Se), this.Se = setInterval((function() { n.Ke() }), t)
            }, i.Re = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    n = t ? 1 / 0 : 0;
                for (var i in this.fn) this.fn[i].length && (n = Math[t ? "min" : "max"](n, this.fn[i][0].duration));
                return n
            }, i.Ut = function(t) {
                var n = this;
                return this.Oe(t).then((function() {
                    var i = n.video && n.video.metadata.percentShown ? n.video.metadata.percentShown : null,
                        e = n.Me.filterStreams(n.fn.video, n.J.clientWidth, n.J.clientHeight, i).length - 1,
                        r = n.fn.video[0];
                    n._e.length && (r = n.fn.video[n._e[0]]), void 0 !== n.ne && e <= n.fn.video.indexOf(t.video[n.ne]) && (r = n.fn.video[e]), n.ir(n.J, { duration: n.Re(), fetcherTimeout: 8e3, fetcherRetryAbortErrors: !1 }), n.sorcerer.on("srcnotsupported", (function() { n.fire(_i.SCANNER_ERROR, { reason: "this codec is not supported for mediasource playback" }) }));
                    var o = n.fn.video.indexOf(r),
                        u = function(t) {
                            n.fn[t].forEach((function(i, e) {
                                var r = n.rr(e, "init", t);
                                n.or(e, t) && n.fn[t][e].init_segment_range && (r = { url: r, byteRange: n.ur(e, "init", t) }), n.sorcerer.addStream("".concat(i.mime_type, '; codecs="').concat(n.fn[t][e].codecs, '"'), r)
                            }))
                        };
                    for (var a in n.fn) u(a);
                    n.sorcerer.video.switchTo(o), n.sorcerer.on("queued", n.ar.bind(n)), n.sorcerer.on("downloadabort", n.sr.bind(n)), n.sorcerer.on("appendbufferend", n.Pi.bind(n)), n.sorcerer.on("downloadstart", n.Di.bind(n)), n.sorcerer.on("downloadend", n.Li.bind(n)), n.sorcerer.on("downloaderror", n.cr.bind(n)), n.sorcerer.on("downloadtimeout", n.lr.bind(n)), n.sorcerer.on("quotaexceedederror", n.dr.bind(n)), n.sorcerer.video.on("streamchange", n.hr.bind(n)), n.sorcerer.video.on("streamchangestart", n.pr.bind(n)), n.sorcerer.mediaSource.addEventListener("sourceended", (function() { n.fire(bi.PROGRESS) }))
                }))
            }, i.tr = function(t) {
                var n = t.slice(0);
                return n.sort((function(t, n) {
                    var i = t.width * t.height * t.bitrate,
                        e = n.width * n.height * n.bitrate;
                    return t.width === n.width && t.height === n.height ? t.framerate - n.framerate : i - e
                })), n
            }, i.or = function(t, n) { return !!this.fn[n][t].segments[0].range }, i.ur = function(t, n, i) { return "init" === n ? this.fn[i][t].init_segment_range : this.fn[i][t].segments[n].range }, i.mr = function(t, n) {
                var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "video",
                    e = "init" === n;
                if (e) return 0;
                var r = this.fn[i][t].segments[n].start;
                return r
            }, i.rr = function(t, n) {
                var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "video",
                    e = "init" === n;
                if (e && !this.fn[i][t].init_segment_range && -1 === this.fn[i][t].init_segment.indexOf(".")) { var r = this.fn[i][t].init_segment; return ae(r) }
                var o = this.ce,
                    u = this.Mt.base_url && -1 !== this.Mt.base_url.indexOf("//");
                return u && (o = this.Mt.base_url), this.Mt.base_url && !u && (o += this.Mt.base_url), this.fn[i][t].base_url && (o += this.fn[i][t].base_url), this.or(t, i) ? o : "init" === n ? o += this.fn[i][t].init_segment : (this.fn[i][t].segments[n].url && (o += this.fn[i][t].segments[n].url), o)
            }, i.wr = function(t, n, i) { return "".concat(t, ":").concat(n, ":").concat(i) }, i.br = function(t, n, i) { return n === this.fn[i][t].segments.length - 1 }, i.gr = function(t, n) {
                var i = [],
                    e = this.re[t];
                if (!e) return i;
                for (var r = 0; r < e.length; r++) this.ee.has(this.wr(e[r], t, n)) && i.push(e[r]);
                return i
            }, i.Ji = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "video";
                return void 0 !== this.sorcerer && (t = this.sorcerer[n].activeStreamIndex), this.fn[n][t]
            }, i.Ce = function(t, n) {
                var i = this,
                    e = this.fn.video,
                    o = this.video && this.video.metadata.percentShown ? this.video.metadata.percentShown : null;
                if (0 === (e = this.Me.filterStreams(e, this.J.clientWidth, this.J.clientHeight, o)).length) return r.resolve(!1);
                if (this.ke.video && !he(this.Me)) return r.resolve(!1);
                var u = e[e.length - 1];
                if (u.id !== this.fe) {
                    this.fe = u.id;
                    var a = { index: this.fn.video.indexOf(u), streams: this.fn.video };
                    this.fire(_i.STREAM_TARGET_CHANGE, a)
                }
                var s = this.Ji();
                return this.Me.shouldPowerUp(e, s, t).then((function(t) { return !1 === t ? i.Me.shouldPowerDown(e, s).then((function(t) { return !1 === t ? t : i.fn.video.indexOf(e[t]) })) : i.fn.video.indexOf(e[t]) }))
            }, i.yr = function() {
                var t = this,
                    n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "video";
                this.Ce(!1, n).then((function(i) {
                    "audio" === n && (!1 === i && (i = t.sorcerer.video.activeStreamIndex), i = t.Me.getAudioIndexFromVideo(t.fn.video, t.fn.audio, i), t.sorcerer.audio.activeStreamIndex === i && (i = !1));
                    var e = !1;
                    !1 !== i && (e = i > t.sorcerer[n].activeStreamIndex, t.ke[n] = !0, t.sorcerer[n].switchTo(i).then((function() { t.ke[n] = !1 })).catch(console.error));
                    for (var r = e, o = t.Me.getSegmentsToLoad(r, n, t.Ji()), u = t.sorcerer[n].activeStreamIndex, a = function(i) {
                            var e = t.rr(u, o[i], n),
                                r = t.gr(o[i], n);
                            if (r.length > 1) return "continue";
                            if (1 === r.length && u <= r[0]) return "continue";
                            var a = t.br(u, o[i], n),
                                s = { stream: u, segment: o[i], type: n },
                                c = t.sorcerer[n].streams[u],
                                f = e;
                            t.or(u, n) && (f = { url: f, byteRange: t.ur(u, o[i], n) });
                            var l = t.mr(u, o[i], n),
                                d = "video" === n,
                                h = null;
                            0 === u && "video" === n && (h = 16e3);
                            var v = null;
                            try { v = t.fn[n][u].segments[o[i]].size } catch (t) {}
                            c.addSegment(f, { identifier: s, isFinalSegment: a, priority: l, includeWithBandwidthChecks: d, timeout: h, size: v }).catch((function(t) { if (!(t instanceof Re)) throw t }))
                        }, s = 0; s < o.length; s++) a(s)
                })).catch(console.error)
            }, i.Ye = function() {
                var t = this,
                    n = function(n) {
                        if (0 === t.fn[n].length) return "continue";
                        var i = 0,
                            e = t.Me.getSegmentsToLoad(!1, n, t.Ji());
                        e.length > 0 && (i = e[0]);
                        var r = t.Te;
                        "audio" === n && (r = t.Me.getAudioIndexFromVideo(t.fn.video, t.fn.audio, t.Te));
                        var o = t.wr(r, i, n);
                        if (t.ee.has(o)) return "continue";
                        var u = t.rr(r, i, n),
                            a = t.br(r, i, n),
                            s = t.sorcerer[n].streams[r],
                            c = { stream: r, segment: i, type: n },
                            f = u;
                        t.or(r, n) && (f = { url: f, byteRange: t.ur(r, i, n) }), s.addSegment(f, { identifier: c, isFinalSegment: a, loadOnly: !0, priority: 0 }).catch((function(t) { if (!(t instanceof Re)) throw t }))
                    };
                for (var i in this.fn) n(i)
            }, i.Pe = function() { var t = this; return this.se && this.se.then((function() { for (var n in t.fn) t.fn[n].length > 0 && t.yr(n) })) }, i.ar = function(t) { this.ee.add(this.wr(t.stream, t.segment, t.type)), this.re[t.segment] || (this.re[t.segment] = []), -1 === this.re[t.segment].indexOf(t.stream) && this.re[t.segment].push(t.stream) }, i._r = function(t) {
                var n = this;
                (this.re[t.segment] || []).forEach((function(i) { n.ee.delete(n.wr(i, t.segment, t.type)) }))
            }, i.sr = function(t) { this.re[t.segment] && this._r(t) }, i.Pi = function(t) {
                this.fire(_i.APPEND_BUFFER_END, { identifier: t }), this.Ae(), this.me && t.stream === this.pe && (this.me = !1, this.we = this.fn.video[t.stream].segments[t.segment].start), this.re[t.segment] && this._r(t);
                var n = this.Me.canPlayFromTimeInStream(this.le, this.Ji());
                null !== this.le && this.de && n && (this.de(this.le), this.de = null)
            }, i.Di = function(t) { this.fire(_i.DOWNLOAD_START, { identifier: t }) }, i.Li = function(t, n) { this.fire(_i.DOWNLOAD_END, { identifier: t, data: n }) }, i.cr = function(t, n) {
                this._r(t);
                var i = _i.DOWNLOAD_ERROR;
                410 === n && (i = _i.MEDIA_URL_EXPIRED), this.fire(i, { identifier: t, status: n })
            }, i.lr = function(t, n) { this.fire(_i.DOWNLOAD_TIMEOUT, { identifier: t, data: n }), this.re[t.segment] && this._r(t), "video" === t.type ? this.ke.video = !1 : "audio" === t.type && (this.ke.audio = !1) }, i.dr = function(t) { this.fire(_i.QUOTA_EXCEEDED_ERROR, { buffered: t }) }, i.pr = function(t, n) {
                var i = { previousStreamIndex: this.Mt.video.indexOf(this.fn.video[t]), index: this.Mt.video.indexOf(this.fn.video[n]), streams: this.Mt.video };
                this.fire(_i.STREAM_CHANGE_START, i)
            }, i.hr = function(t) {
                t > this.pe && this.currentTime > 0 && (this.me = !0), this.pe = t;
                var n = { index: this.Mt.video.indexOf(this.fn.video[t]), streams: this.Mt.video };
                this.fire(_i.STREAM_CHANGE, n)
            }, i.nr = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                    i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                if (this.nt.drmHandler) {
                    var e = { audio: n.map((function(t) { return "".concat(t.mime_type, ';codecs="').concat(t.codecs, '"') })), video: t.map((function(t) { return "".concat(t.mime_type, ';codecs="').concat(t.codecs, '"') })) };
                    this.nt.drmHandler.init(this, e, i)
                }
            }, H(n, [{ key: "preload", get: function() { return this.at }, set: function(t) { this.Xe(this.at, t), this.at = t } }, { key: "videoElement", get: function() { return this.J } }, { key: "videoWidth", get: function() { var t = this.Ji(); return t ? t.width : this.J.videoWidth } }, { key: "videoHeight", get: function() { var t = this.Ji(); return t ? t.height : this.J.videoHeight } }, {
                key: "restrictedStreamIndexes",
                get: function() { return this._e },
                set: function() {
                    var t = this,
                        n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                    this._e.join(",") !== n.join(",") && (this._e = n, this.se.then((function() { return t.lockStreamIndexes() })).catch(console.error))
                }
            }, {
                key: "currentTime",
                get: function() { return null !== this.le ? this.le : this.J.currentTime },
                set: function(t) {
                    (this.ae || 0 !== t) && this.seekToTime(t)
                }
            }, { key: "downloadSpeed", get: function() { return this.Ee } }, {
                key: "brainDebug",
                get: function() {
                    var t = this.Me.getCurrentSpeed ? this.Me.getCurrentSpeed() : null,
                        n = this.sorcerer.getResponseSpeeds();
                    return { currentSpeed: t, responseSpeeds: n = n ? n.slice(-20) : [] }
                }
            }, { key: "isLowerProfileAvailable", get: function() { return this.sorcerer ? this.sorcerer.video.activeStreamIndex > 0 : null } }]), n
        }(Te),
        xr = [1, 2, 5],
        Mr = function(t) {
            function n(n) { var i, e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; return (i = t.call(this, n, e) || this).kr = .4, i.Er = .6, i.Tr = i.tt.tests && i.tt.tests.live_volatility && i.tt.tests.live_volatility.group, i.consecutiveStreamIndex = {}, i.isNewPlayback = !0, i }
            G(n, t), H(n, [{ key: "displayName", get: function() { return "Live" } }]);
            var i = n.prototype;
            return i.optimalStreamIndex = function(t, n) {
                if (this.isNewPlayback && this.scanner.sorcerer.getResponseSpeeds().length >= 2 && (this.isNewPlayback = !1), 1 === t.length) return 0;
                if (this.isNewPlayback) {
                    for (var i = 0, e = 0, r = this.scanner.videoElement.clientHeight, o = [], u = 0; u < t.length; u++) {
                        var a = t[u].height;
                        o.push(a), a < r && a > e && (i = u, e = t[u].height)
                    }
                    return Math.max(0, i - 1)
                }
                var s = this.scanner.sorcerer.getCurrentSpeed({ type: "average", howMany: 5, weights: xr }),
                    c = this.scanner.sorcerer.getVolatilityScaler(5);
                c || (c = .3);
                var f = n,
                    l = n;
                if (this.Tr)
                    for (var d = 0; d < t.length; d++) s * this.kr * c > t[d].bandwidth && (f = d), s * this.Er * c > t[d].bandwidth && (l = d);
                else
                    for (var h = 0; h < t.length; h++) s * this.kr > t[h].bandwidth && (f = h), s * this.Er > t[h].bandwidth && (l = h);
                var v = n < f ? f : l;
                this.Sr(v), this.consecutiveStreamIndex[v]++;
                var p = 1.5 * this.scanner.segmentLength,
                    m = this.scanner.videoElement,
                    w = m.buffered;
                return w && 0 !== w.length ? w.end(w.length - 1) - m.currentTime < p ? 0 !== n ? n - 1 : 0 : this.consecutiveStreamIndex[v] > 2 && v !== n ? v : n : 0
            }, i.Sr = function(t) { for (var n in this.consecutiveStreamIndex[t] || (this.consecutiveStreamIndex[t] = 0), this.consecutiveStreamIndex) this.consecutiveStreamIndex.hasOwnProperty(n) && parseInt(n, 10) !== t && (this.consecutiveStreamIndex[n] = 0) }, i.getSegmentsToLoad = function(t, n) {
                var i = this.scanner.videoElement,
                    e = this.scanner.sorcerer[t].sourceBuffer;
                if (dt(i.currentTime, e && e.buffered) >= this.scanner.bufferTarget) return [];
                var r = this.xr(),
                    o = this.Mr(),
                    u = n.segments.sort((function(t, n) { return t.index - n.index }));
                return !this.Ar && r < u[0].start ? [] : (this.Ar = !0, u.filter((function(t) { return !(t.end < r || t.start > o) })))
            }, i.xr = function() {
                var t = this.Cr(),
                    n = this.scanner.manifest.maxEndTime - t;
                return Math.max(0, n)
            }, i.Mr = function() {
                var t = this.Cr(),
                    n = this.scanner.bufferTarget,
                    i = this.scanner.manifest.maxEndTime - Math.max(0, t - n);
                return Math.max(0, i)
            }, i.Cr = function() { return this.scanner.presentationDelay || this.scanner.manifest.presentationDelay }, n
        }(kr),
        Ar = ["disabled", "hidden", "showing"],
        Cr = ["subtitles", "captions", "descriptions", "chapters", "metadata"],
        Rr = ["ar", "fa", "he", "iw", "ku", "ps", "sd", "ur", "yi"],
        Or = new P,
        Ir = new P,
        TelecineTextTrack = function() {
            function TelecineTextTrack(t, n) {
                var i = t.kind,
                    e = t.src,
                    r = void 0 === e ? null : e,
                    o = t.label,
                    u = void 0 === o ? "" : o,
                    a = t.language,
                    s = void 0 === a ? "" : a,
                    c = t.id,
                    f = void 0 === c ? oe() : c;
                if (-1 === Cr.indexOf(i)) throw me(12, "SYNTAX_ERR", "Syntax Error");
                nt(this), Object.defineProperties(this, { kind: { value: i, enumerable: !0 }, label: { value: u, enumerable: !0 }, language: { value: s, enumerable: !0 }, id: { value: "".concat(f), enumerable: !0 }, rtl: { value: -1 !== Rr.indexOf(s.substr(0, 2)), enumerable: !0 } }), this.video = n, this.src = r, this.ht = !1, Or.set(this, "disabled")
            }
            return TelecineTextTrack.prototype.dispatchEvent = function(t) { this.fire(t, { target: this }) }, H(TelecineTextTrack, [{
                key: "mode",
                get: function() { return Or.get(this) },
                set: function(t) {
                    if (Ar.indexOf(t) > -1) {
                        if (this.ht = !0, Or.get(this) === t) return;
                        Or.set(this, t), this.video.currentScanner && this.video.currentScanner.setModeForTrack(this, t), this.dispatchEvent("modechange")
                    }
                }
            }, { key: "src", get: function() { return Ir.get(this) }, set: function(t) { Ir.set(this, t), this.video.fire(_i.TEXT_SRC_UPDATE, this) } }, { key: "cues", get: function() { return this.video.currentScanner ? this.video.currentScanner.getCuesForTrack(this) : [] } }, { key: "activeCues", get: function() { return this.video.currentScanner ? this.video.currentScanner.getActiveCuesForTrack(this) : [] } }]), TelecineTextTrack
        }();

    function jr(t) { var n = /^(?:(\d{2,}):)?(\d{2}):(\d{2})[,.](\d{3})$/.exec(t); if (!n) return -1; var i = parseInt(n[4], 10) / 1e3; return i += parseInt(n[3], 10), n[2] && (i += 60 * parseInt(n[2], 10)), n[1] && (i += 60 * parseInt(n[1], 10) * 60), i }

    function Dr(t, n, i) { return i ? n ? n(t) : t : (t && t.then || (t = r.resolve(t)), n ? t.then(n) : t) }

    function Lr(t, n) { try { var i = t() } catch (t) { return n(t) } return i && i.then ? i.then(void 0, n) : i }

    function Pr(t, n) { return t && t.then ? t.then(n) : n(t) }
    var Nr = Ui.browser.ie || Ui.browser.edge ? .5 : .2;

    function Fr() {}

    function Ur(t) { return function() { for (var n = [], i = 0; i < arguments.length; i++) n[i] = arguments[i]; try { return r.resolve(t.apply(this, n)) } catch (t) { return r.reject(t) } } }
    var Vr = function(t) {
            function n(n) { var i, e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; return (i = t.call(this, n, e) || this).Rr = !1, i.Or = !1, i.Ir = 2e3, i.jr = 1e4, i.reset(), i.bufferTarget = e.bufferTarget || 12, i.presentationDelay = e.presentationDelay || 12, window.addEventListener("online", (function() { i.play() })), i }
            G(n, t), H(n, null, [{ key: "displayName", get: function() { return "HLSLiveScanner" } }, { key: "supported", get: function() { return "undefined" != typeof MediaSource && MediaSource.isTypeSupported } }, { key: "supportedVideoTypes", get: function() { return ["application/x-mpegURL"] } }, { key: "supportsPlaybackRate", get: function() { return !1 } }]);
            var i = n.prototype;
            return i.deactivate = function() { t.prototype.deactivate.call(this), this.reset() }, i.reset = function() { this.in && this.in.destroy(), this.Dr && this.Dr.stop(), this.Lr = new ft, this.in = null, this.fn = {}, this.fn.video = [], this.fn.audio = [], this.pe = 0, this.Pr = !1, this.Nr = !1, this.Fr = !1, this.Ur = 0, this.Vr = 0, this.Br = 0, this.Hr = new Mr(this, this.tt), this._e = [], this.qr = {}, this.Wr = 0, this.zr = 0 }, i.endLive = function() { this.Pr = !1, this.Dr && this.Dr.stop(), this.in && (this.in.abortFetches(), this.in.endOfStream()), this.Nr = !0, t.prototype.deactivate.call(this), this.fire(bi.ENDED) }, i.Gr = function() { this.Pr || (this.Pr = !0, this.fire(ki.STREAM_ONLINE)) }, i.$r = function() { this.Pr && (this.Pr = !1, this.fire(ki.STREAM_OFFLINE)) }, i.Kr = function(t) { t ? this.Gr() : this.$r() }, i.Yr = function(t) {
                try {
                    var n = this;
                    if (n.Nr) return;
                    n.Dr && (n.Dr.stop(), n.Dr.off());
                    var i = [st("module/media-manifest.js")];
                    return n.video.metadata.p2p && i.push(st("module/streamroot.js")), Dr(r.allSettled(i), (function(i) {
                        var e = Q(i, 1)[0].value,
                            r = e.M3U8Loader,
                            o = e.PLAYLIST_UPDATE,
                            u = e.PLAYLIST_ERROR;
                        return n.Dr = new r, n.Dr.on(o, (function() { return n.Jr() })), n.Dr.on(u, (function() { return n.$r() })), Pr(Lr((function() { var i = n.video.metadata.playlistRefreshUrl; return Dr(n.Dr.start(t, i), (function(t) { n.Mt = t, n.Gr() })) }), (function(t) { throw n.$r(), n.endLive(), t })), (function(t) { n.Xr(n.J), n.fn.video = n.Zr(n.tr(n.Mt.video)), n.fn.video.forEach((function(t) { n.in.addStream(fe(t.mimeType, t.codecs), t.initSegment) })), n.Mt.audio && (n.fn.audio = n.Zr(n.tr(n.Mt.audio)), n.fn.audio.forEach((function(t) { n.in.addStream(fe(t.mimeType, t.codecs), t.initSegment) }))), n.fire(_i.STREAMS_LOADED, n.fn), n.manifest.captions && n.manifest.captions.length > 0 && (n.manifest.captions.forEach(n.Qr.bind(n)), n.fire(_i.TEXT_TRACKS_AVAILABLE)), n.to(), n.no(!0) }))
                    }))
                } catch (t) { return r.reject(t) }
            }, i.io = function() { try { var t = this; return function(t) { if (t && t.then) return t.then(Fr) }(Lr((function() { var n = t.Ji(); return Dr(t.Dr.update(n.uri), (function() { t.Gr() })) }), (function() { t.$r() }))) } catch (t) { return r.reject(t) } }, i.Xr = function(t) { this.in && this.in.destroy(), this.in = new yr(t, { fetcherRetryAbortErrors: !1 }) }, i.to = function() { this.in.video.on("streamchange", this.hr.bind(this)), this.in.on("downloadend", this.Li.bind(this)), this.in.on("downloadtimeout", this.lr.bind(this)), this.in.on("downloadabort", this.eo.bind(this)) }, i.Li = function(t, n) { t && t.isInitSegmentRequest || this.fire(_i.DOWNLOAD_END, { identifier: t, data: n }) }, i.lr = function(t, n) {
                if (!t || !t.isInitSegmentRequest) {
                    var i = "".concat(t.type, "_").concat(t.segment);
                    delete this.qr[i], this.fire(_i.DOWNLOAD_TIMEOUT, { identifier: t, data: n })
                }
            }, i.eo = function(t, n) {
                if (!t || !t.isInitSegmentRequest) {
                    var i = "".concat(t.type, "_").concat(t.segment);
                    delete this.qr[i]
                }
            }, i.hr = function(t) { this.Fr = !1, this.fire(_i.STREAM_CHANGE, { index: t, streams: this.fn.video }) }, i.Jr = function() { this.Pe(), this.Or && this.manifest.captions && this.manifest.captions.length > 0 && this.ro(), this.Kr(this.oo() || !this.uo()), this.ao() }, i.Qr = function(t, n) {
                var i = t.label,
                    e = t.language;
                if (!this.so) {
                    var r = new TelecineTextTrack({ label: i, id: n, kind: "captions", language: e }, this.nt);
                    this.nt.textTracks = ie([r]), this.so = this.addTextTrack(r)
                }
            }, i.ro = function() {
                try {
                    var t = this;
                    return Dr(t.Lr, (function() {
                        if (t.manifest.captions) {
                            var n = t.manifest.captions[0].segments,
                                i = n.slice(t.Br);
                            t.Br = n.length, i.forEach(Ur((function(n) {
                                return Dr(Ye(n.url).text(), (function(n) {
                                    var i = function(t) {
                                            var n = 0,
                                                i = t.split(/(?:(?:\r\n|\n){2,})/),
                                                e = [],
                                                r = null;
                                            do { 0 === n && /^\uFEFF?WEBVTT(?: .*)?/.test(i[n]) && n++, (r = /^(?:(.*)(?:\r\n|\n))?([\d:,.]+) --> ([\d:,.]+)(.*)?(?:\r\n|\n)([\s\S]*)/.exec(i[n])) && e.push({ startTime: jr(r[2]), endTime: jr(r[3]), text: r[5] }), n++ } while (n < i.length);
                                            return e
                                        }(n),
                                        e = function(t) { var n = t.match(/=MPEGTS:(\d+),/); return (n && n[1] || 0) / 9e4 }(n);
                                    i.forEach((function(n) {
                                        n.startTime = e + n.startTime, n.endTime = e + n.endTime;
                                        var i = new(window.VTTCue || window.TextTrackCue)(n.startTime, n.endTime, n.text);
                                        t.so.addCue(i)
                                    }))
                                }))
                            })))
                        }
                    }))
                } catch (t) { return r.reject(t) }
            }, i.oo = function() { return this.manifest.maxEndTime > 0 && (this.manifest.maxEndTime === this.Wr ? this.zr++ : this.zr = 0, this.Wr = this.manifest.maxEndTime), this.zr < 3 }, i.Pe = function() { try { var t = this; return Dr(t.Lr, (function() { for (var n in t.fn) t.fn[n].length > 0 && t.yr(n) })) } catch (t) { return r.reject(t) } }, i.yr = function(t) {
                var n = this,
                    i = this.in[t].activeStreamIndex,
                    e = this.Ji(t, i);
                this.Hr.getSegmentsToLoad(t, e).forEach((function(e) {
                    var r = "".concat(t, "_").concat(e.index),
                        o = { stream: i, segment: e.index, type: t };
                    n.qr[r] || (n.sorcerer[t].streams[i].addSegment(e.url, { identifier: o }).catch((function(t) { delete n.qr[r] })), n.qr[r] = !0)
                }))
            }, i.Ji = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "video",
                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                return void 0 !== this.in && (n = this.in[t].activeStreamIndex), this.fn[t][n]
            }, i.no = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                if (!this.Fr) {
                    var n = this.video && this.video.metadata.percentShown ? this.video.metadata.percentShown : null,
                        i = this.Hr.filterStreams(this.fn.video, this.J.clientWidth, this.J.clientHeight, n);
                    if (0 !== i.length) {
                        var e = this.Hr.optimalStreamIndex(i, this.pe),
                            r = this.fn.video.indexOf(i[e]);
                        if (r >= 0 && (t || r !== this.pe)) {
                            if (r - this.pe > 0 && this.Vr > 0) { if (re(this.Vr) < this.jr) return } else this.Vr = ee();
                            var o = { index: r, streams: this.fn.video };
                            this.fire(_i.STREAM_TARGET_CHANGE, o), this.Fr = !0, this.in.video.switchTo(r, !0), this.pe = r, this.io()
                        }
                    }
                }
            }, i.ao = function() {
                var t = this.buffered;
                if (t.length) {
                    var n = t.length,
                        i = function(t, n) {
                            if (!t || !t.length) return null;
                            if (1 === t.length && t.end(0) - t.start(0) < 1e-6) return null;
                            for (var i, e = 0; e < t.length; e++)
                                if (t.start(e) > n && (0 === e || t.end(e - 1) - n <= .5)) { i = e; break }
                            return i >= 0 ? i : null
                        }(t, this.J.currentTime);
                    if (null !== i && 0 !== this.J.readyState && !(this.J.paused || n <= i)) {
                        var e = t.start(i),
                            r = t.end(n - 1) - e;
                        r > 0 && r <= 2 * this.segmentLength || (this.J.currentTime = e + .1)
                    }
                }
            }, i.uo = function() { var t = this.buffered; return !!(t && t.length && this.J.currentTime + Nr > t.end(t.length - 1)) }, i.setVideoSrc = function(t) { try { var n = this; return Dr(n.Ie(n.at), (function() { return Dr(n.Yr(t), (function() { n.J.src = URL.createObjectURL(n.in.mediaSource), n.Lr.resolve() })) })) } catch (t) { return r.reject(t) } }, i.Ie = function(t) { try { return this.co = new ft, "none" === t && this.paused || this.co.resolve(), this.co } catch (t) { return r.reject(t) } }, i.getBitrateAtTime = function(t, n) { if (!this.in) return 0; var i = this.in.streamIndexAtTime(t, n); return this.fn[n][i] ? this.fn[n][i].bandwidth : 0 }, i.tr = function(t) {
                var n = t.slice(0);
                return n.sort((function(t, n) {
                    var i = t.width * t.height * t.bitrate,
                        e = n.width * n.height * n.bitrate;
                    return t.width === n.width && t.height === n.height ? t.framerate - n.framerate : i - e
                })), n
            }, i.Zr = function(t) { return t.filter((function(n) { return n.mimeType === t[0].mimeType })) }, i.onprogress = function() { this.ao() }, i.ondurationchange = function() { this.ao() }, i.ontimeupdate = function() {
                if (this.in) {
                    t.prototype.ontimeupdate.call(this), this.fire(_i.DROPPED_FRAMES, this.in.getDroppedFrameTotal());
                    var n = this.Ji();
                    if (n) {
                        var i = { speed: this.in.getCurrentSpeed({ type: "average", howMany: 3, weights: [1, 2, 5] }), bitrate: n.bitrate, speeds: this.in.getResponseSpeeds() };
                        this.fire(_i.BANDWIDTH, i)
                    }!this.Pr && this.uo() && this.fire(ki.STREAM_OFFLINE), re(this.Ur) > this.Ir && (this.no(), this.Ur = ee())
                }
            }, i.seekToTime = function() {}, i.onpause = function() { this.Dr && this.Dr.stop() }, i.pause = function() { t.prototype.pause.call(this), this.Dr && this.Dr.stop(), this.in && (this.in.abortFetches(), this.qr = {}, this.in.removeBuffer().catch((function() {}))) }, i.play = function() {
                var n = this;
                return t.prototype.play.call(this, Ur((function() {
                    var t = !1;
                    return n.co.resolve(),
                        function(i, e) { var o = function() { if (n.Rr) return Dr(n.io(), (function() { return n.qr = {}, Pr(Lr((function() { return function(t, n) { return t && t.then ? t.then(Fr) : r.resolve() }(n.in.removeBuffer()) }), (function(t) {})), (function() { return Dr(n.Lr, (function() { return n.Pe(), Dr(n.fo(), (function() { n.currentTime = n.buffered.start(0) + .1, t = !0 })) })) })) })) }(); return o && o.then ? o.then(e) : e(o) }(0, (function(i) { return t ? i : Dr(n.Lr, (function() { n.Pe(), n.Rr = !0 })) }))
                })))
            }, i.fo = function() { var t = this; return new r((function(n) { t.in.once("appendbufferend", n) })) }, i.setCaptionsState = function(t) { this.Or = t }, H(n, [{ key: "preload", get: function() { return this.at }, set: function(t) { this.at !== t && "none" !== t && this.co.resolve(), this.at = t } }, {
                key: "restrictedStreamIndexes",
                get: function() { return this._e },
                set: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                    this._e.join(",") !== t.join(",") && (this._e = t, this.Hr.lock(this._e))
                }
            }, { key: "videoWidth", get: function() { return this.lo ? this.lo.width : this.J.videoWidth } }, { key: "videoHeight", get: function() { return this.lo ? this.lo.height : this.J.videoHeight } }, { key: "currentTime", get: function() { return this.J.currentTime }, set: function(t) { this.J.currentTime = t } }, { key: "isLowerProfileAvailable", get: function() { return this.in ? this.in.video.activeStreamIndex > 0 : null } }, { key: "sorcerer", get: function() { return this.in } }, { key: "segmentLength", get: function() { return this.Mt.targetDuration } }]), n
        }(Te),
        Br = document.createElement("video"),
        Hr = { "application/x-mpegURL": "application/x-mpegURL" },
        qr = function(t) {
            function n(n) { var i, e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; return (i = t.call(this, n, e) || this).do = null, i.reset(), window.addEventListener("online", (function() { i.play() })), i }
            G(n, t), H(n, null, [{ key: "displayName", get: function() { return "NativeHLSLiveScanner" } }, { key: "supported", get: function() { return n.supportedVideoTypes.length > 0 } }, {
                key: "supportedVideoTypes",
                get: function() {
                    var t = [];
                    if ("function" != typeof Br.canPlayType) return t;
                    for (var n in Hr) {
                        var i = Hr[n];
                        Br.canPlayType(i).replace(/^no$/, "") && t.push(n)
                    }
                    return t
                }
            }, { key: "supportsPlaybackRate", get: function() { return !1 } }]);
            var i = n.prototype;
            return i.deactivate = function() { t.prototype.deactivate.call(this), this.reset() }, i.reset = function() { this.ho && clearTimeout(this.ho), this.se = null, this.ho = null, this.Pr = !1, this.Nr = !1, this.vo = null, this.po = 0, this.ho = null, this.Hr = new Mr(this, this.tt), this._e = [] }, i.endLive = function() {
                var n = this;
                this.Pr = !1, this.Nr = !0, clearTimeout(this.ho), this.J.pause(), setTimeout((function() { t.prototype.deactivate.call(n), n.fire(bi.ENDED) }), 0)
            }, i.mo = function() {
                var t = this,
                    n = ht(this.video.metadata.playlistRefreshUrl.split("?")[1]);
                n.expires && (this.ho = setTimeout((function() { t.wo() }), 1e3 * (n.expires - 10)))
            }, i.wo = function() {
                var t = this,
                    n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                    i = this.video.metadata.playlistRefreshUrl;
                return Ye(i).json().then((function(e) { if (!("url" in e)) throw new Error("Error parsing 'url' key from player live API refresh endpoint: ".concat(i, " ").concat(e)); return t.bo(e.url.hls).then((function() { return t.play(), t.yo(5e3), null })).catch((function() { return t.wo(++n) })) })).catch((function() { if (n >= 3) throw new Error("Manifest failed to load after ".concat(n, " attempts.")); return ++n, t.wo(n) }))
            }, i._o = function() {
                var t = this;
                this.on(ki.STREAM_OFFLINE, (function() { t.Pr = !1 }))
            }, i.ko = function(t) { return this._o(), this.Pr = !0, this.fire(ki.STREAM_ONLINE), this.yo(5e3), r.resolve(t) }, i.bo = function(t) {
                var n = this;
                return this.do = t, /json=1/.test(t) ? Ye(t).json().then((function(t) {
                    if (!("url" in t)) throw new Error("Error parsing 'url' key from Live API manifest endpoint: ".concat(n.do, " ").concat(t));
                    n.J.src = t.url, n.mo()
                })).catch((function(t) {
                    var i = n.video.metadata.playlistRefreshUrl;
                    return Ye(i).json().then((function(t) {
                        if (!("url" in t)) throw new Error("Error parsing 'url' key from player live API refresh endpoint: ".concat(i, " ").concat(t));
                        n.do = t.url.ios, n.J.src = t.url.ios, n.mo()
                    }))
                })) : (this.J.src = t, this.mo(), r.resolve())
            }, i.yo = function(t) {
                var n = this;
                "number" == typeof Ui.iOS && Ui.iOS < 9 || this.vo || (this.vo = setTimeout((function() {
                    if (n.Pr) {
                        var t = new XMLHttpRequest;
                        t.onload = function() { 410 !== t.status ? (200 !== t.status && n.fire(ki.STREAM_OFFLINE), t.response.match(/^#EXTM3U\n#EXT-X-VERSION:3\n$/) && n.fire(ki.STREAM_OFFLINE)) : n.wo() }, t.onerror = function() { n.fire(ki.STREAM_OFFLINE) }, /json=1/.test(n.do) ? Ye(n.do).json().then((function(i) { "url" in i || n.fire(ki.STREAM_OFFLINE), t.open("GET", i.url), t.send() })).catch((function() { t.open("GET", n.do), t.send() })) : (t.open("GET", n.do), t.send())
                    }
                }), t))
            }, i.setVideoSrc = function(t) {
                var n = this;
                this.se = this.ko(t).then((function() { return n.do = t, n.bo(t) }))
            }, i.onprogress = function() { this.vo && (clearTimeout(this.vo), this.vo = null) }, i.onstalled = function() { this.yo(1e4) }, i.onerror = function() { var n = this; return this.J.error.code === this.J.error.MEDIA_ERR_SRC_NOT_SUPPORTED ? (Ye(this.do).then((function() { t.prototype.onerror.call(n) })).catch((function(i) { i instanceof Ie ? n.fire(bi.ERROR, new TelecineError("MediaNetworkError", "A network error ocurred while fetching the media.")) : t.prototype.onerror.call(n) })), !1) : t.prototype.onerror.call(this) }, i.onwaiting = function() { this.yo(1e4) }, i.seekToTime = function() {}, i.play = function() { var n = this; return t.prototype.play.call(this, (function() { return n.se })) }, H(n, [{ key: "currentTime", get: function() { return this.J.currentTime }, set: function(t) { this.J.currentTime = t } }]), n
        }(Te),
        Wr = function() {
            function t(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                this.Eo = t, this.Z = t.Z, this.tt = n
            }
            H(t, null, [{ key: "displayName", get: function() { return "Effect" } }, { key: "supported", get: function() { return !1 } }, { key: "supportedScanners", get: function() { return [] } }]);
            var n = t.prototype;
            return n.activate = function() { throw new TelecineError("NotImplemented", "The effect must implement the activate method.") }, n.deactivate = function() { throw new TelecineError("NotImplemented", "The effect must implement the deactivate method.") }, t
        }(),
        zr = new P,
        Gr = new P,
        TelecineFile = function() {
            function TelecineFile(t, n) {
                var i = t.src,
                    e = t.mime,
                    r = t.id,
                    o = void 0 === r ? oe() : r,
                    u = t.priority,
                    a = void 0 === u ? 0 : u,
                    s = t.metadata,
                    c = void 0 === s ? {} : s;
                if (!i) throw new TypeError("Must provide a src for the file.");
                if (!e) throw new TypeError("Must provide a mime type for the file.");
                Object.defineProperties(this, { mime: { value: e, enumerable: !0 }, id: { value: "".concat(o), enumerable: !0 }, metadata: { value: c, enumerable: !0 } }), this.video = n, this.priority = a, this.src = i
            }
            return H(TelecineFile, [{
                key: "priority",
                get: function() { return zr.get(this) },
                set: function(t) {
                    if (!("number" == typeof(t = parseInt(t, 10)) && isFinite(t) && Math.floor(t) === t && t >= 0)) throw new TypeError("The file priority must be an integer greater than or equal to 0.");
                    zr.set(this, t)
                }
            }, { key: "src", get: function() { return Gr.get(this) }, set: function(t) { Gr.set(this, t), this.video.fire(_i.FILE_SRC_UPDATE, this) } }, {
                key: "restrictedStreamIndexes",
                get: function() { if (!Object.getOwnPropertyDescriptor(Object.getPrototypeOf(this.video.currentScanner), "restrictedStreamIndexes")) throw new ReferenceError("The current scanner does not support streams."); return this.video.currentScanner.restrictedStreamIndexes },
                set: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                    if (!Array.isArray(t)) throw new TypeError("Indexes must be an array.");
                    if (!Object.getOwnPropertyDescriptor(Object.getPrototypeOf(this.video.currentScanner), "restrictedStreamIndexes")) throw new ReferenceError("The current scanner does not support streams.");
                    this.video.currentScanner.restrictedStreamIndexes = t
                }
            }]), TelecineFile
        }();

    function $r() { return !!(window.MediaKeys && window.navigator && window.navigator.requestMediaKeySystemAccess && window.MediaKeySystemAccess && window.MediaKeySystemAccess.prototype.getConfiguration || window.WebKitMediaKeys) }

    function Kr(t, n, i) {
        "string" == typeof n && (n = function(t) { for (var n = new ArrayBuffer(2 * t.length), i = new Uint16Array(n), e = 0, r = t.length; e < r; e++) i[e] = t.charCodeAt(e); return i }(n));
        var e = 0,
            r = new ArrayBuffer(t.byteLength + 4 + n.byteLength + 4 + i.byteLength),
            o = new DataView(r);
        new Uint8Array(r, e, t.byteLength).set(t), e += t.byteLength, o.setUint32(e, n.byteLength, !0), e += 4;
        var u = new Uint8Array(r, e, n.byteLength);
        return u.set(n), e += u.byteLength, o.setUint32(e, i.byteLength, !0), e += 4, new Uint8Array(r, e, i.byteLength).set(i), new Uint8Array(r, 0, r.byteLength)
    }

    function Yr(t) {
        for (var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], i = n ? t.buffer : t, e = String.fromCharCode.apply(null, new Uint16Array(i)), r = (new DOMParser).parseFromString(e, "application/xml"), o = {}, u = r.getElementsByTagName("HttpHeader"), a = 0; a < u.length; ++a) {
            var s = u[a].querySelector("name"),
                c = u[a].querySelector("value");
            o[s.textContent] = c.textContent
        }
        var f = r.querySelector("Challenge");
        return [o, t = ue(f.textContent)]
    }

    function Jr(t, n, i, e) {
        var o = e.audio || [],
            u = e.video || [],
            a = [{ video: "HW_SECURE_ALL", audio: "SW_SECURE_CRYPTO" }, { video: "HW_SECURE_DECODE", audio: "SW_SECURE_CRYPTO" }, { video: "HW_SECURE_CRYPTO", audio: "SW_SECURE_CRYPTO" }, { video: "SW_SECURE_DECODE", audio: "SW_SECURE_CRYPTO" }, { video: "SW_SECURE_CRYPTO", audio: "SW_SECURE_CRYPTO" }].map((function(t) { var n = { persistentState: "optional", sessionTypes: ["temporary"] }; return u.length && (n.videoCapabilities = u.map((function(n) { return { contentType: n, robustness: t.video } }))), o.length && (n.audioCapabilities = o.map((function(n) { return { contentType: n, robustness: t.audio } }))), n })),
            s = Object.keys(t).map((function(e) {
                var o = t[e].id;
                if (n || i) {
                    var u = null,
                        s = n ? window.WebKitMediaKeys : window.MSMediaKeys;
                    try { u = new s(o) } catch (t) {}
                    return r.resolve({ name: o, keySystem: u })
                }
                return navigator.requestMediaKeySystemAccess(o, a).then((function(t) { return t.createMediaKeys() })).catch((function(t) {})).then((function(t) { return { name: o, keySystem: t } }))
            }));
        return r.all(s)
    }

    function Xr(t, n) {
        var i = {},
            e = "".concat(window.screen.availWidth, "x").concat(window.screen.availHeight),
            r = window.devicePixelRatio;
        return i.merchant = "vimeo", i.sessionId = JSON.stringify({ ua: navigator.userAgent, token: t, resolution: e, pixelRatio: r }), i.userId = n, i
    }

    function Zr(t, n) { var i = null; return Object.keys(t).forEach((function(e) { n.name === t[e].id && (i = t[e]) })), i }
    var Qr = function() {
            function t(t, n) { this.To = t.cdms, this.So = t.lr_token, this.xo = t.user, this.Mo = t.asset, this.Ao = n, this.Co = null, this.Ro = null, this.Oo = null, this.Io = null, this.jo = this.Do.bind(this) }
            var n = t.prototype;
            return n.init = function(t) {
                var n = this,
                    i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return this.J = t.J, this.Lo = t, $r() ? (this.Po = Xr(this.So, this.xo), Jr(this.To, this.Ao, !1, i).then((function(t) { if (t.forEach((function(t) { t.keySystem && (n.Oo = t) })), !n.Oo) return n.Lo.fire(_i.EME_UNSUPPORTED), !1; var i = Zr(n.To, n.Oo); return n.Io = "encrypted", n.Co = i.license_url, n.Ao && (n.No = i.certificate_url, n.Io = "webkitneedkey"), n.J.addEventListener(n.Io, n.jo), n.Ao ? (n.J.webkitSetMediaKeys(n.Oo.keySystem), !0) : n.J.mediaKeys ? (n.Ro = n.J.mediaKeys.createSession(), n.Ro.addEventListener("message", (function(t) { return n.Fo(t) })), !0) : (n.Ro = n.Oo.keySystem.createSession(), n.Ro.addEventListener("message", (function(t) { return n.Fo(t) })), n.J.setMediaKeys(n.Oo.keySystem), !0) }))) : (this.Lo.fire(_i.EME_UNSUPPORTED), !1)
            }, n.destroy = function() { this.Ro && this.Ro.sessionId && this.Ro.close(), this.J.removeEventListener(this.Io, this.jo) }, n.Do = function(t) { var n = this; return "com.apple.fps.1_0" === this.Oo.name ? (this.Uo().then((function(i) { n.Vo = "assetId=".concat(n.Mo); var e = Kr(t.initData, n.Vo, i); return n.Ro = n.Oo.keySystem.createSession("video/mp4", e), n.Ro.addEventListener("webkitkeymessage", (function(t) { return n.Fo(t) })), i })).catch((function(t) { n.Lo.fire(t.error, t.payload) })), !0) : !this.Ro.sessionId && !this.Bo && (this.Bo = this.Ro.generateRequest(t.initDataType, t.initData).catch((function() { n.Lo.fire(_i.DRM_FAILURE) })), !0) }, n.Fo = function(t) {
                var n = this;
                return new r((function(i, e) {
                    n.Bo = null;
                    var r = new XMLHttpRequest;
                    r.keySession = t.target, r.responseType = "arraybuffer", r.open("POST", n.Co), r.setRequestHeader("dt-custom-data", window.btoa(JSON.stringify(n.Po)));
                    var o = t.message;
                    if ("com.microsoft.playready" === n.Oo.name) {
                        var u = Yr(t.message, !1),
                            a = u[0];
                        Object.keys(a).forEach((function(t) { r.setRequestHeader([t], a[t]) })), o = u[1]
                    }
                    if ("com.apple.fps.1_0" === n.Oo.name) {
                        var s = btoa(String.fromCharCode.apply(null, o));
                        s = encodeURIComponent(s), o = "spc=".concat(s, "&").concat(n.Vo), r.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
                    }
                    r.onload = function() {
                        if (403 !== r.status)
                            if (r.status >= 400) e({ error: _i.DRM_FAILURE });
                            else try {
                                n.Lo.fire(_i.DRM_AUTH_SUCCESS);
                                var t = new Uint8Array(r.response),
                                    o = t.buffer;
                                "com.apple.fps.1_0" === n.Oo.name && (o = function(t) { var n = window.atob(t.trim()); return "<ckc>" === n.substr(0, 5) && "</ckc>" === n.substr(-6) && (n = n.slice(5, -6)), new Uint8Array(atob(n).split("").map((function(t) { return t.charCodeAt(0) }))) }(btoa(String.fromCharCode.apply(null, t)))), r.keySession.update(o), i()
                            } catch (t) { e("Error updating key session: ".concat(t)) } else {
                                var u = JSON.parse(r.getResponseHeader("x-dt-error-message"));
                                e({ error: _i.DRM_AUTH_FAILURE, payload: { text: u.error, code: u.error_code } })
                            }
                    }, r.onerror = e, r.send(o)
                })).catch((function(t) { n.Lo.fire(t.error, t.payload) }))
            }, n.Uo = function() {
                var t = this;
                return new r((function(n, i) {
                    var e = new XMLHttpRequest;
                    e.responseType = "arraybuffer", e.open("GET", t.No), e.setRequestHeader("dt-custom-data", window.btoa(JSON.stringify(t.Po))), e.onload = function() {
                        if (403 !== e.status)
                            if (e.status >= 400) i({ error: _i.DRM_FAILURE });
                            else try { n(new Uint8Array(e.response)) } catch (t) { i(t) } else {
                                var t = JSON.parse(e.getResponseHeader("x-dt-error-message"));
                                i({ error: _i.DRM_AUTH_FAILURE, payload: { text: t.error, code: t.error_code } })
                            }
                    }, e.onerror = i, e.send()
                }))
            }, t
        }(),
        to = function() {
            function t(t, n) { this.To = t.cdms, this.Mo = t.asset, this.Ao = n, this.Ho = null, this.Co = null, this.Ro = null, this.Oo = null, this.Io = null, this.jo = this.Do.bind(this), this.qo = this.Wo.bind(this) }
            var n = t.prototype;
            return n.init = function(t) {
                var n = this,
                    i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                return this.J = t.J, this.Lo = t, this.zo = !!window.MSMediaKeys, $r() || this.zo ? Jr(this.To, this.Ao, this.zo, i).then((function(t) {
                    n.Oo = t.find((function(t) { return t.keySystem }));
                    var i = n.Oo && Zr(n.To, n.Oo);
                    if (!i) throw n.Lo.fire(_i.EME_UNSUPPORTED), new Error("No valid key system was found.");
                    n.Ho = i.license_url;
                    var r = e && e.inits && e.inits[i.id];
                    return r || n.Go(i), n.$o().then((function() { return r && n.Do(r.cenc) }))
                })) : (this.Lo.fire(_i.EME_UNSUPPORTED), r.reject())
            }, n.destroy = function() { this.Ro && this.Ro.sessionId && this.Ro.close(), this.J.removeEventListener(this.Io, this.jo) }, n.Go = function(t) { this.Io = "encrypted", this.Co = t.license_url, this.Ao ? (this.No = t.certificate_url, this.Io = "webkitneedkey") : this.zo && (this.Io = "msneedkey"), this.J.addEventListener(this.Io, this.jo) }, n.$o = function() {
                var t = this;
                return new r((function(n) {
                    if (t.zo) {
                        var i = function i() { t.J.msSetMediaKeys(t.Oo.keySystem), t.J.removeEventListener("loadedmetadata", i), n() };
                        t.J.readyState >= 1 ? i() : t.J.addEventListener("loadedmetadata", i)
                    } else {
                        if (t.Ao) t.J.webkitSetMediaKeys(t.Oo.keySystem);
                        else {
                            var e = t.J.mediaKeys || t.Oo.keySystem;
                            t.Ro = t.Ko(e), t.Ro.addEventListener("message", (function(n) { return t.Fo(n) })), t.J.mediaKeys || t.J.setMediaKeys(t.Oo.keySystem)
                        }
                        n()
                    }
                }))
            }, n.Ko = function(t, n, i) { var e = t.createSession(n, i); if (!e) throw new Error("Could not create key session"); return e }, n.Do = function(t) {
                var n = this,
                    i = new Error("A decryption key error was encountered");
                return "com.apple.fps.1_0" === this.Oo.name ? (this.Uo(this.No).then((function(e) {
                    n.Vo = function(t) {
                        var n = function(t) { var n = new Uint16Array(t.buffer); return String.fromCharCode.apply(null, n) }(t),
                            i = document.createElement("a");
                        return i.href = n, i.hostname
                    }(t.initData);
                    var r = Kr(t.initData, n.Vo, e);
                    return n.Ro = n.Ko(n.Oo.keySystem, "video/mp4", r), n.Ro.contentId = n.Vo, n.Ro.addEventListener("webkitkeymessage", (function(t) { return n.Fo(t) })), n.Ro.addEventListener("webkitkeyerror", (function(t) { throw i })), e
                })).catch((function(t) { n.Lo.fire(t.error, t.payload) })), !0) : "com.microsoft.playready" === this.Oo.name ? (this.Ro = this.Ko(this.J.msKeys, "video/mp4", t.initData), this.Ro.addEventListener("mskeymessage", (function(t) { return n.Fo(t) })), this.Ro.addEventListener("mskeyerror", (function(t) { throw i })), !0) : !this.Ro.sessionId && !this.Bo && (this.Ro.addEventListener("keystatuseschange", this.qo), this.Bo = this.Ro.generateRequest(t.initDataType, t.initData).catch((function() { n.Lo.fire(_i.DRM_FAILURE) })), !0)
            }, n.Wo = function() {
                var t = !1,
                    n = U(this.Ro.keyStatuses.values());
                n.forEach((function(n, i) {
                    switch (n) {
                        case "expired":
                            t = !0
                    }
                })), n.every((function(t) { return "output-restricted" === t })) && this.Lo.fire(_i.DRM_OUTPUT_RESTRICTED), t && this.Ro.close()
            }, n.Fo = function(t) {
                var n = this;
                return this.Yo(this.Ho).then((function(i) {
                    return new r((function(e, r) {
                        n.Co = i, n.Bo = null;
                        var o = new XMLHttpRequest;
                        o.keySession = t.target, o.open("POST", n.Co), o.responseType = "arraybuffer";
                        var u = t.message;
                        if ("com.microsoft.playready" === n.Oo.name) {
                            var a = Yr(t.message),
                                s = a[0];
                            Object.keys(s).forEach((function(t) { o.setRequestHeader(t, s[t]) })), u = a[1]
                        }
                        "com.apple.fps.1_0" === n.Oo.name && (u = new Uint8Array(u), o.setRequestHeader("Content-type", "application/octet-stream")), o.onload = function() {
                            if (403 !== o.status)
                                if (o.status >= 400) r(new TelecineError(_i.DRM_FAILURE));
                                else try {
                                    n.Lo.fire(_i.DRM_AUTH_SUCCESS);
                                    var t = new Uint8Array(o.response);
                                    o.keySession.update(t), e()
                                } catch (t) { r(new TelecineError(_i.DRM_FAILURE, "Error updating key session: ".concat(t))) } else r(new TelecineError(_i.DRM_AUTH_FAILURE))
                        }, o.onerror = r, o.send(u)
                    })).catch((function(t) { n.Lo.fire(t.name, { text: t.message || "License request failed." }) }))
                }))
            }, n.Yo = function(t) {
                return new r((function(n, i) {
                    var e = new XMLHttpRequest;
                    e.open("GET", t), e.onload = function() {
                        if (e.status >= 400) i(new TelecineError(_i.DRM_FAILURE));
                        else try {
                            try {
                                var t = JSON.parse(e.response),
                                    r = t.licenseAcquisitionUrl,
                                    o = t.token;
                                if (!r && !o) throw new Error;
                                n("".concat(r, "?ExpressPlayToken=").concat(o))
                            } catch (t) { n(e.response) }
                        } catch (t) { i(new TelecineError(_i.DRM_FAILURE, "Error retrieving License Acquisition URL (LA_URL): ".concat(t))) }
                    }, e.onerror = i, e.send()
                }))
            }, n.Uo = function(t) {
                return new r((function(n, i) {
                    var e = new XMLHttpRequest;
                    e.open("GET", t), e.responseType = "arraybuffer", e.setRequestHeader("Pragma", "Cache-Control: no-cache"), e.setRequestHeader("Cache-Control", "max-age=0"), e.onload = function() {
                        if (403 !== e.status)
                            if (e.status >= 400) i({ error: _i.DRM_FAILURE });
                            else try { n(new Uint8Array(e.response)) } catch (t) { i(t) } else i({ error: _i.DRM_AUTH_FAILURE })
                    }, e.onerror = i, e.send()
                }))
            }, t
        }(),
        no = new P,
        TelecineVideo = function() {
            function TelecineVideo(t) {
                var n = this,
                    i = t.files,
                    e = t.id,
                    r = void 0 === e ? oe() : e,
                    o = t.title,
                    u = void 0 === o ? null : o,
                    a = t.subtitle,
                    s = void 0 === a ? null : a,
                    c = t.metadata,
                    f = void 0 === c ? {} : c,
                    l = t.textTracks,
                    d = void 0 === l ? ie() : l,
                    h = t.externalDisplayFiles,
                    v = void 0 === h ? {} : h,
                    p = t.chapters,
                    m = void 0 === p ? [] : p,
                    w = t.duration;
                if (!i || !Array.isArray(i)) throw new TypeError("Must provide files for the video.");
                nt(this);
                var b = function() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []; return t.getFileById = ne, t }(i.map((function(t) { return t instanceof TelecineFile ? (t.video = n, t) : new TelecineFile(t, n) }))),
                    g = ie(d.map((function(t) { return t instanceof TelecineTextTrack ? (t.video = n, t) : new TelecineTextTrack(t, n) })));
                Object.keys(v).forEach((function(t) {!v[t] || v[t] instanceof TelecineFile || (v[t] = new TelecineFile(v[t], n)) })), Object.defineProperties(this, { id: { value: "".concat(r), enumerable: !0 }, title: { value: u, enumerable: !0 }, subtitle: { value: s, enumerable: !0 }, metadata: { value: f, enumerable: !0 }, files: { value: b, enumerable: !0 }, textTracks: { value: g, enumerable: !0, writable: !0 }, chapters: { value: m, enumerable: !0 }, duration: { value: w, enumerable: !0 }, externalDisplayFiles: { value: v, enumerable: !0 } }), f.drm && (f.drm.fastly ? this.Jo = new to(f.drm, f.useHls) : this.Jo = new Qr(f.drm, f.useHls))
            }
            return TelecineVideo.prototype.deactivate = function() {
                var t = this;
                this.Jo && this.Jo.destroy(), this.textTracks.forEach((function(n) { return t.currentScanner.removeTextTrack(n) }))
            }, H(TelecineVideo, [{ key: "drmHandler", get: function() { return this.Jo || null } }, { key: "currentFile", get: function() { return this.currentScanner.currentFile }, set: function(t) { this.currentScanner.currentFile = t } }, {
                key: "currentScanner",
                get: function() { return no.get(this) },
                set: function(t) {
                    var n = this;
                    this.currentScanner && this.currentScanner.constructor.supportsTextTracks && this.textTracks.forEach((function(t) { return n.currentScanner.removeTextTrack(t) })), t.constructor.supportsTextTracks && this.textTracks.forEach((function(n) { return t.addTextTrack(n) })), no.set(this, t)
                }
            }, { key: "chapters", get: function() { return this.chapters } }]), TelecineVideo
        }(),
        io = function() {
            function t(t, n) { this.Eo = t, this.tt = n, this.Xo = null, this.Zo = this.tt.embedTime ? this.tt.embedTime : 0, this.Qo = !1, this.tu = !1, this.nu = !1, this.playInitiated = !1, this.iu = !1, nt(this), this.eu = this.ru.bind(this), this.ou = this.uu.bind(this), this.au = this.su.bind(this), this.cu = this.fu.bind(this), this.lu = this.du.bind(this), this.hu = this.vu.bind(this), this.pu(this.Eo.on), this.mu() }
            var n = t.prototype;
            return n.destroy = function() { clearInterval(this.Xo), this.pu(this.Eo.off), this.ru() }, n.pu = function(t) { t(bi.PAUSE, this.ou), t(bi.PLAYING, this.eu), t(bi.SEEKING, this.au), t(bi.SEEKED, this.cu), t(ki.STREAM_ONLINE, this.lu), t(ki.STREAM_OFFLINE, this.hu) }, n.uu = function() { this.userPlayState = !1 }, n.ru = function() { this.Qo && (this.Qo = !1, this.fire(_i.BUFFER_ENDED)) }, n.su = function() { this.tu = !0 }, n.fu = function() { this.tu = !1 }, n.du = function() { this.iu = !0 }, n.vu = function() { this.iu = !1 }, n.mu = function() {
                var t = this;
                clearInterval(this.Xo), this.Xo = setInterval((function() {
                    if (t.Eo.video) {
                        var n = t.Eo.video.currentScanner;
                        if (n) {
                            var i = t.Eo.isLive(),
                                e = n.currentTime;
                            if (t.playInitiated && (!t.tu || i) && (!t.Eo.paused || t.userPlayState) && !t.Qo && e < t.Zo + .125) {
                                if (i && !t.iu) return;
                                for (var r = t.Eo.buffered, o = 0; o < r.length; o++)
                                    if (e >= r.start(o) && e + .2 <= r.end(o)) return;
                                if (e + .125 >= t.Eo.duration) return;
                                t.Qo = !0, t.fire(_i.BUFFER_STARTED)
                            }(t.playInitiated && t.Qo && e > t.Zo + .125 || i && !t.iu && t.Qo) && (t.Qo = !1, t.fire(_i.BUFFER_ENDED)), t.Zo = e
                        }
                    }
                }), 250)
            }, H(t, [{ key: "userPlayState", get: function() { return this.nu }, set: function(t) { this.nu = t, t || this.ru() } }]), t
        }();

    function eo() {
        var t, n;

        function i() { t.src ? document.createElement("video").load() : t.load() }

        function e() {
            if (!n) return r.reject();
            t.preload = "";
            var i = t.play();
            return void 0 === i && (i = new r((function(n) { t.addEventListener("playing", n) }))), i
        }

        function o() { n && (n.resolve(), n = null) }

        function u(t) { n && (n.reject(t), n = null) }
        return {set video(n) { t = n }, get active() { return !!n }, start: function() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r.resolve.bind(r); return n || (n = new ft), i(), t().then(e).then(o).catch(u), n }, cancel: function() { n && (n.reject(new TelecineError("PlayInterrupted", "The play() request was interrupted by a call to pause()")), n = null) } }
    }
    var ro = function() {
            function t(t, n) {
                var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                this.Z = t, this.wu = n, this.tt = i, this.J = null, this.dt = ie(), this.bu = {}, this.gu = new Te(t), this.tt.playRequest = new eo, this.yu = [], this._u = [], nt(this)
            }
            var n = t.prototype;
            return n.supportsEffect = function(t) { var n = this; return !!t.supported && t.supportedScanners.some((function(t) { return n.ku(n.gu) === t.displayName })) }, n.getEffectByName = function(t) {
                var n = this,
                    i = null;
                return this._u.forEach((function(e) { t === n.Eu(e) && (i = e) })), i
            }, n.activateEffect = function(t, n) { var i = new t(this, n); return i.activate(), this._u.push(i), i }, n.deactivateEffect = function(t) { var n = this; return this._u.some((function(i, e) { return i.constructor === t && (i.deactivate(), n._u.splice(e, 1), !0) })) }, n.deactivateEffects = function() {
                var t = this;
                this._u.forEach((function(n) { return t.deactivateEffect(n.constructor) }))
            }, n.play = function() {
                if (!this.J || this.J.files.length < 1) throw new TelecineError("NoFiles", "There are no files to play.");
                this.Tu.playInitiated || (this.Tu.playInitiated = !0), this.Tu.userPlayState = !0;
                var t = this.gu.play();
                return this.bu.paused = !1, t
            }, n.pause = function() { if (!this.J || this.J.files.length < 1) throw new TelecineError("NoFiles", "There are no files to play."); return this.Tu.userPlayState = !1, this.gu.pause(), this.bu.paused = !0, this }, n.isLive = function() { return this.currentScannerName.includes("Live") }, n.endLive = function() { this.gu.endLive() }, n.getBitrateAtTime = function(t) { var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "video"; return "MediaSourceScanner" !== this.ku(this.gu) && "HLSLiveScanner" !== this.ku(this.gu) || "audio" === n && this.gu.fn[n].length <= 1 ? 0 : this.gu.getBitrateAtTime(t, n) }, n.showExternalDisplayPicker = function(t) { this.gu.showExternalDisplayPicker(t) }, n.supportsPresentationMode = function(t) { return -1 !== this.supportedPresentationModes.indexOf(t) }, n.addChapter = function(t, n) { this.gu.addChapter(t, n) }, n.removeChapter = function(t) { this.gu.removeChapter(t) }, n.addCuePoint = function(t, n) { return this.gu.addCuePoint(t, n) }, n.removeCuePoint = function(t) { return this.gu.removeCuePoint(t) }, n.removeAllCuePoints = function() { return this.gu.removeAllCuePoints() }, n.addVideoEventListeners = function() { return this.gu.addVideoEventListeners() }, n.removeVideoEventListeners = function() { return this.gu.removeVideoEventListeners() }, n.Su = function() {
                var t = this,
                    n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    i = n.textTrackSupport,
                    e = void 0 !== i && i,
                    r = this.J.files.sort((function(t, n) { return t.priority - n.priority })),
                    o = this.wu,
                    u = function(n) { var i = r[n]; for (var u in o) { var a = o[u]; if (a.supported && (!e || a.supportsTextTracks) && -1 === t.yu.indexOf(t.ku(a)) && a.supportedVideoTypes.some((function(t) { return i.mime === t }))) return { v: a } } };
                for (var a in r) { var s = u(a); if ("object" === V(s)) return s.v }
                return e ? (this._t("TextTracksNotSupported", "None of the scanners support text tracks in this browser."), this.yu = [], this.Su()) : null
            }, n.xu = function(t, n) {
                var i = this;
                if (this.gu.constructor !== t || this.gu.video !== n) {
                    this.gu.deactivate();
                    var e = new t(this.Z, this.tt);
                    Object.keys(xi).forEach((function(t) {
                        var n = xi[t];
                        e.on(n, (function(t) { return i.Mu(n, t, e) }))
                    })), this.gu = e, n.currentScanner = e, this.gu.video = n;
                    for (var r = Object.keys(this.bu), o = 0; o < r.length; o++) { var u = r[o]; "paused" !== u ? "currentTime" !== u && (this.gu[u] = this.bu[u]) : !1 === this.bu.paused && this.gu.play() }
                    this.gu.addChapters(n.chapters, n.duration), this.fire(_i.SCANNER_CHANGE, this.ku(this.gu))
                }
            }, n.Au = function() {
                if (null !== this.J) {
                    var t = this.Su({ textTrackSupport: this.J.textTracks.length > 0 });
                    t ? this.xu(t, this.J) : this._t("FilesNotPlayable", "None of the files could be played in this browser.")
                }
            }, n.Cu = function() { this.gu.deactivate(), this.gu = new Te(this.Z) }, n.Mu = function(t, n, i) {
                if (i === this.gu) {
                    switch (t) {
                        case bi.ERROR:
                            return void(n instanceof TelecineError && this.fire(bi.ERROR, n));
                        case _i.SCANNER_ERROR:
                            this._t("ScannerError", "The current scanner can no longer be used because ".concat(n.reason)), this.yu.push(this.ku(this.gu)), this.Au([]);
                            break;
                        case _i.FILE_ERROR:
                            this._t("FileError", "The current file can no longer be used because ".concat(n.reason)), this.gu.kt();
                            break;
                        case _i.DOWNLOAD_ERROR:
                            this._t("DownloadError", n), this.gu.kt();
                            break;
                        case _i.EME_UNSUPPORTED:
                            this._t("DRMFailure", { text: null, code: "emeunsupported" });
                            break;
                        case _i.DRM_FAILURE:
                        case _i.DRM_AUTH_FAILURE:
                            this._t("DRMFailure", { text: n.text, code: n.code });
                            break;
                        case _i.DRM_OUTPUT_RESTRICTED:
                            this._t("DRMFailure", { text: null, code: "outputrestricted" });
                            break;
                        case _i.DRM_AUTH_SUCCESS:
                            this.fire(_i.DRM_AUTH_SUCCESS);
                            break;
                        case bi.TIME_UPDATE:
                            this.bu.currentTime = this.gu.currentTime;
                            break;
                        case _i.MEDIA_URL_EXPIRED:
                            this._t("MediaUrlExpired", n);
                            break;
                        case _i.MEDIA_URL_BAD_REQUEST:
                            this._t("MediaUrlBadRequest", n);
                            break;
                        case Si.BRAIN_ML_MODEL_ERR:
                            this._t("MimirError", n);
                            break;
                        case Si.BRAIN_ML_MODEL_NET_ERR:
                            this._t("MimirNetworkError", n);
                            break;
                        case Si.BRAIN_ML_MODEL_TIMEOUT:
                            this._t("MimirNetworkTimeout", n);
                            break;
                        case Ei.SPATIAL_UNSUPPORTED:
                            this.getEffectByName("ThreeSixtyEffect").deactivate();
                            break;
                        case bi.ENDED:
                            this.bu.paused = !0;
                            break;
                        case bi.WAITING:
                            this.fire(bi.WAITING)
                    }
                    this._u.forEach((function(n) { "function" == typeof n["on".concat(t)] && n["on".concat(t)]() })), this.fire(t, n)
                }
            }, n._t = function(t, n) { this.fire(bi.ERROR, new TelecineError(t, n)) }, n.ku = function(t) { return t instanceof Te ? t.constructor.displayName : t.prototype.constructor.displayName }, n.mu = function() {
                var t = this;
                this.Tu && this.Tu.destroy(), this.Tu = new io(this, this.tt), this.Tu.on(_i.BUFFER_STARTED, (function() { t.fire(_i.BUFFER_STARTED) })), this.Tu.on(_i.BUFFER_ENDED, (function() { t.fire(_i.BUFFER_ENDED) }))
            }, n.Eu = function(t) { return t instanceof Wr ? t.constructor.displayName : t.prototype.constructor.displayName }, n.Ru = function(t) { "HLSLiveScanner" === this.ku(this.gu) && this.gu.setCaptionsState(t) }, H(t, [{ key: "element", get: function() { return this.Z } }, { key: "videoElement", get: function() { return this.gu.videoElement } }, { key: "manifest", get: function() { return this.gu.manifest || { video: [] } } }, { key: "supportsSettingVolume", get: function() { return this.wu.some((function(t) { return t.supported && t.supportsSettingVolume })) } }, { key: "supportsPlaybackRate", get: function() { return this.gu.constructor.supportsPlaybackRate } }, { key: "supportsTextTracks", get: function() { return this.wu.some((function(t) { return t.supported && t.supportsTextTracks })) } }, { key: "activeEffects", get: function() { return this._u } }, { key: "isLowerProfileAvailable", get: function() { return this.gu.isLowerProfileAvailable } }, { key: "buffered", get: function() { return this.gu.buffered } }, { key: "bufferTarget", get: function() { return this.gu.bufferTarget }, set: function(t) { this.bu.bufferTarget = t, this.gu.bufferTarget = t } }, { key: "presentationDelay", get: function() { return this.gu.presentationDelay }, set: function(t) { this.bu.presentationDelay = t, this.gu.presentationDelay = t } }, { key: "manifestLoadDurations", get: function() { return this.gu.manifestLoadDurations ? this.gu.manifestLoadDurations : [] } }, { key: "successfulSegments", get: function() { return this.gu.successfulSegments ? this.gu.successfulSegments : [] } }, { key: "failedSegments", get: function() { return this.gu.failedSegments ? this.gu.failedSegments : [] } }, { key: "cuePoints", get: function() { return this.gu.cuePoints } }, { key: "currentChapterID", get: function() { return this.gu && this.gu.chaptersTrack && this.gu.chaptersTrack.activeCues.length ? this.gu.chaptersTrack.activeCues[0].id : null } }, { key: "chapters", get: function() { return this.gu.chaptersTrack ? this.gu.chaptersTrack.cues : [] } }, { key: "chaptersTrack", get: function() { return this.gu.chaptersTrack } }, {
                key: "currentFile",
                get: function() { return this.gu.currentFile },
                set: function(t) {
                    if ("string" == typeof t && (t = this.St.filter((function(n) { return n.id === t }))[0]), !t) throw new TelecineError("FileNotValid", "The file is not valid.");
                    this.gu.currentFile = t
                }
            }, { key: "currentScannerName", get: function() { return this.ku(this.gu) } }, { key: "currentTime", get: function() { return this.gu.currentTime }, set: function(t) { this.bu.currentTime = t, this.gu.currentTime = t } }, { key: "duration", get: function() { return this.gu.duration } }, { key: "ended", get: function() { return this.gu.ended } }, { key: "externalDisplayAvailable", get: function() { return this.gu.externalDisplayAvailable } }, { key: "externalDisplayActive", get: function() { return this.gu.externalDisplayActive } }, { key: "loop", get: function() { return this.gu.loop }, set: function(t) { this.bu.loop = t, this.gu.loop = t } }, { key: "muted", get: function() { return this.gu.muted }, set: function(t) { this.bu.muted = !!t, this.gu.muted = !!t } }, { key: "playsinline", get: function() { return this.gu.playsinline }, set: function(t) { this.bu.playsinline = !!t, this.gu.playsinline = !!t } }, { key: "paused", get: function() { return this.gu.paused } }, { key: "played", get: function() { return this.gu.played } }, { key: "seekable", get: function() { return this.gu.seekable } }, { key: "seeking", get: function() { return this.gu.seeking } }, { key: "defaultPlaybackRate", get: function() { return this.gu.defaultPlaybackRate }, set: function(t) { this.bu.defaultPlaybackRate = t, this.gu.defaultPlaybackRate = t } }, { key: "playbackRate", get: function() { return this.gu.playbackRate }, set: function(t) { this.bu.playbackRate = t, this.gu.playbackRate = t } }, { key: "preload", get: function() { return this.gu.preload }, set: function(t) { this.bu.preload = t, this.gu.preload = t } }, { key: "presentationMode", get: function() { return this.gu.presentationMode }, set: function(t) { this.gu.presentationMode = t } }, { key: "supportedPresentationModes", get: function() { return this.gu.supportedPresentationModes } }, { key: "video", get: function() { return this.J }, set: function(t) { this.J && this.J.deactivate(), this.yu = [], this.mu(), null === t ? (this.J = null, this.Cu()) : (this.J = new TelecineVideo(t), this.Au()) } }, { key: "videoWidth", get: function() { return this.gu.videoWidth } }, { key: "videoHeight", get: function() { return this.gu.videoHeight } }, {
                key: "volume",
                get: function() { return this.gu.volume },
                set: function(t) {
                    if (t < 0 || t > 1) throw new TelecineError("IndexSizeError", "Failed to set the 'volume' property: The volume provided (".concat(t, ") is outside of the range [0, 1]."));
                    this.bu.volume = t, this.gu.volume = t
                }
            }, { key: "brainDebug", get: function() { return this.gu.brainDebug } }]), t
        }(),
        oo = function(t) {
            function n(n) { var i, e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; return (i = t.call(this, n, e) || this).Ou = !1, i.J = i.Eo.gu.J, i }
            G(n, t), H(n, null, [{ key: "displayName", get: function() { return "CanvasEffect" } }, { key: "supported", get: function() { return !0 } }, { key: "supportedScanners", get: function() { return [Te, Sr] } }]);
            var i = n.prototype;
            return i.activate = function() { this.Ou = !0, this.Iu = document.createElement("canvas"), this.Iu.className = "vp-canvas-effect", this.Iu.style.cssText = "\n            position: absolute;\n            top:0;\n            left:0;\n            bottom:0;\n            right:0;\n        ", this.ju = this.Iu.getContext("2d", { alpha: !1 }), this.Z.appendChild(this.Iu), this.Du() }, i.deactivate = function() { this.Iu && this.Z.removeChild(this.Iu), this.Lu(), this.Ou = !1 }, i.Du = function() { this.Pu() }, i.Pu = function() { this.Nu = window.requestAnimationFrame(this.Fu.bind(this)) }, i.Fu = function() {
                var t = this.J,
                    n = this.Iu;
                n.width = t.clientWidth, n.height = t.clientHeight;
                var i = Math.floor(this.Uu()),
                    e = Math.floor(this.Vu()),
                    r = Math.floor((t.clientWidth - i) / 2),
                    o = Math.floor((t.clientHeight - e) / 2);
                this.ju.fillStyle = "#000", this.ju.fillRect(0, 0, n.width, n.height), this.ju.drawImage(t, r, o, i, e), this.Pu()
            }, i.Bu = function() { return this.J.videoHeight / this.J.videoWidth }, i.Uu = function() { return Math.min(this.J.clientHeight / this.Bu(), this.J.clientWidth) }, i.Vu = function() { return Math.min(this.J.clientWidth * this.Bu(), this.J.clientHeight) }, i.Lu = function() { this.Nu && (window.cancelAnimationFrame(this.Nu), this.Nu = null) }, n
        }(Wr),
        uo = function() {
            function t() {}
            return H(t, null, [{ key: "Equirect", get: function() { return "equirectangular" } }]), t
        }(),
        ao = function() {
            function t() {}
            return H(t, null, [{ key: "Mono", get: function() { return "mono" } }, { key: "TopBottom", get: function() { return "top-bottom" } }]), t
        }(),
        so = function() {
            function t(t, n, i) {
                switch (this.isStereo = n !== ao.Mono, this.Hu = null, this.qu = null, t) {
                    case uo.Equirect:
                        this.createEquirectProjection(i, n);
                        break;
                    default:
                        this.createEquirectProjection(i, ao.Mono)
                }
            }
            var n = t.prototype;
            return n.createEquirectProjection = function(t, n) {
                switch (n) {
                    case ao.Mono:
                        this.Hu = this.Wu(t);
                        break;
                    case ao.TopBottom:
                        this.Hu = this.Wu(t), this.qu = this.Wu(t), this.Hu.layers.set(1), this.qu.layers.set(2), this.zu(this.Hu.geometry, .5, 0), this.zu(this.qu.geometry, .5, .5)
                }
            }, n.Wu = function(n, i, e, r) {
                var o = new THREE.SphereBufferGeometry(i || t.SPHERE_RADIUS, e || t.TESSELATION_WIDTH, r || t.TESSELATION_HEIGHT);
                o.scale(-1, 1, 1);
                var u = new THREE.MeshBasicMaterial({ map: n });
                return new THREE.Mesh(o, u)
            }, n.zu = function(t, n, i) { for (var e = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1, r = 0; r < t.attributes.uv.array.length; r += 2) t.attributes.uv.array[r + e] *= n, t.attributes.uv.array[r + e] += i }, H(t, [{ key: "left", get: function() { return this.Hu } }, { key: "right", get: function() { return this.qu } }], [{ key: "TESSELATION_WIDTH", get: function() { return 120 } }, { key: "TESSELATION_HEIGHT", get: function() { return 80 } }, { key: "SPHERE_RADIUS", get: function() { return 500 } }]), t
        }(),
        co = function() {
            function t(t) { this.Gu = t }
            var n = t.prototype;
            return n.hasVRHeadset = function() { var t = this; return Ui.webvr ? navigator.getVRDisplays().then((function(n) { return n.length > 0 ? (t.Gu.vr.setDevice(n[0]), n[0]) : null })) : null }, n.enter = function() { return this.Gu.vr.getDevice() && this.Gu.vr.getDevice().requestPresent([{ source: this.Gu.domElement }]) }, n.exit = function() { return this.Gu.vr.getDevice() && this.Gu.vr.getDevice().exitPresent() }, H(t, [{ key: "supported", get: function() { return Ui.webvr } }, { key: "device", get: function() { return this.Gu && this.Gu.vr.getDevice() ? this.Gu.vr.getDevice() : null } }, { key: "isPresenting", get: function() { return !(!this.Gu || !this.Gu.vr.getDevice()) && this.Gu.vr.getDevice().isPresenting } }]), t
        }(),
        fo = function(t) {
            function n(n) { var i, e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; return (i = t.call(this, n, e) || this).Ou = !1, i.$u = null, i.Ku = null, i.Gu = null, i.isUserInteracting = !1, i.Yu = 0, i.Ju = 0, i._coordinates = { lat: 0, long: 0 }, i.Xu = { lat: 0, long: 0 }, i.Zu = { lat: 0, long: 0 }, i.Qu = 0, i.ta = 0, i.na = 0, i.J = i.Eo.gu.J, i.ia = null, i.ea = { x: 0, y: 0 }, i.ra = { lat: 0, long: 0 }, i.oa = { videoFps: i.tt.fps, motionRenderSpeed: 60 }, i.aa = 1e3 / i.oa.videoFps, i.sa = [], i.ca = !1, i.fa = !1, i.la = !1, i.da = { up: !1, down: !1, left: !1, right: !1 }, i }
            G(n, t), H(n, [{ key: "isUserInteracting", set: function(t) { t !== this.ha && (this.ha = t, t ? this.tt.isMobile || this.Eo.fire(Ei.MOTION_START) : this.tt.isMobile || this.Eo.fire(Ei.MOTION_END)) }, get: function() { return this.ha } }], [{ key: "displayName", get: function() { return "ThreeSixtyEffect" } }, { key: "supported", get: function() { try { var t = document.createElement("canvas"); return !!window.WebGLRenderingContext && (t.getContext("webgl") || t.getContext("experimental-webgl")) } catch (t) { return this.Eo.gu.fire(Ei.SPATIAL_UNSUPPORTED), !1 } } }, { key: "supportedScanners", get: function() { return [Te, Sr] } }]), n.frustumSurfaceArea = function(t, n, i) { var e = 2 * so.SPHERE_RADIUS * 2 * Math.sin(Math.PI / 180 * (t / 2)); return e * (e * n / i) / (4 * Math.PI * Math.pow(so.SPHERE_RADIUS, 2)) };
            var i = n.prototype;
            return i.activate = function() {
                var t = this;
                return new r((function(n, i) {
                    if (window.THREE) n();
                    else {
                        var e = document.createElement("script");
                        e.src = t.tt.threeUrl, document.body.appendChild(e), e.onload = function() { n() }
                    }
                })).then((function() { return t.Ut() }))
            }, i.Ut = function() {
                var t = this;
                this.Ou = !0, this.$u = new THREE.PerspectiveCamera(this.tt.fieldOfView, this.J.clientWidth / this.J.clientHeight, 1, 2 * so.SPHERE_RADIUS), this.$u.target = new THREE.Vector3(0, 0, 0), this.$u.layers.enable(1), this.va(this.tt.directorTimeline), this.Ku = new THREE.Scene, this.pa = new THREE.VideoTexture(this.J), this.pa.generateMipmaps = !1, this.pa.minFilter = THREE.NearestFilter, this.pa.maxFilter = THREE.NearestFilter, this.pa.format = THREE.RGBFormat, this.ma = new so(this.tt.projection, this.tt.stereoMode, this.pa), this.ma.isStereo && this.Ku.add(this.ma.right), this.Ku.add(this.ma.left), this.Gu = new THREE.WebGLRenderer, this.Gu.vr.enabled = !0, this.Gu.setPixelRatio(window.devicePixelRatio), this.wa = document.createElement("div"), this.wa.appendChild(this.Gu.domElement), this.Z.appendChild(this.wa), this.ba(), this.Eo.gu.J.setAttribute("crossorigin", "anonymous"), this.Du(), this.Eo.gu.paused || this.ga(), this.ya = new co(this.Gu), this.ya.supported && this.ya.hasVRHeadset().then((function(n) { setTimeout((function() { t.Eo.fire(Ei.WEBVR_HARDWARE_AVAILABLE, t.ya.device) }), 100) })).catch((function(t) {}))
            }, i.toggleVR = function() {
                var t = this;
                if (this.ya.isPresenting) this.ya.exit().then((function() { t.adjustRenderSize() })).catch((function(t) {}));
                else {
                    if (this.Eo.gu.paused) return;
                    this.ya.enter().then((function() { t.adjustRenderSize() })).catch((function(t) {}))
                }
            }, i.onplay = function() { this.Ou && (this.ga(), this.adjustRenderSize()) }, i.deactivate = function() { this.wa && this.Z.removeChild(this.wa), this.Lu(), this.Ou = !1 }, i.snapToCenter = function() {
                var t = this;
                this.sa.forEach((function(t) { return clearTimeout(t) }));
                var n = ((this._coordinates.long >= 180 ? 360 : 0) - this._coordinates.long) / 11,
                    i = (0 - this._coordinates.lat) / 11;
                this.na = 0;
                for (var e = function(e) { t.sa.push(setTimeout((function() { 0 === e && (t.ca = !0, t.tt.isMobile || (t.aa = 1e3 / t.oa.motionRenderSpeed)), 49 === e && (t.ca = !1, t.tt.isMobile || (t.aa = 1e3 / t.oa.videoFps)), t._a(t._coordinates.lat + i / Math.pow(1.1, e), t._coordinates.long + n / Math.pow(1.1, e)), t.ra.lat = THREE.Math.radToDeg(t.ea.x) + t._coordinates.lat + i / Math.pow(1.1, e), t.ra.long = THREE.Math.radToDeg(t.ea.y) + t._coordinates.long + i / Math.pow(1.1, e) }), e * t.aa)) }, r = 0; r < 50; r++) e(r)
            }, i.isStereo = function() { return !!this.ma && this.ma.isStereo }, i.va = function(t) { t && t[0] && void 0 !== t[0].p && "undefined" !== t[0].y && this._a(t[0].p, t[0].y) }, i._a = function(t, n) { this.Xu.long = this._coordinates.long, this.Xu.lat = this._coordinates.lat, t %= 360, this._coordinates.lat = Math.max(-85, Math.min(85, t)), n = (n %= 360) >= 0 ? n : 360 + n, this._coordinates.long = n }, i.makeContact = function(t) { this.isUserInteracting = !0, this.sa.forEach((function(t) { return clearTimeout(t) })), this.ca = !1, this.ka = { x: t.x, y: t.y }, this.Zu.long = this._coordinates.long, this.Zu.lat = this._coordinates.lat, this.Ea = { long: this._coordinates.long, lat: this._coordinates.lat }, this.tt.isMobile || (this.aa = 1e3 / this.oa.motionRenderSpeed) }, i.move = function(t) {
                this.ra.lat = THREE.Math.radToDeg(this.ea.x) + this.Xu.lat, this.ra.long = THREE.Math.radToDeg(this.ea.y) + this.Xu.long;
                var n = this.Ea.lat - .2 * (this.ka.y - t.y),
                    i = .2 * (this.ka.x - t.x) + this.Ea.long;
                this._a(n, i)
            }, i.moveWheel = function(t) {
                this.ra.lat = THREE.Math.radToDeg(this.ea.x) + this.Xu.lat, this.ra.long = THREE.Math.radToDeg(this.ea.y) + this.Xu.long;
                var n = this._coordinates.lat - .1 * t.y,
                    i = this._coordinates.long + .1 * t.x;
                this._a(n, i)
            }, i.moveDevice = function(t, n, i, e) {
                this.la = !0;
                var r = new THREE.Quaternion,
                    o = window.orientation;
                null === o && (o = this.J.clientWidth > this.J.clientHeight ? 90 : 0), t = t ? THREE.Math.degToRad(t) : 0, n = n ? THREE.Math.degToRad(n) : 0, i = i ? THREE.Math.degToRad(i) : 0;
                var u = o ? THREE.Math.degToRad(o) : 0,
                    a = new THREE.Vector3(0, 0, 1),
                    s = new THREE.Euler,
                    c = new THREE.Quaternion,
                    f = new THREE.Quaternion(-Math.sqrt(.5), 0, 0, Math.sqrt(.5));
                s.set(n, t, -i, "YXZ"), r.setFromEuler(s), r.multiply(f), r.multiply(c.setFromAxisAngle(a, -u)), this.ea = (new THREE.Euler).setFromQuaternion(r, "YXZ"), this.na = this.ea.z, this.isUserInteracting || this.ca || this._a(THREE.Math.radToDeg(this.ea.x) - this.ra.lat, -THREE.Math.radToDeg(this.ea.y) + this.ra.long), this.fa || (this.snapToCenter(), this.Eo.fire(Ei.MOTION_START), this.fa = !0)
            }, i.releaseContact = function(t) {
                if (this.ra.lat = THREE.Math.radToDeg(this.ea.x) - this._coordinates.lat, this.ra.long = THREE.Math.radToDeg(this.ea.y) + this._coordinates.long, this.isUserInteracting = !1, this.Ea && !t) {
                    var n = Math.hypot(this._coordinates.long - this.Ea.long, this._coordinates.lat - this.Ea.lat);
                    this.Ta(n)
                }
            }, i.abandonMotion = function() { this.isUserInteracting = !1, this.Ea = null }, i.keyPress = function(t) { this.Sa() || (this.isUserInteracting = !0, this.sa && this.sa.forEach((function(t) { return clearTimeout(t) }))), this.da[t] || (this.da[t] = !0) }, i.keyUp = function(t) { this.da[t] = !1, this.Sa() || (this.isUserInteracting = !1, this.Ta(1 / 0)) }, i.xa = function() {
                var t = this;
                Object.keys(this.da).forEach((function(n) {
                    if (t.da[n]) switch (n) {
                        case "up":
                            t._a(t._coordinates.lat + 2, t._coordinates.long);
                            break;
                        case "down":
                            t._a(t._coordinates.lat - 2, t._coordinates.long);
                            break;
                        case "left":
                            t._a(t._coordinates.lat, t._coordinates.long - 2);
                            break;
                        case "right":
                            t._a(t._coordinates.lat, t._coordinates.long + 2)
                    }
                }))
            }, i.Sa = function() { var t = this; return Object.keys(this.da).map((function(n) { return t.da[n] })).some((function(t) { return t })) }, i.Ta = function(t) {
                var n = this;
                t >= 20 && function() {
                    var i = { long: n._coordinates.long - n.Xu.long, lat: n._coordinates.lat - n.Xu.lat };
                    t === 1 / 0 && (i.long /= 2, i.lat /= 2);
                    for (var e = function(t) {
                            n.sa.push(setTimeout((function() {
                                1 === t && (n.ca = !0), 49 === t && (n.ca = !1, n.aa = 1e3 / n.oa.videoFps);
                                var e = 2 / Math.pow(t, 1.5);
                                n.ra.lat = THREE.Math.radToDeg(n.ea.x) + n._coordinates.lat + i.lat, n.ra.long = THREE.Math.radToDeg(n.ea.y) + n._coordinates.long + i.long, n._a(n._coordinates.lat + i.lat * e, n._coordinates.long + i.long * e)
                            }), t * n.aa))
                        }, r = 1; r < 50; r++) e(r)
                }()
            }, i.onseeked = function() { this.Ou && this.Ma() }, i.onresize = function() { this.adjustRenderSize(), this.isUserInteracting = !1 }, i.Ma = function() { this.isVRPresenting || (this.Qu = THREE.Math.degToRad(90 + this._coordinates.lat), this.ta = THREE.Math.degToRad(this._coordinates.long), this.$u.position.set(Math.sin(this.Qu) * Math.cos(this.ta), Math.cos(this.Qu), Math.sin(this.Qu) * Math.sin(this.ta)), this.$u.lookAt(this.$u.target), this.$u.rotation.z += this.na, this.Eo.fire(Ei.CAMERA_UPDATE, { lon: this._coordinates.long, lat: this._coordinates.lat })), this.Gu.render(this.Ku, this.$u) }, i.adjustRenderSize = function() {
                if (this.isVRPresenting) this.$u.aspect = this.J.clientWidth / this.J.clientHeight, this.$u.updateProjectionMatrix(), this.Gu.setSize(this.J.clientWidth, this.J.clientHeight);
                else {
                    this.J.clientWidth > this.J.clientHeight ? this.$u.aspect = Math.max(1, Math.min(2, this.J.clientWidth / this.J.clientHeight)) : this.$u.aspect = Math.max(1 / 3, Math.min(3, this.J.clientWidth / this.J.clientHeight)), this.$u.updateProjectionMatrix();
                    var t = se(this.J.clientWidth, this.J.clientHeight, this.$u.aspect, 1);
                    this.Gu.setSize(t.width, t.height), this.wa.style.paddingTop = "".concat(t.top, "px")
                }
            }, i.Du = function() {
                var t = this;
                this.Gu.setAnimationLoop((function() { t.Sa() && t.xa(), t.Ma() }))
            }, i.Lu = function() { this.Gu.setAnimationLoop(null) }, i.ga = function() { this.Aa({ backgroundColor: "#000", display: "block" }) }, i.ba = function() { this.Aa({ backgroundColor: "#000", display: "none" }) }, i.Aa = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    n = t.backgroundColor,
                    i = t.display;
                this.wa.style.cssText = "position:absolute;left:0;top:0;margin-left:auto;margin-right:auto;padding:0;background:".concat(n, ";width:100%;height:100%;text-align:center;display:").concat(i)
            }, H(n, [{
                key: "currentCoordinates",
                get: function() { return this._coordinates },
                set: function(t) {
                    var n = Q(t, 2),
                        i = n[0],
                        e = n[1];
                    if (i > 90 || i < -90) throw new RangeError("Latitude should be a float between -90 and 90.");
                    if (e < 0 || e > 360) throw new RangeError("Longitude should be a float between 0 and 360.");
                    this._a(i, e), this.Ma()
                }
            }, { key: "isVRPresenting", get: function() { return this.ya && this.ya.isPresenting } }, { key: "fieldOfView", get: function() { return this.$u.fov }, set: function(t) { this.$u.fov = t, this.$u.updateProjectionMatrix(), this.Gu.render(this.Ku, this.$u) } }, { key: "hasVRHeadset", get: function() { return this.ya && !!this.ya.device } }]), n
        }(Wr);

    function lo(t) { return "symbol" == V(t) || Cn(t) && "[object Symbol]" == It(t) }
    var ho = /^\s+|\s+$/g,
        vo = /^[-+]0x[0-9a-f]+$/i,
        po = /^0b[01]+$/i,
        mo = /^0o[0-7]+$/i,
        wo = parseInt;

    function bo(t) {
        if ("number" == typeof t) return t;
        if (lo(t)) return NaN;
        if (jt(t)) {
            var n = "function" == typeof t.valueOf ? t.valueOf() : t;
            t = jt(n) ? n + "" : n
        }
        if ("string" != typeof t) return 0 === t ? t : +t;
        t = t.replace(ho, "");
        var i = po.test(t);
        return i || mo.test(t) ? wo(t.slice(2), i ? 2 : 8) : vo.test(t) ? NaN : +t
    }
    var go = St ? St.prototype : void 0,
        yo = go ? go.toString : void 0;

    function _o(t) { if ("string" == typeof t) return t; if (Ln(t)) return function(t, n) { for (var i = -1, e = null == t ? 0 : t.length, r = Array(e); ++i < e;) r[i] = n(t[i], i, t); return r }(t, _o) + ""; if (lo(t)) return yo ? yo.call(t) : ""; var n = t + ""; return "0" == n && 1 / t == -1 / 0 ? "-0" : n }

    function ko(t) { return null == t ? "" : _o(t) }
    var Eo = Tt.isFinite,
        To = Math.min,
        So = function(t) {
            var n = Math.round;
            return function(t, i) {
                if (t = bo(t), (i = null == i ? 0 : To(function(t) {
                        var n = function(t) { return t ? (t = bo(t)) === 1 / 0 || t === -1 / 0 ? 17976931348623157e292 * (t < 0 ? -1 : 1) : t == t ? t : 0 : 0 === t ? t : 0 }(t),
                            i = n % 1;
                        return n == n ? i ? n - i : n : 0
                    }(i), 292)) && Eo(t)) { var e = (ko(t) + "e").split("e"); return +((e = (ko(n(e[0] + "e" + (+e[1] + i))) + "e").split("e"))[0] + "e" + (+e[1] - i)) }
                return n(t)
            }
        }();

    function xo(t) { return !isNaN(t) }

    function Mo(t) { return So(t, 3) }
    var Ao = 0;

    function Co() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "b",
            n = ++Ao;
        return "".concat(t).concat(n)
    }
    Co(), Co();
    var Ro = Co(),
        Oo = Co(),
        Io = Co(),
        jo = Co(),
        Do = Co(),
        Lo = Co(),
        Po = Co(),
        No = Co(),
        Fo = Co(),
        Uo = Co(),
        Vo = Co(),
        Bo = Co(),
        Ho = Co(),
        qo = Co(),
        Wo = Co(),
        zo = Co(),
        Go = Co(),
        $o = Co(),
        Ko = Co(),
        Yo = Co(),
        Jo = Co(),
        Xo = Object.freeze({ __proto__: null, CONFIG_CHANGED: Fo, TELECINE_READY: Uo, TELECINE_VIDEO_INIT: Vo, PLAY_INITIATED: Bo, QUALITY_CHANGED: Ho, FORCED_QUALITY: qo, CUE_CHANGED: Wo, CAPTIONS_CHANGED: zo, SPATIAL_PLAYBACK_TOGGLED: Go, PICTURE_IN_PICTURE_AVAILABLE: $o, PICTURE_IN_PICTURE_NOT_AVAILABLE: Ko, PICTURE_IN_PICTURE_ACTIVATED: Yo, PICTURE_IN_PICTURE_DEACTIVATED: Jo }),
        Zo = Object.freeze({ __proto__: null, EVENT_PENDING: "liveeventpending", EVENT_ACTIVE: "liveeventactive", EVENT_STARTING: "liveeventstarting", EVENT_STARTED: "liveeventstarted", EVENT_ENDED: "liveeventended", ARCHIVE_STARTED: "livearchivestarted", ARCHIVE_DONE: "livearchivedone", ARCHIVE_ERROR: "livearchiveerror" }),
        Qo = { h264: "video/mp4", hls: "application/vnd.apple.mpegurl", hlsLive: "application/x-mpegURL", dash: "application/vnd.vimeo.dash+json", dashMpd: "video/vnd.mpeg.dash.mpd", vp6: "video/x-flv", vp8: "video/webm", webm: "video/webm", hds: "application/f4m" },
        tu = { "application/vnd.apple.mpegurl": "hls", "application/vnd.vimeo.dash+json": "dash", "video/vnd.mpeg.dash.mpd": "dash", "video/mp4": "progressive", "video/webm": "progressive", "video/x-flv": "progressive", "application/x-mpegURL": "hlslive" },
        nu = (z({}, bi, {}, _i, {}, ki, {}, Zo, {}, Ei, {}, gi, {}, Ti, {}, Si, {}, Xo), z({}, ki, {}, Zo));

    function iu(t) { var n; return "done" === (null == t || null == (n = t.archive) ? void 0 : n.status) }

    function eu(t) { return "pending" === (null == t ? void 0 : t.status) }

    function ru(t) { return "started" === (null == t ? void 0 : t.status) }

    function ou(t) { return "ended" === (null == t ? void 0 : t.status) }

    function uu(t) { return au(t, "/playlist/refresh") }

    function au(t, n) {
        var i, e = null == (i = t.request.files.hls) ? void 0 : i.default_cdn,
            r = t.request,
            o = r.signature,
            u = r.timestamp,
            a = r.expires,
            s = "https://".concat(t.player_url, "/live/").concat(t.video.id),
            c = "?signature=".concat(o, "&time=").concat(u, "&expires=").concat(a, "&cdn=").concat(e);
        return "".concat(s).concat(n).concat(c)
    }
    var su = Tn(Object.keys, Object),
        cu = Object.prototype.hasOwnProperty;

    function fu(t) { if (!Mn(t)) return su(t); var n = []; for (var i in Object(t)) cu.call(t, i) && "constructor" != i && n.push(i); return n }
    var lu = zt(Tt, "DataView"),
        du = zt(Tt, "Promise"),
        hu = zt(Tt, "Set"),
        vu = zt(Tt, "WeakMap"),
        pu = Ft(lu),
        mu = Ft(nn),
        wu = Ft(du),
        bu = Ft(hu),
        gu = Ft(vu),
        yu = It;
    (lu && "[object DataView]" != yu(new lu(new ArrayBuffer(1))) || nn && "[object Map]" != yu(new nn) || du && "[object Promise]" != yu(du.resolve()) || hu && "[object Set]" != yu(new hu) || vu && "[object WeakMap]" != yu(new vu)) && (yu = function(t) {
        var n = It(t),
            i = "[object Object]" == n ? t.constructor : void 0,
            e = i ? Ft(i) : "";
        if (e) switch (e) {
            case pu:
                return "[object DataView]";
            case mu:
                return "[object Map]";
            case wu:
                return "[object Promise]";
            case bu:
                return "[object Set]";
            case gu:
                return "[object WeakMap]"
        }
        return n
    });
    var _u = yu,
        ku = Object.prototype.hasOwnProperty;

    function Eu(t) {
        if (null == t) return !0;
        if (Nn(t) && (Ln(t) || "string" == typeof t || "function" == typeof t.splice || Bn(t) || ni(t) || Dn(t))) return !t.length;
        var n = _u(t);
        if ("[object Map]" == n || "[object Set]" == n) return !t.size;
        if (Mn(t)) return !fu(t).length;
        for (var i in t)
            if (ku.call(t, i)) return !1;
        return !0
    }

    function Tu(t) { return Nn(t) ? ci(t) : fu(t) }

    function Su() { return [] }
    var xu = Object.prototype.propertyIsEnumerable,
        Mu = Object.getOwnPropertySymbols,
        Au = Mu ? function(t) {
            return null == t ? [] : (t = Object(t), function(t, n) {
                for (var i = -1, e = null == t ? 0 : t.length, r = 0, o = []; ++i < e;) {
                    var u = t[i];
                    n(u) && (o[r++] = u)
                }
                return o
            }(Mu(t), (function(n) { return xu.call(t, n) })))
        } : Su;

    function Cu(t, n) { for (var i = -1, e = n.length, r = t.length; ++i < e;) t[r + i] = n[i]; return t }
    var Ru = Object.getOwnPropertySymbols ? function(t) { for (var n = []; t;) Cu(n, Au(t)), t = Sn(t); return n } : Su;

    function Ou(t, n, i) { var e = n(t); return Ln(t) ? e : Cu(e, i(t)) }

    function Iu(t) { return Ou(t, Tu, Au) }

    function ju(t) { return Ou(t, li, Ru) }
    var Du = Object.prototype.hasOwnProperty,
        Lu = /\w*$/,
        Pu = St ? St.prototype : void 0,
        Nu = Pu ? Pu.valueOf : void 0;
    var Fu = Qn && Qn.isMap,
        Uu = Fu ? Yn(Fu) : function(t) { return Cn(t) && "[object Map]" == _u(t) },
        Vu = Qn && Qn.isSet,
        Bu = Vu ? Yn(Vu) : function(t) { return Cn(t) && "[object Set]" == _u(t) },
        Hu = {};

    function qu(t, n, i, e, r, o) {
        var u, a = 1 & n,
            s = 2 & n,
            c = 4 & n;
        if (i && (u = r ? i(t, e, r, o) : i(t)), void 0 !== u) return u;
        if (!jt(t)) return t;
        var f = Ln(t);
        if (f) {
            if (u = function(t) {
                    var n = t.length,
                        i = new t.constructor(n);
                    return n && "string" == typeof t[0] && Du.call(t, "index") && (i.index = t.index, i.input = t.input), i
                }(t), !a) return _n(t, u)
        } else {
            var l = _u(t),
                d = "[object Function]" == l || "[object GeneratorFunction]" == l;
            if (Bn(t)) return wn(t, a);
            if ("[object Object]" == l || "[object Arguments]" == l || d && !r) { if (u = s || d ? {} : An(t), !a) return s ? function(t, n) { return oi(t, Ru(t), n) }(t, function(t, n) { return t && oi(n, li(n), t) }(u, t)) : function(t, n) { return oi(t, Au(t), n) }(t, function(t, n) { return t && oi(n, Tu(n), t) }(u, t)) } else {
                if (!Hu[l]) return r ? t : {};
                u = function(t, n, i) {
                    var e = t.constructor;
                    switch (n) {
                        case "[object ArrayBuffer]":
                            return gn(t);
                        case "[object Boolean]":
                        case "[object Date]":
                            return new e(+t);
                        case "[object DataView]":
                            return function(t, n) { var i = n ? gn(t.buffer) : t.buffer; return new t.constructor(i, t.byteOffset, t.byteLength) }(t, i);
                        case "[object Float32Array]":
                        case "[object Float64Array]":
                        case "[object Int8Array]":
                        case "[object Int16Array]":
                        case "[object Int32Array]":
                        case "[object Uint8Array]":
                        case "[object Uint8ClampedArray]":
                        case "[object Uint16Array]":
                        case "[object Uint32Array]":
                            return yn(t, i);
                        case "[object Map]":
                            return new e;
                        case "[object Number]":
                        case "[object String]":
                            return new e(t);
                        case "[object RegExp]":
                            return function(t) { var n = new t.constructor(t.source, Lu.exec(t)); return n.lastIndex = t.lastIndex, n }(t);
                        case "[object Set]":
                            return new e;
                        case "[object Symbol]":
                            return function(t) { return Nu ? Object(Nu.call(t)) : {} }(t)
                    }
                }(t, l, a)
            }
        }
        o || (o = new cn);
        var h = o.get(t);
        if (h) return h;
        o.set(t, u), Bu(t) ? t.forEach((function(e) { u.add(qu(e, n, i, e, t, o)) })) : Uu(t) && t.forEach((function(e, r) { u.set(r, qu(e, n, i, r, t, o)) }));
        var v = c ? s ? ju : Iu : s ? keysIn : Tu,
            p = f ? void 0 : v(t);
        return function(t, n) { for (var i = -1, e = null == t ? 0 : t.length; ++i < e && !1 !== n(t[i], i);); }(p || t, (function(e, r) { p && (e = t[r = e]), ri(u, r, qu(e, n, i, r, t, o)) })), u
    }

    function Wu(t) { return qu(t, 5) }

    function zu(t) {
        var n = this,
            i = {},
            e = {get attributes() { return Object.assign({}, n) }, get previousAttributes() { return i }, clear: function() { r(); var t = n.attributes; for (var i in t) delete n[i] }, set: function(t) { for (var i in r(), t = Wu(t)) n[i] = t[i] }, clone: function() { return new zu(n.attributes) }, toJSON: function() { return Wu(n.attributes) } };

        function r() { Eu(n.attributes) || (i = Wu(n.attributes)) }
        return e.set(t), et(n, e)
    }

    function Gu(t, n) {
        var i = new zu(mi(t, n)),
            e = !1;
        return rt(i, {
            reset: function(t) {
                return i.clear(),
                    function(t) { e = !0, i.set(t), mi(i, n) }(t), i
            },
            isNewVideo: function() { var t = i.previousAttributes; return !e || t.video.id !== i.video.id || t.video.version.current !== i.video.version.current || t.video.live_event && !iu(t.video.live_event) && iu(i.video.live_event) }
        })
    }
    Hu["[object Arguments]"] = Hu["[object Array]"] = Hu["[object ArrayBuffer]"] = Hu["[object DataView]"] = Hu["[object Boolean]"] = Hu["[object Date]"] = Hu["[object Float32Array]"] = Hu["[object Float64Array]"] = Hu["[object Int8Array]"] = Hu["[object Int16Array]"] = Hu["[object Int32Array]"] = Hu["[object Map]"] = Hu["[object Number]"] = Hu["[object Object]"] = Hu["[object RegExp]"] = Hu["[object Set]"] = Hu["[object String]"] = Hu["[object Symbol]"] = Hu["[object Uint8Array]"] = Hu["[object Uint8ClampedArray]"] = Hu["[object Uint16Array]"] = Hu["[object Uint32Array]"] = !0, Hu["[object Error]"] = Hu["[object Function]"] = Hu["[object WeakMap]"] = !1;
    var $u = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        Ku = /^\w*$/;

    function Yu(t, n) {
        if ("function" != typeof t || null != n && "function" != typeof n) throw new TypeError("Expected a function");
        var i = function i() {
            var e = arguments,
                r = n ? n.apply(this, e) : e[0],
                o = i.cache;
            if (o.has(r)) return o.get(r);
            var u = t.apply(this, e);
            return i.cache = o.set(r, u) || o, u
        };
        return i.cache = new(Yu.Cache || sn), i
    }
    Yu.Cache = sn;
    var Ju = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        Xu = /\\(\\)?/g,
        Zu = function(t) {
            var n = Yu((function(t) { var n = []; return 46 === t.charCodeAt(0) && n.push(""), t.replace(Ju, (function(t, i, e, r) { n.push(e ? r.replace(Xu, "$1") : i || t) })), n }), (function(t) { return 500 === i.size && i.clear(), t })),
                i = n.cache;
            return n
        }();

    function Qu(t, n) { return Ln(t) ? t : function(t, n) { if (Ln(t)) return !1; var i = V(t); return !("number" != i && "symbol" != i && "boolean" != i && null != t && !lo(t)) || Ku.test(t) || !$u.test(t) || null != n && t in Object(n) }(t, n) ? [t] : Zu(ko(t)) }

    function ta(t) { if ("string" == typeof t || lo(t)) return t; var n = t + ""; return "0" == n && 1 / t == -1 / 0 ? "-0" : n }

    function na(t, n) { for (var i = 0, e = (n = Qu(n, t)).length; null != t && i < e;) t = t[ta(n[i++])]; return i && i == e ? t : void 0 }

    function ia(t, n, i) { var e = null == t ? void 0 : na(t, n); return void 0 === e ? i : e }
    var ea = navigator.userAgent.toLowerCase();

    function ra(t) { t = t.toLowerCase(); var n = new RegExp(t).test(ea); return "safari" === t ? n && new RegExp("version").test(ea) : n }

    function oa(t) {
        var n = document.createElement("div"),
            i = t.charAt(0).toUpperCase() + t.slice(1),
            e = (t + " " + ["Webkit", "Moz", "O", "ms"].join(i + " ") + i).split(" ");
        for (var r in e) { var o = e[r]; if (void 0 !== n.style[o]) return o }
        return t
    }
    var ua = !!ra("android") && (parseFloat(ea.replace(/^.* android (\d+)\.(\d+).*$/, "$1.$2")) || !0),
        aa = window.devicePixelRatio || 1,
        sa = !(!ra("windows phone") && !ra("iemobile")) && (parseFloat(ea.replace(/^.* windows phone (os )?(\d+)\.(\d+).*$/, "$2.$3")) || !0),
        ca = !!ra("msie") && parseFloat(ea.replace(/^.*msie (\d+).*$/, "$1")),
        fa = !!ra("trident") && parseFloat(ea.replace(/^.*trident\/(\d+)\.(\d+).*$/, "$1.$2")) + 4,
        la = !!(ra("ipad;") || ra("iphone;") || ra("ipod touch;")) && parseFloat(ea.replace(/^.* os (\d+)_(\d+).*$/, "$1.$2")),
        da = ra("opera") || ra("opr");

    function ha() { if (!ra("safari")) return []; var t = ea.split(" ").find((function(t) { return /version\//.test(t) })); return t ? t.replace("version/", "").split(".").map((function(t) { return parseInt(t, 10) })) : [] }
    var va = ra("safari") && ra("apple") && !ra("chrome") && !ra("android") && ha()[0] >= 11,
        pa = { airPlay: "WebKitPlaybackTargetAvailabilityEvent" in window, android: ua, hasAutoplayPolicy: ua || la || va || function() { if (!ra("chrome")) return []; var t = ea.split(" ").find((function(t) { return la ? /CriOS\//.test(t) : /chrome\//.test(t) })); return t ? t.replace("chrome/", "").split(".").map((function(t) { return parseInt(t, 10) })) : [] }()[0] >= 66, iOS: la, mobileAndroid: ua && ra("mobile"), browser: { bb10: ra("bb10"), chrome: ra("chrome"), firefox: ra("firefox"), ie: ca || fa, edge: ra("edge"), opera: da, safari: ra("safari") && ra("apple") && !ra("chrome") && !ra("android") }, devicePixelRatio: aa, iPhone: ra("iphone;") || ra("ipod touch;") || ra("ipod;"), iPad: ra("ipad;"), iPadNonRetina: ra("ipad;") && aa < 2, mac: ra("mac os"), pointerEvents: window.navigator.pointerEnabled || window.navigator.msPointerEnabled || !1, svg: !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect, touch: "ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch || ra("windows phone") || window.navigator.maxTouchPoints > 1 || window.navigator.msMaxTouchPoints || !1, transformProperty: oa("transform"), transitionProperty: oa("transition"), webp: function() { var t = document.createElement("canvas"); return !(!t.getContext || !t.getContext("2d")) && 0 === t.toDataURL("image/webp").indexOf("data:image/webp") }(), windowsPhone: sa },
        ma = /mac os x 10_13/.test(ea),
        wa = pa.iOS && pa.iOS >= 11,
        ba = pa.iPhone && 812 === window.screen.availHeight && 375 === window.screen.availWidth,
        ga = pa.iPhone && 896 === window.screen.availHeight && 414 === window.screen.availWidth,
        ya = pa.iPad && 1112 === window.screen.availWidth && 834 === window.screen.availHeight,
        _a = pa.iPad && 834 === window.screen.availWidth && 1194 === window.screen.availHeight,
        ka = pa.iPad && 1024 === window.screen.availWidth && 1366 === window.screen.availHeight,
        Ea = ba || ga || ya || _a || ka;

    function Ta() { return !!(va && ma || va && wa) || "undefined" != typeof MediaSource && MediaSource.isTypeSupported('video/mp4; codecs="hvc1"') }

    function Sa() { return !(pa.iOS || pa.iPad || pa.browser.ie) && (!ra("safari") || ha()[0] > 11 || 11 === ha()[0] && (ha()[2] > 1 || ha()[1] > 0)) }

    function xa(t, n, i) {
        return void 0 === i && (i = n, n = void 0), void 0 !== i && (i = (i = bo(i)) == i ? i : 0), void 0 !== n && (n = (n = bo(n)) == n ? n : 0),
            function(t, n, i) { return t == t && (void 0 !== i && (t = t <= i ? t : i), void 0 !== n && (t = t >= n ? t : n)), t }(bo(t), n, i)
    }

    function Ma(t) { return t.quality || t.metadata.quality }

    function Aa(t) {
        var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            e = t.url;
        if ("avc_url" in t && (e = t.avc_url), i) return e;
        var r = n ? pa.spatialHEVC && pa.hevc : pa.hevc,
            o = n ? pa.spatialHEVC && pa.hdr : pa.hdr;
        return o && "hevc_hdr_url" in t ? e = t.hevc_hdr_url : r && "hevc_sdr_url" in t ? e = t.hevc_sdr_url : pa.av1 && "av1_url" in t && (e = t.av1_url), e
    }

    function Ca(t) { if (Eu(t.progressive)) return []; var n = t.progressive; return "progressive_avc" in t && (n = t.progressive_avc), n.filter(Oa(n)) }

    function Ra(t) { if ("number" == typeof t) return t; var n = t.split("-"); return 5 === n.length ? n[0] : parseInt(n[0], 10) }

    function Oa(t) { var n = t.filter(Ia).map(Ma); return function(t) { return -1 === n.indexOf(Ma(t)) || Ia(t) } }

    function Ia(t) { var n = t.fps; return "metadata" in t && (n = t.metadata.fps), n > 30 }

    function ja(t) { return Da(t) >= 720 }

    function Da(t) { return "string" != typeof t && (t = Ma(t)), parseInt(t, 10) }

    function La(t) { var n = Ca(t.request.files).map((function(t) { return t.quality })); return Pa(t, t.embed.quality, n) }

    function Pa(t, n) { var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : []; return t.embed.on_site || pa.android || pa.iOS || pa.windowsPhone || !n || i.length && -1 === i.indexOf(n) ? null : n }

    function Na() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "desc";
        return function(n, i) {
            var e = Da(n),
                r = Fa(n),
                o = Da(i),
                u = Fa(i);
            return "asc" === t ? e - o || r - u : o - e || u - r
        }
    }

    function Fa(t) { return "object" !== V(t) ? 0 : "fps" in t ? t.fps : "metadata" in t && "fps" in t.metadata ? t.metadata.fps : 0 }

    function Ua(t) {
        var n = t.video.live_event,
            i = t.request.files;
        if (!Eu(i.hls)) {
            var e, r = i.hls.default_cdn,
                o = i.hls.cdns[r].json_url || (null == (e = n.playback) ? void 0 : e.hls_noredirect),
                u = t.request.flags.live_dash ? 2 : 1;
            return { id: "hls-".concat(r, "-").concat(t.video.id), src: o, mime: Qo.hlsLive, priority: u, metadata: { cdn: r, origin: i.hls.cdns[r].origin, quality: "sd" } }
        }
        return null
    }

    function Va(t, n) {
        var i = [];
        if (n.video) {
            var e = n.video.currentFile.mime;
            if (e === Qo.hlsLive) return n.manifest.video.map((function(t) { return z({}, t, { quality: "".concat(t.height, "p") }) }));
            i = [Qo.dash, Qo.dashMpd].includes(e) ? function(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                if (!t) return [];
                var i = t.streams;
                "streams_avc" in t && (i = t.streams_avc);
                var e = n ? pa.spatialHEVC && pa.hevc : pa.hevc,
                    r = n ? pa.spatialHEVC && pa.hdr : pa.hdr;
                return r && "streams_hevc_hdr" in t ? i = t.streams_hevc_hdr : e && "streams_hevc_sdr" in t ? i = t.streams_hevc_sdr : pa.av1 && "streams_av1" in t && (i = t.streams_av1), i
            }(t.request.files.dash, t.video.spatial) : n.video.files.filter((function(t) { return "progressive" === tu[t.mime] }))
        }
        return i.filter(Oa(i)).sort(Na())
    }

    function Ba(t) { return pa.spatialPlayback && t.video.spatial ? 35 : 50 }
    pa.hevc = Ta(), pa.hdr = va && wa && Ea, pa.vp9hdr = (window.matchMedia("(color-gamut: p3)").matches || window.matchMedia("(color-gamut: rec2020)").matches) && screen.colorDepth >= 48 && (MediaSource.isTypeSupported('video/webm; codecs="vp09.02.10.10.01.09.16.09.00"') || MediaSource.isTypeSupported('video/webm; codecs="vp09.02.10.10.01.09.16.09.01"') || MediaSource.isTypeSupported('video/webm; codecs="vp09.02.10.10.01.09.18.09.00"') || MediaSource.isTypeSupported('video/webm; codecs="vp09.02.10.10.01.09.18.09.01"')), pa.av1 = "undefined" != typeof MediaSource && MediaSource.isTypeSupported('video/mp4; codecs="av01.0.31M.08.0.110.01.01.01.0"'), pa.webvr = !!(window.navigator && "getVRDisplays" in window.navigator), pa.webxr = !!(window.navigator && "xr" in window.navigator && "supportsSession" in window.navigator.xr), pa.spatialPlayback = Sa(), pa.spatialHEVC = !pa.browser.safari && Sa() && Ta(), pa.stereoscopic = pa.spatialPlayback && pa.mobileAndroid;
    var Ha = { captureException: function(t) {}, captureMessage: function(t) {}, captureBreadcrumb: function() {} },
        qa = Ha,
        Wa = function(t) { qa = Object.assign({}, Ha, t) },
        za = function(t, n) { return qa.captureException(t, n) },
        Ga = function(t, n) {
            var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "backbone",
                e = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "info";
            return qa.captureBreadcrumb(t, n, i, e)
        };

    function $a(t, n, i) {
        var e = t.embed.playsinline && (pa.mobileAndroid || pa.iOS >= 10),
            r = !1,
            o = !1,
            u = !1,
            a = !0;

        function s(t) {
            if (!a && i.buffered && i.buffered.length > 0) {
                t = t || i.currentTime;
                var e = function(t, n) {
                        var i = t.length - 1;
                        if (t.length > 1)
                            for (var e = 0, r = t.length; e < r; e++)
                                if (t.start(e) <= n && t.end(e) >= n) { i = e; break }
                        return i
                    }(i.buffered, t),
                    o = i.buffered.end(e),
                    s = o / i.duration,
                    c = i.duration;
                if (n.fire(bi.PROGRESS, { loaded: o, duration: c, loadProgress: s }), u && r && o === i.duration) return void(r && i.paused && i.play().catch(za))
            }
        }

        function c(n) { if ("auto" !== n) { var e = Va(t, i).reverse().map((function(t) { return t.quality })).indexOf(n); - 1 !== e && (Ga("Switched to ".concat(n), {}, "video"), i.video.currentFile.restrictedStreamIndexes = [e]) } else i.video.currentFile.restrictedStreamIndexes = [] }

        function f(e) {
            var r = Va(t, i).map((function(t) { return t.quality })),
                o = Pa(t, t.embed.quality, r);
            o && n.fire(qo, o), c(o || "auto")
        }
        return n.on(Vo, (function() { i.playsinline = e, i.muted = t.embed.muted })), n.on(Oo, (function() { a = !0, i.paused || i.pause(), o = !1, r = !1, setTimeout((function() { i.currentTime = 0 }), 300) })), i.on(bi.PLAY, (function() { a = !1, n.fire(bi.PLAY, i.currentTime) })), i.on(bi.PAUSE, (function() { r = !1, n.fire(bi.PAUSE, i.currentTime, i.ended) })), i.on(bi.PLAYING, (function(t) { s() })), i.on(bi.TIME_UPDATE, (function(t) {
            var e = i.currentTime;
            if (!a) {
                var r = i.duration,
                    o = e / r,
                    u = i.playbackRate;
                n.fire(bi.TIME_UPDATE, { currentTime: e, duration: r, timeProgress: o, playbackRate: u })
            }
        })), i.on(bi.ENDED, (function(t) { i.loop ? i.play().catch(za) : (r = !1, n.fire(bi.ENDED, t)) })), i.on(bi.LOADED_METADATA, (function(n) {
            var e = i.duration;
            if (isFinite(e) && e > 0) {
                if (e < t.video.duration - 1 || e > t.video.duration + 1) return;
                t.video.duration = e
            }
            t.video.video_width = i.videoWidth, t.video.video_height = i.videoHeight
        })), i.on(bi.DURATION_CHANGE, (function(n) {
            var e = i.duration;
            isFinite(e) && (t.video.duration > 0 && (e < t.video.duration - 1 || e > t.video.duration + 1) || (t.video.duration = e))
        })), i.on(bi.PROGRESS, s), i.on(_i.BUFFER_STARTED, (function() { u = !0 })), i.on(_i.BUFFER_ENDED, (function() { u = !1 })), n.on(Ro, (function(n, e) { e || (e = (i.duration || t.video.duration) * xa(n, 0, 1)), e = xa(e, 0, i.duration || t.video.duration), i.currentTime = e })), i.on(bi.SEEKING, (function() {
            var t = i.currentTime,
                e = i.duration,
                r = t / e;
            n.fire(bi.SEEKING, { currentTime: t, duration: e, timeProgress: r })
        })), i.on(bi.SEEKED, (function() {
            s();
            var t = i.currentTime,
                e = i.duration,
                r = t / e;
            n.fire(bi.SEEKED, { currentTime: t, duration: e, timeProgress: r })
        })), n.on(jo, (function(e) {
            var r = i.video.currentFile.mime;
            if ([Qo.dash, Qo.dashMpd, Qo.hlsLive].includes(r)) c(e);
            else {
                var o = Va(t, i).filter((function(t) { return t.metadata.quality === e }));
                o.length > 0 && (a = !0, i.video.currentFile = o[0])
            }
            n.fire(Ho, e)
        })), i.on(_i.CURRENT_FILE_CHANGE, (function(e) {
            Ga("Current file changed", { id: e.id, mime: e.mime, src: e.src, metadata: e.metadata }, "video");
            var r = e.metadata.quality;
            [Qo.dash, Qo.dashMpd].includes(e.mime) && f(), [Qo.hlsLive].includes(e.mime) ? i.once(_i.STREAMS_LOADED, (function() { f() })) : function(i) {
                var e = La(t);
                e && n.fire(qo, e)
            }(), n.fire(Ho, r)
        })), { play: function() { return r = !0, o || (n.fire(Bo), o = !0), i.play() }, pause: function() { r = !1, i.pause() } }
    }

    function Ka(t, n, i) {
        var e = !1,
            r = i.presentationMode;

        function o() {!i.supportsPresentationMode("picture-in-picture") || pa.spatialPlayback && t.video.spatial ? n.fire(Ko) : n.fire($o) }
        i.on(bi.LOADED_METADATA, (function() { e = !0 })), i.on(bi.PLAY, (function() { e ? o() : i.once(bi.LOADED_METADATA, o) })), i.on(_i.PRESENTATION_MODE_CHANGE, (function(t) { "inline" === r && "picture-in-picture" === t && n.fire(Yo), "picture-in-picture" === r && "inline" === t && n.fire(Jo), r = t, i.video.textTracks.forEach((function(n) { "picture-in-picture" === t && "hidden" === n.mode && (n.mode = "showing"), "inline" === t && "showing" === n.mode && (n.mode = "hidden") })) })), n.on(Po, (function() { i.supportsPresentationMode("picture-in-picture") && (i.presentationMode = "picture-in-picture") })), n.on(No, (function() { i.supportsPresentationMode("picture-in-picture") && (i.presentationMode = "inline") }))
    }

    function Ya(t, n, i) {
        var e = null;
        pa.spatialPlayback && (n.on(Vo, (function() {
            e && (i.deactivateEffect(fo), e = null, n.fire(Go, e));
            var r = t.video.spatial;
            r && (t.request.drm || i.supportsEffect(fo) && (e = i.activateEffect(fo, { threeUrl: t.request.urls.three_js, fps: t.video.fps, fieldOfView: r.fov, directorTimeline: r.director_timeline, projection: r.projection, stereoMode: r.stereo_mode, initialView: r.initial_view, isMobile: pa.android, dimensions: t.embed.on_site ? { width: 1080, height: 540 } : { width: 640, height: 360 } }), n.fire(Go, e)))
        })), i.on(Ei.SPATIAL_UNSUPPORTED, (function() { e && (i.deactivateEffect(fo), e = null, n.fire(Go, e)) })))
    }

    function Ja(t, n, i) {
        var e = null;
        n.on(Vo, (function() { e && (i.deactivateEffect(oo), e = null), t.video.canvas && (t.request.drm || i.supportsEffect(oo) && (e = i.activateEffect(oo))) }))
    }
    var Xa = vi((function(t, n, i) { di(t, n, i) }));

    function Za(t, n, i) { return i ? n ? n(t) : t : (t && t.then || (t = r.resolve(t)), n ? t.then(n) : t) }
    var Qa = function() {
        function t(t, n, i) { nt(this), this.Ca = Wu(t), this.Ra = t.session_url || t.sessionUrl, this.Oa = n, this.Ia = i, this.ja = !1, this.Da = !1, this.La() }
        var n = t.prototype;
        return n.disable = function() { this.Da = !0 }, n.forcePolling = function() { this.isForcePolling || (this.ja = !0, this.La()) }, n.unforcePolling = function() { this.ja = !1 }, n.La = function() {!1 !== this.Ca.polling && (this.Pa() ? this.Na() : this.Fa() && this.Ua()) }, n.Fa = function() { var t; return !(ou(this.Ca) && "started" !== (null == (t = this.Ca.archive) ? void 0 : t.status) || !this.isForcePolling && ru(this.Ca)) }, n.Pa = function() { return !this.Ra || !(!eu(this.Ca) || null !== this.Ca.id) }, n.Va = function() { try { var t = this; return Za(Ye(t.Oa).json(), (function(n) { return t.Ra = n.url, n.url })) } catch (t) { return r.reject(t) } }, n.Ua = function() {
            try {
                var t = this;
                if (t.Da) return;
                var n, i = {};
                return pa.browser.ie && (i = { Pragma: "no-cache", "Cache-Control": "no-cache" }),
                    function(t, n) { return t && t.then ? t.then(n) : n() }(function(e, r) { try { var o = Za(Ye({ url: t.Ra, retry: 3, retryStatus: function(t) { return [410].includes(t) || Ae.retryStatus(t) }, hooks: { beforeRetry: [t.Kt.bind(t)] }, headers: i }).json(), (function(t) { n = t })) } catch (t) { return r() } return o && o.then ? o.then(void 0, r) : o }(0, (function() { throw new Error("Hit max retries polling ".concat(t.Ra)) })), (function(i) {
                        if (n.status !== t.Ca.status) { var e; if (ou(n) && "provision_expire" === n.terminate_reason) return; var r = (q(e = {}, "active", nu.EVENT_ACTIVE), q(e, "pending", nu.EVENT_PENDING), q(e, "started", nu.EVENT_STARTED), q(e, "ended", nu.EVENT_ENDED), e)[n.status]; try { t.fire(r, n) } catch (t) { throw new Error("Error firing live event status change ".concat(t)) } }
                        if (n.archive && (!t.Ca.archive || n.archive.status !== t.Ca.archive.status)) {
                            var o, u = (q(o = {}, "started", nu.ARCHIVE_STARTED), q(o, "done", nu.ARCHIVE_DONE), q(o, "error", nu.ARCHIVE_ERROR), o)[n.archive.status];
                            t.fire(u, n)
                        }
                        t.Ca = Xa(t.Ca, n), t.Fa() && setTimeout(t.Ua.bind(t), 5e3)
                    }))
            } catch (t) { return r.reject(t) }
        }, n.Kt = function(t, n) { try { return Za(this.Va(), (function(n) { t.url = n })) } catch (t) { return r.reject(t) } }, n.Na = function() {
            try {
                var t = this;
                if (t.Da) return;
                return Za(Ye(t.Ia).json(), (function(n) {
                    var i = !1;
                    return function(e, r) { var o = function() { if (null !== n.ingest.session_id) return t.Ca.id = n.ingest.session_id, Za(t.Va(), (function() { t.Ua(), i = !0 })) }(); return o && o.then ? o.then(r) : r(o) }(0, (function(n) {
                        if (i) return n;
                        setTimeout(t.Na.bind(t), 5e3)
                    }))
                }))
            } catch (t) { return r.reject(t) }
        }, H(t, [{ key: "isForcePolling", get: function() { return this.ja } }]), t
    }();

    function ts() {}

    function ns(t, n, i) {
        var e, o, u = function(t) { return function() { for (var n = [], i = 0; i < arguments.length; i++) n[i] = arguments[i]; try { return r.resolve(t.apply(this, n)) } catch (t) { return r.reject(t) } } }((function(t) { return function(t) { if (t && t.then) return t.then(ts) }(function(n, e) { try { var u = function(t, n, i) { return t && t.then || (t = r.resolve(t)), n ? t.then(n) : t }(st("module/streamroot.js"), (function(n) { o = n(i, { TelecineEvents: _i, VideoEvents: bi }, t) })) } catch (t) { return } return u && u.then ? u.then(void 0, e) : u }(0, (function(t) {}))) }));

        function a() { i.endLive() }
        n.on(Fo, (function() {
            o && o.destroy(), t.video.p2p && (u(t.video.p2p), i.bufferTarget = 30, i.presentationDelay = 30), e && (e.disable(), e = null), t.video.live_event && !iu(t.video.live_event) && function(i) {
                (e = new Qa(i, function(t) { return au(t, "/session/refresh") }(t), function(t) { return "https://".concat(t.vimeo_url, "/live_event/status?clip_id=").concat(t.video.id) }(t))).on(nu.EVENT_ENDED, a), Object.keys(nu).forEach((function(t) {
                    var i = nu[t];
                    e.on(i, (function(t) { n.fire(i, t) }))
                }))
            }(t.video.live_event)
        })), n.on(Io, (function() { e && e.disable() })), i.on(nu.STREAM_ONLINE, (function() { e.isForcePolling && e.unforcePolling() })), i.on(nu.STREAM_OFFLINE, (function() { e.isForcePolling || e.forcePolling() }))
    }

    function is(t) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        if (!t || "null" === t || 0 === n.length) return { track: null };
        var i = t.split("."),
            e = Q(i, 2),
            r = e[0],
            o = e[1],
            u = r.split(/[-_]/),
            a = Q(u, 1),
            s = a[0],
            c = r !== s,
            f = n.filter((function(t) { return c && t.language === r || t.language === s })).sort((function(t, n) { var i = 2 * (t.language === s && t.kind === o) + 2 * (t.language === r) + 1 * (t.kind === o); return 2 * (n.language === s && n.kind === o) + 2 * (n.language === r) + 1 * (n.kind === o) - i }));
        return f.length > 0 ? { track: f[0], exactMatch: f[0].language === r && f[0].kind === o } : { track: null }
    }

    function es(t, n, i) {
        var e;

        function r() {
            if (0 !== n.video.textTracks.length) {
                if (n.video.textTracks.forEach((function(t) { t.on("cuechange", o), t.on("modechange", u) })), n.video.textTracks.language && Q(n.video.textTracks.language.split(/[-_]/), 1)[0] != Q(n.video.textTracks.language.split(/[-_]/), 1)[0]) { var i = "".concat(n.video.textTracks.language, ".subtitles"); if (is(i, n.video.textTracks).track) return void t.fire(Do, i) }
                t.fire(Lo)
            } else t.fire(Lo)
        }

        function o(n) {
            for (var i, e = n.target, r = e.activeCues, o = [], u = 0, a = r.length; u < a; u++) "" !== r[u].text.replace(/^\s+|\s+$/gm, "") && ((i = document.createElement("span")).appendChild(r[u].getCueAsHTML()), o.push({ html: i.innerHTML.replace("\n", "<br>"), text: r[u].text }));
            t.fire(Wo, e, o)
        }

        function u(n) {
            var e = n.target,
                r = i.querySelector("video");
            pa.iOS && function(t) { var n = [document.fullscreenElement, document.webkitFullscreenElement, document.webkitCurrentFullScreenElement, document.mozFullScreenElement, document.msFullscreenElement].find((function(t) { return void 0 !== t })); return void 0 !== n ? !!n : t.webkitDisplayingFullscreen }(r) && "showing" === e.mode && t.fire(zo, e)
        }
        t.on(Vo, r), t.on(Do, (function(i) {
            if (!e || e.id !== i) {
                var r = n.video.textTracks.getTrackById(i),
                    o = !0;
                if (!r) {
                    var u = is(i, n.video.textTracks);
                    r = u.track, o = u.exactMatch
                }
                r !== e && setTimeout((function() { n.video && n.video.textTracks.forEach((function(t) { t.mode = t === r ? "hidden" : "disabled" })), t.fire(zo, r, !o), e = r }), 0)
            }
        })), t.on(Lo, (function() { setTimeout((function() { n.video && n.video.textTracks.forEach((function(t) { t.mode = "disabled" })), t.fire(Wo), e && (e = null, t.fire(zo, null)) }), 0) })), t.on(_i.TEXT_TRACKS_AVAILABLE, r)
    }

    function rs(t, n, i) {
        var e, r;
        return e = new ro(i, [Sr, Vr, qr, Te], { externalDisplays: [AirPlayExternalDisplay], mediaSourceScanner: { droppedFrameSwitchPercent: Ba(t) }, tests: t.request.ab_tests, fileCodecs: t.request.file_codecs, bufferTarget: t.video.buffer_target, presentationDelay: t.video.presentation_delay }), Object.values(bi).filter((function(t) { return ![bi.TIME_UPDATE, bi.PROGRESS, bi.SUSPEND, bi.ERROR].includes(t) })).forEach((function(t) {
                e.on(t, (function() {
                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                    Ga(t, n, "video event")
                }))
            })), e.on(_i.STREAMS_LOADED, (function(n) {
                n.video.forEach((function(n) {
                    var i = function(t, n) { return n.find((function(n) { return Ra(n.id) === String(t) || Ra(n.id) === Ra(t) })) }(n.id, Va(t, e));
                    i ? (n.profile = i.profile, n.quality = i.quality, n.fps = i.fps) : (n.profile = null, n.quality = "".concat(n.height, "p"), n.fps = n.framerate)
                }))
            })), e.on(_i.STREAM_CHANGE, (function(t) {
                var i = t.index,
                    e = t.streams,
                    r = e[i];
                Ga("Stream changed", r, "video"), n.fire(_i.STREAM_CHANGE, r, i, e)
            })), e.on(_i.STREAM_TARGET_CHANGE, (function(t) {
                var i = t.index,
                    e = t.streams,
                    r = e[i];
                n.fire(_i.STREAM_TARGET_CHANGE, r, i, e)
            })),
            function(t, n, i) {
                i.forEach((function(i) {
                    t(i, (function() {
                        for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                        n.apply(void 0, [i].concat(e))
                    }))
                }))
            }(e.on, n.fire, [gi.ACTIVATED, gi.AVAILABLE, gi.DEACTIVATED, gi.UNAVAILABLE, ki.STREAM_OFFLINE, ki.STREAM_ONLINE, Ti.MEDIASESSION_PAUSE, Ti.MEDIASESSION_PLAY, Ti.MEDIASESSION_SEEK_BACKWARD, Ti.MEDIASESSION_SEEK_FORWARD, _i.AV_DURATION_MISMATCH, _i.BANDWIDTH, _i.BUFFER_ENDED, _i.BUFFER_OCCUPANCY, _i.BUFFER_STARTED, _i.CHAPTER_CUES_UPDATED, _i.CUE_POINT, _i.CURRENT_FILE_CHANGE, _i.DOWNLOAD_END, _i.DOWNLOAD_TIMEOUT, _i.DRM_AUTH_SUCCESS, _i.DROPPED_FRAMES, _i.MANIFEST_LOADED, _i.MANIFEST_TIMEOUT, _i.QUOTA_EXCEEDED_ERROR, _i.SCANNER_CHANGE, _i.STREAM_CHANGE_START, _i.STREAM_BUFFER_END, _i.STREAM_BUFFER_START, _i.TEXT_TRACKS_AVAILABLE, Ei.CAMERA_UPDATE, Ei.MOTION_END, Ei.MOTION_START, Ei.SPATIAL_UNSUPPORTED, Ei.WEBVR_ENTER, Ei.WEBVR_EXIT, Ei.WEBVR_HARDWARE_AVAILABLE, Si.BRAIN_ML_SWITCH_TO_SKYFIRE, Si.BRAIN_ML_MODEL_INPUTS, bi.DURATION_CHANGE, bi.ERROR, bi.LOAD_START, bi.LOADED_DATA, bi.LOADED_METADATA, bi.PLAYING, bi.RATE_CHANGE, bi.STALLED, bi.VOLUME_CHANGE, bi.WAITING]), n.fire(Uo), new es(n, e, i), new Ka(t, n, e), new Ya(t, n, e), new Ja(t, n, e), new ns(t, n, e), r = new $a(t, n, e), n.on(Fo, (function() {
                var r = t.video.live_event;
                if (eu(r) || function(t) { return "active" === (null == t ? void 0 : t.status) }(r) || ou(r) && !iu(r)) e.video = null;
                else if (!ru(r) || !e.video || t.isNewVideo()) {
                    var o = ru(r) ? function(t) {
                            var n = [],
                                i = Ua(t);
                            i && n.push(i);
                            var e = function(t) {
                                var n, i = t.video.live_event,
                                    e = t.request.files;
                                if (Eu(e.dash)) return null;
                                var r = e.dash.default_cdn,
                                    o = e.dash.cdns[r].url || (null == (n = i.playback) ? void 0 : n.dash_noredirect),
                                    u = t.request.flags.live_dash ? 2 : 1;
                                return { id: "dash-".concat(r, "-").concat(t.video.id), src: o, mime: Qo.dashMpd, priority: u, metadata: { cdn: r, origin: e.dash.cdns[r].origin, quality: "sd" } }
                            }(t);
                            return e && n.push(e), n
                        }(t) : function(t) {
                            var n = t.request.files,
                                i = Ca(n),
                                e = La(t),
                                r = t.request.cookie.quality || e || function(t) {
                                    var n = Ca(t.request.files),
                                        i = n.some(ja);
                                    pa.mobileAndroid && (i = !1);
                                    var e = "720p";
                                    if (i) { var r = n.map(Ma); - 1 !== r.indexOf("1080p") && -1 === r.indexOf("720p") && (e = "1080p") }
                                    return t.request.cookie.hd || t.video.default_to_hd ? e : "360p"
                                }(t),
                                o = function(t) {
                                    var n = t.files,
                                        i = void 0 === n ? [] : n,
                                        e = t.preference,
                                        r = void 0 === e ? "360p" : e,
                                        o = t.priorityOffset,
                                        u = void 0 === o ? 0 : o;
                                    (i = U(i)).sort(Na());
                                    var a = i.map(Ma);
                                    if (r) {
                                        -1 === a.indexOf(r) && (a.push(r), a.sort((function(t, n) { return Da(n) - Da(t) })));
                                        var s = a.indexOf(r),
                                            c = a.splice(0, s);
                                        c.reverse(), a.push.apply(a, tt(c))
                                    }
                                    return i.map((function(t) { return { id: t.id, src: t.url, mime: t.mime, priority: a.indexOf(t.quality) + 1 + u, metadata: { profile: t.profile, cdn: t.cdn, origin: t.origin, quality: t.quality, fps: t.fps } } }))
                                }({ files: i, preference: r, priorityOffset: 2 }),
                                u = t.request.drm && pa.browser.safari;
                            return (n.hls && (pa.iPhone || pa.iPad) || u) && (o = o.concat(function(t) {
                                var n = t.request.files,
                                    i = n.hls.default_cdn,
                                    e = t.request.drm,
                                    r = Aa(n.hls.cdns[i], t.video.spatial, e);
                                return { id: "hls-".concat(i, "-").concat(t.video.id), src: r, mime: Qo.hls, priority: 2, metadata: { cdn: i, origin: n.hls.cdns[i].origin, quality: "sd" } }
                            }(t))), n.dash && !u && (o = o.concat(function(t) { var n = t.request.files; return Eu(n.dash) ? [] : Object.keys(n.dash.cdns).map((function(i) { var e = Aa(n.dash.cdns[i], t.video.spatial); return { id: "dash-".concat(i, "-").concat(t.video.id), src: e, mime: t.request.drm ? Qo.dashMpd : Qo.dash, priority: i === n.dash.default_cdn ? 1 : 2, metadata: { cdn: i, origin: n.dash.cdns[i].origin, quality: "sd" } } })) }(t))), o
                        }(t),
                        u = function(t) { return t.request.text_tracks.map((function(t) { return { id: t.id, src: t.url, kind: t.kind, label: t.label, language: t.lang } })) }(t);
                    !e.video || t.isNewVideo() ? function(r, o) {
                        var u = t.video.live_event,
                            a = i.getBoundingClientRect(),
                            s = ru(u) ? Ua(t) : function(t) {
                                var n = t.request.files;
                                if (!Eu(n.hls)) {
                                    var i = n.hls.default_cdn,
                                        e = n.hls.cdns[i],
                                        r = e.captions || e.avc_url;
                                    return r ? { src: r, mime: Qo.hls, metadata: { cdn: i, origin: e.origin, quality: "sd" } } : null
                                }
                                return null
                            }(t);
                        e.video = { id: t.video.id, title: t.video.title, subtitle: "from ".concat(t.video.owner.name), files: r, textTracks: o, chapters: ia(t, "embed.chapters", []), duration: t.video.duration, externalDisplayFiles: { AirPlay: s }, metadata: { playlistRefreshUrl: uu(t), thumbnail: t.video.thumbs[640], useHls: t.request.drm && pa.browser.safari, drm: t.request.drm, p2p: t.video.p2p, percentShown: fo.frustumSurfaceArea(t.video.spatial.fov, a.width, a.height) } }, n.fire(Vo)
                    }(o, u) : function(t, n) {
                        t.forEach((function(t) {
                            var n = e.video.files.getFileById(t.id);
                            n && n.src !== t.src && (n.src = t.src)
                        })), n.forEach((function(t) {
                            var n = e.video.textTracks.getTrackById(t.id);
                            n && n.src !== t.src && (n.src = t.src)
                        }))
                    }(o, u)
                }
            })), { telecine: e, play: function() { return r.play() }, pause: function() { return r.pause() } }
    }

    function os(t, n, i) { this.constructorName = "BackboneError", this.message = t, this.name = n, this.source = i }
    os.prototype = new Error;
    var us = { embed: {}, request: { cookie: {}, files: {}, flags: {}, urls: {}, text_tracks: [], file_codecs: {} }, video: { owner: {}, thumbs: {}, version: {} }, user: {} };

    function as(t, n) {
        var i, e, r, o = nt(),
            u = null,
            a = new Gu(n, us);

        function s(t) { return o.fire(Fo, t), t }
        var c = {
            play: function() { return e.play() },
            pause: function() { return e.pause() },
            get currentTime() { return r.currentTime > .1 ? Mo(r.currentTime) : 0 },
            set currentTime(t) {
                if (t = parseFloat(t), isNaN(t) || t < 0) throw new os("Seconds must be a positive number less than the duration of the video.", "RangeError", "setCurrentTime");
                o.fire(Ro, null, t)
            },
            get duration() { return Mo(a.video.duration) },
            get enabledTextTrack() { return u },
            loadVideo: function(t) { return a.reset(t), a = s(a), this },
            unload: function() { return o.fire(Oo), this },
            destroy: function() { return o.fire(Io), this },
            on: function(t, n) { return o.on(t, n), this },
            once: function(t, n) { return o.once(t, n), this },
            off: function(t, n) { return o.off(t, n), this },
            hasTextTrack: function(t) {
                var n, i, e = this.textTracks;
                if (xo(t)) i = e.getTrackById(t);
                else {
                    var r = t.split(".")[0];
                    n = e.some((function(t) { return t.language.toLowerCase() === r.toLowerCase() }))
                }
                return !(!i && !n)
            },
            enableTextTrack: function(t) {
                var n, i, e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    a = this.textTracks;
                if (xo(t)) u = a.getTrackById(t);
                else {
                    var s = t.split("."),
                        c = Q(s, 2);
                    n = c[0];
                    var f = c[1];
                    if (i = void 0 === f ? e : f, !this.hasTextTrack(t)) throw new os("There are no tracks for “".concat(n.toUpperCase(), "”."), "InvalidTrackLanguageError", "enableTextTrack");
                    var l = i ? "".concat(n, ".").concat(i) : n;
                    u = is(l, a).track
                }
                if (!u || i && u.kind !== i) throw new os("There are no ".concat(i, " tracks for “").concat(n.toUpperCase(), "”."), "InvalidTrackError", "enableTextTrack");
                r.Ru(!0), o.fire(Do, u.id)
            },
            disableTextTrack: function() { u = null, r.Ru(!1), o.fire(Lo) },
            set quality(t) { o.fire(jo, t) },
            get playbackRate() { return r ? r.playbackRate : 1 },
            set playbackRate(t) { r.playbackRate = t, r.defaultPlaybackRate = t },
            get presentationMode() { return r.presentationMode },
            set presentationMode(t) { "picture-in-picture" === t ? o.fire(Po) : o.fire(No) },
            get textTracks() { return r.video ? r.video.textTracks : [] },
            get representations() { return Va(a, r) },
            get volume() { return r ? r.volume : Mo(a.request.cookie.volume) },
            set volume(t) {
                if (t = parseFloat(t), isNaN(t) || t < 0 || t > 1) throw new os("Volume should be a number between 0 and 1.", "RangeError", "setVolume");
                r.volume = t
            },
            get videoId() { return a.video.id },
            get videoWidth() { return r.videoWidth || a.video.width },
            get videoHeight() { return r.videoHeight || a.video.height },
            get readyState() { return r.videoElement.readyState },
            get brainDebug() { return r.brainDebug }
        };
        return a = s(a), e = new rs(a, o, t), r = e.telecine, i = Object.create(r), ot(i, c)
    }
    var ss = navigator.userAgent.toLowerCase();

    function cs(t) { t = t.toLowerCase(); var n = new RegExp(t).test(ss); return "safari" === t ? n && new RegExp("version").test(ss) : n }

    function fs(t) {
        var n = document.createElement("div"),
            i = t.charAt(0).toUpperCase() + t.slice(1),
            e = (t + " " + ["Webkit", "Moz", "O", "ms"].join(i + " ") + i).split(" ");
        for (var r in e) { var o = e[r]; if (void 0 !== n.style[o]) return o }
        return t
    }
    var ls = !!cs("android") && (parseFloat(ss.replace(/^.* android (\d+)\.(\d+).*$/, "$1.$2")) || !0),
        ds = window.devicePixelRatio || 1,
        hs = !(!cs("windows phone") && !cs("iemobile")) && (parseFloat(ss.replace(/^.* windows phone (os )?(\d+)\.(\d+).*$/, "$2.$3")) || !0),
        vs = !!cs("msie") && parseFloat(ss.replace(/^.*msie (\d+).*$/, "$1")),
        ps = !!cs("trident") && parseFloat(ss.replace(/^.*trident\/(\d+)\.(\d+).*$/, "$1.$2")) + 4,
        ms = !!(cs("ipad;") || cs("iphone;") || cs("ipod touch;")) && parseFloat(ss.replace(/^.* os (\d+)_(\d+).*$/, "$1.$2")),
        ws = cs("opera") || cs("opr"),
        bs = /^Mozilla\/5\.0 \(.* Mac OS X.*\(KHTML, like Gecko\)(?: Mobile\/[\S]*|)$/i.test(ss);

    function gs() { if (!cs("safari")) return []; var t = ss.split(" ").find((function(t) { return /version\//.test(t) })); return t ? t.replace("version/", "").split(".").map((function(t) { return parseInt(t, 10) })) : [] }
    var ys = cs("safari") && cs("apple") && !cs("chrome") && !cs("android") && gs()[0] >= 11,
        _s = { airPlay: "WebKitPlaybackTargetAvailabilityEvent" in window, android: ls, appleMail: bs, hasAutoplayPolicy: ls || ms || ys || function() { if (!cs("chrome")) return []; var t = ss.split(" ").find((function(t) { return ms ? /CriOS\//.test(t) : /chrome\//.test(t) })); return t ? t.replace("chrome/", "").split(".").map((function(t) { return parseInt(t, 10) })) : [] }()[0] >= 66, iOS: ms, mobileAndroid: ls && cs("mobile"), browser: { bb10: cs("bb10"), chrome: cs("chrome"), firefox: cs("firefox"), ie: vs || ps, edge: cs("edge"), opera: ws, safari: cs("safari") && cs("apple") && !cs("chrome") && !cs("android") }, devicePixelRatio: ds, iPhone: cs("iphone;") || cs("ipod touch;") || cs("ipod;"), iPad: cs("ipad;"), iPadNonRetina: cs("ipad;") && ds < 2, mac: cs("mac os"), pointerEvents: window.navigator.pointerEnabled || window.navigator.msPointerEnabled || !1, svg: !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect, touch: "ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch || cs("windows phone") || window.navigator.maxTouchPoints > 1 || window.navigator.msMaxTouchPoints || !1, transformProperty: fs("transform"), transitionProperty: fs("transition"), webp: function() { var t = document.createElement("canvas"); return !(!t.getContext || !t.getContext("2d")) && 0 === t.toDataURL("image/webp").indexOf("data:image/webp") }(), windowsPhone: hs },
        ks = /mac os x 10_13/.test(ss),
        Es = _s.iOS && _s.iOS >= 11,
        Ts = _s.iPhone && 812 === window.screen.availHeight && 375 === window.screen.availWidth,
        Ss = _s.iPhone && 896 === window.screen.availHeight && 414 === window.screen.availWidth,
        xs = _s.iPad && 1112 === window.screen.availWidth && 834 === window.screen.availHeight,
        Ms = _s.iPad && 834 === window.screen.availWidth && 1194 === window.screen.availHeight,
        As = _s.iPad && 1024 === window.screen.availWidth && 1366 === window.screen.availHeight,
        Cs = Ts || Ss || xs || Ms || As;

    function Rs() { return !!(ys && ks || ys && Es) || "undefined" != typeof MediaSource && MediaSource.isTypeSupported('video/mp4; codecs="hvc1"') }

    function Os() { return !(_s.iOS || _s.iPad || _s.browser.ie) && (!cs("safari") || gs()[0] > 11 || 11 === gs()[0] && (gs()[2] > 1 || gs()[1] > 0)) }
    _s.hevc = Rs(), _s.hdr = ys && Es && Cs, _s.vp9hdr = (window.matchMedia("(color-gamut: p3)").matches || window.matchMedia("(color-gamut: rec2020)").matches) && screen.colorDepth >= 48 && (MediaSource.isTypeSupported('video/webm; codecs="vp09.02.10.10.01.09.16.09.00"') || MediaSource.isTypeSupported('video/webm; codecs="vp09.02.10.10.01.09.16.09.01"') || MediaSource.isTypeSupported('video/webm; codecs="vp09.02.10.10.01.09.18.09.00"') || MediaSource.isTypeSupported('video/webm; codecs="vp09.02.10.10.01.09.18.09.01"')), _s.av1 = "undefined" != typeof MediaSource && MediaSource.isTypeSupported('video/mp4; codecs="av01.0.31M.08.0.110.01.01.01.0"'), _s.webvr = !!(window.navigator && "getVRDisplays" in window.navigator), _s.webxr = !!(window.navigator && "xr" in window.navigator && "supportsSession" in window.navigator.xr), _s.spatialPlayback = Os(), _s.spatialHEVC = !_s.browser.safari && Os() && Rs(), _s.stereoscopic = _s.spatialPlayback && _s.mobileAndroid;
    var Is = "object" == typeof global && global && global.Object === Object && global,
        js = "object" == typeof self && self && self.Object === Object && self,
        Ds = (Is || js || Function("return this")()).Symbol,
        Ls = Object.prototype,
        Ps = Ls.hasOwnProperty,
        Ns = Ls.toString,
        Fs = Ds ? Ds.toStringTag : void 0,
        Us = Object.prototype.toString,
        Vs = Ds ? Ds.toStringTag : void 0;
    var Bs = function(t, n) { return function(i) { return t(n(i)) } }(Object.getPrototypeOf, Object),
        Hs = Function.prototype,
        qs = Object.prototype,
        Ws = Hs.toString,
        zs = qs.hasOwnProperty,
        Gs = Ws.call(Object),
        $s = function(t) { var n, i = ("undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof module ? module : Function("return this")()).Symbol; return "function" == typeof i ? i.observable ? n = i.observable : (n = i("observable"), i.observable = n) : n = "@@observable", n }();

    function Ks(t, n, i) {
        var e;
        if ("function" == typeof n && void 0 === i && (i = n, n = void 0), void 0 !== i) { if ("function" != typeof i) throw new Error("Expected the enhancer to be a function."); return i(Ks)(t, n) }
        if ("function" != typeof t) throw new Error("Expected the reducer to be a function.");
        var r = t,
            o = n,
            u = [],
            a = u,
            s = !1;

        function c() { a === u && (a = u.slice()) }

        function f() { return o }

        function l(t) {
            if ("function" != typeof t) throw new Error("Expected listener to be a function.");
            var n = !0;
            return c(), a.push(t),
                function() {
                    if (n) {
                        n = !1, c();
                        var i = a.indexOf(t);
                        a.splice(i, 1)
                    }
                }
        }

        function d(t) {
            if (! function(t) {
                    if (! function(t) { return null != t && "object" == typeof t }(t) || "[object Object]" != function(t) {
                            return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : Vs && Vs in Object(t) ? function(t) {
                                var n = Ps.call(t, Fs),
                                    i = t[Fs];
                                try { t[Fs] = void 0; var e = !0 } catch (t) {}
                                var r = Ns.call(t);
                                return e && (n ? t[Fs] = i : delete t[Fs]), r
                            }(t) : function(t) { return Us.call(t) }(t)
                        }(t)) return !1;
                    var n = Bs(t);
                    if (null === n) return !0;
                    var i = zs.call(n, "constructor") && n.constructor;
                    return "function" == typeof i && i instanceof i && Ws.call(i) == Gs
                }(t)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
            if (void 0 === t.type) throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
            if (s) throw new Error("Reducers may not dispatch actions.");
            try { s = !0, o = r(o, t) } finally { s = !1 }
            for (var n = u = a, i = 0; i < n.length; i++)(0, n[i])();
            return t
        }
        return d({ type: "@@redux/INIT" }), (e = {
            dispatch: d,
            subscribe: l,
            getState: f,
            replaceReducer: function(t) {
                if ("function" != typeof t) throw new Error("Expected the nextReducer to be a function.");
                r = t, d({ type: "@@redux/INIT" })
            }
        })[$s] = function() {
            var t, n = l;
            return (t = {
                subscribe: function(t) {
                    if ("object" != typeof t) throw new TypeError("Expected the observer to be an object.");

                    function i() { t.next && t.next(f()) }
                    return i(), { unsubscribe: n(i) }
                }
            })[$s] = function() { return this }, t
        }, e
    }

    function Ys() { for (var t = arguments.length, n = Array(t), i = 0; i < t; i++) n[i] = arguments[i]; return 0 === n.length ? function(t) { return t } : 1 === n.length ? n[0] : n.reduce((function(t, n) { return function() { return t(n.apply(void 0, arguments)) } })) }
    var Js = Object.assign || function(t) { for (var n = 1; n < arguments.length; n++) { var i = arguments[n]; for (var e in i) Object.prototype.hasOwnProperty.call(i, e) && (t[e] = i[e]) } return t };

    function Xs() {
        for (var t = arguments.length, n = Array(t), i = 0; i < t; i++) n[i] = arguments[i];
        return function(t) {
            return function(i, e, r) {
                var o, u = t(i, e, r),
                    a = u.dispatch,
                    s = { getState: u.getState, dispatch: function(t) { return a(t) } };
                return o = n.map((function(t) { return t(s) })), a = Ys.apply(void 0, o)(u.dispatch), Js({}, u, { dispatch: a })
            }
        }
    }

    function Zs(t) { return !isNaN(t) && parseInt(Number(t), 10) == t && !isNaN(parseInt(t, 10)) }
    var Qs = function(t) { for (var n = this, i = function i(e) { return e.length >= t.length ? t.apply(n, e) : function() { for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r]; return i([].concat(tt(e), n)) } }, e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), o = 1; o < e; o++) r[o - 1] = arguments[o]; return i(r) }((function(t, n) { return Object.keys(t).every((function(i) { return t[i] === n[i] })) })),
        tc = function() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []; return { get: function(n) { return n ? t.find(Qs(n)) : t }, insert: function(n) { return (t = t.concat(n)).slice(-1).pop() }, getOrInsert: function(t) { return this.get(t) || this.insert(t) }, remove: function(n) { return t.splice(t.findIndex(Qs(n)), 1).pop() } } };

    function nc(t, n) { var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : document.styleSheets[0]; try { i.insertRule ? i.insertRule(t + "{" + n + "}", (i.cssRules || i.rules).length) : i.addRule(t, n) } catch (t) {} }

    function ic(t) { if (t && t.detail > 0) try { document.activeElement.blur() } catch (t) {} }

    function ec() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document.activeElement,
            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        try { t.blur() } catch (t) { n && n(t) }
    }

    function rc(t) { var n = t.getBoundingClientRect(); return document.msFullscreenElement && window.parent !== window && t.offsetWidth < t.clientWidth && (n = { bottom: 100 * n.bottom, left: 100 * n.left, top: 100 * n.top, right: 100 * n.right, width: 100 * n.width, height: 100 * n.height }), n }

    function oc(t) { try { return new URL(t).origin } catch (t) {} var n = document.createElement("a"); return n.href = t, n.origin ? n.origin : "".concat(n.protocol.replace(":", ""), "://").concat(n.host) }

    function uc(t) {
        var n = t.width,
            i = t.height,
            e = t.elementWidth,
            r = t.elementHeight,
            o = t.threshold,
            u = void 0 === o ? 10 : o,
            a = 1,
            s = n / i,
            c = e - r * s,
            f = r - e / s;
        if (c > 0 && c < u || f > 0 && f < u) {
            var l = e / (e - c),
                d = r / (r - f);
            a = dc(Math.max(l, d), 3)
        }
        return { extraWidth: c, extraHeight: f, scaleFactor: a }
    }

    function ac(t, n, i) { return t > i ? i : n > t ? n : t }

    function sc(t, n, i) {
        var e = i.width,
            r = i.height,
            o = i.scrollbars,
            u = void 0 === o ? "yes" : o,
            a = i.resizable,
            s = void 0 === a ? "yes" : a,
            c = i.toolbar,
            f = void 0 === c ? "no" : c,
            l = (window.screenY || window.screenTop || 0) + window.outerHeight / 2 - r / 2,
            d = (window.screenX || window.screenLeft || 0) + window.outerWidth / 2 - e / 2;
        window.chrome && -1 !== window.navigator.userAgent.toLowerCase().indexOf("mac os x") && (r += 27), window.safari && (r += 47);
        var h = "scrollbars=".concat(u, ",resizable=").concat(s, ",toolbar=").concat(f);
        return window.open(t, n, "width=".concat(e, ",height=").concat(r, ",left=").concat(d, ",top=").concat(l, ",").concat(h))
    }

    function cc(t) { return function(t) { return /^(https?:)?\/\/(.+)\.vimeo(ws)?\.(com|dev)(?=$|\/)/.test(t) }(t) ? oc(t) : "" }

    function fc(t, n, i) {
        if (function(t) { return /^(https?:)?\/\/(.+)\.vimeo(ws)?\.(com|dev)\/video\/\d+\/config(?=$|\?)/.test(t) }(n)) return n;
        var e = function(t) { if (Zs(t)) return parseInt(t, 10); var n = t.match(/(video|\.com|\.dev)\/(\d+)/); if (!n || n.length < 3) throw new Error("Please provide a Vimeo URL with a valid clip id."); return parseInt(n[2], 10) }(n),
            r = ht(window.location.search),
            o = ht("".concat(n).split("?")[1]),
            u = Object.assign(r, o, i);
        return pt("".concat(t, "/video/").concat(e, "/config"), u)
    }

    function lc(t) {
        for (var n, i, e = (t || document).querySelectorAll("[tabindex]"), r = [], o = 0, u = 0, a = e.length; u < a; u++) n = e[u], i = window.getComputedStyle(n, ""), n.tabIndex > 0 && "none" !== i.display && i.opacity > 0 && "hidden" !== i.visibility && (r[o++] = n);
        var s = r.shift();
        s && (s.focus(), s.blur())
    }

    function dc(t) { var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3; if (t = parseFloat(t), isNaN(t)) return 0; var i = Math.pow(10, n); return Math.round(t * i) / i }

    function hc() { return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (function(t) { return (t ^ 16 * Math.random() >> t / 4).toString(16) })) }

    function vc(t, n) { return -1 !== U(n).indexOf(t) }

    function pc(t) { return t ? U(t.parentNode.children).indexOf(t) : -1 }
    var mc = function() { for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++) n[i] = arguments[i]; return n.reduce((function(t, n) { return function() { return t(n.apply(void 0, arguments)) } })) }(pc, (function(t, n) {
        for (;
            (null == (i = t) ? void 0 : i.parentElement) && !vc(t, n);) {
            var i;
            t = t.parentElement
        }
        return vc(t, n) ? t : null
    }));

    function wc(t, n, i) {
        if (void 0 !== i) t.style[n] = i;
        else if (function(t) { return "string" == typeof t || !Ln(t) && Cn(t) && "[object String]" == It(t) }(n)) t.setAttribute("style", n);
        else
            for (var e in n) wc(t, e, n[e])
    }

    function bc(t, n, i) {
        i.forEach((function(i) {
            t(i, (function() {
                for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                n.apply(void 0, [i].concat(e))
            }))
        }))
    }

    function gc(t) { for (var n = Object.keys(t), i = n.length, e = [], r = 0; r < i;) e[r] = t[n[r]], r += 1; return e }

    function yc(t, n) { return n && 0 === n.indexOf(t) }
    var _c = 0;

    function kc() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "p",
            n = ++_c;
        return "".concat(t).concat(n)
    }

    function Ec(t) { var n = t; return !t || t instanceof Error || (n = new Error(t.message || t), t.name && (n.name = t.name)), n }
    var Tc = { Ba: kc(), Ha: kc(), qa: kc(), Wa: kc() },
        Sc = { VIDEO_TITLE: "video-title", VIDEO_BYLINE: "video-byline", VIDEO_PORTRAIT: "video-portrait" },
        xc = { h264: "video/mp4", hls: "application/vnd.apple.mpegurl", hlsLive: "application/x-mpegURL", dash: "application/vnd.vimeo.dash+json", dashMpd: "video/vnd.mpeg.dash.mpd", vp6: "video/x-flv", vp8: "video/webm", webm: "video/webm", hds: "application/f4m" },
        Mc = { za: kc(), Ga: kc(), $a: kc(), Ka: kc(), _showOverlay: kc(), Ya: kc(), Ja: kc(), Xa: kc(), Za: kc(), Qa: kc(), ts: kc(), ns: kc(), es: kc(), rs: kc(), os: kc(), us: kc(), as: kc(), ss: kc(), cs: kc(), fs: kc(), _hideOutro: kc(), ls: kc(), _overrideControlbarBehavior: kc(), ds: kc(), hs: kc(), vs: kc(), ps: kc(), ms: kc(), ws: kc(), _addCard: kc(), _removeCard: kc(), bs: kc(), ys: kc() },
        Ac = { will: "willLikeVideo", did: "didLikeVideo" },
        Cc = { will: "willUnlikeVideo", did: "didUnlikeVideo" },
        Rc = { will: "willAddToWatchLater", did: "didAddToWatchLater" },
        Oc = { will: "willRemoveFromWatchLater", did: "didRemoveFromWatchLater" },
        Ic = { will: "willOpenVodPurchaseForm", did: "didOpenVodPurchaseForm" },
        jc = { will: "willOpenShareOverlay", did: "didOpenShareOverlay" },
        Dc = { will: "willOpenLoginForm", did: "didOpenLoginForm" },
        Lc = { will: "willOpenCollectionsOverlay", did: "didOpenCollectionsOverlay" },
        Pc = { will: "willShowOutro", did: "didShowOutro" },
        Nc = { will: "willSendPlayLog", did: "didSendPlayLog" },
        Fc = { _s: kc(), ks: kc(), Es: kc(), Ts: kc(), He: kc(), Ss: kc(), Ms: kc(), As: kc(), Cs: kc(), Rs: kc(), Os: kc(), Is: kc(), Ds: kc(), Ls: kc(), Ps: kc(), Ns: kc(), Fs: kc(), Us: kc(), Vs: kc(), Bs: kc(), Hs: kc(), qs: kc(), Ws: kc(), zs: kc(), Gs: kc(), $s: kc(), Ks: kc(), Ys: kc(), Js: kc(), Xs: kc(), Zs: kc(), Qs: kc(), tc: kc(), nc: kc(), ic: kc(), ec: kc(), rc: kc(), oc: kc(), uc: kc(), ac: kc(), sc: kc(), cc: kc(), fc: kc(), lc: kc(), dc: kc(), hc: kc(), vc: kc(), pc: kc(), mc: kc(), wc: kc(), bc: kc(), gc: kc(), yc: kc(), _c: kc(), kc: kc(), Ec: kc(), Tc: kc(), Sc: kc(), xc: kc(), Mc: kc(), Ac: kc(), Cc: kc(), Rc: kc(), Oc: kc(), Ic: kc(), jc: kc(), Dc: kc(), Lc: kc(), Pc: kc(), Nc: kc(), Fc: kc(), Uc: kc(), Vc: kc(), Bc: kc(), Hc: kc(), qc: kc(), Wc: kc(), zc: kc(), Gc: kc(), $c: kc(), Kc: kc(), Yc: kc(), Jc: kc(), Xc: kc(), Zc: kc(), Qc: kc(), tf: kc(), nf: kc(), if: kc(), ef: kc(), rf: kc(), uf: kc(), af: kc(), sf: kc(), cf: kc(), ff: kc(), lf: kc(), df: kc(), hf: kc(), vf: kc(), pf: kc(), _loadVideo: kc(), mf: kc(), wf: kc(), bf: kc(), gf: kc(), yf: kc(), _f: kc(), kf: kc(), Ef: kc(), Tf: kc(), Sf: kc(), xf: kc(), Mf: kc(), Af: kc(), Cf: kc(), Rf: kc(), Of: kc(), If: kc(), jf: kc(), Df: kc(), Lf: kc(), ue: kc(), Pf: kc(), Nf: kc(), Ff: kc(), Uf: kc(), Vf: kc(), Bf: kc(), Hf: kc(), qf: kc(), Wf: kc(), zf: kc(), Gf: kc(), $f: kc(), Kf: kc(), Yf: kc(), Jf: kc(), Xf: kc(), Zf: kc() },
        Uc = { za: kc(), Qf: kc(), tl: kc(), nl: kc() },
        Vc = { "application/vnd.apple.mpegurl": "hls", "application/vnd.vimeo.dash+json": "dash", "video/vnd.mpeg.dash.mpd": "dash", "video/mp4": "progressive", "video/webm": "progressive", "video/x-flv": "progressive", "application/x-mpegURL": "hlslive" },
        Bc = { AD_STARTED: "adstarted", AD_COMPLETED: "adcompleted", AD_ERROR: "aderror", AD_SKIPPED: "adskipped", AD_ALL_COMPLETED: "adallcompleted", BUFFER_END: "bufferend", BUFFER_START: "bufferstart", CHAPTER_CHANGE: "chapterchange", CHROMECAST_CONNECTED: "chromecastconnected", CONTROL_BAR_VISIBILITY_CHANGED: "controlbarvisibilitychanged", CUE_CHANGE: "cuechange", CUEPOINT: "cuepoint", DURATION_CHANGE: "durationchange", EMAIL_CAPTURE: "emailcapture", ENDED: "ended", ERROR: "error", FULLSCREENCHANGE: "fullscreenchange", LIVE_EVENT_ENDED: "liveeventended", LIVE_EVENT_STARTED: "liveeventstarted", LIVE_STREAM_OFFLINE: "livestreamoffline", LIVE_STREAM_ONLINE: "livestreamonline", LOADED_DATA: "loadeddata", LOAD_START: "loadstart", LOADED_METADATA: "loadedmetadata", LOADED: "loaded", MOTION_END: "motionend", MOTION_START: "motionstart", WEBVR_HARDWARE_AVAILABLE: "webvrhardwareavailable", ENTER_WEBVR: "enterwebvr", EXIT_WEBVR: "exitwebvr", SPATIAL_UNSUPPORTED: "spatialunsupported", PAUSE: "pause", PLAY: "play", PLAYING: "playing", PLAYBACK_RATE_CHANGE: "playbackratechange", RATE_CHANGE: "ratechange", PROGRESS: "progress", READY: "ready", SEEKING: "seeking", SEEKED: "seeked", SPACE_CHANGE: "spacechange", TEXT_TRACK_CHANGE: "texttrackchange", TIME_UPDATE: "timeupdate", VOLUME_CHANGE: "volumechange", WAITING: "waiting" },
        Hc = { playProgress: "timeupdate", loadProgress: "progress", finish: "ended", seek: "seeked" },
        qc = { MARKER_SEEKED: "seeked", MARKER_ENDED: "ended", MARKER_UPSWITCH: "upswitch", MARKER_DOWNSWITCH: "downswitch", MARKER_SWITCH_COMPLETE: "switchcomplete", MARKER_RESIZE: "resize", MARKER_SCANNER_CHANGE: "scannerchange", MARKER_FILE_CHANGE: "filechange", MARKER_STALLED: "stalled" },
        Wc = { MARKER_SEEKED: "#0088cc", MARKER_ENDED: "#503873", MARKER_UPSWITCH: "#5a9e02", MARKER_DOWNSWITCH: "#d93636", MARKER_RESIZE: "#FF8A00", MARKER_SCANNER_CHANGE: "#e9ff00", MARKER_FILE_CHANGE: "#b5d3e2", MARKER_STALLED: "#f44283" },
        zc = { NOTHING: "nothing", BEGINNING: "beginning", EMAIL: "email", VOD: "vod", VIDEOS: "videos", LINK: "link", THREEVIDEOS: "threevideos", PROMOTED: "promoted", SHARE: "share" },
        Gc = function() { return { id: "error", title: "Player error", message: "The player is having trouble. We’ll have it back up and running as soon as possible.", modal: !0, final: !0 } },
        $c = Object.freeze({ __proto__: null, BrowserNotSupported: function() { return { id: "not-supported", title: "Unsupported viewing environment", message: 'Your system is having trouble playing this video. For more information, see our <a href="https://help.vimeo.com/hc/en-us/articles/115015677227-Troubleshoot-player-error-messages" target="_blank" rel="noopener" aria-describedby="new-window">Help Center</a>.', deferred: !0, final: !0 } }, DRMFailure: function() { return { id: "drm-failure", title: "Rights issue", message: "We’re having trouble authorizing playback for this video. ", final: !0 } }, FilesNotPlayable: function() { return { id: "not-supported", title: "Player error", message: "The player is having trouble. We’ll have it back up and running as soon as possible.", deferred: !0, final: !0 } }, MediaSrcNotSupportedError: function() { return { id: "not-supported", final: !1 } }, MediaDecodeError: function() { return { id: "decode", final: !1 } }, MediaNetworkError: function() { return { id: "network", title: "Network error", message: 'A network hiccup interrupted playback. Please <a href="javascript:window.location.reload()" rel="noopener">reload the player</a> and try again.', final: !0 } }, MediaUnknownError: function() { return { id: "unknown", title: "Browser error", message: 'We’re having trouble playing this video file. Please <a href="javascript:window.location.reload()" rel="noopener">reload the player</a> and try again.', final: !0 } }, FileError: function() { return { id: "telecine-file-error", final: !1 } }, DownloadError: function() { return { id: "telecine-download-error", final: !1 } }, MediaUrlExpired: function() { return { id: "media-url-expired", title: "Playback error", message: 'We’re having trouble playing this video. Please <a href="javascript:window.location.reload()" rel="noopener">reload the player</a> and try again.', final: !1 } }, ScannerError: function() { return { id: "scanner-error", final: !1 } }, PlayerError: Gc });

    function Kc() { return void 0 !== window.performance && "function" == typeof window.performance.now ? window.performance.now() : Date.now() }

    function Yc(t) { return Kc() - t }

    function Jc() {
        var t = 0,
            n = null,
            i = 0,
            e = !1;

        function r() { return t / 1e3 }
        return {
            trackBufferStart: function(t, r) { n = Kc(), i++, e = !0, t(r) },
            trackBufferEnd: function(i) {
                var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (e) {
                    var o = Yc(n);
                    t += o, r.buffer_duration = o / 1e3, e = !1, i(r)
                }
            },
            trackVideoExit: function(i) { e && !i && (t += Yc(n)) },
            resetLastBufferTime: function() { n = null },
            getBufferRatio: function(t) { var n = r() / t * 100; return isNaN(n) ? 0 : Math.round(100 * n) / 100 },
            getBufferCount: function() { return i },
            getTotalBufferDuration: r,
            isVideoBuffering: function() { return e }
        }
    }
    var Xc = { VIDEO_BUFFER_END: "video-buffer-end", VIDEO_BUFFER_START: "video-buffer-start", VIDEO_ENDED: "video-ended", VIDEO_EXIT: "video-exit", VIDEO_LOAD_FAILURE: "video-load-failure", VIDEO_MINUTE_WATCHED: "video-minute-watched", VIDEO_PAUSED: "video-paused", VIDEO_PLAYED: "video-played", VIDEO_PLAYBACK_ERROR: "video-playback-error", VIDEO_READY: "video-ready", VIDEO_START_ATTEMPT: "video-start-attempt", VIDEO_START_FAILURE: "video-start-failure", VIDEO_START_TIME: "video-start-time", VIDEO_SEEK: "video-seek", VIDEO_SEEKED: "video-seeked", CHUNK_DOWNLOADED: "chunk_downloaded" };

    function Zc(t) {
        function n(t, n) {
            var i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                e = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "POST";
            return new r((function(r, o) { "POST" === e && navigator.sendBeacon ? r({ status: navigator.sendBeacon(t, n) }) : Ye({ url: t, body: n, method: e, async: i, headers: { "Content-Type": "text/plain; charset=UTF-8" } }).then((function(t) { r({ response: t, status: t.status }) })).catch(o) }))
        }
        return {
            log: function(i) {
                var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                    r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                r && (i.event_time = i.event_time || Kc());
                var o = [i];
                return n(t, JSON.stringify(o), e)
            },
            logRequestPromiseWithUrl: n
        }
    }

    function Qc(t) {
        var n = 0,
            i = 0,
            e = 0,
            r = 0,
            o = !1,
            u = -1,
            a = null,
            s = null,
            c = null,
            f = { satisfied: 0, tolerable: 0, frustrated: 0 },
            l = null;

        function d() {
            var n = t.getBoundingClientRect(),
                i = t.videoWidth,
                e = t.videoHeight;
            if (0 !== i || 0 !== e) {
                var r = "satisfied";
                if (n.width > i && n.height > e && (i / n.width < .4 ? r = "satisfied" : i / n.width < 1 ? r = "tolerable" : i / n.width > 1 && (r = "frustrated")), s) {
                    var o = Yc(s);
                    f[c] += o
                }
                c = r, s = Kc()
            }
        }

        function h() { return o ? 0 : 1 }

        function v() { return -1 === u ? null : u > 8e3 || -1 === u ? 0 : u > 2e3 ? .5 : 1 }

        function p() { return l ? (r = e / Yc(l), n >= 4 || r >= .12 ? 0 : n < 4 && 0 !== n ? r < .12 ? .5 : 0 : 1) : null }

        function m() {
            if (-1 === u) return null;
            switch (d(), Object.keys(f).reduce((function(t, n) { return f[t] > f[n] ? t : n }))) {
                case "satisfied":
                    return 1;
                case "tolerable":
                    return .5;
                case "frustrated":
                    return 0
            }
            return null
        }
        return t.addEventListener("playing", (function() {-1 === u && (a = Kc()) })), t.addEventListener("progress", (function() {-1 === u && (l = Kc(), u = Yc(a)), d() })), { startupTimeScore: v, rebufferScore: p, failureScore: h, videoQualityScore: m, overallScore: function() { return Math.min(h(), v(), p(), m()) }, trackBufferStart: function() {-1 !== u && (n++, i = Kc()) }, trackBufferEnd: function() {-1 !== u && (e += Yc(i)) }, onError: function(t) { t.final && (o = !0) } }
    }

    function tf(t) { var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3; if (t = parseFloat(t), isNaN(t)) return 0; var i = Math.pow(10, n); return Math.round(t * i) / i }

    function nf(t, n) {
        var i, e, r, o, u, a, s, c, f, l, d, h, v = 0;

        function p() {
            i = 0, e = 0, r = 0, o = null, u = 0, a = !1, s = !1, c = null, f = !1, l = new Qc(t), d = new Jc, h = {
                bufferTracker: d,
                videoBufferCheck: function() {
                    setInterval((function() {
                        var n = t.currentTime;
                        s && !f && !t.paused && !h.bufferTracker.isVideoBuffering() && n < r + .125 && h.bufferTracker.trackBufferStart(w), s && !t.paused && h.bufferTracker.isVideoBuffering() && n > r + .125 && (h.bufferTracker.trackBufferEnd(b), h.bufferTracker.resetLastBufferTime()), r = n
                    }), 250)
                },
                addEventData: function(t) { return null },
                playbackSessionTimer: function() {
                    var n = Kc();
                    setInterval((function() {
                        (!t.paused && a || f || h.bufferTracker.isVideoBuffering()) && (u += Yc(n) / 1e3), n = Kc()
                    }), 500)
                }
            }
        }

        function m(t) {
            var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            0 === v && (i = Object.assign(i, h.addEventData(t)), n(t, i))
        }

        function w() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            l.trackBufferStart(), m(Xc.VIDEO_BUFFER_START, t)
        }

        function b() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            l.trackBufferEnd(), m(Xc.VIDEO_BUFFER_END, t)
        }
        return p(), m(Xc.VIDEO_READY),
            function() {
                var n = Math.floor(60 * Math.random());
                setInterval((function() {!t.paused && a && (i++, 0 !== e ? i >= 60 && (i = 0, e++, m(Xc.VIDEO_MINUTE_WATCHED)) : i === n && (i = 0, e++, m(Xc.VIDEO_MINUTE_WATCHED))) }), 1e3)
            }(), window.addEventListener("unload", (function(n) {
                h.bufferTracker.trackVideoExit(t.paused);
                var i = { startup: l.startupTimeScore(), rebuffer: l.rebufferScore(), failure: l.failureScore(), quality: l.videoQualityScore(), overall: l.overallScore() };
                c && m(Xc.VIDEO_EXIT, { vxs: i }, !1)
            }), !1), t.addEventListener("playing", (function() { a = !0, f || s && m(Xc.VIDEO_PLAYED) })), t.addEventListener("timeupdate", (function() {
                if (!s) {
                    var t = { startup_duration: c ? tf(Yc(c) / 1e3, 2) : null };
                    m(Xc.VIDEO_START_TIME, t), s = !0
                }
            })), t.addEventListener("pause", (function() { a = !1, m(Xc.VIDEO_PAUSED) })), t.addEventListener("seeking", (function() { f || (o = Kc(), f = !0, a = !1, m(Xc.VIDEO_SEEK)) })), t.addEventListener("seeked", (function() { f = !1, t.paused || (a = !0), m(Xc.VIDEO_SEEKED, { seek_duration: Yc(o) / 1e3 }), o = null })), t.addEventListener("ended", (function() { m(Xc.VIDEO_ENDED) })), t.addEventListener("waiting", (function() { a = !1 })), t.addEventListener("canplay", (function() { f || h.bufferTracker.isVideoBuffering() && !a && (h.bufferTracker.trackBufferEnd(b), h.bufferTracker.resetLastBufferTime()) })), { globalProperties: function() { return { autoplay: t.autoplay, buffer_count: h.bufferTracker.getBufferCount(), total_buffer_duration: h.bufferTracker.getTotalBufferDuration(), buffer_ratio: h.bufferTracker.getBufferRatio(u), client_time: Kc(), is_buffering: h.bufferTracker.isVideoBuffering(), looping: t.loop, minutes_watched: e, network_state: t.networkState, playback_rate: t.playbackRate, player_width: t.getBoundingClientRect().width, player_height: t.getBoundingClientRect().height, session_playback_duration: tf(u, 2), video_time: t.currentTime, video_height: t.videoHeight, video_width: t.videoWidth, volume: tf(t.volume, 2) } }, logStartRequest: function() { c = Kc(), m(Xc.VIDEO_START_ATTEMPT) }, customizeHooks: function(t) { h = Object.assign(h, t) }, initHooks: function() { h.videoBufferCheck(), h.playbackSessionTimer() }, logBufferStart: w, logBufferEnd: b, setDisplayContext: function(t) { v = t }, handleExternalError: function(t, n) { a = !1, l.onError(n), m(s ? Xc.VIDEO_PLAYBACK_ERROR : s ? Xc.VIDEO_START_FAILURE : Xc.VIDEO_LOAD_FAILURE, t) }, reset: p }
    }
    var ef = z({}, Xc, { ALERT_DISPLAYED: "alert-displayed", ALERT_HIDDEN: "alert-hidden", CAPTIONS_ENABLED: "captions-enabled", CAPTIONS_DISABLED: "captions-disabled", CHROMECAST_CONNECTED: "chromecast-connected", CHROMECAST_DISCONNECTED: "chromecast-disconnected", ERROR_LINK_PRESSED: "error-link-pressed", MEDIASESSION_PLAY: "mediasession-play", MEDIASESSION_PAUSE: "mediasession-pause", MEDIASESSION_SEEK_FORWARD: "mediasession-seekforward", MEDIASESSION_SEEK_BACKWARD: "mediasession-seekbackward", SLATE_DISPLAYED: "slate-displayed", CLICK: "click", VIDEO_DURATION_MISMATCH: "video-duration-mismatch", VIDEO_FULLSCREEN_CHANGE: "video-fullscreen-change", VIDEO_MANIFEST_LOADED: "video-manifest-loaded", VIDEO_MANIFEST_TIMEOUT: "video-manifest-timeout", VIDEO_PLAYBACK_RATE_CHANGED: "video-playback-rate-changed", VIDEO_STREAM_CHANGE: "video-stream-change", VIDEO_SWITCH_BACK_TO_AUTO: "video-switch-back-to-auto", VIDEO_SWITCH_FROM_AUTO: "video-switch-from-auto", DOWNLOAD_TIMEOUT: "video-download-timeout", AD_BUFFERING: "ad-buffering", AD_COMPLETE: "ad-complete", AD_CLICKED: "ad-clicked", AD_ERROR: "ad-error", AD_PAUSED: "ad-paused", AD_RESUMED: "ad-resumed", AD_STARTED: "ad-started", AD_SKIPPED: "ad-skipped", OUTRO_VIDEO_SELECTED: "outro-video-selected", WEBVR_HARDWARE_AVAILABLE: "webvr-hardware-available", ENTER_WEBVR: "enter-webvr", EXIT_WEBVR: "exit-webvr" });

    function rf(t) { return t.config.video.p2p ? "vimeo-live-ecdn" : t.config.request.flags.ott ? "vimeo-ott-vod" : t.config.video.live_event ? "vimeo-live" : t.config.embed.context && -1 !== t.config.embed.context.indexOf("Stock") ? "vimeo-stock-vod" : t.config.video.vod ? "vimeo-ondemand" : "vimeo-vod" }

    function of(t) { return "dev" === t.request.build.js ? "dev" : "3.20.13" }
    var uf, af = new r((function(t) { uf = t }));

    function sf(t, n) { var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1; return af.then((function(e) { return i /= .1, Math.random() <= i && e.captureException(Ec(t), n), e.lastEventId() })) }
    window.addEventListener("unhandledrejection", (function(t) { t.preventDefault(), t.reason && sf(t.reason).catch((function(t) {})) }));
    var cf = {
        setUp: function(t) {
            t.config.request.sentry.enabled && st("module/sentry.js").then((function(n) {
                var i = "dev" === t.config.request.build.js ? "dev" : "production",
                    e = [new n.Integrations.Dedupe, new n.Integrations.ExtraErrorData, new n.Integrations.Breadcrumbs({ console: !1 }), new n.Integrations.GlobalHandlers({ onunhandledrejection: !1 })];
                return n.init({ dsn: t.config.request.sentry.url, release: of(t.config), environment: i, integrations: e, ignoreErrors: ["NotAllowedError", "AbortError", "PlayInterrupted", "Failed to load image"], blacklistUrls: [/^moz-extension/i, /^chrome-extension/i], beforeSend: function(i, e) { var r; if (!t.config.request) return null; if (_s.appleMail) return null; if (yc("ReportingObserver", i.message) && Math.random() > .01) return null; var o = null == (r = e.originalException) ? void 0 : r.error; return yc("Non-Error exception captured", i.message) && o ? (n.withScope((function(t) { t.setExtra("nonErrorException", !0), n.captureException(o) })), null) : (i.tags["document.visibilityState"] = document.visibilityState, t.config.request.sentry.enabled ? i : null) } }), n.configureScope((function(n) {
                    if (n.setTag("session", t.config.request.session), n.setTag("locale", t.config.request.lang), n.setTag("debug_intent", t.config.request.sentry.debug_intent ? 1 : 0), n.setTag("product", rf(t)), n.setTag("backend", t.config.request.build.backend), n.setTag("video_embed_permission", t.config.video.embed_permission), n.setTag("video_privacy", t.config.video.privacy), t.config.user.logged_in && n.setUser({ id: t.config.user.id }), t.config.request.ab_tests)
                        for (var i in t.config.request.ab_tests) { var e = t.config.request.ab_tests[i]; for (var r in n.setTag("".concat(i, "_test"), 1), n.setTag("".concat(i, "_group"), e.group), e.data) n.setTag("".concat(i, "_data_").concat(r), e.data[r]) }
                })), t.config.request.sentry.debug_intent && window.addEventListener("unload", (function() { n.captureMessage("Session debug", { level: "info" }) }), !1), n
            })).then(uf).catch((function(t) {}))
        },
        captureException: sf,
        captureMessage: function(t, n) { return af.then((function(i) { return i.captureMessage(t, n), i.lastEventId() })) },
        captureBreadcrumb: function(t, n) {
            var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "player",
                e = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "info";
            return af.then((function(r) { return r.addBreadcrumb({ message: t, data: n, category: i, level: e }) }))
        }
    };

    function ff(t) {
        var n = t.events,
            i = null,
            e = null,
            o = null,
            u = null,
            a = null,
            s = { video: {}, request: {}, embed: {} };

        function c() { return e && e - 6e4 <= Date.now() }

        function f(t) { var n = Date.now() + 1e3 * t; return a = setTimeout((function() { "onLine" in navigator && !navigator.onLine || u || (u = d().catch(cf.captureException)) }), 1e3 * t - 6e4 - 5e3), n }

        function l(t) {
            var n, o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            clearTimeout(a);
            var u = i;
            if (isNaN(t) && "string" != typeof t) return e = f((i = t).request.expires), r.resolve({ old: u, loaded: i });
            Date.now();
            var c = (s = Xa(s, i)).request.referrer;
            c && (o.referrer = c);
            var l = (null == (n = i) ? void 0 : n.player_url) ? "https://".concat(i.player_url) : "",
                d = cc(t) || l,
                h = fc(d, t, o);
            return Ye(h, { withCredentials: !0, throwHttpErrors: !1 }).json().then((function(t) { return 7 !== (i = t).view && (e = f(i.request.expires), s.request.session && i.video.id === s.video.id && (i.request.session = s.request.session), c && (i.request.referrer = c), s.embed.player_id && (i.embed.player_id = s.embed.player_id), s.embed.on_site && (i.embed.on_site = 1, i.embed.context = s.embed.context)), Date.now(), { old: u, loaded: i } })).catch((function(t) { cf.captureException(t) }))
        }

        function d() {
            var t;
            clearTimeout(a), Date.now();
            var r = null == (t = i) ? void 0 : t.request.referrer,
                o = i.request,
                s = o.signature,
                c = o.session,
                l = o.timestamp,
                d = o.expires,
                h = i.request.ott_chromecast_token,
                v = "https://".concat(i.player_url, "/video/").concat(i.video.id, "/config/request?session=").concat(c, "&signature=").concat(s, "&time=").concat(l, "&expires=").concat(d);
            return h && (v = "".concat(v, "&ott_chromecast_token=").concat(h)), r && (v += "".concat(-1 === v.indexOf("?") ? "?" : "&", "referrer=").concat(encodeURIComponent(r))), Ye(v, { withCredentials: !0, retry: 3 }).json().then((function(t) { return i.request = t, r && (i.request.referrer = r), e = f(i.request.expires), Date.now(), u = null, n.fire(Fc.uf), i.request })).catch((function(t) { var i = { id: "network", title: "Network error", message: 'A network hiccup interrupted playback. Please <a href="javascript:window.location.reload()" rel="noopener">reload the player</a> and try again.', final: !0 }; throw n.fire(Fc.ks, i.id, i), t }))
        }
        return window.addEventListener("online", (function() { c() && (u = d().catch(cf.captureException)) })), n.on(Fc.ks, (function(t) { u || "media-url-expired" !== t || (u = d().catch(cf.captureException)) })), {get isExpired() { return c() }, load: function(t, n) { return l(t, n) }, reload: function() { var t; return (null == (t = i) ? void 0 : t.video.id) ? l(i.video.id) : r.reject(new Error("No config loaded.")) }, toJSON: function() { return i }, get config() { return i }, set config(t) { i = t }, verify: function() { return c() ? (u || (u = d()), u) : r.resolve(i.request) }, get J() { return o }, set J(t) { o = t } }
    }
    var lf = function() { return Tt.Date.now() },
        df = Math.max,
        hf = Math.min;

    function vf(t, n, i) {
        var e, r, o, u, a, s, c = 0,
            f = !1,
            l = !1,
            d = !0;
        if ("function" != typeof t) throw new TypeError("Expected a function");

        function h(n) {
            var i = e,
                o = r;
            return e = r = void 0, c = n, u = t.apply(o, i)
        }

        function v(t) { return c = t, a = setTimeout(m, n), f ? h(t) : u }

        function p(t) { var i = t - s; return void 0 === s || i >= n || i < 0 || l && t - c >= o }

        function m() {
            var t = lf();
            if (p(t)) return w(t);
            a = setTimeout(m, function(t) { var i = n - (t - s); return l ? hf(i, o - (t - c)) : i }(t))
        }

        function w(t) { return a = void 0, d && e ? h(t) : (e = r = void 0, u) }

        function b() {
            var t = lf(),
                i = p(t);
            if (e = arguments, r = this, s = t, i) { if (void 0 === a) return v(s); if (l) return clearTimeout(a), a = setTimeout(m, n), h(s) }
            return void 0 === a && (a = setTimeout(m, n)), u
        }
        return n = bo(n) || 0, jt(i) && (f = !!i.leading, o = (l = "maxWait" in i) ? df(bo(i.maxWait) || 0, n) : o, d = "trailing" in i ? !!i.trailing : d), b.cancel = function() { void 0 !== a && clearTimeout(a), c = 0, e = s = r = a = void 0 }, b.flush = function() { return void 0 === a ? u : w(lf()) }, b
    }

    function pf(t, n) {
        var i = t,
            e = n;
        return i % 320 != 0 && (i = 100 * Math.ceil(t / 100), e = Math.round(i / t * n)), { width: i, height: e }
    }

    function mf(t) {
        var n = t.width,
            i = t.height,
            e = t.baseUrl,
            r = t.crop,
            o = void 0 !== r && r,
            u = t.defaultExtension,
            a = void 0 === u ? ".jpg" : u,
            s = (e = e.replace(/\.[^/.]+$/, "")) + (_s.webp ? ".webp" : "".concat(a)),
            c = {},
            f = parseInt(n, 10),
            l = parseInt(i, 10);
        return 0 !== f && (o ? c.w = f : c.mw = f), 0 !== l && (o ? c.h = l : c.mh = l), _s.devicePixelRatio > 1 && (c.q = 70), pt(s, c)
    }

    function wf(t) {
        return new r((function(n, i) {
            var e = new Image;

            function r() { cf.captureBreadcrumb("Load image: ".concat(t), {}), i(new Error("Failed to load image.")) }
            e.onload = function() { e && e.width > 0 && e.height > 0 ? n(e) : r() }, e.onerror = r, e.src = t
        }))
    }

    function bf(t) { return wf(t).catch((function(n) { return cf.captureException(n, { extra: { imageUrl: t } }), new r((function() {})) })) }
    var gf = { id: "7742C69E", name: "prod" },
        yf = { id: "78077C77", name: "prod" },
        _f = { connected: kc(), disconnected: kc(), playing: kc(), paused: kc(), buffering: kc(), idle: kc(), ended: kc(), sessionStateChanged: kc(), timeUpdated: kc(), mediaLoadedSuccess: kc(), mediaLoadedFailed: kc(), error: kc() },
        kf = function() {
            function t(t) {
                var n = t.player,
                    i = t.textAlert,
                    e = void 0 === i ? null : i;
                this.il = e, this.el = n, this.rl = this.onControlSeek.bind(this), this.ol = this.onChangeVolume.bind(this), this.ul = this.onPlayOrPausePressed.bind(this), this.al = this.onConfigChanged.bind(this), this.sl = this.onReset.bind(this), this.cl = this.onPlayerStateChanged.bind(this), this.fl = this.onCurrentTimeChanged.bind(this), this.ll = this.onIsConnectedChanged.bind(this), this.dl = this.onSessionStateChanged.bind(this), this.hl = this.onIsMediaLoadedChanged.bind(this), this.vl = this.onVolumeLevelChanged.bind(this), this.pl = this.onIsMutedChanged.bind(this), this.ml = this.onCaptionsChanged.bind(this), this.wl = this.onMessageReceived.bind(this), this.bl = this.preventPlayerDefaultEvent.bind(this), this.endVideo = vf(this.gl, 500)
            }
            var n = t.prototype;
            return n.calculateStartTime = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                    n = Number(t) || this.el.backbone.currentTime - 7;
                return n < 0 && (n = 0), this.isEndOfVideo && (n = 0), n
            }, n.loadMedia = function() {
                var t = this,
                    n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    i = n.contentId,
                    e = n.currentTime,
                    o = void 0 === e ? null : e,
                    u = n.duration,
                    a = void 0 === u ? null : u,
                    s = n.token,
                    c = void 0 === s ? null : s,
                    f = n.bypassToken,
                    l = void 0 === f ? null : f,
                    d = n.autoRequest,
                    h = void 0 !== d && d,
                    v = n.autoCaption,
                    p = void 0 === v || v,
                    m = n.autoDisconnect,
                    w = void 0 === m || m,
                    b = n.tracks,
                    g = void 0 === b ? [] : b;
                if (Tf.isLoadingMedia) return r.resolve(!1);
                var y = this.el.config;
                i = i || y.video.id;
                var _, k = y.request,
                    E = k.drm;
                if (null == E ? void 0 : E.fastly) {
                    var T = ia(k, "files.dash.default_cdn");
                    i = ia(k, "files.dash.cdns.".concat(T, ".url")), _ = ia(E, "cdms.widevine.license_url"), g = (k.text_tracks || []).map((function(t) {
                        var n = vt(t.url),
                            i = n.pathname,
                            e = n.search;
                        return z({}, t, { url: "https://player.vimeo.com".concat(i).concat(e) })
                    }))
                }
                var S = this.calculateStartTime(o);
                a = Number(a) || this.duration, c = c || y.user.vimeo_api_client_token, l = l || y.video.bypass_token, this.isEndOfVideo && (this.yl = !1);
                var x = { contentId: i, duration: a, autoRequest: h, tracks: g, currentTime: S, requestCustomData: { token: c, bypassToken: l, tokenType: "jwt" } };
                this.el.config.request.ott_chromecast_token && (x.requestCustomData.ottChromecastToken = this.el.config.request.ott_chromecast_token);
                var M = _ ? this.Yo(_).then((function(t) { return z({}, x, { mediaCustomData: { widevineLicenseServerURL: t } }) })) : r.resolve(x);
                return M.then((function(t) { return Tf.loadMedia(t) })).then((function() { return Tf.fire(_f.mediaLoadedSuccess), t.addRemotePlayerListenersOnPlaying(), t.el.events.fire(Bo), t.el.events.fire(Mc._hideOutro), t._l = !1, p && t.onCaptionsChanged(t.el.backbone.enabledTextTrack), t.el.backbone.paused || t.el.backbone.pause(), !0 })).catch((function(n) { return Tf.fire(_f.mediaLoadedFailed, n), w && t.endCurrentSession(), r.reject(n) }))
            }, n.Yo = function(t) {
                return new r((function(n, i) {
                    var e = new XMLHttpRequest;
                    e.open("GET", t), e.onload = function() { var t = function(t) { return new Error("Error retrieving License Acquisition URL (LA_URL): ".concat(t)) }; if (e.status >= 200 && e.status < 300) try { n(e.response) } catch (n) { i(t(n)) } else i(t(e.status)) }, e.onerror = i, e.send()
                }))
            }, n.init = function() { this.removeInitListeners(), this.addInitListeners() }, n.addInitListeners = function() { this.addSessionStateListener(), this.addIsConnectedListener() }, n.endCurrentSession = function() {
                var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                Tf.castContext && Tf.castContext.endCurrentSession(t)
            }, n.syncBackbone = function() {!this.isOutroRendered && this.el.backbone.paused && (this.el.backbone.currentTime = this.lastCurrentTime, this.syncTime()) }, n.stopBackbone = function() { this.el.events.fire(Mc.Ja) }, n.enableUI = function() {
                if (this.il) {
                    var t, n = null == (t = Tf.currentSessionObj) ? void 0 : t.receiver;
                    n && this.il.show("Casting on " + n.friendlyName)
                }
                this.el.preview.show(), this.el.element.classList.add("is-casting")
            }, n.disableUI = function() { this.il && this.il.hide(), this.isOutroRendered || (this.el.preview.hide(), this.el.backbone.element.classList.remove("invisible")), this.el.element.classList.remove("is-casting") }, n.syncTime = function() {
                var t = this.lastCurrentTime / this.duration;
                Tf.fire(_f.timeUpdated, { currentTime: this.lastCurrentTime, duration: this.duration, percent: t }), t > 0 && this.el.events.fire(bi.TIME_UPDATE, { currentTime: this.lastCurrentTime, duration: this.duration, timeProgress: t })
            }, n.gl = function() { var t = this; return this.yl = !0, this.el.events.fire(Fc.As), this.removeRemotePlayerListenersOnPlaying(), this.isLooped ? this.loadMedia().catch((function() { t.showOutro() })) : this.showOutro(), Tf.fire(_f.ended), !0 }, n.showOutro = function() { this.isOutroRendered || (this._l = !0, this.el.events.fire(Mc.fs)) }, n.dispose = function() { this.endCurrentSession(), this.removeAllRemoteListeners() }, n.onIsMediaLoadedChanged = function(t) {!1 === t.value ? this.isTimeEnded && this.endVideo() : this.el.backbone.paused || this.el.backbone.pause() }, n.onPlayerStateChanged = function(t) {
                switch (null === t.value && this.isTimeEnded && this.endVideo(), t.value) {
                    case Tf.PlayerState.PLAYING:
                        Tf.fire(_f.playing);
                        break;
                    case Tf.PlayerState.PAUSED:
                        Tf.fire(_f.paused);
                        break;
                    case Tf.PlayerState.BUFFERING:
                        Tf.fire(_f.buffering);
                        break;
                    case Tf.PlayerState.IDLE:
                    default:
                        Tf.fire(_f.idle)
                }
            }, n.onVolumeLevelChanged = function(t) { this.el.events.fire(Mc.Ga, t.value, !0) }, n.onIsMutedChanged = function(t) { this.el.events.fire(Mc.Ga, t.value ? 0 : Tf.remotePlayer.volumeLevel, !0) }, n.onCurrentTimeChanged = function(t) { this.isMediaLoaded && (this.ft = t.value), this.syncTime(), this.isTimeEnded && this.endVideo() }, n.onChangeVolume = function(t) { this.volumeLevel = t }, n.onCaptionsChanged = function(t) {
                var n = Tf.currentSession;
                n && n.sendMessage("urn:x-cast:com.vimeo.cast.media", { action: "setActiveByLanguage", value: null == t ? void 0 : t.language })
            }, n.onSessionStateChanged = function(t) {
                switch (t.sessionState) {
                    case Tf.SessionState.SESSION_STARTING:
                        this.addPreventLocalPlayerEvents();
                        break;
                    case Tf.SessionState.SESSION_RESUMED:
                    case Tf.SessionState.SESSION_STARTED:
                        this.loadMedia();
                        break;
                    case Tf.SessionState.SESSION_ENDING:
                    case Tf.SessionState.SESSION_ENDED:
                        break;
                    case Tf.SessionState.SESSION_START_FAILED:
                        this.removePreventLocalPlayerEvents()
                }
                Tf.fire(_f.sessionStateChanged, t.sessionState)
            }, n.onIsConnectedChanged = function(t) { t.value ? this.onConnected() : this.onDisconnected() }, n.onConnected = function() { this.removePreventLocalPlayerEvents(), this.stopBackbone(), this.addLocalPlayerListeners(), this.addRemotePlayerListenersOnIdle(), this.addMessageListener(), this.enableUI(), Tf.fire(_f.connected) }, n.onDisconnected = function() { this.syncBackbone(), this.removeRemotePlayerListeners(), this.removeLocalPlayerListeners(), this.removeMessageListener(), this.disableUI(), Tf.fire(_f.disconnected) }, n.onConfigChanged = function() { this.loadMedia() }, n.onReset = function() { this.loadMedia() }, n.onPlayOrPausePressed = function() { this.isEndOfVideo ? this.loadMedia() : this.isPlayingOrPaused && Tf.remotePlayerController.playOrPause(), this.el.events.halt() }, n.onControlSeek = function(t, n) {!n && t && (t > 1 && (t = 1), n = this.duration * t), this.currentTime = n, this.el.events.halt() }, n.addSessionStateListener = function() { Tf.castContext && Tf.castContext.addEventListener(Tf.CastContextEventType.SESSION_STATE_CHANGED, this.dl) }, n.addMessageListener = function() {
                var t = Tf.currentSession;
                t && t.addMessageListener("urn:x-cast:com.vimeo.cast.media", this.wl)
            }, n.onMessageReceived = function(t, n) { "MEDIA_FINISHED" === (n = JSON.parse(n)).type && ("END_OF_STREAM" === n.endedReason ? this.endVideo() : "ERROR" === n.endedReason && (this.endCurrentSession(), Tf.fire(_f.error, new Error("Chromecast encountered an error and media finished.")))) }, n.addIsConnectedListener = function() { Tf.remotePlayerController && Tf.remotePlayerController.addEventListener(Tf.RemotePlayerEventType.IS_CONNECTED_CHANGED, this.ll) }, n.addPreventLocalPlayerEvents = function() { this.el.events.prependOn([Fc.Bs, Fc.Vs, Fc.Ys, Fc.Js, _i.BUFFER_STARTED, _i.BUFFER_ENDED, Mc.za, Fc.Cs, Fc.ic, Fc.Qc, Mc.Ja], this.bl) }, n.addRemotePlayerListenersOnIdle = function() { this.removeRemotePlayerListenersOnIdle(), this.addIsMediaLoadedChangedListener(), this.addVolumeLevelChangedListener() }, n.addLocalPlayerListeners = function() { this.el.events.prependOn(Fc.Bs, this.ul), this.el.events.prependOn(Fc.Vs, this.ul), this.el.events.prependOn(Fc.Ys, this.bl), this.el.events.prependOn(Fc.Js, this.bl), this.el.events.prependOn(_i.BUFFER_STARTED, this.bl), this.el.events.prependOn(_i.BUFFER_ENDED, this.bl), this.el.events.prependOn(Mc.za, this.rl), this.el.events.prependOn(Fc.Cs, this.ol), this.el.events.on(Fc.ic, this.ml), this.el.events.on(Fc.Qc, this.al), this.el.events.on(Mc.Ja, this.sl) }, n.preventPlayerDefaultEvent = function() { this.el.events.halt() }, n.addCurrentTimeChangedListener = function() { Tf.remotePlayerController && Tf.remotePlayerController.addEventListener(Tf.RemotePlayerEventType.CURRENT_TIME_CHANGED, this.fl) }, n.addIsMediaLoadedChangedListener = function() { Tf.remotePlayerController && Tf.remotePlayerController.addEventListener(Tf.RemotePlayerEventType.IS_MEDIA_LOADED_CHANGED, this.hl) }, n.addPlayerStateChangedListener = function() { Tf.remotePlayerController && Tf.remotePlayerController.addEventListener(Tf.RemotePlayerEventType.PLAYER_STATE_CHANGED, this.cl) }, n.addVolumeLevelChangedListener = function() { Tf.remotePlayerController && (Tf.remotePlayerController.addEventListener(Tf.RemotePlayerEventType.VOLUME_LEVEL_CHANGED, this.vl), Tf.remotePlayerController.addEventListener(Tf.RemotePlayerEventType.IS_MUTED_CHANGED, this.pl)) }, n.addRemotePlayerListenersOnPlaying = function() { this.removeRemotePlayerListenersOnPlaying(), this.addCurrentTimeChangedListener(), this.addPlayerStateChangedListener() }, n.removeRemotePlayerListenersOnIdle = function() { this.removeIsMediaLoadedChangedListener(), this.removeVolumeLevelChangedListener() }, n.removeInitListeners = function() { Tf.castContext && Tf.castContext.removeEventListener(Tf.CastContextEventType.SESSION_STATE_CHANGED, this.dl), Tf.remotePlayerController && Tf.remotePlayerController.removeEventListener(Tf.RemotePlayerEventType.IS_CONNECTED_CHANGED, this.ll) }, n.removeRemotePlayerListenersOnPlaying = function() { this.removeCurrentTimeChangedListener(), this.removePlayerStateChangedListener() }, n.removeMessageListener = function() {
                var t = Tf.currentSession;
                t && t.removeMessageListener("urn:x-cast:com.vimeo.cast.media", this.wl)
            }, n.removeCurrentTimeChangedListener = function() { Tf.remotePlayerController && Tf.remotePlayerController.removeEventListener(Tf.RemotePlayerEventType.CURRENT_TIME_CHANGED, this.fl) }, n.removeIsMediaLoadedChangedListener = function() { Tf.remotePlayerController && Tf.remotePlayerController.removeEventListener(Tf.RemotePlayerEventType.IS_MEDIA_LOADED_CHANGED, this.hl) }, n.removePlayerStateChangedListener = function() { Tf.remotePlayerController && Tf.remotePlayerController.removeEventListener(Tf.RemotePlayerEventType.PLAYER_STATE_CHANGED, this.cl) }, n.removeVolumeLevelChangedListener = function() { Tf.remotePlayerController && (Tf.remotePlayerController.removeEventListener(Tf.RemotePlayerEventType.VOLUME_LEVEL_CHANGED, this.vl), Tf.remotePlayerController.removeEventListener(Tf.RemotePlayerEventType.IS_MUTED_CHANGED, this.pl)) }, n.removePreventLocalPlayerEvents = function() { this.el.events.off([Fc.Bs, Fc.Vs, Fc.Ys, Fc.Js, _i.BUFFER_STARTED, _i.BUFFER_ENDED, Mc.za, Fc.Cs, Fc.ic, Fc.Qc, Mc.Ja], this.bl) }, n.removeLocalPlayerListeners = function() { this.el.events.off(Fc.Bs, this.ul), this.el.events.off(Fc.Vs, this.ul), this.el.events.off(Fc.Ys, this.bl), this.el.events.off(Fc.Js, this.bl), this.el.events.off(_i.BUFFER_STARTED, this.bl), this.el.events.off(_i.BUFFER_ENDED, this.bl), this.el.events.off(Mc.za, this.rl), this.el.events.off(Fc.Cs, this.ol), this.el.events.off(Fc.ic, this.ml), this.el.events.off(Fc.Qc, this.al), this.el.events.off(Mc.Ja, this.sl) }, n.removeRemotePlayerListeners = function() { this.removeRemotePlayerListenersOnPlaying(), this.removeRemotePlayerListenersOnIdle() }, n.removeAllRemoteListeners = function() { this.removeRemotePlayerListeners(), this.removeInitListeners() }, H(t, [{ key: "lastCurrentTime", get: function() { return this.ft || 0 } }, { key: "isTimeEnded", get: function() { return this.lastCurrentTime + .5 >= this.duration } }, { key: "isOutroRendered", get: function() { return this._l || !1 } }, { key: "isLooped", get: function() { return this.el.config.embed.loop } }, { key: "isEndOfVideo", get: function() { return this.yl || !1 } }, { key: "currentTime", set: function(t) { Tf.remotePlayer && Tf.remotePlayerController && (Tf.remotePlayer.currentTime = t, Tf.remotePlayerController.seek(), this.ft = t) } }, { key: "volumeLevel", set: function(t) { Tf.remotePlayer && Tf.remotePlayerController && (Tf.remotePlayer.volumeLevel = t, Tf.remotePlayerController.setVolumeLevel()) } }, { key: "duration", get: function() { return this.el.config.video.duration } }, { key: "isPlayingOrPaused", get: function() { return Tf.remotePlayer ? Tf.remotePlayer.playerState === Tf.PlayerState.PLAYING || Tf.remotePlayer.playerState === Tf.PlayerState.PAUSED : null } }, { key: "isIdle", get: function() { return Tf.remotePlayer ? null === Tf.remotePlayer.playerState || Tf.remotePlayer.playerState === Tf.PlayerState.IDLE : null } }, { key: "isMediaLoaded", get: function() { return !!Tf.remotePlayer && Tf.remotePlayer.isMediaLoaded } }]), t
        }(),
        Ef = { SETUP_DONE: "SETUP_DONE", NOT_SETUP: "NOT_SETUP" },
        Tf = nt(new(function(t) {
            function n() { return t.apply(this, arguments) || this }
            G(n, t);
            var i = n.prototype;
            return i.init = function() {
                var n, i = this,
                    e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    o = e.appId,
                    u = e.chromecastPlayer,
                    a = void 0 === u ? null : u;
                return o || (o = (null == a || null == (n = a.el) ? void 0 : n.config.request.flags.ott) ? yf.id : gf.id), this.chromecastPlayer = a, this.setup().then((function(n) { return n && (t.prototype.init.call(i, { receiverApplicationId: o, autoJoinPolicy: i.AutoJoinPolicy.PAGE_SCOPED }), i.chromecastPlayer && i.chromecastPlayer.init()), n })).catch((function(t) { return i.fire(_f.error, t), r.reject(t) }))
            }, i.dispose = function() { this.chromecastPlayer = null }, H(n, [{
                key: "chromecastPlayer",
                get: function() { return this.kl },
                set: function(t) {
                    if (t && !(t instanceof kf)) throw new SyntaxError("An invalid ChromecastPlayer was specified");
                    this.chromecastPlayer && this.chromecastPlayer.dispose(), this.kl = t
                }
            }]), n
        }(function() {
            function t() { this.version = "1.2.36", this.remotePlayer = null, this.remotePlayerController = null, this.CastContextEventType = null, this.RemotePlayerEventType = null, this.CastState = Ef, this.SessionState = null, this.PlayerState = null, this.currentLoadRequestId = null, this.currentLoadRequestPromise = null }
            var n = t.prototype;
            return n.init = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    n = t.receiverApplicationId,
                    i = void 0 === n ? "" : n,
                    e = t.resumeSavedSession,
                    r = void 0 === e || e,
                    o = t.language,
                    u = void 0 === o ? null : o,
                    a = t.autoJoinPolicy,
                    s = void 0 === a ? "TAB_AND_ORIGIN_SCOPED" : a;
                if (!this.isGCastApiAvailable) throw new Error("CAF is not available. Call setup() first.");
                if ("string" != typeof i || "" === i.trim()) throw new Error("Parameter 'receiverApplicationId' must be valid.");
                switch (s) {
                    case chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED:
                    case chrome.cast.AutoJoinPolicy.ORIGIN_SCOPED:
                    case chrome.cast.AutoJoinPolicy.PAGE_SCOPED:
                        break;
                    default:
                        s = chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED
                }
                return this.CastContextEventType = cast.framework.CastContextEventType, this.RemotePlayerEventType = cast.framework.RemotePlayerEventType, this.CastState = Object.assign(this.CastState, cast.framework.CastState), this.SessionState = cast.framework.SessionState, this.PlayerState = chrome.cast.media.PlayerState, cast.framework.CastContext.getInstance().setOptions({ receiverApplicationId: i.trim(), resumeSavedSession: r, language: u, autoJoinPolicy: s }), this.isInitialized ? this.remotePlayerController : this.initRemotePlayer()
            }, n.initRemotePlayer = function() { if (!this.isGCastApiAvailable) throw new ReferenceError("CAF is not available. Call setup() first."); return this.remotePlayer = new cast.framework.RemotePlayer, this.remotePlayerController = new cast.framework.RemotePlayerController(this.remotePlayer), this.remotePlayerController }, n.setup = function() {
                var t = this,
                    n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    i = n.loadLibrary,
                    e = void 0 === i || i;
                return new r((function(n, i) {
                    if (t.isGCastApiAvailable) return t.AutoJoinPolicy = chrome.cast.AutoJoinPolicy, void n(!0);
                    window.__onGCastApiAvailable = function(e, r) {
                        if (r) {
                            var o = new Error(r);
                            i(o)
                        } else t.AutoJoinPolicy = chrome.cast.AutoJoinPolicy, n(e)
                    };
                    try {
                        if (!1 === e) throw new ReferenceError("Cast is not available. Make sure the library has been loaded.");
                        t.loadLibrary() || n(!1)
                    } catch (t) {
                        var r = new Error(t);
                        i(r)
                    }
                }))
            }, n.loadLibrary = function() { if (this.isGCastApiAvailable) return !0; if (null !== window.chrome && void 0 !== window.chrome && "Google Inc." === window.navigator.vendor) { var t = "//www.gstatic.com/cv/js/sender/v1/cast_sender.js"; if (!(document.querySelectorAll('script[src^="' + t + '"]').length > 0)) { t += "?loadCastFramework=1"; var n = document.createElement("script"); return n.src = t, n.async = !0, n.defer = !0, document.head.appendChild(n), !0 } } return !1 }, n.loadMedia = function(t) {
                var n = this,
                    i = t.contentId,
                    e = t.contentType,
                    o = t.currentTime,
                    u = void 0 === o ? 0 : o,
                    a = t.duration,
                    s = void 0 === a ? 0 : a,
                    c = t.requestCustomData,
                    f = void 0 === c ? null : c,
                    l = t.mediaCustomData,
                    d = void 0 === l ? null : l,
                    h = t.autoRequest,
                    v = void 0 !== h && h,
                    p = t.tracks,
                    m = void 0 === p ? [] : p;
                return i ? this.isSessionEstablished ? this.loadMediaOnSession(this.currentSession, { contentId: i, contentType: e, currentTime: u, duration: s, requestCustomData: f, mediaCustomData: d, tracks: m }) : !0 !== v ? r.reject(new TypeError("Option 'autoRequest' must be true when session is not connected.")) : this.requestSession().then((function(t) { return n.loadMediaOnSession(t, { contentId: i, contentType: e, currentTime: u, duration: s, requestCustomData: f, mediaCustomData: d, tracks: m }) })) : r.reject(new TypeError("Option 'contentId' must be valid."))
            }, n.loadMediaOnSession = function(t, n) {
                var i = this,
                    e = n.contentId,
                    o = n.contentType,
                    u = n.currentTime,
                    a = void 0 === u ? 0 : u,
                    s = n.duration,
                    c = n.requestCustomData,
                    f = void 0 === c ? null : c,
                    l = n.mediaCustomData,
                    d = void 0 === l ? null : l,
                    h = n.tracks,
                    v = void 0 === h ? [] : h;
                if (t && t instanceof cast.framework.CastSession) { var p = t.getSessionState(); if (p !== this.SessionState.SESSION_STARTING && p !== this.SessionState.SESSION_STARTED && p !== this.SessionState.SESSION_RESUMED) return r.reject(new ReferenceError("Session must be established.")); var m = this.createLoadRequest(e, o, a, s, f, d, v); return null !== this.currentLoadRequestId && this.currentLoadRequestId === m.requestId || (this.currentLoadRequestId = m.requestId, this.currentLoadingMediaPromise = t.loadMedia(m).finally((function() { i.currentLoadRequestId = null, i.currentLoadingMediaPromise = null }))), this.currentLoadingMediaPromise }
                return r.reject(new ReferenceError("Session must be cast.framework.CastSession."))
            }, n.requestSession = function() { var t = this; return this.isSessionEstablished ? r.resolve(this.currentSession) : this.castContext ? this.castContext.requestSession().then((function() { return t.currentSession })) : r.reject(new Error("CastContext is not available. Call setup() first.")) }, n.sendMessage = function(t) {
                var n = this,
                    i = t.namespace,
                    e = t.data,
                    o = void 0 === e ? {} : e,
                    u = t.autoRequest,
                    a = void 0 !== u && u;
                return this.isSessionEstablished ? this.sendMessageOnSession(this.currentSession, { namespace: i, data: o }) : !0 !== a ? r.reject(new TypeError("Option 'autoRequest' must be true when session is not connected.")) : this.requestSession().then((function(t) { return n.sendMessageOnSession(t, { namespace: i, data: o }) }))
            }, n.sendMessageOnSession = function(t, n) {
                var i = n.namespace,
                    e = n.data,
                    o = void 0 === e ? {} : e;
                if (t || !(t instanceof cast.framework.CastSession)) { var u = t.getSessionState(); return u !== this.SessionState.SESSION_STARTING && u !== this.SessionState.SESSION_STARTED && u !== this.SessionState.SESSION_RESUMED ? r.reject(new ReferenceError("Session must be established.")) : t.sendMessage(i, o) }
                return r.reject(new ReferenceError("Session must be cast.framework.CastSession."))
            }, n.createCastButton = function(t) {
                var n = document.createElement("button", "google-cast-button");
                return t && t.style && (null === t.style["--disconnected-color"] && (t.style["--disconnected-color"] = "#00ADEF"), null === t.style["--connected-color"] && (t.style["--connected-color"] = "#E5E500")), t && Object.keys(t).forEach((function(i) {
                    if ("string" == typeof t[i]) n.setAttribute(i, t[i]);
                    else if ("style" === i && "object" === V(t[i])) {
                        var e = "";
                        Object.keys(t[i]).forEach((function(n) { e += n + ":" + t[i][n] + ";" })), n.setAttribute(i, e)
                    }
                })), n
            }, n.createLoadRequest = function(t, n, i, e, r, o, u) {
                var a = new chrome.cast.media.MediaInfo(t.toString(), n);
                a.customData = o, a.duration = e;
                var s = { subtitles: chrome.cast.media.TextTrackType.SUBTITLES, captions: chrome.cast.media.TextTrackType.CAPTIONS };
                a.tracks = u.map((function(t) { var n = new chrome.cast.media.Track(t.id, chrome.cast.media.TrackType.TEXT); return n.trackContentId = t.url, n.trackContentType = "text/vtt", n.subtype = s[t.kind], n.name = t.label, n.language = t.lang, n }));
                var c = new chrome.cast.media.LoadRequest(a);
                return c.customData = r, c.currentTime = i || 0, c
            }, H(t, [{ key: "isGCastApiAvailable", get: function() { return !!("undefined" != typeof cast && cast && cast.framework && cast.framework.VERSION) } }, { key: "castState", get: function() { return this.castContext ? this.castContext.getCastState() : this.isGCastApiAvailable ? this.CastState.SETUP_DONE : this.CastState.NOT_SETUP } }, { key: "versionGCastApi", get: function() { return this.isGCastApiAvailable ? cast.framework.VERSION : null } }, { key: "castContext", get: function() { return this.isGCastApiAvailable ? cast.framework.CastContext.getInstance() : null } }, { key: "currentSession", get: function() { return this.castContext ? this.castContext.getCurrentSession() : null } }, { key: "currentSessionObj", get: function() { var t = this.currentSession; return t ? t.getSessionObj() : null } }, { key: "isInitialized", get: function() { return !(!this.isGCastApiAvailable || !this.remotePlayerController) } }, { key: "isSessionEstablished", get: function() { var t = this.currentSessionObj; return !!t && t.status === chrome.cast.SessionStatus.CONNECTED } }, { key: "isCastConnected", get: function() { return this.castState === this.CastState.CONNECTED } }]), t
        }())));

    function Sf(t, n, i) {
        var e = null;

        function o() { return i.getAttribute("data-thumb") }

        function u() { return pf(n.get("ui.player.width") * _s.devicePixelRatio, n.get("ui.player.height") * _s.devicePixelRatio) }

        function a() {
            if (!t.config.video.thumbs.base) return r.resolve();
            var e = !t.config.embed.autoplay || Tf.isCastConnected,
                a = u(),
                s = a.width,
                c = mf({ width: s, height: a.height, baseUrl: t.config.video.thumbs.base });
            i.setAttribute("data-thumb", c), i.setAttribute("data-thumb-width", s);
            var f = bf(c).then((function(t) { return n.dispatch(function(t, n) { return { type: "PREVIEW_SET_SIZE", payload: { width: t, height: n } } }(t.width, t.height)), e && (i.style.backgroundImage = "url(".concat(o(), ")")), t }));
            return e ? r.race([f, new r((function(t) { return setTimeout(t, 2e3) }))]) : r.resolve()
        }
        return e = a(), t.events.on(Fc.dc, (function() { i.classList.contains("vp-preview-invisible") && "beginning" !== t.config.embed.outro || (e = a()) })), n.watch("ui.player.width", vf((function() {
            e = e.then((function() {
                return function() {
                    var t = u().width,
                        n = i.getAttribute("data-thumb-width");
                    return t <= parseInt(n, 10) || 0 === t ? r.resolve() : a()
                }()
            })).catch((function(t) {}))
        }), 150)), n.watch("ui.preview.scaleFactor", (function(t) { i.classList.toggle("vp-preview-cover", t > 1) })), { show: function() { i.style.backgroundImage = "url(".concat(o(), ")"), i.classList.remove("vp-preview-invisible") }, hide: function() { i.classList.add("vp-preview-invisible") }, resetThumbnail: function() { i.setAttribute("data-thumb", ""), i.setAttribute("data-thumb-width", ""), i.style.backgroundImage = "" }, getThumbnail: o, loadThumbnail: a, thumbnailPromise: e }
    }

    function xf(t) { return !0 === t || !1 === t ? Number(t) : "null" === t ? null : t }

    function Mf(t) { var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document.cookie; try { if (n && "" !== n) return n.split(";").reduce((function(n, i) { return 0 === (i = i.trim()).indexOf("".concat(t, "=")) ? decodeURIComponent(i.substr(t.length + 1)) : n }), null) } catch (t) {} return null }
    var Af = ["quality", "volume", "captions"],
        Cf = null;

    function Rf(t) {
        var n = 0 !== t.config.request.urls.proxy.indexOf(window.location.origin),
            i = 0;

        function e(t) {
            var n = null;
            try { n = Mf("player") } catch (t) {}
            if (!n) return null;
            n = n.substring(1, n.length - 1);
            var i = {};
            n.split("&").forEach((function(t) { t = t.split("="), i[t[0]] = xf(decodeURIComponent(t[1] || "")) }));
            var e = [].concat(t),
                r = e.reduce((function(t, n) { if (n in i) { var e = parseFloat(i[n]); return t[n] = isNaN(e) || "quality" === n ? i[n] : e, t } return t[n] = null, t }), {});
            return 1 === e.length ? r[t] : r
        }

        function o(n, i) {
            t.doNotTrackEnabled || (function(n, i) {
                if (Cf) {
                    var e = { method: "set", key: "sync_".concat(n), val: i, session: t.config.request.session };
                    return function(n) { Cf.then((function(i) { var e = oc(t.config.request.urls.proxy); return i.contentWindow.postMessage(n, e), i })).catch((function(n) { cf.captureException(n, { extra: { proxyUrl: t.config.request.urls.proxy } }) })) }(e), void

                    function(n) { t.config.embed.on_site && window.postMessage(n, window.location.origin) }(e)
                }
                try { window.localStorage.setItem("sync_".concat(n), JSON.stringify(i)) } catch (t) {}
            }(n, i = xf(i)), function(n, i) {
                Af.indexOf(n) >= 0 && (t.config.request.cookie[n] = i);
                var r = [];
                Af.indexOf(n) >= 0 && null !== i && r.push("".concat(n, "=").concat(i));
                var o = e(Af);
                for (var u in o) u in o && null !== o[u] && u !== n && r.push("".concat(u, "=").concat(o[u]));
                ! function(t, n, i) {
                    var e = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                        r = e.samesite,
                        o = e.secure,
                        u = new Date;
                    u.setFullYear(u.getFullYear() + 1), u = u.toGMTString(), n = xf(n);
                    var a = "".concat(t, "=").concat(n);
                    a += ";expires=".concat(u), a += ";path=/", a += ";domain=".concat(i), o && (a += ";secure"), r && (a += ";samesite=".concat(r));
                    try { document.cookie = a } catch (t) { return !1 }
                }("player", '"'.concat(r.join("&"), '"'), t.config.request.cookie_domain, { secure: !0, samesite: "none" })
            }(n, i))
        }

        function u(n, e) {
            switch (n) {
                case "sync_quality":
                    t.events.fire(Mc.Za, e, !0);
                    break;
                case "sync_volume":
                    if (t.config.embed.settings.background) break;
                    t.events.fire(Mc.Ga, e, !0);
                    break;
                case "sync_captions":
                    if (null === e) { t.events.fire(Mc.ss, !0); break }
                    t.events.fire(Mc.as, e, !0);
                    break;
                case "sync_login":
                    ! function(n) { i > 4 || (i++, n && !t.config.user.logged_in ? t.events.fire(Fc.Kc) : !n && t.config.user.logged_in && t.events.fire(Fc.Jc)) }(e);
                    break;
                case "sync_active":
                    null !== e && e !== t.config.request.session && t.config.embed.autopause && t.events.fire(Fc.hf)
            }
        }
        return t.events.on(Fc.Rs, (function(t, n) { n || o("quality", t) })), t.events.on(Fc.Cs, (function(n, i) { t.config.request.cookie.volume = xf(n), i || o("volume", n) })), t.events.on(Fc.ic, (function(n, i) {
            if (n) { var e = "".concat(n.language, ".").concat(n.kind); return t.config.request.cookie.captions = xf(e), void(i || o("captions", e)) }
            t.config.request.cookie.captions = null, i || o("captions", null)
        })), t.events.on(Fc.Bs, (function() { t.config.embed.settings.background || (o("active", t.config.request.session), t.events.fire(Fc.df)) })), t.events.on([Fc.Vs, Fc.As], (function() { e("active") === t.config.request.session && o("active", null) })), t.events.on(Fc.Yc, (function() { o("login", !0) })), n && !Cf && (Cf = function(n) {
            return new r((function(i, e) {
                document.createElement("a").href = t.config.request.urls.proxy;
                var r = document.createElement("iframe");
                r.src = n, r.setAttribute("title", "Vimeo LocalStorage Proxy"), r.setAttribute("aria-hidden", "true"), r.setAttribute("hidden", ""), r.onload = function(n) {
                    var i = oc(t.config.request.urls.proxy);
                    r.contentWindow.postMessage({ method: "ping" }, i)
                }, r.onerror = function(t) { e(t) };
                var o = setTimeout((function() { e() }), 1e4);
                window.addEventListener("message", (function t(e) { 0 !== n.indexOf(e.origin) || "ready" !== e.data && "ping" !== e.data || (window.removeEventListener("message", t, !1), clearTimeout(o), i(r)) }), !1), document.body.appendChild(r)
            }))
        }(t.config.request.urls.proxy)), n ? window.addEventListener("message", (function(n) {
            var i = oc(t.config.request.urls.proxy);
            n.origin === i && "object" === V(n.data) && "key" in n.data && "newValue" in n.data ? u(n.data.key, n.data.newValue) : n.origin === window.location.origin && n.data.session !== t.config.request.session && u(n.data.key, n.data.val)
        }), !1) : window.addEventListener("storage", (function(t) { if (0 === t.key.indexOf("sync_") && t.oldValue !== t.newValue) { try { if (window.localStorage.getItem(t.key) !== t.newValue) return } catch (t) {} try { u(t.key, JSON.parse(t.newValue)) } catch (n) { cf.captureException(n, { extra: { key: t.key, oldValue: t.oldValue, newValue: t.newValue } }) } } }), !1), { reset: function() { o("login", !!t.config.user.logged_in) } }
    }
    var Of = function(t) { return { type: "LIVE_SET_START_TIME", payload: t } };

    function If(t) { return t.replace(/(_\w)/g, (function(t) { return t[1].toUpperCase() })) }

    function jf(t) { return function t(n, i) { return Object.keys(i).reduce((function(e, r) { return i[r] && "object" === V(i[r]) ? e[n(r)] = t(n, i[r]) : e[n(r)] = i[r], e }), {}) }(If, t) }
    var Df = function(t) { return { type: "CONFIG_LOAD", payload: z({}, jf(t)) } };

    function Lf() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = arguments.length > 1 ? arguments[1] : void 0,
            i = n.type,
            e = n.payload;
        switch (i) {
            case "CONFIG_LOAD":
                return e.video.liveEvent ? z({}, t, {}, e.video.liveEvent) : null;
            case "LIVE_UPDATE":
                return z({}, t, {}, e);
            case "LIVE_SET_START_TIME":
                return z({}, t, { ingest: z({}, t.ingest, { startTime: e }) });
            default:
                return t
        }
    }
    var Pf = function(t) { var n; return !!(null == (n = t.liveEvent) ? void 0 : n.status) },
        Nf = function(t) { var n; return null == (n = t.liveEvent) ? void 0 : n.status },
        Ff = function(t) { var n, i; return (null == (n = t.liveEvent) || null == (i = n.ingest) ? void 0 : i.scheduledStartTime) || null },
        Uf = function(t) { var n, i; return (null == (n = t.liveEvent) || null == (i = n.ingest) ? void 0 : i.startTime) || null },
        Vf = function(t) { var n; return "pending" === (null == (n = t.liveEvent) ? void 0 : n.status) },
        Bf = function(t) { var n; return "active" === (null == (n = t.liveEvent) ? void 0 : n.status) },
        Hf = function(t) { var n; return "started" === (null == (n = t.liveEvent) ? void 0 : n.status) },
        qf = function(t) { var n; return "ended" === (null == (n = t.liveEvent) ? void 0 : n.status) },
        Wf = function(t) { return Pf(t) && !qf(t) },
        zf = function(t) { var n, i; return "done" === (null == (n = t.liveEvent) || null == (i = n.archive) ? void 0 : i.status) },
        Gf = Object.freeze({ __proto__: null, default: Lf, liveExists: Pf, liveStatus: Nf, liveArchiveStatus: function(t) { var n, i; return null == (n = t.liveEvent) || null == (i = n.archive) ? void 0 : i.status }, dashLiveUrl: function(t) { var n; return null == (n = t.liveEvent) ? void 0 : n.playback.dash_noredirect }, hlsLiveUrl: function(t) { var n; return null == (n = t.liveEvent) ? void 0 : n.playback.hls }, scheduledLiveStartTime: Ff, liveStartTime: Uf, isLivePending: Vf, isLiveActive: Bf, isLiveStarted: Hf, isLiveEnded: qf, liveInProgress: Wf, isLiveArchived: zf });

    function $f(t, n) {
        return function(t) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                i = { feature: n, $deeplink_path: "app.vimeo.com/" + t, $always_deeplink: !0, ref: "player", context: "player" },
                e = "",
                r = [];
            for (var o in i) r.push("".concat(encodeURIComponent(o), "=").concat(encodeURIComponent(i[o])));
            return e = r.join("&"), "https://bnc.lt/a/".concat("key_live_jpj6Duy53e6MhounkriNljdgsBhGbf0d", "?").concat(e)
        }("videos/".concat(t), n)
    }

    function Kf(t, n, i) {
        var e = t.events,
            o = t.backbone,
            u = !t.config.embed.playsinline && (_s.mobileAndroid || _s.iOS && !_s.iPad),
            a = _s.iOS >= 8 && !_s.iPad,
            s = !1,
            c = !1,
            f = !1,
            l = !1,
            d = null,
            h = !1,
            v = !1,
            p = !1,
            m = !1,
            w = !1,
            b = !1;

        function g(t) { o.element.classList.remove("invisible"), y() }

        function y() { var t = o.play(); return b && t.catch(_), t.catch(E).then(T) }

        function _(t) { if (b = !1, k(t)) return e.fire(Mc.$a, !0), o.play().then((function() { return e.fire(Fc.fc) })); throw t }

        function k(t) { return t && ("NotAllowedError" === t.name || "AbortError" === t.name) }

        function E(t) { return e.fire(Fc.Es, t), new r((function() {})) }

        function T() { e.fire(Fc.Ts) }

        function S(t) { try { o.currentTime = t } catch (t) {} }

        function x() { l || h || s && o.paused && y() }

        function M() {
            var n = "none";
            ("metadata" === t.config.request.flags.preload_video || u || _s.iOS >= 8) && (n = "metadata"), "auto" === t.config.request.flags.preload_video && (n = "metadata", "MediaSourceScanner" === o.currentScannerName && (n = "auto")), o.preload = n, e.on(Fc.Hc, (function() { t.config.request && "metadata_on_hover" === t.config.request.flags.preload_video && !f && t.verifyConfig().then((function() { return o.preload = "metadata", !0 })).catch((function(t) {})) }))
        }

        function A() {
            w = !1;
            var n = o.video;
            if (o.loadVideo(t.config), !n)
                if (t.config.embed.texttrack) {
                    var i = t.config.embed.texttrack;
                    o.hasTextTrack(i) && e.fire(Mc.as, i, !0)
                } else e.on(_i.TEXT_TRACKS_AVAILABLE, (function() { r() })), r();

            function r() { null === t.config.request.cookie.captions || "null" === t.config.request.cookie.captions || o.hasTextTrack(t.config.request.cookie.captions) && e.fire(Mc.as, t.config.request.cookie.captions, !0) }
        }

        function C(t, n, i, e) {
            if (c) {
                var r = new XMLHttpRequest;
                r.open("DELETE", "".concat(t, "/plays/").concat(n, "/").concat(i, "?token=").concat(e), !1), r.send(), c = !1
            }
        }

        function R() {
            if (t.config.embed.autoplay) {
                if (n.get(Pf) && !n.get(Hf)) return;
                e.fire(Fc.Bs)
            }
        }
        o.element.classList.add("invisible"), a && o.element.classList.add("hide-webkit-controls"), t.config.video.live_event && i.classList.add("live-background"), t.config.embed.transparent && i.classList.add("transparent"), n.watch(Nf, (function(t) {
                switch (t) {
                    case "started":
                        setTimeout((function() { A(), o.element.classList.remove("invisible"), e.fire(Fc.Bs) }), 12e3)
                }
            })), n.watch(zf, (function() { t.loadVideo(t.config.video.id) })), n.watch("ui.video.scaleFactor", (function(t) { o.element.classList.toggle("vp-telecine-cover", t > 1) })),
            function n() { e.once(Fc.mf, n), bc((o = t.backbone).on, e.fire, [zo, Wo, qo, Yo, $o, Jo, Ko, Bo, Go, Uo, Vo, gi.ACTIVATED, gi.AVAILABLE, gi.DEACTIVATED, gi.UNAVAILABLE, nu.ARCHIVE_DONE, nu.EVENT_ACTIVE, nu.EVENT_ENDED, nu.EVENT_STARTED, nu.STREAM_OFFLINE, nu.STREAM_ONLINE, Ti.MEDIASESSION_PAUSE, Ti.MEDIASESSION_PLAY, Ti.MEDIASESSION_SEEK_BACKWARD, Ti.MEDIASESSION_SEEK_FORWARD, _i.AV_DURATION_MISMATCH, _i.BANDWIDTH, _i.BUFFER_ENDED, _i.BUFFER_OCCUPANCY, _i.BUFFER_STARTED, _i.CHAPTER_CUES_UPDATED, _i.CUE_POINT, _i.CURRENT_FILE_CHANGE, _i.DOWNLOAD_END, _i.DOWNLOAD_TIMEOUT, _i.DRM_AUTH_SUCCESS, _i.DROPPED_FRAMES, _i.MANIFEST_LOADED, _i.MANIFEST_TIMEOUT, _i.QUOTA_EXCEEDED_ERROR, _i.SCANNER_CHANGE, _i.STREAM_BUFFER_START, _i.STREAM_CHANGE, _i.STREAM_CHANGE_START, _i.STREAM_TARGET_CHANGE, _i.TEXT_TRACKS_AVAILABLE, Ei.CAMERA_UPDATE, Ei.MOTION_END, Ei.MOTION_START, Ei.SPATIAL_UNSUPPORTED, Ei.WEBVR_ENTER, Ei.WEBVR_EXIT, Ei.WEBVR_HARDWARE_AVAILABLE, Si.BRAIN_ML_SWITCH_TO_SKYFIRE, Si.BRAIN_ML_MODEL_INPUTS, bi.DURATION_CHANGE, bi.ENDED, bi.ERROR, bi.LOAD_START, bi.LOADED_DATA, bi.LOADED_METADATA, bi.PAUSE, bi.PLAY, bi.PLAYING, bi.PROGRESS, bi.RATE_CHANGE, bi.SEEKED, bi.SEEKING, bi.STALLED, bi.TIME_UPDATE, bi.VOLUME_CHANGE, bi.WAITING]) }(), bc(Tf.on, e.fire, [_f.connected, _f.disconnected]), M(), e.on(bi.LOADED_METADATA, (function(n) { t.config.video.duration = o.duration, t.config.video.video_width = o.videoWidth, t.config.video.video_height = o.videoHeight })), e.on(bi.DURATION_CHANGE, (function(n) { t.config.video.duration = o.duration })), e.on(_i.SCANNER_CHANGE, (function() { M(), setTimeout((function() { e.fire(o.supportsSettingVolume ? Mc.es : Mc.ns), e.fire(o.supportsTextTracks ? Mc.os : Mc.rs) }), 0), cf.captureBreadcrumb("Scanner changed to ".concat(o.currentScannerName), {}, "video") })), e.on([nu.EVENT_ACTIVE, nu.EVENT_STARTED, nu.EVENT_ENDED, nu.ARCHIVE_DONE], (function(i) { Object.assign(t.config.video.live_event, i), n.dispatch(function(t) { return { type: "LIVE_UPDATE", payload: t } }(i)) })), e.on(Fc.Bs, (function() {
                t.displayContext !== t.backbone ? t.displayContext.play() : function() {
                    if ("disable" !== t.config.video.privacy && t.config.video.spatial && _s.iOS && !w || o.element.classList.remove("invisible"), d) return e.fire(Fc.ks, d), void t.preview.show();
                    if (s = !0, h) t.preview.show();
                    else {
                        if (o.off(bi.PLAY, g), u && (v = !0, e.fire(Mc.us)), n.get(Hf) && (b = !0), !f) return t.config.video.spatial && _s.iOS && !w ? (w = !0, e.fire(Mc._showOverlay, "app-redirect", { redirectUrl: t.doNotTrackEnabled ? t.config.video.share_url : $f(t.config.video.id, "player-spatial-redirect"), title: null, buttonText: "Watch in the Vimeo app", ignoreText: null, bottomText: "360 not supported in this browser", newWindow: !t.config.embed.on_site }), void e.once(bi.PLAY, g)) : void y();
                        f && x()
                    }
                }()
            })).on(Fc.Vs, (function() { s = !1, t.displayContext.pause() })).on(Fc.hf, (function() {
                (window.location.search.indexOf("autopause=0") < 0 && !o.paused && !t.config.embed.settings.background || s) && (s = !1, e.fire(Fc.Vs))
            })), e.on(bi.ERROR, (function(n) {
                if (k(n) && !b) {
                    if (t.config.embed.autoplay = 0, o.pause(), t.config.embed.time) return S(t.config.embed.time), void e.fire(Fc.He, o.currentTime);
                    if (0 === o.currentTime) return void e.fire(Mc.Ja);
                    e.fire(Fc.He, o.currentTime)
                }
            })), e.on(bi.PLAY, (function(t) { o.element.classList.remove("invisible") })), e.on(bi.PAUSE, (function(t, n) { l || e.fire(Fc.He, t, n) })), e.on(bi.TIME_UPDATE, (function(t) { t.currentTime })), e.on(bi.ENDED, (function(n) { l || t.config.embed.loop || (v && e.fire(Fc.Us), s = !1, e.fire(Fc.As, n)) })), e.on(_i.DRM_AUTH_SUCCESS, (function() { c = !0 })), e.on(Bo, (function() { f = !0, e.once(bi.TIME_UPDATE, (function() { e.fire(Fc.Ls) })) })), e.on(_i.BUFFER_STARTED, (function() { l || e.fire(Tc.Ha) })), e.on(Si.BRAIN_ML_SWITCH_TO_SKYFIRE, (function() { "ml_brain" in t.config.request.ab_tests && delete t.config.request.ab_tests.ml_brain })),
            function() {
                var n = !1,
                    i = !1;

                function r(o) {
                    if (!n && !o.name.includes("PlayInterrupted"))
                        if ("TextTracksNotSupported" !== o.name) {
                            cf.captureBreadcrumb(o.name, { message: o.message }, "telecine error", "error");
                            var u = t.config.video.live_event ? 1 : .001;
                            if ("MediaUrlBadRequest" === o.name && !i) {
                                i = !0, u = 1;
                                var a = t.config.request,
                                    s = a.files,
                                    c = s.dash.cdns.fastly_skyfire.url,
                                    f = s.hls.cdns.fastly_skyfire.url,
                                    l = s.dash.cdns.akfire_interconnect_quic.url,
                                    h = s.hls.cdns.akfire_interconnect_quic.url,
                                    v = s.progressive.length ? s.progressive[0].url : null,
                                    p = s.progressive.length ? s.progressive[0].id : null,
                                    m = a.file_codecs,
                                    w = t.config.video.file_codecs,
                                    b = t.config.user.logged_in,
                                    g = a.build.js;
                                cf.captureBreadcrumb(o.name, { fastly_dash_url: c, fastly_hls_url: f, akamai_dash_url: l, akamai_hls_url: h, prog_url: v, prog_id: p, file_codecs: m, video_file_codecs: w, logged_in: b, version: g }, "MediaUrlBadRequest config", "error")
                            } - 1 !== o.name.indexOf("Mimir") && (u = 1, cf.captureBreadcrumb(o.name, o, "ABR", "error"));
                            var y = new Error(o.message);
                            y.name = o.name, cf.captureException(y, null, u);
                            var _ = $c[o.name];
                            if ("function" == typeof _) {
                                var k = _();
                                if (k.final && e.off(bi.ERROR, r), d = k.deferred ? k.id : null, "DRMFailure" === o.name) {
                                    var E = t.config.request.dynamic_drm_translation_map,
                                        T = o.message.code;
                                    E && T && E[T] && (k.title = E[T].title, k.message = E[T].msg), cf.captureBreadcrumb("DRM failure", o, "video")
                                }
                                e.fire(Fc.ks, k.id, k)
                            }
                        } else e.fire(Mc.rs)
                }
                window.addEventListener("unload", (function() { n = !0 }), !1), e.on(bi.ERROR, r), e.on("test-error", r)
            }(), e.on(Mc.Xa, (function(n) {
                var i = !!n && (!_s.iOS || _s.iOS >= 10);
                t.config.embed.loop = i, o.loop = i
            })), e.fire(Mc.Xa, t.config.embed.loop), e.on(Fc.Ws, (function(n, i) { t.events.fire(Fc.zs, i), t.events.fire(Mc.za, null, n), f || e.fire(Fc.Bs) })), e.on(Fc.Ys, (function() { h || (s = !o.paused, l = !0, o.pause()) })), e.on(Fc.Js, (function(t) { l = !1, f ? t || x() : e.fire(Fc.Bs) })), e.on(Mc.za, (function(n, i) {
                if (!h) {
                    i || (i = (o.duration || t.config.video.duration) * ac(n, 0, 1));
                    var r = o.duration ? i / o.duration : 0;
                    e.fire(Mc.ws, i, r)
                }
            })), e.on(Mc.ws, (function(t) { S(t) })),
            function() {
                e.on(Mc.Ga, (function(n, i, e) { e && (n += o.volume), n = ac(n, 0, 1), t.displayContext !== o && (t.displayContext.volume = n), o.volume = n, o.muted = 0 === n, t.events.fire(Fc.Cs, n, i) })), e.on(Mc.$a, (function(n) { o.muted = !!n, t.events.fire(Fc.Cs, o.volume, !0) })), e.on(bi.VOLUME_CHANGE, (function() { return e.fire(Fc.Cs, o.volume, !0) }));
                var n = t.config.request.cookie.volume;
                e.fire(Mc.Ga, n, !0), e.fire(Mc.$a, t.config.embed.muted)
            }(), e.on(Mc.Za, (function(t, i) {
                (o.video.currentFile.mime === xc.dash || n.get(Hf)) && (i = !0), o.quality = t, e.fire(Fc.Rs, t, i)
            })),
            function() {
                var t = o.playbackRate;
                e.on(bi.RATE_CHANGE, (function(n) { o.playbackRate !== t && (e.fire(Fc.Ps, o.playbackRate, t), t = o.playbackRate) })), e.on(Mc.bs, (function(t) { o.playbackRate = t })), e.on(Fc._loadVideo, (function() { try { o.playbackRate = 1 } catch (t) {} }))
            }(),
            function() {
                function t() { h = !0, f && !m && (s = s || !o.paused, o.pause(), e.fire(Fc.He, o.currentTime)) }

                function n() { h = !1, s && !m && (v || p || !u || e.fire(Mc.us), x()) }
                e.on(Fc.kc, t), e.on(Fc.Ec, n), e.on(Fc.nc, (function(i, e) { e.isCentered() && (e.isVisible() ? t() : n()) }))
            }(), e.on(Fc.Oc, (function(t) { f && !m && (s = !o.paused, o.pause()) })), e.on(Fc.Dc, (function(t) { m || x() })), e.on(Fc.dc, (function(n, i) { o.element.classList.remove("hide-webkit-controls"), n && (p = !0), n || (f || _s.browser.safari || (o.poster = t.preview.getThumbnail()), v = !0, setTimeout((function() { o.textTracks.forEach((function(t) { "hidden" === t.mode && (t.mode = "showing") })) }), 500)), i || !_s.windowsPhone || _s.browser.edge || e.fire(Mc.cs, !0) })), e.on(Fc.vc, (function(t) { o.poster = "", t || o.pause(), f || o.element.classList.add("invisible"), v = !1, p = !1, a && o.element.classList.add("hide-webkit-controls"), o.textTracks.forEach((function(t) { "showing" === t.mode && (t.mode = "hidden") })) })), e.on(Bo, (function() { o.poster = "" })), e.on(Mc.cs, (function(t) {
                if (t) return o.controls = !0, void i.classList.add("native-controls");
                o.controls = !1, i.classList.remove("native-controls")
            })), e.on(Fc.uf, (function() { A() })), e.on(Fc.Qc, (function() { A(), R() })), e.on(Mc.Ja, (function() { o.unload(), e.fire(Fc.He, o.currentTime), t.preview.show(), o.element.classList.add("invisible"), f = !1, s = !1, d = null })),
            function() {
                var n;
                e.on(Mc.as, (function(i) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    n = e;
                    try { t.config.request.flags.ott && o.videoElement && o.videoElement.setAttribute("crossorigin", "anonymous"), o.enableTextTrack(i) } catch (t) {}
                })).on(Mc.ss, (function() {
                    var i = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    n = i, t.config.request.flags.ott && o.videoElement && o.videoElement.removeAttribute("crossorigin"), o.disableTextTrack()
                })), e.on(zo, (function(t, i) { e.fire(Fc.ic, t, n || i) }))
            }(), e.on(gi.AVAILABLE, (function(n) {
                var i = n.type;
                if (!t.config.request.drm) switch (i) {
                    case "AirPlay":
                        e.fire(Fc.Ff)
                }
            })), e.on(gi.UNAVAILABLE, (function(n) {
                var i = n.type;
                if (!t.config.request.drm) switch (i) {
                    case "AirPlay":
                        e.fire(Fc.Uf)
                }
            })), e.on(gi.ACTIVATED, (function(t) {
                var n = t.type;
                switch (m = !0, n) {
                    case "AirPlay":
                        e.fire(Fc.Vf)
                }
            })), e.on(gi.DEACTIVATED, (function(t) {
                var n = t.type;
                switch (m = !1, n) {
                    case "AirPlay":
                        e.fire(Fc.Bf)
                }
            })), e.on(Fc.Hf, (function() { o.showExternalDisplayPicker("AirPlay") })), e.on(Mc.ds, (function() { o.supportsPresentationMode("picture-in-picture") && (o.presentationMode = "picture-in-picture") })), e.on(Mc.hs, (function() { o.supportsPresentationMode("picture-in-picture") && (o.presentationMode = "inline") })), A(), _s.spatialPlayback ? (e.fire(Mc.vs), e.on([bi.PLAY, bi.SEEKED], (function() { e.fire(Mc.ms) })), e.on(Ei.SPATIAL_UNSUPPORTED, (function() { f ? e.fire(Tc.Wa, h) : e.once(Fc.Ls, (function() { e.fire(Tc.Wa, h) })) }))) : e.once(Fc.Ls, (function() { t.config.video.spatial && e.fire(Tc.qa, h) })), window.addEventListener("beforeunload", (function() {
                var n = t.config.request.drm;
                n && C(n.hoover_url, n.user, n.asset, n.hoover_token)
            }), !1), e.on(Fc._loadVideo, (function() {
                var n = t.config.request && t.config.request.drm;
                n && C(n.hoover_url, n.user, n.asset, n.hoover_token)
            })), t.events.on(Mc.ys, (function() { return o.destroy() })), t.ready().then((function() { return setTimeout((function() { return R() }), 0), t.config.embed.time > 0 && e.fire(Mc.ws, t.config.embed.time, t.config.embed.time / o.duration), null })).catch((function(t) {})), e.fire(Fc.Of)
    }
    var Yf, Jf = 0,
        Xf = 0,
        Zf = {},
        Qf = {};

    function tl(t, n, i) { return "_root" == n ? i : t !== i ? function(t) { return Yf || (Yf = t.matches ? t.matches : t.webkitMatchesSelector ? t.webkitMatchesSelector : t.mozMatchesSelector ? t.mozMatchesSelector : t.msMatchesSelector ? t.msMatchesSelector : t.oMatchesSelector ? t.oMatchesSelector : rl.matchesSelector) }(t).call(t, n) ? t : t.parentNode ? (Jf++, tl(t.parentNode, n, i)) : void 0 : void 0 }

    function nl(t, n, i, e) { Zf[t.id] || (Zf[t.id] = {}), Zf[t.id][n] || (Zf[t.id][n] = {}), Zf[t.id][n][i] || (Zf[t.id][n][i] = []), Zf[t.id][n][i].push(e) }

    function il(t, n, i, e) {
        if (Zf[t.id])
            if (n)
                if (e || i)
                    if (e) {
                        if (Zf[t.id][n][i])
                            for (var r = 0; r < Zf[t.id][n][i].length; r++)
                                if (Zf[t.id][n][i][r] === e) { Zf[t.id][n][i].splice(r, 1); break }
                    } else delete Zf[t.id][n][i];
        else Zf[t.id][n] = {};
        else
            for (var o in Zf[t.id]) Zf[t.id].hasOwnProperty(o) && (Zf[t.id][o] = {})
    }

    function el(t, n, i, e) {
        if (this.element) { t instanceof Array || (t = [t]), i || "function" != typeof n || (i = n, n = "_root"); var r, o = this.id; for (r = 0; r < t.length; r++) e ? il(this, t[r], n, i) : (Zf[o] && Zf[o][t[r]] || rl.addEvent(this, t[r], u(t[r])), nl(this, t[r], n, i)); return this }

        function u(t) {
            return function(n) {
                ! function(t, n, i) {
                    if (Zf[t][i]) {
                        var e, r, o = n.target || n.srcElement,
                            u = {},
                            a = 0,
                            s = 0;
                        for (e in Jf = 0, Zf[t][i]) Zf[t][i].hasOwnProperty(e) && (r = tl(o, e, Qf[t].element)) && rl.matchesEvent(i, Qf[t].element, r, "_root" == e, n) && (Jf++, Zf[t][i][e].match = r, u[Jf] = Zf[t][i][e]);
                        for (n.stopPropagation = function() { n.cancelBubble = !0 }, a = 0; a <= Jf; a++)
                            if (u[a])
                                for (s = 0; s < u[a].length; s++) { if (!1 === u[a][s].call(u[a].match, n)) return void rl.cancel(n); if (n.cancelBubble) return }
                    }
                }(o, n, t)
            }
        }
    }

    function rl(t, n) {
        if (!(this instanceof rl)) {
            for (var i in Qf)
                if (Qf[i].element === t) return Qf[i];
            return Xf++, Qf[Xf] = new rl(t, Xf), Qf[Xf]
        }
        this.element = t, this.id = n
    }
    rl.prototype.on = function(t, n, i) { return el.call(this, t, n, i) }, rl.prototype.off = function(t, n, i) { return el.call(this, t, n, i, !0) }, rl.matchesSelector = function() {}, rl.cancel = function(t) { t.preventDefault(), t.stopPropagation() }, rl.addEvent = function(t, n, i) {
        var e = "blur" == n || "focus" == n;
        t.element.addEventListener(n, i, e)
    }, rl.matchesEvent = function() { return !0 };
    var ol = rl.addEvent,
        ul = void 0 === window.PointerEvent && void 0 !== window.MSPointerEvent,
        al = { pointerdown: "MSPointerDown", pointerup: "MSPointerUp", pointercancel: "MSPointerCancel", pointermove: "MSPointerMove", pointerenter: "MSPointerEnter", pointerleave: "MSPointerLeave", pointerover: "MSPointerOver", pointerout: "MSPointerOut" },
        sl = "onmspointerenter" in document,
        cl = "onmspointerleave" in document;

    function fl(t, n) {
        var i, e, r, o, u, a, s = 0,
            c = {},
            f = new Zc;

        function l() { return Date.now ? Date.now() : (new Date).getTime() }

        function d() { return t.config.video.spatial ? "mono" !== t.config.video.spatial.stereo_mode ? 2 : 1 : 0 }

        function h() { var n = t.backbone.getEffectByName("ThreeSixtyEffect"); return _s.spatialPlayback && n ? n.isStereo() ? 2 : 1 : 0 }

        function v() { i = !1, e = t.backbone ? t.backbone.currentTime : 0, r = 0, o = 0, u = 0, a = !1 }

        function p(n, i, e, r) {
            t.verifyConfig().then((function() {
                var o = i;
                o.signature = t.config.request.signature, o.session = t.config.request.session, o.time = t.config.request.timestamp, o.expires = t.config.request.expires;
                var u = JSON.stringify(o),
                    a = "https://".concat(t.config.player_url).concat(n);
                return null === o.sessionTime && (cf.captureBreadcrumb("sessionTime is null breadcrumbs", { endpoint: n, allParams: o }), cf.captureException("sessionTime is null when making stats request")), f.logRequestPromiseWithUrl(a, u, !e).then((function(o) {
                    if (200 !== o.status && r < 2) {
                        if (410 === o.status) return void t.events.once(Fc.uf, (function() { p(n, i, e, r + 1) }));
                        setTimeout((function() { p(n, i, e, r + 1) }), 1e3)
                    }
                })).catch((function(t) { throw t }))
            })).catch((function(t) {}))
        }

        function m(i, e, o) {
            var u = t.backbone.currentFile || {},
                a = u.id,
                s = void 0 === a ? 0 : a,
                f = u.mime,
                l = void 0 === f ? xc.h264 : f,
                v = u.metadata,
                m = (v = void 0 === v ? {} : v).profile,
                w = void 0 === m ? -1 : m;
            if (l === xc.dash) {
                var b = c,
                    g = b.id;
                s = void 0 === g ? 0 : g;
                var y = b.profile;
                w = void 0 === y ? -1 : y
            }
            t.performDelegateAction(Nc, (function(a) {
                var c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    f = function(n) {
                        var a, f;
                        p(i, z({ referrer: t.config.request.referrer, embed: !t.config.embed.on_site, context: t.config.embed.context, autoplay: c.continuous ? 2 : t.config.embed.autoplay, loop: t.config.embed.loop ? 1 : 0, id: t.config.video.id, vodId: (null == (a = t.config.video.vod) ? void 0 : a.id) ? t.config.video.vod.id : null, vodSaleId: (null == (f = t.config.video.vod) ? void 0 : f.sale_id) ? t.config.video.vod.sale_id : null, sessionTime: dc(r), videoShape: d(), spatialPlayback: h(), userId: t.config.user.id, userAccountType: t.config.user.account_type, userIsMod: t.config.user.mod ? 1 : 0, teamOriginUserId: t.config.user.team_origin_user_id ? t.config.user.team_origin_user_id : null, teamId: t.config.user.team_id ? t.config.user.team_id : null, ownerId: t.config.video.owner.id, ownerAccountType: t.config.video.owner.account_type, privacy: t.config.video.privacy, rating: t.config.video.rating ? t.config.video.rating.id : null, type: "html", videoFileId: Number.isInteger(Number(s)) ? s : "0", delivery: Vc[l], profileId: w, quality: u.metadata ? u.metadata.quality : null, duration: dc(t.config.video.duration), seconds: dc(e) }, n, { playbackRate: t.backbone.playbackRate, build: of(t.config) }), o)
                    },
                    v = n.get(Wf) ? 1 : 0,
                    m = n.get(Uf),
                    b = { isLive: v };
                if (v) {
                    if (!m) return void Ye("https://".concat(t.config.vimeo_url, "/live_event/status?clip_id=").concat(t.config.video.id)).json().then((function(t) { return t && t.ingest && (n.dispatch(Of(t.ingest.start_time)), m = n.get(Uf)), m && (b.liveStartTime = m), f(b), t })).catch((function(t) {}));
                    b.liveStartTime = m
                }
                f(b)
            }))
        }

        function w() {
            var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
            if (t.playLoggingEnabled) {
                var u = l();
                r && o + 1e3 > u || (o = u, r && !t.config.request.flags.partials || i || m("/log/partial", n, e))
            }
        }

        function b(n, i) {
            var e, r;
            i = i || {};
            var o = { referrer: t.config.request.referrer, embed: !t.config.embed.on_site, context: t.config.embed.context, id: t.config.video.id, vodId: (null == (e = t.config.video.vod) ? void 0 : e.id) ? t.config.video.vod.id : null, vodSaleId: (null == (r = t.config.video.vod) ? void 0 : r.sale_id) ? t.config.video.vod.sale_id : null, userId: t.config.user.id, userAccountType: t.config.user.account_type, userIsMod: t.config.user.mod ? 1 : 0, ownerId: t.config.video.owner ? t.config.video.owner.id : 0, duration: dc(t.config.video.duration), seconds: dc(t.backbone.currentTime), playbackRate: t.backbone.playbackRate, build: of(t.config) };
            for (var u in i) i.hasOwnProperty(u) && (o[u] = i[u]);
            p("/log/" + n, o)
        }
        return v(),
            function() {
                t.events.on(bi.TIME_UPDATE, (function(t) {
                    var n = t.currentTime,
                        o = (t.duration, t.timeProgress, t.playbackRate),
                        a = Math.floor(n);
                    !i && u + 1e3 < l() && (n > e && (r += (n - e) / o), e = n), a % 30 == 0 && w(n)
                })), t.events.on(Fc.Ps, (function(n, i) { b("playback_rate_change", { oldPlaybackRate: i }), w(t.backbone.currentTime) })), t.events.on(Bo, (function() {!a && t.playLoggingEnabled && (a = !0, m("/log/play", 0)) })), t.events.on(Fc.He, (function(n) { t.backbone.ended || w(n) })), t.events.on(bi.SEEKED, (function(t) {
                    var n = t.currentTime;
                    s = n, i || w(s)
                })), t.events.on(Fc.Ys, (function() { u = l(), i = !0 })), t.events.on(Fc.Js, (function() { e = t.backbone.currentTime, i = !1, w(s) })), t.events.on(Fc.Hs, (function() { w(t.backbone.currentTime) })), t.events.on(Fc.As, (function() { r += t.config.video.duration - e, w(t.config.video.duration, !1, !1) })), t.events.on(_i.STREAM_CHANGE, (function(t) { c = t }));
                var n = [],
                    o = !1;

                function f() {
                    n.length && t.performDelegateAction(Nc, (function(i) {
                        var e, r;
                        p("/log/spatial", { embed: !t.config.embed.on_site, id: t.config.video.id, context: t.config.embed.context, ownerId: t.config.video.owner ? t.config.video.owner.id : 0, referrer: t.config.request.referrer, vodId: (null == (e = t.config.video.vod) ? void 0 : e.id) ? t.config.video.vod.id : null, vodSaleId: (null == (r = t.config.video.vod) ? void 0 : r.sale_id) ? t.config.video.vod.sale_id : null, userId: t.config.user.id, userAccountType: t.config.user.account_type, userIsMod: t.config.user.mod ? 1 : 0, teamOriginUserId: t.config.user.team_origin_user_id ? t.config.user.team_origin_user_id : null, teamId: t.config.user.team_id ? t.config.user.team_id : null, build: of(t.config), motionLog: JSON.stringify(n) }, !1)
                    }))
                }
                t.events.on(Ei.MOTION_START, (function() {
                    o = !0,
                        function i() {
                            var e = t.backbone.getEffectByName("ThreeSixtyEffect").currentCoordinates,
                                u = Math.round(100 * e.lat) / 100,
                                a = Math.round(100 * e.long) / 100,
                                s = { sessionTime: r, videoTime: t.backbone.currentTime, coordinates: { lat: u, lon: a } };
                            n.push(s), setTimeout((function() { o && i() }), 1e3)
                        }()
                })), t.events.on(Ei.MOTION_END, (function() { o = !1, f() })), t.events.on(Fc._loadVideo, (function() { f(), n = [] })), window.addEventListener("unload", (function() { t.backbone && t.backbone.currentTime > 0 && (w(t.backbone.currentTime, !0, !1), f()) }), !1)
            }(), [{ type: "share_press", event: Fc.wc }, { type: "facebook_press", event: Fc.xc }, { type: "twitter_press", event: Fc.Mc }, { type: "tumblr_press", event: Fc.Ac }, { type: "email_press", event: Fc.Cc }, { type: "embed_press", event: Fc.bc }, { type: "login_success", event: Fc.Yc }, { type: "airplay", event: Fc.Vf }, { type: "vod_press", event: Fc.gc }, { type: "collection_press", event: Fc.yc }, { type: "email_capture_submitted", event: Fc.jc }].forEach((function(n) { t.events.on(n.event, function(t) { return function() { b(t) } }(n.type)) })), t.events.on(Fc.cf, (function(n) {
                var i = { outroType: t.config.embed.outro, ownerAccountType: t.config.video.owner.account_type, playerWidth: t.element.clientWidth, playerHeight: t.element.clientHeight };
                (null == n ? void 0 : n.length) && (i.outroVideos = n.join(",")), b("outro_displayed", i)
            })).on(Fc.lf, (function(n) { b("outro_video_press", { ownerAccountType: t.config.video.owner.account_type, videoId: n }) })).on(Fc._c, (function() { b("outro_follow_press", { add: !t.config.user.following }) })).on(Fc.kf, (function(n) { b("outro_cta_press", { ownerAccountType: t.config.video.owner.account_type, link: n }) })).on(Fc.wf, (function(n) { b("outro_link_press", { ownerAccountType: t.config.video.owner.account_type, link: n }) })).on(Fc._f, (function(n) { b("outro_image_press", { ownerAccountType: t.config.video.owner.account_type, link: n }) })).on(Fc.pc, (function() { b("like_press", { add: !t.config.user.liked }) })).on(Fc.mc, (function() { b("watch_later_press", { add: !t.config.user.watch_later }) })).on(Fc.Oc, (function(t) { 0 === t.indexOf("login-") && b("login_attempt") })).on(Fc.ic, (function(t, n) { n || (t ? b("text_track_change", { textTrackLanguage: t.language, textTrackKind: t.kind }) : b("text_track_change")) })).on(Fc.cc, (function(t) { 1 !== t && 12 !== t || b("badge_press", { badgeId: t }) })).on(Fc.kc, (function(t) { "email-capture" === t && b("email_capture_displayed") })).on(Fc.Ec, (function(t) { "email-capture" === t && b("email_capture_dismissed") })).on(Fc.Tf, (function(n) { b("card_press", { ownerAccountType: t.config.video.owner.account_type, cardId: n, cardType: "link" }) })).on(Fc.Ef, (function(n, i) { t.config.embed.editor || b("card_displayed", { ownerAccountType: t.config.video.owner.account_type, cardId: n, cardType: i.url ? "link" : "text" }) })), t.events.on(Fc.Qc, (function(t) { t && v() })), t.events.fire(Fc.Df), {}
    }

    function ll(t, n) { return null == t || t != t ? n : t }

    function dl() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = arguments.length > 1 ? arguments[1] : void 0;
        switch (n.type) {
            case "CONFIG_LOAD":
                return z({}, t, {}, n.payload);
            default:
                return t
        }
    }
    rl.addEvent = function(t, n, i) { ul && al[n] && (n = al[n]), "transitionend" === n && (ol(t, "webkitTransitionEnd", i), ol(t, "otransitionend", i)), "mouseenter" === n && (n = "mouseover"), "mouseleave" === n && (n = "mouseout"), "MSPointerEnter" !== n || sl || (n = "MSPointerOver"), "MSPointerLeave" !== n || cl || (n = "MSPointerOut"), ol(t, n, i) }, rl.matchesEvent = function(t, n, i, e, r) { return !("mouseenter" === t || "mouseleave" === t || !sl && "MSPointerEnter" === t || !cl && "MSPointerLeave" === t) || function(t, n, i, e) { return !e.relatedTarget || (!i || t === n) && n !== e.relatedTarget && !n.contains(e.relatedTarget) }(n, i, e, r) };
    var hl = { settings: {} };

    function vl() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hl,
            n = arguments.length > 1 ? arguments[1] : void 0,
            i = n.type,
            e = n.payload;
        switch (i) {
            case "CONFIG_LOAD":
                return z({}, t, {}, e.embed);
            default:
                return t
        }
    }
    var pl = Object.freeze({ __proto__: null, default: vl, transparent: function(t) { return t.embed.transparent } });

    function ml() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = arguments.length > 1 ? arguments[1] : void 0,
            i = n.type,
            e = n.payload;
        switch (i) {
            case "CONFIG_LOAD":
                return z({}, t, {}, e.video);
            default:
                return t
        }
    }
    var wl = function(t) { return t.video.height / t.video.width },
        bl = Object.freeze({ __proto__: null, default: ml, ratio: wl });

    function gl() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = arguments.length > 1 ? arguments[1] : void 0;
        switch (n.type) {
            case "CONTAINER_RESIZE":
                return z({}, t, { width: n.payload.width, height: n.payload.height });
            default:
                return t
        }
    }
    var yl = function(t) { return t.ui.container.width },
        _l = function(t) { return t.ui.container.height },
        kl = Object.freeze({ __proto__: null, default: gl, width: yl, height: _l });

    function El() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = arguments.length > 1 ? arguments[1] : void 0;
        switch (n.type) {
            case "PREVIEW_SET_SIZE":
                return z({}, t, { width: n.payload.width, height: n.payload.height });
            default:
                return t
        }
    }
    var Tl = Object.freeze({ __proto__: null, default: El, scaleFactor: function(t) { return uc({ width: t.ui.preview.width, height: t.ui.preview.height, elementWidth: ql(t), elementHeight: Wl(t) }).scaleFactor } });

    function Sl() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = arguments.length > 1 ? arguments[1] : void 0;
        switch (n.type) {
            case "CARDS_SET_SIZE":
                return z({}, t, { size: n.payload });
            default:
                return t
        }
    }
    var xl = function(t) { return t.ui.cards.size > 0 && t.ui.container.width >= 200 && t.ui.container.width < 415 },
        Ml = function(t) { return xl(t) ? 60 : 0 },
        Al = Object.freeze({ __proto__: null, default: Sl, isCarouselVisible: xl, isCardsThumbVisible: function(t) { return t.ui.cards.size > 0 && t.ui.container.width >= 300 }, getCarouselHeight: Ml }),
        Cl = i((function(t, n) {
            function i(t, n) { return t === n }

            function e(t, n, i) {
                if (null === n || null === i || n.length !== i.length) return !1;
                for (var e = n.length, r = 0; r < e; r++)
                    if (!t(n[r], i[r])) return !1;
                return !0
            }

            function r(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i,
                    r = null,
                    o = null;
                return function() { return e(n, r, arguments) || (o = t.apply(null, arguments)), r = arguments, o }
            }

            function o(t) { var n = Array.isArray(t[0]) ? t[0] : t; if (!n.every((function(t) { return "function" == typeof t }))) { var i = n.map((function(t) { return typeof t })).join(", "); throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: [" + i + "]") } return n }

            function u(t) {
                for (var n = arguments.length, i = Array(n > 1 ? n - 1 : 0), e = 1; e < n; e++) i[e - 1] = arguments[e];
                return function() {
                    for (var n = arguments.length, e = Array(n), u = 0; u < n; u++) e[u] = arguments[u];
                    var a = 0,
                        s = e.pop(),
                        c = o(e),
                        f = t.apply(void 0, [function() { return a++, s.apply(null, arguments) }].concat(i)),
                        l = r((function() { for (var t = [], n = c.length, i = 0; i < n; i++) t.push(c[i].apply(null, arguments)); return f.apply(null, t) }));
                    return l.resultFunc = s, l.recomputations = function() { return a }, l.resetRecomputations = function() { return a = 0 }, l
                }
            }
            n.El = !0, n.defaultMemoize = r, n.createSelectorCreator = u, n.createStructuredSelector = function(t) { var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a; if ("object" != typeof t) throw new Error("createStructuredSelector expects first argument to be an object where each property is a selector, instead received a " + typeof t); var i = Object.keys(t); return n(i.map((function(n) { return t[n] })), (function() { for (var t = arguments.length, n = Array(t), e = 0; e < t; e++) n[e] = arguments[e]; return n.reduce((function(t, n, e) { return t[i[e]] = n, t }), {}) })) };
            var a = n.createSelector = u(r)
        }));
    ! function(t) { t && t.El && Object.prototype.hasOwnProperty.call(t, "default") && t.default }(Cl), Cl.defaultMemoize, Cl.createSelectorCreator, Cl.createStructuredSelector;
    var Rl = Cl.createSelector,
        Ol = function(t) { return Ml(t) },
        Il = function(t) { return Math.min((_l(t) - Ol(t)) / wl(t), yl(t)) },
        jl = function(t) { return Math.min(yl(t) * wl(t) + Ol(t), _l(t)) },
        Dl = function(t) { return uc({ width: Il(t), height: jl(t), elementWidth: yl(t), elementHeight: _l(t) }).scaleFactor },
        Ll = function(t) { return Dl(t) > 1 },
        Pl = function(t) { return t.embed.transparent && !Ll(t) ? Il(t) : yl(t) },
        Nl = function(t) { return t.embed.transparent && !Ll(t) ? jl(t) : _l(t) },
        Fl = function(t) { return t.embed.transparent && !Ll(t) ? "contain" : "100% 100%" },
        Ul = Rl(Pl, Nl, (function(t, n) { return { width: t, height: n } })),
        Vl = Rl(wl, Fl, Ol, (function(t, n, i) { return { ratio: t, size: n, bottom: i } })),
        Bl = Object.freeze({ __proto__: null, bottom: Ol, scaleFactor: Dl, width: Pl, height: Nl, size: Fl, boundingRect: Ul, settings: Vl }),
        Hl = { xxs: 0, xs: 390, sm: 600, md: 960, lg: 1280, xl: 1600, xxl: 1920 },
        ql = function(t) { return Pl(t) },
        Wl = function(t) { return Nl(t) - Ol(t) },
        zl = Rl(ql, Wl, (function(t, n) { return { width: t, height: n } })),
        Gl = function(t) { return Wl(t) > ql(t) },
        $l = function(t) {
            var n = ql(t),
                i = Wl(t);
            if (Gl(t)) return n < 225;
            var e = Eu(t.embed.settings.customLogo) && n < 300 || i < 169,
                r = !Eu(t.embed.settings.customLogo) && (n < 338 || i < 190);
            return e || r
        },
        Kl = function(t) {
            var n = ql(t);
            if (Gl(t)) return n < 300;
            var i = Eu(t.embed.settings.customLogo) && n <= 375,
                e = !Eu(t.embed.settings.customLogo) && n <= 450;
            return i || e
        },
        Yl = function(t) { var n = ql(t); return n >= Hl.xxs && n < Hl.xs },
        Jl = function(t) { var n = ql(t); return n >= Hl.xs && n < Hl.sm },
        Xl = function(t) { var n = ql(t); return n >= Hl.sm && n < Hl.md },
        Zl = function(t) { var n = ql(t); return n >= Hl.md && n < Hl.lg },
        Ql = function(t) { var n = ql(t); return n >= Hl.lg && n < Hl.xl },
        td = function(t) { var n = ql(t); return n >= Hl.xl && n < Hl.xxl },
        nd = function(t) { return ql(t) >= Hl.xxl },
        id = Object.freeze({ __proto__: null, breakpoints: Hl, width: ql, height: Wl, boundingRect: zl, isTinyMode: $l, isMiniMode: Kl, mode: function(t) { return $l(t) ? "tiny" : Kl(t) ? "mini" : "normal" }, xxs: Yl, xs: Jl, sm: Xl, md: Zl, lg: Ql, xl: td, xxl: nd, breakpoint: function(t) { var n = { xxs: Yl, xs: Jl, sm: Xl, md: Zl, lg: Ql, xl: td, xxl: nd }; return Object.keys(Hl).find((function(i) { return n[i](t) })) } }),
        ed = Object.freeze({ __proto__: null, scaleFactor: function(t) { return uc({ width: t.video.width, height: t.video.height, elementWidth: ql(t), elementHeight: Wl(t) }).scaleFactor } }),
        rd = Object.freeze({ __proto__: null, size: function(t) { return Math.max(10, Math.round(.045 * Wl(t))) } }),
        od = Object.freeze({ __proto__: null, isLinkTitleVisible: function(t) { var n = t.ui; return n.container.width >= 360 && n.container.height >= 203 || n.container.width >= 415 }, isLinkDescriptionVisible: function(t) { var n = t.ui; return n.container.width >= 360 && n.container.height >= 340 || n.container.width >= 415 && n.container.height >= 234 } }),
        ud = Object.freeze({ __proto__: null, isEmailCaptureVisible: function(t) { var n = t.ui; return n.container.width >= 300 && n.container.height >= 169 } }),
        ad = Object.freeze({ __proto__: null, isPrefsMenuCentered: function(t) { return _s.touch && ql(t) < 415 } });

    function sd() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = arguments.length > 1 ? arguments[1] : void 0;
        return { container: gl(t.container, n), preview: El(t.preview, n), cards: Sl(t.cards, n) }
    }
    var cd = Object.freeze({ __proto__: null, default: sd, container: kl, layout: Bl, player: id, preview: Tl, video: ed, cards: Al, outro: od, overlay: ud, controlbar: ad, captions: rd });

    function fd() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = arguments.length > 1 ? arguments[1] : void 0,
            i = z({}, dl(t, n), { embed: vl(t.embed, n), video: ml(t.video, n), liveEvent: Lf(t.liveEvent, n) });
        return z({}, i, { ui: sd(t.ui, n, i) })
    }
    var ld = Object.freeze({ __proto__: null, default: fd, embed: pl, video: bl, liveEvent: Gf, ui: cd });

    function dd(t, n, i) {
        var e = !1,
            r = !1;

        function o(t) { i.style.fontSize = "".concat(t, "px") }

        function u() { i.classList.add("hidden"), i.setAttribute("hidden", "") }

        function a() { "picture-in-picture" !== t.backbone.presentationMode && (t.config.embed.settings.background || (i.classList.remove("hidden"), i.removeAttribute("hidden"))) }

        function s() {
            for (var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []; i.firstChild;) i.removeChild(i.firstChild);
            if (t.length) {
                var n = document.createDocumentFragment();
                t.forEach((function(t) {
                    var i = document.createElement("span"),
                        e = t.html;
                    i.innerHTML = e, n.appendChild(i)
                })), i.appendChild(n)
            }
        }
        return t.events.on(Wo, (function(t) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
            if (s(n), n.length) return e ? void a() : void(r = !0);
            u()
        })).on(Fc.ic, (function(t) {
            if (t) return i.setAttribute("lang", t.language), void i.setAttribute("dir", t.rtl ? "rtl" : "ltr");
            i.removeAttribute("dir"), i.removeAttribute("lang")
        })).on(Bo, (function() { e = !0, r && (r = !1, a()) })).on(Yo, (function() { u() })).on(Jo, (function() { a() })).on(Mc.Ja, (function() { e = !1, u() })), n.watch("ui.captions.size", o), o(n.get("ui.captions.size")), t.events.on(Fc.Qs, (function(t) { t ? i.classList.add("with-controls") : i.classList.remove("with-controls") })), t.events.on(Fc.kc, (function() { i.classList.add("invisible") })).on(Fc.Ec, (function() { i.classList.remove("invisible") })), t.events.on(Fc.As, (function() { "nothing" !== t.config.embed.outro && i.classList.add("invisible") })).on([bi.PLAY, Fc.Ys], (function() { i.classList.remove("invisible") })), {}
    }
    var hd = i((function(t) {
        ! function() {
            var n = { templates: {}, render: function(t, i) { return n.templates[t] ? n.templates[t].call(n, i || {}) : "" }, map: { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;", "/": "&#x2F;" }, escape: function(t) { return null == t ? "" : String(t).replace(/[&<>"'\\/]/g, (function(t) { return n.map[t] })) }, helpers: {} };
            n.templates.adcountdown = function(t) { return '<div class="vp-ads-tag hidden"><span class="vp-ads-countdown"></span></div>' }, n.templates.stream_studder = function(t) { var n = "<h3> "; return (n += this.render("icon_warning") || "") + ' <span>Having issues? <button type="button" class="vp-alert-button-link button-link" aria-label="Switch to auto" data-alert-autofocus data-close data-context="suggestion">Switch to Auto</button> for smoother streaming.</span></h3>' }, n.templates.warning_alert = function(t) { var n = "<h3> "; return (n += this.render("icon_warning") || "") + " <span>" + t.strings.text + "<span></h3>" }, n.templates.badge = function(t) { var n = ""; return t.badge && (t.badge.link && (n += '<a href="' + t.badge.link + '"', t.targetBlank && (n += ' target="_blank" rel="noopener"'), n += ' aria-describedby="new-window">'), n += ' <img src="' + t.badge.img + '"', t.badge.margin && (n += ' style="margin:' + t.badge.margin + '"'), n += ' width="' + t.badge.width + '" height="' + t.badge.height + '" alt="' + t.badge.name + ' Badge"> ', t.badge.link && (n += "</a>"), n += ""), n + "" }, n.templates.buffer_pattern = function(t) { return '<pattern id="' + t.id + '" patternUnits="userSpaceOnUse" x="0" y="0" width="10" height="10" viewBox="0 0 10 10"><line x1="5" y1="-1" x2="-5" y2="10" stroke-width="2" stroke="#666" stroke-linecap="butt" /><line x1="10" y1="-1" x2="0" y2="10" stroke-width="2" stroke="#666" stroke-linecap="butt" /><line x1="15" y1="-1" x2="5" y2="10" stroke-width="2" stroke="#666" stroke-linecap="butt" /></pattern>' }, n.templates.card = function(t) { var n = '<div class="card'; return t.className && (n += " " + t.className), t.teaser && (n += " card-hasDetail"), n += '"> ', t.url && (n += '<a class="card-link" href="', n += this.escape(t.url) || "", n += '" target="_blank" rel="noopener" aria-describedby="new-window">'), n += ' <div class="card-inner"> ', t.image && (n += ' <div class="card-imageWrap js-cardImageWrap"><img class="card-image" src="' + t.image + '" alt=""></div> '), n += ' <div class="card-body"><h3 class="card-text card-text--title"><span>', n += this.escape(t.headline) || "", n += "</span> ", t.url && (n += this.render("icon_card_arrow") || ""), n += " </h3> ", t.teaser && (n += ' <p class="card-text card-text--detail"> ', n += this.escape(t.teaser) || "", n += " </p> "), n += " </div></div> ", t.url && (n += "</a>"), n + "</div>" }, n.templates.chapter_marker = function(t) { var n = '<div class="chapter-marker js-chapter-marker" data-time="' + t.chapter.startTime + '" style="left:' + t.chapter.startTime / t.duration * 100 + '%;"><div class="chapter-title-wrapper"><div class="chapter-title"><div class="js-chapter-content chapter-title-content-wrapper"><span class="chapter-number">' + t.index + "</span><span> "; return (n += this.escape(t.chapter.text) || "") + " </span></div></div></div></div>" }, n.templates.chapters = function(t) { for (var n = "", i = 0; i < t.chapters.length; i++) n += this.render("chapter_marker", { chapter: t.chapters[i], index: i + 1, duration: t.duration }) || "", n += ""; return n + "" }, n.templates.compass = function(t) { var n = '<svg viewBox="0 0 36 36"> '; return 1 == t.version ? n += ' <circle class="compass-background" r="18" cx="18" cy="18"></circle><path class="compass-slice" transform="rotate(-45, 18, 18)" d="M0,0 m18,18 l12,0 A12,12 0 0,0 18,6 z"/><circle fill="none" class="compass-ring" stoke-width="3" r="14.5" cx="18" cy="18"></circle><polygon class="compass-dimple" points="16,3.5 18,1 20,3.5"/> ' : n += ' <circle class="compass-background" r="18" cx="18" cy="18"></circle><path class="compass-slice" transform="rotate(-30, 18, 18)" d="M0,0 m18,18 l13,0 A13,13 0 0,0 11.500000000000004,6.741669750802297 z"/><circle class="compass-centercircle" r="3" cx="18" cy="18"></circle><path class="compass-line" stroke-linecap="round" d="M0,18 L36,18 z" /> ', n + "</svg>" }, n.templates.controlbar_trailer = function(t) { var n = '<button type="button" class="play trailer rounded-box"><div><span class="play-icon">'; return n += this.render("icon_play") || "", n += "</span><p>" + t.text + "</p></div></button>", t.vimeoLogo.show && (n += ' <div class="logo"> ', t.vimeoLogo.showLink && (n += ' <a href="' + t.vimeoLogo.url + '"', t.targetBlank && (n += ' target="_blank" rel="noopener"'), n += ' aria-label="' + t.strings.watchOnVimeo + '" aria-describedby="new-window" data-clip-link> '), n += this.render("logo") || "", t.vimeoLogo.showLink && (n += " </a> "), n += " </div>"), n += "", t.customLogo && (n += ' <div class="custom-logo', t.customLogo.sticky && (n += " sticky"), n += '" style="width:' + t.customLogo.width + "px;height:" + t.customLogo.height + 'px"> ', t.customLogo.showLink && (n += '<a href="', n += this.escape(t.customLogo.url) || "", n += '" target="_blank" rel="noopener" aria-describedby="new-window">'), n += ' <img src="' + t.customLogo.img + '" alt=""> ', t.customLogo.showLink && (n += "</a>"), n += " </div>"), n + "" }, n.templates.controlbar = function(t) { var n = '<button type="button" class="play rounded-box state-' + t.playState + '"><div class="tiny-bars"><svg width="100%" height="100%" viewBox="0 0 65 40" focusable="false"><defs><clipPath id="rounded-border"><rect height="100%" width="100%" x="0" y="0" rx="5"/></clipPath> '; return n += this.render("buffer_pattern", { id: "tiny-buffer" }) || "", n += ' </defs><g clip-path="url(#rounded-border)"><rect class="buffer hidden" height="3" width="110%" x="0" y="37" fill="url(#tiny-buffer)"/><rect class="loaded" height="3" width="0" x="0" y="37" fill="#666"/><rect class="played fill" height="3" width="0" x="0" y="37"/></g></svg></div><div class="play-icon">' + t.playIcon + '</div><div class="pause-icon">' + t.pauseIcon + '</div><div class="replay-icon">' + t.replayIcon + '</div></button><div class="play-bar rounded-box" role="toolbar"> ', n += this.render("live_status") || "", n += this.render("live_viewer_count") || "", n += ' <div class="vp-progress"><div class="focus-target" role="slider" aria-label="Progress Bar" aria-valuemin="0" aria-valuemax="' + t.rawDuration + '" aria-valuenow="0" tabindex="0"></div><div class="loaded', t.rawDuration < 60 && (n += " short-video"), n += '"></div><div class="played"></div><div class="cuepoints"></div><div class="chapters"></div><div class="thumb-preview invisible hidden" role="presentation" aria-hidden="true"><div class="thumb"></div></div><div class="ghost-timecode invisible hidden" role="presentation" aria-hidden="true"><div class="box">00:00</div></div><div class="timecode" role="presentation" aria-hidden="true"><div class="box">' + t.duration + "</div></div></div> ", t.volume && (n += ' <div class="volume" role="slider" title="' + t.strings.volume + '" aria-valuemin="0" aria-valuemax="1" tabindex="0"><div></div><div></div><div></div><div></div><div></div></div> '), t.castButton && (n += ' <google-cast-launcher class="vp-cast-button" title="' + t.strings.chromecast + '" role="button" tabindex="0"></google-cast-launcher> '), t.ccButton && (n += ' <button type="button" class="toggle cc ' + (t.ccOn ? "on" : "off") + '" aria-haspopup="true"> ' + t.captionsIcon + " </button> "), t.prefsButton && (n += ' <button type="button" class="vp-prefs js-prefs" aria-haspopup="true"> ' + t.settingsIcon + " </button> "), t.chapters && (n += ' <button type="button" class="vp-chapter-button js-chapter-button" aria-haspopup="true"> ' + t.chaptersIcon + " </button> "), t.airplayButton && (n += ' <button type="button" class="toggle airplay off hidden" title="' + t.strings.airPlay + '" data-title-off="' + t.strings.airPlay + '" data-title-on="' + t.strings.airPlayOff + '" hidden> ', n += this.render("icon_airplay") || "", n += " </button> "), t.stereoscopicButton && (n += ' <button type="button" class="toggle stereoscopic off" title="' + t.strings.stereoscopic + '" data-title-off="' + t.strings.stereoscopic + '" data-title-on="' + t.strings.stereoscopicOff + '"> ', n += this.render("icon_stereoscopic") || "", n += " </button> "), n += ' <button type="button" class="pip hidden enter" title="' + t.strings.pipEnter + '" data-title-enter="' + t.strings.pipEnter + '" data-title-return="' + t.strings.pipReturn + '" hidden> ', n += this.render("icon_pip") || "", n += ' </button><button type="button" class="fullscreen', t.fullscreenButton || (n += " only-in-fullscreen"), n += '"><div class="fullscreen-icon">' + t.fullscreenIcon + '</div><div class="unfullscreen-icon">' + t.unfullscreenIcon + "</div></button> ", t.vimeoLogo.show && (n += ' <div class="logo"> ', t.vimeoLogo.showLink && (n += ' <a href="' + t.vimeoLogo.url + '"', t.targetBlank && (n += ' target="_blank" rel="noopener"'), n += ' class="vp-logo-link" aria-label="' + t.strings.watchOnVimeo + '" aria-describedby="new-window" data-clip-link> '), n += this.render("logo") || "", t.vimeoLogo.showLink && (n += " </a> "), n += " </div> "), n += "</div> ", t.customLogo && (n += ' <div class="custom-logo', t.customLogo.sticky && (n += " sticky"), n += '" style="max-width:' + t.customLogo.width + "px;height:" + t.customLogo.height + 'px"> ', t.customLogo.showLink && (n += '<a href="', n += this.escape(t.customLogo.url || "") || "", n += '" target="_blank" rel="noopener" aria-describedby="new-window">'), n += ' <img src="' + t.customLogo.img + '" alt=""> ', t.customLogo.showLink && (n += "</a>"), n += " </div>"), n + "" }, n.templates.debug_panel = function(t) { var n = "<div class='vp-stats-debug-values'> "; return n += this.render("debug_values", t) || "", n += "</div>", t.hideCloseButton || (n += '<button type="button" class="vp-stats-debug-close" aria-label="Close stats debug panel">', n += this.render("icon_close") || "", n += "</button>"), n += '<input type="text" class="vp-stats-debug-code">', t.isCopyDisabled || (n += '<button type="button" class="vp-copy-debug"><span class="vp-copy-debug-label">Copy Debug Payload</span></button>'), n += "", t.isDNTEnabled && (n += "No Debug Key available as Do Not Track is enabled."), n + "" }, n.templates.debug_values = function(t) { var n = ""; return t.clipId && (n += "<p><span>Clip ID:</span><b>" + t.clipId + "</b></p>"), n += "", t.delivery && (n += "<p><span>Delivery:</span><b>" + t.delivery + "</b></p>"), n += "", t.codec && (n += "<p><span>Codec:</span><b>" + t.codec + "</b></p>"), n += "", t.resolution && (n += "<p><span>Playing:</span><b>" + t.resolution + "</b></p>"), n += "", t.embedSize && (n += "<p><span>Embed size:</span><b>" + t.embedSize + "</b></p>"), n += "", t.isDash && (n += "<p><span>Separate AV:</span><b>" + t.separateAudioVideo + "</b></p>"), n += "", (t.isDash || t.isLive) && (n += "<p><span>Dropped frames:</span><b>" + t.droppedFrames + " / " + t.totalFrames + " - " + t.droppedFramesPercent + "</b></p>"), n += "", t.vrHeadsetName && (n += "<p><span>VR Hardware:</span><b>" + t.vrHeadsetName + "</b></p>"), n += "", t.isLive && (n += "<p><span>Live Latency:</span><b>" + t.liveLatency + "</b></p>"), n += "", t.isLive && t.liveSessionID && (n += "<p><span>Live Session ID:</span><b>" + t.liveSessionID + "</b></p>"), n += "", t.p2pSources && (n += "<p><span>P2P sources:</span><b>" + t.p2pSources + " - " + t.p2pOffload + "</b></p>"), n += "<p><span>Playhead / buffer:</span><b>" + t.currentTime + " / " + t.bufferEnd + " / " + t.bufferAhead + "</b></p>", (t.isDash || t.isLive) && (n += "<p><span>Bandwidth:</span><b>" + t.bandwidthKbps + '</b><div class="vp-stats-debug-bandwidth-minmax"> (<b class="vp-stats-debug-bandwidth-min">' + t.bandwidthMinKbps + '</b><b class="vp-stats-debug-bandwidth-max">' + t.bandwidthMaxKbps + '</b>) </div></p><div class="vp-stats-debug-time-series"> ' + t.bandwidthSeriesSvg + "</div>"), n += "", t.sessionId && t.showSessionId && (n += '<p><span>Debug Key:</span><br><b class="vp-stats-debug-session-id">' + t.sessionId + "</b></p>"), n + "" }, n.templates.icon_airplay = function(t) { return '<svg class="airplay-icon" viewBox="0 0 44 36" focusable="false"><polygon class="fill" points="0,0 44,0 44,27 34.5,27 31,23 40,23 40,4 4,4 4,23 13,23 9.5,27 0,27"/><polygon class="fill" points="7,36 22,18 37,36"/></svg>' }, n.templates.icon_back = function(t) { return '<svg class="icon-back" viewBox="0 0 64 64" preserveAspectRatio="xMidYMid" focusable="false"><path class="fill" d="M0 32l32 32v-20h32l0-24h-32v-20z"/></svg>' }, n.templates.icon_broken_heart = function(t) { return '<svg class="unlike-icon" viewBox="0 0 110 81" preserveAspectRatio="xMidYMid" focusable="false"><path class="fill" d="M82.496 1c-14.594 0-23.198 10.043-25.948 14.48l-6.77 10.727 13.661 8.543-13.661 12.535 5.695 15.348-9.686-15.348 11.389-11.975-11.969-7.402s4.22-14.27 4.621-15.521c.782-2.438.782-2.438-.813-3.289-5.516-2.944-12.608-8.098-21.509-8.098-16.299 0-27.506 15.037-27.506 27.885 0 12.795 12.562 22.558 22.245 27.592 9.186 4.771 30.601 18.349 32.755 24.523 2.154-6.174 23.57-19.752 32.753-24.523 9.684-5.034 22.247-14.797 22.247-27.592 0-12.848-11.208-27.885-27.504-27.885z"/></svg>' }, n.templates.icon_card_arrow = function(t) { return '<svg class="card-arrow" viewBox="0 0 10 10" preserveAspectRatio="xMidYMid" focusable="false"><polygon class="fill" points="10 8.337 10 0 1.663 0 1.663 1.603 7.263 1.603 0 8.866 1.134 10 8.397 2.737 8.397 8.337"/></svg>' }, n.templates.icon_cc = function(t) { return '<svg viewBox="0 0 20 14" focusable="false" aria-labelledby="cc-icon-title" role="img"><title id="cc-icon-title">' + t.title + '</title><path class="fill" fill-rule="evenodd" clip-rule="evenodd" d="M17 0h-14c-1.657 0-3 1.343-3 3v8c0 1.656 1.343 3 3 3h14c1.657 0 3-1.344 3-3v-8c0-1.657-1.343-3-3-3zm-7.271 8.282c-.145.923-.516 1.686-1.105 2.268-.597.591-1.369.89-2.294.89-1.138 0-2.049-.402-2.706-1.195-.647-.786-.975-1.866-.975-3.215 0-1.458.372-2.603 1.105-3.403.65-.708 1.487-1.067 2.487-1.067 1.33 0 2.321.482 2.947 1.435.34.53.526 1.072.553 1.611l.013.236h-1.984l-.044-.169c-.092-.355-.207-.622-.343-.793-.239-.298-.591-.443-1.076-.443-.483 0-.856.209-1.14.641-.298.455-.449 1.12-.449 1.977 0 .851.156 1.49.466 1.898.298.395.666.588 1.122.588.469 0 .814-.16 1.058-.491.138-.183.255-.472.351-.856l.042-.17h2.013l-.041.258zm7.582 0c-.145.923-.516 1.686-1.104 2.268-.598.591-1.369.89-2.294.89-1.139 0-2.049-.402-2.707-1.195-.646-.785-.975-1.865-.975-3.214 0-1.458.372-2.603 1.106-3.403.649-.708 1.485-1.067 2.486-1.067 1.33 0 2.32.482 2.946 1.435.34.53.526 1.072.554 1.611l.012.236h-1.9829999999999999l-.043-.169c-.092-.355-.208-.623-.344-.793-.238-.298-.591-.443-1.076-.443-.483 0-.856.209-1.139.641-.299.455-.45 1.12-.45 1.977 0 .851.157 1.49.467 1.898.299.395.666.588 1.121.588.469 0 .814-.16 1.058-.491.138-.183.256-.472.352-.856l.042-.17h2.012l-.041.257z"/></svg>' }, n.templates.icon_chapters = function(t) { return '<svg class="icon-chapter" viewBox="7 7 18 18" focusable="false" aria-labelledby="chapters-icon-title" role="img"><title id="chapters-icon-title">' + t.title + '</title><g class="icon-chapter-group"><rect class="fill" x="11" y="9" width="14" height="2" rx="1"></rect><rect class="fill" x="7" y="9" width="2" height="2" rx="1"></rect><rect class="fill" x="7" y="15" width="2" height="2" rx="1"></rect><rect class="fill" x="11" y="15" width="14" height="2" rx="1"></rect><rect class="fill" x="11" y="21" width="14" height="2" rx="1"></rect><rect class="fill" x="7" y="21" width="2" height="2" rx="1"></rect></g></svg>' }, n.templates.icon_check = function(t) { return '<svg class="check-icon" viewBox="0 0 12 12"><path class="fill" d="M10.9 2.9l-.7-.7c-.2-.2-.6-.2-.8-.1L5 6.6 2.6 4.1c-.2-.1-.6-.1-.7 0l-.8.8c-.1.1-.1.5 0 .7l3.1 3.1c.4.4 1 .4 1.4 0l5.1-5.1c.3-.2.3-.6.2-.7z"/></svg>' }, n.templates.icon_clock = function(t) { return '<svg class="watch-later-icon" viewBox="0 0 20 20" preserveAspectRatio="xMidYMid" focusable="false"><polyline class="fill hour-hand" points="9.64,4.68 10.56,4.68 11.28,11.21 8.93,11.21 9.64,4.68" /><polyline class="fill minute-hand" points="14.19,13.65 13.7,14.14 8.58,10.4 10.44,8.5 14.19,13.65" /><circle class="stroke" cx="10" cy="10" r="8" stroke-width="2" /></svg>' }, n.templates.icon_close_new = function(t) { return '<svg class="icon-close-new" viewBox="0 0 16 16" preserveAspectRatio="xMidYMid" focusable="false"><path class="fill" d="M8.001 9.416l6.437 6.437a.497.497 0 0 0 .713-.001l.7-.7a.503.503 0 0 0 .002-.714L9.416 8.001l6.437-6.436a.497.497 0 0 0-.001-.713l-.7-.7a.503.503 0 0 0-.714-.002L8.001 6.587 1.565.15a.497.497 0 0 0-.713.001l-.7.7a.503.503 0 0 0-.002.714L6.587 8 .15 14.438a.497.497 0 0 0 .001.713l.7.7a.503.503 0 0 0 .714.002L8 9.416z"/></svg>' }, n.templates.icon_close = function(t) { return '<svg class="icon-close" viewBox="0 0 64 64" preserveAspectRatio="xMidYMid" focusable="false"><path class="fill" d="M60 48.796l-16.812-16.796 16.812-16.796-11.204-11.204-16.796 16.804-16.804-16.804-11.196 11.204 16.796 16.796-16.796 16.796 11.196 11.204 16.804-16.804 16.796 16.804z"/></svg>' }, n.templates.icon_collections = function(t) { return '<svg class="collections-icon" viewBox="0 0 24 24" focusable="false"><path class="fill" d="M24 12c0-.3-.1-.6-.4-.8l-2.7-2.3 2.4-1c.4-.1.7-.5.7-.9 0-.3-.1-.6-.4-.8l-7-6c-.1-.1-.4-.2-.6-.2-.1 0-.3 0-.4.1l-15 6c-.3.1-.6.5-.6.9 0 .3.1.6.4.8l2.7 2.3-2.4 1c-.4.1-.7.5-.7.9 0 .3.1.6.4.8l2.7 2.3-2.4 1c-.4.1-.7.5-.7.9 0 .3.1.6.4.8l7 6c.1.1.4.2.6.2.1 0 .3 0 .4-.1l15-6c.4-.1.6-.5.6-.9 0-.3-.1-.6-.4-.8l-2.7-2.3 2.4-1c.4-.1.7-.5.7-.9zm-8.2-9.8l5.3 4.5-12.9 5.1-5.3-4.5 12.9-5.1zm5.3 14.5L8.2 21.8l-5.3-4.5 1.9-.8 2.6 2.2c.1.2.4.3.6.3.1 0 .3 0 .4-.1l10.5-4.2 2.2 2zm-12.9.1l-5.3-4.5 1.9-.8 2.6 2.2c.1.2.4.3.6.3.1 0 .3 0 .4-.1l10.5-4.2 2.3 1.9-13 5.2z"/></svg>' }, n.templates.icon_embed = function(t) { return '<svg class="embed-icon" viewBox="0 0 55 48" preserveAspectRatio="xMidYMid" focusable="false" aria-labelledby="embed-icon-title" role="img"><title id="embed-icon-title">' + t.title + '</title><polygon class="fill" points="16.019,16.385 11.968,13.131 0,24.543 12.082,35.955 16.132,32.703 7.439,24.543"/><polygon class="fill" points="42.92,13.131 38.868,16.384 47.561,24.542 38.981,32.701 43.033,35.955 55,24.542"/><polygon class="fill" points="24.083,39.221 28.76,39.221 36.243,8.351 31.566,8.351"/></svg>' }, n.templates.icon_facebook = function(t) { return '<svg class="facebook-icon" viewBox="0 0 64 64" preserveAspectRatio="xMidYMid" focusable="false" aria-labelledby="fb-icon-title" role="img"><title id="fb-icon-title">' + t.title + '</title><path class="fill" d="M35.992 64h-11.992v-32h-8v-11.028l8-0.004-0.013-6.497c0-8.997 2.44-14.471 13.037-14.471h8.824v11.030h-5.514c-4.127 0-4.325 1.541-4.325 4.418l-0.016 5.52h9.918l-1.169 11.028-8.741 0.004-0.008 32z"/></svg>' }, n.templates.icon_fast_forward = function(t) { return '<svg viewBox="0 0 40 20" preserveAspectRatio="xMidYMid" focusable="false"><polygon class="fill" points="1,0 20,10 1,20" /><polygon class="fill" points="20,0 40,10 20,20" /></svg>' }, n.templates.icon_follow = function(t) { return '<svg class="icon icon-follow" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid" focusable="false"><defs><clipPath id="icon-mask--check"><rect x="0" y="0" width="24" height="24" /></clipPath></defs><path class="icon-path icon-path--plus fill" d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/><path class="icon-path icon-path--check fill" d="M9 21.035l-9-8.638 2.791-2.87 6.156 5.874 12.21-12.436 2.843 2.817z" clip-path="url(#icon-mask--check)"/><path class="icon-path icon-path--close fill" d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z"/></svg>' }, n.templates.icon_fullscreen = function(t) { return '<svg viewBox="0 0 12 12" preserveAspectRatio="xMidYMid" focusable="false" aria-labelledby="fullscreen-icon-title" role="img"><title id="fullscreen-icon-title">' + t.title + '</title><polyline class="fill" points="6,6 5.9,2 4.9,3 2.9,1 1,2.9 3,4.9 2,5.9" transform="translate(6,6)" /><polyline class="fill" points="6,6 5.9,2 4.9,3 2.9,1 1,2.9 3,4.9 2,5.9" transform="translate(6,6) rotate(90)" /><polyline class="fill" points="6,6 5.9,2 4.9,3 2.9,1 1,2.9 3,4.9 2,5.9" transform="translate(6,6) rotate(180)" /><polyline class="fill" points="6,6 5.9,2 4.9,3 2.9,1 1,2.9 3,4.9 2,5.9" transform="translate(6,6) rotate(270)" /></svg>' }, n.templates.icon_gear = function(t) { return '<svg class="icon-gear" viewBox="0 0 16 16" preserveAspectRatio="xMidYMid" focusable="false" aria-labelledby="settings-icon-title" role="img"><title id="settings-icon-title">' + t.title + '</title><defs><clipPath id="icon-gear-mask-hd"><polygon points="19 9.422 19 0 0 0 0 16 4.996 16 6 9.422 19 9.422"/></clipPath><clipPath id="icon-gear-mask-4k"><polygon points="19 0 0 0 0 16 .656 16 7.641 9.422 19 9.422"/></clipPath></defs><g class="icon-gear-group"><path class="icon-gear-cog fill" d="M8.75,0 L7.25,0 C6.69771525,0 6.25,0.44771525 6.25,1 L6.25,1.71 C6.24203899,2.03670262 6.03616565,2.32571712 5.73,2.44 C5.22486505,2.64787629 4.75048268,2.92375823 4.32,3.26 C4.06726048,3.46530794 3.71530155,3.4969447 3.43,3.34 L2.81,3 C2.57947626,2.86645499 2.30519371,2.83041629 2.04799634,2.89987835 C1.79079898,2.96934041 1.57195122,3.13856029 1.44,3.37 L1.44,3.37 L0.69,4.67 C0.438460777,5.14101477 0.601355467,5.72655514 1.06,6 L1.06,6 L1.68,6.36 C1.95609578,6.53006064 2.1022252,6.84996558 2.05,7.17 C1.97585362,7.71080372 1.97585362,8.25919628 2.05,8.8 C2.1022252,9.12003442 1.95609578,9.43993936 1.68,9.61 L1.06,10 C0.828560291,10.1319512 0.65934041,10.350799 0.589878348,10.6079963 C0.520416285,10.8651937 0.556454987,11.1394763 0.69,11.37 L0.69,11.37 L1.44,12.67 C1.72842942,13.137733 2.34023095,13.2851012 2.81,13 L2.81,13 L3.43,12.64 C3.71530155,12.4830553 4.06726048,12.5146921 4.32,12.72 C4.75048268,13.0562418 5.22486505,13.3321237 5.73,13.54 C6.03616565,13.6542829 6.24203899,13.9432974 6.25,14.27 L6.25,15 C6.25,15.5522847 6.69771525,16 7.25,16 L8.75,16 C9.30228475,16 9.75,15.5522847 9.75,15 L9.75,14.29 C9.75796101,13.9632974 9.96383435,13.6742829 10.27,13.56 C10.7751349,13.3521237 11.2495173,13.0762418 11.68,12.74 C11.9327395,12.5346921 12.2846984,12.5030553 12.57,12.66 L13.19,13.02 C13.4205237,13.153545 13.6948063,13.1895837 13.9520037,13.1201217 C14.209201,13.0506596 14.4280488,12.8814397 14.56,12.65 L14.56,12.65 L15.31,11.35 C15.5746773,10.8743026 15.4102265,10.2742794 14.94,10 L14.94,10 L14.32,9.64 C14.0439042,9.46993936 13.8977748,9.15003442 13.95,8.83 C14.0241464,8.28919628 14.0241464,7.74080372 13.95,7.2 C13.8977748,6.87996558 14.0439042,6.56006064 14.32,6.39 L14.94,6.03 C15.1714397,5.89804878 15.3406596,5.67920102 15.4101217,5.42200366 C15.4795837,5.16480629 15.443545,4.89052374 15.31,4.66 L15.31,4.66 L14.56,3.36 C14.426372,3.13025585 14.2067828,2.96315821 13.9497298,2.89561144 C13.6926768,2.82806466 13.4193087,2.86562606 13.19,3 L13.19,3 L12.57,3.36 C12.2846984,3.5169447 11.9327395,3.48530794 11.68,3.28 C11.2495173,2.94375823 10.7751349,2.66787629 10.27,2.46 C9.96383435,2.34571712 9.75796101,2.05670262 9.75,1.73 L9.75,1 C9.75,0.73478351 9.64464316,0.480429597 9.45710678,0.292893219 C9.2695704,0.10535684 9.01521649,-8.8817842e-16 8.75,0 Z M10.5,8 C10.5,9.38071187 9.38071187,10.5 8,10.5 C6.61928813,10.5 5.5,9.38071187 5.5,8 C5.5,6.61928813 6.61928813,5.5 8,5.5 C9.38071187,5.5 10.5,6.61928813 10.5,8 Z" /></g><g class="icon-gear-text icon-gear-text-hd"><polygon class="fill" points="10.17 12.38 10.46 10.43 12.22 10.43 11.36 16 9.6 16 9.95 13.76 8.09 13.76 7.77 16 6.01 16 6.85 10.43 8.61 10.43 8.32 12.38"/><path class="fill" d="M17.82,11.23 C17.65,10.98 17.32,10.43 15.93,10.43 L13.37,10.43 L12.51,16 L15.09,16 C16.1538092,16.0719871 17.159097,15.5065128 17.65,14.56 C18.1567595,13.5192032 18.2181336,12.3169925 17.82,11.23 Z M15.9,14.42 C15.6125419,14.6349311 15.2582986,14.7412041 14.9,14.72 L14.48,14.72 L14.9,11.72 L15.35,11.72 C15.6806309,11.6794538 16.0108877,11.7981978 16.24,12.04 C16.4818058,12.8447587 16.357466,13.7151373 15.9,14.42 Z"/></g><g class="icon-gear-text icon-gear-text-4k"><polygon class="fill" points="11.82 10.29 13.58 10.29 13.19 12.17 13.19 12.17 15.19 10.27 17.48 10.27 14.75 12.62 16.36 16 14.36 16 13.36 13.78 12.76 14.32 12.39 16 10.63 16"/><path class="fill" d="M7.86,14.9 L5.31,14.9 L5.61,13.41 L8.78,10.41 L10.36,10.41 L9.72,13.51 L10.44,13.51 L10.18,14.87 L9.45,14.87 L9.22,16 L7.63,16 L7.86,14.9 Z M8.19,13.54 L8.54,12 L8.54,12 L6.94,13.58 L8.19,13.54 Z"/></g></svg>' }, n.templates.icon_heart = function(t) { return '<svg class="like-icon" viewBox="0 0 110 81" preserveAspectRatio="xMidYMid" focusable="false"><path class="fill" d="M82.496 1c-14.698 0-25.969 11.785-27.496 13.457-1.526-1.672-12.798-13.457-27.494-13.457-16.299 0-27.506 15.037-27.506 27.885 0 12.795 12.562 22.558 22.245 27.592 9.186 4.771 30.601 18.349 32.755 24.523 2.154-6.174 23.57-19.752 32.755-24.523 9.684-5.034 22.245-14.797 22.245-27.592 0-12.848-11.206-27.885-27.504-27.885z"/></svg>' }, n.templates.icon_line_arrow = function(t) { return '<svg class="icon-lineArrow" viewBox="0 0 24 15"><polygon class="fill" points="21 0 24 3.057 12 15 0 3.057 3 0 12 9"/></svg>' }, n.templates.icon_live_viewers = function(t) { return '<svg width="12" height="14" viewBox="0 0 12 14"><g transform="translate(-5 -4)" fill="#FFF" fill-rule="evenodd"><circle cx="11" cy="7" r="3"/><path d="M9 12h4a4 4 0 0 1 4 4v2H5v-2a4 4 0 0 1 4-4z"/></g></svg>' }, n.templates.icon_lock = function(t) { return '<svg viewBox="0 0 46 76" preserveAspectRatio="xMidYMid" focusable="false"><path class="fill bolt" d="M5,42v-15C8,5 39,5 42,27v30h-7v-30C32,14 15,14 12,27v15z"/><rect class="fill" x="0" y="41" height="35" width="46" rx="4" ry="4"/></svg>' }, n.templates.icon_mail = function(t) { return '<svg class="mail-icon" viewBox="0 0 72 72" preserveAspectRatio="xMidYMid" focusable="false" aria-labelledby="mail-icon-title" role="img"><title id="mail-icon-title">' + t.title + '</title><path class="fill" d="M71.754,57.6C71.9,57.169,72,56.718,72,56.241V16.759c0-0.453-0.092-0.881-0.225-1.291l-23.487,19.86L71.754,57.6z"/><path class="fill" d="M35.999,40.118l6.187-4.971l3.131-2.516L68.9,12.693c-0.387-0.113-0.789-0.193-1.213-0.193H4.312c-0.424,0-0.827,0.08-1.215,0.194l23.599,19.949l3.132,2.517L35.999,40.118z"/><path class="fill" d="M67.688,60.5c0.405,0,0.791-0.074,1.164-0.18L45.157,37.843l-9.159,7.361l-9.145-7.351L3.15,60.322C3.522,60.426,3.907,60.5,4.312,60.5H67.688z"/><path class="fill" d="M0.226,15.468C0.092,15.878,0,16.307,0,16.759v39.482c0,0.478,0.099,0.929,0.247,1.356l23.476-22.261L0.226,15.468z"/></svg>' }, n.templates.icon_muted = function(t) { return '<svg class="vp-icon-muted" viewBox="0 0 16 16"><path class="fill" d="M15.988 9.491l-1.49 1.491-1.491-1.491-1.491 1.491-1.49-1.491 1.49-1.491-1.49-1.491 1.49-1.491 1.491 1.491 1.491-1.491 1.49 1.491-1.49 1.491 1.49 1.491zM8.008 15.996l-3.998-3.998h-2.998c-0.552 0-0.999-0.447-0.999-0.999v-5.997c0-0.552 0.447-0.999 0.999-0.999h2.998l3.998-3.998c0 0 0.999-0.125 0.999 0.999 0 5.423 0 13.304 0 13.993 0 1.124-0.999 0.999-0.999 0.999zM7.009 4.002l-1.999 1.999h-2.998v3.998h2.998l1.999 1.999v-7.996z"></path></svg>' }, n.templates.icon_pause = function(t) { return '<svg viewBox="0 0 20 20" preserveAspectRatio="xMidYMid" focusable="false" aria-labelledby="pause-icon-title" role="img"><title id="pause-icon-title">' + t.title + '</title><rect class="fill" width="6" height="20" x="0" y="0" /><rect class="fill" width="6" height="20" x="12" y="0" /></svg>' }, n.templates.icon_pip = function(t) { return '<svg class="pip-icon" viewBox="0 0 16 12"><polygon class="fill" points="6 8 1 8 1 1 14 1 14 6 15 6 15 0 0 0 0 9 6 9 6 8"/><rect class="fill" x="7" y="7" width="9" height="5"/><polyline class="fill enter" transform="translate(4, 4) rotate(180) translate(-4, -4)" points="5.33 2 5.33 3 3.67 3 5.67 5 5 5.67 3 3.67 3 5.33 2 5.33 2 2"/><polyline class="fill return" points="5.33 2 5.33 3 3.67 3 5.67 5 5 5.67 3 3.67 3 5.33 2 5.33 2 2"/></svg>' }, n.templates.icon_play = function(t) { return '<svg viewBox="0 0 20 20" preserveAspectRatio="xMidYMid" focusable="false" aria-labelledby="play-icon-title" role="img"><title id="play-icon-title">' + t.title + '</title><polygon class="fill" points="1,0 20,10 1,20"/></svg>' }, n.templates.icon_prev = function(t) { return '<svg class="icon-prev" viewBox="0 0 27 48" preserveAspectRatio="xMidYMid" focusable="false"><path class="fill" d="M7.243,24L26.414,4.828c0.781-0.781,0.781-2.047,0-2.828L25,0.586 c-0.781-0.781-2.047-0.781-2.828,0L0.879,21.879c-1.172,1.172-1.172,3.071,0,4.243l21.293,21.293c0.781,0.781,2.047,0.781,2.828,0 L26.414,46c0.781-0.781,0.781-2.047,0-2.828L7.243,24z"/></svg>' }, n.templates.icon_replay = function(t) { return '<svg viewBox="-387 605 16 16" preserveAspectRatio="xMidYMid" aria-labelledby="replay-icon-title" role="img"><title id="replay-icon-title">' + t.title + '</title><path class="fill" d="M-387 606v4c0 .6.4 1 1 1h4c.6 0 1-.4 1-1s-.4-1-1-1h-1.5c1.1-1.2 2.7-2 4.5-2 3.3 0 6 2.7 6 6s-2.7 6-6 6c-2.3 0-4.4-1.3-5.4-3.4-.2-.5-.8-.7-1.3-.5-.5.2-.7.8-.5 1.3 1.3 2.8 4.2 4.6 7.2 4.6 4.4 0 8-3.6 8-8s-3.6-8-8-8c-2.3 0-4.5 1-6 2.7V606c0-.6-.4-1-1-1s-1 .4-1 1z"/></svg>' }, n.templates.icon_share = function(t) { return '<svg class="share-icon" viewBox="0 0 20 20" preserveAspectRatio="xMidYMid" focusable="false"><polygon class="fill" points="20,0 0,12 5,15 17,4 7,16 7,19 9,17 14,20"/></svg>' }, n.templates.icon_spin = function(t) { return '<svg class="vp-spin-trace" viewBox="0 0 50 50" focusable="false"><circle cx="50%" cy="50%" r="20"></circle></svg><svg class="vp-spin-circle" viewBox="0 0 50 50" focusable="false"><circle cx="50%" cy="50%" r="20"></circle></svg>' }, n.templates.icon_stereoscopic = function(t) { return '<svg viewBox="0 0 20 13" focusable="false"><path class="fill" d="M 18.74,0 1.2,0 C 0.55,0 0,0.57 0,1.27 L 0,11.73 C 0,12.43 0.55,13 1.23,13 L 6,13 c 0.54,0 1,-0.32 1.16,-0.79 L 8.55,8.74 C 8.79,8.16 9.35,7.75 10,7.75 c 0.65,0 1.21,0.41 1.45,0.99 l 1.39,3.47 c 0.19,0.47 0.62,0.79 1.11,0.79 l 4.79,0 C 19.45,13 20,12.43 20,11.73 L 20,1.27 C 20,0.57 19.45,0 18.74,0 M 5.22,8.58 C 4,8.58 3,7.55 3,6.29 3,5 4,4 5.22,4 6.44,4 7.43,5 7.43,6.29 7.43,7.55 6.44,8.58 5.22,8.58 m 9.56,0 C 13.56,8.58 12.57,7.55 12.57,6.29 12.57,5.03 13.56,4 14.78,4 16,4 17,5.03 17,6.29 17,7.55 16,8.58 14.78,8.58 Z" /></svg>' }, n.templates.icon_tumblr = function(t) { return '<svg class="tumblr-icon" viewBox="0 0 12 20" focusable="false" aria-labelledby="tumblr-icon-title" role="img"><title id="tumblr-icon-title">' + t.title + '</title><path class="fill" d="M7.865,19.958 C3.629,19.958 2.02,16.834 2.02,14.627 L2.02,8.105 L0,8.105 L0,5.527 C3.027,4.436 3.756,1.705 3.927,0.149 C3.938,0.042 4.022,0 4.07,0 L6.994,0 L6.994,5.084 L10.987,5.084 L10.987,8.105 L6.979,8.105 L6.979,14.318 C6.993,15.149 7.291,16.287 8.815,16.287 C8.843,16.287 8.872,16.287 8.9,16.286 C9.43,16.272 10.14,16.118 10.511,15.941 L11.471,18.788 C11.11,19.317 9.481,19.932 8.015,19.957 C7.964,19.958 7.915,19.958 7.865,19.958"/></svg>' }, n.templates.icon_twitter = function(t) { return '<svg class="twitter-icon" viewBox="0 0 274 223" preserveAspectRatio="xMidYMid" focusable="false" aria-labelledby="twitter-icon-title" role="img"><title id="twitter-icon-title">' + t.title + '</title><path class="fill" d="M85.98,222 C54.305,222 24.822,212.715 0,196.801 C4.388,197.319 8.853,197.584 13.38,197.584 C39.658,197.584 63.843,188.617 83.039,173.574 C58.495,173.121 37.781,156.905 30.644,134.621 C34.068,135.276 37.582,135.627 41.196,135.627 C46.312,135.627 51.267,134.942 55.974,133.66 C30.314,128.508 10.981,105.838 10.981,78.662 C10.981,78.426 10.981,78.191 10.985,77.957 C18.548,82.158 27.196,84.681 36.391,84.972 C21.341,74.914 11.438,57.746 11.438,38.287 C11.438,28.008 14.204,18.373 19.032,10.089 C46.696,44.023 88.025,66.353 134.641,68.692 C133.685,64.587 133.188,60.306 133.188,55.91 C133.188,24.935 158.302,-0.178 189.279,-0.178 C205.411,-0.178 219.988,6.634 230.22,17.535 C242.996,15.019 255,10.351 265.837,3.924 C261.649,17.021 252.756,28.013 241.175,34.955 C252.521,33.599 263.331,30.584 273.39,26.123 C265.87,37.371 256.36,47.25 245.402,55.158 C245.51,57.563 245.564,59.982 245.564,62.414 C245.564,136.533 189.148,222 85.98,222"/></svg>' }, n.templates.icon_unfullscreen = function(t) { return '<svg viewBox="0 0 12 12" preserveAspectRatio="xMidYMid" focusable="false" aria-labelledby="unfullscreen-icon-title" role="img"><title id="unfullscreen-icon-title">' + t.title + '</title><polyline class="fill" points="-1,-1 -1.1,-5 -2.1,-4 -4.1,-6 -6,-4.1 -4,-2.1 -5,-1.1" transform="translate(6,6) "/><polyline class="fill" points="-1,-1 -1.1,-5 -2.1,-4 -4.1,-6 -6,-4.1 -4,-2.1 -5,-1.1" transform="translate(6,6) rotate(90)" /><polyline class="fill" points="-1,-1 -1.1,-5 -2.1,-4 -4.1,-6 -6,-4.1 -4,-2.1 -5,-1.1" transform="translate(6,6) rotate(180)" /><polyline class="fill" points="-1,-1 -1.1,-5 -2.1,-4 -4.1,-6 -6,-4.1 -4,-2.1 -5,-1.1" transform="translate(6,6) rotate(270)" /></svg>' }, n.templates.icon_vod_download = function(t) { return '<svg class="vod-download-icon" viewBox="0 0 32 32" focusable="false"><path class="fill" d="M21.707 24.707l-5 5c-.39.39-1.024.39-1.414 0l-5-5c-.39-.39-.39-1.024 0-1.414l1.06-1.06c.392-.392 1.025-.392 1.415 0L14 23.462V15c0-.552.448-1 1-1h2c.552 0 1 .448 1 1v8.464l1.232-1.232c.39-.39 1.024-.39 1.414 0l1.06 1.06c.392.39.392 1.025 0 1.415z"/><path class="fill" d="M27.894 12.31c.063-.43.106-.864.106-1.31 0-4.97-4.03-9-9-9-3.6 0-6.7 2.12-8.138 5.175C10.175 6.75 9.368 6.5 8.5 6.5 6.015 6.5 4 8.515 4 11c0 .445.067.874.187 1.28C1.76 13.05 0 15.318 0 18c0 3.314 2.686 6 6 6h1c0-2.42 1.718-4.436 4-4.9V15c0-2.21 1.79-4 4-4h2c2.21 0 4 1.79 4 4v4.1c2.282.464 4 2.48 4 4.9h1c3.314 0 6-2.686 6-6 0-2.65-1.72-4.896-4.106-5.69z"/></svg>' }, n.templates.icon_vod_rent = function(t) { return '<svg class="vod-rent-icon" viewBox="0 0 32 32" focusable="false"><path class="fill" d="M23 11H9c-.552 0-1 .448-1 1v8c0 .552.448 1 1 1h14c.552 0 1-.448 1-1v-8c0-.552-.448-1-1-1z"/><path class="fill" d="M32 22V10c-2.76 0-5-2.24-5-5H5c0 2.76-2.24 5-5 5v12c2.76 0 5 2.24 5 5h22c0-2.76 2.24-5 5-5zm-6-1c0 1.105-.895 2-2 2H8c-1.105 0-2-.895-2-2V11c0-1.105.895-2 2-2h16c1.105 0 2 .895 2 2v10z"/></svg>' }, n.templates.icon_vod_subscribe = function(t) { return '<svg class="vod-subscribe-icon" viewBox="0 0 32 32" focusable="false"><path class="fill" d="M20 9v2c0 .552.448 1 1 1h10c.552 0 1-.448 1-1V1c0-.552-.448-1-1-1h-2c-.552 0-1 .448-1 1v4.445C24.98 2.01 20.523-.128 15.558.005 7.293.23.413 6.96.018 15.216-.42 24.41 6.905 32 16 32c8.47 0 15.404-6.583 15.964-14.912.04-.585-.413-1.088-1-1.088H28.96c-.514 0-.956.388-.994.9C27.506 23.107 22.326 28 16 28 9.217 28 3.748 22.37 4.01 15.53 4.246 9.284 9.47 4.147 15.72 4.003 19.38 3.92 22.674 5.483 24.926 8H21c-.552 0-1 .448-1 1z"/><path class="fill" d="M13 20v-8l8 4"/></svg>' }, n.templates.icon_vod = function(t) { return '<svg class="vod-icon" viewBox="0 0 21 23" focusable="false"><path class="fill" d="M19.602,4.716l-7.665-4.385C11.169-0.108,9.91-0.111,9.139,0.327L1.4,4.721C0.63,5.158,0,6.234,0,7.112v8.776c0,0.878,0.63,1.955,1.398,2.393l0.526,0.3l7.176,4.09c0.77,0.438,2.028,0.438,2.798,0l7.702-4.39c0.77-0.438,1.4-1.516,1.4-2.393V7.112C21,6.234,20.37,5.156,19.602,4.716z M7.336,15.761L7.337,7.24l8.008,4.26L7.336,15.761z"/></svg>' }, n.templates.icon_warning = function(t) { return '<svg class="warning-icon" focusable="false" width="36" height="32.326" viewBox="287.915 380.297 36 32.326"><path d="M309.646 382.963c-2.052-3.555-5.41-3.555-7.462 0L288.79 406.16c-2.05 3.555-.372 6.463 3.732 6.463h26.786c4.104 0 5.783-2.908 3.73-6.463l-13.392-23.197zm-2 23.224c0 .983-.804 1.788-1.788 1.788-.983 0-1.788-.805-1.788-1.788 0-.984.805-1.79 1.788-1.79s1.79.805 1.788 1.79zm-.317-7.76c-.254 2.604-.916 4.735-1.472 4.735-.557 0-1.22-2.13-1.477-4.735-.255-2.604-.464-5.72-.464-6.925 0-1.204.87-2.19 1.935-2.19 1.066 0 1.936.986 1.936 2.19s-.205 4.32-.457 6.925z"/></svg>' }, n.templates.live_status = function(t) { return '<div class="vp-live-status"><div class="vp-live-status-circle offline"></div><span>LIVE</span></div>' }, n.templates.live_viewer_count = function(t) { var n = '<div class="vp-live-viewer-count"><div class="vp-live-viewer-count-person"> '; return (n += this.render("icon_live_viewers") || "") + ' </div><span class="vp-live-viewer-count-value">0</span></div>' }, n.templates.logo = function(t) { return '<svg viewBox="0 0 140 40" preserveAspectRatio="xMidYMid" role="img" focusable="false" aria-labelledby="logo-icon-title" role="img"><title id="logo-icon-title">Vimeo</title><g><path class="fill logo-v" d="M31.277 18.832c-.14 3.052-2.27 7.229-6.39 12.531-4.259 5.536-7.863 8.306-10.811 8.306-1.825 0-3.371-1.687-4.633-5.059l-2.529-9.275c-.938-3.372-1.943-5.06-3.019-5.06-.234 0-1.054.494-2.458 1.477l-1.474-1.901c1.546-1.358 3.071-2.717 4.572-4.078 2.062-1.783 3.609-2.72 4.642-2.814 2.438-.234 3.938 1.433 4.502 5.001.608 3.851 1.03 6.246 1.266 7.182.704 3.195 1.476 4.791 2.321 4.791.657 0 1.641-1.037 2.954-3.108 1.312-2.072 2.015-3.649 2.109-4.732.188-1.789-.516-2.686-2.109-2.686-.75 0-1.522.173-2.318.514 1.54-5.044 4.481-7.495 8.823-7.355 3.22.095 4.737 2.184 4.552 6.266z"/><path class="fill logo-i" d="M50.613 28.713c-1.313 2.484-3.119 4.733-5.417 6.748-3.143 2.718-6.285 4.076-9.425 4.076-1.456 0-2.57-.469-3.343-1.406-.773-.938-1.137-2.153-1.09-3.653.045-1.548.526-3.938 1.441-7.173.914-3.232 1.373-4.967 1.373-5.201 0-1.218-.423-1.828-1.266-1.828-.282 0-1.079.494-2.393 1.477l-1.618-1.901c1.501-1.358 3.001-2.717 4.502-4.078 2.017-1.783 3.518-2.72 4.504-2.814 1.546-.14 2.684.314 3.411 1.367.726 1.052.996 2.417.81 4.098-.61 2.852-1.268 6.472-1.972 10.864-.046 2.01.681 3.014 2.182 3.014.656 0 1.827-.693 3.518-2.083 1.406-1.156 2.555-2.243 3.447-3.262l1.336 1.755zm-6.12-25.016c-.047 1.168-.633 2.288-1.76 3.361-1.266 1.212-2.767 1.82-4.501 1.82-2.672 0-3.963-1.166-3.869-3.499.045-1.213.76-2.381 2.144-3.501 1.384-1.119 2.919-1.68 4.609-1.68.984 0 1.805.387 2.462 1.155.656.772.961 1.553.915 2.344z"/><path class="fill logo-m" d="M94.543 28.713c-1.314 2.484-3.117 4.733-5.416 6.748-3.145 2.718-6.285 4.076-9.426 4.076-3.051 0-4.527-1.687-4.432-5.06.045-1.501.338-3.306.877-5.415.539-2.108.832-3.748.879-4.921.049-1.779-.492-2.673-1.623-2.673-1.223 0-2.682 1.456-4.375 4.362-1.788 3.05-2.754 6.003-2.894 8.861-.095 2.02.103 3.568.592 4.645-3.272.096-5.565-.444-6.873-1.617-1.171-1.032-1.708-2.742-1.614-5.135.045-1.501.276-3.001.69-4.502.414-1.5.644-2.837.69-4.011.095-1.734-.54-2.604-1.9-2.604-1.177 0-2.444 1.339-3.806 4.011-1.361 2.673-2.113 5.465-2.253 8.371-.094 2.627.074 4.456.503 5.486-3.219.096-5.505-.582-6.857-2.035-1.122-1.214-1.634-3.06-1.539-5.54.044-1.214.258-2.911.645-5.084.386-2.175.603-3.87.647-5.087.093-.841-.119-1.263-.633-1.263-.281 0-1.079.475-2.393 1.424l-1.687-1.901c.234-.184 1.71-1.545 4.432-4.078 1.969-1.828 3.306-2.766 4.009-2.812 1.219-.095 2.204.409 2.954 1.511s1.126 2.38 1.126 3.834c0 .469-.047.915-.14 1.336.703-1.077 1.523-2.017 2.463-2.814 2.156-1.874 4.572-2.931 7.245-3.166 2.298-.187 3.938.352 4.925 1.617.795 1.033 1.17 2.511 1.125 4.433.329-.28.681-.586 1.056-.915 1.078-1.267 2.133-2.273 3.164-3.023 1.736-1.267 3.541-1.97 5.418-2.112 2.25-.187 3.867.35 4.852 1.611.844 1.028 1.219 2.5 1.127 4.415-.047 1.309-.363 3.213-.949 5.712-.588 2.501-.879 3.936-.879 4.31-.049.982.047 1.659.279 2.034.236.373.797.559 1.689.559.656 0 1.826-.693 3.518-2.083 1.406-1.156 2.555-2.243 3.447-3.262l1.337 1.757z"/><path class="fill logo-e" d="M120.922 28.642c-1.361 2.249-4.033 4.495-8.02 6.743-4.971 2.856-10.012 4.284-15.125 4.284-3.797 0-6.52-1.267-8.16-3.797-1.172-1.735-1.734-3.797-1.688-6.189.045-3.797 1.736-7.407 5.064-10.832 3.658-3.75 7.973-5.627 12.945-5.627 4.596 0 7.033 1.873 7.314 5.615.188 2.384-1.125 4.842-3.938 7.368-3.004 2.76-6.781 4.515-11.328 5.263.842 1.169 2.109 1.752 3.799 1.752 3.375 0 7.059-.855 11.045-2.574 2.859-1.207 5.111-2.461 6.754-3.76l1.338 1.754zm-15.969-7.345c.045-1.259-.469-1.89-1.547-1.89-1.406 0-2.83.969-4.283 2.906-1.451 1.936-2.201 3.789-2.248 5.562-.025 0-.025.305 0 .911 2.295-.839 4.287-2.122 5.971-3.849 1.357-1.491 2.06-2.707 2.107-3.64z"/><path class="fill logo-o" d="M140.018 23.926c-.189 4.31-1.781 8.031-4.783 11.169-3.002 3.137-6.73 4.706-11.186 4.706-3.705 0-6.52-1.195-8.441-3.585-1.404-1.777-2.182-4.001-2.32-6.668-.236-4.029 1.217-7.729 4.361-11.101 3.377-3.746 7.619-5.618 12.732-5.618 3.281 0 5.766 1.102 7.457 3.301 1.594 2.015 2.32 4.614 2.18 7.796zm-7.95-.264c.047-1.269-.129-2.434-.527-3.49-.4-1.057-.975-1.587-1.725-1.587-2.391 0-4.361 1.293-5.906 3.877-1.316 2.115-2.02 4.371-2.111 6.766-.049 1.176.164 2.21.633 3.104.514 1.032 1.242 1.549 2.182 1.549 2.109 0 3.914-1.244 5.416-3.735 1.267-2.068 1.945-4.23 2.038-6.484z"/></g></svg>' }, n.templates.menu_list_panel = function(t) {
                var n = '<div class="vp-panel vp-panel-open vp-panel--' + t.id + '"><div class="vp-panel-title"><button type="button" class="vp-panel-button js-panelTitleButton" tabindex="0"><span class="vp-panel-button-text">' + t.title + '</span><span class="vp-panel-stat"><span class="vp-panel-stat-text js-panelStatText">' + t.active + "</span> ";
                n += this.render("icon_line_arrow") || "", n += ' </span></button></div><div class="vp-panel-itemsWrap"><ul class="vp-panel-items js-panelItems"> ';
                for (var i = 0; i < t.items.length; i++) n += ' <li class="vp-panel-item', t.items[i].active && (n += " vp-panel-item-on"), n += '" data-time="' + t.items[i].id + '" tabindex="0" role="menuitemradio" aria-checked="', t.items[i].active ? n += "true" : n += "false", n += '"> ', t.items[i].index && (n += '<span class="vp-panel-item-index">' + t.items[i].index + "</span>"), n += ' <span class="vp-panel-item-label">' + t.items[i].label + "</span> ", "chapters" === t.id && (n += ' <span class="vp-chapters-active-indicator"></span> '), n += " </li> ";
                return n + ' </ul><div class="vp-indicator"></div></div></div>'
            }, n.templates.menu = function(t) { var n = '<div class="vp-menu vp-menu-hidden vp-menu-invisible" role="menu" hidden><button type="button" class="vp-menu-close js-menuClose" aria-label="' + t.strings.close + '">'; return (n += this.render("icon_close_new") || "") + "</button></div>" }, n.templates.nudge = function(t) { var n = '<div class="vp-nudge vp-nudge-backward invisible"><div class="vp-nudge-seconds"></div><div class="vp-nudge-symbol vp-nudge-backward-symbol"> '; return n += this.render("icon_fast_forward") || "", n += ' </div></div><div class="vp-nudge vp-nudge-forward invisible"><div class="vp-nudge-seconds"></div><div class="vp-nudge-symbol vp-nudge-forward-symbol"> ', (n += this.render("icon_fast_forward") || "") + " </div></div>" }, n.templates.outer = function(t) { var n = '<div class="vp-video-wrapper"><div class="vp-video"><div class="vp-telecine"></div></div><div class="vp-preview"></div><div class="vp-shade vp-shade-invisible"></div><div class="vp-nudge-shade vp-nudge-shade-left vp-nudge-shade-invisible"></div><div class="vp-nudge-shade vp-nudge-shade-right vp-nudge-shade-invisible"></div><div class="vp-spin vp-spin-invisible"> '; return n += this.render("icon_spin") || "", n += ' </div></div><div class="vp-text-alert-wrapper hidden"><div class="vp-alert-text"></div><div class="vp-alert-time"><div class="vp-live-start-time-title"></div><div class="vp-live-start-time-body"></div><div class="vp-live-start-time-footer"></div></div></div><div class="vp-target"></div><div class="vp-captions hidden with-controls" hidden aria-live="assertive"><span></span></div><div class="vp-cards-wrapper"><div class="vp-cards"></div></div><div class="vp-outro-wrapper hidden" hidden><div class="vp-outro" role="dialog" aria-live="assertive"></div></div><div class="vp-controls-wrapper"><div class="vp-badge"></div><div class="vp-title" role="contentinfo"></div><div class="vp-controls"></div><div class="vp-sidedock hidden" role="toolbar" hidden></div><div class="vp-unmute hidden" hidden></div></div><div class="vp-overlay-wrapper hidden" role="dialog" aria-live="assertive" hidden><div class="vp-overlay-bg"></div><div class="vp-overlay-cell"><div class="vp-overlay"></div><div class="vp-overlay-icon-wrapper hidden"><div class="vp-overlay-icon"></div></div><div class="vp-overlay-logo logo"></div></div><nav><button type="button" class="vp-nav-prevButton js-back cloaked" aria-label="' + t.strings.back + '">', n += this.render("icon_prev") || "", n += '</button><button type="button" class="vp-nav-closeButton js-close" aria-label="' + t.strings.close + '">', (n += this.render("icon_close_new") || "") + '</button></nav></div><div class="vp-notification-wrapper hidden" hidden><div class="vp-notification-cell"><div class="vp-notification" role="dialog" aria-live="assertive"></div></div></div><div class="vp-stats-debug rounded-box hidden" aria-hidden="true" hidden></div><div class="vp-nudge-wrapper hidden"></div><span id="new-window" hidden>This opens in a new window.</span>' }, n.templates.sidedock = function(t) { var n = ""; return t.vodButton && (n += ' <div class="box" data-vod-expiring="' + t.vodPurchaseInfo.expiring + '" data-vod-purchased="' + t.purchased + '"><button type="button" class="vod-button rounded-box', t.purchased && (n += " on"), t.vodPurchaseInfo.expiring && (n += " expiring"), n += '" data-product-id="' + t.vodPurchaseInfo.product_id + '"><div class="vod-button-inner"><span class="vod-label">' + t.vodDisplayLabel + "</span> ", n += this.render("icon_vod") || "", n += ' </div></button></div><div class="sidedock-inner">'), t.likeButton && (n += ' <div class="box"><label class="rounded-box hidden like-label" role="presentation"><span>' + (t.liked ? t.strings.unlike : t.strings.like) + '</span></label><button type="button" class="like-button rounded-box', t.liked && (n += " on"), n += '" aria-label="', t.loggedIn ? n += "" + (t.liked ? t.strings.unlike : t.strings.like) : n += "" + t.strings.likeLoggedOut, n += '" data-label-add="' + t.strings.like + '" data-label-add-logged-out="' + t.strings.likeLoggedOut + '" data-label-remove="' + t.strings.unlike + '"> ', n += this.render("icon_heart") || "", n += " </button></div>"), t.watchLaterButton && (n += ' <div class="box"><label class="rounded-box hidden watch-later-label" role="presentation"><span>' + (t.addedToWatchLater ? t.strings.watchLaterRemove : t.strings.watchLaterAdd) + '</span></label><button type="button" class="watch-later-button rounded-box', t.addedToWatchLater && (n += " on"), n += '" aria-label="', t.loggedIn ? n += "" + (t.addedToWatchLater ? t.strings.watchLaterRemove : t.strings.watchLaterAdd) : n += "" + t.strings.watchLaterAddLoggedOut, n += '" data-label-add="' + t.strings.watchLaterAdd + '" data-label-add-logged-out="' + t.strings.watchLaterAddLoggedOut + '" data-label-remove="' + t.strings.watchLaterRemove + '"> ', n += this.render("icon_clock") || "", n += " </button></div>"), t.collectionsButton && (n += ' <div class="box"><label class="rounded-box hidden collections-label" role="presentation"><span>' + t.strings.collections + '</span></label><button type="button" class="collections-button rounded-box" aria-label="' + t.strings.collections + '"> ', n += this.render("icon_collections") || "", n += " </button></div>"), t.shareButton && (n += ' <div class="box"><label class="rounded-box hidden share-label" role="presentation"><span>' + t.strings.share + '</span></label><button type="button" class="share-button rounded-box" aria-label="' + t.strings.share + '"> ', n += this.render("icon_share") || "", n += " </button></div>"), t.vodButton && (n += " </div>"), n + "" }, n.templates.app_redirect = function(t) { var n = '<div class="vp-overlay-content"> '; return t.strings.title && (n += ' <div class="app-redirect-title">' + t.strings.title + "</div> "), t.hideRedirectButton || (n += ' <div class="' + (t.strings.title ? "" : "app-redirect--topspace") + '"><a class="app-redirect-button" href="' + t.redirectUrl + '" role="button"', t.newWindow && (n += ' data-new-window="1" target="_blank" rel="noopener"'), n += ' aria-describedby="new-window">' + t.strings.buttonText + "</a></div> "), t.strings.ignoreText && (n += ' <div class="app-redirect-ignore">' + t.strings.ignoreText + "</div> "), t.strings.bottomText && (n += ' <div class="app-redirect-bottom-text">' + t.strings.bottomText + "</div> "), n + "</div>" }, n.templates.email_capture = function(t) { var n = '<div class="vp-email-capture-wrapper"><div class="vp-email-capture"> '; return t.customLogo && (n += ' <div class="vp-email-capture-logoWrap"><img src="', n += this.escape(t.customLogo) || "", n += '" alt="" class="vp-email-capture-logo"></div> '), n += ' <h1 class="vp-email-capture-title">', n += this.escape(t.text) || "", n += "</h1> ", t.subtitle && (n += ' <p class="vp-email-capture-subtitle">', n += this.escape(t.subtitle) || "", n += "</p> "), n += ' <form class="vp-email-capture-form" action="' + t.action + '" method="post" novalidate><div class="vp-validation-bubble hidden"><div class="vp-validation-bubble-arrowClipper"><div class="vp-validation-bubble-arrow"></div></div><div class="vp-validation-bubble-message"></div></div><input class="vp-email-capture-form-input vp-email-capture-form-input--email js-email-capture-form-input" type="email" name="email" placeholder="' + t.strings.email + '" aria-label="' + t.strings.email + '" required aria-required="true"><input class="vp-email-capture-form-input" type="text" name="name" placeholder="' + t.strings.fullName + '" aria-label="' + t.strings.fullName + '" pattern="^[^!@#$%^*+=?<>]+$" maxlength="180"><input type="hidden" name="referrer" value="' + t.referrer + '"><input type="hidden" name="signature" value=""><input type="hidden" name="time" value=""><input type="hidden" name="expires" value=""><div class="vp-email-capture-form-buttons"> ', t.allowSkip && (n += ' <input class="vp-email-capture-form-button vp-email-capture-form-button--cancel" type="button" value="' + t.strings.nothanks + '"> '), n += ' <input class="vp-email-capture-form-button vp-email-capture-form-button--submit" type="submit" value="' + t.strings.submit + '"></div></form><div class="vp-email-capture-disclaimer"> ' + t.strings.disclaimer + ' </div></div><div class="vp-email-capture-confirm vp-email-capture-confirm-hidden"><div class="vp-email-capture-confirm-box"><h1 class="vp-email-capture-confirm-title">', (n += this.escape(t.confirmation) || "") + "</h1></div></div></div>" }, n.templates.error = function(t) { var n = '<div class="vp-overlay-content error"> '; return t.title && (n += " <h1>" + t.title + "</h1> "), t.message && (n += " <p>" + t.message + "</p> "), n + "</div>" }, n.templates.help = function(t) { var n = '<div class="vp-overlay-content help"><h1>' + t.strings.title + '</h1><dl><div class="volume-up secondary"><dt class="arrow">↑</dt><dd>' + t.strings.volumeUp + '</dd></div><div class="volume-down secondary"><dt class="arrow">↓</dt><dd>' + t.strings.volumeDown + '</dd></div><div class="scrub-forward secondary"><dt class="arrow">→</dt><dd>' + t.strings.scrubForward + '</dd></div><div class="scrub-backwards secondary"><dt class="arrow">←</dt><dd>' + t.strings.scrubBackwards + '</dd></div><div class="like"><dt>L</dt><dd>' + t.strings.like + '</dd></div><div class="share"><dt>S</dt><dd>' + t.strings.share + '</dd></div><div class="watch-later"><dt>W</dt><dd>' + t.strings.watchLater + '</dd></div><div class="toggle-captions"><dt>C</dt><dd>' + t.strings.captions + '</dd></div><div class="toggle-prefs"><dt>H</dt><dd>' + t.strings.prefs + '</dd></div><div class="fullscreen"><dt>F</dt><dd>' + t.strings.fullscreen + "</dd></div> "; return t.onSite || (n += '<div class="view-on-vimeo"><dt>V</dt><dd>' + t.strings.viewOnVimeo + "</dd></div>"), n + " </dl></div>" }, n.templates.outro_email = function(t) { var n = '<div class="vp-outro-bg"'; return t.bgimage && (n += ' style="background-image: url(' + t.bgimage + ');"'), n + '></div><div class="vp-outro-content vp-outro-content--email vp-outro-shade js-outro-content"></div>' }, n.templates.outro_image = function(t) { var n = '<div class="vp-outro-content vp-outro-content--image js-outro-content"> '; return t.url && (n += '<a class="vp-outro-imageLink js-imageLink" href="' + t.url + '" target="_blank" rel="noopener" aria-describedby="new-window">'), t.bgimage && (n += '<div class="vp-outro-image" style="background-image: url(' + t.bgimage + ');"', t.alt_text && (n += ' aria-label="', n += this.escape(t.alt_text) || "", n += '" role="img"'), n += "></div>"), t.url && (n += "</a>"), n + "</div>" }, n.templates.outro_link = function(t) { var n = '<div class="vp-outro-bg"'; return t.bgimage && (n += ' style="background-image: url(' + t.bgimage + ');"'), n += '></div><div class="vp-outro-content vp-outro-content--link vp-outro-shade js-outro-content"><div class="vp-outro-linkWrapper js-outro-linkWrapper"> ', t.title && (n += '<h1 class="vp-outro-textTitle js-outro-title">', n += this.escape(t.title) || "", n += "</h1>"), t.description && (n += '<p class="vp-outro-textDescription js-outro-text">', n += this.escape(t.description) || "", n += "</p>"), t.text && t.url && (n += ' <div class="vp-outro-buttonWrap"><a class="vp-outro-button js-cta" href="' + t.url + '" target="_blank" rel="noopener" aria-describedby="new-window"><span>', n += this.escape(t.text) || "", n += "</span></a></div> "), t.text2 && t.url2 && (n += ' <div class="vp-outro-linkWrap js-outro-linkWrap"><a class="vp-outro-link js-link" href="' + t.url2 + '" target="_blank" rel="noopener" aria-describedby="new-window">', n += this.escape(t.text2) || "", n += "</a></div> "), n + " </div></div>" }, n.templates.outro_nothing = function(t) { return '<div class="vp-outro-bg"></div><div class="vp-outro-content vp-outro-content--nothing vp-outro-shade js-outro-content"></div>' }, n.templates.outro_share = function(t) { var n = '<div class="vp-outro-bg"'; return t.bgimage && (n += ' style="background-image: url(' + t.bgimage + ');"'), n += '></div><div class="vp-outro-content vp-outro-content--share vp-outro-shade js-outro-content"></div><nav class="panel-nav"><button type="button" class="vp-nav-prevButton js-back cloaked" aria-label="' + t.strings.back + '">', (n += this.render("icon_prev") || "") + "</button></nav>" }, n.templates.outro_staticimage = function(t) { var n = '<div class="vp-outro-content vp-outro-content--staticImage js-outro-content"><div class="vp-outro-staticImageWrapper"> '; return t.url && (n += '<a class="vp-outro-staticImageLink" href="' + t.url + '" target="_blank" rel="noopener" aria-describedby="new-window">'), n += ' <img class="vp-outro-staticImage" src="' + t.svg_url + '"> ', t.url && (n += "</a>"), n + " </div></div>" }, n.templates.outro_text = function(t) { return '<div class="vp-outro-content vp-outro-content--text vp-outro-shade js-outro-content"><div class="vp-outro-textWrapper"><div class="vp-outro-text">' + t.text + "</div></div></div>" }, n.templates.outro_videos = function(t) {
                var n = '<div class="vp-outro-bg"';
                t.bgimage && (n += ' style="background-image: url(' + t.bgimage + ');"'), n += '></div><div class="vp-outro-content vp-outro-content--videos vp-outro-shade js-outro-content"> ';
                for (var i = 0; i < t.contexts.length; i++) {
                    var e = t.contexts[i];
                    n += ' <div class="vp-outro-videosSection vp-outro-videosSection--' + e.videos.length, e.promoted && (n += " vp-outro-videosSection--promoted"), n += '"><div class="vp-outro-videosHeaderWrapper"><header class="vp-outro-videosHeader"><h1 class="vp-outro-videosTitle">' + e.context + "</h1> ", t.showFollowButton && !e.promoted && (n += ' <div class="vp-outro-followWrap js-outro-followWrap"><button type="button" class="vp-outro-follow js-outro-follow" aria-label="' + t.strings.follow + '" aria-pressed="', t.following ? n += "true" : n += "false", n += '"> ', n += this.render("icon_follow") || "", n += ' <span class="vp-outro-follow-text" data-label-follow="' + t.strings.follow + '" data-label-following="' + t.strings.following + '" data-label-unfollow="' + t.strings.unfollow + '"></span></button></div> '), n += ' </header></div><ul class="vp-outro-videos vp-outro-videos--' + e.videos.length + '"> ';
                    for (var r = 0; r < e.videos.length; r++) n += ' <li><a class="vp-outro-videoLink js-videoLink', 1 == i && (n += " hovered"), n += '" href="' + e.videos[r].url + '" ', t.target && (n += ' target="_blank" rel="noopener" '), n += ' data-video-id="' + e.videos[r].id + '" aria-describedby="new-window" ><div class="vp-outro-imgWrapper" style="background-image: url(' + e.videos[r].thumbnail + ')"></div><header class="vp-outro-videoHeader" id="vp-outro-videoHeader"><h1 class="vp-outro-videoTitle">', n += this.escape(e.videos[r].title) || "", n += "</h1> ", e.videos[r].byline && (n += ' <h2 class="vp-outro-videoByline">', n += this.escape(e.videos[r].byline) || "", n += "</h2> "), n += " </header></a> ";
                    n += " </ul></div> "
                }
                return n + "</div>"
            }, n.templates.outro_vod = function(t) {
                var n = '<div class="vp-outro-content vp-outro-content--vod vp-outro-shade js-outro-content"><div class="vp-outro-vodWrapper"><h1 class="vp-outro-vodHeader" aria-describedby="new-window"><a href="' + t.url + '" target="_blank" rel="noopener">';
                n += this.escape(t.title) || "", n += "</a></h1> ";
                var i = t.countries,
                    e = t.country;
                if (this.helpers.isAvailableInCountry(i, e))
                    if (t.purchased) n += ' <a class="vp-outro-vodButton vp-outro-vodButton--watch js-vod-watch" role="button" href="' + t.url + '" target="_blank" rel="noopener" aria-describedby="new-window">' + t.strings.watch + "</a> ";
                    else {
                        if (!t.isComingSoon) {
                            n += ' <ul class="vp-outro-vod"> ';
                            for (var r = 0; r < t.buttons.length; r++) {
                                n += ' <li class="vp-outro-vod-item"><a class="vp-outro-vodButton vp-outro-vodButton--' + t.buttons[r].type + ' js-vod-button" role="button" href="' + t.url + "#buy=" + t.buttons[r].product_id + '" target="_blank" rel="noopener" data-product-id="' + t.buttons[r].product_id + '" aria-describedby="new-window" ><div class="vp-outro-vodIcon"> ', "buy" === t.buttons[r].type ? n += this.render("icon_vod_download") || "" : "rent" === t.buttons[r].type ? n += this.render("icon_vod_rent") || "" : "subscribe" === t.buttons[r].type ? n += this.render("icon_vod_subscribe") || "" : n += this.render("icon_vod") || "", n += " </div> ";
                                var o = t.currency,
                                    u = t.buttons[r];
                                n += " <p>" + this.helpers.formatVodLabel(t.translationMap, "outro_string", o, u) + "</p></a></li> "
                            }
                            n += " </ul> "
                        }(t.isPreorder || t.isComingSoon) && (n += " <p>" + t.strings.preRelease + "</p> ")
                    }
                return n + " </div></div>"
            }, n.templates.password = function(t) { return '<div class="vp-overlay-content password form"><h1 class="header">' + t.strings.title + '</h1><p class="subtitle">' + t.strings.subtitle + '</p><form action="' + t.action + '" method="post" novalidate><div class="vp-validation-bubble hidden"><div class="vp-validation-bubble-arrow-clipper"><div class="vp-validation-bubble-arrow"></div></div><div class="vp-validation-bubble-message"></div></div><input class="js-password" type="password" name="password" placeholder="' + t.strings.password + '" required aria-required="true" aria-label="' + t.strings.password + '"><input type="submit" value="' + t.strings.watch + '"></form></div>' }, n.templates.private_locked = function(t) { return '<div class="vp-overlay-content login"><h1>' + t.strings.title + '</h1><p class="subtitle">' + t.strings.subtitle + '</p><a href="' + t.action + '" class="popup js-login" target="_blank" rel="noopener" role="button" aria-describedby="new-window">' + t.strings.logIn + "</a></div>" }, n.templates.private_unlocked = function(t) { return '<div class="vp-overlay-content form unlocked"><h1>' + t.strings.title + '</h1><p class="subtitle">' + t.strings.subtitle + '</p><button class="js-watch" type="button">' + t.strings.watch + "</button></div>" }, n.templates.share = function(t) { var n = '<div class="vp-share-wrapper js-share"><section class="vp-share-screen vp-share-screen--share' + (t.embedOnly ? " cloaked" : "") + ' js-share-screen"><h1 class="vp-share-title vp-share-title--share">' + t.strings.share + '</h1><ul class="vp-share-buttons"><li class="vp-share-buttons-item"><a class="vp-share-button vp-share-button--facebook js-facebook" href="' + t.playerShareUrl + '/facebook" target="_blank" rel="noopener" role="button" aria-describedby="new-window" > ' + t.facebookIcon + ' </a><li class="vp-share-buttons-item"><a class="vp-share-button vp-share-button--twitter js-twitter" href="' + t.playerShareUrl + '/twitter" target="_blank" rel="noopener" role="button" aria-describedby="new-window" > ' + t.twitterIcon + ' </a><li class="vp-share-buttons-item"><a class="vp-share-button vp-share-button--tumblr js-tumblr" href="' + t.playerShareUrl + '/tumblr" target="_blank" rel="noopener" role="button" aria-describedby="new-window" > ' + t.tumblrIcon + " </a> "; return t.url && (n += ' <li class="vp-share-buttons-item"><a class="vp-share-button vp-share-button--email js-email" href="mailto:?subject=', n += encodeURIComponent(t.strings.emailSubject) || "", n += "&amp;body=", n += encodeURIComponent(t.strings.emailBody) || "", n += '" role="button" aria-describedby="new-window" > ' + t.emailIcon + " </a> "), n += " </ul> ", t.embed && (n += ' <ul class="vp-share-buttons"><li class="vp-share-buttons-item"><a class="vp-share-button vp-share-button--embed js-embed" href="' + t.url + '#share" target="_blank" rel="noopener" role="button" > ' + t.embedIcon + " </a></li></ul> "), t.url && (n += ' <p class="vp-share-footnote vp-share-footnote--share"><a class="clip_url" href="' + t.shareUrl + '" target="_blank" rel="noopener" aria-describedby="new-window">' + t.shareUrl + "</a></p> "), n += " </section> ", t.embed && (n += ' <section class="vp-share-screen vp-share-screen--embed' + (t.embedOnly ? "" : " cloaked") + ' js-embed-screen"><div class="vp-share-embedWrapper"><h1 class="vp-share-title vp-share-title--embed">' + t.strings.embedTitle + '</h1><p class="vp-share-subtitle vp-share-subtitle--embed">' + t.strings.embedSubtitle + '</p><div class="vp-share-embedCode form"><div><input class="vp-share-embedInput js-embed-input" type="text" name="embed_code" title="Embed code" value="' + t.embedCode + '" spellcheck="false" aria-readonly="true"', t.readOnly && (n += " readonly"), n += "></div> ", t.copyButton && (n += ' <button type="button" class="vp-share-embedCopy js-embedCopy" data-clipboard-text=\'' + t.embedCode + "' data-label=\"" + t.strings.copy + '" data-success-label="' + t.strings.copySuccess + '">' + t.strings.copy + "</button> "), n += " </div> ", t.customizeEmbed && (n += ' <p class="vp-share-footnote vp-share-footnote--embed">' + t.strings.customize + "</p> "), n += " </div></section> "), n + "</div>" }, n.templates.threesixty_reminder = function(t) { var n = '<div class="intro-wrap text-only"><div> '; return t.showArrows && (n += ' <div class="key-wrapper"><div class="key-row"><div class="key"><div class="arrow arrow-top"></div></div></div><div class="key-row"><div class="key"><div class="arrow arrow-left"></div></div><div class="key"><div class="arrow arrow-down"></div></div><div class="key"><div class="arrow arrow-right"></div></div></div></div> '), n + " <div>" + t.text + "</div></div></div>" }, n.templates.time_series_graph = function(t) { return '<svg width="' + t.width + '" height="' + t.height + '" viewBox="0 0 ' + t.width + " " + t.height + '"><g><polyline stroke="white" fill="none" points="' + t.points + '"></polyline></g><g> ' + t.markers + " </g></svg>" }, n.templates.title_byline_badge = function(t) { var n = ""; return t.displayBadge && (n += "&nbsp;", t.link && (n += '<a tabindex="-1" href="' + t.link + '"', t.targetBlank && (n += ' target="_blank" rel="noopener" aria-describedby="new-window"'), n += ">"), n += ' <span class="byline-badge ' + t.cssClass + '">' + t.cssClass + "</span>", t.link && (n += "</a>"), n += ""), n + "" }, n.templates.title_owner_byline = function(t) { var n = ""; return t.linkToOwner ? (n += '<a href="' + t.ownerLink + '"', t.targetBlank && (n += ' target="_blank" rel="noopener"'), n += ' data-track-click="' + t.ClickTargets.VIDEO_BYLINE + '" aria-describedby="new-window">', n += this.escape(t.owner) || "", n += "</a>") : (n += '<span class="user">', n += this.escape(t.owner) || "", n += "</span>"), n + "" }, n.templates.title = function(t) { var n = '<header class="vp-title-header"> '; return t.showPortrait && (n += ' <div class="vp-portrait" aria-hidden="true"> ', t.linkToOwner && (n += '<a tabindex="-1" href="' + t.ownerLink + '"', t.targetBlank && (n += ' target="_blank" rel="noopener"'), n += ">"), n += ' <img src="' + t.portraitImg + '" alt="' + t.portraitAlt + '" width="60" height="60" data-track-click="' + t.ClickTargets.VIDEO_PORTRAIT + '"> ', t.linkToOwner && (n += "</a>"), n += " </div> "), n += ' <div class="headers"> ', t.showTitle && (n += ' <h1 aria-describedby="new-window"> ', t.showTitleLink && (n += '<a href="' + t.titleLink + '"', t.targetBlank && (n += ' target="_blank" rel="noopener"'), n += ' data-track-click="' + t.ClickTargets.VIDEO_TITLE + '">'), n += this.escape(t.title) || "", t.showTitleLink && (n += "</a>"), t.is360 && (n += '<div class="threesix-badge-title">360</div>'), t.hasHDR && (n += '<div class="hashdr-badge-title">HDR</div>'), n += " </h1> "), t.showByline && (n += ' <div class="sub-title"><h2 class="byline-from">' + t.strings.byline + "</h2> ", t.is360 && !t.showTitle && (n += ' <div class="threesix-badge-byline">360</div> '), t.hasHDR && !t.showTitle && (n += ' <div class="hashdr-badge-byline">HDR</div> '), n += " </div> "), !t.is360 || t.showByline || t.showTitle || (n += ' <div class="threesix-badge-loner">360</div> '), !t.hasHDR || t.showByline || t.showTitle || (n += ' <div class="hashdr-badge-loner">HDR</div> '), n + " </div></header>" }, n.templates.unmute_button = function(t) { var n = '<button type="button" class="vp-unmute-button"> '; return (n += this.render("icon_muted") || "") + ' <span class="vp-unmute-button-title">' + t.title + "</span></button>" }, t.exports ? t.exports = n : window.Aftershave = n
        }()
    }));

    function vd(t, n) {
        var i, e = t.querySelector(".vp-shade"),
            r = t.querySelector(".vp-spin");

        function o() { clearTimeout(i), e.classList.add("vp-shade-invisible"), r.classList.add("vp-spin-invisible") }
        return n.on(_i.BUFFER_STARTED, (function() { clearTimeout(i), i = setTimeout((function() { e.classList.remove("vp-shade-invisible"), r.classList.remove("vp-spin-invisible") }), 600) })), n.on([_i.BUFFER_ENDED, Fc.He], o), Tf.on(_f.buffering, (function() { r.classList.remove("vp-spin-invisible") })), Tf.on([_f.playing, _f.paused], (function() { clearTimeout(i), r.classList.add("vp-spin-invisible") })), Tf.on(_f.connected, (function() { e.classList.remove("vp-shade-invisible") })), Tf.on(_f.disconnected, (function() { o() })), {}
    }
    var pd = function(t) {
        return function(n) {
            for (var i = arguments.length, e = new Array(i > 1 ? i - 1 : 0), r = 1; r < i; r++) e[r - 1] = arguments[r];
            return e.forEach((function(i) {
                for (var e in i) {
                    var r = Object.getOwnPropertyDescriptor(i, e);
                    Object.defineProperty(n, e, Object.assign(r, t))
                }
            })), n
        }
    }({ enumerable: !0, configurable: !0, writeable: !1 });

    function md() { return void 0 !== window.performance && "function" == typeof window.performance.now ? window.performance.now() : Date.now() }

    function wd(t) { return bd() - t }

    function bd() { return parseInt(md() / 1e3, 10) }

    function gd(t) { return parseInt(Date.now() / 1e3, 10) - t }

    function yd(t) {
        var n = t.getHours(),
            i = t.getMinutes(),
            e = n >= 12 ? "PM" : "AM";
        return (n = (n %= 12) || 12) + ":" + (i = i < 10 ? "0" + i : i) + " " + e
    }

    function _d(t, n) {
        var i = Math.floor(t / 3600 % 60),
            e = Math.floor(t / 60 % 60);
        if (t = Math.floor(t % 60), n) { var r = t + " second" + (1 === t ? "" : "s"); return e > 0 && (r = e + " minute" + (1 === e ? "" : "s") + ", " + r), i > 0 && (r = i + " hour" + (1 === i ? "" : "s") + ", " + r), r }
        return (i > 0 ? i + ":" : "") + kd(e, 2) + ":" + kd(t, 2)
    }

    function kd(t, n, i) { return t = String(t), new Array(n - t.length + 1).join(i || "0") + t }

    function Ed(t, n, i) {
        var e = !0,
            r = !0;
        if ("function" != typeof t) throw new TypeError("Expected a function");
        return jt(i) && (e = "leading" in i ? !!i.leading : e, r = "trailing" in i ? !!i.trailing : r), vf(t, n, { leading: e, maxWait: n, trailing: r })
    }
    var Td = function() {
            if (void 0 !== L) return L;

            function t(t, n) { var i = -1; return t.some((function(t, e) { return t[0] === n && (i = e, !0) })), i }
            return (function() {
                function n() { this.Tl = [] }
                return Object.defineProperty(n.prototype, "size", { get: function() { return this.Tl.length }, enumerable: !0, configurable: !0 }), n.prototype.get = function(n) {
                    var i = t(this.Tl, n),
                        e = this.Tl[i];
                    return e && e[1]
                }, n.prototype.set = function(n, i) { var e = t(this.Tl, n);~e ? this.Tl[e][1] = i : this.Tl.push([n, i]) }, n.prototype.delete = function(n) {
                    var i = this.Tl,
                        e = t(i, n);
                    ~e && i.splice(e, 1)
                }, n.prototype.has = function(n) { return !!~t(this.Tl, n) }, n.prototype.clear = function() { this.Tl.splice(0) }, n.prototype.forEach = function(t, n) {
                    void 0 === n && (n = null);
                    for (var i = 0, e = this.Tl; i < e.length; i++) {
                        var r = e[i];
                        t.call(n, r[1], r[0])
                    }
                }, n
            }())
        }(),
        Sd = "undefined" != typeof window && "undefined" != typeof document && window.document === document,
        xd = "undefined" != typeof global && global.Math === Math ? global : "undefined" != typeof self && self.Math === Math ? self : "undefined" != typeof window && window.Math === Math ? window : Function("return this")(),
        Md = "function" == typeof requestAnimationFrame ? requestAnimationFrame.bind(xd) : function(t) { return setTimeout((function() { return t(Date.now()) }), 1e3 / 60) },
        Ad = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
        Cd = "undefined" != typeof MutationObserver,
        Rd = function() {
            function t() {
                this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function(t, n) {
                    var i = !1,
                        e = !1,
                        r = 0;

                    function o() { i && (i = !1, t()), e && a() }

                    function u() { Md(o) }

                    function a() {
                        var t = Date.now();
                        if (i) {
                            if (t - r < 2) return;
                            e = !0
                        } else i = !0, e = !1, setTimeout(u, 20);
                        r = t
                    }
                    return a
                }(this.refresh.bind(this))
            }
            return t.prototype.addObserver = function(t) {~this.observers_.indexOf(t) || this.observers_.push(t), this.connected_ || this.connect_() }, t.prototype.removeObserver = function(t) {
                var n = this.observers_,
                    i = n.indexOf(t);
                ~i && n.splice(i, 1), !n.length && this.connected_ && this.disconnect_()
            }, t.prototype.refresh = function() { this.updateObservers_() && this.refresh() }, t.prototype.updateObservers_ = function() { var t = this.observers_.filter((function(t) { return t.gatherActive(), t.hasActive() })); return t.forEach((function(t) { return t.broadcastActive() })), t.length > 0 }, t.prototype.connect_ = function() { Sd && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), Cd ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, { attributes: !0, childList: !0, characterData: !0, subtree: !0 })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0) }, t.prototype.disconnect_ = function() { Sd && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1) }, t.prototype.onTransitionEnd_ = function(t) {
                var n = t.propertyName,
                    i = void 0 === n ? "" : n;
                Ad.some((function(t) { return !!~i.indexOf(t) })) && this.refresh()
            }, t.getInstance = function() { return this.instance_ || (this.instance_ = new t), this.instance_ }, t.instance_ = null, t
        }(),
        Od = function(t, n) {
            for (var i = 0, e = Object.keys(n); i < e.length; i++) {
                var r = e[i];
                Object.defineProperty(t, r, { value: n[r], enumerable: !1, writable: !1, configurable: !0 })
            }
            return t
        },
        Id = function(t) { return t && t.ownerDocument && t.ownerDocument.defaultView || xd },
        jd = Fd(0, 0, 0, 0);

    function Dd(t) { return parseFloat(t) || 0 }

    function Ld(t) { for (var n = [], i = 1; i < arguments.length; i++) n[i - 1] = arguments[i]; return n.reduce((function(n, i) { return n + Dd(t["border-" + i + "-width"]) }), 0) }
    var Pd = "undefined" != typeof SVGGraphicsElement ? function(t) { return t instanceof Id(t).SVGGraphicsElement } : function(t) { return t instanceof Id(t).SVGElement && "function" == typeof t.getBBox };

    function Nd(t) {
        return Sd ? Pd(t) ? function(t) { var n = t.getBBox(); return Fd(0, 0, n.width, n.height) }(t) : function(t) {
            var n = t.clientWidth,
                i = t.clientHeight;
            if (!n && !i) return jd;
            var e = Id(t).getComputedStyle(t),
                r = function(t) {
                    for (var n = {}, i = 0, e = ["top", "right", "bottom", "left"]; i < e.length; i++) {
                        var r = e[i],
                            o = t["padding-" + r];
                        n[r] = Dd(o)
                    }
                    return n
                }(e),
                o = r.left + r.right,
                u = r.top + r.bottom,
                a = Dd(e.width),
                s = Dd(e.height);
            if ("border-box" === e.boxSizing && (Math.round(a + o) !== n && (a -= Ld(e, "left", "right") + o), Math.round(s + u) !== i && (s -= Ld(e, "top", "bottom") + u)), ! function(t) { return t === Id(t).document.documentElement }(t)) {
                var c = Math.round(a + o) - n,
                    f = Math.round(s + u) - i;
                1 !== Math.abs(c) && (a -= c), 1 !== Math.abs(f) && (s -= f)
            }
            return Fd(r.left, r.top, a, s)
        }(t) : jd
    }

    function Fd(t, n, i, e) { return { x: t, y: n, width: i, height: e } }
    var Ud = function() {
            function t(t) { this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = Fd(0, 0, 0, 0), this.target = t }
            return t.prototype.isActive = function() { var t = Nd(this.target); return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight }, t.prototype.broadcastRect = function() { var t = this.contentRect_; return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t }, t
        }(),
        Vd = function(t, n) {
            var i = function(t) {
                var n = t.x,
                    i = t.y,
                    e = t.width,
                    r = t.height,
                    o = "undefined" != typeof DOMRectReadOnly ? DOMRectReadOnly : Object,
                    u = Object.create(o.prototype);
                return Od(u, { x: n, y: i, width: e, height: r, top: i, right: n + e, bottom: r + i, left: n }), u
            }(n);
            Od(this, { target: t, contentRect: i })
        },
        Bd = function() {
            function t(t, n, i) {
                if (this.activeObservations_ = [], this.observations_ = new Td, "function" != typeof t) throw new TypeError("The callback provided as parameter 1 is not a function.");
                this.callback_ = t, this.controller_ = n, this.callbackCtx_ = i
            }
            return t.prototype.observe = function(t) {
                if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                if ("undefined" != typeof Element && Element instanceof Object) {
                    if (!(t instanceof Id(t).Element)) throw new TypeError('parameter 1 is not of type "Element".');
                    var n = this.observations_;
                    n.has(t) || (n.set(t, new Ud(t)), this.controller_.addObserver(this), this.controller_.refresh())
                }
            }, t.prototype.unobserve = function(t) {
                if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                if ("undefined" != typeof Element && Element instanceof Object) {
                    if (!(t instanceof Id(t).Element)) throw new TypeError('parameter 1 is not of type "Element".');
                    var n = this.observations_;
                    n.has(t) && (n.delete(t), n.size || this.controller_.removeObserver(this))
                }
            }, t.prototype.disconnect = function() { this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this) }, t.prototype.gatherActive = function() {
                var t = this;
                this.clearActive(), this.observations_.forEach((function(n) { n.isActive() && t.activeObservations_.push(n) }))
            }, t.prototype.broadcastActive = function() {
                if (this.hasActive()) {
                    var t = this.callbackCtx_,
                        n = this.activeObservations_.map((function(t) { return new Vd(t.target, t.broadcastRect()) }));
                    this.callback_.call(t, n, t), this.clearActive()
                }
            }, t.prototype.clearActive = function() { this.activeObservations_.splice(0) }, t.prototype.hasActive = function() { return this.activeObservations_.length > 0 }, t
        }(),
        Hd = void 0 !== P ? new P : new Td,
        qd = function t(n) {
            if (!(this instanceof t)) throw new TypeError("Cannot call a class as a function.");
            if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
            var i = Rd.getInstance(),
                e = new Bd(n, i, this);
            Hd.set(this, e)
        };
    ["observe", "unobserve", "disconnect"].forEach((function(t) { qd.prototype[t] = function() { var n; return (n = Hd.get(this))[t].apply(n, arguments) } }));
    var Wd = void 0 !== xd.ResizeObserver ? xd.ResizeObserver : qd;

    function zd(t, n, i) {
        var e = u() ? i.parentElement : i,
            r = Ed(o, 150);

        function o() {
            var t = rc(e),
                i = t.width,
                r = t.height;
            n.dispatch(function(t, n) { return { type: "CONTAINER_RESIZE", payload: { width: t, height: n } } }(i, r))
        }

        function u() { return i.parentElement === document.body }

        function a(t) {
            var n = t.size,
                r = t.ratio,
                o = t.bottom;
            u() && (e.classList.toggle("vp-center", "contain" === n), function(t, n) {
                [].concat(["height", "max-width", "max-height", "bottom"]).map((function(n) { return t.style.removeProperty(n) }))
            }(i), "contain" !== n ? o > 0 && wc(i, { height: "calc(100% - ".concat(o, "px)"), bottom: "".concat(o / 2, "px") }) : wc(i, o > 0 ? { maxWidth: "calc((100vh - ".concat(o, "px) / ").concat(r, ")"), maxHeight: "calc(100vh - ".concat(o, "px)"), height: "calc(".concat(r, " * 100vw)"), bottom: "".concat(o / 2, "px") } : { maxWidth: "calc(100vh / ".concat(r, ")"), height: "calc(".concat(r, " * 100vw)") }))
        }
        n.watch("ui.layout.bottom", (function(n) { t.events.fire(Fc.Sf, [{ bottom: n }]) })), n.watch("ui.layout.settings", a), a(n.get("ui.layout.settings")), new Wd(r).observe(e), window.addEventListener("orientationchange", r), t.events.on(Fc.dc, r), t.events.on(Fc.vc, r), o()
    }

    function Gd(t, n, i) { this.constructorName = "MessageApiError", this.message = t, this.name = n, this.source = i }

    function $d(t) { return t }

    function Kd(t) { if (!t || "" === t) return {}; if ("object" === V(t)) return t; try { return JSON.parse(t) } catch (t) { return {} } }

    function Yd(t) {}
    Gd.prototype = new Error;
    var Jd = { captureException: function(t) {}, captureMessage: function(t) {}, captureBreadcrumb: function() {} },
        Xd = Jd,
        Zd = function(t) { Xd = Object.assign({}, Jd, t) },
        Qd = function(t, n) {
            var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "backbone",
                e = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "info";
            return Xd.captureBreadcrumb(t, n, i, e)
        };

    function th(t) {
        var n = function(t) { var n = document.referrer || t; try { n = decodeURIComponent(n) } catch (t) { n = unescape(n) } return n }(t),
            i = {},
            e = {},
            o = { parseMessage: Kd, buildMessage: $d, logError: Yd },
            u = {},
            a = {get methods() { return i },
                extendMethods: function() {
                    for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) n[e] = arguments[e];
                    ot.apply(void 0, [i].concat(n))
                },
                get listeners() { return u },
                set listeners(t) { u = t },
                emit: function(t) {
                    for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), e = 1; e < n; e++) i[e - 1] = arguments[e];
                    if (s.apply(void 0, [t].concat(i))) {
                        var r = { event: t };
                        i && i[0] && (r.data = i[0]), c(r)
                    }
                },
                filter: function(t, n) { n || "function" != typeof t || (n = t, t = null), t ? function(t, n) { e.event = e.event || {}, e.event[t] = e.event[t] || [], e.event[t].push(n) }(t, n) : function(t) { e.global = e.global || [], e.global.push(t) }(n) },
                hooks: function() { for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++) n[i] = arguments[i]; return ot.apply(void 0, [o].concat(n)) }
            };

        function s() {
            if (e) {
                for (var t, n, i = arguments.length, r = new Array(i), o = 0; o < i; o++) r[o] = arguments[o];
                if (e.global && e.global.length)
                    for (t = 0; t < e.global.length; t++)
                        if (!(n = e.global[t]).apply(n, r)) return !1;
                var u = r[0];
                if (e.event && e.event[u] && e.event[u].length)
                    for (t = 0; t < e.event[u].length; t++)
                        if (!(n = e.event[u][t]).apply(n, r)) return !1
            }
            return !0
        }

        function c(t) {
            if (window.postMessage && window.parent.postMessage && (t = o.buildMessage(t), window.parent != window)) try {
                var i = n && "null" !== n ? n : "*";
                window.parent.postMessage(t, i)
            } catch (t) {}
        }
        return window.addEventListener("message", (function(t) {
            if (t.source === window.parent) {
                var n = o.parseMessage(t.data),
                    e = n.method,
                    u = n.value;
                if (!(void 0 === e || "string" != typeof e || e.indexOf("_") > -1)) try {
                    var a = function(t, n) {
                        if (!t) return null;
                        var i = Object.getOwnPropertyDescriptor(n, t);
                        if (i && "function" == typeof i.value) return i.value;
                        if (i && "function" == typeof i.get) return i.get;
                        var e = t.substr(0, 3),
                            r = t.substr(3, 1).toLowerCase() + t.substr(4);
                        return i = Object.getOwnPropertyDescriptor(n, r), "get" === e && i && "function" == typeof i.get ? i.get : "set" === e && i && "function" == typeof i.set ? i.set : null
                    }(e, i);
                    if (!a) throw new Gd("“".concat(t, "” is not a valid method. Valid methods are: ").concat(function(t) { return Object.keys(t).reduce((function(n, i) { var e = Object.getOwnPropertyDescriptor(t, i); return "function" == typeof e.value ? (n.push(i), n) : ("function" == typeof e.get && n.push("get" + i.charAt(0).toUpperCase() + i.slice(1)), "function" == typeof e.set && n.push("set" + i.charAt(0).toUpperCase() + i.slice(1)), n) }), []).sort() }(i).join(", "), "."), "TypeError", e);
                    Qd("API message received", n, "api"), r.resolve(a.call(t, u)).then((function(t) { return c({ method: e, value: null == t ? u : t }) })).catch(o.logError)
                } catch (t) { o.logError(t) }
            }
        }), !1), a
    }
    var nh = self !== top,
        ih = function() {
            var t = document.createElement("video"),
                n = { request: ["requestFullscreen", "webkitRequestFullscreen", "webkitRequestFullScreen", "mozRequestFullScreen", "msRequestFullscreen"], exit: ["exitFullscreen", "webkitCancelFullScreen", "webkitExitFullscreen", "mozCancelFullScreen", "msExitFullscreen"], enabled: ["fullscreenEnabled", "webkitFullscreenEnabled", "mozFullScreenEnabled", "msFullscreenEnabled"], element: ["fullscreenElement", "webkitFullscreenElement", "webkitCurrentFullScreenElement", "mozFullScreenElement", "msFullscreenElement"], change: ["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "MSFullscreenChange"], error: ["fullscreenerror", "webkitfullscreenerror", "mozfullscreenerror", "MSFullscreenError"] },
                i = {};
            for (var e in n)
                for (var r = 0, o = n[e].length; r < o; r++)
                    if (n[e][r] in t || n[e][r] in document || "on" + n[e][r].toLowerCase() in document) { i[e] = n[e][r]; break }
            return i
        }(),
        eh = { ENTER: "enter", EXIT: "exit", CHANGE: "change", ERROR: "error" },
        rh = [],
        oh = {};

    function uh() {
        var t = Array.prototype.slice.apply(arguments),
            n = t.shift();
        oh[n].forEach((function(n) { "function" == typeof n && n.apply(n, t) }))
    }

    function ah(t) { return function(n, i) {-1 !== rh.indexOf(n) && t.call(this, n, i) } }

    function sh(t) {
        var n = null;
        if ("VIDEO" === t.tagName) n = t;
        else {
            var i = t.getElementsByTagName("video");
            i[0] && (n = i[0])
        }
        return n
    }
    Object.keys(eh).forEach((function(t) { rh.push(eh[t]), oh[eh[t]] = [] }));
    var ch = null,
        fh = function() {},
        lh = [];

    function dh(t) { var n = sh(t); if (n && n.webkitEnterFullscreen) { try { n.readyState < n.HAVE_METADATA ? (n.addEventListener("loadedmetadata", (function i() { n.removeEventListener("loadedmetadata", i, !1); try { n.webkitEnterFullscreen() } catch (n) { return ph("cannot_enter_fullscreen", t) } }), !1), n.load()) : n.webkitEnterFullscreen(), ch = n } catch (n) { return ph("not_supported", t) } return !0 } return ph(void 0 === ih.request ? "not_supported" : "not_enabled", t) }
    var hh = function(t) {
            var n = lh[lh.length - 1];
            n && (t !== n.element && t !== ch || !n.hasEntered) && ("VIDEO" === t.tagName && (ch = t), 1 === lh.length && mh.onenter(mh.element), n.enter.call(n.element, t || n.element), n.hasEntered = !0, uh(eh.ENTER, mh.element))
        },
        vh = function() {
            ch = null;
            var t = lh.pop();
            t && (t.exit.call(t.element), uh(eh.EXIT, t.element), mh.element || (lh.forEach((function(t) { t.exit.call(t.element), uh(eh.EXIT, t.element) })), lh = [], mh.onexit()))
        },
        ph = function(t, n) {
            if (lh.length > 0) {
                var i = lh.pop();
                n = n || i.element, i.error.call(n, t), mh.onerror(n, t), uh(eh.ERROR, n, t)
            }
        },
        mh = {
            request: function(t, n, i, e) { if (t = t || document.body, lh.push({ element: t, enter: n || fh, exit: i || fh, error: e || fh }), void 0 === ih.request) return dh(t); if (nh && !1 === document[ih.enabled]) return dh(t); try { t[ih.request]() } catch (n) { ph("not_enabled", t) } },
            exit: function() {!document[ih.exit] && mh.element ? mh.element[ih.exit]() : document[ih.exit]() },
            toggle: function(t, n, i, e) { mh.element ? mh.exit() : mh.request(t, n, i, e) },
            videoEnabled: function(t) { if (mh.enabled) return !0; var n = sh(t = t || document.body); return !(!n || void 0 === n.webkitSupportsFullscreen) && (n.readyState < n.HAVE_METADATA ? "maybe" : n.webkitSupportsFullscreen) },
            on: ah((function(t, n) { oh[t].push(n) })),
            off: ah((function(t, n) {
                var i = oh[t].indexOf(n);
                i > -1 && oh[t].splice(i, 1)
            })),
            onenter: fh,
            onexit: fh,
            onchange: fh,
            onerror: fh
        };
    try { Object.defineProperties(mh, { element: { enumerable: !0, get: function() { return ch && ch.webkitDisplayingFullscreen ? ch : document[ih.element] || null } }, enabled: { enumerable: !0, get: function() { return document[ih.enabled] || !1 } } }) } catch (t) { mh.element = null, mh.enabled = !1 }

    function wh(t) { return "string" == typeof(t = t.replace("#", "")) && (3 === t.length || 6 === t.length) && !isNaN(parseInt(t, 16)) }

    function bh(t) { var n = /rgba?\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})(,\s*([\d.]+))?\)/.exec(t); if (!n) throw new Error("Invalid rgb value"); return { red: parseInt(n[1], 10), green: parseInt(n[2], 10), blue: parseInt(n[3], 10), alpha: parseFloat(n[5]) || 1 } }

    function gh() {
        for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++) n[i] = arguments[i];
        if (1 === n.length && n[0] instanceof gh) { var e = n[0]; return this.red = e.red, this.green = e.green, this.blue = e.blue, this.alpha = e.alpha, this.hue = e.hue, this.saturation = e.saturation, this.lightness = e.lightness, this }
        if (1 === n.length) { if ("string" == typeof n[0] && n[0].indexOf("rgb") >= 0) return this.rgba = bh(n[0]), this; if (!wh("".concat(n[0]))) throw new Error("Invalid hex value"); return this.hex = n[0], this }
        if (3 === n.length || 4 === n.length) {
            for (var r = 0; r < 3; r++)
                if (isNaN(parseInt(n[r], 10)) || parseInt(n[r], 10) < 0 || parseInt(n[r], 10) > 255) throw new Error("Invalid rgb value");
            if (n[3] && parseFloat(n[3]) < 0 || parseFloat(n[3]) > 1) throw new Error("Invalid alpha value");
            return this.rgba = { red: n[0], green: n[1], blue: n[2], alpha: parseFloat(n[3]) || 1 }, this
        }
        throw new Error("Invalid color")
    }

    function yh(t) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        if (!t || "null" === t || 0 === n.length) return { track: null };
        var i = t.split("."),
            e = Q(i, 2),
            r = e[0],
            o = e[1],
            u = r.split(/[-_]/),
            a = Q(u, 1),
            s = a[0],
            c = r !== s,
            f = n.filter((function(t) { return c && t.language === r || t.language === s })).sort((function(t, n) { var i = 2 * (t.language === s && t.kind === o) + 2 * (t.language === r) + 1 * (t.kind === o); return 2 * (n.language === s && n.kind === o) + 2 * (n.language === r) + 1 * (n.kind === o) - i }));
        return f.length > 0 ? { track: f[0], exactMatch: f[0].language === r && f[0].kind === o } : { track: null }
    }

    function _h(t, n) {
        switch (t.view) {
            case 2:
                throw new Gd("The video is private.", "PrivacyError", n);
            case 4:
                throw new Gd("The video is password-protected. The viewer must enter the password first.", "PasswordError", n);
            case 7:
                throw new Gd(t.message, "NotFoundError", n)
        }
    }

    function kh(t) { for (var n = [], i = 0; i < t.length; i++) n.push([t.start(i), t.end(i)]); return n }

    function Eh(t) {
        var n, i, e, o = t.events,
            u = nt(),
            a = !1,
            s = !1,
            c = null,
            f = !1,
            l = null,
            d = null;

        function h(n) { i !== n && (i = n, t.config.embed.api = n) }
        var v = {
                ping: function() { return t.config.video.id },
                on: function(t, i) {
                    t in Hc && (t = Hc[t]);
                    var e = gc(Bc);
                    if (e.indexOf(t) < 0) throw new Gd("“".concat(t, "” is not a valid event. Valid events are: ").concat(e.join(", "), "."), "TypeError", "on");
                    i && u.on(t, i), n && (n.listeners[t] = !0), t === Bc.LOADED && y()
                },
                off: function(t, i) { i && u.off(t, i), n && (n.listeners[t] = !1) },
                play: function() { return new r((function(n, i) { o.once(Fc.Ts, n), o.once(Fc.Es, (function(t) { i(new Gd(t.message, t.name, "play")) })), _h(t.config, "play"), o.fire(Uc.Qf), o.fire(Fc.Bs) })) },
                destroy: function() { o.fire(Mc.ys) },
                pause: function() { _h(t.config, "pause"), o.fire(Uc.tl), o.fire(Fc.Vs) },
                loadVideo: function(n) {
                    var i = function(t) { if (!t) return {}; if (Zs(t)) return { id: parseInt(t, 10), params: {} }; if ("string" == typeof t) return 0 !== t.indexOf("https://") ? {} : { url: t, params: {} }; if ("url" in t) { if (0 !== t.url.indexOf("https://")) return {}; var n = t.url; return delete t.url, { url: n, params: t } } if ("id" in t) { if (!Zs(t.id)) return {}; var i = t.id; return delete t.id, { id: parseInt(i, 10), params: t } } return {} }(n),
                        e = i.id,
                        r = i.url,
                        o = i.params;
                    if (!e && !r) throw new Gd("The video id must be an integer.", "TypeError", "loadVideo");
                    if (r && r.match(null === new RegExp("^https?://".concat(t.config.player_url, "/video/([0-9]+)/config")))) throw new Gd("The config url must be a valid Vimeo url.", "TypeError", "loadVideo");
                    return t.loadVideo(r || e, o).then((function() { return n })).catch((function() { throw _h(t.config, "loadVideo"), new Gd("An error occurred loading the video.", "Error", "loadVideo") }))
                },
                unload: function() { 1 !== t.config.view && 3 !== t.config.view || o.fire(Mc.Ja) },
                addCuePoint: function(n, i) { if (n = parseFloat(n), isNaN(n) || n < 0 || n > t.config.video.duration) throw new Gd("Cue point time must be positive number less than the duration of the video (".concat(dc(t.config.video.duration), ")."), "RangeError", "addCuePoint"); try { var e = t.backbone.addCuePoint(n, i); return setTimeout((function() { o.fire(Fc.ec, e) }), 0), e.id } catch (t) { if ("CuePointsNotSupported" === t.name) throw new Gd("Cue points are not supported in the current player.", "UnsupportedError", "addCuePoint"); throw new Gd("Unable to add cue point", "InvalidCuePoint", "addCuePoint") } },
                removeCuePoint: function(n) {
                    var i = t.backbone.cuePoints.filter((function(t) { return t.id === n }))[0];
                    if (!i) throw new Gd("Cue point “".concat(n, "” was not found."), "InvalidCuePoint", "removeCuePoint");
                    t.backbone.removeCuePoint(i), setTimeout((function() { o.fire(Fc.rc, i) }), 0)
                },
                enableTextTrack: function(n) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        u = ("text_tracks" in t.config.request ? t.config.request.text_tracks : []).map((function(t) { return t.language = t.lang, t })),
                        a = u.some((function(t) { return t.language.toLowerCase() === n.toLowerCase() }));
                    if (!a) throw new Gd("There are no tracks for “".concat(n.toUpperCase(), "”."), "InvalidTrackLanguageError", "enableTextTrack");
                    var s = e ? "".concat(n, ".").concat(e) : n,
                        c = yh(s, u),
                        f = c.track;
                    if (!f || e && f.kind !== e) throw new Gd("There are no ".concat(e, " tracks for “").concat(n.toUpperCase(), "”."), "InvalidTrackError", "enableTextTrack");
                    return o.fire(Mc.as, f.id), i < 3 ? null : new r((function(t, n) { o.once(Fc.ic, (function(n, i) { t({ label: n.label, language: n.language, kind: n.kind }) })) }))
                },
                disableTextTrack: function() { o.fire(Mc.ss) },
                toggleFullscreen: function(t) {
                    var n = { not_supported: { name: "UnsupportedError", msg: "Fullscreen is not supported at all or for this element." }, not_enabled: { name: "Error", msg: "The request was made from an iframe that does not allow fullscreen." }, not_allowed: { name: "NotAllowedError", msg: "The request failed, probably because it was not called from a user-initiated event." } };
                    return new r((function(i, e) {
                        if (!mh.element === t) return mh.on("enter", (function t() { mh.off("enter", t), i() })), mh.on("error", (function i(r, o) {
                            mh.off("error", i);
                            var u = n[o] || n.not_supported;
                            e(new Gd(u.msg, u.name, "".concat(t ? "request" : "exit", "Fullscreen")))
                        })), void o.fire(Fc.Us);
                        i()
                    }))
                },
                requestFullscreen: function() { return v.toggleFullscreen(!0) },
                exitFullscreen: function() { return v.toggleFullscreen(!1) },
                get fullscreen() { return !!mh.element },
                get autopause() { return !!t.config.embed.autopause },
                set autopause(n) { t.config.embed.autopause = !!n },
                get chromecasting() { return !!Tf.currentSession },
                get color() { return t.config.embed.color.replace("#", "") },
                set color(n) {
                    if (t.config.embed.settings.color && !t.config.embed.on_site) throw new Gd("The creator of the video has chosen to always use ".concat(new gh(t.config.embed.color).hex, "."), "EmbedSettingsError", "setColor");
                    try {
                        var i = new gh(n);
                        o.fire(Mc.ts, i.hex)
                    } catch (t) { throw new Gd("The color should be 3- or 6-digit hex value.", "TypeError", "setColor") }
                    var e = new gh(23, 35, 34, .75);
                    if (e.contrast(i).ratio < 3) { var r = i.clone().lighten(5, 3, e); throw new Gd("".concat(i.hex, " does not meet minimum contrast ratio. We recommend using brighter colors. (You could try ").concat(r.hex, " instead.) See WCAG 2.0 guidelines: http://www.w3.org/TR/WCAG/#visual-audio-contrast"), "ContrastError", "setColor") }
                },
                get cuePoints() { return t.backbone.cuePoints.map((function(t) { return { time: t.time, data: t.data, id: t.id } })) },
                get currentTime() { return t.currentTime },
                set currentTime(n) {
                    if (n = parseFloat(n), isNaN(n) || n < 0 || n > t.config.video.duration) throw new Gd("Seconds must be a positive number less than the duration of the video (".concat(dc(t.config.video.duration), ")."), "RangeError", "setCurrentTime");
                    return o.fire(Uc.za), o.fire(Mc.za, null, n), o.fire(Fc.Hc), i < 3 ? null : new r((function(t, n) {
                        o.once(bi.SEEKED, (function(n) {
                            var i = n.currentTime;
                            t(i)
                        }))
                    }))
                },
                get duration() { return dc(t.config.video.duration) },
                get ended() { return !!t.backbone.ended },
                get loop() { return !!t.config.embed.loop },
                set loop(t) { o.fire(Mc.Xa, t) },
                set muted(n) { t.backbone.muted = n },
                get muted() { return t.backbone.muted },
                get paused() { return !(t.backbone && "paused" in t.backbone && !t.backbone.paused) },
                get buffered() { return kh(t.backbone.buffered) },
                get played() { return kh(t.backbone.played) },
                get seekable() { return kh(t.backbone.seekable) },
                get seeking() { return t.backbone.seeking },
                get playbackRate() { return t.backbone ? t.backbone.playbackRate : 1 },
                set playbackRate(n) {
                    if (!t.config.embed.settings.speed) throw new Gd("Setting the playback rate is not enabled for this video.", "Error", "setPlaybackRate");
                    if (isNaN(n) || n > 2) throw new Gd("Playback rate should be a number below or equal to ".concat(2, "."), "RangeError", "setPlaybackRate");
                    o.fire(Mc.bs, n)
                },
                get textTracks() { return (t.backbone ? t.backbone.video.textTracks : []).map((function(t) { return { label: t.label, language: t.language, kind: t.kind, mode: t === l ? "showing" : "disabled" } })) },
                get videoEmbedCode() { return t.config.video.embed_code },
                get videoHeight() { return t.backbone.videoHeight || t.config.video.height },
                get videoId() { return t.config.video.id },
                get videoTitle() { return t.config.video.title },
                get videoWidth() { return t.backbone.videoWidth || t.config.video.width },
                get videoUrl() { if (!t.config.video.url) throw new Gd("The URL is not available because of the video’s privacy settings.", "PrivacyError", "getVideoUrl"); return t.config.video.url },
                get volume() { var n = dc(t.config.request.cookie.volume); return 1 === i ? Math.round(100 * n) : n },
                set volume(t) {
                    if (t = parseFloat(t), 1 === i && (t /= 100), isNaN(t) || t < 0 || t > 1) throw new Gd("Volume should be a number between 0 and 1.", "RangeError", "setVolume");
                    d = t, o.fire(Mc.Ga, t, !0)
                },
                _loadVideo: function(n, i) { return t.loadVideo(n, i) },
                get _like() { return !!t.config.user.liked },
                set _like(n) {
                    if (t.config.embed.on_site) {
                        if (t.config.user.liked === n) return;
                        o.fire(Fc.pc, n)
                    }
                },
                get _watchLater() { return !!t.config.user.watch_later },
                set _watchLater(n) {
                    if (t.config.embed.on_site) {
                        if (t.config.user.watch_later === n) return;
                        o.fire(Fc.mc, n)
                    }
                },
                get currentChapter() {
                    var n = t.backbone.currentChapterID;
                    if (!n) return null;
                    var i = U(t.backbone.chapters),
                        e = i.findIndex((function(t) { return n === t.id }));
                    return { startTime: i[e].startTime, title: i[e].text, index: e + 1 }
                },
                get chapters() { return U(t.backbone.chapters).map((function(t, n) { return { startTime: t.startTime, title: t.text, index: n + 1 } })) },
                _addChapter: function(n, i) { if (n = parseFloat(n), isNaN(n) || n < 0 || n > t.config.video.duration) throw new Gd("Chapter timecode must be positive number less than the duration of the video (".concat(dc(t.config.video.duration), ")."), "RangeError", "addCuePoint"); try { t.backbone.addChapter(n, i) } catch (t) { if ("ChaptersNotSupported" === t.name) throw new Gd(t.message, "UnsupportedError", "_addChapter"); throw new Gd("Unable to add chapter", "InvalidChapter", "_addChapter") } },
                _removeChapter: function(n) { var i; try { i = t.backbone.chapters.getCueById(n) } catch (t) { throw new Gd("Chapters are not supported in this browser.", "UnsupportedError", "_removeChapter") } if (!i) throw new Gd("Chapter was not found.", "InvalidChapter", "_removeChapter"); try { t.backbone.removeChapter(i) } catch (t) { if ("ChaptersNotSupported" === t.name) throw new Gd("Chapters are not supported in this browser.", "UnsupportedError", "_removeChapter"); throw new Gd("Unable to remove chapter", "InvalidChapter", "_removeChapter") } },
                _addCard: function(t) { o.fire(Mc._addCard, t) },
                _removeCard: function(t) { o.fire(Mc._removeCard, t) },
                _setOutro: function(n, i) { t.config.embed.outro !== n ? (o.fire(Mc._hideOutro), setTimeout((function() { t.config.embed.outro = n, o.fire(Mc.fs, n, i) }), 400)) : o.fire(Mc.fs, n, i) },
                _hideOutro: function() { o.fire(Mc._hideOutro) },
                _setEmailCapture: function(n) {
                    if (n) {
                        if (t.config.embed.email = t.config.embed.email || {}, t.config.embed.email.position = n.position.toLowerCase(), "after" === n.position.toLowerCase()) return t.config.embed.outro = "email", void o.fire(Mc.fs, "email", { version: 2, data: n });
                        t.config.embed.email.timecode = n.timecode, n.nohide = !0, n.noblur = !0, n.nofocus = ia(n, "nofocus", !0), v._showOverlay("email-capture", n)
                    } else v._unsetEmailCapture()
                },
                _unsetEmailCapture: function() { t.config.embed.outro && (o.fire(Mc._hideOutro), delete t.config.embed.outro), t.config.embed.email && (o.fire(Mc.Ka, { unmakeModal: !0 }), delete t.config.embed.email) },
                _showOverlay: function(t, n) { o.fire(Mc._showOverlay, t, n) },
                _fireEvent: function() {
                    for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++) n[i] = arguments[i];
                    o.fire.apply(null, n)
                },
                _setEmbedEditor: function(n) { t.config.embed.editor = !!n },
                _setEmbedSettings: function(n) {
                    t.config.embed.on_site && (Object.keys(n).forEach((function(i) {
                        var r = n[i];
                        r = "object" === V(r) ? r : Number(r), "badge" === i && (r ? r = e : e = t.config.embed.settings.badge), t.config.embed.settings[i] = r, o.fire(Fc.af, i, r)
                    })), o.fire(Fc.Qc, !1, t.config))
                },
                _setEmbedSetting: function(n, i) { t.config.embed.on_site && (i = "object" === V(i) ? i : Number(i), "badge" === n && (i ? i = e : e = t.config.embed.settings.badge), t.config.embed.settings[n] = i, o.fire(Fc.af, n, i), o.fire(Fc.Qc, !1, t.config)) },
                _setOTTVideoMetadata: function(n) { t.config.request.flags.ott && (t.ottVideoMetadata = n, o.fire(Fc.sf, n)) },
                _toggleDebugPanel: function() { o.fire(Fc.Ic) },
                _overrideControlbarBehavior: function(t) { o.fire(Mc._overrideControlbarBehavior, t) },
                _setControlbarVisibility: function(t) { o.fire(Mc.ls, t) },
                get _fieldOfView() { var n = t.backbone.getEffectByName("ThreeSixtyEffect"); if (t.backbone && !n) throw new Gd("Field of view is not available in the current player.", "UnsupportedError", "getFieldOfView"); return n.fieldOfView },
                set _fieldOfView(n) {
                    var i = t.backbone.getEffectByName("ThreeSixtyEffect");
                    if (t.backbone && !i) throw new Gd("Field of view is not available in the current player.", "UnsupportedError", "setFieldOfView");
                    t.backbone.getEffectByName("ThreeSixtyEffect").fieldOfView = n
                },
                get _coordinates() { var n = t.backbone.getEffectByName("ThreeSixtyEffect"); if (t.backbone && !n) throw new Gd("Coordinates are not available in the current player.", "UnsupportedError", "getCoordinates"); return n.currentCoordinates },
                set _coordinates(n) { var i = t.backbone.getEffectByName("ThreeSixtyEffect"); if (t.backbone && !i) throw new Gd("Coordinates are not available in the current player.", "UnsupportedError", "setCoordinates"); try { t.backbone.getEffectByName("ThreeSixtyEffect").currentCoordinates = n } catch (t) { throw new Gd(t.message, "RangeError", "setCoordinates") } },
                _setChromecastUI: function(t) {
                    var n = Tf.currentSession;
                    n && $n(t) && n.sendMessage("urn:x-cast:com.vimeo.cast.media", { action: "setCustomUIStyles", value: t })
                },
                addEventListener: function() { v.on.apply(v, arguments) },
                removeEventListener: function() { v.off.apply(v, arguments) },
                seekTo: function(t) { v.currentTime = t },
                changeColor: function(t) { v.color = t }
            },
            p = {
                addCuePoint: function(t) {
                    var n = t.time,
                        i = t.data;
                    return v.addCuePoint(n, i)
                },
                enableTextTrack: function(t) {
                    var n = t.language,
                        i = t.kind,
                        e = void 0 === i ? null : i;
                    v.enableTextTrack(n, e)
                }
            };

        function m(t, i) { n && n.emit(t, i), u.fire(t, i) }
        var w = function(t, n) {
            return function() {
                var i = n ? n.apply(void 0, arguments) : void 0;
                m(t, i)
            }
        };

        function b(t) {
            var n = t.currentTime,
                i = t.duration,
                e = t.timeProgress;
            return { seconds: dc(n), percent: dc(e), duration: dc(i) }
        }

        function g(t) { return { playbackRate: t } }

        function y() { m(Bc.LOADED, f ? null : (f = !0, { id: t.config.video.id })) }

        function _(t) {
            return k(function(t) {
                switch (t) {
                    case "BrowserNotSupported":
                    case "FilesNotPlayable":
                    case "MediaSrcNotSupportedError":
                        return new Gd("This video is not supported in this browser.", "NotSupportedError");
                    case "FileError":
                        return new Gd("There was an error loading the files for this video.", "FileError")
                }
                return new Gd("An error occurred during playback.", "PlaybackError")
            }(c = t))
        }

        function k(t) { var n = { message: "An error occurred.", name: "Error", method: t.source }; return "MessageApiError" === t.constructorName && (n = { message: t.message, name: t.name, method: t.source }), n }
        return function() {
                if (!t.config.embed.on_site) {
                    h(t.config.embed.api);
                    var i = t.config.request.referrer;
                    (n = new th(i)).listeners = gc(Bc).reduce((function(t, n) { return z({}, t, q({}, n, !1)) }), {}), n.listeners[Bc.READY] = !0, n.listeners[Bc.ERROR] = !0, n.filter((function(t) { return n.listeners[t] }))
                }
            }(),
            function() {
                if (n) {
                    var e = pd({}, v, p);
                    n.extendMethods(e), n.hooks({
                        logError: function(t) { m(Bc.ERROR, k(t)) },
                        parseMessage: function(t) { if (!t || "" === t) return {}; if ($n(t)) return h(3), t; try { var n = JSON.parse(t); return h(2), n } catch (t) { return h(null), m(Bc.ERROR, "The Vimeo Froogaloop v1 API is no longer supported.\n Please follow the upgrade instructions here: https://goo.gl/mueGRR"), {} } },
                        buildMessage: function(n) {
                            var e;
                            (null == (e = t.config.embed) ? void 0 : e.player_id) && (n.player_id = t.config.embed.player_id);
                            try {
                                2 === i && (n = function(t) {
                                    if (t.event) {
                                        for (var n in Hc)
                                            if (Hc[n] === t.event) { t.event = n; break }
                                            "cuechange" === t.event && (t.data.text = t.data.cues[0].text, t.data.html = t.data.cues[0].html, delete t.data.cues)
                                    }
                                    return JSON.stringify(t)
                                }(n)), $n(n) && "ready" === n.event && (n = JSON.stringify(n))
                            } catch (t) {}
                            return n
                        }
                    })
                }
            }(), o.on(_i.BUFFER_STARTED, w(Bc.BUFFER_START)), o.on(_i.BUFFER_ENDED, w(Bc.BUFFER_END)), o.on(_i.CUE_POINT, w(Bc.CUEPOINT, (function(t) { return { time: t.time, data: t.data, id: t.id } }))), o.on(Wo, w(Bc.CUE_CHANGE, (function(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                    i = t || {},
                    e = i.language,
                    r = void 0 === e ? null : e,
                    o = i.label,
                    u = void 0 === o ? null : o,
                    a = i.kind,
                    s = void 0 === a ? null : a;
                return { label: u, language: r, kind: s, cues: n }
            }))), o.on(Fc.Ks, w(Bc.CHAPTER_CHANGE, (function(n) { var i = U(t.backbone.chapters).findIndex((function(t) { return n === t.id })); return i >= 0 ? { startTime: t.backbone.chapters[i].startTime, title: t.backbone.chapters[i].text, index: i + 1 } : null }))), o.on(Fc.As, w(Bc.ENDED, (function() { return s = !1, { seconds: dc(t.config.video.duration), percent: 1, duration: dc(t.config.video.duration) } }))), o.on(Fc.He, w(Bc.PAUSE, (function(n) { return s = !1, { seconds: dc(n), percent: dc(n / t.config.video.duration), duration: dc(t.config.video.duration) } }))), o.on(Fc.Ps, w(Bc.PLAYBACK_RATE_CHANGE, g)), o.on(Fc.Ps, w(Bc.RATE_CHANGE, g)), o.on(Fc.ic, w(Bc.TEXT_TRACK_CHANGE, (function(t) {
                l = t;
                var n = t || {},
                    i = n.language,
                    e = void 0 === i ? null : i,
                    r = n.label,
                    o = void 0 === r ? null : r,
                    u = n.kind;
                return { label: o, language: e, kind: void 0 === u ? null : u }
            }))), o.on(Fc.Cs, w(Bc.VOLUME_CHANGE, (function(t) { return { volume: dc(t) } }))), o.on(Fc.Qs, w(Bc.CONTROL_BAR_VISIBILITY_CHANGED, (function(t) { return { visible: t } }))), o.on(Fc.Qc, (function(t) { d && setTimeout((function() { o.fire(Mc.Ga, d, !0) }), 0), t && y() })), o.on(Fc.ks, (function(t) {
                var n = _(t);
                a && m(Bc.ERROR, n)
            })), o.on(Fc.dc, w(Bc.FULLSCREENCHANGE, (function() { return { fullscreen: !0 } }))), o.on(Fc.vc, w(Bc.FULLSCREENCHANGE, (function() { return { fullscreen: !1 } }))), o.on(Fc.Yf, w(Bc.AD_STARTED)), o.on(Fc.Wf, w(Bc.AD_COMPLETED)), o.on(Fc.Gf, w(Bc.AD_ERROR)), o.on(Fc.Jf, w(Bc.AD_SKIPPED)), o.on(Fc.Xf, w(Bc.AD_ALL_COMPLETED)), o.once(Fc.ue, (function() { a = !0, m(Bc.READY), c && (m(Bc.ERROR, _(c)), c = null) })), o.on(nu.EVENT_ENDED, w(Bc.LIVE_EVENT_ENDED)), o.on(nu.EVENT_STARTED, w(Bc.LIVE_EVENT_STARTED)), o.on(nu.STREAM_OFFLINE, w(Bc.LIVE_STREAM_OFFLINE)), o.on(nu.STREAM_ONLINE, w(Bc.LIVE_STREAM_ONLINE)), o.on(Ei.MOTION_END, w(Bc.MOTION_END)), o.on(Ei.MOTION_START, w(Bc.MOTION_START)), o.on(Ei.WEBVR_HARDWARE_AVAILABLE, w(Bc.WEBVR_HARDWARE_AVAILABLE)), o.on(Ei.WEBVR_ENTER, w(Bc.ENTER_WEBVR)), o.on(Ei.WEBVR_EXIT, w(Bc.EXIT_WEBVR)), o.on(Ei.SPATIAL_UNSUPPORTED, w(Bc.SPATIAL_UNSUPPORTED)), o.on(bi.PLAY, w(Bc.PLAY, (function(n) { return s ? null : (s = !0, { seconds: dc(n), percent: dc(n / t.config.video.duration), duration: dc(t.config.video.duration) }) }))), o.on(bi.PLAYING, w(Bc.PLAYING, (function() { return s ? { seconds: dc(t.currentTime), percent: dc(t.currentTime / t.config.video.duration), duration: dc(t.config.video.duration) } : null }))), o.on(bi.PROGRESS, w(Bc.PROGRESS, (function(t) {
                var n = t.loaded,
                    e = t.duration,
                    r = t.loadProgress,
                    o = { seconds: dc(n), percent: dc(r), duration: dc(e) };
                return i < 3 && (o.bytesLoaded = -1, o.bytesTotal = -1), o
            }))), o.on(bi.SEEKING, w(Bc.SEEKING, b)), o.on(bi.SEEKED, w(Bc.SEEKED, b)), o.on(bi.TIME_UPDATE, w(Bc.TIME_UPDATE, (function(t) {
                var n = t.currentTime,
                    i = t.duration,
                    e = t.timeProgress;
                return { seconds: dc(n), percent: dc(e), duration: dc(i) }
            }))), o.on(bi.LOADED_METADATA, w(Bc.LOADED_METADATA)), o.on(bi.DURATION_CHANGE, w(Bc.DURATION_CHANGE, (function(n) { return { duration: t.backbone.duration } }))), o.on(bi.WAITING, w(Bc.WAITING)), o.on(bi.LOADED_DATA, w(Bc.LOADED_DATA)), o.on(bi.LOAD_START, w(Bc.LOAD_START)), o.on(_f.connected, w(Bc.CHROMECAST_CONNECTED)), o.on(Mc.Ja, (function() { c = null, f = !1 })), t.doNotTrackEnabled || o.on(Fc.pf, (function() { m(Bc.EMAIL_CAPTURE) })), o.on(Fc.Sf, (function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                n && (n.listeners[Bc.SPACE_CHANGE] = !0, m(Bc.SPACE_CHANGE, t))
            })), o.fire(Fc.Lf), v
    }
    ih.change && document.addEventListener(ih.change, (function(t) {
        if (mh.onchange(mh.element), uh(eh.CHANGE, mh.element), mh.element) {
            var n = lh[lh.length - 2];
            n && n.element === mh.element ? vh() : hh(mh.element)
        } else vh()
    }), !1), document.addEventListener("webkitbeginfullscreen", (function(t) {
        var n = !0;
        if (lh.length > 0)
            for (var i = 0, e = lh.length; i < e; i++)
                if (sh(lh[i].element) === t.srcElement) { n = !1; break }
        n && lh.push({ element: t.srcElement, enter: fh, exit: fh, error: fh }), mh.onchange(t.srcElement), uh(eh.CHANGE, mh.srcElement), hh(t.srcElement)
    }), !0), document.addEventListener("webkitendfullscreen", (function(t) { mh.onchange(t.srcElement), uh(eh.CHANGE, t.srcElement), vh(t.srcElement) }), !0), ih.error && document.addEventListener(ih.error, (function(t) { ph("not_allowed") }), !1), gh.prototype = {get complement() { var t = this.clone(); return t.rgb = { red: 255 - this.red, green: 255 - this.green, blue: 255 - this.blue }, t },
        get hex() { return gh.rgbToHex(this.red, this.green, this.blue) },
        set hex(t) { return this.rgba = gh.hexToRgb(t), this },
        get hsl() { return "hsl(" + this.hue + "," + this.saturation + "%," + Math.round(this.lightness) + "%)" },
        set hsl(t) { this.hue = t.hue, this.saturation = t.saturation, this.lightness = t.lightness; var n = gh.hslToRgb(t.hue, t.saturation, t.lightness); return this.red = n.red, this.green = n.green, this.blue = n.blue, this.alpha = n.alpha, this },
        get luminance() {
            function t(t) { return t <= .03928 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4) }
            return .2126 * t(this.red / 255) + .7152 * t(this.green / 255) + .0722 * t(this.blue / 255)
        },
        get rgb() { return "rgb(" + this.red + "," + this.green + "," + this.blue + ")" },
        set rgb(t) { return this.rgba = t, this },
        get rgba() { return "rgba(" + this.red + "," + this.green + "," + this.blue + "," + this.alpha + ")" },
        set rgba(t) { this.red = t.red, this.green = t.green, this.blue = t.blue, this.alpha = t.alpha || 1; var n = gh.rgbToHsl(t.red, t.green, t.blue); return this.hue = n.hue, this.saturation = n.saturation, this.lightness = n.lightness, this },
        get yiq() { return (299 * this.red + 587 * this.green + 114 * this.blue) / 1e3 },
        clone: function() { return new gh(this) },
        lighten: function(t, n, i) {
            if (this.hsl = { hue: this.hue, saturation: this.saturation, lightness: this.lightness + t }, n && i)
                for (var e = i.contrast(this).ratio; e < n && (this.lighten(5), e = i.contrast(this).ratio, !(this.lightness >= 100)););
            return this
        },
        darken: function(t, n, i) {
            if (this.hsl = { hue: this.hue, saturation: this.saturation, lightness: this.lightness - t }, n && i)
                for (var e = i.contrast(this).ratio; e < n && (this.darken(5), e = i.contrast(this).ratio, !(this.lightness <= 0)););
            return this
        },
        overlayOn: function(t) { if (this.alpha >= 1) return this; var n = this.clone(); return n.rgba = { red: n.red * this.alpha + t.red * t.alpha * (1 - this.alpha), green: n.green * this.alpha + t.green * t.alpha * (1 - this.alpha), blue: n.blue * this.alpha + t.blue * t.alpha * (1 - this.alpha), alpha: n.alpha + t.alpha * (1 - this.alpha) }, n },
        contrast: function(t) {
            var n = this.alpha;
            if (n >= 1) {
                t.alpha < 1 && (t = t.overlayOn(this));
                var i = this.luminance + .05,
                    e = t.luminance + .05,
                    r = i / e;
                return e > i && (r = 1 / r), { ratio: r = Math.round(10 * r) / 10, error: 0, min: r, max: r }
            }
            var o = this.overlayOn(gh.white).contrast(t).ratio,
                u = this.overlayOn(gh.black).contrast(t).ratio,
                a = Math.max(o, u),
                s = { red: Math.min(Math.max(0, (t.red - this.red * n) / (1 - n)), 255), green: Math.min(Math.max(0, (t.green - this.green * n) / (1 - n)), 255), blue: Math.min(Math.max(0, (t.blue - this.blue * n) / (1 - n)), 255) },
                c = this.clone();
            c.rgb = s;
            var f = this.overlayOn(c).contrast(t).ratio;
            return { ratio: Math.round((f + a) / 2 * 10) / 10, error: Math.round((a - f) / 2 * 10) / 10, min: f, max: a, closest: c, farthest: u === a ? gh.white : gh.black }
        },
        wcagAACompliant: function(t) { return this.contrast(t).ratio >= 4.5 },
        wcagAAACompliant: function(t) { return this.contrast(t).ratio >= 7 },
        yiqContrastColor: function() { return this.yiq >= 120 ? new gh(0, 0, 0) : new gh(255, 255, 255) }
    }, gh.hexToRgb = function(t) { var n; return 3 === (t = String(t)).length || 4 === t.length ? (n = /^#?([A-Fa-f0-9])([A-Fa-f0-9])([A-Fa-f0-9])$/i.exec(t)) && (n[1] += n[1], n[2] += n[2], n[3] += n[3]) : n = /^#?([A-Fa-f0-9]{2})([A-Fa-f0-9]{2})([A-Fa-f0-9]{2})$/i.exec(t), n ? { red: parseInt(n[1], 16), green: parseInt(n[2], 16), blue: parseInt(n[3], 16), alpha: 1 } : null }, gh.rgbToHex = function(t, n, i) { return "#" + ((1 << 24) + (Math.round(t) << 16) + (Math.round(n) << 8) + Math.round(i)).toString(16).slice(1) }, gh.rgbToHsl = function(t, n, i) {
        t /= 255, n /= 255, i /= 255;
        var e, r = Math.max(t, n, i),
            o = Math.min(t, n, i),
            u = (r + o) / 2,
            a = u;
        if (r === o) return { hue: 0, saturation: 0, lightness: 100 * a };
        var s = r - o;
        return e = a > .5 ? s / (2 - r - o) : s / (r + o), r === t ? u = (n - i) / s + (n < i ? 6 : 0) : r === n ? u = (i - t) / s + 2 : r === i && (u = (t - n) / s + 4), u /= 6, { hue: Math.round(360 * u), saturation: Math.round(100 * e), lightness: Math.round(100 * a) }
    }, gh.hslToRgb = function(t, n, i) {
        function e(t, n, i) { return i < 0 && (i += 1), i > 1 && (i -= 1), 6 * i < 1 ? t + 6 * (n - t) * i : 2 * i < 1 ? n : 3 * i < 2 ? t + 6 * (2 / 3 - i) * (n - t) : t }
        if (t /= 360, i /= 100, 0 == (n /= 100)) return { red: Math.floor(255 * i), green: Math.floor(255 * i), blue: Math.floor(255 * i) };
        var r = i < .5 ? i * (1 + n) : i + n - n * i,
            o = 2 * i - r;
        return { red: Math.floor(255 * e(o, r, t + 1 / 3)), green: Math.floor(255 * e(o, r, t)), blue: Math.floor(255 * e(o, r, t - 1 / 3)) }
    }, gh.hslToHex = function(t, n, i) { var e = gh.hslToRgb(t, n, i); return gh.rgbToHex(e.red, e.green, e.blue) }, gh.white = new gh("fff"), gh.black = new gh("000");
    var Th = function() {
            function t(t) { this.alertTextElement = t.querySelector(".vp-text-alert-wrapper"), this.alertContentElement = this.alertTextElement.querySelector(".vp-alert-text") }
            var n = t.prototype;
            return n.show = function(t) { this.alertContentElement.innerHTML = t, this.alertContentElement.classList.remove("hidden"), this.alertTextElement.classList.remove("hidden") }, n.hide = function() { this.alertContentElement.classList.add("hidden"), this.alertTextElement.classList.add("hidden") }, t
        }(),
        Sh = i((function(t) {
            ! function() {
                var i = "undefined" != typeof window && window === this ? this : void 0 !== n && null != n ? n : this,
                    e = "function" == typeof Object.defineProperties ? Object.defineProperty : function(t, n, i) { t != Array.prototype && t != Object.prototype && (t[n] = i.value) };

                function o() { o = function() {}, i.Symbol || (i.Symbol = a) }
                var u = 0;

                function a(t) { return "jscomp_symbol_" + (t || "") + u++ }

                function s() {
                    o();
                    var t = i.Symbol.iterator;
                    t || (t = i.Symbol.iterator = i.Symbol("iterator")), "function" != typeof Array.prototype[t] && e(Array.prototype, t, { configurable: !0, writable: !0, value: function() { return c(this) } }), s = function() {}
                }

                function c(t) { var n = 0; return function(t) { return s(), (t = { next: t })[i.Symbol.iterator] = function() { return this }, t }((function() { return n < t.length ? { done: !1, value: t[n++] } : { done: !0 } })) }

                function f(t) { s(); var n = t[D.iterator]; return n ? n.call(t) : c(t) }

                function l(t) {
                    if (!(t instanceof Array)) {
                        t = f(t);
                        for (var n, i = []; !(n = t.next()).done;) i.push(n.value);
                        t = i
                    }
                    return t
                }
                var d = 0,
                    h = "img script iframe link audio video source".split(" ");

                function v(t, n) {
                    for (var i = (t = f(t)).next(); !i.done; i = t.next())
                        if (i = i.value, n.includes(i.nodeName.toLowerCase()) || v(i.children, n)) return !0;
                    return !1
                }

                function p(t, n) {
                    if (2 < t.length) return performance.now();
                    for (var i = [], e = (n = f(n)).next(); !e.done; e = n.next()) e = e.value, i.push({ timestamp: e.start, type: "requestStart" }), i.push({ timestamp: e.end, type: "requestEnd" });
                    for (e = (n = f(t)).next(); !e.done; e = n.next()) i.push({ timestamp: e.value, type: "requestStart" });
                    for (i.sort((function(t, n) { return t.timestamp - n.timestamp })), t = t.length, n = i.length - 1; 0 <= n; n--) switch ((e = i[n]).type) {
                        case "requestStart":
                            t--;
                            break;
                        case "requestEnd":
                            if (2 < ++t) return e.timestamp;
                            break;
                        default:
                            throw Error("Internal Error: This should never happen")
                    }
                    return 0
                }

                function m(t) {
                    t = t || {}, this.w = !!t.useMutationObserver, this.u = t.minValue || null, t = window.__tti && window.__tti.e;
                    var n = window.__tti && window.__tti.o;
                    this.a = t ? t.map((function(t) { return { start: t.startTime, end: t.startTime + t.duration } })) : [], n && n.disconnect(), this.b = [], this.f = new L, this.j = null, this.v = -1 / 0, this.i = !1, this.h = this.c = this.s = null,
                        function(t, n) {
                            var i = XMLHttpRequest.prototype.send,
                                e = d++;
                            XMLHttpRequest.prototype.send = function(r) { for (var o = [], u = 0; u < arguments.length; ++u) o[u - 0] = arguments[u]; var a = this; return t(e), this.addEventListener("readystatechange", (function() { 4 === a.readyState && n(e) })), i.apply(this, o) }
                        }(this.m.bind(this), this.l.bind(this)),
                        function(t, n) {
                            var i = fetch;
                            fetch = function(e) {
                                for (var o = [], u = 0; u < arguments.length; ++u) o[u - 0] = arguments[u];
                                return new r((function(e, r) {
                                    var u = d++;
                                    t(u), i.apply(null, [].concat(l(o))).then((function(t) { n(u), e(t) }), (function(t) { n(t), r(t) }))
                                }))
                            }
                        }(this.m.bind(this), this.l.bind(this)),
                        function(t) {
                            t.c = new PerformanceObserver((function(n) {
                                for (var i = (n = f(n.getEntries())).next(); !i.done; i = n.next())
                                    if ("resource" === (i = i.value).entryType && (t.b.push({ start: i.fetchStart, end: i.responseEnd }), b(t, p(t.g, t.b) + 5e3)), "longtask" === i.entryType) {
                                        var e = i.startTime + i.duration;
                                        t.a.push({ start: i.startTime, end: e }), b(t, e + 5e3)
                                    }
                            })), t.c.observe({ entryTypes: ["longtask", "resource"] })
                        }(this), this.w && (this.h = function(t) { var n = new MutationObserver((function(n) { for (var i = (n = f(n)).next(); !i.done; i = n.next())("childList" == (i = i.value).type && v(i.addedNodes, h) || "attributes" == i.type && h.includes(i.target.tagName.toLowerCase())) && t(i) })); return n.observe(document, { attributes: !0, childList: !0, subtree: !0, attributeFilter: ["href", "src"] }), n }(this.B.bind(this)))
                }

                function w(t) {
                    t.i = !0;
                    var n = 0 < t.a.length ? t.a[t.a.length - 1].end : 0,
                        i = p(t.g, t.b);
                    b(t, Math.max(i + 5e3, n))
                }

                function b(t, n) {
                    !t.i || t.v > n || (clearTimeout(t.j), t.j = setTimeout((function() {
                        var n = performance.timing.navigationStart,
                            i = p(t.g, t.b);
                        if (n = (window.a && window.a.A ? 1e3 * window.a.A().C - n : 0) || performance.timing.domContentLoadedEventEnd - n, t.u) var e = t.u;
                        else e = performance.timing.domContentLoadedEventEnd ? (e = performance.timing).domContentLoadedEventEnd - e.navigationStart : null;
                        var r = performance.now();
                        null === e && b(t, Math.max(i + 5e3, r + 1e3));
                        var o = t.a;
                        (i = 5e3 > r - i || 5e3 > r - (i = o.length ? o[o.length - 1].end : n) ? null : Math.max(i, e)) && (t.s(i), clearTimeout(t.j), t.i = !1, t.c && t.c.disconnect(), t.h && t.h.disconnect()), b(t, performance.now() + 1e3)
                    }), n - performance.now()), t.v = n)
                }
                m.prototype.getFirstConsistentlyInteractive = function() { var t = this; return new r((function(n) { t.s = n, "complete" == document.readyState ? w(t) : window.addEventListener("load", (function() { w(t) })) })) }, m.prototype.m = function(t) { this.f.set(t, performance.now()) }, m.prototype.l = function(t) { this.f.delete(t) }, m.prototype.B = function() { b(this, performance.now() + 5e3) }, i.Object.defineProperties(m.prototype, { g: { configurable: !0, enumerable: !0, get: function() { return [].concat(l(this.f.values())) } } });
                var g = { getFirstConsistentlyInteractive: function(t) { return t = t || {}, "PerformanceLongTaskTiming" in window ? new m(t).getFirstConsistentlyInteractive() : r.resolve(null) } };
                t.exports ? t.exports = g : window.ttiPolyfill = g
            }()
        }));

    function xh(t) { return t.quality || t.metadata.quality }

    function Mh(t) { return yc("av01", t) ? "AV1" : yc("hvc1", t) ? "HEVC" : yc("avc1", t) ? "AVC" : null }

    function Ah(t) {
        var n = xh(t),
            i = { "1440p": "2K", "2160p": "4K", "2700p": "5K", "3240p": "6K", "3780p": "7K", "4320p": "8K" };
        for (var e in i) n = n.replace(e, i[e]);
        return n
    }

    function Ch(t, n) { var i, e; return (null == t || null == (i = t.request) || null == (e = i.ab_tests) ? void 0 : e[n]) ? t.request.ab_tests[n] : {} }

    function Rh(t, n, i, e) {
        var o, u, a, s, c = function(t) { return function() { for (var n = [], i = 0; i < arguments.length; i++) n[i] = arguments[i]; try { return r.resolve(t.apply(this, n)) } catch (t) { return r.reject(t) } } }((function(n) {
                var i = n.identifier,
                    e = n.data,
                    o = e.request,
                    u = e.response,
                    a = u.headers;
                return function(t, n, i) { return t && t.then || (t = r.resolve(t)), n ? t.then(n) : t }(u.arrayBuffer(), (function(n) {
                    if ("video" === i.type) {
                        var e = t.backbone.representations.reverse(),
                            r = e[i.stream];
                        if (!r) return;
                        var s = function(n, i, e, r, o, u) {
                            var a = e.headers;
                            delete a[""];
                            var s = {};
                            Object.keys(a).forEach((function(t) {
                                var n = a[t],
                                    i = t.replace(l, "_");
                                s[i] = n
                            }));
                            var c = u.slice();
                            return c.forEach((function(t) { t.profile = String(t.profile || "") || null, t.id = String(t.id || "") || null })), { host: mt(i.data.url), duration: i.data.duration, size: r.byteLength, index: n.segment, session_id: t.config.request.session, profile_id: String(o.profile || "") || null, quality: o.quality, streams: c, clip_id: t.config.video.id, video_file_id: String(o.id || "") || null, headers: s, buffered: dc(dt(t.backbone.currentTime, t.backbone.buffered), 2), ttfb: it(e), request_id: i.data.uuid ? i.data.uuid : "" }
                        }(i, o, u, n, r, e);
                        t.events.fire(Fc.Zf, { name: ef.CHUNK_DOWNLOADED, data: s }), Ch(t.config, "chunk_logging").group && t.config.request.urls.fresnel_chunk_url && function(t, n, i) {
                            var e = Date.now(),
                                r = [{ uuid: hc(), created_at: e, event: { name: ef.CHUNK_DOWNLOADED, version: 1, ts_ms: e, fields: n }, tracker: { name: "vimeo-player", version: i } }];
                            new Zc(t).logRequestPromiseWithUrl(t, JSON.stringify(r), !0)
                        }(t.config.request.urls.fresnel_chunk_url + "?beacon=1", s, of(t.config)), Y += n.byteLength
                    }
                    "akamai-edge-ip" in a && (L = a["akamai-edge-ip"]), "quic-version" in a && (N = a["quic-version"]), "x-vim-cachebc" in a && (F = a["x-vim-cachebc"]), "x-akamai-request-id" in a && (V = a["x-akamai-request-id"]),
                        function(t) {
                            var n = t.headers,
                                i = t.url;
                            if ("x-cache-hits" in n) {
                                var e = n["x-cache-hits"].match(/(0|1)(?:, (0|1))?/);
                                null !== e && (B = { url: i, servedBy: n["x-served-by"], edge: e[1] ? !!parseInt(e[1], 10) : null, tier1: e[2] ? !!parseInt(e[2], 10) : null, tier2: null })
                            } else if ("x-vim-cachebc" in n) {
                                var r = n["x-vim-cachebc"].match(/E:(m|h)(?:,TD0:(m|h))?(?:,TD1:(m|h))?(?:,TD2:(m|h))?/);
                                if (null !== r)
                                    for (var o in B = { url: i, edge: r[1] ? r[1] : null, tier1: r[2] ? r[2] : null, tier2: r[3] ? r[3] : null }) "edge" !== o && "tier1" !== o && "tier2" !== o || ("h" === B[o] ? B[o] = !0 : "m" === B[o] && (B[o] = !1))
                            }
                        }(u);
                    var c = {};
                    L && (c.akamai_edge_ip = L), N && (c.quic_version = N), F && (c.akamai_cache_debug = F), V && (c.akamai_request_id = V), c.manifest_load_durations = t.backbone.manifestLoadDurations, c.successful_segment_count = t.backbone.successfulSegments.length, c.failed_segment_count = t.backbone.failedSegments.length, W = c
                }))
            })),
            f = new P,
            l = new RegExp("-", "g"),
            d = null,
            h = null,
            v = !1,
            p = !0,
            m = !1,
            w = !1,
            b = "auto",
            g = {},
            y = {},
            _ = null,
            k = null,
            E = null,
            T = [],
            S = null,
            x = {},
            M = !1,
            A = !1,
            C = "none",
            R = !1,
            O = 0,
            I = 0,
            j = 0,
            D = 0,
            L = null,
            N = null,
            F = null,
            V = null,
            B = null,
            H = !1,
            q = null,
            W = null,
            z = null,
            G = null,
            $ = !1,
            K = !1,
            Y = 0;

        function J() {
            var n = f.get(t.backbone.videoElement);
            if (n) return u = n.Sl, void(a = n.Ml);
            a = new Jc, u = new nf(t.backbone.videoElement, Z), X(), f.set(t.backbone.videoElement, { Sl: u, Ml: a })
        }

        function X() {
            var n = a;
            u.customizeHooks({
                bufferTracker: n,
                videoBufferCheck: function() { t.events.on(_i.BUFFER_STARTED, (function() { v && ($ || H || (H = !0, n.trackBufferStart(u.logBufferStart, { lower_profile_available: t.backbone.isLowerProfileAvailable }))) })), t.events.on(_i.BUFFER_ENDED, (function() { v && H && (H = !1, n.trackBufferEnd(u.logBufferEnd, { cdn_data: B }), n.resetLastBufferTime()) })) },
                addEventData: function(t) {
                    var n = K;
                    switch (K = !1, t) {
                        case ef.VIDEO_START_TIME:
                            return W;
                        case ef.VIDEO_SEEK:
                            var i = z;
                            return z = null, i;
                        case ef.VIDEO_EXIT:
                            return { tti: q };
                        case ef.VIDEO_PLAYED:
                        case ef.VIDEO_PAUSED:
                            return { api_call: n }
                    }
                    return null
                }
            }), u.initHooks()
        }

        function Z(n) {
            var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            (i = Object.assign(Q(), u ? u.globalProperties() : void 0, i)).name = n, t.events.fire(Fc.Zf, { name: n, data: i }), o.log(i).catch((function(t) {}))
        }

        function Q() {
            return Object.assign(function() { var n, e, r, o, u, a, s = { autoplay: 1 === t.config.embed.autoplay, background: !!t.config.embed.settings.background, clip_id: t.config.video.id, context: t.config.embed.context, device_pixel_ratio: window.devicePixelRatio || 1, drm: t.config.request.drm || !1, embed: !t.config.embed.on_site, is_mod: !!t.config.user.mod, is_spatial: !(!_s.spatialPlayback || !t.config.video.spatial), logged_in: !!t.config.user.logged_in, looping: !!t.config.embed.loop, owner_id: null == (n = t.config.video) || null == (e = n.owner) ? void 0 : e.id, product: rf(t), referrer: t.config.request.referrer, session_id: t.config.request.session, stayed_on_auto: p, version: of(t.config), version_backend: t.config.request.build.backend, viewer_id: null == (r = t.config.user) ? void 0 : r.id, viewer_team_id: null == (o = t.config.user) ? void 0 : o.team_id, viewer_team_origin_user_id: null == (u = t.config.user) ? void 0 : u.team_origin_user_id, vuid: Mf("vuid") }; return t.config.video.owner && (s.account_type = t.config.video.owner.account_type), t.config.embed.api && (s.api_version = t.config.embed.api), t.config.embed.app_id && (s.app_id = String(t.config.embed.app_id)), t.config.video.privacy && (s.privacy = t.config.video.privacy), i.get(Wf) && (s.live_session_id = null == (a = t.config.video.live_event) ? void 0 : a.id), _s.webvr && t.config.video.spatial && (s.webvr_support = !0), _s.webxr && t.config.video.spatial && (s.webxr_support = !0), s }(), function() {
                var n = t.backbone.video ? t.backbone.video.currentFile : {},
                    e = function() {
                        var n = {},
                            i = md(),
                            e = Na("asc"),
                            r = "MediaSourceScanner" === t.backbone.currentScannerName,
                            o = "HTMLScanner" === t.backbone.currentScannerName,
                            u = "HLSLiveScanner" === t.backbone.currentScannerName,
                            a = [];
                        o && (a = ia(t.config, "request.files.progressive") || ia(t.config, "request.files.hls") || []), r && (a = ia(t.config, "request.files.dash.streams", [])), u && (a = t.backbone.video.currentFile.mime === xc.dashMpd ? ia(t.config, "request.files.dash.streams", []) : ia(t.config, "request.files.hls.streams", []));
                        var s = U(a).sort(e).map((function(t) { return t.profile })),
                            c = -1,
                            f = 0,
                            l = null;
                        if (Object.keys(y).forEach((function(t) {
                                var n = s.indexOf(parseInt(t, 10));
                                n > c && (c = n);
                                var e = y[t].reduce((function(t, n) { return ((n.end || i) - n.start) / 1e3 + t }), 0);
                                e > f && (f = e, l = t)
                            })), n.highest_profile = s[c], n.highest_available_profile = s[s.length - 1], n.most_used_profile = l, (r || u) && T) {
                            n.max_speed = Math.round(Math.max.apply(Math, tt(T))) / 1e3, n.min_speed = Math.round(Math.min.apply(Math, tt(T))) / 1e3;
                            var d = T.reduce((function(t, n) { return t + n }), 0);
                            n.average_speed = Math.round(d / T.length) / 1e3
                        }
                        return n
                    }(),
                    r = n.id,
                    o = void 0 === r ? 0 : r,
                    u = n.mime,
                    a = void 0 === u ? xc.h264 : u,
                    s = n.metadata,
                    c = (s = void 0 === s ? {} : s).profile,
                    f = void 0 === c ? null : c,
                    l = !1,
                    v = !1;
                switch (a) {
                    case xc.dash:
                        0 === n.restrictedStreamIndexes.length && (l = !0), ia(t.config, "request.files.dash.separate_av") && (v = !0), f = g ? g.profile : null;
                        break;
                    case xc.hls:
                        l = !0
                }
                var p, m = { audio_bitrate: t.backbone.getBitrateAtTime(t.backbone.currentTime, "audio") / 1e3, auto: l, average_speed: e.average_speed || 0, cdn: n.metadata ? n.metadata.cdn : "akamai", delivery: "live" !== Vc[a] ? Vc[a] : "dash", dropped_frames: D, dropped_frame_percent: j, event_time: d + wd(h), ended: A, forced_embed_quality: C, fullscreen: R, highest_available_profile: e.highest_available_profile ? String(e.highest_available_profile) : null, highest_profile: e.highest_profile ? String(e.highest_profile) : null, max_speed: isFinite(e.max_speed) ? e.max_speed : 0, mime: n.mime || null, min_speed: isFinite(e.min_speed) ? e.min_speed : 0, most_used_profile: e.most_used_profile ? String(e.most_used_profile) : null, origin: n.metadata ? n.metadata.origin : "", profile_id: f ? String(f) : null, codec: Eu(g) ? "" : Mh(g.codecs), quality: g ? g.quality : null, quality_downswitch_count: I, quality_upswitch_count: O, quality_switch_count: O + I, separate_av: v, target_profile_id: G, ttfb: nt(), video_bitrate: t.backbone.getBitrateAtTime(t.backbone.currentTime, "video") / 1e3, video_duration: dc(t.config.video.duration), video_file_id: Number.isInteger(Number(o)) ? parseInt(o, 10) : null };
                i.get(Wf) && (m.ecdn = !!t.config.video.p2p, m.ecdn && (m.ecdn_peers = null == (p = window.Streamroot) ? void 0 : p.instances[0].stats.realtime.dnaSources));
                return m
            }(), function() {
                var n = {};
                if (t.config.request.ab_tests)
                    for (var i in t.config.request.ab_tests) { var e = t.config.request.ab_tests[i]; for (var r in n["".concat(i, "_test")] = 1, n["".concat(i, "_group")] = e.group, e.data) n["".concat(i, "_data_").concat(r)] = e.data[r] }
                return n
            }())
        }

        function nt() {
            var t = -1;
            if (void 0 !== window.performance && "function" == typeof window.performance.getEntriesByType) {
                var n = window.performance.getEntriesByType("resource");
                if (n) {
                    var i = n.filter((function(t) { return null !== t.name.split("?")[0].match(/\.m4s$|\.ts$/) }));
                    t = i.map((function(t) { return t.responseStart - t.connectStart })).reduce((function(t, n) { return t + n }), 0) / (i.length || 1)
                }
            }
            return dc(t, 2)
        }

        function it(t) {
            var n = t.url,
                i = -1;
            if (window.performance) {
                var e = window.performance.getEntriesByType("resource");
                if (e.length) {
                    var r = e.filter((function(t) { return t.name === n })).sort((function(t, n) { return t.connectStart - n.connectStart }));
                    if (r.length) {
                        var o = r[r.length - 1];
                        i = o.responseStart - o.connectStart
                    }
                }
            }
            return dc(i, 2)
        }
        h = bd(), d = t.config.request.timestamp, o = new Zc(function() { var n = "?beacon=1&session-id=".concat(t.config.request.session); return t.config.request.urls.fresnel + n }()), t.events.on(Fc.ks, (function(t) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { final: !0 },
                i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                e = { error_type: t, error_reason: i };
            u.handleExternalError(e, n)
        })), t.events.on(Mc.Ja, (function() { M = !1 })), t.events.on(Mc.za, (function() { $ = !0 })), t.events.on(Fc.bf, (function(t, n) { Z(ef.ERROR_LINK_PRESSED, { error_type: n, error_url: t }) })), t.events.on(Fc.dc, (function() { R = !0, Z(ef.VIDEO_FULLSCREEN_CHANGE) })), t.events.on(Fc.vc, (function() { R = !1, Z(ef.VIDEO_FULLSCREEN_CHANGE) })), t.events.on(Fc.Nf, (function(t, n) { Z(t ? ef.ALERT_DISPLAYED : ef.ALERT_HIDDEN) })), t.events.on(Fc.Qc, (function() { d = t.config.request.timestamp, h = bd(), v = !1, p = !0, m = !1, w = !1, b = "auto", g = {}, y = {}, _ = null, k = null, E = null, T = [], S = null, x = {}, M = !1, A = !1, C = "none", R = !1, O = 0, I = 0, j = 0, D = 0, L = null, N = null, F = null, B = null, q = null, G = null, Y = 0, u && (u.reset(), X()) })), t.events.on(Fc.Ns, (function() { z = { seek_type: "nudge" } })), t.events.on(Fc.Ys, (function(t, n) { z = { seek_type: n } })), t.events.on(Fc.zs, (function(t) { z = { seek_type: "chapter-".concat(t) } })), t.events.on(Fc.lf, (function(t) { Z(ef.OUTRO_VIDEO_SELECTED, { selected_video_id: t }) })), t.events.on(Bo, (function() {
            M || Tf.isCastConnected || (t.performDelegateAction(Nc, (function(t) { M = !0, s.then((function() { return u.logStartRequest() })).catch((function() {})) })), Ch(t.config, "chunk_logging").group && t.config.request.urls.fresnel_manifest_url && function(t, n, i, e) {
                var r = Date.now(),
                    o = [{ uuid: hc(), created_at: r, event: { name: "session_manifest", version: 1, ts_ms: r, fields: { sessionID: n, manifest: i } }, tracker: { name: "vimeo-player", version: e } }];
                new Zc(t).logRequestPromiseWithUrl(t, JSON.stringify(o), !0)
            }(t.config.request.urls.fresnel_manifest_url + "?beacon=1", t.config.request.session, t.backbone.manifest, of(t.config)))
        })), t.events.on(Fc.kc, (function(t) { "email-capture" === t && Z(ef.SLATE_DISPLAYED, { slate_type: "email" }) })), t.events.on(Fc.Ps, (function(t, n) { Z(ef.VIDEO_PLAYBACK_RATE_CHANGED, { previous_playback_rate: n }) })), t.events.on(Fc.Ds, (function(t) { Z(ef.CLICK, { click_target: t }) })), t.events.on(Mc.Za, (function(n) { "auto" !== n && (p = !1), t.backbone.video.currentFile.mime === xc.dash && ("auto" === n || m ? "auto" === n && m && !w && (Z(ef.VIDEO_SWITCH_BACK_TO_AUTO, { quality: b, auto: 1 }), w = !0) : (Z(ef.VIDEO_SWITCH_FROM_AUTO, { quality: n, auto: 0 }), m = !0), b = n) })), t.events.on(Mc.as, (function(t) { S !== t && (S = t, Z(ef.CAPTIONS_ENABLED, { captions_id: String(t) })) })), t.events.on(Mc.ss, (function() { S && (S = null, Z(ef.CAPTIONS_DISABLED)) })), t.events.on(_f.connected, (function() { Z(ef.CHROMECAST_CONNECTED) })), t.events.on(_f.disconnected, (function() { Z(ef.CHROMECAST_DISCONNECTED) })), t.events.on(_i.STREAM_CHANGE, (function(t, n, i) {
            g = t;
            var e = t.profile ? t.profile : t.id,
                r = md();
            if (y[e] = y[e] || [], _) {
                var o = y[_].length - 1;
                y[_][o] && (y[_][o].end = r)
            }
            k && (i[n].bitrate > k ? O += 1 : I += 1), y[e].push({ start: r }), x[e] = { bitrate: i[n].bitrate, width: i[n].width, height: i[n].height }, Z(ef.VIDEO_STREAM_CHANGE, { previous_audio_bitrate: E / 1e3, previous_video_bitrate: k / 1e3, previous_profile_id: String(_) }), _ = e, k = i[n].bitrate, E = i[n].audioBitrate
        })), t.events.on(_i.STREAM_TARGET_CHANGE, (function(t) { t && (G = String(t.profile || "") || null) })), t.events.on(qo, (function(t) { C = t })), t.events.on(bi.PLAYING, (function() { $ = !1 })), t.events.once(Fc.Ls, (function() { v = !0 })), t.events.on(Fc.qf, (function() { Z(ef.AD_BUFFERING) })), t.events.on(Fc.Wf, (function() { Z(ef.AD_COMPLETE) })), t.events.on(Fc.zf, (function() { Z(ef.AD_CLICKED) })), t.events.on(Fc.Gf, (function(t) { Z(ef.AD_ERROR, { error_type: t.errorType, error_reason: t.errorReason }) })), t.events.on(Fc.$f, (function() { Z(ef.AD_PAUSED) })), t.events.on(Fc.Kf, (function() { Z(ef.AD_RESUMED) })), t.events.on(Fc.Yf, (function(t) { Z(ef.AD_STARTED, { startup_duration: t.time ? dc(t.time / 1e3, 2) : null }) })), t.events.on(Fc.Jf, (function() { Z(ef.AD_SKIPPED) })), t.events.on(Fc.Ss, (function() { _s.iPhone && u.setDisplayContext(1) })), t.events.on(Fc.Ms, (function() { _s.iPhone && u.setDisplayContext(0) })), t.events.on(_i.DROPPED_FRAMES, (function(t) {
            var n = t.dropped / t.total * 100;
            j = Math.round(100 * n) / 100, D = t.dropped
        })), t.events.on(_i.BANDWIDTH, (function(t) {
            var n = t.speed;
            T.push(n), T.length > 500 && T.shift()
        })), t.events.on(_i.MANIFEST_TIMEOUT, (function() { Z(ef.VIDEO_MANIFEST_TIMEOUT) })), t.events.on(_i.MANIFEST_LOADED, (function() { Z(ef.VIDEO_MANIFEST_LOADED) })), t.events.on(_i.DOWNLOAD_END, c), t.events.on(_i.DOWNLOAD_TIMEOUT, (function() { Z(ef.DOWNLOAD_TIMEOUT) })), t.events.on(_i.SCANNER_CHANGE, (function() { B = null })), t.events.on(_i.AV_DURATION_MISMATCH, (function(t) { Z(ef.VIDEO_DURATION_MISMATCH, { duration_difference: Math.round(100 * t) / 100 }) })), t.events.on(_i.QUOTA_EXCEEDED_ERROR, (function(t) {
            var n = t.buffered,
                i = { error_type: _i.QUOTA_EXCEEDED_ERROR };
            i.buffered = dc(dt(0, n), 2), i.bytes_loaded = Y, Z(ef.VIDEO_PLAYBACK_ERROR, i)
        })), t.events.on(Ti.MEDIASESSION_PLAY, (function() { Z(ef.MEDIASESSION_PLAY) })), t.events.on(Ti.MEDIASESSION_PAUSE, (function() { Z(ef.MEDIASESSION_PAUSE) })), t.events.on(Ti.MEDIASESSION_SEEK_FORWARD, (function() { Z(ef.MEDIASESSION_SEEK_FORWARD) })), t.events.on(Ti.MEDIASESSION_SEEK_BACKWARD, (function() { Z(ef.MEDIASESSION_SEEK_BACKWARD) })), t.events.on(Uc.za, (function() { z = { seek_type: "api" } })), t.events.on(Uc.Qf, (function() { K = !0 })), t.events.on(Uc.tl, (function() { K = !0 })), t.events.on(Ei.WEBVR_HARDWARE_AVAILABLE, (function(t) { Z(ef.WEBVR_HARDWARE_AVAILABLE, { vr_hardware: t.displayName }) })), t.events.on(Ei.WEBVR_ENTER, (function() { Z(ef.ENTER_WEBVR, !0) })), t.events.on(Ei.WEBVR_EXIT, (function() { Z(ef.EXIT_WEBVR, !0) })), t.events.on(Si.BRAIN_ML_MODEL_INPUTS, (function(n) {
            var i;
            (null == (i = n.geolocation) ? void 0 : i.length) && n.geolocation[0].length ? n.geolocation = n.geolocation[0][0] : n.geolocation = "", t.config.request.urls.fresnel_mimir_inputs_url && function(t, n, i, e) {
                var r = { chunk_request_id: i.chunkRequestID, duration: i.duration, available_qualities: i.availableQualities, next_chunk_sizes: i.nextChunkSizes, last_buffer_sizes: i.lastBufferSizes, last_chunk_download_times: i.lastChunkDownloadTimes, last_chunk_sizes: i.lastChunkSizes, last_chunk_qualities: i.lastChunkQualities, num_remaining_chunks: i.numRemainingChunks, last_playback_heads: i.lastPlaybackHeads, geolocation: i.geolocation, session_id: n },
                    o = Date.now(),
                    u = [{ uuid: hc(), created_at: o, event: { name: "mimir_inputs", version: 1, ts_ms: o, fields: r }, tracker: { name: "vimeo-player", version: e } }];
                new Zc(t).logRequestPromiseWithUrl(t, JSON.stringify(u), !0)
            }(t.config.request.urls.fresnel_mimir_inputs_url + "?beacon=1", t.config.request.session, n, of(t.config))
        })), (s = new r((function(n, i) {
            var e;
            (null == (e = t.backbone) ? void 0 : e.video) && n(), t.events.on(Vo, n)
        }))).then(J).catch((function() {})), t.events.on(Fc.mf, J), Sh.getFirstConsistentlyInteractive().then((function(t) { q = dc(t) })).catch((function() {}))
    }
    var Oh = function() {
        function t(t, n, i) { this.player = t, this.element = n, this.store = i, this.muxClient = null, this.Al() && (Math.random() > .75 || this.Cl()) }
        var n = t.prototype;
        return n.Rl = function() { return !!this.player.config.request.flags.ott }, n.Al = function() { return !(this.player.doNotTrackEnabled || !this.Rl() && !this.store.get(Wf)) }, n.Cl = function() {
            var t = this;
            if (!document.getElementById("vp-mux-client")) {
                var n = document.createElement("script");
                n.setAttribute("id", "vp-mux-client"), n.setAttribute("src", this.player.config.request.urls.mux_url), n.onreadystatechange = n.onload = function() { t.Ol(), t.store.get(Wf) || t.Il() }, document.getElementsByTagName("head")[0].appendChild(n)
            }
        }, n.Ol = function() {
            var t = this;
            this.player.events.on(Fc.Qc, (function(n) {
                if (t.Al() && n && "undefined" != typeof mux) {
                    var i = t.player.backbone.video ? t.player.backbone.video.currentFile : {},
                        e = t.element.querySelector(".vp-telecine").getElementsByTagName("video")[0];
                    mux.emit(e, "videochange", { video_title: t.player.config.video.title, video_id: t.player.config.video.id, video_duration: 1e3 * t.player.config.video.duration, video_cdn: i.metadata ? i.metadata.cdn : "akamai", video_stream_type: t.store.get(Wf) ? "live" : "vod", viewer_user_id: t.player.config.request.session })
                }
            })), this.player.events.on(nu.STREAM_ONLINE, (function() { t.Il() })), this.player.events.on(nu.STREAM_OFFLINE, (function() {
                var n = t.element.querySelector(".vp-telecine").getElementsByTagName("video")[0];
                mux.emit(n, "ended")
            }))
        }, n.Il = function() {
            if ("undefined" != typeof mux) {
                var t = this.player.backbone.video ? this.player.backbone.video.currentFile : {},
                    n = this.element.querySelector(".vp-telecine").getElementsByTagName("video")[0];
                null !== this.muxClient && mux.destroyMonitor(n);
                var i = "dev" === this.player.config.request.build.js ? "6eq01ih8u9u8fkk4hbindded5" : "73cngs5ov03sbnck36isdkndt";
                this.store.get(Hf) && (i = "dev" === this.player.config.request.build.js ? "kghblrf3bb9uk33lv58ompm3k" : "md0ig7ssl8unl2kpl0h6p0drn");
                var e = { property_key: i, player_name: "Vimeo Player", player_init_time: Date.now(), player_version: of(this.player.config), video_title: this.player.config.video.title, video_id: this.player.config.video.id, video_duration: 1e3 * this.player.config.video.duration, video_cdn: t.metadata ? t.metadata.cdn : "akamai", video_stream_type: this.store.get(Wf) ? "live" : "vod", viewer_user_id: this.player.config.request.session };
                this.Rl() && (e.property_key = "dev" === this.player.config.request.build.js ? "3tb8rggvj5m71caj9jfpiidos" : "lrc6o7kvhc6npvqq2r5iks5u4", this.player.config.ott && (e = Object.assign(e, this.player.config.ott))), this.muxClient = mux.monitor(n, { debug: !1, minimumRebufferDuration: 500, data: e })
            }
        }, t
    }();

    function Ih(t) {
        var n, i, e, o, u, a = "https://collector.vhx.tv/events.gif",
            s = new Zc(a),
            c = t.config.ott || {};

        function f() { c = t.config.ott || {}, e = null, o = null, u = null, i = !1, n = !1 }

        function l(i, e) {
            (e = Object.assign({}, e, { name: c.video_title, user_id: c.viewer_user_id, channel_id: c.video_series, user_agent: navigator.userAgent, url: top === self ? window.location.href : document.referrer, referrer: t.config.request.referrer, session_id: t.config.request.session, device: "html5" }, { type: "video", video_id: c.video_id, current_src: t.backbone.currentFile.src, current_subtitle: "none", current_type: c.video_content_type, duration: c.video_duration, is_drm: t.config.request.drm ? 1 : 0, is_fullscreen: n ? 1 : 0, is_trailer: c.is_trailer ? 1 : 0, is_chromecast: Tf.isCastConnected ? 1 : 0, is_live: t.config.video.live_event, seconds: 10, timecode: t.currentTime })).name = i, void 0 === e.timestamp && (e.timestamp = Math.round(.001 * Date.now()));
            var r = pt(a, e);
            return s.logRequestPromiseWithUrl(r, {}, !0, "GET").catch((function(t) {}))
        }

        function d() { t.events.on(bi.ENDED, h), t.events.on(bi.ERROR, v), t.events.on(bi.PAUSE, p), t.events.on(bi.PLAY, m), t.events.on(bi.SEEKED, w), t.events.on(bi.WAITING, b), t.events.on(Fc.dc, g), t.events.on(Fc.vc, y), t.events.on(Fc.qf, _), t.events.on(Fc.Wf, k), t.events.on(Fc.zf, E), t.events.on(Fc.Gf, T), t.events.on(Fc.$f, S), t.events.on(Fc.Kf, x), t.events.on(Fc.Yf, M), t.events.on(Fc.Jf, A) }

        function h() { clearTimeout(u), l("ended") }

        function v() { clearTimeout(u), l("error") }

        function p() { clearTimeout(u), l("pause") }

        function m() {
            if (function t() {
                    o = Date.now(), clearTimeout(u), u = setTimeout((function() {
                        ! function(t) {
                            var n = t.elapsedTime,
                                i = Math.round(.001 * n);
                            null !== e && e(), l("timeupdate", Object.assign({ seconds: i }))
                        }({ elapsedTime: Date.now() - o }), t()
                    }), 1e4)
                }(), !i) return i = !0, void l("firstplay");
            l("play")
        }

        function w() { l("seeked") }

        function b() { l("waiting") }

        function g() { n = !0 }

        function y() { n = !1 }

        function _() { l(ef.AD_BUFFERING) }

        function k() { l(ef.AD_COMPLETE) }

        function E() { l(ef.AD_CLICKED) }

        function T() { l(ef.AD_ERROR) }

        function S() { l(ef.AD_PAUSED) }

        function x() { l(ef.AD_RESUMED) }

        function M() { l(ef.AD_STARTED) }

        function A() { l(ef.AD_SKIPPED) }
        return f(), t.config.ott ? d() : new r((function(n, i) { t.ottVideoMetadata ? n() : t.events.on(Fc.sf, (function(t) { n() })) })).then((function() { c = t.ottVideoMetadata, d() })).catch((function(t) {})), t.events.on(Fc.Qc, f), { reset: function() { clearTimeout(u), o = null, u = null } }
    }
    var jh = function(t) {
        return function(n) {
            for (var i = arguments.length, e = new Array(i > 1 ? i - 1 : 0), r = 1; r < i; r++) e[r - 1] = arguments[r];
            return e.forEach((function(i) {
                for (var e in i) {
                    var r = Object.getOwnPropertyDescriptor(i, e);
                    Object.defineProperty(n, e, Object.assign(r, t))
                }
            })), n
        }
    }({ enumerable: !0, configurable: !0, writeable: !1 });

    function Dh(t, n) {
        var i, e, r, o, u, a = nt();

        function s(t) {
            var r = new i.AdsRenderingSettings;
            r.restoreCustomPlaybackStateOnAdBreakComplete = !0, r.uiElements = [], e = t.getAdsManager(n.videoPlayer, r), a.fire("ads-manager-loaded"), e.addEventListener(i.AdErrorEvent.Type.AD_ERROR, w), e.addEventListener(i.AdEvent.Type.CONTENT_PAUSE_REQUESTED, c), e.addEventListener(i.AdEvent.Type.CONTENT_RESUME_REQUESTED, f), e.addEventListener(i.AdEvent.Type.AD_BUFFERING, l), e.addEventListener(i.AdEvent.Type.STARTED, d), e.addEventListener(i.AdEvent.Type.COMPLETE, h), e.addEventListener(i.AdEvent.Type.CLICK, v), e.addEventListener(i.AdEvent.Type.SKIPPED, p), e.addEventListener(i.AdEvent.Type.ALL_ADS_COMPLETED, m)
        }

        function c(t) { a.fire("content-pause-requested", t) }

        function f(t) { a.fire("content-resume-requested", t) }

        function l(t) { a.fire("ad-buffering", t) }

        function d(t) { a.fire("ad-started", t) }

        function h(t) { a.fire("ad-complete", t) }

        function v(t) { e.pause(), a.fire("ad-click", t) }

        function p(t) { a.fire("ad-skipped", t) }

        function m(t) { a.fire("all-ads-completed", t) }

        function w(t) { a.fire("ad-error", t.getError()), e && e.destroy() }
        var b = { start: function(t, n) { return u.initialize(), e.init(t, n, i.ViewMode.NORMAL), e.start() }, stop: function() { return e.stop() }, pause: function() { return e.pause() }, play: function() { return e.resume() }, skip: function() { return e.skip() }, resize: function(t, n, r) { return r ? e.resize(t, n, i.ViewMode.FULLSCREEN) : e.resize(t, n, i.ViewMode.NORMAL) }, destroy: function() { a.off(), e.destroy(), r.destroy(), u.destroy() }, get volume() { return e.getVolume() }, set volume(t) { e.setVolume(t) }, get adsManager() { return e }, get adsLoader() { return r }, get remainingTime() { return e.getRemainingTime() }, setContentComplete: function() { r.contentComplete() }, on: function(t, n) { return a.on(t, n), this }, off: function(t, n) { return a.off(t, n), this } };
        return function(t, n, i) {
            if (document.getElementById("vp-ima-sdk")) i();
            else {
                var e = document.createElement("script");
                e.id = "vp-ima-sdk", e.src = "https://imasdk.googleapis.com/js/sdkloader/ima3.js", e.onreadystatechange = e.onload = function() { i && i() }, document.getElementsByTagName("body")[0].appendChild(e)
            }
        }(0, 0, (function() {
            i = google.ima;
            var e = _s.iOS ? n.videoPlayer.videoElement : n.videoPlayer;
            u = new i.AdDisplayContainer(t, e), (r = new i.AdsLoader(u)).addEventListener(i.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, s), r.addEventListener(i.AdErrorEvent.Type.AD_ERROR, w), o = new i.AdsRequest, n.adUrl && (o.adTagUrl = n.adUrl), o.linearAdSlotWidth = n.width.linear, o.linearAdSlotHeight = n.height.linear, o.nonLinearAdSlotWidth = n.width.nonlinear, o.nonLinearAdSlotHeight = n.height.nonlinear, r.requestAds(o)
        })), jh(this, b)
    }

    function Lh(t, n) {
        var i, e, o, u, a, s, c, f, l, d, h, v, p = !1,
            m = nt(),
            w = {};

        function b() {
            e && (R(), e = null), u && (u.destroy(), u = null), o && clearInterval(o), a = null, s = !1, c = !1, l = !1, f = !1, d = !1, p = !1, v = new r((function(t, n) { h = t })), t.events.once(Bo, (function() { d = !0 })), t.events.on(bi.ERROR, (function(t) {!t || "NotAllowedError" !== t.name && "AbortError" !== t.name || (d = !1) })), (i = document.querySelector(".vp-ads-wrapper")) || ((i = document.createElement("div")).classList.add("vp-ads-wrapper"), document.querySelector(".player").appendChild(i), i.innerHTML = hd.render("adcountdown")), e = i.querySelector(".vp-ads-tag"), w = { adCode: t.config.request.ads.adcode || null, adUnit: t.config.request.ads.adunit || null, adUrl: t.config.request.ads.adurl || null, videoPlayer: t.backbone, width: { linear: 488, nonlinear: 488 }, height: { linear: 252, nonlinear: 150 } }, (u = new Dh(i, w)).on("ads-manager-loaded", (function() {
                u.on("ad-buffering", g), u.on("ad-complete", _), u.on("ad-click", y), u.on("ad-error", k), u.on("ad-started", E), u.on("ad-skipped", T), u.on("all-ads-completed", S), u.on("content-pause-requested", x), u.on("content-resume-requested", M),
                    function() {
                        if (!d) {
                            if (p) return;
                            t.events.once(Bo, (function() { h(), d = !0 }))
                        }
                        v.then(I).catch((function(t) {})), t.events.on(bi.ENDED, (function() { p || (s = !0, u.setContentComplete()) }))
                    }(), t.store.watch("ui.player.width", j), t.events.on(Fc.dc, j, !0), t.events.on(Fc.vc, j, !1), d && h()
            }))
        }

        function g() { c && t.events.fire(Fc.qf) }

        function y() { t.events.fire(Fc.zf) }

        function _() { _s.iPhone && t.backbone.addVideoEventListeners(), o && clearInterval(o), c = !1, t.events.fire(Fc.Wf) }

        function k(n) {
            var i = { errorType: n.o, errorReason: n.l };
            t.events.fire(Fc.Gf, i), "adPlayError" === i.errorType && t.events.fire(Fc.Ms)
        }

        function E(n) {
            _s.iPhone && t.backbone.removeVideoEventListeners();
            var e = n.getAd();
            e.isLinear() && (o = setInterval((function() {
                var t = "AD " + function(t) {
                    if (t < 0) return "00:00";
                    var n = Math.floor(t / 60),
                        i = Math.round(t % 60);
                    return (n = n < 10 ? "0" + n : n) + ":" + (i < 10 ? "0" + i : i)
                }(u.remainingTime);
                i.querySelector(".vp-ads-countdown").innerHTML = t
            }), 1e3), setTimeout(C, 1e3)), c = !0;
            var r = { type: e.isLinear() ? "linear" : "nonlinear" };
            a && (r.time = Date.now() - a, a = null), t.events.fire(Fc.Yf, r)
        }

        function T(n) { t.events.fire(Fc.Jf, n) }

        function S(n) { l = !0, _s.iPhone || u.destroy(), t.events.fire(Fc.Xf, n) }

        function x() { t.events.fire(Fc.Ss), a = Date.now(), s || (f = !0, t.backbone.paused ? t.events.once(bi.PLAYING, (function() { t.backbone.pause() })) : t.backbone.pause()) }

        function M() { R(), t.events.fire(Fc.Ms), _s.iPhone && l && u.destroy(), s || A() }

        function A() { f = !1, t.backbone.play() }

        function C() {
            (e = i.querySelector(".vp-ads-tag")).classList.remove("hidden"), e.removeAttribute("hidden")
        }

        function R() { e.classList.add("hidden"), e.setAttribute("hidden", "") }

        function O() { return { width: n.getBoundingClientRect().width, height: n.getBoundingClientRect().height } }

        function I() {
            var n = O(),
                i = n.width,
                e = n.height;
            try { u.start(i, e) } catch (n) { s && t.events.fire(Fc.Wf), f && A() }
        }

        function j(t) {
            var n = O(),
                i = n.width,
                e = n.height;
            u.resize(i, e, t)
        }
        var D = {
            pause: function() { return t.events.fire(Fc.$f), u.pause() },
            play: function() { return t.events.fire(Fc.Kf), u.play() },
            get volume() { return u.volume },
            set volume(t) { u.volume = t },
            toggleCastingState: function(t) {
                (p = !!t) && u.destroy()
            },
            events: m
        };
        return b(), t.events.on(Fc.Qc, b), D
    }

    function Ph(t) {
        var n = t.element,
            i = t.delegate,
            e = void 0 === i ? {} : i,
            o = t.cssLoadedPromise,
            u = void 0 === o ? r.resolve(null) : o,
            a = t.name,
            s = void 0 === a ? null : a;
        Wa(cf);
        var c = Ks(fd, Ys((function(t) {
                return function() {
                    var n = t.apply(void 0, arguments),
                        i = tc();

                    function e(t, n) {
                        return u(t, (function(t) {
                            var e = i.get({ selector: t, listener: n });
                            if (!e) {
                                var r = o(t, n);
                                e = i.insert({ selector: t, listener: n, unsubscribe: r })
                            }
                            return e.unsubscribe
                        }))
                    }

                    function r(t, n) { return u(t, (function(t) { var e = i.get({ selector: t, listener: n }); return e && e.unsubscribe() })) }

                    function o(t, i) {
                        var e = t(n.getState());
                        return n.subscribe((function() {
                            var r = t(n.getState());
                            if (e !== r) {
                                var o = e;
                                i(e = r, o, n.getState())
                            }
                        }))
                    }

                    function u(t, i) { return (t = [].concat(t)).map((function(t) { return i(n.createGetter(t)) })) }
                    return z({}, n, { watch: e, unwatch: r })
                }
            }), function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return function(n) {
                    return function() {
                        var i = n.apply(void 0, arguments);

                        function e() { return t }
                        var r = Yu((function(t) { if (Dt(t)) return t; var n = ia(e(), t); return Dt(n) ? n : function(n) { return ia(n, t) } }));

                        function o(t, n) { var e = (t = r(t))(i.getState()); return void 0 !== n && (e = ll(e, n)), e }
                        return z({}, i, { getSelectors: e, createGetter: r, get: o })
                    }
                }
            }(ld), Xs.apply(void 0, []))),
            f = new L,
            l = nt(),
            d = new ff({ events: l }),
            h = hc();
        n.classList.add("player-".concat(h)), n.classList.add("loading"), n.id || (n.id = "player".concat(h)), n.innerHTML = hd.render("outer", { strings: { back: "Back", close: "Close overlay" } });
        var v = n.querySelector(".vp-telecine");
        if (_s.iOS) {
            var p = document.createElement("video");
            v.appendChild(p);
            try { p.setAttribute("muted", ""), p.setAttribute("playsinline", ""), p.load() } catch (t) { cf.captureException(t) }
        }
        var m, w, b, g, y, _ = null,
            k = null,
            E = null,
            T = null,
            S = null,
            x = null,
            M = {},
            A = new r((function(t, n) { y = t })).then((function() { return l.fire(Fc.ue), null })),
            C = {get config() { return d.config },
                set config(t) { d.config = t },
                get delegate() { return e },
                set delegate(t) { e = t },
                ready: function(t) {
                    if (!t) return A;
                    A.then((function() { return t() })).catch((function(t) { cf.captureException(t) }))
                },
                get sessionId() { return d.config.request.session }
            };

        function R(t) {
            var n = t.old,
                i = t.loaded;
            if (function(t, n) { t && s && "".concat(s, " ") }(!n), window.parent !== window) {
                var e, r = "Private Video on Vimeo";
                1 !== i.view && 3 !== i.view || (r = "".concat(i.video.title, " from ").concat(i.video.owner.name, " on Vimeo")), document.title = r, (null == (e = history) ? void 0 : e.replaceState) && i.video && n && history.replaceState({ id: i.video.id }, "", "/video/".concat(i.video.id).concat(window.location.search))
            }
            if (1 !== i.view && 3 !== i.view) throw new Error("Config not authorized: ".concat(i.view));
            (null == n ? void 0 : n.embed) && n.embed.color !== i.embed.color && l.fire(Mc.ts, i.embed.color), T && T.reset();
            var o = !n || !n.video || n.video.id !== i.video.id || n.video.version.current !== i.video.version.current;
            return function(t) { ut = t.substring(0, t.lastIndexOf("/") + 1) }(i.request.urls.js), m = null, b = _, l.fire(Mc.Ja), c.dispatch(Df(i)), l.fire(Fc.Qc, o, i), t
        }

        function O(t) {
            if ("opacity" === t.propertyName) {
                var n = document.querySelector(".vp-placeholder");
                n && (rl(n).off("transitionend", O), n.parentNode.removeChild(n))
            }
        }

        function I() {
            ! function() {
                var t = document.querySelector(".vp-placeholder");
                t && (rl(t).on("transitionend", O), t.classList.add("vp-placeholder-fadeout"))
            }(), n.classList.remove("loading"), y()
        }

        function j(t) { return u.then((function() { if (P(t), k && k.resetThumbnail(), "function" != typeof M.authorizationHandler) throw new Error("Config was not authorized."); return M.authorizationHandler(I) })).then((function(t) { return d.config = t, m = null, c.dispatch(Df(d.config)), l.fire(Mc.Ja), l.fire(Fc.Qc, !0, d.config), t })) }

        function D(t) {
            (function() {
                var t = document.location.hash,
                    n = function(t) {
                        var n, i = t.match(/\ba?t=([0-9hms:]+)/);
                        null !== i && (t = i[1]);
                        var e = !1,
                            r = 0,
                            o = 0,
                            u = 0;
                        if ((null == (n = i = t.match(/^([0-9]+)$/)) ? void 0 : n.length) && (e = !0, u = i[1]), !1 === e && null !== (i = t.match(/^(?:([0-9]+)h)?(?:([0-9]+)m)?(?:([0-9]+)s)?/)) && "" !== i[0]) {
                            e = !0;
                            var a = Q(i, 4),
                                s = a[1];
                            r = void 0 === s ? 0 : s;
                            var c = a[2];
                            o = void 0 === c ? 0 : c;
                            var f = a[3];
                            u = void 0 === f ? 0 : f
                        }
                        if (!1 === e && null !== (i = t.match(/^([0-9:]+)/))) {
                            e = !0;
                            var l = Q(t.split(":").reverse(), 3);
                            u = l[0];
                            var d = l[1];
                            o = void 0 === d ? 0 : d;
                            var h = l[2];
                            r = void 0 === h ? 0 : h
                        }
                        return e ? 60 * parseInt(r, 10) * 60 + 60 * parseInt(o, 10) + parseInt(u, 10) : null
                    }(t);
                null !== n && (d.config.embed.time = ac(n, 0, d.config.video.duration), -1 !== t.indexOf("at=") && history && history.replaceState && history.replaceState("", "", window.location.pathname + window.location.search))
            })(), l.on(Fc.Kc, (function(t) {
                    d.reload().then((function(n) {
                        if (!d.config.user.logged_in) return l.fire(Fc.Xc), n;
                        switch (l.fire(Fc.Yc, t), t) {
                            case "like":
                                d.config.user.liked && l.fire(Fc.Wc);
                                break;
                            case "watch-later":
                                d.config.user.watch_later && l.fire(Fc.Gc);
                                break;
                            case "private":
                                l.fire(Fc.nf)
                        }
                        return n
                    })).catch((function(t) { cf.captureException(t) }))
                })), l.on(Fc.Jc, (function() { d.reload().catch((function(t) { cf.captureException(t) })) })),
                function(t) {
                    var i, e;
                    new zd(t, c, n), k = new Sf(t, c, n.querySelector(".vp-preview")), l.on([_i.BUFFER_ENDED, bi.PLAYING], (function() { k.hide() })), _ = new as(v, d.config), b = _, new Kf(t, c, n.querySelector(".vp-video-wrapper")), new dd(t, c, n.querySelector(".vp-captions")), new vd(n, l), N(t), t.doNotTrackEnabled || (d.config.request.urls.test_imp && function(t, n) {
                        if (t.config.request.ab_tests) {
                            var i = new Zc(n);
                            for (var e in t.config.request.ab_tests) {
                                var r = t.config.request.ab_tests[e];
                                if (r.track) {
                                    var o = { session_id: t.config.request.session, test_id: e, test_group: String(r.group) };
                                    i.log(o, !0, !1).catch((function(t) {}))
                                }
                            }
                        }
                    }(t, "".concat(d.config.request.urls.test_imp, "?beacon=1")), new Rh(t, n, c, d.config.request.urls.fresnel), new fl(t, c), new Oh(t, n, c), new Ih(t)), T = new Rf(t), (t.config.request.flags.ott || (null == (i = t.config.request.ab_tests) || null == (e = i.chromecast) ? void 0 : e.group)) && function(t) {
                        if (!t.config.video.spatial && "stock" !== t.config.video.privacy) {
                            var i = new kf({ textAlert: new Th(n), player: t });
                            Tf.init({ chromecastPlayer: i }), Tf.on([_f.error, _f.mediaLoadedFailed], (function(t) { cf.captureException(t) }))
                        }
                    }(t), P(t)
                }(t)
        }

        function P(t) { E || (E = new Eh(t), pd(C, E), Zd(cf)) }

        function N(t) {
            var i = d.config.request.ads;
            i && (i.adcode && i.adunit || i.adurl) && (S = new Lh(t, n.querySelector(".vp-video-wrapper")), l.on(Fc.Ss, (function() { b = S, l.fire(Fc.Mf) })), l.on(Fc.Ms, (function() { b = _, l.fire(Fc.Mf) })), Tf && (Tf.on(_f.connected, (function() { S.toggleCastingState(!0) })), Tf.on(_f.disconnected, (function() { S.toggleCastingState(!1) }))))
        }

        function F(t, n) { var i = t; return isNaN(t) && "string" != typeof t || (i = fc(cc(t), t, n)), i }
        var U = {get store() { return c },
            get config() { return d.config },
            get element() { return n },
            get events() { return l },
            get uuid() { return h },
            get expose() { return C },
            get backbone() { return _ },
            get adHandler() { return S },
            get displayContext() { return b },
            get preview() { return k },
            get doNotTrackEnabled() { return d.config.embed.dnt || d.config.request.flags.dnt },
            get playLoggingEnabled() { return d.config.embed.log_plays && d.config.request.flags.plays },
            get currentTime() { return Tf.isCastConnected ? Tf.chromecastPlayer.lastCurrentTime : _.currentTime },
            get ottVideoMetadata() { return x },
            set ottVideoMetadata(t) { x = t },
            init: function(t, n) { return w || (M = n, w = d.load(t).then(R).catch((function(t) { return j(U) })).then((function() { return "function" == typeof M.initializationHandler ? r.resolve(n.initializationHandler()) : null })).then((function() { return D(U), "function" == typeof M.postInitializationHandler ? r.resolve(n.postInitializationHandler()) : null })).then((function() { return r.all([k.thumbnailPromise, u]) })).then(I).then((function() { return cf.setUp(U), null })).catch((function(t) { cf.captureException(t) }))) },
            loadVideo: function(t, i) {
                if (g === t && m) return m;
                if (k && k.resetThumbnail(), null == i ? void 0 : i.video_version) { var e = d.config.video.version.available; if (!e || !Array.isArray(e)) return r.reject("No available video versions"); if (-1 === (e = e.map((function(t) { return t.id }))).indexOf(i.video_version)) return r.reject("Invalid version id specified") }
                l.fire(Fc._loadVideo), g = t, n.classList.add("loading");
                var o = F(t, i),
                    u = f.get(o);
                return t = u ? u.jl.loaded : t, m = d.load(t, i).then((function(t) {
                    if (u) {
                        var n = _.element;
                        (_ = u.Dl).element.style.visibility = "visible", n.parentNode.replaceChild(_.element, n), l.fire(Fc.mf)
                    }
                    return t = R(t), S || N(U), t
                })).catch((function(t) { return j(U) })).then((function(t) { var n = k.loadThumbnail(); return r.resolve(n) })).then(I)
            },
            preloadVideo: function(t, n, i) {
                var e = F(n, i),
                    o = f.get(e);
                return o ? r.resolve(o) : new ff({ events: l }).load(n, i).then((function(n) {
                    var i = _.element.cloneNode(!1);
                    i.style.visibility = "hidden", _.element.parentNode.insertBefore(i, _.element);
                    var r = new as(i, n.loaded);
                    r.loadVideo(n.loaded), r.preload = t;
                    var o = { Dl: r, jl: n };
                    return f.set(e, o), o
                }))
            },
            performDelegateAction: function(t) {
                var n, i, r, o, u = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {},
                    a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                null != (n = e) && n[t.will] && !1 === (r = (o = e)[t.will].apply(o, [d.config.video.id].concat(tt(a)))) || (u.apply(void 0, [d.config.video.id].concat(tt(a), [r])), (null == (i = e) ? void 0 : i[t.did]) && e[t.did]())
            },
            ready: function() { return A },
            verifyConfig: function() { return d.verify() },
            updatePhpTokens: function() {
                return new r((function(t, n) {
                    var i = d.config.user,
                        e = i.vimeo_api_client_token,
                        r = i.vimeo_api_interaction_tokens,
                        o = i.vimeo_live_client_token,
                        u = i.vimeo_bucketed_live_client_token,
                        a = !1;
                    if (e) try { a = gd(JSON.parse(atob(e.split(".")[1])).exp) >= 0 } catch (t) { return void n(new Error("Failed to parse PHP client token expiration")) }
                    if (r) try {
                        var s = JSON.parse(atob(r.likes.split(".")[1])).exp,
                            c = JSON.parse(atob(r.watch_later.split(".")[1])).exp,
                            f = JSON.parse(atob(r.following.split(".")[1])).exp;
                        a = gd(s) >= 0 || gd(c) >= 0 || gd(f) >= 0
                    } catch (t) { return void n(new Error("Failed to parse PHP interaction tokens expiration")) }
                    if (o) try { a = gd(JSON.parse(atob(o.split(".")[1])).exp) >= 0 } catch (t) { return void n(new Error("Failed to parse PHP Live token expiration")) }
                    if (u) try { a = gd(JSON.parse(atob(u.split(".")[1])).exp) >= 0 } catch (t) { return void n(new Error("Failed to parse PHP Live token expiration")) }
                    if (a) {
                        var l = d.config.request,
                            h = l.signature,
                            v = l.session,
                            p = l.timestamp,
                            m = l.expires;
                        Ye("https://".concat(d.config.player_url, "/video/").concat(d.config.video.id, "/token/refresh?signature=").concat(h, "&session=").concat(v, "&time=").concat(p, "&expires=").concat(m), { withCredentials: !0 }).json().then((function(n) { return d.config.user.vimeo_api_client_token = n ? n.vimeo_api_client_token : null, d.config.user.vimeo_api_interaction_tokens = n ? n.vimeo_api_interaction_tokens : null, d.config.user.vimeo_live_client_token = n ? n.vimeo_live_client_token : null, d.config.user.vimeo_bucketed_live_client_token = n ? n.vimeo_bucketed_live_client_token : null, t() })).catch((function(t) { cf.captureBreadcrumb("Failed to refresh JWT token", {}, "auth", "error"), n(t) }))
                    } else t()
                }))
            }
        };
        return U
    }

    function Nh(t, n, i, e) {
        var r = !1;
        e = "function" == typeof n ? i : e, i = "function" == typeof n ? n : i;
        var o = function(t) {
                var n = !0;
                if (t.changedTouches) {
                    var o = t.changedTouches[0].pageX - window.pageXOffset,
                        u = t.changedTouches[0].pageY - window.pageYOffset,
                        a = document.elementFromPoint(o, u);
                    null !== a && this.contains(a) && (n = i.call(this, t))
                }
                return "function" == typeof e && e.call(this, t), r = !0, n
            },
            u = function(t) {
                if (!r) return i.call(this, t);
                r = !1
            };
        (n = "function" == typeof n ? null : n) ? rl(t).on("click", n, u).on("touchend", n, o): rl(t).on("click", u).on("touchend", o)
    }

    function Fh(t, n) {
        var i, e, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
            o = [],
            u = !1;

        function a() { i = c(), r.forEach(v), Nh(i, ".js-menuClose", E), rl(window).on("resize", x) }

        function s() { rl(window).off("resize", x) }

        function c() { var t = document.createElement("div"); return t.innerHTML = hd.render("menu", { strings: { close: "Close menu" } }), t.children[0] }

        function f() { return i.classList.contains("vp-menu-center") }

        function l() { return i.classList.contains("vp-menu-fullwidth") }

        function d() { return i.classList.contains("vp-menu-carousel") }

        function h() {
            var t = o.length > 1 && !d();
            o.forEach((function(n) { n.setCollapsible(t), n.resetCarousel(d()) }))
        }

        function v(t) { o.push(t), i.insertBefore(t.element, i.lastChild), h(), t.on("open", m), t.on(["open", "close"], w), t.on(["openEnd", "closeEnd"], b), t.on("select", _) }

        function p(t) { return o.find((function(n) { return n.id === t })) }

        function m(t) { o.filter((function(t) { return t.isOpen() })).forEach((function(t) { return t.close() })) }

        function w(t) { u = !0, M() }

        function b(t) { u = !1 }

        function g() { return n && "true" === n.getAttribute("aria-expanded") }

        function y(r) {
            g() || (r = r || n.contains(document.activeElement), n.setAttribute("aria-expanded", "true"), i.removeAttribute("hidden"), t.events.fire(Fc.nc, !0, e), x(), h(), i.classList.remove("vp-menu-hidden"), window.requestAnimationFrame((function() {
                if (i.classList.remove("vp-menu-invisible"), r) {
                    var t = C();
                    t.length > 0 && t[0].focus()
                }
            })))
        }

        function _() { d() || E() }

        function k() { C().some((function(t) { return t === document.activeElement })) && n.focus() }

        function E() { g() && setTimeout((function() { k(), n.setAttribute("aria-expanded", "false"), t.events.fire(Fc.nc, !1, e), i.classList.add("vp-menu-invisible") }), 100) }

        function T(t) { i.classList.add("vp-menu-hidden"), i.setAttribute("hidden", "") }

        function S(t) { return g() ? (E(), !1) : (y(t), !0) }

        function x() {
            if (!l()) {
                var n = rc(t.element),
                    e = rc(i),
                    r = window.getComputedStyle(i),
                    o = parseFloat(r.fontSize),
                    u = e.bottom - i.scrollHeight,
                    a = Math.max(n.top, 0) - u;
                if (a > 0) { var s = i.scrollHeight - a - o; return i.style.height = "".concat(s / o, "em"), void i.classList.add("vp-menu-scroll") }
                i.style.height = "auto", i.classList.remove("vp-menu-scroll")
            }
        }

        function M() { x(), u && requestAnimationFrame(M) }

        function A() { rl(i).on("transitionend", (function(t) { this === i && "opacity" === t.propertyName && i.classList.contains("vp-menu-invisible") && T() })), rl(document).on("click", (function(t) { null !== n && (!g() || n.contains(t.target) || i.contains(t.target) || E()) })), window.addEventListener("blur", E, !1) }

        function C() { return o.reduce((function(t, n) { return t.concat(n.getTabindexItems()) }), []) }
        return a(), A(), e = { element: i, button: n, isCentered: f, isVisible: g, isFullwidth: l, show: y, hide: E, toggle: S, retargetFocusFromChild: k, setPanelModes: h, addPanel: v, getPanel: p, getTabindexItems: C, destroy: s }
    }
    var Uh = function(t) { return function(n) { return null == t ? void 0 : t[n] } }({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }),
        Vh = /[&<>"']/g,
        Bh = RegExp(Vh.source);

    function Hh(t) { return (t = ko(t)) && Bh.test(t) ? t.replace(Vh, Uh) : t }

    function qh(t) {
        nt(this);
        var n, i, e, r = this,
            o = { x: 0, y: 0 },
            u = { x: 0, y: 0 },
            a = { x: 0, y: 0 },
            s = 0;

        function c(n) { t.style["".concat(_s.transitionProperty, "Duration")] = n }

        function f(n) {
            var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t.children.length - 1,
                r = -Math.round(n / d());
            return Math.min(Math.max(r, i), e)
        }

        function l() { return !1 }

        function d() {
            var n = t.children[0],
                i = getComputedStyle(n);
            return n.offsetWidth + parseInt(i.marginLeft, 10) + parseInt(i.marginRight, 10)
        }

        function h(t) {
            var n = [t.clientX, t.clientY],
                i = n[0],
                e = n[1];
            if (t.targetTouches && t.targetTouches.length > 0) {
                var r = [t.touches[0].pageX, t.touches[0].pageY];
                i = r[0], e = r[1]
            }
            return { x: i, y: e }
        }

        function v(t) {
            t.stopImmediatePropagation();
            var i = h(t),
                r = i.x,
                a = i.y;
            u.x = r - o.x, u.y = a - o.y, n = !1, (e = function(t) {
                return function(n) {
                    var i = n ? "on" : "off",
                        e = { pointerdown: ["pointermove", "pointerup"], MSPointerDown: ["pointermove", "pointerup"], touchstart: ["touchmove", "touchend"], mousedown: ["mousemove", "mouseup"] };
                    rl(window)[i](e[t.type][0], p), rl(window)[i](e[t.type][1], m)
                }
            }(t))(!0), c("0ms")
        }

        function p(t) {
            var s = h(t),
                c = s.x,
                l = s.y;
            if (a.x = o.x, a.y = o.y, o.x = c - u.x, o.y = l - u.y, Math.abs(o.x - a.x) >= .15 * Math.abs(o.y - a.y)) return t.preventDefault(), n = !0, r.fire("touchMove"), i = Date.now(), void y(o.x);
            e(!1), w(f(o.x))
        }

        function m(u) {
            if (u.stopImmediatePropagation(), e(!1), n) {
                u.preventDefault();
                var c = o.x - a.x,
                    l = Date.now() - i + 1;
                return o.x += 50 * c / l, w(f(o.x)), void r.fire("touchEnded")
            }! function(n) {
                n.preventDefault();
                var i = mc(n.target, t.children);
                if (-1 !== i) {
                    if (i !== s) return void w(i);
                    r.fire("tap", i)
                }
            }(u)
        }

        function w(t) { g(t), r.fire("slide", t) }

        function b() { g(s, "0ms") }

        function g(t) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                i = d(); - 1 !== t && i > 0 && (c(n), o.x = -t * i, y(o.x))
        }

        function y(n) {
            var i = f(n, -1, t.children.length);
            i !== s && (r.fire("focus", i), s = i), t.style[_s.transformProperty] = "translateX(".concat(n, "px)")
        }
        return {
            setUp: function(n) {
                rl(t).on(_s.pointerEvents ? "pointerdown" : ["touchstart", "mousedown"], v), rl(t).on("click", "a", l), rl(window).on("resize", b), b(),
                    function(t) { void 0 !== t && g(t, "0ms") }(n)
            },
            show: function(t) { g(pc(t)) },
            resize: b,
            destroy: function() { rl(t).off(_s.pointerEvents ? "pointerdown" : ["touchstart", "mousedown"], v), rl(t).off("click", "a", l), rl(window).off("resize", b), t.style.removeProperty(_s.transformProperty) },
            on: this.on
        }
    }

    function Wh(t) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        n.items.forEach((function(t) { void 0 !== t.label && (t.label = Hh(t.label)) }));
        var i, e, r, o, u, a, s = nt(),
            c = n.id,
            f = n.items,
            l = !1;

        function d() { h(), i = v(), e = i.querySelector(".js-panelItems"), (r = new qh(e)).on("slide", M), r.on("tap", A), Nh(i, ".js-panelTitleButton", x), Nh(i, "li", C), rl(i).on("keydown", R), rl(i).on("keypress", R), rl(i).on("transitionend", (function(t) { t.target === i && (_() ? E() : S()) })) }

        function h() { n = Object.assign(n, {get active() { return D() ? D().label : "" } }) }

        function v() { var t = document.createElement("div"); return t.innerHTML = hd.render("menu_list_panel", n), t.children[0] }

        function p(t) { var n = U(i.querySelectorAll(".vp-panel-item")); return n[t] || n }

        function m(t) { t !== w() && (i.classList.toggle("vp-panel-open", !t), i.classList.toggle("vp-panel-collapsible", t), t ? e.setAttribute("hidden", "") : (e.removeAttribute("hidden"), i.style.removeProperty("height"))) }

        function w() { return i.classList.contains("vp-panel-collapsible") }

        function b(t) {
            if (l = t, u = i.querySelector(".vp-indicator"), r.destroy(), u.classList.remove("vp-indicator-visible"), l) {
                var n = f.findIndex((function(t) { return t.active }));
                r.setUp(n), g(), u.classList.add("vp-indicator-visible")
            }
        }

        function g() { r.on("touchMove", (function() { u.classList.add("vp-indicator-inactive") })), r.on("touchEnded", (function() { u.classList.remove("vp-indicator-inactive") })) }

        function y() { i.classList.add("vp-panel-pinTitle") }

        function _() { return i.classList.contains("vp-panel-open") }

        function k() {
            if (w()) {
                s.fire("open", o), t.events.fire(Fc.uc, !0, o), e.removeAttribute("hidden"), i.classList.add("vp-panel-open");
                var n = window.getComputedStyle(i),
                    r = parseFloat(n.fontSize);
                i.style.height = "".concat(i.scrollHeight / r, "em");
                var u = "".concat(_s.transitionProperty, "Delay");
                p().forEach((function(t, n) {
                    var i = 40 * n + 100;
                    t.style[u] = "".concat(i, "ms"), t.classList.add("vp-panel-item-in")
                }))
            }
        }

        function E(t) { s.fire("openEnd", o) }

        function T() { w() && (s.fire("close", o), t.events.fire(Fc.ac, !1, o), i.classList.remove("vp-panel-open"), i.style.removeProperty("height"), j()) }

        function S(t) { e.setAttribute("hidden", ""), p().forEach((function(t, n) { t.classList.remove("vp-panel-item-in") })), s.fire("closeEnd", o) }

        function x(t) { return t.preventDefault(), _() ? T() : k() }

        function M(t) { s.fire("select", f[t].id) }

        function A(t) { s.fire("select", f[t].id) }

        function C(t) {
            if (!l) {
                var n = mc(t.target, p());
                s.fire("select", f[n].id)
            }
        }

        function R(t) { if ("keypress" === t.type && 13 === t.which || "keydown" === t.type && 32 === t.which) { var n = mc(t.target, p()); if (-1 !== n) return s.fire("select", f[n].id), !1 } return null }

        function O(t) {
            var n = f.findIndex((function(t) { return t.active }));
            if (-1 !== n) {
                f[n].active = !1;
                var e = p(n);
                e.classList.remove("vp-panel-item-on"), e.setAttribute("aria-checked", "false")
            }
            var r = f.findIndex((function(n) { return "".concat(n.id) === "".concat(t) }));
            if (-1 !== r) {
                f[r].active = !0;
                var o = p(r);
                o.classList.add("vp-panel-item-on"), o.setAttribute("aria-checked", "true"), i.querySelector(".js-panelStatText").innerHTML = f[r].label
            }
            u.classList.remove("vp-indicator-inactive")
        }

        function I(t) { j(), a = t, t && p(f.findIndex((function(t) { return "".concat(t.id) === "".concat(a) }))).classList.add("vp-".concat(c, "-item-hover")) }

        function j() {
            if (a) {
                var t = p(f.findIndex((function(t) { return "".concat(t.id) === "".concat(a) })));
                t.length || t.classList.remove("vp-".concat(c, "-item-hover"))
            }
        }

        function D() { return f.find((function(t) { return t.active })) }

        function L(t) { D() && "auto" !== D().id || (i.querySelector(".js-panelStatText").innerHTML = t) }

        function P() { return U(i.querySelectorAll('.vp-panel-collapsible button[tabindex="0"], .vp-panel-open li[tabindex="0"]')) }
        return d(), o = { id: c, element: i, setCollapsible: m, resetCarousel: b, pinTitle: y, isOpen: _, open: k, close: T, setActiveItem: O, setHoverState: I, clearHoverState: j, setTitleStat: L, getTabindexItems: P, on: s.on, off: s.off }
    }

    function zh(t) {
        var n, i = 0,
            e = !1,
            r = null,
            o = null,
            u = null;

        function a() {
            if (_s.touch && !t.store.get(Wf) && !t.config.video.spatial) {
                var n = null,
                    a = 10;
                (r = t.element.querySelector(".vp-nudge-wrapper")).classList.remove("hidden"), r.innerHTML = hd.render("nudge"), o = t.element.querySelector(".vp-nudge-forward"), u = t.element.querySelector(".vp-nudge-backward"), Nh(o, (function(t) { t.preventDefault(), f("right"), n = setTimeout(l, 250) })), Nh(u, (function(t) { t.preventDefault(), f("left"), n = setTimeout(l, 250) })), t.events.on(Fc.Ls, (function() { e = !0 }))
            }

            function f(t) {
                if (["left", "right"].includes(t)) {
                    var e = "right" === t ? s : c,
                        r = "right" === t ? o : u;
                    i++, clearTimeout(n), i >= 2 && (d(r, t, a), 2 === i && e(10), e(10 * (i - 2)), i > 2 && (d(r, t, a += 10), i = 2))
                }
            }

            function l() { i >= 2 && t.events.fire(Fc.Fs), i = 0, a = 10 }
        }

        function s(n) { f((t.currentTime || 0) + n) }

        function c(n) {
            var i = (t.currentTime || 0) - n;
            f(i >= 0 ? i : 0)
        }

        function f(n) { t.events.fire(Fc.Ns), t.events.fire(Mc.za, null, n), e || t.events.fire(Fc.Bs) }

        function l(n, i) {
            var e = t.currentTime || 0,
                r = "right" === i ? "+" : "-";
            return "right" === i && e > t.config.video.duration - 10 || e <= 10 && "left" === i ? null : "".concat(r, " ").concat(n)
        }

        function d(i, e, r) {
            if (["left", "right"].includes(e)) {
                var o = t.element.querySelector(".vp-nudge-shade-".concat(e)),
                    u = i.querySelector(".vp-nudge-seconds");
                l(r, e) && (u.innerHTML = l(r, e), clearTimeout(n), i.classList.remove("invisible"), o.classList.remove("vp-nudge-shade-invisible"), n = setTimeout((function() { o.classList.add("vp-nudge-shade-invisible"), i.classList.add("invisible") }), 500))
            }
        }
        return t.events.on(Fc.Qc, (function() {
            [o, u].forEach((function(t) { t && rl(t).off("click").off("touchend") })), a()
        })), a(), {}
    }
    var Gh = /^(%20|\s)*(javascript|data)/im,
        $h = /[^\x20-\x7E]/gim,
        Kh = /^([^:]+):/gm,
        Yh = [".", "/"];

    function Jh(t) { var n = t.match(Kh); return null == n ? void 0 : n[0] }

    function Xh(t) { return t ? decodeURI(encodeURI(function(t) { var n = Jh(t = t.trim()); return t && !n && (t = "http://".concat(t)), t }(function(t) { var n = t.replace($h, ""); if (function(t) { return Yh.indexOf(t[0]) > -1 }(n)) return n; var i = Jh(n); return i && Gh.test(i) ? "" : n }(t)))) : null }

    function Zh() {
        for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++) n[i] = arguments[i];
        nv.apply(void 0, ["hidden"].concat(n))
    }

    function Qh() {
        for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++) n[i] = arguments[i];
        tv.apply(void 0, ["hidden"].concat(n))
    }

    function tv(t) {
        iv(t);
        for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), e = 1; e < n; e++) i[e - 1] = arguments[e];
        i.forEach((function(n) { ev(n), n.classList.add(t) }))
    }

    function nv(t) {
        iv(t);
        for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), e = 1; e < n; e++) i[e - 1] = arguments[e];
        i.forEach((function(n) { ev(n), n.classList.remove(t) }))
    }

    function iv(t) { if ("" === (t = String(t))) throw new SyntaxError("An invalid string was specified"); if (/\s/.test(t)) throw new SyntaxError("String contains invalid character") }

    function ev(t) { if (! function(t) { return null != t && t instanceof HTMLElement }(t)) throw new SyntaxError("An invalid HTMLElement was specified") }

    function rv(t, n) {
        var i = null;

        function e(n) {
            var i = n.target.activeCues[0] ? n.target.activeCues[0].id : null;
            t.events.fire(Fc.Ks, i)
        }

        function r(t) {
            var n = !!t && "menu" === t.position,
                e = t ? t.id : null;
            i.forEach((function(t) {
                var i = t.dataset.time === e;
                t.classList.toggle("chapter-marker-hover", i), t.classList.toggle("chapter-marker-hover-no-text", i && n)
            }))
        }

        function o(t) { i.forEach((function(n) { n.classList.toggle("chapter-marker-active", n.dataset.time === t) })) }
        return {
            renderChapterMarkers: function() {
                var u, a = n.querySelector(".chapters");
                a.innerHTML = hd.render("chapters", { chapters: t.backbone ? t.backbone.chapters : [], duration: t.config.video.duration }), t.events.off(Fc.Gs), t.events.off(Fc.$s),
                    function() {
                        for (var t = n.querySelectorAll(".chapter-title"), i = 0; i < t.length; i++) {
                            var e = t[i];
                            if (240 === rc(e).width) {
                                var r = rc(n.querySelector(".js-chapter-content")).width;
                                e.style.width = r + "px"
                            }
                            var o = rc(e),
                                u = o.left,
                                a = o.right,
                                s = rc(n),
                                c = s.left - u,
                                f = a - s.right;
                            c > 0 && (e.style.left = c + "px"), f > 0 && (e.style.right = f + "px")
                        }
                    }(),
                    function(n) { rl(n).on("mouseenter", ".js-chapter-marker", (function(n) { t.events.fire(Fc.Gs, { id: n.target.dataset.time, position: "marker" }) })).on("mouseleave", ".js-chapter-marker", (function(n) { t.events.fire(Fc.$s) })), t.events.on([Fc.Gs, Fc.$s], r), t.events.on(Fc.Ks, o) }(a), i = U(n.querySelectorAll(".js-chapter-marker")), (null == (u = t.backbone) ? void 0 : u.chaptersTrack) && t.backbone.chaptersTrack.addEventListener("cuechange", e)
            }
        }
    }

    function ov(t, n, i) {
        var e, r, o, u, a, s, c, f, l, d, h, v, p, m, w, b, g, y, _, k, E, T, S, x, M, A, C, R = !1,
            O = !1,
            I = !1,
            j = !1,
            L = !1,
            N = !1,
            F = !1,
            V = !1,
            B = !1,
            H = !1,
            q = !1,
            W = !1,
            z = !0,
            G = !1,
            $ = !1,
            K = null,
            Y = null,
            J = [],
            X = null,
            Z = null,
            tt = null,
            nt = !1,
            it = !1,
            et = [],
            rt = new rv(t, i),
            ot = t.config.embed.autoplay && t.config.request.flags.autohide_controls,
            ut = [{ id: .5, label: "0.5x" }, { id: .75, label: "0.75x" }, { id: 1, label: "Normal" }, { id: 1.25, label: "1.25x" }, { id: 1.5, label: "1.5x" }, { id: 2, label: "2x" }],
            at = _s.touch ? 300 : 0;

        function st() { K = null, Y = null }

        function ct() {
            if (!Y) {
                var t = rc(c).left,
                    n = parseInt(window.getComputedStyle(c, "").borderLeftWidth, 10);
                Y = t + n
            }
            return Y
        }

        function ft() {
            if (!K) {
                var t = rc(c).right,
                    n = parseInt(window.getComputedStyle(c, "").borderRightWidth, 10);
                K = t - n
            }
            return K
        }

        function lt(t) { var n = ct(); return ac((t - n) / (ft() - n), 0, 1) }

        function dt(n) {
            var i = J,
                e = Array.isArray(i),
                r = 0;
            for (i = e ? i : i[D.iterator]();;) {
                var o;
                if (e) {
                    if (r >= i.length) break;
                    o = i[r++]
                } else {
                    if ((r = i.next()).done) break;
                    o = r.value
                }
                var u = o,
                    a = rc(u),
                    s = a.left,
                    c = a.right;
                if (n >= s && n <= c) return parseFloat(u.getAttribute("data-time")) / t.config.video.duration
            }
            return lt(n)
        }

        function ht(n, i) { O && !W && (i = i || t.config.video.duration * n || 0, window.requestAnimationFrame((function() { vt(n, i), pt(n, i) }))) }

        function vt(t, i) {
            (!n.get(Pf) || G && 0 !== i) && (n.get(Wf) && (t = 100), v.style.left = Math.min(dc(100 * t), 100) + "%", p.innerHTML = _d(i), v.style.display = "block")
        }

        function pt(i, e) {
            n.get(Wf) && (i = 100);
            var r = Math.min(dc(100 * i), 100);
            d.style.width = "".concat(r, "%"), f.setAttribute("aria-valuenow", Math.round(e)), f.setAttribute("aria-valuetext", "".concat(_d(e), " of ").concat(_d(t.config.video.duration))), a.setAttribute("width", "".concat(r, "%"))
        }

        function mt(t, i) {
            n.get(Wf) && (t = 100);
            var e = Math.min(dc(100 * t), 100);
            l.style.width = "".concat(e, "%"), l.setAttribute("aria-valuenow", dc(i)), l.setAttribute("aria-valuetext", "".concat(_d(i, !0), " loaded")), u.setAttribute("width", "".concat(e, "%"))
        }

        function wt() { G = !1, r.classList.remove("state-playing"), r.classList.add("state-paused") }

        function bt() { G = !0, $ && xt(), r.classList.remove("state-paused"), r.classList.add("state-playing") }

        function gt() { z = !1, et.forEach((function(t) { return t.retargetFocusFromChild() })), t.events.fire(Fc.Qs, z), i.classList.add("invisible") }

        function yt() { setTimeout((function() { z = !0, t.events.fire(Fc.Qs, z), i.classList.remove("invisible") }), at) }

        function _t() { j || z && (R || (O && q || L || ot) && (I || (!nt && !it || L) && (L && 3 === t.config.view || V || N || gt()))) }

        function kt() { j || z || L || yt() }

        function Et(t) { return et.push(t), t.button.parentNode.insertBefore(t.element, t.button.nextSibling), t }

        function Tt(t) { et = et.filter((function(n) { return n !== t })), t.destroy() }

        function St() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
            if (y) {
                var n, i = 1 / _.length,
                    e = t / i,
                    r = Math.ceil(e),
                    o = e % 1;
                o <= .33 && (n = "fill1"), o > .33 && o <= .66 && (n = "fill2"), _.forEach((function(t, i) { t.classList.remove("fill0"), t.classList.remove("fill1"), t.classList.remove("fill2"), i === r - 1 && o && o <= .66 ? t.classList.add(n) : i > r - 1 && t.classList.add("fill0") })), y.setAttribute("aria-valuenow", t.toFixed(3)), y.setAttribute("aria-valuetext", Math.round(100 * t) + "%")
            }
        }

        function xt() {
            var e;
            if (1 === t.config.view || 3 === t.config.view) {
                S && (Tt(S), S = null), X && (Tt(X), X = null);
                var R = t.backbone || {},
                    j = t.config.embed.settings,
                    D = { show: j.logo, showLink: !!t.config.video.url, url: t.config.video.url },
                    L = function() {
                        if (!t.config.embed.settings.custom_logo) return null;
                        var n = t.config.embed.settings.custom_logo,
                            i = n.img;
                        return _s.devicePixelRatio >= 2 && (i = i.replace(/(mw|mh)=(\d+)/g, (function(t, n, i) { return n + "=" + 2 * parseInt(i, 10) }))), { showLink: null !== n.url, url: Xh(n.url), img: i, sticky: n.sticky, width: n.width, height: n.height }
                    }();
                if (!j.watch_trailer || O || G || t.config.embed.autoplay || !t.config.embed.on_site) {
                    var P = !t.backbone || t.backbone.supportsSettingVolume,
                        N = !t.backbone || t.backbone.supportsTextTracks,
                        F = Ch(t.config, "chromecast").group && _s.browser.chrome && (void 0 === j.chromecast || j.chromecast) && !t.config.video.spatial && "stock" !== t.config.video.privacy,
                        V = t.displayContext === t.backbone,
                        B = R.supportsPlaybackRate && j.speed,
                        H = V && (B || R.representations && R.representations.length > 0),
                        q = "disable" !== t.config.video.privacy && (_s.webvr || _s.stereoscopic) && t.config.video.spatial && Ch(t.config, "webvr").group,
                        W = !!t.backbone && (null == (e = t.backbone.textTracks) ? void 0 : e.length);
                    t.events.on(_i.TEXT_TRACKS_AVAILABLE, (function() {
                        var n;
                        W = !!t.backbone && (null == (n = t.backbone.textTracks) ? void 0 : n.length), xt()
                    }));
                    var K = { targetBlank: 0 === t.config.embed.on_site, playState: G ? "playing" : "paused", volume: P && j.volume, ccButton: N && W && V, castButton: F, ccOn: null !== tt, prefsButton: H, airplayButton: _s.airPlay, stereoscopicButton: q, fullscreenButton: j.fullscreen, vimeoLogo: V ? D : {}, duration: _d(t.config.video.duration), rawDuration: t.config.video.duration, captionsIcon: hd.render("icon_cc", { title: "Choose captions" }), settingsIcon: hd.render("icon_gear", { title: "Settings" }), fullscreenIcon: hd.render("icon_fullscreen", { title: "Enter full screen" }), unfullscreenIcon: hd.render("icon_unfullscreen", { title: "Exit full screen" }), playIcon: hd.render("icon_play", { title: "Play" }), pauseIcon: hd.render("icon_pause", { title: "Pause" }), replayIcon: hd.render("icon_replay", { title: "Play" }), chaptersIcon: hd.render("icon_chapters", { title: "Chapters" }), chapters: !!R.chapters && R.chapters.length, strings: { loadedBar: "loaded", playedBar: "played", volume: "Volume (use up/down arrow keys to change)", airPlay: "Choose an AirPlay device", airPlayOff: "Turn off AirPlay", pipEnter: "Enter Picture-in-Picture", pipReturn: "Exit Picture-in-Picture", fullscreen: "Fullscreen", chromecast: "Cast", watchOnVimeo: "Watch on vimeo.com", stereoscopic: "Enable stereoscopic playback", stereoscopicOff: "Disable stereoscopic playback" } };
                    if (L && (K.customLogo = L), i.classList.remove("trailer"), $ = !1, i.innerHTML = hd.render("controlbar", K), r = i.querySelector(".play"), o = r.querySelector(".buffer"), u = r.querySelector(".loaded"), a = r.querySelector(".played"), s = i.querySelector(".play-bar"), c = i.querySelector(".vp-progress"), f = s.querySelector(".focus-target"), l = s.querySelector(".loaded"), d = s.querySelector(".played"), h = s.querySelector(".cuepoints"), v = i.querySelector(".timecode"), p = v.querySelector(".box"), m = i.querySelector(".ghost-timecode"), w = m.querySelector(".box"), b = i.querySelector(".thumb-preview"), g = i.querySelector(".thumb"), (y = i.querySelector(".volume")) && (_ = U(y.querySelectorAll("div")), t.config.embed.muted ? St(0) : St(t.config.request.cookie.volume)), T = i.querySelector(".play-bar .cc"), E = i.querySelector(".js-chapter-button"), (k = i.querySelector(".js-prefs")) && Tf.isCastConnected && Qh(k), x = i.querySelector(".pip"), _s.airPlay && (M = i.querySelector(".airplay")), (_s.webvr || _s.stereoscopic) && t.config.video.spatial && (A = i.querySelector(".stereoscopic")), C = i.querySelector(".fullscreen"), I = !1, z && t.events.fire(Fc.Qs, z), ot && _t(), Mt(), n.get(Wf)) {
                        var Y = i.querySelector(".vp-live-status");
                        Y.style.display = "block";
                        var J = Y.querySelector(".vp-live-status-circle");
                        n.get(Hf) ? (J.classList.remove("offline"), J.classList.add("online"), k && !Tf.isCastConnected && Zh(k)) : (J.classList.add("offline"), J.classList.remove("online"), r.classList.add("hidden"), k && Qh(k)), p.style.cursor = "default", c.classList.add("disabled")
                    }
                    rt.renderChapterMarkers()
                } else ! function(n, e) {
                    i.classList.add("trailer");
                    var o = { vimeoLogo: n, text: t.config.video.vod.button_text || "Watch Trailer", strings: { watchOnVimeo: "Watch on vimeo.com" } };
                    e && (o.customLogo = e), i.innerHTML = hd.render("controlbar_trailer", o), r = i.querySelector(".play"), $ = !0
                }(D, L)
            }
        }

        function Mt() {
            if (n.get(Wf)) {
                var i = G && t.config.duration > 0;
                v.style.display = i ? "block" : "none"
            }
        }

        function At() {
            var e;

            function r(n) {
                if (W = !1, e === n.pointerId && !1 !== n.isPrimary) {
                    var i = n.clientX;
                    n.targetTouches && n.targetTouches.length > 0 && (i = n.targetTouches[0].clientX, n.preventDefault());
                    var r = dt(i);
                    ht(r), t.events.fire(Mc.za, r)
                }
            }

            function o(n) { var e = n.type; "pointerup" === e || "MSPointerUp" === e ? rl(i).off("pointermove", ".vp-progress", r).off("pointerup", ".vp-progress", o) : "touchend" === n.type ? rl(i).off("touchmove", r).off("touchend", o) : rl(document).off("mousemove", r).off("mouseup", o), t.events.fire(Fc.Js), t.element.classList.remove("scrubbing") }
            t.events.on(bi.TIME_UPDATE, (function(n) {
                var i = n.currentTime,
                    e = n.timeProgress;
                W && (0 === t.config.embed.time || t.config.embed.time > 0 && i >= t.config.embed.time) && (W = !1), N || ht(e, i)
            })), t.events.on(Fc.Ys, (function(t) { N = !0, F = t })), t.events.on(Fc.Js, (function() { N = !1, F = !1 })), t.events.on(bi.SEEKED, (function(t) {
                var n = t.timeProgress;
                F && ht(n)
            })), n.get(Pf) && !n.get(qf) || (rl(i).on(_s.pointerEvents ? "pointerdown" : ["touchstart", "mousedown"], ".vp-progress", (function(n) {
                if (!(n.button && 2 === n.button || n.target.classList.contains("js-chapter-marker"))) {
                    var u = n.type;
                    if (t.element.classList.add("scrubbing"), t.events.fire(Fc.Ys, !1, u), "pointerdown" === u || "MSPointerDown" === u) {
                        e = n.pointerId;
                        try { n.target.msSetPointerCapture ? n.target.msSetPointerCapture(e) : n.target.setPointerCapture(e) } catch (t) {}
                        rl(i).on("pointermove", ".vp-progress", r).on("pointerup", ".vp-progress", o)
                    } else "touchstart" === u ? rl(i).on("touchmove", r).on("touchend", o) : rl(document).on("mousemove", r).on("mouseup", o);
                    var a = n.clientX;
                    n.targetTouches && n.targetTouches.length > 0 && (a = n.targetTouches[0].clientX, n.preventDefault());
                    var s = dt(a);
                    if (O) ht(s);
                    else {
                        var c = t.config.video.duration * s;
                        vt(s, c), pt(s, c), W = !0
                    }
                    return t.events.fire(Mc.za, s, null), !1
                }
            })), t.events.on(Mc.ws, (function(n, i) { n = ac(n, 0, t.config.video.duration), i || (i = n / t.config.video.duration), window.requestAnimationFrame((function() { vt(i, n), pt(i, n) })) })))
        }

        function Ct(n) {
            if (n.element.parentElement) {
                if (n.isFullwidth()) return n.element.style.right = "", n.element.style.bottom = "", void(n.element.style.height = "");
                var i = rc(t.element),
                    e = rc(n.button),
                    r = rc(n.element.parentElement),
                    o = rc(n.element),
                    u = 0,
                    a = e.right - e.width / 2 + o.width / 2;
                a < r.right && (u = r.right - a);
                var s = window.getComputedStyle(n.element),
                    c = parseFloat(s.fontSize);
                if (n.isCentered()) {
                    var f = i.right - r.right,
                        l = i.bottom - r.bottom,
                        d = (i.width - o.width) / 2,
                        h = (i.height - o.height) / 2;
                    n.element.style.right = "".concat((d - f) / c, "em"), n.element.style.bottom = "".concat((h - l) / c, "em")
                } else n.element.style.right = "".concat(u / c, "em"), n.element.style.bottom = "".concat(r.height / c, "em")
            }
        }

        function Rt() { n.get(Pf) && !n.get(qf) && (t.events.on(nu.STREAM_ONLINE, (function() { xt() })), t.events.on([nu.STREAM_OFFLINE, nu.EVENT_ENDED], (function() { xt() }))) }
        return xt(), Nh(i, ".play, .replay", (function() { return O = !0, $ && (z = !1, i.classList.add("invisible"), xt(), kt()), r.classList.contains("state-playing") ? (t.events.fire(Fc.Vs), wt()) : (t.events.fire(Fc.Bs), bt()), !_s.android })), t.events.on([Fc.Bs, Fc.Ss, Bo, bi.PLAY], bt), t.events.on([Fc.Vs, Fc.Ms, Fc.zf, Mc.Ja], wt), t.events.on(Fc.He, (function() { t.displayContext !== t.backbone ? bt() : wt() })), t.events.on(Fc.As, (function() { W = !1, wt(), ht(1) })), t.events.on(Fc.kc, (function(t) { "not-supported" === t && wt() })), n.get(Pf) && !n.get(Hf) && (r.classList.add("hidden"), t.events.once(nu.STREAM_ONLINE, (function() { r.classList.remove("hidden") }))), t.events.on(nu.EVENT_ENDED, (function() { r.classList.add("hidden") })), At(), t.events.on(_i.BUFFER_STARTED, (function() { o.setAttribute("class", o.getAttribute("class").replace(/\s+hidden/, "")), V = !0, ot || kt() })), t.events.on(_i.BUFFER_ENDED, (function() { l.classList.remove("hidden"), n.get(Wf) && d.classList.remove("hidden"), o.setAttribute("class", o.getAttribute("class") + " hidden"), V = !1 })),
            function() {
                var e, o = null,
                    u = !1;

                function a() { return e || (e = t.verifyConfig().then((function(t) { return bf(t.thumb_preview.url) }))), e.then((function(n) { var i = t.config.request.thumb_preview; return g.style.backgroundImage || (g.style.width = "".concat(i.frame_width / 2, "px"), g.style.height = "".concat(i.frame_height / 2, "px"), g.style.backgroundImage = "url(".concat(i.url, ")"), g.style.backgroundSize = "".concat(i.width / 2, "px ").concat(i.height / 2, "px")), n })) }

                function f(n) {
                    if (n.target === s) {
                        var i = lt(n.clientX);
                        ht(i), t.events.fire(Mc.za, i)
                    }
                }

                function l(t) { return m.classList.contains("hidden") || (b.classList.remove("hidden"), window.requestAnimationFrame((function() { window.requestAnimationFrame((function() { b.classList.remove("invisible") })) }))), t }

                function d(n) {
                    if (t.config.request.thumb_preview && null === o && !u) {
                        var i = rc(c).width,
                            e = document.querySelector(".player").clientHeight;
                        if (!(o = e >= 215 && i >= 185)) return void b.classList.add("hidden");
                        a().then(l).catch((function() {}))
                    }
                    if (H) {
                        var f = function(t) {
                                var n = J,
                                    i = Array.isArray(n),
                                    e = 0;
                                for (n = i ? n : n[D.iterator]();;) {
                                    var r;
                                    if (i) {
                                        if (e >= n.length) break;
                                        r = n[e++]
                                    } else {
                                        if ((e = n.next()).done) break;
                                        r = e.value
                                    }
                                    var o = r,
                                        u = rc(o),
                                        a = u.left,
                                        s = u.right,
                                        c = u.width;
                                    if (t >= a && t <= s) return { clientX: a + c / 2, snappedTo: o }
                                }
                                return { clientX: t, snappedTo: null }
                            }(n.clientX),
                            d = f.clientX,
                            v = f.snappedTo,
                            p = lt(d),
                            y = t.config.video.duration * p;
                        J.forEach((function(t) { return t.classList.toggle("active", t === v) })), t.config.request.thumb_preview && o && !u && a().then((function(n) {
                            var i = Q(function(n) {
                                    var i = t.config.video.duration / t.config.request.thumb_preview.frames,
                                        e = Math.min(t.config.request.thumb_preview.frames - 1, Math.ceil(n / i)),
                                        r = e % t.config.request.thumb_preview.columns,
                                        o = Math.floor(e / t.config.request.thumb_preview.columns);
                                    return [-r * t.config.request.thumb_preview.frame_width / 2, -o * t.config.request.thumb_preview.frame_height / 2]
                                }(y), 2),
                                e = i[0],
                                r = i[1];
                            return window.requestAnimationFrame((function() { g.style.backgroundPosition = "".concat(e, "px ").concat(r, "px") })), n
                        })).catch((function() {})), window.requestAnimationFrame((function() {
                            w.innerHTML = _d(y);
                            var t = (100 * p).toFixed(3);
                            m.style.left = "".concat(t, "%"),
                                function(t) {
                                    var n = Q(function() {
                                            var t = rc(r).left,
                                                n = rc(s).right,
                                                i = rc(b).width,
                                                e = t + Math.ceil(i / 2),
                                                o = n - Math.ceil(i / 2),
                                                u = ct(),
                                                a = ft() - u;
                                            return [(e - u) / a, (o - u) / a]
                                        }(), 2),
                                        i = n[0],
                                        e = n[1],
                                        o = (100 * Math.max(i, Math.min(e, t))).toFixed(3);
                                    b.style.left = "".concat(o, "%")
                                }(p), n.clientX > ft() + 10 && !b.contains(document.elementFromPoint(n.clientX, n.clientY)) && h()
                        }))
                    }
                }

                function h() { m && (m.classList.add("invisible"), b.classList.add("invisible")), H = !1, rl(s).off("click", f) }
                n.get(Pf) && !n.get(qf) || rl(i).on("mouseenter", ".vp-progress", (function(n) { H || B || (m.classList.remove("hidden"), H = !0, d(n), window.requestAnimationFrame((function() { window.requestAnimationFrame((function() { m.classList.remove("invisible") })) })), t.config.request.thumb_preview && o && !u && a().then(l).catch((function() {})), rl(s).on("click", f)) })).on("mousemove", ".play-bar", d).on("mouseleave", ".play-bar", h).on("mouseenter", ".js-chapter-marker", (function() { u = !0 })).on("mouseleave", ".js-chapter-marker", (function() { u = !1, o = null })), rl(i).on("transitionend", ".ghost-timecode", (function(t) { "opacity" === t.propertyName && "0" === window.getComputedStyle(this, "").opacity && (m.classList.add("hidden"), b.classList.add("hidden")) }), !1), t.events.on(Fc.Bc, h), t.events.on(Fc.Qc, (function() { e = null }))
            }(),
            function() {
                var n;

                function e(n) {
                    var i = n.clientX;
                    n.targetTouches && (i = n.targetTouches[0].clientX, n.preventDefault());
                    var e = o(i);
                    t.events.fire(Mc.Ga, e), St(e)
                }

                function r(n) { B = !1, t.events.fire(Fc.Zs), t.element.classList.remove("scrubbing"); var o = n.type; "pointerup" === o || "MSPointerUp" === o ? rl(i).off("pointermove", ".volume", e).off("pointerup", ".volume", r) : "touchend" === n.type ? rl(document).off("touchmove", e).off("touchend", r) : rl(document).off("mousemove", e).off("mouseup", r), y.setAttribute("tabindex", y.getAttribute("data-tabindex")), y.removeAttribute("data-tabindex") }

                function o(t) { var n = rc(y).left; return ac((t - n) / (rc(y).right - n), 0, 1) }
                rl(i).on("mousemove", ".volume", (function(t) {
                    var n = t.srcElement;
                    if (-1 === _.indexOf(n)) {
                        var i = rc(y),
                            e = t.clientX,
                            r = i.bottom - 2;
                        if (n = document.elementFromPoint(e, r), -1 === _.indexOf(n)) return
                    }
                    n.classList.add("hover"), window.requestAnimationFrame((function() { window.requestAnimationFrame((function() { n.classList.remove("hover"), n.classList.add("animate") })) }))
                })), rl(i).on("transitionend", ".volume div", (function(t) { "height" === t.propertyName && this.classList.remove("animate") })), rl(document).on("contextmenu", ".volume", (function() { this.blur() })), rl(i).on(_s.pointerEvents ? "pointerdown" : ["touchstart", "mousedown"], ".volume", (function(u) {
                    if (1 === u.which) {
                        y.setAttribute("data-tabindex", y.getAttribute("tabindex")), y.removeAttribute("tabindex"), B = !0, t.element.classList.add("scrubbing"), t.events.fire(Fc.Xs);
                        var a = u.type;
                        if ("pointerdown" === a || "MSPointerDown" === a) {
                            n = u.pointerId;
                            try { u.target.msSetPointerCapture ? u.target.msSetPointerCapture(n) : u.target.setPointerCapture(n) } catch (t) {}
                            rl(i).on("pointermove", ".volume", e).on("pointerup", ".volume", r)
                        } else "touchstart" === a ? rl(document).on("touchmove", e).on("touchend", r) : rl(document).on("mousemove", e).on("mouseup", r);
                        var s = u.clientX;
                        u.targetTouches && (s = u.targetTouches[0].clientX);
                        var c = o(s);
                        t.events.fire(Mc.Ga, c), St(c)
                    }
                })), t.events.on(Fc.Cs, (function(n) { t.backbone.muted ? St(0) : !B && _ && St(n) })).on([Mc.es, Mc.ns], (function() { xt() }))
            }(), Nh(i, ".js-chapter-marker", (function(n) {
                var i = parseFloat(n.target.dataset.time) + .001;
                t.events.fire(Fc.Ws, i, "controlbar")
            })), t.events.on(_i.CHAPTER_CUES_UPDATED, (function() { rt.renderChapterMarkers() })),
            function() {
                function e() {
                    var n = t.backbone.chapters,
                        i = 0;
                    return U(n).map((function(n) { var e = t.currentTime; return { index: "".concat(i += 1), label: n.text, id: n.id, active: e >= n.startTime && e < n.endTime } }))
                }
                Nh(i, ".js-chapter-button", (function() {
                    if (E) {
                        if (!Z) return void(Z = function() {
                            var i = new Wh(t, { id: "chapters", title: "Chapters", items: e() }, !1);
                            i.pinTitle();
                            var r = new Fh(t, E, [i]),
                                o = t.element;

                            function u(n) { r.element.classList.toggle("vp-menu-fullwidth", n), t.events.fire(Fc.sc, r.isCentered(), r), n ? o.insertBefore(r.element, o.children[0]) : Et(r) }
                            return r.element.classList.add("vp-menu-chapters"), rl(i.element).on("mouseenter", ".vp-panel-item", (function(n) { t.events.fire(Fc.Gs, { id: n.target.dataset.time, position: "menu" }) })).on("mouseleave", ".vp-panel-item", (function(n) { t.events.fire(Fc.$s) })), t.events.on(Fc.Gs, (function(t) { i.setHoverState(t.id) })), t.events.on(Fc.$s, (function(t) { i.clearHoverState() })), n.watch("ui.controlbar.isPrefsMenuCentered", u), u(n.get("ui.controlbar.isPrefsMenuCentered")), i.on("select", (function(n) { t.events.fire(Fc.$s), t.events.fire(Fc.Ws, parseFloat(n) + .001, "menu") })), t.events.on(Fc.Ks, (function(t) { Z && Z.getPanel("chapters") && Z.getPanel("chapters").setActiveItem(t) })), r
                        }()).show();
                        Z.toggle(), t.events.fire(Fc.$s)
                    }
                }))
            }(), t.events.on(_i.CHAPTER_CUES_UPDATED, (function() { Z && (Z.destroy(), Z = null), t.backbone.chapters.length < 2 && xt() })), Nh(i, ".cc", (function() { t.events.fire(Fc.qs) })), t.events.on(Fc.qs, (function(n) {
                S ? S.toggle(n) : (S = Et(function(n) {
                    var i = [];
                    t.backbone.textTracks && (t.backbone.textTracks.forEach((function(t) {
                        var n = "CC" === t.label.substring(t.label.length - 2),
                            e = "captions" !== t.kind || n ? "" : " CC";
                        i.push({ label: t.label + e, id: "".concat(t.id), active: tt === "".concat(t.id) })
                    })), i.push({ label: "None", id: "off", active: null === tt }));
                    var e = new Wh(t, { items: i, id: "cc", title: "Closed Captions" });
                    return e.on("select", (function(n) { "off" !== n ? t.events.fire(Mc.as, n) : t.events.fire(Mc.ss) })), new Fh(t, n, [e])
                }(T))).show(n)
            })), t.events.on(Fc.ic, (function(t) { t ? function(t) { tt = t, S && S.getPanel("cc") && (S.getPanel("cc").setActiveItem(t), setTimeout((function() { S.hide() }), 100)), T && (T.classList.add("on"), T.classList.remove("off")) }(t.id) : (tt = null, S && S.getPanel("cc") && (S.getPanel("cc").setActiveItem("off"), setTimeout((function() { S.hide() }), 100)), T && (T.classList.add("off"), T.classList.remove("on"))) })).on([Mc.os, Mc.rs], (function() { xt() })).on(Fc.Mf, (function() { xt() })),
            function() {
                var e, r;

                function o() {
                    var n = t.backbone.representations.map((function(t) { var n = xh(t); return { id: n, label: Ah(t), active: e === n } })),
                        i = t.backbone.video.currentFile.mime;
                    return [xc.dash, xc.dashMpd, xc.hlsLive].includes(i) && n.unshift({ id: "auto", label: "Auto", active: !e || "auto" === e }), n
                }
                Nh(i, ".js-prefs", (function() { t.events.fire(Fc.Hs) })), t.events.on(Fc.Hs, (function(i) {
                    if (k) {
                        if (!X) return void(X = Et(function() {
                            var i = [];
                            if (t.backbone.representations && t.backbone.representations.length > 0) {
                                var e = new Wh(t, { id: "quality", title: "Quality", items: o() });
                                e.on("select", (function(n) { t.events.fire(Mc.Za, n) })), r && e.setTitleStat(r), e.pinTitle(), i.push(e)
                            }
                            if (t.backbone.supportsPlaybackRate && t.config.embed.settings.speed) {
                                var u = ut.map((function(n) { return n.active = n.id === t.backbone.playbackRate, n })),
                                    a = new Wh(t, { id: "speed", title: "Speed", items: u });
                                a.on("select", (function(n) { t.events.fire(Mc.bs, n) })), a.pinTitle(), i.push(a)
                            }
                            var s = new Fh(t, k, i);

                            function c(n) { s.element.classList.toggle("vp-menu-center", n), t.events.fire(Fc.sc, s.isCentered(), s) }
                            return n.watch("ui.controlbar.isPrefsMenuCentered", c), c(n.get("ui.controlbar.isPrefsMenuCentered")), _s.touch && s.element.classList.add("vp-menu-carousel"), s
                        }())).show(i);
                        X.toggle(i)
                    }
                })), t.events.on(Fc.Rs, (function(t) { e = t, X && X.getPanel("quality") && X.getPanel("quality").setActiveItem(t) })), t.events.on(_i.STREAM_CHANGE, (function(t) {
                    var n = t.quality || "".concat(t.height, "p");
                    r = n, X && X.getPanel("quality") && X.getPanel("quality").setTitleStat(Ah(t))
                })), t.events.on(Fc.Ps, (function(t) { X && X.getPanel("speed") && X.getPanel("speed").setActiveItem(t) }))
            }(), Nh(i, ".pip", (function() { "picture-in-picture" !== t.backbone.presentationMode ? t.events.fire(Mc.ds) : t.events.fire(Mc.hs) })), t.events.on($o, (function() { x && (x.classList.remove("hidden"), x.hidden = !1, st()) })).on(Ko, (function() { x && (x.classList.add("hidden"), x.hidden = !0, st()) })).on(Yo, (function() { it = !0, x && (x.classList.add("return"), x.classList.remove("enter"), x.setAttribute("title", x.getAttribute("data-title-return"))) })).on(Jo, (function() { it = !1, x && (x.classList.add("enter"), x.classList.remove("return"), x.setAttribute("title", x.getAttribute("data-title-enter"))) })), _s.airPlay && (Nh(i, ".airplay", (function() { t.events.fire(Fc.Hf) })), t.events.on(Fc.Ff, (function() { M && (M.classList.remove("hidden"), M.hidden = !1, st()) })).on(Fc.Uf, (function() { M && (M.classList.add("hidden"), M.hidden = !0, st()) })).on(Fc.Vf, (function() { nt = !0, M && (M.classList.remove("off"), M.classList.add("on"), M.setAttribute("title", M.getAttribute("data-title-on"))), kt() })).on(Fc.Bf, (function() { nt = !1, M && (M.classList.remove("on"), M.classList.add("off"), M.setAttribute("title", M.getAttribute("data-title-off"))) }))), Nh(i, ".fullscreen", (function() { t.events.fire(Fc.Us) })), t.events.on(Fc.dc, (function() { R = !1, i.classList.remove("tiny") })), t.events.on(Fc.vc, (function(t) {
                if (C) {
                    var n = C.cloneNode(!0);
                    C.parentNode.replaceChild(n, C), C = n
                }
                t || (R = !0), e && i.classList.add("tiny")
            })), t.events.on([Fc.Hc, Fc.Ys, Mc.Ga], kt).on([Fc.Bc, Fc.qc], _t).on(Fc.lc, (function() { I = !1, _t() })).on(Fc.hc, (function() { I = !1 })).on(Fc.Os, (function() { q = !0, _t() })).on(Mc.Ga, (function(t, n) { n || kt() })), rl(i).on(["pointerenter", "pointerleave", "mouseenter", "mouseleave"], [".play", ".play-bar", ".custom-logo", ".vp-menu"], (function(t) { "pointerType" in t ? "mouse" !== t.pointerType && t.pointerType !== t.MSPOINTER_TYPE_MOUSE || (I = "pointerenter" === t.type || "MSPointerEnter" === t.type) : _s.touch || (I = "mouseover" === t.type) })), t.events.on(Mc._overrideControlbarBehavior, (function(n) { j = n, n ? t.events.on(Mc.ls, (function(t) { t ? yt() : gt() })) : t.events.off(Mc.ls) })), t.events.on(Fc.kc, (function(t) {
                if ("not-supported" !== t && "private-unlocked" !== t && "help" !== t) L = !0, _t();
                else
                    for (var n = i.querySelectorAll("a, button, input, [tabindex]"), e = 0, r = n.length; e < r; e++) {
                        var o = n[e].getAttribute("tabindex");
                        o && n[e].setAttribute("data-tabindex", o), n[e].setAttribute("tabindex", "-1")
                    }
            })).on(Fc.Ec, (function() {
                L = !1, kt();
                for (var t = i.querySelectorAll("[tabindex]"), n = 0, e = t.length; n < e; n++) {
                    var r = t[n].getAttribute("data-tabindex");
                    r && "null" !== r ? t[n].setAttribute("tabindex", r) : t[n].removeAttribute("tabindex"), t[n].removeAttribute("data-tabindex")
                }
            })), t.events.on(Fc.cf, (function() { i.classList.add("controls-outro") })).on(Fc.ff, (function() { i.classList.remove("controls-outro") })),
            function() {
                function n() { et.filter((function(t) { return t.isVisible() })).forEach((function(t) { return t.hide() })) }
                t.events.on([Fc.sc, Fc.nc], (function(t, n) { Ct(n), n.isCentered() && n.isVisible() && i.classList.add("controls-centerMenu"), n.isCentered() && n.isVisible() || i.classList.remove("controls-centerMenu") })).on(Fc.vc, n).on(Fc.Qs, (function(t) { t || n() })), rl(window).on("resize", (function() { et.forEach(Ct) }))
            }(), new zh(t), t.events.on(Fc.Qc, (function(n, i) { Rt(), At(), xt(), 3 === t.config.view && kt(), st() })), t.events.on(Mc.Ja, (function() { window.requestAnimationFrame((function() { Mt(), vt(0, t.config.video.duration), pt(0, 0), mt(0, 0) })), kt(), O = !1, I = !1, N = !1, B = !1, W = !1, R = !1, q = !1, S && (Tt(S), S = null), X && (Tt(X), X = null) })), rl(window).on("resize", (function() { st() })), t.events.on(Fc.if, (function() { e = !0, i.classList.add("tiny") })).on(Fc.ef, (function() { e = !1, i.classList.remove("tiny") })).on(Fc.rf, (function() { e = !1, i.classList.remove("tiny") })),
            function() {
                if (t.config.embed.on_site) {
                    var n = new P;
                    t.events.on(Fc.ec, (function(e) {
                        if (e.data.visible) {
                            var r = document.createElement("div");
                            r.setAttribute("id", "cuepoint-".concat(e.id)), r.setAttribute("data-time", e.time), r.classList.add("cuepoint"), r.classList.add("out"), r.appendChild(document.createElement("div"));
                            var o = e.time / t.config.video.duration * 100;
                            r.style.left = "".concat(o, "%"), n.set(e, r), h.appendChild(r), J = U(i.querySelectorAll(".cuepoint")), window.requestAnimationFrame((function() { return r.classList.remove("out") }))
                        }
                    })), t.events.on(Fc.rc, (function(t) {
                        var i = n.get(t);
                        i && (n.delete(t), i.classList.add("out"))
                    })), rl(i).on("transitionend", ".cuepoint", (function(t) { this.classList.contains("out") && (h.removeChild(this), J = U(i.querySelectorAll(".cuepoint"))) }))
                }
            }(), A && (Nh(i, ".stereoscopic", (function() { t.events.fire(Fc.oc) })), A.classList.remove("hidden"), A.hidden = !1), Rt(), Tf.on(_f.connected, (function() { k && Qh(k) })), Tf.on(_f.disconnected, (function() { k && Zh(k) })), Tf.on(_f.playing, bt), Tf.on([_f.error, _f.idle, _f.paused, _f.ended, _f.disconnected], wt), t.events.on(Bo, (function() {
                t.events.on(bi.PROGRESS, (function(t) {
                    var n = t.loaded,
                        i = (t.duration, t.loadProgress);
                    R || window.requestAnimationFrame((function() { mt(i, n) }))
                })), O = !0;
                var n = t.config.embed.time || t.backbone.currentTime;
                ht(n / t.config.video.duration, n), W = !0
            })), t.events.fire(Fc.Rf), {}
    }
    var uv = function() {
        function t(t, n) {
            var i = this,
                e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
            nt(this), this.version = e, this.visible = !1;
            var r = this.Ll = document.createElement("div");
            r.classList.add("compass-wrapper"), r.innerHTML = hd.render("compass", { version: e }), r.classList.add("cloaked"), t.appendChild(r), n && r.addEventListener("click", n), this.Pl = r.querySelector(".compass-slice"), this.Nl = r.querySelector(".compass-line");
            var o = function() { i.Fl = !0 },
                u = function(t) { return function() { setTimeout((function() { i.Fl || (i.fade(), i.Fl = !1) }), t) } };
            rl(this.Ll).on("mousein", o).on("pointerin", o).on("mouseout", u(1e3)).on("pointerout", u(1e3)), u(2500)()
        }
        var n = t.prototype;
        return n.setAngle = function(t, n) {
            var i = this;
            this.Nu && window.cancelAnimationFrame(this.Nu);
            var e = 0;
            1 === this.version ? e = -45 : 2 === this.version && (e = -30);
            var r = "".concat(e + n),
                o = (t + 85) / 170;
            this.Nu = window.requestAnimationFrame((function() { i.Pl.setAttribute("transform", "rotate(".concat(r, ", ").concat(18, ", ").concat(18, ")")), i.Nl && i.Nl.setAttribute("d", i.Ul(o, 18)) }))
        }, n.Ul = function(t, n) {
            var i = 2 * n - Math.round(2 * n * t),
                e = (2 * n - 2 * Math.sqrt(2 * i * n - Math.pow(i, 2))) / 2,
                r = 2 * n - e - 5;
            return "M".concat(e + 5, ",").concat(i, " L").concat(r, ",").concat(i, " z")
        }, n.reveal = function() {
            var t = this;
            this.Ll.classList.remove("cloaked"), window.requestAnimationFrame((function() { t.Ll.classList.add("in") })), this.visible = !0
        }, n.fade = function() { this.Ll.classList.add("fade"), this.visible = !0 }, n.hide = function() {
            var t = this;
            this.Ll.classList.remove("in"), this.Ll.classList.remove("fade"), this.Ll.classList.add("leaving"), rl(this.Ll).on("transitionend", (function n() { "opacity" === event.propertyName && (t.Ll.classList.remove("leaving"), t.Ll.classList.add("cloaked"), t.visible = !1), rl(t.Ll).off("transitionend", n) }))
        }, n.updatePosition = function(t) {
            if (t) {
                var n = rc(t);
                if (n.height < 265) return this.Ll.classList.remove("align-bottom"), void this.Ll.classList.add("hidden");
                if (n.height < 336) return this.Ll.classList.remove("hidden"), void this.Ll.classList.add("align-bottom");
                this.Ll.classList.remove("hidden"), this.Ll.classList.remove("align-bottom")
            }
        }, n.getWrapper = function() { return this.Ll }, t
    }();

    function av(t, n, i) {
        var e = null,
            r = _s.touch ? 4500 : 2e3,
            o = !0,
            u = !0,
            a = !1,
            s = null,
            c = null,
            f = [],
            l = !1,
            d = null,
            h = null,
            v = !0,
            p = !1,
            m = !1,
            w = !1,
            b = !1,
            g = !1,
            y = i.querySelector(".vp-target"),
            _ = i.querySelector(".vp-sidedock"),
            k = i.querySelector(".vp-controls"),
            E = i.querySelector(".vp-title"),
            T = i.querySelector(".vp-video"),
            S = U(i.querySelectorAll(".vp-nudge")),
            x = !!_s.touch && S.some((function(t) { return !t.classList.contains("invisible") })),
            M = t.config.embed.autoplay && t.config.request.flags.autohide_controls,
            A = _s.touch ? 300 : 0,
            C = null,
            R = Ch(t.config, "webvr").group || !1;

        function O() { clearTimeout(e), e = null }

        function I() { g && (clearTimeout(e), e = setTimeout(D, r)) }

        function j() { mh.element && mh.element.classList.contains("js-player-fullscreen") && (a || (i.classList.add("player-cursor-hide"), u = !0, a = !0)) }

        function D(n) {
            (p || v) && (w || (O(), document.activeElement && document.body.classList.contains("showfocus") && (_.contains(document.activeElement) || k.contains(document.activeElement)) || (t.events.fire(n ? Fc.Bc : Fc.qc), u = !0, _s.spatialPlayback && t.config.video.spatial || (y.classList.add("hidden"), y.setAttribute("hidden", "")), o = !0, j())))
        }

        function L() { I(), x || b || p && v || (t.events.fire(Fc.Hc), y.classList.remove("hidden"), y.removeAttribute("hidden")) }

        function P() { p || v ? i.removeAttribute("tabindex") : p || v || m || i.setAttribute("tabindex", "0") }

        function N() { t.events.on([bi.TIME_UPDATE, bi.SEEKED], (function n(i) { i.currentTime >= 1.75 && null === e && (t.events.fire(Fc.Os), t.events.off([bi.TIME_UPDATE, bi.SEEKED], n)) })) }

        function F() { T.classList.remove("threesixty-video"), t.element.classList.remove("grabbable"), t.element.classList.remove("grabbing"), s && s.hide() }

        function V() { f.forEach((function(t) { return clearTimeout(t) })), f = [] }

        function B(t) { t && (t.classList.remove("cloaked"), window.requestAnimationFrame((function() { t.classList.add("in") }))) }

        function H(t) { t && (t.classList.add("leaving"), window.requestAnimationFrame((function() { rl(t).on("transitionend", (function n(i) { "opacity" === i.propertyName && (t.classList.remove("in"), t.classList.remove("leaving"), t.classList.add("cloaked"), rl(t).off("transitionend", n)) })) }))) }

        function q(t) { rc(_).width > 60 ? t.classList.add("vp-alert-bumpdown") : t.classList.remove("vp-alert-bumpdown") }
        return function() {
                var n = !0;

                function e() { L() }

                function c(e) {
                    var s;
                    if (r = 2e3, u) u = !1;
                    else if (a && (i.classList.remove("player-cursor-hide"), a = !1), 0 !== e.screenX && e.screenX !== screen.width - 1 && 0 !== e.screenY && e.screenY !== screen.height - 1) {
                        if (n = !0, _s.spatialPlayback && (null == (s = t.config.video) ? void 0 : s.spatial)) {
                            var c = rc(t.element),
                                f = e.clientX - c.left,
                                d = e.clientY - c.top,
                                h = d > t.element.clientHeight - 55,
                                v = f > t.element.clientWidth - 45 && d < 180;
                            if (l || !h && !v) return
                        }
                        o && L(), I()
                    } else O(), j(), n && (D(!0), n = !1)
                }

                function f() { D(!0) }

                function d(t) {
                    var n = k.contains(t.target) || _.contains(t.target),
                        i = s && s.getWrapper().contains(t.target);
                    p && v || i ? n || !p && !v || D(!0) : (clearTimeout(C), C = setTimeout(L, A))
                }
                _s.pointerEvents ? rl(i).on("pointerenter", (function(t) {
                    if ("mouse" === t.pointerType || t.pointerType === t.MSPOINTER_TYPE_MOUSE) return r = 2e3, e();
                    r = 4500, d(t)
                })).on("pointermove", (function(t) { if ("mouse" === t.pointerType || t.pointerType === t.MSPOINTER_TYPE_MOUSE) return c(t) })).on("pointerleave", (function(t) { if ("mouse" === t.pointerType || t.pointerType === t.MSPOINTER_TYPE_MOUSE) return f() })) : rl(i).on("touchmove", (function() { r = 4500, I() })).on("touchend", d).on("mouseenter", e).on("mousemove", c).on("mouseleave", f)
            }(), t.events.on(bi.PLAY, (function(t) { M || 0 === t || L() })).on(Fc.He, L).on([_i.BUFFER_ENDED, bi.SEEKED, Fc.Js, Fc.Cs, Fc.uc], I).on(Bo, (function() { g = !0 })), t.events.on(Fc.nc, (function(t) { t && I() })), t.events.on(Fc.kc, P).on(Fc.Qs, (function(t) { v = t, P() })).on(Fc.tc, (function(t) { p = t, P() })), t.events.on(Fc.cf, (function() { w = !0, L() })).on(Fc.ff, (function() { w = !1 })),
            function() {
                var e = !1,
                    r = !1,
                    o = 0;
                t.events.on(Fc.nc, (function(t) { r = t })), rl(i).on(_s.pointerEvents ? "pointerup" : "click", (function(i) {
                    if (!r && 2 !== i.button && i.target.classList && function(t) { return (t.classList.contains("vp-title") || t.classList.contains("vp-target") || E.contains(t.parentNode) && "HEADER" === t.parentNode.tagName || T.contains(t)) && !_.contains(t) }(i.target)) {
                        var e = ("pointerup" === i.type || "MSPointerUp" === i.type) && "mouse" !== i.pointerType && i.pointerType !== i.MSPOINTER_TYPE_MOUSE,
                            u = g && _s.spatialPlayback && t.config.video.spatial && c;
                        if (_s.touch || e) { var a = -1 !== t.backbone.supportedPresentationModes.indexOf("inline") && !_s.mobileAndroid; if (!u) { if (g && a) return; return void t.events.fire(Fc.Bs) } }
                        1 == ++o && setTimeout((function() {
                            if (u) { var e = h && h.x === i.clientX && h.y === i.clientY; return 1 === o && e && !_s.mobileAndroid && t.events.fire(t.backbone.paused ? Fc.Bs : Fc.Vs), 1 !== o && t.backbone.getEffectByName("ThreeSixtyEffect").snapToCenter(), void(o = 0) }
                            if (1 === o) {
                                if (n.get(Pf) && !n.get(Hf)) return;
                                t.events.fire(t.backbone.paused ? Fc.Bs : Fc.Vs)
                            } else t.events.fire(Fc.Us);
                            o = 0
                        }), 200)
                    }
                })), rl(i).on("mousedown", ".vp-video-wrapper", (function(t) { var n; if (!e) return y.classList.remove("hidden"), y.removeAttribute("hidden"), 2 !== t.button && document.createEvent && ((n = document.createEvent("MouseEvents")).initMouseEvent("click", !0, !0, window, 1, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), y.dispatchEvent(n)), !1 })).on("contextmenu", ".vp-video", (function(t) { return y.classList.remove("hidden"), y.removeAttribute("hidden"), !1 })), t.events.on(Mc.cs, (function(t) {
                    if (t) return e = !0, void y.classList.add("hidden");
                    e = !1, y.classList.remove("hidden")
                }))
            }(),
            function() {
                var n, e;
                _s.touch || (rl(i).on("focus", "a, button, input, [tabindex]", (function() { e = this, clearTimeout(n), n = null, document.activeElement === this && L() })), rl(i).on("blur", "a, button, input, [tabindex]", (function() { document.activeElement === this && (n = setTimeout(D, 50)) })), i.addEventListener("focus", (function(t) { L(), e && e.focus() }), !1), t.events.on(Fc.kc, (function() { m = !0, i.removeAttribute("tabindex") })), t.events.on(Fc.Ec, (function() { m = !1 })))
            }(), t.events.on(Fc.dc, (function(t) { j(), c && c.adjustRenderSize(), w && L() })).on(Fc.vc, (function(t) { o = !0, c && c.adjustRenderSize(), t ? D() : (L(), O()) })), N(), t.events.on(Mc.Ja, (function() { o = !0, u = !0, v = !0, p = !1, b = !1, g = !1, N(), O() })), t.events.on(Mc.vs, (function() {
                var n = function(t) { return function() { c && t.apply(void 0, arguments) } },
                    e = n((function(n) {
                        var i = t.element.classList.contains("webvr");
                        c && i && c.toggleVR()
                    })),
                    r = n((function(n) { c.isVRPresenting ? setTimeout((function() { t.events.fire(Ei.WEBVR_ENTER) }), 100) : setTimeout((function() { t.events.fire(Ei.WEBVR_EXIT) }), 100) }));
                t.events.on(Mc.ms, n((function() {
                    var n = t.element.classList.contains("webvr");
                    n || t.element.classList.add("grabbable"), s && s.updatePosition(t.element), !s || s.visible || n || s.reveal()
                }))), t.events.on(Fc.As, n((function() { F(), _s.webvr && c.isVRPresenting && R && c.toggleVR() }))), t.events.on(Ei.CAMERA_UPDATE, n((function(t) { s && s.setAngle(t.lat, t.lon) }))), t.events.on(Bo, n((function() {
                    t.config.video.spatial ? function() {
                        function n(t) { d && (d.innerHTML = hd.render("threesixty_reminder", t)) }
                        var e = t.backbone.getEffectByName("ThreeSixtyEffect");
                        t.config.embed.settings.spatial_compass ? (s || (s = new uv(t.element.querySelector(".vp-controls-wrapper"), (function() { e.snapToCenter() }))), s.updatePosition(t.element), s.reveal()) : s && s.hide(), t.events.once(Fc.Ls, (function() {
                                var i = t.config.embed.cards;
                                (null == i ? void 0 : i.length) && i[0].timecode < 15 || (f.push(setTimeout((function() { n({ showArrows: !1, text: _s.android ? "Look around" : "Click and drag to look around" }), q(d), B(d), setTimeout((function() { return H(d) }), 3e3) }), 7e3)), _s.android || f.push(setTimeout((function() { n({ showArrows: !1, text: _s.android ? "Look around" : "Use arrow keys to see more" }), q(d), B(d), setTimeout((function() { return H(d) }), 3e3) }), 14e3)))
                            })),
                            function() {
                                var t = i;
                                if (!d) {
                                    var n = d = document.createElement("div");
                                    n.classList.add("cloaked"), n.classList.add("vp-alert-round"), n.classList.add("vp-alert-round--top"), n.classList.add("vp-alert-round--threesixty"), t.appendChild(n)
                                }
                            }()
                    }() : !t.config.video.spatial && s && (F(), V())
                }))), (_s.webvr || _s.stereoscopic || _s.webxr) && (_s.webvr && window.addEventListener("vrdisplaypresentchange", r, !1), t.events.on(Fc.oc, n((function() { V(), _s.webvr && c.hasVRHeadset && R ? c.toggleVR() : t.events.fire(Fc.Uc) }))), t.events.on(Ei.WEBVR_HARDWARE_AVAILABLE, n((function(t) {
                    var n = i.querySelector(".stereoscopic");
                    n && n.classList.contains("off") && R && n.classList.remove("off")
                }))), t.events.on(Ei.WEBVR_ENTER, n((function(n) {
                    window.addEventListener("vrdisplaydisconnect", e, !1), window.addEventListener("vrdisplaydeactivate", e, !1);
                    var r = i.querySelector(".stereoscopic");
                    r && r.classList.add("on"), s && s.hide(), t.element.classList.remove("grabbable"), t.element.classList.add("webvr"), c.isUserInteracting = !1
                }))), t.events.on(Ei.WEBVR_EXIT, n((function(n) {
                    window.removeEventListener("vrdisplaydisconnect", e), window.removeEventListener("vrdisplaydeactivate", e);
                    var r = i.querySelector(".stereoscopic");
                    r && r.classList.remove("on"), s && s.reveal(), t.element.classList.add("grabbable"), t.element.classList.remove("webvr"), c.isUserInteracting = !0
                }))));
                var o = null,
                    u = n((function(n) {
                        var i = t.element.classList.contains("webvr");
                        l || i || (l = !0, n.preventDefault(), t.element.classList.add("grabbing"), h = { x: n.clientX, y: n.clientY }, c.makeContact(h))
                    })),
                    a = n((function(n) {
                        var i = t.element.classList.contains("webvr");
                        l && !i && (V(), c.move({ x: n.clientX, y: n.clientY }))
                    })),
                    v = n((function(n) {
                        var i = t.element.classList.contains("webvr");
                        l && !i && (t.element.classList.remove("grabbing"), c.releaseContact(!1), l = !1)
                    })),
                    p = n((function(n) { n.preventDefault(), t.element.classList.contains("webvr") || (c.isUserInteracting || (c.isUserInteracting = !0), null !== o && clearTimeout(o), V(), o = setTimeout((function() { t.element.classList.remove("player-cursor-hide"), t.element.classList.add("grabbable"), c.isUserInteracting = !1 }), 500), t.element.classList.add("player-cursor-hide"), t.element.classList.remove("grabbable"), c.moveWheel({ x: n.deltaX, y: n.deltaY })) })),
                    m = n((function(t) { l || (l = !0, c.makeContact({ x: t.touches[0].clientX, y: t.touches[0].clientY })) })),
                    w = n((function(t) { l && (t.preventDefault(), V(), c.move({ x: t.touches[0].clientX, y: t.touches[0].clientY })) })),
                    b = n((function(t) { c.releaseContact(!0), l = !1 })),
                    g = n((function(t) { l || V(), c.moveDevice(t.alpha, t.beta, t.gamma, t.orientation) })),
                    _ = n((function(n) { l = !1, t.element.classList.remove("grabbing"), c.abandonMotion() }));
                t.events.on(Bo, (function() { _s.android && c && window.addEventListener("deviceorientation", g, !1) })), t.events.once(Bo, (function() {
                    if (t.store.watch("ui.player.boundingRect", (function() { s && s.updatePosition(t.element), c && c.adjustRenderSize(), l = !1 })), _s.pointerEvents) rl(y).on("pointerdown", u), window.addEventListener("pointermove", a), window.addEventListener("pointerup", v), window.addEventListener("pointerleave", _);
                    else {
                        rl(y).on("mousedown", u).on("wheel", p);
                        var n = !(_s.browser.ie || _s.browser.edge);
                        window.addEventListener("touchstart", m, !!n && { passive: !1 }), window.addEventListener("touchmove", w, !!n && { passive: !1 }), window.addEventListener("touchend", b, !!n && { passive: !1 }), window.addEventListener("mousemove", a), window.addEventListener("mouseup", v), window.addEventListener("mouseleave", _)
                    }
                }))
            })), t.events.on(Go, (function(t) { F(), c = t, V() })), t.events.on(Fc.Ns, (function() { b = !0, clearTimeout(C), C = null })), t.events.on(Fc.Fs, (function() { b = !1 })), {}
    }

    function sv(t, n, i, e) {
        if (!jt(t)) return t;
        for (var r = -1, o = (n = Qu(n, t)).length, u = o - 1, a = t; null != a && ++r < o;) {
            var s = ta(n[r]),
                c = i;
            if (r != u) {
                var f = a[s];
                void 0 === (c = e ? e(f, s, a) : void 0) && (c = jt(f) ? f : ai(n[r + 1]) ? [] : {})
            }
            ri(a, s, c), a = a[s]
        }
        return t
    }

    function cv(t, n) { return null != t && n in Object(t) }

    function fv(t, n) {
        return function(t, n, i) {
            for (var e = -1, r = n.length, o = {}; ++e < r;) {
                var u = n[e],
                    a = na(t, u);
                i(0, u) && sv(o, Qu(u, t), a)
            }
            return o
        }(t, n, (function(n, i) {
            return function(t, n) {
                return null != t && function(t, n, i) {
                    for (var e = -1, r = (n = Qu(n, t)).length, o = !1; ++e < r;) {
                        var u = ta(n[e]);
                        if (!(o = null != t && i(t, u))) break;
                        t = t[u]
                    }
                    return o || ++e != r ? o : !!(r = null == t ? 0 : t.length) && Pn(r) && ai(u, r) && (Ln(t) || Dn(t))
                }(t, n, cv)
            }(t, i)
        }))
    }
    var lv = St ? St.isConcatSpreadable : void 0;

    function dv(t) { return Ln(t) || Dn(t) || !!(lv && t && t[lv]) }

    function hv(t) {
        return null != t && t.length ? function t(n, i, e, r, o) {
            var u = -1,
                a = n.length;
            for (e || (e = dv), o || (o = []); ++u < a;) {
                var s = n[u];
                i > 0 && e(s) ? i > 1 ? t(s, i - 1, e, r, o) : Cu(o, s) : r || (o[o.length] = s)
            }
            return o
        }(t, 1) : []
    }
    var vv = function(t) { return Yt(yt(t, void 0, hv), t + "") }((function(t, n) { return null == t ? {} : fv(t, n) })),
        pv = ["clip_id", "profile_id", "player_size", "dropped_frames", "total_frames", "bandwidth", "markers", "streams", "files", "video_dims", "min_bandwidth", "max_badwidth", "buffer_occupancy", "live_latency", "scanner", "vr_headset"],
        mv = function() {
            function t(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {};
                this.el = t, this.Vl = {}, this.Bl = n, this.Hl = null
            }
            var n = t.prototype;
            return n.init = function() { this.ql(), this.Wl(), this.zl(), this.Gl() }, n.reset = function() { this.ql(), this.Gl(), this.Bl() }, n.$l = function(t, n) { return this.Vl[t] = [n], this.Bl(), this.Vl[t] }, n.Kl = function(t, n) { return this.Vl[t].push(n), this.Vl[t].length > 300 && this.Vl[t].splice(0, 25), this.Bl(), this.Vl[t] }, n.getCurrent = function(t) { return this.Vl[t].slice(-1)[0] }, n.getSeries = function(t) { return this.Vl[t] }, n.Yl = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    n = t.name,
                    i = Xa({}, t.data),
                    e = this.Jl(n, i);
                this.Xl(n, n, e)
            }, n.Jl = function(t, n) {
                if (t === ef.CHUNK_DOWNLOADED) {
                    var i = {};
                    i.host = n.host, i.duration = dc(n.duration, 2), i.size = n.size, i.index = n.index, i.profile_id = n.profile_id, i.quality = n.quality, i.buffered = dc(n.buffered, 2), i.ttfb = dc(n.ttfb, 2), i.headers = vv(n.headers, ["x_vim_cachebc", "x_cache", "akamai_edge_ip", "x_akamai_request_id", "content_type"]);
                    var e = 0,
                        r = 0,
                        o = 0,
                        u = i.headers.x_vim_cachebc,
                        a = i.headers.x_cache;
                    return u ? u.split(",").forEach((function(t) {
                        var n = Q(t.split(":"), 2),
                            i = n[0],
                            e = n[1];
                        "E" !== i || "h" !== e ? "h" !== e || (r = 1) : o = 1
                    })) : a && (r = "HIT" === a.substr(0, 3), o = "HIT" === a.substr(-3)), o ? e = 2 : r && (e = 1), i.cache_hit = e, i
                }
                if (t === ef.VIDEO_PLAYBACK_ERROR || t === ef.VIDEO_LOAD_FAILURE || t === ef.VIDEO_START_FAILURE || t === ef.VIDEO_READY) return n;
                if (void 0 !== n.autoplay && void 0 !== n.looping) { var s = {}; return s.cdn = n.cdn, s.quality = n.quality, s }
                return n
            }, n.Xl = function(t, n) {
                var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    e = this.el.backbone.currentTime,
                    r = Date.now(),
                    o = dc(dt(e, this.el.backbone.buffered), 2);
                this.Kl("markers", { type: t, title: n, vt: e, t: r, bt: o, data: i })
            }, n.Wl = function() { this.el.events.on(_i.BANDWIDTH, this.Zl.bind(this)), this.el.events.on(_i.BUFFER_OCCUPANCY, this.Ql.bind(this)), this.el.events.on(_i.CURRENT_FILE_CHANGE, this.td.bind(this)), this.el.events.on(_i.DROPPED_FRAMES, this.nd.bind(this)), this.el.events.on(_i.SCANNER_CHANGE, this.ed.bind(this)), this.el.events.on(_i.STREAM_CHANGE, this.rd.bind(this)), this.el.events.on(_i.STREAM_CHANGE_START, this.od.bind(this)), this.el.events.on(bi.TIME_UPDATE, this.ud.bind(this)), this.el.events.on(Ei.WEBVR_HARDWARE_AVAILABLE, this.ad.bind(this)), this.el.events.on(Fc.Zf, this.Yl.bind(this)) }, n.ad = function(t) { t.displayName && this.$l("vr_headset", t.displayName) }, n.sd = function() {
                var t = this;
                this.Hl = setInterval((function() {
                    var n = t.el.backbone.buffered,
                        i = t.el.backbone.videoElement;
                    if (n && n.length && i && i.currentTime) {
                        var e = n.end(n.length - 1) - i.currentTime;
                        t.$l("live_latency", e)
                    } else t.$l("live_latency", 0)
                }), 500)
            }, n.fd = function() { clearInterval(this.Hl) }, n.zl = function() {
                var t = this;
                this.el.store.watch("ui.player.boundingRect", (function(n) {
                    var i = t.getCurrent("video_dims"),
                        e = t.ld(n);
                    t.Kl("video_dims", e);
                    var r = i ? "Resized from ".concat(i, " to ").concat(e) : "Resized to ".concat(e);
                    t.Xl(qc.MARKER_RESIZE, r)
                }))
            }, n.ld = function(t) {
                var n = "".concat(Math.round(t.width), "px"),
                    i = "".concat(Math.round(t.height), "px"),
                    e = window.devicePixelRatio && window.devicePixelRatio > 1 ? "@".concat(dc(window.devicePixelRatio, 3), "x") : "";
                return n && i ? "".concat(parseInt(n, 10), "×").concat(parseInt(i, 10), " ").concat(e) : ""
            }, n.ql = function() { this.Vl = pv.reduce((function(t, n) { return t[n] = [], t }), {}) }, n.Gl = function() {
                var t = this.el.backbone.currentFile;
                this.Kl("files", t), this.Kl("scanner", this.el.backbone.currentScannerName), "HLSLiveScanner" === this.el.backbone.currentScannerName && this.sd(), this.$l("min_bandwidth", 0), this.$l("max_badwidth", 0);
                var n = this.el.store.get("ui.player.boundingRect"),
                    i = this.ld(n);
                this.Kl("video_dims", i)
            }, n.Zl = function(t) {
                var n = Math.round(100 * t.speed) / 100;
                this.Kl("bandwidth", { videoTime: this.el.backbone.currentTime, time: Date.now(), value: n });
                var i = this.getCurrent("max_badwidth"),
                    e = this.getCurrent("min_bandwidth");
                (!e || n < e) && this.$l("min_bandwidth", n), (!i || n > i) && this.$l("max_badwidth", n)
            }, n.nd = function(t) {
                var n = t.dropped,
                    i = t.total;
                this.$l("total_frames", i), this.$l("dropped_frames", n)
            }, n.fu = function() { this.Xl(qc.MARKER_SEEKED, "Seeked to ".concat(this.el.backbone.currentTime)) }, n.dd = function() { this.Xl(qc.MARKER_ENDED, "Ended") }, n.od = function(t) {
                var n = t.previousStreamIndex,
                    i = t.index,
                    e = t.streams,
                    r = e[i],
                    o = e[n],
                    u = o ? o.bitrate : null;
                if (u !== r.bitrate && null !== u) {
                    var a = this.vd(o),
                        s = this.vd(r);
                    r.bitrate < u ? this.Xl(qc.MARKER_DOWNSWITCH, "Starting Downswitch from ".concat(a, " to ").concat(s)) : r.bitrate > u && this.Xl(qc.MARKER_UPSWITCH, "Starting Upswitch from ".concat(a, " to ").concat(s))
                }
            }, n.rd = function(t, n, i) {
                var e = i[n],
                    r = this.vd(e);
                this.Xl(qc.MARKER_SWITCH_COMPLETE, "Completed switch to ".concat(r)), this.Kl("streams", { profile: void 0 !== t ? t.profile : null, quality: void 0 !== t ? t.quality : "".concat(e.height, "p"), bitrate: e.bitrate, framerate: e.framerate, height: e.height, width: e.width, id: e.id, codec: Mh(e.codecs) })
            }, n.td = function() {
                var t = this.getCurrent("files"),
                    n = this.el.backbone.currentFile;
                this.Kl("files", n);
                var i = n.metadata.cdn,
                    e = t ? t.metadata.cdn : null,
                    r = t ? Vc[t.mime] : null,
                    o = Vc[n.mime],
                    u = "CDN to ".concat(i, "/").concat(o);
                e && (u = "CDN from ".concat(e, "/").concat(r, " to ").concat(i, "/").concat(o)), this.Xl(qc.MARKER_FILE_CHANGE, u)
            }, n.Ql = function(t) {
                var n = Math.round(1e3 * t) / 1e3;
                this.Kl("buffer_occupancy", { videoTime: this.el.backbone.currentTime, time: Date.now(), value: n })
            }, n.ed = function() {
                var t = this.getCurrent("scanner"),
                    n = this.el.backbone.currentScannerName;
                this.$l("scanner", n), t && this.Xl(qc.MARKER_SCANNER_CHANGE, "Scanner change to ".concat(n)), "HLSLiveScanner" === n ? this.sd() : this.fd()
            }, n.pd = function() { this.Xl(qc.MARKER_STALLED, "Stalled") }, n.vd = function(t) { return "".concat(t.width, "×").concat(t.height, "@").concat(Math.round(t.framerate), " ").concat(Math.round(t.bitrate / 1e3).toLocaleString(), " Kbps") }, n.ud = function() { this.Bl() }, H(t, [{ key: "onDataChange", set: function(t) { this.Bl = t } }]), t
        }(),
        wv = function(t, n, i) { return Math.min(Math.max(t, n), i) },
        bv = function() {
            function t(t, n) {
                var i = this;
                this.Z = t, this.el = n, this.wd = new mv(this.el), this.wd.onDataChange = function() { i.bd() }, this.wd.init(), this.xn(), this.Y = !1, this.gd = !1, this.yd = !1
            }
            var n = t.prototype;
            return n.render = function() {
                if (this.Y) {
                    var t = {};
                    try { t = this._d() } catch (t) {}
                    this.Z.innerHTML = hd.render("debug_panel", t)
                }
            }, n.bd = function() {
                if (this.Y) try {
                    var t = this._d();
                    this.Z.querySelector(".vp-stats-debug-values").innerHTML = hd.render("debug_values", t)
                } catch (t) {}
            }, n.resetData = function() { this.wd.reset(), this.render() }, n.xn = function() {
                var t = this;
                this.el.events.on(Fc.Ic, (function() { "tiny" !== t.el.store.get("ui.player.mode") && (t.Z.classList.contains("hidden") ? t.showPanel() : t.hidePanel()) })), Nh(this.Z, ".vp-copy-debug", this.kd.bind(this)), this.el.events.on(Fc.Qc, (function() { t.resetData() })), Nh(this.Z, ".vp-stats-debug-close", (function() { t.hidePanel() })), this.el.store.watch("ui.player.mode", this.toggleVisibility.bind(this))
            }, n.hidePanel = function() { this.Z.classList.add("hidden"), this.Z.setAttribute("hidden", ""), this.Z.setAttribute("aria-hidden", "true"), this.Y = !1 }, n.showPanel = function() { this.Z.classList.remove("hidden"), this.Z.removeAttribute("hidden"), this.Z.setAttribute("aria-hidden", "false"), this.Y = !0, this.render() }, n.toggleVisibility = function(t) {
                if ("tiny" === t && this.Y) return this.gd = !0, void this.hidePanel();
                this.gd && (this.showPanel(), this.gd = !1)
            }, n._d = function() {
                var t, n, i, e = this.wd.getCurrent("scanner"),
                    r = "MediaSourceScanner" === e,
                    o = "HLSLiveScanner" === e,
                    u = this.wd.getCurrent("video_dims"),
                    a = !(!this.el.config.request.files || !this.el.config.request.files.dash) && this.el.config.request.files.dash.separate_av,
                    s = r || o ? this.Ed() : null,
                    c = r || o ? this.Td(s) : null,
                    f = this.wd.getCurrent("vr_headset") || null,
                    l = this.el.currentTime,
                    d = lt(l, this.el.backbone.buffered),
                    h = l + d,
                    v = this.Sd(this.el.backbone.buffered),
                    p = this.el.backbone.brainDebug,
                    m = { playerVersion: of(this.el.config), sessionId: this.el.config.request.session, clientIp: null == (t = this.el.config.request) || null == (n = t.client) ? void 0 : n.ip, showSessionId: this.yd, clipId: this.el.config.video.id, isDash: r, isLive: o, embedSize: u, separateAudioVideo: a, bandwidthSeriesSvg: c, isCopyDisabled: !!this.el.doNotTrackEnabled || this.el.config.embed.settings.background, isDNTEnabled: this.el.doNotTrackEnabled, hideCloseButton: !!this.el.config.embed.settings.background, vrHeadsetName: f, currentTime: dc(l, 3), bufferAhead: dc(d, 3), bufferEnd: dc(h, 3), readyState: this.el.backbone.readyState, support: JSON.stringify(_s), ua: null == (i = navigator) ? void 0 : i.userAgent, bufferedRanges: JSON.stringify(v), brainDebug: JSON.stringify(p) };
                return Object.assign(m, this.xd(), this.Md(), this.Ad(), this.Cd(), this.Rd(), this.Od(o), this.Id())
            }, n.Od = function(t) { return t ? { liveLatency: "".concat(this.wd.getCurrent("live_latency").toFixed(2), " seconds"), liveSessionID: this.el.config.video.live_event.id } : null }, n.Id = function() {
                if (!this.el.config.video.p2p) return null;
                var t = ia(window, "Streamroot.instances[0].stats"),
                    n = ia(t, "realtime.dnaSources");
                if (void 0 === n) return null;
                var i = ia(t, "currentContent.cdnDownload"),
                    e = ia(t, "currentContent.dnaDownload");
                return { p2pSources: n, p2pOffload: "".concat(dc(e / (i + e) * 100, 1), "%") }
            }, n.Rd = function() { var t = this.wd.getCurrent("files"); return t ? { delivery: t.mime } : null }, n.xd = function() { var t = this.wd.getCurrent("bandwidth"); return { bandwidthKbps: t ? "".concat(Math.floor(t.value / 1e3).toLocaleString(), " Kbps") : 0, bandwidthMinKbps: "".concat(Math.floor(this.wd.getCurrent("min_bandwidth") / 1e3).toLocaleString(), " Kbps"), bandwidthMaxKbps: "".concat(Math.floor(this.wd.getCurrent("max_badwidth") / 1e3).toLocaleString(), " Kbps") } }, n.Md = function() { var t = this.wd.getCurrent("streams"); return { codec: t ? t.codec : null, resolution: t ? "".concat(t.width, "×").concat(t.height, "@").concat(Math.round(t.framerate), " ").concat(Math.round(t.bitrate / 1e3).toLocaleString(), " Kbps") : null } }, n.Cd = function() {
                var t = this.wd.getCurrent("total_frames") || 0,
                    n = this.wd.getCurrent("dropped_frames") || 0;
                return { totalFrames: t, droppedFrames: n, droppedFramesPercent: 0 !== t ? "".concat((n / t * 100).toFixed(2), "%") : 0 }
            }, n.Ad = function() { var t = this; return { testGroup: Object.keys(this.el.config.request.ab_tests).map((function(n) { return "".concat(n, ": ").concat(t.el.config.request.ab_tests[n].group) })).join(", ") } }, n.Ed = function() { return { timeSeries: this.wd.getSeries("bandwidth"), max: this.wd.getCurrent("max_badwidth") } }, n.jd = function() { return { timeSeries: this.wd.getSeries("buffer_occupancy") } }, n.Td = function(t) {
                for (var n = t.timeSeries, i = t.max || 1, e = n.length, r = e < 100 ? 0 : e - 100, o = n[r], u = n[e - 1], a = o ? o.time : 0, s = u ? u.time : 0, c = [], f = r; f < e; f++) {
                    var l = n[f],
                        d = (l.time - a) / (s - a) * 250,
                        h = 14 - 14 * l.value / i;
                    isNaN(h) && (h = 0), isNaN(d) && (d = 0), c.push("".concat(d, ",").concat(wv(h, 0, 14)))
                }
                var v = { height: 14, width: 250, points: c.join(" "), markers: this.Dd(a, s) };
                return hd.render("time_series_graph", v)
            }, n.Ld = function(t) { var n = Object.keys(qc).find((function(n) { return qc[n] === t })); return Wc[n] }, n.Dd = function(t, n) {
                var i = this,
                    e = this.wd.getSeries("markers") || [];
                return 0 === e.length ? null : e.map((function(e) { var r = e.t; if (r < t || r > n) return ""; var o = (r - t) / (n - t) * 250; return isNaN(o) && (o = 0), "<g>\n                <title>".concat(e.title, '</title>\n                <line class="stats-debug-marker" x1="').concat(o, '" y1="', 0, '" x2="').concat(o, '" y2="').concat(14, '" stroke-width="1" stroke="').concat(i.Ld(e.type), '" />\n            </g>') })).join("")
            }, n.Pd = function() { this.yd = !0, this.bd() }, n.Nd = function(t, n) {
                var i = n.getAttribute("data-original-text"),
                    e = n.innerText,
                    r = i;
                i || (n.setAttribute("data-original-text", e), r = e);
                var o = document.createElement("textarea");
                if (o.value = t, this.Z.appendChild(o), o.select(), document.execCommand("copy")) { n.innerHTML = "Copied", this.Z.removeChild(o); var u = setTimeout((function() { n.innerHTML = r, clearTimeout(u) }), 1500); return !0 }
                return this.Z.removeChild(o), !1
            }, n.kd = function() {
                var t = this.Z.querySelector(".vp-copy-debug-label"),
                    n = this._d(),
                    i = this.wd.getSeries("markers");
                delete n.bandwidthSeriesSvg;
                var e = { version: 2, tpl: n, mark: i },
                    r = btoa(JSON.stringify(e));
                this.Nd(r, t) || this.Pd()
            }, n.Sd = function(t) {
                if (!t) return null;
                for (var n = t.length, i = 0, e = []; i < n; i++) {
                    var r = t.start(i),
                        o = t.end(i);
                    e.push({ i: i, start: r, end: o })
                }
                return e
            }, t
        }(),
        gv = function() {
            function t(t) { this.alertTextElement = t.querySelector(".vp-text-alert-wrapper"), this.alertContentTitle = this.alertTextElement.querySelector(".vp-live-start-time-title"), this.alertContentTime = this.alertTextElement.querySelector(".vp-live-start-time-body"), this.alertContentFooter = this.alertTextElement.querySelector(".vp-live-start-time-footer") }
            var n = t.prototype;
            return n.show = function(t, n, i) { this.alertContentTitle.innerHTML = t, this.alertContentTime.innerHTML = n, this.alertContentFooter.innerHTML = i, this.alertContentTitle.classList.remove("hidden"), this.alertContentTime.classList.remove("hidden"), this.alertContentFooter.classList.remove("hidden"), this.alertTextElement.classList.remove("hidden") }, n.hide = function() { this.alertContentTitle.classList.add("hidden"), this.alertContentTime.classList.add("hidden"), this.alertContentFooter.classList.add("hidden"), this.alertTextElement.classList.add("hidden") }, t
        }(),
        yv = function() {
            function t(t, n, i) { this.textAlert = new Th(t), this.timeAlert = new gv(t), this.player = n, this.store = i, this.startTime = new Date(this.store.get(Ff, null)), this.Da = !1, this.Fd(), this.Ud() }
            var n = t.prototype;
            return n.disable = function() { this.hide(), this.Da = !0 }, n.hide = function() { this.textAlert.hide(), this.timeAlert.hide() }, n.Ud = function() {
                (this.store.get(Vf) || this.store.get(Bf)) && this.Vd(), this.store.get(qf) && this.Bd()
            }, n.Fd = function() { this.player.events.on(nu.EVENT_ACTIVE, this.Vd.bind(this)), this.player.events.on(nu.STREAM_ONLINE, this.Hd.bind(this)), this.player.events.on(nu.STREAM_OFFLINE, this.qd.bind(this)), this.player.events.once(nu.EVENT_ENDED, this.Bd.bind(this)) }, n.Vd = function() { this.Wd() > 6e4 ? (this.textAlert.hide(), this.zd()) : (this.timeAlert.hide(), this.textAlert.show("This event hasn't started yet")) }, n.zd = function() {
                var t = this.Gd();
                this.timeAlert.show(t[0], t[1], t[2]), !this.store.get(Vf) && !this.store.get(Bf) || this.Da || setTimeout(this.Ud.bind(this), 3e4)
            }, n.Wd = function() { return this.startTime - new Date }, n.Gd = function() {
                var t = this.Wd(),
                    n = (t / 6e4).toFixed(0),
                    i = (t / 36e5).toFixed(0),
                    e = (t / 864e5).toFixed(0),
                    r = (new Date).toDateString() === this.startTime.toDateString();
                if (e > 1 || !r) return ["This event is scheduled for", "".concat(["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][this.startTime.getMonth()], " ").concat(this.startTime.getDate()), "at ".concat(yd(this.startTime))];
                if (i > 1 && r) return ["This event is scheduled for", "Today", "at ".concat(yd(this.startTime))];
                var o = n > 1 ? "minutes" : "minute";
                return ["This event will start in", "".concat(n, " ").concat(o), ""]
            }, n.Hd = function() { this.hide() }, n.qd = function() { this.textAlert.show("Live stream offline"), _s.iOS && mh.element && (this.player.events.fire(Fc.hc), mh.exit()) }, n.Bd = function() { this.textAlert.show("Live event ended") }, t
        }();

    function _v(t, n) {
        var i, e = n.querySelector(".vp-notification");

        function r(t, r) {
            if (null !== n.parentElement.offsetParent) {
                n.classList.remove("hidden"), n.removeAttribute("hidden"), n.setAttribute("data-name", t);
                var u = function(t) {
                        var i = "watchlater" === t || "unwatchlater" === t ? .5 : .4,
                            e = n.clientHeight;
                        return n.clientHeight > n.clientWidth && (e = n.clientWidth), { height: Math.round(e * i), width: Math.round(e * i * 1.6) }
                    }(t),
                    a = "width:" + u.width + "px;height:" + u.height + "px";
                e.style.cssText = a, e.innerHTML = r, "watchlater" !== t && "unwatchlater" !== t || function(t, n) {
                    var i = t.querySelector(".hour-hand"),
                        e = t.querySelector(".minute-hand");
                    if (i && e) {
                        var r = n ? 1 : -1,
                            o = new Date,
                            u = Math.abs(o.getHours() - 12),
                            a = o.getMinutes(),
                            s = a / 60 * 360 - 135,
                            c = u / 12 * 360 + a / 60 * 5,
                            f = c + 45 * r,
                            l = s + 540 * r;
                        i.style[_s.transformProperty] = "rotate(" + c + "deg)", e.style[_s.transformProperty] = "rotate(" + s + "deg)", window.requestAnimationFrame((function() { t.classList.add("animate"), _s.browser.firefox || _s.browser.opera || window.requestAnimationFrame((function() { i.style[_s.transformProperty] = "rotate(" + f + "deg)", e.style[_s.transformProperty] = "rotate(" + l + "deg)" })) }))
                    }
                }(e, "watchlater" === t), clearTimeout(i), n.classList.remove("animate"), window.requestAnimationFrame((function() { n.classList.remove("invisible"), i = setTimeout(o, 750) }))
            }
        }

        function o() { n.classList.add("animate"), n.classList.add("invisible") }

        function u() { n.classList.remove("animate"), n.classList.remove("invisible"), n.classList.add("hidden"), n.setAttribute("hidden", ""), n.removeAttribute("data-name"), e.innerHTML = "", e.classList.remove("filled"), e.classList.remove("animate"), t.events.fire(Fc.Pf) }
        return rl(n).on("transitionend", (function(t) { e.contains(t.target) && "height" === t.propertyName ? setTimeout(o, 100) : t.target === n && "opacity" === t.propertyName && window.requestAnimationFrame(u) })), t.events.on(Fc.Wc, (function(t) { t || r("like", hd.render("icon_heart")) })), t.events.on(Fc.zc, (function(t) { t || r("unlike", hd.render("icon_broken_heart")) })), t.events.on(Fc.Gc, (function(t) { t || r("watchlater", hd.render("icon_clock")) })), t.events.on(Fc.$c, (function(t) { t || r("unwatchlater", hd.render("icon_clock")) })), t.events.fire(Fc.jf), {}
    }

    function kv(t) { return t.account_type && "basic" !== t.account_type && !/_lapsed|_expired/.test(t.account_type) }

    function Ev(t, n) {
        var i = nt(),
            e = !1;

        function r(t) { sc(t, "facebook", { width: 580, height: 400 }) }

        function o(t) { sc(t, "twitter", { width: 550, height: 420 }) }

        function u(t) { sc(t, "tumblr", { width: 540, height: 600 }) }
        var a = {get events() { return i },
            setup: function() {
                var i;
                n.classList.remove("vp-share-embed-active", "vp-share-embed-only"), (null == (i = t.config.embed.settings.share) ? void 0 : i.embed_only) && n.classList.add("vp-share-embed-only");
                var e = n.querySelector(".js-embedCopy");
                e && (e.style.width = function(t, n) {
                    var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
                    n = Object.keys(n).map((function(t) { return n[t] }));
                    var e = t.cloneNode();
                    e.style.visibility = "hidden", e.style.padding = 0, t.parentElement.appendChild(e);
                    var r = n.map((function(t) { return e.innerText = t, e.clientWidth })),
                        o = Math.max.apply(Math, tt(r)),
                        u = window.getComputedStyle(t),
                        a = parseFloat(u.fontSize);
                    return t.parentElement.removeChild(e), "".concat((o + i) / a, "em")
                }(e, ["Copy", "Copied!"])), t.events.on(Fc.xc, r).on(Fc.Mc, o).on(Fc.Ac, u)
            },
            destroy: function() { t.events.off(Fc.xc, r).off(Fc.Mc, o).off(Fc.Ac, u) },
            getShareData: function() {
                var n, i, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    o = t.config.video.title,
                    u = t.config.video.owner.name,
                    a = t.config.video.share_url;
                return e = document.queryCommandSupported && document.queryCommandSupported("copy"), r.template = hd.render("share", { url: t.config.video.url, shareUrl: a, playerShareUrl: "https://".concat(t.config.player_url, "/video/").concat(t.config.video.id, "/share"), title: o, owner: u, embed: "public" === t.config.video.embed_permission && t.config.embed.settings.embed, embedOnly: null == (n = t.config.embed.settings.share) ? void 0 : n.embed_only, embedCode: Hh(t.config.video.embed_code), copyButton: e, customizeEmbed: !!t.config.video.url, readOnly: !_s.touch, facebookIcon: hd.render("icon_facebook", { title: "Share on Facebook" }), twitterIcon: hd.render("icon_twitter", { title: "Share on Twitter" }), tumblrIcon: hd.render("icon_tumblr", { title: "Share on Tumblr" }), emailIcon: hd.render("icon_mail", { title: "Share via Email" }), embedIcon: hd.render("icon_embed", { title: "Get embed code" }), strings: { share: "Share", emailSubject: "Check out “" + o + "” from " + u + " on Vimeo", emailBody: "Check out “" + o + "” from " + u + " on Vimeo.\n\nThe video is available for your viewing pleasure at " + a + "\n\nIf you like this video, make sure you share it, too!\n\nVimeo is filled with lots of amazing videos. See more at https://vimeo.com.", embedTitle: "Embed", embedSubtitle: "Add this video to your site with the embed code below.", copy: "Copy", copySuccess: "Copied!", customize: '<a href="'.concat(t.config.video.url, '#embed" target="_blank" rel="noopener" aria-describedby="new-window">') + "Customize this embed</a> on Vimeo" } }), r.$d = ".js-facebook", (null == (i = t.config.embed.settings.share) ? void 0 : i.embed_only) && (r.wrapperClass = "embed-only", r.$d = ".js-embed-input"), r
            },
            showShareView: function() { n.querySelector(".js-share-screen").classList.remove("cloaked"), n.classList.remove("vp-share-embed-active"), i.fire(Fc.Lc) },
            showEmbedView: function() { t.config.embed.settings.share.embed_only || (n.querySelector(".js-embed-screen").classList.remove("cloaked"), n.classList.add("vp-share-embed-active")), i.fire(Fc.Pc) }
        };
        return function() {
            var r;
            rl(n).on("transitionend", ".js-share-screen", (function(t) { "opacity" === t.propertyName && "0" === window.getComputedStyle(this, "").opacity && (i.fire(Fc.Fc), this.classList.add("cloaked")) })).on("transitionend", ".js-embed-screen", (function(t) { "opacity" === t.propertyName && "0" === window.getComputedStyle(this, "").opacity && (i.fire(Fc.Nc), this.classList.add("cloaked"), lc(n)) })).on("copy", "input[name=embed_code]", (function() { t.events.fire(Fc.Rc) })), Nh(n, ".js-facebook", (function() { return t.events.fire(Fc.xc, this.href), ec(), !1 })), Nh(n, ".js-twitter", (function() { return t.events.fire(Fc.Mc, this.href), ec(), !1 })), Nh(n, ".js-tumblr", (function() { return t.events.fire(Fc.Ac, this.href), ec(), !1 })), Nh(n, ".js-email", (function() { return t.events.fire(Fc.Cc), window.top.location = this.href, ec(), !1 })), Nh(n, ".js-embed", (function() { return t.events.fire(Fc.bc), a.showEmbedView(), ec(), !1 })), Nh(n, ".js-embedCopy", (function() {
                if (e) {
                    n.querySelector("input[name=embed_code]").select();
                    try {
                        document.execCommand("copy") && function() {
                            t.events.fire(Fc.Rc);
                            var i = n.querySelector(".js-embedCopy");
                            i.innerHTML = i.getAttribute("data-success-label"), clearTimeout(r), r = setTimeout((function() { i.innerHTML = i.getAttribute("data-label") }), 2e3)
                        }()
                    } catch (t) {}
                    return document.activeElement.blur(), !1
                }
            })), _s.touch ? rl(n).on("focus", "input[name=embed_code]", (function() {
                var t = this;
                setTimeout((function() { t.setSelectionRange(0, 9999), t.setAttribute("readonly", "readonly") }), 0)
            })).on("blur", "input", (function() { this.removeAttribute("readonly") })) : rl(n).on("click", "input[name=embed_code]", (function() { this.setSelectionRange(0, 9999) }))
        }(), a
    }

    function Tv(t, n, i) {
        var e, o, u, a = i.querySelector(".vp-outro"),
            s = null,
            c = !1,
            f = !1,
            l = !1,
            d = !1,
            h = !1,
            v = Ed(S, 250),
            p = null,
            m = t.config.request.ads instanceof Object,
            w = !1;

        function b() { return !h && null === s && !t.config.embed.loop }

        function g() {
            return t.config.embed.outro === zc.VOD ? (o = zc.VOD, s = y(o), !0 === d && E(), r.resolve(s)) : (h = !0, Ye("https://".concat(t.config.player_url, "/video/").concat(t.config.video.id, "/outro?on_site=").concat(t.config.embed.on_site, "&type=").concat(t.config.embed.outro, "&email=").concat(t.config.embed.email ? 1 : 0), { withCredentials: !0 }).json().then((function(n) {
                return o = n.type, (s = y(o, n.data)) && (s.bgimage && bf(s.bgimage), s.contexts && s.contexts.forEach((function(t) { t.videos.forEach((function(t) { bf(t.thumbnail) })) }))), kv(t.config.video.owner) && function(n, i) {
                    [zc.VIDEOS, zc.THREEVIDEOS, zc.PROMOTED].includes(n) && i.contexts && i.contexts.forEach((function(n) { n.videos.reduce((function(n, i) { return n.then(function(n) { return function() { return t.preloadVideo("auto", n.id, { autoplay: !0 }).catch((function(t) {})) } }(i)) }), r.resolve()) }))
                }(o, s), s
            })))
        }

        function y(n) {
            var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                e = pf(t.element.clientWidth * _s.devicePixelRatio, t.element.clientHeight * _s.devicePixelRatio),
                r = e.width,
                o = e.height;
            if (i.img_base && (i.bgimage = mf({ width: r, height: o, baseUrl: i.img_base })), n === zc.VOD) {
                var u = void 0 !== t.config.video.vod.is_preorder ? t.config.video.vod.is_preorder : !!t.config.video.vod.date_available,
                    a = t.config.video.vod.is_coming_soon,
                    s = t.config.video.vod.date_available_formatted_datetime || t.config.video.vod.date_available,
                    c = "Coming soon to Vimeo On Demand.";
                a && s && (c = "Coming soon to Vimeo On Demand on " + s + "."), u && (c = "Pre-order now. Watch on " + s + "."), i = { purchased: t.config.user.purchased, title: t.config.video.vod.feature_title, url: t.config.video.vod.url, currency: t.config.request.currency, countries: t.config.video.vod.countries, country: t.config.request.country, buttons: t.config.video.vod.purchase_options, translationMap: t.config.request.dynamic_translation_map, isPreorder: u, isComingSoon: a, releaseDate: s, strings: { watch: u ? "Watch on " + s : "Watch Now", preRelease: c } }
            }
            return [zc.VIDEOS, zc.THREEVIDEOS, zc.PROMOTED].includes(n) && (t.config.user.following = i.following, (i = { contexts: Array.isArray(i) ? i : [i], owner: t.config.video.owner.id, bgimage: i.bgimage, following: i.following }).contexts && i.contexts.forEach((function(t) {
                t.videos.forEach((function(n) {
                    if (n.fullTitle = n.title, n.byline = "", n.owner.id !== i.owner && (n.fullTitle = n.title + " from " + n.owner.name, n.byline = "from " + n.owner.name), n.thumbnail_base) {
                        var e = Math.round(r / t.videos.length);
                        n.thumbnail = mf({ width: e, height: Math.round(e / 1.778), baseUrl: n.thumbnail_base })
                    }
                }))
            }))), n === zc.LINK && (i.url = Xh(i.url), i.url2 = Xh(i.url2)), n === zc.SHARE && (i.strings = { back: "Back" }), i
        }

        function _(t) { a.classList.toggle("vp-outro--link-medium", t) }

        function k(t) { a.classList.toggle("vp-outro--link-large", t) }

        function E() {
            if (c = !0, o === zc.BEGINNING) return a.innerHTML = "", void t.events.fire(Mc.Ja);
            if (b()) g().then((function() { return E() })).catch((function() {}));
            else {
                var r = function() {
                    if ([zc.VIDEOS, zc.THREEVIDEOS, zc.PROMOTED].includes(o)) {
                        var n;
                        if (0 === ((null == (n = s) ? void 0 : n.contexts) || []).reduce((function(t, n) { return t + n.videos.length }), 0)) return null;
                        s.showFollowButton = !t.config.user.owner && t.config.user.logged_in, s.strings = { follow: "Follow", following: "Following", unfollow: "Unfollow" }
                    }
                    return s && (s.target = !t.config.embed.on_site), p = o, [zc.THREEVIDEOS, zc.PROMOTED].includes(o) && (p = zc.VIDEOS), hd.render("outro_" + p, s)
                }();
                r && (a.innerHTML = r, a.setAttribute("data-type", p), i.classList.remove("hidden"), i.removeAttribute("hidden"), f = !0, [zc.VIDEOS, zc.THREEVIDEOS].includes(o) ? function() {
                    var t = document.querySelector(".js-outro-followWrap");
                    if (t) {
                        var n = window.getComputedStyle(t),
                            i = parseFloat(n.fontSize);
                        t.style.width = "".concat(t.clientWidth / i, "em")
                    }
                }() : o === zc.LINK ? (n.watch("ui.outro.isLinkTitleVisible", _), n.watch("ui.outro.isLinkDescriptionVisible", k), _(n.get("ui.outro.isLinkTitleVisible")), k(n.get("ui.outro.isLinkDescriptionVisible"))) : o === zc.SHARE && function() {
                    var t = i.querySelector(".js-outro-content"),
                        n = e.getShareData();
                    t.innerHTML = n.template, e.setup()
                }(), window.requestAnimationFrame((function() { window.requestAnimationFrame((function() { i.classList.add("in"), S() })) })))
            }
        }

        function T() {
            if (f) return e.destroy(), c = !1, l = !1, f = !1, void window.requestAnimationFrame((function() { i.classList.remove("in"), t.events.fire(Fc.ff), M() }));
            c && (c = !1, t.events.fire(Fc.ff))
        }

        function S() {
            var n;
            if (!l && i.clientWidth) {
                rl(window).off("resize", v), l = !0;
                var e = [];
                (null == (n = s) ? void 0 : n.contexts) && s.contexts.forEach((function(t) {
                    t.videos && t.videos.forEach((function(t) {
                        var n = t.id,
                            i = a.querySelector('[data-video-id="' + n + '"]');
                        i && i.clientWidth > 0 && e.push(n)
                    }))
                })), t.events.fire(Fc.cf, e)
            }
        }

        function x() {
            u = setTimeout((function() {
                var n = t.config.embed.email || {};
                n && "after" === n.position ? (t.events.fire(Fc.Vc), t.events.on(Fc.xf, (function() { t.events.fire(Mc.fs) }))) : t.events.fire(Mc.fs)
            }), 250)
        }

        function M() { rl(window).off("resize", v), rl(window).on("resize", v) }
        return t.events.on(bi.TIME_UPDATE, (function(t) {
            var n = t.currentTime,
                i = t.duration;
            t.timeProgress, d = !1, b() && n >= i - 10 && g().catch((function() {}))
        })), t.events.on(Bo, (function() {
            [zc.NOTHING, zc.BEGINNING, zc.EMAIL].includes(t.config.embed.outro) && (o = t.config.embed.outro, s = !1)
        })), t.events.on(Fc.Xf, (function() { w = !0 })), t.events.on(Fc.As, (function() {
            if (m && !w) return t.events.on(Fc.Xf, x), void(m = !1);
            x()
        })), t.events.on(Fc._loadVideo, (function() { clearTimeout(u) })), t.events.on(Mc.fs, (function(n, i) { t.performDelegateAction(Pc, (function() { n && (o = n, s = null, h = !1), i && i.data && (s = y(n, i.data)), d = !0, E() })) })), rl(i).on("click", ".js-videoLink", (function(n) {
            var i = parseInt(this.getAttribute("data-video-id"), 10);
            t.events.fire(Fc.lf, i), kv(t.config.video.owner) && (n.preventDefault(), t.loadVideo(i, { autoplay: !0 }))
        })), rl(i).on("click", ".js-cta", (function(n) { t.events.fire(Fc.kf, this.href) })), rl(i).on("click", ".js-link", (function(n) { t.events.fire(Fc.wf, this.href) })), rl(i).on("click", ".js-imageLink", (function(n) { t.events.fire(Fc._f, this.href) })), rl(i).on("transitionend", (function(t) { i.classList.contains("in") || (i.classList.add("hidden"), i.setAttribute("hidden", "")) }), !1), t.events.on([Mc._hideOutro, Mc.Ja, bi.PLAY, bi.SEEKED, Fc.Ys], T), t.events.on(Fc.cf, (function() { t.element.classList.add("player-outroVisible") })).on(Fc.ff, (function() { t.element.classList.remove("player-outroVisible") })), Nh(i, ".js-outro-follow", (function() { t.events.fire(Fc._c) })), rl(i).on("mouseleave", ".js-outro-follow", (function(t) {
            var n = document.querySelector(".js-outro-follow");
            n && n.classList.remove("vp-outro-follow--activated")
        })), t.events.on(Fc.gf, (function() {
            var t = document.querySelector(".js-outro-follow");
            t && (t.setAttribute("aria-pressed", !0), t.classList.add("vp-outro-follow--activated"))
        })), t.events.on(Fc.yf, (function() {
            var t = document.querySelector(".js-outro-follow");
            t && t.setAttribute("aria-pressed", !1)
        })), t.events.on(Mc._showOverlay, (function() { setTimeout((function() { i.classList.add("hidden") }), 150) })), t.events.on(Fc.Ec, (function() { i.classList.contains("in") && i.classList.remove("hidden") })), t.events.on(Mc.Ja, (function() { s = null, h = !1, m = t.config.request.ads instanceof Object })), Nh(i, ".js-vod-button", (function() { var n = this.getAttribute("data-product-id"); return t.events.fire(Fc.gc, n), !1 })), Nh(i, ".js-vod-watch", (function() { if (!("date_available" in t.config.video.vod)) return T(), t.events.fire(Fc.gc), !1 })), a && ((e = new Ev(t, a)).events.on(Fc.Pc, (function() { t.config.embed.settings.share.embed_only || (i.querySelector(".js-back").classList.remove("cloaked"), i.classList.add("embed-active")) })).on(Fc.Lc, (function() { i.classList.remove("embed-active") })), Nh(i, ".js-back", (function() { return e.showShareView(), !1 })), e.events.on(Fc.Nc, (function() { i.querySelector(".js-back").classList.add("cloaked") }))), M(), {}
    }

    function Sv(t, n) {
        var i, e = nt();

        function r(t) {
            if ("yes" === t.form.getAttribute("data-bubble")) {
                t.form.setAttribute("data-bubble", "no");
                var i = n.querySelector(".vp-validation-bubble");
                i.querySelector(".vp-validation-bubble-message").innerHTML = t.validationMessage || "There is an error with this input.";
                var e = rc(t),
                    r = rc(t.form);
                i.style.left = e.left - r.left + "px", i.style.top = e.height + 1 + "px", i.classList.remove("hidden"), t.focus(), window.requestAnimationFrame((function() { i.classList.add("vp-validation-bubble-animate") })), o()
            }
        }

        function o(t) {
            var e = n.querySelector(".vp-validation-bubble");
            if (e) {
                if (t) return clearTimeout(i), void e.classList.remove("vp-validation-bubble-animate");
                clearTimeout(i), i = setTimeout((function() { e.classList.remove("vp-validation-bubble-animate") }), 5e3)
            }
        }

        function u() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                i = t.showBubble,
                e = void 0 === i || i,
                u = n.querySelector("input[type=email]"),
                a = n.querySelector("input[type=text]");
            return u.setAttribute("aria-invalid", "false"), u.setCustomValidity(""), u.checkValidity && !u.checkValidity() ? (u.setAttribute("aria-invalid", "true"), u.validity.valueMissing && u.setCustomValidity("Please enter your email."), u.validity.typeMismatch && u.setCustomValidity("Please enter a valid email."), e && r(u), !1) : (a.setAttribute("aria-invalid", "false"), a.setCustomValidity(""), a.checkValidity && !a.checkValidity() ? (a.setAttribute("aria-invalid", "true"), a.validity.typeMismatch && a.setCustomValidity("Please enter a valid name."), !1) : (o(!0), !0))
        }
        var a = function() { e.fire(Fc.xf) };

        function s(i) {
            if (!u()) return !1;
            var e = i.querySelector("input[type=email]"),
                o = i.querySelector("input[type=submit]"),
                s = { signature: "signature", time: "timestamp", expires: "expires" };

            function c(t) { o.classList.remove("loading"), e.setCustomValidity("Uh oh. There was a problem. Please try again."), e.setAttribute("aria-invalid", "true"), r(e) }
            Object.keys(s).forEach((function(n) { i.querySelector("input[name=".concat(n, "]")).value = t.config.request[s[n]] })), o.classList.add("loading"),
                function(i, e, r) {
                    lc(n);
                    var o = U(i.querySelectorAll("input")).map((function(t) { return t.name ? encodeURIComponent(t.name) + "=" + encodeURIComponent(t.value) : encodeURIComponent(t.value) })).join("&"),
                        u = new XMLHttpRequest;
                    u.open(i.method, i.action + window.location.search, !0), u.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), u.withCredentials = !0, u.timeout = 3e3, u.onload = function() {
                        var i;
                        try { i = JSON.parse(u.responseText) } catch (t) {}! function(i, e) {
                            !1 !== i ? (t.config.embed.email = null, t.events.fire(Fc.pf), function() {
                                var t = n.querySelector(".vp-email-capture"),
                                    i = n.querySelector(".vp-email-capture-confirm");
                                t.classList.add("vp-email-capture-invisible"), i.classList.remove("vp-email-capture-confirm-hidden"), window.requestAnimationFrame((function() { window.requestAnimationFrame((function() { i.classList.add("in"), setTimeout(a, 2250) })) }))
                            }()) : c(e.status)
                        }(i, u)
                    }, u.onerror = function(t) { r(t) }, u.send(o)
                }(i, 0, c)
        }
        var c = {get events() { return e },
            getData: function() {
                var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    e = t.config.embed.email || {},
                    r = i.custom_logo || e.custom_logo;
                if (r) var o = mf({ width: 150, height: 75, baseUrl: r, defaultExtension: ".png" });
                return n.template = hd.render("email_capture", { allowSkip: i.allow_skip || e.allow_skip, customLogo: o, text: i.text || e.text || "", action: "https://".concat(t.config.player_url, "/video/").concat(t.config.video.id, "/submit-email"), confirmation: i.confirmation || e.confirmation || "Thanks! Your email was successfully submitted.", referrer: t.config.request.referrer, strings: { email: "Email address", fullName: "Name (optional)", nothanks: "No thanks", submit: "Submit", disclaimer: "Share your email with the owner of this video" } }), n.$d = ".js-email-capture-form-input", n.modal = !0, n.logo = !1, n.preventBackgroundClose = !0, n.noblur = i.noblur, n.nofocus = i.nofocus, n
            }
        };
        return Nh(n, ".vp-email-capture-form-button--cancel", (function() { a() })), Nh(n, ".vp-email-capture-form-button--submit", (function() { this.form.classList.add("vp-email-capture-form-submitted"), this.form.setAttribute("data-bubble", "yes"), u() })), rl(n).on("submit", ".vp-email-capture-form", (function() { return t.events.fire(Fc.jc), s(this), !1 })).on(["focus", "input"], ".vp-email-capture-form-input[type=email]", (function() { u({ showBubble: !1 }) })), c
    }

    function xv(t, n, i) {
        var e, r, o, u = i.querySelector(".vp-overlay-cell"),
            a = i.querySelector(".vp-overlay"),
            s = i.querySelector(".vp-overlay-icon-wrapper"),
            c = s.querySelector(".vp-overlay-icon"),
            f = i.querySelector(".vp-overlay-logo"),
            l = !1,
            d = null,
            h = null,
            v = new Ev(t, a),
            p = new Sv(t, a),
            m = !1,
            w = !1;

        function b() {
            var t = rc(i),
                n = rc(a),
                e = rc(f),
                r = n.bottom + (t.height - n.bottom) / 2;
            return t.height - r - e.height / 2 + "px"
        }

        function g() {
            var t = rc(i),
                n = rc(a),
                e = rc(s),
                r = t.height / 2,
                o = t.height - (t.bottom - n.bottom) / 2;
            return { top: r - e.height / 2 + "px", transform: "translateY(" + (o - r) + "px)" }
        }

        function y(n, e) {
            i.setAttribute("data-name", n), a.innerHTML = e.template, _s.iOS && mh.element && (t.events.fire(Fc.hc), mh.exit()), e.noblur || ec(o = document.activeElement), e.modal && (i.classList.add("modal"), i.setAttribute("data-modal", "true")), e.preventBackgroundClose && i.setAttribute("data-background-close", "false"), e.wrapperClass && i.classList.add(e.wrapperClass), e.icon.type && (e.logo && (f.classList.remove("hidden"), s.classList.add("cloaked"), window.requestAnimationFrame((function() { f.innerHTML = hd.render("logo"), f.style.bottom = b() }))), s.classList.remove("hidden"), c.innerHTML = e.icon.html, window.requestAnimationFrame((function() {
                var t = g();
                s.style.top = t.top, s.style[_s.transformProperty] = t.transform
            })), i.setAttribute("data-icon", e.icon.type), s.setAttribute("data-icon", e.icon.type), c.setAttribute("data-icon", e.icon.type), "private-unlocked" === n && c.classList.add("open")), i.classList.add("invisible"), i.classList.remove("hidden"), i.removeAttribute("hidden"), i.classList.add("in"), h = e, d = n, l = !0, t.events.fire(Fc.kc, n), t.element.classList.add("player-overlayVisible"), ["share", "hd-not-allowed"].indexOf(n) > -1 && lc(i), window.requestAnimationFrame((function() {
                i.classList.remove("invisible"), !e.nofocus && t.element.contains(document.activeElement) && function(t) {
                    if (t) {
                        var n = i.querySelector(t);
                        n && n.focus()
                    }
                }(e.$d), window.requestAnimationFrame((function() { a.classList.add("in"), u.classList.add("in") }))
            }))
        }

        function _() { a.classList.remove("in"), a.classList.add("out") }

        function k(n) {
            if ("true" !== i.getAttribute("data-modal") && l) {
                i.removeAttribute("data-background-close"), u.classList.remove("in"), u.classList.add("out"), _(), i.classList.remove("in"), i.classList.add("out"), clearTimeout(e), e = setTimeout(E, 200), (null == n ? void 0 : n.preventDefault) && n.preventDefault();
                var r = i.querySelector(".js-back");
                r && r.classList.add("cloaked"), v.destroy(), t.events.fire(Fc.Ec, d), t.element.classList.remove("player-overlayVisible"), l = !1, d = null, h = null, window.requestAnimationFrame((function() {
                    o && (function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document.activeElement,
                            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                        try { t.focus() } catch (t) { n && n(t) }
                    }(o), o = null)
                }))
            }
        }

        function E() { i.setAttribute("hidden", ""), i.removeAttribute("data-name"), i.removeAttribute("data-icon"), i.classList.add("hidden"), i.classList.remove("out"), i.classList.remove("embed-active"), i.classList.remove("modal"), i.classList.remove("embed-only"), u.classList.remove("out"), u.classList.remove("in"), s.removeAttribute("data-icon"), s.classList.add("hidden"), s.classList.remove("animate"), c.removeAttribute("data-icon"), c.innerHTML = "", f.classList.add("hidden"), a.classList.remove("out"), a.innerHTML = "", t.events.fire(Fc.Tc) }

        function T() { i.setAttribute("data-modal", "false") }

        function S(t) {
            if ("yes" === t.form.getAttribute("data-bubble")) {
                t.form.setAttribute("data-bubble", "no");
                var n = i.querySelector(".vp-validation-bubble");
                n.querySelector(".vp-validation-bubble-message").innerHTML = t.validationMessage || "There is an error with this input.";
                var e = rc(t),
                    r = rc(t.form);
                n.style.left = e.left - r.left + "px", n.style.top = e.height + 1 + "px", n.classList.remove("hidden"), t.focus(), window.requestAnimationFrame((function() { n.classList.add("vp-validation-bubble-animate") })), x()
            }
        }

        function x(t) {
            var n = i.querySelector(".vp-validation-bubble");
            if (n) {
                if (t) return clearTimeout(r), void n.classList.remove("vp-validation-bubble-animate");
                clearTimeout(r), r = setTimeout((function() { n.classList.remove("vp-validation-bubble-animate") }), 5e3)
            }
        }

        function M(t) { var n = i.querySelector("input[type=password]"); return n.form.classList.contains("submitted") ? (n.setAttribute("aria-invalid", "false"), n.setCustomValidity(""), n.checkValidity && !n.checkValidity() ? (n.setAttribute("aria-invalid", "true"), n.validity.valueMissing && n.setCustomValidity("Please enter the password."), t || S(n), !1) : (x(!0), !0)) : null }

        function A() { C(), s.classList.remove("cloaked"), s.classList.add("animate"), window.requestAnimationFrame((function() { s.style[_s.transformProperty] = "translateY(-10px)" })), T(), _() }

        function C() { f.classList.add("animate") }

        function R() { c.classList.add("open") }

        function O() { c.classList.add("pulled-back") }

        function I(n) { return n.icon = { type: "lock", html: hd.render("icon_lock") }, n.$d = ".js-login", n.modal = !0, n.logo = !0, n.template = hd.render("private_locked", { action: "https://".concat(t.config.vimeo_url, "/log_in"), strings: { title: "Private Video", subtitle: "Log in to watch (if you have permission)", logIn: "Log in" } }), n }

        function j(n) { return n.icon = { type: "lock", html: hd.render("icon_lock") }, n.template = hd.render("password", { action: "https://".concat(t.config.player_url, "/video/").concat(t.config.video.id, "/check-password?referrer=").concat(t.config.request.referrer), strings: { title: "Password Required", subtitle: "If you’ve got it, enter it below.", password: "Password", watch: "Watch Video" } }), n.$d = ".js-password", n.modal = !0, n.logo = !!t.config.embed.settings.logo, n }

        function D(t) { return t.icon = { type: "lock", html: hd.render("icon_lock") }, t.template = hd.render("private_unlocked", { strings: { title: "Private Video", subtitle: "You are logged in and have permission to watch (congrats).", watch: "Watch Video" } }), t.$d = ".js-watch", t }

        function L(t, n) { return t.template = hd.render("error", { title: n.title, message: n.message }), t.$d = ".js-close", t.modal = !!n.modal, t.logo = !!n.logo, n.icon && "lock" === n.icon && (t.icon = { type: "lock", html: hd.render("icon_lock") }), t }

        function P(n) { return n.template = hd.render("help", { onSite: t.config.embed.on_site, strings: { title: "Keyboard Shortcuts", volumeUp: "Volume up", volumeDown: "Volume down", scrubForward: "Scrub forward", scrubBackwards: "Scrub backwards", like: "Like", share: "Share", watchLater: "Watch Later", captions: "Toggle Captions", prefs: "Toggle Preferences Menu", fullscreen: "Toggle fullscreen", viewOnVimeo: "View on Vimeo" } }), n.$d = ".js-close", n }

        function N(n) {
            var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                e = i.redirectUrl,
                r = i.title,
                o = i.buttonText,
                u = i.ignoreText,
                a = i.bottomText,
                s = i.newWindow,
                c = vc(t.config.video.privacy, ["disable", "unlisted"]);
            return n.template = hd.render("app_redirect", { hideRedirectButton: c, redirectUrl: e, newWindow: s, strings: { title: r, buttonText: o, ignoreText: u, bottomText: a } }), n.modal = !1, n.logo = !1, n.preventBackgroundClose = !0, n
        }

        function F() {
            var n = t.config.embed.email || {};
            if (t.backbone) {
                var i = n.timecode || 0;
                m = t.backbone.currentTime > i
            }
            n && "before" === n.position && !m && V()
        }

        function V() { n.get("ui.overlay.isEmailCaptureVisible") ? t.events.fire(Mc._showOverlay, "email-capture") : w = !0 }
        return t.events.on(Mc.Ka, (function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                t.unmakeModal && T(), k()
            })), t.events.on(Mc._showOverlay, (function(n) {
                var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    e = function() {
                        var t = { modal: !1, template: null, logo: !1, icon: { type: null, html: null } };
                        switch (n) {
                            case "share":
                                return y(n, v.getShareData(t, i)), void v.setup();
                            case "private-locked":
                                return void y(n, I(t));
                            case "password":
                                return void y(n, j(t));
                            case "private-unlocked":
                                return void y(n, D(t));
                            case "error":
                                return void y(n, L(t, i));
                            case "help":
                                return void y(n, P(t));
                            case "email-capture":
                                return void y(n, p.getData(t, i));
                            case "app-redirect":
                                return void y(n, N(t, i))
                        }
                    };
                if (l && !i.nohide) return "share" !== d && "help" !== d && "hd-not-allowed" !== d || d !== n ? (t.events.once(Fc.Tc, e), T(), void k()) : void k();
                e()
            })), rl(i).on("input", "input", (function() { this.form.classList.add("interacted") })).on(["focus", "blur"], "input", (function() { x(!0) })).on("transitionend", ".vp-validation-bubble", (function(t) { "opacity" === t.propertyName && "0" === window.getComputedStyle(this, "").opacity && this.classList.add("hidden") })), t.events.on([Fc.Sc, bi.PLAY], k), t.events.on(Fc.nf, (function() { "private-locked" === d && (T(), k()) })), t.events.on(Fc.Qc, (function() { "share" === d && (h = v.getShareData({ modal: !1, template: null, logo: !1, icon: { type: null, html: null } }), a.innerHTML = h.template, v.setup()) })), rl(window).on("resize", (function() {
                if (l) {
                    f.style.bottom = b();
                    var t = g();
                    s.style.top = t.top, s.style[_s.transformProperty] = t.transform
                }
            })), rl(i).on("transitionend", ".vp-overlay-logo", (function(t) { "opacity" === t.propertyName && this.classList.contains("animate") && (f.classList.add("hidden"), f.classList.remove("animate")) })), rl(i).on("transitionend", ".vp-overlay-icon-wrapper", (function(t) { t.propertyName.indexOf("transform") > -1 && ("" === this.style[_s.transformProperty] ? (this.classList.remove("centered"), "lock" !== this.getAttribute("data-icon") || c.classList.contains("open") || c.querySelector("canvas") ? O() : setTimeout(R, 100)) : "translateY(-10px)" === this.style[_s.transformProperty] && (s.classList.add("centered"), s.style[_s.transformProperty] = "")) })), rl(i).on("transitionend", ".vp-overlay-icon", (function(t) { t.propertyName.indexOf("transform") > -1 && (this.classList.contains("out") ? (T(), k()) : this.classList.contains("pulled-back") ? (c.classList.add("out"), c.classList.remove("pulled-back")) : this.classList.contains("open") && O()) })), n.watch("ui.overlay.isEmailCaptureVisible", (function(n) {!n && l && "email-capture" === d ? (w = l, T(), k()) : n && w && (w = !1, t.events.fire(Mc._showOverlay, "email-capture")) })), t.events.on(Fc.ue, F), t.events.on(Fc.Qc, F), t.events.on(bi.TIME_UPDATE, (function(n) {
                var i = n.currentTime,
                    e = void 0 === i ? 0 : i,
                    r = t.config.embed.email || {};
                r && "during" === r.position && (e < r.timecode && (m = !1), e >= r.timecode && !m && (m = !0, V()))
            })), t.events.on(Fc.Vc, (function() { V() })), p.events.on(Fc.xf, (function() { t.events.fire(Fc.xf), T(), k() })), v.events.on(Fc.Pc, (function() { t.config.embed.settings.share.embed_only || (i.querySelector(".js-back").classList.remove("cloaked"), i.classList.add("embed-active")) })).on(Fc.Lc, (function() { i.classList.remove("embed-active") })), Nh(i, ".js-back", (function() { return v.showShareView(), !1 })), v.events.on(Fc.Nc, (function() { i.querySelector(".js-back").classList.add("cloaked") })), _s.stereoscopic && (t.events.on(Fc.Uc, (function() { t.events.fire(Mc._showOverlay, "app-redirect", { redirectUrl: t.doNotTrackEnabled ? t.config.video.share_url : $f(t.config.video.id, "player-spatial-redirect"), title: "Headset viewing isn’t currently supported in your mobile browser.", buttonText: "Watch in the Vimeo app", ignoreText: null, bottomText: null, newWindow: !t.config.embed.on_site }) })), rl(a).on("click", ".app-redirect-ignore", (function() { k() })), rl(a).on("click", "[data-new-window]", (function(t) { return window.open(document.querySelector(".app-redirect-button").getAttribute("href")), !1 }))), rl(a).on("click", ".popup", (function() { return t.events.fire(Mc.Ya, "login-private-locked"), !1 })), rl(a).on("click", ".password input[type=submit]", (function() { this.form.classList.add("submitted"), this.form.setAttribute("data-bubble", "yes"), M(!0) })).on("submit", ".password form", (function() {
                return function(n) {
                    if (!M()) return !1;
                    var e = n.querySelector("input[type=password]"),
                        r = n.querySelector("input[type=submit]");

                    function o(t) { r.classList.remove("loading"), e.setCustomValidity("Uh oh. There was a problem. Please try again."), e.setAttribute("aria-invalid", "true"), S(e) }
                    r.classList.add("loading"),
                        function(t, n, e) {
                            lc(i);
                            var r = U(t.querySelectorAll("input")).map((function(t) { return t.name ? encodeURIComponent(t.name) + "=" + encodeURIComponent(window.btoa(function(t) { return encodeURIComponent(t).replace(/%([0-9A-F]{2})/g, (function(t, n) { return String.fromCharCode("0x" + n) })) }(t.value))) : encodeURIComponent(t.value) })).join("&"),
                                o = new XMLHttpRequest;
                            o.open(t.method, t.action + window.location.search, !0), o.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), o.withCredentials = !0, o.timeout = 3e3, o.onload = function() {
                                var t;
                                try { t = JSON.parse(o.responseText) } catch (t) {}
                                n(t, o)
                            }, o.onerror = function(t) { e(t) }, o.send(r)
                        }(n, (function(n, i) {
                            if (!1 !== n) {
                                if (t.events.fire(Fc.tf, n), "icon-hidden" === window.getComputedStyle(u, ":after").content) return T(), void k();
                                A()
                            } else o(i.status)
                        }), o)
                }(this), !1
            })).on(["focus", "input"], [".password input[type=email]", ".password input[type=password]"], (function() { M() })), Nh(a, ".unlocked button", (function() { 0 === rc(c).width ? (C(), T(), k()) : A(), _s.iPad || _s.iPhone || t.events.once(Fc.Tc, (function() { t.events.fire(Fc.Bs) })) })),
            function() {
                var n;
                t.events.on(Fc.ks, (function(i) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { modal: !0, final: !0 };
                    if (!1 !== e.final) {
                        n = i;
                        var r = { modal: !1, template: null, logo: !1, icon: { type: null, html: null } };
                        if (r.modal = e.modal, r.template = hd.render("error", { title: e.title, message: e.message }), r.$d = ".js-close", l) return k(), void t.events.once(Fc.Tc, (function() { return y(i, r) }));
                        y(i, r)
                    }
                })), rl(a).on("click", ".error", (function(i) { t.events.fire(Fc.bf, i.target.href, n) }))
            }(), t.events.on(Fc.Qc, (function() { window.requestAnimationFrame((function() { T(), k() })) })), Nh(i, ".js-close", (function() { t.events.fire(Fc.Sc) })), rl(i).on(["click", "touchend"], [".vp-overlay-content", ".js-share", ".vp-overlay-logo"], (function(t) { t.stopPropagation() })).on(["click", "touchend"], [".vp-overlay-cell", "nav"], (function() { return "false" === i.getAttribute("data-background-close") || (t.events.fire(Fc.Sc), !1) })), t.events.on(Mc.fs, (function() { i.classList.add("hidden") })), t.events.on(Fc.ff, (function() { i.classList.contains("in") && i.classList.remove("hidden") })), t.events.fire(Fc.If), {}
    }
    var Mv = [".vp-title a"],
        Av = [".vp-title a:hover"],
        Cv = ["a", ".button-link", ".vp-overlay-wrapper .footnote.share a:hover", ".vp-title h1", ".vp-title span.user", ".menu li:hover", ".menu li.active", ".vp-outro-link:hover", ".vp-outro-videosTitle a:hover", "li.vp-panel-item:hover", "li.vp-panel-item-on", ".vp-share-footnote a:hover", ".card-link span", ".vp-panel-collapsible .vp-panel-button:hover"],
        Rv = ["a:hover", ".button-link:hover"],
        Ov = [".vp-overlay-wrapper .close:hover .fill", ".vp-overlay-wrapper .back:hover .fill", ".stats-debug-close:hover .fill", ".stats-debug-copy:hover", ".card-link:hover .fill"],
        Iv = [".play-bar .on .fill", ".play-bar a:hover .fill", ".play-bar button:not(.toggle):hover .fill", ".tiny-bars .fill", ".vp-sidedock .on .fill", ".controls-outro a:hover .fill", ".card-link .fill", ".vp-panel-collapsible .vp-panel-button:hover .fill"],
        jv = [".vp-controls .play-bar .vp-cast-button"],
        Dv = [".vp-sidedock .on:hover .fill"],
        Lv = [".play-bar .on .stroke", ".vp-sidedock .on .stroke"],
        Pv = [".vp-sidedock .on:hover .stroke"],
        Nv = [".vp-sidedock button:hover", ".vp-sidedock button.selected", "&.touch-support .vp-sidedock button:active", ".vp-controls .play:hover", ".vp-controls .play-bar .played", "&.no-playbar .play-bar button:not(.toggle):hover", ".vp-controls.tiny .play-bar button:not(.toggle):hover", ".vp-controls .volume div", ".vp-overlay .buttons li", ".vp-overlay .vp-overlay-content button", '.vp-overlay .vp-overlay-content input[type="submit"]', '.vp-overlay .vp-overlay-content a[role="button"]', "li.vp-panel-item-on:before", ".vp-controls .replay:hover", ".vp-share-buttons li", "button.vp-share-embedCopy", ".vp-outro-button", "a.vp-outro-vodButton", ".vp-email-capture-form-button--submit", ".vp-email-capture-checkIconWrapper", ".chapter-marker", ".vp-chapters-active-indicator"],
        Fv = ["li.vp-panel-item-on:before"],
        Uv = [".vp-overlay .vp-overlay-content button", '.vp-overlay .vp-overlay-content input[type="submit"]', '.vp-overlay .vp-overlay-content a[role="button"]', ".vp-sidedock button:hover", ".vp-sidedock button.selected", ".vp-sidedock button:hover .vod-label", ".vp-sidedock button.selected .vod-label", ".play:hover", ".vp-share-footnote--embed a", ".vp-outro-button", ".vp-outro-button:hover", ".vp-outro-wrapper .vp-outro-link:hover", "button.vp-share-embedCopy", ".vp-outro-vodWrapper a.vp-outro-vodButton", ".vp-outro-vodWrapper a.vp-outro-vodButton:hover", "li.vp-panel-item:hover", "li.vp-panel-item-on", ".vp-panel-collapsible .vp-panel-button:hover", "input.vp-email-capture-form-button--submit"],
        Vv = [".vp-controls .play:hover .fill", ".vp-sidedock button:hover .fill", ".vp-sidedock button.selected .fill", ".play-bar a:hover .fill", ".play-bar button:not(.toggle):hover .fill", "&.no-playbar .play-bar button:not(.toggle):hover .fill", ".vp-controls.tiny .play-bar button:not(.toggle):hover .fill", ".vp-sidedock .on .fill", '.vp-share-wrapper a[role="button"] .fill', ".vp-outro-vodButton .fill", ".vp-email-capture-checkIconWrapper .fill", ".vp-panel-collapsible .vp-panel-button:hover .fill"],
        Bv = [".vp-controls .play:hover .stroke", ".vp-sidedock button:hover .stroke", ".vp-sidedock button.selected .stroke", ".vp-sidedock .on .stroke"],
        Hv = ["li.vp-panel-item-on:before"],
        qv = ["li.vp-panel-item-on:before"],
        Wv = ['.vp-overlay-wrapper .vp-overlay a[role="button"]', ".vp-sidedock button:hover", ".vp-sidedock button.selected", ".play:hover", "button.vp-share-embedCopy", ".vp-outro-button", ".vp-outro-button:hover", ".vp-outro-vodWrapper a.vp-outro-vodButton", ".vp-outro-vodWrapper a.vp-outro-vodButton:hover", "input.vp-email-capture-form-button--submit"],
        zv = [".vp-controls .play:hover .fill", ".vp-sidedock button:hover .fill", ".vp-sidedock button.selected .fill", ".vp-controls .play-bar .fullscreen.tiny:hover .fill", ".vp-share-button .fill", ".vp-outro-vodButton .fill"],
        Gv = [".vp-sidedock button:hover .stroke", ".vp-sidedock button.selected .stroke"],
        $v = ["li.vp-panel-item-on:before"],
        Kv = ['.vp-overlay .vp-overlay-content input[type="submit"]:active', '.vp-overlay a[role="button"]:active', ".vp-sidedock button:active", ".vp-outro-vodWrapper a.vp-outro-vodButton:active"];

    function Yv(t, n) {
        var i = n.uuid,
            e = n.id,
            r = n.isMobileDevice,
            o = null;

        function u(t, n) {
            var o = ".player-".concat(i, " "),
                u = o + t.join("," + o);
            if (n) {
                var a = "".concat(e, " ");
                u += ",".concat(a).concat(t.join("," + a))
            }
            return r && (u = u.replace(/:hover/g, ":active")), u.replace(/ &/g, "")
        }
        return t.events.on(Mc.ts, (function(n) {
            var e;
            try { e = new gh(n) } catch (t) { e = new gh("00adef") }
            var r = function(t) {
                o ? function() { for (; o.cssRules.length > 0;) o.deleteRule(0) }() : function() {
                    var t = document.createElement("style");
                    t.setAttribute("data-player", i), document.querySelector("head").appendChild(t), o = t.sheet
                }();
                var n = t.complement,
                    e = new gh(23, 35, 34, .75),
                    r = new gh(0, 0, 0, .15).overlayOn(t);
                e.contrast(n).ratio < 3 && n.lighten(5, 3, e);
                var a, s = t.lightness < 40 ? t.clone().lighten(15, 3, t) : t.clone().darken(15, 3, t);
                return nc(u(Mv, !0), "color:" + t.hex + " !important", o), nc(u(Av, !0), "color:" + n.hex + " !important", o), nc(u(Cv), "color:" + t.hex, o), nc(u(Iv), "fill:" + t.hex, o), nc(u(jv), "--connected-color:" + t.hex, o), nc(u(Lv), "stroke:" + t.hex, o), nc(u(Nv), "background-color:" + t.hex, o), nc(u(Fv), "border-color:" + t.hex, o), nc(u(Rv), "color:" + n.hex, o), nc(u(Ov), "fill:" + n.hex, o), nc(u(Dv), "fill:" + s.hex, o), nc(u(Pv), "stroke:" + s.hex, o), nc(u($v), "border-color:" + r.hex, o), nc(u(Kv), "background-color:" + r.hex, o), t.luminance > .95 && (n = t.clone().darken(15, 3, t), nc(u(Uv), "color:" + n.hex, o), nc(u(Vv), "fill:" + n.hex, o), nc(u(Bv), "stroke:" + n.hex, o), nc(u(Hv), "background-color:" + n.hex, o), nc(u(qv), "border-color:" + n.hex, o), s = n.clone().darken(15, 3, n), nc(u(Dv), "fill:" + s.hex, o), nc(u(Pv), "stroke:" + s.hex, o)), t.yiq > 175 && t.luminance < .95 && (a = s.clone().darken(15, 3, s), nc(u(Dv), "fill:" + a.hex, o), nc(u(Pv), "stroke:" + a.hex, o), nc(u(Wv), "color:" + s.hex, o), nc(u(zv), "fill:" + s.hex, o), nc(u(Gv), "stroke:" + s.hex, o)), { main: t.hex, selected: s.hex, sidedockHover: a ? s.hex : t.luminance > .95 ? n.hex : gh.white.hex, sidedockSelected: t.luminance > .95 ? n.hex : t.hex, sidedockSelectedHover: a ? a.hex : s.hex }
            }(e);
            t.config.Kd = r, t.config.embed.color = r.main.replace("#", ""), t.events.fire(Fc.Zc, t.config.embed.color)
        })), t.events.fire(Mc.ts, t.config.embed.color), {}
    }

    function Jv(t) {
        var n = null;
        return t.events.on(Mc.Ya, (function(i, e) {
            var r = "https://".concat(t.config.player_url),
                o = "".concat(r, "/video/").concat(t.config.video.id);
            switch (i) {
                case "login-like":
                    n = sc("".concat(o, "/login/like"), "login", { width: 670, height: 545 }), t.events.fire(Fc.Oc, i);
                    break;
                case "login-watch-later":
                    n = sc("".concat(o, "/login/watch-later"), "login", { width: 670, height: 545 }), t.events.fire(Fc.Oc, i);
                    break;
                case "login-private-locked":
                    n = sc("".concat(o, "/login/private"), "login", { width: 670, height: 545 }), t.events.fire(Fc.Oc, i);
                    break;
                case "purchase":
                    var u = "".concat(r, "/video/").concat(t.config.video.vod.feature_id || t.config.video.id, "/purchase/vod");
                    (null == e ? void 0 : e.productId) && (u += "/".concat(e.productId)), u += "?referrer=".concat(encodeURIComponent(t.config.request.referrer)), n = sc(u, "purchase", { width: 790, height: 670 }), t.events.fire(Fc.Oc, i)
            }
        })), window.closePopup = function(i) {
            if (n) {
                try { n.close(), t.events.fire(Fc.Dc, i) } catch (t) {}
                n = null
            }
        }, t.config.embed.on_site || (window.confirmPurchase = function(n, i, e) { i ? t.loadVideo(n) : e && t.events.fire(Fc.Bs) }), t.config.embed.on_site || (window.confirmLoginAction = function(n, i) { t.events.fire(Fc.Kc, i) }), {}
    }

    function Xv(t, n, i, e) { var r = e[n]; return r ? (r = Zv(r = tp(t, r), i, e.prices), e.expires_in_duration_str && (r = r.replace("{TIME}", e.expires_in_duration_str)), e.available_on_formatted && (r = r.replace("{DATE}", e.available_on_formatted)), r) : null }

    function Zv(t, n, i) { var e = i.USD; return n in i && (e = i[n]), -1 !== t.indexOf("${price}") ? t.replace("${price}", e) : -1 !== t.indexOf("{PRICE}") ? t.replace("{PRICE}", e) : t }

    function Qv(t, n) { return !t || 0 === t.length || -1 !== t.indexOf(n) }

    function tp(t, n) { return void 0 !== t && void 0 !== t[n] ? t[n] : n }
    var np = Object.freeze({ __proto__: null, formatVodLabel: Xv, getDisplayPrice: Zv, isAvailableInCountry: Qv, translateFromRequest: tp });

    function ip(t, n) {
        var i, e, r, o, u, a, s, c, f, l = !1,
            d = !1,
            h = !1,
            v = !1,
            p = !1,
            m = !1,
            w = !1,
            b = !1,
            g = [],
            y = [],
            _ = null,
            k = !1,
            E = !1,
            T = null,
            S = t.config.embed.autoplay && t.config.request.flags.autohide_controls;

        function x() { return v || w || b }

        function M() { l && (E || (d && k || x() || S) && (h || (!p && !m || x()) && (l = !1, t.events.fire(Fc.tc, l), (T || n).classList.add("invisible")))) }

        function A() {
            if (!l && !x()) {
                var i = T || n;
                i.classList.add("invisible"), i.classList.remove("hidden"), i.removeAttribute("hidden"), n.classList.remove("hidden"), n.removeAttribute("hidden"), n.classList.contains("vod") && n.classList.remove("vod"), setTimeout((function() { l = !0, t.events.fire(Fc.tc, l), i.classList.remove("invisible") }), 0)
            }
        }

        function C(n, i, e) {
            var r = "data-label-" + e,
                o = "add" !== e || t.config.user.logged_in ? r : "data-label-add-logged-out";
            n.setAttribute("aria-label", n.getAttribute(o)), i.classList.add("hidden"), i.setAttribute("hidden", ""), i.firstChild.innerHTML = n.getAttribute(r)
        }

        function R() {
            var t = "BUTTON" === this.tagName ? this : this.querySelector("button"),
                n = g.indexOf(t);
            n >= 0 && y[n] && (_ && (window.cancelAnimationFrame(_), _ = null), y[n].classList.add("invisible"))
        }

        function O() {
            if (i) {
                var t = i.parentElement;
                T.insertBefore(t, T.firstChild)
            }
        }

        function I() {
            var d;
            if (1 === t.config.view || 3 === t.config.view) {
                var h = t.config.embed.settings,
                    v = t.config.video.vod && "purchase_options" in t.config.video.vod && t.config.video.vod.purchase_options.length,
                    p = v && t.config.video.vod.is_coming_soon,
                    m = "ondemand.main" === t.config.embed.context || "Vimeo\\Controller\\OnDemandController.main" === t.config.embed.context,
                    w = t.config.video.vod && t.config.user.purchased ? 1 : 0,
                    b = v && h.vod && Qv(t.config.video.vod.countries, t.config.request.country);
                b && p && m && (b = !1);
                var _ = v && t.config.video.vod.purchase_options[0],
                    k = null;
                _ && (k = Xv(t.config.request.dynamic_translation_map, "label_string", t.config.request.currency, _)), n.innerHTML = hd.render("sidedock", { loggedIn: !!t.config.user.logged_in, vodButton: b, purchased: w, vodPurchaseInfo: _, vodDisplayLabel: k, likeButton: h.like, liked: t.config.user.liked, watchLaterButton: h.watch_later, addedToWatchLater: t.config.user.watch_later, collectionsButton: h.collections, shareButton: h.share, strings: { like: "Like", likeLoggedOut: "Like (this opens in a new window)", unlike: "Unlike", watchLaterAdd: "Add to Watch Later", watchLaterAddLoggedOut: "Add to Watch Later (this opens in a new window)", watchLaterRemove: "Remove from Watch Later", collections: "Add to collections", share: (null == (d = h.share) ? void 0 : d.embed_only) ? "Embed" : "Share" } }), i = n.querySelector(".vod-button"), b && (T = n.querySelector(".sidedock-inner"), w && O());
                var E = T || n;
                v && b && !t.config.embed.settings.instant_sidedock ? n.classList.add("vod") : _s.touch && (l = !0, t.events.fire(Fc.tc, l), E.classList.remove("hidden"), E.removeAttribute("hidden"), E.classList.remove("invisible")), e = n.querySelector(".like-button"), r = n.querySelector(".like-label"), o = n.querySelector(".watch-later-button"), u = n.querySelector(".watch-later-label"), a = n.querySelector(".collections-button"), s = n.querySelector(".collections-label"), c = n.querySelector(".share-button"), f = n.querySelector(".share-label"), g = [i, e, o, c, a], y = [null, r, u, f, s]
            }
        }
        return I(),
            function() {
                var n = t.config.embed.settings.instant_sidedock,
                    i = t.config.video.vod,
                    e = i && "purchase_options" in i && i.purchase_options.length,
                    r = i && Qv(t.config.video.vod.countries, t.config.request.country);
                (n || e && r) && (S || A())
            }(), Nh(n, ".vod-button", (function() {
                var n = i.getAttribute("data-product-id");
                t.events.fire(Fc.gc, n)
            }), R), t.events.on(Fc.cf, (function() { O(), n.classList.add("sidedock-outro"), "share" === t.config.embed.outro && (t.config.embed.settings.share = 0, I()) })), t.events.on(Fc.ff, (function() {
                ! function() {
                    if (i) {
                        var t = i.parentElement;
                        n.insertBefore(t, T)
                    }
                }(), n.classList.remove("sidedock-outro"), "share" === t.config.embed.outro && (t.config.embed.settings.share = 1, I())
            })), Nh(n, ".like-button", (function() { t.events.fire(Fc.pc) }), R), t.events.on(Fc.Wc, (function() { e && (e.classList.add("on"), C(e, r, "remove")) })), t.events.on(Fc.zc, (function() { e && (e.classList.remove("on"), C(e, r, "add")) })), Nh(n, ".watch-later-button", (function() { t.events.fire(Fc.mc) }), R), t.events.on(Fc.Gc, (function() { o && (o.classList.add("on"), C(o, u, "remove")) })), t.events.on(Fc.$c, (function() { o && (o.classList.remove("on"), C(o, u, "add")) })), Nh(n, ".collections-button", (function() { t.events.fire(Fc.yc) }), R), Nh(n, ".share-button", (function() { return t.events.fire(t.config.embed.settings.share.embed_only ? Fc.bc : Fc.wc), !1 }), R), rl(n).on("blur", "button", R).on("mouseleave", ".box", R).on(["focus", "pointerdown", "touchstart", "mouseenter"], "button", (function() {
                var t = g.indexOf(this);
                y.forEach((function(n, i) { i !== t && n && n.classList.add("invisible") })), t >= 0 && y[t] && (y[t].classList.add("invisible"), y[t].classList.remove("hidden"), y[t].removeAttribute("hidden", ""), _ = window.requestAnimationFrame((function() { _ = window.requestAnimationFrame((function() { y[t].classList.remove("invisible"), y[t].classList.add("visible") })) })))
            })).on("transitionend", "label", (function(t) { "opacity" === t.propertyName && t.target.classList.contains("invisible") && (t.target.classList.add("hidden"), t.target.setAttribute("hidden", ""), t.target.classList.remove("visible")) })), Nh(n, "label", (function() {
                var t = y.indexOf(this);
                t >= 0 && g[t].click()
            })), t.events.on([Fc.Bc, Fc.qc, Fc.Ns], M).on(Fc.Hc, A).on(Fc.Os, (function() { k = !0, M() })).on(bi.PLAY, (function() { d = !0 })), rl(n).on(["pointerenter", "pointerleave", "mouseenter", "mouseleave"], (function(t) { "pointerType" in t ? "mouse" !== t.pointerType && t.pointerType !== t.MSPOINTER_TYPE_MOUSE || (h = "pointerenter" === t.type || "MSPointerEnter" === t.type) : h = "mouseover" === t.type })), rl(n).on("transitionend", (function(t) { var e = T || n; "opacity" === t.propertyName && e.classList.contains("invisible") && (e.classList.add("hidden"), e.setAttribute("hidden", ""), i && e.contains(i) && (n.classList.add("hidden"), n.setAttribute("hidden", ""))) })), t.events.on(Fc.lc, (function() { h = !1, M() })).on(Fc.vc, (function(t) { t || (E = !0) })), t.events.on([Fc.Vf], (function() { p = !0, A() })).on([Fc.Bf], (function() { p = !1 })), t.events.on(Yo, (function() { m = !0, A() })).on(Jo, (function() { m = !1 })), t.events.on(Fc.kc, (function() { v = !0, h = !1, M() })).on(Fc.Ec, (function() { v = !1, A() })), t.events.on(Fc.Nf, (function(t) { w = t, t && M() })), t.events.on([Fc.sc, Fc.nc], (function(t, n) { n.isCentered() && n.isVisible() && (b = !0, h = !1, M()), n.isCentered() && n.isVisible() || (b = !1, A()) })), t.events.on(Fc.Qc, (function() { I() })), t.events.on(Mc.Ja, (function() { h = !1, k = !1, M(), d = !1, h = !1, E = !1 })), t.events.fire(Fc.Cf), {}
    }

    function ep(t, n) {
        var i = !0,
            e = !1,
            r = !1,
            o = !1,
            u = !1,
            a = !1,
            s = !1,
            c = !0,
            f = !1,
            l = !1,
            d = !1;

        function h() { i = !1, n.classList.add("invisible") }

        function v() { n.classList.remove("hidden"), n.removeAttribute("hidden"), setTimeout((function() { i = !0, n.classList.remove("invisible") }), 0) }

        function p() { return r || o || u }

        function m() { i && (p() || f ? h() : a || s && (c && e || h())) }

        function w() {
            var n;
            i || (!a || p() ? c && !l && (f || (s || p() ? (null == (n = t.config.embed) ? void 0 : n.settings.info_on_pause) && c && !p() && v() : v())) : v())
        }

        function b() {
            if (1 === t.config.view || 3 === t.config.view) {
                var i = !!t.config.embed.settings.byline,
                    e = null !== t.config.video.owner.url,
                    r = t.config.video.owner.url,
                    o = 0 === t.config.embed.on_site,
                    u = t.config.embed.settings.spatial_label,
                    a = t.config.request.file_codecs || t.config.video.file_codecs,
                    s = void 0 !== a,
                    c = { ClickTargets: Sc, linkToOwner: e, ownerLink: r, targetBlank: o, showPortrait: !!t.config.embed.settings.portrait, portraitImg: t.config.video.owner[_s.devicePixelRatio > 1 ? "img_2x" : "img"], showByline: i, portraitAlt: "Link to video owner's profile", showTitle: !!t.config.embed.settings.title, showTitleLink: null !== t.config.video.url, titleLink: t.config.video.url, title: t.config.video.title, is360: t.config.video.spatial && u, hasHDR: s && a.hevc.hdr.length > 0, strings: {} };
                if (t.config.embed.settings.byline) {
                    var f = t.config.embed.settings.byline_badge,
                        l = "";
                    (null == f ? void 0 : f.type) && (l = hd.render("title_byline_badge", { targetBlank: o, cssClass: f.type, link: f.url || !1, displayBadge: !t.config.video.live_event })), c.strings.byline = "from " + hd.render("title_owner_byline", { ClickTargets: Sc, linkToOwner: e, ownerLink: r, targetBlank: o, owner: t.config.video.owner.name }) + l
                }
                t.config.embed.settings.badge && (c.showPortrait = !1), t.config.embed.autoplay && (n.classList.add("hidden"), n.setAttribute("hidden", "")), n.innerHTML = hd.render("title", c)
            }
        }
        return b(), t.events.on([Fc.Bc, Fc.qc], m).on(Fc.Hc, w).on(Bo, (function() { s = !0, c = !1, m() })).on([Fc.Bs, bi.PLAY], (function() { c = !1, l = !1, m() })).on(Fc.He, (function(t, n) { n || (c = !0, w()) })).on(Fc.As, (function() { f = !0, m() })).on(Fc.Ys, (function() { d = c, l = !0 })).on(Fc.Js, (function() { d && (l = !1) })).on(Fc.lc, (function() { m() })).on(Fc.vc, (function(t) { t || w() })), rl(n).on(["pointerenter", "pointerleave", "mouseenter", "mouseleave"], (function(t) { "pointerType" in t ? "mouse" !== t.pointerType && t.pointerType !== t.MSPOINTER_TYPE_MOUSE || (e = "pointerenter" === t.type || "MSPointerEnter" === t.type) : e = "mouseover" === t.type })), rl(n).on("transitionend", (function(t) { "opacity" === t.propertyName && n.classList.contains("invisible") && (n.classList.add("hidden"), n.setAttribute("hidden", "")) }), !1), t.events.on(Fc.As, (function(t) { m() })), t.events.on([Fc.Vf], (function() { a = !0, w() })).on([Fc.Bf], (function() { a = !1, m() })), t.events.on(Fc.kc, (function(t) { "not-supported" !== t && "private-unlocked" !== t && "help" !== t && (r = !0, e = !1, m()) })).on(Fc.Ec, (function() { r = !1, e = !1, setTimeout(w, 0) })), t.events.on(Fc.cf, (function(t) { o = !0, e = !1, m() })).on(Fc.ff, (function() { o = !1, e = !1, setTimeout(w, 0) })), t.events.on([Fc.sc, Fc.nc], (function(t, n) { n.isCentered() && n.isVisible() && (u = !0, e = !1, m()), n.isCentered() && n.isVisible() || (u = !1, e = !1, w()) })), t.events.on(Fc.Qc, (function() { b(), 3 === t.config.view && w() })), t.events.on(Mc.Ja, (function() { s = !1, c = !0, f = !1, l = !1, w() })), t.events.fire(Fc.Af), {}
    }

    function rp(t, n) {
        function i() { n.classList.remove("hidden"), n.removeAttribute("hidden"), n.classList.remove("invisible") }

        function e() { rl(n).on("transitionend", (function() { rl(n).off("transitionend"), n.classList.contains("invisible") && (n.classList.add("hidden"), n.setAttribute("hidden", "")) })), n.classList.add("invisible") }
        return function() {
            var r = t.config.embed.settings.badge;
            if (r) {
                var o = _s.devicePixelRatio > 1 ? "img_2x" : "img";
                _s.svg && r.svg && (o = "svg"), n.innerHTML = hd.render("badge", { showPortrait: !1, targetBlank: 0 === t.config.embed.on_site, badge: { link: r.link, img: r[o], margin: r.margin || !1, width: r.width, height: r.height, name: r.name, shadow: r.shadow || !1 } }), Nh(n, ".vp-badge", (function() { t.events.fire(Fc.cc, r.id) })), t.config.embed.autoplay ? e() : i()
            } else e()
        }(), { show: i, hide: e }
    }

    function op(t, n) {
        var i = t.events;

        function e(t) { t.preventDefault(), i.fire(Mc.$a, !1) }

        function r() { n.classList.add("invisible"), n.classList.remove("hidden"), n.removeAttribute("hidden"), setTimeout((function() { n.classList.remove("invisible") }), 0), i.once(Fc.Cs, o) }

        function o(t) { t > 0 && !n.classList.contains("invisible") && u() }

        function u() { rl(n).on("transitionend", a), n.classList.add("invisible") }

        function a() { rl(n).off("transitionend", a), n.classList.add("hidden"), n.setAttribute("hidden", "") }
        return function() {
            var t = { title: _s.touch ? "Tap to Unmute" : "Click to Unmute" };
            n.innerHTML = hd.render("unmute_button", t), Nh(n, e), Nh(n, ".vp-unmute-button", e), i.once(Fc.fc, r), i.on(nu.EVENT_ENDED, u)
        }(), {}
    }

    function up(t, n) {
        var i = null,
            e = !1;

        function r() { var r = n.querySelector(".vp-badge"); if (i = new rp(t, r), r.innerHTML) return 16 === t.config.embed.settings.badge.id ? (i.show(), void t.events.on(Fc.Qs, (function(t) { t ? i.show() : i.hide() }))) : void t.events.on([Fc.Bs, bi.PLAY], (function() { e && i.hide() })).on(Bo, (function() { e = !0, i.hide() })).on(Fc.As, i.hide).on(Fc.kc, (function(t) { "not-supported" !== t && "private-unlocked" !== t && "help" !== t && i.hide() })).on(Fc.Ec, (function() { e || i.show() })) }
        r(),
            function() {
                var i = n.querySelector(".vp-unmute");
                new op(t, i)
            }(), t.events.on(Fc.Qc, (function() { r() })), t.events.on(Mc.Ja, (function() { e = !1, r() }))
    }
    var ap = function() {
            function t(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    i = 6,
                    e = 76,
                    r = parseInt(e * _s.devicePixelRatio, 10),
                    o = parseFloat(n.timecode);
                if (isNaN(o)) throw new TypeError("Time must be a number.");
                if (o < 0) throw new TypeError("Time must be a positive number.");
                this.time = o, this.data = n, this.id = n.id, this.displayTime = n.display_time || i, n.url && (this.data.url = Xh(n.url)), n.image_url && (n.image = mf({ width: r, height: r, baseUrl: Xh(n.image_url), crop: !0 })), this.renderTemplate()
            }
            var n = t.prototype;
            return n.renderTemplate = function() {
                var t = this,
                    n = document.createElement("div");
                n.innerHTML = hd.render("card", this.data), this.element = n.children[0], this.data.image && wf(this.data.image).catch((function(n) { t.element.querySelector(".js-cardImageWrap").style.display = "none" }))
            }, n.isActive = function(t) { return t >= this.time && t < this.end }, H(t, [{ key: "end", get: function() { return this.time + this.displayTime } }]), t
        }(),
        sp = function() {
            function t() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function(t, n) { return t < n };
                this.Yd = {}, this.Jd = [], this.Xd = t
            }
            var n = t.prototype;
            return n.Zd = function(t) {
                var n = this.Jd.length;
                if (0 === n) this.Jd.push(t);
                else {
                    for (var i = 0; i < n; i++)
                        if (this.Xd(t, this.Jd[i])) { this.Jd[i - 1] !== t && this.Jd.splice(i, 0, t); break }
                    i === n && this.Jd[i - 1] !== t && this.Jd.splice(i, 0, t)
                }
            }, n.Qd = function(t, n, i, e) { if (e < i) return -1; var r = parseInt(i + (e - i) / 2, 10); return t[r] > n ? this.Qd(t, n, i, r - 1) : t[r] < n ? this.Qd(t, n, r + 1, e) : r }, n.delete = function(t) {
                var n = this.Qd(this.Jd, t, 0, this.Jd.length);
                if (-1 === n) throw new Error("key does not exist");
                this.Jd.splice(n, 1), delete this.Yd[t]
            }, n.set = function(t, n) { return this.Yd[t] = n, this.Zd(t), this }, n.get = function(t) { return this.Yd[t] }, n.keys = function() { return this.Jd.slice() }, n.values = function() { var t = this; return this.keys().map((function(n) { return t.Yd[n] })) }, n.forEach = function(t) { for (var n = this.Jd.length, i = 0; i < n && !1 !== t(this.Yd[this.Jd[i]], this.Jd[i], this); i++); }, H(t, [{ key: "size", get: function() { return this.Jd.length } }]), t
        }();

    function cp(t, n, i) {
        var e, r, o = i.querySelector(".vp-cards"),
            u = new sp,
            a = !1,
            s = function(t) { return function() { u.size > 0 && t.apply(void 0, arguments) } };

        function c() { v(), u.forEach((function(t, n) { t.element.parentNode.removeChild(t.element) })), u = new sp, Array.isArray(t.config.embed.cards) && t.config.embed.cards.length && (t.config.video.title && t.config.embed.settings.title && f(-1, { className: "card--contentInfo", timecode: 0, headline: t.config.video.title, teaser: t.config.embed.settings.byline ? t.config.video.owner.name : "", image: t.config.video.owner[_s.devicePixelRatio > 1 ? "img_2x" : "img"], id: "title-card" }), t.config.embed.cards.forEach((function(t) { f(t.timecode, t) }))) }

        function f(i, e) {
            var r = u.get(i),
                a = new ap(t, e);
            if (u.set(i, a), r) return o.replaceChild(a.element, r.element), a;
            var s = u.keys().indexOf(i);
            return o.insertBefore(a.element, o.children[s]), n.dispatch(function(t) { return { type: "CARDS_SET_SIZE", payload: t } }(u.size)), a
        }

        function l(n) { t.element.classList.toggle("player-cardsCarousel", n), t.element.classList.toggle("player-cardsCorner", !n), e.destroy(), n && e.setUp() }

        function d(n, i) { n && (i ? n.element.classList.add("card-animating") : n.element.classList.remove("card-animating"), n.element.classList.add("card-active"), rl(n.element.childNodes[1]).on("mouseover", (function() { a = !0 })), rl(n.element.childNodes[1]).on("mouseout", (function() { a = !1 })), e.show(n.element), t.events.fire(Fc.Ef, n.id, n.data)) }

        function h(t) { a || t.classList.remove("card-active") }

        function v() { U(i.querySelectorAll(".card-active")).forEach(h) }
        return e = new qh(o), n.watch("ui.cards.size", (function(n) { t.element.classList.toggle("player-withCards", n > 0) })), n.watch("ui.cards.isCarouselVisible", l), n.watch("ui.cards.isCardsThumbVisible", (function(t) { i.classList.toggle("cards-wrapper--withThumbnails", t) })), l(n.get("ui.cards.isCarouselVisible")), t.events.on(Fc.Qc, c), t.events.on(Mc._addCard, (function(t) {
            var n = f(t.timecode, t);
            v(), d(n)
        })), t.events.on(Mc._removeCard, (function(t) {
            v();
            var n = u.get(t.timecode).element;
            n.parentNode.removeChild(n), u.delete(t.timecode)
        })), e.on("slide", s((function(n) { var i = u.values()[n]; "title-card" !== i.id && t.events.fire(Fc.Ef, i.id, i.data), t.events.fire(Mc.ws, i.time) }))), e.on("tap", s((function(n) {
            var i = u.values()[n];
            i.data.url && "title-card" !== i.id && (t.events.fire(Fc.Tf, i.id, i.data), t.backbone.paused || t.events.fire(Fc.Vs), window.open(i.data.url))
        }))), t.events.on(bi.TIME_UPDATE, s((function(t) {
            var i = function(t) { var i = u.values().filter((function(n) { return n.isActive(t) })).slice(-1)[0]; if (i) return i; if (n.get("ui.cards.isCarouselVisible")) { var e = u.values().slice(-1)[0]; if (e && t > e.end) return e } return null }(t.currentTime);
            i !== r && (!i && a || (a = !1, v(), (r = i) && "title-card" === r.id ? n.get("ui.cards.isCarouselVisible") && d(r, !0) : d(r, !0)))
        }))), t.events.on(Fc.As, s(v)), Nh(document, ".player-cardsCorner .card", s((function(n) {
            n.preventDefault();
            var i = mc(n.target, o.children),
                e = u.values()[i];
            e.data.url && "title-card" !== e.id && (t.events.fire(Fc.Tf, e.id, e.data), t.backbone.paused || t.events.fire(Fc.Vs), window.open(e.data.url))
        }))), c(), {}
    }
    var fp = { 16: "shift", 27: "esc", 32: "space", 37: "left", 38: "up", 39: "right", 40: "down" };

    function lp(t, n, i) {
        var e, r = !!t.config.embed.on_site,
            o = i.querySelector(".volume"),
            u = !1,
            a = null,
            s = t.config.video.fps / 5,
            c = Math.max(s, .618 * t.config.video.duration),
            f = s,
            l = 0,
            d = !1,
            h = Ed(g, 80);

        function v() { return !r && (1 === t.config.view || 3 === t.config.view) }

        function p() { u && "help" === e && t.events.fire(Fc.Sc) }

        function m(t) { return "number" != typeof t.which && (t.which = t.keyCode), t }

        function w(t) { if ("keypress" === t.type) { var n = String.fromCharCode(t.which); return t.shiftKey || (n = n.toLowerCase()), n } return t.which in fp ? fp[t.which] : String.fromCharCode(t.which).toLowerCase() }

        function b(n) { if (t.config.embed.settings.background) return !0; var i = n.target || n.srcElement; return "INPUT" === i.tagName || "SELECT" === i.tagName || "TEXTAREA" === i.tagName || i.isContentEditable }

        function g(i, e) {
            if (!n.get(Pf)) {
                d || (e && !t.backbone.paused && t.events.fire(Fc.Vs), t.events.fire(Fc.Ys, !0, "keyboard"), d = !0), ! function(t) {
                    var n = t,
                        i = Math.ceil(s),
                        e = Math.ceil(c - s);
                    f = function(t, n, i, e) { return t /= 100, i * (--t * t * t + 1) + n }(n, i, e)
                }(l), 1 == ++l && (f = 5 * t.config.video.fps);
                var r = e ? 1 : f,
                    o = "right" === i ? r : -r;
                ! function(n) {
                    var i = n / t.config.video.fps;
                    t.events.fire(Mc.za, null, i)
                }(Math["right" === i ? "ceil" : "floor"](t.currentTime * t.config.video.fps) + o)
            }
        }

        function y(t) {
            var n = a.getTabindexItems(),
                i = n.indexOf(document.activeElement),
                e = "up" === t ? i - 1 : i + 1,
                r = null;
            return !(r = e >= n.length ? n[0] : e < 0 ? n[n.length - 1] : n[e]) || (r.focus(), !1)
        }

        function _() { if (a) return !0; if (n.get(Pf) && !n.get(Hf)) return !0; if (!document.activeElement || document.activeElement === document.body) { var i = t.backbone.paused ? Fc.Bs : Fc.Vs; return t.events.fire(i), p(), !1 } }

        function k() { return a ? (a.element.contains(document.activeElement) && a.button.focus(), a.hide(), !1) : u ? (t.events.fire(Fc.Sc), !1) : void 0 }

        function E() { return a ? !a.element.contains(document.activeElement) || y("up") : _s.spatialPlayback && t.config.video.spatial ? (t.backbone.getEffectByName("ThreeSixtyEffect").keyPress("up"), !1) : !(!t.config.embed.on_site || !document.activeElement || i.contains(document.activeElement)) || (p(), t.events.fire(Mc.Ga, .05, !1, !0), !1) }

        function T() { return a ? !a.element.contains(document.activeElement) || y("down") : _s.spatialPlayback && t.config.video.spatial ? (t.backbone.getEffectByName("ThreeSixtyEffect").keyPress("down"), !1) : !(!t.config.embed.on_site || !document.activeElement || i.contains(document.activeElement)) || (p(), t.events.fire(Mc.Ga, -.05, !1, !0), !1) }

        function S(n, i) {
            if (a) return !a.element.contains(document.activeElement) || y("left" === i ? "up" : "down");
            if (p(), _s.spatialPlayback && t.config.video.spatial) return t.backbone.getEffectByName("ThreeSixtyEffect").keyPress(i), !1;
            if (document.activeElement && document.activeElement === o) { var e = "left" === i ? -.05 : .05; return t.events.fire(Mc.Ga, e, !1, !0), !1 }
            n.shiftKey || 0 === l ? g(i, n.shiftKey) : h(i, n.shiftKey)
        }
        return t.events.on(Fc.kc, (function(t) { u = !0, e = t, "not-supported" === t && (r = !0) })), t.events.on(Fc.Ec, (function() { u = !1, e = null })), t.events.on(Fc.nc, (function(t, n) { t || a !== n ? t && (a = n) : a = null })), t.events.on(Fc.Qc, (function(t) { t && (r = !1) })),
            function() {
                var i = { l: Fc.pc, w: Fc.mc, s: Fc.wc, c: [Fc.qs, !0], h: [Fc.Hs, !0], f: Fc.Us, d: Fc.Ic, space: _, up: E, down: T, left: S, right: S, esc: k, "?": [Mc._showOverlay, "help"] };

                function r(n) { if (m(n), function(t) { return !(t.ctrlKey || t.metaKey || t.altKey) && (t.which in fp ? "keydown" === t.type : "keypress" === t.type) }(n) && !b(n) && v()) { var r = w(n); if (r in i) { if ("function" == typeof i[r]) return void(!1 === i[r](n, r) && (n.preventDefault(), n.stopPropagation()));!1 === function(n) { if (n = Array.isArray(n) ? n : [n], u && "help" === e) { if (t.events.fire(Fc.Sc), n[0] === Mc._showOverlay && "help" === n[1]) return !1; if (n[0] !== Mc.Qa) return setTimeout((function() { t.events.fire.apply(null, n) }), 250), !1 } return t.events.fire.apply(null, n), !1 }(i[r]) && (n.preventDefault(), n.stopPropagation()) } } }
                t.config.embed.on_site || (i.v = Mc.Qa), document.addEventListener("keydown", r, !1), document.addEventListener("keypress", r, !1), document.addEventListener("keyup", (function(i) {
                    if (m(i), !b(i) && v()) {
                        var e = w(i);
                        !_s.spatialPlayback || !t.config.video.spatial || "left" !== e && "right" !== e && "up" !== e && "down" !== e ? n.get(Pf) || "left" !== e && "right" !== e || function(n) {
                            f = s, l = 0;
                            var i = n.shiftKey;
                            t.events.fire(Fc.Js, i), d = !1
                        }(i) : t.backbone.getEffectByName("ThreeSixtyEffect").keyUp(e)
                    }
                }), !1)
            }(), t.events.on(Fc.df, (function() { r = !1 })).on(Fc.hf, (function() { r = !0 })), t.config.embed.on_site && document.querySelector(".player") === i && (r = !1),
            function() {
                var t, n = !1;
                document.body.addEventListener("keyup", (function(t) { 9 !== t.which || document.body.classList.contains("showfocus") || document.body.classList.add("showfocus") })), document.body.addEventListener("keydown", (function(i) { 32 !== i.which && 13 !== i.which || (n = !0, clearTimeout(t), t = setTimeout((function() { n = !1 }), 200)) })), document.body.addEventListener("click", (function(t) { n || document.body.classList.remove("showfocus") }))
            }(), { pause: function() { r = !0 }, unpause: function() { r = !1 } }
    }
    var dp = function() {
            function t(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    i = n.displayTimeout,
                    e = void 0 === i ? 0 : i,
                    r = n.label,
                    o = void 0 === r ? "Alert" : r;
                nt(this), this.th = t, this.nh = !1, this.ih = null, this.eh = null, this.rh = o;
                var u = Math.round(e / 1e3);
                0 !== u && (this.rh = "".concat(o, " Will be dismissed in ").concat(u, " seconds")), this.oh = null, this.uh = e, this.ah(), this.xn()
            }
            var n = t.prototype;
            return n.show = function(t) { var n = this;!0 !== this.nh && (clearTimeout(this.oh), this.eh.classList.remove("hidden"), this.eh.removeAttribute("hidden"), window.requestAnimationFrame((function() { n.eh.classList.add("in") })), (this.eh.querySelector("[data-alert-autofocus]") || this.eh).focus(), this.nh = !0, this.fire("show", t), 0 !== this.uh && (this.oh = setTimeout((function() { n.hide("timeout") }), this.uh))) }, n.hide = function(t) {
                var n = this;
                !1 !== this.nh && (clearTimeout(this.oh), this.eh.classList.add("leaving"), window.requestAnimationFrame((function() {
                    var t = n;
                    n.sh(), rl(n.eh).on("transitionend", (function n(i) { "opacity" === i.propertyName && (t.eh.classList.remove("leaving"), t.eh.classList.add("hidden"), t.eh.setAttribute("hidden", ""), rl(t.eh).off("transitionend", n)) }))
                })), this.nh = !1, this.fire("hide", t))
            }, n.sh = function() { this.eh.classList.remove("in") }, n.ah = function() {
                this.eh || (this.eh = document.createElement("div"), this.eh.classList.add("vp-alert"), this.eh.setAttribute("role", "alertdialog"), this.eh.setAttribute("aria-label", this.rh), this.eh.setAttribute("aria-atomic", "true"), this.eh.classList.add("hidden"), this.eh.setAttribute("hidden", ""), this.th.appendChild(this.eh), this.sh()), this.ih instanceof HTMLElement ? (this.eh.innerHTML = "", this.eh.appendChild(this.ih)) : (this.eh.textContent = this.ih, this.eh.innerHTML = this.ih);
                var t = document.createElement("button");
                t.setAttribute("data-close", ""), t.setAttribute("aria-label", "Close alert"), t.classList.add("close"), t.innerHTML = hd.render("icon_close"), this.eh.appendChild(t)
            }, n.xn = function() {
                var t = this;
                rl(this.eh).on("click", "[data-close]", (function(n) { t.hide(n) }))
            }, H(t, [{ key: "visible", get: function() { return this.nh } }, { key: "message", get: function() { return this.ih }, set: function(t) { t instanceof HTMLElement && this.ih && t.textContent === this.ih.textContent || t !== this.ih && (this.ih = t, this.ah()) } }]), t
        }(),
        hp = function() {
            function t(t, n, i) { this.player = t, this.backbone = n, this.isBufferingTooLong = !1, this.isBufferingTooFrequent = !1, this.autoAlertWasDismissed = !1, this.bufferCount = -1, this.badPlaybackTimer = null, this.fh(i), this.lh() }
            var n = t.prototype;
            return n.handleBufferStarted = function() { this.bufferCount += 1, this.dh() }, n.handleBufferEnded = function() { clearTimeout(this.badPlaybackTimer), this.badPlaybackTimer = null, this.isBufferingTooLong = !1 }, n.lh = function() {
                var t = this;
                this.player.events.on(Tc.qa, (function(n) { t.hh(n) })), this.player.events.on(Tc.Wa, (function(n) { t.vh(n) })), this.player.events.on(Tc.Ha, this.handleBufferStarted.bind(this)), this.player.events.on(_i.BUFFER_ENDED, this.handleBufferEnded.bind(this)), this.player.events.on(Tc.Ba, (function() { t.autoAlertWasDismissed || (t.showAlert("stream_studder"), cf.captureBreadcrumb("Alert shown", { message: "stream_studder" }, "video")) })), this.player.events.on(Fc.Rs, (function(n) { "auto" === n && t.alertUI.hide("qualitymenuauto") }))
            }, n.hh = function(t) { t || this.showAlert("warning_alert", { strings: { text: 'See a <a href="https://help.vimeo.com/hc/en-us/articles/115001878167#browsers" target="_blank" rel="noopener" aria-describedby="new-window">list of browsers</a> that support 360 viewing.' } }) }, n.vh = function(t) { t || this.showAlert("warning_alert", { strings: { text: 'Looking to watch a 360 video? See <a href="https://help.vimeo.com/hc/en-us/articles/115001878167#browsers" target="_blank" rel="noopener" aria-describedby="new-window">supported browsers and settings</a>.' } }) }, n.showAlert = function(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                this.alertUI && !this.player.config.embed.settings.background && (this.alertUI.message = hd.render(t, n), this.alertUI.show())
            }, n.fh = function(t) {
                var n = this;
                this.alertUI = new dp(t), this.alertUI.on("show", (function(t) { n.player.events.fire(Fc.Nf, !0, t) })), this.alertUI.on("hide", (function(t) {
                    var i = t.target,
                        e = i && "function" == typeof i.getAttribute;
                    if (e) switch (i.getAttribute("data-context")) {
                        case "suggestion":
                            n.player.events.fire(Mc.Za, "auto"), t = "suggestion";
                            break;
                        default:
                            t = "close"
                    }(e || "qualitymenuauto" === t) && (n.autoAlertWasDismissed = !0), n.player.events.fire(Fc.Nf, !1, t)
                }))
            }, n.dh = function() {
                var t = this;
                null === this.badPlaybackTimer && 0 !== this.bufferCount && (this.badPlaybackTimer = setTimeout((function() { t.isBufferingTooLong = !0, t.ph() }), 1e4))
            }, n.ph = function() { "MediaSourceScanner" === this.backbone.currentScannerName && (this.isBufferingTooLong || this.isBufferingTooFrequent) && (this.backbone.video.currentFile.restrictedStreamIndexes.length <= 0 || (this.isBufferingTooLong, this.isBufferingTooFrequent, this.player.events.fire(Tc.Ba), this.bufferCount = 0, this.badPlaybackTimer = null, this.isBufferingTooFrequent = !1, this.isBufferingTooLong = !1)) }, t
        }();

    function vp(t, n, i) { return i ? n ? n(t) : t : (t && t.then || (t = r.resolve(t)), n ? t.then(n) : t) }

    function pp(t, n) { try { var i = t() } catch (t) { return n(t) } return i && i.then ? i.then(void 0, n) : i }

    function mp() {}
    var wp = function() {
        function t(t, n) { this.el = t, this.wh = n, this.bh = 0, this.gh() }
        var n = t.prototype;
        return n.yh = function() { this.wh.get(Hf) && (this.el.element.querySelector(".vp-live-viewer-status-wrapper") || (this.Ll = document.createElement("div"), this.Ll.classList.add("vp-live-viewer-status-wrapper", "invisible"), this.Ll.innerHTML = hd.render("live_status"), this.Ll.querySelector(".vp-live-status-circle").classList.remove("offline"), this.el.element.querySelector(".vp-controls-wrapper").appendChild(this.Ll))) }, n._h = function() {
            var t = this.el.element.querySelector(".vp-live-viewer-status-wrapper");
            t && this.el.element.querySelector(".vp-controls-wrapper").removeChild(t)
        }, n.gh = function() {
            var t = this;
            this.wh.watch(zf, (function() { return t._h() })), this.el.events.on(Fc.Qc, (function() { t.el.config.video.live_event ? t.yh() : t._h() })), this.el.events.on(nu.STREAM_ONLINE, (function() { t.yh(), t.kh() })), this.el.events.on(Fc.Qs, (function(n) {
                var i;
                null == (i = t.Ll) || i.classList.toggle("invisible", n)
            }))
        }, n.kh = function() {
            try {
                var t = this;
                if (!t.wh.get(Hf) || !t.el.config.video.live_event.show_viewer_count) return;
                var n = setTimeout((function() { t.kh() }), 3e4),
                    i = "".concat(t.el.config.video.id);
                "unlisted" === t.el.config.video.privacy && (i += ":".concat(t.el.config.video.unlisted_hash));
                var e = "https://".concat(t.el.config.vimeo_api_url, "/videos/").concat(i, "/stats/live"),
                    o = { jwt_token: t.el.config.user.vimeo_bucketed_live_client_token };
                return bp(pp((function() { return vp(t.el.updatePhpTokens(), (function() { return bp(pp((function() { return vp(Ye({ url: e, searchParams: o }).json(), (function(n) { n.viewers ? (t.bh = 0, t.Eh(n.viewers.current)) : t.bh++ })) }), (function() { t.bh++, t.Th() && clearTimeout(n) }))) })) }), (function(i) { cf.captureException(i), t.bh++, t.Th() && clearTimeout(n) })))
            } catch (t) { return r.reject(t) }
        }, n.Eh = function(t) { this.el.config.video.live_event.show_viewer_count && (this.Ll.querySelector(".vp-live-viewer-count") || (this.el.element.querySelector(".vp-live-viewer-count").style.display = "block", this.Ll.innerHTML += hd.render("live_viewer_count")), U(this.el.element.querySelectorAll(".vp-live-viewer-count-value")).forEach((function(n) { return n.innerHTML = function(t) { return t = parseFloat(t), isNaN(t) || t < 0 ? "0" : t < 1e3 ? t.toString() : t >= 1e3 && t < 1e6 ? Math.floor(t / 1e3) + "." + Math.round(t % 1e3 / 100) + "k" : Math.floor(t / 1e6) + "." + Math.round(t % 1e6 / 1e5) + "m" }(t) }))) }, n.Th = function() { return this.bh > 3 && (U(this.el.element.querySelectorAll(".vp-live-viewer-count")).forEach((function(t) { return t.classList.add("hidden") })), !0) }, t
    }();

    function bp(t) { if (t && t.then) return t.then(mp) }
    t.BigScreen = mh, t.VimeoPlayer = function(t, n, i, e) {
        hd.helpers = np;
        var o = function(t) {
                if (!0 === t) return r.resolve(null);
                var n = !1;
                return new r((function(i, e) {
                    t.link.addEventListener("load", (function() {
                        if (!n) {
                            n = !0;
                            var e = (new Date).getTime() - t.startTime;
                            setTimeout((function() { return i(e) }), 100)
                        }
                    }), !1)
                }))
            }(i),
            u = new Ph({ element: t, delegate: e, cssLoadedPromise: o }),
            a = u.store;
        t.classList.add("js-player-fullscreen");
        var s = u.expose,
            c = null,
            f = null,
            l = null,
            d = null,
            h = null,
            v = null,
            p = t.querySelector(".vp-controls"),
            m = t.querySelector(".vp-sidedock"),
            w = t.querySelector(".vp-title"),
            b = t.querySelector(".vp-cards-wrapper"),
            g = _s.mobileAndroid || _s.iPhone || _s.windowsPhone || _s.browser.bb10,
            y = { tiny: Fc.if, mini: Fc.ef, normal: Fc.rf, none: Fc.rf };

        function _(n) { n && void 0 !== y[n] && (u.events.fire(y[n]), t.classList.toggle("player-normal", "normal" === n), t.classList.toggle("player-mini", "mini" === n), t.classList.toggle("player-tiny", "tiny" === n)) }

        function k(n) { Object.keys(Hl).forEach((function(i) { return t.classList.toggle("player-".concat(i), n === i) })) }

        function E() {
            var n = u.config.embed.settings,
                i = (1 === u.config.view || 3 === u.config.view) && n && !n.playbar;
            t.classList.toggle("no-playbar", i), t.classList.toggle("with-fullscreen", !!n.fullscreen);
            var e = n.custom_logo;
            t.classList.toggle("with-custom-logo", !!e), t.classList.toggle("with-sticky-custom-logo", e && e.sticky), t.classList.toggle("hide-controls-mode", !!n.background || 0 === n.controls), t.classList.toggle("touch-support", _s.touch)
        }

        function T(t) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u.config.video.url;
            if (!(!n || t && t.metaKey)) {
                if (-1 === n.indexOf("#") && u.backbone.currentTime > 0 && u.backbone.currentTime < u.config.video.duration - 30 && !u.backbone.paused && (n += "#at=".concat(Math.floor(u.backbone.currentTime))), !u.config.embed.on_site) return window.open(n), ic(t), u.events.fire(Fc.Vs), !1;
                window.location = n
            }
        }

        function S() {
            if (!u.config.video.live_event) return h && (h.disable(), h = null), void(v && (v = null));
            a.get(qf) || a.get(zf) ? h && (h.disable(), h = null) : (h = new yv(t, u, a), v = new wp(u, a))
        }

        function x() {
            E(), d = new r((function(t, n) {
                    var i = null,
                        e = function n() { clearTimeout(i), window.innerWidth > 0 && window.innerHeight > 0 ? t() : i = setTimeout(n, 250) };
                    u.events.once(Fc.ue, e), u.events.once(Fc.ks, e)
                })),
                function() {
                    var t = function(t, n) {
                            return u.verifyConfig().then((function() {
                                var i = u.config.request,
                                    e = i.signature,
                                    r = i.session,
                                    o = i.timestamp,
                                    a = i.expires;
                                return Ye("https://".concat(u.config.player_url, "/video/").concat(u.config.video.id, "/").concat(t, "?signature=").concat(e, "&session=").concat(r, "&time=").concat(o, "&expires=").concat(a), { method: n, withCredentials: !0 })
                            })).catch((function(i) { cf.captureException(i, { extra: { action: t, method: n } }) }))
                        },
                        n = function(t, n) {
                            return u.updatePhpTokens().then((function() {
                                var i = "following" === t ? u.config.video.owner.id : u.config.video.id,
                                    e = u.config.user.vimeo_api_interaction_tokens,
                                    r = "";
                                if (e) switch (r = "?auth=", t) {
                                    case "likes":
                                        r += e.likes;
                                        break;
                                    case "watchlater":
                                        r += e.watch_later;
                                        break;
                                    case "following":
                                        r += e.following
                                }
                                var o = u.config.video.unlisted_hash && "following" !== t ? ":".concat(u.config.video.unlisted_hash) : "";
                                return Ye("https://".concat(u.config.vimeo_api_url, "/users/").concat(u.config.user.id, "/").concat(t, "/").concat(i).concat(o).concat(r), { method: n, jwt: u.config.user.vimeo_api_client_token }).catch((function(i) { cf.captureException(i, { extra: { action: t, method: n } }) }))
                            })).catch((function(t) { cf.captureException(t) }))
                        };
                    u.events.on(Fc.gc, (function(t) {
                        if (u.config.user.purchased) return !u.config.video.vod.is_feature && u.config.video.vod.feature_id ? void u.loadVideo(u.config.video.vod.feature_id).then((function() { return u.events.fire(Fc.Bs), u.config.video.vod.feature_id })).catch((function(t) { cf.captureException(t), u.events.fire(Mc._showOverlay, "error", { title: "Sorry", message: "There was a problem. Please try again." }) })) : void u.events.fire(Fc.Bs);
                        u.config.video.vod && u.config.video.vod.is_coming_soon ? T(null, u.config.video.vod.url) : u.performDelegateAction(Ic, (function() { u.events.fire(Mc.Ya, "purchase", { productId: t }) }), [t])
                    })), u.events.on(Fc.pc, (function() { u.config.user.logged_in ? u.config.user.id !== u.config.video.owner.id && (u.config.user.liked ? u.performDelegateAction(Cc, (function() { "disable" !== u.config.video.privacy ? n("likes", "DELETE") : t("like", "DELETE"), u.config.user.liked = !1, u.events.fire(Fc.zc) })) : u.performDelegateAction(Ac, (function() { "disable" !== u.config.video.privacy ? n("likes", "PUT") : t("like", "PUT"), u.config.user.liked = !0, u.events.fire(Fc.Wc) }))) : u.performDelegateAction(Dc, (function() { u.events.fire(Mc.Ya, "login-like") })) })), u.events.on(Fc.mc, (function() {
                        (u.config.video.url || "unlisted" === u.config.video.privacy) && (u.config.user.logged_in ? u.config.user.watch_later ? u.performDelegateAction(Oc, (function() { n("watchlater", "DELETE"), u.config.user.watch_later = !1, u.events.fire(Fc.$c) })) : u.performDelegateAction(Rc, (function() { n("watchlater", "PUT"), u.config.user.watch_later = !0, u.events.fire(Fc.Gc) })) : u.performDelegateAction(Dc, (function() { u.events.fire(Mc.Ya, "login-watch-later") })))
                    })), u.events.on(Fc.yc, (function() { u.performDelegateAction(Lc, (function() { u.config.video.vod && u.config.video.vod.url ? T(null, "".concat(u.config.video.vod.url, "#collections")) : u.config.video.url && T(null, "".concat(u.config.video.url, "#collections")) })) })), u.events.on(Fc.wc, (function() {
                        var t = u.config.embed.settings.share && u.config.embed.settings.share.embed_only,
                            n = function() { u.events.fire(Mc._showOverlay, "share", t) };
                        mh.element ? n() : u.performDelegateAction(jc, n)
                    })), u.events.on(Fc.bc, (function() { u.config.embed.settings.share.embed_only && u.performDelegateAction(jc, (function() { u.events.fire(Mc._showOverlay, "share", !0) })) })), u.events.on(Fc._c, (function() {
                        if (u.config.user.logged_in && u.config.user.id !== u.config.video.owner.id) {
                            if (u.config.user.following) return n("following", "DELETE"), u.config.user.following = !1, void u.events.fire(Fc.yf);
                            n("following", "PUT"), u.config.user.following = !0, u.events.fire(Fc.gf)
                        }
                    }))
                }(), u.events.on(Fc.Ss, (function() { t.classList.add("player-ad") })), u.events.on([Fc.Ms, Mc.Ja], (function() { t.classList.remove("player-ad") })),
                function() {
                    var n = function() {
                        return function(t, n, i) { return t && t.then || (t = r.resolve(t)), n ? t.then(n) : t }(d, (function() {
                            var n = function() {
                                var n = rc(t),
                                    i = n.width,
                                    e = n.height;
                                return g ? e <= 200 ? "10px" : i < 450 ? "12px" : i <= 1024 ? "11px" : "10px" : "10px"
                            }();
                            p.style.fontSize = n, m.style.fontSize = n, w.style.fontSize = n
                        }))
                    };
                    u.events.on(Fc.dc, n), u.events.on(Fc.vc, n), window.addEventListener("orientationchange", n), g && (t.classList.add("mobile"), n())
                }(), a.watch("ui.player.mode", _), a.watch("ui.player.breakpoint", k),
                function() {
                    function n() {
                        var n = t;
                        if (e && e.getFullscreenElement && "function" == typeof e.getFullscreenElement) {
                            var i = e.getFullscreenElement();
                            i && i instanceof HTMLElement && i.contains(t) && i.classList.contains("js-player-fullscreen") && (n = i)
                        }
                        return n
                    }
                    u.config.embed.fullscreen = !0, _s.iPad && t.classList.add("no-fullscreen-api-support");
                    var i = u.config.embed.playsinline && _s.iOS >= 10,
                        r = _s.iPad || i;
                    mh.enabled || r || (t.classList.add("no-fullscreen-support"), _s.iOS || (u.config.embed.fullscreen = !1));
                    var o = !1,
                        a = !1,
                        s = !1;
                    u.events.on([Yo, Jo], (function() { s = !0 })), u.events.on(Mc.us, (function() { mh.enabled || mh.videoEnabled(t) ? (u.events.fire(Fc.lc), a = !1, mh.request(n())) : u.events.fire(Mc.cs, !0) })), u.events.on(Fc.Us, (function() { "picture-in-picture" === u.backbone.presentationMode && u.events.fire(Mc.hs), mh.element ? (u.events.fire(Fc.hc), mh.exit()) : (u.events.fire(Fc.lc), a = !0, mh.request(n())) }));
                    var c = mh.onenter,
                        f = mh.onexit;
                    if (mh.onenter = function(t) { o || (n().contains(t) ? function(t, i) { s ? s = !1 : o || (o = !0, u.events.fire(Fc.dc, n() === t, a)) }(t) : "function" == typeof c && c(t)) }, mh.onexit = function() { o ? s ? s = !1 : o && (o = !1, u.events.fire(Fc.vc, a), a || u.events.fire(Mc.cs, !1), a = !1) : "function" == typeof f && f() }, rl(t).on("click", "a", (function(t) { mh.element === n() && mh.exit() })), rl(t).on("gestureend", (function(t) { t.scale > 1 && u.events.fire(Fc.Us) })), "undefined" != typeof MSGesture) {
                        var l = 1,
                            d = new MSGesture;
                        d.target = t, rl(t).on("pointerdown", (function(t) { d.addPointer(t.pointerId) })).on(["MSGestureChange"], (function(t) { l *= t.scale })).on(["MSGestureEnd"], (function() {
                            (!o && l >= 2 || o && l < 1) && u.events.fire(Fc.Us), l = 1
                        }))
                    }
                }(), Nh(t, "a[data-clip-link]", T), u.events.on(Mc.Qa, T), Nh(t, "[data-track-click]", (function(t) {
                    var n = t.target.dataset.trackClick;
                    u.events.fire(Fc.Ds, n)
                })), S(), u.events.on(Fc.Qc, (function() { E(), S() })), u.events.on(Mc.ys, (function() { h.disable() }))
        }

        function M() { c || (c = new xv(u, a, t.querySelector(".vp-overlay-wrapper"))) }

        function A() { f || (f = new Yv(u, { uuid: u.uuid, id: t.id, isMobileDevice: !1 })) }

        function C() { l || (l = new Jv(u)) }
        var R = {
            initializationHandler: function() {
                return function() {
                    M(), A(), C(), new ov(u, a, p), new av(u, a, t);
                    var n = new lp(u, a, t);
                    new _v(u, t.querySelector(".vp-notification-wrapper")), new Tv(u, a, t.querySelector(".vp-outro-wrapper")), new ip(u, m), new ep(u, w), new up(u, t), Object.defineProperties(s, { pauseKeyboard: { enumerable: !0, value: n.pause }, unpauseKeyboard: { enumerable: !0, value: n.unpause } })
                }(), x(), r.resolve()
            },
            postInitializationHandler: function() { return u.backbone && (new bv(t.querySelector(".vp-stats-debug"), u), new cp(u, a, b), new hp(u, u.backbone, t)), r.resolve() },
            authorizationHandler: function(t) {
                t(), M(), A();
                var n = "Error",
                    i = "Unhandled video privacy";
                switch (u.config.view) {
                    case 4:
                        return new r((function(t, n) { u.events.fire(Mc._showOverlay, "password"), u.events.once(Fc.tf, (function(n) { t(n) })) }));
                    case 2:
                        C();
                        var e = "private-locked",
                            o = null;
                        return u.config.user.logged_in && (e = "error", o = { title: "Private Video", message: "Sorry, you don’t have permission to watch.", modal: !0, logo: !!u.config.embed.settings.logo, icon: "lock" }), u.events.fire(Mc._showOverlay, e, o), r.reject();
                    case 7:
                        n = u.config.title, i = u.config.message
                }
                return u.events.fire(Mc._showOverlay, "error", { title: n, message: i, modal: !0 }), r.reject()
            }
        };
        return u.init(n, R).then((function() { return 3 !== u.config.view || u.config.embed.autoplay || u.events.fire(Mc._showOverlay, "private-unlocked"), !0 })).catch((function(n) { cf.captureException(n), M(), A(), t.classList.remove("loading"), u.events.fire(Fc.ks, Gc.id, Gc) })), s
    }, t.requestModule = rr
}(this.window = this.window || {});