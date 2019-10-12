let valor //nao inicializada
console.log(valor)

valor = null 
/*ausencia de valor, o "null" indica 
que a variavel esta sem nada atribuido,nao
aponta pra nenhum lugar da memoria.
*/
const produto = {}
console.log(produto.preço)
console.log(produto)

produto.preço = 3.50
console.log(produto.preço)

produto.preço = undefined //evitar atribuir "undefined"
console.log(!!produto.preço)
console.log(produto)

produto.preço = null //sem preço
console.log(!!produto.preço)
console.log(produto)