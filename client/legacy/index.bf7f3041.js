import{_ as t,a as n,b as r,c as o,i as e,s as c,d as a,S as f,r as s,n as u,u as i,v as l,w as h,x as p,y as v,z as d,A as m,B as g,g as $,e as y,f as R,t as j,q as b,h as x,j as D,k as B,l as P,o as q,C as w,D as E}from"./client.3dbb3a4e.js";import{P as N}from"./PostDescription.dc9fdfe9.js";function S(t){var o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,c=n(t);if(o){var a=n(this).constructor;e=Reflect.construct(c,arguments,a)}else e=c.apply(this,arguments);return r(this,e)}}function k(t,n,r){var o=t.slice();return o[1]=n[r],o}function z(t){for(var n,r,o=t[0],e=[],c=0;c<o.length;c+=1)e[c]=A(k(t,o,c));var a=function(t){return v(e[t],1,1,(function(){e[t]=null}))};return{c:function(){for(var t=0;t<e.length;t+=1)e[t].c();n=s()},l:function(t){for(var r=0;r<e.length;r+=1)e[r].l(t);n=s()},m:function(t,o){for(var c=0;c<e.length;c+=1)e[c].m(t,o);u(t,n,o),r=!0},p:function(t,r){if(1&r){var c;for(o=t[0],c=0;c<o.length;c+=1){var f=k(t,o,c);e[c]?(e[c].p(f,r),i(e[c],1)):(e[c]=A(f),e[c].c(),i(e[c],1),e[c].m(n.parentNode,n))}for(E(),c=o.length;c<e.length;c+=1)a(c);m()}},i:function(t){if(!r){for(var n=0;n<o.length;n+=1)i(e[n]);r=!0}},o:function(t){e=e.filter(Boolean);for(var n=0;n<e.length;n+=1)v(e[n]);r=!1},d:function(t){g(e,t),t&&$(n)}}}function A(t){var n,r;return n=new N({props:{post:t[1]}}),{c:function(){l(n.$$.fragment)},l:function(t){h(n.$$.fragment,t)},m:function(t,o){p(n,t,o),r=!0},p:function(t,r){var o={};1&r&&(o.post=t[1]),n.$set(o)},i:function(t){r||(i(n.$$.fragment,t),r=!0)},o:function(t){v(n.$$.fragment,t),r=!1},d:function(t){d(n,t)}}}function C(t){var n,r,o,e,c,a,f=t[0]&&z(t);return{c:function(){n=y(),r=R("h1"),o=j("Recent posts"),e=y(),f&&f.c(),c=s(),this.h()},l:function(t){b('[data-svelte="svelte-hfp9t8"]',document.head).forEach($),n=x(t),r=D(t,"H1",{});var a=B(r);o=P(a,"Recent posts"),a.forEach($),e=x(t),f&&f.l(t),c=s(),this.h()},h:function(){document.title="Blog"},m:function(t,s){u(t,n,s),u(t,r,s),q(r,o),u(t,e,s),f&&f.m(t,s),u(t,c,s),a=!0},p:function(t,n){var r=w(n,1)[0];t[0]?f?(f.p(t,r),1&r&&i(f,1)):((f=z(t)).c(),i(f,1),f.m(c.parentNode,c)):f&&(E(),v(f,1,1,(function(){f=null})),m())},i:function(t){a||(i(f),a=!0)},o:function(t){v(f),a=!1},d:function(t){t&&$(n),t&&$(r),t&&$(e),f&&f.d(t),t&&$(c)}}}function H(t){t.params,t.query;return this.fetch("blog.json").then((function(t){return t.json()})).then((function(t){return{posts:t}}))}function _(t,n){return n.date>t.date?1:-1}function F(t,n,r){var o=n.posts;return o=o.sort(_),t.$$set=function(t){"posts"in t&&r(0,o=t.posts)},[o]}var G=function(n){t(s,f);var r=S(s);function s(t){var n;return o(this,s),n=r.call(this),e(a(n),t,F,C,c,{posts:0}),n}return s}();export default G;export{H as preload};
