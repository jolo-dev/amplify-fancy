var Vf = Object.defineProperty,
  Uf = Object.defineProperties
var Kf = Object.getOwnPropertyDescriptors
var er = Object.getOwnPropertySymbols
var gl = Object.prototype.hasOwnProperty,
  vl = Object.prototype.propertyIsEnumerable
var yl = (e, t, n) =>
    t in e
      ? Vf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  de = (e, t) => {
    for (var n in t || (t = {})) gl.call(t, n) && yl(e, n, t[n])
    if (er) for (var n of er(t)) vl.call(t, n) && yl(e, n, t[n])
    return e
  },
  Ue = (e, t) => Uf(e, Kf(t))
var to = (e, t) => {
  var n = {}
  for (var s in e) gl.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s])
  if (e != null && er)
    for (var s of er(e)) t.indexOf(s) < 0 && vl.call(e, s) && (n[s] = e[s])
  return n
}
function no(e, t) {
  const n = Object.create(null),
    s = e.split(',')
  for (let r = 0; r < s.length; r++) n[s[r]] = !0
  return t ? (r) => !!n[r.toLowerCase()] : (r) => !!n[r]
}
const Wf =
    'itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly',
  qf = no(Wf)
function _l(e) {
  return !!e || e === ''
}
function ft(e) {
  if (X(e)) {
    const t = {}
    for (let n = 0; n < e.length; n++) {
      const s = e[n],
        r = Me(s) ? Gf(s) : ft(s)
      if (r) for (const o in r) t[o] = r[o]
    }
    return t
  } else {
    if (Me(e)) return e
    if (Pe(e)) return e
  }
}
const Yf = /;(?![^(]*\))/g,
  Jf = /:(.+)/
function Gf(e) {
  const t = {}
  return (
    e.split(Yf).forEach((n) => {
      if (n) {
        const s = n.split(Jf)
        s.length > 1 && (t[s[0].trim()] = s[1].trim())
      }
    }),
    t
  )
}
function $e(e) {
  let t = ''
  if (Me(e)) t = e
  else if (X(e))
    for (let n = 0; n < e.length; n++) {
      const s = $e(e[n])
      s && (t += s + ' ')
    }
  else if (Pe(e)) for (const n in e) e[n] && (t += n + ' ')
  return t.trim()
}
function Ke(e) {
  if (!e) return null
  let { class: t, style: n } = e
  return t && !Me(t) && (e.class = $e(t)), n && (e.style = ft(n)), e
}
const kt = (e) =>
    e == null
      ? ''
      : X(e) || (Pe(e) && (e.toString === El || !ne(e.toString)))
      ? JSON.stringify(e, bl, 2)
      : String(e),
  bl = (e, t) =>
    t && t.__v_isRef
      ? bl(e, t.value)
      : Pn(t)
      ? {
          [`Map(${t.size})`]: [...t.entries()].reduce(
            (n, [s, r]) => ((n[`${s} =>`] = r), n),
            {}
          )
        }
      : wl(t)
      ? { [`Set(${t.size})`]: [...t.values()] }
      : Pe(t) && !X(t) && !Sl(t)
      ? String(t)
      : t,
  _e = {},
  Mn = [],
  dt = () => {},
  Qf = () => !1,
  Xf = /^on[^a-z]/,
  tr = (e) => Xf.test(e),
  so = (e) => e.startsWith('onUpdate:'),
  Ne = Object.assign,
  ro = (e, t) => {
    const n = e.indexOf(t)
    n > -1 && e.splice(n, 1)
  },
  Zf = Object.prototype.hasOwnProperty,
  he = (e, t) => Zf.call(e, t),
  X = Array.isArray,
  Pn = (e) => nr(e) === '[object Map]',
  wl = (e) => nr(e) === '[object Set]',
  ne = (e) => typeof e == 'function',
  Me = (e) => typeof e == 'string',
  oo = (e) => typeof e == 'symbol',
  Pe = (e) => e !== null && typeof e == 'object',
  xl = (e) => Pe(e) && ne(e.then) && ne(e.catch),
  El = Object.prototype.toString,
  nr = (e) => El.call(e),
  ed = (e) => nr(e).slice(8, -1),
  Sl = (e) => nr(e) === '[object Object]',
  io = (e) =>
    Me(e) && e !== 'NaN' && e[0] !== '-' && '' + parseInt(e, 10) === e,
  sr = no(
    ',key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted'
  ),
  rr = (e) => {
    const t = Object.create(null)
    return (n) => t[n] || (t[n] = e(n))
  },
  td = /-(\w)/g,
  wt = rr((e) => e.replace(td, (t, n) => (n ? n.toUpperCase() : ''))),
  nd = /\B([A-Z])/g,
  sn = rr((e) => e.replace(nd, '-$1').toLowerCase()),
  or = rr((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  lo = rr((e) => (e ? `on${or(e)}` : '')),
  cs = (e, t) => !Object.is(e, t),
  Tn = (e, t) => {
    for (let n = 0; n < e.length; n++) e[n](t)
  },
  ir = (e, t, n) => {
    Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: n })
  },
  ao = (e) => {
    const t = parseFloat(e)
    return isNaN(t) ? e : t
  }
let kl
const sd = () =>
  kl ||
  (kl =
    typeof globalThis != 'undefined'
      ? globalThis
      : typeof self != 'undefined'
      ? self
      : typeof window != 'undefined'
      ? window
      : typeof global != 'undefined'
      ? global
      : {})
let xt
const lr = []
class rd {
  constructor(t = !1) {
    ;(this.active = !0),
      (this.effects = []),
      (this.cleanups = []),
      !t &&
        xt &&
        ((this.parent = xt),
        (this.index = (xt.scopes || (xt.scopes = [])).push(this) - 1))
  }
  run(t) {
    if (this.active)
      try {
        return this.on(), t()
      } finally {
        this.off()
      }
  }
  on() {
    this.active && (lr.push(this), (xt = this))
  }
  off() {
    this.active && (lr.pop(), (xt = lr[lr.length - 1]))
  }
  stop(t) {
    if (this.active) {
      if (
        (this.effects.forEach((n) => n.stop()),
        this.cleanups.forEach((n) => n()),
        this.scopes && this.scopes.forEach((n) => n.stop(!0)),
        this.parent && !t)
      ) {
        const n = this.parent.scopes.pop()
        n &&
          n !== this &&
          ((this.parent.scopes[this.index] = n), (n.index = this.index))
      }
      this.active = !1
    }
  }
}
function od(e, t) {
  ;(t = t || xt), t && t.active && t.effects.push(e)
}
function id() {
  return xt
}
function ld(e) {
  xt && xt.cleanups.push(e)
}
const co = (e) => {
    const t = new Set(e)
    return (t.w = 0), (t.n = 0), t
  },
  $l = (e) => (e.w & Ft) > 0,
  Cl = (e) => (e.n & Ft) > 0,
  ad = ({ deps: e }) => {
    if (e.length) for (let t = 0; t < e.length; t++) e[t].w |= Ft
  },
  cd = (e) => {
    const { deps: t } = e
    if (t.length) {
      let n = 0
      for (let s = 0; s < t.length; s++) {
        const r = t[s]
        $l(r) && !Cl(r) ? r.delete(e) : (t[n++] = r), (r.w &= ~Ft), (r.n &= ~Ft)
      }
      t.length = n
    }
  },
  uo = new WeakMap()
let us = 0,
  Ft = 1
const fo = 30,
  fs = []
let rn
const on = Symbol(''),
  ho = Symbol('')
class po {
  constructor(t, n = null, s) {
    ;(this.fn = t),
      (this.scheduler = n),
      (this.active = !0),
      (this.deps = []),
      od(this, s)
  }
  run() {
    if (!this.active) return this.fn()
    if (!fs.includes(this))
      try {
        return (
          fs.push((rn = this)),
          ud(),
          (Ft = 1 << ++us),
          us <= fo ? ad(this) : Al(this),
          this.fn()
        )
      } finally {
        us <= fo && cd(this), (Ft = 1 << --us), ln(), fs.pop()
        const t = fs.length
        rn = t > 0 ? fs[t - 1] : void 0
      }
  }
  stop() {
    this.active && (Al(this), this.onStop && this.onStop(), (this.active = !1))
  }
}
function Al(e) {
  const { deps: t } = e
  if (t.length) {
    for (let n = 0; n < t.length; n++) t[n].delete(e)
    t.length = 0
  }
}
let In = !0
const mo = []
function Rn() {
  mo.push(In), (In = !1)
}
function ud() {
  mo.push(In), (In = !0)
}
function ln() {
  const e = mo.pop()
  In = e === void 0 ? !0 : e
}
function Xe(e, t, n) {
  if (!Ol()) return
  let s = uo.get(e)
  s || uo.set(e, (s = new Map()))
  let r = s.get(n)
  r || s.set(n, (r = co())), Ml(r)
}
function Ol() {
  return In && rn !== void 0
}
function Ml(e, t) {
  let n = !1
  us <= fo ? Cl(e) || ((e.n |= Ft), (n = !$l(e))) : (n = !e.has(rn)),
    n && (e.add(rn), rn.deps.push(e))
}
function $t(e, t, n, s, r, o) {
  const i = uo.get(e)
  if (!i) return
  let l = []
  if (t === 'clear') l = [...i.values()]
  else if (n === 'length' && X(e))
    i.forEach((a, c) => {
      ;(c === 'length' || c >= s) && l.push(a)
    })
  else
    switch ((n !== void 0 && l.push(i.get(n)), t)) {
      case 'add':
        X(e)
          ? io(n) && l.push(i.get('length'))
          : (l.push(i.get(on)), Pn(e) && l.push(i.get(ho)))
        break
      case 'delete':
        X(e) || (l.push(i.get(on)), Pn(e) && l.push(i.get(ho)))
        break
      case 'set':
        Pn(e) && l.push(i.get(on))
        break
    }
  if (l.length === 1) l[0] && go(l[0])
  else {
    const a = []
    for (const c of l) c && a.push(...c)
    go(co(a))
  }
}
function go(e, t) {
  for (const n of X(e) ? e : [...e])
    (n !== rn || n.allowRecurse) && (n.scheduler ? n.scheduler() : n.run())
}
const fd = no('__proto__,__v_isRef,__isVue'),
  Pl = new Set(
    Object.getOwnPropertyNames(Symbol)
      .map((e) => Symbol[e])
      .filter(oo)
  ),
  dd = vo(),
  hd = vo(!1, !0),
  pd = vo(!0),
  Tl = md()
function md() {
  const e = {}
  return (
    ['includes', 'indexOf', 'lastIndexOf'].forEach((t) => {
      e[t] = function (...n) {
        const s = pe(this)
        for (let o = 0, i = this.length; o < i; o++) Xe(s, 'get', o + '')
        const r = s[t](...n)
        return r === -1 || r === !1 ? s[t](...n.map(pe)) : r
      }
    }),
    ['push', 'pop', 'shift', 'unshift', 'splice'].forEach((t) => {
      e[t] = function (...n) {
        Rn()
        const s = pe(this)[t].apply(this, n)
        return ln(), s
      }
    }),
    e
  )
}
function vo(e = !1, t = !1) {
  return function (s, r, o) {
    if (r === '__v_isReactive') return !e
    if (r === '__v_isReadonly') return e
    if (r === '__v_raw' && o === (e ? (t ? Pd : zl) : t ? Hl : Dl).get(s))
      return s
    const i = X(s)
    if (!e && i && he(Tl, r)) return Reflect.get(Tl, r, o)
    const l = Reflect.get(s, r, o)
    return (oo(r) ? Pl.has(r) : fd(r)) || (e || Xe(s, 'get', r), t)
      ? l
      : Ce(l)
      ? !i || !io(r)
        ? l.value
        : l
      : Pe(l)
      ? e
        ? an(l)
        : Te(l)
      : l
  }
}
const gd = Il(),
  vd = Il(!0)
function Il(e = !1) {
  return function (n, s, r, o) {
    let i = n[s]
    if (!e && !wo(r) && ((r = pe(r)), (i = pe(i)), !X(n) && Ce(i) && !Ce(r)))
      return (i.value = r), !0
    const l = X(n) && io(s) ? Number(s) < n.length : he(n, s),
      a = Reflect.set(n, s, r, o)
    return (
      n === pe(o) && (l ? cs(r, i) && $t(n, 'set', s, r) : $t(n, 'add', s, r)),
      a
    )
  }
}
function yd(e, t) {
  const n = he(e, t)
  e[t]
  const s = Reflect.deleteProperty(e, t)
  return s && n && $t(e, 'delete', t, void 0), s
}
function _d(e, t) {
  const n = Reflect.has(e, t)
  return (!oo(t) || !Pl.has(t)) && Xe(e, 'has', t), n
}
function bd(e) {
  return Xe(e, 'iterate', X(e) ? 'length' : on), Reflect.ownKeys(e)
}
const Rl = { get: dd, set: gd, deleteProperty: yd, has: _d, ownKeys: bd },
  wd = {
    get: pd,
    set(e, t) {
      return !0
    },
    deleteProperty(e, t) {
      return !0
    }
  },
  xd = Ne({}, Rl, { get: hd, set: vd }),
  yo = (e) => e,
  ar = (e) => Reflect.getPrototypeOf(e)
function cr(e, t, n = !1, s = !1) {
  e = e.__v_raw
  const r = pe(e),
    o = pe(t)
  t !== o && !n && Xe(r, 'get', t), !n && Xe(r, 'get', o)
  const { has: i } = ar(r),
    l = s ? yo : n ? Eo : ds
  if (i.call(r, t)) return l(e.get(t))
  if (i.call(r, o)) return l(e.get(o))
  e !== r && e.get(t)
}
function ur(e, t = !1) {
  const n = this.__v_raw,
    s = pe(n),
    r = pe(e)
  return (
    e !== r && !t && Xe(s, 'has', e),
    !t && Xe(s, 'has', r),
    e === r ? n.has(e) : n.has(e) || n.has(r)
  )
}
function fr(e, t = !1) {
  return (
    (e = e.__v_raw), !t && Xe(pe(e), 'iterate', on), Reflect.get(e, 'size', e)
  )
}
function jl(e) {
  e = pe(e)
  const t = pe(this)
  return ar(t).has.call(t, e) || (t.add(e), $t(t, 'add', e, e)), this
}
function Ll(e, t) {
  t = pe(t)
  const n = pe(this),
    { has: s, get: r } = ar(n)
  let o = s.call(n, e)
  o || ((e = pe(e)), (o = s.call(n, e)))
  const i = r.call(n, e)
  return (
    n.set(e, t), o ? cs(t, i) && $t(n, 'set', e, t) : $t(n, 'add', e, t), this
  )
}
function Fl(e) {
  const t = pe(this),
    { has: n, get: s } = ar(t)
  let r = n.call(t, e)
  r || ((e = pe(e)), (r = n.call(t, e))), s && s.call(t, e)
  const o = t.delete(e)
  return r && $t(t, 'delete', e, void 0), o
}
function Nl() {
  const e = pe(this),
    t = e.size !== 0,
    n = e.clear()
  return t && $t(e, 'clear', void 0, void 0), n
}
function dr(e, t) {
  return function (s, r) {
    const o = this,
      i = o.__v_raw,
      l = pe(i),
      a = t ? yo : e ? Eo : ds
    return (
      !e && Xe(l, 'iterate', on), i.forEach((c, u) => s.call(r, a(c), a(u), o))
    )
  }
}
function hr(e, t, n) {
  return function (...s) {
    const r = this.__v_raw,
      o = pe(r),
      i = Pn(o),
      l = e === 'entries' || (e === Symbol.iterator && i),
      a = e === 'keys' && i,
      c = r[e](...s),
      u = n ? yo : t ? Eo : ds
    return (
      !t && Xe(o, 'iterate', a ? ho : on),
      {
        next() {
          const { value: f, done: d } = c.next()
          return d
            ? { value: f, done: d }
            : { value: l ? [u(f[0]), u(f[1])] : u(f), done: d }
        },
        [Symbol.iterator]() {
          return this
        }
      }
    )
  }
}
function Nt(e) {
  return function (...t) {
    return e === 'delete' ? !1 : this
  }
}
function Ed() {
  const e = {
      get(o) {
        return cr(this, o)
      },
      get size() {
        return fr(this)
      },
      has: ur,
      add: jl,
      set: Ll,
      delete: Fl,
      clear: Nl,
      forEach: dr(!1, !1)
    },
    t = {
      get(o) {
        return cr(this, o, !1, !0)
      },
      get size() {
        return fr(this)
      },
      has: ur,
      add: jl,
      set: Ll,
      delete: Fl,
      clear: Nl,
      forEach: dr(!1, !0)
    },
    n = {
      get(o) {
        return cr(this, o, !0)
      },
      get size() {
        return fr(this, !0)
      },
      has(o) {
        return ur.call(this, o, !0)
      },
      add: Nt('add'),
      set: Nt('set'),
      delete: Nt('delete'),
      clear: Nt('clear'),
      forEach: dr(!0, !1)
    },
    s = {
      get(o) {
        return cr(this, o, !0, !0)
      },
      get size() {
        return fr(this, !0)
      },
      has(o) {
        return ur.call(this, o, !0)
      },
      add: Nt('add'),
      set: Nt('set'),
      delete: Nt('delete'),
      clear: Nt('clear'),
      forEach: dr(!0, !0)
    }
  return (
    ['keys', 'values', 'entries', Symbol.iterator].forEach((o) => {
      ;(e[o] = hr(o, !1, !1)),
        (n[o] = hr(o, !0, !1)),
        (t[o] = hr(o, !1, !0)),
        (s[o] = hr(o, !0, !0))
    }),
    [e, n, t, s]
  )
}
const [Sd, kd, $d, Cd] = Ed()
function _o(e, t) {
  const n = t ? (e ? Cd : $d) : e ? kd : Sd
  return (s, r, o) =>
    r === '__v_isReactive'
      ? !e
      : r === '__v_isReadonly'
      ? e
      : r === '__v_raw'
      ? s
      : Reflect.get(he(n, r) && r in s ? n : s, r, o)
}
const Ad = { get: _o(!1, !1) },
  Od = { get: _o(!1, !0) },
  Md = { get: _o(!0, !1) },
  Dl = new WeakMap(),
  Hl = new WeakMap(),
  zl = new WeakMap(),
  Pd = new WeakMap()
function Td(e) {
  switch (e) {
    case 'Object':
    case 'Array':
      return 1
    case 'Map':
    case 'Set':
    case 'WeakMap':
    case 'WeakSet':
      return 2
    default:
      return 0
  }
}
function Id(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Td(ed(e))
}
function Te(e) {
  return e && e.__v_isReadonly ? e : bo(e, !1, Rl, Ad, Dl)
}
function Rd(e) {
  return bo(e, !1, xd, Od, Hl)
}
function an(e) {
  return bo(e, !0, wd, Md, zl)
}
function bo(e, t, n, s, r) {
  if (!Pe(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e
  const o = r.get(e)
  if (o) return o
  const i = Id(e)
  if (i === 0) return e
  const l = new Proxy(e, i === 2 ? s : n)
  return r.set(e, l), l
}
function jn(e) {
  return wo(e) ? jn(e.__v_raw) : !!(e && e.__v_isReactive)
}
function wo(e) {
  return !!(e && e.__v_isReadonly)
}
function Bl(e) {
  return jn(e) || wo(e)
}
function pe(e) {
  const t = e && e.__v_raw
  return t ? pe(t) : e
}
function xo(e) {
  return ir(e, '__v_skip', !0), e
}
const ds = (e) => (Pe(e) ? Te(e) : e),
  Eo = (e) => (Pe(e) ? an(e) : e)
function Vl(e) {
  Ol() && ((e = pe(e)), e.dep || (e.dep = co()), Ml(e.dep))
}
function Ul(e, t) {
  ;(e = pe(e)), e.dep && go(e.dep)
}
function Ce(e) {
  return Boolean(e && e.__v_isRef === !0)
}
function Z(e) {
  return Kl(e, !1)
}
function Ct(e) {
  return Kl(e, !0)
}
function Kl(e, t) {
  return Ce(e) ? e : new jd(e, t)
}
class jd {
  constructor(t, n) {
    ;(this._shallow = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._rawValue = n ? t : pe(t)),
      (this._value = n ? t : ds(t))
  }
  get value() {
    return Vl(this), this._value
  }
  set value(t) {
    ;(t = this._shallow ? t : pe(t)),
      cs(t, this._rawValue) &&
        ((this._rawValue = t),
        (this._value = this._shallow ? t : ds(t)),
        Ul(this))
  }
}
function C(e) {
  return Ce(e) ? e.value : e
}
const Ld = {
  get: (e, t, n) => C(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const r = e[t]
    return Ce(r) && !Ce(n) ? ((r.value = n), !0) : Reflect.set(e, t, n, s)
  }
}
function Wl(e) {
  return jn(e) ? e : new Proxy(e, Ld)
}
class Fd {
  constructor(t, n, s) {
    ;(this._setter = n),
      (this.dep = void 0),
      (this._dirty = !0),
      (this.__v_isRef = !0),
      (this.effect = new po(t, () => {
        this._dirty || ((this._dirty = !0), Ul(this))
      })),
      (this.__v_isReadonly = s)
  }
  get value() {
    const t = pe(this)
    return (
      Vl(t),
      t._dirty && ((t._dirty = !1), (t._value = t.effect.run())),
      t._value
    )
  }
  set value(t) {
    this._setter(t)
  }
}
function D(e, t) {
  let n, s
  const r = ne(e)
  return (
    r ? ((n = e), (s = dt)) : ((n = e.get), (s = e.set)), new Fd(n, s, r || !s)
  )
}
Promise.resolve()
function Nd(e, t, ...n) {
  const s = e.vnode.props || _e
  let r = n
  const o = t.startsWith('update:'),
    i = o && t.slice(7)
  if (i && i in s) {
    const u = `${i === 'modelValue' ? 'model' : i}Modifiers`,
      { number: f, trim: d } = s[u] || _e
    d ? (r = n.map((m) => m.trim())) : f && (r = n.map(ao))
  }
  let l,
    a = s[(l = lo(t))] || s[(l = lo(wt(t)))]
  !a && o && (a = s[(l = lo(sn(t)))]), a && ht(a, e, 6, r)
  const c = s[l + 'Once']
  if (c) {
    if (!e.emitted) e.emitted = {}
    else if (e.emitted[l]) return
    ;(e.emitted[l] = !0), ht(c, e, 6, r)
  }
}
function ql(e, t, n = !1) {
  const s = t.emitsCache,
    r = s.get(e)
  if (r !== void 0) return r
  const o = e.emits
  let i = {},
    l = !1
  if (!ne(e)) {
    const a = (c) => {
      const u = ql(c, t, !0)
      u && ((l = !0), Ne(i, u))
    }
    !n && t.mixins.length && t.mixins.forEach(a),
      e.extends && a(e.extends),
      e.mixins && e.mixins.forEach(a)
  }
  return !o && !l
    ? (s.set(e, null), null)
    : (X(o) ? o.forEach((a) => (i[a] = null)) : Ne(i, o), s.set(e, i), i)
}
function So(e, t) {
  return !e || !tr(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, '')),
      he(e, t[0].toLowerCase() + t.slice(1)) || he(e, sn(t)) || he(e, t))
}
let Ze = null,
  pr = null
function mr(e) {
  const t = Ze
  return (Ze = e), (pr = (e && e.type.__scopeId) || null), t
}
function Dd(e) {
  pr = e
}
function Hd() {
  pr = null
}
function ge(e, t = Ze, n) {
  if (!t || e._n) return e
  const s = (...r) => {
    s._d && _a(-1)
    const o = mr(t),
      i = e(...r)
    return mr(o), s._d && _a(1), i
  }
  return (s._n = !0), (s._c = !0), (s._d = !0), s
}
function ko(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: r,
    props: o,
    propsOptions: [i],
    slots: l,
    attrs: a,
    emit: c,
    render: u,
    renderCache: f,
    data: d,
    setupState: m,
    ctx: v,
    inheritAttrs: E
  } = e
  let w, A
  const _ = mr(e)
  try {
    if (n.shapeFlag & 4) {
      const S = r || s
      ;(w = Et(u.call(S, S, f, o, m, d, v))), (A = a)
    } else {
      const S = t
      ;(w = Et(
        S.length > 1 ? S(o, { attrs: a, slots: l, emit: c }) : S(o, null)
      )),
        (A = t.props ? a : zd(a))
    }
  } catch (S) {
    ;(ps.length = 0), $r(S, e, 1), (w = Y(Dt))
  }
  let b = w
  if (A && E !== !1) {
    const S = Object.keys(A),
      { shapeFlag: L } = b
    S.length &&
      L & (1 | 6) &&
      (i && S.some(so) && (A = Bd(A, i)), (b = Fn(b, A)))
  }
  return (
    n.dirs && (b.dirs = b.dirs ? b.dirs.concat(n.dirs) : n.dirs),
    n.transition && (b.transition = n.transition),
    (w = b),
    mr(_),
    w
  )
}
const zd = (e) => {
    let t
    for (const n in e)
      (n === 'class' || n === 'style' || tr(n)) && ((t || (t = {}))[n] = e[n])
    return t
  },
  Bd = (e, t) => {
    const n = {}
    for (const s in e) (!so(s) || !(s.slice(9) in t)) && (n[s] = e[s])
    return n
  }
function Vd(e, t, n) {
  const { props: s, children: r, component: o } = e,
    { props: i, children: l, patchFlag: a } = t,
    c = o.emitsOptions
  if (t.dirs || t.transition) return !0
  if (n && a >= 0) {
    if (a & 1024) return !0
    if (a & 16) return s ? Yl(s, i, c) : !!i
    if (a & 8) {
      const u = t.dynamicProps
      for (let f = 0; f < u.length; f++) {
        const d = u[f]
        if (i[d] !== s[d] && !So(c, d)) return !0
      }
    }
  } else
    return (r || l) && (!l || !l.$stable)
      ? !0
      : s === i
      ? !1
      : s
      ? i
        ? Yl(s, i, c)
        : !0
      : !!i
  return !1
}
function Yl(e, t, n) {
  const s = Object.keys(t)
  if (s.length !== Object.keys(e).length) return !0
  for (let r = 0; r < s.length; r++) {
    const o = s[r]
    if (t[o] !== e[o] && !So(n, o)) return !0
  }
  return !1
}
function Ud({ vnode: e, parent: t }, n) {
  for (; t && t.subTree === e; ) ((e = t.vnode).el = n), (t = t.parent)
}
const Kd = (e) => e.__isSuspense
function Wd(e, t) {
  t && t.pendingBranch
    ? X(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : Nh(e)
}
function At(e, t) {
  if (Ie) {
    let n = Ie.provides
    const s = Ie.parent && Ie.parent.provides
    s === n && (n = Ie.provides = Object.create(s)), (n[e] = t)
  }
}
function Ot(e, t, n = !1) {
  const s = Ie || Ze
  if (s) {
    const r =
      s.parent == null
        ? s.vnode.appContext && s.vnode.appContext.provides
        : s.parent.provides
    if (r && e in r) return r[e]
    if (arguments.length > 1) return n && ne(t) ? t.call(s.proxy) : t
  }
}
function Jl(e, t) {
  e.shapeFlag & 6 && e.component
    ? Jl(e.component.subTree, t)
    : e.shapeFlag & 128
    ? ((e.ssContent.transition = t.clone(e.ssContent)),
      (e.ssFallback.transition = t.clone(e.ssFallback)))
    : (e.transition = t)
}
function Se(e) {
  return ne(e) ? { setup: e, name: e.name } : e
}
const gr = (e) => !!e.type.__asyncLoader,
  Gl = (e) => e.type.__isKeepAlive,
  qd = {
    name: 'KeepAlive',
    __isKeepAlive: !0,
    props: {
      include: [String, RegExp, Array],
      exclude: [String, RegExp, Array],
      max: [String, Number]
    },
    setup(e, { slots: t }) {
      const n = Sr(),
        s = n.ctx
      if (!s.renderer) return t.default
      const r = new Map(),
        o = new Set()
      let i = null
      const l = n.suspense,
        {
          renderer: {
            p: a,
            m: c,
            um: u,
            o: { createElement: f }
          }
        } = s,
        d = f('div')
      ;(s.activate = (_, b, S, L, N) => {
        const j = _.component
        c(_, b, S, 0, l),
          a(j.vnode, _, b, S, j, l, L, _.slotScopeIds, N),
          je(() => {
            ;(j.isDeactivated = !1), j.a && Tn(j.a)
            const J = _.props && _.props.onVnodeMounted
            J && ot(J, j.parent, _)
          }, l)
      }),
        (s.deactivate = (_) => {
          const b = _.component
          c(_, d, null, 1, l),
            je(() => {
              b.da && Tn(b.da)
              const S = _.props && _.props.onVnodeUnmounted
              S && ot(S, b.parent, _), (b.isDeactivated = !0)
            }, l)
        })
      function m(_) {
        $o(_), u(_, n, l)
      }
      function v(_) {
        r.forEach((b, S) => {
          const L = Ho(b.type)
          L && (!_ || !_(L)) && E(S)
        })
      }
      function E(_) {
        const b = r.get(_)
        !i || b.type !== i.type ? m(b) : i && $o(i), r.delete(_), o.delete(_)
      }
      ae(
        () => [e.include, e.exclude],
        ([_, b]) => {
          _ && v((S) => hs(_, S)), b && v((S) => !hs(b, S))
        },
        { flush: 'post', deep: !0 }
      )
      let w = null
      const A = () => {
        w != null && r.set(w, Co(n.subTree))
      }
      return (
        Ao(A),
        Zl(A),
        Oo(() => {
          r.forEach((_) => {
            const { subTree: b, suspense: S } = n,
              L = Co(b)
            if (_.type === L.type) {
              $o(L)
              const N = L.component.da
              N && je(N, S)
              return
            }
            m(_)
          })
        }),
        () => {
          if (((w = null), !t.default)) return null
          const _ = t.default(),
            b = _[0]
          if (_.length > 1) return (i = null), _
          if (!Ln(b) || (!(b.shapeFlag & 4) && !(b.shapeFlag & 128)))
            return (i = null), b
          let S = Co(b)
          const L = S.type,
            N = Ho(gr(S) ? S.type.__asyncResolved || {} : L),
            { include: j, exclude: J, max: ie } = e
          if ((j && (!N || !hs(j, N))) || (J && N && hs(J, N)))
            return (i = S), b
          const le = S.key == null ? L : S.key,
            oe = r.get(le)
          return (
            S.el && ((S = Fn(S)), b.shapeFlag & 128 && (b.ssContent = S)),
            (w = le),
            oe
              ? ((S.el = oe.el),
                (S.component = oe.component),
                S.transition && Jl(S, S.transition),
                (S.shapeFlag |= 512),
                o.delete(le),
                o.add(le))
              : (o.add(le),
                ie && o.size > parseInt(ie, 10) && E(o.values().next().value)),
            (S.shapeFlag |= 256),
            (i = S),
            b
          )
        }
      )
    }
  },
  Ql = qd
function hs(e, t) {
  return X(e)
    ? e.some((n) => hs(n, t))
    : Me(e)
    ? e.split(',').indexOf(t) > -1
    : e.test
    ? e.test(t)
    : !1
}
function Yd(e, t) {
  Xl(e, 'a', t)
}
function Jd(e, t) {
  Xl(e, 'da', t)
}
function Xl(e, t, n = Ie) {
  const s =
    e.__wdc ||
    (e.__wdc = () => {
      let r = n
      for (; r; ) {
        if (r.isDeactivated) return
        r = r.parent
      }
      return e()
    })
  if ((vr(t, s, n), n)) {
    let r = n.parent
    for (; r && r.parent; ) Gl(r.parent.vnode) && Gd(s, t, n, r), (r = r.parent)
  }
}
function Gd(e, t, n, s) {
  const r = vr(t, e, s, !0)
  Mo(() => {
    ro(s[t], r)
  }, n)
}
function $o(e) {
  let t = e.shapeFlag
  t & 256 && (t -= 256), t & 512 && (t -= 512), (e.shapeFlag = t)
}
function Co(e) {
  return e.shapeFlag & 128 ? e.ssContent : e
}
function vr(e, t, n = Ie, s = !1) {
  if (n) {
    const r = n[e] || (n[e] = []),
      o =
        t.__weh ||
        (t.__weh = (...i) => {
          if (n.isUnmounted) return
          Rn(), Dn(n)
          const l = ht(t, n, e, i)
          return hn(), ln(), l
        })
    return s ? r.unshift(o) : r.push(o), o
  }
}
const Mt =
    (e) =>
    (t, n = Ie) =>
      (!kr || e === 'sp') && vr(e, t, n),
  Qd = Mt('bm'),
  Ao = Mt('m'),
  Xd = Mt('bu'),
  Zl = Mt('u'),
  Oo = Mt('bum'),
  Mo = Mt('um'),
  Zd = Mt('sp'),
  eh = Mt('rtg'),
  th = Mt('rtc')
function nh(e, t = Ie) {
  vr('ec', e, t)
}
let Po = !0
function sh(e) {
  const t = na(e),
    n = e.proxy,
    s = e.ctx
  ;(Po = !1), t.beforeCreate && ea(t.beforeCreate, e, 'bc')
  const {
    data: r,
    computed: o,
    methods: i,
    watch: l,
    provide: a,
    inject: c,
    created: u,
    beforeMount: f,
    mounted: d,
    beforeUpdate: m,
    updated: v,
    activated: E,
    deactivated: w,
    beforeDestroy: A,
    beforeUnmount: _,
    destroyed: b,
    unmounted: S,
    render: L,
    renderTracked: N,
    renderTriggered: j,
    errorCaptured: J,
    serverPrefetch: ie,
    expose: le,
    inheritAttrs: oe,
    components: Ae,
    directives: Re,
    filters: ze
  } = t
  if ((c && rh(c, s, null, e.appContext.config.unwrapInjectedRef), i))
    for (const G in i) {
      const W = i[G]
      ne(W) && (s[G] = W.bind(n))
    }
  if (r) {
    const G = r.call(n, n)
    Pe(G) && (e.data = Te(G))
  }
  if (((Po = !0), o))
    for (const G in o) {
      const W = o[G],
        ce = ne(W) ? W.bind(n, n) : ne(W.get) ? W.get.bind(n, n) : dt,
        _t = !ne(W) && ne(W.set) ? W.set.bind(n) : dt,
        Fe = D({ get: ce, set: _t })
      Object.defineProperty(s, G, {
        enumerable: !0,
        configurable: !0,
        get: () => Fe.value,
        set: (rt) => (Fe.value = rt)
      })
    }
  if (l) for (const G in l) ta(l[G], s, n, G)
  if (a) {
    const G = ne(a) ? a.call(n) : a
    Reflect.ownKeys(G).forEach((W) => {
      At(W, G[W])
    })
  }
  u && ea(u, e, 'c')
  function q(G, W) {
    X(W) ? W.forEach((ce) => G(ce.bind(n))) : W && G(W.bind(n))
  }
  if (
    (q(Qd, f),
    q(Ao, d),
    q(Xd, m),
    q(Zl, v),
    q(Yd, E),
    q(Jd, w),
    q(nh, J),
    q(th, N),
    q(eh, j),
    q(Oo, _),
    q(Mo, S),
    q(Zd, ie),
    X(le))
  )
    if (le.length) {
      const G = e.exposed || (e.exposed = {})
      le.forEach((W) => {
        Object.defineProperty(G, W, {
          get: () => n[W],
          set: (ce) => (n[W] = ce)
        })
      })
    } else e.exposed || (e.exposed = {})
  L && e.render === dt && (e.render = L),
    oe != null && (e.inheritAttrs = oe),
    Ae && (e.components = Ae),
    Re && (e.directives = Re)
}
function rh(e, t, n = dt, s = !1) {
  X(e) && (e = To(e))
  for (const r in e) {
    const o = e[r]
    let i
    Pe(o)
      ? 'default' in o
        ? (i = Ot(o.from || r, o.default, !0))
        : (i = Ot(o.from || r))
      : (i = Ot(o)),
      Ce(i) && s
        ? Object.defineProperty(t, r, {
            enumerable: !0,
            configurable: !0,
            get: () => i.value,
            set: (l) => (i.value = l)
          })
        : (t[r] = i)
  }
}
function ea(e, t, n) {
  ht(X(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy), t, n)
}
function ta(e, t, n, s) {
  const r = s.includes('.') ? Ra(n, s) : () => n[s]
  if (Me(e)) {
    const o = t[e]
    ne(o) && ae(r, o)
  } else if (ne(e)) ae(r, e.bind(n))
  else if (Pe(e))
    if (X(e)) e.forEach((o) => ta(o, t, n, s))
    else {
      const o = ne(e.handler) ? e.handler.bind(n) : t[e.handler]
      ne(o) && ae(r, o, e)
    }
}
function na(e) {
  const t = e.type,
    { mixins: n, extends: s } = t,
    {
      mixins: r,
      optionsCache: o,
      config: { optionMergeStrategies: i }
    } = e.appContext,
    l = o.get(t)
  let a
  return (
    l
      ? (a = l)
      : !r.length && !n && !s
      ? (a = t)
      : ((a = {}), r.length && r.forEach((c) => yr(a, c, i, !0)), yr(a, t, i)),
    o.set(t, a),
    a
  )
}
function yr(e, t, n, s = !1) {
  const { mixins: r, extends: o } = t
  o && yr(e, o, n, !0), r && r.forEach((i) => yr(e, i, n, !0))
  for (const i in t)
    if (!(s && i === 'expose')) {
      const l = oh[i] || (n && n[i])
      e[i] = l ? l(e[i], t[i]) : t[i]
    }
  return e
}
const oh = {
  data: sa,
  props: cn,
  emits: cn,
  methods: cn,
  computed: cn,
  beforeCreate: De,
  created: De,
  beforeMount: De,
  mounted: De,
  beforeUpdate: De,
  updated: De,
  beforeDestroy: De,
  beforeUnmount: De,
  destroyed: De,
  unmounted: De,
  activated: De,
  deactivated: De,
  errorCaptured: De,
  serverPrefetch: De,
  components: cn,
  directives: cn,
  watch: lh,
  provide: sa,
  inject: ih
}
function sa(e, t) {
  return t
    ? e
      ? function () {
          return Ne(
            ne(e) ? e.call(this, this) : e,
            ne(t) ? t.call(this, this) : t
          )
        }
      : t
    : e
}
function ih(e, t) {
  return cn(To(e), To(t))
}
function To(e) {
  if (X(e)) {
    const t = {}
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n]
    return t
  }
  return e
}
function De(e, t) {
  return e ? [...new Set([].concat(e, t))] : t
}
function cn(e, t) {
  return e ? Ne(Ne(Object.create(null), e), t) : t
}
function lh(e, t) {
  if (!e) return t
  if (!t) return e
  const n = Ne(Object.create(null), e)
  for (const s in t) n[s] = De(e[s], t[s])
  return n
}
function ah(e, t, n, s = !1) {
  const r = {},
    o = {}
  ir(o, wr, 1), (e.propsDefaults = Object.create(null)), ra(e, t, r, o)
  for (const i in e.propsOptions[0]) i in r || (r[i] = void 0)
  n ? (e.props = s ? r : Rd(r)) : e.type.props ? (e.props = r) : (e.props = o),
    (e.attrs = o)
}
function ch(e, t, n, s) {
  const {
      props: r,
      attrs: o,
      vnode: { patchFlag: i }
    } = e,
    l = pe(r),
    [a] = e.propsOptions
  let c = !1
  if ((s || i > 0) && !(i & 16)) {
    if (i & 8) {
      const u = e.vnode.dynamicProps
      for (let f = 0; f < u.length; f++) {
        let d = u[f]
        const m = t[d]
        if (a)
          if (he(o, d)) m !== o[d] && ((o[d] = m), (c = !0))
          else {
            const v = wt(d)
            r[v] = Io(a, l, v, m, e, !1)
          }
        else m !== o[d] && ((o[d] = m), (c = !0))
      }
    }
  } else {
    ra(e, t, r, o) && (c = !0)
    let u
    for (const f in l)
      (!t || (!he(t, f) && ((u = sn(f)) === f || !he(t, u)))) &&
        (a
          ? n &&
            (n[f] !== void 0 || n[u] !== void 0) &&
            (r[f] = Io(a, l, f, void 0, e, !0))
          : delete r[f])
    if (o !== l) for (const f in o) (!t || !he(t, f)) && (delete o[f], (c = !0))
  }
  c && $t(e, 'set', '$attrs')
}
function ra(e, t, n, s) {
  const [r, o] = e.propsOptions
  let i = !1,
    l
  if (t)
    for (let a in t) {
      if (sr(a)) continue
      const c = t[a]
      let u
      r && he(r, (u = wt(a)))
        ? !o || !o.includes(u)
          ? (n[u] = c)
          : ((l || (l = {}))[u] = c)
        : So(e.emitsOptions, a) ||
          ((!(a in s) || c !== s[a]) && ((s[a] = c), (i = !0)))
    }
  if (o) {
    const a = pe(n),
      c = l || _e
    for (let u = 0; u < o.length; u++) {
      const f = o[u]
      n[f] = Io(r, a, f, c[f], e, !he(c, f))
    }
  }
  return i
}
function Io(e, t, n, s, r, o) {
  const i = e[n]
  if (i != null) {
    const l = he(i, 'default')
    if (l && s === void 0) {
      const a = i.default
      if (i.type !== Function && ne(a)) {
        const { propsDefaults: c } = r
        n in c ? (s = c[n]) : (Dn(r), (s = c[n] = a.call(null, t)), hn())
      } else s = a
    }
    i[0] && (o && !l ? (s = !1) : i[1] && (s === '' || s === sn(n)) && (s = !0))
  }
  return s
}
function oa(e, t, n = !1) {
  const s = t.propsCache,
    r = s.get(e)
  if (r) return r
  const o = e.props,
    i = {},
    l = []
  let a = !1
  if (!ne(e)) {
    const u = (f) => {
      a = !0
      const [d, m] = oa(f, t, !0)
      Ne(i, d), m && l.push(...m)
    }
    !n && t.mixins.length && t.mixins.forEach(u),
      e.extends && u(e.extends),
      e.mixins && e.mixins.forEach(u)
  }
  if (!o && !a) return s.set(e, Mn), Mn
  if (X(o))
    for (let u = 0; u < o.length; u++) {
      const f = wt(o[u])
      ia(f) && (i[f] = _e)
    }
  else if (o)
    for (const u in o) {
      const f = wt(u)
      if (ia(f)) {
        const d = o[u],
          m = (i[f] = X(d) || ne(d) ? { type: d } : d)
        if (m) {
          const v = ca(Boolean, m.type),
            E = ca(String, m.type)
          ;(m[0] = v > -1),
            (m[1] = E < 0 || v < E),
            (v > -1 || he(m, 'default')) && l.push(f)
        }
      }
    }
  const c = [i, l]
  return s.set(e, c), c
}
function ia(e) {
  return e[0] !== '$'
}
function la(e) {
  const t = e && e.toString().match(/^\s*function (\w+)/)
  return t ? t[1] : e === null ? 'null' : ''
}
function aa(e, t) {
  return la(e) === la(t)
}
function ca(e, t) {
  return X(t) ? t.findIndex((n) => aa(n, e)) : ne(t) && aa(t, e) ? 0 : -1
}
const ua = (e) => e[0] === '_' || e === '$stable',
  Ro = (e) => (X(e) ? e.map(Et) : [Et(e)]),
  uh = (e, t, n) => {
    const s = ge((...r) => Ro(t(...r)), n)
    return (s._c = !1), s
  },
  fa = (e, t, n) => {
    const s = e._ctx
    for (const r in e) {
      if (ua(r)) continue
      const o = e[r]
      if (ne(o)) t[r] = uh(r, o, s)
      else if (o != null) {
        const i = Ro(o)
        t[r] = () => i
      }
    }
  },
  da = (e, t) => {
    const n = Ro(t)
    e.slots.default = () => n
  },
  fh = (e, t) => {
    if (e.vnode.shapeFlag & 32) {
      const n = t._
      n ? ((e.slots = pe(t)), ir(t, '_', n)) : fa(t, (e.slots = {}))
    } else (e.slots = {}), t && da(e, t)
    ir(e.slots, wr, 1)
  },
  dh = (e, t, n) => {
    const { vnode: s, slots: r } = e
    let o = !0,
      i = _e
    if (s.shapeFlag & 32) {
      const l = t._
      l
        ? n && l === 1
          ? (o = !1)
          : (Ne(r, t), !n && l === 1 && delete r._)
        : ((o = !t.$stable), fa(t, r)),
        (i = t)
    } else t && (da(e, t), (i = { default: 1 }))
    if (o) for (const l in r) !ua(l) && !(l in i) && delete r[l]
  }
function et(e, t) {
  const n = Ze
  if (n === null) return e
  const s = n.proxy,
    r = e.dirs || (e.dirs = [])
  for (let o = 0; o < t.length; o++) {
    let [i, l, a, c = _e] = t[o]
    ne(i) && (i = { mounted: i, updated: i }),
      i.deep && pn(l),
      r.push({
        dir: i,
        instance: s,
        value: l,
        oldValue: void 0,
        arg: a,
        modifiers: c
      })
  }
  return e
}
function un(e, t, n, s) {
  const r = e.dirs,
    o = t && t.dirs
  for (let i = 0; i < r.length; i++) {
    const l = r[i]
    o && (l.oldValue = o[i].value)
    let a = l.dir[s]
    a && (Rn(), ht(a, n, 8, [e.el, l, e, t]), ln())
  }
}
function ha() {
  return {
    app: null,
    config: {
      isNativeTag: Qf,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap()
  }
}
let hh = 0
function ph(e, t) {
  return function (s, r = null) {
    r != null && !Pe(r) && (r = null)
    const o = ha(),
      i = new Set()
    let l = !1
    const a = (o.app = {
      _uid: hh++,
      _component: s,
      _props: r,
      _container: null,
      _context: o,
      _instance: null,
      version: Hh,
      get config() {
        return o.config
      },
      set config(c) {},
      use(c, ...u) {
        return (
          i.has(c) ||
            (c && ne(c.install)
              ? (i.add(c), c.install(a, ...u))
              : ne(c) && (i.add(c), c(a, ...u))),
          a
        )
      },
      mixin(c) {
        return o.mixins.includes(c) || o.mixins.push(c), a
      },
      component(c, u) {
        return u ? ((o.components[c] = u), a) : o.components[c]
      },
      directive(c, u) {
        return u ? ((o.directives[c] = u), a) : o.directives[c]
      },
      mount(c, u, f) {
        if (!l) {
          const d = Y(s, r)
          return (
            (d.appContext = o),
            u && t ? t(d, c) : e(d, c, f),
            (l = !0),
            (a._container = c),
            (c.__vue_app__ = a),
            Do(d.component) || d.component.proxy
          )
        }
      },
      unmount() {
        l && (e(null, a._container), delete a._container.__vue_app__)
      },
      provide(c, u) {
        return (o.provides[c] = u), a
      }
    })
    return a
  }
}
function jo(e, t, n, s, r = !1) {
  if (X(e)) {
    e.forEach((d, m) => jo(d, t && (X(t) ? t[m] : t), n, s, r))
    return
  }
  if (gr(s) && !r) return
  const o = s.shapeFlag & 4 ? Do(s.component) || s.component.proxy : s.el,
    i = r ? null : o,
    { i: l, r: a } = e,
    c = t && t.r,
    u = l.refs === _e ? (l.refs = {}) : l.refs,
    f = l.setupState
  if (
    (c != null &&
      c !== a &&
      (Me(c)
        ? ((u[c] = null), he(f, c) && (f[c] = null))
        : Ce(c) && (c.value = null)),
    ne(a))
  )
    Bt(a, l, 12, [i, u])
  else {
    const d = Me(a),
      m = Ce(a)
    if (d || m) {
      const v = () => {
        if (e.f) {
          const E = d ? u[a] : a.value
          r
            ? X(E) && ro(E, o)
            : X(E)
            ? E.includes(o) || E.push(o)
            : d
            ? (u[a] = [o])
            : ((a.value = [o]), e.k && (u[e.k] = a.value))
        } else
          d
            ? ((u[a] = i), he(f, a) && (f[a] = i))
            : Ce(a) && ((a.value = i), e.k && (u[e.k] = i))
      }
      i ? ((v.id = -1), je(v, n)) : v()
    }
  }
}
const je = Wd
function mh(e) {
  return gh(e)
}
function gh(e, t) {
  const n = sd()
  n.__VUE__ = !0
  const {
      insert: s,
      remove: r,
      patchProp: o,
      createElement: i,
      createText: l,
      createComment: a,
      setText: c,
      setElementText: u,
      parentNode: f,
      nextSibling: d,
      setScopeId: m = dt,
      cloneNode: v,
      insertStaticContent: E
    } = e,
    w = (
      h,
      g,
      y,
      $ = null,
      k = null,
      I = null,
      F = !1,
      T = null,
      R = !!g.dynamicChildren
    ) => {
      if (h === g) return
      h && !ms(h, g) && (($ = V(h)), Ve(h, k, I, !0), (h = null)),
        g.patchFlag === -2 && ((R = !1), (g.dynamicChildren = null))
      const { type: O, ref: U, shapeFlag: B } = g
      switch (O) {
        case Lo:
          A(h, g, y, $)
          break
        case Dt:
          _(h, g, y, $)
          break
        case _r:
          h == null && b(g, y, $, F)
          break
        case ke:
          Re(h, g, y, $, k, I, F, T, R)
          break
        default:
          B & 1
            ? N(h, g, y, $, k, I, F, T, R)
            : B & 6
            ? ze(h, g, y, $, k, I, F, T, R)
            : (B & 64 || B & 128) && O.process(h, g, y, $, k, I, F, T, R, we)
      }
      U != null && k && jo(U, h && h.ref, I, g || h, !g)
    },
    A = (h, g, y, $) => {
      if (h == null) s((g.el = l(g.children)), y, $)
      else {
        const k = (g.el = h.el)
        g.children !== h.children && c(k, g.children)
      }
    },
    _ = (h, g, y, $) => {
      h == null ? s((g.el = a(g.children || '')), y, $) : (g.el = h.el)
    },
    b = (h, g, y, $) => {
      ;[h.el, h.anchor] = E(h.children, g, y, $)
    },
    S = ({ el: h, anchor: g }, y, $) => {
      let k
      for (; h && h !== g; ) (k = d(h)), s(h, y, $), (h = k)
      s(g, y, $)
    },
    L = ({ el: h, anchor: g }) => {
      let y
      for (; h && h !== g; ) (y = d(h)), r(h), (h = y)
      r(g)
    },
    N = (h, g, y, $, k, I, F, T, R) => {
      ;(F = F || g.type === 'svg'),
        h == null ? j(g, y, $, k, I, F, T, R) : le(h, g, k, I, F, T, R)
    },
    j = (h, g, y, $, k, I, F, T) => {
      let R, O
      const {
        type: U,
        props: B,
        shapeFlag: K,
        transition: Q,
        patchFlag: ue,
        dirs: Ee
      } = h
      if (h.el && v !== void 0 && ue === -1) R = h.el = v(h.el)
      else {
        if (
          ((R = h.el = i(h.type, I, B && B.is, B)),
          K & 8
            ? u(R, h.children)
            : K & 16 &&
              ie(h.children, R, null, $, k, I && U !== 'foreignObject', F, T),
          Ee && un(h, null, $, 'created'),
          B)
        ) {
          for (const xe in B)
            xe !== 'value' &&
              !sr(xe) &&
              o(R, xe, null, B[xe], I, h.children, $, k, P)
          'value' in B && o(R, 'value', null, B.value),
            (O = B.onVnodeBeforeMount) && ot(O, $, h)
        }
        J(R, h, h.scopeId, F, $)
      }
      Ee && un(h, null, $, 'beforeMount')
      const ye = (!k || (k && !k.pendingBranch)) && Q && !Q.persisted
      ye && Q.beforeEnter(R),
        s(R, g, y),
        ((O = B && B.onVnodeMounted) || ye || Ee) &&
          je(() => {
            O && ot(O, $, h), ye && Q.enter(R), Ee && un(h, null, $, 'mounted')
          }, k)
    },
    J = (h, g, y, $, k) => {
      if ((y && m(h, y), $)) for (let I = 0; I < $.length; I++) m(h, $[I])
      if (k) {
        let I = k.subTree
        if (g === I) {
          const F = k.vnode
          J(h, F, F.scopeId, F.slotScopeIds, k.parent)
        }
      }
    },
    ie = (h, g, y, $, k, I, F, T, R = 0) => {
      for (let O = R; O < h.length; O++) {
        const U = (h[O] = T ? Ht(h[O]) : Et(h[O]))
        w(null, U, g, y, $, k, I, F, T)
      }
    },
    le = (h, g, y, $, k, I, F) => {
      const T = (g.el = h.el)
      let { patchFlag: R, dynamicChildren: O, dirs: U } = g
      R |= h.patchFlag & 16
      const B = h.props || _e,
        K = g.props || _e
      let Q
      y && fn(y, !1),
        (Q = K.onVnodeBeforeUpdate) && ot(Q, y, g, h),
        U && un(g, h, y, 'beforeUpdate'),
        y && fn(y, !0)
      const ue = k && g.type !== 'foreignObject'
      if (
        (O
          ? oe(h.dynamicChildren, O, T, y, $, ue, I)
          : F || ce(h, g, T, null, y, $, ue, I, !1),
        R > 0)
      ) {
        if (R & 16) Ae(T, g, B, K, y, $, k)
        else if (
          (R & 2 && B.class !== K.class && o(T, 'class', null, K.class, k),
          R & 4 && o(T, 'style', B.style, K.style, k),
          R & 8)
        ) {
          const Ee = g.dynamicProps
          for (let ye = 0; ye < Ee.length; ye++) {
            const xe = Ee[ye],
              ut = B[xe],
              On = K[xe]
            ;(On !== ut || xe === 'value') &&
              o(T, xe, ut, On, k, h.children, y, $, P)
          }
        }
        R & 1 && h.children !== g.children && u(T, g.children)
      } else !F && O == null && Ae(T, g, B, K, y, $, k)
      ;((Q = K.onVnodeUpdated) || U) &&
        je(() => {
          Q && ot(Q, y, g, h), U && un(g, h, y, 'updated')
        }, $)
    },
    oe = (h, g, y, $, k, I, F) => {
      for (let T = 0; T < g.length; T++) {
        const R = h[T],
          O = g[T],
          U =
            R.el && (R.type === ke || !ms(R, O) || R.shapeFlag & (6 | 64))
              ? f(R.el)
              : y
        w(R, O, U, null, $, k, I, F, !0)
      }
    },
    Ae = (h, g, y, $, k, I, F) => {
      if (y !== $) {
        for (const T in $) {
          if (sr(T)) continue
          const R = $[T],
            O = y[T]
          R !== O && T !== 'value' && o(h, T, O, R, F, g.children, k, I, P)
        }
        if (y !== _e)
          for (const T in y)
            !sr(T) && !(T in $) && o(h, T, y[T], null, F, g.children, k, I, P)
        'value' in $ && o(h, 'value', y.value, $.value)
      }
    },
    Re = (h, g, y, $, k, I, F, T, R) => {
      const O = (g.el = h ? h.el : l('')),
        U = (g.anchor = h ? h.anchor : l(''))
      let { patchFlag: B, dynamicChildren: K, slotScopeIds: Q } = g
      Q && (T = T ? T.concat(Q) : Q),
        h == null
          ? (s(O, y, $), s(U, y, $), ie(g.children, y, U, k, I, F, T, R))
          : B > 0 && B & 64 && K && h.dynamicChildren
          ? (oe(h.dynamicChildren, K, y, k, I, F, T),
            (g.key != null || (k && g === k.subTree)) && pa(h, g, !0))
          : ce(h, g, y, U, k, I, F, T, R)
    },
    ze = (h, g, y, $, k, I, F, T, R) => {
      ;(g.slotScopeIds = T),
        h == null
          ? g.shapeFlag & 512
            ? k.ctx.activate(g, y, $, F, R)
            : Be(g, y, $, k, I, F, R)
          : q(h, g, R)
    },
    Be = (h, g, y, $, k, I, F) => {
      const T = (h.component = Ah(h, $, k))
      if ((Gl(h) && (T.ctx.renderer = we), Oh(T), T.asyncDep)) {
        if ((k && k.registerDep(T, G), !h.el)) {
          const R = (T.subTree = Y(Dt))
          _(null, R, g, y)
        }
        return
      }
      G(T, h, g, y, k, I, F)
    },
    q = (h, g, y) => {
      const $ = (g.component = h.component)
      if (Vd(h, g, y))
        if ($.asyncDep && !$.asyncResolved) {
          W($, g, y)
          return
        } else ($.next = g), Lh($.update), $.update()
      else (g.component = h.component), (g.el = h.el), ($.vnode = g)
    },
    G = (h, g, y, $, k, I, F) => {
      const T = () => {
          if (h.isMounted) {
            let { next: U, bu: B, u: K, parent: Q, vnode: ue } = h,
              Ee = U,
              ye
            fn(h, !1),
              U ? ((U.el = ue.el), W(h, U, F)) : (U = ue),
              B && Tn(B),
              (ye = U.props && U.props.onVnodeBeforeUpdate) && ot(ye, Q, U, ue),
              fn(h, !0)
            const xe = ko(h),
              ut = h.subTree
            ;(h.subTree = xe),
              w(ut, xe, f(ut.el), V(ut), h, k, I),
              (U.el = xe.el),
              Ee === null && Ud(h, xe.el),
              K && je(K, k),
              (ye = U.props && U.props.onVnodeUpdated) &&
                je(() => ot(ye, Q, U, ue), k)
          } else {
            let U
            const { el: B, props: K } = g,
              { bm: Q, m: ue, parent: Ee } = h,
              ye = gr(g)
            if (
              (fn(h, !1),
              Q && Tn(Q),
              !ye && (U = K && K.onVnodeBeforeMount) && ot(U, Ee, g),
              fn(h, !0),
              B && te)
            ) {
              const xe = () => {
                ;(h.subTree = ko(h)), te(B, h.subTree, h, k, null)
              }
              ye
                ? g.type.__asyncLoader().then(() => !h.isUnmounted && xe())
                : xe()
            } else {
              const xe = (h.subTree = ko(h))
              w(null, xe, y, $, h, k, I), (g.el = xe.el)
            }
            if ((ue && je(ue, k), !ye && (U = K && K.onVnodeMounted))) {
              const xe = g
              je(() => ot(U, Ee, xe), k)
            }
            g.shapeFlag & 256 && h.a && je(h.a, k),
              (h.isMounted = !0),
              (g = y = $ = null)
          }
        },
        R = (h.effect = new po(T, () => Aa(h.update), h.scope)),
        O = (h.update = R.run.bind(R))
      ;(O.id = h.uid), fn(h, !0), O()
    },
    W = (h, g, y) => {
      g.component = h
      const $ = h.vnode.props
      ;(h.vnode = g),
        (h.next = null),
        ch(h, g.props, $, y),
        dh(h, g.children, y),
        Rn(),
        Uo(void 0, h.update),
        ln()
    },
    ce = (h, g, y, $, k, I, F, T, R = !1) => {
      const O = h && h.children,
        U = h ? h.shapeFlag : 0,
        B = g.children,
        { patchFlag: K, shapeFlag: Q } = g
      if (K > 0) {
        if (K & 128) {
          Fe(O, B, y, $, k, I, F, T, R)
          return
        } else if (K & 256) {
          _t(O, B, y, $, k, I, F, T, R)
          return
        }
      }
      Q & 8
        ? (U & 16 && P(O, k, I), B !== O && u(y, B))
        : U & 16
        ? Q & 16
          ? Fe(O, B, y, $, k, I, F, T, R)
          : P(O, k, I, !0)
        : (U & 8 && u(y, ''), Q & 16 && ie(B, y, $, k, I, F, T, R))
    },
    _t = (h, g, y, $, k, I, F, T, R) => {
      ;(h = h || Mn), (g = g || Mn)
      const O = h.length,
        U = g.length,
        B = Math.min(O, U)
      let K
      for (K = 0; K < B; K++) {
        const Q = (g[K] = R ? Ht(g[K]) : Et(g[K]))
        w(h[K], Q, y, null, k, I, F, T, R)
      }
      O > U ? P(h, k, I, !0, !1, B) : ie(g, y, $, k, I, F, T, R, B)
    },
    Fe = (h, g, y, $, k, I, F, T, R) => {
      let O = 0
      const U = g.length
      let B = h.length - 1,
        K = U - 1
      for (; O <= B && O <= K; ) {
        const Q = h[O],
          ue = (g[O] = R ? Ht(g[O]) : Et(g[O]))
        if (ms(Q, ue)) w(Q, ue, y, null, k, I, F, T, R)
        else break
        O++
      }
      for (; O <= B && O <= K; ) {
        const Q = h[B],
          ue = (g[K] = R ? Ht(g[K]) : Et(g[K]))
        if (ms(Q, ue)) w(Q, ue, y, null, k, I, F, T, R)
        else break
        B--, K--
      }
      if (O > B) {
        if (O <= K) {
          const Q = K + 1,
            ue = Q < U ? g[Q].el : $
          for (; O <= K; )
            w(null, (g[O] = R ? Ht(g[O]) : Et(g[O])), y, ue, k, I, F, T, R), O++
        }
      } else if (O > K) for (; O <= B; ) Ve(h[O], k, I, !0), O++
      else {
        const Q = O,
          ue = O,
          Ee = new Map()
        for (O = ue; O <= K; O++) {
          const Qe = (g[O] = R ? Ht(g[O]) : Et(g[O]))
          Qe.key != null && Ee.set(Qe.key, O)
        }
        let ye,
          xe = 0
        const ut = K - ue + 1
        let On = !1,
          hl = 0
        const as = new Array(ut)
        for (O = 0; O < ut; O++) as[O] = 0
        for (O = Q; O <= B; O++) {
          const Qe = h[O]
          if (xe >= ut) {
            Ve(Qe, k, I, !0)
            continue
          }
          let bt
          if (Qe.key != null) bt = Ee.get(Qe.key)
          else
            for (ye = ue; ye <= K; ye++)
              if (as[ye - ue] === 0 && ms(Qe, g[ye])) {
                bt = ye
                break
              }
          bt === void 0
            ? Ve(Qe, k, I, !0)
            : ((as[bt - ue] = O + 1),
              bt >= hl ? (hl = bt) : (On = !0),
              w(Qe, g[bt], y, null, k, I, F, T, R),
              xe++)
        }
        const pl = On ? vh(as) : Mn
        for (ye = pl.length - 1, O = ut - 1; O >= 0; O--) {
          const Qe = ue + O,
            bt = g[Qe],
            ml = Qe + 1 < U ? g[Qe + 1].el : $
          as[O] === 0
            ? w(null, bt, y, ml, k, I, F, T, R)
            : On && (ye < 0 || O !== pl[ye] ? rt(bt, y, ml, 2) : ye--)
        }
      }
    },
    rt = (h, g, y, $, k = null) => {
      const { el: I, type: F, transition: T, children: R, shapeFlag: O } = h
      if (O & 6) {
        rt(h.component.subTree, g, y, $)
        return
      }
      if (O & 128) {
        h.suspense.move(g, y, $)
        return
      }
      if (O & 64) {
        F.move(h, g, y, we)
        return
      }
      if (F === ke) {
        s(I, g, y)
        for (let B = 0; B < R.length; B++) rt(R[B], g, y, $)
        s(h.anchor, g, y)
        return
      }
      if (F === _r) {
        S(h, g, y)
        return
      }
      if ($ !== 2 && O & 1 && T)
        if ($ === 0) T.beforeEnter(I), s(I, g, y), je(() => T.enter(I), k)
        else {
          const { leave: B, delayLeave: K, afterLeave: Q } = T,
            ue = () => s(I, g, y),
            Ee = () => {
              B(I, () => {
                ue(), Q && Q()
              })
            }
          K ? K(I, ue, Ee) : Ee()
        }
      else s(I, g, y)
    },
    Ve = (h, g, y, $ = !1, k = !1) => {
      const {
        type: I,
        props: F,
        ref: T,
        children: R,
        dynamicChildren: O,
        shapeFlag: U,
        patchFlag: B,
        dirs: K
      } = h
      if ((T != null && jo(T, null, y, h, !0), U & 256)) {
        g.ctx.deactivate(h)
        return
      }
      const Q = U & 1 && K,
        ue = !gr(h)
      let Ee
      if ((ue && (Ee = F && F.onVnodeBeforeUnmount) && ot(Ee, g, h), U & 6))
        H(h.component, y, $)
      else {
        if (U & 128) {
          h.suspense.unmount(y, $)
          return
        }
        Q && un(h, null, g, 'beforeUnmount'),
          U & 64
            ? h.type.remove(h, g, y, k, we, $)
            : O && (I !== ke || (B > 0 && B & 64))
            ? P(O, g, y, !1, !0)
            : ((I === ke && B & (128 | 256)) || (!k && U & 16)) && P(R, g, y),
          $ && An(h)
      }
      ;((ue && (Ee = F && F.onVnodeUnmounted)) || Q) &&
        je(() => {
          Ee && ot(Ee, g, h), Q && un(h, null, g, 'unmounted')
        }, y)
    },
    An = (h) => {
      const { type: g, el: y, anchor: $, transition: k } = h
      if (g === ke) {
        x(y, $)
        return
      }
      if (g === _r) {
        L(h)
        return
      }
      const I = () => {
        r(y), k && !k.persisted && k.afterLeave && k.afterLeave()
      }
      if (h.shapeFlag & 1 && k && !k.persisted) {
        const { leave: F, delayLeave: T } = k,
          R = () => F(y, I)
        T ? T(h.el, I, R) : R()
      } else I()
    },
    x = (h, g) => {
      let y
      for (; h !== g; ) (y = d(h)), r(h), (h = y)
      r(g)
    },
    H = (h, g, y) => {
      const { bum: $, scope: k, update: I, subTree: F, um: T } = h
      $ && Tn($),
        k.stop(),
        I && ((I.active = !1), Ve(F, h, g, y)),
        T && je(T, g),
        je(() => {
          h.isUnmounted = !0
        }, g),
        g &&
          g.pendingBranch &&
          !g.isUnmounted &&
          h.asyncDep &&
          !h.asyncResolved &&
          h.suspenseId === g.pendingId &&
          (g.deps--, g.deps === 0 && g.resolve())
    },
    P = (h, g, y, $ = !1, k = !1, I = 0) => {
      for (let F = I; F < h.length; F++) Ve(h[F], g, y, $, k)
    },
    V = (h) =>
      h.shapeFlag & 6
        ? V(h.component.subTree)
        : h.shapeFlag & 128
        ? h.suspense.next()
        : d(h.anchor || h.el),
    fe = (h, g, y) => {
      h == null
        ? g._vnode && Ve(g._vnode, null, null, !0)
        : w(g._vnode || null, h, g, null, null, null, y),
        Pa(),
        (g._vnode = h)
    },
    we = {
      p: w,
      um: Ve,
      m: rt,
      r: An,
      mt: Be,
      mc: ie,
      pc: ce,
      pbc: oe,
      n: V,
      o: e
    }
  let re, te
  return (
    t && ([re, te] = t(we)), { render: fe, hydrate: re, createApp: ph(fe, re) }
  )
}
function fn({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n
}
function pa(e, t, n = !1) {
  const s = e.children,
    r = t.children
  if (X(s) && X(r))
    for (let o = 0; o < s.length; o++) {
      const i = s[o]
      let l = r[o]
      l.shapeFlag & 1 &&
        !l.dynamicChildren &&
        ((l.patchFlag <= 0 || l.patchFlag === 32) &&
          ((l = r[o] = Ht(r[o])), (l.el = i.el)),
        n || pa(i, l))
    }
}
function vh(e) {
  const t = e.slice(),
    n = [0]
  let s, r, o, i, l
  const a = e.length
  for (s = 0; s < a; s++) {
    const c = e[s]
    if (c !== 0) {
      if (((r = n[n.length - 1]), e[r] < c)) {
        ;(t[s] = r), n.push(s)
        continue
      }
      for (o = 0, i = n.length - 1; o < i; )
        (l = (o + i) >> 1), e[n[l]] < c ? (o = l + 1) : (i = l)
      c < e[n[o]] && (o > 0 && (t[s] = n[o - 1]), (n[o] = s))
    }
  }
  for (o = n.length, i = n[o - 1]; o-- > 0; ) (n[o] = i), (i = t[i])
  return n
}
const yh = (e) => e.__isTeleport,
  ma = 'components',
  _h = 'directives'
function ga(e, t) {
  return va(ma, e, !0, t) || e
}
const bh = Symbol()
function Pt(e) {
  return va(_h, e)
}
function va(e, t, n = !0, s = !1) {
  const r = Ze || Ie
  if (r) {
    const o = r.type
    if (e === ma) {
      const l = Ho(o)
      if (l && (l === t || l === wt(t) || l === or(wt(t)))) return o
    }
    const i = ya(r[e] || o[e], t) || ya(r.appContext[e], t)
    return !i && s ? o : i
  }
}
function ya(e, t) {
  return e && (e[t] || e[wt(t)] || e[or(wt(t))])
}
const ke = Symbol(void 0),
  Lo = Symbol(void 0),
  Dt = Symbol(void 0),
  _r = Symbol(void 0),
  ps = []
let dn = null
function M(e = !1) {
  ps.push((dn = e ? null : []))
}
function wh() {
  ps.pop(), (dn = ps[ps.length - 1] || null)
}
let br = 1
function _a(e) {
  br += e
}
function ba(e) {
  return (
    (e.dynamicChildren = br > 0 ? dn || Mn : null),
    wh(),
    br > 0 && dn && dn.push(e),
    e
  )
}
function z(e, t, n, s, r, o) {
  return ba(p(e, t, n, s, r, o, !0))
}
function me(e, t, n, s, r) {
  return ba(Y(e, t, n, s, r, !0))
}
function Ln(e) {
  return e ? e.__v_isVNode === !0 : !1
}
function ms(e, t) {
  return e.type === t.type && e.key === t.key
}
const wr = '__vInternal',
  wa = ({ key: e }) => (e != null ? e : null),
  xr = ({ ref: e, ref_key: t, ref_for: n }) =>
    e != null
      ? Me(e) || Ce(e) || ne(e)
        ? { i: Ze, r: e, k: t, f: !!n }
        : e
      : null
function p(
  e,
  t = null,
  n = null,
  s = 0,
  r = null,
  o = e === ke ? 0 : 1,
  i = !1,
  l = !1
) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && wa(t),
    ref: t && xr(t),
    scopeId: pr,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: o,
    patchFlag: s,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null
  }
  return (
    l
      ? (Fo(a, n), o & 128 && e.normalize(a))
      : n && (a.shapeFlag |= Me(n) ? 8 : 16),
    br > 0 &&
      !i &&
      dn &&
      (a.patchFlag > 0 || o & 6) &&
      a.patchFlag !== 32 &&
      dn.push(a),
    a
  )
}
const Y = xh
function xh(e, t = null, n = null, s = 0, r = null, o = !1) {
  if (((!e || e === bh) && (e = Dt), Ln(e))) {
    const l = Fn(e, t, !0)
    return n && Fo(l, n), l
  }
  if ((Ih(e) && (e = e.__vccOpts), t)) {
    t = He(t)
    let { class: l, style: a } = t
    l && !Me(l) && (t.class = $e(l)),
      Pe(a) && (Bl(a) && !X(a) && (a = Ne({}, a)), (t.style = ft(a)))
  }
  const i = Me(e) ? 1 : Kd(e) ? 128 : yh(e) ? 64 : Pe(e) ? 4 : ne(e) ? 2 : 0
  return p(e, t, n, s, r, i, o, !0)
}
function He(e) {
  return e ? (Bl(e) || wr in e ? Ne({}, e) : e) : null
}
function Fn(e, t, n = !1) {
  const { props: s, ref: r, patchFlag: o, children: i } = e,
    l = t ? Sh(s || {}, t) : s
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: l,
    key: l && wa(l),
    ref:
      t && t.ref ? (n && r ? (X(r) ? r.concat(xr(t)) : [r, xr(t)]) : xr(t)) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: i,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== ke ? (o === -1 ? 16 : o | 16) : o,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Fn(e.ssContent),
    ssFallback: e.ssFallback && Fn(e.ssFallback),
    el: e.el,
    anchor: e.anchor
  }
}
function se(e = ' ', t = 0) {
  return Y(Lo, null, e, t)
}
function Eh(e, t) {
  const n = Y(_r, null, e)
  return (n.staticCount = t), n
}
function ve(e = '', t = !1) {
  return t ? (M(), me(Dt, null, e)) : Y(Dt, null, e)
}
function Et(e) {
  return e == null || typeof e == 'boolean'
    ? Y(Dt)
    : X(e)
    ? Y(ke, null, e.slice())
    : typeof e == 'object'
    ? Ht(e)
    : Y(Lo, null, String(e))
}
function Ht(e) {
  return e.el === null || e.memo ? e : Fn(e)
}
function Fo(e, t) {
  let n = 0
  const { shapeFlag: s } = e
  if (t == null) t = null
  else if (X(t)) n = 16
  else if (typeof t == 'object')
    if (s & (1 | 64)) {
      const r = t.default
      r && (r._c && (r._d = !1), Fo(e, r()), r._c && (r._d = !0))
      return
    } else {
      n = 32
      const r = t._
      !r && !(wr in t)
        ? (t._ctx = Ze)
        : r === 3 &&
          Ze &&
          (Ze.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)))
    }
  else
    ne(t)
      ? ((t = { default: t, _ctx: Ze }), (n = 32))
      : ((t = String(t)), s & 64 ? ((n = 16), (t = [se(t)])) : (n = 8))
  ;(e.children = t), (e.shapeFlag |= n)
}
function Sh(...e) {
  const t = {}
  for (let n = 0; n < e.length; n++) {
    const s = e[n]
    for (const r in s)
      if (r === 'class')
        t.class !== s.class && (t.class = $e([t.class, s.class]))
      else if (r === 'style') t.style = ft([t.style, s.style])
      else if (tr(r)) {
        const o = t[r],
          i = s[r]
        o !== i && !(X(o) && o.includes(i)) && (t[r] = o ? [].concat(o, i) : i)
      } else r !== '' && (t[r] = s[r])
  }
  return t
}
function ot(e, t, n, s = null) {
  ht(e, t, 7, [n, s])
}
function Nn(e, t, n, s) {
  let r
  const o = n && n[s]
  if (X(e) || Me(e)) {
    r = new Array(e.length)
    for (let i = 0, l = e.length; i < l; i++)
      r[i] = t(e[i], i, void 0, o && o[i])
  } else if (typeof e == 'number') {
    r = new Array(e)
    for (let i = 0; i < e; i++) r[i] = t(i + 1, i, void 0, o && o[i])
  } else if (Pe(e))
    if (e[Symbol.iterator])
      r = Array.from(e, (i, l) => t(i, l, void 0, o && o[l]))
    else {
      const i = Object.keys(e)
      r = new Array(i.length)
      for (let l = 0, a = i.length; l < a; l++) {
        const c = i[l]
        r[l] = t(e[c], c, l, o && o[l])
      }
    }
  else r = []
  return n && (n[s] = r), r
}
function zt(e, t, n = {}, s, r) {
  if (Ze.isCE) return Y('slot', t === 'default' ? null : { name: t }, s && s())
  let o = e[t]
  o && o._c && (o._d = !1), M()
  const i = o && xa(o(n)),
    l = me(
      ke,
      { key: n.key || `_${t}` },
      i || (s ? s() : []),
      i && e._ === 1 ? 64 : -2
    )
  return (
    !r && l.scopeId && (l.slotScopeIds = [l.scopeId + '-s']),
    o && o._c && (o._d = !0),
    l
  )
}
function xa(e) {
  return e.some((t) =>
    Ln(t) ? !(t.type === Dt || (t.type === ke && !xa(t.children))) : !0
  )
    ? e
    : null
}
const No = (e) => (e ? (Ea(e) ? Do(e) || e.proxy : No(e.parent)) : null),
  Er = Ne(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => No(e.parent),
    $root: (e) => No(e.root),
    $emit: (e) => e.emit,
    $options: (e) => na(e),
    $forceUpdate: (e) => () => Aa(e.update),
    $nextTick: (e) => Ut.bind(e.proxy),
    $watch: (e) => Dh.bind(e)
  }),
  kh = {
    get({ _: e }, t) {
      const {
        ctx: n,
        setupState: s,
        data: r,
        props: o,
        accessCache: i,
        type: l,
        appContext: a
      } = e
      let c
      if (t[0] !== '$') {
        const m = i[t]
        if (m !== void 0)
          switch (m) {
            case 1:
              return s[t]
            case 2:
              return r[t]
            case 4:
              return n[t]
            case 3:
              return o[t]
          }
        else {
          if (s !== _e && he(s, t)) return (i[t] = 1), s[t]
          if (r !== _e && he(r, t)) return (i[t] = 2), r[t]
          if ((c = e.propsOptions[0]) && he(c, t)) return (i[t] = 3), o[t]
          if (n !== _e && he(n, t)) return (i[t] = 4), n[t]
          Po && (i[t] = 0)
        }
      }
      const u = Er[t]
      let f, d
      if (u) return t === '$attrs' && Xe(e, 'get', t), u(e)
      if ((f = l.__cssModules) && (f = f[t])) return f
      if (n !== _e && he(n, t)) return (i[t] = 4), n[t]
      if (((d = a.config.globalProperties), he(d, t))) return d[t]
    },
    set({ _: e }, t, n) {
      const { data: s, setupState: r, ctx: o } = e
      if (r !== _e && he(r, t)) r[t] = n
      else if (s !== _e && he(s, t)) s[t] = n
      else if (he(e.props, t)) return !1
      return t[0] === '$' && t.slice(1) in e ? !1 : ((o[t] = n), !0)
    },
    has(
      {
        _: {
          data: e,
          setupState: t,
          accessCache: n,
          ctx: s,
          appContext: r,
          propsOptions: o
        }
      },
      i
    ) {
      let l
      return (
        !!n[i] ||
        (e !== _e && he(e, i)) ||
        (t !== _e && he(t, i)) ||
        ((l = o[0]) && he(l, i)) ||
        he(s, i) ||
        he(Er, i) ||
        he(r.config.globalProperties, i)
      )
    }
  },
  $h = ha()
let Ch = 0
function Ah(e, t, n) {
  const s = e.type,
    r = (t ? t.appContext : e.appContext) || $h,
    o = {
      uid: Ch++,
      vnode: e,
      type: s,
      parent: t,
      appContext: r,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new rd(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(r.provides),
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: oa(s, r),
      emitsOptions: ql(s, r),
      emit: null,
      emitted: null,
      propsDefaults: _e,
      inheritAttrs: s.inheritAttrs,
      ctx: _e,
      data: _e,
      props: _e,
      attrs: _e,
      slots: _e,
      refs: _e,
      setupState: _e,
      setupContext: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null
    }
  return (
    (o.ctx = { _: o }),
    (o.root = t ? t.root : o),
    (o.emit = Nd.bind(null, o)),
    e.ce && e.ce(o),
    o
  )
}
let Ie = null
const Sr = () => Ie || Ze,
  Dn = (e) => {
    ;(Ie = e), e.scope.on()
  },
  hn = () => {
    Ie && Ie.scope.off(), (Ie = null)
  }
function Ea(e) {
  return e.vnode.shapeFlag & 4
}
let kr = !1
function Oh(e, t = !1) {
  kr = t
  const { props: n, children: s } = e.vnode,
    r = Ea(e)
  ah(e, n, r, t), fh(e, s)
  const o = r ? Mh(e, t) : void 0
  return (kr = !1), o
}
function Mh(e, t) {
  const n = e.type
  ;(e.accessCache = Object.create(null)), (e.proxy = xo(new Proxy(e.ctx, kh)))
  const { setup: s } = n
  if (s) {
    const r = (e.setupContext = s.length > 1 ? Th(e) : null)
    Dn(e), Rn()
    const o = Bt(s, e, 0, [e.props, r])
    if ((ln(), hn(), xl(o))) {
      if ((o.then(hn, hn), t))
        return o
          .then((i) => {
            Sa(e, i, t)
          })
          .catch((i) => {
            $r(i, e, 0)
          })
      e.asyncDep = o
    } else Sa(e, o, t)
  } else $a(e, t)
}
function Sa(e, t, n) {
  ne(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : Pe(t) && (e.setupState = Wl(t)),
    $a(e, n)
}
let ka
function $a(e, t, n) {
  const s = e.type
  if (!e.render) {
    if (!t && ka && !s.render) {
      const r = s.template
      if (r) {
        const { isCustomElement: o, compilerOptions: i } = e.appContext.config,
          { delimiters: l, compilerOptions: a } = s,
          c = Ne(Ne({ isCustomElement: o, delimiters: l }, i), a)
        s.render = ka(r, c)
      }
    }
    e.render = s.render || dt
  }
  Dn(e), Rn(), sh(e), ln(), hn()
}
function Ph(e) {
  return new Proxy(e.attrs, {
    get(t, n) {
      return Xe(e, 'get', '$attrs'), t[n]
    }
  })
}
function Th(e) {
  const t = (s) => {
    e.exposed = s || {}
  }
  let n
  return {
    get attrs() {
      return n || (n = Ph(e))
    },
    slots: e.slots,
    emit: e.emit,
    expose: t
  }
}
function Do(e) {
  if (e.exposed)
    return (
      e.exposeProxy ||
      (e.exposeProxy = new Proxy(Wl(xo(e.exposed)), {
        get(t, n) {
          if (n in t) return t[n]
          if (n in Er) return Er[n](e)
        }
      }))
    )
}
function Ho(e) {
  return (ne(e) && e.displayName) || e.name
}
function Ih(e) {
  return ne(e) && '__vccOpts' in e
}
function Bt(e, t, n, s) {
  let r
  try {
    r = s ? e(...s) : e()
  } catch (o) {
    $r(o, t, n)
  }
  return r
}
function ht(e, t, n, s) {
  if (ne(e)) {
    const o = Bt(e, t, n, s)
    return (
      o &&
        xl(o) &&
        o.catch((i) => {
          $r(i, t, n)
        }),
      o
    )
  }
  const r = []
  for (let o = 0; o < e.length; o++) r.push(ht(e[o], t, n, s))
  return r
}
function $r(e, t, n, s = !0) {
  const r = t ? t.vnode : null
  if (t) {
    let o = t.parent
    const i = t.proxy,
      l = n
    for (; o; ) {
      const c = o.ec
      if (c) {
        for (let u = 0; u < c.length; u++) if (c[u](e, i, l) === !1) return
      }
      o = o.parent
    }
    const a = t.appContext.config.errorHandler
    if (a) {
      Bt(a, null, 10, [e, i, l])
      return
    }
  }
  Rh(e, n, r, s)
}
function Rh(e, t, n, s = !0) {
  console.error(e)
}
let Cr = !1,
  zo = !1
const tt = []
let Tt = 0
const gs = []
let vs = null,
  Hn = 0
const ys = []
let Vt = null,
  zn = 0
const Ca = Promise.resolve()
let Bo = null,
  Vo = null
function Ut(e) {
  const t = Bo || Ca
  return e ? t.then(this ? e.bind(this) : e) : t
}
function jh(e) {
  let t = Tt + 1,
    n = tt.length
  for (; t < n; ) {
    const s = (t + n) >>> 1
    _s(tt[s]) < e ? (t = s + 1) : (n = s)
  }
  return t
}
function Aa(e) {
  ;(!tt.length || !tt.includes(e, Cr && e.allowRecurse ? Tt + 1 : Tt)) &&
    e !== Vo &&
    (e.id == null ? tt.push(e) : tt.splice(jh(e.id), 0, e), Oa())
}
function Oa() {
  !Cr && !zo && ((zo = !0), (Bo = Ca.then(Ta)))
}
function Lh(e) {
  const t = tt.indexOf(e)
  t > Tt && tt.splice(t, 1)
}
function Ma(e, t, n, s) {
  X(e)
    ? n.push(...e)
    : (!t || !t.includes(e, e.allowRecurse ? s + 1 : s)) && n.push(e),
    Oa()
}
function Fh(e) {
  Ma(e, vs, gs, Hn)
}
function Nh(e) {
  Ma(e, Vt, ys, zn)
}
function Uo(e, t = null) {
  if (gs.length) {
    for (
      Vo = t, vs = [...new Set(gs)], gs.length = 0, Hn = 0;
      Hn < vs.length;
      Hn++
    )
      vs[Hn]()
    ;(vs = null), (Hn = 0), (Vo = null), Uo(e, t)
  }
}
function Pa(e) {
  if (ys.length) {
    const t = [...new Set(ys)]
    if (((ys.length = 0), Vt)) {
      Vt.push(...t)
      return
    }
    for (Vt = t, Vt.sort((n, s) => _s(n) - _s(s)), zn = 0; zn < Vt.length; zn++)
      Vt[zn]()
    ;(Vt = null), (zn = 0)
  }
}
const _s = (e) => (e.id == null ? 1 / 0 : e.id)
function Ta(e) {
  ;(zo = !1), (Cr = !0), Uo(e), tt.sort((n, s) => _s(n) - _s(s))
  const t = dt
  try {
    for (Tt = 0; Tt < tt.length; Tt++) {
      const n = tt[Tt]
      n && n.active !== !1 && Bt(n, null, 14)
    }
  } finally {
    ;(Tt = 0),
      (tt.length = 0),
      Pa(),
      (Cr = !1),
      (Bo = null),
      (tt.length || gs.length || ys.length) && Ta(e)
  }
}
function Ko(e, t) {
  return Wo(e, null, t)
}
const Ia = {}
function ae(e, t, n) {
  return Wo(e, t, n)
}
function Wo(
  e,
  t,
  { immediate: n, deep: s, flush: r, onTrack: o, onTrigger: i } = _e
) {
  const l = Ie
  let a,
    c = !1,
    u = !1
  if (
    (Ce(e)
      ? ((a = () => e.value), (c = !!e._shallow))
      : jn(e)
      ? ((a = () => e), (s = !0))
      : X(e)
      ? ((u = !0),
        (c = e.some(jn)),
        (a = () =>
          e.map((A) => {
            if (Ce(A)) return A.value
            if (jn(A)) return pn(A)
            if (ne(A)) return Bt(A, l, 2)
          })))
      : ne(e)
      ? t
        ? (a = () => Bt(e, l, 2))
        : (a = () => {
            if (!(l && l.isUnmounted)) return f && f(), ht(e, l, 3, [d])
          })
      : (a = dt),
    t && s)
  ) {
    const A = a
    a = () => pn(A())
  }
  let f,
    d = (A) => {
      f = w.onStop = () => {
        Bt(A, l, 4)
      }
    }
  if (kr)
    return (d = dt), t ? n && ht(t, l, 3, [a(), u ? [] : void 0, d]) : a(), dt
  let m = u ? [] : Ia
  const v = () => {
    if (!!w.active)
      if (t) {
        const A = w.run()
        ;(s || c || (u ? A.some((_, b) => cs(_, m[b])) : cs(A, m))) &&
          (f && f(), ht(t, l, 3, [A, m === Ia ? void 0 : m, d]), (m = A))
      } else w.run()
  }
  v.allowRecurse = !!t
  let E
  r === 'sync'
    ? (E = v)
    : r === 'post'
    ? (E = () => je(v, l && l.suspense))
    : (E = () => {
        !l || l.isMounted ? Fh(v) : v()
      })
  const w = new po(a, E)
  return (
    t
      ? n
        ? v()
        : (m = w.run())
      : r === 'post'
      ? je(w.run.bind(w), l && l.suspense)
      : w.run(),
    () => {
      w.stop(), l && l.scope && ro(l.scope.effects, w)
    }
  )
}
function Dh(e, t, n) {
  const s = this.proxy,
    r = Me(e) ? (e.includes('.') ? Ra(s, e) : () => s[e]) : e.bind(s, s)
  let o
  ne(t) ? (o = t) : ((o = t.handler), (n = t))
  const i = Ie
  Dn(this)
  const l = Wo(r, o.bind(s), n)
  return i ? Dn(i) : hn(), l
}
function Ra(e, t) {
  const n = t.split('.')
  return () => {
    let s = e
    for (let r = 0; r < n.length && s; r++) s = s[n[r]]
    return s
  }
}
function pn(e, t) {
  if (!Pe(e) || e.__v_skip || ((t = t || new Set()), t.has(e))) return e
  if ((t.add(e), Ce(e))) pn(e.value, t)
  else if (X(e)) for (let n = 0; n < e.length; n++) pn(e[n], t)
  else if (wl(e) || Pn(e))
    e.forEach((n) => {
      pn(n, t)
    })
  else if (Sl(e)) for (const n in e) pn(e[n], t)
  return e
}
function Bn(e, t, n) {
  const s = arguments.length
  return s === 2
    ? Pe(t) && !X(t)
      ? Ln(t)
        ? Y(e, null, [t])
        : Y(e, t)
      : Y(e, null, t)
    : (s > 3
        ? (n = Array.prototype.slice.call(arguments, 2))
        : s === 3 && Ln(n) && (n = [n]),
      Y(e, t, n))
}
const Hh = '3.2.26',
  zh = 'http://www.w3.org/2000/svg',
  Vn = typeof document != 'undefined' ? document : null,
  ja = new Map(),
  Bh = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null)
    },
    remove: (e) => {
      const t = e.parentNode
      t && t.removeChild(e)
    },
    createElement: (e, t, n, s) => {
      const r = t
        ? Vn.createElementNS(zh, e)
        : Vn.createElement(e, n ? { is: n } : void 0)
      return (
        e === 'select' &&
          s &&
          s.multiple != null &&
          r.setAttribute('multiple', s.multiple),
        r
      )
    },
    createText: (e) => Vn.createTextNode(e),
    createComment: (e) => Vn.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t
    },
    setElementText: (e, t) => {
      e.textContent = t
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => Vn.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, '')
    },
    cloneNode(e) {
      const t = e.cloneNode(!0)
      return '_value' in e && (t._value = e._value), t
    },
    insertStaticContent(e, t, n, s) {
      const r = n ? n.previousSibling : t.lastChild
      let o = ja.get(e)
      if (!o) {
        const i = Vn.createElement('template')
        if (((i.innerHTML = s ? `<svg>${e}</svg>` : e), (o = i.content), s)) {
          const l = o.firstChild
          for (; l.firstChild; ) o.appendChild(l.firstChild)
          o.removeChild(l)
        }
        ja.set(e, o)
      }
      return (
        t.insertBefore(o.cloneNode(!0), n),
        [r ? r.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild]
      )
    }
  }
function Vh(e, t, n) {
  const s = e._vtc
  s && (t = (t ? [t, ...s] : [...s]).join(' ')),
    t == null
      ? e.removeAttribute('class')
      : n
      ? e.setAttribute('class', t)
      : (e.className = t)
}
function Uh(e, t, n) {
  const s = e.style,
    r = Me(n)
  if (n && !r) {
    for (const o in n) qo(s, o, n[o])
    if (t && !Me(t)) for (const o in t) n[o] == null && qo(s, o, '')
  } else {
    const o = s.display
    r ? t !== n && (s.cssText = n) : t && e.removeAttribute('style'),
      '_vod' in e && (s.display = o)
  }
}
const La = /\s*!important$/
function qo(e, t, n) {
  if (X(n)) n.forEach((s) => qo(e, t, s))
  else if (t.startsWith('--')) e.setProperty(t, n)
  else {
    const s = Kh(e, t)
    La.test(n)
      ? e.setProperty(sn(s), n.replace(La, ''), 'important')
      : (e[s] = n)
  }
}
const Fa = ['Webkit', 'Moz', 'ms'],
  Yo = {}
function Kh(e, t) {
  const n = Yo[t]
  if (n) return n
  let s = wt(t)
  if (s !== 'filter' && s in e) return (Yo[t] = s)
  s = or(s)
  for (let r = 0; r < Fa.length; r++) {
    const o = Fa[r] + s
    if (o in e) return (Yo[t] = o)
  }
  return t
}
const Na = 'http://www.w3.org/1999/xlink'
function Wh(e, t, n, s, r) {
  if (s && t.startsWith('xlink:'))
    n == null
      ? e.removeAttributeNS(Na, t.slice(6, t.length))
      : e.setAttributeNS(Na, t, n)
  else {
    const o = qf(t)
    n == null || (o && !_l(n))
      ? e.removeAttribute(t)
      : e.setAttribute(t, o ? '' : n)
  }
}
function qh(e, t, n, s, r, o, i) {
  if (t === 'innerHTML' || t === 'textContent') {
    s && i(s, r, o), (e[t] = n == null ? '' : n)
    return
  }
  if (t === 'value' && e.tagName !== 'PROGRESS' && !e.tagName.includes('-')) {
    e._value = n
    const l = n == null ? '' : n
    ;(e.value !== l || e.tagName === 'OPTION') && (e.value = l),
      n == null && e.removeAttribute(t)
    return
  }
  if (n === '' || n == null) {
    const l = typeof e[t]
    if (l === 'boolean') {
      e[t] = _l(n)
      return
    } else if (n == null && l === 'string') {
      ;(e[t] = ''), e.removeAttribute(t)
      return
    } else if (l === 'number') {
      try {
        e[t] = 0
      } catch {}
      e.removeAttribute(t)
      return
    }
  }
  try {
    e[t] = n
  } catch {}
}
let Ar = Date.now,
  Da = !1
if (typeof window != 'undefined') {
  Ar() > document.createEvent('Event').timeStamp &&
    (Ar = () => performance.now())
  const e = navigator.userAgent.match(/firefox\/(\d+)/i)
  Da = !!(e && Number(e[1]) <= 53)
}
let Jo = 0
const Yh = Promise.resolve(),
  Jh = () => {
    Jo = 0
  },
  Gh = () => Jo || (Yh.then(Jh), (Jo = Ar()))
function Un(e, t, n, s) {
  e.addEventListener(t, n, s)
}
function Qh(e, t, n, s) {
  e.removeEventListener(t, n, s)
}
function Xh(e, t, n, s, r = null) {
  const o = e._vei || (e._vei = {}),
    i = o[t]
  if (s && i) i.value = s
  else {
    const [l, a] = Zh(t)
    if (s) {
      const c = (o[t] = ep(s, r))
      Un(e, l, c, a)
    } else i && (Qh(e, l, i, a), (o[t] = void 0))
  }
}
const Ha = /(?:Once|Passive|Capture)$/
function Zh(e) {
  let t
  if (Ha.test(e)) {
    t = {}
    let n
    for (; (n = e.match(Ha)); )
      (e = e.slice(0, e.length - n[0].length)), (t[n[0].toLowerCase()] = !0)
  }
  return [sn(e.slice(2)), t]
}
function ep(e, t) {
  const n = (s) => {
    const r = s.timeStamp || Ar()
    ;(Da || r >= n.attached - 1) && ht(tp(s, n.value), t, 5, [s])
  }
  return (n.value = e), (n.attached = Gh()), n
}
function tp(e, t) {
  if (X(t)) {
    const n = e.stopImmediatePropagation
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0)
      }),
      t.map((s) => (r) => !r._stopped && s(r))
    )
  } else return t
}
const za = /^on[a-z]/,
  np = (e, t, n, s, r = !1, o, i, l, a) => {
    t === 'class'
      ? Vh(e, s, r)
      : t === 'style'
      ? Uh(e, n, s)
      : tr(t)
      ? so(t) || Xh(e, t, n, s, i)
      : (
          t[0] === '.'
            ? ((t = t.slice(1)), !0)
            : t[0] === '^'
            ? ((t = t.slice(1)), !1)
            : sp(e, t, s, r)
        )
      ? qh(e, t, s, o, i, l, a)
      : (t === 'true-value'
          ? (e._trueValue = s)
          : t === 'false-value' && (e._falseValue = s),
        Wh(e, t, s, r))
  }
function sp(e, t, n, s) {
  return s
    ? !!(
        t === 'innerHTML' ||
        t === 'textContent' ||
        (t in e && za.test(t) && ne(n))
      )
    : t === 'spellcheck' ||
      t === 'draggable' ||
      t === 'form' ||
      (t === 'list' && e.tagName === 'INPUT') ||
      (t === 'type' && e.tagName === 'TEXTAREA') ||
      (za.test(t) && Me(n))
    ? !1
    : t in e
}
const Ba = (e) => {
  const t = e.props['onUpdate:modelValue']
  return X(t) ? (n) => Tn(t, n) : t
}
function rp(e) {
  e.target.composing = !0
}
function Va(e) {
  const t = e.target
  t.composing && ((t.composing = !1), op(t, 'input'))
}
function op(e, t) {
  const n = document.createEvent('HTMLEvents')
  n.initEvent(t, !0, !0), e.dispatchEvent(n)
}
const ip = {
    created(e, { modifiers: { lazy: t, trim: n, number: s } }, r) {
      e._assign = Ba(r)
      const o = s || (r.props && r.props.type === 'number')
      Un(e, t ? 'change' : 'input', (i) => {
        if (i.target.composing) return
        let l = e.value
        n ? (l = l.trim()) : o && (l = ao(l)), e._assign(l)
      }),
        n &&
          Un(e, 'change', () => {
            e.value = e.value.trim()
          }),
        t ||
          (Un(e, 'compositionstart', rp),
          Un(e, 'compositionend', Va),
          Un(e, 'change', Va))
    },
    mounted(e, { value: t }) {
      e.value = t == null ? '' : t
    },
    beforeUpdate(
      e,
      { value: t, modifiers: { lazy: n, trim: s, number: r } },
      o
    ) {
      if (
        ((e._assign = Ba(o)),
        e.composing ||
          (document.activeElement === e &&
            (n ||
              (s && e.value.trim() === t) ||
              ((r || e.type === 'number') && ao(e.value) === t))))
      )
        return
      const i = t == null ? '' : t
      e.value !== i && (e.value = i)
    }
  },
  lp = {
    esc: 'escape',
    space: ' ',
    up: 'arrow-up',
    left: 'arrow-left',
    right: 'arrow-right',
    down: 'arrow-down',
    delete: 'backspace'
  },
  Ua = (e, t) => (n) => {
    if (!('key' in n)) return
    const s = sn(n.key)
    if (t.some((r) => r === s || lp[r] === s)) return e(n)
  },
  Ka = {
    beforeMount(e, { value: t }, { transition: n }) {
      ;(e._vod = e.style.display === 'none' ? '' : e.style.display),
        n && t ? n.beforeEnter(e) : bs(e, t)
    },
    mounted(e, { value: t }, { transition: n }) {
      n && t && n.enter(e)
    },
    updated(e, { value: t, oldValue: n }, { transition: s }) {
      !t != !n &&
        (s
          ? t
            ? (s.beforeEnter(e), bs(e, !0), s.enter(e))
            : s.leave(e, () => {
                bs(e, !1)
              })
          : bs(e, t))
    },
    beforeUnmount(e, { value: t }) {
      bs(e, t)
    }
  }
function bs(e, t) {
  e.style.display = t ? e._vod : 'none'
}
const ap = Ne({ patchProp: np }, Bh)
let Wa
function cp() {
  return Wa || (Wa = mh(ap))
}
const up = (...e) => {
  const t = cp().createApp(...e),
    { mount: n } = t
  return (
    (t.mount = (s) => {
      const r = fp(s)
      if (!r) return
      const o = t._component
      !ne(o) && !o.render && !o.template && (o.template = r.innerHTML),
        (r.innerHTML = '')
      const i = n(r, !1, r instanceof SVGElement)
      return (
        r instanceof Element &&
          (r.removeAttribute('v-cloak'), r.setAttribute('data-v-app', '')),
        i
      )
    }),
    t
  )
}
function fp(e) {
  return Me(e) ? document.querySelector(e) : e
}
var dp = Object.defineProperty,
  qa = Object.getOwnPropertySymbols,
  hp = Object.prototype.hasOwnProperty,
  pp = Object.prototype.propertyIsEnumerable,
  Ya = (e, t, n) =>
    t in e
      ? dp(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  mp = (e, t) => {
    for (var n in t || (t = {})) hp.call(t, n) && Ya(e, n, t[n])
    if (qa) for (var n of qa(t)) pp.call(t, n) && Ya(e, n, t[n])
    return e
  },
  Ja = 'usehead',
  Ga = 'head:count',
  Go = 'data-head-attrs',
  gp = (e, t, n) => {
    const s = n.createElement(e)
    for (const r of Object.keys(t)) {
      let o = t[r]
      r === 'key' ||
        o === !1 ||
        (r === 'children' ? (s.textContent = o) : s.setAttribute(r, o))
    }
    return s
  }
function vp(e, t) {
  if (e instanceof HTMLElement && t instanceof HTMLElement) {
    const n = t.getAttribute('nonce')
    if (n && !e.getAttribute('nonce')) {
      const s = t.cloneNode(!0)
      return (
        s.setAttribute('nonce', ''),
        (s.nonce = n),
        n === e.nonce && e.isEqualNode(s)
      )
    }
  }
  return e.isEqualNode(t)
}
var Qa = (e) => {
    const t = ['key', 'id', 'name', 'property']
    for (const n of t) {
      const s = typeof e.getAttribute == 'function' ? e.getAttribute(n) : e[n]
      if (s !== void 0) return { name: n, value: s }
    }
  },
  yp = () => {
    const e = Ot(Ja)
    if (!e) throw new Error('You may forget to apply app.use(head)')
    return e
  },
  _p = [
    'title',
    'meta',
    'link',
    'base',
    'style',
    'script',
    'htmlAttrs',
    'bodyAttrs'
  ],
  bp = (e) => {
    const t = []
    for (const n of Object.keys(e))
      if (e[n] != null) {
        if (n === 'title') t.push({ tag: n, props: { children: e[n] } })
        else if (n === 'base')
          t.push({ tag: n, props: mp({ key: 'default' }, e[n]) })
        else if (_p.includes(n)) {
          const s = e[n]
          Array.isArray(s)
            ? s.forEach((r) => {
                t.push({ tag: n, props: r })
              })
            : s && t.push({ tag: n, props: s })
        }
      }
    return t
  },
  Xa = (e, t) => {
    const n = e.getAttribute(Go)
    if (n) for (const r of n.split(',')) r in t || e.removeAttribute(r)
    const s = []
    for (const r in t) {
      const o = t[r]
      o != null &&
        (o === !1 ? e.removeAttribute(r) : e.setAttribute(r, o), s.push(r))
    }
    s.length ? e.setAttribute(Go, s.join(',')) : e.removeAttribute(Go)
  },
  wp = (e = window.document, t, n) => {
    var s
    const r = e.head
    let o = r.querySelector(`meta[name="${Ga}"]`)
    const i = o ? Number(o.getAttribute('content')) : 0,
      l = []
    if (o)
      for (
        let c = 0, u = o.previousElementSibling;
        c < i;
        c++, u = u.previousElementSibling
      )
        ((s = u == null ? void 0 : u.tagName) == null
          ? void 0
          : s.toLowerCase()) === t && l.push(u)
    else
      (o = e.createElement('meta')),
        o.setAttribute('name', Ga),
        o.setAttribute('content', '0'),
        r.append(o)
    let a = n.map((c) => gp(c.tag, c.props, e))
    ;(a = a.filter((c) => {
      for (let u = 0; u < l.length; u++) {
        const f = l[u]
        if (vp(f, c)) return l.splice(u, 1), !1
      }
      return !0
    })),
      l.forEach((c) => {
        var u
        return (u = c.parentNode) == null ? void 0 : u.removeChild(c)
      }),
      a.forEach((c) => {
        var u
        const f = Qa(c)
        if (f) {
          const d = r.querySelector(
            `${c.tagName.toLowerCase()}[${f.name}="${f.value}"]`
          )
          d && ((u = d.parentNode) == null || u.removeChild(d))
        }
        r.insertBefore(c, o)
      }),
      o.setAttribute('content', '' + (i - l.length + a.length))
  },
  xp = () => {
    let e = []
    const t = {
      install(n) {
        ;(n.config.globalProperties.$head = t), n.provide(Ja, t)
      },
      get headTags() {
        const n = []
        return (
          e.forEach((s) => {
            bp(s.value).forEach((o) => {
              if (o.tag === 'meta' || o.tag === 'base' || o.tag === 'script') {
                const i = Qa(o.props)
                if (i) {
                  let l = -1
                  for (let a = 0; a < n.length; a++) {
                    const c = n[a],
                      u = c.props[i.name],
                      f = o.props[i.name]
                    if (c.tag === o.tag && u === f) {
                      l = a
                      break
                    }
                  }
                  l !== -1 && n.splice(l, 1)
                }
              }
              n.push(o)
            })
          }),
          n
        )
      },
      addHeadObjs(n) {
        e.push(n)
      },
      removeHeadObjs(n) {
        e = e.filter((s) => s !== n)
      },
      updateDOM(n = window.document) {
        let s,
          r = {},
          o = {}
        const i = {}
        for (const l of t.headTags) {
          if (l.tag === 'title') {
            s = l.props.children
            continue
          }
          if (l.tag === 'htmlAttrs') {
            Object.assign(r, l.props)
            continue
          }
          if (l.tag === 'bodyAttrs') {
            Object.assign(o, l.props)
            continue
          }
          ;(i[l.tag] = i[l.tag] || []), i[l.tag].push(l)
        }
        s !== void 0 && (n.title = s), Xa(n.documentElement, r), Xa(n.body, o)
        for (const l of Object.keys(i)) wp(n, l, i[l])
      }
    }
    return t
  },
  Ep = typeof window != 'undefined',
  Sp = (e) => {
    const t = Z(e),
      n = yp()
    n.addHeadObjs(t),
      Ep &&
        (Ko(() => {
          n.updateDOM()
        }),
        Oo(() => {
          n.removeHeadObjs(t), n.updateDOM()
        }))
  }
function nt(e, t, n) {
  return Array.isArray(e)
    ? ((e.length = Math.max(e.length, t)), e.splice(t, 1, n), n)
    : ((e[t] = n), n)
}
function kp(e, t) {
  if (Array.isArray(e)) {
    e.splice(t, 1)
    return
  }
  delete e[t]
}
function it(...e) {
  return D(() => e.every((t) => C(t)))
}
function Or(e) {
  return id() ? (ld(e), !0) : !1
}
const Kn = typeof window != 'undefined',
  $p = Object.prototype.toString,
  Cp = (e) => typeof e == 'number',
  Za = (e) => typeof e == 'string',
  Qo = (e) => $p.call(e) === '[object Object]',
  Ap = () => +Date.now(),
  Kt = () => {}
function Op(e, t) {
  function n(...s) {
    e(() => t.apply(this, s), { fn: t, thisArg: this, args: s })
  }
  return n
}
const Mp = (e) => e()
function Pp(e, t) {
  var n
  if (typeof e == 'number') return e + t
  const s = ((n = e.match(/^-?[0-9]+\.?[0-9]*/)) == null ? void 0 : n[0]) || '',
    r = e.slice(s.length),
    o = parseFloat(s) + t
  return Number.isNaN(o) ? e : o + r
}
var ec = Object.getOwnPropertySymbols,
  Tp = Object.prototype.hasOwnProperty,
  Ip = Object.prototype.propertyIsEnumerable,
  Rp = (e, t) => {
    var n = {}
    for (var s in e) Tp.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s])
    if (e != null && ec)
      for (var s of ec(e)) t.indexOf(s) < 0 && Ip.call(e, s) && (n[s] = e[s])
    return n
  }
function jp(e, t, n = {}) {
  const s = n,
    { eventFilter: r = Mp } = s,
    o = Rp(s, ['eventFilter'])
  return ae(e, Op(r, t), o)
}
function It(e) {
  return D(() => !C(e))
}
function Lp(e) {
  if (!Ce(e)) return Te(e)
  const t = new Proxy(
    {},
    {
      get(n, s, r) {
        return Reflect.get(e.value, s, r)
      },
      set(n, s, r) {
        return (e.value[s] = r), !0
      },
      deleteProperty(n, s) {
        return Reflect.deleteProperty(e.value, s)
      },
      has(n, s) {
        return Reflect.has(e.value, s)
      },
      ownKeys() {
        return Object.keys(e.value)
      },
      getOwnPropertyDescriptor() {
        return { enumerable: !0, configurable: !0 }
      }
    }
  )
  return Te(t)
}
function tc(e, t = !0) {
  Sr() ? Ao(e) : t ? e() : Ut(e)
}
function Xo(e) {
  Sr() && Mo(e)
}
function nc(e = !1) {
  if (Ce(e))
    return (t) => {
      e.value = typeof t == 'boolean' ? t : !e.value
    }
  {
    const t = Z(e)
    return [
      t,
      (s) => {
        t.value = typeof s == 'boolean' ? s : !t.value
      }
    ]
  }
}
function Fp(e, t, n) {
  return ae(
    e,
    (s, r, o) => {
      s && t(s, r, o)
    },
    n
  )
}
function Rt(e) {
  var t
  const n = C(e)
  return (t = n == null ? void 0 : n.$el) != null ? t : n
}
const lt = Kn ? window : void 0,
  Np = Kn ? window.document : void 0
function We(...e) {
  let t, n, s, r
  if ((Za(e[0]) ? (([n, s, r] = e), (t = lt)) : ([t, n, s, r] = e), !t))
    return Kt
  let o = Kt
  const i = ae(
      () => C(t),
      (a) => {
        o(),
          !!a &&
            (a.addEventListener(n, s, r),
            (o = () => {
              a.removeEventListener(n, s, r), (o = Kt)
            }))
      },
      { immediate: !0, flush: 'post' }
    ),
    l = () => {
      i(), o()
    }
  return Or(l), l
}
function Dp(e, t, n = {}) {
  const { window: s = lt } = n
  if (!s) return
  const r = Z(!0),
    i = [
      We(
        s,
        'click',
        (a) => {
          const c = Rt(e)
          !c ||
            c === a.target ||
            a.composedPath().includes(c) ||
            !r.value ||
            t(a)
        },
        { passive: !0, capture: !0 }
      ),
      We(
        s,
        'pointerdown',
        (a) => {
          const c = Rt(e)
          r.value = !!c && !a.composedPath().includes(c)
        },
        { passive: !0 }
      )
    ]
  return () => i.forEach((a) => a())
}
const Hp = (e) =>
  typeof e == 'function'
    ? e
    : typeof e == 'string'
    ? (t) => t.key === e
    : Array.isArray(e)
    ? (t) => e.includes(t.key)
    : e
    ? () => !0
    : () => !1
function zp(e, t, n = {}) {
  const { target: s = lt, eventName: r = 'keydown', passive: o = !1 } = n,
    i = Hp(e)
  return We(
    s,
    r,
    (a) => {
      i(a) && t(a)
    },
    o
  )
}
function Bp(e = {}) {
  const { window: t = lt } = e,
    n = Z(0)
  return (
    t &&
      (We(t, 'blur', () => (n.value += 1), !0),
      We(t, 'focus', () => (n.value += 1), !0)),
    D(() => (n.value, t == null ? void 0 : t.document.activeElement))
  )
}
function Mr(e, t = {}) {
  const { window: n = lt } = t
  let s
  const r = Z(!1),
    o = () => {
      !n || (s || (s = n.matchMedia(e)), (r.value = s.matches))
    }
  return (
    tc(() => {
      o(),
        !!s &&
          ('addEventListener' in s
            ? s.addEventListener('change', o)
            : s.addListener(o),
          Or(() => {
            'removeEventListener' in o
              ? s.removeEventListener('change', o)
              : s.removeListener(o)
          }))
    }),
    r
  )
}
const Vp = { sm: 640, md: 768, lg: 1024, xl: 1280, '2xl': 1536 }
var Up = Object.defineProperty,
  sc = Object.getOwnPropertySymbols,
  Kp = Object.prototype.hasOwnProperty,
  Wp = Object.prototype.propertyIsEnumerable,
  rc = (e, t, n) =>
    t in e
      ? Up(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  qp = (e, t) => {
    for (var n in t || (t = {})) Kp.call(t, n) && rc(e, n, t[n])
    if (sc) for (var n of sc(t)) Wp.call(t, n) && rc(e, n, t[n])
    return e
  }
function Yp(e, t = {}) {
  function n(l, a) {
    let c = e[l]
    return (
      a != null && (c = Pp(c, a)), typeof c == 'number' && (c = `${c}px`), c
    )
  }
  const { window: s = lt } = t
  function r(l) {
    return s ? s.matchMedia(l).matches : !1
  }
  const o = (l) => Mr(`(min-width: ${n(l)})`, t),
    i = Object.keys(e).reduce(
      (l, a) => (
        Object.defineProperty(l, a, {
          get: () => o(a),
          enumerable: !0,
          configurable: !0
        }),
        l
      ),
      {}
    )
  return qp(
    {
      greater: o,
      smaller(l) {
        return Mr(`(max-width: ${n(l, -0.1)})`, t)
      },
      between(l, a) {
        return Mr(`(min-width: ${n(l)}) and (max-width: ${n(a, -0.1)})`, t)
      },
      isGreater(l) {
        return r(`(min-width: ${n(l)})`)
      },
      isSmaller(l) {
        return r(`(max-width: ${n(l, -0.1)})`)
      },
      isInBetween(l, a) {
        return r(`(min-width: ${n(l)}) and (max-width: ${n(a, -0.1)})`)
      }
    },
    i
  )
}
const Zo = '__vueuse_ssr_handlers__'
globalThis[Zo] = globalThis[Zo] || {}
const Jp = globalThis[Zo]
function Gp(e, t) {
  return Jp[e] || t
}
function Qp(e) {
  return e == null
    ? 'any'
    : e instanceof Set
    ? 'set'
    : e instanceof Map
    ? 'map'
    : typeof e == 'boolean'
    ? 'boolean'
    : typeof e == 'string'
    ? 'string'
    : typeof e == 'object' || Array.isArray(e)
    ? 'object'
    : Number.isNaN(e)
    ? 'any'
    : 'number'
}
const Xp = {
  boolean: { read: (e) => e === 'true', write: (e) => String(e) },
  object: { read: (e) => JSON.parse(e), write: (e) => JSON.stringify(e) },
  number: { read: (e) => Number.parseFloat(e), write: (e) => String(e) },
  any: { read: (e) => e, write: (e) => String(e) },
  string: { read: (e) => e, write: (e) => String(e) },
  map: {
    read: (e) => new Map(JSON.parse(e)),
    write: (e) => JSON.stringify(Array.from(e.entries()))
  },
  set: {
    read: (e) => new Set(JSON.parse(e)),
    write: (e) => JSON.stringify(Array.from(e.entries()))
  }
}
function pt(e, t, n, s = {}) {
  var r
  const {
      flush: o = 'pre',
      deep: i = !0,
      listenToStorageChanges: l = !0,
      writeDefaults: a = !0,
      shallow: c,
      window: u = lt,
      eventFilter: f,
      onError: d = (_) => {
        console.error(_)
      }
    } = s,
    m = C(t),
    v = Qp(m),
    E = (c ? Ct : Z)(t),
    w = (r = s.serializer) != null ? r : Xp[v]
  if (!n)
    try {
      n = Gp('getDefaultStorage', () => {
        var _
        return (_ = lt) == null ? void 0 : _.localStorage
      })()
    } catch (_) {
      d(_)
    }
  function A(_) {
    if (!(!n || (_ && _.key !== e)))
      try {
        const b = _ ? _.newValue : n.getItem(e)
        b == null
          ? ((E.value = m), a && m !== null && n.setItem(e, w.write(m)))
          : typeof b != 'string'
          ? (E.value = b)
          : (E.value = w.read(b))
      } catch (b) {
        d(b)
      }
  }
  return (
    A(),
    u && l && We(u, 'storage', (_) => setTimeout(() => A(_), 0)),
    n &&
      jp(
        E,
        () => {
          try {
            E.value == null ? n.removeItem(e) : n.setItem(e, w.write(E.value))
          } catch (_) {
            d(_)
          }
        },
        { flush: o, deep: i, eventFilter: f }
      ),
    E
  )
}
function Zp(e) {
  return Mr('(prefers-color-scheme: dark)', e)
}
var oc = Object.getOwnPropertySymbols,
  em = Object.prototype.hasOwnProperty,
  tm = Object.prototype.propertyIsEnumerable,
  nm = (e, t) => {
    var n = {}
    for (var s in e) em.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s])
    if (e != null && oc)
      for (var s of oc(e)) t.indexOf(s) < 0 && tm.call(e, s) && (n[s] = e[s])
    return n
  }
function sm(e, t, n = {}) {
  const s = n,
    { window: r = lt } = s,
    o = nm(s, ['window'])
  let i
  const l = r && 'ResizeObserver' in r,
    a = () => {
      i && (i.disconnect(), (i = void 0))
    },
    c = ae(
      () => Rt(e),
      (f) => {
        a(), l && r && f && ((i = new r.ResizeObserver(t)), i.observe(f, o))
      },
      { immediate: !0, flush: 'post' }
    ),
    u = () => {
      a(), c()
    }
  return Or(u), { isSupported: l, stop: u }
}
function rm(e, t = { width: 0, height: 0 }, n = {}) {
  const s = Z(t.width),
    r = Z(t.height)
  return (
    sm(
      e,
      ([o]) => {
        ;(s.value = o.contentRect.width), (r.value = o.contentRect.height)
      },
      n
    ),
    { width: s, height: r }
  )
}
const ic = [
  [
    'requestFullscreen',
    'exitFullscreen',
    'fullscreenElement',
    'fullscreenEnabled',
    'fullscreenchange',
    'fullscreenerror'
  ],
  [
    'webkitRequestFullscreen',
    'webkitExitFullscreen',
    'webkitFullscreenElement',
    'webkitFullscreenEnabled',
    'webkitfullscreenchange',
    'webkitfullscreenerror'
  ],
  [
    'webkitRequestFullScreen',
    'webkitCancelFullScreen',
    'webkitCurrentFullScreenElement',
    'webkitCancelFullScreen',
    'webkitfullscreenchange',
    'webkitfullscreenerror'
  ],
  [
    'mozRequestFullScreen',
    'mozCancelFullScreen',
    'mozFullScreenElement',
    'mozFullScreenEnabled',
    'mozfullscreenchange',
    'mozfullscreenerror'
  ],
  [
    'msRequestFullscreen',
    'msExitFullscreen',
    'msFullscreenElement',
    'msFullscreenEnabled',
    'MSFullscreenChange',
    'MSFullscreenError'
  ]
]
function om(e, t = {}) {
  const { document: n = Np } = t,
    s = e || (n == null ? void 0 : n.querySelector('html')),
    r = Z(!1)
  let o = !1,
    i = ic[0]
  if (!n) o = !1
  else
    for (const v of ic)
      if (v[1] in n) {
        ;(i = v), (o = !0)
        break
      }
  const [l, a, c, , u] = i
  async function f() {
    !o || ((n == null ? void 0 : n[c]) && (await n[a]()), (r.value = !1))
  }
  async function d() {
    if (!o) return
    await f()
    const v = Rt(s)
    v && (await v[l](), (r.value = !0))
  }
  async function m() {
    r.value ? await f() : await d()
  }
  return (
    n &&
      We(
        n,
        u,
        () => {
          r.value = !!(n == null ? void 0 : n[c])
        },
        !1
      ),
    { isSupported: o, isFullscreen: r, enter: d, exit: f, toggle: m }
  )
}
function im(e, t, n = {}) {
  const {
      root: s,
      rootMargin: r = '0px',
      threshold: o = 0.1,
      window: i = lt
    } = n,
    l = i && 'IntersectionObserver' in i
  let a = Kt
  const c = l
      ? ae(
          () => ({ el: Rt(e), root: Rt(s) }),
          ({ el: f, root: d }) => {
            if ((a(), !f)) return
            const m = new i.IntersectionObserver(t, {
              root: d,
              rootMargin: r,
              threshold: o
            })
            m.observe(f),
              (a = () => {
                m.disconnect(), (a = Kt)
              })
          },
          { immediate: !0, flush: 'post' }
        )
      : Kt,
    u = () => {
      a(), c()
    }
  return Or(u), { isSupported: l, stop: u }
}
const lm = {
  ctrl: 'control',
  command: 'meta',
  cmd: 'meta',
  option: 'alt',
  up: 'arrowup',
  down: 'arrowdown',
  left: 'arrowleft',
  right: 'arrowright'
}
function am(e = {}) {
  const {
      reactive: t = !1,
      target: n = lt,
      aliasMap: s = lm,
      passive: r = !0,
      onEventFired: o = Kt
    } = e,
    i = Te(new Set()),
    l = {
      toJSON() {
        return {}
      },
      current: i
    },
    a = t ? Te(l) : l
  function c(f, d) {
    const m = f.key.toLowerCase(),
      E = [f.code.toLowerCase(), m]
    d ? i.add(f.code) : i.delete(f.code)
    for (const w of E) w in a && (t ? (a[w] = d) : (a[w].value = d))
  }
  n &&
    (We(n, 'keydown', (f) => (c(f, !0), o(f)), { passive: r }),
    We(n, 'keyup', (f) => (c(f, !1), o(f)), { passive: r }))
  const u = new Proxy(a, {
    get(f, d, m) {
      if (typeof d != 'string') return Reflect.get(f, d, m)
      if (((d = d.toLowerCase()), d in s && (d = s[d]), !(d in a)))
        if (/[+_-]/.test(d)) {
          const E = d.split(/[+_-]/g).map((w) => w.trim())
          a[d] = D(() => E.every((w) => C(u[w])))
        } else a[d] = Z(!1)
      const v = Reflect.get(f, d, m)
      return t ? C(v) : v
    }
  })
  return u
}
var Wt = ((e) => (
  (e.UP = 'UP'),
  (e.RIGHT = 'RIGHT'),
  (e.DOWN = 'DOWN'),
  (e.LEFT = 'LEFT'),
  (e.NONE = 'NONE'),
  e
))(Wt || {})
function cm(e, t = {}) {
  const n = Z(e),
    { threshold: s = 50, onSwipe: r, onSwipeEnd: o, onSwipeStart: i } = t,
    l = Te({ x: 0, y: 0 }),
    a = (N, j) => {
      ;(l.x = N), (l.y = j)
    },
    c = Te({ x: 0, y: 0 }),
    u = (N, j) => {
      ;(c.x = N), (c.y = j)
    },
    f = D(() => l.x - c.x),
    d = D(() => l.y - c.y),
    { max: m, abs: v } = Math,
    E = D(() => m(v(f.value), v(d.value)) >= s),
    w = Z(!1),
    A = Z(!1),
    _ = D(() =>
      E.value
        ? v(f.value) > v(d.value)
          ? f.value > 0
            ? Wt.LEFT
            : Wt.RIGHT
          : d.value > 0
          ? Wt.UP
          : Wt.DOWN
        : Wt.NONE
    ),
    b = (N) => (t.pointerTypes ? t.pointerTypes.includes(N.pointerType) : !0),
    S = [
      We(e, 'pointerdown', (N) => {
        var j, J
        if (!b(N)) return
        ;(A.value = !0),
          (J = (j = n.value) == null ? void 0 : j.style) == null ||
            J.setProperty('touch-action', 'none')
        const ie = N.target
        ie == null || ie.setPointerCapture(N.pointerId)
        const { clientX: le, clientY: oe } = N
        a(le, oe), u(le, oe), i == null || i(N)
      }),
      We(e, 'pointermove', (N) => {
        if (!b(N) || !A.value) return
        const { clientX: j, clientY: J } = N
        u(j, J),
          !w.value && E.value && (w.value = !0),
          w.value && (r == null || r(N))
      }),
      We(e, 'pointerup', (N) => {
        var j, J
        !b(N) ||
          (w.value && (o == null || o(N, _.value)),
          (A.value = !1),
          (w.value = !1),
          (J = (j = n.value) == null ? void 0 : j.style) == null ||
            J.setProperty('touch-action', 'initial'))
      })
    ],
    L = () => S.forEach((N) => N())
  return {
    isSwiping: an(w),
    direction: an(_),
    posStart: an(l),
    posEnd: an(c),
    distanceX: f,
    distanceY: d,
    stop: L
  }
}
var lc, ac
Kn &&
  (window == null ? void 0 : window.navigator) &&
  ((lc = window == null ? void 0 : window.navigator) == null
    ? void 0
    : lc.platform) &&
  /iP(ad|hone|od)/.test(
    (ac = window == null ? void 0 : window.navigator) == null
      ? void 0
      : ac.platform
  )
var um = Object.defineProperty,
  cc = Object.getOwnPropertySymbols,
  fm = Object.prototype.hasOwnProperty,
  dm = Object.prototype.propertyIsEnumerable,
  uc = (e, t, n) =>
    t in e
      ? um(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  hm = (e, t) => {
    for (var n in t || (t = {})) fm.call(t, n) && uc(e, n, t[n])
    if (cc) for (var n of cc(t)) dm.call(t, n) && uc(e, n, t[n])
    return e
  }
const pm = { top: 0, left: 0, bottom: 0, right: 0, height: 0, width: 0 }
hm({ text: '' }, pm)
function jt(e, t, n, s = {}) {
  var r
  const { passive: o = !1, eventName: i, deep: l = !1 } = s,
    a = Sr(),
    c =
      n ||
      (a == null ? void 0 : a.emit) ||
      ((r = a == null ? void 0 : a.$emit) == null ? void 0 : r.bind(a))
  let u = i
  if ((t || (t = 'modelValue'), (u = i || u || `update:${t}`), o)) {
    const f = Z(e[t])
    return (
      ae(
        () => e[t],
        (d) => (f.value = d)
      ),
      ae(
        f,
        (d) => {
          ;(d !== e[t] || l) && c(u, d)
        },
        { deep: l }
      ),
      f
    )
  } else
    return D({
      get() {
        return e[t]
      },
      set(f) {
        c(u, f)
      }
    })
}
function mm({
  window: e = lt,
  initialWidth: t = 1 / 0,
  initialHeight: n = 1 / 0
} = {}) {
  const s = Z(t),
    r = Z(n),
    o = () => {
      e && ((s.value = e.innerWidth), (r.value = e.innerHeight))
    }
  return o(), tc(o), We('resize', o, { passive: !0 }), { width: s, height: r }
}
/*!
 * vue-router v4.0.12
 * (c) 2021 Eduardo San Martin Morote
 * @license MIT
 */ const fc =
    typeof Symbol == 'function' && typeof Symbol.toStringTag == 'symbol',
  Wn = (e) => (fc ? Symbol(e) : '_vr_' + e),
  gm = Wn('rvlm'),
  dc = Wn('rvd'),
  ei = Wn('r'),
  hc = Wn('rl'),
  ti = Wn('rvl'),
  qn = typeof window != 'undefined'
function vm(e) {
  return e.__esModule || (fc && e[Symbol.toStringTag] === 'Module')
}
const be = Object.assign
function ni(e, t) {
  const n = {}
  for (const s in t) {
    const r = t[s]
    n[s] = Array.isArray(r) ? r.map(e) : e(r)
  }
  return n
}
const ws = () => {},
  ym = /\/$/,
  _m = (e) => e.replace(ym, '')
function si(e, t, n = '/') {
  let s,
    r = {},
    o = '',
    i = ''
  const l = t.indexOf('?'),
    a = t.indexOf('#', l > -1 ? l : 0)
  return (
    l > -1 &&
      ((s = t.slice(0, l)),
      (o = t.slice(l + 1, a > -1 ? a : t.length)),
      (r = e(o))),
    a > -1 && ((s = s || t.slice(0, a)), (i = t.slice(a, t.length))),
    (s = Em(s != null ? s : t, n)),
    { fullPath: s + (o && '?') + o + i, path: s, query: r, hash: i }
  )
}
function bm(e, t) {
  const n = t.query ? e(t.query) : ''
  return t.path + (n && '?') + n + (t.hash || '')
}
function pc(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase())
    ? e
    : e.slice(t.length) || '/'
}
function wm(e, t, n) {
  const s = t.matched.length - 1,
    r = n.matched.length - 1
  return (
    s > -1 &&
    s === r &&
    Yn(t.matched[s], n.matched[r]) &&
    mc(t.params, n.params) &&
    e(t.query) === e(n.query) &&
    t.hash === n.hash
  )
}
function Yn(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t)
}
function mc(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1
  for (const n in e) if (!xm(e[n], t[n])) return !1
  return !0
}
function xm(e, t) {
  return Array.isArray(e) ? gc(e, t) : Array.isArray(t) ? gc(t, e) : e === t
}
function gc(e, t) {
  return Array.isArray(t)
    ? e.length === t.length && e.every((n, s) => n === t[s])
    : e.length === 1 && e[0] === t
}
function Em(e, t) {
  if (e.startsWith('/')) return e
  if (!e) return t
  const n = t.split('/'),
    s = e.split('/')
  let r = n.length - 1,
    o,
    i
  for (o = 0; o < s.length; o++)
    if (((i = s[o]), !(r === 1 || i === '.')))
      if (i === '..') r--
      else break
  return (
    n.slice(0, r).join('/') +
    '/' +
    s.slice(o - (o === s.length ? 1 : 0)).join('/')
  )
}
var xs
;(function (e) {
  ;(e.pop = 'pop'), (e.push = 'push')
})(xs || (xs = {}))
var Es
;(function (e) {
  ;(e.back = 'back'), (e.forward = 'forward'), (e.unknown = '')
})(Es || (Es = {}))
function Sm(e) {
  if (!e)
    if (qn) {
      const t = document.querySelector('base')
      ;(e = (t && t.getAttribute('href')) || '/'),
        (e = e.replace(/^\w+:\/\/[^\/]+/, ''))
    } else e = '/'
  return e[0] !== '/' && e[0] !== '#' && (e = '/' + e), _m(e)
}
const km = /^[^#]+#/
function $m(e, t) {
  return e.replace(km, '#') + t
}
function Cm(e, t) {
  const n = document.documentElement.getBoundingClientRect(),
    s = e.getBoundingClientRect()
  return {
    behavior: t.behavior,
    left: s.left - n.left - (t.left || 0),
    top: s.top - n.top - (t.top || 0)
  }
}
const Pr = () => ({ left: window.pageXOffset, top: window.pageYOffset })
function Am(e) {
  let t
  if ('el' in e) {
    const n = e.el,
      s = typeof n == 'string' && n.startsWith('#'),
      r =
        typeof n == 'string'
          ? s
            ? document.getElementById(n.slice(1))
            : document.querySelector(n)
          : n
    if (!r) return
    t = Cm(r, e)
  } else t = e
  'scrollBehavior' in document.documentElement.style
    ? window.scrollTo(t)
    : window.scrollTo(
        t.left != null ? t.left : window.pageXOffset,
        t.top != null ? t.top : window.pageYOffset
      )
}
function vc(e, t) {
  return (history.state ? history.state.position - t : -1) + e
}
const ri = new Map()
function Om(e, t) {
  ri.set(e, t)
}
function Mm(e) {
  const t = ri.get(e)
  return ri.delete(e), t
}
let Pm = () => location.protocol + '//' + location.host
function yc(e, t) {
  const { pathname: n, search: s, hash: r } = t,
    o = e.indexOf('#')
  if (o > -1) {
    let l = r.includes(e.slice(o)) ? e.slice(o).length : 1,
      a = r.slice(l)
    return a[0] !== '/' && (a = '/' + a), pc(a, '')
  }
  return pc(n, e) + s + r
}
function Tm(e, t, n, s) {
  let r = [],
    o = [],
    i = null
  const l = ({ state: d }) => {
    const m = yc(e, location),
      v = n.value,
      E = t.value
    let w = 0
    if (d) {
      if (((n.value = m), (t.value = d), i && i === v)) {
        i = null
        return
      }
      w = E ? d.position - E.position : 0
    } else s(m)
    r.forEach((A) => {
      A(n.value, v, {
        delta: w,
        type: xs.pop,
        direction: w ? (w > 0 ? Es.forward : Es.back) : Es.unknown
      })
    })
  }
  function a() {
    i = n.value
  }
  function c(d) {
    r.push(d)
    const m = () => {
      const v = r.indexOf(d)
      v > -1 && r.splice(v, 1)
    }
    return o.push(m), m
  }
  function u() {
    const { history: d } = window
    !d.state || d.replaceState(be({}, d.state, { scroll: Pr() }), '')
  }
  function f() {
    for (const d of o) d()
    ;(o = []),
      window.removeEventListener('popstate', l),
      window.removeEventListener('beforeunload', u)
  }
  return (
    window.addEventListener('popstate', l),
    window.addEventListener('beforeunload', u),
    { pauseListeners: a, listen: c, destroy: f }
  )
}
function _c(e, t, n, s = !1, r = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: s,
    position: window.history.length,
    scroll: r ? Pr() : null
  }
}
function Im(e) {
  const { history: t, location: n } = window,
    s = { value: yc(e, n) },
    r = { value: t.state }
  r.value ||
    o(
      s.value,
      {
        back: null,
        current: s.value,
        forward: null,
        position: t.length - 1,
        replaced: !0,
        scroll: null
      },
      !0
    )
  function o(a, c, u) {
    const f = e.indexOf('#'),
      d =
        f > -1
          ? (n.host && document.querySelector('base') ? e : e.slice(f)) + a
          : Pm() + e + a
    try {
      t[u ? 'replaceState' : 'pushState'](c, '', d), (r.value = c)
    } catch (m) {
      console.error(m), n[u ? 'replace' : 'assign'](d)
    }
  }
  function i(a, c) {
    const u = be({}, t.state, _c(r.value.back, a, r.value.forward, !0), c, {
      position: r.value.position
    })
    o(a, u, !0), (s.value = a)
  }
  function l(a, c) {
    const u = be({}, r.value, t.state, { forward: a, scroll: Pr() })
    o(u.current, u, !0)
    const f = be({}, _c(s.value, a, null), { position: u.position + 1 }, c)
    o(a, f, !1), (s.value = a)
  }
  return { location: s, state: r, push: l, replace: i }
}
function Rm(e) {
  e = Sm(e)
  const t = Im(e),
    n = Tm(e, t.state, t.location, t.replace)
  function s(o, i = !0) {
    i || n.pauseListeners(), history.go(o)
  }
  const r = be(
    { location: '', base: e, go: s, createHref: $m.bind(null, e) },
    t,
    n
  )
  return (
    Object.defineProperty(r, 'location', {
      enumerable: !0,
      get: () => t.location.value
    }),
    Object.defineProperty(r, 'state', {
      enumerable: !0,
      get: () => t.state.value
    }),
    r
  )
}
function jm(e) {
  return typeof e == 'string' || (e && typeof e == 'object')
}
function bc(e) {
  return typeof e == 'string' || typeof e == 'symbol'
}
const qt = {
    path: '/',
    name: void 0,
    params: {},
    query: {},
    hash: '',
    fullPath: '/',
    matched: [],
    meta: {},
    redirectedFrom: void 0
  },
  wc = Wn('nf')
var xc
;(function (e) {
  ;(e[(e.aborted = 4)] = 'aborted'),
    (e[(e.cancelled = 8)] = 'cancelled'),
    (e[(e.duplicated = 16)] = 'duplicated')
})(xc || (xc = {}))
function Jn(e, t) {
  return be(new Error(), { type: e, [wc]: !0 }, t)
}
function mn(e, t) {
  return e instanceof Error && wc in e && (t == null || !!(e.type & t))
}
const Ec = '[^/]+?',
  Lm = { sensitive: !1, strict: !1, start: !0, end: !0 },
  Fm = /[.+*?^${}()[\]/\\]/g
function Nm(e, t) {
  const n = be({}, Lm, t),
    s = []
  let r = n.start ? '^' : ''
  const o = []
  for (const c of e) {
    const u = c.length ? [] : [90]
    n.strict && !c.length && (r += '/')
    for (let f = 0; f < c.length; f++) {
      const d = c[f]
      let m = 40 + (n.sensitive ? 0.25 : 0)
      if (d.type === 0)
        f || (r += '/'), (r += d.value.replace(Fm, '\\$&')), (m += 40)
      else if (d.type === 1) {
        const { value: v, repeatable: E, optional: w, regexp: A } = d
        o.push({ name: v, repeatable: E, optional: w })
        const _ = A || Ec
        if (_ !== Ec) {
          m += 10
          try {
            new RegExp(`(${_})`)
          } catch (S) {
            throw new Error(
              `Invalid custom RegExp for param "${v}" (${_}): ` + S.message
            )
          }
        }
        let b = E ? `((?:${_})(?:/(?:${_}))*)` : `(${_})`
        f || (b = w && c.length < 2 ? `(?:/${b})` : '/' + b),
          w && (b += '?'),
          (r += b),
          (m += 20),
          w && (m += -8),
          E && (m += -20),
          _ === '.*' && (m += -50)
      }
      u.push(m)
    }
    s.push(u)
  }
  if (n.strict && n.end) {
    const c = s.length - 1
    s[c][s[c].length - 1] += 0.7000000000000001
  }
  n.strict || (r += '/?'), n.end ? (r += '$') : n.strict && (r += '(?:/|$)')
  const i = new RegExp(r, n.sensitive ? '' : 'i')
  function l(c) {
    const u = c.match(i),
      f = {}
    if (!u) return null
    for (let d = 1; d < u.length; d++) {
      const m = u[d] || '',
        v = o[d - 1]
      f[v.name] = m && v.repeatable ? m.split('/') : m
    }
    return f
  }
  function a(c) {
    let u = '',
      f = !1
    for (const d of e) {
      ;(!f || !u.endsWith('/')) && (u += '/'), (f = !1)
      for (const m of d)
        if (m.type === 0) u += m.value
        else if (m.type === 1) {
          const { value: v, repeatable: E, optional: w } = m,
            A = v in c ? c[v] : ''
          if (Array.isArray(A) && !E)
            throw new Error(
              `Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`
            )
          const _ = Array.isArray(A) ? A.join('/') : A
          if (!_)
            if (w)
              d.length < 2 &&
                (u.endsWith('/') ? (u = u.slice(0, -1)) : (f = !0))
            else throw new Error(`Missing required param "${v}"`)
          u += _
        }
    }
    return u
  }
  return { re: i, score: s, keys: o, parse: l, stringify: a }
}
function Dm(e, t) {
  let n = 0
  for (; n < e.length && n < t.length; ) {
    const s = t[n] - e[n]
    if (s) return s
    n++
  }
  return e.length < t.length
    ? e.length === 1 && e[0] === 40 + 40
      ? -1
      : 1
    : e.length > t.length
    ? t.length === 1 && t[0] === 40 + 40
      ? 1
      : -1
    : 0
}
function Hm(e, t) {
  let n = 0
  const s = e.score,
    r = t.score
  for (; n < s.length && n < r.length; ) {
    const o = Dm(s[n], r[n])
    if (o) return o
    n++
  }
  return r.length - s.length
}
const zm = { type: 0, value: '' },
  Bm = /[a-zA-Z0-9_]/
function Vm(e) {
  if (!e) return [[]]
  if (e === '/') return [[zm]]
  if (!e.startsWith('/')) throw new Error(`Invalid path "${e}"`)
  function t(m) {
    throw new Error(`ERR (${n})/"${c}": ${m}`)
  }
  let n = 0,
    s = n
  const r = []
  let o
  function i() {
    o && r.push(o), (o = [])
  }
  let l = 0,
    a,
    c = '',
    u = ''
  function f() {
    !c ||
      (n === 0
        ? o.push({ type: 0, value: c })
        : n === 1 || n === 2 || n === 3
        ? (o.length > 1 &&
            (a === '*' || a === '+') &&
            t(
              `A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`
            ),
          o.push({
            type: 1,
            value: c,
            regexp: u,
            repeatable: a === '*' || a === '+',
            optional: a === '*' || a === '?'
          }))
        : t('Invalid state to consume buffer'),
      (c = ''))
  }
  function d() {
    c += a
  }
  for (; l < e.length; ) {
    if (((a = e[l++]), a === '\\' && n !== 2)) {
      ;(s = n), (n = 4)
      continue
    }
    switch (n) {
      case 0:
        a === '/' ? (c && f(), i()) : a === ':' ? (f(), (n = 1)) : d()
        break
      case 4:
        d(), (n = s)
        break
      case 1:
        a === '('
          ? (n = 2)
          : Bm.test(a)
          ? d()
          : (f(), (n = 0), a !== '*' && a !== '?' && a !== '+' && l--)
        break
      case 2:
        a === ')'
          ? u[u.length - 1] == '\\'
            ? (u = u.slice(0, -1) + a)
            : (n = 3)
          : (u += a)
        break
      case 3:
        f(), (n = 0), a !== '*' && a !== '?' && a !== '+' && l--, (u = '')
        break
      default:
        t('Unknown state')
        break
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${c}"`), f(), i(), r
}
function Um(e, t, n) {
  const s = Nm(Vm(e.path), n),
    r = be(s, { record: e, parent: t, children: [], alias: [] })
  return t && !r.record.aliasOf == !t.record.aliasOf && t.children.push(r), r
}
function Km(e, t) {
  const n = [],
    s = new Map()
  t = kc({ strict: !1, end: !0, sensitive: !1 }, t)
  function r(u) {
    return s.get(u)
  }
  function o(u, f, d) {
    const m = !d,
      v = qm(u)
    v.aliasOf = d && d.record
    const E = kc(t, u),
      w = [v]
    if ('alias' in u) {
      const b = typeof u.alias == 'string' ? [u.alias] : u.alias
      for (const S of b)
        w.push(
          be({}, v, {
            components: d ? d.record.components : v.components,
            path: S,
            aliasOf: d ? d.record : v
          })
        )
    }
    let A, _
    for (const b of w) {
      const { path: S } = b
      if (f && S[0] !== '/') {
        const L = f.record.path,
          N = L[L.length - 1] === '/' ? '' : '/'
        b.path = f.record.path + (S && N + S)
      }
      if (
        ((A = Um(b, f, E)),
        d
          ? d.alias.push(A)
          : ((_ = _ || A),
            _ !== A && _.alias.push(A),
            m && u.name && !Sc(A) && i(u.name)),
        'children' in v)
      ) {
        const L = v.children
        for (let N = 0; N < L.length; N++) o(L[N], A, d && d.children[N])
      }
      ;(d = d || A), a(A)
    }
    return _
      ? () => {
          i(_)
        }
      : ws
  }
  function i(u) {
    if (bc(u)) {
      const f = s.get(u)
      f &&
        (s.delete(u),
        n.splice(n.indexOf(f), 1),
        f.children.forEach(i),
        f.alias.forEach(i))
    } else {
      const f = n.indexOf(u)
      f > -1 &&
        (n.splice(f, 1),
        u.record.name && s.delete(u.record.name),
        u.children.forEach(i),
        u.alias.forEach(i))
    }
  }
  function l() {
    return n
  }
  function a(u) {
    let f = 0
    for (; f < n.length && Hm(u, n[f]) >= 0; ) f++
    n.splice(f, 0, u), u.record.name && !Sc(u) && s.set(u.record.name, u)
  }
  function c(u, f) {
    let d,
      m = {},
      v,
      E
    if ('name' in u && u.name) {
      if (((d = s.get(u.name)), !d)) throw Jn(1, { location: u })
      ;(E = d.record.name),
        (m = be(
          Wm(
            f.params,
            d.keys.filter((_) => !_.optional).map((_) => _.name)
          ),
          u.params
        )),
        (v = d.stringify(m))
    } else if ('path' in u)
      (v = u.path),
        (d = n.find((_) => _.re.test(v))),
        d && ((m = d.parse(v)), (E = d.record.name))
    else {
      if (((d = f.name ? s.get(f.name) : n.find((_) => _.re.test(f.path))), !d))
        throw Jn(1, { location: u, currentLocation: f })
      ;(E = d.record.name),
        (m = be({}, f.params, u.params)),
        (v = d.stringify(m))
    }
    const w = []
    let A = d
    for (; A; ) w.unshift(A.record), (A = A.parent)
    return { name: E, path: v, params: m, matched: w, meta: Jm(w) }
  }
  return (
    e.forEach((u) => o(u)),
    {
      addRoute: o,
      resolve: c,
      removeRoute: i,
      getRoutes: l,
      getRecordMatcher: r
    }
  )
}
function Wm(e, t) {
  const n = {}
  for (const s of t) s in e && (n[s] = e[s])
  return n
}
function qm(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: Ym(e),
    children: e.children || [],
    instances: {},
    leaveGuards: new Set(),
    updateGuards: new Set(),
    enterCallbacks: {},
    components:
      'components' in e ? e.components || {} : { default: e.component }
  }
}
function Ym(e) {
  const t = {},
    n = e.props || !1
  if ('component' in e) t.default = n
  else for (const s in e.components) t[s] = typeof n == 'boolean' ? n : n[s]
  return t
}
function Sc(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0
    e = e.parent
  }
  return !1
}
function Jm(e) {
  return e.reduce((t, n) => be(t, n.meta), {})
}
function kc(e, t) {
  const n = {}
  for (const s in e) n[s] = s in t ? t[s] : e[s]
  return n
}
const $c = /#/g,
  Gm = /&/g,
  Qm = /\//g,
  Xm = /=/g,
  Zm = /\?/g,
  Cc = /\+/g,
  eg = /%5B/g,
  tg = /%5D/g,
  Ac = /%5E/g,
  ng = /%60/g,
  Oc = /%7B/g,
  sg = /%7C/g,
  Mc = /%7D/g,
  rg = /%20/g
function oi(e) {
  return encodeURI('' + e)
    .replace(sg, '|')
    .replace(eg, '[')
    .replace(tg, ']')
}
function og(e) {
  return oi(e).replace(Oc, '{').replace(Mc, '}').replace(Ac, '^')
}
function ii(e) {
  return oi(e)
    .replace(Cc, '%2B')
    .replace(rg, '+')
    .replace($c, '%23')
    .replace(Gm, '%26')
    .replace(ng, '`')
    .replace(Oc, '{')
    .replace(Mc, '}')
    .replace(Ac, '^')
}
function ig(e) {
  return ii(e).replace(Xm, '%3D')
}
function lg(e) {
  return oi(e).replace($c, '%23').replace(Zm, '%3F')
}
function ag(e) {
  return e == null ? '' : lg(e).replace(Qm, '%2F')
}
function Tr(e) {
  try {
    return decodeURIComponent('' + e)
  } catch {}
  return '' + e
}
function cg(e) {
  const t = {}
  if (e === '' || e === '?') return t
  const s = (e[0] === '?' ? e.slice(1) : e).split('&')
  for (let r = 0; r < s.length; ++r) {
    const o = s[r].replace(Cc, ' '),
      i = o.indexOf('='),
      l = Tr(i < 0 ? o : o.slice(0, i)),
      a = i < 0 ? null : Tr(o.slice(i + 1))
    if (l in t) {
      let c = t[l]
      Array.isArray(c) || (c = t[l] = [c]), c.push(a)
    } else t[l] = a
  }
  return t
}
function Pc(e) {
  let t = ''
  for (let n in e) {
    const s = e[n]
    if (((n = ig(n)), s == null)) {
      s !== void 0 && (t += (t.length ? '&' : '') + n)
      continue
    }
    ;(Array.isArray(s) ? s.map((o) => o && ii(o)) : [s && ii(s)]).forEach(
      (o) => {
        o !== void 0 &&
          ((t += (t.length ? '&' : '') + n), o != null && (t += '=' + o))
      }
    )
  }
  return t
}
function ug(e) {
  const t = {}
  for (const n in e) {
    const s = e[n]
    s !== void 0 &&
      (t[n] = Array.isArray(s)
        ? s.map((r) => (r == null ? null : '' + r))
        : s == null
        ? s
        : '' + s)
  }
  return t
}
function Ss() {
  let e = []
  function t(s) {
    return (
      e.push(s),
      () => {
        const r = e.indexOf(s)
        r > -1 && e.splice(r, 1)
      }
    )
  }
  function n() {
    e = []
  }
  return { add: t, list: () => e, reset: n }
}
function Yt(e, t, n, s, r) {
  const o = s && (s.enterCallbacks[r] = s.enterCallbacks[r] || [])
  return () =>
    new Promise((i, l) => {
      const a = (f) => {
          f === !1
            ? l(Jn(4, { from: n, to: t }))
            : f instanceof Error
            ? l(f)
            : jm(f)
            ? l(Jn(2, { from: t, to: f }))
            : (o &&
                s.enterCallbacks[r] === o &&
                typeof f == 'function' &&
                o.push(f),
              i())
        },
        c = e.call(s && s.instances[r], t, n, a)
      let u = Promise.resolve(c)
      e.length < 3 && (u = u.then(a)), u.catch((f) => l(f))
    })
}
function li(e, t, n, s) {
  const r = []
  for (const o of e)
    for (const i in o.components) {
      let l = o.components[i]
      if (!(t !== 'beforeRouteEnter' && !o.instances[i]))
        if (fg(l)) {
          const c = (l.__vccOpts || l)[t]
          c && r.push(Yt(c, n, s, o, i))
        } else {
          let a = l()
          r.push(() =>
            a.then((c) => {
              if (!c)
                return Promise.reject(
                  new Error(`Couldn't resolve component "${i}" at "${o.path}"`)
                )
              const u = vm(c) ? c.default : c
              o.components[i] = u
              const d = (u.__vccOpts || u)[t]
              return d && Yt(d, n, s, o, i)()
            })
          )
        }
    }
  return r
}
function fg(e) {
  return (
    typeof e == 'object' ||
    'displayName' in e ||
    'props' in e ||
    '__vccOpts' in e
  )
}
function Tc(e) {
  const t = Ot(ei),
    n = Ot(hc),
    s = D(() => t.resolve(C(e.to))),
    r = D(() => {
      const { matched: a } = s.value,
        { length: c } = a,
        u = a[c - 1],
        f = n.matched
      if (!u || !f.length) return -1
      const d = f.findIndex(Yn.bind(null, u))
      if (d > -1) return d
      const m = Ic(a[c - 2])
      return c > 1 && Ic(u) === m && f[f.length - 1].path !== m
        ? f.findIndex(Yn.bind(null, a[c - 2]))
        : d
    }),
    o = D(() => r.value > -1 && mg(n.params, s.value.params)),
    i = D(
      () =>
        r.value > -1 &&
        r.value === n.matched.length - 1 &&
        mc(n.params, s.value.params)
    )
  function l(a = {}) {
    return pg(a)
      ? t[C(e.replace) ? 'replace' : 'push'](C(e.to)).catch(ws)
      : Promise.resolve()
  }
  return {
    route: s,
    href: D(() => s.value.href),
    isActive: o,
    isExactActive: i,
    navigate: l
  }
}
const dg = Se({
    name: 'RouterLink',
    props: {
      to: { type: [String, Object], required: !0 },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: { type: String, default: 'page' }
    },
    useLink: Tc,
    setup(e, { slots: t }) {
      const n = Te(Tc(e)),
        { options: s } = Ot(ei),
        r = D(() => ({
          [Rc(e.activeClass, s.linkActiveClass, 'router-link-active')]:
            n.isActive,
          [Rc(
            e.exactActiveClass,
            s.linkExactActiveClass,
            'router-link-exact-active'
          )]: n.isExactActive
        }))
      return () => {
        const o = t.default && t.default(n)
        return e.custom
          ? o
          : Bn(
              'a',
              {
                'aria-current': n.isExactActive ? e.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: r.value
              },
              o
            )
      }
    }
  }),
  hg = dg
function pg(e) {
  if (
    !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) &&
    !e.defaultPrevented &&
    !(e.button !== void 0 && e.button !== 0)
  ) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute('target')
      if (/\b_blank\b/i.test(t)) return
    }
    return e.preventDefault && e.preventDefault(), !0
  }
}
function mg(e, t) {
  for (const n in t) {
    const s = t[n],
      r = e[n]
    if (typeof s == 'string') {
      if (s !== r) return !1
    } else if (
      !Array.isArray(r) ||
      r.length !== s.length ||
      s.some((o, i) => o !== r[i])
    )
      return !1
  }
  return !0
}
function Ic(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : ''
}
const Rc = (e, t, n) => (e != null ? e : t != null ? t : n),
  gg = Se({
    name: 'RouterView',
    inheritAttrs: !1,
    props: { name: { type: String, default: 'default' }, route: Object },
    setup(e, { attrs: t, slots: n }) {
      const s = Ot(ti),
        r = D(() => e.route || s.value),
        o = Ot(dc, 0),
        i = D(() => r.value.matched[o])
      At(dc, o + 1), At(gm, i), At(ti, r)
      const l = Z()
      return (
        ae(
          () => [l.value, i.value, e.name],
          ([a, c, u], [f, d, m]) => {
            c &&
              ((c.instances[u] = a),
              d &&
                d !== c &&
                a &&
                a === f &&
                (c.leaveGuards.size || (c.leaveGuards = d.leaveGuards),
                c.updateGuards.size || (c.updateGuards = d.updateGuards))),
              a &&
                c &&
                (!d || !Yn(c, d) || !f) &&
                (c.enterCallbacks[u] || []).forEach((v) => v(a))
          },
          { flush: 'post' }
        ),
        () => {
          const a = r.value,
            c = i.value,
            u = c && c.components[e.name],
            f = e.name
          if (!u) return jc(n.default, { Component: u, route: a })
          const d = c.props[e.name],
            m = d
              ? d === !0
                ? a.params
                : typeof d == 'function'
                ? d(a)
                : d
              : null,
            E = Bn(
              u,
              be({}, m, t, {
                onVnodeUnmounted: (w) => {
                  w.component.isUnmounted && (c.instances[f] = null)
                },
                ref: l
              })
            )
          return jc(n.default, { Component: E, route: a }) || E
        }
      )
    }
  })
function jc(e, t) {
  if (!e) return null
  const n = e(t)
  return n.length === 1 ? n[0] : n
}
const vg = gg
function yg(e) {
  const t = Km(e.routes, e),
    n = e.parseQuery || cg,
    s = e.stringifyQuery || Pc,
    r = e.history,
    o = Ss(),
    i = Ss(),
    l = Ss(),
    a = Ct(qt)
  let c = qt
  qn &&
    e.scrollBehavior &&
    'scrollRestoration' in history &&
    (history.scrollRestoration = 'manual')
  const u = ni.bind(null, (x) => '' + x),
    f = ni.bind(null, ag),
    d = ni.bind(null, Tr)
  function m(x, H) {
    let P, V
    return (
      bc(x) ? ((P = t.getRecordMatcher(x)), (V = H)) : (V = x), t.addRoute(V, P)
    )
  }
  function v(x) {
    const H = t.getRecordMatcher(x)
    H && t.removeRoute(H)
  }
  function E() {
    return t.getRoutes().map((x) => x.record)
  }
  function w(x) {
    return !!t.getRecordMatcher(x)
  }
  function A(x, H) {
    if (((H = be({}, H || a.value)), typeof x == 'string')) {
      const te = si(n, x, H.path),
        h = t.resolve({ path: te.path }, H),
        g = r.createHref(te.fullPath)
      return be(te, h, {
        params: d(h.params),
        hash: Tr(te.hash),
        redirectedFrom: void 0,
        href: g
      })
    }
    let P
    if ('path' in x) P = be({}, x, { path: si(n, x.path, H.path).path })
    else {
      const te = be({}, x.params)
      for (const h in te) te[h] == null && delete te[h]
      ;(P = be({}, x, { params: f(x.params) })), (H.params = f(H.params))
    }
    const V = t.resolve(P, H),
      fe = x.hash || ''
    V.params = u(d(V.params))
    const we = bm(s, be({}, x, { hash: og(fe), path: V.path })),
      re = r.createHref(we)
    return be(
      { fullPath: we, hash: fe, query: s === Pc ? ug(x.query) : x.query || {} },
      V,
      { redirectedFrom: void 0, href: re }
    )
  }
  function _(x) {
    return typeof x == 'string' ? si(n, x, a.value.path) : be({}, x)
  }
  function b(x, H) {
    if (c !== x) return Jn(8, { from: H, to: x })
  }
  function S(x) {
    return j(x)
  }
  function L(x) {
    return S(be(_(x), { replace: !0 }))
  }
  function N(x) {
    const H = x.matched[x.matched.length - 1]
    if (H && H.redirect) {
      const { redirect: P } = H
      let V = typeof P == 'function' ? P(x) : P
      return (
        typeof V == 'string' &&
          ((V = V.includes('?') || V.includes('#') ? (V = _(V)) : { path: V }),
          (V.params = {})),
        be({ query: x.query, hash: x.hash, params: x.params }, V)
      )
    }
  }
  function j(x, H) {
    const P = (c = A(x)),
      V = a.value,
      fe = x.state,
      we = x.force,
      re = x.replace === !0,
      te = N(P)
    if (te) return j(be(_(te), { state: fe, force: we, replace: re }), H || P)
    const h = P
    h.redirectedFrom = H
    let g
    return (
      !we &&
        wm(s, V, P) &&
        ((g = Jn(16, { to: h, from: V })), _t(V, V, !0, !1)),
      (g ? Promise.resolve(g) : ie(h, V))
        .catch((y) => (mn(y) ? y : G(y, h, V)))
        .then((y) => {
          if (y) {
            if (mn(y, 2))
              return j(
                be(_(y.to), { state: fe, force: we, replace: re }),
                H || h
              )
          } else y = oe(h, V, !0, re, fe)
          return le(h, V, y), y
        })
    )
  }
  function J(x, H) {
    const P = b(x, H)
    return P ? Promise.reject(P) : Promise.resolve()
  }
  function ie(x, H) {
    let P
    const [V, fe, we] = _g(x, H)
    P = li(V.reverse(), 'beforeRouteLeave', x, H)
    for (const te of V)
      te.leaveGuards.forEach((h) => {
        P.push(Yt(h, x, H))
      })
    const re = J.bind(null, x, H)
    return (
      P.push(re),
      Gn(P)
        .then(() => {
          P = []
          for (const te of o.list()) P.push(Yt(te, x, H))
          return P.push(re), Gn(P)
        })
        .then(() => {
          P = li(fe, 'beforeRouteUpdate', x, H)
          for (const te of fe)
            te.updateGuards.forEach((h) => {
              P.push(Yt(h, x, H))
            })
          return P.push(re), Gn(P)
        })
        .then(() => {
          P = []
          for (const te of x.matched)
            if (te.beforeEnter && !H.matched.includes(te))
              if (Array.isArray(te.beforeEnter))
                for (const h of te.beforeEnter) P.push(Yt(h, x, H))
              else P.push(Yt(te.beforeEnter, x, H))
          return P.push(re), Gn(P)
        })
        .then(
          () => (
            x.matched.forEach((te) => (te.enterCallbacks = {})),
            (P = li(we, 'beforeRouteEnter', x, H)),
            P.push(re),
            Gn(P)
          )
        )
        .then(() => {
          P = []
          for (const te of i.list()) P.push(Yt(te, x, H))
          return P.push(re), Gn(P)
        })
        .catch((te) => (mn(te, 8) ? te : Promise.reject(te)))
    )
  }
  function le(x, H, P) {
    for (const V of l.list()) V(x, H, P)
  }
  function oe(x, H, P, V, fe) {
    const we = b(x, H)
    if (we) return we
    const re = H === qt,
      te = qn ? history.state : {}
    P &&
      (V || re
        ? r.replace(x.fullPath, be({ scroll: re && te && te.scroll }, fe))
        : r.push(x.fullPath, fe)),
      (a.value = x),
      _t(x, H, P, re),
      ce()
  }
  let Ae
  function Re() {
    Ae = r.listen((x, H, P) => {
      const V = A(x),
        fe = N(V)
      if (fe) {
        j(be(fe, { replace: !0 }), V).catch(ws)
        return
      }
      c = V
      const we = a.value
      qn && Om(vc(we.fullPath, P.delta), Pr()),
        ie(V, we)
          .catch((re) =>
            mn(re, 4 | 8)
              ? re
              : mn(re, 2)
              ? (j(re.to, V)
                  .then((te) => {
                    mn(te, 4 | 16) &&
                      !P.delta &&
                      P.type === xs.pop &&
                      r.go(-1, !1)
                  })
                  .catch(ws),
                Promise.reject())
              : (P.delta && r.go(-P.delta, !1), G(re, V, we))
          )
          .then((re) => {
            ;(re = re || oe(V, we, !1)),
              re &&
                (P.delta
                  ? r.go(-P.delta, !1)
                  : P.type === xs.pop && mn(re, 4 | 16) && r.go(-1, !1)),
              le(V, we, re)
          })
          .catch(ws)
    })
  }
  let ze = Ss(),
    Be = Ss(),
    q
  function G(x, H, P) {
    ce(x)
    const V = Be.list()
    return (
      V.length ? V.forEach((fe) => fe(x, H, P)) : console.error(x),
      Promise.reject(x)
    )
  }
  function W() {
    return q && a.value !== qt
      ? Promise.resolve()
      : new Promise((x, H) => {
          ze.add([x, H])
        })
  }
  function ce(x) {
    q ||
      ((q = !0),
      Re(),
      ze.list().forEach(([H, P]) => (x ? P(x) : H())),
      ze.reset())
  }
  function _t(x, H, P, V) {
    const { scrollBehavior: fe } = e
    if (!qn || !fe) return Promise.resolve()
    const we =
      (!P && Mm(vc(x.fullPath, 0))) ||
      ((V || !P) && history.state && history.state.scroll) ||
      null
    return Ut()
      .then(() => fe(x, H, we))
      .then((re) => re && Am(re))
      .catch((re) => G(re, x, H))
  }
  const Fe = (x) => r.go(x)
  let rt
  const Ve = new Set()
  return {
    currentRoute: a,
    addRoute: m,
    removeRoute: v,
    hasRoute: w,
    getRoutes: E,
    resolve: A,
    options: e,
    push: S,
    replace: L,
    go: Fe,
    back: () => Fe(-1),
    forward: () => Fe(1),
    beforeEach: o.add,
    beforeResolve: i.add,
    afterEach: l.add,
    onError: Be.add,
    isReady: W,
    install(x) {
      const H = this
      x.component('RouterLink', hg),
        x.component('RouterView', vg),
        (x.config.globalProperties.$router = H),
        Object.defineProperty(x.config.globalProperties, '$route', {
          enumerable: !0,
          get: () => C(a)
        }),
        qn &&
          !rt &&
          a.value === qt &&
          ((rt = !0), S(r.location).catch((fe) => {}))
      const P = {}
      for (const fe in qt) P[fe] = D(() => a.value[fe])
      x.provide(ei, H), x.provide(hc, Te(P)), x.provide(ti, a)
      const V = x.unmount
      Ve.add(x),
        (x.unmount = function () {
          Ve.delete(x),
            Ve.size < 1 &&
              ((c = qt), Ae && Ae(), (a.value = qt), (rt = !1), (q = !1)),
            V()
        })
    }
  }
}
function Gn(e) {
  return e.reduce((t, n) => t.then(() => n()), Promise.resolve())
}
function _g(e, t) {
  const n = [],
    s = [],
    r = [],
    o = Math.max(t.matched.length, e.matched.length)
  for (let i = 0; i < o; i++) {
    const l = t.matched[i]
    l && (e.matched.find((c) => Yn(c, l)) ? s.push(l) : n.push(l))
    const a = e.matched[i]
    a && (t.matched.find((c) => Yn(c, a)) || r.push(a))
  }
  return [n, s, r]
}
function bg(e) {
  return (e = e || []), Array.isArray(e) ? e : [e]
}
function Lc(e, t) {
  if (!e) return !1
  const n = e.indexOf(t)
  return n >= 0 ? (e.splice(n, 1), !0) : !1
}
function wg(e) {
  return e != null
}
function xg(e, t) {
  return Object.fromEntries(
    Object.entries(e)
      .map(([n, s]) => t(n, s))
      .filter(wg)
  )
}
function Eg(e) {
  return Object.keys(e)
}
var Sg = {
  theme: './',
  title: 'How To Add Fancy To Your Amplify Functions',
  titleTemplate: '%s - Slidev',
  remoteAssets: !1,
  monaco: 'dev',
  download: !1,
  info: !1,
  highlighter: 'prism',
  lineNumbers: !0,
  colorSchema: 'auto',
  routerMode: 'history',
  aspectRatio: 1.7777777777777777,
  canvasWidth: 980,
  selectable: !1,
  themeConfig: {},
  fonts: {
    sans: [
      '"Nunito Sans"',
      'ui-sans-serif',
      'system-ui',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      '"Noto Sans"',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
      '"Noto Color Emoji"'
    ],
    serif: [
      'ui-serif',
      'Georgia',
      'Cambria',
      '"Times New Roman"',
      'Times',
      'serif'
    ],
    mono: [
      '"Fira Code"',
      'ui-monospace',
      'SFMono-Regular',
      'Menlo',
      'Monaco',
      'Consolas',
      '"Liberation Mono"',
      '"Courier New"',
      'monospace'
    ],
    webfonts: ['Nunito Sans', 'Fira Code'],
    provider: 'google',
    local: [],
    italic: !1,
    weights: ['200', '400', '600']
  },
  favicon: 'https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png',
  drawings: { enabled: 'dev', persist: !1, presenterOnly: !1, syncAll: !0 },
  plantUmlServer: 'https://www.plantuml.com/plantuml',
  hightlighter: 'prism',
  preload: !1,
  class: 'content-center',
  layout: 'intro',
  introImage: './amplify-fancy/amplify-fancy/aws-amplify.svg'
}
function at(e, t, n) {
  Object.defineProperty(e, t, { value: n, writable: !0, enumerable: !1 })
}
const gn = Te({ page: 0, clicks: 0 })
let kg = [],
  $g = []
at(gn, '$syncUp', !0)
at(gn, '$syncDown', !0)
at(gn, '$paused', !1)
at(gn, '$onSet', (e) => kg.push(e))
at(gn, '$onPatch', (e) => $g.push(e))
at(gn, '$patch', async () => !1)
const vn = Te({})
let Cg = [],
  Ag = []
at(vn, '$syncUp', !0)
at(vn, '$syncDown', !0)
at(vn, '$paused', !1)
at(vn, '$onSet', (e) => Cg.push(e))
at(vn, '$onPatch', (e) => Ag.push(e))
at(vn, '$patch', async () => !1)
const St = gn,
  yn = vn,
  Oe = Sg
var zf
const ks = (zf = Oe.aspectRatio) != null ? zf : 16 / 9
var Bf
const Ir = (Bf = Oe.canvasWidth) != null ? Bf : 980,
  Og = Math.round(Ir / ks),
  Mg = D(() => xg(Oe.themeConfig || {}, (e, t) => [`--slidev-theme-${e}`, t]))
Z(!1)
const $s = Z(!1),
  Qn = Z(!1),
  Pg = Z(!0),
  ai = Yp(de({ xs: 460 }, Vp)),
  Cs = mm(),
  Fc = am(),
  Tg = D(() => Cs.height.value - Cs.width.value / ks > 180),
  Nc = om(Kn ? document.body : null),
  Xn = Bp(),
  Ig = D(() => {
    var e, t
    return (
      ['INPUT', 'TEXTAREA'].includes(
        ((e = Xn.value) == null ? void 0 : e.tagName) || ''
      ) ||
      ((t = Xn.value) == null
        ? void 0
        : t.classList.contains('CodeMirror-code'))
    )
  }),
  Rg = D(() => {
    var e
    return ['BUTTON', 'A'].includes(
      ((e = Xn.value) == null ? void 0 : e.tagName) || ''
    )
  })
pt('slidev-camera', 'default')
pt('slidev-mic', 'default')
const Rr = pt('slidev-scale', 0),
  As = pt('slidev-show-overview', !1)
pt('slidev-presenter-cursor', !0)
const Dc = pt('slidev-show-editor', !1)
pt('slidev-editor-width', Kn ? window.innerWidth * 0.4 : 100)
const Hc = nc(As)
function zc(e, t, n, s = (r) => r) {
  return e * s(0.5 - t * (0.5 - n))
}
function jg(e) {
  return [-e[0], -e[1]]
}
function mt(e, t) {
  return [e[0] + t[0], e[1] + t[1]]
}
function ct(e, t) {
  return [e[0] - t[0], e[1] - t[1]]
}
function gt(e, t) {
  return [e[0] * t, e[1] * t]
}
function Lg(e, t) {
  return [e[0] / t, e[1] / t]
}
function Os(e) {
  return [e[1], -e[0]]
}
function Fg(e, t) {
  return e[0] * t[0] + e[1] * t[1]
}
function Ng(e, t) {
  return e[0] === t[0] && e[1] === t[1]
}
function Dg(e) {
  return Math.hypot(e[0], e[1])
}
function Hg(e) {
  return e[0] * e[0] + e[1] * e[1]
}
function Bc(e, t) {
  return Hg(ct(e, t))
}
function Vc(e) {
  return Lg(e, Dg(e))
}
function zg(e, t) {
  return Math.hypot(e[1] - t[1], e[0] - t[0])
}
function Ms(e, t, n) {
  let s = Math.sin(n),
    r = Math.cos(n),
    o = e[0] - t[0],
    i = e[1] - t[1],
    l = o * r - i * s,
    a = o * s + i * r
  return [l + t[0], a + t[1]]
}
function ci(e, t, n) {
  return mt(e, gt(ct(t, e), n))
}
function Uc(e, t, n) {
  return mt(e, gt(t, n))
}
var { min: Zn, PI: Bg } = Math,
  Kc = 0.275,
  Ps = Bg + 1e-4
function Vg(e, t = {}) {
  let {
      size: n = 16,
      smoothing: s = 0.5,
      thinning: r = 0.5,
      simulatePressure: o = !0,
      easing: i = (q) => q,
      start: l = {},
      end: a = {},
      last: c = !1
    } = t,
    { cap: u = !0, taper: f = 0, easing: d = (q) => q * (2 - q) } = l,
    { cap: m = !0, taper: v = 0, easing: E = (q) => --q * q * q + 1 } = a
  if (e.length === 0 || n <= 0) return []
  let w = e[e.length - 1].runningLength,
    A = Math.pow(n * s, 2),
    _ = [],
    b = [],
    S = e.slice(0, 10).reduce((q, G) => {
      let W = G.pressure
      if (o) {
        let ce = Zn(1, G.distance / n),
          _t = Zn(1, 1 - ce)
        W = Zn(1, q + (_t - q) * (ce * Kc))
      }
      return (q + W) / 2
    }, e[0].pressure),
    L = zc(n, r, e[e.length - 1].pressure, i),
    N,
    j = e[0].vector,
    J = e[0].point,
    ie = J,
    le = J,
    oe = ie
  for (let q = 0; q < e.length; q++) {
    let { pressure: G } = e[q],
      { point: W, vector: ce, distance: _t, runningLength: Fe } = e[q]
    if (q < e.length - 1 && w - Fe < 3) continue
    if (r) {
      if (o) {
        let P = Zn(1, _t / n),
          V = Zn(1, 1 - P)
        G = Zn(1, S + (V - S) * (P * Kc))
      }
      L = zc(n, r, G, i)
    } else L = n / 2
    N === void 0 && (N = L)
    let rt = Fe < f ? d(Fe / f) : 1,
      Ve = w - Fe < v ? E((w - Fe) / v) : 1
    if (((L = Math.max(0.01, L * Math.min(rt, Ve))), q === e.length - 1)) {
      let P = gt(Os(ce), L)
      _.push(ct(W, P)), b.push(mt(W, P))
      continue
    }
    let An = e[q + 1].vector,
      x = Fg(ce, An)
    if (x < 0) {
      let P = gt(Os(j), L)
      for (let V = 1 / 13, fe = 0; fe <= 1; fe += V)
        (le = Ms(ct(W, P), W, Ps * fe)),
          _.push(le),
          (oe = Ms(mt(W, P), W, Ps * -fe)),
          b.push(oe)
      ;(J = le), (ie = oe)
      continue
    }
    let H = gt(Os(ci(An, ce, x)), L)
    ;(le = ct(W, H)),
      (q <= 1 || Bc(J, le) > A) && (_.push(le), (J = le)),
      (oe = mt(W, H)),
      (q <= 1 || Bc(ie, oe) > A) && (b.push(oe), (ie = oe)),
      (S = G),
      (j = ce)
  }
  let Ae = e[0].point.slice(0, 2),
    Re =
      e.length > 1 ? e[e.length - 1].point.slice(0, 2) : mt(e[0].point, [1, 1]),
    ze = [],
    Be = []
  if (e.length === 1) {
    if (!(f || v) || c) {
      let q = Uc(Ae, Vc(Os(ct(Ae, Re))), -(N || L)),
        G = []
      for (let W = 1 / 13, ce = W; ce <= 1; ce += W)
        G.push(Ms(q, Ae, Ps * 2 * ce))
      return G
    }
  } else {
    if (!(f || (v && e.length === 1)))
      if (u)
        for (let G = 1 / 13, W = G; W <= 1; W += G) {
          let ce = Ms(b[0], Ae, Ps * W)
          ze.push(ce)
        }
      else {
        let G = ct(_[0], b[0]),
          W = gt(G, 0.5),
          ce = gt(G, 0.51)
        ze.push(ct(Ae, W), ct(Ae, ce), mt(Ae, ce), mt(Ae, W))
      }
    let q = Os(jg(e[e.length - 1].vector))
    if (v || (f && e.length === 1)) Be.push(Re)
    else if (m) {
      let G = Uc(Re, q, L)
      for (let W = 1 / 29, ce = W; ce < 1; ce += W)
        Be.push(Ms(G, Re, Ps * 3 * ce))
    } else
      Be.push(
        mt(Re, gt(q, L)),
        mt(Re, gt(q, L * 0.99)),
        ct(Re, gt(q, L * 0.99)),
        ct(Re, gt(q, L))
      )
  }
  return _.concat(Be, b.reverse(), ze)
}
function Ug(e, t = {}) {
  var n
  let { streamline: s = 0.5, size: r = 16, last: o = !1 } = t
  if (e.length === 0) return []
  let i = 0.15 + (1 - s) * 0.85,
    l = Array.isArray(e[0])
      ? e
      : e.map(({ x: m, y: v, pressure: E = 0.5 }) => [m, v, E])
  if (l.length === 2) {
    let m = l[1]
    l = l.slice(0, -1)
    for (let v = 1; v < 5; v++) l.push(ci(l[0], m, v / 4))
  }
  l.length === 1 && (l = [...l, [...mt(l[0], [1, 1]), ...l[0].slice(2)]])
  let a = [
      {
        point: [l[0][0], l[0][1]],
        pressure: l[0][2] >= 0 ? l[0][2] : 0.25,
        vector: [1, 1],
        distance: 0,
        runningLength: 0
      }
    ],
    c = !1,
    u = 0,
    f = a[0],
    d = l.length - 1
  for (let m = 1; m < l.length; m++) {
    let v = o && m === d ? l[m].slice(0, 2) : ci(f.point, l[m], i)
    if (Ng(f.point, v)) continue
    let E = zg(v, f.point)
    if (((u += E), m < d && !c)) {
      if (u < r) continue
      c = !0
    }
    ;(f = {
      point: v,
      pressure: l[m][2] >= 0 ? l[m][2] : 0.5,
      vector: Vc(ct(f.point, v)),
      distance: E,
      runningLength: u
    }),
      a.push(f)
  }
  return (a[0].vector = ((n = a[1]) == null ? void 0 : n.vector) || [0, 0]), a
}
function Kg(e, t = {}) {
  return Vg(Ug(e, t), t)
}
var Wg = Kg,
  qg = Object.defineProperty,
  Wc = Object.getOwnPropertySymbols,
  Yg = Object.prototype.hasOwnProperty,
  Jg = Object.prototype.propertyIsEnumerable,
  qc = (e, t, n) =>
    t in e
      ? qg(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  ui = (e, t) => {
    for (var n in t || (t = {})) Yg.call(t, n) && qc(e, n, t[n])
    if (Wc) for (var n of Wc(t)) Jg.call(t, n) && qc(e, n, t[n])
    return e
  }
var Gg = () => ({
  events: {},
  emit(e, ...t) {
    ;(this.events[e] || []).forEach((n) => n(...t))
  },
  on(e, t) {
    return (
      (this.events[e] = this.events[e] || []).push(t),
      () => (this.events[e] = (this.events[e] || []).filter((n) => n !== t))
    )
  }
})
function jr(e, t) {
  return e - t
}
function Qg(e) {
  return e < 0 ? -1 : 1
}
function Lr(e) {
  return [Math.abs(e), Qg(e)]
}
function Yc() {
  const e = () => (((1 + Math.random()) * 65536) | 0).toString(16).substring(1)
  return `${e() + e()}-${e()}-${e()}-${e()}-${e()}${e()}${e()}`
}
var Xg = 2,
  Lt = Xg,
  Ts = class {
    constructor(e) {
      ;(this.drauu = e),
        (this.event = void 0),
        (this.point = void 0),
        (this.start = void 0),
        (this.el = null)
    }
    onStart(e) {}
    onMove(e) {
      return !1
    }
    onEnd(e) {}
    get brush() {
      return this.drauu.brush
    }
    get shiftPressed() {
      return this.drauu.shiftPressed
    }
    get altPressed() {
      return this.drauu.altPressed
    }
    getMousePosition(e) {
      var t, n
      const s = this.drauu.el,
        r = (t = this.drauu.options.coordinateScale) != null ? t : 1
      if (this.drauu.options.coordinateTransform === !1) {
        const o = this.drauu.el.getBoundingClientRect()
        return {
          x: (e.pageX - o.left) * r,
          y: (e.pageY - o.top) * r,
          pressure: e.pressure
        }
      } else {
        const o = this.drauu.svgPoint
        ;(o.x = e.clientX), (o.y = e.clientY)
        const i = o.matrixTransform(
          (n = s.getScreenCTM()) == null ? void 0 : n.inverse()
        )
        return { x: i.x * r, y: i.y * r, pressure: e.pressure }
      }
    }
    createElement(e, t) {
      var n
      const s = document.createElementNS('http://www.w3.org/2000/svg', e),
        r = t ? ui(ui({}, this.brush), t) : this.brush
      return (
        s.setAttribute('fill', (n = r.fill) != null ? n : 'transparent'),
        s.setAttribute('stroke', r.color),
        s.setAttribute('stroke-width', r.size.toString()),
        s.setAttribute('stroke-linecap', 'round'),
        r.dasharray && s.setAttribute('stroke-dasharray', r.dasharray),
        s
      )
    }
    attr(e, t) {
      this.el.setAttribute(e, typeof t == 'string' ? t : t.toFixed(Lt))
    }
    _setEvent(e) {
      ;(this.event = e), (this.point = this.getMousePosition(e))
    }
    _eventDown(e) {
      return (
        this._setEvent(e), (this.start = this.point), this.onStart(this.point)
      )
    }
    _eventMove(e) {
      return this._setEvent(e), this.onMove(this.point)
    }
    _eventUp(e) {
      return this._setEvent(e), this.onEnd(this.point)
    }
  },
  Zg = class extends Ts {
    constructor() {
      super(...arguments)
      this.points = []
    }
    onStart(e) {
      return (
        (this.el = document.createElementNS(
          'http://www.w3.org/2000/svg',
          'path'
        )),
        (this.points = [e]),
        this.attr('fill', this.brush.color),
        this.attr('d', this.getSvgData(this.points)),
        this.el
      )
    }
    onMove(e) {
      return (
        this.el || this.onStart(e),
        this.points[this.points.length - 1] !== e && this.points.push(e),
        this.attr('d', this.getSvgData(this.points)),
        !0
      )
    }
    onEnd() {
      const e = this.el
      return (this.el = null), !!e
    }
    getSvgData(e) {
      const t = Wg(
        e,
        ui(
          {
            size: this.brush.size * 2,
            thinning: 0.9,
            simulatePressure: !1,
            start: { taper: 5 },
            end: { taper: 5 }
          },
          this.brush.stylusOptions
        )
      )
      if (!t.length) return ''
      const n = t.reduce(
        (s, [r, o], i, l) => {
          const [a, c] = l[(i + 1) % l.length]
          return s.push(r, o, (r + a) / 2, (o + c) / 2), s
        },
        ['M', ...t[0], 'Q']
      )
      return (
        n.push('Z'),
        n.map((s) => (typeof s == 'number' ? s.toFixed(2) : s)).join(' ')
      )
    }
  },
  ev = class extends Ts {
    onStart(e) {
      return (
        (this.el = this.createElement('ellipse')),
        this.attr('cx', e.x),
        this.attr('cy', e.y),
        this.el
      )
    }
    onMove(e) {
      if (!this.el || !this.start) return !1
      let [t, n] = Lr(e.x - this.start.x),
        [s, r] = Lr(e.y - this.start.y)
      if (this.shiftPressed) {
        const o = Math.min(t, s)
        ;(t = o), (s = o)
      }
      if (this.altPressed)
        this.attr('cx', this.start.x),
          this.attr('cy', this.start.y),
          this.attr('rx', t),
          this.attr('ry', s)
      else {
        const [o, i] = [this.start.x, this.start.x + t * n].sort(jr),
          [l, a] = [this.start.y, this.start.y + s * r].sort(jr)
        this.attr('cx', (o + i) / 2),
          this.attr('cy', (l + a) / 2),
          this.attr('rx', (i - o) / 2),
          this.attr('ry', (a - l) / 2)
      }
      return !0
    }
    onEnd() {
      const e = this.el
      return (this.el = null), !(!e || !e.getTotalLength())
    }
  }
function Jc(e, t) {
  const n = document.createElementNS('http://www.w3.org/2000/svg', 'defs'),
    s = document.createElementNS('http://www.w3.org/2000/svg', 'marker'),
    r = document.createElementNS('http://www.w3.org/2000/svg', 'path')
  return (
    r.setAttribute('fill', t),
    s.setAttribute('id', e),
    s.setAttribute('viewBox', '0 -5 10 10'),
    s.setAttribute('refX', '5'),
    s.setAttribute('refY', '0'),
    s.setAttribute('markerWidth', '4'),
    s.setAttribute('markerHeight', '4'),
    s.setAttribute('orient', 'auto'),
    r.setAttribute('d', 'M0,-5L10,0L0,5'),
    s.appendChild(r),
    n.appendChild(s),
    n
  )
}
var tv = class extends Ts {
    onStart(e) {
      if (
        ((this.el = this.createElement('line', { fill: 'transparent' })),
        this.attr('x1', e.x),
        this.attr('y1', e.y),
        this.attr('x2', e.x),
        this.attr('y2', e.y),
        this.brush.arrowEnd)
      ) {
        const t = Yc(),
          n = document.createElementNS('http://www.w3.org/2000/svg', 'g')
        return (
          n.append(Jc(t, this.brush.color)),
          n.append(this.el),
          this.attr('marker-end', `url(#${t})`),
          n
        )
      }
      return this.el
    }
    onMove(e) {
      if (!this.el) return !1
      let { x: t, y: n } = e
      if (this.shiftPressed) {
        const s = e.x - this.start.x,
          r = e.y - this.start.y
        if (r !== 0) {
          let o = s / r
          ;(o = Math.round(o)),
            Math.abs(o) <= 1
              ? ((t = this.start.x + r * o), (n = this.start.y + r))
              : ((t = this.start.x + s), (n = this.start.y))
        }
      }
      return (
        this.altPressed
          ? (this.attr('x1', this.start.x * 2 - t),
            this.attr('y1', this.start.y * 2 - n),
            this.attr('x2', t),
            this.attr('y2', n))
          : (this.attr('x1', this.start.x),
            this.attr('y1', this.start.y),
            this.attr('x2', t),
            this.attr('y2', n)),
        !0
      )
    }
    onEnd() {
      const e = this.el
      return (this.el = null), !(!e || e.getTotalLength() < 5)
    }
  },
  nv = class extends Ts {
    onStart(e) {
      return (
        (this.el = this.createElement('rect')),
        this.brush.cornerRadius &&
          (this.attr('rx', this.brush.cornerRadius),
          this.attr('ry', this.brush.cornerRadius)),
        this.attr('x', e.x),
        this.attr('y', e.y),
        this.el
      )
    }
    onMove(e) {
      if (!this.el || !this.start) return !1
      let [t, n] = Lr(e.x - this.start.x),
        [s, r] = Lr(e.y - this.start.y)
      if (this.shiftPressed) {
        const o = Math.min(t, s)
        ;(t = o), (s = o)
      }
      if (this.altPressed)
        this.attr('x', this.start.x - t),
          this.attr('y', this.start.y - s),
          this.attr('width', t * 2),
          this.attr('height', s * 2)
      else {
        const [o, i] = [this.start.x, this.start.x + t * n].sort(jr),
          [l, a] = [this.start.y, this.start.y + s * r].sort(jr)
        this.attr('x', o),
          this.attr('y', l),
          this.attr('width', i - o),
          this.attr('height', a - l)
      }
      return !0
    }
    onEnd() {
      const e = this.el
      return (this.el = null), !(!e || !e.getTotalLength())
    }
  }
function sv(e, t) {
  const n = e.x - t.x,
    s = e.y - t.y
  return n * n + s * s
}
function rv(e, t, n) {
  let s = t.x,
    r = t.y,
    o = n.x - s,
    i = n.y - r
  if (o !== 0 || i !== 0) {
    const l = ((e.x - s) * o + (e.y - r) * i) / (o * o + i * i)
    l > 1 ? ((s = n.x), (r = n.y)) : l > 0 && ((s += o * l), (r += i * l))
  }
  return (o = e.x - s), (i = e.y - r), o * o + i * i
}
function ov(e, t) {
  let n = e[0]
  const s = [n]
  let r
  for (let o = 1, i = e.length; o < i; o++)
    (r = e[o]), sv(r, n) > t && (s.push(r), (n = r))
  return n !== r && r && s.push(r), s
}
function fi(e, t, n, s, r) {
  let o = s,
    i = 0
  for (let l = t + 1; l < n; l++) {
    const a = rv(e[l], e[t], e[n])
    a > o && ((i = l), (o = a))
  }
  o > s &&
    (i - t > 1 && fi(e, t, i, s, r),
    r.push(e[i]),
    n - i > 1 && fi(e, i, n, s, r))
}
function iv(e, t) {
  const n = e.length - 1,
    s = [e[0]]
  return fi(e, 0, n, t, s), s.push(e[n]), s
}
function Gc(e, t, n = !1) {
  if (e.length <= 2) return e
  const s = t !== void 0 ? t * t : 1
  return (e = n ? e : ov(e, s)), (e = iv(e, s)), e
}
var lv = class extends Ts {
  constructor() {
    super(...arguments)
    ;(this.points = []), (this.count = 0)
  }
  onStart(e) {
    if (
      ((this.el = this.createElement('path', { fill: 'transparent' })),
      (this.points = [e]),
      this.brush.arrowEnd)
    ) {
      this.arrowId = Yc()
      const t = Jc(this.arrowId, this.brush.color)
      this.el.appendChild(t)
    }
    return this.el
  }
  onMove(e) {
    return (
      this.el || this.onStart(e),
      this.points[this.points.length - 1] !== e &&
        (this.points.push(e), (this.count += 1)),
      this.count > 5 &&
        ((this.points = Gc(this.points, 1, !0)), (this.count = 0)),
      this.attr('d', Xc(this.points)),
      !0
    )
  }
  onEnd() {
    const e = this.el
    return (
      (this.el = null),
      !(
        !e ||
        (e.setAttribute('d', Xc(Gc(this.points, 1, !0))), !e.getTotalLength())
      )
    )
  }
}
function av(e, t) {
  const n = t.x - e.x,
    s = t.y - e.y
  return {
    length: Math.sqrt(Math.pow(n, 2) + Math.pow(s, 2)),
    angle: Math.atan2(s, n)
  }
}
function Qc(e, t, n, s) {
  const r = t || e,
    o = n || e,
    i = 0.2,
    l = av(r, o),
    a = l.angle + (s ? Math.PI : 0),
    c = l.length * i,
    u = e.x + Math.cos(a) * c,
    f = e.y + Math.sin(a) * c
  return { x: u, y: f }
}
function cv(e, t, n) {
  const s = Qc(n[t - 1], n[t - 2], e),
    r = Qc(e, n[t - 1], n[t + 1], !0)
  return `C ${s.x.toFixed(Lt)},${s.y.toFixed(Lt)} ${r.x.toFixed(
    Lt
  )},${r.y.toFixed(Lt)} ${e.x.toFixed(Lt)},${e.y.toFixed(Lt)}`
}
function Xc(e) {
  return e.reduce(
    (t, n, s, r) =>
      s === 0
        ? `M ${n.x.toFixed(Lt)},${n.y.toFixed(Lt)}`
        : `${t} ${cv(n, s, r)}`,
    ''
  )
}
function uv(e) {
  return {
    draw: new lv(e),
    stylus: new Zg(e),
    line: new tv(e),
    rectangle: new nv(e),
    ellipse: new ev(e)
  }
}
var fv = class {
  constructor(e = {}) {
    ;(this.options = e),
      (this.el = null),
      (this.svgPoint = null),
      (this.eventEl = null),
      (this.shiftPressed = !1),
      (this.altPressed = !1),
      (this.drawing = !1),
      (this._emitter = Gg()),
      (this._models = uv(this)),
      (this._undoStack = []),
      (this._disposables = []),
      this.options.brush ||
        (this.options.brush = { color: 'black', size: 3, mode: 'stylus' }),
      e.el && this.mount(e.el, e.eventTarget)
  }
  get model() {
    return this._models[this.mode]
  }
  get mounted() {
    return !!this.el
  }
  get mode() {
    return this.options.brush.mode || 'stylus'
  }
  set mode(e) {
    this.options.brush.mode = e
  }
  get brush() {
    return this.options.brush
  }
  set brush(e) {
    this.options.brush = e
  }
  resolveSelector(e) {
    return typeof e == 'string' ? document.querySelector(e) : e || null
  }
  mount(e, t) {
    if (this.el)
      throw new Error('[drauu] already mounted, unmount previous target first')
    if (((this.el = this.resolveSelector(e)), !this.el))
      throw new Error('[drauu] target element not found')
    if (this.el.tagName.toLocaleLowerCase() !== 'svg')
      throw new Error('[drauu] can only mount to a SVG element')
    if (!this.el.createSVGPoint)
      throw new Error(
        "[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/sv', 'svg')"
      )
    this.svgPoint = this.el.createSVGPoint()
    const n = this.resolveSelector(t) || this.el,
      s = this.eventStart.bind(this),
      r = this.eventMove.bind(this),
      o = this.eventEnd.bind(this),
      i = this.eventKeyboard.bind(this)
    n.addEventListener('pointerdown', s, { passive: !1 }),
      window.addEventListener('pointermove', r, { passive: !1 }),
      window.addEventListener('pointerup', o, { passive: !1 }),
      window.addEventListener('pointercancel', o, { passive: !1 }),
      window.addEventListener('keydown', i, !1),
      window.addEventListener('keyup', i, !1),
      this._disposables.push(() => {
        n.removeEventListener('pointerdown', s),
          window.removeEventListener('pointermove', r),
          window.removeEventListener('pointerup', o),
          window.removeEventListener('pointercancel', o),
          window.removeEventListener('keydown', i, !1),
          window.removeEventListener('keyup', i, !1)
      }),
      this._emitter.emit('mounted')
  }
  unmount() {
    this._disposables.forEach((e) => e()),
      (this._disposables.length = 0),
      (this.el = null),
      this._emitter.emit('unmounted')
  }
  on(e, t) {
    return this._emitter.on(e, t)
  }
  undo() {
    const e = this.el
    return e.lastElementChild
      ? (this._undoStack.push(e.lastElementChild.cloneNode(!0)),
        e.lastElementChild.remove(),
        this._emitter.emit('changed'),
        !0)
      : !1
  }
  redo() {
    return this._undoStack.length
      ? (this.el.appendChild(this._undoStack.pop()),
        this._emitter.emit('changed'),
        !0)
      : !1
  }
  canRedo() {
    return !!this._undoStack.length
  }
  canUndo() {
    var e
    return !!((e = this.el) == null ? void 0 : e.lastElementChild)
  }
  eventMove(e) {
    !this.acceptsInput(e) ||
      !this.drawing ||
      (this.model._eventMove(e) &&
        (e.stopPropagation(),
        e.preventDefault(),
        this._emitter.emit('changed')))
  }
  eventStart(e) {
    !this.acceptsInput(e) ||
      (e.stopPropagation(),
      e.preventDefault(),
      this._currentNode && this.cancel(),
      (this.drawing = !0),
      this._emitter.emit('start'),
      (this._currentNode = this.model._eventDown(e)),
      this._currentNode && this.el.appendChild(this._currentNode),
      this._emitter.emit('changed'))
  }
  eventEnd(e) {
    if (!this.acceptsInput(e) || !this.drawing) return
    const t = this.model._eventUp(e)
    t
      ? (t instanceof Element &&
          t !== this._currentNode &&
          (this._currentNode = t),
        this.commit())
      : this.cancel(),
      (this.drawing = !1),
      this._emitter.emit('end'),
      this._emitter.emit('changed')
  }
  acceptsInput(e) {
    return (
      !this.options.acceptsInputTypes ||
      this.options.acceptsInputTypes.includes(e.pointerType)
    )
  }
  eventKeyboard(e) {
    ;(this.shiftPressed === e.shiftKey && this.altPressed === e.altKey) ||
      ((this.shiftPressed = e.shiftKey),
      (this.altPressed = e.altKey),
      this.model.point &&
        this.model.onMove(this.model.point) &&
        this._emitter.emit('changed'))
  }
  commit() {
    this._undoStack.length = 0
    const e = this._currentNode
    ;(this._currentNode = void 0), this._emitter.emit('committed', e)
  }
  clear() {
    ;(this._undoStack.length = 0),
      this.cancel(),
      (this.el.innerHTML = ''),
      this._emitter.emit('changed')
  }
  cancel() {
    this._currentNode &&
      (this.el.removeChild(this._currentNode),
      (this._currentNode = void 0),
      this._emitter.emit('canceled'))
  }
  dump() {
    return this.el.innerHTML
  }
  load(e) {
    this.clear(), (this.el.innerHTML = e)
  }
}
function dv(e) {
  return new fv(e)
}
const di = [
    '#ff595e',
    '#ffca3a',
    '#8ac926',
    '#1982c4',
    '#6a4c93',
    '#ffffff',
    '#000000'
  ],
  _n = pt('slidev-drawing-enabled', !1)
pt('slidev-drawing-pinned', !1)
const hv = Z(!1),
  pv = Z(!1),
  mv = Z(!1),
  Is = Z(!1),
  es = Lp(
    pt('slidev-drawing-brush', { color: di[0], size: 4, mode: 'stylus' })
  ),
  Zc = Z('stylus')
let hi = !1
const Rs = D({
    get() {
      return Zc.value
    },
    set(e) {
      ;(Zc.value = e),
        e === 'arrow'
          ? ((es.mode = 'line'), (es.arrowEnd = !0))
          : ((es.mode = e), (es.arrowEnd = !1))
    }
  }),
  gv = Te({
    brush: es,
    acceptsInputTypes: D(() => (_n.value ? void 0 : ['pen'])),
    coordinateTransform: !1
  }),
  qe = xo(dv(gv))
function vv() {
  qe.clear(), yn.$patch({ [Le.value]: '' })
}
function yv() {
  var e
  ;(pv.value = qe.canRedo()),
    (hv.value = qe.canUndo()),
    (mv.value = !!((e = qe.el) == null ? void 0 : e.children.length))
}
function _v() {
  hi = !0
  const e = yn[Le.value]
  e != null ? qe.load(e) : qe.clear(), (hi = !1)
}
qe.on('changed', () => {
  if ((yv(), !hi)) {
    const e = qe.dump(),
      t = Le.value
    ;(yn[t] || '') !== e && (yn[t] = qe.dump())
  }
})
Ut(() => {
  ae(
    Le,
    () => {
      !qe.mounted || _v()
    },
    { immediate: !0 }
  ),
    Ko(() => {
      yn.$syncUp = Oe.drawings.syncAll || Zt.value
    })
})
qe.on('start', () => (Is.value = !0))
qe.on('end', () => (Is.value = !1))
window.addEventListener(
  'keydown',
  (e) => {
    if (!_n.value) return
    const t = !e.ctrlKey && !e.altKey && !e.shiftKey && !e.metaKey
    let n = !0
    e.code === 'KeyZ' && (e.ctrlKey || e.metaKey)
      ? e.shiftKey
        ? qe.redo()
        : qe.undo()
      : e.code === 'Escape'
      ? (_n.value = !1)
      : e.code === 'KeyL' && t
      ? (Rs.value = 'line')
      : e.code === 'KeyA' && t
      ? (Rs.value = 'arrow')
      : e.code === 'KeyS' && t
      ? (Rs.value = 'stylus')
      : e.code === 'KeyR' && t
      ? (Rs.value = 'rectangle')
      : e.code === 'KeyE' && t
      ? (Rs.value = 'ellipse')
      : e.code === 'KeyC' && t
      ? vv()
      : e.code.startsWith('Digit') && t && +e.code[5] <= di.length
      ? (es.color = di[+e.code[5] - 1])
      : (n = !1),
      n && (e.preventDefault(), e.stopPropagation())
  },
  !1
)
const eu = Zp(),
  pi = pt('slidev-color-schema', 'auto'),
  mi = D(() => Oe.colorSchema !== 'auto'),
  gi = D({
    get() {
      return mi.value
        ? Oe.colorSchema === 'dark'
        : pi.value === 'auto'
        ? eu.value
        : pi.value === 'dark'
    },
    set(e) {
      mi.value || (pi.value = e === eu.value ? 'auto' : e ? 'dark' : 'light')
    }
  }),
  tu = nc(gi)
Kn &&
  ae(
    gi,
    (e) => {
      const t = document.querySelector('html')
      t.classList.toggle('dark', e), t.classList.toggle('light', !e)
    },
    { immediate: !0 }
  )
function bv() {
  return []
}
const nu = it(It(Ig), It(Rg), Pg)
function wv(e, t, n = !1) {
  typeof e == 'string' && (e = Fc[e])
  const s = it(e, nu)
  let r = 0,
    o
  const i = () => {
    if ((clearTimeout(o), !s.value)) {
      r = 0
      return
    }
    n && ((o = setTimeout(i, Math.max(1e3 - r * 250, 150))), r++), t()
  }
  return ae(s, i, { flush: 'sync' })
}
function xv(e, t) {
  return zp(e, (n) => {
    !nu.value || n.repeat || t()
  })
}
function Ev() {
  const e = bv(),
    { escape: t, space: n, shift: s, left: r, right: o, d: i, g: l, o: a } = Fc
  new Map(
    [
      { key: it(n, It(s)), fn: en, autoRepeat: !0 },
      { key: it(n, s), fn: tn, autoRepeat: !0 },
      { key: it(o, It(s)), fn: en, autoRepeat: !0 },
      { key: it(r, It(s)), fn: tn, autoRepeat: !0 },
      { key: 'pageDown', fn: en, autoRepeat: !0 },
      { key: 'pageUp', fn: tn, autoRepeat: !0 },
      { key: 'up', fn: () => Vs(!1), autoRepeat: !0 },
      { key: 'down', fn: Bs, autoRepeat: !0 },
      { key: it(r, s), fn: () => Vs(!1), autoRepeat: !0 },
      { key: it(o, s), fn: Bs, autoRepeat: !0 },
      { key: it(i, It(_n)), fn: tu },
      { key: it(a, It(_n)), fn: Hc },
      { key: it(t, It(_n)), fn: () => (As.value = !1) },
      { key: it(l, It(_n)), fn: () => (Qn.value = !Qn.value) },
      ...e
    ].map((u) => [u.key, u])
  ).forEach((u) => {
    u.fn && wv(u.key, u.fn, u.autoRepeat)
  }),
    xv('f', () => Nc.toggle())
}
const Sv = {
    class: 'slidev-icon',
    width: '1.2em',
    height: '1.2em',
    preserveAspectRatio: 'xMidYMid meet',
    viewBox: '0 0 32 32'
  },
  kv = p(
    'path',
    {
      d: 'M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z',
      fill: 'currentColor'
    },
    null,
    -1
  ),
  $v = [kv]
function Cv(e, t) {
  return M(), z('svg', Sv, $v)
}
var Av = { name: 'carbon-close', render: Cv }
function su(e) {
  var n, s
  const t =
    (s = (n = e == null ? void 0 : e.meta) == null ? void 0 : n.slide) == null
      ? void 0
      : s.no
  return t != null ? `slidev-page-${t}` : ''
}
const Fr = Symbol('v-click-clicks'),
  ts = Symbol('v-click-clicks-elements'),
  vi = Symbol('v-click-clicks-order-map'),
  Nr = Symbol('v-click-clicks-disabled'),
  Ov = Symbol('slidev-slide-scale'),
  ns = 'slidev-vclick-target',
  yi = 'slidev-vclick-hidden',
  Mv = 'slidev-vclick-fade',
  _i = 'slidev-vclick-hidden-explicitly',
  js = 'slidev-vclick-current',
  Dr = 'slidev-vclick-prior'
const ru = Se({
  props: {
    width: { type: Number },
    meta: { default: () => ({}) },
    scale: { type: [Number, String] }
  },
  setup(e) {
    const t = e,
      n = Z(),
      s = rm(n),
      r = D(() => (t.width ? t.width : s.width.value)),
      o = D(() => (t.width ? t.width / ks : s.height.value))
    t.width &&
      Ko(() => {
        n.value &&
          ((n.value.style.width = `${r.value}px`),
          (n.value.style.height = `${o.value}px`))
      })
    const i = D(() => r.value / o.value),
      l = D(() =>
        t.scale ? t.scale : i.value < ks ? r.value / Ir : (o.value * ks) / Ir
      ),
      a = D(() => ({
        height: `${Og}px`,
        width: `${Ir}px`,
        transform: `translate(-50%, -50%) scale(${l.value})`
      })),
      c = D(() => ({
        'select-none': !Oe.selectable,
        'slidev-code-line-numbers': Oe.lineNumbers
      }))
    return (
      At(Ov, l),
      (u, f) => (
        M(),
        z(
          'div',
          { id: 'slide-container', ref_key: 'root', ref: n, class: $e(C(c)) },
          [
            p(
              'div',
              { id: 'slide-content', style: ft(C(a)) },
              [zt(u.$slots, 'default')],
              4
            ),
            zt(u.$slots, 'controls')
          ],
          2
        )
      )
    )
  }
})
var ou = Se({
  props: {
    clicks: { type: [Number, String], default: 0 },
    clicksElements: { type: Array, default: () => [] },
    clicksOrderMap: { type: Map, default: () => new Map() },
    clicksDisabled: { type: Boolean, default: !1 },
    is: { type: Object, default: void 0 }
  },
  setup(e, { emit: t }) {
    const n = jt(e, 'clicks', t),
      s = jt(e, 'clicksElements', t),
      r = jt(e, 'clicksDisabled', t),
      o = jt(e, 'clicksOrderMap', t)
    ;(s.value.length = 0), At(Fr, n), At(Nr, r), At(ts, s), At(vi, o)
  },
  render() {
    var e, t
    return this.$props.is
      ? Bn(this.$props.is)
      : (t = (e = this.$slots) == null ? void 0 : e.default) == null
      ? void 0
      : t.call(e)
  }
})
const Pv = ['innerHTML'],
  Tv = Se({
    props: { page: null },
    setup(e) {
      return (t, n) =>
        C(yn)[e.page]
          ? (M(),
            z(
              'svg',
              {
                key: 0,
                ref: 'svg',
                class: 'w-full h-full absolute top-0 pointer-events-none',
                innerHTML: C(yn)[e.page]
              },
              null,
              8,
              Pv
            ))
          : ve('v-if', !0)
    }
  })
const Iv = {
    class: 'slides-overview bg-main !bg-opacity-75 p-16 overflow-y-auto'
  },
  Rv = ['onClick'],
  jv = Se({
    props: { modelValue: { type: Boolean } },
    emits: [],
    setup(e, { emit: t }) {
      const s = jt(e, 'modelValue', t)
      function r() {
        s.value = !1
      }
      function o(f) {
        Us(f), r()
      }
      const i = ai.smaller('xs'),
        l = ai.smaller('sm'),
        a = 4 * 16 * 2,
        c = 2 * 16,
        u = D(() =>
          i.value
            ? Cs.width.value - a
            : l.value
            ? (Cs.width.value - a - c) / 2
            : 300
        )
      return (f, d) => {
        const m = Av
        return (
          M(),
          z(
            ke,
            null,
            [
              et(
                p(
                  'div',
                  Iv,
                  [
                    p(
                      'div',
                      {
                        class: 'grid gap-y-4 gap-x-8 w-full',
                        style: ft(
                          `grid-template-columns: repeat(auto-fit,minmax(${C(
                            u
                          )}px,1fr))`
                        )
                      },
                      [
                        (M(!0),
                        z(
                          ke,
                          null,
                          Nn(
                            C(vt).slice(0, -1),
                            (v, E) => (
                              M(),
                              z('div', { key: v.path, class: 'relative' }, [
                                p(
                                  'div',
                                  {
                                    class:
                                      'inline-block border border-gray-400 rounded border-opacity-50 overflow-hidden bg-main hover:border-$slidev-theme-primary',
                                    onClick: (w) => o(+v.path)
                                  },
                                  [
                                    (M(),
                                    me(
                                      ru,
                                      {
                                        key: v.path,
                                        width: C(u),
                                        'clicks-disabled': !0,
                                        class: 'pointer-events-none'
                                      },
                                      {
                                        default: ge(() => [
                                          Y(Tv, { page: +v.path }, null, 8, [
                                            'page'
                                          ]),
                                          Y(
                                            C(ou),
                                            {
                                              is:
                                                v == null
                                                  ? void 0
                                                  : v.component,
                                              'clicks-disabled': !0,
                                              class: $e(C(su)(v))
                                            },
                                            null,
                                            8,
                                            ['is', 'class']
                                          )
                                        ]),
                                        _: 2
                                      },
                                      1032,
                                      ['width']
                                    ))
                                  ],
                                  8,
                                  Rv
                                ),
                                p(
                                  'div',
                                  {
                                    class: 'absolute top-0 opacity-50',
                                    style: ft(`left: ${C(u) + 5}px`)
                                  },
                                  kt(E + 1),
                                  5
                                )
                              ])
                            )
                          ),
                          128
                        ))
                      ],
                      4
                    )
                  ],
                  512
                ),
                [[Ka, C(s)]]
              ),
              C(s)
                ? (M(),
                  z(
                    'button',
                    {
                      key: 0,
                      class:
                        'fixed text-2xl top-4 right-4 icon-btn text-gray-400',
                      onClick: r
                    },
                    [Y(m)]
                  ))
                : ve('v-if', !0)
            ],
            64
          )
        )
      }
    }
  })
var Lv = '/assets/logo.b72bde5d.png'
const Fv = { key: 0, class: 'fixed top-0 bottom-0 left-0 right-0 grid z-20' },
  Nv = Se({
    props: { modelValue: { default: !1 }, class: { default: '' } },
    emits: ['modelValue'],
    setup(e, { emit: t }) {
      const n = e,
        s = jt(n, 'modelValue', t)
      function r() {
        s.value = !1
      }
      return (o, i) => (
        M(),
        me(
          Ql,
          null,
          [
            C(s)
              ? (M(),
                z('div', Fv, [
                  p('div', {
                    bg: 'black opacity-80',
                    class: 'absolute top-0 bottom-0 left-0 right-0 -z-1',
                    onClick: i[0] || (i[0] = (l) => r())
                  }),
                  p(
                    'div',
                    {
                      class: $e(['m-auto rounded-md bg-main shadow', n.class]),
                      'dark:border': '~ gray-400 opacity-10'
                    },
                    [zt(o.$slots, 'default')],
                    2
                  )
                ]))
              : ve('v-if', !0)
          ],
          1024
        )
      )
    }
  })
const Dv = {
    class: 'slidev-info-dialog slidev-layout flex flex-col gap-4 text-base'
  },
  Hv = ['innerHTML'],
  zv = p(
    'a',
    {
      href: 'https://github.com/slidevjs/slidev',
      target: '_blank',
      class: '!opacity-100 !border-none !text-current'
    },
    [
      p('div', { class: 'flex gap-1 children:my-auto' }, [
        p('div', { class: 'opacity-50 text-sm mr-2' }, 'Powered by'),
        p('img', { class: 'w-5 h-5', src: Lv, alt: 'Slidev' }),
        p('div', { style: { color: '#2082A6' } }, [
          p('b', null, 'Sli'),
          se('dev ')
        ])
      ])
    ],
    -1
  ),
  Bv = Se({
    props: { modelValue: { default: !1 } },
    emits: ['modelValue'],
    setup(e, { emit: t }) {
      const s = jt(e, 'modelValue', t),
        r = D(() => typeof Oe.info == 'string')
      return (o, i) => (
        M(),
        me(
          Nv,
          {
            modelValue: C(s),
            'onUpdate:modelValue':
              i[0] || (i[0] = (l) => (Ce(s) ? (s.value = l) : null)),
            class: 'px-6 py-4'
          },
          {
            default: ge(() => [
              p('div', Dv, [
                C(r)
                  ? (M(),
                    z(
                      'div',
                      { key: 0, class: 'mb-4', innerHTML: C(Oe).info },
                      null,
                      8,
                      Hv
                    ))
                  : ve('v-if', !0),
                zv
              ])
            ]),
            _: 1
          },
          8,
          ['modelValue']
        )
      )
    }
  })
var bn = (e, t) => {
  const n = e.__vccOpts || e
  for (const [s, r] of t) n[s] = r
  return n
}
const Vv = ['disabled', 'onKeydown'],
  Uv = Se({
    setup(e) {
      const t = Z(),
        n = Z(''),
        s = D(() => +n.value),
        r = D(() => !isNaN(s.value) && s.value > 0 && s.value <= Di.value)
      function o() {
        r.value && Us(s.value), i()
      }
      function i() {
        Qn.value = !1
      }
      return (
        Fp(Qn, async () => {
          var l
          ;(n.value = ''), await Ut(), (l = t.value) == null || l.focus()
        }),
        (l, a) => (
          M(),
          z(
            'div',
            {
              id: 'slidev-goto-dialog',
              class: $e([
                'fixed right-5 bg-main transform transition-all',
                C(Qn) ? 'top-5' : '-top-20'
              ]),
              shadow: '~',
              p: 'x-4 y-2',
              border: '~ transparent rounded dark:gray-400 dark:opacity-25'
            },
            [
              et(
                p(
                  'input',
                  {
                    ref_key: 'input',
                    ref: t,
                    'onUpdate:modelValue':
                      a[0] || (a[0] = (c) => (n.value = c)),
                    type: 'number',
                    disabled: !C(Qn),
                    class: $e([
                      'outline-none bg-transparent',
                      { 'text-red-400': !C(r) && n.value }
                    ]),
                    placeholder: 'Goto...',
                    onKeydown: [Ua(o, ['enter']), Ua(i, ['escape'])],
                    onBlur: i
                  },
                  null,
                  42,
                  Vv
                ),
                [[ip, n.value]]
              )
            ],
            2
          )
        )
      )
    }
  })
var Kv = bn(Uv, [['__scopeId', 'data-v-47bceb60']])
const Wv = Se({
    setup(e) {
      return (
        Ct(),
        Ct(),
        (t, n) => (
          M(),
          z(
            ke,
            null,
            [
              Y(
                jv,
                {
                  modelValue: C(As),
                  'onUpdate:modelValue':
                    n[0] || (n[0] = (s) => (Ce(As) ? (As.value = s) : null))
                },
                null,
                8,
                ['modelValue']
              ),
              Y(Kv),
              ve('v-if', !0),
              C(Oe).info
                ? (M(),
                  me(
                    Bv,
                    {
                      key: 1,
                      modelValue: C($s),
                      'onUpdate:modelValue':
                        n[2] || (n[2] = (s) => (Ce($s) ? ($s.value = s) : null))
                    },
                    null,
                    8,
                    ['modelValue']
                  ))
                : ve('v-if', !0)
            ],
            64
          )
        )
      )
    }
  }),
  qv = {
    class: 'slidev-icon',
    width: '1.2em',
    height: '1.2em',
    preserveAspectRatio: 'xMidYMid meet',
    viewBox: '0 0 32 32'
  },
  Yv = p(
    'path',
    {
      d: 'M30 8h-4.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2h14.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30V8zm-9 4c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3z',
      fill: 'currentColor'
    },
    null,
    -1
  ),
  Jv = p(
    'path',
    {
      d: 'M2 24h4.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30v-2H15.9c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2zm9-4c1.7 0 3 1.3 3 3s-1.3 3-3 3s-3-1.3-3-3s1.3-3 3-3z',
      fill: 'currentColor'
    },
    null,
    -1
  ),
  Gv = [Yv, Jv]
function Qv(e, t) {
  return M(), z('svg', qv, Gv)
}
var Xv = { name: 'carbon-settings-adjust', render: Qv }
const Zv = {
    class: 'slidev-icon',
    width: '1.2em',
    height: '1.2em',
    preserveAspectRatio: 'xMidYMid meet',
    viewBox: '0 0 32 32'
  },
  e0 = p(
    'path',
    { d: 'M17 22v-8h-4v2h2v6h-3v2h8v-2h-3z', fill: 'currentColor' },
    null,
    -1
  ),
  t0 = p(
    'path',
    {
      d: 'M16 8a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 8z',
      fill: 'currentColor'
    },
    null,
    -1
  ),
  n0 = p(
    'path',
    {
      d: 'M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4z',
      fill: 'currentColor'
    },
    null,
    -1
  ),
  s0 = [e0, t0, n0]
function r0(e, t) {
  return M(), z('svg', Zv, s0)
}
var o0 = { name: 'carbon-information', render: r0 }
const i0 = {
    class: 'slidev-icon',
    width: '1.2em',
    height: '1.2em',
    preserveAspectRatio: 'xMidYMid meet',
    viewBox: '0 0 32 32'
  },
  l0 = p(
    'path',
    {
      d: 'M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4z',
      fill: 'currentColor'
    },
    null,
    -1
  ),
  a0 = p(
    'path',
    {
      d: 'M26 14l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z',
      fill: 'currentColor'
    },
    null,
    -1
  ),
  c0 = [l0, a0]
function u0(e, t) {
  return M(), z('svg', i0, c0)
}
var f0 = { name: 'carbon-download', render: u0 }
const d0 = {
    class: 'slidev-icon',
    width: '1.2em',
    height: '1.2em',
    preserveAspectRatio: 'xMidYMid meet',
    viewBox: '0 0 256 256'
  },
  h0 = p(
    'path',
    {
      d: 'M213.7 202.3a8.1 8.1 0 0 1 0 11.4a8.3 8.3 0 0 1-5.7 2.3a8.5 8.5 0 0 1-5.7-2.3l-63.1-63.2l-20.3 55.9a15.9 15.9 0 0 1-14.9 10.5h-.1a15.9 15.9 0 0 1-15-10.4L30.7 51.3a16 16 0 0 1 20.6-20.6l155.2 58.2a16 16 0 0 1-.1 30l-55.9 20.3z',
      fill: 'currentColor'
    },
    null,
    -1
  ),
  p0 = [h0]
function m0(e, t) {
  return M(), z('svg', d0, p0)
}
var g0 = { name: 'ph-cursor-fill', render: m0 }
const v0 = {
    class: 'slidev-icon',
    width: '1.2em',
    height: '1.2em',
    preserveAspectRatio: 'xMidYMid meet',
    viewBox: '0 0 32 32'
  },
  y0 = Eh(
    '<path d="M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6z" fill="currentColor"></path><path d="M5.394 6.813l1.414-1.415l3.506 3.506L8.9 10.318z" fill="currentColor"></path><path d="M2 15.005h5v2H2z" fill="currentColor"></path><path d="M5.394 25.197L8.9 21.691l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 25.005h2v5h-2z" fill="currentColor"></path><path d="M21.687 23.106l1.414-1.415l3.506 3.506l-1.414 1.414z" fill="currentColor"></path><path d="M25 15.005h5v2h-5z" fill="currentColor"></path><path d="M21.687 8.904l3.506-3.506l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 2.005h2v5h-2z" fill="currentColor"></path>',
    9
  ),
  _0 = [y0]
function b0(e, t) {
  return M(), z('svg', v0, _0)
}
var w0 = { name: 'carbon-sun', render: b0 }
const x0 = {
    class: 'slidev-icon',
    width: '1.2em',
    height: '1.2em',
    preserveAspectRatio: 'xMidYMid meet',
    viewBox: '0 0 32 32'
  },
  E0 = p(
    'path',
    {
      d: 'M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3z',
      fill: 'currentColor'
    },
    null,
    -1
  ),
  S0 = [E0]
function k0(e, t) {
  return M(), z('svg', x0, S0)
}
var $0 = { name: 'carbon-moon', render: k0 }
const C0 = {
    class: 'slidev-icon',
    width: '1.2em',
    height: '1.2em',
    preserveAspectRatio: 'xMidYMid meet',
    viewBox: '0 0 32 32'
  },
  A0 = p(
    'path',
    {
      d: 'M8 4v4H4V4zm2-2H2v8h8zm8 2v4h-4V4zm2-2h-8v8h8zm8 2v4h-4V4zm2-2h-8v8h8zM8 14v4H4v-4zm2-2H2v8h8zm8 2v4h-4v-4zm2-2h-8v8h8zm8 2v4h-4v-4zm2-2h-8v8h8zM8 24v4H4v-4zm2-2H2v8h8zm8 2v4h-4v-4zm2-2h-8v8h8zm8 2v4h-4v-4zm2-2h-8v8h8z',
      fill: 'currentColor'
    },
    null,
    -1
  ),
  O0 = [A0]
function M0(e, t) {
  return M(), z('svg', C0, O0)
}
var P0 = { name: 'carbon-apps', render: M0 }
const T0 = {
    class: 'slidev-icon',
    width: '1.2em',
    height: '1.2em',
    preserveAspectRatio: 'xMidYMid meet',
    viewBox: '0 0 32 32'
  },
  I0 = p(
    'path',
    {
      d: 'M18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z',
      fill: 'currentColor'
    },
    null,
    -1
  ),
  R0 = [I0]
function j0(e, t) {
  return M(), z('svg', T0, R0)
}
var L0 = { name: 'carbon-arrow-right', render: j0 }
const F0 = {
    class: 'slidev-icon',
    width: '1.2em',
    height: '1.2em',
    preserveAspectRatio: 'xMidYMid meet',
    viewBox: '0 0 32 32'
  },
  N0 = p(
    'path',
    {
      d: 'M14 26l1.41-1.41L7.83 17H28v-2H7.83l7.58-7.59L14 6L4 16l10 10z',
      fill: 'currentColor'
    },
    null,
    -1
  ),
  D0 = [N0]
function H0(e, t) {
  return M(), z('svg', F0, D0)
}
var z0 = { name: 'carbon-arrow-left', render: H0 }
const B0 = {
    class: 'slidev-icon',
    width: '1.2em',
    height: '1.2em',
    preserveAspectRatio: 'xMidYMid meet',
    viewBox: '0 0 32 32'
  },
  V0 = p(
    'path',
    {
      d: 'M20 2v2h6.586L18 12.582L19.414 14L28 5.414V12h2V2H20z',
      fill: 'currentColor'
    },
    null,
    -1
  ),
  U0 = p(
    'path',
    {
      d: 'M14 19.416L12.592 18L4 26.586V20H2v10h10v-2H5.414L14 19.416z',
      fill: 'currentColor'
    },
    null,
    -1
  ),
  K0 = [V0, U0]
function W0(e, t) {
  return M(), z('svg', B0, K0)
}
var q0 = { name: 'carbon-maximize', render: W0 }
const Y0 = {
    class: 'slidev-icon',
    width: '1.2em',
    height: '1.2em',
    preserveAspectRatio: 'xMidYMid meet',
    viewBox: '0 0 32 32'
  },
  J0 = p(
    'path',
    {
      d: 'M4 18v2h6.586L2 28.582L3.414 30L12 21.414V28h2V18H4z',
      fill: 'currentColor'
    },
    null,
    -1
  ),
  G0 = p(
    'path',
    {
      d: 'M30 3.416L28.592 2L20 10.586V4h-2v10h10v-2h-6.586L30 3.416z',
      fill: 'currentColor'
    },
    null,
    -1
  ),
  Q0 = [J0, G0]
function X0(e, t) {
  return M(), z('svg', Y0, Q0)
}
var Z0 = { name: 'carbon-minimize', render: X0 }
const ey = {
    class: 'slidev-icon',
    width: '1.2em',
    height: '1.2em',
    preserveAspectRatio: 'xMidYMid meet',
    viewBox: '0 0 32 32'
  },
  ty = p(
    'path',
    {
      d: 'M13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9L13 24z',
      fill: 'currentColor'
    },
    null,
    -1
  ),
  ny = [ty]
function sy(e, t) {
  return M(), z('svg', ey, ny)
}
var ry = { name: 'carbon-checkmark', render: sy }
const oy = { class: 'select-list' },
  iy = { class: 'title' },
  ly = { class: 'items' },
  ay = ['onClick'],
  cy = Se({
    props: {
      modelValue: { type: [Object, String, Number] },
      title: { type: String },
      items: { type: Array }
    },
    setup(e, { emit: t }) {
      const s = jt(e, 'modelValue', t, { passive: !0 })
      return (r, o) => {
        const i = ry
        return (
          M(),
          z('div', oy, [
            p('div', iy, kt(e.title), 1),
            p('div', ly, [
              (M(!0),
              z(
                ke,
                null,
                Nn(
                  e.items,
                  (l) => (
                    M(),
                    z(
                      'div',
                      {
                        key: l.value,
                        class: $e(['item', { active: C(s) === l.value }]),
                        onClick: () => {
                          var a
                          ;(s.value = l.value),
                            (a = l.onClick) == null || a.call(l)
                        }
                      },
                      [
                        Y(
                          i,
                          {
                            class: $e([
                              'text-green-500',
                              { 'opacity-0': C(s) !== l.value }
                            ])
                          },
                          null,
                          8,
                          ['class']
                        ),
                        se(' ' + kt(l.display || l.value), 1)
                      ],
                      10,
                      ay
                    )
                  )
                ),
                128
              ))
            ])
          ])
        )
      }
    }
  })
var uy = bn(cy, [['__scopeId', 'data-v-0f83c0d2']])
const fy = { class: 'text-sm' },
  dy = Se({
    setup(e) {
      const t = [
        { display: 'Fit', value: 0 },
        { display: '1:1', value: 1 }
      ]
      return (n, s) => (
        M(),
        z('div', fy, [
          Y(
            uy,
            {
              modelValue: C(Rr),
              'onUpdate:modelValue':
                s[0] || (s[0] = (r) => (Ce(Rr) ? (Rr.value = r) : null)),
              title: 'Scale',
              items: t
            },
            null,
            8,
            ['modelValue']
          )
        ])
      )
    }
  }),
  hy = {
    key: 0,
    class: 'rounded-md bg-main shadow absolute bottom-10 left-0 z-20',
    'dark:border': '~ gray-400 opacity-10'
  },
  py = Se({
    props: { modelValue: { default: !1 }, disabled: { default: !1 } },
    setup(e, { emit: t }) {
      const s = jt(e, 'modelValue', t, { passive: !0 }),
        r = Z()
      return (
        Dp(r, () => {
          s.value = !1
        }),
        (o, i) => (
          M(),
          z(
            'div',
            { ref_key: 'el', ref: r, class: 'flex relative' },
            [
              p(
                'button',
                {
                  class: $e({ disabled: e.disabled }),
                  onClick: i[0] || (i[0] = (l) => (s.value = !C(s)))
                },
                [
                  zt(o.$slots, 'button', {
                    class: $e({ disabled: e.disabled })
                  })
                ],
                2
              ),
              (M(),
              me(
                Ql,
                null,
                [
                  C(s)
                    ? (M(), z('div', hy, [zt(o.$slots, 'menu')]))
                    : ve('v-if', !0)
                ],
                1024
              ))
            ],
            512
          )
        )
      )
    }
  }),
  my = {},
  gy = { class: 'w-1px m-2 opacity-10 bg-current' }
function vy(e, t) {
  return M(), z('div', gy)
}
var iu = bn(my, [['render', vy]])
const yy = { class: 'icon-btn' },
  _y = { class: 'h-40px flex', p: 'l-1 t-0.5 r-2', text: 'sm leading-2' },
  by = { class: 'my-auto' },
  wy = { class: 'opacity-50' },
  xy = Se({
    props: { persist: { default: !1 } },
    setup(e) {
      const t = e
      ai.smaller('md')
      const { isFullscreen: n, toggle: s } = Nc
      D(() => `/presenter/${Le.value}`), D(() => `/${Le.value}`)
      const r = Z(),
        o = () => {
          r.value && Xn.value && r.value.contains(Xn.value) && Xn.value.blur()
        },
        i = D(() =>
          t.persist
            ? 'text-$slidev-controls-foreground bg-transparent'
            : 'rounded-md bg-main shadow dark:border dark:border-gray-400 dark:border-opacity-10'
        )
      return (
        Ct(),
        Ct(),
        (l, a) => {
          const c = Z0,
            u = q0,
            f = z0,
            d = L0,
            m = P0,
            v = $0,
            E = w0
          ga('RouterLink')
          const w = f0,
            A = o0,
            _ = Xv
          return (
            M(),
            z(
              'nav',
              { ref_key: 'root', ref: r, class: 'flex flex-col' },
              [
                p(
                  'div',
                  {
                    class: $e([
                      'flex flex-wrap-reverse text-xl p-2 gap-1',
                      C(i)
                    ]),
                    onMouseleave: o
                  },
                  [
                    C(os)
                      ? ve('v-if', !0)
                      : (M(),
                        z(
                          'button',
                          {
                            key: 0,
                            class: 'icon-btn',
                            onClick:
                              a[0] || (a[0] = (...b) => C(s) && C(s)(...b))
                          },
                          [
                            C(n)
                              ? (M(), me(c, { key: 0 }))
                              : (M(), me(u, { key: 1 }))
                          ]
                        )),
                    p(
                      'button',
                      {
                        class: $e(['icon-btn', { disabled: !C(Lu) }]),
                        onClick: a[1] || (a[1] = (...b) => C(tn) && C(tn)(...b))
                      },
                      [Y(f)],
                      2
                    ),
                    p(
                      'button',
                      {
                        class: $e(['icon-btn', { disabled: !C(ju) }]),
                        title: 'Next',
                        onClick: a[2] || (a[2] = (...b) => C(en) && C(en)(...b))
                      },
                      [Y(d)],
                      2
                    ),
                    C(os)
                      ? ve('v-if', !0)
                      : (M(),
                        z(
                          'button',
                          {
                            key: 1,
                            class: 'icon-btn',
                            title: 'Slides overview',
                            onClick: a[3] || (a[3] = (b) => C(Hc)())
                          },
                          [Y(m)]
                        )),
                    C(mi)
                      ? ve('v-if', !0)
                      : (M(),
                        z(
                          'button',
                          {
                            key: 2,
                            class: 'icon-btn',
                            title: 'Toggle dark mode',
                            onClick: a[4] || (a[4] = (b) => C(tu)())
                          },
                          [
                            C(gi)
                              ? (M(), me(v, { key: 0 }))
                              : (M(), me(E, { key: 1 }))
                          ]
                        )),
                    Y(iu),
                    ve('v-if', !0),
                    ve('v-if', !0),
                    ve('v-if', !0),
                    (M(),
                    z(
                      ke,
                      { key: 6 },
                      [
                        C(Oe).download
                          ? (M(),
                            z(
                              'button',
                              {
                                key: 0,
                                class: 'icon-btn',
                                onClick:
                                  a[8] ||
                                  (a[8] = (...b) => C(Hi) && C(Hi)(...b))
                              },
                              [Y(w)]
                            ))
                          : ve('v-if', !0)
                      ],
                      2112
                    )),
                    !C(Zt) && C(Oe).info && !C(os)
                      ? (M(),
                        z(
                          'button',
                          {
                            key: 7,
                            class: 'icon-btn',
                            onClick: a[9] || (a[9] = (b) => ($s.value = !C($s)))
                          },
                          [Y(A)]
                        ))
                      : ve('v-if', !0),
                    !C(Zt) && !C(os)
                      ? (M(),
                        me(
                          py,
                          { key: 8 },
                          {
                            button: ge(() => [p('button', yy, [Y(_)])]),
                            menu: ge(() => [Y(dy)]),
                            _: 1
                          }
                        ))
                      : ve('v-if', !0),
                    C(os) ? ve('v-if', !0) : (M(), me(iu, { key: 9 })),
                    p('div', _y, [
                      p('div', by, [
                        se(kt(C(Le)) + ' ', 1),
                        p('span', wy, '/ ' + kt(C(Di)), 1)
                      ])
                    ])
                  ],
                  34
                )
              ],
              512
            )
          )
        }
      )
    }
  })
var Ey = {
    render() {
      return []
    }
  },
  Sy = {
    render() {
      return []
    }
  }
const ky = {
    key: 0,
    class: 'absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl'
  },
  $y = Se({
    setup(e) {
      return (t, n) => {
        const s = g0
        return C(St).cursor
          ? (M(),
            z('div', ky, [
              Y(
                s,
                {
                  class: 'absolute',
                  style: ft({
                    left: `${C(St).cursor.x}%`,
                    top: `${C(St).cursor.y}%`
                  })
                },
                null,
                8,
                ['style']
              )
            ]))
          : ve('v-if', !0)
      }
    }
  }),
  Cy = Se({
    setup(e) {
      return (
        ae(
          Je,
          () => {
            var t, n
            ;((t = Je.value) == null ? void 0 : t.meta) &&
              Je.value.meta.preload !== !1 &&
              (Je.value.meta.__preloaded = !0),
              ((n = Kr.value) == null ? void 0 : n.meta) &&
                Kr.value.meta.preload !== !1 &&
                (Kr.value.meta.__preloaded = !0)
          },
          { immediate: !0 }
        ),
        Ct(),
        (t, n) => (
          M(),
          z(
            ke,
            null,
            [
              ve(' Global Bottom '),
              Y(C(Sy)),
              ve(' Slides '),
              (M(!0),
              z(
                ke,
                null,
                Nn(C(vt), (s) => {
                  var r, o
                  return (
                    M(),
                    z(
                      ke,
                      { key: s.path },
                      [
                        ((r = s.meta) == null ? void 0 : r.__preloaded) ||
                        s === C(Je)
                          ? et(
                              (M(),
                              me(
                                C(ou),
                                {
                                  key: 0,
                                  is: s == null ? void 0 : s.component,
                                  clicks: s === C(Je) ? C(yt) : 0,
                                  'clicks-elements':
                                    ((o = s.meta) == null
                                      ? void 0
                                      : o.__clicksElements) || [],
                                  'clicks-disabled': !1,
                                  class: $e(C(su)(s))
                                },
                                null,
                                8,
                                ['is', 'clicks', 'clicks-elements', 'class']
                              )),
                              [[Ka, s === C(Je)]]
                            )
                          : ve('v-if', !0)
                      ],
                      64
                    )
                  )
                }),
                128
              )),
              ve(' Global Top '),
              Y(C(Ey)),
              ve('v-if', !0),
              C(Zt) ? ve('v-if', !0) : (M(), me($y, { key: 1 }))
            ],
            64
          )
        )
      )
    }
  }),
  Ay = Se({
    setup(e) {
      Ev()
      const t = Z()
      function n(r) {
        var o
        Dc.value ||
          (((o = r.target) == null ? void 0 : o.id) === 'slide-container' &&
            (r.screenX / window.innerWidth > 0.6 ? en() : tn()))
      }
      Du(t)
      const s = D(() => Tg.value || Dc.value)
      return (
        Ct(),
        Ct(),
        (r, o) => (
          M(),
          z(
            ke,
            null,
            [
              p(
                'div',
                {
                  id: 'page-root',
                  ref_key: 'root',
                  ref: t,
                  class: 'grid grid-cols-[1fr,max-content]',
                  style: ft(C(Mg))
                },
                [
                  Y(
                    ru,
                    {
                      class: 'w-full h-full',
                      style: ft({
                        background:
                          'var(--slidev-slide-container-background, black)'
                      }),
                      width: C(Fi) ? C(Cs).width.value : void 0,
                      scale: C(Rr),
                      onPointerdown: n
                    },
                    {
                      default: ge(() => [Y(Cy)]),
                      controls: ge(() => [
                        p(
                          'div',
                          {
                            class: $e([
                              'absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100',
                              [
                                C(s) ? 'opacity-100 right-0' : 'oapcity-0 p-2',
                                C(Is) ? 'pointer-events-none' : ''
                              ]
                            ])
                          },
                          [
                            Y(xy, { class: 'm-auto', persist: C(s) }, null, 8, [
                              'persist'
                            ])
                          ],
                          2
                        ),
                        ve('v-if', !0)
                      ]),
                      _: 1
                    },
                    8,
                    ['style', 'width', 'scale']
                  ),
                  ve('v-if', !0)
                ],
                4
              ),
              Y(Wv)
            ],
            64
          )
        )
      )
    }
  })
const Oy = {},
  My = { class: 'slidev-layout end' }
function Py(e, t) {
  return M(), z('div', My, ' END ')
}
var Ty = bn(Oy, [
    ['render', Py],
    ['__scopeId', 'data-v-d54f5b84']
  ]),
  Iy = './amplify-fancy/amplify-fancy/fancy-logo.png',
  Ry = '/assets/logo.69ac8767.png'
const jy = (e) => (Dd('data-v-03e919f4'), (e = e()), Hd(), e),
  Ly = { grid: '~ cols-3', class: 'items-center' },
  Fy = { class: 'col-span-2' },
  Ny = jy(() => p('img', { m: 'b-5', src: Ry, width: '120' }, null, -1)),
  Dy = { class: 'slidev-vclick-target slidev-vclick-hidden' },
  Hy = { class: 'slidev-vclick-target slidev-vclick-hidden' },
  zy = ['src'],
  By = Se({
    props: { introImage: { type: String }, subtitle: { type: String } },
    setup(e) {
      var s
      const t = e,
        n =
          (s = t.introImage) != null
            ? s
            : "background-image: url('/assets/img/kreuzwerker-logo_RGB.png'),url('/assets/img/gdn-bg-bottem.png');background-position: right 22%, right 80%;background-size: 25%;background-repeat: no-repeat, no-repeat;"
      return (r, o) => {
        const i = Pt('click')
        return (
          M(),
          z(
            'div',
            { class: 'slidev-layout intro', style: ft(C(n)) },
            [
              p('div', Ly, [
                p('div', Fy, [
                  Ny,
                  zt(r.$slots, 'default', {}, void 0, !0),
                  et((M(), z('div', Dy, [p('h3', null, kt(t.subtitle), 1)])), [
                    [i, 2]
                  ])
                ]),
                et(
                  (M(),
                  z('div', Hy, [
                    p('img', { src: t.introImage, width: '250' }, null, 8, zy)
                  ])),
                  [[i, 1]]
                )
              ])
            ],
            4
          )
        )
      }
    }
  })
var Vy = bn(By, [['__scopeId', 'data-v-03e919f4']])
const Uy = p(
    'h2',
    { class: 'flex items-center' },
    [
      se('How to Add '),
      p('span', { style: { display: 'inline-block' } }, [
        p('img', { width: '100', src: Iy })
      ]),
      se(' to Your Amplify Functions ')
    ],
    -1
  ),
  Ky = {
    initial: { x: -80, opacity: 0 },
    enter: { x: 0, opacity: 1 },
    delay: 200
  },
  Wy = p('h3', null, 'How to Organize Your Amplify Project', -1),
  qy = [Wy],
  Yy = {
    setup(e) {
      const t = {
        theme: './',
        preload: !1,
        class: 'content-center',
        layout: 'intro',
        lineNumbers: !0,
        drawings: { enabled: 'dev' },
        introImage: './amplify-fancy/amplify-fancy/aws-amplify.svg'
      }
      return (n, s) => {
        const r = Pt('motion')
        return (
          M(),
          me(
            Vy,
            Ke(He(t)),
            {
              default: ge(() => [Uy, et((M(), z('div', Ky, qy)), [[r]])]),
              _: 1
            },
            16
          )
        )
      }
    }
  }
var wn = /^[a-z0-9]+(-[a-z0-9]+)*$/,
  ss = Object.freeze({
    left: 0,
    top: 0,
    width: 16,
    height: 16,
    rotate: 0,
    vFlip: !1,
    hFlip: !1
  })
function bi(e) {
  return de(de({}, ss), e)
}
var Hr = (e, t, n, s = '') => {
    const r = e.split(':')
    if (e.slice(0, 1) === '@') {
      if (r.length < 2 || r.length > 3) return null
      s = r.shift().slice(1)
    }
    if (r.length > 3 || !r.length) return null
    if (r.length > 1) {
      const l = r.pop(),
        a = r.pop(),
        c = { provider: r.length > 0 ? r[0] : s, prefix: a, name: l }
      return t && !Ls(c) ? null : c
    }
    const o = r[0],
      i = o.split('-')
    if (i.length > 1) {
      const l = { provider: s, prefix: i.shift(), name: i.join('-') }
      return t && !Ls(l) ? null : l
    }
    if (n && s === '') {
      const l = { provider: s, prefix: '', name: o }
      return t && !Ls(l, n) ? null : l
    }
    return null
  },
  Ls = (e, t) =>
    e
      ? !!(
          (e.provider === '' || e.provider.match(wn)) &&
          ((t && e.prefix === '') || e.prefix.match(wn)) &&
          e.name.match(wn)
        )
      : !1
function Jy(e, t) {
  const n = de({}, e)
  for (const s in ss) {
    const r = s
    if (t[r] !== void 0) {
      const o = t[r]
      if (n[r] === void 0) {
        n[r] = o
        continue
      }
      switch (r) {
        case 'rotate':
          n[r] = (n[r] + o) % 4
          break
        case 'hFlip':
        case 'vFlip':
          n[r] = o !== n[r]
          break
        default:
          n[r] = o
      }
    }
  }
  return n
}
function lu(e, t, n = !1) {
  function s(o, i) {
    var l, a, c, u
    if (e.icons[o] !== void 0) return Object.assign({}, e.icons[o])
    if (i > 5) return null
    if (((l = e.aliases) == null ? void 0 : l[o]) !== void 0) {
      const f = (a = e.aliases) == null ? void 0 : a[o],
        d = s(f.parent, i + 1)
      return d && Jy(d, f)
    }
    return i === 0 && ((c = e.chars) == null ? void 0 : c[o]) !== void 0
      ? s((u = e.chars) == null ? void 0 : u[o], i + 1)
      : null
  }
  const r = s(t, 0)
  if (r) for (const o in ss) r[o] === void 0 && e[o] !== void 0 && (r[o] = e[o])
  return r && n ? bi(r) : r
}
var Gy = /^[a-f0-9]+(-[a-f0-9]+)*$/
function au(e, t) {
  for (const n in e) {
    const s = n,
      o = typeof e[s]
    if (o === 'undefined') {
      delete e[s]
      continue
    }
    switch (n) {
      case 'body':
      case 'parent':
        if (o !== 'string') return n
        break
      case 'hFlip':
      case 'vFlip':
      case 'hidden':
        if (o !== 'boolean')
          if (t) delete e[s]
          else return n
        break
      case 'width':
      case 'height':
      case 'left':
      case 'top':
      case 'rotate':
      case 'inlineHeight':
      case 'inlineTop':
      case 'verticalAlign':
        if (o !== 'number')
          if (t) delete e[s]
          else return n
        break
      default:
        if (o === 'object')
          if (t) delete e[s]
          else return n
    }
  }
  return null
}
function Qy(e, t) {
  const n = !!(t == null ? void 0 : t.fix)
  if (
    typeof e != 'object' ||
    e === null ||
    typeof e.icons != 'object' ||
    !e.icons
  )
    throw new Error('Bad icon set')
  const s = e
  if (typeof (t == null ? void 0 : t.prefix) == 'string') s.prefix = t.prefix
  else if (typeof s.prefix != 'string' || !s.prefix.match(wn))
    throw new Error('Invalid prefix')
  if (typeof (t == null ? void 0 : t.provider) == 'string')
    s.provider = t.provider
  else if (s.provider !== void 0) {
    const o = s.provider
    if (typeof o != 'string' || (o !== '' && !o.match(wn)))
      if (n) delete s.provider
      else throw new Error('Invalid provider')
  }
  const r = s.icons
  if (
    (Object.keys(r).forEach((o) => {
      if (!o.match(wn)) {
        if (n) {
          delete r[o]
          return
        }
        throw new Error(`Invalid icon name: "${o}"`)
      }
      const i = r[o]
      if (typeof i != 'object' || i === null || typeof i.body != 'string') {
        if (n) {
          delete r[o]
          return
        }
        throw new Error(`Invalid icon: "${o}"`)
      }
      const l = typeof i.parent == 'string' ? 'parent' : au(i, n)
      if (l !== null) {
        if (n) {
          delete r[o]
          return
        }
        throw new Error(`Invalid property "${l}" in icon "${o}"`)
      }
    }),
    !Object.keys(s.icons).length)
  )
    throw new Error('Icon set is empty')
  if (
    s.aliases !== void 0 &&
    (typeof s.aliases != 'object' || s.aliases === null)
  )
    if (n) delete s.aliases
    else throw new Error('Invalid aliases list')
  if (typeof s.aliases == 'object') {
    let o = function (c, u) {
      if (l.has(c)) return !a.has(c)
      const f = i[c]
      if (
        u > 5 ||
        typeof f != 'object' ||
        f === null ||
        typeof f.parent != 'string' ||
        !c.match(wn)
      ) {
        if (n) return delete i[c], a.add(c), !1
        throw new Error(`Invalid icon alias: "${c}"`)
      }
      const d = f.parent
      if (s.icons[d] === void 0 && (i[d] === void 0 || !o(d, u + 1))) {
        if (n) return delete i[c], a.add(c), !1
        throw new Error(`Missing parent icon for alias "${c}`)
      }
      n && f.body !== void 0 && delete f.body
      const m = f.body !== void 0 ? 'body' : au(f, n)
      if (m !== null) {
        if (n) return delete i[c], a.add(c), !1
        throw new Error(`Invalid property "${m}" in alias "${c}"`)
      }
      return l.add(c), !0
    }
    const i = s.aliases,
      l = new Set(),
      a = new Set()
    Object.keys(i).forEach((c) => {
      o(c, 0)
    }),
      n && !Object.keys(s.aliases).length && delete s.aliases
  }
  if (
    (Object.keys(ss).forEach((o) => {
      const i = typeof ss[o],
        l = typeof s[o]
      if (l !== 'undefined' && l !== i)
        throw new Error(`Invalid value type for "${o}"`)
    }),
    s.chars !== void 0 && (typeof s.chars != 'object' || s.chars === null))
  )
    if (n) delete s.chars
    else throw new Error('Invalid characters map')
  if (typeof s.chars == 'object') {
    const o = s.chars
    Object.keys(o).forEach((i) => {
      var l
      if (!i.match(Gy) || typeof o[i] != 'string') {
        if (n) {
          delete o[i]
          return
        }
        throw new Error(`Invalid character "${i}"`)
      }
      const a = o[i]
      if (
        s.icons[a] === void 0 &&
        ((l = s.aliases) == null ? void 0 : l[a]) === void 0
      ) {
        if (n) {
          delete o[i]
          return
        }
        throw new Error(`Character "${i}" points to missing icon "${a}"`)
      }
    }),
      n && !Object.keys(s.chars).length && delete s.chars
  }
  return s
}
function Xy(e) {
  for (const t in ss) if (e[t] !== void 0) return !0
  return !1
}
function cu(e, t, n) {
  n = n || {}
  const s = []
  if (typeof e != 'object' || typeof e.icons != 'object') return s
  const r = n.validate
  if (r !== !1)
    try {
      Qy(e, typeof r == 'object' ? r : { fix: !0 })
    } catch {
      return s
    }
  e.not_found instanceof Array &&
    e.not_found.forEach((l) => {
      t(l, null), s.push(l)
    })
  const o = e.icons
  Object.keys(o).forEach((l) => {
    const a = lu(e, l, !0)
    a && (t(l, a), s.push(l))
  })
  const i = n.aliases || 'all'
  if (i !== 'none' && typeof e.aliases == 'object') {
    const l = e.aliases
    Object.keys(l).forEach((a) => {
      if (i === 'variations' && Xy(l[a])) return
      const c = lu(e, a, !0)
      c && (t(a, c), s.push(a))
    })
  }
  return s
}
var Zy = 1,
  zr = Object.create(null)
try {
  const e = window || self
  ;(e == null ? void 0 : e._iconifyStorage.version) === Zy &&
    (zr = e._iconifyStorage.storage)
} catch {}
function e_(e, t) {
  return {
    provider: e,
    prefix: t,
    icons: Object.create(null),
    missing: Object.create(null)
  }
}
function xn(e, t) {
  zr[e] === void 0 && (zr[e] = Object.create(null))
  const n = zr[e]
  return n[t] === void 0 && (n[t] = e_(e, t)), n[t]
}
function wi(e, t) {
  const n = Date.now()
  return cu(t, (s, r) => {
    r ? (e.icons[s] = r) : (e.missing[s] = n)
  })
}
function t_(e, t, n) {
  try {
    if (typeof n.body == 'string')
      return (e.icons[t] = Object.freeze(bi(n))), !0
  } catch {}
  return !1
}
function n_(e, t) {
  const n = e.icons[t]
  return n === void 0 ? null : n
}
var Fs = !1
function uu(e) {
  return typeof e == 'boolean' && (Fs = e), Fs
}
function s_(e) {
  const t = typeof e == 'string' ? Hr(e, !0, Fs) : e
  return t ? n_(xn(t.provider, t.prefix), t.name) : null
}
function r_(e, t) {
  const n = Hr(e, !0, Fs)
  if (!n) return !1
  const s = xn(n.provider, n.prefix)
  return t_(s, n.name, t)
}
function o_(e, t) {
  if (typeof e != 'object') return !1
  if (
    (typeof t != 'string' &&
      (t = typeof e.provider == 'string' ? e.provider : ''),
    Fs && t === '' && (typeof e.prefix != 'string' || e.prefix === ''))
  ) {
    let s = !1
    return (
      cu(
        e,
        (r, o) => {
          o && r_(r, o) && (s = !0)
        },
        { validate: { fix: !0, prefix: '' } }
      ),
      s
    )
  }
  if (
    typeof e.prefix != 'string' ||
    !Ls({ provider: t, prefix: e.prefix, name: 'a' })
  )
    return !1
  const n = xn(t, e.prefix)
  return !!wi(n, e)
}
var fu = Object.freeze({
  inline: !1,
  width: null,
  height: null,
  hAlign: 'center',
  vAlign: 'middle',
  slice: !1,
  hFlip: !1,
  vFlip: !1,
  rotate: 0
})
function i_(e, t) {
  const n = {}
  for (const s in e) {
    const r = s
    if (((n[r] = e[r]), t[r] === void 0)) continue
    const o = t[r]
    switch (r) {
      case 'inline':
      case 'slice':
        typeof o == 'boolean' && (n[r] = o)
        break
      case 'hFlip':
      case 'vFlip':
        o === !0 && (n[r] = !n[r])
        break
      case 'hAlign':
      case 'vAlign':
        typeof o == 'string' && o !== '' && (n[r] = o)
        break
      case 'width':
      case 'height':
        ;((typeof o == 'string' && o !== '') ||
          (typeof o == 'number' && o) ||
          o === null) &&
          (n[r] = o)
        break
      case 'rotate':
        typeof o == 'number' && (n[r] += o)
        break
    }
  }
  return n
}
var l_ = /(-?[0-9.]*[0-9]+[0-9.]*)/g,
  a_ = /^-?[0-9.]*[0-9]+[0-9.]*$/g
function xi(e, t, n) {
  if (t === 1) return e
  if (((n = n === void 0 ? 100 : n), typeof e == 'number'))
    return Math.ceil(e * t * n) / n
  if (typeof e != 'string') return e
  const s = e.split(l_)
  if (s === null || !s.length) return e
  const r = []
  let o = s.shift(),
    i = a_.test(o)
  for (;;) {
    if (i) {
      const l = parseFloat(o)
      isNaN(l) ? r.push(o) : r.push(Math.ceil(l * t * n) / n)
    } else r.push(o)
    if (((o = s.shift()), o === void 0)) return r.join('')
    i = !i
  }
}
function c_(e) {
  let t = ''
  switch (e.hAlign) {
    case 'left':
      t += 'xMin'
      break
    case 'right':
      t += 'xMax'
      break
    default:
      t += 'xMid'
  }
  switch (e.vAlign) {
    case 'top':
      t += 'YMin'
      break
    case 'bottom':
      t += 'YMax'
      break
    default:
      t += 'YMid'
  }
  return (t += e.slice ? ' slice' : ' meet'), t
}
function u_(e, t) {
  const n = { left: e.left, top: e.top, width: e.width, height: e.height }
  let s = e.body
  ;[e, t].forEach((l) => {
    const a = [],
      c = l.hFlip,
      u = l.vFlip
    let f = l.rotate
    c
      ? u
        ? (f += 2)
        : (a.push('translate(' + (n.width + n.left) + ' ' + (0 - n.top) + ')'),
          a.push('scale(-1 1)'),
          (n.top = n.left = 0))
      : u &&
        (a.push('translate(' + (0 - n.left) + ' ' + (n.height + n.top) + ')'),
        a.push('scale(1 -1)'),
        (n.top = n.left = 0))
    let d
    switch ((f < 0 && (f -= Math.floor(f / 4) * 4), (f = f % 4), f)) {
      case 1:
        ;(d = n.height / 2 + n.top), a.unshift('rotate(90 ' + d + ' ' + d + ')')
        break
      case 2:
        a.unshift(
          'rotate(180 ' +
            (n.width / 2 + n.left) +
            ' ' +
            (n.height / 2 + n.top) +
            ')'
        )
        break
      case 3:
        ;(d = n.width / 2 + n.left),
          a.unshift('rotate(-90 ' + d + ' ' + d + ')')
        break
    }
    f % 2 == 1 &&
      ((n.left !== 0 || n.top !== 0) &&
        ((d = n.left), (n.left = n.top), (n.top = d)),
      n.width !== n.height &&
        ((d = n.width), (n.width = n.height), (n.height = d))),
      a.length && (s = '<g transform="' + a.join(' ') + '">' + s + '</g>')
  })
  let r, o
  t.width === null && t.height === null
    ? ((o = '1em'), (r = xi(o, n.width / n.height)))
    : t.width !== null && t.height !== null
    ? ((r = t.width), (o = t.height))
    : t.height !== null
    ? ((o = t.height), (r = xi(o, n.width / n.height)))
    : ((r = t.width), (o = xi(r, n.height / n.width))),
    r === 'auto' && (r = n.width),
    o === 'auto' && (o = n.height),
    (r = typeof r == 'string' ? r : r + ''),
    (o = typeof o == 'string' ? o : o + '')
  const i = {
    attributes: {
      width: r,
      height: o,
      preserveAspectRatio: c_(t),
      viewBox: n.left + ' ' + n.top + ' ' + n.width + ' ' + n.height
    },
    body: s
  }
  return t.inline && (i.inline = !0), i
}
var f_ = /\sid="(\S+)"/g,
  d_ =
    'IconifyId' +
    Date.now().toString(16) +
    ((Math.random() * 16777216) | 0).toString(16),
  h_ = 0
function p_(e, t = d_) {
  const n = []
  let s
  for (; (s = f_.exec(e)); ) n.push(s[1])
  return (
    n.length &&
      n.forEach((r) => {
        const o = typeof t == 'function' ? t(r) : t + h_++,
          i = r.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
        e = e.replace(
          new RegExp('([#;"])(' + i + ')([")]|\\.[a-z])', 'g'),
          '$1' + o + '$3'
        )
      }),
    e
  )
}
var Ei = Object.create(null)
function m_(e, t) {
  Ei[e] = t
}
function Si(e) {
  return Ei[e] || Ei['']
}
function ki(e) {
  let t
  if (typeof e.resources == 'string') t = [e.resources]
  else if (((t = e.resources), !(t instanceof Array) || !t.length)) return null
  return {
    resources: t,
    path: e.path === void 0 ? '/' : e.path,
    maxURL: e.maxURL ? e.maxURL : 500,
    rotate: e.rotate ? e.rotate : 750,
    timeout: e.timeout ? e.timeout : 5e3,
    random: e.random === !0,
    index: e.index ? e.index : 0,
    dataAfterTimeout: e.dataAfterTimeout !== !1
  }
}
var $i = Object.create(null),
  Ns = ['https://api.simplesvg.com', 'https://api.unisvg.com'],
  Br = []
for (; Ns.length > 0; )
  Ns.length === 1 || Math.random() > 0.5
    ? Br.push(Ns.shift())
    : Br.push(Ns.pop())
$i[''] = ki({ resources: ['https://api.iconify.design'].concat(Br) })
function g_(e, t) {
  const n = ki(t)
  return n === null ? !1 : (($i[e] = n), !0)
}
function Ci(e) {
  return $i[e]
}
var du = (e, t) => {
    let n = e,
      s = n.indexOf('?') !== -1
    function r(o) {
      switch (typeof o) {
        case 'boolean':
          return o ? 'true' : 'false'
        case 'number':
          return encodeURIComponent(o)
        case 'string':
          return encodeURIComponent(o)
        default:
          throw new Error('Invalid parameter')
      }
    }
    return (
      Object.keys(t).forEach((o) => {
        let i
        try {
          i = r(t[o])
        } catch {
          return
        }
        ;(n += (s ? '&' : '?') + encodeURIComponent(o) + '=' + i), (s = !0)
      }),
      n
    )
  },
  hu = Object.create(null),
  Vr = Object.create(null),
  v_ = () => {
    let e
    try {
      if (((e = fetch), typeof e == 'function')) return e
    } catch {}
    try {
      const t = String.fromCharCode(114) + String.fromCharCode(101)
      if (((e = global[t + 'qui' + t]('cross-fetch')), typeof e == 'function'))
        return e
    } catch {}
    return null
  },
  pu = v_()
function y_(e, t) {
  const n = Ci(e)
  if (!n) return 0
  let s
  if (!n.maxURL) s = 0
  else {
    let o = 0
    n.resources.forEach((l) => {
      o = Math.max(o, l.length)
    })
    const i = du(t + '.json', { icons: '' })
    s = n.maxURL - o - n.path.length - i.length
  }
  const r = e + ':' + t
  return (Vr[e] = n.path), (hu[r] = s), s
}
var __ = (e, t, n) => {
  const s = []
  let r = hu[t]
  r === void 0 && (r = y_(e, t))
  const o = 'icons'
  let i = { type: o, provider: e, prefix: t, icons: [] },
    l = 0
  return (
    n.forEach((a, c) => {
      ;(l += a.length + 1),
        l >= r &&
          c > 0 &&
          (s.push(i),
          (i = { type: o, provider: e, prefix: t, icons: [] }),
          (l = a.length)),
        i.icons.push(a)
    }),
    s.push(i),
    s
  )
}
function b_(e) {
  if (typeof e == 'string') {
    if (Vr[e] === void 0) {
      const t = Ci(e)
      if (!t) return '/'
      Vr[e] = t.path
    }
    return Vr[e]
  }
  return '/'
}
var w_ = (e, t, n) => {
    if (!pu) {
      n.done(void 0, 424)
      return
    }
    let s = b_(t.provider)
    switch (t.type) {
      case 'icons': {
        const o = t.prefix,
          l = t.icons.join(',')
        s += du(o + '.json', { icons: l })
        break
      }
      case 'custom': {
        const o = t.uri
        s += o.slice(0, 1) === '/' ? o.slice(1) : o
        break
      }
      default:
        n.done(void 0, 400)
        return
    }
    let r = 503
    pu(e + s)
      .then((o) => {
        if (o.status !== 200) {
          setTimeout(() => {
            n.done(void 0, o.status)
          })
          return
        }
        return (r = 501), o.json()
      })
      .then((o) => {
        if (typeof o != 'object' || o === null) {
          setTimeout(() => {
            n.done(void 0, r)
          })
          return
        }
        setTimeout(() => {
          n.done(o)
        })
      })
      .catch(() => {
        n.done(void 0, r)
      })
  },
  x_ = { prepare: __, send: w_ }
function E_(e) {
  const t = { loaded: [], missing: [], pending: [] },
    n = Object.create(null)
  e.sort((r, o) =>
    r.provider !== o.provider
      ? r.provider.localeCompare(o.provider)
      : r.prefix !== o.prefix
      ? r.prefix.localeCompare(o.prefix)
      : r.name.localeCompare(o.name)
  )
  let s = { provider: '', prefix: '', name: '' }
  return (
    e.forEach((r) => {
      if (
        s.name === r.name &&
        s.prefix === r.prefix &&
        s.provider === r.provider
      )
        return
      s = r
      const o = r.provider,
        i = r.prefix,
        l = r.name
      n[o] === void 0 && (n[o] = Object.create(null))
      const a = n[o]
      a[i] === void 0 && (a[i] = xn(o, i))
      const c = a[i]
      let u
      c.icons[l] !== void 0
        ? (u = t.loaded)
        : i === '' || c.missing[l] !== void 0
        ? (u = t.missing)
        : (u = t.pending)
      const f = { provider: o, prefix: i, name: l }
      u.push(f)
    }),
    t
  )
}
var Jt = Object.create(null),
  Ai = Object.create(null)
function mu(e, t) {
  e.forEach((n) => {
    const s = n.provider
    if (Jt[s] === void 0) return
    const r = Jt[s],
      o = n.prefix,
      i = r[o]
    i && (r[o] = i.filter((l) => l.id !== t))
  })
}
function S_(e, t) {
  Ai[e] === void 0 && (Ai[e] = Object.create(null))
  const n = Ai[e]
  n[t] ||
    ((n[t] = !0),
    setTimeout(() => {
      if (((n[t] = !1), Jt[e] === void 0 || Jt[e][t] === void 0)) return
      const s = Jt[e][t].slice(0)
      if (!s.length) return
      const r = xn(e, t)
      let o = !1
      s.forEach((i) => {
        const l = i.icons,
          a = l.pending.length
        ;(l.pending = l.pending.filter((c) => {
          if (c.prefix !== t) return !0
          const u = c.name
          if (r.icons[u] !== void 0)
            l.loaded.push({ provider: e, prefix: t, name: u })
          else if (r.missing[u] !== void 0)
            l.missing.push({ provider: e, prefix: t, name: u })
          else return (o = !0), !0
          return !1
        })),
          l.pending.length !== a &&
            (o || mu([{ provider: e, prefix: t }], i.id),
            i.callback(
              l.loaded.slice(0),
              l.missing.slice(0),
              l.pending.slice(0),
              i.abort
            ))
      })
    }))
}
var k_ = 0
function $_(e, t, n) {
  const s = k_++,
    r = mu.bind(null, n, s)
  if (!t.pending.length) return r
  const o = { id: s, icons: t, callback: e, abort: r }
  return (
    n.forEach((i) => {
      const l = i.provider,
        a = i.prefix
      Jt[l] === void 0 && (Jt[l] = Object.create(null))
      const c = Jt[l]
      c[a] === void 0 && (c[a] = []), c[a].push(o)
    }),
    r
  )
}
function C_(e, t = !0, n = !1) {
  const s = []
  return (
    e.forEach((r) => {
      const o = typeof r == 'string' ? Hr(r, !1, n) : r
      ;(!t || Ls(o, n)) &&
        s.push({ provider: o.provider, prefix: o.prefix, name: o.name })
    }),
    s
  )
}
var gu = {
  resources: [],
  index: 0,
  timeout: 2e3,
  rotate: 750,
  random: !1,
  dataAfterTimeout: !1
}
function A_(e, t, n, s, r) {
  const o = e.resources.length,
    i = e.random ? Math.floor(Math.random() * o) : e.index
  let l
  if (e.random) {
    let j = e.resources.slice(0)
    for (l = []; j.length > 1; ) {
      const J = Math.floor(Math.random() * j.length)
      l.push(j[J]), (j = j.slice(0, J).concat(j.slice(J + 1)))
    }
    l = l.concat(j)
  } else l = e.resources.slice(i).concat(e.resources.slice(0, i))
  const a = Date.now()
  let c = 'pending',
    u = 0,
    f,
    d = null,
    m = [],
    v = []
  typeof s == 'function' && v.push(s)
  function E() {
    d && (clearTimeout(d), (d = null))
  }
  function w() {
    c === 'pending' && (c = 'aborted'),
      E(),
      m.forEach((j) => {
        j.abort && j.abort(), j.status === 'pending' && (j.status = 'aborted')
      }),
      (m = [])
  }
  function A(j, J) {
    J && (v = []), typeof j == 'function' && v.push(j)
  }
  function _() {
    return {
      startTime: a,
      payload: t,
      status: c,
      queriesSent: u,
      queriesPending: m.length,
      subscribe: A,
      abort: w
    }
  }
  function b() {
    ;(c = 'failed'),
      v.forEach((j) => {
        j(void 0, f)
      })
  }
  function S() {
    m = m.filter(
      (j) => (
        j.status === 'pending' && (j.status = 'aborted'),
        j.abort && j.abort(),
        !1
      )
    )
  }
  function L(j, J, ie) {
    const le = J === void 0
    switch (((m = m.filter((oe) => oe !== j)), c)) {
      case 'pending':
        break
      case 'failed':
        if (le || !e.dataAfterTimeout) return
        break
      default:
        return
    }
    if (le) {
      ie !== void 0 && (f = ie), m.length || (l.length ? N() : b())
      return
    }
    if ((E(), S(), r && !e.random)) {
      const oe = e.resources.indexOf(j.resource)
      oe !== -1 && oe !== e.index && r(oe)
    }
    ;(c = 'completed'),
      v.forEach((oe) => {
        oe(J)
      })
  }
  function N() {
    if (c !== 'pending') return
    E()
    const j = l.shift()
    if (j === void 0) {
      if (m.length) {
        const le = typeof e.timeout == 'function' ? e.timeout(a) : e.timeout
        if (le) {
          d = setTimeout(() => {
            E(), c === 'pending' && (S(), b())
          }, le)
          return
        }
      }
      b()
      return
    }
    const J = {
      getQueryStatus: _,
      status: 'pending',
      resource: j,
      done: (le, oe) => {
        L(J, le, oe)
      }
    }
    m.push(J), u++
    const ie = typeof e.rotate == 'function' ? e.rotate(u, a) : e.rotate
    ;(d = setTimeout(N, ie)), n(j, t, J)
  }
  return setTimeout(N), _
}
function O_(e) {
  if (
    typeof e != 'object' ||
    typeof e.resources != 'object' ||
    !(e.resources instanceof Array) ||
    !e.resources.length
  )
    throw new Error('Invalid Reduncancy configuration')
  const t = Object.create(null)
  let n
  for (n in gu) e[n] !== void 0 ? (t[n] = e[n]) : (t[n] = gu[n])
  return t
}
function vu(e) {
  const t = O_(e)
  let n = []
  function s() {
    n = n.filter((l) => l().status === 'pending')
  }
  function r(l, a, c) {
    const u = A_(
      t,
      l,
      a,
      (f, d) => {
        s(), c && c(f, d)
      },
      (f) => {
        t.index = f
      }
    )
    return n.push(u), u
  }
  function o(l) {
    const a = n.find((c) => l(c))
    return a !== void 0 ? a : null
  }
  return {
    query: r,
    find: o,
    setIndex: (l) => {
      t.index = l
    },
    getIndex: () => t.index,
    cleanup: s
  }
}
function yu() {}
var Oi = Object.create(null)
function M_(e) {
  if (Oi[e] === void 0) {
    const t = Ci(e)
    if (!t) return
    const n = vu(t),
      s = { config: t, redundancy: n }
    Oi[e] = s
  }
  return Oi[e]
}
function P_(e, t, n) {
  let s, r
  if (typeof e == 'string') {
    const o = Si(e)
    if (!o) return n(void 0, 424), yu
    r = o.send
    const i = M_(e)
    i && (s = i.redundancy)
  } else {
    const o = ki(e)
    if (o) {
      s = vu(o)
      const i = e.resources ? e.resources[0] : '',
        l = Si(i)
      l && (r = l.send)
    }
  }
  return !s || !r ? (n(void 0, 424), yu) : s.query(t, r, n)().abort
}
var Mi = {}
function _u() {}
var En = Object.create(null),
  Pi = Object.create(null),
  Ti = Object.create(null),
  Ii = Object.create(null)
function T_(e, t) {
  Ti[e] === void 0 && (Ti[e] = Object.create(null))
  const n = Ti[e]
  n[t] ||
    ((n[t] = !0),
    setTimeout(() => {
      ;(n[t] = !1), S_(e, t)
    }))
}
var bu = Object.create(null)
function I_(e, t, n) {
  function s() {
    const l = (e === '' ? '' : '@' + e + ':') + t,
      a = Math.floor(Date.now() / 6e4)
    bu[l] < a &&
      ((bu[l] = a),
      console.error(
        'Unable to retrieve icons for "' +
          l +
          '" because API is not configured properly.'
      ))
  }
  Pi[e] === void 0 && (Pi[e] = Object.create(null))
  const r = Pi[e]
  Ii[e] === void 0 && (Ii[e] = Object.create(null))
  const o = Ii[e]
  En[e] === void 0 && (En[e] = Object.create(null))
  const i = En[e]
  r[t] === void 0 ? (r[t] = n) : (r[t] = r[t].concat(n).sort()),
    o[t] ||
      ((o[t] = !0),
      setTimeout(() => {
        o[t] = !1
        const l = r[t]
        delete r[t]
        const a = Si(e)
        if (!a) {
          s()
          return
        }
        a.prepare(e, t, l).forEach((u) => {
          P_(e, u, (f, d) => {
            const m = xn(e, t)
            if (typeof f != 'object') {
              if (d !== 404) return
              const v = Date.now()
              u.icons.forEach((E) => {
                m.missing[E] = v
              })
            } else
              try {
                const v = wi(m, f)
                if (!v.length) return
                const E = i[t]
                v.forEach((w) => {
                  delete E[w]
                }),
                  Mi.store && Mi.store(e, f)
              } catch (v) {
                console.error(v)
              }
            T_(e, t)
          })
        })
      }))
}
var R_ = (e, t) => {
    const n = C_(e, !0, uu()),
      s = E_(n)
    if (!s.pending.length) {
      let c = !0
      return (
        t &&
          setTimeout(() => {
            c && t(s.loaded, s.missing, s.pending, _u)
          }),
        () => {
          c = !1
        }
      )
    }
    const r = Object.create(null),
      o = []
    let i, l
    s.pending.forEach((c) => {
      const u = c.provider,
        f = c.prefix
      if (f === l && u === i) return
      ;(i = u),
        (l = f),
        o.push({ provider: u, prefix: f }),
        En[u] === void 0 && (En[u] = Object.create(null))
      const d = En[u]
      d[f] === void 0 && (d[f] = Object.create(null)),
        r[u] === void 0 && (r[u] = Object.create(null))
      const m = r[u]
      m[f] === void 0 && (m[f] = [])
    })
    const a = Date.now()
    return (
      s.pending.forEach((c) => {
        const u = c.provider,
          f = c.prefix,
          d = c.name,
          m = En[u][f]
        m[d] === void 0 && ((m[d] = a), r[u][f].push(d))
      }),
      o.forEach((c) => {
        const u = c.provider,
          f = c.prefix
        r[u][f].length && I_(u, f, r[u][f])
      }),
      t ? $_(t, s, o) : _u
    )
  },
  wu = 'iconify2',
  Ds = 'iconify',
  xu = Ds + '-count',
  Eu = Ds + '-version',
  Su = 36e5,
  j_ = 168,
  Ri = { local: !0, session: !0 },
  ji = !1,
  ku = { local: 0, session: 0 },
  $u = { local: [], session: [] },
  Ur = typeof window == 'undefined' ? {} : window
function Cu(e) {
  const t = e + 'Storage'
  try {
    if (Ur && Ur[t] && typeof Ur[t].length == 'number') return Ur[t]
  } catch {}
  return (Ri[e] = !1), null
}
function Li(e, t, n) {
  try {
    return e.setItem(xu, n + ''), (ku[t] = n), !0
  } catch {
    return !1
  }
}
function Au(e) {
  const t = e.getItem(xu)
  if (t) {
    const n = parseInt(t)
    return n || 0
  }
  return 0
}
function L_(e, t) {
  try {
    e.setItem(Eu, wu)
  } catch {}
  Li(e, t, 0)
}
function F_(e) {
  try {
    const t = Au(e)
    for (let n = 0; n < t; n++) e.removeItem(Ds + n)
  } catch {}
}
var Ou = () => {
    if (ji) return
    ji = !0
    const e = Math.floor(Date.now() / Su) - j_
    function t(n) {
      const s = Cu(n)
      if (!s) return
      const r = (o) => {
        const i = Ds + o,
          l = s.getItem(i)
        if (typeof l != 'string') return !1
        let a = !0
        try {
          const c = JSON.parse(l)
          if (
            typeof c != 'object' ||
            typeof c.cached != 'number' ||
            c.cached < e ||
            typeof c.provider != 'string' ||
            typeof c.data != 'object' ||
            typeof c.data.prefix != 'string'
          )
            a = !1
          else {
            const u = c.provider,
              f = c.data.prefix,
              d = xn(u, f)
            a = wi(d, c.data).length > 0
          }
        } catch {
          a = !1
        }
        return a || s.removeItem(i), a
      }
      try {
        const o = s.getItem(Eu)
        if (o !== wu) {
          o && F_(s), L_(s, n)
          return
        }
        let i = Au(s)
        for (let l = i - 1; l >= 0; l--)
          r(l) || (l === i - 1 ? i-- : $u[n].push(l))
        Li(s, n, i)
      } catch {}
    }
    for (const n in Ri) t(n)
  },
  N_ = (e, t) => {
    ji || Ou()
    function n(s) {
      if (!Ri[s]) return !1
      const r = Cu(s)
      if (!r) return !1
      let o = $u[s].shift()
      if (o === void 0 && ((o = ku[s]), !Li(r, s, o + 1))) return !1
      try {
        const i = { cached: Math.floor(Date.now() / Su), provider: e, data: t }
        r.setItem(Ds + o, JSON.stringify(i))
      } catch {
        return !1
      }
      return !0
    }
    n('local') || n('session')
  },
  Mu = /[\s,]+/
function D_(e, t) {
  t.split(Mu).forEach((n) => {
    switch (n.trim()) {
      case 'horizontal':
        e.hFlip = !0
        break
      case 'vertical':
        e.vFlip = !0
        break
    }
  })
}
function H_(e, t) {
  t.split(Mu).forEach((n) => {
    const s = n.trim()
    switch (s) {
      case 'left':
      case 'center':
      case 'right':
        e.hAlign = s
        break
      case 'top':
      case 'middle':
      case 'bottom':
        e.vAlign = s
        break
      case 'slice':
      case 'crop':
        e.slice = !0
        break
      case 'meet':
        e.slice = !1
    }
  })
}
function z_(e, t = 0) {
  const n = e.replace(/^-?[0-9.]*/, '')
  function s(r) {
    for (; r < 0; ) r += 4
    return r % 4
  }
  if (n === '') {
    const r = parseInt(e)
    return isNaN(r) ? 0 : s(r)
  } else if (n !== e) {
    let r = 0
    switch (n) {
      case '%':
        r = 25
        break
      case 'deg':
        r = 90
    }
    if (r) {
      let o = parseFloat(e.slice(0, e.length - n.length))
      return isNaN(o) ? 0 : ((o = o / r), o % 1 == 0 ? s(o) : 0)
    }
  }
  return t
}
const B_ = {
  xmlns: 'http://www.w3.org/2000/svg',
  'xmlns:xlink': 'http://www.w3.org/1999/xlink',
  'aria-hidden': !0,
  role: 'img'
}
let Gt = {}
;['horizontal', 'vertical'].forEach((e) => {
  ;['Align', 'Flip'].forEach((t) => {
    const s = { attr: e.slice(0, 1) + t, boolean: t === 'Flip' }
    ;(Gt[e + '-' + t.toLowerCase()] = s),
      (Gt[e.slice(0, 1) + '-' + t.toLowerCase()] = s),
      (Gt[e + t] = s)
  })
})
const V_ = (e, t) => {
  const n = i_(fu, t),
    s = de({}, B_)
  let r =
    typeof t.style == 'object' && !(t.style instanceof Array)
      ? de({}, t.style)
      : {}
  for (let a in t) {
    const c = t[a]
    if (c !== void 0)
      switch (a) {
        case 'icon':
        case 'style':
        case 'onLoad':
          break
        case 'inline':
        case 'hFlip':
        case 'vFlip':
          n[a] = c === !0 || c === 'true' || c === 1
          break
        case 'flip':
          typeof c == 'string' && D_(n, c)
          break
        case 'align':
          typeof c == 'string' && H_(n, c)
          break
        case 'color':
          r.color = c
          break
        case 'rotate':
          typeof c == 'string'
            ? (n[a] = z_(c))
            : typeof c == 'number' && (n[a] = c)
          break
        case 'ariaHidden':
        case 'aria-hidden':
          c !== !0 && c !== 'true' && delete s['aria-hidden']
          break
        default:
          Gt[a] !== void 0
            ? Gt[a].boolean && (c === !0 || c === 'true' || c === 1)
              ? (n[Gt[a].attr] = !0)
              : !Gt[a].boolean &&
                typeof c == 'string' &&
                c !== '' &&
                (n[Gt[a].attr] = c)
            : fu[a] === void 0 && (s[a] = c)
      }
  }
  const o = u_(e, n)
  for (let a in o.attributes) s[a] = o.attributes[a]
  o.inline &&
    r.verticalAlign === void 0 &&
    r['vertical-align'] === void 0 &&
    (r.verticalAlign = '-0.125em')
  let i = 0
  const l = t.id
  return (
    (s.innerHTML = p_(o.body, l ? () => l + 'ID' + i++ : 'iconifyVue')),
    Object.keys(r).length > 0 && (s.style = r),
    Bn('svg', s)
  )
}
uu(!0)
m_('', x_)
if (typeof document != 'undefined' && typeof window != 'undefined') {
  ;(Mi.store = N_), Ou()
  const e = window
  if (e.IconifyPreload !== void 0) {
    const t = e.IconifyPreload,
      n = 'Invalid IconifyPreload syntax.'
    typeof t == 'object' &&
      t !== null &&
      (t instanceof Array ? t : [t]).forEach((s) => {
        try {
          ;(typeof s != 'object' ||
            s === null ||
            s instanceof Array ||
            typeof s.icons != 'object' ||
            typeof s.prefix != 'string' ||
            !o_(s)) &&
            console.error(n)
        } catch {
          console.error(n)
        }
      })
  }
  if (e.IconifyProviders !== void 0) {
    const t = e.IconifyProviders
    if (typeof t == 'object' && t !== null)
      for (let n in t) {
        const s = 'IconifyProviders[' + n + '] is invalid.'
        try {
          const r = t[n]
          if (typeof r != 'object' || !r || r.resources === void 0) continue
          g_(n, r) || console.error(s)
        } catch {
          console.error(s)
        }
      }
  }
}
const U_ = Se({
  inheritAttrs: !1,
  data() {
    return { mounted: !1, counter: 0 }
  },
  beforeMount() {
    ;(this._name = ''), (this._loadingIcon = null), (this.mounted = !0)
  },
  unmounted() {
    this.abortLoading()
  },
  methods: {
    abortLoading() {
      this._loadingIcon &&
        (this._loadingIcon.abort(), (this._loadingIcon = null))
    },
    getIcon(e, t) {
      if (typeof e == 'object' && e !== null && typeof e.body == 'string')
        return (this._name = ''), this.abortLoading(), { data: bi(e) }
      let n
      if (typeof e != 'string' || (n = Hr(e, !1, !0)) === null)
        return this.abortLoading(), null
      const s = s_(n)
      if (s === null)
        return (
          (!this._loadingIcon || this._loadingIcon.name !== e) &&
            (this.abortLoading(),
            (this._name = ''),
            (this._loadingIcon = {
              name: e,
              abort: R_([n], () => {
                this.counter++
              })
            })),
          null
        )
      this.abortLoading(), this._name !== e && ((this._name = e), t && t(e))
      const r = ['iconify']
      return (
        n.prefix !== '' && r.push('iconify--' + n.prefix),
        n.provider !== '' && r.push('iconify--' + n.provider),
        { data: s, classes: r }
      )
    }
  },
  render() {
    if (!this.mounted) return this.$slots.default ? this.$slots.default() : null
    this.counter
    const e = this.$attrs,
      t = this.getIcon(e.icon, e.onLoad)
    if (!t) return this.$slots.default ? this.$slots.default() : null
    let n = e
    return (
      t.classes &&
        (n = Ue(de({}, e), {
          class:
            (typeof e.class == 'string' ? e.class + ' ' : '') +
            t.classes.join(' ')
        })),
      V_(t.data, n)
    )
  }
})
const K_ = { class: 'grid h-full justify-items-center place-items-center' },
  W_ = { class: 'about-me' },
  q_ = { class: 'img' },
  Y_ = ['src', 'alt'],
  J_ = { class: 'name' },
  G_ = { class: 'white-layer animate-fade-in-down animate-count-1' },
  Q_ = { class: 'intro-subtitle' },
  X_ = { class: 'description' },
  Z_ = { key: 0, style: { width: '5px' } },
  e1 = { class: 'company' },
  t1 = { key: 0, style: { width: '5px' } },
  n1 = { id: 'social-media' },
  s1 = ['href'],
  r1 = Se({
    props: { subtitle: null, imageSrc: null, name: null, socialLinks: null },
    setup(e) {
      const t = e,
        n = t.subtitle.split(''),
        s = '@kreuzwerker'.split('')
      return (r, o) => {
        const i = Pt('motion-pop'),
          l = Pt('motion-roll-visible-top')
        return (
          M(),
          z('div', K_, [
            p('section', W_, [
              et(
                (M(),
                z('div', q_, [
                  p(
                    'img',
                    {
                      width: '600',
                      class: 'fadeInUp',
                      src: t.imageSrc,
                      alt: t.name
                    },
                    null,
                    8,
                    Y_
                  )
                ])),
                [[i]]
              ),
              p('div', J_, [
                p('h2', G_, kt(t.name), 1),
                p('div', Q_, [
                  p('div', X_, [
                    (M(!0),
                    z(
                      ke,
                      null,
                      Nn(
                        C(n),
                        (a) => (
                          M(),
                          z('span', { key: a, class: 'char' }, [
                            a === ' ' ? (M(), z('span', Z_)) : ve('v-if', !0),
                            se(' ' + kt(a), 1)
                          ])
                        )
                      ),
                      128
                    ))
                  ]),
                  p('div', e1, [
                    (M(!0),
                    z(
                      ke,
                      null,
                      Nn(
                        C(s),
                        (a) => (
                          M(),
                          z('span', { key: a, class: 'char' }, [
                            a === ' ' ? (M(), z('span', t1)) : ve('v-if', !0),
                            se(' ' + kt(a), 1)
                          ])
                        )
                      ),
                      128
                    ))
                  ]),
                  p('div', n1, [
                    (M(!0),
                    z(
                      ke,
                      null,
                      Nn(
                        t.socialLinks,
                        (a) => (
                          M(),
                          z('span', { key: a.name }, [
                            p(
                              'a',
                              {
                                class: 'social-link',
                                href: a.url,
                                target: '_blank'
                              },
                              [
                                et(
                                  Y(C(U_), { icon: `mdi-${a.name}` }, null, 8, [
                                    'icon'
                                  ]),
                                  [[l]]
                                )
                              ],
                              8,
                              s1
                            )
                          ])
                        )
                      ),
                      128
                    ))
                  ])
                ])
              ])
            ])
          ])
        )
      }
    }
  })
var o1 = bn(r1, [['__scopeId', 'data-v-015b122a']])
const i1 = {},
  l1 = { class: 'slidev-layout default' }
function a1(e, t) {
  return M(), z('div', l1, [zt(e.$slots, 'default')])
}
var Sn = bn(i1, [['render', a1]])
const c1 = {
  setup(e) {
    const t = { preload: !1 }
    return (n, s) => {
      const r = o1
      return (
        M(),
        me(
          Sn,
          Ke(He(t)),
          {
            default: ge(() => [
              p('p', null, [
                Y(
                  r,
                  {
                    name: 'John Nguyen',
                    imageSrc:
                      'https://images.ctfassets.net/hqu2g0tau160/64QGVEzBm50fnAnTr4Jhxz/b84506f84edcd88190923946947f2e3a/John_Nguyen_duo.png',
                    subtitle: 'Fullstack // Cloud Engineer',
                    socialLinks: [
                      { url: 'https://medium.com/@jolo-dev', name: 'medium' },
                      { url: 'https://dev.to/jolo', name: 'dev-to' },
                      { url: 'https://github.com/jolo-dev', name: 'github' },
                      {
                        url: 'https://twitter.com/JohnysCrazy',
                        name: 'twitter'
                      },
                      {
                        url: 'https://www.linkedin.com/in/john-long-nguyen-256457111/',
                        name: 'linkedin'
                      },
                      { url: 'https://jolodev.guru/', name: 'web' }
                    ]
                  },
                  null,
                  8,
                  ['socialLinks']
                )
              ])
            ]),
            _: 1
          },
          16
        )
      )
    }
  }
}
var Qt = Se({
  props: {
    every: { type: Number, default: 1 },
    at: { type: [Number, String], default: null },
    hide: { type: Boolean, default: !1 },
    fade: { type: Boolean, default: !1 }
  },
  render() {
    var o, i
    const e = Pt('click'),
      t = Pt('after'),
      n = (l, a, c) =>
        et(l, [
          [
            a,
            this.at != null ? +this.at + c : null,
            '',
            { hide: this.hide, fade: this.fade }
          ]
        ])
    let s = (i = (o = this.$slots).default) == null ? void 0 : i.call(o)
    if (!s) return
    s = bg(s)
    const r = (l) =>
      l.map((a, c) =>
        Ln(a)
          ? n(Bn(a), c % this.every == 0 ? e : t, Math.floor(c / this.every))
          : a
      )
    return s.length === 1 &&
      ['ul', 'ol'].includes(s[0].type) &&
      Array.isArray(s[0].children)
      ? Bn(s[0], {}, [r(s[0].children)])
      : r(s)
  }
})
const u1 = { class: 'slidev-layout' },
  f1 = ['grid'],
  d1 = ['src'],
  rs = Se({
    props: {
      image: { type: String },
      leftColSpan: { type: Number },
      rightColSpan: { type: Number }
    },
    setup(e) {
      var o, i
      const t = e,
        n = (o = t.leftColSpan) != null ? o : 1,
        s = (i = t.rightColSpan) != null ? i : 1,
        r = n + s
      return (l, a) => {
        const c = Pt('motion')
        return (
          M(),
          z('div', u1, [
            p(
              'div',
              {
                class: $e(r > 2 ? 'foo' : 'grid place-items-center'),
                grid: `~ cols-${r} gap-4`
              },
              [
                et(
                  (M(),
                  z(
                    'div',
                    {
                      initial: { x: -80 },
                      enter: { x: 0 },
                      class: $e(`col-span-${C(n)} content-center`)
                    },
                    [zt(l.$slots, 'default')],
                    2
                  )),
                  [[c]]
                ),
                et(
                  p(
                    'img',
                    {
                      initial: { x: 800 },
                      enter: { x: 0 },
                      width: '300',
                      src: t.image,
                      class: $e(`col-span-${C(s)}`)
                    },
                    null,
                    10,
                    d1
                  ),
                  [[c]]
                )
              ],
              10,
              f1
            )
          ])
        )
      }
    }
  }),
  h1 = { class: 'black-layer' },
  p1 = p(
    'h1',
    null,
    [
      p('code', null, '$which amplify'),
      se(),
      p('sup', { class: 'footnote-ref' }, [
        p('a', { href: '#fn1', id: 'fnref1' }, '[1]')
      ])
    ],
    -1
  ),
  m1 = p(
    'p',
    null,
    'Build extensible, full-stack web and mobile apps faster. Easy to start, easy to scale.',
    -1
  ),
  g1 = p(
    'ul',
    null,
    [
      p('li', null, 'Connect Frontend UI or Mobile App with AWS Services'),
      p(
        'li',
        null,
        'Cognito, Lambda, S3, AppSync, Api Gateway, and with custom CDK and CFN all AWS Services'
      ),
      p('li', null, 'Build, deploy, and host static websites, SPA, SSR'),
      p('li', null, 'Works with React, NextJs, Vue, Android, Flutter, Ionic')
    ],
    -1
  ),
  v1 = p('hr', { class: 'footnotes-sep' }, null, -1),
  y1 = p(
    'section',
    { class: 'footnotes' },
    [
      p('ol', { class: 'footnotes-list' }, [
        p('li', { id: 'fn1', class: 'footnote-item' }, [
          p('p', null, [
            p(
              'a',
              {
                href: 'https://aws.amazon.com/amplify/',
                target: '_blank',
                rel: 'noopener'
              },
              'AWS Amplify'
            ),
            se(),
            p(
              'a',
              { href: '#fnref1', class: 'footnote-backref' },
              '\u21A9\uFE0E'
            )
          ])
        ])
      ])
    ],
    -1
  ),
  _1 = {
    setup(e) {
      const t = {
        layout: 'right-image-animation',
        image: './amplify-fancy/amplify-fancy/aws-amplify.svg',
        preload: !1
      }
      return (n, s) => {
        const r = Qt
        return (
          M(),
          me(
            rs,
            Ke(He(t)),
            {
              default: ge(() => [
                p('div', h1, [
                  p1,
                  m1,
                  Y(r, null, { default: ge(() => [g1]), _: 1 })
                ]),
                v1,
                y1
              ]),
              _: 1
            },
            16
          )
        )
      }
    }
  },
  b1 = p(
    'iframe',
    {
      width: '100%',
      height: '800px',
      src: 'https://www.mentimeter.com/s/b6526767f72ea2fcf959198ccb8498a0/b74d76b517e2'
    },
    null,
    -1
  ),
  w1 = {
    setup(e) {
      const t = { preload: !0 }
      return (n, s) => (
        M(), me(Sn, Ke(He(t)), { default: ge(() => [b1]), _: 1 }, 16)
      )
    }
  },
  x1 = { class: 'black-layer' },
  E1 = p('h1', null, 'Fancy', -1),
  S1 = p(
    'ul',
    null,
    [
      p('li', null, [
        se('Ornamental; decorative; not plain '),
        p('sup', { class: 'footnote-ref' }, [
          p('a', { href: '#fn1', id: 'fnref1' }, '[1]')
        ])
      ]),
      p('li', null, [
        se('Tending or intending to impress '),
        p('sup', { class: 'footnote-ref' }, [
          p('a', { href: '#fn1', id: 'fnref1:1' }, '[1:1]')
        ])
      ]),
      p('li', null, [
        se('Latest (Technology) Trend '),
        p('sup', { class: 'footnote-ref' }, [
          p('a', { href: '#fn2', id: 'fnref2' }, '[2]')
        ])
      ]),
      p('li', null, 'All following can also be applied to any stack')
    ],
    -1
  ),
  k1 = p('hr', { class: 'footnotes-sep' }, null, -1),
  $1 = p(
    'section',
    { class: 'footnotes' },
    [
      p('ol', { class: 'footnotes-list' }, [
        p('li', { id: 'fn1', class: 'footnote-item' }, [
          p('p', null, [
            p(
              'a',
              {
                href: 'https://www.dictionary.com/browse/fancy',
                target: '_blank',
                rel: 'noopener'
              },
              'Definition'
            ),
            se(),
            p(
              'a',
              { href: '#fnref1', class: 'footnote-backref' },
              '\u21A9\uFE0E'
            ),
            se(),
            p(
              'a',
              { href: '#fnref1:1', class: 'footnote-backref' },
              '\u21A9\uFE0E'
            )
          ])
        ]),
        p('li', { id: 'fn2', class: 'footnote-item' }, [
          p('p', null, [
            se('My Biased Definition '),
            p(
              'a',
              { href: '#fnref2', class: 'footnote-backref' },
              '\u21A9\uFE0E'
            )
          ])
        ])
      ])
    ],
    -1
  ),
  C1 = {
    setup(e) {
      const t = {
        layout: 'right-image-animation',
        image: 'https://c.tenor.com/Czfb_LkSDL4AAAAC/fancy-homer.gif',
        preload: !1,
        leftColSpan: 2
      }
      return (n, s) => {
        const r = Qt
        return (
          M(),
          me(
            rs,
            Ke(He(t)),
            {
              default: ge(() => [
                p('div', x1, [
                  E1,
                  Y(r, null, { default: ge(() => [S1]), _: 1 })
                ]),
                k1,
                $1
              ]),
              _: 1
            },
            16
          )
        )
      }
    }
  },
  A1 = { class: 'black-layer' },
  O1 = p(
    'h1',
    null,
    [
      p('code', null, '$which Monorepo'),
      p('sup', { class: 'footnote-ref' }, [
        p('a', { href: '#fn1', id: 'fnref1' }, '[1]')
      ]),
      p('sup', { class: 'footnote-ref' }, [
        p('a', { href: '#fn2', id: 'fnref2' }, '[2]')
      ])
    ],
    -1
  ),
  M1 = p(
    'ul',
    null,
    [
      p(
        'li',
        null,
        'Version-controlled code repository with multiple distinct projects'
      ),
      p('li', null, [
        se('Do not get confused with '),
        p('em', null, 'monolithic architecture')
      ]),
      p('li', null, 'Shared library/dependencies and config- files'),
      p('li', null, 'Unified CI/CD'),
      p('li', null, 'One version of everything'),
      p('li', null, 'Hard to Scale and Noisy'),
      p('li', null, 'Amplify CLI makes it easy not to be a Monorepo')
    ],
    -1
  ),
  P1 = p('hr', { class: 'footnotes-sep' }, null, -1),
  T1 = p(
    'section',
    { class: 'footnotes' },
    [
      p('ol', { class: 'footnotes-list' }, [
        p('li', { id: 'fn1', class: 'footnote-item' }, [
          p('p', null, [
            p(
              'a',
              {
                href: 'https://semaphoreci.com/blog/what-is-monorepo',
                target: '_blank',
                rel: 'noopener'
              },
              'What is Monorepo'
            ),
            se(),
            p(
              'a',
              { href: '#fnref1', class: 'footnote-backref' },
              '\u21A9\uFE0E'
            )
          ])
        ]),
        p('li', { id: 'fn2', class: 'footnote-item' }, [
          p('p', null, [
            p(
              'a',
              {
                href: 'https://monorepo.tools/',
                target: '_blank',
                rel: 'noopener'
              },
              'monorepo.tools'
            ),
            se(),
            p(
              'a',
              { href: '#fnref2', class: 'footnote-backref' },
              '\u21A9\uFE0E'
            )
          ])
        ])
      ])
    ],
    -1
  ),
  I1 = {
    setup(e) {
      const t = {
        layout: 'right-image-animation',
        image: './amplify-fancy/amplify-fancy/mono.svg',
        preload: !1
      }
      return (n, s) => {
        const r = Qt
        return (
          M(),
          me(
            rs,
            Ke(He(t)),
            {
              default: ge(() => [
                p('div', A1, [
                  O1,
                  Y(r, null, { default: ge(() => [M1]), _: 1 })
                ]),
                P1,
                T1
              ]),
              _: 1
            },
            16
          )
        )
      }
    }
  }
var R1 = './amplify-fancy/amplify-fancy/heaviest-object-in-the-universe.png'
const j1 = p(
    'p',
    null,
    [p('img', { src: R1, alt: 'node_modules the heaviest on earth' })],
    -1
  ),
  L1 = [j1],
  F1 = {
    setup(e) {
      const t = {}
      return (n, s) => {
        const r = Pt('motion-roll-visible-top')
        return (
          M(),
          me(
            Sn,
            Ke(He(t)),
            { default: ge(() => [et((M(), z('div', null, L1)), [[r]])]), _: 1 },
            16
          )
        )
      }
    }
  },
  N1 = { class: 'black-layer' },
  D1 = p(
    'h1',
    null,
    [
      p('code', null, '$which pnpm'),
      se(),
      p('sup', { class: 'footnote-ref' }, [
        p('a', { href: '#fn1', id: 'fnref1' }, '[1]')
      ])
    ],
    -1
  ),
  H1 = p('p', null, 'Fast, disk space efficient package manager', -1),
  z1 = p(
    'ul',
    null,
    [
      p('li', null, [
        se('2x faster than '),
        p('code', null, 'npm'),
        se(' and '),
        p('code', null, 'yarn'),
        se(' \u{1F680}')
      ]),
      p('li', null, [
        se('Efficient - '),
        p('code', null, 'node_modules'),
        se(' are linked from a single content storage \u{1F4BE}')
      ]),
      p('li', null, 'Monorepo out of the box \u{1F419}'),
      p(
        'li',
        null,
        'Strict - code has no access to arbitrary packages \u{1F9D0}'
      )
    ],
    -1
  ),
  B1 = p('hr', { class: 'footnotes-sep' }, null, -1),
  V1 = p(
    'section',
    { class: 'footnotes' },
    [
      p('ol', { class: 'footnotes-list' }, [
        p('li', { id: 'fn1', class: 'footnote-item' }, [
          p('p', null, [
            p(
              'a',
              { href: 'https://pnpm.io', target: '_blank', rel: 'noopener' },
              'PNPM'
            ),
            se(),
            p(
              'a',
              { href: '#fnref1', class: 'footnote-backref' },
              '\u21A9\uFE0E'
            )
          ])
        ])
      ])
    ],
    -1
  ),
  U1 = {
    setup(e) {
      const t = {
        layout: 'right-image-animation',
        image:
          'https://pnpm.io/assets/images/pnpm-light-477811893d2e1c4ad4b10345c442282e.svg',
        preload: !1
      }
      return (n, s) => {
        const r = Qt
        return (
          M(),
          me(
            rs,
            Ke(He(t)),
            {
              default: ge(() => [
                p('div', N1, [
                  D1,
                  H1,
                  Y(r, null, { default: ge(() => [z1]), _: 1 })
                ]),
                B1,
                V1
              ]),
              _: 1
            },
            16
          )
        )
      }
    }
  },
  K1 = { class: 'black-layer' },
  W1 = p(
    'h1',
    null,
    [
      p('code', null, '$which Typescript'),
      se(),
      p('sup', { class: 'footnote-ref' }, [
        p('a', { href: '#fn1', id: 'fnref1' }, '[1]')
      ])
    ],
    -1
  ),
  q1 = p('p', null, 'JavaScript with syntax for types', -1),
  Y1 = p(
    'ul',
    null,
    [
      p(
        'li',
        null,
        'Strongly typed programming language that builds on JavaScript \u2049\uFE0F'
      ),
      p(
        'li',
        null,
        'Support a tighter integration with your editor \u{1F468}\u200D\u{1F4BB}\u{1F469}\u200D\u{1F4BB}'
      ),
      p(
        'li',
        null,
        'Understands JavaScript and uses type inference to give you great tooling without additional code \u{1F481}\u200D\u2642\uFE0F'
      )
    ],
    -1
  ),
  J1 = p('hr', { class: 'footnotes-sep' }, null, -1),
  G1 = p(
    'section',
    { class: 'footnotes' },
    [
      p('ol', { class: 'footnotes-list' }, [
        p('li', { id: 'fn1', class: 'footnote-item' }, [
          p('p', null, [
            p(
              'a',
              {
                href: 'https://www.typescriptlang.org/',
                target: '_blank',
                rel: 'noopener'
              },
              'Typescript'
            ),
            se(),
            p(
              'a',
              { href: '#fnref1', class: 'footnote-backref' },
              '\u21A9\uFE0E'
            )
          ])
        ])
      ])
    ],
    -1
  ),
  Q1 = {
    setup(e) {
      const t = {
        layout: 'right-image-animation',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png',
        preload: !1
      }
      return (n, s) => {
        const r = Qt
        return (
          M(),
          me(
            rs,
            Ke(He(t)),
            {
              default: ge(() => [
                p('div', K1, [
                  W1,
                  q1,
                  Y(r, null, { default: ge(() => [Y1]), _: 1 })
                ]),
                J1,
                G1
              ]),
              _: 1
            },
            16
          )
        )
      }
    }
  }
var X1 = './amplify-fancy/amplify-fancy/typescript-vs-nodejs.jpg'
const Z1 = p(
    'p',
    null,
    [
      p('img', {
        src: X1,
        alt: 'Typescript not working on AWS Lambda but NodeJS'
      })
    ],
    -1
  ),
  eb = [Z1],
  tb = {
    setup(e) {
      const t = {}
      return (n, s) => {
        const r = Pt('motion-roll-visible-top')
        return (
          M(),
          me(
            Sn,
            Ke(He(t)),
            { default: ge(() => [et((M(), z('div', null, eb)), [[r]])]), _: 1 },
            16
          )
        )
      }
    }
  },
  nb = { class: 'black-layer' },
  sb = p(
    'h1',
    null,
    [
      p('code', null, '$which esbuild'),
      se(),
      p('sup', { class: 'footnote-ref' }, [
        p('a', { href: '#fn1', id: 'fnref1' }, '[1]')
      ])
    ],
    -1
  ),
  rb = p('p', null, 'An extremely fast JavaScript bundler', -1),
  ob = p(
    'ul',
    null,
    [
      p('li', null, 'Extreme speed without needing a cache'),
      p('li', null, 'ES6 and CommonJS modules'),
      p('li', null, 'Tree shaking of ES6 modules'),
      p('li', null, 'Bundle and Minify')
    ],
    -1
  ),
  ib = p('hr', { class: 'footnotes-sep' }, null, -1),
  lb = p(
    'section',
    { class: 'footnotes' },
    [
      p('ol', { class: 'footnotes-list' }, [
        p('li', { id: 'fn1', class: 'footnote-item' }, [
          p('p', null, [
            p(
              'a',
              {
                href: 'https://esbuild.github.io/',
                target: '_blank',
                rel: 'noopener'
              },
              'esbuild'
            ),
            se(),
            p(
              'a',
              { href: '#fnref1', class: 'footnote-backref' },
              '\u21A9\uFE0E'
            )
          ])
        ])
      ])
    ],
    -1
  ),
  ab = {
    setup(e) {
      const t = {
        layout: 'right-image-animation',
        image: 'https://esbuild.github.io/favicon.svg',
        preload: !1
      }
      return (n, s) => {
        const r = Qt
        return (
          M(),
          me(
            rs,
            Ke(He(t)),
            {
              default: ge(() => [
                p('div', nb, [
                  sb,
                  rb,
                  Y(r, null, { default: ge(() => [ob]), _: 1 })
                ]),
                ib,
                lb
              ]),
              _: 1
            },
            16
          )
        )
      }
    }
  },
  cb = { class: 'black-layer' },
  ub = p('h1', null, 'Consideration when using Amplify (CLI)', -1),
  fb = p(
    'ul',
    null,
    [
      p('li', null, [
        se('REST: is using a deprecated '),
        p(
          'a',
          {
            href: 'https://www.npmjs.com/package/aws-serverless-express',
            target: '_blank',
            rel: 'noopener'
          },
          'ExpressJS- package'
        ),
        se(' \u{1F631}')
      ]),
      p('li', null, [
        se('REST: It uses always ExpressJS except when you choose the '),
        p('em', null, 'Hello World'),
        se('- option \u{1F937}')
      ]),
      p('li', null, [
        se('REST: '),
        p('code', null, 'amplify remove api'),
        se(' does not remove functions even though they depend on it \u{1F9D0}')
      ]),
      p(
        'li',
        null,
        'AppSync is quite expensive if you just want to test (For a private person $32/month) \u{1F635}'
      )
    ],
    -1
  ),
  db = {
    setup(e) {
      const t = { class: 'content-center' }
      return (n, s) => {
        const r = Qt
        return (
          M(),
          me(
            Sn,
            Ke(He(t)),
            {
              default: ge(() => [
                p('div', cb, [
                  ub,
                  Y(r, null, { default: ge(() => [fb]), _: 1 })
                ])
              ]),
              _: 1
            },
            16
          )
        )
      }
    }
  },
  hb = { class: 'black-layer' },
  pb = p('h1', null, 'Conclusion', -1),
  mb = p(
    'ul',
    null,
    [
      p('li', null, 'Good for SPA \u{1F60E}'),
      p('li', null, 'Easy to connect Frontend with AWS Backend \u{1F929}'),
      p(
        'li',
        null,
        'Good if going beyond MVP but for Enterprise maybe splitting Backend \u{1F9D0}'
      ),
      p('li', null, [
        se('A lot of Tweaks to make it '),
        p('strong', null, '"Fancy"'),
        se(' \u{1F635}\u200D\u{1F4AB}')
      ])
    ],
    -1
  ),
  gb = {
    setup(e) {
      const t = {}
      return (n, s) => {
        const r = Qt
        return (
          M(),
          me(
            Sn,
            Ke(He(t)),
            {
              default: ge(() => [
                p('div', hb, [
                  pb,
                  Y(r, null, { default: ge(() => [mb]), _: 1 })
                ])
              ]),
              _: 1
            },
            16
          )
        )
      }
    }
  },
  vb = p(
    'p',
    null,
    [
      p('img', {
        src: 'https://c.tenor.com/35hmBwYHYikAAAAC/the-office-bow.gif',
        alt: 'Thank You'
      })
    ],
    -1
  ),
  yb = {
    setup(e) {
      const t = { class: 'justify-center' }
      return (n, s) => (
        M(), me(Sn, Ke(He(t)), { default: ge(() => [vb]), _: 1 }, 16)
      )
    }
  }
var _b = [
  {
    path: '1',
    name: 'page-1',
    component: Yy,
    meta: {
      theme: './',
      title: 'How To Add Fancy To Your Amplify Functions',
      preload: !1,
      class: 'content-center',
      layout: 'intro',
      lineNumbers: !0,
      drawings: { enabled: 'dev' },
      introImage: './amplify-fancy/amplify-fancy/aws-amplify.svg',
      slide: {
        start: 0,
        end: 29,
        filepath:
          '/Users/johnnguyen/Development/xw-slidev-template./amplify-fancy/amplify-fancy.md',
        id: 0,
        no: 1,
        title: 'How To Add Fancy To Your Amplify Functions',
        level: 1
      },
      __clicksElements: [],
      __preloaded: !1
    }
  },
  {
    path: '2',
    name: 'page-2',
    component: c1,
    meta: {
      preload: !1,
      slide: {
        start: 29,
        end: 47,
        filepath:
          '/Users/johnnguyen/Development/xw-slidev-template./amplify-fancy/amplify-fancy.md',
        id: 1,
        no: 2
      },
      __clicksElements: [],
      __preloaded: !1
    }
  },
  {
    path: '3',
    name: 'page-3',
    component: _1,
    meta: {
      layout: 'right-image-animation',
      image: './amplify-fancy/amplify-fancy/aws-amplify.svg',
      preload: !1,
      slide: {
        start: 47,
        end: 73,
        filepath:
          '/Users/johnnguyen/Development/xw-slidev-template./amplify-fancy/amplify-fancy.md',
        id: 2,
        no: 3,
        title: '`$which amplify` [^1]',
        level: 1
      },
      __clicksElements: [],
      __preloaded: !1
    }
  },
  {
    path: '4',
    name: 'page-4',
    component: w1,
    meta: {
      preload: !0,
      slide: {
        start: 73,
        end: 80,
        filepath:
          '/Users/johnnguyen/Development/xw-slidev-template./amplify-fancy/amplify-fancy.md',
        id: 3,
        no: 4
      },
      __clicksElements: [],
      __preloaded: !1
    }
  },
  {
    path: '5',
    name: 'page-5',
    component: C1,
    meta: {
      layout: 'right-image-animation',
      image: 'https://c.tenor.com/Czfb_LkSDL4AAAAC/fancy-homer.gif',
      preload: !1,
      leftColSpan: 2,
      slide: {
        start: 80,
        end: 106,
        filepath:
          '/Users/johnnguyen/Development/xw-slidev-template./amplify-fancy/amplify-fancy.md',
        id: 4,
        no: 5,
        title: 'Fancy',
        level: 1
      },
      __clicksElements: [],
      __preloaded: !1
    }
  },
  {
    path: '6',
    name: 'page-6',
    component: I1,
    meta: {
      layout: 'right-image-animation',
      image: './amplify-fancy/amplify-fancy/mono.svg',
      preload: !1,
      slide: {
        start: 106,
        end: 134,
        filepath:
          '/Users/johnnguyen/Development/xw-slidev-template./amplify-fancy/amplify-fancy.md',
        id: 5,
        no: 6,
        title: '`$which Monorepo`[^1][^2]',
        level: 1
      },
      __clicksElements: [],
      __preloaded: !1
    }
  },
  {
    path: '7',
    name: 'page-7',
    component: F1,
    meta: {
      slide: {
        start: 135,
        end: 142,
        filepath:
          '/Users/johnnguyen/Development/xw-slidev-template./amplify-fancy/amplify-fancy.md',
        id: 6,
        no: 7
      },
      __clicksElements: [],
      __preloaded: !1
    }
  },
  {
    path: '8',
    name: 'page-8',
    component: U1,
    meta: {
      layout: 'right-image-animation',
      image:
        'https://pnpm.io/assets/images/pnpm-light-477811893d2e1c4ad4b10345c442282e.svg',
      preload: !1,
      slide: {
        start: 142,
        end: 168,
        filepath:
          '/Users/johnnguyen/Development/xw-slidev-template./amplify-fancy/amplify-fancy.md',
        id: 7,
        no: 8,
        title: '`$which pnpm` [^1]',
        level: 1
      },
      __clicksElements: [],
      __preloaded: !1
    }
  },
  {
    path: '9',
    name: 'page-9',
    component: Q1,
    meta: {
      layout: 'right-image-animation',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png',
      preload: !1,
      slide: {
        start: 168,
        end: 193,
        filepath:
          '/Users/johnnguyen/Development/xw-slidev-template./amplify-fancy/amplify-fancy.md',
        id: 8,
        no: 9,
        title: '`$which Typescript` [^1]',
        level: 1
      },
      __clicksElements: [],
      __preloaded: !1
    }
  },
  {
    path: '10',
    name: 'page-10',
    component: tb,
    meta: {
      slide: {
        start: 194,
        end: 201,
        filepath:
          '/Users/johnnguyen/Development/xw-slidev-template./amplify-fancy/amplify-fancy.md',
        id: 9,
        no: 10
      },
      __clicksElements: [],
      __preloaded: !1
    }
  },
  {
    path: '11',
    name: 'page-11',
    component: ab,
    meta: {
      layout: 'right-image-animation',
      image: 'https://esbuild.github.io/favicon.svg',
      preload: !1,
      slide: {
        start: 201,
        end: 227,
        filepath:
          '/Users/johnnguyen/Development/xw-slidev-template./amplify-fancy/amplify-fancy.md',
        id: 10,
        no: 11,
        title: '`$which esbuild` [^1]',
        level: 1
      },
      __clicksElements: [],
      __preloaded: !1
    }
  },
  {
    path: '12',
    name: 'page-12',
    component: db,
    meta: {
      class: 'content-center',
      slide: {
        start: 227,
        end: 247,
        filepath:
          '/Users/johnnguyen/Development/xw-slidev-template./amplify-fancy/amplify-fancy.md',
        id: 11,
        no: 12,
        title: 'Consideration when using Amplify (CLI)',
        level: 1
      },
      __clicksElements: [],
      __preloaded: !1
    }
  },
  {
    path: '13',
    name: 'page-13',
    component: gb,
    meta: {
      slide: {
        start: 248,
        end: 264,
        filepath:
          '/Users/johnnguyen/Development/xw-slidev-template./amplify-fancy/amplify-fancy.md',
        id: 12,
        no: 13,
        title: 'Conclusion',
        level: 1
      },
      __clicksElements: [],
      __preloaded: !1
    }
  },
  {
    path: '14',
    name: 'page-14',
    component: yb,
    meta: {
      class: 'justify-center',
      slide: {
        start: 264,
        end: 270,
        filepath:
          '/Users/johnnguyen/Development/xw-slidev-template./amplify-fancy/amplify-fancy.md',
        id: 13,
        no: 14
      },
      __clicksElements: [],
      __preloaded: !1
    }
  },
  { path: '15', component: Ty, meta: { layout: 'end' } }
]
const vt = _b,
  bb = [
    { name: 'play', path: '/', component: Ay, children: [...vt] },
    { path: '', redirect: { path: '/1' } },
    { path: '/:pathMatch(.*)', redirect: { path: '/1' } }
  ],
  Ye = yg({ history: Rm('/'), routes: bb })
function wb(e, t, { mode: n = 'replace' } = {}) {
  return D({
    get() {
      const s = Ye.currentRoute.value.query[e]
      return s == null
        ? t != null
          ? t
          : null
        : Array.isArray(s)
        ? s.filter(Boolean)
        : s
    },
    set(s) {
      Ut(() => {
        Ye[C(n)]({ query: Ue(de({}, Ye.currentRoute.value.query), { [e]: s }) })
      })
    }
  })
}
const Pu = Z(0)
Ut(() => {
  Ye.afterEach(async () => {
    await Ut(), (Pu.value += 1)
  })
})
const Xt = D(() => Ye.currentRoute.value),
  Fi = D(() => Xt.value.query.print !== void 0),
  Tu = D(() => Xt.value.query.print === 'clicks'),
  os = D(() => Xt.value.query.embedded !== void 0),
  Zt = D(() => Xt.value.path.startsWith('/presenter')),
  Hs = D(() => Fi.value && !Tu.value),
  Ni = wb('clicks', '0'),
  Di = D(() => vt.length - 1),
  Iu = D(() => Xt.value.path),
  Le = D(() => parseInt(Iu.value.split(/\//g).slice(-1)[0]) || 1),
  xb = D(() => Wr(Le.value)),
  Je = D(() => vt.find((e) => e.path === `${Le.value}`)),
  Eb = D(() => {
    var e, t, n
    return (n =
      (t = (e = Je.value) == null ? void 0 : e.meta) == null
        ? void 0
        : t.slide) == null
      ? void 0
      : n.id
  }),
  Sb = D(() => {
    var e, t
    return (t = (e = Je.value) == null ? void 0 : e.meta) == null
      ? void 0
      : t.layout
  }),
  Kr = D(() =>
    vt.find((e) => e.path === `${Math.min(vt.length, Le.value + 1)}`)
  ),
  Ru = D(() => {
    var e, t
    return (
      Pu.value,
      ((t = (e = Je.value) == null ? void 0 : e.meta) == null
        ? void 0
        : t.__clicksElements) || []
    )
  }),
  yt = D({
    get() {
      if (Hs.value) return 99999
      let e = +(Ni.value || 0)
      return isNaN(e) && (e = 0), e
    },
    set(e) {
      Ni.value = e.toString()
    }
  }),
  zs = D(() => {
    var e, t, n
    return +((n =
      (t = (e = Je.value) == null ? void 0 : e.meta) == null
        ? void 0
        : t.clicks) != null
      ? n
      : Ru.value.length)
  }),
  ju = D(() => Le.value < vt.length - 1 || yt.value < zs.value),
  Lu = D(() => Le.value > 1 || yt.value > 0),
  Fu = D(() =>
    vt
      .filter((e) => {
        var t, n
        return (n = (t = e.meta) == null ? void 0 : t.slide) == null
          ? void 0
          : n.title
      })
      .reduce((e, t) => (zi(e, t), e), [])
  ),
  Nu = D(() => Bi(Fu.value)),
  kb = D(() => Hu(Nu.value))
function en() {
  zs.value <= yt.value ? Bs() : (yt.value += 1)
}
async function tn() {
  yt.value <= 0 ? await Vs() : (yt.value -= 1)
}
function Wr(e) {
  return Zt.value ? `/presenter/${e}` : `/${e}`
}
function Bs() {
  const e = Math.min(vt.length, Le.value + 1)
  return Us(e)
}
async function Vs(e = !0) {
  const t = Math.max(1, Le.value - 1)
  await Us(t),
    e &&
      zs.value &&
      Ye.replace({ query: Ue(de({}, Xt.value.query), { clicks: zs.value }) })
}
function Us(e, t) {
  return Ye.push({
    path: Wr(e),
    query: Ue(de({}, Xt.value.query), { clicks: t })
  })
}
function Du(e) {
  const t = Z(0),
    {
      direction: n,
      distanceX: s,
      distanceY: r
    } = cm(e, {
      onSwipeStart(o) {
        o.pointerType === 'touch' && (Is.value || (t.value = Ap()))
      },
      onSwipeEnd(o) {
        if (o.pointerType !== 'touch' || !t.value || Is.value) return
        const i = Math.abs(s.value),
          l = Math.abs(r.value)
        i / window.innerWidth > 0.3 || i > 100
          ? n.value === Wt.LEFT
            ? en()
            : tn()
          : (l / window.innerHeight > 0.4 || l > 200) &&
            (n.value === Wt.DOWN ? Vs() : Bs())
      }
    })
}
async function Hi() {
  const { saveAs: e } = await import('./FileSaver.min.74f94137.js').then(
    function (t) {
      return t.F
    }
  )
  e(Za(Oe.download) ? Oe.download : '/slidev-exported.pdf', `${Oe.title}.pdf`)
}
async function $b(e) {
  var t, n
  if (e == null) {
    const s =
      (n = (t = Je.value) == null ? void 0 : t.meta) == null ? void 0 : n.slide
    if (!(s == null ? void 0 : s.filepath)) return !1
    e = `${s.filepath}:${s.start}`
  }
  return await fetch(`/__open-in-editor?file=${encodeURIComponent(e)}`), !0
}
function zi(e, t, n = 1) {
  var r, o, i, l, a
  const s =
    (o = (r = t.meta) == null ? void 0 : r.slide) == null ? void 0 : o.level
  s && s > n && e.length > 0
    ? zi(e[e.length - 1].children, t, n + 1)
    : e.push({
        children: [],
        level: n,
        path: t.path,
        hideInToc: Boolean((i = t.meta) == null ? void 0 : i.hideInToc),
        title:
          (a = (l = t.meta) == null ? void 0 : l.slide) == null
            ? void 0
            : a.title
      })
}
function Bi(e, t = !1, n) {
  return e.map((s) => {
    var o
    const r = Ue(de({}, s), {
      active: s.path === ((o = Je.value) == null ? void 0 : o.path),
      hasActiveParent: t
    })
    return (
      r.children.length > 0 &&
        (r.children = Bi(r.children, r.active || r.hasActiveParent, r)),
      n && (r.active || r.activeParent) && (n.activeParent = !0),
      r
    )
  })
}
function Hu(e, t = 1) {
  return e
    .filter((n) => !n.hideInToc)
    .map((n) => Ue(de({}, n), { children: Hu(n.children, t + 1) }))
}
var zu = Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: 'Module',
  rawRoutes: vt,
  router: Ye,
  route: Xt,
  isPrintMode: Fi,
  isPrintWithClicks: Tu,
  isEmbedded: os,
  isPresenter: Zt,
  isClicksDisabled: Hs,
  queryClicks: Ni,
  total: Di,
  path: Iu,
  currentPage: Le,
  currentPath: xb,
  currentRoute: Je,
  currentSlideId: Eb,
  currentLayout: Sb,
  nextRoute: Kr,
  clicksElements: Ru,
  clicks: yt,
  clicksTotal: zs,
  hasNext: ju,
  hasPrev: Lu,
  rawTree: Fu,
  treeWithActiveStatuses: Nu,
  tree: kb,
  next: en,
  prev: tn,
  getPath: Wr,
  nextSlide: Bs,
  prevSlide: Vs,
  go: Us,
  useSwipeControls: Du,
  downloadPDF: Hi,
  openInEditor: $b,
  addToTree: zi,
  getTreeWithActiveStatuses: Bi
})
function Cb() {
  Sp({ title: Oe.titleTemplate.replace('%s', Oe.title || 'Slidev') })
  function e() {
    Zt.value ||
      ((+St.page != +Le.value || yt.value !== St.clicks) &&
        Ye.replace({
          path: Wr(St.page),
          query: Ue(de({}, Ye.currentRoute.value.query), {
            clicks: St.clicks || 0
          })
        }))
  }
  function t() {
    Zt.value && ((St.page = +Le.value), (St.clicks = yt.value))
  }
  Ye.afterEach(t),
    ae(yt, t),
    Ye.isReady().then(() => {
      ae(St, e, { deep: !0 })
    })
}
const Ab = Se({
    setup(e) {
      return (
        Cb(),
        (t, n) => {
          const s = ga('RouterView')
          return M(), me(s)
        }
      )
    }
  }),
  Bu = (1 / 60) * 1e3,
  Ob =
    typeof performance != 'undefined'
      ? () => performance.now()
      : () => Date.now(),
  Vu =
    typeof window != 'undefined'
      ? (e) => window.requestAnimationFrame(e)
      : (e) => setTimeout(() => e(Ob()), Bu)
function Mb(e) {
  let t = [],
    n = [],
    s = 0,
    r = !1,
    o = !1
  const i = new WeakSet(),
    l = {
      schedule: (a, c = !1, u = !1) => {
        const f = u && r,
          d = f ? t : n
        return (
          c && i.add(a),
          d.indexOf(a) === -1 && (d.push(a), f && r && (s = t.length)),
          a
        )
      },
      cancel: (a) => {
        const c = n.indexOf(a)
        c !== -1 && n.splice(c, 1), i.delete(a)
      },
      process: (a) => {
        if (r) {
          o = !0
          return
        }
        if (((r = !0), ([t, n] = [n, t]), (n.length = 0), (s = t.length), s))
          for (let c = 0; c < s; c++) {
            const u = t[c]
            u(a), i.has(u) && (l.schedule(u), e())
          }
        ;(r = !1), o && ((o = !1), l.process(a))
      }
    }
  return l
}
const Pb = 40
let Vi = !0,
  Ks = !1,
  Ui = !1
const is = { delta: 0, timestamp: 0 },
  Ws = ['read', 'update', 'preRender', 'render', 'postRender'],
  qr = Ws.reduce((e, t) => ((e[t] = Mb(() => (Ks = !0))), e), {}),
  Ki = Ws.reduce((e, t) => {
    const n = qr[t]
    return (e[t] = (s, r = !1, o = !1) => (Ks || Rb(), n.schedule(s, r, o))), e
  }, {}),
  Tb = Ws.reduce((e, t) => ((e[t] = qr[t].cancel), e), {})
Ws.reduce((e, t) => ((e[t] = () => qr[t].process(is)), e), {})
const Ib = (e) => qr[e].process(is),
  Uu = (e) => {
    ;(Ks = !1),
      (is.delta = Vi ? Bu : Math.max(Math.min(e - is.timestamp, Pb), 1)),
      (is.timestamp = e),
      (Ui = !0),
      Ws.forEach(Ib),
      (Ui = !1),
      Ks && ((Vi = !1), Vu(Uu))
  },
  Rb = () => {
    ;(Ks = !0), (Vi = !0), Ui || Vu(Uu)
  },
  Ku = () => is
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ function Wu(
  e,
  t
) {
  var n = {}
  for (var s in e)
    Object.prototype.hasOwnProperty.call(e, s) &&
      t.indexOf(s) < 0 &&
      (n[s] = e[s])
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var r = 0, s = Object.getOwnPropertySymbols(e); r < s.length; r++)
      t.indexOf(s[r]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, s[r]) &&
        (n[s[r]] = e[s[r]])
  return n
}
var jb = function () {},
  qu = function () {}
const Wi = (e, t, n) => Math.min(Math.max(n, e), t),
  qi = 0.001,
  Lb = 0.01,
  Yu = 10,
  Fb = 0.05,
  Nb = 1
function Db({
  duration: e = 800,
  bounce: t = 0.25,
  velocity: n = 0,
  mass: s = 1
}) {
  let r, o
  jb(e <= Yu * 1e3)
  let i = 1 - t
  ;(i = Wi(Fb, Nb, i)),
    (e = Wi(Lb, Yu, e / 1e3)),
    i < 1
      ? ((r = (c) => {
          const u = c * i,
            f = u * e,
            d = u - n,
            m = Yi(c, i),
            v = Math.exp(-f)
          return qi - (d / m) * v
        }),
        (o = (c) => {
          const f = c * i * e,
            d = f * n + n,
            m = Math.pow(i, 2) * Math.pow(c, 2) * e,
            v = Math.exp(-f),
            E = Yi(Math.pow(c, 2), i)
          return ((-r(c) + qi > 0 ? -1 : 1) * ((d - m) * v)) / E
        }))
      : ((r = (c) => {
          const u = Math.exp(-c * e),
            f = (c - n) * e + 1
          return -qi + u * f
        }),
        (o = (c) => {
          const u = Math.exp(-c * e),
            f = (n - c) * (e * e)
          return u * f
        }))
  const l = 5 / e,
    a = zb(r, o, l)
  if (((e = e * 1e3), isNaN(a)))
    return { stiffness: 100, damping: 10, duration: e }
  {
    const c = Math.pow(a, 2) * s
    return { stiffness: c, damping: i * 2 * Math.sqrt(s * c), duration: e }
  }
}
const Hb = 12
function zb(e, t, n) {
  let s = n
  for (let r = 1; r < Hb; r++) s = s - e(s) / t(s)
  return s
}
function Yi(e, t) {
  return e * Math.sqrt(1 - t * t)
}
const Bb = ['duration', 'bounce'],
  Vb = ['stiffness', 'damping', 'mass']
function Ju(e, t) {
  return t.some((n) => e[n] !== void 0)
}
function Ub(e) {
  let t = Object.assign(
    {
      velocity: 0,
      stiffness: 100,
      damping: 10,
      mass: 1,
      isResolvedFromDuration: !1
    },
    e
  )
  if (!Ju(e, Vb) && Ju(e, Bb)) {
    const n = Db(e)
    ;(t = Object.assign(Object.assign(Object.assign({}, t), n), {
      velocity: 0,
      mass: 1
    })),
      (t.isResolvedFromDuration = !0)
  }
  return t
}
function Ji(e) {
  var { from: t = 0, to: n = 1, restSpeed: s = 2, restDelta: r } = e,
    o = Wu(e, ['from', 'to', 'restSpeed', 'restDelta'])
  const i = { done: !1, value: t }
  let {
      stiffness: l,
      damping: a,
      mass: c,
      velocity: u,
      duration: f,
      isResolvedFromDuration: d
    } = Ub(o),
    m = Gu,
    v = Gu
  function E() {
    const w = u ? -(u / 1e3) : 0,
      A = n - t,
      _ = a / (2 * Math.sqrt(l * c)),
      b = Math.sqrt(l / c) / 1e3
    if ((r === void 0 && (r = Math.min(Math.abs(n - t) / 100, 0.4)), _ < 1)) {
      const S = Yi(b, _)
      ;(m = (L) => {
        const N = Math.exp(-_ * b * L)
        return (
          n -
          N * (((w + _ * b * A) / S) * Math.sin(S * L) + A * Math.cos(S * L))
        )
      }),
        (v = (L) => {
          const N = Math.exp(-_ * b * L)
          return (
            _ *
              b *
              N *
              ((Math.sin(S * L) * (w + _ * b * A)) / S + A * Math.cos(S * L)) -
            N * (Math.cos(S * L) * (w + _ * b * A) - S * A * Math.sin(S * L))
          )
        })
    } else if (_ === 1) m = (S) => n - Math.exp(-b * S) * (A + (w + b * A) * S)
    else {
      const S = b * Math.sqrt(_ * _ - 1)
      m = (L) => {
        const N = Math.exp(-_ * b * L),
          j = Math.min(S * L, 300)
        return (
          n - (N * ((w + _ * b * A) * Math.sinh(j) + S * A * Math.cosh(j))) / S
        )
      }
    }
  }
  return (
    E(),
    {
      next: (w) => {
        const A = m(w)
        if (d) i.done = w >= f
        else {
          const _ = v(w) * 1e3,
            b = Math.abs(_) <= s,
            S = Math.abs(n - A) <= r
          i.done = b && S
        }
        return (i.value = i.done ? n : A), i
      },
      flipTarget: () => {
        ;(u = -u), ([t, n] = [n, t]), E()
      }
    }
  )
}
Ji.needsInterpolation = (e, t) => typeof e == 'string' || typeof t == 'string'
const Gu = (e) => 0,
  Qu = (e, t, n) => {
    const s = t - e
    return s === 0 ? 1 : (n - e) / s
  },
  Gi = (e, t, n) => -n * e + n * t + e,
  Xu = (e, t) => (n) => Math.max(Math.min(n, t), e),
  qs = (e) => (e % 1 ? Number(e.toFixed(5)) : e),
  Ys = /(-)?([\d]*\.?[\d])+/g,
  Qi =
    /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi,
  Kb =
    /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i
function Js(e) {
  return typeof e == 'string'
}
const Gs = {
    test: (e) => typeof e == 'number',
    parse: parseFloat,
    transform: (e) => e
  },
  Qs = Object.assign(Object.assign({}, Gs), { transform: Xu(0, 1) }),
  Yr = Object.assign(Object.assign({}, Gs), { default: 1 }),
  Xi = (e) => ({
    test: (t) => Js(t) && t.endsWith(e) && t.split(' ').length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`
  }),
  kn = Xi('deg'),
  Xs = Xi('%'),
  ee = Xi('px'),
  Zu = Object.assign(Object.assign({}, Xs), {
    parse: (e) => Xs.parse(e) / 100,
    transform: (e) => Xs.transform(e * 100)
  }),
  Zi = (e, t) => (n) =>
    Boolean(
      (Js(n) && Kb.test(n) && n.startsWith(e)) ||
        (t && Object.prototype.hasOwnProperty.call(n, t))
    ),
  ef = (e, t, n) => (s) => {
    if (!Js(s)) return s
    const [r, o, i, l] = s.match(Ys)
    return {
      [e]: parseFloat(r),
      [t]: parseFloat(o),
      [n]: parseFloat(i),
      alpha: l !== void 0 ? parseFloat(l) : 1
    }
  },
  $n = {
    test: Zi('hsl', 'hue'),
    parse: ef('hue', 'saturation', 'lightness'),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: s = 1 }) =>
      'hsla(' +
      Math.round(e) +
      ', ' +
      Xs.transform(qs(t)) +
      ', ' +
      Xs.transform(qs(n)) +
      ', ' +
      qs(Qs.transform(s)) +
      ')'
  },
  Wb = Xu(0, 255),
  el = Object.assign(Object.assign({}, Gs), {
    transform: (e) => Math.round(Wb(e))
  }),
  nn = {
    test: Zi('rgb', 'red'),
    parse: ef('red', 'green', 'blue'),
    transform: ({ red: e, green: t, blue: n, alpha: s = 1 }) =>
      'rgba(' +
      el.transform(e) +
      ', ' +
      el.transform(t) +
      ', ' +
      el.transform(n) +
      ', ' +
      qs(Qs.transform(s)) +
      ')'
  }
function qb(e) {
  let t = '',
    n = '',
    s = '',
    r = ''
  return (
    e.length > 5
      ? ((t = e.substr(1, 2)),
        (n = e.substr(3, 2)),
        (s = e.substr(5, 2)),
        (r = e.substr(7, 2)))
      : ((t = e.substr(1, 1)),
        (n = e.substr(2, 1)),
        (s = e.substr(3, 1)),
        (r = e.substr(4, 1)),
        (t += t),
        (n += n),
        (s += s),
        (r += r)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(s, 16),
      alpha: r ? parseInt(r, 16) / 255 : 1
    }
  )
}
const tl = { test: Zi('#'), parse: qb, transform: nn.transform },
  Ge = {
    test: (e) => nn.test(e) || tl.test(e) || $n.test(e),
    parse: (e) =>
      nn.test(e) ? nn.parse(e) : $n.test(e) ? $n.parse(e) : tl.parse(e),
    transform: (e) =>
      Js(e) ? e : e.hasOwnProperty('red') ? nn.transform(e) : $n.transform(e)
  },
  tf = '${c}',
  nf = '${n}'
function Yb(e) {
  var t, n, s, r
  return (
    isNaN(e) &&
    Js(e) &&
    ((n = (t = e.match(Ys)) === null || t === void 0 ? void 0 : t.length) !==
      null && n !== void 0
      ? n
      : 0) +
      ((r = (s = e.match(Qi)) === null || s === void 0 ? void 0 : s.length) !==
        null && r !== void 0
        ? r
        : 0) >
      0
  )
}
function sf(e) {
  typeof e == 'number' && (e = `${e}`)
  const t = []
  let n = 0
  const s = e.match(Qi)
  s && ((n = s.length), (e = e.replace(Qi, tf)), t.push(...s.map(Ge.parse)))
  const r = e.match(Ys)
  return (
    r && ((e = e.replace(Ys, nf)), t.push(...r.map(Gs.parse))),
    { values: t, numColors: n, tokenised: e }
  )
}
function rf(e) {
  return sf(e).values
}
function of(e) {
  const { values: t, numColors: n, tokenised: s } = sf(e),
    r = t.length
  return (o) => {
    let i = s
    for (let l = 0; l < r; l++)
      i = i.replace(l < n ? tf : nf, l < n ? Ge.transform(o[l]) : qs(o[l]))
    return i
  }
}
const Jb = (e) => (typeof e == 'number' ? 0 : e)
function Gb(e) {
  const t = rf(e)
  return of(e)(t.map(Jb))
}
const Zs = {
    test: Yb,
    parse: rf,
    createTransformer: of,
    getAnimatableNone: Gb
  },
  Qb = new Set(['brightness', 'contrast', 'saturate', 'opacity'])
function Xb(e) {
  let [t, n] = e.slice(0, -1).split('(')
  if (t === 'drop-shadow') return e
  const [s] = n.match(Ys) || []
  if (!s) return e
  const r = n.replace(s, '')
  let o = Qb.has(t) ? 1 : 0
  return s !== n && (o *= 100), t + '(' + o + r + ')'
}
const Zb = /([a-z-]*)\(.*?\)/g,
  nl = Object.assign(Object.assign({}, Zs), {
    getAnimatableNone: (e) => {
      const t = e.match(Zb)
      return t ? t.map(Xb).join(' ') : e
    }
  })
function sl(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
      ? t
      : n < 2 / 3
      ? e + (t - e) * (2 / 3 - n) * 6
      : e
  )
}
function lf({ hue: e, saturation: t, lightness: n, alpha: s }) {
  ;(e /= 360), (t /= 100), (n /= 100)
  let r = 0,
    o = 0,
    i = 0
  if (!t) r = o = i = n
  else {
    const l = n < 0.5 ? n * (1 + t) : n + t - n * t,
      a = 2 * n - l
    ;(r = sl(a, l, e + 1 / 3)), (o = sl(a, l, e)), (i = sl(a, l, e - 1 / 3))
  }
  return {
    red: Math.round(r * 255),
    green: Math.round(o * 255),
    blue: Math.round(i * 255),
    alpha: s
  }
}
const ew = (e, t, n) => {
    const s = e * e,
      r = t * t
    return Math.sqrt(Math.max(0, n * (r - s) + s))
  },
  tw = [tl, nn, $n],
  af = (e) => tw.find((t) => t.test(e)),
  cf = (e, t) => {
    let n = af(e),
      s = af(t),
      r = n.parse(e),
      o = s.parse(t)
    n === $n && ((r = lf(r)), (n = nn)), s === $n && ((o = lf(o)), (s = nn))
    const i = Object.assign({}, r)
    return (l) => {
      for (const a in i) a !== 'alpha' && (i[a] = ew(r[a], o[a], l))
      return (i.alpha = Gi(r.alpha, o.alpha, l)), n.transform(i)
    }
  },
  nw = (e) => typeof e == 'number',
  sw = (e, t) => (n) => t(e(n)),
  uf = (...e) => e.reduce(sw)
function ff(e, t) {
  return nw(e) ? (n) => Gi(e, t, n) : Ge.test(e) ? cf(e, t) : pf(e, t)
}
const df = (e, t) => {
    const n = [...e],
      s = n.length,
      r = e.map((o, i) => ff(o, t[i]))
    return (o) => {
      for (let i = 0; i < s; i++) n[i] = r[i](o)
      return n
    }
  },
  rw = (e, t) => {
    const n = Object.assign(Object.assign({}, e), t),
      s = {}
    for (const r in n)
      e[r] !== void 0 && t[r] !== void 0 && (s[r] = ff(e[r], t[r]))
    return (r) => {
      for (const o in s) n[o] = s[o](r)
      return n
    }
  }
function hf(e) {
  const t = Zs.parse(e),
    n = t.length
  let s = 0,
    r = 0,
    o = 0
  for (let i = 0; i < n; i++)
    s || typeof t[i] == 'number' ? s++ : t[i].hue !== void 0 ? o++ : r++
  return { parsed: t, numNumbers: s, numRGB: r, numHSL: o }
}
const pf = (e, t) => {
    const n = Zs.createTransformer(t),
      s = hf(e),
      r = hf(t)
    return s.numHSL === r.numHSL &&
      s.numRGB === r.numRGB &&
      s.numNumbers >= r.numNumbers
      ? uf(df(s.parsed, r.parsed), n)
      : (i) => `${i > 0 ? t : e}`
  },
  ow = (e, t) => (n) => Gi(e, t, n)
function iw(e) {
  if (typeof e == 'number') return ow
  if (typeof e == 'string') return Ge.test(e) ? cf : pf
  if (Array.isArray(e)) return df
  if (typeof e == 'object') return rw
}
function lw(e, t, n) {
  const s = [],
    r = n || iw(e[0]),
    o = e.length - 1
  for (let i = 0; i < o; i++) {
    let l = r(e[i], e[i + 1])
    if (t) {
      const a = Array.isArray(t) ? t[i] : t
      l = uf(a, l)
    }
    s.push(l)
  }
  return s
}
function aw([e, t], [n]) {
  return (s) => n(Qu(e, t, s))
}
function cw(e, t) {
  const n = e.length,
    s = n - 1
  return (r) => {
    let o = 0,
      i = !1
    if ((r <= e[0] ? (i = !0) : r >= e[s] && ((o = s - 1), (i = !0)), !i)) {
      let a = 1
      for (; a < n && !(e[a] > r || a === s); a++);
      o = a - 1
    }
    const l = Qu(e[o], e[o + 1], r)
    return t[o](l)
  }
}
function mf(e, t, { clamp: n = !0, ease: s, mixer: r } = {}) {
  const o = e.length
  qu(o === t.length),
    qu(!s || !Array.isArray(s) || s.length === o - 1),
    e[0] > e[o - 1] &&
      ((e = [].concat(e)), (t = [].concat(t)), e.reverse(), t.reverse())
  const i = lw(t, s, r),
    l = o === 2 ? aw(e, i) : cw(e, i)
  return n ? (a) => l(Wi(e[0], e[o - 1], a)) : l
}
const Jr = (e) => (t) => 1 - e(1 - t),
  rl = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
  uw = (e) => (t) => Math.pow(t, e),
  gf = (e) => (t) => t * t * ((e + 1) * t - e),
  fw = (e) => {
    const t = gf(e)
    return (n) =>
      (n *= 2) < 1 ? 0.5 * t(n) : 0.5 * (2 - Math.pow(2, -10 * (n - 1)))
  },
  vf = 1.525,
  dw = 4 / 11,
  hw = 8 / 11,
  pw = 9 / 10,
  yf = (e) => e,
  ol = uw(2),
  mw = Jr(ol),
  _f = rl(ol),
  bf = (e) => 1 - Math.sin(Math.acos(e)),
  wf = Jr(bf),
  gw = rl(wf),
  il = gf(vf),
  vw = Jr(il),
  yw = rl(il),
  _w = fw(vf),
  bw = 4356 / 361,
  ww = 35442 / 1805,
  xw = 16061 / 1805,
  Gr = (e) => {
    if (e === 1 || e === 0) return e
    const t = e * e
    return e < dw
      ? 7.5625 * t
      : e < hw
      ? 9.075 * t - 9.9 * e + 3.4
      : e < pw
      ? bw * t - ww * e + xw
      : 10.8 * e * e - 20.52 * e + 10.72
  },
  Ew = Jr(Gr),
  Sw = (e) => (e < 0.5 ? 0.5 * (1 - Gr(1 - e * 2)) : 0.5 * Gr(e * 2 - 1) + 0.5)
function kw(e, t) {
  return e.map(() => t || _f).splice(0, e.length - 1)
}
function $w(e) {
  const t = e.length
  return e.map((n, s) => (s !== 0 ? s / (t - 1) : 0))
}
function Cw(e, t) {
  return e.map((n) => n * t)
}
function Qr({ from: e = 0, to: t = 1, ease: n, offset: s, duration: r = 300 }) {
  const o = { done: !1, value: e },
    i = Array.isArray(t) ? t : [e, t],
    l = Cw(s && s.length === i.length ? s : $w(i), r)
  function a() {
    return mf(l, i, { ease: Array.isArray(n) ? n : kw(i, n) })
  }
  let c = a()
  return {
    next: (u) => ((o.value = c(u)), (o.done = u >= r), o),
    flipTarget: () => {
      i.reverse(), (c = a())
    }
  }
}
function Aw({
  velocity: e = 0,
  from: t = 0,
  power: n = 0.8,
  timeConstant: s = 350,
  restDelta: r = 0.5,
  modifyTarget: o
}) {
  const i = { done: !1, value: t }
  let l = n * e
  const a = t + l,
    c = o === void 0 ? a : o(a)
  return (
    c !== a && (l = c - t),
    {
      next: (u) => {
        const f = -l * Math.exp(-u / s)
        return (i.done = !(f > r || f < -r)), (i.value = i.done ? c : c + f), i
      },
      flipTarget: () => {}
    }
  )
}
const xf = { keyframes: Qr, spring: Ji, decay: Aw }
function Ow(e) {
  if (Array.isArray(e.to)) return Qr
  if (xf[e.type]) return xf[e.type]
  const t = new Set(Object.keys(e))
  return t.has('ease') || (t.has('duration') && !t.has('dampingRatio'))
    ? Qr
    : t.has('dampingRatio') ||
      t.has('stiffness') ||
      t.has('mass') ||
      t.has('damping') ||
      t.has('restSpeed') ||
      t.has('restDelta')
    ? Ji
    : Qr
}
function Ef(e, t, n = 0) {
  return e - t - n
}
function Mw(e, t, n = 0, s = !0) {
  return s ? Ef(t + -e, t, n) : t - (e - t) + n
}
function Pw(e, t, n, s) {
  return s ? e >= t + n : e <= -n
}
const Tw = (e) => {
  const t = ({ delta: n }) => e(n)
  return { start: () => Ki.update(t, !0), stop: () => Tb.update(t) }
}
function Sf(e) {
  var t,
    n,
    {
      from: s,
      autoplay: r = !0,
      driver: o = Tw,
      elapsed: i = 0,
      repeat: l = 0,
      repeatType: a = 'loop',
      repeatDelay: c = 0,
      onPlay: u,
      onStop: f,
      onComplete: d,
      onRepeat: m,
      onUpdate: v
    } = e,
    E = Wu(e, [
      'from',
      'autoplay',
      'driver',
      'elapsed',
      'repeat',
      'repeatType',
      'repeatDelay',
      'onPlay',
      'onStop',
      'onComplete',
      'onRepeat',
      'onUpdate'
    ])
  let { to: w } = E,
    A,
    _ = 0,
    b = E.duration,
    S,
    L = !1,
    N = !0,
    j
  const J = Ow(E)
  ;((n = (t = J).needsInterpolation) === null || n === void 0
    ? void 0
    : n.call(t, s, w)) &&
    ((j = mf([0, 100], [s, w], { clamp: !1 })), (s = 0), (w = 100))
  const ie = J(Object.assign(Object.assign({}, E), { from: s, to: w }))
  function le() {
    _++,
      a === 'reverse'
        ? ((N = _ % 2 == 0), (i = Mw(i, b, c, N)))
        : ((i = Ef(i, b, c)), a === 'mirror' && ie.flipTarget()),
      (L = !1),
      m && m()
  }
  function oe() {
    A.stop(), d && d()
  }
  function Ae(ze) {
    if ((N || (ze = -ze), (i += ze), !L)) {
      const Be = ie.next(Math.max(0, i))
      ;(S = Be.value), j && (S = j(S)), (L = N ? Be.done : i <= 0)
    }
    v == null || v(S),
      L &&
        (_ === 0 && (b != null || (b = i)),
        _ < l ? Pw(i, b, c, N) && le() : oe())
  }
  function Re() {
    u == null || u(), (A = o(Ae)), A.start()
  }
  return (
    r && Re(),
    {
      stop: () => {
        f == null || f(), A.stop()
      }
    }
  )
}
function kf(e, t) {
  return t ? e * (1e3 / t) : 0
}
function Iw({
  from: e = 0,
  velocity: t = 0,
  min: n,
  max: s,
  power: r = 0.8,
  timeConstant: o = 750,
  bounceStiffness: i = 500,
  bounceDamping: l = 10,
  restDelta: a = 1,
  modifyTarget: c,
  driver: u,
  onUpdate: f,
  onComplete: d,
  onStop: m
}) {
  let v
  function E(b) {
    return (n !== void 0 && b < n) || (s !== void 0 && b > s)
  }
  function w(b) {
    return n === void 0
      ? s
      : s === void 0 || Math.abs(n - b) < Math.abs(s - b)
      ? n
      : s
  }
  function A(b) {
    v == null || v.stop(),
      (v = Sf(
        Object.assign(Object.assign({}, b), {
          driver: u,
          onUpdate: (S) => {
            var L
            f == null || f(S),
              (L = b.onUpdate) === null || L === void 0 || L.call(b, S)
          },
          onComplete: d,
          onStop: m
        })
      ))
  }
  function _(b) {
    A(
      Object.assign(
        { type: 'spring', stiffness: i, damping: l, restDelta: a },
        b
      )
    )
  }
  if (E(e)) _({ from: e, velocity: t, to: w(e) })
  else {
    let b = r * t + e
    typeof c != 'undefined' && (b = c(b))
    const S = w(b),
      L = S === n ? -1 : 1
    let N, j
    const J = (ie) => {
      ;(N = j),
        (j = ie),
        (t = kf(ie - N, Ku().delta)),
        ((L === 1 && ie > S) || (L === -1 && ie < S)) &&
          _({ from: ie, to: S, velocity: t })
    }
    A({
      type: 'decay',
      from: e,
      velocity: t,
      timeConstant: o,
      power: r,
      restDelta: a,
      modifyTarget: c,
      onUpdate: E(b) ? J : void 0
    })
  }
  return { stop: () => (v == null ? void 0 : v.stop()) }
}
const $f = (e, t) => 1 - 3 * t + 3 * e,
  Cf = (e, t) => 3 * t - 6 * e,
  Af = (e) => 3 * e,
  Xr = (e, t, n) => (($f(t, n) * e + Cf(t, n)) * e + Af(t)) * e,
  Of = (e, t, n) => 3 * $f(t, n) * e * e + 2 * Cf(t, n) * e + Af(t),
  Rw = 1e-7,
  jw = 10
function Lw(e, t, n, s, r) {
  let o,
    i,
    l = 0
  do (i = t + (n - t) / 2), (o = Xr(i, s, r) - e), o > 0 ? (n = i) : (t = i)
  while (Math.abs(o) > Rw && ++l < jw)
  return i
}
const Fw = 8,
  Nw = 0.001
function Dw(e, t, n, s) {
  for (let r = 0; r < Fw; ++r) {
    const o = Of(t, n, s)
    if (o === 0) return t
    t -= (Xr(t, n, s) - e) / o
  }
  return t
}
const Zr = 11,
  eo = 1 / (Zr - 1)
function Hw(e, t, n, s) {
  if (e === t && n === s) return yf
  const r = new Float32Array(Zr)
  for (let i = 0; i < Zr; ++i) r[i] = Xr(i * eo, e, n)
  function o(i) {
    let l = 0,
      a = 1
    const c = Zr - 1
    for (; a !== c && r[a] <= i; ++a) l += eo
    --a
    const u = (i - r[a]) / (r[a + 1] - r[a]),
      f = l + u * eo,
      d = Of(f, e, n)
    return d >= Nw ? Dw(i, f, e, n) : d === 0 ? f : Lw(i, l, l + eo, e, n)
  }
  return (i) => (i === 0 || i === 1 ? i : Xr(o(i), t, s))
}
const ll = {}
class zw {
  constructor() {
    this.subscriptions = new Set()
  }
  add(t) {
    return this.subscriptions.add(t), () => void this.subscriptions.delete(t)
  }
  notify(t, n, s) {
    if (!!this.subscriptions.size)
      for (const r of this.subscriptions) r(t, n, s)
  }
  clear() {
    this.subscriptions.clear()
  }
}
const Mf = (e) => !isNaN(parseFloat(e))
class Bw {
  constructor(t) {
    ;(this.timeDelta = 0),
      (this.lastUpdated = 0),
      (this.updateSubscribers = new zw()),
      (this.canTrackVelocity = !1),
      (this.updateAndNotify = (n) => {
        ;(this.prev = this.current), (this.current = n)
        const { delta: s, timestamp: r } = Ku()
        this.lastUpdated !== r &&
          ((this.timeDelta = s), (this.lastUpdated = r)),
          Ki.postRender(this.scheduleVelocityCheck),
          this.updateSubscribers.notify(this.current)
      }),
      (this.scheduleVelocityCheck = () => Ki.postRender(this.velocityCheck)),
      (this.velocityCheck = ({ timestamp: n }) => {
        this.canTrackVelocity || (this.canTrackVelocity = Mf(this.current)),
          n !== this.lastUpdated && (this.prev = this.current)
      }),
      (this.prev = this.current = t),
      (this.canTrackVelocity = Mf(this.current))
  }
  onChange(t) {
    return this.updateSubscribers.add(t)
  }
  clearListeners() {
    this.updateSubscribers.clear()
  }
  set(t) {
    this.updateAndNotify(t)
  }
  get() {
    return this.current
  }
  getPrevious() {
    return this.prev
  }
  getVelocity() {
    return this.canTrackVelocity
      ? kf(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta)
      : 0
  }
  start(t) {
    return (
      this.stop(),
      new Promise((n) => {
        const { stop: s } = t(n)
        this.stopAnimation = s
      }).then(() => this.clearAnimation())
    )
  }
  stop() {
    this.stopAnimation && this.stopAnimation(), this.clearAnimation()
  }
  isAnimating() {
    return !!this.stopAnimation
  }
  clearAnimation() {
    this.stopAnimation = null
  }
  destroy() {
    this.updateSubscribers.clear(), this.stop()
  }
}
function Vw(e) {
  return new Bw(e)
}
const { isArray: Uw } = Array
function Kw() {
  const e = Z({}),
    t = (s) => {
      const r = (o) => {
        !e.value[o] || (e.value[o].stop(), e.value[o].destroy(), kp(e.value, o))
      }
      s ? (Uw(s) ? s.forEach(r) : r(s)) : Object.keys(e.value).forEach(r)
    },
    n = (s, r, o) => {
      if (e.value[s]) return e.value[s]
      const i = Vw(r)
      return (
        i.onChange((l) => {
          nt(o, s, l)
        }),
        nt(e.value, s, i),
        i
      )
    }
  return Xo(t), { motionValues: e, get: n, stop: t }
}
const Ww = (e) => Array.isArray(e),
  Cn = () => ({
    type: 'spring',
    stiffness: 500,
    damping: 25,
    restDelta: 0.5,
    restSpeed: 10
  }),
  al = (e) => ({
    type: 'spring',
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restDelta: 0.01,
    restSpeed: 10
  }),
  qw = (e) => ({
    type: 'spring',
    stiffness: 550,
    damping: e === 0 ? 100 : 30,
    restDelta: 0.01,
    restSpeed: 10
  }),
  cl = () => ({ type: 'keyframes', ease: 'linear', duration: 300 }),
  Yw = (e) => ({ type: 'keyframes', duration: 800, values: e }),
  Pf = {
    default: qw,
    x: Cn,
    y: Cn,
    z: Cn,
    rotate: Cn,
    rotateX: Cn,
    rotateY: Cn,
    rotateZ: Cn,
    scaleX: al,
    scaleY: al,
    scale: al,
    backgroundColor: cl,
    color: cl,
    opacity: cl
  },
  Tf = (e, t) => {
    let n
    return Ww(t) ? (n = Yw) : (n = Pf[e] || Pf.default), de({ to: t }, n(t))
  },
  If = Ue(de({}, Gs), { transform: Math.round }),
  Rf = {
    color: Ge,
    backgroundColor: Ge,
    outlineColor: Ge,
    fill: Ge,
    stroke: Ge,
    borderColor: Ge,
    borderTopColor: Ge,
    borderRightColor: Ge,
    borderBottomColor: Ge,
    borderLeftColor: Ge,
    borderWidth: ee,
    borderTopWidth: ee,
    borderRightWidth: ee,
    borderBottomWidth: ee,
    borderLeftWidth: ee,
    borderRadius: ee,
    radius: ee,
    borderTopLeftRadius: ee,
    borderTopRightRadius: ee,
    borderBottomRightRadius: ee,
    borderBottomLeftRadius: ee,
    width: ee,
    maxWidth: ee,
    height: ee,
    maxHeight: ee,
    size: ee,
    top: ee,
    right: ee,
    bottom: ee,
    left: ee,
    padding: ee,
    paddingTop: ee,
    paddingRight: ee,
    paddingBottom: ee,
    paddingLeft: ee,
    margin: ee,
    marginTop: ee,
    marginRight: ee,
    marginBottom: ee,
    marginLeft: ee,
    rotate: kn,
    rotateX: kn,
    rotateY: kn,
    rotateZ: kn,
    scale: Yr,
    scaleX: Yr,
    scaleY: Yr,
    scaleZ: Yr,
    skew: kn,
    skewX: kn,
    skewY: kn,
    distance: ee,
    translateX: ee,
    translateY: ee,
    translateZ: ee,
    x: ee,
    y: ee,
    z: ee,
    perspective: ee,
    transformPerspective: ee,
    opacity: Qs,
    originX: Zu,
    originY: Zu,
    originZ: ee,
    zIndex: If,
    filter: nl,
    WebkitFilter: nl,
    fillOpacity: Qs,
    strokeOpacity: Qs,
    numOctaves: If
  },
  ul = (e) => Rf[e],
  jf = (e, t) => (t && typeof e == 'number' && t.transform ? t.transform(e) : e)
function Jw(e, t) {
  let n = ul(e)
  return (
    n !== nl && (n = Zs), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  )
}
const Gw = {
    linear: yf,
    easeIn: ol,
    easeInOut: _f,
    easeOut: mw,
    circIn: bf,
    circInOut: gw,
    circOut: wf,
    backIn: il,
    backInOut: yw,
    backOut: vw,
    anticipate: _w,
    bounceIn: Ew,
    bounceInOut: Sw,
    bounceOut: Gr
  },
  Lf = (e) => {
    if (Array.isArray(e)) {
      const [t, n, s, r] = e
      return Hw(t, n, s, r)
    } else if (typeof e == 'string') return Gw[e]
    return e
  },
  Qw = (e) => Array.isArray(e) && typeof e[0] != 'number',
  Ff = (e, t) =>
    e === 'zIndex'
      ? !1
      : !!(
          typeof t == 'number' ||
          Array.isArray(t) ||
          (typeof t == 'string' && Zs.test(t) && !t.startsWith('url('))
        )
function Xw(e) {
  return (
    Array.isArray(e.to) &&
      e.to[0] === null &&
      ((e.to = [...e.to]), (e.to[0] = e.from)),
    e
  )
}
function Zw(r) {
  var o = r,
    { ease: e, times: t, delay: n } = o,
    s = to(o, ['ease', 'times', 'delay'])
  const i = de({}, s)
  return (
    t && (i.offset = t),
    e && (i.ease = Qw(e) ? e.map(Lf) : Lf(e)),
    n && (i.elapsed = -n),
    i
  )
}
function ex(e, t, n) {
  return (
    Array.isArray(t.to) && (e.duration || (e.duration = 800)),
    Xw(t),
    tx(e) || (e = de(de({}, e), Tf(n, t.to))),
    de(de({}, t), Zw(e))
  )
}
function tx(i) {
  var l = i,
    { delay: e, repeat: t, repeatType: n, repeatDelay: s, from: r } = l,
    o = to(l, ['delay', 'repeat', 'repeatType', 'repeatDelay', 'from'])
  return !!Object.keys(o).length
}
function nx(e, t) {
  return e[t] || e.default || e
}
function sx(e, t, n, s, r) {
  const o = nx(s, e)
  let i = o.from === null || o.from === void 0 ? t.get() : o.from
  const l = Ff(e, n)
  i === 'none' && l && typeof n == 'string' && (i = Jw(e, n))
  const a = Ff(e, i)
  function c(f) {
    const d = {
      from: i,
      to: n,
      velocity: s.velocity ? s.velocity : t.getVelocity(),
      onUpdate: (m) => t.set(m)
    }
    return o.type === 'inertia' || o.type === 'decay'
      ? Iw(de(de({}, d), o))
      : Sf(
          Ue(de({}, ex(o, d, e)), {
            onUpdate: (m) => {
              d.onUpdate(m), o.onUpdate && o.onUpdate(m)
            },
            onComplete: () => {
              s.onComplete && s.onComplete(), r && r(), f && f()
            }
          })
        )
  }
  function u(f) {
    return (
      t.set(n),
      s.onComplete && s.onComplete(),
      r && r(),
      f && f(),
      { stop: () => {} }
    )
  }
  return !a || !l || o.type === !1 ? u : c
}
function rx() {
  const { motionValues: e, stop: t, get: n } = Kw()
  return {
    motionValues: e,
    stop: t,
    push: (r, o, i, l = {}, a) => {
      const c = i[r],
        u = n(r, c, i)
      if (l && l.immediate) {
        u.set(o)
        return
      }
      const f = sx(r, u, o, l, a)
      u.start(f)
    }
  }
}
function ox(e, t = {}, { motionValues: n, push: s, stop: r } = rx()) {
  const o = C(t),
    i = Z(!1),
    l = ae(
      n,
      (d) => {
        i.value = Object.values(d).filter((m) => m.isAnimating()).length > 0
      },
      { immediate: !0, deep: !0 }
    ),
    a = (d) => {
      if (!o || !o[d]) throw new Error(`The variant ${d} does not exist.`)
      return o[d]
    },
    c = (d) => (
      typeof d == 'string' && (d = a(d)),
      Promise.all(
        Object.entries(d).map(([m, v]) => {
          if (m !== 'transition')
            return new Promise((E) => {
              s(m, v, e, d.transition || Tf(m, d[m]), E)
            })
        })
      )
    )
  return {
    isAnimating: i,
    apply: c,
    set: (d) => {
      let m = Qo(d) ? d : a(d)
      Object.entries(m).forEach(([v, E]) => {
        v !== 'transition' && s(v, E, e, { immediate: !0 })
      })
    },
    stopTransitions: () => {
      l(), r()
    },
    leave: async (d) => {
      let m
      if (
        (o &&
          (o.leave && (m = o.leave), !o.leave && o.initial && (m = o.initial)),
        !m)
      ) {
        d()
        return
      }
      await c(m), d()
    }
  }
}
const fl = typeof window != 'undefined',
  ix = () => fl && window.onpointerdown === null,
  lx = () => fl && window.ontouchstart === null,
  ax = () => fl && window.onmousedown === null
function cx({ target: e, state: t, variants: n, apply: s }) {
  const r = C(n),
    o = [],
    i = (...v) => {
      const E = We.apply(null, v)
      return o.push(E), E
    },
    l = Z(!1),
    a = Z(!1),
    c = Z(!1),
    u = D(() => {
      let v = []
      return (
        r &&
          (r.hovered && (v = [...v, ...Object.keys(r.hovered)]),
          r.tapped && (v = [...v, ...Object.keys(r.tapped)]),
          r.focused && (v = [...v, ...Object.keys(r.focused)])),
        v
      )
    }),
    f = D(() => {
      const v = {}
      Object.assign(v, t.value),
        l.value && r.hovered && Object.assign(v, r.hovered),
        a.value && r.tapped && Object.assign(v, r.tapped),
        c.value && r.focused && Object.assign(v, r.focused)
      for (const E in v) u.value.includes(E) || delete v[E]
      return v
    })
  r.hovered &&
    (i(e, 'mouseenter', () => {
      l.value = !0
    }),
    i(e, 'mouseleave', () => {
      ;(l.value = !1), (a.value = !1)
    }),
    i(e, 'mouseout', () => {
      ;(l.value = !1), (a.value = !1)
    })),
    r.tapped &&
      (ax() &&
        (i(e, 'mousedown', () => {
          a.value = !0
        }),
        i(e, 'mouseup', () => {
          a.value = !1
        })),
      ix() &&
        (i(e, 'pointerdown', () => {
          a.value = !0
        }),
        i(e, 'pointerup', () => {
          a.value = !1
        })),
      lx() &&
        (i(e, 'touchstart', () => {
          a.value = !0
        }),
        i(e, 'touchend', () => {
          a.value = !1
        }))),
    r.focused &&
      (i(e, 'focus', () => {
        c.value = !0
      }),
      i(e, 'blur', () => {
        c.value = !1
      }))
  const d = ae(f, s)
  return {
    stop: () => {
      o.forEach((v) => v()), d()
    }
  }
}
function ux({ set: e, target: t, variants: n, variant: s }) {
  const r = C(n)
  return {
    stop: ae(
      () => t,
      () => {
        !r || (r.initial && e('initial'), r.enter && (s.value = 'enter'))
      },
      { immediate: !0, flush: 'pre' }
    )
  }
}
function fx({ state: e, apply: t }) {
  return {
    stop: ae(
      e,
      (s) => {
        s && t(s)
      },
      { immediate: !0 }
    )
  }
}
function dx({ target: e, variants: t, variant: n }) {
  const s = C(t)
  let r = Kt
  if (s && s.visible) {
    const { stop: o } = im(e, ([{ isIntersecting: i }]) => {
      i ? (n.value = 'visible') : (n.value = 'initial')
    })
    r = o
  }
  return { stop: r }
}
function hx(
  e,
  t = {
    syncVariants: !0,
    lifeCycleHooks: !0,
    visibilityHooks: !0,
    eventListeners: !0
  }
) {
  const n = Z([])
  if (t.lifeCycleHooks) {
    const { stop: r } = ux(e)
    n.value.push(r)
  }
  if (t.syncVariants) {
    const { stop: r } = fx(e)
    n.value.push(r)
  }
  if (t.visibilityHooks) {
    const { stop: r } = dx(e)
    n.value.push(r)
  }
  if (t.eventListeners) {
    const { stop: r } = cx(e)
    n.value.push(r)
  }
  const s = () => n.value.forEach((r) => r())
  return Xo(s), { stop: s }
}
function px(e = {}) {
  const t = Te(de({}, e)),
    n = Z({})
  return (
    ae(
      t,
      () => {
        const s = {}
        for (const [r, o] of Object.entries(t)) {
          const i = ul(r),
            l = jf(o, i)
          s[r] = l
        }
        n.value = s
      },
      { immediate: !0, deep: !0 }
    ),
    { state: t, style: n }
  )
}
const mx = ['', 'X', 'Y', 'Z'],
  gx = ['perspective', 'translate', 'scale', 'rotate', 'skew'],
  Nf = ['transformPerspective', 'x', 'y', 'z']
gx.forEach((e) => {
  mx.forEach((t) => {
    const n = e + t
    Nf.push(n)
  })
})
const vx = new Set(Nf)
function Df(e) {
  return vx.has(e)
}
const yx = new Set(['originX', 'originY', 'originZ'])
function _x(e) {
  return yx.has(e)
}
function bx(e, t) {
  let n, s
  const { state: r, style: o } = px(),
    i = ae(
      () => Rt(e),
      (c) => {
        if (!!c) {
          s = c
          for (const u of Object.keys(Rf))
            c.style[u] === null ||
              c.style[u] === '' ||
              Df(u) ||
              _x(u) ||
              nt(r, u, c.style[u])
          n && Object.entries(n).forEach(([u, f]) => nt(c.style, u, f)),
            t && t(r)
        }
      },
      { immediate: !0 }
    ),
    l = ae(
      o,
      (c) => {
        if (!s) {
          n = c
          return
        }
        for (const u in c) nt(s.style, u, c[u])
      },
      { immediate: !0 }
    )
  return {
    style: r,
    stop: () => {
      ;(s = void 0), (n = void 0), i(), l()
    }
  }
}
const wx = { x: 'translateX', y: 'translateY', z: 'translateZ' }
function xx(e = {}, t = !0) {
  const n = Te(de({}, e)),
    s = Z('')
  return (
    ae(
      n,
      (r) => {
        let o = '',
          i = !1
        t &&
          (r.x || r.y || r.z) &&
          ((o += `translate3d(${[r.x || 0, r.y || 0, r.z || 0]
            .map(ee.transform)
            .join(',')}) `),
          (i = !0))
        for (const [l, a] of Object.entries(r)) {
          if (t && (l === 'x' || l === 'y' || l === 'z')) continue
          const c = ul(l),
            u = jf(a, c)
          o += `${wx[l] || l}(${u}) `
        }
        t && !i && (o += 'translateZ(0px) '), (s.value = o.trim())
      },
      { immediate: !0, deep: !0 }
    ),
    { state: n, transform: s }
  )
}
function Ex(e) {
  const t = e.trim().split(/\) |\)/)
  if (t.length === 1) return {}
  const n = (s) =>
    s.endsWith('px') || s.endsWith('deg')
      ? parseFloat(s)
      : isNaN(Number(s))
      ? Number(s)
      : s
  return t.reduce((s, r) => {
    if (!r) return s
    const [o, i] = r.split('('),
      a = i
        .split(',')
        .map((u) => n(u.endsWith(')') ? u.replace(')', '') : u.trim())),
      c = a.length === 1 ? a[0] : a
    return Ue(de({}, s), { [o]: c })
  }, {})
}
function Sx(e, t) {
  Object.entries(Ex(t)).forEach(([n, s]) => {
    s = parseFloat(s)
    const r = ['x', 'y', 'z']
    if (n === 'translate3d') {
      s.forEach((o, i) => {
        nt(e, r[i], o)
      })
      return
    }
    if (n === 'translateX') {
      nt(e, 'x', s)
      return
    }
    if (n === 'translateY') {
      nt(e, 'y', s)
      return
    }
    if (n === 'translateZ') {
      nt(e, 'z', s)
      return
    }
    nt(e, n, s)
  })
}
function kx(e, t) {
  let n, s
  const { state: r, transform: o } = xx(),
    i = ae(
      () => Rt(e),
      (c) => {
        !c ||
          ((s = c),
          c.style.transform && Sx(r, c.style.transform),
          n && (c.style.transform = n),
          t && t(r))
      },
      { immediate: !0 }
    ),
    l = ae(
      o,
      (c) => {
        if (!s) {
          n = c
          return
        }
        s.style.transform = c
      },
      { immediate: !0 }
    )
  return {
    transform: r,
    stop: () => {
      ;(n = void 0), (s = void 0), i(), l()
    }
  }
}
function $x(e, t) {
  const n = Te({}),
    s = (f) => {
      Object.entries(f).forEach(([d, m]) => {
        nt(n, d, m)
      })
    },
    { style: r, stop: o } = bx(e, s),
    { transform: i, stop: l } = kx(e, s),
    a = ae(
      n,
      (f) => {
        Object.entries(f).forEach(([d, m]) => {
          const v = Df(d) ? i : r
          ;(v[d] && v[d] === m) || nt(v, d, m)
        })
      },
      { immediate: !0, deep: !0 }
    ),
    c = ae(
      () => Rt(e),
      (f) => {
        !f || (t && s(t))
      },
      { immediate: !0 }
    )
  return {
    motionProperties: n,
    style: r,
    transform: i,
    stop: () => {
      o(), l(), a(), c()
    }
  }
}
function Cx(e = {}) {
  const t = C(e),
    n = Z()
  return {
    state: D(() => {
      if (!!n.value) return t[n.value]
    }),
    variant: n
  }
}
function Ax(e, t = {}, n) {
  const { motionProperties: s, stop: r } = $x(e),
    { variant: o, state: i } = Cx(t),
    l = ox(s, t),
    a = Ue(
      de(
        { target: e, variant: o, variants: t, state: i, motionProperties: s },
        l
      ),
      { stop: (u = !1) => {} }
    ),
    { stop: c } = hx(a, n)
  return (
    (a.stop = (u = !1) => {
      const f = () => {
        a.stopTransitions(), r(), c()
      }
      if (!u && t.value && t.value.leave) {
        const d = ae(a.isAnimating, (m) => {
          m || (d(), f())
        })
      } else f()
    }),
    Xo(() => a.stop()),
    a
  )
}
const Ox = [
    'initial',
    'enter',
    'leave',
    'visible',
    'hovered',
    'tapped',
    'focused',
    'delay'
  ],
  Mx = (e, t) => {
    const n = e.props ? e.props : e.data && e.data.attrs ? e.data.attrs : {}
    n &&
      (n.variants &&
        Qo(n.variants) &&
        (t.value = de(de({}, t.value), n.variants)),
      Ox.forEach((s) => {
        if (s === 'delay') {
          if (n && n[s] && Cp(n[s])) {
            const r = n[s]
            t &&
              t.value &&
              (t.value.enter &&
                (t.value.enter.transition || (t.value.enter.transition = {}),
                (t.value.enter.transition = Ue(
                  de({}, t.value.enter.transition),
                  { delay: r }
                ))),
              t.value.visible &&
                (t.value.visible.transition ||
                  (t.value.visible.transition = {}),
                (t.value.visible.transition = Ue(
                  de({}, t.value.visible.transition),
                  { delay: r }
                ))))
          }
          return
        }
        n && n[s] && Qo(n[s]) && (t.value[s] = n[s])
      }))
  },
  dl = (e) => {
    const t = (s, r, o) => {
        const i = r.value || o.key
        i && ll[i] && ll[i].stop()
        const l = Z(e || {})
        Mx(o, l)
        const a = Ax(s, l)
        ;(s.motionInstance = a), i && nt(ll, i, a)
      },
      n = (s, r, o) => {
        s.motionInstance && s.motionInstance.stop()
      }
    return { created: t, unmounted: n, bind: t, unbind: n }
  },
  Px = { initial: { opacity: 0 }, enter: { opacity: 1 } },
  Tx = { initial: { opacity: 0 }, visible: { opacity: 1 } },
  Ix = { initial: { scale: 0, opacity: 0 }, enter: { scale: 1, opacity: 1 } },
  Rx = { initial: { scale: 0, opacity: 0 }, visible: { scale: 1, opacity: 1 } },
  jx = {
    initial: { x: -100, rotate: 90, opacity: 0 },
    enter: { x: 0, rotate: 0, opacity: 1 }
  },
  Lx = {
    initial: { x: -100, rotate: 90, opacity: 0 },
    visible: { x: 0, rotate: 0, opacity: 1 }
  },
  Fx = {
    initial: { x: 100, rotate: -90, opacity: 0 },
    enter: { x: 0, rotate: 0, opacity: 1 }
  },
  Nx = {
    initial: { x: 100, rotate: -90, opacity: 0 },
    visible: { x: 0, rotate: 0, opacity: 1 }
  },
  Dx = {
    initial: { y: -100, rotate: -90, opacity: 0 },
    enter: { y: 0, rotate: 0, opacity: 1 }
  },
  Hx = {
    initial: { y: -100, rotate: -90, opacity: 0 },
    visible: { y: 0, rotate: 0, opacity: 1 }
  },
  zx = {
    initial: { y: 100, rotate: 90, opacity: 0 },
    enter: { y: 0, rotate: 0, opacity: 1 }
  },
  Bx = {
    initial: { y: 100, rotate: 90, opacity: 0 },
    visible: { y: 0, rotate: 0, opacity: 1 }
  },
  Vx = { initial: { x: -100, opacity: 0 }, enter: { x: 0, opacity: 1 } },
  Ux = { initial: { x: -100, opacity: 0 }, visible: { x: 0, opacity: 1 } },
  Kx = { initial: { x: 100, opacity: 0 }, enter: { x: 0, opacity: 1 } },
  Wx = { initial: { x: 100, opacity: 0 }, visible: { x: 0, opacity: 1 } },
  qx = { initial: { y: -100, opacity: 0 }, enter: { y: 0, opacity: 1 } },
  Yx = { initial: { y: -100, opacity: 0 }, visible: { y: 0, opacity: 1 } },
  Jx = { initial: { y: 100, opacity: 0 }, enter: { y: 0, opacity: 1 } },
  Gx = { initial: { y: 100, opacity: 0 }, visible: { y: 0, opacity: 1 } },
  Hf = {
    __proto__: null,
    fade: Px,
    fadeVisible: Tx,
    pop: Ix,
    popVisible: Rx,
    rollBottom: zx,
    rollLeft: jx,
    rollRight: Fx,
    rollTop: Dx,
    rollVisibleBottom: Bx,
    rollVisibleLeft: Lx,
    rollVisibleRight: Nx,
    rollVisibleTop: Hx,
    slideBottom: Jx,
    slideLeft: Vx,
    slideRight: Kx,
    slideTop: qx,
    slideVisibleBottom: Gx,
    slideVisibleLeft: Ux,
    slideVisibleRight: Wx,
    slideVisibleTop: Yx
  }
function Qx(e) {
  const t =
      '\xE0\xE1\xE2\xE4\xE6\xE3\xE5\u0101\u0103\u0105\xE7\u0107\u010D\u0111\u010F\xE8\xE9\xEA\xEB\u0113\u0117\u0119\u011B\u011F\u01F5\u1E27\xEE\xEF\xED\u012B\u012F\xEC\u0142\u1E3F\xF1\u0144\u01F9\u0148\xF4\xF6\xF2\xF3\u0153\xF8\u014D\xF5\u0151\u1E55\u0155\u0159\xDF\u015B\u0161\u015F\u0219\u0165\u021B\xFB\xFC\xF9\xFA\u016B\u01D8\u016F\u0171\u0173\u1E83\u1E8D\xFF\xFD\u017E\u017A\u017C\xB7/_,:;',
    n =
      'aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------',
    s = new RegExp(t.split('').join('|'), 'g')
  return e
    .toString()
    .replace(/[A-Z]/g, (r) => '-' + r)
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(s, (r) => n.charAt(t.indexOf(r)))
    .replace(/&/g, '-and-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '')
}
const Xx = {
  install(e, t) {
    if ((e.directive('motion', dl()), !t || (t && !t.excludePresets)))
      for (const n in Hf) {
        const s = Hf[n]
        e.directive(`motion-${Qx(n)}`, dl(s))
      }
    if (t && t.directives)
      for (const n in t.directives) {
        const s = t.directives[n]
        s.initial, e.directive(`motion-${n}`, dl(s))
      }
  }
}
function Zx(e) {
  function t() {
    document.documentElement.style.setProperty(
      '--vh',
      `${window.innerHeight * 0.01}px`
    )
  }
  t(), window.addEventListener('resize', t), e.app.use(Xx)
}
function st(e, t, n) {
  var s, r
  return (r = ((s = e.instance) == null ? void 0 : s.$).provides[t]) != null
    ? r
    : n
}
function eE() {
  return {
    install(e) {
      e.directive('click', {
        name: 'v-click',
        mounted(t, n) {
          var u, f, d, m
          if (Hs.value || ((u = st(n, Nr)) == null ? void 0 : u.value)) return
          const s = st(n, ts),
            r = st(n, Fr),
            o = st(n, vi),
            i = n.modifiers.hide !== !1 && n.modifiers.hide != null,
            l = n.modifiers.fade !== !1 && n.modifiers.fade != null,
            a =
              ((f = s == null ? void 0 : s.value) == null
                ? void 0
                : f.length) || 0,
            c = l ? Mv : yi
          if (
            (s &&
              !((d = s == null ? void 0 : s.value) == null
                ? void 0
                : d.includes(t)) &&
              s.value.push(t),
            n.value === null && (n.value = s == null ? void 0 : s.value.length),
            !(o == null ? void 0 : o.value.has(n.value)))
          )
            o == null || o.value.set(n.value, [t])
          else if (
            !((m = o == null ? void 0 : o.value.get(n.value)) == null
              ? void 0
              : m.includes(t))
          ) {
            const v = (o == null ? void 0 : o.value.get(n.value)) || []
            o == null || o.value.set(n.value, [t].concat(v))
          }
          t == null || t.classList.toggle(ns, !0),
            r &&
              ae(
                r,
                () => {
                  var A
                  const v = (A = r == null ? void 0 : r.value) != null ? A : 0,
                    E = n.value != null ? v >= n.value : v > a
                  t.classList.contains(_i) || t.classList.toggle(c, !E),
                    i !== !1 && i !== void 0 && t.classList.toggle(c, E),
                    t.classList.toggle(js, !1)
                  const w = o == null ? void 0 : o.value.get(v)
                  w == null ||
                    w.forEach((_, b) => {
                      _.classList.toggle(Dr, !1),
                        b === w.length - 1
                          ? _.classList.toggle(js, !0)
                          : _.classList.toggle(Dr, !0)
                    }),
                    t.classList.contains(js) || t.classList.toggle(Dr, E)
                },
                { immediate: !0 }
              )
        },
        unmounted(t, n) {
          t == null || t.classList.toggle(ns, !1)
          const s = st(n, ts)
          ;(s == null ? void 0 : s.value) && Lc(s.value, t)
        }
      }),
        e.directive('after', {
          name: 'v-after',
          mounted(t, n) {
            var l, a
            if (Hs.value || ((l = st(n, Nr)) == null ? void 0 : l.value)) return
            const s = st(n, ts),
              r = st(n, Fr),
              o = st(n, vi),
              i = s == null ? void 0 : s.value.length
            n.value === void 0 &&
              (n.value = s == null ? void 0 : s.value.length),
              (o == null ? void 0 : o.value.has(n.value))
                ? (a = o == null ? void 0 : o.value.get(n.value)) == null ||
                  a.push(t)
                : o == null || o.value.set(n.value, [t]),
              t == null || t.classList.toggle(ns, !0),
              r &&
                ae(
                  r,
                  () => {
                    var u, f, d
                    const c =
                      ((u = r.value) != null ? u : 0) >=
                      ((d = (f = n.value) != null ? f : i) != null ? d : 0)
                    t.classList.contains(_i) || t.classList.toggle(yi, !c),
                      t.classList.toggle(js, !1),
                      t.classList.contains(js) || t.classList.toggle(Dr, c)
                  },
                  { immediate: !0 }
                )
          },
          unmounted(t) {
            t == null || t.classList.toggle(ns, !0)
          }
        }),
        e.directive('click-hide', {
          name: 'v-click-hide',
          mounted(t, n) {
            var i, l, a
            if (Hs.value || ((i = st(n, Nr)) == null ? void 0 : i.value)) return
            const s = st(n, ts),
              r = st(n, Fr),
              o =
                ((l = s == null ? void 0 : s.value) == null
                  ? void 0
                  : l.length) || 0
            s &&
              !((a = s == null ? void 0 : s.value) == null
                ? void 0
                : a.includes(t)) &&
              s.value.push(t),
              t == null || t.classList.toggle(ns, !0),
              r &&
                ae(
                  r,
                  () => {
                    var f
                    const c =
                        (f = r == null ? void 0 : r.value) != null ? f : 0,
                      u = n.value != null ? c >= n.value : c > o
                    t.classList.toggle(yi, u), t.classList.toggle(_i, u)
                  },
                  { immediate: !0 }
                )
          },
          unmounted(t, n) {
            t == null || t.classList.toggle(ns, !1)
            const s = st(n, ts)
            ;(s == null ? void 0 : s.value) && Lc(s.value, t)
          }
        })
    }
  }
}
function tE() {
  return {
    install(e) {
      const t = {}
      for (const s of Eg(zu)) typeof s == 'string' && (t[s] = zu[s])
      const n = Te({
        nav: t,
        configs: Oe,
        themeConfigs: D(() => Oe.themeConfig)
      })
      e.config.globalProperties.$slidev = an(n)
    }
  }
}
const ls = up(Ab)
ls.use(Ye)
ls.use(xp())
ls.use(eE())
ls.use(tE())
Zx({ app: ls, router: Ye })
ls.mount('#app')
