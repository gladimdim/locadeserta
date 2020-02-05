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
"/main.dart.js": "ebf500e6fc054444638bdc4350dfc03b",
"/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/manifest.json": "44975d1606efd10622470ac5f604d4a1",
"/assets/LICENSE": "a72268cd5642b967cbcfcad569ddb1bb",
"/assets/images/ui/arrow_right.png": "fd27b0b4e8ac342d73d84e08ed7f4ac8",
"/assets/images/resource_buildings/trappershouse_64.png": "fae2016f031019b84c5287a4e70ed345",
"/assets/images/resource_buildings/mill_64.png": "34c42a5be2702ebe14f7bdec4a488bc5",
"/assets/images/resource_buildings/stable.png": "bb568dfd779db29d80e621294a426caa",
"/assets/images/resource_buildings/river.png": "107aa1744188343bb902e3133bf24f35",
"/assets/images/resource_buildings/kurin_64.png": "847ea12f68eda0080b2c9c84c61efa81",
"/assets/images/resource_buildings/iron_mine_64.png": "9046523488a19e51d59d7adc201639a7",
"/assets/images/resource_buildings/quarry_64.png": "022099274dae965a4da0df51e664da8d",
"/assets/images/resource_buildings/mill.png": "b5dc4c1a43bcb775817be088b24f1e90",
"/assets/images/resource_buildings/forest.png": "f7e20f696dfc47f08b21190d7afa496f",
"/assets/images/resource_buildings/kurin.png": "03a17c22c2bef448fedc61284bdec6b9",
"/assets/images/resource_buildings/forest_64.png": "60635edfc8ac22c4e0977a9193c2f4a5",
"/assets/images/resource_buildings/field.png": "cbb2d29dd9ba1edb844d8d02249eb678",
"/assets/images/resource_buildings/quarry.png": "c1906858c4ec465d5111afcadc5454a5",
"/assets/images/resource_buildings/trappershouse.png": "f26b6b20b17737a6d14f69c08d5373fe",
"/assets/images/resource_buildings/field_64.png": "02078c021498c44a8969ae2183249d42",
"/assets/images/resource_buildings/river_64.png": "478e1301313c55c95947713d77252d72",
"/assets/images/resource_buildings/stable_64.png": "f39cfaaa7b88c899fab752ebd3a3bfe0",
"/assets/images/resource_buildings/iron_mine.png": "fb22daa9c3bd4a86da744d1c8231e63f",
"/assets/images/city_buildings/kurin_64.png": "5b4f1607e25120c4f340ed846a23f90c",
"/assets/images/city_buildings/wall_64.png": "bc064cd82fd899f1098840f2bd0c80fb",
"/assets/images/city_buildings/kurin.png": "9a5dcebe9e363e0c2b04dcd7863fef07",
"/assets/images/city_buildings/watch_tower_64.png": "8700ee9b1dcdccbd7c3f732e35091a5a",
"/assets/images/city_buildings/watch_tower.png": "bb08f2eeb8a9dcd45b2cacfa25300255",
"/assets/images/city_buildings/citizen_64.png": "1509a1ea0bca710c4f6fd4aefabed05e",
"/assets/images/city_buildings/wall.png": "cb111e89932af2fb250ed54b5e4cdd75",
"/assets/images/city_buildings/citizen.png": "3d9b4be46bd2b09b98954c3a5b510862",
"/assets/images/resources/horse.png": "08805ee0d43b0c91b4ee7f0e08ce619f",
"/assets/images/resources/fish_64.png": "50df5ce69f8875f00a9330668c86dd7e",
"/assets/images/resources/niter.png": "07bc3416b8d17f13411798a837a359c9",
"/assets/images/resources/kurin_64.png": "847ea12f68eda0080b2c9c84c61efa81",
"/assets/images/resources/horse_64.png": "0c4d3ddbaa9d71f7b778c085172f26ee",
"/assets/images/resources/niter_64.png": "75c6ef563f571424d691baaf3a1802d1",
"/assets/images/resources/kurin.png": "03a17c22c2bef448fedc61284bdec6b9",
"/assets/images/resources/firearm.png": "2207793345efc510a53d5bec54952957",
"/assets/images/resources/food_64.png": "4400635a39f5ed97a7637967b5539494",
"/assets/images/resources/wood.png": "bf320f06448ffa6cdc4de53f071010fa",
"/assets/images/resources/iron_ore.png": "f34296f6bf6f13d936d4c430949fb951",
"/assets/images/resources/stone_64.png": "86825e5bb98aa10e41a735f30969d19c",
"/assets/images/resources/stone.png": "6fa9cf8a4a2001272cb5ec12bf5a1f18",
"/assets/images/resources/food.png": "83e9ab3f5db52f33efeaa7382372ba5a",
"/assets/images/resources/money.png": "91f1c4d7e97b125fa0e573f06ca1a6e1",
"/assets/images/resources/money_64.png": "c28fff3ac40a2857e7ea57bb410c5fdc",
"/assets/images/resources/iron_ore_64.png": "944556df0a4750819f8a39774d07e004",
"/assets/images/resources/wood_64.png": "647a47152153b6e09f3098c9a262dc5f",
"/assets/images/resources/firearm_64.png": "bb2bee73374785aa6f7727548ca319f5",
"/assets/images/resources/fur_64.png": "d1ff36b160d0000e0538edae4be1310a",
"/assets/images/resources/fur.png": "f72a39afc139d3d439889e7d7b018deb",
"/assets/images/resources/fish.png": "02d00a26f5a9beaa0261f2358caa1e9d",
"/assets/AssetManifest.json": "8a72fba0600814397e2d93d480961aa0",
"/assets/FontManifest.json": "22e886cc98169b38b22808336711cc7f",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/fonts/Roboto/Roboto-Regular.ttf": "18d44f79b3979ec168862093208c6d7d",
"/assets/fonts/Roboto/Roboto-Bold.ttf": "7c18188784f21915f42a5b3bc9d91e20",
"/assets/fonts/Raleway/Raleway-Regular.ttf": "84abe14c9756256a4b91300ba3e4ec62",
"/assets/fonts/Raleway/Raleway-Black.ttf": "3469d4a9bf3b8f9db8f3e5c69e3fce8e",
"/assets/fonts/Raleway/Raleway-Bold.ttf": "2f99a85426a45e0c7f8707aae53af803"
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
