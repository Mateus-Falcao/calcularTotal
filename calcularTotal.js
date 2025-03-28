function calcularTotal(precoUnitario, quantidade) {
    return precoUnitario * quantidade;
}
function aplicarDesconto(valorTotal) {
    if (valorTotal > 100) {
        return valorTotal * 0.90;
    } else {
        return valorTotal;
    }
}
function exibirResumo() {
    let precoUnitario = parseFloat(prompt("Informe o preço unitário do produto:"));
    let quantidade = parseInt(prompt("Informe a quantidade comprada:"));

    let valorTotal = calcularTotal(precoUnitario, quantidade);
    
    let valorComDesconto = aplicarDesconto(valorTotal);

    alert(`Resumo da Compra:
    - Valor total antes do desconto: R$ ${valorTotal.toFixed(2)}
    - Valor final com o desconto: R$ ${valorComDesconto.toFixed(2)}`);
}
exibirResumo();
