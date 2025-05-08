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
  slides.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

nextBtn.addEventListener('click', () => {
  if (currentIndex < images.length - 1) {
    currentIndex++;
    updateSlider();
  }
});

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlider();
  }
});

// Optional: Resize fix
window.addEventListener('resize', updateSlider);

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
          sliderContainer.style.display = sliderContainer.style.display === 'block' ? 'none' : 'block';
        });
      }
     if (nextBtn && slides) {
        nextBtn.addEventListener('click', () => {
          idx = (idx + 1) % slides.children.length;
          slides.style.transform = `translateX(-${idx * 100}%)`;
        });
      }
      if (prevBtn && slides) {
        prevBtn.addEventListener('click', () => {
          idx = (idx - 1 + slides.children.length) % slides.children.length;
          slides.style.transform = `translateX(-${idx * 100}%)`;
        });
      }
    });
