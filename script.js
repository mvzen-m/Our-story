document.addEventListener('DOMContentLoaded', () => {
  const revealBtn = document.getElementById('revealBtn');
  const giftBtn = document.getElementById('giftBtn');
  const openGiftBtn = document.getElementById('openGiftBtn');
  const giftMessage = document.getElementById('giftMessage');
  const giftSection = document.getElementById('giftSection');
  const showBtn = document.getElementById('showMomentsBtn');
  const sliderContainer = document.getElementById('sliderContainer');
  const slides = document.querySelector('.slides');
  const images = document.querySelectorAll('.slides img');
  const nextBtn = document.getElementById('next');
  const prevBtn = document.getElementById('prev');

  let idx = 0;

  function updateSlider() {
    const slideWidth = images[0].clientWidth;
    slides.style.transform = `translateX(-${idx * slideWidth}px)`;
  }

  if (revealBtn) {
    revealBtn.addEventListener('click', () => {
      document.getElementById('storySection').scrollIntoView({ behavior: 'smooth' });
    });
  }

  if (giftBtn) {
    giftBtn.addEventListener('click', () => {
      giftSection.style.display = 'block';
      giftSection.scrollIntoView({ behavior: 'smooth' });
    });
  }

  if (openGiftBtn) {
    openGiftBtn.addEventListener('click', () => {
      if (typeof confetti === 'function') {
        for (let i = 0; i < 150; i++) {
          confetti({
            particleCount: 1,
            spread: 70,
            origin: { x: Math.random(), y: Math.random() - 0.2 }
          });
        }
      }
      giftMessage.style.display = 'block';
    });
  }

  if (showBtn) {
    showBtn.addEventListener('click', () => {
      sliderContainer.style.display = (sliderContainer.style.display === 'block') ? 'none' : 'block';
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      if (idx < images.length - 1) {
        idx++;
        updateSlider();
      }
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (idx > 0) {
        idx--;
        updateSlider();
      }
    });
  }

  window.addEventListener('resize', updateSlider);
  updateSlider(); // Call it once to align on load
});

// Keyboard nav
document.addEventListener('keydown', (e) => {
  const sliderContainer = document.getElementById('sliderContainer');
  if (sliderContainer && sliderContainer.style.display === 'block') {
    if (e.key === 'ArrowRight') {
      document.getElementById('next').click();
    } else if (e.key === 'ArrowLeft') {
      document.getElementById('prev').click();
    }
  }
});
