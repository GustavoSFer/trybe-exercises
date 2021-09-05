const numeroSorteado = () => Math.floor(Math.random()*5);

const verifica = (numero) => {
  const numeroSorte = numeroSorteado();
  (numeroSorte === numero) ? console.log("Parabens, voce Acertou!!") : console.log('Que pena, tente de novo'); 
}
verifica(3);