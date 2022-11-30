export default function iniciarMenu() {
    let btnMenu = document.querySelector('#btn-menu')
    let nav = document.querySelector('nav')
    let li = nav.querySelectorAll('li')

    btnMenu.addEventListener('click', () => {
        nav.classList.toggle('visivel')
    })

    li.forEach(item => {
        item.addEventListener('click', () => {
            if (window.innerWidth <= 800) {
                nav.classList.toggle('visivel')
            }
        })
    })
}