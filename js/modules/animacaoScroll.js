export default function iniciarAnimacao() {
    let elementos = document.querySelectorAll('.esconder');

    let parametros = {
        root: null,
        rootMargin: '-60px 0px 0px 0px',
        threshold: 0.35
    }

    let observador = new IntersectionObserver(callback, parametros)

    elementos.forEach(elemento => {
        observador.observe(elemento)
    })

    function callback(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.replace('esconder', 'mostrar')
            } else {
                entry.target.classList.replace('mostrar', 'esconder')
            }
        })
    }
}