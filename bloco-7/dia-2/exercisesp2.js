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

  return obje.turno = valore;
}
addParametro(lesson2, lesson2.periodo, 'tarde');
console.log(lesson2)

let verificaKey = (obj) => {
  return Object.keys(obj);
}

console.log(verificaKey(lesson2))

let tamanhoObj = (obj) => {
  return Object.keys(obj).length
}
console.log(tamanhoObj(lesson2));

let listValues = (obj) => Object.values(obj);

console.log(listValues(lesson1))