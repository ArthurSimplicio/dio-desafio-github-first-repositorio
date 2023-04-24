/*Faca um programa para calcular o valor de uma viagem.
Você terá  5 variáveis. Sendo elas:
1 - Preço do etanol;
2 - Preço da gasolina;
3 - O tipo de combustível do seu carro;
4 - Gasto médio de combustível do carro por KM;
5 - Distância em KM da viagem;

Imprima o valor que será gasto para realizar esta viagem
*/
const precoEtanol = 5.79;
const precoGasolina = 6.99;
const kmPorLitros = 12;
const distanciaEmKm = 1580;
const tipoCombustivel = 'Gasolina';

const litrosConsumidos = distanciaEmKm / kmPorLitros

if (tipoCombustivel === 'Etanol') {
    const valorGasto = litrosConsumidos * precoEtanol;
    console.log(`O valor gasto com Etanol foi de R$${valorGasto.toFixed(2)}`)
} else if (tipoCombustivel === 'Gasolina') {
    const valorGasto = litrosConsumidos * precoGasolina;
    console.log(`O valor gasto com Gasolina foi de R$${valorGasto.toFixed(2)}`)
} else{
    console.log('ERRO!')
}
