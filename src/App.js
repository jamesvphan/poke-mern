import React, { Component } from 'react'
import { loadAccount } from './actions/accountActions.js'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
import axios from 'axios'

class App extends Component {
  constructor() {
    super()

    this.state = {
      username: '',
      users: [],
      pokemon: '',
      current: ''
    }
    this.handleOnChange = this.handleOnChange.bind(this)
    this.handleOnSubmit = this.handleOnSubmit.bind(this)
    this.handleAddPokemon = this.handleAddPokemon.bind(this)
  }

  componentWillMount() {
    let url = 'http://localhost:3000/api/users/test'
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        this.setState({
          users: data
        })
      })
  }

  handleAddPokemon(ev) {
    ev.preventDefault()
    axios
    .get(`http://pokeapi.co/api/v2/pokemon/${this.state.pokemon}`)
    .then(resp => {
      debugger
      console.log(resp.data)
      this.setState({
        current: resp.data
      })
    })
    .catch(err => {
      console.log(err)
    })
  }

  handleOnChange(ev) {
    let key = ev.target.name
    this.setState({
      [key]: ev.target.value
    })
  }

  handleOnSubmit(ev) {
    ev.preventDefault()
    this.props.loadAccount(this.state.username)
    // let url = 'http://localhost:3000/api/users'
    // let newUser = {
    //   username: this.state.username
    // }
    // let fetchData = {
    //   method: "POST",
    //   body: newUser,
    //   headers: new Headers({
		//     'Content-Type': 'text/json'
	  //   })
    // }
    this.setState({
      id: "",
      username: ""
    })
  }

  render() {
    return (
      <div>
        <Link to='/api/users/test'><button>Back to Notebooks</button></Link>
        <h1>Welcome to Poke-Gotchi!</h1>
        <form onSubmit={this.handleOnSubmit}>
          Username<input type="text" name="username" onChange={this.handleOnChange}/>
          <input type="submit"/>
        </form>
        {this.state.username}
        <form onSubmit={this.handleAddPokemon}>
          <input type="text" name="pokemon" placeholder="Pokemon" onChange={this.handleOnChange}/>
          <button>Find</button>
        </form>
        <ol>
          <li>{this.state.username}</li>
        </ol>
        Found: {this.state.current.name}
        {/* <img alt="clefairy!" src={`https://assets-lmcrhbacy2s.stackpathdns.com/img/pokemon/animated/${this.state.pokemon}.gif`} /> */}
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loadAccount: loadAccount
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(App)
