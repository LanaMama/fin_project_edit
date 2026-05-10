// ============================================================
//  script.js — мобильное меню
// ============================================================

document.addEventListener('DOMContentLoaded', function () {

    const burger = document.querySelector('.header__burger');
    const mobileMenu = document.querySelector('.mobile-menu');
    const menuClose = document.querySelector('.mobile-menu__close');
    const menuLinks = document.querySelectorAll('.mobile-menu__link');

    // Открыть меню
    if (burger) {
        burger.addEventListener('click', () => {
            document.body.classList.add('menu-open');
        });
    }

    // Закрыть по крестику
    if (menuClose) {
        menuClose.addEventListener('click', () => {
            document.body.classList.remove('menu-open');
        });
    }

    // Закрыть по ссылке
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            document.body.classList.remove('menu-open');
        });
    });

    // Закрыть по Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            document.body.classList.remove('menu-open');
        }
    });

});


