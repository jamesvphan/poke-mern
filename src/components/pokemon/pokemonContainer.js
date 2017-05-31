import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Pokemon from './pokemon.js'
import { addPokemon } from '../../actions/pokemonActions.js'

class PokemonContainer extends Component {
  constructor() {
    super()

    this.state = {
      pokemonName: ''
    }
    this.handleOnChange = this.handleOnChange.bind(this)
    this.handleAddPokemon = this.handleAddPokemon.bind(this)
  }

  handleAddPokemon(ev) {
    ev.preventDefault()
    if (this.props.team.length === 6) {
      console.log("too many pokemon")
    } else {
      this.props.addPokemon(this.state.pokemonName)
    }
  }

  handleOnChange(ev) {
    let key = ev.target.name
    this.setState({
      [key]: ev.target.value
    })
  }

  render() {
    const pokemon_team = this.props.team.map((pokemon, index) => {
      return <Pokemon pokemon={pokemon} key={index}/>
    })
    return (
      <div className='container'>
        <form onSubmit={this.handleAddPokemon}>
          <input type="text" name="pokemonName" placeholder="Pokemon" onChange={this.handleOnChange}/>
          <button>Find</button>
        </form>
        <div className='row'>
          {pokemon_team}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    team: state.pokemon
  }
}

const mapDispatchToProps = (dispatch) =>{
  return bindActionCreators({
    addPokemon: addPokemon
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonContainer)
