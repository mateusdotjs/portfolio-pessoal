let elementos = document.querySelectorAll('.esconder');
console.log(elementos)

let parametros = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3
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