const produtos = [
    { nome: 'Notebook', preço: 2499, fragil: true},
    { nome: 'Ipad Pro', preço: 4199, fragil: true},
    { nome: 'Copo de Vidro', preço: 12.49, fragil: true},
    { nome: 'Copo de Plastico', preço: 18.99, fragil: false}
]

console.log(produtos.filter(function(p) {
    return p.preço >= 500 && p.fragil === true
}))

// Soluçao do professor

console.log(produtos.filter(function(p) {
    return false
}))

const caro = produto => produto.preço >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))