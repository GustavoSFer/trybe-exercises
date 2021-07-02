let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge' 
};

for(let key in names){
  console.log('Olá '+ names[key])
}

for(let index in names){
  console.log(index,names[index])
}