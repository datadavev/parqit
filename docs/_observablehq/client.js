var J=Object.defineProperty;var o=(e,t)=>J(e,"name",{value:t,configurable:!0});import{Inspector as x,Runtime as U}from"./runtime.js";import{Generators as v,resize as W,FileAttachment as X,Mutable as Y}from"./stdlib.js";var ee=Object.defineProperty,_=o((e,t)=>ee(e,"name",{value:t,configurable:!0}),"o$3");const j=document.createElement("template");j.innerHTML='<button title="Copy code" class="observablehq-pre-copy"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 6C2 5.44772 2.44772 5 3 5H10C10.5523 5 11 5.44772 11 6V13C11 13.5523 10.5523 14 10 14H3C2.44772 14 2 13.5523 2 13V6Z M4 2.00004L12 2.00001C13.1046 2 14 2.89544 14 4.00001V12"></path></svg></button>',E();function E(){for(const e of document.querySelectorAll("pre:not([data-copy=none])")){const t=e.parentNode;if(t.classList.contains("observablehq-pre-container"))continue;const a=t.insertBefore(document.createElement("div"),e);a.className="observablehq-pre-container",Object.assign(a.dataset,e.dataset),a.appendChild(j.content.cloneNode(!0).firstChild).addEventListener("click",A),a.appendChild(e)}}o(E,"r$2"),_(E,"enableCopyButtons");async function A({currentTarget:e}){await navigator.clipboard.writeText(e.nextElementSibling.textContent.trim());const[t]=e.getAnimations({subtree:!0});t&&(t.currentTime=0),e.classList.add("observablehq-pre-copied"),e.addEventListener("animationend",()=>e.classList.remove("observablehq-pre-copied"),{once:!0})}o(A,"c$2"),_(A,"copy");var te=Object.defineProperty,D=o((e,t)=>te(e,"name",{value:t,configurable:!0}),"s$4");const p=document.querySelector("#observablehq-sidebar-toggle");if(p){let e=p.indeterminate;p.onclick=()=>{const a=matchMedia("(min-width: calc(640px + 6rem + 272px))").matches;e?(p.checked=!a,e=!1):p.checked===a&&(e=!0),p.indeterminate=e,e?sessionStorage.removeItem("observablehq-sidebar"):sessionStorage.setItem("observablehq-sidebar",p.checked)},addEventListener("keypress",a=>{a.code==="KeyB"&&(a.metaKey||a.altKey)&&!a.ctrlKey&&(a.target===document.body||a.target===p||a.target?.closest("#observablehq-sidebar"))&&(p.click(),a.preventDefault())});const t=`Toggle sidebar ${/Mac|iPhone/.test(navigator.platform)?/Firefox/.test(navigator.userAgent)?"\u2325":"\u2318":"Alt-"}B`;for(const a of document.querySelectorAll("#observablehq-sidebar-toggle, label[for='observablehq-sidebar-toggle']"))a.title=t}function B(e){e.detail>1&&e.preventDefault()}o(B,"l$2"),D(B,"preventDoubleClick");function O(){sessionStorage.setItem(`observablehq-sidebar:${this.firstElementChild.textContent}`,this.open)}o(O,"i$4"),D(O,"persistOpen");for(const e of document.querySelectorAll("#observablehq-sidebar summary"))e.onmousedown=B,e.parentElement.ontoggle=O;var ae=Object.defineProperty,P=o((e,t)=>ae(e,"name",{value:t,configurable:!0}),"i$3");const q=document.querySelector("#observablehq-toc");if(q){const e=q.appendChild(document.createElement("div"));e.classList.add("observablehq-secondary-link-highlight");const t=Array.from(document.querySelector("#observablehq-main").querySelectorAll(q.dataset.selector)).filter(c=>c.querySelector("a.observablehq-header-anchor")).reverse(),a=q.querySelectorAll(".observablehq-secondary-link"),l=P(()=>{for(const c of a)c.classList.remove("observablehq-secondary-link-active");if(location.hash)for(const c of t){const s=c.querySelector("a[href]")?.hash;if(s===location.hash){const h=c.getBoundingClientRect().top;if(0<h&&h<40){for(const m of a)if(m.querySelector("a[href]")?.hash===s)return m.classList.add("observablehq-secondary-link-active"),m;return}break}}for(const c of t){if(c.getBoundingClientRect().top>=innerHeight*.5)continue;const s=c.querySelector("a[href]")?.hash;for(const h of a)if(h.querySelector("a[href]")?.hash===s)return h.classList.add("observablehq-secondary-link-active"),h;break}},"relink"),g=P(()=>{const c=l();e.style.cssText=c?`top: ${c.offsetTop}px; height: ${c.offsetHeight}px;`:""},"intersected"),k=new IntersectionObserver(g,{rootMargin:"0px 0px -50% 0px"});for(const c of t)k.observe(c)}var oe=Object.defineProperty,I=o((e,t)=>oe(e,"name",{value:t,configurable:!0}),"n$1");function M(e){const t=new x(document.createElement("div"));return t.fulfilled(e),t._node.firstChild}o(M,"i$2"),I(M,"inspect");function z(e){const t=new x(document.createElement("div"));t.rejected(e);const a=t._node.firstChild;return a.classList.add("observablehq--error"),a}o(z,"s$3"),I(z,"inspectError");var re=Object.defineProperty,r=o((e,t)=>re(e,"name",{value:t,configurable:!0}),"o$1");const ce=r(()=>import("../_npm/lodash@4.17.21/_esm.js").then(e=>e.default),"_"),ne=r(()=>import("../_npm/arquero@5.4.0/_esm.js"),"aq"),se=r(()=>import("../_npm/apache-arrow@15.0.2/_esm.js"),"Arrow"),ie=r(()=>import("../_npm/d3@7.9.0/_esm.js"),"d3"),le=r(()=>import("./stdlib/dot.js").then(e=>e.default),"dot"),de=r(()=>import("../_npm/@duckdb/duckdb-wasm@1.28.0/_esm.js"),"duckdb"),be=r(()=>import("./stdlib/duckdb.js").then(e=>e.DuckDBClient),"DuckDBClient"),fe=r(()=>import("../_npm/echarts@5.5.0/dist/echarts.esm.min.js._esm.js"),"echarts"),ue=r(()=>import("../_npm/htl@0.3.1/_esm.js"),"htl"),pe=r(()=>import("../_npm/htl@0.3.1/_esm.js").then(e=>e.html),"html"),he=r(()=>import("../_npm/htl@0.3.1/_esm.js").then(e=>e.svg),"svg"),me=r(()=>import("./stdlib/inputs.js"),"Inputs"),ve=r(()=>import("../_npm/leaflet@1.9.4/_esm.js"),"L"),ge=r(()=>import("../_npm/mapbox-gl@3.3.0/_esm.js").then(e=>e.default),"mapboxgl"),ye=r(()=>import("./stdlib/mermaid.js").then(e=>e.default),"mermaid"),qe=r(()=>import("../_npm/@observablehq/plot@0.6.14/_esm.js"),"Plot"),$e=r(()=>import("./stdlib/duckdb.js").then(e=>e.sql),"sql"),we=r(()=>import("./stdlib/sqlite.js").then(e=>e.default),"SQLite"),ke=r(()=>import("./stdlib/sqlite.js").then(e=>e.SQLiteDatabaseClient),"SQLiteDatabaseClient"),Ce=r(()=>import("./stdlib/tex.js").then(e=>e.default),"tex"),Le=r(()=>import("../_npm/topojson-client@3.1.0/_esm.js"),"topojson"),Se=r(()=>import("./stdlib/vgplot.js").then(e=>e.default()),"vg"),xe=r(()=>import("./stdlib/vega-lite.js").then(e=>e.default),"vl");var _e=Object.freeze({__proto__:null,Arrow:se,DuckDBClient:be,Inputs:me,L:ve,Plot:qe,SQLite:we,SQLiteDatabaseClient:ke,_:ce,aq:ne,d3:ie,dot:le,duckdb:de,echarts:fe,htl:ue,html:pe,mapboxgl:ge,mermaid:ye,sql:$e,svg:he,tex:Ce,topojson:Le,vg:Se,vl:xe}),je=Object.defineProperty,n=o((e,t)=>je(e,"name",{value:t,configurable:!0}),"e");const Ee=n(()=>i("https://static.observableusercontent.com/files/3ccff97fd2d93da734e76829b2b066eafdaac6a1fafdec0faf6ebc443271cfc109d29e80dd217468fcb2aff1e6bffdc73f356cc48feb657f35378e6abbbb63b9",!0),"aapl"),Ae=n(()=>i("https://static.observableusercontent.com/files/75d52e6c3130b1cae83cda89305e17b50f33e7420ef205587a135e8562bcfd22e483cf4fa2fb5df6dff66f9c5d19740be1cfaf47406286e2eb6574b49ffc685d",!0),"alphabet"),De=n(()=>i("https://static.observableusercontent.com/files/048ec3dfd528110c0665dfa363dd28bc516ffb7247231f3ab25005036717f5c4c232a5efc7bb74bc03037155cb72b1abe85a33d86eb9f1a336196030443be4f6",!0),"cars"),Be=n(()=>i("https://static.observableusercontent.com/files/39837ec5121fcc163131dbc2fe8c1a2e0b3423a5d1e96b5ce371e2ac2e20a290d78b71a4fb08b9fa6a0107776e17fb78af313b8ea70f4cc6648fad68ddf06f7a",!0),"citywages"),Oe=n(()=>i("https://static.observableusercontent.com/files/87942b1f5d061a21fa4bb8f2162db44e3ef0f7391301f867ab5ba718b225a63091af20675f0bfe7f922db097b217b377135203a7eab34651e21a8d09f4e37252",!0),"diamonds"),Pe=n(()=>i("https://static.observableusercontent.com/files/a6b0d94a7f5828fd133765a934f4c9746d2010e2f342d335923991f31b14120de96b5cb4f160d509d8dc627f0107d7f5b5070d2516f01e4c862b5b4867533000",!0),"flare"),Ie=n(()=>i("https://static.observableusercontent.com/files/76f13741128340cc88798c0a0b7fa5a2df8370f57554000774ab8ee9ae785ffa2903010cad670d4939af3e9c17e5e18e7e05ed2b38b848ac2fc1a0066aa0005f",!0),"industries"),Me=n(()=>T("https://static.observableusercontent.com/files/31d904f6e21d42d4963ece9c8cc4fbd75efcbdc404bf511bc79906f0a1be68b5a01e935f65123670ed04e35ca8cae3c2b943f82bf8db49c5a67c85cbb58db052"),"miserables"),ze=n(()=>i("https://static.observableusercontent.com/files/31ca24545a0603dce099d10ee89ee5ae72d29fa55e8fc7c9ffb5ded87ac83060d80f1d9e21f4ae8eb04c1e8940b7287d179fe8060d887fb1f055f430e210007c",!0),"olympians"),Te=n(()=>i("https://static.observableusercontent.com/files/715db1223e067f00500780077febc6cebbdd90c151d3d78317c802732252052ab0e367039872ab9c77d6ef99e5f55a0724b35ddc898a1c99cb14c31a379af80a",!0),"penguins"),Ne=n(()=>i("https://static.observableusercontent.com/files/c653108ab176088cacbb338eaf2344c4f5781681702bd6afb55697a3f91b511c6686ff469f3e3a27c75400001a2334dbd39a4499fe46b50a8b3c278b7d2f7fb5",!0),"pizza"),Qe=n(()=>i("https://static.observableusercontent.com/files/693a46b22b33db0f042728700e0c73e836fa13d55446df89120682d55339c6db7cc9e574d3d73f24ecc9bc7eb9ac9a1e7e104a1ee52c00aab1e77eb102913c1f",!0),"weather");async function T(e){const t=await fetch(e);if(!t.ok)throw new Error(`unable to fetch ${e}: status ${t.status}`);return t.json()}o(T,"y$1"),n(T,"json");async function N(e){const t=await fetch(e);if(!t.ok)throw new Error(`unable to fetch ${e}: status ${t.status}`);return t.text()}o(N,"$"),n(N,"text");async function i(e,t){const[a,l]=await Promise.all([N(e),import("../_npm/d3-dsv@3.0.1/_esm.js")]);return l.csvParse(a,t&&l.autoType)}o(i,"a"),n(i,"csv");var He=Object.freeze({__proto__:null,aapl:Ee,alphabet:Ae,cars:De,citywages:Be,diamonds:Oe,flare:Pe,industries:Ie,miserables:Me,olympians:ze,penguins:Te,pizza:Ne,weather:Qe}),Fe=Object.defineProperty,f=o((e,t)=>Fe(e,"name",{value:t,configurable:!0}),"s");const Ke={now:()=>v.now(),width:()=>v.width(document.querySelector("main")),dark:()=>v.dark(),resize:()=>W,FileAttachment:()=>X,Generators:()=>v,Mutable:()=>Y,..._e,...He},Re=new U(Ke),Q=Re.module(),$=new Map;function H(e){const{id:t,inline:a,inputs:l=[],outputs:g=[],body:k}=e,c=[];$.get(t)?.variables.forEach(d=>d.delete()),$.set(t,{cell:e,variables:c});const s=document.querySelector(`#cell-${t}`),h=s.classList.contains("observablehq--loading"),m=f(()=>F(s,h),"pending"),V=f(d=>K(s,d),"rejected"),u=Q.variable({_node:s,pending:m,rejected:V},{shadow:{}});if(l.includes("display")||l.includes("view")){let d=-1;const C=a?R:G,L=new u.constructor(2,u._module);if(L.define(l.filter(b=>b!=="display"&&b!=="view"),()=>{let b=u._version;return y=>{if(b<d)throw new Error("stale display");return b>d&&(s.classList.remove("observablehq--loading"),w(s)),d=b,C(s,y),y}}),u._shadow.set("display",L),l.includes("view")){const b=new u.constructor(2,u._module,null,{shadow:{}});b._shadow.set("display",L),b.define(["display"],y=>Z=>v.input(y(Z))),u._shadow.set("view",b)}}u.define(g.length?`cell ${t}`:null,l,k),c.push(u);for(const d of g)c.push(Q.variable(!0).define(d,[`cell ${t}`],C=>C[d]))}o(H,"G"),f(H,"define");function F(e,t){e.classList.contains("observablehq--error")&&(e.classList.remove("observablehq--error"),e.classList.toggle("observablehq--loading",t),w(e))}o(F,"I"),f(F,"reset");function K(e,t){console.error(t),e.classList.remove("observablehq--loading"),e.classList.add("observablehq--error"),w(e),e.append(z(t))}o(K,"N"),f(K,"reject");function w(e){e.textContent=""}o(w,"b"),f(w,"clear");function R(e,t){S(t)||typeof t=="string"||!t?.[Symbol.iterator]?e.append(t):e.append(...t)}o(R,"C"),f(R,"displayInline");function G(e,t){e.append(S(t)?t:M(t))}o(G,"D"),f(G,"displayBlock");function Ge(e){$.get(e)?.variables.forEach(t=>t.delete()),$.delete(e)}o(Ge,"R"),f(Ge,"undefine");function S(e){return e instanceof Node&&e instanceof e.constructor}o(S,"y"),f(S,"isNode");export{H as define};
