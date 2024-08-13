let modal = document.getElementById("myModal");


let img = document.getElementById("modalImage");
img.onclick = function() {
  modal.style.display = "flex";
}


let span = document.getElementsByClassName("close")[0];


span.onclick = function() {
  modal.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

document.getElementById('next').addEventListener('click', () => {
  moveToNextSlide();
});

document.getElementById('prev').addEventListener('click', () => {
  moveToPreviousSlide();
});

function moveToNextSlide() {
  slides[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % totalSlides;
  slides[currentIndex].classList.add('active');
}

function moveToPreviousSlide() {
  slides[currentIndex].classList.remove('active');
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  slides[currentIndex].classList.add('active');
}