const prompt = require('prompt-sync')();

const peso = parseFloat(prompt("Digite seu peso em kg: "));
const altura = parseFloat(prompt("Digite sua altura em metros: "));

if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
  console.log("Dados inválidos. Digite valores numéricos positivos.");
} else {
  const imc = peso / (altura * altura);
  console.log(`Seu IMC é: ${imc.toFixed(2)}`);

  if (imc < 18.5) {
    console.log("Classificação: Baixo peso");
  } else if (imc < 24.9) {
    console.log("Classificação: Peso normal");
  } else if (imc < 29.9) {
    console.log("Classificação: Sobrepeso");
  } else {
    console.log("Classificação: Obesidade");
  }
}