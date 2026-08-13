const inputupload = document.getelementbyid('meu-upload')

const url_imagem= ""
const nome = ""

inputupload.addeventlistener('change',function(evento) {

    const arquivo  = evento.target.files[0]

    if(arquivo) {
        url_imagem = arquivo.name
        const nomedaimagem = arquivo.nome
console.log(nomedaimagem)
    } else{
        console.log("nenhum arquivo selecionado.")
    }
    
});

async function criarUsuario() {
    const novoUsuario = {nome: 'ana', idade:25}
    
};
const resposta = await fetch ('https://exemplo.com',{
method: 'post',
headers:{
    'content-type':'application/json'
};
body: JSON.stringify(novoUsuario)
});
const resultado = await resposta.json();
console.log ('criado com sucesso:',resultado)
