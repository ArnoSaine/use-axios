(this.webpackJsonptodoapp=this.webpackJsonptodoapp||[]).push([[0],{176:function(e,t,n){"use strict";n.r(t);var r=n(4),c=n.n(r),a=n(10),i=n(1),s=n.n(i),o=n(64),u=n.n(o),l=(n(79),n(80),n(24)),p=n(22),j=n(0);function d(){return Object(j.jsxs)("aside",{className:"learn",children:[Object(j.jsxs)("header",{children:[Object(j.jsx)("h3",{children:"use-axios"}),Object(j.jsx)("h5",{children:"Example"}),Object(j.jsx)("a",{href:"https://github.com/ArnoSaine/use-axios/tree/main/todoapp",children:"Source"})]}),Object(j.jsx)("hr",{}),Object(j.jsx)("h4",{children:"Official Resources"}),Object(j.jsx)("ul",{children:[{url:"https://github.com/ArnoSaine/use-axios",text:"use-axios"},{url:"https://github.com/axios/axios",text:"axios"},{url:"https://github.com/Visma-AS/visma/tree/main/packages/msw-openapi-backend-integration",text:"@visma/msw-openapi-backend-integration"},{url:"https://github.com/ArnoSaine/postinumero/tree/main/packages/use-async",text:"@postinumero/use-async"},{url:"https://mswjs.io",text:"msw"},{url:"https://github.com/anttiviljami/openapi-backend",text:"openapi-backend"}].map((function(e){var t=e.text,n=e.url;return Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:n,children:t})},n)}))})]})}var f=n(65),b=n.n(f);function h(e){var t=e.children;return Object(j.jsxs)("div",{className:"learn-bar ".concat(b.a["learn-bar"]),children:[Object(j.jsx)(d,{}),t]})}var x=n(25),m=n.n(x),O=n(20),v=n.n(O),w=n(73);var y=function(e){var t=Object(w.a)("function"===typeof e?e:m.a.create(e)),n=v()(t,3);return{useAxios:n[0],refetch:n[1],useAxiosSafe:n[2]}},k=y(m.a),g=(k.useAxios,k.refetch),N=(k.useAxiosSafe,function(e,t,n){var r;function c(){var c,a;r||(r=!0,null===(c=console)||void 0===c||null===(a=c.warn)||void 0===a||a.call(c,"WARNING! Obsolete function called. ".concat(t," has been deprecated and will be removed in the next major release. Please use the new ").concat(n," instead.")));return e.call.apply(e,[this].concat(Array.prototype.slice.call(arguments)))}c.prototype=e.prototype}(g,"`reload` function","`refetch` function"),Object(x.create)({baseURL:"https://api.example.com/v1"})),A=y(N),S=A.useAxios,C=A.refetch,_=N.delete,E=N.post,R=N.put;function W(){return S("/items").data}function B(e){return D.apply(this,arguments)}function D(){return(D=Object(a.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E("/items",t);case 2:return e.next=4,C("/items");case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function F(e){return J.apply(this,arguments)}function J(){return(J=Object(a.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R("/items/".concat(t._id),t);case 2:return e.next=4,C("/items");case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function G(){return(G=Object(a.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R("/items",t);case 2:return e.next=4,C("/items");case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(){return(I=Object(a.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_("/items/".concat(t._id));case 2:return e.next=4,C("/items");case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function K(){return(K=Object(a.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_("/items",{data:t.map((function(e){return e._id}))});case 2:return e.next=4,C("/items");case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function P(){var e=W().filter((function(e){return e.completed})),t=e.length;return t?Object(j.jsxs)("button",{className:"clear-completed",onClick:function(){return function(e){return K.apply(this,arguments)}(e)},children:["Clear completed (",t,")"]}):null}function V(){var e=W().filter((function(e){return!e.completed})).length;return Object(j.jsxs)("span",{className:"todo-count",children:[e," ",1===e?"item":"items"," left"]})}function L(){return Object(j.jsx)("ul",{className:"filters",children:[{path:"",title:"All"},{path:"active",title:"Active"},{path:"completed",title:"Completed"}].map((function(e){var t=e.path,n=e.title;return Object(j.jsx)("li",{children:Object(j.jsx)(p.b,{activeClassName:"selected",exact:!0,replace:!0,to:"/".concat(t),children:n})},t)}))})}function M(){return W().length?Object(j.jsxs)("footer",{className:"footer",children:[Object(j.jsx)(V,{}),Object(j.jsx)(L,{}),Object(j.jsx)(P,{})]}):null}function U(){var e=Object(i.useRef)(null);return Object(j.jsx)("input",{ref:e,autoFocus:!0,className:"new-todo",onKeyDown:function(){var t=Object(a.a)(c.a.mark((function t(n){var r,a,i;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=n.key,!(a=e.current)){t.next=8;break}if(i=a.value.trim(),"Enter"!==r||!i){t.next=8;break}return t.next=7,B({title:i});case 7:a.value="";case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),placeholder:"What needs to be done?",type:"text"})}var q=n(2),z=n(13),H=n(31),Q=n(72);function T(e){var t=e.item,n=e.item,r=n.completed,c=void 0!==r&&r,a=n.title,s=Object(i.useState)(!1),o=Object(H.a)(s,2),u=o[0],l=o[1],p=Object(i.useState)(!1),d=Object(H.a)(p,2),f=d[0],b=d[1],h=Object(i.useRef)(null);function x(){var e;f&&(b(!1),F(Object(z.a)(Object(z.a)({},t),{},{title:null===(e=h.current)||void 0===e?void 0:e.value.trim()})))}return Object(i.useEffect)((function(){var e;u&&(null===(e=h.current)||void 0===e||e.focus(),l(!1))}),[u,l]),Object(j.jsxs)("li",{className:Object(Q.a)(c&&"completed",f&&"editing"),onDoubleClick:function(){l(!0),b(!0)},children:[Object(j.jsxs)("div",{className:"view",children:[Object(j.jsx)("input",{className:"toggle",checked:c,onChange:function(){return F(Object(z.a)(Object(z.a)({},t),{},{completed:!c}))},type:"checkbox"}),Object(j.jsx)("label",{children:a}),Object(j.jsx)("button",{className:"destroy",onClick:function(){return function(e){return I.apply(this,arguments)}(t)}})]}),Object(j.jsx)("input",{className:"edit",ref:h,type:"text",defaultValue:a,onKeyDown:function(e){"Enter"===e.key&&x()},onBlur:x})]})}function X(){var e,t=(null!==(e=Object(q.d)("/:filter?"))&&void 0!==e?e:{params:{}}).params.filter,n=W(),r=t?n.filter((function(e){var n=e.completed;return Boolean(n)===("completed"===t)})):n;return Object(j.jsx)("ul",{className:"todo-list",children:r.map((function(e){return Object(j.jsx)(T,{item:e},e._id)}))})}function Y(){var e=W();if(!e.length)return null;var t=e.every((function(e){return e.completed}));return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("input",{"data-testid":"toggle-all",id:"toggle-all",className:"toggle-all",checked:t,onChange:function(){return function(e){return G.apply(this,arguments)}(e.map((function(e){return Object(z.a)(Object(z.a)({},e),{},{completed:!t})})))},type:"checkbox"}),Object(j.jsx)("label",{htmlFor:"toggle-all"})]})}var Z=function(){return Object(j.jsx)(i.Suspense,{fallback:"loading...",children:Object(j.jsx)(h,{children:Object(j.jsx)(p.a,{basename:l.a,children:Object(j.jsxs)("section",{className:"todoapp",children:[Object(j.jsx)("header",{children:Object(j.jsx)("h1",{children:"todos"})}),Object(j.jsx)(U,{}),Object(j.jsxs)("section",{className:"main",children:[Object(j.jsx)(Y,{}),Object(j.jsx)(X,{}),Object(j.jsx)(M,{})]})]})})})})};function $(){return($=Object(a.a)(c.a.mark((function e(){var t,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("undefined"===typeof window||!window.document){e.next=10;break}if(window.location.pathname!==l.a||window.location.pathname.endsWith("/")){e.next=4;break}return window.location.pathname="".concat(window.location.pathname,"/"),e.abrupt("return");case 4:return e.next=6,Promise.all([n.e(2),n.e(4)]).then(n.bind(null,402));case 6:return t=e.sent,r=t.worker,e.next=10,r.start({serviceWorker:{url:"".concat(l.a,"/mockServiceWorker.js")}});case 10:u.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(Z,{})}),document.getElementById("root"));case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){$.apply(this,arguments)}()},24:function(e){e.exports=JSON.parse('{"a":"/use-axios"}')},65:function(e,t,n){e.exports={"learn-bar":"styles_learn-bar__3bpGf"}}},[[176,1,3]]]);
//# sourceMappingURL=main.eecb6074.chunk.js.map