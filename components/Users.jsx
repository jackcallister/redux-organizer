import React, { Component, PropTypes } from 'react'

export default class Users extends Component {

  static propTypes = {
    users: PropTypes.object.isRequired,
    removeUser: PropTypes.func.isRequired,
  }

  renderUsers() {
    return this.props.users.map((user) => {
      return (
        <li key={user.id}>
          <p>{user.username}</p>

          <span onClick={(e) => { this.props.removeUser({id}) }}>Remove</span>
        </li>
      )
    })
  }

  render() {
    const users = this.renderUsers()

    return (
      <section>
        <h1>Users</h1>

        <ul>
          {users}
        </ul>
      </section>
    )
  }
}
