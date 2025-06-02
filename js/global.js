// Oculta el loader cuando la página está lista
window.addEventListener('load', () => {
  document.getElementById('loader-bg').classList.add('hide');
  setTimeout(() => {
    document.getElementById('loader-bg').style.display = 'none';
  }, 400);
});

function loadGoogleAnalytics() {
  if (window.gtagLoaded) return;
  window.gtagLoaded = true;
  // Crea el script de Google Analytics
  var script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=G-0HLCH4XF58';
  script.onload = function () {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', 'G-0HLCH4XF58');
  };
  document.head.appendChild(script);
}

// Banner de cookies
if (!localStorage.getItem('cookiesAccepted')) {
  document.getElementById('cookie-banner').style.display = 'block';
} else {
  loadGoogleAnalytics();
}

document.getElementById('accept-cookies').onclick = function () {
  localStorage.setItem('cookiesAccepted', 'yes');
  document.getElementById('cookie-banner').style.display = 'none';
  loadGoogleAnalytics();
};

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
  gsap.registerPlugin(ScrollTrigger);
  gsap.from('header', {
    duration: 1,
    y: -50,
    opacity: 0,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: 'header',
      start: 'top top',
      toggleActions: 'play none none none',
    },
  });
  gsap.from('footer .col-12', {
    duration: 1,
    y: 50,
    opacity: 0,
    stagger: 0.3,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: 'footer',
      start: 'top 80%',
      end: 'bottom 20%',
      toggleActions: 'play none none reverse',
    },
  });
});
