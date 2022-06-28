// Faça uma lista com as suas frutas favoritas
const specialFruit = ['acerola', 'morango', 'goiaba'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['chocolate', 'leite', 'sorvete'];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
  const salad = [ ...fruit, ...additional ];
  return salad;
};

console.log(fruitSalad(specialFruit, additionalItens));