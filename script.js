document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.getElementById("menu-icon");
  const navbar = document.getElementById("navbar");
  const header = document.getElementById("site-header");
  const rotateEl = document.getElementById("role-rotator");
  const themeToggle = document.getElementById("theme-toggle");
  const themeIcon = document.querySelector(".theme-icon");
  const roles = [
    "Full-Stack Experiences",
    "Clean User Interfaces",
    "Reliable Backend Systems",
    "Practical Product Ideas"
  ];

  const savedTheme = localStorage.getItem("portfolio-theme") || "dark";
  document.body.setAttribute("data-theme", savedTheme);
  if (themeIcon) {
    themeIcon.textContent = savedTheme === "dark" ? "☀️" : "🌙";
  }

  let roleIndex = 0;
  if (rotateEl) {
    setInterval(() => {
      roleIndex = (roleIndex + 1) % roles.length;
      rotateEl.textContent = roles[roleIndex];
    }, 2200);
  }

  if (menuIcon && navbar) {
    menuIcon.addEventListener("click", function () {
      navbar.classList.toggle("active");
    });

    navbar.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navbar.classList.remove("active");
      });
    });
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      const nextTheme = document.body.getAttribute("data-theme") === "dark" ? "light" : "dark";
      document.body.setAttribute("data-theme", nextTheme);
      localStorage.setItem("portfolio-theme", nextTheme);
      if (themeIcon) {
        themeIcon.textContent = nextTheme === "dark" ? "☀️" : "🌙";
      }
    });
  }

  if (header) {
    window.addEventListener("scroll", function () {
      header.classList.toggle("scrolled", window.scrollY > 20);
    });
  }

  const fadeEls = document.querySelectorAll(".fade-in");
  if (fadeEls.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    fadeEls.forEach((el) => observer.observe(el));
  }
});
