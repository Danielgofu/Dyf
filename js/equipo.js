// Inicializar GSAP y ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Animación para los valores
gsap.from(".valor-item", {
    scrollTrigger: {
        trigger: ".valores-equipo",
        start: "top 80%", // Inicia cuando el contenedor está al 80% de la pantalla
        end: "bottom 20%", // Termina cuando el contenedor está al 20%
        toggleActions: "play none none reverse", // Reproduce y revierte al salir
    },
    opacity: 0,
    y: 50, // Aparece desde abajo
    duration: 0.8,
    stagger: 0.2, // Retraso entre cada elemento
    ease: "power2.out",
});

// Animación para el título de "Nuestros Valores"
gsap.from(".valores-equipo h2", {
    scrollTrigger: {
        trigger: ".valores-equipo",
        start: "top 90%",
        end: "bottom 10%", // Añadido para animar al salir
        toggleActions: "play none none reverse", // Reproduce y revierte al salir
    },
    opacity: 0,
    y: -30, // Aparece desde arriba
    duration: 0.6,
    ease: "power2.out",
});

// Animación para el contenedor de contacto
gsap.from(".equipo-contacto", {
    scrollTrigger: {
        trigger: ".equipo-contacto",
        start: "top 80%",
        toggleActions: "play none none none", // Reproduce y revierte al salir
    },
    opacity: 0,
    scale: 0.9, // Aparece con un efecto de zoom
    duration: 0.8,
    ease: "power2.out",
});

// Animación para el cuadro de testimonios
gsap.from(".testimonios-equipo", {
    scrollTrigger: {
        trigger: ".testimonios-equipo",
        start: "top 80%",
        toggleActions: "play none none none", // Reproduce y revierte al salir
    },
    opacity: 0,
    scale: 0.9, // Aparece desde abajo
    duration: 0.8,
    ease: "power2.out",
});

// Animación para cada testimonio individual
gsap.utils.toArray('.testimonio').forEach((testimonio, i) => {
    gsap.from(testimonio, {
        scrollTrigger: {
            trigger: testimonio,
            start: "top 100%",
            toggleActions: "play none none reverse", // Reproduce y revierte al salir
        },
        opacity: 0,
        y: 30, // Aparece desde abajo
        duration: 0.6,
        delay: i * 0.2, // Retraso entre testimonios
        ease: "power2.out",
    });
});

// Animación para las imágenes de los valores
gsap.utils.toArray('.valor-icono img').forEach((img, i) => {
    gsap.from(img, {
        rotation: 360, // Rota 360 grados
        opacity: 0, // Aparece desde opacidad 0
        duration: 1, // Duración de la animación
        delay: i * 0.15, // Retraso entre cada imagen
        ease: "power2.out",
        scrollTrigger: {
            trigger: img, // Activa la animación cuando la imagen entra en vista
            start: "top 90%",
            toggleActions: "play none none none", // Solo reproduce al entrar
        },
    });
});