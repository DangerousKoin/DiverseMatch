(this.webpackJsonpdiversematch=this.webpackJsonpdiversematch||[]).push([[0],{150:function(e,t,n){},151:function(e,t,n){},159:function(e,t,n){},160:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n(0),c=n(55),s=n.n(c),o=(n(149),n(150),n(10)),i=n(11),l=(n(151),n(33)),u=n.n(l),j=n(56),d=n(35),h=n(29);function b(e){return Object(a.jsx)("span",{className:"error",children:e.error})}var p=n(178),O=n(179),m=n(131),g=n(173),x=n(180),f=n(176);function v(){var e=localStorage.getItem("token");e&&(JSON.parse(atob(e.split(".")[1])).exp<Date.now()/1e3&&(localStorage.removeItem("token"),e=null));return e}var w={setToken:function(e){e?localStorage.setItem("token",e):localStorage.removeItem("token")},getToken:v,removeToken:function(){localStorage.removeItem("token")},getUserFromToken:function(){var e=v();return e?JSON.parse(atob(e.split(".")[1])).user:null}},y="/api/users/";var S={signup:function(e){return fetch(y+"signup",{method:"POST",body:e}).then((function(e){if(e.ok)return e.json();throw new Error("Username already taken!")})).then((function(e){var t=e.token;return w.setToken(t)}))},getUser:function(){return w.getUserFromToken()},logout:function(){w.removeToken()},login:function(e){return fetch(y+"login",{method:"POST",headers:new Headers({"Content-Type":"application/json"}),body:JSON.stringify(e)}).then((function(e){if(e.ok)return e.json();throw new Error("Bad Credentials!")})).then((function(e){var t=e.token;return w.setToken(t)}))},getProfile:function(e){return fetch(y+e,{headers:{Authorization:"Bearer "+w.getToken()}}).then((function(e){if(e.ok)return e.json();throw new Error("User does not exist")}))}};function k(e){var t=Object(r.useState)(!1),n=Object(o.a)(t,2),c=n[0],s=(n[1],Object(r.useState)("")),l=Object(o.a)(s,2),v=l[0],w=l[1],y=Object(r.useState)(""),k=Object(o.a)(y,2),C=k[0],P=k[1],T=Object(r.useState)({username:"",password:"",passwordConf:""}),A=Object(o.a)(T,2),I=A[0],N=A[1],L=Object(i.g)();function U(e){N(Object(h.a)(Object(h.a)({},I),{},Object(d.a)({},e.target.name,e.target.value)))}function D(){return(D=Object(j.a)(u.a.mark((function t(n){var a,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(r in n.preventDefault(),(a=new FormData).append("photo",C),I)a.append(r,I[r]);return t.prev=4,t.next=7,S.signup(a);case 7:e.handleSignUpOrLogin(),L.push("/"),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(4),console.log(t.t0.message),w(t.t0.message);case 15:case"end":return t.stop()}}),t,null,[[4,11]])})))).apply(this,arguments)}return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(p.a,{textAlign:"center",style:{height:"100vh"},verticalAlign:"middle",children:Object(a.jsxs)(p.a.Column,{style:{maxWidth:450},children:[Object(a.jsxs)(O.a,{as:"h2",color:"teal",textAlign:"center",children:[Object(a.jsx)(m.a,{src:"https://photocollector.s3-us-west-2.amazonaws.com/site-images/DiverseMatch_logo.png"})," Sign Up"]}),Object(a.jsxs)(g.a,{autoComplete:"off",onSubmit:function(e){return D.apply(this,arguments)},children:[Object(a.jsxs)(x.a,{stacked:!0,children:[Object(a.jsx)(g.a.Input,{name:"username",placeholder:"username",value:I.username,onChange:U,required:!0}),Object(a.jsx)(g.a.Input,{name:"password",type:"password",placeholder:"password",value:I.password,onChange:U,required:!0}),Object(a.jsx)(g.a.Input,{name:"passwordConf",type:"password",placeholder:"Confirm Password",value:I.passwordConf,onChange:U,required:!0}),Object(a.jsx)(g.a.Field,{children:Object(a.jsx)(g.a.Input,{type:"file",name:"photo",placeholder:"upload image",onChange:function(e){P(e.target.files[0])}})}),Object(a.jsx)(f.a,{type:"submit",className:"btn",disabled:c,children:"Signup"})]}),v?Object(a.jsx)(b,{error:v}):null]})]})})})}n(159);var C=n(25),P=n(175);function T(e){var t=Object(r.useState)(!1),n=Object(o.a)(t,2),c=n[0],s=(n[1],Object(r.useState)("")),l=Object(o.a)(s,2),v=l[0],w=l[1],y=Object(r.useState)({username:"",password:""}),k=Object(o.a)(y,2),T=k[0],A=k[1],I=Object(i.g)();function N(e){A(Object(h.a)(Object(h.a)({},T),{},Object(d.a)({},e.target.name,e.target.value)))}function L(){return(L=Object(j.a)(u.a.mark((function t(n){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.prev=1,t.next=4,S.login(T);case 4:e.handleSignUpOrLogin(),I.push("/"),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),w(t.t0.message);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})))).apply(this,arguments)}return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(p.a,{textAlign:"center",style:{height:"100vh"},verticalAlign:"middle",children:Object(a.jsxs)(p.a.Column,{style:{maxWidth:450},children:[Object(a.jsxs)(O.a,{as:"h2",color:"teal",textAlign:"center",children:[Object(a.jsx)(m.a,{src:"https://photocollector.s3-us-west-2.amazonaws.com/site-images/DiverseMatch_logo.png"})," Log-in to your account"]}),Object(a.jsx)(g.a,{autoComplete:"off",onSubmit:function(e){return L.apply(this,arguments)},children:Object(a.jsxs)(x.a,{stacked:!0,children:[Object(a.jsx)(g.a.Input,{name:"username",placeholder:"username",value:T.username,onChange:N,requiredss:!0}),Object(a.jsx)(g.a.Input,{name:"password",type:"password",placeholder:"password",value:T.password,onChange:N,required:!0}),Object(a.jsx)(f.a,{color:"teal",fluid:!0,size:"large",type:"submit",className:"btn",disabled:c,children:"Login"})]})}),Object(a.jsxs)(P.a,{children:["New to us? ",Object(a.jsx)(C.b,{to:"/signup",children:"Sign Up"})]}),v?Object(a.jsx)(b,{error:v}):null]})})})}var A=n(84),I=n(172);function N(e){var t=e.user,n=e.handleLogout;return Object(a.jsx)(p.a,{textAlign:"center",columns:2,children:Object(a.jsxs)(p.a.Row,{children:[Object(a.jsx)(p.a.Column,{children:Object(a.jsx)(m.a,{src:"".concat(t.avatar?t.avatar:"https://react.semantic-ui.com/images/wireframe/square-image.png"," "),avatar:!0,size:"small"})}),Object(a.jsx)(p.a.Column,{textAlign:"left",style:{maxWidth:450},children:Object(a.jsxs)(x.a,{vertical:!0,children:[Object(a.jsx)("h3",{children:t.username}),Object(a.jsx)(C.b,{to:"",onClick:n,children:"Logout"})]})})]})})}var L=n(174);var U=function(e){var t=e.topic;return Object(a.jsx)(L.a,{style:{minWidth:150},children:Object(a.jsxs)(L.a.Content,{style:{fontSize:"small",display:"inline",whiteSpace:"nowrap",textAlign:"center",padding:0},children:[Object(a.jsx)(m.a,{style:{padding:2,border:2,borderRadius:5,backgroundColor:"green"},floated:"left",size:"tiny",src:t.icon?t.icon:"https://react.semantic-ui.com/images/wireframe/square-image.png"}),Object(a.jsx)("strong",{children:t.title}),Object(a.jsx)("br",{}),t.description]})},t._id)};function D(e){var t=e.topics,n=e.isProfile,r=e.numPhotosCol,c=e.user;return Object(a.jsx)(L.a.Group,{itemsPerRow:r,stackable:!0,children:t.map((function(e){return Object(a.jsx)(U,{topic:e,isProfile:n,user:c},e._id)}))})}var F="/api/topics/";function q(e){return fetch(F,{method:"POST",body:e,headers:{Authorization:"Bearer "+w.getToken()}}).then((function(e){return e.json()}))}function z(){var e=Object(r.useState)({}),t=Object(o.a)(e,2),n=t[0],c=t[1],s=Object(r.useState)([]),i=Object(o.a)(s,2),l=(i[0],i[1],Object(r.useState)([])),u=Object(o.a)(l,2),j=u[0],b=u[1];return Object(a.jsxs)(x.a,{children:[Object(a.jsxs)(g.a,{autoComplete:"off",onSubmit:function(e){e.preventDefault();var t=S.getProfile(e.username);(new FormData).append("title",n.title),b((function(){return Object(A.a)(t.topics)}));var a,r=(a=n.title,fetch("/api/topics/search",{method:"POST",body:a,headers:{Authorization:"Bearer "+w.getToken()}}).then((function(e){return e.json()})));console.log("component results ",r)},children:[Object(a.jsx)(g.a.Input,{className:"search-input",name:"title",placeholder:"Search Topics",onChange:function(e){c(Object(h.a)(Object(h.a)({},n),{},Object(d.a)({},e.target.name,e.target.value)))},required:!0}),Object(a.jsx)(f.a,{type:"submit",className:"btn",children:"Search"})]}),Object(a.jsx)(D,{isProfile:!0,topics:j,numPhotosCol:1})]})}function W(e){var t=e.user;return Object(a.jsx)(x.a,{clearing:!0,children:Object(a.jsxs)(O.a,{children:[Object(a.jsx)(C.b,{to:"/",children:Object(a.jsx)(m.a,{style:{display:"inline",float:"left",width:100},src:"https://photocollector.s3-us-west-2.amazonaws.com/site-images/DiverseMatch_logo.png"})}),Object(a.jsx)(C.b,{to:"/".concat(t.username),children:Object(a.jsx)(m.a,{style:{display:"inline",float:"right",width:80,height:80},src:t.avatar?t.avatar:"https://react.semantic-ui.com/images/wireframe/square-image.png",avatar:!0})})]})})}function R(e){var t=Object(r.useState)(""),n=Object(o.a)(t,2),c=n[0],s=n[1],i=Object(r.useState)({description:""}),l=Object(o.a)(i,2),u=l[0],j=l[1];function b(e){j(Object(h.a)(Object(h.a)({},u),{},Object(d.a)({},e.target.name,e.target.value)))}return Object(a.jsx)(x.a,{children:Object(a.jsxs)(g.a,{autoComplete:"off",onSubmit:function(t){t.preventDefault();var n=new FormData;n.append("photo",c),n.append("description",u.description),n.append("title",u.title),e.handleAddTopic(n)},children:[Object(a.jsx)(g.a.Input,{className:"form-control",name:"title",value:u.title,placeholder:"topic title",onChange:b,required:!0}),Object(a.jsx)(g.a.Input,{className:"form-control",name:"description",value:u.description,placeholder:"topic description",onChange:b,required:!0}),Object(a.jsx)(g.a.Input,{className:"form-control",type:"file",name:"photo",placeholder:"upload image",onChange:function(e){s(e.target.files[0])}}),Object(a.jsx)(f.a,{type:"submit",className:"btn",children:"ADD TOPIC"})]})})}function B(e){var t=e.user,n=e.handleLogout,c=Object(r.useState)([]),s=Object(o.a)(c,2),l=s[0],d=s[1],h=Object(r.useState)({}),b=Object(o.a)(h,2),O=b[0],m=b[1],g=Object(r.useState)(!0),x=Object(o.a)(g,2),f=x[0],v=x[1],w=Object(r.useState)(""),y=Object(o.a)(w,2),k=(y[0],y[1]),C=Object(i.h)();function P(){return(P=Object(j.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=C.pathname.substring(1),console.log("ProfilePage username",t),e.next=5,S.getProfile(t);case 5:n=e.sent,console.log("ProfilePage data",n),v((function(){return!1})),d((function(){return Object(A.a)(n.topics)})),m((function(){return n.user})),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0),k(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}function T(){return(T=Object(j.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q(t);case 2:n=e.sent,console.log(n," data"),d([n.topic].concat(Object(A.a)(l)));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return console.log(C),Object(r.useEffect)((function(){!function(){P.apply(this,arguments)}()}),[]),Object(a.jsx)(a.Fragment,{children:f?Object(a.jsx)(p.a,{textAlign:"center",style:{height:"100vh"},verticalAlign:"middle",children:Object(a.jsx)(p.a.Column,{style:{maxWidth:450},children:Object(a.jsx)(I.a,{size:"large",active:!0,children:"Loading"})})}):Object(a.jsxs)(p.a,{children:[Object(a.jsxs)(p.a.Column,{style:{minWidth:260,maxWidth:"40%"},children:[Object(a.jsx)(p.a.Row,{centered:!0,children:Object(a.jsx)(W,{user:t})}),Object(a.jsxs)(p.a.Row,{centered:!0,children:[Object(a.jsx)("h2",{children:"Find Interests:"}),Object(a.jsx)(z,{}),Object(a.jsx)(D,{isProfile:!0,topics:l,numPhotosCol:1,user:t})]})]}),Object(a.jsxs)(p.a.Column,{style:{width:"60%"},children:[Object(a.jsx)(p.a.Row,{children:Object(a.jsx)(N,{user:O,handleLogout:n})}),Object(a.jsx)(p.a.Row,{children:Object(a.jsx)(p.a.Column,{children:Object(a.jsx)(R,{handleAddTopic:function(e){return T.apply(this,arguments)}})})}),Object(a.jsxs)(p.a.Row,{children:[Object(a.jsx)("h2",{children:"Added Topics:"}),Object(a.jsx)(D,{isProfile:!0,topics:l,numPhotosCol:1,user:t})]})]})]})})}function E(e){var t=e.user;e.handleLogout;return Object(a.jsxs)(p.a,{children:[Object(a.jsxs)(p.a.Column,{style:{minWidth:250},children:[Object(a.jsx)(p.a.Row,{centered:!0,children:Object(a.jsx)(W,{user:t})}),Object(a.jsxs)(p.a.Row,{centered:!0,children:[Object(a.jsx)("h2",{children:"Find Matches!"}),Object(a.jsx)(z,{})]})]}),Object(a.jsxs)(p.a.Column,{style:{minWidth:350},children:[Object(a.jsx)(N,{user:""}),"Need to make user cards!"]})]})}var J=function(){var e=Object(r.useState)(S.getUser()),t=Object(o.a)(e,2),n=t[0],c=t[1];function s(){c(S.getUser())}function l(){S.logout(),c({user:null})}return Object(a.jsx)("div",{className:"App",children:Object(a.jsxs)(i.d,{children:[Object(a.jsx)(i.b,{exact:!0,path:"/login",children:Object(a.jsx)(T,{handleSignUpOrLogin:s})}),Object(a.jsx)(i.b,{exact:!0,path:"/signup",children:Object(a.jsx)(k,{handleSignUpOrLogin:s})}),S.getUser()?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(i.b,{exact:!0,path:"/",children:Object(a.jsx)(E,{user:n,handleLogout:l})}),Object(a.jsx)(i.b,{path:"/:username",children:Object(a.jsx)(B,{user:n,handleLogout:l})})]}):Object(a.jsx)(i.a,{to:"/login"})]})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(a.jsx)(C.a,{children:Object(a.jsx)(J,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[160,1,2]]]);
//# sourceMappingURL=main.84e4a181.chunk.js.map