import { openModal, closeModal } from './modal.js';
import { setupParallax } from './parallax.js';

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('#shortcut').forEach(shortcut => {
    shortcut.addEventListener('click', () => {
      const page = shortcut.dataset.page;
      const title = shortcut.querySelector('span').textContent;
      openModal(title, page);
    });
  });

  const closeBtn = document.querySelector(
    '#window-modal button[aria-label="Close"]'
  );
  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  const hash = location.hash.slice(2);
  if (hash) {
    openModal(hash, hash.toLowerCase());
  }
});

setupParallax();
