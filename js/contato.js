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