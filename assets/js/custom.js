document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector(".navanimation"); // Selecciona el nav por su clase
    const topNav = document.getElementById("templatemo_nav_top"); // Selecciona el menú superior

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) { // Cambia el valor según cuándo quieras que cambie el color
            nav.classList.add("scrolled");
            topNav.classList.add("hidden"); // Oculta el menú superior
        } else {
            nav.classList.remove("scrolled");
            topNav.classList.remove("hidden"); // Muestra el menú superior
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector(".navanimation"); // Selecciona el nav por su clase
    const body = document.body;

    // Verifica si estás en la página shop-single
    if (body.classList.contains("shop-single-page")) {
        window.addEventListener("scroll", function () {
            if (window.scrollY > 50) { // Cambia el valor según cuándo quieras que cambie el color
                nav.classList.add("scrolled");
            } else {
                nav.classList.remove("scrolled");
            }
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-link");

    // Detectar la URL actual
    const currentPath = window.location.pathname.split("/").pop();

    navLinks.forEach(link => {
        // Comparar el href del enlace con la URL actual
        if (link.getAttribute("href") === currentPath) {
            link.classList.add("active");
        }

        // Agregar evento para cambiar la clase activa al hacer clic
        link.addEventListener("click", function () {
            navLinks.forEach(nav => nav.classList.remove("active"));
            this.classList.add("active");
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-link");

    // Detectar la URL actual
    const currentPath = window.location.pathname.split("/").pop();

    navLinks.forEach(link => {
        // Comparar el href del enlace con la URL actual
        if (link.getAttribute("href") === currentPath) {
            link.classList.add("active");
        }

        // Agregar evento para cambiar la clase activa al hacer clic
        link.addEventListener("click", function (event) {
            // Prevenir el comportamiento predeterminado si el enlace apunta a "#"
            if (this.getAttribute("href") === "#") {
                event.preventDefault();
            }

            // Cambiar la clase activa
            navLinks.forEach(nav => nav.classList.remove("active"));
            this.classList.add("active");
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const emailInput = document.getElementById('inputemail');
    const emailError = document.getElementById('emailError');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validar mientras el usuario escribe
    emailInput.addEventListener('input', function () {
        if (!emailPattern.test(emailInput.value)) {
            emailInput.style.color = 'red'; // Cambiar el color del texto a rojo
            emailError.style.display = 'block'; // Mostrar el mensaje de error
        } else {
            emailInput.style.color = ''; // Restaurar el color predeterminado
            emailError.style.display = 'none'; // Ocultar el mensaje de error
        }
    });
});

    // Forzar el scroll al inicio de la página al cargar
    window.onload = function() {
        window.scrollTo(0, 0);
    };


    
// Mostrar el botón al llegar al título "Categories of The Month"

    // Mostrar el botón al llegar al título "Categories of The Month"
    const backToTopButton = document.getElementById('backToTop');
    const categoriesSection = document.querySelector('h1.h1');

document.addEventListener('DOMContentLoaded', () => {
    const backToTopButton = document.getElementById('backToTop');

    // Asegura que el botón sea visible siempre
    backToTopButton.style.display = 'block';

    // Volver al principio al hacer clic en el botón
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});


    // Volver al principio al hacer clic en el botón
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });


document.addEventListener('DOMContentLoaded', () => {
    const footerBackToTop = document.getElementById('footerBackToTop');

    footerBackToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});


document.querySelectorAll('.categoria-link').forEach(function(link) {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        var categoria = this.getAttribute('data-categoria');
        // Oculta todos los productos
        document.querySelectorAll('.product-wap').forEach(function(card) {
            card.style.display = 'none';
        });
        // Muestra solo los de la categoría seleccionada
        document.querySelectorAll('.' + categoria).forEach(function(card) {
            card.style.display = '';
        });
    });
});



// Al cargar la página, muestra solo los productos de la primera categoría (opcional)
window.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.product-wap').forEach(function(card) {
        card.style.display = 'none';
    });
    
    document.querySelectorAll('.pan').forEach(function(card) { card.style.display = ''; });
});

// Evento para los enlaces de categoría
document.querySelectorAll('[data-categoria]').forEach(function(link) {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        var categoria = this.getAttribute('data-categoria');
        // Oculta todos los productos
        document.querySelectorAll('.product-wap').forEach(function(card) {
            card.style.display = 'none';
        });
        // Muestra solo los de la categoría seleccionada
        document.querySelectorAll('.' + categoria).forEach(function(card) {
            card.style.display = '';
        });
    });
});



window.addEventListener('DOMContentLoaded', function() {
    // Oculta todos los productos
    document.querySelectorAll('.product-wap').forEach(function(card) {
        card.style.display = 'none';
    });
    // Muestra solo los productos de la categoría 'pan'
    document.querySelectorAll('.pan').forEach(function(card) {
        card.style.display = '';
    });
});



$(document).ready(function() {
    $('[data-categoria]').on('click', function(e) {
        e.preventDefault();
        var categoria = $(this).data('categoria');
        var $row = $('#productos-row');

        // Mostrar todas si seleccionas "todos"
        if (categoria === 'todos') {
            $row.children('.col-md-4').show();
            return;
        }

        // Oculta todas las tarjetas
        $row.children('.col-md-4').hide();

        // Muestra y mueve al principio las de la categoría seleccionada
        $row.children('.col-md-4.' + categoria).each(function() {
          
        });
    });
});



// Filtrado simple por categoría, sin reordenar
$(document).ready(function() {
    $('[data-categoria]').on('click', function(e) {
        e.preventDefault();
        var categoria = $(this).data('categoria');
        var $row = $('#productos-row');

        // Mostrar todas si seleccionas "todos"
        if (categoria === 'todos') {
            $row.children('.col-md-4').show();
            return;
        }

        // Oculta todas las tarjetas
        $row.children('.col-md-4').hide();

        // Solo muestra las de la categoría seleccionada (sin cambiar el orden)
        $row.children('.col-md-4.' + categoria).show();
    });
});

// ...existing code...
document.addEventListener('DOMContentLoaded', function() {
    const imgs = document.querySelectorAll('.ir-a-tienda-img');
    function mostrarImagenes() {
        imgs.forEach(img => {
            const rect = img.getBoundingClientRect();
            if (rect.top < window.innerHeight - 60) {
                img.classList.add('visible');
            }
        });
    }
    window.addEventListener('scroll', mostrarImagenes);
    mostrarImagenes(); // Ejecuta al cargar
});






document.addEventListener("DOMContentLoaded", function() {
  if(window.location.hash) {
    var el = document.querySelector(window.location.hash);
    if(el) {
      setTimeout(function() {
        var y = el.getBoundingClientRect().top + window.pageYOffset - 150; // Cambiado de 120 a 80
        window.scrollTo({top: y, behavior: "smooth"});
      }, 300);
    }
  }
  // Para clicks en los enlaces internos
  document.querySelectorAll('a[href^="shop.html#"]').forEach(function(link) {
    link.addEventListener('click', function(e) {
      var hash = this.hash;
      var el = document.querySelector(hash);
      if(el) {
        e.preventDefault();
        var y = el.getBoundingClientRect().top + window.pageYOffset - 150; // Cambiado de 120 a 80
        window.scrollTo({top: y, behavior: "smooth"});
        history.pushState(null, null, hash);
      }
    });
  });
});

// ...existing code...
document.addEventListener('DOMContentLoaded', function() {
    var categoria = window.location.hash ? window.location.hash.substring(1) : 'pan';

    // Oculta todos los productos
    document.querySelectorAll('.product-wap').forEach(function(card) {
        card.classList.add('d-none');
    });

    // Muestra solo los productos de la categoría seleccionada
    document.querySelectorAll('.' + categoria).forEach(function(card) {
        card.classList.remove('d-none');
    });

    // Scroll al contenedor de productos si hay hash
    if(window.location.hash) {
        setTimeout(function() {
            var productosRow = document.getElementById('productos-row');
            if(productosRow) {
                var y = productosRow.getBoundingClientRect().top + window.pageYOffset - 170;
                window.scrollTo({top: y, behavior: "smooth"});
            }
        }, 200);
    }

    // Para clicks en los enlaces internos de categorías
    document.querySelectorAll('[data-categoria]').forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            var categoria = this.getAttribute('data-categoria');
            document.querySelectorAll('.product-wap').forEach(function(card) {
                card.classList.add('d-none');
            });
            document.querySelectorAll('.' + categoria).forEach(function(card) {
                card.classList.remove('d-none');
            });
            // Scroll al contenedor de productos
            var productosRow = document.getElementById('productos-row');
            if(productosRow) {
                var y = productosRow.getBoundingClientRect().top + window.pageYOffset - 170;
                window.scrollTo({top: y, behavior: "smooth"});
                history.pushState(null, null, '#' + categoria);
            }
        });
    });
});



document.addEventListener("DOMContentLoaded", function() {
  function mostrarAnimados() {
    document.querySelectorAll('.anim-aparece').forEach(function(el) {
      var rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 60) {
        el.classList.add('visible');
      }
    });
  }
  window.addEventListener('scroll', mostrarAnimados);
  mostrarAnimados();
});

