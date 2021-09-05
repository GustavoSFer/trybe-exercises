import React from 'react';
import './App.css';

function click() {
  console.log("Clicou no botão!")
}

class App extends React.Component {
  render() {
    return (
      <button onClick={ click }>Meu botão</button>
    );
  }

}

export default App;