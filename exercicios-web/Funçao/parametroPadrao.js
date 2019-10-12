 // Estrategia 1 para gerar valor padrao
 function soma1(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
 return a + b + c
 }
 
console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0)) /*Ao usar "0" como parametro, vai se entender como falso e vai 
se ultilizar o "1"(que foi dado como parametro na 
funçao,caso o parametro seja falso)*/

// Estrategia  2, 3 e 4 para gerar valor padrão
function soma2(a, b, c) {
    a = a !== undefined ? a : 1  //Estrategia 2
    b = 1 in arguments ? b : 1   //Estrategia 3
    c = isNaN(c) ? 1 : c         //Estrategia 4
return a + b + c
}

console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0))

// Valor padrão do ES2015
function soma3(a = 1, b = 1, c =1 ){
    return a + b + c
}
console.log(soma3(),soma3(3),soma3(1, 2, 3),soma3(0, 0, 0))