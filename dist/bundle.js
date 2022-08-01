(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(81),o=n.n(r),a=n(645),i=n.n(a)()(o());i.push([e.id,"body {\n    margin: 0;\n    font-family: monospace;\n}\n\n.flex-column {\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n}\n\n:root {\n    --base: #B0DAFF;\n    --main:#F0f8ff;\n    --accent: #70BCFF;\n}\n\n.logo {\n    display: flex;\n    background-color: var(--base);\n    color: var(--main);\n    font-size: 3rem;\n    padding: 1rem;\n}\n\nmain {\n    display: flex;\n}\n\nnav {\n    flex-grow: 1;\n}\n\nfooter {\n    margin-top: auto;\n    padding: 2rem;\n    background-color: var(--base);\n    color: var(--main);\n}\n\n.project-view {\n    flex-grow: 1;\n}\n\n.project-view-title {\n    font-size: 2rem;\n    font-weight: 900;\n}\n\n.form-container {\n    display: flex;\n    justify-content: space-around;\n    width: 200px;\n    margin: auto;\n}\n\n.hidden {\n    display: none;\n}\n\n.dummy-project:hover {\n    background-color: var(--base);\n}\n\n.active {\n    background-color: var(--accent);\n}\n\n.toDoDiv {\n    background-color: var(--base);\n    border: 2px solid var(--accent);\n    margin-bottom: 5px;\n    display: flex;\n    justify-content: space-around;\n}\n\n.project-view-header {\n    display: flex;\n    justify-content: space-around;\n    flex-direction: column;\n}\n\n.add-todo-button {\n    background-color: var(--main);\n    border: 2px solid var(--base);\n    border-radius: 10px;\n}\n\n.add-todo-button:hover {\n    background-color: var(--base);\n    border: 2px solid var(--accent);\n}\n\n.project-todo-list {\n    display: flex;\n    flex-direction: column;\n}\n\n#todo-entry-form {\n    display: flex;\n    justify-content: space-evenly;\n}\n\n#todo-entry {\n    width: 75%;\n    margin-right: auto;\n}\n\n.toDo {\n    border: 2px solid var(--accent);\n    border-radius: 10px;\n}\n\n.remove-todo {\n    border: 2px solid var(--accent);\n    border-radius: 10px;\n    margin: 0 10px 0 auto;\n}",""]);const c=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var l=0;l<e.length;l++){var s=[].concat(e[l]);r&&i[s[0]]||(void 0!==a&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=a),n&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=n):s[2]=n),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),t.push(s))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var d=e[c],l=r.base?d[0]+r.base:d[0],s=a[l]||0,u="".concat(l," ").concat(s);a[l]=s+1;var p=n(u),f={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var m=o(f,r);r.byIndex=c,t.splice(c,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=n(a[i]);t[c].references--}for(var d=r(e,o),l=0;l<a.length;l++){var s=n(a[l]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}a=d}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),r=n(795),o=n.n(r),a=n(569),i=n.n(a),c=n(565),d=n.n(c),l=n(216),s=n.n(l),u=n(589),p=n.n(u),f=n(426),m={};m.styleTagTransform=p(),m.setAttributes=d(),m.insert=i().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=s(),t()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const v=document.querySelector(".add-project-button"),y=document.querySelector("#submit"),h=document.querySelector("#close"),b=document.querySelector(".project-todo-list"),g=document.querySelector(".add-todo-button");let x,k=[];v.addEventListener("click",(()=>{document.querySelector(".hidden").classList.remove("hidden")})),h.addEventListener("click",(()=>{document.querySelector(".form-container").classList.add("hidden")}));const S=e=>{x.checklist.removeChild(e.target.getAttribute("data-key")),C(x.checklist)};g.addEventListener("click",(e=>{e.preventDefault();let t=k[e.target.getAttribute("data-key")],n=document.querySelector("#todo-entry").value,r=document.querySelector("#todo-due-date");""==n||""==r?alert("Please fill in all fields or select a date"):(t.addTaskToChecklist(n,r),C(t.checklist),document.getElementById("todo-entry-form").reset()),console.log(t)}));const C=e=>{for(;b.firstChild;)b.removeChild(b.lastChild);e.forEach((t=>{let n=document.createElement("div");n.addEventListener("click",S),n.innerHTML="remove",n.setAttribute("data-key",e.indexOf(t)),n.classList.add("remove-todo");let r=document.createElement("div"),o=document.createElement("div");o.classList.add("toDo"),o.innerHTML=t,r.classList.add("toDoDiv"),r.appendChild(o),r.appendChild(n),b.appendChild(r)}))},L=e=>{let t=e.target.getAttribute("data-key"),n=k[e.target.getAttribute("data-key")];x=k[e.target.getAttribute("data-key")],document.querySelector(".project-view-title").innerHTML=n.title,g.getAttribute("data-key")!=t&&(g.setAttribute("data-key",t),C(n.checklist),console.log(g.getAttribute("data-key")))};y.addEventListener("click",(e=>{e.preventDefault(),(()=>{let e=document.querySelector("#title").value,t=document.querySelector("#description").value,n=document.querySelector("#dueDate").value,r=document.querySelector("#priority").value;if(""==e||""==t||""==n||""==r)alert("Please fill in all fields");else{const o=((e,t,n,r)=>{let o=[];return{title:e,description:t,dueDate:n,priority:r,checklist:o,todoList:{text:"",checked:!1},notes:"",addTaskToChecklist:(e,t)=>{let n=e;o.push(n)},markTaskAsComplete:()=>{}}})(e,t,n,r);k.push(o)}})(),(()=>{let e=k[k.length-1],t=document.createElement("div");t.addEventListener("click",L),t.innerHTML=e.title,t.setAttribute("data-key",k.indexOf(e)),t.classList.add("dummy-project"),document.querySelector(".project-list").appendChild(t)})(),document.getElementById("projectForm").reset()}))})()})();