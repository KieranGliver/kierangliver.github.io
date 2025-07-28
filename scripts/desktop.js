document.addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 20;
  const y = (e.clientY / window.innerHeight - 0.5) * 20;

  const bg = document.getElementById('background-layer');
  bg.style.transform = `translate(${-x}px, ${-y}px) scale(1.05)`;
});