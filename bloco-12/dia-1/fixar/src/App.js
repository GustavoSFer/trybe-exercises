import './App.css';
import React from 'react';

class App extends React.Component {
  constructor() {
    super()
    this.click = this.click.bind(this);
  }
  click() {
    console.log('clicado!')
    console.log(this);
  }
  render() {
    return(
      <button type="button" onClick={this.click}>Clique Aqui!</button>
    );
  }
}

export default App;
