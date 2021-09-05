import React from 'react';
import './App.css';
import Button from './Components/Button';

function click1() {
  console.log("Clicou no botão!")
}
function onMouseOver() {
  console.log("Passou o mou em cima!")
}
function onMouseOut() {
  console.log("Tirou o mouse de cima!")
}

class App extends React.Component {
  render() {
    return (
      <div>
        <button onClick={click1} >Botao 1</button>
        <button onMouseOver={onMouseOver} >Botao 2</button>
        <button onMouseOut={onMouseOut} >Botao 3</button>

      </div>
    );
     
  }

}

export default App;