const burgerBarEl = document.querySelectorAll(".burger-bar");

export function animateBurger() {
  burgerBarEl.forEach((bar) => {
    bar.classList.toggle("animate-burger");
  });
}

export function showMobileDrawer() {
  const drawerEl = document.querySelector(".drawer-nav");
  drawerEl.classList.toggle("drawer-show");
}

export function drawerHide() {
  const drawerEl = document.querySelector(".drawer-nav");
  drawerEl.classList.remove("drawer-show");
  burgerBarEl.forEach((bar) => {
    bar.classList.remove("animate-burger");
  });
}
