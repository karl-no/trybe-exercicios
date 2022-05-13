// Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.
const n1 = 100;
const n2 = 222;
const n3 = 333;

if (n1 > n2 && n1 > n3) {
    console.log(n1 + ' é maior que ' + n2 + ' e ' + n3);
} else if (n2 > n1 && n2 > n3) {
    console.log(n2 + ' é maior que ' + n1 + ' e ' + n3);
} else {
    console.log(n3 + ' é maior que ' + n1 + ' e ' + n2);
}