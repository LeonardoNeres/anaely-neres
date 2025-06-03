const word = document.getElementById('word');
const speed = 1;

let posX = 50;  // Posição inicial X menor pra mobile
let posY = 50;  // Posição inicial Y menor pra mobile

let velX = speed;
let velY = speed;

const updatePosition = () => {
  const vw = window.innerWidth;
  const vh = window.innerHeight;

  const rect = word.getBoundingClientRect();
  const w = rect.width;
  const h = rect.height;

  posX += velX;
  posY += velY;

  // Checa colisão (com margem de 10px pra não encostar totalmente)
  if (posX + w >= vw - 10 || posX <= 10) {
    velX = -velX;
  }
  if (posY + h >= vh - 10 || posY <= 10) {
    velY = -velY;
  }

  word.style.transform = `translate(${posX}px, ${posY}px)`;
  requestAnimationFrame(updatePosition);
};

// Redimensiona o layout quando a tela muda de tamanho
window.addEventListener('resize', () => {
  posX = Math.min(posX, window.innerWidth - word.offsetWidth - 20);
  posY = Math.min(posY, window.innerHeight - word.offsetHeight - 20);
});

updatePosition();
