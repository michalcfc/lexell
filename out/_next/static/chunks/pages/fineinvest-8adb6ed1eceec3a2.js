(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[902],{7285:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AmpStateContext=void 0;var r=(0,n(2648).Z)(n(7294)).default.createContext({});t.AmpStateContext=r},354:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isInAmpMode=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=e.hybrid,r=e.hasQuery;return void 0!==t&&t||void 0!==n&&n&&void 0!==r&&r}},6505:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.defaultHead=f,t.default=void 0;var r=n(6495).Z,a=n(2648).Z,u=(0,n(1598).Z)(n(7294)),o=a(n(148)),i=n(7285),d=n(523),c=n(354);function f(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[u.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(u.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function s(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===u.default.Fragment?e.concat(u.default.Children.toArray(t.props.children).reduce(function(e,t){return"string"==typeof t||"number"==typeof t?e:e.concat(t)},[])):e.concat(t)}n(2783);var l=["name","httpEquiv","charSet","itemProp"];function p(e,t){var n,a,o,i,d=t.inAmpMode;return e.reduce(s,[]).reverse().concat(f(d).reverse()).filter((n=new Set,a=new Set,o=new Set,i={},function(e){var t=!0,r=!1;if(e.key&&"number"!=typeof e.key&&e.key.indexOf("$")>0){r=!0;var u=e.key.slice(e.key.indexOf("$")+1);n.has(u)?t=!1:n.add(u)}switch(e.type){case"title":case"base":a.has(e.type)?t=!1:a.add(e.type);break;case"meta":for(var d=0,c=l.length;d<c;d++){var f=l[d];if(e.props.hasOwnProperty(f)){if("charSet"===f)o.has(f)?t=!1:o.add(f);else{var s=e.props[f],p=i[f]||new Set;("name"!==f||!r)&&p.has(s)?t=!1:(p.add(s),i[f]=p)}}}}return t})).reverse().map(function(e,t){var n=e.key||t;if(!d&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(function(t){return e.props.href.startsWith(t)})){var a=r({},e.props||{});return a["data-href"]=a.href,a.href=void 0,a["data-optimized-fonts"]=!0,u.default.cloneElement(e,a)}return u.default.cloneElement(e,{key:n})})}t.default=function(e){var t=e.children,n=u.useContext(i.AmpStateContext),r=u.useContext(d.HeadManagerContext);return u.default.createElement(o.default,{reduceComponentsToState:p,headManager:r,inAmpMode:c.isInAmpMode(n)},t)},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},148:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t,n=e.headManager,i=e.reduceComponentsToState;function d(){if(n&&n.mountedInstances){var t=r.Children.toArray(Array.from(n.mountedInstances).filter(Boolean));n.updateHead(i(t,e))}}return a&&(null==n||null==(t=n.mountedInstances)||t.add(e.children),d()),u(function(){var t;return null==n||null==(t=n.mountedInstances)||t.add(e.children),function(){var t;null==n||null==(t=n.mountedInstances)||t.delete(e.children)}}),u(function(){return n&&(n._pendingUpdate=d),function(){n&&(n._pendingUpdate=d)}}),o(function(){return n&&n._pendingUpdate&&(n._pendingUpdate(),n._pendingUpdate=null),function(){n&&n._pendingUpdate&&(n._pendingUpdate(),n._pendingUpdate=null)}}),null};var r=(0,n(1598).Z)(n(7294)),a=!1,u=r.useLayoutEffect,o=a?function(){}:r.useEffect},2783:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.warnOnce=void 0,t.warnOnce=function(e){}},5298:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return d}});var r=n(8507),a=n(9008),u=n.n(a),o=n(2028),i=n(5893),d=!0;t.default=function(e){var t=e.navigation;return(0,i.jsx)(o.Z,{homeDoc:t,children:(0,i.jsxs)(r.Z,{children:[(0,i.jsx)(u(),{children:(0,i.jsx)("title",{children:"Fineinvest"})}),(0,i.jsx)("h2",{children:"Fineinvest"})]})})}},8366:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/fineinvest",function(){return n(5298)}])},9008:function(e,t,n){e.exports=n(6505)}},function(e){e.O(0,[523,112,423,637,28,774,888,179],function(){return e(e.s=8366)}),_N_E=e.O()}]);