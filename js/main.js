// Simple JavaScript functionality for Baghbahra News website

document.addEventListener('DOMContentLoaded', function() {
    // Set current date
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const currentDateElement = document.getElementById('current-date');
    if (currentDateElement) {
        currentDateElement.textContent = now.toLocaleDateString('en-US', options);
    }
    
    // Slider functionality
    const slides = document.querySelectorAll('.featured-slider .slide');
    if (slides.length > 0) {
        let currentSlide = 0;
        
        function showSlide(index) {
            // Hide all slides
            slides.forEach(slide => {
                slide.style.display = 'none';
            });
            
            // Show the current slide
            slides[index].style.display = 'block';
        }
        
        function nextSlide() {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }
        
        // Initialize slider
        showSlide(currentSlide);
        
        // Auto-advance slides every 5 seconds
        setInterval(nextSlide, 5000);
    }
    
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('nav ul');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }
    
    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    const successMessage = document.getElementById('success-message');
    
    if (contactForm && successMessage) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // In a real implementation, you would send the form data to a server
            // For this static version, we'll just show the success message
            contactForm.style.display = 'none';
            successMessage.style.display = 'block';
        });
    }
    
    // Search functionality
    const searchForm = document.querySelector('.search-bar');
    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const searchInput = this.querySelector('input');
            if (searchInput && searchInput.value.trim() !== '') {
                alert('Search functionality would be implemented in a full version. You searched for: ' + searchInput.value);
            }
        });
    }
    
    // Newsletter subscription
    const newsletterForms = document.querySelectorAll('.widget form');
    newsletterForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            if (emailInput && emailInput.value.trim() !== '') {
                alert('Newsletter subscription would be implemented in a full version. Email entered: ' + emailInput.value);
                emailInput.value = '';
            }
        });
    });
});
