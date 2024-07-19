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


// Function to display ASCII art logo and message
function displayLogoAndMessage() {
  // ASCII art for "AG"
  const logo = `
                                                                   
                                                                   
                                                                   
                                                                   
                                                                   
                                                                   
                                                                   
                                                                   
                         A             AAAAA                       
                        AA        AAAAAAAAAAAAAAA                  
                       AAAA    AAAAAAAAAAAAAAAAAAAAA               
                      AAAAA  AAAAAAAAAAAAAAAAAAAAAAAAA             
                     AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA             
                    AAAAAAAA AAAAAAAA         AAAAAA               
                    AAAAAAAAAAAAAAA              AA                
                   AAAAAAAAAA AAA                                  
                  AAAAAAAAAAA AA                                   
                 AAAAAAAA AAAA A          AAAAAAAAAAAAAAAA         
                AAAAAAAA  AAAA            AAAAAAAAAAAAAAAA         
               AAAAAAAAA   AAAA           AAAAAAAAAAAAAAAA         
              AAAAAAAAA     AAA           AAAAAAAAAAAAAAAA         
             AAAAAAAAAAAAAAAAAAA A                AAAAAAAA         
             AAAAAAAAAAAAAAAAAAA AAAA           AAAAAAAAA          
            AAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAA           
           AAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAA            
          AAAAAAAA              AA AAAAAAAAAAAAAAAAAA              
         AAAAAAAAA               A AAAAAAAAAAAAAAAA                
         AAAAAAAA                    AAAAAAAAAA                    
                                                                   
                                                                   
                                                                   
                                                                   
                                                                   
                                                                   
                                                                   
                                                                   
  `;

  // Message about Alish Gosai
  const message = "Hi, I'm Alish Gosai, a passionate web developer with a knack for creating interactive and engaging web experiences.";

  // Display logo and message in the console
  console.log(logo);
  console.log(message);
}

// Call the function to display the logo and message
displayLogoAndMessage();
