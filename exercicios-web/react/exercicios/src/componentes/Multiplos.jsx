import React from 'react'

const BoaTarde = props => <h1>Boa tarde {props.nome}</h1>

const BoaNoite = props => <h1>Boa Noite {props.nome}</h1>

//NOTE: Duas maneiras de exportar (Min 7:15 da aula 352)
export { BoaTarde, BoaNoite }

export default {
    BoaTarde,
    BoaNoite
}