self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('dyf-static').then(cache => cache.addAll([
      '/offline.html'
    ]))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match('/offline.html'))
  );
});