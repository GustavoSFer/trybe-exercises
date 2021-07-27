const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}


// (variavel criada que esta com a nossa função, valor esperado de retorno, 'msagem de erro')
assert.strictEqual(sum(4, 5), 9);

//retorno esperado 0
assert.strictEqual(sum(0, 0), 0);

/*Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)
Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")
*/

//4 Espera que o bloco lance um erro. o erro pode ser construtor, RegExp ou função de validação.
//O assert.throws permite verificar erros específicos em suas funções.
//estamos passando uma função sem nome e dentro dela a função sum e esta nos retornando um erro
// com isso esta correto.
assert.throws(() => {
  sum(4, '5');
});

