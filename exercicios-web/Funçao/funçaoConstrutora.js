function Carro(VelocidadeMaxima = 200,delta = 5) {
    // Atributo privado
    let VelocidadeAtual = 0

    // Metodo Publico
    this.acelerar = function() {
        if (VelocidadeAtual + delta <= VelocidadeMaxima) {
            VelocidadeAtual += delta
        } else {
            VelocidadeAtual = VelocidadeMaxima
        }
    }

    //metodo publico
    this.getVelocidadeAtual = function () {
        return VelocidadeAtual
    }// O "this" que torna publico, se fosse para ser privada era só usar "let;var ou const".
}

const Uno = new Carro
Uno.acelerar()
console.log(Uno.getVelocidadeAtual())

const Ferrari = new Carro(350, 20)
Ferrari.acelerar()
Ferrari.acelerar()
Ferrari.acelerar()
console.log(Ferrari.getVelocidadeAtual())