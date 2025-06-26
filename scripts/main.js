import { animateBurger } from "./animation.js";
import {
  hideNavigation,
  renderProjects,
  showNavigation,
} from "./renderElements.js";

let lastScrollY = window.scrollY;
renderProjects();

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

document.querySelector(".burger").addEventListener("click", (event) => {
  animateBurger();
});
