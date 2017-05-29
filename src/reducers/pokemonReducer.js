
export default function pokemonReducer(state = [], action) {
  switch(action.type) {
    case 'LOAD_POKEMON':
      return {

      }
    case 'ADD_POKEMON':
      return [...state, action.pokemon]
    default:
      return state
  }
}
