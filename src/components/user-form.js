import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeUsername } from '../action-creators'

class UserForm extends Component {
  render() {
    return (
      <div>
        User:{' '}
        <input value={this.props.username} onChange={this.handleUserChange} />
      </div>
    )
  }

  handleUserChange = (event) => this.props.changeUsername(event.target.value)
}

export default connect(
  (state) => ({
    username: state.username
  }),
  (dispatch) => ({
    changeUsername: (username) => dispatch(changeUsername(username))
  })
)(UserForm)
