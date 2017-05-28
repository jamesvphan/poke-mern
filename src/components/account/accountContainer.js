import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Account from './account.js'

class AccountContainer extends Component {
  constructor {
    super()

    this.state = {
      username: '',
      team: []
    }
  }

  componentWillMount() {
    //dispatch action to load current user account information
  }

  render() {
    return (
      <div>
        <Account />
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    account: state.account
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({

  }, dispatch)
}

export default AccountContainer
