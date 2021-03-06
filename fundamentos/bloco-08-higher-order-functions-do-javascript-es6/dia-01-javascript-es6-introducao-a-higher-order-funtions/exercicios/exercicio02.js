// 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").
const sorteio = (numeroApostado, callback) => {

    let numeroSorteado = Math.round(Math.random() * 5);
    if (numeroSorteado == 0) {
        numeroSorteado = 1;
    }
    
    return callback(numeroApostado, numeroSorteado) ? 'Parabéns você ganhou' : 'Tente novamente';
}

const resultadoSorteio = (numeroApostado, numeroSorteado) => numeroApostado === numeroSorteado;

console.log(sorteio(5, resultadoSorteio));