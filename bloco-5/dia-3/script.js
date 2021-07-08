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

// Exercicio 4
function sexta(string) {
  const recuSexta = document.querySelector('.buttons-container');
  const sexta = document.createElement('button');
  sexta.innerText = 'Sexta-Feira';
  sexta.className = 'btn-friday';

  recuSexta.appendChild(sexta);
}

sexta('sexta-feira');

// Exercicio 5
const diaSexta = [4,11,18,25];
const sextou = document.querySelector('.btn-friday');
sextou.addEventListener("click", mudarSexta);

function mudarSexta(){
  const mudaSexta = document.querySelectorAll('.friday');

    for (let index = 0; index < mudaSexta.length; index++) {
      if(mudaSexta[index].innerText === 'Sextouu'){
        mudaSexta[index].innerText = diaSexta[index];
      } else {
        mudaSexta[index].innerText = 'Sextouu';
      }
    }
}

//exercicio 6
function zoom() {
  let darZoom = document.querySelector('#days');
  darZoom.addEventListener("mouseover", function(evento) {
    evento.target.style.fontSize = "30px";
    console.log(evento.target);
  });
}

function tirarZoom() {
  let darZoom = document.querySelector('#days');
  darZoom.addEventListener("mouseout", function(evento){
    evento.target.style.fontSize = '20px';
  });
}

zoom();
tirarZoom();


// Exercicio 7