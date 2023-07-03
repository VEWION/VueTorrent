import{m as l}from"./vue-9ef19677.js";import{$ as n,r,Q as a,s as m,t as c,V as p,v as d,z as _,A as u,B as h,a as f,L,E as x,x as o}from"./index-2955a708.js";import{F as b}from"./FullScreenModal-bced8cbb.js";import{M as g}from"./Modal-572b592c.js";import{_ as w}from"./VDialog-d1bff183.js";import{_ as k}from"./VContainer-a1e53201.js";const v={name:"SpeedLimitModal",mixins:[g,b],props:{mode:String,hash:String},data(){return{limit:"",mdiSpeedometer:n,mdiClose:r}},computed:{...l(["getTorrent"]),torrent(){return this.getTorrent(this.hash)},isPhone(){return this.$vuetify.breakpoint.xsOnly}},async created(){switch(this.mode){case"download":if(this.isGlobal()){const s=await a.getGlobalDownloadLimit();this.limit=this.formatLimit(s)}else this.limit=this.formatLimit(this.torrent?.dl_limit);break;case"upload":if(this.isGlobal()){const s=await a.getGlobalUploadLimit();this.limit=this.formatLimit(s)}else this.limit=this.formatLimit(this.torrent?.up_limit);break}},methods:{async setLimit(){switch(this.mode){case"download":this.isGlobal()?await a.setGlobalDownloadLimit(this.exportLimit()):await a.setDownloadLimit([this.hash],this.exportLimit());break;case"upload":this.isGlobal()?await a.setGlobalUploadLimit(this.exportLimit()):await a.setUploadLimit([this.hash],this.exportLimit());break}this.close()},isGlobal(){return!this.torrent},formatLimit(s){return s>0?s/1024:"∞"},exportLimit(){return this.limit>0?this.limit*1024:NaN},close(){this.dialog=!1}}};var C=function(){var t=this,i=t._self._c;return i(w,{attrs:{scrollable:"","content-class":"rounded-form","max-width":"500px",fullscreen:t.isPhone},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[i(c,[i(p,{staticClass:"pa-0"},[i(d,{staticClass:"ma-4 primarytext--text"},[i("h3",[t._v("Limit "+t._s(t._f("titleCase")(t.mode)))])])],1),i(_,[i(k,[i(u,[i(h,[i(f,{attrs:{autofocus:"",clearable:"",label:t.$t("modals.speedLimit.speedLimit"),"prepend-inner-icon":t.mdiSpeedometer,suffix:"KB/s"},on:{focus:function(e){return e.target.select()},keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.setLimit.apply(null,arguments)}},model:{value:t.limit,callback:function(e){t.limit=e},expression:"limit"}})],1)],1)],1)],1),i(L),i(x,{staticClass:"justify-end"},[i(o,{staticClass:"accent white--text elevation-0 px-4",on:{click:t.setLimit}},[t._v(" Save ")]),i(o,{staticClass:"error white--text elevation-0 px-4",on:{click:t.close}},[t._v(" Cancel ")])],1)],1)],1)},y=[],G=m(v,C,y,!1,null,null,null,null);const U=G.exports;export{U as default};