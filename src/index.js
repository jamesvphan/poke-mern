import React from 'react'
import ReactDOM from 'react-dom'
import createHistory from 'history/createBrowserHistory'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './App'
// import './styles/App.css'

const history = createHistory()

ReactDOM.render(
  <Router history={history}>
    <div>
      <Route path='/' component={App}/>
    </div>
  </Router>,
  document.getElementById('root')
)
