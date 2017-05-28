import React, { Component } from 'react'
import { loadAccount } from './actions/accountActions.js'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class App extends Component {
  constructor() {
    super()

    this.state = {
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
    // $.ajax({
    //   type: 'POST', url: '/api/users', contentType: 'application/json',
    //   data: JSON.stringify(newUser),
    //   success: function(data) {
    //     var bug = data;
    //     // We're advised not to modify the state, it's immutable. So, make a copy.
    //     var bugsModified = this.state.users.concat(bug);
    //     this.setState({users: bugsModified});
    //   }.bind(this),
    //   error: function(xhr, status, err) {
    //     // ideally, show error to user.
    //     console.log("Error adding bug:", err);
    //   }
    // })
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
        <h1>Welcome to Poke-Gotchi!</h1>
        <form onSubmit={this.handleOnSubmit}>
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

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loadAccount: loadAccount
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(App)
