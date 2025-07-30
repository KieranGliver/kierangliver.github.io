export function openModal(title, page) {
  const modal = document.getElementById('window-modal');
  const titleEl = document.getElementById('modal-title');
  const contentEl = document.getElementById('modal-content');

  if (!modal || !titleEl || !contentEl) return;

  titleEl.textContent = title;

  fetch(`/pages/${page}`)
    .then(res => res.text())
    .then(html => (contentEl.innerHTML = html))
    .catch(() => (contentEl.innerHTML = '<p>Could not load content.</p>'));

  location.hash = `#/${title}`;
  setTimeout(() => {
    modal.style.display = 'block';
  }, 50);
}

export function closeModal() {
  const modal = document.getElementById('window-modal');
  if (modal) modal.style.display = 'none';
  location.hash = '';
}
