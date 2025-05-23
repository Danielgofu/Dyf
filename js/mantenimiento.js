// Animación de entrada para las tarjetas de servicios
document.addEventListener('DOMContentLoaded', () => {
    if (typeof gsap !== "undefined") {
        // Animación para las tarjetas
        gsap.from('.card', {
            opacity: 0,
            y: 50,
            duration: 0.8,
            stagger: 0.2,
            ease: "power2.out"
        });

        // Animación para el título principal
        gsap.from('h1', {
            opacity: 0,
            y: -30,
            duration: 1,
            ease: "power2.out"
        });

        // Animación para la sección FAQ
        gsap.from('.accordion-item', {
            opacity: 0,
            y: 30,
            duration: 0.6,
            stagger: 0.2,
            ease: "power2.out"
        });
    }

    // Interactividad para las tarjetas
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-8px)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });

    // Interactividad para la sección FAQ
    const faqButtons = document.querySelectorAll('.accordion-button');
    faqButtons.forEach(button => {
        button.addEventListener('click', () => {
            const expanded = button.getAttribute('aria-expanded') === 'true';
            if (!expanded) {
                gsap.to(button, { backgroundColor: '#e86e10', duration: 0.3 });
            } else {
                gsap.to(button, { backgroundColor: '#fdb00a', duration: 0.3 });
            }
        });
    });
});