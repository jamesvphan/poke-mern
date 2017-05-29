import axios from 'axios'

const pokeURL = 'http://pokeapi.co/api/v2'

export const addPokemon = (pokemonName) => {
  return(dispatch) => {
    axios
    .get(`${pokeURL}/pokemon/${pokemonName}`)
    .then(resp => {
      dispatch({
        type: 'ADD_POKEMON',
        pokemon: resp.data
      })
    })
    .catch(err => {
      console.log(err)
    })
  }
}
