(()=>{"use strict";var e,t,n,r,o,a,c,i,s,d,l,u,p,m,f,h={28:(e,t,n)=>{n.d(t,{Z:()=>p});var r=n(81),o=n.n(r),a=n(645),c=n.n(a),i=n(667),s=n.n(i),d=new URL(n(811),n.b),l=c()(o()),u=s()(d);l.push([e.id,`.title {\n    color: red;\n}\n\n.hero {\n    background: url(${u});\n}`,""]);const p=l},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&c[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},c=[],i=0;i<e.length;i++){var s=e[i],d=r.base?s[0]+r.base:s[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=n(u),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var f=o(m,r);r.byIndex=i,t.splice(i,0,{identifier:u,updater:f,references:1})}c.push(u)}return c}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var i=n(a[c]);t[i].references--}for(var s=r(e,o),d=0;d<a.length;d++){var l=n(a[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=s}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},811:(e,t,n)=>{e.exports=n.p+"d9bca1e874f22a9c8628.jpg"}},v={};function y(e){var t=v[e];if(void 0!==t)return t.exports;var n=v[e]={id:e,exports:{}};return h[e](n,n.exports,y),n.exports}y.m=h,y.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return y.d(t,{a:t}),t},y.d=(e,t)=>{for(var n in t)y.o(t,n)&&!y.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},y.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),y.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;y.g.importScripts&&(e=y.g.location+"");var t=y.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");if(n.length)for(var r=n.length-1;r>-1&&!e;)e=n[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),y.p=e})(),y.b=document.baseURI||self.location.href,y.nc=void 0,e=y(811),t=y(379),n=y.n(t),r=y(795),o=y.n(r),a=y(569),c=y.n(a),i=y(565),s=y.n(i),d=y(216),l=y.n(d),u=y(589),p=y.n(u),m=y(28),(f={}).styleTagTransform=p(),f.setAttributes=s(),f.insert=c().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=l(),n()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals,(()=>{let t=document.querySelector("#content");(()=>{const e=document.createElement("div");e.classList.add("title");const n=document.createElement("h1");n.textContent="New Resturant",e.appendChild(n),t.appendChild(e)})(),(()=>{let n=document.createElement("div");n.classList.add("hero");let r=document.createElement("h2");r.classList.add("subtitle"),r.textContent="Best Food Around!",n.appendChild(r);const o=new Image;o.src=e,n.appendChild(o),t.appendChild(n)})(),(()=>{let e=document.createElement("section");e.classList.add("hours-section");let n=document.createElement("h3");n.textContent="Business Hours";let r=document.createElement("div");r.classList.add("hours");let o=document.createElement("p");o.textContent="Monday: 12am - 8pm",r.appendChild(o);let a=document.createElement("p");a.textContent="Tuesday: 12am - 8pm",r.appendChild(a);let c=document.createElement("p");c.textContent="Wednesday: 12am - 8pm",r.appendChild(c);let i=document.createElement("p");i.textContent="Thursday: 12am - 8pm",r.appendChild(i);let s=document.createElement("p");s.textContent="Friday: 12am - 8pm",r.appendChild(s);let d=document.createElement("p");d.textContent="Saturday: 12am - 8pm",r.appendChild(d);let l=document.createElement("p");l.textContent="Sunday: 12am - 8pm",r.appendChild(l),e.appendChild(n),e.appendChild(r),t.appendChild(e)})()})()})();