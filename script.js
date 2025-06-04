const word = document.getElementById('word');
const speed = 0.8;

let posX = 50;
let posY = 50;
let velX = speed;
let velY = speed;

function updateMobileLayout() {
  const isMobile = window.innerWidth < 768;

  document.querySelectorAll('.letter').forEach(letter => {
    const indexes = letter.dataset.mobile.split(',').map(Number);
    letter.querySelectorAll('span').forEach((span, index) => {
      span.style.display = isMobile
        ? (indexes.includes(index + 1) ? 'flex' : 'none')
        : 'flex';
    });
  });
}

function updatePosition() {
  const margin = window.innerWidth < 768 ? 5 : 10;
  const vw = window.innerWidth;
  const vh = window.innerHeight;

  posX += velX;
  posY += velY;

  if (posX + word.offsetWidth >= vw - margin || posX <= margin) velX = -velX;
  if (posY + word.offsetHeight >= vh - margin || posY <= margin) velY = -velY;

  word.style.transform = `translate(${posX}px, ${posY}px)`;
  requestAnimationFrame(updatePosition);
}

window.addEventListener('resize', () => {
  posX = Math.min(posX, window.innerWidth - word.offsetWidth - 20);
  posY = Math.min(posY, window.innerHeight - word.offsetHeight - 20);
  updateMobileLayout();
});

window.addEventListener('load', () => {
  updateMobileLayout();
  updatePosition();
});

document.querySelectorAll('.letter span').forEach(coracao => {
  coracao.addEventListener('click', function () {
    this.style.transform = 'scale(1.8)';
    setTimeout(() => { this.style.transform = 'scale(1)'; }, 300);
  });
});
