// app.js

document.addEventListener("DOMContentLoaded", function() {
    // --- Event Listeners ---
    const nav = document.querySelector('.navbar');
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    // Throttle scroll handler for better performance
    let scrollTimeout;
    const handleScroll = () => {
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
    };

    // Navbar scroll effect with passive listener
    window.addEventListener('scroll', handleScroll, { passive: true });

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
            if (!href) return;

            // Navigate to pages or external URLs; smooth-scroll only for same-page hashes
            if (href.startsWith('#')) {
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            } else {
                window.location.href = href;
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