import { getPokemon, getPokemons } from '../services/pokemon-api'

export const LOADING = 'LOADING'
export const FETCHED_POKEMON = 'FETCHED_POKEMON'
export const FETCHED_POKEMON_LIST = 'FETCHED_POKEMON_LIST'

export const loading = () => ({
  type: LOADING
})

export const loadPokemon = (id) => {
  return dispatch => {
    dispatch(loading())

    getPokemon(id).then((response) => {
      dispatch({
        type: FETCHED_POKEMON,
        id: id,
        data: response.data
      })
    })
  }
}

export const loadPokemonList = () => {
  return dispatch => {
    dispatch(loading())

    getPokemons().then((response) => {
      dispatch({
        type: FETCHED_POKEMON_LIST,
        data: response.data.results
      })
    })
  }
}
