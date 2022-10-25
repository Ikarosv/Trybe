import React from 'react';
import { arrayOf } from 'prop-types';

import Pokemon from './Pokemon';
import { pokemonType } from '../types';
// import pokemonList from '../data';

class Pokedex extends React.Component {
  constructor(props) {
    super(props);

    const { pokemonList } = this.props;
    this.state = {
      typePoke: undefined,
      index: 1,
      pokemon: pokemonList[0],
    };
  }

  handleNext = () => {
    const { pokemonList } = this.props;
    const { index, typePoke } = this.state;
    const pokeList = pokemonList.filter(({ type }) => {
      if (typePoke) return type === typePoke;
      return true;
    });

    this.setState({
      index: index < pokeList.length - 1 ? index + 1 : 0,
      pokemon: pokeList[index],
    });
  };

  handleType = (pokeType) => {
    const { pokemonList } = this.props;
    this.setState({
      typePoke: pokeType,
      index: 1,
      pokemon: pokemonList.find(({ type }) => type === pokeType),
    });
  };

  render() {
    const { pokemon } = this.state;
    return (
      <>
        <h1> Pokédex </h1>
        <button type="button" onClick={ this.handleNext }>Próximo pokémon</button>
        <button onClick={ () => this.handleType('Fire') } type="button">Fire</button>
        <button onClick={ () => this.handleType('Psychic') } type="button">
          Psychic
        </button>
        <div className="pokedex">
          <Pokemon pokemon={ pokemon } />
        </div>
      </>
    );
  }
}

Pokedex.defaultProps = {
  pokemonList: [],
};

Pokedex.propTypes = {
  pokemonList: arrayOf(pokemonType),
};

export default Pokedex;
