const nums =[1, 2, 3, 4, 5]

//For com propositos
let resultado = nums.map(function(e){
    return e * 2
})
// O "map" não altera o array original, e sim gera um novo, matendo o array original intacto.

console.log(resultado)

const soma10 = e => e + 10 // Funções Arrow tem retorno implicito
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)