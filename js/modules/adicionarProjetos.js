export default function adicionarProjetos(projetos) {
    let divProjetos = document.querySelector('.grid-projetos')
    console.log(divProjetos)

    projetos.forEach(projeto => {

        divProjetos.innerHTML += `
        <div class="projeto esconder">
          <h3>${projeto.nome}</h3>
          <p>
          ${projeto.descricao}
          </p>
          <a
            href=${projeto.demoUrl}
            target="_blank"
            class="botao-pequeno"
            >Demo</a
          >
          <a
            href=${projeto.repoUrl}
            target="_blank"
            class="botao-pequeno"
            >Repo</a
          >
          <h4>Principais Aprendizados:</h4>
          <ul class="aprendizados">
          ${projeto.aprendizados.map((aprendizado) => `<li class='aprendizado'>${aprendizado}</li>`).join('')}
          </ul>
        </div>
        `
    });
}