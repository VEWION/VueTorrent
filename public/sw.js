if(!self.define){let s,o={};const e=(e,l)=>(e=new URL(e+".js",l).href,o[e]||new Promise((o=>{if("document"in self){const s=document.createElement("script");s.src=e,s.onload=o,document.head.appendChild(s)}else s=e,importScripts(e),o()})).then((()=>{let s=o[e];if(!s)throw new Error(`Module ${e} didn’t register its module`);return s})));self.define=(l,r)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(o[n])return;let i={};const a=s=>e(s,n),t={module:{uri:n},exports:i,require:a};o[n]=Promise.all(l.map((s=>t[s]||a(s)))).then((s=>(r(...s),i)))}}define(["./workbox-fa446783"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"apple-touch-icon.png",revision:"eed821a5bbfee3a20aab9c51c4977743"},{url:"assets/ArrayPagination-9f2b3806.js",revision:null},{url:"assets/Dashboard-33164174.js",revision:null},{url:"assets/Dashboard-3e6bc9ee.css",revision:null},{url:"assets/dayjs.min-055533b7.js",revision:null},{url:"assets/index-10b5276d.js",revision:null},{url:"assets/index-6e5362c6.js",revision:null},{url:"assets/index-acc20f2d.css",revision:null},{url:"assets/Login-2e8a8841.js",revision:null},{url:"assets/Logs-72dd2677.css",revision:null},{url:"assets/Logs-f27c5968.js",revision:null},{url:"assets/MagnetHandler-43d272fc.js",revision:null},{url:"assets/materialdesignicons-webfont-28c8f97f.woff",revision:null},{url:"assets/materialdesignicons-webfont-31010194.woff2",revision:null},{url:"assets/MoveTorrentDialog.vue_vue_type_script_setup_true_lang-7aa88c2e.js",revision:null},{url:"assets/PasswordField.vue_vue_type_script_setup_true_lang-751ec1eb.js",revision:null},{url:"assets/roboto-cyrillic-400-normal-495d38d4.woff2",revision:null},{url:"assets/roboto-cyrillic-400-normal-adba67d2.woff",revision:null},{url:"assets/roboto-cyrillic-ext-400-normal-0a32035a.woff",revision:null},{url:"assets/roboto-cyrillic-ext-400-normal-b7ef2cd1.woff2",revision:null},{url:"assets/roboto-greek-400-normal-076b9dc1.woff",revision:null},{url:"assets/roboto-greek-400-normal-daf51ab5.woff2",revision:null},{url:"assets/roboto-latin-400-normal-a9fdbefa.woff",revision:null},{url:"assets/roboto-latin-400-normal-f6734f81.woff2",revision:null},{url:"assets/roboto-latin-ext-400-normal-3c23eb02.woff2",revision:null},{url:"assets/roboto-latin-ext-400-normal-c2b94086.woff",revision:null},{url:"assets/roboto-mono-cyrillic-400-normal-52f28cb4.woff2",revision:null},{url:"assets/roboto-mono-cyrillic-400-normal-654b02dc.woff",revision:null},{url:"assets/roboto-mono-cyrillic-ext-400-normal-970cd84c.woff",revision:null},{url:"assets/roboto-mono-cyrillic-ext-400-normal-aa28d99c.woff2",revision:null},{url:"assets/roboto-mono-greek-400-normal-122802d0.woff2",revision:null},{url:"assets/roboto-mono-greek-400-normal-8457a849.woff",revision:null},{url:"assets/roboto-mono-latin-400-normal-32c8a74a.woff2",revision:null},{url:"assets/roboto-mono-latin-400-normal-4940016c.woff",revision:null},{url:"assets/roboto-mono-latin-ext-400-normal-93b6c99d.woff2",revision:null},{url:"assets/roboto-mono-latin-ext-400-normal-bb99bbb3.woff",revision:null},{url:"assets/roboto-mono-vietnamese-400-normal-4039566f.woff2",revision:null},{url:"assets/roboto-mono-vietnamese-400-normal-5e6499a6.woff",revision:null},{url:"assets/roboto-vietnamese-400-normal-77b24796.woff2",revision:null},{url:"assets/roboto-vietnamese-400-normal-d2390f1a.woff",revision:null},{url:"assets/rss-a392f13f.js",revision:null},{url:"assets/RssArticles-0e593aca.css",revision:null},{url:"assets/RssArticles-8dff9a43.js",revision:null},{url:"assets/SearchEngine-249eac1b.js",revision:null},{url:"assets/Settings-4659522a.js",revision:null},{url:"assets/Settings-77ebc46f.css",revision:null},{url:"assets/TorrentDetail-30929231.css",revision:null},{url:"assets/TorrentDetail-9bf39c1e.js",revision:null},{url:"assets/vue-aae79161.js",revision:null},{url:"favicon.ico",revision:"621ef878b9a700bd2249dad60d9f1141"},{url:"icon-192.png",revision:"1a475d65497c0b3609661246d8639ff4"},{url:"icon-512.png",revision:"fa311af470073dfeb0673806ae3e0e2f"},{url:"icon.svg",revision:"1a5efa1aa226aa0533605b7e84667ecd"},{url:"index.html",revision:"c1946e838c732bd182b5a26d18305bbc"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"favicon.ico",revision:"621ef878b9a700bd2249dad60d9f1141"},{url:"icon.svg",revision:"1a5efa1aa226aa0533605b7e84667ecd"},{url:"icon-192.png",revision:"1a475d65497c0b3609661246d8639ff4"},{url:"icon-512.png",revision:"fa311af470073dfeb0673806ae3e0e2f"},{url:"robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"},{url:"manifest.webmanifest",revision:"112d2a686dfcb44742c79ee217315d5c"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
