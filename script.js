// Mensaje de bienvenida en la consola
console.log('¡Bienvenido a mi portfolio personal! 😊');

// Funcionalidad para dispositivos móviles
function adjustForMobile() {
    if (window.innerWidth <= 768) {
        const nav = document.querySelector('nav');
        const headerContainer = document.querySelector('header .container');
        
        // Crear botón de menú si no existe
        if (!document.querySelector('.menu-btn')) {
            const menuBtn = document.createElement('button');
            menuBtn.className = 'menu-btn';
            menuBtn.innerHTML = '☰ Menú';
            menuBtn.style.display = 'block';
            menuBtn.style.padding = '8px 15px';
            menuBtn.style.background = '#ff6b6b';
            menuBtn.style.color = 'white';
            menuBtn.style.border = 'none';
            menuBtn.style.borderRadius = '5px';
            menuBtn.style.cursor = 'pointer';
            menuBtn.style.marginLeft = 'auto';
            
            // Añadir el botón al contenedor del header
            headerContainer.appendChild(menuBtn);
            
            // Ocultar nav inicialmente en móvil
            nav.style.display = 'none';
            
            // Añadir evento click
            menuBtn.addEventListener('click', function() {
                if (nav.style.display === 'none') {
                    nav.style.display = 'flex';
                    nav.style.flexDirection = 'column';
                    nav.style.width = '100%';
                    nav.style.marginTop = '10px';
                } else {
                    nav.style.display = 'none';
                }
            });
        }
    }
}

// Ejecutar al cargar y al cambiar tamaño
window.addEventListener('load', adjustForMobile);
window.addEventListener('resize', adjustForMobile);