function polindromo(frase){
  let myString = frase.split('').reverse().join('');
  
  if(frase === myString){
    return true;
  } else {
    return false;
  }
  
}

console.log(polindromo('atta'));
