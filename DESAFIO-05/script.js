const menuIcon = document.querySelector('#menu-icon');
const mavbar = document.querySelector('nav-links');

menuIcon.addEventListener('click', () => { 
    menuIcon.classList.toggle('close');
    navbar.classList.toggle('active')
});