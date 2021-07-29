const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const prova = (arrCorreto, arrAluno, funcao) => {

}

const verificaRespostas = () => {
  let contador = 0;
  for (let i = 0; i < RIGHT_ANSWERS.length; i +=1) {
      if (RIGHT_ANSWERS[i] === STUDENT_ANSWERS[i]){
        contador += 1;
      } else if (STUDENT_ANSWERS[i] !== 'N.A'){
        contador -= 0.5; 
      }
  }
  return contador;
}

console.log(verificaRespostas());