import{S as y,i as j,s as I,k as m,a as w,q as P,l as d,m as g,c as A,r as E,h as f,D as v,n as c,b as S,E as u,u as x,G as b}from"./index.0a230d69.js";function U(a){let t,e,s,o,h,r,i=a[0].title+"",p;return{c(){t=m("div"),e=m("img"),h=w(),r=m("h2"),p=P(i),this.h()},l(l){t=d(l,"DIV",{class:!0});var n=g(t);e=d(n,"IMG",{src:!0,alt:!0,class:!0}),h=A(n),r=d(n,"H2",{class:!0});var _=g(r);p=E(_,i),_.forEach(f),n.forEach(f),this.h()},h(){v(e.src,s=a[0].url)||c(e,"src",s),c(e,"alt",o=a[0].title),c(e,"class","svelte-1rtn15h"),c(r,"class","svelte-1rtn15h"),c(t,"class","svelte-1rtn15h")},m(l,n){S(l,t,n),u(t,e),u(t,h),u(t,r),u(r,p)},p(l,[n]){n&1&&!v(e.src,s=l[0].url)&&c(e,"src",s),n&1&&o!==(o=l[0].title)&&c(e,"alt",o),n&1&&i!==(i=l[0].title+"")&&x(p,i)},i:b,o:b,d(l){l&&f(t)}}}function q(a,t,e){let{image:s}=t;return a.$$set=o=>{"image"in o&&e(0,s=o.image)},[s]}class F extends y{constructor(t){super(),j(this,t,q,U,I,{image:0})}}async function G(){return await(await fetch("https://jsonplaceholder.typicode.com/photos")).json()}async function M(a){const t="xslsck2zI2UjP62u7MPbRLtlcF3jEVVKpihPJYMi8Bf6xPZReWlcBWDS",e=`https://api.pexels.com/v1/curated?page=1&per_page=${a}`;return(await(await fetch(e,{method:"GET",headers:{Accept:"application/json",Authorization:t}})).json()).photos}async function R(a,t){let e=[];for(let s=0;s<a;s++)fetch("https://jsonplaceholder.typicode.com/photos",{method:"POST",body:JSON.stringify({albumId:101,id:t[s].id,title:t[s].photographer,url:t[s].src.medium,thumbnailUrl:t[s].download_url}),headers:{"Content-type":"application/json; charset=UTF-8"}}).then(o=>o.json()).then(o=>{e.push(o)});return e}async function T(a){return await(await fetch(`https://jsonplaceholder.typicode.com/albums/${a}/photos`)).json()}async function V(){return await(await fetch("https://jsonplaceholder.typicode.com/photos")).json()}export{F as I,G as a,T as b,V as c,M as g,R as s};
