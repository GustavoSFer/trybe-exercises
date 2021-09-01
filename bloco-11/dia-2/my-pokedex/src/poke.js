import React from 'react';
import pokemons from './Data';
import Pokemon from './Pokemon';

class PokemonList extends React.Component {
  render() {
    return (
      <section>
        {
          pokemons.map((item) => <Pokemon pk={ pokemons }/>)
        }
      </section>
    )
  }
}

export default PokemonList;