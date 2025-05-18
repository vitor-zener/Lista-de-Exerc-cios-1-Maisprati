const prompt = require('prompt-sync')();

console.log("=== Menu Interativo ===");
console.log("1 - Mostrar saudação");
console.log("2 - Mostrar data atual");
console.log("3 - Sair");

const opcao = prompt("Escolha uma opção (1, 2 ou 3): ");

switch (opcao) {
  case "1":
    console.log("Olá! Seja bem-vindo(a)!");
    break;

  case "2":
    const dataAtual = new Date();
    console.log(`Data atual: ${dataAtual.toLocaleDateString()} - ${dataAtual.toLocaleTimeString()}`);
    break;

  case "3":
    console.log("Encerrando o programa...");
    break;

  default:
    console.log("Opção inválida. Por favor, escolha 1, 2 ou 3.");
}
