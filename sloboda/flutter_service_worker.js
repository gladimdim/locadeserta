'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "37e8953f2657d927f5c3bb7a93765e14",
"favicons/favicon-16x16.png": "b05c3672ea88732496afc8c77b850f79",
"favicons/favicon.ico": "f3c0fcc3b2f940b7901ab0bc68a81d89",
"favicons/apple-icon.png": "55402c7624190362d4120113fbe4a45f",
"favicons/apple-icon-144x144.png": "ce78a4e571fd11b76b764254a5e2e378",
"favicons/android-icon-192x192.png": "d2aff134aba64b4d5e2491e69e5ec2fc",
"favicons/apple-icon-precomposed.png": "55402c7624190362d4120113fbe4a45f",
"favicons/apple-icon-114x114.png": "6ff76a9adfefe203b660de2fc1acf013",
"favicons/ms-icon-310x310.png": "37046d23226b46ae172f53a5e86dcfd5",
"favicons/ms-icon-144x144.png": "ce78a4e571fd11b76b764254a5e2e378",
"favicons/apple-icon-57x57.png": "54b44956eccbe39e52d587f9b4051944",
"favicons/apple-icon-152x152.png": "dd763526d828e9210cc179f0437354b0",
"favicons/ms-icon-150x150.png": "0bc1819b639ca908d3af6fd4671b5d01",
"favicons/android-icon-72x72.png": "c74bfcbed99c4c7aaf1841709abbece6",
"favicons/android-icon-96x96.png": "5cf1b7c00e4f6980b8441ceeb5e88ba3",
"favicons/android-icon-36x36.png": "9c3d34849a162cb271c64a0efea0a124",
"favicons/apple-icon-180x180.png": "06189f63c5127c39efd45c64fc449231",
"favicons/favicon-96x96.png": "5cf1b7c00e4f6980b8441ceeb5e88ba3",
"favicons/manifest.json": "b58fcfa7628c9205cb11a1b2c3e8f99a",
"favicons/android-icon-48x48.png": "8de66058eee640ac3474b09079699af8",
"favicons/apple-icon-76x76.png": "71a484b015c606ff9b3d2dbe9e17b4c0",
"favicons/apple-icon-60x60.png": "29835392eecaae6e3457f22f68774578",
"favicons/browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"favicons/android-icon-144x144.png": "ce78a4e571fd11b76b764254a5e2e378",
"favicons/apple-icon-72x72.png": "c74bfcbed99c4c7aaf1841709abbece6",
"favicons/apple-icon-120x120.png": "e82d6cdb3558fb0818e7f04b60a6e813",
"favicons/favicon-32x32.png": "83e952207a9e7e2f7e0f5071a1190d89",
"favicons/ms-icon-70x70.png": "9df62e0f9601818c9ff4e008233f6eb4",
"main.dart.js": "a42a448a4119b73e0ee953ad685f1891",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "44975d1606efd10622470ac5f604d4a1",
"assets/LICENSE": "29f47e2bbfb10941df76cc14564205fc",
"assets/images/resource_buildings/stable.png": "bb568dfd779db29d80e621294a426caa",
"assets/images/resource_buildings/river.png": "107aa1744188343bb902e3133bf24f35",
"assets/images/resource_buildings/forest.png": "f7e20f696dfc47f08b21190d7afa496f",
"assets/images/resource_buildings/kurin.png": "03a17c22c2bef448fedc61284bdec6b9",
"assets/images/resource_buildings/field.png": "c1ac4e1509ead8de375dc972504c60b8",
"assets/images/resource_buildings/quarry.png": "c1906858c4ec465d5111afcadc5454a5",
"assets/images/resource_buildings/trappershouse.png": "f26b6b20b17737a6d14f69c08d5373fe",
"/assets/images/resource_buildings/mill.gif": "15c0c9adf1a6dbff23979b4f703b2df2",
"/assets/images/resource_buildings/iron_mine.png": "fb22daa9c3bd4a86da744d1c8231e63f",
"/assets/images/city_buildings/kurin.png": "03a17c22c2bef448fedc61284bdec6b9",
"/assets/images/city_buildings/watch_tower.png": "bc59ccbe40805ff15d23618ed0f5d8b7",
"/assets/images/city_buildings/wall.png": "3e1f0d00e3b850c056f5a8fc78ad7201",
"/assets/images/resources/horse.png": "08805ee0d43b0c91b4ee7f0e08ce619f",
"/assets/images/resources/niter.png": "07bc3416b8d17f13411798a837a359c9",
"/assets/images/resources/fur2.png": "f72a39afc139d3d439889e7d7b018deb",
"/assets/images/resources/kurin.png": "03a17c22c2bef448fedc61284bdec6b9",
"/assets/images/resources/firearm.png": "2207793345efc510a53d5bec54952957",
"/assets/images/resources/wood.png": "bf320f06448ffa6cdc4de53f071010fa",
"/assets/images/resources/iron_ore.png": "f34296f6bf6f13d936d4c430949fb951",
"/assets/images/resources/stone.png": "6fa9cf8a4a2001272cb5ec12bf5a1f18",
"/assets/images/resources/food.png": "83e9ab3f5db52f33efeaa7382372ba5a",
"/assets/images/resources/money.png": "91f1c4d7e97b125fa0e573f06ca1a6e1",
"/assets/images/resources/fur.png": "da7bc6395247fd19cfe79df248af76f7",
"/assets/images/resources/fish.png": "58d93497fc5f97d894988c28f6b62253",
"/assets/AssetManifest.json": "f3e690608e0194b57420a9755b34772b",
"/assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request, {
          credentials: 'include'
        });
      })
  );
});
