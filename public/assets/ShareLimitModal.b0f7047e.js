import s from"./ShareLimitInput.0a0197ad.js";import{m as o}from"./vue.10642814.js";import{F as r}from"./FullScreenModal.cd9b8d19.js";import{M as n,Q as l,r as m,s as _,V as c,u as p,y as d,$ as u,D as h,v as e}from"./index.62280e3d.js";import{_ as f}from"./VDialog.3e4ff12c.js";import"./VSwitch.2602daa3.js";import"./index.a142d6aa.js";const x={name:"ShareLimitModal",components:{ShareLimitInput:s},mixins:[n,r],props:{mode:String,hash:String},computed:{...o(["getTorrent"]),torrent(){return this.getTorrent(this.hash)},isPhone(){return this.$vuetify.breakpoint.xsOnly}},methods:{save(){l.setShareLimit([this.hash],this.$refs.ratio.export(),this.$refs.time.export()),this.close()},close(){this.dialog=!1}}};var v=function(){var t=this,i=t._self._c;return i(f,{attrs:{scrollable:"","content-class":"rounded-form","max-width":"500px",fullscreen:t.isPhone},model:{value:t.dialog,callback:function(a){t.dialog=a},expression:"dialog"}},[i(_,{staticClass:"px-2"},[i(c,{staticClass:"pa-0"},[i(p,{staticClass:"ma-4 primarytext--text"},[i("h3",[t._v(t._s(t.$t("modals.shareLimit.limitRatio")))])])],1),i(d,{staticClass:"px-4 py-2"},[i(s,{ref:"ratio",attrs:{title:t.$t("modals.shareLimit.titleRatio"),"initial-limit":t.torrent.ratio_limit}}),i(s,{ref:"time",staticClass:"mt-2",attrs:{title:t.$t("modals.shareLimit.titleDuration"),"initial-limit":t.torrent.ratio_time_limit}})],1),i(u),i(h,{staticClass:"justify-end"},[i(e,{staticClass:"accent white--text elevation-0 px-4",on:{click:t.save}},[t._v(" "+t._s(t.$t("save"))+" ")]),i(e,{staticClass:"error white--text elevation-0 px-4",on:{click:t.close}},[t._v(" "+t._s(t.$t("cancel"))+" ")])],1)],1)],1)},g=[],C=m(x,v,g,!1,null,"09a1cdf7",null,null);const k=C.exports;export{k as default};
