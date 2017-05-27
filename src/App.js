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
    this.handleOnSubmit = this.handleOnSubmit.bind(this)
  }

  componentWillMount() {
    let url = 'http://localhost:3000/api/users'
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        this.setState({
          users: data
        })
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
    let url = 'http://localhost:3000/api/users'
    let newUser = {
      id: this.state.id,
      username: this.state.username
    }
    let fetchData = {
      method: "POST",
      body: newUser,
      headers: new Headers({
		    'Content-Type': 'text/json'
	    })
    }
    $.ajax({
      type: 'POST', url: '/api/users', contentType: 'application/json',
      data: JSON.stringify(newUser),
      success: function(data) {
        var bug = data;
        // We're advised not to modify the state, it's immutable. So, make a copy.
        var bugsModified = this.state.users.concat(bug);
        this.setState({users: bugsModified});
      }.bind(this),
      error: function(xhr, status, err) {
        // ideally, show error to user.
        console.log("Error adding bug:", err);
      }
    })
    this.setState({
      id: "",
      username: ""
    })
  }

  render() {
    let users = this.state.users.map((user, index)=>{
      return <li key={index}>{user.username}</li>
    })
    return (
      <div>
        <h1>Welcome...</h1>
        <form onSubmit={this.handleOnSubmit}>
        ID: <input type="text" name="id" onChange={this.handleOnChange}/>
        Username<input type="text" name="username" onChange={this.handleOnChange}/>
        <input type="submit"/>
        </form>
        <ol>
          {users}
        </ol>
      </div>
    )
  }
}

export default App
