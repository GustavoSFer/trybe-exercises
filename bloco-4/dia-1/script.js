let a = 3;
let b = 7;

// Adição
console.log(a + b);

//Subtração
console.log(a -b);

// Multiplicação
console.log(a*b);

//Divisão
a = 10;
b = 2;
console.log(a/b);

//Modulo
console.log(a%b);

// Exercicio 2

let num1 = 22;
let num2 = 12;
let comparacao;

// comparação pode ser ==; ===; >; >=; <; <=; !=
if(num1 > num2){
  console.log("O num1 é maior que o num2");
} else {
  console.log("O numero num1 é menor que o num2");
}

//Exercicio 3
let numero1 = 34;
let numero2 = 43;
let numero3 = 32;

if(numero1 > numero2 && numero1 > numero3){
  console.log(numero1 + " é o maior");
} else if (numero2 > numero1 && numero2 > numero3){
  console.log(numero2 + " é o maior")
} else {
  console.log(numero3 + " é o maior")
}