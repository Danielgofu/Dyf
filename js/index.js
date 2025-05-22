document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.querySelector('.sidebar');
    const menuIcon = document.querySelector('.iconoMenu');
    const closeBtn = document.querySelector('.close-btn');

    // Abre el menú lateral
    menuIcon.addEventListener('click', () => sidebar.classList.add('active'));

    // Cierra el menú lateral
    closeBtn.addEventListener('click', () => sidebar.classList.remove('active'));

    // Cierra el menú lateral al hacer clic fuera
    document.addEventListener('click', (e) => {
        if (!sidebar.contains(e.target) && !menuIcon.contains(e.target)) {
            sidebar.classList.remove('active');
        }
    });

    // Carrusel
    const carouselImages = document.querySelector('.carousel-images');
    const images = document.querySelectorAll('.carousel-images picture');
    const prevButton = document.querySelector('.carousel-control.prev');
    const nextButton = document.querySelector('.carousel-control.next');
    let currentIndex = 0;
    let autoSlideInterval;

    function updateCarousel() {
        const offset = -currentIndex * 100;
        carouselImages.style.transform = `translateX(${offset}%)`;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % images.length;
        updateCarousel();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateCarousel();
    }

    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        autoSlideInterval = setInterval(nextSlide, 7500);
    }

    if (images.length && prevButton && nextButton) {
        updateCarousel();
        autoSlideInterval = setInterval(nextSlide, 7500);

        nextButton.addEventListener('click', () => {
            nextSlide();
            resetAutoSlide();
        });

        prevButton.addEventListener('click', () => {
            prevSlide();
            resetAutoSlide();
        });
    }

    // Animaciones con GSAP y ScrollTrigger (solo main y secciones)
    if (window.gsap && window.ScrollTrigger) {
        gsap.registerPlugin(ScrollTrigger);
        // Animar el carrusel con entrada desde la derecha
        gsap.from(".carousel", {
            duration: 1.5,
            y: -50,
            opacity: 0,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".carousel",
                start: "top 80%",
                toggleActions: "play none none reset",
            },
        });
        // Animar las imágenes del carrusel con un efecto de escala
        gsap.from(".carousel-images img", {
            duration: 1,
            scale: 0.9,
            opacity: 0,
            stagger: 0.3, // Retraso progresivo entre imágenes
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".carousel",
                start: "top 80%",
                toggleActions: "play none none reset",
            },
        });
        // Animar el contenedor de servicios (.contenedorServicios)
        gsap.from(".contenedorServicios", {
            duration: 1, // Duración de la animación
            y: 50, // Desplazamiento inicial hacia abajo
            opacity: 0, // Comienza invisible
            ease: "power2.out", // Suavizado
            scrollTrigger: {
                trigger: ".contenedorServicios", // Activa la animación cuando el contenedor es visible
                start: "top 95%", // Inicia la animación cuando el contenedor está al 80% de la pantalla
                toggleActions: "play none none reset", // Configuración de las acciones
            },
        });
        // Animar cada columna (.col-12) dentro del contenedor de servicios
        document.querySelectorAll(".contenedorServicios .col-12").forEach((col) => {
            gsap.from(col, {
                duration: 1, // Duración de la animación
                y: 50, // Desplazamiento inicial hacia abajo
                opacity: 0, // Comienza invisible
                ease: "power2.out", // Suavizado
                scrollTrigger: {
                    trigger: col, // Cada columna tiene su propio activador
                    start: "top 95%", // Inicia la animación cuando la columna está al 80% de la pantalla
                    toggleActions: "play none none reset", // Configuración de las acciones
                },
            });
        });
        // Animar las columnas de la sección Opiniones (Sección 5 y 6)
        gsap.from(".contenedorOpiniones .col-12.col-md-6", {
            scrollTrigger: {
                trigger: ".contenedorOpiniones",
                start: "top 85%",
                toggleActions: "play none none reset"
            },
            y: 60,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power2.out"
        });
        // Animar el cuadro de ubicación al hacer scroll
        gsap.from(".cuadroUbicacion", {
            duration: 0.5, // Duración de la animación
            y: 50, // Desplazamiento inicial hacia abajo
            opacity: 0, // Comienza invisible
            scale: 0.9, // Comienza ligeramente reducido
            ease: "power2.out", // Suavizado
            scrollTrigger: {
                trigger: ".cuadroUbicacion", // Activa la animación cuando el cuadro es visible
                start: "top 80%", // Inicia la animación cuando el cuadro está al 80% de la pantalla
                toggleActions: "play none none reset", // Configuración de las acciones
            },
        });
    }
});

// Oculta el loader cuando la página está lista
window.addEventListener('load', () => {
    document.getElementById('loader-bg').classList.add('hide');
    setTimeout(() => {
        document.getElementById('loader-bg').style.display = 'none';
    }, 400);
});