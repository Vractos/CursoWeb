const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))
/*
"isInteger" serviu para checar se o numero em
questão era inteiro
*/ 
const avaliaçao1 = 2.5
const avaliaçao2 = 1.5

const total = avaliaçao1 * peso1 + avaliaçao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(3))
/*
"toFixed" serviu para estabelecer a quantidade de
casas decimais que eu quero que apareça
*/
console.log(media.toString(2))
console.log(typeof media)
console.log(typeof Number)
