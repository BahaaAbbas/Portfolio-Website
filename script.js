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

// Hero name type animation
function heroType(ele, text, speed = 100) {
  let i = 0;
  ele.innerHTML = "";

  function type() {
    if (i < text.length) {
      ele.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }

  type();
}

window.addEventListener("load", () => {
  const heroName = document.querySelector(".hero-name");
  if (heroName) {
    const original = heroName.textContent;
    heroType(heroName, original, 200);
  }
});

// Counter
function counterAbout() {
  document.querySelectorAll(".stat").forEach((stat) => {
    const h4 = stat.querySelector("h4");
    const target = +h4.textContent.replace("+", "");
    let current = 0;

    const observer = new IntersectionObserver(([entry], obs) => {
      if (entry.isIntersecting) {
        const interval = setInterval(() => {
          current++;
          h4.textContent = current + "+";
          if (current >= target) clearInterval(interval);
        }, 100);
        obs.unobserve(stat);
      }
    });

    observer.observe(stat);
  });
}

counterAbout();

// Animate Content

const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, observerOptions);

function scrollAnimate() {
  document.querySelectorAll(".section-title").forEach((el, index) => {
    el.classList.add("appear");
    observer.observe(el);
  });

  document.querySelectorAll(".section-subtitle").forEach((el, index) => {
    el.classList.add("appear");
    observer.observe(el);
  });

  const aboutText = document.querySelector(".about-text");
  const aboutImage = document.querySelector(".about-image");

  if (aboutText) {
    aboutText.classList.add("slide-in-left");
    observer.observe(aboutText);
  }
  if (aboutImage) {
    aboutImage.classList.add("slide-in-right");
    observer.observe(aboutImage);
  }

  document.querySelectorAll(".stat").forEach((el, index) => {
    el.classList.add("scale-up");
    el.style.transitionDelay = `${index * 0.1}s`;
    observer.observe(el);
  });

  document.querySelectorAll(".skill-card").forEach((el, index) => {
    el.classList.add("appear");
    el.style.transitionDelay = `${index * 0.1}s`;
    observer.observe(el);
  });

  document.querySelectorAll(".project-card").forEach((el, index) => {
    el.classList.add("scale-up");
    el.style.transitionDelay = `${index * 0.2}s`;
    observer.observe(el);
  });

  const contactInfo = document.querySelector(".contact-info");
  const contactForm = document.querySelector(".contact-form");

  if (contactInfo) {
    contactInfo.classList.add("slide-in-left");
    observer.observe(contactInfo);
  }
  if (contactForm) {
    contactForm.classList.add("slide-in-right");
    observer.observe(contactForm);
  }

  document.querySelectorAll(".contact-item").forEach((el, index) => {
    el.classList.add("appear");
    el.style.transitionDelay = `${index * 0.1}s`;
    observer.observe(el);
  });
}

scrollAnimate();
