import { mount, StartClient } from "@solidjs/start/client";
import { initServiceWorkers } from "./init";

const root = document.getElementById("app");

if (!root) {
  throw new Error("root element must be present");
}

initServiceWorkers();

mount(() => <StartClient />, root);
