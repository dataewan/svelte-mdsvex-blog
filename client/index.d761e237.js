import{S as t,i as s,s as e,l as n,j as o,m as r,o as a,p as l,r as c,u as f,v as p,w as i,x as h,d as u,a as m,e as g,t as d,q as $,c as j,b as v,f as x,g as b,k as q,y as w}from"./client.7845fc63.js";import{P as y}from"./PostDescription.65c9796c.js";function B(t,s,e){const n=t.slice();return n[1]=s[e],n}function E(t){let s,e,a=t[0],l=[];for(let s=0;s<a.length;s+=1)l[s]=N(B(t,a,s));const c=t=>f(l[t],1,1,()=>{l[t]=null});return{c(){for(let t=0;t<l.length;t+=1)l[t].c();s=n()},l(t){for(let s=0;s<l.length;s+=1)l[s].l(t);s=n()},m(t,n){for(let s=0;s<l.length;s+=1)l[s].m(t,n);o(t,s,n),e=!0},p(t,e){if(1&e){let n;for(a=t[0],n=0;n<a.length;n+=1){const o=B(t,a,n);l[n]?(l[n].p(o,e),r(l[n],1)):(l[n]=N(o),l[n].c(),r(l[n],1),l[n].m(s.parentNode,s))}for(w(),n=a.length;n<l.length;n+=1)c(n);i()}},i(t){if(!e){for(let t=0;t<a.length;t+=1)r(l[t]);e=!0}},o(t){l=l.filter(Boolean);for(let t=0;t<l.length;t+=1)f(l[t]);e=!1},d(t){h(l,t),t&&u(s)}}}function N(t){let s,e;return s=new y({props:{post:t[1]}}),{c(){a(s.$$.fragment)},l(t){l(s.$$.fragment,t)},m(t,n){c(s,t,n),e=!0},p(t,e){const n={};1&e&&(n.post=t[1]),s.$set(n)},i(t){e||(r(s.$$.fragment,t),e=!0)},o(t){f(s.$$.fragment,t),e=!1},d(t){p(s,t)}}}function P(t){let s,e,a,l,c,p,h=t[0]&&E(t);return{c(){s=m(),e=g("h1"),a=d("Recent posts"),l=m(),h&&h.c(),c=n(),this.h()},l(t){$('[data-svelte="svelte-hfp9t8"]',document.head).forEach(u),s=j(t),e=v(t,"H1",{});var o=x(e);a=b(o,"Recent posts"),o.forEach(u),l=j(t),h&&h.l(t),c=n(),this.h()},h(){document.title="Blog"},m(t,n){o(t,s,n),o(t,e,n),q(e,a),o(t,l,n),h&&h.m(t,n),o(t,c,n),p=!0},p(t,[s]){t[0]?h?(h.p(t,s),1&s&&r(h,1)):(h=E(t),h.c(),r(h,1),h.m(c.parentNode,c)):h&&(w(),f(h,1,1,()=>{h=null}),i())},i(t){p||(r(h),p=!0)},o(t){f(h),p=!1},d(t){t&&u(s),t&&u(e),t&&u(l),h&&h.d(t),t&&u(c)}}}function R({params:t,query:s}){return this.fetch("blog.json").then(t=>t.json()).then(t=>({posts:t}))}function k(t,s){return s.date>t.date?1:-1}function D(t,s,e){let{posts:n}=s;return n=n.sort(k),t.$$set=t=>{"posts"in t&&e(0,n=t.posts)},[n]}export default class extends t{constructor(t){super(),s(this,t,D,P,e,{posts:0})}}export{R as preload};
