/*Crie uma classe para representar carros.
Os carros possuem uma marca, cor e um gasto médio de combustível por KMs rodados.
Crie um método que dado a quantidade de quilômetros e o preço do combustível nos dê o valor gasto em reais para realizar este percurso*/
class Carro {
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca, cor, gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

    gastoDaViagem(distanciaEmKm, precoCombustivel) {
        return distanciaEmKm * this.gastoMedioPorKm * precoCombustivel;
    }

}
const gol = new Carro('VolksWagen', 'Preto', 1 / 12);
console.log(gol.gastoDaViagem(70, 5))
const palio = new Carro('Fiat', 'Vermelho', 1 / 10)
console.log(palio.gastoDaViagem(70, 5))