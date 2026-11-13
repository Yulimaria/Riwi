// El botón del encabezado muestra u oculta el menú en pantallas pequeñas.
const menuButton = document.querySelector('.menu-toggle');
const mainNavigation = document.querySelector('#main-navigation');

if (menuButton && mainNavigation) {
    menuButton.addEventListener('click', () => {
        const menuIsOpen = menuButton.getAttribute('aria-expanded') === 'true';
        menuButton.setAttribute('aria-expanded', String(!menuIsOpen));
        menuButton.setAttribute('aria-label', menuIsOpen ? 'Abrir menú' : 'Cerrar menú');
        mainNavigation.classList.toggle('hidden', menuIsOpen);
    });

    mainNavigation.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            mainNavigation.classList.add('hidden');
            menuButton.setAttribute('aria-expanded', 'false');
            menuButton.setAttribute('aria-label', 'Abrir menú');
        });
    });
}

// El carrusel actualiza la promoción, su texto alternativo y el indicador activo.
const slides = [...document.querySelectorAll('.promo-slide')];
const dots = [...document.querySelectorAll('.carousel-dot')];
const carousel = document.querySelector('.promo-carousel');
let currentSlide = 0;
let carouselTimer;

function showSlide(index) {
    if (!slides.length) return;
    currentSlide = (index + slides.length) % slides.length;
    slides.forEach((slide, slideIndex) => {
        const isActive = slideIndex === currentSlide;
        slide.classList.toggle('promo-active', isActive);
        slide.setAttribute('aria-hidden', String(!isActive));
        slide.inert = !isActive;
    });
    dots.forEach((dot, dotIndex) => {
        const isActive = dotIndex === currentSlide;
        dot.classList.toggle('is-current', isActive);
        if (isActive) dot.setAttribute('aria-current', 'true');
        else dot.removeAttribute('aria-current');
    });
}

function stopCarousel() {
    window.clearInterval(carouselTimer);
}

function startCarousel() {
    stopCarousel();
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (slides.length > 1 && !reducedMotion) {
        carouselTimer = window.setInterval(() => showSlide(currentSlide + 1), 6000);
    }
}

document.querySelector('.carousel-prev')?.addEventListener('click', () => {
    showSlide(currentSlide - 1);
    startCarousel();
});
document.querySelector('.carousel-next')?.addEventListener('click', () => {
    showSlide(currentSlide + 1);
    startCarousel();
});
dots.forEach((dot, index) => dot.addEventListener('click', () => {
    showSlide(index);
    startCarousel();
}));
carousel?.addEventListener('mouseenter', stopCarousel);
carousel?.addEventListener('mouseleave', startCarousel);
carousel?.addEventListener('focusin', stopCarousel);
carousel?.addEventListener('focusout', startCarousel);
if (slides.length) startCarousel();

// La validación visual complementa las reglas nativas required, pattern, min y max.
const reservationForm = document.querySelector('#formulario-reserva');
const formStatus = document.querySelector('#form-status');

reservationForm?.querySelectorAll('input, select, textarea').forEach((control) => {
    const feedback = control.parentElement.querySelector('.field-error')
        || reservationForm.querySelector(`#error-${control.id}`);
    if (feedback) control.setAttribute('aria-describedby', feedback.id);
});

reservationForm?.addEventListener('submit', (event) => {
    event.preventDefault();
    reservationForm.classList.add('was-validated');

    if (!reservationForm.checkValidity()) {
        formStatus.textContent = 'Hay datos por corregir. Revisa los mensajes junto a los campos marcados.';
        const firstInvalid = reservationForm.querySelector(':invalid');
        firstInvalid?.focus();
        firstInvalid?.reportValidity();
        return;
    }

    formStatus.textContent = 'La solicitud quedó lista para confirmar con Rueda Libre. Esta demostración no envía datos.';
    reservationForm.reset();
    reservationForm.classList.remove('was-validated');
});

// El aviso informativo se puede cerrar con el botón accesible.
document.querySelector('[data-close-alert]')?.addEventListener('click', (event) => {
    event.currentTarget.closest('.form-alert')?.setAttribute('hidden', '');
});

// El elemento dialog gestiona Escape, el foco y el cierre con sus botones nativos.
const policyDialog = document.querySelector('#policy-dialog');
document.querySelector('[data-open-policy]')?.addEventListener('click', () => policyDialog?.showModal());
document.querySelectorAll('[data-close-policy]').forEach((button) => {
    button.addEventListener('click', () => policyDialog?.close());
});
