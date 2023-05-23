(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var k;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var da=ca(this);function p(a,b){if(b)a:{var c=da;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
p("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.h=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.h};
var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
p("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=da[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ea(aa(this))}})}return a});
function ea(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function ia(a){return a.raw=a}
function r(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];if(b)return b.call(a);if("number"==typeof a.length)return{next:aa(a)};throw Error(String(a)+" is not an iterable or ArrayLike");}
function ja(a){if(!(a instanceof Array)){a=r(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function ka(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var la="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)ka(d,e)&&(a[e]=d[e])}return a};
p("Object.assign",function(a){return a||la});
var oa="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},pa=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=oa(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),qa;
if("function"==typeof Object.setPrototypeOf)qa=Object.setPrototypeOf;else{var ra;a:{var sa={a:!0},ta={};try{ta.__proto__=sa;ra=ta.a;break a}catch(a){}ra=!1}qa=ra?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ua=qa;
function v(a,b){a.prototype=oa(b.prototype);a.prototype.constructor=a;if(ua)ua(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.ta=b.prototype}
function va(){this.v=!1;this.l=null;this.i=void 0;this.h=1;this.m=this.s=0;this.qa=this.j=null}
function wa(a){if(a.v)throw new TypeError("Generator is already running");a.v=!0}
va.prototype.W=function(a){this.i=a};
function xa(a,b){a.j={kd:b,ud:!0};a.h=a.s||a.m}
va.prototype.return=function(a){this.j={return:a};this.h=this.m};
function w(a,b,c){a.h=c;return{value:b}}
va.prototype.A=function(a){this.h=a};
function za(a,b,c){a.s=b;void 0!=c&&(a.m=c)}
function Aa(a,b){a.h=b;a.s=0}
function Ba(a){a.s=0;var b=a.j.kd;a.j=null;return b}
function Da(a){a.qa=[a.j];a.s=0;a.m=0}
function Ea(a){var b=a.qa.splice(0)[0];(b=a.j=a.j||b)?b.ud?a.h=a.s||a.m:void 0!=b.A&&a.m<b.A?(a.h=b.A,a.j=null):a.h=a.m:a.h=0}
function Fa(a){this.h=new va;this.i=a}
function Ga(a,b){wa(a.h);var c=a.h.l;if(c)return Ha(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h.return);
a.h.return(b);return Ia(a)}
function Ha(a,b,c,d){try{var e=b.call(a.h.l,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.h.v=!1,e;var f=e.value}catch(g){return a.h.l=null,xa(a.h,g),Ia(a)}a.h.l=null;d.call(a.h,f);return Ia(a)}
function Ia(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.v=!1,{value:b.value,done:!1}}catch(c){a.h.i=void 0,xa(a.h,c)}a.h.v=!1;if(a.h.j){b=a.h.j;a.h.j=null;if(b.ud)throw b.kd;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ja(a){this.next=function(b){wa(a.h);a.h.l?b=Ha(a,a.h.l.next,b,a.h.W):(a.h.W(b),b=Ia(a));return b};
this.throw=function(b){wa(a.h);a.h.l?b=Ha(a,a.h.l["throw"],b,a.h.W):(xa(a.h,b),b=Ia(a));return b};
this.return=function(b){return Ga(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ka(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function x(a){return Ka(new Ja(new Fa(a)))}
function La(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
p("Reflect",function(a){return a?a:{}});
p("Reflect.construct",function(){return pa});
p("Reflect.setPrototypeOf",function(a){return a?a:ua?function(b,c){try{return ua(b,c),!0}catch(d){return!1}}:null});
p("Promise",function(a){function b(g){this.h=0;this.j=void 0;this.i=[];this.v=!1;var h=this.l();try{g(h.resolve,h.reject)}catch(l){h.reject(l)}}
function c(){this.h=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(null==this.h){this.h=[];var h=this;this.j(function(){h.m()})}this.h.push(g)};
var e=da.setTimeout;c.prototype.j=function(g){e(g,0)};
c.prototype.m=function(){for(;this.h&&this.h.length;){var g=this.h;this.h=[];for(var h=0;h<g.length;++h){var l=g[h];g[h]=null;try{l()}catch(m){this.l(m)}}}this.h=null};
c.prototype.l=function(g){this.j(function(){throw g;})};
b.prototype.l=function(){function g(m){return function(n){l||(l=!0,m.call(h,n))}}
var h=this,l=!1;return{resolve:g(this.T),reject:g(this.m)}};
b.prototype.T=function(g){if(g===this)this.m(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.Y(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.M(g):this.s(g)}};
b.prototype.M=function(g){var h=void 0;try{h=g.then}catch(l){this.m(l);return}"function"==typeof h?this.aa(h,g):this.s(g)};
b.prototype.m=function(g){this.W(2,g)};
b.prototype.s=function(g){this.W(1,g)};
b.prototype.W=function(g,h){if(0!=this.h)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.h);this.h=g;this.j=h;2===this.h&&this.X();this.qa()};
b.prototype.X=function(){var g=this;e(function(){if(g.H()){var h=da.console;"undefined"!==typeof h&&h.error(g.j)}},1)};
b.prototype.H=function(){if(this.v)return!1;var g=da.CustomEvent,h=da.Event,l=da.dispatchEvent;if("undefined"===typeof l)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=da.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.j;return l(g)};
b.prototype.qa=function(){if(null!=this.i){for(var g=0;g<this.i.length;++g)f.i(this.i[g]);this.i=null}};
var f=new c;b.prototype.Y=function(g){var h=this.l();g.cc(h.resolve,h.reject)};
b.prototype.aa=function(g,h){var l=this.l();try{g.call(h,l.resolve,l.reject)}catch(m){l.reject(m)}};
b.prototype.then=function(g,h){function l(u,t){return"function"==typeof u?function(z){try{m(u(z))}catch(C){n(C)}}:t}
var m,n,q=new b(function(u,t){m=u;n=t});
this.cc(l(g,m),l(h,n));return q};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.cc=function(g,h){function l(){switch(m.h){case 1:g(m.j);break;case 2:h(m.j);break;default:throw Error("Unexpected state: "+m.h);}}
var m=this;null==this.i?f.i(l):this.i.push(l);this.v=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,l){l(g)})};
b.race=function(g){return new b(function(h,l){for(var m=r(g),n=m.next();!n.done;n=m.next())d(n.value).cc(h,l)})};
b.all=function(g){var h=r(g),l=h.next();return l.done?d([]):new b(function(m,n){function q(z){return function(C){u[z]=C;t--;0==t&&m(u)}}
var u=[],t=0;do u.push(void 0),t++,d(l.value).cc(q(u.length-1),n),l=h.next();while(!l.done)})};
return b});
p("WeakMap",function(a){function b(l){this.h=(h+=Math.random()+1).toString();if(l){l=r(l);for(var m;!(m=l.next()).done;)m=m.value,this.set(m[0],m[1])}}
function c(){}
function d(l){var m=typeof l;return"object"===m&&null!==l||"function"===m}
function e(l){if(!ka(l,g)){var m=new c;ba(l,g,{value:m})}}
function f(l){var m=Object[l];m&&(Object[l]=function(n){if(n instanceof c)return n;Object.isExtensible(n)&&e(n);return m(n)})}
if(function(){if(!a||!Object.seal)return!1;try{var l=Object.seal({}),m=Object.seal({}),n=new a([[l,2],[m,3]]);if(2!=n.get(l)||3!=n.get(m))return!1;n.delete(l);n.set(m,4);return!n.has(l)&&4==n.get(m)}catch(q){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(l,m){if(!d(l))throw Error("Invalid WeakMap key");e(l);if(!ka(l,g))throw Error("WeakMap key fail: "+l);l[g][this.h]=m;return this};
b.prototype.get=function(l){return d(l)&&ka(l,g)?l[g][this.h]:void 0};
b.prototype.has=function(l){return d(l)&&ka(l,g)&&ka(l[g],this.h)};
b.prototype.delete=function(l){return d(l)&&ka(l,g)&&ka(l[g],this.h)?delete l[g][this.h]:!1};
return b});
p("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,l){var m=h.h;return ea(function(){if(m){for(;m.head!=h.h;)m=m.previous;for(;m.next!=m.head;)return m=m.next,{done:!1,value:l(m)};m=null}return{done:!0,value:void 0}})}
function d(h,l){var m=l&&typeof l;"object"==m||"function"==m?f.has(l)?m=f.get(l):(m=""+ ++g,f.set(l,m)):m="p_"+l;var n=h.data_[m];if(n&&ka(h.data_,m))for(h=0;h<n.length;h++){var q=n[h];if(l!==l&&q.key!==q.key||l===q.key)return{id:m,list:n,index:h,entry:q}}return{id:m,list:n,index:-1,entry:void 0}}
function e(h){this.data_={};this.h=b();this.size=0;if(h){h=r(h);for(var l;!(l=h.next()).done;)l=l.value,this.set(l[0],l[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),l=new a(r([[h,"s"]]));if("s"!=l.get(h)||1!=l.size||l.get({x:4})||l.set({x:4},"t")!=l||2!=l.size)return!1;var m=l.entries(),n=m.next();if(n.done||n.value[0]!=h||"s"!=n.value[1])return!1;n=m.next();return n.done||4!=n.value[0].x||"t"!=n.value[1]||!m.next().done?!1:!0}catch(q){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,l){h=0===h?0:h;var m=d(this,h);m.list||(m.list=this.data_[m.id]=[]);m.entry?m.entry.value=l:(m.entry={next:this.h,previous:this.h.previous,head:this.h,key:h,value:l},m.list.push(m.entry),this.h.previous.next=m.entry,this.h.previous=m.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.data_[h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.data_={};this.h=this.h.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,l){for(var m=this.entries(),n;!(n=m.next()).done;)n=n.value,h.call(l,n[1],n[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function Ma(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
p("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ma(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
p("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
p("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ma(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
p("Number.isFinite",function(a){return a?a:function(b){return"number"!==typeof b?!1:!isNaN(b)&&Infinity!==b&&-Infinity!==b}});
p("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
p("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
function Na(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
p("Array.prototype.entries",function(a){return a?a:function(){return Na(this,function(b,c){return[b,c]})}});
p("Array.prototype.keys",function(a){return a?a:function(){return Na(this,function(b){return b})}});
p("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
p("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
p("Array.prototype.values",function(a){return a?a:function(){return Na(this,function(b,c){return c})}});
p("Object.setPrototypeOf",function(a){return a||ua});
p("Set",function(a){function b(c){this.h=new Map;if(c){c=r(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.h.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(r([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.h.set(c,c);this.size=this.h.size;return this};
b.prototype.delete=function(c){c=this.h.delete(c);this.size=this.h.size;return c};
b.prototype.clear=function(){this.h.clear();this.size=0};
b.prototype.has=function(c){return this.h.has(c)};
b.prototype.entries=function(){return this.h.entries()};
b.prototype.values=function(){return this.h.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.h.forEach(function(f){return c.call(d,f,f,e)})};
return b});
p("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)ka(b,d)&&c.push([d,b[d]]);return c}});
p("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
p("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
p("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Ma(this,b,"includes").indexOf(b,c||0)}});
p("globalThis",function(a){return a||da});
p("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)ka(b,d)&&c.push(b[d]);return c}});
var Oa=Oa||{},y=this||self;function A(a,b,c){a=a.split(".");c=c||y;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function B(a,b){a=a.split(".");b=b||y;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function Pa(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Qa(a){var b=Pa(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Sa(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Ta(a){return Object.prototype.hasOwnProperty.call(a,Ua)&&a[Ua]||(a[Ua]=++Va)}
var Ua="closure_uid_"+(1E9*Math.random()>>>0),Va=0;function Wa(a,b,c){return a.call.apply(a.bind,arguments)}
function Xa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Ya(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Ya=Wa:Ya=Xa;return Ya.apply(null,arguments)}
function Za(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function $a(a,b){function c(){}
c.prototype=b.prototype;a.ta=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.og=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function ab(a){return a}
;function bb(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,bb);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.cause=b)}
$a(bb,Error);bb.prototype.name="CustomError";function cb(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.j=!b&&/[?&]ae=1(&|$)/.test(a);this.l=!b&&/[?&]ae=2(&|$)/.test(a);if((this.h=/[?&]adurl=([^&]*)/.exec(a))&&this.h[1]){try{var c=decodeURIComponent(this.h[1])}catch(d){c=null}this.i=c}}
;function db(){}
function eb(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var fb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},gb=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},hb=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f="string"===typeof a?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},ib=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},jb=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
gb(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function kb(a,b){a:{for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:"string"===typeof a?a.charAt(b):a[b]}
function lb(a,b){b=fb(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function mb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Qa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function nb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function ob(a){var b=pb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function qb(a){for(var b in a)return!1;return!0}
function rb(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function sb(a){return null!==a&&"privembed"in a?a.privembed:!1}
function tb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function ub(a){var b={},c;for(c in a)b[c]=a[c];return b}
function vb(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);if(a instanceof Date)return new Date(a.getTime());var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=vb(a[c]);return b}
var wb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function xb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<wb.length;f++)c=wb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var yb;function zb(){if(void 0===yb){var a=null,b=y.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:ab,createScript:ab,createScriptURL:ab})}catch(c){y.console&&y.console.error(c.message)}yb=a}else yb=a}return yb}
;function Ab(a,b){this.j=a===Bb&&b||""}
Ab.prototype.i=!0;Ab.prototype.h=function(){return this.j};
function Cb(a){return new Ab(Bb,a)}
var Bb={};Cb("");var Db={};function Eb(a,b){this.j=b===Db?a:"";this.i=!0}
Eb.prototype.toString=function(){return this.j.toString()};
Eb.prototype.h=function(){return this.j.toString()};function Fb(a,b){this.j=b===Gb?a:""}
Fb.prototype.toString=function(){return this.j+""};
Fb.prototype.i=!0;Fb.prototype.h=function(){return this.j.toString()};
function Hb(a){if(a instanceof Fb&&a.constructor===Fb)return a.j;Pa(a);return"type_error:TrustedResourceUrl"}
var Gb={};function Ib(a){var b=zb();a=b?b.createScriptURL(a):a;return new Fb(a,Gb)}
;var Jb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function Kb(a,b){return a<b?-1:a>b?1:0}
;function Lb(a,b){this.j=b===Mb?a:""}
Lb.prototype.toString=function(){return this.j.toString()};
Lb.prototype.i=!0;Lb.prototype.h=function(){return this.j.toString()};
function Nb(a){if(a instanceof Lb&&a.constructor===Lb)return a.j;Pa(a);return"type_error:SafeUrl"}
var Ob;try{new URL("s://g"),Ob=!0}catch(a){Ob=!1}var Pb=Ob,Mb={},Qb=new Lb("about:invalid#zClosurez",Mb);var Rb,Ub=B("CLOSURE_FLAGS"),Vb=Ub&&Ub[610401301];Rb=null!=Vb?Vb:!1;function Wb(){var a=y.navigator;return a&&(a=a.userAgent)?a:""}
var Xb,Yb=y.navigator;Xb=Yb?Yb.userAgentData||null:null;function Zb(a){return Rb?Xb?Xb.brands.some(function(b){return(b=b.brand)&&-1!=b.indexOf(a)}):!1:!1}
function D(a){return-1!=Wb().indexOf(a)}
;function $b(){return Rb?!!Xb&&0<Xb.brands.length:!1}
function ac(){return $b()?!1:D("Opera")}
function bc(){return $b()?!1:D("Trident")||D("MSIE")}
function cc(){return $b()?!1:D("Edge")}
function dc(){return $b()?Zb("Microsoft Edge"):D("Edg/")}
function ec(){return D("Firefox")||D("FxiOS")}
function fc(){return D("Safari")&&!(gc()||($b()?0:D("Coast"))||ac()||cc()||dc()||($b()?Zb("Opera"):D("OPR"))||ec()||D("Silk")||D("Android"))}
function gc(){return $b()?Zb("Chromium"):(D("Chrome")||D("CriOS"))&&!cc()||D("Silk")}
function hc(){return D("Android")&&!(gc()||ec()||ac()||D("Silk"))}
function ic(a){var b={};a.forEach(function(c){b[c[0]]=c[1]});
return function(c){return b[c.find(function(d){return d in b})]||""}}
function jc(a){var b=Wb();if("Internet Explorer"===a){if(bc())if((a=/rv: *([\d\.]*)/.exec(b))&&a[1])b=a[1];else{a="";var c=/MSIE +([\d\.]+)/.exec(b);if(c&&c[1])if(b=/Trident\/(\d.\d)/.exec(b),"7.0"==c[1])if(b&&b[1])switch(b[1]){case "4.0":a="8.0";break;case "5.0":a="9.0";break;case "6.0":a="10.0";break;case "7.0":a="11.0"}else a="7.0";else a=c[1];b=a}else b="";return b}var d=RegExp("([A-Z][\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?","g");c=[];for(var e;e=d.exec(b);)c.push([e[1],e[2],e[3]||void 0]);b=ic(c);
switch(a){case "Opera":if(ac())return b(["Version","Opera"]);if($b()?Zb("Opera"):D("OPR"))return b(["OPR"]);break;case "Microsoft Edge":if(cc())return b(["Edge"]);if(dc())return b(["Edg"]);break;case "Chromium":if(gc())return b(["Chrome","CriOS","HeadlessChrome"])}return"Firefox"===a&&ec()||"Safari"===a&&fc()||"Android Browser"===a&&hc()||"Silk"===a&&D("Silk")?(b=c[2])&&b[1]||"":""}
function kc(a){if($b()&&"Silk"!==a){var b=Xb.brands.find(function(c){return c.brand===a});
if(!b||!b.version)return NaN;b=b.version.split(".")}else{b=jc(a);if(""===b)return NaN;b=b.split(".")}return 0===b.length?NaN:Number(b[0])}
;var lc={};function mc(a){this.j=lc===lc?a:"";this.i=!0}
mc.prototype.h=function(){return this.j.toString()};
mc.prototype.toString=function(){return this.j.toString()};function nc(a,b){if(!(b instanceof Lb||b instanceof Lb)){b="object"==typeof b&&b.i?b.h():String(b);b:{var c=b;if(Pb){try{var d=new URL(c)}catch(e){c="https:";break b}c=d.protocol}else c:{d=document.createElement("a");try{d.href=c}catch(e){c=void 0;break c}c=d.protocol;c=":"===c||""===c?"https:":c}}"javascript:"!==c||(b="about:invalid#zClosurez");b=new Lb(b,Mb)}a.href=Nb(b)}
function pc(a,b){a.rel="stylesheet";a.href=Hb(b).toString();(b=qc('style[nonce],link[rel="stylesheet"][nonce]',a.ownerDocument&&a.ownerDocument.defaultView))&&a.setAttribute("nonce",b)}
function rc(){return qc("script[nonce]")}
var sc=/^[\w+/_-]+[=]{0,2}$/;function qc(a,b){b=(b||y).document;return b.querySelector?(a=b.querySelector(a))&&(a=a.nonce||a.getAttribute("nonce"))&&sc.test(a)?a:"":""}
;function tc(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var uc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function vc(a){return a?decodeURI(a):a}
function wc(a,b){return b.match(uc)[a]||null}
function xc(a){return vc(wc(3,a))}
function yc(a){var b=a.match(uc);a=b[5];var c=b[6];b=b[7];var d="";a&&(d+=a);c&&(d+="?"+c);b&&(d+="#"+b);return d}
function zc(a,b){if(!b)return a;var c=a.indexOf("#");0>c&&(c=a.length);var d=a.indexOf("?");if(0>d||d>c){d=c;var e=""}else e=a.substring(d+1,c);a=[a.slice(0,d),e,a.slice(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;return a[0]+(a[1]?"?"+a[1]:"")+a[2]}
function Ac(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)Ac(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function Bc(a,b){var c=[];for(b=b||0;b<a.length;b+=2)Ac(a[b],a[b+1],c);return c.join("&")}
function Cc(a){var b=[],c;for(c in a)Ac(c,a[c],b);return b.join("&")}
function Dc(a,b){var c=2==arguments.length?Bc(arguments[1],0):Bc(arguments,1);return zc(a,c)}
function Ec(a,b){b=Cc(b);return zc(a,b)}
function Fc(a,b,c){c=null!=c?"="+encodeURIComponent(String(c)):"";return zc(a,b+c)}
function Gc(a,b,c,d){for(var e=c.length;0<=(b=a.indexOf(c,b))&&b<d;){var f=a.charCodeAt(b-1);if(38==f||63==f)if(f=a.charCodeAt(b+e),!f||61==f||38==f||35==f)return b;b+=e+1}return-1}
var Hc=/#|$/,Ic=/[?&]($|#)/;function Jc(a,b){for(var c=a.search(Hc),d=0,e,f=[];0<=(e=Gc(a,d,b,c));)f.push(a.substring(d,e)),d=Math.min(a.indexOf("&",e)+1||c,c);f.push(a.slice(d));return f.join("").replace(Ic,"$1")}
;function Kc(a){y.setTimeout(function(){throw a;},0)}
;function Lc(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b}
;function Mc(){return Rb?!!Xb&&!!Xb.platform:!1}
function Nc(){return Mc()?"Android"===Xb.platform:D("Android")}
function Uc(){return D("iPhone")&&!D("iPod")&&!D("iPad")}
function Vc(){var a=Wb(),b="";if(Mc()?"Windows"===Xb.platform:D("Windows"))b=/Windows (?:NT|Phone) ([0-9.]+)/,b=(a=b.exec(a))?a[1]:"0.0";else if(Uc()||D("iPad")||D("iPod"))b=/(?:iPhone|iPod|iPad|CPU)\s+OS\s+(\S+)/,b=(a=b.exec(a))&&a[1].replace(/_/g,".");else if(Mc()?"macOS"===Xb.platform:D("Macintosh"))b=/Mac OS X ([0-9_.]+)/,b=(a=b.exec(a))?a[1].replace(/_/g,"."):"10";else if(-1!=Wb().toLowerCase().indexOf("kaios"))b=/(?:KaiOS)\/(\S+)/i,b=(a=b.exec(a))&&a[1];else if(Nc())b=/Android\s+([^\);]+)(\)|;)/,
b=(a=b.exec(a))&&a[1];else if(Mc()?"Chrome OS"===Xb.platform:D("CrOS"))b=/(?:CrOS\s+(?:i686|x86_64)\s+([0-9.]+))/,b=(a=b.exec(a))&&a[1];a=0;b=Jb(String(b||"")).split(".");for(var c=Jb("12").split("."),d=Math.max(b.length,c.length),e=0;0==a&&e<d;e++){var f=b[e]||"",g=c[e]||"";do{f=/(\d*)(\D*)(.*)/.exec(f)||["","","",""];g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];if(0==f[0].length&&0==g[0].length)break;a=Kb(0==f[1].length?0:parseInt(f[1],10),0==g[1].length?0:parseInt(g[1],10))||Kb(0==f[2].length,0==
g[2].length)||Kb(f[2],g[2]);f=f[3];g=g[3]}while(0==a)}}
;function Wc(a){Wc[" "](a);return a}
Wc[" "]=function(){};var Xc=ac(),Yc=bc(),Zc=D("Edge"),$c=D("Gecko")&&!(-1!=Wb().toLowerCase().indexOf("webkit")&&!D("Edge"))&&!(D("Trident")||D("MSIE"))&&!D("Edge"),ad=-1!=Wb().toLowerCase().indexOf("webkit")&&!D("Edge"),bd=Nc();function cd(){var a=y.document;return a?a.documentMode:void 0}
var dd;a:{var ed="",fd=function(){var a=Wb();if($c)return/rv:([^\);]+)(\)|;)/.exec(a);if(Zc)return/Edge\/([\d\.]+)/.exec(a);if(Yc)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(ad)return/WebKit\/(\S+)/.exec(a);if(Xc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
fd&&(ed=fd?fd[1]:"");if(Yc){var gd=cd();if(null!=gd&&gd>parseFloat(ed)){dd=String(gd);break a}}dd=ed}var hd=dd,id;if(y.document&&Yc){var jd=cd();id=jd?jd:parseInt(hd,10)||void 0}else id=void 0;var kd=id;var ld=Uc()||D("iPod"),md=D("iPad");hc();gc();var nd=fc()&&!(Uc()||D("iPad")||D("iPod"));var od={},pd=null;function qd(a,b){Qa(a);void 0===b&&(b=0);rd();b=od[b];for(var c=Array(Math.floor(a.length/3)),d=b[64]||"",e=0,f=0;e<a.length-2;e+=3){var g=a[e],h=a[e+1],l=a[e+2],m=b[g>>2];g=b[(g&3)<<4|h>>4];h=b[(h&15)<<2|l>>6];l=b[l&63];c[f++]=""+m+g+h+l}m=0;l=d;switch(a.length-e){case 2:m=a[e+1],l=b[(m&15)<<2]||d;case 1:a=a[e],c[f]=""+b[a>>2]+b[(a&3)<<4|m>>4]+l+d}return c.join("")}
function sd(a){var b=a.length,c=3*b/4;c%3?c=Math.floor(c):-1!="=.".indexOf(a[b-1])&&(c=-1!="=.".indexOf(a[b-2])?c-2:c-1);var d=new Uint8Array(c),e=0;td(a,function(f){d[e++]=f});
return e!==c?d.subarray(0,e):d}
function td(a,b){function c(l){for(;d<a.length;){var m=a.charAt(d++),n=pd[m];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}
rd();for(var d=0;;){var e=c(-1),f=c(0),g=c(64),h=c(64);if(64===h&&-1===e)break;b(e<<2|f>>4);64!=g&&(b(f<<4&240|g>>2),64!=h&&b(g<<6&192|h))}}
function rd(){if(!pd){pd={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"],c=0;5>c;c++){var d=a.concat(b[c].split(""));od[c]=d;for(var e=0;e<d.length;e++){var f=d[e];void 0===pd[f]&&(pd[f]=e)}}}}
;var ud="undefined"!==typeof Uint8Array,vd=!Yc&&"function"===typeof btoa;function wd(a){if(!vd)return qd(a);for(var b="",c=0,d=a.length-10240;c<d;)b+=String.fromCharCode.apply(null,a.subarray(c,c+=10240));b+=String.fromCharCode.apply(null,c?a.subarray(c):a);return btoa(b)}
var xd=/[-_.]/g,yd={"-":"+",_:"/",".":"="};function zd(a){return yd[a]||""}
function Ad(a){return ud&&null!=a&&a instanceof Uint8Array}
var Bd={};var Cd;function Dd(a){if(a!==Bd)throw Error("illegal external caller");}
function Ed(a,b){Dd(b);this.h=a;if(null!=a&&0===a.length)throw Error("ByteString should be constructed with non-empty values");}
Ed.prototype.sizeBytes=function(){Dd(Bd);var a=this.h;if(null!=a&&!Ad(a))if("string"===typeof a)if(vd){xd.test(a)&&(a=a.replace(xd,zd));a=atob(a);for(var b=new Uint8Array(a.length),c=0;c<a.length;c++)b[c]=a.charCodeAt(c);a=b}else a=sd(a);else Pa(a),a=null;return(a=null==a?a:this.h=a)?a.length:0};var Fd="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol():void 0;function Gd(a,b){if(Fd)return a[Fd]|=b;if(void 0!==a.Da)return a.Da|=b;Object.defineProperties(a,{Da:{value:b,configurable:!0,writable:!0,enumerable:!1}});return b}
function Hd(a,b){var c=F(a);(c&b)!==b&&(Object.isFrozen(a)&&(a=Array.prototype.slice.call(a)),Id(a,c|b));return a}
function Jd(a,b){Fd?a[Fd]&&(a[Fd]&=~b):void 0!==a.Da&&(a.Da&=~b)}
function F(a){var b;Fd?b=a[Fd]:b=a.Da;return null==b?0:b}
function Id(a,b){Fd?a[Fd]=b:void 0!==a.Da?a.Da=b:Object.defineProperties(a,{Da:{value:b,configurable:!0,writable:!0,enumerable:!1}});return a}
function Kd(a){Gd(a,1);return a}
function Ld(a,b){Id(b,(a|0)&-51)}
function Md(a,b){Id(b,(a|18)&-41)}
;var Qd={};function Rd(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}
var Sd,Td=Object.freeze(Id([],23));function Ud(a){if(F(a.P)&2)throw Error();}
function Vd(a){var b=a.length;(b=b?a[b-1]:void 0)&&Rd(b)?b.g=1:(b={},a.push((b.g=1,b)))}
;function Wd(a){if(null!=a&&"number"!==typeof a)throw Error("Value of float/double field must be a number|null|undefined, found "+typeof a+": "+a);return a}
function Xd(a){return a.displayName||a.name||"unknown type name"}
function Yd(a,b){if(!(a instanceof b))throw Error("Expected instanceof "+Xd(b)+" but got "+(a&&Xd(a.constructor)));return a}
function Zd(a,b){var c=F(a),d=c;0===d&&(d|=b&16);d|=b&2;d!==c&&Id(a,d)}
;function $d(a){var b=a.j+a.cb;return a.xa||(a.xa=a.P[b]={})}
function ae(a,b,c){return-1===b?null:b>=a.j?a.xa?a.xa[b]:void 0:c&&a.xa&&(c=a.xa[b],null!=c)?c:a.P[b+a.cb]}
function G(a,b,c,d){Ud(a);return be(a,b,c,d)}
function be(a,b,c,d){a.m&&(a.m=void 0);if(b>=a.j||d)return $d(a)[b]=c,a;a.P[b+a.cb]=c;(c=a.xa)&&b in c&&delete c[b];return a}
function ce(a){return void 0!==de(a,ee,11,!1)}
function fe(a,b,c,d,e){var f=ae(a,b,d);Array.isArray(f)||(f=Td);var g=F(f);g&1||Kd(f);if(e)g&2||Gd(f,18),c&1||Object.freeze(f);else{e=!(c&2);var h=g&2;c&1||!h?e&&g&16&&!h&&Jd(f,16):(f=Kd(Array.prototype.slice.call(f)),be(a,b,f,d))}return f}
function ge(a,b,c,d){Ud(a);(c=he(a,c))&&c!==b&&null!=d&&be(a,c,void 0,!1);return be(a,b,d)}
function he(a,b){for(var c=0,d=0;d<b.length;d++){var e=b[d];null!=ae(a,e)&&(0!==c&&be(a,c,void 0,!1),c=e)}return c}
function de(a,b,c,d){var e=ae(a,c,d);var f=F(a.P),g=!1;null==e||"object"!==typeof e||(g=Array.isArray(e))||e.Jc!==Qd?g?(Zd(e,f),b=new b(e)):b=void 0:b=e;b!==e&&null!=b&&be(a,c,b,d);return b}
function ie(a,b,c,d){d=void 0===d?!1:d;b=de(a,b,c,d);if(null==b)return b;if(!(F(a.P)&2)){var e=je(b);e!==b&&(b=e,be(a,c,b,d))}return b}
function ke(a,b,c,d,e){var f=!!(e&2);a.i||(a.i={});var g=a.i[c],h=fe(a,c,3,void 0,f);if(!g){var l=h;g=[];f=!!(e&2);h=!!(F(l)&2);var m=l;!f&&h&&(l=Array.prototype.slice.call(l));var n=e|(h?2:0);e=h;for(var q=0;q<l.length;q++){var u=l[q];var t=b;Array.isArray(u)?(Zd(u,n),u=new t(u)):u=void 0;void 0!==u&&(e=e||!!(2&F(u.P)),g.push(u))}a.i[c]=g;b=l;e=!e;n=F(b);l=n|33;l=e?l|8:l&-9;n!=l&&(Object.isFrozen(b)&&(b=Array.prototype.slice.call(b)),Id(b,l));l=b;m!==l&&be(a,c,l);(f||1===d&&h)&&Gd(g,18);(f||1===
d)&&Object.freeze(g);return g}if(3===d)return g;f||((f=Object.isFrozen(g),1!==d||f)?2===d&&f&&(g=Array.prototype.slice.call(g),a.i[c]=g):Object.freeze(g));return g}
function H(a,b,c,d){Ud(a);null!=d?Yd(d,b):d=void 0;return be(a,c,d)}
function le(a,b,c,d,e){Ud(a);null!=e?Yd(e,b):e=void 0;ge(a,c,d,e)}
function me(a,b,c,d,e){Ud(a);var f=null==d?Td:Kd([]);if(null!=d){for(var g=!!d.length,h=0;h<d.length;h++){var l=d[h];Yd(l,b);g=g&&!(F(l.P)&2);f[h]=l.P}f=Hd(f,(g?8:0)|1);a.i||(a.i={});a.i[c]=d}else a.i&&(a.i[c]=void 0);return be(a,c,f,e)}
function ne(a,b,c,d){var e=F(a.P);if(e&2)throw Error();e=ke(a,c,b,2,e);c=null!=d?Yd(d,c):new c;a=fe(a,b,2,void 0,!1);e.push(c);a.push(c.P);F(c.P)&2&&Jd(a,8)}
function oe(a,b,c){Pa(c);return G(a,b,c)}
function pe(){var a=new qe;return G(a,1,1)}
function re(a,b){return null==a?b:a}
function se(a,b){return re(ae(a,b),"")}
;var te;function ue(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "object":if(a)if(Array.isArray(a)){if(0!==(F(a)&128))return a=Array.prototype.slice.call(a),Vd(a),a}else{if(Ad(a))return wd(a);if(a instanceof Ed){var b=a.h;return null==b?"":"string"===typeof b?b:a.h=wd(b)}}}return a}
;function ve(a,b,c,d,e,f){if(null!=a){if(Array.isArray(a))a=e&&0==a.length&&F(a)&1?void 0:f&&F(a)&2?a:we(a,b,c,void 0!==d,e,f);else if(Rd(a)){var g={},h;for(h in a)g[h]=ve(a[h],b,c,d,e,f);a=g}else a=b(a,d);return a}}
function we(a,b,c,d,e,f){var g=F(a);d=d?!!(g&16):void 0;a=Array.prototype.slice.call(a);for(var h=0;h<a.length;h++)a[h]=ve(a[h],b,c,d,e,f);c(g,a);return a}
function xe(a){return a.Jc===Qd?a.toJSON():ue(a)}
function ye(a,b){a&128&&Vd(b)}
;function ze(a,b,c){c=void 0===c?Md:c;if(null!=a){if(ud&&a instanceof Uint8Array)return b?a:new Uint8Array(a);if(Array.isArray(a)){var d=F(a);if(d&2)return a;if(b&&!(d&32)&&(d&16||0===d))return Id(a,d|18),a;a=we(a,ze,d&4?Md:c,!0,!1,!0);b=F(a);b&4&&b&2&&Object.freeze(a);return a}return a.Jc===Qd?Ae(a):a}}
function Be(a,b,c,d,e,f,g){(a=a.i&&a.i[c])?(d=0<a.length?a[0].constructor:void 0,f=F(a),f&2||(a=ib(a,Ae),Md(f,a),Object.freeze(a)),me(b,d,c,a,e)):G(b,c,ze(d,f,g),e)}
function Ae(a){if(F(a.P)&2)return a;a=Ce(a,!0);Gd(a.P,18);return a}
function Ce(a,b){var c=a.P,d=[];Gd(d,16);var e=a.constructor.h;e&&d.push(e);e=a.xa;if(e){d.length=c.length;var f={};d[d.length-1]=f}0!==(F(c)&128)&&Vd(d);b=b||F(a.P)&2?Md:Ld;f=a.constructor;F(d);te=d;d=new f(d);te=void 0;a.td&&(d.td=a.td.slice());f=!!(F(c)&16);for(var g=e?c.length-1:c.length,h=0;h<g;h++)Be(a,d,h-a.cb,c[h],!1,f,b);if(e)for(var l in e)c=e[l],g=+l,Number.isNaN(g),Be(a,d,g,c,!0,f,b);return d}
function je(a){if(!(F(a.P)&2))return a;var b=Ce(a,!1);b.m=a;return b}
;function I(a,b,c,d){null==a&&(a=te);te=void 0;var e=this.constructor.h;if(null==a){a=e?[e]:[];var f=48;var g=!0;d&&(f|=128);Id(a,f)}else{if(!Array.isArray(a))throw Error();if(e&&e!==a[0])throw Error();f=Gd(a,0)|32;g=0!==(16&f);if(d){if(f|=128,0<a.length){var h=a[a.length-1];if(Rd(h)&&"g"in h){delete h.g;var l=!0,m;for(m in h){l=!1;break}l&&a.pop()}}}else if(128&f)throw Error();Id(a,f)}this.cb=e?0:-1;this.i=void 0;this.P=a;a:{f=this.P.length;e=f-1;if(f&&(f=this.P[e],Rd(f))){this.xa=f;this.j=e-this.cb;
break a}void 0!==b&&-1<b?(this.j=Math.max(b,e+1-this.cb),this.xa=void 0):this.j=Number.MAX_VALUE}if(!d&&this.xa&&"g"in this.xa)throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');if(c){b=g&&!0;d=this.j;var n;for(g=0;g<c.length;g++)e=c[g],e<d?(e+=this.cb,(f=a[e])?De(f,b):a[e]=Td):(n||(n=$d(this)),(f=n[e])?De(f,b):n[e]=Td)}F(this.P)}
I.prototype.toJSON=function(){var a=this.P,b;Sd?b=a:b=we(a,xe,ye,void 0,!1,!1);return b};
function Ee(a){Sd=!0;try{return JSON.stringify(a.toJSON(),Fe)}finally{Sd=!1}}
I.prototype.clone=function(){return Ce(this,!1)};
function De(a,b){if(Array.isArray(a)){var c=F(a),d=1;!b||c&2||(d|=16);(c&d)!==d&&Id(a,c|d)}}
I.prototype.Jc=Qd;I.prototype.toString=function(){return this.P.toString()};
function Fe(a,b){return ue(b)}
;function Ge(a){this.dd=a}
;function He(a,b,c){this.i=a;this.l=b;this.h=c||[];this.rb=new Map}
k=He.prototype;k.Yd=function(a){var b=La.apply(1,arguments),c=this.yc(b);c?c.push(new Ge(a)):this.Hd(a,b)};
k.Hd=function(a){this.rb.set(this.md(La.apply(1,arguments)),[new Ge(a)])};
k.yc=function(){var a=this.md(La.apply(0,arguments));return this.rb.has(a)?this.rb.get(a):void 0};
k.pe=function(){var a=this.yc(La.apply(0,arguments));return a&&a.length?a[0]:void 0};
k.clear=function(){this.rb.clear()};
k.md=function(){var a=La.apply(0,arguments);return a?a.join(","):"key"};function Ie(a,b){He.call(this,a,3,b)}
v(Ie,He);Ie.prototype.j=function(a){var b=La.apply(1,arguments),c=0,d=this.pe(b);d&&(c=d.dd);this.Hd(c+a,b)};function Je(a,b){He.call(this,a,2,b)}
v(Je,He);Je.prototype.j=function(a){this.Yd(a,La.apply(1,arguments))};function Ke(a){a&&"function"==typeof a.dispose&&a.dispose()}
;function Le(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Qa(d)?Le.apply(null,d):Ke(d)}}
;function K(){this.qa=this.qa;this.W=this.W}
K.prototype.qa=!1;K.prototype.h=function(){return this.qa};
K.prototype.dispose=function(){this.qa||(this.qa=!0,this.L())};
function Me(a,b){Ne(a,Za(Ke,b))}
function Ne(a,b){a.qa?b():(a.W||(a.W=[]),a.W.push(b))}
K.prototype.L=function(){if(this.W)for(;this.W.length;)this.W.shift()()};function Oe(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.j=!1}
Oe.prototype.stopPropagation=function(){this.j=!0};
Oe.prototype.preventDefault=function(){this.defaultPrevented=!0};function Pe(a){var b=B("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||y.$googDebugFname||b}catch(g){e="Not available",c=!0}b=Qe(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,Re[c])c=Re[c];else{c=String(c);if(!Re[c]){var f=/function\s+([^\(]+)/m.exec(c);Re[c]=f?f[1]:"[Anonymous]"}c=Re[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return{message:a.message,name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:a.stack}}
function Qe(a,b){b||(b={});b[Se(a)]=!0;var c=a.stack||"";(a=a.cause)&&!b[Se(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=Qe(a,b));return c}
function Se(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var Re={};var Te=function(){if(!y.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{y.addEventListener("test",function(){},b),y.removeEventListener("test",function(){},b)}catch(c){}return a}();function Ue(a,b){Oe.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)}
$a(Ue,Oe);var Ve={2:"touch",3:"pen",4:"mouse"};
Ue.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;if(b=a.relatedTarget){if($c){a:{try{Wc(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:Ve[a.pointerType]||"";this.state=a.state;
this.i=a;a.defaultPrevented&&Ue.ta.preventDefault.call(this)};
Ue.prototype.stopPropagation=function(){Ue.ta.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
Ue.prototype.preventDefault=function(){Ue.ta.preventDefault.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var We="closure_listenable_"+(1E6*Math.random()|0);var Xe=0;function Ye(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.hc=e;this.key=++Xe;this.Pb=this.ac=!1}
function Ze(a){a.Pb=!0;a.listener=null;a.proxy=null;a.src=null;a.hc=null}
;function $e(a){this.src=a;this.listeners={};this.h=0}
$e.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);var g=af(a,b,d,e);-1<g?(b=a[g],c||(b.ac=!1)):(b=new Ye(b,this.src,f,!!d,e),b.ac=c,a.push(b));return b};
$e.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=af(e,b,c,d);return-1<b?(Ze(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.h--),!0):!1};
function bf(a,b){var c=b.type;c in a.listeners&&lb(a.listeners[c],b)&&(Ze(b),0==a.listeners[c].length&&(delete a.listeners[c],a.h--))}
function af(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Pb&&f.listener==b&&f.capture==!!c&&f.hc==d)return e}return-1}
;var cf="closure_lm_"+(1E6*Math.random()|0),df={},ef=0;function kf(a,b,c,d,e){if(d&&d.once)lf(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)kf(a,b[f],c,d,e);else c=mf(c),a&&a[We]?a.Ma(b,c,Sa(d)?!!d.capture:!!d,e):nf(a,b,c,!1,d,e)}
function nf(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Sa(e)?!!e.capture:!!e,h=of(a);h||(a[cf]=h=new $e(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=pf();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)Te||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(qf(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");ef++}}
function pf(){function a(c){return b.call(a.src,a.listener,c)}
var b=rf;return a}
function lf(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)lf(a,b[f],c,d,e);else c=mf(c),a&&a[We]?a.l.add(String(b),c,!0,Sa(d)?!!d.capture:!!d,e):nf(a,b,c,!0,d,e)}
function sf(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)sf(a,b[f],c,d,e);else(d=Sa(d)?!!d.capture:!!d,c=mf(c),a&&a[We])?a.l.remove(String(b),c,d,e):a&&(a=of(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=af(b,c,d,e)),(c=-1<a?b[a]:null)&&tf(c))}
function tf(a){if("number"!==typeof a&&a&&!a.Pb){var b=a.src;if(b&&b[We])bf(b.l,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(qf(c),d):b.addListener&&b.removeListener&&b.removeListener(d);ef--;(c=of(b))?(bf(c,a),0==c.h&&(c.src=null,b[cf]=null)):Ze(a)}}}
function qf(a){return a in df?df[a]:df[a]="on"+a}
function rf(a,b){if(a.Pb)a=!0;else{b=new Ue(b,this);var c=a.listener,d=a.hc||a.src;a.ac&&tf(a);a=c.call(d,b)}return a}
function of(a){a=a[cf];return a instanceof $e?a:null}
var uf="__closure_events_fn_"+(1E9*Math.random()>>>0);function mf(a){if("function"===typeof a)return a;a[uf]||(a[uf]=function(b){return a.handleEvent(b)});
return a[uf]}
;function vf(){K.call(this);this.l=new $e(this);this.Ud=this;this.Aa=null}
$a(vf,K);vf.prototype[We]=!0;vf.prototype.addEventListener=function(a,b,c,d){kf(this,a,b,c,d)};
vf.prototype.removeEventListener=function(a,b,c,d){sf(this,a,b,c,d)};
function wf(a,b){var c=a.Aa;if(c){var d=[];for(var e=1;c;c=c.Aa)d.push(c),++e}a=a.Ud;c=b.type||b;"string"===typeof b?b=new Oe(b,a):b instanceof Oe?b.target=b.target||a:(e=b,b=new Oe(c,a),xb(b,e));e=!0;if(d)for(var f=d.length-1;!b.j&&0<=f;f--){var g=b.h=d[f];e=xf(g,c,!0,b)&&e}b.j||(g=b.h=a,e=xf(g,c,!0,b)&&e,b.j||(e=xf(g,c,!1,b)&&e));if(d)for(f=0;!b.j&&f<d.length;f++)g=b.h=d[f],e=xf(g,c,!1,b)&&e}
vf.prototype.L=function(){vf.ta.L.call(this);if(this.l){var a=this.l,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,Ze(d[e]);delete a.listeners[c];a.h--}}this.Aa=null};
vf.prototype.Ma=function(a,b,c,d){return this.l.add(String(a),b,!1,c,d)};
function xf(a,b,c,d){b=a.l.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.Pb&&g.capture==c){var h=g.listener,l=g.hc||g.src;g.ac&&bf(a.l,g);e=!1!==h.call(l,d)&&e}}return e&&!d.defaultPrevented}
;function yf(a,b){this.j=a;this.l=b;this.i=0;this.h=null}
yf.prototype.get=function(){if(0<this.i){this.i--;var a=this.h;this.h=a.next;a.next=null}else a=this.j();return a};
function zf(a,b){a.l(b);100>a.i&&(a.i++,b.next=a.h,a.h=b)}
;function Af(a,b){return a+Math.random()*(b-a)}
;function Bf(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
k=Bf.prototype;k.clone=function(){return new Bf(this.x,this.y)};
k.equals=function(a){return a instanceof Bf&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
k.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
k.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
k.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
k.scale=function(a,b){this.x*=a;this.y*="number"===typeof b?b:a;return this};function Cf(a,b){this.width=a;this.height=b}
k=Cf.prototype;k.clone=function(){return new Cf(this.width,this.height)};
k.aspectRatio=function(){return this.width/this.height};
k.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
k.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
k.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
k.scale=function(a,b){this.width*=a;this.height*="number"===typeof b?b:a;return this};function Df(a){var b=document;return"string"===typeof a?b.getElementById(a):a}
function Ef(a){var b=document;a=String(a);"application/xhtml+xml"===b.contentType&&(a=a.toLowerCase());return b.createElement(a)}
function Ff(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;var Gf;function Hf(){var a=y.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!D("Presto")&&(a=function(){var e=Ef("IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Ya(function(l){if(("*"==h||l.origin==h)&&l.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!bc()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.cd;c.cd=null;e()}};
return function(e){d.next={cd:e};d=d.next;b.port2.postMessage(0)}}return function(e){y.setTimeout(e,0)}}
;function If(){this.i=this.h=null}
If.prototype.add=function(a,b){var c=Jf.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c};
If.prototype.remove=function(){var a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a};
var Jf=new yf(function(){return new Kf},function(a){return a.reset()});
function Kf(){this.next=this.scope=this.h=null}
Kf.prototype.set=function(a,b){this.h=a;this.scope=b;this.next=null};
Kf.prototype.reset=function(){this.next=this.scope=this.h=null};var Lf,Mf=!1,Nf=new If;function Of(a,b){Lf||Pf();Mf||(Lf(),Mf=!0);Nf.add(a,b)}
function Pf(){if(y.Promise&&y.Promise.resolve){var a=y.Promise.resolve(void 0);Lf=function(){a.then(Qf)}}else Lf=function(){var b=Qf;
"function"!==typeof y.setImmediate||y.Window&&y.Window.prototype&&!cc()&&y.Window.prototype.setImmediate==y.setImmediate?(Gf||(Gf=Hf()),Gf(b)):y.setImmediate(b)}}
function Qf(){for(var a;a=Nf.remove();){try{a.h.call(a.scope)}catch(b){Kc(b)}zf(Jf,a)}Mf=!1}
;function Rf(a){this.h=0;this.v=void 0;this.l=this.i=this.j=null;this.m=this.s=!1;if(a!=db)try{var b=this;a.call(void 0,function(c){Sf(b,2,c)},function(c){Sf(b,3,c)})}catch(c){Sf(this,3,c)}}
function Tf(){this.next=this.context=this.i=this.j=this.h=null;this.l=!1}
Tf.prototype.reset=function(){this.context=this.i=this.j=this.h=null;this.l=!1};
var Uf=new yf(function(){return new Tf},function(a){a.reset()});
function Vf(a,b,c){var d=Uf.get();d.j=a;d.i=b;d.context=c;return d}
function Wf(a){return new Rf(function(b,c){c(a)})}
Rf.prototype.then=function(a,b,c){return Xf(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
Rf.prototype.$goog_Thenable=!0;k=Rf.prototype;k.sc=function(a,b){return Xf(this,null,a,b)};
k.catch=Rf.prototype.sc;k.cancel=function(a){if(0==this.h){var b=new Yf(a);Of(function(){Zf(this,b)},this)}};
function Zf(a,b){if(0==a.h)if(a.j){var c=a.j;if(c.i){for(var d=0,e=null,f=null,g=c.i;g&&(g.l||(d++,g.h==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.h&&1==d?Zf(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):$f(c),ag(c,e,3,b)))}a.j=null}else Sf(a,3,b)}
function bg(a,b){a.i||2!=a.h&&3!=a.h||cg(a);a.l?a.l.next=b:a.i=b;a.l=b}
function Xf(a,b,c,d){var e=Vf(null,null,null);e.h=new Rf(function(f,g){e.j=b?function(h){try{var l=b.call(d,h);f(l)}catch(m){g(m)}}:f;
e.i=c?function(h){try{var l=c.call(d,h);void 0===l&&h instanceof Yf?g(h):f(l)}catch(m){g(m)}}:g});
e.h.j=a;bg(a,e);return e.h}
k.hf=function(a){this.h=0;Sf(this,2,a)};
k.jf=function(a){this.h=0;Sf(this,3,a)};
function Sf(a,b,c){if(0==a.h){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.h=1;a:{var d=c,e=a.hf,f=a.jf;if(d instanceof Rf){bg(d,Vf(e||db,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(m){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Sa(d))try{var l=d.then;if("function"===typeof l){dg(d,l,e,f,a);g=!0;break a}}catch(m){f.call(a,m);g=!0;break a}g=!1}}}g||(a.v=c,a.h=b,a.j=null,cg(a),3!=b||c instanceof Yf||eg(a,c))}}
function dg(a,b,c,d,e){function f(l){h||(h=!0,d.call(e,l))}
function g(l){h||(h=!0,c.call(e,l))}
var h=!1;try{b.call(a,g,f)}catch(l){f(l)}}
function cg(a){a.s||(a.s=!0,Of(a.ke,a))}
function $f(a){var b=null;a.i&&(b=a.i,a.i=b.next,b.next=null);a.i||(a.l=null);return b}
k.ke=function(){for(var a;a=$f(this);)ag(this,a,this.h,this.v);this.s=!1};
function ag(a,b,c,d){if(3==c&&b.i&&!b.l)for(;a&&a.m;a=a.j)a.m=!1;if(b.h)b.h.j=null,fg(b,c,d);else try{b.l?b.j.call(b.context):fg(b,c,d)}catch(e){gg.call(null,e)}zf(Uf,b)}
function fg(a,b,c){2==b?a.j.call(a.context,c):a.i&&a.i.call(a.context,c)}
function eg(a,b){a.m=!0;Of(function(){a.m&&gg.call(null,b)})}
var gg=Kc;function Yf(a){bb.call(this,a)}
$a(Yf,bb);Yf.prototype.name="cancel";function hg(a,b){vf.call(this);this.j=a||1;this.i=b||y;this.m=Ya(this.ff,this);this.s=Date.now()}
$a(hg,vf);k=hg.prototype;k.enabled=!1;k.za=null;function ig(a,b){a.j=b;a.za&&a.enabled?(a.stop(),a.start()):a.za&&a.stop()}
k.ff=function(){if(this.enabled){var a=Date.now()-this.s;0<a&&a<.8*this.j?this.za=this.i.setTimeout(this.m,this.j-a):(this.za&&(this.i.clearTimeout(this.za),this.za=null),wf(this,"tick"),this.enabled&&(this.stop(),this.start()))}};
k.start=function(){this.enabled=!0;this.za||(this.za=this.i.setTimeout(this.m,this.j),this.s=Date.now())};
k.stop=function(){this.enabled=!1;this.za&&(this.i.clearTimeout(this.za),this.za=null)};
k.L=function(){hg.ta.L.call(this);this.stop();delete this.i};
function jg(a,b,c){if("function"===typeof a)c&&(a=Ya(a,c));else if(a&&"function"==typeof a.handleEvent)a=Ya(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:y.setTimeout(a,b||0)}
;function kg(a){K.call(this);this.H=a;this.j=new Map;this.v=new Set;this.l=0;this.m=100;this.flushInterval=3E4;this.i=new hg(this.flushInterval);this.i.Ma("tick",this.ob,!1,this);Me(this,this.i);this.s=!1}
v(kg,K);k=kg.prototype;k.sendIsolatedPayload=function(a){this.s=a;this.m=1};
function lg(a){a.i.enabled||a.i.start();a.l++;a.l>=a.m&&a.ob()}
k.ob=function(){var a=this.j.values();a=[].concat(ja(a)).filter(function(b){return b.rb.size});
a.length&&this.H.flush(a,this.s);mg(a);this.l=0;this.i.enabled&&this.i.stop()};
k.Xc=function(a){var b=La.apply(1,arguments);this.j.has(a)||this.j.set(a,new Ie(a,b))};
k.Yc=function(a){var b=La.apply(1,arguments);this.j.has(a)||this.j.set(a,new Je(a,b))};
function ng(a,b){return a.v.has(b)?void 0:a.j.get(b)}
k.uc=function(a){this.Td.apply(this,[a,1].concat(ja(La.apply(1,arguments))))};
k.Td=function(a,b){var c=La.apply(2,arguments),d=ng(this,a);d&&d instanceof Ie&&(d.j(b,c),lg(this))};
k.vc=function(a,b){var c=La.apply(2,arguments),d=ng(this,a);d&&d instanceof Je&&(d.j(b,c),lg(this))};
function mg(a){for(var b=0;b<a.length;b++)a[b].clear()}
;function og(a){this.h=a;this.h.Xc("/client_streamz/bg/fiec",{Lb:3,Kb:"rk"},{Lb:2,Kb:"ec"})}
function pg(a,b,c){a.h.uc("/client_streamz/bg/fiec",b,c)}
function qg(a){this.h=a;this.h.Yc("/client_streamz/bg/fil",{Lb:3,Kb:"rk"})}
function rg(a){this.h=a;this.h.Xc("/client_streamz/bg/fsc",{Lb:3,Kb:"rk"})}
function sg(a){this.h=a;this.h.Yc("/client_streamz/bg/fsl",{Lb:3,Kb:"rk"})}
;var tg={toString:function(a){var b=[],c=0;a-=-2147483648;b[c++]="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(a%52);for(a=Math.floor(a/52);0<a;)b[c++]="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".charAt(a%62),a=Math.floor(a/62);return b.join("")}};function ug(a){function b(){c-=d;c-=e;c^=e>>>13;d-=e;d-=c;d^=c<<8;e-=c;e-=d;e^=d>>>13;c-=d;c-=e;c^=e>>>12;d-=e;d-=c;d^=c<<16;e-=c;e-=d;e^=d>>>5;c-=d;c-=e;c^=e>>>3;d-=e;d-=c;d^=c<<10;e-=c;e-=d;e^=d>>>15}
a=vg(a);for(var c=2654435769,d=2654435769,e=314159265,f=a.length,g=f,h=0;12<=g;g-=12,h+=12)c+=wg(a,h),d+=wg(a,h+4),e+=wg(a,h+8),b();e+=f;switch(g){case 11:e+=a[h+10]<<24;case 10:e+=a[h+9]<<16;case 9:e+=a[h+8]<<8;case 8:d+=a[h+7]<<24;case 7:d+=a[h+6]<<16;case 6:d+=a[h+5]<<8;case 5:d+=a[h+4];case 4:c+=a[h+3]<<24;case 3:c+=a[h+2]<<16;case 2:c+=a[h+1]<<8;case 1:c+=a[h+0]}b();return tg.toString(e)}
function vg(a){for(var b=[],c=0;c<a.length;c++)b.push(a.charCodeAt(c));return b}
function wg(a,b){return a[b+0]+(a[b+1]<<8)+(a[b+2]<<16)+(a[b+3]<<24)}
;function xg(a){I.call(this,a)}
v(xg,I);var yg=[1,2,3];function zg(a){I.call(this,a)}
v(zg,I);var Ag=[1,2,3];function Bg(a){I.call(this,a,-1,Cg)}
v(Bg,I);var Cg=[1];function Dg(a){I.call(this,a,-1,Eg)}
v(Dg,I);var Eg=[3,6,4];function Fg(a){I.call(this,a,-1,Gg)}
v(Fg,I);var Gg=[1];function Hg(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==
c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;function Ig(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;n=m=0}
function b(q){for(var u=g,t=0;64>t;t+=4)u[t/4]=q[t]<<24|q[t+1]<<16|q[t+2]<<8|q[t+3];for(t=16;80>t;t++)q=u[t-3]^u[t-8]^u[t-14]^u[t-16],u[t]=(q<<1|q>>>31)&4294967295;q=e[0];var z=e[1],C=e[2],E=e[3],M=e[4];for(t=0;80>t;t++){if(40>t)if(20>t){var S=E^z&(C^E);var Q=1518500249}else S=z^C^E,Q=1859775393;else 60>t?(S=z&C|E&(z|C),Q=2400959708):(S=z^C^E,Q=3395469782);S=((q<<5|q>>>27)&4294967295)+S+M+Q+u[t]&4294967295;M=E;E=C;C=(z<<30|z>>>2)&4294967295;z=q;q=S}e[0]=e[0]+q&4294967295;e[1]=e[1]+z&4294967295;e[2]=
e[2]+C&4294967295;e[3]=e[3]+E&4294967295;e[4]=e[4]+M&4294967295}
function c(q,u){if("string"===typeof q){q=unescape(encodeURIComponent(q));for(var t=[],z=0,C=q.length;z<C;++z)t.push(q.charCodeAt(z));q=t}u||(u=q.length);t=0;if(0==m)for(;t+64<u;)b(q.slice(t,t+64)),t+=64,n+=64;for(;t<u;)if(f[m++]=q[t++],n++,64==m)for(m=0,b(f);t+64<u;)b(q.slice(t,t+64)),t+=64,n+=64}
function d(){var q=[],u=8*n;56>m?c(h,56-m):c(h,64-(m-56));for(var t=63;56<=t;t--)f[t]=u&255,u>>>=8;b(f);for(t=u=0;5>t;t++)for(var z=24;0<=z;z-=8)q[u++]=e[t]>>z&255;return q}
for(var e=[],f=[],g=[],h=[128],l=1;64>l;++l)h[l]=0;var m,n;a();return{reset:a,update:c,digest:d,ge:function(){for(var q=d(),u="",t=0;t<q.length;t++)u+="0123456789ABCDEF".charAt(Math.floor(q[t]/16))+"0123456789ABCDEF".charAt(q[t]%16);return u}}}
;function Jg(a,b,c){var d=String(y.location.href);return d&&a&&b?[b,Kg(Hg(d),a,c||null)].join(" "):null}
function Kg(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],gb(d,function(h){e.push(h)}),Lg(e.join(" "));
var f=[],g=[];gb(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];gb(d,function(h){e.push(h)});
a=Lg(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Lg(a){var b=Ig();b.update(a);return b.ge().toLowerCase()}
;var Mg={};function Ng(a){this.h=a||{cookie:""}}
k=Ng.prototype;k.isEnabled=function(){if(!y.navigator.cookieEnabled)return!1;if(this.h.cookie)return!0;this.set("TESTCOOKIESENABLED","1",{kc:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
k.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.Hg;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.kc}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString();this.h.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+
e:"")};
k.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=Jb(d[e]);if(0==f.lastIndexOf(c,0))return f.slice(c.length);if(f==a)return""}return b};
k.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{kc:0,path:b,domain:c});return d};
k.Bc=function(){return Og(this).keys};
k.clear=function(){for(var a=Og(this).keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
function Og(a){a=(a.h.cookie||"").split(";");for(var b=[],c=[],d,e,f=0;f<a.length;f++)e=Jb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}}
var Pg=new Ng("undefined"==typeof document?null:document);function Qg(a){return!!Mg.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function Rg(a){a=void 0===a?!1:a;var b=y.__SAPISID||y.__APISID||y.__3PSAPISID||y.__OVERRIDE_SID;Qg(a)&&(b=b||y.__1PSAPISID);if(b)return!0;var c=new Ng(document);b=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID")||c.get("OSID");Qg(a)&&(b=b||c.get("__Secure-1PAPISID"));return!!b}
function Sg(a,b,c,d){(a=y[a])||(a=(new Ng(document)).get(b));return a?Jg(a,c,d):null}
function Tg(a,b){b=void 0===b?!1:b;var c=Hg(String(y.location.href)),d=[];if(Rg(b)){c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:");var e=c?y.__SAPISID:y.__APISID;e||(e=new Ng(document),e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID"));(e=e?Jg(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e);c&&Qg(b)&&((b=Sg("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=Sg("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&d.push(a))}return 0==
d.length?null:d.join(" ")}
;function Ug(a){I.call(this,a,-1,Vg)}
v(Ug,I);var Vg=[2];function Wg(a){this.h=this.i=this.j=a}
Wg.prototype.reset=function(){this.h=this.i=this.j};
Wg.prototype.getValue=function(){return this.i};function Xg(a){var b=[];Yg(new Zg,a,b);return b.join("")}
function Zg(){}
function Yg(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Yg(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),$g(d,c),c.push(":"),Yg(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":$g(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var ah={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},bh=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function $g(a,b){b.push('"',a.replace(bh,function(c){var d=ah[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).slice(1),ah[c]=d);return d}),'"')}
;function ch(){}
ch.prototype.h=null;ch.prototype.getOptions=function(){var a;(a=this.h)||(a={},dh(this)&&(a[0]=!0,a[1]=!0),a=this.h=a);return a};var eh;function fh(){}
$a(fh,ch);function gh(a){return(a=dh(a))?new ActiveXObject(a):new XMLHttpRequest}
function dh(a){if(!a.i&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.i=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.i}
eh=new fh;function hh(a){vf.call(this);this.headers=new Map;this.T=a||null;this.i=!1;this.M=this.F=null;this.m=this.aa="";this.j=this.Y=this.v=this.X=!1;this.s=0;this.H=null;this.va="";this.ha=this.ia=!1}
$a(hh,vf);var ih=/^https?$/i,jh=["POST","PUT"],kh=[];function lh(a,b,c,d,e,f,g){var h=new hh;kh.push(h);b&&h.Ma("complete",b);h.l.add("ready",h.de,!0,void 0,void 0);f&&(h.s=Math.max(0,f));g&&(h.ia=g);h.send(a,c,d,e)}
k=hh.prototype;k.de=function(){this.dispose();lb(kh,this)};
k.send=function(a,b,c,d){if(this.F)throw Error("[goog.net.XhrIo] Object is active with another request="+this.aa+"; newUri="+a);b=b?b.toUpperCase():"GET";this.aa=a;this.m="";this.X=!1;this.i=!0;this.F=this.T?gh(this.T):gh(eh);this.M=this.T?this.T.getOptions():eh.getOptions();this.F.onreadystatechange=Ya(this.yd,this);try{this.getStatus(),this.Y=!0,this.F.open(b,String(a),!0),this.Y=!1}catch(g){this.getStatus();mh(this,g);return}a=c||"";c=new Map(this.headers);if(d)if(Object.getPrototypeOf(d)===Object.prototype)for(var e in d)c.set(e,
d[e]);else if("function"===typeof d.keys&&"function"===typeof d.get){e=r(d.keys());for(var f=e.next();!f.done;f=e.next())f=f.value,c.set(f,d.get(f))}else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(c.keys()).find(function(g){return"content-type"==g.toLowerCase()});
e=y.FormData&&a instanceof y.FormData;!(0<=fb(jh,b))||d||e||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");b=r(c);for(d=b.next();!d.done;d=b.next())c=r(d.value),d=c.next().value,c=c.next().value,this.F.setRequestHeader(d,c);this.va&&(this.F.responseType=this.va);"withCredentials"in this.F&&this.F.withCredentials!==this.ia&&(this.F.withCredentials=this.ia);try{nh(this),0<this.s&&(this.ha=oh(this.F),this.getStatus(),this.ha?(this.F.timeout=this.s,this.F.ontimeout=Ya(this.Md,
this)):this.H=jg(this.Md,this.s,this)),this.getStatus(),this.v=!0,this.F.send(a),this.v=!1}catch(g){this.getStatus(),mh(this,g)}};
function oh(a){return Yc&&"number"===typeof a.timeout&&void 0!==a.ontimeout}
k.Md=function(){"undefined"!=typeof Oa&&this.F&&(this.m="Timed out after "+this.s+"ms, aborting",this.getStatus(),wf(this,"timeout"),this.abort(8))};
function mh(a,b){a.i=!1;a.F&&(a.j=!0,a.F.abort(),a.j=!1);a.m=b;ph(a);qh(a)}
function ph(a){a.X||(a.X=!0,wf(a,"complete"),wf(a,"error"))}
k.abort=function(){this.F&&this.i&&(this.getStatus(),this.i=!1,this.j=!0,this.F.abort(),this.j=!1,wf(this,"complete"),wf(this,"abort"),qh(this))};
k.L=function(){this.F&&(this.i&&(this.i=!1,this.j=!0,this.F.abort(),this.j=!1),qh(this,!0));hh.ta.L.call(this)};
k.yd=function(){this.h()||(this.Y||this.v||this.j?rh(this):this.He())};
k.He=function(){rh(this)};
function rh(a){if(a.i&&"undefined"!=typeof Oa)if(a.M[1]&&4==sh(a)&&2==a.getStatus())a.getStatus();else if(a.v&&4==sh(a))jg(a.yd,0,a);else if(wf(a,"readystatechange"),a.isComplete()){a.getStatus();a.i=!1;try{if(th(a))wf(a,"complete"),wf(a,"success");else{try{var b=2<sh(a)?a.F.statusText:""}catch(c){b=""}a.m=b+" ["+a.getStatus()+"]";ph(a)}}finally{qh(a)}}}
function qh(a,b){if(a.F){nh(a);var c=a.F,d=a.M[0]?function(){}:null;
a.F=null;a.M=null;b||wf(a,"ready");try{c.onreadystatechange=d}catch(e){}}}
function nh(a){a.F&&a.ha&&(a.F.ontimeout=null);a.H&&(y.clearTimeout(a.H),a.H=null)}
k.isActive=function(){return!!this.F};
k.isComplete=function(){return 4==sh(this)};
function th(a){var b=a.getStatus();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}if(!c){if(b=0===b)a=wc(1,String(a.aa)),!a&&y.self&&y.self.location&&(a=y.self.location.protocol.slice(0,-1)),b=!ih.test(a?a.toLowerCase():"");c=b}return c}
function sh(a){return a.F?a.F.readyState:0}
k.getStatus=function(){try{return 2<sh(this)?this.F.status:-1}catch(a){return-1}};
k.getLastError=function(){return"string"===typeof this.m?this.m:String(this.m)};function uh(a){I.call(this,a)}
v(uh,I);function vh(a){I.call(this,a,-1,wh)}
v(vh,I);var wh=[1];function ee(a){I.call(this,a)}
v(ee,I);var xh=["platform","platformVersion","architecture","model","uaFullVersion"];new vh;function qe(a){I.call(this,a)}
v(qe,I);function yh(a){I.call(this,a,33,zh)}
v(yh,I);var zh=[3,20,27];function Ah(a){I.call(this,a,17,Bh)}
v(Ah,I);var Bh=[3,5];function Ch(a){I.call(this,a,6,Dh)}
v(Ch,I);var Dh=[5];function Ih(a){I.call(this,a)}
v(Ih,I);var Jh;Jh=new function(a,b,c){this.h=a;this.fieldName=b;this.j=c;this.isRepeated=0;this.i=ie;this.defaultValue=void 0}(175237375,{wg:0},Ih);function Kh(a,b,c,d,e,f,g,h,l,m,n){vf.call(this);var q=this;this.componentId="";this.j=[];this.Wb="";this.Xb=this.va=-1;this.Fb=!1;this.T=this.m=null;this.H=this.M=0;this.Wd=1;this.timeoutMillis=0;this.ia=!1;vf.call(this);this.logSource=a;this.Vb=b||function(){};
this.s=new Lh(a,f);this.Vd=d;this.network=n;this.Xd=Za(Af,0,1);this.Y=e||null;this.sessionIndex=c||null;this.aa=g||!1;this.pageId=l||null;this.logger=null;this.withCredentials=!h;this.pb=f||!1;!this.pb&&(65<=kc("Chromium")||45<=kc("Firefox")||12<=kc("Safari")||(Uc()||D("iPad")||D("iPod"))&&Vc());a=pe();Mh(this.s,a);this.v=new Wg(1E4);this.i=new hg(this.v.getValue());Me(this,this.i);m=Nh(this,m);kf(this.i,"tick",m,!1,this);this.X=new hg(6E5);Me(this,this.X);kf(this.X,"tick",m,!1,this);this.aa||this.X.start();
this.pb||(kf(document,"visibilitychange",function(){"hidden"===document.visibilityState&&q.ha()}),kf(document,"pagehide",this.ha,!1,this))}
v(Kh,vf);function Nh(a,b){return b?function(){b().then(function(){a.flush()})}:function(){a.flush()}}
Kh.prototype.L=function(){this.ha();vf.prototype.L.call(this)};
function Oh(a){a.Y||(a.Y=.01>a.Xd()?"https://www.google.com/log?format=json&hasfast=true":"https://play.google.com/log?format=json&hasfast=true");return a.Y}
function Ph(a,b){a.v=new Wg(1>b?1:b);ig(a.i,a.v.getValue())}
Kh.prototype.log=function(a){a=a.clone();var b=this.Wd++;G(a,21,b);this.componentId&&G(a,26,this.componentId);if(!ae(a,1)){b=a;var c=Date.now().toString();G(b,1,c)}null==ae(a,15)&&G(a,15,60*(new Date).getTimezoneOffset());this.m&&(b=this.m.clone(),H(a,Ug,16,b));for(;1E3<=this.j.length;)this.j.shift(),++this.M;this.j.push(a);wf(this,new Qh(a));this.aa||this.i.enabled||this.i.start()};
Kh.prototype.flush=function(a,b){var c=this;if(0===this.j.length)a&&a();else if(this.ia)Rh(this.s,3),Sh(this);else{var d=Date.now();if(this.Xb>d&&this.va<d)b&&b("throttled");else{Rh(this.s,1);var e=Th(this.s,this.j,this.M,this.H);d={};var f=this.Vb();f&&(d.Authorization=f);var g=Oh(this);this.sessionIndex&&(d["X-Goog-AuthUser"]=this.sessionIndex,g=Fc(g,"authuser",this.sessionIndex));this.pageId&&(d["X-Goog-PageId"]=this.pageId,g=Fc(g,"pageId",this.pageId));if(f&&this.Wb===f)b&&b("stale-auth-token");
else{this.j=[];this.i.enabled&&this.i.stop();this.M=0;var h=Ee(e),l;this.T&&this.T.isSupported(h.length)&&(l=this.T.compress(h));var m={url:g,body:h,be:1,Oc:d,requestType:"POST",withCredentials:this.withCredentials,timeoutMillis:this.timeoutMillis},n=function(t){c.v.reset();ig(c.i,c.v.getValue());if(t){var z=null;try{var C=JSON.parse(t.replace(")]}'\n",""));z=new Ch(C)}catch(E){}z&&(t=Number(re(ae(z,1),"-1")),0<t&&(c.va=Date.now(),c.Xb=c.va+t),z=Jh.j?Jh.i(z,Jh.j,Jh.h,!0):Jh.isRepeated?Jh.i(z,Jh.h,
!0):Jh.i(z,Jh.h,Jh.defaultValue,!0))&&(z=re(ae(z,1),-1),-1!=z&&(c.Fb||Ph(c,z)))}a&&a();c.H=0},q=function(t,z){var C=F(e.P),E=!!(C&2);
C=ke(e,yh,3,E?1:2,C);var M=fe(e,3,3,void 0,E);if(!(E||F(M)&8)){for(E=0;E<C.length;E++){var S=C[E],Q=je(S);S!==Q&&(C[E]=Q,M[E]=Q.P)}Gd(M,8)}M=c.v;M.h=Math.min(3E5,2*M.h);M.i=Math.min(3E5,M.h+Math.round(.2*(Math.random()-.5)*M.h));ig(c.i,c.v.getValue());401===t&&f&&(c.Wb=f);void 0===z&&(z=500<=t&&600>t||401===t||0===t);z&&(c.j=C.concat(c.j),c.aa||c.i.enabled||c.i.start());b&&b("net-send-failed",t);++c.H},u=function(){c.network?c.network.send(m,n,q):c.Vd(m,n,q)};
l?l.then(function(t){m.Oc["Content-Encoding"]="gzip";m.Oc["Content-Type"]="application/binary";m.body=t;m.be=2;u()},function(){u()}):u()}}}};
Kh.prototype.ha=function(){Uh(this.s,!0);this.flush();Uh(this.s,!1)};
function Sh(a){Vh(a,function(b,c){b=Fc(b,"format","json");var d=!1;try{d=window.navigator.sendBeacon(b,Ee(c))}catch(e){}a.ia&&!d&&(a.ia=!1);return d})}
function Vh(a,b){if(0!==a.j.length){var c=Jc(Oh(a),"format");c=Dc(c,"auth",a.Vb(),"authuser",a.sessionIndex||"0");for(var d=0;10>d&&a.j.length;++d){var e=a.j.slice(0,32),f=Th(a.s,e,a.M,a.H);if(!b(c,f)){++a.H;break}a.M=0;a.H=0;a.j=a.j.slice(e.length)}a.i.enabled&&a.i.stop()}}
function Qh(){Oe.call(this,"event-logged",void 0)}
v(Qh,Oe);function Lh(a,b){this.i=b=void 0===b?!1:b;this.uach=this.locale=null;this.h=new Ah;G(this.h,2,a);b||(this.locale=document.documentElement.getAttribute("lang"));Mh(this,new qe)}
function Mh(a,b){H(a.h,qe,1,b);ae(b,1)||G(b,1,1);a.i||(b=Wh(a),ae(b,5)||G(b,5,a.locale));a.uach&&(b=Wh(a),ie(b,vh,9)||H(b,vh,9,a.uach))}
function Rh(a,b){ce(ie(a.h,qe,1))&&(a=Xh(a),G(a,1,b))}
function Uh(a,b){ce(ie(a.h,qe,1))&&(a=Xh(a),G(a,2,b))}
function Yh(a,b){var c=void 0===c?xh:c;b(window,c).then(function(d){a.uach=d;d=Wh(a);H(d,vh,9,a.uach);return!0}).catch(function(){return!1})}
function Wh(a){a=ie(a.h,qe,1);var b=ie(a,ee,11);b||(b=new ee,H(a,ee,11,b));return b}
function Xh(a){a=Wh(a);var b=ie(a,uh,10);b||(b=new uh,G(b,2,!1),H(a,uh,10,b));return b}
function Th(a,b,c,d){c=void 0===c?0:c;d=void 0===d?0:d;if(ce(ie(a.h,qe,1))){var e=Xh(a);oe(e,3,d)}a=a.h.clone();d=Date.now().toString();a=G(a,4,d);b=me(a,yh,3,b);c&&G(b,14,c);return b}
;function Zh(a,b,c){lh(a.url,function(d){d=d.target;if(th(d)){try{var e=d.F?d.F.responseText:""}catch(f){e=""}b(e)}else c(d.getStatus())},a.requestType,a.body,a.Oc,a.timeoutMillis,a.withCredentials)}
;function $h(a,b){K.call(this);this.s=a;this.Aa=b;this.l="https://play.google.com/log?format=json&hasfast=true";this.m=!1;this.Y=Zh;this.i=""}
$a($h,K);function ai(a,b,c,d,e,f){a=void 0===a?-1:a;b=void 0===b?"":b;c=void 0===c?"":c;d=void 0===d?!1:d;e=void 0===e?"":e;K.call(this);f?a=f:(a=new $h(a,"0"),a.i=b,Me(this,a),""!=c&&(a.l=c),d&&(a.m=!0),e&&(a.j=e),b=new Kh(a.s,a.T?a.T:Tg,a.Aa,a.Y,a.l,a.m,!1,a.va,void 0,void 0,a.aa?a.aa:void 0),Me(a,b),a.H&&Mh(b.s,a.H),a.j&&(c=a.j,d=Wh(b.s),G(d,7,c)),a.X&&(b.T=a.X),a.i&&(b.componentId=a.i),a.v&&((c=a.v)?(b.m||(b.m=new Ug),c=Ee(c),G(b.m,4,c)):b.m&&G(b.m,4,void 0,!1)),a.ha&&(d=a.ha,b.m||(b.m=new Ug),c=b.m,d=
null==d?Td:Hd(d,1),G(c,2,d)),a.M&&(c=a.M,b.Fb=!0,Ph(b,c)),a.ia&&Yh(b.s,a.ia),a=b);this.i=a}
v(ai,K);
ai.prototype.flush=function(a){var b=a||[];if(b.length){a=new Fg;for(var c=[],d=0;d<b.length;d++){var e=b[d],f=e,g=new Dg;var h=G(g,1,f.i);var l=f;g=[];for(var m=0;m<l.h.length;m++)g.push(l.h[m].Kb);if(null==g)g=G(h,3,Td);else{l=F(g);if(!(l&4)){if(l&2||Object.isFrozen(g))g=Array.prototype.slice.call(g);for(m=0;m<g.length;m++)g[m]=g[m];Id(g,l|5)}g=G(h,3,g)}h=[];l=[];m=r(f.rb.keys());for(var n=m.next();!n.done;n=m.next())l.push(n.value.split(","));for(m=0;m<l.length;m++){n=l[m];var q=f.l;for(var u=f.yc(n)||
[],t=[],z=0;z<u.length;z++){var C=u[z];C=C&&C.dd;var E=new zg;switch(q){case 3:ge(E,1,Ag,Number(C));break;case 2:ge(E,2,Ag,Wd(Number(C)))}t.push(E)}q=t;for(u=0;u<q.length;u++){t=q[u];z=new Bg;t=H(z,zg,2,t);z=n;C=[];E=f;for(var M=[],S=0;S<E.h.length;S++)M.push(E.h[S].Lb);E=M;for(M=0;M<E.length;M++){var Q=E[M],W=z[M];S=new xg;switch(Q){case 3:ge(S,1,yg,String(W));break;case 2:Q=S;W=Number(W);Pa(W);ge(Q,2,yg,W);break;case 1:ge(S,3,yg,"true"==W)}C.push(S)}me(t,xg,1,C);h.push(t)}}me(g,Bg,4,h);c.push(g);
e.clear()}me(a,Dg,1,c);b=this.i;a instanceof yh?b.log(a):(c=new yh,a=Ee(a),a=G(c,8,a),b.log(a));this.i.flush()}};function bi(a){this.v=ci();this.m=new ai(1828);this.h=new kg(this.m);this.s=new qg(this.h);this.j=new rg(this.h);this.l=new sg(this.h);this.i=new og(this.h);this.Fa=ug(a)}
function ci(){var a,b,c;return null!=(c=null==(a=globalThis.performance)?void 0:null==(b=a.now)?void 0:b.call(a))?c:Date.now()}
;function di(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function ei(a){function b(z,C){Promise.resolve().then(function(){var E;if(null!=(E=c.ja)){var M=ci()-E.v;E.s.h.vc("/client_streamz/bg/fil",M,E.Fa)}g.resolve({Zd:z,bf:C})})}
var c=this;this.i=!1;var d=a.program;var e=a.re;if(a.Le){var f;this.ja=null!=(f=a.ja)?f:new bi(e)}var g=new di;this.j=g.promise;if(y[e])if(y[e].a){var h;null!=(h=this.ja)&&pg(h.i,h.Fa,3)}else{var l;null!=(l=this.ja)&&pg(l.i,l.Fa,2);var m;null!=(m=this.ja)&&m.h.ob()}else{var n;null!=(n=this.ja)&&pg(n.i,n.Fa,1);var q;null!=(q=this.ja)&&q.h.ob()}try{this.l=r((0,y[e].a)(d,b,!0)).next().value,this.af=g.promise.then(function(){})}catch(z){var u;
null!=(u=this.ja)&&pg(u.i,u.Fa,4);var t;null!=(t=this.ja)&&t.h.ob();throw z;}}
ei.prototype.snapshot=function(a){var b=this;if(this.i)throw Error("Already disposed");var c=ci(),d;null!=(d=this.ja)&&d.j.h.uc("/client_streamz/bg/fsc",d.Fa);return this.j.then(function(e){var f=e.Zd;return new Promise(function(g){f(function(h){var l;if(null!=(l=b.ja)){var m=ci()-c;l.l.h.vc("/client_streamz/bg/fsl",m,l.Fa)}g(h)},[a.fd,
a.cf])})})};
ei.prototype.Jd=function(a){if(this.i)throw Error("Already disposed");var b=ci(),c;null!=(c=this.ja)&&c.j.h.uc("/client_streamz/bg/fsc",c.Fa);a=this.l([a.fd,a.cf]);null!=(c=this.ja)&&(b=ci()-b,c.l.h.vc("/client_streamz/bg/fsl",b,c.Fa));return a};
ei.prototype.dispose=function(){var a;null!=(a=this.ja)&&a.h.ob();this.i=!0;this.j.then(function(b){(b=b.bf)&&b()})};
ei.prototype.h=function(){return this.i};var fi=window;Cb("csi.gstatic.com");Cb("googleads.g.doubleclick.net");Cb("partner.googleadservices.com");Cb("pubads.g.doubleclick.net");Cb("securepubads.g.doubleclick.net");Cb("tpc.googlesyndication.com");/*

 SPDX-License-Identifier: Apache-2.0
*/
var gi;try{new URL("s://g"),gi=!0}catch(a){gi=!1}var hi=gi;var ii={};function ji(){}
function ki(a){this.h=a}
v(ki,ji);ki.prototype.toString=function(){return this.h};function li(a){var b="true".toString(),c=[new ki(mi[0].toLowerCase(),ii)];if(0===c.length)throw Error("");if(c.map(function(d){if(d instanceof ki)d=d.h;else throw Error("");return d}).every(function(d){return 0!=="data-loaded".indexOf(d)}))throw Error('Attribute "data-loaded" does not match any of the allowed prefixes.');
a.setAttribute("data-loaded",b)}
;function ni(a){var b,c,d=null==(c=(b=(a.ownerDocument&&a.ownerDocument.defaultView||window).document).querySelector)?void 0:c.call(b,"script[nonce]");(b=d?d.nonce||d.getAttribute("nonce")||"":"")&&a.setAttribute("nonce",b)}
function oi(a,b){a.src=Hb(b);ni(a)}
;function pi(a){this.ze=a}
function qi(a){return new pi(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var ri=[qi("data"),qi("http"),qi("https"),qi("mailto"),qi("ftp"),new pi(function(a){return/^[^:]*([/?#]|$)/.test(a)})];function si(a){var b=ti;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function ui(){var a=[];si(function(b){a.push(b)});
return a}
var ti={lf:"allow-forms",mf:"allow-modals",nf:"allow-orientation-lock",pf:"allow-pointer-lock",qf:"allow-popups",rf:"allow-popups-to-escape-sandbox",sf:"allow-presentation",tf:"allow-same-origin",uf:"allow-scripts",vf:"allow-top-navigation",wf:"allow-top-navigation-by-user-activation"},vi=eb(function(){return ui()});
function wi(){var a=xi(),b={};gb(vi(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function xi(){var a=void 0===a?document:a;return a.createElement("iframe")}
;function yi(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var zi=(new Date).getTime();var Ai="client_dev_domain client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");ja(Ai);"undefined"!==typeof TextDecoder&&new TextDecoder;var Bi="undefined"!==typeof TextEncoder?new TextEncoder:null,Ci=Bi?function(a){return Bi.encode(a)}:function(a){a=Lc(a);
for(var b=new Uint8Array(a.length),c=0;c<b.length;c++)b[c]=a[c];return b};function Di(a){vf.call(this);var b=this;this.v=this.j=0;this.ya=null!=a?a:{ea:function(e,f){return setTimeout(e,f)},
Ca:function(e){clearTimeout(e)}};
var c,d;this.i=null!=(d=null==(c=window.navigator)?void 0:c.onLine)?d:!0;this.m=function(){return x(function(e){return w(e,Ei(b),0)})};
window.addEventListener("offline",this.m);window.addEventListener("online",this.m);this.v||Fi(this)}
v(Di,vf);function Gi(){var a=Hi;Di.h||(Di.h=new Di(a));return Di.h}
Di.prototype.dispose=function(){window.removeEventListener("offline",this.m);window.removeEventListener("online",this.m);this.ya.Ca(this.v);delete Di.h};
Di.prototype.na=function(){return this.i};
function Fi(a){a.v=a.ya.ea(function(){var b;return x(function(c){if(1==c.h)return a.i?(null==(b=window.navigator)?0:b.onLine)?c.A(3):w(c,Ei(a),3):w(c,Ei(a),3);Fi(a);c.h=0})},3E4)}
function Ei(a,b){return a.s?a.s:a.s=new Promise(function(c){var d,e,f,g;return x(function(h){switch(h.h){case 1:return d=window.AbortController?new window.AbortController:void 0,f=null==(e=d)?void 0:e.signal,g=!1,za(h,2,3),d&&(a.j=a.ya.ea(function(){d.abort()},b||2E4)),w(h,fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:Da(h);a.s=void 0;a.j&&(a.ya.Ca(a.j),a.j=0);g!==a.i&&(a.i=g,a.i?wf(a,"networkstatus-online"):wf(a,"networkstatus-offline"));c(g);Ea(h);break;case 2:Ba(h),g=!1,h.A(3)}})})}
;function Ii(){this.data_=[];this.h=-1}
Ii.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&Number.isInteger(a)&&this.data_[a]!==b&&(this.data_[a]=b,this.h=-1)};
Ii.prototype.get=function(a){return!!this.data_[a]};
function Ji(a){-1===a.h&&(a.h=jb(a.data_,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.h}
;function Ki(a,b){this.h=a[y.Symbol.iterator]();this.i=b}
Ki.prototype[Symbol.iterator]=function(){return this};
Ki.prototype.next=function(){var a=this.h.next();return{value:a.done?void 0:this.i.call(void 0,a.value),done:a.done}};
function Li(a,b){return new Ki(a,b)}
;function Mi(){this.blockSize=-1}
;function Ni(){this.blockSize=-1;this.blockSize=64;this.h=[];this.m=[];this.s=[];this.j=[];this.j[0]=128;for(var a=1;a<this.blockSize;++a)this.j[a]=0;this.l=this.i=0;this.reset()}
$a(Ni,Mi);Ni.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.l=this.i=0};
function Oi(a,b,c){c||(c=0);var d=a.s;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.h[0];c=a.h[1];var g=a.h[2],h=a.h[3],l=a.h[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var m=1518500249}else f=c^g^h,m=1859775393;else 60>e?(f=c&g|h&(c|g),m=2400959708):
(f=c^g^h,m=3395469782);f=(b<<5|b>>>27)+f+l+m+d[e]&4294967295;l=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+g&4294967295;a.h[3]=a.h[3]+h&4294967295;a.h[4]=a.h[4]+l&4294967295}
Ni.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.m,f=this.i;d<b;){if(0==f)for(;d<=c;)Oi(this,a,d),d+=this.blockSize;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){Oi(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){Oi(this,e);f=0;break}}this.i=f;this.l+=b}};
Ni.prototype.digest=function(){var a=[],b=8*this.l;56>this.i?this.update(this.j,56-this.i):this.update(this.j,this.blockSize-(this.i-56));for(var c=this.blockSize-1;56<=c;c--)this.m[c]=b&255,b/=256;Oi(this,this.m);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.h[c]>>d&255,++b;return a};function Pi(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function Qi(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function Ri(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:Pi(a).match(/\S+/g)||[],b=0<=fb(a,b));return b}
function Si(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):Ri(a,"inverted-hdpi")&&Qi(a,Array.prototype.filter.call(a.classList?a.classList:Pi(a).match(/\S+/g)||[],function(b){return"inverted-hdpi"!=b}).join(" "))}
;function Ti(){}
Ti.prototype.next=function(){return Ui};
var Ui={done:!0,value:void 0};function Vi(a){return{value:a,done:!1}}
Ti.prototype.Ba=function(){return this};function Wi(a){if(a instanceof Xi||a instanceof Yi||a instanceof Zi)return a;if("function"==typeof a.next)return new Xi(function(){return a});
if("function"==typeof a[Symbol.iterator])return new Xi(function(){return a[Symbol.iterator]()});
if("function"==typeof a.Ba)return new Xi(function(){return a.Ba()});
throw Error("Not an iterator or iterable.");}
function Xi(a){this.i=a}
Xi.prototype.Ba=function(){return new Yi(this.i())};
Xi.prototype[Symbol.iterator]=function(){return new Zi(this.i())};
Xi.prototype.h=function(){return new Zi(this.i())};
function Yi(a){this.i=a}
v(Yi,Ti);Yi.prototype.next=function(){return this.i.next()};
Yi.prototype[Symbol.iterator]=function(){return new Zi(this.i)};
Yi.prototype.h=function(){return new Zi(this.i)};
function Zi(a){Xi.call(this,function(){return a});
this.j=a}
v(Zi,Xi);Zi.prototype.next=function(){return this.j.next()};function $i(a,b){this.i={};this.h=[];this.Va=this.size=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof $i)for(c=a.Bc(),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
k=$i.prototype;k.Bc=function(){aj(this);return this.h.concat()};
k.has=function(a){return bj(this.i,a)};
k.equals=function(a,b){if(this===a)return!0;if(this.size!=a.size)return!1;b=b||cj;aj(this);for(var c,d=0;c=this.h[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};
function cj(a,b){return a===b}
k.clear=function(){this.i={};this.Va=this.size=this.h.length=0};
k.remove=function(a){return this.delete(a)};
k.delete=function(a){return bj(this.i,a)?(delete this.i[a],--this.size,this.Va++,this.h.length>2*this.size&&aj(this),!0):!1};
function aj(a){if(a.size!=a.h.length){for(var b=0,c=0;b<a.h.length;){var d=a.h[b];bj(a.i,d)&&(a.h[c++]=d);b++}a.h.length=c}if(a.size!=a.h.length){var e={};for(c=b=0;b<a.h.length;)d=a.h[b],bj(e,d)||(a.h[c++]=d,e[d]=1),b++;a.h.length=c}}
k.get=function(a,b){return bj(this.i,a)?this.i[a]:b};
k.set=function(a,b){bj(this.i,a)||(this.size+=1,this.h.push(a),this.Va++);this.i[a]=b};
k.forEach=function(a,b){for(var c=this.Bc(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
k.clone=function(){return new $i(this)};
k.keys=function(){return Wi(this.Ba(!0)).h()};
k.values=function(){return Wi(this.Ba(!1)).h()};
k.entries=function(){var a=this;return Li(this.keys(),function(b){return[b,a.get(b)]})};
k.Ba=function(a){aj(this);var b=0,c=this.Va,d=this,e=new Ti;e.next=function(){if(c!=d.Va)throw Error("The map has changed since the iterator was created");if(b>=d.h.length)return Ui;var f=d.h[b++];return Vi(a?f:d.i[f])};
return e};
function bj(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;function dj(a){K.call(this);this.s=1;this.l=[];this.m=0;this.i=[];this.j={};this.v=!!a}
$a(dj,K);k=dj.prototype;k.subscribe=function(a,b,c){var d=this.j[a];d||(d=this.j[a]=[]);var e=this.s;this.i[e]=a;this.i[e+1]=b;this.i[e+2]=c;this.s=e+3;d.push(e);return e};
function ej(a,b,c,d){if(b=a.j[b]){var e=a.i;(b=b.find(function(f){return e[f+1]==c&&e[f+2]==d}))&&a.Eb(b)}}
k.Eb=function(a){var b=this.i[a];if(b){var c=this.j[b];0!=this.m?(this.l.push(a),this.i[a+1]=function(){}):(c&&lb(c,a),delete this.i[a],delete this.i[a+1],delete this.i[a+2])}return!!b};
k.bb=function(a,b){var c=this.j[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.v)for(e=0;e<c.length;e++){var g=c[e];fj(this.i[g+1],this.i[g+2],d)}else{this.m++;try{for(e=0,f=c.length;e<f&&!this.h();e++)g=c[e],this.i[g+1].apply(this.i[g+2],d)}finally{if(this.m--,0<this.l.length&&0==this.m)for(;c=this.l.pop();)this.Eb(c)}}return 0!=e}return!1};
function fj(a,b,c){Of(function(){a.apply(b,c)})}
k.clear=function(a){if(a){var b=this.j[a];b&&(b.forEach(this.Eb,this),delete this.j[a])}else this.i.length=0,this.j={}};
k.L=function(){dj.ta.L.call(this);this.clear();this.l.length=0};function gj(a){this.h=a}
gj.prototype.set=function(a,b){void 0===b?this.h.remove(a):this.h.set(a,Xg(b))};
gj.prototype.get=function(a){try{var b=this.h.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
gj.prototype.remove=function(a){this.h.remove(a)};function hj(a){this.h=a}
$a(hj,gj);function ij(a){this.data=a}
function jj(a){return void 0===a||a instanceof ij?a:new ij(a)}
hj.prototype.set=function(a,b){hj.ta.set.call(this,a,jj(b))};
hj.prototype.i=function(a){a=hj.ta.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
hj.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function kj(a){this.h=a}
$a(kj,hj);kj.prototype.set=function(a,b,c){if(b=jj(b)){if(c){if(c<Date.now()){kj.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Date.now()}kj.ta.set.call(this,a,b)};
kj.prototype.i=function(a){var b=kj.ta.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Date.now()||c&&c>Date.now())kj.prototype.remove.call(this,a);else return b}};function lj(){}
;function mj(){}
$a(mj,lj);mj.prototype[Symbol.iterator]=function(){return Wi(this.Ba(!0)).h()};
mj.prototype.clear=function(){var a=Array.from(this);a=r(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function nj(a){this.h=a}
$a(nj,mj);k=nj.prototype;k.isAvailable=function(){if(!this.h)return!1;try{return this.h.setItem("__sak","1"),this.h.removeItem("__sak"),!0}catch(a){return!1}};
k.set=function(a,b){try{this.h.setItem(a,b)}catch(c){if(0==this.h.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
k.get=function(a){a=this.h.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
k.remove=function(a){this.h.removeItem(a)};
k.Ba=function(a){var b=0,c=this.h,d=new Ti;d.next=function(){if(b>=c.length)return Ui;var e=c.key(b++);if(a)return Vi(e);e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return Vi(e)};
return d};
k.clear=function(){this.h.clear()};
k.key=function(a){return this.h.key(a)};function oj(){var a=null;try{a=window.localStorage||null}catch(b){}this.h=a}
$a(oj,nj);function pj(a,b){this.i=a;this.h=null;var c;if(c=Yc)c=!(9<=Number(kd));if(c){qj||(qj=new $i);this.h=qj.get(a);this.h||(b?this.h=document.getElementById(b):(this.h=document.createElement("userdata"),this.h.addBehavior("#default#userData"),document.body.appendChild(this.h)),qj.set(a,this.h));try{this.h.load(this.i)}catch(d){this.h=null}}}
$a(pj,mj);var rj={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},qj=null;function sj(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return rj[b]})}
k=pj.prototype;k.isAvailable=function(){return!!this.h};
k.set=function(a,b){this.h.setAttribute(sj(a),b);tj(this)};
k.get=function(a){a=this.h.getAttribute(sj(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
k.remove=function(a){this.h.removeAttribute(sj(a));tj(this)};
k.Ba=function(a){var b=0,c=this.h.XMLDocument.documentElement.attributes,d=new Ti;d.next=function(){if(b>=c.length)return Ui;var e=c[b++];if(a)return Vi(decodeURIComponent(e.nodeName.replace(/\./g,"%")).slice(1));e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return Vi(e)};
return d};
k.clear=function(){for(var a=this.h.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);tj(this)};
function tj(a){try{a.h.save(a.i)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function uj(a,b){this.i=a;this.h=b+"::"}
$a(uj,mj);uj.prototype.set=function(a,b){this.i.set(this.h+a,b)};
uj.prototype.get=function(a){return this.i.get(this.h+a)};
uj.prototype.remove=function(a){this.i.remove(this.h+a)};
uj.prototype.Ba=function(a){var b=this.i[Symbol.iterator](),c=this,d=new Ti;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.h.length)!=c.h;){e=b.next();if(e.done)return e;e=e.value}return Vi(a?e.slice(c.h.length):c.i.get(e))};
return d};/*

 (The MIT License)

 Copyright (C) 2014 by Vitaly Puzrin

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 -----------------------------------------------------------------------------
 Ported from zlib, which is under the following license
 https://github.com/madler/zlib/blob/master/zlib.h

 zlib.h -- interface of the 'zlib' general purpose compression library
   version 1.2.8, April 28th, 2013
   Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
   This software is provided 'as-is', without any express or implied
   warranty.  In no event will the authors be held liable for any damages
   arising from the use of this software.
   Permission is granted to anyone to use this software for any purpose,
   including commercial applications, and to alter it and redistribute it
   freely, subject to the following restrictions:
   1. The origin of this software must not be misrepresented; you must not
      claim that you wrote the original software. If you use this software
      in a product, an acknowledgment in the product documentation would be
      appreciated but is not required.
   2. Altered source versions must be plainly marked as such, and must not be
      misrepresented as being the original software.
   3. This notice may not be removed or altered from any source distribution.
   Jean-loup Gailly        Mark Adler
   jloup@gzip.org          madler@alumni.caltech.edu
   The data format used by the zlib library is described by RFCs (Request for
   Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
   (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
*/
var L={},vj="undefined"!==typeof Uint8Array&&"undefined"!==typeof Uint16Array&&"undefined"!==typeof Int32Array;L.assign=function(a){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var c=b.shift();if(c){if("object"!==typeof c)throw new TypeError(c+"must be non-object");for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}}return a};
L.Rc=function(a,b){if(a.length===b)return a;if(a.subarray)return a.subarray(0,b);a.length=b;return a};
var wj={qb:function(a,b,c,d,e){if(b.subarray&&a.subarray)a.set(b.subarray(c,c+d),e);else for(var f=0;f<d;f++)a[e+f]=b[c+f]},
ld:function(a){var b,c;var d=c=0;for(b=a.length;d<b;d++)c+=a[d].length;var e=new Uint8Array(c);d=c=0;for(b=a.length;d<b;d++){var f=a[d];e.set(f,c);c+=f.length}return e}},xj={qb:function(a,b,c,d,e){for(var f=0;f<d;f++)a[e+f]=b[c+f]},
ld:function(a){return[].concat.apply([],a)}};
L.Ze=function(){vj?(L.nb=Uint8Array,L.Ga=Uint16Array,L.Sd=Int32Array,L.assign(L,wj)):(L.nb=Array,L.Ga=Array,L.Sd=Array,L.assign(L,xj))};
L.Ze();var yj=!0;try{new Uint8Array(1)}catch(a){yj=!1}
function zj(a){var b,c,d=a.length,e=0;for(b=0;b<d;b++){var f=a.charCodeAt(b);if(55296===(f&64512)&&b+1<d){var g=a.charCodeAt(b+1);56320===(g&64512)&&(f=65536+(f-55296<<10)+(g-56320),b++)}e+=128>f?1:2048>f?2:65536>f?3:4}var h=new L.nb(e);for(b=c=0;c<e;b++)f=a.charCodeAt(b),55296===(f&64512)&&b+1<d&&(g=a.charCodeAt(b+1),56320===(g&64512)&&(f=65536+(f-55296<<10)+(g-56320),b++)),128>f?h[c++]=f:(2048>f?h[c++]=192|f>>>6:(65536>f?h[c++]=224|f>>>12:(h[c++]=240|f>>>18,h[c++]=128|f>>>12&63),h[c++]=128|f>>>
6&63),h[c++]=128|f&63);return h}
;var Aj={};Aj=function(a,b,c,d){var e=a&65535|0;a=a>>>16&65535|0;for(var f;0!==c;){f=2E3<c?2E3:c;c-=f;do e=e+b[d++]|0,a=a+e|0;while(--f);e%=65521;a%=65521}return e|a<<16|0};for(var Bj={},Cj,Dj=[],Ej=0;256>Ej;Ej++){Cj=Ej;for(var Fj=0;8>Fj;Fj++)Cj=Cj&1?3988292384^Cj>>>1:Cj>>>1;Dj[Ej]=Cj}Bj=function(a,b,c,d){c=d+c;for(a^=-1;d<c;d++)a=a>>>8^Dj[(a^b[d])&255];return a^-1};var Gj={};Gj={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"};function Hj(a){for(var b=a.length;0<=--b;)a[b]=0}
var Ij=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],Jj=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],Kj=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],Lj=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],Mj=Array(576);Hj(Mj);var Nj=Array(60);Hj(Nj);var Oj=Array(512);Hj(Oj);var Pj=Array(256);Hj(Pj);var Qj=Array(29);Hj(Qj);var Rj=Array(30);Hj(Rj);function Sj(a,b,c,d,e){this.Kd=a;this.me=b;this.le=c;this.he=d;this.De=e;this.pd=a&&a.length}
var Tj,Uj,Vj;function Wj(a,b){this.jd=a;this.xb=0;this.Ua=b}
function Xj(a,b){a.R[a.pending++]=b&255;a.R[a.pending++]=b>>>8&255}
function Yj(a,b,c){a.Z>16-c?(a.ga|=b<<a.Z&65535,Xj(a,a.ga),a.ga=b>>16-a.Z,a.Z+=c-16):(a.ga|=b<<a.Z&65535,a.Z+=c)}
function Zj(a,b,c){Yj(a,c[2*b],c[2*b+1])}
function ak(a,b){var c=0;do c|=a&1,a>>>=1,c<<=1;while(0<--b);return c>>>1}
function bk(a,b,c){var d=Array(16),e=0,f;for(f=1;15>=f;f++)d[f]=e=e+c[f-1]<<1;for(c=0;c<=b;c++)e=a[2*c+1],0!==e&&(a[2*c]=ak(d[e]++,e))}
function ck(a){var b;for(b=0;286>b;b++)a.ka[2*b]=0;for(b=0;30>b;b++)a.eb[2*b]=0;for(b=0;19>b;b++)a.ba[2*b]=0;a.ka[512]=1;a.Na=a.Ab=0;a.ra=a.matches=0}
function dk(a){8<a.Z?Xj(a,a.ga):0<a.Z&&(a.R[a.pending++]=a.ga);a.ga=0;a.Z=0}
function ek(a,b,c){dk(a);Xj(a,c);Xj(a,~c);L.qb(a.R,a.window,b,c,a.pending);a.pending+=c}
function fk(a,b,c,d){var e=2*b,f=2*c;return a[e]<a[f]||a[e]===a[f]&&d[b]<=d[c]}
function gk(a,b,c){for(var d=a.S[c],e=c<<1;e<=a.Ka;){e<a.Ka&&fk(b,a.S[e+1],a.S[e],a.depth)&&e++;if(fk(b,d,a.S[e],a.depth))break;a.S[c]=a.S[e];c=e;e<<=1}a.S[c]=d}
function hk(a,b,c){var d=0;if(0!==a.ra){do{var e=a.R[a.Hb+2*d]<<8|a.R[a.Hb+2*d+1];var f=a.R[a.Gc+d];d++;if(0===e)Zj(a,f,b);else{var g=Pj[f];Zj(a,g+256+1,b);var h=Ij[g];0!==h&&(f-=Qj[g],Yj(a,f,h));e--;g=256>e?Oj[e]:Oj[256+(e>>>7)];Zj(a,g,c);h=Jj[g];0!==h&&(e-=Rj[g],Yj(a,e,h))}}while(d<a.ra)}Zj(a,256,b)}
function ik(a,b){var c=b.jd,d=b.Ua.Kd,e=b.Ua.pd,f=b.Ua.he,g,h=-1;a.Ka=0;a.ub=573;for(g=0;g<f;g++)0!==c[2*g]?(a.S[++a.Ka]=h=g,a.depth[g]=0):c[2*g+1]=0;for(;2>a.Ka;){var l=a.S[++a.Ka]=2>h?++h:0;c[2*l]=1;a.depth[l]=0;a.Na--;e&&(a.Ab-=d[2*l+1])}b.xb=h;for(g=a.Ka>>1;1<=g;g--)gk(a,c,g);l=f;do g=a.S[1],a.S[1]=a.S[a.Ka--],gk(a,c,1),d=a.S[1],a.S[--a.ub]=g,a.S[--a.ub]=d,c[2*l]=c[2*g]+c[2*d],a.depth[l]=(a.depth[g]>=a.depth[d]?a.depth[g]:a.depth[d])+1,c[2*g+1]=c[2*d+1]=l,a.S[1]=l++,gk(a,c,1);while(2<=a.Ka);a.S[--a.ub]=
a.S[1];g=b.jd;l=b.xb;d=b.Ua.Kd;e=b.Ua.pd;f=b.Ua.me;var m=b.Ua.le,n=b.Ua.De,q,u=0;for(q=0;15>=q;q++)a.Ha[q]=0;g[2*a.S[a.ub]+1]=0;for(b=a.ub+1;573>b;b++){var t=a.S[b];q=g[2*g[2*t+1]+1]+1;q>n&&(q=n,u++);g[2*t+1]=q;if(!(t>l)){a.Ha[q]++;var z=0;t>=m&&(z=f[t-m]);var C=g[2*t];a.Na+=C*(q+z);e&&(a.Ab+=C*(d[2*t+1]+z))}}if(0!==u){do{for(q=n-1;0===a.Ha[q];)q--;a.Ha[q]--;a.Ha[q+1]+=2;a.Ha[n]--;u-=2}while(0<u);for(q=n;0!==q;q--)for(t=a.Ha[q];0!==t;)d=a.S[--b],d>l||(g[2*d+1]!==q&&(a.Na+=(q-g[2*d+1])*g[2*d],g[2*
d+1]=q),t--)}bk(c,h,a.Ha)}
function jk(a,b,c){var d,e=-1,f=b[1],g=0,h=7,l=4;0===f&&(h=138,l=3);b[2*(c+1)+1]=65535;for(d=0;d<=c;d++){var m=f;f=b[2*(d+1)+1];++g<h&&m===f||(g<l?a.ba[2*m]+=g:0!==m?(m!==e&&a.ba[2*m]++,a.ba[32]++):10>=g?a.ba[34]++:a.ba[36]++,g=0,e=m,0===f?(h=138,l=3):m===f?(h=6,l=3):(h=7,l=4))}}
function kk(a,b,c){var d,e=-1,f=b[1],g=0,h=7,l=4;0===f&&(h=138,l=3);for(d=0;d<=c;d++){var m=f;f=b[2*(d+1)+1];if(!(++g<h&&m===f)){if(g<l){do Zj(a,m,a.ba);while(0!==--g)}else 0!==m?(m!==e&&(Zj(a,m,a.ba),g--),Zj(a,16,a.ba),Yj(a,g-3,2)):10>=g?(Zj(a,17,a.ba),Yj(a,g-3,3)):(Zj(a,18,a.ba),Yj(a,g-11,7));g=0;e=m;0===f?(h=138,l=3):m===f?(h=6,l=3):(h=7,l=4)}}}
function lk(a){var b=4093624447,c;for(c=0;31>=c;c++,b>>>=1)if(b&1&&0!==a.ka[2*c])return 0;if(0!==a.ka[18]||0!==a.ka[20]||0!==a.ka[26])return 1;for(c=32;256>c;c++)if(0!==a.ka[2*c])return 1;return 0}
var mk=!1;function nk(a,b,c){a.R[a.Hb+2*a.ra]=b>>>8&255;a.R[a.Hb+2*a.ra+1]=b&255;a.R[a.Gc+a.ra]=c&255;a.ra++;0===b?a.ka[2*c]++:(a.matches++,b--,a.ka[2*(Pj[c]+256+1)]++,a.eb[2*(256>b?Oj[b]:Oj[256+(b>>>7)])]++);return a.ra===a.Mb-1}
;function ok(a,b){a.msg=Gj[b];return b}
function pk(a){for(var b=a.length;0<=--b;)a[b]=0}
function qk(a){var b=a.state,c=b.pending;c>a.I&&(c=a.I);0!==c&&(L.qb(a.Nb,b.R,b.Ob,c,a.yb),a.yb+=c,b.Ob+=c,a.Sc+=c,a.I-=c,b.pending-=c,0===b.pending&&(b.Ob=0))}
function rk(a,b){var c=0<=a.ma?a.ma:-1,d=a.o-a.ma,e=0;if(0<a.level){2===a.D.wc&&(a.D.wc=lk(a));ik(a,a.jc);ik(a,a.ec);jk(a,a.ka,a.jc.xb);jk(a,a.eb,a.ec.xb);ik(a,a.Zc);for(e=18;3<=e&&0===a.ba[2*Lj[e]+1];e--);a.Na+=3*(e+1)+14;var f=a.Na+3+7>>>3;var g=a.Ab+3+7>>>3;g<=f&&(f=g)}else f=g=d+5;if(d+4<=f&&-1!==c)Yj(a,b?1:0,3),ek(a,c,d);else if(4===a.strategy||g===f)Yj(a,2+(b?1:0),3),hk(a,Mj,Nj);else{Yj(a,4+(b?1:0),3);c=a.jc.xb+1;d=a.ec.xb+1;e+=1;Yj(a,c-257,5);Yj(a,d-1,5);Yj(a,e-4,4);for(f=0;f<e;f++)Yj(a,a.ba[2*
Lj[f]+1],3);kk(a,a.ka,c-1);kk(a,a.eb,d-1);hk(a,a.ka,a.eb)}ck(a);b&&dk(a);a.ma=a.o;qk(a.D)}
function N(a,b){a.R[a.pending++]=b}
function sk(a,b){a.R[a.pending++]=b>>>8&255;a.R[a.pending++]=b&255}
function tk(a,b){var c=a.vd,d=a.o,e=a.oa,f=a.xd,g=a.o>a.da-262?a.o-(a.da-262):0,h=a.window,l=a.Wa,m=a.Ea,n=a.o+258,q=h[d+e-1],u=h[d+e];a.oa>=a.od&&(c>>=2);f>a.u&&(f=a.u);do{var t=b;if(h[t+e]===u&&h[t+e-1]===q&&h[t]===h[d]&&h[++t]===h[d+1]){d+=2;for(t++;h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&d<n;);t=258-(n-d);d=n-258;if(t>e){a.wb=b;e=t;if(t>=f)break;q=h[d+e-1];u=h[d+e]}}}while((b=m[b&l])>g&&0!==--c);return e<=
a.u?e:a.u}
function uk(a){var b=a.da,c;do{var d=a.Qd-a.u-a.o;if(a.o>=b+(b-262)){L.qb(a.window,a.window,b,b,0);a.wb-=b;a.o-=b;a.ma-=b;var e=c=a.ic;do{var f=a.head[--e];a.head[e]=f>=b?f-b:0}while(--c);e=c=b;do f=a.Ea[--e],a.Ea[e]=f>=b?f-b:0;while(--c);d+=b}if(0===a.D.fa)break;e=a.D;c=a.window;f=a.o+a.u;var g=e.fa;g>d&&(g=d);0===g?c=0:(e.fa-=g,L.qb(c,e.input,e.hb,g,f),1===e.state.wrap?e.C=Aj(e.C,c,g,f):2===e.state.wrap&&(e.C=Bj(e.C,c,g,f)),e.hb+=g,e.kb+=g,c=g);a.u+=c;if(3<=a.u+a.la)for(d=a.o-a.la,a.G=a.window[d],
a.G=(a.G<<a.Ja^a.window[d+1])&a.Ia;a.la&&!(a.G=(a.G<<a.Ja^a.window[d+3-1])&a.Ia,a.Ea[d&a.Wa]=a.head[a.G],a.head[a.G]=d,d++,a.la--,3>a.u+a.la););}while(262>a.u&&0!==a.D.fa)}
function vk(a,b){for(var c;;){if(262>a.u){uk(a);if(262>a.u&&0===b)return 1;if(0===a.u)break}c=0;3<=a.u&&(a.G=(a.G<<a.Ja^a.window[a.o+3-1])&a.Ia,c=a.Ea[a.o&a.Wa]=a.head[a.G],a.head[a.G]=a.o);0!==c&&a.o-c<=a.da-262&&(a.J=tk(a,c));if(3<=a.J)if(c=nk(a,a.o-a.wb,a.J-3),a.u-=a.J,a.J<=a.Hc&&3<=a.u){a.J--;do a.o++,a.G=(a.G<<a.Ja^a.window[a.o+3-1])&a.Ia,a.Ea[a.o&a.Wa]=a.head[a.G],a.head[a.G]=a.o;while(0!==--a.J);a.o++}else a.o+=a.J,a.J=0,a.G=a.window[a.o],a.G=(a.G<<a.Ja^a.window[a.o+1])&a.Ia;else c=nk(a,0,
a.window[a.o]),a.u--,a.o++;if(c&&(rk(a,!1),0===a.D.I))return 1}a.la=2>a.o?a.o:2;return 4===b?(rk(a,!0),0===a.D.I?3:4):a.ra&&(rk(a,!1),0===a.D.I)?1:2}
function wk(a,b){for(var c,d;;){if(262>a.u){uk(a);if(262>a.u&&0===b)return 1;if(0===a.u)break}c=0;3<=a.u&&(a.G=(a.G<<a.Ja^a.window[a.o+3-1])&a.Ia,c=a.Ea[a.o&a.Wa]=a.head[a.G],a.head[a.G]=a.o);a.oa=a.J;a.Ad=a.wb;a.J=2;0!==c&&a.oa<a.Hc&&a.o-c<=a.da-262&&(a.J=tk(a,c),5>=a.J&&(1===a.strategy||3===a.J&&4096<a.o-a.wb)&&(a.J=2));if(3<=a.oa&&a.J<=a.oa){d=a.o+a.u-3;c=nk(a,a.o-1-a.Ad,a.oa-3);a.u-=a.oa-1;a.oa-=2;do++a.o<=d&&(a.G=(a.G<<a.Ja^a.window[a.o+3-1])&a.Ia,a.Ea[a.o&a.Wa]=a.head[a.G],a.head[a.G]=a.o);
while(0!==--a.oa);a.fb=0;a.J=2;a.o++;if(c&&(rk(a,!1),0===a.D.I))return 1}else if(a.fb){if((c=nk(a,0,a.window[a.o-1]))&&rk(a,!1),a.o++,a.u--,0===a.D.I)return 1}else a.fb=1,a.o++,a.u--}a.fb&&(nk(a,0,a.window[a.o-1]),a.fb=0);a.la=2>a.o?a.o:2;return 4===b?(rk(a,!0),0===a.D.I?3:4):a.ra&&(rk(a,!1),0===a.D.I)?1:2}
function xk(a,b){for(var c,d,e,f=a.window;;){if(258>=a.u){uk(a);if(258>=a.u&&0===b)return 1;if(0===a.u)break}a.J=0;if(3<=a.u&&0<a.o&&(d=a.o-1,c=f[d],c===f[++d]&&c===f[++d]&&c===f[++d])){for(e=a.o+258;c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&d<e;);a.J=258-(e-d);a.J>a.u&&(a.J=a.u)}3<=a.J?(c=nk(a,1,a.J-3),a.u-=a.J,a.o+=a.J,a.J=0):(c=nk(a,0,a.window[a.o]),a.u--,a.o++);if(c&&(rk(a,!1),0===a.D.I))return 1}a.la=0;return 4===b?(rk(a,!0),0===a.D.I?3:4):
a.ra&&(rk(a,!1),0===a.D.I)?1:2}
function yk(a,b){for(var c;;){if(0===a.u&&(uk(a),0===a.u)){if(0===b)return 1;break}a.J=0;c=nk(a,0,a.window[a.o]);a.u--;a.o++;if(c&&(rk(a,!1),0===a.D.I))return 1}a.la=0;return 4===b?(rk(a,!0),0===a.D.I?3:4):a.ra&&(rk(a,!1),0===a.D.I)?1:2}
function zk(a,b,c,d,e){this.se=a;this.Ce=b;this.Ge=c;this.Be=d;this.oe=e}
var Ak;Ak=[new zk(0,0,0,0,function(a,b){var c=65535;for(c>a.sa-5&&(c=a.sa-5);;){if(1>=a.u){uk(a);if(0===a.u&&0===b)return 1;if(0===a.u)break}a.o+=a.u;a.u=0;var d=a.ma+c;if(0===a.o||a.o>=d)if(a.u=a.o-d,a.o=d,rk(a,!1),0===a.D.I)return 1;if(a.o-a.ma>=a.da-262&&(rk(a,!1),0===a.D.I))return 1}a.la=0;if(4===b)return rk(a,!0),0===a.D.I?3:4;a.o>a.ma&&rk(a,!1);return 1}),
new zk(4,4,8,4,vk),new zk(4,5,16,8,vk),new zk(4,6,32,32,vk),new zk(4,4,16,16,wk),new zk(8,16,32,32,wk),new zk(8,16,128,128,wk),new zk(8,32,128,256,wk),new zk(32,128,258,1024,wk),new zk(32,258,258,4096,wk)];
function Bk(){this.D=null;this.status=0;this.R=null;this.wrap=this.pending=this.Ob=this.sa=0;this.B=null;this.wa=0;this.method=8;this.vb=-1;this.Wa=this.Uc=this.da=0;this.window=null;this.Qd=0;this.head=this.Ea=null;this.xd=this.od=this.strategy=this.level=this.Hc=this.vd=this.oa=this.u=this.wb=this.o=this.fb=this.Ad=this.J=this.ma=this.Ja=this.Ia=this.Cc=this.ic=this.G=0;this.ka=new L.Ga(1146);this.eb=new L.Ga(122);this.ba=new L.Ga(78);pk(this.ka);pk(this.eb);pk(this.ba);this.Zc=this.ec=this.jc=
null;this.Ha=new L.Ga(16);this.S=new L.Ga(573);pk(this.S);this.ub=this.Ka=0;this.depth=new L.Ga(573);pk(this.depth);this.Z=this.ga=this.la=this.matches=this.Ab=this.Na=this.Hb=this.ra=this.Mb=this.Gc=0}
function Ck(a,b){if(!a||!a.state||5<b||0>b)return a?ok(a,-2):-2;var c=a.state;if(!a.Nb||!a.input&&0!==a.fa||666===c.status&&4!==b)return ok(a,0===a.I?-5:-2);c.D=a;var d=c.vb;c.vb=b;if(42===c.status)if(2===c.wrap)a.C=0,N(c,31),N(c,139),N(c,8),c.B?(N(c,(c.B.text?1:0)+(c.B.Ra?2:0)+(c.B.Qa?4:0)+(c.B.name?8:0)+(c.B.comment?16:0)),N(c,c.B.time&255),N(c,c.B.time>>8&255),N(c,c.B.time>>16&255),N(c,c.B.time>>24&255),N(c,9===c.level?2:2<=c.strategy||2>c.level?4:0),N(c,c.B.os&255),c.B.Qa&&c.B.Qa.length&&(N(c,
c.B.Qa.length&255),N(c,c.B.Qa.length>>8&255)),c.B.Ra&&(a.C=Bj(a.C,c.R,c.pending,0)),c.wa=0,c.status=69):(N(c,0),N(c,0),N(c,0),N(c,0),N(c,0),N(c,9===c.level?2:2<=c.strategy||2>c.level?4:0),N(c,3),c.status=113);else{var e=8+(c.Uc-8<<4)<<8;e|=(2<=c.strategy||2>c.level?0:6>c.level?1:6===c.level?2:3)<<6;0!==c.o&&(e|=32);c.status=113;sk(c,e+(31-e%31));0!==c.o&&(sk(c,a.C>>>16),sk(c,a.C&65535));a.C=1}if(69===c.status)if(c.B.Qa){for(e=c.pending;c.wa<(c.B.Qa.length&65535)&&(c.pending!==c.sa||(c.B.Ra&&c.pending>
e&&(a.C=Bj(a.C,c.R,c.pending-e,e)),qk(a),e=c.pending,c.pending!==c.sa));)N(c,c.B.Qa[c.wa]&255),c.wa++;c.B.Ra&&c.pending>e&&(a.C=Bj(a.C,c.R,c.pending-e,e));c.wa===c.B.Qa.length&&(c.wa=0,c.status=73)}else c.status=73;if(73===c.status)if(c.B.name){e=c.pending;do{if(c.pending===c.sa&&(c.B.Ra&&c.pending>e&&(a.C=Bj(a.C,c.R,c.pending-e,e)),qk(a),e=c.pending,c.pending===c.sa)){var f=1;break}f=c.wa<c.B.name.length?c.B.name.charCodeAt(c.wa++)&255:0;N(c,f)}while(0!==f);c.B.Ra&&c.pending>e&&(a.C=Bj(a.C,c.R,c.pending-
e,e));0===f&&(c.wa=0,c.status=91)}else c.status=91;if(91===c.status)if(c.B.comment){e=c.pending;do{if(c.pending===c.sa&&(c.B.Ra&&c.pending>e&&(a.C=Bj(a.C,c.R,c.pending-e,e)),qk(a),e=c.pending,c.pending===c.sa)){f=1;break}f=c.wa<c.B.comment.length?c.B.comment.charCodeAt(c.wa++)&255:0;N(c,f)}while(0!==f);c.B.Ra&&c.pending>e&&(a.C=Bj(a.C,c.R,c.pending-e,e));0===f&&(c.status=103)}else c.status=103;103===c.status&&(c.B.Ra?(c.pending+2>c.sa&&qk(a),c.pending+2<=c.sa&&(N(c,a.C&255),N(c,a.C>>8&255),a.C=0,
c.status=113)):c.status=113);if(0!==c.pending){if(qk(a),0===a.I)return c.vb=-1,0}else if(0===a.fa&&(b<<1)-(4<b?9:0)<=(d<<1)-(4<d?9:0)&&4!==b)return ok(a,-5);if(666===c.status&&0!==a.fa)return ok(a,-5);if(0!==a.fa||0!==c.u||0!==b&&666!==c.status){d=2===c.strategy?yk(c,b):3===c.strategy?xk(c,b):Ak[c.level].oe(c,b);if(3===d||4===d)c.status=666;if(1===d||3===d)return 0===a.I&&(c.vb=-1),0;if(2===d&&(1===b?(Yj(c,2,3),Zj(c,256,Mj),16===c.Z?(Xj(c,c.ga),c.ga=0,c.Z=0):8<=c.Z&&(c.R[c.pending++]=c.ga&255,c.ga>>=
8,c.Z-=8)):5!==b&&(Yj(c,0,3),ek(c,0,0),3===b&&(pk(c.head),0===c.u&&(c.o=0,c.ma=0,c.la=0))),qk(a),0===a.I))return c.vb=-1,0}if(4!==b)return 0;if(0>=c.wrap)return 1;2===c.wrap?(N(c,a.C&255),N(c,a.C>>8&255),N(c,a.C>>16&255),N(c,a.C>>24&255),N(c,a.kb&255),N(c,a.kb>>8&255),N(c,a.kb>>16&255),N(c,a.kb>>24&255)):(sk(c,a.C>>>16),sk(c,a.C&65535));qk(a);0<c.wrap&&(c.wrap=-c.wrap);return 0!==c.pending?0:1}
;var Dk={};Dk=function(){this.input=null;this.kb=this.fa=this.hb=0;this.Nb=null;this.Sc=this.I=this.yb=0;this.msg="";this.state=null;this.wc=2;this.C=0};var Ek=Object.prototype.toString;
function Fk(a){if(!(this instanceof Fk))return new Fk(a);a=this.options=L.assign({level:-1,method:8,chunkSize:16384,Xa:15,Ee:8,strategy:0,K:""},a||{});a.raw&&0<a.Xa?a.Xa=-a.Xa:a.te&&0<a.Xa&&16>a.Xa&&(a.Xa+=16);this.err=0;this.msg="";this.ended=!1;this.chunks=[];this.D=new Dk;this.D.I=0;var b=this.D;var c=a.level,d=a.method,e=a.Xa,f=a.Ee,g=a.strategy;if(b){var h=1;-1===c&&(c=6);0>e?(h=0,e=-e):15<e&&(h=2,e-=16);if(1>f||9<f||8!==d||8>e||15<e||0>c||9<c||0>g||4<g)b=ok(b,-2);else{8===e&&(e=9);var l=new Bk;
b.state=l;l.D=b;l.wrap=h;l.B=null;l.Uc=e;l.da=1<<l.Uc;l.Wa=l.da-1;l.Cc=f+7;l.ic=1<<l.Cc;l.Ia=l.ic-1;l.Ja=~~((l.Cc+3-1)/3);l.window=new L.nb(2*l.da);l.head=new L.Ga(l.ic);l.Ea=new L.Ga(l.da);l.Mb=1<<f+6;l.sa=4*l.Mb;l.R=new L.nb(l.sa);l.Hb=1*l.Mb;l.Gc=3*l.Mb;l.level=c;l.strategy=g;l.method=d;if(b&&b.state){b.kb=b.Sc=0;b.wc=2;c=b.state;c.pending=0;c.Ob=0;0>c.wrap&&(c.wrap=-c.wrap);c.status=c.wrap?42:113;b.C=2===c.wrap?0:1;c.vb=0;if(!mk){d=Array(16);for(f=g=0;28>f;f++)for(Qj[f]=g,e=0;e<1<<Ij[f];e++)Pj[g++]=
f;Pj[g-1]=f;for(f=g=0;16>f;f++)for(Rj[f]=g,e=0;e<1<<Jj[f];e++)Oj[g++]=f;for(g>>=7;30>f;f++)for(Rj[f]=g<<7,e=0;e<1<<Jj[f]-7;e++)Oj[256+g++]=f;for(e=0;15>=e;e++)d[e]=0;for(e=0;143>=e;)Mj[2*e+1]=8,e++,d[8]++;for(;255>=e;)Mj[2*e+1]=9,e++,d[9]++;for(;279>=e;)Mj[2*e+1]=7,e++,d[7]++;for(;287>=e;)Mj[2*e+1]=8,e++,d[8]++;bk(Mj,287,d);for(e=0;30>e;e++)Nj[2*e+1]=5,Nj[2*e]=ak(e,5);Tj=new Sj(Mj,Ij,257,286,15);Uj=new Sj(Nj,Jj,0,30,15);Vj=new Sj([],Kj,0,19,7);mk=!0}c.jc=new Wj(c.ka,Tj);c.ec=new Wj(c.eb,Uj);c.Zc=
new Wj(c.ba,Vj);c.ga=0;c.Z=0;ck(c);c=0}else c=ok(b,-2);0===c&&(b=b.state,b.Qd=2*b.da,pk(b.head),b.Hc=Ak[b.level].Ce,b.od=Ak[b.level].se,b.xd=Ak[b.level].Ge,b.vd=Ak[b.level].Be,b.o=0,b.ma=0,b.u=0,b.la=0,b.J=b.oa=2,b.fb=0,b.G=0);b=c}}else b=-2;if(0!==b)throw Error(Gj[b]);a.header&&(b=this.D)&&b.state&&2===b.state.wrap&&(b.state.B=a.header);if(a.Ib){var m;"string"===typeof a.Ib?m=zj(a.Ib):"[object ArrayBuffer]"===Ek.call(a.Ib)?m=new Uint8Array(a.Ib):m=a.Ib;a=this.D;f=m;g=f.length;if(a&&a.state)if(m=
a.state,b=m.wrap,2===b||1===b&&42!==m.status||m.u)b=-2;else{1===b&&(a.C=Aj(a.C,f,g,0));m.wrap=0;g>=m.da&&(0===b&&(pk(m.head),m.o=0,m.ma=0,m.la=0),c=new L.nb(m.da),L.qb(c,f,g-m.da,m.da,0),f=c,g=m.da);c=a.fa;d=a.hb;e=a.input;a.fa=g;a.hb=0;a.input=f;for(uk(m);3<=m.u;){f=m.o;g=m.u-2;do m.G=(m.G<<m.Ja^m.window[f+3-1])&m.Ia,m.Ea[f&m.Wa]=m.head[m.G],m.head[m.G]=f,f++;while(--g);m.o=f;m.u=2;uk(m)}m.o+=m.u;m.ma=m.o;m.la=m.u;m.u=0;m.J=m.oa=2;m.fb=0;a.hb=d;a.input=e;a.fa=c;m.wrap=b;b=0}else b=-2;if(0!==b)throw Error(Gj[b]);
this.lg=!0}}
Fk.prototype.push=function(a,b){var c=this.D,d=this.options.chunkSize;if(this.ended)return!1;var e=b===~~b?b:!0===b?4:0;"string"===typeof a?c.input=zj(a):"[object ArrayBuffer]"===Ek.call(a)?c.input=new Uint8Array(a):c.input=a;c.hb=0;c.fa=c.input.length;do{0===c.I&&(c.Nb=new L.nb(d),c.yb=0,c.I=d);a=Ck(c,e);if(1!==a&&0!==a)return Gk(this,a),this.ended=!0,!1;if(0===c.I||0===c.fa&&(4===e||2===e))if("string"===this.options.K){var f=L.Rc(c.Nb,c.yb);b=f;f=f.length;if(65537>f&&(b.subarray&&yj||!b.subarray))b=
String.fromCharCode.apply(null,L.Rc(b,f));else{for(var g="",h=0;h<f;h++)g+=String.fromCharCode(b[h]);b=g}this.chunks.push(b)}else b=L.Rc(c.Nb,c.yb),this.chunks.push(b)}while((0<c.fa||0===c.I)&&1!==a);if(4===e)return(c=this.D)&&c.state?(d=c.state.status,42!==d&&69!==d&&73!==d&&91!==d&&103!==d&&113!==d&&666!==d?a=ok(c,-2):(c.state=null,a=113===d?ok(c,-3):0)):a=-2,Gk(this,a),this.ended=!0,0===a;2===e&&(Gk(this,0),c.I=0);return!0};
function Gk(a,b){0===b&&(a.result="string"===a.options.K?a.chunks.join(""):L.ld(a.chunks));a.chunks=[];a.err=b;a.msg=a.D.msg}
function Hk(a,b){b=b||{};b.te=!0;b=new Fk(b);b.push(a,!0);if(b.err)throw b.msg||Gj[b.err];return b.result}
;function Ik(a){return Ib(null===a?"null":void 0===a?"undefined":a)}
;function Jk(a){this.name=a}
;var Kk=new Jk("rawColdConfigGroup");var Lk=new Jk("rawHotConfigGroup");function Mk(a){I.call(this,a)}
v(Mk,I);function Nk(a,b){return oe(a,1,b)}
;function Ok(a){I.call(this,a,-1,Pk)}
v(Ok,I);var Pk=[1];function Qk(a){I.call(this,a)}
v(Qk,I);function Rk(a){I.call(this,a)}
v(Rk,I);function Sk(a){I.call(this,a)}
v(Sk,I);function Tk(a){I.call(this,a,-1,Uk)}
v(Tk,I);var Uk=[2];function Vk(a){I.call(this,a,-1,Wk)}
v(Vk,I);Vk.prototype.getPlayerType=function(){return ae(this,36)};
Vk.prototype.setHomeGroupInfo=function(a){return H(this,Tk,81,a)};
Vk.prototype.clearLocationPlayabilityToken=function(){return G(this,89,void 0,!1)};
var Wk=[9,66,24,32,86,100,101];function Xk(a){I.call(this,a)}
v(Xk,I);Xk.prototype.getKey=function(){return se(this,1)};
Xk.prototype.getValue=function(){return se(this,2===he(this,Yk)?2:-1)};
var Yk=[2,3,4,5,6];function Zk(a){I.call(this,a,-1,$k)}
v(Zk,I);var $k=[15,26,28];function al(a){I.call(this,a,-1,bl)}
v(al,I);var bl=[5];function cl(a){I.call(this,a)}
v(cl,I);function dl(a){I.call(this,a,-1,el)}
v(dl,I);dl.prototype.setSafetyMode=function(a){return G(this,5,a)};
var el=[12];function fl(a){I.call(this,a,-1,gl)}
v(fl,I);fl.prototype.l=function(a){return H(this,Vk,1,a)};
var gl=[12];var hl=new Jk("continuationCommand");var il=new Jk("webCommandMetadata");var jl=new Jk("signalServiceEndpoint");var kl={Ef:"EMBEDDED_PLAYER_MODE_UNKNOWN",Bf:"EMBEDDED_PLAYER_MODE_DEFAULT",Df:"EMBEDDED_PLAYER_MODE_PFP",Cf:"EMBEDDED_PLAYER_MODE_PFL"};var ll=new Jk("feedbackEndpoint");var Cl={kg:"WEB_DISPLAY_MODE_UNKNOWN",gg:"WEB_DISPLAY_MODE_BROWSER",ig:"WEB_DISPLAY_MODE_MINIMAL_UI",jg:"WEB_DISPLAY_MODE_STANDALONE",hg:"WEB_DISPLAY_MODE_FULLSCREEN"};function Dl(a){I.call(this,a)}
v(Dl,I);Dl.prototype.getKey=function(){return se(this,1)};
Dl.prototype.getValue=function(){return se(this,2)};function El(a){I.call(this,a,-1,Fl)}
v(El,I);var Fl=[4,5];function Gl(a){I.call(this,a)}
v(Gl,I);function Hl(a){I.call(this,a)}
v(Hl,I);var Il=[2,3,4,5];function Jl(a){I.call(this,a)}
v(Jl,I);Jl.prototype.getMessage=function(){return se(this,1)};function Kl(a){I.call(this,a)}
v(Kl,I);function Ll(a){I.call(this,a)}
v(Ll,I);function Ml(a){I.call(this,a,-1,Nl)}
v(Ml,I);var Nl=[10,17];function Ol(a){I.call(this,a)}
v(Ol,I);function Pl(a){I.call(this,a)}
v(Pl,I);function Ql(a){I.call(this,a)}
v(Ql,I);function Rl(a){I.call(this,a)}
v(Rl,I);function Sl(a){I.call(this,a)}
v(Sl,I);function Tl(a){I.call(this,a,-1,Ul)}
v(Tl,I);Tl.prototype.getVideoData=function(){return ie(this,Sl,15)};
var Ul=[4];function Vl(a){I.call(this,a)}
v(Vl,I);function Wl(a,b){H(a,Ql,1,b)}
;function Xl(a){I.call(this,a)}
v(Xl,I);function Yl(a,b){return H(a,Ql,1,b)}
Xl.prototype.h=function(a){return G(this,2,a)};function Zl(a){I.call(this,a,-1,$l)}
v(Zl,I);Zl.prototype.h=function(a){return G(this,1,a)};
function am(a,b){return H(a,Ql,2,b)}
var $l=[3];function bm(a){I.call(this,a)}
v(bm,I);bm.prototype.h=function(a){return G(this,1,a)};function cm(a){I.call(this,a)}
v(cm,I);cm.prototype.h=function(a){return G(this,1,a)};function dm(a){I.call(this,a)}
v(dm,I);dm.prototype.h=function(a){return G(this,1,a)};function em(a){I.call(this,a)}
v(em,I);em.prototype.h=function(a){return G(this,1,a)};function fm(a){I.call(this,a)}
v(fm,I);function gm(a){I.call(this,a)}
v(gm,I);function hm(a){var b=new gm;return G(b,1,a)}
gm.prototype.getId=function(){return se(this,2)};
function im(a,b){return G(a,2,b)}
;function jm(a){I.call(this,a)}
v(jm,I);function km(a){I.call(this,a,-1,lm)}
v(km,I);km.prototype.getPlayerType=function(){return re(ae(this,7),0)};
km.prototype.setVideoId=function(a){return G(this,19,a)};
function mm(a,b){ne(a,68,gm,b)}
var lm=[83,68];function nm(a){I.call(this,a)}
v(nm,I);function om(a){I.call(this,a)}
v(om,I);function pm(a){I.call(this,a)}
v(pm,I);function qm(a){I.call(this,a,470)}
v(qm,I);
var rm=[2,3,5,6,7,11,13,20,21,22,23,24,28,32,37,45,59,72,73,74,76,78,79,80,85,91,97,100,102,105,111,117,119,126,127,136,146,148,151,156,157,158,159,163,164,168,176,177,178,179,184,188,189,190,191,193,194,195,196,197,198,199,200,201,202,203,204,205,206,208,209,215,219,222,225,226,227,229,232,233,234,240,241,244,247,248,249,251,254,255,256,257,258,259,260,261,266,270,272,278,288,291,293,300,304,308,309,310,311,313,314,319,320,321,323,324,327,328,330,331,332,334,337,338,340,344,348,350,351,352,353,354,
355,356,357,358,361,363,364,368,369,370,373,374,375,378,380,381,383,388,389,402,403,410,411,412,413,414,415,416,417,418,423,424,425,426,427,429,430,431,439,441,444,448,458,469];var sm={Yf:0,Ff:1,Lf:2,Mf:4,Sf:8,Nf:16,Of:32,Xf:64,Wf:128,Hf:256,Jf:512,Qf:1024,If:2048,Kf:4096,Gf:8192,Pf:16384,Tf:32768,Rf:65536,Uf:131072,Vf:262144};function tm(a){I.call(this,a)}
v(tm,I);function um(a){I.call(this,a)}
v(um,I);um.prototype.setVideoId=function(a){return ge(this,1,vm,a)};
um.prototype.getPlaylistId=function(){var a=2===he(this,vm)?2:-1;return ae(this,a)};
var vm=[1,2];function wm(a){I.call(this,a,-1,xm)}
v(wm,I);var xm=[3];var ym=new Jk("webPlayerShareEntityServiceEndpoint");var zm=new Jk("playlistEditEndpoint");var Am=new Jk("modifyChannelNotificationPreferenceEndpoint");var Bm=new Jk("unsubscribeEndpoint");var Cm=new Jk("subscribeEndpoint");function Dm(){var a=Em;B("yt.ads.biscotti.getId_")||A("yt.ads.biscotti.getId_",a)}
function Fm(a){A("yt.ads.biscotti.lastId_",a)}
;function Gm(a,b){1<b.length?a[b[0]]=b[1]:1===b.length&&Object.assign(a,b[0])}
;var Hm=y.window,Im,Jm,Km=(null==Hm?void 0:null==(Im=Hm.yt)?void 0:Im.config_)||(null==Hm?void 0:null==(Jm=Hm.ytcfg)?void 0:Jm.data_)||{};A("yt.config_",Km);function Lm(){Gm(Km,arguments)}
function O(a,b){return a in Km?Km[a]:b}
function Mm(){var a=Km.EXPERIMENT_FLAGS;return a?a.web_disable_gel_stp_ecatcher_killswitch:void 0}
;var Nm=[];function Om(a){Nm.forEach(function(b){return b(a)})}
function Pm(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Qm(b)}}:a}
function Qm(a){var b=B("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0,void 0,void 0):(b=O("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0,void 0,void 0]),Lm("ERRORS",b));Om(a)}
function Rm(a,b,c,d,e){var f=B("yt.logging.errors.log");f?f(a,"WARNING",b,c,d,void 0,e):(f=O("ERRORS",[]),f.push([a,"WARNING",b,c,d,void 0,e]),Lm("ERRORS",f))}
;var Sm=/^[\w.]*$/,Tm={q:!0,search_query:!0};function Um(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1==f.length&&f[0]||2==f.length)try{var g=Vm(f[0]||""),h=Vm(f[1]||"");g in c?Array.isArray(c[g])?mb(c[g],h):c[g]=[c[g],h]:c[g]=h}catch(q){var l=q,m=f[0],n=String(Um);l.args=[{key:m,value:f[1],query:a,method:Wm==n?"unchanged":n}];Tm.hasOwnProperty(m)||Rm(l)}}return c}
var Wm=String(Um);function Xm(a){var b=[];nb(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];gb(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function Ym(a){"?"==a.charAt(0)&&(a=a.substr(1));return Um(a,"&")}
function Zm(a){return-1!=a.indexOf("?")?(a=(a||"").split("#")[0],a=a.split("?",2),Ym(1<a.length?a[1]:a[0])):{}}
function $m(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=Ym(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return Ec(a,e)+d}
function an(a){if(!b)var b=window.location.href;var c=wc(1,a),d=xc(a);c&&d?(a=a.match(uc),b=b.match(uc),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?xc(b)==d&&(Number(wc(4,b))||null)==(Number(wc(4,a))||null):!0;return a}
function Vm(a){return a&&a.match(Sm)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function bn(a){var b=cn;a=void 0===a?B("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=zi;e.flash="0";a:{try{var f=b.h.top.location.href}catch(J){f=2;break a}f=f?f===b.i.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?fi:g;try{var h=g.history.length}catch(J){h=0}e.u_his=h;var l;e.u_h=null==(l=fi.screen)?void 0:l.height;var m;e.u_w=null==(m=fi.screen)?void 0:m.width;var n;e.u_ah=null==(n=fi.screen)?void 0:n.availHeight;var q;e.u_aw=null==
(q=fi.screen)?void 0:q.availWidth;var u;e.u_cd=null==(u=fi.screen)?void 0:u.colorDepth}catch(J){}h=b.h;try{var t=h.screenX;var z=h.screenY}catch(J){}try{var C=h.outerWidth;var E=h.outerHeight}catch(J){}try{var M=h.innerWidth;var S=h.innerHeight}catch(J){}try{var Q=h.screenLeft;var W=h.screenTop}catch(J){}try{M=h.innerWidth,S=h.innerHeight}catch(J){}try{var fa=h.screen.availWidth;var ma=h.screen.availTop}catch(J){}t=[Q,W,t,z,fa,ma,C,E,M,S];try{var Ra=(b.h.top||window).document,Ca="CSS1Compat"==Ra.compatMode?
Ra.documentElement:Ra.body;var ya=(new Cf(Ca.clientWidth,Ca.clientHeight)).round()}catch(J){ya=new Cf(-12245933,-12245933)}Ra=ya;ya={};var na=void 0===na?y:na;Ca=new Ii;na.SVGElement&&na.document.createElementNS&&Ca.set(0);z=wi();z["allow-top-navigation-by-user-activation"]&&Ca.set(1);z["allow-popups-to-escape-sandbox"]&&Ca.set(2);na.crypto&&na.crypto.subtle&&Ca.set(3);na.TextDecoder&&na.TextEncoder&&Ca.set(4);na=Ji(Ca);ya.bc=na;ya.bih=Ra.height;ya.biw=Ra.width;ya.brdim=t.join();b=b.i;b=(ya.vis=b.prerendering?
3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,ya.wgl=!!fi.WebGLRenderingContext,ya);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var cn=new function(){var a=window.document;this.h=window;this.i=a};
A("yt.ads_.signals_.getAdSignalsString",function(a){return Xm(bn(a))});Date.now();function P(a){a=dn(a);return"string"===typeof a&&"false"===a?!1:!!a}
function en(a,b){a=dn(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function fn(){return O("EXPERIMENTS_TOKEN","")}
function dn(a){var b=O("EXPERIMENTS_FORCED_FLAGS",{})||{};return void 0!==b[a]?b[a]:O("EXPERIMENT_FLAGS",{})[a]}
function gn(){for(var a=[],b=O("EXPERIMENTS_FORCED_FLAGS",{}),c=r(Object.keys(b)),d=c.next();!d.done;d=c.next())d=d.value,a.push({key:d,value:String(b[d])});c=O("EXPERIMENT_FLAGS",{});var e=r(Object.keys(c));for(d=e.next();!d.done;d=e.next())d=d.value,d.startsWith("force_")&&void 0===b[d]&&a.push({key:d,value:String(c[d])});return a}
;var hn="XMLHttpRequest"in y?function(){return new XMLHttpRequest}:null;
function jn(){if(!hn)return null;var a=hn();return"open"in a?a:null}
function kn(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function ln(a,b){"function"===typeof a&&(a=Pm(a));return window.setTimeout(a,b)}
;var mn={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM","X-Goog-AuthUser":"SESSION_INDEX","X-Goog-PageId":"DELEGATED_SESSION_ID"},nn="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(ja(Ai)),on=!1;
function pn(a,b){b=void 0===b?{}:b;var c=an(a),d=P("web_ajax_ignore_global_headers_if_set"),e;for(e in mn){var f=O(mn[e]);"X-Goog-Visitor-Id"!==e||f||(f=O("VISITOR_DATA"));!f||!c&&xc(a)||d&&void 0!==b[e]||!(P("move_vss_away_from_login_info_cookie")||"X-Goog-AuthUser"!==e&&"X-Goog-PageId"!==e)||(b[e]=f)}P("move_vss_away_from_login_info_cookie")&&c&&O("SESSION_INDEX")&&(b["X-Yt-Auth-Test"]="test");"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||!xc(a))b["X-YouTube-Utc-Offset"]=
String(-(new Date).getTimezoneOffset());if(c||!xc(a)){try{var g=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(h){}g&&(b["X-YouTube-Time-Zone"]=g)}document.location.hostname.endsWith("youtubeeducation.com")||!c&&xc(a)||(b["X-YouTube-Ad-Signals"]=Xm(bn()));return b}
function qn(a){var b=window.location.search,c=xc(a);P("debug_handle_relative_url_for_query_forward_killswitch")||!c&&an(a)&&(c=document.location.hostname);var d=vc(wc(5,a));d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=Ym(b),f={};gb(nn,function(g){e[g]&&(f[g]=e[g])});
return $m(a,f||{},!1)}
function rn(a,b){var c=b.format||"JSON";a=sn(a,b);var d=tn(a,b),e=!1,f=un(a,function(l){if(!e){e=!0;h&&window.clearTimeout(h);var m=kn(l),n=null,q=400<=l.status&&500>l.status,u=500<=l.status&&600>l.status;if(m||q||u)n=vn(a,c,l,b.convertToSafeHtml);if(m)a:if(l&&204==l.status)m=!0;else{switch(c){case "XML":m=0==parseInt(n&&n.return_code,10);break a;case "RAW":m=!0;break a}m=!!n}n=n||{};q=b.context||y;m?b.onSuccess&&b.onSuccess.call(q,l,n):b.onError&&b.onError.call(q,l,n);b.onFinish&&b.onFinish.call(q,
l,n)}},b.method,d,b.headers,b.responseType,b.withCredentials);
d=b.timeout||0;if(b.onTimeout&&0<d){var g=b.onTimeout;var h=ln(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||y,f))},d)}return f}
function sn(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=O("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=$m(a,b||{},!0);return a}
function tn(a,b){var c=O("XSRF_FIELD_NAME"),d=O("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams,g=O("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||xc(a)&&!b.withCredentials&&xc(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);(P("ajax_parse_query_data_only_when_filled")&&f&&0<Object.keys(f).length||f)&&"string"===typeof e&&(e=Ym(e),xb(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?
JSON.stringify(e):Cc(e));f=e||f&&!qb(f);!on&&f&&"POST"!=b.method&&(on=!0,Qm(Error("AJAX request with postData should use POST")));return e}
function vn(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,Rm(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?wn(a):null)e={},gb(a.getElementsByTagName("*"),function(g){e[g.tagName]=xn(g)})}d&&yn(e);
return e}
function yn(a){if(Sa(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=a[b],e=zb();d=e?e.createHTML(d):d;a[c]=new mc(d)}else yn(a[b])}}
function wn(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function xn(a){var b="";gb(a.childNodes,function(c){b+=c.nodeValue});
return b}
function zn(a,b){b.method="POST";b.postParams||(b.postParams={});return rn(a,b)}
function un(a,b,c,d,e,f,g){function h(){4==(l&&"readyState"in l?l.readyState:0)&&b&&Pm(b)(l)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var l=jn();if(!l)return null;"onloadend"in l?l.addEventListener("loadend",h,!1):l.onreadystatechange=h;P("debug_forward_web_query_parameters")&&(a=qn(a));l.open(c,a,!0);f&&(l.responseType=f);g&&(l.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=pn(a,e))for(var m in e)l.setRequestHeader(m,e[m]),"content-type"==m.toLowerCase()&&(c=!1);c&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");l.send(d);
return l}
;var An=ld||md;function Bn(a){var b=Wb();return b?0<=b.toLowerCase().indexOf(a):!1}
;var Cn=[{Ic:function(a){return"Cannot read property '"+a.key+"'"},
lc:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{Ic:function(a){return"Cannot call '"+a.key+"'"},
lc:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{Ic:function(a){return a.key+" is not defined"},
lc:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var En={Ta:[],Pa:[{callback:Dn,weight:500}]};function Dn(a){if("JavaException"===a.name)return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function Fn(){this.Pa=[];this.Ta=[]}
var Gn;function Hn(){if(!Gn){var a=Gn=new Fn;a.Ta.length=0;a.Pa.length=0;En.Ta&&a.Ta.push.apply(a.Ta,En.Ta);En.Pa&&a.Pa.push.apply(a.Pa,En.Pa)}return Gn}
;var In=new dj;function Jn(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=Kn(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=Kn(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=Kn(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function Kn(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function Ln(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=Mn(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=a[e];var g=b;var h=c;g="string"!==typeof f||"clickTrackingParams"!==e&&"trackingParams"!==e?0:(f=Jn(atob(f.replace(/-/g,"+").replace(/_/g,"/"))))?Mn(e+".ve",f,g,h):0;d+=g;d+=Mn(e,a[e],b,c);if(500<d)break}}else c[b]=Nn(a),d+=c[b].length;else c[b]=Nn(a),d+=c[b].length;return d}
function Mn(a,b,c,d){c+="."+a;a=Nn(b);d[c]=a;return c.length+a.length}
function Nn(a){try{return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;function On(){this.df=!0}
function Pn(){On.h||(On.h=new On);return On.h}
function Qn(a,b){a={};var c=Tg([]);c&&(a.Authorization=c,c=b=null==b?void 0:b.sessionIndex,void 0===c&&(c=Number(O("SESSION_INDEX",0)),c=isNaN(c)?0:c),P("voice_search_auth_header_removal")||(a["X-Goog-AuthUser"]=c.toString()),"INNERTUBE_HOST_OVERRIDE"in Km||(a["X-Origin"]=window.location.origin),void 0===b&&"DELEGATED_SESSION_ID"in Km&&(a["X-Goog-PageId"]=O("DELEGATED_SESSION_ID")));return a}
;var Rn={identityType:"UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"};function Sn(a){var b=this;this.i=void 0;this.h=!1;a.addEventListener("beforeinstallprompt",function(c){c.preventDefault();b.i=c});
a.addEventListener("appinstalled",function(){b.h=!0},{once:!0})}
function Tn(){if(!y.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return y.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":y.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":y.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":y.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;function Un(a,b,c,d,e){Pg.set(""+a,b,{kc:c,path:"/",domain:void 0===d?"youtube.com":d,secure:void 0===e?!1:e})}
function Vn(a,b,c){Pg.remove(""+a,void 0===b?"/":b,void 0===c?"youtube.com":c)}
function Wn(){if(!Pg.isEnabled())return!1;if(Pg.h.cookie)return!0;Pg.set("TESTCOOKIESENABLED","1",{kc:60});if("1"!==Pg.get("TESTCOOKIESENABLED"))return!1;Pg.remove("TESTCOOKIESENABLED");return!0}
;var Xn=B("ytglobal.prefsUserPrefsPrefs_")||{};A("ytglobal.prefsUserPrefsPrefs_",Xn);function Yn(){this.h=O("ALT_PREF_COOKIE_NAME","PREF");this.i=O("ALT_PREF_COOKIE_DOMAIN","youtube.com");var a=Pg.get(""+this.h,void 0);a&&this.parse(a)}
var Zn;function $n(){Zn||(Zn=new Yn);return Zn}
k=Yn.prototype;k.get=function(a,b){ao(a);bo(a);a=void 0!==Xn[a]?Xn[a].toString():null;return null!=a?a:b?b:""};
k.set=function(a,b){ao(a);bo(a);if(null==b)throw Error("ExpectedNotNull");Xn[a]=b.toString()};
function co(a){return!!((eo("f"+(Math.floor(a/31)+1))||0)&1<<a%31)}
k.remove=function(a){ao(a);bo(a);delete Xn[a]};
k.clear=function(){for(var a in Xn)delete Xn[a]};
function bo(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function ao(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function eo(a){a=void 0!==Xn[a]?Xn[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
k.parse=function(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(Xn[d]=c.toString())}};var fo={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},go={CONN_DEFAULT:0,CONN_UNKNOWN:1,CONN_NONE:2,CONN_WIFI:3,CONN_CELLULAR_2G:4,CONN_CELLULAR_3G:5,CONN_CELLULAR_4G:6,CONN_CELLULAR_UNKNOWN:7,CONN_DISCO:8,CONN_CELLULAR_5G:9,CONN_WIFI_METERED:10,CONN_CELLULAR_5G_SA:11,
CONN_CELLULAR_5G_NSA:12,CONN_INVALID:31},ho={EFFECTIVE_CONNECTION_TYPE_UNKNOWN:0,EFFECTIVE_CONNECTION_TYPE_OFFLINE:1,EFFECTIVE_CONNECTION_TYPE_SLOW_2G:2,EFFECTIVE_CONNECTION_TYPE_2G:3,EFFECTIVE_CONNECTION_TYPE_3G:4,EFFECTIVE_CONNECTION_TYPE_4G:5},io={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};function jo(){var a=y.navigator;return a?a.connection:void 0}
function ko(){var a=jo();if(a){var b=fo[a.type||"unknown"]||"CONN_UNKNOWN";a=fo[a.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===b&&"CONN_UNKNOWN"!==a&&(b=a);if("CONN_UNKNOWN"!==b)return b;if("CONN_UNKNOWN"!==a)return a}}
function lo(){var a=jo();if(null!=a&&a.effectiveType)return io.hasOwnProperty(a.effectiveType)?io[a.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN"}
;function R(a){var b=La.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(ja(b))}
v(R,Error);function mo(){try{return no(),!0}catch(a){return!1}}
function no(a){if(void 0!==O("DATASYNC_ID"))return O("DATASYNC_ID");throw new R("Datasync ID not set",void 0===a?"unknown":a);}
;function oo(){}
function po(a,b){return qo(a,0,b)}
oo.prototype.ea=function(a,b){return qo(a,1,b)};
function ro(a){var b=B("yt.scheduler.instance.addImmediateJob");b?b(a):a()}
;function so(){oo.apply(this,arguments)}
v(so,oo);function to(){so.h||(so.h=new so);return so.h}
function qo(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=B("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):ln(a,c||0)}
so.prototype.Ca=function(a){if(void 0===a||!Number.isNaN(Number(a))){var b=B("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}};
so.prototype.start=function(){var a=B("yt.scheduler.instance.start");a&&a()};
so.prototype.pause=function(){var a=B("yt.scheduler.instance.pause");a&&a()};
var Hi=to();function uo(a){var b=new oj;(b=b.isAvailable()?a?new uj(b,a):b:null)||(a=new pj(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.h=(a=b)?new kj(a):null;this.i=document.domain||window.location.hostname}
uo.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.h)try{this.h.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(Xg(b))}catch(f){return}else e=escape(b);Un(a,e,c,this.i)};
uo.prototype.get=function(a,b){var c=void 0,d=!this.h;if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=Pg.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
uo.prototype.remove=function(a){this.h&&this.h.remove(a);Vn(a,"/",this.i)};var vo=function(){var a;return function(){a||(a=new uo("ytidb"));return a}}();
function wo(){var a;return null==(a=vo())?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var xo=[],yo,zo=!1;function Ao(){var a={};for(yo=new Bo(void 0===a.handleError?Co:a.handleError,void 0===a.logEvent?Do:a.logEvent);0<xo.length;)switch(a=xo.shift(),a.type){case "ERROR":yo.handleError(a.payload);break;case "EVENT":yo.logEvent(a.eventType,a.payload)}}
function Eo(a){zo||(yo?yo.handleError(a):(xo.push({type:"ERROR",payload:a}),10<xo.length&&xo.shift()))}
function Fo(a,b){zo||(yo?yo.logEvent(a,b):(xo.push({type:"EVENT",eventType:a,payload:b}),10<xo.length&&xo.shift()))}
;function Go(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function Ho(a){return a.substr(0,a.indexOf(":"))||a}
;var Io={},Jo=(Io.AUTH_INVALID="No user identifier specified.",Io.EXPLICIT_ABORT="Transaction was explicitly aborted.",Io.IDB_NOT_SUPPORTED="IndexedDB is not supported.",Io.MISSING_INDEX="Index not created.",Io.MISSING_OBJECT_STORES="Object stores not created.",Io.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",Io.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",Io.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
Io.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",Io.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",Io.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",Io.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",Io),Ko={},Lo=(Ko.AUTH_INVALID="ERROR",Ko.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",Ko.EXPLICIT_ABORT="IGNORED",Ko.IDB_NOT_SUPPORTED="ERROR",Ko.MISSING_INDEX=
"WARNING",Ko.MISSING_OBJECT_STORES="ERROR",Ko.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",Ko.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",Ko.QUOTA_EXCEEDED="WARNING",Ko.QUOTA_MAYBE_EXCEEDED="WARNING",Ko.UNKNOWN_ABORT="WARNING",Ko.INCOMPATIBLE_DB_VERSION="WARNING",Ko),Mo={},No=(Mo.AUTH_INVALID=!1,Mo.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,Mo.EXPLICIT_ABORT=!1,Mo.IDB_NOT_SUPPORTED=!1,Mo.MISSING_INDEX=!1,Mo.MISSING_OBJECT_STORES=!1,Mo.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,Mo.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,Mo.QUOTA_EXCEEDED=!1,Mo.QUOTA_MAYBE_EXCEEDED=!0,Mo.UNKNOWN_ABORT=!0,Mo.INCOMPATIBLE_DB_VERSION=!1,Mo);function Oo(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?Jo[a]:c;d=void 0===d?Lo[a]:d;e=void 0===e?No[a]:e;R.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,Oo.prototype)}
v(Oo,R);function Po(a,b){Oo.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},Jo.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,Po.prototype)}
v(Po,Oo);function Qo(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,Qo.prototype)}
v(Qo,Error);var Ro=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function So(a,b,c,d){b=Ho(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof Oo)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if("QuotaExceededError"===e.name)return new Oo("QUOTA_EXCEEDED",a);if(nd&&"UnknownError"===e.name)return new Oo("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof Qo)return new Oo("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if("InvalidStateError"===e.name&&Ro.some(function(f){return e.message.includes(f)}))return new Oo("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if("AbortError"===e.name)return new Oo("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",zd:e.name})];e.level="WARNING";return e}
function To(a,b,c){var d=wo();return new Oo("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:null==d?void 0:d.hasSucceededOnce}})}
;function Uo(a){if(!a)throw Error();throw a;}
function Vo(a){return a}
function Wo(a){this.h=a}
function Xo(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=r(d.i);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=r(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.h=[];this.i=[];a=a.h;try{a(c,b)}catch(e){b(e)}}
Xo.all=function(a){return new Xo(new Wo(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={lb:0};f.lb<a.length;f={lb:f.lb},++f.lb)Xo.resolve(a[f.lb]).then(function(g){return function(h){d[g.lb]=h;e--;0===e&&b(d)}}(f)).catch(function(g){c(g)})}))};
Xo.resolve=function(a){return new Xo(new Wo(function(b,c){a instanceof Xo?a.then(b,c):b(a)}))};
Xo.reject=function(a){return new Xo(new Wo(function(b,c){c(a)}))};
Xo.prototype.then=function(a,b){var c=this,d=null!=a?a:Vo,e=null!=b?b:Uo;return new Xo(new Wo(function(f,g){"PENDING"===c.state.status?(c.h.push(function(){Yo(c,c,d,f,g)}),c.i.push(function(){Zo(c,c,e,f,g)})):"FULFILLED"===c.state.status?Yo(c,c,d,f,g):"REJECTED"===c.state.status&&Zo(c,c,e,f,g)}))};
Xo.prototype.catch=function(a){return this.then(void 0,a)};
function Yo(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof Xo?$o(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Zo(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof Xo?$o(a,b,f,d,e):d(f)}catch(g){e(g)}}
function $o(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof Xo?$o(a,b,f,d,e):d(f)},function(f){e(f)})}
;function ap(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function bp(a){return new Promise(function(b,c){ap(a,b,c)})}
function cp(a){return new Xo(new Wo(function(b,c){ap(a,b,c)}))}
;function dp(a,b){return new Xo(new Wo(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;var ep=window,T=ep.ytcsi&&ep.ytcsi.now?ep.ytcsi.now:ep.performance&&ep.performance.timing&&ep.performance.now&&ep.performance.timing.navigationStart?function(){return ep.performance.timing.navigationStart+ep.performance.now()}:function(){return(new Date).getTime()};function fp(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(T());this.i=!1}
k=fp.prototype;k.add=function(a,b,c){return gp(this,[a],{mode:"readwrite",ca:!0},function(d){return d.objectStore(a).add(b,c)})};
k.clear=function(a){return gp(this,[a],{mode:"readwrite",ca:!0},function(b){return b.objectStore(a).clear()})};
k.close=function(){this.h.close();var a;(null==(a=this.options)?0:a.closed)&&this.options.closed()};
k.count=function(a,b){return gp(this,[a],{mode:"readonly",ca:!0},function(c){return c.objectStore(a).count(b)})};
function hp(a,b,c){a=a.h.createObjectStore(b,c);return new ip(a)}
k.delete=function(a,b){return gp(this,[a],{mode:"readwrite",ca:!0},function(c){return c.objectStore(a).delete(b)})};
k.get=function(a,b){return gp(this,[a],{mode:"readonly",ca:!0},function(c){return c.objectStore(a).get(b)})};
function jp(a,b,c){return gp(a,[b],{mode:"readwrite",ca:!0},function(d){d=d.objectStore(b);return cp(d.h.put(c,void 0))})}
k.objectStoreNames=function(){return Array.from(this.h.objectStoreNames)};
function gp(a,b,c,d){var e,f,g,h,l,m,n,q,u,t,z,C;return x(function(E){switch(E.h){case 1:var M={mode:"readonly",ca:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};"string"===typeof c?M.mode=c:Object.assign(M,c);e=M;a.transactionCount++;f=e.ca?3:1;g=0;case 2:if(h){E.A(3);break}g++;l=Math.round(T());za(E,4);m=a.h.transaction(b,e.mode);M=new kp(m);M=lp(M,d);return w(E,M,6);case 6:return n=E.i,q=Math.round(T()),mp(a,l,q,g,void 0,b.join(),e),E.return(n);case 4:u=Ba(E);t=Math.round(T());z=So(u,a.h.name,b.join(),
a.h.version);if((C=z instanceof Oo&&!z.h)||g>=f)mp(a,l,t,g,z,b.join(),e),h=z;E.A(2);break;case 3:return E.return(Promise.reject(h))}})}
function mp(a,b,c,d,e,f,g){b=c-b;e?(e instanceof Oo&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&Fo("QUOTA_EXCEEDED",{dbName:Ho(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof Oo&&"UNKNOWN_ABORT"===e.type&&(c-=a.j,0>c&&c>=Math.pow(2,31)&&(c=0),Fo("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.i=!0),np(a,!1,d,f,b,g.tag),Eo(e)):np(a,!0,d,f,b,g.tag)}
function np(a,b,c,d,e,f){Fo("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c,tag:void 0===f?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
k.getName=function(){return this.h.name};
function ip(a){this.h=a}
k=ip.prototype;k.add=function(a,b){return cp(this.h.add(a,b))};
k.autoIncrement=function(){return this.h.autoIncrement};
k.clear=function(){return cp(this.h.clear()).then(function(){})};
function op(a,b,c){a.h.createIndex(b,c,{unique:!1})}
k.count=function(a){return cp(this.h.count(a))};
function pp(a,b){return qp(a,{query:b},function(c){return c.delete().then(function(){return c.continue()})}).then(function(){})}
k.delete=function(a){return a instanceof IDBKeyRange?pp(this,a):cp(this.h.delete(a))};
k.get=function(a){return cp(this.h.get(a))};
k.index=function(a){try{return new rp(this.h.index(a))}catch(b){if(b instanceof Error&&"NotFoundError"===b.name)throw new Qo(a,this.h.name);throw b;}};
k.getName=function(){return this.h.name};
k.keyPath=function(){return this.h.keyPath};
function qp(a,b,c){a=a.h.openCursor(b.query,b.direction);return sp(a).then(function(d){return dp(d,c)})}
function kp(a){var b=this;this.h=a;this.j=new Map;this.i=!1;this.done=new Promise(function(c,d){b.h.addEventListener("complete",function(){c()});
b.h.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.h.error)});
b.h.addEventListener("abort",function(){var e=b.h.error;if(e)d(e);else if(!b.i){e=Oo;for(var f=b.h.objectStoreNames,g=[],h=0;h<f.length;h++){var l=f.item(h);if(null===l)throw Error("Invariant: item in DOMStringList is null");g.push(l)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.h.db.name,mode:b.h.mode});d(e)}})})}
function lp(a,b){var c=new Promise(function(d,e){try{b(a).then(function(f){d(f)}).catch(e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return r(d).next().value})}
kp.prototype.abort=function(){this.h.abort();this.i=!0;throw new Oo("EXPLICIT_ABORT");};
kp.prototype.objectStore=function(a){a=this.h.objectStore(a);var b=this.j.get(a);b||(b=new ip(a),this.j.set(a,b));return b};
function rp(a){this.h=a}
k=rp.prototype;k.count=function(a){return cp(this.h.count(a))};
k.delete=function(a){return tp(this,{query:a},function(b){return b.delete().then(function(){return b.continue()})})};
k.get=function(a){return cp(this.h.get(a))};
k.getKey=function(a){return cp(this.h.getKey(a))};
k.keyPath=function(){return this.h.keyPath};
k.unique=function(){return this.h.unique};
function tp(a,b,c){a=a.h.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return sp(a).then(function(d){return dp(d,c)})}
function up(a,b){this.request=a;this.cursor=b}
function sp(a){return cp(a).then(function(b){return b?new up(a,b):null})}
k=up.prototype;k.advance=function(a){this.cursor.advance(a);return sp(this.request)};
k.continue=function(a){this.cursor.continue(a);return sp(this.request)};
k.delete=function(){return cp(this.cursor.delete()).then(function(){})};
k.getKey=function(){return this.cursor.key};
k.getValue=function(){return this.cursor.value};
k.update=function(a){return cp(this.cursor.update(a))};function vp(a,b,c){return new Promise(function(d,e){function f(){u||(u=new fp(g.result,{closed:q}));return u}
var g=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.ae,l=c.blocking,m=c.ef,n=c.upgrade,q=c.closed,u;g.addEventListener("upgradeneeded",function(t){try{if(null===t.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===g.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");t.dataLoss&&"none"!==t.dataLoss&&Fo("IDB_DATA_CORRUPTED",{reason:t.dataLossMessage||"unknown reason",dbName:Ho(a)});var z=f(),C=new kp(g.transaction);
n&&n(z,function(E){return t.oldVersion<E&&t.newVersion>=E},C);
C.done.catch(function(E){e(E)})}catch(E){e(E)}});
g.addEventListener("success",function(){var t=g.result;l&&t.addEventListener("versionchange",function(){l(f())});
t.addEventListener("close",function(){Fo("IDB_UNEXPECTEDLY_CLOSED",{dbName:Ho(a),dbVersion:t.version});m&&m()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function wp(a,b,c){c=void 0===c?{}:c;return vp(a,b,c)}
function xp(a,b){b=void 0===b?{}:b;var c,d,e,f;return x(function(g){if(1==g.h)return za(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.ae)&&c.addEventListener("blocked",function(){e()}),w(g,bp(c),4);
if(2!=g.h)return Aa(g,0);f=Ba(g);throw So(f,a,"",-1);})}
;function yp(a,b){this.name=a;this.options=b;this.j=!0;this.m=this.l=0}
yp.prototype.i=function(a,b,c){c=void 0===c?{}:c;return wp(a,b,c)};
yp.prototype.delete=function(a){a=void 0===a?{}:a;return xp(this.name,a)};
function zp(a,b){return new Oo("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function Ap(a,b){if(!b)throw To("openWithToken",Ho(a.name));return Bp(a)}
function Bp(a){function b(){var f,g,h,l,m,n,q,u,t,z;return x(function(C){switch(C.h){case 1:return g=null!=(f=Error().stack)?f:"",za(C,2),w(C,a.i(a.name,a.options.version,d),4);case 4:h=C.i;for(var E=a.options,M=[],S=r(Object.keys(E.zb)),Q=S.next();!Q.done;Q=S.next()){Q=Q.value;var W=E.zb[Q],fa=void 0===W.Me?Number.MAX_VALUE:W.Me;!(h.h.version>=W.Gb)||h.h.version>=fa||h.h.objectStoreNames.contains(Q)||M.push(Q)}l=M;if(0===l.length){C.A(5);break}m=Object.keys(a.options.zb);n=h.objectStoreNames();if(a.m<
en("ytidb_reopen_db_retries",0))return a.m++,h.close(),Eo(new Oo("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:m,foundObjectStores:n})),C.return(b());if(!(a.l<en("ytidb_remake_db_retries",1))){C.A(6);break}a.l++;return w(C,a.delete(),7);case 7:return Eo(new Oo("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:m,foundObjectStores:n})),C.return(b());case 6:throw new Po(n,m);case 5:return C.return(h);case 2:q=Ba(C);if(q instanceof DOMException?"VersionError"!==
q.name:"DOMError"in self&&q instanceof DOMError?"VersionError"!==q.name:!(q instanceof Object&&"message"in q)||"An attempt was made to open a database using a lower version than the existing version."!==q.message){C.A(8);break}return w(C,a.i(a.name,void 0,Object.assign({},d,{upgrade:void 0})),9);case 9:u=C.i;t=u.h.version;if(void 0!==a.options.version&&t>a.options.version+1)throw u.close(),a.j=!1,zp(a,t);return C.return(u);case 8:throw c(),q instanceof Error&&!P("ytidb_async_stack_killswitch")&&(q.stack=
q.stack+"\n"+g.substring(g.indexOf("\n")+1)),So(q,a.name,"",null!=(z=a.options.version)?z:-1);}})}
function c(){a.h===e&&(a.h=void 0)}
if(!a.j)throw zp(a);if(a.h)return a.h;var d={blocking:function(f){f.close()},
closed:c,ef:c,upgrade:a.options.upgrade};var e=b();a.h=e;return a.h}
;var Cp=new yp("YtIdbMeta",{zb:{databases:{Gb:1}},upgrade:function(a,b){b(1)&&hp(a,"databases",{keyPath:"actualName"})}});
function Dp(a,b){var c;return x(function(d){if(1==d.h)return w(d,Ap(Cp,b),2);c=d.i;return d.return(gp(c,["databases"],{ca:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return cp(f.h.put(a,void 0)).then(function(){})})}))})}
function Ep(a,b){var c;return x(function(d){if(1==d.h)return a?w(d,Ap(Cp,b),2):d.return();c=d.i;return d.return(c.delete("databases",a))})}
function Fp(a,b){var c,d;return x(function(e){return 1==e.h?(c=[],w(e,Ap(Cp,b),2)):3!=e.h?(d=e.i,w(e,gp(d,["databases"],{ca:!0,mode:"readonly"},function(f){c.length=0;return qp(f.objectStore("databases"),{},function(g){a(g.getValue())&&c.push(g.getValue());return g.continue()})}),3)):e.return(c)})}
function Gp(a){return Fp(function(b){return"LogsDatabaseV2"===b.publicName&&void 0!==b.userIdentifier},a)}
function Hp(a,b,c){return Fp(function(d){return c?void 0!==d.userIdentifier&&!a.includes(d.userIdentifier)&&c.includes(d.publicName):void 0!==d.userIdentifier&&!a.includes(d.userIdentifier)},b)}
function Ip(a){var b,c;return x(function(d){if(1==d.h)return b=no("YtIdbMeta hasAnyMeta other"),w(d,Fp(function(e){return void 0!==e.userIdentifier&&e.userIdentifier!==b},a),2);
c=d.i;return d.return(0<c.length)})}
;var Jp,Kp=new function(){}(new function(){});
function Lp(){var a,b,c,d;return x(function(e){switch(e.h){case 1:a=wo();if(null==(b=a)?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=An)f=/WebKit\/([0-9]+)/.exec(Wb()),f=!!(f&&600<=parseInt(f[1],10));f&&(f=/WebKit\/([0-9]+)/.exec(Wb()),f=!(f&&602<=parseInt(f[1],10)));if(f||Zc)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
za(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return w(e,Dp(d,Kp),4);case 4:return w(e,Ep("yt-idb-test-do-not-use",Kp),5);case 5:return e.return(!0);case 2:return Ba(e),e.return(!1)}})}
function Mp(){if(void 0!==Jp)return Jp;zo=!0;return Jp=Lp().then(function(a){zo=!1;var b;if(null!=(b=vo())&&b.h){var c;b={hasSucceededOnce:(null==(c=wo())?void 0:c.hasSucceededOnce)||a};var d;null==(d=vo())||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function Np(){return B("ytglobal.idbToken_")||void 0}
function Op(){var a=Np();return a?Promise.resolve(a):Mp().then(function(b){(b=b?Kp:void 0)&&A("ytglobal.idbToken_",b);return b})}
;var Pp=0;function Qp(a,b){Pp||(Pp=Hi.ea(function(){var c,d,e,f,g;return x(function(h){switch(h.h){case 1:return w(h,Op(),2);case 2:c=h.i;if(!c)return h.return();d=!0;za(h,3);return w(h,Hp(a,c,b),5);case 5:e=h.i;if(!e.length){d=!1;h.A(6);break}f=e[0];return w(h,xp(f.actualName),7);case 7:return w(h,Ep(f.actualName,c),6);case 6:Aa(h,4);break;case 3:g=Ba(h),Eo(g),d=!1;case 4:Hi.Ca(Pp),Pp=0,d&&Qp(a,b),h.h=0}})}))}
function Rp(){var a;return x(function(b){return 1==b.h?w(b,Op(),2):(a=b.i)?b.return(Ip(a)):b.return(!1)})}
new di;function Sp(a){if(!mo())throw a=new Oo("AUTH_INVALID",{dbName:a}),Eo(a),a;var b=no();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function Tp(a,b,c,d){var e,f,g,h,l,m;return x(function(n){switch(n.h){case 1:return f=null!=(e=Error().stack)?e:"",w(n,Op(),2);case 2:g=n.i;if(!g)throw h=To("openDbImpl",a,b),P("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),Eo(h),h;Go(a);l=c?{actualName:a,publicName:a,userIdentifier:void 0}:Sp(a);za(n,3);return w(n,Dp(l,g),5);case 5:return w(n,wp(l.actualName,b,d),6);case 6:return n.return(n.i);case 3:return m=Ba(n),za(n,7),w(n,Ep(l.actualName,g),9);case 9:Aa(n,
8);break;case 7:Ba(n);case 8:throw m;}})}
function Up(a,b,c){c=void 0===c?{}:c;return Tp(a,b,!1,c)}
function Vp(a,b,c){c=void 0===c?{}:c;return Tp(a,b,!0,c)}
function Wp(a,b){b=void 0===b?{}:b;var c,d;return x(function(e){if(1==e.h)return w(e,Op(),2);if(3!=e.h){c=e.i;if(!c)return e.return();Go(a);d=Sp(a);return w(e,xp(d.actualName,b),3)}return w(e,Ep(d.actualName,c),0)})}
function Xp(a,b,c){a=a.map(function(d){return x(function(e){return 1==e.h?w(e,xp(d.actualName,b),2):w(e,Ep(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function Yp(){var a=void 0===a?{}:a;var b,c;return x(function(d){if(1==d.h)return w(d,Op(),2);if(3!=d.h){b=d.i;if(!b)return d.return();Go("LogsDatabaseV2");return w(d,Gp(b),3)}c=d.i;return w(d,Xp(c,a,b),0)})}
function Zp(a,b){b=void 0===b?{}:b;var c;return x(function(d){if(1==d.h)return w(d,Op(),2);if(3!=d.h){c=d.i;if(!c)return d.return();Go(a);return w(d,xp(a,b),3)}return w(d,Ep(a,c),0)})}
;function $p(a,b){yp.call(this,a,b);this.options=b;Go(a)}
v($p,yp);function aq(a,b){var c;return function(){c||(c=new $p(a,b));return c}}
$p.prototype.i=function(a,b,c){c=void 0===c?{}:c;return(this.options.qc?Vp:Up)(a,b,Object.assign({},c))};
$p.prototype.delete=function(a){a=void 0===a?{}:a;return(this.options.qc?Zp:Wp)(this.name,a)};
function bq(a,b){return aq(a,b)}
;var cq={},dq=bq("ytGcfConfig",{zb:(cq.coldConfigStore={Gb:1},cq.hotConfigStore={Gb:1},cq),qc:!1,upgrade:function(a,b){b(1)&&(op(hp(a,"hotConfigStore",{keyPath:"key",autoIncrement:!0}),"hotTimestampIndex","timestamp"),op(hp(a,"coldConfigStore",{keyPath:"key",autoIncrement:!0}),"coldTimestampIndex","timestamp"))},
version:1});function eq(a){return Ap(dq(),a)}
function fq(a,b,c){var d,e,f;return x(function(g){switch(g.h){case 1:return d={config:a,hashData:b,timestamp:T()},w(g,eq(c),2);case 2:return e=g.i,w(g,e.clear("hotConfigStore"),3);case 3:return w(g,jp(e,"hotConfigStore",d),4);case 4:return f=g.i,g.return(f)}})}
function gq(a,b,c,d){var e,f,g;return x(function(h){switch(h.h){case 1:return e={config:a,hashData:b,configData:c,timestamp:T()},w(h,eq(d),2);case 2:return f=h.i,w(h,f.clear("coldConfigStore"),3);case 3:return w(h,jp(f,"coldConfigStore",e),4);case 4:return g=h.i,h.return(g)}})}
function hq(a){var b,c;return x(function(d){return 1==d.h?w(d,eq(a),2):3!=d.h?(b=d.i,c=void 0,w(d,gp(b,["coldConfigStore"],{mode:"readwrite",ca:!0},function(e){return tp(e.objectStore("coldConfigStore").index("coldTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
function iq(a){var b,c;return x(function(d){return 1==d.h?w(d,eq(a),2):3!=d.h?(b=d.i,c=void 0,w(d,gp(b,["hotConfigStore"],{mode:"readwrite",ca:!0},function(e){return tp(e.objectStore("hotConfigStore").index("hotTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
;function jq(){this.h=0}
function kq(a,b,c){var d,e,f;return x(function(g){if(1==g.h){if(!P("update_log_event_config"))return g.A(0);c&&(a.i=c,A("yt.gcf.config.hotConfigGroup",a.i));a.hotHashData=b;A("yt.gcf.config.hotHashData",a.hotHashData);return(d=Np())?c?g.A(4):w(g,iq(d),5):g.A(0)}4!=g.h&&(e=g.i,c=null==(f=e)?void 0:f.config);return w(g,fq(c,b,d),0)})}
function lq(a,b,c){var d,e,f,g;return x(function(h){if(1==h.h){if(!P("update_log_event_config"))return h.A(0);a.coldHashData=b;A("yt.gcf.config.coldHashData",a.coldHashData);return(d=Np())?c?h.A(4):w(h,hq(d),5):h.A(0)}4!=h.h&&(e=h.i,c=null==(f=e)?void 0:f.config);if(!c)return h.A(0);g=c.configData;return w(h,gq(c,b,g,d),0)})}
;function mq(){return"INNERTUBE_API_KEY"in Km&&"INNERTUBE_API_VERSION"in Km}
function nq(){return{innertubeApiKey:O("INNERTUBE_API_KEY"),innertubeApiVersion:O("INNERTUBE_API_VERSION"),Dc:O("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),qd:O("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),ue:O("INNERTUBE_CONTEXT_CLIENT_NAME",1),innertubeContextClientVersion:O("INNERTUBE_CONTEXT_CLIENT_VERSION"),sd:O("INNERTUBE_CONTEXT_HL"),rd:O("INNERTUBE_CONTEXT_GL"),we:O("INNERTUBE_HOST_OVERRIDE")||"",ye:!!O("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),xe:!!O("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:O("SERIALIZED_CLIENT_CONFIG_DATA")}}
function oq(a){var b={client:{hl:a.sd,gl:a.rd,clientName:a.qd,clientVersion:a.innertubeContextClientVersion,configInfo:a.Dc}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=y.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=fn();""!==c&&(b.client.experimentsToken=c);c=gn();0<c.length&&(b.request={internalExperimentFlags:c});pq(a,void 0,b);qq(void 0,b);rq(void 0,b);sq(a,void 0,b);tq(void 0,b);P("start_sending_config_hash")&&uq(void 0,b);O("DELEGATED_SESSION_ID")&&
!P("pageid_as_header_web")&&(b.user={onBehalfOfUser:O("DELEGATED_SESSION_ID")});a=Object;c=a.assign;for(var d=b.client,e={},f=r(Object.entries(Ym(O("DEVICE","")))),g=f.next();!g.done;g=f.next()){var h=r(g.value);g=h.next().value;h=h.next().value;"cbrand"===g?e.deviceMake=h:"cmodel"===g?e.deviceModel=h:"cbr"===g?e.browserName=h:"cbrver"===g?e.browserVersion=h:"cos"===g?e.osName=h:"cosver"===g?e.osVersion=h:"cplatform"===g&&(e.platform=h)}b.client=c.call(a,d,e);return b}
function vq(a){var b=new fl,c=new Vk;G(c,1,a.sd);G(c,2,a.rd);G(c,16,a.ue);G(c,17,a.innertubeContextClientVersion);if(a.Dc){var d=a.Dc,e=new Rk;d.coldConfigData&&G(e,1,d.coldConfigData);d.appInstallData&&G(e,6,d.appInstallData);d.coldHashData&&G(e,3,d.coldHashData);d.hotHashData&&G(e,5,d.hotHashData);H(c,Rk,62,e)}(d=y.devicePixelRatio)&&1!=d&&G(c,65,Wd(d));d=fn();""!==d&&G(c,54,d);d=gn();if(0<d.length){e=new Zk;for(var f=0;f<d.length;f++){var g=new Xk;G(g,1,d[f].key);ge(g,2,Yk,d[f].value);ne(e,15,
Xk,g)}H(b,Zk,5,e)}pq(a,c);qq(b);rq(c);sq(a,c);tq(c);P("start_sending_config_hash")&&uq(c);O("DELEGATED_SESSION_ID")&&!P("pageid_as_header_web")&&(a=new dl,G(a,3,O("DELEGATED_SESSION_ID")));a=r(Object.entries(Ym(O("DEVICE",""))));for(d=a.next();!d.done;d=a.next())e=r(d.value),d=e.next().value,e=e.next().value,"cbrand"===d?G(c,12,e):"cmodel"===d?G(c,13,e):"cbr"===d?G(c,87,e):"cbrver"===d?G(c,88,e):"cos"===d?G(c,18,e):"cosver"===d?G(c,19,e):"cplatform"===d&&G(c,42,e);b.l(c);return b}
function pq(a,b,c){a=a.qd;if("WEB"===a||"MWEB"===a||1===a||2===a)if(b){c=ie(b,Sk,96)||new Sk;var d=Tn();d=Object.keys(Cl).indexOf(d);d=-1===d?null:d;null!==d&&G(c,3,d);H(b,Sk,96,c)}else c&&(c.client.mainAppWebInfo=null!=(d=c.client.mainAppWebInfo)?d:{},c.client.mainAppWebInfo.webDisplayMode=Tn())}
function qq(a,b){var c=B("yt.embedded_player.embed_url");c&&(a?(b=ie(a,al,7)||new al,G(b,4,c),H(a,al,7,b)):b&&(b.thirdParty={embedUrl:c}))}
function rq(a,b){var c;if(P("web_log_memory_total_kbytes")&&(null==(c=y.navigator)?0:c.deviceMemory)){var d;c=null==(d=y.navigator)?void 0:d.deviceMemory;a?G(a,95,1E6*c):b&&(b.client.memoryTotalKbytes=""+1E6*c)}}
function sq(a,b,c){if(a.appInstallData)if(b){var d;c=null!=(d=ie(b,Rk,62))?d:new Rk;G(c,6,a.appInstallData);H(b,Rk,62,c)}else c&&(c.client.configInfo=c.client.configInfo||{},c.client.configInfo.appInstallData=a.appInstallData)}
function tq(a,b){var c=ko();c&&(a?G(a,61,go[c]):b&&(b.client.connectionType=c));P("web_log_effective_connection_type")&&(c=lo())&&(a?G(a,94,ho[c]):b&&(b.client.effectiveConnectionType=c))}
function wq(a,b,c){c=void 0===c?{}:c;var d={};O("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":O("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||O("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;b=c.ng||O("AUTHORIZATION");b||(a?b="Bearer "+B("gapi.auth.getToken")().mg:(a=Qn(Pn()),P("pageid_as_header_web")||delete a["X-Goog-PageId"],d=Object.assign({},d,a)));b&&(d.Authorization=b);return d}
function uq(a,b){jq.h||(jq.h=new jq);var c=jq.h;var d=T()-c.h;if(0!==c.h&&d<en("send_config_hash_timer"))c=void 0;else{d=B("yt.gcf.config.coldConfigData");var e=B("yt.gcf.config.hotHashData"),f=B("yt.gcf.config.coldHashData");d&&e&&f&&(c.h=T());c={coldConfigData:d,hotHashData:e,coldHashData:f}}if(e=c)if(c=e.coldConfigData,d=e.coldHashData,e=e.hotHashData,c&&d&&e)if(a){var g;b=null!=(g=ie(a,Rk,62))?g:new Rk;G(b,1,c);G(b,3,d);G(b,5,e);H(a,Rk,62,b)}else b&&(b.client.configInfo=b.client.configInfo||{},
b.client.configInfo.coldConfigData=c,b.client.configInfo.coldHashData=d,b.client.configInfo.hotHashData=e)}
;function xq(a,b){this.version=a;this.args=b}
;function yq(a,b){this.topic=a;this.h=b}
yq.prototype.toString=function(){return this.topic};var zq=B("ytPubsub2Pubsub2Instance")||new dj;dj.prototype.subscribe=dj.prototype.subscribe;dj.prototype.unsubscribeByKey=dj.prototype.Eb;dj.prototype.publish=dj.prototype.bb;dj.prototype.clear=dj.prototype.clear;A("ytPubsub2Pubsub2Instance",zq);var Aq=B("ytPubsub2Pubsub2SubscribedKeys")||{};A("ytPubsub2Pubsub2SubscribedKeys",Aq);var Bq=B("ytPubsub2Pubsub2TopicToKeys")||{};A("ytPubsub2Pubsub2TopicToKeys",Bq);var Cq=B("ytPubsub2Pubsub2IsAsync")||{};A("ytPubsub2Pubsub2IsAsync",Cq);
A("ytPubsub2Pubsub2SkipSubKey",null);function Dq(a,b){var c=Eq();c&&c.publish.call(c,a.toString(),a,b)}
function Fq(a){var b=Gq,c=Eq();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=B("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(Aq[d])try{if(f&&b instanceof yq&&b!=e)try{var h=b.h,l=f;if(!l.args||!l.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.Va){var m=new h;h.Va=m.version}var n=h.Va}catch(E){}if(!n||l.version!=n)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{n=Reflect;var q=n.construct;
var u=l.args,t=u.length;if(0<t){var z=Array(t);for(l=0;l<t;l++)z[l]=u[l];var C=z}else C=[];f=q.call(n,h,C)}catch(E){throw E.message="yt.pubsub2.Data.deserialize(): "+E.message,E;}}catch(E){throw E.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+E.message,E;}a.call(window,f)}catch(E){Qm(E)}},Cq[b.toString()]?B("yt.scheduler.instance")?Hi.ea(g):ln(g,0):g())});
Aq[d]=!0;Bq[b.toString()]||(Bq[b.toString()]=[]);Bq[b.toString()].push(d);return d}
function Hq(){var a=Iq,b=Fq(function(c){a.apply(void 0,arguments);Jq(b)});
return b}
function Jq(a){var b=Eq();b&&("number"===typeof a&&(a=[a]),gb(a,function(c){b.unsubscribeByKey(c);delete Aq[c]}))}
function Eq(){return B("ytPubsub2Pubsub2Instance")}
;function Kq(a,b,c){c=void 0===c?{sampleRate:.1}:c;Math.random()<Math.min(.02,c.sampleRate/100)&&Dq("meta_logging_csi_event",{timerName:a,Ng:b})}
;var Lq=en("max_body_size_to_compress",5E5),Mq=en("min_body_size_to_compress",500),Nq=!0,Oq=0,Pq=0,Qq=en("compression_performance_threshold",250),Rq=en("slow_compressions_before_abandon_count",10);
function Sq(a,b,c,d){var e=T(),f={startTime:e},g={startTime:e,ticks:{},infos:{}};if(Nq&&void 0!==Hk)try{var h=Tq(b);if(!(h>Lq||h<Mq)){var l=Hk(Ci(b)),m=T();f.endTime=m;g.ticks.gelc=m;Pq++;P("disable_compression_due_to_performance_degredation")&&m-e>=Qq&&(Oq++,P("abandon_compression_after_N_slow_zips")?Pq===en("compression_disable_point")&&Oq>Rq&&(Nq=!1):Nq=!1);Uq(g,f);if(Vq(l,b)||!P("only_compress_gel_if_smaller"))c.headers||(c.headers={}),c.headers["Content-Encoding"]="gzip",c.postBody=l,c.postParams=
void 0}d(a,c)}catch(n){Rm(n),d(a,c)}else d(a,c)}
function Wq(a){var b=void 0===b?!1:b;var c=T(),d={startTime:c};c={startTime:c,ticks:{},infos:{}};if(void 0!==Hk){if(!a.body)return a;try{var e="string"===typeof a.body?a.body:JSON.stringify(a.body),f=Tq(e);if(f>Lq||f<Mq)return a;var g=Hk(Ci(e)),h=T();d.endTime=h;c.ticks.gelc=h;if(!Vq(g,e)&&P("only_compress_gel_if_smaller"))return a;b&&Uq(c,d);a.headers=Object.assign({},{"Content-Encoding":"gzip"},a.headers||{});a.body=g;return a}catch(l){return Rm(l),a}}else return a}
function Vq(a,b){if(!window.Blob)return!0;var c=a.length<Tq(b);c||Qm(new R("Compressed req body is larger than uncompressed","original size: "+Tq(b),"compressed size: "+a.length));return c}
function Tq(a){return(new Blob(a.split(""))).size}
function Uq(a,b){P("gel_compression_csi_killswitch")||!P("log_gel_compression_latency")&&!P("log_gel_compression_latency_lr")||(P("use_new_cml")?Kq("gel_compression",a,{sampleRate:.1}):.001>=Math.random()&&Dq("gel_compression_latency_payload",b))}
;function Xq(a){a=Object.assign({},a);delete a.Authorization;var b=Tg();if(b){var c=new Ni;c.update(O("INNERTUBE_API_KEY"));c.update(b);a.hash=qd(c.digest(),3)}return a}
;var Yq;function Zq(){Yq||(Yq=new uo("yt.innertube"));return Yq}
function $q(a,b,c,d){if(d)return null;d=Zq().get("nextId",!0)||1;var e=Zq().get("requests",!0)||{};e[d]={method:a,request:b,authState:Xq(c),requestTime:Math.round(T())};Zq().set("nextId",d+1,86400,!0);Zq().set("requests",e,86400,!0);return d}
function ar(a){var b=Zq().get("requests",!0)||{};delete b[a];Zq().set("requests",b,86400,!0)}
function br(a){var b=Zq().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(T())-d.requestTime)){var e=d.authState,f=Xq(wq(!1));tb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(T())),cr(a,d.method,e,{}));delete b[c]}}Zq().set("requests",b,86400,!0)}}
;function dr(a){this.Zb=this.h=!1;this.potentialEsfErrorCounter=this.i=0;this.handleError=function(){};
this.tb=function(){};
this.now=Date.now;this.Jb=!1;var b;this.Ld=null!=(b=a.Ld)?b:100;var c;this.Fd=null!=(c=a.Fd)?c:1;var d;this.Dd=null!=(d=a.Dd)?d:2592E6;var e;this.Bd=null!=(e=a.Bd)?e:12E4;var f;this.Ed=null!=(f=a.Ed)?f:5E3;var g;this.N=null!=(g=a.N)?g:void 0;this.fc=!!a.fc;var h;this.dc=null!=(h=a.dc)?h:.1;var l;this.mc=null!=(l=a.mc)?l:10;a.handleError&&(this.handleError=a.handleError);a.tb&&(this.tb=a.tb);a.Jb&&(this.Jb=a.Jb);a.Zb&&(this.Zb=a.Zb);this.O=a.O;this.ya=a.ya;this.V=a.V;this.U=a.U;this.Oa=a.Oa;this.Lc=
a.Lc;this.Kc=a.Kc;er(this)&&(!this.O||this.O("networkless_logging"))&&fr(this)}
function fr(a){er(a)&&!a.Jb&&(a.h=!0,a.fc&&Math.random()<=a.dc&&a.V.ce(a.N),gr(a),a.U.na()&&a.Rb(),a.U.Ma(a.Lc,a.Rb.bind(a)),a.U.Ma(a.Kc,a.bd.bind(a)))}
k=dr.prototype;k.writeThenSend=function(a,b){var c=this;b=void 0===b?{}:b;if(er(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.V.set(d,this.N).then(function(e){d.id=e;c.U.na()&&hr(c,d)}).catch(function(e){hr(c,d);
ir(c,e)})}else this.Oa(a,b)};
k.sendThenWrite=function(a,b,c){var d=this;b=void 0===b?{}:b;if(er(this)&&this.h){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.O&&this.O("nwl_skip_retry")&&(e.skipRetry=c);if(this.U.na()||this.O&&this.O("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return x(function(l){if(1==l.h)return w(l,d.V.set(e,d.N).catch(function(m){ir(d,m)}),2);
f(g,h);l.h=0})}}this.Oa(a,b,e.skipRetry)}else this.V.set(e,this.N).catch(function(g){d.Oa(a,b,e.skipRetry);
ir(d,g)})}else this.Oa(a,b,this.O&&this.O("nwl_skip_retry")&&c)};
k.sendAndWrite=function(a,b){var c=this;b=void 0===b?{}:b;if(er(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){void 0!==d.id?c.V.sb(d.id,c.N):e=!0;c.U.gb&&c.O&&c.O("vss_network_hint")&&c.U.gb(!0);f(g,h)};
this.Oa(d.url,d.options);this.V.set(d,this.N).then(function(g){d.id=g;e&&c.V.sb(d.id,c.N)}).catch(function(g){ir(c,g)})}else this.Oa(a,b)};
k.Rb=function(){var a=this;if(!er(this))throw To("throttleSend");this.i||(this.i=this.ya.ea(function(){var b;return x(function(c){if(1==c.h)return w(c,a.V.nd("NEW",a.N),2);if(3!=c.h)return b=c.i,b?w(c,hr(a,b),3):(a.bd(),c.return());a.i&&(a.i=0,a.Rb());c.h=0})},this.Ld))};
k.bd=function(){this.ya.Ca(this.i);this.i=0};
function hr(a,b){var c,d;return x(function(e){switch(e.h){case 1:if(!er(a))throw c=To("immediateSend"),c;if(void 0===b.id){e.A(2);break}return w(e,a.V.Ae(b.id,a.N),3);case 3:(d=e.i)||a.tb(Error("The request cannot be found in the database."));case 2:if(jr(a,b,a.Dd)){e.A(4);break}a.tb(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===b.id){e.A(5);break}return w(e,a.V.sb(b.id,a.N),5);case 5:return e.return();case 4:b.skipRetry||(b=kr(a,b));if(!b){e.A(0);break}if(!b.skipRetry||
void 0===b.id){e.A(8);break}return w(e,a.V.sb(b.id,a.N),8);case 8:a.Oa(b.url,b.options,!!b.skipRetry),e.h=0}})}
function kr(a,b){if(!er(a))throw To("updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,l,m;return x(function(n){switch(n.h){case 1:g=lr(f);(h=mr(f))&&a.O&&a.O("web_enable_error_204")&&a.handleError(Error("Request failed due to compression"),b.url,f);if(!(a.O&&a.O("nwl_consider_error_code")&&g||a.O&&!a.O("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.mc)){n.A(2);break}if(!a.U.pc){n.A(3);break}return w(n,a.U.pc(),3);case 3:if(a.U.na()){n.A(2);break}c(e,f);if(!a.O||!a.O("nwl_consider_error_code")||void 0===(null==(l=b)?void 0:l.id)){n.A(6);
break}return w(n,a.V.Pc(b.id,a.N,!1),6);case 6:return n.return();case 2:if(a.O&&a.O("nwl_consider_error_code")&&!g&&a.potentialEsfErrorCounter>a.mc)return n.return();a.potentialEsfErrorCounter++;if(void 0===(null==(m=b)?void 0:m.id)){n.A(8);break}return b.sendCount<a.Fd?w(n,a.V.Pc(b.id,a.N,!0,h?!1:void 0),12):w(n,a.V.sb(b.id,a.N),8);case 12:a.ya.ea(function(){a.U.na()&&a.Rb()},a.Ed);
case 8:c(e,f),n.h=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return x(function(h){if(1==h.h)return void 0===(null==(g=b)?void 0:g.id)?h.A(2):w(h,a.V.sb(b.id,a.N),2);a.U.gb&&a.O&&a.O("vss_network_hint")&&a.U.gb(!0);d(e,f);h.h=0})};
return b}
function jr(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function gr(a){if(!er(a))throw To("retryQueuedRequests");a.V.nd("QUEUED",a.N).then(function(b){b&&!jr(a,b,a.Bd)?a.ya.ea(function(){return x(function(c){if(1==c.h)return void 0===b.id?c.A(2):w(c,a.V.Pc(b.id,a.N),2);gr(a);c.h=0})}):a.U.na()&&a.Rb()})}
function ir(a,b){a.Rd&&!a.U.na()?a.Rd(b):a.handleError(b)}
function er(a){return!!a.N||a.Zb}
function lr(a){var b;return(a=null==a?void 0:null==(b=a.error)?void 0:b.code)&&400<=a&&599>=a?!1:!0}
function mr(a){var b;a=null==a?void 0:null==(b=a.error)?void 0:b.code;return!(400!==a&&415!==a)}
;var nr;
function or(){if(nr)return nr();var a={};nr=bq("LogsDatabaseV2",{zb:(a.LogsRequestsStore={Gb:2},a),qc:!1,upgrade:function(b,c,d){c(2)&&hp(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.h.indexNames.contains("newRequest")&&d.h.deleteIndex("newRequest"),op(d,"newRequestV2",["status","interface","timestamp"]));c(7)&&b.h.objectStoreNames.contains("sapisid")&&b.h.deleteObjectStore("sapisid");c(9)&&b.h.objectStoreNames.contains("SWHealthLog")&&b.h.deleteObjectStore("SWHealthLog")},
version:9});return nr()}
;function pr(a){return Ap(or(),a)}
function qr(a,b){var c,d,e,f,g;return x(function(h){if(1==h.h)return c={startTime:T(),transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},d={startTime:T(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},ticks:{}},w(h,pr(b),2);if(3!=h.h)return e=h.i,f=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:O("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),w(h,jp(e,"LogsRequestsStore",f),3);g=h.i;c.gf=T();d.ticks.tc=T();rr(d,c);return h.return(g)})}
function sr(a,b){var c,d,e,f,g,h,l,m;return x(function(n){if(1==n.h)return c={startTime:T(),transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},d={startTime:T(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},ticks:{}},w(n,pr(b),2);if(3!=n.h)return e=n.i,f=O("INNERTUBE_CONTEXT_CLIENT_NAME",0),g=[a,f,0],h=[a,f,T()],l=IDBKeyRange.bound(g,h),m=void 0,w(n,gp(e,["LogsRequestsStore"],{mode:"readwrite",ca:!0},function(q){return tp(q.objectStore("LogsRequestsStore").index("newRequestV2"),{query:l,direction:"prev"},
function(u){u.getValue()&&(m=u.getValue(),"NEW"===a&&(m.status="QUEUED",u.update(m)))})}),3);
c.gf=T();d.ticks.tc=T();rr(d,c);return n.return(m)})}
function zr(a,b){var c;return x(function(d){if(1==d.h)return w(d,pr(b),2);c=d.i;return d.return(gp(c,["LogsRequestsStore"],{mode:"readwrite",ca:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",cp(f.h.put(g,void 0)).then(function(){return g})})}))})}
function Dr(a,b,c,d){c=void 0===c?!0:c;var e;return x(function(f){if(1==f.h)return w(f,pr(b),2);e=f.i;return f.return(gp(e,["LogsRequestsStore"],{mode:"readwrite",ca:!0},function(g){var h=g.objectStore("LogsRequestsStore");return h.get(a).then(function(l){return l?(l.status="NEW",c&&(l.sendCount+=1),void 0!==d&&(l.options.compress=d),cp(h.h.put(l,void 0)).then(function(){return l})):Xo.resolve(void 0)})}))})}
function Wr(a,b){var c;return x(function(d){if(1==d.h)return w(d,pr(b),2);c=d.i;return d.return(c.delete("LogsRequestsStore",a))})}
function Xr(a){var b,c;return x(function(d){if(1==d.h)return w(d,pr(a),2);b=d.i;c=T()-2592E6;return w(d,gp(b,["LogsRequestsStore"],{mode:"readwrite",ca:!0},function(e){return qp(e.objectStore("LogsRequestsStore"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function Yr(){x(function(a){return w(a,Yp(),0)})}
function rr(a,b){P("nwl_csi_killswitch")||(P("use_new_cml")?Kq("networkless_performance",a,{sampleRate:1}):.01>=Math.random()&&Dq("nwl_transaction_latency_payload",b))}
;var Zr={},$r=bq("ServiceWorkerLogsDatabase",{zb:(Zr.SWHealthLog={Gb:1},Zr),qc:!0,upgrade:function(a,b){b(1)&&op(hp(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}),"swHealthNewRequest",["interface","timestamp"])},
version:1});function as(a){return Ap($r(),a)}
function bs(a){var b,c;x(function(d){if(1==d.h)return w(d,as(a),2);b=d.i;c=T()-2592E6;return w(d,gp(b,["SWHealthLog"],{mode:"readwrite",ca:!0},function(e){return qp(e.objectStore("SWHealthLog"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function cs(a){var b;return x(function(c){if(1==c.h)return w(c,as(a),2);b=c.i;return w(c,b.clear("SWHealthLog"),0)})}
;var ds={},es=0;function fs(a){var b=new Image,c=""+es++;ds[c]=b;b.onload=b.onerror=function(){delete ds[c]};
b.src=a}
;function gs(){this.h=new Map;this.i=!1}
function hs(){if(!gs.h){var a=B("yt.networkRequestMonitor.instance")||new gs;A("yt.networkRequestMonitor.instance",a);gs.h=a}return gs.h}
gs.prototype.requestComplete=function(a,b){b&&(this.i=!0);a=this.removeParams(a);this.h.get(a)||this.h.set(a,b)};
gs.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.h.get(a))?!1:!1===a&&this.i?!0:null};
gs.prototype.removeParams=function(a){return a.split("?")[0]};
gs.prototype.removeParams=gs.prototype.removeParams;gs.prototype.isEndpointCFR=gs.prototype.isEndpointCFR;gs.prototype.requestComplete=gs.prototype.requestComplete;gs.getInstance=hs;var is;function js(){is||(is=new uo("yt.offline"));return is}
function ks(a){if(P("offline_error_handling")){var b=js().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);js().set("errors",b,2592E3,!0)}}
;function ls(){vf.call(this);var a=this;this.j=!1;this.i=Gi();this.i.Ma("networkstatus-online",function(){if(a.j&&P("offline_error_handling")){var b=js().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new R(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;d.level=b[c].level;Qm(d)}js().set("errors",{},2592E3,!0)}}})}
v(ls,vf);function ms(){if(!ls.h){var a=B("yt.networkStatusManager.instance")||new ls;A("yt.networkStatusManager.instance",a);ls.h=a}return ls.h}
k=ls.prototype;k.na=function(){return this.i.na()};
k.gb=function(a){this.i.i=a};
k.qe=function(){var a=window.navigator.onLine;return void 0===a?!0:a};
k.ie=function(){this.j=!0};
k.Ma=function(a,b){return this.i.Ma(a,b)};
k.pc=function(a){a=Ei(this.i,a);a.then(function(b){P("use_cfr_monitor")&&hs().requestComplete("generate_204",b)});
return a};
ls.prototype.sendNetworkCheckRequest=ls.prototype.pc;ls.prototype.listen=ls.prototype.Ma;ls.prototype.enableErrorFlushing=ls.prototype.ie;ls.prototype.getWindowStatus=ls.prototype.qe;ls.prototype.networkStatusHint=ls.prototype.gb;ls.prototype.isNetworkAvailable=ls.prototype.na;ls.getInstance=ms;function ns(a){a=void 0===a?{}:a;vf.call(this);var b=this;this.i=this.s=0;this.j=ms();var c=B("yt.networkStatusManager.instance.listen").bind(this.j);c&&(a.oc?(this.oc=a.oc,c("networkstatus-online",function(){os(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){os(b,"publicytnetworkstatus-offline")})):(c("networkstatus-online",function(){wf(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){wf(b,"publicytnetworkstatus-offline")})))}
v(ns,vf);ns.prototype.na=function(){var a=B("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.j)():!0};
ns.prototype.gb=function(a){var b=B("yt.networkStatusManager.instance.networkStatusHint").bind(this.j);b&&b(a)};
ns.prototype.pc=function(a){var b=this,c;return x(function(d){c=B("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.j);return P("skip_network_check_if_cfr")&&hs().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.gb((null==(f=window.navigator)?void 0:f.onLine)||!0);e(b.na())})):c?d.return(c(a)):d.return(!0)})};
function os(a,b){a.oc?a.i?(Hi.Ca(a.s),a.s=Hi.ea(function(){a.m!==b&&(wf(a,b),a.m=b,a.i=T())},a.oc-(T()-a.i))):(wf(a,b),a.m=b,a.i=T()):wf(a,b)}
;var ps;function qs(){var a=dr.call;ps||(ps=new ns({zg:!0,tg:!0}));a.call(dr,this,{V:{ce:Xr,sb:Wr,nd:sr,Ae:zr,Pc:Dr,set:qr},U:ps,handleError:function(b,c,d){var e,f=null==d?void 0:null==(e=d.error)?void 0:e.code;if(400===f||415===f){var g;Rm(new R(b.message,c,null==d?void 0:null==(g=d.error)?void 0:g.code),void 0,void 0,void 0,!0)}else Qm(b)},
tb:Rm,Oa:rs,now:T,Rd:ks,ya:to(),Lc:"publicytnetworkstatus-online",Kc:"publicytnetworkstatus-offline",fc:!0,dc:.1,mc:en("potential_esf_error_limit",10),O:P,Jb:!(mo()&&ss())});this.j=new di;P("networkless_immediately_drop_all_requests")&&Yr();Zp("LogsDatabaseV2")}
v(qs,dr);function ts(){var a=B("yt.networklessRequestController.instance");a||(a=new qs,A("yt.networklessRequestController.instance",a),P("networkless_logging")&&Op().then(function(b){a.N=b;fr(a);a.j.resolve();a.fc&&Math.random()<=a.dc&&a.N&&bs(a.N);P("networkless_immediately_drop_sw_health_store")&&us(a)}));
return a}
qs.prototype.writeThenSend=function(a,b){b||(b={});mo()||(this.h=!1);dr.prototype.writeThenSend.call(this,a,b)};
qs.prototype.sendThenWrite=function(a,b,c){b||(b={});mo()||(this.h=!1);dr.prototype.sendThenWrite.call(this,a,b,c)};
qs.prototype.sendAndWrite=function(a,b){b||(b={});mo()||(this.h=!1);dr.prototype.sendAndWrite.call(this,a,b)};
qs.prototype.awaitInitialization=function(){return this.j.promise};
function us(a){var b;x(function(c){if(!a.N)throw b=To("clearSWHealthLogsDb"),b;return c.return(cs(a.N).catch(function(d){a.handleError(d)}))})}
function rs(a,b,c){P("use_cfr_monitor")&&vs(a,b);if(P("use_request_time_ms_header"))b.headers&&(b.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(T())));else{var d;if(null==(d=b.postParams)?0:d.requestTimeMs)b.postParams.requestTimeMs=Math.round(T())}if(c&&0===Object.keys(b).length){var e=void 0===e?"":e;var f=void 0===f?!1:f;if(a)if(e)un(a,void 0,"POST",e);else if(O("USE_NET_AJAX_FOR_PING_TRANSPORT",!1))un(a,void 0,"GET","",void 0,void 0,f);else{b:{try{var g=new cb({url:a});if(g.j&&g.i||
g.l){var h=vc(wc(5,a)),l;if(!(l=!h||!h.endsWith("/aclk"))){var m=a.search(Hc),n=Gc(a,0,"ri",m);if(0>n)var q=null;else{var u=a.indexOf("&",n);if(0>u||u>m)u=m;q=decodeURIComponent(a.slice(n+3,-1!==u?u:0).replace(/\+/g," "))}l="1"!==q}var t=!l;break b}}catch(C){}t=!1}if(t){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var z=!0;break b}}catch(C){}z=!1}c=z?!0:!1}else c=!1;c||fs(a)}}else b.compress?b.postBody?("string"!==typeof b.postBody&&(b.postBody=JSON.stringify(b.postBody)),
Sq(a,b.postBody,b,rn)):Sq(a,JSON.stringify(b.postParams),b,zn):rn(a,b)}
function vs(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){hs().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){hs().requestComplete(a,!0);d(e,f)}}
function ss(){return"www.youtube-nocookie.com"!==xc(document.location.toString())}
;var ws=!1,xs=y.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:ws};A("ytNetworklessLoggingInitializationOptions",xs);function ys(){var a;x(function(b){if(1==b.h)return w(b,Op(),2);a=b.i;if(!a||!mo()&&!P("nwl_init_require_datasync_id_killswitch")||!ss())return b.A(0);ws=!0;xs.isNwlInitialized=ws;return w(b,ts().awaitInitialization(),0)})}
;function zs(a){var b=this;this.config_=null;a?this.config_=a:mq()&&(this.config_=nq());po(function(){br(b)},5E3)}
zs.prototype.isReady=function(){!this.config_&&mq()&&(this.config_=nq());return!!this.config_};
function cr(a,b,c,d){function e(z){z=void 0===z?!1:z;var C;if(d.retry&&"www.youtube-nocookie.com"!=h&&(z||P("skip_ls_gel_retry")||"application/json"!==g.headers["Content-Type"]||(C=$q(b,c,m,l)),C)){var E=g.onSuccess,M=g.onFetchSuccess;g.onSuccess=function(Q,W){ar(C);E(Q,W)};
c.onFetchSuccess=function(Q,W){ar(C);M(Q,W)}}try{if(z&&d.retry&&!d.wd.bypassNetworkless)g.method="POST",d.wd.writeThenSend?ts().writeThenSend(t,g):ts().sendAndWrite(t,g);
else if(d.compress)if(g.postBody){var S=g.postBody;"string"!==typeof S&&(S=JSON.stringify(g.postBody));Sq(t,S,g,rn)}else Sq(t,JSON.stringify(g.postParams),g,zn);else P("web_all_payloads_via_jspb")?rn(t,g):zn(t,g)}catch(Q){if("InvalidAccessError"==Q.name)C&&(ar(C),C=0),Rm(Error("An extension is blocking network request."));else throw Q;}C&&po(function(){br(a)},5E3)}
!O("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&Rm(new R("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new R("innertube xhrclient not ready",b,c,d);Qm(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(z,C){if(d.onSuccess)d.onSuccess(C)},
onFetchSuccess:function(z){if(d.onSuccess)d.onSuccess(z)},
onError:function(z,C){if(d.onError)d.onError(C)},
onFetchError:function(z){if(d.onError)d.onError(z)},
timeout:d.timeout,withCredentials:!0,compress:d.compress};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.we)&&(h=f);var l=a.config_.ye||!1,m=wq(l,h,d);Object.assign(g.headers,m);(f=g.headers.Authorization)&&!h&&l&&(g.headers["x-origin"]=window.location.origin);var n="/youtubei/"+a.config_.innertubeApiVersion+"/"+b,q={alt:"json"},u=a.config_.xe&&f;u=u&&f.startsWith("Bearer");u||(q.key=a.config_.innertubeApiKey);var t=$m(""+h+n,q||{},!0);(B("ytNetworklessLoggingInitializationOptions")?
xs.isNwlInitialized:ws)?Mp().then(function(z){e(z)}):e(!1)}
;var As=0,Bs=ad?"webkit":$c?"moz":Yc?"ms":Xc?"o":"";A("ytDomDomGetNextId",B("ytDomDomGetNextId")||function(){return++As});var Cs={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function Ds(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in Cs||(this[b]=a[b]);this.scale=a.scale;this.rotation=a.rotation;var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;
if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.h=a.pageX;this.i=a.pageY}}catch(e){}}
function Es(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.h=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.i=a.clientY+b}}
Ds.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Ds.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Ds.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var pb=y.ytEventsEventsListeners||{};A("ytEventsEventsListeners",pb);var Fs=y.ytEventsEventsCounter||{count:0};A("ytEventsEventsCounter",Fs);
function Gs(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return ob(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Sa(e[4])&&Sa(d)&&tb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
var Hs=eb(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function Is(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=Gs(a,b,c,d);if(e)return e;e=++Fs.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new Ds(h);if(!Ff(h.relatedTarget,function(l){return l==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new Ds(h);
h.currentTarget=a;return c.call(a,h)};
g=Pm(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),Hs()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);pb[e]=[a,b,c,g,d];return e}
function Js(a){a&&("string"==typeof a&&(a=[a]),gb(a,function(b){if(b in pb){var c=pb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?Hs()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete pb[b]}}))}
;function Ks(a){this.H=a;this.i=null;this.m=0;this.v=null;this.s=0;this.j=[];for(a=0;4>a;a++)this.j.push(0);this.l=0;this.T=Is(window,"mousemove",Ya(this.X,this));a=Ya(this.M,this);"function"===typeof a&&(a=Pm(a));this.Y=window.setInterval(a,25)}
$a(Ks,K);Ks.prototype.X=function(a){void 0===a.h&&Es(a);var b=a.h;void 0===a.i&&Es(a);this.i=new Bf(b,a.i)};
Ks.prototype.M=function(){if(this.i){var a=T();if(0!=this.m){var b=this.v,c=this.i,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.m);this.j[this.l]=.5<Math.abs((d-this.s)/this.s)?1:0;for(c=b=0;4>c;c++)b+=this.j[c]||0;3<=b&&this.H();this.s=d}this.m=a;this.v=this.i;this.l=(this.l+1)%4}};
Ks.prototype.L=function(){window.clearInterval(this.Y);Js(this.T)};var Ls={};
function Ms(a){var b=void 0===a?{}:a;a=void 0===b.Je?!1:b.Je;b=void 0===b.je?!0:b.je;if(null==B("_lact",window)){var c=parseInt(O("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;A("_lact",c,window);A("_fact",c,window);-1==c&&Ns();Is(document,"keydown",Ns);Is(document,"keyup",Ns);Is(document,"mousedown",Ns);Is(document,"mouseup",Ns);a?Is(window,"touchmove",function(){Os("touchmove",200)},{passive:!0}):(Is(window,"resize",function(){Os("resize",200)}),b&&Is(window,"scroll",function(){Os("scroll",200)}));
new Ks(function(){Os("mouse",100)});
Is(document,"touchstart",Ns,{passive:!0});Is(document,"touchend",Ns,{passive:!0})}}
function Os(a,b){Ls[a]||(Ls[a]=!0,Hi.ea(function(){Ns();Ls[a]=!1},b))}
function Ns(){null==B("_lact",window)&&Ms();var a=Date.now();A("_lact",a,window);-1==B("_fact",window)&&A("_fact",a,window);(a=B("ytglobal.ytUtilActivityCallback_"))&&a()}
function Ps(){var a=B("_lact",window);return null==a?-1:Math.max(Date.now()-a,0)}
;var Qs=y.ytPubsubPubsubInstance||new dj,Rs=y.ytPubsubPubsubSubscribedKeys||{},Ss=y.ytPubsubPubsubTopicToKeys||{},Ts=y.ytPubsubPubsubIsSynchronous||{};function Us(a,b){var c=Vs();if(c&&b){var d=c.subscribe(a,function(){var e=arguments;var f=function(){Rs[d]&&b.apply&&"function"==typeof b.apply&&b.apply(window,e)};
try{Ts[a]?f():ln(f,0)}catch(g){Qm(g)}},void 0);
Rs[d]=!0;Ss[a]||(Ss[a]=[]);Ss[a].push(d);return d}return 0}
function Ws(a){var b=Vs();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),gb(a,function(c){b.unsubscribeByKey(c);delete Rs[c]}))}
function Xs(a,b){var c=Vs();c&&c.publish.apply(c,arguments)}
function Ys(a){var b=Vs();if(b)if(b.clear(a),a)Zs(a);else for(var c in Ss)Zs(c)}
function Vs(){return y.ytPubsubPubsubInstance}
function Zs(a){Ss[a]&&(a=Ss[a],gb(a,function(b){Rs[b]&&delete Rs[b]}),a.length=0)}
dj.prototype.subscribe=dj.prototype.subscribe;dj.prototype.unsubscribeByKey=dj.prototype.Eb;dj.prototype.publish=dj.prototype.bb;dj.prototype.clear=dj.prototype.clear;A("ytPubsubPubsubInstance",Qs);A("ytPubsubPubsubTopicToKeys",Ss);A("ytPubsubPubsubIsSynchronous",Ts);A("ytPubsubPubsubSubscribedKeys",Rs);var $s=Symbol("injectionDeps");function at(a){this.name=a}
at.prototype.toString=function(){return"InjectionToken("+this.name+")"};
function bt(a){this.key=a}
function ct(){this.h=new Map;this.i=new Map}
ct.prototype.resolve=function(a){return a instanceof bt?dt(this,a.key,[],!0):dt(this,a,[])};
function dt(a,b,c,d){d=void 0===d?!1:d;if(-1<c.indexOf(b))throw Error("Deps cycle for: "+b);if(a.i.has(b))return a.i.get(b);if(!a.h.has(b)){if(d)return;throw Error("No provider for: "+b);}d=a.h.get(b);c.push(b);if(void 0!==d.Od)var e=d.Od;else if(d.kf)e=d[$s]?et(a,d[$s],c):[],e=d.kf.apply(d,ja(e));else if(d.Nd){e=d.Nd;var f=e[$s]?et(a,e[$s],c):[];e=new (Function.prototype.bind.apply(e,[null].concat(ja(f))))}else throw Error("Could not resolve providers for: "+b);c.pop();d.Lg||a.i.set(b,e);return e}
function et(a,b,c){return b?b.map(function(d){return d instanceof bt?dt(a,d.key,c,!0):dt(a,d,c)}):[]}
;var ft;function gt(){ft||(ft=new ct);return ft}
;function ht(){this.store={};this.h={}}
ht.prototype.storePayload=function(a,b){a=jt(a);this.store[a]?this.store[a].push(b):(this.h={},this.store[a]=[b]);return a};
ht.prototype.extractMatchingEntries=function(a){a=kt(this,a);for(var b=[],c=0;c<a.length;c++)this.store[a[c]]&&(b.push.apply(b,ja(this.store[a[c]])),delete this.store[a[c]]);return b};
ht.prototype.getSequenceCount=function(a){a=kt(this,a);for(var b=0,c=0;c<a.length;c++)b+=this.store[a[c]].length||0;return b};
function kt(a,b){var c=jt(b);if(a.h[c])return a.h[c];var d=Object.keys(a.store)||[];if(1>=d.length&&jt(b)===d[0])return d;for(var e=[],f=0;f<d.length;f++){var g=d[f].split("/");if(lt(b.auth,g[0])){var h=b.isJspb;lt(void 0===h?"undefined":h?"true":"false",g[1])&&lt(b.cttAuthInfo,g[2])&&e.push(d[f])}}return a.h[c]=e}
function lt(a,b){return void 0===a||"undefined"===a?!0:a===b}
ht.prototype.getSequenceCount=ht.prototype.getSequenceCount;ht.prototype.extractMatchingEntries=ht.prototype.extractMatchingEntries;ht.prototype.storePayload=ht.prototype.storePayload;function jt(a){return[void 0===a.auth?"undefined":a.auth,void 0===a.isJspb?"undefined":a.isJspb,void 0===a.cttAuthInfo?"undefined":a.cttAuthInfo].join("/")}
;function mt(a,b){if(a)return a[b.name]}
;var nt=en("initial_gel_batch_timeout",2E3),ot=en("gel_queue_timeout_max_ms",6E4),pt=Math.pow(2,16)-1,qt=void 0;function rt(){this.j=this.h=this.i=0}
var st=new rt,tt=new rt,ut,vt=!0,wt=y.ytLoggingTransportTokensToCttTargetIds_||{};A("ytLoggingTransportTokensToCttTargetIds_",wt);var xt=y.ytLoggingTransportTokensToJspbCttTargetIds_||{};A("ytLoggingTransportTokensToJspbCttTargetIds_",xt);var zt={};function At(){var a=B("yt.logging.ims");a||(a=new ht,A("yt.logging.ims",a));return a}
function Bt(a,b){P("web_all_payloads_via_jspb")&&Rm(new R("transport.log called for JSON in JSPB only experiment"));if("log_event"===a.endpoint){Ct(a);var c=Dt(a);zt[c]=!0;var d={cttAuthInfo:c,isJspb:!1};At().storePayload(d,a.payload);Et(b,c,!1,d)}}
function Ft(a,b){if("log_event"===a.endpoint){Ct(void 0,a);var c=Dt(a,!0);zt[c]=!0;var d={cttAuthInfo:c,isJspb:!0};At().storePayload(d,a.payload.toJSON());Et(b,c,!0,d)}}
function Et(a,b,c,d){c=void 0===c?!1:c;a&&(qt=new a);a=en("tvhtml5_logging_max_batch_ads_fork")||en("web_logging_max_batch")||100;var e=T(),f=c?tt.j:st.j,g=0;d&&(g=At().getSequenceCount(d));g>=a?ut||(ut=Gt(function(){Ht({writeThenSend:!0},P("flush_only_full_queue")?b:void 0,c);ut=void 0},0)):10<=e-f&&(It(c),c?tt.j=e:st.j=e)}
function Jt(a,b){P("web_all_payloads_via_jspb")&&Rm(new R("transport.logIsolatedGelPayload called in JSPB only experiment"));if("log_event"===a.endpoint){Ct(a);var c=Dt(a),d=new Map;d.set(c,[a.payload]);b&&(qt=new b);return new Rf(function(e,f){qt&&qt.isReady()?Kt(d,qt,e,f,{bypassNetworkless:!0},!0):e()})}}
function Lt(a,b){if("log_event"===a.endpoint){Ct(void 0,a);var c=Dt(a,!0),d=new Map;d.set(c,[a.payload.toJSON()]);b&&(qt=new b);return new Rf(function(e){qt&&qt.isReady()?Mt(d,qt,e,{bypassNetworkless:!0},!0):e()})}}
function Dt(a,b){var c="";if(a.dangerousLogToVisitorSession)c="visitorOnlyApprovedKey";else if(a.cttAuthInfo){if(void 0===b?0:b){b=a.cttAuthInfo.token;c=a.cttAuthInfo;var d=new um;c.videoId?d.setVideoId(c.videoId):c.playlistId&&ge(d,2,vm,c.playlistId);xt[b]=d}else b=a.cttAuthInfo,c={},b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId),wt[a.cttAuthInfo.token]=c;c=a.cttAuthInfo.token}return c}
function Ht(a,b,c){a=void 0===a?{}:a;c=void 0===c?!1:c;!c&&P("web_all_payloads_via_jspb")&&Rm(new R("transport.flushLogs called for JSON in JSPB only experiment"));new Rf(function(d,e){c?(Nt(tt.i),Nt(tt.h),tt.h=0):(Nt(st.i),Nt(st.h),st.h=0);if(qt&&qt.isReady()){var f=a,g=c,h=qt;f=void 0===f?{}:f;g=void 0===g?!1:g;var l=new Map,m=new Map;if(void 0!==b)g?(e=At().extractMatchingEntries({isJspb:g,cttAuthInfo:b}),l.set(b,e),Mt(l,h,d,f)):(l=At().extractMatchingEntries({isJspb:g,cttAuthInfo:b}),m.set(b,
l),Kt(m,h,d,e,f));else if(g){e=r(Object.keys(zt));for(g=e.next();!g.done;g=e.next())m=g.value,g=At().extractMatchingEntries({isJspb:!0,cttAuthInfo:m}),0<g.length&&l.set(m,g),delete zt[m];Mt(l,h,d,f)}else{l=r(Object.keys(zt));for(g=l.next();!g.done;g=l.next()){g=g.value;var n=At().extractMatchingEntries({isJspb:!1,cttAuthInfo:g});0<n.length&&m.set(g,n);delete zt[g]}Kt(m,h,d,e,f)}}else It(c),d()})}
function It(a){a=void 0===a?!1:a;if(P("web_gel_timeout_cap")&&(!a&&!st.h||a&&!tt.h)){var b=Gt(function(){Ht({writeThenSend:!0},void 0,a)},ot);
a?tt.h=b:st.h=b}Nt(a?tt.i:st.i);b=O("LOGGING_BATCH_TIMEOUT",en("web_gel_debounce_ms",1E4));P("shorten_initial_gel_batch_timeout")&&vt&&(b=nt);b=Gt(function(){Ht({writeThenSend:!0},void 0,a)},b);
a?tt.i=b:st.i=b}
function Kt(a,b,c,d,e,f){e=void 0===e?{}:e;var g=Math.round(T()),h=a.size,l={};a=r(a);for(var m=a.next();!m.done;l={Sb:l.Sb,Ya:l.Ya,Cb:l.Cb,Ub:l.Ub,Tb:l.Tb},m=a.next()){var n=r(m.value);m=n.next().value;n=n.next().value;l.Ya=vb({context:oq(b.config_||nq())});if(!Qa(n)&&!P("throw_err_when_logevent_malformed_killswitch")){d();break}l.Ya.events=n;(n=wt[m])&&Ot(l.Ya,m,n);delete wt[m];l.Cb="visitorOnlyApprovedKey"===m;Pt(l.Ya,g,l.Cb);Qt(e);l.Ub=function(q){P("update_log_event_config")&&Hi.ea(function(){return x(function(u){return w(u,
Rt(q),0)})});
h--;h||c()};
l.Sb=0;l.Tb=function(q){return function(){q.Sb++;if(e.bypassNetworkless&&1===q.Sb)try{cr(b,"log_event",q.Ya,St({writeThenSend:!0},q.Cb,q.Ub,q.Tb,f)),vt=!1}catch(u){Qm(u),d()}h--;h||c()}}(l);
try{cr(b,"log_event",l.Ya,St(e,l.Cb,l.Ub,l.Tb,f)),vt=!1}catch(q){Qm(q),d()}}}
function Mt(a,b,c,d,e){d=void 0===d?{}:d;var f=Math.round(T()),g=a.size,h=new Map([].concat(ja(a)));h=r(h);for(var l=h.next();!l.done;l=h.next()){var m=r(l.value).next().value,n=a.get(m);l=new wm;var q=vq(b.config_||nq());H(l,fl,1,q);n=n?Tt(n):[];n=r(n);for(q=n.next();!q.done;q=n.next())ne(l,3,qm,q.value);(n=xt[m])&&Ut(l,m,n);delete xt[m];m="visitorOnlyApprovedKey"===m;Vt(l,f,m);Qt(d);l=Ee(l);m=St(d,m,function(u){P("update_log_event_config")&&Hi.ea(function(){return x(function(t){return w(t,Rt(u),
0)})});
g--;g||c()},function(){g--;
g||c()},e);
m.headers["Content-Type"]="application/json+protobuf";m.postBodyFormat="JSPB";m.postBody=l;cr(b,"log_event","",m);vt=!1}}
function Qt(a){P("always_send_and_write")&&(a.writeThenSend=!1)}
function St(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,wd:a,dangerousLogToVisitorSession:b,pg:!!e,headers:{},postBodyFormat:"",postBody:"",compress:P("compress_gel")||P("compress_gel_lr")};Wt()&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(T())));return a}
function Pt(a,b,c){Wt()||(a.requestTimeMs=String(b));P("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=O("EVENT_ID"))&&(c=Xt(),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function Vt(a,b,c){Wt()||G(a,2,b);if(!c&&(b=O("EVENT_ID"))){c=Xt();var d=new tm;G(d,1,b);G(d,2,c);H(a,tm,5,d)}}
function Xt(){var a=O("BATCH_CLIENT_COUNTER")||0;a||(a=Math.floor(Math.random()*pt/2));a++;a>pt&&(a=1);Lm("BATCH_CLIENT_COUNTER",a);return a}
function Ot(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function Ut(a,b,c){var d=1===he(c,vm)?1:-1;if(ae(c,d))d=1;else if(c.getPlaylistId())d=2;else return;H(a,um,4,c);a=ie(a,fl,1)||new fl;c=ie(a,dl,3)||new dl;var e=new cl;G(e,2,b);G(e,1,d);ne(c,12,cl,e);H(a,dl,3,c)}
function Tt(a){for(var b=[],c=0;c<a.length;c++)try{b.push(new qm(a[c]))}catch(d){Qm(new R("Transport failed to deserialize "+String(a[c])))}return b}
function Ct(a,b){if(B("yt.logging.transport.enableScrapingForTest")){var c=B("yt.logging.transport.scrapedPayloadsForTesting"),d=B("yt.logging.transport.payloadToScrape");b&&(b=B("yt.logging.transport.getScrapedPayloadFromClientEventsFunction").bind(b.payload)())&&c.push(b);if(d&&1<=d.length)for(b=0;b<d.length;b++)if(a&&a.payload[d[b]]){var e=void 0;c.push((null==(e=a)?void 0:e.payload)[d[b]])}A("yt.logging.transport.scrapedPayloadsForTesting",c)}}
function Wt(){return P("use_request_time_ms_header")||P("lr_use_request_time_ms_header")}
function Gt(a,b){return P("transport_use_scheduler")?po(a,b):ln(a,b)}
function Nt(a){P("transport_use_scheduler")?Hi.Ca(a):window.clearTimeout(a)}
function Rt(a){var b,c,d,e,f,g,h,l,m,n;return x(function(q){return 1==q.h?(d=null==(b=a)?void 0:null==(c=b.responseContext)?void 0:c.globalConfigGroup,e=mt(d,Lk),g=null==(f=d)?void 0:f.hotHashData,h=mt(d,Kk),m=null==(l=d)?void 0:l.coldHashData,(n=gt().resolve(new bt(jq)))?g?e?w(q,kq(n,g,e),2):w(q,kq(n,g),2):q.A(2):q.return()):m?h?w(q,lq(n,m,h),0):w(q,lq(n,m),0):q.A(0)})}
;var Yt=y.ytLoggingGelSequenceIdObj_||{};A("ytLoggingGelSequenceIdObj_",Yt);
function Zt(a,b,c,d){d=void 0===d?{}:d;var e={},f=Math.round(d.timestamp||T());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;P("enable_unknown_lact_fix_on_html5")&&Ms();a=Ps();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};P("log_sequence_info_on_gel_web")&&d.sequenceGroup&&(a=e.context,b=d.sequenceGroup,b={index:$t(b),groupKey:b},a.sequence=b,d.endOfSequence&&delete Yt[d.sequenceGroup]);(d.sendIsolatedPayload?Jt:Bt)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,
dangerousLogToVisitorSession:d.dangerousLogToVisitorSession},c)}
function au(a){Ht(void 0,void 0,void 0===a?!1:a)}
function $t(a){Yt[a]=a in Yt?Yt[a]+1:0;return Yt[a]}
;var bu=[];function Do(a,b,c){c=void 0===c?{}:c;var d=zs;O("ytLoggingEventsDefaultDisabled",!1)&&zs===zs&&(d=null);P("web_all_payloads_via_jspb")?(c.timestamp||(c.timestamp=T()),bu.push({Mc:a,payload:b,options:c})):Zt(a,b,d,c)}
;var cu=y.ytLoggingGelSequenceIdObj_||{};A("ytLoggingGelSequenceIdObj_",cu);
function du(a,b,c){c=void 0===c?{}:c;var d=Math.round(c.timestamp||T());G(a,1,d<Number.MAX_SAFE_INTEGER?d:0);var e=Ps();d=new pm;G(d,1,c.timestamp||!isFinite(e)?-1:e);if(P("log_sequence_info_on_gel_web")&&c.sequenceGroup){e=c.sequenceGroup;var f=$t(e),g=new om;G(g,2,f);G(g,1,e);H(d,om,3,g);c.endOfSequence&&delete cu[c.sequenceGroup]}H(a,pm,33,d);(c.sendIsolatedPayload?Lt:Ft)({endpoint:"log_event",payload:a,cttAuthInfo:c.cttAuthInfo,dangerousLogToVisitorSession:c.dangerousLogToVisitorSession},b)}
;function eu(a,b){b=void 0===b?{}:b;var c=!1;O("ytLoggingEventsDefaultDisabled",!1)&&(c=!0);du(a,c?null:zs,b)}
;function fu(a,b,c){var d=new qm;le(d,dm,72,rm,a);c?du(d,c,b):eu(d,b)}
function gu(a,b,c){var d=new qm;le(d,cm,73,rm,a);c?du(d,c,b):eu(d,b)}
function hu(a,b,c){var d=new qm;le(d,bm,78,rm,a);c?du(d,c,b):eu(d,b)}
function iu(a,b,c){var d=new qm;le(d,em,208,rm,a);c?du(d,c,b):eu(d,b)}
function ju(a,b,c){var d=new qm;le(d,Xl,156,rm,a);c?du(d,c,b):eu(d,b)}
function ku(a,b,c){var d=new qm;le(d,Zl,215,rm,a);c?du(d,c,b):eu(d,b)}
;var lu=new Set,mu=0,nu=0,ou=0,pu=[],qu=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function Co(a){ru(a)}
function su(a){ru(a,"WARNING")}
function ru(a,b,c,d,e,f,g){f=void 0===f?{}:f;f.name=c||O("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||O("INNERTUBE_CONTEXT_CLIENT_VERSION");var h=f,l=void 0===b?"ERROR":b,m=void 0===g?!1:g;l=void 0===l?"ERROR":l;m=void 0===m?!1:m;if(a){a.hasOwnProperty("level")&&a.level&&(l=a.level);if(P("console_log_js_exceptions")){var n=[];n.push("Name: "+a.name);n.push("Message: "+a.message);a.hasOwnProperty("params")&&n.push("Error Params: "+JSON.stringify(a.params));a.hasOwnProperty("args")&&n.push("Error args: "+
JSON.stringify(a.args));n.push("File name: "+a.fileName);n.push("Stacktrace: "+a.stack);window.console.log(n.join("\n"),a)}if(!(5<=mu)){var q=pu,u=Pe(a),t=u.message||"Unknown Error",z=u.name||"UnknownError",C=u.stack||a.i||"Not available";if(C.startsWith(z+": "+t)){var E=C.split("\n");E.shift();C=E.join("\n")}var M=u.lineNumber||"Not available",S=u.fileName||"Not available",Q=C,W=0;if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var fa=0;fa<a.args.length&&!(W=Ln(a.args[fa],"params."+fa,h,W),
500<=W);fa++);else if(a.hasOwnProperty("params")&&a.params){var ma=a.params;if("object"===typeof a.params)for(var Ra in ma){if(ma[Ra]){var Ca="params."+Ra,ya=Nn(ma[Ra]);h[Ca]=ya;W+=Ca.length+ya.length;if(500<W)break}}else h.params=Nn(ma)}if(q.length)for(var na=0;na<q.length&&!(W=Ln(q[na],"params.context."+na,h,W),500<=W);na++);navigator.vendor&&!h.hasOwnProperty("vendor")&&(h["device.vendor"]=navigator.vendor);var J={message:t,name:z,lineNumber:M,fileName:S,stack:Q,params:h,sampleWeight:1},Oc=Number(a.columnNumber);
isNaN(Oc)||(J.lineNumber=J.lineNumber+":"+Oc);if("IGNORED"===a.level)var Pc=0;else a:{for(var ff=Hn(),gf=r(ff.Ta),ha=gf.next();!ha.done;ha=gf.next()){var Eh=ha.value;if(J.message&&J.message.match(Eh.Ag)){Pc=Eh.weight;break a}}for(var Fh=r(ff.Pa),ml=Fh.next();!ml.done;ml=Fh.next()){var tr=ml.value;if(tr.callback(J)){Pc=tr.weight;break a}}Pc=1}J.sampleWeight=Pc;for(var ur=r(Cn),nl=ur.next();!nl.done;nl=ur.next()){var ol=nl.value;if(ol.lc[J.name])for(var vr=r(ol.lc[J.name]),pl=vr.next();!pl.done;pl=
vr.next()){var wr=pl.value,Gh=J.message.match(wr.regexp);if(Gh){J.params["params.error.original"]=Gh[0];for(var ql=wr.groups,xr={},Nd=0;Nd<ql.length;Nd++)xr[ql[Nd]]=Gh[Nd+1],J.params["params.error."+ql[Nd]]=Gh[Nd+1];J.message=ol.Ic(xr);break}}}J.params||(J.params={});var yr=Hn();J.params["params.errorServiceSignature"]="msg="+yr.Ta.length+"&cb="+yr.Pa.length;J.params["params.serviceWorker"]="false";y.document&&y.document.querySelectorAll&&(J.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));
Cb("sample").constructor!==Ab&&(J.params["params.fconst"]="true");window.yterr&&"function"===typeof window.yterr&&window.yterr(J);if(0!==J.sampleWeight&&!lu.has(J.message)){if(m&&P("web_enable_error_204"))tu(void 0===l?"ERROR":l,J);else{var Qc=l;Qc=void 0===Qc?"ERROR":Qc;if("ERROR"===Qc){In.bb("handleError",J);if(P("record_app_crashed_web")&&0===ou&&1===J.sampleWeight)if(ou++,P("errors_via_jspb")){var qy=new Ol;var Ar=G(qy,1,1);if(!P("report_client_error_with_app_crash_ks")){var ry=new Ml,sy=new Ll,
ty=new Kl,uy=new Jl;var vy=G(uy,1,J.message);var wy=H(ty,Jl,3,vy);var xy=H(sy,Kl,5,wy);var yy=H(ry,Ll,9,xy);H(Ar,Ml,4,yy)}var Br=new qm;le(Br,Ol,20,rm,Ar);eu(Br)}else{var Cr={appCrashType:"APP_CRASH_TYPE_BREAKPAD"};P("report_client_error_with_app_crash_ks")||(Cr.systemHealth={crashData:{clientError:{logMessage:{message:J.message}}}});Do("appCrashed",Cr)}nu++}else"WARNING"===Qc&&In.bb("handleWarning",J);if(P("kevlar_gel_error_routing"))a:{var hf=Qc;if(P("errors_via_jspb")){if(uu())var Er=void 0;else{var Od=
new Gl;G(Od,1,J.stack);J.fileName&&G(Od,4,J.fileName);var Sb=J.lineNumber&&J.lineNumber.split?J.lineNumber.split(":"):[];0!==Sb.length&&(1!==Sb.length||isNaN(Number(Sb[0]))?2!==Sb.length||isNaN(Number(Sb[0]))||isNaN(Number(Sb[1]))||(oe(Od,2,Number(Sb[0])),oe(Od,3,Number(Sb[1]))):oe(Od,2,Number(Sb[0])));var Rc=new Jl;G(Rc,1,J.message);G(Rc,3,J.name);oe(Rc,6,J.sampleWeight);"ERROR"===hf?G(Rc,2,2):"WARNING"===hf?G(Rc,2,1):G(Rc,2,0);var rl=new Hl;G(rl,1,!0);le(rl,Gl,3,Il,Od);var oc=new El;G(oc,3,window.location.href);
for(var Fr=O("FEXP_EXPERIMENTS",[]),sl=0;sl<Fr.length;sl++){var zy=Fr[sl];Ud(oc);fe(oc,5,2,!1,!1).push(zy)}var tl=O("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");if(!Mm()&&tl)for(var Gr=r(Object.keys(tl)),Sc=Gr.next();!Sc.done;Sc=Gr.next()){var Hr=Sc.value,ul=new Dl;G(ul,1,Hr);G(ul,2,String(tl[Hr]));ne(oc,4,Dl,ul)}var vl=J.params;if(vl){var Ir=r(Object.keys(vl));for(Sc=Ir.next();!Sc.done;Sc=Ir.next()){var Jr=Sc.value,wl=new Dl;G(wl,1,"client."+Jr);G(wl,2,String(vl[Jr]));ne(oc,4,Dl,wl)}}var Kr=O("SERVER_NAME"),
Lr=O("SERVER_VERSION");if(Kr&&Lr){var xl=new Dl;G(xl,1,"server.name");G(xl,2,Kr);ne(oc,4,Dl,xl);var yl=new Dl;G(yl,1,"server.version");G(yl,2,Lr);ne(oc,4,Dl,yl)}var Hh=new Kl;H(Hh,El,1,oc);H(Hh,Hl,2,rl);H(Hh,Jl,3,Rc);Er=Hh}var Mr=Er;if(!Mr)break a;var Nr=new qm;le(Nr,Kl,163,rm,Mr);eu(Nr)}else{if(uu())var Or=void 0;else{var jf={stackTrace:J.stack};J.fileName&&(jf.filename=J.fileName);var Tb=J.lineNumber&&J.lineNumber.split?J.lineNumber.split(":"):[];0!==Tb.length&&(1!==Tb.length||isNaN(Number(Tb[0]))?
2!==Tb.length||isNaN(Number(Tb[0]))||isNaN(Number(Tb[1]))||(jf.lineNumber=Number(Tb[0]),jf.columnNumber=Number(Tb[1])):jf.lineNumber=Number(Tb[0]));var zl={level:"ERROR_LEVEL_UNKNOWN",message:J.message,errorClassName:J.name,sampleWeight:J.sampleWeight};"ERROR"===hf?zl.level="ERROR_LEVEL_ERROR":"WARNING"===hf&&(zl.level="ERROR_LEVEL_WARNNING");var Ay={isObfuscated:!0,browserStackInfo:jf},Pd={pageUrl:window.location.href,kvPairs:[]};O("FEXP_EXPERIMENTS")&&(Pd.experimentIds=O("FEXP_EXPERIMENTS"));var Al=
O("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");if(!Mm()&&Al)for(var Pr=r(Object.keys(Al)),Tc=Pr.next();!Tc.done;Tc=Pr.next()){var Qr=Tc.value;Pd.kvPairs.push({key:Qr,value:String(Al[Qr])})}var Bl=J.params;if(Bl){var Rr=r(Object.keys(Bl));for(Tc=Rr.next();!Tc.done;Tc=Rr.next()){var Sr=Tc.value;Pd.kvPairs.push({key:"client."+Sr,value:String(Bl[Sr])})}}var Tr=O("SERVER_NAME"),Ur=O("SERVER_VERSION");Tr&&Ur&&(Pd.kvPairs.push({key:"server.name",value:Tr}),Pd.kvPairs.push({key:"server.version",value:Ur}));
Or={errorMetadata:Pd,stackTrace:Ay,logMessage:zl}}var Vr=Or;if(!Vr)break a;Do("clientError",Vr)}if("ERROR"===hf||P("errors_flush_gel_always_killswitch"))b:{if(P("web_fp_via_jspb")&&(au(!0),!P("web_fp_via_jspb_and_json")))break b;au()}}P("suppress_error_204_logging")||tu(Qc,J)}try{lu.add(J.message)}catch(mA){}mu++}}}}
function uu(){for(var a=r(qu),b=a.next();!b.done;b=a.next())if(Bn(b.value.toLowerCase()))return!0;return!1}
function tu(a,b){var c=b.params||{};a={urlParams:{a:"logerror",t:"jserror",type:b.name,msg:b.message.substr(0,250),line:b.lineNumber,level:a,"client.name":c.name},postParams:{url:O("PAGE_NAME",window.location.href),file:b.fileName},method:"POST"};c.version&&(a["client.version"]=c.version);if(a.postParams){b.stack&&(a.postParams.stack=b.stack);b=r(Object.keys(c));for(var d=b.next();!d.done;d=b.next())d=d.value,a.postParams["client."+d]=c[d];if(c=O("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS"))for(b=r(Object.keys(c)),
d=b.next();!d.done;d=b.next())d=d.value,a.postParams[d]=c[d];c=O("SERVER_NAME");b=O("SERVER_VERSION");c&&b&&(a.postParams["server.name"]=c,a.postParams["server.version"]=b)}rn(O("ECATCHER_REPORT_HOST","")+"/error_204",a)}
function vu(a){var b=La.apply(1,arguments);a.args||(a.args=[]);a.args.push.apply(a.args,ja(b))}
;function wu(){this.register=new Map}
function xu(a){a=r(a.register.values());for(var b=a.next();!b.done;b=a.next())b.value.Fg("ABORTED")}
wu.prototype.clear=function(){xu(this);this.register.clear()};
var yu=new wu;var zu=Date.now().toString();function Au(){for(var a=Array(16),b=0;16>b;b++){for(var c=Date.now(),d=0;d<c%23;d++)a[b]=Math.random();a[b]=Math.floor(256*Math.random())}if(zu)for(b=1,c=0;c<zu.length;c++)a[b%16]=a[b%16]^a[(b-1)%16]/4^zu.charCodeAt(c),b++;return a}
function Bu(){if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];return a}catch(d){}return Au()}
function Cu(){for(var a=Bu(),b=[],c=0;c<a.length;c++)b.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(a[c]&63));return b.join("")}
;var Du=y.ytLoggingDocDocumentNonce_;Du||(Du=Cu(),A("ytLoggingDocDocumentNonce_",Du));var Eu=Du;var Fu={zf:0,xf:1,yf:2,Zf:3,Af:4,fg:5,ag:6,eg:7,cg:8,dg:9,0:"DEFAULT",1:"CHAT",2:"CONVERSATIONS",3:"MINIPLAYER",4:"DIALOG",5:"VOZ",6:"MUSIC_WATCH_TABS",7:"SHARE",8:"PUSH_NOTIFICATIONS",9:"RICH_GRID_WATCH"};function Gu(a){this.h=a}
function Hu(a){return new Gu({trackingParams:a})}
Gu.prototype.getAsJson=function(){var a={};void 0!==this.h.trackingParams?a.trackingParams=this.h.trackingParams:(a.veType=this.h.veType,void 0!==this.h.veCounter&&(a.veCounter=this.h.veCounter),void 0!==this.h.elementIndex&&(a.elementIndex=this.h.elementIndex));void 0!==this.h.dataElement&&(a.dataElement=this.h.dataElement.getAsJson());void 0!==this.h.youtubeData&&(a.youtubeData=this.h.youtubeData);this.h.isCounterfactual&&(a.isCounterfactual=!0);return a};
Gu.prototype.getAsJspb=function(){var a=new Ql;if(void 0!==this.h.trackingParams){var b=this.h.trackingParams;if(null!=b)if("string"===typeof b)b=b?new Ed(b,Bd):Cd||(Cd=new Ed(null,Bd));else if(b.constructor!==Ed)if(Ad(b))b instanceof Uint8Array||Array.isArray(b),b=b.length?new Ed(new Uint8Array(b),Bd):Cd||(Cd=new Ed(null,Bd));else throw Error();G(a,1,b)}else void 0!==this.h.veType&&oe(a,2,this.h.veType),void 0!==this.h.veCounter&&oe(a,6,this.h.veCounter),void 0!==this.h.elementIndex&&oe(a,3,this.h.elementIndex),
this.h.isCounterfactual&&G(a,5,!0);void 0!==this.h.dataElement&&(b=this.h.dataElement.getAsJspb(),H(a,Ql,7,b));void 0!==this.h.youtubeData&&H(a,Qk,8,this.h.jspbYoutubeData);return a};
Gu.prototype.toString=function(){return JSON.stringify(this.getAsJson())};
Gu.prototype.isClientVe=function(){return!this.h.trackingParams&&!!this.h.veType};function Iu(a){a=void 0===a?0:a;return 0===a?"client-screen-nonce":"client-screen-nonce."+a}
function Ju(a){a=void 0===a?0:a;return 0===a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function Ku(a){return O(Ju(void 0===a?0:a))}
A("yt_logging_screen.getRootVeType",Ku);function Lu(a){return(a=Ku(void 0===a?0:a))?new Gu({veType:a,youtubeData:void 0,jspbYoutubeData:void 0}):null}
function Mu(){var a=O("csn-to-ctt-auth-info");a||(a={},Lm("csn-to-ctt-auth-info",a));return a}
function Nu(a){a=O(Iu(void 0===a?0:a));if(!a&&!O("USE_CSN_FALLBACK",!0))return null;a||(a="UNDEFINED_CSN");return a?a:null}
A("yt_logging_screen.getCurrentCsn",Nu);function Ou(a){for(var b=r(Object.values(Fu)),c=b.next();!c.done;c=b.next())if(Nu(c.value)===a)return!0;return!1}
function Pu(a,b,c){var d=Mu();(c=Nu(c))&&delete d[c];b&&(d[a]=b)}
function Qu(a){return Mu()[a]}
A("yt_logging_screen.getCttAuthInfo",Qu);function Ru(a,b,c,d){c=void 0===c?0:c;if(a!==O(Iu(c))||b!==O(Ju(c)))if(Pu(a,d,c),Lm(Iu(c),a),Lm(Ju(c),b),b=function(){setTimeout(function(){if(a)if(P("web_time_via_jspb")){var e=new Rl;G(e,1,Eu);G(e,2,a);var f=new qm;le(f,Rl,111,rm,e);eu(f)}else Do("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:Eu,clientScreenNonce:a})},0)},"requestAnimationFrame"in window)try{window.requestAnimationFrame(b)}catch(e){b()}else b()}
A("yt_logging_screen.setCurrentScreen",Ru);var Su=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};A("yt.msgs_",Su);function Tu(a){Gm(Su,arguments)}
;var Uu=[3611,27686,85013,23462,157557,42016,26926,51236,79148,50160,77504,153587,87907,18630,177018,177023,54445,80935,152172,105675,150723,37521,147285,47786,98349,168271,168954,168277,168273,168270,123695,6827,29434,171388,7282,124448,32276,76278,147868,147869,93911,106531,177843,27259,27262,27263,21759,160866,177957,171243,160789,171244,171241,171245,171242,177958,177565,175492,175493,175494,175495,175496,175497,38408,175498,175503,175504,175505,175506,175507,175508,80637,68727,68728,80353,80356,
74610,45707,83962,83970,46713,166591,89711,74612,155792,93265,74611,131380,128979,139311,128978,131391,105350,139312,134800,131392,113533,93252,99357,94521,114252,113532,94522,94583,88E3,139580,93253,93254,94387,94388,93255,97424,72502,110111,76019,117092,117093,89431,110466,77240,60508,148123,148124,137401,137402,137046,73393,113534,92098,131381,84517,83759,162711,162712,80357,86113,72598,168413,72733,107349,124275,118203,133275,160157,152569,156651,133274,160159,160158,133272,133273,133276,144507,
143247,175994,156652,143248,143249,143250,143251,156653,144401,117431,133797,153964,128572,133405,117429,117430,177950,174734,177951,117432,173996,173995,174953,173994,173997,120080,117259,156655,156654,121692,145656,156656,145655,145653,145654,145657,132972,133051,133658,132971,97615,143359,143356,143361,143358,143360,143357,142303,143353,172859,143354,144479,143355,31402,133624,146477,133623,133622,133621,84774,160801,95117,172721,150497,98930,98931,98932,153320,153321,43347,129889,149123,45474,
100352,98443,117985,74613,155911,74614,64502,136032,74615,74616,122224,74617,77820,74618,93278,93274,93275,93276,22110,29433,133798,132295,120541,82047,113550,75836,75837,42352,84512,76065,75989,51879,16623,32594,27240,32633,74858,156999,3945,16989,45520,25488,25492,25494,55760,14057,18451,57204,57203,17897,18198,17898,17909,43980,46220,11721,147994,49954,96369,3854,151633,56251,159108,25624,152036,16906,99999,68172,47973,72773,26970,26971,96805,17752,73233,109512,22256,14115,22696,89278,89277,109513,
43278,43459,43464,89279,43717,55764,22255,147912,89281,40963,43277,43442,91824,120137,96367,36850,72694,37414,36851,124863,121343,73491,54473,166861,43375,46674,143815,139095,144402,149968,149969,32473,72901,72906,50612,50613,50942,84938,84943,84939,84941,84944,84940,84942,35585,51926,79983,18921,57893,41182,135732,33424,22207,36229,22206,22205,44763,33427,67793,22182,37091,34650,50617,22287,25144,97917,62397,150871,150874,125598,137935,36961,108035,27426,27857,27846,27854,69692,61411,39299,38696,
62520,36382,108701,50663,36387,14908,37533,105443,61635,62274,161670,133818,65702,65703,65701,76256,166382,37671,49953,36216,28237,173718,39553,29222,26107,38050,26108,120745,26109,26110,66881,28236,14586,160598,57929,74723,44098,173689,44099,23528,61699,134104,134103,59149,173191,173192,173193,101951,171502,97346,118051,95102,64882,119505,63595,63349,95101,75240,27039,68823,21537,83464,75707,170215,83113,101952,101953,79610,125755,24402,24400,32925,57173,156421,122502,145268,138480,64423,64424,33986,
100828,129089,21409,135155,135156,135157,135158,158225,135159,135160,167651,135161,135162,135163,158226,158227,135164,135165,135166,11070,11074,17880,30709,30707,30711,30710,30708,146143,63648,63649,111059,5754,20445,151308,151152,130975,130976,167637,110386,113746,66557,17310,28631,21589,164817,168011,154946,68012,162617,60480,138664,141121,164502,31571,141978,150105,150106,150107,150108,76980,41577,45469,38669,13768,13777,141842,62985,4724,59369,43927,43928,12924,100355,56219,27669,10337,47896,
122629,139723,139722,121258,107598,127991,96639,107536,130169,96661,145188,96658,116646,159428,168611,168612,121122,96660,127738,127083,155281,162959,163566,147842,104443,96659,147595,106442,162776,134840,63667,63668,63669,130686,147036,78314,147799,174049,148649,55761,127098,134841,96368,67374,48992,146176,176105,49956,31961,26388,23811,5E4,126250,96370,47355,47356,37935,45521,21760,83769,49977,49974,93497,93498,34325,140759,115803,123707,100081,35309,68314,25602,100339,170873,143516,59018,18248,
50625,9729,37168,37169,21667,16749,18635,39305,18046,53969,8213,93926,102852,110099,22678,69076,137575,139224,100856,154430,17736,3832,147111,55759,64031,93044,93045,170701,170702,34388,167841,170419,17657,17655,39579,39578,170412,77448,8196,11357,69877,8197,168501,156512,161613,156509,161612,161614,82039];function Vu(){var a=ub(Wu),b;return(new Rf(function(c,d){a.onSuccess=function(e){kn(e)?c(new Xu(e)):d(new Yu("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new Yu("Unknown request error","net.unknown",e))};
a.onTimeout=function(e){d(new Yu("Request timed out","net.timeout",e))};
b=rn("//googleads.g.doubleclick.net/pagead/id",a)})).sc(function(c){c instanceof Yf&&b.abort();
return Wf(c)})}
function Yu(a,b,c){bb.call(this,a+", errorCode="+b);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"}
v(Yu,bb);function Xu(a){this.xhr=a}
;function Zu(){this.i=0;this.h=null}
Zu.prototype.then=function(a,b,c){return 1===this.i&&a?(a=a.call(c,this.h))&&"function"===typeof a.then?a:$u(a):2===this.i&&b?(a=b.call(c,this.h))&&"function"===typeof a.then?a:av(a):this};
Zu.prototype.getValue=function(){return this.h};
Zu.prototype.$goog_Thenable=!0;function av(a){var b=new Zu;a=void 0===a?null:a;b.i=2;b.h=void 0===a?null:a;return b}
function $u(a){var b=new Zu;a=void 0===a?null:a;b.i=1;b.h=void 0===a?null:a;return b}
;function bv(a,b){var c=void 0===c?{}:c;a={method:void 0===b?"POST":b,mode:an(a)?"same-origin":"cors",credentials:an(a)?"same-origin":"include"};b={};for(var d=r(Object.keys(c)),e=d.next();!e.done;e=d.next())e=e.value,c[e]&&(b[e]=c[e]);0<Object.keys(b).length&&(a.headers=b);return a}
;function cv(){return Rg()||(ld||md)&&Bn("applewebkit")&&!Bn("version")&&(!Bn("safari")||Bn("gsa/"))||bd&&Bn("version/")?!0:O("EOM_VISITOR_DATA")?!1:!0}
;function dv(a){a:{var b=a.raw_embedded_player_response;if(!b&&(a=a.embedded_player_response))try{b=JSON.parse(a)}catch(d){b="EMBEDDED_PLAYER_MODE_UNKNOWN";break a}if(b)b:{for(var c in kl)if(kl[c]==b.embeddedPlayerMode){b=kl[c];break b}b="EMBEDDED_PLAYER_MODE_UNKNOWN"}else b="EMBEDDED_PLAYER_MODE_UNKNOWN"}return"EMBEDDED_PLAYER_MODE_PFL"===b}
;function ev(a){bb.call(this,a.message||a.description||a.name);this.isMissing=a instanceof fv;this.isTimeout=a instanceof Yu&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof Yf}
v(ev,bb);ev.prototype.name="BiscottiError";function fv(){bb.call(this,"Biscotti ID is missing from server")}
v(fv,bb);fv.prototype.name="BiscottiMissingError";var Wu={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},gv=null;function hv(){if(P("disable_biscotti_fetch_entirely_for_all_web_clients"))return Error("Biscotti id fetching has been disabled entirely.");if(!cv())return Error("User has not consented - not fetching biscotti id.");var a=O("PLAYER_VARS",{});if("1"==sb(a))return Error("Biscotti ID is not available in private embed mode");if(dv(a))return Error("Biscotti id fetching has been disabled for pfl.")}
function Em(){var a=hv();if(void 0!==a)return Wf(a);gv||(gv=Vu().then(iv).sc(function(b){return jv(2,b)}));
return gv}
function iv(a){a=a.xhr.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new fv;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new fv;a=a.id;Fm(a);gv=$u(a);kv(18E5,2);return a}
function jv(a,b){b=new ev(b);Fm("");gv=av(b);0<a&&kv(12E4,a-1);throw b;}
function kv(a,b){ln(function(){Vu().then(iv,function(c){return jv(b,c)}).sc(db)},a)}
function lv(){try{var a=B("yt.ads.biscotti.getId_");return a?a():Em()}catch(b){return Wf(b)}}
;function mv(a){if("1"!=sb(O("PLAYER_VARS",{}))){a&&Dm();try{lv().then(function(){},function(){}),ln(mv,18E5)}catch(b){Qm(b)}}}
;function nv(){var a=$n(),b=co(119),c=1<window.devicePixelRatio;if(document.body&&Ri(document.body,"exp-invert-logo"))if(c&&!Ri(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!Ri(d,"inverted-hdpi")){var e=Pi(d);Qi(d,e+(0<e.length?" inverted-hdpi":"inverted-hdpi"))}}else!c&&Ri(document.body,"inverted-hdpi")&&Si();if(b!=c){b="f"+(Math.floor(119/31)+1);d=eo(b)||0;d=c?d|67108864:d&-67108865;0===d?delete Xn[b]:(c=d.toString(16),Xn[b]=c.toString());
c=!0;P("web_secure_pref_cookie_killswitch")&&(c=!1);b=a.h;d=[];for(var f in Xn)Xn.hasOwnProperty(f)&&d.push(f+"="+encodeURIComponent(String(Xn[f])));Un(b,d.join("&"),63072E3,a.i,c)}}
;var ov=new Map([["dark","USER_INTERFACE_THEME_DARK"],["light","USER_INTERFACE_THEME_LIGHT"]]);function pv(){var a=void 0===a?window.location.href:a;if(P("kevlar_disable_theme_param"))return null;vc(wc(5,a));try{var b=Zm(a).theme;return ov.get(b)||null}catch(c){}return null}
;function qv(){this.h={};if(this.i=Wn()){var a=Pg.get("CONSISTENCY",void 0);a&&rv(this,{encryptedTokenJarContents:a})}}
qv.prototype.handleResponse=function(a,b){if(!b)throw Error("request needs to be passed into ConsistencyService");var c,d;b=(null==(c=b.La.context)?void 0:null==(d=c.request)?void 0:d.consistencyTokenJars)||[];var e;if(a=null==(e=a.responseContext)?void 0:e.consistencyTokenJar){e=r(b);for(c=e.next();!c.done;c=e.next())delete this.h[c.value.encryptedTokenJarContents];rv(this,a)}};
function rv(a,b){if(b.encryptedTokenJarContents&&(a.h[b.encryptedTokenJarContents]=b,"string"===typeof b.expirationSeconds)){var c=Number(b.expirationSeconds);setTimeout(function(){delete a.h[b.encryptedTokenJarContents]},1E3*c);
a.i&&Un("CONSISTENCY",b.encryptedTokenJarContents,c,void 0,!0)}}
;var sv=window.location.hostname.split(".").slice(-2).join(".");function tv(){var a=O("LOCATION_PLAYABILITY_TOKEN");"TVHTML5"===O("INNERTUBE_CLIENT_NAME")&&(this.h=uv(this))&&(a=this.h.get("yt-location-playability-token"));a&&(this.locationPlayabilityToken=a,this.i=void 0)}
var vv;function wv(){vv=B("yt.clientLocationService.instance");vv||(vv=new tv,A("yt.clientLocationService.instance",vv));return vv}
k=tv.prototype;k.setLocationOnInnerTubeContext=function(a){a.client||(a.client={});this.i?(a.client.locationInfo||(a.client.locationInfo={}),a.client.locationInfo.latitudeE7=Math.floor(1E7*this.i.coords.latitude),a.client.locationInfo.longitudeE7=Math.floor(1E7*this.i.coords.longitude),a.client.locationInfo.horizontalAccuracyMeters=Math.round(this.i.coords.accuracy),a.client.locationInfo.forceLocationPlayabilityTokenRefresh=!0):this.locationPlayabilityToken&&(a.client.locationPlayabilityToken=this.locationPlayabilityToken)};
k.handleResponse=function(a){var b;a=null==(b=a.responseContext)?void 0:b.locationPlayabilityToken;void 0!==a&&(this.locationPlayabilityToken=a,this.i=void 0,"TVHTML5"===O("INNERTUBE_CLIENT_NAME")?(this.h=uv(this))&&this.h.set("yt-location-playability-token",a,15552E3):Un("YT_CL",JSON.stringify({loctok:a}),15552E3,sv,!0))};
function uv(a){return void 0===a.h?new uo("yt-client-location"):a.h}
k.clearLocationPlayabilityToken=function(a){"TVHTML5"===a?(this.h=uv(this))&&this.h.remove("yt-location-playability-token"):Vn("YT_CL")};
k.getCurrentPositionFromGeolocation=function(){var a=this;if(!(navigator&&navigator.geolocation&&navigator.geolocation.getCurrentPosition))return Promise.reject(Error("Geolocation unsupported"));var b=!1,c=1E4;"MWEB"===O("INNERTUBE_CLIENT_NAME")&&(b=!0,c=15E3);return new Promise(function(d,e){navigator.geolocation.getCurrentPosition(function(f){a.i=f;d(f)},function(f){e(f)},{enableHighAccuracy:b,
maximumAge:0,timeout:c})})};
k.createUnpluggedLocationInfo=function(a){var b={};a=a.coords;if(null==a?0:a.latitude)b.latitudeE7=Math.floor(1E7*a.latitude);if(null==a?0:a.longitude)b.longitudeE7=Math.floor(1E7*a.longitude);if(null==a?0:a.accuracy)b.locationRadiusMeters=Math.round(a.accuracy);return b};function xv(a,b){var c,d=null==(c=mt(a,jl))?void 0:c.signal;if(d&&b.Qb&&(c=b.Qb[d]))return c();var e;if((c=null==(e=mt(a,hl))?void 0:e.request)&&b.ee&&(e=b.ee[c]))return e();for(var f in a)if(b.ed[f]&&(a=b.ed[f]))return a()}
;function yv(a){return function(){return new a}}
;var zv={},Av=(zv.WEB_UNPLUGGED="^unplugged/",zv.WEB_UNPLUGGED_ONBOARDING="^unplugged/",zv.WEB_UNPLUGGED_OPS="^unplugged/",zv.WEB_UNPLUGGED_PUBLIC="^unplugged/",zv.WEB_CREATOR="^creator/",zv.WEB_KIDS="^kids/",zv.WEB_EXPERIMENTS="^experiments/",zv.WEB_MUSIC="^music/",zv.WEB_REMIX="^music/",zv.WEB_MUSIC_EMBEDDED_PLAYER="^music/",zv.WEB_MUSIC_EMBEDDED_PLAYER="^main_app/|^sfv/",zv);
function Bv(a){var b=void 0===b?"UNKNOWN_INTERFACE":b;if(1===a.length)return a[0];var c=Av[b];if(c){var d=new RegExp(c),e=r(a);for(c=e.next();!c.done;c=e.next())if(c=c.value,d.exec(c))return c}var f=[];Object.entries(Av).forEach(function(g){var h=r(g);g=h.next().value;h=h.next().value;b!==g&&f.push(h)});
d=new RegExp(f.join("|"));a.sort(function(g,h){return g.length-h.length});
e=r(a);for(c=e.next();!c.done;c=e.next())if(c=c.value,!d.exec(c))return c;return a[0]}
;function Cv(){}
Cv.prototype.m=function(a,b,c){b=void 0===b?{}:b;c=void 0===c?Rn:c;var d=a.clickTrackingParams,e=this.l,f=!1;f=void 0===f?!1:f;e=void 0===e?!1:e;var g=O("INNERTUBE_CONTEXT");if(g){g=vb(g);P("web_no_tracking_params_in_shell_killswitch")||delete g.clickTracking;g.client||(g.client={});var h=g.client;"MWEB"===h.clientName&&(h.clientFormFactor=O("IS_TABLET")?"LARGE_FORM_FACTOR":"SMALL_FORM_FACTOR");h.screenWidthPoints=window.innerWidth;h.screenHeightPoints=window.innerHeight;h.screenPixelDensity=Math.round(window.devicePixelRatio||
1);h.screenDensityFloat=window.devicePixelRatio||1;h.utcOffsetMinutes=-Math.floor((new Date).getTimezoneOffset());var l=void 0===l?!1:l;$n();var m="USER_INTERFACE_THEME_LIGHT";co(165)?m="USER_INTERFACE_THEME_DARK":co(174)?m="USER_INTERFACE_THEME_LIGHT":!P("kevlar_legacy_browsers")&&window.matchMedia&&window.matchMedia("(prefers-color-scheme)").matches&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(m="USER_INTERFACE_THEME_DARK");l=l?m:pv()||m;h.userInterfaceTheme=l;if(!f){if(l=ko())h.connectionType=
l;P("web_log_effective_connection_type")&&(l=lo())&&(g.client.effectiveConnectionType=l)}var n;if(P("web_log_memory_total_kbytes")&&(null==(n=y.navigator)?0:n.deviceMemory)){var q;n=null==(q=y.navigator)?void 0:q.deviceMemory;g.client.memoryTotalKbytes=""+1E6*n}q=Zm(y.location.href);!P("web_populate_internal_geo_killswitch")&&q.internalcountrycode&&(h.internalGeo=q.internalcountrycode);"MWEB"===h.clientName||"WEB"===h.clientName?(h.mainAppWebInfo={graftUrl:y.location.href},P("kevlar_woffle")&&Sn.h&&
(q=Sn.h,h.mainAppWebInfo.pwaInstallabilityStatus=!q.h&&q.i?"PWA_INSTALLABILITY_STATUS_CAN_BE_INSTALLED":"PWA_INSTALLABILITY_STATUS_UNKNOWN"),h.mainAppWebInfo.webDisplayMode=Tn(),h.mainAppWebInfo.isWebNativeShareAvailable=navigator&&void 0!==navigator.share):"TVHTML5"===h.clientName&&(!P("web_lr_app_quality_killswitch")&&(q=O("LIVING_ROOM_APP_QUALITY"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||{},{appQuality:q})),q=O("LIVING_ROOM_CERTIFICATION_SCOPE"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||{},{certificationScope:q}));
if(!P("web_populate_time_zone_itc_killswitch")){b:{if("undefined"!==typeof Intl)try{var u=(new Intl.DateTimeFormat).resolvedOptions().timeZone;break b}catch(ma){}u=void 0}u&&(h.timeZone=u)}(u=fn())?h.experimentsToken=u:delete h.experimentsToken;u=gn();qv.h||(qv.h=new qv);h=qv.h.h;q=[];n=0;for(var t in h)q[n++]=h[t];g.request=Object.assign({},g.request,{internalExperimentFlags:u,consistencyTokenJars:q});!P("web_prequest_context_killswitch")&&(t=O("INNERTUBE_CONTEXT_PREQUEST_CONTEXT"))&&(g.request.externalPrequestContext=
t);u=$n();t=co(58);u=u.get("gsml","");g.user=Object.assign({},g.user);t&&(g.user.enableSafetyMode=t);u&&(g.user.lockedSafetyMode=!0);P("warm_op_csn_cleanup")?e&&(f=Nu())&&(g.clientScreenNonce=f):!f&&(f=Nu())&&(g.clientScreenNonce=f);d&&(g.clickTracking={clickTrackingParams:d});if(d=B("yt.mdx.remote.remoteClient_"))g.remoteClient=d;wv().setLocationOnInnerTubeContext(g);try{var z=bn(),C=z.bid;delete z.bid;g.adSignalsInfo={params:[],bid:C};var E=r(Object.entries(z));for(var M=E.next();!M.done;M=E.next()){var S=
r(M.value),Q=S.next().value,W=S.next().value;z=Q;C=W;d=void 0;null==(d=g.adSignalsInfo.params)||d.push({key:z,value:""+C})}}catch(ma){ru(ma)}E=g}else ru(Error("Error: No InnerTubeContext shell provided in ytconfig.")),E={};E={context:E};if(M=this.h(a)){this.i(E,M,b);var fa;b="/youtubei/v1/"+Bv(this.j());(M=null==(fa=mt(a.commandMetadata,il))?void 0:fa.apiUrl)&&(b=M);fa=b;(b=O("INNERTUBE_HOST_OVERRIDE"))&&(fa=String(b)+String(yc(fa)));b={};b.key=O("INNERTUBE_API_KEY");P("json_condensed_response")&&
(b.prettyPrint="false");fa=$m(fa,b||{},!1);a=Object.assign({},{command:a},void 0);a={input:fa,ib:bv(fa),La:E,config:a};a.config.Yb?a.config.Yb.identity=c:a.config.Yb={identity:c};return a}ru(new R("Error: Failed to create Request from Command.",a))};
da.Object.defineProperties(Cv.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!1}}});function Dv(){}
v(Dv,Cv);Dv.prototype.m=function(){return{input:"/getDatasyncIdsEndpoint",ib:bv("/getDatasyncIdsEndpoint","GET"),La:{}}};
Dv.prototype.j=function(){return[]};
Dv.prototype.h=function(){};
Dv.prototype.i=function(){};var Ev={},Fv=(Ev.GET_DATASYNC_IDS=yv(Dv),Ev);function Gv(a){var b=La.apply(1,arguments);if(!Hv(a)||b.some(function(d){return!Hv(d)}))throw Error("Only objects may be merged.");
b=r(b);for(var c=b.next();!c.done;c=b.next())Iv(a,c.value);return a}
function Iv(a,b){for(var c in b)if(Hv(b[c])){if(c in a&&!Hv(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});Iv(a[c],b[c])}else if(Jv(b[c])){if(c in a&&!Jv(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);Kv(a[c],b[c])}else a[c]=b[c];return a}
function Kv(a,b){b=r(b);for(var c=b.next();!c.done;c=b.next())c=c.value,Hv(c)?a.push(Iv({},c)):Jv(c)?a.push(Kv([],c)):a.push(c);return a}
function Hv(a){return"object"===typeof a&&!Array.isArray(a)}
function Jv(a){return"object"===typeof a&&Array.isArray(a)}
;function Lv(a){var b;(b=B("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},A("ytcsi."+(a||"")+"data_",b));return b}
function Mv(){var a=Lv();a.info||(a.info={});return a.info}
function Nv(a){a=Lv(a);a.metadata||(a.metadata={});return a.metadata}
function Ov(a){a=Lv(a);a.tick||(a.tick={});return a.tick}
function Pv(a){a=Lv(a);if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}else a.gel={gelTicks:{},gelInfos:{}};return a.gel}
function Qv(a){a=Pv(a);a.gelInfos||(a.gelInfos={});return a.gelInfos}
function Rv(a){var b=Lv(a).nonce;b||(b=Cu(),Lv(a).nonce=b);return b}
;function Sv(){var a=B("ytcsi.debug");a||(a=[],A("ytcsi.debug",a),A("ytcsi.reference",{}));return a}
function Tv(a){a=a||"";var b=B("ytcsi.reference");b||(Sv(),b=B("ytcsi.reference"));if(b[a])return b[a];var c=Sv(),d={timerName:a,info:{},tick:{},span:{},jspbInfo:[]};c.push(d);return b[a]=d}
;var U={},Uv=(U.auto_search="LATENCY_ACTION_AUTO_SEARCH",U.ad_to_ad="LATENCY_ACTION_AD_TO_AD",U.ad_to_video="LATENCY_ACTION_AD_TO_VIDEO",U["analytics.explore"]="LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE",U.app_startup="LATENCY_ACTION_APP_STARTUP",U["artist.analytics"]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS",U["artist.events"]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS",U["artist.presskit"]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE",U["asset.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_ASSET_CLAIMED_VIDEOS",
U["asset.composition"]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION",U["asset.embeds"]="LATENCY_ACTION_CREATOR_CMS_ASSET_EMBEDS",U["asset.issues"]="LATENCY_ACTION_CREATOR_CMS_ASSET_ISSUES",U["asset.licenses"]="LATENCY_ACTION_CREATOR_CMS_ASSET_LICENSES",U["asset.metadata"]="LATENCY_ACTION_CREATOR_CMS_ASSET_METADATA",U["asset.ownership"]="LATENCY_ACTION_CREATOR_CMS_ASSET_OWNERSHIP",U["asset.policy"]="LATENCY_ACTION_CREATOR_CMS_ASSET_POLICY",U["asset.references"]="LATENCY_ACTION_CREATOR_CMS_ASSET_REFERENCES",
U["asset.sound_recordings"]="LATENCY_ACTION_CREATOR_CMS_ASSET_SOUND_RECORDINGS",U["song.analytics"]="LATENCY_ACTION_CREATOR_SONG_ANALYTICS",U.browse="LATENCY_ACTION_BROWSE",U.cast_splash="LATENCY_ACTION_CAST_SPLASH",U.channels="LATENCY_ACTION_CHANNELS",U.creator_channel_dashboard="LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD",U["channel.analytics"]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS",U["channel.comments"]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS",U["channel.content"]="LATENCY_ACTION_CREATOR_POST_LIST",
U["channel.content.promotions"]="LATENCY_ACTION_CREATOR_PROMOTION_LIST",U["channel.copyright"]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT",U["channel.editing"]="LATENCY_ACTION_CREATOR_CHANNEL_EDITING",U["channel.monetization"]="LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION",U["channel.music"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC",U["channel.music_storefront"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT",U["channel.playlists"]="LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS",U["channel.translations"]=
"LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS",U["channel.videos"]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",U["channel.live_streaming"]="LATENCY_ACTION_CREATOR_LIVE_STREAMING",U.chips="LATENCY_ACTION_CHIPS",U["dialog.copyright_strikes"]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES",U["dialog.video_copyright"]="LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT",U["dialog.uploads"]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS",U.direct_playback="LATENCY_ACTION_DIRECT_PLAYBACK",U.embed="LATENCY_ACTION_EMBED",
U.entity_key_serialization_perf="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF",U.entity_key_deserialization_perf="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF",U.explore="LATENCY_ACTION_EXPLORE",U.home="LATENCY_ACTION_HOME",U.library="LATENCY_ACTION_LIBRARY",U.live="LATENCY_ACTION_LIVE",U.live_pagination="LATENCY_ACTION_LIVE_PAGINATION",U.onboarding="LATENCY_ACTION_ONBOARDING",U.owner="LATENCY_ACTION_CREATOR_CMS_DASHBOARD",U["owner.allowlist"]="LATENCY_ACTION_CREATOR_CMS_ALLOWLIST",U["owner.analytics"]=
"LATENCY_ACTION_CREATOR_CMS_ANALYTICS",U["owner.art_tracks"]="LATENCY_ACTION_CREATOR_CMS_ART_TRACKS",U["owner.assets"]="LATENCY_ACTION_CREATOR_CMS_ASSETS",U["owner.asset_groups"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUPS",U["owner.campaigns"]="LATENCY_ACTION_CREATOR_CMS_CAMPAIGNS",U["owner.channels"]="LATENCY_ACTION_CREATOR_CMS_CHANNELS",U["owner.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_CLAIMED_VIDEOS",U["owner.claims"]="LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING",U["owner.claims.manual"]="LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING",
U["owner.delivery"]="LATENCY_ACTION_CREATOR_CMS_CONTENT_DELIVERY",U["owner.issues"]="LATENCY_ACTION_CREATOR_CMS_ISSUES",U["owner.licenses"]="LATENCY_ACTION_CREATOR_CMS_LICENSES",U["owner.pitch_music"]="LATENCY_ACTION_CREATOR_CMS_PITCH_MUSIC",U["owner.policies"]="LATENCY_ACTION_CREATOR_CMS_POLICIES",U["owner.releases"]="LATENCY_ACTION_CREATOR_CMS_RELEASES",U["owner.reports"]="LATENCY_ACTION_CREATOR_CMS_REPORTS",U["owner.videos"]="LATENCY_ACTION_CREATOR_CMS_VIDEOS",U.parent_profile_settings="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS",
U.parent_tools_collection="LATENCY_ACTION_PARENT_TOOLS_COLLECTION",U.parent_tools_dashboard="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD",U.player_att="LATENCY_ACTION_PLAYER_ATTESTATION",U["post.comments"]="LATENCY_ACTION_CREATOR_POST_COMMENTS",U["post.edit"]="LATENCY_ACTION_CREATOR_POST_EDIT",U.prebuffer="LATENCY_ACTION_PREBUFFER",U.prefetch="LATENCY_ACTION_PREFETCH",U.profile_settings="LATENCY_ACTION_KIDS_PROFILE_SETTINGS",U.profile_switcher="LATENCY_ACTION_LOGIN",U.reel_watch="LATENCY_ACTION_REEL_WATCH",
U.results="LATENCY_ACTION_RESULTS",U["promotion.edit"]="LATENCY_ACTION_CREATOR_PROMOTION_EDIT",U.search_ui="LATENCY_ACTION_SEARCH_UI",U.search_suggest="LATENCY_ACTION_SUGGEST",U.search_zero_state="LATENCY_ACTION_SEARCH_ZERO_STATE",U.secret_code="LATENCY_ACTION_KIDS_SECRET_CODE",U.seek="LATENCY_ACTION_PLAYER_SEEK",U.settings="LATENCY_ACTION_SETTINGS",U.store="LATENCY_ACTION_STORE",U.tenx="LATENCY_ACTION_TENX",U.video_to_ad="LATENCY_ACTION_VIDEO_TO_AD",U.watch="LATENCY_ACTION_WATCH",U.watch_it_again=
"LATENCY_ACTION_KIDS_WATCH_IT_AGAIN",U["watch,watch7"]="LATENCY_ACTION_WATCH",U["watch,watch7_html5"]="LATENCY_ACTION_WATCH",U["watch,watch7ad"]="LATENCY_ACTION_WATCH",U["watch,watch7ad_html5"]="LATENCY_ACTION_WATCH",U.wn_comments="LATENCY_ACTION_LOAD_COMMENTS",U.ww_rqs="LATENCY_ACTION_WHO_IS_WATCHING",U["video.analytics"]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS",U["video.claims"]="LATENCY_ACTION_CREATOR_VIDEO_CLAIMS",U["video.comments"]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS",U["video.copyright"]=
"LATENCY_ACTION_CREATOR_VIDEO_COPYRIGHT",U["video.edit"]="LATENCY_ACTION_CREATOR_VIDEO_EDIT",U["video.editor"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR",U["video.editor_async"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC",U["video.live_settings"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS",U["video.live_streaming"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING",U["video.monetization"]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION",U["video.policy"]="LATENCY_ACTION_CREATOR_VIDEO_POLICY",U["video.rights_management"]=
"LATENCY_ACTION_CREATOR_VIDEO_RIGHTS_MANAGEMENT",U["video.translations"]="LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS",U.voice_assistant="LATENCY_ACTION_VOICE_ASSISTANT",U.cast_load_by_entity_to_watch="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH",U.networkless_performance="LATENCY_ACTION_NETWORKLESS_PERFORMANCE",U.gel_compression="LATENCY_ACTION_GEL_COMPRESSION",U.gel_jspb_serialize="LATENCY_ACTION_GEL_JSPB_SERIALIZE",U),V={},Vv=(V.ad_allowed="adTypesAllowed",V.yt_abt="adBreakType",V.ad_cpn="adClientPlaybackNonce",
V.ad_docid="adVideoId",V.yt_ad_an="adNetworks",V.ad_at="adType",V.aida="appInstallDataAgeMs",V.browse_id="browseId",V.p="httpProtocol",V.t="transportProtocol",V.cs="commandSource",V.cpn="clientPlaybackNonce",V.ccs="creatorInfo.creatorCanaryState",V.ctop="creatorInfo.topEntityType",V.csn="clientScreenNonce",V.docid="videoId",V.GetHome_rid="requestIds",V.GetSearch_rid="requestIds",V.GetPlayer_rid="requestIds",V.GetWatchNext_rid="requestIds",V.GetBrowse_rid="requestIds",V.GetLibrary_rid="requestIds",
V.is_continuation="isContinuation",V.is_nav="isNavigation",V.b_p="kabukiInfo.browseParams",V.is_prefetch="kabukiInfo.isPrefetch",V.is_secondary_nav="kabukiInfo.isSecondaryNav",V.nav_type="kabukiInfo.navigationType",V.prev_browse_id="kabukiInfo.prevBrowseId",V.query_source="kabukiInfo.querySource",V.voz_type="kabukiInfo.vozType",V.yt_lt="loadType",V.mver="creatorInfo.measurementVersion",V.yt_ad="isMonetized",V.nr="webInfo.navigationReason",V.nrsu="navigationRequestedSameUrl",V.pnt="performanceNavigationTiming",
V.prt="playbackRequiresTap",V.plt="playerInfo.playbackType",V.pis="playerInfo.playerInitializedState",V.paused="playerInfo.isPausedOnLoad",V.yt_pt="playerType",V.fmt="playerInfo.itag",V.yt_pl="watchInfo.isPlaylist",V.yt_pre="playerInfo.preloadType",V.yt_ad_pr="prerollAllowed",V.pa="previousAction",V.yt_red="isRedSubscriber",V.rce="mwebInfo.responseContentEncoding",V.rc="resourceInfo.resourceCache",V.scrh="screenHeight",V.scrw="screenWidth",V.st="serverTimeMs",V.ssdm="shellStartupDurationMs",V.br_trs=
"tvInfo.bedrockTriggerState",V.kebqat="kabukiInfo.earlyBrowseRequestInfo.abandonmentType",V.kebqa="kabukiInfo.earlyBrowseRequestInfo.adopted",V.label="tvInfo.label",V.is_mdx="tvInfo.isMdx",V.preloaded="tvInfo.isPreloaded",V.aac_type="tvInfo.authAccessCredentialType",V.upg_player_vis="playerInfo.visibilityState",V.query="unpluggedInfo.query",V.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",V.yt_vst="videoStreamType",V.vph="viewportHeight",V.vpw="viewportWidth",V.yt_vis="isVisible",V.rcl="mwebInfo.responseContentLength",
V.GetSettings_rid="requestIds",V.GetTrending_rid="requestIds",V.GetMusicSearchSuggestions_rid="requestIds",V.REQUEST_ID="requestIds",V),Wv="isContinuation isNavigation kabukiInfo.earlyBrowseRequestInfo.adopted kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized navigationRequestedSameUrl performanceNavigationTiming playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" "),Xv={},Yv=(Xv.ccs="CANARY_STATE_",
Xv.mver="MEASUREMENT_VERSION_",Xv.pis="PLAYER_INITIALIZED_STATE_",Xv.yt_pt="LATENCY_PLAYER_",Xv.pa="LATENCY_ACTION_",Xv.ctop="TOP_ENTITY_TYPE_",Xv.yt_vst="VIDEO_STREAM_TYPE_",Xv),Zv="all_vc ap aq c cbr cbrand cbrver cmodel cos cosver cplatform ctheme cver ei l_an l_mm plid srt yt_fss yt_li vpst vpni2 vpil2 icrc icrt pa GetAccountOverview_rid GetHistory_rid cmt d_vpct d_vpnfi d_vpni nsru pc pfa pfeh pftr pnc prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis ytu_pvis yt_ref yt_sts tds".split(" ");
function $v(a){return Uv[a]||"LATENCY_ACTION_UNKNOWN"}
function aw(a,b,c){c=Pv(c);if(c.gelInfos)c.gelInfos[a]=!0;else{var d={};c.gelInfos=(d[a]=!0,d)}if(a.match("_rid")){var e=a.split("_rid")[0];a="REQUEST_ID"}if(a in Vv){c=Vv[a];0<=fb(Wv,c)&&(b=!!b);a in Yv&&"string"===typeof b&&(b=Yv[a]+b.toUpperCase());a=b;b=c.split(".");for(var f=d={},g=0;g<b.length-1;g++){var h=b[g];f[h]={};f=f[h]}f[b[b.length-1]]="requestIds"===c?[{id:a,endpoint:e}]:a;return Gv({},d)}0<=fb(Zv,a)||su(new R("Unknown label logged with GEL CSI",a))}
;var X={LATENCY_ACTION_SHORTS_VIDEO_INGESTION_TRANSCODING:179,LATENCY_ACTION_KIDS_PROFILE_SWITCHER:90,LATENCY_ACTION_OFFLINE_THUMBNAIL_TRANSFER:100,LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC:46,LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR:37,LATENCY_ACTION_SPINNER_DISPLAYED:14,LATENCY_ACTION_PLAYABILITY_CHECK:10,LATENCY_ACTION_PROCESS:9,LATENCY_ACTION_APP_STARTUP:5,LATENCY_ACTION_GEL_JSPB_SERIALIZE:243,LATENCY_ACTION_GEL_COMPRESSION:215,LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE:204,LATENCY_ACTION_COMMERCE_ACTION_COMMAND_RPC:203,
LATENCY_ACTION_COMMERCE_TRANSACTION:184,LATENCY_ACTION_LOG_PAYMENT_SERVER_ANALYTICS_RPC:173,LATENCY_ACTION_GET_PAYMENT_INSTRUMENTS_PARAMS_RPC:172,LATENCY_ACTION_GET_FIX_INSTRUMENT_PARAMS_RPC:171,LATENCY_ACTION_RESUME_SUBSCRIPTION_RPC:170,LATENCY_ACTION_PAUSE_SUBSCRIPTION_RPC:169,LATENCY_ACTION_GET_OFFLINE_UPSELL_RPC:168,LATENCY_ACTION_GET_OFFERS_RPC:167,LATENCY_ACTION_GET_CANCELLATION_YT_FLOW_RPC:166,LATENCY_ACTION_GET_CANCELLATION_FLOW_RPC:165,LATENCY_ACTION_UPDATE_CROSS_DEVICE_OFFLINE_STATE_RPC:164,
LATENCY_ACTION_GET_OFFER_DETAILS_RPC:163,LATENCY_ACTION_CANCEL_RECURRENCE_TRANSACTION_RPC:162,LATENCY_ACTION_GET_TIP_MODULE_RPC:161,LATENCY_ACTION_HANDLE_TRANSACTION_RPC:160,LATENCY_ACTION_COMPLETE_TRANSACTION_RPC:159,LATENCY_ACTION_GET_CART_RPC:158,LATENCY_ACTION_THUMBNAIL_FETCH:156,LATENCY_ACTION_ABANDONED_DIRECT_PLAYBACK:154,LATENCY_ACTION_SHARE_VIDEO:153,LATENCY_ACTION_AD_TO_VIDEO_INT:152,LATENCY_ACTION_ABANDONED_BROWSE:151,LATENCY_ACTION_PLAYER_ROTATION:150,LATENCY_ACTION_GENERIC_WEB_VIEW:183,
LATENCY_ACTION_SHOPPING_IN_APP:124,LATENCY_ACTION_PLAYER_ATTESTATION:121,LATENCY_ACTION_PLAYER_SEEK:119,LATENCY_ACTION_SUPER_STICKER_BUY_FLOW:114,LATENCY_ACTION_DOWNLOADS_DATA_ACCESS:180,LATENCY_ACTION_BLOCKS_PERFORMANCE:148,LATENCY_ACTION_ASSISTANT_QUERY:138,LATENCY_ACTION_ASSISTANT_SETTINGS:137,LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF:129,LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF:128,LATENCY_ACTION_PROOF_OF_ORIGIN_TOKEN:244,LATENCY_ACTION_PROOF_OF_ORIGIN_TOKEN_CREATE:127,LATENCY_ACTION_EMBEDS_SDK_INITIALIZATION:123,
LATENCY_ACTION_NETWORKLESS_PERFORMANCE:122,LATENCY_ACTION_DOWNLOADS_EXPANSION:133,LATENCY_ACTION_ENTITY_TRANSFORM:131,LATENCY_ACTION_DOWNLOADS_COMPATIBILITY_LAYER:96,LATENCY_ACTION_EMBEDS_SET_VIDEO:95,LATENCY_ACTION_SETTINGS:93,LATENCY_ACTION_ABANDONED_STARTUP:81,LATENCY_ACTION_MEDIA_BROWSER_ALARM_PLAY:80,LATENCY_ACTION_MEDIA_BROWSER_SEARCH:79,LATENCY_ACTION_MEDIA_BROWSER_LOAD_TREE:78,LATENCY_ACTION_WHO_IS_WATCHING:77,LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH:76,LATENCY_ACTION_LITE_SWITCH_ACCOUNT:73,
LATENCY_ACTION_ELEMENTS_PERFORMANCE:70,LATENCY_ACTION_LOCATION_SIGNAL_COLLECTION:69,LATENCY_ACTION_MODIFY_CHANNEL_NOTIFICATION:65,LATENCY_ACTION_OFFLINE_STORE_START:61,LATENCY_ACTION_REEL_EDITOR:58,LATENCY_ACTION_CHANNEL_SUBSCRIBE:56,LATENCY_ACTION_CHANNEL_PREVIEW:55,LATENCY_ACTION_PREFETCH:52,LATENCY_ACTION_ABANDONED_WATCH:45,LATENCY_ACTION_LOAD_COMMENT_REPLIES:26,LATENCY_ACTION_LOAD_COMMENTS:25,LATENCY_ACTION_EDIT_COMMENT:24,LATENCY_ACTION_NEW_COMMENT:23,LATENCY_ACTION_OFFLINE_SHARING_RECEIVER_PAIRING:19,
LATENCY_ACTION_EMBED:18,LATENCY_ACTION_MDX_LAUNCH:15,LATENCY_ACTION_RESOLVE_URL:13,LATENCY_ACTION_CAST_SPLASH:149,LATENCY_ACTION_MDX_CONNECT_TO_SESSION:190,LATENCY_ACTION_MDX_STREAM_TRANSFER:178,LATENCY_ACTION_MDX_CAST:120,LATENCY_ACTION_MDX_COMMAND:12,LATENCY_ACTION_MOBILE_LIVE_NAV_MDE:231,LATENCY_ACTION_REEL_SELECT_SEGMENT:136,LATENCY_ACTION_ACCELERATED_EFFECTS:145,LATENCY_ACTION_SHORTS_LOAD_PROJECT:234,LATENCY_ACTION_SHORTS_TRIM_TO_EDITOR_TRANSCODING:229,LATENCY_ACTION_EDIT_AUDIO_GEN:182,LATENCY_ACTION_UPLOAD_AUDIO_MIXER:147,
LATENCY_ACTION_SHORTS_CLIENT_SIDE_RENDERING:157,LATENCY_ACTION_SHORTS_SEG_IMP_TRANSCODING:146,LATENCY_ACTION_SHORTS_AUDIO_PICKER_PLAYBACK:130,LATENCY_ACTION_SHORTS_WAVEFORM_DOWNLOAD:125,LATENCY_ACTION_SHORTS_CAMERA_AUDIO_DOWNLOAD:240,LATENCY_ACTION_SHORTS_VIDEO_INGESTION:155,LATENCY_ACTION_SHORTS_GALLERY:107,LATENCY_ACTION_SHORTS_TRIM:105,LATENCY_ACTION_SHORTS_EDIT:104,LATENCY_ACTION_SHORTS_CAMERA:103,LATENCY_ACTION_NON_CREATION_MODES_GLOBAL_ENTRYPOINT:239,LATENCY_ACTION_CREATION_MODES_MODE_SWITCH:236,
LATENCY_ACTION_CREATION_MODES_GLOBAL_ENTRYPOINT:235,LATENCY_ACTION_MEDIA_ENGINE_DISPLAY_FIRST_FRAME:242,LATENCY_ACTION_MEDIA_ENGINE_EXPORT:241,LATENCY_ACTION_PRODUCER_IMPORT_LOCAL_MEDIA:233,LATENCY_ACTION_PRODUCER_EXPORT_PROJECT:193,LATENCY_ACTION_PRODUCER_EDITOR:192,LATENCY_ACTION_PARENT_TOOLS_DASHBOARD:102,LATENCY_ACTION_PARENT_TOOLS_COLLECTION:101,LATENCY_ACTION_MUSIC_OFFLINE_PLAYLIST_DETAIL:238,LATENCY_ACTION_MUSIC_OFFLINE_ALBUM_DETAIL:237,LATENCY_ACTION_MUSIC_LOAD_RECOMMENDED_MEDIA_ITEMS:116,
LATENCY_ACTION_MUSIC_LOAD_MEDIA_ITEMS:115,LATENCY_ACTION_MUSIC_ALBUM_DETAIL:72,LATENCY_ACTION_MUSIC_PLAYLIST_DETAIL:71,LATENCY_ACTION_STORE:175,LATENCY_ACTION_CHIPS:68,LATENCY_ACTION_SEARCH_ZERO_STATE:67,LATENCY_ACTION_LIVE_PAGINATION:117,LATENCY_ACTION_LIVE:20,LATENCY_ACTION_PREBUFFER:40,LATENCY_ACTION_TENX:39,LATENCY_ACTION_KIDS_PROFILE_SETTINGS:94,LATENCY_ACTION_KIDS_WATCH_IT_AGAIN:92,LATENCY_ACTION_KIDS_SECRET_CODE:91,LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS:89,LATENCY_ACTION_KIDS_ONBOARDING:88,
LATENCY_ACTION_KIDS_VOICE_SEARCH:82,LATENCY_ACTION_KIDS_CURATED_COLLECTION:62,LATENCY_ACTION_KIDS_LIBRARY:53,LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS:38,LATENCY_ACTION_CREATOR_VIDEO_RIGHTS_MANAGEMENT:219,LATENCY_ACTION_CREATOR_VIDEO_POLICY:217,LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION:74,LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING:141,LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS:142,LATENCY_ACTION_CREATOR_VIDEO_EDITOR_ASYNC:51,LATENCY_ACTION_CREATOR_VIDEO_EDITOR:50,LATENCY_ACTION_CREATOR_VIDEO_EDIT:36,
LATENCY_ACTION_CREATOR_VIDEO_COPYRIGHT:218,LATENCY_ACTION_CREATOR_VIDEO_COMMENTS:34,LATENCY_ACTION_CREATOR_VIDEO_CLAIMS:216,LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS:33,LATENCY_ACTION_CREATOR_SONG_ANALYTICS:176,LATENCY_ACTION_CREATOR_PROMOTION_LIST:186,LATENCY_ACTION_CREATOR_PROMOTION_EDIT:185,LATENCY_ACTION_CREATOR_POST_LIST:112,LATENCY_ACTION_CREATOR_POST_EDIT:110,LATENCY_ACTION_CREATOR_POST_COMMENTS:111,LATENCY_ACTION_CREATOR_LIVE_STREAMING:108,LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT:174,LATENCY_ACTION_CREATOR_DIALOG_UPLOADS:86,
LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES:87,LATENCY_ACTION_CREATOR_CMS_VIDEOS:202,LATENCY_ACTION_CREATOR_CMS_REPORTS:201,LATENCY_ACTION_CREATOR_CMS_RELEASES:226,LATENCY_ACTION_CREATOR_CMS_POLICIES:225,LATENCY_ACTION_CREATOR_CMS_PITCH_MUSIC:224,LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING:200,LATENCY_ACTION_CREATOR_CMS_LICENSES:223,LATENCY_ACTION_CREATOR_CMS_ISSUES:191,LATENCY_ACTION_CREATOR_CMS_DASHBOARD:199,LATENCY_ACTION_CREATOR_CMS_CONTENT_DELIVERY:198,LATENCY_ACTION_CREATOR_CMS_CLAIMED_VIDEOS:197,
LATENCY_ACTION_CREATOR_CMS_CHANNELS:196,LATENCY_ACTION_CREATOR_CMS_CAMPAIGNS:222,LATENCY_ACTION_CREATOR_CMS_ASSET_SOUND_RECORDINGS:214,LATENCY_ACTION_CREATOR_CMS_ASSET_REFERENCES:209,LATENCY_ACTION_CREATOR_CMS_ASSET_POLICY:208,LATENCY_ACTION_CREATOR_CMS_ASSET_OWNERSHIP:207,LATENCY_ACTION_CREATOR_CMS_ASSET_METADATA:205,LATENCY_ACTION_CREATOR_CMS_ASSET_LICENSES:212,LATENCY_ACTION_CREATOR_CMS_ASSET_ISSUES:206,LATENCY_ACTION_CREATOR_CMS_ASSET_GROUPS:221,LATENCY_ACTION_CREATOR_CMS_ASSET_EMBEDS:210,LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION:213,
LATENCY_ACTION_CREATOR_CMS_ASSET_CLAIMED_VIDEOS:211,LATENCY_ACTION_CREATOR_CMS_ASSETS:195,LATENCY_ACTION_CREATOR_CMS_ART_TRACKS:220,LATENCY_ACTION_CREATOR_CMS_ANALYTICS:194,LATENCY_ACTION_CREATOR_CMS_ALLOWLIST:227,LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS:32,LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS:48,LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS:139,LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT:177,LATENCY_ACTION_CREATOR_CHANNEL_MUSIC:99,LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION:43,LATENCY_ACTION_CREATOR_CHANNEL_EDITING:113,
LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD:49,LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT:44,LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS:66,LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS:31,LATENCY_ACTION_CREATOR_ARTIST_PROFILE:85,LATENCY_ACTION_CREATOR_ARTIST_CONCERTS:84,LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS:83,LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE:140,LATENCY_ACTION_EXPERIMENTAL_WATCH_UI:181,LATENCY_ACTION_FINE_SCRUBBING_THUMBNAILS:228,LATENCY_ACTION_STORYBOARD_THUMBNAILS:118,LATENCY_ACTION_SEARCH_THUMBNAILS:59,
LATENCY_ACTION_ON_DEVICE_MODEL_DOWNLOAD:54,LATENCY_ACTION_VOICE_ASSISTANT:47,LATENCY_ACTION_SEARCH_UI:35,LATENCY_ACTION_SUGGEST:30,LATENCY_ACTION_AUTO_SEARCH:126,LATENCY_ACTION_DOWNLOADS:98,LATENCY_ACTION_EXPLORE:75,LATENCY_ACTION_VIDEO_LIST:63,LATENCY_ACTION_HOME_RESUME:60,LATENCY_ACTION_SUBSCRIPTIONS_LIST:57,LATENCY_ACTION_THUMBNAIL_LOAD:42,LATENCY_ACTION_FIRST_THUMBNAIL_LOAD:29,LATENCY_ACTION_SUBSCRIPTIONS_FEED:109,LATENCY_ACTION_SUBSCRIPTIONS:28,LATENCY_ACTION_TRENDING:27,LATENCY_ACTION_LIBRARY:21,
LATENCY_ACTION_VIDEO_THUMBNAIL:8,LATENCY_ACTION_SHOW_MORE:7,LATENCY_ACTION_VIDEO_PREVIEW:6,LATENCY_ACTION_AD_TO_AD:22,LATENCY_ACTION_VIDEO_TO_AD:17,LATENCY_ACTION_AD_TO_VIDEO:16,LATENCY_ACTION_DIRECT_PLAYBACK:132,LATENCY_ACTION_PREBUFFER_VIDEO:144,LATENCY_ACTION_PREFETCH_VIDEO:143,LATENCY_ACTION_STARTUP:106,LATENCY_ACTION_INLINE_TO_WATCH:232,LATENCY_ACTION_MUSIC_IMMERSIVE_WATCH:230,LATENCY_ACTION_ONBOARDING:135,LATENCY_ACTION_LOGIN:97,LATENCY_ACTION_REEL_WATCH:41,LATENCY_ACTION_WATCH:3,LATENCY_ACTION_RESULTS:2,
LATENCY_ACTION_CHANNELS:4,LATENCY_ACTION_HOME:1,LATENCY_ACTION_BROWSE:11,LATENCY_ACTION_USER_ACTION:189,LATENCY_ACTION_INFRASTRUCTURE:188,LATENCY_ACTION_PAGE_NAVIGATION:187,LATENCY_ACTION_UNKNOWN:0};X[X.LATENCY_ACTION_SHORTS_VIDEO_INGESTION_TRANSCODING]="LATENCY_ACTION_SHORTS_VIDEO_INGESTION_TRANSCODING";X[X.LATENCY_ACTION_KIDS_PROFILE_SWITCHER]="LATENCY_ACTION_KIDS_PROFILE_SWITCHER";X[X.LATENCY_ACTION_OFFLINE_THUMBNAIL_TRANSFER]="LATENCY_ACTION_OFFLINE_THUMBNAIL_TRANSFER";
X[X.LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC";X[X.LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR";X[X.LATENCY_ACTION_SPINNER_DISPLAYED]="LATENCY_ACTION_SPINNER_DISPLAYED";X[X.LATENCY_ACTION_PLAYABILITY_CHECK]="LATENCY_ACTION_PLAYABILITY_CHECK";X[X.LATENCY_ACTION_PROCESS]="LATENCY_ACTION_PROCESS";X[X.LATENCY_ACTION_APP_STARTUP]="LATENCY_ACTION_APP_STARTUP";X[X.LATENCY_ACTION_GEL_JSPB_SERIALIZE]="LATENCY_ACTION_GEL_JSPB_SERIALIZE";
X[X.LATENCY_ACTION_GEL_COMPRESSION]="LATENCY_ACTION_GEL_COMPRESSION";X[X.LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE]="LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE";X[X.LATENCY_ACTION_COMMERCE_ACTION_COMMAND_RPC]="LATENCY_ACTION_COMMERCE_ACTION_COMMAND_RPC";X[X.LATENCY_ACTION_COMMERCE_TRANSACTION]="LATENCY_ACTION_COMMERCE_TRANSACTION";X[X.LATENCY_ACTION_LOG_PAYMENT_SERVER_ANALYTICS_RPC]="LATENCY_ACTION_LOG_PAYMENT_SERVER_ANALYTICS_RPC";X[X.LATENCY_ACTION_GET_PAYMENT_INSTRUMENTS_PARAMS_RPC]="LATENCY_ACTION_GET_PAYMENT_INSTRUMENTS_PARAMS_RPC";
X[X.LATENCY_ACTION_GET_FIX_INSTRUMENT_PARAMS_RPC]="LATENCY_ACTION_GET_FIX_INSTRUMENT_PARAMS_RPC";X[X.LATENCY_ACTION_RESUME_SUBSCRIPTION_RPC]="LATENCY_ACTION_RESUME_SUBSCRIPTION_RPC";X[X.LATENCY_ACTION_PAUSE_SUBSCRIPTION_RPC]="LATENCY_ACTION_PAUSE_SUBSCRIPTION_RPC";X[X.LATENCY_ACTION_GET_OFFLINE_UPSELL_RPC]="LATENCY_ACTION_GET_OFFLINE_UPSELL_RPC";X[X.LATENCY_ACTION_GET_OFFERS_RPC]="LATENCY_ACTION_GET_OFFERS_RPC";X[X.LATENCY_ACTION_GET_CANCELLATION_YT_FLOW_RPC]="LATENCY_ACTION_GET_CANCELLATION_YT_FLOW_RPC";
X[X.LATENCY_ACTION_GET_CANCELLATION_FLOW_RPC]="LATENCY_ACTION_GET_CANCELLATION_FLOW_RPC";X[X.LATENCY_ACTION_UPDATE_CROSS_DEVICE_OFFLINE_STATE_RPC]="LATENCY_ACTION_UPDATE_CROSS_DEVICE_OFFLINE_STATE_RPC";X[X.LATENCY_ACTION_GET_OFFER_DETAILS_RPC]="LATENCY_ACTION_GET_OFFER_DETAILS_RPC";X[X.LATENCY_ACTION_CANCEL_RECURRENCE_TRANSACTION_RPC]="LATENCY_ACTION_CANCEL_RECURRENCE_TRANSACTION_RPC";X[X.LATENCY_ACTION_GET_TIP_MODULE_RPC]="LATENCY_ACTION_GET_TIP_MODULE_RPC";
X[X.LATENCY_ACTION_HANDLE_TRANSACTION_RPC]="LATENCY_ACTION_HANDLE_TRANSACTION_RPC";X[X.LATENCY_ACTION_COMPLETE_TRANSACTION_RPC]="LATENCY_ACTION_COMPLETE_TRANSACTION_RPC";X[X.LATENCY_ACTION_GET_CART_RPC]="LATENCY_ACTION_GET_CART_RPC";X[X.LATENCY_ACTION_THUMBNAIL_FETCH]="LATENCY_ACTION_THUMBNAIL_FETCH";X[X.LATENCY_ACTION_ABANDONED_DIRECT_PLAYBACK]="LATENCY_ACTION_ABANDONED_DIRECT_PLAYBACK";X[X.LATENCY_ACTION_SHARE_VIDEO]="LATENCY_ACTION_SHARE_VIDEO";X[X.LATENCY_ACTION_AD_TO_VIDEO_INT]="LATENCY_ACTION_AD_TO_VIDEO_INT";
X[X.LATENCY_ACTION_ABANDONED_BROWSE]="LATENCY_ACTION_ABANDONED_BROWSE";X[X.LATENCY_ACTION_PLAYER_ROTATION]="LATENCY_ACTION_PLAYER_ROTATION";X[X.LATENCY_ACTION_GENERIC_WEB_VIEW]="LATENCY_ACTION_GENERIC_WEB_VIEW";X[X.LATENCY_ACTION_SHOPPING_IN_APP]="LATENCY_ACTION_SHOPPING_IN_APP";X[X.LATENCY_ACTION_PLAYER_ATTESTATION]="LATENCY_ACTION_PLAYER_ATTESTATION";X[X.LATENCY_ACTION_PLAYER_SEEK]="LATENCY_ACTION_PLAYER_SEEK";X[X.LATENCY_ACTION_SUPER_STICKER_BUY_FLOW]="LATENCY_ACTION_SUPER_STICKER_BUY_FLOW";
X[X.LATENCY_ACTION_DOWNLOADS_DATA_ACCESS]="LATENCY_ACTION_DOWNLOADS_DATA_ACCESS";X[X.LATENCY_ACTION_BLOCKS_PERFORMANCE]="LATENCY_ACTION_BLOCKS_PERFORMANCE";X[X.LATENCY_ACTION_ASSISTANT_QUERY]="LATENCY_ACTION_ASSISTANT_QUERY";X[X.LATENCY_ACTION_ASSISTANT_SETTINGS]="LATENCY_ACTION_ASSISTANT_SETTINGS";X[X.LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF]="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF";X[X.LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF]="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF";
X[X.LATENCY_ACTION_PROOF_OF_ORIGIN_TOKEN]="LATENCY_ACTION_PROOF_OF_ORIGIN_TOKEN";X[X.LATENCY_ACTION_PROOF_OF_ORIGIN_TOKEN_CREATE]="LATENCY_ACTION_PROOF_OF_ORIGIN_TOKEN_CREATE";X[X.LATENCY_ACTION_EMBEDS_SDK_INITIALIZATION]="LATENCY_ACTION_EMBEDS_SDK_INITIALIZATION";X[X.LATENCY_ACTION_NETWORKLESS_PERFORMANCE]="LATENCY_ACTION_NETWORKLESS_PERFORMANCE";X[X.LATENCY_ACTION_DOWNLOADS_EXPANSION]="LATENCY_ACTION_DOWNLOADS_EXPANSION";X[X.LATENCY_ACTION_ENTITY_TRANSFORM]="LATENCY_ACTION_ENTITY_TRANSFORM";
X[X.LATENCY_ACTION_DOWNLOADS_COMPATIBILITY_LAYER]="LATENCY_ACTION_DOWNLOADS_COMPATIBILITY_LAYER";X[X.LATENCY_ACTION_EMBEDS_SET_VIDEO]="LATENCY_ACTION_EMBEDS_SET_VIDEO";X[X.LATENCY_ACTION_SETTINGS]="LATENCY_ACTION_SETTINGS";X[X.LATENCY_ACTION_ABANDONED_STARTUP]="LATENCY_ACTION_ABANDONED_STARTUP";X[X.LATENCY_ACTION_MEDIA_BROWSER_ALARM_PLAY]="LATENCY_ACTION_MEDIA_BROWSER_ALARM_PLAY";X[X.LATENCY_ACTION_MEDIA_BROWSER_SEARCH]="LATENCY_ACTION_MEDIA_BROWSER_SEARCH";
X[X.LATENCY_ACTION_MEDIA_BROWSER_LOAD_TREE]="LATENCY_ACTION_MEDIA_BROWSER_LOAD_TREE";X[X.LATENCY_ACTION_WHO_IS_WATCHING]="LATENCY_ACTION_WHO_IS_WATCHING";X[X.LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH]="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH";X[X.LATENCY_ACTION_LITE_SWITCH_ACCOUNT]="LATENCY_ACTION_LITE_SWITCH_ACCOUNT";X[X.LATENCY_ACTION_ELEMENTS_PERFORMANCE]="LATENCY_ACTION_ELEMENTS_PERFORMANCE";X[X.LATENCY_ACTION_LOCATION_SIGNAL_COLLECTION]="LATENCY_ACTION_LOCATION_SIGNAL_COLLECTION";
X[X.LATENCY_ACTION_MODIFY_CHANNEL_NOTIFICATION]="LATENCY_ACTION_MODIFY_CHANNEL_NOTIFICATION";X[X.LATENCY_ACTION_OFFLINE_STORE_START]="LATENCY_ACTION_OFFLINE_STORE_START";X[X.LATENCY_ACTION_REEL_EDITOR]="LATENCY_ACTION_REEL_EDITOR";X[X.LATENCY_ACTION_CHANNEL_SUBSCRIBE]="LATENCY_ACTION_CHANNEL_SUBSCRIBE";X[X.LATENCY_ACTION_CHANNEL_PREVIEW]="LATENCY_ACTION_CHANNEL_PREVIEW";X[X.LATENCY_ACTION_PREFETCH]="LATENCY_ACTION_PREFETCH";X[X.LATENCY_ACTION_ABANDONED_WATCH]="LATENCY_ACTION_ABANDONED_WATCH";
X[X.LATENCY_ACTION_LOAD_COMMENT_REPLIES]="LATENCY_ACTION_LOAD_COMMENT_REPLIES";X[X.LATENCY_ACTION_LOAD_COMMENTS]="LATENCY_ACTION_LOAD_COMMENTS";X[X.LATENCY_ACTION_EDIT_COMMENT]="LATENCY_ACTION_EDIT_COMMENT";X[X.LATENCY_ACTION_NEW_COMMENT]="LATENCY_ACTION_NEW_COMMENT";X[X.LATENCY_ACTION_OFFLINE_SHARING_RECEIVER_PAIRING]="LATENCY_ACTION_OFFLINE_SHARING_RECEIVER_PAIRING";X[X.LATENCY_ACTION_EMBED]="LATENCY_ACTION_EMBED";X[X.LATENCY_ACTION_MDX_LAUNCH]="LATENCY_ACTION_MDX_LAUNCH";
X[X.LATENCY_ACTION_RESOLVE_URL]="LATENCY_ACTION_RESOLVE_URL";X[X.LATENCY_ACTION_CAST_SPLASH]="LATENCY_ACTION_CAST_SPLASH";X[X.LATENCY_ACTION_MDX_CONNECT_TO_SESSION]="LATENCY_ACTION_MDX_CONNECT_TO_SESSION";X[X.LATENCY_ACTION_MDX_STREAM_TRANSFER]="LATENCY_ACTION_MDX_STREAM_TRANSFER";X[X.LATENCY_ACTION_MDX_CAST]="LATENCY_ACTION_MDX_CAST";X[X.LATENCY_ACTION_MDX_COMMAND]="LATENCY_ACTION_MDX_COMMAND";X[X.LATENCY_ACTION_MOBILE_LIVE_NAV_MDE]="LATENCY_ACTION_MOBILE_LIVE_NAV_MDE";
X[X.LATENCY_ACTION_REEL_SELECT_SEGMENT]="LATENCY_ACTION_REEL_SELECT_SEGMENT";X[X.LATENCY_ACTION_ACCELERATED_EFFECTS]="LATENCY_ACTION_ACCELERATED_EFFECTS";X[X.LATENCY_ACTION_SHORTS_LOAD_PROJECT]="LATENCY_ACTION_SHORTS_LOAD_PROJECT";X[X.LATENCY_ACTION_SHORTS_TRIM_TO_EDITOR_TRANSCODING]="LATENCY_ACTION_SHORTS_TRIM_TO_EDITOR_TRANSCODING";X[X.LATENCY_ACTION_EDIT_AUDIO_GEN]="LATENCY_ACTION_EDIT_AUDIO_GEN";X[X.LATENCY_ACTION_UPLOAD_AUDIO_MIXER]="LATENCY_ACTION_UPLOAD_AUDIO_MIXER";
X[X.LATENCY_ACTION_SHORTS_CLIENT_SIDE_RENDERING]="LATENCY_ACTION_SHORTS_CLIENT_SIDE_RENDERING";X[X.LATENCY_ACTION_SHORTS_SEG_IMP_TRANSCODING]="LATENCY_ACTION_SHORTS_SEG_IMP_TRANSCODING";X[X.LATENCY_ACTION_SHORTS_AUDIO_PICKER_PLAYBACK]="LATENCY_ACTION_SHORTS_AUDIO_PICKER_PLAYBACK";X[X.LATENCY_ACTION_SHORTS_WAVEFORM_DOWNLOAD]="LATENCY_ACTION_SHORTS_WAVEFORM_DOWNLOAD";X[X.LATENCY_ACTION_SHORTS_CAMERA_AUDIO_DOWNLOAD]="LATENCY_ACTION_SHORTS_CAMERA_AUDIO_DOWNLOAD";
X[X.LATENCY_ACTION_SHORTS_VIDEO_INGESTION]="LATENCY_ACTION_SHORTS_VIDEO_INGESTION";X[X.LATENCY_ACTION_SHORTS_GALLERY]="LATENCY_ACTION_SHORTS_GALLERY";X[X.LATENCY_ACTION_SHORTS_TRIM]="LATENCY_ACTION_SHORTS_TRIM";X[X.LATENCY_ACTION_SHORTS_EDIT]="LATENCY_ACTION_SHORTS_EDIT";X[X.LATENCY_ACTION_SHORTS_CAMERA]="LATENCY_ACTION_SHORTS_CAMERA";X[X.LATENCY_ACTION_NON_CREATION_MODES_GLOBAL_ENTRYPOINT]="LATENCY_ACTION_NON_CREATION_MODES_GLOBAL_ENTRYPOINT";X[X.LATENCY_ACTION_CREATION_MODES_MODE_SWITCH]="LATENCY_ACTION_CREATION_MODES_MODE_SWITCH";
X[X.LATENCY_ACTION_CREATION_MODES_GLOBAL_ENTRYPOINT]="LATENCY_ACTION_CREATION_MODES_GLOBAL_ENTRYPOINT";X[X.LATENCY_ACTION_MEDIA_ENGINE_DISPLAY_FIRST_FRAME]="LATENCY_ACTION_MEDIA_ENGINE_DISPLAY_FIRST_FRAME";X[X.LATENCY_ACTION_MEDIA_ENGINE_EXPORT]="LATENCY_ACTION_MEDIA_ENGINE_EXPORT";X[X.LATENCY_ACTION_PRODUCER_IMPORT_LOCAL_MEDIA]="LATENCY_ACTION_PRODUCER_IMPORT_LOCAL_MEDIA";X[X.LATENCY_ACTION_PRODUCER_EXPORT_PROJECT]="LATENCY_ACTION_PRODUCER_EXPORT_PROJECT";X[X.LATENCY_ACTION_PRODUCER_EDITOR]="LATENCY_ACTION_PRODUCER_EDITOR";
X[X.LATENCY_ACTION_PARENT_TOOLS_DASHBOARD]="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD";X[X.LATENCY_ACTION_PARENT_TOOLS_COLLECTION]="LATENCY_ACTION_PARENT_TOOLS_COLLECTION";X[X.LATENCY_ACTION_MUSIC_OFFLINE_PLAYLIST_DETAIL]="LATENCY_ACTION_MUSIC_OFFLINE_PLAYLIST_DETAIL";X[X.LATENCY_ACTION_MUSIC_OFFLINE_ALBUM_DETAIL]="LATENCY_ACTION_MUSIC_OFFLINE_ALBUM_DETAIL";X[X.LATENCY_ACTION_MUSIC_LOAD_RECOMMENDED_MEDIA_ITEMS]="LATENCY_ACTION_MUSIC_LOAD_RECOMMENDED_MEDIA_ITEMS";
X[X.LATENCY_ACTION_MUSIC_LOAD_MEDIA_ITEMS]="LATENCY_ACTION_MUSIC_LOAD_MEDIA_ITEMS";X[X.LATENCY_ACTION_MUSIC_ALBUM_DETAIL]="LATENCY_ACTION_MUSIC_ALBUM_DETAIL";X[X.LATENCY_ACTION_MUSIC_PLAYLIST_DETAIL]="LATENCY_ACTION_MUSIC_PLAYLIST_DETAIL";X[X.LATENCY_ACTION_STORE]="LATENCY_ACTION_STORE";X[X.LATENCY_ACTION_CHIPS]="LATENCY_ACTION_CHIPS";X[X.LATENCY_ACTION_SEARCH_ZERO_STATE]="LATENCY_ACTION_SEARCH_ZERO_STATE";X[X.LATENCY_ACTION_LIVE_PAGINATION]="LATENCY_ACTION_LIVE_PAGINATION";
X[X.LATENCY_ACTION_LIVE]="LATENCY_ACTION_LIVE";X[X.LATENCY_ACTION_PREBUFFER]="LATENCY_ACTION_PREBUFFER";X[X.LATENCY_ACTION_TENX]="LATENCY_ACTION_TENX";X[X.LATENCY_ACTION_KIDS_PROFILE_SETTINGS]="LATENCY_ACTION_KIDS_PROFILE_SETTINGS";X[X.LATENCY_ACTION_KIDS_WATCH_IT_AGAIN]="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN";X[X.LATENCY_ACTION_KIDS_SECRET_CODE]="LATENCY_ACTION_KIDS_SECRET_CODE";X[X.LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS]="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS";
X[X.LATENCY_ACTION_KIDS_ONBOARDING]="LATENCY_ACTION_KIDS_ONBOARDING";X[X.LATENCY_ACTION_KIDS_VOICE_SEARCH]="LATENCY_ACTION_KIDS_VOICE_SEARCH";X[X.LATENCY_ACTION_KIDS_CURATED_COLLECTION]="LATENCY_ACTION_KIDS_CURATED_COLLECTION";X[X.LATENCY_ACTION_KIDS_LIBRARY]="LATENCY_ACTION_KIDS_LIBRARY";X[X.LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS]="LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS";X[X.LATENCY_ACTION_CREATOR_VIDEO_RIGHTS_MANAGEMENT]="LATENCY_ACTION_CREATOR_VIDEO_RIGHTS_MANAGEMENT";
X[X.LATENCY_ACTION_CREATOR_VIDEO_POLICY]="LATENCY_ACTION_CREATOR_VIDEO_POLICY";X[X.LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION";X[X.LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING";X[X.LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS";X[X.LATENCY_ACTION_CREATOR_VIDEO_EDITOR_ASYNC]="LATENCY_ACTION_CREATOR_VIDEO_EDITOR_ASYNC";X[X.LATENCY_ACTION_CREATOR_VIDEO_EDITOR]="LATENCY_ACTION_CREATOR_VIDEO_EDITOR";
X[X.LATENCY_ACTION_CREATOR_VIDEO_EDIT]="LATENCY_ACTION_CREATOR_VIDEO_EDIT";X[X.LATENCY_ACTION_CREATOR_VIDEO_COPYRIGHT]="LATENCY_ACTION_CREATOR_VIDEO_COPYRIGHT";X[X.LATENCY_ACTION_CREATOR_VIDEO_COMMENTS]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS";X[X.LATENCY_ACTION_CREATOR_VIDEO_CLAIMS]="LATENCY_ACTION_CREATOR_VIDEO_CLAIMS";X[X.LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS";X[X.LATENCY_ACTION_CREATOR_SONG_ANALYTICS]="LATENCY_ACTION_CREATOR_SONG_ANALYTICS";
X[X.LATENCY_ACTION_CREATOR_PROMOTION_LIST]="LATENCY_ACTION_CREATOR_PROMOTION_LIST";X[X.LATENCY_ACTION_CREATOR_PROMOTION_EDIT]="LATENCY_ACTION_CREATOR_PROMOTION_EDIT";X[X.LATENCY_ACTION_CREATOR_POST_LIST]="LATENCY_ACTION_CREATOR_POST_LIST";X[X.LATENCY_ACTION_CREATOR_POST_EDIT]="LATENCY_ACTION_CREATOR_POST_EDIT";X[X.LATENCY_ACTION_CREATOR_POST_COMMENTS]="LATENCY_ACTION_CREATOR_POST_COMMENTS";X[X.LATENCY_ACTION_CREATOR_LIVE_STREAMING]="LATENCY_ACTION_CREATOR_LIVE_STREAMING";
X[X.LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT]="LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT";X[X.LATENCY_ACTION_CREATOR_DIALOG_UPLOADS]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS";X[X.LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES";X[X.LATENCY_ACTION_CREATOR_CMS_VIDEOS]="LATENCY_ACTION_CREATOR_CMS_VIDEOS";X[X.LATENCY_ACTION_CREATOR_CMS_REPORTS]="LATENCY_ACTION_CREATOR_CMS_REPORTS";X[X.LATENCY_ACTION_CREATOR_CMS_RELEASES]="LATENCY_ACTION_CREATOR_CMS_RELEASES";
X[X.LATENCY_ACTION_CREATOR_CMS_POLICIES]="LATENCY_ACTION_CREATOR_CMS_POLICIES";X[X.LATENCY_ACTION_CREATOR_CMS_PITCH_MUSIC]="LATENCY_ACTION_CREATOR_CMS_PITCH_MUSIC";X[X.LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING]="LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING";X[X.LATENCY_ACTION_CREATOR_CMS_LICENSES]="LATENCY_ACTION_CREATOR_CMS_LICENSES";X[X.LATENCY_ACTION_CREATOR_CMS_ISSUES]="LATENCY_ACTION_CREATOR_CMS_ISSUES";X[X.LATENCY_ACTION_CREATOR_CMS_DASHBOARD]="LATENCY_ACTION_CREATOR_CMS_DASHBOARD";
X[X.LATENCY_ACTION_CREATOR_CMS_CONTENT_DELIVERY]="LATENCY_ACTION_CREATOR_CMS_CONTENT_DELIVERY";X[X.LATENCY_ACTION_CREATOR_CMS_CLAIMED_VIDEOS]="LATENCY_ACTION_CREATOR_CMS_CLAIMED_VIDEOS";X[X.LATENCY_ACTION_CREATOR_CMS_CHANNELS]="LATENCY_ACTION_CREATOR_CMS_CHANNELS";X[X.LATENCY_ACTION_CREATOR_CMS_CAMPAIGNS]="LATENCY_ACTION_CREATOR_CMS_CAMPAIGNS";X[X.LATENCY_ACTION_CREATOR_CMS_ASSET_SOUND_RECORDINGS]="LATENCY_ACTION_CREATOR_CMS_ASSET_SOUND_RECORDINGS";
X[X.LATENCY_ACTION_CREATOR_CMS_ASSET_REFERENCES]="LATENCY_ACTION_CREATOR_CMS_ASSET_REFERENCES";X[X.LATENCY_ACTION_CREATOR_CMS_ASSET_POLICY]="LATENCY_ACTION_CREATOR_CMS_ASSET_POLICY";X[X.LATENCY_ACTION_CREATOR_CMS_ASSET_OWNERSHIP]="LATENCY_ACTION_CREATOR_CMS_ASSET_OWNERSHIP";X[X.LATENCY_ACTION_CREATOR_CMS_ASSET_METADATA]="LATENCY_ACTION_CREATOR_CMS_ASSET_METADATA";X[X.LATENCY_ACTION_CREATOR_CMS_ASSET_LICENSES]="LATENCY_ACTION_CREATOR_CMS_ASSET_LICENSES";
X[X.LATENCY_ACTION_CREATOR_CMS_ASSET_ISSUES]="LATENCY_ACTION_CREATOR_CMS_ASSET_ISSUES";X[X.LATENCY_ACTION_CREATOR_CMS_ASSET_GROUPS]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUPS";X[X.LATENCY_ACTION_CREATOR_CMS_ASSET_EMBEDS]="LATENCY_ACTION_CREATOR_CMS_ASSET_EMBEDS";X[X.LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION";X[X.LATENCY_ACTION_CREATOR_CMS_ASSET_CLAIMED_VIDEOS]="LATENCY_ACTION_CREATOR_CMS_ASSET_CLAIMED_VIDEOS";X[X.LATENCY_ACTION_CREATOR_CMS_ASSETS]="LATENCY_ACTION_CREATOR_CMS_ASSETS";
X[X.LATENCY_ACTION_CREATOR_CMS_ART_TRACKS]="LATENCY_ACTION_CREATOR_CMS_ART_TRACKS";X[X.LATENCY_ACTION_CREATOR_CMS_ANALYTICS]="LATENCY_ACTION_CREATOR_CMS_ANALYTICS";X[X.LATENCY_ACTION_CREATOR_CMS_ALLOWLIST]="LATENCY_ACTION_CREATOR_CMS_ALLOWLIST";X[X.LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS";X[X.LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS]="LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS";X[X.LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS]="LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS";
X[X.LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT";X[X.LATENCY_ACTION_CREATOR_CHANNEL_MUSIC]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC";X[X.LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION]="LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION";X[X.LATENCY_ACTION_CREATOR_CHANNEL_EDITING]="LATENCY_ACTION_CREATOR_CHANNEL_EDITING";X[X.LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD]="LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD";X[X.LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT";
X[X.LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS";X[X.LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS";X[X.LATENCY_ACTION_CREATOR_ARTIST_PROFILE]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE";X[X.LATENCY_ACTION_CREATOR_ARTIST_CONCERTS]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS";X[X.LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS";X[X.LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE]="LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE";
X[X.LATENCY_ACTION_EXPERIMENTAL_WATCH_UI]="LATENCY_ACTION_EXPERIMENTAL_WATCH_UI";X[X.LATENCY_ACTION_FINE_SCRUBBING_THUMBNAILS]="LATENCY_ACTION_FINE_SCRUBBING_THUMBNAILS";X[X.LATENCY_ACTION_STORYBOARD_THUMBNAILS]="LATENCY_ACTION_STORYBOARD_THUMBNAILS";X[X.LATENCY_ACTION_SEARCH_THUMBNAILS]="LATENCY_ACTION_SEARCH_THUMBNAILS";X[X.LATENCY_ACTION_ON_DEVICE_MODEL_DOWNLOAD]="LATENCY_ACTION_ON_DEVICE_MODEL_DOWNLOAD";X[X.LATENCY_ACTION_VOICE_ASSISTANT]="LATENCY_ACTION_VOICE_ASSISTANT";
X[X.LATENCY_ACTION_SEARCH_UI]="LATENCY_ACTION_SEARCH_UI";X[X.LATENCY_ACTION_SUGGEST]="LATENCY_ACTION_SUGGEST";X[X.LATENCY_ACTION_AUTO_SEARCH]="LATENCY_ACTION_AUTO_SEARCH";X[X.LATENCY_ACTION_DOWNLOADS]="LATENCY_ACTION_DOWNLOADS";X[X.LATENCY_ACTION_EXPLORE]="LATENCY_ACTION_EXPLORE";X[X.LATENCY_ACTION_VIDEO_LIST]="LATENCY_ACTION_VIDEO_LIST";X[X.LATENCY_ACTION_HOME_RESUME]="LATENCY_ACTION_HOME_RESUME";X[X.LATENCY_ACTION_SUBSCRIPTIONS_LIST]="LATENCY_ACTION_SUBSCRIPTIONS_LIST";
X[X.LATENCY_ACTION_THUMBNAIL_LOAD]="LATENCY_ACTION_THUMBNAIL_LOAD";X[X.LATENCY_ACTION_FIRST_THUMBNAIL_LOAD]="LATENCY_ACTION_FIRST_THUMBNAIL_LOAD";X[X.LATENCY_ACTION_SUBSCRIPTIONS_FEED]="LATENCY_ACTION_SUBSCRIPTIONS_FEED";X[X.LATENCY_ACTION_SUBSCRIPTIONS]="LATENCY_ACTION_SUBSCRIPTIONS";X[X.LATENCY_ACTION_TRENDING]="LATENCY_ACTION_TRENDING";X[X.LATENCY_ACTION_LIBRARY]="LATENCY_ACTION_LIBRARY";X[X.LATENCY_ACTION_VIDEO_THUMBNAIL]="LATENCY_ACTION_VIDEO_THUMBNAIL";X[X.LATENCY_ACTION_SHOW_MORE]="LATENCY_ACTION_SHOW_MORE";
X[X.LATENCY_ACTION_VIDEO_PREVIEW]="LATENCY_ACTION_VIDEO_PREVIEW";X[X.LATENCY_ACTION_AD_TO_AD]="LATENCY_ACTION_AD_TO_AD";X[X.LATENCY_ACTION_VIDEO_TO_AD]="LATENCY_ACTION_VIDEO_TO_AD";X[X.LATENCY_ACTION_AD_TO_VIDEO]="LATENCY_ACTION_AD_TO_VIDEO";X[X.LATENCY_ACTION_DIRECT_PLAYBACK]="LATENCY_ACTION_DIRECT_PLAYBACK";X[X.LATENCY_ACTION_PREBUFFER_VIDEO]="LATENCY_ACTION_PREBUFFER_VIDEO";X[X.LATENCY_ACTION_PREFETCH_VIDEO]="LATENCY_ACTION_PREFETCH_VIDEO";X[X.LATENCY_ACTION_STARTUP]="LATENCY_ACTION_STARTUP";
X[X.LATENCY_ACTION_INLINE_TO_WATCH]="LATENCY_ACTION_INLINE_TO_WATCH";X[X.LATENCY_ACTION_MUSIC_IMMERSIVE_WATCH]="LATENCY_ACTION_MUSIC_IMMERSIVE_WATCH";X[X.LATENCY_ACTION_ONBOARDING]="LATENCY_ACTION_ONBOARDING";X[X.LATENCY_ACTION_LOGIN]="LATENCY_ACTION_LOGIN";X[X.LATENCY_ACTION_REEL_WATCH]="LATENCY_ACTION_REEL_WATCH";X[X.LATENCY_ACTION_WATCH]="LATENCY_ACTION_WATCH";X[X.LATENCY_ACTION_RESULTS]="LATENCY_ACTION_RESULTS";X[X.LATENCY_ACTION_CHANNELS]="LATENCY_ACTION_CHANNELS";X[X.LATENCY_ACTION_HOME]="LATENCY_ACTION_HOME";
X[X.LATENCY_ACTION_BROWSE]="LATENCY_ACTION_BROWSE";X[X.LATENCY_ACTION_USER_ACTION]="LATENCY_ACTION_USER_ACTION";X[X.LATENCY_ACTION_INFRASTRUCTURE]="LATENCY_ACTION_INFRASTRUCTURE";X[X.LATENCY_ACTION_PAGE_NAVIGATION]="LATENCY_ACTION_PAGE_NAVIGATION";X[X.LATENCY_ACTION_UNKNOWN]="LATENCY_ACTION_UNKNOWN";var bw={LATENCY_NETWORK_MOBILE:2,LATENCY_NETWORK_WIFI:1,LATENCY_NETWORK_UNKNOWN:0};bw[bw.LATENCY_NETWORK_MOBILE]="LATENCY_NETWORK_MOBILE";bw[bw.LATENCY_NETWORK_WIFI]="LATENCY_NETWORK_WIFI";
bw[bw.LATENCY_NETWORK_UNKNOWN]="LATENCY_NETWORK_UNKNOWN";var Y={CONN_INVALID:31,CONN_CELLULAR_5G_NSA:12,CONN_CELLULAR_5G_SA:11,CONN_WIFI_METERED:10,CONN_CELLULAR_5G:9,CONN_DISCO:8,CONN_CELLULAR_UNKNOWN:7,CONN_CELLULAR_4G:6,CONN_CELLULAR_3G:5,CONN_CELLULAR_2G:4,CONN_WIFI:3,CONN_NONE:2,CONN_UNKNOWN:1,CONN_DEFAULT:0};Y[Y.CONN_INVALID]="CONN_INVALID";Y[Y.CONN_CELLULAR_5G_NSA]="CONN_CELLULAR_5G_NSA";Y[Y.CONN_CELLULAR_5G_SA]="CONN_CELLULAR_5G_SA";Y[Y.CONN_WIFI_METERED]="CONN_WIFI_METERED";
Y[Y.CONN_CELLULAR_5G]="CONN_CELLULAR_5G";Y[Y.CONN_DISCO]="CONN_DISCO";Y[Y.CONN_CELLULAR_UNKNOWN]="CONN_CELLULAR_UNKNOWN";Y[Y.CONN_CELLULAR_4G]="CONN_CELLULAR_4G";Y[Y.CONN_CELLULAR_3G]="CONN_CELLULAR_3G";Y[Y.CONN_CELLULAR_2G]="CONN_CELLULAR_2G";Y[Y.CONN_WIFI]="CONN_WIFI";Y[Y.CONN_NONE]="CONN_NONE";Y[Y.CONN_UNKNOWN]="CONN_UNKNOWN";Y[Y.CONN_DEFAULT]="CONN_DEFAULT";
var Z={DETAILED_NETWORK_TYPE_NR_NSA:126,DETAILED_NETWORK_TYPE_NR_SA:125,DETAILED_NETWORK_TYPE_INTERNAL_WIFI_IMPAIRED:124,DETAILED_NETWORK_TYPE_APP_WIFI_HOTSPOT:123,DETAILED_NETWORK_TYPE_DISCONNECTED:122,DETAILED_NETWORK_TYPE_NON_MOBILE_UNKNOWN:121,DETAILED_NETWORK_TYPE_MOBILE_UNKNOWN:120,DETAILED_NETWORK_TYPE_WIMAX:119,DETAILED_NETWORK_TYPE_ETHERNET:118,DETAILED_NETWORK_TYPE_BLUETOOTH:117,DETAILED_NETWORK_TYPE_WIFI:116,DETAILED_NETWORK_TYPE_LTE:115,DETAILED_NETWORK_TYPE_HSPAP:114,DETAILED_NETWORK_TYPE_EHRPD:113,
DETAILED_NETWORK_TYPE_EVDO_B:112,DETAILED_NETWORK_TYPE_UMTS:111,DETAILED_NETWORK_TYPE_IDEN:110,DETAILED_NETWORK_TYPE_HSUPA:109,DETAILED_NETWORK_TYPE_HSPA:108,DETAILED_NETWORK_TYPE_HSDPA:107,DETAILED_NETWORK_TYPE_EVDO_A:106,DETAILED_NETWORK_TYPE_EVDO_0:105,DETAILED_NETWORK_TYPE_CDMA:104,DETAILED_NETWORK_TYPE_1_X_RTT:103,DETAILED_NETWORK_TYPE_GPRS:102,DETAILED_NETWORK_TYPE_EDGE:101,DETAILED_NETWORK_TYPE_UNKNOWN:0};Z[Z.DETAILED_NETWORK_TYPE_NR_NSA]="DETAILED_NETWORK_TYPE_NR_NSA";
Z[Z.DETAILED_NETWORK_TYPE_NR_SA]="DETAILED_NETWORK_TYPE_NR_SA";Z[Z.DETAILED_NETWORK_TYPE_INTERNAL_WIFI_IMPAIRED]="DETAILED_NETWORK_TYPE_INTERNAL_WIFI_IMPAIRED";Z[Z.DETAILED_NETWORK_TYPE_APP_WIFI_HOTSPOT]="DETAILED_NETWORK_TYPE_APP_WIFI_HOTSPOT";Z[Z.DETAILED_NETWORK_TYPE_DISCONNECTED]="DETAILED_NETWORK_TYPE_DISCONNECTED";Z[Z.DETAILED_NETWORK_TYPE_NON_MOBILE_UNKNOWN]="DETAILED_NETWORK_TYPE_NON_MOBILE_UNKNOWN";Z[Z.DETAILED_NETWORK_TYPE_MOBILE_UNKNOWN]="DETAILED_NETWORK_TYPE_MOBILE_UNKNOWN";
Z[Z.DETAILED_NETWORK_TYPE_WIMAX]="DETAILED_NETWORK_TYPE_WIMAX";Z[Z.DETAILED_NETWORK_TYPE_ETHERNET]="DETAILED_NETWORK_TYPE_ETHERNET";Z[Z.DETAILED_NETWORK_TYPE_BLUETOOTH]="DETAILED_NETWORK_TYPE_BLUETOOTH";Z[Z.DETAILED_NETWORK_TYPE_WIFI]="DETAILED_NETWORK_TYPE_WIFI";Z[Z.DETAILED_NETWORK_TYPE_LTE]="DETAILED_NETWORK_TYPE_LTE";Z[Z.DETAILED_NETWORK_TYPE_HSPAP]="DETAILED_NETWORK_TYPE_HSPAP";Z[Z.DETAILED_NETWORK_TYPE_EHRPD]="DETAILED_NETWORK_TYPE_EHRPD";Z[Z.DETAILED_NETWORK_TYPE_EVDO_B]="DETAILED_NETWORK_TYPE_EVDO_B";
Z[Z.DETAILED_NETWORK_TYPE_UMTS]="DETAILED_NETWORK_TYPE_UMTS";Z[Z.DETAILED_NETWORK_TYPE_IDEN]="DETAILED_NETWORK_TYPE_IDEN";Z[Z.DETAILED_NETWORK_TYPE_HSUPA]="DETAILED_NETWORK_TYPE_HSUPA";Z[Z.DETAILED_NETWORK_TYPE_HSPA]="DETAILED_NETWORK_TYPE_HSPA";Z[Z.DETAILED_NETWORK_TYPE_HSDPA]="DETAILED_NETWORK_TYPE_HSDPA";Z[Z.DETAILED_NETWORK_TYPE_EVDO_A]="DETAILED_NETWORK_TYPE_EVDO_A";Z[Z.DETAILED_NETWORK_TYPE_EVDO_0]="DETAILED_NETWORK_TYPE_EVDO_0";Z[Z.DETAILED_NETWORK_TYPE_CDMA]="DETAILED_NETWORK_TYPE_CDMA";
Z[Z.DETAILED_NETWORK_TYPE_1_X_RTT]="DETAILED_NETWORK_TYPE_1_X_RTT";Z[Z.DETAILED_NETWORK_TYPE_GPRS]="DETAILED_NETWORK_TYPE_GPRS";Z[Z.DETAILED_NETWORK_TYPE_EDGE]="DETAILED_NETWORK_TYPE_EDGE";Z[Z.DETAILED_NETWORK_TYPE_UNKNOWN]="DETAILED_NETWORK_TYPE_UNKNOWN";var cw={LATENCY_PLAYER_RTSP:7,LATENCY_PLAYER_HTML5_INLINE:6,LATENCY_PLAYER_HTML5_FULLSCREEN:5,LATENCY_PLAYER_HTML5:4,LATENCY_PLAYER_FRAMEWORK:3,LATENCY_PLAYER_FLASH:2,LATENCY_PLAYER_EXO:1,LATENCY_PLAYER_UNKNOWN:0};cw[cw.LATENCY_PLAYER_RTSP]="LATENCY_PLAYER_RTSP";
cw[cw.LATENCY_PLAYER_HTML5_INLINE]="LATENCY_PLAYER_HTML5_INLINE";cw[cw.LATENCY_PLAYER_HTML5_FULLSCREEN]="LATENCY_PLAYER_HTML5_FULLSCREEN";cw[cw.LATENCY_PLAYER_HTML5]="LATENCY_PLAYER_HTML5";cw[cw.LATENCY_PLAYER_FRAMEWORK]="LATENCY_PLAYER_FRAMEWORK";cw[cw.LATENCY_PLAYER_FLASH]="LATENCY_PLAYER_FLASH";cw[cw.LATENCY_PLAYER_EXO]="LATENCY_PLAYER_EXO";cw[cw.LATENCY_PLAYER_UNKNOWN]="LATENCY_PLAYER_UNKNOWN";
var dw={LATENCY_AD_BREAK_TYPE_POSTROLL:3,LATENCY_AD_BREAK_TYPE_MIDROLL:2,LATENCY_AD_BREAK_TYPE_PREROLL:1,LATENCY_AD_BREAK_TYPE_UNKNOWN:0};dw[dw.LATENCY_AD_BREAK_TYPE_POSTROLL]="LATENCY_AD_BREAK_TYPE_POSTROLL";dw[dw.LATENCY_AD_BREAK_TYPE_MIDROLL]="LATENCY_AD_BREAK_TYPE_MIDROLL";dw[dw.LATENCY_AD_BREAK_TYPE_PREROLL]="LATENCY_AD_BREAK_TYPE_PREROLL";dw[dw.LATENCY_AD_BREAK_TYPE_UNKNOWN]="LATENCY_AD_BREAK_TYPE_UNKNOWN";var ew={LATENCY_ACTION_ERROR_STARTUP_TIMEOUT:1,LATENCY_ACTION_ERROR_UNSPECIFIED:0};
ew[ew.LATENCY_ACTION_ERROR_STARTUP_TIMEOUT]="LATENCY_ACTION_ERROR_STARTUP_TIMEOUT";ew[ew.LATENCY_ACTION_ERROR_UNSPECIFIED]="LATENCY_ACTION_ERROR_UNSPECIFIED";var fw={LIVE_STREAM_MODE_WINDOW:5,LIVE_STREAM_MODE_POST:4,LIVE_STREAM_MODE_LP:3,LIVE_STREAM_MODE_LIVE:2,LIVE_STREAM_MODE_DVR:1,LIVE_STREAM_MODE_UNKNOWN:0};fw[fw.LIVE_STREAM_MODE_WINDOW]="LIVE_STREAM_MODE_WINDOW";fw[fw.LIVE_STREAM_MODE_POST]="LIVE_STREAM_MODE_POST";fw[fw.LIVE_STREAM_MODE_LP]="LIVE_STREAM_MODE_LP";
fw[fw.LIVE_STREAM_MODE_LIVE]="LIVE_STREAM_MODE_LIVE";fw[fw.LIVE_STREAM_MODE_DVR]="LIVE_STREAM_MODE_DVR";fw[fw.LIVE_STREAM_MODE_UNKNOWN]="LIVE_STREAM_MODE_UNKNOWN";var gw={VIDEO_STREAM_TYPE_VOD:3,VIDEO_STREAM_TYPE_DVR:2,VIDEO_STREAM_TYPE_LIVE:1,VIDEO_STREAM_TYPE_UNSPECIFIED:0};gw[gw.VIDEO_STREAM_TYPE_VOD]="VIDEO_STREAM_TYPE_VOD";gw[gw.VIDEO_STREAM_TYPE_DVR]="VIDEO_STREAM_TYPE_DVR";gw[gw.VIDEO_STREAM_TYPE_LIVE]="VIDEO_STREAM_TYPE_LIVE";gw[gw.VIDEO_STREAM_TYPE_UNSPECIFIED]="VIDEO_STREAM_TYPE_UNSPECIFIED";
var hw={YT_IDB_TRANSACTION_TYPE_READ:2,YT_IDB_TRANSACTION_TYPE_WRITE:1,YT_IDB_TRANSACTION_TYPE_UNKNOWN:0};hw[hw.YT_IDB_TRANSACTION_TYPE_READ]="YT_IDB_TRANSACTION_TYPE_READ";hw[hw.YT_IDB_TRANSACTION_TYPE_WRITE]="YT_IDB_TRANSACTION_TYPE_WRITE";hw[hw.YT_IDB_TRANSACTION_TYPE_UNKNOWN]="YT_IDB_TRANSACTION_TYPE_UNKNOWN";var iw={PLAYER_ROTATION_TYPE_PORTRAIT_TO_FULLSCREEN:2,PLAYER_ROTATION_TYPE_FULLSCREEN_TO_PORTRAIT:1,PLAYER_ROTATION_TYPE_UNKNOWN:0};iw[iw.PLAYER_ROTATION_TYPE_PORTRAIT_TO_FULLSCREEN]="PLAYER_ROTATION_TYPE_PORTRAIT_TO_FULLSCREEN";
iw[iw.PLAYER_ROTATION_TYPE_FULLSCREEN_TO_PORTRAIT]="PLAYER_ROTATION_TYPE_FULLSCREEN_TO_PORTRAIT";iw[iw.PLAYER_ROTATION_TYPE_UNKNOWN]="PLAYER_ROTATION_TYPE_UNKNOWN";var jw="actionVisualElement spinnerInfo resourceInfo playerInfo commentInfo mdxInfo watchInfo thumbnailLoadInfo creatorInfo unpluggedInfo reelInfo subscriptionsFeedInfo requestIds mediaBrowserActionInfo musicLoadActionInfo shoppingInfo webViewInfo prefetchInfo accelerationSession commerceInfo inlineToWatchInfo mediaEngineMetadata webInfo tvInfo kabukiInfo mwebInfo musicInfo transcodingContext creationModesContext".split(" ");function kw(a,b){xq.call(this,1,arguments);this.timer=b}
v(kw,xq);var lw=new yq("aft-recorded",kw);var mw=y.ytLoggingLatencyUsageStats_||{};A("ytLoggingLatencyUsageStats_",mw);function nw(){this.h=0}
function ow(){nw.h||(nw.h=new nw);return nw.h}
nw.prototype.tick=function(a,b,c,d){pw(this,"tick_"+a+"_"+b)||(c={timestamp:c,cttAuthInfo:d},P("web_csi_via_jspb")?(d=new nm,G(d,1,a),G(d,2,b),a=new qm,le(a,nm,5,rm,d),eu(a,c)):Do("latencyActionTicked",{tickName:a,clientActionNonce:b},c))};
nw.prototype.info=function(a,b,c){var d=Object.keys(a).join("");pw(this,"info_"+d+"_"+b)||(a=Object.assign({},a),a.clientActionNonce=b,Do("latencyActionInfo",a,{cttAuthInfo:c}))};
nw.prototype.jspbInfo=function(a,b,c){for(var d="",e=0;e<a.toJSON().length;e++)void 0!==a.toJSON()[e]&&(d=0===e?d.concat(""+e):d.concat("_"+e));pw(this,"info_"+d+"_"+b)||(G(a,2,b),b={cttAuthInfo:c},c=new qm,le(c,km,7,rm,a),eu(c,b))};
nw.prototype.span=function(a,b,c){var d=Object.keys(a).join("");pw(this,"span_"+d+"_"+b)||(a.clientActionNonce=b,Do("latencyActionSpan",a,{cttAuthInfo:c}))};
function pw(a,b){mw[b]=mw[b]||{count:0};var c=mw[b];c.count++;c.time=T();a.h||(a.h=po(function(){var d=T(),e;for(e in mw)mw[e]&&6E4<d-mw[e].time&&delete mw[e];a&&(a.h=0)},5E3));
return 5<c.count?(6===c.count&&1>1E5*Math.random()&&(c=new R("CSI data exceeded logging limit with key",b.split("_")),0<=b.indexOf("plev")||su(c)),!0):!1}
;var qw=window;function rw(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
function sw(){var a;if(P("csi_use_performance_navigation_timing")||P("csi_use_performance_navigation_timing_tvhtml5")){var b,c,d,e=null==tw?void 0:null==(a=tw.getEntriesByType)?void 0:null==(b=a.call(tw,"navigation"))?void 0:null==(c=b[0])?void 0:null==(d=c.toJSON)?void 0:d.call(c);e?(e.requestStart=uw(e.requestStart),e.responseEnd=uw(e.responseEnd),e.redirectStart=uw(e.redirectStart),e.redirectEnd=uw(e.redirectEnd),e.domainLookupEnd=uw(e.domainLookupEnd),e.connectStart=uw(e.connectStart),e.connectEnd=
uw(e.connectEnd),e.responseStart=uw(e.responseStart),e.secureConnectionStart=uw(e.secureConnectionStart),e.domainLookupStart=uw(e.domainLookupStart),e.isPerformanceNavigationTiming=!0,a=e):a=tw.timing}else a=tw.timing;return a}
function uw(a){return Math.round(vw()+a)}
function vw(){return(P("csi_use_time_origin")||P("csi_use_time_origin_tvhtml5"))&&tw.timeOrigin?Math.floor(tw.timeOrigin):tw.timing.navigationStart}
var tw=qw.performance||qw.mozPerformance||qw.msPerformance||qw.webkitPerformance||new rw;var ww=!1,xw={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'script[name="mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-ias-phone/base"]':"mcppj",'script[name="player-plasma-ias-tablet/base"]':"mcptj",'link[rel="stylesheet"][name="mobile-polymer-player-ias"]':"mcpc",
'link[rel="stylesheet"][name="mobile-polymer-player-svg-ias"]':"mcpsc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",'script[name="mobile_blazer_watch_mod"]':"mbwj"};
Ya(tw.clearResourceTimings||tw.webkitClearResourceTimings||tw.mozClearResourceTimings||tw.msClearResourceTimings||tw.oClearResourceTimings||db,tw);function yw(a,b,c,d){if(null!==b){if("yt_lt"===a){var e="string"===typeof b?b:""+b;Nv(c).loadType=e}(a=aw(a,b,c))&&zw(a,c,d)}}
function zw(a,b,c){if(!P("web_csi_via_jspb")||(void 0===c?0:c))c=Tv(b||""),Gv(c.info,a),a.loadType&&(c=a.loadType,Nv(b).loadType=c),Gv(Qv(b),a),c=Rv(b),b=Lv(b).cttAuthInfo,ow().info(a,c,b);else{c=new km;var d=Object.keys(a);a=Object.values(a);for(var e=0;e<d.length;e++){var f=d[e];try{switch(f){case "actionType":G(c,1,X[a[e]]);break;case "clientActionNonce":G(c,2,a[e]);break;case "clientScreenNonce":G(c,4,a[e]);break;case "loadType":G(c,3,a[e]);break;case "isPrewarmedLaunch":G(c,92,a[e]);break;case "isFirstInstall":G(c,
55,a[e]);break;case "networkType":G(c,5,bw[a[e]]);break;case "connectionType":G(c,26,Y[a[e]]);break;case "detailedConnectionType":G(c,27,Z[a[e]]);break;case "isVisible":G(c,6,a[e]);break;case "playerType":G(c,7,cw[a[e]]);break;case "clientPlaybackNonce":G(c,8,a[e]);break;case "adClientPlaybackNonce":G(c,28,a[e]);break;case "previousCpn":G(c,77,a[e]);break;case "targetCpn":G(c,76,a[e]);break;case "isMonetized":G(c,9,a[e]);break;case "isPrerollAllowed":G(c,16,a[e]);break;case "isPrerollShown":G(c,17,
a[e]);break;case "adType":G(c,12,a[e]);break;case "adTypesAllowed":G(c,36,a[e]);break;case "adNetworks":G(c,37,a[e]);break;case "previousAction":G(c,13,X[a[e]]);break;case "isRedSubscriber":G(c,14,a[e]);break;case "serverTimeMs":oe(c,15,a[e]);break;case "videoId":c.setVideoId(a[e]);break;case "adVideoId":G(c,20,a[e]);break;case "targetVideoId":G(c,78,a[e]);break;case "adBreakType":G(c,21,dw[a[e]]);break;case "isNavigation":G(c,25,a[e]);break;case "viewportHeight":oe(c,29,a[e]);break;case "viewportWidth":oe(c,
30,a[e]);break;case "screenHeight":oe(c,84,a[e]);break;case "screenWidth":oe(c,85,a[e]);break;case "browseId":G(c,31,a[e]);break;case "isCacheHit":G(c,32,a[e]);break;case "httpProtocol":G(c,33,a[e]);break;case "transportProtocol":G(c,34,a[e]);break;case "searchQuery":G(c,41,a[e]);break;case "isContinuation":G(c,42,a[e]);break;case "availableProcessors":oe(c,43,a[e]);break;case "sdk":G(c,44,a[e]);break;case "isLocalStream":G(c,45,a[e]);break;case "navigationRequestedSameUrl":G(c,64,a[e]);break;case "shellStartupDurationMs":oe(c,
70,a[e]);break;case "appInstallDataAgeMs":oe(c,73,a[e]);break;case "latencyActionError":G(c,71,ew[a[e]]);break;case "actionStep":oe(c,79,a[e]);break;case "jsHeapSizeLimit":G(c,80,a[e]);break;case "totalJsHeapSize":G(c,81,a[e]);break;case "usedJsHeapSize":G(c,82,a[e]);break;case "sourceVideoDurationMs":G(c,90,a[e]);break;case "videoOutputFrames":G(c,93,a[e]);break;case "isResume":G(c,104,a[e]);break;case "debugTicksExcluded":G(c,105,a[e]);break;case "adPrebufferedTimeSecs":oe(c,39,a[e]);break;case "isLivestream":G(c,
47,a[e]);break;case "liveStreamMode":G(c,91,fw[a[e]]);break;case "adCpn2":G(c,48,a[e]);break;case "adDaiDriftMillis":G(c,49,a[e]);break;case "videoStreamType":G(c,53,gw[a[e]]);break;case "playbackRequiresTap":G(c,56,a[e]);break;case "performanceNavigationTiming":G(c,67,a[e]);break;case "transactionType":G(c,74,hw[a[e]]);break;case "playerRotationType":G(c,101,iw[a[e]]);break;case "allowedPreroll":G(c,10,a[e]);break;case "shownPreroll":G(c,11,a[e]);break;case "getHomeRequestId":G(c,57,a[e]);break;
case "getSearchRequestId":G(c,60,a[e]);break;case "getPlayerRequestId":G(c,61,a[e]);break;case "getWatchNextRequestId":G(c,62,a[e]);break;case "getBrowseRequestId":G(c,63,a[e]);break;case "getLibraryRequestId":G(c,66,a[e]);break;case "isTransformerEnabledForFeature":G(c,106,a[e]);break;case "sourceVideoFrameCount":G(c,109,a[e]);break;default:jw.includes(f)&&Qm(new R("Codegen laipb translator asked to translate message field",""+f))}}catch(g){Qm(Error("Codegen laipb translator failed to set "+f))}}Aw(c,
b)}}
function Aw(a,b){var c=se(a,3);c&&(Nv(b).loadType=c);Tv(b||"").jspbInfo.push(a);c=Rv(b);b=Lv(b).cttAuthInfo;ow().jspbInfo(a,c,b)}
function Bw(a,b,c){if(!b&&"_"!==a[0]){var d=a;tw.mark&&(0==d.lastIndexOf("mark_",0)||(d="mark_"+d),c&&(d+=" ("+c+")"),tw.mark(d))}d=Tv(c||"");d.tick[a]=b||T();if(d.callback&&d.callback[a]){d=r(d.callback[a]);for(var e=d.next();!e.done;e=d.next())e=e.value,e()}d=Pv(c);d.gelTicks&&(d.gelTicks[a]=!0);e=Ov(c);d=b||T();P("log_repeated_ytcsi_ticks")?a in e||(e[a]=d):e[a]=d;e=Rv(c);var f=Lv(c).cttAuthInfo;"_start"===a?(a=ow(),pw(a,"baseline_"+e)||(b={timestamp:b,cttAuthInfo:f},P("web_csi_via_jspb")?(a=new fm,
G(a,1,e),e=new qm,le(e,fm,6,rm,a),eu(e,b)):Do("latencyActionBaselined",{clientActionNonce:e},b))):ow().tick(a,e,b,f);Cw(c);return d}
function Dw(){var a=document;if("visibilityState"in a)a=a.visibilityState;else{var b=Bs+"VisibilityState";a=b in a?a[b]:void 0}switch(a){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3;default:return-1}}
function Ew(a){var b=sw(),c=vw(),d=O("CSI_START_TIMESTAMP_MILLIS",0);0<d&&!P("embeds_web_enable_csi_start_override_killswitch")&&(c=d);c&&(Bw("srt",b.responseStart),1!==a.prerender&&Bw("_start",c,void 0));a=Fw();0<a&&Bw("fpt",a);a=sw();a.isPerformanceNavigationTiming&&zw({performanceNavigationTiming:!0},void 0);Bw("nreqs",a.requestStart,void 0);Bw("nress",a.responseStart,void 0);Bw("nrese",a.responseEnd,void 0);0<a.redirectEnd-a.redirectStart&&(Bw("nrs",a.redirectStart,void 0),Bw("nre",a.redirectEnd,
void 0));0<a.domainLookupEnd-a.domainLookupStart&&(Bw("ndnss",a.domainLookupStart,void 0),Bw("ndnse",a.domainLookupEnd,void 0));0<a.connectEnd-a.connectStart&&(Bw("ntcps",a.connectStart,void 0),Bw("ntcpe",a.connectEnd,void 0));a.secureConnectionStart>=vw()&&0<a.connectEnd-a.secureConnectionStart&&(Bw("nstcps",a.secureConnectionStart,void 0),Bw("ntcpe",a.connectEnd,void 0));tw&&"getEntriesByType"in tw&&Gw()}
function Hw(a,b){a=document.querySelector(a);if(!a)return!1;var c="",d=a.nodeName;"SCRIPT"===d?(c=a.src,c||(c=a.getAttribute("data-timing-href"))&&(c=window.location.protocol+c)):"LINK"===d&&(c=a.href);rc()&&a.setAttribute("nonce",rc());return c?(a=tw.getEntriesByName(c))&&a[0]&&(a=a[0],c=vw(),Bw("rsf_"+b,c+Math.round(a.fetchStart)),Bw("rse_"+b,c+Math.round(a.responseEnd)),void 0!==a.transferSize&&0===a.transferSize)?!0:!1:!1}
function Iw(){var a=[];if(document.querySelector&&tw&&tw.getEntriesByName)for(var b in xw)if(xw.hasOwnProperty(b)){var c=xw[b];Hw(b,c)&&a.push(c)}return a}
function Gw(){var a=window.location.protocol,b=tw.getEntriesByType("resource");b=hb(b,function(c){return 0===c.name.indexOf(a+"//fonts.gstatic.com/s/")});
(b=jb(b,function(c,d){return d.duration>c.duration?d:c},{duration:0}))&&0<b.startTime&&0<b.responseEnd&&(Bw("wffs",uw(b.startTime)),Bw("wffe",uw(b.responseEnd)))}
function Jw(a){var b=Kw("aft",a);if(b)return b;b=O((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=b.length,d=0;d<c;d++){var e=Kw(b[d],a);if(e)return e}return NaN}
function Kw(a,b){if(a=Ov(b)[a])return"number"===typeof a?a:a[a.length-1]}
function Cw(a){var b=Kw("_start",a),c=Jw(a);b&&c&&!ww&&(Dq(lw,new kw(Math.round(c-b),a)),ww=!0)}
function Lw(a,b){for(var c=r(Object.keys(b)),d=c.next();!d.done;d=c.next())if(d=d.value,!Object.keys(a).includes(d)||"object"===typeof b[d]&&!Lw(a[d],b[d]))return!1;return!0}
function Fw(){if(tw.getEntriesByType){var a=tw.getEntriesByType("paint");if(a=kb(a,function(b){return"first-paint"===b.name}))return uw(a.startTime)}a=tw.timing;
return a.Fe?Math.max(0,a.Fe):0}
;function Mw(a,b){Pm(function(){Tv("").info.actionType=a;b&&Lm("TIMING_AFT_KEYS",b);Lm("TIMING_ACTION",a);if(P("web_csi_via_jspb")){var c=O("TIMING_INFO",{}),d=new km;c=r(Object.entries(c));for(var e=c.next();!e.done;e=c.next()){var f=r(e.value);e=f.next().value;f=f.next().value;switch(e){case "GetBrowse_rid":mm(d,im(hm(e),String(f)));break;case "GetGuide_rid":mm(d,im(hm(e),String(f)));break;case "GetHome_rid":mm(d,im(hm(e),String(f)));break;case "GetPlayer_rid":mm(d,im(hm(e),String(f)));break;case "GetSearch_rid":mm(d,
im(hm(e),String(f)));break;case "GetSettings_rid":mm(d,im(hm(e),String(f)));break;case "GetTrending_rid":mm(d,im(hm(e),String(f)));break;case "GetWatchNext_rid":mm(d,im(hm(e),String(f)));break;case "yt_red":G(d,14,!!f);break;case "yt_ad":G(d,9,!!f)}}Aw(d);d=new km;d=G(d,25,!0);d=G(d,1,X[$v(O("TIMING_ACTION"))]);(c=O("PREVIOUS_ACTION"))&&G(d,13,X[$v(c)]);(c=O("CLIENT_PROTOCOL"))&&G(d,33,c);(c=O("CLIENT_TRANSPORT"))&&G(d,34,c);(c=Nu())&&"UNDEFINED_CSN"!==c&&G(d,4,c);c=Dw();1!==c&&-1!==c||G(d,6,!0);
c=Mv();Nv();G(d,3,"cold");Ew(c);c=Iw();if(0<c.length)for(c=r(c),e=c.next();!e.done;e=c.next())e=e.value,f=new jm,G(f,1,e),ne(d,83,jm,f);Aw(d)}else{d=O("TIMING_INFO",{});for(c in d)d.hasOwnProperty(c)&&yw(c,d[c]);d={isNavigation:!0,actionType:$v(O("TIMING_ACTION"))};if(c=O("PREVIOUS_ACTION"))d.previousAction=$v(c);if(c=O("CLIENT_PROTOCOL"))d.httpProtocol=c;if(c=O("CLIENT_TRANSPORT"))d.transportProtocol=c;(c=Nu())&&"UNDEFINED_CSN"!==c&&(d.clientScreenNonce=c);c=Dw();if(1===c||-1===c)d.isVisible=!0;
Nv();Mv();d.loadType="cold";Ew(Mv());c=Iw();if(0<c.length)for(d.resourceInfo=[],c=r(c),e=c.next();!e.done;e=c.next())d.resourceInfo.push({resourceCache:e.value});zw(d)}d=Mv();c=Qv();if("cold"===Nv().loadType&&("cold"===d.yt_lt||"cold"===c.loadType)){e=Ov();f=Pv();f=f.gelTicks?f.gelTicks:f.gelTicks={};for(var g in e)if(!(g in f))if("number"===typeof e[g])Bw(g,Kw(g));else if(P("log_repeated_ytcsi_ticks"))for(var h=r(e[g]),l=h.next();!l.done;l=h.next())Bw(g.slice(1),l.value);g={};e=!1;f=r(Object.keys(d));
for(h=f.next();!h.done;h=f.next())h=h.value,(h=aw(h,d[h]))&&!Lw(Qv(),h)&&(Gv(c,h),Gv(g,h),e=!0);e&&zw(g)}A("ytglobal.timingready_",!0);g=O("TIMING_ACTION");B("ytglobal.timingready_")&&g&&Nw()&&Jw()&&Cw()})()}
function Ow(a,b,c,d){Pm(yw)(a,b,c,d)}
function Pw(a,b,c){return Pm(Bw)(a,b,c)}
function Nw(){return Pm(function(){return"_start"in Ov()})()}
function Qw(){Pm(function(){var a=Rv();requestAnimationFrame(function(){setTimeout(function(){a===Rv()&&Pw("ol",void 0,void 0)},0)})})()}
var Rw=window;Rw.ytcsi&&(Rw.ytcsi.info=Ow,Rw.ytcsi.tick=Pw);var Sw="tokens consistency mss client_location entities response_received_commands store PLAYER_PRELOAD".split(" "),Tw=["type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.BrowseResponse"];function Uw(a,b,c,d){this.m=a;this.U=b;this.l=c;this.j=d;this.i=void 0;this.h=new Map;a.Qb||(a.Qb={});a.Qb=Object.assign({},Fv,a.Qb)}
function Vw(a,b,c,d){if(void 0!==Uw.h){if(d=Uw.h,a=[a!==d.m,b!==d.U,c!==d.l,!1,!1,void 0!==d.i],a.some(function(e){return e}))throw new R("InnerTubeTransportService is already initialized",a);
}else Uw.h=new Uw(a,b,c,d)}
function Ww(a){var b={signalServiceEndpoint:{signal:"GET_DATASYNC_IDS"}};var c=void 0===c?Rn:c;var d=xv(b,a.m);if(!d)return Wf(new R("Error: No request builder found for command.",b));var e=d.m(b,void 0,c);return e?new Rf(function(f){var g,h,l;return x(function(m){if(1==m.h){h="cors"===(null==(g=e.ib)?void 0:g.mode)?"cors":void 0;if(a.l.df){var n=e.config,q;n=null==n?void 0:null==(q=n.Yb)?void 0:q.sessionIndex;q=Qn(0,{sessionIndex:n});l=Object.assign({},Xw(h),q);return m.A(2)}return w(m,Yw(e.config,
h),3)}2!=m.h&&(l=m.i);f(Zw(a,e,l));m.h=0})}):Wf(new R("Error: Failed to build request for command.",b))}
function $w(a,b,c){var d;if(b&&!(null==b?0:null==(d=b.Ig)?0:d.Mg)&&a.j){d=r(Sw);for(var e=d.next();!e.done;e=d.next())e=e.value,a.j[e]&&a.j[e].handleResponse(b,c)}}
function Zw(a,b,c){var d,e,f,g,h,l,m,n,q,u,t,z,C,E,M,S,Q,W,fa,ma,Ra,Ca,ya,na,J,Oc,Pc,ff,gf;return x(function(ha){switch(ha.h){case 1:ha.A(2);break;case 3:if((d=ha.i)&&!d.isExpired())return ha.return(Promise.resolve(d.h()));case 2:if(!(null==(e=b)?0:null==(f=e.La)?0:f.context)){ha.A(4);break}g=b.La.context;if(!P("web_async_context_processor")){h=r([]);for(l=h.next();!l.done;l=h.next())m=l.value,m.Eg(g);ha.A(4);break}return w(ha,[].reduce(function(Eh,Fh){return Eh.then(function(){return Fh.Dg(g)})},
Promise.resolve()),4);
case 4:if(null==(n=a.i)||!n.Jg(b.input,b.La)){ha.A(7);break}return w(ha,a.i.yg(b.input,b.La),8);case 8:return q=ha.i,P("kevlar_process_local_innertube_responses_killswitch")||$w(a,q,b),ha.return(q);case 7:return(z=null==(t=b.config)?void 0:t.Fa)&&a.h.has(z)&&P("web_memoize_inflight_requests")?u=a.h.get(z):(C=JSON.stringify(b.La),S=null!=(M=null==(E=b.ib)?void 0:E.headers)?M:{},b.ib=Object.assign({},b.ib,{headers:Object.assign({},S,c)}),Q=Object.assign({},b.ib),"POST"===b.ib.method&&(Q=Object.assign({},
Q,{body:C})),(null==(W=b.config)?0:W.Ne)&&Pw(b.config.Ne),fa=function(){return a.U.fetch(b.input,Q,b.config)},u=fa(),z&&a.h.set(z,u)),w(ha,u,9);
case 9:if((ma=ha.i)&&"error"in ma&&(null==(Ra=ma)?0:null==(Ca=Ra.error)?0:Ca.details))for(ya=ma.error.details,na=r(ya),J=na.next();!J.done;J=na.next())Oc=J.value,(Pc=Oc["@type"])&&-1<Tw.indexOf(Pc)&&(delete Oc["@type"],ma=Oc);z&&a.h.has(z)&&a.h.delete(z);(null==(ff=b.config)?0:ff.Oe)&&Pw(b.config.Oe);if(ma||null==(gf=a.i)||!gf.qg(b.input,b.La)){ha.A(10);break}return w(ha,a.i.xg(b.input,b.La),11);case 11:ma=ha.i;case 10:return $w(a,ma,b),ha.return(ma||void 0)}})}
function Yw(a,b){var c,d,e,f;return x(function(g){if(1==g.h){e=null==(c=a)?void 0:null==(d=c.Yb)?void 0:d.sessionIndex;var h=Qn(0,{sessionIndex:e});if(!(h instanceof Rf)){var l=new Rf(db);Sf(l,2,h);h=l}return w(g,h,2)}f=g.i;return g.return(Promise.resolve(Object.assign({},Xw(b),f)))})}
function Xw(a){var b={"Content-Type":"application/json"};O("EOM_VISITOR_DATA")?b["X-Goog-EOM-Visitor-Id"]=O("EOM_VISITOR_DATA"):O("VISITOR_DATA")&&(b["X-Goog-Visitor-Id"]=O("VISITOR_DATA"));b["X-Youtube-Bootstrap-Logged-In"]=O("LOGGED_IN",!1);"cors"!==a&&((a=O("INNERTUBE_CONTEXT_CLIENT_NAME"))&&(b["X-Youtube-Client-Name"]=a),(a=O("INNERTUBE_CONTEXT_CLIENT_VERSION"))&&(b["X-Youtube-Client-Version"]=a),(a=O("CHROME_CONNECTED_HEADER"))&&(b["X-Youtube-Chrome-Connected"]=a),(a=O("DOMAIN_ADMIN_STATE"))&&
(b["X-Youtube-Domain-Admin-State"]=a));return b}
;var ax=new at("INNERTUBE_TRANSPORT_TOKEN");var bx=["share/get_web_player_share_panel"],cx=["feedback"],dx=["notification/modify_channel_preference"],ex=["browse/edit_playlist"],fx=["subscription/subscribe"],gx=["subscription/unsubscribe"];function hx(){}
v(hx,Cv);hx.prototype.j=function(){return fx};
hx.prototype.h=function(a){return mt(a,Cm)||void 0};
hx.prototype.i=function(a,b,c){c=void 0===c?{}:c;b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params);c.botguardResponse&&(a.botguardResponse=c.botguardResponse);c.feature&&(a.clientFeature=c.feature)};
da.Object.defineProperties(hx.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function ix(){}
v(ix,Cv);ix.prototype.j=function(){return gx};
ix.prototype.h=function(a){return mt(a,Bm)||void 0};
ix.prototype.i=function(a,b){b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params)};
da.Object.defineProperties(ix.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function jx(){}
v(jx,Cv);jx.prototype.j=function(){return cx};
jx.prototype.h=function(a){return mt(a,ll)||void 0};
jx.prototype.i=function(a,b,c){a.feedbackTokens=[];b.feedbackToken&&a.feedbackTokens.push(b.feedbackToken);if(b=b.cpn||c.cpn)a.feedbackContext={cpn:b};a.isFeedbackTokenUnencrypted=!!c.is_feedback_token_unencrypted;a.shouldMerge=!1;c.extra_feedback_tokens&&(a.shouldMerge=!0,a.feedbackTokens=a.feedbackTokens.concat(c.extra_feedback_tokens))};
da.Object.defineProperties(jx.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function kx(){}
v(kx,Cv);kx.prototype.j=function(){return dx};
kx.prototype.h=function(a){return mt(a,Am)||void 0};
kx.prototype.i=function(a,b){b.params&&(a.params=b.params);b.secondaryParams&&(a.secondaryParams=b.secondaryParams)};function lx(){}
v(lx,Cv);lx.prototype.j=function(){return ex};
lx.prototype.h=function(a){return mt(a,zm)||void 0};
lx.prototype.i=function(a,b){b.actions&&(a.actions=b.actions);b.params&&(a.params=b.params);b.playlistId&&(a.playlistId=b.playlistId)};function mx(){}
v(mx,Cv);mx.prototype.j=function(){return bx};
mx.prototype.h=function(a){return mt(a,ym)};
mx.prototype.i=function(a,b,c){c=void 0===c?{}:c;b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity);c.includeListId&&(a.includeListId=!0)};var nx=new at("NETWORK_SLI_TOKEN");function ox(a){this.h=a}
ox.prototype.fetch=function(a,b){var c=this,d,e,f;return x(function(g){c.h&&(d=vc(wc(5,Jc(a,"key")))||"/UNKNOWN_PATH",c.h.start(d));e=b;P("wug_networking_gzip_request")&&(e=Wq(b));f=new window.Request(a,e);return P("web_fetch_promise_cleanup_killswitch")?g.return(Promise.resolve(fetch(f).then(function(h){return c.handleResponse(h)}).catch(function(h){su(h)}))):g.return(fetch(f).then(function(h){return c.handleResponse(h)}).catch(function(h){su(h)}))})};
ox.prototype.handleResponse=function(a){var b=a.text().then(function(c){return JSON.parse(c.replace(")]}'",""))});
a.redirected||a.ok?this.h&&this.h.success():(this.h&&this.h.ug(),b=b.then(function(c){su(new R("Error: API fetch failed",a.status,a.url,c));return Object.assign({},c,{errorMetadata:{status:a.status}})}));
return b};
ox[$s]=[new bt(nx)];var px=new at("NETWORK_MANAGER_TOKEN");var qx;function rx(a){a=void 0===a||a?Bu():Au();for(var b=[],c=0;c<a.length;c++)b.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(a[c]&63));return b.join("")}
;function sx(a){xq.call(this,1,arguments);this.csn=a}
v(sx,xq);var Gq=new yq("screen-created",sx),tx=[],vx=ux,wx=0;function xx(a,b,c,d,e,f,g,h){function l(){su(new R("newScreen() parent element does not have a VE - rootVe",b))}
var m=vx(),n=new Gu({veType:b,youtubeData:f,jspbYoutubeData:void 0});f={sequenceGroup:m};e&&(f.cttAuthInfo=e);if(P("il_via_jspb")){e=Yl((new Xl).h(m),n.getAsJspb());c&&c.visualElement?(n=new Vl,c.clientScreenNonce&&G(n,2,c.clientScreenNonce),Wl(n,c.visualElement.getAsJspb()),g&&G(n,4,sm[g]),H(e,Vl,5,n)):c&&l();d&&G(e,3,d);if(P("expectation_logging")&&h&&h.screenCreatedLoggingExpectations){c=new Ok;h=r(h.screenCreatedLoggingExpectations.expectedParentScreens||[]);for(d=h.next();!d.done;d=h.next())d=
d.value,d.screenVeType&&(d=Nk(new Mk,d.screenVeType),ne(c,1,Mk,d));H(e,Ok,7,c)}ju(e,f,a)}else e={csn:m,pageVe:n.getAsJson()},P("expectation_logging")&&h&&h.screenCreatedLoggingExpectations&&(e.screenCreatedLoggingExpectations=h.screenCreatedLoggingExpectations),c&&c.visualElement?(e.implicitGesture={parentCsn:c.clientScreenNonce,gesturedVe:c.visualElement.getAsJson()},g&&(e.implicitGesture.gestureType=g)):c&&l(),d&&(e.cloneCsn=d),a?Zt("screenCreated",e,a,f):Do("screenCreated",e,f);Dq(Gq,new sx(m));
return m}
function yx(a,b,c,d){var e=d.filter(function(l){l.csn!==b?(l.csn=b,l=!0):l=!1;return l}),f={cttAuthInfo:Qu(b)||void 0,
sequenceGroup:b};d=r(d);for(var g=d.next();!g.done;g=d.next())g=g.value.getAsJson(),(qb(g)||!g.trackingParams&&!g.veType)&&su(Error("Child VE logged with no data"));if(P("il_via_jspb")){var h=am((new Zl).h(b),c.getAsJspb());ib(e,function(l){l=l.getAsJspb();ne(h,3,Ql,l)});
"UNDEFINED_CSN"===b?zx("visualElementAttached",f,void 0,h):ku(h,f,a)}else c={csn:b,parentVe:c.getAsJson(),childVes:ib(e,function(l){return l.getAsJson()})},"UNDEFINED_CSN"===b?zx("visualElementAttached",f,c):a?Zt("visualElementAttached",c,a,f):Do("visualElementAttached",c,f)}
function Ax(a,b,c,d,e,f){d={cttAuthInfo:Qu(b)||void 0,sequenceGroup:b};P("il_via_jspb")?(e=(new dm).h(b),c=c.getAsJspb(),c=H(e,Ql,2,c),c=G(c,4,1),f&&H(c,Tl,3,f),"UNDEFINED_CSN"===b?zx("visualElementShown",d,void 0,c):fu(c,d,a)):(f={csn:b,ve:c.getAsJson(),eventType:1},e&&(f.clientData=e),"UNDEFINED_CSN"===b?zx("visualElementShown",d,f):a?Zt("visualElementShown",f,a,d):Do("visualElementShown",f,d))}
function Bx(a,b,c){var d=!0,e=(d=void 0===d?!1:d)?16:8,f={cttAuthInfo:Qu(b)||void 0,sequenceGroup:b,endOfSequence:d};P("il_via_jspb")?(e=(new cm).h(b),c=c.getAsJspb(),c=H(e,Ql,2,c),G(c,4,d?16:8),"UNDEFINED_CSN"===b?zx("visualElementHidden",f,void 0,c):gu(c,f,a)):(d={csn:b,ve:c.getAsJson(),eventType:e},"UNDEFINED_CSN"===b?zx("visualElementHidden",f,d):a?Zt("visualElementHidden",d,a,f):Do("visualElementHidden",d,f))}
function ux(){var a;P("enable_web_96_bit_csn")?a=rx():P("enable_web_96_bit_csn_no_crypto")?a=rx(!1):a=qd(Lc(Math.random()+""),3);return a}
function zx(a,b,c,d){tx.push({Mc:a,payload:c,Sa:d,options:b});wx||(wx=Hq())}
function Iq(a){if(tx){for(var b=r(tx),c=b.next();!c.done;c=b.next())if(c=c.value,P("il_via_jspb")&&c.Sa)switch(c.Sa.h(a.csn),c.Mc){case "screenCreated":ju(c.Sa,c.options);break;case "visualElementAttached":ku(c.Sa,c.options);break;case "visualElementShown":fu(c.Sa,c.options);break;case "visualElementHidden":gu(c.Sa,c.options);break;case "visualElementGestured":hu(c.Sa,c.options);break;case "visualElementStateChanged":iu(c.Sa,c.options);break;default:su(new R("flushQueue unable to map payloadName to JSPB setter"))}else c.payload&&
(c.payload.csn=a.csn,Do(c.Mc,c.payload,c.options));tx.length=0}wx=0}
;function Cx(){this.j=new Set;this.i=new Set;this.m=new Map;this.client=void 0;this.csn=null}
function Dx(){Cx.h||(Cx.h=new Cx);return Cx.h}
Cx.prototype.l=function(a){this.client=a};
Cx.prototype.h=function(){this.clear();this.csn=Nu()};
Cx.prototype.clear=function(){this.j.clear();this.i.clear();this.m.clear();this.csn=null};function Ex(){}
Ex.prototype.l=function(a){Pm(Dx().l).bind(Dx())(a)};
Ex.prototype.clear=function(){Pm(Dx().clear).bind(Dx())()};function Fx(){this.s=[];this.v=[];this.h=[];this.qa=[];this.m=[];this.W=[];this.i=new Set;this.H=new Map}
Fx.prototype.l=function(a){this.client=a};
function Gx(){Fx.h||(Fx.h=new Fx);var a=Fx.h;var b=16623;var c=void 0===c?{}:c;Pm(function(){Uu.includes(b)||(su(new R("createClientScreen() called with a non-page VE",b)),b=83769);c.isHistoryNavigation||(a.qa=[],a.h.push({rootVe:b,key:c.key||""}));a.s=[];a.v=[];c.hd?Hx(a,b,c):Ix(a,b,c)})()}
function Jx(a,b,c){c=void 0===c?0:c;Pm(function(){b.then(function(d){a.i.has(c)&&a.j&&a.j();var e=Nu(c),f=Lu(c);if(e&&f){var g;(null==d?0:null==(g=d.response)?0:g.trackingParams)&&yx(a.client,e,f,[Hu(d.response.trackingParams)]);var h;(null==d?0:null==(h=d.playerResponse)?0:h.trackingParams)&&yx(a.client,e,f,[Hu(d.playerResponse.trackingParams)])}})})()}
function Kx(a,b,c,d){d=void 0===d?0:d;Pm(function(){if(a.i.has(d))return a.s.push([b,c]),!0;var e=Nu(d),f=c||Lu(d);return e&&f?(yx(a.client,e,f,[b]),!0):!1})()}
Fx.prototype.clickCommand=function(a,b,c){var d=a.clickTrackingParams;c=void 0===c?0:c;if(d)if(c=Nu(void 0===c?0:c)){a=this.client;var e=Hu(d);d={cttAuthInfo:Qu(c)||void 0,sequenceGroup:c};P("il_via_jspb")?(b=(new bm).h(c),e=e.getAsJspb(),b=H(b,Ql,2,e),G(b,4,sm.INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK),"UNDEFINED_CSN"===c?zx("visualElementGestured",d,void 0,b):hu(b,d,a)):(e={csn:c,ve:e.getAsJson(),gestureType:"INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK"},b&&(e.clientData=b),"UNDEFINED_CSN"===
c?zx("visualElementGestured",d,e):a?Zt("visualElementGestured",e,a,d):Do("visualElementGestured",e,d));b=!0}else b=!1;else b=!1;return b};
Fx.prototype.visualElementStateChanged=function(a,b,c){c=void 0===c?0:c;0===c&&this.i.has(c)?this.v.push([a,b]):Lx(this,a,b,c)};
function Lx(a,b,c,d){d=void 0===d?0:d;var e=Nu(d);d=b||Lu(d);e&&d&&(a=a.client,b={cttAuthInfo:Qu(e)||void 0,sequenceGroup:e},P("il_via_jspb")?(c=new em,c.h(e),d=d.getAsJspb(),H(c,Ql,2,d),"UNDEFINED_CSN"===e?zx("visualElementStateChanged",b,void 0,c):iu(c,b,a)):(c={csn:e,ve:d.getAsJson(),clientData:c},"UNDEFINED_CSN"===e?zx("visualElementStateChanged",b,c):a?Zt("visualElementStateChanged",c,a,b):Do("visualElementStateChanged",c,b)))}
function Hx(a,b,c){c=void 0===c?{}:c;a.i.add(c.layer||0);a.j=function(){Ix(a,b,c);var f=Lu(c.layer);if(f){for(var g=r(a.s),h=g.next();!h.done;h=g.next())h=h.value,Kx(a,h[0],h[1]||f,c.layer);f=r(a.v);for(g=f.next();!g.done;g=f.next())g=g.value,Lx(a,g[0],g[1])}};
Nu(c.layer)||a.j();if(c.hd)for(var d=r(c.hd),e=d.next();!e.done;e=d.next())Jx(a,e.value,c.layer);else ru(Error("Delayed screen needs a data promise."))}
function Ix(a,b,c){c=void 0===c?{}:c;var d=void 0;c.layer||(c.layer=0);d=void 0!==c.Ie?c.Ie:c.layer;var e=Nu(d);d=Lu(d);var f;d&&(void 0!==c.parentCsn?f={clientScreenNonce:c.parentCsn,visualElement:d}:e&&"UNDEFINED_CSN"!==e&&(f={clientScreenNonce:e,visualElement:d}));var g,h=O("EVENT_ID");"UNDEFINED_CSN"===e&&h&&(g={servletData:{serializedServletEventId:h}});try{var l=xx(a.client,b,f,c.gd,c.cttAuthInfo,g,c.vg,c.loggingExpectations)}catch(q){vu(q,{Gg:b,rootVe:d,Cg:void 0,rg:e,Bg:f,gd:c.gd});ru(q);
return}Ru(l,b,c.layer,c.cttAuthInfo);e&&"UNDEFINED_CSN"!==e&&d&&!Ou(e)&&Bx(a.client,e,d);a.h[a.h.length-1]&&!a.h[a.h.length-1].csn&&(a.h[a.h.length-1].csn=l||"");Pm(zw)({clientScreenNonce:l},void 0,!1);Ex.h||(Ex.h=new Ex);Pm(Dx().h).bind(Dx())();var m=Lu(c.layer);e&&"UNDEFINED_CSN"!==e&&m&&(P("web_mark_root_visible")||P("music_web_mark_root_visible"))&&Pm(Ax)(void 0,l,m,void 0,void 0,void 0);a.i.delete(c.layer||0);a.j=void 0;var n;null==(n=a.H.get(c.layer))||n.forEach(function(q,u){q?Kx(a,u,q,c.layer):
m&&Kx(a,u,m,c.layer)});
Mx(a)}
function Mx(a){for(var b=0;b<a.m.length;b++){var c=a.m[b];try{c()}catch(d){ru(d)}}for(b=a.m.length=0;b<a.W.length;b++){c=a.W[b];try{c()}catch(d){ru(d)}}}
;function Nx(){var a,b,c;return x(function(d){if(1==d.h)return a=gt().resolve(ax),a?w(d,Ww(a),2):(su(Error("InnertubeTransportService unavailable in fetchDatasyncIds")),d.return(void 0));if(b=d.i){if(b.errorMetadata)return su(Error("Datasync IDs fetch responded with "+b.errorMetadata.status+": "+b.error)),d.return(void 0);c=b.sg;return d.return(c)}su(Error("Network request to get Datasync IDs failed."));return d.return(void 0)})}
;var Ox=y.caches,Px;function Qx(a){var b=a.indexOf(":");return-1===b?{zd:a}:{zd:a.substring(0,b),datasyncId:a.substring(b+1)}}
function Rx(){return x(function(a){if(void 0!==Px)return a.return(Px);Px=new Promise(function(b){var c;return x(function(d){switch(d.h){case 1:return za(d,2),w(d,Ox.open("test-only"),4);case 4:return w(d,Ox.delete("test-only"),5);case 5:Aa(d,3);break;case 2:if(c=Ba(d),c instanceof Error&&"SecurityError"===c.name)return b(!1),d.return();case 3:b("caches"in window),d.h=0}})});
return a.return(Px)})}
function Sx(a){var b,c,d,e,f,g,h;x(function(l){if(1==l.h)return w(l,Rx(),2);if(3!=l.h){if(!l.i)return l.return(!1);b=[];return w(l,Ox.keys(),3)}c=l.i;d=r(c);for(e=d.next();!e.done;e=d.next())f=e.value,g=Qx(f),h=g.datasyncId,!h||a.includes(h)||b.push(Ox.delete(f));return l.return(Promise.all(b).then(function(m){return m.some(function(n){return n})}))})}
function Tx(){var a,b,c,d,e,f,g;return x(function(h){if(1==h.h)return w(h,Rx(),2);if(3!=h.h){if(!h.i)return h.return(!1);a=no("cache contains other");return w(h,Ox.keys(),3)}b=h.i;c=r(b);for(d=c.next();!d.done;d=c.next())if(e=d.value,f=Qx(e),(g=f.datasyncId)&&g!==a)return h.return(!0);return h.return(!1)})}
;function Ux(){try{return!!self.localStorage}catch(a){return!1}}
;function Vx(a){a=a.match(/(.*)::.*::.*/);if(null!==a)return a[1]}
function Wx(a){if(Ux()){var b=Object.keys(window.localStorage);b=r(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=Vx(c);void 0===d||a.includes(d)||self.localStorage.removeItem(c)}}}
function Xx(){if(!Ux())return!1;var a=no(),b=Object.keys(window.localStorage);b=r(b);for(var c=b.next();!c.done;c=b.next())if(c=Vx(c.value),void 0!==c&&c!==a)return!0;return!1}
;function Yx(){Nx().then(function(a){a&&(Qp(a),Sx(a),Wx(a))})}
function Zx(){var a=new ns;Hi.ea(function(){var b,c,d,e;return x(function(f){switch(f.h){case 1:if(P("ytidb_clear_optimizations_killswitch")){f.A(2);break}b=no("clear");if(b.startsWith("V")){var g=[b];Qp(g);Sx(g);Wx(g);return f.return()}c=Xx();return w(f,Tx(),3);case 3:return d=f.i,w(f,Rp(),4);case 4:if(e=f.i,!c&&!d&&!e)return f.return();case 2:a.na()?Yx():a.l.add("publicytnetworkstatus-online",Yx,!0,void 0,void 0),f.h=0}})})}
;var mi=ia(["data-"]);function $x(a){a&&(a.dataset?a.dataset[ay("loaded")]="true":li(a))}
function by(a,b){return a?a.dataset?a.dataset[ay(b)]:a.getAttribute("data-"+b):null}
var cy={};function ay(a){return cy[a]||(cy[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var dy=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,ey=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function fy(a,b,c){c=void 0===c?null:c;if(window.spf&&spf.script){c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(dy,""),c=c.replace(ey,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else gy(a,b,c)}
function gy(a,b,c){c=void 0===c?null:c;var d=hy(a),e=document.getElementById(d),f=e&&by(e,"loaded"),g=e&&!f;f?b&&b():(b&&(f=Us(d,b),b=""+Ta(b),iy[b]=f),g||(e=jy(a,d,function(){by(e,"loaded")||($x(e),Xs(d),ln(Za(Ys,d),0))},c)))}
function jy(a,b,c,d){d=void 0===d?null:d;var e=Ef("SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);oi(e,Ik(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function ky(a){a=hy(a);var b=document.getElementById(a);b&&(Ys(a),b.parentNode.removeChild(b))}
function ly(a,b){a&&b&&(a=""+Ta(b),(a=iy[a])&&Ws(a))}
function hy(a){var b=document.createElement("a");nc(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+tc(a)}
var iy={};var my=[],ny=!1;function oy(){if(!P("disable_biscotti_fetch_for_ad_blocker_detection")&&!P("disable_biscotti_fetch_entirely_for_all_web_clients")&&cv()){var a=O("PLAYER_VARS",{});if("1"!=sb(a)&&!dv(a)){var b=function(){ny=!0;"google_ad_status"in window?Lm("DCLKSTAT",1):Lm("DCLKSTAT",2)};
try{fy("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}my.push(Hi.ea(function(){if(!(ny||"google_ad_status"in window)){try{ly("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}ny=!0;Lm("DCLKSTAT",3)}},5E3))}}}
function py(){var a=Number(O("DCLKSTAT",0));return isNaN(a)?0:a}
;var By=window,Cy,Dy=P("web_enable_lifecycle_monitoring")&&(null==(Cy=By.performance)?void 0:Cy.measure);function Ey(a){var b=this;var c=void 0===c?0:c;var d=void 0===d?to():d;this.l=c;this.i=d;this.j=new di;this.h=a;for(a={Za:0};a.Za<this.h.length;a={Db:a.Db,Za:a.Za},a.Za++)a.Db=this.h[a.Za],c=function(e){return function(){e.Db.Fc();b.h[e.Za].nc=!0;b.h.every(function(f){return!0===f.nc})&&b.j.resolve()}}(a),d=qo(c,Fy(this,a.Db)),this.h[a.Za]=Object.assign({},a.Db,{Fc:c,
jobId:d})}
function Gy(a){var b=Array.from(a.h.keys()).sort(function(d,e){return Fy(a,a.h[e])-Fy(a,a.h[d])});
b=r(b);for(var c=b.next();!c.done;c=b.next())c=a.h[c.value],void 0===c.jobId||c.nc||(a.i.Ca(c.jobId),qo(c.Fc,10))}
Ey.prototype.cancel=function(){for(var a=r(this.h),b=a.next();!b.done;b=a.next())b=b.value,void 0===b.jobId||b.nc||this.i.Ca(b.jobId),b.nc=!0;this.j.resolve()};
function Fy(a,b){var c;return null!=(c=b.priority)?c:a.l}
;function Hy(a){this.state=a;this.plugins=[];this.s=void 0;this.v={};Dy&&window.performance.mark(this.state+"-start")}
k=Hy.prototype;k.install=function(a){this.plugins.push(a);return this};
k.uninstall=function(){var a=this;La.apply(0,arguments).forEach(function(b){b=a.plugins.indexOf(b);-1<b&&a.plugins.splice(b,1)})};
k.transition=function(a,b){var c=this;Iy(this);var d=this.transitions.find(function(f){return Array.isArray(f.from)?f.from.find(function(g){return g===c.state&&f.K===a}):f.from===c.state&&f.K===a});
if(d){this.j&&(Gy(this.j),this.j=void 0);Jy(this,a,b);this.state=a;Dy&&window.performance.mark(this.state+"-start");d=d.action.bind(this);var e=this.plugins.filter(function(f){return f[a]}).map(function(f){return f[a]});
d(Ky(this,e),b)}else throw Error("no transition specified from "+this.state+" to "+a);};
function Ky(a,b){var c=b.filter(function(e){return 10===Ly(a,e)}),d=b.filter(function(e){return 10!==Ly(a,e)});
return a.v.Kg?function(){var e=La.apply(0,arguments);return x(function(f){if(1==f.h)return w(f,a.Pe.apply(a,[c].concat(ja(e))),2);a.Id.apply(a,[d].concat(ja(e)));f.h=0})}:function(){var e=La.apply(0,arguments);
a.Qe.apply(a,[c].concat(ja(e)));a.Id.apply(a,[d].concat(ja(e)))}}
k.Qe=function(a){var b=La.apply(1,arguments);to();for(var c={},d=r(a),e=d.next();!e.done;c={mb:c.mb},e=d.next())c.mb=e.value,ro(function(f){return function(){My(f.mb.name);f.mb.callback.apply(f.mb,ja(b));Ny(f.mb.name)}}(c))};
k.Pe=function(a){var b=La.apply(1,arguments),c,d,e,f;return x(function(g){1==g.h&&(to(),c={},d=r(a),e=d.next());if(3!=g.h){if(e.done)return g.A(0);c.ab=e.value;c.Bb=void 0;f=function(h){return function(){My(h.ab.name);var l=h.ab.callback.apply(h.ab,ja(b));"function"===typeof(null==l?void 0:l.then)?h.Bb=l.then(function(){Ny(h.ab.name)}):Ny(h.ab.name)}}(c);
ro(f);return c.Bb?w(g,c.Bb,3):g.A(3)}c={ab:c.ab,Bb:c.Bb};e=d.next();return g.A(2)})};
k.Id=function(a){var b=La.apply(1,arguments),c=this,d=a.map(function(e){return{Fc:function(){My(e.name);e.callback.apply(e,ja(b));Ny(e.name)},
priority:Ly(c,e)}});
d.length&&(this.j=new Ey(d))};
function Ly(a,b){var c,d;return null!=(d=null!=(c=a.s)?c:b.priority)?d:0}
function Iy(a){if(Dy){var b=a.state+"-start",c=a.state+"-end";window.performance.mark(c);window.performance.measure(a.state,b,c)}}
function My(a){Dy&&a&&window.performance.mark(a+"-start")}
function Ny(a){if(Dy&&a){var b=a+"-start",c=a+"-end";window.performance.mark(c);window.performance.measure(a,b,c)}}
function Jy(a,b,c){Dy&&(console.groupCollapsed("["+a.constructor.name+"] '"+a.state+"' to '"+b+"'"),console.log("with message: ",c),console.groupEnd())}
da.Object.defineProperties(Hy.prototype,{currentState:{configurable:!0,enumerable:!0,get:function(){return this.state}}});function Oy(a){Hy.call(this,void 0===a?"document_active":a);var b=this;this.s=10;this.h=new Map;this.transitions=[{from:"document_active",K:"document_disposed_preventable",action:this.W},{from:"document_active",K:"document_disposed",action:this.l},{from:"document_disposed_preventable",K:"document_disposed",action:this.l},{from:"document_disposed_preventable",K:"flush_logs",action:this.m},{from:"document_disposed_preventable",K:"document_active",action:this.i},{from:"document_disposed",K:"flush_logs",
action:this.m},{from:"document_disposed",K:"document_active",action:this.i},{from:"document_disposed",K:"document_disposed",action:function(){}},
{from:"flush_logs",K:"document_active",action:this.i}];window.addEventListener("pagehide",function(c){b.transition("document_disposed",{event:c})});
window.addEventListener("beforeunload",function(c){b.transition("document_disposed_preventable",{event:c})})}
v(Oy,Hy);Oy.prototype.W=function(a,b){if(!this.h.get("document_disposed_preventable")){a(null==b?void 0:b.event);var c,d;if((null==b?0:null==(c=b.event)?0:c.defaultPrevented)||(null==b?0:null==(d=b.event)?0:d.returnValue)){b.event.returnValue||(b.event.returnValue=!0);b.event.defaultPrevented||b.event.preventDefault();this.h=new Map;this.transition("document_active");return}}this.h.set("document_disposed_preventable",!0);this.h.get("document_disposed")?this.transition("flush_logs"):this.transition("document_disposed")};
Oy.prototype.l=function(a,b){this.h.get("document_disposed")?this.transition("document_active"):(a(null==b?void 0:b.event),this.h.set("document_disposed",!0),this.transition("flush_logs"))};
Oy.prototype.m=function(a,b){a(null==b?void 0:b.event);this.transition("document_active")};
Oy.prototype.i=function(){this.h=new Map};function Py(a){Hy.call(this,void 0===a?"document_visibility_unknown":a);var b=this;this.transitions=[{from:"document_visibility_unknown",K:"document_visible",action:this.i},{from:"document_visibility_unknown",K:"document_hidden",action:this.h},{from:"document_visibility_unknown",K:"document_foregrounded",action:this.m},{from:"document_visibility_unknown",K:"document_backgrounded",action:this.l},{from:"document_visible",K:"document_hidden",action:this.h},{from:"document_visible",K:"document_foregrounded",
action:this.m},{from:"document_visible",K:"document_visible",action:this.i},{from:"document_foregrounded",K:"document_visible",action:this.i},{from:"document_foregrounded",K:"document_hidden",action:this.h},{from:"document_foregrounded",K:"document_foregrounded",action:this.m},{from:"document_hidden",K:"document_visible",action:this.i},{from:"document_hidden",K:"document_backgrounded",action:this.l},{from:"document_hidden",K:"document_hidden",action:this.h},{from:"document_backgrounded",K:"document_hidden",
action:this.h},{from:"document_backgrounded",K:"document_backgrounded",action:this.l},{from:"document_backgrounded",K:"document_visible",action:this.i}];document.addEventListener("visibilitychange",function(c){"visible"===document.visibilityState?b.transition("document_visible",{event:c}):b.transition("document_hidden",{event:c})});
P("visibility_lifecycles_dynamic_backgrounding")&&(window.addEventListener("blur",function(c){b.transition("document_backgrounded",{event:c})}),window.addEventListener("focus",function(c){b.transition("document_foregrounded",{event:c})}))}
v(Py,Hy);Py.prototype.i=function(a,b){a(null==b?void 0:b.event);P("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_foregrounded")};
Py.prototype.h=function(a,b){a(null==b?void 0:b.event);P("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_backgrounded")};
Py.prototype.l=function(a,b){a(null==b?void 0:b.event)};
Py.prototype.m=function(a,b){a(null==b?void 0:b.event)};function Qy(){this.j=new Oy;this.l=new Py}
Qy.prototype.install=function(){var a=La.apply(0,arguments),b=this;a.forEach(function(c){b.j.install(c)});
a.forEach(function(c){b.l.install(c)})};function Ry(){Qy.call(this);var a={};this.install((a.document_disposed={callback:this.h},a));a={};this.install((a.flush_logs={callback:this.i},a))}
v(Ry,Qy);Ry.prototype.i=function(){if(P("web_fp_via_jspb")){var a=new Pl,b=Nu();b&&G(a,1,b);b=new qm;le(b,Pl,380,rm,a);eu(b);P("web_fp_via_jspb_and_json")&&Do("finalPayload",{csn:Nu()})}else Do("finalPayload",{csn:Nu()})};
Ry.prototype.h=function(){xu(yu)};function Sy(){}
function Ty(){var a=B("ytglobal.storage_");a||(a=new Sy,A("ytglobal.storage_",a));return a}
Sy.prototype.estimate=function(){var a,b,c;return x(function(d){a=navigator;return(null==(b=a.storage)?0:b.estimate)?d.return(a.storage.estimate()):(null==(c=a.webkitTemporaryStorage)?0:c.queryUsageAndQuota)?d.return(Uy()):d.return()})};
function Uy(){var a=navigator;return new Promise(function(b,c){var d;null!=(d=a.webkitTemporaryStorage)&&d.queryUsageAndQuota?a.webkitTemporaryStorage.queryUsageAndQuota(function(e,f){b({usage:e,quota:f})},function(e){c(e)}):c(Error("webkitTemporaryStorage is not supported."))})}
A("ytglobal.storageClass_",Sy);function Bo(a,b){var c=this;this.handleError=a;this.h=b;this.i=!1;void 0===self.document||self.addEventListener("beforeunload",function(){c.i=!0});
this.j=Math.random()<=en("ytidb_transaction_ended_event_rate_limit_session",.2)}
Bo.prototype.logEvent=function(a,b){switch(a){case "IDB_DATA_CORRUPTED":P("idb_data_corrupted_killswitch")||this.h("idbDataCorrupted",b);break;case "IDB_UNEXPECTEDLY_CLOSED":this.h("idbUnexpectedlyClosed",b);break;case "IS_SUPPORTED_COMPLETED":P("idb_is_supported_completed_killswitch")||this.h("idbIsSupportedCompleted",b);break;case "QUOTA_EXCEEDED":Vy(this,b);break;case "TRANSACTION_ENDED":this.j&&Math.random()<=en("ytidb_transaction_ended_event_rate_limit_transaction",.1)&&this.h("idbTransactionEnded",
b);break;case "TRANSACTION_UNEXPECTEDLY_ABORTED":a=Object.assign({},b,{hasWindowUnloaded:this.i}),this.h("idbTransactionAborted",a)}};
function Vy(a,b){Ty().estimate().then(function(c){c=Object.assign({},b,{isSw:void 0===self.document,isIframe:self!==self.top,deviceStorageUsageMbytes:Wy(null==c?void 0:c.usage),deviceStorageQuotaMbytes:Wy(null==c?void 0:c.quota)});a.h("idbQuotaExceeded",c)})}
function Wy(a){return"undefined"===typeof a?"-1":String(Math.ceil(a/1048576))}
;function Xy(a,b,c){K.call(this);var d=this;c=c||O("POST_MESSAGE_ORIGIN")||window.document.location.protocol+"//"+window.document.location.hostname;this.l=b||null;this.targetOrigin="*";this.m=c;this.sessionId=null;this.i="widget";this.M=!!a;this.H=function(e){a:if(!("*"!=d.m&&e.origin!=d.m||d.l&&e.source!=d.l||"string"!==typeof e.data)){try{var f=JSON.parse(e.data)}catch(g){break a}if(!(null==f||d.M&&(d.sessionId&&d.sessionId!=f.id||d.i&&d.i!=f.channel))&&f)switch(f.event){case "listening":"null"!=
e.origin&&(d.m=d.targetOrigin=e.origin);d.l=e.source;d.sessionId=f.id;d.j&&(d.j(),d.j=null);break;case "command":d.s&&(!d.v||0<=fb(d.v,f.func))&&d.s(f.func,f.args,e.origin)}}};
this.v=this.j=this.s=null;window.addEventListener("message",this.H)}
v(Xy,K);Xy.prototype.sendMessage=function(a,b){if(b=b||this.l){this.sessionId&&(a.id=this.sessionId);this.i&&(a.channel=this.i);try{var c=JSON.stringify(a);b.postMessage(c,this.targetOrigin)}catch(d){Rm(d)}}};
Xy.prototype.L=function(){window.removeEventListener("message",this.H);K.prototype.L.call(this)};function Yy(){this.i=[];this.isReady=!1;this.j={};var a=this.h=new Xy(!!O("WIDGET_ID_ENFORCE")),b=this.Ke.bind(this);a.s=b;a.v=null;this.h.i="widget";if(a=O("WIDGET_ID"))this.h.sessionId=a}
k=Yy.prototype;k.Ke=function(a,b,c){"addEventListener"===a&&b?this.Ec(b[0],c):this.Vc(a,b,c)};
k.Vc=function(){};
k.xc=function(a){var b=this;return function(c){return b.sendMessage(a,c)}};
k.Ec=function(a,b){this.j[a]||"onReady"===a||(this.addEventListener(a,this.xc(a,b)),this.j[a]=!0)};
k.addEventListener=function(){};
k.ne=function(){this.isReady=!0;this.sendMessage("initialDelivery",this.Ac());this.sendMessage("onReady");gb(this.i,this.Gd,this);this.i=[]};
k.Ac=function(){return null};
function Zy(a,b){a.sendMessage("infoDelivery",b)}
k.Gd=function(a){this.isReady?this.h.sendMessage(a):this.i.push(a)};
k.sendMessage=function(a,b){this.Gd({event:a,info:void 0===b?null:b})};
k.dispose=function(){this.h=null};var $y={},az=($y["api.invalidparam"]=2,$y.auth=150,$y["drm.auth"]=150,$y["heartbeat.net"]=150,$y["heartbeat.servererror"]=150,$y["heartbeat.stop"]=150,$y["html5.unsupportedads"]=5,$y["fmt.noneavailable"]=5,$y["fmt.decode"]=5,$y["fmt.unplayable"]=5,$y["html5.missingapi"]=5,$y["html5.unsupportedlive"]=5,$y["drm.unavailable"]=5,$y["mrm.blocked"]=151,$y);var bz=new Set("endSeconds startSeconds mediaContentUrl suggestedQuality videoId rct rctn".split(" "));function cz(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function dz(a,b,c){if("string"===typeof a)return{videoId:a,startSeconds:b,suggestedQuality:c};b={};c=r(bz);for(var d=c.next();!d.done;d=c.next())d=d.value,a[d]&&(b[d]=a[d]);return b}
function ez(a,b,c,d){if(Sa(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};"string"===typeof a&&16===a.length?b.list="PL"+a:b.playlist=a;return b}
;function fz(a){Yy.call(this);this.listeners=[];this.l=!1;this.api=a;this.addEventListener("onReady",this.onReady.bind(this));this.addEventListener("onVideoProgress",this.We.bind(this));this.addEventListener("onVolumeChange",this.Xe.bind(this));this.addEventListener("onApiChange",this.Re.bind(this));this.addEventListener("onPlaybackQualityChange",this.Te.bind(this));this.addEventListener("onPlaybackRateChange",this.Ue.bind(this));this.addEventListener("onStateChange",this.Ve.bind(this));this.addEventListener("onWebglSettingsChanged",
this.Ye.bind(this))}
v(fz,Yy);k=fz.prototype;
k.Vc=function(a,b,c){if(this.api.isExternalMethodAvailable(a,c)){b=b||[];if(0<b.length&&cz(a)){var d=b;if(Sa(d[0])&&!Array.isArray(d[0]))var e=d[0];else switch(e={},a){case "loadVideoById":case "cueVideoById":e=dz(d[0],void 0!==d[1]?Number(d[1]):void 0,d[2]);break;case "loadVideoByUrl":case "cueVideoByUrl":e=d[0];"string"===typeof e&&(e={mediaContentUrl:e,startSeconds:void 0!==d[1]?Number(d[1]):void 0,suggestedQuality:d[2]});b:{if((d=e.mediaContentUrl)&&(d=/\/([ve]|embed)\/([^#?]+)/.exec(d))&&d[2]){d=
d[2];break b}d=null}e.videoId=d;e=dz(e);break;case "loadPlaylist":case "cuePlaylist":e=ez(d[0],d[1],d[2],d[3])}b.length=1;b[0]=e}this.api.handleExternalCall(a,b,c);cz(a)&&Zy(this,this.Ac())}};
k.Ec=function(a,b){"onReady"===a?this.api.logApiCall(a+" invocation",b):"onError"===a&&this.l&&(this.api.logApiCall(a+" invocation",b,this.errorCode),this.errorCode=void 0);this.api.logApiCall(a+" registration",b);Yy.prototype.Ec.call(this,a,b)};
k.xc=function(a,b){var c=this,d=Yy.prototype.xc.call(this,a,b);return function(e){"onError"===a?c.api.logApiCall(a+" invocation",b,e):c.api.logApiCall(a+" invocation",b);d(e)}};
k.onReady=function(){var a=this.ne.bind(this);this.h.j=a;a=this.api.getVideoData();if(!a.isPlayable){this.l=!0;a=a.errorCode;var b=void 0===b?5:b;this.errorCode=a?az[a]||b:b;this.sendMessage("onError",this.errorCode.toString())}};
k.addEventListener=function(a,b){this.listeners.push({eventType:a,listener:b});this.api.addEventListener(a,b)};
k.Ac=function(){if(!this.api)return null;var a=this.api.getApiInterface();lb(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c];if(0===e.search("get")||0===e.search("is")){var f=0;0===e.search("get")?f=3:0===e.search("is")&&(f=2);f=e.charAt(f).toLowerCase()+e.substr(f+1);try{var g=this.api[e]();b[f]=g}catch(h){}}}b.videoData=this.api.getVideoData();b.currentTimeLastUpdated_=Date.now()/1E3;return b};
k.Ve=function(a){a={playerState:a,currentTime:this.api.getCurrentTime(),duration:this.api.getDuration(),videoData:this.api.getVideoData(),videoStartBytes:0,videoBytesTotal:this.api.getVideoBytesTotal(),videoLoadedFraction:this.api.getVideoLoadedFraction(),playbackQuality:this.api.getPlaybackQuality(),availableQualityLevels:this.api.getAvailableQualityLevels(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getVideoUrl&&
(a.videoUrl=this.api.getVideoUrl());this.api.getVideoContentRect&&(a.videoContentRect=this.api.getVideoContentRect());this.api.getProgressState&&(a.progressState=this.api.getProgressState());this.api.getPlaylist&&(a.playlist=this.api.getPlaylist());this.api.getPlaylistIndex&&(a.playlistIndex=this.api.getPlaylistIndex());this.api.getStoryboardFormat&&(a.storyboardFormat=this.api.getStoryboardFormat());Zy(this,a)};
k.Te=function(a){Zy(this,{playbackQuality:a})};
k.Ue=function(a){Zy(this,{playbackRate:a})};
k.Re=function(){for(var a=this.api.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.api.getOptions(e);b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var l=f[g],m=this.api.getOption(e,l);b[e][l]=m}}this.sendMessage("apiInfoDelivery",b)};
k.Xe=function(){Zy(this,{muted:this.api.isMuted(),volume:this.api.getVolume()})};
k.We=function(a){a={currentTime:a,videoBytesLoaded:this.api.getVideoBytesLoaded(),videoLoadedFraction:this.api.getVideoLoadedFraction(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getProgressState&&(a.progressState=this.api.getProgressState());Zy(this,a)};
k.Ye=function(){var a={sphericalProperties:this.api.getSphericalProperties()};Zy(this,a)};
k.dispose=function(){Yy.prototype.dispose.call(this);for(var a=0;a<this.listeners.length;a++){var b=this.listeners[a];this.api.removeEventListener(b.eventType,b.listener)}this.listeners=[]};function gz(a){K.call(this);this.i={};this.started=!1;this.connection=a;this.connection.subscribe("command",this.Cd,this)}
v(gz,K);k=gz.prototype;k.start=function(){this.started||this.h()||(this.started=!0,this.connection.jb("RECEIVING"))};
k.jb=function(a,b){this.started&&!this.h()&&this.connection.jb(a,b)};
k.Cd=function(a,b,c){if(this.started&&!this.h()){var d=b||{};switch(a){case "addEventListener":"string"===typeof d.event&&this.addListener(d.event);break;case "removeEventListener":"string"===typeof d.event&&this.removeListener(d.event);break;default:this.api.isReady()&&this.api.isExternalMethodAvailable(a,c||null)&&(b=hz(a,b||{}),c=this.api.handleExternalCall(a,b,c||null),(c=iz(a,c))&&this.jb(a,c))}}};
k.addListener=function(a){if(!(a in this.i)){var b=this.Se.bind(this,a);this.i[a]=b;this.addEventListener(a,b)}};
k.Se=function(a,b){this.started&&!this.h()&&this.connection.jb(a,this.zc(a,b))};
k.zc=function(a,b){if(null!=b)return{value:b}};
k.removeListener=function(a){a in this.i&&(this.removeEventListener(a,this.i[a]),delete this.i[a])};
k.L=function(){var a=this.connection;a.h()||ej(a.i,"command",this.Cd,this);this.connection=null;for(var b in this.i)this.i.hasOwnProperty(b)&&this.removeListener(b);K.prototype.L.call(this)};function jz(a,b){gz.call(this,b);this.api=a;this.start()}
v(jz,gz);jz.prototype.addEventListener=function(a,b){this.api.addEventListener(a,b)};
jz.prototype.removeEventListener=function(a,b){this.api.removeEventListener(a,b)};
function hz(a,b){switch(a){case "loadVideoById":return a=dz(b),[a];case "cueVideoById":return a=dz(b),[a];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return a=ez(b),[a];case "cuePlaylist":return a=ez(b),[a];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];
case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function iz(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
jz.prototype.zc=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return gz.prototype.zc.call(this,a,b)};
jz.prototype.L=function(){gz.prototype.L.call(this);delete this.api};function kz(a){a=void 0===a?!1:a;K.call(this);this.i=new dj(a);Me(this,this.i)}
$a(kz,K);kz.prototype.subscribe=function(a,b,c){return this.h()?0:this.i.subscribe(a,b,c)};
kz.prototype.m=function(a,b){this.h()||this.i.bb.apply(this.i,arguments)};function lz(a,b,c){kz.call(this);this.l=a;this.j=b;this.id=c}
v(lz,kz);lz.prototype.jb=function(a,b){this.h()||this.l.jb(this.j,this.id,a,b)};
lz.prototype.L=function(){this.j=this.l=null;kz.prototype.L.call(this)};function mz(a,b,c){K.call(this);this.i=a;this.origin=c;this.j=Is(window,"message",this.l.bind(this));this.connection=new lz(this,a,b);Me(this,this.connection)}
v(mz,K);mz.prototype.jb=function(a,b,c,d){this.h()||a!==this.i||(a={id:b,command:c},d&&(a.data=d),this.i.postMessage(JSON.stringify(a),this.origin))};
mz.prototype.l=function(a){if(!this.h()&&a.origin===this.origin){var b=a.data;if("string"===typeof b){try{b=JSON.parse(b)}catch(d){return}if(b.command){var c=this.connection;c.h()||c.m("command",b.command,b.data,a.origin)}}}};
mz.prototype.L=function(){Js(this.j);this.i=null;K.prototype.L.call(this)};function nz(){this.state=1;this.h=null}
k=nz.prototype;k.initialize=function(a,b,c){if(a.program){var d,e=null!=(d=a.interpreterUrl)?d:null;if(a.interpreterSafeScript){d=a.interpreterSafeScript.privateDoNotAccessOrElseSafeScriptWrappedValue||"";var f=zb();d=f?f.createScript(d):d;d=new Eb(d,Db)}else d=null!=(f=a.interpreterScript)?f:null;a.interpreterSafeUrl&&(e=a.interpreterSafeUrl,Cb("From proto message. b/166824318"),e=Ib(e.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue||"").toString());oz(this,d,e,a.program,b,c)}else su(Error("Cannot initialize botguard without program"))};
function oz(a,b,c,d,e,f){var g=void 0===g?"trayride":g;c?(a.state=2,fy(c,function(){window[g]?pz(a,d,g,e):(a.state=3,ky(c),su(new R("Unable to load Botguard","from "+c)))},f)):b?(f=Ef("SCRIPT"),b instanceof Eb?(b instanceof Eb&&b.constructor===Eb?b=b.j:(Pa(b),b="type_error:SafeScript"),f.textContent=b,ni(f)):f.textContent=b,f.nonce=rc(),document.head.appendChild(f),document.head.removeChild(f),window[g]?pz(a,d,g,e):(a.state=4,su(new R("Unable to load Botguard from JS")))):su(new R("Unable to load VM; no url or JS provided"))}
function pz(a,b,c,d){a.state=5;try{var e=new ei({program:b,re:c,Le:P("att_web_record_metrics")});e.af.then(function(){a.state=6;d&&d(b)});
a.Qc(e)}catch(f){a.state=7,f instanceof Error&&su(f)}}
k.invoke=function(a){a=void 0===a?{}:a;return this.Tc()?this.Pd({fd:a}):null};
k.dispose=function(){this.Wc()};
k.Wc=function(){this.Qc(null);this.state=8};
k.Tc=function(){return!!this.h};
k.Pd=function(a){return this.h.Jd(a)};
k.Qc=function(a){Ke(this.h);this.h=a};function qz(){var a=B("yt.abuse.playerAttLoader");return a&&["bgvma","bgvmb","bgvmc"].every(function(b){return b in a})?a:null}
;function rz(){nz.apply(this,arguments)}
v(rz,nz);rz.prototype.Wc=function(){this.state=8};
rz.prototype.Qc=function(a){var b;null==(b=qz())||b.bgvma();a?(b={bgvma:a.dispose.bind(a),bgvmb:a.snapshot.bind(a),bgvmc:a.Jd.bind(a)},A("yt.abuse.playerAttLoader",b),A("yt.abuse.playerAttLoaderRun",function(c){return a.snapshot(c)})):(A("yt.abuse.playerAttLoader",null),A("yt.abuse.playerAttLoaderRun",null))};
rz.prototype.Tc=function(){return!!qz()};
rz.prototype.Pd=function(a){return qz().bgvmc(a)};var sz=new rz;function tz(){return sz.Tc()}
function uz(a){a=void 0===a?{}:a;return sz.invoke(a)}
;function vz(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||ub(b);this.assets=a.assets||{};this.attrs=a.attrs||ub(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
vz.prototype.clone=function(){var a=new vz,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==Pa(c)?a[b]=ub(c):a[b]=c}return a};var wz=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function xz(a){a=a||"";if(window.spf){var b=a.match(wz);spf.style.load(a,b?b[1]:"",void 0)}else yz(a)}
function yz(a){var b=zz(a),c=document.getElementById(b),d=c&&by(c,"loaded");d||c&&!d||(c=Az(a,b,function(){by(c,"loaded")||($x(c),Xs(b),ln(Za(Ys,b),0))}))}
function Az(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=Ik(a);pc(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function zz(a){var b=Ef("A");nc(b,new Lb(a,Mb));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+tc(a)}
;function Bz(){K.call(this);this.i=[]}
v(Bz,K);Bz.prototype.L=function(){for(;this.i.length;){var a=this.i.pop();a.target.removeEventListener(a.name,a.callback,void 0)}K.prototype.L.call(this)};function Cz(){Bz.apply(this,arguments)}
v(Cz,Bz);function Dz(a,b,c,d,e){K.call(this);var f=this;this.v=b;this.webPlayerContextConfig=d;this.Vb=e;this.va=!1;this.api={};this.ha=this.s=null;this.T=new dj;this.i={};this.Y=this.Aa=this.elementId=this.pb=this.config=null;this.X=!1;this.l=this.H=null;this.ia={};this.Wb=["onReady"];this.lastError=null;this.Fb=NaN;this.M={};this.Xb=new Cz(this);this.aa=0;this.j=this.m=a;Me(this,this.T);Ez(this);Fz(this);Me(this,this.Xb);c?this.aa=ln(function(){f.loadNewVideoConfig(c)},0):d&&(Gz(this),Hz(this))}
v(Dz,K);k=Dz.prototype;k.getId=function(){return this.v};
k.loadNewVideoConfig=function(a){if(!this.h()){this.aa&&(window.clearTimeout(this.aa),this.aa=0);var b=a||{};b instanceof vz||(b=new vz(b));this.config=b;this.setConfig(a);Hz(this);this.isReady()&&Iz(this)}};
function Gz(a){var b;a.webPlayerContextConfig?b=a.webPlayerContextConfig.rootElementId:b=a.config.attrs.id;a.elementId=b||a.elementId;"video-player"===a.elementId&&(a.elementId=a.v,a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.v:a.config.attrs.id=a.v);var c;(null==(c=a.j)?void 0:c.id)===a.elementId&&(a.elementId+="-player",a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.elementId:a.config.attrs.id=a.elementId)}
k.setConfig=function(a){this.pb=a;this.config=Jz(a);Gz(this);if(!this.Aa){var b;this.Aa=Kz(this,(null==(b=this.config.args)?void 0:b.jsapicallback)||"onYouTubePlayerReady")}this.config.args?this.config.args.jsapicallback=null:this.config.args={jsapicallback:null};var c;if(null==(c=this.config)?0:c.attrs)a=this.config.attrs,(b=a.width)&&this.j&&(this.j.style.width=yi(Number(b)||b)),(a=a.height)&&this.j&&(this.j.style.height=yi(Number(a)||a))};
function Iz(a){if(a.config&&!0!==a.config.loaded)if(a.config.loaded=!0,!a.config.args||"0"!==a.config.args.autoplay&&0!==a.config.args.autoplay&&!1!==a.config.args.autoplay){var b;a.api.loadVideoByPlayerVars(null!=(b=a.config.args)?b:null)}else a.api.cueVideoByPlayerVars(a.config.args)}
function Lz(a){var b=!0,c=Mz(a);c&&a.config&&(a=Nz(a),b=by(c,"version")===a);return b&&!!B("yt.player.Application.create")}
function Hz(a){if(!a.h()&&!a.X){var b=Lz(a);if(b&&"html5"===(Mz(a)?"html5":null))a.Y="html5",a.isReady()||Oz(a);else if(Pz(a),a.Y="html5",b&&a.l&&a.m)a.m.appendChild(a.l),Oz(a);else{a.config&&(a.config.loaded=!0);var c=!1;a.H=function(){c=!0;var d=Qz(a,"player_bootstrap_method")?B("yt.player.Application.createAlternate")||B("yt.player.Application.create"):B("yt.player.Application.create");var e=a.config?Jz(a.config):void 0;d&&d(a.m,e,a.webPlayerContextConfig,a.Vb);Oz(a)};
a.X=!0;b?a.H():(fy(Nz(a),a.H),(b=Rz(a))&&xz(b),Sz(a)&&!c&&A("yt.player.Application.create",null))}}}
function Mz(a){var b=Df(a.elementId);!b&&a.j&&a.j.querySelector&&(b=a.j.querySelector("#"+a.elementId));return b}
function Oz(a){if(!a.h()){var b=Mz(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);if(c){a.X=!1;if(!Qz(a,"html5_remove_not_servable_check_killswitch")){var d;if((null==b?0:b.isNotServable)&&a.config&&(null==b?0:b.isNotServable(null==(d=a.config.args)?void 0:d.video_id)))return}Tz(a)}else a.Fb=ln(function(){Oz(a)},50)}}
function Tz(a){Ez(a);a.va=!0;var b=Mz(a);if(b){a.s=Uz(a,b,"addEventListener");a.ha=Uz(a,b,"removeEventListener");var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=a.api,e=0;e<c.length;e++){var f=c[e];d[f]||(d[f]=Uz(a,b,f))}}for(var g in a.i)a.i.hasOwnProperty(g)&&a.s&&a.s(g,a.i[g]);Iz(a);a.Aa&&a.Aa(a.api);a.T.bb("onReady",a.api)}
function Uz(a,b,c){var d=b[c];return function(){var e=La.apply(0,arguments);try{return a.lastError=null,d.apply(b,e)}catch(f){"sendAbandonmentPing"!==c&&(f.params=c,a.lastError=f,su(f))}}}
function Ez(a){a.va=!1;if(a.ha)for(var b in a.i)a.i.hasOwnProperty(b)&&a.ha(b,a.i[b]);for(var c in a.M)a.M.hasOwnProperty(c)&&window.clearTimeout(Number(c));a.M={};a.s=null;a.ha=null;b=a.api;for(var d in b)b.hasOwnProperty(d)&&(b[d]=null);b.addEventListener=function(e,f){a.addEventListener(e,f)};
b.removeEventListener=function(e,f){a.removeEventListener(e,f)};
b.destroy=function(){a.dispose()};
b.getLastError=function(){return a.getLastError()};
b.getPlayerType=function(){return a.getPlayerType()};
b.getCurrentVideoConfig=function(){return a.pb};
b.loadNewVideoConfig=function(e){a.loadNewVideoConfig(e)};
b.isReady=function(){return a.isReady()}}
k.isReady=function(){return this.va};
function Fz(a){a.addEventListener("WATCH_LATER_VIDEO_ADDED",function(b){Xs("WATCH_LATER_VIDEO_ADDED",b)});
a.addEventListener("WATCH_LATER_VIDEO_REMOVED",function(b){Xs("WATCH_LATER_VIDEO_REMOVED",b)})}
k.addEventListener=function(a,b){var c=this,d=Kz(this,b);d&&(0<=fb(this.Wb,a)||this.i[a]||(b=Vz(this,a),this.s&&this.s(a,b)),this.T.subscribe(a,d),"onReady"===a&&this.isReady()&&ln(function(){d(c.api)},0))};
k.removeEventListener=function(a,b){this.h()||(b=Kz(this,b))&&ej(this.T,a,b)};
function Kz(a,b){var c=b;if("string"===typeof b){if(a.ia[b])return a.ia[b];c=function(){var d=La.apply(0,arguments),e=B(b);if(e)try{e.apply(y,d)}catch(f){ru(f)}};
a.ia[b]=c}return c?c:null}
function Vz(a,b){var c="ytPlayer"+b+a.v;a.i[b]=c;y[c]=function(d){var e=ln(function(){if(!a.h()){try{a.T.bb(b,null!=d?d:void 0)}catch(h){su(new R("PlayerProxy error when creating global callback",{error:h,event:b,playerId:a.v,data:d}))}var f=a.M,g=String(e);g in f&&delete f[g]}},0);
rb(a.M,String(e))};
return c}
k.getPlayerType=function(){return this.Y||(Mz(this)?"html5":null)};
k.getLastError=function(){return this.lastError};
function Pz(a){a.cancel();Ez(a);a.Y=null;a.config&&(a.config.loaded=!1);var b=Mz(a);b&&(Lz(a)||!Sz(a)?a.l=b:(b&&b.destroy&&b.destroy(),a.l=null));if(a.m)for(a=a.m;b=a.firstChild;)a.removeChild(b)}
k.cancel=function(){this.H&&ly(Nz(this),this.H);window.clearTimeout(this.Fb);this.X=!1};
k.L=function(){Pz(this);if(this.l&&this.config&&this.l.destroy)try{this.l.destroy()}catch(b){ru(b)}this.ia=null;for(var a in this.i)this.i.hasOwnProperty(a)&&(y[this.i[a]]=null);this.pb=this.config=this.api=null;delete this.m;delete this.j;K.prototype.L.call(this)};
function Sz(a){var b,c;a=null==(b=a.config)?void 0:null==(c=b.args)?void 0:c.fflags;return!!a&&-1!==a.indexOf("player_destroy_old_version=true")}
function Nz(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.jsUrl:(a=a.config.assets)?a.js:""}
function Rz(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.cssUrl:(a=a.config.assets)?a.css:""}
function Qz(a,b){if(a.webPlayerContextConfig)var c=a.webPlayerContextConfig.serializedExperimentFlags;else{var d;if(null==(d=a.config)?0:d.args)c=a.config.args.fflags}return"true"===Um(c||"","&")[b]}
function Jz(a){for(var b={},c=r(Object.keys(a)),d=c.next();!d.done;d=c.next()){d=d.value;var e=a[d];b[d]="object"===typeof e?ub(e):e}return b}
;var Wz={},Xz="player_uid_"+(1E9*Math.random()>>>0);function Yz(a,b){var c="player",d=!1;d=void 0===d?!0:d;c="string"===typeof c?Df(c):c;var e=Xz+"_"+Ta(c),f=Wz[e];if(f&&d)return Zz(a,b)?f.api.loadVideoByPlayerVars(a.args||null):f.loadNewVideoConfig(a),f.api;f=new Dz(c,e,a,b,void 0);Wz[e]=f;Xs("player-added",f.api);Ne(f,function(){delete Wz[f.getId()]});
return f.api}
function Zz(a,b){return b&&b.serializedExperimentFlags?b.serializedExperimentFlags.includes("web_player_remove_playerproxy=true"):a&&a.args&&a.args.fflags?a.args.fflags.includes("web_player_remove_playerproxy=true"):!1}
;var $z=null,aA=null,bA=null;function cA(){dA()}
function eA(){dA()}
function dA(){var a=$z.getVideoData(1);a=a.title?a.title+" - YouTube":"YouTube";document.title!==a&&(document.title=a)}
function fA(){$z&&$z.sendAbandonmentPing&&$z.sendAbandonmentPing();O("PL_ATT")&&sz.dispose();for(var a=Hi,b=0,c=my.length;b<c;b++)a.Ca(my[b]);my.length=0;ky("//static.doubleclick.net/instream/ad_status.js");ny=!1;Lm("DCLKSTAT",0);Le(bA,aA);$z&&($z.removeEventListener("onVideoDataChange",cA),$z.destroy())}
;function gA(a,b,c){a="ST-"+tc(a).toString(36);b=b?Cc(b):"";c=c||5;cv()&&Un(a,b,c)}
;function hA(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=O("EVENT_ID");d&&(b.ei||(b.ei=d));if(b){d=a;var e=void 0===e?!0:e;var f=O("VALID_SESSION_TEMPDATA_DOMAINS",[]),g=xc(window.location.href);g&&f.push(g);g=xc(d);if(0<=fb(f,g)||!g&&0==d.lastIndexOf("/",0))if(P("autoescape_tempdata_url")&&(f=document.createElement("a"),nc(f,d),d=f.href),d&&(d=yc(d),f=d.indexOf("#"),d=0>f?d:d.slice(0,f)))if(e&&!b.csn&&(b.itct||b.ved)&&(b=Object.assign({csn:Nu()},b)),h){var h=parseInt(h,10);isFinite(h)&&0<h&&
gA(d,b,h)}else gA(d,b)}if(c)return!1;if((window.ytspf||{}).enabled)spf.navigate(a);else{var l=void 0===l?{}:l;var m=void 0===m?"":m;var n=void 0===n?window:n;c=n.location;a=Ec(a,l)+m;var q=void 0===q?ri:q;a:{q=void 0===q?ri:q;for(l=0;l<q.length;++l)if(m=q[l],m instanceof pi&&m.ze(a)){q=new Lb(a,Mb);break a}q=void 0}q=q||Qb;if(q instanceof Lb)var u=Nb(q);else{b:if(hi){try{u=new URL(q)}catch(t){u="https:";break b}u=u.protocol}else c:{u=document.createElement("a");try{u.href=q}catch(t){u=void 0;break c}u=
u.protocol;u=":"===u||""===u?"https:":u}u="javascript:"!==u?q:void 0}void 0!==u&&(c.href=u)}return!0}
;A("yt.setConfig",Lm);A("yt.config.set",Lm);A("yt.setMsg",Tu);A("yt.msgs.set",Tu);A("yt.logging.errors.log",ru);
A("writeEmbed",function(){var a=O("PLAYER_CONFIG");if(!a){var b=O("PLAYER_VARS");b&&(a={args:b})}mv(!0);"gvn"===a.args.ps&&(document.body.style.backgroundColor="transparent");a.attrs||(a.attrs={width:"100%",height:"100%",id:"video-player"});var c=document.referrer;b=O("POST_MESSAGE_ORIGIN");window!==window.top&&c&&c!==document.URL&&(a.args.loaderUrl=c);Mw("embed",["ol"]);c=O("WEB_PLAYER_CONTEXT_CONFIGS").WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER;if(!c.serializedForcedExperimentIds){var d=Zm(window.location.href);
d.forced_experiments&&(c.serializedForcedExperimentIds=d.forced_experiments)}var e;(null==(e=a.args)?0:e.autoplay)&&Mw("watch",["pbs","pbu","pbp"]);$z=Yz(a,c);$z.addEventListener("onVideoDataChange",cA);$z.addEventListener("onReady",eA);a=O("POST_MESSAGE_ID","player");O("ENABLE_JS_API")?bA=new fz($z):O("ENABLE_POST_API")&&"string"===typeof a&&"string"===typeof b&&(aA=new mz(window.parent,a,b),bA=new jz($z,aA.connection));oy();P("ytidb_create_logger_embed_killswitch")||Ao();a={};Ry.h||(Ry.h=new Ry);
Ry.h.install((a.flush_logs={callback:function(){Ht()}},a));
ys();P("ytidb_clear_embedded_player")&&Hi.ea(function(){var f,g;if(!qx){var h=gt(),l={Nc:px,Nd:ox};h.h.set(l.Nc,l);l={ed:{feedbackEndpoint:yv(jx),modifyChannelNotificationPreferenceEndpoint:yv(kx),playlistEditEndpoint:yv(lx),subscribeEndpoint:yv(hx),unsubscribeEndpoint:yv(ix),webPlayerShareEntityServiceEndpoint:yv(mx)}};var m=wv(),n={};m&&(n.client_location=m);void 0===f&&(f=Pn());void 0===g&&(g=h.resolve(px));Vw(l,g,f,n);f={Nc:ax,Od:Uw.h};h.h.set(f.Nc,f);qx=h.resolve(ax)}Zx()})});
var iA=Pm(function(){Qw();nv();P("embeds_web_enable_ve_logging_unification")||Gx()}),jA=Pm(function(a){a.persisted||(Qw(),nv())}),kA=Pm(function(a){P("embeds_web_enable_dispose_player_if_page_not_cached_killswitch")?fA():a.persisted||fA()}),lA=Pm(fA);
window.addEventListener?(window.addEventListener("load",iA),window.addEventListener("pageshow",jA),window.addEventListener("pagehide",kA)):window.attachEvent&&(window.attachEvent("onload",iA),window.attachEvent("onunload",lA));A("yt.abuse.player.botguardInitialized",B("yt.abuse.player.botguardInitialized")||tz);A("yt.abuse.player.invokeBotguard",B("yt.abuse.player.invokeBotguard")||uz);A("yt.abuse.dclkstatus.checkDclkStatus",B("yt.abuse.dclkstatus.checkDclkStatus")||py);
A("yt.player.exports.navigate",B("yt.player.exports.navigate")||hA);A("yt.util.activity.init",B("yt.util.activity.init")||Ms);A("yt.util.activity.getTimeSinceActive",B("yt.util.activity.getTimeSinceActive")||Ps);A("yt.util.activity.setTimestamp",B("yt.util.activity.setTimestamp")||Ns);}).call(this);
