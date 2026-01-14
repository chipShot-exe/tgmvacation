const CACHE_NAME = 'pwa-cache-v2'; // Incremented version
const PRECACHE_ASSETS = [
  '/',
  '/index.html',
  '/styles.css',
  '/scripts.js',
  '/faviconNew.ico', 
  '/manifest.json',
  '/LLSR.html',
  '/pagecommon.js',
  '/DisneylandCropped.jpg',
  '/fuelrod.jpg',
  '/Unofficial_guide.jpg'
];

// INSTALL: Using a more resilient install logic
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        // We use map to catch individual errors so one 404 doesn't kill the SW
        return Promise.all(
          PRECACHE_ASSETS.map(url => {
            return cache.add(url).catch(err => console.error(`Failed to cache ${url}:`, err));
          })
        );
      })
      .then(() => self.skipWaiting())
  );
});

// ACTIVATE: Standard cleanup
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// FETCH: Network-first with a timeout or fallback
self.addEventListener('fetch', event => {
  // Skip cross-origin requests and non-GET requests
  if (event.request.method !== 'GET' || !event.request.url.startsWith(self.location.origin)) {
    return;
  }

  event.respondWith(
    fetch(event.request)
      .then(networkResponse => {
        // Update the cache with the fresh version
        if (networkResponse.status === 200) {
          const responseClone = networkResponse.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseClone);
          });
        }
        return networkResponse;
      })
      .catch(() => {
        // Fallback to cache if network fails
        return caches.match(event.request).then(cachedResponse => {
          if (cachedResponse) {
            return cachedResponse;
          }
          // Optional: Return a specific offline page for HTML requests
          if (event.request.headers.get('accept').includes('text/html')) {
            return caches.match('/index.html');
          }
          return new Response('Offline content unavailable', { status: 503 });
        });
      })
  );
});
