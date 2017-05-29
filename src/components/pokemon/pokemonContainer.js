import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Pokemon from './pokemon.js'
import { addPokemon } from '../../actions/pokemonActions.js'

class PokemonContainer extends Component {
  constructor() {
    super()

    this.state = {
      pokemonName: "",
      team:
      [{
        name: "bulbsaur"
      }]
    }
    this.handleOnChange = this.handleOnChange.bind(this)
    this.handleAddPokemon = this.handleAddPokemon.bind(this)
  }

  handleAddPokemon(ev) {
    ev.preventDefault()
    this.props.addPokemon(this.state.pokemonName)
  }

  handleOnChange(ev) {
    let key = ev.target.name
    this.setState({
      [key]: ev.target.value
    })
  }

  render() {
    const pokemon_team = this.state.team.map((pokemon, index) => {
      return <Pokemon pokemon={pokemon} key={index}/>
    })
    return (
      <div>
        <form onSubmit={this.handleAddPokemon}>
          <input type="text" name="pokemonName" placeholder="Pokemon" onChange={this.handleOnChange}/>
          <button>Find</button>
        </form>
        {pokemon_team}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    team: state.team
  }
}

const mapDispatchToProps = (dispatch) =>{
  return bindActionCreators({
    addPokemon: addPokemon
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonContainer)
