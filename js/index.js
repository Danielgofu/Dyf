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
            stagger: 0.3,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".carousel",
                start: "top 80%",
                toggleActions: "play none none reset",
            },
        });
        // Animar el contenedor de servicios (.contenedorServicios)
        gsap.from(".contenedorServicios", {
            duration: 1,
            y: 50,
            opacity: 0,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".contenedorServicios",
                start: "top 95%",
                toggleActions: "play none none reset",
            },
        });
        // Animar cada columna (.col-12) dentro del contenedor de servicios
        document.querySelectorAll(".contenedorServicios .col-12").forEach((col) => {
            gsap.from(col, {
                duration: 1,
                y: 50,
                opacity: 0,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: col,
                    start: "top 95%",
                    toggleActions: "play none none reset",
                },
            });
        });
        // Animación para los cuadros del index
        gsap.utils.toArray('.cuadro').forEach((cuadro, i) => {
            gsap.from(cuadro, {
                scrollTrigger: {
                    trigger: cuadro,
                    start: "top 85%",
                    end: "bottom 15%",
                    toggleActions: "play none none reverse",
                },
                opacity: 0,
                y: 50,
                duration: 0.6,
                delay: i * 0.1,
                ease: "power2.out",
            });
        });
        // Animar el contenedor de patrocinadores
        gsap.from(".fotosPatrocinadores", {
            duration: 1,
            y: 50,
            opacity: 0,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".fotosPatrocinadores",
                start: "top 85%",
                toggleActions: "play none none reset",
            },
        });
        // Animar cada imagen dentro del contenedor de patrocinadores
        gsap.utils.toArray('.fotosPatrocinadores .imagenPatrocinador').forEach((imagen, i) => {
            gsap.from(imagen, {
                scrollTrigger: {
                    trigger: ".fotosPatrocinadores",
                    start: "top 85%",
                    toggleActions: "play none none reset",
                },
                opacity: 0,
                y: 30,
                duration: 0.6,
                delay: i * 0.2,
                ease: "power2.out",
            });
        });
        // Animar el contenido de contenedorTextoUbicacion
        gsap.from(".contenedorTextoUbicacion", {
            scrollTrigger: {
                trigger: ".contenedorTextoUbicacion",
                start: "top 85%",
                toggleActions: "play none none reset",
            },
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power2.out",
        });
        // Animar el iframe del mapa
        gsap.from(".iframe-mapa", {
            scrollTrigger: {
                trigger: ".iframe-mapa",
                start: "top 85%",
                toggleActions: "play none none reset",
            },
            opacity: 0,
            scale: 0.9,
            duration: 1,
            ease: "power2.out",
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