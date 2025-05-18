const prompt = require('prompt-sync')();

const idade = parseInt(prompt("Digite a sua idade: "));

if (isNaN(idade) || idade < 0) {
  console.log("Idade inválida.");
} else {
  if (idade < 12) {
    console.log("Você é uma criança.");
  } else if (idade >= 12 && idade < 18) {
    console.log("Você é um adolescente.");
  } else if (idade >= 18 && idade < 60) {
    console.log("Você é um adulto.");
  } else {
    console.log("Você é um idoso.");
  }
}