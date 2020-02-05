'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "10545c2bf1c2f7ec5f0c3e99f745e0f4",
"/favicons/favicon-16x16.png": "b05c3672ea88732496afc8c77b850f79",
"/favicons/favicon.ico": "f3c0fcc3b2f940b7901ab0bc68a81d89",
"/favicons/apple-icon.png": "55402c7624190362d4120113fbe4a45f",
"/favicons/apple-icon-144x144.png": "ce78a4e571fd11b76b764254a5e2e378",
"/favicons/android-icon-192x192.png": "d2aff134aba64b4d5e2491e69e5ec2fc",
"/favicons/apple-icon-precomposed.png": "55402c7624190362d4120113fbe4a45f",
"/favicons/apple-icon-114x114.png": "6ff76a9adfefe203b660de2fc1acf013",
"/favicons/ms-icon-310x310.png": "37046d23226b46ae172f53a5e86dcfd5",
"/favicons/ms-icon-144x144.png": "ce78a4e571fd11b76b764254a5e2e378",
"/favicons/apple-icon-57x57.png": "54b44956eccbe39e52d587f9b4051944",
"/favicons/apple-icon-152x152.png": "dd763526d828e9210cc179f0437354b0",
"/favicons/ms-icon-150x150.png": "0bc1819b639ca908d3af6fd4671b5d01",
"/favicons/android-icon-72x72.png": "c74bfcbed99c4c7aaf1841709abbece6",
"/favicons/android-icon-96x96.png": "5cf1b7c00e4f6980b8441ceeb5e88ba3",
"/favicons/android-icon-36x36.png": "9c3d34849a162cb271c64a0efea0a124",
"/favicons/apple-icon-180x180.png": "06189f63c5127c39efd45c64fc449231",
"/favicons/favicon-96x96.png": "5cf1b7c00e4f6980b8441ceeb5e88ba3",
"/favicons/manifest.json": "b58fcfa7628c9205cb11a1b2c3e8f99a",
"/favicons/android-icon-48x48.png": "8de66058eee640ac3474b09079699af8",
"/favicons/apple-icon-76x76.png": "71a484b015c606ff9b3d2dbe9e17b4c0",
"/favicons/apple-icon-60x60.png": "29835392eecaae6e3457f22f68774578",
"/favicons/browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"/favicons/android-icon-144x144.png": "ce78a4e571fd11b76b764254a5e2e378",
"/favicons/apple-icon-72x72.png": "c74bfcbed99c4c7aaf1841709abbece6",
"/favicons/apple-icon-120x120.png": "e82d6cdb3558fb0818e7f04b60a6e813",
"/favicons/favicon-32x32.png": "83e952207a9e7e2f7e0f5071a1190d89",
"/favicons/ms-icon-70x70.png": "9df62e0f9601818c9ff4e008233f6eb4",
"/main.dart.js": "1e777a72230619d3103c2d9d8409e171",
"/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/manifest.json": "44975d1606efd10622470ac5f604d4a1",
"/assets/images/resource_buildings/trappershouse_64.png": "fae2016f031019b84c5287a4e70ed345",
"/assets/images/resource_buildings/mill_64.png": "34c42a5be2702ebe14f7bdec4a488bc5",
"/assets/images/resource_buildings/stable.png": "bb568dfd779db29d80e621294a426caa",
"/assets/images/resource_buildings/river.png": "37ea20282d89575c7ab65add432c0e9a",
"/assets/images/resource_buildings/iron_mine_64.png": "388d333664ce8e4b9df75b6b6048154d",
"/assets/images/resource_buildings/quarry_64.png": "978af2c86e2bed91bb561874d9b7ceda",
"/assets/images/resource_buildings/mill.png": "b5dc4c1a43bcb775817be088b24f1e90",
"/assets/images/resource_buildings/forest.png": "5c2466615d19b6b8f7eb1538177c4ae8",
"/assets/images/resource_buildings/forest_64.png": "9c2fa1139d9ee485a79db411140bdd4b",
"/assets/images/resource_buildings/field.png": "cbb2d29dd9ba1edb844d8d02249eb678",
"/assets/images/resource_buildings/quarry.png": "94ead41ef2ffaf3ae6f942195beacf9f",
"/assets/images/resource_buildings/trappershouse.png": "f26b6b20b17737a6d14f69c08d5373fe",
"/assets/images/resource_buildings/field_64.png": "02078c021498c44a8969ae2183249d42",
"/assets/images/resource_buildings/river_64.png": "05e79cb64e18c41933e706ad39fb69da",
"/assets/images/resource_buildings/stable_64.png": "f39cfaaa7b88c899fab752ebd3a3bfe0",
"/assets/images/resource_buildings/iron_mine.png": "54cfea12407a18285e6ba75b8a80e1c0",
"/assets/images/resources/wood.png": "bf320f06448ffa6cdc4de53f071010fa",
"/assets/images/resources/stone.png": "6fa9cf8a4a2001272cb5ec12bf5a1f18"
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
