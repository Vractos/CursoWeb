const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) {
    case 10: 
    case 9:
        console.log('Quadro de Honra')
        break
    case 8: case 7: //Pode ser colocado um do lado do outro,ou em baixo.
        console.log('Aprovado')
    case 6: case 4:
        console.log('Recuperaçao')
    case 3: case 2: case 1: case 0:
        console.log('Reprovado')
        break
    default:
        console.log('Nota invaliada')                
    }
    console.log('fim')
}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(2.3)
imprimirResultado(-1)
imprimirResultado(11)