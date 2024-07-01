document.addEventListener('DOMContentLoaded', function () {
    const menuHamburger = document.querySelector('.menu-hamburger');
    const menu = document.querySelector('ul.menu');

    menuHamburger.addEventListener('click', function () {
        menu.classList.toggle('show');
    });
});