document.addEventListener("DOMContentLoaded", () => {
  const polaroids = document.querySelectorAll(".polaroid");
  polaroids.forEach((img, index) => {
    setTimeout(() => {
      img.style.opacity = "1";
      img.style.transform = "scale(1) translateY(0)";
    }, index * 200); // stagger effect
  });
});
