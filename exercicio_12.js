//12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a 10) utilizando um loop for.
const prompt = require('prompt-sync')();

const numero = parseInt(prompt("Digite um número inteiro para ver sua tabuada: "));

if (isNaN(numero)) {
  console.log("Entrada inválida. Digite um número inteiro.");
} else {
  console.log(`\nTabuada do ${numero}:`);
  for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
  }
}