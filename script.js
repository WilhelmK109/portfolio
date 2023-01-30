const hamburgerMenu = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-Menu').forEach((navLink) => navLink.addEventListener('click', () => {
  hamburgerMenu.classList.remove('active');
  navMenu.classList.remove('active');
}));