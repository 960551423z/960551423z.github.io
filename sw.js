"use strict";var precacheConfig=[["/404.html","e522bb6a10463bec56c98636520fb4b8"],["/about/index.html","c2313e046447127ca881bdd55942716e"],["/archives/2022/09/index.html","01d324359a71d584761f06dcc67c2e82"],["/archives/2022/09/page/2/index.html","5dcaa24e14f7c54cd90da7ae4916afc6"],["/archives/2022/09/page/3/index.html","83bb7cf85bfdd42915f7d761bbe83506"],["/archives/2022/index.html","e4880675f2665c27154915aaa53176f1"],["/archives/2022/page/2/index.html","3c170eae07dbeeb137cecbd517c4f15a"],["/archives/2022/page/3/index.html","fa44b5f96adc3591e4ac6791bf54a6b7"],["/archives/index.html","7dbd5b8780a055398844ce85c2a39b26"],["/archives/page/2/index.html","4d1872ceffc724021e533c0a44768d23"],["/archives/page/3/index.html","bc6b849f15830777c4c8e41835bcb969"],["/categories/Operations/index.html","5325b9532effb9da88b795f9b53795c1"],["/categories/Operations/page/2/index.html","ac6eea21be308b4d454240929fc2eeac"],["/categories/hexo/index.html","77a279486a06a742095bb605ed6c9bc1"],["/categories/hexo/page/2/index.html","5968ba1dd8e668ff3792388bb04bdd12"],["/categories/index.html","536a0cb8d256e69447471cac6b39e3ba"],["/categories/java/index.html","1c1731a61b4f476f73eeebdc1c888d94"],["/css/custom.css","ad868e6a5be1a4285122a309598cf6f8"],["/css/index.css","b129d2140051b59ee34856c184bb9758"],["/css/modify.css","8e10fc367078cc84dbd10d7b64520800"],["/css/mycss.css","4216181a52d43d83da08e215fdb490c4"],["/css/twikoo_beautify.css","fb2f3e72e77087b2b40747062964bd29"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","e529b391eb63bb7c9120678d1ce3af60"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","d3b73299f07d34998d22b8bbe305fa72"],["/js/crash_cheat.js","1b6b489d549e9ab829d1cdc10affabdc"],["/js/grayscale.js","c4b17493d112655d0c0b70b26ec5f0ff"],["/js/main.js","73e1a92da3a39646678bffb9e7817148"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","a879375ec846467995278c77eef580e6"],["/page/2/index.html","72526680290601446f2d024ef3195923"],["/post/0cdfccbd9244/index.html","4009560ac1abf1a5555b2422f853d571"],["/post/1bcf4ef89a48/index.html","53314abae39c9eaa4e2d119535c2bffd"],["/post/3807447cf2c3/index.html","218da05a3400954f02c540258b8758f0"],["/post/3c4b7b144279/index.html","71bfd5a569adb0a55ef8e0de21d43948"],["/post/4358df0addd8/index.html","29484f0628ffd6d34c1a3d7215e38a87"],["/post/6a85df0cd64b/index.html","ebe920447e071b6cd57fda5fd8f67690"],["/post/7415bea06abf/index.html","2119be7dbc10f79f9b68bb38454d3d4b"],["/post/7793116f3986/index.html","ed0da84a0d545347ecf8b50680ceada9"],["/post/903fbd1d10a6/index.html","b8431286b128fb736367808275593880"],["/post/924c254fc7db/index.html","56d711e247943799cd0398106a28d12f"],["/post/a2c357e9dd7b/index.html","b119770791ca7bd9a62ec52b5cce1611"],["/post/c4adbb179a32/index.html","1aec661f9ab8e3f4e1240afd8f9ea39b"],["/search.xml","e6af8d2ce1182fc028946b198fb712c0"],["/sw-register.js","3ec34d44632a87f086641f6bb194befc"],["/tags/Operations/index.html","71673be5b2c808e197e5097dd365a6d6"],["/tags/Operations/page/2/index.html","b452c66bde6ff2e4c27230a613e43ae5"],["/tags/hexo/index.html","643254e7334c1dd68b8ee9ac7aa9e55d"],["/tags/hexo/page/2/index.html","dfb988b929b0d9bb91f26b2d1b9e93ec"],["/tags/index.html","c60d9bec6b32ba5b71a39cc2c02abbeb"],["/tags/java/index.html","273009ec6775db5d31d131757b442c04"]],cacheName="sw-precache-v3--"+(self.registration?self.registration.scope:""),firstRegister=1,ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then((function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})})):Promise.resolve(e)},createCacheKey=function(e,t,n,r){var o=new URL(e);return r&&o.pathname.match(r)||(o.search+=(o.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),o.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some((function(e){return n.match(e)}))},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map((function(e){return e.split("=")})).filter((function(e){return t.every((function(t){return!t.test(e[0])}))})).map((function(e){return e.join("=")})).join("&"),n.toString()},hashParamName=(addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},"_sw-precache"),urlsToCacheKeys=new Map(precacheConfig.map((function(e){var t=e[0],n=e[1],r=new URL(t,self.location),o=createCacheKey(r,hashParamName,n,!1);return[r.toString(),o]})));function setOfCachedUrls(e){return e.keys().then((function(e){return e&&e.length>0&&(firstRegister=0),e.map((function(e){return e.url}))})).then((function(e){return new Set(e)}))}self.addEventListener("install",(function(e){e.waitUntil(caches.open(cacheName).then((function(e){return setOfCachedUrls(e).then((function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map((function(n){if(!t.has(n)){var r=new Request(n,{credentials:"same-origin"});return fetch(r).then((function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then((function(t){return e.put(n,t)}))}))}})))}))})).then((function(){return self.skipWaiting()})))})),self.addEventListener("activate",(function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then((function(e){return e.keys().then((function(n){return Promise.all(n.map((function(n){if(!t.has(n.url))return e.delete(n)})))}))})).then((function(){return self.clients.claim()})).then((function(){if(!firstRegister)return self.clients.matchAll().then((function(e){e&&e.length&&e.forEach((function(e){e.postMessage("sw.update")}))}))})))})),self.addEventListener("fetch",(function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),r="index.html";(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,r),t=urlsToCacheKeys.has(n));0,t&&e.respondWith(caches.open(cacheName).then((function(e){return e.match(urlsToCacheKeys.get(n)).then((function(e){if(e)return e;throw Error("The cached response that was expected is missing.")}))})).catch((function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)})))}})),function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).toolbox=e()}}((function(){return function e(t,n,r){function o(c,i){if(!n[c]){if(!t[c]){var s="function"==typeof require&&require;if(!i&&s)return s(c,!0);if(a)return a(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,(function(e){var n=t[c][1][e];return o(n||e)}),f,f.exports,e,t,n,r)}return n[c].exports}for(var a="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){function r(e,t){((t=t||{}).debug||s.debug)&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||s.cache.name,caches.open(t)}function a(e,t,n){var o=e.url,a=n.maxAgeSeconds,c=n.maxEntries,i=n.name,s=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+a),u.getDb(i).then((function(e){return u.setTimestampForUrl(e,o,s)})).then((function(e){return u.expireEntries(e,c,a,s)})).then((function(e){r("Successfully updated IDB.");var n=e.map((function(e){return t.delete(e)}));return Promise.all(n).then((function(){r("Done with cache cleanup.")}))})).catch((function(e){r(e)}))}function c(e){var t=Array.isArray(e);if(t&&e.forEach((function(e){"string"==typeof e||e instanceof Request||(t=!1)})),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}var i,s=e("./options"),u=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:function(e,t){var n=(t=t||{}).successResponses||s.successResponses;return fetch(e.clone()).then((function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then((function(n){n.put(e,r).then((function(){var r=t.cache||s.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&function(e,t,n){var r=a.bind(null,e,t,n);i=i?i.then(r):r()}(e,n,r)}))})),r.clone()}))},openCache:o,renameCache:function(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then((function(){return Promise.all([caches.open(e),caches.open(t)]).then((function(t){var n=t[0],r=t[1];return n.keys().then((function(e){return Promise.all(e.map((function(e){return n.match(e).then((function(t){return r.put(e,t)}))})))})).then((function(){return caches.delete(e)}))}))}))},cache:function(e,t){return o(t).then((function(t){return t.add(e)}))},uncache:function(e,t){return o(t).then((function(t){return t.delete(e)}))},precache:function(e){e instanceof Promise||c(e),s.preCacheItems=s.preCacheItems.concat(e)},validatePrecacheInput:c,isResponseFresh:function(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r)if(new Date(r).getTime()+1e3*t<n)return!1}return!0}}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){var r="sw-toolbox-",o=1,a="store",c="url",i="timestamp",s={};t.exports={getDb:function(e){return e in s||(s[e]=function(e){return new Promise((function(t,n){var s=indexedDB.open(r+e,o);s.onupgradeneeded=function(){s.result.createObjectStore(a,{keyPath:c}).createIndex(i,i,{unique:!1})},s.onsuccess=function(){t(s.result)},s.onerror=function(){n(s.error)}}))}(e)),s[e]},setTimestampForUrl:function(e,t,n){return new Promise((function(r,o){var c=e.transaction(a,"readwrite");c.objectStore(a).put({url:t,timestamp:n}),c.oncomplete=function(){r(e)},c.onabort=function(){o(c.error)}}))},expireEntries:function(e,t,n,r){return function(e,t,n){return t?new Promise((function(r,o){var s=1e3*t,u=[],f=e.transaction(a,"readwrite"),h=f.objectStore(a);h.index(i).openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-s>t.value[i]){var r=t.value[c];u.push(r),h.delete(r),t.continue()}},f.oncomplete=function(){r(u)},f.onabort=o})):Promise.resolve([])}(e,n,r).then((function(n){return function(e,t){return t?new Promise((function(n,r){var o=[],s=e.transaction(a,"readwrite"),u=s.objectStore(a),f=u.index(i),h=f.count();f.count().onsuccess=function(){var e=h.result;e>t&&(f.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var a=r.value[c];o.push(a),u.delete(a),e-o.length>t&&r.continue()}})},s.oncomplete=function(){n(o)},s.onabort=r})):Promise.resolve([])}(e,t).then((function(e){return n.concat(e)}))}))}}},{}],3:[function(e,t,n){function r(e){return e.reduce((function(e,t){return e.concat(t)}),[])}e("serviceworker-cache-polyfill");var o=e("./helpers"),a=e("./router"),c=e("./options");t.exports={fetchListener:function(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))},activateListener:function(e){o.debug("activate event fired");var t=c.cache.name+"$$$inactive$$$";e.waitUntil(o.renameCache(t,c.cache.name))},installListener:function(e){var t=c.cache.name+"$$$inactive$$$";o.debug("install event fired"),o.debug("creating cache ["+t+"]"),e.waitUntil(o.openCache({cache:{name:t}}).then((function(e){return Promise.all(c.preCacheItems).then(r).then(o.validatePrecacheInput).then((function(t){return o.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)}))})))}}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){var r=new URL("./",self.location).pathname,o=e("path-to-regexp"),a=function(e,t,n,a){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=r+t),this.keys=[],this.regexp=o(t,this.keys)),this.method=e,this.options=a,this.handler=n};a.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach((function(e,r){t[e.name]=n[r+1]}))}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=a},{"path-to-regexp":15}],6:[function(e,t,n){var r=e("./route"),o=e("./helpers"),a=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){new RegExp(r.value[0]).test(t)&&o.push(r.value[1]),r=n.next()}return o},c=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach((function(e){c.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}})),c.prototype.add=function(e,t,n,a){var c;a=a||{},t instanceof RegExp?c=RegExp:c=(c=a.origin||self.location.origin)instanceof RegExp?c.source:function(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}(c),e=e.toLowerCase();var i=new r(e,t,n,a);this.routes.has(c)||this.routes.set(c,new Map);var s=this.routes.get(c);s.has(e)||s.set(e,new Map);var u=s.get(e),f=i.regexp||i.fullUrlRegExp;u.has(f.source)&&o.debug('"'+t+'" resolves to same regex as existing route.'),u.set(f.source,i)},c.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,a(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},c.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],c=o&&o.get(e.toLowerCase());if(c){var i=a(c,n);if(i.length>0)return i[0].makeHandler(n)}}return null},c.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new c},{"./helpers":1,"./route":5}],7:[function(e,t,n){var r=e("../options"),o=e("../helpers");t.exports=function(e,t,n){return n=n||{},o.debug("Strategy: cache first ["+e.url+"]",n),o.openCache(n).then((function(t){return t.match(e).then((function(t){var a=n.cache||r.cache,c=Date.now();return o.isResponseFresh(t,a.maxAgeSeconds,c)?t:o.fetchAndCache(e,n)}))}))}},{"../helpers":1,"../options":4}],8:[function(e,t,n){var r=e("../options"),o=e("../helpers");t.exports=function(e,t,n){return n=n||{},o.debug("Strategy: cache only ["+e.url+"]",n),o.openCache(n).then((function(t){return t.match(e).then((function(e){var t=n.cache||r.cache,a=Date.now();if(o.isResponseFresh(e,t.maxAgeSeconds,a))return e}))}))}},{"../helpers":1,"../options":4}],9:[function(e,t,n){var r=e("../helpers"),o=e("./cacheOnly");t.exports=function(e,t,n){return r.debug("Strategy: fastest ["+e.url+"]",n),new Promise((function(a,c){var i=!1,s=[],u=function(e){s.push(e.toString()),i?c(new Error('Both cache and network failed: "'+s.join('", "')+'"')):i=!0},f=function(e){e instanceof Response?a(e):u("No result returned")};r.fetchAndCache(e.clone(),n).then(f,u),o(e,t,n).then(f,u)}))}},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){var r=e("../options"),o=e("../helpers");t.exports=function(e,t,n){var a=(n=n||{}).successResponses||r.successResponses,c=n.networkTimeoutSeconds||r.networkTimeoutSeconds;return o.debug("Strategy: network first ["+e.url+"]",n),o.openCache(n).then((function(t){var i,s,u=[];if(c){var f=new Promise((function(a){i=setTimeout((function(){t.match(e).then((function(e){var t=n.cache||r.cache,c=Date.now(),i=t.maxAgeSeconds;o.isResponseFresh(e,i,c)&&a(e)}))}),1e3*c)}));u.push(f)}var h=o.fetchAndCache(e,n).then((function(e){if(i&&clearTimeout(i),a.test(e.status))return e;throw o.debug("Response was an HTTP error: "+e.statusText,n),s=e,new Error("Bad response")})).catch((function(r){return o.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then((function(e){if(e)return e;if(s)return s;throw r}))}));return u.push(h),Promise.race(u)}))}},{"../helpers":1,"../options":4}],12:[function(e,t,n){var r=e("../helpers");t.exports=function(e,t,n){return r.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}},{"../helpers":1}],13:[function(e,t,n){var r=e("./options"),o=e("./router"),a=e("./helpers"),c=e("./strategies"),i=e("./listeners");a.debug("Service Worker Toolbox is loading"),self.addEventListener("install",i.installListener),self.addEventListener("activate",i.activateListener),self.addEventListener("fetch",i.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:a.cache,uncache:a.uncache,precache:a.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,a=0,c="",u=t&&t.delimiter||"/";null!=(n=p.exec(e));){var f=n[0],h=n[1],d=n.index;if(c+=e.slice(a,d),a=d+f.length,h)c+=h[1];else{var l=e[a],m=n[2],b=n[3],g=n[4],x=n[5],v=n[6],w=n[7];c&&(r.push(c),c="");var y=null!=m&&null!=l&&l!==m,R="+"===v||"*"===v,E="?"===v||"*"===v,C=n[2]||u,k=g||x;r.push({name:b||o++,prefix:m||"",delimiter:C,optional:E,repeat:R,partial:y,asterisk:!!w,pattern:k?s(k):w?".*":"[^"+i(C)+"]+?"})}}return a<e.length&&(c+=e.substr(a)),c&&r.push(c),r}function o(e){return encodeURI(e).replace(/[\/?#]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}function a(e){return encodeURI(e).replace(/[?#]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}function c(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var c="",i=n||{},s=(r||{}).pretty?o:encodeURIComponent,u=0;u<e.length;u++){var f=e[u];if("string"!=typeof f){var h,d=i[f.name];if(null==d){if(f.optional){f.partial&&(c+=f.prefix);continue}throw new TypeError('Expected "'+f.name+'" to be defined')}if(l(d)){if(!f.repeat)throw new TypeError('Expected "'+f.name+'" to not repeat, but received `'+JSON.stringify(d)+"`");if(0===d.length){if(f.optional)continue;throw new TypeError('Expected "'+f.name+'" to not be empty')}for(var p=0;p<d.length;p++){if(h=s(d[p]),!t[u].test(h))throw new TypeError('Expected all "'+f.name+'" to match "'+f.pattern+'", but received `'+JSON.stringify(h)+"`");c+=(0===p?f.prefix:f.delimiter)+h}}else{if(h=f.asterisk?a(d):s(d),!t[u].test(h))throw new TypeError('Expected "'+f.name+'" to match "'+f.pattern+'", but received "'+h+'"');c+=f.prefix+h}}else c+=f}return c}}function i(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function s(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function u(e,t){return e.keys=t,e}function f(e){return e.sensitive?"":"i"}function h(e,t,n){l(t)||(n=t||n,t=[]);for(var r=(n=n||{}).strict,o=!1!==n.end,a="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)a+=i(s);else{var h=i(s.prefix),d="(?:"+s.pattern+")";t.push(s),s.repeat&&(d+="(?:"+h+d+")*"),a+=d=s.optional?s.partial?h+"("+d+")?":"(?:"+h+"("+d+"))?":h+"("+d+")"}}var p=i(n.delimiter||"/"),m=a.slice(-p.length)===p;return r||(a=(m?a.slice(0,-p.length):a)+"(?:"+p+"(?=$))?"),a+=o?"$":r&&m?"":"(?="+p+"|$)",u(new RegExp("^"+a,f(n)),t)}function d(e,t,n){return l(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?function(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return u(e,t)}(e,t):l(e)?function(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(d(e[o],t,n).source);return u(new RegExp("(?:"+r.join("|")+")",f(n)),t)}(e,t,n):function(e,t,n){return h(r(e,n),t,n)}(e,t,n)}var l=e("isarray");t.exports=d,t.exports.parse=r,t.exports.compile=function(e,t){return c(r(e,t))},t.exports.tokensToFunction=c,t.exports.tokensToRegExp=h;var p=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then((function(){if(arguments.length<1)throw new TypeError;return e=e.map((function(e){return e instanceof Request?e:String(e)})),Promise.all(e.map((function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())})))})).then((function(r){if(r.some((function(e){return!e.ok})))throw new t("Incorrect response status");return Promise.all(r.map((function(t,r){return n.put(e[r],t)})))})).then((function(){}))},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)})),toolbox.router.get("/*",toolbox.cacheFirst,{origin:"unpkg.com"}),toolbox.router.get("/*",toolbox.cacheFirst,{origin:"cdn.jsdelivr.net"});