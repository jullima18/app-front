const inputupload = document.getelementbyid('meu-upload')

inputupload.addeventlistener('change',function(evento) {
    const arquivo  = evento.target.files[0]
    if(arquivo) {
        const nomedaimagem = arquivo.nome
console.log(nomedaimagem)
    } else{
        console.log("nenhum arquivo selecionado.")
    }
    
});