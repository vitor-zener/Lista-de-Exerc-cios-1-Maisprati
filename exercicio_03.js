const prompt = require('prompt-sync')();

const nota = parseFloat(prompt("Digite a nota (0 a 10): "));

if (isNaN(nota) || nota < 0 || nota > 10) {
  console.log("Nota inválida. Digite um valor entre 0 e 10.");
} else if (nota >= 7) {
  console.log("Aprovado");
} else if (nota >= 5) {
  console.log("Recuperação");
} else {
  console.log("Reprovado");
}