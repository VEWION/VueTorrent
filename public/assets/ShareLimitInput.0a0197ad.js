import{r as m,at as o,q as r,au as u,a1 as l,z as n,A as a,a as d}from"./index.62280e3d.js";import{_ as s}from"./VSwitch.2602daa3.js";import"./vue.10642814.js";import"./index.a142d6aa.js";const _={name:"ShareLimitInput",props:["title","initialLimit"],data(){return{mdiPercent:o,mdiClose:r,mdiClockTimeEight:u,global:!1,unlimited:!1,limit:""}},created(){if(this.initialLimit===-2){this.global=!0;return}if(this.initialLimit===-1){this.unlimited=!0;return}this.limit=this.initialLimit},methods:{disableUnlimited(){this.unlimited=!1},disabledGlobal(){this.global=!1},export(){return this.global?-2:this.unlimited?-1:this.limit}}};var c=function(){var i=this,t=i._self._c;return t("div",{staticStyle:{"min-width":"300px"}},[t("h3",[i._v(i._s(i.title))]),t(l,[t(n,{attrs:{dense:""}},[t(a,[t(s,{staticClass:"v-input--reverse pa-0 ma-0",attrs:{"hide-details":"",inset:"",label:i.$t("modals.shareLimit.input.globalLimit")},on:{change:i.disableUnlimited},model:{value:i.global,callback:function(e){i.global=e},expression:"global"}})],1)],1)],1),t(l,[t(n,{attrs:{dense:""}},[t(a,[t(s,{staticClass:"v-input--reverse pa-0 ma-0",attrs:{"hide-details":"",inset:"",label:i.$t("modals.shareLimit.input.unlimited")},on:{change:i.disabledGlobal},model:{value:i.unlimited,callback:function(e){i.unlimited=e},expression:"unlimited"}})],1)],1)],1),t(l,{staticClass:"mx-2"},[t(d,{attrs:{type:"number",autofocus:"",clearable:"",dense:"",label:`${i.title} Limit`,"prepend-inner-icon":i.title==="Ratio"?i.mdiPercent:i.mdiClockTimeEight},model:{value:i.limit,callback:function(e){i.limit=e},expression:"limit"}})],1)],1)},p=[],h=m(_,c,p,!1,null,null,null,null);const x=h.exports;export{x as default};
