import React, { Component } from 'react'

class App extends Component {
  constructor() {
    super()

    this.state = {
      id: '',
      username: '',
      users: []
    }
    this.handleOnChange = this.handleOnChange.bind(this)
  }

  componentDidMount() {

  }


  handleOnChange(ev) {
    let key = ev.target.name
    this.setState({
      [key]: ev.target.value
    })
  }

  render() {
    return (
      <div>
        <h1>Welcome...</h1>
        ID: <input type="text" onChange={this.handleOnChange}/>
        Username<input type="text" onChange={this.handleOnChange}/>
        <input type="submit"/>
      </div>
    )
  }
}

export default App
