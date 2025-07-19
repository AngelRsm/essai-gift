const heartsContainer = document.getElementById('hearts-container');
const confettiContainer = document.getElementById('confetti-container');

// 💜❤️ Coeurs qui tombent du haut dès l'ouverture
function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  const isViolet = Math.random() < 0.5;
  heart.classList.add(isViolet ? 'violet' : 'red');
  heart.textContent = isViolet ? '💜' : '❤️';
  heart.style.left = `${Math.random() * 100}vw`;
  heart.style.animationDuration = `${5 + Math.random() * 3}s`;
  heartsContainer.appendChild(heart);
  setTimeout(() => heart.remove(), 9000);
}

setInterval(createHeart, 350);

// 🎉 Confettis multicolores en continu
function showConfetti() {
  setInterval(() => {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');

    const colors = ['red', 'violet', 'blue', 'green', 'yellow', 'orange', 'pink'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.backgroundColor = color;

    confetti.style.left = `${Math.random() * 100}vw`;
    confetti.style.animationDuration = `${3 + Math.random() * 2}s`;
    confetti.style.top = `-10px`;

    confettiContainer.appendChild(confetti);

    setTimeout(() => confetti.remove(), 8000);
  }, 100);
}

showConfetti();
