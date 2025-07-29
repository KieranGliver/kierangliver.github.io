function openModal(title, page) {
  const modal = document.getElementById('window-modal');
  const titleEl = document.getElementById('modal-title');
  const contentEl = document.getElementById('modal-content');

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

// eslint-disable-next-line no-unused-vars
function closeModal() {
  const modal = document.getElementById('window-modal');
  modal.style.display = 'none';
  location.hash = '';
}

document.querySelectorAll('.shortcut').forEach(shortcut => {
  shortcut.addEventListener('click', () => {
    const page = shortcut.dataset.page;
    const title = shortcut.querySelector('span').textContent;
    openModal(title, page);
  });
});

const closeBtn = document.querySelector(
  '#window-modal button[aria-label="Close"]'
);
closeBtn.addEventListener('click', () => {
  const modal = document.getElementById('window-modal');
  modal.style.display = 'none';
  location.hash = '';
});

window.addEventListener('load', () => {
  const hash = location.hash.slice(2);
  if (hash) {
    openModal(hash, hash.toLowerCase());
  }
});

document.addEventListener('mousemove', e => {
  const x = (e.clientX / window.innerWidth - 0.5) * 20;
  const y = (e.clientY / window.innerHeight - 0.5) * 20;

  const bg = document.getElementById('background-layer');
  bg.style.transform = `translate(${-x}px, ${-y}px) scale(1.05)`;
});
