import { getPokemon, getPokemons } from '../services/pokemon-api'

export const LOADING = 'LOADING'
export const READY = 'READY'
export const FETCHED_POKEMON = 'FETCHED_POKEMON'
export const FETCHED_POKEMON_LIST = 'FETCHED_POKEMON_LIST'

export const loading = () => ({
  type: LOADING
})

export const ready = () => ({
  type: READY
})

export const loadPokemon = (id) => {
  return (dispatch, getState) => {
    dispatch(loading())
    const { pokemons } = getState()

    if (pokemons[id]) {
      // Pokemon exist in store
      dispatch(ready())
    } else {
      // Pokemon doesn't in store, call api
      getPokemon(id).then((response) => {
        dispatch({
          type: FETCHED_POKEMON,
          id: id,
          data: response.data
        })
      })
    }
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
