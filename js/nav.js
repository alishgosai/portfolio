document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");
  const currentPath = window.location.pathname;

  // Navbar toggle functionality
  navToggle.addEventListener("click", function () {
    navLinks.classList.toggle("show");
    navToggle.classList.toggle("active");

    // Toggle between hamburger and cross icons
    const isActive = navToggle.classList.contains("active");
    if (isActive) {
      navToggle.querySelector(".fa-bars").style.display = "none";
      navToggle.querySelector(".fa-times").style.display = "block";
    } else {
      navToggle.querySelector(".fa-bars").style.display = "block";
      navToggle.querySelector(".fa-times").style.display = "none";
    }
  });

  // Highlight active nav link
  document.querySelectorAll(".nav-links a").forEach((link) => {
    if (link.getAttribute("href") === currentPath) {
      link.classList.add("active");
    }
  });

  // Close nav-links when clicking outside
  document.addEventListener("click", function (e) {
    if (!navLinks.contains(e.target) && !navToggle.contains(e.target)) {
      navLinks.classList.remove("show");
      navToggle.classList.remove("active");
      navToggle.querySelector(".fa-bars").style.display = "block";
      navToggle.querySelector(".fa-times").style.display = "none";
    }
  });

  // Close nav-links on window resize
  window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
      navLinks.classList.remove("show");
      navToggle.classList.remove("active");
      navToggle.querySelector(".fa-bars").style.display = "block";
      navToggle.querySelector(".fa-times").style.display = "none";
    }
  });

  // Change nav background on scroll
  window.addEventListener("scroll", function () {
    const nav = document.querySelector(".nav");
    if (window.scrollY > 0) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  });
});
