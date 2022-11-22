let btnMenu = document.querySelector('#btn-menu')
let nav = document.querySelector('nav')

btnMenu.addEventListener('click', () => {
    nav.classList.toggle('visivel')
})