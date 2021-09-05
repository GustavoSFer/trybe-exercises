import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      numeroClick: 0,
      mouseDentro: 0,
      mouseFora: 0,
      corClasse: '',
    }

    this.click = this.click.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);
  }


  click() {
    console.log(this.state.numeroClick);
    this.setState((estadoAnterio, _props)=> ({
      numeroClick: estadoAnterio.numeroClick + 1,
    }));
    console.log(this.state.numeroClick); // porque ele vem com 0 e nao atualizado com o 1?
    console.log(this)
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

  corClass(num) {
    return (num % 2 === 0) ? "green" : 'white';

  }
  render() {
    return (
      <div>
        <button onClick={this.click} style={{backgroundColor: this.corClass(this.state.numeroClick) }} >Botao 1</button>
        <button onMouseOver={this.onMouseOver} style={{ background: this.corClass(this.state.mouseDentro) }}>Botao 2</button>
        <button onMouseOut={this.onMouseOut} style={{ background: this.corClass(this.state.mouseFora) }}>Botao 3</button>

      </div>
    );
     
  }

}

export default App;