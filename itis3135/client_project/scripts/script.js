// For announcement slider
document.addEventListener("DOMContentLoaded", function () {
  let slideIndex = 0;
  const slide = document.getElementById('carousel-slide');
  const totalSlides = document.querySelectorAll('.carousel-item').length;
  const carousel = document.querySelector('.hero-carousel');

  function moveSlide(direction) {
    slideIndex = (slideIndex + direction + totalSlides) % totalSlides;
    slide.style.transform = `translateX(-${slideIndex * 100}%)`;
  }

  // Set up button listeners
  document.querySelector('.carousel-controls button:first-child').addEventListener('click', () => moveSlide(-1));
  document.querySelector('.carousel-controls button:last-child').addEventListener('click', () => moveSlide(1));

  // Auto slide
  let autoSlide = setInterval(() => moveSlide(1), 8000);

  // Pause on hover
  carousel.addEventListener('mouseenter', () => {
    clearInterval(autoSlide);
  });

  carousel.addEventListener('mouseleave', () => {
    autoSlide = setInterval(() => moveSlide(1), 5000);
  });
});

// For testimonial slider
document.addEventListener('DOMContentLoaded', () => {
  let currentTestimonial = 0;
  const testimonials = document.querySelectorAll('.testimonial');
  let intervalId;

  // Function to show a testimonial
  function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
      testimonial.classList.toggle('active', i === index);
    });
  }

  // Function for the next testimonial
  function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
  }

  // Function for the previous testimonial
  function prevTestimonial() {
    currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentTestimonial);
  }

  // Start the slider
  function startSlider() {
    intervalId = setInterval(nextTestimonial, 5000);
  }

  // Stop the slider
  function stopSlider() {
    clearInterval(intervalId);
  }

  // Initialize the slider
  startSlider();

  // Hover events to stop and start the slider
  testimonials.forEach((testimonial) => {
    testimonial.addEventListener('mouseenter', stopSlider);
    testimonial.addEventListener('mouseleave', startSlider);
  });

  // Add event listeners to buttons
  document.getElementById('prevButton').addEventListener('click', prevTestimonial);
  document.getElementById('nextButton').addEventListener('click', nextTestimonial);
});

// For Gallery "See more" toggles
function toggleImages(sectionId) {
  const section = document.getElementById(sectionId);
  const toggleImages = section.querySelectorAll('.toggle-img');
  const button = section.querySelector('.see-more-btn');

  toggleImages.forEach((img) => {
    img.classList.toggle('hidden');
  });

  // Toggle button text
  if (button.innerText === "See More") {
    button.innerText = "See Less";
  } else {
    button.innerText = "See More";
  }
}