document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    navToggle.classList.toggle('active');
  });

  // Close nav-links when clicking outside
  document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !navToggle.contains(e.target)) {
      navLinks.classList.remove('show');
      navToggle.classList.remove('active');
    }
  });

  // Toggle navLinks on resizing window
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      navLinks.classList.remove('show');
      navToggle.classList.remove('active');
    }
  });

  document.addEventListener('scroll', () => {
    const nav = document.querySelector('.nav');
    if (window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });
});

// for the mouse animaiton

document.addEventListener("mousemove", function(event) {
  var mouseX = event.pageX;
  var mouseY = event.pageY;

  var image = document.getElementById("alish-image");
  var halfWidth = image.width / 2;
  var halfHeight = image.height / 2;

  image.style.left = (mouseX - halfWidth) + "px";
  image.style.top = (mouseY - halfHeight) + "px";
});

// main.js
document.addEventListener('scroll', function() {
  const homeSection = document.querySelector('#home .cover-image');
  const scrollPosition = window.scrollY;

  // Adjust the speed by changing the divisor value
  homeSection.style.transform = `translateY(${scrollPosition / 1.5}px)`;
});

document.addEventListener('scroll', function() {
  const homeSection = document.querySelector('#home .arrow-box');
  const scrollPosition = window.scrollY;

  // Adjust the speed by changing the divisor value
  homeSection.style.transform = `translateY(${scrollPosition / 2}px)`;
});

// Add an event listener to the scroll-down anchor
document.querySelector('.scroll-down').addEventListener('click', function(e) {
  e.preventDefault();
  const aboutPage = document.querySelector('#about');
  const aboutPageTop = aboutPage.offsetTop;
  window.scrollTo({ top: aboutPageTop, behavior: 'smooth' });
});
