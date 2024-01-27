// slideshow.js
let currentTestimonial = 0;
const testimonialSlides = document.querySelectorAll('.testimonial-slide');

function showTestimonial(index) {
    testimonialSlides.forEach((slide, i) => {
        if (i === index) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    });
}

function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % testimonialSlides.length;
    showTestimonial(currentTestimonial);
}

// Set interval for automatic testimonial slideshow (change testimonial every 5 seconds)
setInterval(nextTestimonial, 5000);

// Initial display
showTestimonial(currentTestimonial);


document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('open');
        });
    });
});