let n = 5;
let posicao = n
let espaco = '';

for(let i = 0; i < n; i++){
  for(let k = 0; k <= n; k++){
    if(k < posicao){
      espaco += ' ';
    } else {
      espaco += '*';
    }
  }
  console.log(espaco);
  espaco = '';
  posicao -=1;
}