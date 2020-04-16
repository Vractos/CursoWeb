const express = require('express')
const app = express()

app.get('/hello', (req, res) => {
    res.send({
        name: 'Ipad 32Gb',
        price: 1899.00,
        discount: 0.12,
        carac: [{filter: true, fad: 123}, {filter: false, fad: 123}]
    })
})

app.listen(3000, () => {
    console.log('backend rodando')
})