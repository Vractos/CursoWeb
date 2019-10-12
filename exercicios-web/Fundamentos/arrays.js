const valores = [7.7, 8.9, 6.3, 9.2] //*Cada elemento é separado por ","
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores)
console.log(valores.length)
/*O "length" indica quantos indices/elementos
tem no array.
*/
valores.push({ id: 3 }, false, null, 'teste')
console.log(valores)

console.log(valores.length)

console.log(valores.pop())
delete valores[5] //retirar determinado indice/elemento.
console.log(valores)

console.log(typeof valores)