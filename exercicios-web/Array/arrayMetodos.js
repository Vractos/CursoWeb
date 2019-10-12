const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // Removo o ultimo elemento do array
console.log(pilotos)

pilotos.push('Verstappen') // Adiciona um novo elemento ao Array (no final do array)
console.log(pilotos)

pilotos.shift() // Remove o primeiro elemento
console.log(pilotos)

pilotos.unshift('Hamilton') // Adiciona um novo elemento no inicio do array
console.log(pilotos)

// splice pode adicionar e remover elementos

// adicionar

pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// remover
pilotos.splice(3, 1) // Saiu o elemento de indice 3 (nos arrays os indices começam a ser contados do 0)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // Novo array gerado (basicamente voce pega uma parte do array (a partir do indice informado entre parateses) e gera outro array)
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 3) // Primeiro indice indica de onde ele começa a pegar e o segundo indica aonde para
console.log(algunsPilotos2)

