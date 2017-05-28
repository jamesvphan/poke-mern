// Import all reducers
import { combineReducers } from 'redux'
import accountReducer from './accountReducer'
import pokemonReducer from './pokemonReducer'

export default const rootReducer = combineReducers({
  account: accountReducer,
  pokemon: pokemonReducer
})
