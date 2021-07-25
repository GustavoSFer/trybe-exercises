const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

let addParametro = (obj, chave, valor) => {
  let obje = obj;
  let turno = chave;
  let valore = valor;

  obje.turno = valore;
}
addParametro(lesson2, lesson2.periodo, 'tarde');
console.log(lesson2)