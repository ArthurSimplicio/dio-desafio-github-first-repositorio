
//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.
debugger
let nome = ''
let valor = 0
function calcularValorTotal(n, pedidos, cupom) {
  
    let total = 0;
    for (let i = 0; i < n; i++) {
      //Explicação: Aplica o conceito de destructuring para atribuição do nome e valor.
      //Referência: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
      let [nome, valor] = pedidos[i].split(' ');
      valor = parseFloat(valor);
      total += valor;
    }
    
    //TODO: Criar as condições para aplicar o cupom de desconto (10% ou 20%).
    
  if (cupom === 10) {
      total *= 0.1;
    } else if (cupom === 20) {
        total *= 0.2;
    }
    
    return total.toFixed(2);
  }
  
  //Recupera os valores de entrada, criando um array para os pedidos:
  const n = parseInt(4);
  const pedidos = ["Pizza", 19.99,"Salada", 29.99,"Sushi", 61.00,"Pudim", 10.00];
  for (let i = 0; i < n; i++) {
    pedidos.push(nome, valor);
  }
  const cupom = 10;
  
  //TODO: Analisar e completar a função "calcularValorTotal", invocando-a para obtenção do total.
 const valorTotal = calcularValorTotal(n, pedidos, cupom)
  
  //TODO: Imprimir o valor total obtido de acordo com o padrão solicitado neste desafio.
  print(`Valor total:${valorTotal}`)
//TODO: Imprimir a saída no padrão definido no enunciado deste desafio.
//Dica: Para simplificar a formatação, utilize o conceito de interpolação de strings.