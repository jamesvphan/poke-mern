import React, { Component } from 'react'
import axios from 'axios'

class Pokemon extends Component {
  constructor() {
    super()

    this.state = {
      user: ''
    }
  }

  componentWillMount() {
    axios
    .get('http://localhost:3000/api/users/test')
    .then(resp => {
      debugger
      this.setState({
        user: resp.data
      })
    })
    .catch(errors => {
      console.log(errors)
    })
  }

  render() {
    return (
      <div>
        {this.state.user.username}
      </div>
    )
  }
}

export default Pokemon
