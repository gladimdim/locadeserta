'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "6691e0d7c76b3607c1aeae65c99ee8b8",
"assets/assets/stories/after_the_battle.json": "0efd5c800d60123ac493c178b118b9eb",
"assets/assets/stories/fire_in_steppe.json": "d14e2994e9246c456943f57b1c9272e7",
"assets/assets/stories/hotinska_riznya.json": "db69d6adcf597faf4fd52d260180f065",
"assets/assets/stories/hunting_bears.json": "570adeb111f0a4062a010e27e218eed5",
"assets/assets/stories/kodak_night.json": "0ad253f16188e3506ba15abf120ee850",
"assets/assets/stories/krivava_pastka.json": "7b8871ca3f83e1931eedc4fa519b52d9",
"assets/assets/stories/last_battle_at_berestechko.json": "966bbc2227e20c2b9b16d75f8614793e",
"assets/assets/stories/pereprava.json": "642ca5a57c7420db0b6c76138dbd8659",
"assets/assets/stories/wolf_trap.json": "9658702b978630847d7b14036d736bac",
"assets/assets/stories/zustrich_v_stepu.json": "aab1e0551d45ba7e90c3b7ef6960e93c",
"assets/assets/story_catalog.json": "1cdc1c6462eee51d385280c0ca5e05ac",
"assets/FontManifest.json": "96792178f73389fd3a2f5e525cc36fb0",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/fonts/Raleway/Raleway-Black.ttf": "3469d4a9bf3b8f9db8f3e5c69e3fce8e",
"assets/fonts/Raleway/Raleway-Bold.ttf": "2f99a85426a45e0c7f8707aae53af803",
"assets/fonts/Raleway/Raleway-Regular.ttf": "84abe14c9756256a4b91300ba3e4ec62",
"assets/fonts/Roboto/Roboto-Bold.ttf": "7c18188784f21915f42a5b3bc9d91e20",
"assets/fonts/Roboto/Roboto-Regular.ttf": "18d44f79b3979ec168862093208c6d7d",
"assets/images/background/boat/0.jpg": "fec7cb1d460f57945b3b6769be2e6735",
"assets/images/background/boat/1.jpg": "0f2da151a68466baa0cfde198f63184e",
"assets/images/background/boat/10.jpg": "d5bede6fee8f6e13ff90ea6d73648f7e",
"assets/images/background/boat/11.jpg": "180ad81225645a1b05e5c00e007848ef",
"assets/images/background/boat/12.jpg": "fa968396ef4a858453554e46592992b4",
"assets/images/background/boat/13.jpg": "20c65f7e9cd6481d007b1ce789512484",
"assets/images/background/boat/14.jpg": "5372cc80fcb69bdae4b4657e97cde315",
"assets/images/background/boat/15.jpg": "54faf36f237ee47de43939b125bef67e",
"assets/images/background/boat/16.jpg": "09b597a7ca23e8d9ee06a9d0c8c0e4f9",
"assets/images/background/boat/17.jpg": "3864466bc3c00f2613b32349e8e08465",
"assets/images/background/boat/18.jpg": "872253410cccf9f623a9a6c9a9b3fe10",
"assets/images/background/boat/2.jpg": "648a22b10b32db0fa6c393033e3576e6",
"assets/images/background/boat/3.jpg": "e2b217f761f7efd1576f5aadaac717e7",
"assets/images/background/boat/4.jpg": "fca5106a9d86c57f4d1f7035d0376369",
"assets/images/background/boat/5.jpg": "76ef6dc693f6aca38c34d47f683546d9",
"assets/images/background/boat/6.jpg": "91f36a675b373b1b561501341e7ce5c6",
"assets/images/background/boat/7.jpg": "b8df08d958dd13b2b29e2d960d6466de",
"assets/images/background/boat/8.jpg": "20508b23345700d553d0d067445a65a9",
"assets/images/background/boat/9.jpg": "6fdcf89bf47032a29aa7ba7773121d91",
"assets/images/background/boat/c_0.jpg": "e82bb5158ef54dc4e72bc35bf5921be7",
"assets/images/background/boat/c_1.jpg": "01fb02f65eb5bf08fab4ce78881482d0",
"assets/images/background/boat/c_10.jpg": "85101db9011492eeda986384a044ba10",
"assets/images/background/boat/c_11.jpg": "1142e3f0350a16426c8ede5b83876c9a",
"assets/images/background/boat/c_12.jpg": "820aa06ca2a988a672bb251865b87983",
"assets/images/background/boat/c_13.jpg": "71a45e75138f4050e1d1e4b8550d63ba",
"assets/images/background/boat/c_14.jpg": "6c4e5aeb6a5c18a8db6e3fc54ac5ff33",
"assets/images/background/boat/c_15.jpg": "313a81deb218af5202ff05b417c43dc0",
"assets/images/background/boat/c_16.jpg": "c584737765671d447954d2b1aaefdfbb",
"assets/images/background/boat/c_17.jpg": "85c5c77ec11208eca37f3d22d6280775",
"assets/images/background/boat/c_18.jpg": "67244a97e5fc493c577c162e5cf8c1c4",
"assets/images/background/boat/c_2.jpg": "2e8965526d42ade7b9135565edb11935",
"assets/images/background/boat/c_3.jpg": "646f37f81ef9a12faab010fcb77acdb0",
"assets/images/background/boat/c_4.jpg": "0aba370cc1bce9e2b871b64b020d8fa5",
"assets/images/background/boat/c_5.jpg": "826d21738f42b3613c3b1d4654b5171d",
"assets/images/background/boat/c_6.jpg": "e502aa4d0f9484d6ca225bf1395645bc",
"assets/images/background/boat/c_7.jpg": "07aff2f78b47762895acaace2f23caaf",
"assets/images/background/boat/c_8.jpg": "84e9d4ca3c7123d5f523cd41d68d2fb1",
"assets/images/background/boat/c_9.jpg": "b7c90d139ac65e816839b80148ae1764",
"assets/images/background/bulrush/0.jpg": "81278a60ffca14e0a2f85c1531c8e21b",
"assets/images/background/bulrush/1.jpg": "935e363ce4177ce013f3d4082f7401e8",
"assets/images/background/bulrush/10.jpg": "cdcc4a7889393de7276060753a9f0258",
"assets/images/background/bulrush/11.jpg": "803294e4beb6deccdb7bf622d6f539c6",
"assets/images/background/bulrush/2.jpg": "42a2953b3b94f79cde045bb0d5846c19",
"assets/images/background/bulrush/3.jpg": "edcfd216f631b7f2a53604d7c7f95211",
"assets/images/background/bulrush/4.jpg": "3287e4bc1f7a60cec982211af8b1c03a",
"assets/images/background/bulrush/5.jpg": "eb8a952f5c7ad36e7eede9761cce911a",
"assets/images/background/bulrush/6.jpg": "cdec7700c334147b23d18e2596178ae9",
"assets/images/background/bulrush/7.jpg": "8f3dc62883de1ae1caf140fbd8c1776d",
"assets/images/background/bulrush/8.jpg": "054ecc1074f0d2ef4aa59c8619cfc1a5",
"assets/images/background/bulrush/9.jpg": "4e5c0d11503582edd163dcb9deffd4bc",
"assets/images/background/bulrush/c_0.jpg": "f5300ee5f2ce92b4cd8b7379129fa327",
"assets/images/background/bulrush/c_1.jpg": "faafa36716a660ce850ddc78ed314d34",
"assets/images/background/bulrush/c_10.jpg": "c05b0c901eb3589a6d9605966f8aa56c",
"assets/images/background/bulrush/c_11.jpg": "50994d40d880cebaa4770f0db6589457",
"assets/images/background/bulrush/c_2.jpg": "3eb71b46e82e411f5438e4d85893a5e3",
"assets/images/background/bulrush/c_3.jpg": "73047c4afaeb25c795dea898d4f40cb2",
"assets/images/background/bulrush/c_4.jpg": "0cabe501781c5bb736fe43beede50dd6",
"assets/images/background/bulrush/c_5.jpg": "121413c2392c486bc034a05377983210",
"assets/images/background/bulrush/c_6.jpg": "759f0fdf49ad9e94cd8234a2dbd7f5ff",
"assets/images/background/bulrush/c_7.jpg": "9fe700a4d151ddbf351853e9411939b1",
"assets/images/background/bulrush/c_8.jpg": "0ef52d7f204ccfce730466b4d9aea3e3",
"assets/images/background/bulrush/c_9.jpg": "9cdd4ed72cdadb02bd21b541f0303c46",
"assets/images/background/camp/0.jpg": "ccc6535f50696251cd415685fedb8cec",
"assets/images/background/camp/1.jpg": "9234157d8c6be2d3c2688f6b7714eb6d",
"assets/images/background/camp/10.jpg": "95e23ce62d8c0129538c47c506066cd3",
"assets/images/background/camp/11.jpg": "837fd938119fa6d0a05396b541475af7",
"assets/images/background/camp/12.jpg": "6e02113075daea642a1f0a300e534904",
"assets/images/background/camp/13.jpg": "51ba052a26279b97331c2c48b2938521",
"assets/images/background/camp/14.jpg": "57ca2018aff729b4ce7189e57895f23c",
"assets/images/background/camp/2.jpg": "bee0133d9d5db667df98857009dd7016",
"assets/images/background/camp/3.jpg": "0b09c0c39ed38cb1cd19fb49515dc645",
"assets/images/background/camp/4.jpg": "dfc28ba8979095a4e557479c73935af7",
"assets/images/background/camp/5.jpg": "c914661e13ac92a7f01b41f90bffbf43",
"assets/images/background/camp/6.jpg": "fef6639a01149296c35cfd33a87e9f21",
"assets/images/background/camp/7.jpg": "7cdff067ee4c631a096f44b34b405f7e",
"assets/images/background/camp/8.jpg": "8beebb03279884900985488b98028c47",
"assets/images/background/camp/9.jpg": "f9e6d94f0f2cf8bfb8e944d689191bae",
"assets/images/background/camp/c_0.jpg": "f671e44184940383f0d30b25476e9b16",
"assets/images/background/camp/c_1.jpg": "0437765ac9be29a872c3101862ece8cb",
"assets/images/background/camp/c_10.jpg": "9b869f22ca82eb1d6848346234cf9ff1",
"assets/images/background/camp/c_11.jpg": "836d6808f3430eaf7b03ec3b82a72239",
"assets/images/background/camp/c_12.jpg": "2e8d7237bcf87f68fede1489d9b3de9e",
"assets/images/background/camp/c_13.jpg": "a27c3abf4f50f68a58f073318dcb9168",
"assets/images/background/camp/c_14.jpg": "a111e5e1d2298c302dabd4ec4a43a947",
"assets/images/background/camp/c_2.jpg": "502a1eb360c716f84fe2cd9b2e1f391a",
"assets/images/background/camp/c_3.jpg": "e9ea777d6b1b819e1e1bbd68a3d56ac0",
"assets/images/background/camp/c_4.jpg": "09328238fc0523941955ddc0f767a495",
"assets/images/background/camp/c_5.jpg": "ad52322c817677da8ee1e64cf0ef0601",
"assets/images/background/camp/c_6.jpg": "36dab3a66de1f9c966c14b1b9a3fab0f",
"assets/images/background/camp/c_7.jpg": "cf8e62aef68362d4dd85d97caf3f5f07",
"assets/images/background/camp/c_8.jpg": "38cb614b8605da590abba80d7177181b",
"assets/images/background/camp/c_9.jpg": "7155ff5babf6cf5fa2a24d730cb92b57",
"assets/images/background/cossack_0.jpg": "1a11633dad6bd62846bc34e51af99f67",
"assets/images/background/c_cossack_0.jpg": "0b0868a9d66c93442aed3243dc05e6fe",
"assets/images/background/forest/0.jpg": "fc8837fc0966feb2f16ed3d3b936b502",
"assets/images/background/forest/1.jpg": "9962e5797d5b0feb7a171fc36f50d20b",
"assets/images/background/forest/2.jpg": "5330616254b2eeac35011058d310ac55",
"assets/images/background/forest/3.jpg": "d1e7d74dccdc188f4ef7d4264a0e6bc1",
"assets/images/background/forest/4.jpg": "42938106df5811a96cda102e41f8a626",
"assets/images/background/forest/5.jpg": "4d72aceae637a0ecd227aef50a0f7fb3",
"assets/images/background/forest/6.jpg": "192b0a76a9400f98c366541641f38fb6",
"assets/images/background/forest/7.jpg": "d2b489d5fe8ac3d187ff38d415b9d131",
"assets/images/background/forest/8.jpg": "ba44f0de66b48d65fd4775bc9f021c47",
"assets/images/background/forest/9.jpg": "e408e11716f83bbe2b11b12a2ccc9571",
"assets/images/background/forest/c_0.jpg": "0ca1f18dd945594baf7d0490cb3633c5",
"assets/images/background/forest/c_1.jpg": "0dcfc07ee37e7ffec53a1df7947a90df",
"assets/images/background/forest/c_2.jpg": "6ad53a139df071689294a2d434084cb8",
"assets/images/background/forest/c_3.jpg": "d013cd9d9dfec750dba17855af8d5829",
"assets/images/background/forest/c_4.jpg": "c5270b93ae73a406b27b4db242fcc4d5",
"assets/images/background/forest/c_5.jpg": "f746dc40a118a70d815ff76904826b06",
"assets/images/background/forest/c_6.jpg": "c2855cf2eb8db7d049319ac033503d45",
"assets/images/background/forest/c_7.jpg": "103d5714ca66b822e23bc801e0f2a50e",
"assets/images/background/forest/c_8.jpg": "190cbeb2b971b45e91ad0937c6a8e909",
"assets/images/background/forest/c_9.jpg": "adbc8657f04b3dcfc88249f2354e9c57",
"assets/images/background/landing/0.jpg": "1e3714b68b383a7c3c1ab7860fb3bcb1",
"assets/images/background/landing/1.jpg": "dfce956c3eeb90e113e4e4f440cc5cf9",
"assets/images/background/landing/2.jpg": "e9b364d7447da47aec2623aa2f2f9196",
"assets/images/background/landing/3.jpg": "335e34666ecded69103b960c9eeae4ec",
"assets/images/background/landing/4.jpg": "0f98eb8bd259b815d242614bf61f48c6",
"assets/images/background/landing/5.jpg": "df2018cc7640464b6393a7f7679a7ddc",
"assets/images/background/landing/6.jpg": "b2e5476fee45c392f5b812efec96eebc",
"assets/images/background/landing/7.jpg": "e4a611caed3d90b757f3bb36d2519d27",
"assets/images/background/landing/c_0.jpg": "7361e0fe1958530d5d865c504d312d57",
"assets/images/background/landing/c_1.jpg": "754bab4e0cae3459444f35d054ad4714",
"assets/images/background/landing/c_2.jpg": "fa638ab99640c690607b9639c7dab599",
"assets/images/background/landing/c_3.jpg": "67b2a9d63294b87e13c58ccbac08786f",
"assets/images/background/landing/c_4.jpg": "1987f2c44aba6f4e2e2d1907603ca485",
"assets/images/background/landing/c_5.jpg": "5c400ceb6036f33d0c1709f55cdf9a66",
"assets/images/background/landing/c_6.jpg": "487daa391e1e9b4288656b3cb7fff51c",
"assets/images/background/landing/c_7.jpg": "291ec882329468dc5ed8df87e660b6bf",
"assets/images/background/river/0.jpg": "c3fd66e10ceb5ff10bc3a0911923c562",
"assets/images/background/river/1.jpg": "aa2454d02cc5a1e15aac1ceba23e8bd1",
"assets/images/background/river/10.jpg": "f1a6d708f4229b13b506e876ee94e737",
"assets/images/background/river/11.jpg": "5c8da1d6426271901c71537df0c8d50a",
"assets/images/background/river/12.jpg": "6d57ec2dda663aa26e6ac26d4325b1c4",
"assets/images/background/river/13.jpg": "5c6fcf08c29d4a2ec5b4eed0ef9a16fd",
"assets/images/background/river/14.jpg": "37a167f7645aa40618e696eb08450299",
"assets/images/background/river/15.jpg": "ed10bb42ae8a96e90ed8bd0d1d586c91",
"assets/images/background/river/16.jpg": "12b641aa1f523c55f24ba8251f89aa94",
"assets/images/background/river/17.jpg": "2169831d4c6e1518af5150860c9e69a7",
"assets/images/background/river/18.jpg": "061a922b65b8a30b3a18c7fee81d9eac",
"assets/images/background/river/19.jpg": "030ff5dad238e9aca4e0ed1ecc71d856",
"assets/images/background/river/2.jpg": "694ff60a5e183e41643ae8eab91fc055",
"assets/images/background/river/20.jpg": "19dcf31aa183bc48cb6c0a11b24c061a",
"assets/images/background/river/21.jpg": "409c6c15f38e244fed917fd53d00ec07",
"assets/images/background/river/3.jpg": "6bfe123011503d97ce6e3e0b44788eed",
"assets/images/background/river/4.jpg": "7256972176062e78c0b1d3442a3f05c7",
"assets/images/background/river/5.jpg": "698256e83ed703028492aaba4b232aee",
"assets/images/background/river/6.jpg": "5a2d5ffe22e212bd4c692c45249fb0fc",
"assets/images/background/river/7.jpg": "8b088691d5b3e786d2d9dea945ff101d",
"assets/images/background/river/8.jpg": "0c90807e1116401851cf625b0dc63f03",
"assets/images/background/river/9.jpg": "3ec4b5a91312ab5bf801997cb594a847",
"assets/images/background/river/c_0.jpg": "f41413fc19607e29186dc5efdc991cc8",
"assets/images/background/river/c_1.jpg": "ac8cad5930a6a97872e8c1c67cf23678",
"assets/images/background/river/c_10.jpg": "c7d75e3af440cf5d88ba8645483dfe10",
"assets/images/background/river/c_11.jpg": "c2c5eea9a8cf4172b7bd4b3292e5ff00",
"assets/images/background/river/c_12.jpg": "be7219d33d6e094f604244943902462b",
"assets/images/background/river/c_13.jpg": "b7accce497db6d67042566f8061e0d3c",
"assets/images/background/river/c_14.jpg": "8a4cf654788221443ab647f0311f46b2",
"assets/images/background/river/c_15.jpg": "8add9e35eae12fb590e52ba65c95db4f",
"assets/images/background/river/c_16.jpg": "a0caa585f3e5e9ff57a0632d5d68e925",
"assets/images/background/river/c_17.jpg": "694965f5dff370973a4d425e58cd7473",
"assets/images/background/river/c_18.jpg": "087efd2ed6d01cb463f3af856af66a5a",
"assets/images/background/river/c_19.jpg": "b8f67a291a1a7617e05d63f79b3d33d6",
"assets/images/background/river/c_2.jpg": "c9f57bb002cfd0e54ca632563e6033dd",
"assets/images/background/river/c_20.jpg": "34362373d73a8643dd5d7a0074fa599f",
"assets/images/background/river/c_21.jpg": "13ca0f466ba42d47624a4f9ace08311d",
"assets/images/background/river/c_3.jpg": "ffabad17dfc0655c71d12cf46ccf533e",
"assets/images/background/river/c_4.jpg": "24d8a33330462c04baa6a6d554e44b6e",
"assets/images/background/river/c_5.jpg": "f42da3641ff27fff2456bc3f73ab286e",
"assets/images/background/river/c_6.jpg": "02916db4b2ac0056f74fbcd736f4714c",
"assets/images/background/river/c_7.jpg": "268e6cf606e454b93a629557785b29c9",
"assets/images/background/river/c_8.jpg": "5c7f5675b7d5413ac1e54632665caa96",
"assets/images/background/river/c_9.jpg": "1b61c280392ddd0c53cad258bffbd683",
"assets/NOTICES": "595f4fd2476f5fc02b97414d6151518b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b14fcf3ee94e3ace300b192e9e7c8c5d",
"assets/packages/flutter_markdown/assets/logo.png": "67642a0b80f3d50277c44cde8f450e50",
"index.html": "bdb59328970caa2ff0f8e9e6da1be7b1",
"/": "bdb59328970caa2ff0f8e9e6da1be7b1",
"main.dart.js": "1d86bd5eeb913614e5cb93e3805b42c7",
"version.json": "f90442067ca003f5e4e207d31d0f1501"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
