import{S as $,i as q,s as D,C as N,k as g,a as S,q as V,l as v,m as y,h as u,c as W,r as A,n as w,b,E as I,F as E,g as p,f as F,d as k,N as H,H as M,o as O,y as P,z as U,A as j,B as x,v as G}from"../chunks/index.8a1cb405.js";import{c as J,I as K}from"../chunks/api.c6bdd515.js";function B(i,l,a){const t=i.slice();return t[5]=l[a],t}function C(i){let l,a;return l=new K({props:{image:i[5]}}),{c(){P(l.$$.fragment)},l(t){U(l.$$.fragment,t)},m(t,r){j(l,t,r),a=!0},p(t,r){const c={};r&5&&(c.image=t[5]),l.$set(c)},i(t){a||(p(l.$$.fragment,t),a=!0)},o(t){k(l.$$.fragment,t),a=!1},d(t){x(l,t)}}}function L(i){let l,a,t,r,c,f,m,z;N(i[4]);let _=i[0].slice(0,i[2]),s=[];for(let e=0;e<_.length;e+=1)s[e]=C(B(i,_,e));const T=e=>k(s[e],1,1,()=>{s[e]=null});return{c(){l=g("div");for(let e=0;e<s.length;e+=1)s[e].c();a=S(),t=g("div"),r=g("button"),c=V("ver mais"),this.h()},l(e){l=v(e,"DIV",{class:!0});var o=y(l);for(let d=0;d<s.length;d+=1)s[d].l(o);o.forEach(u),a=W(e),t=v(e,"DIV",{class:!0});var n=y(t);r=v(n,"BUTTON",{class:!0});var h=y(r);c=A(h,"ver mais"),h.forEach(u),n.forEach(u),this.h()},h(){w(l,"class","galery__photos svelte-1dzceap"),w(r,"class","svelte-1dzceap"),w(t,"class","galery__photos__see-more svelte-1dzceap")},m(e,o){b(e,l,o);for(let n=0;n<s.length;n+=1)s[n]&&s[n].m(l,null);b(e,a,o),b(e,t,o),I(t,r),I(r,c),f=!0,m||(z=[E(window,"resize",i[4]),E(r,"click",i[3])],m=!0)},p(e,[o]){if(o&5){_=e[0].slice(0,e[2]);let n;for(n=0;n<_.length;n+=1){const h=B(e,_,n);s[n]?(s[n].p(h,o),p(s[n],1)):(s[n]=C(h),s[n].c(),p(s[n],1),s[n].m(l,null))}for(G(),n=_.length;n<s.length;n+=1)T(n);F()}},i(e){if(!f){for(let o=0;o<_.length;o+=1)p(s[o]);f=!0}},o(e){s=s.filter(Boolean);for(let o=0;o<s.length;o+=1)k(s[o]);f=!1},d(e){e&&u(l),H(s,e),e&&u(a),e&&u(t),m=!1,M(z)}}}function Q(i,l,a){let t=[],r,c;setTimeout(()=>{r<=375||r<=1024?a(2,c=4):a(2,c=9)},100);function f(){a(2,c+=6)}O(async()=>{a(0,t=await J())});function m(){a(1,r=window.innerWidth)}return[t,r,c,f,m]}class Y extends ${constructor(l){super(),q(this,l,Q,L,D,{})}}export{Y as component};