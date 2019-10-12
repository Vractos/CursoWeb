function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2  // "||" significa "ou"(o operador "ou").
    const comprarTv50 = trabalho1 && trabalho2  // "&&" significa "e" (operador "e").
    // const comprarTv32 = !!(trabalho1 ^ trabalho2) // bitwise "xor".
    const comprarTv32 = trabalho1 != trabalho2 // simula o "ou exclusivo" (xor).
    const manterSaudavel = !comprarSorvete // Operador unário.

    return {comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))