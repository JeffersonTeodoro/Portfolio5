'use strict';

const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.site-nav');

if (menuButton && navigation) {
  const closeMenu = () => {
    navigation.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Abrir menu');
    document.body.classList.remove('menu-open');
  };

  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Abrir menu' : 'Fechar menu');
    navigation.classList.toggle('is-open', !isOpen);
    document.body.classList.toggle('menu-open', !isOpen);
  });

  navigation.addEventListener('click', (event) => {
    if (event.target instanceof HTMLAnchorElement) closeMenu();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && navigation.classList.contains('is-open')) {
      closeMenu();
      menuButton.focus();
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 680) closeMenu();
  });
}

const certificateDialog = document.querySelector('.certificate-dialog');
const certificateFrame = certificateDialog?.querySelector('iframe');
const certificateTitle = certificateDialog?.querySelector('.dialog-title');
const dialogCloseButton = certificateDialog?.querySelector('.dialog-close');

if (certificateDialog && certificateFrame && certificateTitle && dialogCloseButton) {
  document.querySelectorAll('[data-certificate]').forEach((preview) => {
    preview.addEventListener('click', () => {
      certificateFrame.src = preview.dataset.certificate;
      certificateTitle.textContent = preview.dataset.title || 'Certificado';
      certificateDialog.showModal();
    });
  });

  dialogCloseButton.addEventListener('click', () => certificateDialog.close());
  certificateDialog.addEventListener('close', () => {
    certificateFrame.src = 'about:blank';
  });
}

const yearElement = document.querySelector('#current-year');
if (yearElement) yearElement.textContent = String(new Date().getFullYear());
