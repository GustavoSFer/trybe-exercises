function arrays(arr){
  let maior = arr[0];

  for(let i = 0; i < arr.length; i +=1){
    if(maior < arr[i]){
      maior = arr[i];
    }
  }
  let posicao = arr.indexOf(maior)
  return posicao;
}
let a = [1,5,7,65,30,9];
console.log(arrays(a));
