const filhas = ['Valeskah', 'Cibalena']
const filhos = ['Uoxiton', 'Uesclei']
const todos = filhas.concat(filhos, 'Fulano') // Além de concatenar eu posso adicionar mais um elemento
console.log(todos, filhas, filhos)

console.log([].concat([1, 2], [3, 4], 5, [[6,7]]))