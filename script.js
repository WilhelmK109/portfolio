/* ============ Mobile menu =========== */
const hamburgerMenu = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((link) => link.addEventListener('click', () => {
  hamburgerMenu.classList.remove('active');
  navMenu.classList.remove('active');
}));

/* ============ Validate contact form =========== */
const validateForm = document.querySelector('.form');
const errorMsg = document.querySelector('.msg');

validateForm.addEventListener('submit', (event) => {
  const emailValue = document.getElementById('email').value;
  if (emailValue.toLowerCase() !== emailValue) {
    errorMsg.classList.add('active');
    errorMsg.innerHTML = 'Not sent. Email address should be in lowercase letters';
    event.preventDefault();
  } else {
    errorMsg.textContent = "";
    validateForm.submit();
  }
});