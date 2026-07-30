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

  // Portafolio dinámico — cada nueva web se agrega aquí (más reciente arriba)
  var projects = [
    { name: 'Cardinal Studio', tag: 'Web · Agencia digital', grad: 1, url: 'https://cardinal-studio.onrender.com', img: 'shots/cardinal.png' },
    { name: 'GYMQUEST', tag: 'App · Gimnasio', grad: 3, url: 'https://gymquest-fosl.onrender.com', img: 'shots/gymquest.png' },
    { name: 'Gastos Cardinal', tag: 'Web · Finanzas', grad: 2, url: 'https://gastos-cardinal.onrender.com', img: 'shots/gastos.png' },
    { name: 'Catalonia Bayahibe', tag: 'Web · Hotel', grad: 4, url: 'https://sosloran.github.io/Catalonia-Bayahibe', img: 'shots/catalonia.png' }
  ];
  var gallery = document.getElementById('gallery');
  if (gallery) {
    projects.forEach(function (p) {
      var a = document.createElement('a');
      a.className = 'shot';
      a.href = p.url;
      a.target = '_blank';
      a.rel = 'noopener';
      a.innerHTML = '<span class="shot__tag">' + p.tag + '</span>' +
                    '<img class="shot__img" src="' + p.img + '" alt="' + p.name + '" />' +
                    '<span class="shot__title">' + p.name + '</span>';
      gallery.appendChild(a);
    });
  }

  // Sombra de nav al hacer scroll
  var nav = document.getElementById('nav');
  window.addEventListener('scroll', function () {
    if (nav) nav.style.boxShadow = window.scrollY > 10 ? '0 8px 30px rgba(0,0,0,.25)' : 'none';
  });

  // Formulario: envía a tigsociety1816@gmail.com vía Formsubmit.co (acción en el HTML)
  var form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function () {
      var note = document.getElementById('formNote');
      var nombre = form.nombre.value.trim();
      if (!nombre || !form.email.value || !form.mensaje.value) {
        if (note) { note.textContent = 'Completa nombre, email y mensaje.'; note.style.color = '#ff7a18'; }
        return false;
      }
      // Dejar que el navegador envíe el formulario (Formsubmit entrega el correo)
      if (note) { note.textContent = 'Enviando tu idea a Cardinal Studio...'; note.style.color = '#ff3b3b'; }
      return true;
    });
  }
})();
