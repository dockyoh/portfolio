export function animateBurger() {
  const burgerBarEl = document.querySelectorAll(".burger-bar");
  burgerBarEl.forEach((bar) => {
    bar.classList.toggle("animate-burger");
  });
}
