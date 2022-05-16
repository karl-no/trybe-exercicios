// 1- Agora vamos trabalhar com algumas formas geométricas! Faça um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n.
let n = 5;

for (let index = 1; index <= n; index += 1) {
    let asteriscos = "*";
    for (let linha = 1; linha <= n - 1; linha += 1) {
        asteriscos += "*"
    }
    console.log(asteriscos);
}