import React, { Component } from 'react'
import axios from 'axios'

class Pokemon extends Component {

  render() {
    return (
      <div>
        <h1>{this.props.pokemon.name}</h1>
      </div>
    )
  }
}

export default Pokemon
