window.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".polaroid");
  images.forEach((img) => {
    img.addEventListener("animationend", () => {
      img.classList.add("floating");
    });
  });
});
