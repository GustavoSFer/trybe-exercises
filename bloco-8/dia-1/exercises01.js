const newEmployees = (nome) => {
  const employees = {
    id1: nome('Pedro Guerra'),
    // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: nome('Luiza Drumond'), 
    // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: nome('Carla Paiva'), 
    // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

const nome = (nome) => {
  const geraEmai = {
    email: nome.toLowerCase().split(' ').join('_')
  }
  return `nome: ${nome} email:${geraEmai.email}@trybe.com`;
}

console.log(newEmployees(nome))