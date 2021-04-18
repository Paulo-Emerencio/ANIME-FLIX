const $openMenu = document.querySelector('#open-menu');
const $closeMenu = document.querySelector('#close-menu');
const $menu = document.querySelector('.menu');

$openMenu.addEventListener('click', function () {
    $menu.classList.add('opened');
});

$closeMenu.addEventListener('click', function () {
    $menu.classList.remove('opened');
});