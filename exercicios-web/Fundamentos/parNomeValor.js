// par nome/valor
const saudaçao = 'Opa' //contexto lexico 1

function exec() {
    const saudaçao = 'Falaaa' //contexto lexico 2
    return saudaçao
}

// Objetos são grupo aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereço: {
        logradouro: 'Rua muito legal',
        numero: 123
    }
}

console.log(saudaçao)
console.log(exec())
console.log(cliente)