'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "a0883ee9cc4569884f1defb4cac080b1",
"assets/assets/city_names.json": "abfc1152f5a2afa6f9d727244c902168",
"assets/assets/sounds/event_add.mp3": "0bf025b38b381eb092c1bbc2917ddb1a",
"assets/assets/sounds/event_choicable_add.mp3": "6881bf070ba8c5a7555e84e890d06a80",
"assets/assets/sounds/event_choicable_complete.mp3": "af822329b6519b80e7aad7a5a13e85e9",
"assets/assets/sounds/event_complete.mp3": "65d523a9b579bec58d710f0380b862de",
"assets/assets/sounds/new_year.mp3": "05592ee0fadfa1ac9ba3c4e3c104bb75",
"assets/assets/sounds/task_complete.mp3": "c33de586a860243c12a6c209ccce0d7e",
"assets/FontManifest.json": "22e886cc98169b38b22808336711cc7f",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/fonts/Raleway/Raleway-Black.ttf": "3469d4a9bf3b8f9db8f3e5c69e3fce8e",
"assets/fonts/Raleway/Raleway-Bold.ttf": "2f99a85426a45e0c7f8707aae53af803",
"assets/fonts/Raleway/Raleway-Regular.ttf": "84abe14c9756256a4b91300ba3e4ec62",
"assets/fonts/Roboto/Roboto-Bold.ttf": "7c18188784f21915f42a5b3bc9d91e20",
"assets/fonts/Roboto/Roboto-Regular.ttf": "18d44f79b3979ec168862093208c6d7d",
"assets/images/city_buildings/church.png": "269852b9f4f516966d0cf9040c859e04",
"assets/images/city_buildings/church_64.png": "8678f1345ddbfdfc218133d473947b8e",
"assets/images/city_buildings/citizen.png": "3d9b4be46bd2b09b98954c3a5b510862",
"assets/images/city_buildings/citizen_64.png": "1509a1ea0bca710c4f6fd4aefabed05e",
"assets/images/city_buildings/house.png": "9a5dcebe9e363e0c2b04dcd7863fef07",
"assets/images/city_buildings/house_64.png": "5b4f1607e25120c4f340ed846a23f90c",
"assets/images/city_buildings/shooting_range.png": "de498cc93f25f665bfd3c58be3149e99",
"assets/images/city_buildings/shooting_range_64.png": "5695a4bae209606af621e7bb880a3359",
"assets/images/city_buildings/sich_0.png": "3a857816ea56499556915d8d7468c5b6",
"assets/images/city_buildings/sich_1.png": "a42f3f9c8949fe069fcc8a0b43b428de",
"assets/images/city_buildings/sich_2.png": "a02bf666c8bf3d87941f68628eb570a8",
"assets/images/city_buildings/sich_3.png": "e9fb1515a91633e1af81b12a20951298",
"assets/images/city_buildings/sich_64.png": "d51dc3901da0578e89c21063320d33eb",
"assets/images/city_buildings/tower.png": "ab04c9cac8bfc2bc259472b1536b1b50",
"assets/images/city_buildings/tower_64.png": "034561f8056e597ecbbd0535f551d1dd",
"assets/images/city_buildings/wall.png": "cb111e89932af2fb250ed54b5e4cdd75",
"assets/images/city_buildings/wall_64.png": "bc064cd82fd899f1098840f2bd0c80fb",
"assets/images/city_buildings/watch_tower.png": "bb08f2eeb8a9dcd45b2cacfa25300255",
"assets/images/city_buildings/watch_tower_64.png": "8700ee9b1dcdccbd7c3f732e35091a5a",
"assets/images/city_props/citizen.png": "3d9b4be46bd2b09b98954c3a5b510862",
"assets/images/city_props/citizen_64.png": "1509a1ea0bca710c4f6fd4aefabed05e",
"assets/images/city_props/cossack.png": "5a4298182c7eababe1b95d2cf3f17af9",
"assets/images/city_props/cossack_64.png": "08be1ab1c16f0898c5558e719fd2db69",
"assets/images/city_props/defense.png": "a3b6501459334b54c53299976d7ef726",
"assets/images/city_props/defense_64.png": "eb65f047169b04e8daf528f7eb235c21",
"assets/images/city_props/faith.png": "5e0577daa944e57e5167b35340d487fa",
"assets/images/city_props/faith_64.png": "7e52fde47b59da0144bf94c70e5f24ce",
"assets/images/city_props/glory.png": "561b0672bb5faab4951e10d79c5fd239",
"assets/images/city_props/glory_64.png": "252cbbafff4f931c813bff51f1801ea3",
"assets/images/events/failed_event/failed_event.png": "03df4798a4dc98cc818b0343afd862a2",
"assets/images/events/failed_event/failed_event_0.png": "648ede59a9ccf4b19d2f6d03fa6f088e",
"assets/images/events/failed_event/failed_event_1.png": "648a62396ae4b0220d6bdfb22d59240c",
"assets/images/events/failed_event/failed_event_128.png": "7cb8545dc1260963431cf41b3c65de07",
"assets/images/events/failed_event/failed_event_2.png": "27beb67f84d995e2d399b534e2262309",
"assets/images/events/failed_event/failed_event_3.png": "76aff286cc0ce0cc1dc9bbebc556881e",
"assets/images/events/failed_event/failed_event_64.png": "20d7c9f25a88bd98de2566164051b764",
"assets/images/events/merchant_visit/merchant_visit.png": "955a91c14dac00f9e5e386f0ba3e947b",
"assets/images/events/merchant_visit/merchant_visit_0.png": "77d73708715c7df901f0b5bad84dd7e3",
"assets/images/events/merchant_visit/merchant_visit_1.png": "2800ddcfab8c76f268c874f1fbe4ba8b",
"assets/images/events/merchant_visit/merchant_visit_128.png": "103d5da749435289bec506b1c2a831ce",
"assets/images/events/merchant_visit/merchant_visit_2.png": "535487dc0fe6aac9175721596ce53aae",
"assets/images/events/merchant_visit/merchant_visit_3.png": "3378e3c55b4ef928c62e0487d0947fb1",
"assets/images/events/successful_event/successful_event.png": "74bf7c22a9046dd570e24b75692bd649",
"assets/images/events/successful_event/successful_event_0.png": "74bf7c22a9046dd570e24b75692bd649",
"assets/images/events/successful_event/successful_event_1.png": "4af4c6a07d4fe9d3cb49670763469c05",
"assets/images/events/successful_event/successful_event_2.png": "3c2ab24dcb25338386f6cc0e96dc7376",
"assets/images/events/successful_event/successful_event_3.png": "8af6521acefa825af2b6dde796771d63",
"assets/images/events/tartar_attack_in_steppe/tartar_attack_in_steppe.png": "f3101fe78f32f463dd53a5745189bad8",
"assets/images/events/tartar_attack_in_steppe/tartar_attack_in_steppe_0.png": "f3101fe78f32f463dd53a5745189bad8",
"assets/images/events/tartar_attack_in_steppe/tartar_attack_in_steppe_1.png": "cddca270d222c7bfb7a6d625531a9854",
"assets/images/events/tartar_attack_in_steppe/tartar_attack_in_steppe_128.png": "dbde99a0813b1db1015ec9c79ed4f520",
"assets/images/events/tartar_attack_in_steppe/tartar_attack_in_steppe_2.png": "4efde9be93124c0dda73f993b7766022",
"assets/images/events/tartar_attack_in_steppe/tartar_attack_in_steppe_3.png": "5012d0130f86147badfd87fbe6d3e702",
"assets/images/resources/firearm.png": "90d29fd801ba296b8843585167232cbf",
"assets/images/resources/firearm_64.png": "60b2f0c847e6af33fd494f36c2832ed9",
"assets/images/resources/fish.png": "02d00a26f5a9beaa0261f2358caa1e9d",
"assets/images/resources/fish_64.png": "50df5ce69f8875f00a9330668c86dd7e",
"assets/images/resources/food.png": "4e20614f9e9bb07b78546f3f23de5b8f",
"assets/images/resources/food_64.png": "2da83275541a93aed6d554fdb55ae4b8",
"assets/images/resources/fur.png": "f72a39afc139d3d439889e7d7b018deb",
"assets/images/resources/fur_64.png": "d1ff36b160d0000e0538edae4be1310a",
"assets/images/resources/horse.png": "c3dc878fd08e2095dc708c274d3c44e2",
"assets/images/resources/horse_64.png": "7c2e454ca2fec08e32953db4e18e9a09",
"assets/images/resources/iron_ore.png": "1c9d6f30d35eb1b8632144b629f95285",
"assets/images/resources/iron_ore_64.png": "d59003a391f0598b08b29c360512ad8f",
"assets/images/resources/money.png": "0b4aca26fa88ab3fa9cf0f5b213214d6",
"assets/images/resources/money_64.png": "d8e729942b8b7c8ae70b48e5640422b1",
"assets/images/resources/powder.png": "befd31656060d95ab50e6148eaeacedf",
"assets/images/resources/powder_64.png": "b5df7908027a086924d641547cc21c01",
"assets/images/resources/stone.png": "6fa9cf8a4a2001272cb5ec12bf5a1f18",
"assets/images/resources/stone_64.png": "86825e5bb98aa10e41a735f30969d19c",
"assets/images/resources/wood.png": "bf320f06448ffa6cdc4de53f071010fa",
"assets/images/resources/wood_64.png": "647a47152153b6e09f3098c9a262dc5f",
"assets/images/resource_buildings/field.png": "cbb2d29dd9ba1edb844d8d02249eb678",
"assets/images/resource_buildings/field_64.png": "02078c021498c44a8969ae2183249d42",
"assets/images/resource_buildings/forest.png": "5c2466615d19b6b8f7eb1538177c4ae8",
"assets/images/resource_buildings/forest_64.png": "9c2fa1139d9ee485a79db411140bdd4b",
"assets/images/resource_buildings/iron_mine.png": "54cfea12407a18285e6ba75b8a80e1c0",
"assets/images/resource_buildings/iron_mine_64.png": "388d333664ce8e4b9df75b6b6048154d",
"assets/images/resource_buildings/mill.png": "b5dc4c1a43bcb775817be088b24f1e90",
"assets/images/resource_buildings/mill_64.png": "34c42a5be2702ebe14f7bdec4a488bc5",
"assets/images/resource_buildings/powder_cellar.png": "f58dfb56a763725f41c29633b68ccda4",
"assets/images/resource_buildings/powder_cellar_64.png": "0d61470bfc46645b99080e8086ad7fce",
"assets/images/resource_buildings/quarry.png": "94ead41ef2ffaf3ae6f942195beacf9f",
"assets/images/resource_buildings/quarry_64.png": "978af2c86e2bed91bb561874d9b7ceda",
"assets/images/resource_buildings/river.png": "37ea20282d89575c7ab65add432c0e9a",
"assets/images/resource_buildings/river_64.png": "05e79cb64e18c41933e706ad39fb69da",
"assets/images/resource_buildings/smith.png": "1b8291e3ef5c332cb3a78881e510a268",
"assets/images/resource_buildings/smith_64.png": "bbccde643bbe713d0e3de4a459c7e3b5",
"assets/images/resource_buildings/stable.png": "bb568dfd779db29d80e621294a426caa",
"assets/images/resource_buildings/stable_64.png": "f39cfaaa7b88c899fab752ebd3a3bfe0",
"assets/images/resource_buildings/trappershouse.png": "f26b6b20b17737a6d14f69c08d5373fe",
"assets/images/resource_buildings/trappershouse_64.png": "fae2016f031019b84c5287a4e70ed345",
"assets/images/ui/arrow_right.png": "fd27b0b4e8ac342d73d84e08ed7f4ac8",
"assets/NOTICES": "f8253da9efd5a6218653a033d641d38c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/flutter_markdown/assets/logo.png": "67642a0b80f3d50277c44cde8f450e50",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"favicons/android-icon-144x144.png": "ce78a4e571fd11b76b764254a5e2e378",
"favicons/android-icon-192x192.png": "d2aff134aba64b4d5e2491e69e5ec2fc",
"favicons/android-icon-36x36.png": "9c3d34849a162cb271c64a0efea0a124",
"favicons/android-icon-48x48.png": "8de66058eee640ac3474b09079699af8",
"favicons/android-icon-72x72.png": "c74bfcbed99c4c7aaf1841709abbece6",
"favicons/android-icon-96x96.png": "5cf1b7c00e4f6980b8441ceeb5e88ba3",
"favicons/apple-icon-114x114.png": "6ff76a9adfefe203b660de2fc1acf013",
"favicons/apple-icon-120x120.png": "e82d6cdb3558fb0818e7f04b60a6e813",
"favicons/apple-icon-144x144.png": "ce78a4e571fd11b76b764254a5e2e378",
"favicons/apple-icon-152x152.png": "dd763526d828e9210cc179f0437354b0",
"favicons/apple-icon-180x180.png": "06189f63c5127c39efd45c64fc449231",
"favicons/apple-icon-57x57.png": "54b44956eccbe39e52d587f9b4051944",
"favicons/apple-icon-60x60.png": "29835392eecaae6e3457f22f68774578",
"favicons/apple-icon-72x72.png": "c74bfcbed99c4c7aaf1841709abbece6",
"favicons/apple-icon-76x76.png": "71a484b015c606ff9b3d2dbe9e17b4c0",
"favicons/apple-icon-precomposed.png": "55402c7624190362d4120113fbe4a45f",
"favicons/apple-icon.png": "55402c7624190362d4120113fbe4a45f",
"favicons/browserconfig.xml": "97775b1fd3b6e6c13fc719c2c7dd0ffe",
"favicons/favicon-16x16.png": "b05c3672ea88732496afc8c77b850f79",
"favicons/favicon-32x32.png": "83e952207a9e7e2f7e0f5071a1190d89",
"favicons/favicon-96x96.png": "5cf1b7c00e4f6980b8441ceeb5e88ba3",
"favicons/favicon.ico": "f3c0fcc3b2f940b7901ab0bc68a81d89",
"favicons/manifest.json": "e50e6a1c9ed6452635d3211f39501e0d",
"favicons/ms-icon-144x144.png": "ce78a4e571fd11b76b764254a5e2e378",
"favicons/ms-icon-150x150.png": "0bc1819b639ca908d3af6fd4671b5d01",
"favicons/ms-icon-310x310.png": "37046d23226b46ae172f53a5e86dcfd5",
"favicons/ms-icon-70x70.png": "9df62e0f9601818c9ff4e008233f6eb4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "2bda3d471e94c5c1f221d54a0cbb9295",
"/": "2bda3d471e94c5c1f221d54a0cbb9295",
"main.dart.js": "a25340d59828af39382d64754967f87f",
"manifest.json": "54cbd107fea365ff4c20a64e16430d08"
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
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      // Provide a no-cache param to ensure the latest version is downloaded.
      return cache.addAll(CORE.map((value) => new Request(value, {'cache': 'no-cache'})));
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
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#')) {
    key = '/';
  }
  // If the URL is not the the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'no-cache'});
        return response || fetch(modifiedRequest).then((response) => {
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
  if (event.data == 'skipWaiting') {
    return self.skipWaiting();
  }

  if (event.message = 'downloadOffline') {
    downloadOffline();
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
