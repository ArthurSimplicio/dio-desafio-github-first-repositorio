/*
3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal da etiqueta e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhido e efetuar o calculo adequado.

Código Condição de pagamento:
1 - À vista Debito, recebe, 10% de desconto;
2 - À vista no Dinheiro ou PIX, recebe 15% de desconto;
3 - Em duas vezes, preço normal de etiqueta sem juros
4 - Acima de duas vezes, preço normal de etiqueta mais 10% de juros*/

const produto = 100
const formaDePagamento = 3

if (formaDePagamento === 1) {
    const desconto = produto - (produto * 0.1)
    console.log(desconto)
} if (formaDePagamento === 2) {
    const desconto = produto - (produto * 0.15)
    console.log(desconto)
} if (formaDePagamento === 3) {
    console.log(produto)
} else {
    const juros = produto + (produto * 0.1)
    console.log(juros)
}