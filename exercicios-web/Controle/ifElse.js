const imprimirResultado = function (nota) {
    if(nota >= 7) {
        console.log(`Aprovado! Nota: ${nota}`)   //Modo 1 de fzr aparecer a nota (templete string:estudar sobre)
    } else {
        console.log('Reprovado! Nota:' + nota)   //Modo 2
    }
}

imprimirResultado(8)
imprimirResultado(5)