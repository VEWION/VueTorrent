if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,r)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let a={};const o=s=>l(s,n),u={module:{uri:n},exports:a,require:o};e[n]=Promise.all(i.map((s=>u[s]||o(s)))).then((s=>(r(...s),a)))}}define(["./workbox-fa446783"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"apple-touch-icon.png",revision:"eed821a5bbfee3a20aab9c51c4977743"},{url:"assets/AddModal-104f98ec.js",revision:null},{url:"assets/AddModal-4c7242e1.css",revision:null},{url:"assets/AppPreferences-9ee94fcd.js",revision:null},{url:"assets/ChangeLocationModal-205ca8e3.js",revision:null},{url:"assets/ConfirmDeleteModal-cefdf703.js",revision:null},{url:"assets/ConfirmShutdownModal-d2f889fe.js",revision:null},{url:"assets/CreateNewCategoryDialog-09b7f7b7.js",revision:null},{url:"assets/CreateNewTagDialog-1e239d72.js",revision:null},{url:"assets/Dashboard-732b8f25.js",revision:null},{url:"assets/Dashboard-be52ce27.css",revision:null},{url:"assets/FeedForm-32856ce0.js",revision:null},{url:"assets/FullScreenModal-b7264cb2.js",revision:null},{url:"assets/index-12e5dbd2.css",revision:null},{url:"assets/index-37310e0f.js",revision:null},{url:"assets/index-fa553f6d.css",revision:null},{url:"assets/Login-73a8065c.js",revision:null},{url:"assets/Logs-b79cb50b.css",revision:null},{url:"assets/Logs-f184bfa1.js",revision:null},{url:"assets/MagnetHandler-9b1d5efa.js",revision:null},{url:"assets/Modal-f5e0cc6c.js",revision:null},{url:"assets/RenameTorrentFileModal-51b1a4c9.js",revision:null},{url:"assets/RenameTorrentModal-e06f13cd.js",revision:null},{url:"assets/RssArticles-e393aebd.js",revision:null},{url:"assets/RssArticles-fc2a926c.css",revision:null},{url:"assets/RuleForm-583f678f.js",revision:null},{url:"assets/SearchEngine-4e7a5f8f.css",revision:null},{url:"assets/SearchEngine-c3265c55.js",revision:null},{url:"assets/SearchPluginManager-762102ad.js",revision:null},{url:"assets/Settings-86f22058.css",revision:null},{url:"assets/Settings-99821a70.js",revision:null},{url:"assets/ShareLimitInput-0211e9de.js",revision:null},{url:"assets/ShareLimitInput-88ecae5e.css",revision:null},{url:"assets/ShareLimitModal-9da1db21.css",revision:null},{url:"assets/ShareLimitModal-d96987ed.js",revision:null},{url:"assets/SpeedLimitModal-01cf145c.js",revision:null},{url:"assets/TorrentDetail-71333045.js",revision:null},{url:"assets/TorrentDetail-d183173c.css",revision:null},{url:"assets/VCheckbox-863b13fa.js",revision:null},{url:"assets/VCheckbox-9020f9ce.css",revision:null},{url:"assets/VContainer-83778109.js",revision:null},{url:"assets/VDataTable-bac77655.js",revision:null},{url:"assets/VDataTable-d676ab1c.css",revision:null},{url:"assets/VDialog-1c2aa677.css",revision:null},{url:"assets/VDialog-ffba9830.js",revision:null},{url:"assets/VForm-cc17711d.js",revision:null},{url:"assets/VTab-253b23b7.js",revision:null},{url:"assets/VTab-e1f8d77a.css",revision:null},{url:"assets/VTabItem-da215f3c.js",revision:null},{url:"assets/VTextarea-64b487a8.css",revision:null},{url:"assets/VTextarea-afe1507c.js",revision:null},{url:"assets/vue-b220ace6.js",revision:null},{url:"favicon.ico",revision:"621ef878b9a700bd2249dad60d9f1141"},{url:"icon-192.png",revision:"1a475d65497c0b3609661246d8639ff4"},{url:"icon-512.png",revision:"fa311af470073dfeb0673806ae3e0e2f"},{url:"icon.svg",revision:"1a5efa1aa226aa0533605b7e84667ecd"},{url:"index.html",revision:"fa50a6c44993ba60db0f9b27f642bd60"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"favicon.ico",revision:"621ef878b9a700bd2249dad60d9f1141"},{url:"icon.svg",revision:"1a5efa1aa226aa0533605b7e84667ecd"},{url:"icon-192.png",revision:"1a475d65497c0b3609661246d8639ff4"},{url:"icon-512.png",revision:"fa311af470073dfeb0673806ae3e0e2f"},{url:"robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"},{url:"manifest.webmanifest",revision:"112d2a686dfcb44742c79ee217315d5c"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
