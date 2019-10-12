function area(largura, altura) {
 
    if (largura && altura) {
        const area = largura * altura
 
        if (area > 20) {
            return `Valor acima do permitido: ${area}m²`
        } else {
            return area
        }
    } else {
        return 'Tá faltando um valor hein...'
    }
}
 
console.log(area(2, 2))
console.log(area(2))
console.log(area())
console.log(area(3, 3, 17, 22, 44))
console.log(area(5, 5))
