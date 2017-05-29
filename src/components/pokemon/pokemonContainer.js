import React, { Component } from 'react'
import Pokemon from './pokemon.js'

class PokemonContainer extends Component {
  constructor() {
    super()

    this.state = {
      team: [
        {
          name: "bulbsaur"
        }
      ]
    }
  }

  render() {
    const pokemon_team = this.state.team.map((pokemon, index) => {
      return <Pokemon pokemon={pokemon} key={index}/>
    })
    return (
      <div>
        {pokemon_team}
      </div>
    )
  }
}

export default PokemonContainer
