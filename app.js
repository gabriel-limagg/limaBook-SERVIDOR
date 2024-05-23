const express = require("express")
const app = express()
const rotaLivro =require("./rotas/livro")
const cors = require("cors")
app.use(express.json())
app.use(cors({origin:"*"}))
const port = 8000

app.use ('/livros', rotaLivro)
app.listen(port, () => {
    console.log(`escutando a porta ${port}`)
})
