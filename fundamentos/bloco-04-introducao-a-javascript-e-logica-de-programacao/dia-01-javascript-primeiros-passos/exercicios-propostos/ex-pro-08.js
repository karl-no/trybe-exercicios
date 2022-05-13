// Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false.
// Bonus: use somente um if.

const n1 = 9;
const n2 = 3;
const n3 = 2;
let par = false;

if (n1 % 2 === 0 || n2 % 2 === 0 || n3 % 2 === 0) {
    par = true;
}

console.log(par);