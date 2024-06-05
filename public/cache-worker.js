const addResourcesToCache = async (resources) => {
  const cache = await caches.open("portfolio-v2");
  await cache.addAll(resources);
};

const deleteCache = async (key) => {
  await caches.delete(key);
};

const deleteOldCaches = async () => {
  const cacheKeepList = ["portfolio-v2"];
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
      "/images/bg-square-luca.png",
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
