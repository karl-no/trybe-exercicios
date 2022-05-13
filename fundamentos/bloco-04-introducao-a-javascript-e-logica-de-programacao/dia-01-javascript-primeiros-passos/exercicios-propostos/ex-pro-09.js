// Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false.
// Bonus: use somente um if.

const n1 = 8;
const n2 = 10;
const n3 = 5;

let impar = false;

if (n1 % 2 === 1 || n2 % 2 === 1 || n3 % 2 === 1) {
    impar = true;
}

console.log(impar);