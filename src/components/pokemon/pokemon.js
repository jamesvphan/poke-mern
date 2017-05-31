import React, { Component } from 'react'
import axios from 'axios'
import Stats from './stats.js'

class Pokemon extends Component {

  render() {
    return (
      <div className='col-sm-2 col-xs-4'>
        <img src={`https://assets-lmcrhbacy2s.stackpathdns.com/img/pokemon/animated/${this.props.pokemon.name}.gif`} />
        <h1>{this.props.pokemon.name}</h1>
        <Stats stats={this.props.pokemon.stats} />
      </div>
    )
  }
}

export default Pokemon
