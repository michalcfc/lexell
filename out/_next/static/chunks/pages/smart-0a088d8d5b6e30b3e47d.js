(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[384],{549:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(5893),o=n(8005),i=n(9163).ZP.div.withConfig({displayName:"Gridstyles__GridStyles",componentId:"rkkib5-0"})(["",";display:grid;grid-gap:",";row-gap:",";column-gap:",";align-items:",";grid-template-rows:",";grid-auto-columns:",";grid-auto-flow:",";margin-top:",";& a{text-decoration:none;}@media (min-width:800px){grid-template-columns:",";margin-top:",";}"],o.Dh,(function(e){return e.gridGap}),(function(e){return e.rowGap}),(function(e){return e.columnGap}),(function(e){return e.alignItems}),(function(e){return e.rows}),(function(e){return e.autoColumns}),(function(e){return e.autoFlow}),(function(e){var t=e.customMargin;return"".concat(t/2,"rem")}),(function(e){return e.columns}),(function(e){var t=e.customMargin;return"".concat(t,"rem")})),a=function(e){var t=e.rows,n=e.rowGap,o=e.columns,a=e.gridGap,u=e.children,s=e.columnGap,c=e.autoColumns,d=e.customMargin,l=e.alignItems,f=e.autoFlow,p=e.mt,m=e.p;return(0,r.jsx)(i,{p:m,mt:p,rows:t,rowGap:n,gridGap:a,columns:o,alignItems:l,customMargin:d,columnGap:s,autoColumns:c,autoFlow:f,children:u})}},5670:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var r=n(5893),o=n(7294),i=n(1664),a=n(9163),u=n(7595),s=a.ZP.div.withConfig({displayName:"MenuAsidestyles__MenuAsideWrapper",componentId:"sc-1khw9bl-0"})(["font-size:.875rem;background:",";padding:",";"],(function(e){return e.theme.colors.white}),(function(e){return e.theme.spacing.md})),c=a.ZP.div.withConfig({displayName:"MenuAsidestyles__MenuAsideContent",componentId:"sc-1khw9bl-1"})(["margin:0 2rem;"]),d=a.ZP.div.withConfig({displayName:"MenuAsidestyles__MenuItem",componentId:"sc-1khw9bl-2"})(["padding:"," 0;border-bottom:1px solid ",";&:hover{color:",";}"],(function(e){return e.theme.spacing.sm}),(function(e){var t=e.theme;return(0,u.$n)(.5,t.colors.gray)}),(function(e){return e.theme.colors.brand})),l=a.ZP.div.withConfig({displayName:"MenuAsidestyles__CurrentPage",componentId:"sc-1khw9bl-3"})(["cursor:pointer;font-weight:",";"],(function(e){return e.fontBold&&"bold"})),f=function(e){var t=e.categories,n=(0,o.useState)(null),a=n[0],u=n[1];return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s,{children:(0,r.jsxs)(c,{children:[(0,r.jsx)("h4",{children:"Us\u0142ugi:"}),(0,r.jsx)("ul",{children:t.map((function(e){return(0,r.jsx)(d,{children:(0,r.jsx)(i.default,{href:e.url,children:(0,r.jsx)(l,{fontBold:a===e.id,onClick:function(){return u(e.id)},children:e.name})})})}))})]})}),t.map((function(e){return(0,r.jsx)(r.Fragment,{children:a===e.id?(0,r.jsx)("p",{children:e.desc}):""})}))]})}},9277:function(e,t,n){"use strict";n.d(t,{Z:function(){return g}});var r=n(5893),o=n(7294),i=n(1664),a=n(9163),u=n(7595),s=a.ZP.div.withConfig({displayName:"MenuAsideMobilestyles__MenuAsideMobileWrapper",componentId:"sc-1ulxcm5-0"})(["font-size:2.5rem;position:relative;background:",";"],(function(e){return e.theme.colors.white})),c=a.ZP.div.withConfig({displayName:"MenuAsideMobilestyles__MenuAsideMobileContent",componentId:"sc-1ulxcm5-1"})(["margin:0 2rem;position:absolute;top:0;transform:translate(-10%,32%);padding:"," ",";box-shadow:",";background:",";"],(function(e){return e.theme.spacing.sm}),(function(e){return e.theme.spacing.md}),(function(e){return e.theme.boxShadow}),(function(e){return e.theme.colors.white})),d=a.ZP.div.withConfig({displayName:"MenuAsideMobilestyles__MenuAsideMobileButtonWrapper",componentId:"sc-1ulxcm5-2"})(["max-width:6rem;display:flex;justify-content:space-around;box-shadow:",";"],(function(e){return e.theme.boxShadow})),l=a.ZP.div.withConfig({displayName:"MenuAsideMobilestyles__MenuAsideMobileButtonContent",componentId:"sc-1ulxcm5-3"})(["padding:",";"],(function(e){return e.theme.spacing.sm})),f=a.ZP.div.withConfig({displayName:"MenuAsideMobilestyles__MenuItem",componentId:"sc-1ulxcm5-4"})(["padding:"," 0;&:not(:last-child){border-bottom:1px solid ",";}&:hover{color:",";}"],(function(e){return e.theme.spacing.sm}),(function(e){var t=e.theme;return(0,u.$n)(.5,t.colors.gray)}),(function(e){return e.theme.colors.brand})),p=a.ZP.div.withConfig({displayName:"MenuAsideMobilestyles__CurrentPage",componentId:"sc-1ulxcm5-5"})(["cursor:pointer;font-weight:",";"],(function(e){return e.fontBold&&"bold"})),m=n(7814),h=n(1436),g=function(e){var t=e.categories,n=(0,o.useState)(null),a=n[0],u=n[1],g=(0,o.useState)(!1),y=g[0],v=g[1];return(0,r.jsxs)(s,{children:[(0,r.jsx)(d,{onClick:function(){return v(!y)},children:(0,r.jsxs)(l,{children:["Us\u0142ugi ",(0,r.jsx)(m.G,{icon:h.eW2})]})}),y&&(0,r.jsx)("div",{children:(0,r.jsxs)(c,{children:[!y&&(0,r.jsx)("h4",{children:"Us\u0142ugi:"}),(0,r.jsx)("ul",{children:t.map((function(e){return(0,r.jsx)(f,{children:(0,r.jsx)(i.default,{href:e.url,children:(0,r.jsx)(p,{fontBold:a===e.id,onClick:function(){return u(e.id)},children:e.name})})})}))})]})}),t.map((function(e){return(0,r.jsx)(r.Fragment,{children:a===e.id?(0,r.jsx)("p",{children:e.desc}):""})}))]})}},3367:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},7845:function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=a,t.useAmp=function(){return a(o.default.useContext(i.AmpStateContext))};var r,o=(r=n(7294))&&r.__esModule?r:{default:r},i=n(3367);function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,i=e.hasQuery,a=void 0!==i&&i;return n||o&&a}},7947:function(e,t,n){"use strict";var r=n(1682);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}t.__esModule=!0,t.defaultHead=f,t.default=void 0;var i,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n(7294)),u=(i=n(617))&&i.__esModule?i:{default:i},s=n(3367),c=n(4287),d=n(7845);function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function f(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var m=["name","httpEquiv","charSet","itemProp"];function h(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(p,[]).reverse().concat(f(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var i=!0,a=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){a=!0;var u=o.key.slice(o.key.indexOf("$")+1);e.has(u)?i=!1:e.add(u)}switch(o.type){case"title":case"base":t.has(o.type)?i=!1:t.add(o.type);break;case"meta":for(var s=0,c=m.length;s<c;s++){var d=m[s];if(o.props.hasOwnProperty(d))if("charSet"===d)n.has(d)?i=!1:n.add(d);else{var l=o.props[d],f=r[d]||new Set;"name"===d&&a||!f.has(l)?(f.add(l),r[d]=f):i=!1}}}return i}}()).reverse().map((function(e,n){var i=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var u=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.props||{});return u["data-href"]=u.href,u.href=void 0,u["data-optimized-fonts"]=!0,a.default.cloneElement(e,u)}return a.default.cloneElement(e,{key:i})}))}function g(e){var t=e.children,n=(0,a.useContext)(s.AmpStateContext),r=(0,a.useContext)(c.HeadManagerContext);return a.default.createElement(u.default,{reduceComponentsToState:h,headManager:r,inAmpMode:(0,d.isInAmpMode)(n)},t)}g.rewind=function(){};var y=g;t.default=y},617:function(e,t,n){"use strict";var r=n(3115),o=n(2553),i=n(2012),a=(n(450),n(9807)),u=n(7690),s=n(9828);function c(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var o=s(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return u(this,n)}}t.__esModule=!0,t.default=void 0;var d=n(7294),l=function(e){a(n,e);var t=c(n);function n(e){var i;return o(this,n),(i=t.call(this,e))._hasHeadManager=void 0,i.emitChange=function(){i._hasHeadManager&&i.props.headManager.updateHead(i.props.reduceComponentsToState(r(i.props.headManager.mountedInstances),i.props))},i._hasHeadManager=i.props.headManager&&i.props.headManager.mountedInstances,i}return i(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(d.Component);t.default=l},8528:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return d}});var r=n(5893),o=n(9008),i=n(8368),a=n(549),u=n(5670),s=n(9277),c=n(2200),d=!0;t.default=function(e){var t=e.text;console.log(t);var n=[{id:1,name:"Kamery",url:"/smart/kamery"},{id:2,name:"Alarmy",url:"/smart/alarmy"},{id:3,name:"Monitoring",url:"/smart/monitoring"},{id:4,name:"Kontrola dost\u0119pu",url:"/smart/kontrola-dostepu"}];return(0,r.jsxs)(i.Z,{children:[(0,r.jsx)(o.default,{children:(0,r.jsx)("title",{children:"LEXELL smart and security"})}),(0,r.jsxs)(a.Z,{gridGap:"2rem",columns:"360px 1fr",children:[(0,c.tq)()?(0,r.jsx)(s.Z,{categories:n}):(0,r.jsx)(u.Z,{categories:n}),(0,r.jsx)("div",{children:t.map((function(e){return(0,r.jsx)(r.Fragment,{children:"heading2"===e.type?(0,r.jsx)("h2",{children:e.text}):e.text})}))})]})]})}},9956:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/smart",function(){return n(8528)}])},9008:function(e,t,n){e.exports=n(7947)},8164:function(e,t,n){var r=n(4360);e.exports=function(e){if(Array.isArray(e))return r(e)}},1682:function(e){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},7381:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},5725:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},3115:function(e,t,n){var r=n(8164),o=n(7381),i=n(3585),a=n(5725);e.exports=function(e){return r(e)||o(e)||i(e)||a()}}},function(e){e.O(0,[774,888,179],(function(){return t=9956,e(e.s=t);var t}));var t=e.O();_N_E=t}]);