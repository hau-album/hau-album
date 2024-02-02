// カルーセル用Script
const carousel = document.querySelector('.carousel');
const carouselInner = document.querySelector('.carousel-inner');
const carouselItems = document.querySelectorAll('.carousel-item');
const carouselWidth = carousel.clientWidth;

let currentIndex = 0;

function updateCarouselPosition() {
	carouselInner.style.transform = `translateX(-${currentIndex * carouselWidth}px)`;
}

function nextSlide() {
	currentIndex = (currentIndex + 1) % carouselItems.length;
	updateCarouselPosition();
}

function prevSlide() {
	currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
		updateCarouselPosition();
    }

setInterval(nextSlide, 7000); // 自動スライド