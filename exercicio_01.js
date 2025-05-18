const prompt = require('prompt-sync')();

const numero = parseInt(prompt("Digite um número inteiro: "));

if (isNaN(numero)) {
  console.log("Você não digitou um número válido.");
} else {
  if (numero % 2 === 0) {
    console.log(`O número ${numero} é par!`);
  } else {
    console.log(`O número ${numero} é ímpar!`);
  }
}