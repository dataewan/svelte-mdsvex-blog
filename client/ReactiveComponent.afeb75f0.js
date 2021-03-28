import{S as t,i as n,s as r,G as e,b as i,f as a,d as o,h as u,j as l,H as s,k as c,m as h,u as f,w as g,x as m,I as d,y as p}from"./client.5a076f3e.js";import{c as v,i as M,a as y,b as w,d as b,e as x}from"./init.3d476b6c.js";function N(t){const n=t-1;return n*n*n+1}function $(t,{delay:n=0,duration:r=400,easing:e=N,x:i=0,y:a=0,opacity:o=0}){const u=getComputedStyle(t),l=+u.opacity,s="none"===u.transform?"":u.transform,c=l*(1-o);return{delay:n,duration:r,easing:e,css:(t,n)=>`\n\t\t\ttransform: ${s} translate(${(1-t)*i}px, ${(1-t)*a}px);\n\t\t\topacity: ${l-c*n}`}}function A(t,n){return t<n?-1:t>n?1:t>=n?0:NaN}function k(t){let n=t,r=t;function e(t,n,e,i){for(null==e&&(e=0),null==i&&(i=t.length);e<i;){const a=e+i>>>1;r(t[a],n)<0?e=a+1:i=a}return e}return 1===t.length&&(n=(n,r)=>t(n)-r,r=function(t){return(n,r)=>A(t(n),r)}(t)),{left:e,center:function(t,r,i,a){null==i&&(i=0),null==a&&(a=t.length);const o=e(t,r,i,a-1);return o>i&&n(t[o-1],r)>-n(t[o],r)?o-1:o},right:function(t,n,e,i){for(null==e&&(e=0),null==i&&(i=t.length);e<i;){const a=e+i>>>1;r(t[a],n)>0?i=a:e=a+1}return e}}}const S=k(A).right;k((function(t){return null===t?NaN:+t})).center;var j=Math.sqrt(50),E=Math.sqrt(10),z=Math.sqrt(2);function C(t,n,r){var e=(n-t)/Math.max(0,r),i=Math.floor(Math.log(e)/Math.LN10),a=e/Math.pow(10,i);return i>=0?(a>=j?10:a>=E?5:a>=z?2:1)*Math.pow(10,i):-Math.pow(10,-i)/(a>=j?10:a>=E?5:a>=z?2:1)}function F(t,n){let r;if(void 0===n)for(const n of t)null!=n&&(r<n||void 0===r&&n>=n)&&(r=n);else{let e=-1;for(let i of t)null!=(i=n(i,++e,t))&&(r<i||void 0===r&&i>=i)&&(r=i)}return r}function L(t,n){n||(n=[]);var r,e=t?Math.min(n.length,t.length):0,i=n.slice();return function(a){for(r=0;r<e;++r)i[r]=t[r]*(1-a)+n[r]*a;return i}}function P(t,n){var r,e=n?n.length:0,i=t?Math.min(e,t.length):0,a=new Array(i),o=new Array(e);for(r=0;r<i;++r)a[r]=I(t[r],n[r]);for(;r<e;++r)o[r]=n[r];return function(t){for(r=0;r<i;++r)o[r]=a[r](t);return o}}function q(t,n){var r=new Date;return t=+t,n=+n,function(e){return r.setTime(t*(1-e)+n*e),r}}function D(t,n){var r,e={},i={};for(r in null!==t&&"object"==typeof t||(t={}),null!==n&&"object"==typeof n||(n={}),n)r in t?e[r]=I(t[r],n[r]):i[r]=n[r];return function(t){for(r in e)i[r]=e[r](t);return i}}function I(t,n){var r,e,i=typeof n;return null==n||"boolean"===i?v(n):("number"===i?M:"string"===i?(r=y(n))?(n=r,w):b:n instanceof y?w:n instanceof Date?q:(e=n,!ArrayBuffer.isView(e)||e instanceof DataView?Array.isArray(n)?P:"function"!=typeof n.valueOf&&"function"!=typeof n.toString||isNaN(n)?D:M:L))(t,n)}function B(t,n){return t=+t,n=+n,function(r){return Math.round(t*(1-r)+n*r)}}function G(t,n){if((r=(t=n?t.toExponential(n-1):t.toExponential()).indexOf("e"))<0)return null;var r,e=t.slice(0,r);return[e.length>1?e[0]+e.slice(2):e,+t.slice(r+1)]}function O(t){return(t=G(Math.abs(t)))?t[1]:NaN}var T,V=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function X(t){if(!(n=V.exec(t)))throw new Error("invalid format: "+t);var n;return new H({fill:n[1],align:n[2],sign:n[3],symbol:n[4],zero:n[5],width:n[6],comma:n[7],precision:n[8]&&n[8].slice(1),trim:n[9],type:n[10]})}function H(t){this.fill=void 0===t.fill?" ":t.fill+"",this.align=void 0===t.align?">":t.align+"",this.sign=void 0===t.sign?"-":t.sign+"",this.symbol=void 0===t.symbol?"":t.symbol+"",this.zero=!!t.zero,this.width=void 0===t.width?void 0:+t.width,this.comma=!!t.comma,this.precision=void 0===t.precision?void 0:+t.precision,this.trim=!!t.trim,this.type=void 0===t.type?"":t.type+""}function R(t,n){var r=G(t,n);if(!r)return t+"";var e=r[0],i=r[1];return i<0?"0."+new Array(-i).join("0")+e:e.length>i+1?e.slice(0,i+1)+"."+e.slice(i+1):e+new Array(i-e.length+2).join("0")}X.prototype=H.prototype,H.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(void 0===this.width?"":Math.max(1,0|this.width))+(this.comma?",":"")+(void 0===this.precision?"":"."+Math.max(0,0|this.precision))+(this.trim?"~":"")+this.type};var U={"%":(t,n)=>(100*t).toFixed(n),b:t=>Math.round(t).toString(2),c:t=>t+"",d:function(t){return Math.abs(t=Math.round(t))>=1e21?t.toLocaleString("en").replace(/,/g,""):t.toString(10)},e:(t,n)=>t.toExponential(n),f:(t,n)=>t.toFixed(n),g:(t,n)=>t.toPrecision(n),o:t=>Math.round(t).toString(8),p:(t,n)=>R(100*t,n),r:R,s:function(t,n){var r=G(t,n);if(!r)return t+"";var e=r[0],i=r[1],a=i-(T=3*Math.max(-8,Math.min(8,Math.floor(i/3))))+1,o=e.length;return a===o?e:a>o?e+new Array(a-o+1).join("0"):a>0?e.slice(0,a)+"."+e.slice(a):"0."+new Array(1-a).join("0")+G(t,Math.max(0,n+a-1))[0]},X:t=>Math.round(t).toString(16).toUpperCase(),x:t=>Math.round(t).toString(16)};function Y(t){return t}var Z,J,K,Q=Array.prototype.map,W=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function _(t){var n,r,e=void 0===t.grouping||void 0===t.thousands?Y:(n=Q.call(t.grouping,Number),r=t.thousands+"",function(t,e){for(var i=t.length,a=[],o=0,u=n[0],l=0;i>0&&u>0&&(l+u+1>e&&(u=Math.max(1,e-l)),a.push(t.substring(i-=u,i+u)),!((l+=u+1)>e));)u=n[o=(o+1)%n.length];return a.reverse().join(r)}),i=void 0===t.currency?"":t.currency[0]+"",a=void 0===t.currency?"":t.currency[1]+"",o=void 0===t.decimal?".":t.decimal+"",u=void 0===t.numerals?Y:function(t){return function(n){return n.replace(/[0-9]/g,(function(n){return t[+n]}))}}(Q.call(t.numerals,String)),l=void 0===t.percent?"%":t.percent+"",s=void 0===t.minus?"−":t.minus+"",c=void 0===t.nan?"NaN":t.nan+"";function h(t){var n=(t=X(t)).fill,r=t.align,h=t.sign,f=t.symbol,g=t.zero,m=t.width,d=t.comma,p=t.precision,v=t.trim,M=t.type;"n"===M?(d=!0,M="g"):U[M]||(void 0===p&&(p=12),v=!0,M="g"),(g||"0"===n&&"="===r)&&(g=!0,n="0",r="=");var y="$"===f?i:"#"===f&&/[boxX]/.test(M)?"0"+M.toLowerCase():"",w="$"===f?a:/[%p]/.test(M)?l:"",b=U[M],x=/[defgprs%]/.test(M);function N(t){var i,a,l,f=y,N=w;if("c"===M)N=b(t)+N,t="";else{var $=(t=+t)<0||1/t<0;if(t=isNaN(t)?c:b(Math.abs(t),p),v&&(t=function(t){t:for(var n,r=t.length,e=1,i=-1;e<r;++e)switch(t[e]){case".":i=n=e;break;case"0":0===i&&(i=e),n=e;break;default:if(!+t[e])break t;i>0&&(i=0)}return i>0?t.slice(0,i)+t.slice(n+1):t}(t)),$&&0==+t&&"+"!==h&&($=!1),f=($?"("===h?h:s:"-"===h||"("===h?"":h)+f,N=("s"===M?W[8+T/3]:"")+N+($&&"("===h?")":""),x)for(i=-1,a=t.length;++i<a;)if(48>(l=t.charCodeAt(i))||l>57){N=(46===l?o+t.slice(i+1):t.slice(i))+N,t=t.slice(0,i);break}}d&&!g&&(t=e(t,1/0));var A=f.length+t.length+N.length,k=A<m?new Array(m-A+1).join(n):"";switch(d&&g&&(t=e(k+t,k.length?m-N.length:1/0),k=""),r){case"<":t=f+t+N+k;break;case"=":t=f+k+t+N;break;case"^":t=k.slice(0,A=k.length>>1)+f+t+N+k.slice(A);break;default:t=k+f+t+N}return u(t)}return p=void 0===p?6:/[gprs]/.test(M)?Math.max(1,Math.min(21,p)):Math.max(0,Math.min(20,p)),N.toString=function(){return t+""},N}return{format:h,formatPrefix:function(t,n){var r=h(((t=X(t)).type="f",t)),e=3*Math.max(-8,Math.min(8,Math.floor(O(n)/3))),i=Math.pow(10,-e),a=W[8+e/3];return function(t){return r(i*t)+a}}}}function tt(t){return+t}Z=_({thousands:",",grouping:[3],currency:["$",""]}),J=Z.format,K=Z.formatPrefix;var nt=[0,1];function rt(t){return t}function et(t,n){return(n-=t=+t)?function(r){return(r-t)/n}:(r=isNaN(n)?NaN:.5,function(){return r});var r}function it(t,n,r){var e=t[0],i=t[1],a=n[0],o=n[1];return i<e?(e=et(i,e),a=r(o,a)):(e=et(e,i),a=r(a,o)),function(t){return a(e(t))}}function at(t,n,r){var e=Math.min(t.length,n.length)-1,i=new Array(e),a=new Array(e),o=-1;for(t[e]<t[0]&&(t=t.slice().reverse(),n=n.slice().reverse());++o<e;)i[o]=et(t[o],t[o+1]),a[o]=r(n[o],n[o+1]);return function(n){var r=S(t,n,1,e)-1;return a[r](i[r](n))}}function ot(t,n){return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown())}function ut(){var t,n,r,e,i,a,o=nt,u=nt,l=I,s=rt;function c(){var t,n,r,l=Math.min(o.length,u.length);return s!==rt&&(t=o[0],n=o[l-1],t>n&&(r=t,t=n,n=r),s=function(r){return Math.max(t,Math.min(n,r))}),e=l>2?at:it,i=a=null,h}function h(n){return isNaN(n=+n)?r:(i||(i=e(o.map(t),u,l)))(t(s(n)))}return h.invert=function(r){return s(n((a||(a=e(u,o.map(t),M)))(r)))},h.domain=function(t){return arguments.length?(o=Array.from(t,tt),c()):o.slice()},h.range=function(t){return arguments.length?(u=Array.from(t),c()):u.slice()},h.rangeRound=function(t){return u=Array.from(t),l=B,c()},h.clamp=function(t){return arguments.length?(s=!!t||rt,c()):s!==rt},h.interpolate=function(t){return arguments.length?(l=t,c()):l},h.unknown=function(t){return arguments.length?(r=t,h):r},function(r,e){return t=r,n=e,c()}}function lt(){return ut()(rt,rt)}function st(t,n,r,e){var i,a=function(t,n,r){var e=Math.abs(n-t)/Math.max(0,r),i=Math.pow(10,Math.floor(Math.log(e)/Math.LN10)),a=e/i;return a>=j?i*=10:a>=E?i*=5:a>=z&&(i*=2),n<t?-i:i}(t,n,r);switch((e=X(null==e?",f":e)).type){case"s":var o=Math.max(Math.abs(t),Math.abs(n));return null!=e.precision||isNaN(i=function(t,n){return Math.max(0,3*Math.max(-8,Math.min(8,Math.floor(O(n)/3)))-O(Math.abs(t)))}(a,o))||(e.precision=i),K(e,o);case"":case"e":case"g":case"p":case"r":null!=e.precision||isNaN(i=function(t,n){return t=Math.abs(t),n=Math.abs(n)-t,Math.max(0,O(n)-O(t))+1}(a,Math.max(Math.abs(t),Math.abs(n))))||(e.precision=i-("e"===e.type));break;case"f":case"%":null!=e.precision||isNaN(i=function(t){return Math.max(0,-O(Math.abs(t)))}(a))||(e.precision=i-2*("%"===e.type))}return J(e)}function ct(t){var n=t.domain;return t.ticks=function(t){var r=n();return function(t,n,r){var e,i,a,o,u=-1;if(r=+r,(t=+t)===(n=+n)&&r>0)return[t];if((e=n<t)&&(i=t,t=n,n=i),0===(o=C(t,n,r))||!isFinite(o))return[];if(o>0)for(t=Math.ceil(t/o),n=Math.floor(n/o),a=new Array(i=Math.ceil(n-t+1));++u<i;)a[u]=(t+u)*o;else for(o=-o,t=Math.ceil(t*o),n=Math.floor(n*o),a=new Array(i=Math.ceil(n-t+1));++u<i;)a[u]=(t+u)/o;return e&&a.reverse(),a}(r[0],r[r.length-1],null==t?10:t)},t.tickFormat=function(t,r){var e=n();return st(e[0],e[e.length-1],null==t?10:t,r)},t.nice=function(r){null==r&&(r=10);var e,i,a=n(),o=0,u=a.length-1,l=a[o],s=a[u],c=10;for(s<l&&(i=l,l=s,s=i,i=o,o=u,u=i);c-- >0;){if((i=C(l,s,r))===e)return a[o]=l,a[u]=s,n(a);if(i>0)l=Math.floor(l/i)*i,s=Math.ceil(s/i)*i;else{if(!(i<0))break;l=Math.ceil(l*i)/i,s=Math.floor(s*i)/i}e=i}return t},t}function ht(){var t=lt();return t.copy=function(){return ot(t,ht())},x.apply(t,arguments),ct(t)}function ft(t,n,r){const e=t.slice();return e[10]=n[r],e[12]=r,e}function gt(t){let n,r,c,h,f;return{c(){n=e("rect"),this.h()},l(t){n=i(t,"rect",{x:!0,y:!0,width:!0,height:!0,fill:!0},1),a(n).forEach(o),this.h()},h(){u(n,"x","0"),u(n,"y",r=t[5](t[12])),u(n,"width",c=t[4](t[10])),u(n,"height","10"),u(n,"fill","#00bed1")},m(t,r){l(t,n,r),f=!0},p(t,e){(!f||32&e&&r!==(r=t[5](t[12])))&&u(n,"y",r),(!f||24&e&&c!==(c=t[4](t[10])))&&u(n,"width",c)},i(t){f||(d(()=>{h||(h=s(n,$,{x:-100},!0)),h.run(1)}),f=!0)},o(t){h||(h=s(n,$,{x:-100},!1)),h.run(0),f=!1},d(t){t&&o(n),t&&h&&h.end()}}}function mt(t){let n,r,s,d,v=t[3],M=[];for(let n=0;n<v.length;n+=1)M[n]=gt(ft(t,v,n));const y=t=>f(M[t],1,1,()=>{M[t]=null});return{c(){n=e("svg"),r=e("g");for(let t=0;t<M.length;t+=1)M[t].c();this.h()},l(t){n=i(t,"svg",{width:!0,height:!0},1);var e=a(n);r=i(e,"g",{transform:!0},1);var u=a(r);for(let t=0;t<M.length;t+=1)M[t].l(u);u.forEach(o),e.forEach(o),this.h()},h(){u(r,"transform",s=`translate(${t[2].left} ${t[2].top})`),u(n,"width",t[0]),u(n,"height",t[1])},m(t,e){l(t,n,e),c(n,r);for(let t=0;t<M.length;t+=1)M[t].m(r,null);d=!0},p(t,[e]){if(56&e){let n;for(v=t[3],n=0;n<v.length;n+=1){const i=ft(t,v,n);M[n]?(M[n].p(i,e),h(M[n],1)):(M[n]=gt(i),M[n].c(),h(M[n],1),M[n].m(r,null))}for(p(),n=v.length;n<M.length;n+=1)y(n);g()}(!d||4&e&&s!==(s=`translate(${t[2].left} ${t[2].top})`))&&u(r,"transform",s),(!d||1&e)&&u(n,"width",t[0]),(!d||2&e)&&u(n,"height",t[1])},i(t){if(!d){for(let t=0;t<v.length;t+=1)h(M[t]);d=!0}},o(t){M=M.filter(Boolean);for(let t=0;t<M.length;t+=1)f(M[t]);d=!1},d(t){t&&o(n),m(M,t)}}}function dt(t,n,r){let{rawdata:e}=n,{width:i=500}=n,{height:a=400}=n,{margins:o={top:20,bottom:20,left:20,right:20}}=n;let u,l,s,c,h;return t.$$set=t=>{"rawdata"in t&&r(6,e=t.rawdata),"width"in t&&r(0,i=t.width),"height"in t&&r(1,a=t.height),"margins"in t&&r(2,o=t.margins)},t.$$.update=()=>{64&t.$$.dirty&&r(3,u=(t=>{if(!t)return[];return t.split(/\r?\n/).map(t=>parseInt(t)).filter(t=>Number.isInteger(t))})(e)),5&t.$$.dirty&&r(7,l=i-o.left-o.right),6&t.$$.dirty&&r(8,s=a-o.top-o.bottom),136&t.$$.dirty&&r(4,c=ht().domain([0,F(u)]).range([0,l])),264&t.$$.dirty&&r(5,h=ht().domain([0,u.length]).range([s,0]))},[i,a,o,u,c,h,e]}export default class extends t{constructor(t){super(),n(this,t,dt,mt,r,{rawdata:6,width:0,height:1,margins:2})}}
