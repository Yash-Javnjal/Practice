

document.addEventListener('DOMContentLoaded', () => {

    /* 1. SCROLL ANIMATIONS */
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal-up, .reveal-text').forEach(el => observer.observe(el));


   
});