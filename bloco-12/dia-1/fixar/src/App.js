import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      numeroClick: 0,
      mouseDentro: 0,
      mouseFora: 0,
    }

    this.click = this.click.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);
  }


  click() {
    this.setState((estadoAnterio, _props)=> ({
      numeroClick: estadoAnterio.numeroClick + 1,
    }))
    console.log(this)
    console.log("Clicou no botão!")
  }
  onMouseOver() {
    this.setState((estadoAnterior) => ({
      mouseDentro: estadoAnterior.mouseDentro + 1,
    }))
    console.log(this);
  }
  onMouseOut() {
    this.setState((anterior) => ({
      mouseFora: anterior.mouseFora + 1,
    }))
    console.log(this);
    console.log("Tirou o mouse de cima!")
  }

  render() {
    return (
      <div>
        <button onClick={this.click} >Botao 1</button>
        <button onMouseOver={this.onMouseOver} >Botao 2</button>
        <button onMouseOut={this.onMouseOut} >Botao 3</button>

      </div>
    );
     
  }

}

export default App;