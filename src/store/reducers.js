import {
  LOADING,
  READY,
  FETCHED_POKEMON,
  FETCHED_POKEMON_LIST
} from './actions'

const defaultState = {
  loading: false,
  list: [],
  pokemons: {}
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true
      }
    case READY:
      return {
        ...state,
        loading: false
      }
    case FETCHED_POKEMON:
      return {
        ...state,
        loading: false,
        pokemons: {
          ...state.pokemons,
          [action.id]: action.data
        }
      }
    case FETCHED_POKEMON_LIST:
      return {
        ...state,
        loading: false,
        list: action.data
      }
    default:
      return state
  }
}
