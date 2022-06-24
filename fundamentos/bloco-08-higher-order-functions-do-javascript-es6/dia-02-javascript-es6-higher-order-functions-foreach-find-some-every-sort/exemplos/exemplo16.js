const people = [
  { name: "Mateus", age: 18 },
  { name: "José", age: 16 },
  { name: "Ana", age: 23 },
  { name: "Cláudia", age: 20 },
  { name: "Bruna", age: 19 },
];

//   1 - Utilize a sort para ordenar o array pela idade das pessoas em ordem crescente.
// Adicione se código aqui
people.sort((a, b) => a.age - b.age);

//   2 - Modifique o sort do exercício anterior para que ordene o array pela idade das pessoas em ordem decrescente.
people.sort((a, b) => b.age - a.age);

console.log(people);
