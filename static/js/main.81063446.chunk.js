(this["webpackJsonpreact-employee-directory"]=this["webpackJsonpreact-employee-directory"]||[]).push([[0],{40:function(e){e.exports=JSON.parse('[{"id":1,"first_name":"Michael","last_name":"Scott","title":"Regional Manager","salary":180000,"department":"Executive","manager":null},{"id":2,"first_name":"Angela","last_name":"Martin","title":"Accountant","salary":70000,"department":"Finance","manager":null},{"id":3,"first_name":"Darryl","last_name":"Philbin","title":"Manager","salary":150000,"department":"Operations","manager":null},{"id":4,"first_name":"Connie","last_name":"Tran","title":"Software Engineer","salary":175000,"department":"Information Technology","manager":null},{"id":5,"first_name":"Dwight","last_name":"Schrute","title":"Assistant to the Regional Manager","salary":90000,"department":"Executive","manager":"Michael Scott"},{"id":6,"first_name":"Jim","last_name":"Halpert","title":"Sales Representative","salary":60000,"department":"Sales","manager":"Michael Scott"},{"id":7,"first_name":"Pam","last_name":"Beasley","title":"Sales Representative","salary":60000,"department":"Sales","manager":"Michael Scott"},{"id":8,"first_name":"Stanley","last_name":"Hudson","title":"Sales Representative","salary":60000,"department":"Sales","manager":"Michael Scott"},{"id":9,"first_name":"Phyllis","last_name":"Lapin","title":"Sales Representative","salary":60000,"department":"Sales","manager":"Michael Scott"},{"id":10,"first_name":"Oscar","last_name":"Gutierrez","title":"Accountant","salary":70000,"department":"Finance","manager":"Angela Martin"},{"id":11,"first_name":"Kevin","last_name":"Malone","title":"Accountant","salary":70000,"department":"Finance","manager":"Angela Martin"},{"id":12,"first_name":"Creed","last_name":"Bratton","title":"Quality Control Associate","salary":40000,"department":"Operations","manager":"Darryl Philbin"},{"id":13,"first_name":"Andy","last_name":"Bernard","title":"Manager","salary":80000,"department":"Sales","manager":"Michael Scott"},{"id":14,"first_name":"Toby","last_name":"Flenderson","title":"HR Associate","salary":60000,"department":"Human Resources","manager":"Michael Scott"}]')},48:function(e,a,t){e.exports=t(59)},53:function(e,a,t){},54:function(e,a,t){},55:function(e,a,t){},59:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(8),i=t.n(l),o=(t(53),t(36)),c=t(37),s=t(96),m=t(103),u=t(60),d=t(101),f=t(99),g=t(105),p=t(106),y=t(102),v=t(104);t(54);var h=function(e){return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"img-container d-flex align-items-center justify-content-center"},r.a.createElement("h2",null,e.firstName," ",e.lastName)),r.a.createElement("div",{className:"content"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("strong",null,"First Name:")," ",e.firstName," ",e.lastName),r.a.createElement("li",null,r.a.createElement("strong",null,"Title:")," ",e.title),r.a.createElement("li",null,r.a.createElement("strong",null,"Salary:")," ",e.salary),r.a.createElement("li",null,r.a.createElement("strong",null,"Department:")," ",e.dept),r.a.createElement("li",null,r.a.createElement("strong",null,"Manager:")," ",e.manager))))},E=t(40),_=(t(55),Object(s.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:250},selectEmpty:{marginTop:e.spacing(2)}}})));var S=function(){var e=_(),a=Object(n.useState)(E),t=Object(c.a)(a,2),l=t[0],i=t[1],s=Object(n.useState)(""),S=Object(c.a)(s,2),w=S[0],b=S[1];return r.a.createElement("div",{className:"wrapper"},r.a.createElement(f.a,{fixed:!0},r.a.createElement("h1",{className:"title"},"Employee Directory")),r.a.createElement(f.a,{fixed:!0},r.a.createElement(d.a,{color:"primary","aria-label":"outlined primary button group"},r.a.createElement(u.a,{onClick:function(){var e=Object(o.a)(l).sort((function(e,a){var t=e.first_name.toLowerCase(),n=a.first_name.toLowerCase();return t<n?-1:t>n?1:0}));i(e)}},"Sort by First Name"),r.a.createElement(u.a,{onClick:function(){var e=Object(o.a)(l).sort((function(e,a){var t=e.last_name.toLowerCase(),n=a.last_name.toLowerCase();return t<n?-1:t>n?1:0}));i(e)}},"Sort by Last Name")),r.a.createElement(y.a,{className:e.formControl},r.a.createElement(g.a,{id:"filter-dept-label"},"Filter by Department"),r.a.createElement(v.a,{labelId:"filter-dept-label",id:"filter-dept-select",value:w,onChange:function(e){var a=l.filter((function(a){return a.department===e.target.value}));i(a),b(e.target.value)}},r.a.createElement(p.a,{value:"Executive"},"Executive"),r.a.createElement(p.a,{value:"Finance"},"Finance"),r.a.createElement(p.a,{value:"Operations"},"Operations"),r.a.createElement(p.a,{value:"Information Technology"},"Information Technology"),r.a.createElement(p.a,{value:"Sales"},"Sales"),r.a.createElement(p.a,{value:"Human Resources"},"Human Resources")))),r.a.createElement(m.a,{container:!0,className:e.root,spacing:2},l.map((function(e){return r.a.createElement(h,{key:e.id,firstName:e.first_name,lastName:e.last_name,title:e.title,salary:e.salary,dept:e.department,manager:e.manager})}))))},w=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function b(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/react-employee-directory",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var a="".concat("/react-employee-directory","/service-worker.js");w?(!function(e,a){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):b(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):b(a,e)}))}}()}},[[48,1,2]]]);
//# sourceMappingURL=main.81063446.chunk.js.map