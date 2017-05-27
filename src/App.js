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
    let url = 'http://localhost:3000/api/users'
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        this.setState({
          users: [...data]
        })
      })
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
        <ul>
          {
            this.state.users.map((user, index )=>{
              return <li key={index}>{user.username}</li>
            })
          }
        </ul>
      </div>
    )
  }
}

export default App
