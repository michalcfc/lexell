(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[207],{549:function(n,e,t){"use strict";t.d(e,{Z:function(){return a}});var r=t(5893),i=t(8005),o=t(9163).ZP.div.withConfig({displayName:"Gridstyles__GridStyles",componentId:"rkkib5-0"})(["",";display:grid;grid-gap:",";row-gap:",";column-gap:",";align-items:",";grid-template-rows:",";grid-auto-columns:",";grid-auto-flow:",";margin-top:",";& a{text-decoration:none;}@media (min-width:800px){grid-template-columns:",";margin-top:",";}"],i.Dh,(function(n){return n.gridGap}),(function(n){return n.rowGap}),(function(n){return n.columnGap}),(function(n){return n.alignItems}),(function(n){return n.rows}),(function(n){return n.autoColumns}),(function(n){return n.autoFlow}),(function(n){var e=n.customMargin;return"".concat(e/2,"rem")}),(function(n){return n.columns}),(function(n){var e=n.customMargin;return"".concat(e,"rem")})),a=function(n){var e=n.rows,t=n.rowGap,i=n.columns,a=n.gridGap,u=n.children,s=n.columnGap,c=n.autoColumns,d=n.customMargin,l=n.alignItems,m=n.autoFlow,f=n.mt,p=n.p;return(0,r.jsx)(o,{p:p,mt:f,rows:e,rowGap:t,gridGap:a,columns:i,alignItems:l,customMargin:d,columnGap:s,autoColumns:c,autoFlow:m,children:u})}},5670:function(n,e,t){"use strict";t.d(e,{Z:function(){return m}});var r=t(5893),i=t(7294),o=t(1664),a=t(9163),u=t(7595),s=a.ZP.div.withConfig({displayName:"MenuAsidestyles__MenuAsideWrapper",componentId:"sc-1khw9bl-0"})(["font-size:.875rem;background:",";padding:",";"],(function(n){return n.theme.colors.white}),(function(n){return n.theme.spacing.md})),c=a.ZP.div.withConfig({displayName:"MenuAsidestyles__MenuAsideContent",componentId:"sc-1khw9bl-1"})(["margin:0 2rem;"]),d=a.ZP.div.withConfig({displayName:"MenuAsidestyles__MenuItem",componentId:"sc-1khw9bl-2"})(["padding:"," 0;border-bottom:1px solid ",";&:hover{color:",";}"],(function(n){return n.theme.spacing.sm}),(function(n){var e=n.theme;return(0,u.$n)(.5,e.colors.gray)}),(function(n){return n.theme.colors.brand})),l=a.ZP.div.withConfig({displayName:"MenuAsidestyles__CurrentPage",componentId:"sc-1khw9bl-3"})(["cursor:pointer;font-weight:",";"],(function(n){return n.fontBold&&"bold"})),m=function(n){var e=n.categories,t=n.tag,a=(0,i.useState)(null),u=a[0],m=a[1];return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(s,{children:(0,r.jsxs)(c,{children:[(0,r.jsx)("h4",{children:"Rozwi\u0105zania:"}),(0,r.jsxs)("ul",{children:[e&&e.map((function(n){return(0,r.jsx)(d,{children:(0,r.jsx)(o.default,{href:"/".concat(t,"/").concat(n.node._meta.uid),children:(0,r.jsx)("a",{children:(0,r.jsx)(l,{fontBold:u===n.node._meta.uid,onClick:function(){return m(n.node._meta.uid)},children:n.node.page_title[0].text})})})},n.node._meta.uid)})),(0,r.jsx)(d,{children:(0,r.jsx)(o.default,{href:"/realization",children:"Nasze realizacje"})})]})]})})})}},4602:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return G}});var r=t(5893),i=t(809),o=t.n(i),a=t(2447),u=t(7294),s=t(9008),c=t(8368),d=t(7261),l=t(3121),m=t(6808),f=t.n(m),p=(t(1664),t(6059)),h=t(2017),g=t(1462),w="https://".concat("lexell",".cdn.prismic.io/graphql"),x=new g.ZP({link:(0,p.wK)({uri:w}),cache:new h.h4});function v(){var n=(0,d.Z)(["\nquery blogHomeQuery($uid: String) {\nallPagess(uid: $uid) {\n   edges {\n      node {\n        _meta {\n           id   \n          uid\n          tags\n        }\n        page_title\n        description\n      }\n    }\n  }\n}\n"]);return v=function(){return n},n}var _=(0,l.ZP)(v()),y=function(){var n=(0,a.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=f().get("io.prismic.preview"),r={query:_,variables:{uid:e}},t&&(r.context={headers:{"Prismic-ref":t}}),n.abrupt("return",x.query(r));case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),j=t(549),k=t(9163),b=(0,k.F4)(["to{opacity:0.1;transform:translate3d(0,-1rem,0);}"]),C=k.ZP.div.withConfig({displayName:"Loaderstyles__LoaderStyles",componentId:"sc-4q6dn2-0"})(["display:flex;justify-content:center;"]),Z=k.ZP.div.withConfig({displayName:"Loaderstyles__LoaderDot",componentId:"sc-4q6dn2-1"})(["width:1rem;height:1rem;margin:3rem 0.2rem;background:#663399;border-radius:50%;animation:"," 0.6s infinite alternate;:nth-child(2){animation-delay:0.2s;}&:nth-child(3){animation-delay:0.4s;}"],b),A=function(){return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(C,{children:[(0,r.jsx)(Z,{}),(0,r.jsx)(Z,{}),(0,r.jsx)(Z,{})]})})},P=t(5670),N=t(5833),G=function(){var n=(0,u.useState)(!0),e=(n[0],n[1],(0,u.useState)(null)),t=(e[0],e[1],(0,u.useState)(null)),i=t[0],d=t[1],l=(0,u.useState)(!1),m=l[0],f=l[1];(0,u.useEffect)((function(){(function(){var n=(0,a.Z)(o().mark((function n(){var e,t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,y("help-desk");case 2:e=n.sent,(t=e)?d(t):f(!0);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}})()()}),[]);if(console.log(i),i){N.RichText.asText(i.headline);return(0,r.jsxs)(c.Z,{children:[(0,r.jsx)(s.default,{children:(0,r.jsx)("title",{children:"LEXELL Help Desk IT"})}),(0,r.jsxs)(j.Z,{gridGap:"2rem",columns:"360px 1fr",children:[(0,r.jsx)(P.Z,{categories:null===i||void 0===i?void 0:i.data.allPagess.edges.filter((function(n){return"YKY8qhAAACAA88kf"!==n.node._meta.id})),tag:"help"}),(0,r.jsx)("div",{children:(0,r.jsx)(N.RichText,{render:function(){var n=null===i||void 0===i?void 0:i.data.allPagess.edges.filter((function(n){return"YKY8qhAAACAA88kf"==n.node._meta.id})).pop();return null===n||void 0===n?void 0:n.node.description}()})})]})]})}return m?(0,r.jsx)(A,{}):null}},8452:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/helpDesk",function(){return t(4602)}])}},function(n){n.O(0,[87,853,774,888,179],(function(){return e=8452,n(n.s=e);var e}));var e=n.O();_N_E=e}]);