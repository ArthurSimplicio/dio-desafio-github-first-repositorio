/*
1) Faça um algoritmo que dado as 3 notas de um aluno calcule e imprima sua média e a sua classificação conforme a tabela abaixo.

Média = (nota 1 + nota 2 + nota 3) / 3;

Classificação:
- Média menor que 5, reprovação;
- Entre 5 e 7, reecupéração;
- Acima de 7, passou de semestre;
*/

const n1 = 10
const n2 = 6
const n3 = 7

media = (n1 + n2 + n3) / 3

if (media < 5) {
    console.log(`Sua média foi ${media.toFixed(2)}, Reprovado!`)
} else if (media >= 5 && media < 7) {
    console.log(`Sua média foi ${media.toFixed(2)}, Recuperação!`)
} else {
    console.log(`Sua média foi ${media.toFixed(2)}, Aprovado!`)
}