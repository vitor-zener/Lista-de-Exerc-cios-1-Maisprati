// 14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário utilizando um loop for ou while.
const prompt = require('prompt-sync')();

const numero = parseInt(prompt("Digite um número inteiro não negativo para calcular o fatorial: "));

if (isNaN(numero) || numero < 0) {
  console.log("Entrada inválida. Digite um número inteiro maior ou igual a zero.");
} else {
  let fatorial = 1;

  for (let i = 1; i <= numero; i++) {
    fatorial *= i;
  }

  console.log(`O fatorial de ${numero} é: ${fatorial}`);
}