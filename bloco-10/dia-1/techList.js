function techList(tech, name ) {
  if(tech.length === 0) return 'Vazio!';
  const listaTec = tech
  .sort()
  .map((item) => ({
    tech: item,
  name,
  }));
  return listaTec;
}

console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));

module.exports = techList;