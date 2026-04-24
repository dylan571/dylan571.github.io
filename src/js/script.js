// =========================
//      BIENVENIDA
// =========================
window.addEventListener("load", () => {
  console.log("Bienvenido a mi portafolio 🚀");
});


// =========================
//    MENÚ HAMBURGUESA
// =========================
const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
  });

  // cerrar menú al hacer click en un link
  const links = document.querySelectorAll("#nav a");
  links.forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("active");
    });
  });
}


// =========================
//    FORMULARIO CONTACTO
// =========================
const form = document.getElementById("contact-form");
const respuesta = document.getElementById("respuesta");

if (form && respuesta) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;

    respuesta.textContent = `Gracias ${nombre}, tu mensaje fue enviado 🚀`;

    form.reset();
  });
}


// =========================
//    ANIMACIONES SCROLL
// =========================
const elements = document.querySelectorAll(".skill-card");

if (elements.length > 0) {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        obs.unobserve(entry.target); // solo una vez
      }
    });
  });

  elements.forEach(el => {
    el.classList.add("hidden");
    observer.observe(el);
  });
}


// =========================
//     CAMBIO DE TEMA
// =========================
const btnTheme = document.getElementById("btn-theme");

if (btnTheme) {
  btnTheme.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    // guardar preferencia
    if (document.body.classList.contains("light-mode")) {
      localStorage.setItem("theme", "light");
    } else {
      localStorage.setItem("theme", "dark");
    }
  });
}

// aplicar tema guardado
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
  document.body.classList.add("light-mode");
}