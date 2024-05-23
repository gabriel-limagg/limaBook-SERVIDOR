const fs = require("fs")

function getTodosLivros(){
   return JSON.parse( fs.readFileSync("livros.json"))
}
function getlivroId(id){
    const livros = JSON.parse(fs.readFileSync("livros.json"))
   const livroFiltrado = livros.filter(livro => livro.id === id)[0]
   return livroFiltrado
}
function insereLivro(livroNovo){
    const livros =  JSON.parse(fs.readFileSync("livros.json"))
    const novaListadeLivros = [...livros, livroNovo]
    fs.writeFileSync("livros.json", JSON.stringify(novaListadeLivros))
}

function modificaLivro(modificacoes, id){
    let livrosAtuais = JSON.parse(fs.readFileSync("livros.json"))
    const indeceModificado = livrosAtuais.findIndex(livro => livro.id === id)
    const conteudoMudado = {...livrosAtuais[indeceModificado],...modificacoes}
    livrosAtuais[indeceModificado] = conteudoMudado
    fs.writeFileSync("livros.json", JSON.stringify(livrosAtuais))

}

function deletaLivroID(id){
    const livros =  JSON.parse(fs.readFileSync("livros.json"))
    const deletado = livros.filter(livro => livro.id!== id)
    fs.writeFileSync("livros.json", JSON.stringify(deletado))

}





module.exports = {
    getTodosLivros,
    getlivroId,
    insereLivro,
    modificaLivro,
    deletaLivroID
}