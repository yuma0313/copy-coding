function toggleMenu() {
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const navMenu = document.querySelector(".nav-menu");
  const mask = document.querySelector(".mask");

  hamburgerMenu.classList.toggle("open");
  navMenu.classList.toggle("open");
  mask.classList.toggle("open");
}
