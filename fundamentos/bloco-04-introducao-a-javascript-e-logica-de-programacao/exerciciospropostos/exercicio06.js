// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numerosImpar = 0;

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 === 1) {
        // numerosImpar.push(numbers[index]);
        numerosImpar += 1;
    } 
}

if (numerosImpar.length === 0) {
    console.log("nenhum valor ímpar encontrado");
} else {
    console.log(numerosImpar);
}



// console.log(numerosImpar.length);
