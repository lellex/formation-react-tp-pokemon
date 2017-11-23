import { connect } from 'react-redux'

import PokemonComponent from './component'
import { loadPokemon } from '../../store/actions'

const mapStateToProps = (state, ownProps) => ({
  id: ownProps.match.params.id,
  pokemon: state.pokemons[ownProps.match.params.id],
  loading: state.loading
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  loadPokemon: (id) => dispatch(loadPokemon(id))
})

const Pokemon = connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonComponent)

export default Pokemon
