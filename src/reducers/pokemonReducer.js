
export default function pokemonReducer(state = {
  nickname: '',
  species: ''
}, action) {
  switch(action.type) {
    case 'LOAD_POKEMON':
      return {

      }
    default:
      return state
  }
}
