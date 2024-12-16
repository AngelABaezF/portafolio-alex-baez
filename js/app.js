// Detectar el movimiento del cursor y scroll
let lastScrollPosition = 0;
const header = document.querySelector('.header');

document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.getElementById("menu-icon");
    const sideMenu = document.getElementById("side-menu");
    const closeBtn = document.getElementById("close-btn");
    const menuLinks = document.querySelectorAll(".side-menu-links a");
    const logo = document.getElementById("logo");

    // Abrir menú lateral
    menuIcon.addEventListener("click", () => {
        sideMenu.classList.add("active");
    });

    // Cerrar menú lateral
    closeBtn.addEventListener("click", () => {
        sideMenu.classList.remove("active");
    });

    // Cerrar menú al hacer clic en un enlace
    menuLinks.forEach(link => {
        link.addEventListener("click", () => {
            sideMenu.classList.remove("active");
        });
    });

    // Cambiar el texto del logo según el ancho de la pantalla
    const updateLogoText = () => {
        if (window.innerWidth <= 280) {
            logo.textContent = "ÁABF";
        } else if (window.innerWidth <= 760) {
            logo.textContent = "Alex Báez";
        } else {
            logo.textContent = "Ángel Alexander Báez Flores";
        }
    };

    // Ejecutar al cargar y al redimensionar
    updateLogoText();
    window.addEventListener("resize", updateLogoText);
});

document.addEventListener('DOMContentLoaded', function () {
    // Elementos de la línea de tiempo
    const timelinePoints = document.querySelectorAll('.timeline-point');
    const timelineInfos = document.querySelectorAll('.timeline-info');
    const prevButton = document.querySelector('.prev-btn');
    const nextButton = document.querySelector('.next-btn');

    let currentIndex = 0;  // Inicializamos en el primer punto de la línea de tiempo

    // Función para cambiar el punto activo
    function updateActivePoint() {
        // Remover la clase 'active' de todos los puntos
        timelinePoints.forEach(point => point.classList.remove('active'));
        timelineInfos.forEach(info => info.classList.remove('active'));

        // Añadir la clase 'active' al punto actual
        timelinePoints[currentIndex].classList.add('active');
        timelineInfos[currentIndex].classList.add('active');
    }

    // Evento para el botón de "Siguiente"
    nextButton.addEventListener('click', function () {
        if (currentIndex < timelinePoints.length - 1) {
            currentIndex++;
            updateActivePoint();
        }
    });

    // Evento para el botón de "Anterior"
    prevButton.addEventListener('click', function () {
        if (currentIndex > 0) {
            currentIndex--;
            updateActivePoint();
        }
    });

    // Inicializamos con el primer punto activo
    updateActivePoint();
});

document.addEventListener('DOMContentLoaded', function () {
    const projectsContainer = document.querySelector('.projects-container');
    const projectCards = document.querySelectorAll('.project-card');
    const prevButton = document.querySelector('.prev-project');
    const nextButton = document.querySelector('.next-project');

    let currentIndex = 0;

    // Función para actualizar la posición del carrusel
    function updateCarousel() {
        const translateX = -currentIndex * 100; // Calculamos el desplazamiento
        projectsContainer.style.transform = `translateX(${translateX}%)`;
    }

    // Evento para botón "Siguiente"
    nextButton.addEventListener('click', function () {
        if (currentIndex < projectCards.length - 1) {
            currentIndex++;
            updateCarousel();
        }
    });

    // Evento para botón "Anterior"
    prevButton.addEventListener('click', function () {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    // Iniciar en el primer proyecto
    updateCarousel();
});


window.addEventListener('scroll', function() {
    // Obtener la posición del scroll actual
    let currentScrollPosition = window.pageYOffset;

    // Si se hace scroll hacia abajo, ocultar el header
    if (currentScrollPosition > lastScrollPosition) {
        header.classList.add('hidden');
    } else {
        header.classList.remove('hidden');
    }

    // Actualizar la posición de scroll
    lastScrollPosition = currentScrollPosition;
});

// Obtener todos los puntos de la línea de tiempo
const timelinePoints = document.querySelectorAll('.timeline-point');

// Recorrer los puntos y agregar eventos hover y salida de cursor
timelinePoints.forEach(point => {
    point.addEventListener('mouseenter', () => {
        // Ocultar todas las secciones de información
        document.querySelectorAll('.timeline-info').forEach(info => {
            info.classList.remove('active');
        });
        
        // Mostrar la información correspondiente al punto
        const infoId = point.getAttribute('data-info');
        document.getElementById(infoId).classList.add('active');
    });

    // Evento para ocultar la información cuando el cursor sale del punto
    point.addEventListener('mouseleave', () => {
        const infoId = point.getAttribute('data-info');
        document.getElementById(infoId).classList.remove('active');
    });
});

// Detectar si el mouse se acerca al top de la pantalla
window.addEventListener('mousemove', function(event) {
    if (event.clientY < 50) { // Si el mouse está cerca del top de la ventana (ajusta los píxeles si es necesario)
        header.classList.remove('hidden');
    }
});



// Scroll suave al hacer clic en los enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function filterProjects(category) {
    // Obtener todas las tarjetas de proyectos
    const cards = document.querySelectorAll('.project-card');

    // Si se selecciona "todos", mostrar todas las tarjetas
    if (category === 'all') {
        cards.forEach(card => card.style.display = 'block');
        return;
    }

    // Mostrar solo las tarjetas que coincidan con la categoría seleccionada
    cards.forEach(card => {
        if (card.classList.contains(category)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}