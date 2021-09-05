let qtdClick = 0;

let escutaBotao = document.getElementById('btn');
escutaBotao.addEventListener('click', clicou);

function clicou() {
  qtdClick += 1; 
  novop.innerText = `${qtdClick} clicks`;
  novo.appendChild(novop);
}
let novo = document.getElementById('qtdClick');
let novop = document.createElement('p');