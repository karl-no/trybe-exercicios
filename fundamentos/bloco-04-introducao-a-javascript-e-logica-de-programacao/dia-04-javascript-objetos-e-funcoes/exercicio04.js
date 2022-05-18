// Pegue cada um dos exercícios de 1 a 5 do final do dia 4.1 e faça com que todos eles sejam funções de um mesmo arquivo. As variáveis que você define no começo de cada arquivo devem ser removidas e transformadas em parâmetros das funções.
// Após refatorar o seu código, verifique se ele ainda está funcionando conforme especificado. Teste cada função com algumas entradas diferentes.

let mais;
let menos;
let vezes;
let divisao;
let resto;

// Adição (a + b)
function somar (a, b) {
    mais = a + b;
    return mais;
}

// Subtração (a - b)
function subtrair (a, b) {
    menos = a - b;
    return menos;
}

// Multiplicação (a * b)
function multiplicar (a, b) {
    vezes = a * b;
    return vezes;
}

// Divisão (a / b)
function dividir (a, b) {
    divisao = a / b;
    return divisao;
}

// Módulo (a % b)
function modulo (a, b) {
    resto = a % b;
    return resto;
}

console.log(somar(22,2));
console.log(subtrair(22,2));
console.log(multiplicar(22,2));
console.log(dividir(22,2));
console.log(modulo(22,2));
