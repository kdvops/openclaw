self.addEventListener('install', event => {
  self.skipWaiting();
});

// Este archivo debe estar en la raíz pública (public/service-worker.js) y registrarse así:
// navigator.serviceWorker.register('/service-worker.js')
// Si usas Vite, asegúrate de copiarlo a /public y no a /src.
self.addEventListener('activate', event => {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.open('kdvops-cache').then(cache => {
      return cache.match(event.request).then(response => {
        return response || fetch(event.request).then(networkResponse => {
          cache.put(event.request, networkResponse.clone());
          return networkResponse;
        });
      });
    })
  );
});
