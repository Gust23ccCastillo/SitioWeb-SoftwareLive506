// Función para cargar e inyectar componentes mediante AJAX
function loadComponent(file, targetElementId) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', file, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const targetElement = document.getElementById(targetElementId);
            if (targetElement) {
                targetElement.innerHTML = xhr.responseText;
                if (targetElementId === 'header-placeholder') {
                    updateNavigationLinks();
                }
            }
        }
    };
    xhr.send();
}

// Función para construir y actualizar los links de navegación
function updateNavigationLinks() {
    const navUl = document.getElementById('nav-links');
    if (!navUl) return;
    
    // Obtener el nombre del archivo actual (e.g., "index.html")
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    const links = [
        { href: 'index.html', text: 'Inicio' },
        { href: 'Nosotros.html', text: 'Acerca de Nosotros' },
        { href: 'Productos.html', text: 'Nuestros Productos' },
        { href: 'Contacto.html', text: 'Contáctenos' }
    ];

    navUl.innerHTML = ''; // Limpiar la lista
    
    links.forEach(link => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = link.href;
        a.textContent = link.text;
        
        // Opcional: Agregar clase 'active' si es necesario para el estilo
        if (currentPage === link.href) {
            // li.classList.add('active-page'); 
        }

        li.appendChild(a);
        navUl.appendChild(li);
    });
}

// Llamar a las funciones al cargar el DOM
document.addEventListener('DOMContentLoaded', function() {
    loadComponent('header-component.html', 'header-placeholder');
    loadComponent('footer-component.html', 'footer-placeholder');
});

// El resto de tu código para el botón "ir arriba" y el menú móvil
$(document).ready(function() {
    // Botón ir arriba
    $('.btn-up').on('click', function() {
        $('body, html').animate({
            scrollTop: 0
        }, 300);
    });

    // Mostrar/ocultar menú móvil
    $('.show-close-menu-m').on('click', function(e) {
        e.preventDefault();
        var menu = $('.navigation');
        if (menu.hasClass('show-nav-m')) {
            menu.removeClass('show-nav-m');
        } else {
            menu.addClass('show-nav-m');
        }
    });
});