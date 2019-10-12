const porta = 3003

const express = require('express')
const app = express()
const bodyParcer = require('body-parser')
const bancoDeDados = require('./bancoDeDados')

app.use(bodyParcer.urlencoded({ extended: true }))

app.get('/produtos',(req ,res, next) => {
    res.send(bancoDeDados.getProdutos()) // Converte para JSON(devido ao metodo send)
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preço: req.body.preço
    })
    res.send(produto) // Gera um JSON
})

app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preço: req.body.preço
    })
    res.send(produto) // Gera um JSON
})

app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto) // Gera um JSON
})

app.listen(porta, () => {
    console.log(`Servidor esta executando na porta ${porta}.`)
})