export const initServiceWorkers = async () => {
  if (!navigator.serviceWorker) return;

  try {
    await navigator.serviceWorker.register("/cache-worker.js");
  } catch (e) {
    console.error("Error while registering service worker", e);
  }
};
