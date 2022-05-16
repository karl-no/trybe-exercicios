// // 4- Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.z
// fonte: https://app.betrybe.com/course/fundamentals/introducao-a-javascript-e-logica-de-programacao/javascript-logica-de-programacao-e-algoritmos/solutions/83bb1cd0-be4a-40cf-a9c2-22d71f700144/gabarito-dos-exercicios/a3c9d545-3155-4875-bdaa-f05aa867a3c4?use_case=calendar

let biggestPrimeNumber = 0;

for (let currentNumber = 0; currentNumber <= 50; currentNumber += 1) {
  let isPrime = true;
  for (let currentDivisor = 2; currentDivisor < currentNumber; currentDivisor += 1) {
    if (currentNumber % currentDivisor === 0) {
      isPrime = false;
    }
  }
  if (isPrime) {
    biggestPrimeNumber = currentNumber;
  }
}

console.log(biggestPrimeNumber);