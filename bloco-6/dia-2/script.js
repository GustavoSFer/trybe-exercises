let estado = ['São paulo', 'Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia','Ceará' , 'Distrito Federal' , 'Espírito Santo'];

let getEstado = document.getElementById('estado');

for (let index = 0; index < estado.length; index++) {
  let listEstado = document.createElement('option');
  teste = estado[index];
  listEstado.value = teste;
  listEstado.innerText = teste;

  getEstado.appendChild(listEstado);
  
}

