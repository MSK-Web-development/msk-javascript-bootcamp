const CACHE_NAME = "dino-v16";

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (CACHE_NAME !== cacheName) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        try {
          if (!response || response.status !== 200 || response.type !== "basic") {
            return response;
          }

          const resClone = response.clone();

          caches
            .open(CACHE_NAME)
            .then((cache) => {
              cache.put(event.request, resClone);
            })
            .catch((error) => {
              console.log("SW: error caching", error);
            });
        } catch (error) {
        } finally {
          return response;
        }
      })
      .catch(() => {
        caches.match(event.request).then((response) => response);
      })
  );
});
