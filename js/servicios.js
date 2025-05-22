// Animaciones GSAP para servicios


document.addEventListener('DOMContentLoaded', () => {
    if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    // Animación para cada cuadro de servicio
    gsap.utils.toArray('.cuadro-servicio').forEach((el, i) => {
        gsap.from(el, {
            opacity: 0,
            y: 60,
            duration: 0.3,
            delay: i * 0.1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: el,
                start: "top 85%",
                toggleActions: "play none none reset"
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
            toggleActions: "play none none reset"
        }
    });
});