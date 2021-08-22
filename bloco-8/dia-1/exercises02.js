const comparacao = (n1, n2) => n1 === n2;

const loto = (numero,callback) => {
  const sorte = Math.floor(Math.random()*5);
  
  return callback(numero, sorte) ? 'Ganhooou!!!' : 'Que pena, tente de novo :/';
}

console.log(loto(2, comparacao))