var p=Object.defineProperty,D=Object.defineProperties;var F=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var i=(t,e,o)=>e in t?p(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,r=(t,e)=>{for(var o in e||(e={}))h.call(e,o)&&i(t,o,e[o]);if(c)for(var o of c(e))C.call(e,o)&&i(t,o,e[o]);return t},l=(t,e)=>D(t,F(e));import{y as E,L as y,r as u,I as _,o as x,D as B,S as n,q as s,G as I,C as a,H as J,J as d}from"./index.05764e95.js";import{u as w}from"./hooks.04382a5a.js";const g={class:"card-header"},k=d(" \u5F53\u524D\u89D2\u8272\uFF1A "),b={style:{"font-size":"26px"}},A=s("p",{style:{color:"#ffa500"}}," \u67E5\u770B\u5DE6\u4FA7\u83DC\u5355\u53D8\u5316(\u7CFB\u7EDF\u7BA1\u7406)\uFF0C\u6A21\u62DF\u540E\u53F0\u6839\u636E\u4E0D\u540C\u89D2\u8272\u8FD4\u56DE\u5BF9\u5E94\u8DEF\u7531 ",-1),U=d("\u5207\u6362\u89D2\u8272"),v={name:"permissionPage"},V=E(l(r({},v),{setup(t){let e=y(u.getItem("info").username);function o(){a(e)==="admin"?(u.setItem("info",{username:"test",accessToken:"eyJhbGciOiJIUzUxMiJ9.test"}),window.location.reload()):(u.setItem("info",{username:"admin",accessToken:"eyJhbGciOiJIUzUxMiJ9.admin"}),window.location.reload())}return(z,G)=>{const f=_("el-button"),m=_("el-card");return x(),B(m,null,{header:n(()=>[s("div",g,[s("span",null,[k,s("span",b,I(a(e)),1),A])])]),default:n(()=>[J(f,{type:"primary",onClick:o,icon:a(w)("user",{color:"#fff"})},{default:n(()=>[U]),_:1},8,["icon"])]),_:1})}}}));export{V as default};
