import React, { Component } from 'react'
import {List, ListItem} from 'material-ui/List'

import { getPokemons } from '../../services/pokemon-api'

class PokemonList extends Component {

  state = {
    pokemons: []
  }

  componentDidMount() {
    getPokemons().then((response) => {
      this.setState({pokemons: response.data.results})
    })
  }

  render() {
    return (
      <div className="PokemonList">
        <List>
          {this.state.pokemons.map((pokemon, i) => (
            <ListItem key={'pokemon_' + i}>{pokemon.name}</ListItem>
          ))}
        </List>
      </div>
    );
  }
}

export default PokemonList
