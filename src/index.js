// PACKAGE DEPENDENCIES
import React from 'react'
import ReactDOM from 'react-dom'
import createHistory from 'history/createBrowserHistory'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { routerMiddleware } from 'react-router-redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
// FILE DEPENDENCIES
import App from './App'
import Pokemon from './components/pokemon/pokemon.js'
import rootReducer from './reducers/rootReducer.js'
// import './styles/App.css'

const history = createHistory()
const rMiddleware = routerMiddleware(history)

// const initialState = {
//
// }

const store = createStore(
  rootReducer,
  // initialState,
  composeWithDevTools(applyMiddleware(thunk, rMiddleware))
)



ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <div>
        <Route path='/' component={App}></Route>
        <Route path='/api/users/test' component={Pokemon}></Route>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
)
