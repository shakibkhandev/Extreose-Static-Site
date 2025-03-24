// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileNav = document.querySelector('.mobile-nav');
const overlay = document.querySelector('.overlay');
const body = document.body;

function toggleMobileMenu() {
    mobileMenuBtn.classList.toggle('active');
    mobileNav.classList.toggle('active');
    overlay.classList.toggle('active');
    body.style.overflow = body.style.overflow === 'hidden' ? '' : 'hidden';
}

mobileMenuBtn.addEventListener('click', toggleMobileMenu);
overlay.addEventListener('click', toggleMobileMenu);

// Close mobile menu when clicking on a link
document.querySelectorAll('.mobile-nav .nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        toggleMobileMenu();
    });
});

// Close mobile menu when screen is resized above mobile breakpoint
window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && mobileNav.classList.contains('active')) {
        toggleMobileMenu();
    }
});

// Hero Slider
const dots = document.querySelectorAll('.dot');
const heroSection = document.querySelector('.hero');

const heroImages = [
    'https://images.unsplash.com/photo-1502519144081-acca18599776', // Skydiving
    'https://images.unsplash.com/photo-1583255448430-17c5eda08e5c', // Shark Diving
    'https://images.unsplash.com/photo-1601024445121-e5b82f020549', // Bungee Jumping
    'https://images.unsplash.com/photo-1522163182402-834f871fd851', // Mountain Climbing
    'https://images.unsplash.com/photo-1606925797300-0b35e9d1794e', // Base Jumping
    'https://images.unsplash.com/photo-1579130781921-76e18892b57b', // Wingsuit Flying
    'https://images.unsplash.com/photo-1594492215832-8b4916b5f41b'  // Ice Climbing
];

let currentSlide = 0;

function updateSlider(index) {
    heroSection.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${heroImages[index]}')`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index;
        updateSlider(currentSlide);
    });
});

// Auto slide
setInterval(() => {
    currentSlide = (currentSlide + 1) % heroImages.length;
    updateSlider(currentSlide);
}, 5000);

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Search Functionality
const searchInput = document.querySelector('.search-box input');
const searchButton = document.querySelector('.search-container .btn-primary');

searchButton.addEventListener('click', () => {
    const searchTerm = searchInput.value.trim();
    if (searchTerm) {
        // Add your search functionality here
        console.log('Searching for:', searchTerm);
    }
});

// Add keyboard support for search
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchButton.click();
    }
});

// Responsive Image Loading
function loadResponsiveImages() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        if (window.innerWidth <= 768) {
            img.src = img.src.replace('w=1200', 'w=600');
        }
    });
}

window.addEventListener('resize', loadResponsiveImages);
loadResponsiveImages();

// Add animation classes on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.category-card');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight && elementBottom > 0) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Initialize animation styles
document.querySelectorAll('.category-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
});

window.addEventListener('scroll', animateOnScroll);
animateOnScroll(); // Initial check
