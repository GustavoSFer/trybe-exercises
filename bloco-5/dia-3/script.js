function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

for (let index = 0; index < dezDaysList.length; index++) {
  const dias = document.querySelector('#days');
  const listaDia = document.createElement('li');
  listaDia.innerText = dezDaysList[index];
  listaDia.className = 'day';
  dias.appendChild(listaDia);

  if(dezDaysList[index] === 24 || dezDaysList[index] === 25 || dezDaysList[index] === 31) {
    listaDia.className += ' holiday';
  }

  if(dezDaysList[index] === 4 || dezDaysList[index] === 11 || dezDaysList[index] === 18 || dezDaysList[index] === 25){
    listaDia.className += ' friday';
  }
}

// Exercicio 2
function button(sating) {
  const divBoton = document.querySelector('.buttons-container');
const criaBoton = document.createElement('button');
criaBoton.innerText = 'Feriado';
criaBoton.className = 'btn-holiday';

divBoton.appendChild(criaBoton);
}

button('Feriado');


// Exercicio 3
const evenClick = document.querySelector('.btn-holiday');
evenClick.addEventListener("click", recebeClick);

function recebeClick() {
  const mudaCor = document.querySelectorAll('.holiday');
  for(let i = 0; i < mudaCor.length; i++) {
    
    if( mudaCor[i].style.backgroundColor === 'green' ){
      mudaCor[i].style.backgroundColor = 'rgb(238,238,238)';
      console.log('clidado2')
    } else {
      mudaCor[i].style.backgroundColor = 'green';
      console.log('clidado1')
    }
  }
}

