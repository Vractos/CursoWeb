// let e const
{
    var a = 5
    let b = 8
    console.log(b)
}
console.log(a)

// Tamplate String
const produto = 'Ipad'
console.log(`${produto} é caro!`)

// Destruction
const [l,e, ...tras] = 'Cod3r'
console.log(l, e, tras)

const [x, , y] = [1, 2, 3]
console.log(x, y)

const { idade: i, nome } = { nome: 'Ana', idade: 9 }
console.log(i, nome)