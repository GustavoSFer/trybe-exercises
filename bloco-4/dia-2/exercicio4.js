let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let media;
for(let i = 0; i < numbers.length; i++){
  soma = soma + numbers[i];
}

media = soma / numbers.length;

console.log(media)

if(media > 20){
  console.log('valor maior que 20')
} else {
  console.log('valor igual ou menor que 20')
}