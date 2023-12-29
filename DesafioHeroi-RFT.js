// Desafio Herói - DIO - Rafaela Faé Theodoro
console.log("Bem-vindo ao Desafio Herói realizado pela Rafaela Faé");
console.log("O objetivo deste desafio é testar os conhecimentos adquiridos na linguagem JavaScript. Utilizando variáveis, operadores, laços de repetição e estruturas de decisão");
console.log(" ")

//Apresentação gammers
console.log ("Apresento 5 participantes, time de fighters, com suas raças e classes, níveis, e se os mesmos poderão participar da guerra, e por que podem ou não participar")
console.log(" ")

//Classes permitidas para lutar
console.log ("As classes, independente de suas raças, convocadas para lutar na guerra, são: arqueiros, daggers, magos e tankers")
console.log(" ")

//Divisão de níveis
console.log ("Os gamers serão divididos em níveis de medalhas: Ferro, Bronze, Prata, Ouro, Pltina, Ascendente, Imortal e Radiante")
console.log(" ")

// Variáveis - Players - (Nickname, raça e classe, nível e se esta apto ou não para a guerra)
let players = [
    ["Faekinha", "elfo arqueiro", 8934, true],
    ["Avril", "orc buffer", 9687, false],
    ["Sushi", "elfo tanker", 12843, true],
    ["Pedrita", "humano mago", 5350, true],
    ["Nina", "elfo swordsinger", 3650, false],
]

console.log("Classificação na data da inscrição")
//Dia de inscrição - classificação
for (let i = 0; i < players.length; i++) {
    console.log(
        "O player " + players[i][0] + ", raça e classe de " + players[i][1] + " está apto para a luta? " + players[i][3]
    );
    if (players[i][3] === true && players[i][2] < 1000) {
        console.log("classificado no nível: Ferro");
    } else if (players[i][2] >= 1001 && players[i][2] <= 2000) {
        console.log("classificado no nível: Bronze");
    } else if (players[i][2] >= 2001 && players[i][2] <= 5000) {
        console.log("classificado no nível: Prata");
    } else if (players[i][2] >= 6001 && players[i][2] <= 7000) {
        console.log("classificado no nível: Ouro");
    } else if (players[i][2] >= 7001 && players[i][2] <= 8000) {
        console.log("classificado no nível: Platina");
    } else if (players[i][2] >= 8001 && players[i][2] <= 9000) {
        console.log("classificado no nível: Ascendente");
    } else if (players[i][2] >= 9001 && players[i][2] <= 10000) {
        console.log("classificado no nível: Imortal");
    } else {
        console.log("classificado no nível: Radiante");
    }
}
console.log(" ")
console.log("Classificação na data de luta")
// Como alguns jogadores não gostaram da sua classificação, os mesmos decidiram subir de níveis para o dia da luta
for (let i = 0; i < players.length; i++) {
    if (players[i][0] === "Faekinha") {
        for (let Faekinha = 8934; Faekinha < 9560; Faekinha++) {
            players[i][2] = Faekinha;
                   }
    } else if (players[i][0] === "Pedrita") {
        for (let Pedrita = 5350; Pedrita < 8430; Pedrita++) {
            players[i][2] = Pedrita;
                    }
    }
}

// Dia de luta - Classificação para lutar
for (let i = 0; i < players.length; i++) {
    console.log(
        "O player " + players[i][0] + ", raça e classe de " + players[i][1] + " está apto para a luta? " + players[i][3]
    );
    if (players[i][3] === true && players[i][2] < 1000) {
        console.log("classificado no nível: Ferro");
    } else if (players[i][2] >= 1001 && players[i][2] <= 2000) {
        console.log("classificado no nível: Bronze");
    } else if (players[i][2] >= 2001 && players[i][2] <= 5000) {
        console.log("classificado no nível: Prata");
    } else if (players[i][2] >= 6001 && players[i][2] <= 7000) {
        console.log("classificado no nível: Ouro");
    } else if (players[i][2] >= 7001 && players[i][2] <= 8000) {
        console.log("classificado no nível: Platina");
    } else if (players[i][2] >= 8001 && players[i][2] <= 9000) {
        console.log("classificado no nível: Ascendente");
    } else if (players[i][2] >= 9001 && players[i][2] <= 10000) {
        console.log("classificado no nível: Imortal");
    } else {
        console.log("classificado no nível: Radiante");
    }
}