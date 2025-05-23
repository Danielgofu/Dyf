// Oculta el loader cuando la página está lista
window.addEventListener('load', () => {
  document.getElementById('loader-bg').classList.add('hide');
  setTimeout(() => {
    document.getElementById('loader-bg').style.display = 'none';
  }, 400);
});

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

    // Animaciones con GSAP y ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Animar el header
    gsap.from("header", {
        duration: 1,
        y: -50,
        opacity: 0,
        ease: "power2.out",
        scrollTrigger: {
            trigger: "header",
            start: "top top",
            toggleActions: "play none none none", // Reproduce y revierte al salir
        },
    });

    // Animar las columnas del footer con un efecto de deslizamiento
    gsap.from("footer .col-12", {
        duration: 1,
        y: 50,
        opacity: 0,
        stagger: 0.3,
        ease: "power2.out",
        scrollTrigger: {
            trigger: "footer",
            start: "top 80%",
            end: "bottom 20%", // Añadido para animar al salir
            toggleActions: "play none none reverse", // Reproduce y revierte al salir
        },
    }); 
});