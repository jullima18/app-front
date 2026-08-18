
var url_imagem = ""
var nome = ""

const inputUpload = document.getElementById('foto')

inputUpload.addEventListener('change', function(evento) {

    const arquivo = evento.target.files[0]

    if (arquivo) {
        url_imagem = arquivo.name
        const nomedaimagem = arquivo.name
        console.log(nomedaimagem)
    } else {
        console.log("nenhum arquivo selecionado.")
    }

});

const inputNome = document.getElementById("nome")

const button = document.getElementById("btn")

button.addEventListener("click", () => {
    nome = inputNome.value
    criarUsuario()
})

async function criarUsuario() {

    const novoUsuario = { "nome": nome, "url": url_imagem }

    const resposta = await fetch("https://localhost:3000/alunos", {
        method: 'post',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(novoUsuario)
    });
}