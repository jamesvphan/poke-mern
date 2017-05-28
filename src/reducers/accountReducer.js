
export default function accountReducer(state = {
  username: '',
  team: []
}, action) {
  switch(action.type) {
    case 'LOAD_ACCOUNT':
      debugger
      return Object.assign({}, state, {
        username: action.account.username
      })
    default:
      return state
  }
}
