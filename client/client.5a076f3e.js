function t(){}const e=t=>t;function n(t,e){for(const n in e)t[n]=e[n];return t}function s(t){return t()}function r(){return Object.create(null)}function o(t){t.forEach(s)}function a(t){return"function"==typeof t}function l(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(e,n,s){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const s=e.subscribe(...n);return s.unsubscribe?()=>s.unsubscribe():s}(n,s))}function i(t,e,n,s){if(t){const r=u(t,e,n,s);return t[0](r)}}function u(t,e,s,r){return t[1]&&r?n(s.ctx.slice(),t[1](r(e))):s.ctx}function f(t,e,n,s,r,o,a){const l=function(t,e,n,s){if(t[2]&&s){const r=t[2](s(n));if(void 0===e.dirty)return r;if("object"==typeof r){const t=[],n=Math.max(e.dirty.length,r.length);for(let s=0;s<n;s+=1)t[s]=e.dirty[s]|r[s];return t}return e.dirty|r}return e.dirty}(e,s,r,o);if(l){const r=u(e,n,s,a);t.p(r,l)}}const p="undefined"!=typeof window;let d=p?()=>window.performance.now():()=>Date.now(),g=p?t=>requestAnimationFrame(t):t;const h=new Set;function m(t){h.forEach(e=>{e.c(t)||(h.delete(e),e.f())}),0!==h.size&&g(m)}function $(t,e){t.appendChild(e)}function _(t,e,n){t.insertBefore(e,n||null)}function b(t){t.parentNode.removeChild(t)}function v(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function E(t){return document.createElement(t)}function y(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function S(t){return document.createTextNode(t)}function x(){return S(" ")}function w(){return S("")}function P(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function C(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function R(t){return Array.from(t.childNodes)}function A(t,e,n,s){for(let s=0;s<t.length;s+=1){const r=t[s];if(r.nodeName===e){let e=0;const o=[];for(;e<r.attributes.length;){const t=r.attributes[e++];n[t.name]||o.push(t.name)}for(let t=0;t<o.length;t++)r.removeAttribute(o[t]);return t.splice(s,1)[0]}}return s?y(e):E(e)}function L(t,e){for(let n=0;n<t.length;n+=1){const s=t[n];if(3===s.nodeType)return s.data=""+e,t.splice(n,1)[0]}return S(e)}function j(t){return L(t," ")}function O(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function T(t,e){t.value=null==e?"":e}function D(t,e,n){t.classList[n?"add":"remove"](e)}function k(t,e=document.body){return Array.from(e.querySelectorAll(t))}const H=new Set;let N,I=0;function U(t,e,n,s,r,o,a,l=0){const c=16.666/s;let i="{\n";for(let t=0;t<=1;t+=c){const s=e+(n-e)*o(t);i+=100*t+`%{${a(s,1-s)}}\n`}const u=i+`100% {${a(n,1-n)}}\n}`,f=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(u)}_${l}`,p=t.ownerDocument;H.add(p);const d=p.__svelte_stylesheet||(p.__svelte_stylesheet=p.head.appendChild(E("style")).sheet),g=p.__svelte_rules||(p.__svelte_rules={});g[f]||(g[f]=!0,d.insertRule(`@keyframes ${f} ${u}`,d.cssRules.length));const h=t.style.animation||"";return t.style.animation=`${h?h+", ":""}${f} ${s}ms linear ${r}ms 1 both`,I+=1,f}function Z(t,e){const n=(t.style.animation||"").split(", "),s=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),r=n.length-s.length;r&&(t.style.animation=s.join(", "),I-=r,I||g(()=>{I||(H.forEach(t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}}),H.clear())}))}function q(t){N=t}function M(){if(!N)throw new Error("Function called outside component initialization");return N}function V(t){M().$$.on_mount.push(t)}const B=[],J=[],z=[],F=[],G=Promise.resolve();let K=!1;function Y(t){z.push(t)}function W(t){F.push(t)}let X=!1;const Q=new Set;function tt(){if(!X){X=!0;do{for(let t=0;t<B.length;t+=1){const e=B[t];q(e),et(e.$$)}for(B.length=0;J.length;)J.pop()();for(let t=0;t<z.length;t+=1){const e=z[t];Q.has(e)||(Q.add(e),e())}z.length=0}while(B.length);for(;F.length;)F.pop()();K=!1,X=!1,Q.clear()}}function et(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Y)}}let nt;function st(t,e,n){t.dispatchEvent(function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(`${e?"intro":"outro"}${n}`))}const rt=new Set;let ot;function at(){ot={r:0,c:[],p:ot}}function lt(){ot.r||o(ot.c),ot=ot.p}function ct(t,e){t&&t.i&&(rt.delete(t),t.i(e))}function it(t,e,n,s){if(t&&t.o){if(rt.has(t))return;rt.add(t),ot.c.push(()=>{rt.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}}const ut={duration:0};function ft(n,s,r,l){let c=s(n,r),i=l?0:1,u=null,f=null,p=null;function $(){p&&Z(n,p)}function _(t,e){const n=t.b-i;return e*=Math.abs(n),{a:i,b:t.b,d:n,duration:e,start:t.start,end:t.start+e,group:t.group}}function b(s){const{delay:r=0,duration:a=300,easing:l=e,tick:b=t,css:v}=c||ut,E={start:d()+r,b:s};s||(E.group=ot,ot.r+=1),u?f=E:(v&&($(),p=U(n,i,s,a,r,l,v)),s&&b(0,1),u=_(E,a),Y(()=>st(n,s,"start")),function(t){let e;0===h.size&&g(m),new Promise(n=>{h.add(e={c:t,f:n})})}(t=>{if(f&&t>f.start&&(u=_(f,a),f=null,st(n,u.b,"start"),v&&($(),p=U(n,i,u.b,u.duration,0,l,c.css))),u)if(t>=u.end)b(i=u.b,1-i),st(n,u.b,"end"),f||(u.b?$():--u.group.r||o(u.group.c)),u=null;else if(t>=u.start){const e=t-u.start;i=u.a+u.d*l(e/u.duration),b(i,1-i)}return!(!u&&!f)}))}return{run(t){a(c)?(nt||(nt=Promise.resolve(),nt.then(()=>{nt=null})),nt).then(()=>{c=c(),b(t)}):b(t)},end(){$(),u=f=null}}}function pt(t,e){const n={},s={},r={$$scope:1};let o=t.length;for(;o--;){const a=t[o],l=e[o];if(l){for(const t in a)t in l||(s[t]=1);for(const t in l)r[t]||(n[t]=l[t],r[t]=1);t[o]=l}else for(const t in a)r[t]=1}for(const t in s)t in n||(n[t]=void 0);return n}function dt(t){return"object"==typeof t&&null!==t?t:{}}function gt(t,e,n){const s=t.$$.props[e];void 0!==s&&(t.$$.bound[s]=n,n(t.$$.ctx[s]))}function ht(t){t&&t.c()}function mt(t,e){t&&t.l(e)}function $t(t,e,n){const{fragment:r,on_mount:l,on_destroy:c,after_update:i}=t.$$;r&&r.m(e,n),Y(()=>{const e=l.map(s).filter(a);c?c.push(...e):o(e),t.$$.on_mount=[]}),i.forEach(Y)}function _t(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function bt(t,e){-1===t.$$.dirty[0]&&(B.push(t),K||(K=!0,G.then(tt)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function vt(e,n,s,a,l,c,i=[-1]){const u=N;q(e);const f=n.props||{},p=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:l,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:r(),dirty:i,skip_bound:!1};let d=!1;if(p.ctx=s?s(e,f,(t,n,...s)=>{const r=s.length?s[0]:n;return p.ctx&&l(p.ctx[t],p.ctx[t]=r)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](r),d&&bt(e,t)),n}):[],p.update(),d=!0,o(p.before_update),p.fragment=!!a&&a(p.ctx),n.target){if(n.hydrate){const t=R(n.target);p.fragment&&p.fragment.l(t),t.forEach(b)}else p.fragment&&p.fragment.c();n.intro&&ct(e.$$.fragment),$t(e,n.target,n.anchor),tt()}q(u)}class Et{$destroy(){_t(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const yt=[];function St(e,n=t){let s;const r=[];function o(t){if(l(e,t)&&(e=t,s)){const t=!yt.length;for(let t=0;t<r.length;t+=1){const n=r[t];n[1](),yt.push(n,e)}if(t){for(let t=0;t<yt.length;t+=2)yt[t][0](yt[t+1]);yt.length=0}}}return{set:o,update:function(t){o(t(e))},subscribe:function(a,l=t){const c=[a,l];return r.push(c),1===r.length&&(s=n(o)||t),a(e),()=>{const t=r.indexOf(c);-1!==t&&r.splice(t,1),0===r.length&&(s(),s=null)}}}}const xt={};function wt(e){let n,s,r,o,a,l,c,i,u,f,p,d,g,h,m,v,y;return{c(){n=E("nav"),s=E("ul"),r=E("li"),o=E("a"),a=S("home"),l=x(),c=E("li"),i=E("a"),u=S("about"),f=x(),p=E("li"),d=E("a"),g=S("blog"),h=x(),m=E("li"),v=E("a"),y=S("tags"),this.h()},l(t){n=A(t,"NAV",{class:!0});var e=R(n);s=A(e,"UL",{class:!0});var $=R(s);r=A($,"LI",{class:!0});var _=R(r);o=A(_,"A",{href:!0,class:!0});var E=R(o);a=L(E,"home"),E.forEach(b),_.forEach(b),l=j($),c=A($,"LI",{class:!0});var S=R(c);i=A(S,"A",{href:!0,class:!0});var x=R(i);u=L(x,"about"),x.forEach(b),S.forEach(b),f=j($),p=A($,"LI",{class:!0});var w=R(p);d=A(w,"A",{rel:!0,href:!0,class:!0});var P=R(d);g=L(P,"blog"),P.forEach(b),w.forEach(b),h=j($),m=A($,"LI",{class:!0});var C=R(m);v=A(C,"A",{rel:!0,href:!0,class:!0});var O=R(v);y=L(O,"tags"),O.forEach(b),C.forEach(b),$.forEach(b),e.forEach(b),this.h()},h(){C(o,"href","."),C(o,"class","svelte-9idte7"),D(o,"selected",void 0===e[0]),C(r,"class","svelte-9idte7"),C(i,"href","about"),C(i,"class","svelte-9idte7"),D(i,"selected","about"===e[0]),C(c,"class","svelte-9idte7"),C(d,"rel","prefetch"),C(d,"href","blog"),C(d,"class","svelte-9idte7"),D(d,"selected","blog"===e[0]),C(p,"class","svelte-9idte7"),C(v,"rel","prefetch"),C(v,"href","tags"),C(v,"class","svelte-9idte7"),D(v,"selected","tags"===e[0]),C(m,"class","svelte-9idte7"),C(s,"class","svelte-9idte7"),C(n,"class","svelte-9idte7")},m(t,e){_(t,n,e),$(n,s),$(s,r),$(r,o),$(o,a),$(s,l),$(s,c),$(c,i),$(i,u),$(s,f),$(s,p),$(p,d),$(d,g),$(s,h),$(s,m),$(m,v),$(v,y)},p(t,[e]){1&e&&D(o,"selected",void 0===t[0]),1&e&&D(i,"selected","about"===t[0]),1&e&&D(d,"selected","blog"===t[0]),1&e&&D(v,"selected","tags"===t[0])},i:t,o:t,d(t){t&&b(n)}}}function Pt(t,e,n){let{segment:s}=e;return t.$$set=t=>{"segment"in t&&n(0,s=t.segment)},[s]}class Ct extends Et{constructor(t){super(),vt(this,t,Pt,wt,l,{segment:0})}}function Rt(e){let n,s,r=e[0].data.title+"";return{c(){n=E("h1"),s=S(r)},l(t){n=A(t,"H1",{});var e=R(n);s=L(e,r),e.forEach(b)},m(t,e){_(t,n,e),$(n,s)},p(t,[e]){1&e&&r!==(r=t[0].data.title+"")&&O(s,r)},i:t,o:t,d(t){t&&b(n)}}}function At(t,e,n){let{post:s}=e;return t.$$set=t=>{"post"in t&&n(0,s=t.post)},[s]}class Lt extends Et{constructor(t){super(),vt(this,t,At,Rt,l,{post:0})}}function jt(e){let n,s,r,o,a,l,c=e[0].date.substring(0,10)+"";return{c(){n=E("img"),r=x(),o=E("time"),a=S(c),this.h()},l(t){n=A(t,"IMG",{src:!0,alt:!0}),r=j(t),o=A(t,"TIME",{datetime:!0,class:!0});var e=R(o);a=L(e,c),e.forEach(b),this.h()},h(){n.src!==(s="/icons/clock.svg")&&C(n,"src","/icons/clock.svg"),C(n,"alt",""),C(o,"datetime",l=e[0].date),C(o,"class","svelte-dplvyx")},m(t,e){_(t,n,e),_(t,r,e),_(t,o,e),$(o,a)},p(t,[e]){1&e&&c!==(c=t[0].date.substring(0,10)+"")&&O(a,c),1&e&&l!==(l=t[0].date)&&C(o,"datetime",l)},i:t,o:t,d(t){t&&b(n),t&&b(r),t&&b(o)}}}function Ot(t,e,n){let{post:s}=e;return t.$$set=t=>{"post"in t&&n(0,s=t.post)},[s]}class Tt extends Et{constructor(t){super(),vt(this,t,Ot,jt,l,{post:0})}}function Dt(t,e,n){const s=t.slice();return s[1]=e[n],s}function kt(t){let e,n,s,r,o,a=t[0].data.tags,l=[];for(let e=0;e<a.length;e+=1)l[e]=Ht(Dt(t,a,e));return{c(){e=E("div"),n=E("h5"),s=S("More about"),r=x(),o=E("div");for(let t=0;t<l.length;t+=1)l[t].c();this.h()},l(t){e=A(t,"DIV",{id:!0,class:!0});var a=R(e);n=A(a,"H5",{});var c=R(n);s=L(c,"More about"),c.forEach(b),a.forEach(b),r=j(t),o=A(t,"DIV",{id:!0,class:!0});var i=R(o);for(let t=0;t<l.length;t+=1)l[t].l(i);i.forEach(b),this.h()},h(){C(e,"id","tagheader"),C(e,"class","svelte-higkw2"),C(o,"id","tagcontainer"),C(o,"class","svelte-higkw2")},m(t,a){_(t,e,a),$(e,n),$(n,s),_(t,r,a),_(t,o,a);for(let t=0;t<l.length;t+=1)l[t].m(o,null)},p(t,e){if(1&e){let n;for(a=t[0].data.tags,n=0;n<a.length;n+=1){const s=Dt(t,a,n);l[n]?l[n].p(s,e):(l[n]=Ht(s),l[n].c(),l[n].m(o,null))}for(;n<l.length;n+=1)l[n].d(1);l.length=a.length}},d(t){t&&b(e),t&&b(r),t&&b(o),v(l,t)}}}function Ht(t){let e,n,s,r,o,a,l,c,i=t[1]+"";return{c(){e=E("span"),n=E("img"),r=x(),o=E("a"),a=S(i),c=x(),this.h()},l(t){e=A(t,"SPAN",{id:!0,class:!0});var s=R(e);n=A(s,"IMG",{src:!0,alt:!0}),r=j(s),o=A(s,"A",{href:!0});var l=R(o);a=L(l,i),l.forEach(b),c=j(s),s.forEach(b),this.h()},h(){n.src!==(s="/icons/tag.svg")&&C(n,"src","/icons/tag.svg"),C(n,"alt",""),C(o,"href",l="tags/"+t[1]),C(e,"id","tag"),C(e,"class","svelte-higkw2")},m(t,s){_(t,e,s),$(e,n),$(e,r),$(e,o),$(o,a),$(e,c)},p(t,e){1&e&&i!==(i=t[1]+"")&&O(a,i),1&e&&l!==(l="tags/"+t[1])&&C(o,"href",l)},d(t){t&&b(e)}}}function Nt(e){let n,s=e[0].data.tags&&kt(e);return{c(){s&&s.c(),n=w()},l(t){s&&s.l(t),n=w()},m(t,e){s&&s.m(t,e),_(t,n,e)},p(t,[e]){t[0].data.tags?s?s.p(t,e):(s=kt(t),s.c(),s.m(n.parentNode,n)):s&&(s.d(1),s=null)},i:t,o:t,d(t){s&&s.d(t),t&&b(n)}}}function It(t,e,n){let{post:s}=e;return t.$$set=t=>{"post"in t&&n(0,s=t.post)},[s]}class Ut extends Et{constructor(t){super(),vt(this,t,It,Nt,l,{post:0})}}function Zt(t){let e,n,s,r,o,a,l,c;e=new Lt({props:{post:t[0]}}),s=new Tt({props:{post:t[0]}}),o=new Ut({props:{post:t[0]}});const u=t[4].default,p=i(u,t,t[3],null);return{c(){ht(e.$$.fragment),n=x(),ht(s.$$.fragment),r=x(),ht(o.$$.fragment),a=x(),l=E("article"),p&&p.c(),this.h()},l(t){mt(e.$$.fragment,t),n=j(t),mt(s.$$.fragment,t),r=j(t),mt(o.$$.fragment,t),a=j(t),l=A(t,"ARTICLE",{id:!0,class:!0});var c=R(l);p&&p.l(c),c.forEach(b),this.h()},h(){C(l,"id","article"),C(l,"class","svelte-6duxay")},m(t,i){$t(e,t,i),_(t,n,i),$t(s,t,i),_(t,r,i),$t(o,t,i),_(t,a,i),_(t,l,i),p&&p.m(l,null),c=!0},p(t,[n]){const r={};1&n&&(r.post=t[0]),e.$set(r);const a={};1&n&&(a.post=t[0]),s.$set(a);const l={};1&n&&(l.post=t[0]),o.$set(l),p&&p.p&&8&n&&f(p,u,t,t[3],n,null,null)},i(t){c||(ct(e.$$.fragment,t),ct(s.$$.fragment,t),ct(o.$$.fragment,t),ct(p,t),c=!0)},o(t){it(e.$$.fragment,t),it(s.$$.fragment,t),it(o.$$.fragment,t),it(p,t),c=!1},d(t){_t(e,t),t&&b(n),_t(s,t),t&&b(r),_t(o,t),t&&b(a),t&&b(l),p&&p.d(t)}}}function qt(t,e,n){let s;const r=[{data:{title:"Front matter",date:"2021-03-02T00:00:00.000Z"},date:"2021-03-02T00:00:00.000Z",slug:"front-matter"},{data:{title:"Starting off",date:"2021-03-01T00:00:00.000Z"},date:"2021-03-01T00:00:00.000Z",slug:"startingpoint"},{data:{title:"Tagging",tags:["tagging","introduction","can use spaces"],date:"2021-03-03T00:00:00.000Z"},date:"2021-03-03T00:00:00.000Z",slug:"tags"},{data:{title:"Using d3 components",tags:["components","d3","introduction"],date:"2021-03-06T00:00:00.000Z"},date:"2021-03-06T00:00:00.000Z",slug:"d3-components"},{data:{title:"Directory structure and images",tags:["introduction"],date:"2021-03-04T00:00:00.000Z"},date:"2021-03-04T00:00:00.000Z",slug:"directory-structure"},{data:{title:"Styling the blog",tags:["introduction"],date:"2021-03-07T00:00:00.000Z"},date:"2021-03-07T00:00:00.000Z",slug:"styling"},{data:{title:"Using components",tags:["introduction","components"],date:"2021-03-05T00:00:00.000Z"},date:"2021-03-05T00:00:00.000Z",slug:"using-components"},{data:{title:"Now what?",date:"2021-03-08T00:00:00.000Z"},date:"2021-03-08T00:00:00.000Z",slug:"what-now"}],{page:o}=Ue();c(t,o,t=>n(5,s=t));let{slug:a}=e,{post:l}=e,{$$slots:i={},$$scope:u}=e;return t.$$set=t=>{"slug"in t&&n(2,a=t.slug),"post"in t&&n(0,l=t.post),"$$scope"in t&&n(3,u=t.$$scope)},t.$$.update=()=>{32&t.$$.dirty&&n(2,a=(t=>{const e=t.split("/");return e[e.length-1]})(s.path)),4&t.$$.dirty&&n(0,l=r.filter(t=>t.slug===a)[0])},[l,o,a,u,i]}class Mt extends Et{constructor(t){super(),vt(this,t,qt,Zt,l,{slug:2,post:0})}}function Vt(t){let e;const n=t[4].default,s=i(n,t,t[5],null);return{c(){s&&s.c()},l(t){s&&s.l(t)},m(t,n){s&&s.m(t,n),e=!0},p(t,e){s&&s.p&&32&e&&f(s,n,t,t[5],e,null,null)},i(t){e||(ct(s,t),e=!0)},o(t){it(s,t),e=!1},d(t){s&&s.d(t)}}}function Bt(t){let e,n;return e=new Mt({props:{$$slots:{default:[Jt]},$$scope:{ctx:t}}}),{c(){ht(e.$$.fragment)},l(t){mt(e.$$.fragment,t)},m(t,s){$t(e,t,s),n=!0},p(t,n){const s={};32&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){n||(ct(e.$$.fragment,t),n=!0)},o(t){it(e.$$.fragment,t),n=!1},d(t){_t(e,t)}}}function Jt(t){let e;const n=t[4].default,s=i(n,t,t[5],null);return{c(){s&&s.c()},l(t){s&&s.l(t)},m(t,n){s&&s.m(t,n),e=!0},p(t,e){s&&s.p&&32&e&&f(s,n,t,t[5],e,null,null)},i(t){e||(ct(s,t),e=!0)},o(t){it(s,t),e=!1},d(t){s&&s.d(t)}}}function zt(t){let e,n,s,r,o,a,l;e=new Ct({props:{segment:t[0]}});const c=[Bt,Vt],i=[];function u(t,e){return 2&e&&(r=!!t[3](t[1])),r?0:1}return o=u(t,-1),a=i[o]=c[o](t),{c(){ht(e.$$.fragment),n=x(),s=E("main"),a.c(),this.h()},l(t){mt(e.$$.fragment,t),n=j(t),s=A(t,"MAIN",{class:!0});var r=R(s);a.l(r),r.forEach(b),this.h()},h(){C(s,"class","svelte-oosp9s")},m(t,r){$t(e,t,r),_(t,n,r),_(t,s,r),i[o].m(s,null),l=!0},p(t,[n]){const r={};1&n&&(r.segment=t[0]),e.$set(r);let l=o;o=u(t,n),o===l?i[o].p(t,n):(at(),it(i[l],1,1,()=>{i[l]=null}),lt(),a=i[o],a||(a=i[o]=c[o](t),a.c()),ct(a,1),a.m(s,null))},i(t){l||(ct(e.$$.fragment,t),ct(a),l=!0)},o(t){it(e.$$.fragment,t),it(a),l=!1},d(t){_t(e,t),t&&b(n),t&&b(s),i[o].d()}}}function Ft(t,e,n){let s;const{page:r}=Ue();c(t,r,t=>n(6,s=t));let{segment:o}=e;let a,{$$slots:l={},$$scope:i}=e;return t.$$set=t=>{"segment"in t&&n(0,o=t.segment),"$$scope"in t&&n(5,i=t.$$scope)},t.$$.update=()=>{64&t.$$.dirty&&n(1,a=s.path)},[o,a,r,t=>t.match(/blog\/.*/),l,i]}class Gt extends Et{constructor(t){super(),vt(this,t,Ft,zt,l,{segment:0})}}function Kt(t){let e,n,s=t[1].stack+"";return{c(){e=E("pre"),n=S(s)},l(t){e=A(t,"PRE",{});var r=R(e);n=L(r,s),r.forEach(b)},m(t,s){_(t,e,s),$(e,n)},p(t,e){2&e&&s!==(s=t[1].stack+"")&&O(n,s)},d(t){t&&b(e)}}}function Yt(e){let n,s,r,o,a,l,c,i,u,f=e[1].message+"";document.title=n=e[0];let p=e[2]&&e[1].stack&&Kt(e);return{c(){s=x(),r=E("h1"),o=S(e[0]),a=x(),l=E("p"),c=S(f),i=x(),p&&p.c(),u=w(),this.h()},l(t){k('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(b),s=j(t),r=A(t,"H1",{class:!0});var n=R(r);o=L(n,e[0]),n.forEach(b),a=j(t),l=A(t,"P",{class:!0});var d=R(l);c=L(d,f),d.forEach(b),i=j(t),p&&p.l(t),u=w(),this.h()},h(){C(r,"class","svelte-8od9u6"),C(l,"class","svelte-8od9u6")},m(t,e){_(t,s,e),_(t,r,e),$(r,o),_(t,a,e),_(t,l,e),$(l,c),_(t,i,e),p&&p.m(t,e),_(t,u,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&O(o,t[0]),2&e&&f!==(f=t[1].message+"")&&O(c,f),t[2]&&t[1].stack?p?p.p(t,e):(p=Kt(t),p.c(),p.m(u.parentNode,u)):p&&(p.d(1),p=null)},i:t,o:t,d(t){t&&b(s),t&&b(r),t&&b(a),t&&b(l),t&&b(i),p&&p.d(t),t&&b(u)}}}function Wt(t,e,n){let{status:s}=e,{error:r}=e;return t.$$set=t=>{"status"in t&&n(0,s=t.status),"error"in t&&n(1,r=t.error)},[s,r,!1]}class Xt extends Et{constructor(t){super(),vt(this,t,Wt,Yt,l,{status:0,error:1})}}function Qt(t){let e,s,r;const o=[t[4].props];var a=t[4].component;function l(t){let e={};for(let t=0;t<o.length;t+=1)e=n(e,o[t]);return{props:e}}return a&&(e=new a(l())),{c(){e&&ht(e.$$.fragment),s=w()},l(t){e&&mt(e.$$.fragment,t),s=w()},m(t,n){e&&$t(e,t,n),_(t,s,n),r=!0},p(t,n){const r=16&n?pt(o,[dt(t[4].props)]):{};if(a!==(a=t[4].component)){if(e){at();const t=e;it(t.$$.fragment,1,0,()=>{_t(t,1)}),lt()}a?(e=new a(l()),ht(e.$$.fragment),ct(e.$$.fragment,1),$t(e,s.parentNode,s)):e=null}else a&&e.$set(r)},i(t){r||(e&&ct(e.$$.fragment,t),r=!0)},o(t){e&&it(e.$$.fragment,t),r=!1},d(t){t&&b(s),e&&_t(e,t)}}}function te(t){let e,n;return e=new Xt({props:{error:t[0],status:t[1]}}),{c(){ht(e.$$.fragment)},l(t){mt(e.$$.fragment,t)},m(t,s){$t(e,t,s),n=!0},p(t,n){const s={};1&n&&(s.error=t[0]),2&n&&(s.status=t[1]),e.$set(s)},i(t){n||(ct(e.$$.fragment,t),n=!0)},o(t){it(e.$$.fragment,t),n=!1},d(t){_t(e,t)}}}function ee(t){let e,n,s,r;const o=[te,Qt],a=[];function l(t,e){return t[0]?0:1}return e=l(t),n=a[e]=o[e](t),{c(){n.c(),s=w()},l(t){n.l(t),s=w()},m(t,n){a[e].m(t,n),_(t,s,n),r=!0},p(t,r){let c=e;e=l(t),e===c?a[e].p(t,r):(at(),it(a[c],1,1,()=>{a[c]=null}),lt(),n=a[e],n||(n=a[e]=o[e](t),n.c()),ct(n,1),n.m(s.parentNode,s))},i(t){r||(ct(n),r=!0)},o(t){it(n),r=!1},d(t){a[e].d(t),t&&b(s)}}}function ne(t){let e,s;const r=[{segment:t[2][0]},t[3].props];let o={$$slots:{default:[ee]},$$scope:{ctx:t}};for(let t=0;t<r.length;t+=1)o=n(o,r[t]);return e=new Gt({props:o}),{c(){ht(e.$$.fragment)},l(t){mt(e.$$.fragment,t)},m(t,n){$t(e,t,n),s=!0},p(t,[n]){const s=12&n?pt(r,[4&n&&{segment:t[2][0]},8&n&&dt(t[3].props)]):{};147&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){s||(ct(e.$$.fragment,t),s=!0)},o(t){it(e.$$.fragment,t),s=!1},d(t){_t(e,t)}}}function se(t,e,n){let{stores:s}=e,{error:r}=e,{status:o}=e,{segments:a}=e,{level0:l}=e,{level1:c=null}=e,{notify:i}=e;var u,f,p;return u=i,M().$$.after_update.push(u),f=xt,p=s,M().$$.context.set(f,p),t.$$set=t=>{"stores"in t&&n(5,s=t.stores),"error"in t&&n(0,r=t.error),"status"in t&&n(1,o=t.status),"segments"in t&&n(2,a=t.segments),"level0"in t&&n(3,l=t.level0),"level1"in t&&n(4,c=t.level1),"notify"in t&&n(6,i=t.notify)},[r,o,a,l,c,s,i]}class re extends Et{constructor(t){super(),vt(this,t,se,ne,l,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const oe=[/^\/blog\.json$/,/^\/blog\/directory-structure\/Tulips\/?$/,/^\/tags\.json$/],ae=[{js:()=>import("./index.e897bfb7.js"),css:["client.5a076f3e.css"]},{js:()=>import("./about.34468f1f.js"),css:["client.5a076f3e.css"]},{js:()=>import("./index.c74b20ab.js"),css:["client.5a076f3e.css"]},{js:()=>import("./index.dd0305e3.js"),css:["client.5a076f3e.css"]},{js:()=>import("./index.0a07b431.js"),css:["client.5a076f3e.css"]},{js:()=>import("./Counter.b00c22b7.js"),css:["client.5a076f3e.css"]},{js:()=>import("./index.bd7bdce8.js"),css:["client.5a076f3e.css","CanvasComponent.ae2da689.css"]},{js:()=>import("./ReactiveComponent.afeb75f0.js"),css:["client.5a076f3e.css"]},{js:()=>import("./CanvasComponent.ae2da689.js"),css:["CanvasComponent.ae2da689.css","client.5a076f3e.css"]},{js:()=>import("./startingpoint.e328c915.js"),css:["client.5a076f3e.css"]},{js:()=>import("./front-matter.c3413b8a.js"),css:["client.5a076f3e.css"]},{js:()=>import("./index.1a3f7b51.js"),css:["client.5a076f3e.css"]},{js:()=>import("./index.dcb82259.js"),css:["index.dcb82259.css","client.5a076f3e.css"]},{js:()=>import("./tags.f913a25d.js"),css:["client.5a076f3e.css"]},{js:()=>import("./index.e5979071.js"),css:["client.5a076f3e.css"]},{js:()=>import("./[tag].3d92afa0.js"),css:["client.5a076f3e.css"]}],le=(ce=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/about\/?$/,parts:[{i:1}]},{pattern:/^\/blog\/?$/,parts:[{i:2}]},{pattern:/^\/blog\/directory-structure\/?$/,parts:[null,{i:3}]},{pattern:/^\/blog\/using-components\/?$/,parts:[null,{i:4}]},{pattern:/^\/blog\/using-components\/Counter\/?$/,parts:[null,null,{i:5}]},{pattern:/^\/blog\/d3-components\/?$/,parts:[null,{i:6}]},{pattern:/^\/blog\/d3-components\/ReactiveComponent\/?$/,parts:[null,null,{i:7}]},{pattern:/^\/blog\/d3-components\/CanvasComponent\/?$/,parts:[null,null,{i:8}]},{pattern:/^\/blog\/startingpoint\/?$/,parts:[null,{i:9}]},{pattern:/^\/blog\/front-matter\/?$/,parts:[null,{i:10}]},{pattern:/^\/blog\/what-now\/?$/,parts:[null,{i:11}]},{pattern:/^\/blog\/styling\/?$/,parts:[null,{i:12}]},{pattern:/^\/blog\/tags\/?$/,parts:[null,{i:13}]},{pattern:/^\/tags\/?$/,parts:[{i:14}]},{pattern:/^\/tags\/([^\/]+?)\/?$/,parts:[null,{i:15,params:t=>({tag:ce(t[1])})}]}]);var ce;const ie="undefined"!=typeof __SAPPER__&&__SAPPER__;let ue,fe,pe,de=!1,ge=[],he="{}";const me={page:function(t){const e=St(t);let n=!0;return{notify:function(){n=!0,e.update(t=>t)},set:function(t){n=!1,e.set(t)},subscribe:function(t){let s;return e.subscribe(e=>{(void 0===s||n&&e!==s)&&t(s=e)})}}}({}),preloading:St(null),session:St(ie&&ie.session)};let $e,_e;me.session.subscribe(async t=>{if($e=t,!de)return;_e=!0;const e=Pe(new URL(location.href)),n=fe={},{redirect:s,props:r,branch:o}=await Le(e);n===fe&&await Ae(s,o,r,e.page)});let be,ve=null;let Ee,ye=1;const Se="undefined"!=typeof history?history:{pushState:(t,e,n)=>{},replaceState:(t,e,n)=>{},scrollRestoration:""},xe={};function we(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach(t=>{let[,n,s=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(s):e[n]=s}),e}function Pe(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(ie.baseUrl))return null;let e=t.pathname.slice(ie.baseUrl.length);if(""===e&&(e="/"),!oe.some(t=>t.test(e)))for(let n=0;n<le.length;n+=1){const s=le[n],r=s.pattern.exec(e);if(r){const n=we(t.search),o=s.parts[s.parts.length-1],a=o.params?o.params(r):{},l={host:location.host,path:e,query:n,params:a};return{href:t.href,route:s,match:r,page:l}}}}function Ce(){return{x:pageXOffset,y:pageYOffset}}async function Re(t,e,n,s){if(e)Ee=e;else{const t=Ce();xe[Ee]=t,e=Ee=++ye,xe[Ee]=n?t:{x:0,y:0}}Ee=e,ue&&me.preloading.set(!0);const r=ve&&ve.href===t.href?ve.promise:Le(t);ve=null;const o=fe={},{redirect:a,props:l,branch:c}=await r;if(o===fe&&(await Ae(a,c,l,t.page),document.activeElement&&document.activeElement.blur(),!n)){let t=xe[e];if(s){const e=document.getElementById(s.slice(1));e&&(t={x:0,y:e.getBoundingClientRect().top+scrollY})}xe[Ee]=t,t&&scrollTo(t.x,t.y)}}async function Ae(t,e,n,s){if(t)return function(t,e={noscroll:!1,replaceState:!1}){const n=Pe(new URL(t,document.baseURI));return n?(Se[e.replaceState?"replaceState":"pushState"]({id:Ee},"",t),Re(n,null,e.noscroll).then(()=>{})):(location.href=t,new Promise(t=>{}))}(t.location,{replaceState:!0});me.page.set(s),me.preloading.set(!1),ue?ue.$set(n):(n.stores={page:{subscribe:me.page.subscribe},preloading:{subscribe:me.preloading.subscribe},session:me.session},n.level0={props:await pe},n.notify=me.page.notify,ue=new re({target:be,props:n,hydrate:!0})),ge=e,he=JSON.stringify(s.query),de=!0,_e=!1}async function Le(t){const{route:e,page:n}=t,s=n.path.split("/").filter(Boolean);let r=null;const o={error:null,status:200,segments:[s[0]]},a={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(r&&(r.statusCode!==t||r.location!==e))throw new Error("Conflicting redirects");r={statusCode:t,location:e}},error:(t,e)=>{o.error="string"==typeof e?new Error(e):e,o.status=t}};if(!pe){const t=()=>{};pe=ie.preloaded[0]||t.call(a,{host:n.host,path:n.path,query:n.query,params:{}},$e)}let l,c=1;try{const r=JSON.stringify(n.query),i=e.pattern.exec(n.path);let u=!1;l=await Promise.all(e.parts.map(async(e,l)=>{const f=s[l];if(function(t,e,n,s){if(s!==he)return!0;const r=ge[t];return!!r&&(e!==r.segment||(!(!r.match||JSON.stringify(r.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0))}(l,f,i,r)&&(u=!0),o.segments[c]=s[l+1],!e)return{segment:f};const p=c++;if(!_e&&!u&&ge[l]&&ge[l].part===e.i)return ge[l];u=!1;const{default:d,preload:g}=await function(t){const e="string"==typeof t.css?[]:t.css.map(je);return e.unshift(t.js()),Promise.all(e).then(t=>t[0])}(ae[e.i]);let h;return h=de||!ie.preloaded[l+1]?g?await g.call(a,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},$e):{}:ie.preloaded[l+1],o["level"+p]={component:d,props:h,segment:f,match:i,part:e.i}}))}catch(t){o.error=t,o.status=500,l=[]}return{redirect:r,props:o,branch:l}}function je(t){const e="client/"+t;if(!document.querySelector(`link[href="${e}"]`))return new Promise((t,n)=>{const s=document.createElement("link");s.rel="stylesheet",s.href=e,s.onload=()=>t(),s.onerror=n,document.head.appendChild(s)})}function Oe(t){const e=Pe(new URL(t,document.baseURI));if(e)return ve&&t===ve.href||function(t,e){ve={href:t,promise:e}}(t,Le(e)),ve.promise}let Te;function De(t){clearTimeout(Te),Te=setTimeout(()=>{ke(t)},20)}function ke(t){const e=Ne(t.target);e&&"prefetch"===e.rel&&Oe(e.href)}function He(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey)return;if(t.defaultPrevented)return;const e=Ne(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,s=String(n?e.href.baseVal:e.href);if(s===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const r=new URL(s);if(r.pathname===location.pathname&&r.search===location.search)return;const o=Pe(r);if(o){Re(o,null,e.hasAttribute("sapper:noscroll"),r.hash),t.preventDefault(),Se.pushState({id:Ee},"",r.href)}}function Ne(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function Ie(t){if(xe[Ee]=Ce(),t.state){const e=Pe(new URL(location.href));e?Re(e,t.state.id):location.href=location.href}else ye=ye+1,function(t){Ee=t}(ye),Se.replaceState({id:Ee},"",location.href)}const Ue=()=>{return t=xt,M().$$.context.get(t);var t};var Ze;Ze={target:document.querySelector("#sapper")},"scrollRestoration"in Se&&(Se.scrollRestoration="manual"),addEventListener("beforeunload",()=>{Se.scrollRestoration="auto"}),addEventListener("load",()=>{Se.scrollRestoration="manual"}),function(t){be=t}(Ze.target),addEventListener("click",He),addEventListener("popstate",Ie),addEventListener("touchstart",ke),addEventListener("mousemove",De),Promise.resolve().then(()=>{const{hash:t,href:e}=location;Se.replaceState({id:ye},"",e);const n=new URL(location.href);if(ie.error)return function(t){const{host:e,pathname:n,search:s}=location,{session:r,preloaded:o,status:a,error:l}=ie;pe||(pe=o&&o[0]),Ae(null,[],{error:l,status:a,session:r,level0:{props:pe},level1:{props:{status:a,error:l},component:Xt},segments:o},{host:e,path:n,query:we(s),params:{}})}();const s=Pe(n);return s?Re(s,ye,!0,t):void 0});export{J as A,gt as B,W as C,P as D,o as E,T as F,y as G,ft as H,Y as I,V as J,Tt as P,Et as S,x as a,A as b,j as c,b as d,E as e,R as f,L as g,C as h,vt as i,_ as j,$ as k,w as l,ct as m,t as n,ht as o,mt as p,k as q,$t as r,l as s,S as t,it as u,_t as v,lt as w,v as x,at as y,O as z};
