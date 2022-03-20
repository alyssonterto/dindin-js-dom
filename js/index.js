//1. O header deve ter cor de fundo #2E948A
document.getElementsByTagName("header")[0].style.backgroundColor = "#2E948A"

/*2. No menu do header, está faltando o link do item Cursos que deve redirecionar
para cursos.html */
document.querySelector("#menu_opcoes nav a").setAttribute("href", "./cursos.html")

/*3. No banner da home, está faltando centralizar os elementos filhos da section que
tem o id#introducao. */

document.querySelector("#introducao").style.justifyContent = "center"

/*4. Na etapa de depoimentos, o título deveria ser "O que falam sobre nós". class tem espaços = utiliza . ao invés do espaço. ex.: "class name" -> "class.name" */

document.querySelector(".titulo.depoimento h3").innerHTML = "O que falam sobre nós"

/*5. Na etapa de blog, o título deveria ser "Mais conteúdo pra você" */

document.querySelectorAll(".titulo h3")[1].innerHTML = "Mais Conteúdo pra você"

//6. Todos os textos que estiverem com a classe.titulo devem apresentar todas as letras maiúsculas.

let maiuscula = document.querySelectorAll(".titulo")
maiuscula.forEach(item => {
    item.style.textTransform = "uppercase";
})

/*7. O botão "ver todos os posts" deve ter um link que direciona para o arquivo
blog.htm */

document.querySelector("#todos_posts").setAttribute("href", "./blog.html") //settAttribute cria o novo atributo e atribui o valor a ele

//8. Adicionar um novo curso na section que contém o id investimentos_poupando_independencia

let div = document.createElement('div')
div.innerHTML = `
<div id="independencia">
    <img src="/imagens/independencia_financeira.png" width="180px" alt="Independência Financeira"/>
    <h2>Independência Financeira</h2>
    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat      nulla     ariatur.</p>
    <a class="comecar_agora" href="./curso.html">começar agora</a>
</div>`

let divprimeiro = document.querySelector('#investimentos')

divprimeiro.insertAdjacentElement("beforebegin",div)