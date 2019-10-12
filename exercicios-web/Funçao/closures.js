// Clousure é o espoco criado quando uma funçao declarada
// Esse escopo permite a funçao acessar e manipular variaveis externas à funçao

// Contexto léxico em açao

const x = 'Global'

function fora() {
    const x = 'Local'
    function dentro() {
        return x
    }
    return dentro
}

const minhaFunçao = fora()
console.log(minhaFunçao())