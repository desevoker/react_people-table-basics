(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){"use strict";c.r(t);var n=c(24),r=c(7),a=(c(33),c(34),c(3)),s=c(9),j=c.n(s),i=c(2),l=function(){return Object(i.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{className:"navbar-brand",children:[Object(i.jsx)(r.c,{to:"/",className:function(e){var t=e.isActive;return j()("navbar-item",{"has-background-grey-lighter":t})},children:"Home"}),Object(i.jsx)(r.c,{to:"/people",className:function(e){var t=e.isActive;return j()("navbar-item",{"has-background-grey-lighter":t})},children:"People"})]})})})},o=function(){return Object(i.jsxs)("div",{"data-cy":"app",children:[Object(i.jsx)(l,{}),Object(i.jsx)("main",{className:"section",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsx)(a.b,{})})})]})},b=function(){return Object(i.jsx)("h1",{className:"title",children:"Home Page"})},d=c(4),h=c(0),u=c(22);function O(e){return"f"===e.sex}function x(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}c(36);var p=function(){return Object(i.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(i.jsx)("div",{className:"Loader__content"})})},m=function(e){var t=e.person;return"string"!==typeof t&&t?Object(i.jsx)(r.b,{to:"/people/".concat(t.slug),className:j()({"has-text-danger":O(t)}),children:t.name}):Object(i.jsx)(i.Fragment,{children:null!==t&&void 0!==t?t:"-"})},f=function(e){var t=e.people,c=e.selected;return Object(i.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"Name"}),Object(i.jsx)("th",{children:"Sex"}),Object(i.jsx)("th",{children:"Born"}),Object(i.jsx)("th",{children:"Died"}),Object(i.jsx)("th",{children:"Mother"}),Object(i.jsx)("th",{children:"Father"})]})}),Object(i.jsx)("tbody",{children:t.map((function(e){var t,n;return Object(i.jsxs)("tr",{"data-cy":"person",className:j()({"has-background-warning":e.slug===c}),children:[Object(i.jsx)("td",{children:Object(i.jsx)(m,{person:e})}),Object(i.jsx)("td",{children:e.sex}),Object(i.jsx)("td",{children:e.born}),Object(i.jsx)("td",{children:e.died}),Object(i.jsx)("td",{children:Object(i.jsx)(m,{person:null!==(t=e.mother)&&void 0!==t?t:e.motherName})}),Object(i.jsx)("td",{children:Object(i.jsx)(m,{person:null!==(n=e.father)&&void 0!==n?n:e.fatherName})})]},e.slug)}))})]})},v=function(){var e=Object(h.useState)(!1),t=Object(d.a)(e,2),c=t[0],n=t[1],r=Object(h.useState)(!1),s=Object(d.a)(r,2),j=s[0],l=s[1],o=Object(h.useState)([]),b=Object(d.a)(o,2),O=b[0],m=b[1],v=Object(a.r)().slug;Object(h.useEffect)((function(){n(!0),x().then((function(e){return m(function(e){return e.map((function(t){var c=e.find((function(e){return e.name===t.motherName})),n=e.find((function(e){return e.name===t.fatherName})),r=Object(u.a)({},t);return c&&(r.mother=Object(u.a)({},c)),n&&(r.father=Object(u.a)({},n)),r}))}(e))})).catch((function(){return l(!0)})).finally((function(){return n(!1)}))}),[]);var g=O.length>0,N=!c&&!j;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h1",{className:"title",children:"People Page"}),Object(i.jsx)("div",{className:"block",children:Object(i.jsxs)("div",{className:"box table-container",children:[c&&Object(i.jsx)(p,{}),j&&Object(i.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}),N&&(g?Object(i.jsx)(f,{people:O,selected:v}):Object(i.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}))]})})]})},g=function(){return Object(i.jsx)("h1",{className:"title",children:"Page not found"})},N=(c(37),function(){return Object(i.jsx)(a.e,{children:Object(i.jsxs)(a.c,{path:"/",element:Object(i.jsx)(o,{}),children:[Object(i.jsx)(a.c,{index:!0,element:Object(i.jsx)(b,{})}),Object(i.jsx)(a.c,{path:"people",children:Object(i.jsx)(a.c,{path:":slug?",element:Object(i.jsx)(v,{})})}),Object(i.jsx)(a.c,{path:"home",element:Object(i.jsx)(a.a,{to:"/",replace:!0})}),Object(i.jsx)(a.c,{path:"*",element:Object(i.jsx)(g,{})})]})})});Object(n.createRoot)(document.getElementById("root")).render(Object(i.jsx)(r.a,{children:Object(i.jsx)(N,{})}))}},[[38,1,2]]]);
//# sourceMappingURL=main.751daa76.chunk.js.map