(() => {
  'use strict';

  const params = new URLSearchParams(window.location.search);
  const falseValues = new Set(['0', 'off', 'false', 'no']);
  const trueValues = new Set(['1', 'on', 'true', 'yes']);

  for (const layer of document.querySelectorAll('[data-layer]')) {
    const value = (params.get(layer.dataset.layer) || '').toLowerCase();

    if (falseValues.has(value)) {
      layer.hidden = true;
    } else if (trueValues.has(value)) {
      layer.hidden = false;
    }
  }

  const motion = (params.get('motion') || '').toLowerCase();
  if (trueValues.has(motion)) {
    document.getElementById('overlay')?.classList.add('motion-enabled');
  }

  const fireMotion = (params.get('firemotion') || '').toLowerCase();
  const fireMotionEnabled = trueValues.has(fireMotion)
    || (!falseValues.has(fireMotion) && !falseValues.has(motion));

  if (fireMotionEnabled) {
    document.getElementById('overlay')?.classList.add('fire-motion-enabled');
  }

  if (document.body.classList.contains('preview-mode')) {
    const fitPreview = () => {
      const scale = Math.min(window.innerWidth / 1920, window.innerHeight / 1080);
      const overlay = document.getElementById('overlay');

      if (overlay) {
        overlay.style.transform = `translate(-50%, -50%) scale(${scale})`;
      }
    };

    window.addEventListener('resize', fitPreview, { passive: true });
    fitPreview();
  }
})();
