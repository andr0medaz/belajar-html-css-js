import mobileNav from "./utils/mobile-nav.js";
import darkMode from "./utils/dark-mode.js";
import lazyLoading from "./utils/lazy-loading.js";

document.addEventListener("DOMContentLoaded", () => {
    mobileNav();
    darkMode();
    lazyLoading();
});