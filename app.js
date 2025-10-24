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
});