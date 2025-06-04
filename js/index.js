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
    gsap.from('.carousel', {
      duration: 1.5,
      y: -50,
      opacity: 0,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.carousel',
        start: 'top 80%',
        toggleActions: 'play none none reset',
      },
    });
    // Animar las imágenes del carrusel con un efecto de escala
    gsap.from('.carousel-images img', {
      duration: 1,
      scale: 0.9,
      opacity: 0,
      stagger: 0.3,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.carousel',
        start: 'top 80%',
        toggleActions: 'play none none reset',
      },
    });
    // Animar el contenedor de servicios (.contenedorServicios)
    gsap.from('.contenedorServicios', {
      duration: 1,
      y: 50,
      opacity: 0,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.contenedorServicios',
        start: 'top 95%',
        toggleActions: 'play none none reset',
      },
    });
    // Animar cada columna (.col-12) dentro del contenedor de servicios
    document.querySelectorAll('.contenedorServicios .col-12').forEach((col) => {
      gsap.from(col, {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: col,
          start: 'top 95%',
          toggleActions: 'play none none reset',
        },
      });
    });
    // Animación para los cuadros del index
    gsap.utils.toArray('.cuadro').forEach((cuadro, i) => {
      gsap.from(cuadro, {
        scrollTrigger: {
          trigger: cuadro,
          start: 'top 85%',
          end: 'bottom 15%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 50,
        duration: 0.6,
        delay: i * 0.1,
        ease: 'power2.out',
      });
    });
    // Animar el contenedor de patrocinadores
    gsap.from('.fotosPatrocinadores', {
      duration: 1,
      y: 50,
      opacity: 0,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.fotosPatrocinadores',
        start: 'top 85%',
        toggleActions: 'play none none reset',
      },
    });
    // Animar cada imagen dentro del contenedor de patrocinadores
    gsap.utils
      .toArray('.fotosPatrocinadores .imagenPatrocinador')
      .forEach((imagen, i) => {
        gsap.from(imagen, {
          scrollTrigger: {
            trigger: '.fotosPatrocinadores',
            start: 'top 85%',
            toggleActions: 'play none none reset',
          },
          opacity: 0,
          y: 30,
          duration: 0.6,
          delay: i * 0.2,
          ease: 'power2.out',
        });
      });
    // Animar el contenido de contenedorTextoUbicacion
    gsap.from('.contenedorTextoUbicacion', {
      scrollTrigger: {
        trigger: '.contenedorTextoUbicacion',
        start: 'top 85%',
        toggleActions: 'play none none reset',
      },
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power2.out',
    });
    // Animar el iframe del mapa
    gsap.from('.iframe-mapa', {
      scrollTrigger: {
        trigger: '.iframe-mapa',
        start: 'top 85%',
        toggleActions: 'play none none reset',
      },
      opacity: 0,
      scale: 0.9,
      duration: 1,
      ease: 'power2.out',
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
// Estadísticas: los 2 primeros con números aleatorios, el tercero contador normal, todas con la misma duración
document.addEventListener('DOMContentLoaded', () => {
  const estadisticasSection = document.querySelector(
    '.estadisticas-electricidad',
  );
  const estadisticas = document.querySelectorAll('.item-estadistica');
  // Animación de entrada para toda la sección y cada estadística
  if (window.gsap && window.ScrollTrigger) {
    gsap.from(estadisticasSection, {
      opacity: 0,
      y: 60,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: estadisticasSection,
        start: 'top 85%',
        toggleActions: 'play none none reset',
      },
    });
    gsap.utils.toArray(estadisticas).forEach((item, i) => {
      gsap.from(item, {
        opacity: 0,
        y: 40,
        duration: 0.7,
        delay: 0.2 + i * 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: estadisticasSection,
          start: 'top 85%',
          toggleActions: 'play none none reset',
        },
      });
    });
  }
  // Números aleatorios y contador normal
  const valores = document.querySelectorAll('.item-estadistica .valor');
  const duration = 1800; // ms, duración igual para todos
  valores.forEach((el, idx) => {
    const final = parseInt(el.getAttribute('data-valor'), 10);
    if (idx < 2) {
      // Números aleatorios que se acercan al valor final
      let steps = 45;
      let currentStep = 0;
      function animateRandom() {
        currentStep++;
        let min = Math.floor(final * (currentStep / steps) * 0.7);
        let max = Math.floor(final * (currentStep / steps));
        let value = Math.floor(Math.random() * (max - min + 1)) + min;
        if (currentStep < steps) {
          el.textContent = '+' + Math.min(value, final).toLocaleString('es-ES');
          setTimeout(animateRandom, duration / steps);
        } else {
          el.textContent = '+' + final.toLocaleString('es-ES');
        }
      }
      // Solo animar cuando la sección sea visible
      if (window.gsap && window.ScrollTrigger) {
        ScrollTrigger.create({
          trigger: estadisticasSection,
          start: 'top 85%',
          once: true,
          onEnter: animateRandom,
        });
      } else {
        animateRandom();
      }
    } else {
      // Contador normal para el tercero
      let current = 0;
      const frameRate = 1000 / 60; // 60fps
      const increment = Math.ceil(final / (duration / frameRate));
      function animateCount() {
        current += increment;
        if (current < final) {
          el.textContent = '+' + current.toLocaleString('es-ES');
          setTimeout(animateCount, frameRate);
        } else {
          el.textContent = '+' + final.toLocaleString('es-ES');
        }
      }
      if (window.gsap && window.ScrollTrigger) {
        ScrollTrigger.create({
          trigger: estadisticasSection,
          start: 'top 85%',
          once: true,
          onEnter: animateCount,
        });
      } else {
        animateCount();
      }
    }
  });
});
