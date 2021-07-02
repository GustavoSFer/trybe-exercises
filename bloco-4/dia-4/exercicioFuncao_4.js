function nomeMaior(arrayNome){
  let teste = [0];
  for(let index = 0; index < arrayNome.length; index +=1){
    if(teste.length < arrayNome.length)
    teste = arrayNome[index];
  }
  return teste;
}

let teste = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];;
  
console.log(nomeMaior(teste));