const geraNumero = (num) => {
  const sorte = Math.round(Math.random() * 5);
  if ( num === sorte){
    return 'parabéns você ganhou' 
  }else { 
    return 'Que pena! Tente de novo.'
  }
}

console.log(geraNumero(2));



const geraNumero = (numero) => {
  const sorte = Math.round(Math.random() * 5);
  if ( numero === sorte){
    return 'parabéns você ganhou' 
  }else { 
    return 'Que pena! Tente de novo.'
  }
}

const info = (func, numero) => {
 
}