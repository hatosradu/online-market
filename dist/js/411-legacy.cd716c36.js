"use strict";(self["webpackChunke_store"]=self["webpackChunke_store"]||[]).push([[411],{3237:function(t,e,i){i.d(e,{Z:function(){return l}});var s=i(4367),n=(i(9653),i(4944),i(3792),i(5648)),r=i(4981),a=i(6505),o=i(3325),l=(0,o.Z)(r.Z,a.Z,n.Z).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return(0,s.Z)((0,s.Z)({"v-card":!0},a.Z.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},n.Z.options.computed.classes.call(this))},styles:function(){var t=(0,s.Z)({},n.Z.options.computed.styles.call(this));return this.img&&(t.background='url("'.concat(this.img,'") center center / cover no-repeat')),t}},methods:{genProgress:function(){var t=r.Z.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),i=e.tag,s=e.data;return s.style=this.styles,this.isClickable&&(s.attrs=s.attrs||{},s.attrs.tabindex=0),t(i,this.setBackgroundColor(this.color,s),[this.genProgress(),this.$slots.default])}})},6816:function(t,e,i){i.d(e,{Z:function(){return a}});var s=i(2032),n=i(4367),r=(i(4944),i(3792),i(4553),i(561),i(3385)),a=r.Z.extend().extend({name:"v-list",provide:function(){return{isInList:!0,list:this}},inject:{isInMenu:{default:!1},isInNav:{default:!1}},props:{dense:Boolean,disabled:Boolean,expand:Boolean,flat:Boolean,nav:Boolean,rounded:Boolean,subheader:Boolean,threeLine:Boolean,twoLine:Boolean},data:function(){return{groups:[]}},computed:{classes:function(){return(0,n.Z)((0,n.Z)({},r.Z.options.computed.classes.call(this)),{},{"v-list--dense":this.dense,"v-list--disabled":this.disabled,"v-list--flat":this.flat,"v-list--nav":this.nav,"v-list--rounded":this.rounded,"v-list--subheader":this.subheader,"v-list--two-line":this.twoLine,"v-list--three-line":this.threeLine})}},methods:{register:function(t){this.groups.push(t)},unregister:function(t){var e=this.groups.findIndex((function(e){return e._uid===t._uid}));e>-1&&this.groups.splice(e,1)},listClick:function(t){if(!this.expand){var e,i=(0,s.Z)(this.groups);try{for(i.s();!(e=i.n()).done;){var n=e.value;n.toggle(t)}}catch(r){i.e(r)}finally{i.f()}}}},render:function(t){var e={staticClass:"v-list",class:this.classes,style:this.styles,attrs:(0,n.Z)({role:this.isInNav||this.isInMenu?void 0:"list"},this.attrs$)};return t(this.tag,this.setBackgroundColor(this.color,e),[this.$slots.default])}})},7620:function(t,e,i){i.d(e,{Z:function(){return p}});var s=i(4367),n=i(6952),r=i(6505),a=i(7352),o=i(8085),l=i(2936),c=i(6286),u=i(4589),d=i(1824),h=i(3325),v=(0,h.Z)(n.Z,r.Z,o.Z,(0,a.d)("listItemGroup"),(0,l.d)("inputValue")),p=v.extend().extend({name:"v-list-item",directives:{Ripple:c.Z},inject:{isInGroup:{default:!1},isInList:{default:!1},isInMenu:{default:!1},isInNav:{default:!1}},inheritAttrs:!1,props:{activeClass:{type:String,default:function(){return this.listItemGroup?this.listItemGroup.activeClass:""}},dense:Boolean,inactive:Boolean,link:Boolean,selectable:{type:Boolean},tag:{type:String,default:"div"},threeLine:Boolean,twoLine:Boolean,value:null},data:function(){return{proxyClass:"v-list-item--active"}},computed:{classes:function(){return(0,s.Z)((0,s.Z)({"v-list-item":!0},r.Z.options.computed.classes.call(this)),{},{"v-list-item--dense":this.dense,"v-list-item--disabled":this.disabled,"v-list-item--link":this.isClickable&&!this.inactive,"v-list-item--selectable":this.selectable,"v-list-item--three-line":this.threeLine,"v-list-item--two-line":this.twoLine},this.themeClasses)},isClickable:function(){return Boolean(r.Z.options.computed.isClickable.call(this)||this.listItemGroup)}},created:function(){this.$attrs.hasOwnProperty("avatar")&&(0,d.Jk)("avatar",this)},methods:{click:function(t){t.detail&&this.$el.blur(),this.$emit("click",t),this.to||this.toggle()},genAttrs:function(){var t=(0,s.Z)({"aria-disabled":!!this.disabled||void 0,tabindex:this.isClickable&&!this.disabled?0:-1},this.$attrs);return this.$attrs.hasOwnProperty("role")||this.isInNav||(this.isInGroup?(t.role="option",t["aria-selected"]=String(this.isActive)):this.isInMenu?(t.role=this.isClickable?"menuitem":void 0,t.id=t.id||"list-item-".concat(this._uid)):this.isInList&&(t.role="listitem")),t},toggle:function(){this.to&&void 0===this.inputValue&&(this.isActive=!this.isActive),this.$emit("change")}},render:function(t){var e=this,i=this.generateRouteLink(),n=i.tag,r=i.data;r.attrs=(0,s.Z)((0,s.Z)({},r.attrs),this.genAttrs()),r[this.to?"nativeOn":"on"]=(0,s.Z)((0,s.Z)({},r[this.to?"nativeOn":"on"]),{},{keydown:function(t){t.keyCode===u.Do.enter&&e.click(t),e.$emit("keydown",t)}}),this.inactive&&(n="div"),this.inactive&&this.to&&(r.on=r.nativeOn,delete r.nativeOn);var a=this.$scopedSlots.default?this.$scopedSlots.default({active:this.isActive,toggle:this.toggle}):this.$slots.default;return t(n,this.isActive?this.setTextColor(this.color,r):r,a)}})},411:function(t,e,i){i.r(e),i.d(e,{default:function(){return B}});var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{attrs:{fuild:""}},[i("v-row",{attrs:{"no-gutters":""}},[i("v-col",{attrs:{cols:"12",md:"7",sm:"12"}},[i("v-list",[t._l(t.products,(function(e){return[i("v-list-item",[i("v-card",{staticClass:"flex-grow-1"},[i("v-row",[i("v-col",{attrs:{cols:"4"}},[i("v-img",{staticClass:"cartImage",attrs:{src:e.presentationImage}})],1),i("v-col",{staticClass:"d-flex flex-column",attrs:{cols:"8"}},[i("div",{attrs:{cols:"12"}},[t._v(" "+t._s(e.name)+" ")]),i("div",{staticClass:"flex-grow-1",attrs:{cols:"12"}},[i("v-text-field",{staticStyle:{"font-size":"2em",margin:"auto"},attrs:{"prepend-icon":"mdi-minus",type:"number","append-outer-icon":"mdi-plus","single-line":""},on:{input:function(e){return t.onProductInputChanged()},"click:append-outer":function(i){return t.updateQuantity(e.id,1)},"click:prepend":function(i){return t.updateQuantity(e.id,-1)}},model:{value:e.orderedQuantity,callback:function(i){t.$set(e,"orderedQuantity",i)},expression:"item.orderedQuantity"}})],1)]),i("v-col",{attrs:{cols:"12"}},[i("v-divider")],1),i("v-col",{staticClass:"d-flex flex-row",staticStyle:{"padding-top":"0px"},attrs:{cols:"12"}},[i("v-btn",{attrs:{icon:"",large:"",color:"red"},on:{click:function(i){return t.onRemoveProduct(e.id,e.name)}}},[i("v-icon",[t._v("mdi-delete")])],1),i("v-spacer"),i("div",{staticClass:"card-product-price"},[t._v(" "+t._s(Math.round(e.orderedQuantity*e.price*100)/100)+" $")])],1)],1)],1)],1)]}))],2)],1),i("v-col",{staticClass:"col-1"}),i("v-col",{staticClass:"d-flex flex-column",attrs:{cols:"12",md:"4",sm:"12"}},[i("h3",{staticClass:"py-2"},[t._v("Order")]),i("v-row",{staticClass:"align-content-start",attrs:{"no-gutters":""}},[i("v-col",{attrs:{cols:"6"}},[t._v("Total")]),i("v-col",{attrs:{cols:"6"}},[t._v(t._s(t.totalPrice)+" $")]),i("v-col",{attrs:{cols:"6"}},[t._v("Transport")]),i("v-col",{attrs:{cols:"6"}},[i("span",[t._v("FREE")]),i("v-icon",[t._v("mdi-truck")])],1),i("v-col",{staticClass:"pt-4",attrs:{cols:"12"}},[i("v-btn",{attrs:{tile:"",color:"success",block:"",loading:t.loading,disabled:t.loading},on:{click:function(e){return t.onFinishOrder()}}},[t._v(" Finish Order ")])],1)],1)],1)],1)],1)},n=[],r=i(7906),a=i(6198),o=i(2032),l=(i(9653),i(1539),i(8071)),c=i(5873),u={name:"CartView",data:function(){return{products:[],totalPrice:0,loading:!1}},created:function(){this.getProducts()},methods:{getProducts:function(){this.products=c.y.getCart(),this.updateTotalPrice()},updateQuantity:function(t,e){var i,s=Number(e),n=(0,o.Z)(this.products);try{for(n.s();!(i=n.n()).done;){var r=i.value;r.id===t&&(r.orderedQuantity+=s)}}catch(a){n.e(a)}finally{n.f()}c.y.setCart(this.products),this.updateTotalPrice()},updateTotalPrice:function(){var t,e=0,i=(0,o.Z)(this.products);try{for(i.s();!(t=i.n()).done;){var s=t.value;e+=s.price*s.orderedQuantity}}catch(n){i.e(n)}finally{i.f()}this.totalPrice=Math.round(100*e)/100},onProductInputChanged:function(){var t,e=(0,o.Z)(this.products);try{for(e.s();!(t=e.n()).done;){var i=t.value;i.orderedQuantity=Number(i.orderedQuantity)}}catch(s){e.e(s)}finally{e.f()}this.updateTotalPrice(),c.y.setCart(this.products)},onRemoveProduct:function(t,e){confirm("Are you sure you want to remove ".concat(e," from your cart list?"))&&(c.y.removeProductFromCart(t),this.getProducts())},onFinishOrder:function(){var t=this;return(0,a.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,t.validateOrder();case 3:if(!e.sent){e.next=6;break}Array.prototype.forEach.call(t.products,function(){var e=(0,a.Z)((0,r.Z)().mark((function e(i){return(0,r.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log({prod:i}),e.next=3,l._.updateProductQuantityOnStock(i.id,i.orderedQuantity);case 3:if(e.sent){e.next=5;break}console.log("Something went wrong with the order");case 5:c.y.removeProductFromCart(i.id),t.getProducts();case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),t.redirect();case 6:t.loading=!1;case 7:case"end":return e.stop()}}),e)})))()},validateOrder:function(){var t=this;return(0,a.Z)((0,r.Z)().mark((function e(){var i,s,n,a;return(0,r.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:i=(0,o.Z)(t.products),e.prev=1,i.s();case 3:if((s=i.n()).done){e.next=12;break}return n=s.value,e.next=7,l._.getProduct(n.id);case 7:if(a=e.sent,!(a.quantityOnStock<n.orderedQuantity)){e.next=10;break}return e.abrupt("return",!1);case 10:e.next=3;break;case 12:e.next=17;break;case 14:e.prev=14,e.t0=e["catch"](1),i.e(e.t0);case 17:return e.prev=17,i.f(),e.finish(17);case 20:return e.abrupt("return",!0);case 21:case"end":return e.stop()}}),e,null,[[1,14,17,20]])})))()},redirect:function(){var t=this;this.$emit("showSnackbarMessage","info"," Order placed. Redirecting to main page."),setTimeout((function(){t.$router.push("/"),t.$emit("updateCartCount")}),3e3)}}},d=u,h=i(1001),v=i(3453),p=i.n(v),f=i(680),m=i(3237),g=i(2102),Z=i(9846),y=i(1418),k=i(6428),b=i(7047),C=i(6816),x=i(7620),w=i(2877),I=i(9762),_=i(5978),P=(0,h.Z)(d,s,n,!1,null,"7cda2558",null),B=P.exports;p()(P,{VBtn:f.Z,VCard:m.Z,VCol:g.Z,VContainer:Z.Z,VDivider:y.Z,VIcon:k.Z,VImg:b.Z,VList:C.Z,VListItem:x.Z,VRow:w.Z,VSpacer:I.Z,VTextField:_.Z})}}]);
//# sourceMappingURL=411-legacy.cd716c36.js.map