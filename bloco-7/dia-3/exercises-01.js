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

//retorno esperado 0
const expected0 = sum(0, 0);
assert.equal (expected0, 0, 'Error, verifique seu código')

/*Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)
Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")
*/
const expectedString = sum(4, '5');
assert.equal(expectedString, 9, 'Error, Verifique seu código.')
// Retorno: Sim, gera o erro e a mensagem.