// Crie uma função que receba um número e retorne seu fatorial.
// Na matemática, o fatorial de um número inteiro e positivo N, representado por N!, é o produto de todos os seus antecessores até o número um. Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
// Bônus (opcional): tente fazer o mesmo exercício de forma recursiva. Spoiler: É possível resolver com uma linha usando ternary operator.

// const fatorial = (number) => {
//     let fatorialNumber = 1;

//     for (let index = 2; index <= number; index += 1) {
//         fatorialNumber *= index;
//     }
    
//     return fatorialNumber;
    
// };

// console.log(fatorial(5));

// RECURSIVA
const factorial = number => number > 1 ? number * factorial(number - 1) : 1;
console.log(factorial(5));
