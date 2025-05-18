// 13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a média aritmética desses números.
const prompt = require('prompt-sync')();

let soma = 0;
let contador = 0;

while (true) {
  const entrada = prompt("Digite um número decimal (0 para encerrar): ");
  const numero = parseFloat(entrada);

  if (isNaN(numero)) {
    console.log("Valor inválido. Digite um número decimal.");
    continue;
  }

  if (numero === 0) {
    break;
  }

  soma += numero;
  contador++;
}

if (contador === 0) {
  console.log("Nenhum número foi digitado. Média não calculada.");
} else {
  const media = soma / contador;
  console.log(`Média aritmética: ${media.toFixed(2)}`);
}
