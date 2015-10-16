import React, { Component } from 'react'
import { connect } from 'react-redux'

import { removeUser } from '../actions/users'

import Users from './Users'

export function props(store) {
  return {
    users: Object.keys(store.users).map((id) => {
      return {
        id,
        username
      }
    })
  }
}

export function actions(dispatch) {
  removeUser: (id) => { dispatch(removeUser(id)) }
}

class UsersConnector extends Component {

  render() {
    return (
      <Users {...this.props} />
    )
  }
}

export default connect(props, actions)(UsersConnector)
