// Animaciones GSAP para servicios
document.addEventListener('DOMContentLoaded', () => {
    if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);
    // Animación para cada cuadro de servicio
    gsap.utils.toArray('.cuadro-servicio').forEach((el, i) => {
        gsap.from(el, {
            opacity: 0,
            y: 60,
            duration: 0.5,
            delay: i * 0.2,
            ease: "power2.out",
            scrollTrigger: {
                trigger: el,
                start: "top 85%",
                toggleActions: "play none none reverse",
            }
        });
    });
    // Animación para el header de servicios
    gsap.from('.servicios-header', {
        opacity: 0,
        y: -40,
        duration: 1,
        ease: "power2.out"
    });
    // Animación para el bloque de contacto
    gsap.from('.servicios-contacto', {
        opacity: 0,
        scale: 0.97,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
            trigger: '.servicios-contacto',
            start: "top 90%",
            end: "bottom 10%",
            toggleActions: "play none none reverse",
        }
    });
    // Animación para el botón del Hero
    gsap.from('.btn-hero', {
        opacity: 0,
        y: 20,
        duration: 1,
        ease: "power2.out",
        delay: 0.5
    });
    // Animación para el texto del Hero
    gsap.from('.hero-title, .hero-subtitle', {
        opacity: 0,
        y: -20,
        duration: 1,
        ease: "power2.out",
        stagger: 0.2
    });
     // Animación para el botón de contacto
    gsap.from('.btn-solicitar', {
        opacity: 0,
        scale: 0.9,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
            trigger: '.btn-solicitar',
            start: "top 90%",
            toggleActions: "play none none reverse",
        }
    });
});
// Desplazamiento suave al hacer clic en el botón "Ver Servicios"
document.querySelector('.btn-hero').addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector('#servicios-lista');
    // Ajustar el offset dinámicamente según el tamaño de la pantalla
    const offset = window.innerWidth <= 768 ? -50 : -100;
    const targetPosition = target.getBoundingClientRect().top + window.scrollY + offset;
    // Usar GSAP para animar el desplazamiento
    gsap.to(window, {
        scrollTo: { y: targetPosition, autoKill: true },
        duration: 1,
        ease: "power2.out"
    });
});