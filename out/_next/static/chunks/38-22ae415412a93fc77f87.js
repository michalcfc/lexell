(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[38],{4098:function(t,e){var r="undefined"!==typeof self?self:this,n=function(){function t(){this.fetch=!1,this.DOMException=r.DOMException}return t.prototype=r,new t}();!function(t){!function(e){var r="URLSearchParams"in t,n="Symbol"in t&&"iterator"in Symbol,o="FileReader"in t&&"Blob"in t&&function(){try{return new Blob,!0}catch(t){return!1}}(),i="FormData"in t,s="ArrayBuffer"in t;if(s)var u=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],a=ArrayBuffer.isView||function(t){return t&&u.indexOf(Object.prototype.toString.call(t))>-1};function f(t){if("string"!==typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function h(t){return"string"!==typeof t&&(t=String(t)),t}function p(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return n&&(e[Symbol.iterator]=function(){return e}),e}function c(t){this.map={},t instanceof c?t.forEach((function(t,e){this.append(e,t)}),this):Array.isArray(t)?t.forEach((function(t){this.append(t[0],t[1])}),this):t&&Object.getOwnPropertyNames(t).forEach((function(e){this.append(e,t[e])}),this)}function l(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function d(t){return new Promise((function(e,r){t.onload=function(){e(t.result)},t.onerror=function(){r(t.error)}}))}function y(t){var e=new FileReader,r=d(e);return e.readAsArrayBuffer(t),r}function g(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function m(){return this.bodyUsed=!1,this._initBody=function(t){var e;this._bodyInit=t,t?"string"===typeof t?this._bodyText=t:o&&Blob.prototype.isPrototypeOf(t)?this._bodyBlob=t:i&&FormData.prototype.isPrototypeOf(t)?this._bodyFormData=t:r&&URLSearchParams.prototype.isPrototypeOf(t)?this._bodyText=t.toString():s&&o&&((e=t)&&DataView.prototype.isPrototypeOf(e))?(this._bodyArrayBuffer=g(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):s&&(ArrayBuffer.prototype.isPrototypeOf(t)||a(t))?this._bodyArrayBuffer=g(t):this._bodyText=t=Object.prototype.toString.call(t):this._bodyText="",this.headers.get("content-type")||("string"===typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):r&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},o&&(this.blob=function(){var t=l(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?l(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(y)}),this.text=function(){var t=l(this);if(t)return t;if(this._bodyBlob)return function(t){var e=new FileReader,r=d(e);return e.readAsText(t),r}(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(function(t){for(var e=new Uint8Array(t),r=new Array(e.length),n=0;n<e.length;n++)r[n]=String.fromCharCode(e[n]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},i&&(this.formData=function(){return this.text().then(b)}),this.json=function(){return this.text().then(JSON.parse)},this}c.prototype.append=function(t,e){t=f(t),e=h(e);var r=this.map[t];this.map[t]=r?r+", "+e:e},c.prototype.delete=function(t){delete this.map[f(t)]},c.prototype.get=function(t){return t=f(t),this.has(t)?this.map[t]:null},c.prototype.has=function(t){return this.map.hasOwnProperty(f(t))},c.prototype.set=function(t,e){this.map[f(t)]=h(e)},c.prototype.forEach=function(t,e){for(var r in this.map)this.map.hasOwnProperty(r)&&t.call(e,this.map[r],r,this)},c.prototype.keys=function(){var t=[];return this.forEach((function(e,r){t.push(r)})),p(t)},c.prototype.values=function(){var t=[];return this.forEach((function(e){t.push(e)})),p(t)},c.prototype.entries=function(){var t=[];return this.forEach((function(e,r){t.push([r,e])})),p(t)},n&&(c.prototype[Symbol.iterator]=c.prototype.entries);var v=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function w(t,e){var r=(e=e||{}).body;if(t instanceof w){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new c(t.headers)),this.method=t.method,this.mode=t.mode,this.signal=t.signal,r||null==t._bodyInit||(r=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"same-origin",!e.headers&&this.headers||(this.headers=new c(e.headers)),this.method=function(t){var e=t.toUpperCase();return v.indexOf(e)>-1?e:t}(e.method||this.method||"GET"),this.mode=e.mode||this.mode||null,this.signal=e.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&r)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(r)}function b(t){var e=new FormData;return t.trim().split("&").forEach((function(t){if(t){var r=t.split("="),n=r.shift().replace(/\+/g," "),o=r.join("=").replace(/\+/g," ");e.append(decodeURIComponent(n),decodeURIComponent(o))}})),e}function k(t){var e=new c;return t.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach((function(t){var r=t.split(":"),n=r.shift().trim();if(n){var o=r.join(":").trim();e.append(n,o)}})),e}function A(t,e){e||(e={}),this.type="default",this.status=void 0===e.status?200:e.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new c(e.headers),this.url=e.url||"",this._initBody(t)}w.prototype.clone=function(){return new w(this,{body:this._bodyInit})},m.call(w.prototype),m.call(A.prototype),A.prototype.clone=function(){return new A(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new c(this.headers),url:this.url})},A.error=function(){var t=new A(null,{status:0,statusText:""});return t.type="error",t};var E=[301,302,303,307,308];A.redirect=function(t,e){if(-1===E.indexOf(e))throw new RangeError("Invalid status code");return new A(null,{status:e,headers:{location:t}})},e.DOMException=t.DOMException;try{new e.DOMException}catch(B){e.DOMException=function(t,e){this.message=t,this.name=e;var r=Error(t);this.stack=r.stack},e.DOMException.prototype=Object.create(Error.prototype),e.DOMException.prototype.constructor=e.DOMException}function x(t,r){return new Promise((function(n,i){var s=new w(t,r);if(s.signal&&s.signal.aborted)return i(new e.DOMException("Aborted","AbortError"));var u=new XMLHttpRequest;function a(){u.abort()}u.onload=function(){var t={status:u.status,statusText:u.statusText,headers:k(u.getAllResponseHeaders()||"")};t.url="responseURL"in u?u.responseURL:t.headers.get("X-Request-URL");var e="response"in u?u.response:u.responseText;n(new A(e,t))},u.onerror=function(){i(new TypeError("Network request failed"))},u.ontimeout=function(){i(new TypeError("Network request failed"))},u.onabort=function(){i(new e.DOMException("Aborted","AbortError"))},u.open(s.method,s.url,!0),"include"===s.credentials?u.withCredentials=!0:"omit"===s.credentials&&(u.withCredentials=!1),"responseType"in u&&o&&(u.responseType="blob"),s.headers.forEach((function(t,e){u.setRequestHeader(e,t)})),s.signal&&(s.signal.addEventListener("abort",a),u.onreadystatechange=function(){4===u.readyState&&s.signal.removeEventListener("abort",a)}),u.send("undefined"===typeof s._bodyInit?null:s._bodyInit)}))}x.polyfill=!0,t.fetch||(t.fetch=x,t.Headers=c,t.Request=w,t.Response=A),e.Headers=c,e.Request=w,e.Response=A,e.fetch=x,Object.defineProperty(e,"__esModule",{value:!0})}({})}(n),n.fetch.ponyfill=!0,delete n.fetch.polyfill;var o=n;(e=o.fetch).default=o.fetch,e.fetch=o.fetch,e.Headers=o.Headers,e.Request=o.Request,e.Response=o.Response,t.exports=e},5038:function(t,e,r){"use strict";var n=r(4098),o=function(){return(o=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},i=function(){function t(t){this.data={},this.data=t}return t.prototype.id=function(){return this.data.id},t.prototype.ref=function(){return this.data.ref},t.prototype.label=function(){return this.data.label},t}(),s=function(){function t(t){this.data={},this.data=t,this.variations=(t.variations||[]).map((function(t){return new i(t)}))}return t.prototype.id=function(){return this.data.id},t.prototype.googleId=function(){return this.data.googleId},t.prototype.name=function(){return this.data.name},t}(),u=function(){function t(t){t&&(this.drafts=(t.drafts||[]).map((function(t){return new s(t)})),this.running=(t.running||[]).map((function(t){return new s(t)})))}return t.prototype.current=function(){return this.running.length>0?this.running[0]:null},t.prototype.refFromCookie=function(t){if(!t||""===t.trim())return null;var e=t.trim().split(" ");if(e.length<2)return null;var r=e[0],n=parseInt(e[1],10),o=this.running.filter((function(t){return t.googleId()===r&&t.variations.length>n}))[0];return o?o.variations[n].ref():null},t}(),a=function(){function t(t,e){this.id=t,this.api=e,this.fields={}}return t.prototype.set=function(t,e){return this.fields[t]=e,this},t.prototype.ref=function(t){return this.set("ref",t)},t.prototype.query=function(t){return this.set("q",t)},t.prototype.pageSize=function(t){return this.set("pageSize",t)},t.prototype.fetch=function(t){return console.warn("Warning: Using Fetch is deprecated. Use the property `graphQuery` instead."),this.set("fetch",t)},t.prototype.fetchLinks=function(t){return console.warn("Warning: Using FetchLinks is deprecated. Use the property `graphQuery` instead."),this.set("fetchLinks",t)},t.prototype.graphQuery=function(t){return this.set("graphQuery",t)},t.prototype.lang=function(t){return this.set("lang",t)},t.prototype.page=function(t){return this.set("page",t)},t.prototype.after=function(t){return this.set("after",t)},t.prototype.orderings=function(t){return this.set("orderings",t)},t.prototype.url=function(){var e=this;return this.api.get().then((function(r){return t.toSearchForm(e,r).url()}))},t.prototype.submit=function(e){var r=this;return this.api.get().then((function(n){return t.toSearchForm(r,n).submit(e)}))},t.toSearchForm=function(t,e){var r=e.form(t.id);if(r)return Object.keys(t.fields).reduce((function(e,r){var n=t.fields[r];return"q"===r?e.query(n):"pageSize"===r?e.pageSize(n):"fetch"===r?e.fetch(n):"fetchLinks"===r?e.fetchLinks(n):"graphQuery"===r?e.graphQuery(n):"lang"===r?e.lang(n):"page"===r?e.page(n):"after"===r?e.after(n):"orderings"===r?e.orderings(n):e.set(r,n)}),r);throw new Error("Unable to access to form "+t.id)},t}(),f=function(){function t(t,e){for(var r in this.httpClient=e,this.form=t,this.data={},t.fields)t.fields[r].default&&(this.data[r]=[t.fields[r].default])}return t.prototype.set=function(t,e){var r=this.form.fields[t];if(!r)throw new Error("Unknown field "+t);var n=""===e||void 0===e?null:e,o=this.data[t]||[];return o=r.multiple?n?o.concat([n]):o:n?[n]:o,this.data[t]=o,this},t.prototype.ref=function(t){return this.set("ref",t)},t.prototype.query=function(t){if("string"===typeof t)return this.query([t]);if(Array.isArray(t))return this.set("q","["+t.join("")+"]");throw new Error("Invalid query : "+t)},t.prototype.pageSize=function(t){return this.set("pageSize",t)},t.prototype.fetch=function(t){console.warn("Warning: Using Fetch is deprecated. Use the property `graphQuery` instead.");var e=Array.isArray(t)?t.join(","):t;return this.set("fetch",e)},t.prototype.fetchLinks=function(t){console.warn("Warning: Using FetchLinks is deprecated. Use the property `graphQuery` instead.");var e=Array.isArray(t)?t.join(","):t;return this.set("fetchLinks",e)},t.prototype.graphQuery=function(t){return this.set("graphQuery",t)},t.prototype.lang=function(t){return this.set("lang",t)},t.prototype.page=function(t){return this.set("page",t)},t.prototype.after=function(t){return this.set("after",t)},t.prototype.orderings=function(t){return t?this.set("orderings","["+t.join(",")+"]"):this},t.prototype.url=function(){var t=this.form.action;if(this.data){var e=t.indexOf("?")>-1?"&":"?";for(var r in this.data)if(Object.prototype.hasOwnProperty.call(this.data,r)){var n=this.data[r];if(n)for(var o=0;o<n.length;o++)t+=e+r+"="+encodeURIComponent(n[o]),e="&"}}return t},t.prototype.submit=function(t){return this.httpClient.cachedRequest(this.url()).then((function(e){return t&&t(null,e),e})).catch((function(e){throw t&&t(e),e}))},t}(),h="at",p="not",c="missing",l="has",d="any",y="in",g="fulltext",m="similar",v="number.gt",w="number.lt",b="number.inRange",k="date.before",A="date.after",E="date.between",x="date.day-of-month",B="date.day-of-month-after",O="date.day-of-month-before",_="date.day-of-week",D="date.day-of-week-after",I="date.day-of-week-before",T="date.month",U="date.month-before",q="date.month-after",R="date.year",S="date.hour",P="date.hour-before",j="date.hour-after",F="geopoint.near";function M(t){if("string"===typeof t)return'"'+t+'"';if("number"===typeof t)return t.toString();if(t instanceof Date)return t.getTime().toString();if(Array.isArray(t))return"["+t.map((function(t){return M(t)})).join(",")+"]";if("boolean"===typeof t)return t.toString();throw new Error("Unable to encode "+t+" of type "+typeof t)}var C={near:function(t,e,r,n){return"["+F+"("+t+", "+e+", "+r+", "+n+")]"}},L={before:function(t,e){return"["+k+"("+t+", "+M(e)+")]"},after:function(t,e){return"["+A+"("+t+", "+M(e)+")]"},between:function(t,e,r){return"["+E+"("+t+", "+M(e)+", "+M(r)+")]"},dayOfMonth:function(t,e){return"["+x+"("+t+", "+e+")]"},dayOfMonthAfter:function(t,e){return"["+B+"("+t+", "+e+")]"},dayOfMonthBefore:function(t,e){return"["+O+"("+t+", "+e+")]"},dayOfWeek:function(t,e){return"["+_+"("+t+", "+M(e)+")]"},dayOfWeekAfter:function(t,e){return"["+D+"("+t+", "+M(e)+")]"},dayOfWeekBefore:function(t,e){return"["+I+"("+t+", "+M(e)+")]"},month:function(t,e){return"["+T+"("+t+", "+M(e)+")]"},monthBefore:function(t,e){return"["+U+"("+t+", "+M(e)+")]"},monthAfter:function(t,e){return"["+q+"("+t+", "+M(e)+")]"},year:function(t,e){return"["+R+"("+t+", "+e+")]"},hour:function(t,e){return"["+S+"("+t+", "+e+")]"},hourBefore:function(t,e){return"["+P+"("+t+", "+e+")]"},hourAfter:function(t,e){return"["+j+"("+t+", "+e+")]"}},z={gt:function(t,e){return"["+v+"("+t+", "+e+")]"},lt:function(t,e){return"["+w+"("+t+", "+e+")]"},inRange:function(t,e,r){return"["+b+"("+t+", "+e+", "+r+")]"}},H={at:function(t,e){return"["+h+"("+t+", "+M(e)+")]"},not:function(t,e){return"["+p+"("+t+", "+M(e)+")]"},missing:function(t){return"["+c+"("+t+")]"},has:function(t){return"["+l+"("+t+")]"},any:function(t,e){return"["+d+"("+t+", "+M(e)+")]"},in:function(t,e){return"["+y+"("+t+", "+M(e)+")]"},fulltext:function(t,e){return"["+g+"("+t+", "+M(e)+")]"},similar:function(t,e){return"["+m+'("'+t+'", '+e+")]"},date:L,dateBefore:L.before,dateAfter:L.after,dateBetween:L.between,dayOfMonth:L.dayOfMonth,dayOfMonthAfter:L.dayOfMonthAfter,dayOfMonthBefore:L.dayOfMonthBefore,dayOfWeek:L.dayOfWeek,dayOfWeekAfter:L.dayOfWeekAfter,dayOfWeekBefore:L.dayOfWeekBefore,month:L.month,monthBefore:L.monthBefore,monthAfter:L.monthAfter,year:L.year,hour:L.hour,hourBefore:L.hourBefore,hourAfter:L.hourAfter,number:z,gt:z.gt,lt:z.lt,inRange:z.inRange,near:C.near,geopoint:C},W=decodeURIComponent;var Q={parse:function(t,e){if("string"!==typeof t)throw new TypeError("argument str must be a string");var r={},n=e||{},o=t.split(/; */),i=n.decode||W;return o.forEach((function(t){var e=t.indexOf("=");if(!(e<0)){var n=t.substr(0,e).trim(),o=t.substr(++e,t.length).trim();'"'==o[0]&&(o=o.slice(1,-1)),void 0==r[n]&&(r[n]=function(t,e){try{return e(t)}catch(r){return t}}(o,i))}})),r}};function N(t,e,r){return{token:t,documentId:e,resolve:function(n,o,i){return e&&r?r(e,{ref:t}).then((function(t){if(t){var e=n&&n(t)||t.url||o;return i&&i(null,e),e}return i&&i(null,o),o})):Promise.resolve(o)}}}var G="io.prismic.preview",J="io.prismic.experiment",K=function(){function t(t,e,r){this.data=t,this.masterRef=t.refs.filter((function(t){return t.isMasterRef}))[0],this.experiments=new u(t.experiments),this.bookmarks=t.bookmarks,this.httpClient=e,this.options=r,this.refs=t.refs,this.tags=t.tags,this.types=t.types,this.languages=t.languages}return t.prototype.form=function(t){var e=this.data.forms[t];return e?new f(e,this.httpClient):null},t.prototype.everything=function(){var t=this.form("everything");if(!t)throw new Error("Missing everything form");return t},t.prototype.master=function(){return this.masterRef.ref},t.prototype.ref=function(t){var e=this.data.refs.filter((function(e){return e.label===t}))[0];return e?e.ref:null},t.prototype.currentExperiment=function(){return this.experiments.current()},t.prototype.query=function(t,e,r){void 0===r&&(r=function(){});var n="function"===typeof e?{options:{},callback:e}:{options:e||{},callback:r},o=n.options,i=n.callback,s=this.everything();for(var u in o)s=s.set(u,o[u]);if(!o.ref){var a="";this.options.req?a=this.options.req.headers.cookie||"":"undefined"!==typeof window&&window.document&&(a=window.document.cookie||"");var f=Q.parse(a),h=f[G],p=this.experiments.refFromCookie(f[J]);s=s.ref(h||p||this.masterRef.ref)}return t&&s.query(t),s.submit(i)},t.prototype.queryFirst=function(t,e,r){var n="function"===typeof e?{options:{},callback:e}:{options:e||{},callback:r||function(){}},o=n.options,i=n.callback;return o.page=1,o.pageSize=1,this.query(t,o).then((function(t){var e=t&&t.results&&t.results[0];return i(null,e),e})).catch((function(t){throw i(t),t}))},t.prototype.getByID=function(t,e,r){var n=e?o({},e):{};return n.lang||(n.lang="*"),this.queryFirst(H.at("document.id",t),n,r)},t.prototype.getByIDs=function(t,e,r){var n=e?o({},e):{};return n.lang||(n.lang="*"),this.query(H.in("document.id",t),n,r)},t.prototype.getByUID=function(t,e,r,n){var i=r?o({},r):{};if("*"===i.lang)throw new Error("FORBIDDEN. You can't use getByUID with *, use the predicates instead.");return i.page||(i.page=1),this.queryFirst(H.at("my."+t+".uid",e),i,n)},t.prototype.getSingle=function(t,e,r){var n=e?o({},e):{};return this.queryFirst(H.at("document.type",t),n,r)},t.prototype.getBookmark=function(t,e,r){var n=this.data.bookmarks[t];return n?this.getByID(n,e,r):Promise.reject("Error retrieving bookmarked id")},t.prototype.getPreviewResolver=function(t,e){return N(t,e,this.getByID.bind(this))},t.prototype.previewSession=function(t,e,r,n){var o=this;return console.warn("previewSession function is deprecated in favor of getPreviewResolver function."),new Promise((function(i,s){o.httpClient.request(t,(function(u,a){if(u)n&&n(u),s(u);else if(a){if(a.mainDocument)return o.getByID(a.mainDocument,{ref:t}).then((function(t){if(t){var o=e&&e(t)||t.url||r;n&&n(null,o),i(o)}else n&&n(null,r),i(r)})).catch(s);n&&n(null,r),i(r)}}))}))},t}();function V(t){this.size=0,this.limit=t,this._keymap={}}V.prototype.put=function(t,e){var r={key:t,value:e};if(this._keymap[t]=r,this.tail?(this.tail.newer=r,r.older=this.tail):this.head=r,this.tail=r,this.size===this.limit)return this.shift();this.size++},V.prototype.shift=function(){var t=this.head;return t&&(this.head.newer?(this.head=this.head.newer,this.head.older=void 0):this.head=void 0,t.newer=t.older=void 0,delete this._keymap[t.key]),console.log("purging ",t.key),t},V.prototype.get=function(t,e){var r=this._keymap[t];if(void 0!==r)return r===this.tail||(r.newer&&(r===this.head&&(this.head=r.newer),r.newer.older=r.older),r.older&&(r.older.newer=r.newer),r.newer=void 0,r.older=this.tail,this.tail&&(this.tail.newer=r),this.tail=r),e?r:r.value},V.prototype.find=function(t){return this._keymap[t]},V.prototype.set=function(t,e){var r,n=this.get(t,!0);return n?(r=n.value,n.value=e):(r=this.put(t,e))&&(r=r.value),r},V.prototype.remove=function(t){var e=this._keymap[t];if(e)return delete this._keymap[e.key],e.newer&&e.older?(e.older.newer=e.newer,e.newer.older=e.older):e.newer?(e.newer.older=void 0,this.head=e.newer):e.older?(e.older.newer=void 0,this.tail=e.older):this.head=this.tail=void 0,this.size--,e.value},V.prototype.removeAll=function(){this.head=this.tail=void 0,this.size=0,this._keymap={}},"function"===typeof Object.keys?V.prototype.keys=function(){return Object.keys(this._keymap)}:V.prototype.keys=function(){var t=[];for(var e in this._keymap)t.push(e);return t},V.prototype.forEach=function(t,e,r){var n;if(!0===e?(r=!0,e=void 0):"object"!==typeof e&&(e=this),r)for(n=this.tail;n;)t.call(e,n.key,n.value,this),n=n.older;else for(n=this.head;n;)t.call(e,n.key,n.value,this),n=n.newer},V.prototype.toString=function(){for(var t="",e=this.head;e;)t+=String(e.key)+":"+e.value,(e=e.newer)&&(t+=" < ");return t};var X=function(){function t(t){void 0===t&&(t=1e3),this.lru=function(t){return new V(t)}(t)}return t.prototype.isExpired=function(t){var e=this.lru.get(t,!1);return!!e&&(0!==e.expiredIn&&e.expiredIn<Date.now())},t.prototype.get=function(t,e){var r=this.lru.get(t,!1);r&&!this.isExpired(t)?e(null,r.data):e&&e(null)},t.prototype.set=function(t,e,r,n){this.lru.remove(t),this.lru.put(t,{data:e,expiredIn:r?Date.now()+1e3*r:0}),n&&n(null)},t.prototype.remove=function(t,e){this.lru.remove(t),e&&e(null)},t.prototype.clear=function(t){this.lru.removeAll(),t&&t(null)},t}();var Y=function(){function t(t){this.options=t||{}}return t.prototype.request=function(t,e){!function(t,e,r){var o,i={headers:{Accept:"application/json"}};e&&e.proxyAgent&&(i.agent=e.proxyAgent);var s=n(t,i);(e.timeoutInMs?Promise.race([s,new Promise((function(r,n){o=setTimeout((function(){return n(new Error(t+" response timeout"))}),e.timeoutInMs)}))]):s).then((function(e){return clearTimeout(o),~~(e.status/100!==2)?e.text().then((function(){var r=new Error("Unexpected status code ["+e.status+"] on URL "+t);throw r.status=e.status,r})):e.json().then((function(t){var n=e.headers.get("cache-control"),o=n?/max-age=(\d+)/.exec(n):null,i=o?parseInt(o[1],10):void 0;r(null,t,e,i)}))})).catch((function(t){clearTimeout(o),r(t)}))}(t,this.options,e)},t}(),Z=function(){function t(t,e,r,n){this.requestHandler=t||new Y({proxyAgent:r,timeoutInMs:n}),this.cache=e||new X}return t.prototype.request=function(t,e){this.requestHandler.request(t,(function(t,r,n,o){t?e&&e(t,null,n,o):r&&e&&e(null,r,n,o)}))},t.prototype.cachedRequest=function(t,e){var r=this,n=e||{};return new Promise((function(e,o){!function(e){var o=n.cacheKey||t;r.cache.get(o,(function(i,s){i||s?e(i,s):r.request(t,(function(t,i,s,u){if(t)e(t,null);else{var a=u||n.ttl;a&&r.cache.set(o,i,a,e),e(null,i)}}))}))}((function(t,r){t&&o(t),r&&e(r)}))}))},t}();function $(t){return t.indexOf("?")>-1?"&":"?"}var tt=function(){function t(t,e){if(this.options=e||{},this.url=t,this.options.accessToken){var r="access_token="+this.options.accessToken;this.url+=$(t)+r}this.options.routes&&(this.url+=$(t)+"routes="+encodeURIComponent(JSON.stringify(this.options.routes))),this.apiDataTTL=this.options.apiDataTTL||5,this.httpClient=new Z(this.options.requestHandler,this.options.apiCache,this.options.proxyAgent,this.options.timeoutInMs)}return t.prototype.get=function(t){var e=this;return this.httpClient.cachedRequest(this.url,{ttl:this.apiDataTTL}).then((function(r){var n=new K(r,e.httpClient,e.options);return t&&t(null,n),n})).catch((function(e){throw t&&t(e),e}))},t}(),et=function(){function t(t,e){this.api=new tt(t,e)}return t.prototype.getApi=function(){return this.api.get()},t.prototype.everything=function(){return this.form("everything")},t.prototype.form=function(t){return new a(t,this.api)},t.prototype.query=function(t,e,r){return this.getApi().then((function(n){return n.query(t,e,r)}))},t.prototype.queryFirst=function(t,e,r){return this.getApi().then((function(n){return n.queryFirst(t,e,r)}))},t.prototype.getByID=function(t,e,r){return this.getApi().then((function(n){return n.getByID(t,e,r)}))},t.prototype.getByIDs=function(t,e,r){return this.getApi().then((function(n){return n.getByIDs(t,e,r)}))},t.prototype.getByUID=function(t,e,r,n){return this.getApi().then((function(o){return o.getByUID(t,e,r,n)}))},t.prototype.getSingle=function(t,e,r){return this.getApi().then((function(n){return n.getSingle(t,e,r)}))},t.prototype.getBookmark=function(t,e,r){return this.getApi().then((function(n){return n.getBookmark(t,e,r)}))},t.prototype.previewSession=function(t,e,r,n){return this.getApi().then((function(o){return o.previewSession(t,e,r,n)}))},t.prototype.getPreviewResolver=function(t,e){var r=this;return N(t,e,(function(t,e){return r.getApi().then((function(r){return r.getByID(t,e)}))}))},t.getApi=function(t,e){return new tt(t,e).get()},t}(),rt={experimentCookie:J,previewCookie:G,Predicates:H,Experiments:u,Api:tt,client:function(t,e){return new et(t,e)},getApi:nt,api:function(t,e){return nt(t,e)}};function nt(t,e){return et.getApi(t,e)}e.Z=rt}}]);