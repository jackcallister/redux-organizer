import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addUser } from '../actions/users'

import Form from './Form'

export function props(store) {
  return {}
}

export function actions(dispatch) {
  addUser: (payload) => { dispatch(addUser(payload)) }
}

class FormConnector extends Component {

  render() {
    return (
      <Form {...this.props} />
    )
  }
}

export default connect(props, actions)(FormConnector)
