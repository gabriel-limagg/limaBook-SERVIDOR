const { getTodosLivros, getlivroId, insereLivro, modificaLivro,deletaLivroporid, deletaLivroID} = require("../servicos/livros")


function getLivros(req, res){
    try{
        const livros = getTodosLivros()
        res.send(livros)
    } catch (error){
        res.status(500)
        res.send(error.message)
    }
}
function getLivro(req, res){
    try{
        const id = req.params.id
        if (id && Number(id)){
            const livro = getlivroId(id)
            res.send(livro)
        }  else{
            res.status(422)
            res.send("id invalido")
        }
        
    } catch (error){
        res.status(500)
        res.send(error.message)
    }
}
 
function postLivro(req, res) {
    try{
        const livroNovo = req.body
        if(req.body.nome){
            insereLivro(livroNovo)
        res.status(201)
        res.send("livro inserido com sucesso")
        }else{
            res.status(201)
        res.send("faltu o nome")
        }
        
    } catch(error){
        res.status(500)
        res.send(error.message)
    }
}
function patchLivro(req, res) {
    try{
        const id = req.params.id
        if (id && Number(id)){
            const body = req.body
            modificaLivro(body, id)
            res.status(200)
            res.send("livro modificado com sucesso")
        } else{
            insereLivro(livroNovo)
        
        }
       
    } catch(error){
        res.status(500)
        res.send(error.message)
    }
}
function deleteLivro(req, res){
    try{
        const id = req.params.id
        if (id && Number(id)){
            deletaLivroID(id)
            res.status(200)
            res.send("livro deletado com sucesso")
        }else{
            res.status(422)
            res.send("id invalido")
        }
       
    } catch(error){
        res.status(500)
        res.send(error.message)
    }
}




module.exports ={
    getLivros,
    getLivro,
    postLivro,
    patchLivro,
    deleteLivro

}

    

 
