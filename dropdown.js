// JavaScript for the slider
let currentSlide = 0;
const slides = document.querySelectorAll('.slider-image');
const controls = document.querySelectorAll('.slider-control');

function hideAllSlides() {
  slides.forEach((slide) => (slide.style.display = 'none'));
}

function showSlide(n) {
  hideAllSlides();
  controls.forEach((control) => control.classList.remove('active'));
  slides[n].style.display = 'block';
  controls[n].classList.add('active');
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

showSlide(currentSlide);

function toggleDropdown(id) {
  const dropdown = document.getElementById(id);
  dropdown.classList.toggle('open');
}

function closeAllDropdowns() {
  const dropdowns = document.querySelectorAll('.dropdown-content');
  dropdowns.forEach((dropdown) => {
    dropdown.classList.remove('open');
  });
}

// Event listener to close dropdowns when clicking outside
document.addEventListener('click', function (event) {
  if (!event.target.matches('.dropdown-button')) {
    closeAllDropdowns();
  }
});

function toggleDropdownCustom(id) {
  const dropdown = document.getElementById(id);
  dropdown.classList.toggle('open');
}
