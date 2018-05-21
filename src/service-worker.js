var cacheName = 'weatherPWA-step-5-1';
var filesToCache = ['/', '/index.js'];

self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('activate', function(event) {
  console.log('[ServiceWorker] Activate');
  event.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(
        keyList.map(function(key) {
          console.log('[ServiceWorker] Removing old cache', key);
          if (key !== cacheName) {
            return caches.delete(key);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', function(event) {
  console.log('[ServiceWorker] Fetch', event.request.url);
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
