(function(){"use strict";var t={4985:function(t,n,e){e(6992),e(8674),e(9601),e(7727);var r=e(144),o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-app",[e("v-app-bar",{attrs:{app:"",color:"white",dense:""}},[e("v-toolbar-title",{on:{click:function(n){return n.stopPropagation(),t.$router.push("/")}}},[t._v("Online Market")]),e("v-spacer"),e("v-btn",{staticClass:"mx-2",attrs:{icon:""},on:{click:function(n){return t.onOpenCart()}}},[e("v-badge",{attrs:{content:t.cartProductsCount,value:t.cartProductsCount,color:"green",overlap:""}},[e("v-icon",[t._v("mdi-cart")])],1)],1),e("v-btn",{staticClass:"mx-2",attrs:{icon:""},on:{click:function(n){return n.stopPropagation(),t.$router.push("/admin")}}},[e("v-icon",[t._v("mdi-cog")])],1)],1),e("v-main",[e("router-view",{on:{updateCartCount:t.updateCartCount,showSnackbarMessage:t.showSnackbarMessage}})],1),e("v-snackbar",{ref:"snackBarRef",attrs:{color:t.snackbar.color,rounded:"pill"},scopedSlots:t._u([{key:"action",fn:function(n){var r=n.attrs;return[e("v-btn",t._b({attrs:{text:""},on:{click:function(n){t.snackbar.show=!1}}},"v-btn",r,!1),[t._v(" Close ")])]}}]),model:{value:t.snackbar.show,callback:function(n){t.$set(t.snackbar,"show",n)},expression:"snackbar.show"}},[e("div",{domProps:{innerHTML:t._s(t.snackbar.text)}})])],1)},a=[],i=(e(9653),e(5873)),u={name:"App",data:function(){return{cartProductsCount:"",snackbar:{show:!1,text:"",color:null}}},created:function(){this.getCartProductsCount()},methods:{getCartProductsCount:function(){var t=i.y.getCart();t&&t.length>0?this.cartProductsCount=t.length:this.cartProductsCount=0},onOpenCart:function(){Number(this.cartProductsCount)>0?this.$router.push("/cart"):this.showSnackbarMessage("info","Your cart is empty")},updateCartCount:function(){this.getCartProductsCount()},showSnackbarMessage:function(t,n){this.snackbar.color="info"===t?"green":"red",this.snackbar.text=n,this.snackbar.show=!0}}},c=u,s=e(1001),f=e(3453),l=e.n(f),d=e(7524),p=e(3343),h=e(3099),v=e(680),b=e(6428),m=e(7877),g=e(3202),C=e(9762),y=e(7921),k=(0,s.Z)(c,o,a,!1,null,null,null),w=k.exports;l()(k,{VApp:d.Z,VAppBar:p.Z,VBadge:h.Z,VBtn:v.Z,VIcon:b.Z,VMain:m.Z,VSnackbar:g.Z,VSpacer:C.Z,VToolbarTitle:y.qW});e(1539),e(8783),e(3948);var P=e(8345);r.Z.use(P.Z);var O=[{path:"/",name:"products",component:function(){return Promise.all([e.e(891),e.e(99),e.e(568)]).then(e.bind(e,2568))}},{path:"/product/:id",name:"ProductView",props:!0,component:function(){return Promise.all([e.e(891),e.e(866)]).then(e.bind(e,8866))}},{path:"/admin",name:"AdminView",component:function(){return Promise.all([e.e(891),e.e(99),e.e(461)]).then(e.bind(e,8461))}},{path:"/cart",name:"CartView",component:function(){return Promise.all([e.e(891),e.e(34)]).then(e.bind(e,4034))}}],S=new P.Z({base:"/online-market/",routes:O}),Z=S,_=e(9132);r.Z.use(_.Z);var T=new _.Z({});r.Z.config.productionTip=!1,new r.Z({router:Z,vuetify:T,render:function(t){return t(w)}}).$mount("#app")},5873:function(t,n,e){e.d(n,{y:function(){return a}});var r=e(2032),o=(e(8862),e(1539),e(7327),"cart-products"),a={getCart:function(){var t=localStorage.getItem(o);return t?JSON.parse(t):[]},setCart:function(t){t&&localStorage.setItem(o,JSON.stringify(t))},addProductToCart:function(t){var n=t.product,e=t.quantity,o=this.getCart();if(o&&o.length>0&&o.some((function(t){return t.id===n.id}))){var a,i=(0,r.Z)(o);try{for(i.s();!(a=i.n()).done;){var u=a.value;u.id===n.id&&(u.orderedQuantity+=e)}}catch(c){i.e(c)}finally{i.f()}}else n.orderedQuantity=e,o.push(n);this.setCart(o)},removeProductFromCart:function(t){var n=this.getCart();n&&(n=n.filter((function(n){return n.id!=t}))),this.setCart(n)}}}},n={};function e(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={exports:{}};return t[r](a,a.exports,e),a.exports}e.m=t,function(){var t=[];e.O=function(n,r,o,a){if(!r){var i=1/0;for(f=0;f<t.length;f++){r=t[f][0],o=t[f][1],a=t[f][2];for(var u=!0,c=0;c<r.length;c++)(!1&a||i>=a)&&Object.keys(e.O).every((function(t){return e.O[t](r[c])}))?r.splice(c--,1):(u=!1,a<i&&(i=a));if(u){t.splice(f--,1);var s=o();void 0!==s&&(n=s)}}return n}a=a||0;for(var f=t.length;f>0&&t[f-1][2]>a;f--)t[f]=t[f-1];t[f]=[r,o,a]}}(),function(){e.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(n,{a:n}),n}}(),function(){e.d=function(t,n){for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})}}(),function(){e.f={},e.e=function(t){return Promise.all(Object.keys(e.f).reduce((function(n,r){return e.f[r](t,n),n}),[]))}}(),function(){e.u=function(t){return"js/"+t+"-legacy."+{34:"ce2faa13",99:"97971bbe",461:"069cfde9",568:"3c2a3740",866:"9dc21019",891:"0dbaa1b2"}[t]+".js"}}(),function(){e.miniCssF=function(t){return"css/"+t+"."+{34:"0a77dc15",99:"0b13e7ed",461:"e8e0758b",568:"dbff2596",866:"0bddadf6",891:"badd252a"}[t]+".css"}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){var t={},n="e-store:";e.l=function(r,o,a,i){if(t[r])t[r].push(o);else{var u,c;if(void 0!==a)for(var s=document.getElementsByTagName("script"),f=0;f<s.length;f++){var l=s[f];if(l.getAttribute("src")==r||l.getAttribute("data-webpack")==n+a){u=l;break}}u||(c=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,e.nc&&u.setAttribute("nonce",e.nc),u.setAttribute("data-webpack",n+a),u.src=r),t[r]=[o];var d=function(n,e){u.onerror=u.onload=null,clearTimeout(p);var o=t[r];if(delete t[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(t){return t(e)})),n)return n(e)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=d.bind(null,u.onerror),u.onload=d.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),function(){e.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){e.p="/online-market/"}(),function(){var t=function(t,n,e,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var a=function(a){if(o.onerror=o.onload=null,"load"===a.type)e();else{var i=a&&("load"===a.type?"missing":a.type),u=a&&a.target&&a.target.href||n,c=new Error("Loading CSS chunk "+t+" failed.\n("+u+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=u,o.parentNode.removeChild(o),r(c)}};return o.onerror=o.onload=a,o.href=n,document.head.appendChild(o),o},n=function(t,n){for(var e=document.getElementsByTagName("link"),r=0;r<e.length;r++){var o=e[r],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===t||a===n))return o}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){o=i[r],a=o.getAttribute("data-href");if(a===t||a===n)return o}},r=function(r){return new Promise((function(o,a){var i=e.miniCssF(r),u=e.p+i;if(n(i,u))return o();t(r,u,o,a)}))},o={143:0};e.f.miniCss=function(t,n){var e={34:1,99:1,461:1,568:1,866:1,891:1};o[t]?n.push(o[t]):0!==o[t]&&e[t]&&n.push(o[t]=r(t).then((function(){o[t]=0}),(function(n){throw delete o[t],n})))}}(),function(){var t={143:0};e.f.j=function(n,r){var o=e.o(t,n)?t[n]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise((function(e,r){o=t[n]=[e,r]}));r.push(o[2]=a);var i=e.p+e.u(n),u=new Error,c=function(r){if(e.o(t,n)&&(o=t[n],0!==o&&(t[n]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;u.message="Loading chunk "+n+" failed.\n("+a+": "+i+")",u.name="ChunkLoadError",u.type=a,u.request=i,o[1](u)}};e.l(i,c,"chunk-"+n,n)}},e.O.j=function(n){return 0===t[n]};var n=function(n,r){var o,a,i=r[0],u=r[1],c=r[2],s=0;if(i.some((function(n){return 0!==t[n]}))){for(o in u)e.o(u,o)&&(e.m[o]=u[o]);if(c)var f=c(e)}for(n&&n(r);s<i.length;s++)a=i[s],e.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return e.O(f)},r=self["webpackChunke_store"]=self["webpackChunke_store"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=e.O(void 0,[998],(function(){return e(4985)}));r=e.O(r)})();
//# sourceMappingURL=app-legacy.69bfb8ba.js.map