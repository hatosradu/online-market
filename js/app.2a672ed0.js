(function(){"use strict";var t={3492:function(t,e,n){var r=n(144),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-app-bar",{attrs:{app:"",height:"60px"}},[n("v-toolbar-title",{on:{click:function(e){return e.stopPropagation(),t.$router.push("/")}}},[t._v("Online Market")]),n("v-spacer"),n("div",{staticClass:"hidden-sm-and-down"},[n("v-btn",{attrs:{text:"",to:"/"}},[t._v("Home")]),n("v-btn",{attrs:{text:"",to:"/products"}},[t._v("Products")]),n("v-btn",{attrs:{text:"",to:"/about"}},[t._v("About Us")]),n("v-btn",{attrs:{text:""}},[t._v("Admin")])],1),n("div",{staticClass:"hidden-md-and-up"},[n("v-menu",{scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[n("v-btn",t._g({attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}},r),[t._v(" Menu ")])]}}])},[n("v-app-barpnav-icon")],1)],1)],1),n("v-navigation-drawer",{attrs:{absolute:"",right:"",temporary:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",{attrs:{nav:"",dense:""}},[n("v-list-item-group",{attrs:{"active-class":"deep-purple--text text--accent-4"},model:{value:t.group,callback:function(e){t.group=e},expression:"group"}},t._l(t.menuItems,(function(e,r){return n("v-list-item",{key:r,attrs:{to:e.to}},[n("v-list-item-title",{domProps:{textContent:t._s(e.name)}})],1)})),1)],1),n("v-spacer")],1),n("v-main",[n("router-view")],1)],1)},a=[],i=n(2079),u={name:"App",data:()=>({menuItems:[{to:"/",name:"Home"},{to:"/products",name:"Products"},{to:"/about",name:"About Us"}],drawer:!1,group:0}),watch:{group(){this.drawer=!1}},mounted(){i.e.init()}},s=u,c=n(1001),l=n(3453),f=n.n(l),d=n(7524),p=n(8320),v=n(680),m=n(6816),h=n(7620),b=n(3249),g=n(6944),w=n(7877),y=n(3649),k=n(9194),_=n(9762),C=n(7921),Z=(0,c.Z)(s,o,a,!1,null,null,null),x=Z.exports;f()(Z,{VApp:d.Z,VAppBar:p.Z,VBtn:v.Z,VList:m.Z,VListItem:h.Z,VListItemGroup:b.Z,VListItemTitle:g.V9,VMain:w.Z,VMenu:y.Z,VNavigationDrawer:k.Z,VSpacer:_.Z,VToolbarTitle:C.qW});var O=n(8345),V=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",[n("v-col",{staticClass:"col-3"},[t._v(" asdasd ")]),n("v-col",{staticClass:"col-9"},[n("v-row",[n("v-col",{staticClass:"col-12"},[t._v(" 1 ")]),n("v-col",{staticClass:"col-12"},[t._v(" 2 ")]),n("v-col",{staticClass:"col-12"},[t._v(" 3 ")])],1)],1)],1)},A=[],j={name:"HomeView",components:{}},E=j,T=n(2102),P=n(2877),S=(0,c.Z)(E,V,A,!1,null,null,null),L=S.exports;f()(S,{VCol:T.Z,VRow:P.Z}),r.Z.use(O.Z);const N=[{path:"/",name:"home",component:L},{path:"/about",name:"about",component:()=>n.e(443).then(n.bind(n,8400))},{path:"/products",name:"products",component:()=>n.e(443).then(n.bind(n,374))}],M=new O.Z({routes:N});var I=M,B=n(9132);r.Z.use(B.Z);var F=new B.Z({});r.Z.config.productionTip=!1,new r.Z({router:I,vuetify:F,render:t=>t(x)}).$mount("#app")},2079:function(t,e,n){n.d(e,{e:function(){return o}});const r="https://online-market-a5a4b-default-rtdb.europe-west1.firebasedatabase.app/";let o={state:null,async init(){let t=r+".json",e=await fetch(t),n=await e.json();this.state=n,console.log(this.state)}}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={exports:{}};return t[r](a,a.exports,n),a.exports}n.m=t,function(){var t=[];n.O=function(e,r,o,a){if(!r){var i=1/0;for(l=0;l<t.length;l++){r=t[l][0],o=t[l][1],a=t[l][2];for(var u=!0,s=0;s<r.length;s++)(!1&a||i>=a)&&Object.keys(n.O).every((function(t){return n.O[t](r[s])}))?r.splice(s--,1):(u=!1,a<i&&(i=a));if(u){t.splice(l--,1);var c=o();void 0!==c&&(e=c)}}return e}a=a||0;for(var l=t.length;l>0&&t[l-1][2]>a;l--)t[l]=t[l-1];t[l]=[r,o,a]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,r){return n.f[r](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/about.41e5ab28.js"}}(),function(){n.miniCssF=function(t){return"css/about.ef36c1bf.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="e-market:";n.l=function(r,o,a,i){if(t[r])t[r].push(o);else{var u,s;if(void 0!==a)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var f=c[l];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==e+a){u=f;break}}u||(s=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",e+a),u.src=r),t[r]=[o];var d=function(e,n){u.onerror=u.onload=null,clearTimeout(p);var o=t[r];if(delete t[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(t){return t(n)})),e)return e(n)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=d.bind(null,u.onerror),u.onload=d.bind(null,u.onload),s&&document.head.appendChild(u)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/online-market/"}(),function(){var t=function(t,e,n,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var a=function(a){if(o.onerror=o.onload=null,"load"===a.type)n();else{var i=a&&("load"===a.type?"missing":a.type),u=a&&a.target&&a.target.href||e,s=new Error("Loading CSS chunk "+t+" failed.\n("+u+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=i,s.request=u,o.parentNode.removeChild(o),r(s)}};return o.onerror=o.onload=a,o.href=e,document.head.appendChild(o),o},e=function(t,e){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===t||a===e))return o}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){o=i[r],a=o.getAttribute("data-href");if(a===t||a===e)return o}},r=function(r){return new Promise((function(o,a){var i=n.miniCssF(r),u=n.p+i;if(e(i,u))return o();t(r,u,o,a)}))},o={143:0};n.f.miniCss=function(t,e){var n={443:1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=r(t).then((function(){o[t]=0}),(function(e){throw delete o[t],e})))}}(),function(){var t={143:0};n.f.j=function(e,r){var o=n.o(t,e)?t[e]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise((function(n,r){o=t[e]=[n,r]}));r.push(o[2]=a);var i=n.p+n.u(e),u=new Error,s=function(r){if(n.o(t,e)&&(o=t[e],0!==o&&(t[e]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;u.message="Loading chunk "+e+" failed.\n("+a+": "+i+")",u.name="ChunkLoadError",u.type=a,u.request=i,o[1](u)}};n.l(i,s,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,r){var o,a,i=r[0],u=r[1],s=r[2],c=0;if(i.some((function(e){return 0!==t[e]}))){for(o in u)n.o(u,o)&&(n.m[o]=u[o]);if(s)var l=s(n)}for(e&&e(r);c<i.length;c++)a=i[c],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(l)},r=self["webpackChunke_market"]=self["webpackChunke_market"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(3492)}));r=n.O(r)})();
//# sourceMappingURL=app.2a672ed0.js.map