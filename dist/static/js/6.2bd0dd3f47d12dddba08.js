webpackJsonp([6],{"Mk+e":function(e,i,s){"use strict";var p={name:"IncreaseNumber",props:{value:{type:Number,default:0}},data:function(){return{currentValue:this.value}},watch:{currentValue:function(e){this.$emit("input",e)}},methods:{reduction:function(){this.currentValue>0&&this.currentValue--},increase:function(){this.currentValue>=0&&this.currentValue++}}},t={render:function(){var e=this,i=e.$createElement,s=e._self._c||i;return s("div",{staticClass:"increase-number flex-row-wrap-space_around-center"},[s("button",{staticClass:"reduction",on:{click:e.reduction}},[e._v("-")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model.number",value:e.currentValue,expression:"currentValue",modifiers:{number:!0}}],attrs:{type:"text"},domProps:{value:e.currentValue},on:{input:function(i){i.target.composing||(e.currentValue=e._n(i.target.value))},blur:function(i){return e.$forceUpdate()}}}),e._v(" "),s("button",{staticClass:"increase",on:{click:e.increase}},[e._v("+")])])},staticRenderFns:[]};var r=s("VU/8")(p,t,!1,function(e){s("vY0o")},"data-v-a9745b58",null);i.a=r.exports},Zpy9:function(e,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var p=s("Crr0"),t=s("BQiE"),r=s.n(t),c=s("Mk+e"),a={name:"Classify",data:function(){return{active:0,classify_list:[{title:"休闲食品",type:0},{title:"饮料冲剂",type:1},{title:"油粮副食",type:2},{title:"香烟酒水",type:3},{title:"个人护洁",type:4},{title:"美容美妆",type:5},{title:"医疗保健",type:6},{title:"亿家生鲜",type:7}],product_list:[[{img:r.a,pruduct:"橙子",description:"马来西亚进口鲜甜橙子一份3个",price:100,sales:200,keep:20},{img:r.a,pruduct:"橙子",description:"马来西亚进口鲜甜橙子一份3个",price:100,sales:200,keep:20},{img:r.a,pruduct:"橙子",description:"马来西亚进口鲜甜橙子一份3个",price:100,sales:200,keep:20},{img:r.a,pruduct:"橙子",description:"马来西亚进口鲜甜橙子一份3个",price:100,sales:200,keep:20},{img:r.a,pruduct:"橙子",description:"马来西亚进口鲜甜橙子一份3个",price:100,sales:200,keep:20},{img:r.a,pruduct:"橙子",description:"马来西亚进口鲜甜橙子一份3个",price:100,sales:200,keep:20},{img:r.a,pruduct:"橙子",description:"马来西亚进口鲜甜橙子一份3个",price:100,sales:200,keep:20},{img:r.a,pruduct:"橙子",description:"马来西亚进口鲜甜橙子一份3个",price:100,sales:200,keep:20},{img:r.a,pruduct:"橙子",description:"马来西亚进口鲜甜橙子一份3个",price:100,sales:200,keep:20},{img:r.a,pruduct:"橙子",description:"马来西亚进口鲜甜橙子一份3个",price:100,sales:200,keep:20},{img:r.a,pruduct:"橙子",description:"马来西亚进口鲜甜橙子一份3个",price:100,sales:200,keep:20}],[{img:r.a,pruduct:"橙子",description:"马来西亚进口鲜甜橙子一份3个",price:100,sales:200,keep:20},{img:r.a,pruduct:"橙子",description:"马来西亚进口鲜甜橙子一份3个",price:100,sales:200,keep:20},{img:r.a,pruduct:"橙子",description:"马来西亚进口鲜甜橙子一份3个",price:100,sales:200,keep:20},{img:r.a,pruduct:"橙子",description:"马来西亚进口鲜甜橙子一份3个",price:100,sales:200,keep:20},{img:r.a,pruduct:"橙子",description:"马来西亚进口鲜甜橙子一份3个",price:100,sales:200,keep:20},{img:r.a,pruduct:"橙子",description:"马来西亚进口鲜甜橙子一份3个",price:100,sales:200,keep:20},{img:r.a,pruduct:"橙子",description:"马来西亚进口鲜甜橙子一份3个",price:100,sales:200,keep:20},{img:r.a,pruduct:"橙子",description:"马来西亚进口鲜甜橙子一份3个",price:100,sales:200,keep:20},{img:r.a,pruduct:"橙子",description:"马来西亚进口鲜甜橙子一份3个",price:100,sales:200,keep:20},{img:r.a,pruduct:"橙子",description:"马来西亚进口鲜甜橙子一份3个",price:100,sales:200,keep:20},{img:r.a,pruduct:"橙子",description:"马来西亚进口鲜甜橙子一份3个",price:100,sales:200,keep:20}],[{img:r.a,pruduct:"橙子",description:"马来西亚进口鲜甜橙子一份3个",price:100,sales:200,keep:20},{img:r.a,pruduct:"橙子",description:"马来西亚进口鲜甜橙子一份3个",price:100,sales:200,keep:20},{img:r.a,pruduct:"橙子",description:"马来西亚进口鲜甜橙子一份3个",price:100,sales:200,keep:20},{img:r.a,pruduct:"橙子",description:"马来西亚进口鲜甜橙子一份3个",price:100,sales:200,keep:20},{img:r.a,pruduct:"橙子",description:"马来西亚进口鲜甜橙子一份3个",price:100,sales:200,keep:20},{img:r.a,pruduct:"橙子",description:"马来西亚进口鲜甜橙子一份3个",price:100,sales:200,keep:20},{img:r.a,pruduct:"橙子",description:"马来西亚进口鲜甜橙子一份3个",price:100,sales:200,keep:20},{img:r.a,pruduct:"橙子",description:"马来西亚进口鲜甜橙子一份3个",price:100,sales:200,keep:20},{img:r.a,pruduct:"橙子",description:"马来西亚进口鲜甜橙子一份3个",price:100,sales:200,keep:20},{img:r.a,pruduct:"橙子",description:"马来西亚进口鲜甜橙子一份3个",price:100,sales:200,keep:20},{img:r.a,pruduct:"橙子",description:"马来西亚进口鲜甜橙子一份3个",price:100,sales:200,keep:20}],[{img:r.a,pruduct:"橙子",description:"马来西亚进口鲜甜橙子一份3个",price:100,sales:200,keep:20},{img:r.a,pruduct:"橙子",description:"马来西亚进口鲜甜橙子一份3个",price:100,sales:200,keep:20},{img:r.a,pruduct:"橙子",description:"马来西亚进口鲜甜橙子一份3个",price:100,sales:200,keep:20},{img:r.a,pruduct:"橙子",description:"马来西亚进口鲜甜橙子一份3个",price:100,sales:200,keep:20},{img:r.a,pruduct:"橙子",description:"马来西亚进口鲜甜橙子一份3个",price:100,sales:200,keep:20},{img:r.a,pruduct:"橙子",description:"马来西亚进口鲜甜橙子一份3个",price:100,sales:200,keep:20},{img:r.a,pruduct:"橙子",description:"马来西亚进口鲜甜橙子一份3个",price:100,sales:200,keep:20},{img:r.a,pruduct:"橙子",description:"马来西亚进口鲜甜橙子一份3个",price:100,sales:200,keep:20},{img:r.a,pruduct:"橙子",description:"马来西亚进口鲜甜橙子一份3个",price:100,sales:200,keep:20},{img:r.a,pruduct:"橙子",description:"马来西亚进口鲜甜橙子一份3个",price:100,sales:200,keep:20},{img:r.a,pruduct:"橙子",description:"马来西亚进口鲜甜橙子一份3个",price:100,sales:200,keep:20}],[{img:r.a,pruduct:"橙子",description:"马来西亚进口鲜甜橙子一份3个",price:100,sales:200,keep:20},{img:r.a,pruduct:"橙子",description:"马来西亚进口鲜甜橙子一份3个",price:100,sales:200,keep:20},{img:r.a,pruduct:"橙子",description:"马来西亚进口鲜甜橙子一份3个",price:100,sales:200,keep:20},{img:r.a,pruduct:"橙子",description:"马来西亚进口鲜甜橙子一份3个",price:100,sales:200,keep:20},{img:r.a,pruduct:"橙子",description:"马来西亚进口鲜甜橙子一份3个",price:100,sales:200,keep:20},{img:r.a,pruduct:"橙子",description:"马来西亚进口鲜甜橙子一份3个",price:100,sales:200,keep:20},{img:r.a,pruduct:"橙子",description:"马来西亚进口鲜甜橙子一份3个",price:100,sales:200,keep:20},{img:r.a,pruduct:"橙子",description:"马来西亚进口鲜甜橙子一份3个",price:100,sales:200,keep:20},{img:r.a,pruduct:"橙子",description:"马来西亚进口鲜甜橙子一份3个",price:100,sales:200,keep:20},{img:r.a,pruduct:"橙子",description:"马来西亚进口鲜甜橙子一份3个",price:100,sales:200,keep:20},{img:r.a,pruduct:"橙子",description:"马来西亚进口鲜甜橙子一份3个",price:100,sales:200,keep:20}],[{img:r.a,pruduct:"橙子",description:"马来西亚进口鲜甜橙子一份3个",price:100,sales:200,keep:20},{img:r.a,pruduct:"橙子",description:"马来西亚进口鲜甜橙子一份3个",price:100,sales:200,keep:20},{img:r.a,pruduct:"橙子",description:"马来西亚进口鲜甜橙子一份3个",price:100,sales:200,keep:20},{img:r.a,pruduct:"橙子",description:"马来西亚进口鲜甜橙子一份3个",price:100,sales:200,keep:20},{img:r.a,pruduct:"橙子",description:"马来西亚进口鲜甜橙子一份3个",price:100,sales:200,keep:20},{img:r.a,pruduct:"橙子",description:"马来西亚进口鲜甜橙子一份3个",price:100,sales:200,keep:20},{img:r.a,pruduct:"橙子",description:"马来西亚进口鲜甜橙子一份3个",price:100,sales:200,keep:20},{img:r.a,pruduct:"橙子",description:"马来西亚进口鲜甜橙子一份3个",price:100,sales:200,keep:20},{img:r.a,pruduct:"橙子",description:"马来西亚进口鲜甜橙子一份3个",price:100,sales:200,keep:20},{img:r.a,pruduct:"橙子",description:"马来西亚进口鲜甜橙子一份3个",price:100,sales:200,keep:20},{img:r.a,pruduct:"橙子",description:"马来西亚进口鲜甜橙子一份3个",price:100,sales:200,keep:20}],[{img:r.a,pruduct:"橙子",description:"马来西亚进口鲜甜橙子一份3个",price:100,sales:200,keep:20},{img:r.a,pruduct:"橙子",description:"马来西亚进口鲜甜橙子一份3个",price:100,sales:200,keep:20},{img:r.a,pruduct:"橙子",description:"马来西亚进口鲜甜橙子一份3个",price:100,sales:200,keep:20},{img:r.a,pruduct:"橙子",description:"马来西亚进口鲜甜橙子一份3个",price:100,sales:200,keep:20},{img:r.a,pruduct:"橙子",description:"马来西亚进口鲜甜橙子一份3个",price:100,sales:200,keep:20},{img:r.a,pruduct:"橙子",description:"马来西亚进口鲜甜橙子一份3个",price:100,sales:200,keep:20},{img:r.a,pruduct:"橙子",description:"马来西亚进口鲜甜橙子一份3个",price:100,sales:200,keep:20},{img:r.a,pruduct:"橙子",description:"马来西亚进口鲜甜橙子一份3个",price:100,sales:200,keep:20},{img:r.a,pruduct:"橙子",description:"马来西亚进口鲜甜橙子一份3个",price:100,sales:200,keep:20},{img:r.a,pruduct:"橙子",description:"马来西亚进口鲜甜橙子一份3个",price:100,sales:200,keep:20},{img:r.a,pruduct:"橙子",description:"马来西亚进口鲜甜橙子一份3个",price:100,sales:200,keep:20}],[{img:r.a,pruduct:"橙子",description:"马来西亚进口鲜甜橙子一份3个",price:100,sales:200,keep:20},{img:r.a,pruduct:"橙子",description:"马来西亚进口鲜甜橙子一份3个",price:100,sales:200,keep:20},{img:r.a,pruduct:"橙子",description:"马来西亚进口鲜甜橙子一份3个",price:100,sales:200,keep:20},{img:r.a,pruduct:"橙子",description:"马来西亚进口鲜甜橙子一份3个",price:100,sales:200,keep:20},{img:r.a,pruduct:"橙子",description:"马来西亚进口鲜甜橙子一份3个",price:100,sales:200,keep:20},{img:r.a,pruduct:"橙子",description:"马来西亚进口鲜甜橙子一份3个",price:100,sales:200,keep:20},{img:r.a,pruduct:"橙子",description:"马来西亚进口鲜甜橙子一份3个",price:100,sales:200,keep:20},{img:r.a,pruduct:"橙子",description:"马来西亚进口鲜甜橙子一份3个",price:100,sales:200,keep:20},{img:r.a,pruduct:"橙子",description:"马来西亚进口鲜甜橙子一份3个",price:100,sales:200,keep:20},{img:r.a,pruduct:"橙子",description:"马来西亚进口鲜甜橙子一份3个",price:100,sales:200,keep:20},{img:r.a,pruduct:"橙子",description:"马来西亚进口鲜甜橙子一份3个",price:100,sales:200,keep:20}]]}},components:{Header:p.a,IncreaseNumber:c.a}},u={render:function(){var e=this,i=e.$createElement,s=e._self._c||i;return s("div",{staticClass:"classify"},[s("Header",{attrs:{title:"产品分类"}}),e._v(" "),s("div",{staticClass:"flex-row-wrap-space_between-flex_start classify-contain"},[s("ul",{staticClass:"classify-list"},e._l(e.classify_list,function(i){return s("li",{class:{active:e.active==i.type},on:{click:function(s){e.active=i.type}}},[s("i"),e._v(e._s(i.title)+"\n      ")])}),0),e._v(" "),s("ul",{staticClass:"product-list"},e._l(e.product_list[e.active],function(i){return s("li",{staticClass:"flex-row-wrap-space_between-center"},[s("img",{attrs:{src:i.img,alt:""}}),e._v(" "),s("div",{staticClass:"product-list-right"},[s("div",[e._v("["+e._s(i.pruduct)+"] "+e._s(i.description))]),e._v(" "),s("div",{staticClass:"flex-row-wrap-space_between-center"},[s("div",[s("span",{staticClass:"product-list-right-price"},[e._v("p"+e._s(i.price))]),e._v(" (库存"+e._s(i.keep)+"件)")]),e._v(" "),s("increase-number",{model:{value:i.sales,callback:function(s){e.$set(i,"sales",s)},expression:"item.sales"}})],1)])])}),0)]),e._v(" "),e._m(0)],1)},staticRenderFns:[function(){var e=this.$createElement,i=this._self._c||e;return i("div",{staticClass:"classify-settlement flex-row-wrap-space_between-center"},[i("div",{staticClass:"classify-settlement-price"},[i("span",[this._v("合计:")]),this._v(" "),i("span",{staticClass:"price-number"},[this._v("P550(￥67.9元)")])]),this._v(" "),i("div",{staticClass:"classify-settlement-button"},[this._v("立即结算")])])}]};var d=s("VU/8")(a,u,!1,function(e){s("nA2U")},"data-v-89d985ee",null);i.default=d.exports},nA2U:function(e,i){},vY0o:function(e,i){}});
//# sourceMappingURL=6.2bd0dd3f47d12dddba08.js.map