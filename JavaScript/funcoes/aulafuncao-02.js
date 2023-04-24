function escreverNome(nome) {
    return 'Meu nome é ' + nome;
}
 //escreverNome('Arthur');
 //escreverNome('Fulano');

 function mostrarIdade(idade){
    if(idade<18){
        console.log(escreverNome('Arthur ') + 'Menor de idade');
    } else {
        console.log(escreverNome('Arthur ') + 'Maior de idade');
    }
 }

 mostrarIdade(18)
