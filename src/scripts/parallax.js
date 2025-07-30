export function setupParallax() {
  let parallaxTimeout;
  document.addEventListener('mousemove', e => {
    clearTimeout(parallaxTimeout);
    parallaxTimeout = setTimeout(() => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      const bg = document.getElementById('parallax-layer');
      if (bg) {
        bg.style.transform = `translate(${-x}px, ${-y}px) scale(1.05)`;
      }
    }, 10);
  });
}
