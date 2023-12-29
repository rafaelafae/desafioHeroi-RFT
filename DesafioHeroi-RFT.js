// Variáveis - Players - (Nickname, raça e classe, nível e se esta apto ou não para a guerra)
let players = [
    ["Faekinha", "elfo arqueiro", 8934, true],
    ["Avril", "orc buffer", 9687, false],
    ["Sushi", "elfo tanker", 12843, true],
    ["Pedrita", "humano mago", 5350, false],
    ["Nina", "elfo swordsinger", 3650, false],
]
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
