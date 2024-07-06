const CURRENT_CACHE_KEY = "portfolio-v4";

const addResourcesToCache = async (resources) => {
  const cache = await caches.open(CURRENT_CACHE_KEY);
  await cache.addAll(resources);
};

const deleteCache = async (key) => {
  await caches.delete(key);
};

const deleteOldCaches = async () => {
  const cacheKeepList = [CURRENT_CACHE_KEY];
  const keyList = await caches.keys();
  const cachesToDelete = keyList.filter((key) => !cacheKeepList.includes(key));
  await Promise.all(cachesToDelete.map(deleteCache));
};

const getFromCacheFirst = async (request) => {
  const cacheResponse = await caches.match(request);

  if (cacheResponse) {
    return cacheResponse;
  }

  return fetch(request);
};

self.addEventListener("install", (event) => {
  event.waitUntil(
    addResourcesToCache([
      "/assets/astro.svg",
      "/assets/diagmonds.png",
      "/assets/docker.svg",
      "/assets/go.svg",
      "/assets/react.svg",
      "/assets/solid.svg",
      "/assets/svelte.svg",
      "/assets/typescript.svg",
      "/assets/rust.svg",
      "/fonts/Prompt-Bold.ttf",
      "/fonts/Prompt-Light.ttf",
      "/fonts/Prompt-Regular.ttf",
      "/fonts/Prompt-SemiBold.ttf",
    ]),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(deleteOldCaches());
});

self.addEventListener("fetch", async (event) => {
  event.respondWith(getFromCacheFirst(event.request));
});
