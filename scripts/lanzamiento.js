function moveCarousel(direction) {
    const container = document.querySelector('.card-carousel');
    const scrollAmount = direction === 1 ? container.scrollWidth / 3 : -container.scrollWidth / 3;
    container.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  }
  