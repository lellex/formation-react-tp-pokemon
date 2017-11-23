import axios from 'axios';

const URL = 'http://pokeapi.co/api/v2';

export const getPokemons = () => {
  return axios.get(URL + '/pokemon')
}

export const getPokemon = (id) => {
  return axios.get(URL + '/pokemon/' + id)
}
