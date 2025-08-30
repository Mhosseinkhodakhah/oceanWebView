'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "ad44e2276220db428937fd0b048983d3",
"version.json": "ea6a1596c74cfc71c36a1a525bad9135",
"index.html": "b1eb9ef6c903251129fbd8b41c03b84f",
"/": "b1eb9ef6c903251129fbd8b41c03b84f",
"main.dart.js": "fa2a540f0852fb5f2bfc259acf796134",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"favicon.png": "0761be05324e588870ea92ec68b51f57",
"icons/Icon-192.png": "d12f5f9681b09689e2feef72a9540edd",
"icons/Icon-maskable-192.png": "d12f5f9681b09689e2feef72a9540edd",
"icons/Icon-maskable-512.png": "a380812ac38d6233364e8914c77ec18a",
"icons/Icon-512.png": "a380812ac38d6233364e8914c77ec18a",
"manifest.json": "2a49c84d43d54818d7268b4303ee02a3",
"assets/AssetManifest.json": "88038b9c37966f9fb305efd8eabdc553",
"assets/NOTICES": "eb5f1e3aa862c84f8ef56aec90487286",
"assets/FontManifest.json": "81d2d0bdcfd04553ff61a420133b6e20",
"assets/AssetManifest.bin.json": "b13c4f3ec747066bd14fe20c76e2eaf1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "d7d83bd9ee909f8a9b348f56ca7b68c6",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "b33d36a752523fa72c064093901e947f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "0bfcc89b0c7c8c43c458ee6ad9277c3f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4769f3245a24c1fa9965f113ea85ec2a",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "c19444acc2c88ec8147dc45789d3f086",
"assets/fonts/MaterialIcons-Regular.otf": "f71af30c92449128a9e89e896feebdea",
"assets/assets/home/treasure.png": "74d6645160acfcb9548683fc0b079a60",
"assets/assets/home/8.png": "acc51fdfa824388940e4bc6d62bb3d5d",
"assets/assets/home/Key.png": "544cb2e10990a0a46909f95d3bc96179",
"assets/assets/home/treasure.gif": "da8790381d4f8ba8610c673642a70464",
"assets/assets/home/home_back.png": "852f031282aed6210bb64f79aa63fb9b",
"assets/assets/home/treasure_effect.png": "0f4ae2d940e322f09e8dc84eeff3e953",
"assets/assets/home/4.png": "46b941d3ad827c8e9ba7965e8e51512a",
"assets/assets/home/5.png": "06f3909f9d9de5229e930779f2aaeaa3",
"assets/assets/home/7.png": "fde840ce930c6a983b94d750e4218b16",
"assets/assets/home/6.png": "45abb1b6a344b1b6a4fbb4816f2f8f63",
"assets/assets/home/2.png": "86f1b365a62aaa7105f7927bbda5ff4a",
"assets/assets/home/3.png": "5a5b19e42f5d0842ca7bebbd49ee34cc",
"assets/assets/home/1.png": "e41923f0b2501e7da5c05367db8ecb35",
"assets/assets/images/arabic_certificate.png": "8d5350573c9e77c7d42faba849faa3fd",
"assets/assets/images/login_background.png": "abb103e4efd5f9a3b85f3b38da4e20e8",
"assets/assets/images/ocean_orange.png": "f9310d1c2c19a4914d8e0d0032679f77",
"assets/assets/images/certificate.png": "cea9a752c714524e2f1fa889a475ba22",
"assets/assets/images/learn_back.png": "e02e76b4823c7ce756259691493884d8",
"assets/assets/images/lock.png": "9e72f51b87cf2c4ef26bea40d2413327",
"assets/assets/images/persian_certificate.png": "722825e5a51b9406d74269e87b658230",
"assets/assets/images/ocean_blue.png": "6255f36a589c4e9ce56fc770f5331308",
"assets/assets/images/topic_back.png": "ef304acf60feb1749fe0fe73c9466d05",
"assets/assets/images/app_logo.png": "77d59331a705b78485ca209815eb639a",
"assets/assets/images/english_certificate.png": "1af0f6d6582ec1c5ac077b7163dbbce8",
"assets/assets/images/congratulations_back.png": "abb103e4efd5f9a3b85f3b38da4e20e8",
"assets/assets/images/quiz_back.png": "c8de08690c857094060f62c3d6d87697",
"assets/assets/images/large_app_logo.png": "d86432022d42baaa7893680c41c62db5",
"assets/assets/images/title_quiz.png": "4e75315401a18fbb2be23a6e71f00cb2",
"assets/assets/images/register_background.png": "6b9184447825123bde008002bddca43c",
"assets/assets/fonts/YekanBakh-Regular.ttf": "2cc89407b67c2a224551a27524742893",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
