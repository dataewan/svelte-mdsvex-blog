import{S as t,i as a,s as e,o as s,p as n,r as o,m as r,u as i,v as l,l as g,j as d,w as c,x as u,d as f,y as p}from"./client.5a076f3e.js";import{P as m}from"./PostDescription.bd35a231.js";const T=[{data:{title:"Front matter",date:"2021-03-02T00:00:00.000Z"},date:"2021-03-02T00:00:00.000Z",slug:"front-matter"},{data:{title:"Starting off",date:"2021-03-01T00:00:00.000Z"},date:"2021-03-01T00:00:00.000Z",slug:"startingpoint"},{data:{title:"Tagging",tags:["tagging","introduction","can use spaces"],date:"2021-03-03T00:00:00.000Z"},date:"2021-03-03T00:00:00.000Z",slug:"tags"},{data:{title:"Using d3 components",tags:["components","d3","introduction"],date:"2021-03-06T00:00:00.000Z"},date:"2021-03-06T00:00:00.000Z",slug:"d3-components"},{data:{title:"Directory structure and images",tags:["introduction"],date:"2021-03-04T00:00:00.000Z"},date:"2021-03-04T00:00:00.000Z",slug:"directory-structure"},{data:{title:"Styling the blog",tags:["introduction"],date:"2021-03-07T00:00:00.000Z"},date:"2021-03-07T00:00:00.000Z",slug:"styling"},{data:{title:"Using components",tags:["introduction","components"],date:"2021-03-05T00:00:00.000Z"},date:"2021-03-05T00:00:00.000Z",slug:"using-components"},{data:{title:"Now what?",date:"2021-03-08T00:00:00.000Z"},date:"2021-03-08T00:00:00.000Z",slug:"what-now"}];function Z(t,a,e){const s=t.slice();return s[1]=a[e],s}function h(t){let a,e;return a=new m({props:{post:t[1]}}),{c(){s(a.$$.fragment)},l(t){n(a.$$.fragment,t)},m(t,s){o(a,t,s),e=!0},p(t,e){const s={};1&e&&(s.post=t[1]),a.$set(s)},i(t){e||(r(a.$$.fragment,t),e=!0)},o(t){i(a.$$.fragment,t),e=!1},d(t){l(a,t)}}}function $(t){let a,e,s=t[0],n=[];for(let a=0;a<s.length;a+=1)n[a]=h(Z(t,s,a));const o=t=>i(n[t],1,1,()=>{n[t]=null});return{c(){for(let t=0;t<n.length;t+=1)n[t].c();a=g()},l(t){for(let a=0;a<n.length;a+=1)n[a].l(t);a=g()},m(t,s){for(let a=0;a<n.length;a+=1)n[a].m(t,s);d(t,a,s),e=!0},p(t,[e]){if(1&e){let i;for(s=t[0],i=0;i<s.length;i+=1){const o=Z(t,s,i);n[i]?(n[i].p(o,e),r(n[i],1)):(n[i]=h(o),n[i].c(),r(n[i],1),n[i].m(a.parentNode,a))}for(p(),i=s.length;i<n.length;i+=1)o(i);c()}},i(t){if(!e){for(let t=0;t<s.length;t+=1)r(n[t]);e=!0}},o(t){n=n.filter(Boolean);for(let t=0;t<n.length;t+=1)i(n[t]);e=!1},d(t){u(n,t),t&&f(a)}}}async function P({params:t}){const a=t.tag;return{tagPosts:T.filter(t=>t.data.tags).filter(t=>t.data.tags.includes(a)).sort((t,a)=>t.date<a.date)}}function w(t,a,e){let{tagPosts:s}=a;return t.$$set=t=>{"tagPosts"in t&&e(0,s=t.tagPosts)},[s]}export default class extends t{constructor(t){super(),a(this,t,w,$,e,{tagPosts:0})}}export{P as preload};
