const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

const expected = sum(4, 5);
// (variavel criada que esta com a nossa função, valor esperado de retorno, 'msagem de erro')
assert.equal(expected, 9, 'Error, Verifique seu código.')

const expected0 = sum(0, 0);
assert.equal (expected0, 0, 'Error, verifique seu código')