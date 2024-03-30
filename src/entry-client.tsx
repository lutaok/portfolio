import { mount, StartClient } from "@solidjs/start/client";
import { initServiceWorkers } from "./init";

initServiceWorkers();

mount(() => <StartClient />, document.getElementById("app"));
