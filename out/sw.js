if(!self.define){let e,s={};const i=(i,a)=>(i=new URL(i+".js",a).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(a,c)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let t={};const r=e=>i(e,n),d={module:{uri:n},exports:t,require:r};s[n]=Promise.all(a.map((e=>d[e]||r(e)))).then((e=>(c(...e),t)))}}define(["./workbox-6316bd60"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/server/middleware-manifest.json",revision:"p5k2bV1wyLl0Wf21PdmSs"},{url:"/_next/static/chunks/141-702aa501bd5bec1a.js",revision:"p5k2bV1wyLl0Wf21PdmSs"},{url:"/_next/static/chunks/146-c4ae1ce8518efbe8.js",revision:"p5k2bV1wyLl0Wf21PdmSs"},{url:"/_next/static/chunks/165-5f0ca3e613b62e15.js",revision:"p5k2bV1wyLl0Wf21PdmSs"},{url:"/_next/static/chunks/193-d248b98c0a720495.js",revision:"p5k2bV1wyLl0Wf21PdmSs"},{url:"/_next/static/chunks/236-30450f27686ffeac.js",revision:"p5k2bV1wyLl0Wf21PdmSs"},{url:"/_next/static/chunks/350-160de4180e2616ce.js",revision:"p5k2bV1wyLl0Wf21PdmSs"},{url:"/_next/static/chunks/369-14579f7593d14f24.js",revision:"p5k2bV1wyLl0Wf21PdmSs"},{url:"/_next/static/chunks/436-aaa0aeff5bcad50b.js",revision:"p5k2bV1wyLl0Wf21PdmSs"},{url:"/_next/static/chunks/451-a1e815c6ae00b21a.js",revision:"p5k2bV1wyLl0Wf21PdmSs"},{url:"/_next/static/chunks/52-d160df58052a04a5.js",revision:"p5k2bV1wyLl0Wf21PdmSs"},{url:"/_next/static/chunks/537-2f7e56f7196b4378.js",revision:"p5k2bV1wyLl0Wf21PdmSs"},{url:"/_next/static/chunks/545-5359d3d86d66102c.js",revision:"p5k2bV1wyLl0Wf21PdmSs"},{url:"/_next/static/chunks/574-096567fa00a38e72.js",revision:"p5k2bV1wyLl0Wf21PdmSs"},{url:"/_next/static/chunks/605-75e3db4f8cf23097.js",revision:"p5k2bV1wyLl0Wf21PdmSs"},{url:"/_next/static/chunks/753-b2cf2e6824e2ab87.js",revision:"p5k2bV1wyLl0Wf21PdmSs"},{url:"/_next/static/chunks/75fc9c18-752a662291d0c78c.js",revision:"p5k2bV1wyLl0Wf21PdmSs"},{url:"/_next/static/chunks/915-8d193c75dc5d9665.js",revision:"p5k2bV1wyLl0Wf21PdmSs"},{url:"/_next/static/chunks/917-f6f161cb6f77551e.js",revision:"p5k2bV1wyLl0Wf21PdmSs"},{url:"/_next/static/chunks/972-068de864373cad3c.js",revision:"p5k2bV1wyLl0Wf21PdmSs"},{url:"/_next/static/chunks/framework-bb5c596eafb42b22.js",revision:"p5k2bV1wyLl0Wf21PdmSs"},{url:"/_next/static/chunks/main-e9fd5e023b4bb05d.js",revision:"p5k2bV1wyLl0Wf21PdmSs"},{url:"/_next/static/chunks/pages/404-b641b1e4b1ba2763.js",revision:"p5k2bV1wyLl0Wf21PdmSs"},{url:"/_next/static/chunks/pages/Spa-304fce1492e96052.js",revision:"p5k2bV1wyLl0Wf21PdmSs"},{url:"/_next/static/chunks/pages/_app-2c533d75c8bddf29.js",revision:"p5k2bV1wyLl0Wf21PdmSs"},{url:"/_next/static/chunks/pages/_error-0509152792d2b207.js",revision:"p5k2bV1wyLl0Wf21PdmSs"},{url:"/_next/static/chunks/pages/adminUser-6489dae0f6abe81d.js",revision:"p5k2bV1wyLl0Wf21PdmSs"},{url:"/_next/static/chunks/pages/authentication-31ee14587eb09758.js",revision:"p5k2bV1wyLl0Wf21PdmSs"},{url:"/_next/static/chunks/pages/index-1c7a283c33a6ac4e.js",revision:"p5k2bV1wyLl0Wf21PdmSs"},{url:"/_next/static/chunks/pages/main/C_exaTExamgCreate-85ed9a88bd2a9438.js",revision:"p5k2bV1wyLl0Wf21PdmSs"},{url:"/_next/static/chunks/pages/main/C_invTInvehCreate-90a101f36cfe458c.js",revision:"p5k2bV1wyLl0Wf21PdmSs"},{url:"/_next/static/chunks/pages/main/C_vacTVacucCreate-d0c157f885b93ea2.js",revision:"p5k2bV1wyLl0Wf21PdmSs"},{url:"/_next/static/chunks/pages/main/C_vacTVacugCreate-fc83af44c790fceb.js",revision:"p5k2bV1wyLl0Wf21PdmSs"},{url:"/_next/static/chunks/pages/main/backup/C_citOxUh2Create-14abebdd81d12c1d.js",revision:"p5k2bV1wyLl0Wf21PdmSs"},{url:"/_next/static/chunks/pages/main/backup/module/C_masnnkYqCreate-dc4d0f824abaccc9.js",revision:"p5k2bV1wyLl0Wf21PdmSs"},{url:"/_next/static/chunks/pages/main/tablePage-e7edec6623dae3c5.js",revision:"p5k2bV1wyLl0Wf21PdmSs"},{url:"/_next/static/chunks/pages/petsAndClients-dd0e204c1d67b28e.js",revision:"p5k2bV1wyLl0Wf21PdmSs"},{url:"/_next/static/chunks/pages/registro-2a021568f14f680b.js",revision:"p5k2bV1wyLl0Wf21PdmSs"},{url:"/_next/static/chunks/pages/test-6df303cb75432166.js",revision:"p5k2bV1wyLl0Wf21PdmSs"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"p5k2bV1wyLl0Wf21PdmSs"},{url:"/_next/static/chunks/webpack-1fdbdc357cdcd526.js",revision:"p5k2bV1wyLl0Wf21PdmSs"},{url:"/_next/static/css/118b8ea593bafe4a.css",revision:"p5k2bV1wyLl0Wf21PdmSs"},{url:"/_next/static/images/Grupo 1660-3e90a3c0313e42ce0cfcd7cefff2e13d.svg",revision:"p5k2bV1wyLl0Wf21PdmSs"},{url:"/_next/static/images/Grupo 1661-5745919dd5895544917ba1c55fae2ee0.svg",revision:"p5k2bV1wyLl0Wf21PdmSs"},{url:"/_next/static/images/Grupo 1668-2ec5fdd49eec28a0059c3cd15970dc53.svg",revision:"p5k2bV1wyLl0Wf21PdmSs"},{url:"/_next/static/images/Grupo 2012-934b2e6a7343183d3f5c75721dcb06b7.png",revision:"p5k2bV1wyLl0Wf21PdmSs"},{url:"/_next/static/images/add-f1ad12a0cf099ab09aef7a2caa52a5ae.png",revision:"p5k2bV1wyLl0Wf21PdmSs"},{url:"/_next/static/images/agregarpaseador-b3299774ef3dc9d41f7728ef19c10d2f.png",revision:"p5k2bV1wyLl0Wf21PdmSs"},{url:"/_next/static/images/agregarveteri-2122658711be5e8fc8a719b5b6074c54.png",revision:"p5k2bV1wyLl0Wf21PdmSs"},{url:"/_next/static/images/feed3-ccfd97a700e2b7e190c1666fdff39aa2.svg",revision:"p5k2bV1wyLl0Wf21PdmSs"},{url:"/_next/static/images/feed4-4531977348ef9a5a77b9126983cb9530.svg",revision:"p5k2bV1wyLl0Wf21PdmSs"},{url:"/_next/static/images/fercho-b383c5159c4edb9a7c5b8112728cc8af.svg",revision:"p5k2bV1wyLl0Wf21PdmSs"},{url:"/_next/static/images/fotoSpa1-7d090641844b0715aa964b3c9540d4aa.svg",revision:"p5k2bV1wyLl0Wf21PdmSs"},{url:"/_next/static/images/fotoSpa2-7266f91c45ca1faa181c17259a1af991.svg",revision:"p5k2bV1wyLl0Wf21PdmSs"},{url:"/_next/static/images/fotoSpa3-ad8c51f29a2a953472ede9ed160437b6.svg",revision:"p5k2bV1wyLl0Wf21PdmSs"},{url:"/_next/static/images/fotoSpa5-694671e29f6798b21debefd466911342.svg",revision:"p5k2bV1wyLl0Wf21PdmSs"},{url:"/_next/static/images/fotovacuna1-4716873b04b6ef9fe213dd8661951d00.svg",revision:"p5k2bV1wyLl0Wf21PdmSs"},{url:"/_next/static/images/fotovete-825914fe64204cab0060e5f73ee4ef85.svg",revision:"p5k2bV1wyLl0Wf21PdmSs"},{url:"/_next/static/images/historia2-bf56a5d261490db7883cf5675f35f760.svg",revision:"p5k2bV1wyLl0Wf21PdmSs"},{url:"/_next/static/images/historia3-e4257169ab8af06bd02ec8193d261950.svg",revision:"p5k2bV1wyLl0Wf21PdmSs"},{url:"/_next/static/images/historia4-35d449cca64f921ebec4b0f6b959143d.svg",revision:"p5k2bV1wyLl0Wf21PdmSs"},{url:"/_next/static/images/historia5-9f27417acd1996966d524a36b0373f19.svg",revision:"p5k2bV1wyLl0Wf21PdmSs"},{url:"/_next/static/images/historia6-0ff690231d2a12df5a421c540bf5526b.svg",revision:"p5k2bV1wyLl0Wf21PdmSs"},{url:"/_next/static/images/laika-97e23a1d73c5b42db452b83eff5b98bc.svg",revision:"p5k2bV1wyLl0Wf21PdmSs"},{url:"/_next/static/images/logo hamburguesa-1c1caf1a72eb7653dd261419a1bfc8c5.png",revision:"p5k2bV1wyLl0Wf21PdmSs"},{url:"/_next/static/images/logoperro-760e180f24e6cdc0829101c5a0d789e1.png",revision:"p5k2bV1wyLl0Wf21PdmSs"},{url:"/_next/static/images/mapa-554b9c6957996de9864264b9f9d997e6.svg",revision:"p5k2bV1wyLl0Wf21PdmSs"},{url:"/_next/static/images/nuevofondo-ef5a83a4b1724d5b8ff7a3d2da96c16c.jpg",revision:"p5k2bV1wyLl0Wf21PdmSs"},{url:"/_next/static/images/paseador1-bbd8a0039ba5d705e461fec61d81ecfa.svg",revision:"p5k2bV1wyLl0Wf21PdmSs"},{url:"/_next/static/images/paseador2-86e66132ee1a31a27c1a2ff358ba420e.svg",revision:"p5k2bV1wyLl0Wf21PdmSs"},{url:"/_next/static/images/paseador3-21f4524a1d4be6677ca42dd06e365a63.svg",revision:"p5k2bV1wyLl0Wf21PdmSs"},{url:"/_next/static/images/paseador4-c75f671089c531f9bcd1da684011d6fc.svg",revision:"p5k2bV1wyLl0Wf21PdmSs"},{url:"/_next/static/images/perfilperro-6b466b489a4ae7ffab6c46ca344ae550.svg",revision:"p5k2bV1wyLl0Wf21PdmSs"},{url:"/_next/static/images/perfilperro2-0b1f1c17139cc171afc6a4b6bc1a358a.svg",revision:"p5k2bV1wyLl0Wf21PdmSs"},{url:"/_next/static/images/perro2-77d03e57704fb887d8a802159cf5651e.svg",revision:"p5k2bV1wyLl0Wf21PdmSs"},{url:"/_next/static/images/señora1-1683145140e8228f71974d02743216d8.png",revision:"p5k2bV1wyLl0Wf21PdmSs"},{url:"/_next/static/images/señora2-1b3623f294d8d512f24a95a54ee9a4fb.png",revision:"p5k2bV1wyLl0Wf21PdmSs"},{url:"/_next/static/images/señora3-f37c3ea37505d065442740cccf87713e.png",revision:"p5k2bV1wyLl0Wf21PdmSs"},{url:"/_next/static/images/spa-356746b6e8718cddc1d99815af3e27fc.svg",revision:"p5k2bV1wyLl0Wf21PdmSs"},{url:"/_next/static/images/tendencia1-4efdd8090083fe87adf471ef6f202dc4.svg",revision:"p5k2bV1wyLl0Wf21PdmSs"},{url:"/_next/static/images/tendencia3-ae6ba5e75cad32b817ff409932a680c7.svg",revision:"p5k2bV1wyLl0Wf21PdmSs"},{url:"/_next/static/images/tendencia4-0d18a1aa92b4d5d768e40e1c4b7e9c68.svg",revision:"p5k2bV1wyLl0Wf21PdmSs"},{url:"/_next/static/images/tendencia5-7970c1d812c74db3b539d30da4c6383c.svg",revision:"p5k2bV1wyLl0Wf21PdmSs"},{url:"/_next/static/images/tendencia6-86bf023d6c1104c6b251e30f57da83cd.svg",revision:"p5k2bV1wyLl0Wf21PdmSs"},{url:"/_next/static/images/tendencia7-f46781bd11104112777914427964b458.svg",revision:"p5k2bV1wyLl0Wf21PdmSs"},{url:"/_next/static/images/tendencia8-5a7c3c8ac2089f230c6bd0c3e41e04ba.svg",revision:"p5k2bV1wyLl0Wf21PdmSs"},{url:"/_next/static/images/veterinariotendencia-c92f3e3a9152287b99352470a821735f.svg",revision:"p5k2bV1wyLl0Wf21PdmSs"},{url:"/_next/static/media/BebasNeue-Regular.147b8a37.ttf",revision:"p5k2bV1wyLl0Wf21PdmSs"},{url:"/_next/static/media/Grupo 409.c0affd29.png",revision:"p5k2bV1wyLl0Wf21PdmSs"},{url:"/_next/static/media/Montserrat-SemiBold.8b46d63e.ttf",revision:"p5k2bV1wyLl0Wf21PdmSs"},{url:"/_next/static/media/fondoparalogin.e610acf1.jpg",revision:"p5k2bV1wyLl0Wf21PdmSs"},{url:"/_next/static/media/fondoparaloginabajo.1a0f3931.jpg",revision:"p5k2bV1wyLl0Wf21PdmSs"},{url:"/_next/static/media/hoverhuellas.7a1f56b4.jpg",revision:"p5k2bV1wyLl0Wf21PdmSs"},{url:"/_next/static/p5k2bV1wyLl0Wf21PdmSs/_buildManifest.js",revision:"p5k2bV1wyLl0Wf21PdmSs"},{url:"/_next/static/p5k2bV1wyLl0Wf21PdmSs/_middlewareManifest.js",revision:"p5k2bV1wyLl0Wf21PdmSs"},{url:"/_next/static/p5k2bV1wyLl0Wf21PdmSs/_ssgManifest.js",revision:"p5k2bV1wyLl0Wf21PdmSs"},{url:"/favicon.ico",revision:"21b739d43fcb9bbb83d8541fe4fe88fa"},{url:"/favicon3.ico",revision:"21b739d43fcb9bbb83d8541fe4fe88fa"},{url:"/faviconp.ico",revision:"f5104e96e95185a752ab7b6ccc047c9a"},{url:"/icon-192x192.png",revision:"a977049e17157c01252d5caa94a77444"},{url:"/icon-256x256.png",revision:"73a94da013dd84679145a53114fdd3ff"},{url:"/icon-384x384.png",revision:"f1a2ae8800723e14340d0e35a1015019"},{url:"/icon-512x512.png",revision:"508ce437c700106c08b5847b0959f7e0"},{url:"/img/Trazado 1498.svg",revision:"e8dc1274cc621e5715deae8f92dc1373"},{url:"/img/botonHuella.svg",revision:"8f211a0e99972386a679b3bd7562fb12"},{url:"/img/burger.svg",revision:"1edffdad0a0ef067b305e244670d4f2c"},{url:"/img/circle-1.svg",revision:"d87b9ebeb53826ec58e6b276130975e3"},{url:"/img/circle-2.svg",revision:"ba783d79a59b04d50fbac1560fc2842b"},{url:"/img/circle-3.svg",revision:"feccfee1ea1ab4dc30e8329fde186422"},{url:"/img/circle-4.svg",revision:"e42834878bf4383f663971af71f72818"},{url:"/img/circle-5.svg",revision:"69c47cbb90dfedb666156a04238d7651"},{url:"/img/circle-6.svg",revision:"d6a2ccf4899a98ea71850be69b072845"},{url:"/img/circle-7.svg",revision:"f16c1852b43fb57edf875355b103b54c"},{url:"/img/circuloFondo.svg",revision:"e584cad9eeb76d7717f09d613007221d"},{url:"/img/circuloexte2.svg",revision:"1743c4abd124441cfc09245428cdc4d8"},{url:"/img/circuloexterior.svg",revision:"5f828a42f7aaa195309498a7dc19e84c"},{url:"/img/huellaHumano.png",revision:"30ef51ed4be46ae3f0901d31df0caf19"},{url:"/img/huellaHumano.svg",revision:"dcd43c2701d81abf2c0094a185d8500c"},{url:"/img/icon-1.svg",revision:"81d960907c706e42374472e8e2cb7fd4"},{url:"/img/icon-2.svg",revision:"be09e64fe349637f2e37986e8f12ca40"},{url:"/img/icon-3.svg",revision:"812470f5ff251bb7b7cd30e551694f35"},{url:"/img/icon-4.svg",revision:"224f3bc0ee06cc1582ad611a687c547f"},{url:"/img/profundidad.svg",revision:"d3093b11ff6b9b4dc7979c45adee2df3"},{url:"/logopinina.png",revision:"cab62cebf2647ef8a0209088cf3cb419"},{url:"/manifest.json",revision:"7e6f4f61897f5dba2b07b0ac1ab517d0"},{url:"/vercel.svg",revision:"26bf2d0adaf1028a4d4c6ee77005e819"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:i,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
