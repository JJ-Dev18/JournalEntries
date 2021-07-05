(this["webpackJsonpjournal-app"]=this["webpackJsonpjournal-app"]||[]).push([[0],{153:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(25),o=a.n(c),l=(a(64),a(4)),i=a(13),u=a(14),s=a(6),m=a(22),d=a.n(m);a(69),a(73);d.a.initializeApp({apiKey:"AIzaSyBjfxnd73TlrN_6yP4SCNgkvMbyXTCFFyY",authDomain:"react-curso-udemy-9b1d3.firebaseapp.com",databaseURL:"https://react-curso-udemy-9b1d3.firebaseio.com",projectId:"react-curso-udemy-9b1d3",storageBucket:"react-curso-udemy-9b1d3.appspot.com",messagingSenderId:"672484412531",appId:"1:672484412531:web:bb586f0b1276360a96ee06"});var p=d.a.firestore(),f=new d.a.auth.GoogleAuthProvider,b=a(28),h=a(2),E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(n.useState)(e),a=Object(i.a)(t,2),r=a[0],c=a[1],o=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e;c(t)},l=function(e){var t=e.target;c(Object(h.a)(Object(h.a)({},r),{},Object(b.a)({},t.name,t.value)))};return[r,l,o]},v=a(5),g=a.n(v),y=a(8),j="[Auth] Login",_="[Auth] Logout",O="[UI] Set Error",N="[UI] Remove Error",w="[UI] Start loading",k="[UI] Finish loading",x="[Notes] New note",S="[Notes] Set active note",C="[Notes] Load notes",I="[Notes] Update note ",L="[Notes] Delete note",P="[Notes] Logout Cleaning",D="[Notes] Back",A=function(e){return{type:O,payload:e}},U=function(){return{type:k,payload:!1}},B=a(15),M=a.n(B),R=function(){var e=Object(y.a)(g.a.mark((function e(t){var a,n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.collection("".concat(t,"/journal/notes")).orderBy("date","asc").get();case 2:return a=e.sent,n=[],a.forEach((function(e){n.push(Object(h.a)({id:e.id},e.data()))})),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=Object(y.a)(g.a.mark((function e(t){var a,n,r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"\thttps://api.cloudinary.com/v1_1/dbi95d6gs/upload",(a=new FormData).append("upload_preset","react-journal"),a.append("file",t),e.prev=4,e.next=7,fetch("\thttps://api.cloudinary.com/v1_1/dbi95d6gs/upload",{method:"POST",body:a});case 7:if(!(n=e.sent).ok){e.next=15;break}return e.next=11,n.json();case 11:return r=e.sent,e.abrupt("return",r.secure_url);case 15:return e.next=17,n.json();case 17:throw e.sent;case 18:e.next=23;break;case 20:throw e.prev=20,e.t0=e.catch(4),e.t0;case 23:case"end":return e.stop()}}),e,null,[[4,20]])})));return function(t){return e.apply(this,arguments)}}(),W=function(e,t){return{type:S,payload:Object(h.a)({id:e},t)}},F=function(e,t){return{type:x,payload:Object(h.a)({id:e},t)}},z=function(e){return{type:C,payload:e}},G=function(e){return function(){var t=Object(y.a)(g.a.mark((function t(a,n){var r,c;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n().auth.uid,e.url||delete e.url,delete(c=Object(h.a)({},e)).id,t.next=6,p.doc("".concat(r,"/journal/notes/").concat(e.id)).update(c);case 6:a(X(e.id,c)),M.a.fire("Saved",e.title,"success");case 8:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()},X=function(e,t){return{type:I,payload:{id:e,note:Object(h.a)({id:e},t)}}},q=function(e){return{type:L,payload:e}},J=function(e,t){return function(a){a({type:w,payload:!0}),d.a.auth().signInWithEmailAndPassword(e,t).then((function(e){var t=e.user;a(V(t.uid,t.displayName)),a(U())})).catch((function(e){console.log(e),a(U()),M.a.fire("Error",e.message,"error")}))}},V=function(e,t){return{type:j,payload:{uid:e,displayName:t}}},K=function(){return{type:_}},Y=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.ui})).loading,a=E({}),n=Object(i.a)(a,2),c=n[0],o=n[1],s=c.email,m=c.password;return r.a.createElement("div",null,r.a.createElement("h3",{className:"auth__title"},"Login "),r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e(J(s,m))},className:"animate__animated animate__fadeIn"},r.a.createElement("input",{type:"text",placeholder:"Email",name:"email",value:s,className:"auth__input",onChange:o}),r.a.createElement("input",{type:"password",placeholder:"Password",name:"password",value:m,className:"auth__input",onChange:o}),r.a.createElement("button",{className:"btn btn-primary btn-block",type:"submit",disabled:t},"Login"),r.a.createElement("hr",null),r.a.createElement("div",{className:"auth__social-networks"},r.a.createElement("p",null,"Login With Social network "),r.a.createElement("div",{className:"google-btn",onClick:function(){e((function(e){d.a.auth().signInWithPopup(f).then((function(t){var a=t.user;e(V(a.uid,a.displayName))}))}))}},r.a.createElement("div",{className:"google-icon-wrapper"},r.a.createElement("img",{className:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"google button"})),r.a.createElement("p",{className:"btn-text"},r.a.createElement("b",null,"Sign in with google")))),r.a.createElement(u.b,{to:"/auth/register",className:"link"},"Create New Acountt")))},H=a(57),Q=a.n(H),Z=function(){var e=E(),t=Object(i.a)(e,2),a=t[0],n=t[1],c=Object(l.b)(),o=Object(l.c)((function(e){return e.ui})).msgError;console.log(o);var s=a.name,m=a.email,p=a.password,f=a.password2,b=function(){if(0===s.trim().length){return c(A("name is required")),!1}return Q.a.isEmail(m)?p!==f||p.length<5?(console.log("Minimo 6 caracteres para la contrase\xf1a o no concuerdan las passwords"),c(A("minimo 6 caracteres")),!1):(c({type:N}),!0):(console.log("email no es valido"),c(A("email no es valido")),!1)};return r.a.createElement("div",null,r.a.createElement("h3",{className:"auth__title"},"Register "),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),b()&&c(function(e,t,a){return function(n){d.a.auth().createUserWithEmailAndPassword(t,a).then(function(){var t=Object(y.a)(g.a.mark((function t(a){var r;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a.user,t.next=3,r.updateProfile({displayName:e});case 3:n(V(r.uid,r.displayName));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(e){console.log(e),M.a.fire("Error",e.message,"error")}))}}(s,m,p))},className:"animate__animated animate__fadeIn"},null!==o&&r.a.createElement("div",{className:"auth__alert-error"},o),r.a.createElement("input",{type:"text",placeholder:"Name",name:"name",className:"auth__input",autoComplete:"off",onChange:n,value:s}),r.a.createElement("input",{type:"text",placeholder:"Email",name:"email",className:"auth__input",onChange:n,value:m}),r.a.createElement("input",{type:"password",placeholder:"Password",name:"password",className:"auth__input",onChange:n,value:p}),r.a.createElement("input",{type:"password",placeholder:"Confirm Password ",name:"password2",className:"auth__input",onChange:n,value:f}),r.a.createElement("button",{className:"btn btn-primary btn-block",type:"submit"},"Register"),r.a.createElement("hr",null),r.a.createElement(u.b,{to:"/auth/login",className:"link mt-1"},"Already Registered ?")))},$=function(){return r.a.createElement("div",{className:"auth__main"},r.a.createElement("div",{className:"auth__box-container"},r.a.createElement(s.d,null,r.a.createElement(s.b,{exact:!0,path:"/auth/login",component:Y}),r.a.createElement(s.b,{exact:!0,path:"/auth/register",component:Z}),r.a.createElement(s.a,{to:"/auth/login"}))))},ee=a(29),te=a.n(ee),ae=function(e){var t=e.id,a=e.date,n=e.title,c=e.body,o=e.url,i=te()(a),u=Object(l.b)();return r.a.createElement("div",{className:"journal__entry pointer animate__animated animate__fadeIn",onClick:function(){u(W(t,{title:n,body:c,date:a,url:o}))}},o&&r.a.createElement("div",{className:"journal__entry-pictures",style:{backgroundSize:"cover",backgroundImage:"url(".concat(o,")")}}),r.a.createElement("div",{className:"journal__entry-body"},r.a.createElement("p",{className:"journal__entry-title"},n)),r.a.createElement("div",{className:"journal__entry-date-box"},r.a.createElement("span",null,i.format("dddd")),r.a.createElement("h4",null,i.format("Do")),r.a.createElement("span",null,i.format("MMMM"))))},ne=function(){var e=Object(l.c)((function(e){return e.notes})).notes;return r.a.createElement("div",{className:"journal__entries"},e.map((function(e){return r.a.createElement(ae,Object.assign({key:e.id},e))})))},re=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.auth})).name;return r.a.createElement("aside",{className:"journal__sidebar animate__animated animate__fadeIn"},r.a.createElement("div",{className:"journal__sidebar-navbar"},r.a.createElement("h3",{className:"mt-5"},r.a.createElement("i",{className:"far fa-moon"}),r.a.createElement("span",{className:"ml-3"},t)),r.a.createElement("button",{className:"btn",onClick:function(t){e(function(){var e=Object(y.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.auth().signOut();case 2:t(K()),t({type:P});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}},"Log out")),r.a.createElement("div",{className:"journal__new-entry",onClick:function(){e(function(){var e=Object(y.a)(g.a.mark((function e(t,a){var n,r,c;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a().auth.uid,r={title:"",body:"",date:(new Date).getTime()},e.next=4,p.collection("".concat(n,"/journal/notes")).add(r);case 4:c=e.sent,t(W(c.id,r)),t(F(c.id,r));case 7:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}())}},r.a.createElement("i",{className:"far fa-calendar-plus fa-5x"}),r.a.createElement("p",{className:"mt-5"},"New Entry")),r.a.createElement(ne,null))},ce=function(){return r.a.createElement("div",{className:"nothing__main-content"},r.a.createElement("p",null,"Select Something",r.a.createElement("br",null),"pr create an entry !"),r.a.createElement("i",{className:"far fa-star fa-4x mt-5"}))},oe=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.notes})).active,a=te()((new Date).getTime());return r.a.createElement("div",{className:"notes__appbar"},r.a.createElement("i",{className:"fas fa-backward back",onClick:function(){e({type:D})}}),r.a.createElement("span",null,a.format("ll")),r.a.createElement("input",{id:"fileSelector",style:{display:"none"},type:"file",name:"file",onChange:function(t){var a=t.target.files[0];e(function(e){return function(){var t=Object(y.a)(g.a.mark((function t(a,n){var r,c;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n().notes.active,M.a.fire({title:"Uploading",text:"Please wait...",allowOutsideClick:!1,onBeforeOpen:function(){M.a.showLoading()}}),t.next=4,T(e);case 4:c=t.sent,r.url=c,a(G(r)),M.a.close();case 8:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()}(a))}}),r.a.createElement("div",null,r.a.createElement("button",{className:"btn",onClick:function(){document.querySelector("#fileSelector").click()}},"Picture"),r.a.createElement("button",{className:"btn",onClick:function(){e(G(t))}},"SAVE")))},le=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.notes})).active,a=E(t),c=Object(i.a)(a,3),o=c[0],u=c[1],s=c[2],m=o.title,d=o.body,f=o.id,b=Object(n.useRef)(t.id);Object(n.useEffect)((function(){t.id!==b.current&&(s(t),b.current=t.id)}),[t,s]),Object(n.useEffect)((function(){e(W(o.id,Object(h.a)({},o)))}),[o,e]);return r.a.createElement("div",{className:"notes__main-content"},r.a.createElement(oe,null),r.a.createElement("div",{className:"notes__content "},r.a.createElement("input",{type:"text",placeholder:"Some awesome title",className:"notes__title-input",value:m,name:"title",onChange:u}),r.a.createElement("textarea",{placeholder:"what happened today",className:"notes__textarea",value:d,name:"body",onChange:u}),t.url&&r.a.createElement("div",{className:"notes__image"},r.a.createElement("img",{alt:"imagen",src:t.url}))),r.a.createElement("button",{className:"btn btn-danger",onClick:function(){e(function(e){return function(){var t=Object(y.a)(g.a.mark((function t(a,n){var r;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n().auth.uid,t.next=3,p.doc("".concat(r,"/journal/notes/").concat(e)).delete();case 3:a(q(e));case 4:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()}(f))}},"Delete"))},ie=function(){var e=Object(l.c)((function(e){return e.notes})).active;return r.a.createElement("div",{className:"journal__main-content\r animate__animated animate__fadeIn"},r.a.createElement("div",{className:"sideBarDesktop"},r.a.createElement(re,null)),r.a.createElement("div",{className:"sideBarCel"},e?r.a.createElement(le,null):r.a.createElement(re,null)),r.a.createElement("main",null," ",e?r.a.createElement(le,null):r.a.createElement(ce,null)))},ue=a(30),se=function(e){var t=e.isLoggedIn,a=e.component,n=Object(ue.a)(e,["isLoggedIn","component"]);return localStorage.setItem("lastPath",n.location.pathname),r.a.createElement(s.b,Object.assign({},n,{component:function(e){return t?r.a.createElement(a,e):r.a.createElement(s.a,{to:"/login"})}}))},me=function(e){var t=e.isLoggedIn,a=e.component,n=Object(ue.a)(e,["isLoggedIn","component"]);return r.a.createElement(s.b,Object.assign({},n,{component:function(e){return t?r.a.createElement(s.a,{to:"/"}):r.a.createElement(a,e)}}))},de=function(){var e=Object(l.b)(),t=Object(n.useState)(!0),a=Object(i.a)(t,2),c=a[0],o=a[1],m=Object(n.useState)(!1),p=Object(i.a)(m,2),f=p[0],b=p[1];return Object(n.useEffect)((function(){d.a.auth().onAuthStateChanged((function(t){var a;(null===t||void 0===t?void 0:t.uid)?(e(V(t.uid,t.displayName)),b(!0),e((a=t.uid,function(){var e=Object(y.a)(g.a.mark((function e(t){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R(a);case 2:n=e.sent,t(z(n));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))):b(!1),o(!1)}))}),[e,o,b]),c?r.a.createElement("h1",null," Wait..."):r.a.createElement(u.a,null,r.a.createElement("div",null,r.a.createElement(s.d,null,r.a.createElement(me,{isLoggedIn:f,path:"/auth",component:$}),r.a.createElement(se,{isLoggedIn:f,exact:!0,path:"/",component:ie}),r.a.createElement(s.a,{to:"/auth/login"}))))},pe=a(16),fe=a(58),be={loading:!1,msgError:null},he=a(40),Ee={notes:[],active:null},ve="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||pe.d,ge=Object(pe.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return{uid:t.payload.uid,name:t.payload.displayName};case _:return{};default:return e}},ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(h.a)(Object(h.a)({},e),{},{msgError:t.payload});case N:return Object(h.a)(Object(h.a)({},e),{},{msgError:null});case w:return{loading:!0};case k:return{loading:!1};default:return e}},notes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return Object(h.a)(Object(h.a)({},e),{},{active:Object(h.a)({},t.payload)});case x:return Object(h.a)(Object(h.a)({},e),{},{notes:[].concat(Object(he.a)(e.notes),[t.payload])});case C:return Object(h.a)(Object(h.a)({},e),{},{notes:Object(he.a)(t.payload)});case I:return Object(h.a)(Object(h.a)({},e),{},{notes:e.notes.map((function(e){return e.id===t.payload.id?t.payload.note:e}))});case L:return Object(h.a)(Object(h.a)({},e),{},{active:null,notes:e.notes.filter((function(e){return e.id!==t.payload}))});case P:return{notes:[],active:null};case D:return Object(h.a)(Object(h.a)({},e),{},{active:null});default:return e}}}),ye=Object(pe.e)(ge,ve(Object(pe.a)(fe.a))),je=function(){return r.a.createElement(l.a,{store:ye},r.a.createElement(de,null))};o.a.render(r.a.createElement(je,null),document.getElementById("root"))},59:function(e,t,a){e.exports=a(153)},64:function(e,t,a){}},[[59,1,2]]]);
//# sourceMappingURL=main.65124cde.chunk.js.map