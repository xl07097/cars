(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{1299:function(e,t,n){"use strict";n.r(t);var r=n(60),s=n.n(r),u=n(0),a=n.n(u),o=n(82),i=n(682);t.default=function(e){var t=Object(o.c)();Object(u.useEffect)((function(){var e;t((e={page:1,size:100},function(t){Object(i.a)(e).then((function(e){if(200===e.code){var n=e.data.data;t({type:"fetch_list",list:void 0===n?[]:n})}}))}))}),[]);var n=Object(o.d)((function(e){return e.list}));return a.a.createElement(a.a.Fragment,null,s()(n).call(n,(function(e){return a.a.createElement("p",{key:e.id},e.username)})))}},650:function(e,t,n){"use strict";var r="";r=(window.location.hostname,"http://122.51.129.51:8080");var s={};s.BASE_URI=r+"/note",s.upload=s.BASE_URI+"/upload/uploadfile",s.userLogin="/user/login",s.getLoginUserInfo="/user/loginUserInfo",s.userLogout="/user/logout",s.getUser="/user/checkuser",s.userList="/user/userList",s.userStatus="/user/changeUserStatus",s.getAllMenu="/menu/getMenu",t.a=s},655:function(e,t,n){"use strict";var r=n(674),s=n.n(r),u=n(650);let a=s.a.create({baseURL:u.a.BASE_URI,timeout:1e4,headers:{"Content-Type":"application/json"}});a.interceptors.request.use(e=>{let t=sessionStorage.getItem("token");return t&&(e.headers.token=t),e},e=>{Promise.reject(e)}),a.interceptors.response.use(e=>{return e.data},e=>{Promise.reject(e)}),t.a=a},682:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(655),s=n(650);function u(e){return r.a.post(s.a.userList,e)}}}]);