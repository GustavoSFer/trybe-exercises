const pega = document.getElementById('mudaCor');
pega.addEventListener("click", function(evento){
  console.log(evento.target.style.backgroundColor);
  let cor = window.getComputedStyle(evento.target);
  console.log(cor.getPropertyValue('background-color'));

  const fundo = document.querySelector('article');
  fundo.style.backgroundColor = cor.getPropertyValue('background-color');
});

//branch bloco5dia4

let botao = document.querySelector('#mudaCor');
let criaBotao = document.createElement('button');
criaBotao.innerText = "Mudar de cor";
botao.appendChild(criaBotao);

criaBotao.addEventListener("click", function(){
  let corFundo = document.querySelector('.sessao');
  if(corFundo.style.backgroundColor === 'blue') {
    corFundo.style.backgroundColor = 'white';
    console.log('branco');
  } else {
    corFundo.style.backgroundColor = 'blue';
    console.log('azul');
  }
});

const corText = document.querySelector('#mudaTexto');
const bCorText = document.createElement('button');
bCorText.innerText = 'Mudar Cor do Texto';
corText.appendChild(bCorText);

bCorText.addEventListener('click', function (){
  const texto = document.querySelector('article');
  texto.style.color = 'yellow';
});
