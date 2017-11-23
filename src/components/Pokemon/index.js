import React, { Component } from 'react'
import {Card, CardHeader, CardText} from 'material-ui/Card'
import Subheader from 'material-ui/Subheader'
import Chip from 'material-ui/Chip'
import CircularProgress from 'material-ui/CircularProgress'

import { getPokemon } from '../../services/pokemon-api'

const styles = {
  card: {
    width: '100%'
  },
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  loader: {
    margin: 20
  }
};

class Pokemon extends Component {

  state = {
    pokemon: {},
    loading: false
  }

  loadPokemon() {
    this.setState({loading: true})
    getPokemon(this.props.match.params.id).then((response) => {
      this.setState({pokemon: response.data, loading: false})
    })
  }

  componentDidMount() {
    this.loadPokemon()
  }

  componentWillReceiveProps() {
    this.loadPokemon()
  }

  render() {
    const { pokemon } = this.state;

    return (
      <Card style={styles.card}>
        {pokemon !== null &&
          <div className="Pokemon">
            {this.state.loading ?
              <CircularProgress style={styles.loader} />
            : <div>
                <CardHeader title={pokemon.name} avatar={pokemon.sprites && pokemon.sprites.front_default} />
                <CardText>
                  <Subheader>Types</Subheader>
                  <div style={styles.wrapper}>
                    {pokemon.types && pokemon.types.map((type, i) => <Chip style={styles.chip} key={'type_' + i}>{type.type.name}</Chip>)}
                  </div>
                  <Subheader>Abilities</Subheader>
                  <div style={styles.wrapper}>
                    {pokemon.abilities && pokemon.abilities.map((ability, i) => <Chip style={styles.chip} key={'ability_' + i}>{ability.ability.name}</Chip>)}
                  </div>
                </CardText>
              </div>
            }
          </div>
        }
      </Card>
    );
  }
}

export default Pokemon
