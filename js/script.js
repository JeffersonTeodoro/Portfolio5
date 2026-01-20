// =============================
// FUTURISTIC PORTFOLIO JS
// =============================
// - Menu mobile toggle
// - Animations on scroll
// - Smooth scroll
// =============================

// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const nav = document.querySelector('.nav');
menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// Close menu on link click (mobile)
document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
  });
});

// Animate project cards on scroll
const projectCards = document.querySelectorAll('.project-card');
const animateOnScroll = () => {
  projectCards.forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight - 80) {
      card.style.animationPlayState = 'running';
    }
  });
};
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Futuristic symbol orbit animation (handled by CSS keyframes)
// ...existing code...
