(this["webpackJsonpto-do-list"]=this["webpackJsonpto-do-list"]||[]).push([[0],{28:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){"use strict";c.r(t);var n=c(2),s=c(18),a=c.n(s),i=(c(28),c.p+"static/media/logo.41be7e08.png"),r=c(0),j=function(){return Object(r.jsx)("header",{className:"header",children:Object(r.jsx)("nav",{children:Object(r.jsxs)("div",{className:"logo",children:[Object(r.jsx)("img",{src:i,alt:"LOGO"}),Object(r.jsx)("strong",{children:"To Do List"})]})})})},d=c(5),l=c(17),b=c(19),o=c.n(b),O=(c(38),c(13)),u=c(20),x=c(21),h=c(22),f=c(23),m=c(7),N="dd/MM/yyyy",v=function(e){var t=e.onCancel,c=e.onAddTask,s=Object(n.useState)(""),a=Object(d.a)(s,2),i=a[0],j=a[1],l=Object(n.useState)(null),b=Object(d.a)(l,2),u=b[0],x=b[1];return Object(r.jsxs)("div",{className:"dialog",children:[Object(r.jsx)("input",{value:i,onChange:function(e){return j(e.target.value)}}),Object(r.jsxs)("div",{className:"actions",children:[Object(r.jsxs)("div",{className:"btns",children:[Object(r.jsx)("button",{className:"addbtn",disabled:!i,onClick:function(){c(i,u),t(),j("")},children:"Add Task"}),Object(r.jsx)("button",{className:"cancelbtn",onClick:function(){t(),j("")},children:"Cancel"})]}),Object(r.jsx)("div",{className:"date",children:Object(r.jsx)(o.a,{onDayChange:function(e){return x(e)},formatDate:function(e,t,c){return Object(O.a)(e,t,{locale:c})},format:N,dayPickerProps:{modifiers:{disabled:[{before:new Date}]}},placeholder:"".concat(Object(O.a)(new Date,N))})})]})]})},T={INBOX:"Inbox",TODAY:"Today",NEXT_7:"Next 7 Days"},k=function(e){var t=e.selectedTab,c=e.tasks,n=e.setTasks;var s=Object(l.a)(c);return"NEXT_7"===t&&(s=s.filter((function(e){return Object(u.a)(e.date,new Date)&&Object(x.a)(e.date,Object(h.a)(new Date,7))}))),"TODAY"===t&&(s=s.filter((function(e){return Object(f.a)(e.date)}))),Object(r.jsx)("div",{className:"taskItemContainer",children:s.map((function(e){return Object(r.jsxs)("div",{className:"task-item",children:[Object(r.jsx)("p",{children:e.text}),Object(r.jsxs)("p",{children:[Object(O.a)(new Date(e.date),N),Object(r.jsx)("em",{onClick:function(){return function(e){var t=c.filter((function(t){return e!==t.id}));n(t)}(e.id)},children:Object(r.jsx)(m.d,{})})]})]},e.id)}))})},p=function(e){var t=e.selectedTab,c=Object(n.useState)(!1),s=Object(d.a)(c,2),a=s[0],i=s[1],j=Object(n.useState)([]),b=Object(d.a)(j,2),o=b[0],O=b[1];return Object(r.jsxs)("div",{className:"tasks",children:[Object(r.jsx)("h1",{children:T[t]}),"INBOX"===t?Object(r.jsxs)("div",{className:"add",onClick:function(){return i((function(e){return!e}))},children:[Object(r.jsx)("span",{className:"plus",children:"+"}),Object(r.jsx)("span",{className:"addtask",children:"Add Task"})]}):null,a&&Object(r.jsx)(v,{onAddTask:function(e,t){var c={id:o.length,text:e,date:t||new Date};O((function(e){return[].concat(Object(l.a)(e),[c])}))},onCancel:function(){return i(!1)}}),o.length>0?Object(r.jsx)(k,{selectedTab:t,tasks:o,setTasks:O}):Object(r.jsx)("p",{children:"No tasks yet"})]})},D=function(e){var t=e.selectedTab,c=e.setSelectedTab;return Object(r.jsxs)("div",{className:"sidebar",children:[Object(r.jsxs)("div",{className:"INBOX"===t?"active":"",onClick:function(){return c("INBOX")},children:[Object(r.jsx)(m.c,{className:"icon"}),"Inbox"]}),Object(r.jsxs)("div",{className:"TODAY"===t?"active":"",onClick:function(){return c("TODAY")},children:[Object(r.jsx)(m.b,{className:"icon"}),"Today"]}),Object(r.jsxs)("div",{className:"NEXT_7"===t?"active":"",onClick:function(){return c("NEXT_7")},children:[Object(r.jsx)(m.a,{className:"icon"}),"Next 7 days"]})]})},g=function(){var e=Object(n.useState)("INBOX"),t=Object(d.a)(e,2),c=t[0],s=t[1];return Object(r.jsxs)("section",{className:"content",children:[Object(r.jsx)(D,{selectedTab:c,setSelectedTab:s}),Object(r.jsx)(p,{selectedTab:c})]})};c(39);var C=function(){return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(j,{}),Object(r.jsx)(g,{})]})};a.a.render(Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(C,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.28faec93.chunk.js.map