import{S as J,i as K,s as L,k,a as N,q as A,l as v,m as C,c as B,r as P,h as _,D as O,n as b,b as w,E as g,F as D,u as x,G as E,C as ee,d as I,f as M,g as d,H as te,o as le,v as z,e as j,N as Q,O as ne,P as oe,y as R,z as X,A as Y,B as Z}from"../chunks/index.8a1cb405.js";import{g as re,s as se,a as $,I as ae,b as ce}from"../chunks/api.c6bdd515.js";import{s as ie}from"../chunks/index.e65804ed.js";function ue(a){let l,o,e,t,c,n,s=`Album ${a[1].albumId}`,r,f,h,y,m,T;return{c(){l=k("div"),o=k("img"),c=N(),n=k("h2"),r=A(s),f=N(),h=k("button"),y=A("Mais fotos"),this.h()},l(i){l=v(i,"DIV",{class:!0});var u=C(l);o=v(u,"IMG",{src:!0,alt:!0,class:!0}),c=B(u),n=v(u,"H2",{class:!0});var p=C(n);r=P(p,s),p.forEach(_),f=B(u),h=v(u,"BUTTON",{class:!0});var q=C(h);y=P(q,"Mais fotos"),q.forEach(_),u.forEach(_),this.h()},h(){O(o.src,e=a[0].url)||b(o,"src",e),b(o,"alt",t=a[1].title),b(o,"class","svelte-aek4ar"),b(n,"class","svelte-aek4ar"),b(h,"class","svelte-aek4ar"),b(l,"class","svelte-aek4ar")},m(i,u){w(i,l,u),g(l,o),g(l,c),g(l,n),g(n,r),g(l,f),g(l,h),g(h,y),m||(T=D(h,"click",a[3]),m=!0)},p(i,[u]){u&1&&!O(o.src,e=i[0].url)&&b(o,"src",e),u&2&&t!==(t=i[1].title)&&b(o,"alt",t),u&2&&s!==(s=`Album ${i[1].albumId}`)&&x(r,s)},i:E,o:E,d(i){i&&_(l),m=!1,T()}}}function fe(a,l,o){let{img:e}=l,{object:t}=l,{onClick:c}=l;const n=()=>c(t);return a.$$set=s=>{"img"in s&&o(0,e=s.img),"object"in s&&o(1,t=s.object),"onClick"in s&&o(2,c=s.onClick)},[e,t,c,n]}class _e extends J{constructor(l){super(),K(this,l,fe,ue,L,{img:0,object:1,onClick:2})}}function V(a,l,o){const e=a.slice();return e[19]=l[o],e}function F(a){a[13]=a[14][0]}function G(a,l,o){const e=a.slice();return e[15]=l[o],e[17]=o,e}function me(a){let l,o,e=a[2].slice(0,a[3]),t=[];for(let n=0;n<e.length;n+=1)t[n]=H(V(a,e,n));const c=n=>I(t[n],1,1,()=>{t[n]=null});return{c(){for(let n=0;n<t.length;n+=1)t[n].c();l=j()},l(n){for(let s=0;s<t.length;s+=1)t[s].l(n);l=j()},m(n,s){for(let r=0;r<t.length;r+=1)t[r]&&t[r].m(n,s);w(n,l,s),o=!0},p(n,s){if(s&12){e=n[2].slice(0,n[3]);let r;for(r=0;r<e.length;r+=1){const f=V(n,e,r);t[r]?(t[r].p(f,s),d(t[r],1)):(t[r]=H(f),t[r].c(),d(t[r],1),t[r].m(l.parentNode,l))}for(z(),r=e.length;r<t.length;r+=1)c(r);M()}},i(n){if(!o){for(let s=0;s<e.length;s+=1)d(t[s]);o=!0}},o(n){t=t.filter(Boolean);for(let s=0;s<t.length;s+=1)I(t[s]);o=!1},d(n){Q(t,n),n&&_(l)}}}function he(a){let l,o,e={ctx:a,current:null,token:null,hasCatch:!0,pending:de,then:be,catch:ge,value:14,error:18,blocks:[,,,]};return ne(Promise.all([$()]),e),{c(){l=j(),e.block.c()},l(t){l=j(),e.block.l(t)},m(t,c){w(t,l,c),e.block.m(t,e.anchor=c),e.mount=()=>l.parentNode,e.anchor=l,o=!0},p(t,c){a=t,oe(e,a,c)},i(t){o||(d(e.block),o=!0)},o(t){for(let c=0;c<3;c+=1){const n=e.blocks[c];I(n)}o=!1},d(t){t&&_(l),e.block.d(t),e.token=null,e=null}}}function H(a){let l,o;return l=new ae({props:{image:a[19]}}),{c(){R(l.$$.fragment)},l(e){X(l.$$.fragment,e)},m(e,t){Y(l,e,t),o=!0},p(e,t){const c={};t&12&&(c.image=e[19]),l.$set(c)},i(e){o||(d(l.$$.fragment,e),o=!0)},o(e){I(l.$$.fragment,e),o=!1},d(e){Z(l,e)}}}function ge(a){let l,o,e=a[18].message+"",t;return{c(){l=k("p"),o=A("Error: "),t=A(e)},l(c){l=v(c,"P",{});var n=C(l);o=P(n,"Error: "),t=P(n,e),n.forEach(_)},m(c,n){w(c,l,n),g(l,o),g(l,t)},p:E,i:E,o:E,d(c){c&&_(l)}}}function be(a){F(a);let l,o,e=a[13].filter(W).slice(0,a[3]),t=[];for(let n=0;n<e.length;n+=1)t[n]=S(G(a,e,n));const c=n=>I(t[n],1,1,()=>{t[n]=null});return{c(){for(let n=0;n<t.length;n+=1)t[n].c();l=j()},l(n){for(let s=0;s<t.length;s+=1)t[s].l(n);l=j()},m(n,s){for(let r=0;r<t.length;r+=1)t[r]&&t[r].m(n,s);w(n,l,s),o=!0},p(n,s){if(F(n),s&74){e=n[13].filter(W).slice(0,n[3]);let r;for(r=0;r<e.length;r+=1){const f=G(n,e,r);t[r]?(t[r].p(f,s),d(t[r],1)):(t[r]=S(f),t[r].c(),d(t[r],1),t[r].m(l.parentNode,l))}for(z(),r=e.length;r<t.length;r+=1)c(r);M()}},i(n){if(!o){for(let s=0;s<e.length;s+=1)d(t[s]);o=!0}},o(n){t=t.filter(Boolean);for(let s=0;s<t.length;s+=1)I(t[s]);o=!1},d(n){Q(t,n),n&&_(l)}}}function S(a){let l,o;return l=new _e({props:{img:a[1][a[17]],object:a[15],onClick:a[6]}}),{c(){R(l.$$.fragment)},l(e){X(l.$$.fragment,e)},m(e,t){Y(l,e,t),o=!0},p(e,t){const c={};t&2&&(c.img=e[1][e[17]]),t&8&&(c.object=e[15]),l.$set(c)},i(e){o||(d(l.$$.fragment,e),o=!0)},o(e){I(l.$$.fragment,e),o=!1},d(e){Z(l,e)}}}function de(a){let l,o;return{c(){l=k("p"),o=A("Carregando...")},l(e){l=v(e,"P",{});var t=C(l);o=P(t,"Carregando..."),t.forEach(_)},m(e,t){w(e,l,t),g(l,o)},p:E,i:E,o:E,d(e){e&&_(l)}}}function pe(a){let l,o,e,t,c,n,s,r,f,h;ee(a[7]);const y=[he,me],m=[];function T(i,u){return i[0]?0:1}return o=T(a),e=m[o]=y[o](a),{c(){l=k("div"),e.c(),t=N(),c=k("div"),n=k("button"),s=A("ver mais"),this.h()},l(i){l=v(i,"DIV",{class:!0});var u=C(l);e.l(u),u.forEach(_),t=B(i),c=v(i,"DIV",{class:!0});var p=C(c);n=v(p,"BUTTON",{class:!0});var q=C(n);s=P(q,"ver mais"),q.forEach(_),p.forEach(_),this.h()},h(){b(l,"class","galery__components svelte-rekwrq"),b(n,"class","svelte-rekwrq"),b(c,"class","galery__components__see-more svelte-rekwrq")},m(i,u){w(i,l,u),m[o].m(l,null),w(i,t,u),w(i,c,u),g(c,n),g(n,s),r=!0,f||(h=[D(window,"resize",a[7]),D(n,"click",a[5])],f=!0)},p(i,[u]){let p=o;o=T(i),o===p?m[o].p(i,u):(z(),I(m[p],1,1,()=>{m[p]=null}),M(),e=m[o],e?e.p(i,u):(e=m[o]=y[o](i),e.c()),d(e,1),e.m(l,null))},i(i){r||(d(e),r=!0)},o(i){I(e),r=!1},d(i){i&&_(l),m[o].d(),i&&_(t),i&&_(c),f=!1,te(h)}}}let U=80;const W=a=>a.id===0||a.id%50===0;function ke(a,l,o){let e,t,c=[],n,s=[],r,f;setTimeout(()=>{f<=375||f<=1024?o(3,r=4):o(3,r=9)},100);function h(){ie()}le(async()=>{c=await re(U),o(1,n=await se(U,c)),await $(),setTimeout(()=>{o(0,e=!0)},500)});async function y(u){o(2,s=await ce(u))}function m(){o(3,r+=6)}function T(u){o(3,r=9),t=u.albumId,y(t),h(),o(0,e=!e)}function i(){o(4,f=window.innerWidth)}return[e,n,s,r,f,m,T,i]}class ye extends J{constructor(l){super(),K(this,l,ke,pe,L,{})}}export{ye as component};
