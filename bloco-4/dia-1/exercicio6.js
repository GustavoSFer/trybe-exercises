let peca = "REI";
let peca1 = peca.toLowerCase();

switch(peca1){
  case "rei":
    console.log("Todos os lado e anda uma casa");
    break;
  case "peão":
    console.log("Anda para frente");
    break;
  case "cavalo":
    console.log("anda em L");
    break;
  case "bispo":
    console.log("ande em X");
    break;
  case "torre":
    console.log("Anda como um +");
    break;
  case "rainha":
    console.log("Anda para todos os lados");
    break;
  default:
    console.log("Nome nao encontrado");
}