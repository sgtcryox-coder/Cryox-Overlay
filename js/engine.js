
(() => {
  const holder = document.querySelector(".embers");
  if (holder) {
    const count = Number(document.body.dataset.embers || 68);
    for (let i = 0; i < count; i++) {
      const ember = document.createElement("span");
      ember.className = "ember";
      const size = 1.1 + Math.random() * 4.2;
      ember.style.width = ember.style.height = `${size}px`;
      ember.style.left = `${Math.random() * 100}%`;
      ember.style.setProperty("--duration", `${8 + Math.random() * 16}s`);
      ember.style.setProperty("--delay", `${-Math.random() * 24}s`);
      ember.style.setProperty("--drift", `${-150 + Math.random() * 300}px`);
      holder.appendChild(ember);
    }
  }
})();
