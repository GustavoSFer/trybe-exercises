const assert = require('assert');

// const arrays = [
//   ['1', '2', '3'],
//   [true],
//   [4, 5, 6],
// ];

// function flatten() {
//   // escreva seu código aqui
//   return arrays.reduce((acc, value) => acc.concat(value), []);
// }
//  //console.log(flatten());
//  assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);



//  const assert = require('assert');

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  // escreva seu código aqui
  return arrays.reduce((acc, arr) => acc.concat(arr), []);
}

console.log(flatten())
assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);