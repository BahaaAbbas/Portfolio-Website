// Theme
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = themeToggle.querySelector("i");

themeToggle.addEventListener("click", () => {
  const isDark = document.body.classList.toggle("dark");

  themeIcon.classList.replace(
    isDark ? "fa-moon" : "fa-sun",
    isDark ? "fa-sun" : "fa-moon"
  );

  localStorage.setItem("theme", isDark ? "dark" : "light");
});

window.addEventListener("DOMContentLoaded", () => {
  const Theme = localStorage.getItem("theme");

  if (Theme === "dark") {
    document.body.classList.add("dark");
    themeIcon.classList.replace("fa-moon", "fa-sun");
  }
});

// Mobile Menu
const mobileMenuBtn = document.getElementById("mobile-menu");
const navMenu = document.getElementById("nav-menu");

mobileMenuBtn.addEventListener("click", () => {
  mobileMenuBtn.classList.toggle("active");
  navMenu.classList.toggle("active");
});
