(this["webpackJsonpreact-employee-directory"]=this["webpackJsonpreact-employee-directory"]||[]).push([[0],{19:function(e){e.exports=JSON.parse('[{"id":1,"first_name":"Michael","last_name":"Scott","title":"Regional Manager","salary":180000,"department":"Executive","manager":null},{"id":2,"first_name":"Angela","last_name":"Martin","title":"Accountant","salary":70000,"department":"Finance","manager":null},{"id":3,"first_name":"Darryl","last_name":"Philbin","title":"Manager","salary":150000,"department":"Operations","manager":null},{"id":4,"first_name":"Connie","last_name":"Tran","title":"Software Engineer","salary":175000,"department":"Information Technology","manager":null},{"id":5,"first_name":"Dwight","last_name":"Schrute","title":"Assistant to the Regional Manager","salary":90000,"department":"Executive","manager":"Michael Scott"},{"id":6,"first_name":"Jim","last_name":"Halpert","title":"Sales Representative","salary":60000,"department":"Sales","manager":"Michael Scott"},{"id":7,"first_name":"Pam","last_name":"Beasley","title":"Sales Representative","salary":60000,"department":"Sales","manager":"Michael Scott"},{"id":8,"first_name":"Stanley","last_name":"Hudson","title":"Sales Representative","salary":60000,"department":"Sales","manager":"Michael Scott"},{"id":9,"first_name":"Phyllis","last_name":"Lapin","title":"Sales Representative","salary":60000,"department":"Sales","manager":"Michael Scott"},{"id":10,"first_name":"Oscar","last_name":"Gutierrez","title":"Accountant","salary":70000,"department":"Finance","manager":"Angela Martin"},{"id":11,"first_name":"Kevin","last_name":"Malone","title":"Accountant","salary":70000,"department":"Finance","manager":"Angela Martin"},{"id":12,"first_name":"Creed","last_name":"Bratton","title":"Quality Control Associate","salary":40000,"department":"Operations","manager":"Darryl Philbin"},{"id":13,"first_name":"Andy","last_name":"Bernard","title":"Manager","salary":80000,"department":"Sales","manager":"Michael Scott"},{"id":14,"first_name":"Toby","last_name":"Flenderson","title":"HR Associate","salary":60000,"department":"Human Resources","manager":"Michael Scott"}]')},28:function(e,a,t){e.exports=t(40)},33:function(e,a,t){},34:function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},35:function(e,a,t){},36:function(e,a,t){},40:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(10),l=t.n(i),o=(t(33),t(20)),s=t(24),c=(t(34),t(35),t(41)),m=t(57),d=t(56);t(36);var u=function(e){return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"img-container d-flex align-items-center justify-content-center"},r.a.createElement("h1",null,e.firstName," ",e.lastName)),r.a.createElement("div",{className:"content"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("strong",null,"First Name:")," ",e.firstName," ",e.lastName),r.a.createElement("li",null,r.a.createElement("strong",null,"Title:")," ",e.title),r.a.createElement("li",null,r.a.createElement("strong",null,"Salary:")," ",e.salary),r.a.createElement("li",null,r.a.createElement("strong",null,"Department:")," ",e.dept),r.a.createElement("li",null,r.a.createElement("strong",null,"Manager:")," ",e.manager))))},f=t(19);var p=function(){var e=Object(n.useState)(f),a=Object(s.a)(e,2),t=a[0],i=a[1];return r.a.createElement("div",{className:"wrapper"},r.a.createElement(d.a,{maxWidth:"sm"},r.a.createElement("h1",{className:"title"},"Employee Directory")),r.a.createElement(d.a,{maxWidth:"sm"},r.a.createElement(m.a,{color:"primary","aria-label":"outlined primary button group"},r.a.createElement(c.a,{onClick:function(){var e=t.sort((function(e,a){var t=e.first_name.toLowerCase(),n=a.first_name.toLowerCase();return t<n?-1:t>n?1:0}));i.apply(void 0,Object(o.a)(t).concat([e]))}},"Sort by First Name"),r.a.createElement(c.a,{onClick:function(){var e=t.sort((function(e,a){var t=e.last_name.toLowerCase(),n=a.last_name.toLowerCase();return t<n?-1:t>n?1:0}));i.apply(void 0,Object(o.a)(t).concat([e]))}},"Sort by Last Name"))),f.map((function(e){return r.a.createElement(u,{key:e.id,firstName:e.first_name,lastName:e.last_name,title:e.title,salary:e.salary,dept:e.department,manager:e.manager})})))},g=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function y(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/react-employee-directory",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var a="".concat("/react-employee-directory","/service-worker.js");g?(!function(e,a){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):y(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):y(a,e)}))}}()}},[[28,1,2]]]);
//# sourceMappingURL=main.56c2d085.chunk.js.map