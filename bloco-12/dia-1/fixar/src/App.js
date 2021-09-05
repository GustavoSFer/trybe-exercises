import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.click1 = this.click1(this);
  }


  click1() {
    console.log(this)
    console.log("Clicou no botão!")
  }
  onMouseOver() {
    console.log("Passou o mou em cima!")
  }
  onMouseOut() {
    console.log("Tirou o mouse de cima!")
  }

  render() {
    return (
      <div>
        <button onClick={this.click1} >Botao 1</button>
        <button onMouseOver={this.onMouseOver} >Botao 2</button>
        <button onMouseOut={this.onMouseOut} >Botao 3</button>

      </div>
    );
     
  }

}

export default App;