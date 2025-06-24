import { hideNavigation, showNavigation } from "./renderElements.js";

let lastScrollY = window.scrollY;

window.addEventListener("scroll", (event) => {
  if (window.scrollY > lastScrollY) {
    if (window.scrollY >= 101) {
      hideNavigation();
    }
  } else {
    showNavigation();
  }
  lastScrollY = window.scrollY;
});
