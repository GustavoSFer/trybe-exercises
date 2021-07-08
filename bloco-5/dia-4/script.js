const pega = document.getElementById('mudaCor');
pega.addEventListener("click", function(evento){
  console.log(evento.target)
});

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
})