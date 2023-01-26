const menuIcon = document.querySelector('.mobile-menu-icon')
const menu = document.querySelector('.mobile-menu')


menuIcon.addEventListener('click', () => {
    menu.classList.toggle('off')
})