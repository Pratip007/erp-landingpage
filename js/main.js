// Mobile Menu Functionality
function toggleMobileMenu() {
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    
    if (mobileNav && mobileToggle) {
        if (mobileNav.classList.contains('active')) {
            mobileNav.classList.remove('active');
            mobileToggle.classList.remove('active');
        } else {
            mobileNav.classList.add('active');
            mobileToggle.classList.add('active');
        }
    }
}

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    
    if (mobileNav && mobileToggle) {
        if (!mobileNav.contains(event.target) && !mobileToggle.contains(event.target)) {
            mobileNav.classList.remove('active');
            mobileToggle.classList.remove('active');
        }
    }
});

// Handle window resize
window.addEventListener('resize', function() {
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    
    if (mobileNav && mobileToggle) {
        if (window.innerWidth > 768) {
            mobileNav.classList.remove('active');
            mobileToggle.classList.remove('active');
        }
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// Feature Card Functionality
document.addEventListener('DOMContentLoaded', function() {
    const cardItems = document.querySelectorAll('.card-item');
    
    cardItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            // Remove active class from all items
            const activeItem = document.querySelector('.card-item.active');
            if (activeItem) {
                activeItem.classList.remove('active');
            }

            const activeItemImg = document.querySelector('.card-item-img.active');
            if (activeItemImg) {
                activeItemImg.classList.remove('active');
            }

            // Add active class to current item
            this.classList.add('active');
            
            // Show corresponding image
            const currentImg = document.getElementById(`${this.id}-img`);
            if (currentImg) {
                currentImg.classList.add('active');
            }
        });
    });
});

// Scroll Animations
function displayFeatureTab(targetTab) {
    const activeNav = document.querySelector('.feature-item.active');
    if (activeNav) {
        activeNav.classList.remove('active');
    }

    const activeTab = document.querySelector('.feature-tab.active');
    if (activeTab) {
        activeTab.classList.remove('active');
    }

    const currentNav = document.getElementById(targetTab);
    if (currentNav) {
        currentNav.classList.add('active');
    }

    const currentTab = document.getElementById(`${targetTab}-tab`);
    if (currentTab) {
        currentTab.classList.add('active');
    }
}

// Carousel Functionality
function slideToSlide(ele, inc) {
    const carousel = document.getElementById('testimonialCarousel');
    const currentSlideEle = document.querySelector('.carousel-btn.active');
    
    if (!currentSlideEle) return;
    
    const currentSlide = parseInt(currentSlideEle.dataset.slideTo);
    let slide = '';
    
    if (inc === "prev") {
        slide = currentSlide - 1 < 0 ? 2 : currentSlide - 1; 
    } else {
        slide = currentSlide + 1 > 2 ? 0 : currentSlide + 1; 
    }
    
    // Update carousel indicators
    const allIndicators = document.querySelectorAll('.carousel-btn');
    allIndicators.forEach(function(indicator) {
        indicator.classList.remove('active');
    });
    
    // Activate the correct indicator
    const targetIndicator = document.querySelector(`.carousel-btn[data-slide-to="${slide}"]`);
    if (targetIndicator) {
        targetIndicator.classList.add('active');
    }
    
    // Update carousel items
    const allItems = document.querySelectorAll('.carousel-item');
    allItems.forEach(function(item) {
        item.classList.remove('active');
    });
    
    // Activate the correct carousel item
    const targetItem = document.querySelector(`.carousel-item[data-slide-to="${slide}"]`);
    if (targetItem) {
        targetItem.classList.add('active');
    }
}

// Scroll Animations
window.addEventListener('scroll', function() {
    const featureCard = document.querySelector('.feature-card');
    if (featureCard) {
        const hT = featureCard.offsetTop;
        const wH = window.innerHeight;
        const wS = window.pageYOffset;
        
        if (hT < (wH + wS - 50)) {
            document.getElementById('feature-card-header')?.classList.add("floatup");
        }
    }
    
    const navTabs = document.querySelector('.nav-tabs');
    if (navTabs) {
        const hTP = navTabs.offsetTop;
        const hH = navTabs.offsetHeight;
        const wHP = window.innerHeight;
        const wSP = window.pageYOffset;
        
        if (wSP > (hTP + hH - wHP - 400)) {
            const navTabContent = document.getElementById("nav-tab-content");
            const navTabImg = document.getElementById("nav-tab-img");
            
            if (navTabContent) navTabContent.style.display = "block";
            if (navTabImg) navTabImg.style.display = "block";
        }
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.hero-section, .feature-card, .testimonial-section, .integrations-section').forEach(el => {
        observer.observe(el);
    });
});

// Form Validation and Handling
document.addEventListener('DOMContentLoaded', function() {
    // Form field validation
    const formFields = document.querySelectorAll('.form-field');
    
    formFields.forEach(field => {
        field.addEventListener('blur', function() {
            if (this.value.trim() === '') {
                this.classList.add('field-error');
            } else {
                this.classList.remove('field-error');
            }
        });
        
        field.addEventListener('input', function() {
            if (this.value.trim() !== '') {
                this.classList.remove('field-error');
            }
        });
    });
    
    // Form submission
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Add success animation
            this.classList.add('form-success');
            
            // Reset form after animation
            setTimeout(() => {
                this.classList.remove('form-success');
                this.reset();
            }, 500);
        });
    });
});

// Utility Functions
function createCookie(name, value) {
    document.cookie = name + "=" + value + "; path=/";
}

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    console.log('Page loaded successfully');
    
    // Set up any additional event listeners
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    
    if (mobileNav && mobileToggle) {
        console.log('Mobile menu elements found');
    }
});

// Export functions for global access
window.toggleMobileMenu = toggleMobileMenu;
window.displayFeatureTab = displayFeatureTab;
window.slideToSlide = slideToSlide;
window.createCookie = createCookie; 