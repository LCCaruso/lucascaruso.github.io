let currentSlide = 0;
const slides = document.querySelectorAll(".item__carrousel");
const totalSlides = slides.length;

function moveSlide(direction) {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
  slides[currentSlide].classList.add("active");

  const carousel = document.getElementById("content__items__carrousel");
  carousel.style.transform = `translateX(-${currentSlide * 33}%)`;
}

document.addEventListener("DOMContentLoaded", () => {
  slides[currentSlide].classList.add("active");
});
