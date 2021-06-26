let n = 5;
let espaco = '';

for(let i = 1; i <= n; i++){
  for(let k = 0; k < n - i; k++){
    espaco += ' ';
  }
  for(let g = 0; g < i; g++){
    espaco += "*";
  }
  espaco += '\n';
}

console.log(espaco)