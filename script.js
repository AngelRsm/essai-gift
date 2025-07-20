document.addEventListener("DOMContentLoaded", () => {
  const polaroids = document.querySelectorAll(".polaroid");
  polaroids.forEach((el, i) => {
    el.style.animationDelay = `${i * 0.3}s`;
  });
});
