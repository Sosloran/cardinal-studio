// Cardinal Studio — interacciones mínimas
(function () {
  // Año dinámico
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // Toggle de tema (claro/oscuro) con persistencia
  var toggle = document.getElementById('themeToggle');
  var root = document.documentElement;
  var saved = null;
  try { saved = localStorage.getItem('cs-theme'); } catch (e) {}
  if (saved) {
    root.setAttribute('data-theme', saved);
    if (toggle) toggle.textContent = saved === 'light' ? '☀️' : '🌙';
  }
  if (toggle) {
    toggle.addEventListener('click', function () {
      var isLight = root.getAttribute('data-theme') === 'light';
      var next = isLight ? 'dark' : 'light';
      root.setAttribute('data-theme', next);
      toggle.textContent = next === 'light' ? '☀️' : '🌙';
      try { localStorage.setItem('cs-theme', next); } catch (e) {}
    });
  }

  // Sombra de nav al hacer scroll
  var nav = document.getElementById('nav');
  window.addEventListener('scroll', function () {
    if (nav) nav.style.boxShadow = window.scrollY > 10 ? '0 8px 30px rgba(0,0,0,.25)' : 'none';
  });

  // Formulario: demo local (no envía a ningún lado)
  var form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var note = document.getElementById('formNote');
      var nombre = form.nombre.value.trim();
      if (!nombre || !form.email.value || !form.mensaje.value) {
        if (note) { note.textContent = 'Completa nombre, email y mensaje.'; note.style.color = '#ff7a18'; }
        return;
      }
      if (note) { note.textContent = 'Gracias ' + nombre + ', mensaje listo (demo local).'; note.style.color = '#ff3b3b'; }
      form.reset();
    });
  }
})();
