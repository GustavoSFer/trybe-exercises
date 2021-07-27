const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }

  }
  return newArr;
}

//1 deepStrictEqual - Se dois objetos, ou seus objetos filhos, não forem iguais (tanto em valor quanto em tipo), um erro é lançado e o programa é encerrado.
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4]);

//2
assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4]);