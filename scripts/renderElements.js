const drawerEl = document.querySelector("header");

export function showNavigation() {
  drawerEl.classList.remove("header-drawer-hide");
}

export function hideNavigation() {
  drawerEl.classList.add("header-drawer-hide");
}
