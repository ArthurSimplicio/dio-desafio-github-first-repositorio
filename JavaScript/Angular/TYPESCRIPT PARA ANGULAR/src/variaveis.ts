/**
 * variaveis
 */

//tipos primitivos: boolean, number, string
let ligado: boolean = false;
let nome: string = "Arthur";
let idade: number = 16;
let altura: number = 1.9;

//tipos especiais: null, undefined
let nulo: null = null;
let indefinido: undefined = undefined;

//tipos abrangentes: any, void
let retorno: void 
let retornoView: any = false

//Objeto - sem previsibilidade
let produto: object = {
    name: "Arthur",
    estado: "CE",
    idade: 30
};

//Objeto tipado - com previsibilidade
type ProdutoLoja = {
    nome: string;
    preco: number;
    unidades: number;
};

let meuProduto: ProdutoLoja = {
    nome: "sapato",
    preco: 89.99,
    unidades: 5,
};

/**
 * arrays
 */
let dados: string[] = ["Felipe", "Carla", "Arthur"];
let dados2: Array<string> = ["Felipe", "Carla", "Arthur"];

let infos: (string | number)[] = ["Arthur", "casa", 77];

/**
 * Tuplas
 */
let boleto:[string, number, number] = ["agua conta", 199.90, 5554123];
/**
 * arrays métodos
 */
// dados.pop(); e todos os comandos do javascript

/**
 * Datas
 */
let aniversario: Date = new Date("2023-04-29 19:33");
console.log(aniversario.toString())
