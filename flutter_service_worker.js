'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "290758fcd33721c19f29df3d975d2804",
"version.json": "d185493ea5650ee037416cbaea85900a",
"index.html": "82372e32811d763cf92d96bde64361d5",
"/": "82372e32811d763cf92d96bde64361d5",
"main.dart.js": "926d4e356f62b029051d79e5060779e0",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "22a1c3f29e34c41008aa1382ef4dcc04",
"assets/AssetManifest.json": "3ed9b94d71fc2769ea27e369674484b2",
"assets/NOTICES": "0fd1113fbb520bf98c3ac26ca4b9bbe6",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "a3aa4be0a33dddab5f56f0ac8a10bc59",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "0344ec8752780a468589164f17b70405",
"assets/fonts/MaterialIcons-Regular.otf": "21ac75a6dc2c949a0aa040b767bc9de0",
"assets/assets/cards/support/Flow%2520Artist%25202.png": "97880254239efb5c6b04bc5adb8077a7",
"assets/assets/cards/support/Flow%2520Artist%25201.png": "6b0597768ac940f6a665aac733d2a6a2",
"assets/assets/cards/support/Pizza%2520Man.png": "91d2a5827c11a2295b5de9716694fcf2",
"assets/assets/cards/support/SauceBoss.png": "e20ba07ced32be9d4b4df6d659ce25de",
"assets/assets/cards/support/Break%2520Dancer.png": "0f5bd8e335013838c3657c6df0538412",
"assets/assets/cards/support/Painter.png": "61ab50e278605f1d511f553b573debf3",
"assets/assets/cards/support/Security.png": "23f3e4609fff958502c7a7a1492ce75e",
"assets/assets/cards/artists/DJones%2520Demo.png": "1262ad1cac5c066cb3d3e018e100dcbb",
"assets/assets/cards/artists/JailBreak%2520Demo.png": "dda1a200b2318d89f3ee78f1f65bfd3a",
"assets/assets/cards/artists/Ahmad%2520The%2520Prophet.png": "90343a781752de3e4bf48debec6f8bcc",
"assets/assets/cards/artists/CMount%2520Card%2520Demo.png": "f68ec56e7ef2ea659a209622a36e6a8f",
"assets/assets/cards/artists/Frenzy%2520Demo.png": "863ef308ce498bfac0efd14efe1f1ce9",
"assets/assets/cards/artists/Sleach%2520Demo.png": "aed24c4979e2188589606bed19cde3cb",
"assets/assets/cards/artists/Ziiooiiz%2520Demo.png": "8ab8bc5bf5276dd37c83175f89e4875d",
"assets/assets/cards/artists/AuraChild%2520Card%2520Demo.png": "0631897d0a817f681b7936b6efcf5226",
"assets/assets/cards/artists/Stymulation%2520Card%2520Demo.png": "d121bef00b2c22b13bbe4b068c496f71",
"assets/assets/cards/items/Rose%2520Quartz.png": "9d0378da43e5b3a0453eb9f8052847f1",
"assets/assets/cards/items/Ear%2520Plugs.png": "3b941903ee54a6b83083bb63bfb18a05",
"assets/assets/cards/items/Led%2520Nunchaku.png": "96608a82a57ce87984cad136b05a393e",
"assets/assets/cards/items/Surreal%2520Painting.png": "b79de2d0600051a083ce33416928ca4c",
"assets/assets/cards/items/Impression%2520Painting.png": "acf0da3fcd433f122f55fd6b22e16ae5",
"assets/assets/cards/items/Wallet.png": "1aec71f7a10c204e226c1c616e507927",
"assets/assets/cards/items/Pop%2520Painting.png": "d793011357c84c827919d23e41dc176f",
"assets/assets/cards/items/House%2520Record.png": "d01f6283721bf2158fa86739c96f08b5",
"assets/assets/cards/items/Trap%2520Record.png": "4c3903251a99f58f8f9068d2f7dda88b",
"assets/assets/cards/items/Microphone%2520Item.png": "c35e5e449c825a19ba5ec76c51b2c56f",
"assets/assets/cards/items/Bucket%2520Hat.png": "8640f646cbf3fc861c8056a3a7d2ca4a",
"assets/assets/cards/items/Dubstep%2520Record.png": "0e63432e7202b6af72b54289812ef55e",
"assets/assets/cards/items/Hard%2520Drive%25203.png": "1154350e194a8b9b98f9f39d81725a07",
"assets/assets/cards/items/Hard%2520Drive%25202.png": "5f5d36b6450679801dfad1167df22b38",
"assets/assets/cards/items/Ruby.png": "c45b8a12f4d73761dd2d481539ef6605",
"assets/assets/cards/items/Traffic%2520Cone.png": "48142d16fc20a8aacab0df079099b36b",
"assets/assets/cards/items/led%2520gloves.png": "b6723403869a412b534ecfcd8157815c",
"assets/assets/cards/items/Hard%2520Drive%25201.png": "89df2f449070914b67cba0294a6034a0",
"assets/assets/cards/items/Back%2520Pack.png": "e22f3a37ae6878a4046dc5512482790c",
"assets/assets/cards/items/CMounts%2520Ears.png": "e214bf08dfd72753fa43c771f832ae34",
"assets/assets/cards/items/Ticket.png": "2269c655ba34d2945e1e4a983a42fe70",
"assets/assets/cards/items/led%2520staff.png": "533cdb7b38aa2db261398b7b6ace39af",
"assets/assets/cards/items/Led%2520Saber.png": "3aad13e6dd589b28df63fc14c6cfb716",
"assets/assets/cards/items/Lighter.png": "102d211f69f11e594b03ac8ef5ba6007",
"assets/assets/cards/items/Dnb%2520Record.png": "8d821dc73cacfd2f424b8ae2961bcd28",
"assets/assets/cards/items/Frenzys%2520Helmet.png": "9ff21ee266606196a090d179144635fe",
"assets/assets/cards/items/Artist%2520Cards.png": "44408fa977e5131bd882705e1416a0fa",
"assets/assets/cards/items/Led%2520Hoop.png": "2e57b8f923d38586575143552ea4c660",
"assets/assets/cards/items/Led%2520Fan.png": "42183f7dda21d7d2fb750f6612e11567",
"assets/assets/cards/items/Hand%2520Fan.png": "ec681ef23a087f098cbb06842a9eb2b1",
"assets/assets/cards/items/Headphones%2520Item.png": "9fd83261f2700982db7e0fa5d06a2de7",
"assets/assets/cards/items/Wrist%2520Band.png": "e7494b4651ed26097834af466cfa4e25",
"assets/assets/cards/items/CMounts%2520Tail.png": "7e27717005b5a3e647edb764c5c5fe9c",
"assets/assets/cards/items/Charger.png": "ebaa700a3c2a6c3194eefce191c71cae",
"assets/assets/cards/items/Expression%2520Painting.png": "84b7060175aa91346948b116630e6305",
"assets/assets/cards/items/Money.png": "5af04dac67ee839dc72636cfe5dc2d31",
"assets/assets/cards/items/VIP%2520Ticket.png": "76f277f092e470fbde008bcda1c8bddf",
"assets/assets/cards/items/Turn%2520Table.png": "134785a99f962abb0201a956d3c0c739",
"assets/assets/cards/items/Sprout.png": "dde0eb7915a7329d19bd29f13d3464a0",
"assets/assets/cards/items/Phone.png": "5f1bec7054741a7a858e6f41340cd402",
"assets/assets/cards/items/Fanny%2520Pack.png": "e07dee7a8cc8205253777e50f4949e11",
"assets/assets/cards/items/Glow%2520Sticks.png": "c209051db17330ab26e67b3e1d159183",
"assets/assets/cards/items/Pizza.png": "56b999ddd0a6f602e0d6121cd3c5e8a7",
"assets/assets/cards/items/Goggles.png": "07a4ed0a3733eaeddb58f73603b9ae78",
"assets/assets/cards/items/Sound%2520System.png": "d5e1dc68be2509bbc59a46247e106a01",
"assets/assets/cards/items/Plushy.png": "8e5575736021ae909e2a9fb12e0bf3b7",
"assets/assets/cards/items/Led%2520Poi.png": "1ce573bfffc641e95b0330dca3393252",
"assets/assets/cards/items/Amethyst.png": "b471535836395311fd64acfaa8c1694d",
"assets/assets/cards/items/Camera.png": "9679cf88c89a3b26cec8b8c73cdea22b",
"assets/assets/cards/items/Rail.png": "ecb85164e197b3a63fe76c745e6a9bca",
"assets/assets/cards/items/Flash%2520Drive.png": "9245bc0b843a68cde4824e75ce3b8e9a",
"assets/assets/cards/items/CDJ.png": "f073fee0ef52c7c0fde0e6986f0faad7",
"assets/assets/cards/items/Abstract%2520Painting.png": "4c287b35ba2b6622e4063787fdf72cde",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93"};
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
