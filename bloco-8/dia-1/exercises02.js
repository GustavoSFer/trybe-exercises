const geraNumero = (num) => {
  const sorte = Math.round(Math.random() * 5);
  if ( num === sorte){
    return 'parabéns você ganhou' 
  }else { 
    return 'Que pena! Tente de novo.'
  }
}


console.log(geraNumero(2));

const geraNumero = () => {
  const sorte = Math.round(Math.random() * 5);
  return sorte;
}
const verificar = (numero, geraNumero) => {
  if (numero === geraNumero) {
    return 'Parabéns voce ganhou!!!'
  } else {
    return 'Que pena, Tente de novo!'
  }
}

console.log(verificar(2))