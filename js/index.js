//1. O header deve ter cor de fundo #2E948A
document.getElementsByTagName("header")[0].style.backgroundColor = "#2E948A"

/*2. No menu do header, está faltando o link do item Cursos que deve redirecionar
para cursos.html */
document.querySelector("#menu_opcoes nav a").setAttribute("href", "./cursos.html")

/*3. No banner da home, está faltando centralizar os elementos filhos da section que
tem o id#introducao. */

if (document.querySelector("title").innerText == "Início | Dindin"){ //console.log(window)
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
    
    
    let curso = 
    `<div id="independencia">
        <img src="/imagens/independencia_financeira.png" width="180px" alt="Independência Financeira"/>
        <h2>Independência Financeira</h2>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat      nulla     ariatur.</p>
        <a class="comecar_agora" href="./curso.html">começar agora</a>
    </div>`
    
    document.querySelector("#investimentos_poupando_independencia").innerHTML += curso
}else {
    //9 O formulário não está funcionando, o atributo action deve mandar para url sucesso.html
document.querySelector("#formulario > form").setAttribute("action", "sucesso.html")

//10Após o campo de email, precisamos de um novo campo para que o usuário adicione também um número de telefone
let inputElement = document.createElement("input")
inputElement.setAttribute("type", "telefone")
inputElement.setAttribute("required", "")
inputElement.setAttribute("placeholder", "telefone")
let posicao = document.querySelector("textarea")
posicao.insertAdjacentElement("beforebegin",inputElement)

//11 O campo de mensagem está ultrapassando o tamanho do elemento pai.Podemos resolver adicionando o atributo box-sizing: border-box;
document.querySelector("textarea").setAttribute("style", "box-sizing: border-box")


//O botão não está do tamanho adequado, precisa ter uma largura maior;
document.querySelector("#enviar").setAttribute("style", "width:100px")

//Abaixo da section do formulário, adicione uma seção de comentário igual a página Home.
let novaSecao = document.createElement("section")
novaSecao.innerHTML = `
<div class="depoimentos" style= "display: flex; width: 570px; align-items: center; padding: 10px 50px">
    <img src="imagens/icon-wally.png" width="80px" height="80px" alt="depoimentos da dindim">
    <p>
        ”Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
        totam rem aperiam.”
        <br>
        <br>
        Wally, 25
    </p>
</div>

<div class="depoimentos" style= "display: flex; width: 570px; align-items: center; padding: 10px 50px">
    <img src="imagens/icon-jaden.png" width="80px" height="80px" alt="depoimentos da dindim">
    <p>
        ”Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
        laudantium, totam rem aperiam.”
        <br>
        <br>
        Jaden Smith, 23
    </p>
</div>

<div class="depoimentos" style= "display: flex; width: 570px; align-items: center; padding: 10px 50px">
    <img src="imagens/icon-whoopi.png" width="80px" height="80px" alt="depoimentos da dindim">
    <p>
        ”Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
        laudantium, totam rem aperiam.”
        <br>
        <br>
        Whoopi Goldberg, 37
    </p>
</div>

<div class="depoimentos" style= "display: flex; width: 570px; align-items: center; padding: 10px 50px">
    <img src="imagens/icon-jane.png" width="80px" height="80px" alt="depoimentos da dindim">
    <p>
        ”Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
        laudantium, totam rem aperiam.”
        <br>
        <br>
        Janes Joplin, 29
    </p>
</div>
`
novaSecao.style.display = "flex"
novaSecao.style.flexWrap = "wrap"
novaSecao.style.flexDirection = "row"
novaSecao.style.margin = "10px auto"
novaSecao.style.maxWidth = "1500px"

document.querySelector("footer").insertAdjacentElement("beforebegin", novaSecao)
}