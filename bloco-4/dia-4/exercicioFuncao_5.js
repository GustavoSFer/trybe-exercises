function numRepetidos (numeroArray){
let contador = 0;

  for(let index = 0; index < numeroArray.length; index +=1){
    for(let index2 = 0; index2 < numeroArray.length; index2 +=1){
      if(numeroArray[index] === numeroArray[index2]){
        let repetiu = true;
      }
    }
    for(var j = 0; j < numeroArray.length; j++){
      if(numeroArray[index] == numeroArray[j]){ //se ele achar, faço meu contador acrescentar +1
        contador +=1;
      }
    }
  }

  return contador
}

let num = [2,3,4,5,2,2,5];

console.log(numRepetidos(num));