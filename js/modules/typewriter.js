export default function typewriter() {
    let h1 = document.querySelector('#typewriter')
    let texto1 = 'Mateus Soares,'
    let texto2 = 'Desenvolvedor '
    let texto3 = 'Web'
    let ms = 50

    for (let i = 0; i < texto1.length; i++) {
        setTimeout(() => {
            h1.innerHTML += texto1.charAt(i)
        }, i * ms)
    }

    let intervalo1 = texto1.length * ms

    setTimeout(() => {
        h1.innerHTML += '<br>'
    }, intervalo1);

    for (let i = 0; i < texto2.length; i++) {
        setTimeout(() => {
            h1.innerHTML += texto2.charAt(i)
        }, (intervalo1) + i * ms)
    }

    let intervalo2 = texto2.length * ms

    setTimeout(() => {
        h1.innerHTML += '<span></span>'
        let span = h1.querySelector('span')

        for (let i = 0; i < texto2.length; i++) {
            setTimeout(() => {
                span.innerHTML += texto3.charAt(i)
            }, i * ms)
        }
    }, intervalo1 + intervalo2)

    let intervalo3 = texto3.length * ms

    setTimeout(() => {
        h1.innerHTML += '.'
    }, intervalo1 + intervalo2 + intervalo3)

}