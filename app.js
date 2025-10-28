// app.js

document.addEventListener("DOMContentLoaded", function() {
    // --- Event Listeners ---
    const nav = document.querySelector('.navbar');
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
        
        // Scroll to top button visibility
        const scrollToTopBtn = document.getElementById('scroll-to-top');
        if (scrollToTopBtn) {
            if (window.scrollY > 300) {
                scrollToTopBtn.classList.add('visible');
            } else {
                scrollToTopBtn.classList.remove('visible');
            }
        }
    });

    // Mobile menu toggle
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            const isOpen = mobileMenu.style.display === 'block';
            mobileMenu.style.display = isOpen ? 'none' : 'block';
        });
    }

    // Smooth scrolling for all anchor links
    document.querySelectorAll('a[href^="#"], button[data-href]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const href = this.getAttribute('href') || this.getAttribute('data-href');
            
            // Handle external links to main page sections (for subpages)
            if (href.includes('index.html')) {
                window.location.href = href;
            } else {
                // Smooth scroll to section on current page
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
            
            // Close mobile menu if open
            if (mobileMenu && mobileMenu.style.display === 'block') {
                mobileMenu.style.display = 'none';
            }
        });
    });
    
    // Scroll to top button functionality
    const scrollToTopBtn = document.getElementById('scroll-to-top');
    if (scrollToTopBtn) {
        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});