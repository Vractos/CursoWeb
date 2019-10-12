const escola = 'Cod3r'

console.log(escola.charAt(4))
/*
*O 'charAt' serve para retomar um
indice.
*/
console.log(escola.substring(2))
//exibe apartir do segundo indice.
console.log(escola.substring(1, 3))
//exibe do primeiro indice até o terceiro.

console.log('Escola '.concat(escola).concat("?"))

console.log(escola.replace(3, 'e'))
//Substituiu o numero "3" pela letra "e".

console.log(escola.replace(/\d/, 'e'))
//*O "/\d/" substitui todos os numeros.

console.log(escola.replace(/\w/g, 'e'))
//*O "/\w/g"substitui todos os indices.

