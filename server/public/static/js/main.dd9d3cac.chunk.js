(this["webpackJsonpcard-game"]=this["webpackJsonpcard-game"]||[]).push([[0],{101:function(e,t,n){e.exports=n(133)},106:function(e,t,n){},107:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},108:function(e,t,n){},133:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(10),c=n.n(i),o=(n(106),n(8)),l=(n(107),n(27)),u=(n(108),n(49)),s=n(15),d=n(16),m=n(179),g="card";function f(){var e=Object(s.a)(["\n    width: 100%;\n    height: 80%;\n    img {\n      width: 100%;\n      height: 100%;\n      object-fit: contain;\n    }\n  "]);return f=function(){return e},e}function h(){var e=Object(s.a)(["\n    display: flex;\n    justify-content: space-between;\n    height: 10%;\n  "]);return h=function(){return e},e}function b(){var e=Object(s.a)(["\n    text-align: center;\n    height: 5%;\n    margin-bottom: 15px;\n  "]);return b=function(){return e},e}function p(){var e=Object(s.a)(["\n    margin: 0 auto;\n    width: 90%;\n    padding: 0 5%;\n    height: 250px;\n    background-color: rgba(240, 240, 240, 0.5);\n    /* border: 1px solid grey; */\n    box-sizing: content-box;\n    h3 {\n      font-size: 16px;\n    }\n  "]);return p=function(){return e},e}var v=function(e){var t=e.char,n=t.power,a=t.life,i=(t.maxLife,t.name),c=t.img,l=Object(m.a)({item:{type:g,idx:e.idx,char:e.char},collect:function(e){return{isDragging:!!e.isDragging()}}}),u=Object(o.a)(l,2),s=u[0].isDragging,v=u[1],j=d.a.div(p()),O=d.a.div(b()),E=d.a.div(h()),w=d.a.div(f());return r.a.createElement(j,{ref:v,style:{opacity:s?.5:1,fontSize:s?25:"initial",fontWeight:"bold",cursor:"move"}},r.a.createElement(O,null,r.a.createElement("h3",null,r.a.createElement("strong",null,i))),r.a.createElement(E,null,r.a.createElement("div",null,r.a.createElement("p",null,"Pow: ",n)),"maxLife",r.a.createElement("div",null,r.a.createElement("p",null,"HP: ",a))),r.a.createElement(w,null,r.a.createElement("img",{alt:i,src:c})))};function j(){var e=Object(s.a)(["\n    margin: 0 auto;\n    width: 90%;\n    padding: 0 5%;\n    height: 250px;\n    background-color: rgba(240, 240, 240, 0.5);\n    /* border: 1px solid grey; */\n    box-sizing: content-box;\n    h3 {\n      font-size: 16px;\n    }\n  "]);return j=function(){return e},e}var O=function(e){var t=Object(m.a)({item:{type:g,idx:e.idx},collect:function(e){return{isDragging:!!e.isDragging()}}}),n=Object(o.a)(t,2),a=n[0].isDragging,i=n[1],c=d.a.div(j());return r.a.createElement(c,{ref:i,style:{opacity:a?.5:1,fontSize:a?25:"initial",fontWeight:"bold",cursor:"move"}})},E=n(166),w=n(89),x=n(180);function y(){var e=Object(s.a)(["\n  width: 100%;\n  height: 250px;\n  background-color: paleturquoise;\n"]);return y=function(){return e},e}var k=d.a.div(y());var S=function(e){var t=Object(x.a)({accept:g,drop:function(t,n){e.children.props.empty?e.move(t.idx,e.idx):e.attack(t.idx,e.idx)},collect:function(e){return{isOver:!!e.isOver(),canDrop:!!e.canDrop()}}}),n=Object(o.a)(t,2),a=n[0],i=a.isOver,c=(a.isDragging,a.canDrop,a.item,n[1]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(k,{style:{backgroundColor:i?"yellow":"initial"},ref:c},e.children))},z=n(167),D=n(168),C=n(58),U=n(55),I=n(59),L=n(34),T=n(79),A=n(80),N=n.n(A),V=n(81),Z=n.n(V),q=n(82),F=n.n(q),M=function(){function e(t,n,a,r,i,c){Object(L.a)(this,e),this.id=t,this.name=n,this.img=a,this.power=r,this.maxLife=i,this.life=c,this._clashSound=new Audio(F.a)}return Object(T.a)(e,[{key:"_playSound",value:function(e){e.time=0,e.play()}},{key:"attack",value:function(e){e.life-=this.power,this._playSound(this._clashSound)}},{key:"defend",value:function(e){this.life-=e}}]),e}(),W=function(e){function t(){return Object(L.a)(this,t),Object(C.a)(this,Object(U.a)(t).call(this,"001","Midoriya Izuku",N.a,10,10,10))}return Object(I.a)(t,e),t}(M),$=function(e){function t(){return Object(L.a)(this,t),Object(C.a)(this,Object(U.a)(t).call(this,"001","Leena Inverse",Z.a,20,15,15))}return Object(I.a)(t,e),t}(M),B=[new W,new $,new W,new $,new W,new $],P=n(83),_=n.n(P),G=n(84),J=n.n(G);function R(){var e=Object(s.a)(["\n  height: 100%;\n  width: 100%;\n  background-image: url(",");\n  background-size: contain;\n  background-repeat: no-repeat;\n"]);return R=function(){return e},e}function H(){var e=Object(s.a)(["\n  width: 100px;\n  height: 160px;\n  margin: 0 10px;\n  margin-top: calc(100vh - 160px);\n"]);return H=function(){return e},e}var K=d.a.div(H()),Q=d.a.div(R(),J.a);var X=function(e){var t=e.drawCard;return r.a.createElement(K,null,r.a.createElement(Q,{onClick:t}))};function Y(){var e=Object(s.a)(["\n  width: 100%;\n  height: 100vh;\n  background-color: whitesmoke;\n  background-image: url(",");\n  background-size: cover;\n  display: flex;\n"]);return Y=function(){return e},e}var ee=d.a.div(Y(),_.a);var te=function(){var e=Object(a.useState)(Array(8).fill(null)),t=Object(o.a)(e,2),n=t[0],i=t[1],c=Object(a.useState)(null),l=Object(o.a)(c,2),s=l[0],d=l[1];Object(a.useEffect)((function(){!function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n.indexOf(null);if(-1!==t&&null!=e){var a=Object(u.a)(n);a.splice(t,1,e),d(null),i(a)}}(s)}),[s,n]);var m=function(e,t){return t.splice(e,1),t},g=function(e,t){if(e!==t){var a=Object(u.a)(n);a[e].attack(a[t]);var r=a.map((function(e){return null==e||e.life<=0?null:e}));i(r)}},f=function(e,t){if(e!==t){var a=Object(u.a)(n);a.splice(t,1,a[e]),a.splice(e,1,null),i(a)}};return r.a.createElement(E.a,{backend:w.a},r.a.createElement(ee,null,r.a.createElement(z.a,{style:{width:"100%"},noGutters:!1,className:"justify-content-around"},n.map((function(e,t){return r.a.createElement(D.a,{md:3},r.a.createElement(S,{move:f,attack:g,char:e,idx:t,key:t},null!=e?r.a.createElement(v,{char:e,idx:t}):r.a.createElement(O,{empty:!0,idx:t})))}))),r.a.createElement(X,{drawCard:function(){var e=Math.floor(Math.random()*B.length),t=B[e];m(e,B),d(t)}})))},ne=n(178),ae=n(169),re=n(86),ie=n.n(re),ce=function e(){var t=this;Object(L.a)(this,e),this.signUp=function(e){var n=e.user,a=e.password;return t.service.post("signup",{username:n,password:a}).then((function(e){return e.data})).catch((function(e){return console.log({err:e})}))},this.login=function(e){var n=e.user,a=e.password;return t.service.post("login",{username:n,password:a}).then((function(e){return e.data})).catch((function(e){return console.log({err:e})}))},this.getLoggedUser=function(){return t.service.get("/loggedin").then((function(e){return e.data})).catch((function(e){return console.log({err:e})}))},this.logout=function(){return t.service.post("/logout").then((function(e){return e.data})).catch((function(e){return console.log({err:e})}))},this.service=ie.a.create({baseURL:"https://ambarinos-card-game.herokuapp.com/auth",withCredentials:!0})},oe=new ce,le=Object(ae.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1),width:200}}}}));function ue(){var e=le(),t=Object(a.useState)(""),n=Object(o.a)(t,2),i=n[0],c=n[1],l=Object(a.useState)(""),u=Object(o.a)(l,2),s=u[0],d=u[1],m=Object(a.useState)(!0),g=Object(o.a)(m,2),f=g[0],h=g[1],b=Object(a.useState)(!0),p=Object(o.a)(b,2),v=p[0],j=p[1],O=Object(a.useState)(!0),E=Object(o.a)(O,2),w=E[0],x=E[1],y=function(e){var t=e.currentTarget,n=t.name,a=t.value;console.log(e,n,a);switch(n){case"user":/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(a)?(h(!1),c(a)):h(!0);break;case"password":/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(a)?(j(!1),d(a)):j(!0)}x(!(!f&&!v))};return r.a.createElement("form",{className:e.root,noValidate:!0,autoComplete:"on",onSubmit:function(e){e.preventDefault(),oe.signUp({user:i,password:s}),alert("Sending data ".concat(s))}},r.a.createElement("div",null,r.a.createElement(ne.a,{onChange:y,error:f,id:"filled-error",label:"user",name:"user",defaultValue:"E-mail",helperText:"Incorrect entry.",variant:"filled",required:!0}),r.a.createElement(ne.a,{onChange:y,error:v,id:"filled-error",label:"password",name:"password",defaultValue:"Password",type:"password",helperText:"Incorrect entry.",variant:"filled",required:!0})),r.a.createElement("button",{disabled:w},"Submit"))}var se=new ce,de=Object(ae.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1),width:200}}}}));function me(e){var t=de(),n=Object(a.useState)(""),i=Object(o.a)(n,2),c=i[0],l=i[1],u=Object(a.useState)(""),s=Object(o.a)(u,2),d=s[0],m=s[1],g=Object(a.useState)(!0),f=Object(o.a)(g,2),h=f[0],b=f[1],p=Object(a.useState)(!0),v=Object(o.a)(p,2),j=v[0],O=v[1],E=Object(a.useState)(!0),w=Object(o.a)(E,2),x=w[0],y=w[1],k=function(e){var t=e.currentTarget,n=t.name,a=t.value;console.log(e,n,a);switch(n){case"user":/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(a)?(b(!1),l(a)):b(!0);break;case"password":/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(a)?(O(!1),m(a)):O(!0)}y(!(!h&&!j))};return r.a.createElement("form",{className:t.root,noValidate:!0,autoComplete:"on",onSubmit:function(t){t.preventDefault(),se.login({user:c,password:d}).then((function(t){e.setUser(t),console.log(t),e.history.push("/")}))}},r.a.createElement("div",null,r.a.createElement(ne.a,{onChange:k,error:h,id:"filled-error",label:"user",name:"user",defaultValue:"E-mail",helperText:"Incorrect entry.",variant:"filled",required:!0}),r.a.createElement(ne.a,{onChange:k,error:j,id:"filled-error",label:"password",name:"password",defaultValue:"Password",type:"password",helperText:"Incorrect entry.",variant:"filled",required:!0})),r.a.createElement("button",{disabled:x},"Login"))}n(129);var ge=n(31),fe=n(173),he=n(174),be=n(176),pe=n(177),ve=n(175),je=n(87),Oe=n.n(je),Ee=Object(ae.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));function we(e){var t=Ee();return r.a.createElement("div",{className:t.root},r.a.createElement(fe.a,{position:"static"},r.a.createElement(he.a,null,r.a.createElement(ve.a,{edge:"start",className:t.menuButton,color:"inherit","aria-label":"menu"},r.a.createElement(Oe.a,null)),r.a.createElement(be.a,{variant:"h6",className:t.title},"News"),e.loggedInUser?r.a.createElement(pe.a,{color:"inherit"},"Welcome ",e.loggedInUser.username):r.a.createElement(r.a.Fragment,null,r.a.createElement(pe.a,{color:"inherit"},r.a.createElement(ge.b,{to:"/login"},"Login")),r.a.createElement(pe.a,{color:"inherit"},r.a.createElement(ge.b,{to:"/signup"},"Signup"))))))}var xe=new ce;var ye=function(e){var t=Object(a.useState)(!1),n=Object(o.a)(t,2),i=n[0],c=n[1],u=function(){return xe.getLoggedUser()};return Object(a.useEffect)((function(){0==i&&u().then((function(e){c(e||null)}))}),[i]),r.a.createElement(l.d,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(we,Object.assign({loggedInUser:i},e)),r.a.createElement(l.b,{path:"/signup",render:function(){return r.a.createElement(ue,Object.assign({},e,{setUser:u}))}}),r.a.createElement(l.b,{path:"/login",render:function(){return r.a.createElement(me,Object.assign({},e,{setUser:u}))}}),0==i?r.a.createElement("h3",null,"Trying to login"):null==i?r.a.createElement(l.a,{to:"/login"}):r.a.createElement(l.b,{exact:!0,path:"/",component:te})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(ge.a,null,r.a.createElement(l.b,{path:"/",component:ye})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},80:function(e,t,n){e.exports=n.p+"static/media/midoriya.8331c8eb.png"},81:function(e,t,n){e.exports=n.p+"static/media/leena.a98cce73.png"},82:function(e,t,n){e.exports=n.p+"static/media/clash.7bc064b6.wav"},83:function(e,t,n){e.exports=n.p+"static/media/wood-bg.23f4643b.jpg"},84:function(e,t,n){e.exports=n.p+"static/media/cover.509edcbe.png"}},[[101,1,2]]]);
//# sourceMappingURL=main.dd9d3cac.chunk.js.map