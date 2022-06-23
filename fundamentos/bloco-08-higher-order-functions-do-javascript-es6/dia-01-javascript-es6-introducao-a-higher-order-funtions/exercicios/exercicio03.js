// 3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.
// Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.
const gabarito = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const respostasEstudante = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const verifyAnswers = (gabarito, respostasEstudante) => {
   
    if(gabarito === respostasEstudante) {
        return 1;
    } if (respostasEstudante === 'N.A') {
        return 0;
    }
    return -0.5;
    
};

const score = (gabarito, respostasEstudante, callback) => {
    let pontos = 0;
    for (let index = 0; index < gabarito.length; index += 1) {
        const comparador = callback(gabarito[index], respostasEstudante[index]);
        pontos += comparador;
    }
    return `O aluno fez ${pontos} pontos.`
};


console.log(score(gabarito, respostasEstudante, verifyAnswers));