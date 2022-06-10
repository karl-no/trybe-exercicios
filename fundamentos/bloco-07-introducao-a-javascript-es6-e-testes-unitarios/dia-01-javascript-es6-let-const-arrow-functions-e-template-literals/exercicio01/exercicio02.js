// 🚀 Crie uma função que retorne um array em ordem crescente.
// Crie uma função que faça com que o array oddsAndEvens fique na ordem crescente;
// Utilize o console.log e template literals para retornar a frase: 'Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!'.
// Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne a frase "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.
const oddsSort = (array) => {
    let ordem = array.sort((a, b) => a - b);
    return ordem; // será necessário alterar essa linha 😉
};

const sortedNumbers = oddsSort(oddsAndEvens);
console.log(`Os números ${sortedNumbers} se encontram ordenados de forma crescente!`);
