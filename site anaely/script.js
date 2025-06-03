const word = document.getElementById('word');
const speed = 1; // velocidade em pixels por frame (mais baixo = mais devagar)

let posX = 100;  // posição inicial X
let posY = 100;  // posição inicial Y

let velX = speed;
let velY = speed;

const updatePosition = () => {
  const vw = window.innerWidth;
  const vh = window.innerHeight;

  const rect = word.getBoundingClientRect();
  const w = rect.width;
  const h = rect.height;

  // Atualiza posição
  posX += velX;
  posY += velY;

  // Checa colisão nas bordas da janela
  if (posX + w >= vw || posX <= 0) {
    velX = -velX;
  }
  if (posY + h >= vh || posY <= 0) {
    velY = -velY;
  }

  // Aplica posição no elemento
  word.style.transform = `translate(${posX}px, ${posY}px)`;

  requestAnimationFrame(updatePosition);
};

// Começa o loop de animação
updatePosition();
