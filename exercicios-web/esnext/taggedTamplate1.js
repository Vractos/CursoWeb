// tagged tamplate - processar o templete dentro de uma função
function tag(partes, ...valores) {
    console.log(partes)
    console.log(valores)
    return 'Outra string'
}

const aluno = 'Gui'
const situação = 'Aprovado'
console.log(tag `${aluno} está ${situação}.`)