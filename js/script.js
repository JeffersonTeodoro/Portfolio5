// =====================
// Fundo animado de linhas/flashes na index.html
// =====================
document.addEventListener('DOMContentLoaded', function () {
  let bg = document.querySelector('.bg-animated-bubbles');
  if (!bg) {
    bg = document.createElement('div');
    bg.className = 'bg-animated-bubbles';
    document.body.prepend(bg);
  }
  // Limpa linhas antigas
  bg.innerHTML = '';
  for (let i = 0; i < 24; i++) {
    const l = document.createElement('span');
    l.className = 'flash-line';
    l.style.left = Math.random() * 100 + 'vw';
    l.style.top = Math.random() * 100 + 'vh';
    l.style.width = (Math.random() * 120 + 60) + 'px';
    l.style.height = (Math.random() * 3.5 + 1.5) + 'px';
    l.style.background = 'linear-gradient(90deg, rgba(96,165,250,0.22) 0%, rgba(37,99,235,0.18) 100%)';
    l.style.borderRadius = '2px';
    const angle = Math.random() * 60 - 30;
    l.style.setProperty('--angle', angle + 'deg');
    l.style.animationDuration = (Math.random() * 8 + 8) + 's';
    l.style.animationDelay = (Math.random() * 8) + 's';
    bg.appendChild(l);
  }
});
// Redireciona para login.html se não estiver nela
if (!window.location.pathname.endsWith('login.html')) {
  if (!sessionStorage.getItem('portfolio_logged_in')) {
    window.location.href = 'login.html';
  }
}
// Ao fazer login com sucesso, marca sessão como logada
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('login-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      // ...existing code...
      if (!email.value.trim() || !password.value.trim()) {
        // ...existing code...
        return;
      }
      // ...existing code...
      sessionStorage.setItem('portfolio_logged_in', '1');
      setTimeout(() => {
        window.location.href = 'index.html';
      }, 1200);
    });
  }
});
// =====================
// Login Page Demo Script
// =====================
// Jefferson Teodoro - Portfólio

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('login-form');
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const message = document.getElementById('login-message');
  const togglePassword = document.querySelector('.toggle-password');
  if (togglePassword) {
    const eyeOpen = togglePassword.querySelector('.eye-open');
    const eyeClosed = togglePassword.querySelector('.eye-closed');
    togglePassword.addEventListener('click', () => {
      if (password.type === 'password') {
        password.type = 'text';
        eyeOpen.style.display = 'none';
        eyeClosed.style.display = 'block';
      } else {
        password.type = 'password';
        eyeOpen.style.display = 'block';
        eyeClosed.style.display = 'none';
      }
    });
  }
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      message.textContent = '';
      message.classList.remove('success');
      if (!email.value.trim() || !password.value.trim()) {
        message.textContent = 'Preencha todos os campos.';
        message.classList.remove('success');
        return;
      }
      message.textContent = 'Login realizado! Redirecionando...';
      message.classList.add('success');
      setTimeout(() => {
        window.location.href = 'index.html';
      }, 1200);
    });
  }
});
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
