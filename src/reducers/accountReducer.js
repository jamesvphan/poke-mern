
export default function accountReducer(state = {
  username: '',
  team: []
}, action) {
  switch(action.type) {
    case 'LOAD_USER':
      return {

      }
    default:
      return state
  }
}
