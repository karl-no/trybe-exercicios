const adultos = [
  {
    peso: 100,
    altura: 1.85,
  },
  {
    peso: 90,
    altura: 1.72,
  },
  {
    peso: 79,
    altura: 1.99,
  },
];

let resultado = [];

// IMC = Índice de Massa Corporal

function IMC(adultos) {
  resultado.push(
    parseFloat((adultos.peso / Math.pow(adultos.altura, 2)).toFixed(2))
  );
}

adultos.forEach(IMC);
console.log(resultado);
