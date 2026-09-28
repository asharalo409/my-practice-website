const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

document.querySelectorAll("#navLinks a").forEach(link => {
  link.addEventListener("click", () => navLinks.classList.remove("show"));
});

document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  document.getElementById("result").textContent =
    `Thanks, ${name}! This demo form works with JavaScript.`;
  this.reset();
});

document.getElementById("year").textContent = new Date().getFullYear();
