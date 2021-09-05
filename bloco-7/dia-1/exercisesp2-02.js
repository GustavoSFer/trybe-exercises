let maiorPalavra = (frase) => {
  let fra = frase.split(' ');
  let maiorFrase = fra[0];

  for(let i = 0; i < fra.length; i += 1) {
    if(maiorFrase.length < fra[i].length){
      maiorFrase = fra[i];
    }
  }
  return maiorFrase;
}
console.log(maiorPalavra('Antônio foi no banheiro e não sabemos o que aconteceu'));