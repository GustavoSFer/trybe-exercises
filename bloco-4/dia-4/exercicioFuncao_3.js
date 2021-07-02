function menorArray(arrayMenor){
  let menor = arrayMenor[0];
  let posicao;

  for(let index = 0; index < arrayMenor.length; index +=1){
    if(menor > arrayMenor[index]){
      menor = arrayMenor[index]
    }
  }
  posicao = arrayMenor.indexOf(menor)
  return posicao;
}

let arrayNumero = [23, 21, 1, 32, 3, 54];
console.log(menorArray(arrayNumero))