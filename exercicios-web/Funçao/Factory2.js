function criarProduto(nome, preço) {
    const desconto = (preço * 10) / 100
    return {
        nome: nome,
        preço: `R$${preço - desconto.toFixed(2)}`,
    }
    
}

console.log(criarProduto('Tenis', 50.99))