const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  // escreva seu código aqui
  names.reduce((acc, arr) => {
    if (arr[0].toLowerCase === 'a') {
      return acc += 1;
    }
    return acc;
  }, 0)
}
console.log(containsA());
//assert.deepStrictEqual(containsA(), 20);