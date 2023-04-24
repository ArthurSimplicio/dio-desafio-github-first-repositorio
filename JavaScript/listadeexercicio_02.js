/*
2) Faça um algoritmo que calcule o IMC

formula do IMC
IMC = peso / (altura * altura)
IMC em adultos condição:
- Abaixo de 18.5 Abaixo do peso;
- Entre 18.5 e 25 Peso normal;
- Entre 25 e 30 Acima do peso;
- Entre 30 e 40 Obeso
- Acima de 40 Obesidade Grave
*/
const peso = 130
const altura = 1.74

imc = peso / Math.pow(altura, 2)

if (imc < 18.5) {
    console.log('Abaixo do peso!')
} else if (imc >= 18.5 && imc < 25) {
    console.log('Peso normal!')
} else if (imc >= 25 && imc < 30) {
    console.log('Acima do peso!')
} else if (imc >= 30 && imc < 40) {
    console.log('Obesidade!')
} else {
    console.log('Obesidade Grave!')
}