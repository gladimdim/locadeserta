'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "3641ee9c377e125686b4e5b1824d06b6",
"index.html": "1b82743ba88495b30dd5f68572681f71",
"/": "1b82743ba88495b30dd5f68572681f71",
"main.dart.js": "9439455a0b395e71c36fa1166fe94384",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "a015eb128e91de93985a664cfe354640",
"assets/images/background/map_bw.png": "2c5ac1537cced24886863d8198806cdb",
"assets/images/background/map_squared.png": "1b83bb2bc90a79a8c0380ecab989a274",
"assets/images/buildings/home.png": "bdbaa763390a38aa8af4431afcd3842c",
"assets/images/resources/horse.png": "2ebaa601a2b1c0f7dfb9f7775951e169",
"assets/images/resources/boat.png": "6d6c226c5a6183f6a7798ddc2ea6d4e6",
"assets/images/resources/ore.png": "34626feb85cd1febaf400f7f0adefdcf",
"assets/images/resources/powder_128.png": "9da6bdd2bb01d22492f7e41bc64e6523",
"assets/images/resources/cart.png": "b4e55858ae935c7935fda44786c4e63d",
"assets/images/resources/firearm_128.png": "fb1d8f0924ae937103fbae33b2010227",
"assets/images/resources/cossack_128.png": "6b5ac33e91cb5c3a512249bd980c7492",
"assets/images/resources/grains_128.png": "1778287ff454ef140b0675b293940504",
"assets/images/resources/metalParts.png": "b65462169c95d43b85804fc2c91b42e8",
"assets/images/resources/cart_128.png": "210af9fb50404fdcb7713321c6f0f9a4",
"assets/images/resources/cossack.png": "f41fd551b07456b762c82d4e21d9752a",
"assets/images/resources/money_128.png": "5a2ff4afeb3900e0e4d52e2dcf720192",
"assets/images/resources/horse_128.png": "b5258f46b324b6a8b0a5acf06f57a7db",
"assets/images/resources/boat_128.png": "0d54ec26f0c0501da763eb30c16d8448",
"assets/images/resources/ore_128.png": "7b2cd83978c073d38ae096d88fb1ac2f",
"assets/images/resources/firearm.png": "3523ef00821416d601ec861647fd6a8e",
"assets/images/resources/wood.png": "7ef19197b45be9e520e9c552cafb6e82",
"assets/images/resources/fish_128.png": "ff207342532a937b0c9d54d21db96165",
"assets/images/resources/tower.png": "015f9abda9cfa31b480db8016dfaa632",
"assets/images/resources/stone.png": "e44482fb82895c9fdfc4bcaddd3cbd04",
"assets/images/resources/food.png": "1a4d7a5d7db7755ff9b5f804d17cb18f",
"assets/images/resources/stone_128.png": "cd66fb6c415052a31ecd567f007f9a3b",
"assets/images/resources/wood_128.png": "1faa872fe05e0af47dbe7a14d2c01f76",
"assets/images/resources/cannon.png": "04d73ea1779a3a81f5859c8803994090",
"assets/images/resources/imgui.ini": "2fc08d17046bced78f564ff0d3609fbb",
"assets/images/resources/money.png": "435f14f87b73919df587248ca7d96131",
"assets/images/resources/wall.png": "aa51b33ae3561b632d00e4fbeacaad15",
"assets/images/resources/cannon_128.png": "7c9b1a172a34a70fcda40afcfdc78d8f",
"assets/images/resources/charcoal_128.png": "8f2b8615ba72a0c7201b519b848c46b7",
"assets/images/resources/powder.png": "ff87c7ef9c8c76bbddd80a262ac88987",
"assets/images/resources/planks_128.png": "61339aaa0d06f4bcd1767d076a61e1f5",
"assets/images/resources/food_128.png": "1e1461523c70c6164a65111fb604a04a",
"assets/images/resources/fur_128.png": "fd27a7c2ea9a7f8ba28dbdf32e039357",
"assets/images/resources/planks.png": "18ca9b48891bb7109cd0e8c91e7c0835",
"assets/images/resources/charcoal.png": "f643b7689d8fd62537a0c1fbc116cb0d",
"assets/images/resources/grains.png": "59a60bb198cf077ada16fbe5356f6be0",
"assets/images/resources/metalParts_128.png": "3e9aa2966572e8a80f5afd4caf79f99f",
"assets/images/resources/fur.png": "95912afd8c89c858c7c9aab08a7eaa85",
"assets/images/resources/fish.png": "d28056520405141757d9658cb99be567",
"assets/AssetManifest.json": "bf95ab010105779911cbd51b11a40bf8",
"assets/NOTICES": "0bcc9a6853bc01f25291f9ef0840d37e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/assets/sounds/powder_gathered.mp3": "c07b82e7e43e396c5703fa27f28d0dae",
"assets/assets/sounds/grains_gathered.mp3": "944611943b877cd751b1e7ab4eed03aa",
"assets/assets/sounds/money_gathered.mp3": "01657b2ecee878c59306215eec2e92bf",
"assets/assets/sounds/mining.mp3": "c3f8df9d1ff3482b2c4a93c8d24e9991",
"assets/assets/sounds/wood_gathered.mp3": "c590fa80dbcab88c69c82b31d199b701",
"assets/assets/sounds/planks_gathered.mp3": "a4b6b3f0a5b77d053cee880363a4dbdd",
"assets/assets/sounds/stone_gathered.mp3": "c85a25204a4aefb7755a97aef9223c6d",
"assets/assets/sounds/reject.mp3": "5ce93967d5c41d41ea31b37489ace14d",
"assets/assets/sounds/cart_gathered.mp3": "1f52ed1183e8b528eb1a95316652d8c5",
"assets/assets/sounds/cossack_gathered.mp3": "168a4646b5afe07611f4f51fc87ade8a",
"assets/assets/sounds/horse_gathered.mp3": "f14c3fbb9aafbd42e24ef41cbd6b5dea",
"assets/assets/sounds/fish_gathered.mp3": "4d8fc61ecaca4494eea647b7f3377180",
"assets/assets/sounds/fur_gathered.mp3": "fb753aa488da98d5b7109e0ce85b8d8f",
"assets/assets/sounds/food_gathered.mp3": "bffcf8953dfd6e9af3d07b93377cc73e",
"assets/assets/sounds/firearm_gathered.mp3": "9dff2b658e3d56c81aa26f2780cb5852",
"assets/assets/sounds/metal_parts_gathered.mp3": "9c918e8972f260238b6abd1cf9e8fddf",
"assets/assets/sounds/boat_gathered.mp3": "fa73bc935daad8a588b638cd76c89377",
"assets/assets/sounds/cannon_gathered.mp3": "2ad756011c24cc08eefa8a0df2e5ce70",
"assets/google_fonts/Rubik-VariableFont_wght.ttf": "86eb98635233be43f682f26bad629f11",
"assets/google_fonts/TenorSans-Regular.ttf": "4dbbdcd595dcd961a2cab5bd9d026c80",
"assets/google_fonts/OFL.txt": "2d3c5170042b2d08a5ac28031f0cdd5e"
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
  for (var resourceKey of Object.keys(RESOURCES)) {
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
