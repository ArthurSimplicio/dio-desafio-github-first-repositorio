function aplicarDesconto(valor, desconto) {
    return (valor - (valor * (desconto / 100)))
}

function aplicarJuros(valor, juros) {
    return (valor + (valor * (juros / 100)))
}
const produto = 100
const formaDePagamento = 4

if (formaDePagamento === 1) {
    console.log(aplicarDesconto(produto, 10))
} if (formaDePagamento === 2) {
    console.log(aplicarDesconto(produto, 15))
} if (formaDePagamento === 3) {
    console.log(produto)
} else {
    console.log(aplicarJuros(produto, 10))
    // console.log(juros)
}
console.log(aplicarDesconto(200, 10))