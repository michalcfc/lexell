_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[18],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=c,t.useAmp=function(){return c(o.default.useContext(a.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},a=n("lwAK");function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery,c=void 0!==a&&a;return n||o&&c}},"7W2i":function(e,t,n){var r=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=u,t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),a=(r=n("Xuae"))&&r.__esModule?r:{default:r},c=n("lwAK"),i=n("FYa8"),l=n("/0+H");function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function u(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var f=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(d,[]).reverse().concat(u(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0,c=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){c=!0;var i=o.key.slice(o.key.indexOf("$")+1);e.has(i)?a=!1:e.add(i)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var l=0,s=f.length;l<s;l++){var u=f[l];if(o.props.hasOwnProperty(u))if("charSet"===u)n.has(u)?a=!1:n.add(u);else{var d=o.props[u],p=r[u]||new Set;"name"===u&&c||!p.has(d)?(p.add(d),r[u]=p):a=!1}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}function b(e){var t=e.children,n=(0,o.useContext)(c.AmpStateContext),r=(0,o.useContext)(i.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,l.isInAmpMode)(n)},t)}b.rewind=function(){};var m=b;t.default=m},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=o},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},QLSJ:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){return n("qARc")}])},RIqP:function(e,t,n){var r=n("Ijbi"),o=n("EbDI"),a=n("ZhPi"),c=n("Bnag");e.exports=function(e){return r(e)||o(e)||a(e)||c()}},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),o=n("lwsE"),a=n("W8MJ"),c=(n("PJYZ"),n("7W2i")),i=n("a1gu"),l=n("Nsbk");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=l(e);if(t){var o=l(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return i(this,n)}}t.__esModule=!0,t.default=void 0;var u=n("q1tI"),d=function(e){c(n,e);var t=s(n);function n(e){var a;return o(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(u.Component);t.default=d},a1gu:function(e,t,n){var r=n("cDf5"),o=n("PJYZ");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?o(e):t}},g4pe:function(e,t,n){e.exports=n("8Kt/")},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},o71x:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n("rePB"),o=n("nKUr"),a=(n("q1tI"),n("vOnD")),c=n("za5s"),i=a.c.div.withConfig({displayName:"Headingstyles__HeadingWrapper",componentId:"sc-15leonp-0"})(["",";font-weight:bold;font-size:1.8rem;margin-bottom:1rem;"],c.c);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var s=function(e){return Object(o.jsx)(i,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e))}},qARc:function(e,t,n){"use strict";n.r(t);var r=n("nKUr"),o=n("q1tI"),a=n("rePB"),c=n("vOnD"),i=n("ufqH"),l=c.c.div.withConfig({displayName:"ContactFormstyles__ContactWrapper",componentId:"ml5yyd-0"})(["display:flex;flex-direction:column;@media (min-width:800px){align-item:center;flex-direction:row;}"]),s=c.c.div.withConfig({displayName:"ContactFormstyles__ContactLeft",componentId:"ml5yyd-1"})(["@media (min-width:800px){flex:0 0 50%}@media (max-width:800px){order:1;}"]),u=c.c.div.withConfig({displayName:"ContactFormstyles__ContactFormContent",componentId:"ml5yyd-2"})(["@media (min-width:800px){flex:0 0 50%}"]),d=c.c.div.withConfig({displayName:"ContactFormstyles__ContactItem",componentId:"ml5yyd-3"})(["display:flex;align-items:center;margin:1rem 0;"]),f=c.c.div.withConfig({displayName:"ContactFormstyles__ContactItemText",componentId:"ml5yyd-4"})(["line-height:1.4;font-size:1.4rem;"]),p=c.c.div.withConfig({displayName:"ContactFormstyles__ContactIcon",componentId:"ml5yyd-5"})(["display:flex;align-items:center;justify-content:center;color:",";margin:0 "," 0 0;border-radius:",";background:",";padding:",";"],(function(e){return e.theme.colors.white}),(function(e){return e.theme.spacing.md}),(function(e){return e.theme.borderRadius}),(function(e){var t=e.theme;return Object(i.a)(.1,t.colors.brand)}),(function(e){return e.theme.spacing.md})),b=n("vDqi"),m=n.n(b),h=n("5vTU"),y=n("RoB+"),j=n("Ff2n"),O=c.c.div.withConfig({displayName:"Selectstyles__SelectWrapper",componentId:"sc-1lq6zb2-0"})(["display:flex;flex-direction:column;position:relative;margin:0.75rem 0px;"]),g=c.c.label.withConfig({displayName:"Selectstyles__SelectLabel",componentId:"sc-1lq6zb2-1"})(["font-weight:normal;opacity:0.75;width:fit-content;pointer-events:none;text-shadow:none;text-transform:capitalize;transform-origin:left top;transform:scale(1) translate3d(0,-3.5rem,0);transition:200ms ease all;margin:0 ",";background:",";"],(function(e){return e.theme.spacing.md}),(function(e){return e.theme.colors.white})),v=c.c.select.withConfig({displayName:"Selectstyles__SelectStyle",componentId:"sc-1lq6zb2-2"})(["font-size:100%;text-shadow:none;padding:.75rem 1rem;border-radius:0.4rem;background:",";;border:1px solid  ",";&:focus{outline:0;}& option{color:#000;}&:invalid{color:#ccc;}&:focus + ","{opacity:1;padding:0 ",";transform:scale(0.8) translate3d(0,-4rem,0);}"],(function(e){return e.theme.colors.white}),(function(e){return e.theme.colors.black}),g,(function(e){return e.theme.spacing.sm})),w=(c.c.option.withConfig({displayName:"Selectstyles__OptionStyle",componentId:"sc-1lq6zb2-3"})(["color:#000;&:first-child{color:#ccc;}"]),[{label:"0",value:0},{label:"1",value:1},{label:"2",value:2},{label:"3",value:3},{label:"4",value:4},{label:"5",value:5},{label:"6",value:6},{label:"7",value:7},{label:"8",value:8},{label:"9",value:9},{label:"10",value:10}]);function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var P=function(e){var t=e.placeholder,n=e.defaultValue,o=e.defaultOptions,a=e.numberOptionsValue,c=e.label,i=e.value,l=e.onChange,s=e.onBlur,u=e.onFocus,d=e.onSubmit,f=e.onKeyDown,p=e.onKeyPress,b=e.onKeyUp,m=Object(j.a)(e,["placeholder","defaultValue","defaultOptions","numberOptionsValue","label","value","onChange","onBlur","onFocus","onSubmit","onKeyDown","onKeyPress","onKeyUp"]),h=(a?w:o).map((function(e){return Object(r.jsx)("option",{value:e.value,hidden:e.hidden?e.selected:"",selected:e.selected?e.selected:"",disabled:e.disabled?e.disabled:"",children:e.label},e.value)}));return Object(r.jsxs)(O,{children:[Object(r.jsx)(v,_(_({},m),{},{placeholder:t,defaultValue:n||null,onChange:l,onBlur:s,onFocus:u,onSubmit:d,onKeyDown:f,onKeyPress:p,onKeyUp:b,value:i||n,children:h})),Object(r.jsx)(g,{children:c})]})},C=n("qqMo"),S=c.c.div.withConfig({displayName:"Textareastyles__TextareaWrapper",componentId:"fn5wi6-0"})(["display:flex;flex-direction:column;position:relative;margin:0.75rem 0px;"]),I=c.c.label.withConfig({displayName:"Textareastyles__TextareaLabel",componentId:"fn5wi6-1"})(["font-weight:normal;opacity:0.75;width:fit-content;pointer-events:none;text-shadow:none;text-transform:capitalize;transform-origin:left top;transform:scale(1) translate3d(0,-5rem,0);transition:200ms ease all;margin:0 ",";background:",";"],(function(e){return e.theme.spacing.md}),(function(e){return e.theme.colors.white})),k=c.c.textarea.withConfig({displayName:"Textareastyles__TextareaStyle",componentId:"fn5wi6-2"})(["font-size:100%;text-shadow:none;padding:.75rem 1rem;border-radius:0.4rem;border:1px solid  ",";&:focus{outline:0;}& + ","{opacity:1;padding:0 ",";transform:scale(0.8) translate3d(0,-8.4rem,0);}"],(function(e){return e.theme.colors.black}),I,(function(e){return e.theme.spacing.sm}));function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function M(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var E=function(e){var t=e.placeholder,n=e.defaultValue,o=e.value,a=e.onChange,c=e.onBlur,i=e.onFocus,l=e.onSubmit,s=e.onKeyDown,u=e.onKeyPress,d=e.onKeyUp,f=e.label,p=(e.rows,Object(j.a)(e,["placeholder","defaultValue","value","onChange","onBlur","onFocus","onSubmit","onKeyDown","onKeyPress","onKeyUp","label","rows"]));return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(S,{children:[Object(r.jsx)(k,M(M({},p),{},{rows:4,placeholder:t,defaultValue:n,value:o,onChange:a,onBlur:c,onFocus:i,onSubmit:l,onKeyDown:s,onKeyPress:u,onKeyUp:d})),Object(r.jsxs)(I,{children:[" ",f," "]})]})})},K=n("Sc5l"),N=n("IP2g"),q=n("wHSu");function z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?z(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):z(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var F=function(e){var t=e.messageTopic,n=e.choosenPack,c=Object(o.useState)(!1),i=c[0],b=c[1],j=Object(o.useState)(null),O=j[0],g=j[1],v=Object(o.useState)({name:"",email:"",subject:"",message:""}),w=v[0],x=v[1];Object(o.useEffect)((function(){x({name:"",email:"",subject:n,message:""})}),[n]);var _=function(e,t){var n=e.target.value;x(A(A({},w),{},Object(a.a)({},t,n)))};return Object(r.jsx)(K.a,{children:Object(r.jsxs)(l,{children:[Object(r.jsxs)(s,{children:[Object(r.jsxs)(d,{children:[Object(r.jsx)(p,{children:Object(r.jsx)(N.a,{icon:q.k})}),Object(r.jsx)(f,{children:"61 814-38-25"})]}),Object(r.jsxs)(d,{children:[Object(r.jsx)(p,{children:Object(r.jsx)(N.a,{icon:q.k})}),Object(r.jsx)(f,{children:"+48 516-178-131"})]}),Object(r.jsxs)(d,{children:[Object(r.jsx)(p,{children:Object(r.jsx)(N.a,{icon:q.j})}),Object(r.jsxs)(f,{children:["ul. Przylesie 6, ",Object(r.jsx)("br",{}),"60-185 Sk\xf3rzewo"]})]})]}),Object(r.jsxs)(u,{children:[i&&Object(r.jsx)(h.a,{text:"Dzi\u0119kujemy. Wiadomo\u015b\u0107 zosta\u0142a wys\u0142ana."}),O&&Object(r.jsx)(h.a,{variant:"danger",text:"Uzupe\u0142nij wszystkie pola."}),Object(r.jsx)("p",{children:"Napisz wiadomo\u015b\u0107: "}),Object(r.jsxs)("form",{action:"#",children:[Object(r.jsx)(y.a,{label:"Imi\u0119",value:w.name,onChange:function(e){return _(e,"name")}}),Object(r.jsx)(y.a,{label:"Email",value:w.email,onChange:function(e){return _(e,"email")}}),Object(r.jsx)(P,{required:!0,label:"Temat",name:"Subject",value:w.subject,defaultOptions:t,defaultValue:n,onChange:function(e){return _(e,"subject")}}),Object(r.jsx)(E,{label:"Wiadomo\u015b\u0107",value:w.message,onChange:function(e){return _(e,"message")}}),Object(r.jsx)(C.a,{name:"Wy\u015blij",onClick:function(e){return function(e){e.preventDefault(),m()({method:"post",url:"".concat("/api/contact/index.php"),headers:{"content-type":"application/json"},data:w}).then((function(e){e.data.sent?(b(e.data.sent),g(!1)):g(!0)})).catch((function(e){return g(e.message)})),console.log(w)}(e)}})]})]})]})})},T=n("g4pe"),H=n.n(T),W=n("o71x");t.default=function(){var e=Object(o.useState)(""),t=e[0],n=e[1];Object(o.useEffect)((function(){var e=localStorage.getItem("choosenPack");n(e)}),[t]);var a=[{id:0,value:"",label:"Wybierz temat",disabled:!0,selected:!0},{id:1,value:"Internet",label:"Internet"},{id:2,value:"Telewizja",label:"Telewizja"},{id:3,value:"Serwis",label:"Serwis"}];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(H.a,{children:Object(r.jsx)("title",{children:"Kontakt"})}),Object(r.jsxs)(K.a,{children:[Object(r.jsx)(W.a,{children:"Kontakt"}),Object(r.jsx)(F,{messageTopic:(t&&a.push({id:4,value:t,label:t}),a),choosenPack:t})]})]})}}},[["QLSJ",0,1,5,2,3,6,8]]]);