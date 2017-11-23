import React, { Component } from 'react'
import {Card, CardHeader, CardText} from 'material-ui/Card'
import Subheader from 'material-ui/Subheader'
import Chip from 'material-ui/Chip'

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
    flexWrap: 'wrap',
  },
};

class Pokemon extends Component {

  state = {
    pokemon: {}
  }

  componentDidMount() {
    getPokemon(this.props.id).then((response) => {
      this.setState({pokemon: response.data})
    })
  }

  render() {
    const { pokemon } = this.state;

    return (
      <div className="Pokemon">
        {pokemon !== null &&
          <Card style={styles.card}>
            <CardHeader
              title={pokemon.name}
              avatar={pokemon.sprites && pokemon.sprites.front_default}
            />

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
          </Card>
        }
      </div>
    );
  }
}

export default Pokemon
