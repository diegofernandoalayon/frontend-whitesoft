(this["webpackJsonpfrontend-whitesoft"]=this["webpackJsonpfrontend-whitesoft"]||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var o=n(1),c=n.n(o),r=n(4),i=n.n(r),s=(n(9),n(2)),u=n(0);function a(e){var t=e.text,n=e.value;return Object(u.jsx)("option",{value:n,children:t})}n(11);var l=function(){return fetch("https://restcountries.com/v3.1/all").then((function(e){return e.json()})).then((function(e){return e}))},j=function(e){return console.log(e),fetch("https://secure-temple-74134.herokuapp.com/api/users",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})};var f=function(){var e=Object(o.useState)([]),t=Object(s.a)(e,2),n=t[0],c=t[1],r=Object(o.useState)(""),i=Object(s.a)(r,2),f=i[0],h=i[1],b=Object(o.useState)(""),m=Object(s.a)(b,2),p=m[0],d=m[1];return Object(o.useEffect)((function(){l().then((function(e){c(e)}))}),[]),Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"Formulario"}),Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==f&&""!==p&&(console.log("Submit"),console.log(f,p),j({nombre:p,pais:f}).then((function(e){console.log(e),d("")})))},className:"form",children:[Object(u.jsx)("input",{onChange:function(e){d(e.target.value)},value:p,placeholder:"ingrese su nombre completo",required:!0}),Object(u.jsxs)("select",{onChange:function(e){h(e.target.value)},children:[Object(u.jsx)("option",{disabled:!0,children:"Pais"}),Object(u.jsx)("option",{children:"Selecione un pais"}),n.map((function(e){return Object(u.jsx)(a,{text:e.name.common,value:e.name.common},e.name.common)}))]}),Object(u.jsx)("button",{children:"Enviar"})]})]})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,o=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),o(e),c(e),r(e),i(e)}))};i.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(f,{})}),document.getElementById("root")),h()},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.0781dac2.chunk.js.map