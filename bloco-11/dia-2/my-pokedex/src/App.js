import './App.css';
import React from 'react';
import pokemons from './Data';
import Pokemon from './Pokemon';

function App() {
    return (
      <>
        <h1>meu primeiro teste</h1>
        {
          pokemons.map((item) => <Pokemon pk={ item }/>)
        }
      </>
    );
  }


export default App;
