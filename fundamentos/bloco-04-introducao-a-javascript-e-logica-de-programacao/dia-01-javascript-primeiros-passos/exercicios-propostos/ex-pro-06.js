// Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).
// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
// Exemplo: bishop (bispo) -> diagonals (diagonais)


let peca = "cavalo";
let jogada = peca.toLowerCase();

switch (jogada) {
    case "rei" :
        console.log("REI - 1 casa em qualquer direção");
        break;
    case "rainha" :
            console.log("RAINHA - livre movimentação na horizontal, vertical e diagonais");
            break;
    case "torre" :
        console.log("TORRE - livre movimentação para frente, trás, direita e esquerda");
        break;
    case "bispo" :
        console.log("BISPO - Sem restrição de número de casas, mas somente na diagonal");
        break;
    case "cavalo" :
        console.log("CAVALO - movimentos em L");
        break;
    case "peao" :
        console.log("PEÃO - movimentos frontais de 1 casa, com o primeiro movimento podendo ser até duas casas. Ataque sempre na diagonal");
        break;
    default :
        console.log("ERRO - Tente novamente!");
}