webpackJsonp([8],{aiwS:function(t,e){},"f0+J":function(t,e){},gUbw:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={name:"ShippingAddressAdd",data:function(){return{datalist:{name:"",phone:"",address:"",moren:!0}}},components:{Header:a("Crr0").a}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"shippingAddressAdd"},[a("Header",{attrs:{left:"back",title:"新增收货地址"}}),t._v(" "),a("mt-field",{staticStyle:{height:"40px",background:"white"},attrs:{label:"收货人",placeholder:"请输入收货人"},model:{value:t.datalist.name,callback:function(e){t.$set(t.datalist,"name",e)},expression:"datalist.name"}}),t._v(" "),a("mt-field",{staticStyle:{height:"40px",background:"white"},attrs:{type:"number",label:"联系电话",placeholder:"请输入联系电话"},model:{value:t.datalist.phone,callback:function(e){t.$set(t.datalist,"phone",e)},expression:"datalist.phone"}}),t._v(" "),a("mt-field",{staticStyle:{background:"white"},attrs:{rows:"3",type:"textarea",label:"详细地址",placeholder:"请输入详细地址"},model:{value:t.datalist.address,callback:function(e){t.$set(t.datalist,"address",e)},expression:"datalist.address"}}),t._v(" "),a("mt-cell",{staticClass:"cell-moren",staticStyle:{background:"white","margin-top":"10px"},attrs:{title:"设为默认地址"}},[a("mt-switch",{model:{value:t.datalist.moren,callback:function(e){t.$set(t.datalist,"moren",e)},expression:"datalist.moren"}})],1),t._v(" "),a("mt-button",{staticClass:"common-button-style",attrs:{type:"default"},on:{click:function(e){return t.$router.push("/shipping_address_add")}}},[t._v("确认收货地址")])],1)},staticRenderFns:[]};var n=a("VU/8")(s,l,!1,function(t){a("f0+J"),a("aiwS")},"data-v-0763a498",null);e.default=n.exports}});
//# sourceMappingURL=8.42f930b4c773c51e3fa0.js.map