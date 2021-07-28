let pessoa = (nome) => {
  return {
    nomeCompleto: nome,
    email: `${nome}@trybe.com`
  }
}

const newEmployees = (nome) => {
  const employees = {
    id1: pessoa(nome), 
    id2: '', // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: '', // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
}

console.log(newEmployees('Gustavo Fernandes'));