class Hero {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    ataque(){
        let tipoAtaque = ''
        if (this.tipo == 'mago' || this.tipo == 'Mago') {
            tipoAtaque = 'magia'
        } else if(this.tipo == 'guerreiro' || this.tipo == 'Guerreiro'){
            tipoAtaque = 'espada'
        } else if(this.tipo == 'monge' || this.tipo == 'Monge'){
            tipoAtaque = 'Artes Marciais'
        } else if(this.tipo == 'ninja' || this.tipo == 'Ninja'){
            tipoAtaque = 'Shuriken'
        } 
        console.log(`O ${this.tipo} atacou usando ${tipoAtaque}`);

    }
}
const heroi1 = new Hero('Goku', 20,'guerreiro');