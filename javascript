let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;

function showSlide(n) {
    slides[currentSlide].style.display = 'none';
    currentSlide = (n + totalSlides) % totalSlides;
    slides[currentSlide].style.display = 'block';
}

// Example: Automatic slide change every 5 seconds
setInterval(() => {
    showSlide(currentSlide + 1);
}, 5000);

// Example: Next/Previous buttons
document.querySelector('.next').addEventListener('click', () => {
    showSlide(currentSlide + 1);
});

document.querySelector('.prev').addEventListener('click', () => {
    showSlide(currentSlide - 1);
});
