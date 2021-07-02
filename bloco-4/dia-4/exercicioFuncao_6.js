function numInteiro(n){
  let somar = 0;

  for(let index = 1; index <= n; index +=1){
    somar += index;
    
  }

  return somar;
}

console.log(numInteiro(6));