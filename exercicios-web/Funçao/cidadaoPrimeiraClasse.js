//Funçao em JS é First-Class Object(Citizens)
//Higher-order function

//criar de forma literal
function fun1() { }

//Armazenar uma variavel
const fun2 = function () { }

//Armazenar em um array
const array = [function (a,b) {return a + b},fun1 ,fun2]
console.log(array[0](2, 3))     //Esse "[0]" é o indice da funçao que ele vai pegar.

//Armazenar em um atribto de objeto
const obj = {}
obj.falar = function () { 
    return 'Opa'}
console.log(obj.falar())

//Passar funçao como parametro
function run (fun) {
    fun()
}

run(function () { console.log('Executando...')})

//Uma funçao pode retornar/conter uma funçao
function soma (a, b){
    return function (c){
        console.log(a + b + c)
    }
}

soma(2, 3)(4)
//Ou (para chamar a funçao)
const cincoMais = soma(2, 3)
cincoMais(4)