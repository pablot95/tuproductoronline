document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenu) {
        mobileMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            // Animación del icono hamburguesa (opcional)
            const icon = mobileMenu.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Cerrar menú al hacer click en un enlace
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                const icon = mobileMenu.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });

    // Cambiar header al hacer scroll
    const header = document.querySelector('header');
    if(header) {
         window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.style.boxShadow = "0 2px 15px rgba(0,0,0,0.1)";
            } else {
                header.style.boxShadow = "0 4px 10px rgba(0,0,0,0.05)";
            }
        });
    }

    // FAQ Accordion
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            
            // Close other items
            const activeItem = document.querySelector('.accordion-item.active');
            if (activeItem && activeItem !== item) {
                activeItem.classList.remove('active');
                activeItem.querySelector('.fa-chevron-down').style.transform = 'rotate(0deg)';
            }

            // Toggle current item
            item.classList.toggle('active');
            
            // Rotate icon
            const icon = header.querySelector('.fa-chevron-down');
            if (item.classList.contains('active')) {
                icon.style.transform = 'rotate(180deg)';
                icon.style.transition = 'transform 0.3s ease';
            } else {
                icon.style.transform = 'rotate(0deg)';
            }
        });
    });

    // Scroll Animation Observer
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Animate only once
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(section => {
        observer.observe(section);
    });
});