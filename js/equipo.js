// Inicializar GSAP y ScrollTrigger
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
document.addEventListener('DOMContentLoaded', () => {
    // Animación para el texto del Hero
    gsap.from('.hero-title, .hero-subtitle', {
        opacity: 0,
        y: -20,
        duration: 1,
        ease: "power2.out",
        stagger: 0.2
    });
    // Animación para el botón del Hero
    gsap.from('.btn-hero', {
        opacity: 0,
        y: 20,
        duration: 1,
        ease: "power2.out",
        delay: 0.5
    });
    // Desplazamiento suave al hacer clic en el botón "Conócenos mejor"
    const btnHero = document.querySelector('.btn-hero');
    if (btnHero) {
        btnHero.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector('#valores');
            if (!target) return;

            // Offset dinámico según el tamaño de pantalla
            const offset = window.innerWidth <= 768 ? -40 : -100;
            const targetPosition = target.getBoundingClientRect().top + window.scrollY + offset;

            gsap.to(window, {
                scrollTo: { y: targetPosition, autoKill: true },
                duration: 1,
                ease: "power2.out"
            });
        });
    }
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
// Carrusel de valores tipo scroll horizontal
document.addEventListener('DOMContentLoaded', function () {
  const carousel = document.getElementById('valores-carousel');
  const leftBtn = document.getElementById('valores-left');
  const rightBtn = document.getElementById('valores-right');
  const cards = carousel.querySelectorAll('.card');
  const card = cards[0];
  let cardWidth = card.offsetWidth + 32;
  function updateCardWidth() {
    cardWidth = card.offsetWidth + 32;
  }
  // Animación de rebote y desplazamiento lateral al hacer click en flechas
  function bounce(btn, direction = 'left') {
    const xMove = direction === 'left' ? -12 : 12;
    gsap.fromTo(btn,
        { scale: 1, x: 0 },
        {
            scale: 0.88,
            x: xMove,
            duration: 0.13,
            yoyo: true,
            repeat: 1,
            ease: "power1.inOut",
            onComplete: () => {
                gsap.to(btn, { scale: 1, x: 0, duration: 0.15, ease: "power1.out" });
            }
        }
    );
  }
  leftBtn.addEventListener('click', () => {
    updateCardWidth();
    carousel.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    bounce(leftBtn, 'left');
  });
  rightBtn.addEventListener('click', () => {
    updateCardWidth();
    carousel.scrollBy({ left: cardWidth, behavior: 'smooth' });
    bounce(rightBtn, 'right');
  });
  // Deshabilita flechas si no hay más para mostrar (con animación de opacidad)
  function updateArrows() {
    leftBtn.disabled = carousel.scrollLeft < 10;
    rightBtn.disabled = carousel.scrollLeft + carousel.offsetWidth >= carousel.scrollWidth - 10;
  }
  carousel.addEventListener('scroll', updateArrows);
  window.addEventListener('resize', () => {
    updateCardWidth();
    updateArrows();
  });
  updateArrows();
  // Animación de entrada de las tarjetas SOLO con opacidad y escala (no y)
  gsap.from(cards, {
    opacity: 0,
    scale: 0.92,
    stagger: 0.12,
    duration: 0.7,
    ease: "power2.out",
    scrollTrigger: {
      trigger: carousel,
      start: "top 85%",
      once: true
    }
  });
});
// Carrusel tipo slider para testimonios (uno a la vez, ancho, con dots)
document.addEventListener('DOMContentLoaded', function () {
    const slides = Array.from(document.querySelectorAll('.testimonio-slide'));
    const leftBtn = document.getElementById('testimonios-left');
    const rightBtn = document.getElementById('testimonios-right');
    const dotsContainer = document.getElementById('testimonios-dots');
    let current = 0;
    // Crear dots
    slides.forEach((_, i) => {
        const dot = document.createElement('button');
        dot.className = 'testimonios-dot' + (i === 0 ? ' active' : '');
        dot.setAttribute('aria-label', `Ver testimonio ${i + 1}`);
        dot.addEventListener('click', () => goTo(i));
        dotsContainer.appendChild(dot);
    });
    const dots = Array.from(dotsContainer.children);
    function update() {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === current);
        });
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === current);
        });
        leftBtn.disabled = current === 0;
        rightBtn.disabled = current === slides.length - 1;
    }
    function goTo(idx) {
        if (idx === current) return;
        gsap.to(slides[current], { opacity: 0, duration: 0.3, onComplete: () => {
            slides[current].classList.remove('active');
            current = idx;
            slides[current].classList.add('active');
            gsap.fromTo(slides[current], { opacity: 0 }, { opacity: 1, duration: 0.4 });
            update();
        }});
    }
    leftBtn.addEventListener('click', () => {
        if (current > 0) goTo(current - 1);
    });
    rightBtn.addEventListener('click', () => {
        if (current < slides.length - 1) goTo(current + 1);
    });
    // Swipe en móvil
    let startX = 0;
    const slider = document.getElementById('testimonios-slider');
    slider.addEventListener('touchstart', e => {
        startX = e.touches[0].clientX;
    });
    slider.addEventListener('touchend', e => {
        let endX = e.changedTouches[0].clientX;
        let diff = endX - startX;
        if (Math.abs(diff) > 40) {
            if (diff > 0 && current > 0) goTo(current - 1);
            else if (diff < 0 && current < slides.length - 1) goTo(current + 1);
        }
    });
    update();
});
// Animación para la nueva sección de contacto (equipo-contacto-nueva)
gsap.from(".equipo-contacto-nueva", {
    scrollTrigger: {
        trigger: ".equipo-contacto-nueva",
        start: "top 80%",
        toggleActions: "play none none none"
    },
    opacity: 0,
    y: 60,
    duration: 0.9,
    ease: "power2.out"
});
// Animación para chips y botón dentro de la sección de contacto
gsap.from(".equipo-contacto-nueva .btn-contacto-nueva", {
    scrollTrigger: {
        trigger: ".equipo-contacto-nueva",
        start: "top 85%",
        once: true
    },
    opacity: 0,
    y: 30,
    stagger: 0.12,
    duration: 0.7,
    ease: "power2.out"
});