let fatorial = (numero) => {
  let num = numero;
  let conta = num;
  for (let index = 1; index < num ; index +=1) {
        conta *= index;
  }
  return conta
}

console.log(fatorial(4));
