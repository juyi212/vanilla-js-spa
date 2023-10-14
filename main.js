import App from "./src/app";
import { $ } from "./src/utils/querySelector";

document.addEventListener("DOMContentLoaded", () => {
  new App($("#app"));
});
