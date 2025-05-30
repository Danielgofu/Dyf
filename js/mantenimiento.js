document.addEventListener('DOMContentLoaded', () => {
    if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
        gsap.registerPlugin(ScrollTrigger);
        // Hero section: fade in con escala y desenfoque
        gsap.from('.hero-section .container', {
            opacity: 0,
            scale: 0.95,
            filter: "blur(10px)",
            duration: 1.2,
            ease: "expo.out"
        });
        // About section: fade in desde la derecha con rebote
        gsap.from('.about-section .container', {
            scrollTrigger: {
                trigger: '.about-section',
                start: 'top 85%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            x: 120,
            duration: 1.1,
            ease: "back.out(1.5)"
        });
        // Contact section: fade in desde abajo con escala
        gsap.from('.contact-section .container', {
            scrollTrigger: {
                trigger: '.contact-section',
                start: 'top 85%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            y: 80,
            scale: 0.95,
            duration: 1,
            ease: "expo.out"
        });
        // FAQ items: fade in con giro X y stagger
        gsap.from('.accordion-item', {
            scrollTrigger: {
                trigger: '.faq-section',
                start: 'top 85%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            rotateX: 60,
            y: 40,
            duration: 0.7,
            stagger: 0.12,
            ease: "power3.out"
        });
        // Cuadro "¿Tienes otra duda?": entrada elástica desde la izquierda
        gsap.from('.faq-extra-box', {
            scrollTrigger: {
                trigger: '.faq-extra-box',
                start: 'top 90%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            x: -120,
            scale: 0.92,
            duration: 0.9,
            ease: "elastic.out(1, 0.7)"
        });
        // Icono dentro del cuadro: fade y giro Z
        gsap.from('.faq-extra-icon img', {
            scrollTrigger: {
                trigger: '.faq-extra-box',
                start: 'top 90%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            rotate: -180,
            duration: 0.7,
            delay: 0.2,
            ease: "power2.out"
        });
        // Botón dentro del cuadro: fade y salto
        gsap.from('.faq-extra-btn', {
            scrollTrigger: {
                trigger: '.faq-extra-box',
                start: 'top 90%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            y: 40,
            duration: 0.5,
            delay: 0.35,
            ease: "back.out(2)"
        });
        // Animación para columnas de servicios (col-md-3)
        gsap.utils.toArray('.services-section .col-lg-3 .col-md-12').forEach((col, i) => {
            gsap.fromTo(
                col,
                {
                    opacity: 0,
                    y: -60,
                    scale: 0.92
                },
                {
                    scrollTrigger: {
                        trigger: col,
                        start: "top 92%",
                        toggleActions: "play none none reverse"
                    },
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.38,
                    delay: i * 0.09,
                    ease: "power2.out"
                }
            );
        });
    }
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