// Mostrar mensaje de éxito si la URL contiene ?enviado=1
document.addEventListener('DOMContentLoaded', () => {
    // --- VALIDACIÓN Y EFECTOS DEL FORMULARIO ---
    const form = document.querySelector('.contact-form');
    if (form) {
        form.style.opacity = '';
        form.style.transform = '';
        const nombre = form.querySelector('#nombre');
        const email = form.querySelector('#email');
        const motivo = form.querySelector('#motivo');
        const mensaje = form.querySelector('#mensaje');
        const counter = document.getElementById('mensajeCounter');
        const submitBtn = form.querySelector('button[type="submit"]');
        // Contador de caracteres
        mensaje.addEventListener('input', () => {
            const max = mensaje.getAttribute('maxlength') || 1000;
            const restante = max - mensaje.value.length;
            counter.textContent = `${restante} caracteres restantes`;
        });
        // Control de si el usuario ha interactuado con los campos
        const touched = {
            nombre: false,
            email: false,
            motivo: false,
            mensaje: false
        };
        function marcarTocado(e) {
            touched[e.target.id] = true;
            validar();
        }
        // Validación en tiempo real (añade borde rojo solo si el campo fue tocado)
        function validar() {
            let valido = true;
            // Nombre
            if (!nombre.value.trim() && touched.nombre) {
                nombre.classList.add('is-invalid');
                valido = false;
            } else {
                nombre.classList.remove('is-invalid');
            }
            // Email
            const emailVal = email.value.trim();
            const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal);
            if ((!emailOk) && touched.email) {
                email.classList.add('is-invalid');
                valido = false;
            } else {
                email.classList.remove('is-invalid');
            }
            // Motivo
            if (!motivo.value && touched.motivo) {
                motivo.classList.add('is-invalid');
                valido = false;
            } else {
                motivo.classList.remove('is-invalid');
            }
            // Mensaje
            if (!mensaje.value.trim() && touched.mensaje) {
                mensaje.classList.add('is-invalid');
                valido = false;
            } else {
                mensaje.classList.remove('is-invalid');
            }
            submitBtn.disabled = !(
                nombre.value.trim() &&
                emailOk &&
                motivo.value &&
                mensaje.value.trim()
            );
            return valido;
        }
        [nombre, email, motivo, mensaje].forEach(input => {
            input.addEventListener('input', validar);
            input.addEventListener('blur', marcarTocado);
        });
        // Evita el envío si no es válido
        form.addEventListener('submit', function(e) {
            // Marca todos como tocados al intentar enviar
            touched.nombre = true;
            touched.email = true;
            touched.motivo = true;
            touched.mensaje = true;
            if (!validar()) {
                e.preventDefault();
            }
        });
        // Inicializa el estado del botón y contador
        validar();
        mensaje.dispatchEvent(new Event('input'));
    }
    // --- ANIMACIONES GSAP ---
    if (typeof gsap !== "undefined") {
        // Animación de entrada para el header de contacto (fade in)
        gsap.from('.contact-header', {
            opacity: 0,
            scale: 0.96,
            duration: 1,
            ease: "power2.out"
        });
        // Animación de entrada para el formulario (fade in)
        gsap.from('.contact-form', {
            opacity: 0,
            scale: 0.97,
            duration: 1,
            delay: 0.15,
            ease: "power2.out"
        });
        // Animación de entrada para la info rápida (fade in)
        gsap.from('.contact-info-quick', {
            opacity: 0,
            scale: 0.97,
            duration: 1,
            delay: 0.3,
            ease: "power2.out"
        });

        // Animación de entrada para el FAQ (fade in con ScrollTrigger)
        if (gsap && gsap.registerPlugin && typeof ScrollTrigger !== "undefined") {
            gsap.registerPlugin(ScrollTrigger);
            gsap.from('.faq-contacto', {
                opacity: 0,
                scale: 0.97,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: '.faq-contacto',
                    start: "top 80%",
                    toggleActions: "play none none none"
                }
            });
        } else {
            // Fallback si no hay ScrollTrigger
            gsap.from('.faq-contacto', {
                opacity: 0,
                scale: 0.97,
                duration: 1,
                delay: 0.45,
                ease: "power2.out"
            });
        }
        // Animación de los iconos sociales (pop)
        gsap.from('.contact-social .social-link', {
            scale: 0,
            opacity: 0,
            stagger: 0.15,
            duration: 0.7,
            delay: 0.7,
            ease: "back.out(1.7)"
        });
        // Animación de los campos del formulario al enfocar
        document.querySelectorAll('.contact-form input, .contact-form textarea, .contact-form select').forEach(el => {
            el.addEventListener('focus', () => {
                gsap.to(el, { boxShadow: "0 0 0 3px #fdb00a55", duration: 0.3 });
            });
            el.addEventListener('blur', () => {
                gsap.to(el, { boxShadow: "none", duration: 0.3 });
            });
        });
    }
    document.querySelector('.contact-form').addEventListener('submit', function (event) {
        const nombre = document.getElementById('nombre').value.trim();
        const email = document.getElementById('email').value.trim();

        if (!nombre || !email) {
            event.preventDefault();
            alert('Por favor, completa todos los campos obligatorios.');
        }
    });
});