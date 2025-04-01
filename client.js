// import {a4 as l, ac as n, b9 as d, ba as p} from "./chunks/runtime-dom.esm-bundler.js";
const i = ()=>{}
  , m = l({
    props: {
        value: String,
        name: String
    },
    setup({name: a, value: t}) {
        return t ? ()=>n("astro-slot", {
            name: a,
            innerHTML: t
        }) : ()=>null
    }
})
  , b = a=>async(t,s,o,{client: u})=>{
    if (delete s.class,
    !a.hasAttribute("ssr"))
        return;
    const c = t.name ? `${t.name} Host` : void 0
      , r = {};
    for (const [e,f] of Object.entries(o))
        r[e] = ()=>n(m, {
            value: f,
            name: e === "default" ? void 0 : e
        });
    if (u === "only") {
        const e = d({
            name: c,
            render: ()=>n(t, s, r)
        });
        await i(),
        e.mount(a, !1)
    } else {
        const e = p({
            name: c,
            render: ()=>n(t, s, r)
        });
        await i(),
        e.mount(a, !0)
    }
}
;
// export {b as default};

