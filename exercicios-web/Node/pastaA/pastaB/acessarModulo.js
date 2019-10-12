const moduloA = require('../../moduloA')  // Cada "../" sai de uma pasta e vai para uma mais externa
console.log(moduloA.ola)


const suadação = require('saudação')
console.log(suadação.ola)

const c = require('./pastaC')
console.log(c.ola2)


const http = require('http')
 http.createServer((req, res) => {
    res.write('<h1>Bom dia!<h1>')
    res.end()
}).listen(8080)
