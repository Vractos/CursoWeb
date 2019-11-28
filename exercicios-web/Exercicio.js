function tamanhoNomeCompleto ( nome, sobrenome) {
    let nomeCompleto = (nome + sobrenome)
    return nomeCompleto.length + 1
}

console.log(tamanhoNomeCompleto('paulo','Vinicius'))

var a = 'Ola'
var b = 'Blz'

var vazio = ''

var la = vazio + a + b
console.log(la)

function escreverCartao(titulo, nome, sobrenome) {
    return `${titulo} ${nome} ${sobrenome}`
}

console.log(escreverCartao('Senhor', 'Paulo', 'Vinicius'))
