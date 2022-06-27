const arrays = [["1", "2", "3"], [true], [4, 5, 6]];

// 1 - Dada uma matriz, transforme em um array.
function flatten() {
  return arrays.reduce((array, element) => array.concat(element), []);
}

console.log(flatten(arrays));
