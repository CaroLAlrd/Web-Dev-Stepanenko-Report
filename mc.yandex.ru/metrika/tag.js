(function() {
    try {
        (function() {
            function gf(a, c, b, d) {
                var e = this;
                return E(window, "c.i", function() {
                    function f(F) {
                        (F = hf(l, m, "", F)(l, m)) && (O(F.then) ? F.then(g) : g(F));
                        return F
                    }

                    function g(F) {
                        F && (O(F) ? p.push(F) : na(F) && x(function(P) {
                            var M = P[0];
                            P = P[1];
                            O(P) && ("u" === M ? p.push(P) : h(P, M))
                        }, La(F)))
                    }

                    function h(F, P, M) {
                        e[P] = mm(l, m, M || q, P, F)
                    }
                    var k, l = window;
                    (!l || isNaN(a) && !a) && fe();
                    var m = nm(a, ge, c, b, d),
                        p = [],
                        q = [qh, hf, rh];
                    q.unshift(om);
                    var r = A(Q, Za),
                        t = L(m);
                    m.id || Va(Pa("Invalid Metrika id: " + m.id, !0));
                    var y = jd.C("counters", {});
                    if (y[t]) return Kb(l,
                        t, "dc", (k = {}, k.key = t, k)), y[t];
                    pm(l, t, sh(a, c, b, d));
                    y[t] = e;
                    jd.D("counters", y);
                    jd.Ia("counter", e);
                    x(function(F) {
                        F(l, m)
                    }, jf);
                    x(f, kd);
                    f(qm);
                    h(rm(l, m, p), "destruct", [qh, rh]);
                    Tb(l, C([l, r, f, 1, "a.i"], th));
                    x(f, W)
                })()
            }

            function qh(a, c, b, d) {
                return E(a, "cm." + b, d)
            }

            function rh(a, c, b, d) {
                return function() {
                    var e = Oa(arguments);
                    e = d.apply(void 0, e);
                    return X(e) ? Aa(a, c) : e
                }
            }

            function sm(a, c) {
                delete J(a).C("cok", {})[c]
            }

            function pm(a, c, b) {
                a = J(a);
                var d = a.C("cok", {});
                d[c] = b;
                a.D("cok", d)
            }

            function tm(a, c) {
                var b = "" + c,
                    d = {
                        id: 1,
                        ca: "0"
                    },
                    e = um(b);
                e ? d.id = e : -1 === ib(b, ":") ? (b = Ia(b), d.id = b) : (b = b.split(":"), e = b[1], d.id = Ia(b[0]), d.ca = he(e) ? "1" : "0");
                return [Aa(a, d), d]
            }

            function vm(a) {
                return na(a) && R(a.code)
            }

            function wm(a, c) {
                var b, d = c.slice(2),
                    e = [(b = {}, b.require = {
                        kind: 0,
                        value: w(xm, Lc([a, {}]))
                    }, b)];
                kf(e, ld([3], d))
            }

            function kf(a, c, b) {
                c = c.slice(1);
                a.push(b || {});
                x(function(d) {
                    R(d) && 3 === d[0] ? kf(a, d) : !R(d) || 18 !== d[0] && 19 !== d[0] ? R(d) && 2 === d[0] && cc(a, d[1]) : zm(a, d)
                }, c);
                a.pop()
            }

            function zm(a, c) {
                var b = 18 === c[0];
                x(function(d) {
                    var e = d[0],
                        f = d[1];
                    if (b && 1 ===
                        d.length) throw Pa("mca");
                    d = a[a.length - 1];
                    if (Lb(d, e)) throw Pa("vr");
                    f = cc(a, f);
                    d[e] = {
                        kind: b ? 0 : 1,
                        value: f
                    }
                }, c.slice(1))
            }

            function cc(a, c) {
                if (ia(c) || "[object Number]" === Object.prototype.toString.call(c) || !!c === c || ca(c)) return c;
                if (R(c) && 40 === c[0]) {
                    a: {
                        var b = c[1];
                        for (var d = a.length; 0 < d;) {
                            var e = a[--d];
                            if (Lb(e, b)) {
                                b = e[b];
                                break a
                            }
                        }
                        b = void 0
                    }
                    if (!b) throw Pa("vnd");
                    return b.value
                }
                if (R(c) && 37 === c[0]) {
                    d = c.slice(2);
                    b = cc(a, c[1]);
                    if (!O(b)) throw Pa("tenf");
                    d = A(u(a, cc), d);
                    return b.apply(null, d)
                }
                if (R(c) && 24 === c[0]) return Am(a,
                    c);
                if (R(c) && 35 === c[0]) {
                    d = c[2];
                    b = cc(a, c[1]);
                    d = cc(a, d);
                    if (!b) throw Pa("noma");
                    return b["" + d]
                }
                if (R(c) && 23 === c[0]) return Bm(a, c)
            }

            function Bm(a, c) {
                return N(function(b, d) {
                    var e = d[1],
                        f = cc(a, d[0]);
                    e = cc(a, e);
                    b["" + f] = e;
                    return b
                }, {}, c.slice(1))
            }

            function Am(a, c) {
                var b = c[1],
                    d = c[2],
                    e = c[3],
                    f = A(Q, a);
                return function() {
                    var g = arguments,
                        h = N(function(k, l, m) {
                            if (k[l]) throw Pa("da");
                            k[l] = {
                                kind: 1,
                                value: g[m]
                            };
                            return k
                        }, {}, d);
                    b && !I(b, d) && (h[b] = {
                        kind: 0,
                        value: b
                    });
                    kf(f, e, h)
                }
            }

            function xm(a) {
                return Cm[a]
            }

            function lf(a, c) {
                return function() {
                    try {
                        return c.apply(null,
                            arguments)
                    } catch (b) {
                        uh(a, b)
                    }
                }
            }

            function Dm(a, c, b, d) {
                function e() {
                    g.state = 1;
                    b()
                }

                function f() {
                    g.state = 2;
                    d && d()
                }
                var g = Em(a, c);
                c = g.Di;
                var h = g.state;
                c && 2 !== h ? 1 === h ? e() : (a = fa(a), a.F(c, ["load"], e), a.F(c, ["error"], f)) : f()
            }

            function Em(a, c) {
                mf[c] || (mf[c] = {
                    Di: Mc(a, {
                        src: c
                    }),
                    state: 0
                });
                return mf[c]
            }

            function vh(a, c) {
                if (ca(a)) throw Pa("noma");
                if (1 === c.length) return a;
                var b = n(a, G(".", c.slice(0, -1)));
                if (!b) throw Pa("noma");
                return b
            }

            function Fm(a) {
                return N(function(c, b) {
                    Lb(a, b) && (c[b] = a[b]);
                    return c
                }, {}, ea(a))
            }

            function Gm(a,
                c) {
                if ("*" === c) return !0;
                var b = S(a);
                return c === b.host + b.pathname
            }

            function Hm(a, c) {
                var b = n(c, "target");
                b && a(b)
            }

            function Im(a, c, b) {
                var d = n(b, "submitter");
                d || (b = n(b, "target")) && (d = nf(a, b));
                d && c(d)
            }

            function Jm(a, c, b, d) {
                var e = of (a, d);
                e && x(function(f) {
                    var g, h = null;
                    try {
                        var k = n(f, "css_selector"),
                            l = dc(k, a.document);
                        h = wh(l)
                    } catch (r) {}
                    k = null;
                    try {
                        var m = n(f, "xpath"),
                            p = Km(m);
                        var q = p ? n(a, "document.evaluate") ? a.document.evaluate(p, a.document, null, a.XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue : null : null;
                        k = wh(q)
                    } catch (r) {}
                    f = (g = {}, g.s = [k, h], g.b = e, g);
                    c(f)
                }, b)
            }

            function wh(a) {
                return (a = Mb(a)) ? md(ie(a)) : null
            }

            function Km(a) {
                if (!a) return "";
                a = a.match(Lm);
                if (!a || 0 === a.length) return "";
                var c = Mm();
                return "//HTML/BODY/" + N(function(b, d) {
                    var e = d[0],
                        f = Ia(d.slice(1));
                    return "/" + c[e] + (f ? "[" + (f + 1) + "]" : "") + b
                }, "", a)
            }

            function Nm(a) {
                x(function(c) {
                    var b, d = c.event;
                    if (I(d, Om)) {
                        var e = c.data;
                        c = e.auctionId || n(e, "bid.auctionId");
                        ua[c] || (ua[c] = (b = {}, b.auctionId = c, b));
                        b = "auctionInit" === d;
                        var f = I(d, xh);
                        f || ua[c].startStamp && !b || (ua[c].startStamp =
                            b ? e.auctionStart || e.timestamp : e.auctionStart);
                        if (I(d, yh)) {
                            b = e.bidderCode;
                            if (!b) return;
                            ua[c][d] || (ua[c][d] = {});
                            if ("bidTimeout" === d) ua[c].bidTimeout[b] = !0;
                            else {
                                var g = {};
                                ua[c][d][b] = g;
                                x(function(h) {
                                    var k = e[h];
                                    ca(k) || (g[h] = k)
                                }, Pm);
                                ua[c].endStamp && (ua[c].aa = !0)
                            }
                        }
                        f ? (b = e.bid.bidderCode, ua[c].renderState || (ua[c].renderState = {}), d = "adRenderSucceeded" === d, f = {
                            xe: d
                        }, d || (f.reason = e.reason, f.message = e.message), ua[c].renderState[b] = f) : "auctionEnd" === d && (ua[c].aa = !0, ua[c].endStamp = e.auctionEnd || e.timestamp, ua[c].requestedBidders =
                            ha(function(h, k, l) {
                                return pf(h, l) === k
                            }, A(U("bidderCode"), e.bidderRequests)))
                    }
                }, a)
            }

            function Qm(a, c) {
                x(function(b) {
                    b.aa && Rm(a, c, b.auctionId)
                }, zh(ua))
            }

            function Rm(a, c, b) {
                ua[b].aa = !1;
                ua[b].Ka && ka(a, ua[b].Ka);
                ua[b].Ka = T(a, function() {
                    var d, e;
                    delete ua[b].Ka;
                    delete ua[b].aa;
                    c((d = {}, d.__ym = (e = {}, e.pbjs = ua[b], e), d));
                    delete ua[b]
                }, 2E3)
            }

            function Sm(a) {
                var c = n(a, "featurePolicy");
                return c ? "browsingTopics" in a && c.allowsFeature("browsing-topics") : !1
            }

            function Tm(a, c, b, d) {
                var e = n(d, "data");
                if (ia(e)) {
                    var f = e.split("*");
                    e = f[0];
                    var g = f[1];
                    f = f[2];
                    "sc.topics-response" === e ? (g && ("1" === g && f ? (a = zb(a, f), R(a) && c.D("cta", a)) : c.D("cta.e", g)), b()) : "sc.frame" === e && d.source && d.source.postMessage("sc.topics", "*")
                }
            }

            function Um(a, c) {
                var b;
                if ("https://oauth.yandex.ru" === n(c, "origin") && n(c, "source.window") && "_ym_uid_request" === n(c.data, "_ym")) {
                    var d = c.source,
                        e = (b = {}, b._ym_uid = a, b);
                    d.postMessage(e, "https://oauth.yandex.ru")
                }
            }

            function Ah(a, c) {
                void 0 === c && (c = !0);
                var b = dc("canvas", a.document);
                if (b && (b = Nc(b))) {
                    var d = je(a) || Oc(a),
                        e = d[0];
                    d = d[1];
                    if (.3 <= Bh(a, b, {
                            h: d,
                            w: e
                        }) / (d * e)) {
                        J(a).D("hc", 1);
                        return
                    }
                }
                c && T(a, C([a, !1], Ah), 3E3)
            }

            function Ch(a) {
                return {
                    N: function(c, b) {
                        Vm(a).then(function(d) {
                            c.J || (c.J = {});
                            c.J.uah = d;
                            b()
                        }, b)
                    }
                }
            }

            function Wm(a) {
                var c = N(function(b, d) {
                    var e = d[1],
                        f = Xm(a[d[0]]);
                    f && b.push("" + e + "\n" + f);
                    return b
                }, [], La(Ym));
                return G("\n", c)
            }

            function Zm(a) {
                return "che\n" + a
            }

            function Xm(a) {
                return ia(a) ? a : R(a) ? G(",", A(function(c) {
                    return '"' + c.brand + '";v="' + c.version + '"'
                }, a)) : ca(a) ? "" : a ? "?1" : "?0"
            }

            function $m(a, c) {
                var b = an(a),
                    d = [bn(a) || cn(a)];
                Dh(a) && d.push(b);
                var e = ja(a);
                b = Qa(a);
                var f = b.C("synced", {});
                d = ha(function(g) {
                    if (c[g]) {
                        var h = (f[g] || 1) + 1440 < e(qb);
                        h && delete f[g];
                        return h
                    }
                }, d);
                b.D("synced", f);
                return A(function(g) {
                    return {
                        Ni: c[g],
                        $h: g
                    }
                }, d)
            }

            function cn(a) {
                a = dn(a);
                return en[a] || a
            }

            function an(a) {
                a = Eh(a);
                return fn[a] || "ru"
            }

            function gn(a, c, b, d) {
                if (!b.K || he(c.ca)) d();
                else {
                    var e = ke(a),
                        f = u(e, hn),
                        g = Pc(a, ""),
                        h = function() {
                            var q = G(",", A(jn(qf), le(e)));
                            q = "" + q + kn(q, g);
                            me(b, "gdpr", q);
                            d()
                        };
                    if (c.fj) f("31"), h();
                    else if (3 === c.id) h();
                    else {
                        var k = J(a),
                            l =
                            k.C("f1");
                        if (l) l(h);
                        else if (l = le(e), $a(uc(qf), l)) h();
                        else if (g.C("yandex_login")) f("13"), g.D("gdpr", Qc, 525600), h();
                        else {
                            l = ne(a);
                            var m = S(a);
                            var p = /(^|\w+\.)yango(\.yandex)?\.com$/.test(m.hostname) ? {
                                url: "https://yastatic.net/s3/taxi-front/yango-gdpr-popup/",
                                version: 2,
                                sf: ln,
                                Af: "_inversed_buttons"
                            } : void 0;
                            l || p ? (l = g.C("gdpr"), I(l, vc) ? (f(l === rf ? "12" : "3"), h()) : sf(a) || mn(a) ? (f("17"), h()) : nn(a).then(Q, D).then(function(q) {
                                q ? (f("28"), h()) : (Fh(h), k.D("f1", Fh), (0, tf[0])(a).then(U("params.eu")).then(function(r) {
                                    if (r ||
                                        eb(m.href, "yagdprcheck=1") || g.C("yaGdprCheck")) {
                                        g.D("gdpr_popup", rf);
                                        on(a, c);
                                        if (rb(a)) return pn(a, f, c);
                                        var t = Gh(a, e);
                                        if (t) return r = qn(a, f, t, c, p), r.then(C([a, c], rn)), r
                                    }
                                    r || f("8");
                                    return K.resolve({
                                        value: Qc,
                                        Nd: !0
                                    })
                                }).then(function(r) {
                                    g.pc("gdpr_popup");
                                    if (r) {
                                        var t = r.value;
                                        r = r.Nd;
                                        I(t, vc) && g.D("gdpr", t, r ? void 0 : 525600)
                                    }
                                    t = ec(Hh, la);
                                    nd(a, t, 20)(Ra(E(a, "gdr"), D));
                                    k.D("f1", la)
                                })["catch"](E(a, "gdp.a")))
                            })) : (f("14"), h())
                        }
                    }
                }
            }

            function rn(a, c) {
                if (ne(a)) {
                    var b = ke(a),
                        d = Aa(a, c);
                    d = d && d.params;
                    b = A(u(sn, n), le(b));
                    d &&
                        b.length && d("gdpr", va(b))
                }
            }

            function pn(a, c, b) {
                var d = oe(a, b);
                return new K(function(e) {
                    var f;
                    if (d) {
                        var g = d.$,
                            h = w(u("4", c), u(null, e)),
                            k = T(a, h, 2E3, "gdp.f.t");
                        d.Uf((f = {}, f.type = "isYandex", f)).then(function(l) {
                            l.isYandex ? (c("5"), g.F(Ih, function(m) {
                                e({
                                    value: Jh(m[1].type)
                                })
                            })) : (c("6"), e(null))
                        })["catch"](h).then(C([a, k], ka))
                    } else e({
                        value: rf,
                        Nd: !0
                    })
                })
            }

            function on(a, c) {
                var b = oe(a, c);
                b && b.$.F(["isYandex"], function() {
                    var d;
                    return d = {
                        type: "isYandex"
                    }, d.isYandex = ne(a), d
                });
                return b
            }

            function tn(a, c, b) {
                a = b || Eh(a);
                return I(a, c) ? a : "en"
            }

            function Jh(a) {
                if (I(a, ["GDPR-ok-view-default", "GDPR-ok-view-detailed"])) return Qc;
                a = a.replace("GDPR-ok-view-detailed-", "");
                return I(a, vc) ? a : Qc
            }

            function Kh(a, c, b) {
                var d = n(a, "AppMetricaInitializer"),
                    e = n(d, "init");
                if (e) try {
                    H(e, d)(Ab(a, c))
                } catch (f) {} else Lh = T(a, C([a, c, 2 * b], Kh), b, "ai.d");
                return function() {
                    return ka(a, Lh)
                }
            }

            function Mh(a, c, b, d) {
                var e, f, g, h = b.Uh,
                    k = b.Ph;
                b = b.isTrusted;
                a = uf(a, k);
                k = k.readOnly;
                d = (e = {}, e.fi = vf((f = {}, f.a = h ? 1 : 0, f.b = a, f.c = d || 0, f.d = k ? 1 : null, f)).Ha(), e);
                ca(b) ||
                    (d.ite = sb(b));
                c.params((g = {}, g.__ym = d, g))
            }

            function Nh(a, c) {
                var b = n(c, "target");
                if (b) {
                    var d = n(b, "value");
                    if ((d = ab(d)) && !(100 <= Sa(d))) {
                        var e = "tel" === n(b, "type"),
                            f = 0 < ib(d, "@") && !e,
                            g = Ub(d),
                            h = Sa(g);
                        if (f || !f && (e || h)) {
                            if (f) {
                                if (d = Oh(d), 5 > Sa(d) || 100 < Sa(d)) return
                            } else {
                                if (un(d) || Sa(d) - h > h || 10 > Sa(g) || 16 < Sa(g)) return;
                                e = g[0];
                                g = d[1];
                                if ("+" === d[0] && g !== e) return;
                                d = Ph(a, d)
                            }
                            e = n(c, "isTrusted");
                            return {
                                Ph: b,
                                Uh: f,
                                Qh: d,
                                isTrusted: e
                            }
                        }
                    }
                }
            }

            function Qh(a, c, b, d, e) {
                if (!od(a)) return D;
                var f = [],
                    g = fa(a);
                Nb(a)(Ra(D, function() {
                    var h =
                        jb(c, a.document.body);
                    e && (h = ha(e, h));
                    x(function(l) {
                        f.push(g.F(l, b, d))
                    }, h);
                    if (Ea("MutationObserver", a.MutationObserver)) {
                        var k = c.toUpperCase();
                        h = new a.MutationObserver(E(a, "de.m", function(l) {
                            x(function(m) {
                                var p = m.addedNodes;
                                m = m.removedNodes;
                                p && p.length && x(function(q) {
                                    pd(a, q, function(r) {
                                        r.nodeName !== k || e && !e(r) || f.push(g.F(r, b, d))
                                    }, void 0, a.NodeFilter.SHOW_ELEMENT, !0)
                                }, p);
                                m && m.length && x(function(q) {
                                    pd(a, q, function(r) {
                                        r.nodeName !== k || e && !e(r) || g.yb(r, b, d)
                                    }, void 0, a.NodeFilter.SHOW_ELEMENT, !0)
                                }, m)
                            }, l)
                        }));
                        h.observe(a.document.body, {
                            childList: !0,
                            subtree: !0
                        });
                        f.push(H(h.disconnect, h))
                    }
                }));
                return C([la, f], x)
            }

            function vn(a) {
                var c = n(a, "speechSynthesis.getVoices");
                if (c) return a = H(c, a.speechSynthesis), wc(function(b) {
                    return A(u(b, n), wn)
                }, a())
            }

            function xn(a, c, b) {
                return G("x", A(w(Q, Fa("concat", "" + a), u(b, n)), c))
            }

            function yn(a, c) {
                var b = c.Fg;
                if (!zn(a, b)) return "";
                var d = [];
                a: {
                    var e = An(a, b);
                    try {
                        var f = C(e, w)()();
                        break a
                    } catch (F) {
                        if ("ccf" === F.message) {
                            f = null;
                            break a
                        }
                        Va(F)
                    }
                    f = void 0
                }
                if (Wa(f)) var g = "";
                else try {
                    g = f.toDataURL()
                } catch (F) {
                    g =
                        ""
                }(f = g) && d.push(f);
                var h = b.getContextAttributes();
                try {
                    var k = oa(b.getSupportedExtensions, "getSupportedExtensions") ? b.getSupportedExtensions() || [] : []
                } catch (F) {
                    k = []
                }
                k = G(";", k);
                f = wf(b.getParameter(b.ALIASED_LINE_WIDTH_RANGE), b);
                e = wf(b.getParameter(b.ALIASED_POINT_SIZE_RANGE), b);
                g = b.getParameter(b.ALPHA_BITS);
                h = h && h.antialias ? "yes" : "no";
                var l = b.getParameter(b.BLUE_BITS),
                    m = b.getParameter(b.DEPTH_BITS),
                    p = b.getParameter(b.GREEN_BITS),
                    q = b.getExtension("EXT_texture_filter_anisotropic") || b.getExtension("WEBKIT_EXT_texture_filter_anisotropic") ||
                    b.getExtension("MOZ_EXT_texture_filter_anisotropic");
                if (q) {
                    var r = b.getParameter(q.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
                    0 === r && (r = 2)
                }
                r = {
                    rj: k,
                    "webgl aliased line width range": f,
                    "webgl aliased point size range": e,
                    "webgl alpha bits": g,
                    "webgl antialiasing": h,
                    "webgl blue bits": l,
                    "webgl depth bits": m,
                    "webgl green bits": p,
                    "webgl max anisotropy": q ? r : null,
                    "webgl max combined texture image units": b.getParameter(b.MAX_COMBINED_TEXTURE_IMAGE_UNITS),
                    "webgl max cube map texture size": b.getParameter(b.MAX_CUBE_MAP_TEXTURE_SIZE),
                    "webgl max fragment uniform vectors": b.getParameter(b.MAX_FRAGMENT_UNIFORM_VECTORS),
                    "webgl max render buffer size": b.getParameter(b.MAX_RENDERBUFFER_SIZE),
                    "webgl max texture image units": b.getParameter(b.MAX_TEXTURE_IMAGE_UNITS),
                    "webgl max texture size": b.getParameter(b.MAX_TEXTURE_SIZE),
                    "webgl max varying vectors": b.getParameter(b.MAX_VARYING_VECTORS),
                    "webgl max vertex attribs": b.getParameter(b.MAX_VERTEX_ATTRIBS),
                    "webgl max vertex texture image units": b.getParameter(b.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
                    "webgl max vertex uniform vectors": b.getParameter(b.MAX_VERTEX_UNIFORM_VECTORS),
                    "webgl max viewport dims": wf(b.getParameter(b.MAX_VIEWPORT_DIMS), b),
                    "webgl red bits": b.getParameter(b.RED_BITS),
                    "webgl renderer": b.getParameter(b.RENDERER),
                    "webgl shading language version": b.getParameter(b.SHADING_LANGUAGE_VERSION),
                    "webgl stencil bits": b.getParameter(b.STENCIL_BITS),
                    "webgl vendor": b.getParameter(b.VENDOR),
                    "webgl version": b.getParameter(b.VERSION)
                };
                xf(d, r, ": ");
                a: {
                    try {
                        var t = b.getExtension("WEBGL_debug_renderer_info");
                        if (t) {
                            var y = {
                                "webgl unmasked vendor": b.getParameter(t.UNMASKED_VENDOR_WEBGL),
                                "webgl unmasked renderer": b.getParameter(t.UNMASKED_RENDERER_WEBGL)
                            };
                            break a
                        }
                    } catch (F) {}
                    y = {}
                }
                xf(d, y);
                if (!b.getShaderPrecisionFormat) return G("~", d);
                xf(d, Bn(b));
                return G("~", d)
            }

            function xf(a, c, b) {
                void 0 === b && (b = ":");
                x(function(d) {
                    return a.push("" + d[0] + b + d[1])
                }, La(c))
            }

            function Cn(a, c, b, d) {
                c = d.C("cc");
                d = C(["cc", ""], d.D);
                if (c) {
                    var e = c.split("&");
                    c = e[0];
                    (e = (e = e[1]) && Ia(e)) && 1440 < ja(a)(qb) - e ? d() : b.D("cc", c)
                } else Ba(0)(c) || d()
            }

            function Dn(a, c, b, d) {
                return pa(c, function(e) {
                    if (!yf(e) && !qd(a))
                        if (e = d.C("zzlc"), X(e) || Wa(e) || "na" === e) {
                            var f = fb(a);
                            if (f && (e = fc(a))) {
                                var g = f("iframe");
                                z(g.style, {
                                    display: "none",
                                    width: "1px",
                                    height: "1px",
                                    visibility: "hidden"
                                });
                                f = zf(a, 68);
                                var h = Af(a, 79);
                                g.src = "https://mc.yandex." + (f || h ? "md" : "ru") + Rh("L21ldHJpa2EvenpsYy5odG1s");
                                e.appendChild(g);
                                var k = 0,
                                    l = fa(a).F(a, ["message"], E(a, "zz.m", function(m) {
                                        (m = n(m, "data")) && m.substr && "__ym__zz" === m.substr(0, 8) && (xc(g), m = m.substr(8), d.D("zzlc", m), b.D("zzlc", m), l(),
                                            ka(a, k))
                                    }));
                                k = T(a, w(l, u(g, xc)), 3E3)
                            }
                        } else b.D("zzlc", e)
                })
            }

            function En(a, c, b) {
                var d, e;
                c = tb(u(a, n), Fn);
                c = X(c) ? null : n(a, c);
                if (n(a, "navigator.onLine") && c && c && n(c, "prototype.constructor.name")) {
                    var f = new c((d = {}, d.iceServers = [], d));
                    a = n(f, "createDataChannel");
                    O(a) && (H(a, f, "y.metrika")(), a = n(f, "createOffer"), O(a) && !a.length && (a = H(a, f)(), d = n(a, "then"), O(d) && H(d, a, function(g) {
                        var h = n(f, "setLocalDescription");
                        O(h) && H(h, f, g, D, D)()
                    })(), z(f, (e = {}, e.onicecandidate = function() {
                        var g, h = n(f, "close");
                        if (O(h)) {
                            h = H(h,
                                f);
                            try {
                                var k = (g = n(f, "localDescription.sdp")) && g.match(/c=IN\s[\w\d]+\s([\w\d:.]+)/)
                            } catch (l) {
                                f.onicecandidate = D;
                                "closed" !== f.iceConnectionState && h();
                                return
                            }
                            k && 0 < k.length && (g = gc(k[1]), b.D("pp", g));
                            f.onicecandidate = D;
                            h()
                        }
                    }, e))))
                }
            }

            function Gn(a, c, b) {
                var d, e = rd(a, c);
                if (e) {
                    e.$.F(["gpu-get"], function() {
                        var h;
                        return h = {}, h.type = "gpu-get", h.pu = b.C("pu"), h
                    });
                    var f = n(a, "opener");
                    if (f) {
                        var g = T(a, C([a, c, b], Sh), 200, "pu.m");
                        e.oe(f, (d = {}, d.type = "gpu-get", d), function(h, k) {
                            var l = n(k, "pu");
                            l && (ka(a, g), b.D("pu", l))
                        })
                    } else Sh(a,
                        c, b)
                }
            }

            function Sh(a, c, b) {
                var d = n(a, "location.host");
                a = sd(a, c);
                b.D("pu", "" + gc(d) + a)
            }

            function Th(a, c, b) {
                c = Pc(a, void 0, c);
                c = Uh(a, c.C("phc_settings") || "");
                var d = n(c, "clientId"),
                    e = n(c, "orderId"),
                    f = n(c, "service_id"),
                    g = n(c, "phones") || [];
                return d && e && g && f ? Hn(a, b.kc, {
                    eg: In
                })(g).then(function(h) {
                    return Jn(b, {
                        Eb: d,
                        Pb: e,
                        Xf: f
                    }, h.ja, g, h.Aa)
                })["catch"](D) : K.resolve()
            }

            function In(a, c, b) {
                a = Kn(b.Sb);
                if ("href" === b.ke) {
                    var d = b.tb;
                    c = d.href;
                    b = c.replace(a, b.cb);
                    if (c !== b) return d.href = b, !0
                } else if ((a = null === (d = b.tb.textContent) ||
                        void 0 === d ? void 0 : d.replace(a, b.cb)) && a !== b.tb.textContent) return b.tb.textContent = a, !0;
                return !1
            }

            function Jn(a, c, b, d, e) {
                var f;
                c.Eb && c.Pb && (c.Eb === a.Eb && c.Pb === a.Pb || z(a, c, {
                    ja: {},
                    hb: !0
                }), 0 < e && ra(a.Aa, [e]), x(function(g) {
                    var h, k, l = g[0];
                    g = g[1];
                    var m = +(a.ja[l] && a.ja[l][g] ? a.ja[l][g] : 0);
                    z(a.ja, (h = {}, h[l] = (k = {}, k[g] = m, k), h))
                }, d), x(function(g) {
                    var h, k, l = g[0];
                    g = g[1];
                    var m = 1 + (a.ja[l] ? a.ja[l][g] : 0);
                    z(a.ja, (h = {}, h[l] = (k = {}, k[g] = m, k), h))
                }, b), a.pf && (a.hb || b.length) && ((c = Aa(a.l, a.kc)) && c.params("__ym", "phc", (f = {}, f.clientId = a.Eb, f.orderId = a.Pb, f.service_id = a.Xf, f.phones = a.ja, f.performance = a.Aa, f)), a.hb = !1))
            }

            function Ln(a) {
                a = fb(a);
                if (!a) return "";
                a = a("video");
                try {
                    var c = Fa("canPlayType", a),
                        b = wc(function(d) {
                            return A(w(Q, Fa("concat", d + "; codecs=")), Mn)
                        }, Vh);
                    return A(c, Vh.concat(b))
                } catch (d) {
                    return "canPlayType"
                }
            }

            function Nn(a) {
                var c = n(a, "matchMedia");
                if (c && Ea("matchMedia", c)) {
                    var b = Fa("matchMedia", a);
                    return N(function(d, e) {
                        d[e] = b("(" + e + ")");
                        return d
                    }, {}, On)
                }
            }

            function Bn(a) {
                return N(function(c, b) {
                    var d = b[0],
                        e =
                        b[1];
                    c[d + " precision"] = n(e, "precision") || "n";
                    c[d + " precision rangeMin"] = n(e, "rangeMin") || "n";
                    c[d + " precision rangeMax"] = n(e, "rangeMax") || "n";
                    return c
                }, {}, [
                    ["webgl vertex shader high float", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_FLOAT)],
                    ["webgl vertex shader medium", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_FLOAT)],
                    ["webgl vertex shader low float", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_FLOAT)],
                    ["webgl fragment shader high float", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,
                        a.HIGH_FLOAT)],
                    ["webgl fragment shader medium float", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_FLOAT)],
                    ["webgl fragment shader low float", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_FLOAT)],
                    ["webgl vertex shader high int", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_INT)],
                    ["webgl vertex shader medium int", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_INT)],
                    ["webgl vertex shader low int", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_INT)],
                    ["webgl fragment shader high int",
                        a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_INT)
                    ],
                    ["webgl fragment shader medium int", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_INT)],
                    ["webgl fragment shader low int precision", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_INT)]
                ])
            }

            function An(a, c) {
                return [function() {
                    var b = c.createBuffer();
                    b && c.getParameter && Ea("getParameter", c.getParameter) || Bf();
                    c.bindBuffer(c.ARRAY_BUFFER, b);
                    var d = new a.Float32Array(Pn);
                    c.bufferData(c.ARRAY_BUFFER, d, c.STATIC_DRAW);
                    b.Wh = 3;
                    b.ii = 3;
                    d = c.createProgram();
                    var e = c.createShader(c.VERTEX_SHADER);
                    d && e || Bf();
                    return {
                        ie: d,
                        ej: e,
                        dj: b
                    }
                }, function(b) {
                    var d = b.ie,
                        e = b.ej;
                    c.shaderSource(e, "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}");
                    c.compileShader(e);
                    c.attachShader(d, e);
                    (d = c.createShader(c.FRAGMENT_SHADER)) || Bf();
                    return z(b, {
                        lh: d
                    })
                }, function(b) {
                    var d = b.ie,
                        e = b.lh;
                    c.shaderSource(e, "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}");
                    c.compileShader(e);
                    c.attachShader(d, e);
                    c.linkProgram(d);
                    c.useProgram(d);
                    return b
                }, function(b) {
                    var d = b.ie;
                    b = b.dj;
                    d.cj = c.getAttribLocation(d, "attrVertex");
                    d.ki = c.getUniformLocation(d, "uniformOffset");
                    c.enableVertexAttribArray(d.Lj);
                    c.vertexAttribPointer(d.cj, b.Wh, c.FLOAT, !1, 0, 0);
                    c.uniform2f(d.ki, 1, 1);
                    c.drawArrays(c.TRIANGLE_STRIP, 0, b.ii);
                    return c.canvas
                }]
            }

            function zn(a, c) {
                if (!O(a.Float32Array)) return !1;
                var b = n(c, "canvas");
                if (!b || !Ea("toDataUrl", b.toDataURL)) return !1;
                try {
                    c.createBuffer()
                } catch (d) {
                    return !1
                }
                return !0
            }

            function wf(a, c) {
                c.clearColor(0, 0, 0, 1);
                c.enable(c.DEPTH_TEST);
                c.depthFunc(c.LEQUAL);
                c.clear(c.COLOR_BUFFER_BIT | c.DEPTH_BUFFER_BIT);
                return "[" + n(a, "0") + ", " + n(a, "1") + "]"
            }

            function Qn(a, c) {
                if (n(c, "settings.ins")) {
                    var b = J(a);
                    if (!b.C("scip")) {
                        var d = Qa(a),
                            e = ja(a)(qb),
                            f = pe(d.C("sci"));
                        if (!(f && 1440 >= e - f)) {
                            f = wa(a, "ci");
                            var g = ["sync.cook.int"],
                                h = function(l) {
                                    l = b.C("scip", "") + l;
                                    b.D("scip", l)
                                },
                                k = u("a", h);
                            b.D("scip", "0");
                            return f({
                                ba: {
                                    ha: g,
                                    Qa: 3E3,
                                    Bb: !0
                                }
                            }, ["https://an.yandex.ru/sync_cookie"]).then(function(l) {
                                l =
                                    n(l.Rc, "CookieMatchUrls");
                                if (R(l) && Sa(l)) {
                                    h("1");
                                    var m = wa(a, "c");
                                    l = A(function(p, q) {
                                        return m({
                                            ba: {
                                                ha: g,
                                                Qa: 3E3
                                            }
                                        }, ["https://" + p])["catch"](w(u("b", h), u("" + q, h)))
                                    }, ha(ia, l));
                                    return K.all(l)
                                }
                                k()
                            }, k).then(function() {
                                var l = b.C("scip");
                                !l || eb(l, "a") || eb(l, "b") || (d.D("sci", e), h("2"))
                            }, D)
                        }
                    }
                }
            }

            function Wh(a) {
                return {
                    N: function(c, b) {
                        if (!c.K) return b();
                        var d = J(a).C("fid");
                        !Xh && d && (me(c, "fid", d), Xh = !0);
                        return b()
                    }
                }
            }

            function Rn(a, c) {
                var b = a.document;
                if (I(b.readyState, ["interactive", "complete"])) Tb(a, c);
                else {
                    var d =
                        fa(a),
                        e = d.F,
                        f = d.yb,
                        g = function() {
                            f(b, ["DOMContentLoaded"], g);
                            f(a, ["load"], g);
                            c()
                        };
                    e(b, ["DOMContentLoaded"], g);
                    e(a, ["load"], g)
                }
            }

            function Cf(a) {
                return {
                    N: function(c, b) {
                        var d = c.K;
                        if (d) {
                            var e = J(a).C("adBlockEnabled");
                            e && d.D("adb", e)
                        }
                        b()
                    }
                }
            }

            function Sn(a) {
                var c = E(a, "i.clch", Tn);
                fa(a).F(a.document, ["click"], u(a, c), {
                    passive: !1
                });
                return function(b) {
                    var d = Ga.Sa,
                        e = a.Ya[Ga.jc],
                        f = !!e._informer;
                    e._informer = z({
                        domain: "informer.yandex.ru"
                    }, b);
                    f || Mc(a, {
                        src: d + "//informer.yandex.ru/metrika/informer.js"
                    })
                }
            }

            function Un(a,
                c) {
                var b = Qa(a),
                    d = b.C,
                    e = b.D;
                if ("" === d("cc")) {
                    e("cc", 0);
                    var f = ja(a),
                        g = J(a);
                    wa(a, "6", c)({
                        ba: {
                            Bb: !0,
                            Je: !1
                        }
                    }, ["https://mc.yandex.md/cc"]).then(function(h) {
                        h = n(h.Rc, "c");
                        e("cc", h + "&" + f(qb));
                        g.D("cc", h)
                    })["catch"](function(h) {
                        var k = f(qb);
                        e("cc", "&" + k);
                        Rc(a, "cc", h)
                    })
                }
            }

            function qe(a, c) {
                if (!c) return !1;
                var b = S(a);
                return (new RegExp(c)).test("" + b.pathname + b.hash + b.search)
            }

            function Vn(a, c) {
                return pa(c, function(b) {
                    var d = n(b, "settings.dr");
                    return {
                        Tg: Wn(a, d),
                        isEnabled: n(b, "settings.auto_goals")
                    }
                })
            }

            function Xn(a, c,
                b, d, e) {
                b = Df(a.document.body, b);
                d = Df(a.document.body, d);
                I(e.target, [b, d]) && Ef(a, c)
            }

            function Yh(a, c, b, d) {
                (b = Yn(a, d, b)) && Ef(a, c, b)
            }

            function Zh(a, c) {
                var b = $h(a, c);
                return Zn(a, b)
            }

            function $h(a, c) {
                var b = Df(a.document.body, c);
                return b ? $n(a, b) : ""
            }

            function Ef(a, c, b) {
                if (c = Aa(a, c)) a = td(["dr", b || "" + Xa(a, 10, 99)]), c.params(td(["__ym", a]))
            }

            function Df(a, c) {
                var b = null;
                try {
                    b = c ? dc(c, a) : b
                } catch (d) {}
                return b
            }

            function ai(a) {
                a = Ca(Rh(a));
                return A(function(c) {
                    c = c.charCodeAt(0).toString(2);
                    return bi("0", 8, c)
                }, a)
            }

            function $n(a,
                c) {
                if (!c) return "";
                var b = [],
                    d = n(a, "document");
                pd(a, c, function(e) {
                    if (e.nodeType === d.TEXT_NODE) var f = e.textContent;
                    else e instanceof a.HTMLImageElement ? f = e.alt : e instanceof a.HTMLInputElement && (f = e.value);
                    (f = f && ab(f)) && b.push(f)
                });
                return 0 === b.length ? "" : G(" ", b)
            }

            function ao(a, c, b) {
                a = Oa(b);
                b = a[1];
                "track" === a[0] && c({
                    version: "0",
                    rc: b
                })
            }

            function bo(a, c, b) {
                if (b) {
                    var d = b.version;
                    (b = n(co, d + "." + b.rc)) && (c && I(b, eo) || a("ym-" + b + "-" + d))
                }
            }

            function fo(a, c, b) {
                if ("rt" === b) return "https://" + ci(a, c) + ".mc.yandex.ru/watch/3/1";
                if ("mf" === b) {
                    b = S(a);
                    b = re(b.protocol + "//" + b.hostname + b.pathname);
                    c = sd(a, c);
                    var d = "";
                    do d += Xa(a); while (d.length < c.length);
                    d = d.slice(0, c.length);
                    a = "";
                    for (var e = 0; e < c.length; e += 1) a += (c.charCodeAt(e) + d.charCodeAt(e) - 96) % 10;
                    a = [d, a];
                    return "https://adstat.yandex.ru/track?service=metrika&id=" + a[1] + "&mask=" + a[0] + "&ref=" + b
                }
            }

            function go(a, c, b) {
                var d, e = Ff(c).Rb;
                return wa(a, "pi", c)({
                    K: Ja((d = {}, d[e] = 1, d))
                }, [b])
            }

            function ho(a, c, b) {
                return new K(function(d, e) {
                    if (di(a, se, "isp")) {
                        var f = D,
                            g = function(h) {
                                ("1" === h ? d : e)();
                                f();
                                ei(se, "isp")
                            };
                        f = fa(a).F(a, ["message"], C([b, g], E(a, "isp.stat.m", io)));
                        T(a, g, 1500)
                    } else e()
                })
            }

            function io(a, c, b) {
                var d = n(b, "data");
                if (ia(d)) {
                    var e = d.split("*");
                    d = e[0];
                    var f = e[1];
                    e = e[2];
                    "sc.frame" === d && b.source ? b.source.postMessage("sc.images*" + a, "*") : "sc.image" === d && f === a && c(e)
                }
            }

            function jo(a, c) {
                var b = Qa(a),
                    d = "wv2rf:" + L(c),
                    e = c.fc,
                    f = Gf(a),
                    g = b.C(d),
                    h = c.Wi;
                return X(f) || Wa(g) ? Ha(function(k, l) {
                    pa(c, function(m) {
                        var p = !!n(m, "settings.webvisor.forms");
                        p = !n(m, "settings.x3") && p;
                        f = Gf(a) || n(m, "settings.eu");
                        b.D(d, sb(p));
                        l({
                            fc: e,
                            Md: !!f,
                            Df: p,
                            gg: h
                        })
                    })
                }) : Hf({
                    fc: e,
                    Md: f,
                    Df: !!Ia(g),
                    gg: h
                })
            }

            function ko() {
                var a = N(function(c, b) {
                    c[b[0]] = {
                        gd: 0,
                        Dg: 1 / b[1]
                    };
                    return c
                }, {}, [
                    ["blur", .0034],
                    ["change", .0155],
                    ["click", .01095],
                    ["deviceRotation", 2E-4],
                    ["focus", .0061],
                    ["mousemove", .5132],
                    ["scroll", .4795],
                    ["selection", .0109],
                    ["touchcancel", 2E-4],
                    ["touchend", .0265],
                    ["touchforcechange", .0233],
                    ["touchmove", .1442],
                    ["touchstart", .027],
                    ["zoom", .0014]
                ]);
                return {
                    zg: function(c) {
                        if (c.length) return {
                            type: "activity",
                            data: N(function(b, d) {
                                var e =
                                    a[d];
                                return Math.round(b + e.gd * e.Dg)
                            }, 0, ea(a))
                        }
                    },
                    li: function(c) {
                        c && (c = a[c.data.type || c.event]) && (c.gd += 1)
                    }
                }
            }

            function lo(a) {
                return {
                    nh: function() {
                        var c = a.document.querySelector("base[href]");
                        return c ? c.getAttribute("href") : null
                    },
                    ph: function() {
                        if (a.document.doctype) {
                            var c = z({
                                    name: "html",
                                    publicId: "",
                                    systemId: ""
                                }, a.document.doctype),
                                b = c.publicId,
                                d = c.systemId;
                            return "<!DOCTYPE " + G("", [c.name, b ? ' PUBLIC "' + b + '"' : "", !b && d ? " SYSTEM" : "", d ? ' "' + d + '"' : ""]) + ">"
                        }
                        return null
                    }
                }
            }

            function mo(a, c, b) {
                var d = ud(a),
                    e = fa(a),
                    f = rb(a),
                    g = c.Ad(),
                    h = !n(a, "postMessage") || f && !n(a, "parent.postMessage"),
                    k = u(d, Q);
                if (h) {
                    if (!g) return T(a, H(d.R, d, "i", {
                        va: !1
                    }), 10), {
                        zd: k,
                        Qf: D,
                        stop: D
                    };
                    Va(Ta())
                }
                d.F(["sr"], function(r) {
                    var t, y = fi(a, r.source);
                    y && If(a, r.source, (t = {}, t.type = "\u043d", t.frameId = c.sa().Z(y), t))
                });
                d.F(["sd"], function(r) {
                    var t = r.data;
                    r = r.source;
                    (a === r || fi(a, r)) && d.R("sdr", {
                        data: t.data,
                        frameId: t.frameId
                    })
                });
                if (f && !g) {
                    var l = !1,
                        m = 0,
                        p = function() {
                            var r;
                            If(a, a.parent, (r = {}, r.type = "sr", r));
                            m = T(a, p, 100, "if.i")
                        };
                    p();
                    var q = function(r) {
                        d.ga(["\u043d"],
                            q);
                        ka(a, m);
                        var t = Sc(a, r.origin).host;
                        l || r.source !== a.parent || !r.data.frameId || "about:blank" !== S(a).host && !I(t, b) || (l = !0, d.R("i", {
                            frameId: r.data.frameId,
                            va: !0
                        }))
                    };
                    d.F(["\u043d"], q);
                    T(a, function() {
                        d.ga(["\u043d"], q);
                        ka(a, m);
                        l || (l = !0, d.R("i", {
                            va: !1
                        }))
                    }, 2E3, "if.r")
                }
                e = e.F(a, ["message"], function(r) {
                    var t = zb(a, r.data);
                    t && t.type && I(t.type, no) && d.R(t.type, {
                        data: t,
                        source: r.source,
                        origin: r.origin
                    })
                });
                return {
                    zd: k,
                    Qf: function(r) {
                        var t;
                        return If(a, a.parent, (t = {}, t.frameId = c.Ad(), t.data = r, t.type = "sd", t))
                    },
                    stop: e
                }
            }

            function fi(a, c) {
                try {
                    return tb(w(U("contentWindow"), Ba(c)), Ca(a.document.querySelectorAll("iframe")))
                } catch (b) {
                    return null
                }
            }

            function If(a, c, b) {
                c || Va(Ta());
                a = Ab(a, b);
                c.postMessage(a, "*")
            }

            function gi() {
                return hc() + hc() + "-" + hc() + "-" + hc() + "-" + hc() + "-" + hc() + hc() + hc()
            }

            function hc() {
                return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
            }

            function oo(a, c) {
                if (ia(c)) return c;
                var b = a.textContent;
                if (ia(b)) return b;
                b = a.data;
                if (ia(b)) return b;
                b = a.nodeValue;
                return ia(b) ? b : ""
            }

            function po(a, c, b, d, e) {
                void 0 ===
                    d && (d = {});
                void 0 === e && (e = Ma(c));
                var f = z(N(function(h, k) {
                    h[k.name] = k.value;
                    return h
                }, {}, Ca(c.attributes)), d);
                z(f, qo(c, e, f));
                var g = (d = Bb(function(h, k) {
                    var l = k[0],
                        m = te(a, c, l, k[1], b, e),
                        p = m.value;
                    ca(p) ? delete f[l] : f[l] = p;
                    return h || m.qb
                }, !1, La(f))) && Nc(c);
                g && (f.width = g.width, f.height = g.height);
                return {
                    qb: d,
                    Ag: f
                }
            }

            function qo(a, c, b) {
                var d = {};
                Jf(a) ? d.value = a.value || b.value : "IMG" !== c || b.src || (d.src = "");
                return d
            }

            function te(a, c, b, d, e, f) {
                void 0 === f && (f = Ma(c));
                var g = {
                    qb: !1,
                    value: d
                };
                if (Jf(c)) "value" === b ? !ca(d) &&
                    "" !== d && (b = e.Md, f = e.Df, e = vd(a, c), f ? (b = Tc(a, c, b), a = b.rb, c = b.ib, b = b.Wa, g.qb = !c && (e || a)) : (g.qb = e, b = !(c && ic("ym-record-keys", c))), b || e) && (d = "" + d, g.value = 0 < d.length ? hi("\u2022", d.length) : "") : "checked" === b && I((c.getAttribute("type") || "").toLowerCase(), ro) ? g.value = c.checked ? "checked" : null : so.test(b) && Kf(a, c) && (g.value = null);
                else if ("IMG" === f && "src" === b)(e = vd(a, c)) ? (g.qb = e, g.value = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=") : g.value =
                    (c.getAttribute("srcset") ? c.currentSrc : "") || c.src;
                else if ("A" === f && "href" === b) g.value = d ? "#" : "";
                else if (I(b, ["srcset", "integrity", "crossorigin", "password"]) || 2 < b.length && 0 === ib(b, "on") || "IFRAME" === f && "src" === b || "SCRIPT" === f && I(b, ["src", "type"])) g.value = null;
                return g
            }

            function Lf(a, c, b, d) {
                void 0 === d && (d = "wv2");
                return {
                    H: function(e, f) {
                        return E(a, d + "." + b + "." + f, e, void 0, c)
                    }
                }
            }

            function to(a, c, b, d, e) {
                function f() {
                    l && l.stop()
                }
                if (!c.Ab) return K.resolve(D);
                var g = wa(a, "4", c),
                    h = {
                        K: Ja()
                    },
                    k = new uo(a, b, function(m,
                        p, q) {
                        if (!g) return K.resolve();
                        var r = "wv-data=" + md(m, !0),
                            t = E(a, "m.n.m.s");
                        p = {};
                        p["wv-part"] = "" + q;
                        q = m.length;
                        for (var y = 0, F = 255, P = 255, M, ma, xa; q;) {
                            M = 21 < q ? 21 : q;
                            q -= M;
                            do ma = "string" === typeof m ? m.charCodeAt(y) : m[y], y += 1, 255 < ma && (xa = ma >> 8, ma &= 255, ma ^= xa), F += ma, P += F; while (--M);
                            F = (F & 255) + (F >> 8);
                            P = (P & 255) + (P >> 8)
                        }
                        m = (F & 255) + (F >> 8) << 8 | (P & 255) + (P >> 8);
                        return g(z({}, h, {
                            ba: {
                                da: r
                            },
                            J: (p["wv-check"] = "" + (65535 === m ? 0 : m), p["wv-type"] = b.type, p)
                        }), c)["catch"](t)
                    }),
                    l = vo(a, k, d, e);
                return pa(c, function(m) {
                    m && J(a).D("isEU", n(m,
                        "settings.eu"));
                    J(a).C("oo") || l && ii(a, m) && l.start();
                    return f
                })
            }

            function vo(a, c, b, d) {
                var e = a.document,
                    f = [],
                    g = fa(a),
                    h = ":submit" + Math.random(),
                    k = [],
                    l = H(c.flush, c),
                    m = sa(function(r, t) {
                        E(a, "hfv." + r, function() {
                            try {
                                var y = t.type
                            } catch (F) {
                                return
                            }
                            y = I(y, d);
                            c.push(t, {
                                type: r
                            });
                            y && l()
                        })()
                    }),
                    p = E(a, "sfv", function() {
                        var r = b(a),
                            t = wo(a);
                        x(function(y) {
                            f.push(g.F(y.target, [y.event], m(y.type)))
                        }, r);
                        x(function(y) {
                            f.push(g.F(y.target, [y.event], E(a, "hff." + y.type + "." + y.event, function(F) {
                                x(Ha({
                                    l: a,
                                    oa: F,
                                    flush: l
                                }), y.O)
                            })))
                        }, t);
                        k = ji(a, "form", e);
                        e.attachEvent && (r = ji(a, "form *", e), x(function(y) {
                            f.push(g.F(y, ["submit"], m("form")))
                        }, k), x(function(y) {
                            Mf(y) && f.push(g.F(y, ["change"], m("formInput")))
                        }, r));
                        x(function(y) {
                            var F = y.submit;
                            if (O(F) || "object" === typeof F && xo.test("" + F)) y[h] = F, y.submit = E(a, "fv", function() {
                                var P = {
                                    target: y,
                                    type: "submit"
                                };
                                m("document")(P);
                                return y[h]()
                            })
                        }, k)
                    }),
                    q = E(a, "ufv", function() {
                        x(la, f);
                        x(function(r) {
                            r && (r.submit = r[h])
                        }, k);
                        c.flush()
                    });
                return {
                    start: p,
                    stop: q
                }
            }

            function yo(a, c) {
                var b = ha(function(e) {
                        return 0 <
                            e.O.length
                    }, c),
                    d = ki({
                        target: a.document,
                        type: "document"
                    });
                return A(w(Q, d, zo(a)), b)
            }

            function li(a, c) {
                var b = a.l,
                    d = [],
                    e = c.form;
                if (!c[Ya] && e) {
                    var f = e.elements;
                    e = e.length;
                    for (var g = 0; g < e; g += 1) {
                        var h = f[g];
                        ue(h) && !h[Ya] && ra(d, yc(b, h))
                    }
                } else ra(d, yc(b, c));
                return d
            }

            function Nf(a) {
                if (wd) {
                    wd = !1;
                    var c = Cb(a.l),
                        b = [];
                    kb(a.l, b, 15) ? a = [] : (V(b, c), a = b);
                    return a
                }
            }

            function mi(a) {
                if (!wd) {
                    wd = !0;
                    a = Cb(a.l);
                    var c = [];
                    Vb(c, 14);
                    V(c, a);
                    return c
                }
            }

            function Ao(a, c, b) {
                var d = c[Ya];
                if (d) {
                    a: {
                        var e = Cb(a),
                            f = c[Ya];
                        if (0 < f) {
                            var g = [];
                            c = Of(a,
                                c);
                            var h = zc[f],
                                k = c[0] + "x" + c[1],
                                l = c[2] + "x" + c[3];
                            if (k !== h.zf) {
                                h.zf = k;
                                if (kb(a, g, 9)) {
                                    a = [];
                                    break a
                                }
                                V(g, e);
                                V(g, f);
                                V(g, c[0]);
                                V(g, c[1])
                            }
                            if (l !== h.size) {
                                h.size = l;
                                if (kb(a, g, 10)) {
                                    a = [];
                                    break a
                                }
                                V(g, e);
                                V(g, f);
                                V(g, c[2]);
                                V(g, c[3])
                            }
                            if (g.length) {
                                a = g;
                                break a
                            }
                        }
                        a = []
                    }
                    ra(b, a)
                }
                return d
            }

            function Tc(a, c, b) {
                void 0 === b && (b = !1);
                if (!c) return {
                    Wa: !1,
                    ib: !1,
                    rb: !1
                };
                var d = c.getAttribute("type") || c.type;
                if ("button" === d) return {
                    Wa: !1,
                    ib: !1,
                    rb: !1
                };
                var e = ha(ni, [c.className, c.id, c.name]),
                    f = c && ic("ym-record-keys", c);
                d = d && I(d, oi) || $a(gb(Bo),
                    e);
                var g;
                (g = d) || (g = c.placeholder, g = $a(gb(Co), e) || ni(g) && Do.test(g || ""));
                e = g;
                return {
                    Wa: !f && (Pf(a, c) || e && b || e && !d && !b),
                    ib: f,
                    rb: e
                }
            }

            function Pf(a, c) {
                return Kf(a, c) || xd(a, c) ? !0 : vd(a, c)
            }

            function ni(a) {
                return !!(a && 2 < a.length)
            }

            function Jf(a) {
                try {
                    var c = Ma(a);
                    if (I(c, Qf)) {
                        if ("INPUT" === c) {
                            var b = a.type;
                            return !b || I(b.toLocaleLowerCase(), Eo)
                        }
                        return !0
                    }
                } catch (d) {}
                return !1
            }

            function pi(a, c) {
                return c && ic("(ym-disable-submit|-metrika-noform)", c)
            }

            function Fo(a, c) {
                return G("", A(function(b) {
                    return a.isNaN(b) ? Go.test(b) ?
                        (b = b.toUpperCase() === b ? Ho : Io, String.fromCharCode(Xa(a, b[0], b[1]))) : b : "" + Xa(a, 0, 9)
                }, c.split("")))
            }

            function vd(a, c) {
                if (ca(c)) return !1;
                if (Rf(c)) {
                    var b = c.parentNode;
                    return (ca(b) ? 0 : 11 === b.nodeType) ? !1 : vd(a, c.parentNode)
                }
                b = qi(a);
                if (!b) return !1;
                var d = b.call(c, ".ym-hide-content,.ym-hide-content *");
                return d && b.call(c, ".ym-show-content,.ym-hide-content .ym-show-content *") ? !1 : d
            }

            function ii(a, c) {
                var b = Uc(a),
                    d = b.C("visorc");
                I(d, ["w", "b"]) || (d = "");
                ri(a) && si(a, ve, "visorc") && !Jo.test(lb(a) || "") || (d = "b");
                var e =
                    n(c, "settings.webvisor.recp");
                if (!a.isFinite(e) || 0 > e || 1 < e) d = "w";
                d || (d = J(a).C("hitId") % 1E4 / 1E4 < e ? "w" : "b");
                b.D("visorc", d, 30);
                return "w" === d
            }

            function Ko(a, c) {
                return {
                    N: function(b, d) {
                        b.K.Wb("we", Ob(c.Ab));
                        ti(a, c, b, "rn");
                        d()
                    }
                }
            }

            function ui(a, c, b) {
                if (vi.isEnabled(a)) return new vi(a, c);
                if (wi.isEnabled(a)) return new wi(a, b)
            }

            function xi(a, c) {
                var b = c[1][3],
                    d = 0,
                    e = new a.Uint8Array(c[0]);
                return ec([b], function(f, g) {
                    if (!f) return e;
                    f[0](a, f[2], e, d);
                    d += f[1];
                    g.push(f[3]);
                    return e
                })
            }

            function yi(a, c, b) {
                a = c(b);
                c = [D, 0,
                    0
                ];
                var d = [0, c, c, void 0];
                return ec(a, function(e, f) {
                    var g = e[0],
                        h = e[1],
                        k = e[2];
                    if (0 === g) return k(d, h), d;
                    if (void 0 === h || null === h) return d;
                    var l = g >> 3;
                    if (g & 1) Ac(d, Y(l)), h = k(h), l & 2 && Ac(d, Y(h[1])), Ac(d, h);
                    else if (g & 4)
                        for (g = h.length - 1; 0 <= g;) {
                            var m = k(h[g]);
                            m.push([0, 0, Sf]);
                            m.push([0, Y(l), Ac]);
                            m.unshift([0, 0, Tf]);
                            ra(f, m);
                            --g
                        } else if (g & 2) {
                            k = e[2];
                            var p = e[3],
                                q = e[4],
                                r = e[5],
                                t = ea(h);
                            for (g = t.length - 1; 0 <= g;) m = t[g], m = [
                                [0, 0, Tf],
                                [q, h[m], r],
                                [k, m, p],
                                [0, 0, Sf],
                                [0, Y(l), Ac]
                            ], ra(f, m), --g
                        } else m = k(h), m.push([0, 0, Sf]), m.push([0,
                            Y(l), Ac
                        ]), m.unshift([0, 0, Tf]), ra(f, m);
                    return d
                })
            }

            function Tf(a) {
                var c = a[1],
                    b = a[0],
                    d = a[2];
                a[3] ? (a[0] = a[3][0], a[1] = a[3][1], a[2] = a[3][2], a[3] = a[3][3]) : (a[0] = 0, a[1] = [D, 0, 0], a[2] = a[1]);
                Ac(a, Y(b));
                b && (a[2][3] = c[3], a[2] = d, a[0] += b)
            }

            function Sf(a) {
                a[3] = [a[0], a[1], a[2], a[3]];
                a[1] = [D, 0, 0];
                a[2] = a[1];
                a[0] = 0
            }

            function Ac(a, c) {
                a[0] += c[1];
                a[2][3] = c;
                a[2] = c
            }

            function zi(a) {
                return [
                    [1857, a.partsTotal, Y],
                    [1793, a.activity, Y],
                    [1744, a.textChangeMutation, Lo],
                    [1680, a.removedNodesMutation, Mo],
                    [1616, a.addedNodesMutation, No],
                    [1552,
                        a.attributesChangeMutation, Oo
                    ],
                    [1488, a.publishersHeader, Po],
                    [1424, a.articleInfo, Qo],
                    [1360, a.focusEvent, Ro],
                    [1296, a.fatalErrorEvent, So],
                    [1232, a.deviceRotationEvent, To],
                    [1168, a.keystrokesEvent, Uo],
                    [1104, a.resizeEvent, Vo],
                    [1040, a.zoomEvent, Wo],
                    [976, a.touchEvent, Xo],
                    [912, a.changeEvent, Yo],
                    [848, a.selectionEvent, Zo],
                    [784, a.scrollEvent, $o],
                    [720, a.mouseEvent, ap],
                    [656, a.Ij, bp],
                    [592, a.page, cp],
                    [513, a.end, Bc],
                    [449, a.partNum, Y],
                    [401, a.chunk, dp],
                    [257, a.frameId, ta],
                    [193, a.event, Y],
                    [129, a.type, Y],
                    [65, a.stamp, Y]
                ]
            }

            function ep(a) {
                return [
                    [84, a.Ai, zi]
                ]
            }

            function fp(a) {
                return [
                    [129, a.position, ta],
                    [81, a.name, da]
                ]
            }

            function gp(a) {
                return [
                    [81, a.name, da]
                ]
            }

            function hp(a) {
                return [
                    [81, a.name, da]
                ]
            }

            function Qo(a) {
                return [
                    [593, a.updateDate, da],
                    [532, a.rubric, fp],
                    [449, a.chars, ta],
                    [401, a.publicationDate, da],
                    [340, a.topics, gp],
                    [276, a.authors, hp],
                    [209, a.pageTitle, da],
                    [145, a.pageUrlCanonical, da],
                    [65, a.id, Y]
                ]
            }

            function ip(a) {
                return [
                    [513, a.chars, ta],
                    [489, a.maxScrolled, yd],
                    [385, a.involvedTime, ta],
                    [321, a.height, ta],
                    [257, a.width, ta],
                    [193,
                        a.y, ta
                    ],
                    [129, a.x, ta],
                    [65, a.id, Y]
                ]
            }

            function Po(a) {
                return [
                    [129, a.involvedTime, ta],
                    [84, a.articleMeta, ip]
                ]
            }

            function Ro(a) {
                return [
                    [65, a.target, ta]
                ]
            }

            function So(a) {
                return [
                    [209, a.stack, da],
                    [145, a.Yg, da],
                    [81, a.code, da]
                ]
            }

            function To(a) {
                return [
                    [193, a.orientation, ta],
                    [129, a.height, Y],
                    [65, a.width, Y]
                ]
            }

            function Uo(a) {
                return [
                    [84, a.keystrokes, jp]
                ]
            }

            function jp(a) {
                return [
                    [273, a.modifier, da],
                    [193, a.isMeta, Bc],
                    [145, a.key, da],
                    [65, a.id, Y]
                ]
            }

            function Vo(a) {
                return [
                    [257, a.pageHeight, Y],
                    [193, a.pageWidth, Y],
                    [129, a.height, Y],
                    [65, a.width, Y]
                ]
            }

            function Wo(a) {
                return [
                    [193, a.y, ta],
                    [129, a.x, ta],
                    [105, a.level, yd]
                ]
            }

            function Xo(a) {
                return [
                    [129, a.target, ta],
                    [84, a.touches, kp]
                ]
            }

            function kp(a) {
                return [
                    [297, a.force, yd],
                    [233, a.y, yd],
                    [169, a.x, yd],
                    [81, a.id, da]
                ]
            }

            function Yo(a) {
                return [
                    [257, a.target, ta],
                    [193, a.hidden, Bc],
                    [129, a.checked, Bc],
                    [81, a.value, da]
                ]
            }

            function Zo(a) {
                return [
                    [257, a.endNode, Y],
                    [193, a.startNode, Y],
                    [129, a.end, ta],
                    [65, a.start, ta]
                ]
            }

            function $o(a) {
                return [
                    [257, a.target, ta],
                    [193, a.page, Bc],
                    [129, a.y, ta],
                    [65, a.x, ta]
                ]
            }

            function ap(a) {
                return [
                    [193,
                        a.target, ta
                    ],
                    [129, a.y, Y],
                    [65, a.x, Y]
                ]
            }

            function bp(a) {
                return [
                    [148, a.changes, lp],
                    [65, a.target, ta]
                ]
            }

            function lp(a) {
                return [
                    [193, a.index, Y],
                    [145, a.op, da],
                    [81, a.style, da]
                ]
            }

            function Lo(a) {
                return [
                    [209, a.value, da],
                    [129, a.index, Y],
                    [65, a.target, Y]
                ]
            }

            function Mo(a) {
                return [
                    [129, a.index, Y],
                    [69, a.nodes, ta]
                ]
            }

            function No(a) {
                return [
                    [129, a.index, Y],
                    [84, a.nodes, Ai]
                ]
            }

            function Oo(a) {
                return [
                    [210, a.attributes, 81, da, 145, da],
                    [129, a.index, Y],
                    [65, a.target, Y]
                ]
            }

            function cp(a) {
                return [
                    [852, a.content, Ai],
                    [785, a.tabId, da],
                    [705, a.recordStamp,
                        mp
                    ],
                    [656, a.location, np],
                    [592, a.viewport, Bi],
                    [528, a.screen, Bi],
                    [449, a.hasBase, Bc],
                    [401, a.base, da],
                    [337, a.referrer, da],
                    [273, a.ua, da],
                    [209, a.address, da],
                    [145, a.title, da],
                    [81, a.doctype, da]
                ]
            }

            function np(a) {
                return [
                    [209, a.path, da],
                    [145, a.protocol, da],
                    [81, a.host, da]
                ]
            }

            function Bi(a) {
                return [
                    [129, a.height, ta],
                    [65, a.width, ta]
                ]
            }

            function Ai(a) {
                return [
                    [513, a.hidden, Bc],
                    [449, a.prev, Y],
                    [385, a.next, Y],
                    [337, a.content, da],
                    [257, a.parent, Y],
                    [210, a.attributes, 81, da, 145, da],
                    [145, a.name, da],
                    [65, a.id, Y]
                ]
            }

            function da(a) {
                var c =
                    op({}, a, [], 0);
                return c ? [pp, c, a] : [Ci, 0, 0]
            }

            function dp(a) {
                return [qp, a.length, a]
            }

            function Bc(a) {
                return [Ci, 1, a ? 1 : 0]
            }

            function mp(a) {
                a = Di(a);
                var c = a[0],
                    b = a[1],
                    d = (b >>> 28 | c << 4) >>> 0;
                c >>>= 24;
                return [Ei, 0 === c ? 0 === d ? 16384 > b ? 128 > b ? 1 : 2 : 2097152 > b ? 3 : 4 : 16384 > d ? 128 > d ? 5 : 6 : 2097152 > d ? 7 : 8 : 128 > c ? 9 : 10, a]
            }

            function yd(a) {
                return [rp, 4, a]
            }

            function ta(a) {
                return 0 > a ? [Ei, 10, Di(a)] : Y(a)
            }

            function Y(a) {
                return [sp, 128 > a ? 1 : 16384 > a ? 2 : 2097152 > a ? 3 : 268435456 > a ? 4 : 5, a]
            }

            function sp(a, c, b, d) {
                for (a = c; 127 < a;) b[d++] = a & 127 | 128, a >>>= 7;
                b[d] = a
            }

            function Ci(a,
                c, b, d) {
                b[d] = c
            }

            function qp(a, c, b, d) {
                for (a = 0; a < c.length; ++a) b[d + a] = c[a]
            }

            function Fi(a) {
                return function(c, b, d, e) {
                    for (var f, g = 0, h = 0; h < b.length; ++h)
                        if (c = b.charCodeAt(h), 128 > c) a ? g += 1 : d[e++] = c;
                        else {
                            if (2048 > c) {
                                if (a) {
                                    g += 2;
                                    continue
                                }
                                d[e++] = c >> 6 | 192
                            } else {
                                if (55296 === (c & 64512) && 56320 === ((f = b.charCodeAt(h + 1)) & 64512)) {
                                    if (a) {
                                        g += 4;
                                        continue
                                    }
                                    c = 65536 + ((c & 1023) << 10) + (f & 1023);
                                    ++h;
                                    d[e++] = c >> 18 | 240;
                                    d[e++] = c >> 12 & 63 | 128
                                } else {
                                    if (a) {
                                        g += 3;
                                        continue
                                    }
                                    d[e++] = c >> 12 | 224
                                }
                                d[e++] = c >> 6 & 63 | 128
                            }
                            d[e++] = c & 63 | 128
                        }
                    return a ? g : e
                }
            }

            function rp(a,
                c, b, d) {
                return tp(a)(a, c, b, d)
            }

            function up(a, c, b, d) {
                var e = 0 > c ? 1 : 0;
                e && (c = -c);
                if (0 === c) zd(0 < 1 / c ? 0 : 2147483648, b, d);
                else if (a.isNaN(c)) zd(2143289344, b, d);
                else if (3.4028234663852886E38 < c) zd((e << 31 | 2139095040) >>> 0, b, d);
                else if (1.1754943508222875E-38 > c) zd((e << 31 | a.Math.round(c / 1.401298464324817E-45)) >>> 0, b, d);
                else {
                    var f = a.Math.floor(a.Math.log(c) / Math.LN2);
                    zd((e << 31 | f + 127 << 23 | Math.round(c * a.Math.pow(2, -f) * 8388608) & 8388607) >>> 0, b, d)
                }
            }

            function zd(a, c, b) {
                c[b] = a & 255;
                c[b + 1] = a >>> 8 & 255;
                c[b + 2] = a >>> 16 & 255;
                c[b + 3] = a >>>
                    24
            }

            function Ei(a, c, b, d) {
                a = c[0];
                for (c = c[1]; a;) b[d++] = c & 127 | 128, c = (c >>> 7 | a << 25) >>> 0, a >>>= 7;
                for (; 127 < c;) b[d++] = c & 127 | 128, c >>>= 7;
                b[d++] = c
            }

            function Di(a) {
                if (!a) return [0, 0];
                var c = 0 > a;
                c && (a = -a);
                var b = a >>> 0;
                a = (a - b) / 4294967296 >>> 0;
                c && (a = ~a >>> 0, b = ~b >>> 0, 4294967295 < ++b && (b = 0, 4294967295 < ++a && (a = 0)));
                return [a, b]
            }

            function ti(a, c, b, d) {
                var e, f = b.J;
                f.wmode = "0";
                f["wv-hit"] = f["wv-hit"] || "" + Cc(a);
                f["page-url"] = f["page-url"] || S(a).href;
                d && (f[d] = f[d] || "" + Xa(a));
                a = {
                    na: {
                        Ba: "webvisor/" + c.id
                    },
                    ba: z(b.ba || {}, {
                        $a: (e = {}, e["Content-Type"] =
                            "text/plain", e),
                        $c: "POST"
                    }),
                    J: f
                };
                z(b, a)
            }

            function vp(a, c) {
                return pa(c, function(b) {
                    var d = J(a),
                        e = d.C,
                        f = u("dSync", d.D);
                    L(c);
                    if (e("dSync", !1)) f(1);
                    else return f(!0), Gi(a, b, {
                        eb: c,
                        Rb: "s",
                        Rd: "ds",
                        Wc: f,
                        Li: function(g, h, k) {
                            var l = g.Rc;
                            g = g.host;
                            if (n(l, "settings")) return Va(Ta("ds.e"));
                            h = h(Z) - k;
                            k = g[1];
                            var m, p;
                            l = Ja((m = {}, m.di = l, m.dit = h, m.dip = k, m));
                            m = (p = {}, p["page-url"] = S(a).href, p);
                            return wa(a, "S", Hi)({
                                K: l,
                                J: m
                            }, Hi).then(u(10, f), E(a, "ds.rs"))
                        }
                    })
                })
            }

            function Gi(a, c, b) {
                var d, e = b.eb,
                    f = b.Wc;
                f = void 0 === f ? D : f;
                var g = ja(a),
                    h = wp(a, c.userData, e),
                    k = xp(a),
                    l = w(Ii, C([yp, zp], Ad))(a),
                    m = n(c, "settings.sbp");
                b.Wc = f;
                m && (b.data = z({}, m, (d = {}, d.c = e.id, d)));
                return k.length ? Ap(a, g, h, c, l, b).then(function() {
                    return Bp(a, k, h, g, l, b)
                }, D) : (f(2), K.resolve())
            }

            function xp(a) {
                var c = Bd(a);
                a = w(Uf, uc(["iPhone", "iPad"]))(a);
                return c ? Cp : a ? Dp : []
            }

            function Bp(a, c, b, d, e, f) {
                e = f.Li;
                var g = void 0 === e ? D : e,
                    h = f.Rd;
                e = f.Wc;
                var k = void 0 === e ? D : e,
                    l = d(Z);
                return Ep(a, c, f)(Ra(function(m) {
                    k(6);
                    x(function(p) {
                        p && Rc(a, h + ".s", p)
                    }, m);
                    m = d(qb);
                    b.D(h, m).then(u(7, k))
                }, function(m) {
                    k(8);
                    b.D(h, d(qb)).then(u(9, k));
                    g(m, d, l)
                }))
            }

            function Ap(a, c, b, d, e, f) {
                var g = f.Rd,
                    h = f.eb,
                    k = f.Wc;
                return new K(function(l, m) {
                    var p = b.C(g, 0);
                    p = parseInt("" + p, 10);
                    return c(qb) - p <= e.xe ? (k(3), m()) : Fp(a) ? l(void 0) : yf(d) ? (k(4), m()) : l(Gp(a, h)["catch"](w(we(u(5, k)), Va)))
                })
            }

            function Ep(a, c, b) {
                var d = b.Rb,
                    e = b.data,
                    f = wa(a, d, b.eb);
                a = z({}, Ji);
                e && z(a.J, e);
                return Hp(A(function(g) {
                    return Ip(f(z({
                        ba: {
                            Je: !1,
                            le: !0
                        }
                    }, Ji), A(function(h) {
                        var k = h[1],
                            l = h[2];
                        h = G("", A(function(m) {
                            return String.fromCharCode(m.charCodeAt(0) + 10)
                        }, h[0].split("")));
                        return "http" + (l ? "s" : "") + "://" + h + ":" + k + "/" + Jp[d]
                    }, g)).then(function(h) {
                        return z({}, h, {
                            host: g[h.ig]
                        })
                    }))
                }, c))
            }

            function wp(a, c, b) {
                var d = c || {},
                    e = wa(a, "u", b),
                    f = Qa(a);
                return {
                    C: function(g, h) {
                        return X(d[g]) ? f.C(g, h) : d[g]
                    },
                    D: function(g, h) {
                        var k, l = "" + h;
                        d[g] = l;
                        f.D(g, l);
                        return e({
                            J: (k = {}, k.key = g, k.value = l, k)
                        }, [Ga.Sa + "//" + jc + "/user_storage_set"], {})["catch"](E(a, "u.d.s.s"))
                    }
                }
            }

            function Kp(a) {
                return {
                    N: function(c, b) {
                        J(a).C("oo") || b()
                    }
                }
            }

            function Lp(a, c) {
                try {
                    var b = c[0];
                    var d = b[1]
                } catch (e) {
                    return function() {
                        return K.resolve()
                    }
                }
                return function(e) {
                    var f,
                        g = (f = {}, f["browser-info"] = Mp, f["page-url"] = a.location && "" + a.location.href, f);
                    return d && (e = Ab(a, e)) ? d(Np, {
                        ab: g,
                        ha: [],
                        da: "site-info=" + re(e)
                    })["catch"](D) : K.resolve()
                }
            }

            function Op(a, c) {
                var b = xe(function(d, e) {
                    return d[1].ea > e[1].ea ? 1 : -1
                }, La(ge));
                b = A(function(d) {
                    var e = d[0],
                        f = d[1].Pa;
                    d = Lb(c, e) && !ca(c[e]);
                    e = c[e] !== (f || Q)(void 0);
                    return sb(d && e)
                }, b);
                return ye(G("", b))
            }

            function Pp(a, c) {
                if (n(a, "disableYaCounter" + c.id) || n(a, "Ya.disableMetrica")) {
                    var b = L(c);
                    delete J(a).C("counters", {})[b];
                    Va(Ta("oo.e"))
                }
            }

            function Qp(a) {
                if (Cd(a)) return null;
                var c = Rp(a),
                    b = c.Cf;
                X(b) && (c.Cf = null, Sp(a).then(function(d) {
                    c.Cf = d
                }));
                return b ? 1 : null
            }

            function Tp(a, c, b) {
                b = b.J;
                if ((void 0 === b ? {} : b).nohit) return null;
                a = Dd(a);
                if (!a) return null;
                var d = b = null;
                n(a, "getEntriesByType") && (d = n(a.getEntriesByType("navigation"), "0")) && (b = Up);
                if (!b) {
                    var e = n(a, "timing");
                    e && (b = Vp, d = e)
                }
                if (!b) return null;
                a = Wp(a, d, b);
                c = L(c);
                c = Xp(c);
                return (c = Yp(c, a)) && G(",", c)
            }

            function Yp(a, c) {
                var b = a.length ? A(function(d, e) {
                    var f = c[e];
                    return f === d ? null : f
                }, a) : c;
                a.length = 0;
                x(w(Q, Fa("push", a)), c);
                return ha(Ba(null),
                    b).length === a.length ? null : b
            }

            function Wp(a, c, b) {
                return A(function(d) {
                    var e = d[0],
                        f = d[1];
                    if (O(e)) return e(a, c) || null;
                    if (1 === d.length) return c[e] ? Math.round(c[e]) : null;
                    var g;
                    !(g = c[e] && c[f]) && (g = 0 === c[e] && 0 === c[f]) && (g = d[1], g = !(Ki[d[0]] || Ki[g]));
                    if (!g) return null;
                    d = Math.round(c[e]) - Math.round(c[f]);
                    return 0 > d || 36E5 < d ? null : d
                }, b)
            }

            function ze(a, c) {
                try {
                    var b = c.localStorage.getItem(a);
                    return b && md(ie(b))
                } catch (d) {}
                return null
            }

            function ie(a) {
                for (var c = [], b = 0; b < a.length; b++) {
                    var d = a.charCodeAt(b);
                    128 > d ? c.push(d) :
                        (127 < d && 2048 > d ? c.push(d >> 6 | 192) : (c.push(d >> 12 | 224), c.push(d >> 6 & 63 | 128)), c.push(d & 63 | 128))
                }
                return c
            }

            function md(a, c) {
                void 0 === c && (c = !1);
                for (var b = a.length, d = b - b % 3, e = [], f = 0; f < d; f += 3) {
                    var g = (a[f] << 16) + (a[f + 1] << 8) + a[f + 2];
                    e.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [g >> 18 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [g >> 12 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [g >> 6 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [g &
                        63
                    ])
                }
                switch (b - d) {
                    case 1:
                        b = a[d] << 4;
                        e.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [b >> 6 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [b & 63], "=", "=");
                        break;
                    case 2:
                        b = (a[d] << 10) + (a[d + 1] << 2), e.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [b >> 12 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [b >> 6 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [b & 63], "=")
                }
                e = G("", e);
                return c ? Li(e, !0) : e
            }

            function Rh(a, c) {
                void 0 === c && (c = !1);
                var b = a,
                    d = "",
                    e = 0;
                if (!b) return "";
                for (c && (b = Li(b)); b.length % 4;) b += "=";
                do {
                    var f = kc("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", b.charAt(e++)),
                        g = kc("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", b.charAt(e++)),
                        h = kc("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", b.charAt(e++)),
                        k = kc("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", b.charAt(e++));
                    if (0 > f || 0 > g || 0 > h || 0 > k) return "";
                    var l =
                        f << 18 | g << 12 | h << 6 | k;
                    f = l >> 16 & 255;
                    g = l >> 8 & 255;
                    l &= 255;
                    d = 64 === h ? d + String.fromCharCode(f) : 64 === k ? d + String.fromCharCode(f, g) : d + String.fromCharCode(f, g, l)
                } while (e < b.length);
                return d
            }

            function Li(a, c) {
                void 0 === c && (c = !1);
                return a ? a.replace(c ? /[+/=]/g : /[-*_]/g, function(b) {
                    return Zp[b] || b
                }) : ""
            }

            function $p(a) {
                try {
                    var c = Sa(a) ? a : [];
                    return G(",", [a.name, a.description, w(Ca, va, Wb(aq), Ae(","))(c)])
                } catch (b) {
                    return ""
                }
            }

            function aq(a) {
                return G(",", [a.description, a.suffixes, a.type])
            }

            function bq(a, c) {
                for (var b = "", d = 0; d < c; d +=
                    1) b += a;
                return b
            }

            function cq(a, c, b, d, e, f, g, h) {
                var k = b.C(f);
                ca(k) && (b.D(f, g), e(a, c, b, d), k = b.C(f, g));
                X(h) || h.Wb(f, "" + k);
                return k
            }

            function dq(a, c) {
                if (Ed(a)) {
                    var b = lb(a).match(eq);
                    if (b && b.length) return b[1] === c
                }
                return !1
            }

            function Be(a, c, b) {
                return function(d) {
                    var e, f, g = Aa(c, b);
                    g && fq(a, d, c) && (g = H(g.params, g), (d = Vf({
                        event: a,
                        La: "products",
                        xa: lc,
                        Dh: "goods"
                    }, d)) && g && g((e = {}, e.__ym = (f = {}, f.ecommerce = [d], f), e)))
                }
            }

            function fq(a, c, b) {
                var d = !1,
                    e = "";
                if (!na(c)) return Kb(b, "", "ecomeo"), d;
                var f = c.goods;
                switch (a) {
                    case "detail":
                    case "add":
                    case "remove":
                        R(f) &&
                            f.length ? (d = Mi(function(g) {
                                return na(g) && (ia(g.id) || mc(b, g.id) || ia(g.name))
                            }, f)) || (e = "ecomgi") : e = "ecomgei";
                        break;
                    case "purchase":
                        mc(b, c.id) || ia(c.id) ? d = !0 : e = "ecompi"
                }
                Kb(b, "", e);
                return d
            }

            function Fd(a, c) {
                return {
                    N: function(b, d) {
                        Wf(b) ? d() : pa(c, function(e) {
                            var f;
                            if (e = n(e, "settings.hittoken")) e = (f = {}, f.hittoken = e, f), b.J = z(b.J || {}, e);
                            d()
                        })
                    }
                }
            }

            function gq(a, c) {
                function b() {
                    q.hidden ? z(k.style, Gd(["top", "right", "left", "background"], "initial")) : z(k.style, Gd(["top", "right", "left"], "0"), {
                        background: "rgba(0, 0, 0, .3)"
                    });
                    y.parentNode || (r.appendChild(p), r.appendChild(y));
                    q.hidden = !q.hidden;
                    r.hidden = !r.hidden;
                    t.hidden = !t.hidden
                }

                function d(M) {
                    var ma = g();
                    z(ma.style, Dc("2px", "18px"), Vc, {
                        left: "15px",
                        top: "7px",
                        background: "#2f3747",
                        borderRadius: "2px"
                    });
                    ma.style.transform = "rotate(" + M + "deg)";
                    return ma
                }

                function e(M, ma, xa, Db, Hd) {
                    var Ce = g();
                    z(Ce.style, Dc(ma + "px", xa + "px"), Vc, {
                        left: M + "px",
                        bottom: 0,
                        background: Db,
                        borderTopLeftRadius: Hd
                    });
                    return Ce
                }
                var f = fb(a);
                if (!f) return D;
                var g = u("div", f),
                    h = u("iframe", f),
                    k = g();
                k.classList.add("__ym_wv_ign");
                z(k.style, Ni, {
                    bottom: "0",
                    width: "100%",
                    maxWidth: "initial",
                    zIndex: "999999999"
                });
                var l = k.attachShadow ? k.attachShadow({
                        mode: "open"
                    }) : k,
                    m = g();
                z(m.style, Dc("24px"), Vc, Xf, {
                    top: "12px",
                    right: "10px",
                    background: "#3367dc",
                    overflow: "hidden"
                });
                var p = g();
                z(p.style, {
                    border: "2px solid transparent",
                    animation: "__ym_wv_ign-spinner-animation 1s 0.21s infinite linear"
                }, Xf, Vc, Dc("48px"), Gd(["top", "left"], "calc(50% - 24px)"), Gd(["borderTopColor", "borderLeftColor"], "#fc0"));
                f = f("style");
                f.textContent = "@keyframes __ym_wv_ign-spinner-animation {to {transform: rotate(360deg);}}";
                p.appendChild(f);
                var q = g();
                q.id = "__ym_wv_ign__opener";
                z(q.style, Dc("46px", "48px"), Ni, {
                    right: "0",
                    bottom: "60px",
                    cursor: "pointer",
                    background: "#fff",
                    borderRadius: "16px 0 0 16px",
                    boxShadow: "0px 0px 1px rgba(67, 68, 69, 0.3), 0px 1px 2px rgba(67, 68, 69, 0.3)"
                });
                var r = g();
                z(r.style, Vc, Gd(["top", "right", "bottom"], "0"), {
                    width: "600px",
                    background: "#fff"
                });
                var t = g();
                t.id = "__ym_wv_ign__closer";
                z(t.style, Dc("32px"), Vc, Xf, {
                    top: "12px",
                    right: "612px",
                    cursor: "pointer",
                    background: "#fff"
                });
                f = h();
                f.src = "https://metrika.yandex.ru/widget/iframe-check";
                var y = h();
                z(y.style, Dc("100%"), {
                    border: "none"
                });
                y.src = "https://metrika.yandex.ru/widget/dashboard?id=" + c;
                r.hidden = !0;
                t.hidden = !0;
                t.appendChild(d(45));
                t.appendChild(d(-45));
                r.appendChild(f);
                m.appendChild(e(0, 8, 9, "linear-gradient(0deg, #ff324f, #ff324f), linear-gradient(158.67deg, #ff455c 12.6%, #ff1139 96.76%)"));
                m.appendChild(e(8, 9, 16, "#04acff", "3px"));
                m.appendChild(e(17, 7, 24, "#ffdd13"));
                q.appendChild(m);
                l.appendChild(r);
                l.appendChild(t);
                var F = ["click", "touchstart"];
                h = fa(a);
                m = a.document.body;
                l = [h.F(q,
                    F, b), h.F(t, F, b), h.F(f, ["load"], C([la, [H(r.removeChild, r, f), H(l.appendChild, l, q)]], x)), h.F(y, ["load"], H(r.removeChild, r, p)), H(m.removeChild, m, k)];
                var P = C([la, l], x);
                l.push(h.F(a, ["securitypolicyviolation"], function(M) {
                    (M = n(M, "blockedURI")) && 0 <= ib(M, "https://metrika.yandex.ru") && P()
                }));
                m.appendChild(k);
                return P
            }

            function Gd(a, c) {
                return N(function(b, d) {
                    b[d] = c;
                    return b
                }, {}, a)
            }

            function Dc(a, c) {
                var b;
                return b = {}, b.width = a, b.height = c || a, b
            }

            function hq(a, c) {
                var b = n(c, "origin"),
                    d;
                if (d = b) d = iq.test(b) || jq.test(b);
                d && (b = zb(a, c.data), "appendremote" === n(b, "action") && kq(a, c, b))
            }

            function Oi(a, c, b, d) {
                var e, f, g, h;
                void 0 === b && (b = "");
                void 0 === d && (d = "");
                var k = J(a),
                    l = {};
                l.getCachedTags = Yf;
                l.form = (e = {}, e.closest = u(a, Pi), e.select = lq, e.getData = u(a, Qi), e);
                l.button = (f = {}, f.closest = u(a, nf), f.select = Ri, f.getData = u(a, of ), f);
                l.phone = (g = {}, g.hidePhones = C([a, null, [d]], Si), g);
                l.status = (h = {}, h.checkStatus = C([a, Ia(b)], mq), h);
                k.D("_u", l);
                c && Mc(a, {
                    src: c
                })
            }

            function Ti(a) {
                var c = a.lang;
                c = void 0 === c ? "" : c;
                var b = a.appVersion;
                b = void 0 === b ?
                    "" : b;
                var d = a.fileId;
                d = void 0 === d ? "" : d;
                a = a.beta;
                a = void 0 === a ? !1 : a;
                b = G(".", va(A(w(Q, Ia), b.split("."))));
                if (!I(d, nq) || !I(c, ["ru", "en", "tr"])) return "";
                c = (a ? "https://s3.mds.yandex.net/internal-metrika-betas" : "https://yastatic.net/s3/metrika") + (b ? "/" + b : "") + "/form-selector/" + (d + "_" + c + ".js");
                return Ui(c) ? c : ""
            }

            function oq(a, c) {
                var b = fb(a);
                if (b) {
                    var d = b("div"),
                        e = fc(a);
                    if (e) {
                        d.innerHTML = '<iframe name="RemoteIframe" allowtransparency="true" style="position: absolute; left: -999px; top: -999px; width: 1px; height: 1px;"></iframe>';
                        var f = d.firstChild;
                        f.onload = function() {
                            var h = b("meta");
                            h.setAttribute("http-equiv", "Content-Security-Policy");
                            h.setAttribute("content", "script-src *");
                            f.contentWindow.document.head.appendChild(h);
                            Mc(f.contentWindow, {
                                src: c
                            })
                        };
                        a._ym__remoteIframeEl = f;
                        e.appendChild(d);
                        d.removeChild(f);
                        var g = null;
                        d.attachShadow ? g = d.attachShadow({
                            mode: "open"
                        }) : d.createShadowRoot ? g = d.createShadowRoot() : d.webkitCreateShadowRoot && (g = d.webkitCreateShadowRoot());
                        g ? g.appendChild(f) : (e.appendChild(f), a._ym__remoteIframeContainer =
                            f)
                    }
                }
            }

            function mq(a) {
                var c, b = Vi(a);
                a = J(a).C("getCounters", Id)();
                a = A(U("id"), a);
                return c = {
                    id: b
                }, c.counterFound = !!b && I(b, a), c
            }

            function Si(a, c, b) {
                var d;
                c = Wi(a, c, {
                    eg: pq,
                    ei: (d = {}, d.href = !0, d)
                });
                b = va(A(function(f) {
                    return "*" === f ? f : Ub(f)
                }, b));
                var e = A(w(Q, Fa("concat", [""]), Xi("reverse"), la), b);
                b = Jd(a);
                d = Yi(a, b, 1E3);
                c = u(e, c);
                d.F(c);
                qq(a, b);
                Zi(a, b);
                c()
            }

            function pq(a, c, b) {
                var d = fb(a),
                    e = b.tb,
                    f = b.Sb,
                    g = e.parentNode,
                    h = e.textContent;
                if (!("text" === b.ke && h && d && g)) return !1;
                b = d("small");
                $i(b);
                var k = aj(h).length;
                x(Fa("appendChild",
                    b), N(function(l, m) {
                    var p = l.nodes,
                        q = l.lg,
                        r = d("small");
                    r.innerHTML = m;
                    var t = rq.test(m);
                    $i(r);
                    t && (r.style.opacity = "" + (k - q - 1) / k);
                    p.push(r);
                    return {
                        nodes: p,
                        lg: q + (t ? 1 : 0)
                    }
                }, {
                    nodes: [],
                    lg: 0
                }, h).nodes);
                sq(a, c, b, f);
                g.insertBefore(b, e);
                e.textContent = "";
                return !0
            }

            function sq(a, c, b, d) {
                function e() {
                    x(function(l) {
                        l.style && z(l.style, {
                            opacity: ""
                        })
                    }, Ca(b.childNodes));
                    if (c) {
                        var k = Aa(a, c);
                        k && k.extLink("tel:" + d, {})
                    }
                    g();
                    h()
                }
                var f = fa(a),
                    g = D,
                    h = D;
                g = f.F(b, ["mouseenter"], function(k) {
                    if (k.target === b) {
                        var l = T(a, e, 200, "ph.h.e");
                        h();
                        h = f.F(b, ["mouseleave"], function(m) {
                            m.target === b && ka(a, l)
                        })
                    }
                })
            }

            function Zi(a, c) {
                Nb(a)(Ra(D, function() {
                    var b, d = a.document.body,
                        e = (b = {}, b.attributes = !0, b.childList = !0, b.subtree = !0, b);
                    Ea("MutationObserver", a.MutationObserver) && (new MutationObserver(c.R)).observe(d, e)
                }))
            }

            function qq(a, c) {
                return fa(a).F(a, ["load"], c.R)
            }

            function Wi(a, c, b) {
                function d(k) {
                    return f(a, c, k) ? h[k.Sb] && h[k.Sb].Yc : null
                }
                var e, f = b.eg;
                b = b.ei;
                var g = void 0 === b ? (e = {}, e.href = !0, e.text = !0, e) : b,
                    h;
                return function(k) {
                    return new K(function(l,
                        m) {
                        k && k.length || m();
                        h = bj()(k);
                        Nb(a)(Ra(u({
                            ja: [],
                            Aa: 0
                        }, l), function() {
                            var p = ja(a),
                                q = p(Z),
                                r = g.href ? tq(a, h) : [],
                                t = g.text ? cj(a, h, a.document.body) : [];
                            l({
                                ja: ha(R, va(A(d, r.concat(t)))),
                                Aa: p(Z) - q
                            })
                        }))
                    })
                }
            }

            function tq(a, c) {
                var b = a.document.body;
                if (!b) return [];
                var d = dj(c);
                return N(function(e, f) {
                    var g = n(f, "href");
                    try {
                        var h = decodeURI(g || "")
                    } catch (p) {
                        h = ""
                    }
                    if ("tel:" === h.slice(0, 4)) {
                        var k = (d.exec(h) || [])[0],
                            l = k ? Ub(k) : "",
                            m = c[l];
                        X(m) || !l && "*" !== m.Yc[0] || (e.push({
                                ke: "href",
                                tb: f,
                                Sb: l,
                                cb: ej(k, c[l].cb),
                                Oi: g
                            }), g = Ub(h.slice(4)),
                            l = bj()([l ? m.Yc : [g, ""]]), ra(e, cj(a, l, f)))
                    }
                    return e
                }, [], Ca(b.querySelectorAll("a")))
            }

            function cj(a, c, b) {
                if (!b) return [];
                var d = [],
                    e = dj(c),
                    f = ["script", "style"];
                pd(a, b, function(g) {
                    var h = n(g, "parentNode.nodeName") || "";
                    g === b || I(h.toLowerCase(), f) || (h = va(e.exec(g.textContent || "") || []), x(function(k) {
                        var l = Ub(k);
                        X(c[l]) || d.push({
                            ke: "text",
                            tb: g,
                            Sb: l,
                            cb: ej(k, c[l].cb),
                            Oi: g.textContent || ""
                        })
                    }, h))
                }, function(g) {
                    return e.test(g.textContent || "") ? 1 : 0
                }, a.NodeFilter.SHOW_TEXT);
                return d
            }

            function bj() {
                return Zf(function(a,
                    c) {
                    var b = A(Ub, c),
                        d = b[0];
                    b = b[1];
                    a[d] = {
                        cb: b,
                        Yc: c
                    };
                    var e = fj(d);
                    e !== d && (a[e] = {
                        cb: fj(b),
                        Yc: c
                    });
                    return a
                }, {})
            }

            function ej(a, c) {
                for (var b = [], d = a.split(""), e = c.split(""), f = 0, g = 0; g < a.length && !(f >= e.length); g += 1) {
                    var h = d[g];
                    "0" <= h && "9" >= h ? (b.push(e[f]), f += 1) : b.push(d[g])
                }
                return G("", b) + c.slice(f + 1)
            }

            function fj(a) {
                var c = {
                    7: "8",
                    8: "7"
                };
                return 11 === a.length && c[a[0]] ? "" + c[a[0]] + a.slice(1) : a
            }

            function dj(a) {
                return new RegExp("(?:" + G("|", A(gj, ea(a))) + ")")
            }

            function hj(a, c, b, d) {
                if (c) {
                    var e = [];
                    c && (a.document.documentElement.contains(c) ?
                        pd(a, c, Fa("push", e), d) : ra(e, ij(a, c, d)));
                    x(b, e)
                }
            }

            function pd(a, c, b, d, e, f) {
                function g(k) {
                    return O(d) ? d(k) ? a.NodeFilter.FILTER_ACCEPT : a.NodeFilter.FILTER_REJECT : a.NodeFilter.FILTER_ACCEPT
                }
                void 0 === e && (e = -1);
                void 0 === f && (f = !1);
                var h = g(c);
                if (O(b) && (f || h === a.NodeFilter.FILTER_ACCEPT) && (h && b(c), !Rf(c)))
                    for (c = a.document.createTreeWalker(c, e, d ? {
                            acceptNode: g
                        } : null, !1); c.nextNode() && !1 !== b(c.currentNode););
            }

            function ij(a, c, b) {
                var d = [],
                    e = w(Q, Fa("push", d));
                O(b) ? (b = b(c), (ca(b) || b === a.NodeFilter.FILTER_ACCEPT) &&
                    e(c)) : e(c);
                if (c.childNodes && 0 < c.childNodes.length) {
                    c = c.childNodes;
                    b = 0;
                    for (var f = c.length; b < f; b += 1) {
                        var g = ij(a, c[b]);
                        x(e, g)
                    }
                }
                return d
            }

            function jj(a, c, b) {
                var d;
                a = [kj(a, c, function(e) {
                    d = e;
                    e.za.F(b)
                }), function() {
                    d && d.unsubscribe()
                }];
                return C([De, a], x)
            }

            function uq(a, c, b, d) {
                var e, f, g;
                if (b) {
                    var h = n(d, "ecommerce") || {};
                    var k = n(d, "event") || "";
                    h = na(h) && ia(k) ? Vf(k, h) : void 0;
                    if (!h) a: {
                        var l = d;!R(d) && mc(a, Sa(d)) && (l = Oa(l));
                        if (R(l) && (h = l[0], k = l[1], l = l[2], ia(k) && na(l) && "event" === h)) {
                            h = Vf(k, l);
                            break a
                        }
                        h = void 0
                    }
                    if (d =
                        h || vq(d)) ub(a, (e = {}, e.counterKey = c, e.name = "ecommerce", e.data = d, e)), b((f = {}, f.__ym = (g = {}, g.ecommerce = [d], g), f))
                }
            }

            function vq(a) {
                var c = n(a, "ecommerce");
                if (na(c)) return a = ha(uc(wq), ea(c)), a = N(function(b, d) {
                    b[d] = c[d];
                    return b
                }, {}, a), 0 === ea(a).length ? void 0 : a
            }

            function Vf(a, c) {
                var b, d, e = ia(a) ? xq[a] : a;
                if (e) {
                    var f = e.event,
                        g = e.La,
                        h = e.Dh,
                        k = void 0 === h ? "items" : h,
                        l = c.purchase || c;
                    if (h = l[k]) {
                        e = A(u(e.xa, yq), h);
                        var m = (b = {}, b[f] = g ? (d = {}, d[g] = e, d) : e, b);
                        b = ea(l);
                        g && 1 < b.length && (m[f].actionField = Bb(function(p, q) {
                            if (q ===
                                k) return p;
                            if ("currency" === q) return m.currencyCode = l.currency, p;
                            p[zq[q] || $f[q] || q] = l[q];
                            return p
                        }, {}, b));
                        return m
                    }
                }
            }

            function yq(a, c) {
                var b = {};
                x(function(d) {
                    var e = a[d] || $f[d] || d; - 1 !== ib(d, "item_category") ? (e = $f.item_category, b[e] = b[e] ? b[e] + ("/" + c[d]) : c[d]) : b[e] = c[d]
                }, ea(c));
                return b
            }

            function Aq(a, c, b) {
                var d, e, f, g = n(b, "target");
                if (g && (g = nf(a, g), g = of (a, g))) {
                    g = "?" + Ec(g);
                    var h = nc(a, c, "gbn", (d = {}, d.id = c.id, d.query = g, d));
                    b = n(b, "isTrusted");
                    b = ca(b) ? void 0 : (e = {}, e.__ym = (f = {}, f.ite = sb(b), f), e);
                    Ee(a, c, "btn",
                        h).reachGoal(g, b)
                }
            }

            function hf(a, c, b, d) {
                return function() {
                    if (Aa(a, c)) {
                        var e = Oa(arguments);
                        return d.apply(void 0, e)
                    }
                }
            }

            function Bq(a, c, b, d) {
                var e = n(d, "target");
                e && (d = n(d, "isTrusted"), (e = oc("button,input", a, e)) && "submit" === e.type && (e = Pi(a, e))) && (b.push(e), T(a, C([!1, a, c, b, e, d], lj), 300))
            }

            function lj(a, c, b, d, e, f) {
                var g, h, k, l = Pb(c)(e, d),
                    m = -1 !== l;
                if (a || m) m && d.splice(l, 1), a = Qi(c, e), a = "?" + Ec(a), d = C([c, b, "fg", (g = {}, g.id = b.id, g.query = a, g)], mj), f = ca(f) ? void 0 : (h = {}, h.__ym = (k = {}, k.ite = sb(f), k), h), Ee(c, b, "form",
                    d).reachGoal(a, f)
            }

            function mj(a, c, b, d) {
                return Cq(a, c).then(w(C([nc(a, c, b, d), D], Ad), la))
            }

            function Qi(a, c, b) {
                return nj(a, c, ["i", "n", "p"], void 0, b)
            }

            function Dq(a, c) {
                var b;
                a((b = {}, b.clickmap = X(c) ? !0 : c, b))
            }

            function Eq(a, c, b, d, e) {
                var f, g = "clmap/" + e.id;
                c = (f = {}, f["page-url"] = c, f["pointer-click"] = b, f);
                f = {
                    K: Ja(),
                    J: c,
                    na: {
                        Ba: g
                    }
                };
                d(f, e)["catch"](E(a, "c.s.c"))
            }

            function Fq(a, c, b, d, e) {
                if (Lb(a, "ymDisabledClickmap") || !c || !c.element) return !1;
                a = Ma(c.element);
                if (e && !e(c.element, a) || I(c.button, [2, 3]) && "A" !== a || $a(Ba(a),
                        d)) return !1;
                d = c.element;
                if (c && b) {
                    if (50 > c.time - b.time) return !1;
                    e = Math.abs(b.position.x - c.position.x);
                    a = Math.abs(b.position.y - c.position.y);
                    c = c.time - b.time;
                    if (b.element === d && 2 > e && 2 > a && 1E3 > c) return !1
                }
                for (; d;) {
                    if (Gq(d)) return !1;
                    d = d.parentElement
                }
                return !0
            }

            function Hq(a, c) {
                var b = null;
                try {
                    if (b = c.target || c.srcElement) !b.ownerDocument && b.documentElement ? b = b.documentElement : b.ownerDocument !== a.document && (b = null)
                } catch (d) {}
                return b
            }

            function Iq(a) {
                var c = a.which;
                a = a.button;
                return c || void 0 === a ? c : 1 === a || 3 === a ?
                    1 : 2 === a ? 3 : 4 === a ? 2 : 0
            }

            function oj(a, c) {
                var b = fc(a),
                    d = ag(a);
                return {
                    x: c.pageX || c.clientX + d.x - (b.clientLeft || 0) || 0,
                    y: c.pageY || c.clientY + d.y - (b.clientTop || 0) || 0
                }
            }

            function Fe(a, c) {
                return {
                    N: function(b, d) {
                        var e, f = b.K,
                            g = b.Ja,
                            h = b.J,
                            k = b.ba;
                        k = void 0 === k ? {} : k;
                        if (f && h) {
                            var l = ja(a);
                            f.Wb("rqnl", 1);
                            for (var m = Kd(a), p = 1; m[p];) p += 1;
                            b.M || (b.M = {});
                            b.M.Tb = p;
                            m[p] = (e = {}, e.protocol = Ga.Sa, e.host = jc, e.resource = b.na.Ba, e.postParams = k.da, e.time = l(Z), e.counterType = c.ca, e.params = h, e.browserInfo = f.l(), e.counterId = c.id, e.ghid = Cc(a),
                                e);
                            g && (m[p].telemetry = g.l());
                            bg(a)
                        }
                        d()
                    },
                    Da: function(b, d) {
                        pj(a, b);
                        d()
                    }
                }
            }

            function pj(a, c) {
                var b = Kd(a);
                c.K && !Wa(b) && c.M && (delete b[c.M.Tb], bg(a))
            }

            function bg(a) {
                var c = Kd(a);
                Qa(a).D("retryReqs", c)
            }

            function Jq(a, c) {
                if (a.Ui()) {
                    var b = qj(c);
                    if (b && !ic("ym-disable-tracklink", b)) {
                        var d = a.l,
                            e = a.Og,
                            f = a.eb,
                            g = a.sender,
                            h = a.ah,
                            k = f.wc,
                            l = b.href;
                        var m = ab(b.innerHTML && b.innerHTML.replace(/<\/?[^>]+>/gi, ""));
                        m || (m = (m = b.querySelector("img")) ? ab(m.getAttribute("title") || m.getAttribute("alt")) : "");
                        m = l === m ? "" : m;
                        var p = n(c,
                            "isTrusted");
                        if (ic("ym-external-link", b)) Ge(d, f, {
                            url: l,
                            pb: !0,
                            title: m,
                            Fc: p,
                            sender: g
                        });
                        else {
                            k = k ? Sc(d, k).hostname : S(d).hostname;
                            h = RegExp("\\.(" + G("|", A(Kq, h)) + ")$", "i");
                            var q = b.protocol + "//" + b.hostname + b.pathname;
                            h = rj.test(q) || rj.test(l) || h.test(l) || h.test(q);
                            b = b.hostname;
                            He(k) === He(b) ? h ? Ge(d, f, {
                                url: l,
                                Dc: !0,
                                Fc: p,
                                title: m,
                                sender: g
                            }) : m && e.D("il", ab(m).slice(0, 100)) : l && Lq.test(l) || Ge(d, f, {
                                url: l,
                                Hc: !0,
                                pb: !0,
                                Dc: h,
                                Fc: p,
                                title: m,
                                sender: g
                            })
                        }
                    }
                }
            }

            function Ge(a, c, b) {
                var d, e, f, g, h = Ja();
                void 0 !== b.Fc && h.D("ite", sb(b.Fc));
                b.Dc && h.D("dl", 1);
                b.pb && h.D("ln", 1);
                var k = b.kg || {};
                h = {
                    K: h,
                    M: {
                        title: k.title || b.title,
                        Hc: !!b.Hc,
                        X: k.params
                    },
                    J: (d = {}, d["page-url"] = b.url, d["page-ref"] = c.wc || S(a).href, d)
                };
                d = "Link";
                b.Dc ? d = b.pb ? "Ext link - File" : "File" : b.pb && (d = "Ext link");
                ub(a, (e = {}, e.counterKey = L(c), e.name = "event", e.data = (f = {}, f.schema = "Link click", f.name = (b.pb ? "external" : "internal") + " url: " + b.url, f), e));
                c = b.sender(h, c).then(nc(a, c, "lcl", (g = {}, g.prefix = d, g.id = c.id, g.url = b.url, g), b.kg));
                return Wc(a, "cl.p.s", c, k.callback || D, k.ctx)
            }

            function Mq(a,
                c) {
                var b, d, e = (b = {}, b.string = !0, b.object = !0, b["boolean"] = c, b)[typeof c] || !1;
                a((d = {}, d.trackLinks = e, d))
            }

            function Nq(a, c, b, d) {
                var e = S(a),
                    f = e.hostname;
                e = e.href;
                if (c = Ld(c).url) a = Sc(a, c), f = a.hostname, e = a.href;
                return [d + "://" + f + "/" + b, e || ""]
            }

            function sj(a) {
                return (a.split(":")[1] || "").replace(/^\/*/, "").replace(/^www\./, "").split("/")[0]
            }

            function Oq(a, c, b, d) {
                var e;
                if (a = Aa(a, b)) {
                    var f = d.data;
                    b = "" + b.id;
                    var g = d.sended || [];
                    d.sended || (d.sended = g);
                    I(b, g) || !a.params || d.counter && "" + d.counter !== b || (a.params(f), g.push(b),
                        d.parent && c.Uf((e = {}, e.type = "params", e.data = f, e)))
                }
            }

            function Gh(a, c, b) {
                void 0 === b && (b = Q);
                var d = ud(a);
                b(d);
                var e = u(d, Pq);
                Ie(a, c, function(f) {
                    f.za.F(e)
                });
                return d
            }

            function Pq(a, c) {
                var b = n(c, "ymetrikaEvent");
                b && a.R(n(b, "type"), b)
            }

            function Ie(a, c, b, d) {
                void 0 === b && (b = D);
                void 0 === d && (d = !1);
                var e = Jd(a);
                if (c && O(c.push)) {
                    var f = c.push;
                    c.push = function() {
                        var g = Oa(arguments),
                            h = g[0];
                        d && e.R(h);
                        g = f.apply(c, g);
                        d || e.R(h);
                        return g
                    };
                    a = {
                        za: e,
                        unsubscribe: function() {
                            c.push = f
                        }
                    };
                    b(a);
                    x(e.R, c);
                    return a
                }
            }

            function ke(a) {
                a = J(a);
                var c = a.C("dataLayer", []);
                a.D("dataLayer", c);
                return c
            }

            function hn(a, c) {
                var b, d;
                I(c, A(U("ymetrikaEvent.type"), a)) || a.push((b = {}, b.ymetrikaEvent = (d = {}, d.type = c, d), b))
            }

            function tj(a, c) {
                var b = rd(a, c),
                    d = [],
                    e = [];
                if (!b) return null;
                var f = C([a, b.oe], Qq),
                    g = u(f, Rq);
                b.$.F(["initToParent"], function(h) {
                    g(d, b.children[h[1].counterId])
                }).F(["parentConnect"], function(h) {
                    g(e, b.Ga[h[1].counterId])
                });
                return {
                    $: b.$,
                    Hj: function(h, k) {
                        return new K(function(l, m) {
                            b.oe(h, k, function(p, q) {
                                l([p, q])
                            });
                            T(a, u(Ta(), m), 5100, "is.o")
                        })
                    },
                    Tf: function(h) {
                        var k = {
                            Wf: [],
                            Ce: [],
                            data: h
                        };
                        d.push(k);
                        return f(b.children, k, h)
                    },
                    Uf: function(h) {
                        var k = {
                            Wf: [],
                            Ce: [],
                            data: h
                        };
                        e.push(k);
                        return f(b.Ga, k, h)
                    }
                }
            }

            function Rq(a, c, b) {
                c = ha(function(d) {
                    return !I(b.info.counterId, d.Ce)
                }, c);
                x(function(d) {
                    var e;
                    b.info.counterId && a((e = {}, e[b.info.counterId] = b, e), d, d.data)
                }, c)
            }

            function Qq(a, c, b, d, e) {
                return (new K(function(f, g) {
                    var h = ea(b),
                        k = w(d.resolve || Q, we(f)),
                        l = w(d.reject || Q, we(g));
                    d.resolve = k;
                    d.reject = l;
                    x(function(m) {
                        var p;
                        d.Ce.push(+m);
                        var q = b[m],
                            r = T(a, u(Ta(), l),
                                5100, "is.m");
                        c(q.window, z(e, (p = {}, p.toCounter = Ia(m), p)), function(t, y) {
                            ka(a, r);
                            d.Wf.push(m);
                            d.resolve && d.resolve(y)
                        })
                    }, h)
                }))["catch"](E(a, "if.b"))
            }

            function Sq(a) {
                var c = D,
                    b = null,
                    d = a.length;
                if (0 !== a.length && a[0]) {
                    var e = a.slice(-1)[0];
                    O(e) && (c = e, d = a.length + -1);
                    var f = a.slice(-2)[0];
                    O(f) && (c = f, b = e, d = a.length + -2);
                    d = a.slice(0, d);
                    return {
                        Pg: b,
                        cc: c,
                        X: 1 === d.length ? a[0] : td(d)
                    }
                }
            }

            function Wc(a, c, b, d, e) {
                var f = C([a, d, e], cg);
                return b.then(f, function(g) {
                    f();
                    Rc(a, c, g)
                })
            }

            function dg(a, c) {
                return {
                    N: function(b, d) {
                        var e,
                            f, g = (b.M || {}).X,
                            h = b.ba;
                        h = void 0 === h ? {} : h;
                        if (g && (uj(c, g), !h.da && b.K && b.J)) {
                            var k = Ab(a, g),
                                l = vj(a),
                                m = b.K.C("pv");
                            k && !b.J.nohit && (ub(a, (e = {}, e.counterKey = L(c), e.name = "params", e.data = (f = {}, f.val = g, f), e)), m ? encodeURIComponent(k).length > Ga.qg ? l.push([b.K, g]) : b.J["site-info"] = k : (h.da = k, b.ba = h, b.Oc || (b.Oc = {}), b.Oc.hi = !0))
                        }
                        d()
                    },
                    Da: function(b, d) {
                        var e = vj(a),
                            f = Aa(a, c),
                            g = f && f.params;
                        g && (f = ha(w(Md, Ba(b.K)), e), x(function(h) {
                            g(h[1]);
                            h = Je(a)(h, e);
                            e.splice(h, 1)
                        }, f));
                        d()
                    }
                }
            }

            function Ke(a, c) {
                return function(b) {
                    eg(a, c,
                        b)
                }
            }

            function Tq(a, c) {
                fg(a)(function(b) {
                    delete b[c]
                })
            }

            function eg(a, c, b) {
                fg(a)(function(d) {
                    d[c] = z(d[c] || {}, b)
                })
            }

            function fg(a) {
                a = J(a);
                var c = a.C("dsjf") || Ha({});
                a.Ia("dsjf", c);
                return c
            }

            function Uq(a, c) {
                return function(b) {
                    var d, e, f = Aa(a, c);
                    if (f) {
                        var g = pc(a, L(c));
                        na(b) ? Sa(ea(b)) ? (b = wj(a, b)) && Sa(b) && f.params((d = {}, d.__ym = (e = {}, e.fpmh = b, e), d)) : g.log("fpeo") : g.log("fpno")
                    }
                }
            }

            function wj(a, c) {
                return N(function(b, d) {
                    var e = d[0],
                        f = d[1],
                        g = f;
                    f = na(f);
                    if (!f && (mc(a, g) && (g = "" + g), !ia(g))) return b;
                    g = f ? wj(a, g) : g;
                    Sa(g) &&
                        b.push([e, g]);
                    return b
                }, [], La(c))
            }

            function xj(a, c, b) {
                void 0 === b && (b = 0);
                c = La(c);
                c = N(function(d, e) {
                    var f = e[0],
                        g = e[1],
                        h = na(g);
                    if (!h && (mc(a, g) && (g = "" + g), !ia(g))) return d;
                    h ? g = xj(a, g, b + 1) : !b && I(f, Vq) ? g = K.resolve(g) : ("phone_number" === f ? g = Ph(a, g) : "email" === f && (g = Oh(g)), g = yj(a, g));
                    d.push(g.then(function(k) {
                        return [f, k]
                    }));
                    return d
                }, [], c);
                return K.all(c)
            }

            function Oh(a) {
                var c = ab(a).replace(/^\++/gm, "").toLowerCase(),
                    b = c.lastIndexOf("@");
                if (-1 === b) return c;
                a = c.substr(0, b);
                b = c.substr(b + 1);
                if (!b || !Wq(a)) return c;
                b = b.replace("googlemail.com", "gmail.com");
                zj(b) && (b = "yandex.ru");
                "yandex.ru" === b ? a = a.replace(gg, "-") : "gmail.com" === b && (a = a.replace(gg, ""));
                c = ib(a, "+"); - 1 !== c && (a = a.slice(0, c));
                return a + "@" + b
            }

            function Wq(a) {
                return 1 > a.length || 64 < a.length ? !1 : Mi(function(c) {
                    if (1 > c.length) c = !1;
                    else if ('"' === c[0] && '"' === c[c.length - 1] && 2 < c.length) a: {
                        for (var b = 1; b + 2 < c.length; b += 1) {
                            var d = c.charCodeAt(b);
                            if (32 > d || 34 === d || 126 < d) {
                                c = !1;
                                break a
                            }
                            if (92 === d) {
                                if (b + 2 === c.length || 32 > c.charCodeAt(b + 1)) {
                                    c = !1;
                                    break a
                                }
                                b += 1
                            }
                        }
                        c = !0
                    }
                    else c =
                        Xq.test(c) ? !0 : !1;
                    return c
                }, a.split("."))
            }

            function Ph(a, c) {
                var b = Yq(c),
                    d = Ub(c);
                return 10 > d.length || 13 < d.length || b.startsWith("+8") ? ab(c) : "8" === b[0] ? "7" + d.slice(1) : "+" === b[0] || mc(a, +b[0]) ? d : "7" + d
            }

            function yj(a, c) {
                return new K(function(b, d) {
                    var e = (new a.TextEncoder).encode(c);
                    a.crypto.subtle.digest("SHA-256", e).then(function(f) {
                        f = new a.Blob([f], {
                            type: "application/octet-binary"
                        });
                        var g = new a.FileReader;
                        g.onload = function(h) {
                            h = n(h, "target.result") || "";
                            var k = ib(h, ","); - 1 !== k ? b(h.substring(k + 1)) : d(Pa("fpm.i"))
                        };
                        g.readAsDataURL(f)
                    }, d)
                })
            }

            function om(a, c, b, d) {
                var e = Aj[b];
                return e ? function() {
                    var f = Oa(arguments);
                    f = d.apply(void 0, f);
                    var g = J(a);
                    g.Ia("mt", {});
                    g = g.C("mt");
                    var h = g[e];
                    g[e] = h ? h + 1 : 1;
                    return f
                } : d
            }

            function Aa(a, c) {
                var b = J(a).C("counters", {}),
                    d = L(c);
                return b[d]
            }

            function nc(a, c, b, d, e) {
                return C([a, L(c), e ? [b + ".p", e] : b, d], Kb)
            }

            function Kb(a, c, b, d) {
                pc(a, c).log(b, d)
            }

            function Zq(a, c) {
                function b(d, e, f) {
                    var g, h;
                    ub(a, (g = {}, g.name = "log", g.counterKey = c, g.data = (h = {}, h.args = R(e) ? e : [e], h.type = d, h.variables = f, h), g))
                }
                return {
                    log: u("log",
                        b),
                    error: u("error", b),
                    warn: u("warn", b)
                }
            }

            function pa(a, c) {
                var b = L(a);
                return Bj()($q(b)).then(c)
            }

            function ar(a, c, b) {
                var d, e;
                c = L(c);
                var f = hg(a);
                b = z({
                    dh: f(Z)
                }, b);
                ub(a, (d = {}, d.counterKey = c, d.name = "counterSettings", d.data = (e = {}, e.settings = b, e), d));
                return Bj()(br(c, b))
            }

            function br(a, c) {
                return function(b) {
                    var d = b[a];
                    d ? (d.Hf = !0, d.Gf(c)) : b[a] = {
                        promise: K.resolve(c),
                        Hf: !0,
                        Gf: D
                    }
                }
            }

            function ig(a) {
                return !Cd(a) && jg(a)
            }

            function Nd(a) {
                return fb(a) ? u(a, cr) : !1
            }

            function Eb(a) {
                if (a.fetch) {
                    var c = n(a, "AbortController");
                    return C([a,
                        c ? new c : void 0
                    ], dr)
                }
                return !1
            }

            function jg(a) {
                var c = n(a, "navigator.sendBeacon");
                return c && Ea("sendBeacon", c) ? C([a, H(c, n(a, "navigator"))], er) : !1
            }

            function er(a, c, b, d) {
                return new K(function(e, f) {
                    var g;
                    if (!n(a, "navigator.onLine")) return f();
                    var h = z(d.ab, (g = {}, g["force-urlencoded"] = 1, g));
                    g = b + "?" + Ec(h) + (d.da ? "&" + d.da : "");
                    return 2E3 < g.length ? f(Ta("sb.tlq")) : c(g) ? e("") : f()
                })
            }

            function cr(a, c, b) {
                return new K(function(d, e) {
                    var f, g, h = "_ymjsp" + Xa(a),
                        k = z((f = {}, f.callback = h, f), b.ab),
                        l = C([a, h], fr);
                    a[h] = function(p) {
                        try {
                            l(),
                                xc(m), d(p)
                        } catch (q) {
                            e(q)
                        }
                    };
                    k.wmode = "5";
                    var m = Mc(a, (g = {}, g.src = Cj(c, b, k), g));
                    if (!m) return l(), e(Pa("jp.s"));
                    f = u(m, xc);
                    f = w(f, u(Ta(b.ha), e));
                    g = Od(a, f, b.Qa || 1E4);
                    g = C([a, g], ka);
                    m.onload = g;
                    m.onerror = w(l, g, f)
                })
            }

            function fr(a, c) {
                try {
                    delete a[c]
                } catch (b) {
                    a[c] = void 0
                }
            }

            function Xc(a) {
                var c = fb(a);
                return c ? C([a, c], gr) : !1
            }

            function gr(a, c, b, d) {
                return new K(function(e, f) {
                    var g = fc(a),
                        h = c("img"),
                        k = w(u(h, xc), u(Ta(d.ha), f)),
                        l = Od(a, k, d.Qa || 3E3);
                    h.onerror = k;
                    h.onload = w(u(h, xc), u(null, e), C([a, l], ka));
                    k = z({}, d.ab);
                    delete k.wmode;
                    h.src = Cj(b, d, k);
                    Ed(a) && (z(h.style, {
                        position: "absolute",
                        visibility: "hidden",
                        width: "0px",
                        height: "0px"
                    }), g.appendChild(h))
                })
            }

            function dr(a, c, b, d) {
                var e, f = z(d.Bb ? (e = {}, e.wmode = "7", e) : {}, d.ab),
                    g = c || {
                        signal: void 0,
                        abort: D
                    },
                    h = a.fetch(b + "?" + Ec(f), {
                        method: d.$c,
                        body: d.da,
                        credentials: !1 === d.Je ? "omit" : "include",
                        headers: d.$a,
                        signal: g.signal
                    }),
                    k = u(d.ha, Ta);
                return new K(function(l, m) {
                    d.Qa && Od(a, function() {
                        try {
                            g.abort()
                        } catch (p) {}
                        m(k())
                    }, d.Qa);
                    return h.then(function(p) {
                        if (!p.ok) {
                            if (d.le) return Va(Dj(p));
                            fe(d.ha)
                        }
                        return d.le ?
                            p.text() : d.Bb ? p.json() : null
                    }).then(l)["catch"](u(k(), m))
                })
            }

            function Fb(a) {
                var c;
                if (c = n(a, "XMLHttpRequest"))
                    if (c = "withCredentials" in new a.XMLHttpRequest) {
                        a: {
                            if (hr.test(a.location.host) && a.opera && O(a.opera.version) && (c = a.opera.version(), "string" === typeof c && "12" === c.split(".")[0])) {
                                c = !0;
                                break a
                            }
                            c = !1
                        }
                        c = !c
                    }
                return c ? u(a, ir) : !1
            }

            function ir(a, c, b) {
                var d, e = new a.XMLHttpRequest,
                    f = b.da,
                    g = z(b.Bb ? (d = {}, d.wmode = "7", d) : {}, b.ab);
                return new K(function(h, k) {
                    e.open(b.$c || "GET", c + "?" + Ec(g), !0);
                    e.withCredentials = !1 !==
                        b.Je;
                    b.Qa && (e.timeout = b.Qa);
                    jr(La, Wb(function(m) {
                        e.setRequestHeader(m[0], m[1])
                    }))(b.$a);
                    var l = C([a, e, Ta(b.ha), b.Bb, b.le, h, k], kr);
                    e.onreadystatechange = l;
                    try {
                        e.send(f)
                    } catch (m) {}
                })
            }

            function kr(a, c, b, d, e, f, g, h) {
                if (4 === c.readyState)
                    if (200 === c.status || e || g(b), e) 200 === c.status ? f(c.responseText) : g(Dj(c));
                    else {
                        e = null;
                        if (d) try {
                            (e = zb(a, c.responseText)) || g(b)
                        } catch (k) {
                            g(b)
                        }
                        f(e)
                    }
                return h
            }

            function Cj(a, c, b) {
                (b = Ec(b)) && (a += "?" + b);
                c.da && (a += (b ? "&" : "?") + c.da);
                return a
            }

            function lr(a, c, b) {
                var d = A(Md, Xb[c] || Yb);
                x(function(e) {
                        return d.unshift(e)
                    },
                    Le);
                return A(w(Lc([a, b]), la), d)
            }

            function Ej(a) {
                return {
                    N: function(c, b) {
                        var d = c.J;
                        if (!c.K || !d) return b();
                        var e = d["page-ref"],
                            f = d["page-url"];
                        e && f !== e ? d["page-ref"] = Fj(a, e) : delete d["page-ref"];
                        d["page-url"] = Fj(a, f).slice(0, Ga.sg);
                        return b()
                    }
                }
            }

            function Fj(a, c) {
                var b = S(a),
                    d = b.href,
                    e = b.host,
                    f = -1;
                if (!ia(c) || X(c)) return d;
                b = c.replace(Gj, "");
                if (-1 !== b.search(mr)) return b;
                var g = b.charAt(0);
                if ("?" === g && (f = d.search(/\?/), -1 === f) || "#" === g && (f = d.search(/#/), -1 === f)) return d + b;
                if (-1 !== f) return d.substr(0, f) + b;
                if ("/" === g) {
                    if (f = ib(d, e), -1 !== f) return d.substr(0, f + e.length) + b
                } else return d = d.split("/"), d[d.length - 1] = b, G("/", d);
                return ""
            }

            function Me(a, c) {
                return {
                    N: function(b, d) {
                        var e = Hj(c);
                        e = C([b, e, d], nr);
                        or(a, c, e)
                    },
                    Da: function(b, d) {
                        var e = b.K,
                            f = Hj(c);
                        if (e) {
                            var g = f.ta;
                            f.Xe === e && g && (x(la, g), f.ta = null)
                        }
                        d()
                    }
                }
            }

            function nr(a, c, b) {
                var d = a.K;
                d ? Wf(a) ? (c.Xe = d, b()) : c.ta ? c.ta.push(b) : b() : b()
            }

            function Wf(a) {
                return (a = a.K) && a.C("pv") && !a.C("ar")
            }

            function or(a, c, b) {
                if (Ne(a) && rb(a)) {
                    var d = pr(c);
                    if (!d.Sh) {
                        d.Sh = !0;
                        c = rd(a, c);
                        if (!c) {
                            b();
                            return
                        }
                        d.ta = [];
                        var e = function() {
                            d.ta && (x(la, d.ta), d.ta = null)
                        };
                        T(a, e, 3E3);
                        c.$.F(["initToChild"], e)
                    }
                    d.ta ? d.ta.push(b) : b()
                } else b()
            }

            function Ij(a, c) {
                return {
                    N: function(b, d) {
                        var e = b.K;
                        if (e && (!c || c.Sf)) {
                            var f = a.document.title;
                            b.M && b.M.title && (f = b.M.title);
                            var g = Fc("getElementsByTagName", a.document);
                            "string" !== typeof f && g && (f = g("title"), f = (f = n(f, "0.innerHtml")) ? f : "");
                            f = f.slice(0, Ga.rg);
                            e.D("t", f)
                        }
                        d()
                    }
                }
            }

            function Qb(a) {
                return function(c, b) {
                    return {
                        N: function(d, e) {
                            var f = d.K,
                                g = d.J;
                            f && g && x(function(h) {
                                var k = Pd[h],
                                    l = "bi",
                                    m = f;
                                k || (k = kg[h], l = "tel", m = me(d));
                                k && (k = B(l + ":" + h, k, null)(c, b, d), m.Wb(h, k))
                            }, a || qr());
                            e()
                        }
                    }
                }
            }

            function rr(a, c) {
                var b = Qd(a);
                c.F(["initToParent"], function(d) {
                    var e = d[0];
                    d = d[1];
                    window.window && (b.children[d.counterId] = {
                        info: d,
                        window: e.source
                    })
                }).F(["initToChild"], function(d) {
                    var e = d[0];
                    d = d[1];
                    e.source === a.parent && c.R("parentConnect", [e, d])
                }).F(["parentConnect"], function(d) {
                    var e = d[1];
                    e.counterId && (b.Ga[e.counterId] = {
                        info: e,
                        window: d[0].source
                    })
                })
            }

            function sr(a) {
                if (Ea("MutationObserver", a.MutationObserver)) {
                    var c =
                        Qd(a).children,
                        b = new a.MutationObserver(function() {
                            x(function(d) {
                                n(c[d], "window.window") || delete c[d]
                            }, ea(c))
                        });
                    Nb(a)(Ra(D, function() {
                        b.observe(a.document.body, {
                            subtree: !0,
                            childList: !0
                        })
                    }))
                }
            }

            function tr(a, c) {
                return function(b, d) {
                    var e, f = {
                        oc: ja(a)(Z),
                        key: a.Math.random(),
                        dir: 0
                    };
                    b.length && (f.oc = Ia(b[0]), f.key = parseFloat(b[1]), f.dir = Ia(b[2]));
                    z(d, c);
                    var g = (e = {
                        data: d
                    }, e.__yminfo = G(":", ["__yminfo", f.oc, f.key, f.dir]), e);
                    return {
                        meta: f,
                        $f: Ab(a, g) || ""
                    }
                }
            }

            function Nb(a, c) {
                function b(e) {
                    n(c, d) ? e() : T(a, u(e, b),
                        100)
                }
                void 0 === c && (c = a);
                var d = (c.nodeType ? "contentWindow." : "") + "document.body";
                return Ha(function(e, f) {
                    b(f)
                })
            }

            function Rd(a, c) {
                var b = c.Sd,
                    d = b || "uid";
                b = b ? a.location.hostname : void 0;
                var e = Uc(a),
                    f = Qa(a),
                    g = ja(a)(lg),
                    h = Jj(a, c),
                    k = h[0];
                h = h[1];
                var l = e.C("d");
                Kj(a, c);
                var m = !1;
                !h && k && (h = k, m = !0);
                if (!h) h = G("", [g, Xa(a, 1E6, 999999999)]), m = !0;
                else if (!l || 15768E3 < g - Ia(l)) m = !0;
                m && !c.Va && (e.D(d, h, 525600, b), e.D("d", "" + g, 525600, b));
                f.D(d, h);
                return h
            }

            function ur(a, c) {
                return !c.Va && Kj(a, c)
            }

            function Jj(a, c) {
                var b = Qa(a),
                    d =
                    Uc(a),
                    e = c.Sd || "uid";
                return [b.C(e), d.C(e)]
            }

            function Cc(a) {
                var c = J(a),
                    b = c.C("hitId");
                b || (b = Xa(a), c.D("hitId", b));
                return b
            }

            function of (a, c, b) {
                var d = Ma(c);
                return d && nj(a, c, va(["p", vr[d], "c"]), Ri, b)
            }

            function nf(a, c) {
                var b = oc(mg, a, c);
                if (!b) {
                    var d = oc("div", a, c);
                    d && (jb(mg + ",div", d).length || (b = d))
                }
                return b
            }

            function nj(a, c, b, d, e) {
                return N(function(f, g) {
                    var h = null;
                    g in Lj ? h = c.getAttribute && c.getAttribute(Lj[g]) : g in Yc && (h = "p" === g ? Yc[g](a, c, e) : "c" === g ? Yc[g](a, c, d) : Yc[g](a, c));
                    h && (h = h.slice(0, Mj[g] || 100), f[g] =
                        ng[g] ? "" + gc(h) : h);
                    return f
                }, {}, b)
            }

            function ji(a, c, b) {
                if (od(a)) return Ca(b.querySelectorAll(c));
                var d = Nj(c.split(" "), b);
                return ha(function(e, f) {
                    return Pb(a)(e, d) === f
                }, d)
            }

            function Nj(a, c) {
                var b = ra([], a),
                    d = b.shift();
                if (!d) return [];
                d = c.getElementsByTagName(d);
                return b.length ? wc(u(b, Nj), Ca(d)) : Ca(d)
            }

            function dc(a, c) {
                if (c.querySelector) return c.querySelector(a);
                var b = jb(a, c);
                return b && b.length ? b[0] : null
            }

            function jb(a, c) {
                if (!c || !c.querySelectorAll) return [];
                var b = c.querySelectorAll(a);
                return b ? Ca(b) : []
            }

            function qj(a) {
                var c = null;
                try {
                    c = a.target || a.srcElement
                } catch (b) {}
                if (c) {
                    3 === c.nodeType && (c = c.parentNode);
                    for (a = c && c.nodeName && ("" + c.nodeName).toLowerCase(); n(c, "parentNode.nodeName") && ("a" !== a && "area" !== a || !c.href && !c.getAttribute("xlink:href"));) a = (c = c.parentNode) && c.nodeName && ("" + c.nodeName).toLowerCase();
                    return c.href ? c : null
                }
                return null
            }

            function Mc(a, c) {
                var b = fb(a);
                if (b) {
                    var d = a.document,
                        e = b("script");
                    e.src = c.src;
                    e.type = c.type || "text/javascript";
                    e.charset = c.charset || "utf-8";
                    e.async = c.async || !0;
                    try {
                        var f = d.getElementsByTagName("head")[0];
                        if (!f) {
                            var g = d.getElementsByTagName("html")[0];
                            f = b("head");
                            g && g.appendChild(f)
                        }
                        f.insertBefore(e, f.firstChild);
                        return e
                    } catch (h) {}
                }
            }

            function ei(a, c) {
                var b = Oj(a);
                I(c, b.sb) && (b.sb = ha(w(Ba(c), Gc), b.sb), b.sb.length || (xc(b.jb), b.jb = null))
            }

            function di(a, c, b) {
                var d = Oj(c);
                I(b, d.sb) || d.sb.push(b);
                if (Wa(d.jb)) {
                    b = fb(a);
                    if (!b) return null;
                    b = b("iframe");
                    z(b.style, {
                        display: "none",
                        width: "1px",
                        height: "1px",
                        visibility: "hidden"
                    });
                    b.src = c;
                    a = fc(a);
                    if (!a) return null;
                    a.appendChild(b);
                    d.jb = b
                } else(a = n(d.jb, "contentWindow")) && a.postMessage("frameReinit", "*");
                return d.jb
            }

            function wr(a, c) {
                var b = R(a) ? a : [a];
                c = c || document;
                if (c.querySelectorAll) {
                    var d = G(", ", A(function(e) {
                        return "." + e
                    }, b));
                    return Ca(c.querySelectorAll(d))
                }
                if (c.getElementsByClassName) return wc(w(Fa("getElementsByClassName", c), Ca), b);
                d = c.getElementsByTagName("*");
                b = "(" + G("|", b) + ")";
                return ha(u(b, ic), Ca(d))
            }

            function uf(a, c, b) {
                for (var d = "", e = Yf(), f = Ma(c) || "*"; c && c.parentNode && !I(f, ["BODY", "HTML"]);) d += e[f] || "*", d += Pj(a, c, b) ||
                    "", c = c.parentElement, f = Ma(c) || "*";
                return ab(d, 128)
            }

            function Pj(a, c, b) {
                if (a = Oe(a, c)) {
                    a = a.childNodes;
                    for (var d = c && c.nodeName, e = 0, f = 0; f < a.length; f += 1)
                        if (d === (a[f] && a[f].nodeName)) {
                            if (c === a[f]) return e;
                            b && a[f] === b || (e += 1)
                        }
                }
                return 0
            }

            function Oe(a, c) {
                var b = n(a, "document");
                return c && c !== b.documentElement ? c === Hc(a) ? b.documentElement : n(c, "parentNode") : null
            }

            function Of(a, c) {
                var b = og(a, c),
                    d = b.left;
                b = b.top;
                var e = Pe(a, c);
                return [d, b, e[0], e[1]]
            }

            function Pe(a, c) {
                var b = n(a, "document");
                if (c === Hc(a) || c === b.documentElement) {
                    b =
                        fc(a);
                    var d = Oc(a);
                    return [Math.max(b.scrollWidth, d[0]), Math.max(b.scrollHeight, d[1])]
                }
                return (b = Nc(c)) ? [b.width, b.height] : [c.offsetWidth, c.offsetHeight]
            }

            function og(a, c) {
                var b = c,
                    d = n(a, "document"),
                    e = Ma(b);
                if (!b || !b.ownerDocument || "PARAM" === e || b === Hc(a) || b === d.documentElement) return {
                    left: 0,
                    top: 0
                };
                if (d = Nc(b)) return b = ag(a), {
                    left: Math.round(d.left + b.x),
                    top: Math.round(d.top + b.y)
                };
                for (e = d = 0; b;) d += b.offsetLeft, e += b.offsetTop, b = b.offsetParent;
                return {
                    left: d,
                    top: e
                }
            }

            function oc(a, c, b) {
                if (!(c && c.Element && c.Element.prototype &&
                        c.document && b)) return null;
                if (c.Element.prototype.closest && Ea("closest", c.Element.prototype.closest) && b.closest) return b.closest(a);
                var d = qi(c);
                if (d) {
                    for (; b && 1 === b.nodeType && !d.call(b, a);) b = b.parentElement || b.parentNode;
                    return b && 1 === b.nodeType ? b : null
                }
                if (od(c)) {
                    for (a = Ca((c.document || c.ownerDocument).querySelectorAll(a)); b && 1 === b.nodeType && -1 === Pb(c)(b, a);) b = b.parentElement || b.parentNode;
                    return b && 1 === b.nodeType ? b : null
                }
                return null
            }

            function od(a) {
                return !(!Ea("querySelectorAll", n(a, "Element.prototype.querySelectorAll")) ||
                    !a.document.querySelectorAll)
            }

            function Bh(a, c, b) {
                var d = c.top,
                    e = c.bottom,
                    f = c.left,
                    g = b.w;
                b = b.h;
                a = a.Math;
                c = a.min(a.max(c.right, 0), g) - a.min(a.max(f, 0), g);
                return (a.min(a.max(e, 0), b) - a.min(a.max(d, 0), b)) * c
            }

            function Qj(a) {
                return Qe(a) && !$a(Ba(a.type), xr) ? Re(a) ? !a.checked : !a.value : yr(a) ? !a.value : zr(a) ? 0 > a.selectedIndex : !0
            }

            function Ma(a) {
                if (a) try {
                    var c = a.nodeName;
                    if (ia(c)) return c;
                    c = a.tagName;
                    if (ia(c)) return c
                } catch (b) {}
            }

            function Rj(a, c) {
                var b = a.document.getElementsByTagName("form");
                return Pb(a)(c, Ca(b))
            }

            function Ar(a, c, b) {
                b = Fc("dispatchEvent", b || a.document);
                var d = null,
                    e = n(a, "Event.prototype.constructor");
                if (e && (Ea("(Event|Object|constructor)", e) || pg(a) && "[object Event]" === "" + e)) try {
                    d = new a.Event(c)
                } catch (f) {
                    if ((a = Fc("createEvent", n(a, "document"))) && O(a)) {
                        try {
                            d = a(c)
                        } catch (g) {}
                        d && d.initEvent && d.initEvent(c, !1, !1)
                    }
                }
                d && b(d)
            }

            function Nc(a) {
                try {
                    return a.getBoundingClientRect && a.getBoundingClientRect()
                } catch (c) {
                    return "object" === typeof c && null !== c && 16389 === (c.xf && c.xf & 65535) ? {
                        top: 0,
                        bottom: 0,
                        left: 0,
                        width: 0,
                        height: 0,
                        right: 0
                    } : null
                }
            }

            function ag(a) {
                var c = Hc(a),
                    b = n(a, "document");
                return {
                    x: a.pageXOffset || b.documentElement && b.documentElement.scrollLeft || c && c.scrollLeft || 0,
                    y: a.pageYOffset || b.documentElement && b.documentElement.scrollTop || c && c.scrollTop || 0
                }
            }

            function Oc(a) {
                var c = je(a);
                if (c) {
                    var b = c[2];
                    return [a.Math.round(c[0] * b), a.Math.round(c[1] * b)]
                }
                c = fc(a);
                return [n(c, "clientWidth") || a.innerWidth, n(c, "clientHeight") || a.innerHeight]
            }

            function je(a) {
                var c = n(a, "visualViewport.width"),
                    b = n(a, "visualViewport.height");
                a = n(a, "visualViewport.scale");
                return ca(c) || ca(b) ? null : [Math.floor(c), Math.floor(b), a]
            }

            function fc(a) {
                var c = n(a, "document") || {},
                    b = c.documentElement;
                return "CSS1Compat" === c.compatMode ? b : Hc(a) || b
            }

            function Hc(a) {
                a = n(a, "document");
                try {
                    return a.getElementsByTagName("body")[0]
                } catch (c) {
                    return null
                }
            }

            function ic(a, c) {
                try {
                    return (new RegExp("(?:^|\\s)" + a + "(?:\\s|$)")).test(c.className)
                } catch (b) {
                    return !1
                }
            }

            function Ic(a) {
                var c;
                try {
                    if (c = a.target || a.srcElement) !c.ownerDocument && c.documentElement ? c = c.documentElement :
                        c.ownerDocument !== document && (c = null)
                } catch (b) {}
                return c
            }

            function xc(a) {
                var c = a && a.parentNode;
                c && c.removeChild(a)
            }

            function Mb(a) {
                return a ? a.innerText || "" : ""
            }

            function Rf(a) {
                if (ca(a)) return !1;
                a = a.nodeType;
                return 3 === a || 8 === a
            }

            function Sj(a, c, b) {
                void 0 === c && (c = "");
                void 0 === b && (b = "_ym");
                var d = "" + b + c;
                d && (d += "_");
                return {
                    Ld: Br(a),
                    C: function(e, f) {
                        var g = Tj(a, "" + d + e);
                        return Wa(g) && !X(f) ? f : g
                    },
                    D: function(e, f) {
                        Uj(a, "" + d + e, f);
                        return this
                    },
                    pc: function(e) {
                        Vj(a, "" + d + e);
                        return this
                    }
                }
            }

            function Uj(a, c, b) {
                var d = qg(a);
                a =
                    Ab(a, b);
                if (!Wa(a)) try {
                    d.setItem(c, a)
                } catch (e) {}
            }

            function Tj(a, c) {
                var b = qg(a);
                try {
                    return zb(a, b.getItem(c))
                } catch (d) {}
                return null
            }

            function Vj(a, c) {
                var b = qg(a);
                try {
                    b.removeItem(c)
                } catch (d) {}
            }

            function qg(a) {
                try {
                    return a.localStorage
                } catch (c) {}
                return null
            }

            function Ab(a, c, b) {
                try {
                    return a.JSON.stringify(c, null, b)
                } catch (d) {
                    return null
                }
            }

            function me(a, c, b) {
                void 0 === b && (b = null);
                a.Ja || (a.Ja = vf());
                c && a.Ja.Wb(c, b);
                return a.Ja
            }

            function Se(a) {
                return {
                    N: function(c, b) {
                        var d = a.document,
                            e = c.K;
                        if (e && rg(a)) {
                            var f = fa(a),
                                g = function(h) {
                                    rg(a) || (f.yb(d, Wj, g), b());
                                    return h
                                };
                            f.F(d, Wj, g);
                            e.D("pr", "1")
                        } else b()
                    }
                }
            }

            function Sd(a) {
                return function(c, b, d) {
                    return function(e, f) {
                        var g = A(w(Md, Lc([c, f]), la), Xj[a] || []);
                        g = ra(g, d);
                        return Yj(c, b, g)(e)
                    }
                }
            }

            function Yj(a, c, b) {
                var d = Zb(a, c);
                return function(e) {
                    return Zj(b, e, !0).then(function() {
                        var f = e.na || {},
                            g = f.Kh,
                            h = void 0 === g ? "" : g;
                        g = f.Ba;
                        var k = void 0 === g ? "" : g;
                        f = f.Lh;
                        f = A(function(l) {
                            return Ga.Sa + "//" + ("" + h + l || jc) + "/" + k
                        }, void 0 === f ? [jc] : f);
                        return d(e, f)
                    }).then(function(f) {
                        var g = f.Rc;
                        f = f.ig;
                        e.Ci = g;
                        e.Gj = f;
                        return Zj(b, e).then(u(g, Q))
                    })
                }
            }

            function Zb(a, c) {
                return function(b, d) {
                    return ak(a, c, d, b)
                }
            }

            function ak(a, c, b, d, e, f) {
                var g;
                void 0 === e && (e = 0);
                void 0 === f && (f = 0);
                var h = z({
                        ha: []
                    }, d.ba),
                    k = c[f],
                    l = k[0];
                k = k[1];
                var m = b[e];
                h.$a && h.$a["Content-Type"] || !h.da || (h.$a = z({}, h.$a, (g = {}, g["Content-Type"] = "application/x-www-form-urlencoded", g)), h.da = "site-info=" + re(h.da));
                h.$c = h.da ? "POST" : "GET";
                h.ab = Cr(a, d, l);
                h.Ba = (d.na || {}).Ba;
                h.ha.push(l);
                z(d.ba, h);
                g = "" + m + (d.Oc && d.Oc.hi ? "/1" : "");
                var p = 0;
                p = Dr(a, g, h);
                return k(g,
                    h).then(function(q) {
                    var r = p,
                        t, y;
                    ub(a, (t = {}, t.name = "requestSuccess", t.data = (y = {}, y.body = q, y.requestId = r, y), t));
                    return {
                        Rc: q,
                        ig: e
                    }
                })["catch"](function(q) {
                    var r = p,
                        t, y;
                    ub(a, (t = {}, t.name = "requestFail", t.data = (y = {}, y.error = q, y.requestId = r, y), t));
                    r = f + 1 >= c.length;
                    t = e + 1 >= b.length;
                    r && t && Va(q);
                    return ak(a, c, b, d, !t && r ? e + 1 : e, r ? 0 : f + 1)
                })
            }

            function Cr(a, c, b) {
                var d = z({}, c.J);
                a = ja(a);
                c.K && (d["browser-info"] = Ja(c.K.l()).D("st", a(lg)).Ha());
                !d.t && (c = c.Ja) && (c.D("ti", b), d.t = c.Ha());
                return d
            }

            function Dr(a, c, b) {
                var d, e, f,
                    g = Xa(a),
                    h = b.ha,
                    k = b.da,
                    l = b.$a,
                    m = b.ab;
                b = b.$c;
                ub(a, (d = {}, d.name = "request", d.data = (e = {}, e.url = c, e.requestId = g, e.senderParams = (f = {}, f.rBody = k, f.debugStack = h, f.rHeaders = l, f.rQuery = m, f.verb = b, f), e), d));
                return g
            }

            function bk(a, c, b, d) {
                a[c] || (a[c] = []);
                b && !ca(d) && ck(a[c], b, d)
            }

            function ck(a, c, b) {
                for (var d = [c, b], e = -1E4, f = 0; f < a.length; f += 1) {
                    var g = a[f],
                        h = g[0];
                    g = g[1];
                    if (b === g && h === c) return;
                    if (b < g && b >= e) {
                        a.splice(f, 0, d);
                        return
                    }
                    e = g
                }
                a.push(d)
            }

            function Zj(a, c, b) {
                void 0 === b && (b = !1);
                return new K(function(d, e) {
                    function f(k,
                        l) {
                        l();
                        d()
                    }
                    var g = a.slice();
                    g.push({
                        N: f,
                        Da: f
                    });
                    var h = ec(g, function(k, l) {
                        var m = b ? k.N : k.Da;
                        if (m) try {
                            m(c, l)
                        } catch (p) {
                            h(Er), e(p)
                        } else l()
                    });
                    h(dk)
                })
            }

            function Tb(a, c, b) {
                var d = b || "as";
                if (a.postMessage && !a.attachEvent) {
                    b = fa(a);
                    var e = "__ym__promise_" + Xa(a) + "_" + Xa(a),
                        f = D;
                    d = E(a, d, function(g) {
                        try {
                            var h = g.data
                        } catch (k) {
                            return
                        }
                        h === e && (f(), g.stopPropagation && g.stopPropagation(), c())
                    });
                    f = b.F(a, ["message"], d);
                    a.postMessage(e, "*")
                } else T(a, c, 0, d)
            }

            function th(a, c, b, d, e) {
                void 0 === d && (d = 1);
                void 0 === e && (e = "itc");
                c = ec(c,
                    b);
                nd(a, c, d)(Ra(E(a, e), D))
            }

            function nd(a, c, b, d) {
                void 0 === b && (b = 1);
                void 0 === d && (d = ek);
                sg = Infinity === b;
                return Ha(function(e, f) {
                    function g() {
                        try {
                            var k = c(d(a, b));
                            h = h.concat(k)
                        } catch (l) {
                            return e(l)
                        }
                        c(Fr);
                        if (c(Td)) return f(h), fk(a);
                        sg ? (c(d(a, 1E4)), f(h), fk(a)) : T(a, g, 100)
                    }
                    var h = [];
                    Gr(g)
                })
            }

            function fk(a) {
                if (tg.length) {
                    var c = tg.shift();
                    sg ? c() : T(a, c, 100)
                } else ug = !1
            }

            function Gr(a) {
                ug ? tg.push(a) : (ug = !0, a())
            }

            function Hf(a) {
                return Ha(function(c, b) {
                    b(a)
                })
            }

            function Ip(a) {
                return Ha(function(c, b) {
                    a.then(b, c)
                })
            }

            function Hr(a) {
                var c = [],
                    b = 0;
                return Ha(function(d, e) {
                    x(function(f, g) {
                        f(Ra(d, function(h) {
                            try {
                                c[g] = h, b += 1, b === a.length && e(c)
                            } catch (k) {
                                d(k)
                            }
                        }))
                    }, a)
                })
            }

            function Hp(a) {
                var c = [],
                    b = !1;
                return Ha(function(d, e) {
                    function f(g) {
                        c.push(g) === a.length && d(c)
                    }
                    x(function(g) {
                        g(Ra(f, function(h) {
                            if (!b) try {
                                e(h), b = !0
                            } catch (k) {
                                f(k)
                            }
                        }))
                    }, a)
                })
            }

            function Ra(a, c) {
                return function(b) {
                    return b(a, c)
                }
            }

            function ec(a, c) {
                return Ha({
                    Ua: a,
                    Od: c || Q,
                    ve: !1,
                    wa: 0
                })
            }

            function dk(a) {
                function c() {
                    function d() {
                        b = !0;
                        a.wa += 1
                    }
                    b = !1;
                    a.Od(a.Ua[a.wa], function() {
                        d()
                    });
                    b || (a.wa +=
                        1, d = u(a, dk))
                }
                for (var b = !0; !Td(a) && b;) c()
            }

            function ek(a, c) {
                return function(b) {
                    var d = ja(a),
                        e = d(Z);
                    return gk(function(f, g) {
                        d(Z) - e >= c && g(hk)
                    })(b)
                }
            }

            function vg(a, c) {
                return function(b) {
                    var d = ja(a),
                        e = d(Z);
                    return wg(function(f) {
                        d(Z) - e >= c && hk(f)
                    })(b)
                }
            }

            function wg(a) {
                return function(c) {
                    for (var b; c.Ua.length && !Td(c);) b = c.Ua.pop(), b = c.Od(b, c.Ua), a(c);
                    return b
                }
            }

            function Ir(a) {
                Td(a) && Va(Pa("i"));
                var c = a.Od(a.Ua[a.wa]);
                a.wa += 1;
                return c
            }

            function Fr(a) {
                a.ve = !1
            }

            function hk(a) {
                a.ve = !0
            }

            function Er(a) {
                a.wa = a.Ua.length
            }

            function Td(a) {
                return a.ve || a.Ua.length <= a.wa
            }

            function Cb(a) {
                a = ja(a);
                return Math.round(a(ik) / 50)
            }

            function ik(a) {
                var c = a.Aa,
                    b = c[1];
                a = c[0] && b ? b() : Z(a) - a.Mh;
                return Math.round(a)
            }

            function lg(a) {
                return Math.round(Z(a) / 1E3)
            }

            function qb(a) {
                return Math.floor(Z(a) / 1E3 / 60)
            }

            function Z(a) {
                var c = a.Ee;
                return 0 !== c ? c : xg(a.l, a.Aa)
            }

            function hg(a) {
                var c = fa(a),
                    b = jk(a),
                    d = {
                        l: a,
                        Ee: 0,
                        Aa: b,
                        Mh: xg(a, b)
                    },
                    e = b[1];
                b[0] && e || c.F(a, ["beforeunload", "unload"], function() {
                    0 === d.Ee && (d.Ee = xg(a, d.Aa))
                });
                return Ha(d)
            }

            function Jr(a) {
                return (10 >
                    a ? "0" : "") + a
            }

            function Yi(a, c, b) {
                function d() {
                    f = 0;
                    g && (g = !1, f = T(a, d, b), e.R(h))
                }
                var e = Jd(a),
                    f, g = !1,
                    h;
                c.F(function(k) {
                    g = !0;
                    h = k;
                    f || d();
                    return D
                });
                return e
            }

            function Kr(a, c) {
                return a.clearInterval(c)
            }

            function Lr(a, c, b, d) {
                return a.setInterval(E(a, "i.err." + (d || "def"), c), b)
            }

            function T(a, c, b, d) {
                return Od(a, E(a, "d.err." + (d || "def"), c), b)
            }

            function ud(a) {
                var c = {};
                return {
                    F: function(b, d) {
                        x(function(e) {
                            n(c, e) || (c[e] = Jd(a));
                            c[e].F(d)
                        }, b);
                        return this
                    },
                    ga: function(b, d) {
                        x(function(e) {
                            n(c, e) && c[e].ga(d)
                        }, b);
                        return this
                    },
                    R: function(b, d) {
                        return n(c, b) ? E(a, "e." + d, c[b].R)(d) : []
                    }
                }
            }

            function Jd(a) {
                var c = [],
                    b = {};
                b.Bj = c;
                b.F = w(Fa("push", c), u(b, Q));
                b.ga = w(vb(Pb(a))(c), vb(Fa("splice", c))(1), u(b, Q));
                b.R = w(Q, vb(la), Mr(c));
                return b
            }

            function kk(a, c, b, d, e, f) {
                a = Nr(a);
                var g = a.F,
                    h = a.ga;
                f = f ? h : g;
                if (c[f])
                    if (a.Mi) c[f](b, d, e);
                    else c[f]("on" + b, d)
            }

            function B(a, c, b) {
                return function() {
                    return E(arguments[0], a, c, b).apply(this, arguments)
                }
            }

            function E(a, c, b, d, e) {
                var f = b || Va;
                return function() {
                    var g = d;
                    try {
                        g = f.apply(e || null, arguments)
                    } catch (h) {
                        Rc(a,
                            c, h)
                    }
                    return g
                }
            }

            function xg(a, c) {
                var b = c || jk(a),
                    d = b[0];
                b = b[1];
                return !isNaN(d) && O(b) ? Math.round(b() + d) : a.Date.now ? a.Date.now() : (new a.Date).getTime()
            }

            function jk(a) {
                a = Dd(a);
                var c = n(a, "timing.navigationStart"),
                    b = n(a, "now");
                b && (b = H(b, a));
                return [c, b]
            }

            function Dd(a) {
                return n(a, "performance") || n(a, "webkitPerformance")
            }

            function Rc(a, c, b) {
                var d = "u.a.e",
                    e = "";
                b && ("object" === typeof b ? (b.unk && Va(b), d = b.message, e = "string" === typeof b.stack && b.stack.replace(/\n/g, "\\n") || "n.s.e.s") : d = "" + b);
                Or(d) || $a(u(d, eb), Pr) ||
                    Qr(d) && .1 <= a.Math.random() || x(w(Q, Lc(["jserrs", d, c, e]), la), lk)
            }

            function fe() {
                var a = Oa(arguments);
                return Va(Ta(a))
            }

            function Ta(a) {
                var c = "";
                R(a) ? c = G(".", a) : ia(a) && (c = a);
                return Pa("err.kn(" + Ga.bc + ")" + c)
            }

            function Dj(a) {
                return Pa("http." + a.status + ".st." + a.statusText + ".rt." + ("" + a.responseText).substring(0, 50))
            }

            function Rr(a) {
                this.message = a
            }

            function ub(a, c) {
                if (Te(a)) {
                    var b = c.counterKey;
                    if (b) {
                        var d = b.split(":");
                        b = d[1];
                        d = yg(pe(d[0]));
                        if ("1" === b || d) return
                    }
                    b = Sr(a);
                    1E3 === b.length && b.shift();
                    b.push(c)
                }
            }

            function ri(a,
                c, b) {
                zg(a, "metrika_enabled", "1", 0, c, b, !0);
                var d = mk(a);
                (d = d && d.metrika_enabled) && nk(a, "metrika_enabled", c, b, !0);
                return !!d
            }

            function zg(a, c, b, d, e, f, g) {
                void 0 === g && (g = !1);
                if (si(a, ve, c)) {
                    var h = c + "=" + encodeURIComponent(b) + ";";
                    h += "" + Tr(a);
                    if (d) {
                        var k = new Date;
                        k.setTime(k.getTime() + 6E4 * d);
                        h += "expires=" + k.toUTCString() + ";"
                    }
                    e && (d = e.replace(Ur, ""), h += "domain=" + d + ";");
                    try {
                        a.document.cookie = h + ("path=" + (f || "/")), g || (ok(a)[c] = b)
                    } catch (l) {}
                }
            }

            function ve(a, c) {
                var b = ok(a);
                return b ? b[c] || null : null
            }

            function mk(a) {
                try {
                    var c =
                        a.document.cookie;
                    if (!ca(c)) {
                        var b = {};
                        x(function(d) {
                            d = d.split("=");
                            var e = d[1];
                            b[ab(d[0])] = ab(pk(e))
                        }, (c || "").split(";"));
                        return b
                    }
                } catch (d) {}
                return null
            }

            function si(a, c, b) {
                return !Ag.length || I(b, Ue) ? !0 : N(function(d, e) {
                    return d && e(a, c, b)
                }, !0, Ag)
            }

            function Ec(a) {
                return a ? w(La, Zf(function(c, b) {
                    var d = b[0],
                        e = b[1];
                    X(e) || ca(e) || c.push(d + "=" + re(e));
                    return c
                }, []), Ae("&"))(a) : ""
            }

            function Vr(a) {
                return a ? w(Wb(function(c) {
                    c = c.split("=");
                    var b = c[1];
                    return [c[0], ca(b) ? void 0 : pk(b)]
                }), Zf(function(c, b) {
                    c[b[0]] = b[1];
                    return c
                }, {}))(a.split("&")) : {}
            }

            function pk(a) {
                var c = "";
                try {
                    c = decodeURIComponent(a)
                } catch (b) {}
                return c
            }

            function re(a) {
                try {
                    return encodeURIComponent(a)
                } catch (c) {}
                a = G("", ha(function(c) {
                    return 55296 >= c.charCodeAt(0)
                }, a.split("")));
                return encodeURIComponent(a)
            }

            function ab(a, c) {
                if (a) {
                    var b = qk ? qk.call(a) : ("" + a).replace(Gj, "");
                    return c && b.length > c ? b.substring(0, c) : b
                }
                return ""
            }

            function zj(a) {
                var c = a.match(rk);
                if (c) {
                    a = c[1];
                    if (c = c[2]) return I(c, Bg) ? c : !1;
                    if (a) return Bg[0]
                }
                return !1
            }

            function S(a) {
                return N(function(c,
                    b) {
                    var d = n(a, "location." + b);
                    c[b] = d ? "" + d : "";
                    return c
                }, {}, Wr)
            }

            function sk(a) {
                return N(function(c, b) {
                    c[ge[b[0]].ea] = b[1];
                    return c
                }, {}, La(a))
            }

            function qc(a) {
                x(function(c) {
                    var b = c[1];
                    ge[c[0]] = {
                        ea: b.ea,
                        Pa: b.Pa
                    }
                }, La(a))
            }

            function nm(a, c, b, d, e) {
                var f = sh(a, b, d, e);
                a = N(function(g, h) {
                    var k = h[1],
                        l = k.Pa;
                    k = f[k.ea];
                    g[h[0]] = l ? l(k) : k;
                    return g
                }, {}, La(c));
                uj(a, a.X || {});
                return a
            }

            function sh(a, c, b, d) {
                var e;
                return na(a) ? a : (e = {}, e.id = a, e.type = b, e.defer = d, e.params = c, e)
            }

            function Xr(a) {
                a = L(a);
                return rc[a] && rc[a].Ti || null
            }

            function tk(a) {
                a =
                    L(a);
                return rc[a] && rc[a].Si
            }

            function uj(a, c) {
                var b = L(a),
                    d = n(c, "__ym.turbo_page"),
                    e = n(c, "__ym.turbo_page_id");
                rc[b] || (rc[b] = {});
                if (d || e) rc[b].Si = d, rc[b].Ti = e
            }

            function uk(a) {
                return Ve(a) || Bd(a) || /mobile/i.test(lb(a)) || !X(n(a, "orientation"))
            }

            function zf(a, c) {
                if (Ud(a) && c) {
                    var b = lb(a).match(Cg);
                    if (b && b.length) return +b[1] >= c
                }
                return !1
            }

            function Af(a, c) {
                var b = lb(a);
                return b && (b = b.match(Yr)) && 1 < b.length ? Ia(b[1]) >= c : !1
            }

            function rg(a) {
                return I("prerender", A(u(n(a, "document"), n), ["webkitVisibilityState", "visibilityState"]))
            }

            function Xa(a, c, b) {
                var d = X(b);
                X(c) && d ? (d = 1, c = 1073741824) : d ? d = 1 : (d = c, c = b);
                return a.Math.floor(a.Math.random() * (c - d)) + d
            }

            function Zr() {
                var a = Oa(arguments),
                    c = a[0];
                for (a = a.slice(1); a.length;) {
                    var b = a.shift(),
                        d;
                    for (d in b) Lb(b, d) && (c[d] = b[d]);
                    Lb(b, "toString") && (c.toString = b.toString)
                }
                return c
            }

            function $r(a) {
                return function(c) {
                    return c ? a(c) : []
                }
            }

            function vk(a) {
                return X(a) ? [] : Dg(function(c, b) {
                    c.push([b, a[b]]);
                    return c
                }, [], wk(a))
            }

            function wk(a) {
                var c = [],
                    b;
                for (b in a) Lb(a, b) && c.push(b);
                return c
            }

            function pe(a) {
                try {
                    return parseInt(a,
                        10)
                } catch (c) {
                    return null
                }
            }

            function mc(a, c) {
                return a.isFinite(c) && !a.isNaN(c) && "[object Number]" === Object.prototype.toString.call(c)
            }

            function as(a) {
                for (var c = [], b = a.length - 1; 0 <= b; --b) c[a.length - 1 - b] = a[b];
                return c
            }

            function ra(a, c) {
                x(w(Q, Fa("push", a)), c);
                return a
            }

            function xe(a, c) {
                return Array.prototype.sort.call(c, a)
            }

            function We(a) {
                return a.splice(0, a.length)
            }

            function Ca(a) {
                return a ? R(a) ? a : Vd ? Vd(a) : "number" === typeof a.length && 0 <= a.length ? xk(a) : [] : []
            }

            function bs(a, c) {
                for (var b = 0; b < c.length; b += 1)
                    if (b in
                        c && a.call(c, c[b], b)) return !0;
                return !1
            }

            function cs(a, c) {
                return N(function(b, d, e) {
                    d = a(d, e);
                    return b.concat(R(d) ? d : [d])
                }, [], c)
            }

            function yk(a, c) {
                return N(function(b, d, e) {
                    b.push(a(d, e));
                    return b
                }, [], c)
            }

            function ds(a, c) {
                if (!Ud(a)) return !0;
                try {
                    c.call({
                        0: !0,
                        length: -Math.pow(2, 32) + 1
                    }, function() {
                        throw 1;
                    })
                } catch (b) {
                    return !1
                }
                return !0
            }

            function es(a, c) {
                for (var b = "", d = 0; d < c.length; d += 1) b += "" + (d ? a : "") + c[d];
                return b
            }

            function fs(a, c) {
                return 1 <= zk(Ba(a), c).length
            }

            function gs(a, c) {
                for (var b = 0; b < c.length; b += 1)
                    if (a.call(c,
                            c[b], b)) return c[b]
            }

            function zk(a, c) {
                return Dg(function(b, d, e) {
                    a(d, e) && b.push(d);
                    return b
                }, [], c)
            }

            function Ad(a, c, b) {
                return b ? a : c
            }

            function hs(a, c) {
                return N(function(b, d, e) {
                    return b ? !!a(d, e) : !1
                }, !0, c)
            }

            function cg(a, c, b) {
                try {
                    if (O(c)) {
                        var d = Oa(arguments).slice(3);
                        ca(b) ? c.apply(null, d) : c.apply(b, d)
                    }
                } catch (e) {
                    Od(a, u(e, Va), 0)
                }
            }

            function Va(a) {
                throw a;
            }

            function Od(a, c, b) {
                return Fc("setTimeout", a)(c, b)
            }

            function ka(a, c) {
                return Fc("clearTimeout", a)(c)
            }

            function Id() {
                return []
            }

            function Jc() {
                return {}
            }

            function Fc(a,
                c) {
                var b = n(c, a),
                    d = n(c, "constructor.prototype." + a) || b;
                try {
                    if (d && d.apply) return function() {
                        return d.apply(c, arguments)
                    }
                } catch (e) {
                    return b
                }
                return d
            }

            function mb(a, c, b) {
                return function() {
                    var d = J(arguments[0]),
                        e = b ? "global" : "m1340",
                        f = d.C(e, {}),
                        g = n(f, a);
                    g || (g = v(c), f[a] = g, d.D(e, f));
                    return g.apply(null, arguments)
                }
            }

            function td(a, c) {
                void 0 === c && (c = {});
                if (!a || 1 > a.length) return c;
                Bb(function(b, d, e) {
                    if (e === a.length - 1) return b;
                    e === a.length - 2 ? b[d] = a[e + 1] : Lb(b, d) || (b[d] = {});
                    return b[d]
                }, c, a);
                return c
            }

            function Wd(a) {
                a =
                    a.Ya = a.Ya || {};
                var c = a._metrika = a._metrika || {};
                return {
                    Ia: function(b, d) {
                        Eg.call(c, b) || (c[b] = d);
                        return this
                    },
                    D: function(b, d) {
                        c[b] = d;
                        return this
                    },
                    C: function(b, d) {
                        var e = c[b];
                        return Eg.call(c, b) || X(d) ? e : d
                    }
                }
            }

            function Lb(a, c) {
                return ca(a) ? !1 : Eg.call(a, c)
            }

            function v(a, c) {
                var b = [],
                    d = [];
                var e = c ? c : Q;
                return function() {
                    var f = Oa(arguments),
                        g = e.apply(void 0, f),
                        h = pf(g, d);
                    if (-1 !== h) return b[h];
                    f = a.apply(void 0, f);
                    b.push(f);
                    d.push(g);
                    return f
                }
            }

            function Pb(a) {
                if (Fg) return Fg;
                var c = !1;
                try {
                    c = [].indexOf && 0 === [void 0].indexOf(void 0)
                } catch (d) {}
                var b =
                    a.Array && a.Array.prototype && oa(a.Array.prototype.indexOf, "indexOf");
                a = void 0;
                return Fg = a = c && b ? function(d, e) {
                    return b.call(e, d)
                } : is
            }

            function is(a, c) {
                for (var b = 0; b < c.length; b += 1)
                    if (c[b] === a) return b;
                return -1
            }

            function la(a, c) {
                return c ? a(c) : a()
            }

            function w() {
                var a = Oa(arguments),
                    c = a.shift();
                return function() {
                    var b = c.apply(void 0, arguments);
                    return N(Ak, b, a)
                }
            }

            function Zf(a, c) {
                return C([a, c], N)
            }

            function Dg(a, c, b) {
                for (var d = 0, e = b.length; d < e;) c = a(c, b[d], d), d += 1;
                return c
            }

            function gb(a) {
                return Fa("test", a)
            }

            function Fa(a,
                c) {
                return H(c[a], c)
            }

            function u(a, c) {
                return H(c, null, a)
            }

            function C(a, c) {
                return H.apply(void 0, ld([c, null], a))
            }

            function js(a) {
                return function() {
                    var c = Oa(arguments);
                    return a.apply(c[0], [c[1]].concat(c.slice(2)))
                }
            }

            function ks() {
                var a = Oa(arguments),
                    c = a[0],
                    b = a[1],
                    d = a.slice(2);
                return function() {
                    var e = ld(d, Oa(arguments));
                    if (Function.prototype.call) return Function.prototype.call.apply(c, ld([b], e));
                    if (b) {
                        for (var f = "_b"; b[f];) f += "_" + f.length;
                        b[f] = c;
                        e = b[f] && Bk(f, e, b);
                        delete b[f];
                        return e
                    }
                    return Bk(c, e)
                }
            }

            function Bk(a,
                c, b) {
                void 0 === c && (c = []);
                b = b || {};
                var d = c.length,
                    e = a;
                O(e) && (e = "d", b[e] = a);
                var f;
                d ? 1 === d ? f = b[e](c[0]) : 2 === d ? f = b[e](c[0], c[1]) : 3 === d ? f = b[e](c[0], c[1], c[2]) : 4 === d && (f = b[e](c[0], c[1], c[2], c[3])) : f = b[e]();
                return f
            }

            function Oa(a) {
                if (Vd) try {
                    return Vd(a)
                } catch (c) {}
                return xk(a)
            }

            function xk(a) {
                for (var c = a.length, b = [], d = 0; d < c; d += 1) b.push(a[d]);
                return b
            }

            function na(a) {
                return !Wa(a) && !X(a) && "[object Object]" === Object.prototype.toString.call(a)
            }

            function ca(a) {
                return X(a) || Wa(a)
            }

            function O(a) {
                return "function" === typeof a
            }

            function vb(a) {
                return function(c) {
                    return function(b) {
                        return a(b, c)
                    }
                }
            }

            function sa(a) {
                return function(c) {
                    return function(b) {
                        return a(c, b)
                    }
                }
            }

            function Ak(a, c) {
                return c(a)
            }

            function Kq(a) {
                return a.replace(/\^/g, "\\^").replace(/\$/g, "\\$").replace(gg, "\\.").replace(/\[/g, "\\[").replace(/\]/g, "\\]").replace(/\|/g, "\\|").replace(/\(/g, "\\(").replace(/\)/g, "\\)").replace(/\?/g, "\\?").replace(/\*/g, "\\*").replace(/\+/g, "\\+").replace(/\{/g, "\\{").replace(/\}/g, "\\}")
            }

            function ls(a) {
                return "" + a
            }

            function eb(a,
                c) {
                return !(!a || -1 === ib(a, c))
            }

            function kc(a, c) {
                return ib(a, c)
            }

            function ms(a, c) {
                for (var b = 0, d = a.length - c.length, e = 0; e < a.length; e += 1) {
                    b = a[e] === c[b] ? b + 1 : 0;
                    if (b === c.length) return e - c.length + 1;
                    if (!b && e > d) break
                }
                return -1
            }

            function ia(a) {
                return "string" === typeof a
            }

            function oa(a, c) {
                return Ea(c, a) && a
            }

            function Ea(a, c) {
                var b = Xe(a, c);
                c && !b && Gg.push([a, c]);
                return b
            }

            function Xe(a, c) {
                if (!c || "function" !== typeof c) return !1;
                try {
                    var b = "" + c
                } catch (h) {
                    return !1
                }
                var d = b.length;
                if (d > 35 + a.length) return !1;
                for (var e = d - 13, f = 0, g =
                        8; g < d; g += 1) {
                    f = "[native code]" [f] === b[g] || 7 === f && "-" === b[g] ? f + 1 : 0;
                    if (12 === f) return !0;
                    if (!f && g > e) break
                }
                return !1
            }

            function D() {}

            function Hg(a, c) {
                Hg = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(b, d) {
                    b.__proto__ = d
                } || function(b, d) {
                    for (var e in d) d.hasOwnProperty(e) && (b[e] = d[e])
                };
                return Hg(a, c)
            }

            function Gc(a) {
                return !a
            }

            function bb(a, c) {
                return c
            }

            function Q(a) {
                return a
            }

            function Na(a, c) {
                function b() {
                    this.constructor = a
                }
                Hg(a, c);
                a.prototype = null === c ? Object.create(c) : (b.prototype = c.prototype, new b)
            }

            function ld() {
                for (var a = 0, c = 0, b = arguments.length; c < b; c++) a += arguments[c].length;
                a = Array(a);
                var d = 0;
                for (c = 0; c < b; c++)
                    for (var e = arguments[c], f = 0, g = e.length; f < g; f++, d++) a[d] = e[f];
                return a
            }

            function n(a, c) {
                return a ? N(function(b, d) {
                    if (ca(b)) return b;
                    try {
                        return b[d]
                    } catch (e) {}
                    return null
                }, a, c.split(".")) : null
            }

            function ns(a) {
                return "[object Array]" === Object.prototype.toString.call(a)
            }

            function os() {}

            function ps(a, c) {
                return function() {
                    a.apply(c, arguments)
                }
            }

            function Ka(a) {
                if (!(this instanceof Ka)) throw new TypeError("Promises must be constructed via new");
                if ("function" !== typeof a) throw new TypeError("not a function");
                this.Ma = 0;
                this.Ke = !1;
                this.Ra = void 0;
                this.Cb = [];
                Ck(a, this)
            }

            function Dk(a, c) {
                for (; 3 === a.Ma;) a = a.Ra;
                0 === a.Ma ? a.Cb.push(c) : (a.Ke = !0, Ka.Le(function() {
                    var b = 1 === a.Ma ? c.mi : c.ti;
                    if (null === b)(1 === a.Ma ? Ig : Xd)(c.promise, a.Ra);
                    else {
                        try {
                            var d = b(a.Ra)
                        } catch (e) {
                            Xd(c.promise, e);
                            return
                        }
                        Ig(c.promise, d)
                    }
                }))
            }

            function Ig(a, c) {
                try {
                    if (c === a) throw new TypeError("A promise cannot be resolved with itself.");
                    if (c && ("object" === typeof c || "function" === typeof c)) {
                        var b =
                            c.then;
                        if (c instanceof Ka) {
                            a.Ma = 3;
                            a.Ra = c;
                            Jg(a);
                            return
                        }
                        if ("function" === typeof b) {
                            Ck(ps(b, c), a);
                            return
                        }
                    }
                    a.Ma = 1;
                    a.Ra = c;
                    Jg(a)
                } catch (d) {
                    Xd(a, d)
                }
            }

            function Xd(a, c) {
                a.Ma = 2;
                a.Ra = c;
                Jg(a)
            }

            function Jg(a) {
                2 === a.Ma && 0 === a.Cb.length && Ka.Le(function() {
                    a.Ke || Ka.yg(a.Ra)
                });
                for (var c = 0, b = a.Cb.length; c < b; c++) Dk(a, a.Cb[c]);
                a.Cb = null
            }

            function qs(a, c, b) {
                this.mi = "function" === typeof a ? a : null;
                this.ti = "function" === typeof c ? c : null;
                this.promise = b
            }

            function Ck(a, c) {
                var b = !1;
                try {
                    a(function(d) {
                        b || (b = !0, Ig(c, d))
                    }, function(d) {
                        b || (b = !0, Xd(c, d))
                    })
                } catch (d) {
                    b || (b = !0, Xd(c, d))
                }
            }

            function nk(a, c, b, d, e) {
                void 0 === e && (e = !1);
                return zg(a, c, "", -100, b, d, e)
            }

            function Pc(a, c, b) {
                void 0 === c && (c = "_ym_");
                void 0 === b && (b = "");
                var d = rs(a),
                    e = 1 === (d || "").split(".").length ? d : "." + d,
                    f = b ? "_" + b : "";
                return {
                    pc: function(g, h, k) {
                        nk(a, "" + c + g + f, h || e, k);
                        return this
                    },
                    C: function(g) {
                        return ve(a, "" + c + g + f)
                    },
                    D: function(g, h, k, l, m) {
                        zg(a, "" + c + g + f, h, k, l || e, m);
                        return this
                    }
                }
            }

            function zb(a, c) {
                if (!c) return null;
                try {
                    return a.JSON.parse(c)
                } catch (b) {
                    return null
                }
            }

            function gc(a) {
                a = "" +
                    a;
                for (var c = 2166136261, b = a.length, d = 0; d < b; d += 1) c ^= a.charCodeAt(d), c += (c << 1) + (c << 4) + (c << 7) + (c << 8) + (c << 24);
                return c >>> 0
            }

            function Sc(a, c) {
                var b = ss(a);
                return b ? (b.href = c, {
                    protocol: b.protocol,
                    host: b.host,
                    port: b.port,
                    hostname: b.hostname,
                    hash: b.hash,
                    search: b.search,
                    query: b.search.replace(/^\?/, ""),
                    pathname: b.pathname || "/",
                    path: (b.pathname || "/") + b.search,
                    href: b.href
                }) : {}
            }

            function Ek(a) {
                return (a = S(a).hash.split("#")[1]) ? a.split("?")[0] : ""
            }

            function ts(a, c) {
                var b = Ek(a);
                Fk = Lr(a, function() {
                    var d = Ek(a);
                    d !== b &&
                        (c(), b = d)
                }, 200, "t.h");
                return H(Kr, null, a, Fk)
            }

            function us(a, c, b, d) {
                var e, f, g = c.ca,
                    h = c.He,
                    k = c.wc,
                    l = J(a),
                    m = Ja((e = {}, e.wh = 1, e.pv = 1, e));
                e = n(d, "isTrusted");
                d && !ca(e) && m.D("ite", sb(e));
                he(g) && a.Ya && a.Ya.Direct && m.D("ad", "1");
                h && m.D("ut", "1");
                g = l.C("lastReferrer");
                d = S(a).href;
                k = {
                    J: (f = {}, f["page-url"] = k || d, f["page-ref"] = g, f),
                    K: m
                };
                b(k, c)["catch"](E(a, "g.s"));
                l.D("lastReferrer", d)
            }

            function vs(a, c, b) {
                function d() {
                    r || (q = !0, t = !1, r = !0, f())
                }

                function e() {
                    m = !0;
                    k(!1);
                    c()
                }

                function f() {
                    ka(a, l);
                    if (m) k(!1);
                    else {
                        var M = Math.max(0,
                            b - (t ? y : y + p(Z) - F));
                        M ? l = T(a, e, M, "u.t.d.c") : e()
                    }
                }

                function g() {
                    t = q = r = !0;
                    y += p(Z) - F;
                    F = p(Z);
                    f()
                }

                function h() {
                    q || r || (y = 0);
                    F = p(Z);
                    q = r = !0;
                    t = !1;
                    f()
                }

                function k(M) {
                    M = M ? P.F : P.yb;
                    M(a, ["blur"], g);
                    M(a, ["focus"], h);
                    M(a.document, ["click", "mousemove", "keydown", "scroll"], d)
                }
                var l = 0,
                    m = !1;
                if (pg(a)) return l = T(a, c, b, "u.t.d"), C([a, l], ka);
                var p = ja(a),
                    q = !1,
                    r = !1,
                    t = !0,
                    y = 0,
                    F = p(Z),
                    P = fa(a);
                k(!0);
                f();
                return function() {
                    ka(a, l);
                    k(!1)
                }
            }

            function wb(a, c) {
                a = [a[0] >>> 16, a[0] & 65535, a[1] >>> 16, a[1] & 65535];
                c = [c[0] >>> 16, c[0] & 65535, c[1] >>> 16, c[1] &
                    65535
                ];
                var b = [0, 0, 0, 0];
                b[3] += a[3] * c[3];
                b[2] += b[3] >>> 16;
                b[3] &= 65535;
                b[2] += a[2] * c[3];
                b[1] += b[2] >>> 16;
                b[2] &= 65535;
                b[2] += a[3] * c[2];
                b[1] += b[2] >>> 16;
                b[2] &= 65535;
                b[1] += a[1] * c[3];
                b[0] += b[1] >>> 16;
                b[1] &= 65535;
                b[1] += a[2] * c[2];
                b[0] += b[1] >>> 16;
                b[1] &= 65535;
                b[1] += a[3] * c[1];
                b[0] += b[1] >>> 16;
                b[1] &= 65535;
                b[0] += a[0] * c[3] + a[1] * c[2] + a[2] * c[1] + a[3] * c[0];
                b[0] &= 65535;
                return [b[0] << 16 | b[1], b[2] << 16 | b[3]]
            }

            function sc(a, c) {
                a = [a[0] >>> 16, a[0] & 65535, a[1] >>> 16, a[1] & 65535];
                c = [c[0] >>> 16, c[0] & 65535, c[1] >>> 16, c[1] & 65535];
                var b = [0, 0,
                    0, 0
                ];
                b[3] += a[3] + c[3];
                b[2] += b[3] >>> 16;
                b[3] &= 65535;
                b[2] += a[2] + c[2];
                b[1] += b[2] >>> 16;
                b[2] &= 65535;
                b[1] += a[1] + c[1];
                b[0] += b[1] >>> 16;
                b[1] &= 65535;
                b[0] += a[0] + c[0];
                b[0] &= 65535;
                return [b[0] << 16 | b[1], b[2] << 16 | b[3]]
            }

            function Zc(a, c) {
                c %= 64;
                if (32 === c) return [a[1], a[0]];
                if (32 > c) return [a[0] << c | a[1] >>> 32 - c, a[1] << c | a[0] >>> 32 - c];
                c -= 32;
                return [a[1] << c | a[0] >>> 32 - c, a[0] << c | a[1] >>> 32 - c]
            }

            function nb(a, c) {
                c %= 64;
                return 0 === c ? a : 32 > c ? [a[0] << c | a[1] >>> 32 - c, a[1] << c] : [a[1] << c - 32, 0]
            }

            function ya(a, c) {
                return [a[0] ^ c[0], a[1] ^ c[1]]
            }

            function Gk(a) {
                a =
                    ya(a, [0, a[0] >>> 1]);
                a = wb(a, [4283543511, 3981806797]);
                a = ya(a, [0, a[0] >>> 1]);
                a = wb(a, [3301882366, 444984403]);
                return a = ya(a, [0, a[0] >>> 1])
            }

            function ws(a, c) {
                void 0 === c && (c = 210);
                var b = a || "",
                    d = c || 0,
                    e = b.length - b.length % 16;
                d = {
                    T: [0, d],
                    V: [0, d]
                };
                for (var f = 0; f < e; f += 16) {
                    var g = d,
                        h = [a.charCodeAt(f + 4) & 255 | (a.charCodeAt(f + 5) & 255) << 8 | (a.charCodeAt(f + 6) & 255) << 16 | (a.charCodeAt(f + 7) & 255) << 24, a.charCodeAt(f) & 255 | (a.charCodeAt(f + 1) & 255) << 8 | (a.charCodeAt(f + 2) & 255) << 16 | (a.charCodeAt(f + 3) & 255) << 24],
                        k = [a.charCodeAt(f + 12) & 255 | (a.charCodeAt(f +
                            13) & 255) << 8 | (a.charCodeAt(f + 14) & 255) << 16 | (a.charCodeAt(f + 15) & 255) << 24, a.charCodeAt(f + 8) & 255 | (a.charCodeAt(f + 9) & 255) << 8 | (a.charCodeAt(f + 10) & 255) << 16 | (a.charCodeAt(f + 11) & 255) << 24];
                    h = wb(h, Ye);
                    h = Zc(h, 31);
                    h = wb(h, Ze);
                    g.T = ya(g.T, h);
                    g.T = Zc(g.T, 27);
                    g.T = sc(g.T, g.V);
                    g.T = sc(wb(g.T, [0, 5]), [0, 1390208809]);
                    k = wb(k, Ze);
                    k = Zc(k, 33);
                    k = wb(k, Ye);
                    g.V = ya(g.V, k);
                    g.V = Zc(g.V, 31);
                    g.V = sc(g.V, g.T);
                    g.V = sc(wb(g.V, [0, 5]), [0, 944331445])
                }
                e = b.length % 16;
                f = b.length - e;
                g = [0, 0];
                h = [0, 0];
                switch (e) {
                    case 15:
                        h = ya(h, nb([0, b.charCodeAt(f + 14)],
                            48));
                    case 14:
                        h = ya(h, nb([0, b.charCodeAt(f + 13)], 40));
                    case 13:
                        h = ya(h, nb([0, b.charCodeAt(f + 12)], 32));
                    case 12:
                        h = ya(h, nb([0, b.charCodeAt(f + 11)], 24));
                    case 11:
                        h = ya(h, nb([0, b.charCodeAt(f + 10)], 16));
                    case 10:
                        h = ya(h, nb([0, b.charCodeAt(f + 9)], 8));
                    case 9:
                        h = ya(h, [0, b.charCodeAt(f + 8)]), h = wb(h, Ze), h = Zc(h, 33), h = wb(h, Ye), d.V = ya(d.V, h);
                    case 8:
                        g = ya(g, nb([0, b.charCodeAt(f + 7)], 56));
                    case 7:
                        g = ya(g, nb([0, b.charCodeAt(f + 6)], 48));
                    case 6:
                        g = ya(g, nb([0, b.charCodeAt(f + 5)], 40));
                    case 5:
                        g = ya(g, nb([0, b.charCodeAt(f + 4)], 32));
                    case 4:
                        g =
                            ya(g, nb([0, b.charCodeAt(f + 3)], 24));
                    case 3:
                        g = ya(g, nb([0, b.charCodeAt(f + 2)], 16));
                    case 2:
                        g = ya(g, nb([0, b.charCodeAt(f + 1)], 8));
                    case 1:
                        g = ya(g, [0, b.charCodeAt(f)]), g = wb(g, Ye), g = Zc(g, 31), g = wb(g, Ze), d.T = ya(d.T, g)
                }
                d.T = ya(d.T, [0, b.length]);
                d.V = ya(d.V, [0, b.length]);
                d.T = sc(d.T, d.V);
                d.V = sc(d.V, d.T);
                d.T = Gk(d.T);
                d.V = Gk(d.V);
                d.T = sc(d.T, d.V);
                d.V = sc(d.V, d.T);
                return ("00000000" + (d.T[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (d.T[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (d.V[0] >>> 0).toString(16)).slice(-8) + ("00000000" +
                    (d.V[1] >>> 0).toString(16)).slice(-8)
            }

            function Yd(a, c, b) {
                var d = c.getAttribute("itemtype");
                b = jb('[itemprop~="' + b + '"]', c);
                return d ? ha(function(e) {
                    return e.parentNode && oc("[itemtype]", a, e.parentNode) === c
                }, b) : b
            }

            function hb(a, c, b) {
                return (a = Yd(a, c, b)) && a.length ? a[0] : null
            }

            function cb(a) {
                if (!a) return "";
                a = R(a) ? a : [a];
                return a.length ? a[0].getAttribute("content") || Mb(a[0]) : ""
            }

            function Hk(a) {
                return a ? a.attributes && a.getAttribute("datetime") ? a.getAttribute("datetime") : cb(a) : ""
            }

            function xd(a, c, b) {
                a = c && (eb(c.className,
                    "ym-disable-keys") || eb(c.className, "-metrika-nokeys"));
                return b && c ? a || !!wr(["ym-disable-keys", "-metrika-nokeys"], c).length : a
            }

            function Kf(a, c) {
                return Qe(c) ? "password" === c.type || c.name && I(c.name.toLowerCase(), Ik) || c.id && I(c.id.toLowerCase(), Ik) : !1
            }

            function Jk(a, c) {
                var b = Math.max(0, Math.min(c, 65535));
                ra(a, [b >> 8, b & 255])
            }

            function Vb(a, c) {
                ra(a, [c & 255])
            }

            function kb(a, c, b) {
                return -1 !== Pb(a)(b, xs) ? (Vb(c, b), !1) : !0
            }

            function V(a, c) {
                for (var b = Math.max(0, c | 0); 127 < b;) ra(a, [b & 127 | 128]), b >>= 7;
                ra(a, [b])
            }

            function Kg(a,
                c) {
                V(a, c.length);
                for (var b = 0; b < c.length; b += 1) V(a, c.charCodeAt(b))
            }

            function Lg(a, c) {
                var b = c;
                255 < b.length && (b = b.substr(0, 255));
                a.push(b.length);
                for (var d = 0; d < b.length; d += 1) Jk(a, b.charCodeAt(d))
            }

            function ys(a, c) {
                var b = [];
                if (kb(a, b, 27)) return [];
                V(b, c);
                return b
            }

            function zs(a, c) {
                var b = Ma(c);
                if (!b) return c[Ya] = -1, null;
                var d = +c[Ya];
                if (!isFinite(d) || 0 >= d) return null;
                if (c.attributes)
                    for (var e = c; e;) {
                        if (e.attributes.mj) return null;
                        e = e.parentElement
                    }
                e = 64;
                var f = Oe(a, c),
                    g = f && f[Ya] ? f[Ya] : 0;
                0 > g && (g = 0);
                b = (b || "").toUpperCase();
                var h = As()[b];
                h || (e |= 2);
                var k = Pj(a, c);
                k || (e |= 4);
                var l = Of(a, c);
                (f = f ? Of(a, f) : null) && l[0] === f[0] && l[1] === f[1] && l[2] === f[2] && l[3] === f[3] && (e |= 8);
                zc[d].zf = l[0] + "x" + l[1];
                zc[d].size = l[2] + "x" + l[3];
                c.id && "string" === typeof c.id && (e |= 32);
                f = [];
                if (kb(a, f, 1)) return null;
                V(f, d);
                Vb(f, e);
                V(f, g);
                h ? Vb(f, h) : Lg(f, b);
                k && V(f, k);
                e & 8 || (V(f, l[0]), V(f, l[1]), V(f, l[2]), V(f, l[3]));
                e & 32 && Lg(f, c.id);
                Vb(f, 0);
                return f
            }

            function Bs(a, c) {
                var b = c[Ya];
                if (!b || 0 > b || !Mf(c) || !c.form || pi(a, c.form)) return [];
                var d = Rj(a, c.form);
                if (0 > d) return [];
                if (Qe(c)) {
                    var e = {
                        text: 0,
                        color: 0,
                        oc: 0,
                        qj: 0,
                        "datetime-local": 0,
                        email: 0,
                        xf: 0,
                        Fj: 0,
                        search: 0,
                        Kj: 0,
                        time: 0,
                        url: 0,
                        month: 0,
                        Mj: 0,
                        password: 2,
                        Ej: 3,
                        oj: 4,
                        file: 6,
                        image: 7
                    };
                    e = e[c.type]
                } else {
                    e = {
                        jj: 1,
                        kj: 5
                    };
                    var f = Ma(c);
                    e = X(f) ? "" : e[f]
                }
                if ("number" !== typeof e) return [];
                f = -1;
                for (var g = c.form.elements, h = g.length, k = 0, l = 0; k < h; k += 1)
                    if (g[k].name === c.name) {
                        if (g[k] === c) {
                            f = l;
                            break
                        }
                        l += 1
                    }
                if (0 > f) return [];
                g = [];
                if (kb(a, g, 7)) return [];
                V(g, b);
                V(g, d);
                V(g, e);
                Kg(g, c.name || "");
                V(g, f);
                return g
            }

            function yc(a, c, b) {
                void 0 === b && (b = []);
                for (var d = []; c && !Ao(a, c, b); c = Oe(a, c)) d.push(c);
                x(function(e) {
                    zc.counter += 1;
                    var f = zc.counter;
                    e[Ya] = f;
                    zc[f] = {};
                    f = zs(a, e);
                    e = Bs(a, e);
                    f && e && (ra(b, f), ra(b, e))
                }, Cs(d));
                return b
            }

            function Ds(a) {
                var c = a.oa;
                if (!wd || c && !c.fromElement) return mi(a)
            }

            function Es(a) {
                var c = a.oa;
                if (c && !c.toElement) return Nf(a)
            }

            function Kk(a) {
                var c = Ic(a.oa);
                if (c && ue(c)) {
                    var b = li(a, c),
                        d = b.concat;
                    var e = Cb(a.l),
                        f = [];
                    kb(a.l, f, 17) ? a = [] : (V(f, e), V(f, c[Ya]), a = f);
                    return d.call(b, a)
                }
            }

            function Lk(a) {
                var c = a.l,
                    b = a.oa.target;
                if (b && ue(b)) {
                    c = yc(c, b);
                    var d = c.concat;
                    var e = Cb(a.l),
                        f = [];
                    kb(a.l, f, 18) ? a = [] : (V(f, e), V(f, b[Ya]), a = f);
                    return d.call(c, a)
                }
            }

            function Mk(a) {
                var c = a.l,
                    b = Ic(a.oa);
                if (!b || Kf(c, b) || xd(c, b)) return [];
                if (Mf(b)) {
                    var d = J(c).C("isEU"),
                        e = Tc(c, b, d),
                        f = e.Wa;
                    d = e.rb;
                    e = e.ib;
                    if (Re(b)) var g = b.checked;
                    else g = b.value, g = f ? G("", Nk(g.split(""))) : g;
                    c = yc(c, b);
                    f = c.concat;
                    var h = Cb(a.l);
                    d = d && !e;
                    e = [];
                    kb(a.l, e, 39) ? a = [] : (V(e, h), V(e, b[Ya]), Lg(e, String(g)), Vb(e, d ? 1 : 0), a = e);
                    return f.call(c, a)
                }
            }

            function $e(a) {
                var c = a.l,
                    b = a.oa,
                    d = Ic(b);
                if (!d || "SCROLLBAR" === d.nodeName) return [];
                var e = [],
                    f = u(e, ra);
                d && ue(d) ? f(li(a, d)) : f(yc(c, d));
                var g = oj(c, b);
                f = e.concat;
                a = Cb(a.l);
                var h = b.type,
                    k = [g.x, g.y];
                g = b.which;
                b = b.button;
                var l;
                var m = Pe(c, d);
                var p = m[0];
                for (m = m[1]; d && (!p || !m);)
                    if (d = Oe(c, d)) m = Pe(c, d), p = m[0], m = m[1];
                d ? (p = d[Ya], !p || 0 > p ? c = [] : (m = (l = {}, l.mousemove = 2, l.click = 32, l.dblclick = 33, l.mousedown = 4, l.mouseup = 30, l.touch = 12, l)[h]) ? (l = [], d = og(c, d), kb(c, l, m) ? c = [] : (V(l, a), V(l, p), V(l, Math.max(0, k[0] - d.left)), V(l, Math.max(0, k[1] - d.top)), /^mouse(up|down)|click$/.test(h) && (c = g || b, Vb(l, 2 > c ? 1 : c === (g ?
                    2 : 4) ? 4 : 2)), c = l)) : c = []) : c = [];
                return f.call(e, c)
            }

            function Fs(a) {
                var c = null,
                    b = a.l,
                    d = b.document;
                if (b.getSelection) {
                    d = void 0;
                    try {
                        d = b.getSelection()
                    } catch (g) {
                        return []
                    }
                    if (Wa(d)) return [];
                    var e = "" + d;
                    c = d.anchorNode
                } else d.selection && d.selection.createRange && (d = d.selection.createRange(), e = d.text, c = d.parentElement());
                if ("string" !== typeof e) return [];
                try {
                    for (; c && 1 !== c.nodeType;) c = c.parentNode
                } catch (g) {
                    return []
                }
                if (!c) return [];
                d = Tc(b, c).Wa || xd(b, c, !0);
                c = c.getElementsByTagName("*");
                for (var f = 0; f < c.length && !d;) d = c[f],
                    d = Tc(b, d).Wa || xd(b, d, !0), f += 1;
                if (e !== Mg) return Mg = e, d = d ? G("", Nk(e.split(""))) : e, e = Cb(a.l), 0 === d.length ? d = b = "" : 100 >= d.length ? (b = d, d = "") : 200 >= d.length ? (b = d.substr(0, 100), d = d.substr(100)) : (b = d.substr(0, 97), d = d.substr(d.length - 97)), c = [], kb(a.l, c, 29) ? a = [] : (V(c, e), Kg(c, b), Kg(c, d), a = c), a
            }

            function Gs(a) {
                return $e(a).concat(Fs(a) || [])
            }

            function Ok(a) {
                return (a.shiftKey ? 2 : 0) | (a.ctrlKey ? 4 : 0) | (a.altKey ? 1 : 0) | (a.metaKey ? 8 : 0) | (a.ctrlKey || a.altKey ? 16 : 0)
            }

            function Pk(a) {
                var c = [];
                Ng || (Ng = !0, Mg && ra(c, ys(a.l, Cb(a.l))),
                    Tb(a.l, function() {
                        Ng = !1
                    }, "fv.c"));
                return c
            }

            function Qk(a, c, b, d) {
                c = Ic(c);
                if (!c || Pf(a, c)) return [];
                var e = Tc(a, c),
                    f = e.rb,
                    g = e.ib;
                e = e.Wa;
                var h = J(a);
                if (!g && (f && h.C("isEU") || xd(a, c))) a = [];
                else {
                    f = yc(a, c);
                    g = f.concat;
                    var k = Cb(a);
                    h = [];
                    if (kb(a, h, 38)) a = [];
                    else {
                        V(h, k);
                        Jk(h, b);
                        Vb(h, d);
                        a = c[Ya];
                        if (!a || 0 > a) a = 0;
                        V(h, a);
                        Vb(h, e ? 1 : 0);
                        a = h
                    }
                    a = g.call(f, a)
                }
                return a
            }

            function Hs(a) {
                var c = a.l,
                    b = a.oa,
                    d = b.keyCode,
                    e = Ok(b),
                    f = [],
                    g = u(f, ra);
                if ({
                        3: 1,
                        8: 1,
                        9: 1,
                        13: 1,
                        16: 1,
                        17: 1,
                        18: 1,
                        19: 1,
                        20: 1,
                        27: 1,
                        33: 1,
                        34: 1,
                        35: 1,
                        36: 1,
                        37: 1,
                        38: 1,
                        39: 1,
                        40: 1,
                        45: 1,
                        46: 1,
                        91: 1,
                        92: 1,
                        93: 1,
                        106: 1,
                        110: 1,
                        111: 1,
                        144: 1,
                        145: 1
                    }[d] || 112 <= d && 123 >= d || 96 <= d && 105 >= d || e & 16) 19 === d && 4 === (e & -17) && (d = 144), g(Qk(c, b, d, e | 16)), Og = !1, Tb(c, function() {
                    Og = !0
                }, "fv.kd"), !(67 === d && e & 4) || e & 1 || e & 2 || g(Pk(a));
                return f
            }

            function Is(a) {
                var c = a.l;
                a = a.oa;
                var b = [];
                Og && !Pg && 0 !== a.which && (ra(b, Qk(c, a, a.charCode || a.keyCode, Ok(a))), Pg = !0, Tb(c, function() {
                    Pg = !1
                }, "fv.kp"));
                return b
            }

            function Rk(a) {
                var c = a.l,
                    b = Ic(a.oa);
                if (!b || pi(c, b)) return [];
                var d = [];
                if ("FORM" === b.nodeName) {
                    for (var e = b.elements, f = 0; f < e.length; f +=
                        1) Qj(e[f]) || ra(d, yc(c, e[f]));
                    a = Cb(a.l);
                    e = Rj(c, b);
                    if (0 > e) c = [];
                    else {
                        f = b.elements;
                        var g = f.length;
                        b = [];
                        for (var h = 0; h < g; h += 1)
                            if (!Qj(f[h])) {
                                var k = f[h][Ya];
                                k && 0 < k && b.push(k)
                            }
                        f = [];
                        if (kb(c, f, 11)) c = [];
                        else {
                            V(f, a);
                            V(f, e);
                            V(f, b.length);
                            for (c = 0; c < b.length; c += 1) V(f, b[c]);
                            c = f
                        }
                    }
                    ra(d, c)
                }
                return d
            }

            function Js(a) {
                var c = a.flush;
                a = Ic(a.oa);
                "BODY" === Ma(a) && c()
            }

            function Tn(a, c) {
                var b, d = Ic(c),
                    e = Ga.jc,
                    f = Wd(a);
                if (d && ic("ym-advanced-informer", d)) {
                    var g = f.C("ifc", 0) + 1;
                    f.D("ifc", g);
                    g = d.getAttribute("data-lang");
                    var h = Ia(d.getAttribute("data-cid") ||
                        "");
                    if (h || 0 === h)(e = n(a, "Ya." + e + ".informer")) ? e((b = {}, b.i = d, b.id = h, b.lang = g, b)) : f.D("ib", !0), b = c || window.event, b.preventDefault ? b.preventDefault() : b.returnValue = !1
                }
            }

            function mm(a, c, b, d, e) {
                if (!b.length) return e;
                b = A(function(f) {
                    return C([a, c, d], f)
                }, b);
                return w.apply(void 0, b)(e)
            }
            var $c = {
                    construct: "Metrika2",
                    callbackPostfix: "2",
                    version: "dgbpzx3l2epem5xirabrkyy8v",
                    host: "mc.yandex.ru"
                },
                Gg = [],
                gg = /\./g,
                Sk = oa(String.prototype.indexOf, "indexOf"),
                ib = Sk ? function(a, c) {
                    return Sk.call(a, c)
                } : ms,
                Ba = sa(function(a,
                    c) {
                    return a === c
                }),
                we = sa(function(a, c) {
                    a(c);
                    return c
                }),
                Ha = sa(Ak),
                Wa = Ba(null),
                X = Ba(void 0),
                Vd = oa(Array.from, "from"),
                Tk = oa(Function.prototype.bind, "bind"),
                H = Tk ? js(Tk) : ks,
                Uk = oa(Array.prototype.reduce, "reduce"),
                Bb = Uk ? function(a, c, b) {
                    return Uk.call(b, a, c)
                } : Dg,
                N = Bb,
                jr = w,
                De = w(Q, la),
                Fg, pf = Pb(window),
                jn = vb(pf),
                Eg = Object.prototype.hasOwnProperty,
                J = v(Wd),
                U = vb(n),
                Sa = U("length"),
                Lc = sa(C),
                Xi = sa(Fa),
                Vk = oa(Array.prototype.every, "every"),
                Mi = Vk ? function(a, c) {
                    return Vk.call(c, a)
                } : hs,
                Ob = C([1, null], Ad),
                sb = C([1, 0], Ad),
                Gb = Boolean,
                Wk = oa(Array.prototype.filter, "filter"),
                ha = Wk ? function(a, c) {
                    return Wk.call(c, a)
                } : zk,
                va = u(Gb, ha),
                Ks = sa(ha),
                Xk = oa(Array.prototype.find, "find"),
                tb = Xk ? function(a, c) {
                    return Xk.call(c, a)
                } : gs,
                Yk = oa(Array.prototype.includes, "includes"),
                I = Yk ? function(a, c, b) {
                    return Yk.call(c, a, b)
                } : fs,
                uc = vb(I),
                Zk = oa(Array.prototype.join, "join"),
                G = Zk ? function(a, c) {
                    return Zk.call(c, a)
                } : es,
                Ae = sa(G),
                $k = v(function(a) {
                    var c = n(a, "navigator") || {};
                    a = n(c, "userAgent") || "";
                    c = n(c, "vendor") || "";
                    return {
                        nf: -1 < ib(c, "Apple"),
                        jg: a
                    }
                }),
                lb = v(U("navigator.userAgent")),
                Cg = /Firefox\/([0-9]+)/i,
                Ud = v(function(a) {
                    var c = n(a, "document.documentElement.style"),
                        b = n(a, "InstallTrigger");
                    a = -1 !== (n(a, "navigator.userAgent") || "").toLowerCase().search(Cg);
                    Cg.lastIndex = 0;
                    return !(!(c && "MozAppearance" in c) || ca(b)) || a
                }),
                al = oa(Array.isArray, "isArray"),
                R = al ? function(a) {
                    return al(a)
                } : ns,
                bl = oa(Array.prototype.map, "map"),
                cl = bl && ds(window, Array.prototype.map) ? function(a, c) {
                    return c && 0 < c.length ? bl.call(c, a) : []
                } : yk,
                A = cl,
                x = cl,
                dl = oa(Array.prototype.flatMap, "flatMap"),
                wc = dl ? function(a, c) {
                    return dl.call(c, a)
                } : cs,
                Wb = sa(A),
                Mr = vb(A),
                el = oa(Array.prototype.some, "some"),
                $a = el ? function(a, c) {
                    return el.call(c, a)
                } : bs,
                Je = v(Pb),
                Md = U("0"),
                Ls = sa(xe),
                fl = oa(Array.prototype.reverse, "reverse"),
                Cs = fl ? function(a) {
                    return fl.call(a)
                } : as,
                gl = vb(parseInt),
                Ia = gl(10),
                ye = gl(2),
                hl = oa(Object.keys, "keys"),
                il = oa(Object.entries, "entries"),
                La = il ? $r(il) : vk,
                ea = hl ? function(a) {
                    return hl(a)
                } : wk,
                jl = oa(Object.values, "values"),
                Ms = w(vk, u(U("1"), yk)),
                zh = jl ? function(a) {
                    return jl(a)
                } : Ms,
                z = Object.assign || Zr,
                ki = sa(function(a, c) {
                    return z({}, a, c)
                }),
                qd = v(w(U("String.fromCharCode"), u("fromCharCode", Ea), Gc)),
                Ve = v(w(lb, gb(/ipad|iphone|ipod/i))),
                Uf = v(function(a) {
                    return n(a, "navigator.platform") || ""
                }),
                Ed = v(function(a) {
                    a = $k(a);
                    var c = a.jg;
                    return a.nf && !c.match("CriOS")
                }),
                Ns = gb(/Android.*Version\/[0-9][0-9.]*\sChrome\/[0-9][0-9.]|Android.*Version\/[0-9][0-9.]*\s(?:Mobile\s)?Safari\/[0-9][0-9.]*\sChrome\/[0-9][0-9.]*|; wv\).*Chrome\/[0-9][0-9.]*\sMobile/),
                Os = gb(/; wv\)/),
                Cd = v(function(a) {
                    a = lb(a);
                    return Os(a) || Ns(a)
                }),
                Ps = /Chrome\/(\d+)\./,
                Qs = v(function(a) {
                    return (a = (n(a, "navigator.userAgent") || "").match(Ps)) && a.length ? 76 <= Ia(a[1]) : !1
                }),
                Bd = v(function(a) {
                    var c = (lb(a) || "").toLowerCase();
                    a = Uf(a);
                    return eb(c, "android") && eb(c, "mobile") && /^android|linux armv/i.test(a)
                }),
                Rs = "other none unknown wifi ethernet bluetooth cellular wimax mixed".split(" "),
                Ss = v(function(a) {
                    var c = n(a, "navigator.connection.type");
                    if (X(c)) return null;
                    a = Je(a)(c, Rs);
                    return -1 === a ? c : "" + a
                }),
                pg = v(w(U("document.addEventListener"), Gc)),
                kl = v(function(a) {
                    var c =
                        n(a, "navigator") || {};
                    return N(function(b, d) {
                        return b || n(c, d)
                    }, "", ["language", "userLanguage", "browserLanguage", "systemLanguage"])
                }),
                Eh = v(function(a) {
                    var c = n(a, "navigator") || {};
                    a = kl(a);
                    ia(a) || (a = "", c = n(c, "languages.0"), ia(c) && (a = c));
                    return a.toLowerCase().split("-")[0]
                }),
                rb = v(function(a) {
                    return (n(a, "top") || a) !== a
                }),
                Ts = v(U("top.contentWindow")),
                Us = v(function(a) {
                    var c = !1;
                    try {
                        c = a.navigator.javaEnabled()
                    } catch (b) {}
                    return c
                }),
                Vs = v(function(a) {
                    var c = "__webdriver_evaluate __selenium_evaluate __webdriver_script_function __webdriver_script_func __webdriver_script_fn __fxdriver_evaluate __driver_unwrapped __webdriver_unwrapped __driver_evaluate __selenium_unwrapped __fxdriver_unwrapped".split(" "),
                        b = n(a, "external");
                    b = n(b, "toString") ? "" + b.toString() : "";
                    b = -1 !== ib(b, "Sequentum");
                    var d = n(a, "document.documentElement"),
                        e = ["selenium", "webdriver", "driver"];
                    return !!($a(u(a, n), ["_selenium", "callSelenium", "_Selenium_IDE_Recorder"]) || $a(u(n(a, "document"), n), c) || b || d && $a(H(d.getAttribute, d), e))
                }),
                Ws = v(function(a) {
                    return !!($a(u(a, n), ["_phantom", "__nightmare", "callPhantom"]) || /(PhantomJS)|(HeadlessChrome)/.test(lb(a)) || n(a, "navigator.webdriver") || n(a, "isChrome") && !n(a, "chrome"))
                }),
                Xs = v(function(a) {
                    return !(!n(a,
                        "ia_document.shareURL") || !n(a, "ia_document.referrer"))
                }),
                Zd = v(function(a) {
                    var c = lb(a) || "",
                        b = c.match(/Mac OS X ([0-9]+)_([0-9]+)/);
                    b = b ? [+b[1], +b[2]] : [0, 0];
                    c = c.match(/iPhone OS ([1-9]+)_([0-9]+)/);
                    return 14 <= (c ? +c[1] : 0) ? !0 : (Ve(a) || 10 < b[0] || 10 === b[0] && 13 <= b[1]) && Ed(a)
                }),
                Yr = /Edg\/(\d+)\./,
                Ne = v(function(a) {
                    return Zd(a) || zf(a, 68) || Af(a, 79)
                }),
                Ys = $c.construct,
                jc = $c.host,
                Qg = pg(window),
                Ga = {
                    ug: 24226447,
                    ng: 26302566,
                    xg: 51533966,
                    hj: 65446441,
                    Sa: "https:",
                    bc: "1340",
                    jc: Ys,
                    sg: Qg ? 512 : 2048,
                    qg: Qg ? 512 : 2048,
                    rg: Qg ? 100 : 400,
                    ij: 100,
                    vg: "noindex"
                },
                $d = [],
                L = v(function(a) {
                    return a.id + ":" + a.ca
                }),
                rc = {},
                he = Ba("1"),
                Zs = setTimeout;
            Ka.prototype["catch"] = function(a) {
                return this.then(null, a)
            };
            Ka.prototype.then = function(a, c) {
                var b = new this.constructor(os);
                Dk(this, new qs(a, c, b));
                return b
            };
            Ka.prototype["finally"] = function(a) {
                var c = this.constructor;
                return this.then(function(b) {
                    return c.resolve(a()).then(function() {
                        return b
                    })
                }, function(b) {
                    return c.resolve(a()).then(function() {
                        return c.reject(b)
                    })
                })
            };
            Ka.all = function(a) {
                return new Ka(function(c,
                    b) {
                    function d(h, k) {
                        try {
                            if (k && ("object" === typeof k || "function" === typeof k)) {
                                var l = k.then;
                                if ("function" === typeof l) {
                                    l.call(k, function(m) {
                                        d(h, m)
                                    }, b);
                                    return
                                }
                            }
                            e[h] = k;
                            0 === --f && c(e)
                        } catch (m) {
                            b(m)
                        }
                    }
                    if (!a || "undefined" === typeof a.length) return b(new TypeError("Promise.all accepts an array"));
                    var e = Array.prototype.slice.call(a);
                    if (0 === e.length) return c([]);
                    for (var f = e.length, g = 0; g < e.length; g++) d(g, e[g])
                })
            };
            Ka.resolve = function(a) {
                return a && "object" === typeof a && a.constructor === Ka ? a : new Ka(function(c) {
                    c(a)
                })
            };
            Ka.reject = function(a) {
                return new Ka(function(c, b) {
                    b(a)
                })
            };
            Ka.race = function(a) {
                return new Ka(function(c, b) {
                    if (!a || "undefined" === typeof a.length) return b(new TypeError("Promise.race accepts an array"));
                    for (var d = 0, e = a.length; d < e; d++) Ka.resolve(a[d]).then(c, b)
                })
            };
            Ka.Le = "function" === typeof setImmediate && function(a) {
                setImmediate(a)
            } || function(a) {
                Zs(a, 0)
            };
            Ka.yg = function(a) {
                "undefined" !== typeof console && console && console.warn("Possible Unhandled Promise Rejection:", a)
            };
            var K = window.Promise,
                $s = oa(K, "Promise"),
                ll = oa(n(K, "resolve"), "resolve"),
                ml = oa(n(K, "reject"), "reject"),
                nl = oa(n(K, "all"), "all");
            if ($s && ll && ml && nl) {
                var af = function(a) {
                    return new Promise(a)
                };
                af.resolve = H(ll, K);
                af.reject = H(ml, K);
                af.all = H(nl, K);
                K = af
            } else K = Ka;
            var jf = [],
                kd = [],
                W = [],
                Za = [],
                Rg = [],
                ad = [],
                yg = uc([26812653]),
                at = v(w(U("id"), yg), L),
                $b = {
                    id: "id",
                    He: "ut",
                    ca: "type",
                    Sd: "ldc",
                    Va: "nck",
                    wc: "url",
                    kh: "referrer"
                },
                bt = /^\d+$/,
                bd = {
                    id: function(a) {
                        a = "" + (a || "0");
                        bt.test(a) || (a = "0");
                        try {
                            var c = Ia(a)
                        } catch (b) {
                            c = 0
                        }
                        return c
                    },
                    ca: function(a) {
                        return "" + (a || 0 === a ?
                            a : "0")
                    },
                    Va: Gb,
                    He: Gb
                };
            $b.md = "defer";
            bd.md = Gb;
            $b.X = "params";
            bd.X = function(a) {
                return na(a) || R(a) ? a : null
            };
            $b.Ge = "userParams";
            $b.fg = "triggerEvent";
            bd.fg = Gb;
            $b.Sf = "sendTitle";
            bd.Sf = function(a) {
                return !!a || X(a)
            };
            $b.Be = "trackHash";
            bd.Be = Gb;
            $b.dg = "trackLinks";
            $b.Ug = "enableAll";
            var ge = N(function(a, c) {
                    var b = c[0];
                    a[b] = {
                        ea: c[1],
                        Pa: bd[b]
                    };
                    return a
                }, {}, La($b)),
                Wr = "hash host hostname href pathname port protocol search".split(" "),
                Bg = "ru by kz az kg lv md tj tm uz ee fr lt com co.il com.ge com.am com.tr com.ru".split(" "),
                rk = /(?:^|\.)(?:(ya\.ru)|(?:yandex)\.(\w+|com?\.\w+))$/,
                He = v(function(a) {
                    return (a ? a.replace(/^www\./, "") : "").toLowerCase()
                }),
                Ii = v(function(a) {
                    a = S(a).hostname;
                    var c = !1;
                    a && (c = -1 !== a.search(rk));
                    return c
                }),
                ol = w(S, U("protocol"), Ba("https:")),
                Tr = v(function(a) {
                    return Qs(a) && ol(a) ? "SameSite=None;Secure;" : ""
                }),
                Gj = /^\s+|\s+$/g,
                qk = oa(String.prototype.trim, "trim"),
                Sg = sa(function(a, c) {
                    return c.replace(a, "")
                }),
                aj = Sg(/\s/g),
                Ub = Sg(/\D/g),
                Ue = ["metrika_enabled"],
                Ag = [],
                ok = mb("gsc", mk),
                Ur = /:\d+$/,
                rs = v(function(a) {
                    var c =
                        (S(a).host || "").split(".");
                    return 1 === c.length ? c[0] : N(function(b, d, e) {
                        e += 1;
                        2 <= e && !b && (e = G(".", c.slice(-e)), ri(a, e) && (b = e));
                        return b
                    }, "", c)
                }),
                Uc = v(Pc),
                Te = v(function(a) {
                    var c = Uc(a),
                        b = "1" === c.C("debug"),
                        d = -1 < kc(S(a).href, "_ym_debug=1") || -1 < kc(S(a).href, "_ym_debug=2"),
                        e = a._ym_debug;
                    !e && !d || b || (a = S(a), c.D("debug", "1", void 0, a.host));
                    return !!(b || e || d)
                }),
                Sr = mb("debuggerEvents", Id, !0),
                Pr = ["http.0.st..rt.", "network error occurred", "send beacon", "Content Security Policy", "DOM Exception 18"],
                ae, Pa = function(a) {
                    return function(c,
                        b) {
                        void 0 === b && (b = !1);
                        if (ae) var d = new ae(c);
                        else Ea("Error", a.Error) ? (ae = a.Error, d = new a.Error(c)) : (ae = Rr, d = new ae(c));
                        b && (d.unk = !0);
                        return d
                    }
                }(window),
                Qr = gb(/^http./),
                Or = gb(/^err.kn/),
                lk = [],
                Nr = v(function(a) {
                    a = !(!a.addEventListener || !a.removeEventListener);
                    return {
                        Mi: a,
                        F: a ? "addEventListener" : "attachEvent",
                        ga: a ? "removeEventListener" : "detachEvent"
                    }
                }),
                ct = v(function(a) {
                    var c = !1;
                    if (!a.addEventListener) return c;
                    try {
                        var b = Object.defineProperty({}, "passive", {
                            get: function() {
                                c = !0;
                                return 1
                            }
                        });
                        a.addEventListener("test",
                            D, b)
                    } catch (d) {}
                    return c
                }),
                dt = sa(function(a, c) {
                    return a ? z({
                        capture: !0,
                        passive: !0
                    }, c || {}) : !!c
                }),
                fa = v(function(a) {
                    var c = ct(a),
                        b = dt(c),
                        d = {};
                    return z(d, {
                        F: function(e, f, g, h) {
                            x(function(k) {
                                var l = b(h);
                                kk(a, e, k, g, l, !1)
                            }, f);
                            return H(d.yb, d, e, f, g, h)
                        },
                        yb: function(e, f, g, h) {
                            x(function(k) {
                                var l = b(h);
                                kk(a, e, k, g, l, !0)
                            }, f)
                        }
                    })
                }),
                ja = v(hg),
                gk = sa(function(a, c) {
                    for (var b = []; !Td(c);) {
                        var d = Ir(c);
                        a(d, function(e) {
                            return e(c)
                        });
                        b.push(d)
                    }
                    return b
                }),
                pl = sa(function(a, c) {
                    return Ha(function(b, d) {
                        return c(b, function(e) {
                            try {
                                d(a(e))
                            } catch (f) {
                                b(f)
                            }
                        })
                    })
                }),
                Tg = sa(function(a, c) {
                    return Ha(function(b, d) {
                        return c(b, function(e) {
                            try {
                                a(e)(Ra(b, d))
                            } catch (f) {
                                b(f)
                            }
                        })
                    })
                }),
                tg = [],
                ug = !1,
                sg = !1,
                ql = sa(function(a, c) {
                    var b = c || {};
                    return {
                        l: u(b, Q),
                        C: function(d, e) {
                            var f = b[d];
                            return X(f) && !X(e) ? e : f
                        },
                        D: function(d, e) {
                            b[d] = e;
                            return this
                        },
                        Wb: function(d, e) {
                            return "" === e || ca(e) ? this : this.D(d, e)
                        },
                        Ha: u(b, a)
                    }
                }),
                Ja = ql(function(a) {
                    var c = "";
                    a = Bb(function(b, d) {
                        var e = d[0],
                            f = "" + e + ":" + d[1];
                        "t" === e ? c = f : b.push(f);
                        return b
                    }, [], La(a));
                    c && a.push(c);
                    return G(":", a)
                }),
                Ug, Xj = (Ug = {}, Ug.w = [
                    [function(a,
                        c) {
                        return {
                            N: function(b, d) {
                                var e, f = b.J;
                                f = (e = {}, e["page-url"] = f && f["page-url"] || "", e.charset = "utf-8", e);
                                "0" !== c.ca && (f["cnt-class"] = c.ca);
                                b.K || (b.K = Ja());
                                e = b.K;
                                var g = b.ba;
                                f = {
                                    na: {
                                        Ba: "watch/" + c.id
                                    },
                                    ba: z(void 0 === g ? {} : g, {
                                        Bb: !!e.C("pv") && !e.C("ar") && !e.C("wh")
                                    }),
                                    J: z(b.J || {}, f)
                                };
                                z(b, f);
                                d()
                            }
                        }
                    }, 1]
                ], Ug),
                Vg = u(Xj, bk),
                ob = Sd("w"),
                Wj = ["webkitvisibilitychange", "visibilitychange"],
                vf = ql(function(a) {
                    a = La(a);
                    return G("", A(function(c) {
                        var b = c[0];
                        c = c[1];
                        return Wa(c) ? "" : b + "(" + c + ")"
                    }, a))
                }),
                rl = "A B BIG BODY BUTTON DD DIV DL DT EM FIELDSET FORM H1 H2 H3 H4 H5 H6 HR I IMG INPUT LI OL P PRE SELECT SMALL SPAN STRONG SUB SUP TABLE TBODY TD TEXTAREA TFOOT TH THEAD TR U UL ABBR AREA BLOCKQUOTE CAPTION CENTER CITE CODE CANVAS DFN EMBED FONT INS KBD LEGEND LABEL MAP OBJECT Q S SAMP STRIKE TT ARTICLE AUDIO ASIDE FOOTER HEADER MENU METER NAV PROGRESS SECTION TIME VIDEO NOINDEX NOBR MAIN svg circle clippath ellipse defs foreignobject g glyph glyphref image line lineargradient marker mask path pattern polygon polyline radialgradient rect set text textpath title".split(" "),
                Lq = /^\s*(data|javascript):/i,
                rj = new RegExp(G("", ["\\.(" + G("|", "3gp 7z aac ac3 acs ai avi ape apk asf bmp bz2 cab cdr crc32 css csv cue divx dmg djvu? doc(x|m|b)? emf eps exe flac? flv iso swf gif t?gz jpe?g? js m3u8? m4a mp(3|4|e?g?) m4v md5 mkv mov msi ods og(g|m|v) psd rar rss rtf sea sfv sit sha1 svg tar tif?f torrent ts txt vob wave? wma wmv wmf webm ppt(x|m|b)? xls(x|m|b)? pdf phps png xpi g?zip".split(" ")) + ")$"]), "i"),
                Ua, Aj = (Ua = {}, Ua.hit = "h", Ua.params = "p", Ua.reachGoal = "g", Ua.userParams = "up",
                    Ua.trackHash = "th", Ua.accurateTrackBounce = "atb", Ua.notBounce = "nb", Ua.addFileExtension = "fe", Ua.extLink = "el", Ua.file = "fc", Ua.trackLinks = "tl", Ua.destruct = "d", Ua.setUserID = "ui", Ua.getClientID = "ci", Ua.clickmap = "cm", Ua.enableAll = "ea", Ua),
                et = v(function() {
                    var a = 0;
                    return function() {
                        return a += 1
                    }
                }),
                ft = w(L, et, la),
                kg = {
                    mc: function(a) {
                        a = Wd(a).C("mt", {});
                        a = La(a);
                        return a.length ? N(function(c, b, d) {
                            return "" + c + (d ? "-" : "") + b[0] + "-" + b[1]
                        }, "", a) : null
                    },
                    clc: function(a) {
                        var c = J(a).C("cls", {
                                ic: 0,
                                x: 0,
                                y: 0
                            }),
                            b = c.ic,
                            d = c.x;
                        c = c.y;
                        return b ? b + "-" + a.Math.floor(d / b) + "-" + a.Math.floor(c / b) : b + "-" + d + "-" + c
                    },
                    rqnt: function(a, c, b) {
                        a = b.J;
                        return !a || a.nohit ? null : ft(c)
                    }
                },
                Br = v(function(a) {
                    Uj(a, "_ymBRC", "1");
                    var c = "1" !== Tj(a, "_ymBRC");
                    c || Vj(a, "_ymBRC");
                    return c
                }),
                Qa = v(Sj),
                cd = v(Sj, function(a, c, b) {
                    return "" + c + b
                }),
                gt = v(U("document.documentElement")),
                ht = v(function(a) {
                    a = n(a, "document") || {};
                    return ("" + (a.characterSet || a.charset || "")).toLowerCase()
                }),
                fb = v(w(U("document"), u("createElement", Fc))),
                qi = v(function(a) {
                    var c = n(a, "Element.prototype");
                    return c ?
                        (a = tb(function(b) {
                            var d = c[b];
                            return !!d && Ea(b, d)
                        }, ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"])) ? c[a] : null : null
                }),
                it = Ba("INPUT"),
                Qe = w(Ma, it),
                jt = Ba("TEXTAREA"),
                yr = w(Ma, jt),
                kt = Ba("SELECT"),
                zr = w(Ma, kt),
                Re = w(U("type"), gb(/^(checkbox|radio)$/)),
                Mf = w(Ma, gb(/^INPUT|SELECT|TEXTAREA$/)),
                ue = w(Ma, gb(/^INPUT|SELECT|TEXTAREA|BUTTON$/)),
                Qf = "INPUT CHECKBOX RADIO TEXTAREA SELECT PROGRESS".split(" "),
                xr = ["submit", "image", "hidden"],
                Yf = v(function() {
                    for (var a = 59, c = {},
                            b = 0; b < rl.length; b += 1) c[rl[b]] = String.fromCharCode(a), a += 1;
                    return c
                }),
                Oj = v(function(a) {
                    return {
                        tj: a,
                        jb: null,
                        sb: []
                    }
                }),
                Mj = {},
                ng = {};
            Mj.p = 500;
            var Lj = {
                i: "id",
                n: "name",
                h: "href",
                ty: "type"
            };
            ng.h = !0;
            ng.c = !0;
            var Yc = {};
            Yc.p = uf;
            Yc.c = function(a, c, b) {
                (a = ab(n(c, "textContent"))) && b && (b = b(c), b.length && $a(w(U("textContent"), ab, Ba(a)), b) && (a = ""));
                Qe(c) && (a = ab(c.getAttribute && c.getAttribute("value") || a));
                return a
            };
            var dd, mg = "button," + G(",", A(function(a) {
                    return 'input[type="' + a + '"]'
                }, ["button", "submit", "reset", "file"])) +
                ",a",
                Ri = u(mg, jb),
                vr = (dd = {}, dd.A = "h", dd.BUTTON = "i", dd.DIV = "i", dd.INPUT = "ty", dd),
                sl = /\/$/,
                Kj = mb("r", function(a, c) {
                    var b = Jj(a, c),
                        d = b[0];
                    return !b[1] && d
                }),
                Qd = v(function() {
                    return {
                        Ga: {},
                        pending: {},
                        children: {}
                    }
                }),
                Wg = U("postMessage"),
                lt = B("s.f", function(a, c, b, d, e) {
                    c = c(d);
                    var f = Qd(a),
                        g = G(":", [c.meta.oc, c.meta.key]);
                    if (Wg(b)) {
                        f.pending[g] = e;
                        try {
                            b.postMessage(c.$f, "*")
                        } catch (h) {
                            delete f.pending[g];
                            return
                        }
                        T(a, function() {
                            delete f.pending[g]
                        }, 5E3, "if.s")
                    }
                }),
                mt = B("s.fh", function(a, c, b, d, e, f) {
                    var g = null,
                        h = null,
                        k =
                        Qd(a),
                        l = null;
                    try {
                        g = zb(a, f.data), h = g.__yminfo, l = g.data
                    } catch (m) {
                        return
                    }
                    if (!ca(h) && h.substring && "__yminfo" === h.substring(0, 8) && !ca(l) && (g = h.split(":"), 4 === g.length))
                        if (h = c.id, c = g[1], a = g[2], g = g[3], !R(l) && l.type && "0" === g && l.counterId) {
                            if (!l.toCounter || l.toCounter == h) {
                                k = null;
                                try {
                                    k = f.source
                                } catch (m) {}!Wa(k) && Wg(k) && (f = d.R(l.type, [f, l]), e = A(w(Q, ki(e)), f.concat([{}])), l = b([c, a, l.counterId], e), k.postMessage(l.$f, "*"))
                            }
                        } else g === "" + h && R(l) && ha(function(m) {
                                return !(!m.hid || !m.counterId)
                            }, l).length === l.length &&
                            (b = k.pending[G(":", [c, a])]) && b.apply(null, [f].concat(l))
                }),
                rd = v(function(a, c) {
                    var b, d = Fc("getElementsByTagName", n(a, "document")),
                        e = Qd(a),
                        f = Wg(a),
                        g = ud(a),
                        h = fa(a);
                    if (!d || !f) return null;
                    d = d.call(a.document, "iframe");
                    f = (b = {}, b.counterId = c.id, b.hid = "" + Cc(a), b);
                    Ne(a) && (f.duid = Rd(a, c));
                    rr(a, g);
                    sr(a);
                    b = tr(a, f);
                    var k = C([a, u([], b)], lt);
                    x(function(l) {
                        var m = null;
                        try {
                            m = l.contentWindow
                        } catch (p) {}
                        m && k(m, {
                            type: "initToChild"
                        }, function(p, q) {
                            g.R("initToParent", [p, q])
                        })
                    }, d);
                    rb(a) && k(a.parent, {
                        type: "initToParent"
                    }, function(l,
                        m) {
                        g.R("parentConnect", [l, m])
                    });
                    h.F(a, ["message"], C([a, c, b, g, f], mt));
                    return {
                        $: g,
                        Ga: e.Ga,
                        children: e.children,
                        oe: k
                    }
                }, w(bb, L)),
                sd = v(function(a, c) {
                    if (!Ne(a) || !rb(a)) return Rd(a, c);
                    var b = rd(a, c);
                    return b && b.Ga[c.id] ? b.Ga[c.id].info.duid || Rd(a, c) : Rd(a, c)
                }, function(a, c) {
                    return "{" + c.Sd + c.Va
                }),
                nt = v(w(ja, Ha(function(a) {
                    return -(new a.l.Date).getTimezoneOffset()
                }))),
                ot = w(ja, Ha(function(a) {
                    a = new a.l.Date;
                    return G("", A(Jr, [a.getFullYear(), a.getMonth() + 1, a.getDate(), a.getHours(), a.getMinutes(), a.getSeconds()]))
                })),
                pt = w(ja, Ha(lg)),
                tl = v(w(ja, Ha(function(a) {
                    return a.Aa[0]
                }))),
                qt = v(function(a) {
                    a = J(a);
                    var c = a.C("counterNum", 0) + 1;
                    a.D("counterNum", c);
                    return c
                }, w(bb, L)),
                qa, Pd = (qa = {}, qa.vf = u($c.version, Q), qa.nt = Ss, qa.fu = function(a, c, b) {
                        var d = b.J;
                        if (!d) return null;
                        c = (n(a, "document.referrer") || "").replace(sl, "");
                        b = (d["page-ref"] || "").replace(sl, "");
                        d = d["page-url"];
                        a = S(a).href !== d;
                        c = c !== b;
                        b = 0;
                        a && c ? b = 3 : c ? b = 1 : a && (b = 2);
                        return b
                    }, qa.en = ht, qa.la = kl, qa.ut = function(a, c, b) {
                        var d = b.M;
                        b = b.J;
                        d = d && d.Hc;
                        b && (Ii(a) || c.He || d) && (b.ut =
                            Ga.vg);
                        return null
                    }, qa.v = u(Ga.bc, Q), qa.cn = qt, qa.dp = function(a) {
                        var c = J(a),
                            b = c.C("bt", {});
                        if (X(c.C("bt"))) {
                            var d = n(a, "navigator.getBattery");
                            try {
                                b.p = d && d.call(a.navigator)
                            } catch (e) {}
                            c.D("bt", b);
                            b.p && b.p.then && b.p.then(E(a, "bi:dp.p", function(e) {
                                b.aj = n(e, "charging") && 0 === n(e, "chargingTime")
                            }))
                        }
                        return sb(b.aj)
                    }, qa.ls = v(function(a, c) {
                        var b = cd(a, c.id),
                            d = ja(a),
                            e = b.C("lsid");
                        return +e ? e : (d = Xa(a, 0, d(Z)), b.D("lsid", d), d)
                    }, bb), qa.hid = Cc, qa.phid = function(a, c) {
                        if (!rb(a)) return null;
                        var b = rd(a, c);
                        if (!b) return null;
                        var d = ea(b.Ga);
                        return d.length ? b.Ga[d[0]].info.hid : null
                    }, qa.z = nt, qa.i = ot, qa.et = pt, qa.c = w(U("navigator.cookieEnabled"), Ob), qa.rn = w(Q, Xa), qa.rqn = function(a, c, b) {
                        b = b.J;
                        if (!b || b.nohit) return null;
                        c = L(c);
                        a = cd(a, c);
                        c = (a.C("reqNum", 0) || 0) + 1;
                        a.D("reqNum", c);
                        if (a.C("reqNum") === c) return c;
                        a.pc("reqNum");
                        return null
                    }, qa.u = sd, qa.w = function(a) {
                        a = Oc(a);
                        return a[0] + "x" + a[1]
                    }, qa.s = function(a) {
                        var c = n(a, "screen");
                        if (c) {
                            a = n(c, "width");
                            var b = n(c, "height");
                            c = n(c, "colorDepth") || n(c, "pixelDepth");
                            return G("x", [a, b, c])
                        }
                        return null
                    },
                    qa.sk = U("devicePixelRatio"), qa.ifr = w(rb, Ob), qa.j = w(Us, Ob), qa.sti = function(a) {
                        return rb(a) && Ts(a) ? "1" : null
                    }, qa),
                qr = v(function() {
                    return ra(ea(Pd), ea(kg))
                }),
                pr = v(Jc, L),
                Hj = v(function() {
                    return {
                        Xe: null,
                        ta: []
                    }
                }, L),
                mr = /^[a-z][\w.+-]+:/i,
                Xg, Yb = [
                    [Se, 1],
                    [Me, 2],
                    [Qb(), 3],
                    [Ij, 4]
                ],
                Le = [],
                xb = u(Yb, ck),
                Xb = (Xg = {}, Xg.h = Yb, Xg),
                aa = u(Xb, bk);
            xb(Ej, -100);
            var hr = /[^a-z0-9.:-]/,
                Yg, Zg = {},
                ul = va([ig && [ig, 0], Eb && [Eb, 1],
                    [Fb, 2], Nd && [Nd, 3],
                    [Xc, 4]
                ]),
                tc = va([ig, Eb, Fb, Nd, Xc]),
                $g = [Fb];
            $g.unshift(Eb);
            $g.push(Nd);
            var vl = va($g),
                ed = va([Xc]);
            va([Eb, Fb]);
            var rt = va([Eb, Xc]),
                wl = va([Eb, Fb, Nd, Xc]),
                za = (Yg = {}, Yg.h = vl, Yg),
                ah = v(function(a, c) {
                    var b = Zg["*"] ? Zg["*"] : c && Zg[c];
                    b || (b = c ? za[c] || [] : tc);
                    b = N(function(d, e) {
                        var f = e(a);
                        if (f) {
                            var g = tb(w(Md, Ba(e)), ul);
                            g && d.push([g[1], f])
                        }
                        return d
                    }, [], b);
                    b.length || fe();
                    return b
                }, bb),
                bh, st = H(K.reject, K, Ta()),
                Da = (bh = {}, bh.h = ob, bh),
                wa = B("g.sen", function(a, c, b) {
                    var d = ah(a, c);
                    b = b ? lr(a, c, b) : [];
                    var e = Da[c],
                        f = e ? e(a, d, b) : ob(a, d, b);
                    return function() {
                        var g = Oa(arguments),
                            h = g[0];
                        g = g.slice(1);
                        var k = h.ba;
                        h = z(h, {
                            ba: z(void 0 ===
                                k ? {} : k, {
                                    ha: [c]
                                })
                        });
                        return f.apply(null, [h].concat(g))
                    }
                }, st),
                $q = sa(function(a, c) {
                    if (!c[a]) {
                        var b, d = new K(function(e) {
                            b = e
                        });
                        c[a] = {
                            Gf: b,
                            promise: d,
                            Hf: !1
                        }
                    }
                    return c[a].promise
                }),
                Bj = v(w(Jc, Ha)),
                tt = B("dc.init", function(a, c) {
                    return c && yg(pe(c.split(":")[0])) ? {
                        log: D,
                        warn: D,
                        error: D
                    } : Zq(a, c)
                }),
                pc = v(tt, bb),
                qm = B("h.p", function(a, c) {
                    var b, d, e = wa(a, "h", c),
                        f = c.wc || "" + S(a).href,
                        g = c.kh || a.document.referrer,
                        h = {
                            K: Ja((b = {}, b.pv = 1, b)),
                            J: (d = {}, d["page-url"] = f, d["page-ref"] = g, d),
                            M: {}
                        };
                    h.M.X = c.X;
                    h.M.Ge = c.Ge;
                    c.md && h.J && (h.J.nohit =
                        "1");
                    return e(h, c).then(function(k) {
                        var l;
                        k && (c.md || nc(a, c, "h", (l = {}, l.id = c.id, l.url = f, l.ref = g, l), c.X)(), Tb(a, C([a, c, k], ar)))
                    })["catch"](E(a, "h.g.s"))
                }),
                ch = ["yandex_metrika_callback" + $c.callbackPostfix, "yandex_metrika_callbacks" + $c.callbackPostfix],
                ut = B("cb.i", function(a) {
                    var c = ch[0],
                        b = ch[1];
                    if (O(a[c])) a[c]();
                    "object" === typeof a[b] && x(function(d, e) {
                        a[b][e] = null;
                        cg(a, d)
                    }, a[b]);
                    x(function(d) {
                        try {
                            delete a[d]
                        } catch (e) {
                            a[d] = void 0
                        }
                    }, ch)
                }),
                Xq = /^[a-zA-Z0-9'!#$%&*+-/=?^_`{|}~]+$/,
                xl = v(function(a) {
                    return !!n(a,
                        "crypto.subtle.digest") && !!n(a, "TextEncoder") && !!n(a, "FileReader") && !!n(a, "Blob")
                }),
                Yq = Sg(/[^\d+()]/g),
                Vq = ["yandex_cid", "yandex_public_id"],
                vt = B("fpm", function(a, c) {
                    if (!ol(a)) return D;
                    var b = L(c);
                    if (!xl(a)) return Kb(a, b, "ns"), D;
                    var d = Aa(a, c);
                    return d ? function(e) {
                        return (new K(function(f, g) {
                            return na(e) ? ea(e).length ? f(xj(a, e).then(function(h) {
                                var k, l;
                                h && h.length && d.params((k = {}, k.__ym = (l = {}, l.fpp = h, l), k))
                            }, D)) : g(Ta("fpm.l")) : g(Ta("fpm.o"))
                        }))["catch"](E(a, "fpm.en"))
                    } : D
                }),
                bf = sa(function(a, c) {
                    var b = {};
                    fg(a)(function(d) {
                        b = d[c] || {}
                    });
                    return b
                }),
                wt = B("c.c.cc", function(a) {
                    var c = J(a),
                        b = w(bf(a), function(d) {
                            var e, f = (e = {}, e.clickmap = !!d.clickmap, e);
                            return z({}, d, f)
                        });
                    return E(a, "g.c.cc", w(H(c.C, c, "counters", {}), ea, Wb(b)))
                }),
                xt = B("gt.c.rs", function(a, c) {
                    var b, d = L(c),
                        e = c.id,
                        f = c.ca,
                        g = c.Kg,
                        h = c.Be,
                        k = C([a, d], Tq);
                    eg(a, d, (b = {}, b.id = e, b.type = +f, b.clickmap = g, b.trackHash = !!h, b));
                    return k
                }),
                vj = v(Id),
                Ld = v(Jc, L),
                yt = B("pa.int", function(a, c) {
                    var b;
                    return b = {}, b.params = function() {
                        var d, e, f, g = Oa(arguments),
                            h = Sq(g);
                        if (!h) return null;
                        g = h.Pg;
                        var k = h.X;
                        h = h.cc;
                        if (!na(k) && !R(k)) return null;
                        var l = wa(a, "1", c),
                            m = Ld(c).url,
                            p = !at(c),
                            q = "pa",
                            r = (d = {}, d.id = c.id, d);
                        d = k;
                        var t = "";
                        if (t = n(k, "__ym.user_id")) q = "pau", r.uid = t;
                        I("__ymu", ea(k)) && (q = "paup");
                        d.__ym && (d = z({}, k), d.__ym = N(function(y, F) {
                            var P = n(k, "__ym." + F);
                            P && (y[F] = P);
                            return y
                        }, {}, $d), ea(d.__ym).length || delete d.__ym, p = !!ea(d).length);
                        d = t ? void 0 : JSON.stringify(d);
                        d = nc(a, c, q, r, d);
                        l = l({
                            M: {
                                X: k
                            },
                            K: Ja((e = {}, e.pa = 1, e.ar = 1, e)),
                            J: (f = {}, f["page-url"] = m || S(a).href, f)
                        }, c).then(p ? d : D);
                        return Wc(a, "p.s",
                            l, h, g)
                    }, b
                }),
                oe = v(tj, w(bb, L)),
                zt = B("y.p", function(a, c) {
                    var b = tj(a, c);
                    if (b) {
                        var d = ke(a),
                            e = C([a, b, c], Oq);
                        Gh(a, d, function(f) {
                            f.F(["params"], e)
                        });
                        b.$.F(["params"], w(U("1"), e))
                    }
                }),
                ss = v(function(a) {
                    if (a = fb(a)) return a("a")
                }),
                yl = {
                    xj: gb(/[/&=?#]/)
                },
                Ee = B("go.in", function(a, c, b, d) {
                    var e;
                    void 0 === b && (b = "goal");
                    return e = {}, e.reachGoal = function(f, g, h, k) {
                        var l, m, p;
                        if (!f || yl[b] && yl[b](f)) return null;
                        var q = g,
                            r = h || D;
                        O(g) && (r = g, q = void 0, k = h);
                        var t = nc(a, c, "gr", (l = {}, l.id = c.id, l.goal = f, l), q),
                            y = "goal" === b;
                        g = wa(a, "g", c);
                        l = Nq(a, c, f, b);
                        h = l[0];
                        l = l[1];
                        q = g({
                            M: {
                                X: q
                            },
                            K: Ja((m = {}, m.ar = 1, m)),
                            J: (p = {}, p["page-url"] = h, p["page-ref"] = l, p)
                        }, c).then(function() {
                            var F, P;
                            y && t();
                            ub(a, (F = {}, F.counterKey = L(c), F.name = "event", F.data = (P = {}, P.schema = b, P.name = f, P), F));
                            d && d()
                        });
                        return Wc(a, "g.s", q, r, k)
                    }, e
                }),
                At = B("guid.int", function(a, c) {
                    var b;
                    return b = {}, b.getClientID = function(d) {
                        var e = Rd(a, c);
                        d && cg(a, d, null, e);
                        return e
                    }, b
                }),
                Fk, Bt = B("th.e", function(a, c) {
                    function b() {
                        g || (k = Lb(a, "onhashchange") ? fa(a).F(a, ["hashchange"], h) : ts(a, h))
                    }
                    var d, e = wa(a,
                            "t", c),
                        f = Ke(a, L(c)),
                        g = !1,
                        h = E(a, "h.h.ch", H(us, null, a, c, e)),
                        k = D;
                    c.Be && (b(), g = !0);
                    e = E(a, "tr.hs.h", function(l) {
                        var m;
                        l ? b() : k();
                        g = !!l;
                        f((m = {}, m.trackHash = g, m))
                    });
                    return d = {}, d.trackHash = e, d.u = k, d
                }),
                Ct = sa(function(a, c) {
                    ia(c) ? a.push(c) : x(w(Q, Fa("push", a)), c)
                }),
                Kd = mb("retryReqs", function(a) {
                    var c = Qa(a),
                        b = c.C("retryReqs", {}),
                        d = ja(a)(Z);
                    x(function(e) {
                        var f = e[0];
                        e = e[1];
                        (!e || !e.time || e.time + 864E5 < d) && delete b[f]
                    }, La(b));
                    c.D("retryReqs", b);
                    return b
                }, !0),
                dh = w(kc, Ba(0)),
                zl = vb(dh),
                Dt = [zl("watch"), zl("clmap")],
                Et =
                B("g.r", function(a) {
                    var c = ja(a),
                        b = Kd(a),
                        d = c(Z),
                        e = Cc(a);
                    return Bb(function(f, g) {
                        var h = g[0],
                            k = g[1];
                        k && $a(Ha(k.resource), Dt) && !k.d && k.ghid && k.ghid !== e && k.time && 500 < d - k.time && k.time + 864E5 > d && 2 >= k.browserInfo.rqnl && (k.d = 1, h = {
                            protocol: k.protocol,
                            host: k.host,
                            Ba: k.resource,
                            yi: k.postParams,
                            X: k.params,
                            Cg: k.browserInfo,
                            vj: k.ghid,
                            time: k.time,
                            Tb: Ia(h),
                            Ng: k.counterId,
                            ca: k.counterType
                        }, k.telemetry && (h.Ja = k.telemetry), f.push(h));
                        return f
                    }, [], La(b))
                }),
                Ft = B("nb.p", function(a, c) {
                    function b(F) {
                        l() || (F = "number" === typeof F ?
                            F : 15E3, y = vs(a, d(!1), F), m())
                    }

                    function d(F) {
                        return function(P) {
                            var M, ma, xa;
                            void 0 === P && (P = (M = {}, M.ctx = {}, M.callback = D, M));
                            if (F || !r && !k.Ld) {
                                r = !0;
                                m();
                                y && y();
                                var Db = p(Z);
                                M = (Ia(k.C("lastHit")) || 0) < Db - 18E5;
                                var Hd = .1 > Math.random();
                                k.D("lastHit", Db);
                                Db = Ja((ma = {}, ma.nb = 1, ma.cl = t, ma.ar = 1, ma));
                                ma = Ld(c);
                                ma = {
                                    J: (xa = {}, xa["page-url"] = ma.url || S(a).href, xa),
                                    K: Db,
                                    M: {
                                        force: F
                                    }
                                };
                                xa = pc(a, L(c)).warn;
                                !P.callback && P.ctx && xa("nbnc");
                                (xa = F || M || Hd) || (xa = a.location.href, M = a.document.referrer, xa = !(xa && M ? sj(xa) === sj(M) : !xa && !M));
                                if (xa) return xa = g(ma, c), Wc(a, "l.o.l", xa, P.callback, P.ctx)
                            }
                            return null
                        }
                    }
                    var e, f, g = wa(a, "n", c),
                        h = L(c),
                        k = cd(a, c.id),
                        l = u(u(h, bf(a)), w(la, U("accurateTrackBounce"))),
                        m = u((e = {}, e.accurateTrackBounce = !0, e), Ke(a, h)),
                        p = ja(a),
                        q = p(Z),
                        r = !1,
                        t = 0,
                        y;
                    pa(c, function(F) {
                        t = F.dh - q
                    });
                    c.Me && b(c.Me);
                    e = (f = {}, f.notBounce = d(!0), f.u = y, f);
                    e.accurateTrackBounce = b;
                    return e
                }),
                Gq = sa(ic)("(ym-disable-clickmap|ym-clickmap-ignore)"),
                Gt = B("clm.p", function(a, c) {
                    if (qd(a)) return D;
                    var b = wa(a, "m", c),
                        d = L(c),
                        e = ja(a),
                        f = e(Z),
                        g = u(u(d, bf(a)), w(la,
                            U("clickmap"))),
                        h, k = null;
                    d = E(a, "clm.p.c", function(l) {
                        var m = g();
                        if (m) {
                            var p = J(a),
                                q = p.C("cls", {
                                    ic: 0,
                                    x: 0,
                                    y: 0
                                });
                            p.D("cls", {
                                ic: q.ic + 1,
                                x: q.x + l.clientX,
                                y: q.y + l.clientY
                            });
                            p = "object" === typeof m ? m : {};
                            q = p.filter;
                            m = p.isTrackHash || !1;
                            var r = A(function(y) {
                                return ("" + y).toUpperCase()
                            }, p.ignoreTags || []);
                            X(h) && (h = p.quota || null);
                            var t = !!p.quota;
                            l = {
                                element: Hq(a, l),
                                position: oj(a, l),
                                button: Iq(l),
                                time: e(Z)
                            };
                            p = S(a).href;
                            if (Fq(a, l, k, r, q)) {
                                if (t) {
                                    if (!h) return;
                                    --h
                                }
                                r = Pe(a, l.element);
                                q = r[0];
                                r = r[1];
                                t = og(a, l.element);
                                q = ["rn", Xa(a),
                                    "x", Math.floor(65535 * (l.position.x - t.left) / (q || 1)), "y", Math.floor(65535 * (l.position.y - t.top) / (r || 1)), "t", Math.floor((l.time - f) / 100), "p", uf(a, l.element), "X", l.position.x, "Y", l.position.y
                                ];
                                q = G(":", q);
                                m && (q += ":wh:1");
                                Eq(a, p, q, b, c);
                                k = l
                            }
                        }
                    });
                    return fa(a).F(n(a, "document"), ["click"], d)
                }),
                Ht = B("trigger.in", function(a, c) {
                    c.fg && Tb(a, C([a, "yacounter" + c.id + "inited"], Ar), "t.i")
                }),
                It = B("c.m.p", function(a, c) {
                    var b, d = L(c);
                    return b = {}, b.clickmap = u(Ke(a, d), Dq), b
                }),
                Pi = u("form", oc),
                lq = u("form", jb),
                Cq = v(w(bb, vb(pa)(U("settings.form_goals"))),
                    bb),
                Jt = B("s.f.i", function(a, c) {
                    var b, d = [],
                        e = [],
                        f = fa(a);
                    d.push(f.F(a, ["click"], E(a, "s.f.c", C([a, c, e], Bq))));
                    d.push(f.F(a, ["submit"], E(a, "s.f.e", function(g) {
                        var h = n(g, "target");
                        g = n(g, "isTrusted");
                        lj(!0, a, c, e, h, g)
                    })));
                    mj(a, c, "fgi", (b = {}, b.id = c.id, b));
                    return C([De, d], x)
                }),
                Kt = B("s.f.i", function(a, c) {
                    return pa(c, function(b) {
                        var d;
                        if (n(b, "settings.button_goals")) return b = fa(a).F(a, ["click"], E(a, "c.t.c", w(C([a, c], hf(a, c, "", Aq))))), nc(a, c, "gbi", (d = {}, d.id = c.id, d))(), b
                    })
                }),
                ac, be, eh, fd, Hb, $f = (ac = {}, ac.transaction_id =
                    "id", ac.item_brand = "brand", ac.index = "position", ac.item_variant = "variant", ac.value = "revenue", ac.item_category = "category", ac.item_list_name = "list", ac),
                lc = (be = {}, be.item_id = "id", be.item_name = "name", be.promotion_name = "coupon", be),
                zq = (eh = {}, eh.promotion_name = "name", eh),
                Al = (fd = {}, fd.promotion_name = "name", fd.promotion_id = "id", fd.item_id = "product_id", fd.item_name = "product_name", fd),
                wq = "currencyCode add delete remove purchase checkout detail impressions click promoView promoClick".split(" "),
                xq = (Hb = {}, Hb.view_item = {
                    event: "detail",
                    xa: lc,
                    La: "products"
                }, Hb.add_to_cart = {
                    event: "add",
                    xa: lc,
                    La: "products"
                }, Hb.remove_from_cart = {
                    event: "remove",
                    xa: lc,
                    La: "products"
                }, Hb.begin_checkout = {
                    event: "checkout",
                    xa: lc,
                    La: "products"
                }, Hb.purchase = {
                    event: "purchase",
                    xa: lc,
                    La: "products"
                }, Hb.view_item_list = {
                    event: "impressions",
                    xa: lc
                }, Hb.select_item = {
                    event: "click",
                    La: "products",
                    xa: lc
                }, Hb.view_promotion = {
                    event: "promoView",
                    La: "promotions",
                    xa: Al
                }, Hb.select_promotion = {
                    event: "promoClick",
                    La: "promotions",
                    xa: Al
                }, Hb),
                kj = B("dl.w", function(a, c, b) {
                    function d() {
                        var g =
                            n(a, c);
                        (e = R(g) && Ie(a, g, b)) || (f = T(a, d, 1E3, "ec.dl"))
                    }
                    var e, f = 0;
                    d();
                    return function() {
                        return ka(a, f)
                    }
                }),
                Lt = B("p.e", function(a, c) {
                    var b = Aa(a, c);
                    if (b) {
                        var d = J(a);
                        b = b.params;
                        var e = E(a, "h.ee", C([a, L(c), b], uq));
                        return c.sd ? (d.D("ecs", 0), jj(a, c.sd, e)) : pa(c, function(f) {
                            if ((f = n(f, "settings.ecommerce")) && ia(f)) return d.D("ecs", 1), jj(a, f, e)
                        })
                    }
                }),
                gj = v(function(a) {
                    return G("[^\\d<>]*", a.split(""))
                }),
                Kn = v(function(a) {
                    return new RegExp(gj(a), "g")
                }),
                rq = /\S/,
                $i = u(["style", "display:inline;margin:0;padding:0;font-size:inherit;color:inherit;line-height:inherit"],
                    td),
                Bl = v(function(a) {
                    return qd(a) || !od(a)
                }),
                Mt = B("phc.h", function(a, c) {
                    if (!uk(a) && !Bl(a)) return pa(c, function(b) {
                        if (!n(b, "settings.phchange")) {
                            var d = Qa(a),
                                e = eb(S(a).search, "_ym_hide_phones=1") || d.C("hide_phones", 0);
                            b = n(b, "settings.phhide");
                            e && !b && (b = ["*"], d.D("hide_phones", 1));
                            b && Si(a, c, b)
                        }
                    })["catch"](E(a, "phc.hs"))
                }),
                Cl = v(function(a) {
                    a = S(a);
                    a = Vr(a.search.substring(1));
                    a["_ym_status-check"] = a["_ym_status-check"] || "";
                    a._ym_lang = a._ym_lang || "ru";
                    return a
                }),
                Vi = w(Cl, U("_ym_status-check"), Ia),
                Nt = w(Cl,
                    U("_ym_lang")),
                iq = /^http:\/\/([\w\-.]+\.)?webvisor\.com\/?$/,
                jq = /^https:\/\/([\w\-.]+\.)?metri[kc]a\.yandex\.(ru|by|kz|com|com\.tr)\/?$/,
                Ui = gb(/^https:\/\/(yastatic\.net\/s3\/metrika|s3\.mds\.yandex\.net\/internal-metrika-betas|[\w-]+\.dev\.webvisor\.com|[\w-]+\.dev\.metrika\.yandex\.ru)\/(\w|-|\/|(\.)(?!\.))+\.js$/),
                nq = ["form", "button", "phone", "status"],
                fh = [],
                kq = v(function(a, c, b) {
                    x(w(Lc([a, c, b]), la), fh);
                    if (b.inline) {
                        c = Ti(b);
                        var d = b.data;
                        b = b.id;
                        Oi(a, c, void 0 === b ? "" : b, void 0 === d ? "" : d)
                    } else b.resource &&
                        Ui(b.resource) && (a._ym__postMessageEvent = c, a._ym__inpageMode = b.inpageMode, a._ym__initMessage = b.initMessage, oq(a, b.resource))
                }, function(a, c, b) {
                    return b.id
                }),
                Ot = B("cs.init", function(a, c) {
                    var b, d = Vi(a);
                    if (d && c.id === d && "0" === c.ca) {
                        var e = Ti((b = {}, b.lang = Nt(a), b.fileId = "status", b));
                        T(a, C([a, e, "" + d], Oi), 0, "cs")
                    }
                }),
                Pt = B("suid.int", function(a, c) {
                    var b;
                    return b = {}, b.setUserID = function(d, e, f) {
                        if (ia(d) || mc(a, d)) {
                            var g = Aa(a, c);
                            d = td(["__ym", "user_id", d]);
                            g.params(d, e || D, f)
                        } else pc(a, L(c)).error("wuid")
                    }, b
                }),
                Vc = {
                    position: "absolute"
                },
                Ni = {
                    position: "fixed"
                },
                Xf = {
                    borderRadius: "50%"
                },
                Qt = mb("siteStatistics", function(a, c) {
                    if (!uk(a)) return Nb(a)(Ra(D, C([c, w(U("settings.sm"), Ba(1), C([C([a, c.id], gq), D], Ad), la)], pa)))
                }),
                Rt = B("up.int", function(a, c) {
                    var b;
                    return b = {}, b.userParams = E(a, "up.c", function(d, e, f) {
                        var g, h = Aa(a, c),
                            k = pc(a, L(c)).warn;
                        h ? na(d) ? (d = (g = {}, g.__ymu = d, g), (g = h.params) && g(d, e || D, f)) : k("wup") : k("nci")
                    }), b
                }),
                St = /[\*\.\?\(\)]/g,
                Tt = v(function(a, c, b) {
                    var d;
                    try {
                        var e = b.replace("\\s", " ").replace(St, "");
                        pc(a, "").warn("nnw",
                            (d = {}, d.name = e, d))
                    } catch (f) {}
                }, bb),
                Ut = B("r.nn", function(a) {
                    Te(a) && Ie(a, Gg, function(c) {
                        c.za.F(function(b) {
                            Tt(a, b[1], b[0]);
                            Gg.splice(100)
                        })
                    })
                }),
                Vt = B("e.a.p", function(a, c) {
                    var b, d = Aa(a, c);
                    d = C([w(Q, Ha(!0)), va(A(u(d, n), ["clickmap", "trackLinks", "accurateTrackBounce"]))], A);
                    c.Ug && d();
                    return b = {}, b.enableAll = d, b
                }),
                Wt = v(Jc, L),
                Xt = B("fpi", function(a) {
                    var c = Dd(a);
                    if (c && !a.document.hidden) {
                        var b = J(a).Ia;
                        b("fpe", 1);
                        var d = fa(a).F(a, ["visibilitychange", "webkitvisibilitychange"], function() {
                            a.document.hidden && (b("fht",
                                c.now()), d())
                        })
                    }
                }),
                Yt = v(function(a) {
                    a = n(a, "console");
                    var c = n(a, "log");
                    c = Xe("log", c) ? H(c, a) : D;
                    var b = n(a, "warn");
                    b = Xe("warn", b) ? H(b, a) : c;
                    var d = n(a, "error");
                    a = Xe("error", d) ? H(d, a) : c;
                    return {
                        log: c,
                        error: a,
                        warn: b
                    }
                }),
                Zt = u("add", Be),
                $t = u("remove", Be),
                au = u("detail", Be),
                bu = u("purchase", Be),
                cu = "FB_IAB FBAV OKApp GSA/ yandex yango uber EatsKit YKeyboard iOSAppUslugi YangoEats PassportSDK".split(" "),
                sf = v(function(a) {
                    var c = $k(a);
                    a = c.jg;
                    if (!c.nf) return !1;
                    c = Fa("indexOf", a);
                    c = $a(w(c, Ba(-1), Gc), cu);
                    var b = /CFNetwork\/[0-9][0-9.]*.*Darwin\/[0-9][0-9.]*/.test(a),
                        d = /YaBrowser\/[\d.]+/.test(a),
                        e = /Mobile/.test(a);
                    return c || b || d && e || !/Safari/.test(a) && e
                }),
                mn = v(function(a) {
                    var c = lb(a);
                    return c ? eb(c, "YangoEats") || Cd(a) : !1
                }),
                eq = /([0-9\\.]+) Safari/,
                du = /\sYptp\/\d\.(\d+)\s/,
                Dl = v(function(a) {
                    var c;
                    a: {
                        if ((c = lb(a)) && (c = du.exec(c)) && 1 < c.length) {
                            c = Ia(c[1]);
                            break a
                        }
                        c = 0
                    }
                    return 50 <= c && 99 >= c || Af(a, 79) ? !1 : !Zd(a) || sf(a)
                }),
                El = "monospace;sans-serif;serif;Andale Mono;Arial;Arial Black;Arial Hebrew;Arial MT;Arial Narrow;Arial Rounded MT Bold;Arial Unicode MS;Bitstream Vera Sans Mono;Book Antiqua;Bookman Old Style;Calibri;Cambria;Cambria Math;Century;Century Gothic;Century Schoolbook;Comic Sans;Comic Sans MS;Consolas;Courier;Courier New;Garamond;Geneva;Georgia;Helvetica;Helvetica Neue;Impact;Lucida Bright;Lucida Calligraphy;Lucida Console;Lucida Fax;LUCIDA GRANDE;Lucida Handwriting;Lucida Sans;Lucida Sans Typewriter;Lucida Sans Unicode;Microsoft Sans Serif;Monaco;Monotype Corsiva;MS Gothic;MS Outlook;MS PGothic;MS Reference Sans Serif;MS Sans Serif;MS Serif;MYRIAD;MYRIAD PRO;Palatino;Palatino Linotype;Segoe Print;Segoe Script;Segoe UI;Segoe UI Light;Segoe UI Semibold;Segoe UI Symbol;Tahoma;Times;Times New Roman;Times New Roman PS;Trebuchet MS;Verdana;Wingdings;Wingdings 2;Wingdings 3".split(";"),
                eu = v(function(a) {
                    a = fb(a)("canvas");
                    var c = n(a, "getContext");
                    if (!c) return null;
                    try {
                        var b = H(c, a)("2d");
                        b.font = "72px mmmmmmmmmmlli";
                        var d = b.measureText("mmmmmmmmmmlli").width;
                        return function(e) {
                            b.font = "72px " + e;
                            return b.measureText("mmmmmmmmmmlli").width === d
                        }
                    } catch (e) {
                        return null
                    }
                }),
                Fl = oa(String.prototype.repeat, "repeat"),
                hi = Fl ? function(a, c) {
                    return Fl.call(a, c)
                } : bq,
                bi = u(!0, function(a, c, b, d) {
                    b = c.length && (b - d.length) / c.length;
                    if (0 >= b) return d;
                    c = hi(c, b);
                    return a ? c + d : d + c
                }),
                Ye = [2277735313, 289559509],
                Ze = [1291169091,
                    658871167
                ],
                fu = B("p.cd", function(a) {
                    if (Bd(a) || Ve(a)) {
                        var c = Qa(a);
                        if (ca(c.C("jn"))) {
                            c.D("jn", !1);
                            var b = a.chrome || Ed(a) ? function() {} : /./;
                            a = Yt(a);
                            b.toString = function() {
                                c.D("jn", !0);
                                return "Yandex.Metrika counter is initialized"
                            };
                            a.log("%c%s", "color: inherit", b)
                        }
                    }
                }),
                gu = v(function(a) {
                    a = n(a, "navigator.plugins");
                    return !!(a && Sa(a) && $a(w(U("name"), gb(/Chrome PDF Viewer/)), a))
                }),
                Rb = sa(function(a, c) {
                    return J(c).C(a, null)
                }),
                Zp = {
                    "*": "+",
                    "-": "/",
                    lj: "=",
                    "+": "*",
                    "/": "-",
                    "=": "_"
                },
                hu = v(function(a) {
                    return O(n(a, "yandex.getSiteUid")) ?
                        a.yandex.getSiteUid() : null
                }),
                iu = v(u("panoramaId", ze)),
                ju = v(function(a) {
                    return ze("pubcid.org", a) || ze("_pubCommonId", a)
                }),
                ku = v(u("_sharedid", ze)),
                lu = v(function(a, c) {
                    if (c.Va) return null;
                    var b = Pc(a, "").C("_ga");
                    return b && md(ie(b))
                }, w(bb, L)),
                Vp = [
                    ["domainLookupEnd", "domainLookupStart"],
                    ["connectEnd", "connectStart"],
                    ["responseStart", "requestStart"],
                    ["responseEnd", "responseStart"],
                    ["fetchStart", "navigationStart"],
                    ["redirectEnd", "redirectStart"],
                    [function(a, c) {
                        return n(c, "redirectCount") || n(a, "navigation.redirectCount")
                    }],
                    ["domInteractive", "domLoading"],
                    ["domContentLoadedEventEnd", "domContentLoadedEventStart"],
                    ["domComplete", "navigationStart"],
                    ["loadEventStart", "navigationStart"],
                    ["loadEventEnd", "loadEventStart"],
                    ["domContentLoadedEventStart", "navigationStart"]
                ],
                yb, Up = [
                    ["domainLookupEnd", "domainLookupStart"],
                    ["connectEnd", "connectStart"],
                    ["responseStart", "requestStart"],
                    ["responseEnd", "responseStart"],
                    ["fetchStart"],
                    ["redirectEnd", "redirectStart"],
                    ["redirectCount"],
                    ["domInteractive", "responseEnd"],
                    ["domContentLoadedEventEnd",
                        "domContentLoadedEventStart"
                    ],
                    ["domComplete"],
                    ["loadEventStart"],
                    ["loadEventEnd", "loadEventStart"],
                    ["domContentLoadedEventStart"]
                ],
                Ki = (yb = {}, yb.responseEnd = 1, yb.domInteractive = 1, yb.domContentLoadedEventStart = 1, yb.domContentLoadedEventEnd = 1, yb.domComplete = 1, yb.loadEventStart = 1, yb.loadEventEnd = 1, yb.unloadEventStart = 1, yb.unloadEventEnd = 1, yb.secureConnectionStart = 1, yb),
                Xp = v(Id),
                Rp = v(Jc),
                Sp = v(function(a) {
                    var c = n(a, "webkitRequestFileSystem");
                    if (O(c) && !Bd(a)) return (new K(H(c, a, 0, 0))).then(function() {
                        var d =
                            n(a, "navigator.storage") || {};
                        return d.estimate ? d.estimate() : {}
                    }).then(function(d) {
                        return (d = d.quota) && 12E7 > d ? !0 : !1
                    })["catch"](u(!0, Q));
                    if (Ud(a)) return c = n(a, "navigator.serviceWorker"), K.resolve(X(c));
                    c = n(a, "openDatabase");
                    if (Ed(a) && O(c)) {
                        var b = !1;
                        try {
                            c(null, null, null, null)
                        } catch (d) {
                            b = !0
                        }
                        return K.resolve(b)
                    }
                    return K.resolve(!n(a, "indexedDB") && (n(a, "PointerEvent") || n(a, "MSPointerEvent")))
                }),
                mu = /(\?|&)turbo_uid=([\w\d]+)($|&)/,
                nu = v(function(a, c) {
                    var b = Uc(a),
                        d = S(a).search.match(mu);
                    return d && 2 <= d.length ?
                        (d = d[2], c.Va || b.D("turbo_uid", d), d) : (b = b.C("turbo_uid")) ? b : ""
                }),
                Cp = [
                    [
                        ["'(-$&$&$'", 30102, 0],
                        ["'(-$&$&$'", 29009, 0]
                    ],
                    [
                        ["oWdZ[nc[jh_YW$Yec", 30103, 1],
                        ["oWdZ[nc[jh_YW$Yec", 29010, 1]
                    ]
                ],
                Dp = [
                    [
                        ["oWdZ[nc[jh_YW$Yec", 30103, 1]
                    ],
                    [
                        ["oWdZ[nc[jh_YW$Yec", 29010, 1]
                    ]
                ],
                Ji = {
                    J: {
                        t: 'UV|L7,!"T[rwe&D_>ZIb\\aW#98Y.PC6k'
                    }
                },
                zp = {
                    xe: 60,
                    error: 15
                },
                yp = {
                    xe: 5,
                    error: 1
                },
                Hi = {
                    id: 42822899,
                    ca: "0"
                },
                ou = B("pa.plgn", function(a, c) {
                    var b = oe(a, c);
                    b && b.$.F(["pluginInfo"], E(a, "c.plgn", function() {
                        var d = J(a);
                        d.D("cmc", d.C("cmc", 0) + 1);
                        return sk(c)
                    }))
                }),
                Sb, pb, en = (Sb = {}, Sb.am = "com.am", Sb.tr = "com.tr", Sb.ge = "com.ge", Sb.il = "co.il", Sb["\u0440\u0444"] = "ru", Sb["xn--p1ai"] = "ru", Sb["\u0431\u0435\u043b"] = "by", Sb["xn--90ais"] = "by", Sb),
                Gl = {
                    "mc.edadeal.ru": /^([^/]+\.)?edadeal\.ru$/,
                    "mc.yandexsport.ru": /^([^/]+\.)?yandexsport\.ru$/,
                    "mc.kinopoisk.ru": /^([^/]+\.)?kinopoisk\.ru$/
                },
                fn = (pb = {}, pb.ka = "ge", pb.ro = "md", pb.tg = "tj", pb.tk = "tm", pb.et = "ee", pb.hy = "com.am", pb.he = "co.li", pb.ky = "kg", pb.be = "by", pb.tr = "com.tr", pb.kk = "kz", pb),
                Hl = /^https?:\/\//,
                pu = {
                    1882689622: 1,
                    2318205080: 1,
                    3115871109: 1,
                    3604875100: 1,
                    339366994: 1,
                    2890452365: 1,
                    849340123: 1,
                    173872646: 1,
                    2343947156: 1,
                    655012937: 1,
                    3724710748: 1,
                    3364370932: 1,
                    1996539654: 1,
                    2065498185: 1,
                    823651274: 1,
                    12282461: 1,
                    1555719328: 1,
                    1417229093: 1,
                    138396985: 1,
                    3015043526: 1
                },
                Il = v(function() {
                    return N(function(a, c) {
                        var b = gc(c + "/tag.js");
                        a[b] = 1;
                        return a
                    }, {}, ["mc.yandex.ru/metrika", "mc.yandex.com/metrika", "cdn.jsdelivr.net/npm/yandex-metrica-watch"])
                }),
                qu = v(function(a) {
                    a = Dd(a);
                    if (!a || !O(a.getEntriesByType)) return null;
                    a = a.getEntriesByType("resource");
                    var c = Il();
                    return (a = tb(function(b) {
                        b = b.name.replace(Hl, "").split("?")[0];
                        b = gc(b);
                        return c[b]
                    }, a)) ? sb(a.transferSize) : null
                }),
                Mp = "ar:1:pv:1:v:" + Ga.bc + ":vf:" + $c.version,
                Np = Ga.Sa + "//" + jc + "/watch/" + Ga.ng,
                Jl = {},
                ru = B("exps.int", function(a, c) {
                    var b;
                    return b = {}, b.experiments = function(d, e, f) {
                        var g, h;
                        void 0 === e && (e = D);
                        if (d && 0 < d.length) {
                            var k = wa(a, "e", c),
                                l = Ld(c).url;
                            d = k({
                                K: Ja((g = {}, g.ex = 1, g.ar = 1, g)),
                                J: (h = {}, h["page-url"] = l || S(a).href, h.exp = d, h)
                            }, c);
                            return Wc(a, "exps.s", d, e, f)
                        }
                    }, b
                }),
                tf = [],
                su = B("p.fh", function(a,
                    c) {
                    var b, d;
                    void 0 === c && (c = !0);
                    var e = Qa(a),
                        f = ja(a),
                        g = e.C("wasSynced"),
                        h = {
                            id: 3,
                            ca: "0"
                        };
                    return c && g && g.time + 864E5 > f(Z) ? K.resolve(g) : wa(a, "f", h)({
                        K: Ja((b = {}, b.pv = 1, b)),
                        J: (d = {}, d["page-url"] = S(a).href, d["page-ref"] = a.document.referrer, d)
                    }, h).then(function(k) {
                        var l;
                        k = (l = {}, l.time = f(Z), l.params = n(k, "settings"), l.bkParams = n(k, "userData"), l);
                        e.D("wasSynced", k);
                        return k
                    })["catch"](E(a, "f.h"))
                }),
                tu = sa(function(a, c) {
                    0 === parseFloat(n(c, "settings.c_recp")) && (a.Td.D("ymoo" + a.ra, a.cg(qb)), a.nd && a.nd.destruct && a.nd.destruct())
                }),
                yf = w(U("settings.pcs"), Ba("1")),
                Kl = jc.split("."),
                uu = Kl.pop(),
                Ll = G(".", Kl),
                dn = v(function(a) {
                    a = S(a).hostname.split(".");
                    return a[a.length - 1]
                }),
                Dh = v(function(a) {
                    return -1 !== S(a).hostname.search(/(?:^|\.)(?:ya|yandex|beru|kinopoisk|edadeal)\.(?:\w+|com?\.\w+)$/)
                }),
                vu = /^(.*\.)?((yandex(-team)?)\.(com?\.)?[a-z]+|(auto|kinopoisk|beru|bringly)\.ru|ya\.(ru|cc)|yadi\.sk|yastatic\.net|.*\.yandex|turbopages\.org|turbo\.site|diplodoc\.(com|tech)|datalens\.tech)$/,
                ne = v(function(a) {
                    a = S(a).hostname;
                    var c = !1;
                    a && (c = -1 !== a.search(vu));
                    return c
                }),
                wu = /^(.*\.)?((yandex(-team)?)\.(com?\.)?[a-z]+|(auto|kinopoisk|beru|bringly)\.ru|ya\.(ru|cc)|yadi\.sk|.*\.yandex|turbopages\.org|turbo\.site)$/,
                Fp = v(function(a) {
                    a = S(a).hostname;
                    var c = !1;
                    a && (c = -1 !== a.search(wu));
                    return c
                }),
                Ml = Ga.Sa + "//" + jc + "/metrika",
                se = Ml + "/metrika_match.html",
                cf, Jp = (cf = {}, cf.s = "p", cf["8"] = "i", cf),
                Gp = mb("csp", function(a, c) {
                    return wa(a, "s", c)({}, ["https://ymetrica1.com/watch/3/1"])
                }),
                gh = "et w v z i u vf".split(" "),
                Nl = Sd("wv"),
                xu = Sd("pub"),
                wi = function() {
                    function a(c,
                        b) {
                        this.l = c;
                        this.type = b
                    }
                    a.isEnabled = function(c) {
                        return !!c.JSON
                    };
                    a.prototype.Ha = function(c) {
                        return Hf(Ab(this.l, c))
                    };
                    a.prototype.vb = function(c) {
                        var b = c.data;
                        "string" !== typeof b && (b = Ab(this.l, c.data));
                        return b
                    };
                    a.prototype.mb = function(c) {
                        return encodeURIComponent(c).length
                    };
                    a.prototype.se = function(c, b) {
                        for (var d = Math.ceil(c.length / b), e = [], f = 0; f < b; f += 1) e.push(c.slice(f * d, d * (f + 1)));
                        return e
                    };
                    return a
                }(),
                tp = v(function(a) {
                    function c(f, g, h, k) {
                        d[0] = g;
                        h[k] = e[3];
                        h[k + 1] = e[2];
                        h[k + 2] = e[1];
                        h[k + 3] = e[0]
                    }

                    function b(f,
                        g, h, k) {
                        d[0] = g;
                        h[k] = e[0];
                        h[k + 1] = e[1];
                        h[k + 2] = e[2];
                        h[k + 3] = e[3]
                    }
                    if ("undefined" === typeof a.Float32Array || "undefined" === typeof a.Uint8Array) return up;
                    var d = new Float32Array([-0]),
                        e = new Uint8Array(d.buffer);
                    return 128 === e[3] ? b : c
                }),
                pp = Fi(!1),
                op = Fi(!0),
                ba, Kc, Ol = (ba = {}, ba.mousemove = 0, ba.mouseup = 1, ba.mousedown = 2, ba.click = 3, ba.scroll = 4, ba.windowblur = 5, ba.windowfocus = 6, ba.focus = 7, ba.blur = 8, ba.eof = 9, ba.selection = 10, ba.change = 11, ba.input = 12, ba.touchmove = 13, ba.touchstart = 14, ba.touchend = 15, ba.touchcancel = 16, ba.touchforcechange =
                    17, ba.zoom = 18, ba.resize = 19, ba.keystroke = 20, ba.deviceRotation = 21, ba.fatalError = 22, ba.hashchange = 23, ba.stylechange = 24, ba.articleInfo = 25, ba.publishersHeader = 26, ba.pageData = 27, ba.mutationAdd = 28, ba.mutationRemove = 29, ba.mutationTextChange = 30, ba.mutationAttributesChange = 31, ba),
                Pl = (Kc = {}, Kc.page = 0, Kc.event = 1, Kc.mutation = 2, Kc.publishers = 3, Kc.activity = 4, Kc),
                vi = function() {
                    function a(c, b) {
                        var d, e, f = this;
                        this.isSync = !1;
                        this.Gb = [];
                        this.Wg = (d = {}, d.ad = "mutationAdd", d.re = "mutationRemove", d.tc = "mutationTextChange",
                            d.ac = "mutationAttributesChange", d.page = "pageData", d);
                        this.Rg = (e = {}, e.ad = "addedNodesMutation", e.re = "removedNodesMutation", e.tc = "textChangeMutation", e.ac = "attributesChangeMutation", e.touchmove = "touchEvent", e.touchstart = "touchEvent", e.touchend = "touchEvent", e.touchforcechange = "touchEvent", e.touchcancel = "touchEvent", e.resize = "resizeEvent", e.scroll = "scrollEvent", e.change = "changeEvent", e.mousemove = "mouseEvent", e.mousedown = "mouseEvent", e.mouseup = "mouseEvent", e.click = "mouseEvent", e.focus = "focusEvent", e.blur =
                            "focusEvent", e.deviceRotation = "deviceRotationEvent", e.zoom = "zoomEvent", e.keystroke = "keystrokesEvent", e.selection = "selectionEvent", e.stylechange = "styleChangeEvent", e.fatalError = "fatalErrorEvent", e.pageData = "page", e);
                        this.rh = function(g) {
                            var h = g.type;
                            return g.event || "publishersHeader" !== h && "articleInfo" !== h ? {
                                type: Pl[h],
                                event: Ol[f.Wg[g.event] || g.event]
                            } : {
                                type: Pl.publishers,
                                event: Ol[h]
                            }
                        };
                        this.wf = function(g) {
                            var h = !X(g.partNum),
                                k = f.rh(g);
                            k = {
                                stamp: g.stamp,
                                type: k.type,
                                event: k.event,
                                frameId: g.frameId,
                                chunk: h ?
                                    g.data : void 0,
                                partNum: g.partNum,
                                end: g.end
                            };
                            !h && g.data && (h = f.Rg[g.event] || g.event || g.type) && (k[h] = g.data);
                            return k
                        };
                        this.l = c;
                        this.type = b
                    }
                    a.prototype.Ha = function(c, b) {
                        var d = this;
                        void 0 === b && (b = !1);
                        var e = ec(c, this.wf),
                            f = this.isSync || b ? Infinity : 10;
                        e = nd(this.l, e, f);
                        var g = [e];
                        this.Gb.push(e);
                        return e(Tg(function(h) {
                            h = yi(d.l, ep, {
                                Ai: h
                            });
                            h = nd(d.l, h, f, vg);
                            g.push(h);
                            d.Gb.push(h);
                            return h
                        }))(Tg(function(h) {
                            h = xi(d.l, h.slice(-4));
                            h = nd(d.l, h, f, vg);
                            g.push(h);
                            d.Gb.push(h);
                            return h
                        }))(pl(function(h) {
                            h = h[h.length - 1];
                            x(function(k) {
                                k = Je(d.l)(k, d.Gb);
                                d.Gb.splice(k, 1)
                            }, g);
                            return h
                        }))
                    };
                    a.prototype.vb = function(c) {
                        return yi(this.l, zi, this.wf(c))(wg(D))
                    };
                    a.prototype.mb = function(c) {
                        return c[0]
                    };
                    a.prototype.se = function(c, b) {
                        for (var d = xi(this.l, c)(wg(D)), e = Math.ceil(d.length / b), f = [], g = 0; g < b; g += 1) f.push(d.slice(g * e, e * (g + 1)));
                        return f
                    };
                    a.isEnabled = function(c) {
                        var b = Te(c),
                            d = !1;
                        try {
                            d = (d = 2 === (new c.Blob(["\u00e4"])).size) && 2 === (new c.Blob([new c.Uint8Array([1, 2])])).size
                        } catch (e) {}
                        return !b && d && !(!c.Uint8Array || !n(c, "Uint8Array.prototype.slice"))
                    };
                    return a
                }(),
                Ql = "resize scroll mousemove mousedown click windowfocus keydown orientationchange change focus touchmove touchstart".split(" "),
                yu = "id pageTitle stamp chars authors updateDate publicationDate pageUrlCanonical topics rubric".split(" "),
                zu = function() {
                    function a(c, b, d, e, f) {
                        var g = this;
                        this.Ec = !1;
                        this.meta = {};
                        this.scroll = {
                            x: 0,
                            y: 0
                        };
                        this.involvedTime = this.tf = 0;
                        this.Ud = this.Bf = "";
                        this.fa = [];
                        this.pe = this.Ka = 0;
                        this.zb = {
                            h: 0,
                            w: 0
                        };
                        this.buffer = [];
                        this.og = yu;
                        this.flush = function() {
                            g.pe = T(g.l, g.flush,
                                2500);
                            var h = g.Cd();
                            if (g.buffer.length || h) {
                                var k = We(g.buffer);
                                h && k.push(h);
                                g.Bf = g.Ud;
                                g.ma.Ha(k)(Ra(E(g.l, "p.b.st"), function(l) {
                                    l && g.Vb(l)
                                }))
                            }
                        };
                        this.Vb = e;
                        this.ma = d;
                        this.$b = H(this.$b, this);
                        this.Cd = H(this.Cd, this);
                        this.flush = H(this.flush, this);
                        this.l = c;
                        this.ra = f;
                        this.Sc = b;
                        this.Pd = "pai" + b.id;
                        this.Kb();
                        this.Te = fa(this.l);
                        this.time = ja(this.l);
                        this.hg();
                        this.Fd = J(this.l);
                        this.Fe = null
                    }
                    a.prototype.start = function() {
                        this.pe = T(this.l, this.flush, 2500);
                        if (!this.Ec) {
                            this.Ki();
                            var c = this.Fd.C(this.Pd, []),
                                b = !c.length;
                            c.push(H(this.Xh, this));
                            this.Fd.Ia(this.Pd, c);
                            b && this.Kf();
                            this.Fe = fa(this.l).F(this.l, ["click"], H(this.Ii, this));
                            this.$b({
                                type: "page",
                                target: this.l
                            })
                        }
                    };
                    a.prototype.stop = function() {
                        this.Yi();
                        this.Ec = !0;
                        this.flush();
                        ka(this.l, this.pe)
                    };
                    a.prototype.qf = function(c) {
                        return oc("html", this.l, c) !== this.l.document.documentElement
                    };
                    a.prototype.Kf = function() {
                        var c = this;
                        E(this.l, "p.ic" + this.Sc.id, function() {
                            if (!c.Ec) {
                                var b = c.Fd.C(c.Pd),
                                    d = c.Sc.bh();
                                x(function(e) {
                                        var f = A(function(g) {
                                            return z({}, g)
                                        }, d);
                                        O(e) && e(f)
                                    },
                                    b);
                                c.Ka = T(c.l, H(c.Kf, c), 1E3, "p")
                            }
                        })()
                    };
                    a.prototype.Xh = function(c) {
                        this.Ec || (this.Zi(c), this.$i(), this.Gg())
                    };
                    a.prototype.Lg = function(c, b) {
                        return (c.me || 0) <= (b.me || 0) ? b : c
                    };
                    a.prototype.Ii = function(c) {
                        if (this.fa.length) {
                            c = qj(c);
                            var b = S(this.l).hostname,
                                d;
                            if (d = c) d = He(c.hostname) === He(b);
                            d && (c = N(this.Lg, this.fa[0], this.fa).id, b = Cc(this.l), cd(this.l, this.ra.split(":")[0]).D("pai", c + "-" + b))
                        }
                    };
                    a.prototype.$b = function(c) {
                        var b = this;
                        E(this.l, "p.ec." + this.Sc.id, function() {
                            var d, e;
                            try {
                                var f = c.type;
                                var g = c.target
                            } catch (p) {
                                return
                            }
                            var h =
                                "page" === f;
                            if ("scroll" === f || h) {
                                var k = [b.l, b.l.document, b.l.document.documentElement, Hc(b.l)];
                                I(g, k) && b.Kb()
                            }("resize" === f || h) && b.hg();
                            f = b.time(Z);
                            var l = Math.min(f - b.tf, 5E3);
                            b.involvedTime += Math.round(l);
                            b.tf = f;
                            if (b.meta && b.scroll && b.zb) {
                                var m = b.zb.h * b.zb.w;
                                b.fa = A(function(p) {
                                    var q = z({}, p),
                                        r = b.meta[q.id],
                                        t = Nc(p.Fb);
                                    if (!r || b.qf(q.element) || !t) return q;
                                    p = b.l.Math;
                                    r = p.max((b.scroll.y + b.zb.h - r.y) / r.height, 0);
                                    var y = t.height * t.width;
                                    t = Bh(b.l, t, b.zb);
                                    q.me = t / m;
                                    q.visibility = t / y;
                                    if (.9 <= q.visibility || .1 <= q.me) q.involvedTime +=
                                        l;
                                    q.maxScrolled = p.round(1E4 * r) / 1E4;
                                    return q
                                }, b.fa);
                                ub(b.l, (d = {}, d.name = "publishers", d.counterKey = b.ra, d.data = (e = {}, e.involvedTime = b.involvedTime, e.contentItems = A(function(p) {
                                    var q;
                                    return z((q = {}, q.contentElement = p.Fb, q), p)
                                }, b.fa), e), d))
                            }
                        })()
                    };
                    a.prototype.Zi = function(c) {
                        var b = A(function(d) {
                            return d.id
                        }, this.fa);
                        this.fa = this.fa.concat(ha(function(d) {
                            return !I(d.id, b)
                        }, c))
                    };
                    a.prototype.hg = function() {
                        var c = je(this.l) || Oc(this.l);
                        this.zb = {
                            w: c[0],
                            h: c[1]
                        }
                    };
                    a.prototype.$i = function() {
                        var c = this;
                        E(this.l, "p.um." +
                            this.Sc.id,
                            function() {
                                var b = [];
                                c.Kb();
                                c.meta = Bb(function(d, e) {
                                    var f;
                                    if (c.qf(e.element)) b.push(e), delete d[e.id];
                                    else {
                                        var g = (f = {}, f.id = e.id, f.involvedTime = Math.max(e.involvedTime, 0), f.maxScrolled = e.maxScrolled || 0, f.chars = e.update ? e.update("chars") || 0 : 0, f);
                                        e.Fb && (f = Nc(e.Fb)) && (g.x = Math.max(Math.round(f.left) + c.scroll.x, 0), g.y = Math.max(Math.round(f.top) + c.scroll.y, 0), g.width = Math.round(f.width), g.height = Math.round(f.height));
                                        d[e.id] = g
                                    }
                                    return d
                                }, {}, c.fa);
                                x(function(d) {
                                    d = Je(c.l)(d, c.fa);
                                    c.fa.splice(d,
                                        1)
                                }, b)
                            })()
                    };
                    a.prototype.Cd = function() {
                        var c, b, d = A(u(this.meta, n), ea(this.meta));
                        return d.length && (this.Ud = Ab(this.l, d), this.Bf !== this.Ud) ? (c = {}, c.type = "publishersHeader", c.data = (b = {}, b.articleMeta = d || [], b.involvedTime = this.involvedTime, b), c) : null
                    };
                    a.prototype.Gg = function() {
                        var c = this;
                        if (this.fa.length) {
                            var b = A(function(d) {
                                var e, f = N(function(g, h) {
                                    d[h] && (g[h] = d[h]);
                                    return g
                                }, {}, c.og);
                                d.Vf = !0;
                                return e = {}, e.type = "articleInfo", e.stamp = f.stamp, e.data = f, e
                            }, ha(function(d) {
                                return !d.Vf
                            }, this.fa));
                            b.length &&
                                (this.buffer = this.buffer.concat(b), Kb(this.l, this.ra, ["pdf", b]))
                        }
                    };
                    a.prototype.Ki = function() {
                        this.Te.F(this.l, Ql, this.$b)
                    };
                    a.prototype.Yi = function() {
                        this.Fe && this.Fe();
                        this.Te.yb(this.l, Ql, this.$b)
                    };
                    a.prototype.Kb = function() {
                        this.scroll = {
                            x: this.l.pageXOffset || n(this.l, "document.documentElement.scrollLeft") || 0,
                            y: this.l.pageYOffset || n(this.l, "document.documentElement.scrollLeft") || 0
                        }
                    };
                    return a
                }(),
                ce, hh = (ce = {}, ce[1] = 500, ce[2] = 500, ce[3] = 0, ce),
                Au = ["topics", "rubric", "authors"],
                ih = function() {
                    function a(c,
                        b) {
                        var d, e = this;
                        this.id = "a";
                        this.Kd = !1;
                        this.Hb = {};
                        this.ub = {
                            "schema.org": "Article NewsArticle Movie BlogPosting Review Recipe Answer".split(" "),
                            yf: ["article"]
                        };
                        this.De = (d = {}, d.Answer = 3, d.Review = 2, d);
                        this.We = v(function(f, g, h) {
                            var k;
                            Kb(e.l, e.ra, "pfi", (k = {}, k.field = f, k.itemField = g, k.value = h, k))
                        }, function(f, g, h) {
                            return "" + f + g + h
                        });
                        this.bj = function(f) {
                            Au.forEach(function(g) {
                                f[g] && (f[g] = f[g].reduce(function(h, k) {
                                    var l = k.name,
                                        m = k.position;
                                    if (!l) return e.We(g, "name", l), h;
                                    if ("string" === typeof m) {
                                        l = pe(m);
                                        if (null ===
                                            l || e.l.isNaN(l)) return e.We(g, "position", m), h;
                                        k.position = l
                                    }
                                    h.push(k);
                                    return h
                                }, []))
                            });
                            return f
                        };
                        this.Mg = v(function(f, g) {
                            var h;
                            Kb(e.l, e.ra, ["pcs", g], (h = {}, h.chars = g.chars, h.limit = hh[g.type], h))
                        });
                        this.l = c;
                        this.root = fc(c);
                        this.ra = b
                    }
                    a.prototype.Na = function(c) {
                        return c.element
                    };
                    a.prototype.cf = function(c, b) {
                        var d = this,
                            e;
                        E(this.l, "P.s." + b, function() {
                            e = d.Hb[b].call(d, c)
                        })();
                        return e
                    };
                    a.prototype.zi = function(c) {
                        var b = z({}, c);
                        this.Kd && !b.id && I(c.type, [3, 2]) && (c = G(", ", A(U("name"), b.authors || [])), b.pageTitle =
                            c + ": " + b.pageTitle);
                        b.pageTitle || (b.pageTitle = this.Bh(b.Fb));
                        b.pageUrlCanonical || (c = b.id, b.pageUrlCanonical = ("string" !== typeof c ? 0 : /^(https?:)\/\//.test(c)) ? b.id : this.zh());
                        b.id || (b.id = b.pageTitle || b.pageUrlCanonical);
                        return b
                    };
                    a.prototype.Ea = function(c) {
                        var b = this,
                            d = {},
                            e = this.Na(c);
                        if (!e) return null;
                        d.type = c.type;
                        x(function(g) {
                            d[g] = b.cf(c, g)
                        }, ea(this.Hb));
                        var f = ja(this.l);
                        d.stamp = f(ik);
                        d.element = c.element;
                        d.Fb = e;
                        d = this.bj(this.zi(d));
                        d.id = d.id ? gc(d.id) : 1;
                        d.update = function(g) {
                            return b.Na(c) ? b.cf(c,
                                g) : void 0
                        };
                        return d
                    };
                    a.prototype.Bh = function(c) {
                        for (var b = 1; 5 >= b; b += 1) {
                            var d = cb(dc("h" + b, c));
                            if (d) return d
                        }
                    };
                    a.prototype.zh = function() {
                        var c = dc('[rel="canonical"]', this.root);
                        if (c) return c.href
                    };
                    a.prototype.hf = function() {
                        return 1
                    };
                    a.prototype.vc = function() {
                        return []
                    };
                    a.prototype.bh = function() {
                        var c = this,
                            b = this.vc(),
                            d = 1;
                        return Bb(function(e, f) {
                            var g = c.Ea({
                                element: f,
                                type: c.hf(f)
                            }) || [];
                            R(g) || (g = [g]);
                            g = Bb(function(h, k) {
                                var l = h.values,
                                    m = h.kf;
                                k && k.chars > hh[k.type] && !I(k.id, m) ? (l.push(k), m.push(k.id)) : k &&
                                    k.chars <= hh[k.type] && c.Mg(k.id, k);
                                return {
                                    values: l,
                                    kf: m
                                }
                            }, {
                                values: [],
                                kf: A(U("id"), e)
                            }, g).values;
                            return e.concat(A(function(h) {
                                var k;
                                h = z((k = {
                                    index: d,
                                    Vf: !1
                                }, k.involvedTime = 0, k), h);
                                d += 1;
                                return h
                            }, g))
                        }, [], b)
                    };
                    return a
                }(),
                Rl = function(a) {
                    function c() {
                        var b, d = null !== a && a.apply(this, arguments) || this;
                        d.id = "j";
                        d.Kd = !0;
                        d.Qe = G(",", ['script[type="application/ld+json"]', 'script[type="application/json+ld"]', 'script[type="ld+json"]', 'script[type="json+ld"]']);
                        d.Hb = (b = {}, b.id = function(e) {
                            var f = e.data["@id"];
                            e = e.data.mainEntity ||
                                e.data.mainEntityOfPage;
                            !f && na(e) && (f = e["@id"]);
                            return f
                        }, b.chars = function(e) {
                            var f = e.data;
                            return ia(f.text) ? f.text.length : Mb(this.Na(e)).length
                        }, b.authors = function(e) {
                            e = e.data;
                            var f = [];
                            f = f.concat(this.uc(e, "author"));
                            f = f.concat(this.uc(e.mainEntity, "author"));
                            return f.concat(this.uc(e.mainEntityOfPage, "author"))
                        }, b.pageTitle = function(e) {
                            var f = e.data,
                                g = f.headline || "";
                            f.alternativeHeadline && (g += " " + f.alternativeHeadline);
                            "" === g && (f.name ? g = f.name : f.itemReviewed && (g = f.itemReviewed));
                            3 === e.type && na(f.parentItem) &&
                                (g = f.parentItem.text);
                            return g
                        }, b.updateDate = function(e) {
                            return e.data.dateModified || ""
                        }, b.publicationDate = function(e) {
                            return e.data.datePublished || ""
                        }, b.pageUrlCanonical = function(e) {
                            return e.data.url
                        }, b.topics = function(e) {
                            return this.uc(e.data, "about", ["name", "alternateName"])
                        }, b.rubric = function(e) {
                            var f = this,
                                g = this.Na(e);
                            e = va(A(function(h) {
                                h = zb(f.l, Mb(h));
                                if (na(h) || R(h)) {
                                    var k = f.df(h);
                                    if (k) return N(function(l, m) {
                                        return l ? l : na(m) && "BreadcrumbList" === m["@type"] ? m : l
                                    }, null, k);
                                    if ("BreadcrumbList" ===
                                        h["@type"]) return h
                                }
                                return null
                            }, [e.element].concat(jb(this.Qe, document.body === g ? document.documentElement : g))));
                            return e.length && (e = e[0].itemListElement, R(e)) ? va(A(function(h) {
                                return na(h) && h.item && na(h.item) && !f.l.isNaN(h.position) ? {
                                    name: h.item.name || h.name,
                                    position: h.position
                                } : null
                            }, e)) : []
                        }, b);
                        return d
                    }
                    Na(c, a);
                    c.prototype.uc = function(b, d, e) {
                        void 0 === e && (e = ["name"]);
                        if (!b || !b[d]) return [];
                        b = R(b[d]) ? b[d] : [b[d]];
                        b = va(A(function(f) {
                            return f ? "string" === typeof f ? f : N(function(g, h) {
                                    return g || "" + f[h]
                                }, "",
                                e) : null
                        }, b));
                        return A(function(f) {
                            var g;
                            return g = {}, g.name = f, g
                        }, b)
                    };
                    c.prototype.Na = function(b) {
                        var d = b.element,
                            e = b.data || {};
                        b = e["@id"];
                        var f = e.url;
                        e = null;
                        f && ia(f) && (e = this.Ve(f));
                        !e && b && ia(b) && (e = this.Ve(b));
                        e || (e = b = d.parentNode, !oc("head", this.l, d) && b && 0 !== Mb(b).length) || (e = this.l.document.body);
                        return e
                    };
                    c.prototype.Ve = function(b) {
                        try {
                            var d = Sc(this.l, b).hash;
                            if (d) {
                                var e = dc(d, this.l.document.body);
                                if (e) return e
                            }
                        } catch (f) {}
                        return null
                    };
                    c.prototype.$d = function(b) {
                        return this.De[b["@type"]] || 1
                    };
                    c.prototype.Ea =
                        function(b) {
                            var d = this,
                                e = b.element,
                                f = b.data;
                            if (!f && (f = zb(this.l, Mb(e)), !f || !/schema\.org/.test(f["@context"]) && !R(f))) return null;
                            var g = this.df(f);
                            if (g) return A(function(k) {
                                return na(k) && I(k["@type"], d.ub["schema.org"]) ? a.prototype.Ea.call(d, {
                                    element: e,
                                    data: k,
                                    type: d.$d(k)
                                }) : null
                            }, g);
                            b.data = f;
                            if ("QAPage" === b.data["@type"]) {
                                var h = b.data.mainEntity || b.data.mainEntityOfPage;
                                if (!h) return null
                            }
                            "Question" === b.data["@type"] && (h = b.data);
                            return h ? (b = wc(u(h, n), ["acceptedAnswer", "suggestedAnswer"]), A(function(k) {
                                var l;
                                if (!na(k) || !I(k["@type"], d.ub["schema.org"])) return null;
                                k = {
                                    element: e,
                                    type: d.$d(k),
                                    data: z((l = {}, l.parentItem = h, l), k)
                                };
                                return a.prototype.Ea.call(d, k)
                            }, b)) : I(b.data["@type"], this.ub["schema.org"]) ? a.prototype.Ea.call(this, z(b, {
                                type: this.$d(b.data)
                            })) : null
                        };
                    c.prototype.vc = function() {
                        return jb(this.Qe, this.root)
                    };
                    c.prototype.df = function(b) {
                        if (R(b)) return b;
                        if (b && R(b["@graph"])) return b["@graph"]
                    };
                    return c
                }(ih),
                jh = function(a) {
                    function c() {
                        var b, d = null !== a && a.apply(this, arguments) || this;
                        d.id = "s";
                        d.Kd = !0;
                        d.Xi = Fa("exec", new RegExp("schema.org\\/(" + G("|", ea(d.De)) + ")$"));
                        d.Hb = (b = {}, b.id = function(e) {
                                e = e.element;
                                var f = hb(this.l, e, "identifier");
                                return f ? cb(f) : (f = hb(this.l, e, "mainEntityOfPage")) && f.getAttribute("itemid") ? f.getAttribute("itemid") : null
                            }, b.chars = function(e) {
                                var f = 0;
                                e = e.element;
                                for (var g = ["articleBody", "reviewBody", "recipeInstructions", "description", "text"], h = 0; h < g.length; h += 1) {
                                    var k = hb(this.l, e, g[h]);
                                    if (k) {
                                        f = cb(k).length;
                                        break
                                    }
                                }
                                e = Mb(e);
                                0 === f && e && (f += e.length);
                                return f
                            }, b.topics = function(e) {
                                var f =
                                    this,
                                    g = Yd(this.l, e.element, "about");
                                return A(function(h) {
                                    var k = {
                                        name: cb(h)
                                    };
                                    if (g = hb(f.l, h, "name")) k.name = cb(g);
                                    return k
                                }, g)
                            }, b.rubric = function(e) {
                                var f = this;
                                (e = dc('[itemtype$="schema.org/BreadcrumbList"]', e.element)) || (e = dc('[itemtype$="schema.org/BreadcrumbList"]', this.root));
                                return e ? A(function(g) {
                                    return {
                                        name: cb(hb(f.l, g, "name")),
                                        position: cb(hb(f.l, g, "position"))
                                    }
                                }, Yd(this.l, e, "itemListElement")) : []
                            }, b.updateDate = function(e) {
                                return (e = hb(this.l, e.element, "dateModified")) ? Hk(e) : ""
                            }, b.publicationDate =
                            function(e) {
                                return (e = hb(this.l, e.element, "datePublished")) ? Hk(e) : ""
                            }, b.pageUrlCanonical = function(e) {
                                e = Yd(this.l, e.element, "url");
                                if (e.length) {
                                    var f = e[0];
                                    return f.href ? f.href : cb(e)
                                }
                                return null
                            }, b.pageTitle = function(e) {
                                var f = "",
                                    g = e.element,
                                    h = hb(this.l, g, "headline");
                                h && (f += cb(h));
                                (h = hb(this.l, g, "alternativeHeadline")) && (f += " " + cb(h));
                                "" === f && ((h = hb(this.l, g, "name")) || (h = hb(this.l, g, "itemReviewed")), h && (f += cb(h)));
                                3 === e.type && (e = oc('[itemtype$="schema.org/Question"]', this.l, g)) && (e = hb(this.l, e, "text")) &&
                                    (f += cb(e));
                                return f
                            }, b.authors = function(e) {
                                var f = this;
                                e = Yd(this.l, e.element, "author");
                                return A(function(g) {
                                    var h, k = (h = {}, h.name = "", h);
                                    /.+schema.org\/(Person|Organization)/.test(g.getAttribute("itemtype") || "") && (h = hb(f.l, g, "name")) && (k.name = cb(h));
                                    k.name || (k.name = g.getAttribute("content") || Mb(g) || g.getAttribute("href"));
                                    return k
                                }, e)
                            }, b);
                        return d
                    }
                    Na(c, a);
                    c.prototype.hf = function(b) {
                        b = b.getAttribute("itemtype") || "";
                        return (b = this.Xi(b)) ? this.De[b[1]] : 1
                    };
                    c.prototype.Ea = function(b) {
                        return b.element && Mb(b.element).length ?
                            a.prototype.Ea.call(this, b) : null
                    };
                    c.prototype.vc = function() {
                        var b = G(",", A(function(d) {
                            return '[itemtype$="schema.org/' + d + '"]'
                        }, this.ub["schema.org"]));
                        return jb(b, this.root)
                    };
                    return c
                }(ih),
                Sl = function(a) {
                    function c(b, d) {
                        var e, f = a.call(this, b, d) || this;
                        f.id = "o";
                        f.Hb = (e = {}, e.chars = function(g) {
                                g = this.Na(g);
                                return Mb(g).length
                            }, e.authors = function(g) {
                                return this.yd(g.data.author)
                            }, e.pageTitle = function(g) {
                                return this.zc(g.data.title) || ""
                            }, e.updateDate = function(g) {
                                return this.zc(g.data.modified_time)
                            }, e.publicationDate =
                            function(g) {
                                return this.zc(g.data.published_time)
                            }, e.pageUrlCanonical = function(g) {
                                return this.zc(g.data.url)
                            }, e.rubric = function(g) {
                                return this.yd(g.data.section)
                            }, e.topics = function(g) {
                                return this.yd(g.data.tag)
                            }, e);
                        f.Vg = new RegExp("^(og:)?((" + G("|", f.ub.yf) + "):)?");
                        return f
                    }
                    Na(c, a);
                    c.prototype.yd = function(b) {
                        var d;
                        return b ? R(b) ? A(function(e) {
                            var f;
                            return f = {}, f.name = e ? "" + e : null, f
                        }, b) : [(d = {}, d.name = b ? "" + b : null, d)] : []
                    };
                    c.prototype.zc = function(b) {
                        return R(b) ? b.length ? "" + b[0] : null : b ? "" + b : null
                    };
                    c.prototype.vc =
                        function() {
                            var b = jb('meta[property="og:type"]', this.l.document.body);
                            return [this.l.document.head].concat(b)
                        };
                    c.prototype.qh = function(b) {
                        var d = this,
                            e = b.element,
                            f = {},
                            g = this.Na(b);
                        e = jb("meta[property]", e === this.l.document.head ? e : g);
                        if (e.length) x(function(h) {
                            try {
                                if (h.parentNode === g || h.parentNode === d.l.document.head) {
                                    var k = h.getAttribute("property").replace(d.Vg, ""),
                                        l = cb(h);
                                    f[k] ? R(f[k]) ? f[k].push(l) : f[k] = [f[k], l] : f[k] = l
                                }
                            } catch (m) {
                                Rc(d.l, "og.ed", m)
                            }
                        }, e);
                        else return null;
                        return I(f.type, this.ub.yf) ? z(b, {
                            data: f
                        }) : null
                    };
                    c.prototype.Na = function(b) {
                        b = b.element;
                        var d = this.l.document;
                        return b === d.head ? d.body : b.parentNode
                    };
                    c.prototype.Ea = function(b) {
                        return (b = this.qh(b)) ? a.prototype.Ea.call(this, b) : null
                    };
                    return c
                }(ih),
                de = {};
            Rl && (de.json_ld = Rl);
            jh && (de.schema = jh, de.microdata = jh);
            Sl && (de.opengraph = Sl);
            var Bu = B("p.p", function(a, c) {
                    function b(m) {
                        var p = z({}, l);
                        p.ba.da = m;
                        return f(p, c)["catch"](E(a, "s.ww.p"))
                    }
                    var d, e = ui(a, "9", "8");
                    if (!Ea("querySelectorAll", a.document.querySelectorAll) || !e) return K.resolve();
                    var f =
                        wa(a, "p", c),
                        g = Ja(),
                        h = cd(a, c.id),
                        k = h.C("pai");
                    k && (h.pc("pai"), g.D("pai", k));
                    var l = {
                        J: (d = {}, d["wv-type"] = e.type, d),
                        K: g,
                        ba: {}
                    };
                    return pa(c, E(a, "ps.s", function(m) {
                        var p;
                        if (m = n(m, "settings.publisher.schema")) {
                            tk(c) && (m = "microdata");
                            var q = de[m];
                            if (q && e) {
                                var r = L(c);
                                q = new q(a, r);
                                q = new zu(a, q, e, b, r);
                                q.start();
                                Kb(a, r, "ps", (p = {}, p.schema = m, p));
                                return H(q.stop, q)
                            }
                        }
                    }))
                }),
                Cu = function() {
                    function a(c, b) {
                        this.type = "0";
                        this.l = c;
                        this.oh = b
                    }
                    a.prototype.Ha = function(c) {
                        return Hf(wc(H(this.vb, this), c))
                    };
                    a.prototype.vb = function(c,
                        b) {
                        var d = this,
                            e = [],
                            f = this.oh(this.l, b && b.type, c.type);
                        f && (e = wc(function(g) {
                            return g({
                                l: d.l,
                                oa: c
                            }) || []
                        }, f));
                        return e
                    };
                    a.prototype.mb = function(c) {
                        return c.length
                    };
                    a.prototype.se = function(c) {
                        return [c]
                    };
                    a.prototype.isEnabled = function() {
                        return !0
                    };
                    return a
                }(),
                Tl = function() {
                    function a(c, b, d) {
                        this.Re = 0;
                        this.ae = 1;
                        this.bd = 5E3;
                        this.l = c;
                        this.ma = b;
                        this.Vb = d
                    }
                    a.prototype.Vc = function() {
                        this.Re = T(this.l, w(H(this.flush, this), H(this.Vc, this)), this.bd, "b.f")
                    };
                    a.prototype.send = function(c, b) {
                        var d = this.Vb(c, b || [], this.ae);
                        this.ae += 1;
                        return d
                    };
                    a.prototype.push = function() {};
                    a.prototype.flush = function() {};
                    return a
                }(),
                uo = function(a) {
                    function c(b, d, e) {
                        b = a.call(this, b, d, e) || this;
                        b.buffer = [];
                        b.pg = 7500;
                        b.bd = 3E4;
                        b.Vc();
                        return b
                    }
                    Na(c, a);
                    c.prototype.push = function(b, d) {
                        var e = this.ma.vb(b, d);
                        ra(this.buffer, e);
                        this.ma.mb(this.buffer) > this.pg && this.flush()
                    };
                    c.prototype.flush = function() {
                        var b = this.buffer;
                        b.length && (this.send(b), this.buffer = [])
                    };
                    return c
                }(Tl),
                Jo = /opera mini/i,
                oi = ["phone", "email"],
                Ul = "first(-|\\.|_|\\s){0,2}name last(-|\\.|_|\\s){0,2}name zip postal address passport (bank|credit)(-|\\.|_|\\s){0,2}card card(-|\\.|_|\\s){0,2}number card(-|\\.|_|\\s){0,2}holder cvv card(-|\\.|_|\\s){0,2}exp card(-|\\.|_|\\s){0,2}name card.*month card.*year card.*month card.*year password birth(-|\\.|_|\\s){0,2}(day|date) second(-|\\.|_|\\s){0,2}name third(-|\\.|_|\\s){0,2}name patronymic middle(-|\\.|_|\\s){0,2}name birth(-|\\.|_|\\s){0,2}place house street city flat state contact.*".split(" "),
                Go = /^[\w\u0410-\u042f\u0430-\u044f]$/,
                Ho = [65, 90],
                Io = [97, 122],
                Eo = "color radio checkbox date datetime-local email month number password range search tel text time url week".split(" "),
                Co = new RegExp("(" + G("|", Ul) + ")", "i"),
                Bo = new RegExp("(" + G("|", oi) + ")", "i"),
                Ik = ["password", "passwd", "pswd"],
                Do = new RegExp("(" + G("|", Ul.concat("\u0438\u043c\u044f \u0444\u0430\u043c\u0438\u043b\u0438\u044f \u043e\u0442\u0447\u0435\u0441\u0442\u0432\u043e \u0438\u043d\u0434\u0435\u043a\u0441 \u0442\u0435\u043b\u0435\u0444\u043e\u043d \u0430\u0434\u0440\u0435\u0441 \u043f\u0430\u0441\u043f\u043e\u0440\u0442 \u043d\u043e\u043c\u0435\u0440(-|\\.|_|\\s){0,2}\u043a\u0430\u0440\u0442\u044b \u0434\u0430\u0442\u0430(-|\\.|_|\\s){0,2}\u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f \u0434\u043e\u043c \u0443\u043b\u0438\u0446\u0430 \u043a\u0432\u0430\u0440\u0442\u0438\u0440\u0430 \u0433\u043e\u0440\u043e\u0434 \u043e\u0431\u043b\u0430\u0441\u0442\u044c".split(" "))) +
                    ")", "i"),
                Ya = "metrikaId_" + Math.random(),
                zc = {
                    counter: 0
                },
                As = v(function() {
                    var a;
                    return a = {}, a.A = 1, a.ABBR = 2, a.ACRONYM = 3, a.ADDRESS = 4, a.APPLET = 5, a.AREA = 6, a.B = 7, a.BASE = 8, a.BASEFONT = 9, a.BDO = 10, a.BIG = 11, a.BLOCKQUOTE = 12, a.BODY = 13, a.BR = 14, a.BUTTON = 15, a.CAPTION = 16, a.CENTER = 17, a.CITE = 18, a.CODE = 19, a.COL = 20, a.COLGROUP = 21, a.DD = 22, a.DEL = 23, a.DFN = 24, a.DIR = 25, a.DIV = 26, a.DL = 27, a.DT = 28, a.EM = 29, a.FIELDSET = 30, a.FONT = 31, a.FORM = 32, a.FRAME = 33, a.FRAMESET = 34, a.H1 = 35, a.H2 = 36, a.H3 = 37, a.H4 = 38, a.H5 = 39, a.H6 = 40, a.HEAD = 41, a.HR = 42, a.HTML =
                        43, a.I = 44, a.IFRAME = 45, a.IMG = 46, a.INPUT = 47, a.INS = 48, a.ISINDEX = 49, a.KBD = 50, a.LABEL = 51, a.LEGEND = 52, a.LI = 53, a.LINK = 54, a.MAP = 55, a.MENU = 56, a.META = 57, a.NOFRAMES = 58, a.NOSCRIPT = 59, a.OBJECT = 60, a.OL = 61, a.OPTGROUP = 62, a.OPTION = 63, a.P = 64, a.PARAM = 65, a.PRE = 66, a.Q = 67, a.S = 68, a.SAMP = 69, a.SCRIPT = 70, a.SELECT = 71, a.SMALL = 72, a.SPAN = 73, a.STRIKE = 74, a.STRONG = 75, a.STYLE = 76, a.SUB = 77, a.SUP = 78, a.TABLE = 79, a.TBODY = 80, a.TD = 81, a.TEXTAREA = 82, a.TFOOT = 83, a.TH = 84, a.THEAD = 85, a.TITLE = 86, a.TR = 87, a.TT = 88, a.U = 89, a.UL = 90, a.VAR = 91, a.NOINDEX =
                        100, a
                }),
                xs = [17, 18, 38, 32, 39, 15, 11, 7, 1],
                Du = function() {
                    var a = "first(-|\\.|_|\\s){0,2}name last(-|\\.|_|\\s){0,2}name zip postal phone address passport (bank|credit)(-|\\.|_|\\s){0,2}card card(-|\\.|_|\\s){0,2}number card(-|\\.|_|\\s){0,2}holder cvv card(-|\\.|_|\\s){0,2}exp card(-|\\.|_|\\s){0,2}name card.*month card.*year card.*month card.*year password email birth(-|\\.|_|\\s){0,2}(day|date) second(-|\\.|_|\\s){0,2}name third(-|\\.|_|\\s){0,2}name patronymic middle(-|\\.|_|\\s){0,2}name birth(-|\\.|_|\\s){0,2}place house street city flat state".split(" ");
                    return {
                        uj: new RegExp("(" + G("|", a) + ")", "i"),
                        Dj: new RegExp("(" + G("|", a.concat("\u0438\u043c\u044f;\u0444\u0430\u043c\u0438\u043b\u0438\u044f;\u043e\u0442\u0447\u0435\u0441\u0442\u0432\u043e;\u0438\u043d\u0434\u0435\u043a\u0441;\u0442\u0435\u043b\u0435\u0444\u043e\u043d;\u0430\u0434\u0440\u0435\u0441;\u043f\u0430\u0441\u043f\u043e\u0440\u0442;\u041d\u043e\u043c\u0435\u0440(-|\\.|_|\\s){0,2}\u043a\u0430\u0440\u0442\u044b;\u0434\u0430\u0442\u0430(-|\\.|_|\\s){0,2} \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f;\u0434\u043e\u043c;\u0443\u043b\u0438\u0446\u0430;\u043a\u0432\u0430\u0440\u0442\u0438\u0440\u0430;\u0433\u043e\u0440\u043e\u0434;\u043e\u0431\u043b\u0430\u0441\u0442\u044c".split(";"))) +
                            ")", "i"),
                        sj: /ym-record-keys/i,
                        ji: "\u2022",
                        Cj: 88
                    }
                }(),
                Nk = Wb(u(Du.ji, Q)),
                wd = !0,
                Mg = "",
                Ng = !1,
                Og = !0,
                Pg = !1,
                zo = sa(function(a, c) {
                    var b = C([a, "efv." + c.event], E);
                    c.O = A(w(Q, b), c.O);
                    return c
                }),
                Vl = v(function(a) {
                    var c = [],
                        b = [],
                        d = [];
                    a.document.attachEvent && !a.opera && (c.push(Nf), b.push(Ds), b.push(Es));
                    a.document.addEventListener ? c.push(Lk) : (b.push(Kk), d.push(Lk));
                    return yo(a, [{
                            target: a,
                            type: "window",
                            event: "beforeunload",
                            O: [D]
                        }, {
                            target: a,
                            type: "window",
                            event: "unload",
                            O: [D]
                        }, {
                            event: "click",
                            O: [$e]
                        }, {
                            event: "dblclick",
                            O: [$e]
                        },
                        {
                            event: "mousedown",
                            O: [$e]
                        }, {
                            event: "mouseup",
                            O: [Gs]
                        }, {
                            event: "keydown",
                            O: [Hs]
                        }, {
                            event: "keypress",
                            O: [Is]
                        }, {
                            event: "copy",
                            O: [Pk]
                        }, {
                            event: "blur",
                            O: c
                        }, {
                            event: "focusin",
                            O: b
                        }, {
                            event: "focusout",
                            O: d
                        }
                    ].concat(!a.document.attachEvent || a.opera ? [{
                        target: a,
                        type: "window",
                        event: "focus",
                        O: [mi]
                    }, {
                        target: a,
                        type: "window",
                        event: "blur",
                        O: [Nf]
                    }] : []).concat(a.document.addEventListener ? [{
                        event: "focus",
                        O: [Kk]
                    }, {
                        event: "change",
                        O: [Mk]
                    }, {
                        event: "submit",
                        O: [Rk]
                    }] : [{
                        type: "formInput",
                        event: "change",
                        O: [Mk]
                    }, {
                        type: "form",
                        event: "submit",
                        O: [Rk]
                    }]))
                }),
                wo = v(function(a) {
                    return Hc(a) ? [{
                        target: a,
                        type: "document",
                        event: "mouseleave",
                        O: [Js]
                    }] : []
                }),
                Eu = ["submit", "beforeunload", "unload"],
                Fu = v(function(a, c) {
                    var b = c(a);
                    return N(function(d, e) {
                        d[e.type + ":" + e.event] = e.O;
                        return d
                    }, {}, b)
                }),
                Gu = u(Vl, function(a, c, b, d) {
                    return Fu(c, a)[b + ":" + d] || []
                }),
                xo = /^\s*function submit\(\)/,
                Hu = B("fw.p", function(a, c) {
                    var b;
                    if (!(b = c.Sg || !c.Ab)) {
                        var d = J(a),
                            e = !1;
                        b = d.C("hitParam", {});
                        var f = L(c);
                        b[f] && (d = d.C("counters", {}), e = he(c.ca) && !d[f]);
                        b[f] = 1;
                        b = e
                    }
                    if (b) return K.resolve(D);
                    b = new Cu(a, Gu);
                    return to(a, c, b, Vl, Eu)
                }),
                kh, Wl = (kh = function(a) {
                    function c(b, d, e, f) {
                        void 0 === f && (f = 0);
                        d = a.call(this, b, d, e) || this;
                        d.Ae = 0;
                        d.Db = 0;
                        d.ze = 0;
                        d.buffer = [];
                        d.bd = 2E3;
                        d.$ = ud(b);
                        d.Vc();
                        d.ze = f;
                        return d
                    }
                    Na(c, a);
                    c.prototype.af = function(b) {
                        return va(this.$.R("ag", b))
                    };
                    c.prototype.$e = function(b, d) {
                        var e = this;
                        b(Ra(E(this.l, "wv2.b.st"), function(f) {
                            e.send(f, d)
                        }))
                    };
                    c.prototype.Ji = function(b, d) {
                        var e = this;
                        ka(this.l, this.Re);
                        var f = Math.ceil(this.ma.mb(d) / 63E4),
                            g = this.ma.se(d, f);
                        x(function(h, k) {
                            var l, m = z({},
                                b, (l = {}, l.data = h, l.partNum = k + 1, l.end = k + 1 === f, l.partsTotal = g.length, l));
                            l = e.ma.Ha([m], !1);
                            e.$e(l, [m])
                        }, g);
                        this.Vc()
                    };
                    c.prototype.send = function(b, d) {
                        var e = this;
                        this.$.R("se", d);
                        return a.prototype.send.call(this, b, d).then(Q, function() {
                            e.$.R("see", d)
                        })
                    };
                    c.bf = function(b, d, e, f, g) {
                        c.ed["" + b + d] || (this.ed[d] = new c(g, f, e, "m" === d ? 31457280 : 0));
                        return this.ed[d]
                    };
                    c.prototype.Vh = function() {
                        return this.ze && this.Ae >= this.ze
                    };
                    c.prototype.push = function(b) {
                        var d = this;
                        if (!this.Vh()) {
                            this.$.R("p", b);
                            var e = this.ma.vb(b),
                                f = this.ma.mb(e);
                            7E5 < f ? this.Ji(b, e) : (e = this.af(this.buffer.concat([b])), e = Bb(function(g, h) {
                                return g + d.ma.mb(d.ma.vb(h))
                            }, 0, e), this.Db + e + f >= 7E5 * .7 && this.flush(), this.buffer.push(b), this.Db += f)
                        }
                    };
                    c.prototype.F = function(b, d) {
                        this.$.F([b], d)
                    };
                    c.prototype.ga = function(b, d) {
                        this.$.ga([b], d)
                    };
                    c.prototype.flush = function(b) {
                        var d = this.buffer.concat(this.af(this.buffer));
                        d.length && (this.buffer = [], this.Ae += this.Db, this.Db = 0, b = this.ma.Ha(d, b), this.$e(b, d))
                    };
                    return c
                }(Tl), kh.ed = {}, kh),
                db = function() {
                    function a(c,
                        b, d) {
                        this.Zh = "wv2.c";
                        this.Ob = [];
                        this.ia = [];
                        this.l = c;
                        this.L = Lf(c, this, d, this.Zh);
                        this.G = b;
                        this.fb = this.G.th();
                        this.start = this.L.H(this.start, "st");
                        this.stop = this.L.H(this.stop, "sp")
                    }
                    a.prototype.start = function() {
                        var c = this;
                        this.Ob = A(function(b) {
                            var d = b[0],
                                e = b[2];
                            b = H(c.L.H(b[1], d[0]), c);
                            return c.fb.F(e || c.l, d, b)
                        }, this.ia)
                    };
                    a.prototype.stop = function() {
                        x(la, this.Ob)
                    };
                    a.prototype.Z = function(c) {
                        return this.G.sa().Z(c)
                    };
                    return a
                }(),
                ro = ["checkbox", "radio"],
                so = /pwd|value|password/i,
                lh = U("location.href"),
                Iu =
                function(a) {
                    function c(b, d, e) {
                        d = a.call(this, b, d, e) || this;
                        d.qa = {
                            elements: [],
                            attributes: []
                        };
                        d.index = 0;
                        d.Wd = d.L.H(d.Wd, "o");
                        d.od = d.L.H(d.od, "io");
                        d.cd = d.L.H(d.cd, "ao");
                        d.ee = d.L.H(d.ee, "a");
                        d.ce = d.L.H(d.ce, "at");
                        d.fe = d.L.H(d.fe, "r");
                        d.de = d.L.H(d.de, "c");
                        d.za = new b.MutationObserver(d.Wd);
                        return d
                    }
                    Na(c, a);
                    c.prototype.start = function() {
                        this.za.observe(this.l.document.documentElement, {
                            attributes: !0,
                            characterData: !0,
                            childList: !0,
                            subtree: !0,
                            attributeOldValue: !0,
                            characterDataOldValue: !0
                        })
                    };
                    c.prototype.stop = function() {
                        this.za.disconnect()
                    };
                    c.prototype.cd = function(b) {
                        var d = b.target;
                        b = b.attributeName;
                        var e = Pb(this.l)(d, this.qa.elements); - 1 === e && (e = this.qa.elements.push(d) - 1, this.qa.attributes[e] = {});
                        this.qa.attributes[e] || (this.qa.attributes[e] = {});
                        e = this.qa.attributes[e];
                        var f = d.getAttribute(b);
                        e[b] = te(this.l, d, b, f, this.G.Jb()).value
                    };
                    c.prototype.od = function(b) {
                        function d(k) {
                            var l = Pb(e.l)(k, f);
                            return -1 === l ? (f.push(k), k = {
                                wd: {}
                            }, g.push(k), k) : g[l]
                        }
                        var e = this,
                            f = [],
                            g = [];
                        x(function(k) {
                            var l = k.attributeName,
                                m = k.removedNodes,
                                p = k.oldValue,
                                q =
                                k.target,
                                r = k.nextSibling,
                                t = k.previousSibling;
                            switch (k.type) {
                                case "attributes":
                                    e.cd(k);
                                    var y = d(q);
                                    y.wd[l] || (y.wd[l] = te(e.l, q, l, p, e.G.Jb()).value);
                                    break;
                                case "childList":
                                    m && x(function(F) {
                                        y = d(F);
                                        y.Ye || z(y, {
                                            Ye: q,
                                            ih: r ? r : void 0,
                                            jh: t ? t : void 0
                                        })
                                    }, Ca(m));
                                    break;
                                case "characterData":
                                    y = d(q), y.Ze || (y.Ze = p)
                            }
                        }, b);
                        var h = this.G.sa();
                        x(function(k, l) {
                            h.qe(k, g[l])
                        }, f)
                    };
                    c.prototype.Wd = function(b) {
                        var d = this;
                        if (lh(this.l)) {
                            var e = this.G.stamp();
                            this.od(b);
                            x(function(f) {
                                var g = f.addedNodes,
                                    h = f.removedNodes,
                                    k = f.target;
                                switch (f.type) {
                                    case "childList":
                                        h &&
                                            h.length && d.fe(Ca(h), e);
                                        g && g.length && d.ee(Ca(g), e);
                                        break;
                                    case "characterData":
                                        d.de(k, e)
                                }
                            }, b);
                            this.ce(e)
                        } else this.stop()
                    };
                    c.prototype.ce = function(b) {
                        var d = this;
                        x(function(e, f) {
                            var g = d.xc();
                            d.G.Y("mutation", {
                                index: g,
                                attributes: d.qa.attributes[f],
                                target: d.Z(e)
                            }, "ac", b)
                        }, this.qa.elements);
                        this.qa.elements = [];
                        this.qa.attributes = []
                    };
                    c.prototype.ee = function(b, d) {
                        var e = this,
                            f = this.xc();
                        this.G.sa().Bc({
                            nodes: b,
                            Uc: function(g) {
                                g = A(function(h) {
                                    h.node = void 0;
                                    return h
                                }, g);
                                e.G.Y("mutation", {
                                        index: f,
                                        nodes: g
                                    }, "ad",
                                    d)
                            }
                        })
                    };
                    c.prototype.fe = function(b, d) {
                        var e = this,
                            f = this.xc(),
                            g = this.G.sa(),
                            h = A(function(k) {
                                var l = g.removeNode(k);
                                hj(e.l, k, function(m) {
                                    g.removeNode(m)
                                });
                                return l
                            }, b);
                        this.G.Y("mutation", {
                            index: f,
                            nodes: h
                        }, "re", d)
                    };
                    c.prototype.de = function(b, d) {
                        var e = this.xc();
                        this.G.Y("mutation", {
                            value: b.textContent,
                            target: this.Z(b),
                            index: e
                        }, "tc", d)
                    };
                    c.prototype.xc = function() {
                        var b = this.index;
                        this.index += 1;
                        return b
                    };
                    return c
                }(db),
                Ju = function() {
                    function a(c, b) {
                        var d = this;
                        this.sc = [];
                        this.gb = [];
                        this.Vd = 1;
                        this.Oe = this.Rf =
                            0;
                        this.ya = {};
                        this.Ta = {};
                        this.Ib = [];
                        this.Hd = function(f) {
                            return d.gb.length ? I(f, d.gb) : !1
                        };
                        this.removeNode = function(f) {
                            var g = d.Z(f),
                                h = Ma(f);
                            if (h) return h = "NR:" + h.toLowerCase(), d.Hd(h) && d.$.R(h, {
                                data: {
                                    node: f,
                                    id: g
                                }
                            }), g
                        };
                        this.lb = function(f) {
                            var g = Ma(f);
                            if (g) {
                                var h = f.__ym_indexer;
                                return h ? h : (h = d.Vd, f.__ym_indexer = h, d.Vd += 1, g = "NA:" + g.toLowerCase(), d.Hd(g) && d.$.R(g, {
                                    data: {
                                        node: f,
                                        id: h
                                    }
                                }), h)
                            }
                            return null
                        };
                        this.Lf = function() {
                            d.Rf = T(d.l, w(H(d.aa, d, !1), d.Lf), 50, "i.s")
                        };
                        this.Jf = function() {
                            d.Oe = T(d.l, w(H(d.hd, d, !1),
                                d.Jf), 50, "i.g")
                        };
                        this.Bi = function(f) {
                            null === d.ya[f] && delete d.ya[f];
                            null === d.Ta[f] && delete d.Ta[f]
                        };
                        this.l = c;
                        var e = Lf(c, this, "i");
                        this.$ = ud(c);
                        this.options = b;
                        this.start = e.H(this.start, "st");
                        this.stop = e.H(this.stop, "sp");
                        this.Z = e.H(this.Z, "i");
                        this.qe = e.H(this.qe, "o");
                        this.Bc = e.H(this.Bc, "a");
                        this.removeNode = e.H(this.removeNode, "r");
                        this.aa = e.H(this.aa, "s");
                        this.hd = e.H(this.hd, "g")
                    }
                    a.prototype.qe = function(c, b) {
                        var d = this.lb(c);
                        Wa(d) || (this.Ta[d] && this.Z(c), this.Ta[d] = b)
                    };
                    a.prototype.F = function(c, b,
                        d) {
                        c = "" + b + c;
                        this.gb.push(c);
                        this.Hd(c) || this.gb.push(c);
                        this.$.F([c], d)
                    };
                    a.prototype.ga = function(c, b, d) {
                        var e = "" + b + c;
                        this.gb = ha(function(f) {
                            return f !== e
                        }, this.gb);
                        this.$.ga([e], d)
                    };
                    a.prototype.start = function() {
                        this.Lf();
                        this.Jf()
                    };
                    a.prototype.stop = function() {
                        this.flush();
                        ka(this.l, this.Oe);
                        ka(this.l, this.Rf);
                        this.sc = [];
                        this.Ib = [];
                        this.ya = {};
                        this.Ta = {}
                    };
                    a.prototype.Bc = function(c) {
                        var b = this,
                            d = [],
                            e = 0,
                            f = {
                                Uc: c.Uc,
                                result: [],
                                Cc: 0,
                                nodes: d
                            };
                        this.sc.push(f);
                        x(function(g) {
                            hj(b.l, g, function(h) {
                                var k = b.lb(h);
                                Wa(k) || (d.push(h), b.ya[k] && b.Z(h), b.ya[k] = {
                                    node: h,
                                    event: f,
                                    Vi: e
                                }, e += 1)
                            })
                        }, c.nodes)
                    };
                    a.prototype.Z = function(c) {
                        if (c === this.l) return 0;
                        var b = this.lb(c),
                            d = this.ya[b],
                            e = this.mh(b),
                            f = e.Ye,
                            g = e.wd,
                            h = e.Ze,
                            k = e.ih,
                            l = e.jh;
                        if (d) {
                            e = d.event;
                            d = d.Vi;
                            var m = gt(this.l) === c;
                            k = k || c.nextSibling;
                            var p = l || c.previousSibling;
                            l = !m && k ? this.lb(k) : null;
                            p = !m && p ? this.lb(p) : null;
                            m = this.l;
                            k = this.options;
                            f = this.lb(f || c.parentNode || c.parentElement) || 0;
                            var q = g,
                                r = void 0;
                            void 0 === p && (p = null);
                            void 0 === l && (l = null);
                            void 0 === q && (q = {});
                            void 0 ===
                                r && (r = Ma(c));
                            if (X(r)) c = void 0;
                            else {
                                g = {
                                    id: b,
                                    prev: p !== f ? p : null,
                                    next: l !== f ? l : null,
                                    parent: f,
                                    name: r.toLowerCase(),
                                    node: c
                                };
                                if (Rf(c)) {
                                    if (h = oo(c, h), g.attributes = {}, g.content = h)
                                        if (c = vd(m, c)) g.content = "" !== ab(h) ? Fo(m, h) : h, g.hidden = c
                                } else h = po(m, c, k, q, r), m = h.qb, g.attributes = h.Ag, m && (g.hidden = m), c.namespaceURI && eb(c.namespaceURI, "svg") && (g.namespace = c.namespaceURI);
                                c = g
                            }
                            if (X(c)) return;
                            this.ya[b] = null;
                            this.Ib.push(b);
                            e.result[d] = c;
                            e.Cc += 1;
                            e.nodes.length === e.Cc && e.Uc(e.result)
                        }
                        return b
                    };
                    a.prototype.flush = function() {
                        this.aa(!0)
                    };
                    a.prototype.hd = function() {
                        if (this.Ib.length) {
                            var c = ec(this.Ib, this.Bi),
                                b = vg(this.l, 30);
                            c(b)
                        }
                    };
                    a.prototype.aa = function(c) {
                        var b = this;
                        if (lh(this.l)) {
                            var d = ea(this.ya);
                            d = N(function(e, f) {
                                b.ya[f] && e.push(b.ya[f].node);
                                return e
                            }, [], d);
                            d = ec(d, this.Z);
                            c = c ? gk(D) : ek(this.l, 20);
                            d(c);
                            this.sc = ha(function(e) {
                                return e.Cc !== e.result.length
                            }, this.sc)
                        }
                    };
                    a.prototype.mh = function(c) {
                        if (Wa(c)) return {};
                        var b = this.Ta[c];
                        return b ? (this.Ta[c] = null, this.Ib.push(c), b) : {}
                    };
                    return a
                }(),
                Ku = ["input", "change", "keyup", "paste", "cut"],
                Lu = function(a) {
                    function c(b, d, e) {
                        b = a.call(this, b, d, e) || this;
                        b.inputs = {};
                        b.rd = !1;
                        b.Jc = b.L.H(b.Jc, "ii");
                        b.Kc = b.L.H(b.Kc, "ir");
                        b.Pc = b.L.H(b.Pc, "ri");
                        b.Zc = b.L.H(b.Zc, "ur");
                        b.Gd = b.L.H(b.Gd, "ce");
                        b.Ac = b.L.H(b.Ac, "vc");
                        return b
                    }
                    Na(c, a);
                    c.prototype.start = function() {
                        var b = this,
                            d = this.G.sa();
                        this.rd = this.Hg();
                        x(function(e) {
                            e = e.toLowerCase();
                            d.F(e, "NA:", H(b.Jc, b));
                            d.F(e, "NR:", H(b.Kc, b))
                        }, Qf);
                        this.Ob = [this.fb.F(this.l.document, Ku, H(this.Gd, this)), function() {
                            x(function(e) {
                                e = e.toLowerCase();
                                d.ga(e, "NA:", b.Jc);
                                d.ga(e, "NR:", b.Kc)
                            }, Qf);
                            x(b.Zc, ea(b.inputs))
                        }]
                    };
                    c.prototype.Zc = function(b) {
                        var d = this.inputs[b];
                        if (d) {
                            if (this.rd) {
                                var e = d.wi;
                                d = d.element;
                                e && this.l.Object.defineProperty(d, this.yc(d), e)
                            }
                            delete this.inputs[b]
                        }
                    };
                    c.prototype.Kc = function(b) {
                        b && this.Zc(b.data.id)
                    };
                    c.prototype.Jc = function(b) {
                        b && (b = b.data, this.Pc(b.node, b.id))
                    };
                    c.prototype.yc = function(b) {
                        return Re(b) ? "checked" : "value"
                    };
                    c.prototype.Gd = function(b) {
                        if (b = b.target) {
                            var d = this.yc(b);
                            this.Ac(b[d], b)
                        }
                    };
                    c.prototype.Ac = function(b, d) {
                        var e = this.Z(d),
                            f = this.inputs[e];
                        if (!f && (f = this.Pc(f, e), !f)) return;
                        e = f.Jg;
                        var g = f.value,
                            h = this.yc(d),
                            k = !b || I(typeof b, ["string", "boolean", "number"]),
                            l = this.G.Jb().Md;
                        k && b !== g && (g = te(this.l, d, h, b, this.G.Jb()).value, e ? this.G.Y("event", {
                            target: this.Z(d),
                            checked: !!b
                        }, "change") : (e = Tc(this.l, d, l), l = e.ib, this.G.Y("event", {
                            value: g,
                            hidden: e.rb && !l,
                            target: this.Z(d)
                        }, "change")), f.value = b)
                    };
                    c.prototype.Pc = function(b, d) {
                        var e = this;
                        if (!Jf(b) || "__ym_input_override_test" === b.getAttribute("class") || this.inputs[d]) return null;
                        var f =
                            Re(b),
                            g = this.yc(b),
                            h = {
                                element: b,
                                Jg: f,
                                value: b[g]
                            };
                        this.inputs[d] = h;
                        this.rd && Tb(this.l, function() {
                            var k = e.l.Object.getOwnPropertyDescriptor(Object.getPrototypeOf(b), g) || {},
                                l = e.l.Object.getOwnPropertyDescriptor(b, g) || {},
                                m = z({}, k, l);
                            if (Ea("((set)?(\\s?" + g + ")?)?", m.set)) {
                                try {
                                    e.l.Object.defineProperty(b, g, z({}, m, {
                                        configurable: !0,
                                        set: function(p) {
                                            e.Ac(p, this);
                                            return m.set.call(this, p)
                                        }
                                    }))
                                } catch (p) {}
                                h.wi = m
                            }
                        });
                        return h
                    };
                    c.prototype.Hg = function() {
                        var b = !0,
                            d = fb(this.l)("input");
                        try {
                            d = fb(this.l)("input");
                            d.value =
                                "INPUT_VALUE";
                            d.style.setProperty("display", "none", "important");
                            d.setAttribute("type", "text");
                            d.setAttribute("class", "__ym_input_override_test");
                            var e = this.l.Object.getOwnPropertyDescriptor(Object.getPrototypeOf(d), "value") || {},
                                f = this.l.Object.getOwnPropertyDescriptor(d, "value") || {},
                                g = z({}, e, f);
                            this.l.Object.defineProperty(d, "value", z({}, g, {
                                configurable: !0,
                                set: function(h) {
                                    return g.set.call(d, h)
                                }
                            }));
                            "INPUT_VALUE" !== d.value && (b = !1);
                            d.value = "INPUT_TEST";
                            "INPUT_TEST" !== d.value && (b = !1)
                        } catch (h) {
                            b = !1
                        }
                        return b
                    };
                    return c
                }(db),
                Mu = function(a) {
                    function c(b, d, e) {
                        b = a.call(this, b, d, e) || this;
                        b.Za = {
                            width: 0,
                            height: 0,
                            pageHeight: 0,
                            pageWidth: 0,
                            orientation: 0
                        };
                        b.ia.push([
                            ["resize"], b.ui
                        ]);
                        b.ia.push([
                            ["orientationchange"], b.ri
                        ]);
                        return b
                    }
                    Na(c, a);
                    c.prototype.start = function() {
                        a.prototype.start.call(this);
                        this.Of()
                    };
                    c.prototype.ui = function() {
                        var b = this.Ed();
                        this.Jh(b) && (this.Za = b, this.Pf(b))
                    };
                    c.prototype.ri = function() {
                        var b = this.Ed();
                        this.Za.orientation !== b.orientation && (this.Za = b, this.Fi(b))
                    };
                    c.prototype.rf = function(b) {
                        return !b.height ||
                            !b.width || !b.pageWidth || !b.pageHeight
                    };
                    c.prototype.Jh = function(b) {
                        return b.height !== this.Za.height || b.width !== this.Za.width
                    };
                    c.prototype.Ed = function() {
                        var b = this.G.kb(),
                            d = Oc(this.l),
                            e = d[0];
                        d = d[1];
                        b = b.Dd();
                        return {
                            width: e,
                            height: d,
                            pageWidth: b ? b.scrollWidth : 0,
                            pageHeight: b ? b.scrollHeight : 0,
                            orientation: this.G.kb().vh()
                        }
                    };
                    c.prototype.Fi = function(b) {
                        var d;
                        void 0 === d && (d = this.G.stamp());
                        this.G.Y("event", {
                            width: b.width,
                            height: b.height,
                            orientation: b.orientation
                        }, "deviceRotation", d)
                    };
                    c.prototype.Pf = function(b,
                        d) {
                        void 0 === d && (d = this.G.stamp());
                        this.G.Y("event", {
                            width: b.width,
                            height: b.height,
                            pageWidth: b.pageWidth,
                            pageHeight: b.pageHeight
                        }, "resize", d)
                    };
                    c.prototype.Of = function() {
                        var b = this.Ed();
                        this.rf(b) ? T(this.l, H(this.Of, this), 300) : (this.rf(this.Za) && (this.Za = b), this.Pf(b, 0))
                    };
                    return c
                }(db),
                df = function() {
                    function a(c) {
                        this.index = 0;
                        this.xb = {};
                        this.l = c
                    }
                    a.prototype.nc = function(c, b, d) {
                        void 0 === d && (d = {});
                        var e = ja(this.l),
                            f = this.index;
                        this.index += 1;
                        this.xb[f] = {
                            Ka: 0,
                            Ub: !1,
                            gh: c,
                            dd: [],
                            Qd: e(Z)
                        };
                        var g = this;
                        return function() {
                            var h =
                                Oa(arguments),
                                k = d.hb && !g.xb[f].Ub,
                                l = g.xb[f];
                            ka(g.l, l.Ka);
                            l.dd = h;
                            l.Ub = !0;
                            var m = e(Z);
                            if (k || m - l.Qd >= b) c.apply(void 0, h), l.Qd = m;
                            l.Ka = T(g.l, function() {
                                k || (c.apply(void 0, h), l.Qd = e(Z));
                                l.Ub = !1;
                                l.dd = []
                            }, b, "th")
                        }
                    };
                    a.prototype.flush = function() {
                        var c = this;
                        x(function(b) {
                            var d = c.xb[b],
                                e = d.Ka,
                                f = d.gh,
                                g = d.dd;
                            d.Ub && (c.xb[b].Ub = !1, f.apply(void 0, g), ka(c.l, e))
                        }, ea(this.xb))
                    };
                    return a
                }(),
                Nu = function(a) {
                    function c(b, d, e) {
                        d = a.call(this, b, d, e) || this;
                        d.bg = [];
                        d.Ie = {
                            x: 0,
                            y: 0
                        };
                        d.Ca = new df(b);
                        d.Nc = d.L.H(d.Nc, "o");
                        d.ia.push([
                            ["scroll"],
                            d.vi
                        ]);
                        return d
                    }
                    Na(c, a);
                    c.prototype.start = function() {
                        a.prototype.start.call(this);
                        this.G.Y("event", {
                            x: Math.max(this.l.scrollX, 0),
                            y: Math.max(this.l.scrollY, 0),
                            page: !0,
                            target: -1
                        }, "scroll", 0)
                    };
                    c.prototype.stop = function() {
                        a.prototype.stop.call(this);
                        this.Ca.flush()
                    };
                    c.prototype.vi = function(b) {
                        if (this.G.kb().mf()) this.Nc(b);
                        else {
                            var d = b.target,
                                e = ha(function(f) {
                                    return f[0] === d
                                }, this.bg).pop();
                            e ? e = e[1] : (e = this.Ca.nc(H(this.Nc, this), 100, {
                                hb: !0
                            }), this.bg.push([d, e]));
                            e(b)
                        }
                    };
                    c.prototype.Nc = function(b) {
                        var d =
                            this.G.kb().Dd();
                        b = b.target;
                        var e = this.Kb(b);
                        d = d === b || this.l === b || this.l.document === b;
                        var f = Math.max(e.left, 0);
                        e = Math.max(e.top, 0);
                        if (d) {
                            if (this.Ie.x === f && this.Ie.y === e) return;
                            this.Ie = {
                                x: f,
                                y: e
                            }
                        }
                        this.G.Y("event", {
                            x: f,
                            y: e,
                            page: d,
                            target: d ? -1 : this.Z(b)
                        }, "scroll")
                    };
                    c.prototype.Kb = function(b) {
                        var d = {
                            left: 0,
                            top: 0
                        };
                        if (!b) return d;
                        if (b.window === b) return {
                            top: b.scrollY || 0,
                            left: b.scrollX || 0
                        };
                        var e = b.ownerDocument || b,
                            f = b.documentElement,
                            g = e.defaultView || e.parentWindow,
                            h = e.body;
                        return b !== e || (b = this.G.kb().Dd(),
                            b) ? I(b, [f, h]) ? {
                            top: b.scrollTop || g.scrollY,
                            left: b.scrollLeft || g.scrollX
                        } : {
                            top: b.scrollTop || 0,
                            left: b.scrollLeft || 0
                        } : d
                    };
                    return c
                }(db),
                Ou = ["mousemove", "mousedown", "mouseup", "click"],
                Pu = function(a) {
                    function c(b, d, e) {
                        d = a.call(this, b, d, e) || this;
                        d.ia.push([Ou, d.oi]);
                        d.Ca = new df(b);
                        d.Ic = d.L.H(d.Ic, "n");
                        d.Pi = d.L.H(d.Ca.nc(H(d.Ic, d), 100), "t");
                        return d
                    }
                    Na(c, a);
                    c.prototype.stop = function() {
                        a.prototype.stop.call(this);
                        this.Ca.flush()
                    };
                    c.prototype.oi = function(b) {
                        var d = null;
                        try {
                            d = b.type
                        } catch (e) {
                            return
                        }
                        "mousemove" ===
                        d ? this.Pi(b) : this.Ic(b)
                    };
                    c.prototype.Ic = function(b) {
                        var d = b.type,
                            e = b.clientX;
                        e = void 0 === e ? null : e;
                        var f = b.clientY;
                        f = void 0 === f ? null : f;
                        b = b.target || this.l.document.elementFromPoint(e, f);
                        this.G.Y("event", {
                            x: e || 0,
                            y: f || 0,
                            target: this.Z(b)
                        }, d)
                    };
                    return c
                }(db),
                Qu = ["focus", "blur"],
                Ru = function(a) {
                    function c(b, d, e) {
                        b = a.call(this, b, d, e) || this;
                        b.ia.push([Qu, b.hh]);
                        return b
                    }
                    Na(c, a);
                    c.prototype.hh = function(b) {
                        var d = b.target;
                        b = b.type;
                        this.G.Y("event", {
                            target: this.Z(d === this.l ? this.l.document.documentElement : d)
                        }, b)
                    };
                    return c
                }(db),
                Su = v(function(a) {
                    var c = oa(a.getSelection, "getSelection");
                    return c ? H(c, a) : D
                }),
                Tu = w(Su, la),
                Uu = ["mousemove", "touchmove", "mousedown", "touchdown", "select"],
                Vu = /text|search|password|tel|url/,
                Wu = function(a) {
                    function c(b, d, e) {
                        b = a.call(this, b, d, e) || this;
                        b.Id = !1;
                        b.ia.push([Uu, b.Hh]);
                        return b
                    }
                    Na(c, a);
                    c.prototype.Hh = function(b) {
                        var d = this.G,
                            e = b.type,
                            f = b.which;
                        b = b.target;
                        if ("mousemove" !== e || 1 === f)(e = "select" === e ? this.Ah(b) : this.yh()) && e.start !== e.end ? (this.Id = !0, d.Y("event", e, "selection")) : this.Id &&
                            (this.Id = !1, d.Y("event", {
                                start: 0,
                                end: 0
                            }, "selection"))
                    };
                    c.prototype.yh = function() {
                        var b = Tu(this.l);
                        if (b && 0 < b.rangeCount) {
                            b = b.getRangeAt(0) || this.l.document.createRange();
                            var d = this.Z(b.startContainer),
                                e = this.Z(b.endContainer);
                            if (!X(d) && !X(e)) return {
                                start: b.startOffset,
                                end: b.endOffset,
                                startNode: d,
                                endNode: e
                            }
                        }
                    };
                    c.prototype.Ah = function(b) {
                        if (Vu.test(b.type || "")) {
                            var d = this.Z(b);
                            if (!X(d)) return {
                                start: b.selectionStart,
                                end: b.selectionEnd,
                                target: d
                            }
                        }
                    };
                    return c
                }(db),
                Xu = {
                    focus: "windowfocus",
                    blur: "windowblur"
                },
                Yu = function(a) {
                    function c(b, d, e) {
                        b = a.call(this, b, d, e) || this;
                        b.visibility = null;
                        X(b.l.document.hidden) ? X(b.l.document.msHidden) ? X(b.l.document.webkitHidden) || (b.visibility = {
                            hidden: "webkitHidden",
                            event: "webkitvisibilitychange"
                        }) : b.visibility = {
                            hidden: "msHidden",
                            event: "msvisibilitychange"
                        } : b.visibility = {
                            hidden: "hidden",
                            event: "visibilitychange"
                        };
                        b.handleEvent = b.L.H(b.handleEvent, "e");
                        return b
                    }
                    Na(c, a);
                    c.prototype.start = function() {
                        this.Ob = [this.fb.F(this.l, this.visibility ? [this.visibility.event] : ["focus",
                            "blur"
                        ], H(this.handleEvent, this))]
                    };
                    c.prototype.handleEvent = function(b) {
                        this.G.Y("event", {}, Xu[this.visibility ? this.l.document[this.visibility.hidden] ? "blur" : "focus" : b.type])
                    };
                    return c
                }(db),
                Zu = ["touchmove", "touchstart", "touchend", "touchcancel", "touchforcechange"],
                $u = function(a) {
                    function c(b, d, e) {
                        d = a.call(this, b, d, e) || this;
                        d.Xc = {};
                        d.scrolling = !1;
                        d.Mf = 0;
                        d.ia.push([
                            ["scroll"], d.Ei, d.l.document
                        ]);
                        d.ia.push([Zu, d.Ri, d.l.document]);
                        d.Ca = new df(b);
                        d.Nb = d.L.H(d.Nb, "nh");
                        d.Qi = d.L.H(d.Ca.nc(d.Nb, d.G.kb().mf() ?
                            0 : 50, {
                                hb: !0
                            }), "th");
                        return d
                    }
                    Na(c, a);
                    c.prototype.Ei = function() {
                        var b = this;
                        this.scrolling = !0;
                        ka(this.l, this.Mf);
                        this.Mf = T(this.l, function() {
                            b.scrolling = !1
                        }, 150)
                    };
                    c.prototype.Ri = function(b) {
                        var d = this,
                            e = "touchcancel" === b.type || "touchend" === b.type;
                        b.changedTouches && 0 < b.changedTouches.length && x(function(f) {
                            var g = d.Ch(f);
                            f.__ym_touch_id = g;
                            e && delete d.Xc[f.identifier]
                        }, Ca(b.changedTouches));
                        "touchmove" === b.type ? this.scrolling ? this.Nb(b) : this.Qi(b, this.G.stamp()) : this.Nb(b)
                    };
                    c.prototype.Ch = function(b) {
                        this.Xc[b.identifier] ||
                            (this.Xc[b.identifier] = gi());
                        return this.Xc[b.identifier]
                    };
                    c.prototype.Nb = function(b, d) {
                        void 0 === d && (d = this.G.stamp());
                        var e = b.type,
                            f = A(function(g) {
                                return {
                                    id: g.__ym_touch_id,
                                    x: Math.round(g.clientX),
                                    y: Math.round(g.clientY),
                                    force: g.force
                                }
                            }, Ca(b.changedTouches));
                        0 < f.length && this.G.Y("event", {
                            touches: f,
                            target: this.Z(b.target)
                        }, e, d)
                    };
                    return c
                }(db),
                av = function(a) {
                    function c(b, d, e) {
                        b = a.call(this, b, d, e) || this;
                        b.ia.push([
                            ["load"], b.ni, b.l.document
                        ]);
                        return b
                    }
                    Na(c, a);
                    c.prototype.ni = function(b) {
                        b = b.target;
                        "IMG" ===
                        Ma(b) && b.getAttribute("srcset") && this.G.Y("mutation", {
                            target: this.Z(b),
                            attributes: {
                                src: b.currentSrc
                            }
                        }, "ac")
                    };
                    return c
                }(db),
                bv = function(a) {
                    function c(b, d, e) {
                        d = a.call(this, b, d, e) || this;
                        d.mg = 1;
                        d.Ca = new df(b);
                        d.ec = d.L.H(d.ec, "z");
                        return d
                    }
                    Na(c, a);
                    c.prototype.start = function() {
                        if (this.jf()) {
                            a.prototype.start.call(this);
                            this.ec();
                            var b = this.fb.F(n(this.l, "visualViewport"), ["resize"], this.Ca.nc(this.ec, 10));
                            this.Ob.push(b)
                        }
                    };
                    c.prototype.stop = function() {
                        a.prototype.stop.call(this);
                        this.Ca.flush()
                    };
                    c.prototype.ec =
                        function() {
                            var b = this.jf();
                            b && b !== this.mg && (this.mg = b, this.Gi(b))
                        };
                    c.prototype.jf = function() {
                        var b = je(this.l);
                        return b ? b[2] : null
                    };
                    c.prototype.Gi = function(b) {
                        var d = ag(this.l);
                        this.G.Y("event", {
                            x: d.x,
                            y: d.y,
                            level: b
                        }, "zoom")
                    };
                    return c
                }(db),
                ee, ef = {
                    91: "super",
                    93: "super",
                    224: "super",
                    18: "alt",
                    17: "ctrl",
                    16: "shift",
                    9: "tab",
                    8: "backspace",
                    46: "delete"
                },
                Xl = {
                    "super": 1,
                    pj: 2,
                    alt: 3,
                    shift: 4,
                    Jj: 5,
                    "delete": 6,
                    nj: 6
                },
                cv = [4, 9, 8, 32, 37, 38, 39, 40, 46],
                Yl = (ee = {}, ee["1"] = {
                    91: "&#8984;",
                    93: "&#8984;",
                    224: "&#8984;",
                    18: "&#8997;",
                    17: "&#8963;",
                    16: "&#8679;",
                    9: "&#8677;",
                    8: "&#9003;",
                    46: "&#9003;"
                }, ee["2"] = {
                    91: "&#xff;",
                    93: "&#xff;",
                    224: "&#xff;",
                    18: "Alt",
                    17: "Ctrl",
                    16: "Shift",
                    9: "Tab",
                    8: "Backspace",
                    46: "Delete"
                }, ee.ai = {
                    32: "SPACEBAR",
                    37: "&larr;",
                    38: "&uarr;",
                    39: "&rarr;",
                    40: "&darr;",
                    13: "Enter"
                }, ee),
                dv = /flash/,
                ev = /ym-disable-keys/,
                fv = /^&#/,
                gv = function(a) {
                    function c(b, d, e) {
                        d = a.call(this, b, d, e) || this;
                        d.ob = {};
                        d.Oa = 0;
                        d.Fa = [];
                        d.ag = [];
                        d.qc = 0;
                        d.Ff = 0;
                        d.ia.push([
                            ["keydown"], d.Eh
                        ]);
                        d.ia.push([
                            ["keyup"], d.Fh
                        ]);
                        d.wg = -1 !== kc(n(b, "navigator.appVersion") || "", "Mac") ?
                            "1" : "2";
                        d.Gc = d.L.H(d.Gc, "v");
                        d.ud = d.L.H(d.ud, "ec");
                        d.Tc = d.L.H(d.Tc, "sk");
                        d.Bd = d.L.H(d.Bd, "gk");
                        d.te = d.L.H(d.te, "sc");
                        d.dc = d.L.H(d.dc, "cc");
                        d.reset = d.L.H(d.reset, "r");
                        d.Qc = d.L.H(d.Qc, "rs");
                        return d
                    }
                    Na(c, a);
                    c.prototype.Eh = function(b) {
                        if (this.Gc(b) && !this.Th(b)) {
                            var d = b.keyCode;
                            b.repeat || this.ob[d] || (this.ob[b.keyCode] = !0, ef[b.keyCode] && !this.Oa ? (this.Oa += 1, this.te(b), this.reset(300)) : this.Oa ? (this.Eg(), this.je(b), this.ud()) : (this.reset(), this.je(b)))
                        }
                    };
                    c.prototype.Fh = function(b) {
                        if (this.Gc(b)) {
                            var d =
                                b.keyCode,
                                e = ef[b.keyCode];
                            this.ob[b.keyCode] && (this.ob[d] = !1);
                            e && this.Oa && (this.Oa = 0, this.ob = {});
                            1 === this.Fa.length && (b = this.Fa[0], I(b.keyCode, cv) && (this.Tc([b], !0), this.reset()));
                            this.Fa = ha(w(U("keyCode"), Ba(d), Gc), this.Fa);
                            ka(this.l, this.qc)
                        }
                    };
                    c.prototype.Gc = function(b) {
                        var d = this.l.document.activeElement;
                        d = d && "OBJECT" === d.nodeName && dv.test(d.getAttribute("type") || "");
                        b = b.target;
                        if (!b) return !d;
                        b = "INPUT" === b.nodeName && "password" === b.getAttribute("type") && ev.test(b.className);
                        return !d && !b
                    };
                    c.prototype.ud =
                        function() {
                            this.ag = this.Fa.slice(0);
                            ka(this.l, this.qc);
                            this.qc = T(this.l, u(this.ag, H(this.Tc, this)), 0, "e.c")
                        };
                    c.prototype.Tc = function(b, d) {
                        void 0 === d && (d = !1);
                        if (1 < b.length || d) {
                            var e = this.Bd(b);
                            this.G.Y("event", {
                                keystrokes: e
                            }, "keystroke")
                        }
                    };
                    c.prototype.Bd = function(b) {
                        var d = this;
                        b = A(function(e) {
                            e = e.keyCode;
                            var f = ef[e],
                                g = d.uh(e);
                            return {
                                id: e,
                                key: g,
                                isMeta: !!f && fv.test(g),
                                modifier: f
                            }
                        }, b);
                        return xe(function(e, f) {
                            return (Xl[e.modifier] || 100) - (Xl[f.modifier] || 100)
                        }, b)
                    };
                    c.prototype.uh = function(b) {
                        return Yl[this.wg][b] ||
                            Yl.ai[b] || String.fromCharCode(b)
                    };
                    c.prototype.je = function(b) {
                        I(b, this.Fa) || this.Fa.push(b)
                    };
                    c.prototype.te = function(b) {
                        this.je(b);
                        this.dc()
                    };
                    c.prototype.dc = function() {
                        this.Oa ? T(this.l, this.dc, 100) : this.Fa = []
                    };
                    c.prototype.Eg = function() {
                        ka(this.l, this.Ff)
                    };
                    c.prototype.reset = function(b) {
                        b ? this.Ff = T(this.l, H(this.Qc, this), b) : this.Qc()
                    };
                    c.prototype.Qc = function() {
                        this.Oa = 0;
                        this.Fa = [];
                        this.ob = {};
                        ka(this.l, this.qc)
                    };
                    c.prototype.Th = function(b) {
                        return b.target && "INPUT" === b.target.nodeName ? b.shiftKey || 32 ===
                            b.keyCode || "shift" === ef[b.keyCode] : !1
                    };
                    return c
                }(db),
                no = ["sr", "sd", "\u043d"],
                hv = /allow-same-origin/,
                iv = function(a) {
                    function c(b, d, e) {
                        d = a.call(this, b, d, e) || this;
                        d.Xb = [];
                        d.xd = {};
                        d.Xd = d.L.H(d.Xd, "fi");
                        d.Yd = d.L.H(d.Yd, "sd");
                        d.Zd = d.L.H(d.Zd, "src");
                        d.za = new b.MutationObserver(d.Zd);
                        return d
                    }
                    Na(c, a);
                    c.prototype.start = function() {
                        a.prototype.start.call(this);
                        this.G.Jb().fc && this.G.sa().F("iframe", "NA:", H(this.Xd, this));
                        this.G.ef().zd().F(["sdr"], H(this.Yd, this))
                    };
                    c.prototype.stop = function() {
                        a.prototype.stop.call(this);
                        x(function(b) {
                            b.G.stop()
                        }, this.Xb)
                    };
                    c.prototype.Zd = function(b) {
                        var d = b.pop().target;
                        if (b = tb(function(f) {
                                return f.lf === d
                            }, this.Xb)) {
                            this.Xb = ha(function(f) {
                                return f.lf !== d
                            }, this.Xb);
                            var e = b.G.Ad();
                            try {
                                b.G.stop()
                            } catch (f) {}
                            this.lc(d, e)
                        }
                    };
                    c.prototype.Xd = function(b) {
                        if (b) {
                            var d = b.data.node;
                            this.za.observe(d, {
                                attributes: !0,
                                attributeFilter: ["src"]
                            });
                            this.lc(d, b.data.id)
                        }
                    };
                    c.prototype.lc = function(b, d) {
                        var e = this;
                        this.Rh(b) && Nb(this.l, b)(Ra(D, function() {
                            var f = e.G.lc(b.contentWindow, d);
                            e.Xb.push({
                                G: f,
                                lf: b
                            })
                        }))
                    };
                    c.prototype.Yd = function(b) {
                        var d = this,
                            e = b.frameId;
                        b = b.data;
                        this.xd[e] || (this.xd[e] = {
                            data: []
                        });
                        var f = this.xd[e];
                        f.data = f.data.concat(b);
                        this.l.isNaN(f.qd) && x(function(g) {
                            "page" === g.type && (f.qd = g.data.recordStamp - d.G.ff())
                        }, f.data);
                        this.l.isNaN(f.qd) || (this.G.aa(A(function(g) {
                            g.stamp += f.qd;
                            g.stamp = d.l.Math.max(0, g.stamp);
                            return g
                        }, f.data)), f.data = [])
                    };
                    c.prototype.Rh = function(b) {
                        var d = b.getAttribute("src"),
                            e = b.getAttribute("sandbox");
                        return b.getAttribute("_ym_ignore") || e && !e.match(hv) || d && "about:blank" !==
                            d && (d = Sc(this.l, d).host) && S(this.l).host !== d ? !1 : n(b, "contentWindow.location.href")
                    };
                    return c
                }(db),
                jv = v(function(a) {
                    var c = n(a, "sessionStorage");
                    if (!c) return null;
                    try {
                        var b = c.getItem("__ym_tab_guid");
                        c = !1;
                        var d = n(a, "opener.sessionStorage");
                        try {
                            c = !!d && b === d.getItem("__ym_tab_guid")
                        } catch (e) {
                            c = !0
                        }
                        if (!b || c) b = gi(), a.sessionStorage.setItem("__ym_tab_guid", b);
                        return b
                    } catch (e) {
                        return null
                    }
                }),
                kv = function(a) {
                    function c(b, d, e) {
                        b = a.call(this, b, d, e) || this;
                        b.ne = b.L.H(b.ne, "ps");
                        return b
                    }
                    Na(c, a);
                    c.prototype.start =
                        function() {
                            this.G.sa().Bc({
                                nodes: [this.l.document.documentElement],
                                Uc: this.ne
                            })
                        };
                    c.prototype.ne = function(b) {
                        var d = this.G.xh(),
                            e = d.nh(),
                            f = S(this.l),
                            g = f.host,
                            h = f.protocol;
                        f = f.pathname;
                        var k = Oc(this.l),
                            l = k[0];
                        k = k[1];
                        this.G.Y("page", {
                            content: A(function(m) {
                                m.node = void 0;
                                return m
                            }, b),
                            base: e || "",
                            hasBase: !!e,
                            viewport: {
                                width: l,
                                height: k
                            },
                            title: this.l.document.title,
                            doctype: d.ph() || "",
                            address: this.l.location.href,
                            ua: this.l.navigator.userAgent,
                            referrer: this.l.document.referrer,
                            screen: {
                                width: this.l.screen.width,
                                height: this.l.screen.height
                            },
                            location: {
                                host: g,
                                protocol: h,
                                path: f
                            },
                            recordStamp: this.G.ff(),
                            tabId: jv(this.l)
                        }, "page", 0)
                    };
                    return c
                }(db),
                lv = ["addRule", "removeRule", "insertRule", "deleteRule"],
                mh = [
                    [function(a) {
                        function c(b, d, e) {
                            b = a.call(this, b, d, e) || this;
                            b.bb = {};
                            b.Yb = {};
                            b.Ne = 0;
                            b.Lc = b.L.H(b.Lc, "a");
                            b.wb = b.L.H(b.wb, "sr");
                            b.Mc = b.L.H(b.Mc, "r");
                            b.aa = b.L.H(b.aa, "d");
                            return b
                        }
                        Na(c, a);
                        c.prototype.start = function() {
                            var b = this.G.sa();
                            b.F("style", "NA:", this.Lc);
                            b.F("style", "NR:", this.Mc);
                            this.aa()
                        };
                        c.prototype.stop =
                            function() {
                                var b = this;
                                a.prototype.stop.call(this);
                                var d = this.G.sa();
                                d.ga("style", "NA:", this.Lc);
                                d.ga("style", "NR:", this.Mc);
                                this.aa();
                                ka(this.l, this.Ne);
                                x(function(e) {
                                    b.bb[e].sheet && b.If(b.bb[e].sheet)
                                }, ea(this.bb));
                                this.bb = {}
                            };
                        c.prototype.aa = function() {
                            var b = this;
                            x(function(d) {
                                var e = d[0];
                                d = d[1];
                                if (d.length) {
                                    for (var f = [], g = d[0].stamp, h = [], k = 0; k < d.length; k += 1) {
                                        var l = d[k],
                                            m = l.stamp;
                                        delete l.stamp;
                                        m <= g + 50 ? f.push(l) : (h.push(f), g = m, f = [l])
                                    }
                                    f.length && h.push(f);
                                    h.length && x(function(p) {
                                        b.G.Y("event", {
                                            target: Ia(e),
                                            changes: p
                                        }, "stylechange", g)
                                    }, h);
                                    delete b.Yb[e]
                                }
                            }, La(this.Yb));
                            this.Ne = T(this.l, this.aa, 100)
                        };
                        c.prototype.wb = function(b, d, e, f, g) {
                            void 0 === f && (f = "");
                            void 0 === g && (g = -1);
                            this.Yb[b] || (this.Yb[b] = []);
                            this.Yb[b].push({
                                op: d,
                                style: f,
                                index: g,
                                stamp: e
                            })
                        };
                        c.prototype.xi = function(b, d) {
                            var e = this,
                                f = b.addRule,
                                g = b.removeRule,
                                h = b.insertRule,
                                k = b.deleteRule;
                            O(f) && (b.addRule = function(l, m, p) {
                                e.wb(d, "a", e.G.stamp(), l + "{" + m + "}", p);
                                return f.call(b, l, m, p)
                            });
                            O(g) && (b.removeRule = function(l) {
                                e.wb(d, "r", e.G.stamp(), "", l);
                                return g.call(b,
                                    l)
                            });
                            O(h) && (b.insertRule = function(l, m) {
                                e.wb(d, "a", e.G.stamp(), l, m);
                                return h.call(b, l, m)
                            });
                            O(k) && (b.deleteRule = function(l) {
                                e.wb(d, "r", e.G.stamp(), "", l);
                                return k.call(b, l)
                            })
                        };
                        c.prototype.If = function(b) {
                            var d = this;
                            x(function(e) {
                                var f = d.l.CSSStyleSheet.prototype[e];
                                O(f) && (b[e] = H(f, b))
                            }, lv)
                        };
                        c.prototype.Zg = function(b) {
                            try {
                                return b.cssRules || b.rules
                            } catch (d) {
                                return null
                            }
                        };
                        c.prototype.Lc = function(b) {
                            var d = b.data;
                            b = d.id;
                            d = d.node;
                            if (d.sheet && !d.getAttribute("src") && !d.innerText) {
                                var e = d.sheet,
                                    f = this.Zg(e);
                                if (f && f.length) {
                                    for (var g = [], h = 0; h < f.length; h += 1) g.push({
                                        style: f[h].cssText,
                                        index: h,
                                        op: "a"
                                    });
                                    this.G.Y("event", {
                                        changes: g,
                                        target: b
                                    }, "stylechange")
                                }
                                this.xi(e, b);
                                this.bb[b] = d
                            }
                        };
                        c.prototype.Mc = function(b) {
                            b = b.data.id;
                            var d = this.bb[b];
                            d && (delete this.bb[b], d.sheet && this.If(d.sheet))
                        };
                        return c
                    }(db), "ss"],
                    [Lu, "in"],
                    [Iu, "mu"],
                    [Mu, "r"],
                    [Nu, "sc"],
                    [Pu, "mo"],
                    [Ru, "f"],
                    [Wu, "se"],
                    [Yu, "wf"],
                    [$u, "t"],
                    [av, "src"],
                    [bv, "z"],
                    [gv, "ks"]
                ];
            mh.push([iv, "if"]);
            mh.push([kv, "pa"]);
            var mv = v(function(a) {
                    var c = a.document;
                    return {
                        Dd: function() {
                            if (c.scrollingElement) return c.scrollingElement;
                            var b = 0 === ib(c.compatMode, "CSS1") ? c.documentElement : c.body;
                            return n(c, "documentElement.scrollHeight") >= n(c, "body.scrollHeight") ? b : null
                        },
                        vh: function() {
                            var b = a.screen;
                            if (!b) return 0;
                            var d = tb(u(b, n), ["orientation", "mozOrientation", "msOrientation"]);
                            return n(b, d + ".angle") || 0
                        },
                        Aj: u(a, rb),
                        mf: u(a, Bd),
                        zj: u(a, Ve)
                    }
                }),
                nv = function() {
                    function a(c, b) {
                        var d = this;
                        this.Mb = 0;
                        this.pd = [];
                        this.Lb = null;
                        this.va = this.Zb = this.Zf = !1;
                        this.recordStamp = 0;
                        this.xh = function() {
                            return d.page
                        };
                        this.Ad = function() {
                            return d.Mb
                        };
                        this.ff =
                            function() {
                                return d.recordStamp
                            };
                        this.th = function() {
                            return d.fb
                        };
                        this.ef = function() {
                            return d.Lb
                        };
                        this.sa = function() {
                            return d.Jd
                        };
                        this.stamp = function() {
                            return d.ye ? d.l.Math.max(d.ye(Z) - d.recordStamp, 0) : 0
                        };
                        this.Jb = function() {
                            return d.options
                        };
                        this.kb = function() {
                            return d.Bg
                        };
                        this.Y = function(f, g, h, k) {
                            void 0 === k && (k = d.stamp());
                            f = d.sh(f, g, h, k);
                            d.aa(f)
                        };
                        this.sh = function(f, g, h, k) {
                            void 0 === k && (k = d.stamp());
                            return {
                                type: f,
                                data: g,
                                stamp: k,
                                frameId: d.Mb,
                                event: h
                            }
                        };
                        this.aa = function(f) {
                            f = R(f) ? f : [f];
                            d.Zf && !d.Zb ? d.va ?
                                (f = A(function(g) {
                                    return g.frameId ? g : z(g, {
                                        frameId: d.Mb
                                    })
                                }, f), d.ef().Qf(f)) : d.Vb(f) : d.pd = d.pd.concat(f)
                        };
                        this.l = c;
                        var e = Lf(c, this, "R");
                        this.ue = e.H(this.ue, "s");
                        this.aa = e.H(this.aa, "sd");
                        e = J(c);
                        e.C("wv2e") && fe();
                        e.D("wv2e", !0);
                        this.options = b;
                        this.fb = fa(c);
                        this.Jd = new Ju(this.l, b);
                        this.Bg = mv(c);
                        this.Pe = A(function(f) {
                            return new f[0](c, d, f[1])
                        }, mh);
                        this.Oh();
                        this.page = lo(this.l);
                        this.ue()
                    }
                    a.prototype.start = function(c) {
                        this.Zf = !0;
                        this.Vb = c;
                        this.Nf()
                    };
                    a.prototype.stop = function() {
                        lh(this.l) && (x(function(c) {
                                return c.stop()
                            },
                            this.Pe), this.Jd.stop(), this.Lb && this.Lb.stop(), this.va || this.Y("event", {}, "eof"))
                    };
                    a.prototype.lc = function(c, b) {
                        var d = new a(c, z({}, this.options, {
                            frameId: b
                        }));
                        d.start(D);
                        return d
                    };
                    a.prototype.Oh = function() {
                        var c = this;
                        this.va = !!this.options.frameId;
                        this.Mb = this.options.frameId || 0;
                        this.Zb = !this.va;
                        var b = this.options.gg || [];
                        b.push(S(this.l).host);
                        this.Lb = mo(this.l, this, b);
                        b = this.Lb.zd();
                        rb(this.l) ? this.Zb && b.F(["i"], function(d) {
                            c.va = d.va;
                            c.Zb = !1;
                            d.frameId && (c.Mb = d.frameId);
                            c.Nf()
                        }) : this.Zb = this.va = !1
                    };
                    a.prototype.Nf = function() {
                        var c = We(this.pd);
                        this.aa(c)
                    };
                    a.prototype.ue = function() {
                        this.ye = hg(this.l);
                        this.recordStamp = this.ye(Z);
                        x(function(c) {
                            c.start()
                        }, this.Pe);
                        this.Jd.start()
                    };
                    return a
                }(),
                ov = function() {
                    return function(a, c, b) {
                        var d = this;
                        this.fd = this.Qb = !1;
                        this.Xa = [];
                        this.uf = [];
                        this.Se = [];
                        this.send = function(e, f, g) {
                            e = d.sender(e, d.kc);
                            f && g && e.then(f, g);
                            return e
                        };
                        this.we = function(e, f, g) {
                            return new K(function(h, k) {
                                e.push([f, h, k, g])
                            })
                        };
                        this.Ih = function() {
                            d.Xa = xe(function(g, h) {
                                    return g[3].partNum - h[3].partNum
                                },
                                d.Xa);
                            var e = N(function(g, h, k) {
                                    h = h[3];
                                    return g && k + 1 === h.partNum
                                }, !0, d.Xa),
                                f = !!d.Xa[d.Xa.length - 1][3].end;
                            return e && f
                        };
                        this.vd = function(e) {
                            th(d.l, e.slice(), function(f) {
                                d.send(f[0], f[1], f[2])
                            }, 20, "s.w2.sf.fes");
                            We(e)
                        };
                        this.fh = function() {
                            d.fd || (d.fd = !0, d.vd(d.uf), d.vd(d.Se))
                        };
                        this.Ig = function(e) {
                            return N(function(f, g) {
                                var h = "page" === g.type && !g.frameId,
                                    k = "eof" === g.data.type || "eof" === g.event,
                                    l = h && !!g.partNum;
                                return {
                                    ld: f.ld || l,
                                    kd: f.kd || h,
                                    jd: f.jd || k
                                }
                            }, {
                                kd: !1,
                                jd: !1,
                                ld: !1
                            }, e)
                        };
                        this.Gh = function(e, f, g) {
                            g ? (e =
                                d.we(d.Xa, e, f[0]), d.Ih() && (d.vd(d.Xa), d.Qb = !0)) : (d.Qb = !0, e = d.send(e));
                            return e
                        };
                        this.gf = function(e, f, g) {
                            var h;
                            f = {
                                J: (h = {}, h["wv-part"] = "" + g, h["wv-type"] = d.Hi, h),
                                K: Ja(),
                                ba: {
                                    da: f
                                }
                            };
                            e && f.K.D("bt", 1);
                            return f
                        };
                        this.Xg = function(e, f, g) {
                            e = d.gf(!1, e, g);
                            return d.Qb ? d.send(e) : d.we(d.Se, e, f)
                        };
                        this.bi = function(e, f, g) {
                            e = d.gf(!0, e, g);
                            if (d.Qb) return d.send(e);
                            var h = d.Ig(f);
                            g = h.kd;
                            var k = h.jd;
                            h = h.ld;
                            var l;
                            g && (l = d.Gh(e, f, h));
                            d.fd ? g || (l = d.send(e)) : (g || (l = d.we(d.uf, e, f)), (d.Qb || k) && d.fh());
                            return l
                        };
                        this.l = a;
                        this.Hi =
                            b;
                        this.sender = wa(a, "W", c);
                        this.kc = c
                    }
                }(),
                Zl = v(function(a) {
                    var c = J(a),
                        b = c.C("isEU");
                    if (X(b)) {
                        var d = Ia(ve(a, "is_gdpr") || "");
                        if (I(d, [0, 1])) c.D("isEU", d), b = !!d;
                        else if (a = Qa(a).C("wasSynced"), a = n(a, "params.eu")) c.D("isEU", a), b = !!a
                    }
                    return b
                }, function(a) {
                    return J(a).C("isEU")
                }),
                Gf = B("i.e", Zl),
                pv = B("i.ep", function(a) {
                    Zl(a)
                }),
                qv = B("w2", function(a, c) {
                    function b() {
                        h = !0
                    }
                    var d = J(a),
                        e = L(c);
                    if (!c.Ab || qd(a) || !a.MutationObserver || !Ea("Element", a.Element)) return D;
                    Ea("MutationObserver", a.MutationObserver) || pc(a, e).warn("w2mo");
                    var f = Ha(function(k, l) {
                            pa(c, l)["catch"](k)
                        }),
                        g = Nb(a)(Tg(C([a, c], jo)))(pl(function(k) {
                            return new nv(a, k)
                        })),
                        h = !1;
                    Hr([g, f])(Ra(E(a, "wv2.R.c"), function(k) {
                        var l = k[0];
                        k = k[1];
                        if (!h) {
                            b = function() {
                                h || (h = !0, l && l.stop())
                            };
                            var m = d.C("wv2Counter");
                            if (!ii(a, k) || m) b();
                            else if (fa(a).F(a, ["beforeunload", "unload"], b), d.D("wv2Counter", e), d.D("stopRecorder", b), k = ui(a, "7", "6")) {
                                m = new ov(a, c, k.type);
                                var p = Wl.bf(e, "m", H(m.bi, m), k, a),
                                    q = Wl.bf(e, "e", H(m.Xg, m), k, a);
                                k = ko();
                                m = k.li;
                                q.F("ag", k.zg);
                                q.F("p", m);
                                p.F("see", function(t) {
                                    var y = !1;
                                    x(function(F) {
                                        "page" === F.type && (y = !0)
                                    }, t);
                                    y && (h || q.push({
                                        type: "event",
                                        event: "fatalError",
                                        data: {
                                            code: "invalid-snapshot",
                                            Yg: "p.s.f",
                                            stack: ""
                                        }
                                    }), b())
                                });
                                var r = Wb(function(t) {
                                    "eof" === n(t, "data.type") || "eof" === t.event ? (q.push(t), p.push(t), q.flush(!0), p.flush(!0)) : ("event" === t.type ? q : p).push(t)
                                });
                                T(a, b, 864E5);
                                Tb(a, function() {
                                    var t, y;
                                    ub(a, (t = {}, t.counterKey = e, t.name = "webvisor", t.data = (y = {}, y.version = 2, y), t));
                                    l.start(r)
                                })
                            }
                        }
                    }));
                    return function() {
                        return b()
                    }
                }),
                rv = B("w2.cs", function(a, c) {
                    var b, d = L(c);
                    eg(a,
                        d, (b = {}, b.webvisor = !!c.Ab, b))
                }),
                sv = ["rt", "mf"],
                Ff = v(Jc, L),
                ci = w(sd, gc),
                tv = mb("isp", function(a, c) {
                    pa(c, function(b) {
                        var d = tb(function(h) {
                            return n(b, "settings." + h)
                        }, sv);
                        if (d && Zd(a)) {
                            var e = yf(b) && !ne(a),
                                f = Ff(c);
                            z(f, {
                                Rb: d,
                                status: e ? 3 : 4
                            });
                            if (!e) {
                                e = fo(a, c, d);
                                var g = function(h) {
                                    f.status = h
                                };
                                return ("mf" === d ? ho : go)(a, c, e).then(u(1, g))["catch"](u(2, g))
                            }
                        }
                    })["catch"](E(a, "l.isp"))
                }),
                $l = B("fbq.o", function(a, c, b) {
                    var d = n(a, "fbq");
                    if (d && d.callMethod) {
                        var e = function() {
                            var g = Oa(arguments),
                                h = d.apply(void 0, g);
                            c(g);
                            return h
                        };
                        z(e, d);
                        b && x(c, b);
                        a.fbq = e
                    } else var f = T(a, C([a, c].concat(Ca(d && d.queue)), $l), 1E3, "fbq.d");
                    return H(ka, null, a, f)
                }),
                gd, Ib, hd, nh = (gd = {}, gd.add_to_wishlist = "add-to-wishlist", gd.begin_checkout = "begin-checkout", gd.generate_lead = "submit-lead", gd.add_payment_info = "add-payment-info", gd),
                oh = (Ib = {}, Ib.AddToCart = "add-to-cart", Ib.Lead = "submit-lead", Ib.InitiateCheckout = "begin-checkout", Ib.Purchase = "purchase", Ib.CompleteRegistration = "register", Ib.Contact = "submit-contact", Ib.AddPaymentInfo = "add-payment-info", Ib.AddToWishlist =
                    "add-to-wishlist", Ib.Subscribe = "subscribe", Ib),
                co = (hd = {}, hd["1"] = nh, hd["2"] = nh, hd["3"] = nh, hd["0"] = oh, hd),
                eo = [oh.AddToCart, oh.Purchase],
                uv = sa(function(a, c) {
                    var b = n(c, "ecommerce"),
                        d = n(c, "event") || "";
                    if (!(b = b && d && {
                            version: "3",
                            rc: d
                        })) a: {
                        if (R(c) || Sa(c))
                            if (b = Oa(c), d = b[1], "event" === b[0] && d) {
                                b = {
                                    version: "2",
                                    rc: d
                                };
                                break a
                            }
                        b = void 0
                    }
                    b || (b = (b = n(c, "ecommerce")) && {
                        version: "1",
                        rc: G(",", ea(b))
                    });
                    b && a(b)
                }),
                vv = B("ag.e", function(a, c) {
                    if ("0" === c.ca) {
                        var b = [],
                            d = E(a, "ag.s", C([la, b], x));
                        pa(c, function(e) {
                            if (n(e, "settings.auto_goals") &&
                                Aa(a, c) && (e = Ee(a, c, "autogoal").reachGoal)) {
                                e = C([e, c.sd], bo);
                                var f = uv(e);
                                e = C([a, e], ao);
                                b.push($l(a, e));
                                b.push(kj(a, "dataLayer", function(g) {
                                    g.za.F(f)
                                }))
                            }
                        });
                        return d
                    }
                }),
                wv = /[^\d.,]/g,
                xv = /[.,]$/,
                Zn = B("ep.pp", function(a, c) {
                    if (!c) return 0;
                    a: {
                        var b = c.replace(wv, "").replace(xv, "");
                        var d = "0" === b[b.length - 1];
                        for (var e = b.length; 0 < e && !(3 < b.length - e + 1 && d); --e) {
                            var f = b[e - 1];
                            if (I(f, [",", "."])) {
                                d = f;
                                break a
                            }
                        }
                        d = ""
                    }
                    b = d ? c.split(d) : [c];
                    d = d ? b[1] : "00";
                    b = parseFloat(Ub(b[0]) + "." + Ub(d));
                    d = Math.pow(10, 8) - .01;
                    a.isNaN(b) ? b = 0 :
                        (b = a.Math.min(b, d), b = a.Math.max(b, 0));
                    return b
                }),
                yv = [
                    [
                        ["EUR", "\u20ac"], "978"
                    ],
                    [
                        ["USD", "\u0423\\.\u0415\\.", "\\$"], "840"
                    ],
                    [
                        ["UAH", "\u0413\u0420\u041d", "\u20b4"], "980"
                    ],
                    ["\u0422\u0413 KZT \u20b8 \u0422\u04a2\u0413 TENGE \u0422\u0415\u041d\u0413\u0415".split(" "), "398"],
                    [
                        ["GBP", "\u00a3", "UKL"], "826"
                    ],
                    ["RUR RUB \u0420 \u0420\u0423\u0411 \u20bd P \u0420UB P\u0423\u0411 P\u0423B PY\u0411 \u0420Y\u0411 \u0420\u0423B P\u0423\u0411".split(" "), "643"]
                ],
                zv = v(function(a) {
                    return new RegExp(G("|", a), "i")
                }),
                Av =
                B("ep.cp", function(a) {
                    if (!a) return "643";
                    var c = aj(a);
                    return (a = tb(function(b) {
                        return zv(b[0]).test(c)
                    }, yv)) ? a[1] : "643"
                }),
                Bv = v(function() {
                    function a() {
                        var k = h + "0",
                            l = h + "1";
                        f[k] ? f[l] ? (h = h.slice(0, -1), --g) : (e[l] = b(8), f[l] = 1) : (e[k] = b(8), f[k] = 1)
                    }

                    function c() {
                        var k = h + "1";
                        f[h + "0"] ? f[k] ? (h = h.slice(0, -1), --g) : (h += "1", f[h] = 1) : (h += "0", f[h] = 1)
                    }

                    function b(k) {
                        void 0 === k && (k = 1);
                        var l = d.slice(g, g + k);
                        g += k;
                        return l
                    }
                    for (var d = G("", ai("Cy2FcreLJLpYXW3BXFJqldVsGMwDcBw2BGnHL5uj1TKstzse3piMo3Osz+EqDotgqs1TIoZvKtMKDaSRFztgUS8qkqZcaETgKWM54tCpTXjV5vW5OrjBpC0jF4mspUBQGd95fNSfv+vz+g+Hze33Hg8by+Yen1PP6zsdl7PQCwX9mf+f7FMb9x/Pw+v2Pp8Xy74eTwuBwTt913u4On1XW6hxOO5nIzFam00tC218S0kaeugpqST+XliLOlMoTpRQkuewUxoy4CT3efWtdFjSAAm+1BkjIhyeU4vGOf13a6U8wzNY4bGo6DIUemE7N3SBojDr7ezXahpWF022y8mma1NuTnZbq8XZZlPStejfG/CsbPhV6/bSnA==")),
                            e = {}, f = {}, g = 1, h = ""; g < d.length - 1;)("0" === b() ? c : a)();
                    return e
                }),
                Wn = B("ep.dec", function(a, c) {
                    if (!c || qd(a)) return [];
                    var b = ai(c),
                        d = b[1],
                        e = b[2],
                        f = b.slice(3);
                    if (2 !== ye(b[0])) return [];
                    b = Bv();
                    f = G("", f);
                    e = ye(d + e);
                    var g = "";
                    d = "";
                    for (var h = 0; d.length < e && f[h];) g += f[h], b[g] && (d += String.fromCharCode(ye(b[g])), g = ""), h += 1;
                    b = "";
                    for (f = 0; f < d.length;) e = d.charCodeAt(f), 128 > e ? (b += String.fromCharCode(e), f++) : 191 < e && 224 > e ? (g = d.charCodeAt(f + 1), b += String.fromCharCode((e & 31) << 6 | g & 63), f += 2) : (g = d.charCodeAt(f + 1), b += String.fromCharCode((e &
                        15) << 12 | (g & 63) << 6 | d.charCodeAt(f + 2) & 63), f += 3);
                    d = zb(a, b);
                    return R(d) ? A(ls, d) : []
                }),
                Yn = B("ep.ent", function(a, c, b) {
                    a = "" + Xa(a, 10, 99);
                    b = "" + 100 * c + b + a;
                    if (16 < Sa(b)) return "";
                    b = bi("0", 16, b);
                    c = b.slice(0, 8);
                    b = b.slice(-8);
                    c = (+c ^ 92844).toString(35);
                    b = (+b ^ 92844).toString(35);
                    return "" + c + "z" + b
                }),
                am = w($h, Av),
                bm = B("ep.ctp", function(a, c, b, d) {
                    var e = am(a, b),
                        f = Zh(a, d);
                    Yh(a, c, e, f);
                    Ea("MutationObserver", a.MutationObserver) && (new a.MutationObserver(function() {
                        var g = am(a, b),
                            h = Zh(a, d);
                        if (e !== g || f !== h) e = g, f = h, Yh(a, c, e, f)
                    })).observe(a.document.body, {
                        attributes: !0,
                        childList: !0,
                        subtree: !0,
                        characterData: !0
                    })
                }),
                Cv = B("ep.chp", function(a, c, b, d, e) {
                    b && Ef(a, c);
                    return d || e ? fa(a).F(a.document, ["click"], E(a, "ep.chp.cl", C([a, c, d, e], Xn))) : D
                }),
                Gv = B("ep.i", function(a, c) {
                    if (od(a)) return Vn(a, c).then(function(b) {
                        var d = b.Tg,
                            e = d[0],
                            f = d[1],
                            g = d[2],
                            h = d[3],
                            k = d[4],
                            l = d[5],
                            m = d[6],
                            p = d[7],
                            q = d[8],
                            r = d[9],
                            t = d[10],
                            y = d[11],
                            F = d[12],
                            P = d[13],
                            M = d[14],
                            ma = d[15];
                        if (!b.isEnabled) return K.resolve(D);
                        var xa = qe(a, e),
                            Db = qe(a, h),
                            Hd = qe(a, m),
                            Ce = qe(a, q),
                            Dv = "" + e + f + g === "" + h + k + l;
                        return new K(function(Ev,
                            Fv) {
                            Nb(a)(Ra(Fv, function() {
                                xa && bm(a, c, f, g, t, y, F);
                                Db && !Dv && bm(a, c, k, l, P, M, ma);
                                Ev(Cv(a, c, Hd || Ce, p, r))
                            }))
                        })
                    })
                }),
                Fn = ["RTCPeerConnection", "mozRTCPeerConnection", "webkitRTCPeerConnection"],
                Hv = B("cc.i", function(a, c) {
                    var b = C([a, c], Un);
                    b = C([a, b, 300, void 0], T);
                    pa(c, b)
                }),
                Iv = u("9-d5ve+.r%7", Q),
                Jv = B("ad", function(a, c) {
                    if (!c.Va) {
                        var b = J(a);
                        if (!b.C("adBlockEnabled")) {
                            var d = function(m) {
                                    I(m, ["2", "1"]) && b.D("adBlockEnabled", m)
                                },
                                e = Uc(a),
                                f = e.C("isad");
                            if (f) d(f);
                            else {
                                var g = u("adStatus", b.D),
                                    h = function(m) {
                                        m = m ? "1" : "2";
                                        d(m);
                                        g("complete");
                                        e.D("isad", m, 1200);
                                        return m
                                    },
                                    k = wa(a, "adb", c);
                                if (!b.C("adStatus")) {
                                    g("process");
                                    var l = "metrika/a" + Iv().replace(/[^a-v]+/g, "") + "t.gif";
                                    Rn(a, function() {
                                        return k({
                                            na: {
                                                Ba: l
                                            }
                                        }).then(u(!1, h))["catch"](u(!0, h))
                                    })
                                }
                            }
                        }
                    }
                }),
                Kv = B("pr.p", function(a, c) {
                    var b, d;
                    if (rg(a)) {
                        var e = wa(a, "5", c),
                            f = Ja((b = {}, b.pq = 1, b.ar = 1, b));
                        e({
                            K: f,
                            J: (d = {}, d["page-url"] = S(a).href, d["page-ref"] = n(a, "document.referrer") || "", d)
                        }, c)["catch"](E(a, "pr.p.s"))
                    }
                }),
                Xh = !1,
                Lv = B("fid", function(a) {
                    var c, b = D;
                    if (!O(a.PerformanceObserver)) return b;
                    var d = J(a);
                    if (d.C("fido")) return b;
                    d.D("fido", !0);
                    var e = new a.PerformanceObserver(E(a, "fid", function(f) {
                        f = f.getEntries()[0];
                        d.D("fid", a.Math.round(100 * (f.processingStart - f.startTime)));
                        b()
                    }));
                    b = function() {
                        return e.disconnect()
                    };
                    try {
                        e.observe((c = {}, c.type = "first-input", c.buffered = !0, c))
                    } catch (f) {}
                    return b
                }),
                Mv = B("lt.p", mb("lt.p", function(a) {
                    var c;
                    if (Ea("PerformanceObserver", a.PerformanceObserver)) {
                        var b = 0,
                            d = new a.PerformanceObserver(E(a, "lt.o", function(e) {
                                e && e.getEntries && (e = e.getEntries(), b = N(function(f,
                                    g) {
                                    return f + g.duration
                                }, b, e), Wd(a).D("lt", b))
                            }));
                        try {
                            d.observe((c = {}, c.type = "longtask", c.buffered = !0, c))
                        } catch (e) {
                            return
                        }
                        return function() {
                            return d.disconnect()
                        }
                    }
                })),
                Nv = v(w(U("performance.memory.jsHeapSizeLimit"), Fa("concat", ""))),
                Ov = ["availWidth", "availHeight", "availTop"],
                Pv = "appName vendor deviceMemory hardwareConcurrency maxTouchPoints appVersion productSub appCodeName vendorSub".split(" "),
                Qv = ["webgl", "experimental-webgl"],
                Pn = [-.2, -.9, 0, .4, -.26, 0, 0, .732134444, 0],
                Bf = u(Ta("ccf"), Va),
                On = "prefers-reduced-motion;prefers-reduced-transparency;prefers-color-scheme: dark;prefers-color-scheme: light;pointer: none;pointer: coarse;pointer: fine;any-pointer: none;any-pointer: coarse;any-pointer: fine;scan: interlace;scan: progressive;color-gamut: srgb;color-gamut: p3;color-gamut: rec2020;update: fast;update: slow;update: none;grid: 0;grid: 2;hover: hover;inverted-colors: inverted;inverted-colors: none".split(";"),
                Vh = "video/ogg video/mp4 video/webm audio/x-aiff audio/x-m4a audio/mpeg audio/aac audio/wav audio/ogg audio/mp4".split(" "),
                Mn = "theora vorbis 1 avc1.4D401E mp4a.40.2 vp8.0 mp4a.40.5".split(" "),
                Hn = v(Wi),
                Uh = v(zb, bb),
                Rv = B("phc.p", function(a, c) {
                    if (!Bl(a)) return pa(c, function(b) {
                        var d = c.id,
                            e = Pc(a, void 0, d),
                            f = e.C("phc_settings") || "";
                        if (b = n(b, "settings.phchange")) {
                            var g = Ab(a, b) || "";
                            g !== f && e.D("phc_settings", g)
                        } else f && (b = Uh(a, f));
                        e = n(b, "clientId");
                        f = n(b, "orderId");
                        b = n(b, "phones") || [];
                        e && f && b.length && (f = {
                            Eb: "",
                            Pb: "",
                            Xf: 0,
                            ja: {},
                            Aa: [],
                            pf: !1,
                            hb: !0,
                            l: a,
                            kc: c
                        }, z(f, {
                            pf: !0
                        }), Th(a, d, f), b = Jd(a), e = Yi(a, b, 1E3), d = H(Th, null, a, d, f), e.F(d), Zi(a, b))
                    })
                }),
                ph = v(function(a, c) {
                    var b = J(a),
                        d = Qa(a),
                        e = [],
                        f = C([a, c, b, d], cq);
                    Cd(a) || dq(a, "14.1") || e.push(C([En, "pp", ""], f));
                    var g = !Dl(a) || zf(a, 68);
                    g && e.push(C([Gn, "pu", ""], f));
                    !g || d.Ld || Zd(a) || (e.push(C([Dn, "zzlc", "na"], f)), e.push(C([Cn, "cc", ""], f)));
                    return e.length ? {
                        Da: function(h, k) {
                            if (0 === b.C("isEU")) try {
                                x(De, e)
                            } catch (l) {}
                            k()
                        },
                        N: function(h, k) {
                            var l = h.K;
                            if (l && 0 === b.C("isEU")) try {
                                x(Ha(l),
                                    e)
                            } catch (m) {}
                            k()
                        }
                    } : {}
                }, w(bb, L)),
                Sv = w(function(a) {
                    return (a = n(a, "navigator.plugins")) && Sa(a) ? w(Ca, va, Ls(function(c, b) {
                        return c.name > b.name ? 1 : 2
                    }), Wb($p))(a) : ""
                }, Ae(",")),
                Tv = function(a) {
                    return function(c) {
                        var b = fb(c);
                        if (!b) return "";
                        b = b("canvas");
                        var d = [],
                            e = a(),
                            f = e.$g;
                        e = e.Qg;
                        try {
                            var g = Fa("getContext", b);
                            d = A(w(Q, g), e)
                        } catch (h) {
                            return ""
                        }
                        return (g = tb(Q, d)) ? f(c, {
                            canvas: b,
                            Fg: g
                        }) : ""
                    }
                }(function() {
                    return {
                        Qg: Qv,
                        $g: yn
                    }
                }),
                wn = ["name", "lang", "localService", "voiceURI", "default"],
                un = gb(/[a-z\u0430-\u044f\u0451,.]/gi),
                Uv = B("ice", function(a, c, b) {
                    (c = Aa(a, c)) && (b = Nh(a, b)) && Mh(a, c, b)
                }),
                Vv = B("ice", function(a, c, b) {
                    (c = Aa(a, c)) && (b = Nh(a, b)) && yj(a, b.Qh).then(C([a, c, b], Mh), E(a, "ice.s"))
                }),
                Wv = ["text", "email", "tel"],
                Xv = ["cc-", "name", "shipping"],
                Yv = B("icei", function(a, c) {
                    if (xl(a)) {
                        var b = !1,
                            d = D,
                            e = D;
                        pa(c, function(f) {
                            if (!(Gf(a) || n(f, "settings.eu") || b)) {
                                f = n(f, "settings.cf") ? Vv : Uv;
                                var g = C([a, c], f),
                                    h = function(k) {
                                        return Pf(a, k) || !I(k.type, Wv) || $a(Gb, A(u(k.autocomplete, eb), Xv)) ? !1 : !0
                                    };
                                d = Qh(a, "input", ["blur"], g, h);
                                e = Qh(a, "form", ["submit"],
                                    function(k) {
                                        var l = k.target;
                                        l && (l = jb("input", l), x(function(m) {
                                            h(m) && g({
                                                target: m,
                                                isTrusted: k.isTrusted
                                            })
                                        }, l))
                                    })
                            }
                        });
                        return function() {
                            b = !0;
                            d();
                            e()
                        }
                    }
                }),
                Lh, Zv = B("p.ai", function(a, c) {
                    if (Cd(a) || sf(a)) return pa(c, function(b) {
                        var d;
                        if (b = n(b, "settings.sbp")) return Kh(a, z({}, b, (d = {}, d.c = c.id, d)), 10)
                    })
                }),
                $v = "architecture bitness model platformVersion uaFullVersion fullVersionList".split(" "),
                cm = mb("uah", function(a) {
                    if (!Ea("getHighEntropyValues", n(a, "navigator.userAgentData.getHighEntropyValues"))) return K.reject("0");
                    try {
                        return a.navigator.userAgentData.getHighEntropyValues($v).then(function(c) {
                            if (!na(c)) throw "2";
                            return c
                        }, function() {
                            throw "1";
                        })
                    } catch (c) {
                        return K.reject("3")
                    }
                }),
                dm = new RegExp(G("|", "yandex.com/bots;Googlebot;APIs-Google;Mediapartners-Google;AdsBot-Google;FeedFetcher-Google;Google-Read-Aloud;DuplexWeb-Google;Google Favicon;googleweblight;Lighthouse;Mail.RU_Bot;StackRambler;Slurp;msnbot;bingbot;www.baidu.com/search/spi_?der.htm".split(";")).replace(/[./]/g, "\\$&")),
                nn = v(function(a) {
                    var c = lb(a);
                    return (c =
                        dm.test(c)) ? K.resolve(c) : cm(a).then(function(b) {
                        try {
                            return N(function(d, e) {
                                return d || dm.test(e.brand)
                            }, !1, b.brands)
                        } catch (d) {
                            return !1
                        }
                    }, u(!1, Q))
                }),
                vc = ["0", "1", "2", "3"],
                Qc = vc[0],
                rf = vc[1],
                aw = vc[2],
                em = ["GDPR-ok-view-detailed-0", "GDPR-ok-view-detailed-1", "GDPR-ok-view-detailed-2", "GDPR-ok-view-detailed-3"],
                Ih = ["GDPR-ok-view-default", "GDPR-ok-view-detailed"].concat(em),
                qf = "GDPR-ok GDPR-cross GDPR-cancel 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 GDPR-settings GDPR-ok-view-default GDPR-ok-view-detailed 21 22 23".split(" ").concat(em).concat(["28",
                    "29", "30", "31"
                ]),
                bw = "3 13 14 31 15 16 17 28".split(" "),
                le = w(Wb(U("ymetrikaEvent.type")), Ks(uc(qf))),
                cw = {
                    Yh: !0,
                    url: "https://yastatic.net/s3/gdpr/v3/gdpr",
                    Af: "",
                    sf: "az be en es et fi fr hy ka kk ky lt lv no pt ro ru sl tg tr uz cs da de el hr it nl pl sk sv".split(" ")
                },
                qn = mb("gdpr", function(a, c, b, d, e) {
                    function f(p) {
                        c("10");
                        b.F(Ih, function(q) {
                            var r;
                            q = q.type;
                            l.Tf((r = {}, r.type = q, r));
                            p({
                                value: Jh(q)
                            })
                        })
                    }
                    var g = void 0 === e ? cw : e;
                    e = g.url;
                    var h = g.Af,
                        k = g.Yh;
                    g = tn(a, g.sf, d.gj);
                    var l = oe(a, d);
                    if (!l) return K.resolve({
                        value: Qc,
                        Nd: !0
                    });
                    if (a._yaGdprLoaded) return new K(function(p) {
                        c("7");
                        f(p)
                    });
                    var m = Mc(a, {
                        src: "" + e + (k ? "" : g) + h + ".js"
                    });
                    return new K(function(p, q) {
                        m ? (c("7"), m.onerror = function() {
                            var r;
                            c("9");
                            l.Tf((r = {}, r.type = "GDPR-ok-view-default", r));
                            p(null)
                        }, m.onload = u(p, f)) : (c("9"), q(Ta("gdp.e")))
                    })
                }),
                bc, sn = (bc = {}, bc["GDPR-ok"] = "ok", bc["GDPR-ok-view-default"] = "ok-default", bc["GDPR-ok-view-detailed"] = "ok-detailed", bc["GDPR-ok-view-detailed-0"] = "ok-detailed-all", bc["GDPR-ok-view-detailed-1"] = "ok-detailed-tech", bc["GDPR-ok-view-detailed-2"] =
                    "ok-detailed-tech-analytics", bc["GDPR-ok-view-detailed-3"] = "ok-detailed-tech-other", bc),
                ln = "az be en es et fi fr hy ka kk ky lt lv no pt ro ru sl tg tr uz ar he sr uk zh".split(" "),
                Hh = [],
                Fh = Fa("push", Hh),
                kn = v(function(a, c) {
                    var b = c.C("gdpr");
                    return I(b, vc) ? "-" + b : ""
                }),
                fm = v(Id),
                dw = v(function() {
                    var a = N(function(c, b) {
                        "ru" !== b && (c[b] = Ll + "." + b);
                        return c
                    }, {}, Bg);
                    x(function(c) {
                        a[c] = c
                    }, ea(Gl));
                    return a
                }),
                bn = v(function(a) {
                    a = S(a).hostname;
                    return (a = tb(w(U("1"), Xi("test"), vb(la)(a)), La(Gl))) && a[0]
                }),
                gm = function(a,
                    c) {
                    return function(b, d) {
                        var e = L(d);
                        e = dw(e);
                        var f = $m(b, e),
                            g = J(b),
                            h = rb(b);
                        return Zd(b) || Ud(b) ? {} : {
                            N: function(k, l) {
                                var m = k.K,
                                    p = Dh(b);
                                m = !(m && m.C("pv"));
                                if (!p || h || m || !f.length) return l();
                                if (g.C("startSync")) fm(b).push(l);
                                else {
                                    g.D("startSync", !0);
                                    p = C([b, f, D, !1], a);
                                    m = tf[0];
                                    if (!m) return l();
                                    m(b).then(p).then(l, w(we(l), E(b, c)))["catch"](D)
                                }
                            }
                        }
                    }
                }(function(a, c, b, d) {
                    var e = ja(a),
                        f = J(a),
                        g = Qa(a);
                    b = ah(a, "c");
                    var h = Zb(a, b);
                    return Bb(function(k, l) {
                        function m() {
                            var r = g.C("synced");
                            f.D("startSync", !1);
                            r && (r[l.$h] = p, g.D("synced",
                                r));
                            r = fm(a);
                            x(la, r);
                            We(r)
                        }
                        var p, q = h({
                            ba: {
                                ha: ["sync.cook"],
                                Qa: 1500
                            }
                        }, [Ga.Sa + "//" + l.Ni + "/sync_cookie_image_check" + (d ? "_secondary" : "")]).then(function() {
                            p = e(qb);
                            m()
                        })["catch"](function() {
                            p = e(qb) - 1435;
                            m()
                        });
                        q = u(q, Q);
                        return k.then(q)
                    }, K.resolve(), c)["catch"](E(a, "ctl"))
                }, "sy.c"),
                Jb, Ym = (Jb = {}, Jb.brands = "chu", Jb.architecture = "cha", Jb.bitness = "chb", Jb.uaFullVersion = "chf", Jb.fullVersionList = "chl", Jb.mobile = "chm", Jb.model = "cho", Jb.platform = "chp", Jb.platformVersion = "chv", Jb),
                Vm = v(function(a) {
                    return cm(a).then(Wm,
                        Zm)
                }),
                ew = mb("ot", function(a, c) {
                    if (Ne(a)) {
                        var b = fa(a);
                        return pa(c, E(a, "ot.s", function(d) {
                            if (n(d, "settings.oauth")) {
                                var e = [],
                                    f = sd(a, c);
                                e.push(b.F(a, ["message"], E(a, "ot.m", u(f, Um))));
                                Nb(a)(Ra(D, E(a, "ot.b", function() {
                                    function g(q) {
                                        var r, t = q.href;
                                        t && dh(t, "https://oauth.yandex.ru/") && !eb(t, "_ym_uid=") && (t = eb(t, "?") ? "&" : "?", q.href += "" + t + Ec((r = {}, r._ym_uid = f, r.mc = "v", r)), b.F(q, ["click"], E(a, "ot.click", function() {
                                            var y = "et=" + l(Z);
                                            q.href += "&" + y
                                        })))
                                    }
                                    var h, k = a.document.body,
                                        l = ja(a),
                                        m = jb("a", k);
                                    x(g, m);
                                    if (Ea("MutationObserver",
                                            a.MutationObserver)) {
                                        m = new a.MutationObserver(E(a, "ot.m", u(function(q) {
                                            q = q.addedNodes;
                                            for (var r = 0; r < q.length; r += 1) {
                                                var t = q[r];
                                                "A" === t.nodeName && g(t)
                                            }
                                        }, x)));
                                        var p = (h = {}, h.childList = !0, h.subtree = !0, h);
                                        m.observe(k, p);
                                        e.push(H(m.disconnect, m))
                                    }
                                })));
                                return C([De, e], x)
                            }
                        }))
                    }
                }),
                fw = B("p.cta", function(a) {
                    Nb(a)(Ra(D, function() {
                        var c = J(a);
                        if (Sm(a.document)) {
                            var b = 0;
                            if (di(a, se, "cta")) {
                                var d = D,
                                    e = function() {
                                        ei(se, "cta");
                                        d();
                                        ka(a, b)
                                    };
                                d = fa(a).F(a, ["message"], B("p.cta.o", C([a, c, e], Tm)));
                                b = T(a, e, 1500)
                            } else c.D("cta.e",
                                "if")
                        } else c.D("cta.e", "ns")
                    }))
                }),
                yh = ["bidResponse", "bidAdjustment", "bidWon", "bidRequested", "bidTimeout"],
                xh = ["adRenderSucceeded", "adRenderFailed"],
                Pm = ["cpm", "currency", "netRevenue", "requestTimestamp", "responseTimestamp"],
                Om = ld(yh, xh, ["auctionInit", "auctionEnd"]),
                ua = {},
                gw = B("pj", function(a, c) {
                    var b, d = Aa(a, c),
                        e = d && d.params;
                    return e ? (b = {}, b.pbjs = function(f) {
                            R(f) && (f = ha(Gb, A(function(g) {
                                if (na(g) && g.data && g.event && na(g.data)) {
                                    var h = n(g, "data.args");
                                    return h ? {
                                        event: g.event,
                                        data: h
                                    } : g
                                }
                            }, f)), Nm(f), Qm(a, e))
                        },
                        b) : D
                }),
                Lm = /(\D\d*)/g,
                Mm = v(function() {
                    var a = Yf();
                    return N(function(c, b) {
                        c[a[b]] = b;
                        return c
                    }, {}, ea(a))
                }),
                hw = B("g.v.e", function(a, c) {
                    return pa(c, E(a, "g.v.t", function(b) {
                        var d = Aa(a, c);
                        if (d && (b = n(b, "settings.goal_values"))) {
                            var e = ha(w(U("url"), u(a, Gm)), b);
                            if (0 !== e.length) {
                                b = fa(a);
                                var f = [];
                                e = C([a, function(g) {
                                    var h, k;
                                    return d.params((h = {}, h.__ym = (k = {}, k.goal_values = g, k), h))
                                }, e], Jm);
                                f.push(b.F(a, ["click"], E(a, "g.v.c", C([e], Hm))));
                                f.push(b.F(a, ["submit"], E(a, "g.v.s", C([a, e], Im))));
                                return C([w(Q, la), f], x)
                            }
                        }
                    }))
                }),
                ff = "close stop focus blur open alert confirm prompt print postMessage captureEvents releaseEvents getSelection getComputedStyle matchMedia moveTo moveBy resizeTo resizeBy scroll scrollTo scrollBy getDefaultComputedStyle scrollByLines scrollByPages find dump requestIdleCallback cancelIdleCallback requestAnimationFrame cancelAnimationFrame reportError setTimeout clearTimeout setInterval clearInterval queueMicrotask fetch self history customElements event frames opener parent frameElement navigator clientInformation external performance visualViewport crypto speechSynthesis localStorage origin indexedDB caches sessionStorage window document location top".split(" "),
                mf = {},
                uh = D,
                iw = v(function(a, c) {
                    uh = c
                }),
                id, Cm = (id = {}, id.copyFromWindow = function(a, c, b) {
                    if (I(b, ff) || dh(b, "on")) throw Pa("rwp");
                    c = a[b];
                    if (ca(c) || mc(a, c) || ia(c) || O(c)) return c;
                    if (R(c)) return Vd(c);
                    if (na(c)) return Fm(c)
                }, id.loadScript = function(a, c, b, d, e) {
                    c = O(d) ? lf("ls.ol", function() {
                        return d.apply(null)
                    }) : D;
                    var f = O(e) ? lf("ls.ol", function() {
                        return e.apply(null)
                    }) : void 0;
                    Dm(a, b, c, f)
                }, id.callFromWindow = function(a, c, b) {
                    for (var d = [], e = 3; e < arguments.length; e++) d[e - 3] = arguments[e];
                    if (I(b, ff)) throw Pa("rwp");
                    e =
                        n(a, b);
                    if (!O(e)) throw Pa("wenf");
                    return e.apply(void 0, d)
                }, id.createArgumentsQueue = function(a, c, b, d) {
                    function e() {
                        for (var g = 0; g < arguments.length; g++);
                        f.push(arguments)
                    }
                    if (0 !== b.length && 0 !== d.length && !n(a, b) && !n(a, d)) {
                        c = b.split(".");
                        d = d.split(".");
                        if (I(c[0], ff) || I(d[0], ff)) throw Pa("rwp");
                        var f = [];
                        vh(a, c)[c[c.length - 1]] = e;
                        vh(a, d)[d[d.length - 1]] = f;
                        return e
                    }
                }, id),
                jw = ["ymab", "rcmx", "yaSurvey", "ym_debug"],
                hm = v(function(a) {
                    iw(a, function(c, b) {
                        Rc(a, "ytm." + c, b)
                    });
                    return function(c) {
                        vm(c) && x(function(b) {
                            if (R(b) &&
                                1 === b[0]) {
                                var d = b[1];
                                I(d, jw) && lf("p." + d, wm)(a, b)
                            }
                        }, c.code)
                    }
                }),
                kw = B("y.t.m", function(a, c) {
                    return pa(c, E(a, "y.t.t", function(b) {
                        if (b = n(b, "settings.aytm")) b = zb(a, b), hm(a)(b)
                    }))
                }),
                im = {},
                jm = v(Jc),
                um = w(Fa("exec", /counterID=(\d+)/), U("1")),
                km = sa(function(a, c) {
                    var b, d = jm(a),
                        e = Ca(c),
                        f = e[0],
                        g = e[1],
                        h = e.slice(2);
                    if (g) {
                        e = tm(a, f);
                        var k = e[0],
                            l = e[1];
                        e = L(l);
                        d[e] || (d[e] = {});
                        d = d[e];
                        c.Ue || im[g] && N(function(m, p) {
                            return m || !!p(a, l, h, k)
                        }, !1, im[g]) || ("init" === g ? (c.Ue = !0, k ? Kb(a, "" + f, "dc", (b = {}, b.key = f, b)) : a["yaCounter" + l.id] =
                            new a.Ya[Ga.jc](z({}, h[0], l))) : k && k[g] && d.Nh ? (k[g].apply(k, h), c.Ue = !0) : (b = d.Yf, b || (b = [], d.Yf = b), b.push(ra([f, g], h))))
                    }
                }),
                lw = mb("is", function(a, c) {
                    if (Te(a)) {
                        var b;
                        hm(a)((b = {}, b.code = [
                            [1, "ym_debug", [18, ["a", [37, [40, "require"], "loadScript"]],
                                    ["b", [37, [40, "require"], "callFromWindow"]]
                                ],
                                [2, [37, [40, "a"], Ml + "/tag_debug.js", [24, null, [],
                                    [3, [2, [37, [40, "b"], "Ya._metrika.ytmm.tag_debug.init", L(c)]]]
                                ]]]
                            ]
                        ], b))
                    }
                }),
                rm = B("destruct.e", function(a, c, b) {
                    return function() {
                        var d = J(a),
                            e = c.id;
                        x(function(f, g) {
                            return O(f) &&
                                E(a, "dest.fr." + g, f)()
                        }, b);
                        sm(a, L(c));
                        delete d.C("counters")[L(c)];
                        delete a["yaCounter" + e]
                    }
                }),
                jd = J(window);
            jd.Ia("hitParam", {});
            jd.Ia("lastReferrer", window.location.href);
            (function() {
                W.push(function(a, c) {
                    var b;
                    return b = {}, b.firstPartyParams = vt(a, c), b.firstPartyParamsHashed = Uq(a, c), b
                });
                $d.push("fpp");
                $d.push("fpmh")
            })();
            (function() {
                var a = J(window);
                a.Ia("getCounters", wt(window));
                kd.push(xt);
                Rg.push(function(c, b) {
                    b.counters = a.C("getCounters")
                })
            })();
            (function() {
                W.push(function(a, c) {
                    var b;
                    ub(a, (b = {}, b.counterKey =
                        L(c), b.name = "counter", b.data = sk(c), b))
                })
            })();
            Da["1"] = ob;
            W.push(yt);
            za["1"] = tc;
            xb(dg, -1);
            Xb["1"] = [
                [dg, -1],
                [Se, 1],
                [Me, 2],
                [Qb(), 3],
                [Ej, 4]
            ];
            W.push(zt);
            W.push(B("p.ar", function(a, c) {
                var b, d = wa(a, "a", c);
                return b = {}, b.hit = function(e, f, g, h, k, l) {
                    var m, p, q, r = {
                        J: {},
                        K: Ja((m = {}, m.pv = 1, m.ar = 1, m))
                    };
                    f = na(f) ? {
                        title: f.title,
                        Ef: f.referer,
                        X: f.params,
                        cc: f.callback,
                        l: f.ctx
                    } : {
                        title: f,
                        Ef: g,
                        X: h,
                        cc: k,
                        l: l
                    };
                    h = Ld(c);
                    g = e || S(a).href;
                    h.url !== g && (h.ref = h.url, h.url = e);
                    e = f.Ef || h.ref || a.document.referrer;
                    h = nc(a, c, "pv", (p = {}, p.id = c.id,
                        p.url = g, p.ref = e, p), f.X);
                    p = z(r.M || {}, {
                        X: f.X,
                        title: f.title
                    });
                    r = d(z(r, {
                        M: p,
                        J: z(r.J || {}, (q = {}, q["page-url"] = g, q["page-ref"] = e, q))
                    }), c).then(h);
                    return Wc(a, "p.ar.s", r, f.cc || D, f.l)
                }, b
            }));
            Da.a = ob;
            Xb.a = Yb;
            za.a = wl;
            W.push(Ee);
            Da.g = ob;
            za.g = tc;
            Xb.g = Yb;
            W.push(At);
            W.push(Bt);
            Xb.t = Yb;
            Da.t = ob;
            za.t = tc;
            W.push(B("cl.p", function(a, c) {
                function b(p, q, r, t) {
                    void 0 === t && (t = {});
                    r ? Ge(a, c, {
                        url: r,
                        pb: !0,
                        Dc: p,
                        Hc: q,
                        sender: e,
                        kg: t
                    }) : h.warn("clel")
                }
                var d, e = wa(a, "2", c),
                    f = [],
                    g = L(c),
                    h = pc(a, g),
                    k = E(a, "s.s.tr", u(Ke(a, g), Mq));
                g = {
                    l: a,
                    eb: c,
                    ah: f,
                    sender: e,
                    wj: J(a),
                    Og: cd(a, c.id),
                    yj: Cc(a),
                    Ui: u(u(g, bf(a)), w(la, U("trackLinks")))
                };
                g = E(a, "cl.p.c", u(g, Jq));
                g = fa(a).F(a, ["click"], g);
                c.dg && k(c.dg);
                var l = E(a, "file.clc", C([!0, !1], b)),
                    m = E(a, "e.l.l.clc", C([!1, !0], b));
                f = E(a, "add.f.e.clc", Ct(f));
                return d = {}, d.file = l, d.extLink = m, d.addFileExtension = f, d.trackLinks = k, d.u = g, d
            }));
            Xb["2"] = Yb;
            Da["2"] = ob;
            za["2"] = tc;
            Da.r = Sd("r");
            za.r = wl;
            Za.push(B("p.r", function(a, c) {
                var b = Et(a),
                    d = wa(a, "r", c),
                    e = E(a, "rts.p");
                return pa(c, C([function(f, g) {
                    var h = {
                            id: g.Ng,
                            ca: g.ca
                        },
                        k = {
                            ba: {
                                da: g.yi
                            },
                            K: Ja(g.Cg),
                            J: g.X,
                            M: {
                                Tb: g.Tb
                            },
                            na: {
                                Ba: g.Ba
                            }
                        };
                    g.Ja && (k.Ja = vf(g.Ja));
                    h = d(k, h)["catch"](e);
                    return f.then(u(h, Q))
                }, K.resolve(), b], N))["catch"](e)
            }));
            aa("r", function(a) {
                return {
                    N: function(c, b) {
                        var d = c.K,
                            e = void 0 === d ? Ja() : d,
                            f = c.M.Tb,
                            g = Kd(a);
                        d = e.C("rqnl", 0) + 1;
                        e.D("rqnl", d);
                        if (e = n(g, G(".", [f, "browserInfo"]))) e.rqnl = d, bg(a);
                        b()
                    },
                    Da: function(c, b) {
                        pj(a, c);
                        b()
                    }
                }
            }, 1);
            xb(Fe, 100);
            aa("1", Fe, 100);
            W.push(Ft);
            aa("n", Se, 1);
            aa("n", Me, 2);
            aa("n", Qb(), 3);
            aa("n", Fe, 100);
            Da.n = ob;
            za.n = tc;
            qc({
                Me: {
                    ea: "accurateTrackBounce"
                }
            });
            W.push(Gt);
            Da.m = Sd("cm");
            za.m = rt;
            aa("m", Qb(["u", "v", "vf"]), 1);
            aa("m", Fe, 2);
            qc({
                Kg: {
                    ea: "clickmap"
                }
            });
            W.push(Ht);
            W.push(It);
            W.push(Jt);
            W.push(Kt);
            (function() {
                W.push(Lt);
                $d.push("ecommerce");
                qc({
                    sd: {
                        ea: "ecommerce",
                        Pa: function(a) {
                            if (a) return !0 === a ? "dataLayer" : "" + a
                        }
                    }
                })
            })();
            W.push(Mt);
            Za.push(Ot);
            W.push(Pt);
            $d.push("user_id");
            Za.push(B("p.st", Qt));
            W.push(Rt);
            xb(function(a, c) {
                return {
                    Da: function(b, d) {
                        var e = Aa(a, c);
                        e = e && e.userParams;
                        var f = (b.M || {}).Ge;
                        e && f && e(f);
                        d()
                    }
                }
            }, 0);
            Ue.push("_ym_debug");
            ad.unshift(Ut);
            W.push(Vt);
            ad.push(function(a) {
                var c = J(a);
                c.C("i") || (c.D("i", !0), fa(a).F(a, ["message"], u(a, hq)))
            });
            (function() {
                var a, c = (a = {}, a.tp = w(bb, tk, Ob), a.tpid = w(bb, Xr), a);
                z(Pd, c)
            })();
            xb(Fd, 20);
            aa("n", Fd, 20);
            aa("1", Fd, 20);
            ad.unshift(Xt);
            Pd.fp = function(a, c, b) {
                if (b.J && b.J.nohit) return null;
                b = J(a).C;
                if (!b("fpe")) return null;
                c = Wt(c);
                if (c.eh) return null;
                b = b("fht", Infinity);
                a: {
                    var d = n(a, "performance.getEntriesByType");
                    if (O(d)) {
                        if (a = ha(w(Q, U("name"), Ba("first-contentful-paint")), d.call(a.performance, "paint")), a.length) {
                            a =
                                a[0].startTime;
                            break a
                        }
                    } else {
                        var e = n(a, "chrome.loadTimes");
                        d = tl(a);
                        if (O(e) && (e = e.call(a.chrome), e = n(e, "firstPaintTime"), d && e)) {
                            a = 1E3 * e - d;
                            break a
                        }
                        if (a = n(a, "performance.timing.msFirstPaint")) {
                            a -= d;
                            break a
                        }
                    }
                    a = void 0
                }
                return a && b > a ? (c.eh = a, Math.round(a)) : null
            };
            W.push(function(a, c) {
                var b;
                return b = {}, b.ecommerceAdd = B("ecm.a", Zt(a, c)), b.ecommerceRemove = B("ecm.r", $t(a, c)), b.ecommerceDetail = B("ecm.d", au(a, c)), b.ecommercePurchase = B("ecm.p", bu(a, c)), b
            });
            (function() {
                var a, c = {};
                c.bu = hu;
                c.pri = Qp;
                c.wv = u(2, Q);
                c.ds =
                    Tp;
                c.co = function(b) {
                    return sb(J(b).C("jn"))
                };
                c.td = nu;
                z(c, (a = {}, a.iss = w(Vs, Ob), a.hdl = w(Ws, Ob), a.iia = w(Xs, Ob), a.cpf = w(gu, Ob), a.ntf = v(function(b) {
                    b = n(b, "Notification.permission");
                    b = "denied" === b ? !1 : "granted" === b ? !0 : null;
                    return Wa(b) ? null : b ? 2 : 1
                }), a.eu = Rb("isEU"), a.ns = tl, a.np = function(b) {
                    return Xa(b, 0, 100) ? null : md(ie(ab(Uf(b), 100)))
                }, a));
                c.pani = iu;
                c.pci = ju;
                c.si = ku;
                c.gi = lu;
                z(Pd, c)
            })();
            (function() {
                var a = {};
                a.hc = Rb("hc");
                a.oo = Rb("oo");
                a.pmc = Rb("cmc");
                a.lt = function(c) {
                    var b = Wd(c).C("lt", null);
                    return b ? c.Math.round(100 *
                        b) : b
                };
                a.re = w(ur, Ob);
                a.aw = function(c) {
                    c = tb(w(ca, Gc), [c.document.hidden, c.document.msHidden, c.document.webkitHidden]);
                    return ca(c) ? null : sb(!c)
                };
                a.rcm = qu;
                a.yu = function(c) {
                    return (c = Pc(c, "").C("yandexuid")) && c.substring(0, 25)
                };
                a.ifc = Rb("ifc");
                a.ifb = Rb("ifb");
                a.ecs = Rb("ecs");
                a.csi = Rb("scip");
                a.cdl = Rb("cdl");
                a.eco = v(Op, w(bb, L));
                a.dss = Rb("dSync");
                z(kg, a)
            })();
            za.er = ed;
            (function(a) {
                try {
                    var c = ah(a, "er"),
                        b = Lp(a, c);
                    lk.push(function(d, e, f, g) {
                        var h, k, l, m, p;
                        .01 >= a.Math.random() || b((h = {}, h[d] = (k = {}, k[Ga.bc] = (l = {},
                            l[e] = (m = {}, m[f] = g ? (p = {}, p[a.location.href] = g, p) : a.location.href, m), l), k), h))
                    })
                } catch (d) {}
            })(window);
            (function() {
                jf.push(Pp);
                Le.unshift(Kp);
                fh.push(function(a) {
                    var c = void 0;
                    void 0 === c && (c = !0);
                    J(a).D("oo", c)
                })
            })();
            xb(function(a, c) {
                return {
                    N: function(b, d) {
                        var e = b.J,
                            f = b.K;
                        !Jl[c.id] && f.C("pv") && c.exp && !e.nohit && (e.exp = c.exp, Jl[c.id] = !0);
                        d()
                    }
                }
            }, -99);
            W.push(ru);
            Xb.e = Yb;
            Da.e = ob;
            za.e = tc;
            qc({
                exp: {
                    ea: "experiments"
                }
            });
            Aj.experiments = "ex";
            (function() {
                var a;
                tf.push(su);
                Da.f = ob;
                z(za, (a = {}, a.f = vl, a));
                aa("f", Qb(),
                    1);
                aa("f", Ij, 2);
                aa("f", Fd, 20)
            })();
            jf.push(function(a, c) {
                var b = {
                        ra: L(c),
                        nd: Aa(a, c),
                        cg: ja(a),
                        Td: Qa(a)
                    },
                    d = b.cg(qb);
                if (!b.Td.Ld) {
                    var e = b.Td.C("ymoo" + b.ra);
                    if (e && 30 > d - e) b = b.ra, delete J(a).C("counters", {})[b], Va(Ta("uws"));
                    else pa(c, tu(b))["catch"](E(a, "d.f"))
                }
            });
            (function() {
                var a, c, b = [Fb];
                z(za, (a = {}, a.s = b, a.S = b, a.u = ed, a));
                z(Da, (c = {}, c.s = Zb, c.S = ob, c.u = Zb, c));
                aa("s");
                aa("u");
                aa("S", Qb(["v", "hid", "u", "vf", "rn"]), 1);
                W.push(B("s", vp))
            })();
            Da["8"] = Zb;
            za["8"] = [jg];
            ul.push([jg, 0]);
            W.push(B("p.us", function(a, c) {
                return pa(c,
                    function(b) {
                        if (n(b, "settings.sbp")) return Gi(a, b, {
                            eb: c,
                            Rb: "8",
                            Rd: "cs"
                        })
                    })
            }));
            aa("p", Qb(gh), 1);
            Vg("pub", function(a, c) {
                return {
                    N: function(b, d) {
                        ti(a, c, b);
                        d()
                    }
                }
            }, 1);
            Da.p = xu;
            za.p = va([Eb, Fb]);
            Za.push(Bu);
            qc({
                Ab: {
                    ea: "webvisor",
                    Pa: Gb
                },
                Sg: {
                    ea: "disableFormAnalytics",
                    Pa: Gb
                }
            });
            aa("4", Qb(gh), 1);
            Da["4"] = Nl;
            za["4"] = va([Eb, Fb, Xc]);
            Za.push(Hu);
            (function() {
                aa("W", Qb(gh), 1);
                Vg("wv", Ko, 1);
                za.W = va([Eb, Fb]);
                Da.W = Nl;
                Za.push(qv);
                W.push(rv);
                qc({
                    Ab: {
                        ea: "webvisor"
                    }
                });
                qc({
                    Wi: {
                        ea: "trustedDomains"
                    },
                    fc: {
                        ea: "childIframe",
                        Pa: Gb
                    }
                });
                fh.push(function(a) {
                    J(a).C("stopRecorder", D)()
                })
            })();
            W.push(tv);
            aa("pi");
            Da.pi = Zb;
            za.pi = ed;
            Vg("w", function(a, c) {
                return {
                    N: function(b, d) {
                        if (b.K) {
                            var e = Ff(c),
                                f = e.status;
                            "rt" === e.Rb && f && (b.K.D("rt", f), b.na || (b.na = {}), b.na.Kh = 1 === f ? ci(a, c) + "." : "")
                        }
                        d()
                    }
                }
            }, 2);
            W.push(vv);
            W.push(Gv);
            za["6"] = va([Eb, Fb]);
            Da["6"] = Zb;
            W.push(Hv);
            W.push(ou);
            (function() {
                Rg.push(function(a, c) {
                    c.informer = Sn(a)
                })
            })();
            xb(Cf, 6);
            aa("1", Cf, 6);
            aa("adb");
            aa("n", Cf, 4);
            za.adb = ed;
            Da.adb = Yj;
            kd.push(Jv);
            za["5"] = tc;
            Da["5"] = ob;
            Xb["5"] = ha(w(Md, uc([Se,
                Me
            ]), Gc), Yb);
            W.push(Kv);
            aa("5", Fd, 20);
            xb(Wh, 7);
            aa("n", Wh, 6);
            Za.push(Lv);
            Da.d = ob;
            aa("d", Qb(["hid", "u", "v", "vf"]), 1);
            za.d = ed;
            aa("n", function(a, c) {
                return {
                    Da: function(b, d) {
                        if (!b.M || !b.M.force) {
                            var e = .002,
                                f = c.id === Ga.ug ? 1 : .002,
                                g, h, k, l, m;
                            void 0 === e && (e = 1);
                            void 0 === f && (f = 1);
                            var p = Dd(a);
                            if (p && O(p.getEntriesByType) && (e = Math.random() > e, f = Math.random() > f, !e || !f)) {
                                p = p.getEntriesByType("resource");
                                for (var q = {}, r = {}, t = {}, y = Il(), F = S(a).href, P = 0; P < p.length; P += 1) {
                                    var M = p[P],
                                        ma = M.name.replace(Hl, "").split("?")[0],
                                        xa = gc(ma),
                                        Db = (g = {}, g.dns = Math.round(M.domainLookupEnd - M.domainLookupStart), g.tcp = Math.round(M.connectEnd - M.connectStart), g.duration = Math.round(M.duration), g.response = Math.round(M.responseEnd - M.requestStart), g);
                                    "script" !== M.initiatorType || e || (r[ma] = z(Db, (h = {}, h.name = M.name, h.decodedBodySize = M.decodedBodySize, h.transferSize = Math.round(M.transferSize), h)));
                                    !pu[xa] && !y[xa] || q[ma] || f || (q[ma] = z(Db, (k = {}, k.pages = F, k)))
                                }
                                ea(q).length && (t.timings8 = q);
                                ea(r).length && (t.scripts = r);
                                if (ea(t).length) wa(a, "d", c)({
                                    K: Ja((l = {}, l.ar = 1, l.pv = 1, l)),
                                    ba: {
                                        da: Ab(a, t) || void 0
                                    },
                                    J: (m = {}, m["page-url"] = F, m)
                                }, {
                                    id: Ga.xg,
                                    ca: "0"
                                })["catch"](E(a, "r.tim.ng2"))
                            }
                        }
                        d()
                    }
                }
            }, 7);
            za.ci = [Fb];
            Da.ci = Zb;
            Za.push(B("p.sci", function(a, c) {
                return pa(c, u(a, Qn))["catch"](E(a, "ins.cs"))
            }));
            W.push(Mv);
            Za.push(fu);
            W.push(Rv);
            xb(ph, 8);
            aa("f", ph, 3);
            aa("n", ph, 5);
            kd.push(function(a) {
                return B("fip", function(c) {
                    if (!Dl(c) || Ud(c)) {
                        var b = Qa(c);
                        if (!b.C("fip")) {
                            var d = w(Wb(w(function(e, f) {
                                return B("fip." + f, e)(c)
                            }, H(ws, null))), Ae("-"))(a);
                            b.D("fip", d)
                        }
                    }
                })
            }([Tv, Sv, function(a) {
                var c =
                    n(a, "ApplePaySession"),
                    b = S(a).protocol;
                a = c && "https:" === b && !rb(a) ? c : void 0;
                c = "";
                if (!a) return c;
                try {
                    c = "" + a.canMakePayments();
                    b = "";
                    var d = a.supportsVersion;
                    if (O(d))
                        for (var e = 1; 20 >= e; e += 1) b += d.call(a, e) ? "" + e : "0";
                    return b + c
                } catch (f) {
                    return c
                }
            }, function(a) {
                a = n(a, "navigator") || {};
                return a.doNotTrack || a.msDoNotTrack || "unknown"
            }, function(a) {
                if (a = eu(a)) try {
                    for (var c = [], b = 0; b < El.length; b += 1) {
                        var d = a(El[b]);
                        c.push(d)
                    }
                    var e = c
                } catch (f) {
                    e = []
                } else e = [];
                return e ? G("x", e) : ""
            }, function(a) {
                var c = void 0;
                void 0 === c && (c =
                    Pv);
                var b = n(a, "navigator") || {};
                c = A(u(b, n), c);
                c = G("x", c);
                try {
                    var d = n(a, "navigator.getGamepads");
                    var e = oa(d, "getGamepads") && a.navigator.getGamepads() || []
                } catch (f) {
                    e = []
                }
                return c + "x" + Sa(e)
            }, Nv, function(a) {
                a = n(a, "screen") || {};
                return G("x", A(u(a, n), Ov))
            }, function(a) {
                return G("x", vn(a) || [])
            }, function(a) {
                a = Ln(a);
                return R(a) ? G("x", a) : a
            }, function(a) {
                return (a = Nn(a)) ? G("x", A(C(["", ["matches", "media"]], xn), va(zh(a)))) : ""
            }]));
            xb(function(a) {
                return {
                    N: function(c, b) {
                        var d = c.K,
                            e = Qa(a).C("fip");
                        e && d && (d.D("fip", e),
                            me(c, "fip", sb(e)));
                        b()
                    }
                }
            }, 9);
            aa("h", function(a) {
                return {
                    Da: function(c, b) {
                        var d = c.Ci;
                        Wf(c) && d && J(a).D("isEU", n(d, "settings.eu"));
                        b()
                    }
                }
            }, 3);
            kd.push(pv);
            Za.push(Yv);
            W.push(Zv);
            qc({
                fj: {
                    ea: "yaDisableGDPR"
                },
                gj: {
                    ea: "yaGDPRLang"
                }
            });
            Le.push(function(a, c) {
                return {
                    N: C([a, c], gn)
                }
            });
            Ue.push("gdpr");
            Ue.push("gdpr_popup");
            Ag.push(function(a, c) {
                var b = ke(a);
                b = le(b);
                if (ha(uc(bw), b).length) return !0;
                b = c(a, "gdpr");
                return I(b, [Qc, aw])
            });
            Le.push(function(a) {
                return {
                    N: function(c, b) {
                        var d = c.na || {},
                            e;
                        (e = n(a, "document.referrer")) ?
                        (e = Sc(a, e).host, e = zj(e), e = Ll + "." + (e || uu)) : e = jc;
                        c.na = z(d, {
                            Lh: [e]
                        });
                        b()
                    }
                }
            });
            xb(gm, 5);
            aa("1", gm, 6);
            za.c = ed;
            Da.c = Zb;
            aa("1", Ch, 7);
            xb(Ch, 7);
            ad.push(B("hcp", Ah));
            Za.push(B("p.ot", ew));
            Za.push(mb("cta", fw, !0));
            aa("n", function(a) {
                var c = J(a);
                return {
                    N: function(b, d) {
                        var e = b.M || {},
                            f = c.C("cta"),
                            g = c.C("cta.e");
                        if (f || g) {
                            e.X || (e.X = {});
                            e.X.__ym || (e.X.__ym = {});
                            var h = {};
                            f ? (f = A(function(k) {
                                var l, m = n(k, "topic");
                                k = n(k, "version");
                                return l = {}, l.topic = m, l.version = k, l
                            }, f), h.ct = f) : g && (h["ct.e"] = g);
                            z(e.X.__ym, h);
                            b.M = z(b.M || {},
                                e)
                        }
                        d()
                    }
                }
            }, 7);
            aa("n", dg, 8);
            W.push(gw);
            W.push(hw);
            ad.push(B("cdl", function(a) {
                var c = J(a).Ia;
                if (a = n(a, "navigator.cookieDeprecationLabel")) try {
                    a.getValue().then(u("cdl", c), C(["cdl", "e"], c))
                } catch (b) {
                    c("cdl", "d")
                } else c("cdl", "na")
            }));
            Za.push(kw);
            W.push(function(a, c) {
                var b = jm(a),
                    d = L(c),
                    e = b[d];
                e || (e = {}, b[d] = e);
                e.Nh = !0;
                if (b = e.Yf) d = km(a), x(d, b)
            });
            Za.unshift(lw);
            x(vb(la)(window), ad);
            if (window.Ya && gf) {
                var lm = Ga.jc;
                window.Ya[lm] = gf;
                ut(window);
                x(w(Lc([window, window.Ya[lm]]), la), Rg)
            }(function(a) {
                var c = n(a, "ym");
                if (c) {
                    var b = n(c, "a");
                    b || (c.a = [], b = c.a);
                    var d = km(a);
                    Ie(a, b, function(e) {
                        e.za.F(d)
                    }, !0)
                }
            })(window)
        })()
    } catch (gf) {};
}).call(this)