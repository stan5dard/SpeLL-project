'use strict';
const examples = [...document.querySelectorAll('.example')];
const motion = document.getElementById('motion-toggle');
let motionEnabled = !matchMedia('(prefers-reduced-motion: reduce)').matches;
let galleryVisible = false;
function updateMotion() {
  motion.textContent = motionEnabled ? 'Pause examples' : 'Play examples';
  motion.setAttribute('aria-pressed', String(motionEnabled));
  examples.forEach(video => {
    if (motionEnabled && galleryVisible && !document.hidden) video.play().catch(() => {});
    else video.pause();
  });
}
motion.addEventListener('click', () => { motionEnabled = !motionEnabled; updateMotion(); });
new IntersectionObserver(([entry]) => { galleryVisible = entry.isIntersecting; updateMotion(); }, {threshold: 0.05}).observe(document.querySelector('.result-grid'));
document.addEventListener('visibilitychange', updateMotion);
updateMotion();
const copy = document.getElementById('copy-citation');
copy.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(document.getElementById('bibtex').textContent);
    copy.textContent = 'Copied';
    document.getElementById('copy-status').textContent = 'BibTeX citation copied to clipboard.';
    setTimeout(() => { copy.textContent = 'Copy BibTeX'; }, 2200);
  } catch {
    const range = document.createRange();
    range.selectNodeContents(document.getElementById('bibtex'));
    const selection = window.getSelection(); selection.removeAllRanges(); selection.addRange(range);
    copy.textContent = 'Citation selected';
    document.getElementById('copy-status').textContent = 'Use your browser’s copy command to copy the selected citation.';
  }
});
