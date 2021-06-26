let n = 3;
let espaco = '';

for(let i = 1; i <= n; i++){
  for(let k = 0; k < n - i; k++){
    espaco += ' ';
  }
  for(let g = 0; g < 2*i-1; g++){
    espaco += '*';
  }
  espaco += '\n';
}

console.log(espaco);