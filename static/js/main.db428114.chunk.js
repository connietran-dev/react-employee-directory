(this["webpackJsonpreact-employee-directory"]=this["webpackJsonpreact-employee-directory"]||[]).push([[0],{31:function(e){e.exports=JSON.parse('[{"id":1,"first_name":"Michael","last_name":"Scott","title":"Regional Manager","salary":180000,"department":"Executive","manager":null},{"id":2,"first_name":"Angela","last_name":"Martin","title":"Accountant","salary":70000,"department":"Finance","manager":null},{"id":3,"first_name":"Darryl","last_name":"Philbin","title":"Manager","salary":150000,"department":"Operations","manager":null},{"id":4,"first_name":"Connie","last_name":"Tran","title":"Software Engineer","salary":175000,"department":"Information Technology","manager":null},{"id":5,"first_name":"Dwight","last_name":"Schrute","title":"Assistant to the Regional Manager","salary":90000,"department":"Executive","manager":"Michael Scott"},{"id":6,"first_name":"Jim","last_name":"Halpert","title":"Sales Representative","salary":60000,"department":"Sales","manager":"Michael Scott"},{"id":7,"first_name":"Pam","last_name":"Beasley","title":"Sales Representative","salary":60000,"department":"Sales","manager":"Michael Scott"},{"id":8,"first_name":"Stanley","last_name":"Hudson","title":"Sales Representative","salary":60000,"department":"Sales","manager":"Michael Scott"},{"id":9,"first_name":"Phyllis","last_name":"Lapin","title":"Sales Representative","salary":60000,"department":"Sales","manager":"Michael Scott"},{"id":10,"first_name":"Oscar","last_name":"Gutierrez","title":"Accountant","salary":70000,"department":"Finance","manager":"Angela Martin"},{"id":11,"first_name":"Kevin","last_name":"Malone","title":"Accountant","salary":70000,"department":"Finance","manager":"Angela Martin"},{"id":12,"first_name":"Creed","last_name":"Bratton","title":"Quality Control Associate","salary":40000,"department":"Operations","manager":"Darryl Philbin"},{"id":13,"first_name":"Andy","last_name":"Bernard","title":"Manager","salary":80000,"department":"Sales","manager":"Michael Scott"},{"id":14,"first_name":"Toby","last_name":"Flenderson","title":"HR Associate","salary":60000,"department":"Human Resources","manager":"Michael Scott"}]')},45:function(e,a,t){e.exports=t(56)},50:function(e,a,t){},51:function(e,a,t){},52:function(e,a,t){},56:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(8),i=t.n(l),o=(t(50),t(35)),c=t(93),s=t(100),m=t(57),u=t(98),d=t(96),f=t(102),g=t(103),p=t(99),y=t(101);t(51);var v=function(e){return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"img-container d-flex align-items-center justify-content-center"},r.a.createElement("h1",null,e.firstName," ",e.lastName)),r.a.createElement("div",{className:"content"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("strong",null,"First Name:")," ",e.firstName," ",e.lastName),r.a.createElement("li",null,r.a.createElement("strong",null,"Title:")," ",e.title),r.a.createElement("li",null,r.a.createElement("strong",null,"Salary:")," ",e.salary),r.a.createElement("li",null,r.a.createElement("strong",null,"Department:")," ",e.dept),r.a.createElement("li",null,r.a.createElement("strong",null,"Manager:")," ",e.manager))))},h=t(31),E=(t(52),Object(c.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:250},selectEmpty:{marginTop:e.spacing(2)}}})));var _=function(){var e=E(),a=Object(n.useState)(h),t=Object(o.a)(a,2),l=t[0],i=t[1],c=Object(n.useState)(""),_=Object(o.a)(c,2),S=_[0],w=_[1];return r.a.createElement("div",{className:"wrapper"},r.a.createElement(d.a,{fixed:!0},r.a.createElement("h1",{className:"title"},"Employee Directory")),r.a.createElement(d.a,{fixed:!0},r.a.createElement(u.a,{color:"primary","aria-label":"outlined primary button group"},r.a.createElement(m.a,{onClick:function(){var e=h.sort((function(e,a){var t=e.first_name.toLowerCase(),n=a.first_name.toLowerCase();return t<n?-1:t>n?1:0}));i(e)}},"Sort by First Name"),r.a.createElement(m.a,{onClick:function(){var e=h.sort((function(e,a){var t=e.last_name.toLowerCase(),n=a.last_name.toLowerCase();return t<n?-1:t>n?1:0}));i(e)}},"Sort by Last Name")),r.a.createElement(p.a,{className:e.formControl},r.a.createElement(f.a,{id:"filter-dept-label"},"Filter by Department"),r.a.createElement(y.a,{labelId:"filter-dept-label",id:"filter-dept-select",value:S,onChange:function(e){var a=h.filter((function(a){return a.department===e.target.value}));i(a),w(e.target.value)}},r.a.createElement(g.a,{value:"Executive"},"Executive"),r.a.createElement(g.a,{value:"Finance"},"Finance"),r.a.createElement(g.a,{value:"Operations"},"Operations"),r.a.createElement(g.a,{value:"Information Technology"},"Information Technology"),r.a.createElement(g.a,{value:"Sales"},"Sales"),r.a.createElement(g.a,{value:"Human Resources"},"Human Resources")))),r.a.createElement(s.a,{container:!0,className:e.root,spacing:2},l.map((function(e){return r.a.createElement(v,{key:e.id,firstName:e.first_name,lastName:e.last_name,title:e.title,salary:e.salary,dept:e.department,manager:e.manager})}))))},S=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function w(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(_,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/react-employee-directory",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var a="".concat("/react-employee-directory","/service-worker.js");S?(!function(e,a){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):w(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):w(a,e)}))}}()}},[[45,1,2]]]);
//# sourceMappingURL=main.db428114.chunk.js.map