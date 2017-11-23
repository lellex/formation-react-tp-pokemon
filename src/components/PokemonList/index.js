import React, { Component } from 'react'
import {List, ListItem} from 'material-ui/List'

import { Link } from 'react-router-dom'

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

  getId(url) {
    return url.split('/').splice(-2, 1)[0]
  }

  render() {
    return (
      <div className="PokemonList">
        <List>
          {this.state.pokemons.map((pokemon, i) => (
            <ListItem key={'pokemon_' + i} containerElement={<Link to={'/pokemon/' + this.getId(pokemon.url)} /> }>{pokemon.name}</ListItem>
          ))}
        </List>
      </div>
    );
  }
}

export default PokemonList
