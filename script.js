// Dark/Light Theme Toggle

const toggleBtn = document.getElementById('theme-toggle');

const body = document.body;

toggleBtn.addEventListener('click', () => {

  body.classList.toggle('dark');

});

// Contact Form (Demo)

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {

  e.preventDefault();

  alert("Thank you! Your message has been sent.");

  form.reset();

});