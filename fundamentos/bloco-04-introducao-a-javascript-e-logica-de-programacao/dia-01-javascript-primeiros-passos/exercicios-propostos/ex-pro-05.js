// Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
// Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
// Um ângulo será considerado inválido se não tiver um valor positivo.
const n1 = 60;
const n2 = 60;
const n3 = 60;

let angulos = n1 + n2 + n3;

if (n1 >= 0 && n2 >= 0 && n3 >= 0){
    if (angulos === 180) {
        console.log(true);
    } else if (angulos >= 180 || angulos <= 180) {
        console.log(false);
    }
} else {
    console.log("ERRO!!!");
}


/*else if (typeof n1 !== "number" || typeof n2 !== "number" || typeof n3 !== "number")
console.log("ERRO!!!");*/