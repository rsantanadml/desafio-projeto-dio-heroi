// Solicita ao usuário o nome e a quantidade de experiência (XP) do herói
var nome = prompt("Digite o nome do Herói: ");
var xp = parseInt(prompt("Digite a quantidade de XP do Herói: "));

var nivel; // Declara a variável nivel

// Utiliza uma estrutura de decisão para determinar o nível do herói com base na XP
if (xp < 1000) {
    nivel = "Ferro";
} else if (xp >= 1001 && xp <= 2000) {
    nivel = "Bronze";
} else if (xp >= 2001 && xp <= 5000) {
    nivel = "Prata";
} else if (xp >= 6001 && xp <= 7000) {
    nivel = "Ouro";
} else if (xp >= 7001 && xp <= 8000) {
    nivel = "Platina";
} else if (xp >= 8001 && xp <= 9000) {
    nivel = "Ascendente";
} else if (xp >= 9001 && xp <= 10000) {
    nivel = "Imortal";
} else {
    nivel = "Radiante";
}

// Exibe a mensagem com o nome e o nível do herói
console.log("O Herói de nome " + nome + " está no nível de " + nivel);
