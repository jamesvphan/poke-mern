import axios from 'axios'

const url = 'http://localhost:3000/api'

export const loadAccount = (username) => {
  return(dispatch) => {
    axios
    .get(`${url}/users`, {
      headers: {username: username}
    })
    .then(resp => {
      debugger
      dispatch({
        type: 'LOAD_ACCOUNT',
        account: resp.data
      })
    })
    .catch(errors => {
      console.log(errors)
    })
  }
}
