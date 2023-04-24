/*const nome = 'Fulano de Tal'

for (let i = 0; i < nome.length; i++) {
    const letra = nome[i];
    console.log(letra)   
}
console.log(notas.length)*/

const notas = []

notas.push(10);
notas.push(9);
notas.push(8);


let soma = 0;

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota;
    
}

const media =soma / notas.length
console.log(media.toFixed(2))
