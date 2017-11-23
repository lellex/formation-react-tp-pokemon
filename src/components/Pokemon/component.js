import React, { Component } from 'react'
import {Card, CardHeader, CardText} from 'material-ui/Card'
import Subheader from 'material-ui/Subheader'
import Chip from 'material-ui/Chip'
import CircularProgress from 'material-ui/CircularProgress'

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

class PokemonComponent extends Component {

  state = {
    pokemon: {},
    loading: false
  }

  componentDidMount() {
    this.props.loadPokemon(this.props.id)
  }

  componentWillReceiveProps(nextProps) {
    nextProps.id !== this.props.id && this.props.loadPokemon(nextProps.id)
  }

  render() {
    const { pokemon, loading } = this.props;
    return (
      <Card style={styles.card}>
        <div className="Pokemon">
          {loading ?
            <CircularProgress style={styles.loader} />
          : pokemon &&
            <div>
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
      </Card>
    );
  }
}

export default PokemonComponent
