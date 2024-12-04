
const track = document.querySelector('.carousel-track');
const images = document.querySelectorAll('.carousel-image');
const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');

let currentIndex = 0;

function updateCarousel() {
const imageWidth = images[0].clientWidth;
track.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
}

prevButton.addEventListener('click', () => {
currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
updateCarousel();
});

nextButton.addEventListener('click', () => {
currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
updateCarousel();
});

window.addEventListener('resize', updateCarousel);
