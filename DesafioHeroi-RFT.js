// Desafio Herói - DIO - Rafaela Faé Theodoro
console.log("Bem-vindo ao Desafio Herói realizado pela Rafaela Faé");
console.log("O objetivo deste desafio é testar os conhecimentos adquiridos na linguagem JavaScript. Utilizando variáveis, operadores, laços de repetição e estruturas de decisão");


// Tela de início do jogo
function prompt(message = "Seja bem-vindo ao RPG 2023, digite um nickname") {
  return window.prompt(message);
}

// Exemplo de uso
let nickname0 = prompt();
console.log(`Bem-vindo, ${nickname0}!`);
