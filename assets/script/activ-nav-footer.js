document.addEventListener('DOMContentLoaded', function () {
    const currentPath = window.location.pathname + window.location.hash;
    
    // Подсветка в навигации
    const menuLinks = document.querySelectorAll('.menu__link');
    menuLinks.forEach(link => {
        const linkPath = new URL(link.href).pathname + new URL(link.href).hash;
        if (currentPath === linkPath || (linkPath === '/index.html' && currentPath === '/')) {
            link.parentElement.classList.add('active');
        }
    });

    // Подсветка в футере
    const footerLinks = document.querySelectorAll('.footer__link');
    footerLinks.forEach(link => {
        const linkPath = new URL(link.href).pathname + new URL(link.href).hash;
        if (currentPath === linkPath) {
            link.classList.add('active');
        }
    });
});
