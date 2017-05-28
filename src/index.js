// PACKAGE DEPENDENCIES
import React from 'react'
import ReactDOM from 'react-dom'
import createHistory from 'history/createBrowserHistory'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
// FILE DEPENDENCIES
import App from './App'
import rootReducer from './reducers/rootReducer.js'
// import './styles/App.css'

const history = createHistory()
const rMiddleware =
const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <div>
        <Route path='/' component={App}/>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
)
