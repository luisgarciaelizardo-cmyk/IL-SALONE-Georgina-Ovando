// IL SALONE · Georgina Ovando
(function () {
  const nav = document.querySelector('.nav');
  const toggle = document.querySelector('.nav__toggle');
  const menu = document.getElementById('menu');

  // Menú móvil
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!open));
    toggle.setAttribute('aria-label', open ? 'Abrir menú' : 'Cerrar menú');
    menu.classList.toggle('is-open', !open);
  });
  menu.querySelectorAll('a').forEach((link) =>
    link.addEventListener('click', () => {
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Abrir menú');
      menu.classList.remove('is-open');
    })
  );

  // Sombra en la barra al hacer scroll
  const onScroll = () => nav.classList.toggle('is-scrolled', window.scrollY > 10);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Animación de aparición
  const targets = document.querySelectorAll('.section__head, .card, .steps li, .about__frame, .about__text, .contact__info, .map-card, .social');
  if ('IntersectionObserver' in window) {
    targets.forEach((el) => el.classList.add('reveal'));
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          io.unobserve(e.target);
        }
      }),
      { threshold: 0.12 }
    );
    targets.forEach((el) => io.observe(el));
  }

  // Año del footer
  document.getElementById('year').textContent = new Date().getFullYear();
})();
