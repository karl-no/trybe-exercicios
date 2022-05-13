// Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.
const numero = 14;

if (numero > 0) {
    console.log('positive');
} else if (numero < 0) {
    console.log('negative');
} else if (numero === 0) {
    console.log('zero');
} else {
    console.log('Please try again!');
}