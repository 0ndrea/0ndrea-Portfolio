document.addEventListener("DOMContentLoaded", function () {
  // Sticky Navigation: Get required elements
  const nav = document.getElementById("main-nav");
  const navTop = nav.offsetTop;

  // Back-to-Top: Get the back-to-top button element
  const backToTop = document.getElementById("back-to-top");

  // Sticky Navigation: Function to make nav sticky
  function stickyNav() {
    if (window.scrollY >= navTop) {
      // If scrolled past the original nav position, make it sticky
      document.body.classList.add("nav-is-sticky");
      nav.classList.add("sticky");
    } else {
      // If scrolled back up, remove sticky
      document.body.classList.remove("nav-is-sticky");
      nav.classList.remove("sticky");
    }
  }

  // Back-to-Top: Function to show/hide the back-to-top button
  function toggleBackToTop() {
    if (window.scrollY > 300) {
      // If scrolled down more than 300px, show the button
      backToTop.classList.add("show");
    } else {
      // If near the top, hide the button
      backToTop.classList.remove("show");
    }
  }

  // Event listener for scroll events
  window.addEventListener("scroll", function () {
    stickyNav(); // Handle sticky navigation
    toggleBackToTop(); // Handle back-to-top button visibility
  });

  // Smooth scrolling for all internal links (including back-to-top)
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
});
