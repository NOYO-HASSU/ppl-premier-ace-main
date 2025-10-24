document.addEventListener("DOMContentLoaded", function() {
    const nav = document.querySelector('.navbar');
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    mobileMenuButton.addEventListener('click', () => {
        const isOpen = mobileMenu.style.display === 'block';
        mobileMenu.style.display = isOpen ? 'none' : 'block';
    });

    document.querySelectorAll('a[href^="#"], button[data-href]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const href = this.getAttribute('href') || this.getAttribute('data-href');
            // Handle external links to main page sections
            if (href.includes('index.html')) {
                window.location.href = href;
            } else {
                document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
            }
            if (mobileMenu.style.display === 'block') {
                mobileMenu.style.display = 'none';
            }
        });
    });
});