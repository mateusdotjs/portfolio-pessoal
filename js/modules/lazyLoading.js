export default function lazyLoading() {
    let tecnologias = document.querySelectorAll('.tecnologia')

    if (window.innerWidth >= 800) {
        for (let i = 0; i < tecnologias.length; i++) {
            tecnologias[i].style.transitionDelay = `${i * 100}ms`
        }
    }
  
}