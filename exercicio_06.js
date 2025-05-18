//Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
//formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
//Isósceles, escaleno ou eqüilátero.

const prompt = require('prompt-sync')();

const A = parseFloat(prompt("Digite o valor do lado A: "));
const B = parseFloat(prompt("Digite o valor do lado B: "));
const C = parseFloat(prompt("Digite o valor do lado C: "));

// Verifica se os valores são válidos
if (isNaN(A) || isNaN(B) || isNaN(C) || A <= 0 || B <= 0 || C <= 0) {
  console.log("Valores inválidos. Digite apenas números positivos.");
} else {
  // Verificação da existência do triângulo
  if (A < B + C && B < A + C && C < A + B) {
    console.log("Os lados formam um triângulo.");

    if (A === B && B === C) {
      console.log("Tipo: Triângulo Equilátero.");
    } else if (A === B || A === C || B === C) {
      console.log("Tipo: Triângulo Isósceles.");
    } else {
      console.log("Tipo: Triângulo Escaleno.");
    }

  } else {
    console.log("Os valores NÃO formam um triângulo.");
  }
}