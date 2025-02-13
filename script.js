/* script.js */

// Hamburger menu toggle for mobile navigation
const hamburger = document.getElementById('hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('active');
  // Toggle hamburger and cross icons
  hamburger.querySelector('.hamburger-icon').classList.toggle('hide');
  hamburger.querySelector('.cross-icon').classList.toggle('hide');
});

// Hide cross icon initially
document.addEventListener('DOMContentLoaded', () => {
  const crossIcon = hamburger.querySelector('.cross-icon');
  if (crossIcon) {
    crossIcon.classList.add('hide');
  }
});

// Intersection Observer for scroll animations
const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

// Observe all elements with the 'animate' class
document.querySelectorAll('.animate').forEach(element => {
  observer.observe(element);
});

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetEl = document.querySelector(this.getAttribute('href'));
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Resume download function
function downloadPDF() {
  // Replace 'resume.pdf' with your resume file path
  window.open('resume.pdf', 'https://acrobat.adobe.com/link/track?uri=urn:aaid:scds:US:e1dae2f9-aee1-335a-b09b-b43bc5c09df8');
}
