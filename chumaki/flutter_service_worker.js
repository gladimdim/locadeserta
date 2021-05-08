'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "5f6dcf92ae94738bc4b9255faa096d74",
"index.html": "438d8a05c97f2b1155d525b925d3b0d0",
"/": "438d8a05c97f2b1155d525b925d3b0d0",
"main.dart.js": "e18e6fa5d8a3ea6e604a6d7a44024ae5",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "8728394e0e2c4ccc497cfc39164bd9c9",
"assets/images/ui/main_view_background.png": "819e16be77fefc2d2baa2abb249f601d",
"assets/images/ui/persons_on_a_map.png": "abd12e43f7c856c493cf3bb5a678c92f",
"assets/images/resources/wood/wood.png": "7ef19197b45be9e520e9c552cafb6e82",
"assets/images/resources/wood/wood_1.png": "503fc8c1d54c509b808ddb1d6d1cad3b",
"assets/images/resources/wood/wood_64.png": "1faa872fe05e0af47dbe7a14d2c01f76",
"assets/images/resources/wood/wood_0.png": "7ef19197b45be9e520e9c552cafb6e82",
"assets/images/resources/wood/wood_2.png": "19461efaac0f12c134412955b88dd05f",
"assets/images/resources/wood/wood_3.png": "84b15565fa09849c7dd3348251fe212c",
"assets/images/resources/wool/wool.png": "cc865e4cbb52e5db01fc99b191ecc919",
"assets/images/resources/wax/wax.png": "0ae9dc6d02dee2bd134e73867e84d1cb",
"assets/images/resources/ironore/ironore_0.png": "34626feb85cd1febaf400f7f0adefdcf",
"assets/images/resources/ironore/ironore_1.png": "0aab94f1f932ca948ba46269dbada003",
"assets/images/resources/ironore/ironore_3.png": "34626feb85cd1febaf400f7f0adefdcf",
"assets/images/resources/ironore/ironore_2.png": "d57fbd6606fb94207c59f7f2006e22f4",
"assets/images/resources/ironore/ironore_64.png": "7b2cd83978c073d38ae096d88fb1ac2f",
"assets/images/resources/ironore/ironore.png": "359e3fe341b555413ffef6979fb0b7ba",
"assets/images/resources/tobacco/tobacco.png": "d3fa5f3703c251488bcfed5ecb4333bb",
"assets/images/resources/powder/powder_3.png": "ff87c7ef9c8c76bbddd80a262ac88987",
"assets/images/resources/powder/powder_2.png": "ff87c7ef9c8c76bbddd80a262ac88987",
"assets/images/resources/powder/powder_0.png": "ff87c7ef9c8c76bbddd80a262ac88987",
"assets/images/resources/powder/powder_1.png": "ff87c7ef9c8c76bbddd80a262ac88987",
"assets/images/resources/powder/powder_64.png": "9da6bdd2bb01d22492f7e41bc64e6523",
"assets/images/resources/powder/powder.png": "ff87c7ef9c8c76bbddd80a262ac88987",
"assets/images/resources/metalparts/metalparts.png": "b65462169c95d43b85804fc2c91b42e8",
"assets/images/resources/metalparts/metalparts_64.png": "3e9aa2966572e8a80f5afd4caf79f99f",
"assets/images/resources/metalparts/metalparts_1.png": "40864dab7568e15f04ac184d240299f0",
"assets/images/resources/metalparts/metalparts_0.png": "b65462169c95d43b85804fc2c91b42e8",
"assets/images/resources/metalparts/metalparts_2.png": "89ce57720cd903120f409db482b00194",
"assets/images/resources/metalparts/metalparts_3.png": "0bcde0518f655a36ee0543d24f5bc2d0",
"assets/images/resources/fur/fur_2.png": "d6db6627fc387efde6171b1dc0a2346c",
"assets/images/resources/fur/fur_3.png": "d6db6627fc387efde6171b1dc0a2346c",
"assets/images/resources/fur/fur_1.png": "d6db6627fc387efde6171b1dc0a2346c",
"assets/images/resources/fur/fur_0.png": "d6db6627fc387efde6171b1dc0a2346c",
"assets/images/resources/fur/fur_64.png": "fd27a7c2ea9a7f8ba28dbdf32e039357",
"assets/images/resources/fur/fur.png": "d6db6627fc387efde6171b1dc0a2346c",
"assets/images/resources/planks/planks_1.png": "d03dd30e02b3214ff7189203d99f8f5b",
"assets/images/resources/planks/planks_3.png": "f903ce51586f92b324d761ca530aec0b",
"assets/images/resources/planks/planks_2.png": "07d4f5fec068e05def00d81ba00ffeda",
"assets/images/resources/planks/planks_64.png": "61339aaa0d06f4bcd1767d076a61e1f5",
"assets/images/resources/planks/planks.png": "3b739dcd54146070bdf86ffd2f9a41c9",
"assets/images/resources/gorilka/gorilka.png": "e6d096b276b95202f154847848c3c361",
"assets/images/resources/charcoal/charcoal_64.png": "8f2b8615ba72a0c7201b519b848c46b7",
"assets/images/resources/charcoal/charcoal.png": "f643b7689d8fd62537a0c1fbc116cb0d",
"assets/images/resources/charcoal/charcoal_1.png": "815272cbc58ea2069783de0d6e5e5ce9",
"assets/images/resources/charcoal/charcoal_0.png": "f643b7689d8fd62537a0c1fbc116cb0d",
"assets/images/resources/charcoal/charcoal_2.png": "49023266a8f6b65ab8496ef54b662457",
"assets/images/resources/charcoal/charcoal_3.png": "bf1d126536dc344982db04e469ef362d",
"assets/images/resources/silk/silk.png": "0313da8d39d7a712c0f6d361c99c1e59",
"assets/images/resources/amber/amber.png": "cc433a749aa93b3f5270493803343ef2",
"assets/images/resources/salt/salt.png": "839f8288d8159ea40ec903a26227a5f2",
"assets/images/resources/honey/honey.png": "efab421c54869764be81590f1e316bb7",
"assets/images/resources/money/money_3.png": "46e8999944828ba4e0d6c3f8d4a489a2",
"assets/images/resources/money/money_2.png": "a5823370e78915a8df55f5e4f69346ce",
"assets/images/resources/money/money_0.png": "435f14f87b73919df587248ca7d96131",
"assets/images/resources/money/money_1.png": "e70139111f4b2d742bc033f3bd478517",
"assets/images/resources/money/money.png": "435f14f87b73919df587248ca7d96131",
"assets/images/resources/money/money_64.png": "5a2ff4afeb3900e0e4d52e2dcf720192",
"assets/images/resources/grains/grains_64.png": "1778287ff454ef140b0675b293940504",
"assets/images/resources/grains/grains_2.png": "7b26e695e8afe83e3e6620f8cb03b02b",
"assets/images/resources/grains/grains.png": "59a60bb198cf077ada16fbe5356f6be0",
"assets/images/resources/grains/grains_0.png": "410c1a67b5b3e756141cd89507dc4053",
"assets/images/resources/grains/grains_1.png": "8ca1e70241b84b6818f15a865674b4b3",
"assets/images/resources/stone/stone_1.png": "bc9c95ce8db4d8dd3e0ef9c6e8d5c191",
"assets/images/resources/stone/stone_0.png": "e44482fb82895c9fdfc4bcaddd3cbd04",
"assets/images/resources/stone/stone_2.png": "8f0f18c9695d89c558bcf1bbbe9925f2",
"assets/images/resources/stone/stone_3.png": "3860d81e1850985565a3ac5b5fd14c30",
"assets/images/resources/stone/stone_64.png": "cd66fb6c415052a31ecd567f007f9a3b",
"assets/images/resources/stone/stone.png": "e44482fb82895c9fdfc4bcaddd3cbd04",
"assets/images/resources/bread/bread.png": "1a4d7a5d7db7755ff9b5f804d17cb18f",
"assets/images/resources/bread/bread_64.png": "1e1461523c70c6164a65111fb604a04a",
"assets/images/resources/bread/bread_2.png": "b1cb251703151fa85e97ba334709a182",
"assets/images/resources/bread/bread_3.png": "2f9c08d4477ed4587add205993482da1",
"assets/images/resources/bread/bread_1.png": "5b1c2c13bf068a587160625a27ef6a8c",
"assets/images/resources/bread/bread_0.png": "1a4d7a5d7db7755ff9b5f804d17cb18f",
"assets/images/resources/cloth/cloth.png": "08e7b58960f665ccc47ba4a00a06af4b",
"assets/images/resources/cannon/cannon_0.png": "04d73ea1779a3a81f5859c8803994090",
"assets/images/resources/cannon/cannon.png": "04d73ea1779a3a81f5859c8803994090",
"assets/images/resources/cannon/cannon_1.png": "6f5581d86f8aea468fe1d9a4810f1d77",
"assets/images/resources/cannon/cannon_3.png": "67c2d8eea2211ef4b2b726f97d52b07c",
"assets/images/resources/cannon/cannon_128.png": "8df030360b7d318d6892620301fef31f",
"assets/images/resources/cannon/cannon_2.png": "2e8bac2b84962cf039edaa1c7b0e2fef",
"assets/images/resources/horse/horse.png": "2ebaa601a2b1c0f7dfb9f7775951e169",
"assets/images/resources/horse/horse_64.png": "b5258f46b324b6a8b0a5acf06f57a7db",
"assets/images/resources/horse/horse_1.png": "50fd1cd08ec06ef9a8ce7711a1612df1",
"assets/images/resources/horse/horse_0.png": "2ebaa601a2b1c0f7dfb9f7775951e169",
"assets/images/resources/horse/horse_2.png": "31b3205ae34e80d7edc31ba511ba5c71",
"assets/images/resources/horse/horse_3.png": "c8a9766dc8235c2329e09cbe6aec94ba",
"assets/images/resources/fish/fish_0.png": "d28056520405141757d9658cb99be567",
"assets/images/resources/fish/fish_1.png": "cdf2c17f9772b829c891a81b75935179",
"assets/images/resources/fish/fish_3.png": "1f10b5a9463882bce6740e0131ddcbdd",
"assets/images/resources/fish/fish_64.png": "ff207342532a937b0c9d54d21db96165",
"assets/images/resources/fish/fish_2.png": "2547c9cf24161767cab24222b77b09a8",
"assets/images/resources/fish/fish.png": "d28056520405141757d9658cb99be567",
"assets/images/resources/firearm/firearm_0.png": "3523ef00821416d601ec861647fd6a8e",
"assets/images/resources/firearm/firearm_1.png": "eb50fc26903f214529f94d303b16fde3",
"assets/images/resources/firearm/firearm_3.png": "469b95c97f69d99e2202ea39921900d3",
"assets/images/resources/firearm/firearm_2.png": "fc0a1d073088db7d6cfcbf524904171e",
"assets/images/resources/firearm/firearm.png": "3523ef00821416d601ec861647fd6a8e",
"assets/images/resources/firearm/firearm_64.png": "fb1d8f0924ae937103fbae33b2010227",
"assets/images/cities/church.png": "bdbaa763390a38aa8af4431afcd3842c",
"assets/images/cities/sich.png": "4b0eba609809bd10adb78c00b1d36e73",
"assets/images/cities/avatars/pereyaslav.png": "d9cfa612fc7337c11d8b364a4d32f242",
"assets/images/cities/avatars/nizhin.png": "c57340b08ab40a670999eb76fba53893",
"assets/images/cities/avatars/chigirin.png": "3a1272cb3662493da6ec4fddaa2e6626",
"assets/images/cities/avatars/kaniv.png": "181b9cf4308ce53a524dc62f5a8d29bd",
"assets/images/cities/avatars/sich.png": "5e118264ecdf37c35468c99071c7eddd",
"assets/images/cities/avatars/kyiv.png": "7adb548c3015e2bb0d568528fce9cb91",
"assets/images/cities/avatars/ochakiv.png": "b9be2c5808583ffc820e834dad3e5a74",
"assets/images/cities/avatars/cherkasy.png": "8d5624242d7b4c3c129c81f935453dce",
"assets/images/boplan_map_huge.jpg": "fefbe113f18a83d3633dc5f8796add26",
"assets/images/wagon/cart_64.png": "210af9fb50404fdcb7713321c6f0f9a4",
"assets/images/wagon/cart.png": "b4e55858ae935c7935fda44786c4e63d",
"assets/images/wagon/wagon.png": "3fe8946e555d9bfad3a5a69b9462e023",
"assets/AssetManifest.json": "425cee32d7fa98979e964980c04f15b8",
"assets/NOTICES": "a90f99ce0ff45d0754aa7e6b291ac278",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1"
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
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
