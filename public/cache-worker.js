const addResourcesToCache = async (resources) => {
  const cache = await caches.open("v1");
  await cache.addAll(resources);
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
      "/",
      "/images/bg-square-luca.png",
      "/assets/astro.svg",
      "/assets/diagmonds.png",
      "/assets/docker.svg",
      "/assets/go.svg",
      "/assets/react.svg",
      "/assets/solid.svg",
      "/assets/svelte.svg",
      "/assets/typescript.svg",
      "/fonts/Prompt-Bold.ttf",
      "/fonts/Prompt-Light.ttf",
      "/fonts/Prompt-Regular.ttf",
      "/fonts/Prompt-SemiBold.ttf",
    ]),
  );
});

self.addEventListener("fetch", async (event) => {
  event.respondWith(getFromCacheFirst(event.request));
});
