const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

// 1 - Escreva uma função que dado um array de nomes e um nome retorne true se ele estiver contido e caso contrário, retorne false, use some;
const hasName = (arr, name) => {
    return arr.some( (callback) => callback === name)
}

console.log(hasName(names, 'Ana'));