(()=>{var e,r,t,n,o={44:(e,r,t)=>{Promise.all([t.e(545),t.e(875),t.e(987),t.e(951)]).then(t.bind(t,951))},897:(e,r,t)=>{"use strict";var n=new Error;e.exports=new Promise(((e,r)=>{if("undefined"!=typeof host)return e();t.l("http://192.168.179.28:8080/remoteEntry.js",(t=>{if("undefined"!=typeof host)return e();var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;n.message="Loading script failed.\n("+o+": "+a+")",n.name="ScriptExternalLoadError",n.type=o,n.request=a,r(n)}),"host")})).then((()=>host))}},a={};function i(e){var r=a[e];if(void 0!==r)return r.exports;var t=a[e]={id:e,exports:{}};return o[e](t,t.exports,i),t.exports}i.m=o,i.c=a,i.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return i.d(r,{a:r}),r},i.d=(e,r)=>{for(var t in r)i.o(r,t)&&!i.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce(((r,t)=>(i.f[t](e,r),r)),[])),i.u=e=>e+".js",i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="header:",i.l=(t,n,o,a)=>{if(e[t])e[t].push(n);else{var u,s;if(void 0!==o)for(var f=document.getElementsByTagName("script"),l=0;l<f.length;l++){var p=f[l];if(p.getAttribute("src")==t||p.getAttribute("data-webpack")==r+o){u=p;break}}u||(s=!0,(u=document.createElement("script")).charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.setAttribute("data-webpack",r+o),u.src=t),e[t]=[n];var h=(r,n)=>{u.onerror=u.onload=null,clearTimeout(d);var o=e[t];if(delete e[t],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((e=>e(n))),r)return r(n)},d=setTimeout(h.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=h.bind(null,u.onerror),u.onload=h.bind(null,u.onload),s&&document.head.appendChild(u)}},i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t={987:[987]},n={987:["default","./useHost",897]},i.f.remotes=(e,r)=>{i.o(t,e)&&t[e].forEach((e=>{var t=i.R;t||(t=[]);var o=n[e];if(!(t.indexOf(o)>=0)){if(t.push(o),o.p)return r.push(o.p);var a=r=>{r||(r=new Error("Container missing")),"string"==typeof r.message&&(r.message+='\nwhile loading "'+o[1]+'" from '+o[2]),i.m[e]=()=>{throw r},o.p=0},u=(e,t,n,i,u,s)=>{try{var f=e(t,n);if(!f||!f.then)return u(f,i,s);var l=f.then((e=>u(e,i)),a);if(!s)return l;r.push(o.p=l)}catch(e){a(e)}},s=(e,r,n)=>u(r.get,o[1],t,0,f,n),f=r=>{o.p=1,i.m[e]=e=>{e.exports=r()}};u(i,o[2],0,0,((e,r,t)=>e?u(i.I,o[0],0,e,s,t):a()),1)}}))},(()=>{i.S={};var e={},r={};i.I=(t,n)=>{n||(n=[]);var o,a,u,s,f=r[t];if(f||(f=r[t]={}),!(n.indexOf(f)>=0)){if(n.push(f),e[t])return e[t];i.o(i.S,t)||(i.S[t]={});var l=i.S[t],p="header",h=[];return"default"===t&&(o="3.4.21",u=l.vue=l.vue||{},(!(s=u[o])||!s.loaded&&(1!=!s.eager?a:p>s.from))&&(u[o]={get:()=>i.e(31).then((()=>()=>i(31))),from:p,eager:!1}),(e=>{var r=e=>{return r="Initialization of sharing external failed: "+e,void("undefined"!=typeof console&&console.warn&&console.warn(r));var r};try{var o=i(897);if(!o)return;var a=e=>e&&e.init&&e.init(i.S[t],n);if(o.then)return h.push(o.then(a,r));var u=a(o);if(u&&u.then)return h.push(u.catch(r))}catch(e){r(e)}})()),h.length?e[t]=Promise.all(h).then((()=>e[t]=1)):e[t]=1}}})(),(()=>{var e;i.g.importScripts&&(e=i.g.location+"");var r=i.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");if(t.length)for(var n=t.length-1;n>-1&&(!e||!/^http(s?):/.test(e));)e=t[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=e})(),(()=>{var e=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},r=(t,n)=>{if(0 in t){n=e(n);var o=t[0],a=o<0;a&&(o=-o-1);for(var i=0,u=1,s=!0;;u++,i++){var f,l,p=u<t.length?(typeof t[u])[0]:"";if(i>=n.length||"o"==(l=(typeof(f=n[i]))[0]))return!s||("u"==p?u>o&&!a:""==p!=a);if("u"==l){if(!s||"u"!=p)return!1}else if(s)if(p==l)if(u<=o){if(f!=t[u])return!1}else{if(a?f>t[u]:f<t[u])return!1;f!=t[u]&&(s=!1)}else if("s"!=p&&"n"!=p){if(a||u<=o)return!1;s=!1,u--}else{if(u<=o||l<p!=a)return!1;s=!1}else"s"!=p&&"n"!=p&&(s=!1,u--)}}var h=[],d=h.pop.bind(h);for(i=1;i<t.length;i++){var c=t[i];h.push(1==c?d()|d():2==c?d()&d():c?r(c,n):!d())}return!!d()},t=(t,n,o)=>{var a=t[n];return(n=Object.keys(a).reduce(((t,n)=>!r(o,n)||t&&!((r,t)=>{r=e(r),t=e(t);for(var n=0;;){if(n>=r.length)return n<t.length&&"u"!=(typeof t[n])[0];var o=r[n],a=(typeof o)[0];if(n>=t.length)return"u"==a;var i=t[n],u=(typeof i)[0];if(a!=u)return"o"==a&&"n"==u||"s"==u||"u"==a;if("o"!=a&&"u"!=a&&o!=i)return o<i;n++}})(t,n)?t:n),0))&&a[n]},n=(e=>function(r,t,n,o){var a=i.I(r);return a&&a.then?a.then(e.bind(e,r,i.S[r],t,n,o)):e(r,i.S[r],t,n,o)})(((e,r,n,o,a)=>{var u=r&&i.o(r,n)&&t(r,n,o);return u?(e=>(e.loaded=1,e.get()))(u):a()})),o={},a={875:()=>n("default","vue",[1,3,2,19],(()=>i.e(31).then((()=>()=>i(31)))))},u={875:[875]},s={};i.f.consumes=(e,r)=>{i.o(u,e)&&u[e].forEach((e=>{if(i.o(o,e))return r.push(o[e]);if(!s[e]){var t=r=>{o[e]=0,i.m[e]=t=>{delete i.c[e],t.exports=r()}};s[e]=!0;var n=r=>{delete o[e],i.m[e]=t=>{throw delete i.c[e],r}};try{var u=a[e]();u.then?r.push(o[e]=u.then(t).catch(n)):t(u)}catch(e){n(e)}}}))}})(),(()=>{i.b=document.baseURI||self.location.href;var e={792:0};i.f.j=(r,t)=>{var n=i.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else if(/^(875|987)$/.test(r))e[r]=0;else{var o=new Promise(((t,o)=>n=e[r]=[t,o]));t.push(n[2]=o);var a=i.p+i.u(r),u=new Error;i.l(a,(t=>{if(i.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;u.message="Loading chunk "+r+" failed.\n("+o+": "+a+")",u.name="ChunkLoadError",u.type=o,u.request=a,n[1](u)}}),"chunk-"+r,r)}};var r=(r,t)=>{var n,o,[a,u,s]=t,f=0;if(a.some((r=>0!==e[r]))){for(n in u)i.o(u,n)&&(i.m[n]=u[n]);s&&s(i)}for(r&&r(t);f<a.length;f++)o=a[f],i.o(e,o)&&e[o]&&e[o][0](),e[o]=0},t=self.webpackChunkheader=self.webpackChunkheader||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),i.nc=void 0,i(44)})();