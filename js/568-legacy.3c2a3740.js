"use strict";(self["webpackChunke_store"]=self["webpackChunke_store"]||[]).push([[568],{2568:function(t,e,r){r.r(e),r.d(e,{default:function(){return $}});var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{fluid:""}},[r("v-data-iterator",{attrs:{items:t.products,"hide-default-footer":""},scopedSlots:t._u([{key:"default",fn:function(e){return[r("v-row",t._l(e.items,(function(e){return r("v-col",{key:e.id,staticClass:"d-flex justify-center align-stretch pa-4",attrs:{cols:"12",sm:"4",md:"3",lg:"2"}},[r("v-hover",{attrs:{"open-delay":"100"},scopedSlots:t._u([{key:"default",fn:function(s){var o=s.hover;return[r("v-card",{staticClass:" text-align-center",class:{"on-hover":o},attrs:{elevation:o?16:2},on:{click:function(r){return r.stopPropagation(),t.onProductClick(e)}}},[r("v-img",{staticClass:"product-image",attrs:{src:e.presentationImage}}),r("v-card-title",{staticClass:"subheading justify-center font-weight-bold"},[r("p",{staticStyle:{"word-break":"keep-all",overflow:"hidden","text-overflow":"ellipsis",height:"60px"}},[t._v(" "+t._s(e.name))])])],1)]}}],null,!0)})],1)})),1)]}}])})],1)},o=[],n=r(7906),a=r(6198),i=r(6539),u={name:"ProductsView",data:function(){return{products:[]}},created:function(){this.getProducts()},methods:{getProducts:function(){var t=this;return(0,a.Z)((0,n.Z)().mark((function e(){return(0,n.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,i._.getProducts();case 2:t.products=e.sent;case 3:case"end":return e.stop()}}),e)})))()},onProductClick:function(t){this.$router.push("/product/"+t.id)}}},l=u,c=r(1001),d=r(3453),v=r.n(d),h=r(3237),f=r(4589),p=(0,f.Ji)("v-card__actions"),g=(0,f.Ji)("v-card__subtitle"),m=(0,f.Ji)("v-card__text"),_=(0,f.Ji)("v-card__title"),y=(h.Z,r(2102)),Z=r(9846),k=r(3075),w=r(4561),C=r(2936),b=r(3325),x=r(1824),V=(0,b.Z)(w.Z,C.Z).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){return this.$scopedSlots.default||void 0!==this.value?(this.$scopedSlots.default&&(t=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(t)&&1===t.length&&(t=t[0]),t&&!Array.isArray(t)&&t.tag?(this.disabled||(t.data=t.data||{},this._g(t.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),t):((0,x.Kd)("v-hover should only contain a single element",this),t)):((0,x.Kd)("v-hover is missing a default scopedSlot or bound value",this),null);var t}}),P=r(7047),S=r(2877),A=(0,c.Z)(l,s,o,!1,null,"8dd41df6",null),$=A.exports;v()(A,{VCard:h.Z,VCardTitle:_,VCol:y.Z,VContainer:Z.Z,VDataIterator:k.Z,VHover:V,VImg:P.Z,VRow:S.Z})}}]);
//# sourceMappingURL=568-legacy.3c2a3740.js.map