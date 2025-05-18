// 15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de Fibonacci utilizando um loop for.
// Sequência de Fibonacci: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34

let a = 0;
let b = 1;

console.log("Os 10 primeiros números da sequência de Fibonacci:");
console.log(a); // primeiro termo
console.log(b); // segundo termo

for (let i = 3; i <= 10; i++) {
  const proximo = a + b;
  console.log(proximo);
  a = b;
  b = proximo;
}