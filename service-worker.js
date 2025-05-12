const CACHE_NAME = 'pwa-cache-v1';
const urlsToPreCache = [
  '/',
  '/index.html',
  '/styles.css',
  '/scripts.js',
  '/faviconNew.ico', 
   '/manifest.json'
];

//  INSTALL: Precache critical files
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToPreCache);
    })
  );
  self.skipWaiting(); // Activate new SW immediately
});

// ACTIVATE: Cleanup old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      )
    )
  );
  self.clients.claim();
});

//  FETCH: Online-first, fallback to cache
self.addEventListener('fetch', event => {
  event.respondWith(
    isOnline()
      ? fetchAndCache(event.request)
      : fromCache(event.request)
  );
});

function isOnline() {
  return self.navigator.onLine;
}

function fetchAndCache(request) {
  return fetch(request)
    .then(response => {
      // Only cache successful responses
      if (response && response.status === 200 && response.type !== 'opaque') {
        const responseClone = response.clone();
        caches.open(CACHE_NAME).then(cache => {
          cache.put(request, responseClone);
        });
      }
      return response;
    })
    .catch(() => fromCache(request));
}

function fromCache(request) {
  return caches.match(request).then(response => {
    if (response) return response;

    // Fallback content types

    return new Response('Offline and not cached.', {
      status: 404,
      headers: { 'Content-Type': 'text/plain' }
    });
  });
}
// JavaScript Document
