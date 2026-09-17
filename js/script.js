document.addEventListener("DOMContentLoaded", function () {
  function animate({ timing, draw, duration }) {
    let start = performance.now();
    requestAnimationFrame(function animate(time) {
      let timeFraction = (time - start) / duration;
      if (timeFraction > 1) timeFraction = 1;

      let progress = timing(timeFraction);
      draw(progress);

      if (timeFraction < 1) {
        requestAnimationFrame(animate);
      }
    });
  }

  const content = document.querySelector(".container");

  animate({
    duration: 1200,

    timing(timeFraction) {
      return timeFraction;
    },

    draw(progress) {
      content.style.opacity = progress;
      content.style.transform = `translateX(${(1 - progress) * 1200}px)`;
    },
  });
});

async function cargarNavbar() {
  const contenedor = document.getElementById("navBar-container");

  if (!contenedor) return;

  try {
    const respuesta = await fetch("navbar.html");

    if (!respuesta.ok) {
      throw new Error("No se pudo cargar el navbar");
    }

    const navbar = await respuesta.text();

    contenedor.innerHTML = navbar;
  } catch (error) {
    console.error("Error cargando el navbar:", error);
  }

  inicializarMenu();
}

function inicializarMenu() {
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("navbar-links");

  if (!menuToggle || !navLinks) return;

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
      menuToggle.textContent = "✕";
    } else {
      menuToggle.textContent = "☰";
    }
  });
}
cargarNavbar();
