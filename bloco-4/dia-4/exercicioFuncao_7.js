function verificaNome(frase, fimFrase){
  let word = frase.split();
  let ending = fimFrase.split();
  let comparacao = true;

  for(let index = 0; index < fimFrase.length; index +=1){
    if(frase[frase.length - fimFrase.length + index] != fimFrase[index]){
      comparacao = false;
    }
  }
  
  return comparacao;
}

console.log(verificaNome('gustavo', 'avo'));