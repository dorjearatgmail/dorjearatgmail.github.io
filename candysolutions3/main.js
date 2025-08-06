document.addEventListener('DOMContentLoaded', () => {
  // Hamburger menu functionality
  const hamburgerButton = document.getElementById('hamburger-button');
  const mobileMenu = document.getElementById('mobile-menu');

  if (hamburgerButton && mobileMenu) {
    hamburgerButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      mobileMenu.classList.toggle('flex');
    });
  }

  // Scroll animation functionality
  const animateElements = document.querySelectorAll('.animate-on-scroll');

  const observerOptions = {
    root: null, // viewport
    rootMargin: '0px',
    threshold: 0.1 // 10% of the element must be visible
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target); // Stop observing once animated
      }
    });
  }, observerOptions);

  animateElements.forEach(element => {
    observer.observe(element);
  });
});
