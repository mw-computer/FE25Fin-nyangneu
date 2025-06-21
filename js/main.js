const slides = document.querySelectorAll(".slide");
let current = 0;
const total = slides.length;
const bgColors = ["#C9BDF2", "#1B1E59", "#ECE4F2", "#121212","#121212","#121212"];

function showSlide(index) {
  slides.forEach(slide => {
    slide.classList.remove("active");
  });

  const currentSlide = slides[index];
  currentSlide.classList.add("active");

  document.querySelector(".slider-container").style.backgroundColor = bgColors[index];

  const number = document.getElementById("slideNumber");
  if (number) number.textContent = `${index + 1} / ${total}`;


  const animatedTexts = currentSlide.querySelectorAll(".text-box span, .text-box h2, .text-box p");
  animatedTexts.forEach(el => {
    el.style.animation = "none";
    el.offsetHeight; 
    el.style.animation = ""; 
  });

 
  const imageBox = currentSlide.querySelector(".image-box");
  if (imageBox) {
    imageBox.style.animation = "none";
    imageBox.offsetHeight; 
    imageBox.style.animation = ""; 
  }
}

function nextSlide() {
  current = (current + 1) % total;
  showSlide(current);
}

function prevSlide() {
  current = (current - 1 + total) % total;
  showSlide(current);
}

document.addEventListener("DOMContentLoaded", () => {
  showSlide(current);
  setInterval(nextSlide, 3000);
});

