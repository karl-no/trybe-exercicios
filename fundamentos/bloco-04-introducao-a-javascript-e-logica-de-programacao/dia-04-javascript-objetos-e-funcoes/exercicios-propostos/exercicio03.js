// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.
// Exemplo de palíndromo: arara.
// verificaPalindrome('arara');
// Retorno esperado: true
// verificaPalindrome('desenvolvimento');
// Retorno esperado: false
function verificaPalindrome (palavra) {

    let palavraAoContrario = "";
    
    for (let i = palavra.length - 1; i >= 0; i -= 1) {

        palavraAoContrario += palavra[i];
    }

    if (palavra === palavraAoContrario) {
        return true;
    } else {
        return false;
    }
}

console.log(verificaPalindrome('arara'));

console.log(verificaPalindrome('desenvolvimento'));
